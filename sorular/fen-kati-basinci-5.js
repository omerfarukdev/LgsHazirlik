// Fen Bilimleri — Katı Basıncı: Kademe 3 (LGS Ayarı) yedeği, sıra 26-75
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["kati-basinci"] = window.LGS_BANK["kati-basinci"] || []).push(
{
  id: "fen-kb-326",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Sulak alanda çalışan arazi görevlisi Metin, yumuşak çamurda ilerlerken batmamak için ayaklarına geniş yüzeyli plastik tabanlıklar takmıştır. Tabanlıklar çok hafif olduğundan Metin'in toplam ağırlığı değişmemiştir.
I. Tabanlıklar, ayakların çamura değen toplam yüzeyini büyütür.
II. Tabanlıklar takılsa da Metin'in çamura uyguladığı kuvvet değişmez.
III. Tabanlıklar, Metin'in çamura uyguladığı basıncı artırır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Yarım bırakma: tabanlıklar yüzeyi büyütür (I), ayrıca Metin'in ağırlığı değişmediği için çamura uyguladığı kuvvet de aynı kalır; II de doğrudur.",
    null,
    "Basıncın artacağını sanma: yüzey büyüyünce aynı kuvvet daha geniş alana yayılır ve basınç azalır; III yanlıştır.",
    "Basıncı ters kurma ve I'i gözden kaçırma: tabanlıklar yüzeyi büyütür, I doğrudur; basınç ise artmaz, azalır."
  ],
  aciklama: `Basınç, yüzeye dik etki eden kuvvetin yüzeyin birim alanına düşen etkisidir. Kuvvet aynıyken alan büyürse basınç azalır.
Adım 1 (I): Geniş tabanlıklar ayakların çamura değen toplam alanını büyütür. I doğrudur.
Adım 2 (II): Çamura uygulanan kuvvet Metin'in ağırlığıdır; tabanlıklar hafif olduğundan ağırlık değişmemiştir. II doğrudur.
Adım 3 (III): Aynı kuvvet daha geniş bir alana yayıldığı için basınç artmaz, azalır; Metin çamura daha az batar. III yanlıştır.
Sık yapılan hata: Geniş tabanın basıncı artırdığını ya da kuvveti azalttığını düşünmek. Geniş taban yalnızca basıncı azaltır.
Cevap B.`
},
{
  id: "fen-kb-327",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Özdeş ve boş K ile L sandıkları ile, L ile aynı biçimde ama içi kumla doldurulmuş M sandığı, düzlenmiş aynı kum zemine tabloda belirtildiği gibi yerleştirilmiştir. Sandıkların zemine uyguladığı basınçlar sırasıyla P_{K}, P_{L} ve P_{M} ile gösterilmektedir.
**Buna göre aşağıdaki karşılaştırmalardan hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Sandık</th><th>Zemine değen yüzey</th><th>İçi</th></tr><tr><td>K</td><td>Dar yüzey</td><td>Boş</td></tr><tr><td>L</td><td>Geniş yüzey</td><td>Boş</td></tr><tr><td>M</td><td>Geniş yüzey</td><td>Kum dolu</td></tr></table>`,
  secenekler: ["P_{K} > P_{L}", "P_{L} > P_{M}", "P_{K} > P_{M}", "P_{M} > P_{K}"],
  dogru: 0,
  hatalar: [
    null,
    "Ters yön: L ile M aynı yüzeyle durur ama M daha ağırdır; yüzey eşitken ağırlığı fazla olanın basıncı da fazladır, yani P_{M} > P_{L}.",
    "İki değişkeni birden değiştirme: K ile M'de hem yüzey hem ağırlık farklıdır; etkiler zıt yönde olduğundan bu ikisi karşılaştırılamaz.",
    "Aynı nedenle karşılaştırılamaz: K dar yüzeyiyle, M ağırlığıyla basıncı artırır; hangisinin büyük olduğu verilenlerden bilinemez."
  ],
  aciklama: `Basınçları karşılaştırmak için, bir seferde yalnızca bir değişkenin farklı olduğu çiftlere bakılır.
Adım 1 (K ve L): İkisi de boş ve özdeştir, ağırlıkları eşittir. K dar yüzeyi üzerinde durduğundan alanı küçüktür; bu yüzden P_{K} > P_{L}.
Adım 2 (L ve M): İkisi de geniş yüzeyi üzerindedir, alanlar eşittir. M daha ağır olduğundan P_{M} > P_{L}.
Adım 3 (K ve M): Hem ağırlık hem alan farklıdır; hangisinin etkisinin baskın olduğu bilinmez. Bu çift için kesin bir şey söylenemez.
Sağlama: Seçeneklerde yalnızca P_{K} > P_{L} tek değişkenli çiftten çıkar.
Cevap A.`
},
{
  id: "fen-kb-328",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Teknoloji ve tasarım dersinde öğrenciler, günlük hayatta kullanılan aletlerin basınçla ilişkisini tartışmaktadır. Öğretmen, tahtaya dört aletin ya da araç parçasının bir özelliğini yazmış ve her özelliğin temas alanını nasıl değiştirdiğini düşünmelerini istemiştir. Öğrenciler, bu özelliklerden üçünün aynı amaca, birinin ise farklı bir amaca hizmet ettiğini fark etmiştir.
**Aşağıdaki özelliklerden hangisinin tasarım amacı diğerlerinden farklıdır?**`,
  gorsel: null,
  secenekler: [
    "Dikiş iğnesinin ince ve sivri ucu",
    "Kalemtıraş bıçağının keskin kenarı",
    "Kırıcı matkabın sivri çelik ucu",
    "Ağır römorkun çok sayıdaki tekerleği"
  ],
  dogru: 3,
  hatalar: [
    "Bu şık diğerleriyle aynı amaca hizmet eder: iğnenin ucu küçük alanlı olduğu için basıncı artırır, kumaşa kolay girer.",
    "Bu şık diğerleriyle aynı amaca hizmet eder: keskin kenar temas alanını küçültüp basıncı artırır, kalemi yontar.",
    "Bu şık diğerleriyle aynı amaca hizmet eder: sivri uç alanı küçülttüğü için betonu kırmak için gereken basıncı sağlar.",
    null
  ],
  aciklama: `Aletler basıncı ya artırmak ya da azaltmak için tasarlanır. Basınç, çoğunlukla temas alanı ayarlanarak değiştirilir.
Adım 1: İğne ucu, bıçak kenarı ve matkap ucu çok küçük bir yüzeyle temas eder. Aynı kuvvetle büyük basınç oluşur; amaç basıncı artırmaktır.
Adım 2: Ağır römorkun çok sayıda tekerleği, ağırlığı daha geniş bir toplam yüzeye dağıtır. Amaç, yola ya da toprağa uygulanan basıncı azaltmaktır.
Adım 3: Üç alet basıncı artırır, biri azaltır; farklı olan dördüncüdür.
Sağlama: Dar uç basıncı artırır, geniş ya da çok sayıda temas noktası basıncı azaltır.
Cevap D.`
},
{
  id: "fen-kb-329",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Gölet kıyısındaki yumuşak çamurda yürüyen bir ördeğin ayak tabanında, parmaklar arasında perde denilen ince zarlar bulunur. Ördek yürürken bu zarlar açılır ve ayak çamura geniş bir yüzeyle basar.
I. Perdeler, ördeğin çamura uyguladığı kuvveti azaltır.
II. Perdeler, ayağın çamura değen yüzeyini büyütür.
III. Perdeler, ördeğin ağırlığının azalmasını sağlar.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Basınç ile kuvveti karıştırma: perdeler temas yüzeyini büyütür, kuvveti değiştirmez; çamura uygulanan kuvvet ördeğin ağırlığıdır.",
    null,
    "Kuvvet ve ağırlık yanılgısı: ayağa zar eklemek ördeğin ağırlığını değiştirmez; I ve III yanlıştır.",
    "III'ü doğru sanma: II doğrudur ama perdeler ağırlığı azaltmaz, yalnızca basıncı azaltır."
  ],
  aciklama: `Canlıların vücut yapıları basıncı değiştirebilir. Perdeli ayak, temas alanını değiştirir; ağırlığı değiştirmez.
Adım 1 (I): Çamura uygulanan kuvvet ördeğin ağırlığıdır. Perdeler ağırlığı azaltmaz, dolayısıyla kuvvet de azalmaz. I yanlıştır.
Adım 2 (II): Zarlar açılınca ayağın çamura değen alanı büyür. II doğrudur.
Adım 3 (III): Perdeler ördeğe kütle eklemez ya da çıkarmaz; ağırlık aynıdır. III yanlıştır.
Sağlama: Aynı ağırlık daha geniş bir alana yayılır; basınç azalır ve ördek çamura batmaz. Bu sonucu veren yargı yalnızca II'dir.
Cevap B.`
},
{
  id: "fen-kb-330",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Hakan, katı basıncının cismin ağırlığına bağlı olup olmadığını öğrenmek istemektedir. Özdeş tahta bloklarla üç düzenek kurmuş, blokların hepsini geniş yüzeyleri üzerine koymuş ve blokların bıraktığı izin derinliğini cetvelle ölçmüştür. Düzenekler tabloda verilmiştir.
**Buna göre Hakan'ın deneyinde sabit tutulması gerekirken değiştirilen değişken aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Üst üste blok sayısı</th><th>Zemin</th><th>Zemine değen yüzey</th></tr><tr><td>A</td><td>1</td><td>Islak kum</td><td>Geniş yüzey</td></tr><tr><td>B</td><td>2</td><td>Islak kum</td><td>Geniş yüzey</td></tr><tr><td>C</td><td>3</td><td>Un</td><td>Geniş yüzey</td></tr></table>`,
  secenekler: ["Temas yüzeyinin alanı", "Zemin türü", "Blok sayısı", "İz derinliği"],
  dogru: 1,
  hatalar: [
    "Değişmeyen değişkeni seçme: üç düzenekte de bloklar geniş yüzeyleri üzerindedir; temas alanı sabit tutulmuştur.",
    null,
    "Bağımsız değişkeni kontrol değişkeniyle karıştırma: blok sayısı (ağırlık) deneyin bilerek değiştirilen değişkenidir.",
    "Bağımlı değişkeni kontrol değişkeniyle karıştırma: iz derinliği ölçülen sonuçtur, sabit tutulması beklenmez."
  ],
  aciklama: `Bir değişkenin etkisini sınarken yalnızca o değişken (bağımsız) değiştirilir, ölçülen sonuç (bağımlı) izlenir, geri kalan her şey (kontrol) sabit tutulur.
Adım 1: Hakan'ın sınadığı değişken ağırlıktır; bunu blok sayısıyla değiştirmektedir. Bağımsız değişken blok sayısıdır.
Adım 2: Ölçülen sonuç iz derinliğidir; bağımlı değişkendir.
Adım 3: Temas yüzeyi üç düzenekte de geniştir, yani sabittir. Zemin ise A ve B'de ıslak kum, C'de undur; sabit tutulmamıştır.
Sağlama: C'deki iz farklı çıkarsa bunun nedeni ağırlık mı zemin mi olduğu ayırt edilemez.
Cevap B.`
},
{
  id: "fen-kb-331",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Dört cisim (K, L, M ve N), aynı düzlenmiş kum zemine sırayla konmuş ve bıraktıkları izlerin derinlikleri grafikte verilmiştir. K ve L cisimlerinin kuma değen yüzeylerinin alanları eşittir. L ve M cisimlerinin ağırlıkları eşittir.
**Buna göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 300" role="img" aria-label="Sütun grafiği: iz derinliği K için 2 cm, L için 4 cm, M için 6 cm, N için 6 cm"><text x="280" y="22" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Cisimlerin kumda bıraktığı iz derinliği</text><g fill="var(--vurgu)"><rect x="100" y="176" width="70" height="64"/><rect x="205" y="112" width="70" height="128"/><rect x="310" y="48" width="70" height="192"/><rect x="415" y="48" width="70" height="192"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="240" x2="490" y2="240"/><line x1="70" y1="240" x2="70" y2="40"/></g><g fill="currentColor" font-size="15" text-anchor="end"><text x="62" y="245">0</text><text x="62" y="213">1</text><text x="62" y="181">2</text><text x="62" y="149">3</text><text x="62" y="117">4</text><text x="62" y="85">5</text><text x="62" y="53">6</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="135" y="168">2 cm</text><text x="240" y="104">4 cm</text><text x="345" y="40">6 cm</text><text x="450" y="40">6 cm</text><text x="135" y="262">K</text><text x="240" y="262">L</text><text x="345" y="262">M</text><text x="450" y="262">N</text><text x="280" y="290">Cisim</text><text x="22" y="144" transform="rotate(-90 22 144)">İz derinliği (cm)</text></g></svg>`,
  secenekler: ["L'nin ağırlığı K'ninkinden küçüktür.","M'nin ağırlığı L'ninkinden büyüktür.","N'nin ağırlığı M'ninkine eşittir.","M'nin temas alanı L'ninkinden küçüktür."],
  dogru: 3,
  hatalar: [
    "Ters yön: alanlar eşitken izi daha derin olan cisim daha ağırdır; L'nin izi K'ninkinden derindir, bu yüzden L daha ağırdır.",
    "Verilen bilgiyi atlama: L ile M'nin ağırlıkları eşit olarak verilmiştir; M daha derin iz bırakıyorsa bunun nedeni ağırlık değil, daha küçük alandır.",
    "Eşit iz derinliğini eşit ağırlık sanma: M ile N aynı basıncı uygular ama alanları bilinmediğinden ağırlıkları hakkında bir şey söylenemez.",
    null
  ],
  aciklama: `Aynı zeminde iz derinliği basıncı gösterir. Kesin sonuç için bir değişkenin eşit olması gerekir.
Adım 1 (K ve L): Alanlar eşit, L'nin izi daha derin. Bu durumda L daha ağırdır. A yanlıştır.
Adım 2 (L ve M): Ağırlıklar eşit, M'nin izi daha derin (6 cm, 4 cm). Basınç farkı alandan kaynaklanır; M'nin temas alanı daha küçüktür. D doğrudur, B yanlıştır.
Adım 3 (M ve N): İz derinlikleri eşit, yani basınçlar eşittir; ama ağırlık ya da alan hakkında bir bilgi yoktur. C kesin değildir.
Sağlama: Aynı ağırlığı daha küçük alana yayan, zemine daha derin batar.
Cevap D.`
},
{
  id: "fen-kb-332",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiftçi, bahçesinin çevresine dikenli tel çekmiştir. Telin üzerinde belirli aralıklarla küçük ve sivri dikenler bulunur. Bahçeye girmeye çalışan bir inek, aynı kuvvetle tele yaslanınca dikenlerin batmasıyla rahatsız olup geri çekilmektedir.
I. Dikenler, ineğin tele uyguladığı kuvveti artırır.
II. Dikenler, telin ineğin derisine değen yüzeyini büyütür.
III. Dikenler, ineğin derisine uygulanan basıncı artırır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız III", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Alan ile basınç ilişkisini ters kurma: sivri dikenler temas yüzeyini büyütmez, küçültür.",
    "Kuvvet ile basıncı karıştırma: inek tele aynı kuvvetle yaslanmaktadır; dikenler kuvveti artırmaz, yalnızca basıncı artırır.",
    "Yüzeyi büyük sanma: dikenlerin ucu çok küçük bir alanla deriye değer; II yanlıştır."
  ],
  aciklama: `Basıncı artırmanın yollarından biri, aynı kuvveti daha küçük bir alana uygulamaktır. Sivri uçlar bunu sağlar.
Adım 1 (I): İnek aynı kuvvetle yaslanmaktadır. Dikenler tele uygulanan kuvveti değiştirmez. I yanlıştır.
Adım 2 (II): Dikenlerin uçları çok küçük alanlıdır; temas yüzeyi büyümez, küçülür. II yanlıştır.
Adım 3 (III): Aynı kuvvet çok küçük bir alana etki ettiğinden basınç artar; deri acır. III doğrudur.
Sık yapılan hata: Acıyı "daha büyük kuvvetle" açıklamak. Aynı kuvvet bile dar uçta çok daha büyük basınç oluşturur.
Cevap A.`
},
{
  id: "fen-kb-333",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aynı düzlenmiş kum zeminde üç tahta kutu (X, Y ve Z) denenmiştir. X ve Y kutularının kuma değen yüzeyleri eşittir; Y kutusu içine konan taşlarla X'ten daha ağırdır. Y ve Z kutuları eşit ağırlıktadır; Z kutusu Y'ye göre daha dar yüzeyi üzerine konmuştur. X, Y ve Z'nin kuma uyguladığı basınçlar sırasıyla P_{X}, P_{Y} ve P_{Z} ile gösterilmektedir.
**Buna göre basınçların büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "P_{Y} > P_{Z} > P_{X}",
    "P_{X} > P_{Y} > P_{Z}",
    "P_{Z} > P_{Y} > P_{X}",
    "P_{Z} > P_{X} > P_{Y}"
  ],
  dogru: 2,
  hatalar: [
    "Alan etkisini ters kurma: Z'nin yüzeyi daha dar olduğundan basıncı Y'ninkinden büyüktür; sıralamada Z ile Y yer değiştirmiştir.",
    "Her iki ilişkiyi ters kurma: ağırlığı fazla olanın ve alanı küçük olanın basıncı daha büyüktür; bu sıralama tamamen tersine çevrilmiştir.",
    null,
    "Ağırlık etkisini ters kurma: X ile Y'nin yüzeyi eşit olduğundan daha ağır olan Y'nin basıncı X'inkinden büyüktür."
  ],
  aciklama: `Sıralama yapmak için çiftleri tek değişkenle karşılaştırırız.
Adım 1 (X ve Y): Alanlar eşit, Y daha ağır. Bu durumda P_{Y} > P_{X}.
Adım 2 (Y ve Z): Ağırlıklar eşit, Z'nin yüzeyi daha dar. Bu durumda P_{Z} > P_{Y}.
Adım 3: İki sonucu birleştirirsek P_{Z} > P_{Y} > P_{X} olur.
Sağlama: Z hem Y'den hem de dolaylı olarak X'ten büyük basınç uygular; X en küçüktür.
Cevap C.`
},
{
  id: "fen-kb-334",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müzede sergilenen "Basınç ve Tasarım" panosunda araçların amaçları ile temas alanında yapılan değişiklikler eşleştirilmiştir.
**Aşağıdaki eşleştirmelerden hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Bilenmiş balta — kesmek için basıncı artırmak — alanı küçültmek",
    "Kayak — karda batmamak için basıncı azaltmak — alanı büyütmek",
    "Çatal uçları — yemeği delmek için basıncı artırmak — alanı büyütmek",
    "Bebek arabasının geniş tekerleği — çimde batmamak için basıncı azaltmak — alanı büyütmek"
  ],
  dogru: 2,
  hatalar: [
    "Bu eşleştirme doğrudur: balta ağzı inceltildikçe temas alanı küçülür ve kesmek için gereken basınç oluşur.",
    "Bu eşleştirme doğrudur: kayak ağırlığı geniş bir yüzeye yayar; basınç azalır ve kayakçı batmaz.",
    null,
    "Bu eşleştirme doğrudur: geniş tekerlek ağırlığı daha büyük bir alana yayar; basınç azalır ve araba çimde batmaz."
  ],
  aciklama: `Aletin amacına bakarak temas alanının nasıl değiştiğini kontrol ederiz: basıncı artırmak için alan küçültülür, azaltmak için alan büyütülür.
Adım 1: Baltanın ağzı keskin olunca alan küçülür, basınç artar. Eşleştirme doğrudur.
Adım 2: Kayak ve geniş tekerlek alanı büyütür, basıncı azaltır; batma azalır. Eşleştirmeler doğrudur.
Adım 3: Çatal uçları yemeği delmek için sivri yapılır; amaç basıncı artırmak, bunun yolu da alanı küçültmektir. "Alanı büyütmek" ifadesi yanlıştır.
Sık yapılan hata: "Basıncı artırmak" ile "alanı artırmak" ifadelerini aynı yönde düşünmek. Alan ile basınç zıt yönde değişir.
Cevap C.`
},
{
  id: "fen-kb-335",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir atölyede dört ayaklı ahşap bir tabure, düzlenmiş kum üzerinde durmaktadır. Usta, tabureye ağır bir demir kasa yerleştirmiş ve aynı anda tabureden ayaklardan ikisini sökmüştür. Ayaklar özdeştir ve ayakların ağırlıkları önemsenmeyecektir.
**Buna göre taburenin kuma uyguladığı basınç ile ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Basınç kesinlikle azalır.",
    "Basınç kesinlikle artar.",
    "Basınç kesinlikle değişmez.",
    "Basıncın nasıl değiştiği bilgilerle kesin söylenemez."
  ],
  dogru: 1,
  hatalar: [
    "Etkiyi tek değişkenle yorumlama: ayak sayısı azalınca alan küçülür; basınç azalmaz, artar.",
    null,
    "Etkilerin birbirini götürdüğünü sanma: kuvvet de alan da değişmiştir ama iki değişim de basıncı aynı yönde etkiler; basınç değişmez diyemezsin.",
    "Etkilerin zıt yönlü olduğunu sanma: ağırlık artarken alan küçülmüştür; iki değişim de basıncı artırdığı için sonuç kesindir."
  ],
  aciklama: `Ağırlık ve alan birlikte değişirse önce iki değişimin basıncı hangi yönde etkilediğine bakılır.
Adım 1 (ağırlık): Demir kasa konunca zemine uygulanan kuvvet artar. Kuvvet artınca basınç artar.
Adım 2 (alan): İki ayak sökülünce zemine değen alan küçülür. Alan küçülünce basınç artar.
Adım 3: İki etki aynı yöndedir; basınç kesinlikle artar.
Sık yapılan hata: Her iki değişkeni de "değişti, o hâlde kesin söylenemez" diye yorumlamak. Etkiler zıt yönde olsaydı belirsizlik doğardı; burada yön aynıdır.
Cevap B.`
},
{
  id: "fen-kb-336",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Selim, "Cismin ağırlığı arttıkça zemine uyguladığı basınç artar." hipotezini sınamak için özdeş tuğlalarla beş düzenek kurmuştur. Tuğlalar, düzeneklerde tabloda belirtilen biçimde üst üste konmuştur. Selim bu düzeneklerden yalnızca ikisini karşılaştırarak hipotezi sınayacaktır.
**Buna göre Selim hangi iki düzeneği karşılaştırmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Zemin</th><th>Üst üste tuğla sayısı</th><th>Zemine değen yüzey</th></tr><tr><td>1</td><td>Oyun hamuru</td><td>1</td><td>Geniş</td></tr><tr><td>2</td><td>Oyun hamuru</td><td>3</td><td>Geniş</td></tr><tr><td>3</td><td>Oyun hamuru</td><td>3</td><td>Dar</td></tr><tr><td>4</td><td>Kum</td><td>3</td><td>Geniş</td></tr><tr><td>5</td><td>Kum</td><td>1</td><td>Dar</td></tr></table>`,
  secenekler: ["1 ve 2", "2 ve 3", "2 ve 4", "4 ve 5"],
  dogru: 0,
  hatalar: [
    null,
    "Yanlış değişkeni sınama: 2 ile 3'te tuğla sayısı aynıdır, yalnızca yüzey farklıdır; bu çift temas alanının etkisini gösterir.",
    "Zemini değiştirme: 2 ile 4'te tuğla sayısı ve yüzey aynıdır, yalnızca zemin farklıdır; bu çift zeminin etkisini gösterir.",
    "İki değişkeni birden değiştirme: 4 ile 5'te hem tuğla sayısı hem yüzey farklıdır; iz farkının nedeni ayırt edilemez."
  ],
  aciklama: `Hipotezi sınayan iki düzenekte yalnızca bağımsız değişken (burada ağırlık, yani tuğla sayısı) farklı, diğerleri aynı olmalıdır.
Adım 1: Zemin, yüzey ve tuğla sayısı tabloda ayrı ayrı kontrol edilir.
Adım 2: 1 ve 2'de zemin (oyun hamuru) ve yüzey (geniş) aynıdır, yalnızca tuğla sayısı farklıdır. Bu çift uygundur.
Adım 3: 2-3 çiftinde yalnızca yüzey, 2-4 çiftinde yalnızca zemin farklıdır; 4-5 çiftinde ise hem tuğla sayısı hem yüzey farklıdır.
Sağlama: 1 ve 2 karşılaştırılırsa 3 tuğlalı düzeneğin daha derin iz bıraktığı görülür ve bu fark yalnızca ağırlıktan kaynaklanır.
Cevap A.`
},
{
  id: "fen-kb-337",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Kampçı Efe, çadırın kazıklarını sert toprağa çekiçle çakmaktadır. Kazığın üst ucu geniş ve düz, alt ucu sivri ve inceldir. Efe her vuruşta kazığın üst ucuna aynı büyüklükte kuvvet uygulamakta ve bu kuvvet kazık boyunca alt uca iletilmektedir.
I. Sivri uç, toprağa uygulanan kuvveti artırır.
II. Kazığın sivri ucundaki basınç, geniş üst ucundakinden büyüktür.
III. Alt ucun küçük alanı, kazığın toprağa girmesini kolaylaştırır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Basınç ile kuvveti karıştırma: kuvvet kazığın her noktasına aynen iletilir; sivri uç kuvveti değil basıncı artırır.",
    "Yarım bırakma: II doğrudur ama küçük alan basıncı artırdığı için kazığın girmesini kolaylaştırır; III de doğrudur.",
    "I'i doğru sanma: sivri uç kuvvet üretmez; I yanlıştır. III doğru olsa da seçenek bu yüzden elenir.",
    null
  ],
  aciklama: `Kuvvet kazık boyunca aynen iletilir; basıncı belirleyen, bu kuvvetin etki ettiği alandır.
Adım 1 (I): Efe'nin uyguladığı kuvvet aynı kalır; sivri uç bu kuvveti artırmaz. I yanlıştır.
Adım 2 (II): Aynı kuvvet alt uçta çok küçük, üst uçta geniş bir alana etki eder. Basınç alt uçta büyüktür. II doğrudur.
Adım 3 (III): Büyük basınç toprağı yarar; küçük alan kazığın girmesini kolaylaştırır. III doğrudur.
Sağlama: Kazığı ters çevirip geniş ucunu toprağa dayasaydın aynı vuruşla çok az girerdi.
Cevap D.`
},
{
  id: "fen-kb-338",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Mutfakta ekmek kesen Nehir, düz ağızlı bıçakla ekmeğin kabuğunu zor kesmiş; aynı bıçağı tırtıklı ağızlı ekmek bıçağıyla değiştirip aynı kuvvetle bastırınca ekmeği rahatça kesmiştir. İki bıçağın ağırlıkları eşittir.
**Tırtıklı bıçağın ekmeği daha rahat kesmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Tırtıklar, ekmeğe değen alanı küçülterek aynı kuvvetle daha büyük basınç oluşturur.",
    "Tırtıklar, bıçağın ağırlığını artırarak ekmeğe uygulanan kuvveti büyütür.",
    "Tırtıklar, ekmeğe değen alanı büyüterek basıncı artırır.",
    "Tırtıklar, uygulanan kuvveti değiştirmeden ekmeğe etki eden basıncı azaltır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kuvvet ile basıncı karıştırma: iki bıçağın ağırlıkları ve Nehir'in bastırdığı kuvvet eşittir; fark kuvvette değil temas alanındadır.",
    "Alan ile basınç ilişkisini ters kurma: alan büyüyünce basınç artmaz, azalır; tırtıllar ekmeğe değen alanı küçültür.",
    "Basıncın azaldığını sanma: ekmeğin kolay kesilmesi basıncın arttığını gösterir."
  ],
  aciklama: `Kesici aletlerde amaç basıncı artırmaktır. Kuvvet sabitken basınç, temas alanı küçüldükçe artar.
Adım 1: Düz bıçakta kesme kenarı ekmeğe uzun bir çizgi boyunca değer; alan görece büyüktür.
Adım 2: Tırtıklı bıçakta ekmeğe yalnızca tırtıkların sivri uçları değer; toplam temas alanı küçülür.
Adım 3: Aynı kuvvet daha küçük alana etki edince basınç artar ve ekmek kolay kesilir.
Sık yapılan hata: "Daha kolay kesiyorsa daha çok kuvvet uygulanıyordur." Burada kuvvet aynıdır; değişen, alandır.
Cevap A.`
},
{
  id: "fen-kb-339",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Okul bahçesindeki yumuşak kil zeminde, aynı model ve aynı numara spor ayakkabı giyen üç öğrenci sırayla durmuştur. Öğrencilerin ayakkabılarının kilde bıraktığı izlerin derinlikleri tabloda verilmiştir.
**Buna göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>İz derinliği</th></tr><tr><td>Ali</td><td>2,0 cm</td></tr><tr><td>Bora</td><td>3,5 cm</td></tr><tr><td>Cem</td><td>2,0 cm</td></tr></table>`,
  secenekler: [
    "Bora, Ali'den daha hafiftir.",
    "Bora'nın ayakkabısının zemine değen alanı daha küçüktür.",
    "Ali ile Cem'in ağırlıkları eşittir.",
    "Cem, Bora'dan daha ağırdır."
  ],
  dogru: 2,
  hatalar: [
    "Ters yön: ayakkabılar aynı olduğundan alanlar eşittir; izi daha derin olan Bora daha ağırdır.",
    "Verilen bilgiyi atlama: ayakkabılar aynı model ve numaradır; temas alanları eşittir.",
    null,
    "Ters yön: alanlar eşitken izi daha sığ olan hafiftir; Cem'in izi Bora'nınkinden sığ olduğundan Cem daha hafiftir."
  ],
  aciklama: `Aynı model ve numara ayakkabı, öğrencilerin zemine değen alanının eşit olduğu anlamına gelir. Alan eşitse iz derinliği doğrudan ağırlığı gösterir.
Adım 1: Bora'nın izi en derindir; en büyük basıncı o uygular. Alan eşit olduğundan Bora en ağırdır.
Adım 2: Ali ve Cem'in izleri eşittir; basınçları ve alanları eşit olduğundan ağırlıkları da eşittir.
Adım 3: Bora'nın Ali'den hafif olduğu ya da Cem'in Bora'dan ağır olduğu sonuçları ters yönlüdür.
Sağlama: Eşit alanda eşit iz, eşit ağırlık demektir.
Cevap C.`
},
{
  id: "fen-kb-340",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Pelin, içi dolu ve kapalı bir süt kutusunu önce yan yatırarak, sonra dik durarak aynı süngerin üzerine koymuştur. Dik durumda süngerin daha çok çöktüğünü görünce "Kutu dik durunca süngere daha büyük bir kuvvet uyguladı." demiştir. Kutunun içindeki süt miktarı değişmemiştir.
**Buna göre Pelin'in açıklaması için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kutu dik durunca ağırlığı azaldığı hâlde süngeri daha çok bastırmıştır; bu bir çelişkidir.",
    "Ağırlık değişmediğinden kuvvet aynıdır; çökmenin artması basıncın arttığını gösterir.",
    "Kutu dik durunca ağırlığı artmıştır ve süngere uyguladığı kuvvet büyümüştür.",
    "Süngerin çökmesi basınçla ilgili değildir; yalnızca süngerin cinsine bağlıdır."
  ],
  dogru: 1,
  hatalar: [
    "Çelişkili akıl yürütme: ağırlık azalırsa basınç ancak alan çok küçülürse artar; oysa kutunun ağırlığı hiç değişmemiştir.",
    null,
    "Konumu ağırlığa bağlama: kutunun yönünü değiştirmek ağırlığını değiştirmez; yalnızca temas alanı küçülür.",
    "Çökmeyi basıncın göstergesi olarak görmeme: aynı süngerde çökme miktarı basıncın büyüklüğünü gösterir."
  ],
  aciklama: `Süngerdeki çökme, aynı sünger üzerinde basıncın göstergesidir; kuvvetin değil.
Adım 1: Kutunun içindeki süt değişmediğinden ağırlığı aynıdır. Süngere uyguladığı kuvvet de aynıdır.
Adım 2: Kutu dikilince süngere değen yüzey küçülür. Aynı kuvvet daha küçük alana etki eder.
Adım 3: Basınç arttığı için sünger daha çok çöker.
Sık yapılan hata: "Daha çok çökmüş, öyleyse kuvvet büyüktür." Çökme, kuvvet ve alanın birlikte sonucudur; burada alan değişmiştir.
Cevap B.`
},
{
  id: "fen-kb-341",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sanat atölyesinde, doğrudan zemine konmuş bir heykel sonradan geniş ve ağır bir taş kaidenin üzerine alınmıştır. Kaidenin tamamı zemine oturmaktadır ve zemine değen yüzeyi, heykelin kendi tabanından çok daha geniştir. Heykelin ağırlığı ile kaidenin ağırlığı zemine birlikte binmektedir. Ağırlık ve yüzeydeki artışların miktarı bilinmemektedir.
**Buna göre heykel kaideye alındığında zemine uygulanan basınç ile ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Zemine uygulanan kuvvet arttığından basınç kesinlikle artar.","Temas yüzeyi büyüdüğünden zemindeki basınç kesinlikle azalır.","Kuvvet ve yüzey birlikte arttığından basınç kesinlikle değişmez.","Kuvvet ve yüzey birlikte arttığından basıncın değişimi kesin söylenemez."],
  dogru: 3,
  hatalar: [
    "Tek değişkene bakma: kuvvet artmıştır ama temas yüzeyi de büyümüştür; yüzeyin etkisi göz ardı edilmiştir.",
    "Tek değişkene bakma: yüzey büyümüştür ama kaidenin ağırlığı da zemine binmiştir; kuvvetin etkisi göz ardı edilmiştir.",
    "Aynı oranda değişim varsayma: ağırlık ve yüzeyin aynı oranda arttığı bilgisi verilmemiştir; basıncın değişmediği kesin değildir.",
    null
  ],
  aciklama: `Ağırlık ve temas alanı basıncı zıt yönlerde etkiler: kuvvet artınca basınç artar, alan büyüyünce azalır.
Adım 1 (kuvvet): Kaide de zemine yüklenir; zemine binen toplam kuvvet artmıştır.
Adım 2 (alan): Kaide heykelin kendi tabanından çok daha geniştir; zemine değen alan da büyümüştür.
Adım 3: İki etki zıt yönde olduğundan, hangisinin baskın çıkacağı (ya da dengelenip dengelenmediği) verilen bilgilerle belirlenemez.
Sağlama: Kaide hafif olsaydı alan etkisi baskın olur, basınç azalırdı; çok ağır olsaydı basınç artabilirdi.
Cevap D.`
},
{
  id: "fen-kb-342",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Ahmet'in oyuncak tankının zincir paletleri daha dar zincirlerle değiştirilmiş, ayrıca tankın içine bilye doldurularak ağırlığı artırılmıştır. Tank kum havuzunda eskisine göre çok daha fazla batmıştır.
I. Dar paletler, tankın kuma değen toplam yüzeyini küçültmüştür.
II. Tankın kuma uyguladığı basınç azalmıştır.
III. Tankın kuma uyguladığı kuvvet artmıştır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Yarım bırakma: I doğrudur ama içine bilye konduğu için tankın ağırlığı, dolayısıyla kuma uyguladığı kuvvet de artmıştır; III de doğrudur.",
    "Yarım bırakma: III doğrudur ama paletler daraldığı için kuma değen yüzey küçülmüştür; I de doğrudur.",
    null,
    "Basıncı ters okuma: yüzey küçülürken kuvvet de arttığı için basınç artmıştır, azalmamıştır; tank bu yüzden daha çok batmıştır. II yanlıştır."
  ],
  aciklama: `Kuvvet arttıkça ve temas yüzeyi küçüldükçe basınç artar. İki değişim de basıncı aynı yönde etkiliyorsa sonuç kesindir.
Adım 1 (I): Dar paletler kuma daha küçük bir alanla değer. I doğrudur.
Adım 2 (II): Yüzey küçülmüş, kuvvet de artmıştır; iki değişim de basıncı artırır. Basınç azalmamıştır. II yanlıştır.
Adım 3 (III): İçine bilye konduğundan tankın ağırlığı, yani kuma uyguladığı kuvvet artmıştır. III doğrudur.
Sağlama: Daha büyük kuvvet daha küçük alana etki edince basınç artar ve tank daha çok batar.
Cevap C.`
},
{
  id: "fen-kb-343",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Selma, katı basıncının cismin temas yüzeyine bağlı olduğunu göstermek için aynı tuğlayı sırayla geniş, orta ve dar yüzeyi üzerine yaş kile koymuş; her seferinde kildeki çökme miktarını ölçmüştür. Kil her denemeden önce düzlenmiştir.
**Buna göre bu deneydeki bağımsız, bağımlı ve kontrol edilen değişkenler sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Temas yüzeyi — çökme miktarı — tuğlanın ağırlığı ve zemin",
    "Çökme miktarı — temas yüzeyi — tuğlanın ağırlığı ve zemin",
    "Tuğlanın ağırlığı — temas yüzeyi — çökme miktarı ve zemin",
    "Temas yüzeyi — tuğlanın ağırlığı — çökme miktarı ve zemin"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bağımsız ile bağımlı değişkeni yer değiştirme: Selma yüzeyi bilerek değiştirir, çökmeyi ölçer; ölçülen çökme bağımlı değişkendir.",
    "Sınanan değişkeni yanlış seçme: hipotez temas yüzeyini sınıyor; tuğlanın ağırlığı sabit tutulur, değiştirilmez.",
    "Bağımlı değişkeni kontrol sanma: çökme miktarı ölçülen sonuçtur; sabit tutulamaz. Ağırlık ise sabit tutulması gerekendir."
  ],
  aciklama: `Bağımsız değişken deneyi yapanın bilerek değiştirdiği, bağımlı değişken ölçülen sonuç, kontrol değişkenleri ise sabit tutulan her şeydir.
Adım 1: Selma geniş, orta ve dar yüzeyi sırayla deniyor; değiştirdiği değişken temas yüzeyidir (bağımsız).
Adım 2: Her denemede kildeki çökmeyi ölçüyor; bağımlı değişken çökme miktarıdır.
Adım 3: Aynı tuğla (ağırlık) ve aynı düzlenmiş kil (zemin) kullanılıyor; bunlar kontrol değişkenleridir.
Sağlama: Ağırlık da değişseydi çökmenin nedeni ayırt edilemezdi.
Cevap A.`
},
{
  id: "fen-kb-344",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir doğa belgeselinde kedilerin av sırasındaki davranışı incelenmektedir. Kediler yürürken tırnaklarını pençelerinin içine çeker; bu sırada yumuşak pençe yastığı zemine geniş bir yüzeyle değer. Avına saldırırken ise tırnaklarını dışarı çıkarır ve avın etine yalnızca ince, sivri tırnak uçları değer. Belgesele göre kedi, iki durumda da aynı büyüklükte bir kuvvetle zemine ya da ava bastırmaktadır.
**Buna göre bu davranışla ilgili aşağıdaki yargılardan hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Tırnaklar çıkınca kedinin ağırlığı artar ve av daha çok bastırılır.",
    "Tırnaklar çıkınca temas alanı küçülür ve aynı kuvvet daha büyük basınç oluşturur.",
    "Tırnaklar içeri çekilince temas alanı küçülür ve yürürken basınç artar.",
    "Tırnaklar içeri çekilince kedinin ağırlığı azalır ve zemine uygulanan basınç küçülür."
  ],
  dogru: 1,
  hatalar: [
    "Ağırlığı değiştirme: tırnakların dışarı çıkması kedinin ağırlığını artırmaz; fark temas alanındadır.",
    null,
    "Alan ilişkisini ters kurma: tırnaklar çekilince pençe yastığı zemine geniş bir yüzeyle değer; alan büyür, basınç azalır.",
    "Ağırlığı değiştirme: tırnak çekmek kedinin ağırlığını azaltmaz; azalan şey temas edilen noktaların basıncıdır."
  ],
  aciklama: `Kedinin tırnakları, avlanırken basıncı artıran, yürürken ise ayakları korumaya yarayan bir tasarımdır.
Adım 1: Tırnaklar dışarı çıktığında avın etine yalnızca ince tırnak uçları değer. Temas alanı çok küçülür.
Adım 2: Kedinin aynı kuvveti çok küçük bir alana etki ettiğinden basınç artar ve tırnaklar ete batar.
Adım 3: Tırnaklar çekilince yürürken pençenin yumuşak yastığı zemine değer; alan büyür, basınç azalır.
Sağlama: Ağırlık her iki durumda da aynıdır; değişen yalnızca temas alanıdır.
Cevap B.`
},
{
  id: "fen-kb-345",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir inşaat deposunda özdeş beton bloklarla üç düzen kurulmuştur. K düzeninde tek blok geniş yüzeyi üzerinde durmaktadır. L düzeninde iki blok üst üste konmuş ve alttaki blok dar yüzeyi üzerinde durmaktadır. M düzeninde tek blok dar yüzeyi üzerinde durmaktadır. Üç düzen de aynı düz toprak zemindedir ve düzenlerin zemine uyguladığı basınçlar sırasıyla P_{K}, P_{L} ve P_{M} ile gösterilmektedir.
**Buna göre basınçların büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "P_{M} > P_{L} > P_{K}",
    "P_{K} > P_{M} > P_{L}",
    "P_{L} > P_{M} > P_{K}",
    "P_{L} > P_{K} > P_{M}"
  ],
  dogru: 2,
  hatalar: [
    "Ağırlık etkisini yok sayma: L ile M'nin zemine değen yüzeyi eşittir; L iki blok olduğundan daha ağırdır ve basıncı M'ninkinden büyüktür.",
    "Her iki ilişkiyi ters kurma: bu sıralama doğru sıralamanın tam tersidir; ağırlığı fazla olanın ve yüzeyi küçük olanın basıncı daha büyüktür.",
    null,
    "Alan etkisini ters kurma: M'nin yüzeyi K'ninkinden dar olduğundan M'nin basıncı K'ninkinden büyüktür."
  ],
  aciklama: `Sıralama yapmak için çiftleri, yalnızca bir değişkenin farklı olduğu biçimde karşılaştırırız.
Adım 1 (K ve M): İkisi de tek bloktur, ağırlıkları eşittir. M daha dar yüzey üzerinde durduğundan P_{M} > P_{K}.
Adım 2 (M ve L): İkisi de dar yüzeyi üzerinde durur, zemine değen yüzeyleri eşittir. L iki blok olduğundan daha ağırdır; P_{L} > P_{M}.
Adım 3: İki sonucu birleştirirsek P_{L} > P_{M} > P_{K} olur.
Sağlama: Zincirdeki her halka tek değişkenli bir çiftten çıkmıştır; sıralama kesindir.
Cevap C.`
},
{
  id: "fen-kb-346",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ayakkabı mağazasında Gül, kendi ağırlığı sabitken iki modeli denemiştir: düz ve geniş tabanlı bir sandalet ile ince ve sivri topuklu bir ayakkabı. Gül, ince topuklu ayakkabıyla durduğunda ayakkabının topuğu halının yumuşak lifleri arasına batmıştır.
I. İnce topuklu ayakkabının halıya değen yüzeyi daha küçüktür.
II. İnce topuklu ayakkabıyla halıya uygulanan basınç daha büyüktür.
III. İnce topuklu ayakkabıyla halıya uygulanan kuvvet daha büyüktür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Kuvvet ile basıncı karıştırma: Gül'ün ağırlığı değişmediği için halıya uygulanan kuvvet iki ayakkabıda da aynıdır; III yanlıştır.",
    "I'i gözden kaçırma: ince topuk halıya küçük bir alanla değer; I de doğrudur. III ise kuvvet ile basıncı karıştırır.",
    "Hepsini doğru sanma: kuvvet Gül'ün ağırlığıdır ve değişmemiştir; III yanlıştır."
  ],
  aciklama: `Ayakkabının topuğu inceldikçe temas alanı küçülür; kişinin ağırlığı değişmediği için kuvvet sabittir.
Adım 1 (I): İnce topuk zemine çok küçük bir alanla değer. I doğrudur.
Adım 2 (II): Aynı kuvvet küçük alana etki ettiğinden basınç artar; topuk halıya batar. II doğrudur.
Adım 3 (III): Zemine uygulanan kuvvet, Gül'ün ağırlığıdır ve iki ayakkabıda da aynıdır. III yanlıştır.
Sık yapılan hata: Batmayı "daha büyük kuvvete" bağlamak. Daha çok batmanın nedeni daha büyük basınçtır.
Cevap A.`
},
{
  id: "fen-kb-347",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Ağırlıkları birbirine eşit dört cisim (P, R, S ve T), aynı düzlenmiş yaş kum zemine sırayla konmuş ve bıraktıkları izlerin derinlikleri grafikte verilmiştir.
**Buna göre cisimlerin kuma değen yüzeylerinin alanları için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 300" role="img" aria-label="Sütun grafiği: iz derinliği P için 4 cm, R için 2 cm, S için 4 cm, T için 6 cm"><text x="280" y="22" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Cisimlerin kumda bıraktığı iz derinliği</text><g fill="var(--vurgu)"><rect x="100" y="112" width="70" height="128"/><rect x="205" y="176" width="70" height="64"/><rect x="310" y="112" width="70" height="128"/><rect x="415" y="48" width="70" height="192"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="240" x2="490" y2="240"/><line x1="70" y1="240" x2="70" y2="40"/></g><g fill="currentColor" font-size="15" text-anchor="end"><text x="62" y="245">0</text><text x="62" y="213">1</text><text x="62" y="181">2</text><text x="62" y="149">3</text><text x="62" y="117">4</text><text x="62" y="85">5</text><text x="62" y="53">6</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="135" y="104">4 cm</text><text x="240" y="168">2 cm</text><text x="345" y="104">4 cm</text><text x="450" y="40">6 cm</text><text x="135" y="262">P</text><text x="240" y="262">R</text><text x="345" y="262">S</text><text x="450" y="262">T</text><text x="280" y="290">Cisim</text><text x="22" y="144" transform="rotate(-90 22 144)">İz derinliği (cm)</text></g></svg>`,
  secenekler: [
    "R'nin alanı en küçüktür.",
    "T'nin alanı P'ninkinden büyüktür.",
    "S'nin alanı R'ninkinden büyüktür.",
    "P ile S'nin alanları eşittir."
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: ağırlıklar eşitken en sığ iz, en büyük alana aittir; R'nin izi en sığ olduğundan alanı en büyüktür.",
    "Ters yön: T'nin izi P'ninkinden derindir, yani basıncı büyüktür; ağırlıklar eşit olduğundan alanı daha küçüktür.",
    "Ters yön: S'nin izi R'ninkinden derindir; ağırlıklar eşitken daha derin iz daha küçük alandan kaynaklanır, yani S'nin alanı R'ninkinden küçüktür.",
    null
  ],
  aciklama: `Ağırlıklar eşit olduğunda iz derinliği yalnızca temas alanına bağlıdır: iz ne kadar derinse alan o kadar küçüktür.
Adım 1: İz derinlikleri T'de 6, P ve S'de 4, R'de 2 cm'dir.
Adım 2: En derin iz T'dedir; alanı en küçük olan T'dir. En sığ iz R'dedir; alanı en büyük olan R'dir.
Adım 3: P ve S aynı derinlikte iz bırakmış, ağırlıkları da eşit olduğundan alanları da eşittir.
Sağlama: Alanlar küçükten büyüğe T, P = S, R biçiminde sıralanır.
Cevap D.`
},
{
  id: "fen-kb-348",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir belediye, yaz aylarında kum üzerine kurulan geçici deniz kenarı etkinlik alanı için çeşitli önlemler almayı planlamaktadır.
**Aşağıdaki önlemlerden hangisinin amacı basıncı azaltmaktır?**`,
  gorsel: null,
  secenekler: [
    "Tahta keskisinin ağzını bileyerek ince ve keskin yapmak",
    "Fotoğraf panosunu asmak için duvara ince çivi çakmak",
    "İskelenin ayaklarını geniş çelik tabanlara oturtmak",
    "Çadır kazıklarının kuma kolay girmesi için uçlarını sivriltmek"
  ],
  dogru: 2,
  hatalar: [
    "Basıncı artırmaya yönelik uygulama: ince ağız temas alanını küçültür ve kesme için gereken basıncı artırır.",
    "Basıncı artırmaya yönelik uygulama: ince çivinin ucu küçük alanlıdır; basınç artar ve çivi duvara girer.",
    null,
    "Basıncı artırmaya yönelik uygulama: sivri uç alanı küçültür; kazık kuma kolay girer."
  ],
  aciklama: `Soruda amaç, basıncı azaltan uygulamayı bulmaktır. Basıncı azaltmanın yolu, temas alanını büyütmektir.
Adım 1: Keskinin ağzını inceltmek, çiviyi ve kazığı sivriltmek temas alanını küçültür; bu uygulamalar basıncı artırır.
Adım 2: İskele ayaklarını geniş çelik tabanlara oturtmak, aynı ağırlığın daha geniş bir alana yayılmasını sağlar. Basınç azalır, iskele kuma batmaz.
Sağlama: Üç uygulama "kesmek, delmek, saplamak" için; biri "batmamak" içindir.
Cevap C.`
},
{
  id: "fen-kb-349",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Furkan, "Cismin temas yüzeyi küçüldükçe zemine uyguladığı basınç artar." hipotezini sınamak istemiştir. Aynı tuğlayı önce geniş yüzeyi üzerine, yaklaşık 5 cm yükseklikten kuma bırakmış; sonra dar yüzeyi üzerine, elinde tutarak yavaşça kumun üzerine koymuştur. İki denemenin sonunda iz derinliklerini karşılaştırmıştır.
**Buna göre Furkan'ın deneyinin güvenilir olması için aşağıdakilerden hangisi yapılmalıdır?**`,
  gorsel: null,
  secenekler: ["Tuğla yerine daha hafif bir cisim kullanılmalıdır.","Tuğla her iki yüzeyde de düşürülmeden konmalıdır.","İz derinliği yerine tuğlanın ağırlığı ölçülmelidir.","Dar yüzey için daha yumuşak bir zemin seçilmelidir."],
  dogru: 1,
  hatalar: [
    "Gereksiz değişiklik: tuğlanın daha hafif olması temas alanı ile ilgili sonucu düzeltmez; asıl sorun bırakma biçimidir.",
    null,
    "Bağımlı değişkeni yanlış seçme: sınanan şey basınçtır, bunun göstergesi iz derinliğidir; ağırlık ölçmek bu hipotezi sınamaz.",
    "İki zemin kullanma: zemin sabit tutulmalıdır; farklı zemin iz farkının nedenini belirsizleştirir."
  ],
  aciklama: `Bir deneyin güvenilir olması için bağımsız değişken dışındaki bütün koşullar iki denemede aynı olmalıdır.
Adım 1: Furkan'ın bağımsız değişkeni temas yüzeyidir; bağımlı değişken iz derinliğidir.
Adım 2: Geniş yüzey yükseklikten bırakılmış, dar yüzey yavaşça konmuştur. Bırakma biçimi farklı olduğundan iz derinliğindeki fark yüzeyden mi bırakma biçiminden mi geldiği bilinmez.
Adım 3: Tuğla iki denemede de aynı biçimde, düşürülmeden yerleştirilirse yalnızca yüzey farklı kalır.
Sağlama: Zemin ve tuğla zaten aynıdır; düzeltilmesi gereken tek koşul bırakma biçimidir.
Cevap B.`
},
{
  id: "fen-kb-350",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir parkta çalışan bahçıvan, çimleri biçen makinenin dar tekerlekleri yerine, özdeş ağırlıkta, daha geniş tekerlekler takmıştır. Makine ıslak çimde eskisi gibi iz bırakmamaktadır.
I. Geniş tekerlekler, makinenin çime değen toplam yüzeyini büyütmüştür.
II. Geniş tekerlekler, makinenin çime uyguladığı kuvveti azaltmıştır.
III. Geniş tekerlekler, makinenin çime uyguladığı basıncı azaltmıştır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve III", "Yalnız I", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Yarım bırakma: yüzey büyüyünce basınç da azalır; III de doğrudur.",
    "Kuvvet ile basıncı karıştırma: tekerleklerin genişliği makinenin ağırlığını değiştirmez; kuvvet azalmaz.",
    "I'i gözden kaçırma: geniş tekerlek alanı büyüttüğü için I doğrudur; II ise kuvvet ile basıncı karıştırır."
  ],
  aciklama: `Tekerlek genişliği, temas alanını değiştirir; makinenin ağırlığını değiştirmez.
Adım 1 (I): Geniş tekerlekler çime daha geniş bir yüzeyle değer. I doğrudur.
Adım 2 (II): Makine eşit ağırlıktadır; çime uyguladığı kuvvet değişmemiştir. II yanlıştır.
Adım 3 (III): Aynı kuvvet büyük alana yayıldığından basınç azalır; makine çimde iz bırakmaz. III doğrudur.
Sağlama: Aynı yük, geniş yüzeyde daha az batar.
Cevap A.`
},
{
  id: "fen-kb-351",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Yağmurdan sonra yumuşayan bir bahçede, ağır yapılı doğa yürüyüşçüsü Yaşar geniş tabanlı bir botla, hafif yapılı Elif ise ince topuklu bir ayakkabıyla yürümüştür. Elif'in bıraktığı ayak izleri, Yaşar'ınkilerden daha derindir.
**Buna göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Elif'in ağırlığı, Yaşar'ın ağırlığından daha büyüktür.",
    "Elif'in ayakkabısının zemine değen yüzeyi kesinlikle daha küçüktür.",
    "Yaşar'ın zemine uyguladığı basınç, Elif'inkinden büyüktür.",
    "İki ayakkabının zemine değen yüzeylerinin alanları birbirine eşittir."
  ],
  dogru: 1,
  hatalar: [
    "Derin izi ağırlığa bağlama: Elif hafiftir; izin derin olması onun ağır olduğunu değil, temas yüzeyinin çok küçük olduğunu gösterir.",
    null,
    "Ters yön: izi daha derin olan Elif'in basıncı daha büyüktür, Yaşar'ın değil.",
    "Verilen bilgiyi atlama: iki ayakkabı farklı tasarımlıdır; ayrıca izlerin farklı olması yüzeylerin eşit olmadığını gösterir."
  ],
  aciklama: `Derin iz, o kişinin basıncının büyük olduğunu gösterir. Basınç büyük olsa da ağırlık ya da alan hakkında kesin sonuç için öbür değişkene bakılır.
Adım 1: Elif'in izi daha derindir; basıncı Yaşar'ınkinden büyüktür.
Adım 2: Elif daha hafiftir, yani zemine uyguladığı kuvvet daha küçüktür. Kuvveti küçük olduğu hâlde basıncı büyük olabilmesi için kuvvetin etki ettiği yüzeyin çok daha küçük olması gerekir.
Adım 3: Bu nedenle Elif'in ayakkabısının zemine değen yüzeyi Yaşar'ınkinden kesinlikle küçüktür.
Sık yapılan hata: "Derin iz bırakan ağırdır." Ağır olan her zaman daha çok batmaz; tabanı geniş olan hafif olandan az batabilir.
Cevap B.`
},
{
  id: "fen-kb-352",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Yürüyüş bastonlarının ucunda sert zemin için sivri bir metal uç bulunur. Karlı zeminde bastonun batmaması için bu ucun üstüne geniş bir plastik tabla takılır. Tablanın ağırlığı önemsizdir ve yürüyüşçü bastona her adımda aynı kuvvetle yaslanmaktadır.
**Buna göre tabla takılınca bastonun kara uyguladığı kuvvet ve basınç için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kuvvet azalır, basınç değişmez.",
    "Kuvvet azalır, basınç azalır.",
    "Kuvvet değişmez, basınç artar.",
    "Kuvvet değişmez, basınç azalır."
  ],
  dogru: 3,
  hatalar: [
    "Kuvveti değiştirme ve basıncı sabit sanma: tabla bastonun kara değen alanını büyütür; kuvvet değişmediği için basınç azalır.",
    "Kuvveti azaldı sanma: yürüyüşçü aynı kuvvetle yaslandığından kuvvet aynıdır; yalnızca basınç azalır.",
    "Alan ile basınç ilişkisini ters kurma: tabla alanı büyüttüğü için basınç artmaz, azalır.",
    null
  ],
  aciklama: `Tabla, bastonun kara değen yüzeyini büyütür; yürüyüşçünün bastona uyguladığı kuvvete bir şey eklemez.
Adım 1 (kuvvet): Yürüyüşçü aynı kuvvetle yaslanıyor ve tablanın ağırlığı önemsiz. Kara uygulanan kuvvet değişmez.
Adım 2 (alan): Tabla, bastonun kara değen yüzeyini sivri uca göre çok büyütür.
Adım 3 (basınç): Aynı kuvvet daha büyük alana yayılınca basınç azalır; baston kara batmaz.
Sağlama: Tabla çıkarılırsa aynı kuvvetle ucun karda derince battığı görülür.
Cevap D.`
},
{
  id: "fen-kb-353",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Nehir kenarındaki ıslak kil zeminde, çok büyük ama içi boş bir strafor kutu ile küçük ama içi dolu bir demir küp yan yana bırakılmıştır. Strafor kutu zemine neredeyse hiç iz bırakmamış, demir küp ise belirgin bir iz bırakmıştır.
**Bu gözlem aşağıdaki sonuçlardan hangisini destekler?**`,
  gorsel: null,
  secenekler: [
    "Hacmi büyük olan cisim, zemine daha büyük basınç uygular.",
    "Zemine değen yüzeyi büyük olan cismin ağırlığı daha büyüktür.",
    "Basıncı belirleyen, cismin hacmi değil ağırlığı ve zemine değen yüzeyidir.",
    "Demir küp, strafor kutudan daha geniş bir yüzeyle zemine değmektedir."
  ],
  dogru: 2,
  hatalar: [
    "Hacmi basınçla karıştırma: hacmi büyük olan strafor kutu neredeyse hiç iz bırakmamıştır; hacim basıncı belirlemez.",
    "Alan ile ağırlığı karıştırma: gözlemde yüzeyi büyük olan strafor kutu hafiftir; yüzey büyüklüğü ağırlığı göstermez.",
    null,
    "Verilen bilgiye aykırı çıkarım: demir küp küçüktür; temas yüzeyi strafor kutununkinden büyük değildir."
  ],
  aciklama: `Katı basıncı kuvvete (çoğu zaman ağırlığa) ve temas yüzeyine bağlıdır; hacim ya da cismin büyüklüğü doğrudan belirleyici değildir.
Adım 1: Strafor kutu çok büyük ama içi boş olduğundan çok hafiftir. Geniş yüzeyi de basıncı daha da azaltır.
Adım 2: Demir küp küçüktür ama dolu ve ağırdır. Ağırlığı büyük, temas yüzeyi küçüktür; basıncı büyüktür.
Adım 3: Büyük hacimli cismin basıncı küçük, küçük hacimli cismin basıncı büyük çıkmıştır. Basıncı belirleyen hacim değil, ağırlık ve temas yüzeyidir.
Sık yapılan hata: Büyük cismin her zaman daha çok bastığını sanmak. Basıncı belirleyen hacim değil, ağırlık ve temas yüzeyidir.
Cevap C.`
},
{
  id: "fen-kb-354",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir doğa belgeselinde canlıların vücut yapıları ile insanların kullandığı bazı araçların basınçla ilişkisi anlatılmaktadır. Belgeselin sunucusu, dört canlı ya da araç örneğinin yararını ayrı ayrı açıklamış; izleyen öğrenciler bu açıklamaların bilimsel olarak doğru olup olmadığını tartışmıştır. Tartışmada, canlının ya da aracın ağırlığının sabit kaldığı, yalnızca zemine ya da hedefe değen yüzeyin değiştiği varsayılmıştır.
**Aşağıdaki yargılardan hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Ren geyiğinin geniş toynakları, geyiğin karda batmasını azaltır.",
    "Ağaçkakanın sivri gagası, ağaca uygulanan kuvveti artırır.",
    "Kedinin sivri tırnakları, kedinin ağırlığını artırarak avı bastırır.",
    "Geniş tabanlı balıkçı çizmesi, çamura uygulanan kuvveti azaltır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kuvvet ile basıncı karıştırma: gaga ağaca değen alanı küçülttüğü için basıncı artırır; ağaçkakanın uyguladığı kuvvet aynı kalır.",
    "Ağırlık ile basıncı karıştırma: tırnak kedinin ağırlığını değiştirmez; küçük alan sayesinde basıncı artırır.",
    "Kuvvet ile basıncı karıştırma: çizmenin geniş tabanı kişinin ağırlığını değiştirmez; çamura uygulanan kuvvet aynıdır, azalan basınçtır."
  ],
  aciklama: `Canlı ve araç yapılarında temas alanı değişir; ağırlık (kuvvet) değişmez. Etkilenen büyüklük basınçtır.
Adım 1: Ren geyiğinin geniş toynakları ağırlığı büyük bir yüzeye yayar; basınç azalır ve geyik karda az batar. Bu yargı doğrudur.
Adım 2: Sivri gaga ve sivri tırnak, temas alanını küçülterek basıncı artırır; kuvveti ya da ağırlığı artırmaz.
Adım 3: Geniş tabanlı çizme çamura uygulanan kuvveti azaltmaz; kuvvet kişinin ağırlığıdır, azalan basınçtır.
Sağlama: Dört yargıdan yalnızca birinde "basınç" ve "alan" ilişkisi doğru kurulmuştur.
Cevap A.`
},
{
  id: "fen-kb-355",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bilim insanları, Dünya'da kuma batmadan ilerleyen bir gezgin robotu Mars'a göndermiştir. Mars'ın çekim kuvveti Dünya'nınkinden zayıftır. Robotun parçaları, yük miktarı ve tekerlekleri değişmemiştir.
**Buna göre robotun Mars'ta kütlesi, ağırlığı ve zemine uyguladığı basınç için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kütlesi ve ağırlığı azalır; basıncı değişmez.",
    "Kütlesi ve ağırlığı değişmez; basıncı azalır.",
    "Kütlesi değişmez; ağırlığı ve basıncı azalır.",
    "Kütlesi azalır; ağırlığı değişmez, basıncı azalır."
  ],
  dogru: 2,
  hatalar: [
    "Kütleyi değişir sanma: kütle madde miktarıdır ve yere göre değişmez; ayrıca ağırlık azaldığı için basınç da azalır.",
    "Ağırlığı değişmez sanma: çekim zayıflayınca ağırlık azalır; ağırlık azalınca basınç da azalır.",
    null,
    "Kütle ile ağırlığı karıştırma: azalan kütle değil ağırlıktır."
  ],
  aciklama: `Kütle, madde miktarıdır ve gezegenden gezegene değişmez. Ağırlık, cisme etki eden çekim kuvvetidir; çekim zayıfsa ağırlık azalır.
Adım 1 (kütle): Robotun parçaları ve yükü aynıdır; kütlesi değişmez.
Adım 2 (ağırlık): Mars'ın çekimi zayıf olduğundan robotun ağırlığı azalır.
Adım 3 (basınç): Tekerlek yüzeyi aynıdır. Zemine uygulanan kuvvet (ağırlık) azaldığından basınç azalır.
Sık yapılan hata: "Hafifledi, kütlesi de azaldı." Hafiflemek ağırlığın azalmasıdır; kütle aynıdır.
Cevap C.`
},
{
  id: "fen-kb-356",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun kum havuzunda, öğrenciler dört kutuyu (K, L, M ve N) düzlenmiş kuma tek tek yerleştirmiş ve kutuları ikişer ikişer karşılaştırmıştır. K ve M kutularının kuma değen yüzeyleri eşittir; K, M'den daha ağırdır. M ve L kutularının ağırlıkları eşittir; L'nin kuma değen yüzeyi M'ninkinden daha geniştir. L ve N kutularının kuma değen yüzeyleri eşittir; N, L'den daha hafiftir. Kutuların kuma uyguladığı basınçlar sırasıyla P_{K}, P_{L}, P_{M} ve P_{N} ile gösterilmektedir.
**Buna göre basınçların büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "P_{M} > P_{K} > P_{L} > P_{N}",
    "P_{K} > P_{L} > P_{M} > P_{N}",
    "P_{K} > P_{M} > P_{N} > P_{L}",
    "P_{K} > P_{M} > P_{L} > P_{N}"
  ],
  dogru: 3,
  hatalar: [
    "Ağırlık etkisini ters kurma: K ile M'nin yüzeyi eşittir ve K daha ağırdır; bu durumda P_{K} > P_{M} olur.",
    "Alan etkisini ters kurma: L'nin yüzeyi geniştir ve ağırlığı M ile eşittir; bu durumda L'nin basıncı M'ninkinden küçüktür.",
    "N ile L'yi karıştırma: yüzeyler eşitken daha hafif olan N'nin basıncı da daha küçüktür; N en sonda olmalıdır.",
    null
  ],
  aciklama: `Sıralama için her çifte yalnızca bir değişkenin farklı olduğu karşılaştırmayı uygularız; sonra sonuçları zincir gibi bağlarız.
Adım 1 (K ve M): Yüzeyler eşit, K daha ağır. Bu durumda P_{K} > P_{M}.
Adım 2 (M ve L): Ağırlıklar eşit, L'nin yüzeyi geniş. Yüzey büyüdüğü için P_{M} > P_{L}.
Adım 3 (L ve N): Yüzeyler eşit, N daha hafif. Bu durumda P_{L} > P_{N}.
Adım 4: Zinciri birleştirirsek P_{K} > P_{M} > P_{L} > P_{N} olur.
Sağlama: Dört ilişki de bu sıralamada sağlanır.
Cevap D.`
},
{
  id: "fen-kb-357",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir tarım kooperatifi, ıslak ve yumuşak tarlada çalışan dört makinesinde (K, L, M ve N) tabloda belirtilen değişiklikleri yapmıştır. Her değişikliğin miktarı bilinmemektedir. Kooperatif, hangi makinenin tarlaya uyguladığı basıncın kesinlikle arttığını ve hangisinin kesinlikle azaldığını bulmak istemektedir.
**Buna göre basıncı kesinlikle artan ve basıncı kesinlikle azalan makineler sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Makine</th><th>Yapılan değişiklik</th><th>Ağırlığı</th><th>Zemine değen yüzeyi</th></tr><tr><td>K</td><td>Ağır bir pulluk takıldı, lastikler genişletildi</td><td>Arttı</td><td>Arttı</td></tr><tr><td>L</td><td>Depo boşaltıldı, çift lastikler tek lastiğe indirildi</td><td>Azaldı</td><td>Azaldı</td></tr><tr><td>M</td><td>Lastikler daha dar olanlarla değiştirildi</td><td>Değişmedi</td><td>Azaldı</td></tr><tr><td>N</td><td>Depo boşaltıldı, lastikler genişletildi</td><td>Azaldı</td><td>Arttı</td></tr></table>`,
  secenekler: ["K ve N", "M ve N", "L ve M", "N ve M"],
  dogru: 1,
  hatalar: [
    "Belirsiz satırı kesin sanma: K'de ağırlık arttı ama yüzey de arttı; etkiler zıt yönlüdür, basıncın artacağı kesin değildir.",
    null,
    "Zıt etkili satırı kesin sanma: L'de ağırlık da yüzey de azaldı; basıncın nasıl değiştiği kesin değildir. Ayrıca M'nin basıncı artar, azalmaz.",
    "Yönleri ters okuma: N'de ağırlık azalıp yüzey arttığı için basınç kesinlikle azalır; M'de ağırlık aynıyken yüzey azaldığı için basınç kesinlikle artar."
  ],
  aciklama: `Ağırlık (kuvvet) arttıkça basınç artar; temas yüzeyi büyüdükçe basınç azalır. Basıncın kesin yönünü bulmak için iki değişimin aynı yönde etkili olması ya da birinin sabit kalması gerekir.
Adım 1 (K): Ağırlık arttı (basınç artmaya yönelir), yüzey de arttı (basınç azalmaya yönelir). Etkiler zıt; sonuç belirsiz.
Adım 2 (L): Ağırlık azaldı (basınç azalmaya yönelir), yüzey de azaldı (basınç artmaya yönelir). Etkiler zıt; sonuç belirsiz.
Adım 3 (M): Ağırlık aynı kaldı, yüzey azaldı. Aynı kuvvet daha küçük alana etki eder; basınç kesinlikle artar.
Adım 4 (N): Ağırlık azaldı, yüzey arttı. İki değişim de basıncı azaltır; basınç kesinlikle azalır.
Sağlama: Kesin sonuç veren yalnızca M (artar) ve N (azalır) satırlarıdır.
Cevap B.`
},
{
  id: "fen-kb-358",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Sevgi, özdeş tahta bloklarla dört düzenek kurmuştur. Düzeneklerin hepsi aynı ıslak kum zemindedir. Bloklar, tabloda belirtildiği kadar sayıda üst üste ve belirtilen yüzeyleri üzerine konmuştur. Sevgi, dört düzeneğin kumda bıraktığı iz derinliklerini ölçüp tabloya yazmıştır.
**Buna göre aşağıdaki sonuçlardan hangisi bu tablodan kesinlikle çıkarılabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Üst üste blok sayısı</th><th>Zemine değen yüzey</th><th>İz derinliği</th></tr><tr><td>1</td><td>1</td><td>Geniş</td><td>1,0 cm</td></tr><tr><td>2</td><td>2</td><td>Geniş</td><td>2,0 cm</td></tr><tr><td>3</td><td>2</td><td>Dar</td><td>4,5 cm</td></tr><tr><td>4</td><td>4</td><td>Geniş</td><td>4,0 cm</td></tr></table>`,
  secenekler: [
    "2 ve 3 karşılaştırılırsa temas alanının etkisi tek başına görülür; çünkü ikisinde de blok sayısı aynıdır.",
    "1 ve 3 karşılaştırılırsa ağırlığın etkisi tek başına görülür; çünkü ikisi de aynı zemindedir.",
    "1 ve 4 karşılaştırılırsa temas alanının etkisi tek başına görülür; çünkü ikisi de geniş yüzeylidir.",
    "2 ve 4 karşılaştırılırsa temas alanının etkisi tek başına görülür; çünkü ikisi de geniş yüzeylidir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "İki değişkeni birden değiştirme: 1 ile 3'te hem blok sayısı hem yüzey farklıdır; ağırlığın etkisi tek başına görülemez.",
    "Yanlış değişkeni sınama: 1 ile 4'te yüzey aynıdır (geniş), blok sayısı farklıdır; bu çift ağırlığın etkisini gösterir, temas alanının değil.",
    "Yanlış değişkeni sınama: 2 ile 4'te yüzey aynıdır (geniş), blok sayısı farklıdır; bu çift ağırlığın etkisini gösterir, temas alanının değil."
  ],
  aciklama: `Bir değişkenin etkisini görmek için yalnızca o değişkenin farklı, diğerlerinin aynı olduğu iki düzeneği karşılaştırırız. Zemin hepsinde aynıdır.
Adım 1 (2 ve 3): Her ikisinde de 2 blok vardır; yalnızca yüzey farklıdır (geniş, dar). Dar yüzeyde iz derindir; alan küçülünce basınç artmıştır. A doğrudur.
Adım 2 (1 ve 3): Hem blok sayısı hem yüzey farklıdır; etkiler ayrılamaz. B yanlıştır.
Adım 3 (1 ve 4, 2 ve 4): Yüzey ikisinde de geniştir; yalnızca blok sayısı farklıdır, yani bunlar ağırlığın etkisini gösterir. C ve D temas alanı için kullanılamaz.
Sağlama: Seçilen çift, bağımsız değişkenin (temas alanı) tek değiştiği çifttir.
Cevap A.`
},
{
  id: "fen-kb-359",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir mühendis, çamurlu bir arazide çalışacak yük taşıma aracını yeniden tasarlamaktadır. Yeni tasarımda araç daha fazla yük taşıyacak şekilde büyütülmüş, bunun için aracın ağırlığı artmış; aynı zamanda tekerlek sayısı ve her tekerleğin genişliği artırılmıştır. Artışların tam miktarı bilinmemektedir.
I. Aracın çamura uyguladığı basınç kesinlikle azalır.
II. Aracın çamura uyguladığı kuvvet artar.
III. Basıncın nasıl değişeceği verilen bilgilerle kesin söylenemez.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["II ve III", "Yalnız I", "I ve II", "Yalnız III"],
  dogru: 0,
  hatalar: [
    null,
    "Tek değişkene bakma: temas yüzeyi büyümüş ama ağırlık da artmıştır; ağırlığın etkisi göz ardı edilmiştir.",
    "Kesin sonuç sanma: I kesin ifade kullanır, oysa artışların miktarı bilinmediğinden basıncın azalacağı kesin değildir.",
    "Yarım bırakma: III doğrudur ama araç ağırlaştığı için çamura uygulanan kuvvet de artar; II de doğrudur."
  ],
  aciklama: `Ağırlık artarsa basınç artmaya, alan büyürse basınç azalmaya eğilimlidir. İki etki zıt yöndeyse sonuç artışların miktarına bağlıdır.
Adım 1 (II): Aracın ağırlığı arttığı için çamura uygulanan kuvvet artar. II doğrudur.
Adım 2 (I): Alan büyümüştür ama ağırlık da artmıştır. Artış miktarları bilinmediğinden basıncın azalacağı kesin değildir. I yanlıştır.
Adım 3 (III): Zıt yönlü iki değişim vardır ve miktarlar bilinmemektedir; basıncın nasıl değişeceği kesin söylenemez. III doğrudur.
Sağlama: Tekerlekler çok genişlerse basınç azalabilir; çok az genişlerse artabilir. Bu belirsizlik III'ü doğrular.
Cevap A.`
},
{
  id: "fen-kb-360",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Fen kulübündeki dört öğrenci, "Cismin ağırlığı arttıkça zemine uyguladığı basınç artar." hipotezini sınamak için aynı kartondan yapılmış bir kutuyu ve düzlenmiş un ile kum dolu iki kabı kullanacaktır. Kutu boşken ve içi kumla doluyken tartılabilmektedir. Öğrencilerin planları aşağıda verilmiştir.
**Buna göre hangi öğrencinin planı hipotezi sınamak için uygundur?**`,
  gorsel: null,
  secenekler: [
    "Ayşe: Boş kutuyu geniş yüzeyi üzerine una, dolu kutuyu dar yüzeyi üzerine una koyup izleri karşılaştırır.",
    "Burak: Boş kutuyu geniş yüzeyi üzerine una, dolu kutuyu geniş yüzeyi üzerine kuma koyup izleri karşılaştırır.",
    "Cansu: Boş kutuyu geniş yüzeyi üzerine una, aynı kutuyu dolu hâlde geniş yüzeyi üzerine una koyup izleri karşılaştırır.",
    "Doruk: Boş kutuyu geniş yüzeyi üzerine una, dolu kutuyu geniş yüzeyi üzerine una koyup izler yerine kutuların ağırlıklarını karşılaştırır."
  ],
  dogru: 2,
  hatalar: [
    "İki değişkeni birden değiştirme: Ayşe hem ağırlığı hem temas yüzeyini değiştirmiştir; izdeki farkın nedeni ayırt edilemez.",
    "Zemini değiştirme: Burak hem ağırlığı hem zemin türünü değiştirmiştir; un ve kum farklı çökeceği için sonuç güvenilmez.",
    null,
    "Bağımlı değişkeni yanlış seçme: Doruk basıncın göstergesi olan izi değil, ağırlığı ölçmektedir; hipotez sınanmaz."
  ],
  aciklama: `Hipotezi sınamak için bağımsız değişken (ağırlık) değiştirilir, bağımlı değişken (iz derinliği) ölçülür, diğer her şey sabit tutulur.
Adım 1: Sabit tutulacaklar temas yüzeyi ve zemindir. Değişecek olan yalnızca kutunun ağırlığıdır.
Adım 2: Ayşe yüzeyi, Burak zemini de değiştirdiği için elenir.
Adım 3: Doruk, iz yerine ağırlığı karşılaştırdığından basıncı ölçmemiş olur. Cansu aynı kutuyu aynı yüzeyi üzerinde, aynı una koyup yalnızca ağırlığı değiştirmiş ve izi karşılaştırmıştır.
Sağlama: Cansu'nun planında farklı çıkan iz, yalnızca ağırlıktan kaynaklanır.
Cevap C.`
},
{
  id: "fen-kb-361",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Pazardan dönen Nilay, üç poşeti sırayla aynı elinin aynı parmaklarında taşımıştır. A poşeti hafiftir ve ince bir ipten saplıdır. B poşeti A'dan daha ağırdır ve A ile aynı ince ip sapa sahiptir. C poşeti B ile aynı ağırlıktadır ama geniş, yassı bir saplıdır.
**Buna göre sapların Nilay'ın eline uyguladığı kuvvet ve basınç için aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "A'nın sapı ele en küçük kuvveti ve en küçük basıncı uygular.",
    "C'nin sapının ele uyguladığı kuvvet, B'ninkinden büyüktür.",
    "A'nın sapının ele uyguladığı basınç, C'ninkinden büyüktür.",
    "B'nin sapının ele uyguladığı basınç, diğer iki sapınkinden büyüktür."
  ],
  dogru: 3,
  hatalar: [
    "Yarım doğru: kuvvet en küçük A'dadır ama A'nın sapı ince, C'nin sapı geniştir; A'nın basıncının C'ninkinden küçük olduğu kesin değildir.",
    "Eşit kuvveti farklı sanma: B ve C aynı ağırlıkta olduğundan ele uyguladıkları kuvvetler eşittir; C'ninki daha büyük değildir.",
    "Belirsiz karşılaştırmayı kesin sanma: A hafif ama sapı ince, C ağır ama sapı geniştir; iki etki zıt yönlüdür, hangisinin basıncının büyük olduğu bilinemez.",
    null
  ],
  aciklama: `Kuvvet poşetin ağırlığına, basınç ise hem ağırlığa hem de sapın ele değen yüzeyine bağlıdır. Yargıları tek değişkenli çiftlerle sınarız.
Adım 1 (A ve B): Sap aynı, yani yüzey eşit; B daha ağır. Bu durumda B'nin basıncı A'nınkinden büyüktür.
Adım 2 (B ve C): Ağırlıklar eşit; C'nin sapı geniş. Yüzey büyüyünce basınç azalır, yani B'nin basıncı C'ninkinden büyüktür.
Adım 3 (A ve C): Hem ağırlık hem yüzey farklıdır; etkiler zıt olduğundan bu çift karşılaştırılamaz. Bu yüzden A ve C şıkları kesin değildir; B şıkkı ise kuvvetler eşit olduğu için yanlıştır.
Sık yapılan hata: Basıncı yalnızca ağırlığa ya da yalnızca yüzeye bakarak yorumlamak.
Cevap D.`
},
{
  id: "fen-kb-362",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, hafif ve ağır iki cismi sırayla farklı temas yüzeyleri üzerine aynı kum zemine koymuş ve bıraktıkları izlerin derinliklerini çizgi grafiğinde göstermiştir. Cisimlerin yüzeyleri her iki cisim için de aynı alanlarda denenmiştir.
**Buna göre bu grafikle ilgili aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 300" role="img" aria-label="Çizgi grafiği: temas yüzeyi 2, 4 ve 6 birim karede ağır cismin iz derinliği 6, 4,5 ve 3,5 cm; hafif cismin iz derinliği 5, 3 ve 2 cm"><text x="260" y="20" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Temas yüzeyinin alanı ve iz derinliği</text><g stroke="currentColor" stroke-width="2"><line x1="70" y1="240" x2="490" y2="240"/><line x1="70" y1="240" x2="70" y2="34"/></g><polyline points="150,60 280,105 410,135" fill="none" stroke="var(--vurgu)" stroke-width="3"/><polyline points="150,90 280,150 410,180" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/><g fill="var(--vurgu)"><circle cx="150" cy="60" r="5"/><circle cx="280" cy="105" r="5"/><circle cx="410" cy="135" r="5"/></g><g fill="var(--vurgu2)"><circle cx="150" cy="90" r="5"/><circle cx="280" cy="150" r="5"/><circle cx="410" cy="180" r="5"/></g><g stroke-width="3"><line x1="300" y1="46" x2="332" y2="46" stroke="var(--vurgu)"/><line x1="300" y1="70" x2="332" y2="70" stroke="var(--vurgu2)" stroke-dasharray="8 5"/></g><g fill="currentColor" font-size="15"><text x="340" y="51">Ağır cisim</text><text x="340" y="75">Hafif cisim</text></g><g fill="currentColor" font-size="15" text-anchor="end"><text x="62" y="245">0</text><text x="62" y="215">1</text><text x="62" y="185">2</text><text x="62" y="155">3</text><text x="62" y="125">4</text><text x="62" y="95">5</text><text x="62" y="65">6</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="150" y="262">2</text><text x="280" y="262">4</text><text x="410" y="262">6</text><text x="280" y="290">Temas yüzeyinin alanı (birim kare)</text><text x="20" y="140" transform="rotate(-90 20 140)">İz derinliği (cm)</text></g></svg>`,
  secenekler: [
    "Temas alanı büyüdükçe iki cismin de iz derinliği artar.",
    "Eşit temas alanlarında ağır cismin izi daha derindir.",
    "Hafif cismin izi, hiçbir yüzeyde ağır cismin herhangi bir yüzeydeki izinden daha derin değildir.",
    "İz derinliği, cismin temas alanına bağlı değildir."
  ],
  dogru: 1,
  hatalar: [
    "Alan ile basınç ilişkisini ters kurma: grafikte alan büyüdükçe iki cismin de izi sığlaşır.",
    null,
    "Grafiği tam okumama: hafif cismin 2 birim karedeki izi (5 cm), ağır cismin 6 birim karedeki izinden (3,5 cm) daha derindir.",
    "Grafiği okumama: iki çizgi de alan arttıkça düşmektedir; iz derinliği alana bağlıdır."
  ],
  aciklama: `Grafikte iki çizgi, iki cismin farklı temas alanlarındaki iz derinliğini gösterir. Eşit alanlardaki noktaları karşılaştırırız.
Adım 1: Alan büyüdükçe iki çizgi de aşağı iner; alan büyüyünce iz sığlaşır. A ve D yanlıştır.
Adım 2: Aynı alanda (2, 4 ve 6 birim kare) ağır cismin çizgisi hep üsttedir; ağır cismin izi daha derindir. B doğrudur.
Adım 3: Hafif cismin 2 birim karedeki izi 5 cm'dir; ağır cismin 6 birim karedeki izi ise 3,5 cm'dir. Yani hafif cismin izi, ağır cismin bir izinden derindir. C yanlıştır.
Sağlama: Alanı aynı tutarak ağırlığı artırırsan iz derinleşir; ağırlığı aynı tutarak alanı büyütürsen iz sığlaşır.
Cevap B.`
},
{
  id: "fen-kb-363",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Ilgın, ağır okul çantasını taşırken ince askıların omzunu acıttığını fark etmiş ve askıların omza gelen bölümüne geniş, yumuşak bir ped takmıştır. Pedin ağırlığı önemsenmeyecektir.
I. Ped, çantanın ağırlığını azaltır.
II. Ped, askının omza değen yüzeyini büyütür.
III. Ped, askının omza uyguladığı kuvveti azaltır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "Yalnız I", "Yalnız II", "II ve III"],
  dogru: 2,
  hatalar: [
    "Ağırlığı değiştirme: ped çantanın içindeki eşyaları azaltmaz; çantanın ağırlığı aynıdır, I yanlıştır.",
    "Ağırlığı değiştirme: I yanlıştır; ped çantanın ağırlığını azaltmaz. Doğru yargı II'dir.",
    null,
    "Kuvvet ile basıncı karıştırma: askının omza uyguladığı kuvvet çantanın ağırlığıdır ve ped bunu azaltmaz; azalan basınçtır. III yanlıştır."
  ],
  aciklama: `Geniş ped, omza değen yüzeyi büyütür; çantanın ağırlığını ve askının uyguladığı kuvveti değiştirmez.
Adım 1 (I): Çantanın içindeki eşyalar aynı kaldığından ağırlığı da aynıdır. I yanlıştır.
Adım 2 (II): Geniş ped askı ile omuz arasındaki temas yüzeyini büyütür. II doğrudur.
Adım 3 (III): Askının omza uyguladığı kuvvet çantanın ağırlığına eşittir ve değişmez. III yanlıştır. Değişen basınçtır.
Sık yapılan hata: Rahatlamayı "çanta hafifledi" diye yorumlamak. Rahatlamanın nedeni daha küçük basınçtır.
Cevap C.`
},
{
  id: "fen-kb-364",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Mina, aynı tuğlayı aynı yüzeyi üzerine dört farklı zemine sırayla koymuş ve tuğlanın zeminde bıraktığı izin derinliğini ölçmüştür. Tuğla her zeminde aynı biçimde, düşürülmeden bırakılmıştır. Sonuçlar tabloda verilmiştir.
**Buna göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Zemin</th><th>İz derinliği</th></tr><tr><td>Sert tahta</td><td>Neredeyse iz yok</td></tr><tr><td>Kuru kum</td><td>0,8 cm</td></tr><tr><td>Un</td><td>1,5 cm</td></tr><tr><td>Oyun hamuru</td><td>2,4 cm</td></tr></table>`,
  secenekler: [
    "Tuğlanın uyguladığı basınç, unda kuru kumdakinden büyüktür.",
    "Tuğlanın zemine uyguladığı basınç dört zeminde de aynıdır.",
    "Tuğlanın ağırlığı oyun hamurunda en büyüktür.",
    "Tuğlanın temas yüzeyi sert tahtada en küçüktür."
  ],
  dogru: 1,
  hatalar: [
    "Zeminin yumuşaklığını basınç sanma: aynı tuğla aynı yüzeyi üzerinde olduğundan her zemine aynı basıncı uygular; fark zeminin ne kadar çöktüğündedir.",
    null,
    "Zemin türünü ağırlığa bağlama: tuğla aynıdır, ağırlığı her zeminde aynıdır.",
    "Yüzeyi zemine bağlama: aynı yüzeyi üzerine konduğundan temas alanı her zeminde aynıdır."
  ],
  aciklama: `Bu deneyde tuğla da, tuğlanın yüzeyi de sabittir. Değişen yalnızca zemindir.
Adım 1: Aynı tuğlanın ağırlığı (kuvveti) ve temas yüzeyi dört denemede de aynıdır.
Adım 2: Kuvvet ve alan aynı olduğundan tuğlanın zemine uyguladığı basınç da her denemede aynıdır.
Adım 3: İz derinliklerinin farklı olması, zeminlerin farklı sertlikte olduğunu gösterir; basıncın farklı olduğunu değil.
Sık yapılan hata: "İz daha derinse basınç daha büyüktür." Bu yalnızca zemin aynıyken geçerlidir.
Cevap B.`
},
{
  id: "fen-kb-365",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Görselde aynı kum zemine yerleştirilmiş özdeş tuğlalardan oluşan üç düzen gösterilmiştir. K düzeninde tek tuğla en dar yüzeyi üzerinde ayakta durmaktadır. L düzeninde iki tuğla üst üste ve geniş yüzeyleri üzerinde konmuştur. M düzeninde tek tuğla geniş yüzeyi üzerinde yatmaktadır. Düzenlerin kuma uyguladığı basınçlar sırasıyla P_{K}, P_{L} ve P_{M} ile gösterilmektedir.
**Buna göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 200" role="img" aria-label="Kum zeminde K: tek tuğla ayakta; L: iki tuğla üst üste yatay; M: tek tuğla yatay"><text x="260" y="30" fill="currentColor" font-size="15" text-anchor="middle">Özdeş tuğlalar, aynı kum zemin</text><rect x="20" y="150" width="480" height="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g fill="var(--vurgu)" stroke="currentColor" stroke-width="2"><rect x="60" y="70" width="36" height="80"/><rect x="210" y="114" width="80" height="36"/><rect x="210" y="78" width="80" height="36"/><rect x="390" y="114" width="80" height="36"/></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="78" y="190">K</text><text x="250" y="190">L</text><text x="430" y="190">M</text></g></svg>`,
  secenekler: [
    "P_{K} > P_{M} ve P_{L} > P_{M}",
    "P_{M} > P_{K} ve P_{M} > P_{L}",
    "P_{M} > P_{K} ve P_{L} > P_{M}",
    "P_{K} > P_{M} ve P_{M} > P_{L}"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yönleri tersine okuma: M tek tuğla ve geniş yüzeyi üzerindedir; K aynı ağırlıkta ama daha dar yüzeyde, L ise aynı yüzeyde ama daha ağırdır. M'nin basıncı ikisinden de küçüktür, büyük değil.",
    "K ile M'yi ters okuma: L ile M'de yüzey eşittir ve L daha ağırdır, yani P_{L} > P_{M} doğrudur; ama K ile M'de ağırlık eşittir ve K daha dar yüzeydedir, yani P_{K} > P_{M}'dir.",
    "L ile M'yi ters okuma: K ile M'de ağırlık eşittir ve K daha dar yüzeydedir, yani P_{K} > P_{M} doğrudur; ama L iki tuğladır ve M ile aynı yüzeydedir, yani P_{L} > P_{M}'dir."
  ],
  aciklama: `Önce M ile diğer düzenleri tek değişkenli çiftler hâlinde karşılaştırırız.
Adım 1 (K ve M): Aynı ağırlık (tek tuğla); K daha küçük yüzey üzerinde. Bu durumda P_{K} > P_{M}.
Adım 2 (L ve M): Aynı yüzey (geniş); L iki tuğla olduğundan daha ağır. Bu durumda P_{L} > P_{M}.
Adım 3: Her iki sonuç da M'nin basıncının en küçük olduğunu gösterir; doğru şık bu iki ilişkiyi birlikte veren A'dır.
Sık yapılan hata: K ile L'yi de karşılaştırmaya çalışmak. K ile L'de hem ağırlık hem yüzey farklıdır; bu çiftin sıralaması bilinemez ve soruda da gerekmez.
Cevap A.`
},
{
  id: "fen-kb-366",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Zımba makinesinin ucundan çıkan zımba teli, ince ve sivri biçimdedir. Bir öğrenci zımbanın üst kısmına parmağıyla bastırdığında bu kuvvet teli kâğıda doğru iter. Tel kâğıt destesini delip karşıdan çıkar.
I. Telin sivri olması, kâğıda etki eden kuvveti artırmaz.
II. Telin sivri ucundaki basınç, tel gövdesinin üst kısmındaki basınçtan küçüktür.
III. Telin ucunun kâğıda değen küçük alanı, telin kâğıdı delmesini kolaylaştırır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "Yarım bırakma: I doğrudur ama küçük alan basıncı artırdığı için telin kâğıdı delmesi kolaylaşır; III de doğrudur.",
    "Yarım bırakma: III doğrudur ama sivri uç kuvveti artırmaz, yalnızca basıncı artırır; I de doğrudur.",
    "II'yi doğru sanma: aynı kuvvet sivri uçta çok küçük bir alana etki eder; sivri uçtaki basınç, üst kısımdakinden büyüktür, küçük değil.",
    null
  ],
  aciklama: `Zımbaya bastırılan kuvvet tele geçer; basıncı belirleyen, bu kuvvetin etki ettiği yüzeyin büyüklüğüdür.
Adım 1 (I): Sivri uç, tele geçen kuvveti büyütmez; yalnızca aynı kuvveti çok küçük bir alana toplar. I doğrudur.
Adım 2 (II): Aynı kuvvet üst kısımda geniş, uçta çok küçük bir alana etki eder. Basınç uçta üst kısımdakinden büyüktür. II yanlıştır.
Adım 3 (III): Küçük alan büyük basınç oluşturur ve kâğıdı deler. III doğrudur.
Sağlama: Zımba telinin geniş, küt bir ucu olsaydı aynı bastırma kâğıdı delmezdi.
Cevap D.`
},
{
  id: "fen-kb-367",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fen kulübü, aynı düzlenmiş kum zeminde bir kartondan kutuyla dört deneme yapmıştır. Kutu boş (hafif) ya da içi kumla dolu (ağır) hâlde, geniş ya da dar yüzeyi üzerine konmuştur.
1. deneme: Boş kutu, geniş yüzeyi üzerinde; iz 1 cm.
2. deneme: Dolu kutu, geniş yüzeyi üzerinde; iz 2 cm.
3. deneme: Dolu kutu, dar yüzeyi üzerinde; iz 4 cm.
4. deneme: Boş kutu, dar yüzeyi üzerinde; iz 3 cm.
**Buna göre aşağıdaki sonuçlardan hangisi karşılaştırılan denemelerden __çıkarılamaz__?**`,
  gorsel: null,
  secenekler: [
    "1 ve 2 karşılaştırılırsa ağırlık arttıkça basıncın arttığı sonucuna varılır.",
    "2 ve 3 karşılaştırılırsa yüzey küçüldükçe basıncın arttığı sonucuna varılır.",
    "1 ve 4 karşılaştırılırsa yüzey küçüldükçe basıncın arttığı sonucuna varılır.",
    "1 ve 3 karşılaştırılırsa ağırlık arttıkça basıncın arttığı sonucuna varılır."
  ],
  dogru: 3,
  hatalar: [
    "Bu sonuç çıkarılabilir: 1 ve 2'de yüzey aynıdır (geniş), yalnızca ağırlık farklıdır; iz derinleştiği için basınç artmıştır.",
    "Bu sonuç çıkarılabilir: 2 ve 3'te ağırlık aynıdır (dolu kutu), yalnızca yüzey farklıdır; yüzey küçülünce iz derinleştiği için basınç artmıştır.",
    "Bu sonuç çıkarılabilir: 1 ve 4'te ağırlık aynıdır (boş kutu), yalnızca yüzey farklıdır; yüzey küçülünce iz derinleştiği için basınç artmıştır.",
    null
  ],
  aciklama: `Bir sonuca varmak için karşılaştırılan iki denemede yalnızca ilgili değişkenin farklı olması gerekir.
Adım 1 (1 ve 2): Yüzey aynı (geniş), ağırlık farklı. Ağırlığın etkisi tek başına görülür; sonuç çıkarılabilir.
Adım 2 (2 ve 3): Ağırlık aynı (dolu kutu), yüzey farklı. Yüzeyin etkisi tek başına görülür; sonuç çıkarılabilir.
Adım 3 (1 ve 4): Ağırlık aynı (boş kutu), yüzey farklı. Yüzeyin etkisi tek başına görülür; sonuç çıkarılabilir.
Adım 4 (1 ve 3): Hem ağırlık (boş, dolu) hem yüzey (geniş, dar) farklıdır. İzdeki farkın hangi değişkenden geldiği ayrılamaz; ağırlığın etkisi bu çiftten çıkarılamaz.
Sağlama: Çıkarılamayan sonuç, iki değişkenin birlikte değiştiği çifte dayanan sonuçtur.
Cevap D.`
},
{
  id: "fen-kb-368",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir teknoloji müzesinde sergilenen aletler, katı basıncını artırma ya da azaltma ilkesine göre ikişer ikişer eşleştirilerek bir panoda gösterilecektir. Panonun başlığı "Aynı ilkeyi kullanan iki araç" olarak belirlenmiştir.
**Aşağıdaki eşleştirmelerden hangisi bu başlığa uygundur?**`,
  gorsel: null,
  secenekler: ["Dikiş iğnesinin ucu — devenin geniş ayağı","Kayak takımı — panodaki sivri raptiye","Traktör paleti — bebek arabasının geniş tekerleği","Kazmanın sivri ucu — tankın geniş paleti"],
  dogru: 2,
  hatalar: [
    "İlkeleri zıt eşleştirme: dikiş iğnesi alanı küçülterek basıncı artırır, deve ayağı alanı büyüterek basıncı azaltır.",
    "İlkeleri zıt eşleştirme: kayak alanı büyüterek basıncı azaltır, raptiye alanı küçülterek basıncı artırır.",
    null,
    "İlkeleri zıt eşleştirme: kazma ucu alanı küçülterek basıncı artırır, tank paleti alanı büyüterek basıncı azaltır."
  ],
  aciklama: `Aynı ilkeyi kullanan iki araç, temas alanını aynı yönde değiştiren ve basıncı aynı yönde etkileyen araçlardır.
Adım 1: Dikiş iğnesi, raptiye ve kazma ucu temas alanını küçültür; basıncı artırır.
Adım 2: Deve ayağı, kayak, tırtıllı traktör paleti, geniş tekerlek ve tank paleti temas alanını büyütür; basıncı azaltır.
Adım 3: Her şıkta bir aracı artıran, bir aracı azaltan grup eşleşmiştir; yalnızca C'de iki araç da alanı büyütür.
Sağlama: Tırtıllı palet ve geniş tekerlek ağırlığı büyük bir yüzeye yayarak yumuşak zemine batmayı önler.
Cevap C.`
},
{
  id: "fen-kb-369",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, aynı süngere üç farklı cisim (K, L ve M) koymuş ve süngerdeki çökmeyi ölçmüştür. Grafikte her çubuğun altına cismin ağırlığı ile süngere değen yüzeyi yazılmıştır. Öğrenci bu verilerle hesap yapmayacak, yalnızca değişkenlerin etkisini yorumlayacaktır.
**Buna göre grafikten aşağıdaki sonuçlardan hangisi kesinlikle çıkarılabilir?**`,
  gorsel: `<svg viewBox="0 0 520 300" role="img" aria-label="Sütun grafiği: sünger çökmesi K için 4 mm, L için 2 mm, M için 6 mm; K 10 N ve 20 cm², L 10 N ve 40 cm², M 30 N ve 40 cm²"><text x="280" y="22" fill="currentColor" font-size="15" text-anchor="middle">Grafik: Süngerin çökme miktarı</text><g fill="var(--vurgu)"><rect x="100" y="112" width="80" height="128"/><rect x="220" y="176" width="80" height="64"/><rect x="340" y="48" width="80" height="192"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="240" x2="450" y2="240"/><line x1="70" y1="240" x2="70" y2="40"/></g><g fill="currentColor" font-size="15" text-anchor="end"><text x="62" y="245">0</text><text x="62" y="213">1</text><text x="62" y="181">2</text><text x="62" y="149">3</text><text x="62" y="117">4</text><text x="62" y="85">5</text><text x="62" y="53">6</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="140" y="104">4 mm</text><text x="260" y="168">2 mm</text><text x="380" y="40">6 mm</text><text x="140" y="262">K</text><text x="260" y="262">L</text><text x="380" y="262">M</text><text x="140" y="284">10 N, 20 cm²</text><text x="260" y="284">10 N, 40 cm²</text><text x="380" y="284">30 N, 40 cm²</text><text x="20" y="144" transform="rotate(-90 20 144)">Çökme (mm)</text></g></svg>`,
  secenekler: ["K ile L karşılaştırılınca yüzey büyüdükçe çökmenin azaldığı görülür.","K ile M karşılaştırılınca ağırlığın etkisi tek başına görülür.","L ile M karşılaştırılınca temas yüzeyinin etkisi tek başına görülür.","M'nin süngere değen yüzeyi, K'nin süngere değen yüzeyinden küçüktür."],
  dogru: 0,
  hatalar: [null,"İki değişkeni birden değiştirme: K ile M'de hem ağırlık hem yüzey farklıdır; ağırlığın etkisi tek başına görülemez.","Yanlış değişkeni sınama: L ile M'de yüzey aynıdır (40 cm²), yalnızca ağırlık farklıdır; bu çift ağırlığın etkisini gösterir.","Grafiği yanlış okuma: M'nin süngere değen yüzeyi 40 cm², K'ninki 20 cm²dir; M'nin yüzeyi daha büyüktür."],
  aciklama: "Grafiği yorumlarken hangi çiftte yalnızca bir değişkenin farklı olduğuna bakılır.\nAdım 1 (K ve L): Ağırlıklar eşit (10 N), yüzey K'de küçük, L'de büyük. Yüzey büyüyünce çökme 4 mm'den 2 mm'ye azalmıştır. A doğrudur.\nAdım 2 (K ve M): Hem ağırlık hem yüzey farklıdır; etkiler ayrılamaz. B yanlıştır.\nAdım 3 (L ve M): Yüzeyler eşit (40 cm²), ağırlıklar farklıdır. Bu çift ağırlığın etkisini gösterir; yüzeyin değil. C yanlıştır.\nAdım 4: M'nin yüzeyi 40 cm², K'ninki 20 cm²dir; M'nin yüzeyi daha büyüktür. D yanlıştır.\nSağlama: Sorunun asıl ölçütü, yalnızca tek değişkenin farklı olduğu çifti bulmaktır.\nCevap A."
},
{
  id: "fen-kb-370",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir doğa parkında, yumuşak turba zemin üzerine kurulan yürüyüş yolu uzun ve geniş ahşap kalaslardan oluşmaktadır. Ziyaretçiler doğrudan toprağa basmayıp kalasların üzerinde yürür. Kalaslar sayesinde ziyaretçi ayakları turbaya batmamaktadır.
I. Kalaslar, ziyaretçilerin toplam ağırlığını azaltır.
II. Kalaslar, ziyaretçilerin zemine uyguladığı kuvveti azaltır.
III. Kalaslar, aynı kuvveti daha geniş bir yüzeye yayarak turbaya uygulanan basıncı azaltır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Ağırlığı değişir sanma: kalaslar ziyaretçilerin ağırlığını azaltmaz; I yanlıştır.",
    null,
    "I'i doğru sanma: III doğru olsa da ağırlığın azalacağı yargısı yanlıştır.",
    "Kuvvet ile basıncı karıştırma: turbaya uygulanan toplam kuvvet (ziyaretçi ve kalasların ağırlığı) azalmaz; azalan basınçtır. II yanlıştır."
  ],
  aciklama: `Geniş kalaslar, temas alanını büyütür; ağırlığı ve kuvveti azaltmaz.
Adım 1 (I): Ziyaretçilerin ağırlığı kalaslardan etkilenmez. I yanlıştır.
Adım 2 (II): Turbaya uygulanan kuvvet en az ziyaretçilerin ağırlığı kadardır; kalaslar bunu azaltmaz. II yanlıştır.
Adım 3 (III): Kalaslar ağırlığı turbaya daha geniş bir yüzeyden iletir; basınç azalır ve ayaklar batmaz. III doğrudur.
Sık yapılan hata: "Batmıyorsa kuvvet azalmış olmalı." Batmamanın nedeni küçük basınçtır; kuvvet aynı kalır.
Cevap B.`
},
{
  id: "fen-kb-371",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Emre, ağırlıkları bilinmeyen iki bidonu (K ve L) aynı düzlenmiş kum zemine sırayla koymuştur. K bidonu, L bidonundan daha geniş bir yüzeyi üzerinde durmaktadır. K bidonu kumda L bidonundan daha derin bir iz bırakmıştır.
**Buna göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bidon</th><th>Kuma değen yüzey</th><th>İz derinliği</th></tr><tr><td>K</td><td>L'ninkinden geniş</td><td>3 cm</td></tr><tr><td>L</td><td>K'ninkinden dar</td><td>1 cm</td></tr></table>`,
  secenekler: [
    "L'nin ağırlığı K'ninkinden büyüktür.",
    "K'nin basıncı L'ninkinden küçüktür.",
    "K'nin ağırlığı L'ninkinden kesinlikle büyüktür.",
    "K ile L'nin ağırlıkları eşittir."
  ],
  dogru: 2,
  hatalar: [
    "Ters yön: K'nin yüzeyi geniş olduğu hâlde izi derin çıkmıştır; bu ancak K'nin çok daha ağır olmasıyla açıklanır.",
    "Derin izi küçük basınç sanma: K'nin izi daha derindir; basıncı L'ninkinden büyüktür.",
    null,
    "Eşit ağırlık varsayma: ağırlıklar eşit olsaydı geniş yüzeyli K'nin basıncı daha küçük, izi daha sığ olurdu."
  ],
  aciklama: `Aynı zeminde iz derinliği basıncı gösterir. K'nin izi daha derin, yani basıncı büyüktür; ama yüzeyi de daha geniştir.
Adım 1: K'nin yüzeyi geniş olduğundan, ağırlıkları eşit olsaydı K'nin basıncı L'ninkinden küçük, izi daha sığ olurdu. Oysa izi daha derindir.
Adım 2: Geniş yüzey basıncı küçülttüğü hâlde basınç büyük çıkmıştır; demek ki K'nin ağırlığı L'ninkinden fazladır.
Adım 3: Bu nedenle K, L'den kesinlikle daha ağırdır.
Sık yapılan hata: Alan farkını görmeyip yalnızca iz derinliğine bakmak. Burada alan bilgisi, ağırlık hakkında kesin sonuç vermemizi sağlar.
Cevap C.`
},
{
  id: "fen-kb-372",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Kumsala kurulan hafif bir aydınlatma direği, dört ince metal ayağı üzerinde durmaktadır ve ayakları kuma batmaktadır. Belediye, direğin kuma batmasını azaltmak için dört öneri sunmuştur. Direğin ağırlığı ve aydınlatma lambası değişmeyecektir.
**Buna göre aşağıdaki önerilerden hangisi direğin kuma batmasını azaltır?**`,
  gorsel: null,
  secenekler: [
    "Direğin üzerine ek ağırlık eklenmesi ve ayakların aynı bırakılması",
    "Ayak sayısını aynı bırakıp ayakların boyunun uzatılması",
    "Ayakların uçlarının daha da inceltilip sivriltilmesi",
    "Ayakların altına geniş ve hafif plastik tabanlar takılması"
  ],
  dogru: 3,
  hatalar: [
    "Basıncı artıran öneri: ek ağırlık kuvveti artırır, basınç artar ve direk daha çok batar.",
    "Ayak uzunluğunu temas yüzeyiyle karıştırma: ayakların uzaması temas yüzeyini büyütmez; ayakların kuma değen alanı aynı kalır.",
    "Basıncı artıran öneri: sivri uç temas alanını küçültür, basıncı artırır; direk daha çok batar.",
    null
  ],
  aciklama: `Batmayı azaltmak için basıncı azaltmak gerekir. Direğin ağırlığı değişmeyeceğinden tek yol temas alanını büyütmektir.
Adım 1: Ek ağırlık kuvveti artırır; basınç artar ve batma çoğalır.
Adım 2: Ayakları uzatmak ya da sivriltmek alanı büyütmez. Sivriltmek alanı daha da küçültür.
Adım 3: Ayakların altına geniş tabanlar takınca aynı kuvvet daha büyük bir yüzeye yayılır, basınç azalır ve direk daha az batar.
Sağlama: Tabanlar hafif olduğu için direğin toplam ağırlığı pek değişmez.
Cevap D.`
},
{
  id: "fen-kb-373",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir depoda dört özdeş taşıma arabası (K, L, M ve N) düz toprak zeminde durmaktadır. K ve M arabaları boştur, L ve N arabaları aynı miktarda yük taşımaktadır. K ve L arabalarının dört özdeş tekerleği, M ve N arabalarının ise altı özdeş tekerleği vardır. Arabaların zemine uyguladığı basınçlar sırasıyla P_{K}, P_{L}, P_{M} ve P_{N} ile gösterilmektedir.
**Buna göre aşağıdaki karşılaştırmalardan hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["P_{L} > P_{N}", "P_{K} > P_{N}", "P_{M} > P_{K}", "P_{N} > P_{L}"],
  dogru: 0,
  hatalar: [
    null,
    "İki değişkeni birden değiştirme: K boş ve dört tekerlekli, N yüklü ve altı tekerleklidir; hem ağırlık hem alan farklı olduğundan karşılaştırılamaz.",
    "Alan ile basınç ilişkisini ters kurma: M'nin tekerlek sayısı fazladır, alanı büyüktür; boş araçlarda P_{M} < P_{K} olur.",
    "Ters yön: L ve N aynı yükü taşır; L'nin tekerlek sayısı az, alanı küçüktür, bu yüzden L'nin basıncı daha büyüktür."
  ],
  aciklama: `Karşılaştırmayı yaparken yalnızca bir değişkenin farklı olduğu çiftlere bakarız.
Adım 1 (L ve N): İkisi de aynı yükü taşır (ağırlıkları eşit). L'nin 4, N'nin 6 tekerleği vardır; L'nin temas alanı küçüktür. Bu durumda P_{L} > P_{N}.
Adım 2 (K ve M): İkisi de boştur; M'nin 6 tekerleği olduğundan alanı büyüktür. Bu durumda P_{K} > P_{M}.
Adım 3 (K ve N): Boş-dört tekerlekli araç ile yüklü-altı tekerlekli araç karşılaştırılıyor; hem ağırlık hem alan farklı olduğundan kesin sonuç yoktur.
Sağlama: Seçeneklerde yalnızca A tek değişkenli çiftten çıkar.
Cevap A.`
},
{
  id: "fen-kb-374",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Ceren'in bisikletinin selesi dar ve serttir; uzun yolda oturunca rahatsız olmaktadır. Babası seleyi, ağırlığı önemsenmeyecek kadar hafif, daha geniş ve yumuşak bir sele ile değiştirmiştir.
I. Yeni sele, Ceren'in sele üzerine uyguladığı kuvveti azaltır.
II. Yeni sele, Ceren'in ağırlığının azalmasını sağlar.
III. Yeni sele, temas yüzeyini büyüttüğü için sele üzerinde oluşan basıncı azaltır.
**Buna göre yukarıdaki yargılardan hangileri __yanlıştır__?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Yarım bırakma: I yanlıştır ama Ceren'in ağırlığı seleyle değişmez; II de yanlıştır.",
    null,
    "III'ü yanlış sanma: geniş sele temas alanını büyütür ve basıncı azaltır; III doğrudur.",
    "III'ü yanlış sanma: III doğrudur; ayrıca I da yanlıştır, ama bu seçenek I'i kapsamaz."
  ],
  aciklama: `Soru, yanlış yargıları arıyor. Geniş sele temas alanını büyütür; kuvvet ya da ağırlığı değiştirmez.
Adım 1 (I): Ceren'in sele üzerine uyguladığı kuvvet, ağırlığına bağlıdır ve değişmez. I yanlıştır.
Adım 2 (II): Sele Ceren'in ağırlığını değiştiremez. II yanlıştır.
Adım 3 (III): Alan büyüyünce aynı kuvvetten oluşan basınç azalır; rahatlama bu yüzden olur. III doğrudur.
Sağlama: Yanlış olan yargılar kuvvet ve ağırlıkla ilgili olanlardır.
Cevap B.`
},
{
  id: "fen-kb-375",
  kazanim: "F.8.3.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Yağmurdan sonra ıslanan bir çimenlikte dört arkadaş sırayla durmuştur. Melis ve Gizem hafif, Tuba ve Seda ise ağırdır. Melis ve Tuba ince topuklu ayakkabı, Gizem ve Seda düz tabanlı ayakkabı giymiştir. Hafif olanlar kendi aralarında, ağır olanlar da kendi aralarında aynı ağırlıktadır. İnce topuklu ayakkabıların ve düz tabanlı ayakkabıların zemine değen yüzeyleri kendi aralarında eşittir. Dört kişinin çimenlikte bıraktığı izlerin derinlikleri karşılaştırılacaktır.
**Buna göre aşağıdaki yargılardan hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Melis'in izi Seda'nınkinden daha derindir.",
    "Seda'nın izi Melis'inkinden daha derindir.",
    "En derin iz Seda'nındır.",
    "En derin iz Tuba'nın, en sığ iz Gizem'indir."
  ],
  dogru: 3,
  hatalar: [
    "Karşılaştırılamayan çifti seçme: Melis hafif ama topuğu dar, Seda ağır ama tabanı geniş; hangisinin izi derin belli değildir.",
    "Karşılaştırılamayan çifti seçme: Seda ağır ama tabanı geniş, Melis hafif ama topuğu dar; hangisinin izi derin belli değildir.",
    "Tek değişkene bakma: Seda ağırdır ama tabanı geniştir; Tuba da ağır ve ince topukludur, bu yüzden en derin iz Tuba'nındır.",
    null
  ],
  aciklama: `Çiftleri tek değişkenle karşılaştırırız.
Adım 1 (Tuba ve Seda): Aynı ağırlıktalar; Tuba'nın alanı küçük. Tuba'nın basıncı Seda'nınkinden büyüktür.
Adım 2 (Tuba ve Melis): Aynı ayakkabı; Tuba daha ağır. Tuba'nın basıncı Melis'inkinden büyüktür. Tuba, hem Seda'dan hem Melis'ten büyüktür ve Gizem'den de büyüktür (hem ağır hem dar alanlı). Demek ki en derin iz Tuba'nındır.
Adım 3 (Gizem): Gizem hem Melis'ten (aynı ağırlık, geniş alan) hem Seda'dan (aynı alan, hafif) küçük basınç uygular; en sığ iz Gizem'indedir.
Adım 4: Melis ile Seda arasında hafif-dar ve ağır-geniş zıtlığı vardır; bu çift karşılaştırılamaz.
Cevap D.`
}
);
