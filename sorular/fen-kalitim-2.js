// Fen Bilimleri — Kalıtım: Kademe 3 (LGS Ayarı) ve Havuz (kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["kalitim"] = window.LGS_BANK["kalitim"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "fen-kl-301",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tarım lisesindeki öğrenciler, tohum şekli bakımından saf döl yuvarlak tohumlu bir bezelye ile buruşuk tohumlu bir bezelyeyi çaprazlamıştır. Elde edilen birinci kuşak bitkilerin hepsi yuvarlak tohumlu olmuştur. Öğrenciler daha sonra birinci kuşak bitkileri kendi kendine tozlaştırmış ve ikinci kuşakta tabloda görülen tohumları elde etmiştir.
**Buna göre ikinci kuşaktaki 800 tohumdan yaklaşık kaçı tohum şekli bakımından melez döldür?**`,
  gorsel: `<table class="tablo"><tr><th>Kuşak</th><th>Yapılan işlem</th><th>Elde edilen tohumlar</th></tr><tr><td>Ebeveynler</td><td>Saf döl yuvarlak × Buruşuk</td><td>—</td></tr><tr><td>1. kuşak</td><td>Ebeveynlerin çaprazlanması</td><td>Hepsi yuvarlak</td></tr><tr><td>2. kuşak</td><td>1. kuşak bitkiler kendi kendine tozlaştırıldı</td><td>Toplam 800 tohum</td></tr></table>`,
  secenekler: ["800", "600", "400", "200"],
  dogru: 2,
  hatalar: [
    "Birinci kuşağı ikinci kuşak sanma: bütün tohumların melez olduğu kuşak birinci kuşaktır; ikinci kuşakta saf döller de ortaya çıkar.",
    "Fenotip sayısını genotip sanma: 600, yuvarlak görünen tohumların sayısıdır; bunların bir kısmı saf döl yuvarlaktır.",
    null,
    "Genotip oranında tek payı alma: 200, saf yuvarlak ya da buruşuk tohumların sayısıdır; melez döller iki paydır."
  ],
  aciklama: `Melez döl, bir karakter için birbirinden farklı iki gen taşıyan bireydir. Yuvarlak tohum genini Y, buruşuk tohum genini y ile gösterelim.
Adım 1: Ebeveynler YY (saf döl yuvarlak) ve yy (buruşuk) genotiplidir. Buruşuk tohum çekinik olduğu için yalnızca yy genotipinde görülür.
Adım 2: Birinci kuşak bitkilerin hepsi bir ebeveynden Y, diğerinden y alır. Hepsi Yy yani melez döldür.
Adım 3: Yy × Yy çaprazlamasında genotip oranı 1 YY : 2 Yy : 1 yy olur. Yani yavruların dörtte ikisi, başka bir deyişle yarısı melez döldür.
Adım 4: 800 tohumun yarısı 400 eder.
Sağlama: 200 YY + 400 Yy + 200 yy = 800 tohum. Yuvarlak tohumlar 200 + 400 = 600, buruşuklar 200 tanedir; bu da bilinen 3 : 1 fenotip oranını verir.
Sık yapılan hata: 3 : 1 oranını görünce 600'ü melez sanmak. 3 : 1 fenotip oranıdır; yuvarlak tohumların içinde saf döller de vardır.
Cevap C.`
},
{
  id: "fen-kl-302",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede mor çiçek rengi, beyaz çiçek rengine baskındır. Bir araştırmacı, bezelye bitkileriyle üç ayrı çaprazlama yapmış ve her çaprazlamadan elde ettiği yavruları saymıştır. Sonuçlar tabloda verilmiştir.
Buna göre;
I. 1. çaprazlamadaki mor çiçekli bitki saf döldür.
II. 3. çaprazlamadaki mor çiçekli bitkilerin ikisi de melez döldür.
III. 2. çaprazlamadaki mor çiçekli bitkinin genotipi, 3. çaprazlamadaki mor çiçekli bitkilerinkinden farklıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Ebeveynler</th><th>Mor çiçekli yavru</th><th>Beyaz çiçekli yavru</th></tr><tr><td>1.</td><td>Mor × Beyaz</td><td>206</td><td>0</td></tr><tr><td>2.</td><td>Mor × Beyaz</td><td>103</td><td>99</td></tr><tr><td>3.</td><td>Mor × Mor</td><td>301</td><td>98</td></tr></table>`,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "III'ü doğru sayma: 2. çaprazlamadaki yaklaşık 1 : 1 sonuç mor bitkinin melez olduğunu gösterir; 3. çaprazlamadaki mor bitkiler de melezdir. Genotipleri aynıdır.",
    "I'i yanlış sayma: beyaz ebeveynle çaprazlanan mor bitkinin hiç beyaz yavrusu yoksa bu bitki beyaz çiçek geni taşımıyordur, yani saf döldür.",
    "Aynı fenotipte farklı genotip arama: 2. ve 3. çaprazlamadaki mor bitkilerin hepsi melez döldür; III yanlıştır."
  ],
  aciklama: `Mor çiçek genini M, beyaz çiçek genini m ile gösterelim. Beyaz çiçekli bitki çekinik fenotipte olduğu için her zaman mm genotiplidir.
Adım 1 (I): 1. çaprazlamada mor bitki mm ile çaprazlanmış ve hiç beyaz yavru çıkmamıştır. Mor bitki m geni taşısaydı yavruların yaklaşık yarısı beyaz olurdu. Demek ki mor bitki MM, yani saf döldür. I doğrudur.
Adım 2 (II): 3. çaprazlamada mor × mor sonucu yaklaşık 3 mor : 1 beyaz çıkmıştır (301 : 98). Beyaz yavru mm olduğuna göre iki ebeveynden de birer m geni almıştır. İki mor ebeveyn de Mm yani melez döldür. II doğrudur.
Adım 3 (III): 2. çaprazlamada mor × beyaz sonucu yaklaşık yarı yarıya çıkmıştır (103 : 99). Bu, Mm × mm çaprazlamasının sonucudur; mor bitki Mm'dir. 3. çaprazlamadaki mor bitkiler de Mm olduğundan genotipler aynıdır. III yanlıştır.
Sağlama: MM × mm → hepsi mor; Mm × mm → yarısı mor, yarısı beyaz; Mm × Mm → 3 mor : 1 beyaz. Tablodaki üç satır bu üç sonuca birebir uyar.
Cevap A.`
},
{
  id: "fen-kl-303",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede sarı tohum rengi, yeşil tohum rengine baskındır. Bir öğrenci, tohum rengi bakımından melez döl olan sarı tohumlu bir bezelye bitkisinin yaprağından alınan hücreyi mikroskopta incelemiş ve arkadaşına "Bu hücre yaprağa ait, yaprak hücresinde tohum rengi geni bulunmaz." demiştir. Öğretmeni ise bitkinin bütün vücut hücrelerinin, tek bir hücrenin art arda bölünmesiyle oluştuğunu hatırlatmıştır.
**Buna göre bu yaprak hücresi için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Sarı tohum rengi genini taşır, çünkü baskın gen çekinik geni yok eder.",
    "Tohum rengi genlerinden birini taşır, hangisini taşıdığı rastgele belirlenir.",
    "Tohum rengi geni taşımaz, çünkü bu gen yalnız tohumda bulunur.",
    "Hem sarı hem de yeşil tohum rengi genini bir arada taşır."
  ],
  dogru: 3,
  hatalar: [
    "Baskınlığı genin yok olması sanma: melez bitkide çekinik gen de vardır; baskın gen onu yok etmez, yalnızca fenotipte kendi etkisini gösterir.",
    "Gen çiftinin hücrelere rastgele paylaştırıldığını sanma: vücut hücreleri tek hücrenin bölünmesiyle oluştuğu için her biri karakterin iki genini birlikte taşır.",
    "Özelliğin görüldüğü yer ile genin bulunduğu yeri karıştırma: tohum rengi yaprakta görülmese de bu gen yaprak hücresinin DNA'sında bulunur.",
    null
  ],
  aciklama: `Genotip, bir bireyin bir karakter için taşıdığı genlerin bütünüdür. Melez döl olan bitki, tohum rengi için bir sarı (S) ve bir yeşil (s) geni, yani Ss genotipini taşır.
Adım 1: Bitkinin bütün vücut hücreleri, tek bir hücrenin art arda bölünmesiyle oluşur. Her bölünmeden önce DNA eşlendiği için bu hücrelerin hepsi aynı genleri taşır.
Adım 2: Öyleyse yaprak hücresi de kök ya da tohum hücresi gibi Ss genotipindedir. Yani hem S hem s genini taşır.
Adım 3: Yaprakta tohum rengi görülmemesi, genin orada bulunmadığı anlamına gelmez. Gen hücrede vardır ama yaprakta bu özellik ortaya çıkmaz.
Adım 4: Baskın gen, çekinik geni yok etmez; yalnızca melez bireyde fenotipi belirler.
Adım 5: Hücreler arasında rastgele bir gen paylaşımı da olmaz; bölünmeyle oluşan her vücut hücresi aynı Ss genotipini taşır.
Sık yapılan hata: "Sarı baskın, öyleyse hücrede yalnız sarı geni var." demek. Melez bireyde iki gen birlikte bulunur; fenotipte baskın olanın etkisi görülür.
Cevap D.`
},
{
  id: "fen-kl-304",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede sarı tohum rengi, yeşil tohum rengine baskındır. Okul bahçesinde yetiştirilen sarı tohumlu iki bezelye bitkisi birbiriyle çaprazlanmıştır. Öğrenciler, elde edilen 420 tohumdan 316'sının sarı, 104'ünün yeşil olduğunu saymış ve "Ebeveynlerin ikisi de sarıydı, bu yeşil tohumlar nereden çıktı?" diye şaşırmıştır.
Buna göre;
I. Ebeveyn bitkilerden en az biri saf döldür.
II. Yeşil tohumlar, ebeveynlerde bulunduğu hâlde fenotipte görülmeyen bir genden kaynaklanmıştır.
III. Sarı tohumların tamamı, ebeveynleriyle aynı genotiptedir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Baskın fenotipi saf döl sanma: yeşil (ss) yavru çıktığına göre iki ebeveyn de s geni taşır; ikisi de melezdir.",
    null,
    "Sarı görünen her bireyi aynı genotipte sanma: sarı tohumların bir kısmı SS, bir kısmı Ss genotiplidir; ayrıca ebeveynlerden hiçbiri saf değildir.",
    "Fenotip aynılığını genotip aynılığı sanma: sarı yavruların yaklaşık üçte biri SS'dir ve Ss olan ebeveynlerinden farklı genotiptedir."
  ],
  aciklama: `Sarı tohum genini S, yeşil tohum genini s ile gösterelim. Yeşil tohum çekinik olduğu için yalnızca ss genotipinde görülür.
Adım 1 (I): Yeşil tohum (ss), iki ebeveynden birer s geni almıştır. Öyleyse iki sarı ebeveynin de genotipi Ss, yani melezdir. I yanlıştır.
Adım 2 (II): Ebeveynler s genini taşıdığı hâlde sarı görünüyordu; s geni baskın S geninin yanında etkisini gösterememişti. Yavrularda iki s bir araya gelince yeşil renk ortaya çıktı. II doğrudur.
Adım 3 (III): Ss × Ss çaprazlamasında 1 SS : 2 Ss : 1 ss oluşur. Sarı tohumların bir kısmı SS'dir ve Ss olan ebeveynlerden farklı genotiptedir. III yanlıştır.
Sağlama: 316 : 104 yaklaşık 3 : 1'dir; bu oran iki melezin çaprazlanmasına özgüdür.
Sık yapılan hata: Ebeveynde görülmeyen bir özelliğin yavruda "yeni" ortaya çıktığını sanmak. Çekinik gen ebeveynde zaten vardı, yalnızca gizliydi.
Cevap B.`
},
{
  id: "fen-kl-305",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede uzun boy geni T, kısa boy geni t ile gösterilmektedir ve uzun boy baskındır. Bir fidancı, yapacağı çaprazlamadan elde edeceği fidelerin **hepsinin aynı boyda** olmasını istemektedir. Ayrıca yeni bir çeşit elde etmek için **hiçbir fidenin genotipinin, ebeveynlerden birininkiyle aynı olmamasını** istemektedir.
**Buna göre fidancının yapması gereken çaprazlama aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Tt × Tt", "TT × tt", "TT × Tt", "tt × tt"],
  dogru: 1,
  hatalar: [
    "Farklı fenotipleri gözden kaçırma: Tt × Tt çaprazlamasında yavruların yaklaşık dörtte biri kısa olur; fideler aynı boyda olmaz.",
    null,
    "Yalnız fenotip koşuluna bakma: TT × Tt çaprazlamasında hepsi uzun olur, ancak yavruların yarısı TT, yarısı Tt olup ebeveynlerle aynı genotiptedir.",
    "İkinci koşulu atlama: tt × tt çaprazlamasında hepsi kısa olur ama bütün yavrular ebeveynleri gibi tt genotiplidir."
  ],
  aciklama: `İki koşul var: (1) bütün yavrular aynı fenotipte olmalı, (2) hiçbir yavrunun genotipi ebeveynlerinkiyle aynı olmamalı.
Adım 1: Her seçeneğin yavrularını yaz.
Tt × Tt → TT, Tt, Tt, tt: hem uzun hem kısa var; 1. koşul bozulur.
TT × tt → hepsi Tt: hepsi uzundur; ebeveynler TT ve tt olduğu için hiçbir yavru onlarla aynı genotipte değildir.
TT × Tt → TT, TT, Tt, Tt: hepsi uzundur ama yavrular ebeveynlerle aynı genotiptedir; 2. koşul bozulur.
tt × tt → hepsi tt: hepsi kısadır ama ebeveynlerle aynı genotiptedir; 2. koşul bozulur.
Adım 2: İki koşulu birlikte sağlayan tek çaprazlama TT × tt'dir.
Sağlama: TT bitkisi yalnızca T, tt bitkisi yalnızca t geni verebilir; her yavru bir T bir t alır ve Tt olur.
Cevap B.`
},
{
  id: "fen-kl-306",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede çiçeklerin gövdenin yanında bulunması, gövdenin ucunda bulunmasına baskındır. Bir öğrenci, çiçekleri gövdenin yanında olan A ve B bitkilerini ayrı ayrı kendi kendine tozlaştırmıştır. A bitkisinin 150 yavrusunun hepsinde çiçekler yanda olmuştur. B bitkisinin 160 yavrusundan 121'inde çiçekler yanda, 39'unda uçta olmuştur.
Buna göre;
I. A bitkisi çiçek konumu bakımından saf döldür.
II. B bitkisinin çiçekleri uçta olan yavruları saf döldür.
III. A ile B bitkileri çaprazlanırsa oluşan yavruların hiçbirinde çiçekler uçta olmaz.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "Çekinik yavruların genotipini atlama: çiçekleri uçta olan yavrular çekinik fenotiptedir ve saf döldür. Ayrıca III de doğrudur.",
    "III'ü yanlış sayma: A bitkisi saf döl olduğu için bütün yavrulara baskın gen verir; B melez olsa bile hiçbir yavruda çiçek uçta olmaz.",
    "I'i yanlış sayma: kendi kendine tozlaşmada 150 yavrunun hiçbirinde çekinik özellik çıkmaması A'nın çekinik gen taşımadığını gösterir.",
    null
  ],
  aciklama: `Yanda çiçek genini Y, uçta çiçek genini y ile gösterelim.
Adım 1 (I): A bitkisi kendi kendine tozlaşınca hiç uçta çiçekli yavru çıkmamıştır. A, y geni taşısaydı yavruların yaklaşık dörtte birinde çiçekler uçta olurdu. A bitkisi YY yani saf döldür. I doğrudur.
Adım 2 (II): B bitkisinden yaklaşık 3 : 1 oranı çıkmıştır (121 : 39). Demek ki B, Yy genotiplidir. Çiçekleri uçta olan yavrular çekinik fenotipte olduğu için yy yani saf döldür. II doğrudur.
Adım 3 (III): A (YY) × B (Yy) çaprazlamasında A her yavruya Y verir. Yavrular YY ya da Yy olur; hepsinde çiçek yandadır. III doğrudur.
Sağlama: Çekinik bir özellik yalnızca iki çekinik gen bir araya gelince görülür; A bitkisi hiç y geni vermediği için bu mümkün değildir.
Sık yapılan hata: "B melez olduğuna göre A ile çaprazlanınca uçta çiçek çıkabilir." demek. Uçta çiçek için iki ebeveynin de y geni vermesi gerekir.
Cevap D.`
},
{
  id: "fen-kl-307",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede yuvarlak tohum şekli, buruşuk tohum şekline baskındır. Bir araştırmacı, görünüşleri birbirinin aynısı olan yuvarlak tohumlu X ve Z bitkilerinin her birini buruşuk tohumlu bir bitkiyle çaprazlamış ve tablodaki sonuçları elde etmiştir.
**Bu deneyin sonuçları aşağıdaki yargılardan hangisini destekler?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Yuvarlak tohumlu yavru</th><th>Buruşuk tohumlu yavru</th></tr><tr><td>X × Buruşuk</td><td>184</td><td>0</td></tr><tr><td>Z × Buruşuk</td><td>93</td><td>89</td></tr></table>`,
  secenekler: [
    "Fenotipi aynı olan bireylerin genotipleri farklı olabilir.",
    "Buruşuk tohum şekli, yuvarlak tohum şekline baskındır.",
    "Genotipi aynı olan bireylerin fenotipleri farklı olabilir.",
    "Yavrunun tohum şeklini tek bir ebeveynin genleri belirler."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Baskınlığı ters kurma: yuvarlak ve buruşuk genini birlikte taşıyan yavrular yuvarlak görünür; baskın olan yuvarlak tohumdur.",
    "Yargının yönünü ters çevirme: deneyde fenotipi aynı iki bitkinin farklı sonuç verdiği görülüyor; genotipi aynı bireylerin farklı göründüğüne dair bir veri yok.",
    "Genlerin tek ebeveynden geldiğini sanma: yavrular her karakter için bir geni anneden, birini babadan alır; Z çaprazlamasındaki buruşuk yavrular iki ebeveynden de buruşuk geni almıştır."
  ],
  aciklama: `Fenotip, bir bireyin gözle görülen ya da ölçülebilen özelliğidir; genotip ise bu özelliği belirleyen genlerin bütünüdür.
Adım 1: X ve Z bitkilerinin fenotipi aynıdır: ikisi de yuvarlak tohumludur.
Adım 2: Yuvarlak genini Y, buruşuk genini y ile gösterelim. X × yy çaprazlamasında hiç buruşuk yavru çıkmamıştır; X bitkisi YY (saf döl) genotiplidir.
Adım 3: Z × yy çaprazlamasında yaklaşık yarı yarıya sonuç çıkmıştır; Z bitkisi Yy (melez döl) genotiplidir.
Adım 4: Aynı görünüşe sahip iki bitkinin genotipleri farklı çıkmıştır. Deney, "fenotip aynı olsa da genotip farklı olabilir" yargısını destekler.
Sık yapılan hata: Yargıyı ters çevirip "genotipi aynı olanların fenotipi farklı olabilir" demek. Bu deneyde genotipi aynı olan iki birey karşılaştırılmamıştır.
Cevap A.`
},
{
  id: "fen-kl-308",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede bakla (meyve) rengi bakımından yeşil bakla, sarı baklaya baskındır. Bir tohum firması, bahçelere süs bitkisi olarak satmak için yalnız sarı baklalı bitkilerden oluşan bir tohum partisi üretmek istemektedir. Firmanın seralarında bakla rengi bakımından melez döl olan yeşil baklalı bitkiler ile sarı baklalı bitkiler bulunmaktadır.
**Buna göre firmanın elde edeceği bütün yavruların sarı baklalı olması için aşağıdaki yollardan hangisini seçmesi gerekir?**`,
  gorsel: null,
  secenekler: [
    "Melez yeşil baklalı iki bitkiyi birbiriyle çaprazlamak",
    "Melez yeşil baklalı bitkiyi sarı baklalı bitkiyle çaprazlamak",
    "Sarı baklalı iki bitkiyi birbiriyle çaprazlamak",
    "Melez yeşil baklalı bitkiyi kendi kendine tozlaştırmak"
  ],
  dogru: 2,
  hatalar: [
    "Melez çaprazlamasının sonucunu bilmeme: iki melez çaprazlanırsa yavruların yalnızca yaklaşık dörtte biri sarı baklalı olur.",
    "1 : 1 sonucunu gözden kaçırma: melez yeşil baklalı ile sarı baklalı çaprazlanırsa yavruların yaklaşık yarısı yeşil baklalı olur.",
    null,
    "Kendi kendine tozlaşmayı saflaştırma sanma: melez bir bitki kendi kendine tozlaşınca da yavruların yaklaşık dörtte üçü yeşil baklalı olur."
  ],
  aciklama: `Bu soruda dikkat: tohum renginde sarı baskındır ama **bakla renginde** yeşil baskın, sarı çekiniktir.
Adım 1: Yeşil bakla genini Y, sarı bakla genini y ile gösterelim. Sarı baklalı bitkiler çekinik fenotipte olduğu için yy genotiplidir.
Adım 2: Her yolu incele.
Yy × Yy → 1 YY : 2 Yy : 1 yy; yavruların yalnızca dörtte biri sarı.
Yy × yy → 1 Yy : 1 yy; yavruların yarısı sarı.
yy × yy → hepsi yy; bütün yavrular sarı baklalı.
Kendi kendine tozlaşan Yy bitkisi de Yy × Yy gibi sonuç verir; dörtte biri sarı.
Adım 3: Bütün yavruların sarı baklalı olmasını garanti eden tek yol, iki sarı baklalı bitkiyi çaprazlamaktır.
Sık yapılan hata: Tohum rengindeki "sarı baskın" bilgisini bakla rengine taşımak. Her karakterin baskınlığı ayrı ayrı bilinmelidir.
Cevap C.`
},
{
  id: "fen-kl-309",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyenin boy karakterinde hangi özelliğin baskın olduğunu bilmeyen bir öğrenci iki aşamalı bir deney yapmıştır. 1. aşamada saf döl uzun boylu bir bitkiyi saf döl kısa boylu bir bitkiyle çaprazlamış; elde ettiği yavruların hepsi uzun boylu olmuştur. 2. aşamada bu yavruları kendi aralarında çaprazlamış; 240 yavrudan 178'i uzun, 62'si kısa boylu olmuştur.
Buna göre;
I. Kısa boy, uzun boya baskındır.
II. 1. aşamada elde edilen yavruların hepsi melez döldür.
III. 1. aşamada kısa boy geni yavrulara aktarılmamıştır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Baskınlığı ters okuma: saf uzun ile saf kısa çaprazlanınca bütün yavruların uzun olması, uzun boyun baskın olduğunu gösterir.",
    "Görünmeyen geni yok sanma: 1. aşama yavrularında kısa boy geni vardır ama baskın genin yanında etkisini gösterememiştir. 2. aşamada kısa bitkilerin çıkması bunu kanıtlar.",
    "I ve III'ü doğru sayma: kısa boy çekiniktir ve 1. aşamada yavrulara aktarılmıştır; yalnızca fenotipte görülmemiştir."
  ],
  aciklama: `Saf döl, bir karakter için aynı iki geni taşıyan bireydir. Farklı özellikteki iki saf döl çaprazlanınca yavrularda hangi özellik görülüyorsa o özellik baskındır.
Adım 1 (I): Saf uzun × saf kısa çaprazlamasında yavruların hepsi uzun çıkmıştır. Uzun boy baskın, kısa boy çekiniktir. I yanlıştır.
Adım 2 (II): Uzun boy genini T, kısa boy genini t ile gösterelim. TT × tt çaprazlamasında her yavru bir T bir t alır; hepsi Tt yani melezdir. II doğrudur.
Adım 3 (III): 1. aşama yavruları t genini taşır, yalnızca fenotipte göstermez. 2. aşamada bu yavrular çaprazlanınca tt bireyler (kısa) ortaya çıkmıştır. t geni aktarılmasaydı kısa bitki çıkamazdı. III yanlıştır.
Sağlama: 178 : 62 yaklaşık 3 : 1'dir; bu oran Tt × Tt çaprazlamasının fenotip oranıdır.
Sık yapılan hata: Bir kuşakta görülmeyen özelliğin geninin de kaybolduğunu sanmak.
Cevap A.`
},
{
  id: "fen-kl-310",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede mor çiçek geni M, beyaz çiçek geni m ile gösterilir ve mor çiçek baskındır. Bir öğrenci, genotipi bilinen bitkilerle yaptığı dört çaprazlamanın sonuçlarını tabloya işlemiştir. Öğretmeni, tablodaki sonuçlardan birinin ebeveynlerin genotiplerine göre elde edilmesinin __mümkün olmadığını__ söylemiştir.
**Buna göre yanlış kaydedilen sonuç hangi çaprazlamaya aittir?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Ebeveynler</th><th>Kaydedilen sonuç</th></tr><tr><td>1.</td><td>MM × mm</td><td>Yavruların hepsi mor</td></tr><tr><td>2.</td><td>Mm × mm</td><td>Yaklaşık yarısı mor, yarısı beyaz</td></tr><tr><td>3.</td><td>Mm × Mm</td><td>Yaklaşık dörtte üçü mor, dörtte biri beyaz</td></tr><tr><td>4.</td><td>MM × Mm</td><td>Yaklaşık yarısı mor, yarısı beyaz</td></tr></table>`,
  secenekler: ["1. çaprazlama", "2. çaprazlama", "3. çaprazlama", "4. çaprazlama"],
  dogru: 3,
  hatalar: [
    "Saf × saf sonucunu yanlış bilme: MM her yavruya M verir; mm ile çaprazlanınca bütün yavrular Mm yani mor olur. Kayıt doğrudur.",
    "Melez × çekinik oranını yanlış bilme: Mm × mm çaprazlamasında yavruların yarısı Mm (mor), yarısı mm (beyaz) olur. Kayıt doğrudur.",
    "3 : 1 oranını tanımama: iki melezin çaprazlanmasında yaklaşık dörtte üç mor, dörtte bir beyaz yavru beklenir. Kayıt doğrudur.",
    null
  ],
  aciklama: `Her satırda ebeveynlerin verebileceği genleri yazıp yavruları bul, sonra kayıtla karşılaştır.
Adım 1: MM × mm → hepsi Mm → hepsi mor. Kayıt uyuyor.
Adım 2: Mm × mm → Mm, Mm, mm, mm → yarısı mor, yarısı beyaz. Kayıt uyuyor.
Adım 3: Mm × Mm → MM, Mm, Mm, mm → dörtte üçü mor, dörtte biri beyaz. Kayıt uyuyor.
Adım 4: MM × Mm → MM, MM, Mm, Mm. Her yavru MM ebeveyninden bir M alır; beyaz (mm) yavru oluşamaz. Hepsi mor olmalıdır. Kayıt uymuyor.
Sık yapılan hata: Ebeveynlerden biri melez olunca hemen "yarısı beyaz" demek. Beyaz yavru için iki ebeveynin de m vermesi gerekir; MM ebeveyn m veremez.
Cevap D.`
},
{
  id: "fen-kl-311",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede şişkin bakla şekli, boğumlu bakla şekline baskındır. Bir çiftçi, tarlasındaki boğumlu baklalı iki bezelye bitkisini çaprazlamış ve elde ettiği 90 yavrunun hepsinin boğumlu baklalı olduğunu görmüştür.
Buna göre;
I. Bu sonuç, boğumlu bakla şeklinin baskın olduğunu gösterir.
II. Çaprazlanan ebeveynlerin ikisi de bakla şekli bakımından saf döldür.
III. Yavrulardan biri şişkin baklalı bir bitkiyle çaprazlanırsa şişkin baklalı yavrular oluşabilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Tek tip sonucu baskınlık kanıtı sanma: iki çekinik bitkinin yavrularının hepsi aynı çıkar; bu, baskınlığı göstermez. Ayrıca III doğrudur.",
    "II'yi yanlış sayma: çekinik fenotip yalnız iki çekinik genle ortaya çıkar; boğumlu baklalı her bitki saf döldür.",
    null,
    "I'i doğru sayma: soruda şişkin baklanın baskın olduğu verilmiştir; aynı fenotipteki ebeveynlerden aynı fenotipte yavru çıkması baskınlık hakkında bilgi vermez."
  ],
  aciklama: `Çekinik gen, baskın genle birlikte bulunduğunda etkisini gösteremeyen gendir. Çekinik bir özellik ancak iki çekinik gen bir araya gelince görülür.
Adım 1 (I): Soruda şişkin baklanın baskın olduğu açıkça verilmiştir. Boğumlu × boğumlu çaprazlamasının hep boğumlu yavru vermesi, boğumlunun baskın olduğunu göstermez. I yanlıştır.
Adım 2 (II): Şişkin bakla genini B, boğumlu bakla genini b ile gösterelim. Boğumlu baklalı bir bitki çekinik fenotipte olduğundan bb genotiplidir, yani saf döldür. İki ebeveyn de bb'dir. II doğrudur.
Adım 3 (III): Yavruların hepsi bb'dir. Bir yavru şişkin baklalı bir bitkiyle (BB ya da Bb) çaprazlanırsa şişkin ebeveynden B geni alan yavrular şişkin baklalı olur. III doğrudur.
Sağlama: bb × BB → hepsi Bb (şişkin); bb × Bb → yarısı şişkin. İki durumda da şişkin yavru çıkabilir.
Cevap C.`
},
{
  id: "fen-kl-312",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede sarı tohum geni S, yeşil tohum geni s ile gösterilir ve sarı tohum baskındır. Bir öğrenci, genotipi Ss olan 1. bitki ile sarı tohumlu 2. bitkinin çaprazlanmasını görseldeki tabloyla (Punnett karesi) göstermek istemektedir. 2. bitkinin genotipini bilmediği için önce onu yeşil tohumlu bir bitkiyle çaprazlamış ve elde ettiği tohumların yaklaşık yarısının yeşil olduğunu görmüştür. Tablodaki kutuları henüz doldurmamış, yalnızca 1, 2, 3 ve 4 ile numaralandırmıştır.
**Buna göre numaralı kutulardan hangilerine yazılacak yavrular hem sarı tohumlu hem de saf döldür?**`,
  gorsel: `<svg viewBox="0 0 400 300" role="img" aria-label="Punnett karesi: üstte 1. bitkinin genleri S ve s, solda 2. bitkinin genleri bilinmiyor; dört kutu 1, 2, 3 ve 4 ile numaralandırılmış ve boş"><g fill="currentColor" font-size="16" text-anchor="middle"><text x="250" y="22">1. bitki: Ss</text><text x="40" y="175" transform="rotate(-90 40 175)">2. bitki: ?</text></g><g fill="var(--vurgu)" font-size="20" font-weight="bold" text-anchor="middle"><text x="190" y="62">S</text><text x="310" y="62">s</text><text x="100" y="132">?</text><text x="100" y="232">?</text></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="130" y="75" width="120" height="100"/><rect x="250" y="75" width="120" height="100"/><rect x="130" y="175" width="120" height="100"/><rect x="250" y="175" width="120" height="100"/></g><g fill="currentColor" font-size="18" text-anchor="middle"><text x="190" y="132">(1)</text><text x="310" y="132">(2)</text><text x="190" y="232">(3)</text><text x="310" y="232">(4)</text></g><text x="210" y="296" fill="currentColor" font-size="14" text-anchor="middle">Soldaki genler: baskın gen üst satıra yazılacak</text></svg>`,
  secenekler: ["1 ve 4", "Yalnız 1", "2 ve 3", "1, 2 ve 3"],
  dogru: 1,
  hatalar: [
    "İkinci koşulu atlama: 1 ve 4 numaralı kutulardaki yavrular saf döldür ama 4 numaralı yavru (ss) yeşil tohumludur.",
    null,
    "Saf ile melezi karıştırma: 2 ve 3 numaralı kutulardaki yavrular Ss genotiplidir; farklı iki gen taşıdıkları için melezdir.",
    "Yalnızca fenotip koşuluna bakma: 1, 2 ve 3 numaralı yavrular sarı tohumludur, ancak 2 ile 3 melez döldür."
  ],
  aciklama: `Saf döl, bir karakter için aynı iki geni taşıyan bireydir (SS ya da ss). Melez döl ise farklı iki gen taşır (Ss).
Adım 1: 2. bitkinin genotipini bul. Sarı olduğu için SS ya da Ss'dir. Yeşil tohumlu (ss) bitkiyle çaprazlandığında yavruların yarısı yeşil (ss) olmuştur. Bu yavrular 2. bitkiden s almıştır; öyleyse 2. bitki Ss'dir. SS olsaydı bütün yavrular sarı olurdu.
Adım 2: Soldaki boşluklara üstte S, altta s yaz ve kutuları doldur: 1 → SS, 2 → Ss, 3 → Ss, 4 → ss.
Adım 3: Sarı tohumlu olanlar, en az bir S taşıyanlardır: 1, 2 ve 3. Saf döl olanlar, aynı iki geni taşıyanlardır: 1 (SS) ve 4 (ss).
Adım 4: İki listede ortak olan yalnızca 1 numaralı kutudur.
Sağlama: 1 numaralı yavru SS'dir; hem sarıdır hem de aynı iki geni taşır.
Sık yapılan hata: "Saf döl" deyince yalnız baskın saf bireyi ya da yalnız çekinik bireyi düşünmek. ss de saf döldür, ama yeşil tohumludur.
Cevap B.`
},
{
  id: "fen-kl-313",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede bakla rengi bakımından yeşil bakla, sarı baklaya baskındır. Bir tohum paketinin üzerinde şu bilgi yazmaktadır: "Bu paketteki tohumlar, bakla rengi bakımından saf döl yeşil baklalı bir bitki ile sarı baklalı bir bitkinin çaprazlanmasıyla elde edilmiştir." Paketteki tohumlar ekilip bitkiler büyütülecektir.
Buna göre;
I. Bu tohumlardan gelişen bitkilerin tamamı yeşil baklalı olur.
II. Bu tohumlardan gelişen bitkilerin bir kısmı saf döl olur.
III. Bu bitkiler kendi aralarında çaprazlanırsa sarı baklalı yavrular oluşabilir.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: bitkilerin hepsi melez olduğundan kendi aralarında çaprazlanınca iki çekinik gen bir araya gelebilir ve sarı baklalı yavru oluşur.",
    "Bakla renginde baskınlığı ters bilme: yeşil bakla baskın olduğu için bütün yavrular yeşil baklalıdır; I de doğrudur.",
    "Saf ebeveynden saf yavru bekleme: saf yeşil ebeveyn yalnız yeşil, sarı ebeveyn yalnız sarı bakla geni verir; bütün yavrular melezdir, saf döl oluşmaz.",
    null
  ],
  aciklama: `Yeşil bakla genini Y, sarı bakla genini y ile gösterelim. Dikkat: bakla renginde yeşil baskındır.
Adım 1: Ebeveynler YY (saf yeşil) ve yy (sarı; çekinik fenotip olduğu için saf) genotiplidir.
Adım 2 (I): Her yavru bir Y bir y alır; hepsi Yy'dir. Y baskın olduğundan bütün bitkiler yeşil baklalıdır. I doğrudur.
Adım 3 (II): Bütün yavrular Yy yani melezdir; saf döl bitki yoktur. II yanlıştır.
Adım 4 (III): Yy × Yy çaprazlamasında yaklaşık dörtte bir yy (sarı baklalı) yavru oluşur. III doğrudur.
Sağlama: Saf bir baskın ile bir çekiniğin yavruları her zaman tek tip melezdir; bu bitkiler kendi aralarında çaprazlanınca çekinik özellik yeniden ortaya çıkar.
Cevap D.`
},
{
  id: "fen-kl-314",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede mor çiçek geni M, beyaz çiçek geni m ile gösterilir ve mor çiçek baskındır. Bir bahçıvan, çiçek rengi bakımından melez döl olan mor çiçekli bir bitkiyi kendi kendine tozlaştırmış ve yavruların yaklaşık dörtte birinin beyaz çiçekli olduğunu görmüştür. Bahçıvan, bu sonucun bitkinin ürettiği polen ve yumurta hücrelerindeki genlerle ilgili olduğunu düşünmektedir.
**Buna göre bu sonucun ortaya çıkabilmesi için bitkinin üreme hücreleriyle ilgili aşağıdakilerden hangisi doğru olmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Üreme hücrelerinin yaklaşık yarısı M, yarısı m genini taşır.",
    "Her üreme hücresi hem M hem de m genini birlikte taşır.",
    "Üreme hücrelerinin tamamı M genini taşır, çünkü M baskındır.",
    "Üreme hücrelerinin dörtte üçü M, dörtte biri m genini taşır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Gen çiftinin üreme hücresinde ayrılmadığını sanma: üreme hücresine bir karakterin iki geninden yalnızca biri geçer; her hücre iki gen taşısaydı yavrularda bir karakter için dört gen olurdu.",
    "Baskın genin çekiniği ortadan kaldırdığını sanma: bütün üreme hücreleri M taşısaydı hiçbir yavru mm olamaz, beyaz çiçekli yavru çıkmazdı.",
    "Fenotip oranını üreme hücrelerine taşıma: 3 : 1, yavruların fenotip oranıdır; melez bitkinin üreme hücrelerinde M ve m eşit sayıdadır."
  ],
  aciklama: `Vücut hücrelerinde her karakter için iki gen bulunur; biri anneden, biri babadan gelmiştir. Üreme hücresi oluşurken bu iki gen birbirinden ayrılır ve her üreme hücresine yalnız biri geçer.
Adım 1: Melez bitkinin genotipi Mm'dir. Üreme hücrelerinin yarısı M, yarısı m taşır.
Adım 2: Kendi kendine tozlaşmada polenler (M ya da m) yumurtalarla (M ya da m) rastgele birleşir: MM, Mm, Mm, mm.
Adım 3: Dört olasılıktan biri mm'dir; yani yavruların yaklaşık dörtte biri beyaz çiçekli olur. Gözlenen sonuç bu açıklamayla uyuşur.
Sağlama: Üreme hücrelerinin dörtte üçü M taşısaydı mm oluşma olasılığı dörtte bir değil, çok daha küçük olurdu; gözlenen oran tutmazdı.
Sık yapılan hata: 3 : 1 fenotip oranını üreme hücrelerinin oranı sanmak.
Cevap A.`
},
{
  id: "fen-kl-315",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bezelyede yuvarlak tohum geni Y, buruşuk tohum geni y ile gösterilir ve yuvarlak tohum baskındır. Bir araştırma bahçesindeki K, L ve M bitkilerinin tohum şekli genotipleri etiketlerine yazılmıştır. Bir öğrenci, etiketlere bakarak bitkilerle ilgili bazı yorumlar yapmıştır.
Buna göre öğrencinin;
I. K ile L bitkilerinin tohum şekilleri birbirinden farklıdır.
II. M bitkisi tohum şekli bakımından melez döldür.
III. L bitkisi kendi kendine tozlaşırsa M ile aynı genotipte yavrular oluşabilir.
**yorumlarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bitki</th><th>Etikette yazan genotip</th></tr><tr><td>K</td><td>YY</td></tr><tr><td>L</td><td>Yy</td></tr><tr><td>M</td><td>yy</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "Genotip farkını fenotip farkı sanma: K (YY) ve L (Yy) bitkilerinin ikisi de yuvarlak tohumludur; baskın gen tek başına da özelliği gösterir.",
    null,
    "İki kavramı birden karıştırma: K ile L'nin tohum şekli aynıdır; M ise aynı iki geni taşıdığı için saf döldür, melez değildir.",
    "Çekinik bireyi melez sanma: M bitkisi yy genotiplidir; aynı iki geni taşıdığı için saf döldür. II yanlıştır."
  ],
  aciklama: `Saf döl aynı iki geni (YY ya da yy), melez döl farklı iki geni (Yy) taşır. Fenotip, genotipin ortaya çıkardığı görünüştür.
Adım 1 (I): K bitkisi YY, L bitkisi Yy genotiplidir. İkisinde de baskın Y geni olduğundan ikisi de yuvarlak tohumludur. Tohum şekilleri aynıdır. I yanlıştır.
Adım 2 (II): M bitkisi yy genotiplidir. Aynı iki geni taşıdığı için saf döldür. II yanlıştır.
Adım 3 (III): L bitkisi (Yy) kendi kendine tozlaşırsa YY, Yy, Yy, yy yavruları oluşabilir. yy yavrular M ile aynı genotiptedir. III doğrudur.
Sık yapılan hata: "Genotipleri farklıysa görünüşleri de farklıdır." demek. YY ve Yy genotipleri aynı fenotipi verir.
Cevap B.`
},
{
  id: "fen-kl-316",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede mor çiçek geni M, beyaz çiçek geni m ile gösterilir ve mor çiçek baskındır. Bir botanik bahçesinde, etiketleri kaybolmuş iki mor çiçekli bezelye bitkisi birbiriyle çaprazlanmıştır. Bu çaprazlamadan elde edilen 200 yavrunun hiçbiri beyaz çiçekli olmamıştır. Bahçe görevlisi, ebeveyn bitkilerin genotiplerinin neler olabileceğini listelemek istemektedir. Görevli listeyi yaparken ebeveynlerin yer değiştirmesini ayrı bir durum saymamaktadır; yani "1. bitki MM, 2. bitki Mm" ile "1. bitki Mm, 2. bitki MM" durumlarını tek durum olarak yazmaktadır.
**Buna göre görevlinin listesinde ebeveynlerin genotipleri için en fazla kaç farklı durum bulunur?**`,
  gorsel: null,
  secenekler: ["4", "3", "2", "1"],
  dogru: 2,
  hatalar: [
    "Beyaz yavru koşulunu hiç kullanmama: Mm × Mm çaprazlamasında yavruların yaklaşık dörtte biri beyaz olurdu; bu durum listeye giremez. Ayrıca yer değiştiren durumlar ayrı sayılmamalıdır.",
    "Yer değiştirmeyi ayrı sayma: MM × Mm ile Mm × MM aynı durumdur; soruda bunların tek durum sayılacağı belirtilmiştir.",
    null,
    "Beyaz yavru çıkmamasını iki ebeveynin de saf olmasına bağlama: ebeveynlerden yalnız biri MM olsa bile her yavru ondan M alır; MM × Mm durumu da mümkündür."
  ],
  aciklama: `Mor çiçekli bir bitkinin genotipi MM ya da Mm olabilir. Beyaz çiçekli yavru (mm) oluşması için iki ebeveynin de m vermesi gerekir.
Adım 1: Ebeveyn genotipleri için bütün çiftleri yaz (yer değiştirme tek sayılır): MM × MM, MM × Mm, Mm × Mm.
Adım 2: Her çiftin yavrularına bak.
MM × MM → hepsi MM, beyaz yok.
MM × Mm → MM ve Mm, beyaz yok.
Mm × Mm → yaklaşık dörtte biri mm, beyaz çıkar.
Adım 3: 200 yavrunun hiçbiri beyaz olmadığına göre Mm × Mm durumu elenir.
Adım 4: Geriye MM × MM ve MM × Mm kalır; 2 farklı durum vardır.
Sağlama: Kalan iki durumun ortak özelliği, ebeveynlerden en az birinin MM olmasıdır. MM ebeveyn her yavruya M verdiği için hiçbir yavru beyaz olamaz.
Sık yapılan hata: "Beyaz çıkmadıysa ikisi de saftır." diye tek durum bulmak.
Cevap C.`
},
{
  id: "fen-kl-317",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede şişkin bakla şekli, boğumlu bakla şekline baskındır. Bir araştırmacı, saf döl şişkin baklalı bir bitki ile boğumlu baklalı bir bitkiyi çaprazlamış ve 1. kuşağı elde etmiştir. Ardından 1. kuşak bitkileri kendi kendine tozlaştırarak 2. kuşağı elde etmiştir. Sonuçlar tabloda verilmiştir. Araştırmacının öğrencisi, 2. kuşaktaki şişkin baklalı bitkilerden birini rastgele seçip P olarak adlandırmıştır. P bitkisinin genotipi bilinmemektedir.
Buna göre;
I. P bitkisi boğumlu baklalı bir bitkiyle çaprazlanırsa yavrularının tamamı şişkin baklalı olur.
II. P bitkisi boğumlu baklalı bir bitkiyle çaprazlandığında yavrular arasında boğumlu baklalı olan çıkarsa P melez döldür.
III. P bitkisi kendi kendine tozlaşırsa boğumlu baklalı yavrular oluşabilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kuşak</th><th>Şişkin baklalı</th><th>Boğumlu baklalı</th></tr><tr><td>1. kuşak</td><td>124</td><td>0</td></tr><tr><td>2. kuşak</td><td>302</td><td>99</td></tr></table>`,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Rastgele seçilen bitkiyi saf sanma: 2. kuşaktaki şişkin bitkilerin bir kısmı melezdir; P melezse boğumlu ile çaprazlandığında yavruların yarısı boğumlu olur. I kesin değildir.",
    "II'yi yanlış, I'i doğru sayma: boğumlu yavru için P'nin de boğumlu gen vermesi gerekir; bu durumda P melezdir. I ise P'nin saf olduğunu varsayar.",
    null,
    "Olasılığı kesinlik sanma: I, ancak P saf döl olursa doğrudur; P'nin genotipi bilinmediği için I'e güvenilemez."
  ],
  aciklama: `Şişkin bakla genini B, boğumlu bakla genini b ile gösterelim.
Adım 1: Saf şişkin (BB) × boğumlu (bb) → 1. kuşağın hepsi Bb. Bb × Bb → 2. kuşakta 1 BB : 2 Bb : 1 bb. Tablodaki 302 : 99 yaklaşık 3 : 1'dir.
Adım 2: 2. kuşaktaki şişkin bitkiler BB ya da Bb olabilir. P'nin genotipi bu ikisinden biridir ama hangisi olduğu bilinmez.
Adım 3 (I): P BB ise bb ile çaprazlandığında yavruların hepsi şişkin olur; P Bb ise yarısı boğumlu olur. "Tamamı şişkin olur" kesin değildir. I yanlıştır.
Adım 4 (II): Yavrularda bb (boğumlu) birey çıkarsa P'nin de b vermiş olması gerekir. P hem B taşıyan (şişkin) hem b taşıyan bir bitkidir, yani Bb (melez). II doğrudur.
Adım 5 (III): P Bb ise kendi kendine tozlaşınca bb yavrular oluşabilir. "Oluşabilir" ifadesi bu olasılığı anlatır. III doğrudur.
Sık yapılan hata: "Oluşabilir" ile "oluşur" arasındaki farkı gözden kaçırmak. III bir olasılığı, I ise kesin bir sonucu iddia eder.
Cevap C.`
},
{
  id: "fen-kl-318",
  kazanim: "F.8.2.2.3",
  kademe: 3,
  zorluk: 4,
  soru: `Birbirinin kuzeni olan Ayla ile Kaan, evlenmeden önce bir genetik danışmanlık merkezine başvurmuştur. Yapılan testlerde ikisinin de sağlıklı olduğu, ancak ikisinin de ailelerinde daha önce görülmüş çekinik bir kalıtsal hastalığın genini taşıdığı belirlenmiştir. Doktor, bu hastalığın yalnızca hastalık genini iki ebeveynden de alan çocuklarda ortaya çıktığını ve hastalığın görülmesinin çocuğun cinsiyetine bağlı olmadığını açıklamıştır. Evlendikten birkaç yıl sonra çiftin ilk çocuğu sağlıklı bir erkek bebek olarak dünyaya gelmiştir.
**Buna göre aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: [
    "Çiftin ikinci çocuğu kesinlikle sağlıklı olur.",
    "Çocukların cinsiyetini babadan gelen üreme hücresi belirler.",
    "Çiftin sağlıklı olan oğlu hastalık genini taşıyor olabilir.",
    "Akraba olmaları, aynı çekinik geni taşıma olasılığını artırmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru bilgiyi söylenemez sanma: annenin yumurtaları hep X taşır; çocuğun kız ya da erkek olmasını babadan gelen X ya da Y belirler. Bu yargı söylenebilir.",
    "Sağlıklı görünüşü gen taşımamak sanma: sağlıklı çocuk hastalık genini tek kopya olarak taşıyabilir; çekinik gen tek başına hastalık yapmaz. Bu yargı söylenebilir.",
    "Akraba evliliğinin etkisini bilmeme: ortak atadan gelen kişilerin aynı çekinik geni taşıma olasılığı, akraba olmayanlara göre daha yüksektir. Bu yargı söylenebilir."
  ],
  aciklama: `Akraba evliliklerinde eşler ortak atalardan gen aldığı için aynı çekinik hastalık genini taşıma olasılıkları artar. Bu gen iki ebeveynden birden çocuğa geçerse hastalık ortaya çıkar.
Adım 1: İki eş de sağlıklıdır ama hastalık genini taşır. Her çocuk için bu geni iki ebeveynden birden alma olasılığı vardır.
Adım 2: İlk çocuğun sağlıklı doğması, ikinci çocuğu etkilemez. Her doğum ayrı bir olaydır; ikinci çocuğun hasta olma olasılığı yine vardır. "Kesinlikle sağlıklı olur" söylenemez.
Adım 3: Çocuğun cinsiyetini babadan gelen üreme hücresindeki eşey kromozomu (X ya da Y) belirler. Bu söylenebilir.
Adım 4: Sağlıklı oğul, hastalık genini bir ebeveynden almış, diğerinden almamış olabilir; bu durumda gen taşır ama hasta olmaz. Bu söylenebilir.
Adım 5: Kuzenlerin ortak atası olduğu için aynı çekinik geni taşıma olasılıkları daha yüksektir. Bu söylenebilir.
Sık yapılan hata: Önceki doğumların sonucunun sonraki doğumu değiştirdiğini sanmak.
Cevap A.`
},
{
  id: "fen-kl-319",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Fen dersinde kalıtım bir modelle canlandırılmaktadır. Her torba, bezelye bitkisinin tohum rengi bakımından bir ebeveynini temsil etmektedir. Torbalardaki ▲ kartları sarı tohum genini, ● kartları yeşil tohum genini göstermektedir; sarı tohum baskındır. Her çekilişte iki torbadan birer kart çekilip yan yana konulmakta ve bu kart çifti bir yavruyu temsil etmektedir. Kartlar torbaya geri atılıp torbalar karıştırılmakta ve çekiliş 100 kez tekrarlanmaktadır.
Buna göre;
I. 1. torba, tohum rengi bakımından melez döl bir ebeveyni temsil eder.
II. Çekilişlerin bazılarında ▲▲ kart çifti elde edilebilir.
III. Çekilişlerin yaklaşık yarısında yeşil tohumlu yavruyu temsil eden kart çifti elde edilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 540 250" role="img" aria-label="İki torba: 1. torbada 10 üçgen ve 10 yuvarlak kart, 2. torbada 20 yuvarlak kart var"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><path d="M60 70 Q60 50 80 50 L230 50 Q250 50 250 70 L250 190 Q250 210 230 210 L80 210 Q60 210 60 190 Z"/><path d="M300 70 Q300 50 320 50 L470 50 Q490 50 490 70 L490 190 Q490 210 470 210 L320 210 Q300 210 300 190 Z"/></g><g fill="currentColor" font-size="17" font-weight="bold" text-anchor="middle"><text x="155" y="36">1. torba</text><text x="395" y="36">2. torba</text></g><g fill="currentColor" font-size="20" text-anchor="middle"><text x="155" y="115">▲ kart: 10 tane</text><text x="155" y="160">● kart: 10 tane</text><text x="395" y="115">▲ kart: yok</text><text x="395" y="160">● kart: 20 tane</text></g><text x="270" y="240" fill="currentColor" font-size="15" text-anchor="middle">▲: sarı tohum geni   ●: yeşil tohum geni</text></svg>`,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü gözden kaçırma: 1. torbadan ● çekilme olasılığı yarıdır; 2. torbadan her zaman ● gelir. Bu yüzden çekilişlerin yaklaşık yarısında ●● (yeşil) çifti oluşur.",
    null,
    "Modelde olmayan geni varsaymak: 2. torbada ▲ kartı yoktur; ▲▲ çifti için iki torbadan da ▲ çekilmesi gerekir. II yanlıştır.",
    "II'yi doğru sayma: ▲▲ çifti ancak iki ebeveyn de sarı tohum geni verebiliyorsa oluşur; 2. torba yalnızca yeşil tohum geni verir."
  ],
  aciklama: `Bu modelde torba bir ebeveyni, torbadan çekilen kart o ebeveynin yavruya verdiği geni temsil eder.
Adım 1 (I): 1. torbada hem ▲ hem ● kartı eşit sayıda vardır. Bu, sarı ve yeşil tohum genini birlikte taşıyan melez bir ebeveyni (Ss) temsil eder. I doğrudur.
Adım 2 (II): 2. torbada yalnız ● kartı vardır; bu torba yeşil tohumlu saf döl ebeveyni (ss) temsil eder. 2. torbadan ▲ çekilemeyeceği için ▲▲ çifti oluşamaz. II yanlıştır.
Adım 3 (III): 1. torbadan çekilen kart yaklaşık yarı yarıya ▲ ya da ●'dir; 2. torbadan her seferinde ● gelir. Çiftler yaklaşık yarı yarıya ▲● (sarı) ve ●● (yeşil) olur. III doğrudur.
Sağlama: Model, Ss × ss çaprazlamasını gösterir; bu çaprazlamanın sonucu yaklaşık 1 sarı : 1 yeşildir.
Sık yapılan hata: Her çekilişte "iki torbadaki kartların hepsine" bakmak. Yavru, her ebeveynden yalnızca bir gen alır.
Cevap B.`
},
{
  id: "fen-kl-320",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede uzun boy, kısa boya baskındır. Bir araştırmacı K, L, M ve N bitkileriyle üç çaprazlama yapmıştır. K, L ve N bitkileri uzun boylu, M bitkisi kısa boyludur. Bitkilerin hiçbirinin genotipi etiketlerde yazmamaktadır. Araştırmacı her çaprazlamadan elde ettiği yavruları sayarak grafiği hazırlamıştır; ancak her çaprazlamada farklı bitki çiftleri kullandığı için sonuçları birlikte yorumlaması gerekmektedir. Araştırmacının amacı, bu dört bitkiden hangilerinin boy bakımından saf döl olduğunu belirlemektir.
**Buna göre K, L, M ve N bitkilerinden hangileri kesinlikle saf döldür?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Sütun grafiği: K×L çaprazlamasında 302 uzun 98 kısa, L×M çaprazlamasında 205 uzun 195 kısa, K×N çaprazlamasında 400 uzun 0 kısa yavru"><text x="290" y="22" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Çaprazlamalardan elde edilen yavru sayıları</text><g stroke="currentColor" stroke-width="2"><line x1="70" y1="50" x2="70" y2="270"/><line x1="70" y1="270" x2="540" y2="270"/></g><g fill="var(--vurgu)" stroke="currentColor" stroke-width="1"><rect x="100" y="119" width="45" height="151"/><rect x="255" y="167.5" width="45" height="102.5"/><rect x="410" y="70" width="45" height="200"/></g><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"><rect x="150" y="221" width="45" height="49"/><rect x="305" y="172.5" width="45" height="97.5"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="122" y="112">302</text><text x="172" y="214">98</text><text x="277" y="160">205</text><text x="327" y="166">195</text><text x="432" y="63">400</text><text x="482" y="263">0</text></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="147" y="292">K × L</text><text x="302" y="292">L × M</text><text x="457" y="292">K × N</text></g><text x="30" y="160" fill="currentColor" font-size="15" text-anchor="middle" transform="rotate(-90 30 160)">Yavru sayısı</text><rect x="170" y="305" width="16" height="16" fill="var(--vurgu)" stroke="currentColor"/><text x="192" y="318" fill="currentColor" font-size="15">Uzun boylu yavru</text><rect x="340" y="305" width="16" height="16" fill="var(--vurgu2)" stroke="currentColor"/><text x="362" y="318" fill="currentColor" font-size="15">Kısa boylu yavru</text></svg>`,
  secenekler: ["Yalnız M", "K ve N", "L ve M", "M ve N"],
  dogru: 3,
  hatalar: [
    "N'yi değerlendirmeyi atlama: melez olan K ile çaprazlanan N'den hiç kısa yavru çıkmaması, N'nin kısa boy geni taşımadığını gösterir; N de saf döldür.",
    "K'yi 3. çaprazlamaya bakarak saf sanma: K × L çaprazlamasından kısa yavru çıktığı için K kısa boy geni taşır, yani melezdir. Kısa yavru çıkmaması N'nin saf olmasından kaynaklanır.",
    "1 : 1 sonucunu yanlış yorumlama: L × M çaprazlamasındaki yaklaşık yarı yarıya sonuç, uzun olan L'nin melez olduğunu gösterir.",
    null
  ],
  aciklama: `Uzun boy genini T, kısa boy genini t ile gösterelim. Kısa boylu M bitkisi çekinik fenotipte olduğu için kesinlikle tt yani saf döldür.
Adım 1: K × L (ikisi de uzun) çaprazlamasında yaklaşık 3 uzun : 1 kısa (302 : 98) çıkmıştır. Kısa yavru (tt) iki ebeveynden de t almıştır. K ve L, Tt yani melezdir.
Adım 2: L × M çaprazlamasında yaklaşık yarı yarıya sonuç (205 : 195) çıkmıştır. Bu, Tt × tt sonucudur ve L'nin melez olduğunu doğrular.
Adım 3: K × N çaprazlamasında hiç kısa yavru yoktur. K melez olduğu için t verebilir; kısa yavru çıkmadığına göre N hiç t vermemiştir. N, TT yani saf döldür.
Adım 4: Kesinlikle saf döl olan bitkiler M (tt) ve N (TT)'dir.
Sık yapılan hata: Yalnız kısa boylu bitkiyi saf döl saymak. Saf döl, baskın özellikte de (TT) olabilir.
Cevap D.`
},
{
  id: "fen-kl-321",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Ece'nin ailesinde iki erkek kardeş vardır ve annesi üçüncü çocuğa hamiledir. Ece, fen dersinde insanda eşey kromozomlarını öğrendikten sonra ailesinin durumunu düşünerek bir tablo hazırlamıştır. Tabloya göre kadınların vücut hücrelerinde iki X, erkeklerin vücut hücrelerinde bir X ve bir Y eşey kromozomu bulunmaktadır. Ece, babasının da bir annesi ve bir babası olduğunu, babasının eşey kromozomlarını da onlardan aldığını not etmiştir.
Buna göre;
I. İki erkek kardeşin Y kromozomlarının ikisi de babalarından gelmiştir.
II. Babanın vücut hücrelerindeki X kromozomu, babanın kendi babasından gelmiştir.
III. İlk iki çocuk erkek olduğu için üçüncü çocuğun kız olma olasılığı artmıştır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Birey</th><th>Vücut hücresindeki eşey kromozomları</th><th>Üreme hücresindeki eşey kromozomu</th></tr><tr><td>Kadın</td><td>XX</td><td>X</td></tr><tr><td>Erkek</td><td>XY</td><td>X ya da Y</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Kromozomun hangi ebeveynden geldiğini ters kurma: bir erkek Y kromozomunu babasından aldığı için X kromozomunu annesinden almış olmalıdır. Ayrıca I doğrudur.",
    "Her doğumu önceki doğumlara bağlama: her çocuğun kız ya da erkek olma olasılığı, önceki çocukların cinsiyetinden etkilenmez. III yanlıştır.",
    "İki hatayı birlikte yapma: babanın X kromozomu kendi annesinden gelmiştir; üçüncü çocuğun cinsiyet olasılığı da önceki doğumlardan etkilenmez. Üstelik I doğrudur."
  ],
  aciklama: `İnsanda çocuğun cinsiyeti babadan gelen üreme hücresindeki eşey kromozomuyla belirlenir. Annenin bütün yumurtaları X taşır; babanın üreme hücrelerinin yaklaşık yarısı X, yarısı Y taşır.
Adım 1 (I): Anne hiç Y kromozomu taşımaz. Erkek çocuklardaki Y kromozomu yalnızca babadan gelebilir. I doğrudur.
Adım 2 (II): Baba da bir erkektir; onun Y kromozomu kendi babasından gelmiştir. Öyleyse X kromozomunu kendi annesinden almıştır. II yanlıştır.
Adım 3 (III): Her döllenmede babadan X ya da Y taşıyan üreme hücresinin gelme olasılığı yine yarı yarıyadır. Önceki çocukların cinsiyeti bu olasılığı değiştirmez. III yanlıştır.
Sağlama: "Bir erkeğin Y'si babasından, X'i annesinden gelir." kuralı hem çocuklar hem baba için geçerlidir.
Sık yapılan hata: "Üst üste erkek doğduysa sıra kıza gelir." diye düşünmek. Her doğum birbirinden bağımsızdır.
Cevap A.`
},
{
  id: "fen-kl-322",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede çiçeklerin gövdenin yanında bulunması, uçta bulunmasına baskındır. Bir tohum firması, çiçek konumu bakımından melez döl olan iki bitkiyi çaprazlayarak 400 yavru elde etmiştir. Firma, yavrulardan çiçekleri yanda olanları ayırmış ve bunların her birini, çiçekleri uçta olan bir bitkiyle ayrı ayrı çaprazlamıştır. Firma, bu ikinci çaprazlamalarda **hiçbir yavrusunda çiçekleri uçta olan bitki çıkmayan** ebeveynlerin tohumlarını "saf döl" etiketiyle satmayı planlamaktadır.
**Buna göre firmanın "saf döl" etiketiyle satacağı bitki sayısı yaklaşık kaçtır?**`,
  gorsel: null,
  secenekler: ["300", "200", "150", "100"],
  dogru: 3,
  hatalar: [
    "Çiçekleri yanda olan bütün yavruları saf sanma: 300 bitkinin hepsinde çiçekler yandadır ama yalnızca bir kısmı saf döldür.",
    "Melez ile safı karıştırma: 200, ikinci çaprazlamada çiçekleri uçta yavru veren melez bitkilerin sayısıdır.",
    "Yanda çiçeklileri ikiye bölme: 1 : 1 oranını ilk çaprazlamaya uygulama; iki melezin yavrularında genotip oranı 1 : 2 : 1'dir.",
    null
  ],
  aciklama: `Yanda çiçek genini Y, uçta çiçek genini y ile gösterelim.
Adım 1: Yy × Yy çaprazlamasında genotip oranı 1 YY : 2 Yy : 1 yy'dir. 400 yavrunun yaklaşık 100'ü YY, 200'ü Yy, 100'ü yy olur.
Adım 2: Çiçekleri yanda olanlar YY ve Yy'lerdir: 100 + 200 = 300 bitki.
Adım 3: Bu bitkiler yy ile çaprazlanır. YY × yy → hepsi Yy, hiç uçta çiçekli yavru çıkmaz. Yy × yy → yarısı yy, uçta çiçekli yavru çıkar.
Adım 4: Hiç uçta çiçekli yavrusu olmayan bitkiler YY olanlardır; sayıları yaklaşık 100'dür.
Sağlama: 100 saf + 200 melez = 300 yanda çiçekli bitki. Firma bu 300 bitkinin üçte birini "saf döl" etiketiyle satar.
Sık yapılan hata: Fenotipi baskın olan her bitkiyi saf döl saymak.
Cevap D.`
},
{
  id: "fen-kl-323",
  kazanim: "F.8.2.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Görselde bir bezelye bitkisinin vücut hücresindeki bir kromozom çifti gösterilmiştir. Kromozomlardan biri polenden, diğeri yumurta hücresinden gelmiştir. Kromozomların aynı hizadaki bölgelerinde çiçek rengini belirleyen genler bulunmaktadır. M, mor çiçek genini; m, beyaz çiçek genini göstermektedir ve mor çiçek baskındır. Kromozomun, DNA'nın proteinlerle paketlenmiş hâli olduğu bilinmektedir.
Buna göre;
I. M ve m, çiçek rengi karakterini belirleyen DNA bölümleridir.
II. Bu bitki mor çiçeklidir ve çiçek rengi bakımından melez döldür.
III. Bu bitki beyaz çiçekli bir bitkiyle çaprazlanırsa yavruların tamamı mor çiçekli olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 440 290" role="img" aria-label="İki kromozomdan oluşan kromozom çifti; birinin üzerinde M, diğerinin aynı hizasında m geni işaretli"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="120" y="40" width="50" height="210" rx="25"/><rect x="270" y="40" width="50" height="210" rx="25"/></g><g fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"><rect x="120" y="120" width="50" height="24"/><rect x="270" y="120" width="50" height="24"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="170" y1="132" x2="215" y2="132"/><line x1="270" y1="132" x2="225" y2="132"/></g><g fill="currentColor" font-size="20" font-weight="bold" text-anchor="middle"><text x="95" y="139">M</text><text x="345" y="139">m</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="145" y="275">Polenden gelen</text><text x="295" y="275">Yumurtadan gelen</text><text x="220" y="112">çiçek rengi</text><text x="220" y="30">Kromozom çifti</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi gözden kaçırma: bitkide biri M, biri m olmak üzere farklı iki gen vardır; bitki melezdir ve M baskın olduğu için mordur.",
    null,
    "Melez bireyi saf gibi çaprazlama: Mm × mm çaprazlamasında yavruların yaklaşık yarısı mm yani beyaz çiçekli olur. III yanlıştır; II ise doğrudur.",
    "Gen ile DNA ilişkisini kuramama: gen, DNA'nın bir karakteri belirleyen bölümüdür; M ve m de çiçek rengini belirleyen DNA bölümleridir. I doğrudur, III yanlıştır."
  ],
  aciklama: `Gen, DNA üzerinde bir karakterin ortaya çıkmasını sağlayan bölümdür. Bir kromozom çiftinin aynı hizasındaki genler aynı karakteri belirler.
Adım 1 (I): M ve m, kromozomların aynı hizasında bulunan ve çiçek rengini belirleyen genlerdir. Kromozom DNA'nın paketlenmiş hâli olduğuna göre bu genler DNA bölümleridir. I doğrudur.
Adım 2 (II): Bitkinin genotipi Mm'dir. Farklı iki gen taşıdığı için melez döldür; M baskın olduğu için mor çiçeklidir. II doğrudur.
Adım 3 (III): Mm × mm çaprazlamasında Mm ve mm yavrular yaklaşık yarı yarıya oluşur. Yavruların yaklaşık yarısı beyaz çiçeklidir. III yanlıştır.
Sağlama: Yavruların hepsinin mor olması için bitkinin MM olması gerekirdi; görseldeki kromozomlardan biri m taşıdığı için bu mümkün değildir.
Sık yapılan hata: Mor çiçekli bitkiyi otomatik olarak saf döl kabul etmek.
Cevap B.`
},
{
  id: "fen-kl-324",
  kazanim: "F.8.2.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bezelyede yuvarlak tohum şekli, buruşuk tohum şekline baskındır. Bir araştırmacı, farklı tohum paketlerinden yetiştirdiği yuvarlak tohumlu A ve B bitkilerinin genotiplerini bilmemektedir. Bu yüzden önce A bitkisini kendi kendine tozlaştırmış, sonra A ile B bitkilerini birbiriyle çaprazlamıştır. İki deneyin sonuçlarını tabloya yazan araştırmacı, üçüncü deneyde B bitkisini buruşuk tohumlu C bitkisiyle çaprazlamayı planlamaktadır.
**Buna göre üçüncü deneyde elde edilecek yavrular için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Deney</th><th>Yapılan işlem</th><th>Yuvarlak tohumlu yavru</th><th>Buruşuk tohumlu yavru</th></tr><tr><td>1.</td><td>A bitkisi kendi kendine tozlaştırıldı</td><td>243</td><td>80</td></tr><tr><td>2.</td><td>A bitkisi B bitkisiyle çaprazlandı</td><td>260</td><td>0</td></tr></table>`,
  secenekler: [
    "Yavruların yaklaşık yarısı buruşuk tohumlu olur.",
    "Yavruların yaklaşık dörtte biri buruşuk tohumlu olur.",
    "Yavruların tamamı yuvarlak tohumlu ve melez döl olur.",
    "Yavruların tamamı yuvarlak tohumlu ve saf döl olur."
  ],
  dogru: 2,
  hatalar: [
    "B'yi melez sanma: melez A ile çaprazlanan B'den hiç buruşuk yavru çıkmaması, B'nin buruşuk gen taşımadığını gösterir; B saf döldür.",
    "3 : 1 oranını ezberden uygulama: dörtte bir buruşuk sonucu iki melezin çaprazlanmasında görülür; B ile C'nin ikisi de melez değildir.",
    null,
    "Yavruların genotipini ebeveynin genotipi sanma: B (YY) ile C (yy) çaprazlanınca her yavru bir Y bir y alır; yavrular melezdir, saf değildir."
  ],
  aciklama: `Yuvarlak tohum genini Y, buruşuk tohum genini y ile gösterelim. Buruşuk tohumlu C bitkisi çekinik fenotipte olduğu için yy'dir.
Adım 1: 1. deneyde A kendi kendine tozlaşınca yaklaşık 3 : 1 (243 : 80) sonuç çıkmıştır. A bitkisi Yy yani melezdir.
Adım 2: 2. deneyde A × B çaprazlamasında hiç buruşuk yavru yoktur. A, y verebilen bir bitkidir; buruşuk yavru çıkmadığına göre B hiç y vermemiştir. B, YY yani saf döldür.
Adım 3: 3. deneyde B (YY) × C (yy) çaprazlanır. Her yavru B'den Y, C'den y alır; hepsi Yy olur.
Adım 4: Yavruların tamamı yuvarlak tohumludur ve farklı iki gen taşıdıkları için melez döldür.
Sık yapılan hata: B'nin genotipini tahmin etmeden doğrudan "yuvarlak × buruşuk, öyleyse yarısı buruşuk" demek. Önce B'nin saf olup olmadığı veriden bulunmalıdır.
Cevap C.`
},
{
  id: "fen-kl-325",
  kazanim: "F.8.2.2.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sağlık araştırmasında, birbirine yakın iki bölgede akraba evliliği oranları ve çekinik bir genle aktarılan kalıtsal bir hastalığın yeni doğan bebeklerde görülme sıklığı incelenmiştir. Araştırmacılar iki bölgede yaşayanların beslenme alışkanlıklarının ve sağlık hizmetlerine ulaşma olanaklarının benzer olduğunu belirtmiştir. Sonuçlar tabloda verilmiştir.
Buna göre;
I. L bölgesinde hastalığın daha az görülmesinin nedeni, bu bölgedeki beslenme alışkanlıklarıdır.
II. Akraba evliliği oranının yüksek olduğu bölgede hastalık daha sık görülmüştür.
III. L bölgesinde akraba evliliği yapan çiftlerin hiçbirinin çocuğunda bu hastalık görülmemiştir.
**yargılarından hangilerine tablodaki verilerle kesinlikle ulaşılabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Bölge</th><th>Akraba evliliği oranı</th><th>Hastalıkla doğan bebek sayısı (her 10 000 doğumda)</th></tr><tr><td>K</td><td>Yüzde 24</td><td>11</td></tr><tr><td>L</td><td>Yüzde 6</td><td>3</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Veride olmayan bilgiyi çıkarma: tabloda hangi ailenin akraba evliliği yaptığı ile hasta bebekler eşleştirilmemiştir; L bölgesinde de 3 hasta bebek vardır. Ayrıca II tabloyla doğrudan desteklenir.",
    "Metinde elenen etkeni neden sayma: araştırmacılar iki bölgenin beslenme alışkanlıklarının benzer olduğunu belirtmiştir; tablo da beslenmeyle ilgili veri içermez. I'e ulaşılamaz.",
    "Tablodaki sayıyı ailelere dağıtma: L bölgesinde 10 000 doğumda 3 hasta bebek vardır; bunların hangi ailelerden olduğu tabloda yoktur. III'e ulaşılamaz."
  ],
  aciklama: `Akraba evliliğinde eşlerin aynı çekinik hastalık genini taşıma olasılığı artar; bu yüzden çekinik kalıtsal hastalıklar bu evliliklerden doğan çocuklarda daha sık görülür. Ama bu bir olasılık artışıdır, kesinlik değildir.
Adım 1 (II): K bölgesinde akraba evliliği oranı (yüzde 24) L'den (yüzde 6) yüksektir ve hastalık K'de daha sık (11'e 3) görülmüştür. Bu, tablodan doğrudan okunur. II'ye ulaşılır.
Adım 2 (I): Araştırmacılar iki bölgenin beslenme alışkanlıklarının benzer olduğunu söylemiştir; tabloda beslenmeyle ilgili bir veri de yoktur. İki bölgede benzer olan bir etken, bölgeler arasındaki farkı açıklayamaz. I'e ulaşılamaz.
Adım 3 (III): L bölgesinde de 3 hasta bebek vardır ve bunların hangi ailelerden olduğu verilmemiştir. Akraba olmayan ama ikisi de geni taşıyan eşlerin çocukları da hasta olabilir. III'e ulaşılamaz.
Sık yapılan hata: Bir bölge için verilen genel sıklığı, o bölgedeki her aileye ait kesin bilgi gibi okumak. "Kesinlikle ulaşılabilir" kökü, yalnız tablonun doğrudan desteklediği yargıyı ister.
Cevap A.`
},
/* ===================== HAVUZ (KADEME 0) ===================== */
{
  id: "fen-kl-001",
  kazanim: "F.8.2.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir bezelye bitkisi, tohum şekli karakteri için iki yuvarlak tohum geni (YY) taşımaktadır.
**Bir karakter bakımından aynı iki geni taşıyan böyle bir bireye ne ad verilir?**`,
  gorsel: null,
  secenekler: ["Melez döl", "Fenotip", "Saf döl", "Genotip"],
  dogru: 2,
  hatalar: [
    "Saf ile melezi karıştırma: melez döl, bir karakter için farklı iki gen (Yy gibi) taşıyan bireydir.",
    "Bireyi özellikle karıştırma: fenotip bir birey değil, bireyin görünen özelliğidir (yuvarlak tohum gibi).",
    null,
    "Bireyi gen bileşimiyle karıştırma: genotip, bireyin taşıdığı genlerin bütünüdür (YY gibi); bireyin adı değildir."
  ],
  aciklama: `Saf döl, bir karakter bakımından aynı iki geni taşıyan bireydir.
Adım 1: Bitkinin tohum şekli genleri YY'dir; iki gen de aynıdır.
Adım 2: Aynı iki geni taşıyan bireye saf döl denir. Farklı iki gen taşısaydı (Yy) melez döl denirdi.
Sık yapılan hata: Genotip ile saf döl kavramını karıştırmak. YY bir genotiptir; bu genotipe sahip birey saf döldür.
Cevap C.`
},
{
  id: "fen-kl-002",
  kazanim: "F.8.2.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir öğrenci, bahçedeki bir bezelye bitkisiyle ilgili dört bilgi yazmıştır.
**Bu bilgilerden hangisi bitkinin bir fenotipini ifade eder?**`,
  gorsel: null,
  secenekler: [
    "Bitki, boy için iki uzun boy geni taşır.",
    "Bitki, çiçek rengi bakımından melez döldür.",
    "Bitkinin tohum rengi genotipi Ss'dir.",
    "Bitkinin çiçekleri mor renklidir."
  ],
  dogru: 3,
  hatalar: [
    "Gen bilgisini fenotip sanma: bitkinin taşıdığı genler genotipi anlatır, görünen özelliği değil.",
    "Saf/melez bilgisini fenotip sanma: melez olmak gen bileşimiyle ilgilidir; dışarıdan bakınca görülmez.",
    "Genotipi fenotip sanma: Ss yazımı bir genotiptir; bitkinin görünüşü değildir.",
    null
  ],
  aciklama: `Fenotip, bir canlının gözle görülebilen ya da ölçülebilen özelliğidir. Genotip ise bu özelliği belirleyen genlerin bütünüdür.
Adım 1: "Mor çiçekli olmak" bakınca görülen bir özelliktir; fenotiptir.
Adım 2: Diğer üç bilgi bitkinin taşıdığı genlerle ilgilidir; genotip bilgisidir.
Sık yapılan hata: Harflerle yazılmamış her bilgiyi fenotip sanmak. "Melez döldür" de bir genotip bilgisidir.
Cevap D.`
},
{
  id: "fen-kl-003",
  kazanim: "F.8.2.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Melez döl uzun boylu bir bezelye bitkisi hem uzun boy hem de kısa boy geni taşır, ancak bitki uzun boyludur.
**Melez bir bireyde etkisini fenotipte gösteren bu gene ne ad verilir?**`,
  gorsel: null,
  secenekler: ["Çekinik gen", "Baskın gen", "Genotip", "Saf döl"],
  dogru: 1,
  hatalar: [
    "Baskın ile çekiniği karıştırma: çekinik gen, melez bireyde etkisini gösteremeyen gendir; burada kısa boy geni çekiniktir.",
    null,
    "Geni gen bileşimiyle karıştırma: genotip tek bir gen değil, bireyin taşıdığı genlerin bütünüdür.",
    "Geni bireyle karıştırma: saf döl bir gen değil, aynı iki geni taşıyan bireydir."
  ],
  aciklama: `Baskın gen, melez bireyde etkisini fenotipte gösteren gendir. Çekinik gen ise baskın genle birlikte bulunduğunda etkisini gösteremez.
Adım 1: Bitki hem uzun hem kısa boy geni taşıdığı hâlde uzun boyludur.
Adım 2: Fenotipte etkisini gösteren uzun boy genidir; bu gen baskındır.
Sık yapılan hata: Çekinik genin melez bireyde yok olduğunu sanmak. Çekinik gen hücrede vardır, yalnızca etkisini gösteremez.
Cevap B.`
},
{
  id: "fen-kl-004",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bezelyede mor çiçek geni M, beyaz çiçek geni m ile gösterilir ve mor çiçek baskındır. Bir öğrenci, Mm genotipli bir bitkiyi mm genotipli bir bitkiyle çaprazlamıştır.
**Buna göre oluşacak yavruların yaklaşık ne kadarı beyaz çiçekli olur?**`,
  gorsel: null,
  secenekler: ["[[3|4]]", "[[1|2]]", "[[1|4]]", "0"],
  dogru: 1,
  hatalar: [
    "Mor ile beyazın oranını karıştırma: dörtte üç, iki melezin çaprazlanmasında mor yavruların oranıdır.",
    null,
    "3 : 1 oranını ezberden uygulama: dörtte bir beyaz, Mm × Mm çaprazlamasının sonucudur; burada ebeveynlerden biri mm'dir.",
    "Baskın genin her zaman kazandığını sanma: Mm ebeveyni m geni de verebilir; mm ile birleşince beyaz yavru oluşur."
  ],
  aciklama: `Adım 1: Mm bitkisi M ya da m, mm bitkisi yalnızca m verebilir.
Adım 2: Olası yavrular: Mm, Mm, mm, mm. Dört olasılıktan ikisi mm'dir.
Adım 3: mm bireyler beyaz çiçeklidir. Yavruların yaklaşık yarısı beyaz olur.
Sağlama: Yavruların diğer yarısı Mm'dir ve mor çiçeklidir; toplam oran 1 mor : 1 beyazdır.
Cevap B.`
},
{
  id: "fen-kl-005",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bezelyede bakla (meyve) rengi bakımından yeşil bakla, sarı baklaya baskındır. Bir çiftçi, bakla rengi bakımından saf döl yeşil baklalı bir bitkiyi sarı baklalı bir bitkiyle çaprazlamıştır.
**Buna göre oluşacak yavruların bakla rengi için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Tamamı sarı baklalı olur.",
    "Yarısı yeşil, yarısı sarı baklalı olur.",
    "Dörtte üçü yeşil, dörtte biri sarı baklalı olur.",
    "Tamamı yeşil baklalı olur."
  ],
  dogru: 3,
  hatalar: [
    "Tohum rengindeki baskınlığı bakla rengine taşıma: tohum renginde sarı baskındır ama bakla renginde yeşil baskındır.",
    "Saf ebeveyni melez sanma: yarı yarıya sonuç melez × çekinik çaprazlamasında çıkar; bu soruda yeşil ebeveyn saf döldür.",
    "3 : 1 oranını ezberden uygulama: bu oran iki melezin çaprazlanmasında görülür.",
    null
  ],
  aciklama: `Yeşil bakla genini Y, sarı bakla genini y ile gösterelim.
Adım 1: Ebeveynler YY (saf yeşil) ve yy (sarı) genotiplidir.
Adım 2: Her yavru bir ebeveynden Y, diğerinden y alır; hepsi Yy olur.
Adım 3: Bakla renginde yeşil baskın olduğu için Yy bitkilerin hepsi yeşil baklalıdır.
Sık yapılan hata: Tohum rengi ile bakla rengini karıştırmak. Tohum renginde sarı, bakla renginde yeşil baskındır.
Cevap D.`
},
{
  id: "fen-kl-006",
  kazanim: "F.8.2.2.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kalıtsal hastalık çekinik bir genle aktarılmaktadır. Aşağıda dört çift hakkında bilgi verilmiştir; bu çiftlerde anne ve babaların hiçbiri hasta değildir.
**Buna göre hangi çiftin çocuğunda bu hastalığın görülme olasılığı vardır?**`,
  gorsel: null,
  secenekler: [
    "Anne ve babanın ikisinin de hastalık genini taşıdığı çift",
    "Yalnızca annenin hastalık genini taşıdığı çift",
    "Birbirinin kuzeni olup hastalık geni taşımayan çift",
    "Babanın kardeşinin taşıdığı, kendilerinin taşımadığı çift"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Çekinik hastalık için tek genin yettiğini sanma: çocuk hastalık genini yalnız anneden alırsa babadan sağlıklı gen alır ve hasta olmaz.",
    "Akrabalığı tek başına hastalık nedeni sanma: akraba evliliği yalnızca aynı çekinik geni taşıma olasılığını artırır; iki eş de geni taşımıyorsa çocuğa bu gen geçemez.",
    "Akrabanın genini ebeveynin geni sanma: çocuk genlerini yalnızca anne ve babasından alır; anne ve baba geni taşımıyorsa amcanın taşıdığı gen çocuğa geçemez."
  ],
  aciklama: `Çekinik bir kalıtsal hastalık, ancak çocuk hastalık genini hem anneden hem babadan alırsa ortaya çıkar. Geni tek kopya taşıyan kişi sağlıklı görünür.
Adım 1: Çocuğun hasta olabilmesi için iki ebeveynin de bu geni taşıması gerekir.
Adım 2: Yalnız annenin geni taşıdığı çiftte çocuk babadan sağlıklı gen alır; hasta olmaz.
Adım 3: Kuzen olmak, aynı çekinik geni taşıma olasılığını artırır; ama bu çiftte iki eş de geni taşımadığı için çocuğa geçecek gen yoktur.
Adım 4: Son çiftte geni babanın kardeşi taşımaktadır; anne ve baba ise taşımamaktadır. Çocuk genlerini yalnız anne ve babasından aldığı için bu çiftin çocuğuna hastalık geni geçemez.
Sık yapılan hata: Akraba evliliğini hastalığın kendisi sanmak. Akraba evliliği, ailede var olan çekinik genin iki eşte birden bulunma olasılığını artırdığı için risklidir.
Cevap A.`
},
{
  id: "fen-kl-007",
  kazanim: "F.8.2.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bezelyede yuvarlak tohum geni Y, buruşuk tohum geni y ile gösterilir ve yuvarlak tohum baskındır. Bir bitkinin tohum şekli genotipi Yy'dir.
Bu bitkiyle ilgili;
I. Tohum şekli bakımından saf döldür.
II. Fenotipi yuvarlak tohumdur.
III. Buruşuk tohum genini taşır.
**ifadelerinden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Saf ile melezi karıştırma ve III'ü atlama: Yy farklı iki gen taşıdığı için melezdir; bu genlerden biri buruşuk tohum genidir.",
    "Fenotipi gözden kaçırma: Y baskın olduğu için bitki yuvarlak tohumludur. Ayrıca Yy melezdir, saf değildir.",
    null,
    "I'i doğru sayma: saf döl aynı iki geni taşır (YY ya da yy); Yy melez döldür."
  ],
  aciklama: `Adım 1 (I): Yy genotipinde farklı iki gen vardır; bu bitki melez döldür. I yanlıştır.
Adım 2 (II): Y baskın olduğu için bitkinin tohumları yuvarlaktır. II doğrudur.
Adım 3 (III): Genotipteki y, buruşuk tohum genidir; bitki bu geni taşır ama etkisini göstermez. III doğrudur.
Sık yapılan hata: Görünüşü yuvarlak olan bitkinin buruşuk gen taşıyamayacağını sanmak.
Cevap C.`
},
{
  id: "fen-kl-008",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bezelyede çiçeklerin gövdenin yanında bulunması, uçta bulunmasına baskındır. Bir öğrenci, çiçekleri gövdenin ucunda bulunan bir bezelye bitkisini kendi kendine tozlaştırmıştır.
**Buna göre oluşacak yavruların çiçek konumu için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yavruların dörtte birinde çiçekler uçta olur.",
    "Yavruların yarısında çiçekler uçta olur.",
    "Yavruların tamamında çiçekler yanda olur.",
    "Yavruların tamamında çiçekler uçta olur."
  ],
  dogru: 3,
  hatalar: [
    "3 : 1 oranını ezberden uygulama: dörtte bir oranı iki melezin çaprazlanmasında görülür; çiçekleri uçta olan bitki melez değildir.",
    "1 : 1 oranını uygulama: yarı yarıya sonuç melez × çekinik çaprazlamasında görülür; burada tek bir çekinik bitki kendi kendine tozlaşmaktadır.",
    "Baskın özelliğin her zaman ortaya çıktığını sanma: bitkide yanda çiçek geni yoktur; yavrulara bu gen geçemez.",
    null
  ],
  aciklama: `Çekinik bir özellik yalnızca iki çekinik gen bir araya geldiğinde görülür. Bu yüzden çekinik fenotipteki her birey saf döldür.
Adım 1: Yanda çiçek genini Y, uçta çiçek genini y ile gösterelim. Çiçekleri uçta olan bitki çekinik fenotiptedir; genotipi yy'dir.
Adım 2: Kendi kendine tozlaşmada polen de yumurta da aynı bitkiden gelir; hepsi yalnızca y taşır.
Adım 3: Yavruların hepsi yy olur; hepsinde çiçekler uçtadır.
Sık yapılan hata: Her kendi kendine tozlaşmada 3 : 1 oranı çıkacağını sanmak. Bu oran yalnızca melez bitki kendi kendine tozlaştığında görülür.
Cevap D.`
},
{
  id: "fen-kl-009",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bezelyede yuvarlak tohum şekli, buruşuk tohum şekline baskındır. Bir öğrenci, yuvarlak tohumlu bir bezelye bitkisini kendi kendine tozlaştırmış ve elde ettiği tohumları sayarak grafiği çizmiştir. Öğrenci, sonucun tesadüf olmadığını anlamak için sayımı birkaç kez kontrol etmiş ve aynı sayıları bulmuştur.
**Buna göre kendi kendine tozlaştırılan bitki için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 440 290" role="img" aria-label="Sütun grafiği: 612 yuvarlak tohum, 205 buruşuk tohum"><text x="235" y="22" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Elde edilen tohum sayıları</text><g stroke="currentColor" stroke-width="2"><line x1="80" y1="40" x2="80" y2="240"/><line x1="80" y1="240" x2="410" y2="240"/></g><rect x="130" y="56" width="70" height="184" fill="var(--vurgu)" stroke="currentColor"/><rect x="280" y="178.5" width="70" height="61.5" fill="var(--vurgu2)" stroke="currentColor"/><g fill="currentColor" font-size="16" text-anchor="middle"><text x="165" y="49">612</text><text x="315" y="171">205</text><text x="165" y="263">Yuvarlak</text><text x="315" y="263">Buruşuk</text></g><text x="35" y="140" fill="currentColor" font-size="15" text-anchor="middle" transform="rotate(-90 35 140)">Tohum sayısı</text></svg>`,
  secenekler: [
    "Melez döldür ve yuvarlak tohumludur.",
    "Saf döldür ve yuvarlak tohumludur.",
    "Melez döldür ve buruşuk tohumludur.",
    "Saf döldür ve buruşuk tohumludur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Fenotipten genotip çıkarma: yuvarlak tohumlu bitki saf olsaydı kendi kendine tozlaşınca hiç buruşuk tohum oluşmazdı.",
    "Ebeveynin fenotipini unutma: soruda bitkinin yuvarlak tohumlu olduğu verilmiştir; ayrıca melez bitki baskın özelliği gösterir.",
    "Yavruların bir bölümünü ebeveyn sanma: buruşuk tohumlar yavrulara aittir; kendi kendine tozlaşan bitki yuvarlak tohumlu ve melezdir."
  ],
  aciklama: `Yuvarlak tohum genini Y, buruşuk tohum genini y ile gösterelim.
Adım 1: Grafikte 612 yuvarlak, 205 buruşuk tohum vardır. 612 : 205 yaklaşık 3 : 1'dir.
Adım 2: Buruşuk tohumlar (yy), iki genini de aynı bitkiden almıştır. Öyleyse bitki y geni taşır.
Adım 3: Bitki hem Y taşır (yuvarlak tohumlu) hem y taşır; genotipi Yy'dir, yani melezdir.
Sağlama: Yy kendi kendine tozlaşınca 1 YY : 2 Yy : 1 yy oluşur; fenotip oranı 3 yuvarlak : 1 buruşuktur. Grafik bu oranla uyuşur.
Cevap A.`
},
{
  id: "fen-kl-010",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir fen öğretmeni, insanda cinsiyetin belirlenmesini anlatırken kadınların vücut hücrelerinde XX, erkeklerin vücut hücrelerinde XY eşey kromozomları bulunduğunu hatırlatmıştır. Ardından bir kız ve bir erkek çocuğu olan bir aileyi örnek vererek öğrencilerden aşağıdaki ifadeleri değerlendirmelerini istemiştir.
I. Kız çocuğun iki X kromozomunun ikisi de anneden gelmiştir.
II. Babanın vücut hücrelerinde X kromozomu bulunmaz.
III. Erkek çocuğun Y kromozomu babadan gelmiştir.
**Buna göre bu ifadelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 2,
  hatalar: [
    "Kız çocuğun kromozomlarını tek ebeveynden sanma: kız çocuk bir X'i anneden, diğer X'i babadan alır.",
    "Erkeklerde X olmadığını sanma: erkeklerin vücut hücrelerinde bir X ve bir Y kromozomu bulunur.",
    null,
    "İki yanlış ifadeyi birden doğru sayma: kız çocuğun X'lerinden biri babadan gelir; baba da vücut hücrelerinde bir X taşır."
  ],
  aciklama: `Her çocuk, eşey kromozomlarından birini anneden, birini babadan alır. Anne her zaman X verir; baba X ya da Y verir.
Adım 1 (I): Kız çocuk XX'tir. Bir X anneden, diğer X babadan gelmiştir. I yanlıştır.
Adım 2 (II): Babanın vücut hücrelerinde XY bulunur; yani bir X kromozomu vardır. II yanlıştır.
Adım 3 (III): Anne Y kromozomu taşımaz. Erkek çocuğun Y kromozomu yalnızca babadan gelebilir. III doğrudur.
Sık yapılan hata: "Kızlar anneye, oğullar babaya çeker; kızın kromozomları anneden gelir." diye düşünmek.
Cevap C.`
},
{
  id: "fen-kl-011",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bezelyede mor çiçek rengi, beyaz çiçek rengine baskındır. Bir bahçıvanın elinde mor çiçekli çok sayıda bezelye bitkisi vardır; bunların bir kısmı saf döl, bir kısmı melez döldür ama hangisinin hangisi olduğu bilinmemektedir. Bahçıvan, saf döl olan mor çiçekli bitkileri ayırmak istemektedir.
**Buna göre bahçıvanın uygulaması gereken yöntem aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Her mor çiçekli bitkiyi başka bir mor çiçekli bitkiyle çaprazlamak",
    "Her mor çiçekli bitkiyi beyaz çiçekli bir bitkiyle çaprazlamak",
    "Mor çiçekli bitkilerin çiçek renginin koyuluğunu karşılaştırmak",
    "Mor çiçekli bitkilerin tohumlarının rengini karşılaştırmak"
  ],
  dogru: 1,
  hatalar: [
    "Sonucu yorumlanamayan deney seçme: mor bitkinin eşi de saf ya da melez olabilir; beyaz yavru çıkmaması iki bitkiden hangisinin saf olduğunu göstermez.",
    null,
    "Fenotipten genotip okuma: saf ve melez mor bitkiler aynı renkte görünür; baskın gen tek başına da özelliği tam gösterir.",
    "Farklı karakterle karıştırma: tohum rengi ayrı bir karakterdir; çiçek rengi genleri hakkında bilgi vermez."
  ],
  aciklama: `Beyaz çiçekli bitki çekinik fenotipte olduğu için mm'dir; yavrularına yalnız m verir. Bu yüzden yavrularda görülen renk, mor bitkinin verdiği gene bağlı olur.
Adım 1: Mor bitki MM ise beyaz ile çaprazlanınca bütün yavrular Mm yani mor olur.
Adım 2: Mor bitki Mm ise yavruların yaklaşık yarısı mm yani beyaz olur.
Adım 3: Yavrularında hiç beyaz çıkmayan mor bitkiler saf döldür; bahçıvan bunları ayırır.
Sık yapılan hata: Saf ve melez bitkilerin görünüşten ayırt edilebileceğini sanmak. İki genotip de aynı fenotipi verir.
Cevap B.`
},
{
  id: "fen-kl-012",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bezelyede şişkin bakla şekli, boğumlu bakla şekline baskındır. Bir öğrenci okul serasında şişkin baklalı bir bitkiyi boğumlu baklalı bir bitkiyle çaprazlamış ve yavruların bakla şekillerini tabloya işlemiştir.
Buna göre;
I. Şişkin baklalı ebeveyn melez döldür.
II. Boğumlu baklalı yavrular saf döldür.
III. Şişkin baklalı yavrular kendi kendine tozlaşırsa boğumlu baklalı yavrular oluşabilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Yavruların bakla şekli</th><th>Yavru sayısı</th></tr><tr><td>Şişkin</td><td>51</td></tr><tr><td>Boğumlu</td><td>49</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "Yavruların genotiplerini atlama: boğumlu yavrular çekinik fenotipte olduğu için saf döldür; şişkin yavrular ise melezdir ve kendi kendine tozlaşınca boğumlu yavru verebilir.",
    "III'ü yanlış sayma: şişkin baklalı yavrular boğumlu ebeveynden b geni almıştır; hepsi Bb'dir ve kendi kendine tozlaşınca bb yavrular oluşabilir.",
    "I'i yanlış sayma: yavruların yaklaşık yarısının boğumlu olması, şişkin ebeveynin b geni taşıdığını yani melez olduğunu gösterir.",
    null
  ],
  aciklama: `Şişkin bakla genini B, boğumlu bakla genini b ile gösterelim. Boğumlu ebeveyn bb'dir.
Adım 1 (I): Yavruların yaklaşık yarısı boğumludur (51 : 49). Boğumlu yavrular (bb) şişkin ebeveynden de b almıştır. Şişkin ebeveyn Bb yani melezdir. I doğrudur.
Adım 2 (II): Boğumlu yavrular bb'dir; aynı iki geni taşıdıkları için saf döldür. II doğrudur.
Adım 3 (III): Şişkin yavrular, şişkin ebeveynden B, boğumlu ebeveynden b almıştır; hepsi Bb'dir. Bb kendi kendine tozlaşınca yaklaşık dörtte bir bb (boğumlu) yavru oluşur. III doğrudur.
Sağlama: Bb × bb → 1 Bb : 1 bb; tablodaki yaklaşık yarı yarıya sonuçla uyuşur.
Cevap D.`
},
{
  id: "fen-kl-013",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bezelyede sarı tohum geni S, yeşil tohum geni s ile gösterilir ve sarı tohum baskındır. Bir öğrenci, sarı tohumlu bir bezelye bitkisini yeşil tohumlu bir bitkiyle çaprazlamış; elde ettiği tohumların bir kısmının sarı, bir kısmının yeşil olduğunu görmüştür. Öğrenci bu tohumlardan bir sarı ve bir yeşil tohumu ekmiş, gelişen iki bitkiyi ayrı ayrı kendi kendine tozlaştırmıştır. Ardından iki tozlaşmadan elde ettiği bütün yeni yavruların genotiplerini tek bir listede toplamıştır. Listede aynı genotipi yalnızca bir kez yazmıştır.
**Buna göre öğrencinin listesinde en fazla kaç farklı genotip bulunabilir?**`,
  gorsel: null,
  secenekler: ["1", "2", "3", "4"],
  dogru: 2,
  hatalar: [
    "Yalnızca ortak genotipi sayma: iki tozlaşmanın ikisinde de çıkan genotip yalnız ss'dir; ama soru iki listenin birleşimindeki farklı genotip sayısını istiyor.",
    "Sarı yavruyu saf döl sanma: sarı yavru SS olsaydı liste SS ve ss olurdu; oysa sarı yavru yeşil ebeveynden s aldığı için Ss'dir.",
    null,
    "Aynı genotipi iki kez sayma: sarı bitkinin tozlaşmasından çıkan ss ile yeşil bitkinin tozlaşmasından çıkan ss aynı genotiptir; listede bir kez yazılır."
  ],
  aciklama: `Kendi kendine tozlaşma, bir bitkinin kendi çiçek tozuyla döllenmesidir; yani bitki kendisiyle çaprazlanmış olur.
Adım 1: Yeşil tohumlu ebeveyn ss'dir. Yavruların bir kısmı yeşil (ss) olduğuna göre sarı ebeveyn de s taşır; sarı ebeveyn Ss'dir.
Adım 2: Ss × ss çaprazlamasında yavrular Ss (sarı) ve ss (yeşil) olur. Ekilen sarı tohum Ss, yeşil tohum ss'dir.
Adım 3: Ss bitkisi kendi kendine tozlaşırsa SS, Ss ve ss genotipli yavrular oluşabilir.
Adım 4: ss bitkisi kendi kendine tozlaşırsa yalnızca ss yavrular oluşur.
Adım 5: İki listeyi birleştir: SS, Ss, ss. ss iki listede de vardır ama bir kez yazılır. 3 farklı genotip bulunur.
Sağlama: Sarı tohumlu yavrular yeşil ebeveynden mutlaka s aldığı için hiçbiri SS olamaz; SS genotipi ancak bir sonraki kuşakta, Ss bitkisinin tozlaşmasıyla ortaya çıkar.
Sık yapılan hata: ss genotipini iki tozlaşmada ayrı ayrı sayıp 4 bulmak.
Cevap C.`
},
{
  id: "fen-kl-014",
  kazanim: "F.8.2.2.3",
  kademe: 0,
  zorluk: 4,
  soru: `Dağlık bir bölgedeki küçük bir köyde, dışarıyla ulaşım yüzyıllar boyunca zor olduğu için evlilikler çoğunlukla köyün kendi içinde ve akrabalar arasında yapılmıştır. Köye gelen sağlık ekibi, çekinik bir genle aktarılan bir kalıtsal hastalığın bu köyde çevredeki şehirlere göre çok daha sık görüldüğünü belirlemiştir. Ekip, hasta çocukların anne ve babalarının çoğunun tamamen sağlıklı olduğunu, bazı ailelerde ise hiç hasta çocuk bulunmadığını not etmiştir.
Buna göre;
I. Akraba evliliği yapan her çiftin çocuklarında bu hastalık görülür.
II. Hastalığın bu köyde sık görülmesi, çekinik genin aileler içinde kuşaktan kuşağa taşınıp akraba evlilikleriyle bir araya gelmesiyle açıklanabilir.
III. Bu köyde hasta olan çocukların tamamı, hastalık genini hem annelerinden hem babalarından almıştır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Çekinik hastalığın ortaya çıkma koşulunu unutma: hasta çocuk, hastalık genini iki ebeveyninden de almıştır; sağlıklı görünen anne ve babalar bu genin taşıyıcısıdır. III de doğrudur.",
    "Olasılığı kesinliğe çevirme: akraba evliliği hastalık olasılığını artırır; metinde hasta çocuğu olmayan aileler de bulunduğu belirtilmiştir. Ayrıca III doğrudur.",
    "Aşırı genelleme: her akraba evliliğinde hastalık çıkmaz; metinde hiç hasta çocuğu olmayan aileler vardır. Ayrıca II metindeki durumu doğru açıklar.",
    null
  ],
  aciklama: `Çekinik bir hastalık ancak hastalık geni hem anneden hem babadan alındığında ortaya çıkar. Geni tek kopya taşıyan kişi sağlıklı görünür; bu kişiye taşıyıcı denir.
Adım 1 (I): Metinde bazı ailelerde hiç hasta çocuk bulunmadığı belirtilmiştir. Akraba evliliği hastalık olasılığını artırır ama her çiftin çocuğunda hastalık çıkmaz. I yanlıştır.
Adım 2 (II): Köyde evlilikler kuşaklar boyu akrabalar arasında yapılmıştır. Ortak atalardan gelen çekinik gen aileler içinde taşınır; akraba eşlerin ikisinin de bu geni taşıma olasılığı yüksektir. Hastalığın sık görülmesi bununla açıklanabilir. II doğrudur.
Adım 3 (III): Hastalık çekinik bir genle aktarıldığı için hasta çocuklar bu genden iki tane taşır; biri anneden, biri babadan gelmiştir. Anne ve babaları sağlıklı görünse de taşıyıcıdır. III doğrudur.
Sık yapılan hata: "Anne ve baba sağlıklıysa hastalık geni çocuğa onlardan gelmiş olamaz." diye düşünmek. Sağlıklı taşıyıcılar geni çocuklarına aktarabilir.
Cevap D.`
},
{
  id: "fen-kl-015",
  kazanim: "F.8.2.2.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bezelyede sarı tohum rengi, yeşil tohum rengine baskındır. Bir araştırmacı iki çaprazlama yapmıştır. 1. çaprazlamada genotipleri bilinmeyen iki bitkiyi çaprazlamış ve tablodaki sonucu elde etmiştir. 2. çaprazlamada ise 1. çaprazlamadan elde ettiği yeşil tohumlu yavrulardan birini, sarı tohumlu K bitkisiyle çaprazlamıştır. Araştırmacı iki çaprazlamanın sonuçlarını birlikte değerlendirerek bitkilerin genotipleri hakkında yorum yapacaktır.
**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: `<table class="tablo"><tr><th>Çaprazlama</th><th>Sarı tohumlu yavru</th><th>Yeşil tohumlu yavru</th></tr><tr><td>1.</td><td>150</td><td>50</td></tr><tr><td>2.</td><td>120</td><td>0</td></tr></table>`,
  secenekler: [
    "1. çaprazlamadaki ebeveynlerin ikisi de melez döldür.",
    "K bitkisi tohum rengi bakımından melez döldür.",
    "K bitkisi ile 1. çaprazlamadaki ebeveynlerin fenotipi aynıdır.",
    "K ile çaprazlanan yeşil tohumlu yavru saf döldür."
  ],
  dogru: 1,
  hatalar: [
    "Olabilir olanı olamaz sanma: 3 : 1 (150 : 50) sonucu iki melezin çaprazlanmasında görülür; iki ebeveyn de melezdir.",
    null,
    "Fenotip ile genotipi karıştırma: K ve 1. çaprazlamanın ebeveynleri farklı genotipte olsa da hepsi sarı tohumludur; fenotipleri aynıdır.",
    "Çekinik bireyin genotipini bilmeme: yeşil tohumlu bitki çekinik fenotipte olduğu için ss yani saf döldür."
  ],
  aciklama: `Sarı tohum genini S, yeşil tohum genini s ile gösterelim.
Adım 1: 1. çaprazlamada 150 : 50 yani yaklaşık 3 : 1 sonuç çıkmıştır. Bu, Ss × Ss çaprazlamasına özgüdür. Ebeveynlerin ikisi de melez ve sarı tohumludur.
Adım 2: Yeşil tohumlu yavru ss'dir; saf döldür.
Adım 3: 2. çaprazlamada ss × K sonucunda hiç yeşil yavru çıkmamıştır. ss her yavruya s verir; yeşil yavru çıkmadığına göre K hiç s vermemiştir. K, SS yani saf döldür.
Adım 4: Seçenekleri kontrol et. Ebeveynlerin melez olması olabilir. K'nin melez olması olamaz. K ile ilk ebeveynler sarı tohumlu olduğu için fenotipleri aynıdır, bu olabilir. Yeşil yavrunun saf olması olabilir.
Sık yapılan hata: K'nin sarı tohumlu olduğunu görüp "sarı bitkiler melez olabilir" diye düşünmek. K melez olsaydı 2. çaprazlamada yavruların yaklaşık yarısı yeşil olurdu.
Cevap B.`
}
);
