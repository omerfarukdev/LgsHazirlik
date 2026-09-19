// Fen Bilimleri — Mevsimlerin Oluşumu: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["mevsimlerin-olusumu"] = window.LGS_BANK["mevsimlerin-olusumu"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "fen-mv-101",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıda Dünya'nın dönme ekseni ile Güneş çevresindeki dolanma düzlemi şematik olarak gösterilmiştir.\n**Buna göre Dünya'nın dönme ekseni için aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 480 280" role="img" aria-label="Dünya'nın dönme ekseni, dolanma düzlemi ve düzleme dik doğrultu"><ellipse cx="240" cy="190" rx="180" ry="44" fill="none" stroke="currentColor" stroke-width="2"/><line x1="240" y1="58" x2="240" y2="262" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><line x1="285" y1="56" x2="195" y2="264" stroke="var(--vurgu)" stroke-width="3"/><circle cx="240" cy="160" r="32" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M240 96 A 44 44 0 0 1 259 100" fill="none" stroke="var(--vurgu2)" stroke-width="2.5"/><g fill="currentColor" font-size="15"><text x="300" y="50" fill="var(--vurgu)" font-weight="bold">Dönme ekseni</text><text x="10" y="50">Dolanma düzlemine</text><text x="10" y="70">dik doğrultu</text><text x="330" y="252">Dolanma düzlemi</text><text x="266" y="112" fill="var(--vurgu2)" font-weight="bold">23°27'</text></g></svg>`,
  secenekler: [
    "Dolanma düzlemine dik doğrultudan sapmış, eğik durumdadır.",
    "Dolanma düzlemine dik doğrultuyla tam olarak çakışmaktadır.",
    "Dolanma düzleminin içinde, ona paralel durumdadır.",
    "Eğikliği yıl boyunca sürekli değişen bir doğrultudadır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ekseni dolanma düzlemine dik sanma: eksen dik olsaydı ışınların yere düşme açısı yıl boyunca değişmez, mevsimler oluşmazdı.",
    "Dönme ekseni ile dolanma düzlemini aynı şey sanma: eksen düzlemin içinde değildir, düzlemi keser.",
    "Eksen eğikliğinin yıl içinde değiştiğini sanma: eğikliğin ölçüsü de yönü de sabittir; değişen, ışınların yarım kürelere düşme açısıdır."
  ],
  aciklama: `Dönme ekseni, Dünya'nın kendi çevresinde dönerken üzerinde döndüğü hayalî çizgidir. Dolanma düzlemi ise Dünya'nın Güneş çevresinde dolanırken çizdiği yolun üzerinde bulunduğu düzlemdir.
Adım 1: Şekildeki kesikli çizgiye bak. Bu çizgi, dolanma düzlemine dik olan doğrultudur.
Adım 2: Renkli çizgiye, yani dönme eksenine bak. Eksen bu dik doğrultunun üzerinde değildir; ondan yaklaşık 23°27' sapmıştır. Yani eksen eğiktir.
Adım 3: Eksen, dolanma düzleminin içinde de değildir; düzlemi eğik olarak keser.
Sağlama: Bu eğiklik sabittir. Dünya yörüngesinde ilerledikçe eksen hep aynı yöne bakar; bu yüzden yıl içinde bir yarım küre Güneş'e daha dönük, diğeri daha uzak durur ve mevsimler oluşur.
Sık yapılan hata: Eksenin eğikliğinin mevsimlere göre değiştiğini sanmak. Değişen, eğiklik değil; ışınların yarım kürelere düşme açısıdır.
Cevap A.`
},
{
  id: "fen-mv-102",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Elif, özdeş iki el fenerini aynı yükseklikten bir kâğıda tutmuştur. Fenerlerin kâğıtla yaptığı açılar ve oluşan aydınlık bölgelerin genişliği görselde verilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Kâğıda dik ve eğik tutulan iki el fenerinin oluşturduğu aydınlık bölgeler"><g stroke="currentColor" stroke-width="2.5"><line x1="20" y1="200" x2="240" y2="200"/><line x1="290" y1="200" x2="510" y2="200"/></g><path d="M112 58 L86 200 L164 200 L138 58 Z" fill="var(--vurgu)" opacity="0.3"/><rect x="108" y="32" width="34" height="26" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="86" y1="200" x2="164" y2="200" stroke="var(--vurgu)" stroke-width="6"/><path d="M366 46 L316 200 L490 200 L392 66 Z" fill="var(--vurgu2)" opacity="0.3"/><rect x="352" y="24" width="34" height="26" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="2" transform="rotate(32 369 37)"/><line x1="316" y1="200" x2="490" y2="200" stroke="var(--vurgu2)" stroke-width="6"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="125" y="24" font-weight="bold">I. fener</text><text x="369" y="18" font-weight="bold">II. fener</text><text x="125" y="228">Açı: 90°</text><text x="403" y="228">Açı: 35°</text><text x="125" y="250">Aydınlık: 6 cm</text><text x="403" y="250">Aydınlık: 15 cm</text></g></svg>`,
  secenekler: [
    "I. fenerin ışığı daha geniş alana düşmüş, birim yüzeye düşen enerji artmıştır.",
    "II. fenerin ışığı daha dar alana düşmüş, birim yüzeye düşen enerji artmıştır.",
    "I. fenerin ışığı daha dar alana düşmüş, birim yüzeye düşen enerji artmıştır.",
    "İki fenerde de aydınlık bölge farklı olsa da birim yüzeye düşen enerji eşittir."
  ],
  dogru: 2,
  hatalar: [
    "Görseldeki ölçüleri ters okuma: dik tutulan I. fenerin ışığı 6 cm'lik dar bir bölgeye düşmüştür.",
    "Eğik tutulan feneri dar bölgeyle eşleştirme: ışık eğik düştüğünde aynı demet daha geniş bir alana yayılır.",
    null,
    "Alan değişse de birim yüzeye düşen enerjinin değişmediğini sanma: aynı ışık daha geniş alana yayılınca her bir santimetrekareye düşen enerji azalır."
  ],
  aciklama: `Birim yüzeye düşen ışık enerjisi, yüzeyin her bir biriminin (örneğin her santimetrekaresinin) aldığı enerji miktarıdır.
Adım 1: İki fener özdeş ve aynı yükseklikte olduğuna göre kâğıda gönderdikleri ışık enerjisi eşittir. Değişen tek şey ışığın kâğıtla yaptığı açıdır.
Adım 2: Görseldeki ölçüleri oku. I. fener 90° ile, yani dik tutulmuştur ve aydınlık bölge 6 cm'dir. II. fener 35° ile eğik tutulmuştur ve aydınlık bölge 15 cm'dir.
Adım 3: Aynı enerji, I. fenerde dar bir bölgeye toplanmıştır. Dar alana toplanan ışıkta birim yüzeye düşen enerji artar; bu yüzden o bölge daha parlak görünür ve daha çok ısınır.
Sağlama: Aynı miktarda boyayı küçük bir kâğıda sürersen renk koyu, büyük bir kâğıda yayarsan açık çıkar. Işık da böyledir.
Cevap C.`
},
{
  id: "fen-mv-103",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Mevsimlerin birbiri ardına yaşanması, aşağıdaki hareketlerden hangisinin bir kez tamamlanmasıyla gerçekleşir?**",
  gorsel: null,
  secenekler: [
    "Dünya'nın kendi ekseni çevresinde dönmesi",
    "Güneş'in kendi ekseni çevresinde dönmesi",
    "Dünya'nın dönme ekseninin yön değiştirmesi",
    "Dünya'nın Güneş çevresinde dolanması"
  ],
  dogru: 3,
  hatalar: [
    "Dönme ile dolanmayı karıştırma: Dünya kendi ekseni çevresindeki dönmesini yaklaşık 24 saatte tamamlar ve bu hareket gece ile gündüzü oluşturur.",
    "Mevsimleri Güneş'in hareketine bağlama: mevsimler Dünya'nın hareketiyle ve eksen eğikliğiyle açıklanır.",
    "Eksenin yön değiştirdiğini sanma: eksen yıl boyunca uzayda hep aynı yöne bakar; ne yönü ne de eğikliği değişir.",
    null
  ],
  aciklama: `Dünya iki temel hareket yapar: kendi ekseni çevresinde dönme ve Güneş çevresinde dolanma.
Adım 1: Dönme hareketi yaklaşık 24 saat sürer. Bu hareketin sonucu gece ile gündüzün birbirini izlemesidir; mevsim değil.
Adım 2: Dolanma hareketi yaklaşık 365 gün, yani bir yıl sürer. Dünya bu yolculuğu tamamlarken eksen eğikliği nedeniyle yarım kürelerin Güneş ışınlarını alma açısı sürekli değişir.
Adım 3: Bir dolanma tamamlandığında ilkbahar, yaz, sonbahar ve kış bir kez yaşanmış olur. Öyleyse mevsimlerin birbiri ardına yaşanması dolanma hareketiyle gerçekleşir.
Sık yapılan hata: "Dönme" ve "dolanma" sözcüklerini karıştırmak. Kısa yol: dönme → gün, dolanma → yıl ve mevsimler.
Cevap D.`
},
{
  id: "fen-mv-104",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Görselde Dünya'nın Güneş çevresindeki yörüngesinde bulunduğu dört konum gösterilmiştir. K konumunda Güneş ışınları Kuzey Yarım Küre'ye en dik açıyla düşmektedir.\n**Buna göre K konumunda Kuzey Yarım Küre'de hangi mevsim yaşanır?**",
  gorsel: `<svg viewBox="0 0 520 300" role="img" aria-label="Dünya'nın yörüngesindeki K, L, M ve N konumları"><ellipse cx="260" cy="150" rx="215" ry="112" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/><circle cx="260" cy="150" r="28" fill="var(--vurgu)"/><text x="260" y="196" fill="currentColor" font-size="15" text-anchor="middle" font-weight="bold">Güneş</text><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><circle cx="45" cy="150" r="20"/><circle cx="260" cy="38" r="20"/><circle cx="475" cy="150" r="20"/><circle cx="260" cy="262" r="20"/></g><g stroke="var(--vurgu2)" stroke-width="2.5"><line x1="54" y1="126" x2="36" y2="174"/><line x1="269" y1="14" x2="251" y2="62"/><line x1="484" y1="126" x2="466" y2="174"/><line x1="269" y1="238" x2="251" y2="286"/></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="45" y="200">K</text><text x="298" y="42">L</text><text x="475" y="200">M</text><text x="298" y="266">N</text></g></svg>`,
  secenekler: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
  dogru: 1,
  hatalar: [
    "En dik ışınları ilkbaharla eşleştirme: ilkbaharda ışınların düşme açısı büyümektedir ama en büyük değerine henüz ulaşmamıştır.",
    null,
    "En dik ışınları sonbaharla eşleştirme: sonbaharda ışınların düşme açısı küçülmektedir.",
    "Işınların dik gelmesini kışla ilişkilendirme: ışınlar ne kadar dik düşerse birim yüzeye düşen enerji o kadar artar, hava o kadar ısınır."
  ],
  aciklama: `Bir yarım kürede Güneş ışınları ne kadar dik düşerse o yarım kürede birim yüzeye düşen enerji o kadar fazla olur.
Adım 1: Soruda K konumunda ışınların Kuzey Yarım Küre'ye en dik açıyla düştüğü söyleniyor. "En dik" demek, birim yüzeye düşen enerjinin en fazla olduğu an demektir.
Adım 2: Birim yüzeye düşen enerjinin en fazla olduğu, yani yeryüzünün en çok ısındığı mevsim yazdır.
Adım 3: Öyleyse K konumunda Kuzey Yarım Küre'de yaz yaşanır. Aynı anda Güney Yarım Küre ışınları en eğik açıyla aldığı için orada kış yaşanır.
Sağlama: Dünya yörüngenin karşı tarafına, yani M konumuna geldiğinde durum tersine döner: Kuzey Yarım Küre'de kış, Güney Yarım Küre'de yaz olur.
Cevap B.`
},
{
  id: "fen-mv-105",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Elif, ocak ayında Kuzey Yarım Küre'deki evlerine kar yağarken Güney Yarım Küre'de yaşayan halasıyla görüntülü konuşmuş ve halasının denize girmeye hazırlandığını görmüştür.\n**Buna göre halasının bulunduğu yer için aşağıdakilerden hangisi söylenebilir?**",
  gorsel: null,
  secenekler: [
    "Güneş ışınlarını daha dik açıyla aldığı için yaz mevsimindedir.",
    "Güneş ışınlarını daha eğik açıyla aldığı için yaz mevsimindedir.",
    "Güneş'e daha yakın olduğu için yaz mevsimindedir.",
    "Güneş ışınlarını aynı açıyla aldığı için kış mevsimindedir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Mevsimi doğru bulup nedenini ters kurma: yaz mevsiminde ışınlar daha eğik değil, daha dik düşer.",
    "Mevsimleri Güneş'e olan uzaklıkla açıklama: aynı anda iki yarım kürenin Güneş'e uzaklığı aynıdır, yine de mevsimleri farklıdır.",
    "İki yarım kürede aynı mevsimin yaşandığını sanma: eksen eğikliği nedeniyle yarım küreler ışınları aynı açıyla almaz."
  ],
  aciklama: `Dünya'nın dönme ekseni eğik olduğu için Güneş ışınları aynı anda iki yarım küreye aynı açıyla düşmez.
Adım 1: Elif'in bulunduğu Kuzey Yarım Küre'de kar yağıyor, yani kış yaşanıyor. Kışın ışınlar eğik düşer ve birim yüzeye düşen enerji azdır.
Adım 2: Eksen eğikliği nedeniyle bir yarım küre Güneş'e dönük durumdayken diğeri ondan uzaklaşmış durumdadır. Bu yüzden iki yarım kürede her zaman karşıt mevsimler yaşanır.
Adım 3: Kuzey Yarım Küre'de kış yaşandığına göre halasının bulunduğu Güney Yarım Küre'de yaz yaşanır. Bunun nedeni, ışınların oraya daha dik açıyla düşmesidir.
Sık yapılan hata: "Orası daha sıcaksa Güneş'e daha yakındır." demek. İki yarım küre Güneş'e aynı uzaklıktadır; farkı yaratan, ışınların düşme açısıdır.
Cevap A.`
},
{
  id: "fen-mv-106",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Dünya'nın dönme ekseni dolanma düzlemine dik olsaydı aşağıdakilerden hangisi gerçekleşirdi?**",
  gorsel: null,
  secenekler: [
    "Gece ile gündüz oluşmazdı.",
    "Bir yıl şimdikinden daha kısa sürerdi.",
    "Bir yerde yıl boyunca aynı mevsim yaşanırdı.",
    "Dünya Güneş çevresinde dolanmazdı."
  ],
  dogru: 2,
  hatalar: [
    "Eksen eğikliğini gece ile gündüzün nedeni sanma: gece ile gündüz, Dünya'nın kendi ekseni çevresinde dönmesiyle oluşur; eksen dik olsa da sürerdi.",
    "Eğikliği yılın süresiyle ilişkilendirme: bir yıl, Dünya'nın Güneş çevresindeki bir dolanımıdır; eksenin eğikliğiyle uzayıp kısalmaz.",
    null,
    "Eğiklik ile dolanma hareketini birbirine bağlama: eksen dik olsa da Dünya Güneş çevresinde dolanmayı sürdürürdü."
  ],
  aciklama: `Mevsimlerin oluşabilmesi için iki şey birlikte gereklidir: Dünya'nın Güneş çevresinde dolanması ve dönme ekseninin eğik olması.
Adım 1: Eksen dolanma düzlemine dik olsaydı Dünya yörüngede nereye giderse gitsin, bir yerin Güneş ışınlarını alma açısı hiç değişmezdi.
Adım 2: Açı değişmeyince birim yüzeye düşen ışık enerjisi de değişmezdi. Dolayısıyla hava yıl boyunca aynı kalır, o yerde tek bir mevsim yaşanırdı.
Adım 3: Diğer seçenekleri eleyelim. Gece ile gündüz dönme hareketinin sonucudur, eksen dik olsa da sürer. Yılın süresi dolanma hareketinin süresidir, eğiklikle değişmez. Dolanma hareketi de eksenin eğik olup olmamasına bağlı değildir.
Sık yapılan hata: Eksen eğikliğini gece ile gündüzün nedeni sanmak. Eğiklik mevsimleri, dönme hareketi gece ile gündüzü açıklar.
Cevap C.`
},
{
  id: "fen-mv-107",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Deniz, kırtasiyeden aldığı kareli kâğıdın üzerine masa lambasının ışığını iki farklı biçimde düşürmüştür. Lambanın yüksekliği ve verdiği ışık, iki durumda da aynıdır. Aydınlanan bölgelerin kapladığı kare sayıları görselde verilmiştir.
I. I. durumda ışık daha geniş bir alana yayılmıştır.
II. II. durumda birim yüzeye düşen ışık enerjisi daha azdır.
III. I. durumdaki aydınlık bölge daha çok ısınır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Kareli kâğıtta lambanın aydınlattığı bölgeler: I. durumda 4 kare, II. durumda 8 kare"><g stroke="currentColor" stroke-width="1.2" fill="none"><rect x="20" y="120" width="200" height="100"/><line x1="70" y1="120" x2="70" y2="220"/><line x1="120" y1="120" x2="120" y2="220"/><line x1="170" y1="120" x2="170" y2="220"/><line x1="20" y1="170" x2="220" y2="170"/><rect x="290" y="120" width="200" height="100"/><line x1="340" y1="120" x2="340" y2="220"/><line x1="390" y1="120" x2="390" y2="220"/><line x1="440" y1="120" x2="440" y2="220"/><line x1="290" y1="170" x2="490" y2="170"/></g><rect x="70" y="120" width="100" height="100" fill="var(--vurgu)" opacity="0.35"/><rect x="290" y="120" width="200" height="100" fill="var(--vurgu2)" opacity="0.3"/><rect x="103" y="40" width="34" height="24" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="356" y="36" width="34" height="24" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="2" transform="rotate(34 373 48)"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="120" y="30" font-weight="bold">I. durum</text><text x="390" y="26" font-weight="bold">II. durum</text><text x="120" y="242">Aydınlanan: 4 kare</text><text x="390" y="242">Aydınlanan: 8 kare</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Görseldeki kare sayılarını ters okuma: ışık 4 kareyi aydınlatan I. durumda daha dar, 8 kareyi aydınlatan II. durumda daha geniş alana yayılmıştır.",
    "III. yargıyı atlama: dar alana düşen ışık, birim yüzeye daha çok enerji bıraktığı için o bölgeyi daha çok ısıtır.",
    "I. yargıyı doğru sayma: geniş alana yayılan durum II. durumdur; I. durumda ışık yalnızca 4 kareye düşmüştür.",
    null
  ],
  aciklama: `Lamba aynı, yükseklik aynı olduğuna göre kâğıda gönderilen toplam ışık enerjisi iki durumda da eşittir. Değişen tek şey ışığın kâğıda düşme açısıdır.
Adım 1: I. yargıyı kontrol et. Görselde I. durumda 4 kare, II. durumda 8 kare aydınlanmıştır. Geniş alana yayılan I. durum değil, II. durumdur. I. yargı yanlıştır.
Adım 2: II. yargıyı kontrol et. Aynı enerji II. durumda iki kat büyük bir alana yayılmıştır. Alan büyüyünce her bir kareye düşen enerji azalır. II. yargı doğrudur.
Adım 3: III. yargıyı kontrol et. I. durumda aynı enerji 4 kareye toplanmıştır; birim yüzeye düşen enerji daha fazla olduğu için o bölge daha çok ısınır. III. yargı doğrudur.
Adım 4: Doğru yargılar II ve III'tür.
Sağlama: Güneş ışınları da yeryüzüne dik düştüğünde dar bir alana toplanır; bu yüzden yaz mevsiminde hava daha çok ısınır.
Cevap D.`
},
{
  id: "fen-mv-108",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bahar, bahçeyi sularken hortumun başlığını değiştirdiğinde aynı sürede akan su miktarının değişmediğini, ancak suyun ıslattığı alanın değiştiğini fark etmiştir. İki başlıkla ıslanan alanlar görselde verilmiştir. Öğretmeni, bu durumun Güneş ışınlarının yeryüzüne düşmesine benzediğini söylemiştir.\n**Buna göre I. başlıkla sulanan bölge, Güneş ışınlarının hangi durumuna benzetilebilir?**",
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Aynı sürede 6 litre su veren iki hortum başlığının ıslattığı alanlar"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M40 40 Q 90 60 110 110"/><path d="M310 40 Q 360 60 380 110"/></g><path d="M110 110 L92 190 L146 190 Z" fill="var(--vurgu)" opacity="0.4"/><path d="M380 110 L300 190 L484 190 Z" fill="var(--vurgu2)" opacity="0.3"/><ellipse cx="119" cy="192" rx="28" ry="10" fill="var(--vurgu)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><ellipse cx="392" cy="192" rx="92" ry="14" fill="var(--vurgu2)" opacity="0.4" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="119" y="30" font-weight="bold">I. başlık</text><text x="392" y="30" font-weight="bold">II. başlık</text><text x="119" y="225">Islanan alan: 1 m²</text><text x="392" y="225">Islanan alan: 4 m²</text><text x="260" y="247">Her iki başlıktan da aynı sürede 6 litre su akmaktadır.</text></g></svg>`,
  secenekler: [
    "Işınların yüzeye dik düşmesine; birim yüzeye düşen enerji fazladır.",
    "Işınların yüzeye dik düşmesine; birim yüzeye düşen enerji azdır.",
    "Işınların yüzeye eğik düşmesine; birim yüzeye düşen enerji fazladır.",
    "Işınların yüzeye eğik düşmesine; birim yüzeye düşen enerji azdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Dik düşmeyi doğru eşleştirip enerji yorumunu ters kurma: aynı enerji dar bir alana düştüğünde birim yüzeye düşen enerji artar.",
    "Dar alanı eğik düşmeyle eşleştirme: ışınlar eğik geldiğinde aynı demet daha geniş bir alana yayılır.",
    "Benzetmeyi tümüyle ters kurma: I. başlıkta su dar bir alana toplanmıştır; bu, ışınların dik düşmesine karşılık gelir."
  ],
  aciklama: `Birim yüzeye düşen enerji, yüzeyin her bir metrekaresine düşen enerji miktarıdır. Bu soruda su, ışık enerjisinin yerini tutmaktadır.
Adım 1: İki başlıktan da aynı sürede 6 litre su akıyor. Yani "gönderilen miktar" eşittir; tıpkı Güneş'ten gelen ışık demetinin aynı kalması gibi.
Adım 2: I. başlıkta bu su 1 m²'ye, II. başlıkta 4 m²'ye yayılıyor. Buna göre 1 m²'ye düşen su I. başlıkta 6 litre, II. başlıkta 1,5 litredir.
Adım 3: Işık için de aynısı geçerlidir. Işınlar yüzeye dik düştüğünde demet dar bir alana toplanır ve birim yüzeye düşen enerji artar; eğik düştüğünde geniş bir alana yayılır ve azalır.
Adım 4: I. başlıkta su dar alana toplandığına göre bu durum, ışınların yüzeye dik düşmesine benzer ve birim yüzeye düşen enerji fazladır.
Sağlama: Yaz mevsiminde ışınlar dik düştüğü için yeryüzü hızla ısınır; bu, hortumun dar başlığıyla toprağın kısa sürede ıslanmasına benzer.
Cevap A.`
},
{
  id: "fen-mv-109",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Ömer, bir hava durumu uygulamasında Güney Yarım Küre'deki bir şehri seçerek dört tarihin gündüz sürelerini not etmiştir. Notları aşağıdaki tabloda verilmiştir.\n**Buna göre bu tarihlerin hangisinde şehre gelen Güneş ışınlarının yere düşme açısı en büyüktür?**",
  gorsel: `<table class="tablo"><tr><th>Tarih</th><th>Gündüz süresi</th></tr><tr><td>21 Mart</td><td>12 saat 07 dakika</td></tr><tr><td>21 Haziran</td><td>9 saat 19 dakika</td></tr><tr><td>23 Eylül</td><td>12 saat 09 dakika</td></tr><tr><td>21 Aralık</td><td>14 saat 46 dakika</td></tr></table>`,
  secenekler: ["21 Mart", "21 Haziran", "23 Eylül", "21 Aralık"],
  dogru: 3,
  hatalar: [
    "Gece ile gündüzün yaklaşık eşit olduğu bir tarihi seçme: bu tarihte düşme açısı ne en büyük ne en küçük değerindedir.",
    "Kuzey Yarım Küre alışkanlığıyla haziranı seçme: şehir Güney Yarım Küre'dedir ve orada haziranda gündüz süresi en kısadır.",
    "Gündüz süresi yine 12 saate yakın olan tarihi seçme: bu tarihten sonra gündüz süresi uzamaya başlar, açı henüz en büyük değerinde değildir.",
    null
  ],
  aciklama: `Bir yerde Güneş ışınlarının düşme açısı büyüdükçe, yani ışınlar dikleştikçe gündüz süresi de uzar. İkisi birlikte değişir.
Adım 1: Tablodaki gündüz sürelerini karşılaştır: 12 saat 07 dakika, 9 saat 19 dakika, 12 saat 09 dakika ve 14 saat 46 dakika.
Adım 2: En uzun gündüz 21 Aralık'tadır (14 saat 46 dakika). En kısa gündüz ise 21 Haziran'dadır (9 saat 19 dakika).
Adım 3: Gündüzün en uzun olduğu tarihte ışınlar o yere en dik açıyla düşer. Öyleyse düşme açısının en büyük olduğu tarih 21 Aralık'tır.
Sağlama: Şehir Güney Yarım Küre'dedir; orada aralık ayı yaz, haziran ayı kıştır. Tablodaki süreler bunu doğruluyor.
Sık yapılan hata: Her yerde haziranın yaz olduğunu sanmak. Yarım küreler ışınları aynı açıyla almadığı için mevsimleri de karşıttır.
Cevap D.`
},
{
  id: "fen-mv-110",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Elif'in annesi her yıl aynı tarifle güneşte domates kurutmaktadır. Özdeş tepsilere serilen eşit miktarda domates, evin balkonunda aynı yere konulmuş ve tam kuruması için geçen süre kaydedilmiştir. İki ölçüm de bulutsuz günlerde yapılmıştır. Sonuçlar tabloda verilmiştir.
I. Temmuzda birim yüzeye düşen ışık enerjisi ekimdekinden fazladır.
II. Temmuzda Güneş ışınları balkona daha dik açıyla düşmüştür.
III. Ekimde kurumanın uzun sürmesinin nedeni Dünya'nın Güneş'ten uzaklaşmasıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm ayı</th><th>Tam kuruma süresi</th></tr><tr><td>Temmuz</td><td>3 gün</td></tr><tr><td>Ekim</td><td>7 gün</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: temmuzda ışınlar daha dik geldiği için aynı ışık demeti daha dar bir alana düşer; hızlı kurumanın nedeni budur.",
    "Mevsimleri Güneş'e olan uzaklıkla açıklama: III. yargı yanlıştır, I ve II doğrudur.",
    null,
    "Üç yargıyı da doğru sayma: mevsimler Dünya'nın Güneş'e uzaklığıyla değil, ışınların yere düşme açısıyla oluşur."
  ],
  aciklama: `Domatesin kuruması, yüzeyine düşen ışık enerjisinin suyu buharlaştırmasıyla olur. Birim yüzeye düşen enerji arttıkça kuruma hızlanır.
Adım 1: Tabloyu oku. Aynı miktarda domates temmuzda 3 günde, ekimde 7 günde kurumuştur. Tepsi, miktar ve yer aynı olduğuna göre değişen tek şey mevsimdir.
Adım 2: I. yargıyı kontrol et. Temmuzda kuruma iki kattan kısa sürede bittiğine göre balkonun birim yüzeyine düşen enerji daha fazladır. Doğrudur.
Adım 3: II. yargıyı kontrol et. Birim yüzeye düşen enerjinin fazla olmasının nedeni, ışınların temmuzda daha dik açıyla düşmesidir. Doğrudur.
Adım 4: III. yargıyı kontrol et. Mevsimler Dünya'nın Güneş'e olan uzaklığıyla açıklanamaz. Uzaklık belirleyici olsaydı iki yarım kürede aynı anda aynı mevsimin yaşanması gerekirdi; oysa mevsimleri karşıttır. III. yargı yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sık yapılan hata: "Yazın Dünya Güneş'e yaklaşır." demek. Yazı yaz yapan, uzaklık değil ışınların dik düşmesidir.
Cevap C.`
},
{
  id: "fen-mv-111",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Görselde Dünya'nın yörüngesinde birbirinin karşısında bulunan iki konumu gösterilmiştir. K konumunda Güneş ışınları Güney Yarım Küre'ye daha dik açıyla düşmektedir.
I. K konumunda Güney Yarım Küre'de yaz mevsimi yaşanır.
II. K konumunda Kuzey Yarım Küre'de birim yüzeye düşen ışık enerjisi daha azdır.
III. L konumunda iki yarım kürede de aynı mevsim yaşanır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Dünya'nın yörüngesinde karşılıklı iki konumu ve eğik dönme ekseni"><circle cx="260" cy="125" r="30" fill="var(--vurgu)"/><text x="260" y="176" fill="currentColor" font-size="15" text-anchor="middle" font-weight="bold">Güneş</text><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><circle cx="80" cy="125" r="42"/><circle cx="440" cy="125" r="42"/></g><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"><line x1="50" y1="125" x2="110" y2="125"/><line x1="410" y1="125" x2="470" y2="125"/></g><g stroke="var(--vurgu2)" stroke-width="3"><line x1="99" y1="87" x2="61" y2="163"/><line x1="459" y1="87" x2="421" y2="163"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="107" y="78">Kuzey</text><text x="53" y="182">Güney</text><text x="467" y="78">Kuzey</text><text x="413" y="182">Güney</text></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="80" y="30">K konumu</text><text x="440" y="30">L konumu</text></g><g stroke="currentColor" stroke-width="2"><line x1="150" y1="210" x2="370" y2="210"/><line x1="150" y1="210" x2="160" y2="204"/><line x1="150" y1="210" x2="160" y2="216"/><line x1="370" y1="210" x2="360" y2="204"/><line x1="370" y1="210" x2="360" y2="216"/></g><text x="260" y="232" fill="currentColor" font-size="14" text-anchor="middle">Aradan 6 ay geçer.</text></svg>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "II. yargıyı atlama: ışınları daha eğik alan yarım kürede birim yüzeye düşen enerji azalır.",
    null,
    "Yörüngenin karşı konumunda mevsimlerin eşitleneceğini sanma: iki yarım kürede her zaman karşıt mevsimler yaşanır.",
    "Üç yargıyı da doğru sayma: III. yargı yanlıştır, L konumunda da yarım kürelerde karşıt mevsimler yaşanır."
  ],
  aciklama: `Dünya'nın dönme ekseni eğik ve sabit olduğu için yörüngedeki her konumda bir yarım küre ışınları daha dik, diğeri daha eğik alır.
Adım 1: I. yargıyı kontrol et. K konumunda ışınlar Güney Yarım Küre'ye daha dik düşüyor. Işınları dik alan yarım kürede birim yüzeye düşen enerji en fazladır; orada yaz yaşanır. Doğrudur.
Adım 2: II. yargıyı kontrol et. Aynı anda Kuzey Yarım Küre ışınları daha eğik alır. Eğik gelen ışık demeti geniş bir alana yayıldığı için birim yüzeye düşen enerji azdır. Doğrudur.
Adım 3: III. yargıyı kontrol et. L konumu K'nin karşısıdır; aradan altı ay geçmiştir. Burada durum tersine döner: Kuzey Yarım Küre'de yaz, Güney Yarım Küre'de kış yaşanır. İki yarım kürede aynı mevsim yaşanmaz. Yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sık yapılan hata: Yarım kürelerde aynı anda aynı mevsimin yaşanabileceğini düşünmek. Eksen eğikliği buna izin vermez; mevsimler her zaman karşıttır.
Cevap B.`
},
{
  id: "fen-mv-112",
  kazanim: "F.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Elif, kütüphaneden aldığı gök bilimi kitabında şu cümleyi okumuştur:
"Dünya, Güneş çevresinde dolanırken dönme ekseni uzayda hep aynı yöne bakar; eksenin eğikliği de değişmez."
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Dünya yörüngede ilerledikçe yarım kürelerin ışınları alma açısı değişir.",
    "Yıl boyunca iki yarım küre de Güneş ışınlarını aynı açıyla alır.",
    "Eksenin eğikliği yaz mevsiminde artar, kış mevsiminde azalır.",
    "Mevsimler, eksenin yıl içinde yön değiştirmesi nedeniyle oluşur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eksenin sabit olmasını \"hiçbir şey değişmez\" diye anlama: eksen sabit kaldığı için Dünya yörüngede ilerledikçe yarım kürelerin Güneş'e dönük durumu değişir.",
    "Eğikliğin mevsime göre değiştiğini sanma: metin, eğikliğin değişmediğini açıkça söylüyor.",
    "Metnin söylediğinin tersini seçme: eksen yön değiştirmez; mevsimler, sabit eğiklik ile dolanma hareketinin birlikte sonucudur."
  ],
  aciklama: `Metin iki bilgi veriyor: eksenin eğikliği sabittir ve eksen hep aynı yöne bakar. Buna eksenin paralelliği denir.
Adım 1: Eksen hep aynı yöne baktığına göre Dünya yörüngenin bir ucundayken eksenin üst ucu Güneş'e doğru eğik durur.
Adım 2: Dünya yörüngede ilerleyip karşı uca geldiğinde eksen yine aynı yöne bakar; ama artık bu yön Güneş'ten uzağa düşer. Böylece Güneş'e dönük olan yarım küre değişir.
Adım 3: Güneş'e dönük yarım küre değiştikçe ışınların o yarım küreye düşme açısı da değişir. Açı büyüdüğünde birim yüzeye düşen enerji artar ve yaz, küçüldüğünde azalır ve kış yaşanır.
Adım 4: Öyleyse metinden çıkarılacak sonuç, yörüngede ilerledikçe yarım kürelerin ışınları alma açısının değiştiğidir.
Sık yapılan hata: "Eksen sabitse hiçbir şey değişmez." diye düşünmek. Tam tersine, eksen sabit olduğu için yarım kürelerin Güneş'e göre durumu yıl boyunca değişir.
Cevap A.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "fen-mv-201",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Fen dersinde özdeş iki karton, özdeş ışık kaynaklarından eşit uzaklığa yerleştirilmiştir. I. karton ışınlara dik, II. karton eğik durmaktadır. Kartonların üzerindeki termometrelerin başlangıçta ve 10 dakika sonra gösterdiği değerler görselde verilmiştir.
I. I. kartonun birim yüzeyine düşen ışık enerjisi daha fazladır.
II. Sıcaklık farkının nedeni ışığın kartona düşme açısıdır.
III. II. kartonun ışık kaynağına uzaklığı daha fazladır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Işınlara dik ve eğik duran iki karton ile termometre okumaları"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="20" y1="210" x2="240" y2="210"/><line x1="290" y1="210" x2="510" y2="210"/></g><rect x="94" y="140" width="72" height="70" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><rect x="360" y="142" width="72" height="68" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5" transform="rotate(38 396 176)"/><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="130" y1="50" x2="130" y2="134"/><line x1="105" y1="50" x2="105" y2="134"/><line x1="155" y1="50" x2="155" y2="134"/></g><g stroke="var(--vurgu2)" stroke-width="2.5"><line x1="372" y1="50" x2="372" y2="140"/><line x1="400" y1="50" x2="400" y2="152"/><line x1="428" y1="50" x2="428" y2="164"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="130" y="36" font-weight="bold">I. karton</text><text x="400" y="36" font-weight="bold">II. karton</text><text x="130" y="234">Başlangıç: 22 °C</text><text x="130" y="254">10 dakika sonra: 31 °C</text><text x="400" y="234">Başlangıç: 22 °C</text><text x="400" y="254">10 dakika sonra: 26 °C</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: iki karton arasındaki tek fark ışığa göre duruş açısıdır; sıcaklık farkının nedeni de budur.",
    "I. yargıyı yanlış sayma: aynı sürede daha çok ısınan kartonun birim yüzeyine düşen enerji daha fazladır.",
    null,
    "III. yargıyı doğru sayma: kartonlar ışık kaynaklarına eşit uzaklığa yerleştirilmiştir, deneyde uzaklık değiştirilmemiştir."
  ],
  aciklama: `Bir deneyde yalnızca tek bir değişken değiştirilir; diğer bütün koşullar sabit tutulur. Böylece ortaya çıkan farkın nedeni kesin olarak bilinir.
Adım 1: Deneyin koşullarını yaz. Kartonlar özdeş, ışık kaynakları özdeş, uzaklıklar eşit, süre eşit ve başlangıç sıcaklıkları eşit. Değiştirilen tek şey kartonun ışığa göre duruş açısıdır.
Adım 2: I. yargıyı kontrol et. I. kartonun sıcaklığı 9 °C, II. kartonunki 4 °C artmıştır. Daha çok ısınan yüzeyin birim alanına daha çok enerji düşmüştür. Doğrudur.
Adım 3: II. yargıyı kontrol et. Tek değişen duruş açısı olduğuna göre sıcaklık farkının nedeni de ışığın kartona düşme açısıdır. Dik gelen ışık dar alana toplanır, eğik gelen ışık geniş alana yayılır. Doğrudur.
Adım 4: III. yargıyı kontrol et. Soruda kartonların kaynaklara eşit uzaklıkta olduğu söylenmiştir. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir.
Sağlama: Bu düzenek, yaz ile kış arasındaki sıcaklık farkının küçük bir örneğidir: yazın ışınlar dik, kışın eğik gelir.
Cevap C.`
},
{
  id: "fen-mv-202",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Kuzey Yarım Küre'deki bir bahçenin güneye ve kuzeye bakan iki yamacına özdeş fideler dikilmiştir. Öğleden sonra ölçüldüğünde Güneş ışınlarının yamaçlara geliş açılarının farklı olduğu görülmüştür. Ölçüm sonuçları görselde verilmiştir.
I. Kuzeye bakan yamacın birim yüzeyine düşen ışık enerjisi daha fazladır.
II. Aynı büyüklükteki ışık demeti kuzeye bakan yamaçta daha geniş bir alana yayılır.
III. Güneye bakan yamaçtaki toprak aynı sürede daha çok ısınır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Güneye ve kuzeye bakan yamaçlara gelen ışınların açıları"><path d="M40 210 L260 100 L480 210 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="92" y1="44" x2="128" y2="155"/><line x1="140" y1="44" x2="176" y2="131"/><line x1="188" y1="44" x2="224" y2="107"/></g><g stroke="var(--vurgu2)" stroke-width="2.5" stroke-dasharray="6 4"><line x1="300" y1="44" x2="336" y2="148"/><line x1="348" y1="44" x2="384" y2="172"/><line x1="396" y1="44" x2="432" y2="196"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="120" y="30" font-weight="bold">Güney yamaç</text><text x="380" y="30" font-weight="bold">Kuzey yamaç</text><text x="120" y="238">Işınların geliş açısı: 72°</text><text x="380" y="238">Işınların geliş açısı: 28°</text></g></svg>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "III. yargıyı atlama: dik gelen ışınlar birim yüzeye daha çok enerji bıraktığı için toprağı daha çok ısıtır.",
    "II. yargıyı yanlış sayma: eğik gelen ışık demeti aynı büyüklükte olsa da daha geniş bir alana yayılır.",
    "I. yargıyı doğru sayma: ışınları 28° ile, yani daha eğik alan kuzey yamacının birim yüzeyine düşen enerji daha azdır.",
    null
  ],
  aciklama: `Işık demetinin büyüklüğü aynı kalsa bile yüzeye eğik düştüğünde daha geniş bir alana yayılır; böylece birim yüzeye düşen enerji azalır.
Adım 1: Görseldeki açıları oku. Güney yamaç ışınları 72° ile, kuzey yamaç 28° ile almaktadır. Güney yamaç ışınları daha dik alır.
Adım 2: I. yargıyı kontrol et. Işınları daha eğik alan kuzey yamacının birim yüzeyine düşen enerji daha azdır. Yargı bunun tersini söylediği için yanlıştır.
Adım 3: II. yargıyı kontrol et. 28° ile gelen demet, 72° ile gelen demetten daha geniş bir alana yayılır. Doğrudur.
Adım 4: III. yargıyı kontrol et. Birim yüzeyine daha çok enerji düşen güney yamacındaki toprak aynı sürede daha çok ısınır. Doğrudur.
Adım 5: Doğru yargılar II ve III'tür.
Sağlama: Kışın karın önce güneye bakan yamaçlarda erimesinin nedeni budur; o yamaçlar ışınları daha dik açıyla alır.
Cevap D.`
},
{
  id: "fen-mv-203",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Müzik dersinde öğrenciler, mevsimlerin oluşumunu anlatan bir şarkı için birer dize yazmıştır. Öğrencilerin yazdığı dizeler aşağıdaki tabloda verilmiştir.\n**Buna göre hangi öğrencinin dizesi bilimsel olarak __yanlıştır__?**",
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Yazdığı dize</th></tr><tr><td>Zeynep</td><td>"Güneş'e yaklaşınca yaz gelir bu dünyaya."</td></tr><tr><td>Bahar</td><td>"Eksenim eğik durur, bu yüzden mevsim olur."</td></tr><tr><td>Kerem</td><td>"Yazın ışınlar diktir, toprağım çok ısınır."</td></tr><tr><td>Ali</td><td>"Bir yanda yaz yaşanır, öbür yanda kış olur."</td></tr></table>`,
  secenekler: ["Zeynep", "Bahar", "Kerem", "Ali"],
  dogru: 0,
  hatalar: [
    null,
    "Eksen eğikliğinin mevsimlerin nedeni olmasını yanlış sanma: mevsimler, eğik eksenle dolanmanın birlikte sonucudur; bu dize doğrudur.",
    "Işınların dik gelmesiyle ısınmayı ilişkilendirmeyi yanlış sanma: dik gelen ışınlarda birim yüzeye düşen enerji artar, bu dize doğrudur.",
    "İki yarım kürede karşıt mevsim yaşanmasını yanlış sanma: eksen eğikliği nedeniyle bir yarım kürede yaz yaşanırken diğerinde kış yaşanır; bu dize doğrudur."
  ],
  aciklama: `Mevsimlerin oluşumunda belirleyici olan, Dünya'nın Güneş'e uzaklığı değil, Güneş ışınlarının yeryüzüne düşme açısıdır.
Adım 1: Zeynep'in dizesini incele. "Güneş'e yaklaşınca yaz gelir." diyor. Eğer bu doğru olsaydı Dünya'nın her yerinde aynı anda yaz yaşanması gerekirdi; oysa iki yarım kürede karşıt mevsimler yaşanır. Bu dize yanlıştır.
Adım 2: Bahar'ın dizesini incele. Eksenin eğik olması, yarım kürelerin ışınları farklı açılarla almasını sağlar; mevsimlerin nedeni budur. Doğrudur.
Adım 3: Kerem'in dizesini incele. Işınlar dik geldiğinde aynı demet dar bir alana düşer, birim yüzeye düşen enerji artar ve yer daha çok ısınır. Doğrudur.
Adım 4: Ali'nin dizesini incele. Eksen eğikliği nedeniyle aynı anda bir yarım kürede yaz, diğerinde kış yaşanır. Doğrudur.
Sık yapılan hata: Yazın havanın sıcak olmasını Güneş'e yaklaşmaya bağlamak. Bu, en yaygın kavram yanılgılarından biridir.
Cevap A.`
},
{
  id: "fen-mv-204",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Selim'in ailesi, çatıya taktırdığı güneş panelinin eğimini yılda iki kez değiştirmektedir. Panel kışın daha dik, yazın daha yatık konuma getirilmektedir. Panelin iki mevsimdeki konumu ve Güneş ışınlarının geliş doğrultusu görselde verilmiştir.\n**Buna göre panelin eğiminin değiştirilme amacı aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Güneş panelinin yaz ve kış konumları ile ışınların geliş doğrultusu"><g stroke="currentColor" stroke-width="2.5"><line x1="30" y1="205" x2="240" y2="205"/><line x1="290" y1="205" x2="500" y2="205"/></g><rect x="96" y="176" width="86" height="12" rx="3" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5" transform="rotate(-18 139 182)"/><rect x="356" y="170" width="86" height="12" rx="3" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5" transform="rotate(-62 399 176)"/><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="108" y1="46" x2="136" y2="130"/><line x1="148" y1="46" x2="176" y2="130"/></g><g stroke="var(--vurgu2)" stroke-width="2.5"><line x1="316" y1="66" x2="392" y2="128"/><line x1="326" y1="102" x2="382" y2="148"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="135" y="32" font-weight="bold">Yaz konumu</text><text x="400" y="32" font-weight="bold">Kış konumu</text><text x="135" y="232">Işınlar dik gelir.</text><text x="400" y="232">Işınlar eğik gelir.</text></g></svg>`,
  secenekler: [
    "Panelin üzerinde kar birikmesini önlemek",
    "Işınların panele düşme açısını dikleştirmek",
    "Panelin Güneş'e olan uzaklığını azaltmak",
    "Panele düşen ışığın yayıldığı alanı büyütmek"
  ],
  dogru: 1,
  hatalar: [
    "Günlük bir gerekçeyi bilimsel nedenin yerine koyma: panel yazın da eğim değiştirir, oysa yazın kar yağmaz.",
    null,
    "Mevsimleri Güneş'e olan uzaklıkla açıklama: bir çatıda yapılan birkaç derecelik eğim değişikliği Güneş'e olan uzaklığı değiştirmez.",
    "Birim yüzeye düşen enerjiyi ters yorumlama: ışık geniş bir alana yayıldıkça birim yüzeye düşen enerji azalır; amaç bunun tam tersidir."
  ],
  aciklama: `Bir yüzeyin ürettiği enerji, o yüzeyin birim alanına düşen ışık enerjisiyle doğru orantılıdır. Işınlar yüzeye ne kadar dik düşerse birim yüzeye düşen enerji o kadar artar.
Adım 1: Görseli oku. Yazın Güneş ışınları yere daha dik gelmektedir; kışın ise daha eğik gelmektedir.
Adım 2: Panelin en çok enerji üretmesi için ışınların panele dik düşmesi gerekir. Işınların geliş açısı mevsime göre değiştiğine göre panelin açısı da değişmelidir.
Adım 3: Kışın ışınlar eğik geldiği için panel dikleştirilir; böylece ışınlar panele yeniden dik gelmiş olur. Yazın ışınlar zaten dik geldiği için panel yatırılır.
Adım 4: Öyleyse eğim değişikliğinin amacı, ışınların panele düşme açısını dikleştirmektir.
Sağlama: Aynı ışık demeti dik düştüğünde dar bir alana toplanır; panelin birim yüzeyine düşen enerji artar ve üretim yükselir.
Cevap B.`
},
{
  id: "fen-mv-205",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir okul kütüphanesinin güneye bakan penceresinden öğle vakti içeri giren güneş ışığının zeminde kapladığı bölge, haziran ve aralık aylarında işaretlenmiştir. Ölçüm sonuçları görselde verilmiştir.
I. Aralıkta ışınlar zemine daha eğik açıyla ulaşmıştır.
II. Haziranda zeminin aydınlanan bölümünün birim yüzeyine düşen enerji daha fazladır.
III. Haziranda zeminde aydınlanan bölge daha geniştir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Kütüphane penceresinden haziran ve aralık aylarında içeri giren ışığın zeminde kapladığı bölgeler"><path d="M60 40 L60 200 L470 200" fill="none" stroke="currentColor" stroke-width="3"/><rect x="48" y="52" width="24" height="76" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="62" y1="58" x2="128" y2="200"/><line x1="62" y1="86" x2="112" y2="200"/></g><g stroke="var(--vurgu2)" stroke-width="2.5" stroke-dasharray="6 4"><line x1="62" y1="58" x2="330" y2="200"/><line x1="62" y1="100" x2="292" y2="200"/></g><line x1="62" y1="208" x2="128" y2="208" stroke="var(--vurgu)" stroke-width="6"/><line x1="62" y1="222" x2="330" y2="222" stroke="var(--vurgu2)" stroke-width="6"/><g fill="currentColor" font-size="15"><text x="16" y="96" text-anchor="middle">Pencere</text><text x="142" y="213">Haziran: 0,8 m</text><text x="344" y="227">Aralık: 3,2 m</text><text x="200" y="245" font-size="14">Ölçüler, ışığın pencereden içeri girdiği uzaklığı gösterir.</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: haziranda ışınlar daha dik geldiği için aynı ışık daha dar bir alana düşer, birim yüzeye düşen enerji artar.",
    "Görseldeki ölçüleri ters okuma: haziranda aydınlanan bölge 0,8 m ile dardır; ışık odanın içine aralıkta girer.",
    null,
    "III. yargıyı doğru sayma: görsele göre haziranda aydınlanan bölge daha dardır, geniş olan aralık ölçümüdür."
  ],
  aciklama: `Güneş ışınları bir yere ne kadar dik gelirse aydınlattıkları bölge o kadar dar olur ve birim yüzeye düşen enerji o kadar artar.
Adım 1: I. yargıyı kontrol et. Görselde aralıkta ışık odanın 3,2 m içine kadar girmiştir. Işık ancak eğik geldiğinde bu kadar içeri ulaşabilir. Doğrudur.
Adım 2: II. yargıyı kontrol et. Haziranda aynı pencereden giren ışık yalnızca 0,8 m'lik bir bölgeye düşmüştür. Aynı ışık dar bir alana toplandığı için birim yüzeye düşen enerji daha fazladır. Doğrudur.
Adım 3: III. yargıyı kontrol et. Görsele göre haziranda aydınlanan bölge dar, aralıkta geniştir. Yargı bunun tersini söylediği için yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sık yapılan hata: "Yazın Güneş daha çok içeri girer." diye düşünmek. Yazın Güneş gökyüzünde daha yüksektedir; bu yüzden ışığı pencerenin hemen önüne düşer.
Cevap C.`
},
{
  id: "fen-mv-206",
  kazanim: "F.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir atletizm takımı, sahadaki 1,5 m yüksekliğindeki direğin gölge uzunluğunu bir yıl boyunca her ayın 21'inde, gölgenin en kısa olduğu anda ölçmüştür. Ölçümlerin bir bölümü tabloda verilmiştir.\n**Buna göre Güneş ışınlarının sahaya en dik açıyla düştüğü ay hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Ölçüm tarihi</th><th>Gölge uzunluğu</th></tr><tr><td>21 Mart</td><td>1,3 m</td></tr><tr><td>21 Haziran</td><td>0,5 m</td></tr><tr><td>21 Eylül</td><td>1,2 m</td></tr><tr><td>21 Aralık</td><td>3,1 m</td></tr></table>`,
  secenekler: ["Mart", "Haziran", "Eylül", "Aralık"],
  dogru: 1,
  hatalar: [
    "Gölgesi kısa görünen ilk ayı seçme: martta gölge 1,3 m'dir, haziranda bundan çok daha kısadır.",
    null,
    "Ölçüleri karşılaştırmadan seçim yapma: eylülde gölge, hazirandakinin iki katından uzundur.",
    "Uzun gölgeyi dik ışınlarla eşleştirme: ışınlar ne kadar eğik gelirse gölge o kadar uzar."
  ],
  aciklama: `Bir cismin gölgesinin uzunluğu, Güneş ışınlarının yere düşme açısına bağlıdır. Işınlar dikleştikçe gölge kısalır, eğildikçe uzar.
Adım 1: Tablodaki gölge uzunluklarını sırala: 0,5 m (haziran), 1,2 m (eylül), 1,3 m (mart) ve 3,1 m (aralık).
Adım 2: En kısa gölge 0,5 m ile haziranda ölçülmüştür. Gölgenin en kısa olduğu tarihte ışınlar o yere en dik açıyla düşer.
Adım 3: En uzun gölge ise 3,1 m ile aralıktadır; o tarihte ışınlar en eğik açıyla düşmüştür.
Sağlama: Direğin boyu 1,5 m'dir. Haziranda gölge direğin boyunun üçte birinden kısadır; aralıkta ise iki katına yakındır. Bu büyük fark, ışınların düşme açısındaki değişimden kaynaklanır.
Sık yapılan hata: Gölgenin uzun olmasını "Güneş çok güçlü" diye yorumlamak. Uzun gölge, ışınların eğik geldiğini ve birim yüzeye düşen enerjinin az olduğunu gösterir.
Cevap B.`
}
);
