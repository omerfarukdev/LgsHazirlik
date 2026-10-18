// Fen Bilimleri — Elektrik Yüklü Cisimler (F.8.7.2): Kademe 3 (LGS Ayarı) ve Havuz (kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["elektrik-yuklu-cisimler"] = window.LGS_BANK["elektrik-yuklu-cisimler"] || []).push(
{
  "id": "fen-yc-301",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen kulübünde öğrenciler, yalıtkan saplara yerleştirdikleri K, L ve M cisimlerinin yük durumunu sembollerle gösteriyor. Cisimlerdeki pozitif (+) ve negatif (−) yük sembollerinin sayısı tabloda verilmiştir.\n**Buna göre bu cisimlerin elektrik yükü bakımından sınıflandırılması aşağıdakilerden hangisidir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>7</td><td>7</td></tr><tr><td>L</td><td>3</td><td>6</td></tr><tr><td>M</td><td>9</td><td>5</td></tr></table>",
  "secenekler": [
    "K negatif yüklü, L nötr, M pozitif yüklüdür.",
    "K pozitif yüklü, L negatif yüklü, M nötrdür.",
    "K nötr, L negatif yüklü, M pozitif yüklüdür.",
    "K nötr, L pozitif yüklü, M negatif yüklüdür."
  ],
  "dogru": 2,
  "hatalar": [
    "Eşit sayıyı yük sanma: K'de + ve − sembolleri eşit olduğundan K nötrdür. L'de − sembolü fazla olduğu için L nötr değil, negatif yüklüdür.",
    "Yük cinsini yanlış okuma: K'de yükler eşit olduğu için K nötrdür, pozitif değildir. M'de + sembolü fazla olduğundan M nötr değil, pozitif yüklüdür.",
    null,
    "Çoğunluk olan sembolü ters yorumlama: L'de − sembolü fazla olduğundan L negatif, M'de + sembolü fazla olduğundan M pozitif yüklüdür."
  ],
  "aciklama": "Bir cisimde pozitif ve negatif yük miktarı eşitse cisim nötrdür. Nötr, yük taşımıyor demek değildir; yükler birbirini dengeliyor demektir. Pozitif yük fazlaysa cisim pozitif, negatif yük fazlaysa cisim negatif yüklüdür.\nAdım 1: K'de 7 pozitif ve 7 negatif sembol var. Yükler eşit olduğu için K nötrdür.\nAdım 2: L'de negatif sembol (6) pozitiften (3) fazla. L negatif yüklüdür.\nAdım 3: M'de pozitif sembol (9) negatiften (5) fazla. M pozitif yüklüdür.\nSağlama: Yalnızca K'de iki sayı eşit; L'de negatif, M'de pozitif fazla.\nSık yapılan hata: Nötr cismin hiç yük taşımadığını sanmak.\nCevap C."
},
{
  "id": "fen-yc-302",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Öğretmen tahtaya, üzerinde 8 tane + ve 8 tane − sembolü bulunan bir K cismi çiziyor. Öğrenciler K cismiyle ilgili şu yorumları yapıyor.\nI. K nötrdür.\nII. K hiç yük taşımadığı için yüksüzdür.\nIII. Yüklü bir cisim K'ye yaklaştırılırsa K kesinlikle itilir.\n**Buna göre bu yorumlardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Nötrü yüksüz sanma: K'de eşit sayıda pozitif ve negatif yük vardır; yükler birbirini dengeler ama yok olmaz. II yanlıştır; ayrıca III de yanlıştır.",
    "Nötr cismin itildiğini sanma: yüklü bir cisim nötr bir cismi çeker, itmez. III yanlıştır.",
    "Nötr ile yüksüzü karıştırma ve I'i atlama: K nötrdür, yani I doğrudur; II ve III ise yanlıştır."
  ],
  "aciklama": "Nötr cisimde pozitif ve negatif yük miktarları eşittir. Yükler yok değildir, birbirini dengeler. Yüklü bir cisim, nötr cismi çeker.\nAdım 1 (I): 8 pozitif ve 8 negatif sembol eşit olduğu için K nötrdür. I doğrudur.\nAdım 2 (II): Nötr cisim yük taşımıyor değildir; yükleri eşit olduğu için etkileri birbirini götürür. II yanlıştır.\nAdım 3 (III): Yüklü bir cisim nötr cismi çeker, itmez. III yanlıştır.\nSağlama: Yalnızca I, nötr kavramının tanımına uyuyor.\nSık yapılan hata: Nötr cismi \"yük taşımayan\" cisim sanmak.\nCevap A."
},
{
  "id": "fen-yc-303",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan ipe asılı X, Y ve Z kürelerindeki pozitif (+) ve negatif (−) yük sembollerinin sayısı tabloda verilmiştir. Öğrenciler bu küreler için şu yargıları ileri sürüyor.\nI. Y hiç yük taşımaz.\nII. X ile Z birbirini çeker.\nIII. X, Y'ye yaklaştırılırsa Y, X tarafından çekilir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>X</td><td>9</td><td>4</td></tr><tr><td>Y</td><td>5</td><td>5</td></tr><tr><td>Z</td><td>3</td><td>8</td></tr></table>",
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: II doğrudur, ama yüklü X nötr Y'yi çeker; III de doğrudur.",
    "Eksik değerlendirme: III doğrudur, ama X pozitif, Z negatif yüklü olduğundan zıt cins yükler birbirini çeker; II de doğrudur.",
    "Nötrü yüksüz sanma: Y'de 5 pozitif ve 5 negatif yük vardır; Y nötrdür ama yük taşır. I yanlıştır.",
    null
  ],
  "aciklama": "Farklı cins yükler birbirini çeker. Yüklü bir cisim, nötr cismi de çeker. Nötr cisim, yüksüz cisim demek değildir.\nAdım 1 (I): Y'de 5 pozitif ve 5 negatif sembol var; yükler eşit olduğu için Y nötrdür. Nötr, hiç yük taşımıyor demek değildir; pozitif ve negatif yükler eşit miktarda bulunur. I yanlıştır.\nAdım 2 (II): X'te pozitif (9 > 4), Z'de negatif (8 > 3) fazla. Zıt cins yüklü oldukları için birbirini çeker. II doğrudur.\nAdım 3 (III): X yüklü, Y nötrdür. Yüklü cisim nötr cismi çeker. III doğrudur.\nSağlama: II ve III birlikte, tablodaki yük sayılarıyla uyumlu.\nSık yapılan hata: Nötr cisme \"yüksüz\" demek.\nCevap D."
},
{
  "id": "fen-yc-304",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Metal K küresinde 4 tane + ve 9 tane − yük sembolü vardır. Küre, şekildeki gibi iletken bir telle toprağa bağlanıyor.\n**Buna göre bağlantı kurulduktan sonra aşağıdakilerden hangisi gerçekleşir?**",
  "gorsel": "<svg viewBox=\"0 0 540 170\" role=\"img\" aria-label=\"K küresi iletken telle toprağa bağlanıyor\"><circle cx=\"110\" cy=\"70\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"110\" y=\"67\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">4+</text><text x=\"110\" y=\"87\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">9−</text><text x=\"110\" y=\"128\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">K</text><line x1=\"146\" y1=\"70\" x2=\"300\" y2=\"70\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"300\" y1=\"70\" x2=\"300\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"280\" y1=\"120\" x2=\"320\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"287\" y1=\"129\" x2=\"313\" y2=\"129\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"294\" y1=\"138\" x2=\"306\" y2=\"138\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"223\" y=\"58\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">iletken tel</text><text x=\"300\" y=\"160\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text></svg>",
  "secenekler": [
    "Toprak küreye elektron verir ve küre nötrleşir.",
    "Küredeki fazla elektronlar toprağa geçer ve küre tamamen nötrleşir.",
    "Küredeki fazla elektronlar toprağa geçer ve küre pozitif yüklü olur.",
    "Küredeki pozitif yükler toprağa geçer ve küre nötrleşir."
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü ters kurma: K negatif yüklü olduğundan elektron fazlası vardır. Elektronlar toprağa doğru gider, topraktan küreye gelmez.",
    null,
    "Fazla gitme sanma: fazla elektronlar gidince pozitif ve negatif yükler eşitlenir. Küre pozitif değil, nötr olur.",
    "Hareket eden yükü yanlış seçme: iletken katılarda yalnızca elektronlar hareket eder, pozitif yükler yerinde kalır."
  ],
  "aciklama": "Topraklama: yüklü bir cismin fazla yükünün toprakla etkileşip cismin nötrleşmesidir. Katı iletkenlerde yük geçişini elektronlar sağlar.\nAdım 1: K'de − sembolü (9), + sembolünden (4) fazladır. K negatif yüklüdür; yani fazla elektronu vardır.\nAdım 2: Küre toprağa bağlanınca fazla elektronlar toprağa geçer.\nAdım 3: Fazlalık gidince pozitif ve negatif yük sayısı eşitlenir; küre nötrleşir.\nSağlama: Negatif yüklü cisim toprağa elektron verir, pozitif yüklü cisim topraktan elektron alır.\nSık yapılan hata: Negatif cismin topraklanınca pozitif olacağını sanmak.\nCevap B."
},
{
  "id": "fen-yc-305",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Akaryakıt tankerlerinin arkasında, yere değecek şekilde sarkıtılmış metal bir zincir bulunur. Yakıt, tankın içinde çalkalanırken sürtünmeyle yüklenir. Bir mühendis zincirin işleviyle ilgili şu yargıları sıralıyor.\nI. Zincir, tankerde biriken fazla yükün toprağa geçmesini sağlar.\nII. Zincir, tankeri sürekli pozitif yüklü tutarak yakıtın dışarı sızmasını engeller.\nIII. Zincir olmasaydı biriken yük kıvılcım oluşturabilir ve yangın riski doğabilirdi.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur, ama III de doğrudur; biriken yük toprağa geçmezse kıvılcım ve yangın riski doğar.",
    null,
    "Amacı yanlış kurma: zincir tankeri yüklü tutmaz, tersine fazla yükü toprağa boşaltır. II yanlıştır; ayrıca I doğrudur.",
    "Amacı yanlış kurma: zincir tankeri sürekli pozitif yüklü tutmaz, yükü toprağa aktararak tankeri nötr tutar. II yanlıştır."
  ],
  "aciklama": "Topraklama, cisimde biriken fazla yükün toprağa geçmesini sağlayarak can ve mal güvenliğini korur. Yanıcı sıvı taşıyan araçlarda bir kıvılcım yangına yol açabilir.\nAdım 1 (I): Zincir yere değdiği için tankerde biriken fazla yük zincir yoluyla toprağa geçer. I doğrudur.\nAdım 2 (II): Zincir tankeri yüklü tutmaz; yükü boşaltır, tankeri nötr tutar. II yanlıştır.\nAdım 3 (III): Yük birikirse tanker ile çevresi arasında kıvılcım çakabilir; yakıt buharı varsa yangın çıkabilir. III doğrudur.\nSağlama: Zincirin işi yük biriktirmek değil, yük boşaltmaktır; doğru yargılar I ve III.\nSık yapılan hata: Topraklamayı cisme yük kazandırma sanmak.\nCevap B."
},
{
  "id": "fen-yc-306",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Nötr bir elektroskopun topuzuna K, L ve M cisimleri ayrı ayrı değdiriliyor. Her değdirmeden önce elektroskop yeniden nötr hâle getiriliyor. Yapraklardaki gözlemler tabloda verilmiştir.\n**Buna göre bu cisimlerle ilgili aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>Yaprakların durumu</th></tr><tr><td>K</td><td>Açıldı</td></tr><tr><td>L</td><td>Açılmadı</td></tr><tr><td>M</td><td>Açıldı</td></tr></table>",
  "secenekler": [
    "K ve M aynı cins yüklüdür; L nötrdür.",
    "K ve M zıt cins yüklüdür; L nötrdür.",
    "K yüklüdür; L ile M nötrdür.",
    "K ve M yüklüdür; L nötrdür."
  ],
  "dogru": 3,
  "hatalar": [
    "Yük cinsini veriden fazla yorumlama: yapraklar açıldı, yani cisim yüklüdür; ama bu gözlem K ve M'nin aynı cins olup olmadığını göstermez.",
    "Yük cinsini veriden fazla yorumlama: yapraklar açıldı, yani cisim yüklüdür; ama bu gözlem K ve M'nin zıt cins olduğunu göstermez.",
    "M'yi nötr sayma: M'ye de yapraklar açıldığına göre M yüklüdür.",
    null
  ],
  "aciklama": "Elektroskop, bir cismin yüklü olup olmadığını anlamada kullanılır. Nötr elektroskopa değdirilen cisim yüklüyse yapraklar açılır; cisim nötrse yapraklarda değişme olmaz.\nAdım 1: K ve M değince yapraklar açılmış. Demek ki K ve M yüklüdür.\nAdım 2: L değince yapraklar açılmamış. Demek ki L yüklü değildir, yani nötrdür.\nAdım 3: Gözlemde yük cinsi bilgisi yok. K ve M'nin aynı cins mi zıt cins mi olduğu bu tablodan anlaşılmaz.\nSağlama: Yalnızca \"K ve M yüklü, L nötr\" ifadesi tablodaki verilerden kesin olarak çıkar.\nSık yapılan hata: Yapraklar açıldı diye yük cinsini de bildiğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-307",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yalıtkan saplarla tutulan özdeş iletken K ve L küreleri üzerindeki pozitif (+) ve negatif (−) yük sembollerinin sayısı şekilde verilmiştir. K ile L birbirine dokundurulup yeniden ayrılıyor.\n**Buna göre bu işlemle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 540 112\" role=\"img\" aria-label=\"K küresinde 6 artı 2 eksi, L küresinde 4 artı 4 eksi sembol var\"><circle cx=\"150\" cy=\"62\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"150\" y=\"59\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">6+</text><text x=\"150\" y=\"79\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">2−</text><circle cx=\"390\" cy=\"62\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"390\" y=\"59\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">4+</text><text x=\"390\" y=\"79\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">4−</text><text x=\"150\" y=\"18\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">K</text><text x=\"390\" y=\"18\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">L</text></svg>",
  "secenekler": [
    "Elektronlar L'den K'ye geçer ve ikisi de pozitif yüklü olur.",
    "Elektronlar K'den L'ye geçer ve ikisi de pozitif yüklü olur.",
    "Yük geçişi olmaz; K pozitif yüklü, L nötr kalır.",
    "Elektronlar K'den L'ye geçer; K nötr, L negatif yüklü olur."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters kurma: pozitif yüklü K elektron eksiğidir. Elektronlar nötr L'den K'ye geçer, K'den L'ye geçmez.",
    "Dokunmada yük geçişi olmaz sanma: iletken küreler dokunduğunda yük paylaşılır, L nötr kalamaz.",
    "Zıt cinse yüklenme sanma: dokunmayla yüklenen cisimler aynı cins yük kazanır; L negatif olmaz."
  ],
  "aciklama": "Dokunmayla elektriklenmede yüklü cisim yükünü dokunduğu cisimle paylaşır ve her iki cisim de aynı cins yüklü olur.\nAdım 1: K'de + sembolü (6), − sembolünden (2) fazla; K pozitif yüklüdür. L'de eşit sayıda sembol var; L nötrdür.\nAdım 2: Pozitif yüklü K elektron eksiğidir. Dokunma sırasında elektronlar nötr L'den K'ye geçer.\nAdım 3: L elektron kaybettiği için pozitif olur. K'nin pozitif yükü azalır ama pozitif kalır. İkisi de pozitif yüklüdür.\nSağlama: Elektronlar yalnızca L'den K'ye geçti; sonuçta ikisi de aynı cins yüklü.\nSık yapılan hata: Dokunmada cisimlerin zıt cins yükleneceğini sanmak.\nCevap A."
},
{
  "id": "fen-yc-308",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir köy okulunun çatısına paratoner (yıldırımsavar) takılacaktır. Ustalar çatıdaki sivri metal ucu, binanın dış duvarından inen kalın bir bakır iletkenle toprağa gömülü metal bir levhaya bağlıyor. Ustalardan biri iletkeni levhaya bağlamadan çatıda bırakmayı öneriyor.\n**Buna göre bu öneriyle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Sakınca yoktur; çünkü sivri uç, yıldırımın yükünü havada nötrleştirerek binaya ulaşmasını önler.",
    "Sakınca yoktur; çünkü bakır yük iletmediği için yıldırımın yükü binaya geçemez.",
    "Sakınca vardır; çünkü yük toprağa aktarılamaz, binada birikip yangın ya da can kaybına yol açabilir.",
    "Sakınca vardır; çünkü toprağa bağlı olmayan iletken, binayı yıldırımın yüküne zıt cins yükle yükler."
  ],
  "dogru": 2,
  "hatalar": [
    "Paratonerin işlevini yanlış bilme: sivri uç yıldırımı havada nötrleştirmez; yük, iletkenle toprağa aktarılır. Toprağa bağlantı olmazsa güvenlik sağlanmaz.",
    "İletkeni yalıtkan sanma: bakır iyi bir iletkendir; yük iletkenden geçer. Toprağa bağlanmazsa yükün gideceği bir yer kalmaz.",
    null,
    "Topraklamayı zıt yükleme sanma: topraklamasız iletken binayı zıt cins yükle yüklemez; asıl sorun yükün toprağa geçememesidir."
  ],
  "aciklama": "Paratoner, yıldırımın taşıdığı yükü bir iletken yoluyla toprağa geçirerek binayı korur. Bu, topraklamanın can ve mal güvenliği için kullanıldığı bir uygulamadır.\nAdım 1: Sivri uç yıldırımın yükünü toplar. Bakır iyi bir iletkendir; yük iletkenden akar.\nAdım 2: İletken toprağa bağlıysa yük toprağa geçer ve yıldırım binaya zarar vermez.\nAdım 3: İletken toprağa bağlanmazsa yükün gidecek yeri olmaz. Yük binada birikir; kıvılcım, yangın ve elektrik çarpması riski doğar.\nSağlama: Önerinin sakıncası, yükün toprağa aktarılamamasıdır.\nSık yapılan hata: Paratonerin yıldırımı yok ettiğini, yükü toprağa geçirmediğini sanmak.\nCevap C."
},
{
  "id": "fen-yc-309",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Çamaşır makinesinin fişinde, prizdeki topraklama hattına bağlanan üçüncü bir uç bulunur. Makine çalışırken kablodaki bir hata nedeniyle metal gövdeye elektrik yükü geçebilir. Teknisyen topraklama hattının işleviyle ilgili şu yargıları sıralıyor.\nI. Topraklama hattı, gövdeyi kalıcı olarak yüklü tutarak makineyi korur.\nII. Topraklama hattı, gövdeye geçen fazla yükü toprağa ileterek can güvenliğini sağlar.\nIII. Topraklama hattı olmayan makinenin gövdesinde biriken yük, makineye dokunan kişiye geçebilir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "İşlevi ters kurma: topraklama hattı gövdeyi yüklü tutmaz, gövdedeki fazla yükü toprağa boşaltır. I yanlıştır; II ve III doğrudur.",
    "Eksik değerlendirme: II doğrudur, ama yükün kişiye geçebileceğini söyleyen III de doğrudur.",
    null,
    "İşlevi ters kurma: I yanlıştır; topraklama hattı yükü kalıcı olarak tutmaz, toprağa iletir."
  ],
  "aciklama": "Topraklama hattı, cihaz gövdesine geçen fazla yükü toprağa ileterek gövdeyi yük birikiminden korur. Böylece gövdeye dokunan kişi elektrik çarpmasından korunur.\nAdım 1 (I): Hat, gövdeyi yüklü tutmaz; tam tersine yükü boşaltır. I yanlıştır.\nAdım 2 (II): Fazla yük toprağa gittiği için gövde tehlikeli hâle gelmez ve kullanıcı korunur. II doğrudur.\nAdım 3 (III): Hat yoksa yük gövdede birikir. Birikmiş yük, gövdeye dokunan kişinin vücudundan toprağa geçebilir. III doğrudur.\nSağlama: Hattın görevi yükü boşaltmak olduğu için doğru yargılar II ve III.\nSık yapılan hata: Topraklamayı cihaza yük depolama sanmak.\nCevap C."
},
{
  "id": "fen-yc-310",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Uçaklar havada hızla giderken hava ile sürtünerek yüklenir. Kanat ve kuyruk uçlarına, ince iletken çubuklardan oluşan statik boşaltıcılar takılır. Bir mühendis boşaltıcıların işleviyle ilgili şu yargıları sıralıyor.\nI. Boşaltıcılar, uçağa pozitif yük kazandırarak yük birikimini önler.\nII. Boşaltıcılar yalıtkan maddeden yapılsaydı biriken yük uçaktan daha kolay ayrılırdı.\nIII. Boşaltıcılar, sürtünmeyle biriken fazla yükün uçaktan ayrılmasını sağlar.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Boşaltıcıyı yük kazandırma sanma: boşaltıcılar uçağa yük kazandırmaz, fazla yükü uçaktan ayırır. I yanlıştır; III doğrudur.",
    null,
    "Yalıtkanı iletken sanma: yalıtkan çubuk yükün uçaktan ayrılmasına yol vermez. I ve II yanlıştır.",
    "II'yi doğru sanma: yalıtkan madde yükü ayırmaz, yük birikimini artırır. III doğrudur ama II yanlıştır."
  ],
  "aciklama": "Statik boşaltıcılar, uçaklarda topraklama düzeninin bir uygulamasıdır: sürtünmeyle biriken fazla yükün uçaktan ayrılmasını sağlar. Yükün geçebilmesi için yolun iletken olması gerekir.\nAdım 1 (I): Boşaltıcılar uçağa yük kazandırmaz, fazla yükü uçaktan ayırır. I yanlıştır.\nAdım 2 (II): Yalıtkan madde yükün geçmesine izin vermez; yük uçakta birikir. II yanlıştır.\nAdım 3 (III): İletken çubuklar sürtünmeyle biriken fazla yükün uçaktan ayrılmasını sağlar. III doğrudur.\nSağlama: Doğru olan tek yargı, boşaltıcıların görevini doğru anlatan III.\nSık yapılan hata: Yük boşaltan düzeneği yük kazandıran düzenek sanmak.\nCevap B."
},
{
  "id": "fen-yc-311",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Metal L küresinde 9 tane + ve 3 tane − yük sembolü vardır. L küresi iletken telle toprağa bağlanıyor ve tel kaldırılıyor. Ardından L küresi yalıtkan bir sehpaya konuyor ve ona dokundurulmadan negatif yüklü bir çubuk yaklaştırılıyor.\n**Buna göre L küresi ile çubuk arasındaki etkileşim ve nedeni aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Birbirini çeker; çünkü L nötrdür ve yüklü cisim nötr cismi çeker.",
    "Birbirini çeker; çünkü L hâlâ pozitif yüklüdür ve zıt yükler çeker.",
    "Birbirini iter; çünkü L topraktan aldığı elektronlarla negatif yüklenmiştir.",
    "Birbirini ne çeker ne iter; çünkü topraklanan cisim yük taşımaz."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Topraklamanın etkisini yok sayma: L toprağa bağlanınca topraktan elektron alıp nötrleşmiştir. Sonuç yine çekmedir ama nedeni L'nin pozitif kalması değildir.",
    "Topraklamayı aşırı yükleme sanma: pozitif L topraktan yalnızca eksik elektronlarını alır ve nötr olur; negatif olmaz.",
    "Nötrü yüksüz sanma: L nötrdür ama yük taşır. Yüklü bir çubuk nötr cismi çeker."
  ],
  "aciklama": "Topraklanan yüklü cisim nötrleşir. Nötr, yük taşımıyor demek değildir; pozitif ve negatif yükler eşittir. Yüklü bir cisim nötr cismi çeker.\nAdım 1: L'de + sembolü (9), − sembolünden (3) fazladır. L pozitif yüklüdür; elektron eksiği vardır.\nAdım 2: Toprağa bağlanınca topraktan L'ye elektron gelir, eksik kapanır ve L nötr olur. Tel kaldırılınca L nötr kalır.\nAdım 3: Nötr L'ye negatif yüklü çubuk yaklaştırılınca çubuk L'yi çeker.\nSağlama: B de \"çeker\" der ama nedeni yanlıştır; L topraklandığı için artık pozitif yüklü değildir.\nSık yapılan hata: Topraklanan cismin yüklü kaldığını ya da hiç yük taşımadığını düşünmek.\nCevap A."
},
{
  "id": "fen-yc-312",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Tabloda K, L ve M cisimlerindeki pozitif (+) ve negatif (−) yük sembollerinin sayısı verilmiştir. Pozitif yükler yerinde kalır; yalnızca elektronlar alınıp verilebilir ve her elektron bir − sembolü kadardır.\n**Buna göre aşağıdaki işlemlerden hangisi uygulanırsa ilgili cisim nötr olur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>5</td><td>5</td></tr><tr><td>L</td><td>4</td><td>7</td></tr><tr><td>M</td><td>8</td><td>3</td></tr></table>",
  "secenekler": [
    "K cismine 2 elektron verilirse",
    "K cisminden 2 elektron alınırsa",
    "L cisminden 2 elektron alınırsa",
    "M cismine 5 elektron verilirse"
  ],
  "dogru": 3,
  "hatalar": [
    "Elektron vermenin etkisini yanlış okuma: K nötrdür; 2 elektron eklenince − sembolü 7 olur ve K negatif yüklenir.",
    "Elektron almanın etkisini yanlış okuma: K nötrdür; 2 elektron alınınca + sembolü fazla kalır ve K pozitif yüklenir.",
    "Eksik elektron alma: L'de − sembolü + sembolünden 3 fazladır. 2 elektron alınınca hâlâ 1 fazla kalır; L negatif kalır.",
    null
  ],
  "aciklama": "Cismin nötr olması için + ve − sembol sayıları eşit olmalıdır. Pozitif yük sayısı değişmez; yalnızca elektron alınarak ya da verilerek negatif yük sayısı değiştirilir.\nAdım 1: K zaten nötrdür (5 ve 5). Elektron verilirse negatif, alınırsa pozitif yüklenir; ilk iki seçenek nötr yapmaz.\nAdım 2: L'de 4 pozitif, 7 negatif sembol var. Nötr olması için 3 elektron alınmalı; 2 elektron yetmez.\nAdım 3: M'de 8 pozitif, 3 negatif sembol var. 5 elektron verilirse − sembolü 8 olur ve + ile − eşitlenir. M nötr olur.\nSağlama: M: 8 pozitif, 3 + 5 = 8 negatif.\nSık yapılan hata: Fazlalığı hesaplamadan \"biraz elektron alırsa nötr olur\" diye düşünmek.\nCevap D."
},
{
  "id": "fen-yc-313",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Pozitif yüklü K küresi ile negatif yüklü L küresi, ayrı ayrı iletken tellerle toprağa bağlanıyor. Öğrenciler bu işlemle ilgili şu yargıları ileri sürüyor.\nI. K topraklandığında elektronlar K'den toprağa geçer.\nII. L topraklandığında elektronlar L'den toprağa geçer.\nIII. İki küre topraklandıktan sonra birbirini çeker.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü ters kurma: K pozitif yüklüdür, elektron eksiğidir. Topraklandığında topraktan K'ye elektron gelir; K'den toprağa elektron gitmez.",
    null,
    "Topraklanan kürelerin yüklü kaldığını sanma: ikisi de nötrleşir, nötr iki küre birbirini çekmez. Ayrıca I yönü ters kurulmuştur.",
    "III'ü doğru sanma: topraklama sonunda iki küre de nötr olur; nötr cisimler birbirini çekmez."
  ],
  "aciklama": "Topraklamada yük geçişini elektronlar yapar. Negatif yüklü cisim fazla elektronunu toprağa verir; pozitif yüklü cisim elektron eksiğini topraktan alır. İkisi de sonunda nötr olur.\nAdım 1 (I): K pozitif yüklüdür; elektron eksiği vardır. Topraklanınca elektronlar topraktan K'ye gelir. I yanlıştır.\nAdım 2 (II): L negatif yüklüdür; fazla elektronları toprağa geçer. II doğrudur.\nAdım 3 (III): İki küre de nötr olduğundan aralarında çekme ya da itme olmaz. III yanlıştır.\nSağlama: Toprağa elektron giden tek durum L; yalnız II doğrudur.\nSık yapılan hata: Her topraklamada elektronların cisimden toprağa gittiğini sanmak.\nCevap B."
},
{
  "id": "fen-yc-314",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Okulun bilgisayar laboratuvarında, metal gövdeli bir kasanın fişi, topraklama hattı bağlanmamış bir prize takılıyor. Teknisyen bu durumun neden sakıncalı olduğunu öğrencilere açıklıyor.\n**Buna göre teknisyenin açıklaması aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Gövde nötr kalır; ancak cihaz yük alamadığı için daha yavaş çalışır.",
    "Gövdeye geçen yük cihazın içine dağılır; kullanıcı bu yüzden güvende kalır.",
    "Gövdeye geçen yük boşalamaz; gövdede birikir ve dokunan kişiye geçebilir.",
    "Gövdeye geçen yük çok hızlı boşalır; bu yüzden kasa kıvılcım çıkararak yanar."
  ],
  "dogru": 2,
  "hatalar": [
    "Topraklamayı hız ile ilişkilendirme: topraklama hattı cihazın hızıyla ilgili değil, fazla yükün boşalması ve güvenlikle ilgilidir; gövde de nötr kalmaz.",
    "Yükün dağılıp yok olduğunu sanma: gövdeye geçen yük cihazın içinde kaybolmaz; boşalacağı yol yoksa gövdede birikir.",
    null,
    "Hat varmış gibi düşünme: topraklama hattı yükü toprağa kontrollü biçimde akıtır. Hat yokken yük akamaz; gövdede birikir."
  ],
  "aciklama": "Topraklama hattı, cihaz gövdesine geçen fazla yükü toprağa iletir. Bu hat yoksa yük gövdede birikir.\nAdım 1: Hattın görevi, gövdedeki fazla yükü toprağa geçirmektir.\nAdım 2: Hat bağlı değilse kasanın gövdesine geçen yük toprağa aktarılamaz; gövdede kalır.\nAdım 3: Yüklü gövdeye dokunan kişinin vücudu yükün toprağa gitmesi için yol olur. Bu da elektrik çarpmasına ve can güvenliğinin tehlikeye girmesine neden olur.\nSağlama: Sakıncanın sebebi hız ya da enerji değil, yükün boşalamamasıdır.\nSık yapılan hata: Topraklamayı cihazın performansıyla ilgili sanmak.\nCevap C."
},
{
  "id": "fen-yc-315",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Özdeş iletken P, R ve S kürelerindeki pozitif (+) ve negatif (−) yük sembollerinin sayısı şekilde verilmiştir. Küreler ayrı ayrı iletken tellerle toprağa bağlanıyor.\n**Buna göre hangi kürelerle toprak arasında yük alışverişi olmaz?**",
  "gorsel": "<svg viewBox=\"0 0 540 178\" role=\"img\" aria-label=\"P küresinde 2 artı 7 eksi, R küresinde 6 artı 6 eksi, S küresinde 8 artı 3 eksi sembol var; her küre toprağa bağlı\"><circle cx=\"90\" cy=\"66\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"90\" y=\"63\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">2+</text><text x=\"90\" y=\"83\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">7−</text><circle cx=\"270\" cy=\"66\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"270\" y=\"63\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">6+</text><text x=\"270\" y=\"83\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">6−</text><circle cx=\"450\" cy=\"66\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"450\" y=\"63\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">8+</text><text x=\"450\" y=\"83\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">3−</text><text x=\"90\" y=\"20\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">P</text><text x=\"270\" y=\"20\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">R</text><text x=\"450\" y=\"20\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">S</text><line x1=\"90\" y1=\"102\" x2=\"90\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"270\" y1=\"102\" x2=\"270\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"450\" y1=\"102\" x2=\"450\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"70\" y1=\"128\" x2=\"110\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"77\" y1=\"137\" x2=\"103\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"84\" y1=\"146\" x2=\"96\" y2=\"146\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"250\" y1=\"128\" x2=\"290\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"257\" y1=\"137\" x2=\"283\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"264\" y1=\"146\" x2=\"276\" y2=\"146\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"430\" y1=\"128\" x2=\"470\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"437\" y1=\"137\" x2=\"463\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"444\" y1=\"146\" x2=\"456\" y2=\"146\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"90\" y=\"170\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text><text x=\"270\" y=\"170\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text><text x=\"450\" y=\"170\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text></svg>",
  "secenekler": [
    "Yalnız R",
    "Yalnız P",
    "P ve S",
    "P, R ve S"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Negatifi nötr sanma: P'de − sembolü fazladır; P negatif yüklüdür ve fazla elektronunu toprağa verir. Alışveriş olur.",
    "Yüklü cismi toprakla etkileşmez sanma: P negatif, S pozitif yüklüdür. Her ikisi de toprakla elektron alışverişi yapar.",
    "Topraklamayı herkes için yük geçişi sanma: R'de pozitif ve negatif yükler eşit olduğundan R nötrdür; toprakla alışveriş yapmaz."
  ],
  "aciklama": "Topraklamada yük geçişi, cismin fazla ya da eksik yükü varsa olur. Nötr cismin ne fazlası ne eksiği vardır; toprakla yük alışverişi yapmaz.\nAdım 1: P'de − sembolü fazla (7 > 2). P negatiftir; elektronlarını toprağa verir.\nAdım 2: S'de + sembolü fazla (8 > 3). S pozitiftir; topraktan elektron alır.\nAdım 3: R'de 6 pozitif ve 6 negatif var. R nötrdür; toprakla yük alışverişi olmaz.\nSağlama: Yük alışverişi yapmayan tek küre R.\nSık yapılan hata: Her toprak bağlantısında mutlaka yük geçişi olacağını sanmak.\nCevap A."
},
{
  "id": "fen-yc-316",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan saplarla tutulan özdeş iletken K, L ve M kürelerindeki pozitif (+) ve negatif (−) yük sembollerinin sayısı şekilde verilmiştir. Önce K ile L birbirine dokundurulup ayrılıyor. Daha sonra K, M ile dokundurulup yeniden ayrılıyor. Dokunma sırasında zıt yükler birbirini nötrler, artan yük ise iki küre arasında paylaşılır.\n**Buna göre işlemler bittiğinde K, L ve M kürelerinin yük durumu aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 540 112\" role=\"img\" aria-label=\"K küresinde 7 artı 2 eksi, L küresinde 3 artı 8 eksi, M küresinde 9 artı 3 eksi sembol var\"><circle cx=\"90\" cy=\"62\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"90\" y=\"59\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">7+</text><text x=\"90\" y=\"79\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">2−</text><circle cx=\"270\" cy=\"62\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"270\" y=\"59\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">3+</text><text x=\"270\" y=\"79\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">8−</text><circle cx=\"450\" cy=\"62\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"450\" y=\"59\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">9+</text><text x=\"450\" y=\"79\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">3−</text><text x=\"90\" y=\"18\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">K</text><text x=\"270\" y=\"18\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">L</text><text x=\"450\" y=\"18\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">M</text></svg>",
  "secenekler": [
    "K, L ve M nötrdür.",
    "K pozitif, L nötr, M nötrdür.",
    "K negatif, L nötr, M pozitiftir.",
    "K pozitif, L nötr, M pozitiftir."
  ],
  "dogru": 3,
  "hatalar": [
    "M'nin yükünü unutma: K nötr olsa da M pozitif yüklüdür; dokunmada yük paylaşılır, M'nin yükü yok olmaz.",
    "M'nin pozitif yükünü paylaşmama: nötr K, pozitif M'ye dokununca M'nin yükünü paylaşır; M de K de pozitif olur.",
    "K'nin son yükünü yanlış bulma: ilk dokunmadan sonra K nötrdür, ikinci dokunmada pozitif M ile yükünü paylaştığı için K negatif değil pozitif olur.",
    null
  ],
  "aciklama": "Özdeş iletken küreler dokunduğunda zıt yükler birbirini nötrler; artan yük varsa iki küre arasında paylaşılır ve ikisi de artan yükün cinsinde olur.\nAdım 1: K: 7 pozitif, 2 negatif; pozitif yüklüdür (5 fazla). L: 3 pozitif, 8 negatif; negatif yüklüdür (5 fazla). M: 9 pozitif, 3 negatif; pozitif yüklüdür (6 fazla).\nAdım 2: K ile L dokunur. Pozitif fazlalık ile negatif fazlalık eşit olduğundan birbirini tamamen nötrler. K ve L nötr olur.\nAdım 3: Nötr K, pozitif M ile dokunur. M'nin 6 fazlalığı iki küre arasında paylaşılır; K ve M üçer fazlalıkla pozitif yüklü olur. L ilk işlemden sonra nötr kalmıştır.\nSağlama: Toplam yük K ve L'de sıfırdı; M'nin pozitif yükü K ile paylaşıldı. L'ye başka işlem yapılmadı.\nSık yapılan hata: Nötrleşen K ile M'nin yükünü birbirini yok eder sanmak.\nCevap D."
},
{
  "id": "fen-yc-317",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan saplı özdeş iletken K ve L kürelerindeki pozitif (+) ve negatif (−) yük sembollerinin sayısı şekilde verilmiştir. Önce L küresi iletken telle toprağa bağlanıyor, sonra bağlantı kesiliyor. Daha sonra K ile L birbirine dokundurulup ayrılıyor. Öğrenciler sonuçla ilgili şu yargıları ileri sürüyor.\nI. Topraklama sonunda L nötr olur.\nII. Dokunma sonunda K ve L aynı cins yüklü olur.\nIII. Dokunma sonunda K ile L birbirini iter.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 540 178\" role=\"img\" aria-label=\"K küresinde 8 artı 2 eksi, L küresinde 2 artı 7 eksi sembol var; L küresi toprağa bağlı\"><circle cx=\"110\" cy=\"66\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"110\" y=\"63\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">8+</text><text x=\"110\" y=\"83\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">2−</text><circle cx=\"330\" cy=\"66\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"330\" y=\"63\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">2+</text><text x=\"330\" y=\"83\" text-anchor=\"middle\" font-size=\"17\" fill=\"currentColor\">7−</text><text x=\"110\" y=\"20\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">K</text><text x=\"330\" y=\"20\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">L</text><line x1=\"330\" y1=\"102\" x2=\"330\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"310\" y1=\"128\" x2=\"350\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"317\" y1=\"137\" x2=\"343\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"324\" y1=\"146\" x2=\"336\" y2=\"146\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"330\" y=\"170\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text></svg>",
  "secenekler": [
    "Yalnız II",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: II doğrudur, ama L topraklanınca nötr olur (I) ve aynı cins yüklü küreler birbirini iter (III).",
    "Eksik değerlendirme: I ve II doğrudur, ama dokunmadan sonra iki küre de pozitif olduğundan birbirini iterler; III de doğrudur.",
    "Eksik değerlendirme: II ve III doğrudur, ama L negatif yüklüyken topraklanınca fazla elektronlarını verip nötrleşir; I de doğrudur.",
    null
  ],
  "aciklama": "Topraklanan yüklü cisim nötrleşir. Nötr bir iletken yüklü iletkene dokununca yük paylaşılır ve iki cisim aynı cins yüklü olur. Aynı cins yükler birbirini iter.\nAdım 1 (I): L negatif yüklüdür (7 > 2). Topraklanınca fazla elektronlar toprağa geçer; L nötr olur. I doğrudur.\nAdım 2 (II): K pozitif yüklüdür (8 > 2). Bağlantısı kesilmiş nötr L ile dokununca K'nin yükü paylaşılır; ikisi de pozitif olur. II doğrudur.\nAdım 3 (III): İki küre de pozitif yüklü olduğundan birbirini iter. III doğrudur.\nSağlama: Sırasıyla L nötr, sonra K ve L pozitif, sonra itme.\nSık yapılan hata: Dokunmadan sonra kürelerin zıt yükleneceğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-318",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan saplı özdeş iletken P ve R kürelerinden P'de 4 tane + ve 4 tane −, R'de 8 tane + ve 2 tane − yük sembolü vardır. P ile R birbirine dokundurulup ayrılıyor. Dokunma sırasında yalnızca elektronlar geçer ve toplam yük iki küre arasında eşit paylaşılır.\n**Buna göre bu işlemle ilgili aşağıdakilerden hangisi kesinlikle __olamaz__?**",
  "gorsel": null,
  "secenekler": [
    "P'den R'ye 6 elektron geçer ve R nötr olur.",
    "P'den R'ye 3 elektron geçer ve P 4+ ve 1− olur.",
    "R'nin elektron eksiği azalır ve R 8+ ve 5− olur.",
    "İki küre de pozitif yüklü olur ve yükleri birbirine eşit olur."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Olabilecek durumu olamaz sanma: toplam pozitif fazlalık 6'dır ve iki küre arasında eşit paylaşılır; her birinde 3 fazlalık kalır. P 3 elektron verirse 4+ ve 1− olur. Bu olur.",
    "Olabilecek durumu olamaz sanma: R 3 elektron alınca − sembolü 2'den 5'e çıkar; elektron eksiği azalır ama sürer. R 8+ ve 5− olur. Bu olur.",
    "Olabilecek durumu olamaz sanma: iki küre de 3 fazlalıkla pozitif yüklü olur ve yükleri eşit olur. Bu olur."
  ],
  "aciklama": "Özdeş iletken küreler dokunduğunda toplam yük iki küre arasında eşit paylaşılır. Elektronlar, elektron eksiği olan pozitif yüklü cisme doğru geçer.\nAdım 1: P nötrdür (4 ve 4). R'de + sembolü fazladır (8 > 2); R, 6 fazlalıkla pozitif yüklüdür. Toplam fazlalık 6'dır.\nAdım 2: Dokunmada iki küre bu fazlalığı eşit paylaşır; her birinde 3 fazlalık kalır. P'nin 3 fazlalığa ulaşması için 3 elektron P'den R'ye geçer: P 4+ ve 1−, R 8+ ve 5− olur. İkisi de pozitif yüklüdür.\nAdım 3: A seçeneğinde 6 elektron geçiyor. P'de yalnızca 4 elektron var; üstelik R'nin nötr olması, yükün iki küre arasında eşit paylaşılmasıyla çelişir. A olamaz.\nSağlama: B, C ve D aynı sonucu (3 elektron P'den R'ye geçer, ikisi de eşit pozitif yüklü) farklı yönlerden anlatır.\nSık yapılan hata: Pozitif yüklü cismin, nötr cisme dokununca tamamen nötrleşeceğini sanmak.\nCevap A."
},
{
  "id": "fen-yc-319",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir matbaada kâğıt rulosu, makinenin silindirleri üzerinden hızla geçerken sürtünmeyle yüklenir. Yüklü kâğıtlar birbirine yapışır ve makineye dokunan çalışanlar zaman zaman hafif elektrik çarpması hisseder. Makine sorumlusu yük birikimini azaltmak için şu önlemleri değerlendiriyor.\nI. Makinenin metal gövdesini iletken telle toprağa bağlamak\nII. Makineyi yalıtkan plastik bir zemin üzerine oturtmak\nIII. Yalıtkan kauçuk silindirler yerine, toprağa bağlı iletken metal silindirler kullanmak\n**Buna göre bu önlemlerden hangileri yük birikimini azaltır?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur, ama toprağa bağlı iletken silindirler de yükün toprağa geçmesine yol açar; III de doğrudur.",
    "Eksik değerlendirme: III doğrudur, ama makinenin gövdesinin topraklanması da biriken yükü boşaltır; I de doğrudur.",
    null,
    "Yalıtımı güvenlik sanma: yalıtkan zemin, makinedeki yükün toprağa geçmesini engeller ve yük birikimini artırır. II birikimi azaltmaz."
  ],
  "aciklama": "Yük birikimini azaltmak için yüke toprağa giden iletken bir yol açılır. Yalıtkan malzeme yükün toprağa geçmesini engeller.\nAdım 1 (I): Metal gövdeyi iletken telle toprağa bağlamak, sürtünmeyle biriken yükü toprağa aktarır. Birikim azalır.\nAdım 2 (II): Yalıtkan zemin yükün toprağa gitmesini engeller; yük birikir. Birikim azalmaz, artar.\nAdım 3 (III): Toprağa bağlı iletken metal silindirler, kâğıttan geçen yükü toprağa iletir. Birikim azalır.\nSağlama: Yük için toprağa iletken yol açan önlemler I ve III.\nSık yapılan hata: Yalıtımın her zaman güvenlik sağladığını sanmak.\nCevap C."
},
{
  "id": "fen-yc-320",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan sehpa üzerindeki nötr metal K küresine, negatif yüklü bir çubuk dokundurulmadan yaklaştırılıyor. Çubuk yerinde tutulurken K küresi bir an iletken telle toprağa bağlanıyor ve tel kaldırılıyor. Son olarak çubuk uzaklaştırılıyor.\n**Buna göre K küresinin son durumu ve nedeni aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Nötr kalır; çünkü çubuk küreye hiç yük vermemiştir.",
    "Pozitif yüklenir; çünkü küreden toprağa elektron geçmiştir.",
    "Negatif yüklenir; çünkü toprak küreye elektron vermiştir.",
    "Negatif yüklenir; çünkü çubuktan küreye elektron geçmiştir."
  ],
  "dogru": 1,
  "hatalar": [
    "Topraklamanın etkisini yok sayma: çubuk yük vermemiştir ama küre topraklanırken elektron kaybettiği için nötr kalmaz.",
    null,
    "Yönü ters kurma: negatif yüklü çubuk küredeki elektronları iter. Elektronlar topraktan küreye gelmez, küreden toprağa gider.",
    "Dokunmayı karıştırma: çubuk küreye dokundurulmamıştır, yaklaştırılmıştır. Çubuktan küreye elektron geçmez."
  ],
  "aciklama": "Negatif yüklü bir çubuk yaklaştırılınca nötr kürenin elektronları çubuktan uzağa itilir. Küre toprağa bağlanırsa bu elektronlar toprağa geçer.\nAdım 1: Negatif çubuk, K'nin elektronlarını iter. Elektronlar kürenin uzak bölgesine toplanır.\nAdım 2: K toprağa bağlanınca bu elektronlar tel yoluyla toprağa geçer. Küre elektron kaybeder.\nAdım 3: Tel kaldırılınca küre bu durumda kalır; çubuk uzaklaşsa da küredeki elektron eksiği sürer. K pozitif yüklenir.\nSağlama: Küre elektron verdiği için pozitif; yüklenme çubuğa dokunmadan, yani etkiyle oldu.\nSık yapılan hata: Topraklama sırasında elektronların topraktan küreye geldiğini sanmak.\nCevap B."
},
{
  "id": "fen-yc-321",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir öğrenci, aşağıdaki tabloda ilk yük durumları pozitif (+) ve negatif (−) sembol sayılarıyla verilen üç iletken kürenin ayrı ayrı toprağa bağlandığında nasıl bir son durumda olacağını tahmin etmiştir.\nI. K için yaptığı tahmin\nII. L için yaptığı tahmin\nIII. M için yaptığı tahmin\n**Buna göre öğrencinin hangi tahminleri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre</th><th>İlk durum</th><th>Öğrencinin tahmini</th></tr><tr><td>K</td><td>6+ ve 2−</td><td>Nötr olur</td></tr><tr><td>L</td><td>3+ ve 8−</td><td>Pozitif olur</td></tr><tr><td>M</td><td>5+ ve 5−</td><td>Nötr kalır</td></tr></table>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve III",
    "I, II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: K'nin nötr olacağı doğrudur, ama nötr M de topraklanınca nötr kalır; III de doğrudur.",
    "Eksik değerlendirme: M'nin nötr kalacağı doğrudur, ama pozitif K topraklanınca elektron alıp nötr olur; I de doğrudur.",
    null,
    "L'nin yükünü karıştırma: L negatif yüklüdür (8 > 3). Topraklanınca fazla elektronlarını verip nötr olur, pozitif olmaz. II yanlıştır."
  ],
  "aciklama": "Topraklanan yüklü cisim nötr olur. Nötr cisim zaten nötr olduğu için topraklanınca değişmez.\nAdım 1 (I): K'de + sembolü fazla (6 > 2); K pozitif yüklüdür. Topraklanınca topraktan elektron alır ve nötr olur. Tahmin doğrudur.\nAdım 2 (II): L'de − sembolü fazla (8 > 3); L negatif yüklüdür. Topraklanınca fazla elektronlar toprağa geçer ve L nötr olur. \"Pozitif olur\" tahmini yanlıştır.\nAdım 3 (III): M'de 5 ve 5 sembol var; M nötrdür. Topraklanınca yük alışverişi olmaz, M nötr kalır. Tahmin doğrudur.\nSağlama: Topraklanan hiçbir cismin son durumu yüklü değildir; L için verilen \"pozitif\" tek tutarsız tahmin.\nSık yapılan hata: Topraklamanın cismi pozitif ya da negatif yaptığını sanmak.\nCevap C."
},
{
  "id": "fen-yc-322",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir elektronik tamir atölyesinde çalışan Ayhan, kışın halı ile ayakkabısı arasındaki sürtünme nedeniyle vücudunda yük biriktiğini fark ediyor. Devre kartlarındaki küçük elemanlar çok hassastır. Ayhan, çalışma masasının topraklama noktasına bağlı iletken bir bileklik takarak çalışmaya başlıyor.\n**Buna göre bilekliğin kullanım amacı aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Vücutta yük birikmesini önleyerek elemanların zarar görmesini engellemek",
    "Vücudu negatif yükleyerek elemanların kart üzerinde yerinde durmasını sağlamak",
    "Elemanlardaki yükü vücuda aktararak elemanların yüklenmesini engellemek",
    "Vücuttaki yükü elemanlara yavaş yavaş aktararak kıvılcımı önlemek"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Topraklamayı yükleme sanma: bileklik vücudu yüklemez; tersine yükü boşaltır. Yüklü vücut elemanları yerinde tutmaz.",
    "Yük akış yönünü ters kurma: bileklik, elemanlardaki yükü vücuda değil, vücuttaki yükü toprağa aktarır.",
    "Yükün gideceği yeri yanlış seçme: bileklik vücuttaki yükü elemanlara değil, toprağa iletir. Elemanlara yük geçmesi onlara zarar verir."
  ],
  "aciklama": "Topraklama, cisimde biriken fazla yükü toprağa geçirir. Elektronik elemanlar yük boşalmasından zarar görebilir; bu yüzden teknisyenler topraklı bileklik kullanır.\nAdım 1: Sürtünme Ayhan'ın vücudunda yük biriktirir.\nAdım 2: Bileklik iletken bir telle masanın topraklama noktasına bağlıdır. Vücuttaki fazla yük sürekli olarak toprağa geçer.\nAdım 3: Yük birikmediği için Ayhan elemanlara dokunduğunda elemanlara yük geçmez ve elemanlar zarar görmez.\nSağlama: Bilekliğin görevi yükü vücuttan toprağa taşımaktır; vücudu yüklemek, elemanlardan yük almak ya da elemanlara yük vermek değildir.\nSık yapılan hata: Topraklamayı cisme yük kazandırma işlemi sanmak.\nCevap A."
},
{
  "id": "fen-yc-323",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yük ölçümünde kullanılan yapraklı bir elektroskopun topuzuna yüklü bir K cismi dokundurulunca yapraklar açılıyor. Daha sonra elektroskop iletken telle toprağa bağlanınca yapraklar kapanıyor. Öğrenciler bu gözlemle ilgili şu yargıları ileri sürüyor.\nI. Yapraklar kapandığında elektroskopta hiç yük kalmamıştır.\nII. Elektroskoptaki fazla yük toprağa geçmiştir.\nIII. Yapraklar kapandığı için elektroskopa daha önce yük geçmemiştir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Nötrü yüksüz sanma: yapraklar kapandığında elektroskop nötrdür, yani pozitif ve negatif yükler eşittir. Hiç yük kalmamış olmaz. Ayrıca II doğrudur.",
    null,
    "Gözlemi yanlış yorumlama: yapraklar önce açıldığı için elektroskopa yük geçmiştir. Hiç yük kalmaması da söz konusu değildir; nötrdür.",
    "III'ü doğru sanma: yapraklar daha önce açıldığına göre elektroskopa yük geçmiştir; kapanma, yükün sonradan toprağa gitmesinin sonucudur."
  ],
  "aciklama": "Elektroskop, yükün varlığını yapraklarının açılmasıyla gösterir. Yapraklar açılmışsa cisim yüklüdür; nötr olduğunda yapraklar kapanır. Nötr, yük yok demek değildir; pozitif ve negatif yükler eşittir.\nAdım 1 (I): Kapandığında elektroskop nötrdür. Nötr cisimde eşit miktarda pozitif ve negatif yük vardır; \"hiç yük yok\" demek yanlıştır.\nAdım 2 (II): Elektroskop topraklanınca fazla yük toprağa geçti ve elektroskop nötrleşti. II doğrudur.\nAdım 3 (III): Yapraklar topraklamadan önce açıktı; yani elektroskopa yük geçmişti. III yanlıştır.\nSağlama: Topraklama öncesi açık yapraklar yükü, topraklama sonrası kapanmaları yükün boşaldığını gösterir.\nSık yapılan hata: Kapalı yapraklı elektroskobun \"yüksüz\" olduğunu düşünmek.\nCevap B."
},
{
  "id": "fen-yc-324",
  "kazanim": "F.8.7.2.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yalıtkan iplerle asılı K, L ve M küreleri vardır. K ve L küreleri üzerindeki pozitif (+) ve negatif (−) yük sembollerinin sayısı tabloda verilmiştir. M küresinin yük durumu bilinmemektedir. M küresi K'ye yaklaştırıldığında ikisi birbirini çekiyor; M küresi L'ye yaklaştırıldığında da ikisi birbirini çekiyor.\n**Buna göre M küresi için aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>5</td><td>9</td></tr><tr><td>L</td><td>7</td><td>7</td></tr><tr><td>M</td><td>?</td><td>?</td></tr></table>",
  "secenekler": [
    "M nötrdür.",
    "M negatif yüklüdür.",
    "M nötr ya da pozitif yüklüdür.",
    "M kesinlikle pozitif yüklüdür."
  ],
  "dogru": 3,
  "hatalar": [
    "Nötr olasılığını bırakamama: M nötr olsaydı nötr L ile aralarında çekme olmazdı. L ile çekiştiğine göre M yüklüdür.",
    "Zıt cinsi aynı cins sanma: K negatif yüklüdür (9 > 5). M negatif olsaydı K ile itişirdi; çekiştiklerine göre M negatif olamaz.",
    "Nötr olasılığını elemeyi atlama: K ile çekişme M'nin nötr ya da pozitif olduğunu söyler, ama L nötr olduğundan M nötr olamaz.",
    null
  ],
  "aciklama": "Zıt cins yükler birbirini çeker; aynı cins yükler iter. Yüklü cisim nötr cismi çeker. İki nötr cisim birbirini ne çeker ne iter.\nAdım 1: K'de − sembolü fazla; K negatif yüklüdür. L'de eşit sayıda sembol var; L nötrdür.\nAdım 2: M, K'yi çekiyor. M negatif olsaydı K'yi iterdi; yani M nötr ya da pozitiftir.\nAdım 3: M, nötr L'yi de çekiyor. Nötr L'yi ancak yüklü bir cisim çeker; yani M nötr olamaz.\nSağlama: Nötr ya da pozitif olasılığından nötr çıkınca M pozitif kalır.\nSık yapılan hata: Nötr cisimlerin de birbirini çekebileceğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-325",
  "kazanim": "F.8.7.2.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir un fabrikasında un, uzun boru hatlarında hızla taşınırken boru yüzeyine sürtünür. Havada asılı kalan ince un tozu yanıcıdır. Fabrikada boru hatlarının metal kısımları birbirine iletken bağlantılarla ekleniyor ve toprağa bağlanıyor. Müdür bu uygulamanın amacını çalışanlara açıklıyor.\n**Buna göre müdürün açıklaması aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Boruları yalıtkan yaparak sürtünmeyi azaltmak ve yük birikimini önlemek için",
    "Unu toprağa bağlayarak nötr tutmak ve boruya yapışmasını önlemek için",
    "Yükü kontrollü biçimde nötrleştirerek tozun tutuşma riskini azaltmak için",
    "Boruları pozitif yükleyerek unun boru yüzeyinden uzaklaşmasını sağlamak için"
  ],
  "dogru": 2,
  "hatalar": [
    "Topraklamayı yalıtım sanma: borular iletken bağlantılarla eklenip toprağa bağlanır, yalıtkan yapılmaz. Yük birikimini önleyen şey yalıtım değil, yükün toprağa geçmesidir.",
    "Topraklanan şeyi karıştırma: toprağa bağlanan borulardır, un değil. Amaç unun yapışmasını önlemek değil, biriken yükü boşaltmaktır.",
    null,
    "Topraklamayı yükleme sanma: topraklama boruları pozitif yüklemez; biriken yükü boşaltır."
  ],
  "aciklama": "Sürtünme cisimlerde yük biriktirir. Yanıcı toz ya da buhar bulunan ortamlarda biriken yükün boşalması kıvılcım üretebilir. Bu yüzden metal aksamlar iletken bağlantılarla birbirine ve toprağa bağlanır.\nAdım 1: Un boru yüzeyine sürtünür; sürtünme yük birikmesine neden olur.\nAdım 2: Borular iletken bağlantılarla eklenip toprağa bağlandığında biriken yük toprağa geçer ve borular nötr kalır.\nAdım 3: Yük birikmediği için kıvılcım çakmaz; yanıcı un tozunun tutuşma riski azalır.\nSağlama: Uygulama yük biriktirmez, yükü kontrollü biçimde boşaltır. Amaç can ve mal güvenliğidir.\nSık yapılan hata: Topraklamayı yüklenmeye yardım eden bir önlem sanmak.\nCevap C."
},
{
  "id": "fen-yc-001",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Nötr bir cisimle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yük sayısı negatif yük sayısından fazladır.",
    "Pozitif yük sayısı negatif yük sayısına eşittir.",
    "Hiç pozitif ve negatif yük taşımaz.",
    "Negatif yük sayısı pozitif yük sayısından fazladır."
  ],
  "dogru": 1,
  "hatalar": [
    "Pozitif yüklü cismi nötr sanma: pozitif yük fazlaysa cisim pozitif yüklüdür.",
    null,
    "Nötrü yüksüz sanma: nötr cisimde pozitif ve negatif yükler vardır, yalnızca eşit miktardadır.",
    "Negatif yüklü cismi nötr sanma: negatif yük fazlaysa cisim negatif yüklüdür."
  ],
  "aciklama": "Nötr cisimde pozitif ve negatif yük miktarları eşittir. Yükler yok değildir, birbirini dengeler.\nAdım 1: Pozitif fazlaysa cisim pozitif, negatif fazlaysa negatif yüklüdür.\nAdım 2: İkisi eşitse cisim nötrdür.\nSağlama: Cisimde 5 pozitif ve 5 negatif yük varsa cisim nötrdür ama yük taşır.\nSık yapılan hata: Nötr ile yüksüzü karıştırmak.\nCevap B."
},
{
  "id": "fen-yc-002",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Topraklama aşağıdakilerden hangisini ifade eder?**",
  "gorsel": null,
  "secenekler": [
    "Yüklü bir cismi toprağa bağlayıp yükünü artırmayı",
    "Nötr bir cismi toprağa bağlayıp yüklemeyi",
    "Yüklü bir cismi yalıtıp yükünü korumayı",
    "Yüklü bir cismi toprağa bağlayıp nötrleştirmeyi"
  ],
  "dogru": 3,
  "hatalar": [
    "Topraklamayı yükleme sanma: topraklama yükü artırmaz, fazla yükü toprağa geçirir.",
    "Topraklamayı yükleme sanma: nötr cisim topraklanınca yüklenmez.",
    "Topraklamayı yalıtma sanma: yalıtım yükü korur; topraklama ise yükü toprağa boşaltır.",
    null
  ],
  "aciklama": "Topraklama, yüklü bir cismin fazla yükünün toprakla etkileşip cismin nötrleşmesidir.\nAdım 1: Cisim iletken telle toprağa bağlanır.\nAdım 2: Fazla elektronlar toprağa geçer ya da eksik elektronlar topraktan gelir.\nAdım 3: Cisim nötrleşir.\nSağlama: Topraklama yükü artırmaz, azaltır.\nSık yapılan hata: Topraklamayı yüklenme yöntemi sanmak.\nCevap D."
},
{
  "id": "fen-yc-003",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Üzerinde 7 tane + ve 4 tane − yük sembolü bulunan cismin yük durumu aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yüklüdür.",
    "Negatif yüklüdür.",
    "Nötrdür.",
    "Yük cinsi belirlenemez."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük cinsini ters okuma: + sembolü fazla olduğundan cisim pozitiftir.",
    "Eşit sanma: 7 ile 4 eşit değildir, yani cisim nötr değildir.",
    "Veriyi yetersiz sanma: sembol sayıları yük cinsini belirlemeye yeter."
  ],
  "aciklama": "Hangi tür yük fazlaysa cisim o cins yüklüdür.\nAdım 1: Pozitif sembol sayısı 7, negatif sembol sayısı 4.\nAdım 2: Pozitif yük fazla olduğu için cisim pozitif yüklüdür.\nSağlama: 7 > 4.\nSık yapılan hata: Sayılar eşit değilken nötr demek.\nCevap A."
},
{
  "id": "fen-yc-004",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**Yüksek binaların çatısına takılan paratonerin (yıldırımsavar) görevi aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Yıldırımın yükünü topraklama hattıyla toprağa iletmek",
    "Yıldırımın yükünü bina içinde depolamak",
    "Bulutlardaki yük miktarını artırmak",
    "Binayı bulutla zıt cins yükle sürekli yüklü tutmak"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Paratonerin işlevini yanlış bilme: yük bina içinde depolanmaz, toprağa iletilir.",
    "Paratonerin işlevini yanlış bilme: paratoner bulutun yükünü değiştirmez.",
    "Topraklamayı yükleme sanma: bina yüklü tutulmaz, yük toprağa geçirilir."
  ],
  "aciklama": "Paratoner, yıldırımın yükünü iletkenle toprağa geçirerek binayı korur.\nAdım 1: Çatıdaki sivri metal uç yıldırımın yükünü toplar.\nAdım 2: İletken, yükü toprağa gömülü levhaya taşır.\nAdım 3: Yük toprağa geçtiği için bina zarar görmez.\nSağlama: Paratonerin görevi yükü boşaltmaktır.\nSık yapılan hata: Paratonerin yükü yok ettiğini ya da depoladığını sanmak.\nCevap A."
},
{
  "id": "fen-yc-005",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Yalıtkan saplı özdeş iletken K ve L kürelerinden K'de 4 tane + ve 8 tane − sembol bulunmaktadır; L nötrdür. K ile L birbirine dokundurulup ayrılıyor.\n**Buna göre ayrıldıktan sonra kürelerin yük durumu aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "İkisi de nötr olur.",
    "K negatif, L pozitif olur.",
    "İkisi de negatif yüklü olur.",
    "K nötr, L negatif yüklü olur."
  ],
  "dogru": 2,
  "hatalar": [
    "Yük yok olur sanma: K'nin fazla negatif yükü yok olmaz, iki küre arasında paylaşılır.",
    "Zıt cinse yüklenme sanma: dokunmada iki cisim aynı cins yüklenir.",
    null,
    "Yükün tümünü L'ye aktarma sanma: yük iki küre arasında paylaşılır, K nötr kalmaz."
  ],
  "aciklama": "Dokunmayla yüklü cisim, yükünü nötr cisimle paylaşır ve ikisi de aynı cins yüklü olur.\nAdım 1: K'de − sembolü fazla; K negatif yüklüdür. L nötrdür.\nAdım 2: Dokunma sırasında K'nin fazla elektronlarının bir kısmı L'ye geçer.\nAdım 3: İki küre de negatif yüklü olur.\nSağlama: Toplam yük negatif olduğundan son durumda ikisi de negatiftir.\nSık yapılan hata: Dokunmada yükün tamamen bir cisimden ötekine geçeceğini sanmak.\nCevap C."
},
{
  "id": "fen-yc-006",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**Üç uçlu fişlerin topraklama ucunun görevi aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Cihazın daha az enerji harcamasını sağlamak",
    "Cihaz gövdesine geçen fazla yükü toprağa iletmek",
    "Cihaz gövdesini sürekli yüklü tutmak",
    "Cihazın daha hızlı çalışmasını sağlamak"
  ],
  "dogru": 1,
  "hatalar": [
    "Topraklamayı tasarruf sanma: topraklama ucu enerji harcamasıyla ilgili değildir.",
    null,
    "Topraklamayı yükleme sanma: topraklama gövdeyi yüklü tutmaz, yükü boşaltır.",
    "Topraklamayı hızla ilişkilendirme: topraklama ucu cihazın hızını değiştirmez."
  ],
  "aciklama": "Topraklama ucu, cihaz gövdesine geçen fazla yükü toprağa ileterek kullanıcıyı korur.\nAdım 1: Fazla yük gövdede birikirse tehlike doğar.\nAdım 2: Topraklama hattı bu yükü toprağa geçirir.\nSağlama: Topraklamanın amacı güvenliktir.\nSık yapılan hata: Topraklamayı cihaz performansıyla karıştırmak.\nCevap B."
},
{
  "id": "fen-yc-007",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir öğrenci yüklü cisimlerle ilgili şu yargıları yazıyor.\nI. Pozitif yüklü cisimde pozitif yük sayısı negatif yük sayısından fazladır.\nII. Nötr cismin pozitif ve negatif yük sayıları eşittir.\nIII. Negatif yüklü cisimde hiç pozitif yük bulunmaz.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I ve II"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur, ama nötr cismin yüklerinin eşit olduğunu söyleyen II de doğrudur.",
    "III'ü doğru sanma: negatif yüklü cisimde pozitif yük de vardır, yalnızca negatif yük fazladır.",
    "III'ü doğru sanma: III yanlıştır; I doğrudur.",
    null
  ],
  "aciklama": "Her cisimde hem pozitif hem negatif yük bulunur. Fazla olan yük, cismin yük cinsini belirler.\nAdım 1 (I): Pozitif fazlaysa cisim pozitif yüklüdür. I doğrudur.\nAdım 2 (II): Eşit sayıda pozitif ve negatif yük nötr demektir. II doğrudur.\nAdım 3 (III): Negatif yüklü cisimde de pozitif yük vardır, yalnızca negatif yük fazladır. III yanlıştır.\nSağlama: Doğru yargılar I ve II.\nSık yapılan hata: Yüklü cismin tek cins yük taşıdığını sanmak.\nCevap D."
},
{
  "id": "fen-yc-008",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**Aşağıdakilerden hangisi topraklamanın bir uygulamasıdır?**",
  "gorsel": null,
  "secenekler": [
    "Elektrikli süpürge borusunun plastikten yapılması",
    "Prizlere çocuk korumalı kapak takılması",
    "Akaryakıt tankerinden yere değen metal zincir sarkıtılması",
    "Elektrik kablolarının plastik kılıfla kaplanması"
  ],
  "dogru": 2,
  "hatalar": [
    "Yalıtkanı topraklama sanma: plastik yalıtkandır, yükü toprağa iletmez.",
    "Koruyucu önlemi topraklama sanma: kapak çocukları korur ama yükü toprağa iletmez.",
    null,
    "Yalıtımı topraklama sanma: kılıf kabloyu yalıtır; yükü toprağa iletmez."
  ],
  "aciklama": "Topraklama, fazla yükün iletken yoluyla toprağa geçmesini sağlar.\nAdım 1: Plastik, kapak ve kılıf yalıtım ya da koruma sağlar; yükü toprağa iletmez.\nAdım 2: Tankerin yere değen metal zinciri biriken yükü toprağa iletir.\nSağlama: Yükü toprağa ileten tek uygulama zincirdir.\nSık yapılan hata: Yalıtımı topraklama sanmak.\nCevap C."
},
{
  "id": "fen-yc-009",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Nötr bir elektroskopun topuzuna X cismi dokundurulunca yapraklar açılıyor.\n**Buna göre X cismi için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Yüklüdür; ancak yükünün cinsi bu gözlemden anlaşılmaz.",
    "Yüklüdür; yükünün cinsi yaprakların açılma miktarından anlaşılır.",
    "Pozitif yüklüdür; çünkü elektroskop başlangıçta nötrdü.",
    "Nötrdür; çünkü nötr cisimler de yaprakları açar."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük cinsini veriden fazla yorumlama: yaprakların ne kadar açıldığı yükün cinsini göstermez; yapraklar her iki cins yükte de açılır.",
    "Yük cinsini veriden fazla yorumlama: elektroskop nötr olsa bile X pozitif ya da negatif olabilir; bu gözlem cinsi göstermez.",
    "Nötr cismi yanlış yorumlama: nötr bir cisim elektroskopa dokunduğunda yapraklar açılmaz."
  ],
  "aciklama": "Elektroskop, yükün varlığını gösterir. Yapraklar açılırsa cisim yüklüdür.\nAdım 1: Nötr elektroskopa değen cisim yüklü ise yapraklar açılır; nötr ise açılmaz.\nAdım 2: Yapraklar iki cins yükte de açılabilir; açılma miktarı da cinsi göstermez. Yük cinsi yalnızca bu gözlemle bilinmez.\nSağlama: Gözlemden kesin çıkan sonuç, X'in yüklü olduğudur.\nSık yapılan hata: Yapraklar açıldı diye yükün pozitif ya da negatif olduğuna karar vermek.\nCevap A."
},
{
  "id": "fen-yc-010",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Kışın halının üzerinde yürüyen Ela'nın vücudu sürtünmeyle negatif yüklenmiştir. Ela, topraklı binanın metal kapı koluna dokunduğunda küçük bir kıvılcım görüyor ve kısa süreli bir çarpma hissediyor.\n**Buna göre bu olayla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yükler Ela'dan kapı koluna geçmiştir.",
    "Toprak Ela'ya elektron vermiş ve Ela daha fazla negatif yüklenmiştir.",
    "Kapı kolu Ela'ya pozitif yük aktarmıştır.",
    "Ela'daki fazla elektronlar kapı koluyla toprağa geçmiş ve Ela nötrleşmiştir."
  ],
  "dogru": 3,
  "hatalar": [
    "Hareket eden yükü yanlış seçme: iletkenlerde yük geçişini elektronlar yapar, pozitif yükler yerinde kalır.",
    "Yönü ters kurma: Ela negatif yüklüdür; elektronlar Ela'dan toprağa gider, topraktan Ela'ya gelmez.",
    "Yükün cinsini ve yönünü karıştırma: aktarılan pozitif yük değil, Ela'nın fazla elektronlarıdır.",
    null
  ],
  "aciklama": "Negatif yüklü bir cisim topraklı bir iletkene dokununca fazla elektronlarını toprağa verir ve nötrleşir.\nAdım 1: Ela'nın vücudunda fazla elektron var; negatif yüklüdür.\nAdım 2: Kapı kolu metal ve bina topraklıdır. Dokunma anında fazla elektronlar kapı koluyla toprağa geçer.\nAdım 3: Hızlı yük geçişi kıvılcım ve hafif çarpma olarak hissedilir. Ela nötrleşir.\nSağlama: Yük, negatif yüklü bölgeden toprağa gitti; Ela'ya yeni yük gelmedi.\nSık yapılan hata: Pozitif yüklerin yer değiştirdiğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-011",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Nötr bir cisimde 6 tane + ve 6 tane − yük sembolü vardır. Bu cisimden 2 elektron alınıyor.\n**Buna göre cismin son durumu aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "6+ ve 8−, negatif yüklü",
    "6+ ve 4−, pozitif yüklü",
    "8+ ve 6−, pozitif yüklü",
    "4+ ve 6−, negatif yüklü"
  ],
  "dogru": 1,
  "hatalar": [
    "Alma ile vermeyi karıştırma: elektron alınınca − sembolü azalır, artmaz.",
    null,
    "Pozitif yük artışı sanma: alınan elektronlardır; pozitif yük sayısı değişmez.",
    "Pozitif yük azalışı sanma: pozitif yükler yerinde kalır; yalnızca elektron sayısı değişir."
  ],
  "aciklama": "Elektron alan cisim negatif, elektron veren cisim pozitif yüklenir. Pozitif yüklerin sayısı değişmez.\nAdım 1: Cisimden 2 elektron alınınca − sembolü 6'dan 4'e düşer.\nAdım 2: Pozitif sembol sayısı 6 olarak kalır.\nAdım 3: 6 pozitif, 4 negatif; pozitif yük fazladır. Cisim pozitif yüklüdür.\nSağlama: Elektron kaybeden cisim pozitif olur.\nSık yapılan hata: Elektron alınınca cismin negatif olacağını sanmak.\nCevap B."
},
{
  "id": "fen-yc-012",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Topraklamanın bazı uygulamaları ve amaçları aşağıda verilmiştir.\n**Buna göre hangisinde topraklamanın amacı __yanlış__ verilmiştir?**",
  "gorsel": null,
  "secenekler": [
    "Paratoner: Yıldırımın yükünü toprağa iletir.",
    "Priz topraklama hattı: Cihaz gövdesinde biriken yükü toprağa iletir.",
    "Tanker zinciri: Tankeri yüklü tutarak yakıtın dökülmesini engeller.",
    "Üç uçlu fiş: Gövdeye geçen yükü toprağa iletir."
  ],
  "dogru": 2,
  "hatalar": [
    "Doğru bilgiyi yanlış sanma: paratoner yıldırımın yükünü toprağa iletir; bu doğrudur.",
    "Doğru bilgiyi yanlış sanma: topraklama hattı gövdedeki yükü toprağa iletir; bu doğrudur.",
    null,
    "Doğru bilgiyi yanlış sanma: fişin topraklama ucu yükü toprağa iletir; bu doğrudur."
  ],
  "aciklama": "Topraklama yükü toprağa iletir; hiçbir uygulamada cismi yüklü tutmaz.\nAdım 1: Paratoner, priz hattı ve fişin üçüncü ucu fazla yükü toprağa iletir.\nAdım 2: Tanker zinciri de biriken yükü toprağa iletir; tankeri yüklü tutmaz ve yakıt dökülmesiyle ilgisi yoktur.\nSağlama: \"Tankeri yüklü tutar\" ifadesi topraklamanın amacına ters.\nSık yapılan hata: Topraklamayı yük biriktirme sanmak.\nCevap C."
},
{
  "id": "fen-yc-013",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Özdeş iletken K ve L kürelerinden K'de 3 tane + ve 9 tane −, L'de 9 tane + ve 3 tane − sembol vardır. İki küre iletken telle birbirine bağlandığında yük geçişi olup ikisi de nötr hâle geliyor. Daha sonra iki küre de ayrı ayrı iletken tellerle toprağa bağlanıyor.\n**Buna göre topraklama sırasında bu kürelerle toprak arasındaki yük alışverişi için ne söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Yük alışverişi olmaz; çünkü küreler zaten nötrdür.",
    "Elektronlar kürelerden toprağa geçer; çünkü küreler yüklüdür.",
    "Elektronlar topraktan K'ye, L'den toprağa geçer; çünkü küreler zıt yüklüdür.",
    "Elektronlar topraktan her iki küreye geçer; çünkü küreler pozitiftir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eski durumu hatırlama: küreler birbirine bağlanınca nötrleşmiştir; artık fazla yükleri yoktur.",
    "Başlangıç yüklerine bağlı kalma: K negatif, L pozitifti ama bağlantıdan sonra ikisi de nötr oldu.",
    "Başlangıç yüklerine bağlı kalma: küreler nötr olduğundan topraktan elektron almazlar."
  ],
  "aciklama": "Nötr cisimde fazla ya da eksik yük yoktur; topraklanınca toprakla yük alışverişi yapmaz.\nAdım 1: K negatif (9 > 3), L pozitif (9 > 3). İki küre bağlanınca fazla elektronlar K'den L'ye geçer.\nAdım 2: Yük geçişi sonunda ikisi de nötr olur.\nAdım 3: Nötr küreler topraklanırsa fazla ya da eksik yükleri olmadığından toprakla yük alışverişi yapmazlar.\nSağlama: Yük geçişi için bir fazlalık ya da eksiklik gerekir.\nSık yapılan hata: İlk yük durumunu son durum sanmak.\nCevap A."
},
{
  "id": "fen-yc-014",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir gaz dolum tesisinde tüpler doldurulurken sürtünmeyle yük birikebilir. Güvenlik sorumlusu uygulanan önlemlerle ilgili şu yargıları sıralıyor.\nI. Dolum borusunun topraklanması, sürtünmeyle biriken yükün toprağa geçmesini sağlar.\nII. Topraklanan tüpler yalıtkan hâle geldiği için kıvılcım oluşmaz.\nIII. Çalışanın antistatik ayakkabı giymesi, vücudunda biriken yükün toprağa iletilmesine yardımcı olur.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Eksik değerlendirme: I doğrudur, ama antistatik ayakkabının yükü toprağa ilettiğini söyleyen III de doğrudur.",
    null,
    "II'yi doğru sanma: topraklanan iletken tüp yalıtkan olmaz; yükü toprağa iletir. I de doğrudur.",
    "II'yi doğru sanma: topraklama iletkeni yalıtkana çevirmez."
  ],
  "aciklama": "Topraklama, biriken yükü toprağa ileterek kıvılcım riskini azaltır. Bu yüzden iletken malzemeler ve antistatik giysiler kullanılır.\nAdım 1 (I): Topraklanan boru yükü toprağa geçirir. I doğrudur.\nAdım 2 (II): Topraklanan tüp yalıtkan olmaz, iletken kalır ve yükü toprağa iletir. II yanlıştır.\nAdım 3 (III): Antistatik ayakkabı çalışanın vücudundaki yükün toprağa gitmesine yardımcı olur. III doğrudur.\nSağlama: Doğru yargılar yük için toprağa yol açan I ve III.\nSık yapılan hata: Topraklamayı yalıtım sanmak.\nCevap B."
},
{
  "id": "fen-yc-015",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Özdeş iletken K, L ve M kürelerinin pozitif (+) ve negatif (−) yük sembollerinin sayısı tabloda verilmiştir. Küreler ikişer ikişer dokundurulup ayrılıyor.\n**Buna göre hangi iki kürenin dokundurulup ayrılması sonunda ikisi de nötr olur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>5</td><td>5</td></tr><tr><td>L</td><td>7</td><td>3</td></tr><tr><td>M</td><td>2</td><td>6</td></tr></table>",
  "secenekler": [
    "K ve L",
    "K ve M",
    "L ve M",
    "Hiçbir çift"
  ],
  "dogru": 2,
  "hatalar": [
    "K'yi yüklü sanma: K nötrdür; L pozitif olduğundan K ile L dokununca ikisi de pozitif yüklenir.",
    "K'yi yüklü sanma: K nötrdür; M negatif olduğundan K ile M dokununca ikisi de negatif yüklenir.",
    null,
    "Nötrleşmeyi imkânsız sanma: L pozitif, M negatif ve fazlalıkları eşit olduğundan birbirini nötrler."
  ],
  "aciklama": "Dokunan özdeş iletken kürelerde zıt yükler birbirini nötrler. İki küre ancak toplam yük sıfırsa ikisi de nötr olur.\nAdım 1: K nötr (5 = 5). L pozitif (7 > 3, fazlalık 4). M negatif (6 > 2, fazlalık 4).\nAdım 2: K ile L: toplam pozitif, ikisi de pozitif olur. K ile M: toplam negatif, ikisi de negatif olur.\nAdım 3: L ile M: pozitif fazlalık ile negatif fazlalık eşit; toplam sıfır. İkisi de nötr olur.\nSağlama: 4 pozitif fazlalık ve 4 negatif fazlalık birbirini yok eder.\nSık yapılan hata: Nötr bir küreyi dokunmaya katarak sonucun nötr olacağını sanmak.\nCevap C."
}
);
