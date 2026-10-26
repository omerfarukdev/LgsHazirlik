// Fen Bilimleri — Besin Zinciri ve Enerji Akışı: Kademe 3 (LGS Ayarı) yedeği, sıra 26-75 (30 düzey 3 + 20 düzey 4)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["besin-zinciri"] = window.LGS_BANK["besin-zinciri"] || []).push(
{
  "id": "fen-bz-326",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Van Gölü kıyısında çalışan bir gözlemci, gölde yaşayan dört canlının neyle beslendiğini tabloya yazıyor. Tabloda yalnızca gözlemlenen besinler kayıtlıdır; canlıların başka besini yoktur.\n**Bu verilere göre aşağıdaki yargılardan hangisi doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Beslenme biçimi</th></tr><tr><td>Fitoplankton</td><td>Güneş ışığıyla kendi besinini yapar</td></tr><tr><td>Zooplankton</td><td>Fitoplankton yer</td></tr><tr><td>İnci kefali</td><td>Zooplankton ve su böceği yer</td></tr><tr><td>Martı</td><td>Balık, böcek ve ot tohumu yer</td></tr></table>",
  "secenekler": [
    "Martı, yalnızca hayvanlarla beslendiği için etçildir.",
    "İnci kefali, hem zooplankton hem su böceği yediği için hepçildir.",
    "Martı, hem bitkisel hem hayvansal besin yediği için hepçildir.",
    "Zooplankton, fitoplanktonu yediği için ikinci basamak tüketicidir."
  ],
  "dogru": 2,
  "hatalar": [
    "Hepçili etçil sanma: tabloda martının ot tohumu da yediği yazıyor, yani bitkisel besin de alıyor.",
    "Hayvan yiyen canlıyı hepçil sanma: zooplankton da su böceği de hayvandır, inci kefali etçildir.",
    null,
    "Basamağı bir yukarı kaydırma: fitoplankton üreticidir, onu yiyen zooplankton 1. basamak tüketicidir."
  ],
  "aciklama": "Hepçil, hem bitkisel hem hayvansal besinle beslenen tüketicidir. Karar verirken canlının adına değil tablodaki besinlere bakılır.\nAdım 1: Martı balık ve böcek (hayvan) ile ot tohumu (bitki) yer; hepçildir.\nAdım 2: İnci kefalinin besinleri zooplankton ve su böceğidir; ikisi de hayvandır, yani inci kefali etçildir.\nAdım 3: Fitoplankton üreticidir; onu yiyen zooplankton 1. basamak tüketicidir.\nSık yapılan hata: Üreticiyi de sayıp bütün basamakları bir kaydırmak.\nCevap C."
},
{
  "id": "fen-bz-327",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Karadeniz'in nemli ormanlarında yapılan bir inceleme sonunda birbirinden bağımsız iki besin zinciri belirlenmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; zincirlerdeki canlılar yalnızca şemada gösterilen canlılarla beslenmektedir.\n**Aşağıdaki canlı çiftlerinden hangisi, farklı zincirlerde yer almasına rağmen aynı basamak tüketicisidir?**",
  "gorsel": "<svg viewBox=\"0 0 466 110\" role=\"img\" aria-label=\"Karadeniz ormanındaki iki besin zinciri\"><defs><marker id=\"ok327\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"122\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"71\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kayın yaprağı</text><line x1=\"134\" y1=\"25\" x2=\"164\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok327)\"/><rect x=\"166\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"199\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tırtıl</text><line x1=\"234\" y1=\"25\" x2=\"264\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok327)\"/><rect x=\"266\" y=\"10\" width=\"90\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"311\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ağaçkakan</text><line x1=\"358\" y1=\"25\" x2=\"388\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok327)\"/><rect x=\"390\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"423\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Atmaca</text><rect x=\"10\" y=\"60\" width=\"114\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"67\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ladin tohumu</text><line x1=\"126\" y1=\"75\" x2=\"156\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok327)\"/><rect x=\"158\" y=\"60\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"191\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Sincap</text><line x1=\"226\" y1=\"75\" x2=\"256\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok327)\"/><rect x=\"258\" y=\"60\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"287\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Vaşak</text></svg>",
  "secenekler": [
    "Tırtıl – sincap",
    "Ağaçkakan – sincap",
    "Atmaca – vaşak",
    "Tırtıl – vaşak"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Basamakları karıştırma: ağaçkakan tırtılı yiyen 2. basamak, sincap ise ladin tohumunu yiyen 1. basamak tüketicidir.",
    "Basamakları karıştırma: atmaca 3. basamak, vaşak 2. basamak tüketicidir.",
    "Basamakları karıştırma: tırtıl üreticiyi yiyen 1. basamak, vaşak ise sinciri yiyen 2. basamak tüketicidir."
  ],
  "aciklama": "Tüketici basamakları üreticiden sonra sayılır: üreticiyi yiyen 1., onu yiyen 2., onu yiyen 3. basamaktır.\nAdım 1: Birinci zincirde kayın yaprağı üreticidir; tırtıl 1., ağaçkakan 2., atmaca 3. basamak tüketicidir.\nAdım 2: İkinci zincirde ladin tohumu üreticidir; sincap 1., vaşak 2. basamak tüketicidir.\nAdım 3: Aynı basamaktaki çift, 1. basamakta bulunan tırtıl ve sincaptır.\nSağlama: Tırtılın da sincabın da besini doğrudan bir üreticidir.\nCevap A."
},
{
  "id": "fen-bz-328",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Marmara Denizi'nde fitoplankton → zooplankton → istavrit → palamut besin zinciri bulunmaktadır. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir. İstavritin tek avcısı palamuttur; her canlı yalnızca kendinden önceki halkayla beslenir.\nI. Zooplankton, ikinci basamak tüketicidir.\nII. Aşırı avlanma yüzünden palamut sayısı çok azalırsa istavrit sayısı başlangıçta artar.\nIII. Zincirdeki tüketicilerin kullandığı enerji, fitoplanktonun ürettiği besinle zincire girer.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 498 60\" role=\"img\" aria-label=\"Fitoplankton, zooplankton, istavrit ve palamut besin zinciri\"><defs><marker id=\"ok328\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"114\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"67\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Fitoplankton</text><line x1=\"126\" y1=\"25\" x2=\"156\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok328)\"/><rect x=\"158\" y=\"10\" width=\"106\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"211\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zooplankton</text><line x1=\"266\" y1=\"25\" x2=\"296\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok328)\"/><rect x=\"298\" y=\"10\" width=\"82\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"339\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">İstavrit</text><line x1=\"382\" y1=\"25\" x2=\"412\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok328)\"/><rect x=\"414\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"451\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Palamut</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "I. yargıyı doğru sayma: zooplankton üreticiyi (fitoplanktonu) yediği için 1. basamak tüketicidir. II ve III yargılarını atlama: ikisi de doğrudur.",
    "III. yargıyı atlama: tüketiciler besin üretemez, kullandıkları enerji fitoplanktonun ürettiği besinle zincire girer; III. yargı da doğrudur.",
    "I. yargıyı doğru sayma: zooplankton 1. basamak tüketicidir. II. yargıyı atlama: palamut azalınca onun tek avı olan istavrit artar.",
    null
  ],
  "aciklama": "Üretici, zincire enerji sokan canlıdır; tüketiciler basamakları üreticiden sonra sayılır.\nAdım 1 (I): Zooplankton, üretici olan fitoplanktonu yer; 1. basamak tüketicidir. I. yargı yanlıştır.\nAdım 2 (II): Avcı olan palamut azalınca istavrit üzerindeki av baskısı kalkar; istavrit artar. II. yargı doğrudur.\nAdım 3 (III): Tüketiciler besin üretemez; kullandıkları enerji, fitoplanktonun fotosentezle ürettiği besinle zincire girer. III. yargı doğrudur.\nSık yapılan hata: Üreticiden sonraki ilk canlıyı 2. basamak saymak.\nCevap D."
},
{
  "id": "fen-bz-329",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir çölde yapılan çalışmada canlıların beslenme ilişkisi şemada gösterilmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir. Bir hastalık yüzünden kum farelerinin tamamı ölüyor.\n**Bu durumla ilgili aşağıdaki yargılardan hangisi kesinlikle doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 565 165\" role=\"img\" aria-label=\"Çöl besin ağı\"><defs><marker id=\"ok329\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"105\" y1=\"85\" x2=\"137\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok329)\"/><line x1=\"105\" y1=\"85\" x2=\"137\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok329)\"/><line x1=\"216\" y1=\"135\" x2=\"272\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok329)\"/><line x1=\"240\" y1=\"30\" x2=\"392\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok329)\"/><line x1=\"375\" y1=\"135\" x2=\"392\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok329)\"/><line x1=\"471\" y1=\"30\" x2=\"491\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok329)\"/><line x1=\"375\" y1=\"135\" x2=\"491\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok329)\"/><rect x=\"5\" y=\"70\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"54\" y=\"90\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çöl çalısı</text><rect x=\"140\" y=\"15\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"189\" y=\"35\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kum faresi</text><rect x=\"140\" y=\"120\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"177\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çekirge</text><rect x=\"275\" y=\"120\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"324\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kertenkele</text><rect x=\"395\" y=\"15\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"432\" y=\"35\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Engerek</text><rect x=\"494\" y=\"70\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"527\" y=\"90\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kartal</text></svg>",
  "secenekler": ["Çöl çalılarının sayısı kesinlikle artar.","Engerek, kertenkele sayesinde besinsiz kalmaz.","Kartal bu durumda besinsiz kalır.","Kertenkele sayısı kesinlikle artar."],
  "dogru": 1,
  "hatalar": ["Kesin sanma: çalıyı çekirge de yer; kum faresi azalsa da çekirge artarsa çalı azalabilir, artış kesin değildir.",null,"Tek besini yok olmadı: kartal engerek ve kertenkeleyle de beslenir, kum faresi onun besini değildir.","Kesin sanma: engerek kum faresi bitince kertenkeleye yönelir, bu yüzden kertenkele artmayıp azalabilir."],
  "aciklama": "\"Kesinlikle\" kökünde yalnızca şemadan zorunlu olarak çıkan sonuç doğrudur; \"olabilir\" denilen şeyler kesin değildir.\nAdım 1: Şemada engerek hem kum faresiyle hem kertenkeleyle beslenir.\nAdım 2: Kum fareleri yok olunca engereğin kertenkele besini hâlâ yerindedir; kesinlikle besinsiz kalmaz.\nAdım 3: Kartalın besinleri engerek ve kertenkeledir; çalının ve kertenkelenin sayısı ise başka canlıların davranışına bağlıdır, kesin değildir.\nSık yapılan hata: Bir besinin yok olmasını o canlının tamamen yok olması sanmak.\nCevap B."
},
{
  "id": "fen-bz-330",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Afrika savanlarını anlatan bir belgeselde şu gözlemler aktarılıyor: Otlar fotosentezle besin üretir. Zebralar otlarla, aslanlar zebralarla beslenir. Ölen zebraların kalıntıları zamanla ufalanıp toprağa karışır; bu işi toprakta yaşayan bakteriler ve mantarlar yapar.\n**Bu gözlemlere göre aşağıdaki yargılardan hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Mantarlar, zebra kalıntılarını parçaladıkları için zincirde 3. basamak tüketici sayılır.",
    "Bakteriler, kalıntılardaki maddeleri toprağa geri vererek otların yeniden yararlanmasını sağlar.",
    "Aslanlar, ölü zebraları parçaladıkları için ayrıştırıcı grubunda yer alır.",
    "Otlar, ölü kalıntıları doğrudan yiyerek beslendikleri için tüketici sayılır."
  ],
  "dogru": 1,
  "hatalar": [
    "Ayrıştırıcıyı tüketici sayma: mantar ve bakteriler basamak numarası almaz, ölü kalıntıyı parçalayan ayrıştırıcılardır.",
    null,
    "Etçili ayrıştırıcı sanma: aslan avını yiyen bir tüketicidir, kalıntıyı parçalayıp maddeleri toprağa karıştırmaz.",
    "Üreticiyi tüketici sanma: otlar besinini fotosentezle kendisi üretir; kalıntıyı yemez, açığa çıkan maddeleri kullanır."
  ],
  "aciklama": "Ayrıştırıcılar (bakteri ve mantar) ölü canlı kalıntılarını parçalar; açığa çıkan maddeler toprağa karışır ve bitkiler bunları yeniden kullanır.\nAdım 1: Otlar besinini kendisi yaptığı için üreticidir; zebra ve aslan tüketicidir.\nAdım 2: Kalıntıyı parçalayan bakteri ve mantarlar ayrıştırıcıdır, basamak numarası almaz.\nAdım 3: Bu yüzden maddeler toprağa geri döner ve otlar onları yeniden kullanır.\nSık yapılan hata: Ayrıştırıcıyı tüketici basamaklarından biri saymak.\nCevap B."
},
{
  "id": "fen-bz-331",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir bozkırda canlıların beslenme ilişkisi şemada gösterilmiştir. Tarla kuşu hem otun tohumunu hem de çekirgeyi yer. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir.\n**Tarla kuşu için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 470 165\" role=\"img\" aria-label=\"Bozkır besin ağı\"><defs><marker id=\"ok331\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"41\" y1=\"80\" x2=\"87\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok331)\"/><line x1=\"41\" y1=\"80\" x2=\"87\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok331)\"/><line x1=\"41\" y1=\"80\" x2=\"237\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok331)\"/><line x1=\"166\" y1=\"25\" x2=\"237\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok331)\"/><line x1=\"206\" y1=\"135\" x2=\"397\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok331)\"/><line x1=\"340\" y1=\"80\" x2=\"397\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok331)\"/><rect x=\"5\" y=\"65\" width=\"34\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"22\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ot</text><rect x=\"90\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"127\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çekirge</text><rect x=\"90\" y=\"120\" width=\"114\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"147\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tarla faresi</text><rect x=\"240\" y=\"65\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"289\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tarla kuşu</text><rect x=\"400\" y=\"90\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"429\" y=\"110\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tilki</text></svg>",
  "secenekler": [
    "Etçil olduğundan ağda tek basamakta yer alır.",
    "Otçul olduğundan ağda tek basamakta yer alır.",
    "Hepçil olduğundan ağda yalnızca 3. basamak tüketicisi olarak yer alır.",
    "Hepçil olduğundan ağda hem 1. hem 2. basamak tüketicisi olarak yer alır."
  ],
  "dogru": 3,
  "hatalar": [
    "Hepçili etçil sanma: tarla kuşu tohum da yediği için bitkisel besin de alır.",
    "Hepçili otçul sanma: tarla kuşu çekirgeyi de yer, yani hayvansal besin de alır.",
    "Basamağı karıştırma: tohumu yerken 1., çekirgeyi yerken 2. basamak tüketicisidir; 3. basamakta değildir.",
    null
  ],
  "aciklama": "Bir canlı ağda farklı yollardan beslenebiliyorsa farklı basamaklarda bulunabilir.\nAdım 1: Tarla kuşu otun tohumunu yer; ot üretici olduğu için bu yolda kuş 1. basamak tüketicidir.\nAdım 2: Çekirgeyi yer; çekirge 1. basamak olduğundan bu yolda kuş 2. basamak tüketicidir.\nAdım 3: Hem bitkisel hem hayvansal besin yediği için hepçildir.\nSık yapılan hata: Bir canlıyı ağda tek bir basamağa sabitlemek.\nCevap D."
},
{
  "id": "fen-bz-332",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Antarktika kıyısındaki bir ekosistem için çizilen enerji piramidinde, bir basamağa ulaşan enerji azaldıkça basamak daha dar çizilmiştir.\nI. Penguen basamağına ulaşan enerji, krill basamağına ulaşandan fazladır.\nII. Krillin yediği fitoplanktondaki enerjinin bir bölümü, krilin yaşamsal olaylarında kullanılıp ısı olarak çevreye yayılmıştır.\nIII. Leopar foku basamağındaki enerji, penguen basamağındaki enerjinin tamamı kadardır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 180\" role=\"img\" aria-label=\"Fitoplankton, krill, penguen ve leopar fokundan oluşan enerji piramidi\"><defs><marker id=\"ok332\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"125\" y=\"4\" width=\"50\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"29\" font-size=\"14\" fill=\"currentColor\">Leopar foku</text><rect x=\"100\" y=\"48\" width=\"100\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"73\" font-size=\"14\" fill=\"currentColor\">Penguen</text><rect x=\"60\" y=\"92\" width=\"180\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"117\" font-size=\"14\" fill=\"currentColor\">Krill</text><rect x=\"15\" y=\"136\" width=\"270\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"161\" font-size=\"14\" fill=\"currentColor\">Fitoplankton</text></svg>",
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "II. yargıyı atlama: canlılar kullandıkları enerjinin bir bölümünü ısı olarak yayar. III. yargıyı doğru sayma: enerjinin tamamı aktarılmaz, foku basamağı penguen basamağından dardır.",
    "I. yargıyı doğru sayma: penguen basamağı krilinkinden dardır; enerji yukarı çıkıldıkça azalır.",
    "I ve III yargılarını doğru sayma: piramit yukarı daraldığı için üst basamağa ulaşan enerji alttakinden azdır ve aktarım kayıpsız değildir. II. yargıyı da atlama."
  ],
  "aciklama": "Enerji piramidinde basamak ne kadar genişse oraya o kadar çok enerji ulaşmıştır.\nAdım 1 (I): Penguen basamağı krilinkinden dardır; penguene daha az enerji ulaşır. I. yargı yanlıştır.\nAdım 2 (II): Krilin kullandığı enerjinin bir bölümü ısı olarak çevreye yayılır ve üst basamağa geçmez. II. yargı doğrudur.\nAdım 3 (III): Enerji kayıpsız aktarılmaz; foku basamağı penguen basamağından dardır. III. yargı yanlıştır.\nSık yapılan hata: Üstteki avcıya enerjinin tamamının geçtiğini sanmak.\nCevap A."
},
{
  "id": "fen-bz-333",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Meriç Deltası'ndaki bir sulak alanda canlıların beslenme ilişkisi besin ağıyla gösterilmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir.\n**Bu ağda yosundan başlayıp balıkçılda biten kaç farklı besin zinciri vardır?**",
  "gorsel": "<svg viewBox=\"0 0 565 160\" role=\"img\" aria-label=\"Yosun, larva, salyangoz, kurbağa, sazan, yılan ve balıkçıldan oluşan besin ağı\"><defs><marker id=\"ok333\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"65\" y1=\"85\" x2=\"92\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><line x1=\"65\" y1=\"85\" x2=\"92\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><line x1=\"155\" y1=\"35\" x2=\"217\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><line x1=\"155\" y1=\"35\" x2=\"217\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><line x1=\"187\" y1=\"135\" x2=\"217\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><line x1=\"296\" y1=\"35\" x2=\"332\" y2=\"19\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><line x1=\"296\" y1=\"35\" x2=\"447\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><line x1=\"395\" y1=\"19\" x2=\"447\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><line x1=\"280\" y1=\"135\" x2=\"447\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok333)\"/><rect x=\"5\" y=\"70\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"34\" y=\"90\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yosun</text><rect x=\"95\" y=\"20\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"124\" y=\"40\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Larva</text><rect x=\"95\" y=\"120\" width=\"90\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"140\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Salyangoz</text><rect x=\"220\" y=\"20\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"257\" y=\"40\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kurbağa</text><rect x=\"220\" y=\"120\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"249\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Sazan</text><rect x=\"335\" y=\"4\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"364\" y=\"24\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yılan</text><rect x=\"450\" y=\"70\" width=\"82\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"491\" y=\"90\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Balıkçıl</text></svg>",
  "secenekler": [
    "2",
    "3",
    "4",
    "5"
  ],
  "dogru": 2,
  "hatalar": [
    "Yalnızca yosundan çıkan ok sayısını sayma: yosundan iki ok çıkar, ama her koldan birden fazla yol ayrılır.",
    "Balıkçıla gelen ok sayısını zincir sayısı sanma: balıkçıla üç ok gelir, ama zincir sayısı ok sayısına eşit değildir.",
    null,
    "Bir yolu iki kez sayma: dört yolun hepsi farklıdır; beşinci bir yol yoktur, fazla sayılmıştır."
  ],
  "aciklama": "Farklı zincir sayısı için üreticiden son canlıya giden her yolu tek tek yazarız; ok sayısı zincir sayısı değildir.\nAdım 1: Yosun → larva → kurbağa → yılan → balıkçıl.\nAdım 2: Yosun → larva → kurbağa → balıkçıl.\nAdım 3: Yosun → larva → sazan → balıkçıl.\nAdım 4: Yosun → salyangoz → sazan → balıkçıl.\nSağlama: Başka yol yoktur. Dört yol, dört zincir eder.\nCevap C."
},
{
  "id": "fen-bz-334",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Tundrada bir lemming, bodur söğüt yapraklarını yiyor. Yediği besinin enerjisi üç yere gidiyor: bir bölümü koşma, ısınma gibi yaşamsal olaylarda kullanılıp çevreye ısı olarak yayılıyor, bir bölümü dışkıyla dışarı atılıyor, kalan bölümü ise lemmingin vücudunda depolanıyor. Daha sonra bir kutup tilkisi bu lemmingi yakalıyor.\n**Kutup tilkisine geçen enerji, lemmingin enerjisinin hangi bölümüne karşılık gelir?**",
  "gorsel": null,
  "secenekler": [
    "Lemmingin yaşamsal olaylarda kullandığı bölüm",
    "Lemmingin dışkıyla dışarı attığı bölüm",
    "Yalnızca lemmingin vücudunda depolanan bölüm",
    "Lemmingin yediği besindeki enerjinin tamamı"
  ],
  "dogru": 2,
  "hatalar": [
    "Kullanılan enerjiyi aktarılan sanma: yaşamsal olaylarda kullanılan enerji ısı olarak çevreye yayılır, tilkiye geçmez.",
    "Atılan enerjiyi aktarılan sanma: dışkıyla atılan enerji lemmingin vücudunda kalmaz, tilkiye geçmez.",
    null,
    "Aktarımı kayıpsız sanma: besindeki enerjinin yalnızca bir kısmı vücutta depolanır, tamamı aktarılmaz."
  ],
  "aciklama": "Bir canlının yediği besindeki enerji üç yere gider: yaşamsal olaylarda kullanılıp ısıya dönüşür, dışkıyla atılır ya da vücutta depolanır. Üst basamağa yalnızca depolanan kısım geçer.\nAdım 1: Kullanılan enerji ısı olarak çevreye yayıldığı için tilkiye ulaşmaz.\nAdım 2: Dışkıyla atılan enerji de lemmingin vücudunda değildir.\nAdım 3: Tilki lemmingin vücudunu yer; ona yalnızca lemmingin vücudunda depolanmış enerji geçer.\nSık yapılan hata: Besindeki enerjinin tamamının bir üst basamağa aktarıldığını sanmak.\nCevap C."
},
{
  "id": "fen-bz-335",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir akarsuda yosun → su böceği larvası → alabalık → su samuru zinciri vardır. Akarsuya karışan bir tarım ilacı, canlıların vücudunda parçalanmamakta ve atılamamaktadır.\nI. Su samurunun dokusundaki ilaç derişimi, yosundakinden düşüktür.\nII. Alabalığın dokusundaki ilaç derişimi, su böceği larvasınınkinden düşüktür.\nIII. Zincirdeki canlılar içinde en yüksek ilaç derişimi su samurunda bulunur.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "I. yargıyı doğru sayma: ilaç üst basamağa doğru birikir, su samurundaki derişim yosundakinden yüksektir. III. yargıyı da atlama.",
    null,
    "I ve II yargılarını doğru sayma: atılamayan madde yukarı çıkıldıkça birikir, alt basamaktaki canlıda üsttekinden az bulunur.",
    "II. yargıyı doğru sayma: alabalık, larvayı yediği için larvadan daha yüksek derişim taşır."
  ],
  "aciklama": "Atılamayan madde biyolojik birikim yapar: üst basamağa çıkıldıkça canlının dokusundaki derişim artar.\nAdım 1 (I): Su samuru zincirin sonundadır; yosundan çok daha fazla ilaç taşır. I. yargı yanlıştır.\nAdım 2 (II): Alabalık larvayı yer ve larvadaki ilacı da vücudunda biriktirir; derişimi larvadan yüksektir. II. yargı yanlıştır.\nAdım 3 (III): En üstteki canlı su samurudur; en yüksek derişim onda bulunur. III. yargı doğrudur.\nSık yapılan hata: Zararlı maddenin yukarı çıkıldıkça azaldığını sanmak.\nCevap B."
},
{
  "id": "fen-bz-336",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Antarktika'da iki ayrı besin zinciri vardır. Birinci zincirde fitoplankton → krill → mavi balina, ikinci zincirde fitoplankton → krill → penguen → leopar foku yer alır. Her iki zincirin de aynı miktarda fitoplanktondan enerji aldığı kabul ediliyor. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir.\n**Buna göre aşağıdaki yargılardan hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Mavi balinaya, leopar fokuna ulaşandan daha çok enerji ulaşır; çünkü balina zincirde daha önde yer alır.",
    "Leopar fokuna, mavi balinaya ulaşandan daha çok enerji ulaşır; çünkü foku zincirde daha üstte yer alır.",
    "Mavi balinaya ve leopar fokuna ulaşan enerji eşittir; çünkü ikisi de aynı fitoplanktondan enerji alır.",
    "Mavi balinaya, krile ulaşandan daha çok enerji ulaşır; çünkü balina çok iri bir canlıdır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Enerjiyi yukarı doğru artan sanma: üst basamaklara enerji azalarak ulaşır; foku zincirde daha sonra yer aldığı için daha az enerji alır.",
    "Kaynağı aynı diye eşit sanma: foku, balinadan bir basamak daha fazla geçen enerjiyi alır ve her basamakta enerji kaybolur.",
    "Vücut büyüklüğünü enerjiyle karıştırma: balina krili yediği için ona krilden daha az enerji ulaşır; iri olması enerjiyi artırmaz."
  ],
  "aciklama": "Enerji her basamakta bir miktar azalır; zincirde bir canlıya ulaşmadan önce ne kadar çok halka varsa ona o kadar az enerji gelir.\nAdım 1: Balina fitoplanktondan sonra krilden, yani iki halkadan sonra beslenir; 2. basamak tüketicidir.\nAdım 2: Leopar foku krilden sonra penguenden de geçen enerjiyi alır; 3. basamak tüketicidir.\nAdım 3: Bir basamak daha fazla kayıp olduğundan fokuya ulaşan enerji balinaya ulaşandan azdır.\nSık yapılan hata: Vücut büyüklüğünü ya da zincirdeki yüksekliği enerjinin fazlalığı sanmak.\nCevap A."
},
{
  "id": "fen-bz-337",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kuzey Anadolu'daki bir ormanda meşe fidanı → geyik → kurt beslenme ilişkisi vardır. Geyik yalnızca meşe fidanlarıyla, kurt yalnızca geyikle beslenmektedir. Orman yönetimi, bir yılın başında kurtların tamamını bölgeden uzaklaştırıyor. Alandaki canlı sayıları, sonraki üç yıl boyunca her yılın sonunda sayılıp tabloya yazılıyor.\n**Bu verilere göre aşağıdaki yargılardan hangisi doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Sayım zamanı</th><th>Kurt</th><th>Geyik</th><th>Meşe fidanı</th></tr><tr><td>Başlangıç</td><td>14</td><td>90</td><td>1200</td></tr><tr><td>1. yıl sonu</td><td>0</td><td>150</td><td>900</td></tr><tr><td>2. yıl sonu</td><td>0</td><td>240</td><td>520</td></tr><tr><td>3. yıl sonu</td><td>0</td><td>330</td><td>210</td></tr></table>",
  "secenekler": [
    "Kurtlar yok olunca geyik sayısı azalmış, bu yüzden meşe fidanı sayısı artmıştır.",
    "Kurtlar yok olunca geyik sayısı artmış, bu yüzden meşe fidanı sayısı da artmıştır.",
    "Meşe fidanı sayısı azaldığı için geyik sayısı artmış, kurtlar yok olmuştur.",
    "Kurtlar yok olunca geyik sayısı artmış, bu yüzden meşe fidanı sayısı azalmıştır."
  ],
  "dogru": 3,
  "hatalar": [
    "Neden-sonucu ters kurma: kurtlar 0 olduktan sonra geyik sayısı 90'dan 330'a çıkmıştır; avcısı kalmayan geyik azalmaz, çoğalır.",
    "Yön hatası: geyik sayısı artarken meşe fidanı sayısı 1200'den 210'a düşmüştür; çoğalan geyik daha çok fidan yer, fidan artmaz.",
    "Neden-sonucu ters kurma: kurtlar fidanın azalması yüzünden değil, orman yönetimi uzaklaştırdığı için yok olmuştur; geyikteki artışın nedeni avcısının kalmamasıdır.",
    null
  ],
  "aciklama": "Zincirde etki halka halka ilerler ve yön her halkada tersine döner: avcı azalır, av artar, avın yediği azalır.\nAdım 1: Kurt sayısı 14'ten 0'a düşmüştür. Avcısı kalmayan geyik 90 → 150 → 240 → 330 diye artmıştır.\nAdım 2: Geyik arttıkça daha çok fidan yenmiş; meşe fidanı 1200 → 900 → 520 → 210 diye azalmıştır.\nAdım 3: Yani kurtların yokluğu geyiği artırmış, artan geyik de fidanı azaltmıştır.\nSağlama: Geyik ve fidan sayıları tabloda ters yönde değişmiştir.\nSık yapılan hata: Avcı azalınca avın da azalacağını sanmak.\nCevap D."
},
{
  "id": "fen-bz-338",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir araştırmacı, Fırat Nehri'nin bir kolunda parçalanmayan ve atılamayan bir ağır metalin canlılardaki miktarını ölçüp tabloya yazıyor. Tabloda canlılar karışık sırada verilmiştir. Bu dört canlı, her halkanın yalnızca bir önceki halkayla beslendiği tek bir besin zincirini oluşturur.\n**Bu zincirde 1. basamak tüketici olan canlı hangisidir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Dokudaki ağır metal miktarı (birim)</th></tr><tr><td>Sazan</td><td>18</td></tr><tr><td>Karabatak</td><td>76</td></tr><tr><td>Alg</td><td>2</td></tr><tr><td>Zooplankton</td><td>6</td></tr></table>",
  "secenekler": [
    "Alg",
    "Zooplankton",
    "Sazan",
    "Karabatak"
  ],
  "dogru": 1,
  "hatalar": [
    "Üreticiyi tüketici sanma: en az metal taşıyan canlı zincirin başındaki üreticidir; 1. basamak tüketici ondan sonra gelir.",
    null,
    "Basamağı bir yukarı alma: sazan, zooplanktonu yiyen 2. basamak tüketicidir.",
    "Basamağı iki yukarı alma: karabatak, sazanı yiyen 3. basamak tüketicidir."
  ],
  "aciklama": "Atılamayan madde biyolojik birikim yapar: zincirde yukarı çıkıldıkça canlıdaki miktarı artar. Bu yüzden değerleri küçükten büyüğe dizmek zincir sırasını verir.\nAdım 1: Küçükten büyüğe sıralama: alg (2), zooplankton (6), sazan (18), karabatak (76).\nAdım 2: En az metali taşıyan alg zincirin başındaki üreticidir.\nAdım 3: Üreticiyi yiyen zooplankton 1. basamak tüketicidir; sazan 2., karabatak 3. basamaktadır.\nSağlama: Tablodaki sıra ile zincirdeki yükseklik birbirini destekler.\nCevap B."
},
{
  "id": "fen-bz-339",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Sultan Sazlığı'ndaki bir su kanalında canlıların beslenme ilişkisi besin ağıyla gösterilmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; yalnızca doğrudan beslenme ilişkileri dikkate alınacaktır.\n**Bu ağda, doğrudan kendisiyle beslenen canlı sayısı en fazla olan canlı hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 520 165\" role=\"img\" aria-label=\"Alg, sinek larvası, su piresi, ördek, kurbağa, balık ve balıkçıldan oluşan besin ağı\"><defs><marker id=\"ok339\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"49\" y1=\"103\" x2=\"92\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok339)\"/><line x1=\"49\" y1=\"103\" x2=\"92\" y2=\"140\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok339)\"/><line x1=\"219\" y1=\"65\" x2=\"257\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok339)\"/><line x1=\"219\" y1=\"65\" x2=\"257\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok339)\"/><line x1=\"219\" y1=\"65\" x2=\"257\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok339)\"/><line x1=\"187\" y1=\"140\" x2=\"257\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok339)\"/><line x1=\"336\" y1=\"65\" x2=\"417\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok339)\"/><line x1=\"320\" y1=\"120\" x2=\"417\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok339)\"/><rect x=\"5\" y=\"88\" width=\"42\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"26\" y=\"108\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Alg</text><rect x=\"95\" y=\"50\" width=\"122\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"156\" y=\"70\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Sinek larvası</text><rect x=\"95\" y=\"125\" width=\"90\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"140\" y=\"145\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Su piresi</text><rect x=\"260\" y=\"5\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"289\" y=\"25\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ördek</text><rect x=\"260\" y=\"50\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"297\" y=\"70\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kurbağa</text><rect x=\"260\" y=\"105\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"289\" y=\"125\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Balık</text><rect x=\"420\" y=\"75\" width=\"82\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"461\" y=\"95\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Balıkçıl</text></svg>",
  "secenekler": [
    "Sinek larvası",
    "Alg",
    "Su piresi",
    "Kurbağa"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Üreticiyi en çok canlıyı besleyen sanma: algden yalnızca iki ok çıkar, larvadan üç ok çıkar.",
    "Yanlış sayım: su piresinden yalnızca balığa bir ok gider.",
    "Yanlış sayım: kurbağadan yalnızca balıkçıla bir ok gider."
  ],
  "aciklama": "Doğrudan kendisiyle beslenen canlı sayısı, o canlıdan çıkan ok sayısına eşittir.\nAdım 1: Alg'dan iki ok çıkar (sinek larvası, su piresi).\nAdım 2: Sinek larvasından üç ok çıkar (ördek, kurbağa, balık).\nAdım 3: Su piresi, kurbağa ve balıktan birer ok çıkar; ördekten ok çıkmaz.\nSağlama: En çok ok sinek larvasından çıkar.\nCevap A."
},
{
  "id": "fen-bz-340",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Arktik bölgede fitoplankton → zooplankton → kutup morinası → halka foku → kutup ayısı zinciri vardır. Fokların ve ayıların yaşadığı sularda, canlıların vücudundan atılamayan zararlı bir madde bulunmaktadır.\nI. Kutup ayısına ulaşan enerji, kutup morinasına ulaşan enerjiden azdır.\nII. Fitoplanktondan kutup ayısına doğru çıkıldıkça birey sayısı genellikle artar.\nIII. Halka foku dokusundaki zararlı madde derişimi, kutup morinasındakinden düşüktür.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "I. yargıyı atlama: kutup ayısına ulaşan enerji morinadan azdır. II. yargıyı doğru sayma: yukarı çıkıldıkça birey sayısı genellikle azalır.",
    "III. yargıyı doğru sayma: atılamayan madde üst basamakta birikir; halka foku, morinadan daha yüksek derişim taşır.",
    "II ve III yargılarını doğru sayma: birey sayısı yukarı azalır, zararlı madde derişimi ise fokta morinadakinden yüksektir. I. yargı doğrudur."
  ],
  "aciklama": "Zincirde yukarı çıkıldıkça enerji ve birey sayısı azalır, atılamayan zararlı maddenin derişimi artar.\nAdım 1 (I): Ayı, morinadan iki halka sonradır; ona daha az enerji ulaşır. I. yargı doğrudur.\nAdım 2 (II): Birey sayısı yukarı çıkıldıkça genellikle azalır. II. yargı yanlıştır.\nAdım 3 (III): Halka foku morinayı yer ve onun taşıdığı maddeyi de biriktirir; derişimi morinadan yüksektir. III. yargı yanlıştır.\nSık yapılan hata: Enerji ile zararlı madde birikiminin aynı yönde değiştiğini sanmak.\nCevap A."
},
{
  "id": "fen-bz-341",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Uludağ yaylasında canlıların beslenme ilişkisi şemada gösterilmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir.\n**Şahin bu ağda hangi basamaklarda tüketici olarak yer alır?**",
  "gorsel": "<svg viewBox=\"0 0 470 165\" role=\"img\" aria-label=\"Uludağ yaylası besin ağı\"><defs><marker id=\"ok341\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"41\" y1=\"80\" x2=\"92\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok341)\"/><line x1=\"41\" y1=\"80\" x2=\"92\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok341)\"/><line x1=\"171\" y1=\"135\" x2=\"232\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok341)\"/><line x1=\"195\" y1=\"25\" x2=\"397\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok341)\"/><line x1=\"279\" y1=\"135\" x2=\"397\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok341)\"/><rect x=\"5\" y=\"65\" width=\"34\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"22\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ot</text><rect x=\"95\" y=\"10\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"144\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Dağ faresi</text><rect x=\"95\" y=\"120\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"132\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çekirge</text><rect x=\"235\" y=\"120\" width=\"42\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"256\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kuş</text><rect x=\"400\" y=\"65\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"429\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Şahin</text></svg>",
  "secenekler": [
    "1. ve 2. basamak",
    "1. ve 3. basamak",
    "2. ve 3. basamak",
    "3. ve 4. basamak"
  ],
  "dogru": 2,
  "hatalar": [
    "Basamak hesabını bir eksik yapma: dağ faresi 1., şahin 2. basamaktır; kuş üzerinden gelen yolda şahin bir basamak daha yukarıdadır.",
    "Kısa yolu yanlış sayma: şahin dağ faresini yediğinde 2. basamaktadır; ağda 1. basamakta bulunmaz.",
    null,
    "Üreticiyi de basamak sayma: ot basamak almaz; sayıma üreticiyi katınca bütün basamaklar bir kayar."
  ],
  "aciklama": "Tüketici basamakları üreticiden sonra sayılır. Bir canlı ağda farklı uzunlukta yollardan beslenebiliyorsa birden fazla basamakta bulunur.\nAdım 1: Ot → dağ faresi → şahin yolunda fare 1., şahin 2. basamaktadır.\nAdım 2: Ot → çekirge → kuş → şahin yolunda çekirge 1., kuş 2., şahin 3. basamaktadır.\nAdım 3: Şahin hem 2. hem 3. basamakta yer alır.\nSağlama: Kısa yol alt basamağı, uzun yol üst basamağı verir.\nCevap C."
},
{
  "id": "fen-bz-342",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Trakya'daki bir ayçiçeği tarlasında ayçiçeği → çekirge → tarla kuşu → şahin zinciri vardır. Çekirge yalnızca ayçiçeğiyle, tarla kuşu yalnızca çekirgeyle, şahin yalnızca tarla kuşuyla beslenmektedir. Bir salgın yüzünden tarla kuşlarının hepsi ölüyor.\n**Bu durumda çekirge, ayçiçeği ve şahin sayılarında beklenen değişim aşağıdakilerden hangisinde doğru verilmiştir?**",
  "gorsel": "<svg viewBox=\"0 0 434 60\" role=\"img\" aria-label=\"Ayçiçeği, çekirge, tarla kuşu ve şahin besin zinciri\"><defs><marker id=\"ok342\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"82\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"51\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ayçiçeği</text><line x1=\"94\" y1=\"25\" x2=\"124\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok342)\"/><rect x=\"126\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"163\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çekirge</text><line x1=\"202\" y1=\"25\" x2=\"232\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok342)\"/><rect x=\"234\" y=\"10\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"283\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tarla kuşu</text><line x1=\"334\" y1=\"25\" x2=\"364\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok342)\"/><rect x=\"366\" y=\"10\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"395\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Şahin</text></svg>",
  "secenekler": [
    "Çekirge artar, ayçiçeği artar, şahin azalır.",
    "Çekirge azalır, ayçiçeği artar, şahin azalır.",
    "Çekirge artar, ayçiçeği azalır, şahin artar.",
    "Çekirge artar, ayçiçeği azalır, şahin azalır."
  ],
  "dogru": 3,
  "hatalar": [
    "Zincirde yönü karıştırma: çoğalan çekirge daha çok ayçiçeği yer, bu yüzden ayçiçeği artmaz azalır.",
    "Neden-sonucu ters kurma: tarla kuşu çekirgenin avcısıdır; avcısı ölünce çekirge azalmaz, artar.",
    "Son halkayı atlama: şahinin tek besini tarla kuşudur; tarla kuşu yok olunca şahin besinsiz kalır, artmaz azalır.",
    null
  ],
  "aciklama": "Etki halka halka ilerler: avcının yok olması avı artırır, avın yediği canlıyı azaltır; besini yok olan canlı ise azalır.\nAdım 1: Tarla kuşları ölünce çekirgenin avcısı kalmaz; çekirge artar.\nAdım 2: Çoğalan çekirge daha çok ayçiçeği yer; ayçiçeği azalır.\nAdım 3: Şahinin tek besini tarla kuşudur; besini bitince şahin azalır.\nSık yapılan hata: Aynı yönün bütün halkalara geçtiğini sanmak; etki avcıya doğru ve besine doğru farklı yönlerde ilerler.\nCevap D."
},
{
  "id": "fen-bz-343",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kızıldeniz'deki bir mercan resifinde fitoplankton → zooplankton → resif balığı → barakuda zinciri vardır. Zincirdeki canlıların birey sayısı ve ortalama kütleleri tabloda verilmiştir.\nI. Basamak yükseldikçe birey sayısı azalmış, ortalama kütle artmıştır.\nII. En çok enerji, ortalama kütlesi en büyük olan barakudadadır.\nIII. Birey sayısı en az olan canlıya ulaşan enerji de en azdır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Birey sayısı</th><th>Ortalama kütle (g)</th></tr><tr><td>Fitoplankton</td><td>3000000</td><td>0,001</td></tr><tr><td>Zooplankton</td><td>40000</td><td>0,02</td></tr><tr><td>Resif balığı</td><td>600</td><td>150</td></tr><tr><td>Barakuda</td><td>12</td><td>6000</td></tr></table>",
  "secenekler": [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "III. yargıyı atlama: en az enerji ulaşan canlı zincirin sonundaki barakudadır; birey sayısı da en az ondadır. III. yargı doğrudur.",
    null,
    "II. yargıyı doğru sayma: enerji kütleyle değil basamakla azalır; barakudaya en az enerji ulaşır. I. yargıyı atlama: tablo bunu gösterir.",
    "II. yargıyı doğru sayma: barakuda kütlece en büyük olsa da ona ulaşan enerji en azdır."
  ],
  "aciklama": "Zincirde yukarı çıkıldıkça ulaşan enerji ve birey sayısı azalır, vücut büyüklüğü genellikle artar.\nAdım 1 (I): Tabloda birey sayısı 3000000 → 12 azalmış, kütle 0,001 g → 6000 g artmıştır. I. yargı doğrudur.\nAdım 2 (II): Kütlesi en büyük olan barakuda en üsttedir ve ona en az enerji ulaşır. II. yargı yanlıştır.\nAdım 3 (III): Birey sayısı en az olan barakuda zincirin sonundadır; ona ulaşan enerji de en azdır. III. yargı doğrudur.\nSık yapılan hata: Büyük canlıya çok enerji ulaştığını sanmak.\nCevap B."
},
{
  "id": "fen-bz-344",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Gediz Deltası'ndaki bir sulak alanda canlıların beslenme ilişkisi besin ağıyla gösterilmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir.\n**Bu ağda kaç canlı etçil tüketicidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 170\" role=\"img\" aria-label=\"Gediz Deltası besin ağı\"><defs><marker id=\"ok344\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"105\" y1=\"55\" x2=\"132\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok344)\"/><line x1=\"105\" y1=\"55\" x2=\"237\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok344)\"/><line x1=\"195\" y1=\"110\" x2=\"237\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok344)\"/><line x1=\"195\" y1=\"110\" x2=\"237\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok344)\"/><line x1=\"195\" y1=\"110\" x2=\"237\" y2=\"145\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok344)\"/><line x1=\"316\" y1=\"145\" x2=\"357\" y2=\"145\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok344)\"/><line x1=\"300\" y1=\"75\" x2=\"467\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok344)\"/><line x1=\"420\" y1=\"145\" x2=\"467\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok344)\"/><rect x=\"5\" y=\"40\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"54\" y=\"60\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Su bitkisi</text><rect x=\"135\" y=\"95\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"164\" y=\"115\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Larva</text><rect x=\"240\" y=\"5\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"269\" y=\"25\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ördek</text><rect x=\"240\" y=\"60\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"269\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Balık</text><rect x=\"240\" y=\"130\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"277\" y=\"150\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kurbağa</text><rect x=\"360\" y=\"130\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"389\" y=\"150\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yılan</text><rect x=\"470\" y=\"60\" width=\"82\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"511\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Balıkçıl</text></svg>",
  "secenekler": [
    "1",
    "2",
    "3",
    "4"
  ],
  "dogru": 3,
  "hatalar": [
    "Yalnızca zincirin sonundaki canlıyı sayma: balıkçıl dışında da yalnızca hayvanla beslenen canlılar vardır.",
    "Yalnızca larvayı yiyenleri sayma: balık ve kurbağa etçildir, ama yılan ve balıkçıl da yalnızca hayvanlarla beslenir.",
    "Bir etçili atlama: balık, kurbağa, yılan ve balıkçıl yalnızca hayvan yer; biri sayılmamıştır.",
    null
  ],
  "aciklama": "Etçil, yalnızca hayvanlarla beslenen tüketicidir; canlının ne yediğine ok yönüne göre bakılır.\nAdım 1: Larva yalnızca su bitkisini yer; otçuldur. Ördek hem su bitkisini hem larvayı yer; hepçildir.\nAdım 2: Balık ve kurbağa yalnızca larvayı yer; etçildir.\nAdım 3: Yılan yalnızca kurbağayı, balıkçıl yalnızca balık ve yılanı yer; ikisi de etçildir.\nSağlama: Etçiller balık, kurbağa, yılan ve balıkçıldır; toplam 4.\nCevap D."
},
{
  "id": "fen-bz-345",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kars'taki bir çayırda yaşayan canlıların yediği besinler tabloda verilmiştir. Tabloda yazan besinlerin dışında besin tüketilmemektedir.\n**Tabloya göre doğrudan bitkisel besinle beslenerek 1. basamak tüketici olabilen kaç canlı vardır?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Yediği besinler</th></tr><tr><td>Çekirge</td><td>Çayır otu</td></tr><tr><td>Karınca</td><td>Tohum, yaprak biti</td></tr><tr><td>Tarla kuşu</td><td>Tohum, çekirge</td></tr><tr><td>Kertenkele</td><td>Çekirge, karınca</td></tr><tr><td>Çakal</td><td>Tarla kuşu, kertenkele</td></tr><tr><td>İnek</td><td>Çayır otu</td></tr></table>",
  "secenekler": [
    "2",
    "3",
    "4",
    "5"
  ],
  "dogru": 2,
  "hatalar": [
    "Hepçilleri atlama: yalnızca otçulları saymış; tohum yiyen karınca ve tarla kuşu da bitkisel besin yediği için 1. basamaktadır.",
    "Bir hepçili atlama: karınca ve tarla kuşunun ikisi de tohum yer; ikisi de sayılmalıdır.",
    null,
    "Etçil kertenkeleyi sayma: kertenkele yalnızca hayvan yer, 1. basamakta değildir."
  ],
  "aciklama": "Üreticiyi (bitkisel besini) doğrudan yiyen canlı, otçul da olsa hepçil de olsa 1. basamak tüketicidir.\nAdım 1: Çekirge ve inek çayır otu yer; otçuldur, 1. basamaktadır.\nAdım 2: Karınca ve tarla kuşu tohum yer (bitkisel besin); hepçil olarak 1. basamakta da yer alırlar.\nAdım 3: Kertenkele yalnızca hayvan, çakal da yalnızca hayvan yer; bunlar 1. basamak değildir.\nSağlama: 2 + 2 = 4 canlı vardır.\nCevap C."
},
{
  "id": "fen-bz-346",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Açık denizde fitoplankton → zooplankton → sardalya → ton balığı → orka besin zinciri bulunmaktadır. Bölgeye, canlıların vücudundan atılamayan zararlı bir madde karışmıştır.\n**Buna göre aşağıdaki yargılardan hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Ton balığına ulaşan enerji sardalyadakinden azdır; dokusundaki zararlı madde derişimi ise sardalyadakinden yüksektir.",
    "Orkaya ulaşan enerji ton balığına ulaşandan fazladır; dokusundaki zararlı madde derişimi de ondan yüksektir.",
    "Sardalyaya ulaşan enerji zooplanktondan azdır; dokusundaki zararlı madde derişimi ise zooplanktondan düşüktür.",
    "Fitoplanktona ulaşan enerji en azdır; dokusundaki zararlı madde derişimi ise en yüksektir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Enerjiyi yukarı doğru artan sanma: en üstteki orkaya ulaşan enerji ton balığına ulaşandan azdır.",
    "Birikimi tersine yorumlama: sardalya zooplanktonu yediği için zooplanktondan daha yüksek derişim taşır.",
    "Her iki yönü tersine çevirme: üretici en çok enerjiye sahiptir, atılamayan maddeyi ise en az taşır."
  ],
  "aciklama": "Zincirde yukarı çıkıldıkça enerji azalır, atılamayan zararlı madde birikir ve derişimi artar.\nAdım 1: Ton balığı sardalyadan sonra gelir; ona daha az enerji ulaşır.\nAdım 2: Ton balığı çok sayıda sardalya yediği için onların taşıdığı maddeyi de biriktirir; derişimi sardalyadan yüksektir.\nAdım 3: Diğer şıklarda enerji ya da derişim yönü yanlış verilmiştir.\nSık yapılan hata: Enerji ile zararlı madde birikiminin aynı yönde değiştiğini sanmak.\nCevap A."
},
{
  "id": "fen-bz-347",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Akdeniz çevresindeki bir makilikte yakalanan canlıların mide içerikleri incelenmiş ve tabloya yazılmıştır. Canlıların mide içeriğinde yazılanlar dışında besin yemediği kabul edilmektedir.\nI. Fare, hepçildir.\nII. Şahin, hem 2. hem 3. basamak tüketicisi olarak yer alır.\nIII. Kertenkele, 1. basamak tüketicidir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Midesinde bulunan besin</th></tr><tr><td>Böcek</td><td>Yaprak parçası</td></tr><tr><td>Fare</td><td>Tohum ve böcek</td></tr><tr><td>Kertenkele</td><td>Böcek</td></tr><tr><td>Şahin</td><td>Fare ve kertenkele</td></tr></table>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "II. yargıyı atlama: fare 1. basamakta da 2. basamakta da yer aldığı için onu yiyen şahin hem 2. hem 3. basamaktadır.",
    "III. yargıyı doğru sayma: kertenkele böceği yer; böcek 1. basamak olduğundan kertenkele 2. basamak tüketicidir.",
    null,
    "III. yargıyı doğru sayma: kertenkele 2. basamak tüketicidir. I. yargıyı atlama: fare tohum ve böcek yediği için hepçildir."
  ],
  "aciklama": "Beslenme türünü tablodaki besinlere bakarak belirleriz; basamak sayımı üreticiden sonra başlar.\nAdım 1 (I): Fare tohum (bitki) ve böcek (hayvan) yer; hepçildir. I. yargı doğrudur.\nAdım 2 (II): Böcek yaprak yer (1. basamak). Fare tohumla 1., böcekle 2. basamaktadır. Şahin fareyi yerken 2. ya da 3., kertenkeleyi yerken 3. basamaktadır; yani 2. ve 3. basamaktadır. II. yargı doğrudur.\nAdım 3 (III): Kertenkele 1. basamak olan böceği yer; kendisi 2. basamaktır. III. yargı yanlıştır.\nSık yapılan hata: Bir canlıyı tek basamağa sabitlemek.\nCevap C."
},
{
  "id": "fen-bz-348",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir bataklıkta yaşayan K, L, M, N ve P canlılarının beslenmesi şöyle belirlenmiştir: M besinini kendisi üretir. K yalnızca M ile beslenir. N yalnızca K ile beslenir. L hem M ile hem N ile beslenir. P yalnızca L ile beslenir.\n**P canlısı için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Otçuldur ve 2. basamak tüketicisidir.",
    "Etçildir ve hem 2. hem 4. basamak tüketicisi olarak yer alır.",
    "Hepçildir ve hem 2. hem 4. basamak tüketicisi olarak yer alır.",
    "Etçildir ve yalnızca 3. basamak tüketicisidir."
  ],
  "dogru": 1,
  "hatalar": [
    "Beslenme türünü karıştırma: P bir bitkiyle değil, L adlı hayvanla beslenir; otçul değildir.",
    null,
    "Hepçili etçil karıştırma: P yalnızca L ile beslenir ve L bir hayvandır; bitki yemediği için hepçil değildir.",
    "Tek yolu görme: L hem M hem N ile beslendiği için hem 1. hem 3. basamaktadır; P de 2. ve 4. basamaklarda yer alır."
  ],
  "aciklama": "Önce üreticiden başlayıp her canlının basamağını bulmak gerekir.\nAdım 1: M üreticidir. K, M'yi yer; 1. basamak. N, K'yi yer; 2. basamak.\nAdım 2: L, M'yi yerken 1., N'yi yerken 3. basamaktadır. L hem bitki hem hayvan yediği için hepçildir.\nAdım 3: P yalnızca L'yi yer; L hayvan olduğu için P etçildir. P, L'nin 1. basamak olduğu yolda 2., 3. basamak olduğu yolda 4. basamaktadır.\nSağlama: P yalnızca hayvan yiyen etçildir; basamakları 2 ve 4'tür.\nCevap B."
},
{
  "id": "fen-bz-349",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Toros Dağları'nın yüksek kesimindeki bir alpin çayırda bir sayım yapılmıştır. Piramitte her basamak bir canlı grubunu gösterir; basamak genişlikleri yalnızca sıralamayı gösterir, birey sayıları ise basamakların yanında yazılmıştır.\n**Bu piramide göre aşağıdakilerden hangisi __söylenemez__?**",
  "gorsel": "<svg viewBox=\"0 0 560 180\" role=\"img\" aria-label=\"Otlar, çekirge, kertenkele ve kartaldan oluşan birey sayısı piramidi\"><defs><marker id=\"ok349\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"130\" y=\"4\" width=\"40\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"29\" font-size=\"14\" fill=\"currentColor\">Kartal: 3 birey</text><rect x=\"105\" y=\"48\" width=\"90\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"73\" font-size=\"14\" fill=\"currentColor\">Kertenkele: 36 birey</text><rect x=\"65\" y=\"92\" width=\"170\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"117\" font-size=\"14\" fill=\"currentColor\">Çekirge: 480 birey</text><rect x=\"15\" y=\"136\" width=\"270\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"161\" font-size=\"14\" fill=\"currentColor\">Otlar: 7200 birey</text></svg>",
  "secenekler": [
    "Çekirge sayısı, kertenkele sayısından fazladır.",
    "Kartal, birey sayısı en az olan canlıdır.",
    "Kertenkelenin vücudu genellikle çekirgeninkinden büyüktür.",
    "Kartala ulaşan enerji, kertenkeleye ulaşandan fazladır."
  ],
  "dogru": 3,
  "hatalar": [
    "Doğru yargıyı yanlış sanma: piramitte çekirge basamağı kertenkeleninkinden geniştir ve 480 > 36 olduğundan bu yargı söylenebilir.",
    "Doğru yargıyı yanlış sanma: kartal 3 bireyle en dar basamaktadır; bu yargı söylenebilir.",
    "Doğru yargıyı yanlış sanma: yukarı çıkıldıkça birey sayısı azalır, vücut büyüklüğü genellikle artar; bu yargı söylenebilir.",
    null
  ],
  "aciklama": "Soru \"söylenemez\" diyor; yani üç şık doğru, tek şık yanlıştır. Piramitte yukarı çıkıldıkça birey sayısı ve enerji azalır, vücut büyüklüğü genellikle artar.\nAdım 1: 480 > 36 olduğundan çekirge sayısı kertenkele sayısından fazladır; söylenebilir.\nAdım 2: En dar basamak kartaldır (3 birey); söylenebilir. Kertenkelenin çekirgeden büyük olması da genel durumdur; söylenebilir.\nAdım 3: Kartal en üst basamaktadır; ona ulaşan enerji kertenkeleye ulaşandan azdır. Bu yüzden \"kartala daha çok enerji ulaşır\" söylenemez.\nSık yapılan hata: Kökteki olumsuzluğu (söylenemez) gözden kaçırıp doğru şıkkı seçmek.\nCevap D."
},
{
  "id": "fen-bz-350",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Isparta'daki bir elma bahçesinde elma çiçeği → arı → arıkuşu → atmaca zinciri belirlenmiştir. Arı çiçeğin nektarını toplar. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir. Dört öğrenci zincir hakkında yorum yapmıştır.\n**Hangi öğrencinin yorumu doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Elif: Arıkuşu, arıyı yediği için 2. basamak tüketicidir.",
    "Burak: Arı, bal yaptığı için zincirde üretici sayılır.",
    "Can: Atmacaya ulaşan enerji, arıya ulaşandan fazladır.",
    "Deniz: Ok, arıdan çiçeğe doğru çizilmelidir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Üretici ölçütünü karıştırma: besini kendisi yapan canlı üreticidir; arı çiçekten besin alır, bu yüzden 1. basamak tüketicidir.",
    "Enerjiyi yukarı doğru artan sanma: her basamakta enerji azalır, atmacaya arıdan daha az enerji ulaşır.",
    "Ok yönünü ters kurma: ok yenen canlıdan yiyene çizilir; çiçekten arıya doğru olmalıdır."
  ],
  "aciklama": "Üretici besinini kendisi yapar; tüketiciler hazır besinle beslenir. Oklar yenenden yiyene çizilir.\nAdım 1: Elma çiçeği üreticidir; nektarını toplayan arı 1. basamak tüketicidir.\nAdım 2: Arıyı yiyen arıkuşu 2., arıkuşunu yiyen atmaca 3. basamak tüketicidir.\nAdım 3: Enerji her basamakta azalır ve ok çiçekten arıya doğru çizilir; diğer yorumlar bu yüzden yanlıştır.\nSık yapılan hata: Bir ürünü yapan canlıyı (bal yapan arıyı) üretici sanmak.\nCevap A."
},
{
  "id": "fen-bz-351",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Amazon yağmur ormanında yaşayan altı canlının yediği besinler tabloda verilmiştir. Tabloda yazılanlar dışında besin tüketilmediği kabul edilir.\n**Bu tabloya göre ağda birden fazla basamakta tüketici olarak yer alan canlılar hangileridir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Yediği besinler</th></tr><tr><td>Tapir</td><td>Yaprak, genç sürgün</td></tr><tr><td>Papağan</td><td>Meyve, tohum</td></tr><tr><td>Böcek</td><td>Yaprak</td></tr><tr><td>Kurbağa</td><td>Böcek</td></tr><tr><td>Maymun</td><td>Meyve, böcek</td></tr><tr><td>Jaguar</td><td>Tapir, kurbağa</td></tr></table>",
  "secenekler": [
    "Yalnızca maymun",
    "Papağan ve maymun",
    "Kurbağa ve jaguar",
    "Maymun ve jaguar"
  ],
  "dogru": 3,
  "hatalar": [
    "Bir canlıyı atlama: jaguar tapiri yerken 2., kurbağayı yerken 3. basamaktadır; o da iki basamakta yer alır.",
    "Papağan iki basamakta yer almaz: meyve ve tohum bitkisel besindir, papağan yalnızca 1. basamaktadır.",
    "Kurbağayı iki basamaklı sanma: kurbağa yalnızca böceği yer, bu yolda yalnızca 2. basamaktadır.",
    null
  ],
  "aciklama": "Bir canlı, besinleri farklı basamaklarda olduğu zaman birden fazla basamakta yer alır.\nAdım 1: Tapir, böcek ve papağan 1. basamak; kurbağa böceği yediği için 2. basamaktır.\nAdım 2: Maymun meyveyi yerken 1., böceği yerken 2. basamaktadır.\nAdım 3: Jaguar tapiri yerken 2., kurbağayı yerken 3. basamaktadır.\nSağlama: Papağanın iki besini de bitkisel olduğundan tek basamağı vardır.\nCevap D."
},
{
  "id": "fen-bz-352",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kayalık bir kıyıda fitoplanktonla beslenen midyeler ve midyeleri yiyen deniz yıldızları yaşar. Bir araştırmacı, aynı büyüklükteki iki kıyı bölümünden birinde deniz yıldızlarını düzenli olarak toplayıp uzaklaştırıyor, diğerine dokunmuyor. Bir yıl sonra yapılan sayımın sonuçları tabloda verilmiştir.\n**Bu verilere göre aşağıdaki sonuçlardan hangisine ulaşılabilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Bölüm</th><th>Deniz yıldızı</th><th>Başlangıçta midye</th><th>Bir yıl sonra midye</th></tr><tr><td>A (dokunulmadı)</td><td>Var</td><td>100</td><td>108</td></tr><tr><td>B (yıldızlar uzaklaştırıldı)</td><td>Yok</td><td>100</td><td>340</td></tr></table>",
  "secenekler": [
    "Deniz yıldızı bulunan bölümde midye sayısı, deniz yıldızları yüzünden belirgin biçimde artmıştır.",
    "Midye sayısı iki bölümde de aynı kalmıştır; çünkü deniz yıldızı midye sayısını etkilemez.",
    "Deniz yıldızı bulunmayan bölümde midye sayısı, avcısı kalmadığı için belirgin biçimde artmıştır.",
    "Deniz yıldızı bulunmayan bölümde midyeler, deniz yıldızlarıyla beslendikleri için çoğalmıştır."
  ],
  "dogru": 2,
  "hatalar": [
    "Neden-sonucu ters kurma: A bölümünde midye sayısı neredeyse sabittir; belirgin artış deniz yıldızı olmayan B bölümündedir.",
    "Verileri yanlış okuma: B bölümünde midye 100 iken 340 olmuştur; sayı sabit değildir.",
    null,
    "Beslenme yönünü ters kurma: deniz yıldızları midyeleri yer; midyeler deniz yıldızlarıyla beslenmez."
  ],
  "aciklama": "Avcı ortamdan çıkarılınca avın sayısı artar. Deney grubuyla (avcısı uzaklaştırılan) kontrol grubunu (dokunulmayan) karşılaştırırız.\nAdım 1: Kontrol grubu olan A bölümünde midye sayısı 100 → 108 olmuş; değişim çok az.\nAdım 2: B bölümünde deniz yıldızı yok ve midye sayısı 100 → 340 olmuş; belirgin artış var.\nAdım 3: Aradaki tek fark deniz yıldızıdır; avcı olan deniz yıldızı midye sayısını sınırlar.\nSık yapılan hata: Avcı kalkınca avın azalacağını sanmak.\nCevap C."
},
{
  "id": "fen-bz-353",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir kayalık kıyıda yosun → salyangoz → yengeç → ahtapot zinciri vardır. Her canlı yalnızca kendinden önceki halkayla beslenir. Aşırı avlanma yüzünden yengeçlerin hepsi yakalanıyor.\nI. Yengeç, 1. basamak tüketicidir.\nII. Salyangoz sayısı artma eğilimine girer.\nIII. Yosun sayısı azalma eğilimine girer.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 410 60\" role=\"img\" aria-label=\"Yosun, salyangoz, yengeç ve ahtapot besin zinciri\"><defs><marker id=\"ok353\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"39\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yosun</text><line x1=\"70\" y1=\"25\" x2=\"100\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok353)\"/><rect x=\"102\" y=\"10\" width=\"90\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"147\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Salyangoz</text><line x1=\"194\" y1=\"25\" x2=\"224\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok353)\"/><rect x=\"226\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"259\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yengeç</text><line x1=\"294\" y1=\"25\" x2=\"324\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok353)\"/><rect x=\"326\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"363\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ahtapot</text></svg>",
  "secenekler": [
    "Yalnız II",
    "II ve III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "III. yargıyı atlama: salyangoz artınca yosun daha çok yenir ve yosun azalma eğilimine girer; III. yargı da doğrudur.",
    null,
    "I. yargıyı doğru sayma: yengeç salyangozu yediği için 2. basamak tüketicidir. III. yargıyı atlama.",
    "I. yargıyı doğru sayma: yengeç 2. basamaktadır. II. yargıyı atlama: yengeç yok olunca salyangozun avcısı kalmaz, salyangoz artma eğilimine girer."
  ],
  "aciklama": "Avcı ortadan kalkınca avı artma eğilimine girer; çoğalan av, yediği canlıyı daha çok tüketir. Tüketici basamakları üreticiden sonra sayılır.\nAdım 1 (I): Salyangoz üretici olan yosunu yer; 1. basamak tüketicidir. Salyangozu yiyen yengeç 2. basamak tüketicidir. I. yargı yanlıştır.\nAdım 2 (II): Yengeçler yakalanınca salyangozun avcısı kalmaz; salyangoz sayısı artma eğilimine girer. II. yargı doğrudur.\nAdım 3 (III): Çoğalan salyangozlar daha çok yosun yer; yosun azalma eğilimine girer. III. yargı doğrudur.\nSık yapılan hata: Yengeci salyangozla aynı basamakta saymak.\nCevap B."
},
{
  "id": "fen-bz-354",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kaz Dağları'ndaki bir ormanda kayın palamudunu fare ve sincap yer. Sincabı ve fareyi baykuş, fareyi ayrıca tilki avlar. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir. Bölgeden tilkilerin hepsi uzaklaştırılıyor.\n**Bu durumda aşağıdaki yargılardan hangisi kesinlikle doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 380 160\" role=\"img\" aria-label=\"Kayın palamudu, sincap, fare, baykuş ve tilki besin ağı\"><defs><marker id=\"ok354\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"137\" y1=\"80\" x2=\"167\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok354)\"/><line x1=\"137\" y1=\"80\" x2=\"167\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok354)\"/><line x1=\"238\" y1=\"25\" x2=\"287\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok354)\"/><line x1=\"222\" y1=\"135\" x2=\"287\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok354)\"/><line x1=\"222\" y1=\"135\" x2=\"287\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok354)\"/><rect x=\"5\" y=\"65\" width=\"130\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"70\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kayın palamudu</text><rect x=\"170\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"203\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Sincap</text><rect x=\"170\" y=\"120\" width=\"50\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"195\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Fare</text><rect x=\"290\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"323\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Baykuş</text><rect x=\"290\" y=\"120\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"319\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tilki</text></svg>",
  "secenekler": [
    "Fareyle beslenen canlı olarak yalnızca baykuş kalır.",
    "Baykuş sayısı artar; çünkü fareler baykuşun tek besinidir.",
    "Sincap sayısı azalır; çünkü tilki sincabın avcısıdır.",
    "Kayın palamudu kesinlikle azalır; çünkü fareler artarak palamutu yer."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Tek besini sanma: baykuş sincapla da beslenir; fareler artsa da baykuşun artması garanti değildir.",
    "Beslenme ilişkisini yanlış kurma: tilki sincapla beslenmez, ağda tilkiden sincaba ya da sincaptan tilkiye ok yoktur.",
    "Kesin sanma: fareler artarsa palamut azalabilir, ama baykuşlar da artabilir; sonuç kesin değildir."
  ],
  "aciklama": "\"Kesinlikle\" kökünde yalnızca şemadan zorunlu olarak çıkan sonuç doğrudur.\nAdım 1: Fareye giden oklara bakılır: fareyi yalnızca baykuş ve tilki yer.\nAdım 2: Tilkiler uzaklaştırılınca fareyle beslenen canlı olarak yalnızca baykuş kalır; bu kesindir.\nAdım 3: Baykuşun, sincabın ve palamutun sayısındaki değişim başka etkenlere de bağlı olduğundan kesin değildir.\nSık yapılan hata: \"Olabilir\" denebilecek bir sonucu kesin sanmak.\nCevap A."
},
{
  "id": "fen-bz-355",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir bahçede kullanılan ilaç, canlıların vücudunda parçalanmamakta ve atılamamaktadır. Bahçedeki elma yaprağı → tırtıl → ardıç kuşu → atmaca zincirinde her canlıya ulaşan göreli enerji ve canlıların dokularındaki ilaç derişimi tabloda verilmiştir.\n**Bu tabloya göre aşağıdaki yargılardan hangisi doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Göreli enerji</th><th>İlaç derişimi</th></tr><tr><td>Elma yaprağı</td><td>1000</td><td>1,2</td></tr><tr><td>Tırtıl</td><td>180</td><td>4,5</td></tr><tr><td>Ardıç kuşu</td><td>31</td><td>13</td></tr><tr><td>Atmaca</td><td>6</td><td>38</td></tr></table>",
  "secenekler": [
    "Basamak yükseldikçe enerji azalmış, ilaç derişimi artmıştır; yani iki değer zıt yönde değişmiştir.",
    "Basamak yükseldikçe enerji ile ilaç derişimi birlikte artmıştır.",
    "Basamak yükseldikçe enerji ile ilaç derişimi birlikte azalmıştır.",
    "Basamak yükseldikçe enerji artmış, ilaç derişimi azalmıştır; yani iki değer zıt yönde değişmiştir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Enerjiyi yukarı doğru artan sanma: tabloda enerji 1000 → 6 azalmıştır.",
    "Birikimi yanlış okuma: ilaç derişimi 1,2 → 38 artmıştır; atılamayan madde yukarı çıkıldıkça birikir.",
    "İki değişimi de tersine okuma: enerji azalır, ilaç derişimi artar; yalnızca \"zıt yönde\" ifadesi doğrudur."
  ],
  "aciklama": "Tabloda sütunları ayrı ayrı yukarı doğru okuruz.\nAdım 1: Enerji 1000 → 180 → 31 → 6 olarak azalıyor.\nAdım 2: İlaç derişimi 1,2 → 4,5 → 13 → 38 olarak artıyor (biyolojik birikim).\nAdım 3: Enerji azalırken derişim arttığı için iki değer zıt yönde değişir.\nSık yapılan hata: Enerji ile zararlı madde birikimini aynı yönde sanmak.\nCevap A."
},
{
  "id": "fen-bz-356",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Afrika savanında ot, çekirge, kertenkele, kartal, zebra ve aslandan oluşan bir besin ağı incelenmiştir. Çekirge ve zebra yalnızca otla, kertenkele yalnızca çekirgeyle, kartal yalnızca kertenkeleyle, aslan ise yalnızca zebrayla beslenmektedir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir. Bir hastalık yüzünden kartalların çoğu ölüyor; zebra ve aslan sayıları bu süre içinde değişmiyor.\n**Bu durumun etkileri, kartaldan başlayarak aşağıdakilerden hangisinde doğru sıralanmıştır?**",
  "gorsel": "<svg viewBox=\"0 0 430 160\" role=\"img\" aria-label=\"Savan besin ağı\"><defs><marker id=\"ok356\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"41\" y1=\"80\" x2=\"92\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok356)\"/><line x1=\"41\" y1=\"80\" x2=\"92\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok356)\"/><line x1=\"171\" y1=\"25\" x2=\"207\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok356)\"/><line x1=\"310\" y1=\"25\" x2=\"347\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok356)\"/><line x1=\"155\" y1=\"135\" x2=\"207\" y2=\"135\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok356)\"/><rect x=\"5\" y=\"65\" width=\"34\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"22\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ot</text><rect x=\"95\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"132\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çekirge</text><rect x=\"95\" y=\"120\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"124\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zebra</text><rect x=\"210\" y=\"10\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"259\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kertenkele</text><rect x=\"350\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"383\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kartal</text><rect x=\"210\" y=\"120\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"239\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Aslan</text></svg>",
  "secenekler": [
    "Kertenkele azalır, çekirge artar, ot azalır.",
    "Kertenkele artar, çekirge artar, ot azalır.",
    "Kertenkele azalır, çekirge azalır, ot artar.",
    "Kertenkele artar, çekirge azalır, ot artar."
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters kurma: avcısı azalan kertenkele azalmaz, artar; sonraki halkaların hepsi bu yüzden ters çıkar.",
    "Zincirin ikinci halkasını yanlış okuma: artan kertenkele daha çok çekirge yer, çekirge artmaz azalır.",
    "Birinci halkayı yanlış okuma: kartallar azalınca kertenkele azalmaz, artar; yönün her halkada tersine döndüğü doğrudur ama başlangıç yönü ters alınmıştır.",
    null
  ],
  "aciklama": "Avcı azalırsa avı artar; avın yediği canlı azalır; onun yediği canlı da artar. Yön her halkada tersine döner.\nAdım 1: Kartal azalınca kertenkelenin avcısı azalır; kertenkele artar.\nAdım 2: Kertenkele artınca daha çok çekirge yenir; çekirge azalır.\nAdım 3: Çekirge azalınca otun üzerindeki yenme baskısı azalır; ot artar. Zebra ve aslan zincirin ayrı kolunda olduğu için bu sonucu değiştirmez.\nSağlama: Başlangıçtan itibaren yönler artar, azalır, artar şeklinde sıralanır.\nCevap D."
},
{
  "id": "fen-bz-357",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Çıldır Gölü'nde alg → su piresi → sazan → karabatak zinciri vardır. Göle karışan bir tarım ilacı, canlıların vücudunda parçalanmamakta ve atılamamaktadır. Aşağıdaki enerji piramidinde, bir basamağa ulaşan enerji azaldıkça basamak daha dar çizilmiştir. Tabloda ise canlıların dokularındaki ilaç derişimi karışık sırada verilmiştir.\n**Bu verilere göre aşağıdaki yargılardan hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 180\" role=\"img\" aria-label=\"Alg, su piresi, sazan ve karabataktan oluşan enerji piramidi\"><defs><marker id=\"ok357\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"130\" y=\"4\" width=\"40\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"29\" font-size=\"14\" fill=\"currentColor\">Karabatak</text><rect x=\"100\" y=\"48\" width=\"100\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"73\" font-size=\"14\" fill=\"currentColor\">Sazan</text><rect x=\"55\" y=\"92\" width=\"190\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"117\" font-size=\"14\" fill=\"currentColor\">Su piresi</text><rect x=\"15\" y=\"136\" width=\"270\" height=\"40\" rx=\"4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"300\" y=\"161\" font-size=\"14\" fill=\"currentColor\">Alg</text></svg><table class=\"tablo\"><tr><th>Canlı</th><th>İlaç derişimi (birim)</th></tr><tr><td>Su piresi</td><td>7</td></tr><tr><td>Karabatak</td><td>52</td></tr><tr><td>Alg</td><td>2</td></tr><tr><td>Sazan</td><td>19</td></tr></table>",
  "secenekler": [
    "Karabatağa ulaşan enerji en çoktur; ilaç derişimi de en yüksektir.",
    "Su piresine ulaşan enerji sazandakinden azdır; ilaç derişimi ise sazandakinden yüksektir.",
    "Sazana ulaşan enerji su piresindekinden azdır; ilaç derişimi ise su piresindekinden yüksektir.",
    "Alg, enerji bakımından da ilaç derişimi bakımından da en zengin basamaktır."
  ],
  "dogru": 2,
  "hatalar": [
    "Enerjiyi yukarı doğru artan sanma: piramitte en dar basamak karabatağındır, ona en az enerji ulaşır.",
    "İki değeri de tersine okuma: piramitte su piresi sazandan geniştir, ilaç derişimi ise sazanda (19) su piresinden (7) yüksektir.",
    null,
    "Birikimi tersine yorumlama: alg en çok enerjiyi alır, ama en az ilacı (2) taşır."
  ],
  "aciklama": "Piramitte basamak genişliği enerjinin azalıp arttığını, tablodaki sayılar ilaç derişimini gösterir. Zincirde yukarı çıkıldıkça enerji azalır, atılamayan ilacın derişimi artar.\nAdım 1: Tablodan derişim sırası: alg (2), su piresi (7), sazan (19), karabatak (52). Bu sıra zincir sırasıyla aynıdır.\nAdım 2: Piramitte genişlik sırası: alg > su piresi > sazan > karabatak; yani enerji yukarı azalır.\nAdım 3: Sazan su piresinden bir basamak yukarıdadır; enerjisi daha az, ilaç derişimi daha yüksektir.\nSık yapılan hata: Enerji ile ilaç birikiminin aynı yönde arttığını sanmak.\nCevap C."
},
{
  "id": "fen-bz-358",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Amazon yağmur ormanında bir ağacın meyvesini maymunlar ve papağanlar yer. Jaguar yalnızca maymunlarla, harpy kartalı ise hem maymunlarla hem papağanlarla beslenir. Kaçak avcılar, bölgedeki jaguarların hepsini öldürüyor.\nI. Harpy kartalı besinsiz kalır.\nII. Maymunlar üzerindeki avcı baskısı azalır; bu da meyve ağacının yenme baskısını artırma eğilimindedir.\nIII. Papağan sayısı kesinlikle azalır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "I. yargıyı doğru sayma: harpy kartalının besinleri maymun ve papağandır, jaguar yok olsa da besini yerinde durur. II. yargıyı atlama.",
    null,
    "I. yargıyı doğru sayma: harpy kartalı maymunlar ve papağanlarla beslenir, besinsiz kalmaz.",
    "III. yargıyı doğru sayma: papağanların sayısı jaguardan değil, meyve ve kartal baskısından etkilenir; azalması kesin değildir."
  ],
  "aciklama": "Avcı ortadan kalkınca avının sayısı artma eğilimine girer; çoğalan av, yediği canlıyı daha çok tüketir.\nAdım 1 (I): Harpy kartalı maymun ve papağan yer; bu besinler yerindedir, besinsiz kalmaz. I. yargı yanlıştır.\nAdım 2 (II): Jaguar yok olunca maymunların avcılarından biri azalır; maymun artma eğilimine girer ve daha çok meyve tüketir. II. yargı doğrudur.\nAdım 3 (III): Papağanın sayısı jaguarla doğrudan ilişkili değildir; \"kesinlikle azalır\" denemez. III. yargı yanlıştır.\nSık yapılan hata: Dolaylı etkiyi kesin sonuç saymak.\nCevap B."
},
{
  "id": "fen-bz-359",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Açık denizde fitoplankton → zooplankton → ringa balığı → fok zincirinde üç farklı maddenin (X, Y, Z) canlıların dokularındaki miktarı ölçülmüştür. Maddelerden yalnızca biri, canlıların vücudundan atılamayan ve parçalanmayan bir kirleticidir. Sonuçlar tabloda verilmiştir.\n**Bu tabloya göre biyolojik birikim yapan madde ve gerekçesi hangi seçenekte doğru verilmiştir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Madde</th><th>Fitoplankton</th><th>Zooplankton</th><th>Ringa balığı</th><th>Fok</th></tr><tr><td>X</td><td>6</td><td>6</td><td>6</td><td>6</td></tr><tr><td>Y</td><td>18</td><td>11</td><td>7</td><td>3</td></tr><tr><td>Z</td><td>2</td><td>5</td><td>14</td><td>41</td></tr></table>",
  "secenekler": [
    "X; çünkü miktarı bütün canlılarda aynıdır.",
    "Y; çünkü miktarı fitoplanktonda en yüksektir.",
    "X ve Z; çünkü ikisi de bütün canlılarda bulunmaktadır.",
    "Yalnızca Z; çünkü miktarı basamak yükseldikçe artmaktadır."
  ],
  "dogru": 3,
  "hatalar": [
    "Sabit değeri birikim sanma: X her basamakta aynı kalır, yukarı çıkıldıkça artmadığı için birikim yapmaz.",
    "Birikimi tersine yorumlama: Y basamak yükseldikçe azalır; atılamayan madde üstte artar, azalmaz.",
    "Bulunmayı birikim sanma: bir maddenin her canlıda bulunması birikim değildir; miktarın yukarı doğru artması gerekir.",
    null
  ],
  "aciklama": "Biyolojik birikim, atılamayan maddenin zincirde yukarı çıkıldıkça canlıdaki miktarının artmasıdır.\nAdım 1: X'in miktarı 6, 6, 6, 6 olarak sabit kalır; birikim yoktur.\nAdım 2: Y'nin miktarı 18 → 3 azalır; birikim yoktur.\nAdım 3: Z'nin miktarı 2 → 5 → 14 → 41 artar; birikim yapan maddedir.\nSık yapılan hata: Bir maddenin bütün canlılarda bulunmasını birikim saymak.\nCevap D."
},
{
  "id": "fen-bz-360",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir dağ akarsuyunda canlıların beslenme ilişkisi besin ağıyla gösterilmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir. Ağdaki su mercimeği ve su yosunu üreticidir.\n**Su samuru bu ağda hangi basamaklarda tüketici olarak yer alır?**",
  "gorsel": "<svg viewBox=\"0 0 566 160\" role=\"img\" aria-label=\"Dağ akarsuyu besin ağı\"><defs><marker id=\"ok360\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"121\" y1=\"30\" x2=\"147\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok360)\"/><line x1=\"97\" y1=\"125\" x2=\"147\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok360)\"/><line x1=\"210\" y1=\"125\" x2=\"242\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok360)\"/><line x1=\"210\" y1=\"125\" x2=\"372\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok360)\"/><line x1=\"353\" y1=\"75\" x2=\"372\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok360)\"/><line x1=\"226\" y1=\"30\" x2=\"469\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok360)\"/><line x1=\"459\" y1=\"125\" x2=\"469\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok360)\"/><rect x=\"5\" y=\"15\" width=\"114\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"62\" y=\"35\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Su mercimeği</text><rect x=\"5\" y=\"110\" width=\"90\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"50\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Su yosunu</text><rect x=\"150\" y=\"15\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"187\" y=\"35\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kerevit</text><rect x=\"150\" y=\"110\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"179\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Larva</text><rect x=\"245\" y=\"60\" width=\"106\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"298\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Küçük balık</text><rect x=\"375\" y=\"110\" width=\"82\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"416\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Alabalık</text><rect x=\"472\" y=\"15\" width=\"90\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"517\" y=\"35\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Su samuru</text></svg>",
  "secenekler": [
    "1., 2. ve 3. basamak",
    "2. ve 3. basamak",
    "3. ve 4. basamak",
    "2., 3. ve 4. basamak"
  ],
  "dogru": 3,
  "hatalar": [
    "Basamakları bir aşağı kaydırma: su samuru üreticiyi doğrudan yemez; kerevit yolunda 2., larva-alabalık yolunda 3., küçük balık yolunda 4. basamaktadır. 1. basamakta yer almaz.",
    "Uzun yolu atlama: küçük balığı yiyen alabalık 3. basamaktadır; onu yiyen su samuru bu yolda 4. basamaktadır.",
    "Kerevit yolunu atlama: su samuru, 1. basamak olan kereviti yiyerek 2. basamakta da yer alır.",
    null
  ],
  "aciklama": "Bir canlı ağda farklı uzunlukta yollardan beslenebiliyorsa her yol ona farklı bir basamak verir. Üretici basamak almaz.\nAdım 1: Kerevit su mercimeğini yer; 1. basamaktır. Kerevit → su samuru yolunda samur 2. basamaktadır.\nAdım 2: Larva 1. basamaktır. Larva → alabalık yolunda alabalık 2.; bu yolda su samuru 3. basamaktadır.\nAdım 3: Larva → küçük balık (2.) → alabalık (3.) yolunda alabalık 3. olur; bu yolda su samuru 4. basamaktadır.\nSağlama: Su samuru 2., 3. ve 4. basamakta yer alır.\nCevap D."
},
{
  "id": "fen-bz-361",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aynı büyüklükteki iki gölette alg, su piresi ve küçük balık yaşar. Su piresi algle, küçük balık su piresiyle beslenir. X göletinde ayrıca küçük balıkları yiyen turna vardır; Y göletinde turna yoktur. Bir yıl sonra yapılan sayımın sonuçları tabloda verilmiştir.\n**Bu verilere göre aşağıdaki sonuçlardan hangisine ulaşılabilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Gölet</th><th>Turna</th><th>Küçük balık sayısı</th><th>Su piresi sayısı</th><th>Alg miktarı</th></tr><tr><td>X</td><td>Var</td><td>30</td><td>400</td><td>8</td></tr><tr><td>Y</td><td>Yok</td><td>220</td><td>60</td><td>35</td></tr></table>",
  "secenekler": [
    "Turnanın yokluğu küçük balıkları artırmış, bu da su pirelerini azaltıp algleri çoğaltmıştır.",
    "Turnanın yokluğu su pirelerini artırmış, bu da algleri azaltıp küçük balıkları çoğaltmıştır.",
    "Turna algleri doğrudan yediği için X göletinde alg miktarı düşük, su piresi yüksektir.",
    "Küçük balık sayısı arttığı için Y göletinde hem su piresi hem alg miktarı artmıştır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sonuçları yanlış okuma: Y göletinde su piresi 60 ile X göletinden (400) azdır, alg ise daha fazladır.",
    "Beslenme ilişkisini yanlış kurma: turna küçük balık yer, alg yemez; algin azlığı su pirelerinin çokluğundan kaynaklanır.",
    "Zinciri yanlış yorumlama: küçük balık su piresini yer, bu yüzden su piresi azalmıştır; yalnızca alg artmıştır."
  ],
  "aciklama": "Zincirdeki bir avcının (turna) varlığı, iki basamak ötesindeki canlıya kadar etki eder: avcı ↓ → av ↑ → avın yediği ↓ → onun yediği ↑.\nAdım 1: Y göletinde turna yok; küçük balık sayısı 30 → 220 (artmış).\nAdım 2: Çok sayıda küçük balık, su pirelerini daha çok yer; su piresi 400 → 60 (azalmış).\nAdım 3: Su piresi azalınca algin yenme baskısı azalır; alg 8 → 35 (artmış).\nSağlama: Tablodaki sayılar bu zincirleme etkiyi destekler.\nCevap A."
},
{
  "id": "fen-bz-362",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Konya Ovası'ndaki bir buğday tarlasında buğday → çekirge → kurbağa → leylek zinciri vardır. Her canlı yalnızca kendinden önceki halkayla beslenir. Tarlaya püskürtülen bir ilaç, canlıların vücudunda parçalanmamakta ve atılamamaktadır. Ayrıca başka bir hastalık yüzünden tarladaki çekirgelerin çoğu ölmektedir.\nI. Kurbağanın dokusundaki ilaç derişimi, buğdaydakinden düşüktür.\nII. Çekirgelerin ölmesi, kurbağa sayısını artırır.\nIII. Leyleğin dokusundaki ilaç derişimi, kurbağanınkinden yüksektir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 402 60\" role=\"img\" aria-label=\"Buğday, çekirge, kurbağa ve leylek besin zinciri\"><defs><marker id=\"ok362\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"43\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Buğday</text><line x1=\"78\" y1=\"25\" x2=\"108\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok362)\"/><rect x=\"110\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"147\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çekirge</text><line x1=\"186\" y1=\"25\" x2=\"216\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok362)\"/><rect x=\"218\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"255\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kurbağa</text><line x1=\"294\" y1=\"25\" x2=\"324\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok362)\"/><rect x=\"326\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"359\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Leylek</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "I. yargıyı doğru sayma: atılamayan ilaç yukarı çıkıldıkça birikir, kurbağadaki derişim buğdaydakinden yüksektir. III. yargıyı da atlama.",
    "II. yargıyı doğru sayma: çekirge, kurbağanın besinidir; çekirge ölünce kurbağanın besini azalır, kurbağa sayısı artmaz. III. yargıyı atlama.",
    null,
    "II. yargıyı doğru sayma: çekirgelerin ölmesi kurbağaların besinini azaltır, kurbağayı artırmaz."
  ],
  "aciklama": "Atılamayan madde yukarı çıkıldıkça birikir; üreticinin ya da alt basamağın azalması üst basamakları aynı yönde etkiler.\nAdım 1 (I): Kurbağa buğdaydan iki halka yukarıdadır; ilaç derişimi buğdaydan yüksektir. I. yargı yanlıştır.\nAdım 2 (II): Kurbağa yalnızca çekirgeyle beslenir; çekirge azalınca kurbağa azalma eğilimine girer. II. yargı yanlıştır.\nAdım 3 (III): Leylek kurbağanın üstündedir; birikim nedeniyle derişimi kurbağadan yüksektir. III. yargı doğrudur.\nSık yapılan hata: Besinin azalmasının tüketiciyi artıracağını sanmak.\nCevap C."
},
{
  "id": "fen-bz-363",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir orman fidanlığında kayın fidanları dört farklı düzenekte yetiştiriliyor. Düzeneklerin hepsinde ışık, su ve sıcaklık aynıdır. Doğal toprak, ayrıştırıcı bakteri ve mantar içerir; steril toprakta ise ayrıştırıcılar öldürülmüştür. Sekiz hafta sonra ölçülen ortalama fidan boyları tabloda verilmiştir. Boy farkı 5 cm'den küçükse fark yok sayılacaktır.\n**Bu verilere göre aşağıdaki sonuçlardan hangisine ulaşılabilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Düzenek</th><th>Toprak</th><th>Ölü yaprak</th><th>Fidan boyu (cm)</th></tr><tr><td>K</td><td>Doğal</td><td>Var</td><td>34</td></tr><tr><td>L</td><td>Steril</td><td>Var</td><td>19</td></tr><tr><td>M</td><td>Doğal</td><td>Yok</td><td>20</td></tr><tr><td>N</td><td>Steril</td><td>Yok</td><td>18</td></tr></table>",
  "secenekler": [
    "Ölü yaprak, ayrıştırıcılar olmasa da fidan boyunu belirgin biçimde artırır.",
    "Ayrıştırıcılar fidan boyunu yalnızca ölü yaprak varken belirgin artırır.",
    "Ayrıştırıcılar, ölü yaprak olmasa da fidan boyunu belirgin biçimde artırır.",
    "Ayrıştırıcıların bulunması, hiçbir koşulda fidan boyuna belirgin etki etmez."
  ],
  "dogru": 1,
  "hatalar": [
    "Verileri yanlış okuma: steril toprakta ölü yaprak varken (19 cm) ve yokken (18 cm) boy farkı 5 cm'den küçüktür.",
    null,
    "Verileri yanlış okuma: ölü yaprak yokken doğal toprakta (20 cm) ve steril toprakta (18 cm) boy farkı 5 cm'den küçüktür.",
    "Verileri yanlış okuma: K ve L düzenekleri arasındaki 15 cm fark, ayrıştırıcıların etkisini gösterir."
  ],
  "aciklama": "İki düzenek karşılaştırılırken farkı yaratan tek değişkeni buluruz.\nAdım 1: K ile L arasında yalnızca toprak türü (ayrıştırıcı var/yok) farklıdır; boy farkı 34 − 19 = 15 cm (etki var).\nAdım 2: M ile N arasında yalnızca ayrıştırıcı farkı vardır ama ölü yaprak yoktur; fark 2 cm (etki yok).\nAdım 3: Ayrıştırıcılar ölü yaprağı parçalayıp maddeleri toprağa kazandırdığı için etki ancak ölü yaprak varken görülür.\nSık yapılan hata: Birkaç düzenek arasındaki küçük farkları da etki saymak.\nCevap B."
},
{
  "id": "fen-bz-364",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir bozkırda, kendi aralarında tek bir besin zinciri oluşturan K, L, M ve N canlılarının birey sayıları ve kendilerine ulaşan göreli enerji miktarları ölçülmüştür. Zincirin başında besinini kendisi üreten bir canlı bulunur ve her canlı yalnızca bir önceki halkayla beslenir. Sonuçlar tabloda karışık sırada verilmiştir.\n**Buna göre K canlısı için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Birey sayısı</th><th>Göreli enerji</th></tr><tr><td>K</td><td>60</td><td>40</td></tr><tr><td>L</td><td>5000</td><td>900</td></tr><tr><td>M</td><td>4</td><td>7</td></tr><tr><td>N</td><td>300</td><td>130</td></tr></table>",
  "secenekler": [
    "1. basamak tüketicidir; N'yi yer, M tarafından yenir.",
    "3. basamak tüketicidir; L'yi yer, N tarafından yenir.",
    "2. basamak tüketicidir; N'yi yer, M tarafından yenir.",
    "2. basamak tüketicidir; M'yi yer, N tarafından yenir."
  ],
  "dogru": 2,
  "hatalar": [
    "Basamağı bir aşağı alma: K, 1. basamak olan N'yi yediği için 2. basamaktadır.",
    "Sıralamayı ters kurma: enerji ve birey sayısı en çok olan L üretici olduğu için ok L'den N'ye gider.",
    null,
    "Ok yönünü ters kurma: K, M'yi yemez; M daha üsttedir ve K'yi yer."
  ],
  "aciklama": "Zincirde yukarı çıkıldıkça enerji ve birey sayısı azalır. Bu yüzden sayıları büyükten küçüğe dizmek zincir sırasını verir.\nAdım 1: Enerjiye göre sıralama L (900) > N (130) > K (40) > M (7); birey sayısı sıralaması da aynıdır.\nAdım 2: Zincir L → N → K → M biçimindedir; L üreticidir.\nAdım 3: N 1., K 2., M 3. basamak tüketicidir. K, N'yi yer ve M tarafından yenir.\nSağlama: İki ölçüt de aynı sırayı verir.\nCevap C."
},
{
  "id": "fen-bz-365",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Işığın hiç girmediği bir mağaranın derin bölümünde bitki ve alg yaşamaz. Bu bölümde yaşayan böcekler yarasa dışkısı ve ölü böcek kalıntılarıyla beslenir, örümcekler de bu böcekleri yer. Yarasa dışkısını ve ölü canlıları bakteriler ile mantarlar ayrıştırır. Yarasalar geceleri mağaradan çıkıp çevredeki ormanda uçan böcekleri avlar, gündüz mağarada dinlenip dışkılarlar; ormandaki böcekler ise bitki yaprağıyla beslenir.\n**Mağaranın derin bölümündeki canlıların kullandığı enerjinin asıl kaynağı aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Mağara dışındaki bitkilerin ürettiği besin",
    "Mağaradaki bakteri ve mantarların ürettiği besin",
    "Mağaradaki örümceklerin ürettiği besin",
    "Yarasaların kendi vücutlarında ürettiği besin"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Ayrıştırıcıyı üretici sanma: bakteri ve mantarlar besin üretmez, ölü kalıntıları parçalar; enerjiyi yoktan var etmezler.",
    "Tüketiciyi üretici sanma: örümcek hazır besinle beslenir, besin üretmez.",
    "Hayvanı üretici sanma: yarasalar besin üretmez; ormandaki böcekleri yiyerek enerji alırlar."
  ],
  "aciklama": "Bir besin zincirindeki bütün enerjinin kaynağı, fotosentez yapan üreticilerin ürettiği besindir; tüketiciler ve ayrıştırıcılar enerjiyi yoktan var etmez.\nAdım 1: Mağaranın derin bölümünde fotosentez yapan canlı yoktur, yani burada besin üretilmez.\nAdım 2: Enerji, yarasaların dışkısıyla ve ölü kalıntılarla mağaraya taşınır.\nAdım 3: Yarasalar enerjiyi ormandaki böceklerden, onlar da bitkilerden alır; kaynak mağara dışındaki bitkilerdir.\nSık yapılan hata: Ayrıştırıcıların enerji ürettiğini sanmak.\nCevap A."
},
{
  "id": "fen-bz-366",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir lagünde alg → karides → levrek → pelikan zinciri vardır. Lagüne karışan bir ağır metal canlıların vücudunda parçalanmamakta ve atılamamaktadır. Canlıların dokularındaki ağır metal miktarı tabloda karışık sırada verilmiştir.\nI. Karides, levreğin bir altındaki basamaktadır; çünkü dokusundaki ağır metal miktarı levreğinkinden azdır.\nII. Pelikandaki ağır metal miktarı, alg ve karidesteki miktarların toplamından azdır.\nIII. Pelikana ulaşan enerji, levreğe ulaşandan azdır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Ağır metal miktarı (birim)</th></tr><tr><td>Levrek</td><td>31</td></tr><tr><td>Alg</td><td>2</td></tr><tr><td>Pelikan</td><td>77</td></tr><tr><td>Karides</td><td>14</td></tr></table>",
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "II. yargıyı doğru sayma: alg ile karidesin toplamı 2 + 14 = 16 birimdir, pelikanda 77 birim vardır; birikim yukarı çıkıldıkça artar. I ve III yargılarını atlama.",
    "I. yargıyı atlama: derişim sıralaması 2 < 14 < 31 < 77 olduğundan karides levreğin altındadır; I. yargı da doğrudur.",
    "II. yargıyı doğru sayma: pelikandaki miktar (77), alg ve karides toplamından (16) çok fazladır. III. yargıyı da atlama.",
    null
  ],
  "aciklama": "Atılamayan madde yukarı çıkıldıkça birikir; miktar yükseldikçe artar, bu yüzden değerleri sıralamak zincirdeki yeri verir.\nAdım 1 (I): Miktarlar 2 (alg) < 14 (karides) < 31 (levrek) < 77 (pelikan) sıralanır; karides levreğin altındadır. I. yargı doğrudur.\nAdım 2 (II): Alg ile karidesin toplamı 2 + 14 = 16 birimdir; pelikanda 77 birim vardır. Pelikandaki miktar toplamdan fazladır. II. yargı yanlıştır.\nAdım 3 (III): Pelikan levrekten sonra geldiği için ona daha az enerji ulaşır. III. yargı doğrudur.\nSık yapılan hata: Birikimin yukarı çıkıldıkça azaldığını sanmak.\nCevap D."
},
{
  "id": "fen-bz-367",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir mercan resifinde yapılan çalışmada beslenme ilişkileri şemada gösterilmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir. Aşırı sıcaklık yüzünden resif alglerinin hepsi ölüyor.\n**Bu durumla ilgili aşağıdaki yargılardan hangisi kesinlikle doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 566 160\" role=\"img\" aria-label=\"Mercan resifi besin ağı\"><defs><marker id=\"ok367\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"105\" y1=\"30\" x2=\"162\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok367)\"/><line x1=\"121\" y1=\"125\" x2=\"162\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok367)\"/><line x1=\"273\" y1=\"125\" x2=\"312\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok367)\"/><line x1=\"297\" y1=\"30\" x2=\"457\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok367)\"/><line x1=\"439\" y1=\"125\" x2=\"457\" y2=\"77\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok367)\"/><rect x=\"5\" y=\"15\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"54\" y=\"35\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Resif algi</text><rect x=\"5\" y=\"110\" width=\"114\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"62\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Fitoplankton</text><rect x=\"165\" y=\"15\" width=\"130\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"230\" y=\"35\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Papağan balığı</text><rect x=\"165\" y=\"110\" width=\"106\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"218\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zooplankton</text><rect x=\"315\" y=\"110\" width=\"122\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"376\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Mercan balığı</text><rect x=\"460\" y=\"62\" width=\"82\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"501\" y=\"82\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Barakuda</text></svg>",
  "secenekler": ["Mercan balıklarının sayısı azalır.","Papağan balığı besinini tümüyle kaybeder.","Barakuda bu durumda besinsiz kalır.","Zooplankton sayısı kesinlikle artar."],
  "dogru": 1,
  "hatalar": ["Kesin sanma: mercan balığı zooplanktonla beslenir; resif algi ölse de besini yerinde durur.",null,"Tek besini yok olmadı: barakuda mercan balığıyla da beslenir; yalnızca papağan balığı kolu etkilenir.","Kesin sanma: resif algi zooplanktonun ne besini ne avcısıdır; sayısındaki değişim bu olaydan kesin olarak çıkmaz."],
  "aciklama": "\"Kesinlikle\" kökünde yalnızca şemadan zorunlu olarak çıkan sonuç doğrudur.\nAdım 1: Şemada papağan balığına yalnızca resif algindan ok gelir; tek besini bu canlıdır.\nAdım 2: Resif algi tümüyle ölünce papağan balığı besinini tümüyle kaybeder; bu kesindir.\nAdım 3: Mercan balığı zooplanktonla, barakuda ise mercan balığıyla da beslendiği için ikisi için kesin bir sonuç yoktur.\nSık yapılan hata: Bir kolun etkilenmesinden bütün ağın çöktüğü sonucunu çıkarmak.\nCevap B."
},
{
  "id": "fen-bz-368",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir çayırda üç alan hazırlanıyor. A alanı açık bırakılıyor. B alanı, tilkilerin girmesini engelleyen bir çitle çevriliyor. C alanı ise hem tavşanların hem tilkilerin girmesini engelleyen bir çitle çevriliyor. Tavşanlar çayır otuyla beslenir, tilkiler yalnızca tavşanlarla beslenir. Bir yıl sonra alanlardaki ot yoğunluğu ölçülüyor.\n**Bu verilere göre aşağıdaki sonuçlardan hangisine ulaşılabilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Alan</th><th>Tavşan</th><th>Tilki</th><th>Ot yoğunluğu (%)</th></tr><tr><td>A</td><td>Var</td><td>Var</td><td>55</td></tr><tr><td>B</td><td>Var</td><td>Yok</td><td>20</td></tr><tr><td>C</td><td>Yok</td><td>Yok</td><td>85</td></tr></table>",
  "secenekler": [
    "Tilkiler, otları doğrudan yiyerek B alanında ot yoğunluğunu azaltmıştır.",
    "Tavşanlar otlarla beslenmediği için C alanında ot yoğunluğu artmıştır.",
    "Tilkilerin uzak tutulması tavşan sayısını artırmış, bu da ot yoğunluğunu düşürmüştür.",
    "Tavşanlar ve tilkiler birlikte bulunduğunda otlar en yüksek yoğunluğa ulaşmıştır."
  ],
  "dogru": 2,
  "hatalar": [
    "Beslenme ilişkisini yanlış kurma: tilkiler yalnızca tavşan yer, ot yemez; B alanında otun azalması tilkinin yokluğundan kaynaklanır.",
    "Beslenme ilişkisini yanlış kurma: tavşanlar otla beslenir; C alanında ot, tavşanlar giremediği için artmıştır.",
    null,
    "Verileri yanlış okuma: en yüksek ot yoğunluğu (85) tavşanların bulunmadığı C alanındadır."
  ],
  "aciklama": "Bir avcı ortamdan uzaklaştırılınca avı çoğalır; çoğalan av, yediği canlıyı (ot) azaltır. Karşılaştırmada her seferinde yalnızca bir değişken farklı olmalıdır.\nAdım 1: A ile B arasında tek fark tilkidir: tilki yokken otlar 55 → 20 düşmüştür.\nAdım 2: A ile C arasında tek fark tavşandır: tavşan yokken ot 55 → 85 artmıştır.\nAdım 3: Yani tilki yokluğu → tavşan ↑ → ot ↓ zinciri çalışmıştır.\nSık yapılan hata: Avcının da otla beslendiğini sanmak.\nCevap C."
},
{
  "id": "fen-bz-369",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yağmur ormanında ağaç yaprakları, tırtıllar ve tembel hayvanlar tarafından yenir. Kurbağa yalnızca tırtılla beslenir; yılan hem kurbağayla hem tembel hayvanla beslenir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir. Kaçak avcılar, bölgedeki yılanların hepsini yakalıyor.\nI. Kurbağa sayısı artma eğilimine girer.\nII. Tırtıl sayısı azalma eğilimine girer.\nIII. Ağaç yaprakları üzerindeki yenme baskısı kesinlikle azalır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 460 160\" role=\"img\" aria-label=\"Yaprak, tırtıl, tembel hayvan, kurbağa ve yılandan oluşan besin ağı\"><defs><marker id=\"ok369\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"73\" y1=\"72\" x2=\"98\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok369)\"/><line x1=\"73\" y1=\"88\" x2=\"98\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok369)\"/><line x1=\"168\" y1=\"25\" x2=\"248\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok369)\"/><line x1=\"326\" y1=\"30\" x2=\"388\" y2=\"72\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok369)\"/><line x1=\"224\" y1=\"135\" x2=\"388\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok369)\"/><rect x=\"5\" y=\"65\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"38\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yaprak</text><rect x=\"100\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"133\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tırtıl</text><rect x=\"100\" y=\"120\" width=\"122\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"161\" y=\"140\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tembel hayvan</text><rect x=\"250\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"287\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kurbağa</text><rect x=\"390\" y=\"65\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"419\" y=\"85\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yılan</text></svg>",
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "II. yargıyı atlama: kurbağa artınca daha çok tırtıl yenir, tırtıl azalma eğilimine girer; II. yargı da doğrudur.",
    null,
    "III. yargıyı kesin sayma: tırtıl azalınca baskı azalır, ama avcısı kalmayan tembel hayvan artıp yaprağı daha çok yer; baskının kesinlikle azalacağı söylenemez. II. yargıyı da atlama.",
    "I. yargıyı atlama: yılan yok olunca kurbağanın avcısı kalmaz, kurbağa artar. III. yargıyı da kesin sayma: tembel hayvan artar, toplam baskının yönü belirsizdir."
  ],
  "aciklama": "Avcı ortadan kalkınca avı artma eğilimine girer; çoğalan av, yediği canlıyı azaltır. Bir canlının birden çok besini ya da avcısı varsa etki farklı yollardan gelir ve yönü her zaman kesin olmaz.\nAdım 1 (I): Yılan yok olunca kurbağanın avcısı kalmaz; kurbağa artma eğilimine girer. I. yargı doğrudur.\nAdım 2 (II): Artan kurbağa daha çok tırtıl yer; tırtıl azalma eğilimine girer. II. yargı doğrudur.\nAdım 3 (III): Tırtıl azalınca yaprak üzerindeki baskı azalır; ama yılan yok olunca tembel hayvan da artar ve yaprağı daha çok yer. İki etki zıt yönlüdür, baskının kesinlikle azalacağı söylenemez. III. yargı yanlıştır.\nSık yapılan hata: Ağdaki yollardan yalnızca birine bakıp öteki yolu unutmak.\nCevap B."
},
{
  "id": "fen-bz-370",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Hazar Gölü'nde canlıların beslenme ilişkisi şemada gösterilmiştir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir. Alg, ağdaki tek üreticidir.\n**Aşağıdaki yargılardan hangisi __yanlıştır__?**",
  "gorsel": "<svg viewBox=\"0 0 540 110\" role=\"img\" aria-label=\"Hazar Gölü besin ağı\"><defs><marker id=\"ok370\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"49\" y1=\"75\" x2=\"92\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok370)\"/><line x1=\"203\" y1=\"75\" x2=\"237\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok370)\"/><line x1=\"300\" y1=\"75\" x2=\"342\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok370)\"/><line x1=\"300\" y1=\"75\" x2=\"437\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok370)\"/><line x1=\"405\" y1=\"25\" x2=\"437\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok370)\"/><rect x=\"5\" y=\"60\" width=\"42\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"26\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Alg</text><rect x=\"95\" y=\"60\" width=\"106\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"148\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zooplankton</text><rect x=\"240\" y=\"60\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"269\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Sazan</text><rect x=\"345\" y=\"10\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"374\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Turna</text><rect x=\"440\" y=\"60\" width=\"90\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"485\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Karabatak</text></svg>",
  "secenekler": [
    "Turna, ağda hem 3. hem 4. basamak tüketicisi olarak yer alır.",
    "Karabatak, ağda hem 3. hem 4. basamak tüketicisi olarak yer alır.",
    "Sazan, zooplanktonu yediği için 2. basamak tüketicidir.",
    "Zooplankton, ağdaki tek 1. basamak tüketicidir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Doğru yargıyı yanlış sanma: karabatak sazanı yerken 3., turnayı yerken 4. basamaktadır; bu yargı doğrudur.",
    "Doğru yargıyı yanlış sanma: zooplankton 1. basamak olduğundan onu yiyen sazan 2. basamaktadır; bu yargı doğrudur.",
    "Doğru yargıyı yanlış sanma: algi yalnızca zooplankton yer; 1. basamakta yalnızca o vardır; bu yargı doğrudur."
  ],
  "aciklama": "Soru \"yanlıştır\" diyor; yani üç şık doğru, tek şık yanlıştır. Her canlının basamağını ağdaki yollara göre bulmak gerekir.\nAdım 1: Alg üreticidir; zooplankton 1., sazan 2. basamaktır.\nAdım 2: Turna yalnızca sazanı yer; turna yalnızca 3. basamaktadır. Karabatak sazanı yerken 3., turnayı yerken 4. basamaktadır.\nAdım 3: Bu yüzden \"turna hem 3. hem 4. basamaktadır\" yargısı yanlıştır.\nSık yapılan hata: Kökteki \"yanlıştır\" ifadesini gözden kaçırıp doğru yargıyı seçmek.\nCevap A."
},
{
  "id": "fen-bz-371",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Afrika savanında canlıların beslenme ilişkisi besin ağıyla gösterilmiştir. Ağda ot ve akasya iki farklı üreticidir. Oklar enerjinin yenen canlıdan yiyen canlıya akış yönünü gösterir; canlılar yalnızca şemadaki canlılarla beslenmektedir.\n**Bu ağda üreticilerden başlayıp kartalda biten kaç farklı besin zinciri vardır?**",
  "gorsel": "<svg viewBox=\"0 0 530 160\" role=\"img\" aria-label=\"Ot, akasya, çekirge, mangust, kertenkele, yılan ve kartaldan oluşan besin ağı\"><defs><marker id=\"ok371\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><line x1=\"41\" y1=\"25\" x2=\"97\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok371)\"/><line x1=\"73\" y1=\"125\" x2=\"97\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok371)\"/><line x1=\"176\" y1=\"75\" x2=\"207\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok371)\"/><line x1=\"176\" y1=\"75\" x2=\"207\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok371)\"/><line x1=\"286\" y1=\"25\" x2=\"342\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok371)\"/><line x1=\"310\" y1=\"125\" x2=\"342\" y2=\"75\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok371)\"/><line x1=\"286\" y1=\"25\" x2=\"447\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok371)\"/><line x1=\"405\" y1=\"75\" x2=\"447\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok371)\"/><rect x=\"5\" y=\"10\" width=\"34\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"22\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ot</text><rect x=\"5\" y=\"110\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"38\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Akasya</text><rect x=\"100\" y=\"60\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"137\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çekirge</text><rect x=\"210\" y=\"10\" width=\"74\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"247\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Mangust</text><rect x=\"210\" y=\"110\" width=\"98\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"259\" y=\"130\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kertenkele</text><rect x=\"345\" y=\"60\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"374\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yılan</text><rect x=\"450\" y=\"10\" width=\"66\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"483\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kartal</text></svg>",
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 3,
  "hatalar": [
    "Üreticileri tek sayma: çekirgeden kartala üç yol vardır, ama zincir ot ya da akasyadan başlayabildiği için bu sayı ikiyle çarpılır.",
    "İki yolu atlama: çekirgeden kartala giden üç yol, iki ayrı üretici ile birleşince 6 zincir eder.",
    "Bir yolu atlama: çekirgeden kartala giden üç yolun hepsi sayılmalıdır; biri atlanmıştır.",
    null
  ],
  "aciklama": "Farklı zincir sayısı için üreticiden son canlıya giden her yolu tek tek sayarız.\nAdım 1: Çekirgeden kartala üç yol vardır: çekirge → mangust → kartal; çekirge → mangust → yılan → kartal; çekirge → kertenkele → yılan → kartal.\nAdım 2: Çekirgeye iki üretici (ot, akasya) ok gönderir; her yol iki üreticiden başlayabilir.\nAdım 3: Toplam 3 × 2 = 6 zincir olur.\nSağlama: Zincirleri tek tek yazınca 6 farklı yol bulunur.\nCevap D."
},
{
  "id": "fen-bz-372",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir sebze bahçesinde lahana yapraklarını tırtıllar yer. Tırtılları serçeler, serçeleri de atmacalar avlar. Her canlı yalnızca kendinden önceki halkayla beslenir. Bahçe sahibi, canlıların vücudundan atılamayan bir ilaç kullanıyor. Ölen canlıları bakteriler ve mantarlar ayrıştırıyor.\nI. İlaç derişimi en çok lahana yapraklarında bulunur.\nII. Atmacadaki ilaç derişimi, serçedekinden yüksektir.\nIII. Bakteri ve mantarlar, ölü atmacanın bedenindeki maddeleri ayrıştırarak toprağa geri verir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "I. yargıyı doğru sayma: atılamayan ilaç yukarı çıkıldıkça birikir; en çok atmacada bulunur, lahanada en azdır. II ve III yargılarını atlama.",
    "II. yargıyı atlama: atmaca serçeyi yediği için serçedeki ilacı da biriktirir; derişimi serçeden yüksektir.",
    null,
    "I. yargıyı doğru sayma: ilaç lahanada en azdır. II. yargıyı atlama."
  ],
  "aciklama": "Atılamayan madde yukarı çıkıldıkça birikir; ayrıştırıcılar ise ölü kalıntıları parçalayıp maddeleri toprağa döndürür ve basamak numarası almaz.\nAdım 1 (I): İlaç derişimi en çok zincirin sonundaki atmacada bulunur, lahanada en azdır. I. yargı yanlıştır.\nAdım 2 (II): Atmaca serçeyi yiyerek serçedeki ilacı biriktirir. II. yargı doğrudur.\nAdım 3 (III): Bakteri ve mantarlar ayrıştırıcıdır; ölü atmacanın bedenindeki maddeleri parçalayıp toprağa geri verir. III. yargı doğrudur.\nSık yapılan hata: İlacın alt basamakta çok olacağını sanmak.\nCevap C."
},
{
  "id": "fen-bz-373",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Karadeniz'de atılamayan bir ağır metalle kirlenmiş bir kıyıda, beş canlının beslenmesi ve ortalama kütleleri tabloda verilmiştir. Tabloda yazanlar dışında besin tüketilmediği kabul edilmektedir. Ağır metal canlıların vücudunda parçalanmamakta ve atılamamaktadır.\n**Bu kıyıda ağır metalin dokudaki derişiminin en yüksek olması beklenen canlı hangisidir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Canlı</th><th>Beslenmesi</th><th>Ortalama kütle (g)</th></tr><tr><td>Zooplankton</td><td>Fitoplankton yer</td><td>0,02</td></tr><tr><td>Hamsi</td><td>Zooplankton yer</td><td>20</td></tr><tr><td>Kefal</td><td>Fitoplankton ve su yosunu yer</td><td>900</td></tr><tr><td>Lüfer</td><td>Hamsi yer</td><td>450</td></tr></table>",
  "secenekler": [
    "Lüfer",
    "Kefal",
    "Hamsi",
    "Zooplankton"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Büyüklüğü birikime bağlama: kefal kütlece en büyüktür ama bitkisel besinle beslenir, 1. basamaktadır; derişim zincirdeki yükseklikle artar.",
    "Basamağı bir aşağıda alma: hamsiyi yiyen lüfer, hamsinin taşıdığı maddeyi de biriktirir.",
    "Basamağı çok aşağıda alma: zooplankton 1. basamaktadır; zincirin ortalarındaki canlılardan daha az birikim yapar."
  ],
  "aciklama": "Biyolojik birikimde derişim, canlının zincirdeki yüksekliğine ve çok sayıda alt canlı yemesine bağlıdır; vücut büyüklüğüne bağlı değildir.\nAdım 1: Fitoplanktonu yiyen zooplankton ve kefal 1. basamak tüketicidir.\nAdım 2: Zooplanktonu yiyen hamsi 2., hamsiyi yiyen lüfer 3. basamak tüketicidir.\nAdım 3: En üstte lüfer vardır; en yüksek derişim ondadır. Kefal iri olsa da 1. basamaktadır.\nSık yapılan hata: Kütlesi en büyük canlıda en çok birikim olacağını sanmak.\nCevap A."
},
{
  "id": "fen-bz-374",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir çölde kış yağmurlarının ardından beş ay boyunca çöl çalısı yoğunluğu, çekirge ve kertenkele sayıları ölçülmüştür. Çöl çalısı → çekirge → kertenkele zincirinde çekirge yalnızca çalıyla, kertenkele yalnızca çekirgeyle beslenir. Ölçümler tabloda verilmiştir.\n**Bu verilere göre aşağıdaki sonuçlardan hangisine ulaşılabilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Ay</th><th>Çöl çalısı yoğunluğu</th><th>Çekirge sayısı</th><th>Kertenkele sayısı</th></tr><tr><td>Ocak</td><td>10</td><td>20</td><td>5</td></tr><tr><td>Şubat</td><td>80</td><td>40</td><td>6</td></tr><tr><td>Mart</td><td>50</td><td>120</td><td>12</td></tr><tr><td>Nisan</td><td>25</td><td>70</td><td>30</td></tr><tr><td>Mayıs</td><td>12</td><td>30</td><td>18</td></tr></table>",
  "secenekler": [
    "Kertenkele sayısı arttığı için çekirge sayısı artmış, çekirge artınca da çalı yoğunluğu artmıştır.",
    "Çekirge ve kertenkele sayıları, besinlerinin tepe yaptığı aydan bir ay sonra tepe yapmıştır.",
    "Çekirge sayısı en yüksek değere ulaştığında çalı yoğunluğu da aynı ayda en yüksek değere ulaşmıştır.",
    "Kertenkele sayısının en yüksek olduğu ayda çekirge sayısı da en yüksek değerde olmuştur."
  ],
  "dogru": 1,
  "hatalar": [
    "Neden-sonucu ters kurma: önce çalı arttığı için çekirge, çekirge arttığı için kertenkele artmıştır; enerji alttan üste akar.",
    null,
    "Verileri yanlış okuma: çalı en yüksek değere Şubat'ta, çekirge Mart'ta ulaşmıştır; aynı ayda değildir.",
    "Verileri yanlış okuma: kertenkele Nisan'da en yüksektir, çekirge ise Mart'ta en yüksektir."
  ],
  "aciklama": "Alttaki halkanın artışı, üstteki halkanın artışına yol açar; üstteki halkanın tepe değeri biraz gecikmeyle gelir.\nAdım 1: Çalı yoğunluğu Şubat'ta (80) en yüksektir.\nAdım 2: Çalıyı yiyen çekirge Mart'ta (120), çekirgeyi yiyen kertenkele Nisan'da (30) en yüksektir.\nAdım 3: Her halka besininden bir ay sonra tepeye ulaşır; bu, enerjinin alttan üste aktığını destekler.\nSık yapılan hata: Üst halkanın artışının alt halkayı artırdığını sanmak.\nCevap B."
},
{
  "id": "fen-bz-375",
  "kazanim": "F.8.6.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Orta Anadolu bozkırında ot tohumu → tarla faresi → tilki zinciri vardır. Her canlı yalnızca kendinden önceki halkayla beslenir. Bozkıra karışan bir ilaç, canlıların vücudunda parçalanmamakta ve atılamamaktadır.\nI. Tilkinin vücudu fareninkinden büyük olduğu için tilki sayısı fare sayısından fazladır.\nII. Tilkiye ulaşan enerji, tarla faresine ulaşandan azdır; tilkinin dokusundaki ilaç derişimi ise farenin dokusundakinden yüksektir.\nIII. Tilki ve tarla faresi tüketici olduklarından ikisine ulaşan enerji eşittir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 350 60\" role=\"img\" aria-label=\"Ot tohumu, tarla faresi ve tilki besin zinciri\"><defs><marker id=\"ok375\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"currentColor\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"90\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"55\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Ot tohumu</text><line x1=\"102\" y1=\"25\" x2=\"132\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok375)\"/><rect x=\"134\" y=\"10\" width=\"114\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"191\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tarla faresi</text><line x1=\"250\" y1=\"25\" x2=\"280\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1.8\" marker-end=\"url(#ok375)\"/><rect x=\"282\" y=\"10\" width=\"58\" height=\"30\" rx=\"7\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.2\"/><text x=\"311\" y=\"30\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Tilki</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve III",
    "Yalnız II"
  ],
  "dogru": 3,
  "hatalar": [
    "I. yargıyı doğru sayma: yukarı çıkıldıkça canlıların vücudu genellikle büyür ama sayıları azalır; tilki sayısı fareden azdır.",
    "III. yargıyı doğru sayma: tüketici olmak aynı enerjiyi almak demek değildir; tilki fareden bir basamak yukarıdadır ve daha az enerji alır.",
    "I ve III yargılarını doğru sayma: büyük olan tilki fareden daha azdır; enerji de eşit değildir. II. yargıyı atlama.",
    null
  ],
  "aciklama": "Zincirde yukarı çıkıldıkça enerji ve birey sayısı azalır, vücut büyüklüğü genellikle artar, atılamayan maddenin derişimi artar.\nAdım 1 (I): Tilki farenin bir üstündedir; sayısı fareden azdır, büyüklüğü sayıyı artırmaz. I. yargı yanlıştır.\nAdım 2 (II): Tilkiye farenin kaybettiği enerjiden sonra kalan enerji geçer, yani azdır; ilaç ise tilkide birikmiştir ve derişimi fareden yüksektir. II. yargı doğrudur.\nAdım 3 (III): Fare ve tilki farklı basamaklardadır; tilkiye daha az enerji ulaşır. III. yargı yanlıştır.\nSık yapılan hata: Büyük canlının sayıca da fazla olduğunu sanmak.\nCevap D."
}
);
