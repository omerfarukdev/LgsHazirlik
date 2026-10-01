// Fen Bilimleri — Sıvı ve Gaz Basıncı: Kademe 3 (LGS Ayarı) ve Havuz (kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sivi-gaz-basinci"] = window.LGS_BANK["sivi-gaz-basinci"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "fen-sg-301",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Pınar, boş bir pet şişenin yan yüzüne aynı dikey hizada K, L ve M deliklerini açmış, deliklerin üstüne bant yapıştırmıştır. Şişeyi ağzına kadar suyla doldurmuş, kapağını açık bırakmış ve bantları aynı anda çekmiştir. Daha sonra suyun deliklerden fışkırışını bir süre gözlemlemiştir.
Buna göre;
I. M deliğinden çıkan su, K deliğinden çıkan sudan daha güçlü fışkırır.
II. Su yalnızca yan yüzdeki deliklerden çıktığına göre sıvı basıncı şişenin tabanına etki etmez.
III. Şişedeki su azaldıkça L deliğinden çıkan suyun fışkırması zayıflar.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 360 290" role="img" aria-label="Yan yüzünde yukarıdan aşağıya K, L ve M delikleri bulunan, ağzına kadar su dolu pet şişe"><rect x="130" y="62" width="100" height="198" fill="var(--vurgu)" fill-opacity="0.3"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="160,20 160,45 130,62 130,260 230,260 230,62 200,45 200,20"/></g><line x1="20" y1="262" x2="340" y2="262" stroke="currentColor" stroke-width="2"/><line x1="40" y1="62" x2="128" y2="62" stroke="currentColor" stroke-dasharray="4 3"/><g fill="currentColor"><circle cx="230" cy="110" r="5"/><circle cx="230" cy="170" r="5"/><circle cx="230" cy="230" r="5"/></g><g fill="currentColor" font-size="16" font-weight="bold"><text x="245" y="116">K</text><text x="245" y="176">L</text><text x="245" y="236">M</text></g><text x="40" y="54" fill="currentColor" font-size="14">Su yüzeyi</text></svg>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: su aktıkça su yüzeyi alçalır, L deliğinin üstündeki su azalır. L'nin derinliği azaldığı için oradaki basınç ve fışkırma zayıflar.",
    "Basıncı yalnızca deliğin bulunduğu yöne etki ediyor sanma: tabanda delik olmaması tabana basınç etki etmediğini göstermez. Sıvı basıncı tabana da yan yüzlere de etki eder.",
    null,
    "I'i yanlış, II'yi doğru sayma: M en derindeki deliktir. Derinlik arttıkça sıvı basıncı arttığı için su M'den K'ye göre daha güçlü fışkırır."
  ],
  aciklama: `Sıvı basıncı, sıvının ağırlığından doğan ve kabın tabanına, yan yüzlerine, kısacası her yöne etki eden basınçtır. Bir noktadaki sıvı basıncı, o noktanın sıvı yüzeyinden derinliği arttıkça artar.
Adım 1 (I): M deliği su yüzeyinden en derinde, K deliği en sığdadır. M'deki sıvı basıncı daha büyük olduğu için su M'den daha güçlü fışkırır. I doğrudur.
Adım 2 (II): Suyun yan yüzdeki deliklerden fışkırması, suyun yan yüzeye basınç uyguladığını gösterir. Bu, tabana basınç uygulanmadığı anlamına gelmez; tabana bir delik açılsaydı su oradan da akardı. II yanlıştır.
Adım 3 (III): Su aktıkça şişedeki su yüzeyi alçalır. L deliğinin üstünde kalan su azalır, yani L'nin derinliği küçülür. Derinlik azalınca basınç da azalır ve fışkırma zayıflar. III doğrudur.
Sık yapılan hata: Derinliği kabın tabanından yukarı doğru ölçmek. Derinlik her zaman sıvının üst yüzeyinden aşağı doğru ölçülür.
Cevap C.`
},
{
  id: "fen-sg-302",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Birbirine yakın iki vadide X ve Y barajları yapılacaktır. İki baraj gölü de tatlı sudan oluşacaktır. X barajının gölü çok uzun ve geniş ancak sığ, Y barajının gölü ise kısa ve dar ama daha derin olacaktır. Göllerin uzunlukları ve su derinlikleri şekilde verilmiştir. Proje mühendisi, Y barajının duvarının tabanda X barajınınkinden daha kalın yapılması gerektiğini söylemiştir.
**Mühendisin bu kararı aşağıdaki bilgilerden hangisine dayanır?**`,
  gorsel: `<svg viewBox="0 0 560 250" role="img" aria-label="X barajı gölü 8 kilometre uzunlukta ve 40 metre derinlikte, Y barajı gölü 1 kilometre uzunlukta ve 60 metre derinlikte"><g fill="var(--vurgu)" fill-opacity="0.3"><polygon points="20,90 240,90 240,170 60,170"/><polygon points="350,60 460,60 460,180 380,180"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><polygon points="240,70 262,70 275,170 240,170"/><polygon points="460,40 482,40 495,180 460,180"/></g><g stroke="currentColor" stroke-width="2"><line x1="10" y1="170" x2="290" y2="170"/><line x1="330" y1="180" x2="550" y2="180"/></g><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="222" y1="92" x2="222" y2="168"/><line x1="442" y1="62" x2="442" y2="178"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="190" y="136">40 m</text><text x="410" y="126">60 m</text><text x="130" y="76">Göl uzunluğu: 8 km</text><text x="400" y="30">Göl uzunluğu: 1 km</text></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="150" y="205">X barajı</text><text x="440" y="215">Y barajı</text></g></svg>`,
  secenekler: [
    "Sıvı basıncı derinlik arttıkça artar; göldeki suyun miktarından etkilenmez.",
    "Sıvı basıncı göldeki su azaldıkça artar; derinlikten ise etkilenmez.",
    "Sıvı basıncı derinlik arttıkça artar; göldeki su azaldıkça da artar.",
    "Sıvı basıncı derinlik arttıkça azalır; göldeki suyun miktarından etkilenmez."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Su miktarını basıncın nedeni sanma: Y'de su az olduğu için basınç büyük olmaz. Y'nin duvar tabanında basınç, göl daha derin olduğu için büyüktür.",
    "Kısmen doğru: derinlik etkisi doğrudur ama göldeki suyun miktarı tabandaki basıncı değiştirmez. Göl kısalsa ya da uzasa, aynı derinlikte basınç aynı kalır.",
    "Ters yön: derinlik arttıkça sıvı basıncı azalmaz, artar. Bu bilgi doğru olsaydı daha kalın duvar X'e gerekirdi."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının cinsine bağlıdır; sıvının miktarına, kabın ya da gölün genişliğine bağlı değildir.
Adım 1: İki gölde de aynı sıvı (tatlı su) vardır. Öyleyse fark yalnızca derinlikten gelebilir.
Adım 2: Şekle göre X'in derinliği 40 m, Y'nin derinliği 60 m'dir. Y'nin duvarının dibine yakın bölgelerde su basıncı, X'inkinden daha büyüktür.
Adım 3: X gölünde çok daha fazla su vardır ama bu, duvarın dibindeki basıncı artırmaz. Aynı sıvıda aynı derinlikteki basınç, gölün uzunluğu ne olursa olsun aynıdır.
Adım 4: Basınç derinlikle arttığı için barajlar zaten tabanda kalın, üstte ince yapılır. Daha derin suyu tutan Y'nin tabanı daha kalın olmalıdır.
Sık yapılan hata: "Çok su, çok basınç" diye düşünüp X'in duvarının daha kalın olması gerektiğini sanmak. Basıncı belirleyen suyun miktarı değil, derinliğidir.
Cevap A.`
},
{
  id: "fen-sg-303",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Efe, dalış eğitiminin ilk gününde denizde 4 metre derinliğe inince kulaklarında hafif bir baskı hissetmiştir. Eğitmeni ona şunları söylemiştir: "Bu derinlikte kalıp başını yukarı, aşağı ya da yana çevirsen de kulaklarındaki baskı değişmez. Ama 8 metreye inersen baskı belirgin biçimde artar."
**Eğitmenin söyledikleri, sıvı basıncıyla ilgili aşağıdaki bilgilerin hangisinde birlikte ve doğru olarak verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Sıvı basıncı yalnızca aşağı doğru etki eder; derinlik arttıkça artar.",
    "Sıvı basıncı aynı derinlikte her yönde eşittir; derinlik arttıkça azalır.",
    "Sıvı basıncı aynı derinlikte her yönde eşittir; denizdeki su arttıkça artar.",
    "Sıvı basıncı aynı derinlikte her yönde eşittir; derinlik arttıkça artar."
  ],
  dogru: 3,
  hatalar: [
    "Basıncı yalnızca ağırlık yönünde sanma: sıvı basıncı her yöne etki eder. Efe başını hangi yöne çevirirse çevirsin kulağına basınç etki eder.",
    "Ters yön: derinlik arttıkça sıvı basıncı azalmaz, artar. Eğitmen de 8 metrede baskının arttığını söylemiştir.",
    "Kısmen doğru: ilk kısım doğrudur, ancak sıvı basıncı denizdeki toplam su miktarına değil, bulunulan noktanın derinliğine bağlıdır.",
    null
  ],
  aciklama: `Sıvılar, içinde bulunan her cisme her yönden basınç uygular. Bir noktadaki sıvı basıncı o noktanın derinliğine ve sıvının cinsine bağlıdır.
Adım 1: Eğitmenin ilk cümlesi: aynı derinlikte baş hangi yöne dönerse dönsün baskı değişmiyor. Bu, aynı derinlikte sıvı basıncının her yönde eşit olduğunu anlatır.
Adım 2: İkinci cümle: 8 metreye inince baskı artıyor. Bu, derinlik arttıkça sıvı basıncının arttığını anlatır.
Adım 3: Bu iki bilgiyi birlikte ve doğru veren seçenek "aynı derinlikte her yönde eşittir; derinlik arttıkça artar" seçeneğidir.
Adım 4: Denizdeki toplam su miktarı basıncı belirlemez. Dar bir koyda da açık denizde de 4 metre derinlikteki basınç aynıdır.
Sık yapılan hata: Basıncın yalnızca yukarıdaki suyun "bastırmasıyla" aşağı doğru etki ettiğini sanmak. Sıvı basıncı yanlara ve yukarı doğru da etki eder.
Cevap D.`
},
{
  id: "fen-sg-304",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Okul laboratuvarında şekilleri farklı K, L ve M kapları yatay bir masaya konmuş ve hepsine aynı yüksekliğe (h) kadar su doldurulmuştur. Kaplardaki su miktarı en fazla K'de, en az L'dedir.
Buna göre;
I. Kapların tabanlarına etki eden sıvı basınçları eşittir.
II. K kabında en çok su bulunduğu için K'nin tabanına etki eden sıvı basıncı en büyüktür.
III. Kapların her birine 200 mL daha su eklenirse tabanlarına etki eden sıvı basınçları yine eşit olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 540 250" role="img" aria-label="Geniş K kabı, dar L kabı ve yukarı doğru genişleyen M kabında aynı h yüksekliğinde su"><g fill="var(--vurgu)" fill-opacity="0.3"><rect x="20" y="110" width="140" height="100"/><rect x="210" y="110" width="50" height="100"/><polygon points="330,210 390,210 415,110 305,110"/></g><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,60 20,210 160,210 160,60"/><polyline points="210,40 210,210 260,210 260,40"/><polyline points="290,50 330,210 390,210 430,50"/></g><line x1="10" y1="212" x2="520" y2="212" stroke="currentColor" stroke-width="2"/><line x1="20" y1="110" x2="470" y2="110" stroke="currentColor" stroke-dasharray="4 3"/><line x1="480" y1="110" x2="480" y2="210" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor"><polygon points="474,120 486,120 480,110"/><polygon points="474,200 486,200 480,210"/></g><text x="492" y="166" fill="currentColor" font-size="16">h</text><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="90" y="238">K</text><text x="235" y="238">L</text><text x="360" y="238">M</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Eşit miktarda su eklemeyi eşit yükselme sanma ve I'i atlama: 200 mL su dar L kabında çok, geniş K kabında az yükselir. Ayrıca şu anki derinlikler eşit olduğu için I doğrudur.",
    "Eşit miktarı eşit derinlik sanma: 200 mL su dar kapta daha çok yükselir. Derinlikler farklılaşınca taban basınçları da farklılaşır; III yanlıştır.",
    "Sıvı basıncını su miktarına bağlama: basınç miktara değil derinliğe bağlıdır. K'de çok su olması tabanındaki basıncı artırmaz."
  ],
  aciklama: `Aynı sıvıda, aynı derinlikteki noktalara etki eden sıvı basıncı eşittir. Kabın şekli, taban alanı ve içindeki sıvı miktarı bu basıncı değiştirmez.
Adım 1 (I): Üç kapta da aynı sıvı (su) aynı h derinliğindedir. Tabanlara etki eden sıvı basınçları eşittir. I doğrudur.
Adım 2 (II): K'de en çok su vardır ama derinlik diğerleriyle aynıdır. Su miktarı basıncı artırmaz. II yanlıştır.
Adım 3 (III): Her kaba 200 mL su eklenirse dar L kabında su seviyesi çok, geniş K kabında az yükselir; yukarı doğru genişleyen M'de ise ikisinin arasında bir yükselme olur. Derinlikler artık farklıdır, bu yüzden taban basınçları eşit olmaz. III yanlıştır.
Sık yapılan hata: "Eşit miktar ekledim, öyleyse yine eşit olur." demek. Basıncı belirleyen eklenen miktar değil, su yüzeyinin ulaştığı derinliktir.
Cevap A.`
},
{
  id: "fen-sg-305",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir oto servisinde kullanılan hidrolik lift şekilde basitçe gösterilmiştir. Kapalı sistemin içi yağla doludur. Usta, küçük pistona elleriyle küçük bir kuvvet uyguladığında büyük pistonun üzerindeki otomobil yavaşça yükselmektedir. Çırak, ustasına bu kadar ağır bir otomobilin küçük bir kuvvetle nasıl kaldırılabildiğini sormuştur.
**Ustanın çırağa vereceği doğru açıklama aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 540 260" role="img" aria-label="Küçük pistona aşağı doğru kuvvet uygulanan, büyük pistonun üstünde otomobil bulunan yağ dolu hidrolik lift"><path d="M60,108 L100,108 L100,180 L300,180 L300,118 L480,118 L480,220 L60,220 Z" fill="var(--vurgu)" fill-opacity="0.3"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="60,60 60,220 480,220 480,60"/><polyline points="100,60 100,180 300,180 300,60"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="60" y="96" width="40" height="12"/><rect x="300" y="106" width="180" height="12"/><rect x="320" y="66" width="140" height="40" rx="8"/></g><line x1="80" y1="34" x2="80" y2="84" stroke="var(--vurgu2)" stroke-width="3"/><polygon points="72,82 88,82 80,94" fill="var(--vurgu2)"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="80" y="24">Ustanın kuvveti</text><text x="390" y="91">Otomobil</text><text x="200" y="206">Yağ</text><text x="80" y="246">Küçük piston</text><text x="390" y="246">Büyük piston</text></g></svg>`,
  secenekler: [
    "Basınç büyük pistona aynen iletilir; büyük pistonun yüzeyi geniş olduğundan onu iten kuvvet büyük olur.",
    "Basınç büyük pistona artarak iletilir; bu yüzden büyük pistonu iten kuvvet büyük olur.",
    "Kuvvet büyük pistona aynen iletilir; büyük pistonun yüzeyi geniş olduğundan ona etki eden basınç büyük olur.",
    "Basınç büyük pistona aynen iletilir; büyük pistonun yüzeyi geniş olduğundan onu iten kuvvet küçük olur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Basıncın sıvıda büyüdüğünü sanma: kapalı kaptaki sıvı basıncı artırmaz, olduğu gibi iletir. Kuvveti büyüten, pistonların yüzey alanları arasındaki farktır.",
    "Kuvvet ile basıncı karıştırma: sıvının aynen ilettiği şey kuvvet değil basınçtır. Büyük pistonun altındaki basınç, küçük pistonun altındakiyle aynıdır.",
    "Ters yön: aynı basınç geniş yüzeyin her parçasına ayrı ayrı etki eder. Bu yüzden büyük pistonu iten toplam kuvvet küçük değil, büyüktür."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve kabın her yüzüne aynen (azalmadan, artmadan) iletilir.
Adım 1: Usta küçük pistonu ittiğinde kapalı kaptaki yağa bir basınç uygular.
Adım 2: Pascal prensibine göre bu basınç yağın her yerine aynen iletilir. Büyük pistonun altındaki basınç, küçük pistonun altındakiyle aynıdır.
Adım 3: Basınç, birim yüzeye etki eden dik kuvvettir. Aynı basınç çok daha geniş bir yüzeye etki ettiğinde, o yüzeyi iten toplam kuvvet büyük olur. Bu yüzden küçük bir kuvvetle ağır bir otomobil kaldırılabilir.
Sık yapılan hata: "Sıvı kuvveti iletir." demek. Sıvının aynen ilettiği büyüklük basınçtır; kuvvet, yüzey alanına göre büyür ya da küçülür.
Cevap A.`
},
{
  id: "fen-sg-306",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Deniz kenarındaki bir kasabada yaşayan Defne, ailesiyle 2000 metre yükseklikteki bir yaylaya gitmiştir. Kasabadan aldığı kapalı cips paketinin yaylada balon gibi şiştiğini görmüştür. Yaylada boş bir pet şişenin kapağını sıkıca kapatmış, kasabaya dönünce de şişenin büzüldüğünü fark etmiştir.
Buna göre;
I. Yayladaki açık hava basıncı, kasabadaki açık hava basıncından küçüktür.
II. Pet şişenin büzülmesi, kasabada havanın şişeye dışarıdan uyguladığı basıncın yayladakinden büyük olmasıyla açıklanabilir.
III. Cips paketi, yaylada içine dışarıdan hava girdiği için şişmiştir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: şişe kasabada büzüldüğüne göre dışarıdan etki eden hava basıncı artmıştır. Bu da kasabada açık hava basıncının yayladakinden büyük olduğunu gösterir.",
    "Kapalı pakete hava girdiğini sanma: paket kapalıdır, içindeki hava miktarı değişmez. Paketin şişmesinin nedeni dışarıdaki hava basıncının azalmasıdır.",
    null,
    "I'i atlayıp III'ü doğru sayma: yükseklere çıkıldıkça açık hava basıncı azalır, I doğrudur. Paket kapalı olduğu için içine hava girmez, III yanlıştır."
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının yüzeylere uyguladığı basınçtır. Yükseklere çıkıldıkça üstte kalan hava tabakası azaldığı için açık hava basıncı azalır.
Adım 1 (I): Yayla, deniz kenarındaki kasabadan çok daha yüksektedir. Bu yüzden yayladaki açık hava basıncı daha küçüktür. I doğrudur.
Adım 2 (II): Şişe yaylada kapatıldığında içinde yayla havası kalmıştır. Kasabaya inince dışarıdaki hava şişeye daha büyük bir basınçla etki eder ve şişeyi içeri doğru büzer. II doğrudur.
Adım 3 (III): Paket kapalıdır; içine dışarıdan hava girmez. Paket, dışarıdaki hava basıncı azaldığı için içindeki havanın etkisiyle şişmiştir. III yanlıştır.
Sık yapılan hata: Şişmeyi "içeri hava girdi" diye, büzülmeyi "içerideki hava kaçtı" diye açıklamak. İki kap da kapalıdır; değişen, dışarıdaki açık hava basıncıdır.
Cevap C.`
},
{
  id: "fen-sg-307",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Usta Hakan, bir bahçe duvarının iki ucuna aynı yükseklikte birer işaret koymak istemektedir. Bunun için iki ucu açık, uzun ve şeffaf bir hortumu suyla doldurmuştur. Hortumun bir ucunu duvarın K ucunda, su yüzeyi oradaki işaretle aynı hizada olacak biçimde tutmuştur. Hortumu yerdeki bir çukurun içinden geçirerek diğer ucunu duvarın L ucuna götürmüştür. Su durulunca L ucundaki su yüzeyinin hizasına ikinci işareti koymuştur. Hortumun L tarafında kalan kısmı, K tarafındakinden çok daha uzundur.
**Ustanın bu yöntemle iki işareti aynı yüksekliğe koyabilmesini sağlayan bilgi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir.",
    "Birbirine bağlı kollardaki su, iki koldaki su miktarları eşitlenene kadar akar.",
    "Sıvı basıncı kabın şekline bağlı olmadığı için hortumun her noktasında aynıdır.",
    "Birbirine bağlı açık kollarda durgun suyun yüzeyleri her zaman aynı hizada olur."
  ],
  dogru: 3,
  hatalar: [
    "Pascal prensibiyle karıştırma: bu bilgi doğrudur ama kapalı bir sıvıya dışarıdan basınç uygulanan düzenekleri (kriko, fren) açıklar. Hortumun iki ucu açıktır ve suya kimse basınç uygulamamaktadır.",
    "Su miktarını etken sanma: hortumun L tarafı çok daha uzun olduğu için o tarafta daha çok su vardır. Su, miktarlar eşitlenince değil, iki uçtaki yüzeyler aynı hizaya gelince durur.",
    "Aşırı genelleme: sıvı basıncı kabın şekline bağlı değildir ama derinliğe bağlıdır. Hortumun çukura inen kısmındaki basınç, uçlardakinden büyüktür.",
    null
  ],
  aciklama: `Bileşik kaplar, tabanları ya da alt kısımları birbirine bağlı, ağızları açık kaplardır. İçlerine aynı sıvı konduğunda sıvı durgun hâle gelince bütün kollarda sıvı yüzeyleri aynı hizada olur.
Adım 1: Su dolu, iki ucu açık hortum bir bileşik kaptır. Hortumun iki ucu, bu bileşik kabın iki koludur.
Adım 2: Su durgunken iki koldaki su yüzeyleri aynı yüksekliktedir. Bu, kolların uzunluğuna, içlerindeki su miktarına ya da hortumun çukurdan geçmesine bağlı değildir.
Adım 3: K ucundaki su yüzeyi işaretle aynı hizada tutulduğuna göre L ucundaki su yüzeyi de aynı yüksekliktedir. Usta L'ye koyduğu işareti bu yüzden doğru yere koyar.
Adım 4: Öteki bilgileri ele. Pascal prensibi kapalı bir sıvıya dışarıdan uygulanan basıncın iletilmesini anlatır; burada hortumun iki ucu açıktır. Hortumun L tarafı daha uzun olduğu için iki taraftaki su miktarları eşit değildir. Hortumun çukurdaki kısmı daha derinde olduğu için oradaki basınç uçlardakinden büyüktür.
Sağlama: Su yüzeyleri farklı hizada olsaydı alçak yüzeyin altında basınç daha küçük olurdu ve su o kola doğru akmaya devam ederdi; su ancak yüzeyler aynı hizaya gelince durur.
Sık yapılan hata: Bu yöntemi Pascal prensibiyle açıklamak. Hortumdaki suyu iki uçta aynı hizaya getiren, bileşik kapların özelliğidir.
Cevap D.`
},
{
  id: "fen-sg-308",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir dalış kulübü, üyelerine hem yüzme havuzunda hem de denizde eğitim vermektedir. Havuzdaki su tatlı sudur; deniz suyu ise tuzlu olduğu için yoğunluğu havuz suyununkinden büyüktür. Eğitmen, dalgıçların durduğu K, L ve M noktalarının bilgilerini tabloda vermiştir.
Buna göre;
I. K ve L noktalarındaki sıvı basınçları eşittir.
II. M noktasındaki sıvı basıncı, L noktasındakinden büyüktür.
III. M noktasındaki sıvı basıncı, K noktasındakinden büyüktür.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Nokta</th><th>Bulunduğu yer</th><th>Su yüzeyinden derinliği</th></tr><tr><td>K</td><td>Yüzme havuzu (tatlı su)</td><td>2 m</td></tr><tr><td>L</td><td>Deniz (tuzlu su)</td><td>2 m</td></tr><tr><td>M</td><td>Deniz (tuzlu su)</td><td>5 m</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: M, K'den hem daha derindir hem de yoğunluğu daha büyük bir sıvıdadır. İki etken de M'deki basıncı büyütür.",
    "Sıvının cinsini yok sayma: K ve L aynı derinlikte olsa da L'nin bulunduğu deniz suyunun yoğunluğu daha büyüktür; I yanlıştır. Ayrıca II doğrudur.",
    null,
    "Yalnızca derinliğe bakma: aynı derinlikte, yoğunluğu büyük sıvıdaki basınç daha büyüktür. K ile L'deki basınçlar eşit değildir; I yanlıştır."
  ],
  aciklama: `Sıvı basıncı iki etkene bağlıdır: derinlik ve sıvının cinsi (yoğunluğu). Aynı sıvıda derin olan noktada, aynı derinlikte ise yoğunluğu büyük sıvıda basınç daha büyüktür.
Adım 1 (I): K ve L aynı derinliktedir (2 m) ama L yoğunluğu daha büyük olan deniz suyundadır. L'deki basınç K'dekinden büyüktür. I yanlıştır.
Adım 2 (II): L ve M aynı sıvıdadır (deniz suyu). M daha derin olduğu için M'deki basınç büyüktür. II doğrudur.
Adım 3 (III): M, K'den hem daha derindir hem de daha yoğun bir sıvıdadır. İki etken de aynı yönde olduğu için M'deki basınç kesinlikle büyüktür. III doğrudur.
Sık yapılan hata: "Su sudur." diyerek tatlı su ile tuzlu suyu aynı saymak. Tuz çözünmüş su daha yoğundur ve aynı derinlikte daha büyük basınç uygular.
Cevap C.`
},
{
  id: "fen-sg-309",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Arda, ağzı lastik zarla kapatılmış bir huniyi hortumla, içinde renkli su bulunan bir U borusuna bağlamıştır. Borunun kolları arasındaki seviye farkı arttıkça zara etki eden sıvı basıncı da artar. Arda şu adımları uygulamıştır:
1. adım: Huniyi su dolu kapta belli bir derinlikte tutup zarı yukarı, aşağı ve yana çevirmiş; seviye farkının değişmediğini görmüştür.
2. adım: Huniyi yerinden oynatmadan kaba bir miktar daha su eklemiş ve seviye farkının arttığını görmüştür. Defterine "Sıvı basıncı sıvının miktarına bağlıdır." diye yazmıştır.
Buna göre;
I. Kabın genişliği değiştikçe sıvı basıncının değişmediği bu etkinlikle gösterilmiştir.
II. Aynı derinlikte sıvı basıncının her yönde eşit olduğu bu etkinlikle gösterilmiştir.
III. Arda'nın defterine yazdığı sonuç, 2. adımdaki gözleme dayanılarak doğru biçimde çıkarılmıştır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 490 260" role="img" aria-label="Su dolu kapta ağzı lastik zarlı huni, hortumla U borusuna bağlı; U borusunun kolları arasında seviye farkı var"><rect x="40" y="80" width="200" height="160" fill="var(--vurgu)" fill-opacity="0.3"/><polyline points="40,50 40,240 240,240 240,50" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="110,180 170,180 140,140" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="110" y1="180" x2="170" y2="180" stroke="var(--vurgu2)" stroke-width="4"/><polyline points="140,140 140,30 340,30 340,120" fill="none" stroke="currentColor" stroke-width="3"/><path d="M340,150 V230 H400 V120" fill="none" stroke="var(--vurgu2)" stroke-width="10" stroke-opacity="0.5"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="332,110 332,238 408,238 408,90"/><polyline points="348,110 348,222 392,222 392,90"/></g><g stroke="currentColor" stroke-dasharray="4 3"><line x1="320" y1="150" x2="420" y2="150"/><line x1="380" y1="120" x2="430" y2="120"/></g><g fill="currentColor" font-size="14"><text x="178" y="196">Lastik zar</text><text x="150" y="128">Huni</text><text x="420" y="140">Seviye</text><text x="420" y="158">farkı</text><text x="330" y="80">U borusu</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Denenmeyen değişken için sonuç çıkarma: Arda kap değiştirmemiştir. Kap genişliğinin etkisi bu etkinlikte sınanmamıştır; I yanlıştır. Ayrıca II doğrudur.",
    null,
    "İki yanlışı birlikte seçme: kap genişliği hiç değiştirilmemiştir (I). Su eklenince zarın derinliği de arttığı için seviye farkının artması derinlikle açıklanır (III).",
    "Değişken kontrolünü atlama: su eklenince yalnızca su miktarı değil, zarın su yüzeyinden derinliği de artmıştır. Artışın nedeni miktar değil derinliktir; III yanlıştır."
  ],
  aciklama: `Bir deneyden sonuç çıkarırken yalnızca değiştirilen ve etkisi gözlenen değişken hakkında yargıya varılabilir. Aynı anda iki değişken değişmişse sonucun hangisinden kaynaklandığı ayırt edilmelidir.
Adım 1 (I): Arda kabı hiç değiştirmemiştir. Kap genişliğinin etkisi sınanmadığı için bu etkinlikten böyle bir sonuç çıkmaz. I yanlıştır.
Adım 2 (II): 1. adımda zar aynı derinlikte farklı yönlere çevrilmiş, seviye farkı değişmemiştir. Bu, aynı derinlikte sıvı basıncının her yönde eşit olduğunu gösterir. II doğrudur.
Adım 3 (III): Huni yerinden oynatılmamış ama kaba su eklenince su yüzeyi yükselmiştir. Zarın su yüzeyinden derinliği artmıştır. Seviye farkının artması derinlik artışından kaynaklanır; su miktarından değil. III yanlıştır.
Sağlama: Aynı derinlikte, daha geniş bir kapta daha çok su olsa da seviye farkı değişmez. Bu da basıncın miktara bağlı olmadığını gösterir.
Cevap B.`
},
{
  id: "fen-sg-310",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Otomobillerde kullanılan hidrolik fren sisteminde sürücü pedala bastığında, ana silindirdeki piston borulardaki fren yağına basınç uygular. Borular dört tekerlekteki fren pistonlarına bağlıdır ve sistemin içi yağla doludur. Şekilde görüldüğü gibi ön tekerleklere giden borular kısa, arka tekerleklere giden borular ise uzundur.
**Sürücü pedala bastığında ana silindirdeki yağa uygulanan basınçla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Pedala bağlı ana silindirden dört tekerleğin fren pistonlarına giden yağ boruları; ön borular kısa, arka borular uzun"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="210" y="40" width="100" height="40"/><rect x="40" y="30" width="70" height="40"/><rect x="410" y="30" width="70" height="40"/><rect x="40" y="200" width="70" height="40"/><rect x="410" y="200" width="70" height="40"/></g><g fill="none" stroke="var(--vurgu)" stroke-width="4"><polyline points="210,60 110,50"/><polyline points="310,60 410,50"/><polyline points="240,80 240,170 110,220"/><polyline points="280,80 280,170 410,220"/></g><line x1="260" y1="0" x2="260" y2="30" stroke="var(--vurgu2)" stroke-width="3"/><polygon points="252,26 268,26 260,38" fill="var(--vurgu2)"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="260" y="65">Ana silindir</text><text x="75" y="55">Ön sol</text><text x="445" y="55">Ön sağ</text><text x="75" y="225">Arka sol</text><text x="445" y="225">Arka sağ</text><text x="300" y="20">Pedal</text><text x="260" y="210">Fren yağı boruları</text></g></svg>`,
  secenekler: [
    "Dört tekerleğe iletilir ama daha çok yağ bulunan uzun borularda artarak ulaşır.",
    "Dört tekerleğe iletilir ama uzun borulu arka tekerleklere azalarak ulaşır.",
    "Dört tekerleğe iletilir ama borularda yalnızca aşağı doğru etki eder.",
    "Dört tekerleğe iletilir ve her tekerleğin pistonuna aynı büyüklükte ulaşır."
  ],
  dogru: 3,
  hatalar: [
    "Yağ miktarını etken sanma: uzun borularda daha çok yağ bulunması iletilen basıncı büyütmez. Pascal prensibine göre basınç her noktaya aynen, yani artmadan ve azalmadan iletilir.",
    "Uzaklığın basıncı azalttığını sanma: Pascal prensibine göre basınç kapalı sistemde azalmadan iletilir. Borunun uzunluğu iletilen basıncı değiştirmez.",
    "Basıncın tek yönde etki ettiğini sanma: sıvıya uygulanan basınç her yöne iletilir; yatay ve yukarı giden borulardaki yağa da aynı basınç etki eder.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve kabın her yüzüne aynen iletilir.
Adım 1: Hidrolik fren sistemi, içi yağla dolu kapalı bir sistemdir. Pedala basılınca ana silindirdeki piston yağa basınç uygular.
Adım 2: Bu basınç yağın her noktasına aynen iletilir. Borunun kısa ya da uzun olması, içinde az ya da çok yağ bulunması, yatay ya da eğik gitmesi iletilen basıncı değiştirmez.
Adım 3: Dört tekerleğin fren pistonuna aynı büyüklükte basınç ulaşır ve dört tekerlek aynı anda frenlenir.
Sık yapılan hata: Basıncın, sesin ya da ışığın uzaklaştıkça zayıflaması gibi uzun borularda azaldığını sanmak. Kapalı sistemdeki durgun sıvıda basınç azalmadan iletilir.
Cevap D.`
},
{
  id: "fen-sg-311",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir köyde, tepedeki su deposundan K, L ve M evlerine borularla su verilmektedir. Evlerin konumları ve depodaki su yüzeyinin hizası şekilde gösterilmiştir. K evi depoya en yakın ev, M evi ise depoya en uzak evdir. Üç evdeki musluklar aynı anda açılmıştır.
**Buna göre suyun en güçlü aktığı ev ve bunun nedeni aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 560 260" role="img" aria-label="Tepedeki su deposu; yamaçta depoya yakın K evi, ortada L evi, vadinin dibinde depoya en uzak M evi"><polyline points="0,125 120,125 200,160 330,195 440,235 560,240" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2"><line x1="40" y1="90" x2="40" y2="125"/><line x1="80" y1="90" x2="80" y2="125"/></g><rect x="25" y="55" width="70" height="35" fill="var(--vurgu)" fill-opacity="0.3"/><polyline points="25,40 25,90 95,90 95,40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="25" y1="55" x2="540" y2="55" stroke="currentColor" stroke-dasharray="5 4"/><text x="300" y="47" fill="currentColor" font-size="14">Depodaki su yüzeyinin hizası</text><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="130" y="108" width="40" height="30"/><polygon points="125,108 150,88 175,108"/><rect x="280" y="157" width="40" height="30"/><polygon points="275,157 300,137 325,157"/><rect x="450" y="206" width="40" height="30"/><polygon points="445,206 470,186 495,206"/></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="150" y="80">K</text><text x="300" y="129">L</text><text x="470" y="178">M</text><text x="60" y="30">Depo</text></g></svg>`,
  secenekler: [
    "M evi; çünkü depodaki su yüzeyinin hizasından en aşağıda kalan evdir.",
    "K evi; çünkü suyun depodan gelirken en kısa yolu izlediği evdir.",
    "M evi; çünkü depoya bağlanan borusu en uzun olan evdir.",
    "K evi; çünkü depodaki su yüzeyinin hizasına en yakın evdir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Uzaklığı basıncı belirleyen etken sanma: musluktaki su basıncı depoya olan uzaklığa değil, depodaki su yüzeyinin ne kadar altında kalındığına bağlıdır.",
    "Doğru ev, yanlış gerekçe: borunun uzunluğu basıncı artırmaz. M'de su güçlü akar çünkü M, depodaki su yüzeyinin hizasından en aşağıda kalan evdir.",
    "Ters yön: su yüzeyine yakın olmak derinliğin az olması demektir. Derinlik az olunca basınç küçük olur; K'de su en zayıf akar."
  ],
  aciklama: `Depo ile evlerin muslukları borularla birbirine bağlıdır, yani bir bileşik kap oluşturur. Bir musluktaki su basıncı, o musluğun depodaki su yüzeyinin ne kadar altında olduğuna (derinliğe) bağlıdır.
Adım 1: Şekilde depodaki su yüzeyinin hizası kesikli çizgiyle gösterilmiştir. Üç ev de bu çizginin altındadır.
Adım 2: Çizgiye en uzak (en aşağıdaki) ev vadinin dibindeki M evidir. M'deki musluğun "derinliği" en büyüktür, bu yüzden basınç en büyüktür ve su en güçlü M'de akar.
Adım 3: K evi depoya yatay olarak en yakın evdir ama su yüzeyinin hizasına da en yakındır; derinliği en küçük olduğu için su en zayıf K'de akar.
Adım 4: Borunun uzunluğu ya da depoya olan yatay uzaklık bu basıncı belirlemez.
Sık yapılan hata: "Depoya en yakın ev en güçlü suyu alır." demek. Önemli olan yatay uzaklık değil, su yüzeyinden aşağıya doğru olan yükseklik farkıdır.
Cevap A.`
},
{
  id: "fen-sg-312",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Zeytinyağının yoğunluğu suyun yoğunluğundan küçüktür. Şekildeki K ve M kaplarında su, L kabında zeytinyağı vardır. K ve L kaplarındaki sıvıların derinliği h, M kabındaki suyun derinliği ise 2h'dir. M kabının taban alanı diğer iki kabınkinden küçüktür.
Buna göre;
I. K kabının tabanına etki eden sıvı basıncı, L kabınınkinden büyüktür.
II. M kabının taban alanı küçük olduğu için tabanına etki eden sıvı basıncı K kabınınkinden küçüktür.
III. M kabının tabanına etki eden sıvı basıncı, L kabınınkinden büyüktür.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="K kabında h derinliğinde su, L kabında h derinliğinde zeytinyağı, dar M kabında 2h derinliğinde su"><rect x="30" y="140" width="120" height="80" fill="var(--vurgu)" fill-opacity="0.3"/><rect x="200" y="140" width="120" height="80" fill="var(--vurgu2)" fill-opacity="0.35"/><rect x="380" y="60" width="50" height="160" fill="var(--vurgu)" fill-opacity="0.3"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="30,90 30,220 150,220 150,90"/><polyline points="200,90 200,220 320,220 320,90"/><polyline points="380,40 380,220 430,220 430,40"/></g><line x1="10" y1="222" x2="510" y2="222" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="15"><text x="158" y="186">h</text><text x="328" y="186">h</text><text x="438" y="146">2h</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="90" y="186">Su</text><text x="260" y="186">Zeytinyağı</text><text x="405" y="146">Su</text></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="90" y="248">K</text><text x="260" y="248">L</text><text x="405" y="248">M</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü gözden kaçırma: M'deki su, L'deki zeytinyağından hem daha derin hem de daha yoğundur. İki etken de M'nin taban basıncını büyütür.",
    null,
    "Taban alanını sıvı basıncının etkeni sanma ve I'i atlama: sıvı basıncı taban alanına bağlı değildir. Ayrıca aynı derinlikte yoğun sıvı (su) daha büyük basınç yapar; I doğrudur.",
    "Taban alanını sıvı basıncının etkeni sanma: M'nin tabanı dar olsa da suyu daha derin olduğu için M'nin taban basıncı K'ninkinden büyüktür; II yanlıştır."
  ],
  aciklama: `Sıvı basıncı, sıvının derinliğine ve cinsine (yoğunluğuna) bağlıdır. Kabın taban alanı ve şekli sıvı basıncını değiştirmez.
Adım 1 (I): K ve L'de sıvılar aynı derinliktedir (h). K'deki su, L'deki zeytinyağından daha yoğundur. Bu yüzden K'nin taban basıncı büyüktür. I doğrudur.
Adım 2 (II): M ve K'de aynı sıvı (su) vardır. M'deki suyun derinliği 2h, K'deki h'dir. M'nin taban basıncı daha büyüktür; taban alanının küçük olması bunu değiştirmez. II yanlıştır.
Adım 3 (III): M'deki su, L'deki zeytinyağından hem daha derin hem de daha yoğundur. İki etken de aynı yönde olduğu için M'nin taban basıncı kesinlikle büyüktür. III doğrudur.
Sık yapılan hata: Katı basıncındaki "yüzey alanı küçülünce basınç artar" bilgisini sıvı basıncına taşımak ya da tam tersini düşünmek. Sıvı basıncında taban alanı etken değildir.
Cevap B.`
},
{
  id: "fen-sg-313",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Şekildeki kabın K, L ve M kolları alttan birbirine bağlıdır ve kolların ağızları açıktır. Kaba su konmuş ve su durgun hâle gelmiştir. X noktası K kolunda, Y noktası M kolunda ve ikisi aynı yatay düzeydedir.
Buna göre;
I. Kap hafifçe sağa eğilirse su durulduğunda kollardaki su yüzeyleri aynı yatay düzlemde olmaz.
II. M koluna bir miktar su eklenirse su durulduğunda M kolundaki su yüzeyi diğer kollardakinden yüksekte kalır.
III. X ve Y noktalarındaki sıvı basınçları eşittir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 440 260" role="img" aria-label="Geniş K kolu, ince L kolu ve yukarı doğru genişleyen M kolundan oluşan, alttan bağlı kapta aynı hizadaki su yüzeyleri; K kolunda X, M kolunda Y noktası aynı yatay düzeyde"><path d="M30,100 H130 V200 H200 V100 H220 V200 H290 L272.1,100 H387.9 L370,200 V230 H30 Z" fill="var(--vurgu)" fill-opacity="0.3"/><path d="M30,50 V230 H370 V200 L395,60 M265,60 L290,200 H220 V40 M200,40 V200 H130 V50" fill="none" stroke="currentColor" stroke-width="2"/><line x1="20" y1="170" x2="400" y2="170" stroke="currentColor" stroke-dasharray="4 3"/><g fill="currentColor"><circle cx="80" cy="170" r="5"/><circle cx="330" cy="170" r="5"/></g><g fill="currentColor" font-size="15"><text x="88" y="164">X</text><text x="338" y="164">Y</text></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="80" y="38">K</text><text x="210" y="30">L</text><text x="330" y="48">M</text></g></svg>`,
  secenekler: ["Yalnız III", "I ve II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Bileşik kapların temel özelliğini ters kurma: durgun sudaki yüzeyler kap eğilse de, bir kola su eklense de aynı yatay hizaya gelir. Ayrıca III doğrudur.",
    "Eğilen kapta yüzeylerin farklılaştığını sanma: kap eğildiğinde su kollar arasında akar ve yüzeyler yine aynı yatay düzleme gelir; I yanlıştır.",
    "Su eklenen kolda suyun yüksekte kaldığını sanma: M'ye eklenen su kollara dağılır; su durulunca bütün kollarda yüzeyler aynı hizaya gelir; II yanlıştır."
  ],
  aciklama: `Bileşik kaplar, alttan birbirine bağlı ve ağızları açık kaplardır. İçlerindeki aynı sıvı durgun hâle geldiğinde bütün kollardaki sıvı yüzeyleri aynı yatay hizada olur; kolların şekli ve genişliği bunu değiştirmez.
Adım 1 (I): Kap eğildiğinde su bir süre kollar arasında akar. Su durulunca yüzeyler yine aynı yatay düzlemde olur; yalnızca kolların içinde, kabın tabanından ölçülen su yükseklikleri farklılaşır. I yanlıştır.
Adım 2 (II): M'ye eklenen su, alttaki bağlantıdan diğer kollara da geçer. Su durulunca üç koldaki yüzeyler birlikte, aynı hizaya kadar yükselmiş olur. II yanlıştır.
Adım 3 (III): X ve Y aynı sıvıda ve aynı yatay düzeydedir. Su yüzeyleri de aynı hizada olduğuna göre iki noktanın derinliği eşittir. Aynı sıvıda aynı derinlikteki basınçlar eşittir. III doğrudur.
Sağlama: Yüzeyler farklı hizada kalsaydı alttaki bağlantıda iki yandan gelen basınçlar eşit olmaz, su durmadan akardı.
Cevap A.`
},
{
  id: "fen-sg-314",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Selin, plastik bir topun her yanına iğneyle eşit büyüklükte delikler açmış ve topu su dolu bir şırınganın ucuna takmıştır. Şırınganın pistonunu ittiğinde suyun topun üstündeki, altındaki ve yanlarındaki deliklerin hepsinden yaklaşık aynı güçte fışkırdığını görmüştür.
Buna göre;
I. Pistona uygulanan kuvvet, su tarafından topun her yanına aynen iletilmiştir.
II. Pistonla suya uygulanan basınç, su tarafından her yöne aynen iletilmiştir.
III. Bu gözlem, hidrolik krikoların çalışmasını açıklayan prensiple açıklanır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 480 220" role="img" aria-label="Su dolu şırınganın ucuna takılmış, her yanında delik bulunan top; deliklerden her yöne su fışkırıyor"><rect x="40" y="90" width="200" height="40" fill="var(--vurgu)" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><rect x="20" y="86" width="20" height="48" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="0" y1="110" x2="20" y2="110" stroke="currentColor" stroke-width="3"/><rect x="240" y="104" width="30" height="12" fill="var(--vurgu)" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><circle cx="330" cy="110" r="60" fill="var(--vurgu)" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/><g stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="6 4"><line x1="330" y1="50" x2="330" y2="12"/><line x1="330" y1="170" x2="330" y2="208"/><line x1="390" y1="110" x2="430" y2="110"/><line x1="372" y1="68" x2="400" y2="40"/><line x1="372" y1="152" x2="400" y2="180"/><line x1="288" y1="68" x2="262" y2="40"/><line x1="288" y1="152" x2="262" y2="180"/></g><polygon points="12,103 12,117 22,110" fill="var(--vurgu2)"/><g fill="currentColor" font-size="14"><text x="80" y="150">Şırınga</text><text x="30" y="70">Piston</text><text x="400" y="200">Delikli top</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Kuvvet ile basıncı karıştırma: sıvının aynen ilettiği büyüklük kuvvet değil basınçtır. Ayrıca II ve III doğrudur.",
    "III'ü gözden kaçırma: hidrolik kriko da kapalı sıvıya uygulanan basıncın her yere aynen iletilmesi ilkesine, yani Pascal prensibine dayanır.",
    "Kuvvet ile basıncı karıştırma: her deliğe etki eden kuvvet deliğin yüzeyine göre değişir; aynen iletilen basınçtır. I yanlıştır.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir.
Adım 1 (I): Sıvının aynen ilettiği büyüklük kuvvet değil basınçtır. Bir yüzeye etki eden kuvvet, o yüzeyin büyüklüğüne göre değişir. I yanlıştır.
Adım 2 (II): Su; üstteki, alttaki ve yandaki deliklerden yaklaşık aynı güçte fışkırmıştır. Bu, pistonla uygulanan basıncın her yöne aynen iletildiğini gösterir. II doğrudur.
Adım 3 (III): Hidrolik kriko, hidrolik fren ve berber koltuğu gibi düzenekler de aynı ilkeyle çalışır. III doğrudur.
Sık yapılan hata: "Pistonu ileri ittim, su da yalnızca ileri gider." diye düşünmek. Sıvıya uygulanan basınç yalnız itilen yönde değil, her yönde iletilir.
Cevap D.`
},
{
  id: "fen-sg-315",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Şekildeki kabın sol tarafında yukarı doğru uzanan, ağzı açık dar bir boyun vardır. Kap tamamen suyla doludur ve suyun yüzeyi boynun içindedir. K noktası boynun içinde, L noktası kabın tavanının hemen altında, M ve N noktaları ise kabın tabanındadır.
Buna göre;
I. L noktasının üstünde su bulunmadığı için L'deki sıvı basıncı sıfırdır.
II. K noktasındaki sıvı basıncı, L noktasındakinden küçüktür.
III. M noktası boynun tam altında olduğu için M'deki sıvı basıncı N'dekinden büyüktür.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 420 260" role="img" aria-label="Sol üstte açık dar boynu olan, suyla dolu kap; K boynun içinde, L tavanın altında, M ve N tabanda"><path d="M40,60 H100 V130 H380 V240 H40 Z" fill="var(--vurgu)" fill-opacity="0.3"/><path d="M40,30 V240 H380 V130 H100 V30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="60" x2="160" y2="60" stroke="currentColor" stroke-dasharray="4 3"/><text x="110" y="56" fill="currentColor" font-size="14">Su yüzeyi</text><g fill="currentColor"><circle cx="70" cy="100" r="5"/><circle cx="300" cy="145" r="5"/><circle cx="70" cy="226" r="5"/><circle cx="330" cy="226" r="5"/></g><g fill="currentColor" font-size="15" font-weight="bold"><text x="78" y="105">K</text><text x="308" y="160">L</text><text x="78" y="222">M</text><text x="338" y="222">N</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Basıncı yalnızca üstteki suyun ağırlığı sanma: L, su yüzeyinin altındadır. Sıvı basıncı her yöne etki eder; kabın tavanı da suya basınç uygular. L'deki basınç sıfır değildir.",
    null,
    "Üstteki su sütununa bakma: sıvı basıncı noktanın su yüzeyinden derinliğine bağlıdır. M ve N aynı derinlikte olduğu için basınçları eşittir; I de yanlıştır.",
    "Boynun altındaki noktayı ayrıcalıklı sanma: M ve N aynı sıvıda, su yüzeyinden aynı derinliktedir; basınçları eşittir. III yanlıştır."
  ],
  aciklama: `Bir noktadaki sıvı basıncı, o noktanın sıvının serbest (açık) yüzeyinden aşağıya doğru derinliğine bağlıdır. Noktanın tam üstünde su olup olmaması önemli değildir.
Adım 1 (I): L noktası, boyundaki su yüzeyinin altındadır. Kabın tavanı suyu aşağı doğru iter, su da her yöne basınç uygular. L'deki basınç sıfır değildir. I yanlıştır.
Adım 2 (II): Şekilde K, su yüzeyine L'den daha yakındır; yani K'nin derinliği daha küçüktür. Aynı sıvıda derinliği küçük olan noktada basınç küçüktür. II doğrudur.
Adım 3 (III): M ve N aynı yatay düzeyde, yani su yüzeyinden aynı derinliktedir. Aynı sıvıda aynı derinlikteki basınçlar eşittir. III yanlıştır.
Sık yapılan hata: Basıncı "noktanın tam üstündeki su sütunu" ile ölçmek. Derinlik her zaman serbest su yüzeyinin hizasından ölçülür.
Cevap B.`
},
{
  id: "fen-sg-316",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, sıvı basıncının sıvının cinsine bağlı olup olmadığını test etmek istemektedir. Tuzlu suyun yoğunluğu suyunkinden büyüktür. Öğrenci, şekilde gösterilen K, L, M ve N kaplarının tabanlarına özdeş basınç ölçerler yerleştirmiştir. Kapların genişlikleri, içlerindeki sıvılar ve sıvıların derinlikleri şekilde verilmiştir. Öğretmeni, bir deneyde yalnızca test edilen değişkenin değiştirilmesi, diğer bütün değişkenlerin aynı tutulması gerektiğini hatırlatmıştır.
**Buna göre öğrencinin hipotezini test etmek için hangi iki kaptaki ölçümleri karşılaştırması gerekir?**`,
  gorsel: `<svg viewBox="0 0 560 270" role="img" aria-label="Geniş K kabında h derinliğinde su, geniş L kabında 2h derinliğinde tuzlu su, dar M kabında h derinliğinde tuzlu su, geniş N kabında h derinliğinde tuzlu su"><rect x="20" y="160" width="110" height="60" fill="var(--vurgu)" fill-opacity="0.3"/><rect x="160" y="100" width="110" height="120" fill="var(--vurgu2)" fill-opacity="0.35"/><rect x="310" y="160" width="40" height="60" fill="var(--vurgu2)" fill-opacity="0.35"/><rect x="400" y="160" width="110" height="60" fill="var(--vurgu2)" fill-opacity="0.35"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,70 20,220 130,220 130,70"/><polyline points="160,70 160,220 270,220 270,70"/><polyline points="310,70 310,220 350,220 350,70"/><polyline points="400,70 400,220 510,220 510,70"/></g><line x1="10" y1="222" x2="550" y2="222" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="15"><text x="136" y="196">h</text><text x="276" y="166">2h</text><text x="356" y="196">h</text><text x="516" y="196">h</text></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="75" y="244">K</text><text x="215" y="244">L</text><text x="330" y="244">M</text><text x="455" y="244">N</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="75" y="264">Su</text><text x="215" y="264">Tuzlu su</text><text x="330" y="264">Tuzlu su</text><text x="455" y="264">Tuzlu su</text></g></svg>`,
  secenekler: ["K ve L", "K ve M", "K ve N", "M ve N"],
  dogru: 2,
  hatalar: [
    "İki değişkeni birlikte değiştirme: K ile L'de sıvının cinsiyle birlikte derinlik de farklıdır. Ölçülen fark derinlikten de kaynaklanabilir.",
    "Kontrol edilmesi gereken değişkeni gözden kaçırma: K ile M'de sıvının cinsiyle birlikte kap genişliği de farklıdır. Öğretmenin hatırlattığı kurala göre bu iki kap karşılaştırılmaz.",
    null,
    "Yanlış değişkeni test etme: M ile N'de sıvı aynıdır, yalnızca kap genişliği farklıdır. Bu karşılaştırma sıvının cinsinin değil, kap genişliğinin etkisini sınar."
  ],
  aciklama: `Bir deneyde test edilen değişkene bağımsız değişken, sabit tutulan değişkenlere kontrol değişkeni denir. Doğru bir karşılaştırmada iki düzenek arasında yalnızca bağımsız değişken farklı olmalıdır.
Adım 1: Bağımsız değişken sıvının cinsidir. Öyleyse karşılaştırılan kaplardan birinde su, diğerinde tuzlu su olmalıdır. Su yalnız K'dedir; karşılaştırma K ile başka bir kap arasında olacaktır.
Adım 2: Derinlik aynı olmalıdır. L'deki tuzlu suyun derinliği 2h olduğu için L elenir.
Adım 3: Kap genişliği de aynı olmalıdır. M dar, K geniştir; M elenir.
Adım 4: Geriye N kalır. K ve N'de kap genişliği ve derinlik aynı, yalnızca sıvının cinsi farklıdır.
Sık yapılan hata: "Kap genişliği zaten sıvı basıncını etkilemez, öyleyse K ile M de olur." demek. Deney tasarlanırken test edilmeyen bütün değişkenler sabit tutulur; hangi değişkenin etkisiz olduğu ancak ayrı bir deneyle gösterilir.
Cevap C.`
},
{
  id: "fen-sg-317",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Ali, sıvı basıncının kabın taban alanına bağlı olup olmadığını araştırmak istemektedir. Taban alanı büyük olan P kabına ve taban alanı küçük olan R kabına birer litre su koymuş, kapların tabanına yerleştirdiği özdeş basınç ölçerlerdeki değerleri karşılaştırmıştır. Ölçümler tabloda verilmiştir. Ali, R kabında daha büyük değer okuyunca "Kabın taban alanı küçüldükçe sıvı basıncı artar." sonucuna varmıştır.
**Ali'nin sonucunun neden güvenilir olmadığı ve deneyin nasıl düzeltilmesi gerektiği aşağıdakilerin hangisinde birlikte doğru verilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Taban alanı</th><th>Konulan su</th><th>Suyun derinliği</th><th>Basınç ölçerdeki değer</th></tr><tr><td>P</td><td>Büyük</td><td>1 L</td><td>20 cm</td><td>Daha küçük</td></tr><tr><td>R</td><td>Küçük</td><td>1 L</td><td>35 cm</td><td>Daha büyük</td></tr></table>`,
  secenekler: [
    "Suyun derinliği de değişmiştir; iki kaba su aynı derinliğe kadar konmalıdır.",
    "Kapların taban alanı farklıdır; iki kap aynı taban alanlı seçilmelidir.",
    "Suyun derinliği de değişmiştir; iki kaba yine eşit miktarda su konmalıdır.",
    "Sıvının cinsi aynı kalmıştır; kaplardan birine tuzlu su konmalıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Test edilen değişkeni sabitleme: Ali taban alanının etkisini araştırmaktadır. İki kabın taban alanı eşitlenirse araştırılan değişken ortadan kalkar.",
    "Hatayı tekrar etme: eşit miktarda su, taban alanı farklı kaplarda farklı derinlik oluşturur. Ali'nin deneyindeki sorun tam da budur.",
    "Deneye yeni bir farklılık ekleme: sıvının cinsi, bu deneyde sabit tutulması gereken bir değişkendir. Onu değiştirmek sonucu daha da belirsiz yapar."
  ],
  aciklama: `Güvenilir bir deneyde yalnızca test edilen değişken (bağımsız değişken) değiştirilir; sonucu etkileyebilecek diğer bütün değişkenler sabit tutulur.
Adım 1: Ali'nin test ettiği değişken kabın taban alanıdır. Sıvı basıncını etkileyen derinlik ise sabit tutulmalıdır.
Adım 2: Tabloya göre iki kaba eşit miktarda su konmuş, ama dar R kabında su 35 cm'ye, geniş P kabında 20 cm'ye çıkmıştır. Yani taban alanıyla birlikte derinlik de değişmiştir.
Adım 3: R'deki büyük değer, taban alanının küçüklüğünden değil, suyun daha derin olmasından kaynaklanır. Ali'nin sonucu güvenilir değildir.
Adım 4: Deney, iki kaba su aynı derinliğe kadar doldurularak düzeltilmelidir. Bu durumda iki kaptaki su miktarı farklı olur ama bu bir sorun değildir.
Sağlama: Düzeltilmiş deneyde iki ölçer aynı değeri gösterir. Bu da sıvı basıncının taban alanına bağlı olmadığını kanıtlar.
Sık yapılan hata: "Eşit miktar su koymak adil bir deneydir." sanmak. Sıvı basıncında eşit tutulması gereken, su miktarı değil derinliktir.
Cevap A.`
},
{
  id: "fen-sg-318",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Şekildeki cam kap, ortasındaki bir bölmeyle iki parçaya ayrılmıştır. Bölmenin alt kısmında bir delik vardır ve bu delik esnek bir zarla kapatılmıştır. Kabın sol bölmesine X sıvısı, sağ bölmesine Y sıvısı konmuştur. Sıvıların derinlikleri şekilde verilmiştir. Sıvılar durulduktan sonra zarın sol tarafa, yani X sıvısına doğru şiştiği gözlenmiştir.
Buna göre;
I. Zarın bulunduğu yerde X sıvısının zara uyguladığı basınç, Y sıvısınınkinden büyüktür.
II. Y sıvısının yoğunluğu, X sıvısının yoğunluğundan büyüktür.
III. Sağ bölmeye bir miktar daha Y sıvısı eklenirse zar sol tarafa daha çok şişer.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 480 270" role="img" aria-label="Bölmeli kabın solunda 30 santimetre derinlikte X sıvısı, sağında 20 santimetre derinlikte Y sıvısı; bölmenin altındaki zar X tarafına doğru şişmiş"><rect x="40" y="80" width="198" height="160" fill="var(--vurgu)" fill-opacity="0.3"/><rect x="242" y="133" width="198" height="107" fill="var(--vurgu2)" fill-opacity="0.35"/><polyline points="40,40 40,240 440,240 440,40" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="4"><line x1="240" y1="40" x2="240" y2="205"/><line x1="240" y1="232" x2="240" y2="240"/></g><path d="M240,205 Q212,218 240,232" fill="none" stroke="var(--vurgu2)" stroke-width="3"/><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="60" y1="82" x2="60" y2="238"/><line x1="420" y1="135" x2="420" y2="238"/></g><g fill="currentColor" font-size="14"><text x="66" y="165">30 cm</text><text x="370" y="190">20 cm</text><text x="110" y="120">X sıvısı</text><text x="300" y="170">Y sıvısı</text><text x="250" y="262">Esnek zar</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Zarın şişme yönünü ters yorumlama: zar, basıncın küçük olduğu tarafa doğru itilir. Zar X tarafına şiştiğine göre zara daha büyük basıncı Y uygular.",
    "III'ü gözden kaçırma: Y eklenince Y'nin zar hizasındaki derinliği artar, zara uyguladığı basınç büyür; zar X tarafına daha çok şişer.",
    null,
    "I'i doğru sayma: zar X'e doğru itildiğine göre zara daha büyük basıncı Y sıvısı uygulamaktadır; I yanlıştır."
  ],
  aciklama: `Esnek bir zar, iki yanındaki basınçlardan büyük olanın etkisiyle küçük olan tarafa doğru şişer. Sıvı basıncı derinliğe ve sıvının yoğunluğuna bağlıdır.
Adım 1 (I): Zar X tarafına şişmiştir. Öyleyse zarın bulunduğu yerde Y'nin uyguladığı basınç X'inkinden büyüktür. I yanlıştır.
Adım 2 (II): Zar, iki bölmede de tabana yakın aynı yükseklikte durur. X'in yüzeyi daha yukarıda olduğu için zar X sıvısında daha derindedir. Y daha sığ olduğu hâlde daha büyük basınç uygulamaktadır. Bu ancak Y'nin yoğunluğu daha büyükse mümkündür. II kesinlikle doğrudur.
Adım 3 (III): Y eklenirse Y'nin yüzeyi yükselir, zarın Y sıvısındaki derinliği artar. Y'nin zara uyguladığı basınç büyür, X'inki değişmez. Zar sola daha çok şişer. III kesinlikle doğrudur.
Sık yapılan hata: "Derin olan sıvının basıncı her zaman büyüktür." diye düşünmek. Derinlik ve sıvının cinsi birlikte değiştiğinde karar gözleme göre verilir.
Cevap C.`
},
{
  id: "fen-sg-319",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Mert, kapağı sıkıca kapalı ve yarısına kadar su dolu bir cam şişeyi önce tabanı üzerinde (Durum 1), sonra ters çevirip kapağı üzerinde (Durum 2) masaya koymuştur. Şişenin boyun kısmı gövdesinden çok daha dardır. Durum 2'de su önce boynu doldurmuş, kalan su gövdeye yayılmıştır.
**Durum 1'den Durum 2'ye geçildiğinde şişenin masaya uyguladığı basınç ile suyun şişenin en alttaki iç yüzeyine uyguladığı sıvı basıncı nasıl değişir?**`,
  gorsel: `<svg viewBox="0 0 460 280" role="img" aria-label="Durum 1'de tabanı üzerinde duran şişede su gövdenin alt kısmında; Durum 2'de kapağı üzerinde duran ters şişede su boynu doldurmuş ve gövdeye yayılmış, su daha derin"><line x1="10" y1="240" x2="450" y2="240" stroke="currentColor" stroke-width="2"/><rect x="60" y="180" width="100" height="60" fill="var(--vurgu)" fill-opacity="0.3"/><rect x="325" y="190" width="30" height="40" fill="var(--vurgu)" fill-opacity="0.3"/><rect x="290" y="142" width="100" height="48" fill="var(--vurgu)" fill-opacity="0.3"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="95,60 95,100 60,100 60,240 160,240 160,100 125,100 125,60"/><polyline points="325,230 325,190 290,190 290,50 390,50 390,190 355,190 355,230"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="92" y="50" width="36" height="10"/><rect x="322" y="230" width="36" height="10"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="110" y="268">Durum 1</text><text x="340" y="268">Durum 2</text></g></svg>`,
  secenekler: [
    "Masaya etki eden basınç artar; alttaki iç yüzeye etki eden sıvı basıncı değişmez.",
    "Masaya etki eden basınç artar; alttaki iç yüzeye etki eden sıvı basıncı artar.",
    "Masaya etki eden basınç değişmez; alttaki iç yüzeye etki eden sıvı basıncı artar.",
    "Masaya etki eden basınç azalır; alttaki iç yüzeye etki eden sıvı basıncı azalır."
  ],
  dogru: 1,
  hatalar: [
    "Sıvı basıncını su miktarına bağlama: su miktarı değişmese de dar boyun yüzünden suyun derinliği artar; bu yüzden sıvı basıncı da artar.",
    null,
    "Katı basıncında yüzey alanını unutma: şişenin ağırlığı değişmez ama masaya değen yüzey (kapak) küçülür; masaya etki eden basınç artar.",
    "Ters yön: aynı ağırlık daha küçük bir yüzeye daha büyük basınç uygular. Dar boyun nedeniyle suyun derinliği de artar; iki basınç da artar."
  ],
  aciklama: `Bu soru iki bilgiyi birleştirir: Katı basıncı, aynı ağırlıkta yüzey alanı küçüldükçe artar. Sıvı basıncı ise aynı sıvıda derinlik arttıkça artar.
Adım 1 (katı basıncı): Şişe ve içindeki suyun toplam ağırlığı iki durumda da aynıdır. Durum 1'de masaya geniş taban, Durum 2'de dar kapak değer. Yüzey alanı küçüldüğü için masaya etki eden basınç artar.
Adım 2 (suyun derinliği): Durum 1'de su gövdenin alt kısmına yayılmıştır. Durum 2'de su önce dar boynu doldurur. Boyun dar olduğu için onu doldurmak az su ister; kalan su gövdede de bir miktar yükselir. Şekilde görüldüğü gibi Durum 2'deki su sütunu daha yüksektir.
Adım 3 (sıvı basıncı): Derinlik arttığı için suyun en alttaki iç yüzeye (kapağın iç yüzüne) uyguladığı sıvı basıncı artar.
Sık yapılan hata: "Su miktarı değişmedi, öyleyse sıvı basıncı da değişmez." demek. Sıvı basıncı miktara değil derinliğe bağlıdır.
Cevap B.`
},
{
  id: "fen-sg-320",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Şekildeki kapalı kap sıvıyla doludur. Kabın K, L ve M kollarındaki pistonlar aynı yüksekliktedir; pistonların ağırlıkları ve sürtünmeleri önemsizdir. Pistonların yüzey alanları arasında K < L < M ilişkisi vardır. K pistonuna aşağı doğru bir kuvvet uygulanmış, L ve M pistonlarının üzerine yükler konarak üç piston da aynı yükseklikte dengede tutulmuştur.
Buna göre;
I. K, L ve M pistonlarının altındaki sıvı basınçları eşittir.
II. M pistonunun üzerindeki yük, L pistonunun üzerindeki yükten büyüktür.
III. K'ye uygulanan kuvvet artırılırsa basınç yalnızca K'ye en yakın olan L pistonunun altında artar.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 540 270" role="img" aria-label="Alttan bağlı, sıvı dolu kapalı kapta dar K, orta L ve geniş M kollarında aynı yükseklikte pistonlar; K'ye aşağı doğru kuvvet, L ve M'nin üzerinde yük"><path d="M70,110 H100 V180 H200 V110 H260 V180 H340 V110 H460 V180 H500 V230 H40 V180 H70 Z" fill="var(--vurgu)" fill-opacity="0.3"/><path d="M70,60 V180 H40 V230 H500 V180 H460 V40 M340,40 V180 H260 V60 M200,60 V180 H100 V60" fill="none" stroke="currentColor" stroke-width="2"/><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="70" y="100" width="30" height="10"/><rect x="200" y="100" width="60" height="10"/><rect x="340" y="100" width="120" height="10"/><rect x="212" y="72" width="36" height="28"/><rect x="365" y="52" width="70" height="48"/></g><line x1="85" y1="30" x2="85" y2="88" stroke="var(--vurgu2)" stroke-width="3"/><polygon points="77,86 93,86 85,98" fill="var(--vurgu2)"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="110" y="40">Kuvvet</text><text x="230" y="92">Yük</text><text x="400" y="82">Yük</text></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="85" y="256">K</text><text x="230" y="256">L</text><text x="400" y="256">M</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 3,
  hatalar: [
    "II'yi gözden kaçırma: basınçlar eşitken geniş pistonu iten kuvvet daha büyüktür. M'nin dengede kalması için üzerindeki yükün L'dekinden büyük olması gerekir.",
    "I'i atlama: pistonlar aynı yükseklikte ve sıvı aynı olduğu için piston altlarındaki basınçlar eşittir. II'nin doğruluğu da bu eşitliğe dayanır.",
    "Basıncın yalnızca yakın noktaya iletildiğini sanma: Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç her noktaya aynen iletilir.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı kaptaki sıvıya uygulanan basınç sıvının her noktasına aynen iletilir. Basınç, birim yüzeye etki eden kuvvet olduğundan aynı basınç geniş yüzeye daha büyük kuvvet uygular.
Adım 1 (I): Pistonlar aynı yükseklikte ve aynı sıvının üstündedir. K'ye uygulanan basınç L ve M'nin altına aynen iletilir. Üç pistonun altındaki basınçlar eşittir. I doğrudur.
Adım 2 (II): Basınçlar eşitken yüzey alanı büyük olan M'yi yukarı iten kuvvet, L'yi yukarı itenden büyüktür. Pistonların dengede kalması için M'nin üzerindeki yük de büyük olmalıdır. II doğrudur.
Adım 3 (III): K'ye uygulanan kuvvet artarsa artan basınç da sıvının her noktasına iletilir; yalnızca L'nin altında artmaz. III yanlıştır.
Sık yapılan hata: Eşit basınçla eşit kuvveti aynı şey sanıp "yükler eşit olmalı" demek.
Cevap D.`
},
{
  id: "fen-sg-321",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci X, Y ve Z sıvılarını ayrı kaplara koymuş ve her sıvıda farklı derinliklerde sıvı basıncını ölçmüştür. Ölçüm sonuçlarını grafikte göstermiştir.
Buna göre;
I. Ölçüm yapılan kaplarda X sıvısının miktarı Y sıvısınınkinden fazladır.
II. Y sıvısında 40 cm derinlikteki sıvı basıncı, X sıvısında 20 cm derinlikteki sıvı basıncına eşittir.
III. Z sıvısının yoğunluğu, Y sıvısının yoğunluğundan büyüktür.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 290" role="img" aria-label="Derinlik-sıvı basıncı grafiği: 40 santimetrede X 8 birim, Y 4 birim, Z 2 birim; doğrular başlangıç noktasından çıkıyor"><text x="270" y="22" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Derinliğe göre sıvı basıncı</text><g stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.6"><line x1="60" y1="175" x2="460" y2="175"/><line x1="60" y1="130" x2="460" y2="130"/><line x1="60" y1="85" x2="460" y2="85"/><line x1="60" y1="40" x2="460" y2="40"/><line x1="160" y1="40" x2="160" y2="220"/><line x1="260" y1="40" x2="260" y2="220"/><line x1="360" y1="40" x2="360" y2="220"/><line x1="460" y1="40" x2="460" y2="220"/></g><g stroke="currentColor" stroke-width="2"><line x1="60" y1="220" x2="480" y2="220"/><line x1="60" y1="220" x2="60" y2="35"/></g><g stroke-width="3"><line x1="60" y1="220" x2="460" y2="40" stroke="var(--vurgu)"/><line x1="60" y1="220" x2="460" y2="130" stroke="var(--vurgu2)"/><line x1="60" y1="220" x2="460" y2="175" stroke="currentColor"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="60" y="240">0</text><text x="160" y="240">10</text><text x="260" y="240">20</text><text x="360" y="240">30</text><text x="460" y="240">40</text><text x="270" y="270">Derinlik (cm)</text></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="52" y="180">2</text><text x="52" y="135">4</text><text x="52" y="90">6</text><text x="52" y="45">8</text></g><text x="20" y="130" fill="currentColor" font-size="14" text-anchor="middle" transform="rotate(-90 20 130)">Basınç (birim)</text><g fill="currentColor" font-size="16" font-weight="bold"><text x="468" y="45">X</text><text x="468" y="135">Y</text><text x="468" y="180">Z</text></g></svg>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Grafiği ters yorumlama: aynı derinlikte en küçük basıncı Z gösterir, yani Z'nin yoğunluğu en küçüktür. Ayrıca II grafikten doğrudan okunur.",
    "Verilmeyen bilgiye dayanma: grafik yalnızca derinlik ile basınç arasındaki ilişkiyi gösterir. Kaplardaki sıvı miktarı hakkında kesin bir şey söylenemez.",
    "Yoğunluğu ters sıralama: her derinlikte Y'nin basıncı Z'ninkinden büyüktür; Y daha yoğundur. III yanlıştır."
  ],
  aciklama: `Aynı derinlikte daha büyük basınç oluşturan sıvının yoğunluğu daha büyüktür. Grafikte doğrusu daha dik olan sıvı, aynı derinlikte daha büyük basınç oluşturur.
Adım 1 (I): Grafik derinlik ile basınç arasındaki ilişkiyi gösterir. Sıvı basıncı sıvı miktarına bağlı olmadığı için grafikten kaplardaki sıvı miktarına dair kesin bir sonuç çıkmaz. I kesin değildir.
Adım 2 (II): Grafikten Y için 40 cm'deki basınç 4 birim okunur. X için 20 cm'deki basınç da 4 birimdir. İkisi eşittir. II doğrudur.
Adım 3 (III): Örneğin 40 cm'de Y'nin basıncı 4 birim, Z'ninki 2 birimdir. Aynı derinlikte Z daha küçük basınç oluşturduğuna göre Z'nin yoğunluğu Y'ninkinden küçüktür. III yanlıştır.
Sık yapılan hata: "Kesinlikle" kökünü atlayıp akla yatkın ama verilmemiş bir bilgiyi (sıvı miktarını) doğru saymak.
Cevap A.`
},
{
  id: "fen-sg-322",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun bilim kulübü, dijital bir basınç sensörünü su dolu tanklara daldırarak dört deneme yapmıştır. Bütün denemelerde tanklara aynı musluk suyu konmuştur. Her denemede sensörün sudaki derinliğini, tankın genişliğini ve sensörün ölçüm yüzünün baktığı yönü not etmişlerdir. Denemelerin koşulları ve sensörün ekranında okunan değerler tabloda verilmiştir. Kulüp üyeleri, bu sonuçlara bakarak bazı çıkarımlar yapmıştır.
Buna göre;
I. 2. ve 4. denemelerin sonuçları, sıvı basıncının derinlik arttıkça arttığını gösterir.
II. 2. ve 3. denemelerin sonuçları, sensörün yüzü yana çevrilince ölçülen basıncın arttığını gösterir.
III. 1. ve 4. denemelerin sonuçları, sıvı basıncının tankın genişliğine bağlı olmadığını gösterir.
**çıkarımlarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Deneme</th><th>Sensörün derinliği</th><th>Tank</th><th>Sensör yüzünün yönü</th><th>Okunan değer (birim)</th></tr><tr><td>1</td><td>40 cm</td><td>Dar</td><td>Yukarı</td><td>4</td></tr><tr><td>2</td><td>20 cm</td><td>Geniş</td><td>Yukarı</td><td>2</td></tr><tr><td>3</td><td>40 cm</td><td>Geniş</td><td>Yana</td><td>4</td></tr><tr><td>4</td><td>40 cm</td><td>Geniş</td><td>Yukarı</td><td>4</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü gözden kaçırma: 1. ve 4. denemelerde yalnızca tankın genişliği farklıdır ve okunan değerler eşittir. Bu, sıvı basıncının tank genişliğine bağlı olmadığını gösterir.",
    null,
    "İki değişkenin birlikte değiştiğini görmeme: 2. ve 3. denemelerde sensörün yönüyle birlikte derinliği de farklıdır; artış derinlikten kaynaklanabilir. Ayrıca I doğrudur.",
    "II'yi doğru sayma: 2. ve 3. denemelerde derinlik de değişmiştir. Yönün etkisi ancak 3. ve 4. denemeler karşılaştırılarak incelenebilir; orada değerler eşittir."
  ],
  aciklama: `Bir sonucun hangi değişkenden kaynaklandığını söyleyebilmek için karşılaştırılan iki denemede yalnızca o değişken farklı olmalıdır. İki değişken birlikte değişmişse fark hangisinden geldi, ayırt edilemez.
Adım 1 (I): 2. ve 4. denemelerde tank (geniş) ve sensör yönü (yukarı) aynıdır; yalnızca derinlik farklıdır (20 cm ve 40 cm). Derin olan denemede değer büyüktür. I doğrudur.
Adım 2 (II): 2. ve 3. denemelerde sensörün yönüyle birlikte derinlik de değişmiştir. Değerdeki artış derinlikten de kaynaklanabilir. Yalnızca yönün farklı olduğu 3. ve 4. denemelerde ise değerler eşittir; yani yön basıncı değiştirmemiştir. II yanlıştır.
Adım 3 (III): 1. ve 4. denemelerde derinlik (40 cm) ve yön (yukarı) aynı, yalnızca tank farklıdır. Değerler eşittir; tankın genişliği sıvı basıncını değiştirmemiştir. III doğrudur.
Sık yapılan hata: Değerin arttığı iki denemeyi görüp artışı, o iki denemede değişen ilk özelliğe bağlamak. Önce iki denemede kaç koşulun farklı olduğunu say.
Cevap B.`
},
{
  id: "fen-sg-323",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir çiftlikte, tabanları aynı düzeyde olan K ve L su depoları alttan bir boruyla birbirine bağlanmıştır. Boru üzerindeki musluk kapalıdır. K deposu geniş, L deposu dardır. K'deki suyun yüksekliği 80 cm, L'deki suyun yüksekliği 30 cm'dir. Depoların üstü açıktır. Çiftçi musluğu açmış ve suyun durulmasını beklemiştir.
Buna göre;
I. Musluk açılınca su K deposundan L deposuna doğru akar.
II. Su durulduğunda K ve L depolarındaki su yüzeyleri aynı yükseklikte olur.
III. Su durulduğunda iki depodaki su yüzeyi de 55 cm yükseklikte olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 440 270" role="img" aria-label="Geniş K deposunda 80 santimetre, dar L deposunda 30 santimetre su; depolar alttan kapalı musluklu boruyla bağlı"><rect x="40" y="70" width="160" height="160" fill="var(--vurgu)" fill-opacity="0.3"/><rect x="300" y="170" width="60" height="60" fill="var(--vurgu)" fill-opacity="0.3"/><rect x="200" y="214" width="34" height="12" fill="var(--vurgu)" fill-opacity="0.3"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="40,40 40,230 200,230 200,40"/><polyline points="300,40 300,230 360,230 360,40"/><line x1="200" y1="212" x2="300" y2="212"/><line x1="200" y1="228" x2="300" y2="228"/></g><rect x="236" y="202" width="28" height="36" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="236" y1="220" x2="264" y2="220" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="60" y1="72" x2="60" y2="228"/><line x1="380" y1="172" x2="380" y2="228"/><line x1="360" y1="230" x2="400" y2="230"/></g><g fill="currentColor" font-size="14"><text x="66" y="155">80 cm</text><text x="386" y="205">30 cm</text><text x="214" y="258">Musluk (kapalı)</text></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="120" y="30">K</text><text x="330" y="30">L</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: musluk açılınca iki depo bileşik kap olur; su durulduğunda iki depodaki su yüzeyleri aynı hizaya gelir.",
    "Akış yönünü görmeme: musluğun K tarafında suyun derinliği daha büyük olduğu için basınç da büyüktür; su K'den L'ye akar. I doğrudur.",
    null,
    "Depoların genişliğini hesaba katmama: geniş K'nin yüzeyi biraz alçalırken dar L'nin yüzeyi çok yükselir. Buluşma noktası 55 cm'nin üstünde olur; ayrıca I doğrudur."
  ],
  aciklama: `Musluk açılınca iki depo, alttan bağlı ve ağzı açık bir bileşik kap olur. Su, basıncın büyük olduğu taraftan küçük olduğu tarafa akar; yüzeyler aynı hizaya gelince akış durur.
Adım 1 (I): Musluk kapalıyken musluğun K tarafındaki su derinliği 80 cm, L tarafındaki 30 cm'dir. K tarafındaki basınç daha büyük olduğu için su K'den L'ye akar. I doğrudur.
Adım 2 (II): Akış, iki depodaki su yüzeyleri aynı yüksekliğe gelince durur. II doğrudur.
Adım 3 (III): K'den çıkan su L'ye geçer. K geniş olduğu için az bir alçalmada çok su verir; L dar olduğu için bu su L'de çok yükselir. Buluşma yüksekliği 80 cm'ye daha yakın, yani 55 cm'nin üstünde olur. III yanlıştır.
Sağlama: Örneğin K'nin taban alanı L'ninkinin 4 katı olsaydı K'nin yüzeyi 10 cm alçalırken L'ninki 40 cm yükselir ve iki yüzey 70 cm'de buluşurdu.
Sık yapılan hata: Depoların genişliğini düşünmeden "tam ortada buluşur" demek.
Cevap C.`
},
{
  id: "fen-sg-324",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Şekildeki silindir biçimli kap tamamen suyla doludur ve üstü, kaba sıkıca oturan ağırlıksız bir pistonla kapatılmıştır. K noktası pistonun hemen altında, L noktası kabın ortasında, M noktası kabın tabanındadır. Pistona yukarıdan bir kuvvet uygulanmıştır. Su sıkıştırılamadığı için piston yerinden oynamamıştır.
Buna göre pistona kuvvet uygulandığı sırada;
I. Basınç artışı en çok tabandaki M noktasında olur.
II. K, L ve M noktalarının üçünde de basınç aynı miktarda artar.
III. K, L ve M noktalarındaki basınçlar birbirine eşit olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 420 270" role="img" aria-label="Suyla dolu silindir kabın üstünde piston ve pistona aşağı doğru kuvvet; K pistonun altında, L ortada, M tabanda"><rect x="150" y="62" width="120" height="178" fill="var(--vurgu)" fill-opacity="0.3"/><polyline points="150,40 150,240 270,240 270,40" fill="none" stroke="currentColor" stroke-width="2"/><rect x="150" y="50" width="120" height="12" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="210" y1="6" x2="210" y2="38" stroke="var(--vurgu2)" stroke-width="3"/><polygon points="202,36 218,36 210,48" fill="var(--vurgu2)"/><g fill="currentColor"><circle cx="210" cy="78" r="5"/><circle cx="210" cy="150" r="5"/><circle cx="210" cy="228" r="5"/></g><g fill="currentColor" font-size="15" font-weight="bold"><text x="220" y="84">K</text><text x="220" y="156">L</text><text x="220" y="226">M</text></g><g fill="currentColor" font-size="14"><text x="226" y="26">Kuvvet</text><text x="280" y="60">Piston</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Kuvvetin aşağı doğru itmesiyle basıncın tabanda biriktiğini sanma: Pascal prensibine göre pistonla uygulanan basınç suyun her noktasına aynı büyüklükte iletilir; artış M'de daha büyük olmaz.",
    null,
    "İki yanlışı birlikte seçme: basınç artışı M'de daha büyük değildir, her noktada aynıdır (I); derinlikten gelen basınç farkı da ortadan kalkmaz (III).",
    "Eklenen basıncın derinlik farkını sildiğini sanma: her noktaya aynı basınç eklenir ama M daha derinde olduğu için M'deki basınç yine en büyüktür. III yanlıştır."
  ],
  aciklama: `Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç sıvının her noktasına aynen, yani aynı büyüklükte iletilir. Sıvının kendi ağırlığından doğan basınç ise derinlikle artar.
Adım 1 (I): Pistonla uygulanan basınç suyun her noktasına aynı büyüklükte iletilir. Kuvvet aşağı doğru uygulansa da artış tabandaki M noktasında daha büyük olmaz. I yanlıştır.
Adım 2 (II): K, L ve M'nin her birine pistondan gelen aynı basınç eklenir. Üç noktada da basınç aynı miktarda artar. II doğrudur.
Adım 3 (III): Kuvvet uygulanmadan önce de M'deki basınç L'dekinden, L'deki K'dekinden büyüktü; çünkü derinlikleri farklıdır. Her birine aynı miktar eklenince bu farklar olduğu gibi kalır. Basınçlar eşit olmaz. III yanlıştır.
Sık yapılan hata: "Basınç her yere aynen iletiliyorsa her yerde basınç aynı olur." demek. Aynen iletilen, pistonun eklediği basınçtır; derinlikten gelen fark sürer.
Cevap B.`
},
{
  id: "fen-sg-325",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, X sıvısıyla dolu bir kaba ve Y sıvısıyla dolu başka bir kaba özdeş basınç sensörleri daldırmıştır. X'teki sensör sıvı yüzeyinden 30 cm, Y'deki sensör ise 20 cm derinlikteyken iki sensörün de aynı değeri gösterdiğini görmüştür. Kapların şekilleri ve büyüklükleri birbirinden farklıdır.
Buna göre;
I. Y sıvısının yoğunluğu X sıvısının yoğunluğundan büyüktür.
II. Sensörlerin ikisi de 25 cm derinliğe getirilirse Y'deki sensör daha büyük değer gösterir.
III. Y'deki sensör yerinden oynatılmadan X'teki sensör 30 cm'den daha derine indirilirse X'teki sensörün değeri Y'dekinden büyük olur.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü gözden kaçırma: 25 cm'de Y'deki sensör daha derine inmiş, X'teki daha sığa çıkmıştır. III'te ise X'teki sensör derine indikçe değeri artar.",
    "III'ü gözden kaçırma: X'teki sensör derine indikçe gösterdiği değer artar. Y'deki değer değişmediği için X'inki daha büyük olur.",
    "I'i kesin saymama: daha sığdaki Y, daha derindeki X ile aynı basıncı oluşturuyorsa Y'nin yoğunluğu büyüktür. Bu, verilerden kesin olarak çıkar.",
    null
  ],
  aciklama: `Sıvı basıncı derinlik ve sıvının yoğunluğuyla artar. Kabın şekli ve büyüklüğü sıvı basıncını etkilemez.
Adım 1 (I): Y'deki sensör daha sığdadır (20 cm) ama X'teki sensörle (30 cm) aynı değeri göstermektedir. Daha az derinlikte aynı basıncı oluşturan sıvı daha yoğundur. I kesinlikle doğrudur.
Adım 2 (II): Sensörler 25 cm'ye getirilirse Y'deki sensör 20 cm'den 25 cm'ye iner, değeri artar. X'teki sensör 30 cm'den 25 cm'ye çıkar, değeri azalır. Başlangıçta değerler eşit olduğuna göre artık Y'deki değer büyüktür. II kesinlikle doğrudur.
Adım 3 (III): Y'deki değer değişmez. X'teki sensör derine indikçe değeri artar ve Y'dekini geçer. III kesinlikle doğrudur.
Sık yapılan hata: Kapların şekil ve büyüklük farkını sonuca karıştırıp "bu bilgiyle karar verilemez" demek. Sıvı basıncı için yalnızca derinlik ve sıvının cinsi önemlidir.
Cevap D.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "fen-sg-001",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: `Bir su deposunun tabanına etki eden sıvı basıncı **aşağıdakilerden hangisine bağlıdır?**`,
  gorsel: null,
  secenekler: ["Deponun taban alanına", "Depodaki suyun derinliğine", "Deponun şekline", "Depodaki suyun miktarına"],
  dogru: 1,
  hatalar: [
    "Katı basıncıyla karıştırma: taban alanı katı basıncını etkiler; sıvı basıncı taban alanına bağlı değildir.",
    null,
    "Kabın şeklini etken sanma: aynı derinlikteki aynı sıvı, kabın şekli ne olursa olsun tabana aynı basıncı uygular.",
    "Miktarı etken sanma: çok su her zaman büyük basınç demek değildir. Geniş ve sığ bir depoda su çok olsa da taban basıncı küçük olabilir."
  ],
  aciklama: `Sıvı basıncı, sıvının derinliğine ve cinsine (yoğunluğuna) bağlıdır.
Adım 1: Depodaki sıvı sudur; sıvının cinsi bellidir. Geriye derinlik kalır.
Adım 2: Su yüzeyinden tabana kadar olan derinlik arttıkça tabandaki sıvı basıncı artar.
Adım 3: Taban alanı, kabın şekli ve su miktarı sıvı basıncını değiştirmez.
Sık yapılan hata: Katı basıncında önemli olan yüzey alanını sıvı basıncına da etken sanmak.
Cevap B.`
},
{
  id: "fen-sg-002",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdakilerden hangisi Pascal prensibinin bir uygulamasıdır?**`,
  gorsel: null,
  secenekler: ["Kar ayakkabısı", "Vantuzlu askı", "Su kulesi", "Hidrolik kriko"],
  dogru: 3,
  hatalar: [
    "Katı basıncı örneğini seçme: kar ayakkabısı, yüzey alanını büyüterek katı basıncını azaltan bir uygulamadır.",
    "Açık hava basıncı örneğini seçme: vantuzu yüzeye bastıran, dışarıdaki havanın uyguladığı basınçtır.",
    "Sıvı basıncının başka bir özelliğini seçme: su kulesi, sıvı basıncının derinliğe bağlı olmasından ve bileşik kaplardan yararlanır; Pascal prensibi değildir.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir.
Adım 1: Hidrolik krikoda küçük pistona uygulanan basınç, kapalı kaptaki yağ aracılığıyla büyük pistona aynen iletilir. Bu, Pascal prensibinin uygulamasıdır.
Adım 2: Kar ayakkabısı katı basıncıyla, vantuz açık hava basıncıyla, su kulesi ise sıvı basıncının derinlikle artmasıyla ilgilidir.
Sık yapılan hata: Sıvıyla ilgili her uygulamayı Pascal prensibi sanmak. Pascal prensibinde kapalı bir sıvıya dışarıdan basınç uygulanır ve bu basınç iletilir.
Cevap D.`
},
{
  id: "fen-sg-003",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: `Deniz kenarından yüksek bir dağın tepesine doğru çıkıldıkça açık hava basıncı **nasıl değişir?**`,
  gorsel: null,
  secenekler: ["Azalır", "Artar", "Değişmez", "Önce artar, sonra azalır"],
  dogru: 0,
  hatalar: [
    null,
    "Ters yön: yükseldikçe üstte kalan hava tabakası incelir; açık hava basıncı artmaz, azalır.",
    "Havanın basınç uygulamadığını ya da her yerde aynı olduğunu sanma: açık hava basıncı yükseklikle değişir.",
    "Yükseklikle basınç ilişkisini karıştırma: deniz kenarından yukarı çıkıldıkça açık hava basıncı sürekli azalır; önce artmaz."
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının yüzeylere uyguladığı basınçtır.
Adım 1: Deniz kenarında üstümüzdeki hava tabakası en kalındır, açık hava basıncı en büyüktür.
Adım 2: Yükseklere çıkıldıkça üstte kalan hava tabakası incelir, bu yüzden açık hava basıncı azalır.
Sık yapılan hata: Sıvı basıncındaki "derine inince artar" kuralını havada ters kurmak. Havada da durum benzerdir: hava tabakasının "dibine", yani deniz seviyesine yaklaştıkça basınç artar, yükseldikçe azalır.
Cevap A.`
},
{
  id: "fen-sg-004",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıda günlük yaşamdan bazı olaylar verilmiştir:
I. Pipetle meyve suyu içilmesi
II. Vantuzlu askının düz bir fayansa yapışıp kalması
III. Kar ayakkabısıyla karda batmadan yürünmesi
**Bu olaylardan hangileri açık hava basıncıyla açıklanır?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Kar ayakkabısını açık hava basıncına bağlama: kar ayakkabısı yüzey alanını büyütüp katı basıncını azaltır. Ayrıca vantuz (II) açık hava basıncı örneğidir.",
    "Pipeti gözden kaçırma: pipetteki hava çekilince bardaktaki sıvıyı pipete iten, sıvının yüzeyine etki eden açık hava basıncıdır. III ise katı basıncı örneğidir.",
    "Bütün basınç örneklerini aynı türden sanma: kar ayakkabısı katı basıncıyla ilgilidir; açık hava basıncıyla açıklanmaz."
  ],
  aciklama: `Açık hava basıncı, havanın bütün yüzeylere uyguladığı basınçtır. Gazlar da sıvılar gibi her yöne basınç uygular.
Adım 1 (I): Pipetin içindeki hava çekilince pipetteki basınç azalır. Bardaktaki sıvının yüzeyine etki eden açık hava basıncı sıvıyı pipete iter. Açık hava basıncı örneğidir.
Adım 2 (II): Vantuz bastırılınca altındaki hava dışarı çıkar. Dışarıdaki havanın basıncı vantuzu yüzeye bastırır. Açık hava basıncı örneğidir.
Adım 3 (III): Kar ayakkabısı, ağırlığı daha geniş bir yüzeye dağıtarak kara etki eden katı basıncını azaltır. Açık hava basıncıyla ilgisi yoktur.
Sık yapılan hata: Basınçla ilgili her olayı açık hava basıncına bağlamak. Önce basıncı uygulayanın katı bir cisim mi, sıvı mı, yoksa hava mı olduğuna bak.
Cevap A.`
},
{
  id: "fen-sg-005",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Şekildeki su dolu kovanın sol yüzünde K deliği, sağ yüzünde L ve M delikleri vardır. K ve L delikleri su yüzeyinden 10 cm, M deliği 25 cm derinliktedir. Delikler aynı anda açılmıştır.
**Buna göre deliklerden çıkan suyun fışkırma güçleri arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 440 260" role="img" aria-label="Su dolu kova: sol yüzde su yüzeyinden 10 santimetre derinlikte K deliği, sağ yüzde 10 santimetre derinlikte L ve 25 santimetre derinlikte M deliği"><rect x="140" y="70" width="160" height="160" fill="var(--vurgu)" fill-opacity="0.3"/><polyline points="140,40 140,230 300,230 300,40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="100" y1="232" x2="340" y2="232" stroke="currentColor" stroke-width="2"/><line x1="140" y1="70" x2="300" y2="70" stroke="currentColor" stroke-dasharray="4 3"/><g fill="currentColor"><circle cx="140" cy="110" r="5"/><circle cx="300" cy="110" r="5"/><circle cx="300" cy="170" r="5"/></g><g fill="currentColor" font-size="16" font-weight="bold"><text x="116" y="116">K</text><text x="310" y="116">L</text><text x="310" y="176">M</text></g><g fill="currentColor" font-size="14"><text x="170" y="62">Su yüzeyi</text><text x="20" y="116">10 cm</text><text x="340" y="116">10 cm</text><text x="340" y="176">25 cm</text></g></svg>`,
  secenekler: ["K = L = M", "K < L < M", "K = L < M", "M < K = L"],
  dogru: 2,
  hatalar: [
    "Derinliği yok sayma: M, K ve L'den daha derindedir; orada sıvı basıncı daha büyüktür.",
    "Deliğin bulunduğu yüzü etken sanma: K ve L farklı yüzlerde olsa da aynı derinliktedir. Sıvı basıncı aynı derinlikte her yönde eşittir.",
    null,
    "Ters yön: derinlik arttıkça sıvı basıncı azalmaz, artar. En güçlü fışkırma en derindeki M deliğindedir."
  ],
  aciklama: `Sıvı basıncı derinlikle artar ve aynı derinlikte her yönde eşittir.
Adım 1: K ve L delikleri farklı yüzlerde ama aynı derinliktedir (10 cm). Bu deliklerdeki basınç eşittir; su aynı güçte fışkırır.
Adım 2: M deliği 25 cm derinliktedir. Basınç en büyük M'dedir; su en güçlü M'den fışkırır.
Adım 3: İlişki K = L < M olur.
Sık yapılan hata: "Sağdaki iki delik aynı yüzde, soldaki farklı" diye deliğin bulunduğu yüze bakmak. Belirleyici olan yön değil, derinliktir.
Cevap C.`
},
{
  id: "fen-sg-006",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Okyanusun derinliklerinde çalışan araştırma denizaltılarının gövdeleri, kıyıya yakın sığ sularda turist gezdiren denizaltılarınkinden çok daha kalın ve dayanıklı yapılır.
**Bunun nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Derin sularda deniz suyunun miktarı daha fazladır.",
    "Derinlik arttıkça sıvı basıncı artar.",
    "Derinlik arttıkça açık hava basıncı artar.",
    "Derinlik arttıkça sıvı basıncı azalır."
  ],
  dogru: 1,
  hatalar: [
    "Miktarı etken sanma: sıvı basıncı suyun toplam miktarına değil, bulunulan noktanın derinliğine bağlıdır.",
    null,
    "Açık hava basıncı ile sıvı basıncını karıştırma: denizaltıyı sıkıştıran, üstündeki suyun oluşturduğu sıvı basıncıdır.",
    "Ters yön: derinlik arttıkça sıvı basıncı azalmaz, artar. Basınç azalsaydı derin sularda ince gövde yeterli olurdu."
  ],
  aciklama: `Sıvı basıncı derinlik arttıkça artar.
Adım 1: Sığ sularda gezen denizaltının üstünde az bir su derinliği vardır; gövdesine etki eden basınç küçüktür.
Adım 2: Okyanusun derinliklerinde gövdeye her yönden çok büyük bir sıvı basıncı etki eder. Gövde bu basınca dayanabilmesi için kalın ve dayanıklı yapılır.
Sık yapılan hata: "Derinde daha çok su var." diyerek basıncı su miktarına bağlamak. Basıncı artıran, su yüzeyinden olan derinliktir.
Cevap B.`
},
{
  id: "fen-sg-007",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Damperli kamyonların kasası, kasanın altındaki kapalı silindire yağ basılarak kaldırılır. Silindirdeki yağa küçük bir pompayla basınç uygulanır; bu basınç kasayı iten geniş pistona ulaşır ve ağır yüklü kasa yükselir.
**Bu sistemin çalışması aşağıdaki bilgilerden hangisine dayanır?**`,
  gorsel: null,
  secenekler: [
    "Kapalı kaptaki sıvıya uygulanan basınç, sıvının ağırlığı yönünde aşağı iletilir.",
    "Kapalı kaptaki sıvıya uygulanan basınç, sıvıyı sıkıştırıp hacmini küçültür.",
    "Kapalı kaptaki sıvıya uygulanan basınç, uzaklaştıkça azalarak iletilir.",
    "Kapalı kaptaki sıvıya uygulanan basınç, her noktaya aynen iletilir."
  ],
  dogru: 3,
  hatalar: [
    "Basıncın tek yönde iletildiğini sanma: kapalı sıvıya uygulanan basınç her yöne iletilir; kasayı yukarı iten piston da bu basıncı alır.",
    "Sıvıları gaz gibi düşünme: sıvılar sıkıştırılamaz. Hacmi küçülseydi basınç pistona iletilemez, kasa kalkmazdı.",
    "Basıncın yolda zayıfladığını sanma: Pascal prensibine göre kapalı sistemde basınç azalmadan iletilir.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir.
Adım 1: Pompa, kapalı silindirdeki yağa basınç uygular.
Adım 2: Bu basınç yağın her noktasına aynen iletilir ve kasayı iten geniş pistona da ulaşır.
Adım 3: Piston geniş olduğu için aynı basınç ona büyük bir kuvvet uygular; ağır yüklü kasa yükselir.
Sık yapılan hata: Sıvının basıncı yalnızca aşağı doğru ilettiğini sanmak. Kasayı yukarı kaldıran, yukarı doğru iletilen basınçtır.
Cevap D.`
},
{
  id: "fen-sg-008",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Özdeş iki akvaryumdan birine tatlı su, diğerine aynı derinliğe kadar tuzlu su konmuştur. Tuzlu suyun yoğunluğu tatlı suyunkinden büyüktür.
**İki akvaryumun tabanlarına etki eden sıvı basınçları için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "İkisi eşittir, çünkü sıvıların derinlikleri eşittir.",
    "Tuzlu sulu akvaryumda büyüktür, çünkü sıvının yoğunluğu büyüktür.",
    "Tatlı sulu akvaryumda büyüktür, çünkü sıvının yoğunluğu küçüktür.",
    "İkisi eşittir, çünkü akvaryumların büyüklükleri aynıdır."
  ],
  dogru: 1,
  hatalar: [
    "Sıvının cinsini yok sayma: derinlikler eşit olsa da sıvılar farklıdır. Aynı derinlikte yoğunluğu büyük sıvının basıncı büyüktür.",
    null,
    "Ters yön: yoğunluk küçüldükçe sıvı basıncı artmaz, azalır.",
    "Kabın büyüklüğünü etken sanma: akvaryumların özdeş olması basınçların eşit olmasını sağlamaz; sıvının cinsi de basıncı etkiler."
  ],
  aciklama: `Sıvı basıncı, derinliğe ve sıvının yoğunluğuna bağlıdır.
Adım 1: İki akvaryumda sıvıların derinliği aynıdır. Fark yalnızca sıvıların cinsindedir.
Adım 2: Aynı derinlikte yoğunluğu büyük olan sıvı daha büyük basınç uygular. Tuzlu su daha yoğun olduğu için tuzlu sulu akvaryumun tabanındaki basınç büyüktür.
Sık yapılan hata: Sıvı basıncını yalnızca derinliğe bağlamak. Derinlik eşitse karşılaştırmayı sıvının yoğunluğu belirler.
Cevap B.`
},
{
  id: "fen-sg-009",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Ayşe, yeni aldıkları çaydanlığı musluğun altında doldururken suyun belli bir yükseklikten sonra emzikten taşmaya başladığını fark etmiştir. Şekilde bu çaydanlığın gövdesi ve emziği görülmektedir. Emziğin ağzı, gövdenin üst kenarından daha alçaktadır.
Buna göre;
I. Emzik gövdeden dar olduğu için emzikteki su yüzeyi gövdedekinden daha yüksekte durur.
II. Çaydanlığın gövdesi ile emziği bir bileşik kap oluşturur.
III. Bu çaydanlığa su, en fazla emziğin ağzının hizasına kadar doldurulabilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 420 260" role="img" aria-label="Çaydanlığın gövdesi ve emziği; emziğin ağzı gövdenin üst kenarından alçakta, su emziğin ağzı hizasına kadar dolu"><rect x="100" y="110" width="160" height="120" fill="var(--vurgu)" fill-opacity="0.3"/><polygon points="260,190 330,110 345,110 260,215" fill="var(--vurgu)" fill-opacity="0.3"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="100,60 100,230 260,230 260,215 345,110"/><polyline points="260,60 260,190 330,110"/></g><line x1="90" y1="60" x2="270" y2="60" stroke="currentColor" stroke-width="2"/><line x1="70" y1="110" x2="380" y2="110" stroke="currentColor" stroke-dasharray="4 3"/><g fill="currentColor" font-size="14"><text x="150" y="175">Gövde</text><text x="320" y="170">Emzik</text><text x="300" y="98">Emziğin ağzı</text><text x="40" y="54">Gövdenin üst kenarı</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Bileşik kaplarda dar kolu ayrıcalıklı sanma: durgun suyun yüzeyi dar ve geniş kollarda aynı hizadadır. I yanlıştır; II ve III doğrudur.",
    "III'ü gözden kaçırma: emzikteki su yüzeyi gövdedekiyle aynı hizada olduğundan su emziğin ağzına ulaşınca taşar; daha fazla doldurulamaz.",
    "Dar kolda suyun yüksekte durduğunu sanma: bileşik kaplarda kolun genişliği su yüzeyinin hizasını değiştirmez; I yanlıştır.",
    null
  ],
  aciklama: `Bileşik kaplar, alttan birbirine bağlı ve ağızları açık kaplardır. İçlerindeki aynı sıvının yüzeyi, sıvı durgunken bütün kollarda aynı hizadadır.
Adım 1 (II): Çaydanlığın emziği gövdeye alttan bağlıdır ve ikisinin de ağzı açıktır. Gövde ile emzik bir bileşik kap oluşturur. II doğrudur.
Adım 2 (I): Bileşik kaplarda kolun dar ya da geniş olması su yüzeyinin hizasını değiştirmez. Emzikteki ve gövdedeki su yüzeyleri aynı hizadadır. I yanlıştır.
Adım 3 (III): Gövdedeki su yükseldikçe emzikteki su da aynı hizaya kadar yükselir. Su emziğin ağzına ulaşınca dışarı taşar. Bu yüzden çaydanlık en fazla emziğin ağzı hizasına kadar dolar. III doğrudur.
Sık yapılan hata: "Emzik ince, su orada daha çok yükselir." demek. Aynı sıvı, bileşik kabın bütün kollarında aynı hizada durur.
Cevap D.`
},
{
  id: "fen-sg-010",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Şekilde bir yüzme havuzunun kesiti görülmektedir. Havuzun sığ kısmı 1 m, derin kısmı 3 m derinliktedir. P noktası sığ kısmın tabanında, R noktası derin kısımda su yüzeyinden 1 m derinlikte, S noktası ise derin kısmın tabanındadır.
**Buna göre P, R ve S noktalarındaki sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Yüzme havuzu kesiti: 1 metre derinlikteki sığ kısmın tabanında P, 3 metre derinlikteki derin kısımda yüzeyden 1 metre aşağıda R ve tabanda S"><path d="M40,60 H480 V210 H240 V110 H40 Z" fill="var(--vurgu)" fill-opacity="0.3"/><polyline points="40,30 40,110 240,110 240,210 480,210 480,30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="60" x2="480" y2="60" stroke="currentColor" stroke-dasharray="4 3"/><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"><line x1="60" y1="62" x2="60" y2="108"/><line x1="455" y1="62" x2="455" y2="208"/></g><g fill="currentColor"><circle cx="140" cy="104" r="5"/><circle cx="360" cy="110" r="5"/><circle cx="360" cy="204" r="5"/></g><g fill="currentColor" font-size="16" font-weight="bold"><text x="150" y="98">P</text><text x="370" y="104">R</text><text x="370" y="198">S</text></g><g fill="currentColor" font-size="14"><text x="66" y="92">1 m</text><text x="414" y="150">3 m</text><text x="190" y="50">Su yüzeyi</text></g></svg>`,
  secenekler: ["P = R < S", "P < R < S", "R < P < S", "P = R = S"],
  dogru: 0,
  hatalar: [
    null,
    "Derin kısımda olmayı etken sanma: R, havuzun derin kısmındadır ama su yüzeyinden yalnızca 1 m aşağıdadır. P ile aynı derinlikte olduğu için basınçları eşittir.",
    "Tabanda olmayı etken sanma: P'nin tabanda olması basıncını artırmaz. Basıncı belirleyen tabana değil, su yüzeyine göre derinliktir.",
    "Derinlik farkını yok sayma: S, 3 m derinliktedir; P ve R'den daha derin olduğu için basıncı en büyüktür."
  ],
  aciklama: `Sıvı basıncı, noktanın su yüzeyinden aşağıya doğru derinliğine bağlıdır. Noktanın tabanda olup olmaması ya da altında ne kadar su bulunduğu önemli değildir.
Adım 1: P noktası sığ kısmın tabanındadır; su yüzeyinden 1 m derinliktedir.
Adım 2: R noktası derin kısımdadır ama su yüzeyinden yine 1 m derinliktedir. P ve R'deki basınçlar eşittir.
Adım 3: S noktası 3 m derinliktedir. En büyük basınç S'dedir.
Adım 4: İlişki P = R < S olur.
Sık yapılan hata: R'nin "derin kısımda" olmasına bakıp R'deki basıncı P'dekinden büyük sanmak. Altında daha çok su olması basıncı artırmaz.
Cevap A.`
},
{
  id: "fen-sg-011",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir dalgıç, deniz seviyesindeki bir gölde kolundaki basınç ölçerle ölçümler yapmıştır. Bu ölçer, dalgıca etki eden toplam basıncı göstermektedir. Ölçüm sonuçları tabloda verilmiştir.
Buna göre;
I. Su yüzeyinde (0 m) ölçülen basınç, açık hava basıncından kaynaklanır.
II. 10 m derinlikte ölçülen basıncın tamamı, göldeki suyun ağırlığından kaynaklanır.
III. Aynı ölçümler yüksek bir dağdaki gölde yapılsaydı su yüzeyinde 1 birimden küçük bir değer ölçülürdü.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm yeri</th><th>Ölçülen toplam basınç</th></tr><tr><td>Su yüzeyi (0 m)</td><td>1 birim</td></tr><tr><td>5 m derinlik</td><td>1,5 birim</td></tr><tr><td>10 m derinlik</td><td>2 birim</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: yükseklere çıkıldıkça açık hava basıncı azalır. Dağdaki gölün yüzeyinde ölçer 1 birimden küçük bir değer gösterir.",
    "Açık hava basıncının su altında da etki ettiğini unutma: 10 m'deki 2 birimin 1 birimi yüzeydeki açık hava basıncından gelir; tamamı suyun ağırlığından değildir.",
    null,
    "I'i atlama ve II'yi doğru sayma: su yüzeyinde su yoktur, ölçülen 1 birim açık hava basıncıdır. Bu basınç derinde de etkisini sürdürür; II yanlıştır."
  ],
  aciklama: `Gazlar da sıvılar gibi basınç uygular. Su yüzeyine etki eden açık hava basıncı suyun içindeki her noktaya da iletilir; derindeki toplam basınç, açık hava basıncı ile suyun oluşturduğu basıncın birlikte etkisidir.
Adım 1 (I): Su yüzeyinde dalgıcın üstünde su yoktur. Ölçülen 1 birim, havanın uyguladığı açık hava basıncıdır. I doğrudur.
Adım 2 (II): Derine inildikçe değer 1 birimin üstüne çıkar. 10 m'de ölçülen 2 birimin 1 birimi açık hava basıncından, diğer 1 birimi suyun ağırlığından kaynaklanır. II yanlıştır.
Adım 3 (III): Yüksek bir dağda açık hava basıncı deniz seviyesindekinden küçüktür. Bu yüzden dağdaki gölün yüzeyinde ölçülen değer 1 birimden küçük olur. III doğrudur.
Sık yapılan hata: Su yüzeyindeki ölçümün "sıfır" olması gerektiğini sanmak. Hava da basınç uygular.
Cevap C.`
},
{
  id: "fen-sg-012",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Hastanede bir hastaya serum takan hemşire, serum şişesini askıya, hastanın kolunun yaklaşık bir metre yukarısına asmıştır. Şişeden çıkan ince hortum, hastanın kolundaki iğneye bağlıdır. Serum hattında pompa yoktur; serum, şişeden iğneye kendiliğinden akmaktadır. Serumun damara daha hızlı akması gerektiğinde hemşire, şişeyi askıda biraz daha yukarıya asmaktadır. Akışın hızlandığını hortumdaki damlalıkta düşen damlaların sıklaşmasından anlamaktadır.
**Hemşirenin yaptığı uygulamanın açıklaması aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Serum yüzeyinin iğneye göre yüksekliği artar, iğnedeki sıvı basıncı büyür.",
    "Şişenin içindeki serumun derinliği artar, iğnedeki sıvı basıncı büyür.",
    "Serum yüzeyine etki eden açık hava basıncı artar, serum daha çok itilir.",
    "Hortumun içinde kalan serum miktarı artar, iğnedeki sıvı basıncı büyür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Şişe içindeki derinlik ile şişe-iğne yükseklik farkını karıştırma: şişe yukarı asılınca içindeki serumun derinliği değişmez. Artan, serum yüzeyinin iğneye göre yüksekliğidir.",
    "Ters yön: yükseklere çıkıldıkça açık hava basıncı artmaz, azalır. Üstelik birkaç on santimetrelik yükselme açık hava basıncını fark edilir biçimde değiştirmez.",
    "Miktarı etken sanma: hortum serumla doludur ve boyu değişmez, yani içindeki serum miktarı aynı kalır. Sıvı basıncı da miktara değil, derinliğe bağlıdır."
  ],
  aciklama: `Sıvı basıncı, sıvının derinliğine bağlıdır. Hortumla bağlı sistemde iğnedeki "derinlik", şişedeki serum yüzeyi ile iğne arasındaki yükseklik farkıdır.
Adım 1: Şişe, hortum ve iğne birbirine bağlıdır. İğnedeki sıvı basıncı, iğnenin şişedeki serum yüzeyinin ne kadar altında kaldığına bağlıdır.
Adım 2: Şişe yukarı asılınca serum yüzeyi de yukarı çıkar; serum yüzeyi ile iğne arasındaki yükseklik farkı artar. Bu, iğnenin daha "derinde" kalması demektir.
Adım 3: Derinlik artınca iğnedeki sıvı basıncı artar ve serum damara daha hızlı akar.
Adım 4: Şişenin içindeki serumun derinliği, hortumdaki serumun miktarı ve serumun cinsi değişmez. Açık hava basıncı da birkaç on santimetrelik yükselmeyle fark edilir biçimde değişmez.
Sık yapılan hata: "Derinlik" denince şişenin içindeki serumun derinliğini düşünmek. İğnedeki basıncı belirleyen, serum yüzeyinin iğneden ne kadar yukarıda olduğudur.
Cevap A.`
},
{
  id: "fen-sg-013",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `K, L, M ve N kaplarına X ya da Y sıvısı konmuştur. X sıvısının yoğunluğu Y sıvısınınkinden büyüktür. Kapların şekilleri ve taban alanları birbirinden farklıdır. Kaplardaki sıvıların cinsi ve derinlikleri tabloda verilmiştir.
Buna göre;
I. K kabının tabanına etki eden sıvı basıncı, L kabınınkinden büyüktür.
II. N kabının tabanına etki eden sıvı basıncı, M kabınınkinden büyüktür.
III. N kabının tabanına etki eden sıvı basıncı, L kabınınkinden büyüktür.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Sıvı</th><th>Sıvının derinliği</th></tr><tr><td>K</td><td>X</td><td>20 cm</td></tr><tr><td>L</td><td>Y</td><td>20 cm</td></tr><tr><td>M</td><td>X</td><td>10 cm</td></tr><tr><td>N</td><td>Y</td><td>30 cm</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: N ve L'de aynı sıvı (Y) vardır ve N daha derindir. N'nin taban basıncı kesinlikle büyüktür.",
    "I'i gözden kaçırma: K ve L'de derinlik aynıdır; K'deki X sıvısı daha yoğun olduğu için K'nin taban basıncı kesinlikle büyüktür.",
    "İki etken ters yöndeyken karar verme: N daha derin ama daha az yoğun bir sıvı içerir, M ise daha sığ ama daha yoğun bir sıvı içerir. Bu bilgilerle hangisinin basıncının büyük olduğu kesin söylenemez.",
    null
  ],
  aciklama: `Sıvı basıncı derinlik ve yoğunlukla artar. İki etkenden biri eşit ya da ikisi aynı yönde farklıysa karar kesin verilir. İki etken ters yönde farklıysa yalnızca bu bilgilerle kesin karar verilemez. Kapların şekli ve taban alanı ise sıvı basıncını etkilemez.
Adım 1 (I): K ve L aynı derinlikte (20 cm). K'deki X daha yoğundur. K'nin taban basıncı büyüktür. I kesinlikle doğrudur.
Adım 2 (II): N daha derindir (30 cm > 10 cm) ama N'deki Y daha az yoğundur. Derinlik N'yi, yoğunluk M'yi öne çıkarır. Yoğunlukların ne kadar farklı olduğu bilinmediği için karar verilemez. II kesin değildir.
Adım 3 (III): N ve L'de aynı sıvı (Y) vardır. N daha derindir. N'nin taban basıncı büyüktür. III kesinlikle doğrudur.
Sık yapılan hata: "Daha derin olan her zaman kazanır." diyerek II'yi doğru saymak. Sıvılar farklıysa derinlik tek başına yetmez.
Cevap D.`
},
{
  id: "fen-sg-014",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Kerem, okul laboratuvarındaki iki uzun cam kaptan birine zeytinyağı, diğerine su koymuştur. Zeytinyağının yoğunluğu suyun yoğunluğundan küçüktür. Kerem bir basınç sensörünü önce zeytinyağına, sonra suya daldırmıştır. Her ölçümde sensörün sıvı yüzeyinden ne kadar aşağıda olduğunu kabın kenarındaki cetvelden okumuş; bu derinlikleri ve sensörde okuduğu değerleri tabloya yazmıştır. Suda daha büyük bir değer okuyunca "Sıvı basıncı derinlik arttıkça artar." sonucuna varmıştır.
Buna göre;
I. Deney hatalı kurulduğu için "Sıvı basıncı derinlik arttıkça artar." bilgisi yanlıştır.
II. Okunan değerler arasındaki farkın derinlikten mi sıvının cinsinden mi kaynaklandığı bu ölçümlerle ayırt edilemez.
III. Kerem, sensörü aynı sıvıda iki farklı derinliğe daldırarak deneyini düzeltebilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm</th><th>Sıvı</th><th>Sensörün sıvı yüzeyinden derinliği</th><th>Okunan değer</th></tr><tr><td>1</td><td>Zeytinyağı</td><td>10 cm</td><td>Küçük</td></tr><tr><td>2</td><td>Su</td><td>25 cm</td><td>Büyük</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: sensör aynı sıvıda iki farklı derinliğe daldırılırsa iki ölçüm arasında yalnızca derinlik farklı olur; deney böyle düzeltilir.",
    "Kusurlu deneyi yanlış bilgi sanma: deneyin hatalı olması, sonucun yanlış olduğunu değil, bu deneyle gösterilemediğini anlatır. Sıvı basıncı gerçekten derinlikle artar; I yanlıştır. Ayrıca III doğrudur.",
    null,
    "Kusurlu deneyi yanlış bilgi sanma: \"Sıvı basıncı derinlik arttıkça artar.\" doğru bir bilgidir; Kerem'in deneyi yalnızca bu bilgiyi kanıtlamaya yetmez. I yanlıştır."
  ],
  aciklama: `Bir deneyle bir değişkenin etkisini göstermek için yalnızca o değişken değiştirilir; sonucu etkileyebilecek öteki değişkenler sabit tutulur. Sıvı basıncı hem derinliğe hem de sıvının cinsine (yoğunluğuna) bağlıdır.
Adım 1: Tabloya bak. İki ölçüm arasında hem derinlik (10 cm ve 25 cm) hem de sıvının cinsi (zeytinyağı ve su) farklıdır.
Adım 2 (II): Su hem daha derindedir hem de daha yoğundur. Büyük değerin derinlikten mi sıvının cinsinden mi geldiği bu iki ölçümle ayırt edilemez. II doğrudur.
Adım 3 (I): Deneyin kusurlu olması, Kerem'in yazdığı bilginin yanlış olduğunu göstermez; yalnızca bu deneyin o bilgiyi kanıtlamaya yetmediğini gösterir. Sıvı basıncı gerçekten derinlik arttıkça artar. I yanlıştır.
Adım 4 (III): Sensör aynı sıvıda, örneğin suda, önce az sonra daha çok derine daldırılırsa iki ölçüm arasında yalnızca derinlik farklı olur. Deney böyle düzeltilir. III doğrudur.
Sık yapılan hata: "Deney hatalıysa vardığı sonuç da yanlıştır." demek. Kusurlu bir deney doğru bir sonuca da varabilir, ama o sonucu kanıtlamış olmaz.
Cevap C.`
},
{
  id: "fen-sg-015",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Ece, bahçedeki yağmur suyu bidonunun alt kısmındaki musluğa uzun bir hortum takmıştır. Bidonun üstü açıktır. Ece, basamaklı bir rafta duran K, L ve M saksılarını bu hortumla sulamak istemektedir. Saksılar farklı yüksekliklerde olduğu için her birine su ulaşıp ulaşmayacağını merak etmektedir. Bidondaki su yüzeyinin ve saksıların ağızlarının yerden yükseklikleri şekilde verilmiştir. Ece musluğu açıp hortumun ucunu sırayla saksıların ağzına tutacaktır; hortumda pompa kullanılmamaktadır.
Buna göre;
I. Hortum, ucu K saksısına uzanabilecek kadar uzunsa K saksısına da su akar.
II. Hortumun ucu M saksısındayken bidona su eklenirse hortumdan akan su güçlenir.
III. Sulama sürerken bidondaki su yüzeyi 100 cm'nin altına inerse L saksısına hortumdan hiç su akmaz.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 290" role="img" aria-label="Sehpa üzerindeki yağmur suyu bidonunda su yüzeyi yerden 120 santimetre yükseklikte, bidonun altındaki musluğa hortum takılı; basamaklı rafta ağzı yerden 140 santimetre olan K, 100 santimetre olan L ve 40 santimetre olan M saksısı"><line x1="10" y1="260" x2="510" y2="260" stroke="currentColor" stroke-width="2"/><rect x="40" y="116" width="100" height="96" fill="var(--vurgu)" fill-opacity="0.3"/><polyline points="40,80 40,212 140,212 140,80" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="3"><line x1="50" y1="212" x2="50" y2="260"/><line x1="130" y1="212" x2="130" y2="260"/></g><rect x="140" y="199" width="12" height="9" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M152,204 C185,204 175,254 215,254 L285,254 Q300,254 300,238" fill="none" stroke="currentColor" stroke-width="4"/><polygon points="315,260 315,240 375,240 375,168 435,168 435,120 500,120 500,260" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g fill="none" stroke="currentColor" stroke-width="2"><polygon points="325,212 365,212 359,240 331,240"/><polygon points="385,140 425,140 419,168 391,168"/><polygon points="445,92 485,92 479,120 451,120"/></g><line x1="40" y1="116" x2="510" y2="116" stroke="var(--vurgu2)" stroke-width="2" stroke-dasharray="6 4"/><g fill="currentColor" font-size="14"><text x="90" y="70" text-anchor="middle">Yağmur suyu bidonu</text><text x="160" y="108">Su yüzeyi: 120 cm</text><text x="158" y="194">Musluk</text><text x="232" y="246">Hortum</text></g><g fill="currentColor" font-size="15" font-weight="bold" text-anchor="middle"><text x="465" y="84">K (140 cm)</text><text x="388" y="132">L (100 cm)</text><text x="334" y="204">M (40 cm)</text></g></svg>`,
  secenekler: ["Yalnız II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: su yüzeyi 100 cm'nin altına inince L saksısının ağzı su yüzeyinin hizasından yukarıda kalır; hortumdaki su oraya çıkamaz.",
    "Hortumun uzunluğunu etken sanma: K saksısının ağzı (140 cm), bidondaki su yüzeyinden (120 cm) yukarıdadır; hortum ne kadar uzun olursa olsun su oraya çıkamaz. Ayrıca II doğrudur.",
    null,
    "Hortumun uzunluğunu etken sanma: pompa olmadan su, bidondaki su yüzeyinin hizasından yukarı çıkamaz. K saksısının ağzı bu hizanın üstünde olduğu için I yanlıştır."
  ],
  aciklama: `Bidon, hortum ve hortumun ucu birlikte bir bileşik kap gibi davranır. Pompa yoksa su, bidondaki su yüzeyinin hizasından daha yukarı çıkamaz. Hortumun ucundaki basınç ise ucun bu hizanın ne kadar altında olduğuna, yani derinliğine bağlıdır.
Adım 1 (I): K saksısının ağzı 140 cm, bidondaki su yüzeyi 120 cm yüksekliktedir. Hortumun ucu K'ye tutulunca su hortumda en fazla 120 cm hizasına kadar yükselir ve orada durur. Hortumun uzun olması bunu değiştirmez. I yanlıştır.
Adım 2 (II): Bidona su eklenirse su yüzeyi yükselir. M saksısındaki hortum ucunun su yüzeyinin hizasından aşağıda kalan mesafesi, yani derinliği artar. Uçtaki basınç büyür ve su daha güçlü akar. II doğrudur.
Adım 3 (III): L saksısının ağzı 100 cm yüksekliktedir. Su yüzeyi 100 cm'nin altına inerse L'nin ağzı su yüzeyinin hizasından yukarıda kalır; hortumdaki su oraya çıkamaz. III doğrudur.
Sık yapılan hata: "Hortum yetişiyorsa su da gider." demek. Belirleyici olan hortumun uzunluğu değil, ucun bidondaki su yüzeyine göre yüksekliğidir. Bu yüzden yüksek yerlere su göndermek için pompa kullanılır.
Cevap C.`
}
);
