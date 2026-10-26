// Fen Bilimleri — Elektrik Yüklü Cisimler: Havuz eki (kademe 0, fen-yc-016 … fen-yc-075)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["elektrik-yuklu-cisimler"] = window.LGS_BANK["elektrik-yuklu-cisimler"] || []).push(
{
  "id": "fen-yc-016",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Şekilde yük durumu verilen R cismi nasıl yüklüdür?**",
  "gorsel": "<svg viewBox=\"0 0 140 135\" role=\"img\" aria-label=\"R cismi 2 pozitif ve 5 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">R</text></svg>",
  "secenekler": [
    "Negatif yüklü",
    "Pozitif yüklü",
    "Nötr",
    "Yük taşımayan"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük cinsini ters yorumlama: negatif yük fazla olduğundan cisim pozitif değil, negatif yüklüdür.",
    "Sayıları karşılaştırmama: 2 pozitif ve 5 negatif yük eşit değildir, cisim nötr olamaz.",
    "Yüksüz sanma: R cisminde 2 pozitif ve 5 negatif yük bulunur."
  ],
  "aciklama": "Cismin yük durumu, pozitif ve negatif yük sayılarının karşılaştırılmasıyla bulunur.\nAdım 1: R cisminde 2 pozitif, 5 negatif yük var.\nAdım 2: Negatif yük daha fazladır; fark 5 − 2 = 3 negatif yüktür.\nAdım 3: Fazla olan yük negatif olduğundan R negatif yüklüdür.\nSağlama: Sayılar eşit olsaydı cisim nötr olurdu.\nCevap A."
},
{
  "id": "fen-yc-017",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Üzerinde 9 proton ve 9 elektron bulunan bir cisim için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yüklüdür",
    "Negatif yüklüdür",
    "Nötrdür",
    "Nötr değil, yüksüzdür"
  ],
  "dogru": 2,
  "hatalar": [
    "Protona takılma: proton pozitiftir ama elektron sayısı da aynıdır; pozitif yük fazla değildir.",
    "Elektrona takılma: elektron negatiftir ama proton sayısı da aynıdır; negatif yük fazla değildir.",
    null,
    "Nötrü yüksüz sanma: cisimde 9 pozitif ve 9 negatif yük vardır, yalnızca miktarları eşittir."
  ],
  "aciklama": "Nötr cisim, pozitif ve negatif yükleri eşit olan cisimdir.\nAdım 1: Protonlar pozitif, elektronlar negatif yüklüdür.\nAdım 2: Cisimde 9 pozitif ve 9 negatif yük var; ikisi eşittir.\nAdım 3: Eşit olduklarında etkileri birbirini dengeler ve cisim nötr olur.\nSık yapılan hata: “Nötr” sözcüğünü “hiç yük yok” diye anlamak.\nCevap C."
},
{
  "id": "fen-yc-018",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "İpe asılı, negatif yüklü iki özdeş küre birbirine yaklaştırılıyor.\n**Buna göre küreler arasındaki etkileşim aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Birbirini iterler",
    "Birbirini çekerler",
    "Birbirini ne çeker ne iter",
    "Önce iterler, sonra çekerler"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Kuralı ters kurma: aynı cins yükler çekmez, iter; çekme zıt cinsler arasında olur.",
    "Etkileşimi görmeme: yüklü cisimler arasında her zaman çekme ya da itme olur.",
    "Etkileşimin yön değiştirdiğini sanma: aynı cins yükler yaklaştıkça yalnızca iter."
  ],
  "aciklama": "Aynı cins yüklü cisimler birbirini iter, zıt cins yüklü cisimler birbirini çeker.\nAdım 1: İki küre de negatif yüklüdür; yani aynı cins yüklüdür.\nAdım 2: Aynı cins yükler birbirini iter.\nSağlama: Küreler zıt cins yüklü olsaydı birbirini çekerlerdi.\nCevap A."
},
{
  "id": "fen-yc-019",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Pozitif yüklü bir plastik çubuk, masanın üzerindeki nötr kâğıt parçalarına dokundurulmadan yaklaştırılıyor.\n**Buna göre kâğıt parçaları için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Çubuktan uzağa itilirler",
    "Hareketsiz kalırlar",
    "Pozitif yüklenip çubuktan uzaklaşırlar",
    "Çubuğa doğru çekilirler"
  ],
  "dogru": 3,
  "hatalar": [
    "Nötrü iten sanma: yüklü cisim nötr cismi iter değil, çeker.",
    "Nötrü etkilenmez sanma: yüklü bir cisim, nötr cismi de çeker.",
    "Dokunmadan yüklenme sanma: çubuk değmediği için kâğıtlar yük kazanmaz, nötr kalıp çekilir.",
    null
  ],
  "aciklama": "Yüklü bir cisim, nötr bir cismi çeker.\nAdım 1: Kâğıt parçaları nötrdür; yani pozitif ve negatif yükleri eşittir.\nAdım 2: Pozitif yüklü çubuk, nötr cisimleri çeker.\nAdım 3: Bu yüzden kâğıt parçaları çubuğa doğru hareket eder.\nSık yapılan hata: Yüklü cismin yalnızca yüklü cisimlerle etkileştiğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-020",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Bulutlarda biriken yükün büyük bir boşalmasıyla oluşan ve gök gürültüsüyle birlikte görülen doğa olayı aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Gökkuşağı",
    "Yıldırım",
    "Hortum",
    "Dolu"
  ],
  "dogru": 1,
  "hatalar": [
    "Olay karıştırma: gökkuşağı ışığın su damlalarında kırılmasıyla oluşur; yük boşalması değildir.",
    null,
    "Olay karıştırma: hortum hava hareketiyle oluşur; elektrik yükü boşalması değildir.",
    "Olay karıştırma: dolu buz tanelerinin yağmasıdır; elektrik yükü boşalması değildir."
  ],
  "aciklama": "Yıldırım, bulutlarda biriken elektrik yükünün büyük bir boşalmasıdır.\nAdım 1: Bulutlarda yük birikir.\nAdım 2: Biriken yük, bulutla yer ya da bulutlar arasında ani bir boşalmayla ışık ve ses oluşturur.\nAdım 3: Bu olaya yıldırım denir; paratoner gibi topraklama düzenekleri bu yükü güvenle toprağa iletir.\nSık yapılan hata: Yıldırımı sıradan bir hava olayı sanıp elektrik yüküyle ilişkilendirmemek.\nCevap B."
},
{
  "id": "fen-yc-021",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Elektriklenme sırasında cisimler arasında yer değiştiren tanecikler aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Elektronlar",
    "Protonlar",
    "Protonlar ve elektronlar birlikte",
    "Atom çekirdekleri"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Taneciği karıştırma: protonlar atomun çekirdeğinde sıkıca durur, cisimler arasında geçmez.",
    "Taneciği karıştırma: yer değiştiren yalnızca elektronlardır, protonlar yerinde kalır.",
    "Taneciği karıştırma: çekirdek yerinden oynamaz; yük geçişini elektronlar sağlar."
  ],
  "aciklama": "Cisimler elektron alıp vererek yüklenir.\nAdım 1: Elektronlar atomun dış kısmında bulunur ve kolayca yer değiştirir.\nAdım 2: Protonlar çekirdekte olduğundan cisimler arasında geçmez.\nAdım 3: Elektron veren cisim pozitif, elektron alan cisim negatif yüklenir.\nSık yapılan hata: Pozitif yüklenen cismin proton kazandığını sanmak.\nCevap A."
},
{
  "id": "fen-yc-022",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Nötr bir metal küre, iletken bir telle toprağa bağlanıyor.\n**Buna göre küre için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Hiçbir yük geçişi olmaz, küre nötr kalır",
    "Topraktan elektron alıp negatif yüklenir",
    "Toprağa elektron verip pozitif yüklenir",
    "Toprağa proton verip nötr kalır"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Nötrün yük aldığını sanma: nötr cismin elektron fazlası ya da eksiği yoktur, topraklamada elektron almaz.",
    "Nötrün yük verdiğini sanma: nötr kürenin verecek fazla elektronu yoktur.",
    "Taneciği karıştırma: yük geçişini protonlar değil elektronlar yapar; ayrıca nötr kürede yük geçişi olmaz."
  ],
  "aciklama": "Topraklamada yalnızca fazla ya da eksik yük toprakla alışveriş eder.\nAdım 1: Nötr kürede pozitif ve negatif yükler eşittir.\nAdım 2: Ne verecek fazla elektronu ne de tamamlanacak eksiği vardır.\nAdım 3: Bu yüzden telle toprağa bağlansa da yük geçişi olmaz ve küre nötr kalır.\nSağlama: Yük geçişi için cismin yüklü olması gerekir.\nCevap A."
},
{
  "id": "fen-yc-023",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Benzin istasyonlarında yakıt pompalarının metal gövdeleri, toprak hattına bağlı iletkenlerle birleştirilir.\n**Bu uygulamanın amacı aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Pompayı toprağa bağlayıp yakıta yük kazandırmak",
    "Yakıtın hortumdan daha hızlı akmasını sağlamak",
    "Pompanın gövdesini dışarıdaki yüke karşı yalıtmak",
    "Yükü gövdeden uzaklaştırıp kıvılcımı önlemek"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters yorumlama: topraklama yük kazandırmaz, biriken yükü boşaltır.",
    "Amaç yanılgısı: topraklamanın akış hızıyla ilgisi yoktur.",
    "Yalıtmayı topraklama sanma: gövde iletkendir ve toprağa bağlıdır; yalıtım yükün geçişini engellerdi.",
    null
  ],
  "aciklama": "Yakıt hortumda ve pompada akarken sürtünmeyle yüklenebilir; biriken yük kıvılcım çıkarıp yangına yol açabilir.\nAdım 1: Metal gövde, iletken bir yolla toprak hattına bağlanır.\nAdım 2: Biriken yük bu yoldan toprağa geçer ve gövde nötr kalır.\nAdım 3: Böylece kıvılcım ve yangın riski azalır; bu bir topraklama uygulamasıdır.\nSık yapılan hata: Topraklamayı hız ya da tasarruf önlemi sanmak.\nCevap D."
},
{
  "id": "fen-yc-024",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Yanıcı toz bulunan bir fabrikada çalışanlara, tabanı iletken malzemeden yapılmış antistatik ayakkabılar veriliyor.\n**Bu ayakkabıların amacı aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Vücudu yerden yalıtıp yükün vücutta kalmasını sağlamak",
    "Vücuda toprak yoluyla elektrik yükü kazandırmak",
    "Yürürken sürtünmeyi artırıp yük üretmek",
    "Vücutta biriken yükü zemin yoluyla toprağa iletmek"
  ],
  "dogru": 3,
  "hatalar": [
    "Yalıtmayı topraklama sanma: taban iletkendir; yalıtkan olsaydı yük toprağa gidemezdi.",
    "Yönü ters yorumlama: amaç yük kazandırmak değil, biriken yükü uzaklaştırmaktır.",
    "Amaç yanılgısı: ayakkabı yük üretmek için değil, yükü boşaltmak için kullanılır.",
    null
  ],
  "aciklama": "Yürürken ve çalışırken vücutta yük birikebilir; yanıcı tozun yanında bir kıvılcım patlamaya yol açabilir.\nAdım 1: İletken taban, vücuttaki yükün zemine geçmesine izin verir.\nAdım 2: Zemin toprak hattıyla birleştiği için yük toprağa aktarılır.\nAdım 3: Böylece kıvılcım oluşmaz; bu bir topraklama uygulamasıdır.\nSık yapılan hata: Tabanın yalıtkan olması gerektiğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-025",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "K cisminde 5 pozitif ve 5 negatif yük bulunuyor. Bir öğrenci “K cisminde hiç yük yoktur.” diyor.\n**Öğrencinin bu yargısı için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": ["Yanlıştır; K'de eşit sayıda + ve − yük vardır","Doğrudur; K'de hiç yük bulunmaz","Yanlıştır; K pozitif yüklü bir cisimdir","Doğrudur; nötr cisim yüksüz demektir"],
  "dogru": 0,
  "hatalar": [null,"Nötrü yüksüz sanma: K'de 5 pozitif ve 5 negatif yük vardır; yükler eşit olduğu için cisim nötrdür.","Sayıları yanlış karşılaştırma: pozitif ve negatif yük sayısı eşittir, fazla olan yoktur.","Nötr cisim yüksüz değildir; pozitif ve negatif yükleri eşit sayıdadır."],
  "aciklama": "Nötr cisim yüksüz cisim demek değildir; nötr cisimde pozitif ve negatif yük sayıları eşittir.\nAdım 1: K'de 5 pozitif ve 5 negatif yük vardır.\nAdım 2: Sayılar eşit olduğu için K nötrdür; ama içinde yük vardır.\nSağlama: Yüksüz olsaydı hiç pozitif ve negatif yük taşımazdı; oysa K'de toplam 10 yük var.\nCevap A."
},
{
  "id": "fen-yc-026",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Pozitif yüklü iletken bir küre, iletken bir telle toprağa bağlı olan bir metal çubuğa dokundurulur.\n**Buna göre küre için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Nötr hâle gelir",
    "Daha çok pozitif yüklenir",
    "Negatif yüklü hâle gelir",
    "Nötr olmaz, pozitif yüklü kalır"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters yorumlama: topraklı çubuk yük kazandırmaz, kürenin fazla yükünü uzaklaştırır.",
    "Fazla geçişi sanma: eksik elektronlar tamamlanınca küre nötr olur, negatif olmaz.",
    "Etkisiz sanma: iletken yol toprağa ulaştığı için küre yük alışverişi yapar."
  ],
  "aciklama": "Pozitif yüklü cismin elektron eksiği vardır; topraklı bir iletkene dokununca bu eksik tamamlanır.\nAdım 1: Çubuk iletken bir telle toprağa bağlıdır.\nAdım 2: Küre çubuğa dokununca toprak, küreye eksik olan elektronları verir.\nAdım 3: Eksik tamamlanınca pozitif ve negatif yükler eşitlenir ve küre nötr olur.\nSık yapılan hata: Topraklı çubuğun kürenin yükünü artıracağını sanmak.\nCevap A."
},
{
  "id": "fen-yc-027",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Ev aletlerinin topraklanmasıyla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Gövdenin sürtünmeyle yük kazanmasını tamamen önler",
    "Aletin harcadığı elektrik enerjisini azaltır",
    "Aletin gövdesini yalıtkan hâle getirir",
    "Gövdeye geçen yükün kişiye geçme riskini azaltır"
  ],
  "dogru": 3,
  "hatalar": [
    "Topraklamayı yük engelleyici sanma: yük oluşmaya devam edebilir; topraklama yükü toprağa aktarır.",
    "Güvenliği tasarruf sanma: topraklama enerji tüketimini değiştirmez.",
    "Yalıtmayı topraklama sanma: gövde iletken kalır; yük toprak hattından gider.",
    null
  ],
  "aciklama": "Topraklama, ev aletlerinde can güvenliği için yapılır.\nAdım 1: Gövdeye bir arıza yüzünden yük geçebilir.\nAdım 2: Toprak hattı bu yüke kolay bir yol sağlar; yük gövdede birikmez.\nAdım 3: Gövdeye dokunan kişi bu yüzden çarpılmaz.\nSık yapılan hata: Topraklamayı tasarruf ya da performans önlemi sanmak.\nCevap D."
},
{
  "id": "fen-yc-028",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Şekilde yük durumları verilen X ve Y cisimleri, yalıtkan saplarla tutularak birbirine yaklaştırılıyor.\n**Buna göre X ve Y cisimleri arasındaki etkileşim aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 280 135\" role=\"img\" aria-label=\"X cismi 6 pozitif ve 2 negatif, Y cismi 3 pozitif ve 7 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">X</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">7−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">Y</text></svg>",
  "secenekler": [
    "Birbirini iterler",
    "Birbirini ne çeker ne iter",
    "Birbirini çekerler",
    "Yalnızca dokunduklarında etkileşirler"
  ],
  "dogru": 2,
  "hatalar": [
    "Cinsleri karıştırma: X pozitif, Y negatif yüklüdür; zıt cinsler iter değil, çeker.",
    "Etkileşimi görmeme: iki cisim de yüklüdür, aralarında etkileşim vardır.",
    null,
    "Temas koşulu sanma: yüklü cisimler dokunmadan da birbirini çeker ya da iter."
  ],
  "aciklama": "Zıt cins yüklü cisimler birbirini çeker.\nAdım 1: X’te 6 pozitif, 2 negatif yük var; pozitif fazla olduğundan X pozitif yüklüdür.\nAdım 2: Y’de 3 pozitif, 7 negatif yük var; negatif fazla olduğundan Y negatif yüklüdür.\nAdım 3: Zıt cins yüklü iki cisim birbirini çeker.\nSağlama: İkisi de aynı cins olsaydı birbirini iterlerdi.\nCevap C."
},
{
  "id": "fen-yc-029",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Negatif yüklü bir çubuk, ipe asılı K küresine yaklaştırıldığında K küresi çubuktan uzaklaşıyor.\n**Buna göre K küresi için aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yüklüdür",
    "Nötrdür",
    "Pozitif yüklü ya da nötrdür",
    "Negatif yüklüdür"
  ],
  "dogru": 3,
  "hatalar": [
    "Kuralı ters kurma: pozitif yüklü küre negatif çubuğa doğru çekilirdi.",
    "Nötr yorumu: nötr cisim yüklü cisme doğru çekilir, ondan uzaklaşmaz.",
    "Çekmeyle itmeyi karıştırma: pozitif ve nötr cisimlerin ikisi de çubuğa çekilirdi.",
    null
  ],
  "aciklama": "İtme, yalnızca aynı cins yüklü cisimler arasında görülür.\nAdım 1: Çubuk negatif yüklüdür ve K küresini itmektedir.\nAdım 2: İtme gördüğümüze göre iki cisim aynı cins yüklüdür.\nAdım 3: Bu yüzden K küresi negatif yüklüdür.\nSık yapılan hata: Uzaklaşan cismin nötr olabileceğini düşünmek; nötr cisim yüklü cisme çekilir.\nCevap D."
},
{
  "id": "fen-yc-030",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Yalıtkan saplarla tutulan özdeş iletken M ve N kürelerinin yükleri şekilde gösterilmiştir. M ile N birbirine dokundurulup ayrılıyor.\n**Buna göre ayrıldıktan sonra kürelerin yük durumu ve aralarındaki etkileşim aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 280 135\" role=\"img\" aria-label=\"M küresi 2 pozitif ve 8 negatif, N küresi 6 pozitif ve 6 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">M</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">N</text></svg>",
  "secenekler": [
    "M ve N nötrdür; birbirini etkilemezler",
    "M ve N pozitif yüklüdür; birbirini iterler",
    "M ve N negatif yüklüdür; birbirini iterler",
    "M negatif yüklü, N nötrdür; birbirini çekerler"
  ],
  "dogru": 2,
  "hatalar": [
    "Toplamı yanlış yorumlama: dokunmadan sonra toplam yük sıfır olmaz; negatif yük fazla kalır.",
    "Cinsi ters okuma: toplamda negatif yük pozitiften fazladır, küreler negatif yüklenir.",
    null,
    "Paylaşımı atlama: özdeş iletkenlerde yük eşit paylaşılır, N nötr kalmaz."
  ],
  "aciklama": "Özdeş iletken küreler dokununca toplam yük iki küre arasında eşit paylaşılır.\nAdım 1: Toplam pozitif yük 2 + 6 = 8, toplam negatif yük 8 + 6 = 14’tür.\nAdım 2: Negatif yük 14 − 8 = 6 fazladır; bu fazla yük iki küreye 3’er olarak bölünür.\nAdım 3: İki küre de negatif yüklü olur ve aynı cins yüklü cisimler birbirini iter.\nSağlama: Her kürede 4 pozitif, 7 negatif yük kalır; 7 > 4 olduğundan ikisi de negatiftir.\nCevap C."
},
{
  "id": "fen-yc-031",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Üzerinde 11 proton ve 14 elektron bulunan bir cisim nötr hâle getirilecektir.\n**Buna göre cismin kaç elektron vermesi gerekir?**",
  "gorsel": null,
  "secenekler": [
    "3",
    "11",
    "14",
    "25"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Proton sayısını verilecek sayı sanma: 11 elektron verilirse cismin 11 protonu, 3 elektronu kalır ve cisim pozitif yüklenir.",
    "Tüm elektronları vermeyi sanma: 14 elektron birden verilirse cisimde yalnızca 11 proton kalır ve cisim pozitif yüklenir.",
    "Yükleri toplama: 11 + 14 = 25 bulunur; ama verilecek elektron sayısı toplamla değil, farkla bulunur."
  ],
  "aciklama": "Cismin nötr olması için proton ve elektron sayılarının eşitlenmesi gerekir.\nAdım 1: Cismin 11 protonu, 14 elektronu var; elektron sayısı fazladır.\nAdım 2: Fazla elektron sayısı 14 − 11 = 3’tür.\nAdım 3: Cisim 3 elektron verirse 11 proton ve 11 elektron kalır ve nötr olur.\nSağlama: 14 − 3 = 11 olduğundan sayılar eşitlenir.\nCevap A."
},
{
  "id": "fen-yc-032",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Yaprakları kapalı nötr bir elektroskopun topuzuna L cismi dokundurulunca yapraklar açılıyor.\n**Buna göre L cismi için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif ya da negatif yüklüdür; hangisi olduğu bilinemez",
    "Pozitif yüklüdür; çünkü yapraklar pozitif yükle açılır",
    "Negatif yüklüdür; çünkü yapraklar negatif yükle açılır",
    "Nötrdür; çünkü yapraklar yük olmadan da açılabilir"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yaprağı yük cinsiyle eşleme: yapraklar pozitif yüklü cisimle de, negatif yüklü cisimle de açılır; açılma cinsi göstermez.",
    "Yaprağı yük cinsiyle eşleme: yapraklar negatif yüklü cisimle de, pozitif yüklü cisimle de açılır; açılma cinsi göstermez.",
    "Nötrü yapraklarla açılır sanma: nötr cisim yaprakları açmaz; açılma, cismin yüklü olduğunu gösterir."
  ],
  "aciklama": "Elektroskop, bir cismin yüklü olup olmadığını anlamak için kullanılır; yüklü cisim yaprakları açar.\nAdım 1: Yapraklar kapalıydı ve L dokundurulunca açıldı.\nAdım 2: Nötr bir cisim yaprakları açmaz; açılma, L’nin yüklü olduğunu gösterir.\nAdım 3: Yapraklar hem pozitif hem negatif yüklü cisimle açılır; bu yüzden gözlem yük cinsini belirlemeye yetmez.\nSık yapılan hata: Yapraklar açıldı diye cismin pozitif (ya da negatif) olduğunu söylemek; bu gözlem yalnızca cismin yüklü olduğunu gösterir.\nCevap A."
},
{
  "id": "fen-yc-033",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir öğrenci yüklü cisimlerin etkileşimiyle ilgili şu cümleleri yazıyor.\nI. Birbirini iten iki cisim aynı cins yüklüdür.\nII. Birbirini çeken iki cisimden biri kesinlikle negatif yüklüdür.\nIII. Nötr bir cisim, yüklü bir cismi çeker.\n**Buna göre öğrencinin cümlelerinden hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "III’ü atlama: yüklü cisim nötr cismi çeker, nötr cisim de yüklü cismi çeker; III de doğrudur.",
    "I’i atlama: itme yalnızca aynı cins yükler arasında görülür; I de doğrudur.",
    null,
    "II’yi doğru sanma: çeken iki cisimden biri pozitif, ötekisi nötr de olabilir; negatif olması şart değildir."
  ],
  "aciklama": "İtme, aynı cins yükler arasında görülür; çekme ise zıt cinslerde ya da yüklü ile nötr arasında olur.\nAdım 1: I doğrudur; itme gören cisimler aynı cins yüklüdür.\nAdım 2: II yanlıştır; pozitif yüklü bir cisim nötr bir cismi de çeker, negatif olması gerekmez.\nAdım 3: III doğrudur; yüklü ile nötr cisim arasında karşılıklı bir çekme vardır.\nSık yapılan hata: Çekmeyi her zaman “zıt cins” diye yorumlamak.\nCevap C."
},
{
  "id": "fen-yc-034",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Plastik bir tarak yün kazağa sürtülünce tarak negatif yükleniyor.\n**Buna göre bu olayla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Kazaktan tarağa elektron geçmiştir; kazak pozitif yüklenmiştir",
    "Taraktan kazağa elektron geçmiştir; kazak pozitif yüklenmiştir",
    "Kazaktan tarağa proton geçmiştir; kazak pozitif yüklenmiştir",
    "Kazaktan tarağa elektron geçmiştir; kazak nötr kalmıştır"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters yorumlama: negatif yüklenen tarak elektron almıştır, yani elektron kazaktan tarağa geçmiştir.",
    "Taneciği karıştırma: sürtünmede yer değiştiren tanecik proton değil, elektrondur.",
    "Verici cismi atlama: elektron veren kazağın negatif yükü azalır, kazak pozitif yüklenir."
  ],
  "aciklama": "Sürtünmeyle elektriklenmede bir cisim elektron verir, öteki alır.\nAdım 1: Tarak negatif yüklendi; yani tarak elektron almıştır.\nAdım 2: Elektronlar kazaktan tarağa geçmiştir.\nAdım 3: Elektron veren kazak pozitif yüklenir; verilen ve alınan elektron sayısı eşittir.\nSık yapılan hata: Yükü yalnızca bir cisimde düşünüp öteki cismin yüklendiğini unutmak.\nCevap A."
},
{
  "id": "fen-yc-035",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Şekilde yük durumları verilen K, L, M ve N cisimlerinden ikisi, yalıtkan saplarla tutularak birbirine yaklaştırılıyor.\n**Buna göre hangi iki cisim birbirini ne çeker ne iter?**",
  "gorsel": "<svg viewBox=\"0 0 560 135\" role=\"img\" aria-label=\"K cismi 3 pozitif 3 negatif, L cismi 5 pozitif 2 negatif, M cismi 4 pozitif 4 negatif, N cismi 2 pozitif 6 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text><circle cx=\"350\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4+</text><text x=\"350\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4−</text><text x=\"350\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">M</text><circle cx=\"490\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"490\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2+</text><text x=\"490\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"490\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">N</text></svg>",
  "secenekler": [
    "K ve M",
    "K ve N",
    "L ve M",
    "L ve N"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yüklü ile nötrü karıştırma: K nötrdür ama N yüklüdür; yüklü cisim nötr cismi çeker.",
    "Yüklü ile nötrü karıştırma: M nötrdür ama L yüklüdür; yüklü cisim nötr cismi çeker.",
    "İki yüklüyü seçme: L pozitif, N negatif yüklüdür; zıt cinsler birbirini çeker."
  ],
  "aciklama": "Birbirini ne çeken ne iten cisimler iki nötr cisimdir.\nAdım 1: K’de 3 pozitif, 3 negatif yük var; eşit olduğundan K nötrdür. M’de 4 pozitif, 4 negatif yük var; M de nötrdür.\nAdım 2: L’de pozitif, N’de negatif yük fazladır; ikisi de yüklüdür.\nAdım 3: Yalnızca iki nötr cisim (K ve M) arasında etkileşim olmaz.\nSık yapılan hata: Yüklü cismin nötr cismi çektiğini unutmak.\nCevap A."
},
{
  "id": "fen-yc-036",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir cami minaresinin tepesine paratoner takılmış, ancak paratonerden inen kablonun alt ucu toprağa bağlanmadan duvarın dibinde havada bırakılmıştır.\n**Minareye yıldırım düşerse aşağıdakilerden hangisi gerçekleşir?**",
  "gorsel": null,
  "secenekler": [
    "Yük kablodan toprağa güvenle geçer",
    "Paratoner yıldırımın düşmesini engeller",
    "Yük kablo içinde yok olur",
    "Yük hiç toprağa geçemez ve yapıda birikir"
  ],
  "dogru": 3,
  "hatalar": [
    "Yolun tamamlandığını sanma: ucu havada kalan kablo, yük için toprağa ulaşan bir yol oluşturmaz.",
    "Paratoneri önleyici sanma: paratoner yıldırımı engellemez; yalnızca yükü toprağa iletir.",
    "Yükü yok olur sanma: yük yok olmaz, toprağa gidemezse yapıda kalır.",
    null
  ],
  "aciklama": "Paratoner, kablosu toprağa bağlıysa yıldırımın yükünü güvenle toprağa iletir.\nAdım 1: Yıldırımın yükü paratonerden kabloya geçer.\nAdım 2: Kablonun ucu toprağa değmediği için yük toprağa aktarılamaz.\nAdım 3: Yük yapıda birikir ve binaya zarar verebilir.\nSık yapılan hata: Yalnızca paratonerin takılmasının yeterli olduğunu sanmak; kablo toprağa bağlanmalıdır.\nCevap D."
},
{
  "id": "fen-yc-037",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir kişi, bulaşık makinesinin üç uçlu fişini iki delikli bir prize takabilmek için fişin ortadaki toprak ucunu kesiyor. Makinenin içindeki bir arıza yüzünden metal gövdeye yük geçiyor.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Gövdedeki yük yine toprağa gider, kişi çarpılmaz",
    "Gövde yalıtkan olur, yük gövdeden yok olur",
    "Makine daha az enerji harcar, yük kendiliğinden azalır",
    "Gövdedeki yük toprağa gidemez, dokunan kişiye geçebilir"
  ],
  "dogru": 3,
  "hatalar": [
    "Hattın kesildiğini görmeme: toprak ucu olmadan gövde toprağa bağlı değildir.",
    "Yalıtmayı topraklama sanma: gövde iletken kalır; ayrıca yük yok olmaz.",
    "Güvenliği tasarruf sanma: topraklama enerji tüketimini değiştirmez; yük kendiliğinden azalmaz.",
    null
  ],
  "aciklama": "Toprak ucu, gövdeye geçen yüke toprağa giden bir yol sağlar.\nAdım 1: Fişin toprak ucu kesilince gövde toprak hattından ayrılır.\nAdım 2: Gövdeye geçen yük gidecek yer bulamaz ve gövdede birikir.\nAdım 3: Gövdeye dokunan kişi iletken bir yol olur ve yük ona geçebilir.\nSık yapılan hata: Toprak ucunun gereksiz bir parça olduğunu sanmak.\nCevap D."
},
{
  "id": "fen-yc-038",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Şekilde yük durumu verilen Y cismi, iletken bir telle toprağa bağlanıyor.\n**Buna göre topraklama tamamlandığında Y cisminde kaç pozitif ve kaç negatif yük bulunur?**",
  "gorsel": "<svg viewBox=\"0 0 400 150\" role=\"img\" aria-label=\"Y cismi 10 pozitif ve 6 negatif yük taşıyor ve toprağa bağlı\"><circle cx=\"80\" cy=\"58\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">10+</text><text x=\"80\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"80\" y=\"116\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">Y</text><path d=\"M116 58 H300 V92\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"276\" y1=\"92\" x2=\"324\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"284\" y1=\"102\" x2=\"316\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"292\" y1=\"112\" x2=\"308\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"300\" y=\"138\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Toprak</text></svg>",
  "secenekler": [
    "6 pozitif, 6 negatif",
    "10 pozitif, 6 negatif",
    "10 pozitif, 10 negatif",
    "10 pozitif, 16 negatif"
  ],
  "dogru": 2,
  "hatalar": [
    "Protonun gittiğini sanma: topraklamada protonlar hareket etmez; eksik elektronlar topraktan gelir.",
    "Etkisiz sanma: iletken bağlantı olduğu için yük geçişi olur ve sayılar değişir.",
    null,
    "Fazla elektron alma: Y yalnızca 4 elektron alır; daha fazla elektron almaz, çünkü cisim nötr olunca geçiş durur."
  ],
  "aciklama": "Topraklamada pozitif yüklü cisim, eksik elektronlarını topraktan tamamlar.\nAdım 1: Y’de 10 pozitif ve 6 negatif yük var; negatif yük 4 eksiktir.\nAdım 2: Topraktan Y’ye 4 elektron geçer.\nAdım 3: Y’de 10 pozitif ve 6 + 4 = 10 negatif yük olur; cisim nötrdür.\nSağlama: Protonlar hareket etmediğinden pozitif yük 10 olarak kalır.\nCevap C."
},
{
  "id": "fen-yc-039",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Negatif yüklü bir elektroskopun yaprakları açıktır. Topuza parmakla dokunulunca yapraklar kapanıyor.\n**Buna göre bu olayla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Elektronlar topraktan elektroskoba geçmiş, elektroskop nötr olmuştur",
    "Protonlar elektroskoptan toprağa geçmiş, elektroskop nötr olmuştur",
    "Elektronlar elektroskoptan toprağa geçmiş, elektroskop pozitif yüklenmiştir",
    "Elektronlar elektroskoptan toprağa geçmiş, elektroskop nötr olmuştur"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters yorumlama: negatif yüklü elektroskopun fazla elektronu vardır, elektron alması gerekmez.",
    "Taneciği karıştırma: yük geçişini protonlar değil, elektronlar yapar.",
    "Fazla geçişi sanma: yalnızca fazla elektronlar gider; elektroskop nötr olunca geçiş durur.",
    null
  ],
  "aciklama": "Elektroskoba dokunan parmak, elektroskopu vücut yoluyla toprağa bağlar; yani bir topraklama olur.\nAdım 1: Elektroskop negatif yüklüdür; elektron fazlası vardır.\nAdım 2: Fazla elektronlar vücut üzerinden toprağa geçer.\nAdım 3: Fazlalık gidince elektroskop nötr olur ve yapraklar kapanır.\nSık yapılan hata: Yaprakların kapanmasını yük bitti diye düşünmek; elektroskop nötr olmuştur, yük sayıları eşitlenmiştir.\nCevap D."
},
{
  "id": "fen-yc-040",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir akaryakıt tankeri yol alırken yakıtın çalkalanması ve sürtünme yüzünden gövdesinde yük birikebilir. Bu yüzden tankerin arkasına, yola değen metal bir zincir takılıyor. Öğrenciler zincirle ilgili şu yargıları ileri sürüyor.\nI. Zincir, yakıtın çalkalanmasıyla yük oluşmasını durdurur.\nII. Zincir, tankerde biriken yükü yola ileterek toprağa aktarır.\nIII. Zincir plastik bir halattan yapılsaydı bu işi göremezdi.\n**Buna göre hangi yargılar doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "III’ü atlama: plastik halat yalıtkandır, yükü geçirmez; III de doğrudur.",
    "II’yi atlama: zincirin görevi, biriken yükü yola ve toprağa iletmektir; II de doğrudur.",
    "I’i doğru sanma: zincir yük oluşumunu durdurmaz; yalnızca oluşan yükü toprağa iletir.",
    null
  ],
  "aciklama": "Zincir, tankerle yol arasında iletken bir bağlantı kurar; biriken yük bu yoldan toprağa geçer.\nAdım 1: I yanlıştır; zincir yük oluşumunu durdurmaz, oluşan yükü uzaklaştırır.\nAdım 2: II doğrudur; yük metal zincir üzerinden yola, oradan toprağa iletilir.\nAdım 3: III doğrudur; plastik halat yalıtkandır, yükün geçişine izin vermez ve yük tankerde birikir.\nSık yapılan hata: Topraklamayı yük oluşumunu engelleyen bir önlem sanmak.\nCevap D."
},
{
  "id": "fen-yc-041",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir öğrenci, yüklü bir metal küreyi dört deneyde farklı bağlantılarla toprağa bağlamaya çalışıyor. Bağlantı malzemeleri ve durumları tabloda verilmiştir.\n**Buna göre hangi deneylerde küre fazla yükünü toprağa aktarabilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Deney</th><th>Bağlantı malzemesi</th><th>Bağlantının durumu</th></tr><tr><td>1</td><td>Bakır tel</td><td>Ucu toprağa gömülü metal çubuğa bağlı</td></tr><tr><td>2</td><td>Naylon ip</td><td>Ucu toprağa gömülü metal çubuğa bağlı</td></tr><tr><td>3</td><td>Bakır tel</td><td>Ucu havada serbest</td></tr><tr><td>4</td><td>Alüminyum çubuk</td><td>Ucu toprağa değiyor</td></tr></table>",
  "secenekler": [
    "1 ve 2",
    "1 ve 4",
    "2 ve 3",
    "3 ve 4"
  ],
  "dogru": 1,
  "hatalar": [
    "Yalıtkanı iletken sanma: naylon ip yalıtkandır, 2. deneyde yük toprağa geçemez.",
    null,
    "Yalıtkanı ve yarım bağlantıyı seçme: naylon ip yükü geçirmez, ucu havada kalan tel de toprağa ulaşmaz.",
    "Yarım bağlantıyı tamamlanmış sanma: 3. deneyde tel iletkendir ama ucu havada kaldığı için toprağa yol kurmaz."
  ],
  "aciklama": "Topraklama için bağlantı iletken olmalı ve toprağa ulaşmalıdır.\nAdım 1: 1. deneyde bakır tel iletkendir ve toprağa bağlıdır; yük geçer.\nAdım 2: 2. deneyde naylon ip yalıtkandır; 3. deneyde tel iletken olsa da ucu havada kalır. İkisinde de yük toprağa geçemez.\nAdım 3: 4. deneyde alüminyum çubuk iletkendir ve toprağa değer; yük geçer.\nSık yapılan hata: Yalnızca malzemeye bakıp bağlantının toprağa ulaşıp ulaşmadığını kontrol etmemek.\nCevap B."
},
{
  "id": "fen-yc-042",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Şekilde üç binanın çatısı ve çevresi gösterilmiştir. K ve L binalarına paratoner takılmıştır, M binasında paratoner yoktur. Üç binaya da yıldırım düşüyor.\n**Buna göre yıldırımın yükü hangi binada toprağa güvenle iletilir?**",
  "gorsel": "<svg viewBox=\"0 0 480 205\" role=\"img\" aria-label=\"K binasında paratoner kablosu toprağa ulaşıyor, L binasında kablonun ucu havada kalıyor, M binasında paratoner yok\"><line x1=\"10\" y1=\"170\" x2=\"470\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"30\" y=\"80\" width=\"80\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"70\" y1=\"48\" x2=\"70\" y2=\"80\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><path d=\"M70 52 H135 V170\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><rect x=\"190\" y=\"80\" width=\"80\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"230\" y1=\"48\" x2=\"230\" y2=\"80\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><path d=\"M230 52 H295 V130\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><rect x=\"350\" y=\"80\" width=\"80\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"194\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><text x=\"230\" y=\"194\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text><text x=\"390\" y=\"194\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">M</text><text x=\"470\" y=\"194\" text-anchor=\"end\" font-size=\"16\" fill=\"currentColor\">Toprak</text></svg>",
  "secenekler": [
    "K ve L binalarında",
    "Yalnızca L binasında",
    "Üç binada da",
    "Yalnızca K binasında"
  ],
  "dogru": 3,
  "hatalar": [
    "Bağlantıyı eksik görme: L’nin kablosu toprağa ulaşmadığı için yük L’de toprağa geçemez.",
    "Kabloyu yanlış okuma: L’nin kablosunun ucu havada kalır; toprağa ulaşan kablo K’dadır.",
    "Paratonersiz binayı atlama: M’de yükü toprağa taşıyacak bir yol yoktur, L’de de bağlantı eksiktir.",
    null
  ],
  "aciklama": "Paratoner, ancak kablosu toprağa ulaşıyorsa yıldırım yükünü güvenle toprağa iletir.\nAdım 1: K’de paratonerden inen kablo toprağa ulaşıyor; yük bu yoldan toprağa geçer.\nAdım 2: L’de paratoner var ama kablonun ucu havada kalıyor; yük toprağa gidemez.\nAdım 3: M’de paratoner olmadığı için yükü toprağa taşıyacak yol yoktur.\nSık yapılan hata: Paratoner var diye korumanın tamam olduğunu sanmak.\nCevap D."
},
{
  "id": "fen-yc-043",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir öğrenci elektriklenmeyle ilgili şu cümleleri yazıyor.\nI. Elektron veren cisim negatif yüklenir.\nII. Elektron alan cisim negatif yüklenir.\nIII. Elektriklenmede protonlar da cisimden cisme geçer.\n**Buna göre öğrencinin cümlelerinden hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "I’i doğru sanma: elektron veren cismin negatif yükü azalır, cisim pozitif yüklenir; I yanlıştır.",
    null,
    "I ve III’ü doğru sanma: elektron veren cisim pozitif yüklenir ve protonlar yer değiştirmez; ikisi de yanlıştır.",
    "III’ü doğru sanma: elektriklenmede yalnızca elektronlar yer değiştirir; III yanlıştır."
  ],
  "aciklama": "Yüklenmeyi elektron alışverişi belirler: elektron alan negatif, elektron veren pozitif yüklenir.\nAdım 1: I yanlıştır; elektron veren cismin negatif yükü azalır, cisim pozitif yüklenir.\nAdım 2: II doğrudur; elektron alan cismin negatif yükü artar.\nAdım 3: III yanlıştır; protonlar atomun çekirdeğinde durur ve cisimler arasında geçmez.\nSık yapılan hata: “Veren negatif olur” diye düşünmek.\nCevap B."
},
{
  "id": "fen-yc-044",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Şekilde yük durumu verilen P cismi, iletken bir telle toprağa bağlanıyor.\n**Buna göre topraklama sırasında P cisminden toprağa kaç elektron geçer?**",
  "gorsel": "<svg viewBox=\"0 0 400 150\" role=\"img\" aria-label=\"P cismi 3 pozitif ve 10 negatif yük taşıyor ve toprağa bağlı\"><circle cx=\"80\" cy=\"58\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"80\" y=\"54\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3+</text><text x=\"80\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">10−</text><text x=\"80\" y=\"116\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">P</text><path d=\"M116 58 H300 V92\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"276\" y1=\"92\" x2=\"324\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"284\" y1=\"102\" x2=\"316\" y2=\"102\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"292\" y1=\"112\" x2=\"308\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"300\" y=\"138\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Toprak</text></svg>",
  "secenekler": [
    "3",
    "7",
    "10",
    "13"
  ],
  "dogru": 1,
  "hatalar": [
    "Pozitif yük sayısını geçen elektron sanma: 3 elektron geçse P’de 3 pozitif, 7 negatif yük kalır; cisim hâlâ negatif yüklüdür.",
    null,
    "Bütün elektronları verme: 10 elektron giderse P’de 3 pozitif yük kalır ve cisim pozitif yüklenir.",
    "Yükleri toplama: 3 + 10 = 13 bulunur; ama geçen elektron sayısı toplamla değil, farkla bulunur."
  ],
  "aciklama": "Topraklamada cismin yalnızca fazla elektronları toprağa geçer.\nAdım 1: P’de 3 pozitif, 10 negatif yük var; negatif yük fazladır.\nAdım 2: Fazla elektron sayısı 10 − 3 = 7’dir.\nAdım 3: 7 elektron toprağa geçince 3 pozitif, 3 negatif yük kalır ve P nötr olur.\nSağlama: 10 − 7 = 3 olduğundan sayılar eşitlenir.\nCevap B."
},
{
  "id": "fen-yc-045",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**Topraklamayla ilgili aşağıdaki bilgilerden hangisi __yanlıştır__?**",
  "gorsel": null,
  "secenekler": [
    "Biriken yükü iletken bir yolla toprağa aktarır",
    "Yüklü bir cismi nötr hâle getirebilir",
    "Toprak, cisme elektron verebilir ya da cisimden elektron alabilir",
    "Sürtünme sırasında yük oluşmasını tamamen engeller"
  ],
  "dogru": 3,
  "hatalar": [
    "Doğru bilgiyi seçme: topraklama, biriken yükü iletken yolla toprağa iletir.",
    "Doğru bilgiyi seçme: fazla yük toprağa geçince cisim nötr olur.",
    "Doğru bilgiyi seçme: pozitif yüklü cisim topraktan elektron alır, negatif yüklü cisim toprağa elektron verir.",
    null
  ],
  "aciklama": "Topraklama, oluşmuş yükü uzaklaştırır; yük oluşmasını engellemez.\nAdım 1: Sürtünme sürdükçe cisimlerde yük oluşmaya devam eder.\nAdım 2: Topraklama bu yükü iletken yolla toprağa aktarır ve cismi nötr tutar.\nAdım 3: Toprak, cisimle elektron alışverişi yapabilen çok büyük bir yük deposu gibi davranır; bu yüzden diğer üç bilgi doğrudur.\nSık yapılan hata: Topraklamanın yükü baştan engellediğini sanmak.\nCevap D."
},
{
  "id": "fen-yc-046",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir iplik fabrikasında iplikler makaralardan hızla geçerken sürtünmeyle yükleniyor ve makinelere yaklaştıklarında küçük kıvılcımlar çıkıyor. Fabrika yönetimi, makinelerin metal gövdelerini toprak hattına bağlıyor.\n**Bu uygulamanın sağladığı yarar aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "İpliklerin sürtünmeyle hiç yüklenmemesi sağlanır",
    "Gövdedeki yük uzaklaştığı için kıvılcım riski azalır",
    "Makinelerin dönüş hızı artar",
    "Makinelerin gövdesi toprağa bağlanınca yalıtkan hâle gelir"
  ],
  "dogru": 1,
  "hatalar": [
    "Topraklamayı yük engelleyici sanma: sürtünme sürdükçe yük oluşur; topraklama onu uzaklaştırır.",
    null,
    "Amaç yanılgısı: topraklamanın makinenin hızıyla ilgisi yoktur.",
    "Yalıtmayı topraklama sanma: gövde iletken kalır; yük toprak hattından gider."
  ],
  "aciklama": "Sürtünmeyle biriken yük kıvılcım çıkarıp yangına yol açabilir; topraklama bu yükü uzaklaştırır.\nAdım 1: Makinenin metal gövdesi iletken bir yolla toprağa bağlanır.\nAdım 2: Gövdede biriken yük bu yoldan toprağa geçer.\nAdım 3: Yük birikmediği için kıvılcım ve yangın riski azalır.\nSık yapılan hata: Topraklamanın sürtünmeyi ya da yük oluşumunu durdurduğunu sanmak.\nCevap B."
},
{
  "id": "fen-yc-047",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Üzerinde 15 proton bulunan bir cisim negatif yüklüdür ve elektron sayısı proton sayısından 4 fazladır.\n**Buna göre bu cisimde kaç elektron vardır?**",
  "gorsel": null,
  "secenekler": [
    "4",
    "11",
    "15",
    "19"
  ],
  "dogru": 3,
  "hatalar": [
    "Farkı elektron sayısı sanma: 4 yalnızca fazlalıktır; toplam elektron sayısı protonla birlikte düşünülür.",
    "Çıkarma yapma: elektron fazla olduğundan sayı 15’ten küçük olamaz.",
    "Nötr durumu bulma: 15 elektron olsaydı cisim nötr olurdu.",
    null
  ],
  "aciklama": "Elektron sayısı proton sayısından fazlaysa cisim negatif yüklüdür.\nAdım 1: Proton sayısı 15’tir.\nAdım 2: Elektron sayısı protondan 4 fazla olduğundan 15 + 4 = 19 olur.\nAdım 3: 19 elektron ve 15 proton olduğunda negatif yük 4 fazladır.\nSağlama: 19 − 15 = 4 ve cisim negatif yüklüdür.\nCevap D."
},
{
  "id": "fen-yc-048",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Şekilde yük durumları verilen K, L ve M cisimleri, yalıtkan saplarla tutularak ikişer ikişer birbirine yaklaştırılıyor. Bir öğrenci gözlemler için şu yargıları yazıyor.\nI. K ile L birbirini iter.\nII. K ile M birbirini iter.\nIII. L ile M birbirini çeker.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 420 135\" role=\"img\" aria-label=\"K cismi 6 pozitif 2 negatif, L cismi 3 pozitif 7 negatif, M cismi 4 pozitif 4 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">7−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text><circle cx=\"350\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4+</text><text x=\"350\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4−</text><text x=\"350\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">M</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Zıt cinsi iter sanma: K pozitif, L negatif yüklüdür; zıt cinsler iter değil, çeker.",
    null,
    "Zıt cinsi ve nötrü iter sanma: K ile L zıt cinstir, K ile M yüklü–nötr çiftidir; ikisi de çeker.",
    "II’yi doğru sanma: K yüklü, M nötrdür; yüklü cisim nötr cismi iter değil, çeker."
  ],
  "aciklama": "Önce her cismin yük durumunu bulup sonra çiftleri değerlendir.\nAdım 1: K’de pozitif fazla (6 > 2), yani K pozitiftir; L’de negatif fazla (7 > 3), yani L negatiftir; M’de 4 = 4, yani M nötrdür.\nAdım 2: K ile L zıt cinstir, birbirini çeker; I yanlıştır. K pozitif, M nötr olduğundan K, M’yi çeker; II yanlıştır.\nAdım 3: L negatif, M nötrdür; yüklü cisim nötr cismi çeker; III doğrudur.\nSık yapılan hata: Nötr cismi yüksüz sayıp “etkileşmez” demek ya da “iter” demek.\nCevap B."
},
{
  "id": "fen-yc-049",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir elektronik atölyesinde teknisyen, hassas devre kartlarıyla çalışırken bileğine, ucu toprak hattına bağlı iletken bir bileklik takıyor. Bir öğrenci bu uygulamayla ilgili şu yargıları yazıyor.\nI. Teknisyenin vücudunda biriken yük, bileklik üzerinden toprağa geçebilir.\nII. Bileklik, teknisyenin vücudunun sürtünmeyle yüklenmesini durdurur.\nIII. Bileklik yalıtkan bir malzemeden yapılsaydı aynı işi görürdü.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
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
    "I’i atlama ve II’yi doğru sanma: topraklama yük oluşumunu durdurmaz, oluşan yükü toprağa iletir; I ise doğrudur.",
    "II’yi doğru sanma: sürtünme sürdükçe yük oluşur; bileklik onu toprağa aktarır.",
    "II ve III’ü doğru sanma: bileklik yük oluşumunu durdurmaz, yalıtkan bileklik de yükü toprağa geçirmez; ayrıca I doğrudur."
  ],
  "aciklama": "İletken bileklik, vücut ile toprak arasında iletken bir yol kurar; vücutta biriken yük bu yoldan toprağa gider.\nAdım 1: I doğrudur; yük, iletken bileklik ve toprak hattı üzerinden toprağa geçer.\nAdım 2: II yanlıştır; sürtünme sürdükçe yük oluşmaya devam eder, bileklik yalnızca oluşan yükü uzaklaştırır.\nAdım 3: III yanlıştır; yalıtkan bileklik yükün geçişini engeller ve yük teknisyende birikir.\nSık yapılan hata: Topraklamayı yük oluşumunu engelleyen bir önlem sanmak.\nCevap A."
},
{
  "id": "fen-yc-050",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Yanıcı toz bulunan bir fabrikada zemin toprak hattına bağlıdır. Dört işçinin ayakkabı tabanı ve bastığı zeminin malzemesi tabloda verilmiştir.\n**Buna göre vücutlarında biriken yükü toprağa aktarabilen işçiler hangileridir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>İşçi</th><th>Ayakkabı tabanı</th><th>Bastığı zemin</th></tr><tr><td>K</td><td>İletken</td><td>İletken</td></tr><tr><td>L</td><td>Yalıtkan</td><td>İletken</td></tr><tr><td>M</td><td>İletken</td><td>Yalıtkan</td></tr><tr><td>N</td><td>Yalıtkan</td><td>Yalıtkan</td></tr></table>",
  "secenekler": [
    "Yalnız K",
    "K ve L",
    "K ve M",
    "L ve M"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yalıtkan tabanı iletken sanma: L’nin tabanı yalıtkandır, yük zemine geçemez.",
    "Yalıtkan zemini iletken sanma: M’nin bastığı zemin yalıtkandır, yük toprak hattına ulaşamaz.",
    "Yolları tam sanma: L’de taban, M’de zemin yalıtkandır; ikisinde de yolun bir halkası kopuktur."
  ],
  "aciklama": "Yük, ancak baştan sona iletken bir yoldan toprağa geçebilir.\nAdım 1: Yol; vücut, ayakkabı tabanı ve zemin halkalarından oluşur.\nAdım 2: Bu üç halkanın hepsi iletken olmalıdır; yalıtkan bir halka yolu keser.\nAdım 3: Yalnızca K’nin tabanı da zemini de iletkendir. L ve M’de bir halka, N’de iki halka yalıtkandır.\nSık yapılan hata: Yoldaki iki halkadan yalnızca birine bakmak.\nCevap A."
},
{
  "id": "fen-yc-051",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "İpe asılı K, L ve M küreleri ikişer ikişer birbirine yaklaştırılıyor. K ile L birbirini çekiyor, L ile M birbirini itiyor. M küresinin negatif yüklü olduğu biliniyor.\n**Buna göre K ve L küreleri için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "L pozitif yüklüdür; K negatif yüklüdür",
    "L negatif yüklüdür; K pozitif yüklü ya da nötrdür",
    "L negatif yüklüdür; K negatif yüklü ya da nötrdür",
    "L nötrdür; K pozitif yüklüdür"
  ],
  "dogru": 1,
  "hatalar": [
    "Kuralı ters kurma: L, M’yi itiyorsa M ile aynı cins, yani negatiftir; pozitif olsaydı M’yi çekerdi.",
    null,
    "Çekmeyi itme sanma: K negatif olsaydı negatif L’yi iterdi, çekmezdi.",
    "Nötrü iter sanma: nötr L, negatif M’yi iterdi değil, çekerdi."
  ],
  "aciklama": "İtme yalnızca aynı cins yükler arasında, çekme ise zıt cinsler ya da yüklü–nötr arasında görülür.\nAdım 1: L ile M birbirini itiyor; M negatif olduğuna göre L de negatiftir.\nAdım 2: K ile L birbirini çekiyor; L negatif olduğu için K pozitif ya da nötr olabilir.\nAdım 3: K negatif olamaz; negatif K, negatif L’yi iterdi.\nSık yapılan hata: Çekmeden “zıt cins” sonucunu çıkarıp nötr olasılığını unutmak.\nCevap B."
},
{
  "id": "fen-yc-052",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Şekilde yük durumları verilen iletken K, L ve M cisimleri ayrı ayrı iletken birer telle toprağa bağlanıyor.\n**Buna göre hangi cisimlerde toprakla elektron alışverişi olur?**",
  "gorsel": "<svg viewBox=\"0 0 420 135\" role=\"img\" aria-label=\"K cismi 5 pozitif 5 negatif, L cismi 8 pozitif 3 negatif, M cismi 2 pozitif 6 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text><circle cx=\"350\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2+</text><text x=\"350\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"350\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">M</text></svg>",
  "secenekler": [
    "Yalnız K",
    "K ve L",
    "L ve M",
    "K, L ve M"
  ],
  "dogru": 2,
  "hatalar": [
    "Nötrü yüklü sanma: yalnız nötr olan K’yi seçmek yanlıştır; K’de yük geçişi olmaz, L ve M’de olur.",
    "Nötrü yüklü sanma: K’de pozitif ve negatif yükler eşittir, elektron alışverişi olmaz.",
    null,
    "Nötrü de katma: K nötr olduğundan topraklanınca da yük geçişi olmaz."
  ],
  "aciklama": "Topraklamada yalnızca fazla ya da eksik elektronu olan cisimler toprakla elektron alışverişi yapar.\nAdım 1: K’de 5 = 5 olduğundan K nötrdür; elektron alışverişi olmaz.\nAdım 2: L’de pozitif yük 5 fazladır; L topraktan 5 elektron alır.\nAdım 3: M’de negatif yük 4 fazladır; M toprağa 4 elektron verir.\nSağlama: Topraklama sonunda L ve M de nötr olur.\nCevap C."
},
{
  "id": "fen-yc-053",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Başlangıçta nötr olan K ve L cisimlerinin yük durumları, K cisminin sürtünmeden sonraki durumuyla birlikte şekilde gösterilmiştir. K ile L birbirine sürtülmüş ve yalnızca bu iki cisim arasında yük geçişi olmuştur.\n**Buna göre sürtünme sonunda L cisminin yük durumu aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 420 135\" role=\"img\" aria-label=\"K önce 6 pozitif 6 negatif, L önce 4 pozitif 4 negatif, K sonra 6 pozitif 3 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K önce</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L önce</text><circle cx=\"350\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"350\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3−</text><text x=\"350\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K sonra</text></svg>",
  "secenekler": [
    "4 pozitif, 1 negatif",
    "4 pozitif, 4 negatif",
    "4 pozitif, 7 negatif",
    "7 pozitif, 4 negatif"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönü ters yorumlama: L elektron vermedi; K’nin verdiği elektronları L aldı, negatif yükü azalmaz, artar.",
    "Yük geçişini atlama: K elektron verdiği için L nötr kalamaz, elektronları alır.",
    null,
    "Protonun geçtiğini sanma: protonlar yer değiştirmez, L’nin pozitif yükü 4 olarak kalır."
  ],
  "aciklama": "Sürtünmede bir cismin verdiği elektron sayısı, ötekinin aldığı elektron sayısına eşittir.\nAdım 1: K’nin negatif yükü 6’dan 3’e düşmüş; K 3 elektron vermiştir.\nAdım 2: Bu elektronları L almıştır; L’nin negatif yükü 4 + 3 = 7 olur.\nAdım 3: Protonlar yer değiştirmediğinden L’nin pozitif yükü 4 olarak kalır.\nSağlama: L’de negatif yük (7) pozitiften (4) fazladır; L negatif yüklenmiştir. K ise pozitif yüklenmiştir.\nCevap C."
},
{
  "id": "fen-yc-054",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Aynı yünlü kazağa sürtülen iki özdeş balon, ipe asılıp yan yana tutulduğunda birbirinden uzaklaşıyor. Balonlardan biri nötr bir duvara yaklaştırılınca duvara yapışıyor. Bir öğrenci bu gözlemler için şu yargıları yazıyor.\nI. Balonlar aynı cins yüklüdür.\nII. Duvar nötr de olabilir.\nIII. Balonlar zıt cins yüklüdür; bu yüzden birbirinden uzaklaşır.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "II’yi atlama: balon duvara yapışıyorsa duvar nötr de olabilir; II de doğrudur.",
    null,
    "III’ü doğru sanma: uzaklaşma yani itme, aynı cins yükler arasında olur; III yanlıştır.",
    "I’i atlama ve III’ü doğru sanma: balonlar birbirini ittiğine göre aynı cinstir; III yanlıştır."
  ],
  "aciklama": "İtme aynı cins yükler arasında görülür; yüklü cisim nötr cismi de çeker.\nAdım 1: Balonlar birbirini ittiğine göre aynı cins yüklüdür; I doğrudur.\nAdım 2: Yüklü balon, nötr duvarı çekebilir; duvar zıt cins yüklü olmak zorunda değildir, nötr de olabilir; II doğrudur.\nAdım 3: III yanlıştır; zıt cins yüklü cisimler uzaklaşmaz, birbirini çeker.\nSık yapılan hata: Yapışmayı gören kişinin duvarın mutlaka zıt yüklü olduğunu düşünmesi.\nCevap B."
},
{
  "id": "fen-yc-055",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Yalıtkan saplarla tutulan özdeş iletken K ve L kürelerinin yük durumları şekilde verilmiştir. K ile L birbirine dokundurulup ayrılıyor ve küreler birbirine yaklaştırılıyor.\n**Buna göre dokunma sırasında olanlar ve kürelerin son etkileşimi aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 280 135\" role=\"img\" aria-label=\"K küresi 8 pozitif ve 2 negatif, L küresi 5 pozitif ve 5 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text></svg>",
  "secenekler": [
    "K’den L’ye elektron geçer; küreler birbirini iter",
    "K’den L’ye proton geçer; küreler birbirini iter",
    "L’den K’ye elektron geçer; küreler birbirini iter",
    "L’den K’ye elektron geçer; küreler birbirini çeker"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönü ters yorumlama: K’nin pozitif yükü fazladır, elektronu eksiktir; elektron alan taraf K’dir.",
    "Taneciği karıştırma: dokunmada yük geçişini protonlar değil, elektronlar yapar.",
    null,
    "Etkileşimi ters yorumlama: dokunmadan sonra iki küre de pozitif yüklü olur; aynı cins yüklü cisimler çekmez, iter."
  ],
  "aciklama": "Özdeş iletken küreler dokununca yük paylaşılır; yük geçişini elektronlar yapar.\nAdım 1: K’de pozitif yük fazladır (8 > 2); K pozitif yüklüdür ve elektronu eksiktir. L’de 5 = 5 olduğundan L nötrdür.\nAdım 2: Elektronu eksik olan K, dokunmada L’den elektron alır; elektron veren L pozitif yüklenir.\nAdım 3: Yük paylaşıldığı için iki küre de pozitif yüklü olur; aynı cins yüklü küreler birbirini iter.\nSağlama: K’nin elektron alması pozitif yükünü azaltır; L’nin elektron vermesi onu nötrlükten çıkarıp pozitif yapar.\nSık yapılan hata: Elektron geçişinin yönünü ters kurmak; elektronu eksik olan cisim elektron alır.\nCevap C."
},
{
  "id": "fen-yc-056",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Şekilde yük durumları verilen P, R ve S cisimleri ayrı ayrı iletken tellerle toprağa bağlanıyor.\n**Buna göre bu cisimlerden hangileri topraktan elektron alır?**",
  "gorsel": "<svg viewBox=\"0 0 420 135\" role=\"img\" aria-label=\"P cismi 4 pozitif 4 negatif, R cismi 6 pozitif 1 negatif, S cismi 1 pozitif 5 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">P</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">1−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">R</text><circle cx=\"350\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">1+</text><text x=\"350\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5−</text><text x=\"350\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">S</text></svg>",
  "secenekler": ["Yalnız R","Yalnız S","P ve R","R ve S"],
  "dogru": 0,
  "hatalar": [null,"Yönü ters alma: negatif yüklü S topraklanınca fazla elektronlarını toprağa verir, topraktan almaz.","P nötrdür; yükleri eşit olduğu için toprakla elektron alışverişi yapmaz.","S negatif yüklüdür; topraktan elektron almaz, toprağa elektron verir."],
  "aciklama": "Topraklanan cisim nötr olana kadar toprakla elektron alışverişi yapar: pozitif cisim topraktan elektron alır, negatif cisim toprağa elektron verir, nötr cisimde alışveriş olmaz.\nAdım 1: P'de 4 pozitif, 4 negatif yük var; P nötrdür, alışveriş olmaz.\nAdım 2: R'de 6 pozitif, 1 negatif yük var; R pozitiftir, topraktan 5 elektron alır.\nAdım 3: S'de 1 pozitif, 5 negatif yük var; S negatiftir, toprağa 4 elektron verir.\nSağlama: Topraktan elektron alan tek cisim R'dir.\nCevap A."
},
{
  "id": "fen-yc-057",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir öğrenci ipe asılı K, L ve M küreleriyle deney yapıp gözlemlerini tabloya yazıyor. Kürelerden hiçbirinin yük durumu önceden bilinmemektedir.\n**Buna göre K ve M küreleri birbirine yaklaştırılırsa ne gözlenir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Küre çifti</th><th>Gözlem</th></tr><tr><td>K ve L</td><td>Birbirini iter</td></tr><tr><td>L ve M</td><td>Birbirini çeker</td></tr></table>",
  "secenekler": [
    "Birbirini iterler",
    "Birbirini ne çeker ne iter",
    "Gözleme göre kesin bir sonuç söylenemez",
    "Birbirini çekerler"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters yorumlama: K, L ile aynı cinstir; M ise L’nin zıt cinsi ya da nötrdür; bu yüzden K ile M iter değil, çeker.",
    "M’yi nötr görüp K’yi unutma: K yüklüdür; yüklü K, nötr de olsa M’yi çeker.",
    "Çıkarımı yapamama: itme K ve L’nin aynı cins olduğunu, çekme M’nin zıt cins ya da nötr olduğunu gösterir; ikisi birlikte sonucu kesinleştirir.",
    null
  ],
  "aciklama": "İtme gören cisimler aynı cins yüklüdür; çekme gören cisimlerden biri zıt cins yüklü ya da nötrdür.\nAdım 1: K ve L birbirini ittiğine göre ikisi de yüklü ve aynı cinstir.\nAdım 2: L ve M birbirini çektiğine göre M, L’nin zıt cinsi ya da nötrdür.\nAdım 3: K, L ile aynı cins olduğundan M, K’nin de zıt cinsi ya da nötrdür; K ve M birbirini çeker.\nSık yapılan hata: Üç küre varken yalnızca iki gözleme bakıp üçüncüsünü yorumlayamamak.\nCevap D."
},
{
  "id": "fen-yc-058",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Yalıtkan sehpa üzerindeki nötr metal K küresine, pozitif yüklü bir çubuk dokundurulmadan yaklaştırılıyor. Çubuk yerindeyken K küresi iletken telle bir an toprağa bağlanıyor ve tel hemen kaldırılıyor. Son olarak çubuk uzaklaştırılıyor.\n**Buna göre K küresinin son durumu ve bu sırada gerçekleşen yük geçişi aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yüklüdür; topraktan küreye elektron geçmiştir",
    "Negatif yüklüdür; topraktan küreye elektron geçmiştir",
    "Negatif yüklüdür; küreden toprağa elektron geçmiştir",
    "Nötr kalmıştır; yük geçişi olmamıştır"
  ],
  "dogru": 1,
  "hatalar": [
    "Son durumu ters okuma: küre elektron aldığı için pozitif değil, negatif yüklü kalır.",
    null,
    "Yönü ters yorumlama: pozitif çubuk elektronları kendine çeker; toprak bağlanınca küre topraktan elektron alır.",
    "Topraklamayı etkisiz sanma: çubuk yerindeyken yapılan topraklama kürenin yükünü değiştirir."
  ],
  "aciklama": "Yaklaştırılan yüklü çubuk, kürenin elektronlarını etkiler; çubuk yerindeyken yapılan topraklama kürenin son yükünü belirler.\nAdım 1: Pozitif çubuk, kürenin elektronlarını kendine doğru çeker.\nAdım 2: Küre topraklanınca topraktan küreye elektron geçer.\nAdım 3: Tel kaldırılıp çubuk uzaklaştırılınca bu fazla elektronlar kürede kalır; küre negatif yüklenmiş olur.\nSık yapılan hata: Pozitif çubuğun kürede pozitif yük bıraktığını düşünmek; elektron alan küre negatif yüklenir.\nCevap B."
},
{
  "id": "fen-yc-059",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Metal K cismi 7 pozitif ve 3 negatif yük taşımaktadır. K cismi iletken bir telle toprağa bağlanıyor, daha sonra tel kaldırılıyor ve K cismi yaprakları kapalı nötr bir elektroskopun topuzuna dokundurulur.\n**Buna göre bu işlemle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "K topraklansa da nötr olmadığı için yapraklar açılır",
    "K negatif yüklendiği için yapraklar açılır",
    "K nötr olduğu için yapraklar hiç açılmaz",
    "K proton kaybettiği için yapraklar açılır"
  ],
  "dogru": 2,
  "hatalar": [
    "Topraklamayı unutma: K topraktan 4 elektron alır ve nötr olur, pozitif kalmaz.",
    "Fazla geçişi sanma: K yalnız eksik elektronlarını tamamlar; nötr olunca geçiş durur.",
    null,
    "Taneciği karıştırma: topraklamada protonlar hareket etmez; elektronlar topraktan gelir."
  ],
  "aciklama": "Topraklanan pozitif yüklü cisim, eksik elektronlarını topraktan alıp nötr olur.\nAdım 1: K’de 7 pozitif ve 3 negatif yük var; negatif yük 4 eksiktir.\nAdım 2: Topraklamada topraktan K’ye 4 elektron geçer; K’de 7 pozitif, 7 negatif yük olur ve K nötrdür.\nAdım 3: Nötr cisim elektroskopun yapraklarını açmaz.\nSık yapılan hata: Topraklamadan sonra cismin hâlâ yüklü olduğunu sanmak.\nCevap C."
},
{
  "id": "fen-yc-060",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir öğrenci, elinde tuttuğu metal çubuğu yünlü kumaşa sürtüp nötr kâğıt parçalarına yaklaştırıyor; kâğıt parçaları çubuğa çekilmiyor. Aynı işlemi plastik bir çubukla yapınca kâğıt parçaları çubuğa çekiliyor.\n**Buna göre bu gözlemin nedeni aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Metal çubuk sürtünmeyle hiç yük kazanmaz",
    "Metal çubukta oluşan yük, el ve vücut yoluyla toprağa gider",
    "Metal çubuk yük kazanır ama nötr kâğıtları çekemez",
    "Plastik çubuk kâğıtlara proton vererek onları çeker"
  ],
  "dogru": 1,
  "hatalar": [
    "Sürtünmeyi etkisiz sanma: sürtünmede metal çubuk da elektron alışverişi yapar; ama yük elden toprağa gider.",
    null,
    "Nötrü etkilenmez sanma: yüklü cisim nötr cismi çeker; çubuk yüklü kalsaydı kâğıtları çekerdi.",
    "Taneciği karıştırma: çekme için yük geçişi gerekmez; protonlar da yer değiştirmez."
  ],
  "aciklama": "İletken bir cisim elle tutulursa vücut ve yer üzerinden toprağa bağlanmış gibi olur.\nAdım 1: Metal çubuk sürtünmeyle yük kazanır ama iletkendir.\nAdım 2: Çubuk elde tutulduğu için yük, el ve vücut yoluyla toprağa geçer; çubuk yüklü kalmaz ve kâğıtları çekmez.\nAdım 3: Plastik çubuk yalıtkandır; yük toprağa gidemez, çubukta kalır ve nötr kâğıtları çeker.\nSık yapılan hata: Metalin sürtünmeyle hiç yüklenmediğini düşünmek.\nCevap B."
},
{
  "id": "fen-yc-061",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Nötr K cismi (8 pozitif, 8 negatif yük) yüne sürtülünce 3 elektron veriyor. Daha sonra K cismi iletken bir telle toprağa bağlanıyor.\n**Buna göre topraklama sırasında yük geçişi aşağıdakilerden hangisi olur?**",
  "gorsel": null,
  "secenekler": [
    "Topraktan K’ye 3 elektron geçer",
    "K’den toprağa 3 elektron geçer",
    "Topraktan K’ye 5 elektron geçer",
    "K’den toprağa 5 elektron geçer"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters yorumlama: 3 elektron veren K pozitif yüklüdür; verecek fazla elektronu yoktur, elektron alır.",
    "Kalan elektronu geçen sanma: K’nin elektron sayısı 8 − 3 = 5’e düşmüştür ama geçen elektron sayısı eksik olan 3’tür.",
    "Yön ve sayıyı karıştırma: K’nin elektronu eksiktir, elektronlar topraktan gelir; sayı da 3’tür."
  ],
  "aciklama": "Yün ile sürtünen K elektron verip pozitif yüklenir; topraklamada eksik elektronlar topraktan gelir.\nAdım 1: 3 elektron verince K’de 8 pozitif, 5 negatif yük kalır; K pozitif yüklüdür.\nAdım 2: Negatif yük 8 − 5 = 3 eksiktir.\nAdım 3: Topraklamada topraktan K’ye 3 elektron geçer; K’de 8 pozitif, 8 negatif yük olur ve K nötrleşir.\nSık yapılan hata: Pozitif yüklü cismin elektron verdiğini düşünmek.\nCevap A."
},
{
  "id": "fen-yc-062",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Şekilde yük durumu verilen L cismi iletken bir telle toprağa bağlanıyor. Tel kaldırıldıktan sonra L cismi, başka bir cisimden 2 elektron alıyor.\n**Buna göre bu işlemler sonunda L cisminin yük durumu aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 140 135\" role=\"img\" aria-label=\"L cismi 5 pozitif ve 11 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">11−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text></svg>",
  "secenekler": [
    "Nötr; elektron fazlası yok",
    "Negatif yüklü; 2 elektron fazla",
    "Negatif yüklü; 8 elektron fazla",
    "Pozitif yüklü; 2 elektron eksik"
  ],
  "dogru": 1,
  "hatalar": [
    "İkinci adımı atlama: topraklamadan sonra L nötrdür ama sonra 2 elektron aldığı için nötr kalmaz.",
    null,
    "Topraklamayı atlama: L’nin 6 fazla elektronu topraklamada gider; 6 + 2 = 8 değil, yalnızca 2 fazlalık kalır.",
    "Yönü ters yorumlama: elektron alan cisim negatife doğru gider, pozitif olmaz."
  ],
  "aciklama": "İşlemleri sırayla yapıp her adımdan sonra yük durumunu yeniden yaz.\nAdım 1: Topraklamadan önce L’de 5 pozitif, 11 negatif yük var; 6 elektron fazladır.\nAdım 2: Topraklamada 6 elektron toprağa geçer; L’de 5 pozitif, 5 negatif yük kalır ve L nötr olur.\nAdım 3: Sonra 2 elektron alınca 5 pozitif, 7 negatif yük olur; L negatif yüklüdür ve 2 elektron fazlası vardır.\nSık yapılan hata: İşlemleri sırayla yapmayıp ilk durumdan başlamak.\nCevap B."
},
{
  "id": "fen-yc-063",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Kış aylarında araç koltuğundan kalkan sürücünün giysileri ile koltuk arasındaki sürtünme nedeniyle sürücünün vücudunda yük birikir. Bir benzin istasyonu çalışanı, sürücülere yakıt tabancasını almadan önce yakıt pompasının topraklı metal gövdesine dokunmalarını öneriyor.\n**Bu önerinin amacı aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Vücudu pompa gövdesinden yalıtarak yükü vücutta tutmak",
    "Pompanın gövdesindeki yükü vücuda aktarmak",
    "Vücutta biriken yükü topraklı pompa yoluyla toprağa aktarmak",
    "Vücuttaki yükün miktarını sürtünmeyle artırmak"
  ],
  "dogru": 2,
  "hatalar": [
    "Yalıtmayı topraklama sanma: dokunma iletken bir yol kurar; yalıtım yükü vücutta bırakırdı.",
    "Yönü ters yorumlama: topraklı gövde yük depolamaz; yük vücuttan toprağa gider.",
    null,
    "Amaç yanılgısı: dokunmanın amacı yükü artırmak değil, uzaklaştırmaktır."
  ],
  "aciklama": "Vücutta biriken yük, yakıt buharının yanında kıvılcım çıkarıp yangına yol açabilir.\nAdım 1: Pompanın metal gövdesi toprak hattına bağlıdır.\nAdım 2: Sürücü gövdeye dokununca vücut, toprağa giden iletken bir yola bağlanır ve biriken yük toprağa geçer.\nAdım 3: Yük boşaldığı için tabancaya dokunurken kıvılcım çıkmaz.\nSık yapılan hata: Dokunmayı yük kazanma ya da yalıtma işlemi sanmak.\nCevap C."
},
{
  "id": "fen-yc-064",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Fen kulübünde bir öğrenci X cismiyle ilgili şu bilgileri veriyor.\n- Başlangıçta yalnızca pozitif yük sayısı bilinmektedir: 9 pozitif yük.\n- X cismi başlangıç durumundan 3 elektron alırsa nötr olmaktadır.\nÖğrenci daha sonra X cismini başlangıç durumundan 2 elektron verecek şekilde yüklüyor.\n**Buna göre bu işlemin sonunda X cisminin yük durumu aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yüklü; 2 elektron eksik",
    "Pozitif yüklü; 3 elektron eksik",
    "Pozitif yüklü; 5 elektron eksik",
    "Nötr; elektron eksiği yok"
  ],
  "dogru": 2,
  "hatalar": [
    "Başlangıç yükünü atlama: X zaten 3 elektron eksikti; verilen 2 elektron bu eksiğe eklenir.",
    "Verme adımını atlama: 3 eksik, X’in başlangıçtaki durumudur; 2 elektron daha verince eksik artar.",
    null,
    "Başlangıcı nötr sanma: X, 3 elektron alınca nötr oluyorsa başlangıçta nötr değil, pozitif yüklüdür."
  ],
  "aciklama": "İşlemleri sırayla yap: önce başlangıç durumunu bul, sonra yeni işlemi uygula.\nAdım 1: X cismi 3 elektron alınca nötr oluyor; yani başlangıçta 9 pozitif ve 6 negatif yükü vardır (6 + 3 = 9).\nAdım 2: Başlangıçta X pozitif yüklüdür ve 3 elektronu eksiktir.\nAdım 3: Başlangıç durumundan 2 elektron verince negatif yük 6 − 2 = 4 olur; cismin 9 pozitif, 4 negatif yükü vardır.\nAdım 4: Pozitif yük 9 − 4 = 5 fazladır; X pozitif yüklüdür ve 5 elektronu eksiktir.\nSağlama: 3 eksik üzerine 2 verilen elektron eklenir: 3 + 2 = 5.\nCevap C."
},
{
  "id": "fen-yc-065",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Şekilde yük durumları verilen K ve L cisimleri iletken birer telle aynı anda toprağa bağlanıyor. Topraklama tamamlandığında iki cisim de nötr oluyor.\n**Buna göre bu işlem sonunda toprak, net olarak kaç elektron kazanmıştır?**",
  "gorsel": "<svg viewBox=\"0 0 280 135\" role=\"img\" aria-label=\"K cismi 9 pozitif ve 4 negatif, L cismi 3 pozitif ve 10 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">9+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">10−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text></svg>",
  "secenekler": [
    "2",
    "5",
    "7",
    "12"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yalnızca K’yi sayma: K’ye topraktan 5 elektron geçer ama L toprağa 7 elektron verir; toprağın kazancı farktır.",
    "Yalnızca L’yi sayma: L toprağa 7 elektron verir ama K topraktan 5 elektron alır; toprağın net kazancı bunların farkıdır.",
    "İki sayıyı toplama: 5 + 7 = 12 bulunur; ama K’nin aldığı elektronlar toprağın kaybıdır, toplanmaz, çıkarılır."
  ],
  "aciklama": "Toprağın kazancı, aldığı elektronlardan verdiği elektronları çıkararak bulunur.\nAdım 1: K’de pozitif yük 9 − 4 = 5 fazladır; K topraktan 5 elektron alır (toprağın kaybı).\nAdım 2: L’de negatif yük 10 − 3 = 7 fazladır; L toprağa 7 elektron verir (toprağın kazancı).\nAdım 3: Toprağın net kazancı 7 − 5 = 2 elektrondur.\nSağlama: Başlangıçta iki cisimdeki toplam yük (+5) + (−7) = −2’dir; toprak bu −2’yi (2 elektronu) devralır.\nCevap A."
},
{
  "id": "fen-yc-066",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Şekilde başlangıçta nötr olan K, L ve M cisimlerinin yük durumları gösterilmiştir. Önce K ile L birbirine sürtülüyor ve K’den L’ye 3 elektron geçiyor. Sonra L ile M birbirine sürtülüyor ve L’den M’ye 5 elektron geçiyor. Son olarak üç cisim ikişer ikişer yalıtkan saplarla birbirine yaklaştırılıyor.\n**Buna göre hangi cisimler arasında itme görülür?**",
  "gorsel": "<svg viewBox=\"0 0 420 135\" role=\"img\" aria-label=\"K, L ve M cisimlerinin her biri başlangıçta 5 pozitif ve 5 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text><circle cx=\"350\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"350\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5−</text><text x=\"350\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">M</text></svg>",
  "secenekler": [
    "Yalnız K ile M arasında",
    "Yalnız K ile L arasında",
    "Yalnız L ile M arasında",
    "Her üç çift arasında"
  ],
  "dogru": 1,
  "hatalar": [
    "Cinsleri karıştırma: K pozitif, M negatif yüklüdür; zıt cinsler iter değil, çeker.",
    null,
    "Cinsleri karıştırma: L pozitif, M negatif yüklüdür; zıt cinsler çeker.",
    "Çeşit hatası: yalnızca aynı cins yüklü olan çift iter; M’nin yükü diğer ikisinden farklı cinstir."
  ],
  "aciklama": "Her sürtünmeden sonra cisimlerin yükünü yeniden hesapla.\nAdım 1: K, 3 elektron verdi; K’de 5 pozitif, 2 negatif yük kalır (K pozitif).\nAdım 2: L önce 3 elektron aldı (5 pozitif, 8 negatif), sonra 5 elektron verdi: 5 pozitif, 3 negatif yük kalır (L pozitif).\nAdım 3: M, 5 elektron aldı: 5 pozitif, 10 negatif yük (M negatif).\nAdım 4: K ve L aynı cins (pozitif) yüklüdür ve birbirini iter. M zıt cins yüklü olduğundan hem K’yi hem L’yi çeker.\nSık yapılan hata: L’nin hem elektron aldığını hem verdiğini düşünmeyip yalnız ilk adıma bakmak.\nCevap B."
},
{
  "id": "fen-yc-067",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Yalıtkan sehpa üzerindeki nötr metal K küresine, negatif yüklü bir çubuk dokundurmadan yaklaştırılıyor. Çubuk yerindeyken K küresi iletken telle toprağa bağlanıyor. Bu kez tel kaldırılmadan önce çubuk uzaklaştırılıyor, ardından tel kaldırılıyor.\n**Buna göre K küresinin son durumu ve bu sırada gerçekleşen yük geçişi aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif yüklüdür; topraklama sırasında elektron kaybetmiştir",
    "Negatif yüklüdür; çubuktan elektron almıştır",
    "Nötrdür; çubuk uzaklaşırken topraktan elektron almıştır",
    "Nötrdür; topraklama sırasında hiç yük geçişi olmamıştır"
  ],
  "dogru": 2,
  "hatalar": [
    "Sırayı atlama: tel kaldırılmadan çubuk uzaklaştığı için küre, kaybettiği elektronları topraktan geri alır.",
    "Dokunma sanma: çubuk küreye dokundurulmadığı için küre çubuktan elektron alamaz.",
    null,
    "Topraklamayı etkisiz sanma: çubuk yerindeyken topraklama elektron geçişi sağlar; sonuç nötr olsa da geçiş gerçekleşmiştir."
  ],
  "aciklama": "Topraklamada sıra önemlidir: önce tel mi kalkıyor, önce çubuk mu uzaklaşıyor, ona bak.\nAdım 1: Negatif çubuk yaklaşınca kürenin elektronları çubuktan uzağa itilir; küre topraklanınca bu elektronlar toprağa geçer ve küre elektron kaybeder.\nAdım 2: Tel hâlâ bağlıyken çubuk uzaklaştırılınca küre eksik elektronlarını topraktan geri alır.\nAdım 3: Elektron eksiği kalmadığı için tel kaldırıldığında küre nötrdür.\nSık yapılan hata: “Topraklanan küre hep pozitif kalır” diye düşünmek; bu sonuç, tel çubuktan önce kaldırılırsa geçerlidir.\nCevap C."
},
{
  "id": "fen-yc-068",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir cismin üzerinde toplam 12 yük sembolü bulunuyor. Cismin üzerinde hem pozitif (+) hem de negatif (−) semboller var. Cisim pozitif yüklüdür.\n**Buna göre cisim üzerindeki pozitif sembol sayısı kaç farklı değer alabilir?**",
  "gorsel": null,
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 2,
  "hatalar": [
    "Aralığı kısa sanma: 7, 8, 9, 10, 11 değerleri uygundur; 3 değer fazlasıyla azdır.",
    "Bir değeri atlama: 7’den 11’e kadar 5 değer vardır; 4 değeri bulmak için bir uç değer atlanmıştır.",
    null,
    "Nötr durumu da sayma: pozitif sayısı 6 olduğunda cisim nötr olur, pozitif yüklü sayılamaz."
  ],
  "aciklama": "Pozitif yüklü cismin pozitif sembol sayısı negatiften fazla olmalıdır.\nAdım 1: Pozitif sayı p, negatif sayı n olsun; p + n = 12 ve p > n.\nAdım 2: p = 6 ise n = 6 olur ve cisim nötr olur; p en az 7 olmalıdır.\nAdım 3: Cisimde negatif sembol de bulunduğundan n en az 1’dir; yani p en çok 11’dir.\nAdım 4: p = 7, 8, 9, 10, 11 değerlerini alabilir; bu 5 farklı değerdir.\nSağlama: p = 12 olursa n = 0 olur, cismin üzerinde negatif sembol kalmaz; bu koşula aykırıdır.\nCevap C."
},
{
  "id": "fen-yc-069",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Yanıcı plastik tozunun bulunduğu bir fabrikada, küçük plastik granüller uzun boru hatlarında hızla taşınırken boru yüzeyine sürtünerek yükleniyor. Biriken yük, havada asılı kalan ince tozun yanında kıvılcım çıkarırsa patlama olabilir. Fabrika mühendisleri bu riski azaltmak için önlem listesi hazırlıyor.\n**Buna göre aşağıdakilerden hangisi mühendislerin alabileceği önlemlerden biri __olamaz__?**",
  "gorsel": null,
  "secenekler": [
    "Metal boruları iletken tellerle birbirine ve toprak hattına bağlamak",
    "Boru hattını, ucu havada kalan bakır telle toprak hattına bağlamak",
    "Granül silosunun metal gövdesini toprağa gömülü çubuğa bakır kabloyla bağlamak",
    "Boru hattının iç yüzeyini iletken malzemeyle kaplayıp toprak hattına bağlamak"
  ],
  "dogru": 1,
  "hatalar": [
    "Doğru önlemi seçme: iletken tellerle toprak hattına bağlanan borular, biriken yükü toprağa aktarır.",
    null,
    "Doğru önlemi seçme: silo gövdesi iletken kabloyla toprağa gömülü çubuğa bağlanınca biriken yük toprağa gider.",
    "Doğru önlemi seçme: toprak hattına bağlı iletken kaplama, yükün toprağa gitmesi için yol kurar."
  ],
  "aciklama": "Yük birikimine karşı alınan önlemlerin hepsi, yükü toprağa gönderecek tam bir iletken yol kurmayı amaçlar.\nAdım 1: Boruların iletken tellerle birbirine ve toprak hattına bağlanması yükü toprağa aktarır; geçerli bir önlemdir.\nAdım 2: Silo gövdesinin kabloyla toprağa bağlanması ve iletken kaplamanın toprak hattına bağlanması da aynı işi görür; ikisi de geçerlidir.\nAdım 3: Ucu havada kalan tel toprağa ulaşmaz; yük toprağa gidemez, borularda birikir ve kıvılcım riski sürer. Bu bir önlem olamaz.\nSık yapılan hata: Bağlantının malzemesine bakıp telin toprağa ulaşıp ulaşmadığını kontrol etmemek.\nCevap B."
},
{
  "id": "fen-yc-070",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "İpe asılı K, L ve M küreleri ikişer ikişer birbirine yaklaştırılıyor. K ile L birbirini çekiyor, L ile M birbirini çekiyor, K ile M birbirini itiyor. Öğrenciler küreler için şu yargıları ileri sürüyor.\nI. L nötrdür.\nII. K ile M aynı cins yüklüdür.\nIII. L, K’ye zıt cins yüklü ya da nötrdür.\n**Buna göre bu yargılardan hangileri kesin olarak doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "III’ü atlama: K ve M aynı cinstir; L’yi çekmeleri için L, onlara zıt cins ya da nötr olmalıdır. III de doğrudur.",
    "II’yi atlama: itme gören K ile M aynı cins yüklüdür; II de doğrudur.",
    "I’i kesin sanma: L nötr olabilir ama zıt cins yüklü de olabilir; I kesin doğru değildir.",
    null
  ],
  "aciklama": "İtme gören iki cisim aynı cins yüklüdür; çekme gören iki cisimden biri zıt cins yüklü ya da nötr olabilir.\nAdım 1: K ile M birbirini ittiğine göre ikisi de yüklü ve aynı cinstir; II doğrudur.\nAdım 2: L, hem K’yi hem M’yi çektiğine göre bu cinse zıt cins yüklü ya da nötr olmalıdır; III doğrudur.\nAdım 3: L zıt cins yüklü de olabilir, nötr de; “nötrdür” demek kesin değildir. I yanlıştır.\nSık yapılan hata: Çekmeyi görünce “L nötrdür” ya da “L zıt cinstir” diye tek bir sonuca varmak.\nCevap D."
},
{
  "id": "fen-yc-071",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir öğrenci topraklamayla ilgili şu yargıları yazıyor.\nI. Topraklanan her cisim topraktan elektron alır.\nII. Topraklamada yük geçişini elektronlar sağlar.\nIII. Naylon iple toprağa bağlanan yüklü cisim nötr hâle gelir.\n**Buna göre öğrencinin yargılarından hangileri doğrudur?**",
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
    "III’ü doğru sanma: naylon yalıtkandır, yük toprağa geçemez; III yanlıştır.",
    "I’i doğru sanma: negatif yüklü cisim topraklanınca toprağa elektron verir, topraktan almaz; I yanlıştır.",
    "I ve III’ü doğru sanma: negatif yüklü cisim toprağa elektron verir ve naylon yalıtkandır; ikisi de yanlıştır."
  ],
  "aciklama": "Topraklamada elektronlar yer değiştirir; yönü cismin yüküne, yolun iletken olup olmadığına bağlıdır.\nAdım 1: I yanlıştır; pozitif yüklü cisim topraktan elektron alır, negatif yüklü cisim toprağa elektron verir.\nAdım 2: II doğrudur; yük geçişini her zaman elektronlar yapar, protonlar hareket etmez.\nAdım 3: III yanlıştır; naylon iple yapılan bağlantıda yük toprağa gidemez ve cisim yüklü kalır.\nSık yapılan hata: Topraklamayı tek yönlü (hep topraktan alma ya da hep toprağa verme) sanmak.\nCevap A."
},
{
  "id": "fen-yc-072",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Şekilde yük durumları verilen özdeş iletken K ve L küreleri yalıtkan saplarla tutuluyor. Önce K ile L birbirine dokundurulup ayrılıyor. Sonra yalnızca L küresi iletken telle toprağa bağlanıp tel kaldırılıyor. Son olarak K ile L tekrar birbirine dokundurulup ayrılıyor ve küreler birbirine yaklaştırılıyor.\n**Buna göre küreler için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 280 135\" role=\"img\" aria-label=\"K küresi 12 pozitif ve 4 negatif, L küresi 6 pozitif ve 6 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">12+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text></svg>",
  "secenekler": [
    "İkisi de nötrdür; birbirini etkilemezler",
    "K pozitif, L nötrdür; birbirini çekerler",
    "İkisi de pozitiftir; birbirini iterler",
    "K pozitif, L negatiftir; birbirini çekerler"
  ],
  "dogru": 2,
  "hatalar": [
    "Topraklamayı bütün sisteme yayma: yalnız L toprağa bağlandı; K’nin yükü son dokunmada L ile paylaşıldığı için küreler nötr olmaz.",
    "Son dokunmayı atlama: K pozitif, L nötr kalsaydı birbirini çekerdi; ama son dokunmada yük paylaşılır ve L de pozitif olur.",
    null,
    "Fazla geçişi sanma: topraklamada L’ye elektron geçişi L nötr olunca durur; L negatif yüklenmez, son dokunmada pozitif yüklenir."
  ],
  "aciklama": "Her işlemden sonra kürelerin yük durumunu yeniden yaz; dokunmada yük paylaşılır, topraklamada fazla ya da eksik yük toprakla alışverişe girer.\nAdım 1: K’de pozitif yük fazladır (12 > 4); K pozitif yüklüdür. L’de 6 = 6 olduğundan L nötrdür.\nAdım 2: K ile L dokununca pozitif yük paylaşılır; iki küre de pozitif yüklü olur.\nAdım 3: L topraklanınca topraktan L’ye elektron geçer; L’nin eksiği tamamlanır ve L nötr olur. K’ye dokunulmadığı için K pozitif kalır.\nAdım 4: K (pozitif) ile L (nötr) tekrar dokununca yük yine paylaşılır; iki küre de pozitif yüklü olur ve aynı cins yüklü küreler birbirini iter.\nSağlama: Topraklama yalnız L’yi nötrleştirdi; K’nin yükü sıfırlanmadı, bu yüzden son dokunmada paylaşılacak pozitif yük vardır.\nCevap C."
},
{
  "id": "fen-yc-073",
  "kazanim": "F.8.7.2.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Yalıtkan saplarla tutulan özdeş iletken K, L ve M kürelerinin yük durumları şekilde verilmiştir. Önce K ile L birbirine dokundurulup ayrılıyor. Sonra L ile M birbirine dokundurulup ayrılıyor. Son olarak M küresi iletken telle toprağa bağlanıp tel kaldırılıyor.\n**Buna göre işlemlerin sonunda hangi küreler yüklüdür?**",
  "gorsel": "<svg viewBox=\"0 0 420 135\" role=\"img\" aria-label=\"K küresi 10 pozitif ve 2 negatif, L küresi 6 pozitif ve 6 negatif, M küresi 5 pozitif ve 5 negatif yük taşıyor\"><circle cx=\"70\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">10+</text><text x=\"70\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2−</text><text x=\"70\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">K</text><circle cx=\"210\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6+</text><text x=\"210\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6−</text><text x=\"210\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">L</text><circle cx=\"350\" cy=\"52\" r=\"36\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5+</text><text x=\"350\" y=\"68\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5−</text><text x=\"350\" y=\"110\" text-anchor=\"middle\" font-size=\"18\" fill=\"currentColor\" font-weight=\"bold\">M</text></svg>",
  "secenekler": [
    "Yalnız K",
    "L ve M",
    "K ve L",
    "K, L ve M"
  ],
  "dogru": 2,
  "hatalar": [
    "Paylaşımı atlama: K ile L dokununca L de pozitif yüklenir; sonraki dokunmada yükünü M ile paylaşsa da L pozitif kalır.",
    "K’yi nötrleşmiş sanma: K, L’ye dokununca yükünü paylaşır, hepsini vermez; K pozitif kalır. M ise topraklandığı için nötrdür.",
    null,
    "Topraklamayı atlama: M topraklanınca eksik elektronlarını topraktan alıp nötr olur; M yüklü kalmaz."
  ],
  "aciklama": "Yüklü bir iletken küre, nötr bir iletken küreye dokununca yükünü paylaşır; ikisi de aynı cins yüklenir. Topraklanan küre ise fazla ya da eksik yükünü toprakla alışverişle giderir.\nAdım 1: K’de pozitif yük fazladır (10 > 2); K pozitiftir. L ve M’de pozitif ve negatif yükler eşittir; ikisi de nötrdür.\nAdım 2: K ile L dokununca yük paylaşılır; K ve L pozitif yüklü olur.\nAdım 3: L ile M dokununca L’nin pozitif yükü M ile paylaşılır; L ve M pozitif yüklü olur. K bu işleme girmediği için pozitif kalır.\nAdım 4: M topraklanınca topraktan M’ye elektron geçer ve M nötr olur. K ve L pozitif yüklü kalır.\nSağlama: Yalnız M toprağa bağlandı; K ve L toprakla bağlantı kurmadığı için yüklü kalır.\nSık yapılan hata: Topraklamanın bütün kürelerin yükünü sıfırladığını sanmak; yalnız toprağa bağlanan küre nötr olur.\nCevap C."
},
{
  "id": "fen-yc-074",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Yalıtkan saplı iletken K küresi 10 pozitif ve 4 negatif yük taşımaktadır. K küresi önce topraklı büyük bir metal levhaya dokundurulup ayrılıyor. Sonra K küresi, yalıtkan saplı nötr L küresine (6 pozitif, 6 negatif yük) dokundurulup ayrılıyor. Son olarak K ve L küreleri birbirine yaklaştırılıyor.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "K, levhadan 6 elektron alır; K ve L birbirini çeker",
    "K, levhadan 6 elektron alır; K ve L birbirini etkilemez",
    "K, levhaya 4 elektron verir; K ve L birbirini iter",
    "K, levhaya 6 elektron verir; K ve L birbirini çeker"
  ],
  "dogru": 1,
  "hatalar": [
    "Nötr–nötr etkileşimi yanlış yorumlama: K nötr olduğundan L’ye yük vermez; iki nötr cisim arasında çekme olmaz.",
    null,
    "Yönü ters yorumlama: K pozitif yüklüdür, elektronu eksiktir; vermez, alır.",
    "Yönü ters yorumlama ve nötr–nötr etkileşimi yanlış yorumlama: yön de sonuç da yanlıştır."
  ],
  "aciklama": "Topraklı levha, dokunan pozitif yüklü cismin eksik elektronlarını tamamlar.\nAdım 1: K’de 10 pozitif, 4 negatif yük var; negatif yük 6 eksiktir. Levhaya dokununca levhadan K’ye 6 elektron geçer; K’de 10 pozitif, 10 negatif yük olur ve K nötrleşir.\nAdım 2: Nötr K, nötr L’ye dokunur; iki nötr cisim arasında yük geçişi olmaz, ikisi de nötr kalır.\nAdım 3: İki nötr cisim birbirine yaklaştırılınca ne çeker ne iter.\nSık yapılan hata: Pozitif yüklü cismin levhaya elektron verdiğini sanmak.\nCevap B."
},
{
  "id": "fen-yc-075",
  "kazanim": "F.8.7.2.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Elektron sayısı 11 olan bir cismin proton sayısı, 2’den büyük ve 10’dan küçük bir tam sayıdır. Cisim iletken bir telle toprağa bağlanıyor ve cisim negatif yüklü olduğu için toprağa elektron veriyor.\n**Buna göre cismin toprağa verebileceği elektron sayısı kaç farklı değer alabilir?**",
  "gorsel": null,
  "secenekler": [
    "6",
    "7",
    "8",
    "9"
  ],
  "dogru": 1,
  "hatalar": [
    "Bir değeri atlama: proton sayısı 3’ten 9’a kadar 7 değer alır; 6 değer sayılırsa bir uç atlanmıştır.",
    null,
    "Farkı sayma: 10 − 2 = 8 bulunur; ama arada 8 değil, 7 tam sayı vardır.",
    "Uçları da sayma: 2 ve 10 koşula uymaz; proton sayısı bu iki değeri alamaz."
  ],
  "aciklama": "Topraklamada cismin verdiği elektron sayısı, elektron fazlasına eşittir: elektron sayısı − proton sayısı.\nAdım 1: Proton sayısı p olsun; 2 < p < 10 olduğundan p = 3, 4, 5, 6, 7, 8, 9 değerlerini alır.\nAdım 2: Her değerde elektron sayısı (11) protondan fazladır; cisim negatif yüklüdür ve koşul sağlanır.\nAdım 3: Verilen elektron sayısı 11 − p olur: 8, 7, 6, 5, 4, 3, 2.\nAdım 4: Bu değerlerin hepsi farklıdır; toplam 7 farklı değer vardır.\nSağlama: p = 2 ya da p = 10 olsaydı (uçlar) bu değerler de sayılırdı ama koşul uçları dışarıda bırakıyor.\nCevap B."
}
);
