// Fen Bilimleri — Kalıtım: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["kalitim"] = window.LGS_BANK["kalitim"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "fen-kl-101",
  kazanim: "F.8.2.2.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Bir canlıda genlerin etkisiyle ortaya çıkan; çiçek rengi, tohum şekli, boy uzunluğu gibi gözlenebilen özelliklerin tümüne ne ad verilir?**",
  gorsel: null,
  secenekler: ["Genotip", "Gen", "Fenotip", "Kromozom"],
  dogru: 2,
  hatalar: [
    "Genotip ile fenotipi karıştırma: genotip, bir özelliği belirleyen gen çiftidir (ör. Ss); dışarıdan gözlenen görünüş değildir.",
    "Özelliği belirleyen yapıyı özelliğin kendisi sanma: gen, DNA üzerindeki bilgidir; bu bilginin ortaya çıkardığı görünüş değildir.",
    null,
    "Kromozomu özellik sanma: kromozom, genleri taşıyan yapıdır; gözlenen bir özellik değildir."
  ],
  aciklama: `Fenotip, bir canlının genlerinin etkisiyle ortaya çıkan ve gözlenebilen özelliklerinin tümüdür.
Adım 1: Soruda "gözlenebilen özellikler" ifadesi geçiyor: çiçeğin rengi, tohumun şekli, bitkinin boyu gibi.
Adım 2: Bu özellikleri belirleyen gen çiftine genotip, ortaya çıkan görünüşe fenotip denir.
Adım 3: Öyleyse sorulan kavram fenotiptir.
Sık yapılan hata: Genotip ile fenotipi karıştırmak. Kısa yol: genotip "harflerle yazılan" (Ss), fenotip "gözle görülen" (sarı tohum) bilgidir.
Cevap C.`
},
{
  id: "fen-kl-102",
  kazanim: "F.8.2.2.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir bezelye bitkisinin tohum rengi için taşıdığı gen çifti Ss harfleriyle gösterilmiştir.
**Buna göre Ss gösterimi bu bitkinin aşağıdakilerden hangisini ifade eder?**`,
  gorsel: null,
  secenekler: ["Fenotipini", "Çekinik özelliğini", "Saf döl olduğunu", "Genotipini"],
  dogru: 3,
  hatalar: [
    "Genotip ile fenotipi karıştırma: fenotip tohumun sarı ya da yeşil görünmesidir; harflerle yazılan gen çifti fenotip değildir.",
    "Küçük harfi bitkinin görünüşü sanma: s çekinik geni gösterir ama gen çiftinde büyük S de vardır; bitki çekinik özelliği göstermez.",
    "Saf döl ile melez dölü karıştırma: Ss gen çiftinde iki farklı gen vardır, bu bitki melez döldür.",
    null
  ],
  aciklama: `Genotip, bir canlının bir özellik için taşıdığı gen çiftidir ve harflerle gösterilir.
Adım 1: Ss, bitkinin tohum rengi için taşıdığı iki geni harflerle gösteriyor. Büyük harf baskın geni, küçük harf çekinik geni temsil eder.
Adım 2: Gen çiftinin harflerle yazılışı genotiptir. Tohumun sarı ya da yeşil görünmesi ise fenotiptir.
Adım 3: Öyleyse Ss gösterimi bitkinin genotipini ifade eder.
Sık yapılan hata: Ss'yi saf döl sanmak. Saf dölde gen çiftindeki iki gen aynıdır (SS ya da ss); Ss'de farklı olduğu için bu bitki melezdir.
Cevap D.`
},
{
  id: "fen-kl-103",
  kazanim: "F.8.2.2.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bezelyede yuvarlak tohum geni Y, buruşuk tohum geni y harfiyle gösterilmektedir.
**Buna göre aşağıdakilerin hangisinde verilen iki genotip de saf döl bir bitkiye aittir?**`,
  gorsel: null,
  secenekler: ["YY ve yy", "YY ve Yy", "Yy ve yy", "Yy ve Yy"],
  dogru: 0,
  hatalar: [
    null,
    "Baskın özelliği saflıkla karıştırma: Yy de yuvarlak tohumludur ama gen çiftindeki iki gen farklı olduğu için melezdir.",
    "Çekinik geni saflıkla karıştırma: yy saftır ama Yy'de iki farklı gen bulunduğu için melezdir.",
    "Aynı genotipi iki kez görünce saf sanma: saflık iki bitkinin birbirine benzemesi değil, bir bitkideki iki genin aynı olmasıdır; Yy melezdir."
  ],
  aciklama: `Saf döl, bir özellik için gen çiftindeki iki geni aynı olan bireydir. Gen çiftindeki iki gen farklıysa birey melez döldür.
Adım 1: YY'de iki gen de Y'dir. Genler aynı olduğu için saf döldür.
Adım 2: yy'de iki gen de y'dir. Genler aynı olduğu için bu da saf döldür.
Adım 3: Yy'de bir Y ve bir y vardır. Genler farklı olduğu için melez döldür. İki bitkinin de Yy olması onları saf yapmaz; saflığa her bitkinin kendi gen çiftine bakarak karar verilir.
Adım 4: İkisi de saf döl olan genotipler YY ve yy'dir.
Sık yapılan hata: Yalnızca baskın özelliği gösteren bitkiyi saf sanmak. Saf olmak "baskın olmak" değil, iki genin aynı olmasıdır; yy de saftır.
Cevap A.`
},
{
  id: "fen-kl-104",
  kazanim: "F.8.2.2.1",
  kademe: 1,
  zorluk: 1,
  soru: `Mor çiçekli melez bir bezelye bitkisi, beyaz çiçek genini taşıdığı hâlde mor çiçek açar.
**Bu bitkide çiçeklerin mor renkte olmasını sağlayan gene ne ad verilir?**`,
  gorsel: null,
  secenekler: ["Çekinik gen", "Genotip", "Baskın gen", "Fenotip"],
  dogru: 2,
  hatalar: [
    "Baskın ve çekinik geni ters kurma: melez bireyde etkisini gösteremeyen gen çekiniktir; burada çekinik olan beyaz çiçek genidir.",
    "Tek gen ile gen çiftini karıştırma: genotip, bitkinin taşıdığı iki genin birlikte yazılışıdır; tek bir genin adı değildir.",
    null,
    "Geni görünüşle karıştırma: fenotip, ortaya çıkan mor renktir; bu rengi sağlayan genin adı değildir."
  ],
  aciklama: `Baskın gen, melez bir bireyde etkisini gösteren gendir. Etkisi örtülen gene çekinik gen denir.
Adım 1: Bitki melezdir; yani hem mor çiçek genini hem beyaz çiçek genini taşır.
Adım 2: İki gen birlikteyken çiçekler mor açıyor. Demek ki mor çiçek geni, beyaz çiçek geninin etkisini örtüyor.
Adım 3: Başka bir genin etkisini örten gene baskın gen denir. Öyleyse mor çiçek geni baskın gendir.
Sağlama: Beyaz çiçek geni kaybolmamıştır; bitki bu geni yavrularına aktarabilir. Melez bitkide etkisini gösteremediği için çekiniktir.
Cevap C.`
},
{
  id: "fen-kl-105",
  kazanim: "F.8.2.2.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bezelyede buruşuk tohum şekli çekinik bir özelliktir.
**Bir bezelye bitkisinin tohumlarının buruşuk olması için bu karakteri belirleyen gen çiftiyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Gen çiftinde bir baskın, bir çekinik gen bulunmalıdır.",
    "Gen çiftinde en az bir baskın gen bulunmalıdır.",
    "Gen çifti tamamen çekinik genlerden oluşmalıdır.",
    "Gen çifti tamamen baskın genlerden oluşmalıdır."
  ],
  dogru: 2,
  hatalar: [
    "Melez bireyi çekinik özellikli sanma: bir baskın gen varsa baskın özellik ortaya çıkar, tohum yuvarlak olur.",
    "Baskın ile çekinik özelliği karıştırma: en az bir baskın gen bulunan bitkide baskın özellik, yani yuvarlak tohum görülür.",
    null,
    "Baskın ve çekinik genleri ters kurma: iki geni de baskın olan bitkide (YY) baskın özellik, yani yuvarlak tohum görülür."
  ],
  aciklama: `Çekinik gen, yanında baskın gen bulunduğunda etkisini gösteremeyen gendir.
Adım 1: Gen çiftinde bir tane bile baskın gen varsa baskın özellik ortaya çıkar. Yani tohum yuvarlak olur.
Adım 2: Çekinik özelliğin görülebilmesi için gen çiftinde baskın gen bulunmamalıdır.
Adım 3: Öyleyse buruşuk tohumlu bir bitkinin gen çiftinde iki gen de çekiniktir (ör. yy). Tek bir çekinik gen yetmez; yanındaki baskın gen onun etkisini örter.
Sağlama: Buruşuk tohumlu her bezelye saf döldür, çünkü iki geni de aynıdır.
Cevap C.`
},
{
  id: "fen-kl-106",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 1,
  soru: "**İnsanda doğacak çocuğun kız ya da erkek olmasını aşağıdakilerden hangisi belirler?**",
  gorsel: null,
  secenekler: [
    "Babadan gelen eşey kromozomu",
    "Anneden gelen eşey kromozomu",
    "Anneden gelen vücut kromozomları",
    "Babadan gelen vücut kromozomları"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Anneyi belirleyici sanma: yumurta hücresi her durumda X kromozomu taşır, bu yüzden anne cinsiyeti belirleyemez.",
    "Vücut kromozomlarını cinsiyetle ilişkilendirme: cinsiyeti vücut kromozomları değil, eşey kromozomları belirler.",
    "Kromozom türünü karıştırma: babadan gelen vücut kromozomları cinsiyeti belirlemez; belirleyici olan eşey kromozomudur."
  ],
  aciklama: `İnsanda cinsiyeti eşey kromozomları belirler. Kadında XX, erkekte XY eşey kromozomları bulunur.
Adım 1: Annenin yumurta hücrelerinin hepsi X kromozomu taşır. Anneden gelen eşey kromozomu her çocukta aynıdır.
Adım 2: Babanın sperm hücrelerinin bir kısmı X, bir kısmı Y kromozomu taşır.
Adım 3: Yumurtayı X taşıyan sperm döllerse çocuk XX (kız), Y taşıyan sperm döllerse XY (erkek) olur.
Adım 4: Çocuğun cinsiyetini babadan gelen eşey kromozomu belirler.
Sık yapılan hata: Cinsiyeti annenin belirlediğini sanmak. Anne her durumda X verir; fark yaratan, babadan gelen kromozomdur.
Cevap A.`
},
{
  id: "fen-kl-107",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 1,
  soru: `Mendel, kalıtımla ilgili deneylerinde bezelye bitkisini kullanmıştır.
**Aşağıdakilerden hangisi Mendel'in bezelyeyi seçmesinin nedenlerinden biri __değildir__?**`,
  gorsel: null,
  secenekler: [
    "Kısa sürede çok sayıda döl vermesi",
    "Karakterlerinin kolayca ayırt edilebilmesi",
    "Kendi kendine tozlaşabilmesi",
    "Karakterlerinin çok sayıda ara biçim göstermesi"
  ],
  dogru: 3,
  hatalar: [
    "Doğru bir nedeni eleme: bezelye kısa sürede çok tohum verir; bu, sonuçları çok sayıda bitkide görmeyi sağlar.",
    "Doğru bir nedeni eleme: bezelyenin karakterleri (sarı-yeşil, uzun-kısa gibi) birbirinden kolayca ayrılır.",
    "Doğru bir nedeni eleme: bezelye kendi kendine tozlaşabildiği için saf döller kolayca elde edilir.",
    null
  ],
  aciklama: `Mendel'in bezelyeyi seçmesinin nedenleri, sonuçları kolay ve güvenilir biçimde gözleyebilmesiyle ilgilidir.
Adım 1: Bezelye kısa sürede çok sayıda tohum verir. Bu, bir çaprazlamanın sonucunu çok sayıda bitkide görmeyi sağlar.
Adım 2: Bezelyenin karakterleri iki belirgin hâlde görülür: tohum ya sarıdır ya yeşil, boy ya uzundur ya kısa. Bu yüzden karakterler kolayca ayırt edilir.
Adım 3: Bezelye kendi kendine tozlaşabilir; bu sayede saf döller elde edilebilir.
Adım 4: "Çok sayıda ara biçim" ise bezelyenin özelliği değildir. Ara biçimler olsaydı karakterleri ayırt etmek zorlaşırdı.
Sık yapılan hata: Çeşitliliği her durumda avantaj sanmak. Mendel'in işini kolaylaştıran, karakterlerin iki net hâlde görülmesiydi.
Cevap D.`
},
{
  id: "fen-kl-108",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 1,
  soru: `Mendel, bezelyelerde karakterlerin atalardan yavrulara nasıl aktarıldığını incelemiştir.
**Mendel'in bu çalışmalarından elde edilen sonuçlarla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Karakterlerin aktarımı insan ve hayvanlarda da benzer biçimde gerçekleşir.",
    "Sonuçlar bezelye dışındaki bitkilerde geçerli değildir.",
    "Sonuçlar bitkilerde geçerlidir, hayvanlarda geçerli değildir.",
    "Sonuçlar çiçek rengi dışındaki karakterlerde geçerli değildir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Deneyde kullanılan canlıyı kuralın sınırı sanma: Mendel bezelye kullandı ama bulduğu aktarım kuralları başka canlılarda da benzer biçimde işler.",
    "Bitki ve hayvanı ayrı tutma: hayvanlarda da karakterler genlerle, benzer biçimde aktarılır.",
    "Tek bir karakteri kuralın sınırı sanma: Mendel tohum rengi, tohum şekli, boy gibi birçok karakteri incelemiş ve hepsinde benzer sonuç bulmuştur."
  ],
  aciklama: `Mendel çalışmalarında bezelye kullanmıştır ama bulduğu aktarım kuralları bezelyeye özgü değildir.
Adım 1: Karakterler canlılarda genlerle aktarılır. Yavru, her karakter için bir geni anneden, bir geni babadan alır.
Adım 2: Bu yüzden baskın ve çekinik genlerin aktarımı insanlarda ve hayvanlarda da benzer biçimde gerçekleşir.
Adım 3: Mendel tek bir karakterle yetinmemiş; tohum rengi, tohum şekli, boy gibi birçok karakterde aynı kuralları gözlemiştir.
Sağlama: Mendel'in bezelyeyi seçmesinin nedeni, bezelyenin deneye uygun olmasıdır; kuralların yalnız bezelyede geçerli olması değildir.
Cevap A.`
},
{
  id: "fen-kl-109",
  kazanim: "F.8.2.2.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bezelyede uzun boy geni (U), kısa boy genine (u) baskındır.
**Buna göre genotipi Uu olan bir bezelye bitkisinin fenotipi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Uzun boylu", "Kısa boylu", "Orta boylu", "Boyu belirlenemez"],
  dogru: 0,
  hatalar: [
    null,
    "Çekinik geni etkili sanma: kısa boy geni u, yanında baskın U geni varken etkisini gösteremez.",
    "Genlerin karışıp ara özellik oluşturduğunu sanma: bezelyede baskın gen çekinik genin etkisini örter; orta boy oluşmaz.",
    "Melezin görünüşünü tahmin edilemez sanma: baskın gen hangisiyse melez bitki o özelliği gösterir."
  ],
  aciklama: `Melez bir bireyde baskın genin belirlediği özellik ortaya çıkar; çekinik genin etkisi örtülür.
Adım 1: Uu genotipinde bir baskın (U) ve bir çekinik (u) gen vardır. Yani bitki melezdir.
Adım 2: Baskın gen U uzun boyu belirler. Çekinik u geninin etkisi görünmez.
Adım 3: Öyleyse bitkinin fenotipi uzun boydur.
Sık yapılan hata: İki genin "karışıp" ortalama bir boy verdiğini düşünmek. Bezelyede baskın gen, çekinik genin etkisini örter.
Cevap A.`
},
{
  id: "fen-kl-110",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bezelyede sarı tohum geni (S), yeşil tohum genine (s) baskındır. Genotipi SS olan bir bitki, genotipi ss olan bir bitkiyle çaprazlanmıştır.
**Buna göre oluşan bitkilerin genotipi ve tohum rengi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["SS – sarı", "ss – yeşil", "Ss – sarı", "Ss – yeşil"],
  dogru: 2,
  hatalar: [
    "Yalnız bir atanın genlerini alma: yavru, genlerden birini SS atadan, diğerini ss atadan alır; SS olamaz.",
    "Çekinik atanın genlerini tek başına aktarma: yavru, SS atadan mutlaka bir S geni alır; ss olamaz.",
    null,
    "Melezin rengini çekinik sanma: Ss bitkide baskın S geni etkisini gösterir, tohum sarı olur."
  ],
  aciklama: `Yavru, her karakter için genlerden birini bir atadan, diğerini öbür atadan alır.
Adım 1: SS bitkinin üreme hücrelerinin hepsi S geni taşır. ss bitkinin üreme hücrelerinin hepsi s geni taşır.
Adım 2: Döllenmede bir S ile bir s birleşir. Bütün yavruların genotipi Ss olur.
Adım 3: Ss bitkide baskın S geni etkisini gösterir. Tohum rengi sarıdır.
Sağlama: Yavruların hepsi Ss olduğu için hepsi melez döldür; saf döl yavru oluşmaz.
Cevap C.`
},
{
  id: "fen-kl-111",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 1,
  soru: "**İnsanda anneden çocuğa aktarılan eşey kromozomuyla ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Çocuk kızsa X, erkekse Y kromozomudur.",
    "X ya da Y kromozomu olabilir.",
    "Çocuk erkekse anneden eşey kromozomu gelmez.",
    "Çocuk kız da olsa erkek de olsa her zaman X kromozomudur."
  ],
  dogru: 3,
  hatalar: [
    "Y kromozomunun anneden gelebileceğini sanma: annede Y kromozomu yoktur; erkek çocuğun Y kromozomu babadan gelir.",
    "Anneyi babayla karıştırma: X ya da Y verebilen ebeveyn babadır; annenin eşey kromozomları XX'tir.",
    "Erkek çocuğun eşey kromozomlarını eksik düşünme: erkek çocukta XY vardır ve buradaki X anneden gelir.",
    null
  ],
  aciklama: `Kadınlarda eşey kromozomları XX, erkeklerde XY'dir.
Adım 1: Annenin iki eşey kromozomu da X'tir. Bu yüzden yumurta hücrelerinin hepsi X taşır.
Adım 2: Kız çocuk XX'tir: bir X anneden, bir X babadan gelir.
Adım 3: Erkek çocuk XY'dir: X anneden, Y babadan gelir.
Adım 4: Öyleyse anneden gelen eşey kromozomu, çocuğun cinsiyeti ne olursa olsun X'tir.
Sağlama: Anne her durumda aynı kromozomu verdiğine göre, çocuklar arasındaki cinsiyet farkını babadan gelen kromozom oluşturur.
Cevap D.`
},
{
  id: "fen-kl-112",
  kazanim: "F.8.2.2.3",
  kademe: 1,
  zorluk: 1,
  soru: `Akraba evliliklerinden doğan çocuklarda bazı kalıtsal hastalıkların görülme olasılığı daha yüksektir.
**Bu durumun temel nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Akraba eşlerin kromozom sayılarının farklı olması",
    "Akraba eşlerin baskın genlerini çocuğa aktaramaması",
    "Akraba eşlerin genlerinin çocukta değişime uğraması",
    "Akraba eşlerin aynı çekinik geni taşıma olasılığının yüksek olması"
  ],
  dogru: 3,
  hatalar: [
    "Kromozom sayısını sorunun kaynağı sanma: insanların vücut hücrelerindeki kromozom sayısı akraba olsun olmasın aynıdır.",
    "Gen aktarımını yanlış düşünme: akraba eşler de baskın genlerini çocuklarına aktarabilir; sorun baskın genlerle ilgili değildir.",
    "Akrabalığın genleri değiştirdiğini sanma: akraba evliliği genlerde değişiklik yapmaz; aynı çekinik genin iki kopya hâlinde bir araya gelme olasılığını artırır.",
    null
  ],
  aciklama: `Birçok kalıtsal hastalık çekinik genlerle aktarılır. Bu hastalığın görülmesi için çocuğun hem anneden hem babadan aynı çekinik geni alması gerekir.
Adım 1: Akrabalar ortak atalardan geldiği için birbirine benzeyen genler taşır.
Adım 2: Bu yüzden akraba iki kişinin aynı çekinik hastalık genini taşıma olasılığı, akraba olmayan iki kişiye göre yüksektir.
Adım 3: İki eş de aynı çekinik geni taşıyorsa çocuğun bu genden iki tane alma olasılığı ortaya çıkar. Hastalık da böyle görülür.
Sık yapılan hata: Akraba evliliğinin genleri bozduğunu sanmak. Genler değişmez; değişen, aynı çekinik genin bir araya gelme olasılığıdır.
Cevap D.`
},
{
  id: "fen-kl-113",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede mor çiçek geni (M), beyaz çiçek genine (m) baskındır. Genotipi Mm olan iki bezelye bitkisi çaprazlanmıştır.
**Buna göre oluşacak bitkilerin kaçta kaçının beyaz çiçekli olması beklenir?**`,
  gorsel: null,
  secenekler: ["0", "[[1|4]]", "[[1|2]]", "[[3|4]]"],
  dogru: 1,
  hatalar: [
    "Atalar mor çiçekli diye yavruların da hepsini mor sanma: iki ata da m geni taşıdığı için mm yavrular oluşabilir.",
    null,
    "Melez oranını cevap sanma: yavruların yarısı Mm'dir ama onlar mor çiçeklidir; beyaz olan yalnız mm'dir.",
    "Baskın ile çekinik fenotipi karıştırma: [[3|4]] mor çiçekli bitkilerin oranıdır."
  ],
  aciklama: `Çaprazlama sonucunu bulmak için atalardan gelebilecek genleri eşleştiren bir tablo (çaprazlama tablosu) kurulur.
Adım 1: Mm bitkinin üreme hücreleri M ya da m geni taşır. İki ata için de durum aynıdır.
Adım 2: Olası eşleşmeler: MM, Mm, Mm, mm. Dört eşit olasılık vardır.
Adım 3: Beyaz çiçek çekinik olduğu için yalnız mm bitkiler beyaz çiçeklidir. Dört olasılıktan biri mm'dir.
Adım 4: Beyaz çiçekli bitkilerin oranı [[1|4]] olur.
Sağlama: Mor çiçekliler MM, Mm, Mm yani [[3|4]]; beyazlar [[1|4]]. İkisinin toplamı 1 eder.
Cevap B.`
},
{
  id: "fen-kl-114",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede yuvarlak tohum geni (Y), buruşuk tohum genine (y) baskındır. Saf döl yuvarlak tohumlu bir bitki, melez yuvarlak tohumlu bir bitkiyle çaprazlanmıştır.
**Buna göre oluşan tohumların yüzde kaçının yuvarlak olması beklenir?**`,
  gorsel: null,
  secenekler: ["%100", "%75", "%50", "%25"],
  dogru: 0,
  hatalar: [
    null,
    "Melez × melez sonucunu ezbere uygulama: %75, iki melez atanın çaprazlanmasında yuvarlak tohum oranıdır; burada atalardan biri saftır.",
    "Saf döl oranını yuvarlak oranı sanma: yavruların %50'si YY (saf), %50'si Yy (melez) olur; ikisi de yuvarlaktır.",
    "Soruyu ters okuma: %25, iki melez atanın çaprazlanmasındaki buruşuk tohum oranıdır; burada buruşuk tohum oluşmaz."
  ],
  aciklama: `Önce ataların genotiplerini yaz: saf döl yuvarlak YY, melez yuvarlak Yy'dir.
Adım 1: YY atanın bütün üreme hücreleri Y geni taşır.
Adım 2: Yy atanın üreme hücreleri Y ya da y taşır.
Adım 3: Olası yavrular: YY, Yy, YY, Yy. Her yavruda en az bir Y geni vardır.
Adım 4: Baskın Y geni bulunan her tohum yuvarlaktır. Yuvarlak tohum oranı %100 olur.
Sık yapılan hata: Atalardan biri melez diye buruşuk tohum beklemek. Buruşuk tohum için iki atadan da y geni gelmelidir; YY ata y veremez.
Cevap A.`
},
{
  id: "fen-kl-115",
  kazanim: "F.8.2.2.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede sarı tohum geni (S), yeşil tohum genine (s) baskındır. Emre'nin bahçesinde sarı tohumlu bir bezelye bitkisi vardır; bitkinin genotipi bilinmemektedir. Emre bu bitki için aşağıdaki yargıları yazmıştır.
I. Bitkinin genotipi SS'dir.
II. Bitki kendi kendine tozlaşırsa yeşil tohum oluşmaz.
III. Bitkinin genotipinde en az bir S geni bulunur.
**Buna göre Emre'nin yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 2,
  hatalar: [
    "Baskın fenotipi saf sanma: sarı tohumlu bitki SS olabileceği gibi Ss de olabilir; SS olduğu kesin değildir.",
    "Bitkinin saf olduğunu varsayma: bitki Ss ise kendi kendine tozlaşınca ss, yani yeşil tohum oluşabilir.",
    null,
    "Olasılığı kesinlik sanma: I ve II ancak bitki SS ise doğrudur; genotip bilinmediği için bu yargılar kesin değildir."
  ],
  aciklama: `Baskın özelliği gösteren bir bireyin genotipi iki türlü olabilir: saf (SS) ya da melez (Ss).
Adım 1: I. yargıyı kontrol et. Sarı tohumlu bitki SS de Ss de olabilir. Genotipin SS olduğu kesin değildir.
Adım 2: II. yargıyı kontrol et. Bitki Ss ise kendi kendine tozlaşmada ss eşleşmesi oluşabilir ve yeşil tohum çıkar. Bu yargı da kesin değildir.
Adım 3: III. yargıyı kontrol et. Tohum sarı olduğuna göre bitkide baskın S geni mutlaka vardır; SS de Ss de en az bir S taşır. Kesinlikle doğrudur.
Adım 4: Kesinlikle doğru olan yalnız III'tür.
Sık yapılan hata: "Kesinlikle" kökünü gözden kaçırmak. Bir yargının doğru olabilmesi yetmez; her olası genotipte doğru olmalıdır.
Cevap C.`
},
{
  id: "fen-kl-116",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `İnsanda erkeklerin vücut hücrelerinde XY eşey kromozomları bulunur. Bir erkeğin ürettiği çok sayıda sperm hücresi incelenmiştir.
**Buna göre bu sperm hücrelerinin yaklaşık yüzde kaçı Y kromozomu taşır?**`,
  gorsel: null,
  secenekler: ["%25", "%50", "%75", "%100"],
  dogru: 1,
  hatalar: [
    "Annenin kromozomlarını da hesaba katma: soru yalnız babanın spermlerini soruyor; anneyle çaprazlama tablosu kurmaya gerek yok.",
    null,
    "3'e 1 oranını her yere uygulama: bu oran iki melez bezelyenin çaprazlanmasına aittir; spermlerde X ve Y eşit sayıdadır.",
    "Erkeğin bütün spermlerini Y taşıyıcı sanma: erkekte bir X bir Y vardır; spermlerin yarısı X taşır."
  ],
  aciklama: `Üreme hücreleri oluşurken eşey kromozomlarından yalnız biri üreme hücresine geçer.
Adım 1: Erkeğin eşey kromozomları X ve Y'dir.
Adım 2: Her sperm hücresine bu iki kromozomdan biri geçer: ya X ya Y.
Adım 3: X ve Y'nin spermlere geçme olasılığı eşittir. Spermlerin yaklaşık yarısı X, yarısı Y taşır.
Adım 4: Y taşıyan spermlerin oranı yaklaşık %50'dir.
Sağlama: Her döllenmede çocuğun erkek olma olasılığının yarı yarıya olmasının nedeni de budur.
Cevap B.`
},
{
  id: "fen-kl-117",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede mor çiçek geni M, beyaz çiçek geni m harfiyle gösterilir. Genotipi Mm olan bir bezelye bitkisi üreme hücreleri oluşturmaktadır.
**Bu bitkinin üreme hücreleriyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Üreme hücrelerinin tamamı baskın olan M genini taşır.",
    "Üreme hücrelerinin yarısı M, yarısı m geni taşır.",
    "Üreme hücrelerinin dörtte üçü M, dörtte biri m geni taşır.",
    "Her üreme hücresi M ve m genlerini birlikte taşır."
  ],
  dogru: 1,
  hatalar: [
    "Yalnız baskın genin aktarıldığını sanma: çekinik gen de üreme hücrelerine geçer; m geni kaybolmaz.",
    null,
    "Fenotip oranını üreme hücrelerine uygulama: 3'e 1, iki melezin yavrularındaki fenotip oranıdır; üreme hücrelerinin oranı değildir.",
    "Gen çiftinin bütün olarak aktarıldığını sanma: üreme hücresine gen çiftinden yalnız biri geçer."
  ],
  aciklama: `Üreme hücresi oluşurken gen çiftindeki iki genden yalnız biri bu hücreye geçer.
Adım 1: Bitkinin gen çifti Mm'dir; yani bir M ve bir m geni vardır.
Adım 2: Her üreme hücresi bu iki genden birini alır. M'yi alma olasılığı ile m'yi alma olasılığı eşittir.
Adım 3: Üreme hücrelerinin yarısı M, yarısı m taşır.
Sağlama: Döllenmede iki atadan birer gen gelir ve yavruda yeniden gen çifti oluşur. Üreme hücresi iki gen taşısaydı yavrunun dört geni olurdu.
Cevap B.`
},
{
  id: "fen-kl-118",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede uzun boy geni U, kısa boy geni u ile gösterilir. Bir öğrenci, genotipi Uu olan bir bitkiyle genotipi uu olan bir bitkinin çaprazlamasını tabloda göstermiş, iki kutuyu boş bırakmıştır.
**Buna göre tablodaki 1 ve 2 numaralı kutulara yazılması gereken genotipler aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Üreme hücreleri</th><th>U</th><th>u</th></tr><tr><th>u</th><td>1</td><td>uu</td></tr><tr><th>u</th><td>Uu</td><td>2</td></tr></table>`,
  secenekler: ["1: Uu, 2: uu", "1: UU, 2: uu", "1: Uu, 2: Uu", "1: uu, 2: Uu"],
  dogru: 0,
  hatalar: [
    null,
    "Satırdaki geni yanlış okuma: 1 numaralı kutuda sütundan U, satırdan u gelir; uu ata U veremediği için UU oluşamaz.",
    "Komşu kutuyu kopyalama: 2 numaralı kutuda sütundan u, satırdan u gelir; sonuç uu olmalıdır.",
    "Sütun ve satırı karıştırma: 1 numaralı kutu U sütununda, 2 numaralı kutu u sütunundadır; genotipler yer değiştirmiştir."
  ],
  aciklama: `Çaprazlama tablosunda her kutuya, o kutunun sütun başındaki gen ile satır başındaki gen birlikte yazılır.
Adım 1: 1 numaralı kutu U sütununda ve u satırındadır. Birleşince Uu olur.
Adım 2: 2 numaralı kutu u sütununda ve u satırındadır. Birleşince uu olur.
Adım 3: Tablo tamamlanınca yavrular Uu, uu, Uu, uu olur.
Sağlama: Yavruların yarısı Uu (uzun), yarısı uu (kısa) olur. Tabloda UU yoktur, çünkü uu ata U geni veremez.
Cevap A.`
},
{
  id: "fen-kl-119",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Fen dersinde öğretmen, insanda üreme hücrelerinin taşıdığı eşey kromozomlarını anlatmıştır. Ders sonunda Kerem defterine şu cümleleri yazmıştır.
I. Yumurta hücresi Y kromozomu taşıyabilir.
II. Sperm hücresi X ya da Y kromozomu taşır.
III. Bir kız çocuğunun iki X kromozomu da babasından gelir.
**Buna göre Kerem'in yazdığı cümlelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Annede Y kromozomu olduğunu sanma: kadının eşey kromozomları XX'tir; yumurta hücresi Y taşıyamaz.",
    "Kız çocuğun iki X'ini tek ebeveyne bağlama: bir X anneden, bir X babadan gelir; baba tek bir eşey kromozomu verir.",
    "Bütün cümleleri doğru sayma: I ve III yanlıştır; yumurta Y taşımaz, kız çocuğun X'lerinden biri anneden gelir."
  ],
  aciklama: `Kadında XX, erkekte XY eşey kromozomları bulunur. Her üreme hücresine bunlardan biri geçer.
Adım 1: I. cümleyi kontrol et. Kadında Y kromozomu yoktur. Yumurta hücresi yalnız X taşır. Yanlıştır.
Adım 2: II. cümleyi kontrol et. Erkekte X ve Y vardır. Sperm hücresine bunlardan biri geçer. Doğrudur.
Adım 3: III. cümleyi kontrol et. Çocuk her ebeveynden bir eşey kromozomu alır. Kız çocuğun bir X'i anneden, bir X'i babadan gelir. Yanlıştır.
Adım 4: Doğru olan yalnız II'dir.
Sık yapılan hata: Babanın iki eşey kromozomunu birden verdiğini düşünmek. Üreme hücresine, gen çiftinde olduğu gibi, yalnız biri geçer.
Cevap A.`
},
{
  id: "fen-kl-120",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede yuvarlak tohum geni (Y), buruşuk tohum genine (y) baskındır. Bir bahçıvan iki bezelye bitkisini çaprazlamış ve elde ettiği 400 tohumu şekillerine göre saymıştır.
**Tablodaki sonuca göre çaprazlanan bitkilerin genotipleri aşağıdakilerden hangisi olabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Tohum şekli</th><th>Tohum sayısı</th></tr><tr><td>Yuvarlak</td><td>300</td></tr><tr><td>Buruşuk</td><td>100</td></tr></table>`,
  secenekler: ["YY × yy", "Yy × yy", "Yy × Yy", "YY × Yy"],
  dogru: 2,
  hatalar: [
    "Buruşuk tohumları hesaba katmama: YY × yy çaprazlamasında bütün tohumlar Yy olur, buruşuk tohum çıkmaz.",
    "Oranı yanlış eşleştirme: Yy × yy çaprazlamasında yuvarlak ve buruşuk tohumlar yaklaşık yarı yarıya olur; burada oran 3'e 1'dir.",
    null,
    "Buruşuk tohum için gereken koşulu unutma: YY ata y geni veremez; bu çaprazlamada buruşuk (yy) tohum oluşmaz."
  ],
  aciklama: `Yavrulardaki fenotip oranından ataların genotiplerine geri gidilebilir.
Adım 1: Oranı bul: 300 yuvarlak, 100 buruşuk. 300 ÷ 100 = 3; yani oran 3'e 1'dir.
Adım 2: Buruşuk tohum (yy) oluştuğuna göre iki ata da en az bir y geni taşımalıdır.
Adım 3: Yuvarlak tohumlar çoğunlukta olduğuna göre atalarda Y geni de vardır. İki ata da Yy olmalıdır.
Adım 4: Yy × Yy çaprazlamasında olası yavrular YY, Yy, Yy, yy'dir; 3 yuvarlak, 1 buruşuk. Tablo bununla uyumludur.
Sağlama: Her seçeneği sınayabilirsin: yalnız Yy × Yy hem buruşuk tohum verir hem de 3'e 1 oranını sağlar.
Cevap C.`
},
{
  id: "fen-kl-121",
  kazanim: "F.8.2.2.3",
  kademe: 1,
  zorluk: 2,
  soru: `Çekinik genlerle aktarılan bazı kalıtsal hastalıklar, akraba evliliklerinden doğan çocuklarda, akraba olmayan eşlerin çocuklarına göre daha sık görülmektedir.
**Bu bilgiye göre aşağıdaki çıkarımlardan hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Akraba evliliğinden doğan her çocukta bu hastalıklar görülür.",
    "Akraba olmayan eşlerin çocuklarında da bu hastalıklar görülebilir.",
    "Akraba evliliği, baskın genlerin çocuğa aktarılmasını engeller.",
    "Bu hastalıklar yalnızca akraba evliliklerinde ortaya çıkar."
  ],
  dogru: 1,
  hatalar: [
    "Aşırı genelleme: \"daha sık görülür\" ifadesi \"her çocukta görülür\" anlamına gelmez; akraba evliliğinden sağlıklı çocuklar da doğar.",
    null,
    "Bilgide olmayan bir sonuç çıkarma: akraba evliliği baskın genlerin aktarımını engellemez; artan şey aynı çekinik genin bir araya gelme olasılığıdır.",
    "Sıklığı sınır sanma: \"daha sık\" ifadesi, hastalığın başka evliliklerde görülmediğini göstermez."
  ],
  aciklama: `Bir bilginin "daha sık" dediği şeyi "her zaman" ya da "yalnızca" diye okumamak gerekir.
Adım 1: Bilgi iki grubu karşılaştırıyor: akraba evliliğinden doğan çocuklarda hastalık daha sık, akraba olmayanlarda daha seyrek görülüyor.
Adım 2: "Daha seyrek" demek "hiç görülmez" demek değildir. Akraba olmayan iki kişi de aynı çekinik geni taşıyor olabilir. Bu yüzden akraba olmayan eşlerin çocuklarında da hastalık görülebilir.
Adım 3: "Daha sık" demek de "her çocukta" demek değildir. Akraba evliliğinden sağlıklı çocuklar da doğar.
Sık yapılan hata: Bir karşılaştırmayı kesin bir kurala çevirmek. "Olasılık artar" bilgisi, "kesin olur" ya da "başka yerde olmaz" demek değildir.
Cevap B.`
},
{
  id: "fen-kl-122",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede mor çiçek geni (M), beyaz çiçek genine (m) baskındır. Bir öğrenci mor çiçekli bir bitkiyi beyaz çiçekli bir bitkiyle çaprazlamış ve oluşan bitkileri tabloya yazmıştır.
I. Mor çiçekli ata bitki saf döldür.
II. Beyaz çiçekli yavruların genotipi mm'dir.
III. Mor çiçekli yavrular melez döldür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ata bitkiler</th><th>Mor çiçekli yavru</th><th>Beyaz çiçekli yavru</th></tr><tr><td>Mor çiçekli × Beyaz çiçekli</td><td>52</td><td>48</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Mor atayı saf sanma: MM ata yalnız M verir, o zaman beyaz yavru çıkmazdı; beyaz yavrular atanın Mm olduğunu gösterir.",
    "I. yargıyı doğru, III. yargıyı yanlış sayma: mor ata Mm'dir (melez); mor yavrular da beyaz atadan m aldıkları için Mm'dir.",
    null,
    "Bütün yargıları doğru sayma: I yanlıştır; beyaz yavru çıktığına göre mor ata saf değil, melezdir."
  ],
  aciklama: `Çekinik özellikli bir yavru çıkıyorsa, iki ata da o çekinik geni taşıyor demektir.
Adım 1: I. yargıyı kontrol et. Beyaz yavrular (mm) oluşmuş. Beyaz ata m verir; mor ata da m vermiş olmalı. Mor ata Mm'dir, saf değildir. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Beyaz çiçek çekinik özelliktir; beyaz çiçekli her bitki mm'dir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Mor yavrular, beyaz atadan mutlaka bir m almıştır; mor olduklarına göre diğer genleri M'dir. Mor yavrular Mm, yani melezdir. Doğrudur.
Adım 4: Doğru yargılar II ve III'tür.
Sağlama: Mm × mm çaprazlamasında yavruların yarısı Mm (mor), yarısı mm (beyaz) olur. Tablodaki 52'ye 48 bu orana çok yakındır.
Cevap C.`
},
{
  id: "fen-kl-123",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede sarı tohum geni (S), yeşil tohum genine (s) baskındır. Melez sarı tohumlu iki bezelye bitkisi çaprazlanmıştır.
**Buna göre oluşan bitkilerde kaç farklı genotip ve kaç farklı fenotip görülebilir?**`,
  gorsel: null,
  secenekler: ["2 genotip – 2 fenotip", "2 genotip – 3 fenotip", "3 genotip – 3 fenotip", "3 genotip – 2 fenotip"],
  dogru: 3,
  hatalar: [
    "SS ile Ss'yi aynı genotip sayma: ikisi de sarıdır ama gen çiftleri farklıdır; ayrı genotiplerdir.",
    "Genotip ile fenotip sayılarını yer değiştirme: genotip çeşidi 3, fenotip çeşidi 2'dir.",
    "Her genotipin ayrı bir görünüş verdiğini sanma: SS ile Ss aynı renkte (sarı) tohum verir; ara renk oluşmaz.",
    null
  ],
  aciklama: `Genotip gen çiftinin kendisidir; fenotip ise ortaya çıkan görünüştür. Farklı genotipler aynı fenotipi verebilir.
Adım 1: İki ata da Ss'dir. Olası yavrular: SS, Ss, Ss, ss.
Adım 2: Farklı genotipleri say: SS, Ss, ss. Toplam 3 genotip vardır.
Adım 3: Fenotipleri say: SS ve Ss sarı, ss yeşil tohum verir. Toplam 2 fenotip vardır.
Sık yapılan hata: Ss'yi iki kez sayıp 4 genotip bulmak ya da SS ile Ss'yi aynı sanmak. Farklı çeşitleri sayarken her gen çiftini bir kez yaz.
Cevap D.`
},
{
  id: "fen-kl-124",
  kazanim: "F.8.2.2.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bezelyede çiçeklerin gövdenin yan tarafında bulunmasını sağlayan gen (K), çiçeklerin gövdenin ucunda bulunmasını sağlayan gene (k) baskındır. Bir bahçedeki iki bezelye bitkisinden birinin genotipi KK, diğerininki Kk'dir.
I. İki bitkinin de çiçekleri gövdenin yan tarafındadır.
II. Bitkilerin genotipleri birbirinden farklıdır.
III. İki bitki de saf döldür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Genotip farkını gözden kaçırma: KK ile Kk'nin görünüşü aynıdır ama gen çiftleri farklıdır; II de doğrudur.",
    null,
    "Aynı görünüşü aynı saflık sanma: Kk'de iki farklı gen vardır, bu bitki melezdir; III yanlıştır.",
    "Baskın genin etkisini unutma: Kk bitkide baskın K geni vardır, çiçekleri yan taraftadır; I doğrudur."
  ],
  aciklama: `Aynı fenotipteki iki birey farklı genotiplere sahip olabilir.
Adım 1: I. yargıyı kontrol et. KK'de iki baskın gen, Kk'de bir baskın gen vardır. İkisinde de baskın özellik görülür: çiçekler yan taraftadır. Doğrudur.
Adım 2: II. yargıyı kontrol et. KK ile Kk farklı gen çiftleridir. Genotipler farklıdır. Doğrudur.
Adım 3: III. yargıyı kontrol et. KK saf döldür ama Kk'de iki farklı gen olduğu için melez döldür. Yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sağlama: Fenotip aynı, genotip farklı: bu iki bitkiyi yalnızca bakarak birbirinden ayıramazsın.
Cevap B.`
},
{
  id: "fen-kl-125",
  kazanim: "F.8.2.2.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir araştırmacı, bakla şekli bakımından saf döl olan şişkin baklalı bir bezelyeyi saf döl olan boğumlu baklalı bir bezelyeyle çaprazlamıştır. Oluşan bitkilerin bakla şekilleri tabloda verilmiştir.
**Bu sonuca göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Ata bitkiler</th><th>Şişkin baklalı yavru</th><th>Boğumlu baklalı yavru</th></tr><tr><td>Saf şişkin × Saf boğumlu</td><td>120</td><td>0</td></tr></table>`,
  secenekler: [
    "Boğumlu bakla geni baskın, şişkin bakla geni çekiniktir.",
    "Şişkin bakla geni baskın, boğumlu bakla geni çekiniktir.",
    "Oluşan bitkiler bakla şekli bakımından saf döldür.",
    "Boğumlu bakla geni yavrulara hiç aktarılmamıştır."
  ],
  dogru: 1,
  hatalar: [
    "Baskınlığı ters kurma: melez yavrularda görülen özellik baskındır; yavruların hepsi şişkin baklalı olduğuna göre baskın olan şişkin bakla genidir.",
    null,
    "Saf ataların yavrusunu saf sanma: iki farklı saf atadan birer farklı gen alan yavrular melezdir.",
    "Görünmeyen geni yok sanma: boğumlu bakla geni her yavruya geçmiştir ama baskın genin yanında etkisini gösterememiştir."
  ],
  aciklama: `İki farklı saf döl çaprazlandığında yavruların hepsi melez olur ve bu melezlerde görülen özellik baskın özelliktir.
Adım 1: Ataların ikisi de saftır. Şişkin ata yalnız şişkin bakla genini, boğumlu ata yalnız boğumlu bakla genini verir.
Adım 2: Her yavru bu iki genden birer tane alır; yani bütün yavrular melezdir.
Adım 3: Melez yavruların hepsi şişkin baklalı olmuş. Demek ki şişkin bakla geni, boğumlu bakla geninin etkisini örtmüştür.
Adım 4: Şişkin bakla geni baskın, boğumlu bakla geni çekiniktir.
Sık yapılan hata: Yavrularda görünmeyen özelliğin genini "aktarılmadı" sanmak. Gen aktarılmıştır; yalnızca etkisi örtülmüştür.
Cevap B.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "fen-kl-201",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bezelyede şişkin bakla geni (A), boğumlu bakla genine (a) baskındır. Melez şişkin baklalı bir bitki, boğumlu baklalı bir bitkiyle çaprazlanmış ve 600 yeni bitki elde edilmiştir.
**Buna göre bu bitkilerden yaklaşık kaçının boğumlu baklalı olması beklenir?**`,
  gorsel: null,
  secenekler: ["0", "150", "300", "450"],
  dogru: 2,
  hatalar: [
    "Baskın gen bulunan atanın bütün yavrulara baskınlık vereceğini sanma: melez ata a geni de verir; aa yavrular oluşur.",
    "Melez × melez oranını uygulama: [[1|4]] oranı iki melezin çaprazlanmasına aittir; burada atalardan biri aa'dır.",
    null,
    "Soruyu ters okuma ya da 3'e 1 oranını kullanma: 450, iki melezin çaprazlanmasında şişkin baklalıların sayısı olurdu."
  ],
  aciklama: `Önce ataların genotiplerini yaz: melez şişkin Aa, boğumlu aa.
Adım 1: Aa atanın üreme hücreleri A ya da a taşır. aa atanın üreme hücrelerinin hepsi a taşır.
Adım 2: Olası yavrular: Aa, aa, Aa, aa. Yavruların yarısı Aa (şişkin), yarısı aa (boğumlu) olur.
Adım 3: 600 bitkinin yarısı: 600 ÷ 2 = 300 boğumlu baklalı bitki beklenir.
Sık yapılan hata: Her çaprazlamada 3'e 1 oranını kullanmak. Bu oran yalnız iki melezin çaprazlanmasında çıkar; melez × çekinik çaprazlamada oran 1'e 1'dir.
Cevap C.`
},
{
  id: "fen-kl-202",
  kazanim: "F.8.2.2.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bezelyede çiçeklerin gövdenin yan tarafında olmasını sağlayan gen (K), çiçeklerin uçta olmasını sağlayan gene (k) baskındır. Tabloda üç bezelye bitkisinin bu karakter için genotipleri verilmiştir.
**Buna göre hangi bitkilerin fenotipi aynıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Bitki</th><th>Genotip</th></tr><tr><td>1. bitki</td><td>KK</td></tr><tr><td>2. bitki</td><td>Kk</td></tr><tr><td>3. bitki</td><td>kk</td></tr></table>`,
  secenekler: ["1. ve 2. bitki", "1. ve 3. bitki", "2. ve 3. bitki", "1., 2. ve 3. bitki"],
  dogru: 0,
  hatalar: [
    null,
    "Saf dölleri aynı fenotipte sanma: 1. ve 3. bitki saftır ama biri baskın (yan), diğeri çekinik (uç) özellik gösterir.",
    "Küçük harf taşıyanları aynı sanma: 2. bitkide baskın K geni vardır, çiçekleri yan taraftadır; 3. bitkinin çiçekleri uçtadır.",
    "Genotip farkını yok sayma: kk bitkide baskın gen yoktur, çiçekleri uçtadır; üç bitkinin fenotipi aynı değildir."
  ],
  aciklama: `Fenotip, genotipin ortaya çıkardığı görünüştür. En az bir baskın gen taşıyan bitkide baskın özellik görülür.
Adım 1: 1. bitki KK'dir. Baskın gen vardır; çiçekler yan taraftadır.
Adım 2: 2. bitki Kk'dir. Bir baskın gen yeterlidir; çiçekler yine yan taraftadır.
Adım 3: 3. bitki kk'dir. Baskın gen yoktur; çiçekler uçtadır.
Adım 4: Fenotipi aynı olanlar 1. ve 2. bitkidir.
Sağlama: Genotipleri farklı olan 1. ve 2. bitki aynı görünür. Genotip farklı, fenotip aynı olabilir.
Cevap A.`
},
{
  id: "fen-kl-203",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bezelyede uzun boy geni (U), kısa boy genine (u) baskındır. Saf döl uzun boylu bir bitki ile kısa boylu bir bitki çaprazlanarak birinci kuşak bitkiler elde edilmiştir. Daha sonra birinci kuşak bitkiler kendi aralarında çaprazlanmıştır.
I. Birinci kuşak bitkilerin yarısı kısa boyludur.
II. Birinci kuşak bitkilerin tamamı melez döldür.
III. İkinci kuşakta kısa boylu bitkiler ortaya çıkabilir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Melez × çekinik oranını birinci kuşağa uygulama: saf uzun ata yalnız U verdiği için birinci kuşağın hepsi Uu, yani uzun boyludur.",
    "I. yargıyı doğru sayma: birinci kuşakta kısa boylu bitki yoktur; II doğru ama I yanlıştır.",
    "Birinci kuşakta kısa bitki olduğunu sanma: I yanlıştır; kısa boy ancak ikinci kuşakta ortaya çıkar.",
    null
  ],
  aciklama: `Saf baskın ile çekinik bir bitki çaprazlanınca birinci kuşağın hepsi melez olur. Melezler kendi aralarında çaprazlanınca çekinik özellik yeniden görülebilir.
Adım 1: I. yargıyı kontrol et. UU × uu çaprazlamasında bütün yavrular Uu olur. Hepsi uzun boyludur. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Birinci kuşağın hepsi Uu'dur; yani melezdir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Uu × Uu çaprazlamasında uu eşleşmesi oluşabilir. Kısa boylu bitkiler ikinci kuşakta ortaya çıkar. Doğrudur.
Adım 4: Doğru yargılar II ve III'tür.
Sık yapılan hata: Birinci kuşakta görünmeyen kısa boy özelliğinin kaybolduğunu düşünmek. u geni melezlerde saklıdır ve ikinci kuşakta yeniden görünür.
Cevap D.`
},
{
  id: "fen-kl-204",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir ailede anne, baba, kız ve erkek çocuk, eşey kromozomlarıyla ilgili birer cümle söylemiştir.
**Buna göre hangi aile üyesinin söylediği cümle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Anne: Oğlumun erkek olmasını benim yumurta hücrem belirledi.",
    "Baba: Oğlumdaki Y kromozomu benden geldi.",
    "Kız: İki X kromozomum da annemden geldi.",
    "Oğul: X kromozomumu babamdan aldım."
  ],
  dogru: 1,
  hatalar: [
    "Cinsiyeti annenin belirlediğini sanma: yumurta hücresi her durumda X taşır; cinsiyeti babadan gelen kromozom belirler.",
    null,
    "İki X'i tek ebeveyne bağlama: kızın bir X'i anneden, bir X'i babadan gelir.",
    "Erkek çocukta X'in kaynağını ters kurma: baba oğluna Y verir; oğlun X kromozomu anneden gelir."
  ],
  aciklama: `Çocuk, her ebeveynden bir eşey kromozomu alır. Anne XX olduğu için yalnız X verebilir; baba XY olduğu için X ya da Y verebilir.
Adım 1: Annenin cümlesini kontrol et. Yumurta hücresi her durumda X taşır; cinsiyeti belirleyemez. Yanlıştır.
Adım 2: Babanın cümlesini kontrol et. Y kromozomu yalnız babada vardır. Oğlun Y kromozomu babadan gelmiştir. Doğrudur.
Adım 3: Kızın cümlesini kontrol et. Kızın bir X'i anneden, bir X'i babadan gelir. Yanlıştır.
Adım 4: Oğlun cümlesini kontrol et. Oğul babasından Y aldığına göre X'ini annesinden almıştır. Yanlıştır.
Sağlama: Babadan X gelirse çocuk kız, Y gelirse erkek olur. Yani cinsiyeti belirleyen babanın verdiği kromozomdur.
Cevap B.`
},
{
  id: "fen-kl-205",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bezelyede yuvarlak tohum geni (Y), buruşuk tohum genine (y) baskındır. Genotipi Yy olan iki bitki çaprazlanmış ve 400 yeni bitki elde edilmiştir.
**Buna göre bu bitkilerden yaklaşık kaçının melez döl olması beklenir?**`,
  gorsel: null,
  secenekler: ["100", "200", "300", "400"],
  dogru: 1,
  hatalar: [
    "Tek kutuyu sayma: YY de yy de dört olasılıktan birer tanedir; melez (Yy) ise dört olasılıktan ikisidir.",
    null,
    "Fenotip ile genotipi karıştırma: 300, yuvarlak tohumlu bitkilerin sayısıdır; bunların bir kısmı YY yani saftır.",
    "Yavruların ata gibi olacağını sanma: melez atalardan saf döl yavrular da (YY ve yy) oluşur."
  ],
  aciklama: `Melez döl, gen çiftinde iki farklı gen taşıyan bireydir.
Adım 1: Yy × Yy çaprazlamasında olası yavrular YY, Yy, Yy, yy'dir.
Adım 2: Bunlardan melez olanlar Yy'lerdir: dört olasılıktan ikisi, yani yarısı.
Adım 3: 400 bitkinin yarısı: 400 ÷ 2 = 200 melez bitki beklenir.
Sık yapılan hata: Yuvarlak tohumlu bitkilerin hepsini melez sanmak. Yuvarlak bitkilerin bir kısmı YY'dir ve saf döldür.
Cevap B.`
},
{
  id: "fen-kl-206",
  kazanim: "F.8.2.2.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bazı kalıtsal hastalıklar çekinik genlerle aktarılır. Böyle bir hastalığın geninden yalnız birini taşıyan kişi hasta olmaz ama bu geni çocuğuna aktarabilir.
I. Hastalık genini taşıyan bir kişi sağlıklı görünebilir.
II. Akraba evliliklerinde çocuğun bu genden iki tane alma olasılığı artar.
III. Akraba evliliğinden doğan her çocuk bu hastalığa yakalanır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 3,
  hatalar: [
    "Akraba evliliğinin etkisini bilmeme: akrabaların aynı çekinik geni taşıma olasılığı yüksektir; II de doğrudur.",
    "Taşıyıcı kavramını gözden kaçırma: geni tek başına taşıyan kişi hasta olmaz, sağlıklı görünür; I de doğrudur.",
    "Olasılığı kesinlik sanma: akraba evliliği hastalık olasılığını artırır ama her çocuğun hasta olacağı anlamına gelmez.",
    null
  ],
  aciklama: `Çekinik bir hastalığın ortaya çıkması için çocuğun bu genden iki tane, yani hem anneden hem babadan birer tane alması gerekir.
Adım 1: I. yargıyı kontrol et. Geni tek başına taşıyan kişide baskın olan sağlıklı gen etkisini gösterir. Kişi sağlıklı görünür. Doğrudur.
Adım 2: II. yargıyı kontrol et. Akrabalar ortak atalardan gelir; aynı çekinik geni taşıma olasılıkları yüksektir. İki eş de taşıyıcıysa çocuğun geni iki kopya hâlinde alma olasılığı artar. Doğrudur.
Adım 3: III. yargıyı kontrol et. Olasılığın artması hastalığın kesin görüleceği anlamına gelmez. Yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sık yapılan hata: "Olasılık artar" ifadesini "kesin olur" diye okumak.
Cevap D.`
},
{
  id: "fen-kl-207",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bezelyede bakla rengi için saf döl yeşil baklalı bir bitki ile saf döl sarı baklalı bir bitki çaprazlanmıştır.
**Buna göre oluşan bitkilerin bakla rengiyle ilgili aşağıdakilerden hangisi beklenir?**`,
  gorsel: null,
  secenekler: [
    "Tamamı yeşil baklalı olur.",
    "Dörtte üçü yeşil, dörtte biri sarı baklalı olur.",
    "Yarısı yeşil, yarısı sarı baklalı olur.",
    "Tamamı sarı baklalı olur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "İkinci kuşak oranını birinci kuşağa uygulama: 3'e 1 oranı melezlerin kendi aralarında çaprazlanmasında çıkar; saf × saf çaprazlamada çıkmaz.",
    "Melez × çekinik oranını uygulama: iki ata da saf olduğu için yavruların hepsi aynı genotipte (melez) olur.",
    "Tohum rengi ile bakla rengini karıştırma: tohum renginde sarı baskındır ama bakla renginde baskın olan yeşildir."
  ],
  aciklama: `Bezelyede bakla rengi karakterinde yeşil bakla geni, sarı bakla genine baskındır. (Dikkat: tohum renginde ise sarı baskındır.)
Adım 1: İki ata da saf döldür. Yeşil baklalı ata yalnız yeşil bakla genini, sarı baklalı ata yalnız sarı bakla genini verir.
Adım 2: Bütün yavrular bu iki genden birer tane alır; hepsi melezdir.
Adım 3: Melezlerde baskın gen etkisini gösterir. Baskın olan yeşil bakla geni olduğu için yavruların tamamı yeşil baklalıdır.
Sık yapılan hata: "Sarı baskındır" kuralını her karaktere uygulamak. Bu kural tohum rengi içindir; bakla renginde yeşil baskındır.
Cevap A.`
},
{
  id: "fen-kl-208",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `İnsanda bir kadının vücut hücrelerinde 44 vücut kromozomu ile XX eşey kromozomları bulunur. Üreme hücreleri oluşurken kromozom sayısı yarıya iner.
**Buna göre bu kadının yumurta hücresinin kromozom yapısı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["22 + XX", "44 + X", "22 + X", "22 + Y"],
  dogru: 2,
  hatalar: [
    "Eşey kromozomlarını yarıya indirmeme: vücut kromozomları yarıya iner de eşey kromozomları da yarıya iner; yumurtada tek X bulunur.",
    "Vücut kromozomlarını yarıya indirmeme: yumurta hücresinde 44 değil 22 vücut kromozomu bulunur.",
    null,
    "Kadında Y kromozomu olduğunu sanma: kadının eşey kromozomları XX'tir; yumurta hücresi Y taşıyamaz."
  ],
  aciklama: `Üreme hücrelerinde kromozom sayısı vücut hücresindekinin yarısıdır. Hem vücut kromozomları hem eşey kromozomları yarıya iner.
Adım 1: Vücut kromozomlarını yarıya indir: 44 ÷ 2 = 22.
Adım 2: Eşey kromozomlarını yarıya indir: XX'ten yalnız biri, yani bir X yumurtaya geçer.
Adım 3: Yumurta hücresinin kromozom yapısı 22 + X olur.
Sağlama: Döllenmede 22 + X yumurta ile 22 + X ya da 22 + Y sperm birleşir; yavru yeniden 44 + XX ya da 44 + XY olur.
Cevap C.`
},
{
  id: "fen-kl-209",
  kazanim: "F.8.2.2.1",
  kademe: 2,
  zorluk: 2,
  soru: `Ece, bezelyelerde kalıtım konusunu tekrar ederken aşağıdaki yargıları yazmıştır.
I. Çekinik özelliği gösteren bir bitki saf döldür.
II. Baskın özelliği gösteren bir bitki saf döldür.
III. Melez bir bitki, çekinik geni yavrularına aktarabilir.
**Buna göre Ece'nin yazdığı yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "Melezdeki çekinik geni yok sanma: melez bitkinin üreme hücrelerinin yarısı çekinik geni taşır; III de doğrudur.",
    "Baskın fenotipi saflıkla karıştırma: baskın özelliği gösteren bitki melez de olabilir; II yanlıştır.",
    "Baskın özellikli bitkileri saf sanma: II yanlıştır; baskın özellik hem saf hem melez bitkide görülür.",
    null
  ],
  aciklama: `Bir bitkinin görünüşünden genotipi her zaman çıkarılamaz. Çekinik özellikte çıkarılabilir, baskın özellikte çıkarılamaz.
Adım 1: I. yargıyı kontrol et. Çekinik özellik ancak iki gen de çekinik olduğunda görülür. Bu bitkinin iki geni aynıdır; saf döldür. Doğrudur.
Adım 2: II. yargıyı kontrol et. Baskın özellik iki baskın genle de, bir baskın bir çekinik genle de görülür. Bitki melez olabilir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Melez bitki çekinik geni taşır ve bu gen üreme hücrelerinin yarısına geçer. Yavrulara aktarılabilir. Doğrudur.
Adım 4: Doğru yargılar I ve III'tür.
Sık yapılan hata: Görünüşe bakarak her bitkinin genotipini bildiğini sanmak. Yalnız çekinik görünüşteki bitkinin genotipi kesin bilinir.
Cevap D.`
},
{
  id: "fen-kl-210",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir öğrenci tohum rengi için yaptığı çaprazlamanın sonuçlarını tabloya yazmış ama ata bitkilerin üreme hücrelerini gösteren kutuları doldurmayı unutmuştur. Sarı tohum geni S, yeşil tohum geni s ile gösterilmektedir.
**Buna göre çaprazlanan ata bitkilerin genotipleri aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Üreme hücreleri</th><th>?</th><th>?</th></tr><tr><th>?</th><td>Ss</td><td>ss</td></tr><tr><th>?</th><td>Ss</td><td>ss</td></tr></table>`,
  secenekler: ["Ss × Ss", "SS × ss", "Ss × ss", "ss × ss"],
  dogru: 2,
  hatalar: [
    "Tablodaki yavruları hesaba katmama: Ss × Ss çaprazlamasında SS yavru da oluşurdu; tabloda SS yoktur.",
    "Yeşil yavruları gözden kaçırma: SS × ss çaprazlamasında bütün yavrular Ss olurdu; tabloda ss yavrular vardır.",
    null,
    "Sarı yavruları gözden kaçırma: ss × ss çaprazlamasında S geni hiç olmaz; tabloda Ss yavrular vardır."
  ],
  aciklama: `Çaprazlama tablosunda her sütun bir atanın, her satır öbür atanın üreme hücresini gösterir.
Adım 1: Sütunlara bak. Birinci sütundaki yavrular Ss, ikinci sütundakiler ss'dir. Sütunlardaki ortak olmayan genler S ve s'dir. Demek ki bir ata S ve s veren Ss'dir.
Adım 2: Satırlara bak. İki satırdaki bütün yavrularda s geni vardır. Satırdaki ata iki kez s vermiştir; yani ss'dir.
Adım 3: Çaprazlanan atalar Ss × ss'dir.
Sağlama: Ss × ss çaprazlamasında yavrular Ss, ss, Ss, ss olur. Tabloyla aynıdır.
Cevap C.`
},
{
  id: "fen-kl-211",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bezelyede yuvarlak tohum geni (Y), buruşuk tohum genine (y) baskındır. Bir araştırmacı yuvarlak tohumlu bir bezelye bitkisini birkaç yıl boyunca kendi kendine tozlaştırmıştır. Her yıl elde ettiği yüzlerce tohumun hiçbiri buruşuk çıkmamıştır.
**Buna göre bu bitkinin genotipi ve döl türü aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Yy – melez döl", "YY – saf döl", "YY – melez döl", "Yy – saf döl"],
  dogru: 1,
  hatalar: [
    "Melezin kendi kendine tozlaşma sonucunu unutma: Yy bitki kendi kendine tozlaşsaydı tohumların yaklaşık dörtte biri buruşuk (yy) olurdu.",
    null,
    "Döl türünü yanlış adlandırma: genotip YY doğru bulundu ama iki geni aynı olan birey melez değil saf döldür.",
    "Genotipi ve döl türünü karıştırma: Yy bitki kendi kendine tozlaşsaydı buruşuk tohumlar da çıkardı; ayrıca Yy'de iki gen farklı olduğu için birey saf değil melezdir."
  ],
  aciklama: `Kendi kendine tozlaşma, bir bitkinin saf mı melez mi olduğunu anlamanın yollarından biridir.
Adım 1: Tohum yuvarlak olduğuna göre bitkide en az bir Y geni vardır: YY ya da Yy.
Adım 2: Bitki Yy olsaydı kendi kendine tozlaşmada yy eşleşmesi oluşur ve tohumların yaklaşık dörtte biri buruşuk çıkardı.
Adım 3: Yüzlerce tohumun hiçbiri buruşuk değil. Öyleyse bitki y geni taşımaz; genotipi YY'dir.
Adım 4: YY'de iki gen aynı olduğu için bitki saf döldür. Melez döl, gen çiftinde iki farklı gen taşıyan bireydir; YY melez olamaz.
Sık yapılan hata: Yalnız görünüşe bakıp karar vermek. Yuvarlak tohumlu bitki melez de olabilir; karar, yavrulardaki sonuçla verilir.
Cevap B.`
},
{
  id: "fen-kl-212",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bezelyede uzun boy geni (U), kısa boy genine (u) baskındır. Bir öğrenci kısa boylu bir bezelye bitkisi için aşağıdaki yargıları yazmıştır.
I. Bu bitkinin üreme hücrelerinin bir kısmı U geni taşır.
II. Bu bitki uzun boylu bir bitkiyle çaprazlanırsa yavruların tamamı kısa boylu olur.
III. Bu bitki kendi kendine tozlaşırsa oluşan bitkilerin tamamı kısa boylu olur.
**Buna göre öğrencinin yazdığı yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 2,
  hatalar: [
    "Kısa boylu bitkinin genotipini yanlış kurma: kısa boylu bitki uu'dur; U geni taşımaz, üreme hücreleri de U taşıyamaz.",
    "Çekinik atanın özelliğini yavrulara dayatma: uzun ata en az bir U verir; U alan yavrular uzun boylu olur.",
    null,
    "I ve II'yi doğru sayma: uu bitki U geni vermez; uzun boylu bir atayla çaprazlandığında da uzun boylu yavrular oluşur."
  ],
  aciklama: `Kısa boy çekinik özellik olduğu için kısa boylu bitkinin genotipi kesin olarak uu'dur.
Adım 1: I. yargıyı kontrol et. uu bitkinin iki geni de u'dur. Üreme hücrelerinin hepsi u taşır. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Uzun boylu ata UU ya da Uu'dur; en az bir U verir. U alan yavrular uzun boylu olur. Yavruların tamamı kısa olamaz. Yanlıştır.
Adım 3: III. yargıyı kontrol et. uu × uu çaprazlamasında bütün yavrular uu olur. Hepsi kısa boyludur. Doğrudur.
Adım 4: Doğru olan yalnız III'tür.
Sağlama: Çekinik özellikli bitki kendi kendine tozlaştığında hep aynı özelliği verir; çünkü saf döldür.
Cevap C.`
},
{
  id: "fen-kl-213",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 2,
  soru: `Mendel'in bezelyelerde gözlediği karakter aktarımı, insanlarda ve hayvanlarda da benzer biçimde gerçekleşir. Örneğin bir koyun sürüsünde doğan kuzunun yün rengini de bir gen çifti belirler.
**Buna göre kuzunun yün rengini belirleyen gen çiftiyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Genlerin ikisi de anneden gelir.",
    "Genlerin ikisi de babadan gelir.",
    "Genlerden biri anneden, diğeri babadan gelir.",
    "Genler, baskın özelliği gösteren ebeveynden gelir."
  ],
  dogru: 2,
  hatalar: [
    "Anneyi tek kaynak sanma: yavru, genlerin yalnız yarısını anneden alır; diğer yarısı babadan gelir.",
    "Babayı tek kaynak sanma: babanın üreme hücresi gen çiftinden yalnız birini taşır; diğer gen anneden gelir.",
    null,
    "Baskınlığı aktarım kuralı sanma: baskınlık, genin etkisini gösterip göstermemesiyle ilgilidir; genler iki ebeveynden de gelir."
  ],
  aciklama: `Eşeyli üreyen canlılarda yavru, her karakter için bir geni anneden, bir geni babadan alır. Bu kural bezelyede olduğu gibi hayvanlarda ve insanda da geçerlidir.
Adım 1: Annenin üreme hücresi, yün rengi gen çiftinden yalnız birini taşır.
Adım 2: Babanın üreme hücresi de bu gen çiftinden yalnız birini taşır.
Adım 3: Döllenmede bu iki gen birleşir ve kuzunun gen çifti oluşur. Genlerden biri anneden, diğeri babadan gelir.
Sağlama: Bezelyede de çaprazlama tablosunun sütunları bir atadan, satırları öbür atadan gelen genleri gösterir; kuzu için de aynı düşünce geçerlidir.
Cevap C.`
},
{
  id: "fen-kl-214",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bezelyede uzun boy geni (U), kısa boy genine (u) baskındır. Bir bahçıvanın uzun boylu bir bezelye bitkisi vardır ve bahçıvan bu bitkinin saf döl mü yoksa melez döl mü olduğunu öğrenmek istemektedir. Bunun için bitkiyi farklı yollarla çoğaltıp oluşan yavruların boylarını incelemeyi düşünmektedir. Yavrular arasında kısa boylu bitki çıkıp çıkmamasına bakarak karar verecektir.
**Buna göre bahçıvan aşağıdaki yollardan hangisiyle bitkinin saf mı melez mi olduğunu __anlayamaz__?**`,
  gorsel: null,
  secenekler: [
    "Bitkiyi saf döl uzun boylu bir bitkiyle çaprazlamak",
    "Bitkiyi kısa boylu bir bitkiyle çaprazlamak",
    "Bitkiyi melez uzun boylu bir bitkiyle çaprazlamak",
    "Bitkinin kendi kendine tozlaşmasını sağlamak"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İşe yarayan yolu eleme: bitki Uu ise kısa boylu (uu) bitkiyle çaprazlandığında yavruların yaklaşık yarısı kısa boylu olur; UU ise hiç kısa çıkmaz.",
    "İşe yarayan yolu eleme: bitki Uu ise melez bitkiyle çaprazlandığında uu yavrular oluşabilir; UU ise kısa boylu yavru çıkmaz.",
    "İşe yarayan yolu eleme: bitki Uu ise kendi kendine tozlaşmada uu yavrular oluşur; UU ise hiç kısa boylu yavru çıkmaz."
  ],
  aciklama: `Bir bitkinin melez olup olmadığını anlamak için, melezse kısa boylu yavru çıkabilecek bir çaprazlama seçilir. Her yolu, bitki UU olsaydı ve Uu olsaydı diye iki kez dene.
Adım 1: Saf uzun (UU) bitkiyle çaprazlama: UU ata her yavruya U verir. Bitki ister UU ister Uu olsun, bütün yavrular uzun olur. Sonuç iki durumda da aynıdır; bitki hakkında bilgi vermez.
Adım 2: Kısa boylu (uu) bitkiyle çaprazlama: bitki Uu ise kısa yavrular çıkar, UU ise çıkmaz. Ayırt edilebilir.
Adım 3: Melez (Uu) bitkiyle çaprazlama: bitki Uu ise uu yavrular çıkabilir, UU ise çıkmaz. Ayırt edilebilir.
Adım 4: Kendi kendine tozlaşma: bitki Uu ise uu yavrular çıkar, UU ise çıkmaz. Ayırt edilebilir.
Sık yapılan hata: "Saf bitkiyle çaprazlamak en güvenli yoldur" diye düşünmek. Saf baskın ata bütün yavrulara baskın gen verdiği için bilinmeyen atanın çekinik genini gizler.
Cevap A.`
},
{
  id: "fen-kl-215",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir öğrenci çiçek rengi bakımından farklı bezelye bitkileriyle üç çaprazlama yapmış ve oluşan bitkileri saymıştır. Öğrenci, çiçek renklerinden hangisinin baskın olduğunu önceden bilmemektedir. Sonuçlar tabloda verilmiştir.
I. Mor çiçek rengi, beyaz çiçek rengine baskındır.
II. 2. çaprazlamadaki mor çiçekli ata bitki melez döldür.
III. 3. çaprazlamada oluşan bitkilerin tamamı saf döldür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Ata bitkiler</th><th>Mor çiçekli yavru</th><th>Beyaz çiçekli yavru</th></tr><tr><td>1.</td><td>Mor × Mor</td><td>310</td><td>102</td></tr><tr><td>2.</td><td>Mor × Beyaz</td><td>205</td><td>198</td></tr><tr><td>3.</td><td>Beyaz × Beyaz</td><td>0</td><td>400</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "Tek satırla yetinme: baskınlığı 1. çaprazlamadan buldun ama 2. ve 3. çaprazlamaları yorumlamadın; II ve III de doğrudur.",
    "3. çaprazlamayı gözden kaçırma: beyaz çekinik olduğuna göre beyaz çiçekli bitkilerin hepsi saftır; III de doğrudur.",
    "Baskınlığı tablodan çıkaramama: 1. çaprazlamada iki mor atadan beyaz yavru çıkmıştır; bu, morun baskın olduğunu gösterir. I de doğrudur.",
    null
  ],
  aciklama: `İki aynı fenotipli atadan farklı fenotipli yavru çıkıyorsa, atalar melezdir ve yavruda ortaya çıkan yeni özellik çekiniktir.
Adım 1: I. yargıyı kontrol et. 1. çaprazlamada iki mor atadan beyaz yavrular çıkmış. Beyaz gen atalarda saklıydı; yani beyaz çekinik, mor baskındır. Oran da 310'a 102, yaklaşık 3'e 1'dir. Doğrudur.
Adım 2: II. yargıyı kontrol et. 2. çaprazlamada yavruların yaklaşık yarısı beyaz. Beyaz ata yalnız çekinik gen verir; beyaz yavruların öbür çekinik geni mor atadan gelmiştir. Mor ata melezdir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Beyaz çekinik olduğu için beyaz çiçekli her bitkinin iki geni de çekiniktir. 3. çaprazlamadaki yavruların hepsi beyazdır; hepsi saf döldür. Doğrudur.
Adım 4: Üç yargı da doğrudur.
Sağlama: Mor geni M, beyaz geni m ile göster: 1. çaprazlama Mm × Mm, 2. çaprazlama Mm × mm, 3. çaprazlama mm × mm. Üç oran da tabloyla uyumludur.
Cevap D.`
},
{
  id: "fen-kl-216",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bezelyede sarı tohum geni (S), yeşil tohum genine (s) baskındır. Bir bahçıvanın elinde genotipi SS, Ss ve ss olan üç tür bezelye bitkisi vardır. Bahçıvan gelecek yıl olabildiğince çok yeşil tohum elde etmek istemektedir. Bunun için genotipleri birbirinden farklı olan iki bitkiyi seçip çaprazlayacaktır.
**Buna göre bahçıvanın aşağıdaki çaprazlamalardan hangisini seçmesi en uygundur?**`,
  gorsel: null,
  secenekler: ["SS × Ss", "Ss × ss", "SS × ss", "Ss × Ss"],
  dogru: 1,
  hatalar: [
    "Yeşil tohum için gereken koşulu unutma: SS ata s veremez; bu çaprazlamada yeşil (ss) tohum hiç oluşmaz.",
    null,
    "Yeşil atayı yeterli sanma: yeşil ata s verse de SS ata her tohuma S verir; bütün tohumlar sarı (Ss) olur.",
    "Koşulu gözden kaçırma: bu iki bitki aynı genotiptedir; üstelik Ss × Ss'de yeşil tohum oranı [[1|4]], Ss × ss'dekinden azdır."
  ],
  aciklama: `Yeşil tohum çekinik özelliktir; bir tohumun yeşil olması için iki atadan da s geni gelmelidir.
Adım 1: SS × Ss: SS ata yalnız S verir. Yeşil tohum oluşmaz (0).
Adım 2: SS × ss: SS ata yine yalnız S verir. Bütün tohumlar Ss, yani sarı olur (0).
Adım 3: Ss × ss: Ss ata yarı yarıya S ya da s, ss ata her zaman s verir. Tohumların [[1|2]]'si ss, yani yeşil olur.
Adım 4: Ss × Ss aynı genotipli bitkilerdir, koşula uymaz; üstelik yeşil oranı yalnız [[1|4]]'tür.
Adım 5: En çok yeşil tohum Ss × ss çaprazlamasından elde edilir.
Sık yapılan hata: "Melez × melez en çok çeşitlilik verir, en iyisi odur" diye düşünmek. Soru çeşitliliği değil, yeşil tohum oranını soruyor.
Cevap B.`
},
{
  id: "fen-kl-217",
  kazanim: "F.8.2.2.3",
  kademe: 2,
  zorluk: 3,
  soru: `Deniz ile Can kuzendir ve ikisi de sağlıklıdır. Ortak büyükbabalarında, çekinik bir genle aktarılan kalıtsal bir hastalık görülmüştür. Evlenmeyi düşünen Deniz ile Can bir genetik danışmana başvurmuştur. Görüşmede aşağıdaki yargılar dile getirilmiştir.
I. Bu çiftin bir çocuğunda hastalık görülürse Deniz ile Can'ın ikisi de bu geni taşıyor demektir.
II. Yapılacak testte Can'ın bu geni taşımadığı anlaşılırsa çiftin çocuklarında bu hastalık görülmez.
III. Büyükbabaları hasta olduğuna göre Deniz ile Can bu geni kesinlikle taşır.
**Buna göre dile getirilen yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Aktarımı kesin sanma: büyükbabanın geni çocuklarına geçer ama her torun bu geni almayabilir; III yanlıştır. Taşıyıcı olmayan eşten hep sağlıklı gen geleceği için II doğrudur.",
    "Hasta çocuğun ne gösterdiğini atlama: çekinik hastalık için çocuğa iki ebeveynden de birer hastalık geni gelmelidir; bu yüzden I doğrudur. III ise yanlıştır.",
    "Olasılığı kesinlik sanma: büyükbabadaki genin her toruna ulaşması kesin değildir; Deniz ile Can geni taşıyabilir ama taşımayabilir de. III yanlıştır."
  ],
  aciklama: `Çekinik bir hastalık, ancak kişi bu genden iki tane taşıdığında ortaya çıkar. Geni tek başına taşıyan kişiye taşıyıcı denir; taşıyıcı sağlıklıdır ama geni çocuğuna aktarabilir.
Adım 1: I. yargıyı kontrol et. Hasta bir çocuk bu genden iki tane almıştır: biri anneden, biri babadan. Deniz ile Can sağlıklı olduğuna göre ikisi de geni tek olarak taşıyan taşıyıcıdır. Doğrudur.
Adım 2: II. yargıyı kontrol et. Can geni taşımıyorsa her çocuğa sağlıklı gen verir. Deniz geni taşısa bile çocukta en fazla bir hastalık geni bulunur; hastalık ortaya çıkmaz. Doğrudur.
Adım 3: III. yargıyı kontrol et. Büyükbaba geni çocuklarına aktarır, ama bu çocuklar da geni kendi çocuklarına her seferinde vermeyebilir. Deniz ile Can'ın geni taşıması mümkündür, kesin değildir. Yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sık yapılan hata: "Ailede hastalık varsa bu gen herkese geçer" diye düşünmek. Akrabalık, aynı geni taşıma olasılığını artırır; herkesin taşıdığı anlamına gelmez.
Cevap A.`
},
{
  id: "fen-kl-218",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bezelyede çiçeklerin gövdenin yan tarafında olmasını sağlayan gen (K), çiçeklerin uçta olmasını sağlayan gene (k) baskındır. Selin, yan tarafta çiçekli bir bitkiyi uçta çiçekli bir bitkiyle çaprazlamış ve oluşan fidelerin bir kısmının uçta çiçekli olduğunu görmüştür. Ardından yan tarafta çiçekli ata bitkinin kendi kendine tozlaşmasını sağlamıştır.
**Buna göre bu tozlaşmadan oluşacak bitkilerin kaçta kaçının uçta çiçekli olması beklenir?**`,
  gorsel: null,
  secenekler: ["[[3|4]]", "[[1|2]]", "[[1|3]]", "[[1|4]]"],
  dogru: 3,
  hatalar: [
    "Baskın ile çekinik oranı karıştırma: [[3|4]], Kk × Kk çaprazlamasında yan tarafta çiçekli bitkilerin oranıdır.",
    "İlk çaprazlamanın oranını tekrar kullanma: [[1|2]], Kk × kk çaprazlamasının oranıdır; kendi kendine tozlaşma Kk × Kk demektir.",
    "Genotip çeşidini olasılık sanma: üç genotip (KK, Kk, kk) vardır ama eşit olasılıklı değildir; Kk iki kez oluşur.",
    null
  ],
  aciklama: `Önce ilk çaprazlamanın sonucundan yan tarafta çiçekli atanın genotipini bul, sonra kendi kendine tozlaşmayı hesapla.
Adım 1: Uçta çiçekli ata kk'dir ve yavrulara hep k verir.
Adım 2: Yavruların bir kısmı uçta çiçekli (kk) çıkmış. Bu yavrular öbür k genini yan tarafta çiçekli atadan almıştır. Demek ki bu ata Kk, yani melezdir.
Adım 3: Kendi kendine tozlaşma Kk × Kk çaprazlamasıdır. Olası yavrular: KK, Kk, Kk, kk.
Adım 4: Uçta çiçekli olan yalnız kk'dir: dört olasılıktan biri, yani [[1|4]].
Sık yapılan hata: Üç farklı genotip var diye [[1|3]] demek. Kk iki farklı yoldan oluşur; olasılıklar dört eşit kutuya göre sayılır.
Cevap D.`
},
{
  id: "fen-kl-219",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir ailenin dört çocuğunun dördü de kızdır ve aile beşinci çocuğunu beklemektedir. Komşuları, bu ailede hep kız çocuk doğduğu için beşinci çocuğun da büyük olasılıkla kız olacağını söylemiştir. Fen dersinde bu durumu tartışan öğrenciler aşağıdaki yargıları öne sürmüştür.
I. Önceki doğumlar nedeniyle beşinci çocuğun kız olma olasılığı, erkek olma olasılığından yüksektir.
II. Babanın sperm hücrelerinin çoğu X kromozomu taşıdığı için bu ailede kız çocuklar doğmaktadır.
III. Beşinci çocuğun cinsiyetini, babadan gelen sperm hücresinin taşıdığı eşey kromozomu belirleyecektir.
**Buna göre öne sürülen yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "Önceki doğumların olasılığı etkilediğini sanma: her döllenme ayrı bir olaydır; kız olma olasılığı her seferinde yarı yarıyadır. I yanlış, III doğrudur.",
    null,
    "Aile geçmişini kural sanma: babanın spermlerinin yaklaşık yarısı X, yarısı Y taşır; dört kız doğması şans eseridir. I ve II yanlıştır.",
    "Sperm oranını yanlış bilme: babanın spermlerinin yaklaşık yarısı X, yarısı Y taşır; spermlerin çoğunun X taşıdığı söylenemez. II yanlıştır."
  ],
  aciklama: `Her döllenmede çocuğun cinsiyeti, yumurtayı dölleyen spermin X ya da Y taşımasına bağlıdır ve bu olasılık her seferinde yarı yarıyadır.
Adım 1: I. yargıyı kontrol et. Babanın spermlerinin yaklaşık yarısı X, yarısı Y taşır. Önceki doğumlar bu oranı değiştirmez. Beşinci çocuğun kız olma olasılığı da [[1|2]]'dir. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Baba XY'dir. Sperm hücreleri oluşurken X ile Y ayrılır; spermlerin yarısına X, yarısına Y geçer. Spermlerin çoğunun X taşıdığı söylenemez; dört kız doğması şans eseridir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Annenin yumurtası her durumda X taşır. Spermden X gelirse kız, Y gelirse erkek olur. Cinsiyeti babadan gelen kromozom belirler. Doğrudur.
Adım 4: Doğru olan yalnız III'tür.
Sık yapılan hata: "Arka arkaya kız doğduysa sıra erkektedir" ya da "bu ailede hep kız doğar" diye düşünmek. Her doğum için olasılık yeniden [[1|2]]'dir.
Cevap B.`
},
{
  id: "fen-kl-220",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bezelyede şişkin bakla geni (A), boğumlu bakla genine (a) baskındır. Bir çiftçi genotipi Aa olan iki bitkiyi çaprazlamış ve oluşan tohumları ekmiştir. Çiftçi, sonraki yıllarda kendi kendine tozlaştığında hep aynı bakla şeklini veren, yani saf döl olan bitkiler yetiştirmek istemektedir. Ancak çiftçi bitkileri yalnızca baklalarına bakarak ayırt edebilmektedir.
**Buna göre çiftçinin saf döl olduğundan emin olarak seçebileceği bitkiler aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Şişkin baklalı bitkilerin tamamı",
    "Boğumlu baklalı bitkilerin tamamı",
    "Şişkin ve boğumlu baklalı bitkilerden eşit sayıda",
    "Şişkin baklalı bitkilerin en iri baklalı olanları"
  ],
  dogru: 1,
  hatalar: [
    "Baskın görünüşü saflık sanma: şişkin baklalı bitkilerin bir kısmı AA, bir kısmı Aa'dır; Aa olanlar saf değildir.",
    null,
    "Karışık seçimi güvenli sanma: seçilen şişkin baklalıların arasında melez (Aa) bitkiler bulunabilir.",
    "Görünüşteki büyüklüğü genotipe bağlama: baklanın iriliği, bitkinin AA mı Aa mı olduğunu göstermez; ikisi de şişkin bakla verir."
  ],
  aciklama: `Görünüşe bakarak genotipi kesin bilebildiğin tek grup, çekinik özelliği gösteren bitkilerdir.
Adım 1: Aa × Aa çaprazlamasında yavrular AA, Aa, Aa, aa olur.
Adım 2: Şişkin baklalı bitkiler AA ya da Aa olabilir. Görünüşleri aynıdır; hangisinin melez olduğu bakarak anlaşılamaz.
Adım 3: Boğumlu baklalı bitkiler ancak aa olabilir. İki geni aynıdır; saf döldür.
Adım 4: Çiftçi, saf döl olduğundan emin olarak yalnız boğumlu baklalı bitkileri seçebilir.
Sağlama: aa bitkiler kendi kendine tozlaştığında yalnız a geni aktarılır; yavruların hepsi yine boğumlu baklalı olur.
Cevap B.`
},
{
  id: "fen-kl-221",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bezelyede sarı tohum geni (S), yeşil tohum genine (s) baskındır. Aslı, genotipi Ss olan bir bezelye bitkisinin kendi kendine tozlaşmasını sağlamış, oluşan baklaları tek tek açarak tohumları saymıştır. Tabloda ilk üç baklanın ve bitkideki bütün baklaların sonuçları verilmiştir.
I. Her baklada sarı ve yeşil tohum sayılarının oranı 3'e 1 olmalıdır.
II. Sayılan tohum sayısı arttıkça sarı ve yeşil tohum sayılarının oranı 3'e 1'e yaklaşır.
III. Oluşan yeşil tohumların tamamı saf döldür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Sayılan</th><th>Sarı tohum</th><th>Yeşil tohum</th></tr><tr><td>1. bakla</td><td>5</td><td>2</td></tr><tr><td>2. bakla</td><td>6</td><td>0</td></tr><tr><td>3. bakla</td><td>3</td><td>1</td></tr><tr><td>Bütün baklalar</td><td>296</td><td>104</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Beklenen oranı her küçük grupta kesin sanma: 2. baklada hiç yeşil tohum yoktur; oran küçük sayılarda sapabilir. Ayrıca II ve III doğrudur.",
    "Yeşil tohumların genotipini gözden kaçırma: yeşil çekinik olduğu için yeşil tohumların hepsi ss'dir, yani saftır; III de doğrudur.",
    "Olasılığı kesinlik sanma: 3'e 1 beklenen orandır; tek tek baklalarda tutmayabilir. I yanlış, II doğrudur.",
    null
  ],
  aciklama: `Çaprazlama tablosundan bulunan oran bir olasılıktır. Az sayıda tohumda sapabilir, çok sayıda tohumda beklenen orana yaklaşır.
Adım 1: I. yargıyı kontrol et. 2. baklada 6 sarı, 0 yeşil; 1. baklada 5'e 2 var. Tek baklalarda oran 3'e 1 çıkmıyor. "Olmalıdır" demek yanlıştır.
Adım 2: II. yargıyı kontrol et. Bütün baklalarda 296 sarı, 104 yeşil var. 296 ÷ 104 yaklaşık 2,8'dir; bu 3'e çok yakındır. Sayı arttıkça oran beklenene yaklaşmıştır. Doğrudur.
Adım 3: III. yargıyı kontrol et. Yeşil tohum rengi çekinik olduğu için yeşil tohumlar ss'dir. İki geni aynıdır; saf döldür. Doğrudur.
Adım 4: Doğru yargılar II ve III'tür.
Sık yapılan hata: Çaprazlama sonucundaki oranı "her dört tohumdan tam biri yeşil olur" diye okumak. Oran, çok sayıda tohum sayıldığında ortaya çıkan bir eğilimdir.
Cevap D.`
},
{
  id: "fen-kl-222",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bezelyede yuvarlak tohum geni (Y), buruşuk tohum genine (y) baskındır. Bir araştırmacı tohum şekli bakımından dört çaprazlama yapmış ve oluşan tohumları tabloya kaydetmiştir.
**Buna göre hangi çaprazlamada ata bitkilerden birinin melez döl olduğu kesin olarak söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Ata bitkiler</th><th>Oluşan tohumlar</th></tr><tr><td>K</td><td>Yuvarlak × Buruşuk</td><td>Yaklaşık yarısı yuvarlak, yarısı buruşuk</td></tr><tr><td>L</td><td>Yuvarlak × Yuvarlak</td><td>Tamamı yuvarlak</td></tr><tr><td>M</td><td>Yuvarlak × Buruşuk</td><td>Tamamı yuvarlak</td></tr><tr><td>N</td><td>Buruşuk × Buruşuk</td><td>Tamamı buruşuk</td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 0,
  hatalar: [
    null,
    "Olasılığı kesinlik sanma: L'deki atalar YY × YY de olabilir, YY × Yy de; atalardan birinin melez olduğu kesin değildir.",
    "Sonucu ters yorumlama: M'de buruşuk atadan y alan yavruların hepsi yuvarlak çıkmış; bu, yuvarlak atanın YY yani saf olduğunu gösterir.",
    "Çekinik özellikli atayı melez sanma: buruşuk tohumlu bitkiler yy'dir; iki geni aynı olduğu için saftır."
  ],
  aciklama: `Bir atanın melez olduğunu kesin söyleyebilmek için yavrularda, o ata saf olsaydı çıkamayacak bir sonuç görmelisin.
Adım 1: K'yi incele. Buruşuk ata yy'dir, hep y verir. Buruşuk yavru çıkmış; bu yavrular öbür y'yi yuvarlak atadan almıştır. Yuvarlak ata Yy, yani kesin olarak melezdir.
Adım 2: L'yi incele. Bütün tohumlar yuvarlak. Atalar YY × YY de olabilir, YY × Yy de. Melez ata olup olmadığı kesin değildir.
Adım 3: M'yi incele. Buruşuk atadan y alan yavruların hepsi yuvarlak; yuvarlak ata her yavruya Y vermiştir. Bu ata YY'dir; iki ata da saftır.
Adım 4: N'yi incele. İki ata da buruşuk, yani yy'dir. İkisi de saftır.
Sık yapılan hata: "Yuvarlak × yuvarlak çaprazlamasında melez ata olabilir" bilgisini "kesin vardır" diye okumak. Soru kesinlik istiyor.
Cevap A.`
},
{
  id: "fen-kl-223",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Fen dersinde öğrenciler bir model etkinliği yapmıştır. İki torbanın her birine 20 tane M yazılı ve 20 tane m yazılı kart konmuştur. Torbalar, çiçek rengi bakımından melez (Mm) olan iki bezelye bitkisini temsil etmektedir. Öğrenciler iki torbadan gözlerini kapatarak birer kart çekmiş, kartları yan yana koyup kaydetmiş ve kartları torbalarına geri atmıştır. Bu işlem 100 kez tekrarlanmıştır.
I. Bir torbadan çekilen tek kart, ata bitkinin genotipini gösterir.
II. İki torbadan çekilen kartların yan yana konması döllenmeyi temsil eder.
III. Çekilişlerin yaklaşık yarısında mm eşleşmesi çıkması beklenir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Üreme hücresi ile genotipi karıştırma: çekilen tek kart bir üreme hücresini, yani gen çiftinden yalnız birini temsil eder; genotip iki genle gösterilir.",
    null,
    "İki yanlışı birlikte kabul etme: tek kart genotip değildir (I yanlış); mm eşleşmesinin beklenen oranı yarı değil dörtte birdir (III yanlış).",
    "Melez oranını çekinik oranı sanma: çekilişlerin yaklaşık yarısında Mm çıkar; mm eşleşmesi yaklaşık dörtte birde görülür."
  ],
  aciklama: `Bu etkinlikte her torba bir ata bitkiyi, torbadan çekilen her kart o atanın bir üreme hücresini temsil eder.
Adım 1: I. yargıyı kontrol et. Tek kart M ya da m'dir; gen çiftinden yalnız birini gösterir. Bu bir üreme hücresidir, genotip değildir. Ata bitkinin genotipi Mm'dir. Yanlıştır.
Adım 2: II. yargıyı kontrol et. İki ata bitkiden gelen üreme hücrelerinin birleşmesi döllenmedir. Kartların yan yana konması bunu temsil eder. Doğrudur.
Adım 3: III. yargıyı kontrol et. Mm × Mm çaprazlamasında olası eşleşmeler MM, Mm, Mm, mm'dir. mm eşleşmesi dörtte bir olasılıklıdır; 100 çekilişte yaklaşık 25 kez beklenir. Yanlıştır.
Adım 4: Doğru olan yalnız II'dir.
Sağlama: Kartların torbaya geri atılması, her çekilişte M ve m olasılığının eşit kalmasını sağlar; tıpkı her döllenmenin ayrı bir olay olması gibi.
Cevap B.`
},
{
  id: "fen-kl-224",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir tohum şirketi, çiçek rengi bakımından satacağı bezelye tohumlarının tamamının melez döl olmasını istemektedir. Şirketin seralarında çiçek rengi için genotipleri MM, Mm ve mm olan çok sayıda bitki bulunmaktadır. Şirket tohumları, bu bitkilerden ikisini çaprazlayarak elde edecek ve her partiden rastgele alınan tohumları kontrol edecektir.
**Buna göre şirketin isteğine uygun tohumlar aşağıdaki çaprazlamaların hangisinden elde edilir?**`,
  gorsel: null,
  secenekler: ["Mm × Mm", "Mm × mm", "MM × mm", "MM × Mm"],
  dogru: 2,
  hatalar: [
    "Melez ataların hep melez yavru vereceğini sanma: Mm × Mm'de yavruların yarısı MM ya da mm, yani saf döl olur.",
    "Atalardan biri melez diye yavruları melez sanma: Mm × mm'de yavruların yarısı mm, yani saf döl olur.",
    null,
    "Melez atayı yeterli sanma: MM × Mm'de yavruların yarısı MM, yani saf döl olur."
  ],
  aciklama: `Bütün yavruların melez olması için her yavrunun bir atadan M, öbür atadan m alması gerekir.
Adım 1: Mm × Mm: yavrular MM, Mm, Mm, mm. Yarısı saftır; uygun değildir.
Adım 2: Mm × mm: yavrular Mm, mm, Mm, mm. Yarısı saftır; uygun değildir.
Adım 3: MM × mm: MM ata her yavruya M, mm ata her yavruya m verir. Bütün yavrular Mm'dir; hepsi melezdir.
Adım 4: MM × Mm: yavrular MM, Mm, MM, Mm. Yarısı saftır; uygun değildir.
Sık yapılan hata: "Melez yavru istiyorsam melez ata seçmeliyim" diye düşünmek. Melez atalar saf yavru da verir; kesin sonuç iki farklı saf atadan alınır.
Cevap C.`
},
{
  id: "fen-kl-225",
  kazanim: "F.8.2.2.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir öğrenci, bezelyede bakla şekli karakterinin aktarımını şemadaki gibi modellemiştir. Modelde dolu daire şişkin bakla genini, boş daire boğumlu bakla genini göstermektedir. Şişkin bakla geni, boğumlu bakla genine baskındır.
I. Oluşan yavruların tamamı şişkin baklalıdır.
II. Ata bitkilerin ikisi de melez döldür.
III. Yavruların hiçbiri boğumlu bakla genini taşımaz.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 320" role="img" aria-label="Bakla şekli modeli: 1. ata iki dolu daire, 2. ata bir dolu bir boş daire; dört yavrudan 1 ve 3 iki dolu daire, 2 ve 4 bir dolu bir boş daire taşır"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="60" y="34" width="150" height="60" rx="10"/><rect x="310" y="34" width="150" height="60" rx="10"/><rect x="20" y="176" width="105" height="60" rx="10"/><rect x="145" y="176" width="105" height="60" rx="10"/><rect x="270" y="176" width="105" height="60" rx="10"/><rect x="395" y="176" width="105" height="60" rx="10"/></g><g stroke="currentColor" stroke-width="2"><circle cx="110" cy="64" r="14" fill="var(--vurgu)"/><circle cx="160" cy="64" r="14" fill="var(--vurgu)"/><circle cx="360" cy="64" r="14" fill="var(--vurgu)"/><circle cx="410" cy="64" r="14" fill="none"/><circle cx="52" cy="206" r="14" fill="var(--vurgu)"/><circle cx="93" cy="206" r="14" fill="var(--vurgu)"/><circle cx="177" cy="206" r="14" fill="var(--vurgu)"/><circle cx="218" cy="206" r="14" fill="none"/><circle cx="302" cy="206" r="14" fill="var(--vurgu)"/><circle cx="343" cy="206" r="14" fill="var(--vurgu)"/><circle cx="427" cy="206" r="14" fill="var(--vurgu)"/><circle cx="468" cy="206" r="14" fill="none"/></g><g stroke="currentColor" stroke-width="2"><line x1="260" y1="104" x2="260" y2="150"/></g><polygon points="252,148 268,148 260,162" fill="currentColor"/><g fill="currentColor" font-size="16" text-anchor="middle"><text x="135" y="24">1. ata</text><text x="385" y="24">2. ata</text><text x="72" y="258">1. yavru</text><text x="197" y="258">2. yavru</text><text x="322" y="258">3. yavru</text><text x="447" y="258">4. yavru</text></g><text x="260" y="72" fill="currentColor" font-size="28" text-anchor="middle">×</text><g stroke="currentColor" stroke-width="2"><circle cx="110" cy="296" r="10" fill="var(--vurgu)"/><circle cx="300" cy="296" r="10" fill="none"/></g><g fill="currentColor" font-size="15"><text x="128" y="301">Şişkin bakla geni</text><text x="318" y="301">Boğumlu bakla geni</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Saf atayı melez sanma: 1. atada iki dolu daire vardır; iki geni aynı olduğu için saf döldür. II yanlıştır.",
    "Görünmeyen geni yok sanma: 2. ve 4. yavrularda boş daire vardır; bu yavrular boğumlu bakla genini taşır. III yanlıştır.",
    "Bütün yargıları doğru sayma: 1. ata saftır (II yanlış) ve iki yavru boğumlu bakla genini taşır (III yanlış)."
  ],
  aciklama: `Modelde her kutu bir bitkinin gen çiftini gösterir. Dolu daire baskın (şişkin), boş daire çekinik (boğumlu) gendir.
Adım 1: I. yargıyı kontrol et. Dört yavrunun her birinde en az bir dolu daire, yani baskın gen vardır. Hepsi şişkin baklalıdır. Doğrudur.
Adım 2: II. yargıyı kontrol et. 1. atada iki dolu daire var; genleri aynıdır, saf döldür. Yalnız 2. ata melezdir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. 2. ve 4. yavruda birer boş daire vardır. Bu yavrular boğumlu bakla genini taşır ama etkisi örtülmüştür. Yanlıştır.
Adım 4: Doğru olan yalnız I'dir.
Sık yapılan hata: Bütün yavrular şişkin baklalı olduğu için hiçbirinde boğumlu bakla geni olmadığını sanmak. Görünüş aynı olsa da genotip farklı olabilir.
Cevap A.`
}
);
