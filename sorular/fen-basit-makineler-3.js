// Fen Bilimleri — Basit Makineler: Kademe 1 (Kavrama) yedeği (fen-bm-126 … fen-bm-175)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["basit-makineler"] = window.LGS_BANK["basit-makineler"] || []).push(
{
  id: "fen-bm-126",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Bütün basit makineler için aşağıdakilerden hangisi geçerlidir?**",
  gorsel: null,
  secenekler: ["Hepsi işten kazanç sağlar.","Hiçbiri işten kazanç sağlamaz.","Her zaman kuvvetten kazandırırlar.","Kuvvetten kazandırıp yoldan da kazandırırlar."],
  dogru: 1,
  hatalar: ["İşten kazanç sanma: kuvvet azalırken yol uzar, iş aynı kalır.",null,"Sabit makara gibi bazı makineler kuvvetten kazandırmaz; yalnızca yönü değiştirir.","İkisi birden olmaz: bir basit makine kuvvetten kazandırıyorsa yoldan kaybettirir; hem kuvvetten hem yoldan kazandıran basit makine yoktur."],
  aciklama: `Basit makine, kuvvetin büyüklüğünü ya da yönünü değiştirerek işi kolaylaştıran araçtır.
Adım 1: Basit makineler enerji üretmez; yalnızca kuvveti işimize yarayacak biçime sokar.
Adım 2: Sürtünme yokken aynı yükü aynı yüksekliğe çıkarmak için yapılan iş, makine kullansan da kullanmasan da değişmez. Yani işten kazanç yoktur.
Adım 3: Kuvvetten kazanç her makinede yoktur (sabit makara), yoldan kazanç ise hiçbirinde yoktur.
Sık yapılan hata: "Kolaylaştı" demek ile "iş azaldı" demek aynı şey değildir.
Cevap B.`
},
{
  id: "fen-bm-127",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Ekseni tavana bağlı olup yükle birlikte yükselip alçalmayan makara aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Hareketli makara",
    "Palanga",
    "Çıkrık",
    "Sabit makara"
  ],
  dogru: 3,
  hatalar: [
    "Hareketli makara yükle birlikte hareket eder; ekseni sabit değildir.",
    "Palangada yükle birlikte hareket eden bir makara da bulunur.",
    "Çıkrık makara değildir; ip, kolla çevrilen bir silindire sarılır.",
    null
  ],
  aciklama: `Makaralar, eksenlerinin yerine göre ayrılır.
Adım 1: Ekseni bir yere bağlı olup yerinden oynamayan makara sabit makaradır.
Adım 2: Yükle birlikte yükselip alçalan makara hareketli makaradır.
Adım 3: Palangada ikisi birlikte bulunur; çıkrık ise makara değil, kollu bir silindirdir.
Sağlama: Sabit makarada yalnızca ip hareket eder, makaranın kendisi yerinde kalır.
Cevap D.`
},
{
  id: "fen-bm-128",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Liman işçisi Rıza, tek bir hareketli makarayla bir kasayı yukarı çekiyor. Sürtünmeler ve makara ağırlığı önemsizdir.
**Buna göre Rıza'nın uyguladığı kuvvet ve bunun nedeni için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kasanın ağırlığından küçüktür; çünkü kasa birden fazla ip parçasıyla taşınır.",
    "Kasanın ağırlığına eşittir; çünkü makara yalnızca ipin yönünü değiştirir.",
    "Kasanın ağırlığından küçüktür; çünkü ip ucu kasayla aynı yolu alır.",
    "Kasanın ağırlığından büyüktür; çünkü makara kasayla birlikte yükselir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sabit makarayı hareketli sanma: sabit makarada kuvvet ağırlığa eşittir, hareketli makarada küçüktür.",
    "Yoldan kazanç sanma: kuvvet küçüldüğü için ip ucu kasadan daha uzun yol alır; kasayla aynı yolu almaz.",
    "Kuvvetin artacağını sanma: makaranın kasayla birlikte yükselmesi kuvveti büyütmez, hareketli makara kuvveti küçültür."
  ],
  aciklama: `Hareketli makara yükle birlikte hareket eder ve kuvvetten kazandırır.
Adım 1: Makara kasayla birlikte yükselir; bu yüzden kasa, ipin birden fazla parçasıyla taşınır.
Adım 2: Yük birden fazla ip parçasına paylaştığı için ipi çeken kuvvet kasanın ağırlığından küçük olur.
Sık yapılan hata: Makaranın kasayla birlikte yükselmesini kuvveti büyüten bir durum sanmak. Bu durum tam tersine kuvvetten kazanç sağlayan durumdur.
Cevap A.`
},
{
  id: "fen-bm-129",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Birbirine geçen dişleri sayesinde hareketi ve dönme yönünü bir çarktan diğerine aktaran düzenek aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Kaldıraç",
    "Çıkrık",
    "Dişli çark",
    "Eğik düzlem"
  ],
  dogru: 2,
  hatalar: [
    "Kaldıraç, bir destek noktası etrafında dönen çubuktur; dişleri yoktur.",
    "Çıkrıkta ip, kolla çevrilen bir silindire sarılır; dişler birbirine geçmez.",
    null,
    "Eğik düzlem, eğimli bir yüzeydir; dönen bir çark değildir."
  ],
  aciklama: `Dişli çark, dişleri birbirine geçen çarklardan oluşur ve hareketi aktarır.
Adım 1: Dişli çarklar, vida ve kasnaklar da birer basit makinedir; bu konuda ayrıntıya girilmez.
Adım 2: Dişleri birbirine geçen çarklar hareketi ve dönme yönünü aktarır (vites kutusu, el matkabı).
Adım 3: Kaldıraç çubuktur, çıkrık kollu silindirdir, eğik düzlem eğimli yüzeydir; hiçbirinde birbirine geçen dişler yoktur.
Cevap C.`
},
{
  id: "fen-bm-130",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Çocuk parkındaki kaydırak hangi basit makinenin uygulamasıdır?**",
  gorsel: null,
  secenekler: [
    "Kaldıraç",
    "Çıkrık",
    "Eğik düzlem",
    "Sabit makara"
  ],
  dogru: 2,
  hatalar: [
    "Kaldıraçta destek noktası etrafında dönen bir çubuk vardır; kaydırakta çubuk yoktur.",
    "Çıkrıkta ip, kolla çevrilen bir silindire sarılır; kaydırakta dönen silindir yoktur.",
    null,
    "Sabit makara, ipin üzerinden geçtiği tekerdir; kaydırakta ip ve teker yoktur."
  ],
  aciklama: `Eğimli bir yüzey boyunca hareket ederek yükselmeyi ya da alçalmayı sağlayan düzenek eğik düzlemdir.
Adım 1: Kaydırak, yüksek bir noktayla alçak bir noktayı eğimli bir yüzeyle bağlar.
Adım 2: Dönen bir çubuk (kaldıraç), kolla çevrilen silindir (çıkrık) ya da ipin geçtiği teker (makara) yoktur.
Sağlama: Rampa ve kaydırak aynı basit makinenin örnekleridir.
Cevap C.`
},
{
  id: "fen-bm-131",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi kuvvetten kazanç __sağlamaz__?**",
  gorsel: null,
  secenekler: [
    "Ateşten köz tutan maşa",
    "Fındığı kıran fındık kıracağı",
    "Kova çeken uzun kollu çıkrık",
    "Az eğimli ve uzun bir rampa"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Fındık kıracağında yük ortadadır; kuvvet kolu uzundur ve kuvvetten kazanç vardır.",
    "Çıkrıkta kol uzadıkça gereken kuvvet azalır; kuvvetten kazanç vardır.",
    "Uzun ve az eğimli rampada gereken kuvvet azalır; kuvvetten kazanç vardır."
  ],
  aciklama: `Kuvvetten kazanç, kuvvet kolu uzun olan ya da eğimi azaltılmış düzeneklerde vardır.
Adım 1: Maşada kuvvet, birleşik uç (destek) ile köz (yük) arasında uygulanır. Kuvvet kolu yük kolundan kısadır; kuvvetten kazanç yoktur.
Adım 2: Fındık kıracağında yük ortadadır ve kuvvet kolu uzundur; uzun kollu çıkrıkta kol uzundur; az eğimli rampada eğim azdır. Bu üçünde de gereken kuvvet küçülür.
Sık yapılan hata: Her kaldıracın kuvvetten kazandırdığını sanmak. Ortadaki noktaya bak: kuvvet ortadaysa kazanç olmaz.
Cevap A.`
},
{
  id: "fen-bm-132",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi basit makine __değildir__?**",
  gorsel: null,
  secenekler: [
    "Tahterevalli",
    "Rampa",
    "Kuyu çıkrığı",
    "Elektrik motoru"
  ],
  dogru: 3,
  hatalar: [
    "Tahterevalli, destek noktası etrafında dönen bir çubuktur; kaldıraçtır ve basit makinedir.",
    "Rampa eğik düzlemdir; basit makinedir.",
    "Kuyu çıkrığı çıkrıktır; kolla çevrilen silindire ip sarılır ve basit makinedir.",
    null
  ],
  aciklama: `Basit makine kuvvetin büyüklüğünü ya da yönünü değiştirerek işi kolaylaştırır; enerji sağlamaz ya da dönüştürmez.
Adım 1: Tahterevalli kaldıraçtır, rampa eğik düzlemdir, kuyu çıkrığı çıkrıktır; üçü de basit makinedir.
Adım 2: Elektrik motoru elektrik enerjisini dönme hareketine çevirir; enerji dönüştürür. Kuvvetin büyüklüğünü ya da yönünü değiştiren bir araç değildir, basit makine sayılmaz.
Sağlama: Elektrik motoru, türbin ve pil basit makine sayılmaz.
Cevap D.`
},
{
  id: "fen-bm-133",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Çiftçi Fadime, römorka saman balyası yüklediği rampanın eğimini azaltıyor; balyayı yine aynı yüksekliğe çıkarıyor. Sürtünmeler önemsizdir.
**Buna göre balyayı çıkarmak için gereken kuvvet ve alınan yol nasıl değişir?**`,
  gorsel: null,
  secenekler: [
    "Kuvvet azalır, yol kısalır.",
    "Kuvvet azalır, yol uzar.",
    "Kuvvet artar, yol uzar.",
    "Kuvvet artar, yol kısalır."
  ],
  dogru: 1,
  hatalar: [
    "Yoldan kazanç sanma: rampanın eğimi azalınca rampa uzar, yol kısalmaz.",
    null,
    "Eğimi ters yorumlama: eğim azaldıkça gereken kuvvet artmaz, azalır.",
    "Eğimi ters yorumlama: eğim azalınca rampa uzar ve kuvvet küçülür."
  ],
  aciklama: `Eğik düzlemde eğim azaldıkça gereken kuvvet azalır, alınan yol uzar.
Adım 1: Aynı yüksekliğe çıkıldığı için eğimi azaltmak rampanın boyunu uzatmak demektir.
Adım 2: Uzayan rampada kuvvet küçülür; bunun bedeli daha uzun yol almaktır.
Sağlama: Dik yamaç yerine uzun, hafif eğimli patikayı seçmek de aynı mantıktır.
Cevap B.`
},
{
  id: "fen-bm-134",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi çıkrık örneğidir?**",
  gorsel: null,
  secenekler: [
    "Şişe kapağını açan küçük düzenek",
    "Perdeyi açıp kapatan ip makarası",
    "Kumaşı kesen büyük bir makas",
    "Kuyudan su çeken kollu düzenek"
  ],
  dogru: 3,
  hatalar: [
    "Şişe kapağı açacağı kaldıraçtır; kolla çevrilen bir silindiri yoktur.",
    "Perde ipinin geçtiği makara sabit makaradır.",
    "Makas, destek noktası ortada olan bir kaldıraçtır.",
    null
  ],
  aciklama: `Çıkrık, kolla çevrilen bir silindire ipin sarıldığı düzenektir.
Adım 1: Şişe kapağı açacağı ve makas kaldıraçtır.
Adım 2: Perde ipinin geçtiği makara sabit makaradır; ip makaranın üzerinden geçer, sarılmaz.
Adım 3: Kuyudan su çeken kollu düzenekte kolla silindir çevrilir ve ip silindire sarılır; bu bir çıkrıktır.
Cevap D.`
},
{
  id: "fen-bm-135",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Sulama kuyusundan kova çeken çiftçi Hasan, çıkrığın kolunu kısaltıyor. Silindir ve kova aynı kalıyor.
**Buna göre kovayı çekmek için gereken kuvvet nasıl değişir ve nedeni nedir?**`,
  gorsel: null,
  secenekler: [
    "Azalır; çünkü kol kısalmıştır.",
    "Değişmez; çünkü kol uzunluğu etkisizdir.",
    "Artar; çünkü kol kısalmıştır.",
    "Artar; çünkü ip uzamıştır."
  ],
  dogru: 2,
  hatalar: [
    "Kol kısalınca kolay olur sanma: kol uzadıkça kuvvet azalır, kısalınca artar.",
    "Kol uzunluğu çıkrıkta gereken kuvveti belirleyen etkenlerden biridir.",
    null,
    "Kuvvetin artış nedeni ip değil, kolun kısalmasıdır; ip uzunluğu kuvveti değiştirmez."
  ],
  aciklama: `Çıkrıkta kol uzadıkça gereken kuvvet azalır.
Adım 1: Kol, çıkrığın kuvvetten kazandırmasını sağlayan kısımdır.
Adım 2: Kol kısalırsa kuvvetten kazanç azalır; aynı kovayı çekmek için daha çok kuvvet gerekir.
Sağlama: Sıkışmış bir musluğu açmak için uzun saplı bir anahtar kullanılması da aynı mantıktır.
Cevap C.`
},
{
  id: "fen-bm-136",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Şekildeki kaldıraçta kuvvet kolu aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 170"><line x1="60" y1="90" x2="420" y2="90" stroke="currentColor" stroke-width="6"/><polygon points="180,93 166,122 194,122" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="44" y="62" width="48" height="26" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="68" y="80" font-size="14" text-anchor="middle" fill="currentColor">Yük</text><line x1="420" y1="40" x2="420" y2="70" stroke="var(--vurgu)" stroke-width="3"/><polygon points="420,84 411,66 429,66" fill="var(--vurgu)"/><text x="438" y="62" font-size="16" fill="var(--vurgu)">F</text><g font-size="16" text-anchor="middle" fill="currentColor"><text x="60" y="150">K</text><text x="180" y="150">L</text><text x="420" y="150">M</text></g></svg>`,
  secenekler: [
    "LM uzaklığı",
    "KL uzaklığı",
    "KM uzaklığı",
    "L noktası"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yük kolunu seçtin: KL, destek ile yük arasındaki uzaklıktır.",
    "KM çubuğun tamamıdır; kuvvet kolu yalnızca destek ile kuvvet arasındaki kısımdır.",
    "L destek noktasıdır; bir nokta uzaklık değildir, kol bir uzaklıktır."
  ],
  aciklama: `Kuvvet kolu, destek noktası ile kuvvetin uygulandığı nokta arasındaki uzaklıktır.
Adım 1: Şekilde yük K'dedir, destek noktası L'dedir, kuvvet M'den uygulanıyor.
Adım 2: Destek (L) ile kuvvet (M) arasındaki uzaklık LM'dir; bu kuvvet koludur.
Adım 3: KL ise destek ile yük arasındaki yük koludur.
Sağlama: Burada LM, KL'den uzun olduğu için kuvvetten kazanç vardır.
Cevap A.`
},
{
  id: "fen-bm-137",
  kazanim: "F.8.5.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Çiftçi Rahmi, ağır süt bidonlarını 80 cm yüksekliğindeki depo girişine çıkarmak için bir düzenek tasarlıyor ve bidonları az kuvvetle çıkarmak istiyor.
**Rahmi'nin tasarımı için aşağıdakilerden hangisi en uygundur?**`,
  gorsel: null,
  secenekler: [
    "Kısa ve dik bir rampa",
    "Uzun ve az eğimli bir rampa",
    "Girişin üstüne bağlanmış sabit makara",
    "Kolu kısa bir çıkrık"
  ],
  dogru: 1,
  hatalar: [
    "Eğimi ters yorumlama: rampa kısa ve dik olursa gereken kuvvet artar.",
    null,
    "Sabit makara yalnızca yönü değiştirir; kuvvetten kazandırmaz.",
    "Çıkrıkta kol kısaldıkça kuvvet artar; kuvvetten kazanç azalır."
  ],
  aciklama: `Önce istenen kolaylığı belirle, sonra makineyi seç: burada amaç kuvveti azaltmak.
Adım 1: Eğik düzlemde eğim azaldıkça gereken kuvvet azalır; bu yüzden rampa uzun ve az eğimli olmalıdır.
Adım 2: Sabit makara kuvveti azaltmaz; kolu kısa çıkrık da kuvvetten kazancı azaltır.
Sağlama: Rampa uzayınca bidon daha çok yol alır; kuvvet kazancının bedeli budur.
Cevap B.`
},
{
  id: "fen-bm-138",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Şekildeki makara hangi türdür?**",
  gorsel: `<svg viewBox="0 0 300 220"><line x1="70" y1="20" x2="150" y2="20" stroke="currentColor" stroke-width="5"/><path d="M130 20 L130 120 A20 20 0 0 0 170 120 L170 58" stroke="currentColor" stroke-width="3" fill="none"/><circle cx="150" cy="120" r="20" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><circle cx="150" cy="120" r="4" fill="currentColor"/><line x1="150" y1="140" x2="150" y2="165" stroke="currentColor" stroke-width="3"/><rect x="125" y="165" width="50" height="36" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="150" y="189" font-size="14" text-anchor="middle" fill="currentColor">Yük</text><polygon points="170,40 162,58 178,58" fill="var(--vurgu)"/><text x="186" y="52" font-size="16" fill="var(--vurgu)">F</text></svg>`,
  secenekler: [
    "Tek sabit makara",
    "Tek hareketli makara",
    "Palanga düzeneği",
    "Kollu çıkrık düzeneği"
  ],
  dogru: 1,
  hatalar: [
    "Sabit makaranın ekseni yerinde durur; burada makara yükle birlikte yükselir.",
    null,
    "Palanga, sabit ve hareketli makaranın birlikte kullanılmasıdır; şekilde tek makara var.",
    "Çıkrıkta ip, kolla çevrilen silindire sarılır; şekilde kol ve silindir yoktur."
  ],
  aciklama: `Makaranın türünü eksenine bakarak bulursun.
Adım 1: İpin bir ucu tavana bağlıdır, öbür ucu yukarı çekiliyor.
Adım 2: Makara yüke bağlıdır ve yükle birlikte yükselecektir; ekseni sabit değildir.
Adım 3: Eksenin yeri değişen makara hareketli makaradır.
Sağlama: Tek makara olduğu için palanga değildir; kol ve silindir olmadığı için çıkrık da değildir.
Cevap B.`
},
{
  id: "fen-bm-139",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Kuvvet kolu yük kolundan uzun olan bir kaldıraçta yük dengelenirken aşağıdakilerden hangisi gerçekleşir?**",
  gorsel: null,
  secenekler: [
    "Kuvvet büyüktür; kuvvetten kazanç sağlanmaz.",
    "Kuvvet yüke eşittir; kuvvetten kazanç sağlanmaz.",
    "Kuvvet büyüktür; kuvvetten kazanç sağlanır.",
    "Kuvvet küçüktür; kuvvetten kazanç sağlanır."
  ],
  dogru: 3,
  hatalar: [
    "Kolları ters yorumlama: kuvvet kolu uzunsa kuvvet büyümez, küçülür.",
    "Kuvvet ancak iki kol eşitse yüke eşit olur; burada kuvvet kolu uzundur.",
    "Büyük kuvvet kazanç demek değildir; kuvvet büyükse kazanç yoktur.",
    null
  ],
  aciklama: `Kaldıraçta kuvvet kolu uzadıkça gereken kuvvet azalır.
Adım 1: Kuvvet kolu yük kolundan uzunsa yükü dengelemek için yükün ağırlığından küçük bir kuvvet yeter.
Adım 2: Kuvvet küçük olduğu için kuvvetten kazanç vardır; bedeli, kuvvetin uygulandığı noktanın daha uzun yol almasıdır.
Sağlama: İki kol eşit olsaydı kuvvet yüke eşit olurdu ve kazanç olmazdı.
Cevap D.`
},
{
  id: "fen-bm-140",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir aracın direksiyon simidinin çapı büyütülüyor.
**Direksiyonu çevirmek için aşağıdakilerden hangisi geçerli olur?**`,
  gorsel: null,
  secenekler: [
    "Kolaylaşır; çünkü kuvvetten kazanç artar.",
    "Zorlaşır; çünkü kuvvetten kazanç azalır.",
    "Kolaylaşır; çünkü işten kazanç sağlanır.",
    "Değişmez; çünkü çap kuvveti etkilemez."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Çapı ters yorumlama: çap büyüdükçe kuvvetten kazanç artar, azalmaz.",
    "İşten kazanç sanma: kolaylık kuvvetin küçülmesindendir; yapılan iş azalmaz.",
    "Direksiyon bir çıkrık gibi çalışır; çap, kolun uzunluğu gibi kuvveti etkiler."
  ],
  aciklama: `Direksiyon simidi bir çıkrık gibi çalışır; çapı kolun uzunluğu gibi etki eder.
Adım 1: Çıkrıkta kol uzadıkça gereken kuvvet azalır.
Adım 2: Simidin çapı büyüdüğünde kuvvet kolu uzar; direksiyonu çevirmek için daha az kuvvet gerekir, yani kuvvetten kazanç artar.
Sık yapılan hata: Kolaylaşmak iş azalmış demek değildir; iş değişmez, yalnızca kuvvet küçülür ve elin aldığı yol artar.
Cevap A.`
},
{
  id: "fen-bm-141",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki araçlardan hangisinde destek noktası, yük ile kuvvet noktasının arasındadır?**",
  gorsel: null,
  secenekler: [
    "Cımbız",
    "Olta",
    "Pense",
    "Fındık kıracağı"
  ],
  dogru: 2,
  hatalar: [
    "Cımbızda destek birleşik uçtadır; kuvvet ortada uygulanır.",
    "Oltada kuvvet, destek ile yük arasında uygulanır.",
    null,
    "Fındık kıracağında yük (fındık) ortadadır."
  ],
  aciklama: `Kaldıraçlar, ortada hangi nokta bulunduğuna göre ayrılır.
Adım 1: Destek ortadaysa araç makas, pense, tahterevalli ya da levye gibidir.
Adım 2: Yük ortadaysa fındık kıracağı, el arabası gibidir; kuvvet ortadaysa cımbız, olta, maşa, kürek gibidir.
Adım 3: Seçeneklerden yalnızca pense destek ortada olan araçtır.
Cevap C.`
},
{
  id: "fen-bm-142",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Depo çalışanı Cemil, aynı kutuyu K ve L rampalarının alt ucundan üst ucuna rampa boyunca sabit hızla itiyor. İki rampanın boyu eşittir; K'nin yüksekliği L'ninkinden fazladır. Sürtünmeler önemsizdir.
**Buna göre kutunun iki rampada aldığı yol için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "K'de daha uzundur; çünkü K daha diktir.",
    "L'de daha uzundur; çünkü L'de kuvvet daha küçüktür.",
    "K'de daha kısadır; çünkü K'nin yüksekliği fazladır.",
    "İki rampada da eşittir; çünkü rampa boyları eşittir."
  ],
  dogru: 3,
  hatalar: [
    "Dikliği yolla karıştırma: yol rampa boyuna bağlıdır, boylar eşittir.",
    "\"Kuvvet azalınca yol uzar\" kuralı aynı yüksekliğe çıkan rampalar içindir; burada yükseklikler farklı, boylar eşittir.",
    "Yüksekliği yolla karıştırma: kutu rampa boyunca ilerler, yüksekliğe değil boya bakılır.",
    null
  ],
  aciklama: `Eğik düzlemde cisim rampa boyunca ilerler; aldığı yol rampa boyuna eşittir.
Adım 1: İki rampanın boyu eşittir; kutu ikisinde de aynı uzunluktaki yolu alır.
Adım 2: K'nin yüksekliği fazla olduğundan K daha diktir ve K'de gereken kuvvet daha büyüktür; ama bu fark yolu değiştirmez.
Adım 3: "Kuvvet azalınca yol uzar" kuralı, aynı yüksekliğe boyu farklı rampalarla çıkarken geçerlidir.
Sık yapılan hata: Kuvvetin farklı olmasından yolun da farklı olacağını sanmak.
Cevap D.`
},
{
  id: "fen-bm-143",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Kayışla birbirine bağlanıp hareketi aktaran kasnaklar için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Basit makinedir; işten kazanç sağlamaz.",
    "Basit makinedir; işten kazanç sağlar.",
    "Basit makine değildir; yalnızca motorlarda kullanılır.",
    "Basit makine değildir; yalnızca dişli çarklar basit makinedir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kasnaklar basit makinedir ama hiçbir basit makine işten kazanç sağlamaz.",
    "Kasnaklar motorlara özgü değildir; basit makine olarak kabul edilir.",
    "Dişli çarkların yanında vida ve kasnaklar da birer basit makinedir."
  ],
  aciklama: `Dişli çarklar, vida ve kasnaklar da birer basit makine olarak kabul edilir; bu konuda ayrıntıya girilmez.
Adım 1: Kasnak, kayışla bağlanan tekerlerden oluşur ve hareketi bir yerden başka yere aktarır (motor kayışı).
Adım 2: Diğer basit makineler gibi kasnakta da yapılan iş azalmaz; işten kazanç yoktur.
Sık yapılan hata: Yalnızca makara, kaldıraç ve rampayı basit makine saymak.
Cevap A.`
},
{
  id: "fen-bm-144",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki eşleştirmelerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Makas – Eğik düzlem",
    "Rampa – Eğik düzlem",
    "Cımbız – Çıkrık",
    "Tahterevalli – Palanga"
  ],
  dogru: 1,
  hatalar: [
    "Makas, destek ortada olan bir kaldıraçtır; eğimli yüzey yoktur.",
    null,
    "Cımbız kaldıraçtır; kolla çevrilen silindire sarılan ip yoktur.",
    "Tahterevalli kaldıraçtır; palanga ise makaralardan oluşur."
  ],
  aciklama: `Aracı doğru basit makineyle eşleştirmek için çalışma biçimine bak.
Adım 1: Dönen çubuk varsa kaldıraç düşün: makas, cımbız ve tahterevalli kaldıraçtır.
Adım 2: Eğimli yüzey varsa eğik düzlem düşün: rampa buna girer.
Adım 3: Tahterevalli kaldıraçtır; palanga makaralardan oluşur, bu eşleşme de yanlıştır.
Cevap B.`
},
{
  id: "fen-bm-145",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Mert, kutuyu rampadan çıkardıktan sonra arkadaşlarına bir şeyler söylüyor. Sürtünmeler önemsizdir.
**Mert'in söylediklerinden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kutu hafifledi, bu yüzden rampadan kolayca çıktı.",
    "Rampa kullandığım için yaptığım iş epeyce azaldı.",
    "Kuvvetim azaldı ama daha uzun yol aldım.",
    "Rampa sayesinde hem kuvvetim hem de yolum azaldı."
  ],
  dogru: 2,
  hatalar: [
    "Kutunun ağırlığı değişmez; yalnızca uygulanan kuvvet küçülür.",
    "İşten kazanç sanma: rampa kuvveti azaltır ama iş aynı kalır.",
    null,
    "Hem kuvvetten hem yoldan kazanç olmaz; kuvvet azalırken yol uzar."
  ],
  aciklama: `Rampa kuvvetten kazandırır, bedelini yol uzatarak alır.
Adım 1: Kutunun ağırlığı rampa kullanılsa da değişmez; küçülen şey uygulanan kuvvettir.
Adım 2: Kuvvet küçülünce kutu daha uzun yol alır.
Adım 3: İş, kuvvet ile yolun birlikte sonucudur ve değişmez; "iş azaldı" demek yanlıştır.
Cevap C.`
},
{
  id: "fen-bm-146",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Tersane işçisi Selçuk, ağır bir motoru yukarı çıkarırken hem az kuvvet uygulamak hem de ipi aşağı doğru çekmek istiyor.
**Selçuk hangi düzeneği kullanmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Palanga",
    "Çıkrık",
    "Eğik düzlem",
    "Tek sabit makara"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Çıkrıkta ip kolla çevrilen silindire sarılır; ipi aşağı çekme isteğini karşılamaz.",
    "Eğik düzlemde ip çekilmez; yük eğimli yüzeyde ilerler.",
    "Tek sabit makara yönü değiştirir ama kuvvetten kazandırmaz."
  ],
  aciklama: `Palanga, sabit ve hareketli makaraların birlikte kullanıldığı düzenektir.
Adım 1: Hareketli makara kuvvetten kazandırır, yükü taşıyan ip parçası sayısı arttıkça kuvvet azalır.
Adım 2: Sabit makara ipin yönünü değiştirir; böylece ipi aşağı çekebilirsin.
Adım 3: İki istek de ancak ikisi birlikteyken karşılanır.
Cevap A.`
},
{
  id: "fen-bm-147",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bahçedeki ağaç dalına bağlanmış bir sabit makaradan geçen iple bir sepet yukarı çekiliyor. Sürtünmeler ve makara ağırlığı önemsizdir.
**Uygulanan kuvvet sepetin ağırlığıyla karşılaştırıldığında aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Küçüktür; çünkü makara kuvvetten kazandırır.",
    "Büyüktür; çünkü yalnızca ipin yönü değişir.",
    "Küçüktür; çünkü yalnızca yol kısalır.",
    "Eşittir; çünkü yalnızca ipin yönü değişir."
  ],
  dogru: 3,
  hatalar: [
    "Sabit makarayı kuvvet kazandıran sanma: sabit makarada kuvvet ağırlığa eşittir.",
    "Yön değişimi kuvveti büyütmez; sürtünme yokken kuvvet ağırlığa eşit kalır.",
    "Sabit makarada yoldan da kazanç yoktur; ip ucu sepetle aynı yolu alır.",
    null
  ],
  aciklama: `Sabit makara yalnızca kuvvetin yönünü değiştirir.
Adım 1: Makara yerinden oynamaz; ip boyunca kuvvet aynıdır (sürtünme ve makara ağırlığı yok).
Adım 2: Bu yüzden uygulanan kuvvet sepetin ağırlığına eşittir; kuvvet büyümez, küçülmez.
Adım 3: İp ucunun yolu da sepetin çıktığı yola eşittir.
Sağlama: Kolaylık yalnızca ipi aşağı çekerek yukarı kaldırabilmendir.
Cevap D.`
},
{
  id: "fen-bm-148",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Mehmet, tek tekerlekli el arabasını kolların ucundan tutarak kaldırıyor; tekerlek destek noktasıdır. Mehmet elini kollar boyunca tekerleğe doğru kaydırıyor.
**Arabayı kaldırmak için uygulaması gereken kuvvet nasıl değişir ve nedeni nedir?**`,
  gorsel: null,
  secenekler: [
    "Azalır; çünkü kuvvet kolu kısalır.",
    "Artar; çünkü kuvvet kolu kısalır.",
    "Azalır; çünkü yük kolu kısalır.",
    "Değişmez; çünkü yük aynıdır."
  ],
  dogru: 1,
  hatalar: [
    "Elini desteğe yaklaştırınca kolaylaşır sanma: kuvvet kolu kısalır ve gereken kuvvet artar.",
    null,
    "Yük kolu değişmez; elin yer değiştirmesi kuvvet kolunu kısaltır.",
    "Yük aynı olsa da kuvvet kolu değişince gereken kuvvet değişir."
  ],
  aciklama: `Kaldıraçta kuvvet kolu kısaldıkça gereken kuvvet artar.
Adım 1: Kuvvet kolu, destek (tekerlek) ile elin tuttuğu nokta arasındaki uzaklıktır.
Adım 2: Mehmet elini tekerleğe yaklaştırınca bu uzaklık kısalır; yük kolu ise değişmez.
Adım 3: Kuvvet kolu kısalınca kuvvetten kazanç azalır, gereken kuvvet artar.
Sağlama: Kapıyı menteşeye yakın yerinden itmek de zordur.
Cevap B.`
},
{
  id: "fen-bm-149",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Tarla sahibi Osman, bir ucu kirişe bağlı ipi tek bir hareketli makaradan geçirerek kovayı yukarı çıkarıyor.
**Osman ipi hangi yönde çekmelidir ve neden?**`,
  gorsel: null,
  secenekler: [
    "Aşağı; çünkü hareketli makara yönü değiştirir.",
    "Aşağı; çünkü sabit makara gibi çalışır.",
    "Yukarı; çünkü hareketli makara yönü değiştirmez.",
    "Yukarı; çünkü hareketli makara yalnızca yoldan kazandırır."
  ],
  dogru: 2,
  hatalar: [
    "Hareketli makarayı yön değiştirici sanma: tek başına kullanılan hareketli makarada ip yukarı çekilir.",
    "Hareketli makara sabit makara gibi çalışmaz; yükle birlikte hareket eder.",
    null,
    "Hareketli makara yoldan kazandırmaz; yol kaybettirir, kuvvetten kazandırır."
  ],
  aciklama: `Tek başına kullanılan hareketli makara kuvvetin yönünü değiştirmez.
Adım 1: İpin bir ucu kirişe bağlıdır; makara kovayla birlikte yükselir.
Adım 2: Kovayı yukarı çıkarmak için ipin serbest ucunu da yukarı çekersin.
Adım 3: İpi aşağı çekmek istiyorsan hareketli makaraya bir sabit makara eklemen gerekir.
Cevap C.`
},
{
  id: "fen-bm-150",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir çiftlikte aynı saman balyası, aynı yüksekliğe K ve L rampalarıyla sabit hızla çıkarılıyor. Sürtünmeler önemsizdir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 600 190"><line x1="10" y1="170" x2="590" y2="170" stroke="currentColor" stroke-width="3"/><polygon points="20,170 150,170 150,95" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><polygon points="230,170 520,170 520,95" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><g font-size="16" fill="currentColor"><text x="96" y="110">K</text><text x="330" y="118">L</text></g><g font-size="16" fill="var(--vurgu)"><text x="24" y="146">3 m</text><text x="250" y="150">6 m</text></g><g font-size="16" fill="currentColor"><text x="156" y="138">1,5 m</text><text x="526" y="138">1,5 m</text></g></svg>`,
  secenekler: [
    "L'de gereken kuvvet daha küçüktür; L'de yol daha uzundur.",
    "L'de gereken kuvvet daha küçüktür; L'de yol daha kısadır.",
    "K'de gereken kuvvet daha küçüktür; K'de yol daha kısadır.",
    "İki rampada da kuvvet ve yol eşittir; çünkü yükseklik aynıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yoldan kazanç sanma: az eğimli (uzun) rampada kuvvet küçülür ama yol kısalmaz, uzar.",
    "Eğimi ters yorumlama: kısa ve dik K rampasında kuvvet daha büyüktür.",
    "Yükseklik aynı olsa da rampa boyu farklıdır; kuvvet ve yol rampa boyuna göre değişir."
  ],
  aciklama: `Aynı yüksekliğe çıkarken eğim azaldıkça kuvvet azalır, yol uzar.
Adım 1: Şekle göre yükseklik ikisinde de 1,5 m'dir. L rampasının boyu 6 m, K rampasının boyu 3 m'dir; L daha az eğimlidir.
Adım 2: Az eğimli L rampasında gereken kuvvet daha küçüktür.
Adım 3: Kuvvet kazancının bedeli yol kaybıdır; balya L'de daha uzun yol alır.
Sağlama: Hem küçük kuvvet hem kısa yol veren bir rampa yoktur.
Cevap A.`
},
{
  id: "fen-bm-151",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Fen laboratuvarında bir sabit makara, kolu silindirden uzun bir çıkrık ve bir rampa inceleniyor. Sürtünmeler önemsizdir.
**Buna göre aşağıdaki ifadelerden hangileri doğrudur?**
I. Sabit makara kuvvetten kazandırır.
II. Çıkrıkta kolun ucu, yükün çıktığı yoldan daha uzun yol alır.
III. Üçü de işten kazanç sağlamaz.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "I yanlıştır: sabit makara yalnızca yönü değiştirir. II ve III ise doğrudur.",
    "III'ü yok sayma: hiçbir basit makine işten kazanç sağlamaz, III de doğrudur.",
    "I'i doğru sanma: sabit makarada kuvvet yükün ağırlığına eşittir. II de doğrudur.",
    null
  ],
  aciklama: `Her öncülü ayrı sına.
Adım 1: I yanlış. Sabit makara yalnızca kuvvetin yönünü değiştirir; kuvvetten kazanç yoktur.
Adım 2: II doğru. Kolu uzun çıkrıkta kuvvetten kazanç vardır, bedeli kolun ucunun yükten daha uzun yol almasıdır.
Adım 3: III doğru. Sürtünme yokken hiçbir basit makine yapılan işi azaltmaz.
Sağlama: Kuvvetten kazanç olan yerde yol kaybı vardır; iş değişmez.
Cevap D.`
},
{
  id: "fen-bm-152",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Marangoz Selim, bir çekicin pençesiyle tahtaya çakılı çivi söküyor. Çekicin tahtaya değen yuvarlak kısmı destek noktasıdır, çivi yüktür.
**Buna göre aşağıdaki ifadelerden hangileri doğrudur?**
I. Selim elini sapın ucundan çekicin başına doğru kaydırırsa çiviyi sökmek için gereken kuvvet azalır.
II. Selim elini sapın ucuna doğru kaydırırsa gereken kuvvet azalır.
III. Çivi sökülürken kuvvetin uygulandığı nokta, çivinin çıktığı yoldan daha kısa yol alır.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Elini desteğe yaklaştırınca kolaylaşır sanma: kuvvet kolu kısalır, gereken kuvvet artar.",
    null,
    "I ve III yanlıştır: kuvvet kolu kısalırsa kuvvet artar; kuvvetten kazanç varsa kuvvet noktası daha uzun yol alır.",
    "III yanlıştır: kuvvet kolu yük kolundan uzun olduğundan el, çivinin çıktığı yoldan daha uzun yol alır."
  ],
  aciklama: `Kaldıraçta kuvvet kolu uzadıkça gereken kuvvet azalır, kuvvetin yolu uzar.
Adım 1: I yanlış. Elini desteğe (çekicin başına) yaklaştırırsan kuvvet kolu kısalır, gereken kuvvet artar.
Adım 2: II doğru. Eli sapın ucuna kaydırınca kuvvet kolu uzar, çiviyi sökmek kolaylaşır.
Adım 3: III yanlış. Kuvvetten kazanç yol kaybıyla ödenir; el, çivinin çıktığı yoldan daha uzun yol alır.
Cevap B.`
},
{
  id: "fen-bm-153",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Şekilde silindirleri özdeş K ve L çıkrıkları, aynı derinlikteki iki kuyudan eşit kütleli kovaları çıkarmak için kullanılıyor. Sürtünmeler önemsizdir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 480 200"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="3"><circle cx="110" cy="90" r="26"/><circle cx="330" cy="90" r="26"/></g><g stroke="currentColor" stroke-width="5"><line x1="110" y1="90" x2="230" y2="90"/><line x1="330" y1="90" x2="385" y2="90"/></g><g fill="var(--vurgu)"><circle cx="230" cy="90" r="7"/><circle cx="385" cy="90" r="7"/></g><g fill="currentColor"><circle cx="110" cy="90" r="4"/><circle cx="330" cy="90" r="4"/></g><g stroke="currentColor" stroke-width="3"><line x1="110" y1="116" x2="110" y2="150"/><line x1="330" y1="116" x2="330" y2="150"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="95" y="150" width="30" height="24"/><rect x="315" y="150" width="30" height="24"/></g><g font-size="16" text-anchor="middle" fill="currentColor"><text x="110" y="40">K</text><text x="330" y="40">L</text></g></svg>`,
  secenekler: [
    "K'de kuvvet daha küçüktür; K'de kolun ucu daha kısa yol alır.",
    "L'de kuvvet daha küçüktür; L'de kolun ucu daha uzun yol alır.",
    "K'de kuvvet daha küçüktür; K'de kolun ucu daha uzun yol alır.",
    "İki çıkrıkta da kuvvet eşittir; kolun ucu aynı yolu alır."
  ],
  dogru: 2,
  hatalar: [
    "Yoldan kazanç sanma: kuvvet küçülen çıkrıkta kolun ucu daha uzun yol alır, kısa değil.",
    "Kolu ters yorumlama: kolu uzun olan K'de kuvvet daha küçüktür, L'de değil.",
    null,
    "Silindirler özdeş ama kolların uzunluğu farklıdır; bu fark kuvveti değiştirir."
  ],
  aciklama: `Çıkrıkta kol uzadıkça gereken kuvvet azalır.
Adım 1: Şekle göre silindirler özdeştir, kollar farklıdır. K'nin kolu L'ninkinden uzundur.
Adım 2: Kolu uzun K'de kuvvet daha küçüktür.
Adım 3: Kuvvet küçüldüğü için bedeli yol kaybı olur: K'nin kolunun ucu daha uzun bir çember çizer, yani daha uzun yol alır.
Sağlama: Tek değişken kol uzunluğu olduğu için farkı o yaratır.
Cevap C.`
},
{
  id: "fen-bm-154",
  kazanim: "F.8.5.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Mutfakta sıkı kapalı turşu kavanozlarının metal kapaklarını az kuvvetle açmak için bir çubuk açacak tasarlanıyor. Çubuğun bir ucu kavanozun kenarına dayanacak (destek noktası); kapağı kaldıran çıkıntı (yük) ile elin bastığı sap (kuvvet) çubuk üzerinde olacaktır.
**Kapakları en az kuvvetle açmak için hangi tasarım seçilmelidir?**`,
  gorsel: null,
  secenekler: [
    "Yük desteğe uzak, sap kısa",
    "Yük desteğe uzak, sap uzun",
    "Yük desteğe yakın, sap uzun",
    "Yük desteğe yakın, sap kısa"
  ],
  dogru: 2,
  hatalar: [
    "Hem yük kolunu uzatıp hem kuvvet kolunu kısaltmışsın: kuvvet en çok bu tasarımda gerekir.",
    "Sapı uzatmak iyi, ama yükü desteğe uzak tutmak yük kolunu uzatır; kuvvet gereğinden çok olur.",
    null,
    "Yükü desteğe yaklaştırmak iyi, ama sapı kısa tutmak kuvvet kolunu kısaltır; kuvvetten kazanç azalır."
  ],
  aciklama: `Kaldıraçta kuvvet kolu uzadıkça ve yük kolu kısaldıkça gereken kuvvet azalır.
Adım 1: Yük kolunu kısaltmak için kapağı kaldıran çıkıntı desteğe yakın olmalı.
Adım 2: Kuvvet kolunu uzatmak için sap uzun olmalı.
Adım 3: İki koşulu birlikte sağlayan tasarım "yük desteğe yakın, sap uzun" olandır.
Sağlama: Karşılığında elin bastığı nokta daha uzun yol alır.
Cevap C.`
},
{
  id: "fen-bm-155",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir atölyede çeşitli kaldıraç araçları kullanılıyor.
**Aşağıdaki araçlardan hangisi, normal kullanımında kuvvetten kazanç sağlar?**`,
  gorsel: null,
  secenekler: [
    "Olta",
    "Cımbız",
    "Kürek",
    "Pense"
  ],
  dogru: 3,
  hatalar: [
    "Oltada kuvvet ortada uygulanır; kuvvet kolu kısadır ve kuvvetten kazanç olmaz.",
    "Cımbızda kuvvet ortada uygulanır; kuvvet kolu kısadır ve kuvvetten kazanç olmaz.",
    "Kürekte kuvvet ortada uygulanır; kuvvet kolu kısadır ve kuvvetten kazanç olmaz.",
    null
  ],
  aciklama: `Kuvvet ortadaysa kuvvet kolu kısadır, kuvvet büyür; kuvvetten kazanç olmaz.
Adım 1: Olta, cımbız ve kürekte kuvvet, destek ile yük arasında uygulanır. Bu araçlar ince ve duyarlı iş ya da geniş hareket için kullanılır.
Adım 2: Pensede destek ortadadır ve sapları uzundur; kuvvet kolu yük kolundan uzun olduğu için kuvvetten kazanç sağlanır.
Sağlama: Pense bu yüzden telleri az kuvvetle keser.
Cevap D.`
},
{
  id: "fen-bm-156",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Ferhat, göl kenarında kamış oltasıyla balık tutuyor. Oltada kuvvet, destek noktası ile yük arasında uygulanıyor.
**Buna göre aşağıdaki ifadelerden hangileri doğrudur?**
I. Olta kuvvetten kazanç sağlamaz; kamışın ucu elin aldığı yoldan daha uzun yol alır.
II. Olta kamışı kuvvetin yönünü değiştirerek kuvvetten kazanç sağlar.
III. Olta, makas gibi destek noktası ortada olan bir kaldıraçtır.`,
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
    "II yanlıştır: kuvvetin yönü değişmediği gibi kuvvetten kazanç da yoktur.",
    "III yanlıştır: oltada destek değil, kuvvet ortadadır.",
    "II ve III yanlıştır: olta kuvvetten kazandırmaz ve destek ortada değildir."
  ],
  aciklama: `Kuvvet ortadaki kaldıraçta kuvvet kolu yük kolundan kısadır.
Adım 1: I doğru. Kuvvet kolu kısa olduğu için kuvvet büyür, kazanç olmaz; karşılığında kamışın ucu elden daha uzun yol alır.
Adım 2: II yanlış. Kuvvetten kazanç yoktur ve kuvvetin yönü değiştirilmez.
Adım 3: III yanlış. Makasta destek ortadadır; oltada ortada olan nokta kuvvettir.
Cevap A.`
},
{
  id: "fen-bm-157",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Şekilde 8 eşit bölmeli özdeş çubuklardan oluşan K ve L kaldıraçları verilmiştir. İkisinde de aynı yük çubuğun sol ucunda, kuvvet sağ ucundadır. Çubuklar yatay dengededir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 250"><g stroke="currentColor" stroke-width="6"><line x1="40" y1="90" x2="520" y2="90"/><line x1="40" y1="200" x2="520" y2="200"/></g><g stroke="currentColor" stroke-width="2"><line x1="100" y1="96" x2="100" y2="104"/><line x1="220" y1="96" x2="220" y2="104"/><line x1="280" y1="96" x2="280" y2="104"/><line x1="340" y1="96" x2="340" y2="104"/><line x1="400" y1="96" x2="400" y2="104"/><line x1="460" y1="96" x2="460" y2="104"/><line x1="100" y1="206" x2="100" y2="214"/><line x1="160" y1="206" x2="160" y2="214"/><line x1="220" y1="206" x2="220" y2="214"/><line x1="280" y1="206" x2="280" y2="214"/><line x1="400" y1="206" x2="400" y2="214"/><line x1="460" y1="206" x2="460" y2="214"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="3"><polygon points="160,96 146,124 174,124"/><polygon points="340,206 326,234 354,234"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="40" y="62" width="46" height="26"/><rect x="40" y="172" width="46" height="26"/></g><g font-size="14" text-anchor="middle" fill="currentColor"><text x="63" y="80">Yük</text><text x="63" y="190">Yük</text></g><g stroke="var(--vurgu)" stroke-width="3"><line x1="520" y1="36" x2="520" y2="68"/><line x1="520" y1="146" x2="520" y2="178"/></g><g fill="var(--vurgu)"><polygon points="520,84 511,66 529,66"/><polygon points="520,194 511,176 529,176"/></g><g font-size="16" fill="var(--vurgu)"><text x="536" y="58">F</text><text x="536" y="168">F</text></g><g font-size="16" fill="currentColor"><text x="6" y="40">K</text><text x="6" y="150">L</text></g></svg>`,
  secenekler: [
    "K'de gereken kuvvet L'dekinden büyüktür; K'de kuvvetin uygulandığı nokta daha kısa yol alır.",
    "K'de gereken kuvvet L'dekinden küçüktür; K'de kuvvetin uygulandığı nokta daha uzun yol alır.",
    "L'de gereken kuvvet K'dekinden küçüktür; L'de kuvvetin uygulandığı nokta daha uzun yol alır.",
    "İki kaldıraçta da kuvvet eşittir; çünkü yükler ve çubuklar özdeştir."
  ],
  dogru: 1,
  hatalar: [
    "Destek yüke yakın olan K'de kuvvet kolu uzundur; kuvvet büyük değil, küçüktür.",
    null,
    "Destek yüke uzak olan L'de kuvvet kolu kısadır; kuvvet K'dekinden büyüktür.",
    "Yük ve çubuk özdeş olsa da destek noktasının yeri farklıdır; bu fark kuvveti değiştirir."
  ],
  aciklama: `Kaldıraçta destek yüke yaklaştıkça gereken kuvvet azalır.
Adım 1: K'de destek, yüke 2 bölme uzaklıktadır; kuvvet kolu uzundur (6 bölme).
Adım 2: L'de destek, yüke 5 bölme uzaklıktadır; kuvvet kolu kısadır (3 bölme).
Adım 3: Kuvvet kolu daha uzun olan K'de kuvvet daha küçüktür; bedeli olarak K'de kuvvetin uygulandığı nokta daha uzun yol alır.
Cevap B.`
},
{
  id: "fen-bm-158",
  kazanim: "F.8.5.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `İnşaatta çalışan Levent, ağır bir kutuyu rampanın üstüne çıkarmak için ipi rampanın üst ucuna bağlı sabit bir makaradan geçiriyor ve ipi aşağı doğru çekiyor. Sürtünmeler ve makara ağırlığı önemsizdir.
**Buna göre bu tasarımla ilgili aşağıdaki ifadelerden hangileri doğrudur?**
I. Kuvvetten kazancı rampa sağlar.
II. Sabit makara yalnızca ipin yönünü değiştirir.
III. Sabit makara eklendiği için kutuyu çıkarırken yapılan iş azalır.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "II de doğrudur: sabit makara kuvveti büyütüp küçültmez, yalnızca ipin yönünü değiştirir.",
    null,
    "III yanlıştır: ne sabit makara ne de rampa yapılan işi azaltır. II ise doğrudur.",
    "I de doğrudur: kuvvetten kazanç rampadan gelir. III ise yanlıştır, işten kazanç yoktur."
  ],
  aciklama: `Tasarımı değerlendirirken her makinenin görevini ayrı ayrı yaz.
Adım 1: I doğru. Rampa, kutuyu doğrudan kaldırmaya göre gereken kuvveti azaltır; bedeli daha uzun yol almaktır.
Adım 2: II doğru. Sabit makara kuvvetin büyüklüğünü değiştirmez; yalnızca yönünü değiştirir, böylece Levent ipi aşağı doğru çekebilir.
Adım 3: III yanlış. Hiçbir basit makine, birlikte kullanılsalar bile, yapılan işi azaltmaz.
Sık yapılan hata: İki makine bir aradayken kazancı tek makineye ya da ikisine birden yüklemek. Her makineye ayrı bak.
Cevap B.`
},
{
  id: "fen-bm-159",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Gökhan ve Pelin, aynı ağırlıktaki yükleri aynı yüksekliğe palangayla çıkarıyor. Gökhan'ın düzeneğinde yükü taşıyan ip parçası sayısı 2, Pelin'inkinde 4'tür. Sürtünmeler ve makara ağırlıkları önemsizdir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Pelin daha az kuvvet uygular; ipin ucu daha uzun yol alır.",
    "Pelin daha az kuvvet uygular; ipin ucu daha kısa yol alır.",
    "Gökhan daha az kuvvet uygular; ipin ucu daha uzun yol alır.",
    "İkisi de aynı kuvveti uygular; çünkü yükler aynıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yoldan kazanç sanma: kuvvet azalınca ipin ucu daha uzun yol alır, kısa değil.",
    "Taşıyıcı ip sayısı fazla olan düzenekte kuvvet daha azdır; Gökhan'da ip sayısı daha azdır.",
    "Yük aynı olsa da taşıyıcı ip parçası sayısı farklıdır; bu fark kuvveti değiştirir."
  ],
  aciklama: `Palangada yükü taşıyan ip parçası sayısı arttıkça gereken kuvvet azalır, ip ucunun yolu uzar.
Adım 1: Pelin'in düzeneğinde yükü taşıyan ip parçası sayısı daha fazladır.
Adım 2: Bu yüzden Pelin daha az kuvvet uygular.
Adım 3: Kuvvet kazancının bedeli yol kaybıdır; Pelin ipi daha çok çekmek zorunda kalır.
Sağlama: Hem az kuvvet hem kısa ip yolu veren bir palanga yoktur.
Cevap A.`
},
{
  id: "fen-bm-160",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Burak, bir sandığı tek hareketli makarayla yukarı çekerken sandığın hafiflediğini düşünüyor. Sürtünme ve makara ağırlığı önemsizdir.
**Burak'ın bu düşüncesi için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Sandığın ağırlığı azalır; gereken kuvvet küçülür.",
    "Sandığın ağırlığı azalır; yapılan iş azalır.",
    "Sandığın ağırlığı değişmez; gereken kuvvet küçülür.",
    "Sandığın ağırlığı değişmez; yapılan iş azalır."
  ],
  dogru: 2,
  hatalar: [
    "Küçülen şeyi yanlış adlandırma: makara sandığı hafifletmez, yalnızca uygulanan kuvveti küçültür.",
    "Hem ağırlığın azaldığını hem işten kazanç olduğunu sanma: ikisi de yanlıştır.",
    null,
    "Ağırlık doğru, ama işten kazanç sanma: basit makineler yapılan işi azaltmaz."
  ],
  aciklama: `Basit makine yükün ağırlığını değiştirmez; yalnızca senin uygulaman gereken kuvveti değiştirir.
Adım 1: Sandığın ağırlığı sandığın kütlesine bağlıdır; makara onu değiştirmez.
Adım 2: Hareketli makara kuvvetten kazandırır; ipi çeken kuvvet sandığın ağırlığından küçük olur.
Adım 3: Kuvvet küçülürken yol uzar; iş değişmez.
Sık yapılan hata: "Kolaylaştı" ile "hafifledi" ya da "iş azaldı" demek aynı şey değildir.
Cevap C.`
},
{
  id: "fen-bm-161",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Mobilya taşıyan Bekir, dolabı kamyona rampadan çıkarıyor. Sürtünmeler önemsizdir.
**Buna göre aşağıdaki ifadelerden hangileri doğrudur?**
I. Rampanın yüksekliği değişmeden boyu uzatılırsa dolabı itmek için gereken kuvvet azalır.
II. Rampa kullanmak dolabın alacağı yolu kısaltır.
III. Rampa kullanıldığında yapılan iş, dolabı doğrudan kaldırmaya göre azalır.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "I de doğrudur: boyu uzayan rampada eğim azalır, kuvvet küçülür. III ise yanlıştır, rampa işi azaltmaz.",
    "II yanlıştır: rampa kuvveti azaltır ama dolabın alacağı yolu uzatır, kısaltmaz.",
    "II ve III yanlıştır: rampa yolu uzatır, yapılan işi de azaltmaz."
  ],
  aciklama: `Eğik düzlem kuvvetten kazandırır, yolu uzatır, işi değiştirmez.
Adım 1: I doğru. Yükseklik aynıyken boy uzarsa eğim azalır ve gereken kuvvet küçülür.
Adım 2: II yanlış. Kuvvet kazancı yol kaybıyla ödenir; dolap rampa boyunca daha uzun yol alır.
Adım 3: III yanlış. Sürtünme yokken yapılan iş, rampa kullansan da kullanmasan da aynıdır; rampa işi azaltmaz.
Cevap A.`
},
{
  id: "fen-bm-162",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Şekilde özdeş yükler, K düzeneğinde sabit makarayla, L düzeneğinde hareketli makarayla sabit hızla yukarı çıkarılıyor. Sürtünmeler ve makara ağırlıkları önemsizdir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 460 250"><g stroke="currentColor" stroke-width="4"><line x1="30" y1="20" x2="150" y2="20"/><line x1="250" y1="20" x2="310" y2="20"/></g><line x1="90" y1="20" x2="90" y2="48" stroke="currentColor" stroke-width="3"/><circle cx="90" cy="70" r="22" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><circle cx="90" cy="70" r="4" fill="currentColor"/><path d="M68 160 L68 70 A22 22 0 0 1 112 70 L112 210" stroke="currentColor" stroke-width="3" fill="none"/><rect x="43" y="160" width="50" height="34" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="68" y="183" font-size="14" text-anchor="middle" fill="currentColor">Yük</text><polygon points="112,228 104,210 120,210" fill="var(--vurgu)"/><text x="128" y="215" font-size="16" fill="var(--vurgu)">F</text><path d="M290 20 L290 110 A20 20 0 0 0 330 110 L330 60" stroke="currentColor" stroke-width="3" fill="none"/><circle cx="310" cy="110" r="20" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><circle cx="310" cy="110" r="4" fill="currentColor"/><line x1="310" y1="130" x2="310" y2="160" stroke="currentColor" stroke-width="3"/><rect x="285" y="160" width="50" height="34" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="310" y="183" font-size="14" text-anchor="middle" fill="currentColor">Yük</text><polygon points="330,42 322,60 338,60" fill="var(--vurgu)"/><text x="346" y="56" font-size="16" fill="var(--vurgu)">F</text><g font-size="16" fill="currentColor"><text x="14" y="60">K</text><text x="236" y="70">L</text></g></svg>`,
  secenekler: [
    "K'de kuvvet daha küçüktür; L'de kuvvetin yönü değişir.",
    "L'de kuvvet daha küçüktür; K'de kuvvetin yönü değişir.",
    "L'de kuvvet daha küçüktür; L'de kuvvetin yönü değişir.",
    "İki düzenekte kuvvet eşittir; yalnızca L'de kuvvetin yönü değişir."
  ],
  dogru: 1,
  hatalar: [
    "Sabit makarayı kuvvet kazandıran, hareketli makarayı yön değiştiren sanma: görevler ters.",
    null,
    "Hareketli makara kuvveti küçültür ama tek başına kullanılınca yönü değiştirmez; ip yukarı çekilir.",
    "Kuvvet eşit değildir: K'de kuvvet yüke eşit, L'de küçüktür. Yön değişimi de K'dedir."
  ],
  aciklama: `Sabit makara yalnızca yönü değiştirir; hareketli makara kuvvetten kazandırır.
Adım 1: K'de ipi aşağı çekiyor, yük yukarı çıkıyor; kuvvetin yönü değişiyor ama kuvvet yükün ağırlığına eşit.
Adım 2: L'de makara yükle birlikte yükseliyor; yük birden fazla ip parçasıyla taşındığı için kuvvet daha küçük. İp yukarı çekildiği için yön değişmiyor.
Sağlama: L'de kuvvetin bedeli, ip ucunun yükten daha uzun yol almasıdır.
Cevap B.`
},
{
  id: "fen-bm-163",
  kazanim: "F.8.5.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bahçıvan İlker, kalın dalları kesmekte zorlanıyor. Budama makasının saplarını uzatan, ağız kısmını ise değiştirmeyen bir tasarım yapıyor.
**Buna göre bu tasarımın sonucu için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Gereken kuvvet azalır; elin aldığı yol artar.",
    "Gereken kuvvet azalır; elin aldığı yol azalır.",
    "Gereken kuvvet artar; elin aldığı yol artar.",
    "Gereken kuvvet değişmez; elin aldığı yol artar."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yoldan kazanç sanma: sap uzayınca kuvvet azalır ama el daha uzun yol alır.",
    "Sapı ters yorumlama: kuvvet kolu uzayınca gereken kuvvet artmaz, azalır.",
    "Kuvvet kolu uzadığı için gereken kuvvet değişmez diyemezsin; azalır."
  ],
  aciklama: `Makas, destek noktası ortada olan bir kaldıraçtır; sap kuvvet kolunu oluşturur.
Adım 1: Sap uzayınca kuvvet kolu uzar, yük kolu (ağız kısmı) değişmez.
Adım 2: Kuvvet kolu uzadıkça dalı kesmek için gereken kuvvet azalır.
Adım 3: Kuvvetten kazancın bedeli olarak elin aldığı yol artar.
Sağlama: Sapları uzun budama makasları kalın dalları kolay keser ama daha geniş açılır.
Cevap A.`
},
{
  id: "fen-bm-164",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Fen dersinde bir el matkabının dişli çarkları, bir cıvata ve kayışla bağlı kasnaklar inceleniyor.
**Buna göre aşağıdaki ifadelerden hangileri doğrudur?**
I. Dişli çarklar basit makine sayılmaz.
II. Cıvata (vida) da bir basit makinedir.
III. Kasnaklar da işten kazanç sağlamaz.`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "III de doğrudur: kasnaklar da diğer basit makineler gibi işten kazanç sağlamaz.",
    "II de doğrudur: vida da basit makine olarak kabul edilir.",
    "I yanlıştır: dişli çarklar da basit makinedir. III ise doğrudur.",
    null
  ],
  aciklama: `Dişli çarklar, vida ve kasnaklar da birer basit makinedir; bu konuda ayrıntıya girilmez.
Adım 1: I yanlış. Dişli çarklar basit makine olarak kabul edilir.
Adım 2: II doğru. Cıvata ve vida da basit makinedir.
Adım 3: III doğru. Hiçbir basit makine, kasnaklar dahil, işten kazanç sağlamaz.
Cevap D.`
},
{
  id: "fen-bm-165",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Aynı uzunlukta kolla çevrilen iki çıkrıktan K'nin silindiri ince, L'nin silindiri kalındır. İki çıkrıkla da eşit kütleli kovalar aynı yüksekliğe çıkarılıyor. Sürtünmeler önemsizdir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "L'de gereken kuvvet daha küçüktür; çünkü silindir kalındır.",
    "İki çıkrıkta da kuvvet eşittir; çünkü kollar aynıdır.",
    "K'de gereken kuvvet daha küçüktür; çünkü silindir incedir.",
    "K'de gereken kuvvet daha büyüktür; çünkü silindir incedir."
  ],
  dogru: 2,
  hatalar: [
    "Silindiri ters yorumlama: silindir kalınlaştıkça gereken kuvvet artar.",
    "Kollar aynı olsa da silindir kalınlıkları farklıdır; bu fark kuvveti değiştirir.",
    null,
    "İnce silindir kuvveti büyütmez, küçültür; kuvvet kolu silindire göre daha uzun kalır."
  ],
  aciklama: `Çıkrıkta kolun silindire oranı ne kadar büyükse kuvvetten kazanç o kadar fazladır.
Adım 1: Kol aynıysa farkı yaratan silindirin kalınlığıdır.
Adım 2: Silindir inceldikçe gereken kuvvet azalır; kalınlaştıkça artar.
Adım 3: Bu yüzden ince silindirli K'de kuvvet daha küçüktür.
Sağlama: İki değişkenden biri aynıysa farkı öbürü belirler.
Cevap C.`
},
{
  id: "fen-bm-166",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir limanda çalışanlar basit makinelerle ilgili şu ifadeleri tartışıyor. Sürtünmeler önemsizdir.
**Buna göre aşağıdaki ifadelerden hangileri doğrudur?**
I. Kuvvetten kazanç sağlayan basit makinede kuvvetin uygulandığı nokta, yükten daha uzun yol alır.
II. Bir basit makine kuvvetin büyüklüğünü ya da yönünü değiştirebilir.
III. Basit makine kullanıldığında yapılan iş azalır.`,
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
    "III yanlıştır: basit makineler yapılan işi azaltmaz.",
    "III yanlıştır: işten kazanç yoktur. I ise doğrudur.",
    "III yanlıştır: basit makine kullanılsa da iş değişmez."
  ],
  aciklama: `Kuvvetten kazanç yol kaybıyla ödenir, iş ise değişmez.
Adım 1: I doğru. Kuvvet küçülünce kuvvetin uygulandığı nokta daha uzun yol alır.
Adım 2: II doğru. Basit makine kuvvetin büyüklüğünü (hareketli makara) ya da yönünü (sabit makara) değiştirebilir.
Adım 3: III yanlış. Sürtünme yokken yapılan iş, makine kullansan da kullanmasan da aynıdır.
Cevap A.`
},
{
  id: "fen-bm-167",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir atölyede K makası, L el arabası ve M cımbızı kaldıraç olarak kullanılıyor. Her kaldıracın destek, yük ve kuvvet noktalarından biri, diğer ikisinin arasında yer alır.
**Buna göre K, L ve M için ortadaki nokta hangi seçenekte doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "K: yük, L: destek, M: kuvvet",
    "K: destek, L: kuvvet, M: yük",
    "K: kuvvet, L: yük, M: destek",
    "K: destek, L: yük, M: kuvvet"
  ],
  dogru: 3,
  hatalar: [
    "Makasta menteşe destektir ve ortadadır; yük ortada değildir.",
    "El arabasında kasa (yük) ortadadır; cımbızda ise kuvvet ortada uygulanır.",
    "Makasta kuvvet ortada değildir; cımbızda destek ortada değildir, birleşik uçtadır.",
    null
  ],
  aciklama: `Kaldıracın türünü ortadaki nokta belirler.
Adım 1: Makasın menteşesi destektir ve iki kolun arasında, yani ortadadır.
Adım 2: El arabasında tekerlek destek, tutma sapı kuvvet, kum dolu kasa ise bunların arasında yük noktasıdır.
Adım 3: Cımbızda birleşik uç destektir; parmaklarla sıkılan orta bölge kuvvet noktasıdır.
Cevap D.`
},
{
  id: "fen-bm-168",
  kazanim: "F.8.5.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Okul müdürü, kütüphanenin galeri katındaki rafa kitap kolilerini tek bir sabit makarayla çıkarıyor. Koliler ağır olduğu için ipi çekerken çok kuvvet uygulaması gerekiyor. Sürtünmeler ve makara ağırlıkları önemsizdir.
**Müdür kuvveti azaltmak için düzeneğe hangi değişikliği yapmalıdır?**`,
  gorsel: null,
  secenekler: [
    "İkinci bir sabit makara eklemek",
    "Yüke bağlı bir hareketli makara eklemek",
    "Daha uzun bir ip kullanmak",
    "Makarayı tavanın daha yüksek yerine asmak"
  ],
  dogru: 1,
  hatalar: [
    "Sabit makaralar yalnızca ipin yönünü değiştirir; bir tane daha eklemek kuvveti azaltmaz.",
    null,
    "İpin boyu gereken kuvveti değiştirmez.",
    "Makaranın asıldığı yükseklik gereken kuvveti değiştirmez; sabit makara yine yalnızca yönü değiştirir."
  ],
  aciklama: `Tasarımı değiştirirken istenen kolaylığı sağlayan makine türünü bul.
Adım 1: Sabit makarada uygulanan kuvvet kolinin ağırlığına eşittir; kuvvet ancak kuvvetten kazandıran bir makarayla azalır.
Adım 2: Kuvvetten kazandıran makara hareketli makaradır. Yüke bağlı bir hareketli makara eklenince koli birden fazla ip parçasıyla taşınır ve gereken kuvvet küçülür.
Adım 3: İkinci bir sabit makara, daha uzun ip ya da daha yüksek asma noktası kuvvetin büyüklüğünü değiştirmez.
Sağlama: Kuvvet kazancının bedeli, ip ucunun kolilerin çıktığı yoldan daha uzun yol almasıdır.
Cevap B.`
},
{
  id: "fen-bm-169",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir depoda tavan kirişine sabitlenmiş bir makaradan geçirilen iple kasalar üst rafa çıkarılıyor. Sürtünmeler ve makara ağırlığı önemsizdir.
**Buna göre aşağıdaki ifadelerden hangileri doğrudur?**
I. Kasayı yukarı çıkarmak için ip yukarı doğru çekilir.
II. Uygulanan kuvvet kasanın ağırlığından küçüktür.
III. İp ucunun aldığı yol, kasanın çıktığı yola eşittir.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "I yanlıştır: sabit makarada kuvvetin yönü değişir, kasa yukarı çıkarken ip aşağı çekilir. III ise doğrudur.",
    null,
    "I yanlıştır: sabit makara yönü değiştirdiği için ip yukarı değil aşağı çekilir. III doğrudur.",
    "II yanlıştır: sabit makarada kuvvet kasanın ağırlığına eşittir, küçük değildir. III doğrudur."
  ],
  aciklama: `Sabit makara yalnızca kuvvetin yönünü değiştirir.
Adım 1: I yanlış. İpi aşağı çekersin, kasa yukarı çıkar; kuvvetin yönü değişir.
Adım 2: II yanlış. Sürtünme ve makara ağırlığı yokken kuvvet kasanın ağırlığına eşittir.
Adım 3: III doğru. Sabit makarada yoldan kazanç ya da kayıp yoktur; ip ucu kasayla aynı yolu alır.
Cevap B.`
},
{
  id: "fen-bm-170",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Aynı ağırlıktaki üç yükü aynı yüksekliğe çıkarırken Ali yükü doğrudan kaldırıyor, Berk uzun bir rampa, Can ise hareketli makara kullanıyor. Sürtünmeler ve makara ağırlığı önemsizdir.
**Buna göre yapılan işler için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "En az işi Berk yapar; çünkü rampa yolu kısaltır.",
    "En az işi Can yapar; çünkü hareketli makara kuvveti azaltır.",
    "En çok işi Ali yapar; çünkü basit makineler işten kazanç sağlar.",
    "Üçü de aynı işi yapar; çünkü hiçbir basit makine işten kazanç sağlamaz."
  ],
  dogru: 3,
  hatalar: [
    "Rampa yolu kısaltmaz, uzatır; iş de azalmaz.",
    "Kuvvetin azalması işin azalması demek değildir; yol uzar, iş aynı kalır.",
    "İşten kazanç sanma: basit makineler işten kazanç sağlamaz, Ali'nin işi de diğerlerininkiyle aynıdır.",
    null
  ],
  aciklama: `Basit makine kuvveti ya da yönü değiştirir; yapılan iş değişmez.
Adım 1: Yük ve yükseklik aynıysa üç kişi de aynı işi yapar.
Adım 2: Berk ve Can daha az kuvvet uygular ama daha uzun yol alır; kuvvet ile yolun birlikte sonucu olan iş değişmez.
Sağlama: Kuvvetten kazanç yol kaybıyla tam dengelenir.
Cevap D.`
},
{
  id: "fen-bm-171",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Nalbant Rıfat, ağır bir demir levhayı bir çubukla kaldırıyor. Çubuğun altına koyduğu destek taşını levhaya yaklaştırıyor; elini çubuğun aynı noktasında tutuyor.
**Bu değişiklik için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yük kolu uzar; kuvvet kolu kısalır; gereken kuvvet artar.",
    "Yük kolu kısalır; kuvvet kolu değişmez; gereken kuvvet değişmez.",
    "Yük kolu kısalır; kuvvet kolu uzar; gereken kuvvet azalır.",
    "Yük kolu kısalır; kuvvet kolu uzar; gereken kuvvet artar."
  ],
  dogru: 2,
  hatalar: [
    "Bu, desteği levhadan uzaklaştırınca olur; destek levhaya yaklaşınca yük kolu kısalır, kuvvet kolu uzar.",
    "El aynı yerde diye kuvvet kolu değişmez sanma: kuvvet kolu desteğe olan uzaklıktır ve destek kayınca değişir.",
    null,
    "Kolları doğru yorumladın ama sonucu ters çıkardın: kuvvet kolu uzadıkça gereken kuvvet azalır, artmaz."
  ],
  aciklama: `Kaldıraçta destek noktası yüke yaklaştıkça gereken kuvvet azalır.
Adım 1: Yük kolu, destek ile levha arasındaki uzaklıktır. Destek levhaya yaklaşınca yük kolu kısalır.
Adım 2: Kuvvet kolu, destek ile el arasındaki uzaklıktır. El aynı yerde kaldığı, destek ise elden uzaklaştığı için kuvvet kolu uzar.
Adım 3: Kuvvet kolu uzayıp yük kolu kısalınca gereken kuvvet azalır; bedeli olarak el daha uzun yol alır.
Sağlama: Kolları yazıp karşılaştırınca sonuç tutarlı çıkmalı: kuvvet kolu uzun, yük kolu kısa, kuvvet küçük.
Cevap C.`
},
{
  id: "fen-bm-172",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `İki balkon arasına gerilen çamaşır ipi, iki sabit makaradan geçer. Çamaşır asan kişi ipin bir tarafını çektikçe çamaşırlar öbür balkona doğru gider.
**Buradaki makaralar için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kuvvetten kazanç sağlar; kuvvetin yönünü değiştirmez.",
    "Kuvvetin yönünü değiştirir; kuvvetten kazanç sağlamaz.",
    "Hem kuvvetten kazanç sağlar hem kuvvetin yönünü değiştirir.",
    "Ne kuvvetin yönünü değiştirir ne kuvvetten kazanç sağlar."
  ],
  dogru: 1,
  hatalar: [
    "Sabit makarayı kuvvet kazandıran sanma: sabit makarada kuvvetten kazanç yoktur.",
    null,
    "Hem kazanç hem yön değişimi sağlayan düzenek palangadır; yalnızca sabit makara kuvvetten kazandırmaz.",
    "Çamaşırlar ipin çekildiği yönün tersine gidiyor; yani kuvvetin yönü değişiyor."
  ],
  aciklama: `Sabit makara kuvvetin yönünü değiştirir, kuvvetten kazandırmaz.
Adım 1: Makaralar yerinden oynamaz, yani sabit makaradır.
Adım 2: İpi bir yöne çekince çamaşırlar ters yöne gider; kuvvetin yönü değişmiştir.
Adım 3: Sabit makarada uygulanan kuvvet yükün ağırlığına eşittir; kuvvetten kazanç yoktur.
Cevap B.`
},
{
  id: "fen-bm-173",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Fen laboratuvarında ortasından desteklenmiş, kolları eşit uzunlukta bir çubuğun bir ucuna yük asılıyor; öbür ucuna kuvvet uygulanarak çubuk yatay dengede tutuluyor.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kuvvet yükten küçüktür; kuvvetin uygulandığı nokta daha uzun yol alır.",
    "Kuvvet yükten büyüktür; kuvvetin uygulandığı nokta daha kısa yol alır.",
    "Kuvvet yüke eşittir; kuvvetin uygulandığı nokta daha uzun yol alır.",
    "Kuvvet yüke eşittir; kuvvetin uygulandığı nokta yükle aynı yolu alır."
  ],
  dogru: 3,
  hatalar: [
    "Kollar eşitken kuvvet kolu daha uzun değildir; kuvvetten kazanç yoktur.",
    "Kollar eşitken kuvvet büyümez; kuvvet yüke eşittir.",
    "Kuvvet doğru, ama yol yanlış: kollar eşitse yoldan kayıp da yoktur.",
    null
  ],
  aciklama: `İki kol eşit uzunluktaysa ne kuvvetten ne yoldan kazanç vardır.
Adım 1: Destek tam ortadadır; kuvvet kolu yük koluna eşittir.
Adım 2: Bu yüzden dengelemek için gereken kuvvet yükün ağırlığına eşittir.
Adım 3: Kuvvetin uygulandığı nokta ile yük çubuğun iki ucunda eşit uzaklıkta döner; ikisi aynı yolu alır.
Sağlama: Kuvvetten kazanç olsaydı yoldan kayıp da olurdu.
Cevap D.`
},
{
  id: "fen-bm-174",
  kazanim: "F.8.5.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bilim şenliğinde dört öğrenci, tasarımlarıyla ilgili şunları söylüyor. Sürtünmeler ve makara ağırlıkları önemsizdir.
**Buna göre hangi öğrencinin söylediği doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Selin: Rampayı uzatırsam yükü çıkarırken yapılan işi azaltırım.",
    "Tuna: Yükü sabit makaraya asarsam daha az kuvvet uygularım.",
    "Ece: Kaldıracın kuvvet kolunu uzatırsam yükü daha az kuvvetle dengelerim.",
    "Orhan: Hareketli makara kullanırsam ip ucu yükten daha kısa yol alır."
  ],
  dogru: 2,
  hatalar: [
    "İşten kazanç sanma: rampa uzayınca kuvvet azalır ama yapılan iş azalmaz.",
    "Sabit makarayı kuvvet kazandıran sanma: sabit makara yalnızca yönü değiştirir.",
    null,
    "Yoldan kazanç sanma: hareketli makarada ip ucu yükten daha uzun yol alır."
  ],
  aciklama: `Tasarımı değerlendirirken her cümlede kazancı ve bedelini ara.
Adım 1: Selin yanlış. Rampa kuvveti azaltır, yolu uzatır; işi azaltmaz.
Adım 2: Tuna yanlış. Sabit makarada kuvvet yükün ağırlığına eşittir.
Adım 3: Ece doğru. Kaldıraçta kuvvet kolu uzadıkça gereken kuvvet azalır.
Adım 4: Orhan yanlış. Hareketli makara kuvveti azaltır ama ip ucunun yolunu uzatır.
Cevap C.`
},
{
  id: "fen-bm-175",
  kazanim: "F.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Nilüfer, aynı kovayı kuyudan iki yolla çıkarıyor. K'de sabit makara, L'de hareketli makara kullanıyor; kovayı ikisinde de 3 m yükseltiyor. Sürtünmeler ve makara ağırlıkları önemsizdir.
**Buna göre ip ucunun aldığı yol için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "K'de kovanın yolu kadar, L'de kovanın yolundan daha uzundur.",
    "K'de kovanın yolundan daha uzun, L'de kovanın yolu kadardır.",
    "İkisinde de kovanın yolu kadardır.",
    "İkisinde de kovanın yolundan daha uzundur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Düzenekleri ters yorumlama: kuvvetten kazandıran hareketli makarada ip ucu daha uzun yol alır.",
    "Yoldan kayıp yalnızca sabit makarada yoktur; hareketli makarada ip ucu daha uzun yol alır.",
    "Sabit makarada ip ucunun yolu kovanın yoluna eşittir, uzun değildir."
  ],
  aciklama: `Kuvvetten kazanç yol kaybıyla ödenir; kazanç olmayan yerde yol kaybı da yoktur.
Adım 1: Sabit makarada kuvvetten kazanç yoktur; ip ucu kovayla aynı yolu alır (3 m).
Adım 2: Hareketli makarada kuvvetten kazanç vardır; bedeli olarak ip ucu kovanın yolundan daha uzun yol alır.
Sağlama: Hareketli makarada yük birden fazla ip parçasıyla taşınır; kısalan her ip parçası uzun yolu paylaşır.
Cevap A.`
}
);
