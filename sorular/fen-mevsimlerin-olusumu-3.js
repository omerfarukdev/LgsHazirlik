// Fen Bilimleri — Mevsimlerin Oluşumu: testleri 25 soruya tamamlayan ek parti (K1, K2, K3 ve havuz)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["mevsimlerin-olusumu"] = window.LGS_BANK["mevsimlerin-olusumu"] || []).push(
/* ===================== KADEME 1 — KAVRAMA (113-125) ===================== */
{
  id: "fen-mv-113",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Bir yerde Güneş ışınlarının yere düşme açısı büyüdükçe aşağıdakilerden hangisi artar?**",
  gorsel: null,
  secenekler: [
    "Cisimlerin yere düşen gölgesinin boyu",
    "Birim yüzeye düşen ışık enerjisi miktarı",
    "Işık demetinin yayıldığı yüzeyin genişliği",
    "O yerde gecenin sürdüğü toplam süre"
  ],
  dogru: 1,
  hatalar: [
    "Gölge boyunu açıyla doğru orantılı sanma: ışınlar dikleştikçe cisimlerin gölgesi uzamaz, kısalır.",
    null,
    "Dik gelen ışığın geniş alana yayıldığını sanma: açı büyüdükçe aynı demet daha dar bir alana toplanır.",
    "Işınların dikleşmesini gecenin uzamasıyla birlikte düşünme: açı büyüdükçe o yerde gündüz uzar, gece kısalır."
  ],
  aciklama: `Işınların yere düşme açısı, ışık demetinin yeryüzüyle yaptığı açıdır. Açı 90°'ye yaklaştıkça ışınlar "dikleşir".
Adım 1: Güneş'ten gelen ışık demetinin taşıdığı enerji sabittir. Değişen, bu demetin yeryüzünde kapladığı alandır.
Adım 2: Işınlar dik düştüğünde demet dar bir alana toplanır. Aynı enerji küçük bir alana düştüğü için her bir metrekareye düşen enerji artar.
Adım 3: Öyleyse açı büyüdükçe birim yüzeye düşen ışık enerjisi artar.
Adım 4: Diğer seçenekleri ele. Işınlar dikleştikçe gölgeler kısalır, demetin yayıldığı alan daralır, gündüz uzadığı için gece kısalır. Üçü de azalır.
Sağlama: Yaz öğlesini düşün: Güneş tepededir, gölgeler kısacıktır ve yer hızla ısınır. Üç işaret de aynı şeyi söyler.
Cevap B.`
},
{
  id: "fen-mv-114",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki şemada 21 Mart tarihinde Güneş ışınlarının Dünya'ya düşme durumu gösterilmiştir.\n**Buna göre bu tarih için aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 540 260" role="img" aria-label="21 Mart'ta Güneş ışınları Ekvator'a dik düşerken dönme ekseni aydınlık ile karanlık yarının sınırı üzerinde"><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="30" y1="80" x2="278" y2="80"/><line x1="30" y1="130" x2="278" y2="130"/><line x1="30" y1="180" x2="278" y2="180"/></g><g fill="var(--vurgu)"><polygon points="278,80 266,74 266,86"/><polygon points="278,130 266,124 266,136"/><polygon points="278,180 266,174 266,186"/></g><circle cx="368" cy="130" r="72" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><path d="M368 58 A 72 72 0 0 1 368 202 Z" fill="currentColor" opacity="0.22"/><line x1="296" y1="130" x2="440" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><line x1="368" y1="46" x2="368" y2="214" stroke="var(--vurgu2)" stroke-width="3"/><g fill="currentColor" font-size="15"><text x="30" y="40" font-weight="bold">Güneş ışınları</text><text x="368" y="36" text-anchor="middle">Dönme ekseni</text><text x="36" y="212">21 Mart</text><text x="446" y="76">Kuzey</text><text x="446" y="96">Yarım Küre</text><text x="446" y="136">Ekvator</text><text x="446" y="178">Güney</text><text x="446" y="198">Yarım Küre</text><text x="318" y="238" text-anchor="middle">Aydınlık yarı</text><text x="418" y="238" text-anchor="middle">Karanlık yarı</text></g></svg>`,
  secenekler: [
    "Kuzey Yarım Küre ışınları daha dik alır, orada yaz mevsimi başlar.",
    "Güney Yarım Küre ışınları daha dik alır, orada yaz mevsimi başlar.",
    "İki yarım küre de ışınları eşit açıyla alır, gece ile gündüz eşit olur.",
    "İki yarım küre de ışınları eşit açıyla alır, iki yerde de yaz başlar."
  ],
  dogru: 2,
  hatalar: [
    "Mart ayını doğrudan Kuzey Yarım Küre'nin yazıyla eşleştirme: şemada eksenin kuzey ucu Güneş'e doğru eğik değildir, ışınlar tam Ekvator'a dik düşüyor.",
    "Ekseni bir yarım küre lehine eğik sanma: şemada eksen aydınlık ile karanlık yarının sınırı üzerindedir; hiçbir kutup Güneş'e doğru ya da Güneş'ten uzağa eğik değildir.",
    null,
    "Eşit açıyı \"her yerde yaz\" diye yorumlama: ışınların bir yarım küreye en dik geldiği tarihler 21 Haziran ve 21 Aralık'tır, 21 Mart değildir."
  ],
  aciklama: `Bir yarım kürede yaz yaşanması için o yarım kürenin ışınları diğerinden daha dik açıyla alması gerekir. Bu da ancak o yarım kürenin kutbu Güneş'e doğru eğikken olur.
Adım 1: Şemadaki ışın oklarına bak. Oklar Ekvator'a dik gelmektedir; yani en dik ışınları alan yer Ekvator'dur.
Adım 2: Dönme eksenine bak. Eksen, aydınlık yarı ile karanlık yarıyı ayıran sınırın tam üzerindedir. Eksen yine eğiktir, ama bu tarihte ne Güneş'e doğru ne de Güneş'ten uzağa eğilir; eğiklik yana doğrudur. Bu yüzden şemada dik bir çizgi gibi görünür.
Adım 3: Hiçbir kutup Güneş'e dönük olmadığı için Kuzey ve Güney Yarım Küre ışınları aynı açıyla alır. Aydınlık ile karanlığın sınırı iki kutuptan da geçtiği için her yerin yarısı aydınlık, yarısı karanlıktır. Bu da gece ile gündüzün eşit olması demektir.
Adım 4: En güçlü çeldirici A şıkkıdır: "Mart geldi, kuzeyde yaz başlıyor." diye düşünmek kolaydır. Oysa kuzeyde 21 Mart'ta yaz değil, ilkbahar başlar; yaz, eksenin kuzey ucu Güneş'e dönük olduğu 21 Haziran'da başlar.
Adım 5: Öyleyse 21 Mart'ta iki yarım küre ışınları eşit açıyla alır ve gece ile gündüz eşit olur.
Sık yapılan hata: Eksenin eğikliğinin 21 Mart'ta ortadan kalktığını sanmak. Eğiklik hiç değişmez; değişen, eksenin Güneş'e göre hangi yöne baktığıdır. 23 Eylül'de de aynı durum yaşanır.
Cevap C.`
},
{
  id: "fen-mv-115",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi mevsimlerin oluşmasında __etkili değildir__?**",
  gorsel: null,
  secenekler: [
    "Dünya'nın dönme ekseninin eğik olması",
    "Dünya'nın Güneş çevresinde dolanması",
    "Dünya'nın kendi ekseni çevresinde dönmesi",
    "Güneş ışınlarının yere düşme açısının değişmesi"
  ],
  dogru: 2,
  hatalar: [
    "Eksen eğikliğini etkisiz sanma: eğiklik olmasaydı bir yerde yıl boyunca tek bir mevsim yaşanırdı.",
    "Dolanma hareketini etkisiz sanma: dört mevsim, bir dolanma tamamlanırken sırayla yaşanır.",
    null,
    "Düşme açısını etkisiz sanma: birim yüzeye düşen ışık enerjisi doğrudan bu açıya bağlıdır."
  ],
  aciklama: `Mevsimlerin oluşumu üç şeyin birlikte sonucudur: eğik dönme ekseni, Güneş çevresindeki dolanma ve bunların yol açtığı düşme açısı değişimi.
Adım 1: Eksen eğik olmasaydı Dünya yörüngede nereye giderse gitsin bir yerin ışın alma açısı değişmezdi; mevsim de olmazdı. Eksen eğikliği etkilidir.
Adım 2: Dolanma hareketi olmasaydı Dünya hep aynı konumda kalır, açı değişmez, mevsimler birbirini izlemezdi. Dolanma da etkilidir.
Adım 3: Düşme açısı değiştikçe birim yüzeye düşen enerji değişir; yer ısınır ya da soğur. Bu da doğrudan etkilidir.
Adım 4: Dünya'nın kendi ekseni çevresinde dönmesi ise yaklaşık 24 saatte tamamlanır ve gece ile gündüzü oluşturur. Bu hareket durdurulsa bile eğik eksenle dolanma sürdüğü sürece mevsimler oluşurdu. Öyleyse mevsimlerde etkili olmayan budur.
Sık yapılan hata: Dönme ile dolanmayı karıştırmak. Kısa yol: dönme → gece ve gündüz, dolanma → yıl ve mevsimler.
Cevap C.`
},
{
  id: "fen-mv-116",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir öğrenci, yaşadığı şehirde öğle vakti Güneş'in ufuktan yüksekliğini iki ayrı tarihte ölçmüş ve sonuçları aşağıdaki şekle işlemiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Aynı şehirde 21 Haziran ve 21 Aralık öğle vakti Güneş'in ufuktan yüksekliği"><line x1="20" y1="200" x2="500" y2="200" stroke="currentColor" stroke-width="2.5"/><line x1="60" y1="200" x2="60" y2="176" stroke="currentColor" stroke-width="2"/><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="60" y1="200" x2="104" y2="57"/></g><g stroke="var(--vurgu2)" stroke-width="2.5" stroke-dasharray="7 5"><line x1="60" y1="200" x2="327" y2="64"/></g><circle cx="110" cy="46" r="16" fill="var(--vurgu)"/><circle cx="337" cy="59" r="16" fill="var(--vurgu2)"/><path d="M110 200 A 50 50 0 0 0 74 152" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M160 200 A 100 100 0 0 0 149 155" fill="none" stroke="currentColor" stroke-width="1.6"/><g fill="currentColor" font-size="15"><text x="80" y="185">73°</text><text x="152" y="192">27°</text><text x="126" y="42" font-weight="bold">21 Haziran</text><text x="358" y="55" font-weight="bold">21 Aralık</text><text x="20" y="226">Ufuk çizgisi</text><text x="300" y="226">Ölçümler öğle vakti, aynı şehirde yapılmıştır.</text></g></svg>`,
  secenekler: [
    "21 Haziran'da ışınlar daha dik düşer, birim yüzeye düşen enerji daha fazladır.",
    "21 Aralık'ta ışınlar daha dik düşer, birim yüzeye düşen enerji daha fazladır.",
    "İki tarihte de ışınlar aynı açıyla düşer, birim yüzeye düşen enerji eşittir.",
    "21 Haziran'da ışınlar daha eğik düşer, cisimlerin gölgeleri daha uzundur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Şekildeki açıları ters okuma: 27° ölçülen tarih 21 Aralık'tır; küçük açı, ışınların daha eğik geldiğini gösterir.",
    "İki ölçümü eşit sayma: şekilde açılar 73° ve 27° olarak farklı verilmiştir.",
    "Büyük açıyı eğiklikle eşleştirme: 73° ile gelen ışınlar daha diktir ve o tarihte gölgeler daha kısadır."
  ],
  aciklama: `Güneş'in ufuktan yüksekliği ile ışınların yere düşme açısı aynı şeyi anlatır: Güneş gökyüzünde ne kadar yüksekteyse ışınlar o kadar dik düşer.
Adım 1: Şekildeki açıları oku. 21 Haziran'da Güneş 73°, 21 Aralık'ta 27° yüksekliktedir.
Adım 2: 73° büyük bir açıdır; bu tarihte ışınlar yere daha dik düşer. 27°'de ise ışınlar yere yatık gelir.
Adım 3: Dik gelen ışık demeti dar bir alana toplanır. Bu yüzden 21 Haziran'da her bir metrekareye düşen enerji daha fazladır ve yer daha çok ısınır.
Adım 4: Öyleyse doğru yargı, 21 Haziran'da ışınların daha dik düştüğü ve birim yüzeye düşen enerjinin daha fazla olduğudur.
Sağlama: Gölgeler de bunu doğrular: Güneş yüksekteyken gölgeler kısa, alçaktayken uzundur.
Cevap A.`
},
{
  id: "fen-mv-117",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Kuzey Kutup Dairesi'nin içinde kalan bir yerleşim yerinde haziran ayında Güneş gece boyunca ufkun altına inmemekte, gökyüzünde kalmaktadır.\n**Bu durumun temel nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Dünya'nın o ayda kendi ekseni çevresinde dönmeyi durdurması",
    "Dünya'nın dönme ekseninin dolanma düzlemine eğik olması",
    "Dünya'nın o ayda yörüngesinde Güneş'e en yakın konumda bulunması",
    "Güneş'in o ayda çevresine daha çok ışık enerjisi yayması"
  ],
  dogru: 1,
  hatalar: [
    "Dönme hareketinin durduğunu sanma: Dünya dönmeyi sürdürür; kutup bölgesi döndüğü hâlde Güneş'i görmeye devam eder.",
    null,
    "Olayı Güneş'e uzaklıkla açıklama: aynı tarihte Güney Kutup bölgesinde Güneş hiç doğmaz; oysa iki bölgenin Güneş'e uzaklığı aynıdır.",
    "Güneş'in yaydığı enerjiyi değişken sanma: Güneş'in yaydığı enerji aylara göre böyle bir fark yaratacak biçimde değişmez."
  ],
  aciklama: `Dünya'nın dönme ekseni dolanma düzlemine eğiktir ve bu eğiklik yıl boyunca hep aynı yöne bakar.
Adım 1: Haziran ayında eksenin kuzey ucu Güneş'e doğru eğiktir. Bu yüzden Kuzey Kutup bölgesi Güneş'e dönük durumdadır.
Adım 2: Dünya kendi ekseni çevresinde dönerken bu bölge aydınlık kısımdan hiç çıkmaz; döndüğü hâlde Güneş ufkun altına inmez.
Adım 3: Öyleyse bu olayın temel nedeni eksenin eğik olmasıdır.
Adım 4: Aralık ayında durum tersine döner: eksenin kuzey ucu Güneş'ten uzağa baktığı için aynı yerde Güneş günlerce hiç doğmaz.
Sık yapılan hata: Bu olayı Güneş'e yakınlıkla açıklamak. Aynı anda Güney Kutup bölgesinde tam tersi yaşanır; oysa iki bölge Güneş'e aynı uzaklıktadır.
Cevap B.`
},
{
  id: "fen-mv-118",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Mevsimlerin oluşumu anlatılırken kullanılan \"birim yüzeye düşen ışık enerjisi\" ifadesi aşağıdakilerden hangisini anlatır?**",
  gorsel: null,
  secenekler: [
    "Güneş'in bir saniyede çevresine yaydığı toplam ışık enerjisini",
    "Bir ışık demetinin Güneş'ten Dünya'ya ulaşması için geçen süreyi",
    "Yüzeyin her bir metrekaresine düşen ışık enerjisi miktarını",
    "Dünya'nın bir yıl boyunca aldığı toplam ışık enerjisi miktarını"
  ],
  dogru: 2,
  hatalar: [
    "İfadeyi Güneş'in yaydığı enerjiyle karıştırma: Güneş'in yaydığı enerji her mevsim aynıdır, değişen yeryüzünün aldığı paydır.",
    "Enerji miktarını süreyle karıştırma: ifade bir süre değil, bir enerji miktarı belirtir.",
    null,
    "Birim yüzeyi Dünya'nın tamamı sanma: \"birim\" sözcüğü tek bir metrekare gibi küçük bir alanı anlatır."
  ],
  aciklama: `"Birim yüzey" demek, yüzeyin seçilen tek bir parçası demektir; genellikle bir metrekare olarak düşünülür.
Adım 1: Güneş'ten gelen ışık demeti yeryüzüne ulaştığında belli bir alana yayılır.
Adım 2: Bu demetin taşıdığı enerjiyi, yayıldığı alana paylaştırdığını düşün. Her bir metrekareye düşen pay, birim yüzeye düşen ışık enerjisidir.
Adım 3: Işınlar dik geldiğinde demet dar bir alana yayılır ve paylar büyür. Eğik geldiğinde geniş alana yayılır ve paylar küçülür.
Adım 4: Öyleyse ifade, yüzeyin her bir metrekaresine düşen ışık enerjisi miktarını anlatır.
Sağlama: Aynı miktarda çayı iki bardağa paylaştırırsan bardaklar dolu, on bardağa paylaştırırsan az dolu olur. Işık da böyle paylaşılır.
Cevap C.`
},
{
  id: "fen-mv-119",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir öğrenci, yurt dışındaki bir okulla yaptığı yazışmada iki ülkenin okul takvimini karşılaştırmış ve yaz tatili aylarını aşağıdaki tabloya yazmıştır.
I. Türkiye'de okullar yaz tatilindeyken Yeni Zelanda'da gündüzler gecelerden uzundur.
II. Aynı tarihte iki ülkede karşıt mevsimler yaşanmaktadır.
III. Temmuzda Türkiye'ye düşen Güneş ışınlarının açısı, Yeni Zelanda'ya düşenlerden daha diktir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ülke</th><th>Bulunduğu yarım küre</th><th>Okulların yaz tatili</th></tr><tr><td>Türkiye</td><td>Kuzey</td><td>Haziran – Ağustos</td></tr><tr><td>Yeni Zelanda</td><td>Güney</td><td>Aralık – Şubat</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "III. yargıyı yanlış sayma: temmuzda yaz yaşayan ülke Türkiye'dir; yaz yaşanan yerde ışınlar daha dik düşer.",
    "II. yargıyı yanlış sayma: Türkiye'nin yaz tatilindeki aylarda Yeni Zelanda kıştadır; aynı tarihte iki ülkede karşıt mevsimler yaşanır.",
    "I. yargıyı doğru sayıp III'ü atlama: haziran–ağustosta Yeni Zelanda'da kış yaşanır; kışın gündüzler gecelerden kısadır.",
    null
  ],
  aciklama: `Okulların yaz tatili, adından da anlaşılacağı gibi o ülkede yaz mevsiminin yaşandığı aylarda yapılır. Bir yerde yaz yaşanırken gündüzler gecelerden uzun, kış yaşanırken kısadır.
Adım 1: Tabloyu oku. Türkiye'de yaz haziran–ağustos, Yeni Zelanda'da aralık–şubat aylarındadır.
Adım 2: I. yargıyı kontrol et. Türkiye'de okullar haziran–ağustosta tatildedir. Bu aylarda Yeni Zelanda'da yaz değil kış yaşanır; kışın gündüzler gecelerden kısadır. Yanlıştır.
Adım 3: II. yargıyı kontrol et. Aynı ayda biri yaz, öteki kış mevsimindedir; yani mevsimler karşıttır. Doğrudur.
Adım 4: III. yargıyı kontrol et. Temmuzda yaz yaşayan ülke Türkiye'dir. Yaz, ışınların en dik geldiği mevsimdir. Öyleyse temmuzda Türkiye'ye düşen ışınlar daha diktir. Doğrudur.
Adım 5: Doğru yargılar II ve III'tür. En güçlü çeldirici "I ve II" şıkkıdır: I. yargıdaki "yaz tatili" sözcüğü, öğrenciyi Yeni Zelanda'da da yaz yaşandığını düşünmeye iter. Oysa tatil Türkiye'nin tatilidir; o aylarda Yeni Zelanda kıştadır.
Sık yapılan hata: Bir ülkenin takvimini öteki ülkeye taşımak. Eksen eğikliği nedeniyle bir yarım küre Güneş'e dönükken diğeri ondan uzaktadır; iki yarım kürede hiçbir zaman aynı mevsim yaşanmaz.
Cevap D.`
},
{
  id: "fen-mv-120",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Kuzey Yarım Küre'deki bir şehrin meteoroloji istasyonu, dört ayda günlük ortalama güneşlenme süresini ölçmüş ve sonuçları aşağıdaki grafiğe aktarmıştır.\n**Buna göre bu şehir için aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 520 280" role="img" aria-label="Bir şehirde ocak, nisan, temmuz ve ekim aylarındaki günlük ortalama güneşlenme süreleri"><g stroke="currentColor" stroke-width="2"><line x1="72" y1="40" x2="72" y2="220"/><line x1="72" y1="220" x2="490" y2="220"/></g><g stroke="currentColor" stroke-width="0.8" opacity="0.45"><line x1="72" y1="190" x2="490" y2="190"/><line x1="72" y1="160" x2="490" y2="160"/><line x1="72" y1="130" x2="490" y2="130"/><line x1="72" y1="100" x2="490" y2="100"/><line x1="72" y1="70" x2="490" y2="70"/></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="64" y="225">0</text><text x="64" y="195">2</text><text x="64" y="165">4</text><text x="64" y="135">6</text><text x="64" y="105">8</text><text x="64" y="75">10</text><text x="64" y="45">12</text></g><rect x="106" y="160" width="58" height="60" fill="var(--vurgu)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><rect x="198" y="100" width="58" height="120" fill="var(--vurgu)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><rect x="290" y="40" width="58" height="180" fill="var(--vurgu2)" opacity="0.6" stroke="currentColor" stroke-width="1.5"/><rect x="382" y="130" width="58" height="90" fill="var(--vurgu)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="135" y="240">Ocak</text><text x="227" y="240">Nisan</text><text x="319" y="240">Temmuz</text><text x="411" y="240">Ekim</text><text x="135" y="153">4</text><text x="227" y="93">8</text><text x="319" y="33">12</text><text x="411" y="123">6</text></g><text x="72" y="268" fill="currentColor" font-size="15" font-weight="bold">Grafik: Günlük ortalama güneşlenme süresi (saat)</text></svg>`,
  secenekler: [
    "Temmuzda ışınlar en eğik açıyla düşer, gölgeler en uzundur.",
    "Ocakta birim yüzeye düşen ışık enerjisi en azdır.",
    "Nisan ile ekimde ışınlar yere tam olarak aynı açıyla düşer.",
    "Güneşlenme süresinin değişmesi Dünya'nın Güneş'e uzaklığından kaynaklanır."
  ],
  dogru: 1,
  hatalar: [
    "Grafiği ters okuma: temmuz, güneşlenme süresinin en uzun olduğu aydır; o ayda ışınlar en dik düşer ve gölgeler kısalır.",
    null,
    "İki sütunu eşit sanma: grafikte nisan 8 saat, ekim 6 saat okunuyor; süreler eşit olmadığı için açılar da aynı değildir.",
    "Mevsimleri Güneş'e uzaklıkla açıklama: uzaklık belirleyici olsaydı aynı anda iki yarım kürede aynı mevsim yaşanması gerekirdi."
  ],
  aciklama: `Bir yerde güneşlenme süresinin uzaması ile ışınların dikleşmesi birlikte olur; ikisi de o yerde yazın yaklaştığını gösterir.
Adım 1: Grafikteki değerleri oku: ocak 4 saat, nisan 8 saat, temmuz 12 saat, ekim 6 saat.
Adım 2: En kısa güneşlenme ocaktadır. Şehir Kuzey Yarım Küre'de olduğuna göre ocak kış ayıdır; ışınlar en eğik açıyla düşer.
Adım 3: Işınlar eğik düştüğünde aynı ışık demeti geniş bir alana yayılır. Öyleyse birim yüzeye düşen enerji ocakta en azdır. Bu yargı doğrudur.
Adım 4: Diğerlerini ele. Temmuz en uzun güneşlenmenin olduğu aydır, ışınlar orada en diktir. Nisan 8, ekim 6 saat olduğundan açıları aynı olamaz. Güneşlenme süresini değiştiren de uzaklık değil, eksen eğikliğidir.
Sık yapılan hata: Uzun güneşlenme süresini yalnızca "hava açık" diye yorumlamak. Burada kastedilen, Güneş'in ufkun üstünde kaldığı süredir.
Cevap B.`
},
{
  id: "fen-mv-121",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Kuzey Yarım Küre'deki bir kasabada sokak lambaları, hava kararınca kendiliğinden yanıp aydınlanınca sönmektedir. Belediye, lambaların dört ayda bir gecede yanık kaldığı ortalama süreyi tabloya kaydetmiştir.
I. Ocakta bu kasabada gündüz süresi temmuzdakinden kısadır.
II. Temmuzda Güneş ışınları kasabaya, tablodaki aylar içinde en dik açıyla düşer.
III. Nisanda gündüz süresi ekimdekinden uzundur.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ay</th><th>Lambaların bir gecede yanık kaldığı süre</th></tr><tr><td>Ocak</td><td>14 saat 30 dakika</td></tr><tr><td>Nisan</td><td>11 saat 20 dakika</td></tr><tr><td>Temmuz</td><td>9 saat 10 dakika</td></tr><tr><td>Ekim</td><td>12 saat 10 dakika</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü atlama: en kısa gece temmuzdadır, bu da ışınların o ay en dik geldiğini gösterir; nisanın gecesi de ekiminkinden kısadır.",
    "Lamba süresini gündüz süresi sanma: lambalar ekimde daha uzun yandığına göre ekimde uzun olan gecedir; gündüzü uzun olan ay nisandır.",
    "I. yargıyı yanlış sayma: ocakta lambalar 14 saat 30 dakika yanmıştır; gece en uzun, gündüz en kısadır.",
    null
  ],
  aciklama: `Lambalar hava kararınca yandığına göre yanık kaldıkları süre gecenin süresidir. Bir günde gece ile gündüz toplamı 24 saattir.
Adım 1: Tabloyu gündüz süresine çevir. Ocak: 24 − 14 saat 30 dakika = 9 saat 30 dakika. Nisan: 12 saat 40 dakika. Temmuz: 14 saat 50 dakika. Ekim: 11 saat 50 dakika.
Adım 2: I. yargıyı kontrol et. Ocakta gündüz 9 saat 30 dakika, temmuzda 14 saat 50 dakikadır. Ocaktaki gündüz daha kısadır. Doğrudur.
Adım 3: II. yargıyı kontrol et. Tablodaki aylar içinde gündüzün en uzun olduğu ay temmuzdur. Gündüz uzadıkça ışınların düşme açısı da büyür. Öyleyse bu aylar içinde ışınlar en dik açıyla temmuzda düşer. Doğrudur.
Adım 4: III. yargıyı kontrol et. Nisanda gündüz 12 saat 40 dakika, ekimde 11 saat 50 dakikadır. Nisandaki gündüz 50 dakika daha uzundur. Doğrudur.
Adım 5: Üç yargı da doğrudur. En güçlü çeldirici "I ve II" şıkkıdır: tabloda ekimin sayısı (12 saat 10 dakika) nisanınkinden (11 saat 20 dakika) büyük olduğu için ekimin gündüzü daha uzun sanılabilir. Oysa bu sayılar gecenin süresidir; gecesi kısa olan nisanın gündüzü daha uzundur.
Sık yapılan hata: Tablodaki süreleri doğrudan gündüz süresi sanmak. Lambalar karanlıkta yandığı için tablo gecenin süresini verir; gündüzü bulmak için 24 saatten çıkarman gerekir.
Cevap D.`
},
{
  id: "fen-mv-122",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir yer gözlem uydusu, Kuzey Yarım Küre'de karla kaplı alanın büyüklüğünü yıl boyunca ölçmektedir. Uydunun iki ayrı ayda yaptığı ölçüm aşağıda şematik olarak verilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Kuzey Yarım Küre'de ocak ve temmuz aylarında karla kaplı alanın büyüklüğü"><circle cx="140" cy="118" r="76" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><path d="M64 118 A 76 76 0 0 1 216 118 Z" fill="var(--vurgu)" opacity="0.5"/><line x1="64" y1="118" x2="216" y2="118" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="380" cy="118" r="76" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><path d="M340 50 A 76 76 0 0 1 420 50 Z" fill="var(--vurgu)" opacity="0.5"/><line x1="304" y1="118" x2="456" y2="118" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="140" y="26" font-weight="bold">Ocak</text><text x="380" y="26" font-weight="bold">Temmuz</text><text x="140" y="216">Karla kaplı alan:</text><text x="140" y="236">46 milyon km²</text><text x="380" y="216">Karla kaplı alan:</text><text x="380" y="236">3 milyon km²</text></g><text x="260" y="130" fill="currentColor" font-size="14" text-anchor="middle">Ekvator</text></svg>`,
  secenekler: [
    "Ocakta ışınlar bu yarım küreye daha eğik düşmüş, birim yüzeye düşen enerji azalmıştır.",
    "Ocakta bu yarım küre Güneş'e daha uzak olduğu için karla kaplı alan genişlemiştir.",
    "Temmuzda ışınlar bu yarım küreye daha eğik düştüğü için karlar erimiştir.",
    "Karla kaplı alanın değişmesi Dünya'nın dolanma hızının artmasıyla açıklanır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Mevsimleri Güneş'e uzaklıkla açıklama: aynı tarihte Güney Yarım Küre'de yaz yaşanır; oysa iki yarım kürenin Güneş'e uzaklığı aynıdır.",
    "Erimeyi eğik ışınlara bağlama: karın erimesi için birim yüzeye düşen enerjinin artması, yani ışınların dikleşmesi gerekir.",
    "Olayı dolanma hızıyla açıklama: dolanma hızının değişmesi ışınların düşme açısını değiştirmez; açıyı değiştiren eksen eğikliğidir."
  ],
  aciklama: `Karın erimesi için yüzeyin ısınması, bunun için de birim yüzeye düşen ışık enerjisinin artması gerekir.
Adım 1: Ölçümleri oku. Ocakta karla kaplı alan 46 milyon km², temmuzda 3 milyon km²'dir. Kışın kar örtüsü çok geniş, yazın neredeyse yok denecek kadar azdır.
Adım 2: Kuzey Yarım Küre'de ocak kış, temmuz yaz ayıdır. Kışın ışınlar bu yarım küreye eğik düşer; aynı ışık demeti geniş bir alana yayılır.
Adım 3: Geniş alana yayılan ışıkta birim yüzeye düşen enerji azalır, yüzey yeterince ısınamaz ve kar örtüsü genişler.
Adım 4: Öyleyse doğru açıklama, ocakta ışınların daha eğik düşmesi ve birim yüzeye düşen enerjinin azalmasıdır.
Sık yapılan hata: "Kışın Dünya Güneş'ten uzaklaşır." demek. Aynı anda Güney Yarım Küre'de yaz yaşanıyor; uzaklık aynı olduğuna göre farkı yaratan, ışınların düşme açısıdır.
Cevap A.`
},
{
  id: "fen-mv-123",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir kafe zincirinin biri Kuzey, diğeri Güney Yarım Küre'de bulunan iki şubesinde aynı aylarda en çok satılan içecekler tabloda verilmiştir.
I. Aynı ayda iki şubede farklı mevsimler yaşanmaktadır.
II. Temmuzda K şubesine düşen Güneş ışınlarının açısı, L şubesine düşenlerden daha diktir.
III. Ocakta L şubesinin bulunduğu şehir Güneş'e K şubesinden daha yakındır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Şube</th><th>Bulunduğu yarım küre</th><th>Ocakta en çok satılan</th><th>Temmuzda en çok satılan</th></tr><tr><td>K</td><td>Kuzey</td><td>Sıcak çikolata</td><td>Buzlu limonata</td></tr><tr><td>L</td><td>Güney</td><td>Buzlu limonata</td><td>Sıcak çikolata</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: temmuzda soğuk içecek satan K şubesinde yaz yaşanır; yazın ışınlar daha dik düşer.",
    "III. yargıyı doğru sayma: iki şehir de Dünya üzerindedir ve Güneş'e uzaklıkları arasında mevsim yaratacak bir fark yoktur.",
    null,
    "I. yargıyı atlayıp III'ü doğru sayma: tablonun gösterdiği tek şey, aynı ayda karşıt mevsimlerin yaşandığıdır."
  ],
  aciklama: `Sıcak içecek satışının artması havanın soğuduğunu, soğuk içecek satışının artması havanın ısındığını gösterir.
Adım 1: I. yargıyı kontrol et. Ocakta K şubesinde sıcak çikolata, L şubesinde buzlu limonata öne çıkıyor. Yani K'de kış, L'de yaz yaşanıyor. Temmuzda durum tersine dönüyor. İki şubede farklı mevsimler yaşanmaktadır. Doğrudur.
Adım 2: II. yargıyı kontrol et. Temmuzda K şubesinde buzlu limonata satılıyor; orada yaz yaşanıyor. Yaz, ışınların en dik geldiği mevsimdir. Öyleyse temmuzda ışınlar K şubesine daha dik düşer. Doğrudur.
Adım 3: III. yargıyı kontrol et. Mevsim farkının nedeni Güneş'e uzaklık değildir. Uzaklık belirleyici olsaydı iki yarım kürede aynı anda aynı mevsim yaşanırdı. Yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sağlama: Mevsim farkını yaratan, eksen eğikliği nedeniyle ışınların yarım kürelere farklı açılarla düşmesidir.
Cevap C.`
},
{
  id: "fen-mv-124",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir bisiklet kulübü, açık havada yaptığı antrenmanları hava aydınlıkken bitirecek biçimde planlamaktadır. Kulüp, temmuz ayında antrenmanları 20.30'da, ocak ayında ise 17.00'de bitirmektedir.\n**Bu planlama farkının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Dünya'nın kendi ekseni çevresindeki dönme süresinin ocakta uzaması",
    "Dünya'nın ocakta yörüngesinde daha yavaş hareket etmesi",
    "Güneş'in ocak ayında çevresine daha az ışık enerjisi yayması",
    "Eksen eğikliği nedeniyle gündüz süresinin yıl içinde değişmesi"
  ],
  dogru: 3,
  hatalar: [
    "Dönme süresini değişken sanma: Dünya kendi ekseni çevresindeki dönüşünü her mevsim yaklaşık 24 saatte tamamlar.",
    "Yörünge hızını gündüz süresiyle ilişkilendirme: bir yerdeki gündüz süresini belirleyen, eksen eğikliği nedeniyle o yerin aydınlık kısımda kalma süresidir.",
    "Güneş'in yaydığı enerjiyi mevsime bağlı sanma: Güneş enerjiyi her yöne aynı biçimde yayar; değişen, yeryüzünün aldığı paydır.",
    null
  ],
  aciklama: `Bir günde gece ile gündüzün toplamı 24 saattir, ama bu ikisinin payı yıl boyunca değişir.
Adım 1: Kulüp temmuzda 20.30'da hâlâ aydınlıkta antrenman yapabiliyor, ocakta 17.00'de bitirmek zorunda kalıyor. Demek ki temmuzda gündüz daha uzun sürüyor.
Adım 2: Dünya'nın dönme ekseni eğiktir ve yıl boyunca hep aynı yöne bakar. Dünya yörüngede ilerledikçe bir yarım küre Güneş'e daha dönük duruma gelir.
Adım 3: Güneş'e dönük yarım kürede bir yer, dönme hareketi sırasında aydınlık kısımda daha uzun süre kalır; yani gündüz uzar. Öteki yarım kürede tersi olur.
Adım 4: Öyleyse farkın nedeni, eksen eğikliği nedeniyle gündüz süresinin yıl içinde değişmesidir.
Sık yapılan hata: Gündüzün uzamasını "günün uzaması" sanmak. Günün süresi değişmez; gündüzün gün içindeki payı değişir.
Cevap D.`
},
{
  id: "fen-mv-125",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir gezgin, günlüğüne şunları yazmıştır: \"Bugün 21 Aralık. Bulunduğum şehirde Güneş sabah erken doğdu, akşam geç battı; gündüz yaklaşık 15 saat sürdü. Öğle vakti gölgem yılın en kısa hâlindeydi.\"\n**Buna göre gezginin bulunduğu şehir için aşağıdakilerden hangisi söylenebilir?**",
  gorsel: null,
  secenekler: [
    "Güney Yarım Küre'dedir ve yaz mevsimi yaşanmaktadır.",
    "Güney Yarım Küre'dedir ve kış mevsimi yaşanmaktadır.",
    "Kuzey Yarım Küre'dedir ve yaz mevsimi yaşanmaktadır.",
    "Kuzey Yarım Küre'dedir ve kış mevsimi yaşanmaktadır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yarım küreyi doğru bulup mevsimi ters kurma: uzun gündüz ve kısa gölge yaz mevsiminin işaretidir.",
    "Mevsimi doğru bulup yarım küreyi ters kurma: 21 Aralık'ta yaz yaşanan yerler Güney Yarım Küre'dedir.",
    "Takvim alışkanlığıyla karar verme: aralık ayı her yerde kış değildir; Güney Yarım Küre'de yaz yaşanır."
  ],
  aciklama: `Bir yerde gündüzün uzun olması ve öğle vakti gölgenin kısalması, ışınların o yere dik düştüğünü, yani yaz mevsiminin yaşandığını gösterir.
Adım 1: Günlükteki iki veriyi ayıkla: gündüz 15 saat sürmüş ve öğle gölgesi yılın en kısa hâlindeymiş.
Adım 2: Gölgenin en kısa olması, Güneş'in gökyüzünde en yüksekte olduğu, yani ışınların en dik geldiği gün demektir. Uzun gündüz de bunu destekler. Öyleyse o şehirde yaz yaşanmaktadır.
Adım 3: Tarih 21 Aralık'tır. Bu tarihte Kuzey Yarım Küre'de kış, Güney Yarım Küre'de yaz yaşanır.
Adım 4: Şehirde yaz yaşandığına göre şehir Güney Yarım Küre'dedir.
Sık yapılan hata: Ayların mevsimini takvimden ezberlemek. Mevsimi belirleyen ay adı değil, ışınların o yere düşme açısıdır.
Cevap A.`
},
/* ===================== KADEME 2 — PEKİŞTİRME (213-225) ===================== */
{
  id: "fen-mv-213",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir köy okulunun öğrencileri, güneş enerjisiyle tuzlu sudan içme suyu elde eden bir damıtma düzeneği kurmuştur. Düzenek okul bahçesinde hep aynı yerde tutulmuş, içine her seferinde eşit miktarda tuzlu su konulmuş ve iki ayrı ayda bulutsuz birer günde elde edilen su ölçülmüştür. Sonuçlar tabloda verilmiştir.
I. Temmuzda düzeneğin birim yüzeyine düşen ışık enerjisi daha fazladır.
II. Temmuzda Güneş ışınları düzeneğe daha dik açıyla düşmüştür.
III. Kasımda elde edilen suyun az olmasının nedeni Güneş'in o ay daha az enerji yaymasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm ayı</th><th>Bir günde elde edilen içme suyu</th></tr><tr><td>Temmuz</td><td>1,8 litre</td></tr><tr><td>Kasım</td><td>0,6 litre</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I. yargıyı yanlış sayma: aynı sürede üç kat su buharlaştıran düzeneğin birim yüzeyine düşen enerji daha fazladır.",
    null,
    "II. yargıyı atlayıp III'ü doğru sayma: değişen, Güneş'in yaydığı enerji değil, ışınların düzeneğe düşme açısıdır.",
    "I. yargıyı yanlış sayıp III'ü doğru sayma: daha çok su elde edilen ayda birim yüzeye düşen enerji de daha fazladır."
  ],
  aciklama: `Damıtma düzeneğinde su, üzerine düşen ışık enerjisiyle buharlaşır. Birim yüzeye düşen enerji arttıkça aynı sürede daha çok su buharlaşır.
Adım 1: Deneyin koşullarını yaz. Düzenek aynı, yer aynı, su miktarı aynı, hava iki günde de bulutsuz. Değişen tek şey mevsimdir.
Adım 2: I. yargıyı kontrol et. Temmuzda 1,8 litre, kasımda 0,6 litre su elde edilmiştir. Daha çok su buharlaştığına göre temmuzda birim yüzeye düşen enerji daha fazladır. Doğrudur.
Adım 3: II. yargıyı kontrol et. Birim yüzeye düşen enerjiyi artıran şey, ışınların yüzeye daha dik düşmesidir. Temmuz yaz ayı olduğuna göre ışınlar düzeneğe daha dik gelmiştir. Doğrudur.
Adım 4: III. yargıyı kontrol et. Güneş'in yaydığı enerji aylara göre böyle bir fark yaratacak biçimde değişmez. Aynı tarihte Güney Yarım Küre'de yaz yaşanması da bunu gösterir. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sık yapılan hata: Mevsim farkını Güneş'in kendisine bağlamak. Güneş her zaman aynı biçimde ışır; değişen, yeryüzünün o ışığı hangi açıyla aldığıdır.
Cevap B.`
},
{
  id: "fen-mv-214",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir gezi sitesinde şu tanıtım yayımlanmıştır:
"Temmuz ayında kayak yapmak isteyenleri Güney Yarım Küre'deki kayak merkezlerine bekliyoruz. Pistlerimizde temmuz boyunca kar kalınlığı bir metreyi aşıyor."
I. Temmuzda Güney Yarım Küre'de kış mevsimi yaşanmaktadır.
II. Temmuzda Güneş ışınları Güney Yarım Küre'ye, Kuzey Yarım Küre'ye düştüğünden daha dik açıyla düşer.
III. Bu merkezlerde temmuzda kar bulunmasının nedeni Güney Yarım Küre'nin Güneş'e daha uzak olmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II. yargıyı doğru sayma: kar bulunan yarım küre ışınları daha dik değil, daha eğik almaktadır.",
    "III. yargıyı doğru sayma: iki yarım kürenin Güneş'e uzaklığı aynıdır; farkı yaratan, ışınların düşme açısıdır.",
    "I. yargıyı atlayıp yanlış iki yargıyı seçme: metnin gösterdiği tek sonuç, temmuzda orada kış yaşandığıdır."
  ],
  aciklama: `Bir yerde kar yağması ve kar örtüsünün erimemesi, o yerin birim yüzeyine düşen ışık enerjisinin az olduğunu gösterir.
Adım 1: I. yargıyı kontrol et. Temmuzda kayak merkezlerinde bir metreyi aşan kar varsa orada hava soğuktur; yani kış mevsimi yaşanmaktadır. Doğrudur.
Adım 2: II. yargıyı kontrol et. Kış yaşanan yarım kürede ışınlar eğik düşer. Temmuzda ışınları daha dik alan yarım küre, yaz yaşayan Kuzey Yarım Küre'dir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Kuzey ve Güney Yarım Küre aynı gezegendedir; Güneş'e uzaklıkları arasında mevsim yaratacak bir fark yoktur. Uzaklık belirleyici olsaydı iki yarım kürede aynı anda aynı mevsim yaşanırdı. Yanlıştır.
Adım 4: Yalnız I doğrudur.
Sağlama: Aynı temmuz ayında Kuzey Yarım Küre'de denize giriliyor. İki yarım küre Güneş'e aynı uzaklıkta olduğuna göre farkı yaratan tek şey, eksen eğikliği nedeniyle ışınların farklı açılarla düşmesidir.
Cevap A.`
},
{
  id: "fen-mv-215",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir tarım meslek lisesinin bahçesinde, toprağın 5 cm derinliğindeki sıcaklığı her ayın 21'inde öğle vakti hep aynı noktada ölçülmektedir. Okul Kuzey Yarım Küre'dedir ve dört aya ait ölçümler tabloda verilmiştir.
I. Ocakta toprağa düşen ışınlar, tablodaki aylar içinde en eğik açıyla gelmiştir.
II. Temmuzda toprağın birim yüzeyine düşen ışık enerjisi ocaktakinden fazladır.
III. Toprak sıcaklığının yıl içinde değişmesinin nedeni, ışınların yere düşme açısının değişmesidir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm tarihi</th><th>Toprak sıcaklığı (5 cm derinlik)</th></tr><tr><td>21 Ocak</td><td>3 °C</td></tr><tr><td>21 Nisan</td><td>13 °C</td></tr><tr><td>21 Temmuz</td><td>27 °C</td></tr><tr><td>21 Ekim</td><td>16 °C</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü atlama: en sıcak ölçümün alındığı ayda birim yüzeye düşen enerji de en fazladır ve bu farkı yaratan düşme açısıdır.",
    "III. yargıyı yanlış sayma: toprağı ısıtan, birim yüzeye düşen enerjidir; onu da ışınların düşme açısı belirler.",
    "I. yargıyı yanlış sayma: en düşük sıcaklık ocakta ölçülmüştür, yani ışınlar o ay en eğik açıyla gelmiştir.",
    null
  ],
  aciklama: `Toprağın ısınması, yüzeyinin birim alanına düşen ışık enerjisine bağlıdır. Bu enerji de ışınların düşme açısıyla belirlenir.
Adım 1: Tablodaki değerleri sırala: 3 °C, 13 °C, 27 °C, 16 °C. En düşük ölçüm ocakta, en yüksek ölçüm temmuzdadır.
Adım 2: I. yargıyı kontrol et. Toprağın en az ısındığı ay ocaktır. Az ısınma, birim yüzeye az enerji düşmesi, o da ışınların en eğik gelmesi demektir. Doğrudur.
Adım 3: II. yargıyı kontrol et. Temmuzda toprak 27 °C, ocakta 3 °C ölçülmüştür. Temmuzda birim yüzeye düşen enerji açıkça daha fazladır. Doğrudur.
Adım 4: III. yargıyı kontrol et. Ölçüm hep aynı noktada ve aynı derinlikte yapılmıştır; yer değişmemiştir. Değişen, Dünya yörüngede ilerledikçe ışınların o noktaya düşme açısıdır. Doğrudur.
Adım 5: Üç yargı da doğrudur.
Sağlama: Aynı ölçüm Güney Yarım Küre'deki bir okulda yapılsaydı en yüksek değer ocakta, en düşük değer temmuzda çıkardı.
Cevap D.`
},
{
  id: "fen-mv-216",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir araç, açık bir otoparkta gün boyunca hep aynı yerde güneş altında bırakılmıştır. Aracın camları kapalıyken öğle vakti iç sıcaklığı iki ayrı ayda, bulutsuz günlerde ölçülmüş ve sonuçlar tabloya yazılmıştır.
I. Haziranda aracın tavanına düşen ışınlar daha dik açıyla gelmiştir.
II. Haziranda aracın tavanında birim yüzeye düşen ışık enerjisi daha fazladır.
III. Aralıkta aracın az ısınmasının nedeni Dünya'nın o ay Güneş'ten uzaklaşmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm ayı</th><th>Dış hava sıcaklığı</th><th>Araç içi sıcaklığı</th></tr><tr><td>Haziran</td><td>30 °C</td><td>58 °C</td></tr><tr><td>Aralık</td><td>8 °C</td><td>19 °C</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: ışınlar tavana dik geldiğinde aynı demet dar bir alana toplanır ve birim yüzeye düşen enerji artar.",
    "III. yargıyı doğru sayma: aralıkta Güney Yarım Küre'de araçlar aşırı ısınmaktadır; oysa Dünya'nın Güneş'e uzaklığı iki yer için de aynıdır.",
    null,
    "I. yargıyı yanlış sayıp III'ü doğru sayma: yazın Güneş öğle vakti yüksekte olduğu için yatay tavana ışınlar daha dik gelir; farkı yaratan uzaklık değil, bu açıdır."
  ],
  aciklama: `Araca düşen ışık enerjisi aracın gövdesi ve içindeki yüzeylerce soğurulur; araç ısınır. Birim yüzeye düşen enerji arttıkça araç daha çok ısınır.
Adım 1: Tabloyu oku. Haziranda araç içi dış havadan 28 °C, aralıkta yalnızca 11 °C daha sıcaktır. Yani haziranda araç çok daha fazla enerji almıştır.
Adım 2: I. yargıyı kontrol et. Aracın tavanı yere paralel, yatay bir yüzeydir. Araç hep aynı yerdedir; değişen, Güneş ışınlarının geliş açısıdır. Haziranda Güneş öğle vakti gökyüzünde yüksektedir, bu yüzden ışınlar yatay tavana daha dik gelir. Doğrudur.
Adım 3: II. yargıyı kontrol et. Dik gelen ışık demeti dar bir alana toplanır; böylece tavanın her bir metrekaresine düşen enerji artar. Doğrudur.
Adım 4: III. yargıyı kontrol et. Mevsimler Dünya'nın Güneş'e uzaklığıyla açıklanamaz. Aralıkta Güney Yarım Küre'de araçlar aşırı ısınmaktadır; uzaklık iki yarım küre için de aynı olduğuna göre bu yargı yanlıştır.
Adım 5: Doğru yargılar I ve II'dir. En güçlü çeldirici "II ve III" şıkkıdır: kışın havanın soğuk olmasını Güneş'ten uzaklaşmaya bağlamak çok yaygın bir düşüncedir, ama tabloyu açıklayan şey ışınların açısıdır.
Sık yapılan hata: "Kışın Dünya Güneş'ten uzaklaşır." sanmak. Dünya, Güneş'e en yakın konumuna ocak başında gelir; yani aralıkta Güneş'ten uzaklaşmaz, tersine yakınlaşır.
Cevap C.`
},
{
  id: "fen-mv-217",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir müzenin cam tavanlı salonunda, eserleri korumak için otomatik bir perde sistemi kurulmuştur. Sistem yaz aylarında öğle saatlerinde perdeyi kapatmakta, kış aylarında ise açık tutmaktadır. Salona gelen ışınların iki mevsimdeki öğle vakti açıları şekilde verilmiştir.\n**Buna göre sistemin bu şekilde çalışmasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Müzenin cam tavanına yaz ve kış aylarında öğle vakti gelen ışınların açıları"><g stroke="currentColor" stroke-width="3"><line x1="40" y1="180" x2="230" y2="180"/><line x1="290" y1="180" x2="480" y2="180"/></g><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="60" y1="40" x2="117" y2="180"/><line x1="100" y1="40" x2="157" y2="180"/><line x1="140" y1="40" x2="197" y2="180"/></g><g stroke="var(--vurgu2)" stroke-width="2.5" stroke-dasharray="7 5"><line x1="232" y1="120" x2="388" y2="180"/><line x1="272" y1="120" x2="428" y2="180"/><line x1="312" y1="120" x2="468" y2="180"/></g><path d="M125 180 A 32 32 0 0 1 145 150" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M396 180 A 32 32 0 0 1 398 168" fill="none" stroke="currentColor" stroke-width="1.6"/><g fill="currentColor" font-size="15"><text x="163" y="168">68°</text><text x="404" y="174">21°</text><text x="40" y="30" font-weight="bold">Yaz — öğle vakti</text><text x="290" y="30" font-weight="bold">Kış — öğle vakti</text><text x="40" y="206">Cam tavan</text><text x="290" y="206">Cam tavan</text></g></svg>`,
  secenekler: [
    "Yaz aylarında ışınlar cam tavana daha eğik geldiği için salon aşırı ısınır.",
    "Yaz aylarında ışınlar cam tavana daha dik geldiği için birim yüzeye düşen enerji artar.",
    "Kış aylarında Güneş çevresine daha az ışık enerjisi yaydığı için salon soğuk kalır.",
    "Kış aylarında Dünya Güneş'ten uzaklaştığı için cam tavandan içeri az ışık girer."
  ],
  dogru: 1,
  hatalar: [
    "Şekildeki açıları ters okuma: yaz ışınları 68° ile, yani daha dik gelmektedir.",
    null,
    "Farkı Güneş'in yaydığı enerjiye bağlama: Güneş'in yaydığı enerji mevsimlere göre değişmez; değişen, ışınların tavana düşme açısıdır.",
    "Mevsimleri Güneş'e uzaklıkla açıklama: aynı kışta Güney Yarım Küre'deki bir müzede tam tersi yaşanır, oysa uzaklık ikisi için de aynıdır."
  ],
  aciklama: `Bir yüzeye ışınlar ne kadar dik düşerse aynı ışık demeti o kadar dar bir alana toplanır ve birim yüzeye düşen enerji o kadar artar.
Adım 1: Şekildeki açıları oku. Yaz aylarında öğle vakti ışınlar cam tavana 68°, kış aylarında 21° ile gelmektedir.
Adım 2: 68°, 90°'ye yakın bir açıdır; yazın ışınlar tavana çok daha dik düşer. Kışın ise yatık gelir.
Adım 3: Dik gelen ışıkta birim yüzeye düşen enerji artar. Cam tavandan içeri giren enerji arttıkça salon hızla ısınır ve eserler zarar görebilir.
Adım 4: Öyleyse perdenin yazın kapanmasının nedeni, ışınların daha dik gelmesi ve birim yüzeye düşen enerjinin artmasıdır.
Sık yapılan hata: "Kışın Güneş daha az ışır." demek. Güneş her mevsim aynı biçimde ışır; değişen, ışınların yüzeye hangi açıyla ulaştığıdır.
Cevap B.`
},
{
  id: "fen-mv-218",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Kuzey Yarım Küre'deki bir apartmanda, aynı katta bulunan ve büyüklükleri eşit olan iki dairenin pencereleri farklı yönlere bakmaktadır. Yönetici, iki dairenin ocak ayındaki ısınma giderini tabloya yazmıştır.\n**Buna göre giderler arasındaki farkın nedeni aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Daire</th><th>Pencerelerin baktığı yön</th><th>Ocak ayı ısınma gideri</th></tr><tr><td>K</td><td>Güney</td><td>1 250 TL</td></tr><tr><td>L</td><td>Kuzey</td><td>1 840 TL</td></tr></table>`,
  secenekler: [
    "K dairesinin pencerelerine ışınlar daha dik düştüğü için içeri daha çok enerji girer.",
    "L dairesi Güneş'e daha uzak olduğu için gün boyunca daha az ısı kazanmaktadır.",
    "L dairesinde gündüz daha kısa sürdüğü için o dairenin ısınma gideri artmaktadır.",
    "K dairesinin camları ışınları geri yansıttığı için dairenin ısısı dışarı kaçmaz."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Aynı binadaki iki dairenin Güneş'e uzaklığını farklı sanma: aradaki birkaç metrelik fark ısınmayı etkilemez.",
    "Gündüz süresini pencerenin yönüne bağlı sanma: aynı binadaki iki dairede gündüz aynı sürede başlar ve biter.",
    "Yansımayı ısınmanın nedeni sanma: daireyi ısıtan, camdan içeri giren ve yüzeylerce soğurulan ışık enerjisidir."
  ],
  aciklama: `Kuzey Yarım Küre'de kış aylarında Güneş öğle vakti bile gökyüzünde alçakta kalır ve güney yönünden ışık gönderir.
Adım 1: Tabloyu oku. Güneye bakan K dairesinin gideri 1 250 TL, kuzeye bakan L dairesinin gideri 1 840 TL'dir. K dairesi ısınmak için daha az yakıt harcamıştır.
Adım 2: İki daire aynı katta, aynı büyüklükte ve aynı binadadır. Değişen tek şey pencerelerin baktığı yöndür.
Adım 3: Güneye bakan pencerelere ışınlar kış boyunca daha dik açıyla ulaşır. Dik gelen ışıkta birim yüzeye düşen enerji arttığı için içeri daha çok enerji girer ve daire kendiliğinden ısınır.
Adım 4: Kuzeye bakan pencerelere ise ışınlar ya çok eğik ulaşır ya da hiç ulaşmaz. Bu daire aradaki farkı yakıtla kapatmak zorunda kalır.
Sağlama: Kışın karın önce güneye bakan yüzeylerde erimesinin nedeni de budur.
Cevap A.`
},
{
  id: "fen-mv-219",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir gözlemevi, 21 Haziran günü iki şehirde öğle vakti Güneş'in ufuktan yüksekliğini ve o günkü gündüz süresini ölçmüştür. Ölçümler tabloda verilmiştir.\n**Buna göre aşağıdakilerden hangisi söylenebilir?**",
  gorsel: `<table class="tablo"><tr><th>Şehir</th><th>Güneş'in öğle vaktindeki yüksekliği</th><th>Gündüz süresi</th></tr><tr><td>K</td><td>70°</td><td>15 saat 20 dakika</td></tr><tr><td>L</td><td>26°</td><td>9 saat 05 dakika</td></tr></table>`,
  secenekler: [
    "İki şehirde de o gün yaz mevsimi yaşanmaktadır.",
    "L şehrinin birim yüzeyine o gün daha çok ışık enerjisi düşmüştür.",
    "K şehri, L şehrine göre Güneş'e daha yakın konumdadır.",
    "L şehri Güney Yarım Küre'dedir ve orada kış mevsimi yaşanmaktadır."
  ],
  dogru: 3,
  hatalar: [
    "Tarihe bakıp iki şehri de yaz sayma: L şehrinde gündüz 12 saatten kısadır, orada kış yaşanmaktadır.",
    "Verileri ters okuma: ışınları 26° ile alan L şehrinde birim yüzeye düşen enerji daha azdır.",
    "Farkı Güneş'e uzaklıkla açıklama: iki şehir de Dünya üzerindedir ve Güneş'e uzaklıkları arasında mevsim yaratacak bir fark yoktur.",
    null
  ],
  aciklama: `Bir yerde gündüz süresinin 12 saatten uzun olması, o yerin Güneş'e dönük yarım kürede bulunduğunu gösterir.
Adım 1: Tabloyu oku. K şehrinde Güneş öğle vakti 70° yükseklikte ve gündüz 15 saat 20 dakika sürüyor. L şehrinde ise Güneş 26° yükseklikte ve gündüz yalnızca 9 saat 05 dakika sürüyor.
Adım 2: Tarih 21 Haziran'dır. Bu tarihte gündüzün 12 saatten uzun olduğu yerler Kuzey, kısa olduğu yerler Güney Yarım Küre'dedir. Öyleyse K kuzeyde, L güneydedir.
Adım 3: L şehrinde gündüz kısa ve Güneş alçaktadır; ışınlar eğik geldiği için birim yüzeye düşen enerji azdır. Bu, kış mevsiminin işaretidir.
Adım 4: Öyleyse söylenebilecek yargı, L şehrinin Güney Yarım Küre'de olduğu ve orada kış yaşandığıdır.
Sık yapılan hata: Haziran ayını her yerde yaz saymak. Mevsimi belirleyen ay adı değil, o yerin ışınları hangi açıyla aldığıdır.
Cevap D.`
},
{
  id: "fen-mv-220",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir hava durumu sitesi, K ve L şehirlerinin aylık ortalama sıcaklıklarını aynı grafikte yayımlamıştır. İki şehir de deniz kıyısındadır ve yükseltileri birbirine yakındır.
I. K ve L şehirleri farklı yarım kürelerde bulunmaktadır.
II. Temmuzda K şehrine düşen Güneş ışınları, L şehrine düşenlerden daha diktir.
III. İki şehrin sıcaklıklarının farklı olmasının nedeni, Güneş'e uzaklıklarının yıl içinde farklı değişmesidir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 310" role="img" aria-label="K ve L şehirlerinin aylara göre ortalama sıcaklık grafiği"><g stroke="currentColor" stroke-width="2"><line x1="62" y1="50" x2="62" y2="240"/><line x1="62" y1="240" x2="492" y2="240"/></g><g stroke="currentColor" stroke-width="0.8" opacity="0.45"><line x1="62" y1="180" x2="492" y2="180"/><line x1="62" y1="120" x2="492" y2="120"/><line x1="62" y1="60" x2="492" y2="60"/></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="54" y="245">0</text><text x="54" y="185">10</text><text x="54" y="125">20</text><text x="54" y="65">30</text></g><polyline points="90,216 162,192 234,132 306,84 378,114 450,180" fill="none" stroke="var(--vurgu)" stroke-width="3"/><polyline points="90,90 162,114 234,168 306,198 378,174 450,126" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/><g fill="var(--vurgu)"><circle cx="90" cy="216" r="4"/><circle cx="162" cy="192" r="4"/><circle cx="234" cy="132" r="4"/><circle cx="306" cy="84" r="4"/><circle cx="378" cy="114" r="4"/><circle cx="450" cy="180" r="4"/></g><g fill="var(--vurgu2)"><circle cx="90" cy="90" r="4"/><circle cx="162" cy="114" r="4"/><circle cx="234" cy="168" r="4"/><circle cx="306" cy="198" r="4"/><circle cx="378" cy="174" r="4"/><circle cx="450" cy="126" r="4"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="90" y="260">Ocak</text><text x="162" y="260">Mart</text><text x="234" y="260">Mayıs</text><text x="306" y="260">Temmuz</text><text x="378" y="260">Eylül</text><text x="450" y="260">Kasım</text></g><line x1="80" y1="284" x2="124" y2="284" stroke="var(--vurgu)" stroke-width="3"/><line x1="230" y1="284" x2="274" y2="284" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/><g fill="currentColor" font-size="15"><text x="132" y="289">K şehri</text><text x="282" y="289">L şehri</text><text x="62" y="36" font-weight="bold">Grafik: Aylık ortalama sıcaklık (°C)</text></g></svg>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 2,
  hatalar: [
    "I. yargıyı atlama: bir şehir ısınırken diğerinin soğuması, ancak farklı yarım kürelerde bulunmalarıyla açıklanır.",
    "III. yargıyı doğru sayma: iki şehir de aynı gezegende olduğundan Güneş'e uzaklıkları her an birbirine eşittir.",
    null,
    "II. yargıyı atlayıp III'ü doğru sayma: temmuzda sıcaklığı yüksek olan şehir ışınları daha dik alan şehirdir."
  ],
  aciklama: `Grafikte iki eğri birbirinin tersi biçiminde ilerliyorsa, bir yerde sıcaklık artarken diğerinde azalıyor demektir.
Adım 1: Grafiği oku. K şehrinde sıcaklık ocakta 4 °C iken temmuzda 26 °C'ye çıkıyor. L şehrinde ise ocakta 25 °C iken temmuzda 7 °C'ye düşüyor.
Adım 2: I. yargıyı kontrol et. İki şehirde aynı anda karşıt mevsimler yaşanıyor. Bu ancak farklı yarım kürelerde bulunmalarıyla olur. Doğrudur.
Adım 3: II. yargıyı kontrol et. Temmuzda K şehrinde yaz, L şehrinde kış yaşanıyor. Yaz yaşanan yerde ışınlar daha dik düşer. Doğrudur.
Adım 4: III. yargıyı kontrol et. İki şehir de Dünya üzerindedir; Güneş'e uzaklıkları her an birbirine eşittir. Bu uzaklık iki şehir için farklı değişemez. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sık yapılan hata: Karşıt eğrileri "biri Güneş'e yaklaşıyor, öteki uzaklaşıyor" diye yorumlamak. Karşıtlığı yaratan, eksen eğikliği nedeniyle iki yarım kürenin ışınları farklı açılarla almasıdır.
Cevap C.`
},
{
  id: "fen-mv-221",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir belediye, parklarındaki çimlerin sulama programını toprağın günlük su kaybına göre belirlemektedir. Ölçümler aynı parkta yapılmış ve tabloya işlenmiştir. Park Kuzey Yarım Küre'dedir.
I. Temmuzda parkın birim yüzeyine düşen ışık enerjisi, tablodaki aylar içinde en fazladır.
II. Ocakta sulamanın seyrek yapılması, ışınların o ay daha eğik açıyla gelmesiyle açıklanır.
III. Yaz aylarında su kaybının artmasının nedeni Dünya'nın yörüngesinde Güneş'e yaklaşmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ay</th><th>Topraktan günlük su kaybı</th><th>Haftalık sulama sayısı</th></tr><tr><td>Ocak</td><td>1,2 mm</td><td>1</td></tr><tr><td>Nisan</td><td>3,4 mm</td><td>3</td></tr><tr><td>Temmuz</td><td>6,8 mm</td><td>6</td></tr><tr><td>Ekim</td><td>2,6 mm</td><td>2</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I. yargıyı yanlış sayma: günlük su kaybının en yüksek olduğu ay, birim yüzeye en çok enerjinin düştüğü aydır.",
    null,
    "II. yargıyı atlayıp III'ü doğru sayma: ocakta suyun az buharlaşması, ışınların eğik gelmesinin doğrudan sonucudur.",
    "III. yargıyı doğru sayma: aynı temmuzda Güney Yarım Küre'de kış yaşanır; oysa Dünya'nın Güneş'e uzaklığı ikisi için de aynıdır."
  ],
  aciklama: `Topraktaki suyun buharlaşması, toprağın yüzeyine düşen ışık enerjisiyle olur. Birim yüzeye düşen enerji arttıkça günlük su kaybı da artar.
Adım 1: Tabloyu oku. Günlük su kaybı ocakta 1,2 mm, nisanda 3,4 mm, temmuzda 6,8 mm, ekimde 2,6 mm'dir. Sulama sayısı da bu sırayı izlemiştir.
Adım 2: I. yargıyı kontrol et. En büyük su kaybı temmuzdadır. Ölçümler hep aynı parkta yapıldığına göre temmuzda birim yüzeye düşen enerji en fazladır. Doğrudur.
Adım 3: II. yargıyı kontrol et. Ocakta su kaybı en azdır; demek ki birim yüzeye düşen enerji de en azdır. Bunun nedeni, kış aylarında ışınların parka daha eğik açıyla gelmesidir. Doğrudur.
Adım 4: III. yargıyı kontrol et. Dünya'nın Güneş'e uzaklığı mevsimleri açıklamaz. Temmuzda Güney Yarım Küre'de kış yaşanması bunu gösterir. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sağlama: Aynı park Güney Yarım Küre'de olsaydı en sık sulama ocak ayında yapılırdı.
Cevap B.`
},
{
  id: "fen-mv-222",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Kuzey Kutup Dairesi'nin içinde kurulmuş bir araştırma istasyonunda görevli ekip, bir yıl boyunca gökyüzü gözlemlerini günlüğüne yazmıştır. Günlükten alınan dört not tabloda verilmiştir.
I. İstasyonun bulunduğu yerde 21 Haziran'da birim yüzeye düşen ışık enerjisi, 21 Aralık'takinden fazladır.
II. 21 Mart ve 23 Eylül'de Güneş ışınları Ekvator'a dik düşer.
III. 21 Aralık'ta Güney Kutup bölgesinde Güneş gün boyunca ufkun üzerinde kalır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Tarih</th><th>Günlüğe yazılan not</th></tr><tr><td>21 Mart</td><td>Gece ile gündüz yaklaşık eşit sürdü.</td></tr><tr><td>21 Haziran</td><td>Güneş gece boyunca ufkun altına inmedi.</td></tr><tr><td>23 Eylül</td><td>Gece ile gündüz yaklaşık eşit sürdü.</td></tr><tr><td>21 Aralık</td><td>Güneş gün boyunca hiç doğmadı.</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü atlama: gece ile gündüzün eşitlendiği tarihlerde ışınlar Ekvator'a dik düşer ve aynı anda iki kutupta karşıt durumlar yaşanır.",
    "III. yargıyı yanlış sayma: bir kutupta Güneş hiç doğmuyorsa diğerinde hiç batmıyor demektir.",
    "I. yargıyı yanlış sayma: Güneş'in hiç batmadığı tarihte birim yüzeye düşen enerji, hiç doğmadığı tarihtekinden elbette fazladır.",
    null
  ],
  aciklama: `Dünya'nın eksen eğikliği, kutup bölgelerinde Güneş'in haftalarca batmamasına ya da hiç doğmamasına yol açar.
Adım 1: I. yargıyı kontrol et. 21 Haziran'da Güneş ufkun altına hiç inmemiş, 21 Aralık'ta ise hiç doğmamıştır. Güneş'in hiç doğmadığı bir günde yüzeye doğrudan ışık enerjisi düşmez. Öyleyse haziranda birim yüzeye düşen enerji daha fazladır. Doğrudur.
Adım 2: II. yargıyı kontrol et. 21 Mart ve 23 Eylül, gece ile gündüzün eşitlendiği tarihlerdir. Bu tarihlerde ışınlar Ekvator'a dik düşer ve iki yarım küre ışınları eşit açıyla alır. Doğrudur.
Adım 3: III. yargıyı kontrol et. 21 Aralık'ta eksenin kuzey ucu Güneş'ten uzağa bakar; bu yüzden kuzeyde Güneş doğmaz. Aynı anda güney ucu Güneş'e dönüktür ve Güney Kutup bölgesinde Güneş ufkun üzerinden inmez. Doğrudur.
Adım 4: Üç yargı da doğrudur.
Sağlama: Günlükteki dört not, eksen eğikliğinin dört aşamasını gösterir: iki uç tarih ve aralarındaki iki denge tarihi.
Cevap D.`
},
{
  id: "fen-mv-223",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir kültür dergisinde şu bilgi yer almaktadır:
"Anadolu'da 21 Mart, baharın başlangıcı sayılır ve yüzyıllardır bayram olarak kutlanır. Bu tarihte gece ile gündüz birbirine eşitlenir, doğa da kış uykusundan uyanmaya başlar."
I. Bu tarihte Güneş ışınları Ekvator'a dik düşer.
II. Bu tarihte Güney Yarım Küre'de de bahar mevsimi başlar.
III. Bu tarihten bir ay sonra Güney Yarım Küre'deki Buenos Aires şehrinde gündüzler gecelerden uzun olur.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II. yargıyı doğru sayma: iki yarım kürede aynı anda aynı mevsim yaşanmaz; kuzeyde bahar başlarken güneyde sonbahar başlar.",
    "III. yargıyı doğru sayma: 21 Mart'tan sonra Dünya yörüngede ilerledikçe Kuzey Yarım Küre Güneş'e dönük hâle gelir; güneyde sonbahar yaşanır ve gündüzler gecelerden kısa olur.",
    "Mevsimleri her yerde aynı sanıp I'i atlama: güneyde de bahar başladığını düşünen, bir ay sonra orada gündüzün uzun olacağını da sanır; oysa güneyde sonbahar yaşanır ve I. yargı doğrudur."
  ],
  aciklama: `Gece ile gündüzün her yerde eşitlendiği tarihlerde Güneş ışınları Ekvator'a dik düşer; aydınlık ile karanlığı ayıran çizgi iki kutuptan da geçer.
Adım 1: I. yargıyı kontrol et. Metin 21 Mart'ta gece ile gündüzün eşitlendiğini söylüyor. Bu ancak ışınlar Ekvator'a dik düştüğünde olur. Doğrudur.
Adım 2: II. yargıyı kontrol et. Eksen eğikliği nedeniyle yarım kürelerde her zaman karşıt mevsimler yaşanır. Kuzeyde bahar başlarken güneyde sonbahar başlar. Yanlıştır.
Adım 3: III. yargıyı kontrol et. 21 Mart'tan sonra Dünya yörüngede ilerledikçe eksenin kuzey ucu Güneş'e dönük hâle gelir; Kuzey Yarım Küre yaza, Güney Yarım Küre kışa doğru ilerler. Kışa giden yarım kürede gündüzler kısalır ve gecelerden kısa olur. Bir ay sonra Buenos Aires'te gündüz geceden kısadır. Yanlıştır.
Adım 4: Yalnız I doğrudur. En güçlü çeldirici "II ve III" şıkkıdır: "21 Mart her yerde baharın başlangıcıdır" diye düşünen öğrenci, güneyde de gündüzlerin uzayacağını sanır ve iki yanlış yargıyı birlikte seçer.
Sık yapılan hata: "Bahar her yerde marttadır." sanmak. Güney Yarım Küre'de 21 Mart'ta sonbahar başlar, bahar ise 23 Eylül'de gelir.
Cevap A.`
},
{
  id: "fen-mv-224",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Mektup arkadaşı olan iki öğrenci, 21 Haziran günü bulundukları şehirlerde Güneş'in doğuş ve batış saatlerini not edip birbirlerine göndermiştir. Notlar tabloda verilmiştir.
I. O gün K şehrinde yaz, L şehrinde kış mevsimi yaşanmaktadır.
II. L şehri Güney Yarım Küre'dedir.
III. O gün K şehrinde ölçülen en yüksek hava sıcaklığı, L şehrindekinden kesinlikle daha büyüktür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Şehir</th><th>Güneş'in doğuşu</th><th>Güneş'in batışı</th><th>Gündüz süresi</th></tr><tr><td>K</td><td>05.10</td><td>20.50</td><td>15 saat 40 dakika</td></tr><tr><td>L</td><td>07.05</td><td>17.15</td><td>10 saat 10 dakika</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I. yargıyı atlama: 21 Haziran'da gündüzü 12 saatten uzun olan yerde yaz, kısa olan yerde kış yaşanır.",
    null,
    "III. yargıyı doğru sayma: hava sıcaklığı yükseltiye, denize ve bulutluluğa da bağlıdır; verilenlerle bu karşılaştırma kesin olarak yapılamaz.",
    "I. yargıyı atlayıp III'ü doğru sayma: tablodan çıkarılabilecek kesin sonuçlar mevsim ve yarım küredir."
  ],
  aciklama: `Bir tabloda verilenlerle kesin olarak söylenebilecek şeyler, yalnızca o verilerden zorunlu olarak çıkan sonuçlardır.
Adım 1: Gündüz sürelerini oku. K şehrinde 15 saat 40 dakika, L şehrinde 10 saat 10 dakikadır.
Adım 2: I. yargıyı kontrol et. 21 Haziran'da gündüzü 12 saatten uzun olan yer Güneş'e dönük yarım küredir; orada yaz yaşanır. Gündüzü kısa olan yerde ise kış yaşanır. Doğrudur.
Adım 3: II. yargıyı kontrol et. 21 Haziran'da kış yaşanan yerler Güney Yarım Küre'dedir. Öyleyse L şehri güneydedir. Doğrudur.
Adım 4: III. yargıyı kontrol et. Yaz yaşanan bir yerde hava genellikle daha sıcaktır, ama hava sıcaklığı yükseltiye, denize yakınlığa ve o günkü bulutluluğa da bağlıdır. Örneğin K şehri yüksek bir dağ kasabası olabilir. Tabloda bu bilgiler verilmediği için "kesinlikle" denemez. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sık yapılan hata: Veriden çıkan sonucu, veriyle desteklenmeyen bir tahminle karıştırmak. "Kesinlikle" sözcüğü gördüğünde, yargının verilenlerden zorunlu olarak çıkıp çıkmadığını sor.
Cevap B.`
},
{
  id: "fen-mv-225",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir açık hava sineması, gösterilerini hava tam karardıktan sonra başlatmaktadır. İşletme, aynı şehirde dört ayda uyguladığı başlangıç saatlerini tabloya yazmıştır. Şehir Kuzey Yarım Küre'dedir.
I. Haziranda bu şehirde gündüz süresi, tablodaki aylar içinde en uzundur.
II. Ekimde Güneş ışınları şehre, haziranda olduğundan daha eğik açıyla düşer.
III. Başlangıç saatinin ekimde öne alınmasının nedeni, Dünya'nın o ay kendi ekseni çevresinde daha hızlı dönmesidir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ay</th><th>Gösterinin başlangıç saati</th></tr><tr><td>Mayıs</td><td>20.45</td></tr><tr><td>Haziran</td><td>21.15</td></tr><tr><td>Ağustos</td><td>20.30</td></tr><tr><td>Ekim</td><td>19.15</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 2,
  hatalar: [
    "I. yargıyı atlama: gösterinin en geç başladığı ay, havanın en geç karardığı yani gündüzün en uzun olduğu aydır.",
    "III. yargıyı doğru sayma: Dünya kendi ekseni çevresindeki dönüşünü her ay yaklaşık aynı sürede tamamlar.",
    null,
    "II. yargıyı atlayıp III'ü doğru sayma: ekimde havanın erken kararması, ışınların o ay daha eğik gelmesiyle birlikte olur."
  ],
  aciklama: `Havanın kararma saati gündüzün ne kadar sürdüğünü gösterir. Gündüz uzadıkça hava daha geç kararır.
Adım 1: Tabloyu oku. Gösteri mayısta 20.45, haziranda 21.15, ağustosta 20.30, ekimde 19.15'te başlıyor.
Adım 2: I. yargıyı kontrol et. En geç başlangıç haziranda, saat 21.15'tedir. Demek ki hava en geç haziranda kararmakta, yani gündüz o ay en uzun sürmektedir. Doğrudur.
Adım 3: II. yargıyı kontrol et. Haziranda gündüz en uzun, ekimde belirgin biçimde kısadır. Gündüz kısaldıkça ışınların düşme açısı da küçülür. Öyleyse ekimde ışınlar daha eğik düşer. Doğrudur.
Adım 4: III. yargıyı kontrol et. Dünya'nın kendi ekseni çevresindeki dönüşü yaklaşık 24 saattir ve aylara göre değişmez. Değişen, gündüzün bu 24 saat içindeki payıdır. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sağlama: Aynı sinema Güney Yarım Küre'de olsaydı en geç başlangıç saatini aralıkta uygulardı.
Cevap C.`
},
/* ===================== KADEME 3 — LGS AYARI (313-325) ===================== */
{
  id: "fen-mv-313",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kuş gözlem derneği, ayağına halka takılan bir göçmen kuşun yıl içinde bulunduğu bölgeleri kaydetmiştir. Kayıtların bir bölümü tabloda verilmiştir.
I. Kuş, yılın her iki döneminde de yaz mevsiminin yaşandığı bir bölgede bulunmaktadır.
II. Aralık ayında Güney Afrika'ya düşen Güneş ışınları, Kuzey Avrupa'ya düşenlerden daha eğiktir.
III. Kuşun yer değiştirmesi, Dünya'nın Güneş'e uzaklığının yıl içinde değişmesiyle açıklanır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Kuşun bulunduğu bölge</th><th>O bölgedeki gündüz süresi</th></tr><tr><td>Haziran – Ağustos</td><td>Kuzey Avrupa</td><td>16 saat 40 dakika</td></tr><tr><td>Aralık – Şubat</td><td>Güney Afrika</td><td>13 saat 50 dakika</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II. yargıyı doğru sayma: aralıkta Güney Afrika'da yaz yaşanır; ışınlar oraya Kuzey Avrupa'ya olduğundan daha dik düşer.",
    "III. yargıyı doğru sayma: kuş yer değiştirirken Dünya'nın Güneş'e uzaklığı iki bölge için de aynıdır.",
    "I. yargıyı atlayıp iki yanlış yargıyı seçme: tablodaki uzun gündüz süreleri, kuşun her iki dönemde de yaz yaşanan bölgede bulunduğunu gösterir."
  ],
  aciklama: `Bir bölgede gündüz süresinin 12 saatten belirgin biçimde uzun olması, o bölgenin Güneş'e dönük yarım kürede bulunduğunu, yani orada yazın yaşandığını gösterir.
Adım 1: Tablodaki gündüz sürelerini oku. Haziran–ağustos döneminde Kuzey Avrupa'da 16 saat 40 dakika, aralık–şubat döneminde Güney Afrika'da 13 saat 50 dakika.
Adım 2: I. yargıyı kontrol et. İki değer de 12 saatten uzundur. Kuş haziranda kuzeyde, aralıkta güneyde yaz yaşayan bölgelerde bulunmaktadır. Doğrudur.
Adım 3: II. yargıyı kontrol et. Aralıkta Güney Afrika'da yaz, Kuzey Avrupa'da kış yaşanır. Yaz yaşanan yerde ışınlar daha eğik değil, daha diktir. Yanlıştır.
Adım 4: III. yargıyı kontrol et. Kuş yer değiştirdiğinde Dünya'nın Güneş'e uzaklığı değişmez; zaten bu uzaklık iki bölge için de her an aynıdır. Kuşu yönlendiren, eksen eğikliği nedeniyle yarım kürelerde karşıt mevsimlerin yaşanmasıdır. Yanlıştır.
Adım 5: Yalnız I doğrudur. En güçlü çeldirici "I ve III" şıkkıdır: kuşun uzun yolculuğu, "Dünya Güneş'e yaklaşıp uzaklaştığı için yer değiştiriyor" düşüncesini çağrıştırır. Oysa kuşu yönlendiren, yarım kürelerde karşıt mevsimlerin yaşanmasıdır.
Sağlama: Kuş, altı ayda bir yarım küre değiştirerek yılın tamamını yaz koşullarında geçirmektedir. Bu ancak mevsimlerin karşıt olmasıyla mümkündür.
Sık yapılan hata: Aralıkta her yerde kış yaşandığını sanıp II. yargıyı doğru saymak. Aralıkta kış yalnızca Kuzey Yarım Küre'dedir; Güney Afrika'da yaz yaşanır.
Cevap A.`
},
{
  id: "fen-mv-314",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Uluslararası bir yelken federasyonu, açık deniz yarışlarını her ülkede o ülkenin yaz aylarında düzenlemektedir. Federasyonun yayımladığı takvimin bir bölümü tabloda verilmiştir.
I. Tabloda yer alan ülkelerden ikisi Güney Yarım Küre'de bulunmaktadır.
II. Ocak ayında Avustralya'ya düşen Güneş ışınları, Kanada'ya düşenlerden daha diktir.
III. Yarış aylarının ülkeden ülkeye değişmesinin nedeni, ülkelerin Güneş'e olan uzaklıklarının farklı olmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ülke</th><th>Yarışın düzenlendiği aylar</th></tr><tr><td>Kanada</td><td>Haziran – Temmuz</td></tr><tr><td>Türkiye</td><td>Temmuz – Ağustos</td></tr><tr><td>Avustralya</td><td>Ocak – Şubat</td></tr><tr><td>Arjantin</td><td>Aralık – Ocak</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 2,
  hatalar: [
    "I. yargıyı atlama: yarışları aralık–şubat arasında yapan iki ülke, o aylarda yaz yaşadığına göre Güney Yarım Küre'dedir.",
    "III. yargıyı doğru sayma: dört ülke de aynı gezegende olduğundan Güneş'e uzaklıkları her an birbirine eşittir.",
    null,
    "II. yargıyı atlayıp III'ü doğru sayma: ocakta yaz yaşayan Avustralya, ışınları Kanada'dan daha dik alır."
  ],
  aciklama: `Yarışlar her ülkede o ülkenin yazında yapıldığına göre takvimdeki aylar, o ülkede yazın hangi aylara denk geldiğini gösterir.
Adım 1: Tabloyu oku. Kanada ve Türkiye yarışları haziran–ağustos arasında, Avustralya ve Arjantin aralık–şubat arasında yapıyor.
Adım 2: I. yargıyı kontrol et. Aralık–şubat aylarında yaz yaşayan yerler Güney Yarım Küre'dedir. Avustralya ve Arjantin bu koşula uyar; yani iki ülke güneydedir. Doğrudur.
Adım 3: II. yargıyı kontrol et. Ocakta Avustralya'da yaz, Kanada'da kış yaşanır. Yaz yaşanan yerde ışınlar daha dik düşer ve birim yüzeye düşen enerji daha fazladır. Doğrudur.
Adım 4: III. yargıyı kontrol et. Dört ülke de Dünya üzerindedir; Güneş'e uzaklıkları arasında mevsim yaratacak bir fark yoktur. Farkı yaratan, eksen eğikliği nedeniyle ışınların yarım kürelere farklı açılarla düşmesidir. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sık yapılan hata: Takvimdeki farkı "o ülkeler daha sıcak bölgede" diye yorumlamak. Tablodaki asıl bilgi, yazın hangi aylarda yaşandığıdır.
Cevap C.`
},
{
  id: "fen-mv-315",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `İnsan derisi, üzerine düşen güneş ışığının etkisiyle D vitamini üretir. Kuzey Yarım Küre'deki bir şehrin hastanesi, yıl içindeki dört aya ait D vitamini ölçümlerinin aylık ortalamalarını grafikte yayımlamıştır.
I. Grafikteki aylar içinde ortalamanın en yüksek olduğu ayda şehre düşen ışınlar en dik açıyla gelmiştir.
II. Ocakta şehrin birim yüzeyine düşen ışık enerjisi, temmuzdakinden azdır.
III. Aynı ölçüm Güney Yarım Küre'deki bir şehirde yapılsaydı en yüksek ortalama yine temmuzda bulunurdu.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 290" role="img" aria-label="Bir şehirde ocak, nisan, temmuz ve ekim aylarındaki ortalama D vitamini değerleri"><g stroke="currentColor" stroke-width="2"><line x1="74" y1="45" x2="74" y2="230"/><line x1="74" y1="230" x2="492" y2="230"/></g><g stroke="currentColor" stroke-width="0.8" opacity="0.45"><line x1="74" y1="180" x2="492" y2="180"/><line x1="74" y1="130" x2="492" y2="130"/><line x1="74" y1="80" x2="492" y2="80"/></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="66" y="235">0</text><text x="66" y="185">10</text><text x="66" y="135">20</text><text x="66" y="85">30</text></g><rect x="106" y="160" width="58" height="70" fill="var(--vurgu)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><rect x="198" y="130" width="58" height="100" fill="var(--vurgu)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><rect x="290" y="70" width="58" height="160" fill="var(--vurgu2)" opacity="0.6" stroke="currentColor" stroke-width="1.5"/><rect x="382" y="110" width="58" height="120" fill="var(--vurgu)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="135" y="250">Ocak</text><text x="227" y="250">Nisan</text><text x="319" y="250">Temmuz</text><text x="411" y="250">Ekim</text><text x="135" y="153">14</text><text x="227" y="123">20</text><text x="319" y="63">32</text><text x="411" y="103">24</text></g><text x="74" y="278" fill="currentColor" font-size="15" font-weight="bold">Grafik: Aylık ortalama D vitamini değeri (ng/mL)</text></svg>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I. yargıyı yanlış sayma: yargı yılın tamamını değil, grafikteki dört ayı karşılaştırıyor; bu aylar içinde ışınlar Kuzey Yarım Küre'de en dik temmuzda gelir.",
    null,
    "III. yargıyı doğru sayma: Güney Yarım Küre'de temmuz kış ayıdır; aynı dört ay içinde orada en yüksek değer ocakta bulunurdu.",
    "I. yargıyı yanlış sayıp III'ü doğru sayma: grafikteki en yüksek sütun temmuza aittir; temmuz yalnızca kuzeyde yaz ayıdır, güneyde kıştır."
  ],
  aciklama: `Deride D vitamini üretimi, deriye düşen ışık enerjisiyle gerçekleşir. Birim yüzeye düşen enerji arttıkça üretim de artar.
Adım 1: Grafikteki değerleri oku: ocak 14, nisan 20, temmuz 32, ekim 24 ng/mL. Dört ay içinde en yüksek değer temmuzdadır.
Adım 2: I. yargıyı kontrol et. Yargı yalnızca grafikteki dört ayı (ocak, nisan, temmuz, ekim) karşılaştırıyor. Şehir Kuzey Yarım Küre'dedir; ışınların en dik geldiği 21 Haziran'a bu dört ay içinde en yakın olan ay temmuzdur. Öyleyse bu aylar içinde ışınlar en dik temmuzda gelir. Doğrudur.
Adım 3: II. yargıyı kontrol et. Ocak kış ayıdır; ışınlar eğik geldiği için birim yüzeye düşen enerji temmuzdakinden azdır. Grafikte ocak sütununun en kısa olması da bunu destekler. Doğrudur.
Adım 4: III. yargıyı kontrol et. Güney Yarım Küre'de temmuz kış, ocak yaz ayıdır. Aynı dört ay içinde orada en yüksek değer ocakta beklenir. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir. En güçlü çeldirici "Yalnız II" şıkkıdır: "Işınlar en dik 21 Haziran'da gelir, temmuzda değil." diye düşünüp I'i eleyebilirsin. Ama haziran grafikte yoktur; yargı yalnızca gösterilen dört ayı karşılaştırır.
Not: Ekim değerinin nisandan yüksek çıkması, yaz boyunca üretilen D vitamininin vücutta bir süre kalmasındandır. Yargıların hiçbiri bu farka dayanmaz.
Sık yapılan hata: Bir yargıdaki karşılaştırmanın hangi aylar arasında yapıldığına bakmadan karar vermek. "Grafikteki aylar içinde" ifadesi, karşılaştırmayı gösterilen dört ayla sınırlar.
Cevap B.`
},
{
  id: "fen-mv-316",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırma teknesi, 21 Aralık günü Ekvator'dan başlayıp güneye doğru ilerlemiş ve uğradığı üç limanda o günkü gündüz süresini kaydetmiştir. Kayıtlar tabloda verilmiştir.
I. O gün güneye gidildikçe gündüz süresi uzamaktadır.
II. O gün Güneş ışınları Güney Yarım Küre'ye, Kuzey Yarım Küre'ye olduğundan daha dik düşmektedir.
III. Aynı ölçümler 21 Haziran'da yapılsaydı güneye gidildikçe gündüz süresi kısalırdı.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Liman</th><th>Konumu</th><th>21 Aralık'taki gündüz süresi</th></tr><tr><td>P</td><td>Ekvator üzerinde</td><td>12 saat 07 dakika</td></tr><tr><td>R</td><td>P'nin güneyinde</td><td>13 saat 35 dakika</td></tr><tr><td>S</td><td>R'nin güneyinde</td><td>15 saat 10 dakika</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü atlama: gündüzün uzadığı yarım küre, o tarihte ışınları daha dik alan yarım küredir.",
    "III. yargıyı yanlış sayma: 21 Haziran'da durum tersine döner; güneye gidildikçe gündüz kısalır.",
    "I. yargıyı yanlış sayma: tabloda süreler P'den S'ye doğru 12 saat 07 dakikadan 15 saat 10 dakikaya çıkmaktadır.",
    null
  ],
  aciklama: `Bir tarihte gündüz süresinin uzadığı yön, o tarihte Güneş'e dönük olan yarım kürenin yönüdür.
Adım 1: I. yargıyı kontrol et. Tabloda süreler sırasıyla 12 saat 07 dakika, 13 saat 35 dakika ve 15 saat 10 dakikadır. Tekne güneye ilerledikçe gündüz uzamıştır. Doğrudur.
Adım 2: II. yargıyı kontrol et. 21 Aralık'ta eksenin güney ucu Güneş'e dönüktür. Bu yüzden Güney Yarım Küre hem ışınları daha dik alır hem de aydınlık kısımda daha uzun kalır. Tablodaki uzayan gündüz süreleri bunu doğrular. Doğrudur.
Adım 3: III. yargıyı kontrol et. 21 Haziran'da eksenin kuzey ucu Güneş'e dönüktür. O tarihte kuzeye gidildikçe gündüz uzar, güneye gidildikçe kısalır. Doğrudur.
Adım 4: Üç yargı da doğrudur.
Sağlama: Ekvator'da gündüz süresi yıl boyunca 12 saate çok yakın kalır; tablodaki 12 saat 07 dakika bunu göstermektedir. Ekvator'dan uzaklaştıkça fark büyür.
Cevap D.`
},
{
  id: "fen-mv-317",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: "Kuzey Yarım Küre'deki bir tarihî yapının güney duvarında dar bir pencere bulunmaktadır. Pencereden giren güneş ışığı, yalnızca 21 Haziran günü öğle vaktinde yerdeki işaretli taşa düşmekte, yılın diğer günlerinde taşa ulaşmamaktadır. Işığın iki tarihteki yolu şekilde gösterilmiştir.\n**Buna göre bu durum aşağıdakilerden hangisiyle açıklanır?**",
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Tarihî yapının penceresinden giren ışığın 21 Haziran ve 21 Aralık'taki yolu"><rect x="76" y="40" width="26" height="170" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><rect x="76" y="92" width="26" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/><line x1="102" y1="210" x2="480" y2="210" stroke="currentColor" stroke-width="2.5"/><line x1="102" y1="103" x2="134" y2="210" stroke="var(--vurgu)" stroke-width="3"/><line x1="102" y1="103" x2="312" y2="210" stroke="var(--vurgu2)" stroke-width="2.5" stroke-dasharray="8 5"/><rect x="122" y="204" width="26" height="12" fill="var(--vurgu)" opacity="0.6" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor" font-size="15"><text x="150" y="80" fill="var(--vurgu)" font-weight="bold">21 Haziran: 72°</text><text x="250" y="150" fill="var(--vurgu2)" font-weight="bold">21 Aralık: 25°</text><text x="106" y="238">İşaretli taş</text><text x="290" y="238">Kışın ışık buraya düşer.</text><text x="24" y="32">Duvar</text></g></svg>`,
  secenekler: [
    "Işığın taşa ulaşması için Güneş'in öğle vakti yılın en yüksek konumunda olması gerekir.",
    "Işığın taşa ulaşması için Dünya'nın yörüngesinde Güneş'e en yakın konumda olması gerekir.",
    "Işığın taşa ulaşması için o gün gece ile gündüz sürelerinin eşitlenmesi gerekir.",
    "Işığın taşa ulaşması için dönme ekseninin eğikliğinin en büyük değerine ulaşması gerekir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Olayı Güneş'e uzaklıkla açıklama: Dünya, Güneş'e en yakın konuma ocak başında gelir; oysa ışık haziranda taşa düşmektedir.",
    "Gece ile gündüzün eşitlendiği tarihleri seçme: bunlar 21 Mart ve 23 Eylül'dür, yani yılda iki gündür; üstelik o günlerde Güneş en yüksek konumda değildir.",
    "Eksen eğikliğinin yıl içinde değiştiğini sanma: eğiklik hep aynıdır; değişen, yarım kürelerin Güneş'e göre durumudur."
  ],
  aciklama: `Pencereden giren ışığın yerde nereye düşeceğini, ışınların yere yaptığı açı belirler. Açı büyüdükçe ışık duvara daha yakın bir noktaya düşer.
Adım 1: Şekildeki iki yolu karşılaştır. 21 Haziran'da ışınlar 72° ile geliyor ve duvara yakın olan işaretli taşa düşüyor. 21 Aralık'ta 25° ile geliyor ve çok daha içeri, taşın ötesine düşüyor.
Adım 2: Demek ki taşa ancak ışınlar yeterince dik geldiğinde ulaşılabiliyor. En dik geliş, Güneş'in öğle vakti gökyüzünde en yüksek olduğu gün gerçekleşir.
Adım 3: Güneş'in öğle vaktindeki en yüksek konumu, Kuzey Yarım Küre'de yılda yalnızca bir kez, 21 Haziran'da yaşanır. Bu yüzden ışık taşa yılda bir gün düşer.
Adım 4: Diğer açıklamaları ele. Güneş'e en yakın konum ocak başındadır, haziran değil. Gece ile gündüzün eşitlendiği iki tarihte Güneş en yüksekte değildir. Eksen eğikliği ise yıl boyunca hiç değişmez.
Sağlama: Aynı yapı Güney Yarım Küre'de olsaydı ışık taşa 21 Aralık'ta düşerdi.
Cevap A.`
},
{
  id: "fen-mv-318",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim şenliğinde öğrenciler, ağzı kapalı, yassı ve özdeş üç kaba eşit miktarda su doldurup kapları aynı ışık kaynağından eşit uzaklığa, farklı açılarla yerleştirmiştir. Suların başlangıç sıcaklığı 20 °C'dir ve 15 dakika sonra ölçülen değerler şekilde verilmiştir.
I. Işınların kaba düşme açısı büyüdükçe sıcaklık artışı da büyümüştür.
II. Bu düzenek, yaz ile kış arasındaki sıcaklık farkının nedenini modellemektedir.
III. Deneyde kapların ışık kaynağına uzaklıkları değiştirilerek sonuçlar karşılaştırılmıştır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Işık kaynağına eşit uzaklıkta, farklı açılarla yerleştirilmiş ağzı kapalı üç su kabı, kaplara düşen eşit aralıklı ışınlar ve ölçülen sıcaklıklar"><g stroke="currentColor" stroke-width="2"><line x1="20" y1="180" x2="500" y2="180"/></g><rect x="68" y="140" width="66" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><rect x="228" y="128" width="66" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5" transform="rotate(35 261 128)"/><rect x="388" y="133" width="66" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5" transform="rotate(65 421 133)"/><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="75" y1="50" x2="75" y2="140"/><line x1="88" y1="50" x2="88" y2="140"/><line x1="101" y1="50" x2="101" y2="140"/><line x1="114" y1="50" x2="114" y2="140"/><line x1="127" y1="50" x2="127" y2="140"/><line x1="241" y1="50" x2="241" y2="114"/><line x1="254" y1="50" x2="254" y2="123.1"/><line x1="267" y1="50" x2="267" y2="132.2"/><line x1="280" y1="50" x2="280" y2="141.3"/><line x1="415" y1="50" x2="415" y2="120.1"/><line x1="428" y1="50" x2="428" y2="148"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="101" y="38" font-weight="bold">I. kap</text><text x="261" y="38" font-weight="bold">II. kap</text><text x="421" y="38" font-weight="bold">III. kap</text><text x="101" y="204">Düşme açısı: 90°</text><text x="261" y="204">Düşme açısı: 55°</text><text x="421" y="204">Düşme açısı: 25°</text><text x="101" y="226">15 dk sonra: 34 °C</text><text x="261" y="226">15 dk sonra: 29 °C</text><text x="421" y="226">15 dk sonra: 25 °C</text><text x="260" y="252">Kaplar ışık kaynağına eşit uzaklıktadır. Başlangıç: 20 °C</text></g></svg>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 2,
  hatalar: [
    "I. yargıyı atlama: 90°, 55° ve 25°'ye karşılık gelen artışlar 14 °C, 9 °C ve 5 °C'dir; açı büyüdükçe artış da büyümüştür.",
    "III. yargıyı doğru sayma: şekilde kapların ışık kaynağına eşit uzaklıkta olduğu yazılıdır; uzaklık değiştirilmemiştir.",
    null,
    "II. yargıyı atlayıp III'ü doğru sayma: deneyde değiştirilen tek şey açıdır, uzaklık değildir; düzenek de yaz ile kış arasındaki farkı modellemektedir."
  ],
  aciklama: `Bir deneyde yalnızca bir değişken değiştirilir; böylece ortaya çıkan farkın nedeni kesin olarak bilinir.
Adım 1: Sıcaklık artışlarını hesapla. I. kap: 34 − 20 = 14 °C. II. kap: 29 − 20 = 9 °C. III. kap: 25 − 20 = 5 °C.
Adım 2: I. yargıyı kontrol et. Düşme açıları 90°, 55° ve 25°; artışlar sırasıyla 14 °C, 9 °C ve 5 °C'dir. Açı büyüdükçe artış da büyümüştür. Doğrudur.
Adım 3: II. yargıyı kontrol et. Şekildeki eşit aralıklı ışınları say: düz duran I. kaba 5, II. kaba 4, en eğik III. kaba yalnızca 2 ışın düşüyor. Kapların üst yüzeyleri eşit olduğuna göre eğik kabın birim yüzeyine daha az enerji düşer. Yaz ile kış arasındaki fark da ışınların yere düşme açısından doğar. Düzenek tam olarak bunu modellemektedir. Doğrudur.
Adım 4: III. yargıyı kontrol et. Şekilde kapların ışık kaynağına eşit uzaklıkta olduğu belirtilmiştir. Değiştirilen tek değişken açıdır. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir. En güçlü çeldirici "I ve III" şıkkıdır: eğik kapların bir ucu ışık kaynağına daha yakın, bir ucu daha uzak göründüğü için uzaklığın değiştirildiği sanılabilir. Oysa soruda ve şekilde kapların kaynağa eşit uzaklıkta olduğu açıkça yazılıdır.
Sık yapılan hata: Sıcaklık farkını uzaklığa bağlamak. Uzaklık sabit tutulduğu için farkın tek olası nedeni açıdır.
Cevap C.`
},
{
  id: "fen-mv-319",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gök bilim uygulaması, seçilen şehirlerde Güneş'in yerel saatle öğle vaktindeki durumunu göstermektedir. Uygulamanın 21 Aralık gününe ait ekran görüntüsü aşağıda verilmiştir.
I. O gün L şehrinin birim yüzeyine düşen ışık enerjisi, K şehrindekinden fazladır.
II. K şehri Kuzey, L şehri Güney Yarım Küre'dedir.
III. İki şehir arasındaki farkın nedeni, L şehrinin Güneş'e daha yakın olmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="21 Aralık günü K ve L şehirlerinde öğle vakti Güneş'in yüksekliği ve gündüz süreleri"><rect x="20" y="30" width="230" height="190" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><rect x="270" y="30" width="230" height="190" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="160" x2="230" y2="160" stroke="currentColor" stroke-width="2.5"/><line x1="290" y1="160" x2="480" y2="160" stroke="currentColor" stroke-width="2.5"/><line x1="60" y1="160" x2="148" y2="124" stroke="var(--vurgu)" stroke-width="2.5"/><circle cx="160" cy="119" r="14" fill="var(--vurgu)"/><line x1="310" y1="160" x2="330" y2="68" stroke="var(--vurgu2)" stroke-width="2.5"/><circle cx="333" cy="56" r="14" fill="var(--vurgu2)"/><g fill="currentColor" font-size="15"><text x="34" y="56" font-weight="bold">K şehri</text><text x="284" y="56" font-weight="bold">L şehri</text><text x="72" y="152">22°</text><text x="322" y="152">78°</text><text x="34" y="184">Gündüz: 8 saat 45 dk</text><text x="284" y="184">Gündüz: 14 saat 30 dk</text><text x="34" y="208">Tarih: 21 Aralık</text><text x="284" y="208">Tarih: 21 Aralık</text></g><text x="20" y="244" fill="currentColor" font-size="14">Değerler, her iki şehirde de yerel saatle öğle vaktine aittir.</text></svg>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I. yargıyı atlama: Güneş'i 78° yükseklikte gören şehirde ışınlar çok daha dik gelir; birim yüzeye düşen enerji de fazladır.",
    null,
    "III. yargıyı doğru sayma: iki şehir de Dünya üzerindedir; Güneş'e uzaklıkları arasında mevsim yaratacak bir fark yoktur.",
    "I. yargıyı atlayıp III'ü doğru sayma: ekrandaki asıl veri, ışınların iki şehre farklı açılarla gelmesidir."
  ],
  aciklama: `Güneş'in öğle vaktindeki yüksekliği ile ışınların yere düşme açısı aynı şeyi anlatır; gündüz süresi de bu açıyla birlikte değişir.
Adım 1: Ekrandaki verileri oku. K şehrinde Güneş 22° yükseklikte ve gündüz 8 saat 45 dakika, L şehrinde 78° yükseklikte ve gündüz 14 saat 30 dakika sürüyor.
Adım 2: I. yargıyı kontrol et. L şehrinde ışınlar 78° ile, yani neredeyse dik geliyor. Dik gelen ışık dar bir alana toplandığı için L şehrinin birim yüzeyine düşen enerji daha fazladır. Doğrudur.
Adım 3: II. yargıyı kontrol et. Tarih 21 Aralık'tır. Bu tarihte gündüzü 12 saatten kısa olan yerler Kuzey, uzun olan yerler Güney Yarım Küre'dedir. K'de gündüz 8 saat 45 dakika, L'de 14 saat 30 dakikadır. Öyleyse K kuzeyde, L güneydedir. Doğrudur.
Adım 4: III. yargıyı kontrol et. İki şehrin Güneş'e uzaklığı her an birbirine eşittir. Farkı yaratan, eksen eğikliği nedeniyle ışınların iki şehre farklı açılarla ulaşmasıdır. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sağlama: Aynı ekran 21 Haziran'da açılsaydı değerler yer değiştirir; K şehrinde Güneş yüksek, L şehrinde alçak görünürdü.
Cevap B.`
},
{
  id: "fen-mv-320",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir okulda bilim şenliği için hazırlanan afişte, Dünya'nın Güneş çevresindeki yörüngesinde aralarında üçer ay bulunan dört konumu çizilmiştir. Öğrenciler her konumda Dünya'yı bir daireyle, dönme eksenini ise daireyi kesen kalın bir çizgiyle göstermiştir. Afişi inceleyen fen öğretmeni, konumlardan birinde eksenin yanlış çizildiğini, bu hâliyle afişin mevsimlerin oluşumunu yanlış anlattığını söylemiştir.\n**Buna göre afişte ekseni __yanlış__ çizilen konum hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 330" role="img" aria-label="Yörüngedeki dört konumda Dünya'nın dönme ekseninin yönü"><ellipse cx="260" cy="150" rx="210" ry="110" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/><circle cx="260" cy="150" r="26" fill="var(--vurgu)"/><text x="260" y="192" fill="currentColor" font-size="15" text-anchor="middle" font-weight="bold">Güneş</text><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><circle cx="50" cy="150" r="26"/><circle cx="260" cy="40" r="26"/><circle cx="470" cy="150" r="26"/><circle cx="260" cy="260" r="26"/></g><g stroke="var(--vurgu2)" stroke-width="3"><line x1="32" y1="186" x2="68" y2="114"/><line x1="242" y1="76" x2="278" y2="4"/><line x1="452" y1="186" x2="488" y2="114"/><line x1="278" y1="296" x2="242" y2="224"/></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="50" y="210">K</text><text x="306" y="46">L</text><text x="470" y="210">M</text><text x="306" y="266">N</text></g><text x="20" y="322" fill="currentColor" font-size="14">Kalın çizgiler dönme eksenini göstermektedir.</text></svg>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 3,
  hatalar: [
    "K konumunu yanlış sayma: bu konumdaki eksen, L ve M'dekilerle aynı yöne bakmaktadır; çizim doğrudur.",
    "L konumunu yanlış sayma: bu konumdaki eksen de diğerleriyle aynı doğrultudadır; çizim doğrudur.",
    "M konumunu yanlış sayma: eksenin üst ucunun Güneş'ten uzağa bakması hata değildir; eksen K ve L'dekiyle aynı yöndedir ve bu, Kuzey Yarım Küre'de kışın yaşandığı konumdur.",
    null
  ],
  aciklama: `Dünya, Güneş çevresinde dolanırken dönme ekseni uzayda hep aynı yöne bakar ve eğikliği değişmez. Buna eksenin paralelliği denir.
Adım 1: Afişteki eksenleri karşılaştır. K, L ve M konumlarında eksenin üst ucu sağa doğru eğiktir; üç çizgi birbirine paraleldir.
Adım 2: N konumundaki eksene bak. Bu çizgide üst uç sola doğru eğiktir, yani diğer üçünün tersi yöne bakmaktadır.
Adım 3: Eksen yörünge boyunca yön değiştiremeyeceğine göre yanlış çizilen konum N'dir. En güçlü çeldirici M'dir: orada eksenin üst ucu Güneş'ten uzağa baktığı için yanlış çizildiği sanılabilir. Oysa M'deki eksen öteki ikisiyle paraleldir; bu konum, Kuzey Yarım Küre'de kışın yaşandığı konumdur.
Adım 4: Bu çizim neden önemlidir? Eksen hep aynı yöne baktığı için Dünya yörüngenin bir ucundayken kuzey yarım küre Güneş'e dönük, karşı ucundayken uzaktır. Mevsimleri doğuran da budur. Eksen her konumda Güneş'e dönseydi yarım küreler hep aynı açıyla ışık alır ve mevsimler oluşmazdı.
Sık yapılan hata: Eksenin Güneş'i takip ettiğini düşünmek. Eksen sabittir; değişen, Dünya'nın yörüngedeki yeridir.
Cevap D.`
},
{
  id: "fen-mv-321",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fen dersinde öğretmen tahtaya şunu yazmıştır:
"Dünya'nın dönme ekseninin dolanma düzlemiyle yaptığı açı 90° olsaydı, yani eksen düzleme tam dik dursaydı neler değişirdi?"
Öğrenciler aşağıdaki yargıları yazmıştır.
I. Bir yerde gündüz süresi yıl boyunca değişmezdi.
II. Gece ile gündüz birbirini izlemezdi.
III. Bir yerde öğle vakti ışınların düşme açısı yıl boyunca aynı kalırdı.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III. yargıyı atlama: eksen dik olsaydı Dünya yörüngede nereye giderse gitsin ışınların bir yere düşme açısı hiç değişmezdi.",
    "II. yargıyı doğru sayma: gece ile gündüz, eksenin eğikliğinden değil Dünya'nın kendi ekseni çevresinde dönmesinden doğar.",
    null,
    "I. yargıyı atlayıp II'yi doğru sayma: dönme hareketi sürdüğü için gece ile gündüz yine birbirini izlerdi."
  ],
  aciklama: `Bu soruda gerçek bir durum değil, bir varsayım inceleniyor. Böyle sorularda her yargıyı tek tek "bu koşulda ne olurdu?" diye sınamak gerekir.
Adım 1: Varsayımı netleştir. Eksen dolanma düzlemine dik olsaydı, aydınlık ile karanlığı ayıran çizgi yıl boyunca her iki kutuptan da geçerdi.
Adım 2: I. yargıyı kontrol et. Bu durumda her yerde gündüz ile gece her gün eşit, yani 12'şer saat olurdu ve bu süre yıl boyunca değişmezdi. Doğrudur.
Adım 3: II. yargıyı kontrol et. Gece ile gündüzün birbirini izlemesi, Dünya'nın kendi ekseni çevresinde dönmesinin sonucudur. Eksen dik olsa bile bu dönme sürerdi; gece ile gündüz yine oluşurdu. Yanlıştır.
Adım 4: III. yargıyı kontrol et. Eksen dik olsaydı Dünya yörüngede ilerlerken bir yerin Güneş'e göre eğimi hiç değişmezdi. Öğle vakti ışınlar o yere hep aynı açıyla düşerdi. Doğrudur.
Adım 5: Doğru yargılar I ve III'tür.
Sağlama: I ve III birlikte, "mevsimler oluşmazdı" sonucunu verir. Çünkü mevsimleri doğuran şey, düşme açısının ve gündüz süresinin yıl içinde değişmesidir.
Sık yapılan hata: Eksen eğikliğini gece ile gündüzün nedeni sanmak. Eğiklik mevsimleri, dönme hareketi gece ile gündüzü açıklar.
Cevap C.`
},
{
  id: "fen-mv-322",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun çatısına yerleştirilen ölçer, dört tarihte öğle vakti bir metrekarelik yüzeye düşen ışık enerjisini ölçmüştür. Ölçüm günlerinin bulutluluk durumu da kaydedilmiş ve sonuçlar tabloya yazılmıştır. Okul Kuzey Yarım Küre'dedir.
I. 21 Haziran'da ölçülen değerin düşük çıkması, o gün ışınların yılın en eğik açısıyla geldiğini kesinlikle gösterir.
II. 21 Aralık'ta ışınlar, 21 Mart'takinden daha eğik açıyla düşmüştür.
III. Bulutsuz iki tarih olan 21 Mart ile 23 Eylül'ün ölçümlerinin birbirine yakın çıkması beklenen bir sonuçtur.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Tarih</th><th>Gökyüzü durumu</th><th>Bir metrekareye düşen enerji</th></tr><tr><td>21 Mart</td><td>Bulutsuz</td><td>720 birim</td></tr><tr><td>21 Haziran</td><td>Çok bulutlu</td><td>480 birim</td></tr><tr><td>23 Eylül</td><td>Bulutsuz</td><td>700 birim</td></tr><tr><td>21 Aralık</td><td>Bulutsuz</td><td>320 birim</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "I. yargıyı doğru sayma: o gün gökyüzü çok bulutludur; düşük değerin nedeni açı değil, bulutların ışığı engellemesi olabilir.",
    "III. yargıyı atlama: 21 Mart ile 23 Eylül, ışınların Ekvator'a dik düştüğü ve koşulların birbirine çok benzediği iki tarihtir.",
    "I. yargıyı doğru sayıp II'yi atlama: bulutlu bir günün ölçümünden açı hakkında kesin sonuç çıkarılamaz.",
    null
  ],
  aciklama: `Bir ölçümden sonuç çıkarırken, sonucu etkileyebilecek başka bir etkenin bulunup bulunmadığına bakmak gerekir. Burada bulutluluk böyle bir etkendir.
Adım 1: I. yargıyı kontrol et. 21 Haziran'da değer 480 birimdir ve o gün gökyüzü çok bulutludur. Bulutlar ışığın bir bölümünü tutar. Düşük değerin nedeni bulutluluk da olabilir. Üstelik 21 Haziran, Kuzey Yarım Küre'de ışınların en dik geldiği tarihtir. Bu yüzden yargı hem "kesinlikle" diyemez hem de gerçeğe aykırıdır. Yanlıştır.
Adım 2: II. yargıyı kontrol et. 21 Mart ve 21 Aralık'ta gökyüzü bulutsuzdur; yani ikisi karşılaştırılabilir. Değerler 720 ve 320 birimdir. Aralıkta daha az enerji düştüğüne göre ışınlar o gün daha eğik gelmiştir. Doğrudur.
Adım 3: III. yargıyı kontrol et. 21 Mart ile 23 Eylül, gece ile gündüzün eşitlendiği ve ışınların Ekvator'a dik düştüğü tarihlerdir. İkisinde de gökyüzü bulutsuz olduğuna göre ölçümlerin birbirine yakın çıkması beklenir; 720 ve 700 birim bunu doğrular. Doğrudur.
Adım 4: Doğru yargılar II ve III'tür.
Sık yapılan hata: Tablodaki en düşük ya da en yüksek değeri görüp koşullara bakmadan yorum yapmak. Karşılaştırma ancak diğer koşullar aynıyken anlamlıdır.
Cevap D.`
},
{
  id: "fen-mv-323",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gök bilim kulübü, biri Ekvator üzerinde, diğeri Kuzey Yarım Küre'de orta kuşakta bulunan iki şehirde ölçüm yapmıştır. Her iki şehirde de Güneş'in öğle vaktindeki yüksekliği iki tarihte ölçülmüş, ayrıca yılın iki dönemine ait ortalama sıcaklıklar kaydedilmiştir.
I. P şehrinde ışınların öğle vaktindeki düşme açısı yıl içinde daha az değişmektedir.
II. R şehrinde mevsimler arasındaki sıcaklık farkının büyük olması, düşme açısındaki değişimin büyük olmasıyla açıklanır.
III. P şehrinde mevsim farkının küçük olmasının nedeni, bu şehrin yıl boyunca Güneş'e aynı uzaklıkta kalmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Şehir</th><th>21 Haziran öğle yüksekliği</th><th>21 Aralık öğle yüksekliği</th><th>Haziran–Ağustos ortalaması</th><th>Aralık–Şubat ortalaması</th></tr><tr><td>P</td><td>66°</td><td>66°</td><td>27 °C</td><td>25 °C</td></tr><tr><td>R</td><td>76°</td><td>29°</td><td>28 °C</td><td>4 °C</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I. yargıyı yanlış sayma: P şehrinde iki tarihte de Güneş 66° yükseklikte ölçülmüştür; açı neredeyse hiç değişmemiştir.",
    null,
    "III. yargıyı doğru sayma: Güneş'e uzaklık iki şehir için de her an aynıdır; bu, aralarındaki farkı açıklayamaz.",
    "I. yargıyı atlayıp III'ü doğru sayma: tablodaki asıl bilgi, iki şehirde düşme açısının farklı ölçülerde değişmesidir."
  ],
  aciklama: `Bir yerde mevsimler arasındaki farkın büyüklüğü, o yerde ışınların düşme açısının yıl içinde ne kadar değiştiğine bağlıdır.
Adım 1: P şehrinin verilerini oku. Güneş 21 Haziran'da da 21 Aralık'ta da 66° yüksekliktedir. İki döneme ait ortalamalar arasındaki fark yalnızca 2 °C'dir.
Adım 2: R şehrinin verilerini oku. Güneş 21 Haziran'da 76°, 21 Aralık'ta 29° yüksekliktedir; aradaki fark 47°'dir. Ortalamalar arasındaki fark ise 24 °C'dir.
Adım 3: I. yargıyı kontrol et. P şehrinde iki ölçüm de 66° çıkmıştır; açı yıl içinde neredeyse hiç değişmemektedir. R şehrinde ise büyük bir değişim vardır. Doğrudur.
Adım 4: II. yargıyı kontrol et. R şehrinde açı 47° değişince birim yüzeye düşen enerji de yıl içinde çok değişir; bu yüzden yaz ile kış arasındaki sıcaklık farkı büyüktür. Doğrudur.
Adım 5: III. yargıyı kontrol et. İki şehir de aynı gezegendedir; Güneş'e uzaklıkları her an birbirine eşittir ve ikisi için de yıl içinde aynı biçimde değişir. Bu yüzden uzaklık, aradaki farkı açıklayamaz. Yanlıştır.
Adım 6: Doğru yargılar I ve II'dir.
Sağlama: Ekvator çevresinde yıl boyunca benzer bir hava görülmesinin, orta kuşakta ise dört mevsimin belirgin yaşanmasının nedeni budur.
Cevap B.`
},
{
  id: "fen-mv-324",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir gök bilim yarışmasında yarışmacılara, 21 Aralık günü üç şehirde yapılan ölçümler verilmiş ve şehirler hakkında yorum yapmaları istenmiştir. Ölçümler tabloda verilmiştir.\n**Buna göre bu şehirlerle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Şehir</th><th>Gündüz süresi</th><th>Güneş'in öğle vaktindeki yüksekliği</th></tr><tr><td>K</td><td>9 saat 20 dakika</td><td>27°</td></tr><tr><td>L</td><td>12 saat 05 dakika</td><td>66°</td></tr><tr><td>M</td><td>13 saat 55 dakika</td><td>83°</td></tr></table>`,
  secenekler: [
    "K Kuzey, M Güney Yarım Küre'dedir; o gün birim yüzeye en çok enerji M şehrine düşmüştür.",
    "K Güney, M Kuzey Yarım Küre'dedir; o gün birim yüzeye en çok enerji K şehrine düşmüştür.",
    "Üç şehir de Kuzey Yarım Küre'dedir; aralarındaki fark Güneş'e uzaklıklarından doğmaktadır.",
    "L şehri Ekvator'a çok yakındır; bu yüzden o gün üç şehirde de aynı mevsim yaşanmaktadır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yarım küreleri ters eşleştirme: 21 Aralık'ta gündüzü kısa olan yer Kuzey, uzun olan yer Güney Yarım Küre'dedir.",
    "Üç şehri aynı yarım küreye koyma: gündüz sürelerinin biri 12 saatin altında, biri üstündedir; ayrıca uzaklık mevsim farkı yaratmaz.",
    "L için doğru bir saptamayı yanlış bir sonuca bağlama: L Ekvator'a yakın olsa da K ile M'de karşıt mevsimler yaşanmaktadır."
  ],
  aciklama: `21 Aralık'ta eksenin güney ucu Güneş'e dönüktür. Bu tarihte gündüzü 12 saatten uzun olan yerler Güney, kısa olan yerler Kuzey Yarım Küre'dedir.
Adım 1: K şehrine bak. Gündüz 9 saat 20 dakika, yani 12 saatten kısadır. Öyleyse K Kuzey Yarım Küre'dedir ve orada kış yaşanmaktadır. Güneş'in 27° gibi düşük bir yükseklikte olması da bunu destekler.
Adım 2: M şehrine bak. Gündüz 13 saat 55 dakika, yani 12 saatten uzundur. Öyleyse M Güney Yarım Küre'dedir ve orada yaz yaşanmaktadır.
Adım 3: L şehrine bak. Gündüz 12 saat 05 dakikadır; bu şehir Ekvator'a çok yakındır. Ekvator çevresinde gündüz süresi yıl boyunca 12 saate yakın kalır.
Adım 4: Birim yüzeye düşen enerjiyi karşılaştır. Güneş K'de 27°, L'de 66°, M'de 83° yüksekliktedir. Işınlar en dik M şehrine düşmektedir; üstelik M'de gündüz de en uzundur. Öyleyse o gün birim yüzeye en çok enerji M şehrine düşmüştür.
Adım 5: Bu iki sonucu birlikte veren seçenek, K'nin kuzeyde, M'nin güneyde olduğunu ve en çok enerjinin M'ye düştüğünü söyleyen seçenektir.
Sık yapılan hata: Ekvator'a yakın bir şehri gördüğünde "öyleyse hepsi aynı mevsimdedir" diye düşünmek. K ile M'de aynı anda karşıt mevsimler yaşanmaktadır.
Cevap A.`
},
{
  id: "fen-mv-325",
  kazanim: "F.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sınıfta mevsimlerin nedeni tartışılmaktadır. İki öğrencinin görüşü şöyledir:
Birinci öğrenci: "Mevsimler, Dünya'nın Güneş'e olan uzaklığının yıl içinde değişmesiyle oluşur. Yaklaşınca yaz, uzaklaşınca kış olur."
İkinci öğrenci: "Mevsimler, Güneş ışınlarının yere düşme açısının değişmesiyle oluşur."
**Bu iki görüşten hangisinin doğru olduğunu ayırt etmek için aşağıdaki gözlemlerden hangisi kullanılmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Bir yerde öğle vakti gölge boyunun yıl içinde değişip değişmediğini ölçmek",
    "Dünya'nın Güneş çevresindeki bir dolanımını kaç günde tamamladığını ölçmek",
    "Bir yerde gündüz süresinin yıl boyunca nasıl değiştiğini ölçmek",
    "Aynı tarihte Kuzey ve Güney Yarım Küre'de hangi mevsimin yaşandığını karşılaştırmak"
  ],
  dogru: 3,
  hatalar: [
    "İki görüşü de destekleyen bir gözlemi seçme: gölge boyunun değişmesi açının değiştiğini gösterir, ama birinci öğrenci bunu \"uzaklık değiştiği için açı da değişti\" diye yorumlayabilir; gözlem iki görüşü ayırmaz.",
    "Konuyla ilgisiz bir ölçümü seçme: dolanma süresi iki görüşte de aynıdır, yani hangisinin doğru olduğunu göstermez.",
    "Yine iki görüşü de destekleyebilecek bir gözlemi seçme: gündüz süresinin değişmesi tek başına hangi nedenin geçerli olduğunu söylemez.",
    null
  ],
  aciklama: `İki açıklamayı ayırt eden gözlem, birinin doğru olduğu durumda başka, diğerinin doğru olduğu durumda başka bir sonuç vermesi gereken gözlemdir.
Adım 1: Birinci görüşün öngörüsünü yaz. Mevsimleri uzaklık belirliyorsa, Dünya Güneş'e yaklaştığında Dünya'nın her yerinde aynı anda yaz, uzaklaştığında her yerinde aynı anda kış yaşanmalıdır. Çünkü uzaklık iki yarım küre için de aynıdır.
Adım 2: İkinci görüşün öngörüsünü yaz. Mevsimleri düşme açısı belirliyorsa, eksen eğikliği nedeniyle bir yarım küre ışınları dik alırken öteki eğik alır; yani iki yarım kürede aynı anda karşıt mevsimler yaşanmalıdır.
Adım 3: İki öngörü yalnızca tek bir gözlemde ayrışır: aynı tarihte iki yarım kürede hangi mevsimin yaşandığı. Gerçekte biri yaz yaşarken öteki kış yaşar; bu sonuç birinci görüşü çürütür, ikinci görüşü destekler.
Adım 4: Diğer seçenekleri ele. Gölge boyunun ve gündüz süresinin yıl içinde değişmesi iki görüşün de kabul edebileceği gözlemlerdir; bu yüzden ayırt edici değildir. Dolanma süresi ise tartışmayla ilgisizdir.
Sık yapılan hata: "Konuyla ilgili her gözlem işe yarar." sanmak. Bir gözlemin değeri, iki açıklamayı birbirinden ayırabilmesinden gelir.
Cevap D.`
},
/* ===================== HAVUZ — KADEME 0 (013-015) ===================== */
{
  id: "fen-mv-013",
  kazanim: "F.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Bir şehirde iki ayrı tarihte Güneş'in doğuş ve batış saatleri ölçülmüş ve tabloya yazılmıştır.\n**Buna göre bu şehirle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Tarih</th><th>Güneş'in doğuşu</th><th>Güneş'in batışı</th></tr><tr><td>21 Haziran</td><td>05.28</td><td>20.42</td></tr><tr><td>21 Aralık</td><td>07.27</td><td>16.43</td></tr></table>`,
  secenekler: [
    "Kuzey Yarım Küre'dedir; haziranda birim yüzeye düşen enerji aralıktakinden fazladır.",
    "Kuzey Yarım Küre'dedir; aralıkta birim yüzeye düşen enerji hazirandakinden fazladır.",
    "Güney Yarım Küre'dedir; haziranda birim yüzeye düşen enerji aralıktakinden fazladır.",
    "Güney Yarım Küre'dedir; aralıkta birim yüzeye düşen enerji hazirandakinden fazladır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yarım küreyi doğru bulup enerji karşılaştırmasını ters kurma: gündüzün uzun olduğu haziranda ışınlar daha dik düşer.",
    "Gündüz sürelerini ters okuma: haziranda gündüz 15 saati aşmıştır; bu, şehrin Kuzey Yarım Küre'de olduğunu gösterir.",
    "İki yargıyı da ters kurma: 21 Haziran'da gündüzü uzun olan yerler Kuzey Yarım Küre'dedir ve orada ışınlar daha dik düşer."
  ],
  aciklama: `Gündüz süresini bulmak için batış saatinden doğuş saatini çıkarırız.
Adım 1: 21 Haziran'ın gündüz süresini hesapla: 20.42 − 05.28 = 15 saat 14 dakika.
Adım 2: 21 Aralık'ın gündüz süresini hesapla: 16.43 − 07.27 = 9 saat 16 dakika.
Adım 3: 21 Haziran'da gündüz 12 saatten belirgin biçimde uzundur. Bu tarihte gündüzü uzun olan yerler Kuzey Yarım Küre'dedir; çünkü eksenin kuzey ucu o gün Güneş'e dönüktür.
Adım 4: Gündüzün uzun olduğu tarihte ışınlar aynı zamanda daha dik düşer. Dik gelen ışık dar bir alana toplandığı için haziranda birim yüzeye düşen enerji daha fazladır.
Sağlama: İki gündüz süresinin toplamı yaklaşık 24 saat 30 dakikadır. Bu simetri, iki tarihin yılın iki karşıt ucu olduğunu gösterir.
Cevap A.`
},
{
  id: "fen-mv-014",
  kazanim: "F.8.1.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Kuzey Yarım Küre'deki bir ülkenin enerji kurumu, aydınlatmanın toplam elektrik tüketimi içindeki payını aylara göre yayımlamıştır. Değerler tabloda verilmiştir.
I. Aralıkta bu ülkede gündüz süresi, tablodaki aylar içinde en kısadır.
II. Haziranda Güneş ışınları ülkeye en dik açıyla düşmektedir.
III. Aydınlatma payının aralıkta artmasının nedeni, Güneş'in kış aylarında daha az ışık yaymasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ay</th><th>Aydınlatmanın elektrik tüketimindeki payı</th></tr><tr><td>Mart</td><td>%17</td></tr><tr><td>Haziran</td><td>%11</td></tr><tr><td>Eylül</td><td>%15</td></tr><tr><td>Aralık</td><td>%24</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I. yargıyı yanlış sayma: aydınlatmaya en çok enerji harcanan ay, karanlığın en uzun sürdüğü aydır.",
    null,
    "III. yargıyı doğru sayıp II'yi atlama: Güneş'in yaydığı enerji mevsimlere göre değişmez.",
    "I. yargıyı atlayıp III'ü doğru sayma: tablodaki payların değişmesi, gündüz süresinin yıl içinde değişmesinden kaynaklanır."
  ],
  aciklama: `Aydınlatmaya harcanan enerjinin payı, karanlığın ne kadar sürdüğüne bağlıdır. Gece uzadıkça lambalar daha uzun süre yanar.
Adım 1: Tabloyu oku: mart %17, haziran %11, eylül %15, aralık %24.
Adım 2: I. yargıyı kontrol et. En büyük pay aralıktadır. Demek ki karanlık en uzun aralıkta sürmektedir; yani gündüz o ay en kısadır. Doğrudur.
Adım 3: II. yargıyı kontrol et. En küçük pay haziranındır; gündüz o ay en uzundur. Gündüzün en uzun olduğu ayda ışınlar da en dik açıyla düşer. Doğrudur.
Adım 4: III. yargıyı kontrol et. Güneş'in yaydığı ışık enerjisi mevsimlere göre değişmez. Aynı aralık ayında Güney Yarım Küre'de gündüz en uzun sürede yaşanır. Değişen, ışınların yere düşme açısı ve gündüzün süresidir. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sağlama: Mart ile eylül payları birbirine yakındır (%17 ve %15). Bu iki ay, gece ile gündüzün eşitlendiği tarihlerin bulunduğu aylardır.
Cevap B.`
},
{
  id: "fen-mv-015",
  kazanim: "F.8.1.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Farklı şehirlerde yaşayan iki öğrenci, 21 Mart günü bulundukları yerde gündüzün kaç saat sürdüğünü ölçüp birbirlerine bildirmiştir. Ölçümler tabloda verilmiştir. Öğrencilerin şehirleri hakkında başka bir bilgi verilmemiştir.
I. İki şehir de Ekvator üzerinde bulunmaktadır.
II. Bu verilerle şehirlerin hangi yarım kürede olduğu kesin olarak söylenemez.
III. Bu tarihten bir ay sonra şehirlerdeki gündüz sürelerinin uzayacağı mı yoksa kısalacağı mı, bu verilerle kesin olarak bilinemez.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Şehir</th><th>21 Mart'taki gündüz süresi</th></tr><tr><td>K</td><td>12 saat 06 dakika</td></tr><tr><td>L</td><td>12 saat 08 dakika</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "I. yargıyı doğru sayma: 21 Mart'ta gündüz süresi Dünya'nın her yerinde yaklaşık 12 saattir; bu değer Ekvator'a özgü değildir.",
    "III. yargıyı atlama: sürelerin bundan sonra uzayacağı mı kısalacağı mı, şehirlerin hangi yarım kürede olduğuna bağlıdır ve bu bilinmemektedir.",
    "I. yargıyı doğru sayma: eşit gündüz süresi, iki şehrin Ekvator üzerinde olduğunu göstermez.",
    null
  ],
  aciklama: `21 Mart, Güneş ışınlarının Ekvator'a dik düştüğü ve aydınlığı karanlıktan ayıran çizginin iki kutuptan da geçtiği tarihtir. Bu yüzden o gün Dünya'nın her yerinde gündüz yaklaşık 12 saat sürer.
Adım 1: I. yargıyı kontrol et. Gündüzün 12 saat civarında olması 21 Mart'ta her yerde görülen bir durumdur. K ve L şehirleri kutuplara yakın da olabilir, Ekvator'a yakın da. Öyleyse "iki şehir de Ekvator üzerindedir" denemez. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Yarım küreyi ayırt etmemizi sağlayan şey, gündüz süresinin 12 saatten uzun ya da kısa olmasıdır. 21 Mart'ta bu fark ortadan kalkar. Bu yüzden verilerle yarım küre belirlenemez. Doğrudur.
Adım 3: III. yargıyı kontrol et. 21 Mart'tan sonra Kuzey Yarım Küre'de gündüzler uzar, Güney Yarım Küre'de kısalır. Şehirlerin hangi yarım kürede olduğu bilinmediğine göre bir ay sonra ne olacağı da bilinemez. Doğrudur.
Adım 4: Doğru yargılar II ve III'tür.
Sık yapılan hata: Eşit gündüz süresini "demek ki Ekvator'dalar" diye yorumlamak. Ekvator'da gündüz yıl boyunca 12 saate yakındır; ama 21 Mart'ta bu her yerde böyledir. Ayırt edici olan tek gün değil, yıl boyunca nasıl değiştiğidir.
Cevap D.`
}
);

