// Fen Bilimleri — Sıvı ve Gaz Basıncı: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sivi-gaz-basinci"] = window.LGS_BANK["sivi-gaz-basinci"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "fen-sg-101",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Bir kaptaki durgun sıvının kabın tabanına uyguladığı basınç, aşağıdakilerin hangisinde verilen iki değişkene bağlıdır?**",
  gorsel: null,
  secenekler: [
    "Kabın biçimi ve sıvının miktarı",
    "Sıvının derinliği ve sıvının cinsi",
    "Kabın taban alanı ve sıvının derinliği",
    "Sıvının hacmi ve sıvının cinsi"
  ],
  dogru: 1,
  hatalar: [
    "Sıvı basıncını sıvının ağırlığıyla karıştırma: kabın biçimi ve sıvının miktarı değişse de aynı derinlikte aynı sıvının basıncı değişmez.",
    null,
    "Katı basıncındaki alan değişkenini sıvıya taşıma: derinlik doğru, ama kabın taban alanı sıvı basıncını değiştirmez.",
    "Yarım doğru: sıvının cinsi doğru, ama sıvının hacmi (miktarı) sıvı basıncını değiştirmez."
  ],
  aciklama: `Sıvı basıncı, sıvının ağırlığından dolayı bulunduğu kabın yüzeylerine ve içindeki cisimlere uyguladığı basınçtır.
Adım 1: Sıvı basıncı derinlik arttıkça artar. Derinlik, sıvının açık yüzeyinden aşağı doğru ölçülür.
Adım 2: Aynı derinlikte yoğunluğu büyük olan sıvının basıncı daha büyüktür. Yani sıvının cinsi de basıncı etkiler.
Adım 3: Kabın biçimi, taban alanı ve sıvının miktarı (hacmi) değişse bile aynı derinlikte aynı sıvının basıncı değişmez.
Sık yapılan hata: Katı basıncındaki "yüzey alanı" değişkenini sıvılara da uygulamak. Katılarda temas alanı önemlidir; sıvı basıncında ise derinlik ve sıvının cinsi önemlidir.
Cevap B.`
},
{
  id: "fen-sg-102",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir kabın yan yüzeyinde K, L, M ve N delikleri vardır. Delikler kapalıyken kap, görseldeki düzeye kadar suyla doldurulmuştur.
**Delikler aynı anda açıldığında hangi deliğe etki eden su basıncı en büyüktür?**`,
  gorsel: `<svg viewBox="0 0 360 290" role="img" aria-label="Yan yüzeyinde yukarıdan aşağıya K, L, M ve N delikleri bulunan su dolu kap"><rect x="111" y="60" width="138" height="200" fill="var(--dolgu)"/><g fill="none" stroke="currentColor" stroke-width="2"><path d="M110 30 V260 H250 V30"/></g><line x1="110" y1="60" x2="250" y2="60" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><circle cx="250" cy="95" r="6"/><circle cx="250" cy="140" r="6"/><circle cx="250" cy="185" r="6"/><circle cx="250" cy="230" r="6"/></g><g fill="currentColor" font-size="16"><text x="266" y="100">K</text><text x="266" y="145">L</text><text x="266" y="190">M</text><text x="266" y="235">N</text><text x="20" y="65">Su yüzeyi</text></g><text x="180" y="160" fill="currentColor" font-size="16" text-anchor="middle">Su</text></svg>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 3,
  hatalar: [
    "Ters yön: basıncın su yüzeyine yakın yerde büyük olduğunu sanma; K en sığ delik olduğu için ona etki eden basınç en küçüktür.",
    "Kabın ortasını ölçüt alma: L, kabın orta kısmına yakındır ama N'den daha sığdadır; basınç derinlikle artar.",
    "Karşılaştırmayı yarım bırakma: M derindedir ama N, M'den de aşağıdadır; en büyük basınç en derindeki deliğe etki eder.",
    null
  ],
  aciklama: `Sıvı basıncı derinlik arttıkça artar. Derinlik, sıvının açık yüzeyinden aşağı doğru ölçülür.
Adım 1: Su yüzeyinden aşağı doğru inildiğinde delikler K, L, M, N sırasıyla gelir.
Adım 2: En derinde bulunan delik N'dir.
Adım 3: Derinlik en fazla olduğu için en büyük su basıncı N deliğine etki eder.
Sağlama: Delikler açıldığında su en hızlı N deliğinden, en yavaş K deliğinden çıkar.
Cevap D.`
},
{
  id: "fen-sg-103",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Pascal prensibine göre kapalı bir kaptaki sıvıya bir piston yardımıyla uygulanan basınç nasıl iletilir?**",
  gorsel: null,
  secenekler: [
    "Sıvının her noktasına aynen iletilir.",
    "Yalnızca kuvvetin uygulandığı yönde iletilir.",
    "Kabın tabanına doğru artarak iletilir.",
    "Pistondan uzaklaştıkça azalarak iletilir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Katılarla karıştırma: katılar kuvveti uygulandığı doğrultuda iletir; sıvılar ise kendilerine uygulanan basıncı her yöne iletir.",
    "Sıvının kendi ağırlığından doğan basınçla karıştırma: derinlikle artan, sıvının kendi basıncıdır; pistonla uygulanan basınç ise her noktaya aynı miktarda eklenir.",
    "Uzaklıkla zayıflama sanma: sıvılar sıkıştırılamadığı için uygulanan basınç uzaktaki noktalara da azalmadan ulaşır."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından kabın her noktasına ve her yöne aynen (azalmadan) iletilir.
Adım 1: Sıvılar neredeyse hiç sıkıştırılamaz. Pistonla sıvıya bastırıldığında sıvının tanecikleri birbirini her yönde iter.
Adım 2: Bu yüzden pistonun oluşturduğu basınç yalnızca karşı tarafa değil, yanlara, yukarıya ve aşağıya da iletilir.
Adım 3: Basınç iletilirken azalmaz; kabın her noktasındaki basınç aynı miktarda artar.
Sık yapılan hata: Sıvıların basıncı, katıların kuvveti ilettiği gibi tek yönde ilettiğini düşünmek. Hidrolik fren, kriko ve berber koltuğu bu prensiple çalışır.
Cevap A.`
},
{
  id: "fen-sg-104",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir dağcı, deniz kıyısından yola çıkıp yüksek bir dağın zirvesine tırmanmıştır.
**Dağcı yükseldikçe bulunduğu yerdeki açık hava basıncının değişimi ve bu değişimin nedeni aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Artar; dağcı Güneş'e yaklaştığı için.",
    "Azalır; üstte kalan hava tabakası inceldiği için.",
    "Değişmez; hava her yükseklikte aynı olduğu için.",
    "Artar; yükseklerde hava soğuk olduğu için."
  ],
  dogru: 1,
  hatalar: [
    "Ters yön ve ilgisiz neden: yükseldikçe açık hava basıncı azalır; Güneş'e birkaç kilometre yaklaşmanın basınçla ilgisi yoktur.",
    null,
    "Havanın her yükseklikte aynı olduğunu sanma: yükseklere çıkıldıkça hava seyrekleşir ve üstte kalan hava tabakası incelir.",
    "Ters yön ve ilgisiz neden: yükseklerde hava soğuk olabilir, ama açık hava basıncı artmaz, azalır; nedeni sıcaklık değil, üstteki hava tabakasının incelmesidir."
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının (atmosferin) ağırlığından doğan ve yeryüzündeki her şeye etki eden basınçtır.
Adım 1: Deniz kıyısında insanın üzerinde çok kalın bir hava tabakası bulunur.
Adım 2: Yükseklere çıkıldıkça üstte kalan hava tabakası incelir, hava da seyrekleşir.
Adım 3: Bu yüzden açık hava basıncı azalır. Dağcı zirvede, deniz kıyısındakinden daha küçük bir açık hava basıncının etkisindedir.
Sık yapılan hata: "Gökyüzüne yaklaştıkça basınç artar." diye düşünmek. Sıvılarda derinlik arttıkça basınç arttığı gibi, açık hava basıncı da hava tabakasının en kalın olduğu deniz kıyısında en büyüktür.
Cevap B.`
},
{
  id: "fen-sg-105",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Barajların duvarları, görseldeki gibi üst kısımda ince, tabana doğru gittikçe kalın yapılır.
**Baraj duvarının bu biçimde yapılmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 440 250" role="img" aria-label="Baraj duvarının kesiti: solda baraj gölünün suyu, duvar üstte ince tabanda kalın"><rect x="20" y="70" width="210" height="150" fill="var(--dolgu)"/><line x1="20" y1="70" x2="230" y2="70" stroke="var(--vurgu)" stroke-width="3"/><polygon points="230,40 270,40 360,220 230,220" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><line x1="10" y1="220" x2="430" y2="220" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="16"><text x="90" y="150">Su</text><text x="280" y="30">Baraj duvarı</text><text x="20" y="245">Taban</text></g></svg>`,
  secenekler: [
    "Suyun duvara uyguladığı basınç derinlik arttıkça arttığı için",
    "Baraj gölünde çok büyük miktarda su biriktiği için",
    "Suyun duvara uyguladığı basınç yüzeye yakın yerde en büyük olduğu için",
    "Suyun basıncı yalnızca duvarın tabanına etki ettiği için"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Miktar yanılgısı: sıvı basıncı suyun miktarına değil derinliğine bağlıdır; göl ne kadar büyük olursa olsun aynı derinlikte basınç aynıdır.",
    "Ters yön: basınç su yüzeyine yakın yerde en küçük, tabanda en büyüktür; duvarın altta kalın olmasının nedeni budur.",
    "Yön yanılgısı: sıvılar yalnızca tabana değil, yan yüzeylere de basınç uygular; su, duvarın gölde kalan her noktasını iter."
  ],
  aciklama: `Sıvı basıncı derinlik arttıkça artar ve sıvı, bulunduğu yerin yan yüzeylerine de basınç uygular.
Adım 1: Baraj gölündeki su, duvarın gölle temas eden bütün yüzeyine basınç uygular.
Adım 2: Su yüzeyine yakın kısımda derinlik az olduğu için basınç küçüktür. Tabana yaklaştıkça derinlik ve basınç artar.
Adım 3: Duvarın en büyük basınca dayanması gereken yeri alt kısmıdır. Bu yüzden duvar tabana doğru kalınlaştırılır.
Sık yapılan hata: Duvarın gölde çok su biriktiği için kalın yapıldığını sanmak. Aynı derinlikteki bir havuzun duvarına da aynı basınç etki eder; belirleyici olan suyun miktarı değil derinliğidir.
Cevap A.`
},
{
  id: "fen-sg-106",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerin hangisi açık hava basıncının etkisiyle gerçekleşir?**",
  gorsel: null,
  secenekler: [
    "Hidrolik liftin otomobili kaldırması",
    "Dalgıcın derinde kulaklarında baskı hissetmesi",
    "Kar ayakkabısının kara batmayı önlemesi",
    "Vantuzun düz bir fayansa yapışması"
  ],
  dogru: 3,
  hatalar: [
    "Sıvıların basıncı iletmesiyle karıştırma: hidrolik lift, kapalı bir sistemdeki sıvının basıncı iletmesine (Pascal prensibi) dayanır.",
    "Sıvı basıncıyla karıştırma: dalgıcın hissettiği baskı, derinlik arttıkça artan su basıncından kaynaklanır.",
    "Katı basıncıyla karıştırma: kar ayakkabısı temas alanını büyütüp kara uygulanan katı basıncını azaltır.",
    null
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğan ve her yöne etki eden basınçtır.
Adım 1: Vantuz fayansa bastırılınca altındaki havanın büyük kısmı dışarı çıkar.
Adım 2: Vantuzun altında çok az hava kalır. Bu yüzden içerideki hava basıncı, dışarıdaki açık hava basıncından küçük olur.
Adım 3: Dışarıdaki açık hava basıncı vantuzu fayansa doğru bastırır; vantuz bu sayede yapışık kalır.
Sık yapılan hata: Vantuzun fayansı "emdiğini" sanmak. Vantuzu yerinde tutan, onu dışarıdan bastıran açık hava basıncıdır.
Cevap D.`
},
{
  id: "fen-sg-107",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Biçimleri farklı K, L ve M kaplarına aynı sudan, görseldeki gibi 20 cm yüksekliğe kadar su konmuştur.
**Buna göre kapların tabanlarına etki eden su basınçları için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 470 260" role="img" aria-label="Geniş K kabı, dar L kabı ve yukarı doğru genişleyen M kabı; üçünde de su yüksekliği 20 cm"><g fill="var(--dolgu)"><rect x="21" y="100" width="128" height="120"/><rect x="201" y="100" width="38" height="120"/><polygon points="341,220 379,220 420,100 300,100"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 60 V220 H150 V60"/><path d="M200 60 V220 H240 V60"/><path d="M286 60 L340 220 H380 L434 60"/></g><g stroke="var(--vurgu)" stroke-width="3"><line x1="20" y1="100" x2="150" y2="100"/><line x1="200" y1="100" x2="240" y2="100"/><line x1="300" y1="100" x2="420" y2="100"/></g><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="165" y1="100" x2="165" y2="220"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="85" y="248">K</text><text x="220" y="248">L</text><text x="360" y="248">M</text><text x="168" y="88">20 cm</text></g></svg>`,
  secenekler: [
    "K'de en büyüktür.",
    "L'de en büyüktür.",
    "Üçünde de eşittir.",
    "M'de en büyüktür."
  ],
  dogru: 2,
  hatalar: [
    "Miktar ve taban alanı yanılgısı: K'de en çok su vardır ve tabanı en geniştir, ama sıvı basıncı suyun miktarına ve taban alanına bağlı değildir.",
    "Darlık yanılgısı: dar kapta suyun tabana daha çok bastırdığını sanma; su yükseklikleri eşit olduğu için taban basınçları da eşittir.",
    null,
    "Kabın biçimine bakma: M'nin ağzı geniş olduğu için üstteki suyun tabana daha çok bastırdığını sanma; aynı derinlikte aynı sıvının basıncı aynıdır."
  ],
  aciklama: `Durgun bir sıvının bir noktadaki basıncı, o noktanın derinliğine ve sıvının cinsine bağlıdır; kabın biçimine bağlı değildir.
Adım 1: Üç kapta da aynı sıvı (su) vardır. Sıvının cinsi aynıdır.
Adım 2: Üç kapta da suyun yüksekliği 20 cm'dir. Yani tabanların derinliği aynıdır.
Adım 3: Derinlik ve sıvının cinsi aynı olduğu için üç kabın tabanındaki su basıncı eşittir.
Sık yapılan hata: Kaptaki suyun miktarına ya da kabın genişliğine bakmak. Kaplardaki su miktarları çok farklıdır ama taban basınçları aynıdır.
Cevap C.`
},
{
  id: "fen-sg-108",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Bir kaptaki durgun sıvı, kabın hangi yüzeylerine basınç uygular?**",
  gorsel: null,
  secenekler: [
    "Yalnızca kabın tabanına",
    "Yalnızca kabın yan yüzeylerine",
    "Kabın tabanına ve bütün yan yüzeylerine",
    "Kabın alt yarısında kalan yüzeylerine"
  ],
  dogru: 2,
  hatalar: [
    "Katılarla karıştırma: katılar ağırlıkları nedeniyle üzerinde durdukları yüzeye basınç uygular; sıvılar ise yanlara da basınç uygular.",
    "Yarım bilgi: sıvının yan yüzeylere basınç uyguladığı doğrudur, ama ağırlığı nedeniyle tabana da basınç uygular.",
    null,
    "Basıncın belli bir derinlikten sonra başladığını sanma: basınç derinlikle artar ama sıvının değdiği her noktada vardır; kabın üst kısmında sıvıyla temas eden yüzeyler de basınç alır."
  ],
  aciklama: `Sıvılar akışkandır; tanecikleri birbirinin üzerinden kayabilir ve birbirini her yönde iter.
Adım 1: Sıvı, ağırlığı nedeniyle kabın tabanına basınç uygular.
Adım 2: Sıvının tanecikleri yanlara doğru da itildiği için sıvı, kabın yan yüzeylerine de basınç uygular.
Adım 3: Bu basınç, sıvıyla temas eden her noktada vardır. Su yüzeyine yakın yerde küçüktür, derinlik arttıkça büyür.
Sağlama: Su dolu bir pet şişenin yan yüzü delinince su yandan fışkırır. Demek ki su, şişenin yan yüzeyine de basınç uygulamaktadır.
Cevap C.`
},
{
  id: "fen-sg-109",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi Pascal prensibinin bir uygulamasıdır?**",
  gorsel: null,
  secenekler: ["Raptiye", "Pipet", "Baraj duvarı", "Berber koltuğu"],
  dogru: 3,
  hatalar: [
    "Katı basıncıyla karıştırma: raptiyenin sivri ucu temas alanını küçültüp katı basıncını artırır.",
    "Açık hava basıncıyla karıştırma: pipetle içerken sıvıyı pipete iten, sıvının yüzeyine etki eden açık hava basıncıdır.",
    "Derinlikle artan sıvı basıncıyla karıştırma: baraj duvarı sıvı basıncıyla ilgilidir, ama dışarıdan uygulanan bir basıncın sıvıyla iletilmesine dayanmaz.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya ve her yöne aynen iletilir.
Adım 1: Pascal prensibinin uygulamalarında kapalı bir sistemde sıvı bulunur. Bir noktadan uygulanan basınç, sıvı aracılığıyla başka bir noktaya iletilir.
Adım 2: Berber koltuğunda pedala basılınca küçük bir piston yağı iter. Yağ bu basıncı koltuğu taşıyan geniş pistona iletir ve koltuk yükselir.
Adım 3: Raptiyede katı basıncı, pipette açık hava basıncı, baraj duvarında derinlikle artan sıvı basıncı söz konusudur. Bunlarda kapalı bir sıvının basıncı iletmesi yoktur.
Sık yapılan hata: Sıvıyla ilgili her uygulamayı Pascal prensibine bağlamak. Baraj duvarı sıvı basıncıyla ilgilidir ama orada basıncı ileten bir piston sistemi yoktur.
Cevap D.`
},
{
  id: "fen-sg-110",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Özdeş iki kaptan birine tatlı su, diğerine tuzlu su konmuştur. İki kapta da sıvının yüksekliği 15 cm'dir. Tuzlu suyun yoğunluğu tatlı suyunkinden büyüktür.
**Buna göre sıvıların kapların tabanına uyguladığı basınçlar için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Tuzlu suyunki büyüktür; çünkü yoğunluğu daha büyüktür.",
    "Tatlı suyunki büyüktür; çünkü yoğunluğu daha küçüktür.",
    "Eşittir; çünkü sıvıların derinlikleri eşittir.",
    "Eşittir; çünkü sıvıların konduğu kaplar özdeştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ters yön: yoğunluk büyüdükçe aynı derinlikteki sıvı basıncı da büyür; yoğunluğu küçük olan tatlı suyun basıncı küçüktür.",
    "Tek değişkene bakma: derinlikler eşittir ama sıvıların cinsi farklıdır; aynı derinlikte yoğunluğu büyük sıvının basıncı büyüktür.",
    "İlgisiz değişkene bakma: kapların özdeş olması sonucu belirlemez; sıvı basıncı sıvının cinsine de bağlıdır."
  ],
  aciklama: `Aynı derinlikte, yoğunluğu büyük olan sıvının basıncı daha büyüktür. Yoğunluk, bir maddenin birim hacminin kütlesidir.
Adım 1: İki kapta sıvıların yükseklikleri eşittir (15 cm). Yani derinlik aynıdır.
Adım 2: Sıvıların cinsi farklıdır. Tuzlu suyun yoğunluğu tatlı suyunkinden büyüktür.
Adım 3: Derinlik aynı olduğunda yoğunluğu büyük sıvının basıncı büyük olur. Tuzlu suyun tabana uyguladığı basınç daha büyüktür.
Sık yapılan hata: Yalnızca derinliğe bakıp basınçları eşit saymak. Sıvı basıncı iki değişkene bağlıdır: derinlik ve sıvının cinsi.
Cevap A.`
},
{
  id: "fen-sg-111",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Görseldeki cam düzenekte biçimleri farklı dört kol, alttan birbirine bağlıdır. Kollardan birinden düzeneğe su dökülmüş ve su durgun hâle gelinceye kadar beklenmiştir.
**Su durgunlaştığında kollardaki su seviyeleri için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 480 250" role="img" aria-label="Alttan birbirine bağlı dört kollu boş cam düzenek: 1. kol geniş, 2. kol dar, 3. kol eğik, 4. kol yukarı doğru genişleyen"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M50 50 V200 H30 V225 H450 V200 H410 L435 50"/><path d="M130 50 V200 H185 V50"/><path d="M205 50 V200 H250 L320 50"/><path d="M345 50 L275 200 H390 L365 50"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="90" y="38">1. kol</text><text x="195" y="38">2. kol</text><text x="332" y="38">3. kol</text><text x="420" y="38">4. kol</text></g></svg>`,
  secenekler: [
    "En geniş kolda en yüksektir.",
    "En dar kolda en yüksektir.",
    "Bütün kollarda aynı yüksekliktedir.",
    "Eğik kolda diğerlerinden alçaktır."
  ],
  dogru: 2,
  hatalar: [
    "Genişlik yanılgısı: geniş kolda daha çok su bulunduğu için seviyenin de yüksek olacağını sanma; seviye kolun genişliğine bağlı değildir.",
    "Darlık yanılgısı: suyun dar kolda daha yükseğe çıkacağını sanma; durgun suyun yüzeyi her kolda aynı yatay düzeyde kalır.",
    null,
    "Eğim yanılgısı: eğik kolda suyun daha uzun yol aldığı için alçakta kalacağını sanma; eğik koldaki su yüzeyi de diğerleriyle aynı düzeydedir."
  ],
  aciklama: `Alttan birbirine bağlı kaplara bileşik kaplar denir. Bileşik kaplara konan durgun bir sıvının yüzeyi, kolların biçimi ne olursa olsun bütün kollarda aynı yükseklikte olur.
Adım 1: Kollar alttan bağlı olduğu için su, düzeneğin tabanında tek bir bütün oluşturur.
Adım 2: Bir kolda su daha yüksek olsaydı o kolun altındaki basınç daha büyük olurdu ve su diğer kollara doğru akardı.
Adım 3: Su ancak bütün kollarda aynı yüksekliğe ulaşınca durgunlaşır.
Sık yapılan hata: Kolun genişliğine ya da biçimine bakarak seviyeyi tahmin etmek. Sıvı basıncı kabın biçimine bağlı olmadığı için seviyeler eşitlenir.
Cevap C.`
},
{
  id: "fen-sg-112",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir balon şişirildiğinde her yöne doğru genişler. Bir bisiklet lastiği şişirildiğinde de lastiğin yalnızca bir bölümü değil, her yeri gerginleşir.
**Bu iki gözlemden gazlarla ilgili hangi sonuca ulaşılabilir?**`,
  gorsel: null,
  secenekler: [
    "Gazlar, bulundukları kabın yalnızca alt yüzeyine basınç uygular.",
    "Gazlar, yalnızca bir yerden bir yere akarken basınç uygular.",
    "Gazlar, bulundukları kabın bütün iç yüzeylerine basınç uygular.",
    "Gazlar, bulundukları kabın biçimine göre tek bir yöne basınç uygular."
  ],
  dogru: 2,
  hatalar: [
    "Katılarla karıştırma: katılar üzerinde durdukları yüzeye basınç uygular; balonun her yöne genişlemesi, gazın her yüzeye basınç uyguladığını gösterir.",
    "Gaz basıncını rüzgârla karıştırma: balonun içindeki hava bir yere akmadığı hâlde balonu gerer; durgun gaz da basınç uygular.",
    null,
    "Tek yön yanılgısı: balon her yöne genişlediğine göre gaz basıncı tek bir yönde değil, her yönde etkilidir."
  ],
  aciklama: `Gazlar da sıvılar gibi akışkandır ve bulundukları kabın her yüzeyine basınç uygular.
Adım 1: Balon her yöne genişliyorsa, içindeki hava balonun her noktasını dışarı doğru itiyordur.
Adım 2: Lastiğin her yerinin gerginleşmesi de havanın lastiğin bütün iç yüzeyine basınç uyguladığını gösterir.
Adım 3: Öyleyse gazlar, sıvılara benzer şekilde, bulundukları kabın bütün iç yüzeylerine basınç uygular.
Sık yapılan hata: Gaz basıncını yalnızca rüzgâr gibi hareket eden havayla ilişkilendirmek. Kapalı bir kaptaki durgun hava da kabın her yüzeyine basınç uygular.
Cevap C.`
},
{
  id: "fen-sg-113",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Ayşe, plastik bir şişenin yan yüzeyine, tabandan aynı yükseklikte ve farklı yönlere bakan üç delik açmıştır. Delikleri kapatıp şişeyi suyla doldurmuş, sonra üç deliği aynı anda açmıştır. Su üç delikten de aynı hızla fışkırmış, şişedeki su seviyesi düştükçe akış yavaşlamıştır. Ayşe şu yargıları yazmıştır:
I. Su, şişenin yan yüzeylerine tabanına uyguladığından daha büyük basınç uygular.
II. Aynı derinlikteki noktalarda su basıncı her yönde eşittir.
III. Şişedeki su seviyesi düştükçe deliklere etki eden su basıncı azalır.
**Buna göre Ayşe'nin yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Ters değerlendirme: en büyük basınç en derindeki noktalara, yani tabana etki eder; yan yüzeylerdeki basınç tabandakinden büyük değildir.",
    "Eksik değerlendirme: II doğrudur, ama su seviyesi düştükçe deliklerin derinliği azalır; akışın yavaşlaması III'ün de doğru olduğunu gösterir.",
    "Yan yüzey basıncını abartma: III doğrudur ama I yanlıştır; tabandaki noktalar deliklerden daha derinde olduğu için basınç tabanda daha büyüktür.",
    null
  ],
  aciklama: `Sıvı basıncı derinlikle artar ve aynı derinlikte her yönde eşittir.
Adım 1: I. yargıyı kontrol et. Taban, şişedeki suyun en derin yeridir. Yan yüzeydeki hiçbir nokta tabandan daha derinde değildir. Bu yüzden yan yüzeylere etki eden basınç tabandakinden büyük olamaz. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Delikler aynı derinlikte ve farklı yönlere bakıyor. Su üç delikten aynı hızla fışkırdığına göre her yöndeki basınç eşittir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Su seviyesi düştükçe delikler su yüzeyine yaklaşır, yani derinlikleri azalır. Akışın yavaşlaması basıncın azaldığını gösterir. Doğrudur.
Sık yapılan hata: Suyun yandan fışkırdığını görünce yan yüzeylerdeki basıncın daha büyük olduğunu sanmak. Su yandan çıkıyor çünkü delik yandadır; en büyük basınç yine en derindedir.
Cevap D.`
},
{
  id: "fen-sg-114",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir akvaryumdaki suyun yüksekliği 40 cm'dir. Akvaryumdaki X, Y ve Z noktalarının akvaryumun tabanından yükseklikleri görselde verilmiştir. Y noktası akvaryumun yan camının hemen yanında, Z noktası ise akvaryumun ortasındadır.
**Buna göre X, Y ve Z noktalarındaki su basınçlarının karşılaştırması aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Su yüksekliği 40 cm olan akvaryum; X noktası tabandan 30 cm, Y noktası yan camın yanında ve Z noktası ortada tabandan 15 cm yukarıda"><rect x="61" y="40" width="378" height="180" fill="var(--dolgu)"/><g fill="none" stroke="currentColor" stroke-width="2"><path d="M60 20 V220 H440 V20"/></g><line x1="60" y1="40" x2="440" y2="40" stroke="var(--vurgu)" stroke-width="3"/><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="150" y1="85" x2="150" y2="220"/><line x1="415" y1="152" x2="415" y2="220"/><line x1="260" y1="152" x2="260" y2="220"/><line x1="470" y1="40" x2="470" y2="220"/></g><g fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"><circle cx="150" cy="85" r="7"/><circle cx="415" cy="152" r="7"/><circle cx="260" cy="152" r="7"/></g><g fill="currentColor" font-size="16"><text x="135" y="72">X</text><text x="398" y="140">Y</text><text x="254" y="140">Z</text><text x="158" y="170">30 cm</text><text x="268" y="195">15 cm</text><text x="350" y="195">15 cm</text><text x="476" y="135">40 cm</text></g><line x1="40" y1="220" x2="460" y2="220" stroke="currentColor" stroke-width="2"/></svg>`,
  secenekler: ["X < Y = Z", "X > Y = Z", "X = Y = Z", "X < Y < Z"],
  dogru: 0,
  hatalar: [
    null,
    "Derinliği tabandan ölçme: X tabandan en yüksekte olduğu için basıncını büyük sanma; derinlik su yüzeyinden ölçülür ve X en sığ noktadır.",
    "Aynı sıvıda her noktada basıncın eşit olduğunu sanma: aynı akvaryumda bile derinlik arttıkça basınç artar.",
    "Konum yanılgısı: Z ortada olduğu için üzerinde daha çok su bulunduğunu sanma; Y ile Z aynı derinlikte olduğu için basınçları eşittir."
  ],
  aciklama: `Sıvı basıncı derinliğe bağlıdır. Derinlik, sıvının açık yüzeyinden o noktaya kadar aşağı doğru ölçülür; tabandan ölçülmez.
Adım 1: Her noktanın su yüzeyinden derinliğini bul. Su 40 cm yüksekliğinde.
X: 40 − 30 = 10 cm. Y: 40 − 15 = 25 cm. Z: 40 − 15 = 25 cm.
Adım 2: Y ile Z'nin derinlikleri eşittir. Noktanın camın yanında ya da ortada olması basıncı değiştirmez. Y ile Z'deki basınçlar eşittir.
Adım 3: X en sığ noktadır, basıncı en küçüktür. Sıralama: X < Y = Z.
Sık yapılan hata: Görseldeki yükseklikleri derinlik sanmak. Tabandan yüksekte olan nokta, su yüzeyine daha yakındır ve basıncı daha küçüktür.
Cevap A.`
},
{
  id: "fen-sg-115",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Görselde bir hidrolik krikonun basit çizimi verilmiştir. Kapalı sistemdeki yağ, dar pistonu geniş pistona bağlamaktadır. Dar pistona aşağı doğru kuvvet uygulandığında geniş piston, üzerindeki otomobili yukarı kaldırmaktadır.
**Buna göre geniş pistondaki basınç ve geniş pistonu iten kuvvet, dar pistondakilerle karşılaştırıldığında aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 520 270" role="img" aria-label="Hidrolik kriko: solda aşağı itilen dar piston, sağda üzerinde otomobil bulunan geniş piston, aralarında yağ dolu bağlantı"><g fill="var(--dolgu)"><rect x="61" y="110" width="38" height="120"/><rect x="99" y="200" width="242" height="30"/><rect x="341" y="130" width="138" height="100"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M60 70 V230 H480 V90"/><path d="M100 70 V200 H340 V90"/></g><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><rect x="62" y="100" width="36" height="10"/><rect x="342" y="120" width="136" height="10"/></g><g fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"><rect x="360" y="70" width="100" height="40" rx="8"/><circle cx="380" cy="112" r="8"/><circle cx="440" cy="112" r="8"/></g><line x1="80" y1="30" x2="80" y2="88" stroke="currentColor" stroke-width="3"/><polygon points="72,86 88,86 80,98" fill="currentColor"/><g fill="currentColor" font-size="15"><text x="92" y="40">Kuvvet</text><text x="8" y="160">Dar</text><text x="8" y="178">piston</text><text x="200" y="250">Yağ</text><text x="380" y="58">Otomobil</text><text x="355" y="180">Geniş piston</text></g></svg>`,
  secenekler: [
    "Basınç daha büyük, kuvvet daha büyük",
    "Basınç eşit, kuvvet daha büyük",
    "Basınç eşit, kuvvet eşit",
    "Basınç daha küçük, kuvvet eşit"
  ],
  dogru: 1,
  hatalar: [
    "Basınç ile kuvveti karıştırma: geniş pistonda kuvvet büyür ama basınç büyümez; yağ, dar pistondaki basıncı aynen iletir.",
    null,
    "Kuvvet kazancını gözden kaçırma: basınç eşittir ama geniş pistonun yüzeyi büyük olduğu için ona etki eden kuvvet de büyüktür.",
    "Basıncın geniş yüzeye yayılırken azaldığını sanma: sıvı basıncı azaltmadan iletir; geniş pistonu iten kuvvet de dar pistondakinden büyüktür."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya aynen iletilir. Basınç, birim yüzeye dik olarak etki eden kuvvettir.
Adım 1: Dar pistona kuvvet uygulanınca yağda bir basınç oluşur. Yağ bu basıncı geniş pistona aynen iletir. Basınçlar eşittir.
Adım 2: Geniş pistonun yüzeyi çok daha büyüktür. Aynı basınç daha büyük bir yüzeyin her parçasına etki ettiği için geniş pistonu iten toplam kuvvet daha büyük olur.
Adım 3: Bu sayede küçük bir kuvvetle ağır bir otomobil kaldırılabilir.
Sık yapılan hata: Kuvvetin büyüdüğünü görünce basıncın da büyüdüğünü sanmak. Hidrolik sistemde basınç aynı kalır, kuvvet büyür.
Cevap B.`
},
{
  id: "fen-sg-116",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Deniz kıyısındaki bir marketten alınan ağzı kapalı bir cips paketi, arabayla yüksek bir yaylaya çıkıldığında şişkinleşmiştir. Paket yolculuk boyunca hiç açılmamış ve delinmemiştir. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. Yaylada açık hava basıncı, deniz kıyısındakinden küçüktür.
II. Paket, dışarıdan etki eden hava basıncı içerideki havanın basıncından küçük kaldığı için şişkinleşmiştir.
III. Yolculuk sırasında paketin içindeki hava miktarı artmıştır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: I doğrudur ama II de doğrudur; paket, dışarıdan bastıran hava basıncı azaldığı için şişer.",
    "Eksik değerlendirme: II doğrudur ama I de doğrudur; yükseklere çıkıldıkça açık hava basıncı azalır.",
    null,
    "Kapalı paketi gözden kaçırma: paket açılmamış ve delinmemiştir; içine hava giremez, yani hava miktarı artmaz."
  ],
  aciklama: `Açık hava basıncı, hava tabakasının ağırlığından doğan basınçtır ve yükseklere çıkıldıkça azalır.
Adım 1: I. yargıyı kontrol et. Yayla deniz kıyısından yüksektir. Üstte kalan hava tabakası daha ince olduğu için açık hava basıncı daha küçüktür. Doğrudur.
Adım 2: II. yargıyı kontrol et. Paketin içindeki hava, paketi içeriden dışarı doğru iter; açık hava ise dışarıdan içeri doğru bastırır. Yaylada dışarıdaki basınç azaldığı için içerideki hava paketi şişirir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Paket kapalıdır ve delinmemiştir. İçine hava girmesi mümkün değildir. Paket hava eklendiği için değil, dışarıdaki basınç azaldığı için şişmiştir. Yanlıştır.
Sık yapılan hata: Şişen paketi görünce içine hava girdiğini düşünmek. Değişen, paketin içi değil, paketi dışarıdan bastıran açık hava basıncıdır.
Cevap C.`
},
{
  id: "fen-sg-117",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir dalgıç denizde görseldeki yolu izlemiştir. Önce 1. noktadan 2. noktaya dikey olarak inmiş, sonra 2. noktadan 3. noktaya aynı derinlikte yatay olarak yüzmüş, en son 3. noktadan 4. noktaya dikey olarak yükselmiştir.
**Dalgıca etki eden su basıncı bu üç bölümde sırasıyla nasıl değişmiştir?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Deniz yüzeyinin altında dalgıcın yolu: 1. nokta 5 m, 2. ve 3. noktalar 15 m, 4. nokta 8 m derinlikte"><rect x="20" y="40" width="480" height="210" fill="var(--dolgu)"/><line x1="20" y1="40" x2="500" y2="40" stroke="var(--vurgu)" stroke-width="3"/><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="120" y1="80" x2="120" y2="196"/><line x1="120" y1="200" x2="376" y2="200"/><line x1="380" y1="200" x2="380" y2="110"/></g><g fill="currentColor"><polygon points="113,186 127,186 120,198"/><polygon points="366,193 366,207 378,200"/><polygon points="373,118 387,118 380,106"/></g><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"><circle cx="120" cy="80" r="7"/><circle cx="120" cy="200" r="7"/><circle cx="380" cy="200" r="7"/><circle cx="380" cy="104" r="7"/></g><g fill="currentColor" font-size="15"><text x="30" y="30">Deniz yüzeyi</text><text x="132" y="78">1. nokta (5 m)</text><text x="132" y="230">2. nokta (15 m)</text><text x="300" y="230">3. nokta (15 m)</text><text x="392" y="100">4. nokta (8 m)</text></g></svg>`,
  secenekler: [
    "Artmış, değişmemiş, azalmış",
    "Artmış, artmış, azalmış",
    "Azalmış, değişmemiş, artmış",
    "Artmış, değişmemiş, artmış"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yatay yolu derinleşme sanma: 2. noktadan 3. noktaya giderken dalgıç yol almıştır ama derinliği değişmemiştir; basınç da değişmez.",
    "Ters yön: aşağı inerken derinlik artar, basınç da artar; yükselirken derinlik azalır, basınç da azalır.",
    "Hareket etmeyi basınç artışı sanma: 3. noktadan 4. noktaya çıkarken derinlik 15 m'den 8 m'ye azalır; basınç da azalır."
  ],
  aciklama: `Sıvı basıncı yalnızca derinliğe ve sıvının cinsine bağlıdır. Aynı denizde derinlik artarsa basınç artar, derinlik azalırsa basınç azalır.
Adım 1: 1. noktadan 2. noktaya inerken derinlik 5 m'den 15 m'ye çıkar. Basınç artar.
Adım 2: 2. noktadan 3. noktaya yatay yüzerken derinlik hep 15 m'dir. Basınç değişmez.
Adım 3: 3. noktadan 4. noktaya yükselirken derinlik 15 m'den 8 m'ye iner. Basınç azalır.
Sık yapılan hata: Dalgıcın aldığı yolun uzunluğuna bakmak. Yatay yönde ne kadar yüzülürse yüzülsün derinlik aynı kaldıkça basınç da aynı kalır.
Cevap A.`
},
{
  id: "fen-sg-118",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Ece, sıvı basıncının sıvının cinsine bağlı olup olmadığını test etmek istemektedir. Bunun için kapların tabanındaki sıvı basıncını ölçebilen bir basınç ölçer kullanacaktır.
**Ece'nin bu amaçla yapacağı deney aşağıdakilerden hangisi olmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Aynı sıvıyı özdeş iki kaba farklı yüksekliklerde koyup taban basınçlarını karşılaştırmak",
    "Su ve zeytinyağını özdeş iki kaba farklı yüksekliklerde koyup taban basınçlarını karşılaştırmak",
    "Aynı sıvıyı biçimleri farklı iki kaba aynı yükseklikte koyup taban basınçlarını karşılaştırmak",
    "Su ve zeytinyağını özdeş iki kaba aynı yükseklikte koyup taban basınçlarını karşılaştırmak"
  ],
  dogru: 3,
  hatalar: [
    "Yanlış bağımsız değişken: bu deneyde sıvının cinsi değil derinlik değişir; yalnızca derinliğin etkisi test edilir.",
    "İki değişkeni birlikte değiştirme: hem sıvının cinsi hem derinlik değiştiği için ölçülen farkın hangisinden kaynaklandığı bilinemez.",
    "Yanlış bağımsız değişken: bu deneyde sıvının cinsi değil kabın biçimi değişir; sıvının cinsinin etkisi test edilmez.",
    null
  ],
  aciklama: `Bir değişkenin etkisini test etmek için yalnızca o değişken değiştirilir, diğer değişkenler sabit tutulur. Değiştirilen değişkene bağımsız değişken, sabit tutulanlara kontrol değişkeni denir.
Adım 1: Ece'nin test etmek istediği değişken sıvının cinsidir. Öyleyse kaplara farklı sıvılar konmalıdır.
Adım 2: Sıvı basıncını etkileyen diğer değişken derinliktir. Derinlik sabit tutulmalı, yani sıvılar aynı yükseklikte olmalıdır.
Adım 3: Bu koşulları yalnızca "su ve zeytinyağını özdeş iki kaba aynı yükseklikte koymak" sağlar.
Sık yapılan hata: Farklı sıvılar kullanmayı yeterli sanıp derinliği de değiştirmek. İki değişken birlikte değişirse sonuç hangisinin etkisi olduğunu göstermez.
Cevap D.`
},
{
  id: "fen-sg-119",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Otomobillerin hidrolik fren sisteminde sürücü fren pedalına bastığında, pedala bağlı küçük bir piston borulardaki fren yağını iter. Fren yağı, tekerleklerin yanındaki pistonları iterek fren balatalarını tekerleğe bastırır ve otomobil yavaşlar. Bu sistemle ilgili şu yargılar ileri sürülmüştür:
I. Pedala bağlı pistonun yağa uyguladığı basınç, yağ aracılığıyla tekerleklerdeki pistonlara iletilir.
II. Borulardaki fren yağı yerine hava kullanılsaydı sistem aynı biçimde çalışırdı.
III. Pedala daha büyük kuvvetle basılırsa tekerleklerdeki pistonlara iletilen basınç da artar.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: I doğrudur ama III de doğrudur; pedaldaki basınç artarsa tekerleklere iletilen basınç da aynı ölçüde artar.",
    "Gazların sıkıştırılabildiğini gözden kaçırma: borularda hava olsaydı pedala basınca önce hava sıkışırdı; fren aynı biçimde çalışmazdı.",
    null,
    "I'i atlayıp II'yi doğru sayma: yağ, pedaldaki basıncı tekerleklere iletir (I doğru); hava ise sıkıştırılabildiği için yağın yerini tutamaz (II yanlış)."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya aynen iletilir. Hidrolik fren bu prensiple çalışır.
Adım 1: I. yargıyı kontrol et. Fren yağı kapalı borularda bulunan bir sıvıdır. Pedala bağlı pistonun oluşturduğu basıncı tekerleklerdeki pistonlara iletir. Doğrudur.
Adım 2: II. yargıyı kontrol et. Sıvılar neredeyse hiç sıkıştırılamaz, gazlar ise kolayca sıkıştırılır. Borularda hava olsaydı pedala basıldığında hava sıkışır, balatalar tekerleğe yeterince bastırılamazdı. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Pedala daha büyük kuvvetle basılırsa küçük pistonun yağa uyguladığı basınç artar. Yağ bu basıncı aynen ilettiği için tekerleklerdeki basınç da artar. Doğrudur.
Sık yapılan hata: Hava ile sıvıyı aynı saymak. Hidrolik sistemlerde sıvı kullanılmasının nedeni sıvıların sıkıştırılamamasıdır.
Cevap C.`
},
{
  id: "fen-sg-120",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Görseldeki çaydanlığın gövdesi ile emziği alttan birbirine bağlıdır. Çaydanlığın tabanından gövdenin ağzına kadar olan yükseklik 24 cm, emziğin ağzına kadar olan yükseklik 18 cm'dir.
**Buna göre bu çaydanlığa, emzikten su taşmadan en fazla kaç cm yüksekliğe kadar su konabilir?**`,
  gorsel: `<svg viewBox="0 0 520 280" role="img" aria-label="Çaydanlık: tabandan gövde ağzına 24 cm, emzik ağzına 18 cm"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M140 60 V240 H300 V60"/><path d="M300 190 L380 105"/><path d="M300 222 L398 105"/><path d="M140 100 C90 100 90 200 140 200"/></g><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="140" y1="60" x2="40" y2="60"/><line x1="398" y1="105" x2="470" y2="105"/><line x1="40" y1="240" x2="470" y2="240"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="50" y1="64" x2="50" y2="236"/><line x1="460" y1="109" x2="460" y2="236"/></g><g fill="currentColor"><polygon points="45,70 55,70 50,60"/><polygon points="45,230 55,230 50,240"/><polygon points="455,115 465,115 460,105"/><polygon points="455,230 465,230 460,240"/></g><g fill="currentColor" font-size="16"><text x="56" y="155">24 cm</text><text x="405" y="175">18 cm</text><text x="180" y="45">Gövde ağzı</text><text x="370" y="90">Emzik ağzı</text></g></svg>`,
  secenekler: ["6 cm", "18 cm", "21 cm", "24 cm"],
  dogru: 1,
  hatalar: [
    "İki yüksekliğin farkını alma: 24 − 18 = 6 cm, gövde ağzı ile emzik ağzı arasındaki farktır; konabilecek suyun yüksekliği değildir.",
    null,
    "Seviyenin iki ağız arasında bir yerde dengeleneceğini sanma: gövde ve emzik bileşik kaptır; gövdedeki su, emzikteki suyun düzeyinden yükseğe çıkamaz.",
    "Gövdenin ağzını sınır sanma: su 18 cm'yi geçerse emzikteki su da 18 cm'yi geçer ve emzikten dışarı taşar."
  ],
  aciklama: `Alttan birbirine bağlı kaplara bileşik kaplar denir. Bileşik kaplarda durgun suyun yüzeyi bütün kollarda aynı yükseklikte olur.
Adım 1: Çaydanlığın gövdesi ile emziği alttan bağlıdır; ikisi bileşik kap gibi davranır.
Adım 2: Gövdeye su konuldukça emzikteki su da gövdedekiyle aynı yüksekliğe çıkar.
Adım 3: Emziğin ağzı 18 cm yüksekliktedir. Su 18 cm'yi geçerse emzikten dışarı taşar. Bu yüzden gövdenin ağzı 24 cm'de olsa bile en fazla 18 cm yüksekliğe kadar su konabilir.
Sağlama: Emziği gövdeden alçak yapılmış bir çaydanlık hiçbir zaman ağzına kadar doldurulamaz. Bu yüzden iyi tasarlanmış çaydanlıklarda emziğin ağzı gövdenin ağzına yakın yükseklikte olur.
Cevap B.`
},
{
  id: "fen-sg-121",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Hastanelerde serum torbası, bir hortumla hastanın koluna bağlanır ve koldan yüksekte bir askıya asılır. Hemşire, serumun daha hızlı akması gerektiğinde torbayı daha yükseğe asmaktadır.
**Torba yükseltildiğinde serumun daha hızlı akmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Torba ile kol arasındaki yükseklik farkı arttıkça koldaki iğneye etki eden sıvı basıncı artar.",
    "Torba yükseldikçe torbadaki serumun miktarı artar ve iğneye daha çok serum gider.",
    "Torba yükseldikçe serumun yoğunluğu artar ve iğneye etki eden basınç büyür.",
    "Torba yükseldikçe serumun yüzeyine etki eden açık hava basıncı artar."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Miktar yanılgısı: torbayı yükseltmek içindeki serumu çoğaltmaz; sıvı basıncı da miktara değil yükseklik farkına (derinliğe) bağlıdır.",
    "Sıvının cinsiyle karıştırma: serumun yoğunluğu, torba nereye asılırsa asılsın aynıdır; değişen yalnızca yükseklik farkıdır.",
    "Ters yön: yükseldikçe açık hava basıncı artmaz, azalır; üstelik birkaç on santimetrelik yükselmede bu değişim çok küçüktür."
  ],
  aciklama: `Sıvı basıncı derinlikle artar. Bir hortumdaki sıvıda, bir noktanın basıncı o nokta ile sıvının yüzeyi arasındaki dikey yükseklik farkına bağlıdır.
Adım 1: Koldaki iğne, torbadaki serumun yüzeyinden aşağıdadır. Aradaki dikey yükseklik farkı, iğnenin "derinliği" gibi düşünülebilir.
Adım 2: Torba daha yükseğe asılınca bu yükseklik farkı artar.
Adım 3: Yükseklik farkı arttıkça iğnedeki serum basıncı artar ve serum damara daha hızlı akar.
Sık yapılan hata: Torbadaki serumun miktarına bakmak. Torbada aynı miktar serum olsa da yükseklik farkı büyüdükçe basınç artar.
Cevap A.`
},
{
  id: "fen-sg-122",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Su dolu, kapalı bir kabın sol yüzeyinde P pistonu vardır. Kabın üst yüzeyinde X, sağ yüzeyinde Y, alt yüzeyinde Z pistonu bulunmaktadır. P pistonu görseldeki gibi sağa doğru itilmektedir.
**Buna göre P pistonu itildiğinde X, Y ve Z pistonlarından hangilerine etki eden su basıncı artar?**`,
  gorsel: `<svg viewBox="0 0 520 280" role="img" aria-label="Su dolu kapalı kap: solda sağa itilen P pistonu, üstte X, sağda Y, altta Z pistonu"><g fill="var(--dolgu)"><rect x="141" y="81" width="258" height="118"/><rect x="246" y="60" width="28" height="21"/><rect x="400" y="121" width="20" height="38"/><rect x="246" y="199" width="28" height="21"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M140 80 H245 V45 M275 45 V80 H400 V120 H435 M435 160 H400 V200 H275 V235 M245 235 V200 H140 V182 M140 98 V80"/></g><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><rect x="143" y="100" width="12" height="80"/><rect x="246" y="50" width="28" height="10"/><rect x="420" y="121" width="10" height="38"/><rect x="246" y="220" width="28" height="10"/></g><line x1="70" y1="140" x2="143" y2="140" stroke="currentColor" stroke-width="3"/><polygon points="100,130 100,150 116,140" fill="currentColor"/><g fill="currentColor" font-size="16"><text x="60" y="125">P</text><text x="285" y="58">X</text><text x="445" y="145">Y</text><text x="285" y="232">Z</text><text x="260" y="150">Su</text></g></svg>`,
  secenekler: ["Yalnız Y", "X ve Y", "Y ve Z", "X, Y ve Z"],
  dogru: 3,
  hatalar: [
    "Basıncın yalnızca itme yönünde iletildiğini sanma: Y, P'nin tam karşısındadır ama sıvı basıncı yalnızca karşı yöne değil, her yöne iletir.",
    "Aşağı yönü atlama: sıvı, basıncı karşıya ve yukarıya olduğu gibi aşağıya da iletir; Z'ye etki eden basınç da artar.",
    "Yukarı yönü atlama: sıvının basıncı yukarıya iletemeyeceğini sanma; X'e etki eden basınç da artar.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya ve her yöne aynen iletilir.
Adım 1: P pistonu sağa itilince suya bir basınç uygulanır.
Adım 2: Su sıkıştırılamadığı için bu basıncı yalnızca karşı yüzeye değil, yukarıya, aşağıya ve yanlara da iletir.
Adım 3: Kabın her noktasındaki basınç aynı miktarda artar. Bu yüzden X, Y ve Z pistonlarının üçüne de etki eden su basıncı artar.
Sık yapılan hata: Sıvıyı katı bir çubuk gibi düşünüp basıncın yalnızca itme yönünde iletildiğini sanmak. Katı bir çubuk itildiği yönde iletir; sıvı ise her yöne iletir.
Cevap D.`
},
{
  id: "fen-sg-123",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Bir mahallenin suyu, tepedeki bir su kulesinden borularla evlere dağıtılmaktadır. Görselde kuledeki su seviyesinin ve bir apartmanın 1. ve 4. katlarındaki muslukların yerden yükseklikleri verilmiştir. Musluklar kapalıyken bu düzenekle ilgili şu yargılar ileri sürülmüştür:
I. Kuledeki su seviyesi yine 40 m'de kalmak koşuluyla kule daha geniş yapılıp içine daha çok su konsa musluklara etki eden su basıncı artar.
II. 1. kattaki musluğa etki eden su basıncı, 4. kattaki musluğa etki edenden büyüktür.
III. Kuledeki su seviyesi yükselirse musluklara etki eden su basıncı azalır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 290" role="img" aria-label="Su kulesi ve apartman: kuledeki su seviyesi yerden 40 m, 4. kat musluğu 12 m, 1. kat musluğu 3 m yükseklikte"><rect x="61" y="51" width="78" height="39" fill="var(--dolgu)"/><line x1="60" y1="50" x2="140" y2="50" stroke="var(--vurgu)" stroke-width="3"/><g fill="none" stroke="currentColor" stroke-width="2"><path d="M60 30 V90 H140 V30"/><path d="M80 90 V260 M120 90 V260"/><path d="M100 90 V252 H325 V197 H350 M325 244 H350"/><rect x="290" y="176" width="60" height="84"/></g><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"><rect x="350" y="191" width="16" height="12"/><rect x="350" y="238" width="16" height="12"/></g><line x1="20" y1="260" x2="500" y2="260" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="15"><text x="150" y="55">Su seviyesi: 40 m</text><text x="374" y="202">4. kat: 12 m</text><text x="374" y="249">1. kat: 3 m</text><text x="40" y="282">Su kulesi</text><text x="280" y="282">Apartman</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Miktar yanılgısı: su seviyesi 40 m'de kaldıkça kuledeki su ne kadar çok olursa olsun musluklardaki basınç değişmez; basınç suyun miktarına değil yükseklik farkına bağlıdır.",
    null,
    "Miktar yanılgısı ve ters yön: I yanlıştır; III de yanlıştır, çünkü kuledeki su seviyesi yükselirse musluklardaki basınç azalmaz, artar.",
    "Ters yön: II doğrudur ama III yanlıştır; kuledeki su seviyesi yükselirse musluk ile su yüzeyi arasındaki yükseklik farkı büyür, basınç artar."
  ],
  aciklama: `Kapalı bir musluğa etki eden su basıncı, musluk ile kuledeki su yüzeyi arasındaki dikey yükseklik farkına bağlıdır. Bu fark, musluğun su yüzeyine göre derinliği gibi düşünülür.
Adım 1: I. yargıyı kontrol et. Kule genişletilip içine daha çok su konsa da su seviyesi 40 m'de kalıyor. Su miktarı artsa da musluklarla su yüzeyi arasındaki yükseklik farkı değişmez, basınç değişmez. Yanlıştır.
Adım 2: II. yargıyı kontrol et. 1. kattaki musluk 40 − 3 = 37 m, 4. kattaki musluk 40 − 12 = 28 m aşağıdadır. 1. kattaki musluğun "derinliği" daha fazladır, basıncı daha büyüktür. Doğrudur.
Adım 3: III. yargıyı kontrol et. Su seviyesi yükselirse musluklarla su yüzeyi arasındaki yükseklik farkı artar. Basınç azalmaz, artar. Yanlıştır.
Sık yapılan hata: Kuledeki suyun miktarını basınçla ilişkilendirmek. Su kuleleri, suya basınç kazandırmak için geniş değil yüksek yapılır.
Cevap B.`
},
{
  id: "fen-sg-124",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Geniş bir leğene 10 cm, ince uzun bir vazoya 25 cm yüksekliğinde su konmuştur. Leğendeki su, vazodaki sudan çok daha fazladır. Bu kaplarla ilgili şu yargılar ileri sürülmüştür:
I. Leğendeki su daha fazla olduğu için leğenin tabanına etki eden su basıncı daha büyüktür.
II. Leğenin tabanı daha geniş olduğu için leğenin tabanına etki eden su basıncı daha büyüktür.
III. Vazonun tabanına etki eden su basıncı, leğenin tabanına etki edenden büyüktür.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "Miktar yanılgısı: sıvı basıncı kaptaki suyun miktarına bağlı değildir; leğende çok su olsa da derinlik yalnızca 10 cm'dir.",
    null,
    "Miktar ve taban alanı yanılgısı birlikte: iki gerekçe de sıvı basıncını belirlemez; belirleyici olan derinliktir ve vazodaki su daha derindir.",
    "Taban alanı yanılgısı ve doğru yargı: III doğrudur ama II yanlıştır; sıvı basıncı kabın taban alanına bağlı değildir. Üstelik II ile III birbiriyle çelişir, ikisi birlikte doğru olamaz."
  ],
  aciklama: `Aynı sıvıda taban basıncını belirleyen, sıvının derinliğidir. Sıvının miktarı ve kabın taban alanı taban basıncını değiştirmez.
Adım 1: I. yargıyı kontrol et. Leğendeki su fazladır ama derinliği 10 cm'dir. Sıvı basıncı miktara bağlı olmadığı için bu gerekçe yanlıştır. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Taban alanı katı basıncını etkiler; sıvı basıncını etkilemez. Yanlıştır.
Adım 3: III. yargıyı kontrol et. İki kapta da aynı sıvı (su) vardır. Vazodaki su 25 cm, leğendeki su 10 cm derinliktedir. Derinliği fazla olan vazonun tabanındaki basınç daha büyüktür. Doğrudur.
Sık yapılan hata: "Çok su, çok basınç" diye düşünmek. Az su, ince ve uzun bir kapta daha derin olduğu için daha büyük basınç oluşturabilir.
Cevap B.`
},
{
  id: "fen-sg-125",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Mert, bir ucuna ince lastik zar gerilmiş cam boruyu, zarlı ucu aşağıda olacak biçimde su dolu bir akvaryuma sırasıyla 5 cm, 10 cm ve 15 cm derinliğe daldırmıştır. Her seferinde zarın içeri doğru ne kadar çöktüğünü ölçmüş, bütün ölçümleri aynı akvaryumda yapmıştır.
**Bu deneyin bağımsız, bağımlı ve kontrol değişkenleri aşağıdakilerin hangisinde doğru verilmiştir?** (Şıklarda değişkenler bu sırayla yazılmıştır.)`,
  gorsel: null,
  secenekler: [
    "Daldırma derinliği / Zarın çökme miktarı / Sıvının cinsi",
    "Zarın çökme miktarı / Daldırma derinliği / Sıvının cinsi",
    "Sıvının cinsi / Zarın çökme miktarı / Daldırma derinliği",
    "Daldırma derinliği / Sıvının cinsi / Zarın çökme miktarı"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bağımsız ile bağımlı değişkeni ters kurma: Mert'in kendisinin değiştirdiği derinliktir; ölçtüğü sonuç ise zarın çökmesidir.",
    "Kontrol değişkeni ile bağımsız değişkeni karıştırma: deneyde sıvının cinsi hiç değişmemiştir; değiştirilen derinliktir.",
    "Bağımlı ile kontrol değişkenini karıştırma: zarın çökmesi ölçülen sonuçtur (bağımlı); sabit tutulan ise sıvının cinsidir (kontrol)."
  ],
  aciklama: `Bağımsız değişken deneyi yapanın kendisinin değiştirdiği, bağımlı değişken bu değişikliğe bağlı olarak ölçülen, kontrol değişkeni ise deney boyunca sabit tutulan değişkendir.
Adım 1: Mert, boruyu 5 cm, 10 cm ve 15 cm derinliğe daldırmıştır. Kendisinin değiştirdiği değişken daldırma derinliğidir. Bağımsız değişken budur.
Adım 2: Her derinlikte zarın ne kadar çöktüğünü ölçmüştür. Zarın çökme miktarı, sıvı basıncının göstergesidir ve bağımlı değişkendir.
Adım 3: Bütün ölçümler aynı akvaryumdaki suyla yapılmıştır. Sıvının cinsi sabit tutulmuştur; kontrol değişkeni budur.
Sağlama: Deneyin sorusu "Derinlik değişince zarın çökmesi nasıl değişir?" diye okunabiliyorsa değişkenler doğru seçilmiştir.
Cevap A.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "fen-sg-201",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Genişlikleri farklı K, L ve M kaplarına görseldeki sıvılar, görseldeki yüksekliklerde konmuştur. Zeytinyağının yoğunluğu suyun yoğunluğundan küçüktür.
**Buna göre kapların tabanına etki eden sıvı basınçlarının karşılaştırması aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 500 270" role="img" aria-label="K kabı dar ve 30 cm su, L kabı geniş ve 20 cm zeytinyağı, M kabı orta genişlikte ve 20 cm su içerir"><g fill="var(--dolgu)"><rect x="41" y="80" width="48" height="150"/><rect x="351" y="130" width="78" height="100"/></g><rect x="151" y="130" width="138" height="100" fill="var(--vurgu2)" fill-opacity="0.35"/><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40 50 V230 H90 V50"/><path d="M150 50 V230 H290 V50"/><path d="M350 50 V230 H430 V50"/></g><g stroke="var(--vurgu)" stroke-width="3"><line x1="40" y1="80" x2="90" y2="80"/><line x1="150" y1="130" x2="290" y2="130"/><line x1="350" y1="130" x2="430" y2="130"/></g><g fill="currentColor" font-size="15"><text x="96" y="160">30 cm</text><text x="296" y="185">20 cm</text><text x="436" y="185">20 cm</text><text x="30" y="255">K: Su</text><text x="160" y="255">L: Zeytinyağı</text><text x="355" y="255">M: Su</text></g></svg>`,
  secenekler: ["L > M > K", "K > L = M", "K > M > L", "K = M > L"],
  dogru: 2,
  hatalar: [
    "Miktar ve genişlik yanılgısı: L kabı en geniş ve içindeki sıvı en çok olduğu için basıncını en büyük sanma; sıvı basıncı miktara ve kabın genişliğine bağlı değildir.",
    "Sıvının cinsini gözden kaçırma: L ve M'de yükseklikler eşittir ama sıvılar farklıdır; aynı derinlikte yoğunluğu büyük olan suyun basıncı büyüktür.",
    null,
    "Derinliği gözden kaçırma: K ve M'de sıvı aynıdır ama K'deki su daha derindir; derin olan K'nin taban basıncı daha büyüktür."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının cinsine bağlıdır; kabın genişliğine ve sıvının miktarına bağlı değildir.
Adım 1: K ile M'yi karşılaştır. İkisinde de su vardır. K'deki su 30 cm, M'deki su 20 cm derinliktedir. Derinliği fazla olan K'nin taban basıncı büyüktür: K > M.
Adım 2: M ile L'yi karşılaştır. İkisinde de sıvı 20 cm yüksekliktedir. Suyun yoğunluğu zeytinyağınınkinden büyük olduğu için M'nin taban basıncı büyüktür: M > L.
Adım 3: İki sonucu birleştir: K > M > L.
Sık yapılan hata: Her karşılaştırmada yalnızca bir değişkene bakmak. İki kabı karşılaştırırken önce hangi değişkenin aynı, hangisinin farklı olduğunu belirle.
Cevap C.`
},
{
  id: "fen-sg-202",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Hidrolik berber koltuğunda berber, ayağıyla pedala bastıkça pedala bağlı dar bir piston yağı iter. Yağ, koltuğu taşıyan geniş pistonu yukarı doğru iter ve koltuk yükselir. Bu sistemle ilgili şu yargılar ileri sürülmüştür:
I. Pedala bağlı pistonun yağa uyguladığı basınç, yağ aracılığıyla koltuğu taşıyan pistona iletilir.
II. Koltuğun yükselmesi, yağın sıkışıp hacminin küçülmesi sayesinde olur.
III. İki pistonun yüzey alanları eşit olsaydı koltuğu kaldırmak için pedala daha küçük kuvvet uygulamak yeterli olurdu.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Sıvıları sıkıştırılabilir sanma: yağ neredeyse hiç sıkışmaz; koltuk, yağ sıkıştığı için değil, basıncı geniş pistona ilettiği için yükselir.",
    "Kuvvet kazancını ters kurma: I doğrudur ama III yanlıştır; geniş pistonun yüzeyi büyük olduğu için küçük kuvvet yeter, alanlar eşit olsaydı daha büyük kuvvet gerekirdi.",
    "Sıkışma ve kuvvet yanılgısı birlikte: yağ sıkışmaz (II yanlış); pistonlar eşit olsaydı kuvvet kazancı kalmazdı (III yanlış); doğru olan yalnız I'dir."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya aynen iletilir. Hidrolik sistemlerde bu sayede küçük bir kuvvetle büyük bir kuvvet elde edilir.
Adım 1: I. yargıyı kontrol et. Dar piston yağa basınç uygular, yağ bu basıncı geniş pistona iletir. Doğrudur.
Adım 2: II. yargıyı kontrol et. Sıvılar neredeyse hiç sıkıştırılamaz. Yağ sıkışsaydı pedala basınca yağ küçülür, koltuk yükselmezdi. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Aynı basınç geniş pistonun büyük yüzeyine etki ettiği için koltuğu iten kuvvet, pedala uygulanan kuvvetten büyüktür. Pistonlar eşit olsaydı bu kazanç olmaz, koltuğu kaldırmak için daha büyük kuvvet gerekirdi. Yanlıştır.
Sık yapılan hata: Hidrolik sistemde kuvvet kazancının nereden geldiğini karıştırmak. Kazanç, geniş pistonun yüzeyinin dar pistonunkinden büyük olmasından gelir.
Cevap A.`
},
{
  id: "fen-sg-203",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Kamp alanlarında kullanılan, ağzı açık ve tabanına yakın bir yerde musluğu bulunan bir su bidonu ağzına kadar doldurulmuştur. Musluk açıldığında su önce hızlı akmış, bidondaki su azaldıkça akış yavaşlamıştır. Bu gözlemle ilgili şu yargılar ileri sürülmüştür:
I. Bidondaki su azalsa da musluğa etki eden su basıncı değişmez.
II. Musluk bidonun daha alt kısmına takılsaydı, bidon doluyken su musluktan daha büyük basınçla çıkardı.
III. Bidon aynı yükseklikte ama daha geniş olsaydı, dolu iken musluğa etki eden su basıncı yine aynı olurdu.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Gözlemle çelişen yargıyı seçme: akışın yavaşlaması musluktaki basıncın azaldığını gösterir; su azaldıkça musluğun derinliği de azalır.",
    "Eksik değerlendirme: II doğrudur ama III de doğrudur; bidonun genişliği, aynı derinlikteki su basıncını değiştirmez.",
    "Miktarı ve derinliği karıştırma: III doğrudur ama I yanlıştır; su azaldıkça musluğun su yüzeyine göre derinliği azalır, basınç da azalır.",
    null
  ],
  aciklama: `Musluğa etki eden su basıncı, musluğun su yüzeyinden derinliğine bağlıdır.
Adım 1: I. yargıyı kontrol et. Bidondaki su azaldıkça su yüzeyi alçalır, musluğun derinliği azalır. Basınç da azalır; akışın yavaşlaması bunu gösterir. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Musluk daha aşağıya takılırsa su yüzeyine göre derinliği artar. Derinliği artan musluğa daha büyük basınç etki eder. Doğrudur.
Adım 3: III. yargıyı kontrol et. Bidon aynı yükseklikte ama daha geniş olursa içinde daha çok su olur, ama musluğun derinliği değişmez. Basınç da aynı kalır. Doğrudur.
Sık yapılan hata: Geniş bidonda daha çok su bulunduğu için basıncın artacağını sanmak. Basıncı suyun miktarı değil, musluğun üstündeki suyun yüksekliği belirler.
Cevap D.`
},
{
  id: "fen-sg-204",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Ağzına kadar su dolu bir bardağın ağzı ince bir kartonla kapatılmıştır. Karton elle tutularak bardak ters çevrilmiş, sonra el kartondan çekilmiştir. Karton düşmemiş ve su dökülmemiştir.
**Kartonun düşmemesini sağlayan etki aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Bardaktaki suyun kartonu yukarı doğru itmesi",
    "Açık hava basıncının kartonu aşağıdan yukarı doğru itmesi",
    "Kartonun suyu emerek bardağın kenarına yapışması",
    "Bardağın içindeki boşluğun kartonu içeri doğru çekmesi"
  ],
  dogru: 1,
  hatalar: [
    "Ters yön: su, ağırlığı nedeniyle kartonu aşağı doğru iter; kartonu yukarıda tutan su olamaz.",
    null,
    "İlgisiz neden: kartonun ıslanması onu bardağa yapıştırmaz; kartonu tutan, alttan etki eden açık hava basıncıdır.",
    "Boşluğun çektiğini sanma: boşluk bir şeyi çekmez; bardak suyla dolu olduğundan karton, dışarıdaki havanın itmesiyle yerinde kalır."
  ],
  aciklama: `Açık hava basıncı her yöne etki eder; yalnızca aşağı doğru değil, yanlara ve yukarı doğru da iter.
Adım 1: Bardak ters çevrildiğinde su, ağırlığı nedeniyle kartonu aşağı doğru iter.
Adım 2: Kartonun alt yüzüne ise dışarıdaki hava, açık hava basıncıyla yukarı doğru etki eder.
Adım 3: Açık hava basıncının kartonu yukarı itme etkisi, suyun kartonu aşağı itme etkisinden büyük olduğu için karton düşmez ve su dökülmez.
Sık yapılan hata: Kartonu tutan şeyin "boşluğun çekmesi" olduğunu düşünmek. Boşluk çekmez; cisimleri iten, havanın basıncıdır.
Cevap B.`
},
{
  id: "fen-sg-205",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Görseldeki kapalı düzenek yağ ile doludur. Düzenekte yüzey alanları farklı K, L ve M pistonları aynı yüksekliktedir. K pistonuna aşağı doğru bir kuvvet uygulanmaktadır. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. M pistonu en geniş olduğu için M'ye etki eden yağ basıncı en büyüktür.
II. K pistonuna kuvvet uygulanınca L ve M pistonlarına etki eden yağ basıncı aynı miktarda artar.
III. L ve M pistonlarını yukarı doğru iten kuvvetler birbirine eşittir.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 500 270" role="img" aria-label="Alttan birbirine bağlı yağ dolu üç silindir: dar K, orta L ve geniş M; pistonlar aynı yükseklikte, K pistonuna aşağı doğru kuvvet uygulanıyor"><g fill="var(--dolgu)"><rect x="41" y="100" width="28" height="130"/><rect x="191" y="100" width="58" height="130"/><rect x="341" y="100" width="118" height="130"/><rect x="69" y="200" width="272" height="30"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40 60 V230 H460 V60"/><path d="M70 60 V200 H190 V60"/><path d="M250 60 V200 H340 V60"/></g><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><rect x="42" y="90" width="26" height="10"/><rect x="192" y="90" width="56" height="10"/><rect x="342" y="90" width="116" height="10"/></g><line x1="55" y1="20" x2="55" y2="78" stroke="currentColor" stroke-width="3"/><polygon points="47,76 63,76 55,88" fill="currentColor"/><g fill="currentColor" font-size="16"><text x="70" y="40">Kuvvet</text><text x="50" y="255">K</text><text x="214" y="255">L</text><text x="394" y="255">M</text><text x="270" y="222">Yağ</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Basınç ile kuvveti karıştırma: M'nin yüzeyi en geniş olduğu için M'yi iten kuvvet en büyüktür, ama basınç her pistonda aynı miktarda artar.",
    null,
    "Basınç ile kuvveti ters kurma: basınçlar eşittir (I yanlış); kuvvetler ise pistonların yüzey alanına göre farklıdır (III yanlış).",
    "Kuvvetleri de eşit sanma: II doğrudur, ama M'nin yüzeyi L'ninkinden geniş olduğu için aynı basınç M'yi daha büyük kuvvetle iter."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya aynen iletilir. Bir yüzeye etki eden kuvvet, aynı basınçta yüzey büyüdükçe büyür.
Adım 1: I. yargıyı kontrol et. K'ye uygulanan basınç, yağ tarafından L'ye ve M'ye aynen iletilir. M geniş diye ona etki eden basınç büyümez. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Basınç aynen iletildiği için L'deki ve M'deki basınç artışları eşittir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Basınçlar eşittir ama M'nin yüzeyi L'ninkinden büyüktür. Aynı basınç daha geniş yüzeye daha büyük kuvvet uygular. Kuvvetler eşit değildir. Yanlıştır.
Sık yapılan hata: "Basınç eşitse kuvvet de eşittir." ya da "Kuvvet büyükse basınç da büyüktür." diye düşünmek. Hidrolik sistemde basınç aynı kalır, kuvvet yüzey alanıyla birlikte değişir.
Cevap B.`
},
{
  id: "fen-sg-206",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bir usta, odanın karşılıklı iki duvarında aynı yükseklikte birer işaret yapmak istemektedir. Bunun için içi su dolu, şeffaf ve uzun bir hortumun iki ucunu iki duvara dayamış, hortumun orta kısmını yerde bırakmıştır. Hortumun iki ucundaki su yüzeyleri durgunlaşınca bu düzeylere birer işaret koymuştur.
**Ustanın bu yöntemle doğru sonuç almasının dayandığı bilgi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Su, hortumun daha alçakta tutulan ucunda daha yüksek düzeyde durur.",
    "Hortum uzadıkça iki uçtaki su düzeyleri arasındaki fark da büyür.",
    "Su, hortumun daha geniş olan kısmında daha yüksek düzeyde durur.",
    "Alttan birbirine bağlı kaplarda durgun suyun yüzeyleri aynı düzeyde olur."
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: hortumun bir ucu alçaltılınca o uçtaki su yüzeyi yükselmez; iki uçtaki su yüzeyleri yine aynı yatay düzeyde kalır.",
    "Uzunluk yanılgısı: hortumun uzunluğu su düzeylerini değiştirmez; hortum ne kadar uzun olursa olsun iki uçtaki su yüzeyleri aynı düzeydedir.",
    "Genişlik yanılgısı: durgun suyun yüzeyi bağlı kolların genişliğine göre değişmez; geniş ve dar kısımlarda düzey aynıdır.",
    null
  ],
  aciklama: `Alttan birbirine bağlı kaplara bileşik kaplar denir. Bileşik kaplardaki durgun bir sıvının yüzeyi bütün kollarda aynı yatay düzeyde olur.
Adım 1: Hortumun iki ucu, ortası yerde duran tek bir boruyla alttan birbirine bağlıdır. Hortum bir bileşik kap gibi davranır.
Adım 2: Su durgunlaşınca iki uçtaki su yüzeyleri aynı yükseklikte olur. Yüksekliklerden biri fazla olsaydı su diğer uca doğru akardı.
Adım 3: Usta, iki uçtaki su yüzeylerini işaretleyerek iki duvarda aynı yükseklikte iki nokta elde eder.
Sağlama: İnşaatlarda kullanılan "hortum terazisi" bu ilkeyle çalışır; uzun mesafelerde de doğru sonuç verir.
Cevap D.`
},
{
  id: "fen-sg-207",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Damlalıkla ilaç çekilirken önce damlalığın lastik başı sıkılır ve içindeki havanın bir kısmı dışarı çıkarılır. Sonra damlalığın ucu ağzı açık ilaç şişesindeki ilaca daldırılır ve lastik bırakılır; ilaç damlalığın içine dolar. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. İlacı damlalığın içine iten, şişedeki ilacın yüzeyine etki eden açık hava basıncıdır.
II. Lastik bırakıldığında damlalığın içindeki havanın basıncı, dışarıdaki açık hava basıncından küçük olur.
III. İlaç, damlalığın içine lastik tarafından emilerek çekilir.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: I doğrudur ama II de doğrudur; ilaç dışarıdan içeri itildiğine göre dışarıdaki açık hava basıncı, damlalığın içindeki basınçtan büyüktür.",
    "Emme yanılgısı: lastik ilacı çekmez; ilacı damlalığa iten, şişedeki ilacın yüzeyine etki eden açık hava basıncıdır. I ve II doğrudur.",
    null,
    "Emme yanılgısı ve I'i atlama: II doğrudur ama III yanlıştır; ilacı damlalığa iten lastik değil, dışarıdaki açık hava basıncıdır (I doğru)."
  ],
  aciklama: `Açık hava basıncı, hava tabakasının ağırlığından doğan ve her yöne etki eden basınçtır. Damlalık, pipet ve vantuz bu basınç sayesinde çalışır.
Adım 1: II. yargıyı kontrol et. Lastik sıkılınca damlalıktaki havanın bir kısmı dışarı çıkar. Lastik bırakıldığında ilaç dışarıdan damlalığın içine doğru hareket eder. Bir sıvı, basıncın büyük olduğu taraftan küçük olduğu tarafa doğru itilir. Öyleyse damlalığın içindeki hava basıncı dışarıdaki açık hava basıncından küçüktür. Doğrudur.
Adım 2: I. yargıyı kontrol et. Şişenin ağzı açık olduğu için ilacın yüzeyine açık hava basıncı etki eder. Damlalığın içindeki basınç daha küçük olduğu için açık hava basıncı ilacı damlalığın içine iter. Doğrudur.
Adım 3: III. yargıyı kontrol et. Lastik ilaca dokunmaz, onu çekemez de. Lastiğin görevi damlalıktaki havanın bir kısmını dışarı çıkarmaktır. İlacı içeri iten, dışarıdaki havadır. Yanlıştır.
Sık yapılan hata: Damlalığın ilacı "emdiğini" düşünmek. Damlalık bir şey çekmez; ilacı içeri iten, dışarıdaki havanın basıncıdır.
Cevap C.`
},
{
  id: "fen-sg-208",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Vakumlu saklama kaplarının kapağında küçük bir pompa bulunur. Kapak kapatıldıktan sonra pompayla kabın içindeki havanın bir kısmı dışarı çekilir. Bu işlemden sonra kapağı açmak çok zorlaşır. Kapaktaki küçük bir vana açılıp kaba hava girince ise kapak kolayca açılır.
**Vana açılmadan önce kapağın zor açılmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Kabın içindeki hava basıncının, dışarıdaki açık hava basıncından büyük olması",
    "Kapağı dışarıdan bastıran açık hava basıncının, içerideki hava basıncından büyük olması",
    "Havası çekilen kabın içindeki boşluğun, kapağı içeri doğru çekmesi",
    "Kabın içindeki hava azalınca kapağın ağırlığının artması"
  ],
  dogru: 1,
  hatalar: [
    "Ters yön: havanın bir kısmı çekildiği için içerideki basınç dışarıdakinden küçüktür; büyük olsaydı kapak kendiliğinden açılmaya zorlanırdı.",
    null,
    "Boşluğun çektiğini sanma: boşluk bir şeyi çekmez; kapağı yerinde tutan, onu dışarıdan bastıran açık hava basıncıdır.",
    "İlgisiz neden: kabın içindeki havanın azalması kapağın ağırlığını değiştirmez; değişen, kapağa içeriden ve dışarıdan etki eden basınçlardır."
  ],
  aciklama: `Açık hava basıncı, kapağa dışarıdan etki eder; kabın içindeki hava ise kapağa içeriden etki eder.
Adım 1: Pompa kabın içindeki havanın bir kısmını dışarı çeker. İçeride az hava kaldığı için içerideki hava basıncı küçülür.
Adım 2: Kapağın dışına ise açık hava basıncı etki etmeye devam eder. Dışarıdan bastıran basınç, içeriden iten basınçtan büyük olur ve kapak kaba bastırılır.
Adım 3: Vana açılınca dışarıdaki hava kaba girer; içerideki ve dışarıdaki basınçlar eşitlenir. Kapağı bastıran fazlalık ortadan kalktığı için kapak kolayca açılır.
Sık yapılan hata: "Vakum kapağı çekiyor." demek. Kapağı tutan içerideki boşluk değil, dışarıdaki havanın basıncıdır.
Cevap B.`
},
{
  id: "fen-sg-209",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Hidrolik kriko, berber koltuğu ve hidrolik fren Pascal prensibine dayanır. Pascal prensibi, bilimsel bilgi türlerinden ilkeye (prensibe) bir örnektir.
**Buna göre ilkelerle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "İlkeler, henüz test edilmemiş tahminlerdir.",
    "İlkeler, tek bir deneyin sonucuna dayanır.",
    "İlkeler, yeni kanıtlar bulunsa da hiçbir zaman değişmez.",
    "İlkeler, birçok deneyle doğrulanmış genellemelerdir."
  ],
  dogru: 3,
  hatalar: [
    "İlke ile hipotezi karıştırma: test edilmemiş tahmine hipotez denir; ilke ise defalarca test edilip doğrulanmıştır.",
    "İlkeyi tek bir sonuç sanma: bir deneyin tek sonucu genelleme yapmak için yetmez; ilke, birçok deneyde aynı sonucun alınmasıyla ortaya çıkar.",
    "Bilimsel bilgiyi değişmez sanma: bilimsel bilgiler güçlü kanıtlara dayanır ama yeni kanıtlar ortaya çıkarsa gözden geçirilebilir.",
    null
  ],
  aciklama: `İlke (prensip), birçok deney ve gözlemle doğrulanmış, bir olayın nasıl gerçekleştiğini açıklayan ve uygulamalara temel oluşturan genellemedir.
Adım 1: Hipotez, test edilmeden önce yapılan tahmindir. İlke ise test edilmiş ve doğrulanmıştır. A yanlıştır.
Adım 2: Tek bir deneyin sonucu bir genelleme için yeterli değildir. İlke, pek çok deneyde aynı sonucun alınmasıyla oluşur. B yanlıştır.
Adım 3: Bilimsel bilgi değişebilir. Yeni kanıtlar ortaya çıkarsa ilkeler de gözden geçirilebilir. "Hiçbir zaman değişmez" ifadesi yanlıştır.
Adım 4: Pascal prensibi de birçok deneyle doğrulanmış, pek çok hidrolik aracın tasarımında kullanılan bir genellemedir.
Sık yapılan hata: Bilimsel bilginin kesin ve değişmez olduğunu düşünmek. Bilim kanıtlara dayanır; kanıtlar değişirse bilgi de güncellenir.
Cevap D.`
},
{
  id: "fen-sg-210",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Ali'nin kol saatinin kutusunda "50 m derinliğe kadar su geçirmez" yazmaktadır. Saatin camı, kasası, arka kapağı ve contaları bu derinlikteki su basıncına dayanacak biçimde üretilmiştir. Ali bu saatle denizde dalış yapacaktır. Saatle ilgili şu yargılar ileri sürülmüştür:
I. Saat 40 m derinlikte ne kadar uzun süre kalırsa camına etki eden su basıncı o kadar artar.
II. Su, saate yalnızca yukarıdan basınç uyguladığı için saatin yalnızca camının dayanıklı olması yeterlidir.
III. Saat aynı derinlikte tutulduğunda camı yukarıya da baksa yana da baksa camına etki eden su basıncı aynıdır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve III"],
  dogru: 2,
  hatalar: [
    "Süre yanılgısı: basıncın zamanla biriktiğini sanma; derinlik değişmedikçe saate etki eden su basıncı da değişmez.",
    "Yön yanılgısı: sıvılar yalnızca aşağı doğru değil her yöne basınç uygular; saatin kasası ve arka kapağı da su basıncının etkisindedir.",
    null,
    "Süre yanılgısı: III doğrudur ama I yanlıştır; saat aynı derinlikte kaldıkça ona etki eden su basıncı değişmez."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının cinsine bağlıdır. Sıvı, içindeki cisme her yönden basınç uygular ve aynı derinlikte bu basınç her yönde eşittir.
Adım 1: I. yargıyı kontrol et. Saat 40 m derinlikte kaldıkça derinlik değişmez. Basınç zamanla birikmez; derinlik aynı kaldıkça basınç da aynı kalır. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Su, saate yalnızca yukarıdan değil yanlardan ve alttan da basınç uygular. Bu yüzden camla birlikte kasa, arka kapak ve contalar da dayanıklı yapılır. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Aynı derinlikte sıvı basıncı her yönde eşittir. Cam yukarıya da baksa yana da baksa aynı basıncın etkisindedir. Doğrudur.
Sık yapılan hata: Sıvı basıncının yalnızca yukarıdan aşağı doğru etki ettiğini düşünmek. Suyun içindeki bir cisme su her yönden bastırır.
Cevap C.`
},
{
  id: "fen-sg-211",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Kaan, "Sıvı basıncı sıvının cinsine bağlı değildir." hipotezini test etmek istemiştir. Özdeş iki kaptan birine su, diğerine ayçiçek yağı koymuş; iki sıvının yüksekliğini de 12 cm yapmıştır. Kapların tabanına yerleştirdiği özdeş basınç ölçerlerden suyun bulunduğu kaptaki daha büyük bir değer göstermiştir.
**Bu sonuca göre Kaan'ın hipotezi için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Desteklenmemiştir; çünkü yalnızca sıvının cinsi farklı olduğu hâlde basınçlar farklı çıkmıştır.",
    "Desteklenmiştir; çünkü iki kaptaki sıvıların yükseklikleri birbirine eşittir.",
    "Desteklenmiştir; çünkü suyun bulunduğu kaptaki basınç daha büyük çıkmıştır.",
    "Desteklenmemiştir; çünkü sıvı basıncı sıvının derinliğine de bağlı değildir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Deney düzenini sonuç sanma: yüksekliklerin eşit olması deneyin doğru kurulduğunu gösterir; hipotez hakkındaki karar ölçülen sonuca göre verilir.",
    "Sonucu ters yorumlama: basınçların farklı çıkması sıvının cinsinin basıncı değiştirdiğini gösterir; bu, hipotezin söylediğinin tam tersidir.",
    "Doğru karar, yanlış gerekçe: hipotez desteklenmemiştir ama sıvı basıncı derinliğe bağlıdır; bu deneyde derinlik sabit tutulduğu için derinlik hakkında bilgi alınmamıştır."
  ],
  aciklama: `Bir hipotez, deneyin sonucu hipotezin beklediği gibi çıkarsa desteklenir; beklenenin tersi çıkarsa desteklenmez.
Adım 1: Kaan'ın hipotezine göre sıvının cinsi basıncı etkilemez. Bu doğru olsaydı su ve ayçiçek yağının taban basınçları eşit çıkmalıydı.
Adım 2: Deneyde derinlik (12 cm) ve kaplar aynıdır; değişen tek şey sıvının cinsidir. Buna rağmen basınçlar farklı çıkmıştır.
Adım 3: Sonuç beklenenin tersidir. Hipotez desteklenmemiştir; sıvı basıncı sıvının cinsine bağlıdır.
Sık yapılan hata: Deneyin doğru kurulmuş olmasını hipotezin doğrulanması sanmak. Karar, deneyin düzenine değil, ölçülen sonuca göre verilir.
Cevap A.`
},
{
  id: "fen-sg-212",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir araştırma ekibi, yükseltileri farklı dört istasyonda aynı gün açık hava basıncını ölçmüştür. Ölçüm sonuçlarından üçü tabloda verilmiştir; M istasyonundaki ölçüm sonucu ise kayıtlara geçmemiştir. (hPa, hektopaskal, bir basınç birimidir.)
**Buna göre M istasyonunda ölçülen açık hava basıncı aşağıdakilerden hangisi olabilir?**`,
  gorsel: `<table class="tablo"><tr><th>İstasyon</th><th>Yükselti (m)</th><th>Açık hava basıncı (hPa)</th></tr><tr><td>K</td><td>0</td><td>1013</td></tr><tr><td>L</td><td>1000</td><td>899</td></tr><tr><td>M</td><td>1800</td><td>?</td></tr><tr><td>N</td><td>2500</td><td>747</td></tr></table>`,
  secenekler: ["720 hPa", "815 hPa", "950 hPa", "1030 hPa"],
  dogru: 1,
  hatalar: [
    "Alt sınırı aşma: 720 hPa, 2500 m'deki N istasyonunun basıncından da küçüktür; N'den daha alçakta olan M'de basınç N'ninkinden büyük olmalıdır.",
    null,
    "Üst sınırı aşma: 950 hPa, 1000 m'deki L istasyonunun basıncından büyüktür; L'den daha yüksekte olan M'de basınç L'ninkinden küçük olmalıdır.",
    "Ters yön: 1030 hPa, deniz seviyesindeki K istasyonunun basıncından da büyüktür; yükseldikçe açık hava basıncı artmaz, azalır."
  ],
  aciklama: `Yükseklere çıkıldıkça üstte kalan hava tabakası incelir ve açık hava basıncı azalır.
Adım 1: Tablo bu kuralı doğruluyor: yükselti 0 m'den 1000 m'ye ve 2500 m'ye çıktıkça basınç 1013, 899 ve 747 hPa olarak azalıyor.
Adım 2: M istasyonu 1800 m'dedir. L'den (1000 m) yüksek, N'den (2500 m) alçaktır.
Adım 3: Öyleyse M'deki basınç L'ninkinden küçük, N'ninkinden büyük olmalıdır: 747 hPa ile 899 hPa arasında. Şıklarda bu aralıkta yalnız 815 hPa vardır.
Sağlama: 815 hPa, 899'dan küçük ve 747'den büyüktür; sıralama K > L > M > N olur ve yükselti arttıkça basınç azalır.
Cevap B.`
},
{
  id: "fen-sg-213",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Selin, uzun bir plastik şişenin yan yüzeyine farklı yüksekliklerde üç delik açmış, şişeyi suyla doldurup delikleri açmıştır. Deney boyunca şişenin ağzından sürekli su ekleyerek şişedeki su yüzeyini hep aynı düzeyde tutmuş ve deliklerden fışkıran suyu gözlemlemiştir.
**Selin'in su yüzeyini aynı düzeyde tutmasının amacı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Deliklerin su yüzeyinden derinliklerinin deney boyunca değişmemesini sağlamak",
    "Şişedeki sıvının cinsinin deney boyunca değişmemesini sağlamak",
    "Deliklerin şişenin tabanından yüksekliklerinin değişmemesini sağlamak",
    "Şişedeki suyun miktarını artırarak deliklerdeki basıncı yükseltmek"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kontrol değişkenini yanlış belirleme: şişeye yine su eklendiği için sıvının cinsi zaten değişmez; su yüzeyini sabit tutmanın amacı bu değildir.",
    "Derinliği tabandan ölçme: deliklerin tabandan yükseklikleri şişe delindiği anda belirlenir ve hiç değişmez; değişebilecek olan, su yüzeyine göre derinlikleridir.",
    "Miktar yanılgısı: sıvı basıncı suyun miktarına bağlı değildir; ayrıca Selin suyu artırmıyor, akıp giden suyun yerine koyuyor."
  ],
  aciklama: `Sıvı basıncı derinliğe bağlıdır. Derinlik, sıvının açık yüzeyinden aşağı doğru ölçülür.
Adım 1: Delikler açıldığında şişeden su akar. Su eklenmezse su yüzeyi alçalır.
Adım 2: Su yüzeyi alçalırsa her deliğin su yüzeyine olan uzaklığı, yani derinliği azalır. Deliklerdeki basınçlar deney boyunca değişir.
Adım 3: Selin sürekli su ekleyerek su yüzeyini sabit tutuyor. Böylece her deliğin derinliği deney boyunca aynı kalıyor ve delikleri birbiriyle güvenle karşılaştırabiliyor.
Sık yapılan hata: Derinliği tabandan ölçmek. Delikler yerinden oynamaz; değişen, su yüzeyinin deliklere olan uzaklığıdır.
Cevap A.`
},
{
  id: "fen-sg-214",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir öğrenci, sıvı basıncının kabın genişliğine bağlı olup olmadığını araştırmak için görseldeki dört kabı hazırlamıştır. Kapların bazıları geniş, bazıları dardır. Öğrenci her kabın tabanına özdeş birer basınç ölçer yerleştirmiştir. Kaplardaki sıvıların cinsi ve yükseklikleri görselde verilmiştir. Su ile alkolün yoğunlukları farklıdır.
**Öğrencinin bu araştırma için sonuçlarını karşılaştırması gereken iki kap aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 560 270" role="img" aria-label="K geniş kap 25 cm su, L dar kap 15 cm alkol, M dar kap 15 cm su, N geniş kap 15 cm su"><g fill="var(--dolgu)"><rect x="21" y="105" width="78" height="125"/><rect x="286" y="155" width="38" height="75"/><rect x="401" y="155" width="78" height="75"/></g><rect x="161" y="155" width="38" height="75" fill="var(--vurgu2)" fill-opacity="0.35"/><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 50 V230 H100 V50"/><path d="M160 50 V230 H200 V50"/><path d="M285 50 V230 H325 V50"/><path d="M400 50 V230 H480 V50"/></g><g stroke="var(--vurgu)" stroke-width="3"><line x1="20" y1="105" x2="100" y2="105"/><line x1="160" y1="155" x2="200" y2="155"/><line x1="285" y1="155" x2="325" y2="155"/><line x1="400" y1="155" x2="480" y2="155"/></g><g fill="currentColor" font-size="15"><text x="105" y="172">25 cm</text><text x="205" y="197">15 cm</text><text x="330" y="197">15 cm</text><text x="485" y="197">15 cm</text><text x="35" y="255">K: Su</text><text x="150" y="255">L: Alkol</text><text x="280" y="255">M: Su</text><text x="415" y="255">N: Su</text></g></svg>`,
  secenekler: ["K ve N", "L ve M", "L ve N", "M ve N"],
  dogru: 3,
  hatalar: [
    "Yanlış bağımsız değişken: K ve N'nin genişlikleri aynıdır, yalnızca su yükseklikleri farklıdır; bu iki kap kabın genişliğinin değil derinliğin etkisini gösterir.",
    "Yanlış bağımsız değişken: L ve M'nin genişlikleri ve sıvı yükseklikleri aynıdır, yalnızca sıvıların cinsi farklıdır; bu iki kap genişliğin değil sıvının cinsinin etkisini gösterir.",
    "İki değişkeni birlikte değiştirme: L ve N'de hem kabın genişliği hem sıvının cinsi farklıdır; basınç farkı çıkarsa hangisinden kaynaklandığı bilinemez.",
    null
  ],
  aciklama: `Bir değişkenin etkisini araştırırken yalnızca o değişken farklı olmalı, sonucu etkileyebilecek diğer değişkenler aynı tutulmalıdır.
Adım 1: Araştırılan değişken kabın genişliğidir. Seçilen iki kabın genişlikleri farklı olmalıdır. K ve N ikisi de geniş, L ve M ikisi de dar kaplardır; bu iki çift elenir.
Adım 2: Sıvı basıncını etkileyen değişkenler derinlik ve sıvının cinsidir. Seçilen iki kapta sıvıların hem cinsi hem yüksekliği aynı olmalıdır.
Adım 3: L ve N'de sıvılar farklıdır (alkol ve su); bu çift de elenir. M ve N'nin ikisinde de 15 cm su vardır; aralarındaki tek fark kabın genişliğidir.
Not: M ve N'deki su miktarları da farklıdır. Yükseklik aynı tutulup genişlik değiştirildiğinde bu kaçınılmazdır, çünkü geniş kaba aynı yükseklikte daha çok su sığar.
Sık yapılan hata: Genişlikleri farklı iki kap seçmeyi yeterli sanıp sıvının cinsini gözden kaçırmak. Kaplar arasında araştırılan değişkenden başka bir fark kalırsa sonuç hangisinin etkisi olduğunu göstermez.
Cevap D.`
},
{
  id: "fen-sg-215",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Görseldeki P ve R hidrolik düzeneklerinin dar pistonları özdeştir. R düzeneğinin geniş pistonu, P düzeneğinin geniş pistonundan daha geniştir. İki düzenekte de aynı yağ kullanılmış ve dar pistonlara eşit büyüklükte kuvvetler uygulanmıştır. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. İki düzenekte de geniş pistona iletilen basınç, dar pistonda oluşan basınca eşittir.
II. R düzeneğinde geniş pistonu iten kuvvet, P düzeneğinde geniş pistonu iten kuvvetten büyüktür.
III. P düzeneğinin dar pistonunda oluşan basınç, R düzeneğinin dar pistonunda oluşan basınçtan küçüktür.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 270" role="img" aria-label="P ve R hidrolik düzenekleri: dar pistonlar özdeş ve eşit kuvvetle itiliyor; R'nin geniş pistonu P'ninkinden daha geniş"><g fill="var(--dolgu)"><rect x="21" y="100" width="18" height="120"/><rect x="121" y="100" width="58" height="120"/><rect x="39" y="190" width="82" height="30"/><rect x="291" y="100" width="18" height="120"/><rect x="391" y="100" width="98" height="120"/><rect x="309" y="190" width="82" height="30"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 60 V220 H180 V60"/><path d="M40 60 V190 H120 V60"/><path d="M290 60 V220 H490 V60"/><path d="M310 60 V190 H390 V60"/></g><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><rect x="22" y="90" width="16" height="10"/><rect x="122" y="90" width="56" height="10"/><rect x="292" y="90" width="16" height="10"/><rect x="392" y="90" width="96" height="10"/></g><g stroke="currentColor" stroke-width="3"><line x1="30" y1="22" x2="30" y2="78"/><line x1="300" y1="22" x2="300" y2="78"/></g><g fill="currentColor"><polygon points="22,76 38,76 30,88"/><polygon points="292,76 308,76 300,88"/></g><g fill="currentColor" font-size="15"><text x="42" y="36">Kuvvet</text><text x="312" y="36">Kuvvet</text><text x="55" y="252">P düzeneği</text><text x="345" y="252">R düzeneği</text></g></svg>`,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Dar pistondaki basıncı geniş pistona bağlama: dar pistonlar özdeş ve kuvvetler eşit olduğu için dar pistonlardaki basınçlar eşittir (III yanlış); II ise doğrudur.",
    "I'i atlama ve III'ü doğru sayma: sıvı basıncı aynen ilettiği için I doğrudur; dar pistonlardaki basınçlar eşit olduğu için III yanlıştır.",
    "III'ü doğru sayma: geniş pistonun büyüklüğü dar pistonda oluşan basıncı değiştirmez; eşit kuvvet özdeş yüzeye eşit basınç oluşturur."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, her noktaya aynen iletilir. Aynı basınç, daha geniş bir yüzeyi daha büyük kuvvetle iter.
Adım 1: III. yargıyı kontrol et. Dar pistonlar özdeştir ve onlara eşit kuvvetler uygulanmıştır. Eşit kuvvet, eşit yüzeyde eşit basınç oluşturur. Dar pistonlardaki basınçlar eşittir. Yanlıştır.
Adım 2: I. yargıyı kontrol et. Her düzenekte yağ, dar pistondaki basıncı geniş pistona aynen iletir. Doğrudur.
Adım 3: II. yargıyı kontrol et. İki düzenekte geniş pistonlara aynı basınç etki eder. R'nin geniş pistonu daha geniş olduğu için onu iten kuvvet daha büyüktür. Doğrudur.
Sık yapılan hata: Geniş pistonun büyüklüğünün basıncı değiştirdiğini sanmak. Geniş pistonun büyüklüğü basıncı değil, elde edilen kuvveti değiştirir.
Cevap A.`
},
{
  id: "fen-sg-216",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Silindir biçimli bir su deposunun tabanına bir basınç algılayıcısı yerleştirilmiştir. Depoya gün içinde bazı zaman aralıklarında su doldurulmuş, bazı aralıklarda ise depodaki su kullanılmıştır. Depodaki suyun yüksekliğinin zamana göre değişimi grafikte verilmiştir. Bu grafikle ilgili şu yargılar ileri sürülmüştür:
I. 4. aralıkta depoya 1. aralıktakinden daha çok su doldurulduğu için 4. aralığın sonunda depo tabanına etki eden su basıncı, 1. aralığın sonundakinden büyüktür.
II. Depo tabanına etki eden su basıncı, en küçük değerine 3. aralığın sonunda ulaşmıştır.
III. 2. aralık boyunca depo tabanına etki eden su basıncı değişmemiştir.
**Buna göre bu yargılardan hangilerine ulaşılabilir?**`,
  gorsel: `<svg viewBox="0 0 520 290" role="img" aria-label="Su yüksekliği-zaman grafiği: başlangıçta 120 cm, 1. aralığın sonunda 200 cm, 2. aralıkta 200 cm'de sabit, 3. aralığın sonunda 40 cm, 4. aralığın sonunda 160 cm"><g stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"><line x1="70" y1="194" x2="480" y2="194"/><line x1="70" y1="158" x2="480" y2="158"/><line x1="70" y1="122" x2="480" y2="122"/><line x1="70" y1="86" x2="480" y2="86"/><line x1="70" y1="50" x2="480" y2="50"/><line x1="170" y1="40" x2="170" y2="230"/><line x1="270" y1="40" x2="270" y2="230"/><line x1="370" y1="40" x2="370" y2="230"/><line x1="470" y1="40" x2="470" y2="230"/></g><path d="M70 20 V230 H495" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="70,122 170,50 270,50 370,194 470,86" fill="none" stroke="var(--vurgu)" stroke-width="3"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="64" y="235">0</text><text x="64" y="199">40</text><text x="64" y="163">80</text><text x="64" y="127">120</text><text x="64" y="91">160</text><text x="64" y="55">200</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="120" y="252">1. aralık</text><text x="220" y="252">2. aralık</text><text x="320" y="252">3. aralık</text><text x="420" y="252">4. aralık</text><text x="470" y="280">Zaman</text></g><text x="78" y="16" fill="currentColor" font-size="14">Su yüksekliği (cm)</text></svg>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Eklenen suyu basınçla karıştırma: 4. aralıkta daha çok su eklenmiştir ama aralığın sonunda su yüksekliği 160 cm, 1. aralığın sonunda ise 200 cm'dir; I yanlıştır. II ve III ise grafikten doğrulanır.",
    "Miktar yanılgısı ve sabit aralığı atlama: taban basıncı eklenen suya değil o andaki su yüksekliğine bağlıdır, I yanlıştır; 2. aralıkta yükseklik sabit olduğu için III doğrudur.",
    null,
    "Eklenen suyu basınçla karıştırma: taban basıncını belirleyen o andaki su yüksekliğidir; 4. aralığın sonundaki 160 cm, 1. aralığın sonundaki 200 cm'den azdır, I yanlıştır."
  ],
  aciklama: `Bir kabın tabanına etki eden sıvı basıncı, o andaki sıvı yüksekliğine (derinliğe) ve sıvının cinsine bağlıdır. Kaba daha önce ne kadar su eklendiği basıncı belirlemez.
Adım 1: Grafikten aralık sınırlarındaki yükseklikleri oku: başlangıçta 120 cm, 1. aralığın sonunda 200 cm, 2. aralığın sonunda 200 cm, 3. aralığın sonunda 40 cm, 4. aralığın sonunda 160 cm.
Adım 2: I. yargıyı kontrol et. 1. aralıkta su 80 cm, 4. aralıkta 120 cm yükselmiştir; depo silindir biçimli olduğu için 4. aralıkta gerçekten daha çok su eklenmiştir. Ama 4. aralığın sonunda yükseklik 160 cm, 1. aralığın sonunda 200 cm'dir. Taban basıncı 4. aralığın sonunda daha küçüktür. Yanlıştır.
Adım 3: II. yargıyı kontrol et. Grafikteki en küçük yükseklik 40 cm'dir ve 3. aralığın sonundadır. En küçük basınç da bu andadır. Doğrudur.
Adım 4: III. yargıyı kontrol et. 2. aralıkta yükseklik hep 200 cm'dir. Derinlik değişmediği için taban basıncı da değişmemiştir. Doğrudur.
Sık yapılan hata: Kaba eklenen su miktarını basınçla ilişkilendirmek. Basıncı belirleyen, eklenen su değil, o anda kaptaki suyun yüksekliğidir.
Cevap C.`
},
{
  id: "fen-sg-217",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir öğrenci, ağzına ince lastik zar gerilmiş bir huniyi hortumla bir U borusuna bağlamıştır. Zara etki eden sıvı basıncı arttıkça U borusunun iki kolundaki renkli su düzeyleri arasındaki fark büyümektedir. Öğrenci huniyi önce X sıvısında 10 cm, sonra Y sıvısında 20 cm derinliğe daldırmış; iki ölçümde de düzey farkını aynı bulmuştur. Bu ölçümlerle ilgili şu yargılar ileri sürülmüştür:
I. X sıvısının yoğunluğu, Y sıvısının yoğunluğundan büyüktür.
II. X sıvısının bulunduğu kapta, Y sıvısının bulunduğu kaptakinden daha çok sıvı vardır.
III. Huni Y sıvısında 10 cm derinliğe daldırılsaydı düzey farkı, X sıvısındaki ölçümdekinden küçük olurdu.
**Buna göre yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Basıncı miktarla açıklama: kaplardaki sıvı miktarları verilmemiştir ve sıvı basıncı miktara bağlı değildir, II kesin değildir; III ise kesinlikle doğrudur.",
    null,
    "Derinlik farkını yorumlayamama: aynı basınç X'te daha az derinlikte oluştuğuna göre X'in yoğunluğu büyüktür, I kesinlikle doğrudur; II ise ölçümlerden çıkarılamaz.",
    "Kesin olmayanı kesin sayma: ölçümler kaplardaki sıvı miktarı hakkında bilgi vermez; sıvı basıncı miktara bağlı olmadığı için II kesinlikle doğru değildir."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının cinsine (yoğunluğuna) bağlıdır. Aynı derinlikte, yoğunluğu büyük olan sıvının basıncı büyüktür.
Adım 1: I. yargıyı kontrol et. Y sıvısında 10 cm derinlikteki basınç, 20 cm derinlikteki basınçtan küçüktür. X'teki 10 cm ölçümü ise Y'deki 20 cm ölçümüne eşittir. Öyleyse aynı 10 cm derinlikte X'in basıncı Y'ninkinden büyüktür. Aynı derinlikte basıncı büyük olan sıvının yoğunluğu da büyüktür. Kesinlikle doğrudur.
Adım 2: III. yargıyı kontrol et. Adım 1'de bulduğun gibi Y'de 10 cm derinlikteki basınç, X'te 10 cm derinlikteki basınçtan küçüktür. Basınç küçük olunca düzey farkı da küçük olur. Kesinlikle doğrudur.
Adım 3: II. yargıyı kontrol et. Soruda kaplardaki sıvı miktarları verilmemiştir. Ayrıca sıvı basıncı sıvının miktarına bağlı değildir; bu ölçümler miktar hakkında bilgi vermez. Kesinlikle doğru değildir.
Sık yapılan hata: Eşit ölçümleri sıvının miktarıyla açıklamaya çalışmak. Aynı basınç daha az derinlikte oluşuyorsa o sıvının yoğunluğu daha büyüktür.
Cevap B.`
},
{
  id: "fen-sg-218",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir öğrenci, sıvı basıncını etkileyen değişkenleri incelemek için dört ölçüm yapmış ve sonuçları tabloya yazmıştır. Her ölçümde basınç algılayıcısını kabın tabanına yerleştirmiştir. Tuzlu suyun yoğunluğu, suyun yoğunluğundan büyüktür. Öğrenci şu yorumları yapmıştır:
I. 1. ve 4. ölçümler, sıvı basıncının kabın genişliğine bağlı olmadığını gösterir.
II. 2. ve 3. ölçümler, sıvı basıncının sıvının cinsine bağlı olduğunu gösterir.
III. 1. ve 2. ölçümler, sıvı basıncının derinlik arttıkça arttığını gösterir.
**Buna göre öğrencinin yorumlarından hangileri bu ölçümlerle desteklenir?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm</th><th>Sıvı</th><th>Kabın genişliği</th><th>Sıvının yüksekliği (cm)</th><th>Ölçülen basınç (Pa)</th></tr><tr><td>1</td><td>Su</td><td>Geniş</td><td>10</td><td>1000</td></tr><tr><td>2</td><td>Su</td><td>Geniş</td><td>20</td><td>2000</td></tr><tr><td>3</td><td>Tuzlu su</td><td>Geniş</td><td>20</td><td>2060</td></tr><tr><td>4</td><td>Tuzlu su</td><td>Dar</td><td>10</td><td>1030</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Birden çok değişkenin değiştiğini gözden kaçırma: 1. ve 4. ölçümlerde hem sıvının cinsi hem kabın genişliği farklıdır; I desteklenmez. II ve III ise tek değişken değiştiği için desteklenir.",
    "Eksik değerlendirme: 1. ve 2. ölçümlerde yalnızca yükseklik değişmiş ve basınç artmıştır; III de desteklenir.",
    "Doğru bilgiyi veriyle desteklenmiş sanma: sıvı basıncı gerçekten kabın genişliğine bağlı değildir, ama 1. ve 4. ölçümlerde sıvının cinsi de değiştiği için bu sonuç bu ölçümlerden çıkarılamaz; II ise desteklenir.",
    null
  ],
  aciklama: `Bir ölçüm çiftinden bir değişken hakkında sonuç çıkarabilmek için iki ölçüm arasında yalnızca o değişken farklı olmalıdır.
Adım 1: I. yorumu kontrol et. 1. ölçümde geniş kapta su, 4. ölçümde dar kapta tuzlu su vardır. Kabın genişliği ile sıvının cinsi birlikte değişmiştir. Basınçların farklı ya da yakın çıkması yalnızca kabın genişliğine bağlanamaz. Desteklenmez.
Adım 2: II. yorumu kontrol et. 2. ve 3. ölçümlerde kabın genişliği ve yükseklik aynı, yalnızca sıvının cinsi farklıdır. Tuzlu suda basınç daha büyük çıkmıştır. Desteklenir.
Adım 3: III. yorumu kontrol et. 1. ve 2. ölçümlerde sıvı ve kabın genişliği aynı, yalnızca yükseklik farklıdır. Yükseklik artınca basınç artmıştır. Desteklenir.
Sık yapılan hata: Bilinen doğru bir bilgiyle örtüşen her yorumu kabul etmek. Sıvı basıncı gerçekten kabın genişliğine bağlı değildir, ama 1. ve 4. ölçümler bunu göstermeye uygun değildir.
Cevap D.`
},
{
  id: "fen-sg-219",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir otomobilin bakımında ustalar, hidrolik fren sistemindeki yağın içine hava kabarcıkları karıştığını fark etmiştir. Sürücü, bu durumdayken fren pedalına bastığında pedalın her zamankinden daha derine indiğini, frenin ise geç ve zayıf tuttuğunu söylemiştir. Ustalar borulardaki havayı boşaltıp sistemi yeniden yalnızca fren yağıyla doldurunca fren düzgün çalışmaya başlamıştır.
**Fren yağına hava karıştığında frenin zayıf tutmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Hava kolayca sıkışabildiği için pedala basılınca tekerleklerdeki pistonlar itilmeden önce hava kabarcıkları sıkışır.",
    "Hava fren yağından hafif olduğu için yağın borulardaki derinliği azalır ve yağın basıncı küçülür.",
    "Hava karışınca fren yağının yoğunluğu artar ve yağ, basıncı tekerleklere daha yavaş iletir.",
    "Hava, pedaldaki basıncı tekerleklere değil, yalnızca geriye, yani pedala doğru iletir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Derinlikle ilişkilendirme: frendeki basınç pedalın uyguladığı basınçtan gelir, borulardaki yağın derinliğinden gelmez; sorun havanın sıkışmasıdır.",
    "Ters yön: hava yağdan az yoğundur; yağa karışması yoğunluğu artırmaz. Frenin zayıflaması, havanın sıkışabilmesinden kaynaklanır.",
    "Basıncın tek yöne iletildiğini sanma: akışkanlar basıncı her yöne iletir; sorun iletimin yönü değil, havanın sıkışarak pedalın hareketini boşa harcamasıdır."
  ],
  aciklama: `Hidrolik frenler Pascal prensibiyle çalışır: kapalı bir kaptaki sıvıya uygulanan basınç her noktaya aynen iletilir. Bu sistemde sıvı kullanılmasının nedeni, sıvıların neredeyse hiç sıkıştırılamamasıdır.
Adım 1: Borular yalnızca yağla doluyken pedal yağı iter, yağ sıkışmadığı için tekerleklerdeki pistonlar hemen itilir.
Adım 2: Yağa hava karışınca durum değişir. Gazlar kolayca sıkıştırılabilir. Pedala basılınca pedalın hareketi önce hava kabarcıklarını sıkıştırmaya harcanır.
Adım 3: Bu yüzden pedal daha derine iner ama balatalar tekerleğe geç ve zayıf bastırılır. Hava boşaltılınca sorun ortadan kalkar.
Sık yapılan hata: Sorunu havanın yoğunluğuyla ya da yağın derinliğiyle açıklamak. Belirleyici olan, gazların sıkışabilmesi ve sıvıların sıkışamamasıdır.
Cevap A.`
},
{
  id: "fen-sg-220",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir alışveriş merkezine iki akvaryum yapılacaktır. Birinci akvaryumun uzunluğu 2 m, ikinci akvaryumun uzunluğu 8 m'dir. İki akvaryumun yükseklikleri aynıdır ve ikisi de ağzına kadar deniz suyuyla doldurulacaktır. Mühendis, ön camların kalınlığına karar verirken şu yargıları ileri sürmüştür:
I. İki akvaryumun ön camlarında aynı derinlikteki noktalara etki eden su basıncı eşittir.
II. Uzun akvaryumda çok daha fazla su olduğu için ön camın alt kısmına etki eden su basıncı daha büyüktür.
III. İki akvaryumda da ön camın alt kısmı, üst kısmından daha büyük basınca dayanacak biçimde yapılmalıdır.
**Buna göre mühendisin yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: III de doğrudur; derinlik arttıkça basınç arttığı için camın alt kısmı daha büyük basınca dayanmalıdır.",
    "Miktar yanılgısı: uzun akvaryumda daha çok su vardır ama aynı derinlikte su basıncı aynıdır; II yanlış, III doğrudur.",
    null,
    "Miktar yanılgısı ve I'i atlama: aynı sıvıda aynı derinlikteki noktaların basıncı eşittir (I doğru); suyun miktarı basıncı değiştirmez (II yanlış)."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının cinsine bağlıdır; kabın uzunluğuna ve sıvının miktarına bağlı değildir.
Adım 1: I. yargıyı kontrol et. İki akvaryumda da aynı sıvı (deniz suyu) vardır. Aynı derinlikteki noktalarda basınçlar eşittir. Doğrudur.
Adım 2: II. yargıyı kontrol et. Uzun akvaryumda su daha fazladır ama yükseklikler aynı olduğu için camın alt kısmının derinliği iki akvaryumda da aynıdır. Basınç daha büyük değildir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Camın alt kısmı daha derindedir; buraya etki eden su basıncı, su yüzeyine yakın üst kısma etki edenden büyüktür. Cam alt kısımda daha dayanıklı olmalıdır. Doğrudur.
Sık yapılan hata: "Büyük akvaryum, büyük basınç" diye düşünmek. Akvaryumun yüksekliği aynı kaldıkça cama etki eden basınç da aynı kalır.
Cevap C.`
},
{
  id: "fen-sg-221",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Defne, ağzı kapalı bir karton meyve suyu kutusunun üst kısmına pipetini sıkıca geçirmiş ve meyve suyunu içmeye başlamıştır. Pipet ile kutu arasında hava girebilecek hiçbir boşluk yoktur. Bir süre sonra meyve suyunun gelmesi zorlaşmış, kutunun yan yüzleri içeri doğru çökmüştür. Defne kutunun üst köşesine küçük bir delik açınca kutu eski biçimine dönmüş ve meyve suyu yine kolayca gelmeye başlamıştır. Bu gözlemlerle ilgili şu yargılar ileri sürülmüştür:
I. Kutu delindikten sonra meyve suyunu pipete iten, kutudaki meyve suyunun yüzeyine etki eden hava basıncıdır.
II. Kutunun yan yüzleri çöktüğünde, kutuya dışarıdan etki eden açık hava basıncı kutunun içindeki basınçtan büyüktür.
III. Açılan delikten kutuya giren hava, kutunun içindeki basıncın artmasını sağlamıştır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü atlama: delikten giren hava kutunun içindeki basıncı dışarıdakine yaklaştırır; kutunun eski biçimine dönmesi bunu gösterir.",
    "II'yi atlama: kutunun yan yüzlerinin içeri çökmesi, dışarıdan bastıran basıncın içerideki basınçtan büyük olduğunu gösterir.",
    "I'i atlama: pipetle içerken sıvıyı yukarı iten ağzımız değil, sıvının yüzeyine etki eden hava basıncıdır; delik açılınca bu basınç yeniden etkili olur.",
    null
  ],
  aciklama: `Pipetle içerken pipetteki hava çekilir; sıvıyı pipete iten, sıvının yüzeyine etki eden hava basıncıdır.
Adım 1: II. yargıyı kontrol et. Kutu kapalı olduğu için içilen meyve suyunun yerine hava giremez; kutunun içindeki basınç giderek azalır. Dışarıdaki açık hava basıncı daha büyük kaldığı için kutunun yan yüzlerini içeri bastırır. Doğrudur.
Adım 2: III. yargıyı kontrol et. Delik açılınca dışarıdaki hava kutuya girer. İçerideki basınç artar ve dışarıdakine eşitlenir; kutu bu yüzden eski biçimine döner. Doğrudur.
Adım 3: I. yargıyı kontrol et. Delikten sonra meyve suyunun yüzeyine yine hava basıncı etki eder. Pipetteki hava çekilince bu basınç meyve suyunu pipete iter. Doğrudur.
Sık yapılan hata: Pipetle içmeyi "emme" diye düşünüp hava basıncının rolünü atlamak. Kutu kapalıyken içmenin zorlaşması, sıvıyı iten şeyin hava basıncı olduğunu gösterir.
Cevap D.`
},
{
  id: "fen-sg-222",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Taban alanları eşit olan K ve L kaplarına aynı sudan eşit miktarda konmuştur. K kabı yukarı doğru genişleyen, L kabı ise yukarı doğru daralan biçimdedir. Kaplardaki suyun yükseklikleri görselde verilmiştir. Bu kaplarla ilgili şu yargılar ileri sürülmüştür:
I. Kaplardaki suyun miktarları ve kapların taban alanları eşit olduğu için tabanlara etki eden su basınçları eşittir.
II. L kabındaki suyun derinliği, K kabındaki suyun derinliğinden fazladır.
III. L kabının tabanına etki eden su basıncı, K kabının tabanına etki eden su basıncından büyüktür.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 480 270" role="img" aria-label="Taban alanları eşit kaplar: yukarı doğru genişleyen K kabında 12 cm, yukarı doğru daralan L kabında 20 cm su"><g fill="var(--dolgu)"><polygon points="61,229 139,229 160,134 40,134"/><polygon points="301,229 379,229 359,70 321,70"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 40 L60 230 H140 L180 40"/><path d="M325 40 L300 230 H380 L355 40"/></g><g stroke="var(--vurgu)" stroke-width="3"><line x1="40" y1="134" x2="160" y2="134"/><line x1="321" y1="70" x2="359" y2="70"/></g><g fill="currentColor" font-size="15"><text x="168" y="190">12 cm</text><text x="390" y="150">20 cm</text><text x="95" y="256">K</text><text x="335" y="256">L</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Katı basıncı mantığını sıvıya uygulama: sıvı basıncı ağırlığa ve taban alanına göre değil, derinliğe göre belirlenir; I yanlıştır, görselden okunan II ise doğrudur.",
    "Derinliği görüp sonuca bağlamama: L'deki su daha derinse (II) L'nin taban basıncı da daha büyüktür; basınçlar eşit olamaz, I yanlış, III doğrudur.",
    null,
    "Çelişkiyi fark etmeme: I'e göre taban basınçları eşit, III'e göre farklıdır; iki yargı birlikte doğru olamaz. Basıncı belirleyen derinlik olduğu için I yanlıştır."
  ],
  aciklama: `Durgun bir sıvının taban basıncı, sıvının derinliğine ve cinsine bağlıdır. Kabın biçimi ve sıvının miktarı taban basıncını belirlemez.
Adım 1: II. yargıyı kontrol et. Görselde K'deki su 12 cm, L'deki su 20 cm yüksekliktedir. L'deki su daha derindir. Doğrudur.
Adım 2: III. yargıyı kontrol et. İki kapta da aynı sıvı vardır. L'deki su daha derin olduğu için L'nin taban basıncı daha büyüktür. Doğrudur.
Adım 3: I. yargıyı kontrol et. Su miktarları ve taban alanları eşittir; ama sıvı basıncı katı basıncı gibi "ağırlık bölü alan" mantığıyla karşılaştırılmaz. Biçimleri farklı kaplarda eşit miktardaki su farklı yüksekliklere çıkar ve taban basınçları farklı olur. Yanlıştır.
Sık yapılan hata: Katı basıncındaki "ağırlık ve temas alanı" değişkenlerini sıvılara uygulamak. Sıvılarda bakılacak değişkenler derinlik ve sıvının cinsidir.
Cevap C.`
},
{
  id: "fen-sg-223",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Su dolu kapalı bir kabın üst kısmında, kabın boynunda sürtünmesiz hareket edebilen bir piston vardır. Kabın içindeki K noktası pistona yakın, L noktası ise kabın tabanına yakındır. Pistonun üzerine bir ağırlık konunca piston, suya ek bir basınç uygulamaktadır. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. Ağırlık konunca K noktasındaki su basıncı artar.
II. Ağırlık konunca K ve L noktalarındaki su basınçlarının artış miktarları birbirine eşittir.
III. Ağırlık konduktan sonra K ve L noktalarındaki su basınçları birbirine eşit olur.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 500 260" role="img" aria-label="Su dolu kapalı kap: boyundaki pistonun üzerinde ağırlık var; K noktası pistona yakın, L noktası tabana yakın"><g fill="var(--dolgu)"><rect x="101" y="81" width="298" height="148"/><rect x="221" y="65" width="58" height="17"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M220 15 V80 H100 V230 H400 V80 H280 V15"/></g><rect x="222" y="55" width="56" height="10" fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"/><rect x="230" y="22" width="40" height="33" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><g fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"><circle cx="200" cy="105" r="7"/><circle cx="320" cy="205" r="7"/></g><g fill="currentColor" font-size="15"><text x="186" y="128">K</text><text x="332" y="210">L</text><text x="290" y="40">Ağırlık</text><text x="290" y="66">Piston</text><text x="130" y="170">Su</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Pascal prensibini eksik uygulama: pistonun ek basıncı yalnızca K'ye değil, her noktaya aynen iletilir; K ve L'deki artışlar eşittir, II de doğrudur.",
    null,
    "Artışların eşitliğini basınçların eşitliği sanma: K ve L'deki basınçlar aynı miktarda artar, ama L daha derinde olduğu için L'nin basıncı yine büyük kalır.",
    "I'i atlayıp III'ü doğru sayma: K'deki basınç artar (I doğru); L derinde olduğu için K ve L'nin basınçları eşit olmaz (III yanlış)."
  ],
  aciklama: `Durgun bir sıvıda basınç derinlikle artar. Pascal prensibine göre de sıvıya dışarıdan uygulanan basınç her noktaya aynen iletilir.
Adım 1: I. yargıyı kontrol et. Pistonun üzerine ağırlık konunca suya ek basınç uygulanır ve bu basınç K'ye de iletilir. K'deki basınç artar. Doğrudur.
Adım 2: II. yargıyı kontrol et. Ek basınç her noktaya aynen iletildiği için K'deki ve L'deki artışlar eşittir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Ağırlık konmadan önce L, K'den daha derinde olduğu için L'nin basıncı daha büyüktü. İkisine de eşit miktarda ek basınç eklenince aradaki fark aynen kalır. Basınçlar eşit olmaz. Yanlıştır.
Sık yapılan hata: "Basınç her noktaya aynen iletiliyorsa her noktadaki basınç eşittir." diye düşünmek. Aynen iletilen ek basınçtır; derinlikten gelen fark olduğu gibi kalır.
Cevap B.`
},
{
  id: "fen-sg-224",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Ada, "Sıvı basıncı kabın biçimine bağlıdır." yargısını test etmek için biçimleri farklı iki kap kullanmıştır. Silindir biçimli kaba 30 cm, huni biçimli kaba 15 cm yüksekliğinde su koymuş ve kapların tabanına yerleştirdiği özdeş basınç ölçerlerle ölçüm yapmıştır. Silindir biçimli kapta basınç daha büyük çıkınca "Sıvı basıncı kabın biçimine bağlıdır." sonucuna varmıştır. Öğretmeni, bu sonuca bu deneyle ulaşılamayacağını söylemiştir.
**Öğretmenin bu değerlendirmesinin gerekçesi ve deneyin nasıl düzeltilmesi gerektiği aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Kaplardaki suyun miktarları farklıdır; iki kaba eşit miktarda su konmalıdır.",
    "Kaplardaki suyun yükseklikleri farklıdır; iki kaba aynı yükseklikte su konmalıdır.",
    "Kaplarda aynı sıvı kullanılmıştır; kaplardan birine farklı bir sıvı konmalıdır.",
    "Kapların biçimleri farklıdır; iki kap da aynı biçimde seçilmelidir."
  ],
  dogru: 1,
  hatalar: [
    "Miktarı kontrol değişkeni sanma: sıvı basıncını etkileyen miktar değil derinliktir; eşit miktardaki su, biçimleri farklı kaplarda farklı yüksekliklere çıkar ve derinlikler yine farklı olur.",
    null,
    "Kontrol değişkenini bozma: sıvının cinsinin aynı olması doğrudur ve öyle kalmalıdır; farklı sıvı kullanmak deneye yeni bir değişken ekler.",
    "Bağımsız değişkeni sabitleme: Ada'nın test ettiği değişken kabın biçimidir; kaplar aynı biçimde seçilirse biçimin etkisi hiç ölçülemez. Asıl sorun suyun yüksekliklerinin farklı olmasıdır."
  ],
  aciklama: `Bir değişkenin etkisini test ederken yalnızca o değişken değiştirilmeli, sonucu etkileyebilecek diğer değişkenler sabit tutulmalıdır.
Adım 1: Ada'nın deneyinde değişenleri listele. Kabın biçimi değişmiştir (silindir ve huni). Ama suyun yüksekliği de değişmiştir (30 cm ve 15 cm).
Adım 2: Sıvı basıncı derinliğe bağlıdır. Silindir biçimli kaptaki basıncın büyük çıkması, kabın biçiminden değil, suyun daha derin olmasından kaynaklanabilir.
Adım 3: Deneyi düzeltmek için iki kaba aynı yükseklikte su konmalıdır. O zaman değişen tek şey kabın biçimi olur. Bu deney yapıldığında basınçlar eşit çıkar; yani sıvı basıncı kabın biçimine bağlı değildir.
Sık yapılan hata: Kapları eşit miktarda suyla doldurmayı yeterli sanmak. Biçimi farklı kaplarda eşit miktardaki su farklı yükseklikte durur; kontrol edilmesi gereken miktar değil yüksekliktir.
Cevap B.`
},
{
  id: "fen-sg-225",
  kazanim: "F.8.3.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Fen dersinde üç öğrenci, basınçla ilgili gözlemlerini şöyle açıklamıştır:
I. Zeynep: "Babam arabamızı hidrolik krikoyla kaldırdı. Krikonun kolunun ittiği dar pistondaki yağ basıncı, arabayı kaldıran geniş pistondaki yağ basıncına eşittir."
II. Burak: "Yaylada yaşıyoruz. Deniz kıyısına inerken kulaklarım tıkandı. Bunun nedeni, aşağı indikçe açık hava basıncının azalmasıdır."
III. Melis: "Havuzun 2 metre derinliğindeki tabanına dalınca kulaklarım ağrıdı. Havuzun daha geniş olan diğer bölümünde aynı 2 metre derinliğe dalsaydım su basıncı daha büyük olurdu."
**Buna göre hangi öğrencilerin açıklamaları bilimsel olarak doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Ters yön: aşağı inildikçe üstteki hava tabakası kalınlaşır ve açık hava basıncı artar; Burak'ın kulaklarını tıkayan basıncın azalması değil artmasıdır. Zeynep'in açıklaması ise doğrudur.",
    "Genişlik yanılgısı: aynı derinlikte havuzun genişliği su basıncını değiştirmez; Melis'in açıklaması yanlıştır.",
    "Ters yön ve genişlik yanılgısı: açık hava basıncı aşağı inildikçe artar (II yanlış); aynı derinlikte havuzun genişliği basıncı değiştirmez (III yanlış)."
  ],
  aciklama: `Bu soruda üç farklı bilgi birlikte kullanılır: Pascal prensibi, açık hava basıncının yükseltiyle değişimi ve sıvı basıncının derinliğe bağlı olması.
Adım 1: I. açıklamayı kontrol et. Krikoda yağ, dar pistondaki basıncı geniş pistona aynen iletir; basınçlar eşittir. Kuvvet geniş pistonda büyür ama basınç aynı kalır. Doğrudur.
Adım 2: II. açıklamayı kontrol et. Yaylanın yükseltisi deniz kıyısından fazladır. Aşağı inildikçe üstteki hava tabakası kalınlaşır, açık hava basıncı artar. Burak'ın gerekçesi ters yöndedir. Yanlıştır.
Adım 3: III. açıklamayı kontrol et. Sıvı basıncı derinliğe ve sıvının cinsine bağlıdır. Aynı havuzdaki suda aynı 2 metre derinlikte basınç, havuzun genişliğinden bağımsız olarak aynıdır. Yanlıştır.
Sık yapılan hata: Bir olayın gerçekten yaşanmış olmasını, yapılan açıklamanın doğru olduğunu sanmak. Burak'ın kulakları gerçekten tıkanmıştır, ama nedeni açık hava basıncının artmasıdır.
Cevap A.`
}
);
