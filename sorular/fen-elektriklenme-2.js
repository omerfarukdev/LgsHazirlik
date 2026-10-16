// Fen Bilimleri — Elektrik Yükleri ve Elektriklenme (F.8.7.1): Kademe 3 (LGS Ayarı) ve Havuz (kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["elektriklenme"] = window.LGS_BANK["elektriklenme"] || []).push(
{
  "id": "fen-el-301",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir mobilya atölyesinde metal sandalyeler elektrostatik yöntemle boyanıyor. Püskürtme tabancasından çıkan boya damlacıkları negatif yüklenirken sandalye pozitif yüklenmiş durumdadır. Usta, bu yöntemde boyanın daha az harcandığını ve sandalyenin arka yüzüne de boya ulaştığını söylüyor ve bunu şu yargılarla açıklıyor.\nI. Damlacıklar aynı cins yüklü olduğu için birbirini iter ve ince bir sis oluşturur.\nII. Negatif yüklü damlacıklar pozitif yüklü sandalyeye çekilir; bu yüzden boya sandalyenin arka yüzüne de ulaşabilir.\nIII. Pozitif yüklü sandalye damlacıkları iter; bu yüzden boya yüzeye yapışmaz.\n**Buna göre ustanın yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur ama zıt yüklü sandalyenin damlacıkları çektiğini söyleyen II de doğrudur.",
    "Çekmeyi itme sanma: III yanlıştır; zıt cins yükler birbirini çeker, boyanın sandalyeye yapışmasını sağlayan da budur.",
    null,
    "III'ü doğru sanma: pozitif sandalye negatif damlacıkları itmez, çeker. Ayrıca aynı cins yüklü damlacıkların birbirini ittiğini söyleyen I de doğrudur."
  ],
  "aciklama": "Aynı cins elektrik yükleri birbirini iter, farklı cins elektrik yükleri birbirini çeker. Elektrostatik boyamada bu iki etki birlikte kullanılır.\nAdım 1 (I): Bütün damlacıklar negatif yüklüdür. Aynı cins oldukları için birbirini iter ve tabancadan çıkınca dağılarak ince bir sis oluşturur. I doğrudur.\nAdım 2 (II): Sandalye pozitif, damlacıklar negatiftir; zıt yükler birbirini çeker. Çekim, damlacıkların sandalyenin arka yüzüne dolanmasına da yardım eder. II doğrudur.\nAdım 3 (III): Pozitif sandalye negatif damlacıkları itmez, çeker. III yanlıştır.\nSağlama: İtme damlacıkları dağıtır, çekme onları sandalyeye yapıştırır; ikisi de ustanın gözlemine uyar.\nSık yapılan hata: Zıt yüklü cisimlerin birbirini ittiğini sanmak.\nCevap C."
},
{
  "id": "fen-el-302",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fırtına bulutlarında buz taneciklerinin ve su damlacıklarının birbirine sürtünmesi sonucu bulutun alt kısmında negatif yük birikir. Bulut yere dokunmadığı hâlde, bulutun altındaki yer yüzeyinde pozitif yük toplanır. Bulut ile yer yüzeyi arasındaki yük farkı belli bir değere ulaşınca gökyüzünde şimşek çakar ve gök gürler.\n**Buna göre bu olayla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Bulut sürtünmeyle, yer yüzeyi etkiyle yüklenmiştir; şimşekte elektronlar buluttan yere geçer.",
    "Bulut sürtünmeyle, yer yüzeyi etkiyle yüklenmiştir; şimşekte elektronlar yerden buluta geçer.",
    "Bulut etkiyle, yer yüzeyi sürtünmeyle yüklenmiştir; şimşekte elektronlar buluttan yere geçer.",
    "Bulut dokunmayla, yer yüzeyi etkiyle yüklenmiştir; şimşekte elektronlar yerden buluta geçer."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük yönünü ters kurma: elektronlar negatif yüklü bölgeden pozitif yüklü bölgeye, yani buluttan yere geçer.",
    "Elektriklenme çeşitlerini yer değiştirme: damlacıkların birbirine sürtünmesi sürtünmeyle, bulutun dokunmadan yer yüzeyini yüklemesi etkiyle elektriklenmedir.",
    "Sürtünmeyi dokunma sanma ve yönü ters kurma: bulutta yük, taneciklerin sürtünmesiyle oluşur; elektronlar da buluttan yere geçer."
  ],
  "aciklama": "Elektriklenme üç yolla olur: sürtünme (cisimler birbirine sürtülür), dokunma (yüklü cisim ile nötr cisim değer) ve etki (yüklü cisim dokunmadan yaklaşır).\nAdım 1: Buz taneciklerinin ve damlacıkların birbirine sürtünmesi sürtünmeyle elektriklenmedir; bulutun alt kısmı negatif yüklenir.\nAdım 2: Bulut yere değmez. Negatif yüklü bulut, yer yüzeyindeki elektronları iter; yüzeyde pozitif yük toplanır. Bu, etkiyle elektriklenmedir.\nAdım 3: Şimşekte elektronlar, negatif yüklü buluttan pozitif yüklü yere doğru geçer; bu geçiş ışık ve ses olarak gözlenir.\nSağlama: Elektronlar hareket ederken negatif yüklü bölgeden pozitif yüklü bölgeye gider.\nSık yapılan hata: Dokunmadan oluşan yük birikimini dokunmayla elektriklenme sanmak.\nCevap A."
},
{
  "id": "fen-el-303",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan iplerle asılı A, B ve C kürelerinden A'nın pozitif yüklü olduğu biliniyor. Küreler ikişer ikişer birbirine yaklaştırıldığında gözlemler tabloda verilmiştir. Öğrenciler B ve C kürelerinin yükleri için şu yargıları ileri sürüyor.\nI. C negatif yüklüdür.\nII. B pozitif yüklüdür.\nIII. C pozitif yüklü olamaz.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>A – B</td><td>Birbirini itiyor</td></tr><tr><td>B – C</td><td>Birbirini çekiyor</td></tr></table>",
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Çekmeyi zıt yük sanma: B ile C'nin çekişmesi C'nin negatif olduğunu kesinleştirmez, C nötr de olabilir. Üstelik II ve III doğrudur.",
    "Eksik değerlendirme: B'nin pozitif olduğu doğrudur; B pozitif olduğuna göre C'nin pozitif olamayacağını söyleyen III de doğrudur.",
    "Nötr ihtimalini unutma ve II'yi atlama: I kesin değildir, çünkü C nötr de olabilir; B pozitif olduğu için II doğrudur.",
    null
  ],
  "aciklama": "Aynı cins yükler iter, zıt cins yükler çeker. Yüklü bir cisim nötr bir cismi de çeker; bu yüzden çekme gözlemi karşıdaki cismin zıt yüklü olduğunu kesinleştirmez, itme gözlemi ise iki cismin de aynı cins yüklü olduğunu kesinleştirir.\nAdım 1: A pozitif, A ile B itiştiğine göre B de pozitif yüklüdür. II doğrudur.\nAdım 2: B pozitif, B ile C çekiştiğine göre C negatif ya da nötrdür. C pozitif olsaydı B ile itişirdi; yani C pozitif olamaz. III doğrudur.\nAdım 3: C negatif de olabilir, nötr de. Bu yüzden C'nin negatif olduğu kesin değildir. I kesinlikle doğru sayılamaz.\nSık yapılan hata: Çekilmeyi görünce karşıdaki cismin kesinlikle zıt yüklü olduğunu sanmak.\nCevap D."
},
{
  "id": "fen-el-304",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Zeynep, kuru bir tarağı saçına sürtüp küçük kâğıt parçalarına yaklaştırıyor; kâğıt parçaları tarağa doğru sıçrıyor. Parçalar tarağa değdikten kısa süre sonra bir kısmı tarağın üzerinden fırlayıp uzaklaşıyor.\n**Buna göre kâğıt parçalarının tarağa değdikten sonra uzaklaşmasının nedeni aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Kâğıt parçaları, tarağa değdikten sonra da nötr kaldıkları için yüklü tarak tarafından itilir.",
    "Kâğıt parçaları, tarağa değince tarakla aynı cins yük kazandıkları için tarak tarafından itilir.",
    "Kâğıt parçaları ile tarak arasında yük geçişi olmadığı için parçalar tarağa çarpıp sekerek uzaklaşır.",
    "Kâğıt parçaları, tarağın yükü havaya karıştığı için çekilmez ve tarağın üzerinden kayıp uzaklaşır."
  ],
  "dogru": 1,
  "hatalar": [
    "Nötr cisim itilir sanma: yüklü cisim nötr hafif cisimleri çeker, itmez. Parçalar tarağa değince yük aldığı için artık nötr değildir; itilmelerinin nedeni budur.",
    null,
    "Yük geçişini yok sayma: değme sırasında tarak kâğıda yük aktarır. Uzaklaşma mekanik bir sekme değil, aynı cins yüklerin birbirini itmesidir.",
    "Yükün kaybolduğunu sanma: tarağın yükü bir anda yok olmaz, değme sırasında kâğıt parçalarıyla paylaşılır. Yük kaybolsa parçalar itilmez, yalnızca çekilmeyi bırakırdı."
  ],
  "aciklama": "Dokunmayla elektriklenmede yüklü cisim, dokunduğu cisimle yükünü paylaşır ve iki cisim de aynı cins yüklü olur. Aynı cins yükler birbirini iter.\nAdım 1: Saça sürtülen tarak yüklenir. Nötr kâğıt parçaları yüklü tarak tarafından çekilir ve tarağa değer.\nAdım 2: Değme sırasında tarak yükünün bir kısmını kâğıda aktarır; kâğıt, tarakla aynı cins yüklenir.\nAdım 3: Artık tarak ve kâğıt aynı cins yüklü olduğundan birbirini iter; kâğıt parçaları fırlar.\nSağlama: Kâğıt değmeden önce çekilir, değdikten sonra itilir; bu, yük cinsinin değiştiğini gösterir.\nSık yapılan hata: Dokunmada cisimlerin zıt cins yükleneceğini sanmak.\nCevap B."
},
{
  "id": "fen-el-305",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen laboratuvarında plastik bir çubuk, yün bir kumaşa sürtülüyor. Sürtünmeden önce ikisi de nötrdür. Öğretmen, yünün elektron verme eğiliminin plastikten fazla olduğunu söylüyor. Sürtünmeden sonra çubuk ile kumaş birbirinden ayrılıyor. Öğrenciler sonuçlar için şu yargıları yazıyor.\nI. Pozitif yükler kumaştan çubuğa geçmiştir.\nII. Çubuk ve kumaş, zıt cins ve eşit miktarda yüklenmiştir.\nIII. Çubuk ve kumaş birbirini iter.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Pozitif yük hareketi sanma: yük aktarımında yalnızca elektronlar hareket eder, pozitif yükler yerinde kalır. Ayrıca II doğrudur.",
    null,
    "Zıt yüklerin etkisini ters yorumlama: zıt cins yüklenen çubuk ile kumaş birbirini çeker, itmez.",
    "Hareket eden yükü ve etkileşimi yanlış yorumlama: I yanlıştır çünkü elektronlar geçer; III yanlıştır çünkü zıt yükler çeker."
  ],
  "aciklama": "Sürtünmeyle elektriklenmede iki cisim zıt cins ve eşit miktarda yüklenir; yalnızca elektronlar bir cisimden ötekine geçer.\nAdım 1 (I): Yün elektron verme eğiliminde olduğuna göre elektronlar yünden plastiğe geçer. Pozitif yükler hareket etmez. I yanlıştır.\nAdım 2 (II): Yün elektron kaybettiği için pozitif, plastik elektron kazandığı için negatif olur; yük miktarları eşittir. II doğrudur.\nAdım 3 (III): Zıt cins yüklü iki cisim birbirini çeker. III yanlıştır.\nSağlama: Yün pozitif, plastik negatif; zıt oldukları için çekim beklenir.\nSık yapılan hata: Sürtünmede pozitif yüklerin de geçtiğini sanmak.\nCevap B."
},
{
  "id": "fen-el-306",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan saplarla tutulan özdeş K ve L metal kürelerinden K pozitif yüklü, L nötrdür. Öğrenci, K ile L'yi birbirine dokundurup ayırıyor. Ayırdıktan sonra iki kürenin de pozitif yüklü olduğu belirleniyor.\n**Bu işlem sırasındaki yük hareketiyle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 540 165\" role=\"img\" aria-label=\"K ve L kürelerinin dokunmadan önce, dokunurken ve ayrıldıktan sonraki durumu\"><circle cx=\"50\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">+</text><circle cx=\"130\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"246\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"246\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">+</text><circle cx=\"294\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"410\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"410\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">+</text><circle cx=\"490\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"490\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">+</text><text x=\"50\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K</text><text x=\"130\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L</text><text x=\"246\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K</text><text x=\"294\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L</text><text x=\"410\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K</text><text x=\"490\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L</text><text x=\"90\" y=\"150\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1. Başlangıç</text><text x=\"270\" y=\"150\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2. Dokunma</text><text x=\"450\" y=\"150\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3. Ayrılma sonrası</text></svg>",
  "secenekler": [
    "Yalnızca elektronlar hareket eder; L'den K'ye geçer.",
    "Yalnızca elektronlar hareket eder; K'den L'ye geçer.",
    "Yalnızca pozitif yükler hareket eder; K'den L'ye geçer.",
    "Pozitif ve negatif yükler karşılıklı olarak yer değiştirir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters kurma: K pozitif yüklü olduğundan elektron eksiğidir; elektronlar nötr L'den K'ye geçer ve L pozitif kalır.",
    "Pozitif yükü hareketli sanma: pozitif yükler çekirdekte durur, hareket eden elektronlardır.",
    "Karşılıklı geçiş sanma: yük alışverişinde yalnızca elektronlar, tek yönlü geçer."
  ],
  "aciklama": "Dokunmayla elektriklenmede yüklü cisim, dokunduğu cisimle yükünü paylaşır. Yük alışverişinde yalnızca negatif yükler, yani elektronlar hareket eder.\nAdım 1: K pozitif yüklüdür; elektron eksiği vardır. Elektronlar nötr L'den K'ye doğru geçer.\nAdım 2: L elektron kaybettiği için pozitif yüklenir. K'nin elektron eksiği azalır ama K pozitif kalır.\nAdım 3: Sonuçta iki küre de pozitiftir; bu, şekildeki son durumla uyuşur.\nSağlama: Pozitif yükler çekirdekte durur; elektriklenmede yer değiştirenler elektronlardır.\nSık yapılan hata: Pozitif yüklü cisimden nötr cisme pozitif yük geçtiğini sanmak.\nCevap A."
},
{
  "id": "fen-el-307",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan bir ayak üzerindeki nötr metal küreye, negatif yüklü bir çubuk şekildeki gibi dokunmadan yaklaştırılıyor. Öğrenciler yaklaştırma sırasında olanları şu yargılarla açıklıyor.\nI. Kürenin çubuğa yakın yüzü pozitif yüklenir.\nII. Küre, çubuğa elektron aktarır.\nIII. Küre, çubuk tarafından çekilir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 400 172\" role=\"img\" aria-label=\"Nötr metal küreye dokunmadan yaklaştırılan negatif yüklü çubuk\"><rect x=\"15\" y=\"52\" width=\"120\" height=\"36\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"78\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><text x=\"75\" y=\"78\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><text x=\"105\" y=\"78\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><text x=\"75\" y=\"112\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Negatif yüklü çubuk</text><circle cx=\"290\" cy=\"70\" r=\"44\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"290\" y1=\"114\" x2=\"290\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"262\" y1=\"136\" x2=\"318\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"290\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Nötr metal küre</text><line x1=\"140\" y1=\"70\" x2=\"240\" y2=\"70\" stroke=\"var(--vurgu)\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><text x=\"190\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">dokunma yok</text></svg>",
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Dokunmayı varsayma: çubuk küreye değmediği için küre ile çubuk arasında elektron geçişi olmaz. I ve III doğrudur.",
    "Eksik değerlendirme: III doğrudur ama yakın yüzde pozitif yük toplandığını söyleyen I de doğrudur.",
    "Etkide elektron aktarımı sanma: II yanlıştır; yükler yalnızca kürenin içinde yer değiştirir. Üstelik III de doğrudur.",
    null
  ],
  "aciklama": "Etkiyle elektriklenmede yüklü cisim, nötr bir iletkene dokunmadan yaklaştırılır; iletkenin içindeki yükler yer değiştirir. Yakın uç zıt cins, uzak uç aynı cins yüklü olur.\nAdım 1 (I): Negatif çubuk, küredeki elektronları kendinden uzağa iter. Çubuğa yakın yüz elektron kaybeder ve pozitif olur. I doğrudur.\nAdım 2 (II): Çubuk küreye değmiyor; elektron geçişi olmaz, yük yalnızca küre içinde yer değiştirir. II yanlıştır.\nAdım 3 (III): Çubuğa yakın yüz pozitif, uzak yüz negatiftir. Yakın ve zıt yüklü yüz daha etkili olduğundan küre çubuğa doğru çekilir. III doğrudur.\nSağlama: Kürenin toplam yükü hâlâ sıfırdır; yalnızca dağılım değişmiştir.\nSık yapılan hata: Yüklü cismi yaklaştırınca nötr cisme yük geçtiğini sanmak.\nCevap D."
},
{
  "id": "fen-el-308",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Mutfakta musluktan ince bir su akıntısı akarken, kuru bir tarak saça sürtülüp akıntıya dokunmadan yaklaştırılıyor ve akıntının tarağa doğru eğildiği görülüyor. Akıntı, tarak yaklaştırılmadan önce nötrdür.\n**Bu gözlemden aşağıdakilerden hangisi çıkarılır?**",
  "gorsel": null,
  "secenekler": [
    "Gözlem, tarağın yüklü olduğunu ve yükünün pozitif olduğunu gösterir.",
    "Gözlem, tarağın yüklü olduğunu ve yükünün negatif olduğunu gösterir.",
    "Gözlem, tarağın yüklü olduğunu ancak yük cinsinin belirlenemediğini gösterir.",
    "Gözlem, tarak ile akıntının aynı cins yüklü olduğunu gösterir."
  ],
  "dogru": 2,
  "hatalar": [
    "Tek yönlü çıkarım: yüklü bir cisim nötr cismi hangi cinste olursa olsun çeker; çekilme, yük cinsini göstermez.",
    "Tek yönlü çıkarım: yüklü bir cisim nötr cismi hangi cinste olursa olsun çeker; çekilme, yük cinsini göstermez.",
    null,
    "Çekmeyi aynı cins sanma: aynı cins yükler iter. Akıntı zaten nötrdür; çekilmesinin nedeni tarağın yüklü olmasıdır."
  ],
  "aciklama": "Yüklü bir cisim, pozitif de olsa negatif de olsa, nötr hafif cisimleri çeker. Bu yüzden çekilme, yalnızca yüklü bir cismin varlığını gösterir; yükün cinsini göstermez.\nAdım 1: Akıntı başlangıçta nötrdür. Nötr bir akıntı ancak yüklü bir cisim tarafından çekilebilir. Demek ki tarak yüklüdür.\nAdım 2: Tarak pozitif yüklü olsaydı, akıntıdaki yükler yer değiştirir ve akıntı yine çekilirdi. Negatif olsaydı da aynı sonuç alınırdı.\nAdım 3: Gözlem iki durumda da aynı olduğundan tarağın yük cinsi bu gözlemle belirlenemez.\nSağlama: Yük cinsini belirlemek için itme gözlemi gerekir; itme yalnızca aynı cins yüklerde görülür.\nSık yapılan hata: Çekilmeyi zıt cins yükün kanıtı saymak.\nCevap C."
},
{
  "id": "fen-el-309",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Eşit uzunlukta yalıtkan iplerle aynı noktadan asılan özdeş K ve L kürelerine bir miktar yük veriliyor. Küreler dengeye geldiğinde şekildeki gibi birbirinden uzakta, ipler düşeyle eşit α açısı yapacak biçimde duruyor. Öğrenciler şu yargıları ileri sürüyor.\nI. K ve L aynı cins yüklüdür.\nII. K ve L pozitif yüklüdür.\nIII. K'nin yükü, L'nin yükünden fazladır.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 360 225\" role=\"img\" aria-label=\"Aynı noktadan asılı K ve L kürelerinin birbirinden uzaklaşmış hâli\"><line x1=\"100\" y1=\"14\" x2=\"260\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"180\" y1=\"14\" x2=\"180\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"5 5\"/><line x1=\"180\" y1=\"14\" x2=\"105\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"180\" y1=\"14\" x2=\"255\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"105\" cy=\"178\" r=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"255\" cy=\"178\" r=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"105\" y=\"212\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K</text><text x=\"255\" y=\"212\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L</text><text x=\"160\" y=\"78\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\">α</text><text x=\"200\" y=\"78\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\">α</text></svg>",
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük cinsini kesin sanma: itme, kürelerin aynı cins yüklü olduğunu gösterir; ikisi de negatif olabilir, II kesin değildir.",
    "Hem yük cinsini hem miktarını kesin sanma: itme yalnızca aynı cinsi gösterir; eşit açılar yük miktarları hakkında da bilgi vermez.",
    "Veride olmayan bilgiyi doğru sayma: II ve III yük cinsi ile miktarı hakkında veriye dayanmayan çıkarımlardır."
  ],
  "aciklama": "Birbirini iten iki cisim aynı cins yüklüdür; ama bu, yükün pozitif mi negatif mi olduğunu söylemez. Yük miktarlarını karşılaştırmak için de yeterli veri yoktur.\nAdım 1 (I): Küreler birbirinden uzaklaşıyor, yani birbirini itiyor. İtme yalnızca aynı cins yükler arasında olur. I doğrudur.\nAdım 2 (II): Ortak cins pozitif de olabilir, negatif de. Şekil bunu belirlemez. II kesin değildir.\nAdım 3 (III): Küreler özdeş ve açılar eşittir; bu görünüm, yük miktarlarının farklı olup olmadığını göstermez. III kesin değildir.\nSık yapılan hata: İtmeyi görünce kürelerin pozitif yüklü olduğunu varsaymak.\nCevap A."
},
{
  "id": "fen-el-310",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir öğrenci yalıtkan X, Y ve Z cisimlerini ikişer ikişer birbirine sürtüyor ve sonuçları tabloya yazıyor. Sürtünmeden önce üç cisim de nötrdür. Öğrenci şimdi X ile Z'yi birbirine sürtecektir.\n**Buna göre bu sürtünmede cisimlerin yükleri nasıl olur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Deney</th><th>Sürtünen cisimler</th><th>Sonuç</th></tr><tr><td>1</td><td>X ve Y</td><td>X pozitif, Y negatif</td></tr><tr><td>2</td><td>Y ve Z</td><td>Y pozitif, Z negatif</td></tr></table>",
  "secenekler": [
    "X negatif, Z pozitif yüklenir.",
    "X ve Z aynı cins yüklenir.",
    "X pozitif yüklenir, Z nötr kalır.",
    "X pozitif, Z negatif yüklenir."
  ],
  "dogru": 3,
  "hatalar": [
    "Sıralamayı ters çevirme: X, Y'ye; Y de Z'ye elektron verdiğine göre elektron verme eğilimi X > Y > Z'dir. X, Z'ye elektron verir ve pozitif olur.",
    "Sürtünmede aynı cins oluştuğunu sanma: sürtünen iki cisim her zaman zıt cins yüklenir.",
    "Yarım sonuç: X elektron verdiyse bu elektronlar Z'ye geçmiştir; Z negatif olur, nötr kalmaz.",
    null
  ],
  "aciklama": "Sürtünen iki cisimden elektron verme eğilimi fazla olan pozitif, az olan negatif yüklenir. Cisimler zıt cins ve eşit miktarda yüklenir.\nAdım 1: 1. deneyde X pozitif olduğuna göre X elektron vermiştir; X, Y'den daha kolay elektron verir.\nAdım 2: 2. deneyde Y pozitif olduğuna göre Y de Z'den daha kolay elektron verir.\nAdım 3: Sıralama X > Y > Z olur. X ile Z sürtülünce elektron veren X pozitif, elektron alan Z negatif yüklenir.\nSağlama: X sıralamanın en başında, Z en sonundadır; X'in negatif olması bu sıralamaya ters düşer.\nSık yapılan hata: Ara cisim Y üzerinden sıralama kurmayı akıl edememek.\nCevap D."
},
{
  "id": "fen-el-311",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kış mevsiminde kuru bir havada Mert, yün bir kazağı başından çıkarırken karanlık odada küçük kıvılcımlar görüyor, hafif bir çıtırtı duyuyor ve saçlarının kazağa doğru çekildiğini fark ediyor. Mert bunu şu yargılarla açıklıyor.\nI. Kazak saça sürtünürken pozitif yükler saçtan kazağa geçmiştir.\nII. Kazak ve saç aynı cins yüklendiği için saçlar kazağa doğru çekilmiştir.\nIII. Kıvılcım, zıt yüklü iki cisim arasındaki yük geçişinin ışık ve ses olarak gözlenmesidir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Pozitif yük hareketi sanma: sürtünmede hareket eden elektronlardır, pozitif yükler geçmez. Üstelik III doğrudur.",
    "Aynı cins yükleri çekim sanma: saçların kazağa çekilmesi, saç ile kazağın zıt cins yüklendiğini gösterir; aynı cins olsalar birbirini iterlerdi.",
    null,
    "II'yi doğru sanma: aynı cins yükler iter, çekmez. Saçların kazağa çekilmesi zıt yüklenmeyi gösterir."
  ],
  "aciklama": "Sürtünmeyle elektriklenmede iki cisim zıt cins yüklenir. Zıt yüklü cisimler arasında yük geçişi olduğunda kıvılcım görülür ve çıtırtı duyulur.\nAdım 1 (I): Sürtünmede hareket eden yükler elektronlardır; pozitif yükler geçmez. I yanlıştır.\nAdım 2 (II): Saçlar kazağa doğru çekildiğine göre saç ve kazak zıt cins yüklenmiştir. Aynı cins olsalar saçlar kazaktan uzaklaşırdı. II yanlıştır.\nAdım 3 (III): Zıt yüklü cisimler arasında elektronlar atlayarak geçerse ışık ve ses oluşur; kıvılcım ve çıtırtı budur. III doğrudur.\nSağlama: Çekim ve kıvılcım, ikisi de zıt yüklenmeyle uyumludur.\nSık yapılan hata: Saçın kazağa çekilmesini aynı cins yükle açıklamak.\nCevap C."
},
{
  "id": "fen-el-312",
  "kazanim": "F.8.7.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir fotokopi makinesinde silindirin yüzeyi önce pozitif yüklenir. Işık, silindirin yalnızca belgedeki boş (beyaz) kısımlara karşılık gelen bölgelerindeki yükü ortadan kaldırır; yazılı kısımlara karşılık gelen bölgeler pozitif yüklü kalır. Toner tozu, bu yüklü bölgelere yapışır; sonra kâğıda aktarılıp ısıyla sabitlenir.\n**Buna göre toner parçacıklarının silindirin yüklü bölgelerine yapışabilmesi için aşağıdakilerden hangisi gereklidir?**",
  "gorsel": null,
  "secenekler": [
    "Toner parçacıkları pozitif yüklü olmalıdır; çünkü aynı cins yükler birbirini çeker.",
    "Toner parçacıkları negatif yüklü olmalıdır; çünkü zıt cins yükler birbirini çeker.",
    "Toner parçacıkları pozitif yüklü olmalıdır; çünkü zıt cins yükler birbirini çeker.",
    "Toner parçacıkları negatif yüklü olmalıdır; çünkü aynı cins yükler birbirini çeker."
  ],
  "dogru": 1,
  "hatalar": [
    "Çekim kuralını ters bilme: aynı cins yükler iter, çekmez. Pozitif toner, pozitif bölgeden itilirdi.",
    null,
    "Kuralı bilip uygulamayı yanlış yapma: yüklü bölgeler pozitif olduğuna göre zıt yüklü, yani negatif toner çekilir; pozitif toner itilirdi.",
    "Doğru işareti yanlış gerekçeyle seçme: toner negatif olmalıdır ama bunun nedeni zıt cinslerin çekmesidir, aynı cinslerin değil."
  ],
  "aciklama": "Fotokopi makinesi gibi elektrostatik cihazlar, zıt cins yüklerin birbirini çekmesinden yararlanır. Aynı cins yükler ise birbirini iter.\nAdım 1: Silindirin yüklü bölgeleri pozitiftir.\nAdım 2: Toner tozunun bu bölgelere yapışması için çekilmesi gerekir. Çekim, zıt cins yükler arasında olur.\nAdım 3: Bu durumda toner parçacıkları negatif yüklü olmalıdır. Pozitif olsalar yüklü bölgeden itilirlerdi.\nSağlama: Negatif toner pozitif bölgeye çekilir; ışık alan bölgelerde yük kalmadığından toner oralara yapışmaz.\nSık yapılan hata: Çekim ve itme kuralını karıştırmak.\nCevap B."
},
{
  "id": "fen-el-313",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan iplerle asılı özdeş K ve L metal kürelerinin ikisi de nötrdür. K küresine negatif yüklü bir çubuk dokundurulup uzaklaştırılıyor. Sonra K küresi, L küresine yaklaştırılıyor ve kürelerin birbirine etkisi gözleniyor (1. gözlem). Ardından K ile L birbirine dokundurulup ayrılıyor ve yeniden yaklaştırılarak gözlem yapılıyor (2. gözlem).\n**Buna göre gözlemler aşağıdakilerden hangisinde doğru verilmiştir?**",
  "gorsel": null,
  "secenekler": [
    "1. gözlemde birbirini iter, 2. gözlemde birbirini çeker.",
    "1. gözlemde birbirini iter, 2. gözlemde birbirini iter.",
    "1. gözlemde birbirini çeker, 2. gözlemde birbirini iter.",
    "1. gözlemde birbirini çeker, 2. gözlemde birbirini çeker."
  ],
  "dogru": 2,
  "hatalar": [
    "Etkiyi ve dokunmayı ters yorumlama: nötr L küresi negatif K tarafından çekilir; dokunmadan sonra ikisi aynı cins yüklü olduğundan iter.",
    "Nötr cismi yüklü sanma: 1. gözlemde L henüz nötrdür; negatif K onu çeker, itmez.",
    null,
    "Dokunma sonrasını eski durum sanma: K ile L dokunduktan sonra yük paylaşılır ve ikisi de negatif olur; aynı cins yükler iter."
  ],
  "aciklama": "Dokunmayla elektriklenmede yüklü cisim, dokunduğu cisimle yükünü paylaşır ve ikisi aynı cins yüklü olur. Yüklü bir cisim nötr bir cismi çeker.\nAdım 1: Negatif çubuk K'ye değince K negatif yüklenir. Sonra K, nötr L'ye yaklaştırılınca L'deki yükler yer değiştirir ve L, K tarafından çekilir. 1. gözlem: çekme.\nAdım 2: K ile L birbirine dokununca K yükünü L ile paylaşır; ikisi de negatif olur.\nAdım 3: İki negatif küre yeniden yaklaştırılınca aynı cins yükler birbirini iter. 2. gözlem: itme.\nSağlama: Gözlemlerin sırası çekme, sonra itme; yük durumu nötr + negatiften negatif + negatife geçmiştir.\nSık yapılan hata: Dokunmadan sonra da çekimin süreceğini sanmak.\nCevap C."
},
{
  "id": "fen-el-314",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir öğrenci, K ve L cisimleriyle dört ayrı deney yapıp sonuçları tabloya yazıyor. Dokunma deneylerinde K ve L özdeş metal kürelerdir. Öğrenci, deneylerden birinin sonucunu yanlış yazdığını fark ediyor.\n**Buna göre hangi deneyin sonucu yanlış yazılmıştır?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Deney</th><th>Başlangıç (K, L)</th><th>Yöntem</th><th>Sonuç (K, L)</th></tr><tr><td>1. deney</td><td>K pozitif, L nötr</td><td>Dokunma</td><td>K pozitif, L negatif</td></tr><tr><td>2. deney</td><td>K nötr, L nötr</td><td>Sürtünme</td><td>K pozitif, L negatif</td></tr><tr><td>3. deney</td><td>K negatif, L nötr</td><td>Dokunma</td><td>K negatif, L negatif</td></tr><tr><td>4. deney</td><td>K nötr, L nötr</td><td>Sürtünme</td><td>K negatif, L pozitif</td></tr></table>",
  "secenekler": [
    "1. deney",
    "2. deney",
    "3. deney",
    "4. deney"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sürtünmeyi hatalı sanma: sürtünmede cisimler zıt cins yüklenir; 2. deney doğrudur. Hatalı olan, dokunma deneyidir.",
    "Dokunmayı hatalı sanma: dokunmada yüklü cisim ile nötr cisim aynı cins yüklenir; 3. deney doğrudur.",
    "Sürtünmeyi hatalı sanma: sürtünmede cisimler zıt cins yüklenir; 4. deney doğrudur. Hatalı olan, dokunma deneyidir."
  ],
  "aciklama": "Sürtünmede cisimler zıt cins yüklenir; dokunmada ise yük paylaşıldığı için yüklü cisim ile dokunduğu cisim aynı cins yüklenir.\nAdım 1: 2. ve 4. deneyler sürtünmedir; sonuçlarda K ile L zıt cins yüklüdür. Bu doğrudur.\nAdım 2: 3. deney dokunmadır; K negatif, L nötr iken sonunda ikisi de negatif olmuş. Aynı cins yüklenme beklenir; doğrudur.\nAdım 3: 1. deney dokunmadır; K pozitif iken L'nin de pozitif olması gerekir ama tabloda negatif yazılmış. Yanlış olan budur.\nSağlama: 1. deneyde K pozitif olduğundan elektronlar L'den K'ye geçer ve L de pozitif olur.\nSık yapılan hata: Dokunmada da zıt cins yüklenme olacağını sanmak.\nCevap A."
},
{
  "id": "fen-el-315",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen kulübü öğrencileri, yalıtkan ipe asılı ve yük durumu bilinmeyen bir K küresinin negatif yüklü olup olmadığını araştırıyor. Ellerinde negatif yüklü bir çubuk, pozitif yüklü bir çubuk ve nötr kâğıt parçaları var.\n**Aşağıdaki gözlemlerden hangisi tek başına K'nin negatif yüklü olduğunu kesin olarak gösterir?**",
  "gorsel": null,
  "secenekler": [
    "Negatif yüklü çubuk K'yi çekiyor.",
    "Pozitif yüklü çubuk K'yi çekiyor.",
    "K, nötr kâğıt parçalarını çekiyor.",
    "Negatif yüklü çubuk K'yi itiyor."
  ],
  "dogru": 3,
  "hatalar": [
    "Çekmeyi zıt yük sanma: negatif çubuk K'yi çekiyorsa K pozitif ya da nötr olabilir; negatif olamaz.",
    "Çekmeyi kesin kanıt sanma: pozitif çubuk K'yi çekiyorsa K negatif de olabilir, nötr de.",
    "Yük varlığını yük cinsiyle karıştırma: bu gözlem K'nin yüklü olduğunu gösterir ama pozitif mi negatif mi olduğunu göstermez.",
    null
  ],
  "aciklama": "İtme, yalnızca aynı cins yükler arasında görülür. Çekme ise zıt cins yükler arasında olduğu gibi yüklü ile nötr cisim arasında da görülür. Bu yüzden yük cinsini kesin olarak itme gözlemi belirler.\nAdım 1: Negatif çubuğun K'yi çekmesi, K'nin pozitif ya da nötr olduğunu gösterir; negatif olduğunu göstermez.\nAdım 2: Pozitif çubuğun K'yi çekmesi, K'nin negatif ya da nötr olabileceğini gösterir; kesin değildir.\nAdım 3: K'nin kâğıt parçalarını çekmesi yalnızca K'nin yüklü olduğunu gösterir. Cinsi belli değildir.\nAdım 4: Negatif çubuğun K'yi itmesi için K'nin de negatif yüklü olması gerekir. Kesin kanıt budur.\nSık yapılan hata: Çekmeyi, karşıdaki cismin kesinlikle zıt yüklü olduğu diye yorumlamak.\nCevap D."
},
{
  "id": "fen-el-316",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan bir cam çubuk ipek kumaşa sürtülüyor; cam çubuk pozitif, ipek kumaş negatif yükleniyor. Sonra aynı cam çubuk, yalıtkan ayaklar üzerindeki nötr ve özdeş K ile L metal kürelerine sırayla dokundurulup çekiliyor. Her dokunmada çubuk yükünün yalnızca bir kısmını veriyor ve iki dokunmadan sonra da pozitif yüklü kalıyor. Öğrenci daha sonra K ile L'yi birbirine, K'yi de ipek kumaşa yaklaştırıp gözlem yapacaktır. Öğrencinin gözlemleri için şu yargılar ileri sürülüyor.\nI. K ve L pozitif yüklüdür.\nII. K ile L birbirini iter.\nIII. K küresi ipek kumaşı iter.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "II ve III",
    "I ve II"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur ama iki pozitif yüklü kürenin birbirini ittiğini söyleyen II de doğrudur.",
    "Eksik değerlendirme: II doğrudur ama kürelerin pozitif yüklendiğini söyleyen I de doğrudur.",
    "III'ü doğru sanma: pozitif K, negatif ipek kumaşı çeker, itmez. Ayrıca kürelerin pozitif yüklendiğini söyleyen I de doğrudur.",
    null
  ],
  "aciklama": "Ardışık elektriklenmelerde her aşamanın yük durumu sırayla yazılır. Sürtünmede cisimler zıt yüklenir; dokunmada yüklü cisim ile dokunulan cisim aynı cins yüklenir.\nAdım 1: Sürtünme sonunda cam çubuk pozitif, ipek kumaş negatiftir.\nAdım 2: Pozitif çubuk K'ye dokununca elektronlar K'den çubuğa geçer; K pozitif yüklenir. Çubuk yine pozitif kaldığından L'ye dokununca L de pozitif yüklenir. I doğrudur.\nAdım 3: K ve L aynı cins, yani pozitif yüklüdür; yük miktarları farklı olsa bile aynı cins yükler birbirini iter. II doğrudur.\nAdım 4: Pozitif K ile negatif ipek kumaş zıt cinstir; birbirini çeker. K ipek kumaşı itmez. III yanlıştır.\nSağlama: Yük tablosu çubuk (+), K (+), L (+), ipek kumaş (−) olur; aynı işaretliler iter, farklı işaretliler çeker.\nSık yapılan hata: Pozitif yüklü cismin negatif yüklü cismi ittiğini sanmak.\nCevap D."
},
{
  "id": "fen-el-317",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan saplı özdeş K, L ve M metal kürelerinden K negatif yüklü, L ve M nötrdür. Öğrenci önce K ile L'yi birbirine dokundurup ayırıyor; sonra L ile M'yi birbirine dokundurup ayırıyor. İşlemler bittiğinde üç küre birbirinden uzaktadır.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "K ile M zıt cins yüklüdür.",
    "Bütün küreler aynı cins yüklüdür.",
    "M nötr kalmıştır, çünkü K ile hiç dokunmamıştır.",
    "L pozitif yüklüdür, çünkü M'ye elektron vermiştir."
  ],
  "dogru": 1,
  "hatalar": [
    "Dokunmada zıt cins sanma: dokunmayla L, K'nin yükünü paylaşır; M de L'nin yükünü paylaşır. Üç küre de aynı cins yüklenir.",
    null,
    "Zincirleme aktarımı görmeme: K ile M dokunmasa da L, K'den yük almış; M de L'den yük alarak negatif yüklenmiştir.",
    "Elektron vermeyi pozitif olma sanma: L, K'den aldığı elektronların yalnızca bir kısmını M'ye verdi; hâlâ elektron fazlası vardır ve negatiftir."
  ],
  "aciklama": "Dokunmayla elektriklenmede yük paylaşılır; yüklü cisim, dokunduğu cisimle aynı cins yüklenir. Bu paylaşım zincir hâlinde sürebilir.\nAdım 1: K negatif, L nötr. K ile L dokununca elektronların bir kısmı L'ye geçer; K ve L negatif olur.\nAdım 2: Negatif L, nötr M ile dokununca L yükünün bir kısmını M'ye verir; L ve M negatif olur.\nAdım 3: L, M'ye elektronların yalnızca bir kısmını verdiği için hâlâ elektron fazlası vardır; negatiftir. K da negatif kalmıştır.\nSağlama: Üç küre de negatiftir; hiçbiri pozitif ya da nötr değildir, birbirlerini iterler.\nSık yapılan hata: Elektron veren cismin pozitif olduğunu sanmak.\nCevap B."
},
{
  "id": "fen-el-318",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı K, L ve M kürelerinin yükleri araştırılıyor. Önce pozitif yüklü bir çubuk K'ye yaklaştırılıyor ve K'nin çubuk tarafından itildiği görülüyor. Sonra küreler ikişer ikişer yaklaştırılıyor ve gözlemler tabloya yazılıyor. Öğrenciler şu yargıları ileri sürüyor.\nI. M negatif yüklüdür.\nII. L pozitif yüklüdür.\nIII. K ile M zıt cins yüklüdür.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>K – L</td><td>Birbirini itiyor</td></tr><tr><td>L – M</td><td>Birbirini çekiyor</td></tr><tr><td>K – M</td><td>Birbirini çekiyor</td></tr></table>",
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  "dogru": 1,
  "hatalar": [
    "Çekmeyi zıt yük sanma: M, L ve K tarafından çekiliyor; M negatif olabilir ama nötr de olabilir. I kesin değildir; II ise doğrudur.",
    null,
    "Çekmeyi zıt yük sanma: K pozitif olduğuna göre M, K tarafından çekiliyorsa negatif ya da nötrdür; zıt yüklü olması kesin değildir. II doğrudur.",
    "I'i de doğru sanma: M'nin çekilmesi negatif olduğunu kanıtlamaz, M nötr de olabilir."
  ],
  "aciklama": "İtme, aynı cins yüklerin işaretidir; çekme ise zıt cins yükler arasında olduğu gibi yüklü ile nötr cisim arasında da görülür.\nAdım 1: Pozitif çubuk K'yi ittiğine göre K pozitif yüklüdür.\nAdım 2: K ile L itiştiğine göre L de K gibi pozitif yüklüdür. II doğrudur.\nAdım 3: M, pozitif yüklü L ve K tarafından çekiliyor; M negatif ya da nötr olabilir. M'nin negatif olduğu (I) ve K ile zıt cins yüklü olduğu (III) kesin değildir.\nSağlama: M nötr olsaydı pozitif K ve L onu yine çekerdi; tablo bu durumda da aynı çıkar.\nSık yapılan hata: Çekmeyi, karşıdaki cismin zıt yüklü olduğunun kanıtı saymak.\nCevap B."
},
{
  "id": "fen-el-319",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan ayaklar üzerinde birbirine değen özdeş ve nötr K ile L metal küreleri vardır. Negatif yüklü bir çubuk, K küresine dokunmadan yaklaştırılıyor. Çubuk yerindeyken küreler birbirinden ayrılıyor, sonra çubuk uzaklaştırılıyor. Aşamalar şekilde gösterilmiştir.\n**Buna göre son durumda K ve L küreleri için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 600 165\" role=\"img\" aria-label=\"Birbirine değen K ve L küreleri, çubuk yaklaştırıldıktan sonra ayrılıyor ve çubuk uzaklaştırılıyor\"><rect x=\"6\" y=\"57\" width=\"76\" height=\"26\" rx=\"5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"28\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><text x=\"52\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><circle cx=\"108\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"156\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"206\" y=\"57\" width=\"76\" height=\"26\" rx=\"5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"228\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><text x=\"252\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><circle cx=\"300\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"364\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"470\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"470\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">?</text><circle cx=\"534\" cy=\"70\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"534\" y=\"77\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">?</text><text x=\"108\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K</text><text x=\"156\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L</text><text x=\"300\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K</text><text x=\"364\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L</text><text x=\"470\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K</text><text x=\"534\" y=\"118\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L</text><text x=\"95\" y=\"150\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1. Çubuk yaklaştırılıyor</text><text x=\"295\" y=\"150\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2. Çubuk yerindeyken ayrılıyor</text><text x=\"495\" y=\"150\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3. Çubuk uzaklaştırılıyor</text></svg>",
  "secenekler": [
    "K negatif, L pozitif yüklüdür; küreler birbirini çeker.",
    "K ve L nötrdür; küreler birbirini etkilemez.",
    "K ve L negatif yüklüdür; küreler birbirini iter.",
    "K pozitif, L negatif yüklüdür; küreler birbirini çeker."
  ],
  "dogru": 3,
  "hatalar": [
    "Yükleri ters yerleştirme: negatif çubuk elektronları kendinden uzağa iter; çubuğa yakın K elektron kaybeder ve pozitif, L ise negatif olur.",
    "Etkiyi geçici sanma: küreler çubuk yerindeyken ayrıldığı için zıt yükler kürelerde kalır; çubuk gidince geri dönemez.",
    "Dokunmayla karıştırma: çubuk küreye değmedi, dışarıdan yük gelmedi. Toplam yük sıfır olduğundan kürelerden biri pozitif olmalıdır.",
    null
  ],
  "aciklama": "Etkiyle elektriklenmede yüklü cisim yaklaşınca iletkendeki yükler yer değiştirir. İletken, yüklü cisim yerindeyken ikiye ayrılırsa zıt yükler iki parçada kalır.\nAdım 1: Negatif çubuk K'ye yaklaşınca K ile L'nin oluşturduğu iletkende elektronlar çubuktan uzağa, yani L'ye doğru itilir.\nAdım 2: K elektron kaybeder ve pozitif, L elektron kazanır ve negatif olur.\nAdım 3: Çubuk yerindeyken küreler ayrıldığı için bu yükler kürelerde kalır; çubuk uzaklaştırıldıktan sonra K pozitif, L negatiftir.\nAdım 4: Zıt cins yüklü küreler birbirini çeker.\nSağlama: İki kürenin toplam yükü yine sıfırdır; çubuk yük vermedi, yalnızca yerlerini değiştirdi.\nSık yapılan hata: Çubuğun küreye yük verdiğini sanmak.\nCevap D."
},
{
  "id": "fen-el-320",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Fen kulübü öğrencileri, aynı pozitif yüklü çubukla iki etkinlik yapıyor. Her etkinlikte yalıtkan ayaklı, nötr ve özdeş birer metal küre kullanılıyor. 1. etkinlikte çubuk, K küresine dokundurulup çekiliyor. 2. etkinlikte çubuk, L küresine dokundurulmadan yaklaştırılıyor ve sonra uzaklaştırılıyor. Öğrenciler şu yargıları ileri sürüyor.\nI. 1. etkinlikte elektronlar K küresinden çubuğa geçer.\nII. 2. etkinlikte çubuk yakınken L küresinin çubuğa yakın yüzü negatif yüklenir.\nIII. 2. etkinliğin sonunda L küresi pozitif yüklü kalır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: II doğrudur ama dokunma sırasında elektronların K'den çubuğa geçtiğini söyleyen I de doğrudur.",
    "Etkiyi kalıcı sanma: çubuk uzaklaştırılınca L'nin yükleri eski dağılımına döner ve L nötr olur; III yanlıştır.",
    null,
    "Etkiyi dokunmayla karıştırma: L'ye dokunulmadığı için kalıcı yük geçişi olmaz; III yanlıştır, II ise doğrudur."
  ],
  "aciklama": "Dokunmada yük aktarımı olur ve kalıcıdır. Etkide yük aktarımı olmaz; yaklaştırma bitince yükler eski dağılımına döner.\nAdım 1 (I): Pozitif çubuk elektron eksiğidir. K'ye dokununca elektronlar K'den çubuğa geçer ve K pozitif yüklenir. I doğrudur.\nAdım 2 (II): Pozitif çubuk, L'deki elektronları kendine çeker. Çubuğa yakın yüz negatif, uzak yüz pozitif olur. II doğrudur.\nAdım 3 (III): Çubuk uzaklaştırılınca L'nin yükleri yeniden dağılır; çubuk L'ye değmediği için L'ye yük aktarılmamıştır. L nötr olur. III yanlıştır.\nSağlama: 1. etkinlikte K'nin pozitif yükü kalır; 2. etkinlikte L'nin yükü kalmaz.\nSık yapılan hata: Etkiyle yüklenen iletkenin kalıcı yük kazandığını sanmak.\nCevap C."
},
{
  "id": "fen-el-321",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir öğrenci, yalıtkan K, L, M ve N cisimlerini ikişer ikişer birbirine sürtüp yüklerini tabloya yazıyor. Sürtünmeden önce bütün cisimler nötrdür. Öğrenci, sonuçlardan cisimlerin elektron verme eğilimleri arasında bir sıralama olduğunu fark ediyor.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Deney</th><th>Sürtünen cisimler</th><th>Sonuç</th></tr><tr><td>1</td><td>K ve L</td><td>K pozitif, L negatif</td></tr><tr><td>2</td><td>L ve M</td><td>L pozitif, M negatif</td></tr><tr><td>3</td><td>M ve N</td><td>M pozitif, N negatif</td></tr></table>",
  "secenekler": [
    "L ile N sürtünürse L pozitif, N negatif yüklenir.",
    "K ile M sürtünürse K negatif, M pozitif yüklenir.",
    "N ile K sürtünürse N pozitif, K negatif yüklenir.",
    "M ile L sürtünürse M pozitif, L negatif yüklenir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sıralamayı ters çevirme: K, L'ye; L de M'ye elektron verdiğine göre K, M'ye de elektron verir. K pozitif, M negatif yüklenir.",
    "Sıralamanın başını ve sonunu karıştırma: N, sıralamada en az elektron veren cisimdir; K ile sürtününce N elektron alır ve negatif olur.",
    "Deneyi yanlış okuma: 2. deneyde L pozitif, M negatiftir; M ile L yeniden sürtünürse yine M negatif, L pozitif olur."
  ],
  "aciklama": "Sürtünen iki cisimden elektron verme eğilimi fazla olan pozitif, az olan negatif yüklenir. Birkaç deneyin sonucu birleştirilerek cisimler elektron verme eğilimine göre sıralanabilir.\nAdım 1: 1. deneyde K pozitif; yani K, L'den daha kolay elektron verir: K > L.\nAdım 2: 2. deneyde L pozitif; L > M. 3. deneyde M pozitif; M > N.\nAdım 3: Sıralama K > L > M > N olur. Bu sıralamada daha öndeki cisim pozitif, daha arkadaki cisim negatif yüklenir.\nAdım 4: L ile N sürtünürse L daha öndedir; L pozitif, N negatif yüklenir. Diğer seçenekler sıralamaya ters düşer.\nSağlama: Sıralamada ardışık olmayan cisimler de aynı kurala uyar (K > M, L > N, K > N).\nSık yapılan hata: Yalnızca doğrudan sürtülen cisim çiftleri için karar vermek, ara cisimleri kullanmamak.\nCevap A."
},
{
  "id": "fen-el-322",
  "kazanim": "F.8.7.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı A, B ve C kürelerinden hangilerinin yüklü olduğu araştırılıyor. Küreler ikişer ikişer birbirine yaklaştırılıyor ve gözlemler tabloya yazılıyor.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>A – B</td><td>Birbirini çekiyor</td></tr><tr><td>B – C</td><td>Birbirini çekiyor</td></tr><tr><td>A – C</td><td>Birbirini itiyor</td></tr></table>",
  "secenekler": [
    "B, A ve C'den zıt cins yüklüdür.",
    "A ile C aynı cins yüklüdür.",
    "A ile C zıt cins yüklüdür.",
    "B nötrdür."
  ],
  "dogru": 1,
  "hatalar": [
    "Nötr ihtimalini unutma: çekilme yüklü ile nötr cisim arasında da olur. B nötr de olabilir.",
    null,
    "İtmeyi yok sayma: A ile C birbirini ittiğine göre ikisi aynı cins yüklüdür; zıt cins olsalar çekişirlerdi.",
    "Bir ihtimali kesin sanma: B nötr olabilir ama A ve C'den zıt cins yüklü de olabilir; ikisi de tabloyla uyumludur."
  ],
  "aciklama": "İtme yalnızca aynı cins yükler arasında görülür; çekme ise zıt cins yükler arasında olduğu gibi yüklü ile nötr cisim arasında da görülür.\nAdım 1: A ile C birbirini ittiğine göre ikisi de yüklüdür ve aynı cinstendir.\nAdım 2: B ise hem A'yı hem C'yi çekiyor. B, onlara zıt cins yüklü olabilir; B nötr de olabilir. İki durum da tabloyla uyuşur.\nAdım 3: Bu yüzden B hakkında kesin bir şey söylenemez; kesin olan tek çıkarım A ile C'nin aynı cins yüklü olmasıdır.\nSağlama: B nötr olsaydı, yüklü A ve C onu yine çekerdi; tablo değişmezdi.\nSık yapılan hata: Çekilmeyi zıt yükün kanıtı saymak ve B'yi kesin yüklü varsaymak.\nCevap B."
},
{
  "id": "fen-el-323",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Plastik bir tarak kuru saça sürtülüyor; tarak negatif, saç pozitif yükleniyor. Sonra tarak, yalıtkan saplı nötr bir metal K küresine dokundurulup uzaklaştırılıyor. Daha sonra K küresi, saç demetine yaklaştırılıyor. Öğrenciler şu yargıları ileri sürüyor.\nI. Sürtünme sırasında elektronlar taraktan saça geçmiştir.\nII. K küresi, dokunmadan sonra negatif yüklenmiştir.\nIII. K küresi saç demetine yaklaştırılınca saç tarafından çekilir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönü ters kurma: tarak negatif yüklendiğine göre elektronlar saçtan tarağa geçmiştir; I yanlıştır. II ve III doğrudur.",
    "Eksik değerlendirme: III doğrudur ama K'nin tarakla aynı cins, yani negatif yüklendiğini söyleyen II de doğrudur.",
    null,
    "Yönü ters kurma: tarak negatif olduğu için elektronlar saçtan tarağa geçmiştir. I yanlıştır."
  ],
  "aciklama": "Sürtünmede elektron kazanan cisim negatif, kaybeden cisim pozitif yüklenir. Dokunmada ise yüklü cisim ile dokunulan cisim aynı cins yüklenir.\nAdım 1 (I): Tarak negatif olduğuna göre elektron kazanmıştır; elektronlar saçtan tarağa geçmiştir. I yanlıştır.\nAdım 2 (II): Negatif tarak nötr K'ye dokununca yükünü K ile paylaşır; K de negatif yüklenir. II doğrudur.\nAdım 3 (III): Saç pozitif, K negatiftir; zıt cins yüklü olduklarından K, saç tarafından çekilir. III doğrudur.\nSağlama: Tarak (−), saç (+), K (−): K ile tarak aynı, K ile saç zıt cinstendir.\nSık yapılan hata: Negatif yüklenen cismin elektron verdiğini sanmak.\nCevap C."
},
{
  "id": "fen-el-324",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan ayaklar üzerinde birbirine değen özdeş K ve L metal küreleri nötrdür. Pozitif yüklü bir çubuk K'ye dokunmadan yaklaştırılıyor. Çubuk yerindeyken K ile L birbirinden ayrılıyor ve çubuk uzaklaştırılıyor. Daha sonra K küresi, yalıtkan ayaklı nötr özdeş bir M küresine dokundurulup ayrılıyor. İşlemler bitince üç küre birbirinden uzaktadır.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "L ile M birbirini iter.",
    "K ile M birbirini çeker.",
    "K ile L birbirini iter.",
    "L ile M birbirini çeker."
  ],
  "dogru": 3,
  "hatalar": [
    "Yük işaretlerini ters yerleştirme: pozitif çubuk elektronları K'ye çeker, K negatif olur; L pozitiftir. M, K ile paylaşım yaptığından negatif yüklüdür; L ile M zıt cinstir ve birbirini çeker.",
    "Dokunmayı çekim sanma: K ile M dokunmadan sonra aynı cins, yani negatif yüklüdür; aynı cins yükler birbirini iter.",
    "Zıt yükleri aynı cins sanma: K ve L etkiyle zıt cins yüklenmiştir; zıt cins yükler birbirini çeker.",
    null
  ],
  "aciklama": "Önce etkiyle elektriklenme, sonra dokunmayla elektriklenme olur. Her aşamanın sonunda yük işaretleri yazılırsa sonuç kolay bulunur.\nAdım 1: Pozitif çubuk, K ile L'nin oluşturduğu iletkendeki elektronları kendine doğru çeker. Elektronlar K tarafında toplanır; K negatif, L pozitif olur.\nAdım 2: Çubuk yerindeyken küreler ayrıldığından bu yükler kürelerde kalır: K (−), L (+).\nAdım 3: K, nötr M ile dokununca yükünü paylaşır; M de negatif olur. L ise bu işleme katılmaz ve pozitif kalır.\nAdım 4: Son durum: K (−), L (+), M (−). Zıt cins yüklü olan L ile M birbirini çeker.\nSağlama: K ile M aynı cins olduğundan birbirini iter; K ile L zıt cins olduğundan çeker. Bu iki durum yanlış seçeneklerdir.\nSık yapılan hata: Dokunma yapan K'nin pozitif kaldığını sanmak.\nCevap D."
},
{
  "id": "fen-el-325",
  "kazanim": "F.8.7.1.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iple asılı K küresi negatif yüklüdür. Yalıtkan saplı nötr bir metal levha, K'ye dokundurulmadan yaklaştırılıyor ve K küresinin şekildeki gibi levhaya doğru saptığı görülüyor. Öğrenciler levhanın durumu için şu yargıları ileri sürüyor.\nI. Levhanın K'ye bakan yüzeyi negatif yüklenmiştir.\nII. Levha, net olarak pozitif yüklü hâle gelmiştir.\nIII. Levhanın K'den uzak yüzeyinde negatif yük bulunur.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 440 200\" role=\"img\" aria-label=\"Negatif yüklü asılı K küresi, nötr metal levhaya doğru sapmış\"><line x1=\"50\" y1=\"10\" x2=\"150\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"70\" y1=\"10\" x2=\"70\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"5 5\"/><line x1=\"70\" y1=\"10\" x2=\"118\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"125\" cy=\"148\" r=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"125\" y=\"155\" text-anchor=\"middle\" font-size=\"22\" fill=\"currentColor\">−</text><text x=\"125\" y=\"186\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K</text><rect x=\"215\" y=\"40\" width=\"26\" height=\"130\" rx=\"3\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"228\" y1=\"170\" x2=\"228\" y2=\"188\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"200\" y1=\"188\" x2=\"256\" y2=\"188\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"262\" y=\"112\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\">Nötr metal levha</text></svg>",
  "secenekler": [
    "Yalnız III",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük dağılımını ters kurma: negatif K, levhadaki elektronları kendinden uzağa iter; bakan yüzey pozitif olur. Ayrıca levhanın toplam yükü değişmez.",
    "I'i doğru sanma: K'ye bakan yüzeyde elektronlar azalır, yüzey pozitif olur. I yanlıştır.",
    "Dağılımı toplam yük sanma: levha K'ye değmediği için toplam yükü sıfırdır; bir yüzeyin pozitif olması levhanın pozitif yüklü olduğu anlamına gelmez."
  ],
  "aciklama": "Etkiyle elektriklenmede yüklü cisim iletkene dokunmadan yaklaşınca iletkenin yükleri yer değiştirir. İletken net olarak yüklenmez; yalnızca yük dağılımı değişir.\nAdım 1 (I): Negatif K, levhadaki elektronları iter. K'ye bakan yüzeyde elektron azalır; bu yüzey pozitif olur. I yanlıştır.\nAdım 2 (II): İtilen elektronlar levhanın içinde yer değiştirir, levhadan dışarı çıkmaz. Levhanın toplam yükü sıfır kalır. II yanlıştır.\nAdım 3 (III): Elektronlar levhanın K'den uzak yüzeyinde toplanır; bu yüzey negatif olur. III doğrudur.\nSağlama: K'ye yakın pozitif yüz, uzak negatif yüze göre daha etkilidir; bu yüzden K levhaya doğru çekilir.\nSık yapılan hata: Yüzeydeki zıt yükü, levhanın tamamının yüklü olduğu anlamına getirmek.\nCevap A."
},
{
  "id": "fen-el-001",
  "kazanim": "F.8.7.1.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Aşağıdaki yük çiftlerinden hangisi birbirini çeker?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif – pozitif",
    "Pozitif – negatif",
    "Negatif – negatif",
    "Nötr – nötr"
  ],
  "dogru": 1,
  "hatalar": [
    "Aynı cins yükleri çekim sanma: aynı cins yükler birbirini iter.",
    null,
    "Aynı cins yükleri çekim sanma: aynı cins yükler birbirini iter.",
    "Nötr cisimleri çekim yapar sanma: nötr cisimler birbirine kuvvet uygulamaz; çekim için en az birinin yüklü olması gerekir."
  ],
  "aciklama": "Aynı cins elektrik yükleri birbirini iter, farklı cins elektrik yükleri birbirini çeker.\nAdım 1: Pozitif – pozitif ve negatif – negatif çiftleri aynı cinstir; birbirini iter.\nAdım 2: Nötr – nötr çiftinde iki cisim de yüklü olmadığından aralarında elektriksel kuvvet olmaz.\nAdım 3: Pozitif – negatif çifti farklı cinstir; birbirini çeker.\nSık yapılan hata: Benzer yüklerin birbirini çektiğini sanmak.\nCevap B."
},
{
  "id": "fen-el-002",
  "kazanim": "F.8.7.1.3",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Plastik bir çubuk yün kumaşa sürtülünce çubuk negatif, kumaş pozitif yükleniyor.\n**Bu sırada yük geçişiyle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Çubuktan kumaşa yalnızca elektronlar geçmiştir.",
    "Çubuktan kumaşa yalnızca protonlar geçmiştir.",
    "Kumaştan çubuğa yalnızca protonlar geçmiştir.",
    "Kumaştan çubuğa yalnızca elektronlar geçmiştir."
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters kurma: negatif yüklenen çubuk elektron kazanmıştır; elektronlar kumaştan çubuğa geçmiştir.",
    "Protonları hareketli sanma: protonlar çekirdekte durur, geçiş yapmaz.",
    "Protonları hareketli sanma: protonlar çekirdekte durur, hareket eden yükler elektronlardır.",
    null
  ],
  "aciklama": "Sürtünmeyle elektriklenmede iki cisimden biri elektron kazanıp negatif, diğeri elektron kaybedip pozitif olur. Hareket eden yükler elektronlardır.\nAdım 1: Çubuk negatif yüklendiğine göre elektron kazanmıştır.\nAdım 2: Kumaş pozitif yüklendiğine göre elektron kaybetmiştir.\nAdım 3: Elektronlar kumaştan çubuğa geçmiştir. Protonlar çekirdekte olduğu için yer değiştirmez.\nSağlama: Kumaştaki elektron kaybı kadar çubukta elektron kazancı vardır.\nSık yapılan hata: Elektron geçiş yönünü yük işaretiyle karıştırmak.\nCevap D."
},
{
  "id": "fen-el-003",
  "kazanim": "F.8.7.1.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Aşağıdaki doğa olaylarından hangisi elektriklenmeyle açıklanır?**",
  "gorsel": null,
  "secenekler": [
    "Fırtına bulutlarında şimşek çakması",
    "Mıknatısın demir tozlarını çekmesi",
    "Pusula ibresinin kuzeyi göstermesi",
    "Mumun ısınınca erimesi"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Manyetik çekimi elektriksel sanma: mıknatıs demir tozlarını manyetik etkiyle çeker; elektron alışverişi ya da yük birikmesi söz konusu değildir.",
    "Manyetik yönelmeyi elektriklenme sanma: pusula ibresi Dünya'nın manyetik etkisiyle yönelir; elektrik yükü ile ilgisi yoktur.",
    "Isı etkisini elektriklenme sanma: mum ısı alınca erir; erime, cisimlerin elektron alıp vermesiyle açıklanmaz."
  ],
  "aciklama": "Elektriklenme, cisimlerin elektron alıp vermesiyle yüklenmesidir. Doğadaki en çarpıcı örneği şimşek ve yıldırımdır.\nAdım 1: Fırtına bulutlarındaki buz tanecikleri sürtünerek yüklenir; bulut ile yer arasındaki boşalma şimşektir.\nAdım 2: Mıknatısın demiri çekmesi ve pusulanın yönelmesi manyetik etkiyle, mumun erimesi ise ısı alışverişiyle ilgilidir. Bunlarda elektron alışverişi yoktur.\nSık yapılan hata: Çekme gören her olayı elektriklenmeyle ilişkilendirmek.\nCevap A."
},
{
  "id": "fen-el-004",
  "kazanim": "F.8.7.1.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Yalıtkan iple asılı K küresi, negatif yüklü bir çubuk tarafından itiliyor.\n**Buna göre K küresi için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yüklüdür.",
    "Nötrdür.",
    "Negatif yüklüdür.",
    "Yüklüdür, ancak cinsi belirlenemez."
  ],
  "dogru": 2,
  "hatalar": [
    "İtmeyi zıt yük sanma: zıt yükler çeker; itme olduğuna göre K aynı cins, yani negatif yüklüdür.",
    "Nötr cismi itilir sanma: nötr cisimler yüklü cisim tarafından çekilir, itilmez.",
    null,
    "İtme gözleminin bilgisini eksik kullanma: itme aynı cins yükte görülür; çubuk negatif olduğundan K'nin cinsi de belirlidir."
  ],
  "aciklama": "İtme, yalnızca aynı cins yükler arasında görülür. İtilen cisim, iten cisimle aynı cins yüklüdür.\nAdım 1: Çubuk negatif yüklüdür ve K'yi itiyor.\nAdım 2: İtme için K'nin de aynı cins, yani negatif olması gerekir.\nSağlama: K pozitif olsaydı çubuk onu çekerdi; nötr olsaydı yine çekerdi.\nSık yapılan hata: İtmeyi zıt yüklerin etkisi sanmak.\nCevap C."
},
{
  "id": "fen-el-005",
  "kazanim": "F.8.7.1.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Yalıtkan iplere asılı özdeş P ve R alüminyum folyo toplarından P negatif yüklü, R nötrdür. P topu, R topuna dokundurulduktan sonra bırakılıyor.\n**Buna göre bırakıldıktan sonra topların yükleri ve birbirine etkisi için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "P ve R negatif yüklüdür; birbirini iter.",
    "P negatif, R pozitif yüklüdür; birbirini çeker.",
    "P nötr, R negatif yüklüdür; birbirini çeker.",
    "P ve R pozitif yüklüdür; birbirini iter."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Dokunmada zıt cins sanma: dokunmayla yük paylaşılır ve iki top aynı cins yüklenir; R pozitif olmaz.",
    "Yükü tümüyle aktarma sanma: P yükünü R ile paylaşır, hepsini vermez; ayrıca ikisi de aynı cins yüklü olduğundan birbirini iter.",
    "Elektron geçişini ters yorumlama: P negatif olduğundan elektron fazlasını R ile paylaşır; toplar pozitif değil negatif olur."
  ],
  "aciklama": "Dokunmayla elektriklenmede yüklü cisim, dokunduğu cisimle yükünü paylaşır ve iki cisim de aynı cins yüklenir.\nAdım 1: P negatiftir; elektron fazlası vardır. Dokunma sırasında elektronların bir kısmı R'ye geçer.\nAdım 2: İkisi de elektron fazlasına sahip olduğundan negatif yüklü kalır.\nAdım 3: Aynı cins yüklü toplar birbirini iter.\nSağlama: Toplam yük değişmez; yalnızca iki top arasında paylaşılır.\nSık yapılan hata: Dokunmada nötr cismin zıt yüklendiğini sanmak.\nCevap A."
},
{
  "id": "fen-el-006",
  "kazanim": "F.8.7.1.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir fabrikanın bacasında, çıkan gazdaki toz parçacıklarını tutmak için elektrostatik toz filtresi kullanılıyor. Gaz bacadan geçerken toz parçacıkları negatif yüklenir; bacanın iç yüzeyindeki plakalar ise pozitif yüklüdür. Bir öğrenci filtrenin çalışması için şu yargıları yazıyor.\nI. Toz parçacıkları yük kazandıktan sonra plakalara doğru çekilir.\nII. Plakaların toz parçacıklarıyla aynı cins yüklü olması gerekir.\nIII. Toz parçacıkları ile plakaların yükleri zıt işaretlidir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "II ve III",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur ama toz ile plakaların zıt yüklü olduğunu söyleyen III de doğrudur.",
    "Aynı cins yükleri çekim sanma: aynı cins yükler iter. Plakalar toza zıt yüklü olmalıdır; II yanlıştır.",
    "II'yi doğru sanma: plakalar toz parçacıklarıyla aynı cins yüklü olsaydı onları iterdi. II yanlıştır.",
    null
  ],
  "aciklama": "Zıt cins yükler birbirini çeker. Elektrostatik toz filtresi bu çekimden yararlanır: tozlar bir cins, plakalar ise zıt cins yüklenir.\nAdım 1 (I): Negatif yüklü toz, pozitif plakalara çekilir. I doğrudur.\nAdım 2 (II): Plakalar tozla aynı cins yüklü olsaydı toz iterdi ve plakaya ulaşamazdı. II yanlıştır.\nAdım 3 (III): Tozlar negatif, plakalar pozitiftir; yükler zıt işaretlidir. III doğrudur.\nSağlama: Çekim, tozu gazdan ayırır; baca daha temiz gaz çıkarır.\nSık yapılan hata: Plakanın toz ile aynı cins yüklenmesi gerektiğini sanmak.\nCevap D."
},
{
  "id": "fen-el-007",
  "kazanim": "F.8.7.1.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Yalıtkan ayak üzerindeki nötr bir metal küreye, pozitif yüklü bir çubuk dokunmadan yaklaştırılıyor.\n**Buna göre kürenin çubuğa yakın ve uzak uçları için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yakın uç pozitif, uzak uç negatif olur.",
    "Yakın uç negatif, uzak uç pozitif olur.",
    "İki uç da negatif olur.",
    "İki uç da pozitif olur."
  ],
  "dogru": 1,
  "hatalar": [
    "Yük dağılımını ters kurma: pozitif çubuk elektronları kendine çeker; yakın uç negatif, uzak uç pozitif olur.",
    null,
    "Yük aktarımı sanma: çubuk küreye değmediği için küreye elektron girmez; toplam yük sıfır kalır, uçlar zıt işaretli olur.",
    "Yük aktarımı sanma: çubuk küreye değmediği için kürenin toplam yükü değişmez; uçlar zıt işaretli olur."
  ],
  "aciklama": "Etkiyle elektriklenmede yüklü cisim, nötr iletkene dokunmadan yaklaşınca iletkenin yükleri yer değiştirir. Yakın uç zıt, uzak uç aynı cins yüklenir.\nAdım 1: Pozitif çubuk, kürenin elektronlarını kendine çeker.\nAdım 2: Elektronlar çubuğa yakın uca toplanır; yakın uç negatif olur.\nAdım 3: Uzak uç elektron kaybettiği için pozitif olur.\nSağlama: Kürenin toplam yükü sıfırdır; negatif ve pozitif yükler eşit miktardadır.\nSık yapılan hata: Yaklaşan çubuğun küreye yük verdiğini sanmak.\nCevap B."
},
{
  "id": "fen-el-008",
  "kazanim": "F.8.7.1.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Yalıtkan iplerle asılı K ve L kürelerinden K'nin negatif yüklü olduğu biliniyor. Küreler yaklaştırıldığında birbirini çektiği görülüyor.\n**Buna göre L küresi için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre</th><th>Yük durumu</th></tr><tr><td>K</td><td>Negatif</td></tr><tr><td>L</td><td>Bilinmiyor</td></tr></table>",
  "secenekler": [
    "Pozitif yüklüdür.",
    "Negatif yüklüdür.",
    "Pozitif yüklü ya da nötrdür.",
    "Negatif yüklü ya da nötrdür."
  ],
  "dogru": 2,
  "hatalar": [
    "Çekmeyi zıt yükün kanıtı sanma: çekilme nötr cisimde de görülür; L nötr de olabilir.",
    "Aynı cins yükü çekim sanma: aynı cins yükler iter; L negatif olsaydı K ile itişirdi.",
    null,
    "Aynı cinsi çekim sanma: L negatif olamaz, çünkü negatif K ile itişirdi. L pozitif ya da nötrdür."
  ],
  "aciklama": "Yüklü bir cisim hem zıt yüklü cismi hem de nötr cismi çeker; aynı cins yüklü cismi ise iter.\nAdım 1: K negatiftir ve L'yi çekiyor.\nAdım 2: L negatif olsaydı K ile itişirdi; bu yüzden L negatif olamaz.\nAdım 3: L pozitif olabilir (zıt yük), nötr de olabilir (nötr cisim çekilir).\nSık yapılan hata: Çekilmeyi görünce karşıdaki cismin pozitif olduğunu kesin saymak.\nCevap C."
},
{
  "id": "fen-el-009",
  "kazanim": "F.8.7.1.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Fen laboratuvarında cam bir çubuk ipek kumaşa sürtülüyor; sürtünme sonunda cam çubuk pozitif yükleniyor. Öğrenciler şu yargıları yazıyor.\nI. Elektronlar cam çubuktan ipek kumaşa geçmiştir.\nII. İpek kumaş negatif yüklenmiştir.\nIII. Sürtünmeden sonra cam çubuk ile ipek kumaş birbirini iter.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız III",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Zıt yüklüleri itme sanma: pozitif cam çubuk ile negatif ipek kumaş birbirini çeker; III yanlıştır.",
    null,
    "III'ü doğru sanma: sürtünmeyle zıt yüklenen cisimler birbirini çeker, itmez. II de doğrudur.",
    "Elektron yönünü ters kurma: cam çubuk pozitif yüklendiğine göre elektron kaybetmiştir, yani I doğrudur; III ise yanlıştır."
  ],
  "aciklama": "Sürtünmeyle elektriklenmede elektron kaybeden cisim pozitif, elektron kazanan cisim negatif yüklenir; iki cisim zıt cins ve eşit miktarda yüklenir.\nAdım 1 (I): Cam çubuk pozitif olduğuna göre elektron kaybetmiştir; elektronlar camdan ipeğe geçmiştir. I doğrudur.\nAdım 2 (II): İpek kumaş bu elektronları aldığı için negatif yüklenmiştir. II doğrudur.\nAdım 3 (III): Zıt cins yüklü iki cisim birbirini çeker. III yanlıştır.\nSağlama: Pozitif cam çubuk, negatif ipek kumaş: zıt yükler, çekim.\nSık yapılan hata: Sürtünen cisimlerin birbirini ittiğini sanmak.\nCevap B."
},
{
  "id": "fen-el-010",
  "kazanim": "F.8.7.1.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Pozitif yüklü bir çubuğu küçük kâğıt parçalarına yaklaştıran Selin, parçaların çubuğa doğru sıçradığını görüyor ve \"Kâğıt parçaları negatif yüklüdür.\" diyor.\n**Selin'in bu yargısı için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Yanlıştır; çekilme, kâğıt parçalarının nötr olmasından da kaynaklanabilir.",
    "Doğrudur; pozitif yüklü çubuk yalnızca negatif yüklü cisimleri çeker.",
    "Yanlıştır; kâğıt parçaları pozitif olmalıdır, çünkü çubuk onları çekmiştir.",
    "Doğrudur; nötr cisimler yüklü çubuk tarafından hiçbir zaman çekilmez."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yüklü cismin nötr cismi de çektiğini bilmeme: yüklü bir cisim nötr hafif cisimleri de çeker.",
    "Çekmeyi aynı cins sanma: aynı cins yükler iter. Çekilme, parçaların pozitif olduğunu göstermez.",
    "Nötr cismin çekilemeyeceğini sanma: yüklü cisimler nötr hafif cisimleri çeker; bu, elektriklenme gözlemlerinin temelidir."
  ],
  "aciklama": "Yüklü bir cisim, zıt cins yüklü cisimleri olduğu gibi nötr hafif cisimleri de çeker. Bu yüzden çekilme gözlemi karşıdaki cismin yüklü ve zıt cins olduğunu kesinleştirmez.\nAdım 1: Pozitif çubuk, nötr kâğıt parçalarındaki yükleri yer değiştirir; çubuğa yakın yüzde negatif yük toplanır.\nAdım 2: Bu yüzden kâğıt parçaları, yüklü olmasalar da çubuğa doğru sıçrar.\nAdım 3: Selin'in sonucu (kâğıtlar negatif) kesin değildir; gözlem yalnızca çubuğun yüklü olduğunu gösterir.\nSık yapılan hata: Çekilmeyi, karşıdaki cismin zıt yüklü olduğunun kanıtı saymak.\nCevap A."
},
{
  "id": "fen-el-011",
  "kazanim": "F.8.7.1.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Mutfakta rulodan çekilen streç filmin, ruloya ve elin üzerine yapıştığı, nötr bir cam kaba yaklaştırıldığında ise cam kaba yapıştığı görülüyor. Öğrenciler bu olay için şu yargıları ileri sürüyor.\nI. Film ruloya sürtünürken ruloyla aynı cins yüklenir.\nII. Film ile rulo, sürtünme sonunda zıt cins yüklenir.\nIII. Film nötr cam kaba yaklaşınca kabın yükleri yer değiştirir ve film kaba çekilir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Sürtünmede aynı cins sanma: sürtünen iki cisim zıt cins yüklenir. I yanlıştır; II ve III doğrudur.",
    "Eksik değerlendirme: III doğrudur ama filmin ve rulonun zıt cins yüklendiğini söyleyen II de doğrudur.",
    null,
    "I'i doğru sanma: sürtünmede cisimler aynı cins değil, zıt cins yüklenir; film ve rulo aynı cins olsaydı birbirini iterdi."
  ],
  "aciklama": "Sürtünen cisimler zıt cins yüklenir. Yüklü bir cisim, nötr bir cisme yaklaşınca nötr cismin yüklerini yer değiştirir (etkiyle elektriklenme) ve onu çeker.\nAdım 1 (I): Film ile rulo sürtününce biri pozitif, öbürü negatif olur. Aynı cins yüklenme olmaz. I yanlıştır.\nAdım 2 (II): Film ve rulo zıt cins yüklenir; bu yüzden birbirine yapışırlar. II doğrudur.\nAdım 3 (III): Yüklü film, nötr cam kabın yüklerini yer değiştirir; film ile kabın yakın yüzeyi zıt yüklü olur ve film kaba çekilir. III doğrudur.\nSık yapılan hata: Sürtünen cisimlerin aynı cins yüklendiğini sanmak.\nCevap C."
},
{
  "id": "fen-el-012",
  "kazanim": "F.8.7.1.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "İki özdeş balon aynı yün kazağa sürtüldükten sonra ayrı ayrı ipten tutuluyor. Balonlar birbirine yaklaştırıldığında birbirinden uzaklaşıyor, kazağa yaklaştırıldığında ise kazağa doğru çekiliyor.\n**Buna göre bu gözlemlerle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Balonlar aynı cins yüklenmiştir; kazak balonlarla zıt cins yüklenmiştir.",
    "Balonlar zıt cins yüklenmiştir; kazak nötr kalmıştır.",
    "Balonlar aynı cins yüklenmiştir; kazak da balonlarla aynı cins yüklenmiştir.",
    "Balonlar nötr kalmıştır; kazak yüklenmiştir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Balonların aynı davrandığını görmeme: iki balon da aynı kazakla sürtüldüğü için aynı cins yüklenir; birbirini ittiklerine göre zıt cins olamazlar.",
    "Sürtünmede aynı cins sanma: sürtünen cisimler zıt cins yüklenir; kazak balonlarla aynı cins olsaydı onları iterdi.",
    "İtmeyi yük olmadan sanma: nötr balonlar birbirini itmez; itme, balonların aynı cins yüklü olduğunu gösterir."
  ],
  "aciklama": "Sürtünmeyle elektriklenmede iki cisim zıt cins yüklenir. Aynı kumaşa sürtülen özdeş cisimler ise aynı cins yüklenir.\nAdım 1: İki balon da aynı yün kazağa sürtüldüğü için aynı cins yüklenir. Aynı cins yükler birbirini ittiği için balonlar uzaklaşır.\nAdım 2: Balonlar kazakla sürtünmede zıt yüklenmiştir. Zıt cins yükler birbirini çeker; balonlar kazağa doğru çekilir.\nSağlama: İtme ve çekme gözlemleri bu yük tablosuyla örtüşür.\nSık yapılan hata: Sürtünen balonla kumaşın aynı cins yükleneceğini sanmak.\nCevap A."
},
{
  "id": "fen-el-013",
  "kazanim": "F.8.7.1.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı K, L ve M kürelerinden K'nin negatif yüklü olduğu biliniyor. Küreler ikişer ikişer yaklaştırıldığında K ile L'nin birbirini çektiği, L ile M'nin de birbirini çektiği görülüyor. Öğrenciler şu yargıları ileri sürüyor.\nI. L pozitif yüklüdür.\nII. M negatif yüklüdür.\nIII. L ve M'den en az biri yüklüdür.\n**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>K – L</td><td>Birbirini çekiyor</td></tr><tr><td>L – M</td><td>Birbirini çekiyor</td></tr></table>",
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  "dogru": 2,
  "hatalar": [
    "Çekmeyi zıt yük sanma: K negatif olduğuna göre L pozitif ya da nötr olabilir; I kesin değildir. III ise kesin olarak doğrudur.",
    "Veride olmayan bilgiyi doğru sayma: M hakkında yalnızca L ile çekiştiği bilinir; negatif olması kesin değildir. III doğrudur.",
    null,
    "Veride olmayan bilgileri doğru sayma: L pozitif ya da nötr olabilir; M'nin işareti de belli değildir. Kesin olan III'tür."
  ],
  "aciklama": "Çekme, iki cisimden en az birinin yüklü olduğunu gösterir (zıt cins yük ya da yüklü ile nötr). İki nötr cisim birbirini çekmez.\nAdım 1: K negatif ve L'yi çekiyor. L pozitif ya da nötr olabilir. I kesin değildir.\nAdım 2: L ile M çekişiyor. M'nin negatif olması gerekmez; L pozitif olsa M negatif ya da nötr olabilir. II kesin değildir.\nAdım 3: L ile M birbirini çektiğine göre en az biri yüklüdür; ikisi de nötr olsaydı çekim olmazdı. III kesin doğrudur.\nSık yapılan hata: Çekmeyi her zaman zıt yük diye yorumlamak.\nCevap C."
},
{
  "id": "fen-el-014",
  "kazanim": "F.8.7.1.3",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir öğrenci şişirilmiş plastik balonu kuru saçına sürtüyor; balon negatif, saç pozitif yükleniyor. Sonra balonu, yalıtkan bir masanın üzerinde yatan boş ve nötr metal bir teneke kutuya dokunmadan yaklaştırıyor ve kutunun balona doğru yuvarlandığını görüyor. Kutu balona değdikten hemen sonra ise balondan uzaklaşacak biçimde yuvarlanıyor. Öğrenci olayı şu yargılarla açıklıyor.\nI. Kutu balona doğru yuvarlanırken kutunun balona bakan yüzü pozitif yüklenmiştir.\nII. Balon kutuya değerken elektronlar kutudan balona geçmiştir.\nIII. Kutu, balona değdikten sonra balonla aynı cins yüklü olduğu için balondan uzaklaşmıştır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Elektron yönünü ters kurma: negatif balonda elektron fazlası vardır; elektronlar balondan kutuya geçer, II yanlıştır. I ve III doğrudur.",
    "Eksik değerlendirme: III doğrudur ama negatif balonun etkisiyle kutunun balona bakan yüzünün pozitif olduğunu söyleyen I de doğrudur.",
    "Elektron yönünü ters kurma: II yanlıştır, çünkü elektron fazlası olan balon elektron almaz, verir. Üstelik kutunun balondan uzaklaşmasını açıklayan III de doğrudur.",
    null
  ],
  "aciklama": "Önce etkiyle, sonra dokunmayla elektriklenme gerçekleşir. Etkide yük aktarımı olmaz, yalnızca iletkenin içindeki yükler yer değiştirir; dokunmada ise yük aktarılır ve iki cisim aynı cins yüklenir.\nAdım 1 (I): Negatif balon, kutudaki elektronları kendinden uzağa iter. Balona bakan yüz elektron kaybeder ve pozitif olur; bu yüz daha yakın olduğundan kutu balona çekilir. I doğrudur.\nAdım 2 (II): Balon negatiftir, yani elektron fazlası vardır. Değme sırasında elektronlar balondan kutuya geçer. Kutudan balona geçiş olmaz. II yanlıştır.\nAdım 3 (III): Kutu elektron aldığı için negatif yüklenir. Artık balon ve kutu aynı cins yüklüdür; aynı cins yükler birbirini ittiği için kutu uzaklaşır. III doğrudur.\nSağlama: Kutu balona önce çekildi, değdikten sonra itildi; bu sıra, yük aktarımının değme anında olduğunu gösterir.\nSık yapılan hata: Negatif yüklü cismin elektron aldığını sanıp geçiş yönünü ters kurmak.\nCevap D."
},
{
  "id": "fen-el-015",
  "kazanim": "F.8.7.1.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı K, L, M ve N kürelerinden K'nin negatif yüklü olduğu biliniyor. Küreler ikişer ikişer yaklaştırıldığında gözlemler tabloya yazılıyor.\n**Buna göre K, L, M ve N kürelerinin yükleri için aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>K – L</td><td>Birbirini itiyor</td></tr><tr><td>L – M</td><td>Birbirini çekiyor</td></tr><tr><td>M – N</td><td>Birbirini itiyor</td></tr></table>",
  "secenekler": [
    "L pozitif, M negatif, N negatif yüklüdür.",
    "L negatif, M pozitif, N pozitif yüklüdür.",
    "L negatif, M nötr, N pozitif yüklüdür.",
    "L negatif, M pozitif, N nötrdür."
  ],
  "dogru": 1,
  "hatalar": [
    "İtmeyi zıt yük sanma: K negatif ve L ile itiştiğine göre L de negatiftir. Ayrıca L negatif olduğundan M pozitif yüklü olur.",
    null,
    "İtmenin gerektirdiği yükü yok sayma: M ile N birbirini ittiğine göre ikisi de yüklüdür; M nötr olamaz.",
    "İtmenin gerektirdiği yükü yok sayma: M ile N birbirini ittiğine göre ikisi de yüklüdür; N nötr olamaz."
  ],
  "aciklama": "İtme, yalnızca aynı cins yüklerde görülür: itişen iki cisim de yüklüdür ve aynı cinstendir. Çekme ise zıt cins yükler ya da yüklü ile nötr cisimler arasında olur.\nAdım 1: K negatif, K ile L itişiyor; L de negatiftir.\nAdım 2: L negatif, L ile M çekişiyor; M pozitif ya da nötr olabilir.\nAdım 3: M ile N itişiyor; itme iki cismin de yüklü olduğunu gösterir. Demek ki M nötr değildir; M pozitiftir. N de M ile aynı cinstedir, yani pozitiftir.\nSağlama: L (−) ile M (+) çekişir, M (+) ile N (+) itişir. Tablodaki üç gözlemle uyumludur.\nSık yapılan hata: İtme için iki cismin de yüklü olması gerektiğini unutup nötr ihtimalini bırakmamak.\nCevap B."
}
);
