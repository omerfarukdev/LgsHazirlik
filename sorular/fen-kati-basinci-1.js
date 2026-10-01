// Fen Bilimleri — Katı Basıncı: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["kati-basinci"] = window.LGS_BANK["kati-basinci"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "fen-kb-101",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Basıncın birimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Newton", "Pascal", "Kilogram", "Metrekare"],
  dogru: 1,
  hatalar: [
    "Kuvvet ile basıncı karıştırma: newton kuvvetin birimidir; basınç ise kuvvetin yüzeye nasıl dağıldığını anlatır.",
    null,
    "Kütle ile basıncı karıştırma: kilogram, cismin madde miktarını yani kütlesini ölçen birimdir.",
    "Alan ile basıncı karıştırma: metrekare yüzey alanının birimidir; alan basıncı etkiler ama basıncın birimi değildir."
  ],
  aciklama: `Basınç, bir yüzeyin birim alanına dik olarak etki eden kuvvettir.
Adım 1: Seçeneklerdeki birimlerin hangi niceliğe ait olduğunu belirle. Newton kuvvetin, kilogram kütlenin, metrekare alanın birimidir.
Adım 2: Basıncın birimi, bilim insanı Blaise Pascal'ın adıyla anılan pascaldır ve Pa ile gösterilir.
Sık yapılan hata: Basıncı kuvvetle aynı şey sanıp newton demek. Kuvvet ve alan basıncı etkiler; ama basıncın kendi birimi pascaldır.
Cevap B.`
},
{
  id: "fen-kb-102",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Katı bir cismin bulunduğu yüzeye uyguladığı basıncı etkileyen iki değişken aşağıdakilerin hangisinde birlikte verilmiştir?**",
  gorsel: null,
  secenekler: [
    "Cismin hacmi ve zeminin sertliği",
    "Cismin ağırlığı ve hacmi",
    "Cismin temas alanı ve sıcaklığı",
    "Cismin ağırlığı ve temas alanı"
  ],
  dogru: 3,
  hatalar: [
    "Hacmi ağırlıkla karıştırma: büyük hacimli bir cisim hafif olabilir. Zeminin sertliği de basıncı değil, zeminin ne kadar çökeceğini etkiler.",
    "İkinci değişkeni hacimle karıştırma: ağırlık doğru ama hacim değil; ikinci değişken yüzeye temas alanıdır.",
    "İkinci değişkeni sıcaklıkla karıştırma: temas alanı doğru ama sıcaklık katı basıncını belirleyen değişkenlerden değildir; ikinci değişken ağırlıktır.",
    null
  ],
  aciklama: `Katı basıncı, katının ağırlığının yüzeyin ne kadarına dağıldığını anlatır.
Adım 1: Aynı yüzeye daha ağır bir cisim konursa yüzey daha çok zorlanır. Demek ki ağırlık, yani yüzeye dik uygulanan kuvvet basıncı etkiler.
Adım 2: Aynı cisim daha geniş bir yüzeyi üzerine konursa ağırlığı daha geniş bir alana yayılır. Demek ki yüzeye temas alanı da basıncı etkiler.
Sık yapılan hata: Hacmi ağırlık sanmak. Büyük bir strafor kutu, küçük bir demir parçasından hafiftir; basıncı belirleyen hacim değil ağırlıktır.
Cevap D.`
},
{
  id: "fen-kb-103",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Karlı dağlarda yürüyüş yapanlar, botlarının altına geniş ve yassı kar ayakkabıları takar.\n**Kar ayakkabısı takmanın amacı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Temas alanını artırarak kara uygulanan basıncı azaltmak",
    "Temas alanını artırarak kara uygulanan basıncı artırmak",
    "Temas alanını azaltarak kara uygulanan basıncı azaltmak",
    "Temas alanını azaltarak kara uygulanan basıncı artırmak"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Alan ile basınç ilişkisini ters kurma: temas alanı büyüdükçe aynı ağırlık daha geniş yüzeye yayılır ve basınç azalır.",
    "Kar ayakkabısının temas alanını küçülttüğünü sanma ve ilişkiyi ters kurma: geniş ve yassı taban kara değen yüzeyi büyütür; alan küçülseydi basınç azalmaz, artardı.",
    "Kar ayakkabısını çivi ya da krampon gibi düşünme: alanı küçültüp basıncı artıran araçlar zemine batmak için yapılır; kar ayakkabısının amacı ise kara batmamaktır."
  ],
  aciklama: `Adım 1: Kar ayakkabısı takan kişinin ağırlığı azalmaz. Geniş ve yassı taban, kara değen yüzeyi büyütür.
Adım 2: Aynı ağırlık daha geniş bir alana yayılınca kara uygulanan basınç azalır. Basınç azalınca kişi kara daha az batar ve rahat yürür.
Adım 3: Temas alanını küçültüp basıncı artırmak ise çivi, iğne ve krampon gibi zemine batması istenen araçların işidir. Kar ayakkabısının amacı bunun tersidir.
Sağlama: Kar ayakkabısı olmadan yalnızca botla yürüyen kişi dizine kadar kara gömülebilir. Ağırlığı aynıdır ama botun kara değen alanı küçüktür.
Cevap A.`
},
{
  id: "fen-kb-104",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerin hangisinde basınç, temas alanı küçültülerek artırılmıştır?**",
  gorsel: null,
  secenekler: [
    "Kayakların uzun ve geniş yapılması",
    "Peynirin suyunu süzmek için üstüne ağır taş konulması",
    "Dikiş iğnelerinin uçlarının sivri yapılması",
    "Bina temellerinin duvarlardan geniş yapılması"
  ],
  dogru: 2,
  hatalar: [
    "Basıncı azaltan örneği seçme: uzun ve geniş kayak temas alanını artırarak kara uygulanan basıncı azaltır.",
    "Basıncı artırmanın iki yolunu karıştırma: taş konunca basınç artar ama bunun nedeni temas alanının küçülmesi değil, ağırlığın artmasıdır.",
    null,
    "Basıncı azaltan örneği seçme: geniş temel, binanın ağırlığını daha büyük bir zemin alanına yayar ve basıncı azaltır."
  ],
  aciklama: `Basınç iki yolla artırılabilir: yüzeye dik uygulanan kuvveti (ağırlığı) artırarak ya da temas alanını küçülterek. Soru ikinci yolu soruyor.
Adım 1: Her seçenekte basıncın arttığını mı azaldığını mı belirle. Geniş kayak ve geniş temel temas alanını büyütür, basıncı azaltır. Bu ikisi elenir.
Adım 2: Kalan iki seçenekte basınç artar ama yolları farklıdır. Peynirin üstüne taş koymak ağırlığı artırır, temas alanını değiştirmez. İğnenin sivri ucu ise kumaşa değen alanı çok küçültür.
Adım 3: Temas alanı küçültülerek basıncın artırıldığı örnek sivri uçlu iğnedir. Bu sayede iğne kumaşa küçük bir kuvvetle girer.
Sık yapılan hata: "Basınç artıyor." görünce hemen işaretlemek. Sorudaki "temas alanı küçültülerek" koşulunu da kontrol et.
Cevap C.`
},
{
  id: "fen-kb-105",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Özdeş üç tuğla, kum havuzuna görseldeki gibi farklı yüzeyleri üzerine konmuştur. Tuğlaların kuma değen yüzeylerinin alanları görselde verilmiştir.\n**Buna göre hangi tuğlanın kuma uyguladığı basınç en büyüktür?**",
  gorsel: `<svg viewBox="0 0 540 280" role="img" aria-label="Kum üzerinde farklı yüzeyleri üzerine konmuş özdeş K, L ve M tuğlaları"><rect x="0" y="190" width="540" height="40" fill="var(--dolgu)"/><line x1="0" y1="190" x2="540" y2="190" stroke="currentColor" stroke-width="2"/><g fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"><rect x="20" y="150" width="160" height="40"/><rect x="200" y="110" width="160" height="80"/><rect x="420" y="30" width="40" height="160"/></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="100" y="140">K</text><text x="280" y="100">L</text><text x="400" y="60">M</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="100" y="252">Kuma değen yüz:</text><text x="100" y="272">8 birim kare</text><text x="280" y="252">Kuma değen yüz:</text><text x="280" y="272">4 birim kare</text><text x="440" y="252">Kuma değen yüz:</text><text x="440" y="272">2 birim kare</text></g></svg>`,
  secenekler: ["K tuğlasının", "L tuğlasının", "M tuğlasının", "Üçünün de basıncı eşittir"],
  dogru: 2,
  hatalar: [
    "Alan ile basınç ilişkisini ters kurma: K'nın kuma değen yüzü en geniştir; aynı ağırlık en geniş alana yayıldığı için basıncı en küçüktür.",
    "Yalnızca K ile karşılaştırma: L'nin alanı K'nınkinden küçüktür ama M'ninkinden büyüktür; en büyük basınç en küçük alandadır.",
    null,
    "Ağırlıkları eşit diye basınçları eşit sanma: tuğlalar özdeş olduğu için ağırlıkları eşittir ama kuma değen alanları farklıdır."
  ],
  aciklama: `Adım 1: Tuğlalar özdeş olduğu için üçünün de ağırlığı, yani kuma uyguladığı kuvvet eşittir.
Adım 2: Kuvvet eşitken basıncı belirleyen temas alanıdır. Temas alanı ne kadar küçükse aynı ağırlık o kadar dar bir yüzeye toplanır ve basınç o kadar büyük olur.
Adım 3: Kuma değen alanlar K'de 8, L'de 4, M'de 2 birim karedir. En küçük alan M'dedir; en büyük basıncı M uygular.
Sağlama: Kumda en derin izi M tuğlası bırakır.
Cevap C.`
},
{
  id: "fen-kb-106",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Bir yüzeyin birim alanına dik olarak etki eden kuvvete ne ad verilir?**",
  gorsel: null,
  secenekler: ["Basınç", "Ağırlık", "Kütle", "Sürtünme kuvveti"],
  dogru: 0,
  hatalar: [
    null,
    "Ağırlık ile basıncı karıştırma: ağırlık, cisme etki eden yer çekimi kuvvetidir; birim alana düşen kuvvet değildir.",
    "Kütle ile basıncı karıştırma: kütle, cismin madde miktarıdır ve bir kuvvet değildir.",
    "Sürtünme kuvvetiyle karıştırma: sürtünme, yüzey boyunca ve harekete zıt yönde etki eder; yüzeye dik değildir."
  ],
  aciklama: `Adım 1: Tanımdaki iki anahtar ifadeye dikkat et: "birim alanına" ve "dik olarak etki eden kuvvet".
Adım 2: Bir kuvvetin yüzeyin her bir birim alanına ne kadar düştüğünü anlatan büyüklük basınçtır.
Adım 3: Ağırlık bir kuvvettir ama alana dağılmış hâli değildir. Kütle kuvvet değildir. Sürtünme kuvveti yüzeye dik değil, yüzey boyunca etki eder.
Sık yapılan hata: Ağırlığı basınçla aynı şey sanmak. Aynı ağırlık dar bir yüzeye düşerse basınç büyük, geniş bir yüzeye düşerse küçük olur.
Cevap A.`
},
{
  id: "fen-kb-107",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Mert, aynı plastik kovayı önce boşken, sonra taşla doldurarak kum havuzundaki aynı zemine koymuştur. Kovanın kumda bıraktığı izlerin derinlikleri görselde verilmiştir.\n**Bu gözlemin nedeni aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Boş ve taşla dolu kovanın kumda bıraktığı izler"><rect x="0" y="170" width="520" height="50" fill="var(--dolgu)"/><line x1="0" y1="170" x2="520" y2="170" stroke="currentColor" stroke-width="2"/><g fill="none" stroke="currentColor" stroke-width="2.5"><path d="M90 80 L170 80 L160 170 L100 170 Z"/><path d="M350 80 L430 80 L420 170 L360 170 Z"/></g><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"><circle cx="375" cy="155" r="11"/><circle cx="400" cy="152" r="12"/><circle cx="385" cy="130" r="11"/><circle cx="410" cy="128" r="10"/><circle cx="372" cy="108" r="10"/><circle cx="398" cy="104" r="11"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="130" y="68" font-weight="bold">Boş kova</text><text x="390" y="68" font-weight="bold">Taşla dolu kova</text><text x="130" y="245">İz derinliği: 1 cm</text><text x="390" y="245">İz derinliği: 3 cm</text></g></svg>`,
  secenekler: [
    "Temas alanı arttığı için basınç azalmıştır.",
    "Temas alanı değişmediği için basınç değişmemiştir.",
    "Ağırlık arttığı için basınç azalmıştır.",
    "Ağırlık arttığı için basınç artmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Taşların temas alanını büyüttüğünü sanma: kovanın kuma değen tabanı aynı kalmıştır; taşlar kovanın içindedir.",
    "Yalnızca temas alanına bakma: taban aynı kalsa da ağırlık artınca basınç artar.",
    "Ağırlık ile basınç ilişkisini ters kurma: aynı yüzeye daha ağır bir cisim konursa basınç artar, iz derinleşir.",
    null
  ],
  aciklama: `Adım 1: İki durumda neyin değiştiğini, neyin aynı kaldığını ayır. Kova aynı olduğu için kuma değen tabanı, yani temas alanı değişmemiştir. Taş eklenince kovanın ağırlığı artmıştır.
Adım 2: Temas alanı aynıyken ağırlık artarsa kuma uygulanan basınç artar. Basınç artınca kova kuma daha derin batar.
Sağlama: Kumdaki izin derinliği basıncın göstergesidir. Dolu kova 3 cm, boş kova 1 cm iz bıraktığına göre dolu kovanın basıncı daha büyüktür.
Cevap D.`
},
{
  id: "fen-kb-108",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Keskin bir bıçak zamanla körelir. Körelmiş bir bıçakla domates kesmek, keskinken kesmekten daha zordur.\n**Bunun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Bıçak körelince ağzı domatese daha dar değdiği için basınç artmıştır.",
    "Bıçak körelince ağırlığı azaldığı için basınç azalmıştır.",
    "Bıçak körelince ağzı domatese daha geniş değdiği için basınç azalmıştır.",
    "Bıçak körelince ağzı domatese daha geniş değdiği için basınç artmıştır."
  ],
  dogru: 2,
  hatalar: [
    "Körelmenin bıçak ağzını incelttiğini sanma: bıçağın ağzı körelince kalınlaşır ve domatese değen alan büyür. Üstelik basınç artsaydı kesmek kolaylaşırdı, zorlaşmazdı.",
    "Ağırlığı sorumlu tutma: bıçağın ağırlığı körelmekle değişmez; kesmede basıncı elin kuvveti ve bıçak ağzının genişliği belirler.",
    null,
    "Alan ile basınç ilişkisini ters kurma: temas alanı büyüdükçe aynı kuvvetle oluşan basınç azalır, artmaz."
  ],
  aciklama: `Adım 1: Keskin bir bıçağın ağzı çok incedir ve domatese çok dar bir alanla değer. Bıçak körelince ağzı kalınlaşır, domatese değen alan büyür. Bıçağın ağırlığı ise körelmekle değişmez.
Adım 2: Elinle aynı kuvveti uyguladığında temas alanı büyürse basınç azalır. Basınç azalınca bıçak domatesin kabuğunu kolayca kesemez.
Sağlama: Körelmiş bıçakla kesmek için daha büyük kuvvet uygulamak gerekir. Bıçağı bilemek, ağzını inceltir ve basıncı yeniden artırır.
Cevap C.`
},
{
  id: "fen-kb-109",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Aynı çimenlikte ince topuklu ayakkabı giyen Selin'in topukları toprağa batarken, düz tabanlı ayakkabı giyen Nil'in ayakkabıları batmamıştır. Selin ile Nil'in ağırlıkları eşittir.\n**Bu durumun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "İnce topuğun temas alanı küçük olduğundan basıncı büyüktür.",
    "İnce topuğun temas alanı küçük olduğundan basıncı küçüktür.",
    "İnce topuğun temas alanı büyük olduğundan basıncı büyüktür.",
    "Düz tabanın temas alanı büyük olduğundan basıncı büyüktür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Alan ile basınç ilişkisini ters kurma: temas alanı küçüldükçe basınç artar, azalmaz.",
    "Topuğun alanını yanlış değerlendirme: ince topuk yere çok küçük bir alanla değer.",
    "Alan ile basınç ilişkisini ters kurma: düz taban ağırlığı geniş alana yayar ve basıncı küçüktür; bu yüzden batmamıştır."
  ],
  aciklama: `Adım 1: Selin ile Nil'in ağırlıkları eşit olduğuna göre toprağa uyguladıkları kuvvet de eşittir. Fark, bu kuvvetin ne kadar alana dağıldığındadır.
Adım 2: İnce topuk toprağa çok küçük bir alanla değer. Ağırlığın bir bölümü bu küçük alana toplanır ve topuğun altındaki basınç çok büyük olur; topuk toprağa batar.
Adım 3: Düz taban ağırlığı geniş bir alana yayar. Basınç küçük kalır, ayakkabı batmaz.
Sık yapılan hata: Batmayı yalnızca ağırlığa bağlamak. Ağırlıklar eşitken bile temas alanı farklıysa batma farklı olur.
Cevap A.`
},
{
  id: "fen-kb-110",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Fen dersinde kum, un ve oyun hamuru gibi yumuşak zeminlerde cisimlerin bıraktığı izlerin derinliği ölçülür.\n**Bu ölçümle aşağıdakilerden hangisi karşılaştırılır?**",
  gorsel: null,
  secenekler: [
    "Cisimlerin kütlesi",
    "Zemine uygulanan basınç",
    "Cisimlerin hacmi",
    "Zemine uygulanan sürtünme"
  ],
  dogru: 1,
  hatalar: [
    "Batmayı kütleye bağlama: kütlesi büyük bir cisim geniş yüzeyi üzerine konursa az batabilir; iz derinliği kütleyi değil basıncı gösterir.",
    null,
    "Hacim ile basıncı karıştırma: büyük hacimli ama hafif bir cisim zemine çok az batar; iz derinliği hacmi göstermez.",
    "Sürtünme ile basıncı karıştırma: sürtünme yüzey boyunca etki eder; batma ise yüzeye dik etki eden kuvvetin oluşturduğu basıncın sonucudur."
  ],
  aciklama: `Adım 1: Yumuşak bir zemin, üzerine gelen basınç arttıkça daha çok çöker. Bu yüzden izin derinliği, zemine uygulanan basıncın bir göstergesidir.
Adım 2: İz derinliği hem ağırlığa hem temas alanına bağlıdır. Tek başına kütleyi ya da hacmi göstermez; bu iki değişkenin ortak sonucu olan basıncı gösterir.
Sağlama: Aynı kitap hamura yatay konduğunda az, dik konduğunda çok iz bırakır. Kütle değişmediği hâlde iz değişiyorsa ölçülen şey kütle değil basınçtır.
Cevap B.`
},
{
  id: "fen-kb-111",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Aynı ağırlıktaki iki sırt çantasından ince askılı olanı omuzları acıtırken geniş askılı olanı acıtmamaktadır.
I. Geniş askı, omza değen alanı büyütür.
II. Geniş askı, omza uygulanan basıncı azaltır.
III. İki çantanın omuzlara uyguladığı toplam kuvvet eşittir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "Alanın basınca etkisini kurmama: geniş askı alanı büyüttüğü için basıncı da azaltır; ayrıca çantalar aynı ağırlıkta olduğundan omuzlara uyguladıkları kuvvetler eşittir.",
    "Basınç ile kuvveti karıştırma: ince askı omzu daha çok acıtır ama bunun nedeni kuvvetin büyük olması değil, aynı kuvvetin dar bir şeride toplanmasıdır; III de doğrudur.",
    "I. yargıyı atlama: geniş askı omza daha büyük bir alanla değer; basıncın azalmasının nedeni de budur.",
    null
  ],
  aciklama: `Adım 1: III. yargıyı kontrol et. İki çanta aynı ağırlıktadır. Bir çantanın omuzlara uyguladığı toplam kuvvet ağırlığına eşit olduğu için kuvvetler eşittir. Doğrudur.
Adım 2: I. yargıyı kontrol et. Geniş askı omza ince askıdan daha büyük bir alanla değer. Doğrudur.
Adım 3: II. yargıyı kontrol et. Aynı kuvvet daha geniş alana yayılınca omzun her bir bölümüne düşen kuvvet, yani basınç azalır. Omuz bu yüzden acımaz. Doğrudur.
Adım 4: Üç yargı da doğrudur.
Sık yapılan hata: "İnce askı omzu acıttığına göre omza daha büyük kuvvet uygular." sanmak. Kuvvet aynıdır; ince askıda bu kuvvet dar bir şeride toplanır ve basınç büyür.
Cevap D.`
},
{
  id: "fen-kb-112",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Ece, masanın üzerinde yatay duran kitabının masaya uyguladığı basıncı artırmak istemektedir.\n**Ece aşağıdakilerden hangisini yapmalıdır?**",
  gorsel: null,
  secenekler: [
    "Kitabın altına ondan geniş bir karton koymalıdır.",
    "Kitabın üzerine özdeş bir kitap daha koymalıdır.",
    "Kitabı masanın kenarından ortasına kaydırmalıdır.",
    "Kitabı açıp kapaklarını masaya yaymalıdır."
  ],
  dogru: 1,
  hatalar: [
    "Temas alanını artırma: geniş karton ağırlığı daha geniş bir alana yayar ve basıncı azaltır.",
    null,
    "Konumun basıncı etkilediğini sanma: kitap masanın neresinde durursa dursun ağırlığı ve masaya değen alanı aynıdır.",
    "Açılan kitabın basıncı artırdığını sanma: kitap açılınca masaya değen alan yaklaşık iki katına çıkar, ağırlık aynı kalır; basınç azalır."
  ],
  aciklama: `Adım 1: Basıncı artırmanın iki yolu vardır: ağırlığı artırmak ya da temas alanını küçültmek.
Adım 2: Seçenekleri tek tek incele. Geniş karton koymak ve kitabı açıp yaymak temas alanını büyütür, basıncı azaltır. Kitabı kaydırmak ne ağırlığı ne de alanı değiştirir; basınç aynı kalır.
Adım 3: Üzerine özdeş bir kitap koymak, masaya değen alanı değiştirmeden ağırlığı iki katına çıkarır. Bu, basıncı artırır.
Sağlama: Kitap yumuşak bir hamurun üzerinde dursaydı, üstüne ikinci kitap konunca iz derinleşirdi.
Cevap B.`
},
{
  id: "fen-kb-113",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Ali, başparmağıyla bastırarak bir raptiyeyi mantar panoya batırmıştır. Raptiyenin geniş başı parmağına, sivri ucu panoya değmektedir.
I. Raptiyenin ucunun panoya uyguladığı basınç, başının parmağa uyguladığı basınçtan büyüktür.
II. Raptiyenin ucunun sivri olması, panoya uygulanan basıncı azaltır.
III. Raptiyenin başının geniş olması, parmakta oluşan basıncı azaltır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III. yargıyı atlama: raptiyenin geniş başı parmağa değen alanı büyütür; parmaktaki basınç bu yüzden küçük kalır.",
    "I. yargıyı atlama: parmağın kuvveti sivri uçta çok küçük bir alana toplanır; panodaki basınç parmaktakinden büyüktür.",
    "II. yargıyı doğru sayma: sivri uç temas alanını küçültür; basıncı azaltmaz, artırır.",
    null
  ],
  aciklama: `Adım 1: Ali'nin parmağıyla uyguladığı kuvvet, raptiye aracılığıyla panoya aktarılır. Raptiyenin iki ucunda değişen şey kuvvet değil, kuvvetin değdiği alandır.
Adım 2: I. yargıyı kontrol et. Sivri uç panoya çok küçük bir alanla, geniş baş parmağa büyük bir alanla değer. Küçük alanda basınç büyüktür. Doğrudur.
Adım 3: II. yargıyı kontrol et. Ucun sivri olması alanı küçültür ve basıncı artırır; raptiye bu sayede panoya kolayca girer. "Azaltır" dediği için yanlıştır.
Adım 4: III. yargıyı kontrol et. Başın geniş olması parmağa değen alanı büyütür, parmaktaki basıncı azaltır; bu yüzden parmak acımaz. Doğrudur.
Sağlama: Raptiyeyi ters çevirip sivri ucuna bastırsaydın parmağın acırdı; çünkü aynı kuvvet bu kez küçük alanla parmağına değerdi.
Cevap D.`
},
{
  id: "fen-kb-114",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Arda, katı bir cismin yüzeye temas alanının, cismin yüzeye uyguladığı basıncı etkileyip etkilemediğini test etmek istemektedir.\n**Arda'nın bu amaçla kuracağı düzenek aşağıdakilerden hangisi olmalıdır?**",
  gorsel: null,
  secenekler: [
    "Farklı ağırlıktaki iki tuğlayı aynı yüzeyleri üzerine kuma koymak",
    "Özdeş iki tuğladan birini geniş, diğerini dar yüzeyi üzerine kuma koymak",
    "Özdeş iki tuğlayı aynı yüzeyleri üzerine biri kuma, biri una koymak",
    "Farklı ağırlıktaki iki tuğlayı farklı yüzeyleri üzerine kuma koymak"
  ],
  dogru: 1,
  hatalar: [
    "Başka bir değişkeni test etme: bu düzenekte değişen ağırlıktır; ağırlığın basınca etkisi ölçülür, temas alanınınki değil.",
    null,
    "Yanlış değişkeni değiştirme: bu düzenekte değişen zeminin türüdür; temas alanı iki tuğlada da aynıdır.",
    "İki değişkeni birden değiştirme: hem ağırlık hem temas alanı değiştiği için batma farkının hangisinden kaynaklandığı anlaşılamaz."
  ],
  aciklama: `Bir değişkenin etkisi test edilirken yalnız o değişken değiştirilir (bağımsız değişken), sonuç ölçülür (bağımlı değişken), diğer her şey sabit tutulur (kontrol değişkenleri).
Adım 1: Etkisi araştırılan, yani değiştirilmesi gereken değişken temas alanıdır. Öyleyse iki tuğlanın kuma değen yüzeyleri farklı olmalıdır.
Adım 2: Ağırlık ve zemin türü aynı kalmalıdır. Özdeş tuğlalar ağırlığı, aynı kum da zemini sabit tutar.
Adım 3: Bu koşulların hepsini sağlayan düzenek, özdeş iki tuğladan birini geniş, diğerini dar yüzeyi üzerine aynı kuma koymaktır.
Sık yapılan hata: İki değişkeni birlikte değiştirmek. O zaman sonuç ortaya çıksa bile hangi değişkenin etkisi olduğu bilinemez.
Cevap B.`
},
{
  id: "fen-kb-115",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Zeynep, özdeş üç tahta bloğu aynı yüzeyleri üzerine biri kuru kuma, biri una, biri ıslak kuma koymuş ve blokların bu zeminlerde bıraktığı izlerin derinliğini ölçmüştür.\n**Bu deneydeki bağımsız, bağımlı ve kontrol değişkenleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?**",
  gorsel: null,
  secenekler: [
    "Zeminin türü – İz derinliği – Blokların ağırlığı",
    "İz derinliği – Zeminin türü – Blokların ağırlığı",
    "Blokların ağırlığı – İz derinliği – Zeminin türü",
    "Temas alanı – İz derinliği – Zeminin türü"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bağımsız ve bağımlı değişkeni yer değiştirme: Zeynep'in değiştirdiği zeminin türü, ölçtüğü ise iz derinliğidir.",
    "Sabit tutulanı bağımsız değişken sanma: bloklar özdeş olduğu için ağırlık değişmemiştir; değiştirilen zeminin türüdür.",
    "Sabit tutulanı bağımsız değişken sanma: bloklar aynı yüzeyleri üzerine konduğu için temas alanı değişmemiştir; zeminin türü ise sabit değil, değiştirilen değişkendir."
  ],
  aciklama: `Bağımsız değişken deneyi yapanın bilerek değiştirdiği, bağımlı değişken bu değişikliğe göre ölçülen, kontrol değişkeni ise sabit tutulan niceliktir.
Adım 1: Zeynep neyi değiştirmiş? Blokları kuru kuma, una ve ıslak kuma koymuştur. Değiştirilen, zeminin türüdür. Bu bağımsız değişkendir.
Adım 2: Zeynep neyi ölçmüş? İzlerin derinliğini. Bu bağımlı değişkendir.
Adım 3: Ne sabit kalmış? Bloklar özdeş olduğu için ağırlıkları, aynı yüzeyleri üzerine konduğu için temas alanları aynıdır. Bunlar kontrol değişkenleridir.
Sık yapılan hata: Her iz derinliği deneyinin basıncı test ettiğini sanmak. Bu deneyde ağırlık ve alan sabittir; test edilen, zeminin türünün batmaya etkisidir.
Cevap A.`
},
{
  id: "fen-kb-116",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Deniz kenarındaki ıslak kumda duran Defne, önce iki ayağı üzerinde, sonra tek ayağı üzerinde durmuştur. Tek ayağı üzerinde dururken kumda daha derin iz oluşmuştur.
I. Defne'nin kuma uyguladığı kuvvet iki durumda da aynıdır.
II. Defne, tek ayağı üzerinde dururken kuma daha büyük basınç uygulamıştır.
III. Defne, tek ayağı üzerinde dururken kuma daha büyük kuvvet uygulamıştır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: ağırlık aynı kalırken temas alanı yarıya indiği için basınç artmıştır; derin iz bunu gösterir.",
    "I. yargıyı atlama: Defne'nin ağırlığı duruşuna göre değişmez; kuma uyguladığı toplam kuvvet ağırlığına eşittir.",
    null,
    "Basınç ile kuvveti karıştırma: izin derinleşmesi kuvvetin değil basıncın arttığını gösterir; kuvvet, yani ağırlık aynıdır."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Defne tek ayağını kaldırdığında ağırlığı değişmez. Kuma uyguladığı toplam kuvvet ağırlığına eşittir ve iki durumda aynıdır. Doğrudur.
Adım 2: II. yargıyı kontrol et. Tek ayak üzerinde dururken kuma değen alan yaklaşık yarıya iner. Aynı kuvvet daha küçük alana düştüğü için basınç artar; derin iz de bunu gösterir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Kuvvet artmamıştır; artan basınçtır. Yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sık yapılan hata: "İz derinleştiyse kuvvet artmıştır." demek. Derin iz basıncın arttığını gösterir; basınç kuvvet aynı kalırken alan küçülünce de artar.
Cevap C.`
},
{
  id: "fen-kb-117",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Ela, karla kaplı düz bir bahçede kızağının üzerine tek başına oturmuş, kalktığında kızağın karda bıraktığı izlere bakmıştır. Sonra kızağı aynı karın başka bir yerine çekmiş ve bu kez kardeşiyle birlikte oturmuştur. İkinci izler ilkinden daha derindir.
I. Kardeşi de oturunca kızağın kara değen yüzeyi büyümüştür.
II. Kardeşi de oturunca kızağın kara uyguladığı kuvvet artmıştır.
III. İki durumda da kızağın kara uyguladığı basınç aynıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Kızağın yüzeyinin büyüdüğünü sanma: kardeşi de otursa kızak aynı kızaktır ve kara aynı yüzeyle değer; değişen yalnızca kara binen ağırlıktır.",
    "Basıncın yalnızca temas alanına bağlı olduğunu sanma: alan aynıyken kuvvet artarsa basınç da artar; izlerin derinleşmesi basıncın arttığını gösterir.",
    "Ağırlık artışının alan artışıyla dengelendiğini sanma: kızağın yüzeyi büyümemiştir; artan ağırlık aynı yüzeye bindiği için basınç artmış, izler derinleşmiştir."
  ],
  aciklama: `Adım 1: İki durumda neyin değiştiğini, neyin aynı kaldığını ayır. Kızak aynı olduğu için kara değen yüzeyi de aynıdır. Kardeşi de oturunca kara binen ağırlık artmıştır.
Adım 2: I. yargıyı kontrol et. Kızak değişmediği için kara değen yüzeyi büyümemiştir. Yanlıştır.
Adım 3: II. yargıyı kontrol et. Kızağın kara uyguladığı kuvvet, kızağın ve üzerindekilerin toplam ağırlığıdır. Kardeşi de oturunca bu ağırlık artmıştır. Doğrudur.
Adım 4: III. yargıyı kontrol et. Temas alanı aynıyken kuvvet artarsa basınç artar. İzlerin derinleşmesi de basıncın arttığını gösterir. Yanlıştır.
Adım 5: Doğru olan yalnız II'dir.
Sık yapılan hata: Basıncın yalnızca temas alanına bağlı olduğunu sanmak. Temas alanı değişmese bile ağırlık artarsa basınç artar.
Cevap A.`
},
{
  id: "fen-kb-118",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Çiftçi Hasan, yağmurdan sonra yumuşayan tarlasında traktörünün arka tekerleklerinin yanına özdeş birer tekerlek daha takarak tekerlekleri ikiz yapmıştır. (Eklenen tekerleklerin ağırlığını önemsemeyiniz.)
I. Traktörün tarlaya uyguladığı basınç artmıştır.
II. Tekerleklerin toprağa değen toplam alanı artmıştır.
III. Traktör, ağırlığı azaldığı için toprağa daha az batar.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Alan ile basınç ilişkisini ters kurma: tekerlek sayısı artınca temas alanı büyür; basınç artmaz, azalır.",
    null,
    "I. ve III. yargıları doğru sayma: basınç artmamış, azalmıştır; traktörün ağırlığı da azalmamıştır.",
    "Doğru sonuca yanlış gerekçeyle ulaşma: traktör gerçekten daha az batar ama bunun nedeni ağırlığın azalması değil, temas alanının artmasıdır."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. İkiz tekerlekle traktörün ağırlığı daha geniş bir alana yayılır; basınç azalır. "Artmıştır" dediği için yanlıştır.
Adım 2: II. yargıyı kontrol et. Her arka tekerleğin yanına bir tekerlek daha eklendiği için toprağa değen toplam alan artmıştır. Doğrudur.
Adım 3: III. yargıyı dikkatle oku. Traktörün daha az batacağı doğrudur; ama yargının gerekçesi "ağırlığı azaldığı için" demektedir. Ağırlık azalmamıştır; azalan basınçtır. Gerekçe yanlış olduğu için yargı yanlıştır.
Adım 4: Doğru olan yalnız II'dir.
Sık yapılan hata: Bir yargının sonucuna bakıp gerekçesini okumamak. Yargının tamamı doğru olmalıdır.
Cevap B.`
},
{
  id: "fen-kb-119",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir öğrenci, katı basıncının ağırlığa bağlı olup olmadığını test etmek için tablodaki cisimlerden ikisini aynı kum zemine koyacaktır.\n**Öğrencinin seçmesi gereken cisim çifti aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>Ağırlık</th><th>Kuma değen yüzeyin alanı</th></tr><tr><td>K</td><td>20 N</td><td>2 birim kare</td></tr><tr><td>L</td><td>20 N</td><td>4 birim kare</td></tr><tr><td>M</td><td>40 N</td><td>3 birim kare</td></tr><tr><td>N</td><td>40 N</td><td>4 birim kare</td></tr></table>`,
  secenekler: ["K ve L", "L ve N", "K ve M", "M ve N"],
  dogru: 1,
  hatalar: [
    "Test edilecek değişkeni karıştırma: K ile L'nin ağırlıkları eşit, alanları farklıdır; bu çift ağırlığın değil temas alanının etkisini gösterir.",
    null,
    "İki değişkeni birden değiştirme: K ile M'nin hem ağırlıkları hem alanları farklıdır; batma farkının hangisinden kaynaklandığı anlaşılamaz.",
    "Test edilecek değişkeni karıştırma: M ile N'nin ağırlıkları eşit, alanları farklıdır; bu çift temas alanının etkisini gösterir."
  ],
  aciklama: `Adım 1: Ağırlığın etkisini görmek için iki cismin ağırlıkları farklı olmalıdır.
Adım 2: Aynı zamanda başka hiçbir değişken farklı olmamalıdır. Temas alanları eşit olmalıdır; aksi hâlde batma farkının nedeni ağırlık mı alan mı, bilinemez.
Adım 3: Tabloda ağırlıkları farklı, alanları eşit olan çift L (20 N, 4 birim kare) ile N'dir (40 N, 4 birim kare).
Sağlama: Seçeneklerdeki diğer çiftlerde ya ağırlıklar eşittir (K ile L, M ile N) ya da iki değişken birlikte değişmiştir (K ile M).
Cevap B.`
},
{
  id: "fen-kb-120",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Canlıların vücut yapıları, yaşadıkları ortamda basınçtan yararlanmalarını ya da basıncın zararından korunmalarını sağlayabilir.
I. Fillerin geniş ayak tabanları, yere uyguladıkları kuvveti azaltır.
II. Kartalların sivri pençeleri, avlarına uyguladıkları basıncı artırır.
III. Ördeklerin perdeli ayakları, çamura değen alanı artırarak batmalarını azaltır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Yargıları ters değerlendirme: geniş taban filin kuvvetini azaltmaz, bu yüzden I yanlıştır; II ve III ise doğrudur.",
    "Basınç ile kuvveti karıştırma ve III'ü atlama: filin yere uyguladığı kuvvet ağırlığına eşittir, geniş taban onu değil basıncı azaltır; ördeğin perdeli ayağı da basıncı azaltır.",
    null,
    "I. yargıyı doğru sayma: geniş ayak tabanı filin ağırlığını, yani yere uyguladığı kuvveti değiştirmez; azalttığı şey basınçtır."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Filin yere uyguladığı kuvvet ağırlığına eşittir ve ayak tabanının genişliği bunu değiştirmez. Geniş taban kuvveti değil, basıncı azaltır. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Sivri pençe avın vücuduna çok küçük bir alanla değer. Aynı kuvvet küçük alana toplanınca basınç artar ve pençe kolayca batar. Doğrudur.
Adım 3: III. yargıyı kontrol et. Parmakların arasındaki perde ayağın çamura değen alanını büyütür, basıncı azaltır. Ördek çamura daha az batar. Doğrudur.
Adım 4: Doğru yargılar II ve III'tür.
Sık yapılan hata: "Basıncı azaltır" ile "kuvveti azaltır" ifadelerini aynı sanmak. Canlının ağırlığı değişmeden basınç, alan değişince değişir.
Cevap C.`
},
{
  id: "fen-kb-121",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Duvara çivi çakan Kerem, çekiçle aynı çivinin başına önce hafif, sonra daha güçlü vurmuştur. Güçlü vuruşta çivi duvara daha derin girmiştir.\n**Güçlü vuruşta, hafif vuruşa göre çivinin duvara dayanan sivri ucunun alanı ve duvara uygulanan basınç nasıl değişmiştir?**",
  gorsel: null,
  secenekler: [
    "Uç alanı artar, basınç artar.",
    "Uç alanı azalır, basınç artar.",
    "Uç alanı değişmez, basınç değişmez.",
    "Uç alanı değişmez, basınç artar."
  ],
  dogru: 3,
  hatalar: [
    "Alanın kuvvetle birlikte arttığını sanma: çivinin ucu aynıdır; güçlü vurmak ucun duvara değen alanını büyütmez.",
    "Derin girmeyi alanın küçülmesine bağlama: çivinin ucu değişmemiştir; basıncı artıran, vuruşun kuvvetidir.",
    "Kuvvetin basıncı etkilemediğini sanma: alan aynıyken kuvvet artarsa basınç da artar.",
    null
  ],
  aciklama: `Adım 1: Kerem iki vuruşta da aynı çiviyi kullanmıştır. Çivinin ucu değişmediği için duvara değen alan da değişmemiştir.
Adım 2: Güçlü vuruşta çivinin duvara uyguladığı kuvvet artmıştır. Alan aynıyken kuvvet artarsa basınç artar.
Adım 3: Basınç arttığı için çivi duvara daha derin girmiştir.
Sık yapılan hata: Basıncın yalnızca alanla değiştiğini sanmak. Basınç, yüzeye dik uygulanan kuvvet artınca da artar.
Cevap D.`
},
{
  id: "fen-kb-122",
  kazanim: "F.8.3.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "K ve L cisimleri aynı kum zemine konduğunda kumda eşit derinlikte iz bırakmıştır. Cisimlerin kuma değen yüzeylerinin alanları görselde verilmiştir.\n**Buna göre K ve L için aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 520 270" role="img" aria-label="Kumda eşit derinlikte iz bırakan geniş tabanlı K ve dar tabanlı L cisimleri"><rect x="0" y="170" width="520" height="50" fill="var(--dolgu)"/><line x1="0" y1="170" x2="520" y2="170" stroke="currentColor" stroke-width="2"/><g fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"><rect x="40" y="126" width="190" height="60"/><rect x="330" y="66" width="70" height="120"/></g><g stroke="var(--vurgu2)" stroke-width="2"><line x1="250" y1="170" x2="250" y2="186"/><line x1="244" y1="170" x2="256" y2="170"/><line x1="244" y1="186" x2="256" y2="186"/><line x1="420" y1="170" x2="420" y2="186"/><line x1="414" y1="170" x2="426" y2="170"/><line x1="414" y1="186" x2="426" y2="186"/></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="135" y="115">K</text><text x="365" y="55">L</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="135" y="242">Kuma değen yüz: 6 birim kare</text><text x="365" y="242">Kuma değen yüz: 2 birim kare</text><text x="135" y="262">İz derinliği: 2 cm</text><text x="365" y="262">İz derinliği: 2 cm</text></g></svg>`,
  secenekler: [
    "K'nın ağırlığı L'ninkinden büyüktür.",
    "K'nın ağırlığı L'ninkinden küçüktür.",
    "K ile L'nin ağırlıkları eşittir.",
    "K'nın kuma uyguladığı basınç daha büyüktür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Alan ile ağırlık ilişkisini ters kurma: geniş yüzeyli K, basıncı L'ninkine eşit olabilmesi için daha ağır olmalıdır.",
    "Eşit izi eşit ağırlık sanma: eşit iz derinliği ağırlıkların değil basınçların eşit olduğunu gösterir.",
    "İz derinliğini yanlış yorumlama: izler eşit derinlikte olduğuna göre iki cismin basıncı eşittir."
  ],
  aciklama: `Adım 1: İki cisim aynı kumda eşit derinlikte iz bırakmıştır. Aynı zeminde eşit iz, eşit basınç demektir.
Adım 2: K'nın kuma değen alanı L'ninkinden büyüktür. K ile L eşit ağırlıkta olsaydı K'nın ağırlığı daha geniş alana yayılır, basıncı daha küçük olur ve daha az batardı.
Adım 3: K'nın basıncı L'ninkine eşit çıktığına göre K'nın ağırlığı L'ninkinden büyük olmalıdır.
Sağlama: Geniş tabanlı ağır bir dolap ile dar tabanlı hafif bir sehpa halıda aynı derinlikte iz bırakabilir.
Cevap A.`
},
{
  id: "fen-kb-123",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Buz tutmuş bir gölde buz kırılıp suya düşen birine yardım eden kurtarıcılar, buzun üzerinde yürümek yerine yüzüstü yatarak sürünür.
I. Kurtarıcı yüzüstü yattığında buza değen alanı artar.
II. Kurtarıcı yüzüstü yattığında buza uyguladığı kuvvet azalır.
III. Kurtarıcının buza uyguladığı basınç azaldığı için buzun kırılma olasılığı azalır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III. yargıyı atlama: temas alanı artınca buza düşen basınç azalır ve buz daha az zorlanır.",
    "Basınç ile kuvveti karıştırma: yatmak kurtarıcının ağırlığını, yani buza uyguladığı kuvveti değiştirmez; I ve III doğrudur.",
    null,
    "II. yargıyı doğru sayma: kurtarıcının ağırlığı yatınca azalmaz; azalan, birim alana düşen kuvvet yani basınçtır."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Ayakta duran bir kişi buza yalnızca ayak tabanlarıyla değer. Yüzüstü yatınca vücudunun büyük bölümü buza değer; temas alanı artar. Doğrudur.
Adım 2: II. yargıyı kontrol et. Kurtarıcının ağırlığı duruşuna göre değişmez; buza uyguladığı kuvvet aynıdır. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Aynı kuvvet daha geniş alana yayılınca basınç azalır. Buz daha az zorlanır, kırılma olasılığı azalır. Doğrudur.
Adım 4: Doğru yargılar I ve III'tür.
Sık yapılan hata: "Yatınca daha hafif olur." sanmak. Ağırlık aynı kalır; değişen, ağırlığın yayıldığı alandır.
Cevap C.`
},
{
  id: "fen-kb-124",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir fabrikada aynı ağır makine, K düzeninde 4 özdeş metal ayak, L düzeninde 8 özdeş metal ayak üzerine aynı zemine yerleştirilmiştir. (Ayakların ağırlığını önemsemeyiniz.)\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 540 240" role="img" aria-label="Aynı makinenin 4 ayaklı K düzeni ve 8 ayaklı L düzeni"><line x1="10" y1="180" x2="530" y2="180" stroke="currentColor" stroke-width="2.5"/><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="40" y="60" width="200" height="80"/><rect x="300" y="60" width="200" height="80"/></g><g fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"><rect x="50" y="140" width="14" height="40"/><rect x="216" y="140" width="14" height="40"/><rect x="310" y="140" width="14" height="40"/><rect x="367" y="140" width="14" height="40"/><rect x="419" y="140" width="14" height="40"/><rect x="476" y="140" width="14" height="40"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="140" y="45" font-weight="bold">K düzeni</text><text x="400" y="45" font-weight="bold">L düzeni</text><text x="140" y="105">Makine</text><text x="400" y="105">Makine</text><text x="140" y="210">Toplam 4 ayak</text><text x="400" y="210">Toplam 8 ayak</text><text x="270" y="232">Önden görünüş: arkadaki ayaklar görünmemektedir.</text></g></svg>`,
  secenekler: [
    "K düzeninde makinenin zemine uyguladığı basınç daha küçüktür.",
    "K düzeninde makinenin zemine uyguladığı kuvvet daha küçüktür.",
    "L düzeninde makinenin zemine uyguladığı kuvvet daha küçüktür.",
    "L düzeninde makinenin zemine uyguladığı basınç daha küçüktür."
  ],
  dogru: 3,
  hatalar: [
    "Alan ile basınç ilişkisini ters kurma: ayak sayısı az olan K düzeninde temas alanı küçüktür; basınç daha büyüktür.",
    "Az ayağın zemine daha az kuvvet aktardığını sanma: makinenin zemine uyguladığı toplam kuvvet ağırlığına eşittir; ayak sayısı bu kuvveti değiştirmez.",
    "Basınç ile kuvveti karıştırma: ayak çoğalınca her bir ayağa düşen yük azalır ama makinenin zemine uyguladığı toplam kuvvet ağırlığına eşittir ve iki düzende aynıdır.",
    null
  ],
  aciklama: `Adım 1: İki düzende de aynı makine kullanılmıştır; zemine uygulanan toplam kuvvet makinenin ağırlığına eşittir ve değişmez. Bu yüzden kuvvetin bir düzende daha küçük olduğunu söyleyen seçenekler elenir.
Adım 2: Ayaklar özdeş olduğu için 8 ayağın zemine değen toplam alanı, 4 ayağınkinin iki katıdır.
Adım 3: Aynı kuvvet daha geniş alana yayıldığında basınç azalır. Öyleyse L düzeninde zemine uygulanan basınç daha küçüktür.
Sık yapılan hata: Ayak sayısı artınca makinenin zemine uyguladığı kuvvetin azaldığını sanmak. Kuvvet aynıdır; değişen, kuvvetin dağıldığı alandır.
Cevap D.`
},
{
  id: "fen-kb-125",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Futbolcuların çim sahada giydiği kramponlu ayakkabıların tabanında çok sayıda kısa diş bulunur. Oyuncu bastığında bu dişler çime gömülür ve oyuncunun kaymasını önler.
I. Dişler, ayakkabının zemine değen alanını küçültür.
II. Dişler, oyuncunun zemine uyguladığı kuvveti artırır.
III. Dişler sayesinde zemine uygulanan basınç azalır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Basınç ile kuvveti karıştırma: dişler oyuncunun ağırlığını değiştirmez; artan şey kuvvet değil basınçtır.",
    "Alan ile basınç ilişkisini ters kurma: temas alanı küçülünce basınç azalmaz, artar; dişlerin çime gömülmesi bu yüzdendir.",
    "II. ve III. yargıları doğru sayma: oyuncunun zemine uyguladığı kuvvet ağırlığına eşittir ve değişmez; basınç ise azalmaz, artar."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Düz tabanlı bir ayakkabı zemine bütün tabanıyla değer. Kramponlu ayakkabıda ise zemine yalnızca dişlerin uçları değer; temas alanı küçülür. Doğrudur.
Adım 2: II. yargıyı kontrol et. Oyuncunun zemine uyguladığı kuvvet ağırlığına eşittir; dişler ağırlığı değiştirmez. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Kuvvet aynıyken temas alanı küçülürse basınç artar. Dişlerin çime gömülmesi basıncın arttığını gösterir. "Azalır" dediği için yanlıştır.
Adım 4: Doğru olan yalnız I'dir.
Sağlama: Kar ayakkabısı geniş tabanıyla basıncı azaltır ve kara gömülmeyi önler. Krampon ise tam tersini yapar: basıncı artırır ve dişlerin zemine gömülmesini sağlar.
Cevap A.`
},

/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "fen-kb-201",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Ağırlıkları eşit K, L ve M kutuları aynı oyun hamuru zemine konmuştur. Kutuların hamurda bıraktığı izlerin derinlikleri tabloda verilmiştir.\n**Buna göre kutuların hamura değen yüzeylerinin alanları için aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Kutu</th><th>İz derinliği</th></tr><tr><td>K</td><td>9 mm</td></tr><tr><td>L</td><td>5 mm</td></tr><tr><td>M</td><td>2 mm</td></tr></table>`,
  secenekler: [
    "M'nin alanı en büyüktür; çünkü en küçük basıncı M uygulamıştır.",
    "M'nin alanı en küçüktür; çünkü en küçük basıncı M uygulamıştır.",
    "K'nın alanı en büyüktür; çünkü en derin izi K bırakmıştır.",
    "Üç kutunun alanı eşittir; çünkü ağırlıkları eşittir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru gerekçeden ters sonuç çıkarma: M'nin basıncının en küçük olduğu doğrudur; ama ağırlıklar eşitken en küçük basınç en büyük alandan kaynaklanır.",
    "İz derinliği ile alan ilişkisini ters kurma: derin iz büyük basınç demektir; ağırlıklar eşitken büyük basınç küçük alandan kaynaklanır.",
    "Ağırlıklar eşit diye alanları eşit sanma: ağırlıkları eşit kutuların farklı derinlikte iz bırakması, alanlarının farklı olduğunu gösterir."
  ],
  aciklama: `Adım 1: Aynı hamurda iz ne kadar derinse kutunun hamura uyguladığı basınç o kadar büyüktür. Basınçların sıralaması K > L > M'dir.
Adım 2: Ağırlıklar eşit olduğuna göre basınç farkının tek nedeni temas alanıdır. Aynı ağırlık küçük alana düşünce basınç büyür, büyük alana yayılınca küçülür.
Adım 3: En küçük basınç M'de olduğuna göre M'nin alanı en büyüktür. En büyük basınç K'de olduğuna göre K'nın alanı en küçüktür. Alanların sıralaması M > L > K'dir.
Sık yapılan hata: "En derin iz, en büyük yüzeyden olur." sanmak. Ağırlıklar eşitken derin iz, dar yüzeyin işaretidir.
Cevap A.`
},
{
  id: "fen-kb-202",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Demir yolu rayları doğrudan toprağa döşenmez. Rayların altına, görselde üstten görünüşü verildiği gibi enine yerleştirilmiş geniş beton traversler konur.
I. Traversler, trenin ağırlığını daha geniş bir zemin alanına yayar.
II. Traversler sayesinde zemine uygulanan basınç azalır.
III. Traversler olmasaydı raylar zemine daha kolay gömülebilirdi.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 540 240" role="img" aria-label="Demir yolunun üstten görünüşü: iki ray ve altlarında enine beton traversler"><rect x="0" y="20" width="540" height="190" fill="var(--dolgu)" opacity="0.5"/><g fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"><rect x="40" y="40" width="44" height="150"/><rect x="140" y="40" width="44" height="150"/><rect x="240" y="40" width="44" height="150"/><rect x="340" y="40" width="44" height="150"/><rect x="440" y="40" width="44" height="150"/></g><g fill="currentColor"><rect x="0" y="72" width="540" height="10"/><rect x="0" y="148" width="540" height="10"/></g><g fill="currentColor" font-size="15"><text x="200" y="232">Travers (beton)</text><text x="10" y="66">Ray</text><text x="10" y="178">Ray</text></g><line x1="262" y1="190" x2="248" y2="216" stroke="currentColor" stroke-width="1.5"/></svg>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III. yargıları atlama: ağırlık geniş alana yayılınca basınç azalır; basınç azalınca zemin daha az çöker.",
    "III. yargıyı atlama: travers olmasaydı rayın dar tabanı zemine büyük basınç uygular ve zemin çökebilirdi.",
    "I. yargıyı atlama: basıncın azalmasının nedeni, trenin ağırlığının traversler sayesinde daha geniş bir alana yayılmasıdır.",
    null
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Ray dar bir çelik şerittir. Traversler rayın altına enine yerleştirildiği için trenin ağırlığı zemine rayın tek başına değeceği alandan çok daha geniş bir alanla aktarılır. Doğrudur.
Adım 2: II. yargıyı kontrol et. Aynı ağırlık daha geniş alana yayılınca zemine uygulanan basınç azalır. Doğrudur.
Adım 3: III. yargıyı kontrol et. Travers olmasaydı trenin ağırlığı rayın dar tabanına toplanır, basınç büyür ve raylar zemine gömülebilirdi. Doğrudur.
Adım 4: Üç yargı da doğrudur.
Sağlama: Kum üzerine bir cetveli ince kenarı üzerine koyup bastırırsan gömülür; altına geniş kartonlar koyarsan gömülmez.
Cevap D.`
},
{
  id: "fen-kb-203",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir öğrenci, süngerin üzerine farklı cisimler koyarak süngerdeki çökmeyi gözlemlemiş ve sonuçları tabloya yazmıştır.
I. 1. ve 2. deneyler, basıncın ağırlığa bağlı olduğunu gösterir.
II. 2. ve 3. deneyler, basıncın temas alanına bağlı olduğunu gösterir.
III. 1. ve 3. deneyler, basıncın temas alanına bağlı olduğunu gösterir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Deney</th><th>Cismin ağırlığı</th><th>Süngere değen alan</th><th>Süngerdeki çökme</th></tr><tr><td>1</td><td>10 N</td><td>2 birim kare</td><td>Az</td></tr><tr><td>2</td><td>20 N</td><td>2 birim kare</td><td>Çok</td></tr><tr><td>3</td><td>20 N</td><td>4 birim kare</td><td>Az</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "II. yargıyı atlama: 2. ve 3. deneylerde ağırlık aynı, alan farklıdır; çökmenin değişmesi alanın etkisini gösterir.",
    null,
    "I. yargıyı atlayıp III'ü doğru sayma: 1. ve 2. deneylerde yalnız ağırlık değişmiştir, bu geçerli bir karşılaştırmadır; 1. ve 3. deneylerde ise iki değişken birden değişmiştir.",
    "III. yargıyı doğru sayma: 1. ve 3. deneylerde hem ağırlık hem alan değişmiştir; bu iki deney temas alanının etkisini tek başına göstermez."
  ],
  aciklama: `Bir değişkenin etkisini göstermek için karşılaştırılan iki deneyde yalnız o değişken farklı olmalıdır.
Adım 1: I. yargıyı kontrol et. 1. ve 2. deneylerde alan aynı (2 birim kare), ağırlık farklıdır (10 N ve 20 N). Çökme değiştiğine göre basınç ağırlığa bağlıdır. Doğrudur.
Adım 2: II. yargıyı kontrol et. 2. ve 3. deneylerde ağırlık aynı (20 N), alan farklıdır (2 ve 4 birim kare). Çökme değiştiğine göre basınç temas alanına bağlıdır. Doğrudur.
Adım 3: III. yargıyı kontrol et. 1. ve 3. deneylerde hem ağırlık hem alan değişmiştir. Bu iki deney, alanın etkisini tek başına göstermez. Yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sık yapılan hata: Sonucu doğru bir ilkeyi gösteren her deney çiftini geçerli saymak. Karşılaştırmada tek bir değişken değişmiş olmalıdır.
Cevap B.`
},
{
  id: "fen-kb-204",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: "Uzun süre yatakta kalan hastaların vücudunda, yatağa değen küçük bölgelerde yaralar oluşabilir. Bu nedenle hastanelerde, üzerine yatan kişinin vücut biçimine göre çöken yumuşak yataklar kullanılır.\n**Bu yatakların yararı aşağıdakilerden hangisiyle açıklanır?**",
  gorsel: null,
  secenekler: [
    "Vücudun yatağa değen alanını küçülterek basıncı artırır.",
    "Vücudun yatağa değen alanını büyüterek basıncı azaltır.",
    "Vücudun yatağa değen alanını küçülterek basıncı azaltır.",
    "Vücudun yatağa değen alanını büyüterek basıncı artırır."
  ],
  dogru: 1,
  hatalar: [
    "Yatağın işlevini ters anlama: vücut biçimine göre çöken yatak vücudun daha çok bölgesinin yatağa değmesini sağlar. Basınç artsaydı yaralar azalmaz, çoğalırdı.",
    null,
    "Alanın küçüldüğünü sanma ve ilişkiyi ters kurma: çöken yatak temas alanını büyütür; alan küçülseydi basınç azalmaz, artardı.",
    "Alan ile basınç ilişkisini ters kurma: aynı ağırlık daha geniş alana yayılınca basınç artmaz, azalır."
  ],
  aciklama: `Adım 1: Sert bir yatakta vücut yatağa yalnızca birkaç çıkıntılı bölgeyle (topuk, kalça, kürek kemikleri) değer. Ağırlık bu küçük bölgelere toplanır.
Adım 2: Vücut biçimine göre çöken yatakta vücudun çok daha büyük bir bölümü yatağa değer. Temas alanı büyür.
Adım 3: Hastanın ağırlığı değişmediği hâlde bu ağırlık daha geniş alana yayıldığı için basınç azalır. Küçük bölgelerdeki baskı azalınca yara oluşma olasılığı da azalır.
Sık yapılan hata: Yumuşak yatağın hastayı "hafiflettiğini" sanmak. Ağırlık aynıdır; değişen, ağırlığın yayıldığı alandır.
Cevap B.`
},
{
  id: "fen-kb-205",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bahçedeki sert toprağı kazmakta zorlanan Yusuf, kazmasının körelmiş ucunu eğeyle bileyip inceltmiştir. Bilemeden sonra aynı kuvvetle vurduğunda kazma toprağa daha derin girmeye başlamıştır. (Bileme sırasında kazmanın ağırlığındaki değişimi önemsemeyiniz.)
I. Bileme, kazma ucunun toprağa değen alanını büyütmüştür.
II. Bilenmiş kazmanın toprağa uyguladığı basınç, körelmiş kazmanınkinden büyüktür.
III. Bilemeden önce ve sonra kazmanın toprağa uyguladığı kuvvet aynıdır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III. yargıyı atlama: Yusuf iki durumda da aynı kuvvetle vurmuştur; bileme kuvveti değil, kuvvetin değdiği alanı değiştirir.",
    "Bilemenin alanı büyüttüğünü sanma: bileme ucu inceltir ve toprağa değen alanı küçültür; bu yüzden basınç artmıştır, yani II de doğrudur.",
    null,
    "I. yargıyı doğru sayma: bilenen uç incelir; toprağa değen alan büyümez, küçülür."
  ],
  aciklama: `Adım 1: İki durumda neyin değiştiğini, neyin aynı kaldığını ayır. Yusuf iki durumda da aynı kuvvetle vurmuştur. Değişen, kazma ucunun toprağa değen alanıdır.
Adım 2: I. yargıyı kontrol et. Bileme ucu inceltir; ucun toprağa değen alanı küçülür. "Büyütmüştür" dediği için yanlıştır.
Adım 3: II. yargıyı kontrol et. Kuvvet aynıyken temas alanı küçülünce basınç artar. Kazmanın toprağa daha derin girmesi de bunu gösterir. Doğrudur.
Adım 4: III. yargıyı kontrol et. Bileme Yusuf'un vuruşunu güçlendirmez; kazmanın toprağa uyguladığı kuvvet iki durumda da aynıdır. Doğrudur.
Adım 5: Doğru yargılar II ve III'tür.
Sık yapılan hata: Daha derin girmeyi kuvvetin artmasına bağlamak. Kuvvet aynı kalsa bile temas alanı küçülürse basınç artar.
Cevap C.`
},
{
  id: "fen-kb-206",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Kumun üzerinde duran dikdörtgen prizma biçimli bir tuğla, görseldeki kesikli çizgi boyunca dikey olarak iki eş parçaya kesilmiş ve parçalardan biri kaldırılmıştır.\n**Kumda kalan parça, kesilmeden önceki tuğlayla karşılaştırıldığında aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Kum üzerindeki tuğlanın dikey kesim çizgisi, kaldırılan ve kalan parçalar"><rect x="0" y="180" width="520" height="40" fill="var(--dolgu)"/><line x1="0" y1="180" x2="520" y2="180" stroke="currentColor" stroke-width="2"/><rect x="150" y="100" width="110" height="80" fill="var(--vurgu2)" fill-opacity="0.2" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><rect x="260" y="100" width="110" height="80" fill="var(--vurgu)" fill-opacity="0.4" stroke="currentColor" stroke-width="2"/><line x1="260" y1="70" x2="260" y2="195" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="260" y="60" font-weight="bold">Kesim çizgisi</text><text x="205" y="145">Kaldırılan</text><text x="205" y="165">parça</text><text x="315" y="145">Kalan</text><text x="315" y="165">parça</text><text x="260" y="242">Önden görünüş</text></g></svg>`,
  secenekler: [
    "Ağırlığı azalır, temas alanı değişmez; basınç azalır.",
    "Ağırlığı değişmez, temas alanı azalır; basınç artar.",
    "Ağırlığı ve temas alanı yarıya iner; basınç değişmez.",
    "Ağırlığı ve temas alanı yarıya iner; basınç azalır."
  ],
  dogru: 2,
  hatalar: [
    "Kesimi yatay sanma: tuğla dikey kesildiği için kuma değen taban da ikiye bölünmüştür; temas alanı da yarıya inmiştir.",
    "Ağırlığın değiştiğini gözden kaçırma: tuğlanın yarısı kaldırıldığı için kalan parçanın ağırlığı da yarıya iner.",
    null,
    "Yalnızca ağırlığın azalmasına bakma: ağırlık yarıya inerken temas alanı da yarıya indiği için kumun her bir bölümüne düşen kuvvet aynı kalır."
  ],
  aciklama: `Adım 1: Tuğla dikey olarak iki eş parçaya bölündüğü için kalan parçanın ağırlığı tuğlanın ağırlığının yarısıdır.
Adım 2: Kesim dikey olduğu için kuma değen taban da ikiye bölünmüştür. Kalan parçanın temas alanı da yarıya inmiştir.
Adım 3: Kalan parça, kumun kendi altındaki bölümüne kesimden önceki kadar ağırlık uygular. Ağırlık ile alan aynı oranda azaldığı için basınç değişmez.
Sağlama: Tuğlanın kesilmeden önce iki yarısı yan yana duruyormuş gibi düşün. Her yarı kendi altındaki kuma aynı basıncı uygular; birini kaldırmak diğerinin basıncını değiştirmez.
Cevap C.`
},
{
  id: "fen-kb-207",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Aşı iğnelerinin ucu çok sivri ve eğik kesilmiş biçimde üretilir. Bu sayede iğne cilde kolayca girer ve aşı daha az acıyla yapılır.
I. Aşı iğnesinin ucu körelmiş olsaydı cilde değen alanı küçülürdü.
II. Körelmiş bir iğneyle aynı kuvvet uygulandığında cilde uygulanan basınç artardı.
III. Sivri uçlu iğneyle cildi delmek için daha küçük bir kuvvet yeterlidir.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 1,
  hatalar: [
    "Körelmenin alanı küçülttüğünü sanma: uç köreldikçe genişler ve cilde değen alan büyür; ayrıca III. yargı doğrudur.",
    null,
    "I. ve II. yargıları doğru sayma: körelme temas alanını büyütür; aynı kuvvetle oluşan basınç artmaz, azalır.",
    "I. yargıyı doğru sayma: körelmiş uç cilde daha geniş bir alanla değer; alan küçülmez, büyür."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Bir uç köreldikçe incelmez, genişler. Körelmiş iğne cilde daha büyük bir alanla değerdi. "Küçülürdü" dediği için yanlıştır.
Adım 2: II. yargıyı kontrol et. Aynı kuvvet daha büyük alana yayılırsa basınç azalır. "Artardı" dediği için yanlıştır.
Adım 3: III. yargıyı kontrol et. Sivri uç cilde çok küçük bir alanla değer. Küçük bir kuvvet bile bu küçük alanda büyük bir basınç oluşturur ve cildi deler. Doğrudur.
Adım 4: Doğru olan yalnız III'tür.
Sık yapılan hata: Körelmiş ucun daha "küçük" olduğunu düşünmek. Körelme ucu yuvarlaklaştırır; temas alanı büyür.
Cevap B.`
},
{
  id: "fen-kb-208",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Özdeş tahta küplerle kurulan K, L, M ve N düzenekleri aynı oyun hamuru zemine görseldeki gibi yerleştirilmiştir.\n**Buna göre hangi iki düzenekte küplerin hamura uyguladığı basınç birbirine eşittir?**",
  gorsel: `<svg viewBox="0 0 520 270" role="img" aria-label="Özdeş küplerle kurulan dört düzenek: K bir küp, L iki küp üst üste, M üç küp yan yana, N üç küp üst üste"><rect x="0" y="210" width="520" height="30" fill="var(--dolgu)"/><line x1="0" y1="210" x2="520" y2="210" stroke="currentColor" stroke-width="2"/><g fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"><rect x="30" y="170" width="40" height="40"/><rect x="130" y="170" width="40" height="40"/><rect x="130" y="130" width="40" height="40"/><rect x="230" y="170" width="40" height="40"/><rect x="270" y="170" width="40" height="40"/><rect x="310" y="170" width="40" height="40"/><rect x="420" y="170" width="40" height="40"/><rect x="420" y="130" width="40" height="40"/><rect x="420" y="90" width="40" height="40"/></g><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="50" y="262">K</text><text x="150" y="262">L</text><text x="290" y="262">M</text><text x="440" y="262">N</text></g><text x="260" y="40" fill="currentColor" font-size="15" text-anchor="middle">Bütün küpler özdeştir.</text></svg>`,
  secenekler: ["K ve N", "L ve N", "K ve M", "M ve N"],
  dogru: 2,
  hatalar: [
    "Yalnızca temas alanına bakma: K ile N hamura aynı büyüklükte bir yüzle değer ama N'nin ağırlığı üç kat büyüktür.",
    "Yalnızca dizilişe bakma: L ile N'de küpler üst üste dizilmiştir; ancak ağırlıkları farklı olduğu için basınçları farklıdır.",
    null,
    "Yalnızca ağırlığa bakma: M ile N'de üçer küp vardır; ağırlıklar eşit ama M'nin hamura değen alanı üç kat büyüktür."
  ],
  aciklama: `Adım 1: Her düzenekte hamura değen yüzü ve hamura binen ağırlığı belirle. K: 1 küp ağırlığı, 1 küp tabanı. L: 2 küp ağırlığı, 1 küp tabanı. M: 3 küp ağırlığı, 3 küp tabanı. N: 3 küp ağırlığı, 1 küp tabanı.
Adım 2: M'de küpler yan yana durur. Her küp hamurun yalnızca kendi altındaki bölümüne basar ve o bölüm yalnızca bir küpün ağırlığını taşır. Bu durum, tek küpün durduğu K düzeneğiyle aynıdır.
Adım 3: L ve N'de küpler üst üste olduğu için tek bir taban birden fazla küpün ağırlığını taşır; bu düzeneklerin basıncı K'ninkinden büyüktür ve birbirinden farklıdır.
Adım 4: Basıncı eşit olan düzenekler K ve M'dir.
Sağlama: Özdeş küpleri yan yana eklemek hamurdaki izi derinleştirmez, yalnızca genişletir. Üst üste eklemek ise izi derinleştirir.
Cevap C.`
},
{
  id: "fen-kb-209",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Karla kaplı bölgelerde kullanılan kar motorlarının altında, arkada geniş bir palet, önde de kayak biçiminde iki uzun parça bulunur.
I. Palet, kar motorunun kara uyguladığı kuvveti azaltır.
II. Kayak biçimli parçalar, kar motorunun kara değen alanını artırır.
III. Aynı ağırlıkta olup kara daha küçük bir alanla değen tekerlekli bir araç, kara kar motorundan daha çok batar.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Basınç ile kuvveti karıştırma: palet, motorun kara uyguladığı kuvveti azaltmaz; azalttığı şey basınçtır. II ve III ise doğrudur.",
    "III. yargıyı atlama: ağırlıklar eşitken daha küçük alanla değen tekerlekli aracın basıncı daha büyüktür; bu araç kara daha çok batar.",
    "I. yargıyı doğru sayma: kar motorunun kara uyguladığı kuvvet ağırlığına eşittir; palet bu kuvveti değiştirmez.",
    null
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Kar motorunun kara uyguladığı kuvvet ağırlığına eşittir. Palet ağırlığı azaltmaz; ağırlığı geniş bir alana yayar. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Uzun ve geniş kayak parçaları kara değen yüzeyi büyütür. Doğrudur.
Adım 3: III. yargıyı kontrol et. Ağırlıklar eşitken kara daha küçük alanla değen tekerlekli araç, ağırlığını daha dar bir yüzeye toplar. Basıncı kar motorununkinden büyük olduğu için kara daha çok batar. Doğrudur.
Adım 4: Doğru yargılar II ve III'tür.
Sık yapılan hata: "Palet aracı hafifletir." sanmak. Palet, ağırlığı değiştirmeden basıncı azaltır.
Cevap D.`
},
{
  id: "fen-kb-210",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Dört ayaklı bir sehpa, halının üzerine önce ayakları üzerinde, sonra ters çevrilip tablası üzerinde konmuştur. İki durumda halıda oluşan izler görselde verilmiştir.\n**Bu gözlemin nedeni aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 540 250" role="img" aria-label="Ayakları üzerinde duran ve ters çevrilmiş sehpanın halıda bıraktığı izler"><rect x="0" y="170" width="540" height="30" fill="var(--dolgu)"/><line x1="0" y1="170" x2="540" y2="170" stroke="currentColor" stroke-width="2"/><g fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"><rect x="50" y="80" width="180" height="16"/><rect x="60" y="96" width="12" height="80"/><rect x="208" y="96" width="12" height="80"/><rect x="310" y="154" width="180" height="16"/><rect x="320" y="74" width="12" height="80"/><rect x="468" y="74" width="12" height="80"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="140" y="60" font-weight="bold">Ayakları üzerinde</text><text x="400" y="54" font-weight="bold">Ters çevrilmiş</text><text x="140" y="222">Halıda 4 derin iz</text><text x="400" y="222">Halıda belirgin iz yok</text></g></svg>`,
  secenekler: [
    "Ters çevrilince sehpanın halıya uyguladığı kuvvet azalmıştır.",
    "Ayakları üzerindeyken temas alanı büyük olduğu için basınç küçüktür.",
    "Ters çevrilince temas alanı küçüldüğü için basınç artmıştır.",
    "Ters çevrilince temas alanı büyüdüğü için basınç azalmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Basınç ile kuvveti karıştırma: sehpanın ağırlığı ters çevrilince değişmez; halıya uyguladığı kuvvet aynıdır.",
    "Temas alanını yanlış değerlendirme: dört ince ayağın halıya değen toplam alanı, geniş tablanınkinden çok küçüktür.",
    "Alan ile basınç ilişkisini ters kurma: basınç artsaydı ters çevrilmiş sehpa daha derin iz bırakırdı; oysa iz kaybolmuştur.",
    null
  ],
  aciklama: `Adım 1: Sehpa ters çevrildiğinde ağırlığı değişmez; halıya uyguladığı kuvvet iki durumda aynıdır.
Adım 2: Ayakları üzerindeyken sehpa halıya yalnızca dört ince ayağının uçlarıyla değer. Ters çevrildiğinde ise geniş tablasıyla değer. Temas alanı çok büyür.
Adım 3: Aynı kuvvet çok daha geniş bir alana yayıldığı için basınç azalır; halıda belirgin iz oluşmaz.
Sık yapılan hata: İzin kaybolmasını sehpanın "hafiflemesine" bağlamak. Sehpa hafiflemez; ağırlığı daha geniş alana dağılır.
Cevap D.`
},
{
  id: "fen-kb-211",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: "Buz pateninin altında ince bir metal bıçak bulunur; bu bıçak buzda ince bir iz açarak ilerler. Kayakların altı ise uzun ve geniştir; kayakçının kara gömülmeden kaymasını sağlar.\n**Buna göre bu iki araç için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "İkisinde de basınç, kullanıcının ağırlığı azaltılarak düşürülmüştür.",
    "Patende temas alanı küçültülerek basınç artırılmış, kayakta azaltılmıştır.",
    "Patende temas alanı büyütülerek basınç azaltılmış, kayakta artırılmıştır.",
    "İkisinde de temas alanı büyütülerek basınç azaltılmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Ağırlığın değiştiğini sanma: paten ya da kayak takmak kişinin ağırlığını azaltmaz; iki araçta da değişen temas alanıdır.",
    null,
    "İki aracın işlevini yer değiştirme: patenin ince bıçağı alanı küçültür, kayağın geniş tabanı alanı büyütür.",
    "Kayaktan patene genelleme yapma: kayak basıncı azaltır; ama patenin ince bıçağı temas alanını küçültüp basıncı artırır."
  ],
  aciklama: `Adım 1: Patenin buza değen kısmı ince bir bıçağın kenarıdır. Temas alanı çok küçüktür; kişinin ağırlığı bu küçük alana toplanır ve basınç çok büyür. Bıçak bu sayede buzda iz açar.
Adım 2: Kayağın kara değen yüzeyi uzun ve geniştir. Kişinin ağırlığı büyük bir alana yayılır, basınç azalır. Kayakçı bu sayede kara gömülmez.
Adım 3: İki araç da basıncı temas alanını değiştirerek ayarlar; biri alanı küçültüp basıncı artırır, diğeri alanı büyütüp basıncı azaltır.
Sık yapılan hata: Kış sporlarındaki bütün araçların batmayı önlemek için yapıldığını sanmak. Paten batmayı değil, buzu "kavramayı" amaçlar.
Cevap B.`
},
{
  id: "fen-kb-212",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Parke zeminli bir odaya yerleştirilen ağır bir dolabın ince ayaklarının altına, ayaklardan daha geniş keçe pedler yapıştırılmıştır. (Pedlerin ağırlığını önemsemeyiniz.)
I. Pedler takılınca dolabın parkeye uyguladığı toplam kuvvet değişmez.
II. Pedler, dolap ayaklarının parkeye değen alanını küçültür.
III. Pedler olmasaydı parkede oluşabilecek ezik izleri daha sığ olurdu.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Pedlerin alanı küçülttüğünü sanma: pedler ayaklardan geniş olduğu için parkeye değen alanı büyütür. Ayrıca I. yargı doğrudur; pedler dolabın ağırlığını değiştirmez.",
    "Alan ile basınç ilişkisini ters kurma: pedler olmasaydı ağırlık ince ayakların küçük uçlarına toplanır, basınç büyür ve ezik izleri daha derin olurdu.",
    "III. yargıyı doğru sayma: pedler basıncı azaltır; pedler olmasaydı basınç daha büyük, ezik izleri de daha derin olurdu."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Dolabın parkeye uyguladığı toplam kuvvet ağırlığına eşittir. Pedlerin ağırlığı önemsenmediğine göre pedler bu kuvveti değiştirmez. Doğrudur.
Adım 2: II. yargıyı kontrol et. Pedler ayaklardan geniş olduğu için dolabın parkeye değen alanını büyütür, küçültmez. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Pedler olmasaydı dolabın ağırlığı ince ayakların küçük uçlarına toplanırdı. Alan küçük olunca basınç büyür ve parkede daha derin ezik izleri oluşur. "Daha sığ olurdu" dediği için yanlıştır.
Adım 4: Doğru olan yalnız I'dir.
Sık yapılan hata: Pedlerin dolabı "hafiflettiğini" sanmak. Pedler kuvveti değil, kuvvetin dağıldığı alanı değiştirir; azalan, basınçtır.
Cevap A.`
},
{
  id: "fen-kb-213",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Can, özdeş K ve L takozlarını duvara asılı mantar panoya görseldeki gibi eşit büyüklükte kuvvetlerle bastırmıştır. K takozunun dar yüzü, L takozunun ise geniş yüzü panoya değmektedir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 500 300" role="img" aria-label="Duvardaki panoya yatay kuvvetle bastırılan özdeş K ve L takozları"><rect x="430" y="10" width="24" height="265" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"><rect x="270" y="30" width="160" height="40"/><rect x="390" y="105" width="40" height="160"/></g><g stroke="var(--vurgu2)" stroke-width="3" fill="var(--vurgu2)"><line x1="150" y1="50" x2="258" y2="50"/><path d="M270 50 L256 42 L256 58 Z"/><line x1="270" y1="185" x2="378" y2="185"/><path d="M390 185 L376 177 L376 193 Z"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="350" y="22" font-weight="bold">K</text><text x="410" y="97" font-weight="bold">L</text><text x="200" y="40">Kuvvet</text><text x="320" y="175">Kuvvet</text><text x="442" y="292">Pano</text></g></svg>`,
  secenekler: [
    "K'nın panoya uyguladığı basınç, L'ninkinden büyüktür.",
    "Takozlar yere değil duvara bastırıldığı için panoya hiç basınç uygulamaz.",
    "L'nin panoya uyguladığı basınç, K'nınkinden büyüktür.",
    "Kuvvetler eşit olduğu için iki takozun basıncı da eşittir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Basıncı yalnızca ağırlığa bağlama: basınç, yüzeye dik uygulanan her kuvvetle oluşur; kuvvet yatay olsa da panoya dik olduğu için basınç oluşturur.",
    "Alan ile basınç ilişkisini ters kurma: geniş yüzle değen L'nin kuvveti daha geniş alana yayılır, basıncı küçüktür.",
    "Yalnızca kuvvete bakma: kuvvetler eşit olsa da temas alanları farklı olduğu için basınçlar farklıdır."
  ],
  aciklama: `Basınç, bir yüzeye dik olarak etki eden kuvvetin o yüzeyin birim alanına düşen kısmıdır. Kuvvetin ağırlık olması gerekmez; yüzeye dik olması yeterlidir.
Adım 1: Can'ın kuvvetleri yatay yöndedir ve dik duran panoya diktir. Bu yüzden iki takoz da panoya basınç uygular.
Adım 2: Kuvvetler eşittir. K panoya dar yüzüyle, L geniş yüzüyle değer.
Adım 3: Eşit kuvvet daha küçük alana düşünce basınç büyür. K'nın panoya uyguladığı basınç L'ninkinden büyüktür.
Sık yapılan hata: Katı basıncını yalnızca ağırlıkla ve yere doğru düşünmek. Duvara bastırılan silgi, tahtaya yazan tebeşir de basınç uygular.
Cevap A.`
},
{
  id: "fen-kb-214",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Yağmurdan sonra çamur olan bir köy yolundan sırayla paletli bir iş makinesi, bir otomobil ve yüklü bir bisiklet geçmiştir. Araçların ağırlıkları ile çamurda bıraktıkları izlerin derinlikleri tabloda verilmiştir.
I. Ağırlığı en büyük olan araç, çamura en büyük basıncı uygulayan araç değildir.
II. Otomobilin çamura uyguladığı basınç, iş makinesininkinden büyüktür.
III. Bisikletin çamura uyguladığı basınç, üç araç arasında en küçüktür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Araç</th><th>Ağırlık</th><th>İz derinliği</th></tr><tr><td>Paletli iş makinesi</td><td>Çok büyük</td><td>2 cm</td></tr><tr><td>Otomobil</td><td>Orta</td><td>6 cm</td></tr><tr><td>Yüklü bisiklet</td><td>Küçük</td><td>4 cm</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: otomobilin izi (6 cm) iş makinesinin izinden (2 cm) derindir; basıncı da büyüktür.",
    "I. yargıyı atlama: en ağır araç iş makinesidir ama en derin izi otomobil bırakmıştır; en büyük basıncı uygulayan otomobildir.",
    null,
    "Basıncı yalnızca ağırlıkla değerlendirme: bisiklet en hafif araçtır ama izi iş makinesininkinden derindir; en küçük basıncı iş makinesi uygular."
  ],
  aciklama: `Aynı çamurda iz ne kadar derinse aracın çamura uyguladığı basınç o kadar büyüktür.
Adım 1: Tablodan basınçları sırala. İz derinlikleri otomobilde 6 cm, bisiklette 4 cm, iş makinesinde 2 cm'dir. Basınç sıralaması: otomobil > bisiklet > iş makinesi.
Adım 2: I. yargıyı kontrol et. En ağır araç iş makinesidir, en büyük basıncı ise otomobil uygulamıştır. Doğrudur.
Adım 3: II. yargıyı kontrol et. Otomobilin izi iş makinesininkinden derindir. Doğrudur.
Adım 4: III. yargıyı kontrol et. En küçük basıncı en sığ izi bırakan iş makinesi uygulamıştır, bisiklet değil. Yanlıştır.
Adım 5: Doğru yargılar I ve II'dir. İş makinesi çok ağır olduğu hâlde geniş paletleri ağırlığını büyük bir alana yaydığı için basıncı en küçüktür.
Sık yapılan hata: "En hafif araç en az basınç uygular." demek. Bisikletin ince lastikleri çamura çok küçük bir alanla değdiği için basıncı küçük değildir.
Cevap C.`
},
{
  id: "fen-kb-215",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Selin, içinde ne olduğunu bilmediği, kapalı K ve L kutularını aynı kum zeminin üzerine koymuştur. Kutuları kaldırdığında K'nın kumda bıraktığı izin L'ninkinden daha derin olduğunu görmüştür. Selin kutuları tartmamış, kuma değen yüzeylerinin alanlarını da ölçmemiştir.
I. K'nın ağırlığı L'ninkinden büyüktür.
II. Ağırlıkları eşitse K'nın kuma değen alanı L'ninkinden küçüktür.
III. Kuma değen alanları eşitse K'nın ağırlığı L'ninkinden büyüktür.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Derin izi ağırlığa bağlama: derin iz basıncın büyük olduğunu gösterir; bu, K'nın daha ağır olmasından da daha küçük alanla değmesinden de kaynaklanabilir.",
    "III. yargıyı atlama: alanlar eşitse basınç farkının tek nedeni ağırlık olabilir; K daha derin battığına göre daha ağırdır.",
    "I. yargıyı kesin sanma: K, L'den hafif olsa bile çok daha küçük bir alanla değerse daha derin iz bırakabilir; ağırlık kesin bilinemez.",
    null
  ],
  aciklama: `Adım 1: Kesin olarak bilinen tek şey, K'nın izinin daha derin olduğudur. Aynı kumda derin iz, büyük basınç demektir. Yani K'nın basıncı L'ninkinden büyüktür.
Adım 2: I. yargıyı kontrol et. K'nın basıncının büyük olması iki nedenden kaynaklanabilir: K daha ağır olabilir ya da kuma daha küçük bir alanla değiyor olabilir. Selin ne ağırlıkları ne de alanları ölçtüğü için K'nın daha ağır olduğu kesin değildir. Kesin doğru değildir.
Adım 3: II. yargıyı kontrol et. Ağırlıklar eşitse basınç farkını yalnızca alan açıklar. Basıncı büyük olan K'nın alanı küçüktür. Kesinlikle doğrudur.
Adım 4: III. yargıyı kontrol et. Alanlar eşitse basınç farkını yalnızca ağırlık açıklar. Basıncı büyük olan K daha ağırdır. Kesinlikle doğrudur.
Adım 5: Kesin doğru olan yargılar II ve III'tür.
Sık yapılan hata: Kökteki "kesinlikle" sözcüğünü atlamak. "Olabilir" ile "kesindir" farklıdır.
Cevap D.`
},
{
  id: "fen-kb-216",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Melis, özdeş iki tuğladan birini geniş yüzeyi üzerine kuma, diğerini dar yüzeyi üzerine una koymuştur. Tuğlaların batma derinlikleri görselde verilmiştir. Melis bu sonuca bakarak "Temas alanı küçüldükçe basınç artar." yargısına varmıştır. Öğretmeni, yargının doğru olabileceğini ama bu deneyle bu yargıya varılamayacağını söylemiştir.
**Öğretmenin gerekçesi ve deneyin nasıl düzeltilmesi gerektiği aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Kumda geniş yüzeyi üzerinde ve unda dar yüzeyi üzerinde duran özdeş tuğlalar"><g stroke="currentColor" stroke-width="2"><rect x="20" y="150" width="220" height="70" fill="var(--dolgu)"/><rect x="280" y="150" width="220" height="70" fill="var(--vurgu2)" fill-opacity="0.2"/></g><g fill="var(--vurgu)" fill-opacity="0.4" stroke="currentColor" stroke-width="2"><rect x="70" y="120" width="120" height="40"/><rect x="370" y="50" width="40" height="130"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="130" y="30" font-weight="bold">Kum</text><text x="390" y="30" font-weight="bold">Un</text><text x="130" y="100">Geniş yüzeyi üzerinde</text><text x="460" y="80">Dar yüzeyi</text><text x="460" y="100">üzerinde</text><text x="130" y="248">Batma: 1 cm</text><text x="390" y="248">Batma: 4 cm</text></g></svg>`,
  secenekler: [
    "Zemin türü de değiştiği için fark yalnızca temas alanına bağlanamaz; iki tuğla aynı zemine konmalıdır.",
    "Tuğlaların ağırlıkları farklı olduğu için fark temas alanına bağlanamaz; tuğlalar önce tartılmalıdır.",
    "Batma derinliği basıncı göstermediği için sonuç geçersizdir; tuğlaların kütleleri ölçülmelidir.",
    "Deneyde tek bir tuğla kullanılmalıdır; aynı tuğla sırayla önce kuma, sonra una konmalıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kontrol değişkenini gözden kaçırma: tuğlalar özdeş olduğu için ağırlıkları zaten eşittir; sorun ağırlıkta değil zemindedir.",
    "Göstergeyi reddetme: aynı zemin kullanıldığında batma derinliği basıncın geçerli bir göstergesidir; sorun göstergede değil zemindedir.",
    "Hatayı sürdüren düzeltme: tuğla aynı olsa bile biri kuma biri una konursa zemin türü yine değişir; sorun çözülmez."
  ],
  aciklama: `Adım 1: Melis'in deneyinde değişenleri listele. Temas alanı değişmiştir (geniş yüz ve dar yüz). Ama zemin de değişmiştir (kum ve un). Tuğlalar özdeş olduğu için ağırlık değişmemiştir.
Adım 2: İki değişken birlikte değiştiğinde batma farkının hangisinden kaynaklandığı bilinemez. Un kumdan daha yumuşaksa dar yüzdeki tuğla yalnızca zemin yüzünden daha çok batmış olabilir.
Adım 3: Deneyi düzeltmek için zemin türü kontrol değişkeni yapılmalı, yani iki tuğla da aynı zemine konmalıdır. O zaman değişen tek şey temas alanı olur.
Sık yapılan hata: Sonuç doğru bir bilgiyle örtüşünce deneyi de doğru sanmak. Bir deneyin geçerli olması için bağımsız değişken dışındaki her şey sabit tutulmalıdır.
Cevap A.`
},
{
  id: "fen-kb-217",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Ahmet, kum havuzunda görseldeki adımları sırayla uygulamıştır. Başlangıçta bir tuğla geniş yüzeyi üzerinde durmaktadır.
1. adım: Tuğlayı en dar yüzeyi üzerine diker.
2. adım: Dikili tuğlanın yanına, özdeş ikinci bir tuğlayı aynı biçimde diker.
3. adım: İkinci tuğlayı alıp birinci tuğlanın üzerine koyar.
I. 1. adımda, tuğlanın kuma uyguladığı basınç artar.
II. 2. adımda, tuğlaların kuma uyguladığı basınç artar.
III. 3. adımdaki basınç, 2. adımdakinden büyüktür.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 250" role="img" aria-label="Tuğlanın başlangıç konumu ve üç adımdaki dizilişleri"><rect x="0" y="200" width="560" height="30" fill="var(--dolgu)"/><line x1="0" y1="200" x2="560" y2="200" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"><line x1="140" y1="30" x2="140" y2="230"/><line x1="280" y1="30" x2="280" y2="230"/><line x1="420" y1="30" x2="420" y2="230"/></g><g fill="var(--vurgu)" fill-opacity="0.4" stroke="currentColor" stroke-width="2"><rect x="30" y="178" width="80" height="22"/><rect x="199" y="120" width="22" height="80"/><rect x="319" y="120" width="22" height="80"/><rect x="359" y="120" width="22" height="80"/><rect x="479" y="120" width="22" height="80"/><rect x="479" y="40" width="22" height="80"/></g><g fill="currentColor" font-size="15" font-weight="bold" text-anchor="middle"><text x="70" y="24">Başlangıç</text><text x="210" y="24">1. adım</text><text x="350" y="24">2. adım</text><text x="490" y="24">3. adım</text></g></svg>`,
  secenekler: ["Yalnız II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Yan yana dizmeyi ağırlık artışı sanma: 2. adımda ağırlık iki katına çıkar ama temas alanı da iki katına çıkar; basınç değişmez. Ayrıca I ve III doğrudur.",
    null,
    "II. yargıyı doğru sayıp I'i atlama: tuğla dar yüzeyine dikilince temas alanı küçülür ve basınç artar; 2. adımda ise basınç değişmez.",
    "II. yargıyı doğru sayma: yan yana dikilen özdeş tuğlaların her biri kendi yüzeyi üzerinde durur; basınç 1. adımdakiyle aynı kalır."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. Tuğla geniş yüzeyinden en dar yüzeyine dikilince ağırlığı aynı kalır, temas alanı küçülür. Basınç artar. Doğrudur.
Adım 2: II. yargıyı kontrol et. İkinci tuğla yanına dikilince kuma binen toplam ağırlık iki katına çıkar, ama kuma değen alan da iki katına çıkar. Her tuğla kumun kendi altındaki bölümüne 1. adımdakiyle aynı basıncı uygular. Basınç değişmez. Yanlıştır.
Adım 3: III. yargıyı kontrol et. 3. adımda iki tuğlanın ağırlığı yine kuma biner, ama kuma yalnızca alttaki tuğlanın dar yüzeyi değer. Aynı ağırlık 2. adımdakinin yarısı kadar alana düştüğü için basınç büyür. Doğrudur.
Adım 4: Doğru yargılar I ve III'tür.
Sık yapılan hata: "Tuğla sayısı arttı, basınç da arttı." demek. Yan yana eklenen tuğla alanı da artırır; basıncı artıran, tuğlanın üst üste konmasıdır.
Cevap B.`
},
{
  id: "fen-kb-218",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Ece, \"Ağır bir cisim yumuşak bir zemine, hafif bir cisimden her zaman daha çok batar.\" demiştir. Arkadaşı Kaan, farklı ağırlıklarda ve farklı taban alanlarında kutular kullanarak bu görüşün yanlış olduğunu göstermek istemektedir.\n**Kaan'ın aşağıdaki gözlemlerden hangisini yapması, Ece'nin görüşünün yanlış olduğunu gösterir?**",
  gorsel: null,
  secenekler: [
    "Ağırlıkları eşit iki kutudan tabanı dar olanın kuma daha derin batması",
    "Tabanları özdeş iki kutudan ağır olanın kuma daha derin batması",
    "Ağırlıkları farklı iki kutunun, kum yerine una konunca daha derin batması",
    "Tabanı geniş ağır bir kutunun, tabanı dar hafif bir kutudan daha az batması"
  ],
  dogru: 3,
  hatalar: [
    "Görüşle ilgisiz gözlemi seçme: ağırlıklar eşit olduğu için bu gözlem ağır ve hafif cisimleri karşılaştırmaz; Ece'nin görüşünü sınamaz.",
    "Görüşü destekleyen gözlemi seçme: tabanlar aynıyken ağır kutunun daha çok batması Ece'nin söylediğine uygundur.",
    "Zemin değişkenine kayma: bu gözlem zeminin batmaya etkisini gösterir; ağır cisimle hafif cismin karşılaştırılmasıyla ilgili değildir.",
    null
  ],
  aciklama: `Bir görüşün yanlış olduğunu göstermek için, görüşün söylediğinin tersinin gerçekleştiği tek bir örnek yeterlidir.
Adım 1: Ece'nin görüşü şudur: ağır cisim her durumda hafif cisimden daha çok batar. Bunu çürütmek için ağır cismin hafif cisimden daha az battığı bir durum bulunmalıdır.
Adım 2: Seçenekleri incele. İlk seçenekte ağırlıklar eşittir; ağır-hafif karşılaştırması yoktur. İkinci seçenek görüşü destekler. Üçüncü seçenek zemin türüyle ilgilidir.
Adım 3: Son seçenekte ağır kutu, tabanı geniş olduğu için ağırlığını büyük bir alana yayar; hafif ama dar tabanlı kutudan daha az basınç uygular ve daha az batar. Bu gözlem "her zaman" sözünü çürütür.
Sık yapılan hata: Görüşü destekleyen bir gözlemi, görüşü sınayan gözlem sanmak. Destekleyen gözlem ne kadar çok olursa olsun "her zaman" iddiasını kanıtlamaz; tek bir karşı örnek ise çürütür.
Cevap D.`
},
{
  id: "fen-kb-219",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir tahta blok önce P yüzeyi, sonra R yüzeyi üzerine aynı kum zemine konmuştur. Her iki durumda da bloğun üzerine özdeş ağırlıklar birer birer eklenmiş ve bloğun kuma batma derinliği ölçülmüştür. Sonuçlar grafikte verilmiştir.
I. Blok, P yüzeyi üzerindeyken kuma daha küçük basınç uygulamıştır.
II. R yüzeyinin alanı, P yüzeyininkinden büyüktür.
III. İki durumda da eklenen ağırlık arttıkça bloğun kuma uyguladığı basınç artmıştır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 300" role="img" aria-label="Eklenen ağırlık sayısına göre P ve R yüzeyleri için batma derinliği grafiği"><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="80" y1="175" x2="480" y2="175"/><line x1="80" y1="130" x2="480" y2="130"/><line x1="80" y1="85" x2="480" y2="85"/><line x1="80" y1="40" x2="480" y2="40"/></g><g stroke="currentColor" stroke-width="2"><line x1="80" y1="30" x2="80" y2="220"/><line x1="80" y1="220" x2="490" y2="220"/></g><polyline points="110,175 220,145 330,115 440,85" fill="none" stroke="var(--vurgu)" stroke-width="3"/><polyline points="110,205 220,190 330,175 440,160" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/><g fill="var(--vurgu)"><circle cx="110" cy="175" r="5"/><circle cx="220" cy="145" r="5"/><circle cx="330" cy="115" r="5"/><circle cx="440" cy="85" r="5"/></g><g fill="var(--vurgu2)"><circle cx="110" cy="205" r="5"/><circle cx="220" cy="190" r="5"/><circle cx="330" cy="175" r="5"/><circle cx="440" cy="160" r="5"/></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="72" y="225">0</text><text x="72" y="180">3</text><text x="72" y="135">6</text><text x="72" y="90">9</text><text x="72" y="45">12</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="110" y="240">0</text><text x="220" y="240">1</text><text x="330" y="240">2</text><text x="440" y="240">3</text><text x="285" y="262">Eklenen ağırlık sayısı</text></g><g font-size="15" font-weight="bold"><text x="452" y="82" fill="var(--vurgu)">P</text><text x="452" y="164" fill="var(--vurgu2)">R</text></g><text x="20" y="20" fill="currentColor" font-size="14">Batma derinliği (mm)</text><text x="260" y="290" fill="currentColor" font-size="15" text-anchor="middle" font-weight="bold">Grafik: Eklenen ağırlığa göre batma derinliği</text></svg>`,
  secenekler: ["Yalnız II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III. yargıyı atlama: iki çizgi de yükselmektedir; ağırlık eklendikçe iki durumda da basınç artmıştır.",
    "Grafiği ters okuma: P çizgisi her noktada R çizgisinin üstündedir; P yüzeyi üzerindeyken blok daha derin batmış, daha büyük basınç uygulamıştır.",
    null,
    "I. yargıyı doğru sayma: P yüzeyi üzerindeyken iz daha derin olduğuna göre basınç daha küçük değil, daha büyüktür."
  ],
  aciklama: `Adım 1: Grafiği oku. Aynı sayıda ağırlık eklendiğinde P yüzeyi için batma derinliği her zaman R yüzeyininkinden büyüktür (örneğin hiç ağırlık yokken 3 mm ve 1 mm).
Adım 2: I. yargıyı kontrol et. Daha derin batma daha büyük basınç demektir. Blok P yüzeyi üzerindeyken daha büyük basınç uygulamıştır. Yanlıştır.
Adım 3: II. yargıyı kontrol et. Blok ve eklenen ağırlıklar iki durumda aynıdır; yani ağırlıklar eşittir. Eşit ağırlıkta basıncı küçük olan R yüzeyinin alanı daha büyük olmalıdır. Doğrudur.
Adım 4: III. yargıyı kontrol et. İki çizgi de sağa doğru yükselmektedir. Ağırlık eklendikçe batma, yani basınç artmıştır. Doğrudur.
Adım 5: Doğru yargılar II ve III'tür.
Sık yapılan hata: Çizgisi altta kalan yüzeyin "daha küçük" olduğunu sanmak. Alttaki çizgi az batmayı, yani geniş yüzeyi gösterir.
Cevap C.`
},
{
  id: "fen-kb-220",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir araştırma ekibi, bataklık bir alanda çalışacak bir araç için dört tasarım hazırlamıştır. Aracın çamura olabildiğince az batması istenmektedir. Dört tasarım da aynı bataklıkta, aynı tür zeminde denenecektir. Tasarımların ağırlıkları ile palet ya da tekerleklerinin zemine değen toplam alanları tabloda verilmiştir.\n**Buna göre ekip hangi tasarımı seçmelidir?**",
  gorsel: `<table class="tablo"><tr><th>Tasarım</th><th>Ağırlık</th><th>Zemine değen toplam alan</th></tr><tr><td>K</td><td>20 birim</td><td>8 birim kare</td></tr><tr><td>L</td><td>20 birim</td><td>4 birim kare</td></tr><tr><td>M</td><td>30 birim</td><td>8 birim kare</td></tr><tr><td>N</td><td>30 birim</td><td>4 birim kare</td></tr></table>`,
  secenekler: ["K tasarımını", "L tasarımını", "M tasarımını", "N tasarımını"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca ağırlığa bakma: L de K kadar hafiftir ama zemine değen alanı K'nınkinin yarısıdır; basıncı daha büyüktür.",
    "Yalnızca alana bakma: M de K kadar geniş bir alanla değer ama daha ağırdır; basıncı daha büyüktür.",
    "Alan ile basınç ilişkisini ters kurma: N hem en ağır hem en küçük alanlı tasarımdır; en büyük basıncı uygular ve en çok batar."
  ],
  aciklama: `Aracın çamura az batması için çamura uyguladığı basınç en küçük olmalıdır. Basınç, ağırlık azaldıkça ve temas alanı büyüdükçe küçülür.
Adım 1: Ağırlıkları karşılaştır. En hafif tasarımlar K ve L'dir (20 birim).
Adım 2: Alanları karşılaştır. En geniş alanlı tasarımlar K ve M'dir (8 birim kare).
Adım 3: Hem en hafif hem en geniş alanlı olan tek tasarım K'dir. K, L ile aynı ağırlıkta ama daha geniş alanlıdır; M ile aynı alanda ama daha hafiftir. Öyleyse en küçük basıncı K uygular.
Sık yapılan hata: Tek bir değişkene bakıp karar vermek. L'yi seçen alanı, M'yi seçen ağırlığı gözden kaçırmıştır.
Cevap A.`
},
{
  id: "fen-kb-221",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir çöl gezisinde rehber, aynı kum yolda yürüyen bir deve ile bir atın izlerini karşılaştırmıştır. Devenin ağırlığı atınkinden fazla olduğu hâlde devenin ayak izleri atınkilerden daha sığdır. Rehber, bunun devenin ayak yapısıyla ilgili olduğunu söylemiştir.
I. Devenin kuma uyguladığı basınç, atınkinden küçüktür.
II. Devenin ayaklarının kuma değen alanı, atınkinden büyüktür.
III. Atın kuma uyguladığı kuvvet, devenin uyguladığından küçüktür.
**Buna göre yukarıdaki yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III. yargıları atlama: ağır olan deve daha az batıyorsa ağırlığını daha geniş bir alana yaymış olmalıdır; at da daha hafif olduğu için kuma daha küçük kuvvet uygular.",
    "I. ve II. yargıları atlama: sığ iz daha küçük basınç demektir; ağır olduğu hâlde basıncı küçük olan devenin temas alanı kesinlikle daha büyüktür.",
    "I. yargıyı atlama: izin sığ olması, devenin kuma daha küçük basınç uyguladığını doğrudan gösterir.",
    null
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. İki hayvan aynı kumda yürümektedir. Devenin izleri daha sığ olduğuna göre kuma uyguladığı basınç daha küçüktür. Kesinlikle doğrudur.
Adım 2: II. yargıyı kontrol et. Deve daha ağırdır, yani kuma daha büyük kuvvet uygular. Buna rağmen basıncı daha küçükse bu kuvveti daha geniş bir alana yayıyor olmalıdır. Ağır olup basıncı küçük olmanın başka bir yolu yoktur. Kesinlikle doğrudur.
Adım 3: III. yargıyı kontrol et. Kuma uygulanan kuvvet hayvanın ağırlığıdır. At deveden hafif olduğuna göre kuma daha küçük kuvvet uygular. Kesinlikle doğrudur.
Adım 4: Üç yargı da kesinlikle doğrudur.
Sağlama: Devenin ayak tabanı geniş ve yumuşak bir yastık gibidir; atın ayağı ise küçük ve sert bir toynakla biter.
Cevap D.`
},
{
  id: "fen-kb-222",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Karlı bir yamaçta mola veren bir dağcı sırasıyla üç farklı biçimde durmuştur:
1. durum: Sırt çantası yokken iki ayağı üzerinde duruyor.
2. durum: Ağır sırt çantasını sırtına takmış, iki ayağı üzerinde duruyor.
3. durum: Sırt çantası sırtındayken tek ayağı üzerinde duruyor.
Dağcı her durumda aynı botları giymiştir.
**Buna göre dağcının kara uyguladığı basınçların büyükten küçüğe sıralaması aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["1 > 2 > 3", "2 = 3 > 1", "3 > 1 = 2", "3 > 2 > 1"],
  dogru: 3,
  hatalar: [
    "Sıralamayı ters kurma: ağırlık arttıkça ve temas alanı küçüldükçe basınç artar; en küçük basınç 1. durumdadır.",
    "Yalnızca ağırlığa bakma: 2. ve 3. durumlarda ağırlık aynıdır ama 3. durumda temas alanı yarıya inmiştir; basınç daha büyüktür.",
    "Çantanın ağırlığını hesaba katmama: çanta sırttayken dağcının kara uyguladığı toplam kuvvet artar; 2. durumdaki basınç 1. durumdakinden büyüktür.",
    null
  ],
  aciklama: `Adım 1: 1. ve 2. durumları karşılaştır. İkisinde de dağcı iki ayağı üzerindedir; temas alanı aynıdır. 2. durumda çantanın ağırlığı da kara biner, toplam kuvvet artar. Öyleyse 2. durumdaki basınç 1. durumdakinden büyüktür.
Adım 2: 2. ve 3. durumları karşılaştır. İkisinde de çanta sırttadır; toplam ağırlık aynıdır. 3. durumda dağcı tek ayak üzerinde durduğu için temas alanı yarıya iner. Öyleyse 3. durumdaki basınç 2. durumdakinden büyüktür.
Adım 3: İki karşılaştırmayı birleştir: 3 > 2 > 1.
Sağlama: Her karşılaştırmada yalnız bir değişken değişmiştir; önce ağırlık, sonra alan. Böyle adım adım ilerlemek sıralamayı kolaylaştırır.
Cevap D.`
},
{
  id: "fen-kb-223",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Emir, özdeş K ve L kutularından K'nın içini kumla doldurmuş, L'yi boş bırakmıştır. Sonra K'yı dar yüzeyi, L'yi geniş yüzeyi üzerine aynı oyun hamuruna koymuştur. Kutuların hamurda bıraktığı izler görselde verilmiştir.
I. K'nın hamura uyguladığı basınç, L'ninkinden büyüktür.
II. Bu deney, basıncın yalnızca ağırlığa bağlı olduğunu gösterir.
III. Bu deneyle, temas alanının basınca etkisi tek başına test edilemez.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Kumla dolu K kutusu dar yüzeyi, boş L kutusu geniş yüzeyi üzerinde oyun hamurunda"><rect x="0" y="180" width="520" height="30" fill="var(--dolgu)"/><line x1="0" y1="180" x2="520" y2="180" stroke="currentColor" stroke-width="2"/><rect x="110" y="58" width="50" height="134" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><rect x="320" y="132" width="134" height="50" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="135" y="40" font-weight="bold">K (kumla dolu)</text><text x="387" y="118" font-weight="bold">L (boş)</text><text x="135" y="235">İz derinliği: 12 mm</text><text x="387" y="235">İz derinliği: 2 mm</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III. yargıyı atlama: deneyde hem ağırlık hem temas alanı değişmiştir; bu yüzden alanın etkisi tek başına ayırt edilemez.",
    "Tek değişkene odaklanma: K hem daha ağırdır hem daha dar yüzeyle değer; derin iz yalnızca ağırlığa bağlanamaz.",
    null,
    "I. yargıyı atlayıp II'yi doğru sayma: derin iz K'nın basıncının büyük olduğunu gösterir; deney ise basıncın yalnızca ağırlığa bağlı olduğunu göstermez."
  ],
  aciklama: `Adım 1: I. yargıyı kontrol et. K'nın izi 12 mm, L'ninki 2 mm'dir. Aynı hamurda derin iz büyük basınç demektir. Doğrudur.
Adım 2: Deneyde neyin değiştiğini belirle. K kumla dolu olduğu için daha ağırdır; üstelik dar yüzeyi üzerinde durduğu için temas alanı da küçüktür. Yani iki değişken birlikte değişmiştir.
Adım 3: II. yargıyı kontrol et. İki değişken birlikte değiştiği için batma farkını yalnızca ağırlığa bağlayamayız. Yanlıştır.
Adım 4: III. yargıyı kontrol et. Aynı gerekçeyle alanın etkisi de tek başına ayırt edilemez. Bunu test etmek için ağırlıkları eşit tutup yalnız yüzeyleri değiştirmek gerekir. Doğrudur.
Adım 5: Doğru yargılar I ve III'tür.
Sık yapılan hata: Sonucu bilinen bir ilkeyle örtüşen deneyi geçerli saymak. Bir değişkenin etkisini göstermek için yalnız o değişken değiştirilmelidir.
Cevap C.`
},
{
  id: "fen-kb-224",
  kazanim: "F.8.3.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Ay'a inecek bir keşif aracının iniş ayaklarının uçlarına geniş, tabak biçimli parçalar takılmıştır. Mühendisler bu tasarımı, aracın Ay yüzeyini kaplayan ince toza gömülmemesi için yapmıştır. Araç, yola çıkmadan önce aynı ayaklarla Dünya'da, Ay'daki tozla aynı özellikte bir toz zeminde de denenmiştir.
I. Tabak biçimli parçalar, ayakların zemine değen alanını büyüterek basıncı azaltır.
II. Araç Ay'da, kütlesi azaldığı için zemine Dünya'dakinden daha küçük kuvvet uygular.
III. Araç, Dünya'daki toz zeminde Ay'dakinden daha derin iz bırakır.
**Buna göre yukarıdaki yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "III. yargıyı atlama: Dünya'nın çekimi Ay'ınkinden güçlü olduğu için araç Dünya'da daha ağırdır; ayaklar aynı olduğundan Dünya'da basınç daha büyük, iz daha derin olur.",
    null,
    "I. yargıyı atlayıp II'yi doğru sayma: tabak biçimli parçalar temas alanını büyütür ve basıncı azaltır; Ay'da değişen de kütle değil ağırlıktır.",
    "Kütle ile ağırlığı karıştırma: araç Ay'da gerçekten daha küçük kuvvet uygular ama bunun nedeni kütlenin değil ağırlığın azalmasıdır; kütle bulunulan yere göre değişmez."
  ],
  aciklama: `Kütle, cismin madde miktarıdır ve bulunduğu yere göre değişmez. Ağırlık ise cisme etki eden çekim kuvvetidir; Ay'ın çekimi Dünya'nınkinden zayıf olduğu için aynı cismin Ay'daki ağırlığı daha azdır.
Adım 1: I. yargıyı kontrol et. Tabak biçimli parçalar ayakların zemine değen alanını büyütür. Aynı ağırlık daha geniş alana yayılınca basınç azalır ve araç toza gömülmez. Doğrudur.
Adım 2: II. yargıyı kontrol et. Aracın zemine uyguladığı dik kuvvet ağırlığıdır. Ağırlık Ay'da azaldığı için araç Ay'da gerçekten daha küçük kuvvet uygular. Ama yargının gerekçesi "kütlesi azaldığı için" demektedir; kütle değişmez. Gerekçe yanlış olduğu için yargı yanlıştır.
Adım 3: III. yargıyı kontrol et. Ayaklar aynı olduğu için iki yerde de temas alanı eşittir. Araç Dünya'da daha ağır olduğu için zemine uyguladığı basınç da Dünya'da daha büyüktür. Zeminler aynı özellikte olduğuna göre Dünya'daki iz daha derindir. Doğrudur.
Adım 4: Doğru yargılar I ve III'tür.
Sık yapılan hata: Kütle ile ağırlığı aynı şey sanmak. Ay'da araç "hafifler" ama madde miktarı azalmaz.
Cevap B.`
},
{
  id: "fen-kb-225",
  kazanim: "F.8.3.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Mina, dolu ve kapalı bir meyve suyu kutusunu üç farklı yüzeyi üzerine sırayla aynı süngerin üstüne koymuş, her seferinde süngerdeki çökmeyi ölçüp tabloya yazmıştır. Deney raporunun sonuç bölümüne şu iki yorumu eklemiştir:
1. yorum: "Kutu daha küçük bir yüzeyi üzerine konduğunda süngere uyguladığı kuvvet artmıştır."
2. yorum: "Kutunun süngere değen alanı küçüldükçe süngere uyguladığı basınç artmıştır."
**Öğretmenin bu rapor için yapacağı doğru değerlendirme aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Deney</th><th>Süngere değen yüz</th><th>Süngerdeki çökme</th></tr><tr><td>1</td><td>En geniş yüzü</td><td>2 mm</td></tr><tr><td>2</td><td>Orta büyüklükteki yüzü</td><td>5 mm</td></tr><tr><td>3</td><td>En küçük yüzü</td><td>9 mm</td></tr></table>`,
  secenekler: [
    "1. yorum düzeltilmelidir: kutunun ağırlığı değişmez, değişen yalnızca alandır.",
    "2. yorum düzeltilmelidir: temas alanı küçüldükçe basınç artmamış, azalmıştır.",
    "2. yorum düzeltilmelidir: tabloya göre basınç, temas alanından etkilenmemiştir.",
    "İki yorum da doğrudur: temas alanı küçüldükçe kuvvet de basınç da artmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tabloyu ters okuma: kutu en geniş yüzünden en küçük yüzüne geçtikçe çökme 2 mm'den 9 mm'ye çıkmıştır; basınç artmıştır.",
    "Tablodaki değişimi görmeme: çökme her konumda farklıdır; temas alanı basıncı etkilemiştir.",
    "Basınç ile kuvveti karıştırma: kutu aynı olduğu için süngere uyguladığı kuvvet, yani ağırlığı değişmez; artan yalnızca basınçtır."
  ],
  aciklama: `Adım 1: Deneyde değişen ve değişmeyeni belirle. Mina aynı kutuyu kullanmıştır; kutunun ağırlığı, yani süngere uyguladığı kuvvet her konumda aynıdır. Değişen, süngere değen alandır.
Adım 2: 1. yorumu değerlendir. Kutu küçük bir yüzeyi üzerine konunca kuvvet artmaz; kuvvet ağırlığa eşittir ve sabittir. Bu yorum yanlıştır ve düzeltilmelidir.
Adım 3: 2. yorumu değerlendir. Tabloda süngere değen yüz küçüldükçe çökme 2 mm, 5 mm ve 9 mm olarak artmıştır. Çökme basıncın göstergesi olduğuna göre alan küçüldükçe basınç artmıştır. Bu yorum doğrudur.
Adım 4: Öğretmen yalnız 1. yorumu düzeltmelidir.
Sık yapılan hata: Çökmenin artmasını kuvvetin artmasına bağlamak. Çökmeyi artıran basınçtır; basınç, kuvvet sabitken alan küçülünce de artar.
Cevap A.`
}
);
