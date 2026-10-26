// Fen Bilimleri — Elektrik Yüklü Cisimler: Kademe 3 (LGS Ayarı) yedeği, sıra 26-75
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["elektrik-yuklu-cisimler"] = window.LGS_BANK["elektrik-yuklu-cisimler"] || []).push(
{
  id: "fen-yc-326",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Fen laboratuvarında yalıtkan sehpalar üzerine yerleştirilen A, B, C ve D cisimlerinin yük sembollerinin sayısı tabloda verilmiştir.
**Buna göre hangi iki cisim birbirine yaklaştırıldığında ne çekme ne de itme kuvveti gözlenir?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>A</td><td>6</td><td>6</td></tr><tr><td>B</td><td>2</td><td>7</td></tr><tr><td>C</td><td>9</td><td>4</td></tr><tr><td>D</td><td>3</td><td>3</td></tr></table>`,
  secenekler: ["A ile D", "A ile B", "B ile C", "C ile D"],
  dogru: 0,
  hatalar: [
    null,
    "Nötr cismi etkisiz sanma: B negatif yüklüdür ve nötr A'yı çeker; aralarında etkileşim vardır.",
    "Zıt yükleri görmeme: B negatif, C pozitif yüklüdür; zıt yüklü cisimler birbirini çeker.",
    "Yüklü cismin nötr cismi çekmesini unutma: C pozitif yüklüdür ve nötr D'yi çeker."
  ],
  aciklama: `Etkileşimin olmaması için iki cismin de nötr olması gerekir. Yüklü bir cisim nötr cismi çeker; zıt yüklü cisimler birbirini çeker; aynı cins yüklü cisimler birbirini iter.
Adım 1: A'da 6 pozitif, 6 negatif sembol var; yükler eşit, A nötrdür. D'de de 3 pozitif ve 3 negatif var; D nötrdür.
Adım 2: B'de negatif (7 > 2), C'de pozitif (9 > 4) yük fazladır; ikisi de yüklüdür.
Adım 3: A–B çiftinde yüklü B nötr A'yı çeker. B–C zıt yüklüdür, çeker. C–D çiftinde yüklü C nötr D'yi çeker. Yalnızca A ile D'nin ikisi de nötrdür.
Sık yapılan hata: Nötr cismi “hiç yükü yok” diye düşünüp etkileşimi yanlış yorumlamak.
Cevap A.`
},
{
  id: "fen-yc-327",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir caminin minaresinin en yüksek noktasına metal bir uç yerleştirilmiş ve bu uç, kalın bir bakır kabloyla toprağa gömülü metal plakaya bağlanmıştır. Bir öğrenci bu düzenek için şu yargıları yazıyor.
I. Düzenek, yıldırımın minareye düşmesini tamamen engeller.
II. Yıldırımın taşıdığı yük, kablo yoluyla toprağa iletilir.
III. Kablo toprağa bağlı olmasa da düzenek aynı korumayı sağlar.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Paratoneri yıldırımı önleyen araç sanma: paratoner yıldırımı engellemez, yükünü toprağa iletir.",
    null,
    "Hem yıldırımı engelleme hem de toprak bağlantısını gereksiz sanma: yıldırım düşebilir ve kablo toprağa bağlı değilse yük binada birikir.",
    "Toprak bağlantısını gereksiz sanma: kablo toprağa bağlı değilse yük binada birikir; III yanlıştır."
  ],
  aciklama: `Paratoner (yıldırımsavar), yıldırımın yükünü iletken bir yoldan toprağa aktararak yapıyı korur.
Adım 1: I yanlıştır. Paratoner yıldırımın düşmesini önlemez; düşen yıldırımın yükünü güvenli yoldan uzaklaştırır.
Adım 2: II doğrudur. Metal uç ve bakır kablo iletkendir; yük bu yoldan toprağa geçer.
Adım 3: III yanlıştır. Kablo toprağa bağlı değilse yük gidecek yer bulamaz, yapıda birikir ve yangın ya da çarpılma riski doğar.
Sık yapılan hata: Paratoneri yıldırımı engelleyen bir araç sanmak.
Cevap B.`
},
{
  id: "fen-yc-328",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki tabloda K, L ve M cisimlerinin yük sembollerinin sayısı verilmiştir. Üç cisim de nötr hâle getirilecektir.
**Buna göre bu işlem için aşağıdakilerden hangisi uygulanmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>7</td><td>3</td></tr><tr><td>L</td><td>4</td><td>9</td></tr><tr><td>M</td><td>6</td><td>6</td></tr></table>`,
  secenekler: [
    "K 4 elektron verir, L 5 elektron alır, M değişmez.",
    "K 4 elektron alır, L 5 elektron alır, M değişmez.",
    "K 4 elektron verir, L 5 elektron verir, M değişmez.",
    "K 4 elektron alır, L 5 elektron verir, M değişmez."
  ],
  dogru: 3,
  hatalar: [
    "Yönü ters kurma: pozitif yüklü K elektron eksiğidir, elektron vermez, alır. Negatif yüklü L elektron fazlasıdır, almaz, verir.",
    "L için yönü ters kurma: L'nin 5 fazla elektronu vardır; elektron alması yükünü artırır, nötr yapmaz.",
    "K için yönü ters kurma: K'nin 4 elektronu eksiktir; elektron vermesi pozitif yükünü artırır, nötr yapmaz.",
    null
  ],
  aciklama: `Pozitif yüklü cisim elektron eksiğiyle, negatif yüklü cisim elektron fazlasıyla nötrlüğünü kaybetmiştir; nötr olmak için eşitlik gerekir.
Adım 1: K'de 7 pozitif, 3 negatif yük var; 4 elektron eksiktir. Nötr olması için 4 elektron almalıdır.
Adım 2: L'de 4 pozitif, 9 negatif yük var; 5 elektron fazladır. Nötr olması için 5 elektron vermelidir.
Adım 3: M'de 6 pozitif, 6 negatif yük var; M zaten nötrdür, değişmez.
Sağlama: K 7+ 7−, L 4+ 4−, M 6+ 6− olur; hepsi nötrdür.
Cevap D.`
},
{
  id: "fen-yc-329",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir benzin istasyonunda yakıt pompasının metal tabancası, metal hortum ve gövde aracılığıyla toprak hattına bağlanmıştır. Araca yakıt doldurulurken hortumun içinde hızla akan yakıt sürtünmeyle yüklenebilir.
**Buna göre bu topraklamanın amacı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Yükü toprağa aktarıp kıvılcım çıkmasını önlemek",
    "Sürtünmeyle yük oluşmasını baştan tamamen önlemek",
    "Yakıtın hortumda daha hızlı akmasını sağlamak",
    "Yakıtın toprağa karışarak kaybolmasını önlemek"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Topraklamanın yük oluşmasını engellediğini sanma: sürtünme sürdükçe yük oluşur; topraklama onu toprağa aktarır.",
    "Topraklamayı hızlandırıcı sanma: topraklamanın akış hızıyla ilgisi yoktur; amacı güvenliktir.",
    "Amacı karıştırma: topraklama yakıtı değil, yükü toprağa yönlendirir."
  ],
  aciklama: `Sürtünmeyle biriken yük, yanıcı buharın yanında kıvılcım çıkarabilir. Topraklama bu yükü iletken yoldan toprağa gönderir.
Adım 1: Hortumdaki yakıt sürtünmeyle yüklenir; yük bir yere gitmezse birikir.
Adım 2: Metal tabanca ve hortum iletkendir; toprak hattına bağlı olduğundan yük bu yoldan toprağa geçer.
Adım 3: Yük birikmediği için kıvılcım çıkmaz, yangın riski azalır.
Sık yapılan hata: Topraklamanın yük oluşmasını önlediğini sanmak. Yük oluşur ama toprağa aktarılır.
Cevap A.`
},
{
  id: "fen-yc-330",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Yalıtkan iplerle asılı K ve L küreleri birbirine yaklaştırıldığında birbirini itiyor. L küresinde 3 tane + ve 8 tane − sembol bulunmaktadır.
**Buna göre K küresi için aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Nötr ya da pozitif yüklüdür.",
    "Pozitif yüklüdür.",
    "Negatif yüklüdür.",
    "Nötrdür."
  ],
  dogru: 2,
  hatalar: [
    "Nötr cismin ittiğini sanma: nötr cisim itmez, yalnızca çekilir. L'yi iten K, L ile aynı cins (negatif) yüklüdür.",
    "Yük cinsini ters yorumlama: L'de negatif yük fazladır; iten K, L ile aynı cins yani negatif yüklüdür.",
    null,
    "Nötr cismin ittiğini sanma: nötr cisim itmez, yalnızca çekilir. İtme görülüyorsa K'nin yüklü olması kesindir."
  ],
  aciklama: `İtme, iki cismin de yüklü ve aynı cins yüklü olduğunu gösterir. Çekme ise zıt cins ya da nötr cisim anlamına gelebilir.
Adım 1: L'de 8 negatif, 3 pozitif sembol var; L negatif yüklüdür.
Adım 2: K ile L birbirini ittiğine göre ikisi de yüklüdür ve aynı cinstendir.
Adım 3: Bu durumda K de negatif yüklüdür; nötr olma ihtimali yoktur.
Sağlama: Nötr bir cisim L'yi itmez, çekerdi.
Cevap C.`
},
{
  id: "fen-yc-331",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir buzdolabının fişindeki üçüncü uç (topraklama ucu) kırılmıştır; fiş, topraklama bağlantısı bulunmayan bir adaptörle prize takılmıştır. Daha sonra bir aksaklık nedeniyle dolabın metal gövdesine yük geçiyor ve gövdeye bir kişi dokunuyor.
**Buna göre bu olay için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Prizdeki sigorta yükü toprağa ilettiğinden gövdede yük birikmez; kişi çarpılmaz.",
    "Yük toprağa iletilemediğinden gövdede birikir; gövdeye dokunan kişi çarpılabilir.",
    "Metal gövde yalıtkan olduğundan yük kişiye geçmez; gövdeye dokunan kişi çarpılmaz.",
    "Adaptör yükü toprağa iletse de gövdeye dokunan kişi çarpılır; dolap hasar görür."
  ],
  dogru: 1,
  hatalar: [
    "Sigortayı topraklama sanma: yükü toprağa ileten şey topraklama hattıdır. Uç kırık olduğundan gövdedeki yük toprağa iletilemez ve kişi korunmaz.",
    null,
    "Metal gövdeyi yalıtkan sanma: metal iletkendir; gövdedeki yük dokunan kişi üzerinden geçebilir, kişi çarpılır.",
    "Adaptörü topraklama sanma: topraklama bağlantısı olmayan adaptör yükü toprağa iletmez. Gerekçe yanlıştır; yük toprağa iletilemediği için gövdede birikir."
  ],
  aciklama: `Üç uçlu fişin topraklama ucu, cihazın metal gövdesine geçen yükü toprağa iletir. Bu uç çalışmazsa yük gövdede kalır.
Adım 1: Topraklama ucu kırık olduğundan gövdedeki yükün gideceği iletken bir yol yoktur.
Adım 2: Yük gövdede birikir; yük yok olmaz.
Adım 3: Gövdeye dokunan kişi iletken bir yol oluşturur ve yük kişi üzerinden toprağa geçer; kişi elektrik çarpar.
Sık yapılan hata: Gövdedeki yükün kendiliğinden yok olduğunu sanmak.
Cevap B.`
},
{
  id: "fen-yc-332",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Başlangıçta nötr olan bir plastik kalem ile yün kazak birbirine sürtülüyor. Sürtünmeden önceki ve sonraki yük sembollerinin sayısı tabloda verilmiştir.
**Buna göre bu olayla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>Önce (+, −)</th><th>Sonra (+, −)</th></tr><tr><td>Kalem</td><td>8, 8</td><td>8, 11</td></tr><tr><td>Kazak</td><td>8, 8</td><td>8, 5</td></tr></table>`,
  secenekler: [
    "Kalem kazaktan 3 proton almıştır; kalem negatif yüklenmiştir.",
    "Kalem kazağa 3 elektron vermiştir; kalem pozitif yüklenmiştir.",
    "Kazak kalemden 3 elektron almıştır; kazak negatif yüklenmiştir.",
    "Kalem kazaktan 3 elektron almıştır; kalem negatif yüklenmiştir."
  ],
  dogru: 3,
  hatalar: [
    "Proton geçtiğini sanma: yüklenmede yer değiştiren tanecikler elektronlardır; protonlar yerinde kalır.",
    "Yönü ters kurma: kalemin negatif sembolü 8'den 11'e çıkmıştır, yani kalem elektron almıştır, vermemiştir.",
    "Alan ve veren cismi karıştırma: kazağın negatif sembolü azalmıştır; kazak elektron vermiş, kalem almıştır.",
    null
  ],
  aciklama: `Sürtünmeyle yüklenmede bir cisim elektron verir, öteki alır. Elektron alan negatif, elektron veren pozitif yüklenir.
Adım 1: Kalemde negatif sembol 8'den 11'e çıkmış; kalem 3 elektron almıştır. Pozitif sayısı (8) değişmemiştir.
Adım 2: Kazakta negatif sembol 8'den 5'e inmiş; kazak 3 elektron vermiştir.
Adım 3: Kalem 8+ 11− olduğundan negatif, kazak 8+ 5− olduğundan pozitif yüklüdür.
Sağlama: Verilen ve alınan elektron sayısı eşittir (3 = 3).
Cevap D.`
},
{
  id: "fen-yc-333",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Yalıtkan sehpa üzerindeki X küresi, şekildeki gibi iletken bir telle toprağa bağlanıyor. Bağlantı sırasında elektronların hareket yönü okla gösterilmiştir.
**Buna göre X küresi ile ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox='0 0 420 195' role='img' aria-label='X küresi iletken telle toprağa bağlı; ok toprak tarafından X küresine doğru elektron hareketini gösteriyor'><circle cx='90' cy='60' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='90' y='66' text-anchor='middle' font-size='18' fill='currentColor'>X</text><polyline points='126,60 300,60 300,128' fill='none' stroke='currentColor' stroke-width='2'/><polygon points='170,60 188,51 188,69' fill='var(--vurgu)'/><text x='215' y='42' text-anchor='middle' font-size='14' fill='currentColor'>elektron hareketi</text><line x1='270' y1='128' x2='330' y2='128' stroke='currentColor' stroke-width='2'/><line x1='280' y1='138' x2='320' y2='138' stroke='currentColor' stroke-width='2'/><line x1='290' y1='148' x2='310' y2='148' stroke='currentColor' stroke-width='2'/><text x='300' y='175' text-anchor='middle' font-size='14' fill='currentColor'>toprak</text></svg>`,
  secenekler: [
    "Başlangıçta pozitif yüklüdür; topraklanınca nötr olur.",
    "Başlangıçta pozitif yüklüdür; topraklanınca negatif olur.",
    "Başlangıçta negatif yüklüdür; topraklanınca nötr olur.",
    "Başlangıçta nötrdür; topraklanınca negatif olur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Zıt yüklenme sanma: topraklanan cisim fazlalığını ya da eksiğini tamamlar ve nötr olur; zıt cinse yüklenmez.",
    "Yönü ters okuma: elektronlar toprağa gitseydi X negatif olurdu. Okta elektronlar X'e gelmektedir; X elektron eksiği olan pozitif yüklü bir cisimdir.",
    "Nötr cismin elektron alacağını sanma: nötr cisim topraklanınca yük geçişi olmaz."
  ],
  aciklama: `Topraklamada yük geçişini elektronlar yapar: negatif yüklü cisim elektron verir, pozitif yüklü cisim elektron alır.
Adım 1: Okta elektronlar topraktan X küresine gelmektedir. Bir cisim ancak elektron eksiği varsa elektron alır.
Adım 2: Elektron eksiği olan cisim pozitif yüklüdür; X başlangıçta pozitif yüklüdür.
Adım 3: Eksik elektronlar tamamlanınca pozitif ve negatif yükler eşitlenir ve X nötr olur.
Sağlama: Nötr olan bir cisim artık elektron almaz; yük geçişi sona erer.
Cevap A.`
},
{
  id: "fen-yc-334",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda P, R ve S cisimlerinin pozitif ve negatif yük sembollerinin sayısı verilmiştir. Pozitif sembol proton, negatif sembol elektron sayısını göstermektedir. Bir öğrenci bu cisimler için şu yargıları yazıyor.
I. P'de hiç yük bulunmaz.
II. R'nin elektron sayısı proton sayısından fazladır.
III. S'nin elektron sayısı proton sayısından fazladır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>P</td><td>5</td><td>5</td></tr><tr><td>R</td><td>8</td><td>2</td></tr><tr><td>S</td><td>1</td><td>6</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 2,
  hatalar: [
    "Nötrü yüksüz sanma: P'de 5 pozitif ve 5 negatif yük vardır; nötr olması yük bulunmadığı anlamına gelmez.",
    "Fazlalığı ters okuma: R'de pozitif sembol fazladır, yani elektron sayısı proton sayısından azdır.",
    null,
    "İki yargıyı birden yanlış değerlendirme: P'de yük vardır (nötrdür) ve R'de elektron azdır."
  ],
  aciklama: `Proton pozitif, elektron negatif yüklüdür. Elektronu protonundan fazla olan cisim negatif, az olan cisim pozitif yüklüdür.
Adım 1: I yanlıştır. P'de 5 proton ve 5 elektron vardır; P nötrdür ama yük içerir, yükleri eşittir.
Adım 2: II yanlıştır. R'de proton 8, elektron 2'dir; elektron sayısı proton sayısından azdır, R pozitif yüklüdür.
Adım 3: III doğrudur. S'de proton 1, elektron 6'dır; elektron fazladır, S negatif yüklüdür.
Sık yapılan hata: Pozitif yüklü cismin elektronunun fazla olduğunu düşünmek.
Cevap C.`
},
{
  id: "fen-yc-335",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Yanıcı gaz kullanılan bir ameliyathanede zemin iletken bir malzemeden yapılmış ve toprak hattına bağlanmıştır. Çalışanlar da tabanı iletken olan özel ayakkabılar giymektedir.
**Buna göre bu önlemin amacı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Yükün zeminde tutulmasını sağlayıp kıvılcım çıkmasını önlemek",
    "Yükün zemin yoluyla toprağa gitmesini sağlayıp kıvılcım çıkmasını önlemek",
    "Yükün zemin yoluyla toprağa gitmesini sağlayıp ayakkabının aşınmasını önlemek",
    "Yükün zeminde tutulmasını sağlayıp ayakkabının aşınmasını önlemek"
  ],
  dogru: 1,
  hatalar: [
    "Yükün zeminde tutulduğunu sanma: iletken zemin yükü tutmaz, toprağa aktarır. Yük birikseydi kıvılcım riski artardı.",
    null,
    "Amacı karıştırma: iletken tabanın görevi ayakkabıyı korumak değil, vücuttaki yükü toprağa aktarmaktır.",
    "Hem yükün yönünü hem amacı karıştırma: zemin yükü tutmaz, toprağa aktarır; amaç da aşınmayı önlemek değildir."
  ],
  aciklama: `Hareket eden kişide sürtünmeyle yük birikebilir. Yanıcı gazın bulunduğu yerde bu yükün kıvılcıma dönüşmesi tehlikelidir.
Adım 1: İletken taban ve iletken zemin, çalışanın vücudundaki yüke yol açar.
Adım 2: Zemin toprak hattına bağlı olduğundan yük toprağa aktarılır; yük birikmez.
Adım 3: Yük birikmediği için kıvılcım çıkmaz ve yangın ya da patlama riski azalır.
Sık yapılan hata: Yalıtkan tabanın daha güvenli olduğunu sanmak. Yalıtkan taban yükün gitmesini engeller.
Cevap B.`
},
{
  id: "fen-yc-336",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Yalıtkan iplerle asılı K ve L küreleri, şekilde görüldüğü gibi birbirine doğru çekilmiş durumdadır. K küresinin yük sembolleri şekilde verilmiştir.
**Buna göre L küresi için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox='0 0 400 195' role='img' aria-label='K ve L küreleri ipler ucunda birbirine doğru çekilmiş; K küresinde 3 artı 8 eksi sembol var'><line x1='60' y1='10' x2='340' y2='10' stroke='currentColor' stroke-width='3'/><line x1='110' y1='10' x2='160' y2='98' stroke='currentColor' stroke-width='1.5'/><line x1='290' y1='10' x2='240' y2='98' stroke='currentColor' stroke-width='1.5'/><circle cx='160' cy='128' r='30' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><circle cx='240' cy='128' r='30' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='160' y='124' text-anchor='middle' font-size='15' fill='currentColor'>3+</text><text x='160' y='143' text-anchor='middle' font-size='15' fill='currentColor'>8−</text><text x='240' y='135' text-anchor='middle' font-size='18' fill='currentColor'>?</text><text x='160' y='180' text-anchor='middle' font-size='16' fill='currentColor'>K</text><text x='240' y='180' text-anchor='middle' font-size='16' fill='currentColor'>L</text></svg>`,
  secenekler: [
    "Negatif yüklüdür ya da nötrdür.",
    "Pozitif yüklüdür ya da nötrdür.",
    "Yalnızca pozitif yüklüdür.",
    "Yalnızca negatif yüklüdür."
  ],
  dogru: 1,
  hatalar: [
    "Aynı cinsin çekeceğini sanma: K negatif yüklüdür; negatif yüklü bir L, K'yi iterdi. Nötr olabilir ama negatif olamaz.",
    null,
    "Nötr olma ihtimalini atlama: yüklü bir cisim nötr cismi de çeker; L'nin pozitif olması kesin değildir.",
    "Yük cinsini ters yorumlama: K negatif olduğuna göre negatif yüklü L onu iterdi, çekmezdi."
  ],
  aciklama: `Çekme, iki cismin zıt cins yüklü olduğunu ya da cisimlerden birinin nötr olduğunu gösterir.
Adım 1: K'de 8 negatif, 3 pozitif sembol var; K negatif yüklüdür.
Adım 2: K, L'yi çekiyorsa L zıt cins yani pozitif olabilir. Yüklü bir cisim nötr cismi de çektiği için L nötr de olabilir.
Adım 3: L negatif olsaydı K ile birbirini iterdi; bu yüzden L negatif olamaz.
Sık yapılan hata: Çekmeyi “kesinlikle zıt cins” diye yorumlamak.
Cevap B.`
},
{
  id: "fen-yc-337",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir deneyde yalıtkan sehpalar üzerindeki K, L ve M kürelerinin yük durumları ve toprağa bağlanma malzemeleri tabloda verilmiştir. Üç küre aynı anda toprağa bağlanıyor ve bir süre bekleniyor.
**Buna göre bu işlem sonunda hangi kürelerin nötr hâle geldiği aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Küre</th><th>Yük durumu</th><th>Bağlantı malzemesi</th></tr><tr><td>K</td><td>Negatif</td><td>Naylon ip</td></tr><tr><td>L</td><td>Pozitif</td><td>Alüminyum tel</td></tr><tr><td>M</td><td>Negatif</td><td>Çelik zincir</td></tr></table>`,
  secenekler: ["L ve M", "K ve L", "K ve M", "K, L ve M"],
  dogru: 0,
  hatalar: [
    null,
    "Naylonu iletken sanma: naylon yalıtkandır; K'nin yükü toprağa geçemez. Ayrıca iletken zincirle bağlı M de nötr olur.",
    "Pozitif yüklü cismi dışlama: L de alüminyum tel sayesinde topraktan elektron alarak nötr olur. K ise naylon ipten dolayı nötr olamaz.",
    "Yalıtkan bağlantıyı iletken sanma: naylon ip yükü geçirmez, K yüklü kalır."
  ],
  aciklama: `Topraklamanın gerçekleşmesi için bağlantı iletken olmalıdır. İletken bağlantıda yüklü cisim nötr olur; yalıtkan bağlantıda yük geçişi olmaz.
Adım 1: Alüminyum tel ve çelik zincir iletkendir; naylon ise yalıtkandır.
Adım 2: M, çelik zincirle bağlı olduğundan fazla elektronlarını toprağa verir ve nötr olur. L, alüminyum telle bağlı olduğundan eksik elektronlarını topraktan alır ve nötr olur.
Adım 3: K naylon iple bağlıdır; yük geçişi olmaz ve K negatif yüklü kalır.
Sağlama: Nötr olanlar yalnızca iletken bağlantılı L ve M'dir.
Cevap A.`
},
{
  id: "fen-yc-338",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Fen kulübünde öğrenciler, yalıtkan sehpa üzerindeki metal kürelerin iletken telle toprağa bağlanmasını inceliyor ve şu yargıları yazıyor.
I. Pozitif yüklü bir küre topraklanınca topraktan küreye proton geçer.
II. Negatif yüklü bir küre topraklanınca kürenin elektron sayısı azalır.
III. Topraklama sırasında yük geçişini elektronlar yapar.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü atlama: topraklamada yük geçişini her zaman elektronlar yapar; III de doğrudur.",
    "II'yi atlama: negatif yüklü küre fazla elektronlarını toprağa verir; elektron sayısı azalır, II de doğrudur.",
    "Protonu hareketli sanma: protonlar çekirdekte yerinde kalır, topraktan küreye proton geçmez; I yanlıştır.",
    null
  ],
  aciklama: `Topraklamada yük geçişini serbestçe hareket edebilen elektronlar yapar; protonlar çekirdekte yerinde kalır.
Adım 1: I yanlıştır. Pozitif yüklü küre elektron eksiğidir; topraktan küreye proton değil elektron geçer.
Adım 2: II doğrudur. Negatif yüklü küre elektron fazlasını toprağa verir; elektron sayısı azalır ve küre nötr olur.
Adım 3: III doğrudur. Her iki durumda da geçen tanecik elektrondur.
Sık yapılan hata: Pozitif yükün hareket ettiğini düşünmek.
Cevap D.`
},
{
  id: "fen-yc-339",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Yalıtkan bir iple asılı hafif K küresine, negatif yüklü bir çubuk dokundurulmadan yaklaştırılıyor. K küresi çubuğa doğru hareket ediyor.
**Buna göre K küresi için aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Pozitif yüklüdür.",
    "Negatif yüklü değildir.",
    "Nötrdür.",
    "Negatif yüklüdür."
  ],
  dogru: 1,
  hatalar: [
    "Çekmeyi kesin zıt cins sanma: K pozitif olabilir ama nötr olma ihtimali de vardır; pozitif olması kesin değildir.",
    null,
    "Yüklü olma ihtimalini atlama: K pozitif yüklü de olabilir; nötr olması kesin değildir.",
    "Aynı cinsin çekeceğini sanma: negatif yüklü K, negatif çubuk tarafından itilirdi; çekilmesi K'nin negatif olmadığını gösterir."
  ],
  aciklama: `Negatif yüklü bir çubuk, pozitif yüklü cismi çeker; nötr cismi de çeker; negatif yüklü cismi ise iter.
Adım 1: K çubuğa doğru hareket ettiğine göre çekilmektedir.
Adım 2: Çekilme, K'nin pozitif yüklü olduğunu ya da nötr olduğunu gösterir. Hangisi olduğu bu gözlemden anlaşılmaz.
Adım 3: K negatif olsaydı çubuk onu iterdi. Bu yüzden kesin olan tek yargı K'nin negatif yüklü olmadığıdır.
Sık yapılan hata: Çekmeyi “zıt cins yüklü” diye kesinleştirmek.
Cevap B.`
},
{
  id: "fen-yc-340",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kamp alanındaki servis binasının çatısında bir paratoner vardır. Fırtınadan önce paratonerin kablosunun toprağa gömülü plakadan koptuğu ve ucunun havada kaldığı fark edilmemiştir. Fırtına sırasında binaya yıldırım düşüyor.
**Buna göre bu durumda aşağıdakilerden hangisi gerçekleşir?**`,
  gorsel: null,
  secenekler: [
    "Yıldırımın yükü kabloyla toprağa iletilir; bina zarar görmez.",
    "Yıldırımın yükü toprağa iletilemez; binada yangın ya da çarpılma riski doğar.",
    "Yıldırımın yükü toprağa iletilemez; paratoner yıldırımı yok ettiği için bina zarar görmez.",
    "Yıldırımın yükü kabloyla toprağa iletilir; binada yangın ya da çarpılma riski doğar."
  ],
  dogru: 1,
  hatalar: [
    "Kopuk kabloyu çalışıyor sanma: kablo toprağa ulaşmadığından yük toprağa iletilemez ve bina korunmaz.",
    null,
    "Paratoneri yıldırımı yok eden araç sanma: paratoner yıldırımı yok etmez, yükünü toprağa iletir. Kablo kopuksa bu görev yapılamaz.",
    "Neden-sonuç tutarsızlığı: yük kabloyla toprağa iletilseydi bina korunurdu; oysa kablo kopuktur."
  ],
  aciklama: `Paratoner, yıldırımın yükünü metal uç, iletken kablo ve toprağa gömülü plaka yoluyla toprağa aktarır. Zincirin bir halkası kopuksa yük toprağa gidemez.
Adım 1: Kablonun ucu toprağa değmediği için iletken yol tamamlanmamıştır.
Adım 2: Yıldırımın yükü toprağa gidemez ve bina içinde ya da çatıda birikir.
Adım 3: Biriken yük kıvılcım, yangın ya da elektrik çarpması riski doğurur.
Sık yapılan hata: Paratonerin yalnızca metal uç sayesinde koruduğunu düşünmek. Toprak bağlantısı olmazsa koruma sağlanmaz.
Cevap B.`
},
{
  id: "fen-yc-341",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda K, L ve M cisimlerinin pozitif ve negatif yük sembollerinin sayısı verilmiştir. Bir öğrenci bu cisimlerin birbirine etkisi için şu yargıları yazıyor.
I. K ile L birbirini çeker.
II. K ile M birbirini çeker.
III. L ile M birbirini iter.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>6</td><td>2</td></tr><tr><td>L</td><td>3</td><td>9</td></tr><tr><td>M</td><td>5</td><td>5</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "Nötr cismin çekilmesini atlama: pozitif yüklü K, nötr M'yi de çeker; II de doğrudur.",
    "Nötr cisme itme uygulandığını sanma: yüklü cisim nötr cismi iter değil çeker; III yanlıştır.",
    null,
    "I'i atlama ve III'ü doğru sanma: K pozitif, L negatiftir ve çekerler; L ile nötr M de birbirini çeker, itmez."
  ],
  aciklama: `Zıt cins yüklü cisimler birbirini çeker; yüklü cisim nötr cismi çeker; nötr–nötr arasında etkileşim yoktur; itme yalnızca aynı cins yüklüler arasındadır.
Adım 1: K'de pozitif (6 > 2) yük fazladır, K pozitif yüklüdür. L'de negatif (9 > 3) yük fazladır, L negatif yüklüdür. M'de yükler eşittir, M nötrdür.
Adım 2: K pozitif, L negatif; zıt yüklü olduklarından birbirini çeker. I doğrudur.
Adım 3: K yüklü, M nötr; çekme olur. II doğrudur. L yüklü, M nötr; bu çiftte de çekme vardır, itme olmaz. III yanlıştır.
Sağlama: İtme için iki cismin de aynı cins yüklü olması gerekir; bu tabloda bu koşulu sağlayan çift yoktur.
Cevap C.`
},
{
  id: "fen-yc-342",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Plastik bir kaydıraktan kayan Efe'nin vücudu, elektron kaybederek pozitif yüklenmiştir. Efe merdivenden inerken topraklı metal korkuluğa dokunuyor, küçük bir kıvılcım görülüyor ve eli hafifçe sarsılıyor.
**Buna göre Efe'nin korkuluğa dokunduğu anda olanlar için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Elektronlar korkuluktan Efe'ye geçer ve Efe nötr olur.",
    "Elektronlar Efe'den korkuluğa geçer ve Efe nötr olur.",
    "Elektronlar Efe'den korkuluğa geçer ve Efe negatif olur.",
    "Elektronlar korkuluktan Efe'ye geçer ve Efe negatif olur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yönü ters kurma: pozitif yüklü Efe elektron eksiğidir, verecek fazla elektronu yoktur. Elektronlar korkuluktan Efe'ye gelir.",
    "Hem yönü hem sonucu ters kurma: pozitif cisim elektron vermez; ayrıca elektron kaybı Efe'yi negatif yapmaz.",
    "Sonucu yanlış bulma: eksik elektronlar tamamlanınca Efe nötr olur; toprak ona fazladan elektron yüklemez."
  ],
  aciklama: `Topraklı iletkene dokunan yüklü cisim, toprakla elektron alışverişi yaparak nötr olur. Pozitif yüklü cisim topraktan elektron alır.
Adım 1: Efe elektron kaybetmiştir; eksik elektronu vardır.
Adım 2: Korkuluk topraklı ve iletkendir. Eksik elektronlar korkuluk yoluyla topraktan Efe'ye geçer.
Adım 3: Elektron sayısı proton sayısına eşitlenince Efe nötr olur. Elektronların hızlı geçişi kıvılcım ve sarsıntı olarak hissedilir.
Sık yapılan hata: Pozitif yükün toprağa gittiğini düşünmek. Yer değiştiren yalnızca elektronlardır.
Cevap A.`
},
{
  id: "fen-yc-343",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Yalıtkan saplı özdeş iletken K ve L kürelerinin yük sembolleri şekilde verilmiştir. K ile L birbirine dokundurulup yeniden ayrıldıktan sonra birbirine yaklaştırılıyor.
**Buna göre K ve L kürelerinin birbirine etkisi ve yük durumları aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox='0 0 540 112' role='img' aria-label='K küresinde 4 artı 10 eksi, L küresinde 6 artı 6 eksi sembol var'><circle cx='150' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='150' y='59' text-anchor='middle' font-size='17' fill='currentColor'>4+</text><text x='150' y='79' text-anchor='middle' font-size='17' fill='currentColor'>10−</text><text x='150' y='18' text-anchor='middle' font-size='16' fill='currentColor'>K</text><circle cx='390' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='390' y='59' text-anchor='middle' font-size='17' fill='currentColor'>6+</text><text x='390' y='79' text-anchor='middle' font-size='17' fill='currentColor'>6−</text><text x='390' y='18' text-anchor='middle' font-size='16' fill='currentColor'>L</text></svg>`,
  secenekler: [
    "Birbirini çeker; K negatif, L pozitif yüklüdür.",
    "Birbirini çeker; K nötr, L negatif yüklüdür.",
    "Birbirini iter; ikisi de negatif yüklüdür.",
    "Birbirini iter; ikisi de pozitif yüklüdür."
  ],
  dogru: 2,
  hatalar: [
    "Dokunmada zıt yüklenme sanma: dokunmayla yük paylaşılır, iki küre aynı cins yüklenir; L pozitif olmaz.",
    "Yük aktarımını eksik düşünme: K yükünü L ile paylaşır; K nötr olmaz, L de zıt değil aynı cins yüklenir ve küreler birbirini çekmez.",
    null,
    "Yük cinsini ters yorumlama: K'nin fazla yükü negatiftir; paylaşılan yük de negatiftir, pozitif değil."
  ],
  aciklama: `İletken özdeş küreler dokundurulunca aralarında elektron geçişi olur ve fazla yük paylaşılır. Dokunmayla iki küre de artan yükün cinsinde yüklenir.
Adım 1: K'de negatif sembol (10) pozitiften (4) fazla; K negatif yüklüdür. L'de yükler eşit, L nötrdür.
Adım 2: Dokunma sırasında K'nin fazla elektronlarının bir kısmı L'ye geçer. Her ikisi de negatif yüklü olur.
Adım 3: Aynı cins yüklü iki küre birbirini iter.
Sağlama: Pozitif yük yok; toplam yük negatiftir, bu yüzden hiçbir küre pozitif olamaz.
Cevap C.`
},
{
  id: "fen-yc-344",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Şekildeki paratoner düzeneğinde K metal uç, L bakır kablo, M ise toprağa gömülü metal plakadır. Yıldırım K ucuna düşüyor.
**Buna göre yıldırımın taşıdığı yükün izlediği yol ve nedeni aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox='0 0 400 245' role='img' aria-label='Bir binanın çatısında metal uç K, kablo L ve toprağa gömülü plaka M bulunan paratoner şeması'><line x1='20' y1='204' x2='380' y2='204' stroke='currentColor' stroke-width='2'/><rect x='120' y='90' width='120' height='114' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><line x1='180' y1='40' x2='180' y2='90' stroke='currentColor' stroke-width='3'/><polyline points='180,90 290,90 290,206' fill='none' stroke='var(--vurgu)' stroke-width='3'/><rect x='262' y='206' width='56' height='9' fill='currentColor'/><text x='196' y='54' font-size='16' fill='currentColor'>K</text><text x='302' y='150' font-size='16' fill='currentColor'>L</text><text x='290' y='238' text-anchor='middle' font-size='16' fill='currentColor'>M</text></svg>`,
  secenekler: [
    "M → L → K yönünde; yük topraktan metal uca çıkar.",
    "K → bina → M yönünde; yük binanın içinden geçip toprağa gider.",
    "K → L → bina yönünde; yük kablodan binaya geçer.",
    "K → L → M yönünde; yük kablodan toprağa gider."
  ],
  dogru: 3,
  hatalar: [
    "Yönü ters kurma: yıldırımın yükü topraktan çatıya çıkmaz; metal uçtan kablo yoluyla toprağa gider.",
    "Binayı yol sanma: bina yük için seçilen yol değildir. Yük, binayı atlayıp iletken kablodan toprağa gider.",
    "Paratonerin görevini ters kurma: kablonun görevi yükü binaya değil toprağa iletmektir.",
    null
  ],
  aciklama: `Paratonerde yük, iletken bir zincir boyunca ilerler: metal uç, kablo ve toprağa gömülü plaka. Yük, bina yerine bu iletken yoldan toprağa gider.
Adım 1: Yıldırım K ucuna düştüğünde yük metal uca geçer.
Adım 2: K'ye bağlı L kablosu iletkendir; yük kablo boyunca aşağı iner.
Adım 3: Kablonun ucundaki M plakası toprağa gömülüdür; yük M yoluyla toprağa aktarılır ve bina korunur.
Sık yapılan hata: Paratonerin yıldırımı engellediğini ya da yükü binaya yönlendirdiğini sanmak.
Cevap D.`
},
{
  id: "fen-yc-345",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci cisimlerin elektriklenmesiyle ilgili şu yargıları yazıyor.
I. Cisimler yüklenirken yer değiştiren tanecikler elektronlardır.
II. Proton sayısı azalan cisim negatif yüklenir.
III. Elektron alan nötr cisim pozitif yüklenir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Protonu hareketli sanma: protonlar çekirdekte yerinde kalır, sayıları değişmez; II yanlıştır.",
    "Protonu hareketli sanma: proton sayısı değişmez; II yanlıştır, yalnızca I doğrudur.",
    "Alan–veren cismi karıştırma: elektron alan cisim negatif yüklenir, pozitif değil; III yanlıştır."
  ],
  aciklama: `Cisimlerde yük geçişini yalnızca elektronlar yapar. Elektron alan cisim negatif, elektron veren cisim pozitif yüklenir; protonlar yerinde kalır.
Adım 1: I doğrudur. Yüklenme sırasında yer değiştiren tanecikler elektronlardır.
Adım 2: II yanlıştır. Protonlar çekirdekte olduğundan sayıları değişmez; negatiflik proton azalmasından değil, elektron fazlalığından gelir.
Adım 3: III yanlıştır. Nötr cisim elektron alırsa negatif yükü fazla olur; cisim negatif yüklenir.
Sık yapılan hata: Pozitif yüklenmeyi “proton kazanma” diye düşünmek.
Cevap A.`
},
{
  id: "fen-yc-346",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tekstil fabrikasında sentetik iplik, makaralara sarılırken sürtünmeyle yüklenmektedir. İplik yolunda pamuk tozu da bulunmaktadır. İplik yoluna, toprak hattına bağlı iletken metal taraklar yerleştirilmiştir.
**Buna göre bu taraklar için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "İpliğin yükünü artırır; kıvılcım riski azalır.",
    "İpliğin yükünü toprağa aktarır; kıvılcım riski azalır.",
    "İpliğin yükünü artırır; kıvılcım riski artar.",
    "İpliğin yükünü toprağa aktarır; kıvılcım riski artar."
  ],
  dogru: 1,
  hatalar: [
    "Topraklamanın yükü artırdığını sanma: topraklı iletken tarak yükü artırmaz, toprağa aktarır.",
    null,
    "Topraklamayı yüklenmeye neden sanma: tarak yükü toprağa aktarır; yük artsaydı kıvılcım riski de artardı.",
    "Sonucu ters kurma: yük toprağa aktarılınca birikme olmaz, kıvılcım riski azalır."
  ],
  aciklama: `İplik gibi yalıtkan maddeler sürtünmeyle yüklenir. Toprak hattına bağlı iletken tarak, bu yükün toprağa gitmesine yol açar.
Adım 1: Sürtünen iplik yük biriktirir; yük birikirse kıvılcım çıkabilir ve pamuk tozu tutuşabilir.
Adım 2: İletken taraklar ipliğe değer ve ipliğin yükünü toprak hattına aktarır.
Adım 3: Yük birikmediği için kıvılcım ve yangın riski azalır.
Sık yapılan hata: Topraklamanın yükü artırdığını ya da yük oluşumunu engellediğini düşünmek.
Cevap B.`
},
{
  id: "fen-yc-347",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Başlangıçta nötr olan X ve Y cisimlerinin yük sembolleri tabloda verilmiştir. Bir işlemle X cisminden Y cismine 3 elektron aktarılıyor. Daha sonra X ve Y birbirine yaklaştırılıyor.
**Buna göre bu işlem sonunda X ve Y için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>X</td><td>8</td><td>8</td></tr><tr><td>Y</td><td>8</td><td>8</td></tr></table>`,
  secenekler: [
    "X pozitif, Y negatif yüklenir; birbirini çeker.",
    "X negatif, Y pozitif yüklenir; birbirini çeker.",
    "X pozitif, Y negatif yüklenir; birbirini iter.",
    "X negatif, Y pozitif yüklenir; birbirini iter."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yönü ters kurma: elektron veren X'in negatifi azalır, X pozitif yüklenir. Elektron alan Y negatif olur.",
    "Etkileşimi ters kurma: zıt yüklü cisimler birbirini çeker, itmez.",
    "Yönü ve etkileşimi ters kurma: elektron veren X pozitif olur; zıt yüklüler birbirini çeker."
  ],
  aciklama: `Elektron veren cisim pozitif, elektron alan cisim negatif yüklenir. Zıt yüklü cisimler birbirini çeker.
Adım 1: X 3 elektron verdiğinde 8+ 5− olur; pozitif yük fazladır, X pozitif yüklüdür.
Adım 2: Y 3 elektron aldığında 8+ 11− olur; negatif yük fazladır, Y negatif yüklüdür.
Adım 3: X pozitif, Y negatif olduğundan zıt yüklüdürler ve birbirini çekerler.
Sağlama: Verilen elektron sayısı (3) alınan elektron sayısına eşittir.
Cevap A.`
},
{
  id: "fen-yc-348",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kimya laboratuvarında yanıcı sıvı eter, metal bir huniden plastik şişeye boşaltılırken akan sıvı sürtünmeyle yüklenebilir. Görevli, huniyi toprak hattına bağlı bir kelepçeyle tutturuyor. Bir gün kelepçe takılmadan boşaltma yapılıyor.
**Buna göre kelepçe takılmadan yapılan boşaltmada aşağıdakilerden hangisi gerçekleşir?**`,
  gorsel: null,
  secenekler: [
    "Yük huniden toprağa aktığından kıvılcım riski artar.",
    "Yük huniden toprağa aktığından kıvılcım riski azalır.",
    "Yük huni üzerinde biriktiğinden kıvılcım riski artar.",
    "Yük huni üzerinde biriktiğinden kıvılcım riski azalır."
  ],
  dogru: 2,
  hatalar: [
    "Topraklı olmayan huniden yük aktığını sanma: kelepçe yoksa toprak bağlantısı yoktur, yük toprağa gidemez. Üstelik toprağa aktarılan yük riski artırmaz.",
    "Topraklı olmayan huniden yük aktığını sanma: kelepçe olmadığından huni topraklı değildir, yük toprağa gidemez.",
    null,
    "Sonucu ters kurma: biriken yük kıvılcım çıkarır; risk azalmaz, artar."
  ],
  aciklama: `Topraklı kelepçe, sürtünmeyle oluşan yükü toprağa aktarır. Kelepçe olmazsa huni toprak hattından ayrılır ve yük gidecek yer bulamaz.
Adım 1: Akan eter sürtünmeyle yüklenir ve yükünü huniye bırakır.
Adım 2: Kelepçe yoksa huni topraklanmamıştır; yük toprağa geçemez.
Adım 3: Yük huni üzerinde birikir ve belli bir değere ulaşınca kıvılcım çıkar. Eter yanıcı olduğundan yangın riski artar.
Sık yapılan hata: Yükün bir şekilde kendiliğinden toprağa gideceğini düşünmek.
Cevap C.`
},
{
  id: "fen-yc-349",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tiner dolum tesisinde yanıcı sıvıyı taşıyan metal borular birbirine iletken parçalarla eklenmiş ve toprak hattına bağlanmıştır. Tesis sorumlusu bu düzenek için şu yargıları yazıyor.
I. Metal boruların birbirine iletken eklenip toprağa bağlanması, yük birikimini önler.
II. Boru hattı toprağa bağlanmazsa sürtünmeyle oluşan yük kendiliğinden yok olur.
III. Topraklama için kullanılan bağlantı malzemesi iletken olmalıdır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü atlama: topraklamada bağlantı malzemesi yalıtkan olamaz, iletken olmalıdır; III de doğrudur.",
    "Yükün yok olduğunu sanma: toprağa bağlanmayan hatta yük yok olmaz, birikir; II yanlıştır.",
    null,
    "Yükün yok olduğunu sanma ve I'i atlama: yük yok olmaz, birikir; ayrıca I de doğrudur."
  ],
  aciklama: `Topraklamanın çalışması için yükün gideceği yolun baştan sona iletken olması gerekir. Yalıtkan bir parça bu yolu keser.
Adım 1: I doğrudur. Metal borular birbirine iletken eklenip toprağa bağlanırsa sürtünmeyle oluşan yük toprağa geçer, birikmez.
Adım 2: II yanlıştır. Toprağa bağlanmayan hatta yük gidecek yer bulamaz; yok olmaz, birikir ve kıvılcım riski doğurur.
Adım 3: III doğrudur. Bağlantı malzemesi iletken olmazsa yük toprağa ulaşamaz.
Sık yapılan hata: Yükün toprağa bağlanmasa da kendiliğinden yok olduğunu sanmak.
Cevap C.`
},
{
  id: "fen-yc-350",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Yalıtkan saplı özdeş iletken K ve L kürelerinin yük sembolleri şekilde verilmiştir. K ile L birbirine dokundurulduğunda ikisi de nötr hâle geliyor.
**Buna göre bu olayda elektron geçişi için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox='0 0 540 112' role='img' aria-label='K küresinde 9 artı 3 eksi, L küresinde 2 artı 8 eksi sembol var'><circle cx='150' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='150' y='59' text-anchor='middle' font-size='17' fill='currentColor'>9+</text><text x='150' y='79' text-anchor='middle' font-size='17' fill='currentColor'>3−</text><text x='150' y='18' text-anchor='middle' font-size='16' fill='currentColor'>K</text><circle cx='390' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='390' y='59' text-anchor='middle' font-size='17' fill='currentColor'>2+</text><text x='390' y='79' text-anchor='middle' font-size='17' fill='currentColor'>8−</text><text x='390' y='18' text-anchor='middle' font-size='16' fill='currentColor'>L</text></svg>`,
  secenekler: [
    "L'den K'ye 6 elektron geçer; ikisi de nötr olur.",
    "K'den L'ye 6 elektron geçer; ikisi de nötr olur.",
    "L'den K'ye 3 elektron geçer; ikisi de pozitif olur.",
    "K'den L'ye 3 elektron geçer; ikisi de negatif olur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yönü ters kurma: pozitif yüklü K elektron eksiğidir, elektronlar fazlası olan L'den K'ye gelir.",
    "Yük paylaşımını yarım hesaplama: iki küre zıt ve eşit miktarda yüklüdür (6 fazla pozitif, 6 fazla negatif); dokunma sonunda ikisi nötr olur, pozitif kalmaz.",
    "Yönü ve sonucu ters kurma: K'nin elektron vermesi pozitifliğini artırır; ayrıca ikisinin toplamı sıfır olduğundan negatif de kalmaz."
  ],
  aciklama: `Dokunmada zıt yükler birbirini götürür. Pozitif yüklü cisim elektron eksiğidir, negatif yüklü cisim elektron fazlasıdır; elektronlar fazla olandan eksik olana geçer.
Adım 1: K'de 9 pozitif, 3 negatif yük var; 6 elektron eksiktir (pozitif yüklü). L'de 2 pozitif, 8 negatif yük var; 6 elektron fazladır (negatif yüklü).
Adım 2: Elektronlar fazla olan L'den eksik olan K'ye geçer. K'nin eksiği 6 olduğundan 6 elektron geçer.
Adım 3: K'de 9+ 9−, L'de 2+ 2− olur; ikisi de nötrdür.
Sağlama: Başlangıçta toplam yük +6 − 6 = 0'dır; sonuçta da 0 olmalıdır.
Cevap A.`
}
,
{
  id: "fen-yc-351",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kömür madeninde kömürü taşıyan konveyör bant, makaralara sürtünerek yüklenir. Bandın metal çerçevesi, parçaları iletken bağlantılarla eklenip toprak hattına bağlanmıştır; havada yanıcı kömür tozu bulunur. Bakım sırasında bağlantılar kopuyor ve çerçeve toprakla bağlantısını kaybediyor.
**Buna göre bant çalışırken aşağıdakilerden hangisi gerçekleşir?**`,
  gorsel: null,
  secenekler: [
    "Çerçevedeki yük yok olur; bant daha hızlı döner.",
    "Çerçevedeki yük yok olur; kömür tozu kıvılcımla tutuşabilir.",
    "Çerçeve yük biriktirir; bant daha hızlı döner.",
    "Çerçeve yük biriktirir; kömür tozu kıvılcımla tutuşabilir."
  ],
  dogru: 3,
  hatalar: [
    "Yükün yok olduğunu sanma: yük yok olmaz, toprağa gidemeyen yük çerçevede birikir. Topraklamanın dönme hızıyla da ilgisi yoktur.",
    "Yükün yok olduğunu sanma: toprağa gidemeyen yük yok olmaz; çerçevede birikir. Tehlike de bu birikmeden doğar.",
    "Topraklamayı hızla ilişkilendirme: topraklamanın bandın dönme hızıyla ilgisi yoktur; asıl sonuç kıvılcım ve tutuşma riskidir.",
    null
  ],
  aciklama: `Topraklama, sürtünmeyle oluşan yükün toprağa gitmesini sağlar. Bağlantı koparsa yük gidecek yer bulamaz.
Adım 1: Bant makaralara sürtündükçe yüklenir ve yükünü metal çerçeveye bırakır.
Adım 2: Çerçeve topraklı olmadığından yük toprağa geçemez; yük yok olmaz, çerçevede birikir.
Adım 3: Biriken yük yeterince artınca kıvılcım çıkar. Havadaki yanıcı kömür tozu bu kıvılcımla tutuşabilir.
Sık yapılan hata: Topraklamayı cihazın hızıyla ilişkilendirmek. Topraklamanın amacı güvenliktir.
Cevap D.`
},
{
  id: "fen-yc-352",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Yalıtkan sehpa üzerindeki nötr bir metal küre iletken telle toprağa bağlanıyor ve bir süre sonra tel kaldırılıyor. Daha sonra küreye, yalıtkan saplı pozitif yüklü bir çubuk dokundurulmadan yaklaştırılıyor. Bir öğrenci bu işlemlerle ilgili şu yargıları yazıyor.
I. Topraklama sırasında topraktan küreye elektron geçer.
II. Çubuk yaklaştırılınca küre çubuğa doğru çekilir.
III. Çubuk yaklaştırılınca küre ile çubuk birbirini iter.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve III"],
  dogru: 1,
  hatalar: [
    "Nötr cismin yük alacağını sanma: nötr cismin fazlası ya da eksiği yoktur; toprak ona elektron vermez. Ayrıca yüklü çubuk nötr küreyi çeker, II de doğrudur.",
    null,
    "Nötr küre itilir sanma: topraklanan nötr küre nötr kalır; pozitif yüklü çubuk nötr küreyi iter değil çeker.",
    "Topraklamayı yükleme sanma: nötr küre toprakla elektron alışverişi yapmaz ve nötr kalır; pozitif çubuk onu iter değil çeker."
  ],
  aciklama: `Topraklama, yüklü cismin fazlasını ya da eksiğini gidermek içindir. Nötr cismin fazlası da eksiği de yoktur. Yüklü cisim nötr cismi çeker.
Adım 1: Küre nötrdür; topraklanınca toprakla arasında elektron alışverişi olmaz. I yanlıştır.
Adım 2: Tel kaldırılınca küre yine nötr durumdadır. Pozitif yüklü çubuk nötr küreyi çeker; küre çubuğa doğru hareket eder. II doğrudur.
Adım 3: İtme için iki cismin de aynı cins yüklü olması gerekir. Küre yüklü olmadığından itme olmaz. III yanlıştır.
Sık yapılan hata: Toprağı “yük veren” bir kaynak gibi düşünmek. Toprak yalnızca fazlayı alır ya da eksiği tamamlar.
Cevap B.`
},
{
  id: "fen-yc-353",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Fen öğretmeni, yük ölçümünde kullanılan elektroskopla ilgili dört bilgi yazıyor.
**Buna göre bu bilgilerden hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Elektroskop, bir cismin yüklü olup olmadığını anlamak için kullanılır.",
    "Yaprakları kapalı nötr elektroskopun topuzuna dokunan cisim yaprakları açarsa o cisim yüklüdür.",
    "Yaprakları açık olan yüklü bir elektroskop topraklanırsa yaprakları kapanır.",
    "Yaprakları açıldığında topuza dokunan cismin yük cinsi kesinlikle belirlenir."
  ],
  dogru: 3,
  hatalar: [
    "Doğru bilgiyi yanlış sanma: elektroskop cismin yüklü olup olmadığını anlamada kullanılır; bu bilgi doğrudur.",
    "Doğru bilgiyi yanlış sanma: nötr cisim yaprakları açmaz; yaprakların açılması cismin yüklü olduğunu gösterir.",
    "Doğru bilgiyi yanlış sanma: topraklanan elektroskop nötr olur ve yaprakları kapanır.",
    null
  ],
  aciklama: `Elektroskop yük ölçümünde kullanılır. Yaprakların açılması cismin yüklü olduğunu gösterir; ama yük cinsini tek başına söylemez.
Adım 1: A doğrudur. Elektroskop yüklü olup olmadığını anlamada kullanılır.
Adım 2: B doğrudur. Yapraklar açılıyorsa cisim yüklüdür; nötr cisim yaprakları açmaz.
Adım 3: C doğrudur. Topraklama elektroskobu nötr yapar, yapraklar kapanır.
Adım 4: D yanlıştır. Yapraklar yalnızca cismin yüklü olduğunu gösterir; yük cinsini bilmek için elektroskobun önceden bilinen bir yükle yüklenmiş olması gerekir.
Sık yapılan hata: Yaprakların açılmasını pozitif ya da negatif diye yorumlamak.
Cevap D.`
},
{
  id: "fen-yc-354",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Yalıtkan sehpa üzerindeki K küresine bağlanan iletken telin diğer ucu, şekilde görüldüğü gibi toprağa değmeden havada kalmıştır. K küresinin yük sembolleri şekilde verilmiştir.
**Buna göre bu durumda K küresi için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox='0 0 420 200' role='img' aria-label='K küresinde 8 artı 3 eksi sembol var; küreye bağlı telin ucu toprak sembolüne değmiyor, havada kalıyor'><circle cx='90' cy='70' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='90' y='67' text-anchor='middle' font-size='17' fill='currentColor'>8+</text><text x='90' y='87' text-anchor='middle' font-size='17' fill='currentColor'>3−</text><text x='90' y='24' text-anchor='middle' font-size='16' fill='currentColor'>K</text><polyline points='126,70 300,70 300,110' fill='none' stroke='currentColor' stroke-width='2'/><line x1='270' y1='150' x2='330' y2='150' stroke='currentColor' stroke-width='2'/><line x1='280' y1='160' x2='320' y2='160' stroke='currentColor' stroke-width='2'/><line x1='290' y1='170' x2='310' y2='170' stroke='currentColor' stroke-width='2'/><text x='300' y='192' text-anchor='middle' font-size='14' fill='currentColor'>toprak</text></svg>`,
  secenekler: [
    "Topraktan K'ye elektron geçer; K nötr olur.",
    "K'den toprağa elektron geçer; K negatif olur.",
    "Elektron geçişi olmaz; K pozitif yüklü kalır.",
    "Elektron geçişi olmaz; K nötr olur."
  ],
  dogru: 2,
  hatalar: [
    "Kopuk bağlantıyı çalışıyor sanma: tel toprağa değmediğinden iletken yol tamamlanmamıştır; elektron geçişi olmaz.",
    "Kopuk bağlantıyı çalışıyor sanma ve yönü ters kurma: pozitif yüklü K'nin verecek fazla elektronu yoktur; ayrıca geçiş de olmaz.",
    null,
    "Yük geçişi olmazsa yük durumunun değişmeyeceğini görmeme: geçiş olmadığından K'nin yükü aynı kalır, nötr olmaz."
  ],
  aciklama: `Topraklamanın gerçekleşmesi için yüklü cisimden toprağa kesintisiz bir iletken yol bulunması gerekir. Yol kesikse elektronlar geçemez.
Adım 1: Telin ucu toprağa değmediği için K ile toprak arasında iletken bir yol yoktur.
Adım 2: Elektron geçişi olmaz; K'nin pozitif ve negatif yük sayıları değişmez.
Adım 3: K'de 8 pozitif, 3 negatif yük var; K pozitif yüklü kalır.
Sık yapılan hata: Cismin tele bağlanmasını topraklama saymak. Tel toprağa ulaşmalıdır.
Cevap C.`
},
{
  id: "fen-yc-355",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda K cisminin proton ve elektron sayısı verilmiştir. Bir öğrenci K cismine elektron eklenmesiyle ilgili şu yargıları yazıyor.
I. K'nin elektron sayısı proton sayısından fazladır.
II. K'ye 5 elektron eklenirse K nötr olur.
III. K'ye 6 elektron eklenirse K negatif yüklü olur.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>Proton sayısı</th><th>Elektron sayısı</th></tr><tr><td>K</td><td>9</td><td>4</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "Fazlalığı ters okuma: K'de proton 9, elektron 4'tür; elektron sayısı proton sayısından azdır, K pozitif yüklüdür.",
    "II'yi atlama: 4 + 5 = 9 olduğundan 5 elektron eklenince elektron ve proton sayısı eşitlenir ve K nötr olur; II de doğrudur.",
    "Fazlalığı ters okuma: elektron sayısı protondan fazla değildir; I yanlıştır.",
    null
  ],
  aciklama: `Nötr olması için elektron sayısı proton sayısına eşit olmalıdır. Elektron fazlası olan cisim negatif, eksiği olan cisim pozitif yüklüdür.
Adım 1: I yanlıştır. K'de proton 9, elektron 4'tür; elektron sayısı daha azdır ve K pozitif yüklüdür.
Adım 2: II doğrudur. 4 + 5 = 9 olduğundan 5 elektron eklenince elektron ve proton sayısı eşit olur; K nötr olur.
Adım 3: III doğrudur. 4 + 6 = 10, proton sayısı 9'dur; elektron fazla olduğundan K negatif yüklü olur.
Sağlama: K'nin nötr olması için 5 elektron gerekir; 5'ten fazlası negatif yükler.
Cevap D.`
},
{
  id: "fen-yc-356",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Alüminyum folyo ile kaplı hafif bir top yalıtkan iple asılıdır ve nötrdür. Top, yalıtkan saplı negatif yüklü bir metal çubuğa yaklaştırıldığında çubuğa doğru hareket ediyor, çubuğa değiyor ve hemen ardından çubuktan uzaklaşıyor. Bir öğrenci bu gözlemle ilgili şu yargıları yazıyor.
I. Topun çubuğa doğru hareket etmesi, yüklü çubuğun nötr topu çekmesiyle açıklanır.
II. Değme sırasında çubuktan topa elektron geçer.
III. Değmeden sonra top pozitif yüklüdür.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "Yalnız I",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II'yi atlama: negatif yüklü çubuk topa değince elektron verir ve top çubukla aynı cins yüklenir. Topun uzaklaşması da bundandır; II de doğrudur.",
    "Dokunmada zıt yüklenme sanma: top çubuğa değince çubukla aynı cins, yani negatif yüklenir; zıt cins olsa çubuktan uzaklaşmaz, yapışırdı. III yanlıştır.",
    "I'i atlama ve III'ü doğru sanma: top önce nötr olduğu için çubuk tarafından çekilmiştir; I doğrudur. Değmeden sonra top negatif yüklüdür, III yanlıştır."
  ],
  aciklama: `Yüklü cisim nötr cismi çeker. Nötr cisim yüklü cisme dokununca onunla aynı cins yüklenir; aynı cins yüklü cisimler birbirini iter.
Adım 1: I doğrudur. Top başlangıçta nötrdür; yüklü çubuk nötr topu çeker, bu yüzden top çubuğa doğru hareket eder.
Adım 2: II doğrudur. Çubuk negatif yüklüdür, fazla elektronları vardır. Değme sırasında bu elektronların bir kısmı topa geçer.
Adım 3: III yanlıştır. Top elektron alarak çubukla aynı cins, yani negatif yüklenir. Aynı cins yüklü olduklarından çubuk topu iter ve top uzaklaşır.
Sık yapılan hata: Değen cismin zıt cins yükleneceğini sanmak. Dokunmayla yüklenen cisim, dokunduran cisimle aynı cinstedir.
Cevap A.`
},
{
  id: "fen-yc-357",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan saplı özdeş iletken X ve Y kürelerinin yük sembolleri şekilde verilmiştir. Önce X küresi iletken telle toprağa bağlanıp tel kaldırılıyor. Sonra X ile Y dokundurulup ayrılıyor. Dokunma sırasında zıt yükler birbirini götürür, artan yük paylaşılır.
**Buna göre işlemler bittiğinde X ve Y kürelerinin yük durumu aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox='0 0 540 112' role='img' aria-label='X küresinde 3 artı 8 eksi, Y küresinde 9 artı 5 eksi sembol var'><circle cx='150' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='150' y='59' text-anchor='middle' font-size='17' fill='currentColor'>3+</text><text x='150' y='79' text-anchor='middle' font-size='17' fill='currentColor'>8−</text><text x='150' y='18' text-anchor='middle' font-size='16' fill='currentColor'>X</text><circle cx='390' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='390' y='59' text-anchor='middle' font-size='17' fill='currentColor'>9+</text><text x='390' y='79' text-anchor='middle' font-size='17' fill='currentColor'>5−</text><text x='390' y='18' text-anchor='middle' font-size='16' fill='currentColor'>Y</text></svg>`,
  secenekler: [
    "X negatif, Y negatif yüklüdür.",
    "X nötr, Y pozitif yüklüdür.",
    "X nötr, Y nötrdür.",
    "X pozitif, Y pozitif yüklüdür."
  ],
  dogru: 3,
  hatalar: [
    "Topraklamayı yok sayma: X topraklanınca nötr olur. X'in ilk negatif yüküyle devam edilirse Y'nin pozitif yükü yanlış götürülür ve ikisi negatif bulunur.",
    "Dokunmayı yok sayma: nötr X pozitif Y'ye dokunduğunda Y yükünü paylaşır; Y'nin yükü yalnız kalmaz, X de pozitif olur.",
    "Nötr cismin yükü yok ettiğini sanma: yük yok olmaz; Y'nin pozitif yükü X ile paylaşılır.",
    null
  ],
  aciklama: `Topraklanan cisim nötr olur. Nötr cisim yüklü cisme dokununca yükü paylaşır ve ikisi de yüklü cismin cinsinde yüklenir.
Adım 1: X'te 3 pozitif, 8 negatif yük var; negatif yüklüdür. Topraklanınca fazla elektronlarını verir ve 3+ 3− ile nötr olur. Y'de 9 pozitif, 5 negatif var; Y pozitif yüklüdür (4 fazla).
Adım 2: Nötr X ile pozitif Y dokunur. Y'nin pozitif fazlası iki küre arasında paylaşılır.
Adım 3: Dokunmadan sonra iki küre de pozitif yüklü olur.
Sağlama: X topraklamada nötr olduğu için Y'nin pozitif yükünü götürecek zıt yük kalmadı; dokunma sonunda iki küre de pozitif olur.
Cevap D.`
},
{
  id: "fen-yc-358",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan sehpalar üzerindeki K, L, M ve N cisimlerinin pozitif ve negatif yük sembollerinin sayısı tabloda verilmiştir. Bir öğrenci bu cisimler için şu yargıları yazıyor.
I. K ile N birbirini çeker.
II. L ile M birbirini iter.
III. M ile N birbirini çeker.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>5</td><td>5</td></tr><tr><td>L</td><td>7</td><td>2</td></tr><tr><td>M</td><td>3</td><td>8</td></tr><tr><td>N</td><td>4</td><td>4</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "II ve III"],
  dogru: 2,
  hatalar: [
    "İki nötr cismi birbirini çeker sanma: K ve N nötrdür, aralarında çekme ya da itme olmaz.",
    "Zıt yüklüleri iter sanma: L pozitif, M negatif yüklüdür; zıt yüklü cisimler birbirini çeker.",
    null,
    "II'yi doğru sanma: L pozitif, M negatiftir; zıt yüklüler birbirini iter değil çeker."
  ],
  aciklama: `Zıt yüklü cisimler birbirini çeker; yüklü cisim nötr cismi çeker; iki nötr cisim arasında etkileşim yoktur; itme yalnızca aynı cins yüklüler arasındadır.
Adım 1: K'de 5 pozitif, 5 negatif yük var; K nötrdür. N'de 4 pozitif, 4 negatif yük var; N de nötrdür. L'de pozitif (7 > 2), M'de negatif (8 > 3) yük fazladır.
Adım 2: I yanlıştır. İki nötr cisim birbirini çekmez ve itmez.
Adım 3: II yanlıştır. L pozitif, M negatif olduğundan çekerler. III doğrudur. Yüklü M, nötr N'yi çeker.
Sık yapılan hata: Nötr cisimlerin de birbirini çekeceğini sanmak.
Cevap C.`
},
{
  id: "fen-yc-359",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir mühendis, topraklamanın yapılmadığı durumlarda doğabilecek sonuçları sıralıyor.
**Buna göre aşağıdakilerden hangisinde uygulama ile uygulanmaması hâlinde doğacak sonuç doğru eşleştirilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Metal boru hattının toprağa bağlanmaması → Yük birikir, kıvılcım ve patlama riski doğar.",
    "Cihazın topraklama ucunun kullanılmaması → Yük yok olur, cihaz daha yavaş çalışır.",
    "Paratonerin kablosunun toprağa bağlanmaması → Yıldırımın yükü toprağa gider, bina zarar görür.",
    "Yakıt ikmalinde kabloyla toprağa bağlanmaması → Yük toprağa geçer, ikmal yavaşlar."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Topraklamayı hız etkeni sanma: topraklama ucu kullanılmazsa yük yok olmaz, gövdede birikir ve kişiyi çarpabilir.",
    "Neden-sonuç tutarsızlığı: kablo toprağa bağlı değilse yük toprağa gidemez; bina zarar görür ama yük toprağa gitmez.",
    "Neden-sonuç tutarsızlığı: toprağa bağlanmayan araçta yük toprağa geçemez ve birikir; ikmal hızı değil kıvılcım riski artar."
  ],
  aciklama: `Topraklama yapılmazsa yük toprağa gidemez ve birikir. Birikme kıvılcım, yangın, patlama ya da elektrik çarpması riski doğurur.
Adım 1: A doğru eşleşmedir. Topraklanmamış metal boru hattında yük birikir ve yanıcı maddelerin yanında kıvılcım çıkabilir.
Adım 2: B yanlıştır. Topraklama ucu yoksa yük yok olmaz, gövdede birikir; cihazın hızıyla ilgisi yoktur.
Adım 3: C ve D'de neden ve sonuç çelişir: yük toprağa gitmiyorsa “toprağa gider” denemez; ikmalin yavaşlamasının da topraklamayla ilgisi yoktur.
Sık yapılan hata: Topraklamayı hızla ilgili bir önlem sanmak.
Cevap A.`
},
{
  id: "fen-yc-360",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan saplı özdeş iletken K ve L kürelerinin ve yalıtkan iple asılı M küresinin yük sembolleri şekilde verilmiştir. Önce K ile L dokundurulup ayrılıyor. Daha sonra üç küre ikişer ikişer birbirine yaklaştırılıyor. Bir öğrenci bu işlemlerle ilgili şu yargıları yazıyor.
I. K ile L birbirini iter.
II. L ile M birbirini çeker.
III. K ile M birbirini iter.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox='0 0 540 112' role='img' aria-label='K küresinde 8 artı 2 eksi, L küresinde 5 artı 5 eksi, M küresinde 4 artı 4 eksi sembol var'><circle cx='90' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='90' y='59' text-anchor='middle' font-size='17' fill='currentColor'>8+</text><text x='90' y='79' text-anchor='middle' font-size='17' fill='currentColor'>2−</text><circle cx='270' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='270' y='59' text-anchor='middle' font-size='17' fill='currentColor'>5+</text><text x='270' y='79' text-anchor='middle' font-size='17' fill='currentColor'>5−</text><circle cx='450' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='450' y='59' text-anchor='middle' font-size='17' fill='currentColor'>4+</text><text x='450' y='79' text-anchor='middle' font-size='17' fill='currentColor'>4−</text><text x='90' y='18' text-anchor='middle' font-size='16' fill='currentColor'>K</text><text x='270' y='18' text-anchor='middle' font-size='16' fill='currentColor'>L</text><text x='450' y='18' text-anchor='middle' font-size='16' fill='currentColor'>M</text></svg>`,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "II'yi atlama: dokunmadan sonra L de pozitif yüklenir; yüklü L, nötr M'yi çeker. II de doğrudur.",
    null,
    "III'ü doğru sanma ve II'yi atlama: pozitif yüklü K, nötr M'yi iter değil çeker; III yanlıştır. II ise doğrudur.",
    "I'i atlama ve III'ü doğru sanma: dokunmadan sonra K ve L aynı cins (pozitif) yüklü olduğundan birbirini iter; K ile nötr M ise çeker, itmez."
  ],
  aciklama: `Dokunmada yüklü bir iletken, yükünü özdeş nötr iletkenle paylaşır; iki küre de aynı cins yüklenir. Aynı cins yüklü cisimler birbirini iter; yüklü cisim nötr cismi çeker.
Adım 1: K'de pozitif yük fazladır (8 > 2), K pozitif yüklüdür. L'de 5+ 5− var, L nötrdür. M'de 4+ 4− var, M de nötrdür.
Adım 2: K ile L dokununca L'den K'ye elektron geçer. K'nin pozitifliği azalır ama pozitif kalır; L elektron kaybettiği için pozitif yüklenir. Artık K ve L aynı cins (pozitif) yüklüdür.
Adım 3: I doğrudur. K ve L aynı cins yüklü olduğundan birbirini iter. II doğrudur. Pozitif yüklü L, nötr M'yi çeker. III yanlıştır. Pozitif yüklü K da nötr M'yi çeker; nötr cismi itmez.
Sık yapılan hata: Dokunmadan sonra kürelerin zıt yükleneceğini ya da yüklü cismin nötr cismi ittiğini sanmak.
Cevap B.`
},
{
  id: "fen-yc-361",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan iplerle asılı K, L ve M küreleri ikişer ikişer yaklaştırıldığında şu gözlemler yapılıyor: K ile L birbirini itiyor, L ile M birbirini çekiyor. Bir öğrenci bu gözlemlerden şu sonuçları çıkarıyor.
I. K de L de yüklüdür.
II. K ile L aynı cins yüklüdür.
III. M, K'ye zıt cins yüklüdür.
**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I'i atlama: itme gören iki cismin de yüklü olduğu kesindir, çünkü nötr cisim itmez; I de doğrudur.",
    null,
    "M'nin nötr olma ihtimalini atlama: L ile M'nin çekişmesi M'nin zıt yüklü ya da nötr olduğunu gösterir; III kesin değildir.",
    "M'nin nötr olma ihtimalini atlama ve I'i dışlama: III kesin değildir; I ise itme gözleminden kesin çıkar."
  ],
  aciklama: `İtme, iki cismin de yüklü ve aynı cins yüklü olduğunu gösterir. Çekme ise iki cismin zıt cins yüklü olduğunu ya da birinin nötr olduğunu gösterir.
Adım 1: K ile L birbirini ittiğine göre ikisi de yüklüdür ve aynı cinstir. I ve II doğrudur.
Adım 2: L ile M birbirini çekiyor. Bu, M'nin L'ye zıt cins yüklü olduğunu ya da nötr olduğunu gösterir.
Adım 3: M nötr olabileceği için M'nin K'ye zıt cins yüklü olması kesin değildir. III kesin doğru değildir.
Sık yapılan hata: Çekmeyi her zaman “zıt cins yüklü” diye yorumlamak.
Cevap B.`
},
{
  id: "fen-yc-362",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan sehpalar üzerindeki K ve L kürelerinin yük sembolleri tabloda verilmiştir. Küreler ayrı ayrı iletken telle toprağa bağlanıp teller kaldırılıyor. Daha sonra K ve L birbirine yaklaştırılıyor.
**Buna göre bu işlemlerden sonra K ve L için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Küre</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>7</td><td>2</td></tr><tr><td>L</td><td>3</td><td>8</td></tr></table>`,
  secenekler: [
    "Birbirini çeker; K pozitif, L negatif yüklüdür.",
    "Birbirini çeker; K nötr, L negatif yüklüdür.",
    "Birbirine etki etmez; ikisi de nötrdür.",
    "Birbirine etki etmez; K pozitif, L negatif yüklüdür."
  ],
  dogru: 2,
  hatalar: [
    "Topraklamayı yok sayma: topraklanan K ve L nötr olur; ilk yükleri kalmaz.",
    "Yalnız bir küreyi topraklanmış sayma: L de topraklandığından nötr olur, negatif kalmaz.",
    null,
    "Tutarsız yargı: K pozitif, L negatif kalsaydı birbirini çekerlerdi; zaten topraklanınca ikisi de nötr olur."
  ],
  aciklama: `Topraklanan yüklü cisim, fazlasını toprağa verir ya da eksiğini topraktan alır ve nötr olur. Tel kaldırılınca cisim bu nötr durumda kalır.
Adım 1: K'de 7 pozitif, 2 negatif yük var; pozitif yüklüdür. Topraklanınca topraktan 5 elektron alır ve nötr olur.
Adım 2: L'de 3 pozitif, 8 negatif yük var; negatif yüklüdür. Topraklanınca fazla 5 elektronunu toprağa verir ve nötr olur.
Adım 3: İki nötr cisim birbirine yaklaştırılınca ne çeker ne iter.
Sık yapılan hata: Topraklanan cismin ilk yük cinsini koruduğunu düşünmek.
Cevap C.`
},
{
  id: "fen-yc-363",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Yün halı üzerinde yürüyen Ece'nin vücudu sürtünmeyle yüklenmiştir. Ece önce plastik bir kapı koluna dokunuyor ve hiçbir şey hissetmiyor. Sonra topraklı metal bir kapı koluna dokunuyor; küçük bir kıvılcım görülüyor ve eli hafifçe sarsılıyor.
**Buna göre bu gözlemlerin açıklaması aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Plastik kol yalıtkandır, yük geçişi olmaz; topraklı metal kolda yük birikir.",
    "Plastik kol iletkendir, yük geçişi olur; topraklı metal kolda yük toprağa akar.",
    "Plastik kol yalıtkandır, yük geçişi olmaz; topraklı metal kolda yük toprağa akar.",
    "Plastik kol iletkendir, yük geçişi olur; topraklı metal kolda yük birikir."
  ],
  dogru: 2,
  hatalar: [
    "Topraklı metali yük biriktirir sanma: metal iletkendir ve kol topraklıdır; yük kolda birikmez, toprağa akar. Kıvılcım da bu hızlı geçişin sonucudur.",
    "Plastiği iletken sanma: plastik yalıtkandır, yük geçirmez. Yük geçseydi Ece plastik kola dokunurken de kıvılcım görürdü.",
    null,
    "Plastiği iletken, topraklı metali yük biriktirici sanma: plastik yalıtkan, metal iletkendir; yük toprağa akar."
  ],
  aciklama: `Yük yalnızca iletken yoldan toprağa geçer. Yalıtkan maddeler yük geçişini engeller.
Adım 1: Plastik kol yalıtkandır. Ece'nin yükü plastik koldan toprağa gidemez; hiçbir şey hissedilmez.
Adım 2: Metal kol iletkendir ve topraklıdır. Ece'nin yükü bu kol yoluyla toprağa geçer.
Adım 3: Yükün hızlı geçişi kıvılcım ve hafif sarsıntı olarak hissedilir.
Sık yapılan hata: Yükün yalıtkanda da toprağa akacağını düşünmek.
Cevap C.`
},
{
  id: "fen-yc-364",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Tabloda K, L ve M cisimlerinin pozitif ve negatif yük sembollerinin sayısı verilmiştir. Üç cisim de iletken telle ayrı ayrı toprağa bağlanıyor. Bir öğrenci bu işlem için şu yargıları yazıyor.
I. Üç cisimde de toprakla elektron alışverişi olur.
II. K'nin elektron sayısı azalır.
III. L'nin elektron sayısı artar.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>K</td><td>3</td><td>9</td></tr><tr><td>L</td><td>10</td><td>4</td></tr><tr><td>M</td><td>6</td><td>6</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü atlama: L pozitif yüklü, elektron eksiğidir; topraktan elektron alır, elektron sayısı artar. III de doğrudur.",
    "II'yi atlama: K negatif yüklü, elektron fazlasıdır; elektronlarını toprağa verir ve sayısı azalır. II de doğrudur.",
    "M'yi de yük alışverişi yapıyor sanma: M nötrdür, toprakla elektron alışverişi yapmaz; I yanlıştır.",
    null
  ],
  aciklama: `Topraklamada negatif yüklü cisim fazla elektronlarını toprağa verir; pozitif yüklü cisim eksik elektronlarını topraktan alır; nötr cisim yük alışverişi yapmaz.
Adım 1: K'de negatif yük fazladır (9 > 3); topraklanınca elektronlarının bir kısmını toprağa verir. Elektron sayısı azalır. II doğrudur.
Adım 2: L'de pozitif yük fazladır (10 > 4); topraklanınca topraktan elektron alır. Elektron sayısı artar. III doğrudur.
Adım 3: M'de yükler eşittir; M nötrdür, elektron alışverişi olmaz. I yanlıştır.
Sağlama: K'den toprağa 6, topraktan L'ye 6 elektron geçer.
Cevap D.`
},
{
  id: "fen-yc-365",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan iplerle asılı K, L, M ve N küreleri ikişer ikişer yaklaştırılıyor. K'nin negatif yüklü olduğu biliniyor. Gözlemler şöyledir: K ile L birbirini itiyor, L ile M birbirini çekiyor, M ile N birbirini itiyor.
**Buna göre N küresi için aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Pozitif yüklüdür.",
    "Negatif yüklüdür.",
    "Nötrdür.",
    "Pozitif yüklü ya da nötrdür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Zinciri yanlış izleme: L negatiftir ama L–M çekmesi M'nin pozitif ya da nötr olduğunu söyler. M–N itmesi ise M'nin yüklü, dolayısıyla pozitif olduğunu gösterir; N de pozitiftir.",
    "İtmeyi nötr cisme uygulama: M ile N birbirini ittiğinden ikisi de yüklüdür; N nötr olamaz.",
    "İtme koşulunu atlama: nötr cisim itmez. M–N itiyorsa N nötr olamaz, kesin olarak pozitiftir."
  ],
  aciklama: `İtme için iki cismin de aynı cins yüklü olması gerekir. Çekme ise zıt cins ya da nötr cisim anlamına gelir.
Adım 1: K negatif ve K–L itiyor; L de negatif yüklüdür.
Adım 2: L–M çekiyor; M, L'ye zıt yüklü (pozitif) ya da nötrdür.
Adım 3: M–N itiyor; M nötr olamaz, yüklü olmalıdır. Bu durumda M pozitiftir ve itme olduğuna göre N de pozitiftir.
Sağlama: Pozitif M, negatif L'yi çeker; pozitif M ile pozitif N birbirini iter. Gözlemlerin hepsi tutuyor.
Cevap A.`
},
{
  id: "fen-yc-366",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Şekilde K, L ve M cisimleri iletken tellerle ayrı ayrı toprağa bağlanmıştır. Topraklama sırasında elektronların hareket yönü okla gösterilmiştir; M için ok yoktur çünkü yük geçişi olmamıştır.
**Buna göre topraklanmadan önce bu cisimlerin yük durumu aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox='0 0 540 195' role='img' aria-label='K küresinden toprağa doğru, topraktan L küresine doğru ok var; M küresinde yük geçişi yok'><circle cx='90' cy='40' r='30' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><circle cx='270' cy='40' r='30' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><circle cx='450' cy='40' r='30' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='90' y='46' text-anchor='middle' font-size='18' fill='currentColor'>K</text><text x='270' y='46' text-anchor='middle' font-size='18' fill='currentColor'>L</text><text x='450' y='46' text-anchor='middle' font-size='18' fill='currentColor'>M</text><line x1='90' y1='70' x2='90' y2='140' stroke='currentColor' stroke-width='2'/><line x1='270' y1='70' x2='270' y2='140' stroke='currentColor' stroke-width='2'/><line x1='450' y1='70' x2='450' y2='140' stroke='currentColor' stroke-width='2'/><polygon points='90,126 81,104 99,104' fill='var(--vurgu)'/><polygon points='270,86 261,108 279,108' fill='var(--vurgu)'/><text x='438' y='108' text-anchor='end' font-size='14' fill='currentColor'>yük geçişi yok</text><line x1='66' y1='140' x2='114' y2='140' stroke='currentColor' stroke-width='2'/><line x1='74' y1='150' x2='106' y2='150' stroke='currentColor' stroke-width='2'/><line x1='82' y1='160' x2='98' y2='160' stroke='currentColor' stroke-width='2'/><line x1='246' y1='140' x2='294' y2='140' stroke='currentColor' stroke-width='2'/><line x1='254' y1='150' x2='286' y2='150' stroke='currentColor' stroke-width='2'/><line x1='262' y1='160' x2='278' y2='160' stroke='currentColor' stroke-width='2'/><line x1='426' y1='140' x2='474' y2='140' stroke='currentColor' stroke-width='2'/><line x1='434' y1='150' x2='466' y2='150' stroke='currentColor' stroke-width='2'/><line x1='442' y1='160' x2='458' y2='160' stroke='currentColor' stroke-width='2'/><text x='270' y='186' text-anchor='middle' font-size='14' fill='currentColor'>ok: elektronların hareket yönü</text></svg>`,
  secenekler: [
    "K pozitif, L negatif, M nötrdür.",
    "K negatif, L pozitif, M nötrdür.",
    "K negatif, L pozitif, M pozitiftir.",
    "K pozitif, L negatif, M negatiftir."
  ],
  dogru: 1,
  hatalar: [
    "Yönü ters okuma: K'den toprağa elektron gidiyorsa K'nin fazla elektronu vardır, yani negatiftir. L'ye elektron geliyorsa L elektron eksiğidir, pozitiftir.",
    null,
    "M'yi yüklü sanma: M'de yük geçişi olmadığına göre M'nin fazlası ya da eksiği yoktur; M nötrdür.",
    "Yönü ters okuma ve M'yi yüklü sanma: elektron veren K negatiftir; M'de geçiş olmadığından M nötrdür."
  ],
  aciklama: `Topraklamada elektron veren cisim negatif yüklüdür; elektron alan cisim pozitif yüklüdür; yük geçişi olmayan cisim nötrdür.
Adım 1: K'de ok K'den toprağa doğrudur. K fazla elektronlarını toprağa veriyor; K negatif yüklüdür.
Adım 2: L'de ok topraktan L'ye doğrudur. L eksik elektronlarını topraktan alıyor; L pozitif yüklüdür.
Adım 3: M'de yük geçişi yoktur. Nötr cisim topraklanınca elektron alışverişi olmaz; M nötrdür.
Sağlama: Elektron veren negatif, elektron alan pozitif olmalıdır; seçenek bu kurala uyuyor.
Cevap B.`
},
{
  id: "fen-yc-367",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sıvı yakıt dolum tesisinde yakıtın akıtıldığı metal boru hattı toprak hattına bağlıdır. Bakım sırasında hattın ortasındaki metal bir parça, plastik bir parçayla değiştiriliyor. Plastik parçadan sonraki metal boru bölümü toprak hattına bağlı değildir. Yakıt hızla akarken bu bölümdeki borunun yüklendiği görülüyor.
**Buna göre plastik parçadan sonraki metal boru bölümü için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Sürtünmeyle oluşan yük bu bölümden toprağa aktarılır; kıvılcım riski artmaz.",
    "Sürtünmeyle oluşan yük bu bölümden toprağa aktarılır; kıvılcım riski artar.",
    "Sürtünmeyle oluşan yük bu bölümde birikir; kıvılcım riski artar.",
    "Sürtünmeyle oluşan yük bu bölümde birikir; kıvılcım riski artmaz."
  ],
  dogru: 2,
  hatalar: [
    "Plastik parçanın yolu kapattığını görmeme: plastik yalıtkandır; bu bölümün toprakla iletken yolu kesilmiştir, yük toprağa aktarılamaz.",
    "Plastik parçanın yolu kapattığını görmeme ve sonucu tutarsız kurma: yük toprağa aktarılsaydı kıvılcım riski artmazdı; oysa aktarılamıyor.",
    null,
    "Sonucu tutarsız kurma: yük bölümde birikiyorsa kıvılcım riski artar, azalmaz ya da aynı kalmaz."
  ],
  aciklama: `Topraklamanın çalışması için yükün toprağa kadar giden yolun baştan sona iletken olması gerekir. Araya giren yalıtkan bir parça bu yolu keser.
Adım 1: Plastik parça yalıtkandır; yük bu parçadan geçemez.
Adım 2: Plastik parçadan sonraki bölüm toprak hattına bağlı değildir; bu bölümde sürtünmeyle oluşan yük toprağa gidemez ve birikir.
Adım 3: Biriken yük kıvılcım çıkarır; yakıtın yanında bu, yangın ve patlama riskini artırır.
Sık yapılan hata: Toprak hattına bağlı bölümlerin tüm boruyu koruduğunu sanmak. Her metal bölüm toprağa iletken yolla bağlı olmalıdır.
Cevap C.`
},
{
  id: "fen-yc-368",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan saplı özdeş iletken P ve R kürelerinden P'de 8 tane + ve 2 tane − sembol bulunmaktadır; R nötrdür. P ile R dokundurulup ayrılıyor. Daha sonra R küresine yalıtkan saplı nötr bir S küresi yaklaştırılıyor. Bir öğrenci bu işlemlerle ilgili şu yargıları yazıyor.
I. P ile R birbirini çeker.
II. R ile S birbirini çeker.
III. Dokunma sırasında protonlar P'den R'ye geçmiştir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Dokunmada zıt yüklenme sanma: dokunmadan sonra P de R de pozitif yüklenir; aynı cins yüklü küreler birbirini iter, çekmez.",
    null,
    "Protonu hareketli sanma: yük geçişini elektronlar yapar; protonlar çekirdekte yerinde kalır.",
    "II'yi doğru bulup III'ü de doğru sanma: protonlar hareket etmez; elektronlar nötr R'den pozitif P'ye geçer."
  ],
  aciklama: `Dokunmada yüklü cisim, yükünü dokunduğu özdeş iletkenle paylaşır; ikisi de aynı cins yüklenir. Yüklü cisim nötr cismi çeker.
Adım 1: P pozitif yüklüdür (6 fazla pozitif), R nötrdür. Dokunma sırasında R'den P'ye elektron geçer. R elektron kaybettiği için pozitif olur; P'nin pozitifliği azalır ama pozitif kalır.
Adım 2: P ve R aynı cins (pozitif) yüklü olduğundan birbirini iter. I yanlıştır.
Adım 3: R pozitif yüklü, S nötrdür; yüklü cisim nötr cismi çeker. II doğrudur. Geçen tanecikler elektronlardır, protonlar değildir; III yanlıştır.
Sık yapılan hata: Dokunmadan sonra kürelerin zıt yükleneceğini sanmak.
Cevap B.`
},
{
  id: "fen-yc-369",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan sehpa üzerindeki K küresi iletken telle toprağa bağlanıyor. Bağlantı sırasında topraktan K küresine 6 elektron geçiyor ve bağlantı bittiğinde K'de 9 tane + ve 9 tane − sembol bulunuyor.
**Buna göre K küresinin topraklanmadan önceki yük durumu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Pozitif yüklüydü: 9+ 3−",
    "Negatif yüklüydü: 9+ 15−",
    "Nötrdü: 9+ 9−",
    "Pozitif yüklüydü: 15+ 9−"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yönü ters kurma: topraktan elektron geliyorsa K'nin elektron eksiği vardı. 9+ 15− olsaydı fazla elektronlar toprağa giderdi.",
    "Nötr cismin yük aldığını sanma: nötr cisim topraklanınca toprakla elektron alışverişi yapmaz; topraktan 6 elektron geldiğine göre K nötr değildi.",
    "Proton–elektron karışıklığı: yük geçişini elektronlar yapar, proton sayısı değişmez. Başlangıçta 15+ 9− olsaydı 6 elektron gelince 15+ 15− olurdu, 9+ 9− olmazdı."
  ],
  aciklama: `Topraklamada yük geçişini elektronlar yapar ve protonlar sabit kalır. Topraktan cisme elektron geçiyorsa cisim önce elektron eksiğiyle pozitif yüklüdür.
Adım 1: Topraklama sonunda K'de 9+ 9− var; proton sayısı 9'dur ve değişmemiştir.
Adım 2: Topraktan K'ye 6 elektron geçtiğine göre başlangıçta elektron sayısı 9 − 6 = 3 idi.
Adım 3: Başlangıçta K'de 9+ 3− vardı; pozitif yük fazla olduğundan K pozitif yüklüydü.
Sağlama: 9+ 3−'ye 6 elektron eklenince 9+ 9− olur ve K nötr olur.
Cevap A.`
},
{
  id: "fen-yc-370",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Başlangıçta nötr olan cam çubuk ile ipek kumaş birbirine sürtülüyor ve cam çubuk pozitif yükleniyor. Sonra çubuk, yalıtkan sehpa üzerindeki nötr metal M küresine dokundurulup uzaklaştırılıyor; M küresi çubukla aynı cins yüklenmiştir. Son olarak ipek kumaş, M küresine yaklaştırılıyor.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kumaş ile M birbirini iter; kumaş pozitif yüklüdür.",
    "Kumaş ile M birbirini iter; kumaş negatif yüklüdür.",
    "Kumaş ile M birbirini çeker; kumaş pozitif yüklüdür.",
    "Kumaş ile M birbirini çeker; kumaş negatif yüklüdür."
  ],
  dogru: 3,
  hatalar: [
    "Kumaşın yükünü çubukla aynı sanma: çubuk elektron verip pozitif olurken kumaş elektron alır ve negatif olur. Aynı cinsin ittiği doğru olsa da kumaş pozitif değildir.",
    "Etkileşimi ters kurma: kumaş negatif, M pozitiftir; zıt yüklüler birbirini iter değil çeker.",
    "Kumaşın yükünü çubukla aynı sanma: sürtünmede çubuk pozitif olduysa kumaş negatif olur.",
    null
  ],
  aciklama: `Sürtünmede bir cisim elektron verirken öteki alır; iki cisim zıt cins yüklenir. Dokunmayla yüklenen cisim, dokunduran cisimle aynı cins yüklenir.
Adım 1: Cam çubuk pozitif yüklendiğine göre elektron vermiştir. Bu elektronları ipek kumaş almıştır; kumaş negatif yüklüdür.
Adım 2: Çubuk M küresine dokununca M, çubukla aynı cins yani pozitif yüklenir.
Adım 3: Negatif yüklü kumaş ile pozitif yüklü M zıt yüklüdür; birbirini çeker.
Sağlama: Sürtünen iki cismin yükleri zıttır; M kumaşa zıt yüklü olduğundan çekim beklenir.
Cevap D.`
},
{
  id: "fen-yc-371",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir mühendis, topraklamayla ilgili uygulamalar için şu yargıları yazıyor.
I. Üç uçlu fişin topraklama ucu, cihazın metal gövdesine geçen yükü toprağa iletir.
II. Kömür madenindeki konveyör bandın metal çerçevesini toprak hattına bağlamak, sürtünmeyle biriken yükün toprağa gitmesini sağlar.
III. Paratonerin kablosu, yıldırımın yükünü toprağa iletir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "Diğer uygulamaları atlama: konveyör çerçevesinin topraklanması ve paratonerin kablosu da yükü toprağa iletir; II ve III de doğrudur.",
    "III'ü atlama: paratoner kablosu yıldırımın yükünü toprağa iletir; III de doğrudur.",
    "I'i atlama: topraklama ucu, gövdeye geçen yükü toprağa iletir; I de doğrudur.",
    null
  ],
  aciklama: `Topraklama uygulamalarının ortak amacı, biriken ya da gelen yükü toprağa güvenli biçimde iletmektir.
Adım 1: I doğrudur. Fişin üçüncü ucu prizdeki toprak hattına bağlanır; gövdeye geçen yük toprağa gider, kişiye geçmez.
Adım 2: II doğrudur. Çerçeve topraklanınca sürtünmeyle biriken yük toprağa gider ve kıvılcım çıkmaz.
Adım 3: III doğrudur. Paratonerin kablosu yıldırımın yükünü toprağa iletir.
Sık yapılan hata: Uygulamalardan bazılarının yükü yok ettiğini ya da engellediğini sanmak.
Cevap D.`
},
{
  id: "fen-yc-372",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Başlangıçta nötr olan özdeş X, Y ve Z cisimlerinin yük sembolleri tabloda verilmiştir. Önce X ile Y sürtülüyor ve X'ten Y'ye 2 elektron geçiyor. Daha sonra Y ile Z sürtülüyor ve Y'den Z'ye 3 elektron geçiyor.
**Buna göre işlemler bittiğinde X, Y ve Z'nin yük durumu aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>+ sembol sayısı</th><th>− sembol sayısı</th></tr><tr><td>X</td><td>4</td><td>4</td></tr><tr><td>Y</td><td>4</td><td>4</td></tr><tr><td>Z</td><td>4</td><td>4</td></tr></table>`,
  secenekler: [
    "X pozitif, Y pozitif, Z negatiftir.",
    "X pozitif, Y negatif, Z negatiftir.",
    "X nötr, Y pozitif, Z negatiftir.",
    "X pozitif, Y nötr, Z negatiftir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Y'nin ikinci adımını atlama: Y önce 2 elektron aldı, sonra 3 elektron verdi. Toplamda 1 elektron kaybettiği için pozitif olur.",
    "X'in yükünü unutma: X 2 elektron verdiği için 4+ 2− olur; X nötr kalmaz, pozitif yüklenir.",
    "Hesap hatası: Y önce +2, sonra −3 elektron değişimi yaşar; net 1 elektron kaybı vardır, Y nötr değil pozitiftir."
  ],
  aciklama: `Elektron veren cisim pozitif, elektron alan cisim negatif yüklenir. Bir cisim hem alıp hem verirse net elektron değişimine bakılır.
Adım 1: X, 2 elektron verir: 4+ 2− olur; pozitif yüklüdür.
Adım 2: Y önce 2 elektron alır (4+ 6−), sonra 3 elektron verir (4+ 3−). Pozitif sayısı (4) negatiften (3) fazladır; Y pozitif yüklüdür.
Adım 3: Z, 3 elektron alır: 4+ 7− olur; negatif yüklüdür.
Sağlama: Toplam elektron değişimi: X −2, Y −1, Z +3; toplamı 0'dır.
Cevap A.`
},
{
  id: "fen-yc-373",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir elektronik atölyesinde teknisyen, devre kartlarına dokunmadan önce kablosu toprak hattına bağlı bir metal bileklik takıyor. Sentetik kıyafetiyle sürtünen teknisyenin vücudunda yük birikebilir ve bu yük karta dokunduğu anda aniden boşalarak hassas parçalara zarar verebilir.
**Buna göre bu bilekliğin işlevini ve sonucunu doğru veren seçenek aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Bileklik iletkendir; yük toprağa gider, ancak kartlar yine zarar görür.",
    "Bileklik yalıtkandır; yük bilekte kalır, böylece kartlar zarar görmez.",
    "Bileklik iletkendir; yük toprağa gider, böylece kartlar zarar görmez.",
    "Bileklik yalıtkandır; yük kartlara geçer, böylece kartlar zarar görür."
  ],
  dogru: 2,
  hatalar: [
    "Sonucu tutarsız kurma: teknisyenin yükü toprağa gidiyorsa kartlara boşalacak yük kalmaz; kartlar zarar görmez.",
    "Yalıtkan bilekliğin yükü tutacağını sanma: yalıtkan bileklik yükü toprağa geçirmez, yük vücutta birikir ve karta boşalabilir.",
    null,
    "Bilekliği yalıtkan sanma: bileklik topraklı bir iletkendir; yükü karta değil toprağa aktarır."
  ],
  aciklama: `Sürtünmeyle vücutta biriken yük, iletken bir yol bulursa aniden boşalır. Topraklı iletken bu yolu toprağa verir; yük karta geçmez.
Adım 1: Sentetik kıyafet sürtünerek teknisyenin vücudunu yükler.
Adım 2: Metal bileklik iletkendir ve kablosu toprak hattına bağlıdır. Vücuttaki yük bu yoldan sürekli toprağa gider.
Adım 3: Yük birikmediği için teknisyen karta dokunduğunda aniden boşalma olmaz ve kartlar zarar görmez.
Sık yapılan hata: Bilekliği yükü bilekte tutan bir yalıtkan sanmak. Bileklik yükü toprağa taşır.
Cevap C.`
},
{
  id: "fen-yc-374",
  kazanim: "F.8.7.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci elektroskopla ilgili şu yargıları yazıyor.
I. Nötr bir cisim, nötr elektroskopun yapraklarını açar.
II. Elektroskop yalnızca pozitif yükü gösterir.
III. Yaprakları açık olan yüklü bir elektroskopun topuzuna çıplak elle dokunulursa yapraklar kapanır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 1,
  hatalar: [
    "Elektroskobu yalnız pozitife duyarlı sanma: elektroskop yüklü olup olmadığını anlamada kullanılır; yük pozitif de negatif de olabilir. III'ü de atlamış olursun.",
    null,
    "Nötr cismin yaprak açacağını sanma: nötr cisim yapraklara yük taşımaz, yaprakları açmaz.",
    "Nötr cisim yaprakları açar sanma: yaprakların açılması cismin yüklü olduğunu gösterir; I yanlıştır."
  ],
  aciklama: `Elektroskop, cismin yüklü olup olmadığını anlamak için kullanılır. Yapraklar yüklü cisim değdiğinde açılır; nötr cisim değdiğinde açılmaz.
Adım 1: I yanlıştır. Nötr cisim elektroskopa yük vermez; yapraklar açılmaz.
Adım 2: II yanlıştır. Elektroskop pozitif de negatif de yüklü cisimle yaprakları açar; yalnızca pozitifi göstermez.
Adım 3: III doğrudur. Çıplak elle dokunmak elektroskobu topraklar; elektroskop nötr olur ve yapraklar kapanır.
Sık yapılan hata: Elektroskobu tek cins yüke duyarlı bir araç sanmak.
Cevap B.`
},
{
  id: "fen-yc-375",
  kazanim: "F.8.7.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Yalıtkan saplı özdeş iletken K ve L kürelerinin yük sembolleri şekilde verilmiştir. Önce L küresi iletken telle toprağa bağlanıp tel kaldırılıyor. Sonra K ile L dokundurulup ayrılıyor ve küreler birbirine yaklaştırılıyor. Dokunma sırasında yük paylaşılır.
**Buna göre işlemler bittiğinde K ve L için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox='0 0 540 112' role='img' aria-label='K küresinde 3 artı 9 eksi, L küresinde 7 artı 5 eksi sembol var'><circle cx='150' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='150' y='59' text-anchor='middle' font-size='17' fill='currentColor'>3+</text><text x='150' y='79' text-anchor='middle' font-size='17' fill='currentColor'>9−</text><text x='150' y='18' text-anchor='middle' font-size='16' fill='currentColor'>K</text><circle cx='390' cy='62' r='36' fill='var(--dolgu)' stroke='currentColor' stroke-width='2'/><text x='390' y='59' text-anchor='middle' font-size='17' fill='currentColor'>7+</text><text x='390' y='79' text-anchor='middle' font-size='17' fill='currentColor'>5−</text><text x='390' y='18' text-anchor='middle' font-size='16' fill='currentColor'>L</text></svg>`,
  secenekler: [
    "Birbirini çeker; K negatif, L nötrdür.",
    "Birbirine etki etmez; ikisi de nötrdür.",
    "Birbirini çeker; K negatif, L pozitiftir.",
    "Birbirini iter; ikisi de negatif yüklüdür."
  ],
  dogru: 3,
  hatalar: [
    "Dokunmada L'nin yük almadığını sanma: K fazla elektronlarını nötr L ile paylaşır, L nötr kalmaz. İki küre aynı cins yüklenir ve birbirini çekmez.",
    "Yükün yok olduğunu sanma: K'nin negatif fazlası nötr L'ye dokununca yok olmaz, paylaşılır.",
    "Topraklamayı yok sayma: L topraklanınca eksik elektronlarını topraktan alıp nötr olur; pozitif kalmaz.",
    null
  ],
  aciklama: `Topraklanan cisim nötr olur. Yüklü cisim nötr özdeş iletkene dokununca yükünü paylaşır; iki küre de aynı cins yüklenir. Aynı cins yüklü cisimler birbirini iter.
Adım 1: K'de 3 pozitif, 9 negatif yük var; K negatif yüklüdür. L'de 7 pozitif, 5 negatif yük var; L pozitif yüklüdür.
Adım 2: L topraklanınca topraktan 2 elektron alır ve nötr olur. Tel kaldırılınca L nötr kalır.
Adım 3: Negatif yüklü K, nötr L'ye dokununca fazla elektronlarının bir kısmı L'ye geçer. İki küre de negatif yüklü olur.
Adım 4: Aynı cins yüklü iki küre birbirini iter.
Sık yapılan hata: L'nin topraklamadan önceki pozitif yükünü korumak ya da dokunmada yükün yok olduğunu sanmak.
Cevap D.`
}
);
