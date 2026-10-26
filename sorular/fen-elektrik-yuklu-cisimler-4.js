// Fen Bilimleri — Elektrik Yüklü Cisimler (F.8.7.2): Kademe 2 (Pekiştirme) yedeği, sıra 26-75
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["elektrik-yuklu-cisimler"] = window.LGS_BANK["elektrik-yuklu-cisimler"] || []).push(
{
  "id": "fen-yc-226",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir fen laboratuvarında, bir cismin 18 protonu ve 21 elektronu olduğu not ediliyor.\n**Buna göre bu cisim için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Nötrdür; çünkü cismin hem protonu hem elektronu vardır.",
    "Pozitif yüklüdür; çünkü elektron sayısı proton sayısından fazladır.",
    "Negatif yüklüdür; çünkü elektron sayısı proton sayısından fazladır.",
    "Negatif yüklüdür; çünkü proton sayısı elektron sayısından fazladır."
  ],
  "dogru": 2,
  "hatalar": [
    "Nötrü yüklerin varlığına bağlama: nötr olmak için yük çeşitlerinin değil sayılarının eşit olması gerekir; 18 ile 21 eşit değildir.",
    "Yük cinsini ters yorumlama: elektronlar negatiftir, fazla olan elektronsa cisim negatif yüklüdür.",
    null,
    "Sayıları ters okuma: proton sayısı 18, elektron sayısı 21’dir; fazla olan proton değil elektrondur."
  ],
  "aciklama": "Cismin yükünü, sayıca fazla olan tanecik belirler.\nAdım 1: Protonlar pozitif, elektronlar negatif yüklüdür.\nAdım 2: Elektron sayısı 21, proton sayısı 18’dir; elektronlar 21 − 18 = 3 fazladır.\nAdım 3: Negatif yük fazla olduğundan cisim negatif yüklüdür.\nSağlama: Sayılar eşit olsaydı (18 ve 18) cisim nötr olurdu.\nSık yapılan hata: Fazla olan taneciğin yükünü ters okumak.\nCevap C."
},
{
  "id": "fen-yc-227",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Şekilde yük durumları verilen A, B, C ve D cisimleri için bir öğrenci şu yargıları yazıyor.\nI. A ile B birbirini çeker.\nII. A ile C birbirini iter.\nIII. B ile D birbirini çeker.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 540 125\" role=\"img\" aria-label=\"A cismi 9 pozitif 4 negatif, B cismi 2 pozitif 7 negatif, C cismi 6 pozitif 6 negatif, D cismi 8 pozitif 3 negatif yük taşıyor\"><circle cx=\"70\" cy=\"45\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">9+</text><text x=\"70\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4−</text><text x=\"70\" y=\"107\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">A</text><circle cx=\"200\" cy=\"45\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2+</text><text x=\"200\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">7−</text><text x=\"200\" y=\"107\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">B</text><circle cx=\"330\" cy=\"45\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"330\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"330\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"330\" y=\"107\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">C</text><circle cx=\"460\" cy=\"45\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8+</text><text x=\"460\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3−</text><text x=\"460\" y=\"107\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">D</text></svg>",
  "secenekler": [
    "I ve III",
    "I ve II",
    "II ve III",
    "Yalnız I"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Nötr cismi itilir sanma: A pozitif, C nötrdür; yüklü cisim nötr cismi çeker, II yanlıştır. B ile D de zıt cinstir, III doğrudur.",
    "Yüklü ile nötrü itme sanma: II yanlıştır. A pozitif, B negatif olduğundan I doğrudur.",
    "Eksik değerlendirme: B negatif, D pozitif yüklüdür; zıt cins yükler çeker, III de doğrudur."
  ],
  "aciklama": "Aynı cins yüklü cisimler iter, zıt cins yüklü cisimler çeker; yüklü cisim nötr cismi çeker.\nAdım 1: Sayıları karşılaştır. A (9+ 4−) pozitif, B (2+ 7−) negatif, C (6+ 6−) nötr, D (8+ 3−) pozitif yüklüdür.\nAdım 2: I: A pozitif, B negatif; zıt cinstir, çekerler. I doğrudur. II: A yüklü, C nötrdür; yüklü cisim nötr cismi çeker, itmez. II yanlıştır.\nAdım 3: III: B negatif, D pozitif; zıt cinstir, çekerler. III doğrudur.\nSağlama: İtme görmek için iki cismin de aynı cins yüklü olması gerekir; bu şekilde yalnız A ile D birbirini iter.\nSık yapılan hata: Nötr cismi yüklü cisme karşı “etkisiz” ya da “itici” sanmak.\nCevap A."
},
{
  "id": "fen-yc-228",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Fen kulübünde bir öğrenci, K cisminden 3 elektron uzaklaştırıldıktan sonra cismin yük durumunu 8+ 5− olarak yazıyor.\n**Buna göre K cismi, elektron uzaklaştırılmadan önce hangi yük durumundaydı?**",
  "gorsel": null,
  "secenekler": [
    "5+ 5− ile nötr",
    "8+ 2− ile pozitif yüklü",
    "11+ 5− ile pozitif yüklü",
    "8+ 8− ile nötr"
  ],
  "dogru": 3,
  "hatalar": [
    "Proton sayısını değiştirme: elektron uzaklaştırılırken protonlar yerinde kalır; proton sayısı 8’dir.",
    "İşlemi ters uygulama: elektron çıkarıldığına göre başlangıçta negatif yük daha fazlaydı; 3 daha çıkarmak değil 3 eklemek gerekir.",
    "Taneciği karıştırma: yer değiştiren tanecik elektrondur; protonlar 8 olarak kalır.",
    null
  ],
  "aciklama": "Elektron uzaklaştırılınca negatif yük azalır; başlangıca dönmek için bu sayıyı artırırız.\nAdım 1: Protonlar yer değiştirmediği için başlangıçta da 8 pozitif yük vardı.\nAdım 2: 3 elektron uzaklaştırıldığına göre başlangıçta negatif yük 5 + 3 = 8 idi.\nAdım 3: 8+ ve 8− eşit olduğundan K başlangıçta nötrdü.\nSağlama: 8+ 8− durumundaki cisimden 3 elektron çıkarılırsa 8+ 5− kalır ve cisim pozitif yüklenir.\nCevap D."
},
{
  "id": "fen-yc-229",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir bodrum katında metal gövdeli buzdolabının üç uçlu fişi, iki delikli eski bir uzatma kablosuna adaptörle takılıyor. Adaptörün topraklama ucunun bağlanacağı bir toprak hattı yoktur.\n**Buna göre buzdolabının gövdesine geçen yükle ilgili aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Yük toprağa geçer; çünkü fişte üçüncü bir uç vardır.",
    "Yük toprağa geçemez; gövdede birikir ve kişiye geçebilir.",
    "Yük kendiliğinden yok olur; çünkü gövde metaldir.",
    "Yük gövdeye geçmez; çünkü uzatma kablosu yalıtkandır."
  ],
  "dogru": 1,
  "hatalar": [
    "Fişteki ucu yeterli sanma: üçüncü uç, ancak prizdeki toprak hattına bağlanırsa işe yarar; hat yoksa yük toprağa gidemez.",
    null,
    "Yükün yok olduğunu sanma: yük yok olmaz; iletken bir yol yoksa gövdede birikir.",
    "Yalıtkan kabloyu koruyucu sanma: arıza sonucu gövdeye yük geçebilir; asıl sorun yükün boşalamamasıdır."
  ],
  "aciklama": "Fişin topraklama ucu, yalnızca prizdeki toprak hattına bağlıysa yükü toprağa taşıyabilir.\nAdım 1: Topraklı prizde üçüncü uç, toprak hattına bağlanıp iletken bir yol kurar.\nAdım 2: Burada toprak hattı yoktur; gövdeye geçen yükün toprağa giden iletken yolu kesilmiştir.\nAdım 3: Yük gövdede birikir; gövdeye dokunan kişinin vücudu toprağa giden yol olur ve kişi çarpılır.\nSık yapılan hata: Fişte üçüncü ucun bulunmasını topraklamanın yapıldığı anlamına almak.\nCevap B."
},
{
  "id": "fen-yc-230",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir ilçedeki eski caminin minaresinin tepesine paratoner takılıyor. Paratonerin ucu minarenin en yüksek noktasına, kalın bakır şeridin diğer ucu ise toprağa gömülü metal bir levhaya bağlanıyor.\n**Buna göre bu düzenek aşağıdakilerden hangisini sağlar?**",
  "gorsel": null,
  "secenekler": [
    "Bulutlardaki yükü yok ederek yıldırımın oluşmasını engeller.",
    "Düşen yıldırımın yükünü minareye zarar vermeden toprağa iletir.",
    "Yıldırımı minareden uzaklaştırıp yakındaki binalara yönlendirir.",
    "Yıldırımı kendine çekerek yükü minarenin tepesinde biriktirir."
  ],
  "dogru": 1,
  "hatalar": [
    "Paratoneri yıldırımı önleyen araç sanma: paratoner yıldırımın oluşmasını durdurmaz, düşen yıldırımın yükünü toprağa iletir.",
    null,
    "Paratoneri yönlendirici sanma: yük başka binaya gitmez, kablo yoluyla toprağa aktarılır.",
    "Yükün biriktiğini sanma: bakır şerit toprağa bağlı olduğundan yük birikmez, toprağa boşalır."
  ],
  "aciklama": "Paratoner, yıldırımın yükünü iletken bir yoldan toprağa gönderen topraklama düzeneğidir.\nAdım 1: Minarenin en yüksek noktasındaki metal uç, düşen yıldırımın yükünü toplar.\nAdım 2: Bu yük kalın bakır şerit boyunca ilerler.\nAdım 3: Şeridin ucu toprağa gömülü levhaya bağlı olduğundan yük toprağa geçer; minare zarar görmez.\nSık yapılan hata: Paratonerin yıldırımı önlediğini ya da yok ettiğini sanmak.\nCevap B."
},
{
  "id": "fen-yc-231",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Özdeş ve nötr üç elektroskopun topuzuna K, L ve M cisimleri ayrı ayrı dokundurulup uzaklaştırılıyor. Elektroskopların son durumu şekilde verilmiştir.\nBir öğrenci şu yargıları yazıyor.\nI. L cismi yüksüzdür, yani hiç yük taşımaz.\nII. K cismi yüklüdür.\nIII. M cismi, L cismini çeker.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 580 212\" role=\"img\" aria-label=\"Üç özdeş elektroskop: K dokundurulunca yapraklar açık, L dokundurulunca yapraklar kapalı, M dokundurulunca yapraklar açık\"><rect x=\"52\" y=\"70\" width=\"96\" height=\"100\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"100\" y1=\"45\" x2=\"100\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"100\" cy=\"34\" r=\"11\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"100\" y1=\"120\" x2=\"83.1\" y2=\"156.3\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><line x1=\"100\" y1=\"120\" x2=\"116.9\" y2=\"156.3\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"100\" y=\"200\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">K dokundurulunca</text><rect x=\"242\" y=\"70\" width=\"96\" height=\"100\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"290\" y1=\"45\" x2=\"290\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"290\" cy=\"34\" r=\"11\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"290\" y1=\"120\" x2=\"287.2\" y2=\"159.9\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><line x1=\"290\" y1=\"120\" x2=\"292.8\" y2=\"159.9\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"290\" y=\"200\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">L dokundurulunca</text><rect x=\"432\" y=\"70\" width=\"96\" height=\"100\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"480\" y1=\"45\" x2=\"480\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"480\" cy=\"34\" r=\"11\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"480\" y1=\"120\" x2=\"463.1\" y2=\"156.3\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><line x1=\"480\" y1=\"120\" x2=\"496.9\" y2=\"156.3\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"480\" y=\"200\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">M dokundurulunca</text></svg>",
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "III’ü atlama: M yüklü, L nötrdür; yüklü cisim nötr cismi çeker, III de doğrudur.",
    "II’yi atlama: K dokundurulunca yapraklar açıldığına göre K yüklüdür, II de doğrudur.",
    "Nötrü yüksüz sanma: L nötrdür ama içinde eşit sayıda pozitif ve negatif yük vardır, I yanlıştır. III de doğrudur.",
    null
  ],
  "aciklama": "Elektroskop, bir cismin yüklü olup olmadığını anlamaya yarar: yüklü cisim topuza dokununca yapraklar açılır. Nötr cisim yüksüz cisim demek değildir; nötr cisimde pozitif ve negatif yükler vardır ve sayıları eşittir.\nAdım 1: K dokundurulunca yapraklar açıldığına göre K yüklüdür. II doğrudur.\nAdım 2: L dokundurulunca yapraklar kapalı kaldığına göre L nötrdür. Nötr cisim yüksüz değildir; yalnızca pozitif ve negatif yükleri eşittir. I yanlıştır.\nAdım 3: M de yapraklarını açtığı için yüklüdür. Yüklü cisim nötr cismi çeker; M, L’yi çeker. III doğrudur.\nSağlama: Nötr cisimde iki tür yük de vardır; bu yüzden I’deki “hiç yük taşımaz” ifadesi yanlıştır.\nSık yapılan hata: “Nötr” sözcüğünü “yüksüz” diye anlamak.\nCevap D."
},
{
  "id": "fen-yc-232",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Yalıtkan saplarla tutulan özdeş iletken K ve L küreleri şekildeki gibi yüklüdür. K ile L birbirine dokundurulup yeniden ayrılıyor.\n**Buna göre dokundurma sonunda K ve L’nin yük durumu aşağıdakilerden hangisi olur?**",
  "gorsel": "<svg viewBox=\"0 0 540 125\" role=\"img\" aria-label=\"K küresi 2 pozitif 9 negatif, L küresi 5 pozitif 6 negatif yük taşıyor\"><circle cx=\"150\" cy=\"45\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"150\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2+</text><text x=\"150\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">9−</text><text x=\"150\" y=\"107\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"390\" cy=\"45\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"390\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"390\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"390\" y=\"107\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text></svg>",
  "secenekler": [
    "İkisi de negatif yüklü olur.",
    "K negatif, L pozitif yüklü olur.",
    "İkisi de nötr olur.",
    "İkisi de pozitif yüklü olur."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sembol sayısını yanlış okuma: L’de negatif yük (6) pozitiften (5) fazladır, L de negatiftir. Dokunmada küreler aynı cins yüklenir.",
    "Yüklerin götürüldüğünü sanma: iki küre de negatif yüklüdür, götürecek zıt cins yük yoktur; fazla yük paylaşılır ve küreler nötr olmaz.",
    "Fazla yükün cinsini ters okuma: iki kürede de fazla olan yük negatiftir, pozitif değildir."
  ],
  "aciklama": "Dokunmada, iki küre aynı cins yüklüyse yük paylaşılır ve ikisi de aynı cins yüklü kalır.\nAdım 1: K’de negatif yük 9 − 2 = 7 fazladır; K negatif yüklüdür.\nAdım 2: L’de negatif yük 6 − 5 = 1 fazladır; L de negatif yüklüdür.\nAdım 3: İki küre de negatif yüklü olduğundan dokundurulunca negatif yük özdeş küreler arasında paylaşılır; ikisi de negatif yüklü kalır.\nSağlama: Götürülecek zıt cins yük olmadığı için küreler nötr olmaz, pozitif de olmaz.\nSık yapılan hata: Dokunmada kürelerin zıt cins yükleneceğini sanmak.\nCevap A."
},
{
  "id": "fen-yc-233",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Başlangıçta nötr olan bir balon, yün kazağa sürtülünce 8 elektron kazanıyor. Daha sonra balon iletken bir telle toprağa bağlanıyor.\n**Buna göre balon nötr olana kadar aşağıdakilerden hangisi gerçekleşir?**",
  "gorsel": null,
  "secenekler": [
    "Balondan toprağa 8 elektron geçer; balon nötr olur.",
    "Topraktan balona 8 elektron geçer; balon nötr olur.",
    "Balondan toprağa 8 elektron geçer; balon pozitif yüklenir.",
    "Balon ile toprak arasında yük geçişi olmaz; balon negatif kalır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters kurma: balon elektron kazandığı için negatif yüklüdür; fazla elektronları toprağa verir, topraktan almaz.",
    "Sonucu ters kurma: 8 fazla elektron gidince yük sayıları eşitlenir ve balon nötr olur, pozitif yüklenmez.",
    "Topraklamayı etkisiz sanma: iletken telle bağlanan negatif yüklü balon, fazla elektronlarını toprağa verir."
  ],
  "aciklama": "Topraklamada yalnızca cismin fazla yükü toprağa geçer ve cisim nötr olur.\nAdım 1: Balon 8 elektron kazandığı için 8 elektron fazlasıyla negatif yüklüdür.\nAdım 2: İletken telle toprağa bağlanınca fazla elektronlar balondan toprağa geçer; protonlar yerinde kalır.\nAdım 3: 8 elektron toprağa gidince pozitif ve negatif yük sayıları eşitlenir ve balon nötr olur.\nSağlama: Balon sürtünmeden önce nötrdü; verdiği elektron sayısı (8) kazandığı elektron sayısına (8) eşittir.\nSık yapılan hata: Elektronların geçiş yönünü ters kurmak.\nCevap A."
},
{
  "id": "fen-yc-234",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Fen kulübünde yüklü cisimlerin birbirine etkisiyle ilgili dört ifade tahtaya yazılıyor.\n**Buna göre bu ifadelerden hangisi __yanlıştır__?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yüklü iki cisim birbirini iter.",
    "Yüklü bir cisim, nötr bir cismi çeker.",
    "Nötr iki cisim birbirini ne çeker ne iter.",
    "Birbirini çeken iki cisim her zaman zıt cins yüklüdür."
  ],
  "dogru": 3,
  "hatalar": [
    "Doğru ifadeyi seçme: aynı cins yüklü cisimler birbirini iter.",
    "Doğru ifadeyi seçme: yüklü bir cisim nötr cismi çeker.",
    "Doğru ifadeyi seçme: iki nötr cisim arasında çekme ya da itme olmaz.",
    null
  ],
  "aciklama": "Kök, yanlış olan ifadeyi soruyor; doğru üç ifadeyi eleyerek ilerle.\nAdım 1: Aynı cins yükler iter; A doğrudur.\nAdım 2: Yüklü cisim nötr cismi çeker; B doğrudur.\nAdım 3: İki nötr cisim arasında etkileşim olmaz; C doğrudur.\nAdım 4: Çekme, zıt cins yüklü iki cisimde olduğu gibi yüklü ile nötr cisim arasında da görülür. Bu yüzden D yanlıştır.\nSağlama: Yalnızca itme, iki cismin aynı cins yüklü olduğunu kesinleştirir.\nSık yapılan hata: Çekmeyi “zıt cinstir” diye kesinlemek.\nCevap D."
},
{
  "id": "fen-yc-235",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "K, L, M ve N kürelerinin hepsi negatif yüklüdür. Küreler şekilde görüldüğü gibi farklı malzemelerle toprağa bağlanmak isteniyor. N küresinin teli toprağa ulaşmıyor.\n**Buna göre hangi küreler bağlantı kurulduktan sonra nötr hâle gelir?**",
  "gorsel": "<svg viewBox=\"0 0 580 190\" role=\"img\" aria-label=\"K küresi bakır telle, L küresi naylon iple, M küresi alüminyum çubukla toprağa bağlı; N küresinin kısa teli toprağa ulaşmıyor\"><circle cx=\"70\" cy=\"42\" r=\"30\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"49\" text-anchor=\"middle\" font-size=\"20\" fill=\"currentColor\" font-weight=\"bold\">K</text><line x1=\"70\" y1=\"72\" x2=\"70\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"78\" y=\"105\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\">bakır tel</text><line x1=\"50\" y1=\"128\" x2=\"90\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"57\" y1=\"137\" x2=\"83\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64\" y1=\"146\" x2=\"76\" y2=\"146\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"210\" cy=\"42\" r=\"30\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"49\" text-anchor=\"middle\" font-size=\"20\" fill=\"currentColor\" font-weight=\"bold\">L</text><line x1=\"210\" y1=\"72\" x2=\"210\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"218\" y=\"105\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\">naylon ip</text><line x1=\"190\" y1=\"128\" x2=\"230\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"197\" y1=\"137\" x2=\"223\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"204\" y1=\"146\" x2=\"216\" y2=\"146\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"350\" cy=\"42\" r=\"30\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"49\" text-anchor=\"middle\" font-size=\"20\" fill=\"currentColor\" font-weight=\"bold\">M</text><line x1=\"350\" y1=\"72\" x2=\"350\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"6\"/><text x=\"360\" y=\"105\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\">alüminyum çubuk</text><line x1=\"330\" y1=\"128\" x2=\"370\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"337\" y1=\"137\" x2=\"363\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"344\" y1=\"146\" x2=\"356\" y2=\"146\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"490\" cy=\"42\" r=\"30\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"490\" y=\"49\" text-anchor=\"middle\" font-size=\"20\" fill=\"currentColor\" font-weight=\"bold\">N</text><line x1=\"490\" y1=\"72\" x2=\"490\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"498\" y=\"92\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\">kısa tel</text><line x1=\"470\" y1=\"128\" x2=\"510\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"477\" y1=\"137\" x2=\"503\" y2=\"137\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"484\" y1=\"146\" x2=\"496\" y2=\"146\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"172\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text><text x=\"210\" y=\"172\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text><text x=\"350\" y=\"172\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text><text x=\"490\" y=\"172\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text></svg>",
  "secenekler": [
    "Yalnız K",
    "K ve L",
    "K ve M",
    "L ve N"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: M küresi alüminyum çubukla toprağa bağlıdır; alüminyum iletkendir, M de nötr olur.",
    "Naylonu iletken sanma: naylon ip yalıtkandır; L küresinin fazla elektronları toprağa geçemez.",
    null,
    "Yalıtkanı ve kopuk yolu iletken sanma: naylon ip yükü geçirmez, toprağa ulaşmayan tel de yol kurmaz; L ile N negatif yüklü kalır."
  ],
  "aciklama": "Topraklamanın olması için cisimle toprak arasında kesintisiz bir iletken yol bulunmalıdır.\nAdım 1: K’nin bakır teli iletkendir ve toprağa ulaşır; fazla elektronlar toprağa geçer, K nötr olur.\nAdım 2: L’nin naylon ipi yalıtkandır; yük geçemez, L negatif yüklü kalır.\nAdım 3: M’nin alüminyum çubuğu iletkendir ve toprağa ulaşır; M de nötr olur. N’nin teli toprağa ulaşmadığı için yol kurulmaz; N negatif yüklü kalır.\nSağlama: Nötr olanlar, yalnızca toprağa kesintisiz iletken bağlanan K ve M’dir.\nSık yapılan hata: Her bağlantıyı, malzemesine ve ucunun toprağa ulaşıp ulaşmadığına bakmadan topraklama saymak.\nCevap C."
},
{
  "id": "fen-yc-236",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir öğrenci, elektrik yüklü cisimlerle ilgili üç not alıyor.\nI. Aynı cins yüklü iki cisim birbirini çeker.\nII. Nötr bir cisim, yüklü bir cisim tarafından çekilir.\nIII. Nötr iki cisim birbirini iter.\n**Buna göre öğrencinin notlarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Nötr cisimleri itici sanma: iki nötr cisim arasında etkileşim olmaz, III yanlıştır. Ayrıca II doğrudur.",
    "I’i doğru sanma: aynı cins yükler birbirini iter, çekmez. I yanlıştır.",
    "I ve III’ü doğru sanma: ikisi de yanlıştır; doğru olan II’dir."
  ],
  "aciklama": "Aynı cins yükler iter, zıt cins yükler çeker; yüklü cisim nötr cismi çeker; nötr cisimler birbirini etkilemez.\nAdım 1: I yanlıştır; aynı cins yüklü cisimler birbirini iter.\nAdım 2: II doğrudur; yüklü cisim nötr cismi çeker.\nAdım 3: III yanlıştır; iki nötr cisim birbirini ne çeker ne iter.\nSağlama: Üç notun yalnızca ikincisi etkileşim kurallarına uyuyor.\nSık yapılan hata: Aynı cins yükleri çeken, nötr cisimleri iten sanmak.\nCevap A."
},
{
  "id": "fen-yc-237",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir hastanenin ameliyathanesinde kullanılan bazı gazlar yanıcı olabileceğinden zemin, iletken bir kaplamayla toprak hattına bağlanmıştır. Çalışanlar da tabanı iletken terlikler giymektedir.\n**Buna göre bu uygulamanın amacı aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Sürtünmeyle biriken yükün zemin yoluyla toprağa geçip kıvılcımı önlemesi",
    "Çalışanların yükünü zeminde biriktirip toprağa geçmesini engellemesi",
    "Cihazların enerji tüketimini azaltarak kıvılcımı önlemesi",
    "Zemini yalıtkan yaparak kıvılcımı önlemesi"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters yorumlama: iletken zemin yükü biriktirmez, toprağa geçmesine yol verir.",
    "Topraklamayı tasarruf sanma: topraklama enerji tüketimini değiştirmez; amacı güvenliktir.",
    "Yalıtkanı topraklama sanma: yalıtkan zemin yükün toprağa geçişini engeller ve yük birikmesine yol açar."
  ],
  "aciklama": "Sürtünmeyle biriken yük kıvılcım çıkarabilir; yanıcı gazın bulunduğu yerde bu tehlikelidir.\nAdım 1: İletken zemin toprak hattına bağlıdır; zeminle temas eden her şeyin yükü bu yoldan toprağa gidebilir.\nAdım 2: İletken tabanlı terlik çalışanın vücudundaki yükün zemine geçmesini sağlar.\nAdım 3: Yük birikmediği için kıvılcım ve yangın riski azalır.\nSık yapılan hata: Güvenlik önlemini enerji tasarrufu ya da yalıtım önlemi sanmak.\nCevap A."
},
{
  "id": "fen-yc-238",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Fen dersinde yük kavramı konuşulurken öğretmen tahtaya dört ifade yazıyor.\n**Buna göre bu ifadelerden hangisi __yanlıştır__?**",
  "gorsel": null,
  "secenekler": [
    "Yüklenme sırasında yalnızca elektronlar yer değiştirir.",
    "Nötr bir cisimde hiç yük bulunmaz.",
    "Pozitif yüklü cisimde proton sayısı elektron sayısından fazladır.",
    "Elektron alan cisim negatif yüklenir."
  ],
  "dogru": 1,
  "hatalar": [
    "Doğru ifadeyi seçme: yük aktarımında protonlar yerinde kalır, yalnız elektronlar yer değiştirir.",
    null,
    "Doğru ifadeyi seçme: proton sayısı fazlaysa pozitif yük fazladır, cisim pozitif yüklüdür.",
    "Doğru ifadeyi seçme: elektron negatiftir; alan cismin negatif yükü artar."
  ],
  "aciklama": "Kök, yanlış ifadeyi soruyor.\nAdım 1: Yük geçişini elektronlar yapar; A doğrudur.\nAdım 2: Nötr cisimde pozitif ve negatif yükler vardır, yalnızca miktarları eşittir. “Hiç yük bulunmaz” demek yanlıştır; B yanlış ifadedir.\nAdım 3: Proton fazlaysa cisim pozitif yüklüdür (C doğru); elektron alan cismin negatif yükü artar (D doğru).\nSağlama: Üç doğru ifade ile B’nin çeliştiği açıktır.\nSık yapılan hata: “Nötr” sözcüğünü “yüksüz” diye anlamak.\nCevap B."
},
{
  "id": "fen-yc-239",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir mühendis, yeni yapılan bir okul binasına takılan paratonerle ilgili açıklama yapıyor. Öğrenciler şu yargıları yazıyor.\nI. Paratoner, bulutlardaki yükü toprağa boşaltarak yıldırımın oluşmasını önler.\nII. Paratonerin kablosu naylon gibi yalıtkan bir maddeden yapılırsa da görevini yapar.\nIII. Paratonerin kablosu toprağa bağlı değilse düşen yıldırımın yükü binada birikebilir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "Yalnız III"
  ],
  "dogru": 3,
  "hatalar": [
    "Paratoneri yıldırımı önleyen araç sanma: paratoner yıldırımın oluşmasını engellemez, düşen yıldırımın yükünü toprağa iletir. III de doğrudur.",
    "Yalıtkanı iletken sanma: yalıtkan kablo yükü geçirmez; paratoner görevini yapamaz. III de doğrudur.",
    "I ve II’yi doğru sanma: ikisi de yanlıştır; yük yalnızca iletken ve toprağa bağlı bir yoldan boşalır.",
    null
  ],
  "aciklama": "Paratoner, yıldırımın yükünü iletken bir yoldan toprağa gönderir.\nAdım 1: I yanlıştır; paratoner yıldırımın oluşmasını engellemez, düşen yıldırımın yükünü toprağa iletir.\nAdım 2: II yanlıştır; yük ancak iletken bir kablodan geçebilir, naylon yalıtkandır.\nAdım 3: III doğrudur; kablo toprağa bağlı değilse yükün gidecek yeri kalmaz ve yük binada birikir.\nSağlama: Doğru yargı, paratonerin toprağa bağlı iletken bir yol olduğunu söyleyen III’tür.\nSık yapılan hata: Paratonerin yıldırımı önlediğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-240",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Aşağıdaki tabloda yalıtkan iplerle asılı dört cismin pozitif (+) ve negatif (−) yük sembollerinin sayısı verilmiştir. Cisimler ikişer ikişer birbirine yaklaştırılıyor.\n**Buna göre hangi iki cisim birbirini ne çeker ne iter?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>5</td><td>5</td></tr><tr><td>L</td><td>3</td><td>8</td></tr><tr><td>M</td><td>7</td><td>2</td></tr><tr><td>N</td><td>6</td><td>6</td></tr></table>",
  "secenekler": [
    "K ile L",
    "L ile M",
    "K ile N",
    "M ile N"
  ],
  "dogru": 2,
  "hatalar": [
    "Nötrü yüklüyle etkisiz sanma: K nötr, L negatif yüklüdür; yüklü cisim nötr cismi çeker.",
    "Çeken çifti seçme: L negatif, M pozitif yüklüdür; zıt cinstirler ve birbirini çeker.",
    null,
    "Nötrü yüklüyle etkisiz sanma: N nötr, M pozitif yüklüdür; yüklü cisim nötr cismi çeker."
  ],
  "aciklama": "Etkileşim yok denebilmesi için iki cismin de nötr olması gerekir.\nAdım 1: K (5+ 5−) ve N (6+ 6−) eşit sayıda yük taşır, nötrdür.\nAdım 2: L (3+ 8−) negatif, M (7+ 2−) pozitif yüklüdür.\nAdım 3: Yüklü cisim nötr cismi çeker; yalnız K ile N iki nötr cisimdir ve birbirini etkilemez.\nSağlama: L ile M zıt cins olduğundan çeker; diğer iki çiftte biri yüklü, biri nötrdür ve çekme olur.\nSık yapılan hata: Nötr cismin yüklü cisme karşı etkisiz kaldığını sanmak.\nCevap C."
},
{
  "id": "fen-yc-241",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Yalıtkan bir sehpa üzerindeki K küresinde 9 tane + ve 4 tane − yük sembolü vardır. Küre önce naylon bir iple, sonra bakır bir telle toprağa bağlanıyor.\n**Buna göre bu iki işlem için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Her iki işlemde de K’den toprağa 5 elektron geçer ve K nötr olur.",
    "Yalnız bakır telle topraktan K’ye 5 elektron geçer ve K nötr olur.",
    "Yalnız naylon iple topraktan K’ye 5 elektron geçer ve K nötr olur.",
    "Her iki işlemde de topraktan K’ye 5 elektron geçer ve K nötr olur."
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü ters yorumlama ve yalıtkanı iletken sanma: K pozitif yüklüdür, verecek fazla elektronu yoktur; ayrıca naylon yalıtkandır.",
    null,
    "İletkeni yalıtkanla karıştırma: yük geçişini bakır tel sağlar; naylon ip yükü geçirmez.",
    "Naylonu iletken sanma: yön doğrudur ama naylon ip yalıtkandır, yük geçişi yalnız bakır telle olur."
  ],
  "aciklama": "Topraklamada yük geçişi için iletken bir bağlantı gerekir; yönü cismin yükü belirler.\nAdım 1: K’de 9 pozitif, 4 negatif yük var; pozitif yük 5 fazladır, yani K’nin 5 elektronu eksiktir.\nAdım 2: Naylon yalıtkandır; naylon iple bağlanınca yük geçişi olmaz, K yüklü kalır.\nAdım 3: Bakır iletkendir; bakır telle bağlanınca topraktan K’ye 5 elektron geçer ve K 9+ 9− ile nötr olur.\nSağlama: 4 + 5 = 9 olduğundan pozitif ve negatif yükler eşitlenir.\nCevap B."
},
{
  "id": "fen-yc-242",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Başlangıçta nötr olan K ve L cisimleri birbirine sürtülüyor. Sürtünme öncesi ve sonrası yük durumları tabloda verilmiştir.\n**Buna göre bu işlemle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>Sürtünmeden önce</th><th>Sürtünmeden sonra</th></tr><tr><td>K</td><td>5+ 5−</td><td>5+ 3−</td></tr><tr><td>L</td><td>6+ 6−</td><td>6+ 8−</td></tr></table>",
  "secenekler": [
    "K’den L’ye 2 elektron geçmiştir; K pozitif, L negatif yüklenmiştir.",
    "L’den K’ye 2 elektron geçmiştir; K pozitif, L negatif yüklenmiştir.",
    "K’den L’ye 2 proton geçmiştir; K pozitif, L negatif yüklenmiştir.",
    "K’den L’ye 2 elektron geçmiştir; K negatif, L pozitif yüklenmiştir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters okuma: K’nin negatif yükü 5’ten 3’e düşmüştür, yani K elektron vermiştir; elektron L’ye geçmiştir.",
    "Taneciği karıştırma: yük aktarımında protonlar yer değiştirmez; protonlar 5 ve 6 olarak yerinde kalmıştır.",
    "Yük cinsini ters okuma: K elektron kaybettiği için pozitif, L elektron kazandığı için negatif yüklenir."
  ],
  "aciklama": "Sürtünmede elektron veren cisim pozitif, elektron alan cisim negatif yüklenir.\nAdım 1: K’de negatif yük 5’ten 3’e düşmüş; K 2 elektron vermiştir.\nAdım 2: L’de negatif yük 6’dan 8’e çıkmış; L 2 elektron almıştır.\nAdım 3: K’de 5+ 3− ile pozitif yük, L’de 6+ 8− ile negatif yük fazladır.\nSağlama: Verilen elektron sayısı (2) alınan elektron sayısına (2) eşittir.\nSık yapılan hata: Elektron veren cismin negatif yüklendiğini sanmak.\nCevap A."
},
{
  "id": "fen-yc-243",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Nötr bir elektroskopun topuzuna K cismi dokundurulup uzaklaştırıldığında yapraklar açık kalıyor. Ardından topuza parmakla dokunuluyor ve yapraklar kapanıyor.\n**Buna göre K cismi için aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "K pozitif yüklüdür; çünkü yapraklar açılmıştır.",
    "K negatif yüklüdür; çünkü yapraklar açılmıştır.",
    "K nötrdür; çünkü yapraklar parmakla kapanmıştır.",
    "K yüklüdür; ancak cinsi bu bilgiyle belli olmaz."
  ],
  "dogru": 3,
  "hatalar": [
    "Yaprakların açılmasını pozitif yüke bağlama: yapraklar açılınca yalnızca cismin yüklü olduğu anlaşılır, yükün cinsi anlaşılmaz.",
    "Yaprakların açılmasını negatif yüke bağlama: yapraklar açılınca yalnızca cismin yüklü olduğu anlaşılır, yükün cinsi anlaşılmaz.",
    "Kapanmayı nötrlüğe bağlama: parmakla dokunmak elektroskopu topraklar ve yapraklar kapanır; K nötr olsaydı yapraklar hiç açılmazdı.",
    null
  ],
  "aciklama": "Elektroskop, bir cismin yüklü olup olmadığını gösterir; yükün pozitif mi negatif mi olduğunu söylemez. Topraklanan elektroskobun yaprakları kapanır.\nAdım 1: K dokundurulunca yapraklar açıldığına göre K yüklüdür; nötr bir cisim yaprakları açmaz.\nAdım 2: Parmakla dokunulunca elektroskop topraklanır, fazla yükü toprakla alışveriş edip nötr olur ve yapraklar kapanır. Bu, K’nin nötr olduğunu göstermez.\nAdım 3: Yapraklar yalnızca açılıp kapandığı için K’nin yükünün cinsi bu bilgilerle belli olmaz.\nSağlama: K pozitif de olsa negatif de olsa aynı gözlemler elde edilir; kesin olan tek bilgi K’nin yüklü olmasıdır.\nSık yapılan hata: Yapraklar açıldı diye yükün cinsini de belirlemeye çalışmak.\nCevap D."
},
{
  "id": "fen-yc-244",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Okulun kimya laboratuvarına aseton dolu iletken metal bir bidon getiriliyor. Sıvı aktarılırken bidon sürtünmeyle yüklenebilir ve aseton buharı yanıcıdır. Görevli, bidonu iletken bir kabloyla toprak hattına bağlıyor.\n**Buna göre bu işlemin sonucu aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Bidon yüklü kalır; ancak buhar tutuşmaz.",
    "Bidondaki yük yok olur; sürtünme yük oluşturamaz.",
    "Bidon, çevresindeki cisimlere yük vererek onları nötr yapar.",
    "Bidonda biriken yük toprağa geçer; kıvılcım riski azalır."
  ],
  "dogru": 3,
  "hatalar": [
    "Topraklamayı yükü saklama sanma: bağlantı bidondaki yükün boşalmasını sağlar; yüklü kalan bidon kıvılcım riski taşır.",
    "Yükün yok olduğunu sanma: yük yok olmaz, toprağa geçer; sürtünme devam ettikçe yük oluşmaya devam eder.",
    "Yönü ters yorumlama: bidon başka cisimlere yük vermez, biriken yükünü toprağa verir.",
    null
  ],
  "aciklama": "Topraklama, biriken yükü toprağa aktararak kıvılcım ve yangın riskini azaltır.\nAdım 1: Sıvı aktarılırken sürtünme bidonu yükler.\nAdım 2: Bidon toprak hattına bağlıysa biriken yük, iletken kablo yoluyla toprağa geçer.\nAdım 3: Yük birikmediği için bidon ile çevresi arasında kıvılcım oluşmaz ve yanıcı buhar tutuşmaz.\nSağlama: Yük yok olmaz; toprağa aktarılır. Sürtünme sürerse yeniden oluşur ve yine toprağa gider.\nSık yapılan hata: Topraklamanın yükü yok ettiğini ya da yük oluşumunu durdurduğunu sanmak.\nCevap D."
},
{
  "id": "fen-yc-245",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Aşağıdaki tabloda dört cismin pozitif (+) ve negatif (−) yük sembollerinin sayısı verilmiştir.\n**Buna göre hangi cismin negatif yük fazlası en fazladır?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>8</td><td>14</td></tr><tr><td>L</td><td>4</td><td>9</td></tr><tr><td>M</td><td>2</td><td>10</td></tr><tr><td>N</td><td>12</td><td>19</td></tr></table>",
  "secenekler": [
    "K",
    "L",
    "M",
    "N"
  ],
  "dogru": 2,
  "hatalar": [
    "Fark yerine tek sayıya bakma: K’de 14 negatif var ama 8 pozitif tarafından dengelenir; fazlası yalnız 6’dır.",
    "Fazlalığı yanlış hesaplama: L’de negatif yük fazlası 9 − 4 = 5’tir, M’nin fazlasından azdır.",
    null,
    "En çok negatif sembole bakma: N’de 19 negatif var ama 12’si pozitiflerle dengelenir; fazlası 7’dir."
  ],
  "aciklama": "Bir cismin yük fazlası, negatif sayı ile pozitif sayı arasındaki farktır.\nAdım 1: K: 14 − 8 = 6. L: 9 − 4 = 5.\nAdım 2: M: 10 − 2 = 8. N: 19 − 12 = 7.\nAdım 3: En büyük fark M’dedir; M’nin negatif yük fazlası 8’dir.\nSağlama: En çok negatif sembole sahip N’nin fazlası 7’dir; sembol sayısı fazlalığı göstermez.\nSık yapılan hata: Yalnız negatif sembol sayısına bakıp pozitifleri hesaba katmamak.\nCevap C."
},
{
  "id": "fen-yc-246",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Yalıtkan bir sehpa üzerindeki nötr metal küre iletken bir telle toprağa bağlanıyor.\n**Buna göre bu bağlantı sırasında aşağıdakilerden hangisi gerçekleşir?**",
  "gorsel": null,
  "secenekler": [
    "Küreden toprağa elektron geçer ve küre pozitif yüklenir.",
    "Küre ile toprak arasında yük geçişi olmaz; küre nötr kalır.",
    "Topraktan küreye elektron geçer ve küre negatif yüklenir.",
    "Küreden toprağa proton geçer ve küre nötr kalır."
  ],
  "dogru": 1,
  "hatalar": [
    "Nötr küreyi yük verir sanma: nötr cismin fazla elektronu yoktur, toprağa verecek elektronu bulunmaz; bu yüzden pozitif yüklenmez.",
    null,
    "Nötr küreyi yük alır sanma: eksik elektronu olmadığı için topraktan elektron almaz.",
    "Taneciği karıştırma: yük geçişini protonlar değil elektronlar yapar; protonlar yerinde kalır."
  ],
  "aciklama": "Topraklamada yalnızca fazla ya da eksik olan yük toprakla alışverişe girer.\nAdım 1: Nötr küredeki pozitif ve negatif yükler eşittir; fazla elektron da eksik elektron da yoktur.\nAdım 2: Toprakla bağlanınca verilecek ya da alınacak bir yük bulunmaz.\nAdım 3: Küre ile toprak arasında yük geçişi olmaz, küre nötr kalır.\nSağlama: Pozitif ya da negatif yüklü küre topraklansaydı elektron geçişi olurdu.\nSık yapılan hata: Nötr cismin de topraklanınca yük alıp vereceğini sanmak.\nCevap B."
},
{
  "id": "fen-yc-247",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Yün kazağa sürtülerek negatif yüklenen plastik tarak, masanın üzerindeki nötr kâğıt parçacıklarına yaklaştırılıyor.\n**Buna göre kâğıt parçacıkları için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Tarağa doğru çekilir; çünkü yüklü cisim nötr cismi çeker.",
    "Taraktan uzaklaşır; çünkü ikisi de negatif yüklüdür.",
    "Hareketsiz kalır; çünkü kâğıt parçacıkları nötrdür.",
    "Hareketsiz kalır; çünkü kâğıt parçacıkları yalıtkandır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Nötrü yüklü sanma: kâğıt parçacıkları nötrdür, negatif yüklü değildir; negatif cisim nötr cismi çeker.",
    "Nötrü etkisiz sanma: yüklü cisim nötr cismi çeker; nötr olması hareketsiz kalmasını gerektirmez.",
    "Yalıtkanlığı etkisizlik sanma: yük etkisini iletken ya da yalıtkan olması değil, cismin nötr olması belirler; çekme yine olur."
  ],
  "aciklama": "Yüklü bir cisim nötr bir cismi çeker.\nAdım 1: Tarak yün kazakla sürtünerek elektron kazanır ve negatif yüklenir.\nAdım 2: Kâğıt parçacıkları nötrdür; pozitif ve negatif yükleri eşittir.\nAdım 3: Yüklü cisim nötr cismi çektiği için parçacıklar tarağa doğru hareket eder.\nSağlama: İtme görmek için kâğıt parçacıklarının da negatif yüklü olması gerekirdi.\nSık yapılan hata: Nötr cismin yüklü cisimden etkilenmediğini sanmak.\nCevap A."
},
{
  "id": "fen-yc-248",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "K, L ve M cisimlerinin pozitif (+) ve negatif (−) yük sembollerinin sayısı tabloda verilmiştir. Cisimler ayrı ayrı iletken bir telle toprağa bağlanıyor.\n**Buna göre hangi cisimlerle toprak arasında elektron geçişi olur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>6</td><td>2</td></tr><tr><td>L</td><td>4</td><td>4</td></tr><tr><td>M</td><td>2</td><td>8</td></tr></table>",
  "secenekler": [
    "Yalnız K",
    "Yalnız M",
    "K ve M",
    "K, L ve M"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: M negatif yüklüdür; fazla 6 elektron toprağa geçer.",
    "Eksik değerlendirme: K pozitif yüklüdür; eksik 4 elektron topraktan gelir.",
    null,
    "Nötrü yüklü sanma: L nötrdür, fazlası da eksiği de yoktur; toprakla yük alışverişi yapmaz."
  ],
  "aciklama": "Topraklamada yalnızca yüklü cisimler toprakla elektron alışverişi yapar.\nAdım 1: K’de pozitif yük fazladır; 4 elektronu eksiktir ve topraktan 4 elektron alır.\nAdım 2: L’de yükler eşittir (nötr); toprakla elektron alışverişi olmaz.\nAdım 3: M’de negatif yük fazladır; fazla 6 elektronu toprağa verir.\nSağlama: Geçiş yönü farklı olsa da K ve M’de yük alışverişi vardır.\nSık yapılan hata: Yalnız fazla elektronu olan cismin topraklamadan etkilendiğini sanmak.\nCevap C."
},
{
  "id": "fen-yc-249",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Yün kazağa sürtülen iki özdeş balon, yalıtkan iplerle yan yana asılınca birbirinden uzaklaşıyor.\n**Buna göre bu olay için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Balonlar zıt cins yüklenmiştir; zıt cins yükler birbirini iter.",
    "Balonlar aynı cins yüklenmiştir; aynı cins yükler birbirini iter.",
    "Balonlardan biri nötrdür; yüklü cisim nötr cismi iter.",
    "Balonlar nötrdür; nötr cisimler birbirini iter."
  ],
  "dogru": 1,
  "hatalar": [
    "Etkileşim kuralını ters kurma: zıt cins yükler iter değil çeker.",
    null,
    "Nötrün itildiğini sanma: yüklü cisim nötr cismi çeker, itmez.",
    "Nötr cisimleri itici sanma: iki nötr cisim arasında etkileşim olmaz; balonlar yüklenmiştir."
  ],
  "aciklama": "İtme, iki cismin aynı cins yüklü olduğunu gösterir.\nAdım 1: Balonlar aynı kazakla sürtündüğü için ikisi de aynı biçimde yüklenir.\nAdım 2: Birbirinden uzaklaşmaları, birbirini ittikleri anlamına gelir.\nAdım 3: Yalnızca aynı cins yüklü cisimler birbirini iter; balonların yükleri aynı cinstir.\nSağlama: Zıt yüklü ya da biri nötr olsaydı balonlar birbirine yaklaşırdı.\nSık yapılan hata: İtmeyi “zıt cins” ya da “nötr” ile açıklamak.\nCevap B."
},
{
  "id": "fen-yc-250",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Aynı model, metal gövdeli üç ütü üç farklı evde kullanılıyor. Evlerin priz ve ütü fişi durumları tabloda verilmiştir. Üç evde de ütünün gövdesine kablodaki bir hata yüzünden yük geçmektedir.\n**Buna göre hangi evlerde gövdeye geçen yük toprağa gidemez?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Ev</th><th>Priz</th><th>Ütünün fişi</th></tr><tr><td>A</td><td>Topraklı</td><td>Üç uçlu, toprak ucu sağlam</td></tr><tr><td>B</td><td>Topraklı</td><td>Üç uçlu, toprak ucu kırık</td></tr><tr><td>C</td><td>Topraksız</td><td>Üç uçlu, toprak ucu sağlam</td></tr></table>",
  "secenekler": [
    "Yalnız B",
    "Yalnız C",
    "A ve B",
    "B ve C"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: C evinde fiş sağlam olsa da priz topraklı olmadığından yük toprağa gidemez.",
    "Eksik değerlendirme: B evinde prizde toprak hattı olsa da kırık toprak ucu hatta bağlanmaz; yük toprağa gidemez.",
    "Topraklı prizi yeterli sanma: A evinde hem priz hem fiş uygundur, yük toprağa gider; asıl sorun B ve C’dedir.",
    null
  ],
  "aciklama": "Yükün toprağa gidebilmesi için toprak hattı, fişin toprak ucu ve cihaz gövdesi kesintisiz bir yol oluşturmalıdır.\nAdım 1: A evinde hem priz topraklıdır hem fişin toprak ucu sağlamdır; yol kesintisizdir ve yük toprağa gider.\nAdım 2: B evinde toprak ucu kırık olduğundan fiş, prizdeki toprak hattına bağlanamaz; yol kesilir.\nAdım 3: C evinde fiş sağlam olsa da priz topraklı değildir; gidecek toprak hattı yoktur.\nSağlama: Yolun kesildiği evler B ve C’dir; bu evlerde yük gövdede birikir.\nSık yapılan hata: Yalnız priz ya da yalnız fişi kontrol etmek.\nCevap D."
},
{
  "id": "fen-yc-251",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Akaryakıt tankerinin arkasında yere değen metal zincir, yolda bir çukura çarpınca kopuyor ve zincirin kalan kısmı yere değmez hâle geliyor. Tanker yoluna devam ediyor.\n**Buna göre bu durumda tankerle ilgili aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Biriken yük toprağa geçemez; tankerde birikir ve kıvılcım riski doğar.",
    "Biriken yük zincirin kalan kısmında kaybolur; tanker nötr kalır.",
    "Tanker yük biriktirmez; çünkü gövdesi metaldir ve iletkendir.",
    "Biriken yük lastikler yoluyla toprağa geçer; tanker nötr kalır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yükün kaybolduğunu sanma: kalan zincir yere değmediği için yük toprağa gidemez; yük yok olmaz, biriktikçe tehlike artar.",
    "Metal gövdeyi topraklama sanma: gövde iletken olsa da toprağa bağlı değildir; sürtünmeyle yüklenen tanker yük biriktirir.",
    "Lastiği iletken sanma: lastik yalıtkandır; yük lastikler yoluyla toprağa geçemez."
  ],
  "aciklama": "Tanker sürtünmeyle yüklenir; yükün toprağa gidebilmesi için yere değen iletken bir yol gerekir.\nAdım 1: Sağlam zincir yere değerek tankerle toprak arasında iletken yol kurar.\nAdım 2: Zincir koptuğunda ve yere değmediğinde bu yol kesilir; yükün gidecek yeri kalmaz.\nAdım 3: Yük tankerde birikir; çevreyle arasında kıvılcım çıkarsa yanıcı yakıt buharı tutuşabilir.\nSağlama: Lastikler yalıtkan olduğundan yük onlardan geçemez.\nSık yapılan hata: Metal gövdenin kendiliğinden yükü boşalttığını sanmak.\nCevap A."
},
{
  "id": "fen-yc-252",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Yalıtkan iplerle asılı K, L, M ve N cisimlerindeki pozitif (+) ve negatif (−) yük sembollerinin sayısı tabloda verilmiştir. Cisimler ikişer ikişer birbirine yaklaştırılıyor. Bir öğrenci gözlemleri için şu yargıları yazıyor.\nI. M ile N birbirini ne çeker ne iter.\nII. K ile L birbirini çeker.\nIII. L ile N birbirini çeker.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>9</td><td>4</td></tr><tr><td>L</td><td>3</td><td>8</td></tr><tr><td>M</td><td>5</td><td>5</td></tr><tr><td>N</td><td>7</td><td>2</td></tr></table>",
  "secenekler": [
    "Yalnız III",
    "II ve III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Eksik değerlendirme: K pozitif, L negatif yüklüdür; zıt cinsler çeker. II de doğrudur.",
    null,
    "I’i doğru sanma: M nötr, N pozitif yüklüdür; yüklü cisim nötr cismi çeker, I yanlıştır. Ayrıca III de doğrudur.",
    "I’i doğru sanma: M nötr, N pozitif yüklüdür; yüklü cisim nötr cismi çeker, I yanlıştır. Ayrıca II de doğrudur."
  ],
  "aciklama": "Önce her cismin yük durumunu bul, sonra çiftleri değerlendir.\nAdım 1: K (9+ 4−) pozitif, L (3+ 8−) negatif, M (5+ 5−) nötr, N (7+ 2−) pozitif yüklüdür.\nAdım 2: I: M nötr, N pozitiftir; yüklü cisim nötr cismi çeker. I yanlıştır.\nAdım 3: II: K pozitif, L negatiftir; zıt cins olduklarından çekerler, II doğrudur. III: L negatif, N pozitiftir; çekerler, III doğrudur.\nSağlama: İtme yalnız K ile N arasında görülür; I, II ve III’te itme iddiası yoktur.\nSık yapılan hata: Nötr cisimle yüklü cisim arasında etkileşim olmadığını sanmak.\nCevap B."
},
{
  "id": "fen-yc-253",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Yalıtkan iple asılı hafif metal bir top nötrdür. Negatif yüklü bir çubuk topa yaklaştırılıyor; top çubuğa değiyor ve bir süre değmiş durumda kalıyor.\n**Buna göre top ile çubuk arasındaki etkileşim, değmeden önce ve değdikten sonra aşağıdakilerden hangisinde doğru verilmiştir?**",
  "gorsel": null,
  "secenekler": [
    "Önce iter; değince nötr kaldığı için çekilmeye başlar.",
    "Önce çeker; değince top pozitif yüklenir ve çekilmeye devam eder.",
    "Önce çeker; değince top nötr kalır ve itilir.",
    "Önce çeker; değince top negatif yüklenir ve itilir."
  ],
  "dogru": 3,
  "hatalar": [
    "Nötr topun itildiğini sanma: yüklü çubuk nötr topu çeker, ilk hareket çekmedir.",
    "Dokunmada zıt yüklenme sanma: değme sonunda top, çubukla aynı cins yani negatif yüklenir; zıt yüklenmez.",
    "Değmeyi etkisiz sanma: değince çubuktan topa elektron geçer, top nötr kalmaz.",
    null
  ],
  "aciklama": "Yüklü cisim nötr cismi çeker; dokunma sonunda iki cisim aynı cins yüklenir ve birbirini iter.\nAdım 1: Negatif çubuk, nötr topu çeker; top çubuğa doğru hareket eder.\nAdım 2: Değince çubuktaki fazla elektronların bir kısmı topa geçer ve top negatif yüklenir.\nAdım 3: Artık ikisi de negatif yüklüdür; aynı cins yükler birbirini ittiği için top çubuktan uzaklaşmak ister.\nSağlama: Top pozitif yüklenseydi çekme sürerdi; ancak elektronları veren çubuk, topa negatif yük aktarır.\nSık yapılan hata: Dokunma sonunda cisimlerin zıt cins yükleneceğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-254",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Şekilde yük durumları verilen X ve Y cisimleri ayrı ayrı iletken tellerle toprağa bağlanıyor.\n**Buna göre topraklama sonunda toprak ile bu iki cisim arasında toplam kaç elektron yer değiştirir?**",
  "gorsel": "<svg viewBox=\"0 0 400 170\" role=\"img\" aria-label=\"X cismi 5 pozitif ve 12 negatif, Y cismi 14 pozitif ve 6 negatif yük taşıyor; ikisi de toprağa bağlı\"><circle cx=\"100\" cy=\"62\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"59\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"100\" y=\"79\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">12−</text><text x=\"100\" y=\"18\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">X</text><line x1=\"100\" y1=\"98\" x2=\"100\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"80\" y1=\"122\" x2=\"120\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"87\" y1=\"131\" x2=\"113\" y2=\"131\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"94\" y1=\"140\" x2=\"106\" y2=\"140\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"160\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text><circle cx=\"300\" cy=\"62\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"300\" y=\"59\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">14+</text><text x=\"300\" y=\"79\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"300\" y=\"18\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">Y</text><line x1=\"300\" y1=\"98\" x2=\"300\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"280\" y1=\"122\" x2=\"320\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"287\" y1=\"131\" x2=\"313\" y2=\"131\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"294\" y1=\"140\" x2=\"306\" y2=\"140\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"300\" y=\"160\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text></svg>",
  "secenekler": [
    "1",
    "8",
    "15",
    "26"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönleri çıkarma: X’ten toprağa 7, topraktan Y’ye 8 elektron geçer; farklı yönlerdeki geçişler birbirinden çıkarılmaz, toplanır.",
    "Yalnız Y’nin geçişini sayma: X de fazla elektronlarını toprağa verir, bu 7 elektron da yer değiştirir.",
    null,
    "Yük sembollerini karıştırma: 12 + 14 işleminin geçen elektronla ilgisi yoktur; yalnız fazlalıklar yer değiştirir."
  ],
  "aciklama": "Topraklamada her cismin yalnızca fazla ya da eksik yükü kadar elektron yer değiştirir.\nAdım 1: X’te negatif yük 12 − 5 = 7 fazladır; 7 elektron X’ten toprağa geçer.\nAdım 2: Y’de pozitif yük 14 − 6 = 8 fazladır; 8 elektron topraktan Y’ye geçer.\nAdım 3: Toplam yer değiştiren elektron sayısı 7 + 8 = 15’tir.\nSağlama: Sonuçta X 5+ 5−, Y 14+ 14− olur; ikisi de nötrdür.\nSık yapılan hata: Zıt yönlü geçişleri birbirinden çıkarmak.\nCevap C."
},
{
  "id": "fen-yc-255",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Yalıtkan saplı özdeş iletken K ve L küreleri şekilde görüldüğü gibi yüklüdür. K ile L birbirine dokundurulup yeniden ayrılıyor. Bir öğrenci bu işlem için şu yargıları yazıyor.\nI. L negatif yüklenir.\nII. Elektronlar K’den L’ye geçer.\nIII. K ile L birbirini çeker.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 540 125\" role=\"img\" aria-label=\"K küresi 3 pozitif 7 negatif, L küresi 6 pozitif 6 negatif yük taşıyor\"><circle cx=\"150\" cy=\"45\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"150\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3+</text><text x=\"150\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">7−</text><text x=\"150\" y=\"107\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"390\" cy=\"45\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"390\" y=\"42\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"390\" y=\"62\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"390\" y=\"107\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: fazla elektronlar K’den L’ye geçtiği için II de doğrudur.",
    "III’ü doğru sanma: dokunma sonunda iki küre de negatif yüklüdür; aynı cins yükler iter, çekmez.",
    null,
    "III’ü doğru sanma: iki küre aynı cins yüklendiği için birbirini iter. Ayrıca I doğrudur."
  ],
  "aciklama": "Dokunmada artan yük, özdeş küreler arasında paylaşılır ve küreler aynı cins yüklenir.\nAdım 1: K’de negatif yük 7 − 3 = 4 fazladır; L nötrdür.\nAdım 2: Artan 4 negatif yük iki küreye paylaşılınca her küreye 2 düşer. K’den L’ye 2 elektron geçer; L negatif yüklenir. I ve II doğrudur.\nAdım 3: İki küre de negatif yüklü olduğundan birbirini iter. III yanlıştır.\nSağlama: Son durumda K: 3+ 5−, L: 6+ 8−; ikisinde de 2 fazla negatif yük vardır.\nSık yapılan hata: Dokunma sonunda kürelerin birbirini çekeceğini sanmak.\nCevap C."
},
{
  "id": "fen-yc-256",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Metal gövdeli bir elektrikli fırının fişi üç uçludur. Fırın, topraklama hattı bulunan bir prize takılıyor. Bir usta fişle ilgili şu yargıları yazıyor.\nI. Fişin üçüncü ucu prizdeki toprak hattına bağlandığında gövdeye geçen yük toprağa ulaşabilir.\nII. Fişin üçüncü ucu, fırının gövdesine yük geçmesini engeller.\nIII. Fişin üçüncü ucu, fırının daha az enerji harcamasını sağlar.\n**Buna göre ustanın yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Üçüncü ucun görevini yanlış kurma: uç yükün gövdeye geçmesini engellemez, geçen yükü toprağa iletir. I doğrudur.",
    "II’yi doğru sanma: toprak ucu gövdeye yük geçmesini engellemez, geçen yükü boşaltır. II yanlıştır.",
    "Topraklamayı tasarruf sanma: topraklama enerji tüketimini değiştirmez, III yanlıştır. II de yanlıştır; I ise doğrudur."
  ],
  "aciklama": "Fişin toprak ucu, gövdeye geçen yükün toprağa gitmesini sağlayan iletken yolun parçasıdır.\nAdım 1: I doğrudur; toprak ucu toprak hattına bağlanınca gövdedeki yük toprağa ulaşabilir.\nAdım 2: II yanlıştır; arıza varsa gövdeye yük yine geçebilir, uç bu yükü boşaltır.\nAdım 3: III yanlıştır; topraklama güvenlik içindir, enerji tüketimini değiştirmez.\nSağlama: Üç yargının yalnızca ilki topraklamanın gerçek işlevini anlatır.\nSık yapılan hata: Topraklamayı yük oluşmasını engelleyen ya da tasarruf sağlayan bir önlem sanmak.\nCevap A."
},
{
  "id": "fen-yc-257",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Yalıtkan iplerle asılı A, B, C ve D cisimlerinden A’nın negatif yüklü olduğu biliniyor. Cisimler ikişer ikişer yaklaştırılınca şu gözlemler yapılıyor: A ile B itiyor, B ile C çekiyor, C ile D itiyor.\n**Buna göre bu cisimlerin yük durumu aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "B negatif, C nötr, D pozitif yüklüdür.",
    "B negatif, C pozitif, D pozitif yüklüdür.",
    "B negatif, C pozitif, D negatif yüklüdür.",
    "B pozitif, C negatif, D pozitif yüklüdür."
  ],
  "dogru": 1,
  "hatalar": [
    "Çekmeyi nötre bağlama: C ile D birbirini ittiğine göre C nötr olamaz; nötr cisim itmez.",
    null,
    "İtmeyi zıt cinse bağlama: C ile D itiyorsa aynı cins yüklüdür; C pozitifse D de pozitiftir.",
    "İtmeyi zıt cinse bağlama: A ile B itiyorsa B, A gibi negatiftir; pozitif olamaz."
  ],
  "aciklama": "İtme, iki cismin aynı cins yüklü olduğunu kesinleştirir; çekme ise zıt cins ya da nötr anlamına gelir.\nAdım 1: A negatif ve B’yi itiyor; B de negatiftir.\nAdım 2: B negatif ve C’yi çekiyor; C pozitif ya da nötr olabilir.\nAdım 3: C, D’yi itiyor; itme için C’nin yüklü olması gerekir, yani C pozitiftir. C pozitif olduğundan D de pozitiftir.\nSağlama: B (negatif) ile C (pozitif) çeker; C ile D (ikisi pozitif) iter.\nSık yapılan hata: Her çekmeyi “zıt cins” okuyup itmeyi gözden kaçırmak.\nCevap B."
},
{
  "id": "fen-yc-258",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "K, L ve M cisimlerinin pozitif (+) ve negatif (−) yük sembollerinin sayısı tabloda verilmiştir. Cisimler ayrı ayrı iletken telle toprağa bağlanıyor. Bir öğrenci şu yargıları yazıyor.\nI. K’den toprağa 7 elektron geçer.\nII. L’den toprağa 4 elektron geçer.\nIII. M ile toprak arasında elektron geçişi olmaz.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>2</td><td>9</td></tr><tr><td>L</td><td>7</td><td>3</td></tr><tr><td>M</td><td>5</td><td>5</td></tr></table>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: M nötrdür, fazla ya da eksik elektronu yoktur; III de doğrudur.",
    "Eksik değerlendirme: K’de 9 − 2 = 7 elektron fazladır ve toprağa geçer; I de doğrudur.",
    "II’yi doğru sanma: L pozitif yüklüdür, verecek elektronu yoktur; topraktan 4 elektron alır. II yanlıştır; ayrıca I doğrudur.",
    null
  ],
  "aciklama": "Topraklamada geçişin yönünü cismin yükü, sayısını fazlalık belirler.\nAdım 1: K’de negatif yük 9 − 2 = 7 fazladır; 7 elektron K’den toprağa geçer. I doğrudur.\nAdım 2: L’de pozitif yük 7 − 3 = 4 fazladır; L’nin 4 elektronu eksiktir ve elektronlar topraktan L’ye geçer. II yanlıştır.\nAdım 3: M’de yükler eşittir, nötrdür; toprakla elektron alışverişi olmaz. III doğrudur.\nSağlama: Sonuçta K 2+ 2−, L 7+ 7−, M 5+ 5− olur.\nSık yapılan hata: Pozitif yüklü cismin elektron verdiğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-259",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Yalıtkan saplı özdeş iletken K ve L küreleri vardır. K küresi pozitif yüklü, L küresi nötrdür. K ile L birbirine dokundurulup ayrılıyor. Daha sonra negatif yüklü bir M çubuğu, kürelere dokunmadan ayrı ayrı yaklaştırılıyor.\n**Buna göre M çubuğu ile K ve L küreleri arasındaki etkileşim aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "M çubuğu K’yi de L’yi de çeker.",
    "M çubuğu K’yi çeker; L’yi çekmez.",
    "M çubuğu K’yi çekmez; L’yi çeker.",
    "M çubuğu ne K’yi ne L’yi çeker."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "L’nin nötr kaldığını sanma: dokunmada yük paylaşılır, L de pozitif yüklenir ve negatif M tarafından çekilir.",
    "K’nin yükünü tümüyle L’ye verdiğini sanma: yük paylaşılır, K pozitif yüklü kalır ve M tarafından çekilir.",
    "Dokunmayı yükleri götürücü sanma: K’nin pozitif yükü iki küre arasında paylaşılır, ikisi de pozitif kalır ve çekilir."
  ],
  "aciklama": "Dokunmada yük paylaşılır; iki özdeş küre aynı cins yüklenir. Zıt cins yükler birbirini çeker.\nAdım 1: K pozitif, L nötrdür. Dokununca K’nin pozitif yükü iki küreye paylaşılır.\nAdım 2: Dokunmadan sonra K ve L pozitif yüklüdür.\nAdım 3: M negatif yüklüdür; pozitif yüklü iki küreyi de çeker.\nSağlama: Dokunmadan sonra iki küre de pozitiftir; negatif M, pozitif iki küreyi de çeker.\nSık yapılan hata: Dokunmadan sonra kürelerden birinin nötr kaldığını sanmak.\nCevap A."
},
{
  "id": "fen-yc-260",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir elektrik ustası, evin topraklama hattının ucundaki bakır çubuğu toprağa çakmadan önce çubuğu kalın bir plastik boruyla kaplıyor. Çubuk bu yüzden toprakla temas etmiyor. Evdeki metal gövdeli bir cihazın gövdesine, kablodaki bir hata nedeniyle yük geçiyor.\n**Buna göre bu durumla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Topraklama çalışır; çünkü yük çubuktan toprağa yine geçer.",
    "Topraklama çalışır; çünkü plastik yükü toprağa iletir.",
    "Topraklama çalışmaz; çünkü plastik yükün toprağa geçmesini engeller.",
    "Topraklama çalışmaz; çünkü bakır yükü toprağa iletemez."
  ],
  "dogru": 2,
  "hatalar": [
    "Plastik engeli yok sayma: çubuk plastikle kaplı olduğundan toprakla temas etmez; yük toprağa ulaşamaz.",
    "Plastiği iletken sanma: plastik yalıtkandır, yük iletmez.",
    null,
    "Bakırı yalıtkan sanma: bakır iyi bir iletkendir; sorun, çubuğun plastikle toprağa değmemesidir."
  ],
  "aciklama": "Topraklamada cisimle toprak arasında kesintisiz bir iletken yol bulunmalıdır.\nAdım 1: Hat ve bakır çubuk iletkendir, yükü çubuğun ucuna kadar taşır.\nAdım 2: Çubuk plastik boruyla kaplı olduğundan toprakla temas etmez; plastik yalıtkandır ve yükün toprağa geçmesine izin vermez.\nAdım 3: Yük toprağa gidemez, gövdede birikir ve dokunan kişiyi çarpabilir.\nSağlama: Çubuk çıplak olarak toprağa gömülseydi yol tamamlanır, yük toprağa giderdi.\nSık yapılan hata: Hattın bağlı olmasını topraklamanın çalıştığı anlamına almak.\nCevap C."
},
{
  "id": "fen-yc-261",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Başlangıçta 8 tane + ve 3 tane − yük sembolü bulunan K cismi, önce 4 elektron alıyor, sonra 2 elektron veriyor.\n**Buna göre K cisminin son durumu aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "8+ 3− ile pozitif yüklü",
    "8+ 5− ile pozitif yüklü",
    "8+ 7− ile pozitif yüklü",
    "8+ 9− ile negatif yüklü"
  ],
  "dogru": 1,
  "hatalar": [
    "Net değişimi yok sayma: 4 elektron alıp 2 elektron vermek negatif yükü 4 − 2 = 2 artırır; durum başlangıçtaki gibi kalmaz.",
    null,
    "Yalnız ilk işlemi uygulama: 3 + 4 = 7 sonucu, 2 elektronun verildiğini hesaba katmaz.",
    "Verme işlemini de ekleme: elektron verilince negatif yük azalır, artmaz."
  ],
  "aciklama": "Elektron alınca negatif yük artar, elektron verilince azalır; protonlar değişmez.\nAdım 1: Başlangıç: 8+ 3−. Protonlar yerinde kalacağından pozitif yük hep 8’dir.\nAdım 2: 4 elektron alınınca negatif yük 3 + 4 = 7 olur.\nAdım 3: 2 elektron verilince negatif yük 7 − 2 = 5 olur. Son durum 8+ 5−’dir ve pozitif yük fazladır.\nSağlama: Net değişim 4 − 2 = 2 elektrondur; 3 + 2 = 5.\nSık yapılan hata: Verme işlemini de negatif yüke eklemek.\nCevap B."
},
{
  "id": "fen-yc-262",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Yaprakları açık duran negatif yüklü bir elektroskopun topuzuna çıplak elle dokunuluyor. Bir öğrenci bu olayla ilgili şu yargıları yazıyor.\nI. Topraktan elektroskopa elektron geçer.\nII. Elektroskoptaki fazla elektronlar toprağa geçer ve yapraklar kapanır.\nIII. Elektroskop pozitif yüklenir.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü ters kurma: elektroskop negatif yüklüdür, fazla elektronu vardır; elektron topraktan gelmez, toprağa gider.",
    null,
    "Zıt yüklenme sanma: topraklanan cisim nötr olur, pozitif yüklenmez.",
    "I’i doğru sanma: elektronlar elektroskoptan toprağa gider, topraktan gelmez; I yanlış, II doğrudur."
  ],
  "aciklama": "El ile dokunmak elektroskobu vücut yoluyla topraklar: fazla yük toprağa gider ve elektroskop nötr olur.\nAdım 1: Elektroskop negatiftir, fazla elektronu vardır.\nAdım 2: Elle dokunulunca bu fazla elektronlar vücut yoluyla toprağa geçer. I yanlış, II doğrudur.\nAdım 3: Fazlalık gidince elektroskop nötr olur ve yapraklar kapanır; pozitif yüklenmez. III yanlıştır.\nSağlama: Pozitif yüklü elektroskop olsaydı elektronlar topraktan ona gelirdi.\nSık yapılan hata: Topraklanan negatif cismin pozitif yüklendiğini sanmak.\nCevap B."
},
{
  "id": "fen-yc-263",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "X ve Y çubukları yalıtkan saplarla tutuluyor. İki çubuk birbirine yaklaştırıldığında birbirini itiyor. Nötr ve hafif bir metal top ise bu çubukların her biri tarafından ayrı ayrı çekiliyor.\n**Buna göre X ve Y çubukları için aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "X nötrdür, Y yüklüdür.",
    "X ve Y zıt cins yüklüdür.",
    "X ve Y nötrdür.",
    "X ve Y aynı cins yüklüdür."
  ],
  "dogru": 3,
  "hatalar": [
    "İtmenin kaynağını yanlış kurma: nötr bir cisim başka bir cismi itmez; itme için ikisinin de yüklü olması gerekir.",
    "İtmeyi zıt cinse bağlama: zıt cinsler çeker, iter değil.",
    "Nötr cismi yüklü cisme tepkisiz sanma: nötr çubuklar ne topu çeker ne de birbirini iter.",
    null
  ],
  "aciklama": "İtme gözlenirse iki cisim kesinlikle aynı cins yüklüdür.\nAdım 1: X ile Y birbirini itiyor; bunun için ikisi de yüklü olmalıdır.\nAdım 2: İtme yalnız aynı cins yükler arasında olur; X ve Y aynı cins yüklüdür.\nAdım 3: Nötr topun çekilmesi yüklü cisimler için beklenen sonuçtur ve bu bilgiyi doğrular.\nSağlama: Pozitif mi negatif mi olduğu verilmediğinden yalnız “aynı cins” denebilir.\nSık yapılan hata: İtmeyi zıt cinse ya da nötrlüğe bağlamak.\nCevap D."
},
{
  "id": "fen-yc-264",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Havaalanında yakıt ikmali yapılacak bir uçağın metal gövdesi ile ikmal tankeri arasına iletken bir kablo bağlanıyor; kablonun diğer ucu da yere çakılı metal bir çubuğa takılıyor. Yakıt aktarılırken sürtünmeyle yük birikebilir ve yakıt buharı kolay tutuşur. Teknisyen bu düzenekle ilgili bir açıklama yapıyor.\n**Buna göre teknisyenin açıklaması aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Biriken yük kablodan geçip toprağa aktarıldığı için kıvılcım riski azalır.",
    "Biriken yük kablonun içinde yok olduğu için kıvılcım riski azalır.",
    "Biriken yük uçağın gövdesinde tutulduğu için kıvılcım riski azalır.",
    "Biriken yük havaya geri gönderildiği için kıvılcım riski azalır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yükün yok olduğunu sanma: yük yok olmaz; kablodan geçip toprağa aktarılır.",
    "Yükün gövdede kalmasını koruma sanma: gövdede kalan yük kıvılcım ve yangın tehlikesi doğurur; koruma yükün toprağa gitmesiyle sağlanır.",
    "Yükün havaya gittiğini sanma: kablo yükü havaya değil, yere çakılı metal çubuk yoluyla toprağa iletir."
  ],
  "aciklama": "Topraklama, biriken yükü iletken bir yoldan toprağa aktararak kıvılcım ve yangın riskini azaltır.\nAdım 1: Yakıt aktarılırken sürtünme uçağı ve tankeri yükleyebilir.\nAdım 2: Metal kablo iletkendir ve ucu yere çakılı metal çubuğa ulaşır; biriken yük bu yoldan toprağa geçer.\nAdım 3: Yük birikmediği için gövdeler arasında kıvılcım oluşmaz ve yanıcı buhar tutuşmaz.\nSağlama: Yük yok olmaz ve havaya da gönderilmez; iletken yoldan toprağa gider.\nSık yapılan hata: Topraklamanın yükü yok ettiğini ya da gövdede tuttuğunu sanmak.\nCevap A."
},
{
  "id": "fen-yc-265",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Negatif yüklü bir K küresine (4+ 9−), P, R, S ve T malzemelerinden yapılmış eşit boyutlu çubuklarla ayrı ayrı toprağa bağlanıyor. Her denemeden önce K küresi yeniden 4+ 9− olarak yükleniyor. Denemelerden sonra K’nin yük durumu tabloya yazılıyor.\n**Buna göre hangi malzemeler yalıtkandır?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Çubuğun malzemesi</th><th>K’nin bağlantıdan sonraki yük durumu</th></tr><tr><td>P</td><td>4+ 4−</td></tr><tr><td>R</td><td>4+ 9−</td></tr><tr><td>S</td><td>4+ 4−</td></tr><tr><td>T</td><td>4+ 9−</td></tr></table>",
  "secenekler": [
    "P ve R",
    "P ve S",
    "R ve T",
    "S ve T"
  ],
  "dogru": 2,
  "hatalar": [
    "P’yi yalıtkan sanma: P’de K nötr olmuştur; yük toprağa geçmiştir, P iletkendir.",
    "İletkenleri seçme: P ve S’de K nötr olmuştur, yani ikisi de iletkendir.",
    null,
    "S’yi yalıtkan sanma: S’de K nötr olmuştur; S iletkendir."
  ],
  "aciklama": "İletken malzemeden yük geçer ve cisim nötr olur; yalıtkan malzemeden yük geçmez ve cismin yükü değişmez.\nAdım 1: K başlangıçta 4+ 9− yüklüdür; negatif yük 5 fazladır.\nAdım 2: P ve S ile bağlanınca K 4+ 4− olmuş; fazla 5 elektron toprağa geçmiştir. P ve S iletkendir.\nAdım 3: R ve T ile bağlanınca K’nin yükü 4+ 9− kalmış; yük geçişi olmamıştır. R ve T yalıtkandır.\nSağlama: Yük durumunun değişmediği satırlar yalıtkan malzemeyi gösterir.\nSık yapılan hata: Yükü değişen cismi yalıtkanla ilişkilendirmek.\nCevap C."
},
{
  "id": "fen-yc-266",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Fen kulübü öğrencileri, biriken yükü güvenli yoldan toprağa gönderen düzenekleri sınıf panosuna ekliyor.\nI. Çatıya konan ve toprağa inen iletken kablolu paratoner\nII. Plastik tabanlı ayakkabı giyen bir çalışanın yalıtkan zeminde durması\nIII. Tabanı iletken ayakkabı giyen bir çalışanın toprak hattına bağlı iletken zeminde durması\n**Buna göre bu örneklerden hangileri biriken yükün toprağa aktarılmasını sağlar?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksik değerlendirme: iletken tabanlı ayakkabı ve toprak hattına bağlı iletken zemin de yükü toprağa geçirir; III de doğrudur.",
    "Eksik değerlendirme: paratonerin toprağa inen iletken kablosu yıldırımın yükünü toprağa iletir; I de doğrudur.",
    "Yalıtkanı iletken sanma: plastik taban ve yalıtkan zemin yükün toprağa geçmesine izin vermez. II yanlıştır; ayrıca I doğrudur.",
    null
  ],
  "aciklama": "Yükün toprağa gidebilmesi için baştan sona iletken ve toprağa bağlı bir yol gerekir.\nAdım 1: I: Paratonerin kablosu iletkendir ve toprağa iner; yıldırımın yükü toprağa gider. Doğrudur.\nAdım 2: II: Plastik taban ve yalıtkan zemin yükü geçirmez; çalışandaki yük birikir. Yanlıştır.\nAdım 3: III: İletken taban ve toprak hattına bağlı iletken zemin kesintisiz yol kurar; çalışandaki yük toprağa geçer. Doğrudur.\nSağlama: Yükü toprağa ileten iki örnek de baştan sona iletkendir ve toprağa bağlıdır.\nSık yapılan hata: Yalıtkan malzemenin yükü boşalttığını sanmak.\nCevap D."
},
{
  "id": "fen-yc-267",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir öğrenci defterine şu notu yazıyor: “9 tane + ve 3 tane − yük sembolü bulunan K cismi topraklanırsa K’den toprağa 6 proton geçer ve K nötr olur.”\n**Buna göre öğrencinin notundaki hata aşağıdakilerden hangisinde doğru olarak verilmiştir?**",
  "gorsel": null,
  "secenekler": [
    "Yük geçişini protonlar değil elektronlar yapar; ayrıca elektronlar topraktan K’ye geçer.",
    "Yük geçişini protonlar değil elektronlar yapar; ayrıca elektronlar K’den toprağa geçer.",
    "K topraklandığında nötr olmaz; yalnızca yükü 6 azalır.",
    "K topraklandığında nötr olmaz; yük geçişi olmaz."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Geçiş yönünü ters kurma: K’de pozitif yük fazladır, verecek fazla elektronu yoktur; elektronlar topraktan K’ye gelir.",
    "Sonucu yanlış kurma: fazlalık kapandığında 9+ 9− olur, K nötr olur; öğrencinin notunda yanlış olan tanecik ve yöndür.",
    "Topraklamayı etkisiz sanma: K pozitif yüklüdür; topraklanınca yük geçişi olur ve K nötr olur."
  ],
  "aciklama": "Topraklamada yük geçişini elektronlar yapar; protonlar yerinde kalır.\nAdım 1: K’de pozitif yük 9 − 3 = 6 fazladır; yani K’nin 6 elektronu eksiktir.\nAdım 2: Eksik elektronlar topraktan K’ye gelir; öğrencinin “6 proton K’den toprağa geçer” demesi hem tanecik hem yön bakımından yanlıştır.\nAdım 3: Sonuçta 9+ 9− olur ve K nötr olur; notun “K nötr olur” kısmı doğrudur.\nSağlama: 3 + 6 = 9 olduğundan pozitif ve negatif yükler eşitlenir.\nSık yapılan hata: Pozitif yüklü cismin topraklanınca yük verdiğini sanmak.\nCevap A."
},
{
  "id": "fen-yc-268",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir veri merkezinin sunucu odasında yük birikimine karşı önlemler alınıyor. Teknisyen önlemlerle ilgili şu yargıları yazıyor.\nI. Yalıtkan bir halı serilmesi, odadaki yükün toprağa boşalmasını kolaylaştırır.\nII. Rafların toprak hattına bağlanması, raflara geçen yükün toprağa gitmesini sağlar.\nIII. Teknisyenin bileğine takılan iletken bilekliğin kablosu toprak hattına bağlıysa vücudundaki yük toprağa geçebilir.\n**Buna göre teknisyenin yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "II ve III",
    "I ve III",
    "I ve II"
  ],
  "dogru": 1,
  "hatalar": [
    "Eksik değerlendirme: kablosu toprak hattına bağlı iletken bileklik de yük için yol kurar; III de doğrudur.",
    null,
    "I’i doğru sanma: yalıtkan halı yükün toprağa geçmesini engeller, kolaylaştırmaz. I yanlıştır; II de doğrudur.",
    "I’i doğru sanma: yalıtkan halı yükün boşalmasını kolaylaştırmaz. I yanlıştır; III de doğrudur."
  ],
  "aciklama": "Yük, iletken ve toprağa bağlı bir yoldan boşalır; yalıtkan malzeme yolu keser.\nAdım 1: I yanlıştır; yalıtkan halı yükün toprağa geçişini engeller ve yük birikmesine yol açar.\nAdım 2: II doğrudur; toprak hattına bağlı raflara geçen yük bu hat yoluyla toprağa gider.\nAdım 3: III doğrudur; iletken bileklik toprak hattına bağlıysa teknisyenin vücudundaki yük bu yoldan toprağa taşınır.\nSağlama: Yalıtkan malzeme içeren tek yargı I’dir ve yanlıştır.\nSık yapılan hata: Yalıtkan bir halının yükü uzaklaştıracağını sanmak.\nCevap B."
},
{
  "id": "fen-yc-269",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir öğrenci “Topraklı prize takılan cihazın gövdesine yük asla geçmez.” diyor. Fen öğretmeni bu yargıyı değerlendiriyor.\n**Buna göre öğretmenin değerlendirmesi aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Doğrudur; çünkü topraklama yük oluşmasını engeller.",
    "Doğrudur; çünkü gövde toprağa bağlıdır ve yük geçemez.",
    "Yanlıştır; yük gövdeye geçebilir ama toprak hattı yoluyla toprağa gider.",
    "Yanlıştır; topraklı prizde gövdeye geçen yük gövdede kalıcı olarak birikir."
  ],
  "dogru": 2,
  "hatalar": [
    "Topraklamayı yük oluşumunu önleyen düzenek sanma: arıza ya da sürtünme yük oluşturabilir; topraklama bu yükü uzaklaştırır.",
    "Bağlantıyı geçiş engeli sanma: toprağa bağlı gövdeye de yük geçebilir, fakat yük hemen toprağa gider.",
    null,
    "Topraklamayı işlevsiz sanma: topraklı prizde yük gövdede birikmez, toprak hattıyla toprağa gider."
  ],
  "aciklama": "Topraklama yükün cihaza geçmesini değil, cihazda birikmesini engeller.\nAdım 1: Kablodaki bir arıza ya da sürtünme gövdeye yük geçirebilir; topraklama bunu önleyemez.\nAdım 2: Gövde toprak hattıyla toprağa bağlıysa geçen yük iletken yoldan toprağa gider.\nAdım 3: Yük birikmediği için gövdeye dokunan kişi çarpılmaz. Öğrencinin “asla geçmez” yargısı yanlıştır.\nSağlama: Topraklı olmayan prizde aynı yük gövdede birikir; farkı yaratan toprak hattıdır.\nSık yapılan hata: Topraklamanın yük oluşmasını önlediğini sanmak.\nCevap C."
},
{
  "id": "fen-yc-270",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Kışın sentetik halı serili bir odada yürüyen Deniz, topraklı metal radyatöre dokunduğunda küçük bir kıvılcım görüyor. Öğretmen olayı yıldırımla karşılaştırıyor ve şu yargıları sıralıyor.\nI. Yıldırım, bulutlarda biriken yükün büyük bir boşalmasıdır.\nII. İnsan vücudu iletken olduğundan vücutta biriken yük, radyatöre dokunulunca toprağa geçebilir.\nIII. Kıvılcım, Deniz’de biriken yükün toprağa boşalmasıdır.\n**Buna göre öğretmenin yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız III",
    "I ve II",
    "I, II ve III",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Eksik değerlendirme: I ve II de doğrudur; yıldırım yük boşalmasıdır ve vücut iletkendir.",
    "III’ü atlama: kıvılcım, Deniz’de biriken yükün topraklı radyatör yoluyla boşalmasıdır; III de doğrudur.",
    null,
    "I’i atlama: yıldırım bulutlarda biriken yükün büyük bir boşalmasıdır; I de doğrudur."
  ],
  "aciklama": "Sürtünmeyle biriken yük, iletken bir yola dokunulduğunda toprağa boşalır; yıldırım da büyük bir yük boşalmasıdır.\nAdım 1: I doğrudur; yıldırım, bulutlarda biriken yükün büyük bir boşalmasıdır.\nAdım 2: II doğrudur; vücut iletkendir, biriken yük topraklı metale dokunulunca toprağa geçer.\nAdım 3: III doğrudur; kıvılcım, Deniz’de biriken yükün topraklı radyatör yoluyla toprağa boşalmasıdır.\nSağlama: Üç yargıda da yük birikmesi ve toprağa boşalma aynı mantıkla açıklanıyor.\nSık yapılan hata: Kıvılcımı yeni yük oluşumu sanmak; kıvılcım birikmiş yükün boşalmasıdır.\nCevap C."
},
{
  "id": "fen-yc-271",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Şekilde K cisminin topraklama sonrasındaki yük durumu verilmiştir. Topraklama sırasında K’den toprağa 3 elektron geçmiştir.\n**Buna göre K cisminin topraklamadan önceki yük durumu aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 -6 420 176\" role=\"img\" aria-label=\"K cismi topraklama sonrasında 8 pozitif ve 8 negatif yük taşıyor; K’den toprağa 3 elektron geçmiştir\"><circle cx=\"80\" cy=\"62\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"80\" y=\"59\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8+</text><text x=\"80\" y=\"79\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8−</text><text x=\"80\" y=\"18\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><line x1=\"116\" y1=\"62\" x2=\"300\" y2=\"62\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"300\" y1=\"62\" x2=\"300\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"280\" y1=\"98\" x2=\"320\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"287\" y1=\"107\" x2=\"313\" y2=\"107\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"294\" y1=\"116\" x2=\"306\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"240,62 224,55 224,69\" fill=\"currentColor\"/><text x=\"190\" y=\"48\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3 elektron</text><text x=\"300\" y=\"146\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">toprak</text></svg>",
  "secenekler": [
    "8+ 3− ile pozitif yüklü",
    "8+ 5− ile pozitif yüklü",
    "8+ 8− ile nötr",
    "8+ 11− ile negatif yüklü"
  ],
  "dogru": 3,
  "hatalar": [
    "Geçen elektron sayısını negatif yük sanma: toprağa 3 elektron geçmiştir, ama K’nin başlangıçtaki negatif yükü 3 değildir.",
    "Yönü ters yorumlama: elektronlar K’den toprağa geçtiğine göre K elektron kaybetmiştir; başlangıçta negatif yük daha fazlaydı, azı değil.",
    "Geçişi yok sayma: elektron geçişi olduğuna göre başlangıç durumu son durumdan farklıdır.",
    null
  ],
  "aciklama": "Topraklamada negatif yüklü cisim fazla elektronlarını toprağa verir ve nötr olur.\nAdım 1: Topraklama sonrası K: 8+ 8− ve nötrdür; protonlar topraklamada değişmez.\nAdım 2: K’den toprağa 3 elektron geçtiğine göre başlangıçta negatif yük 8 + 3 = 11 idi.\nAdım 3: Başlangıç durumu 8+ 11−’dir; negatif yük fazla olduğundan K negatif yüklüydü.\nSağlama: 8+ 11−’den 3 elektron çıkarılırsa 8+ 8− kalır.\nSık yapılan hata: Elektronların geçiş yönünü ters okumak.\nCevap D."
},
{
  "id": "fen-yc-272",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Yalıtkan saplı özdeş iletken kürelerin dokunma yoluyla yüklenmesiyle ilgili bir öğrenci şu yargıları yazıyor.\nI. Dokunma sonunda iki küre her zaman zıt cins yüklenir.\nII. Aynı cins yüklenen iki küre dokunma sonunda birbirini iter.\nIII. Pozitif yüklü bir küre, nötr özdeş bir küreye dokundurulursa iki küre de pozitif yüklenir.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "II ve III",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eksik değerlendirme: pozitif yüklü küre nötr özdeş küreyle yükünü paylaşır, ikisi de pozitif olur; III de doğrudur.",
    "Eksik değerlendirme: aynı cins yüklü küreler birbirini iter; II de doğrudur.",
    "I’i doğru sanma: dokunmada küreler zıt cins değil, aynı cins yüklenir. I yanlıştır."
  ],
  "aciklama": "Dokunmada yük paylaşılır; küreler aynı cins yüklenir (ya da ikisi de nötr olur).\nAdım 1: I yanlıştır; dokunma sonunda küreler aynı cins yüklenir.\nAdım 2: II doğrudur; aynı cins yüklü küreler birbirini iter.\nAdım 3: III doğrudur; pozitif yük iki özdeş küre arasında paylaşılır ve ikisi de pozitif yüklü olur.\nSağlama: Dokunmada küreler aynı cins yüklenir; bu yüzden I’deki “her zaman zıt cins” ifadesi yanlıştır.\nSık yapılan hata: Dokunmada elektriklenmeyi sürtünmedeki gibi zıt yüklenme sanmak.\nCevap A."
},
{
  "id": "fen-yc-273",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Tabloda bazı topraklama uygulamalarında yükün kaynağı ve gideceği yer verilmiştir.\n**Buna göre hangi uygulamada yükün gideceği yer yanlış verilmiştir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Uygulama</th><th>Yükün kaynağı</th><th>Yükün gideceği yer</th></tr><tr><td>Paratoner</td><td>Yıldırım</td><td>Toprağa gömülü metal levha</td></tr><tr><td>Tanker zinciri</td><td>Sürtünmeyle biriken yük</td><td>Tankerin yakıt deposu</td></tr><tr><td>Topraklı priz</td><td>Cihaz gövdesine geçen yük</td><td>Binanın toprak hattı</td></tr><tr><td>Matbaa makinesi</td><td>Kâğıt sürtünmesiyle biriken yük</td><td>Topraklama kablosuyla toprak</td></tr></table>",
  "secenekler": [
    "Paratoner",
    "Tanker zinciri",
    "Topraklı priz",
    "Matbaa makinesi"
  ],
  "dogru": 1,
  "hatalar": [
    "Doğru satırı seçme: paratonerin kablosu yıldırımın yükünü toprağa iletir.",
    null,
    "Doğru satırı seçme: toprak hattı, gövdeye geçen yükü toprağa iletir.",
    "Doğru satırı seçme: matbaa makinesinin topraklama kablosu biriken yükü toprağa iletir."
  ],
  "aciklama": "Topraklamada fazla yük, iletken bir yol üzerinden toprağa aktarılır; böylece cisim nötr olur ve tehlike ortadan kalkar.\nAdım 1: Paratonerin kablosu yükü toprağa gömülü metal levhaya, topraklı prizin üçüncü ucu binanın toprak hattına, matbaa makinesinin kablosu toprağa iletir; bu satırlar doğrudur.\nAdım 2: Tanker zinciri yere değer ve sürtünmeyle biriken yükü toprağa iletir. Tabloda yükün yakıt deposuna gittiği yazıyor; yük depoya gitseydi kıvılcım ve yangın tehlikesi artardı. Bu satır yanlıştır.\nSağlama: Bütün topraklama uygulamalarında yükün son durağı topraktır.\nSık yapılan hata: Zincirin yükü tankerin içinde topladığını sanmak.\nCevap B."
},
{
  "id": "fen-yc-274",
  "kazanim": "F.8.7.2.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Yalıtkan saplı özdeş iletken K ve L küreleri vardır. K küresinde 6 tane + ve 2 tane − yük sembolü bulunur, L küresi nötrdür. K ile L birbirine dokundurulup ayrılıyor. Sonra yalnızca L küresi iletken telle toprağa bağlanıp tel çekiliyor. Son olarak K ile L yan yana getiriliyor.\n**Buna göre K ile L arasındaki etkileşim aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Birbirini iter; çünkü ikisi de pozitif yüklüdür.",
    "Birbirini çeker; çünkü K pozitif, L negatif yüklüdür.",
    "Birbirini ne çeker ne iter; çünkü ikisi de nötrdür.",
    "Birbirini çeker; çünkü K pozitif yüklü, L nötrdür."
  ],
  "dogru": 3,
  "hatalar": [
    "Topraklamayı unutma: L toprağa bağlanınca pozitif yükünü kaybeder ve nötr olur; artık K ile L aynı cins yüklü değildir.",
    "Topraklamada zıt yüklenme sanma: topraklanan L nötr olur, negatif yüklenmez.",
    "K’nin de nötr olduğunu sanma: topraklanan yalnızca L’dir; K, dokunmadan kalan pozitif yükü taşımaya devam eder.",
    null
  ],
  "aciklama": "Dokunmada yük paylaşılır, topraklamada ise topraklanan cismin fazla yükü gider ve cisim nötr olur.\nAdım 1: K’de pozitif yük 6 − 2 = 4 fazladır. Dokununca bu yük paylaşılır; K ve L ikisi de pozitif yüklenir.\nAdım 2: Yalnız L topraklanınca topraktan L’ye elektron gelir ve L nötr olur. K pozitif yüklü kalır.\nAdım 3: Yüklü K, nötr L’yi çeker.\nSağlama: Topraklanmasaydı iki küre pozitif olur ve birbirini iterdi; topraklama sonucu değiştirdi.\nSık yapılan hata: Topraklamadan sonra kürenin eski yükünü koruduğunu sanmak.\nCevap D."
},
{
  "id": "fen-yc-275",
  "kazanim": "F.8.7.2.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Grafikte P, R, S ve T cisimlerinin pozitif (+) ve negatif (−) yük sembollerinin sayısı verilmiştir.\n**Buna göre hangi cisim 4 elektron kazanırsa nötr olur?**",
  "gorsel": "<svg viewBox=\"0 0 540 244\" role=\"img\" aria-label=\"P cismi 5 pozitif 5 negatif, R cismi 4 pozitif 9 negatif, S cismi 7 pozitif 3 negatif, T cismi 6 pozitif 3 negatif sembole sahip\"><line x1=\"70\" y1=\"210\" x2=\"520\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"62\" y=\"215\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"70\" y1=\"174\" x2=\"520\" y2=\"174\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><text x=\"62\" y=\"179\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">2</text><line x1=\"70\" y1=\"138\" x2=\"520\" y2=\"138\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><text x=\"62\" y=\"143\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">4</text><line x1=\"70\" y1=\"102\" x2=\"520\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><text x=\"62\" y=\"107\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">6</text><line x1=\"70\" y1=\"66\" x2=\"520\" y2=\"66\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><text x=\"62\" y=\"71\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">8</text><line x1=\"70\" y1=\"30\" x2=\"520\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"3 4\"/><text x=\"62\" y=\"35\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">10</text><line x1=\"70\" y1=\"30\" x2=\"70\" y2=\"210\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"100\" y=\"120\" width=\"36\" height=\"90\" fill=\"var(--vurgu)\"/><text x=\"118\" y=\"115\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">5</text><rect x=\"140\" y=\"120\" width=\"36\" height=\"90\" fill=\"var(--vurgu2)\"/><text x=\"158\" y=\"115\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">5</text><text x=\"138\" y=\"234\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">P</text><rect x=\"210\" y=\"138\" width=\"36\" height=\"72\" fill=\"var(--vurgu)\"/><text x=\"228\" y=\"133\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4</text><rect x=\"250\" y=\"48\" width=\"36\" height=\"162\" fill=\"var(--vurgu2)\"/><text x=\"268\" y=\"43\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">9</text><text x=\"248\" y=\"234\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">R</text><rect x=\"320\" y=\"84\" width=\"36\" height=\"126\" fill=\"var(--vurgu)\"/><text x=\"338\" y=\"79\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">7</text><rect x=\"360\" y=\"156\" width=\"36\" height=\"54\" fill=\"var(--vurgu2)\"/><text x=\"378\" y=\"151\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><text x=\"358\" y=\"234\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">S</text><rect x=\"430\" y=\"102\" width=\"36\" height=\"108\" fill=\"var(--vurgu)\"/><text x=\"448\" y=\"97\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">6</text><rect x=\"470\" y=\"156\" width=\"36\" height=\"54\" fill=\"var(--vurgu2)\"/><text x=\"488\" y=\"151\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><text x=\"468\" y=\"234\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">T</text><text x=\"78\" y=\"20\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\">Sembol sayısı</text><rect x=\"330\" y=\"8\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\"/><text x=\"350\" y=\"20\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\">+ sembol</text><rect x=\"430\" y=\"8\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\"/><text x=\"450\" y=\"20\" text-anchor=\"start\" font-size=\"14\" fill=\"currentColor\">− sembol</text></svg>",
  "secenekler": [
    "P",
    "R",
    "S",
    "T"
  ],
  "dogru": 2,
  "hatalar": [
    "Nötrü yükle karıştırma: P zaten nötrdür; elektron kazanırsa negatif yüklenir.",
    "Yönü ters kurma: R negatif yüklüdür (fazla 5 elektron); elektron kazanırsa daha çok negatifleşir.",
    null,
    "Fazlalığı yanlış hesaplama: T’de pozitif yük 6 − 3 = 3 fazladır; 3 elektron kazanırsa nötr olur, 4 elektron kazanırsa negatif yüklenir."
  ],
  "aciklama": "Elektron kazanan cismin negatif yükü artar; nötr olması için pozitif yük fazlası kadar elektron kazanması gerekir.\nAdım 1: P: 5 ve 5 eşittir, nötr. R: 4 pozitif, 9 negatif; negatif fazla. Bu ikisi için elektron kazanmak nötrlüğü getirmez.\nAdım 2: S: 7 pozitif, 3 negatif; pozitif yük 7 − 3 = 4 fazladır. T: 6 − 3 = 3 fazladır.\nAdım 3: 4 elektron kazanan S, 7+ 7− olur ve nötr hâle gelir.\nSağlama: T 4 elektron kazansa 6+ 7− olur ve negatif yüklenirdi.\nSık yapılan hata: Fazlalığı hesaplamadan negatif sembol sayısına bakmak.\nCevap C."
}
);
