// Fen Bilimleri — Sıvı ve Gaz Basıncı: Kademe 1 (Kavrama) yedeği, 50 soru (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sivi-gaz-basinci"] = window.LGS_BANK["sivi-gaz-basinci"] || []).push(
/* ===================== KADEME 1 — KAVRAMA YEDEĞİ ===================== */
{
  id: "fen-sg-126",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Su dolu bir kapta bir noktadaki sıvı basıncını artırmak için aşağıdakilerden hangisi yapılabilir?**",
  gorsel: null,
  secenekler: [
    "Noktanın derinliğini değiştirmeden kabı daha geniş yapmak",
    "Noktayı su yüzeyine daha yakın bir yere almak",
    "Noktayı su yüzeyinden daha derin bir yere almak",
    "Noktanın derinliğini değiştirmeden kabın biçimini değiştirmek"
  ],
  dogru: 2,
  hatalar: [
    "Genişlik yanılgısı: kap genişleyince sıvı basıncı artmaz; derinlik aynı kaldığı sürece basınç da aynıdır.",
    "Ters yön: noktayı su yüzeyine yaklaştırmak derinliği azaltır; derinlik azalınca basınç da azalır.",
    null,
    "Biçim yanılgısı: kabın biçimi değişse de derinlik aynı kaldığı sürece aynı sıvının basıncı aynıdır."
  ],
  aciklama: `Sıvı basıncı iki değişkene bağlıdır: derinlik ve sıvının cinsi. Derinlik arttıkça basınç artar.
Adım 1: Kabın genişliği ve biçimi sıvı basıncını değiştirmez. Noktanın derinliği aynı kaldığı için A ve D'deki değişiklikler basıncı etkilemez.
Adım 2: B'de nokta su yüzeyine yaklaşır. Derinlik azalır, basınç da azalır.
Adım 3: C'de nokta su yüzeyinden daha aşağıya alınır. Derinlik artar, basınç da artar.
Sık yapılan hata: Kabın genişliğine ya da biçimine bakıp basıncın değişeceğini sanmak.
Cevap C.`
},
{
  id: "fen-sg-127",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Hemşire, enjektörün ucunu ilaç şişesindeki sıvıya daldırıp pistonu geri çekince ilaç enjektörün içine dolar.
**Sıvıyı enjektörün içine iten etki aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Sıvının yüzeyine etki eden açık hava basıncı",
    "Pistonun sıvıyı kendine doğru çekmesi",
    "Şişedeki sıvının derinliğinden doğan basınç",
    "Enjektörün içindeki havanın sıvıyı itmesi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "“Boşluk çeker” yanılgısı: piston sıvıyı çekmez; sıvıyı iten, dışarıdaki büyük basınçtır.",
    "Sıvı basıncıyla karıştırma: şişedeki sıvı çok sığdır; sıvıyı enjektöre çıkaran derinlik basıncı değildir.",
    "Ters yön: piston çekilince enjektörün içindeki hava seyrekleşir, basıncı küçülür; içerideki hava sıvıyı itemez."
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğan ve her yöne etki eden basınçtır.
Adım 1: Piston geri çekilince enjektörün içindeki hava seyrekleşir; içerideki basınç, dışarıdaki açık hava basıncından küçük olur.
Adım 2: Şişedeki sıvının yüzeyine açık hava basıncı etki eder. Bu basınç büyük olduğu için sıvıyı enjektöre doğru iter.
Adım 3: Sıvı, basıncın küçük olduğu yere, yani enjektörün içine dolar.
Sık yapılan hata: Pistonun sıvıyı emdiğini düşünmek. Sıvıyı hareket ettiren, basıncı büyük olan taraftaki havanın itmesidir.
Cevap A.`
},
{
  id: "fen-sg-128",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Özdeş K, L ve M kaplarına sırasıyla X, Y ve Z sıvıları aynı yüksekliğe kadar konmuştur. Sıvıların yoğunlukları arasında Z > Y > X ilişkisi vardır.
**Sıvıların kapların tabanlarına uyguladığı basınçlar arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "P_{X} > P_{Y} > P_{Z}",
    "P_{X} = P_{Y} = P_{Z}",
    "P_{Y} > P_{Z} > P_{X}",
    "P_{Z} > P_{Y} > P_{X}"
  ],
  dogru: 3,
  hatalar: [
    "Ters sıralama: aynı derinlikte yoğunluğu büyük olan sıvının basıncı büyüktür; en yoğun Z'dir.",
    "Yalnız derinliğe bakma: derinlikler eşittir ama sıvıların cinsi farklıdır; basınçlar bu yüzden eşit değildir.",
    "Karışık sıralama: Y'yi en büyük sanma; en yoğun sıvı Z'dir, basıncı en büyük olan da odur.",
    null
  ],
  aciklama: `Aynı derinlikte, yoğunluğu büyük olan sıvının basıncı daha büyüktür. Yoğunluk, bir maddenin birim hacminin kütlesidir.
Adım 1: Üç kapta da sıvı yükseklikleri eşittir. Derinlik aynıdır.
Adım 2: Derinlik aynı olduğundan sıralamayı yoğunluk belirler: Z > Y > X.
Adım 3: Basınçlar da aynı sırayla büyür: P_{Z} > P_{Y} > P_{X}.
Sık yapılan hata: Derinlik eşit diye basınçları eşit saymak. Sıvıların cinsi farklıysa basınçlar da farklıdır.
Cevap D.`
},
{
  id: "fen-sg-129",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerin hangisinde Pascal prensibinden __yararlanılmaz__?**",
  gorsel: null,
  secenekler: [
    "Hidrolik frenin otomobili durdurması",
    "Su kulesinin şehirden yüksek bir tepeye kurulması",
    "Damperli kamyonun kasasının kaldırılması",
    "Hidrolik krikoyla otomobilin kaldırılması"
  ],
  dogru: 1,
  hatalar: [
    "Fren sistemini yabana atma: hidrolik fren, kapalı yağın basıncı iletmesine dayanır; Pascal prensibinden yararlanılır.",
    null,
    "Damperi yabana atma: kasayı kaldıran silindirdeki yağ basıncı iletir; Pascal prensibinden yararlanılır.",
    "Krikoyu yabana atma: hidrolik kriko Pascal prensibinin en bilinen uygulamasıdır."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya ve her yöne aynen iletilir.
Adım 1: Hidrolik fren, damperli kamyon ve hidrolik kriko kapalı bir sistemdeki yağın basıncı iletmesiyle çalışır.
Adım 2: Su kulesi yüksek bir yere kurulur, çünkü sıvı basıncı derinlikle (yükseklikle) artar. Burada kapalı bir sıvıya piston ya da pedalla basınç uygulanmaz.
Adım 3: Soru "yararlanılmaz" diye sorduğu için cevap su kulesidir.
Sık yapılan hata: Sıvıyla ilgili her olayı Pascal prensibine bağlamak.
Cevap B.`
},
{
  id: "fen-sg-130",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi gazların da basınç uyguladığını gösteren bir örnektir?**",
  gorsel: null,
  secenekler: [
    "Su dolu torbanın yan yüzeyinden suyun fışkırması",
    "Havayla şişirilmiş balonun yüzeyinin gerilmesi",
    "Çivinin sivri ucunun tahtaya kolayca batması",
    "Barajın duvarının tabana doğru kalınlaştırılması"
  ],
  dogru: 1,
  hatalar: [
    "Sıvı basıncı örneği: delikten fışkıran su, sıvının yan yüzeye uyguladığı basıncı gösterir; burada bir gaz yoktur.",
    null,
    "Katı basıncı örneği: çivinin ucu küçük olduğu için tahtaya büyük katı basıncı uygular; gazla ilgisi yoktur.",
    "Sıvı basıncı örneği: duvarın tabanında su basıncı en büyüktür; bu olay gazlarla ilgili değildir."
  ],
  aciklama: `Gazlar da sıvılar gibi akışkandır ve bulundukları kabın iç yüzeylerine basınç uygular.
Adım 1: Torbadan fışkıran su ve baraj duvarının kalınlaştırılması, sıvı basıncının örnekleridir.
Adım 2: Çivinin tahtaya batması, küçük yüzeye etki eden katı basıncının örneğidir.
Adım 3: Balonun içindeki hava, balonun iç yüzeyine basınç uygular ve balonu gerer. Bu, gaz basıncının örneğidir.
Sık yapılan hata: Basıncın yalnızca katılara ya da sıvılara özgü olduğunu düşünmek.
Cevap B.`
},
{
  id: "fen-sg-131",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Derin dalışlarda kullanılan özel dalış kıyafetlerinin çok dayanıklı yapılmasının temel nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Derinlere inildikçe açık hava basıncının artması",
    "Derinlere inildikçe suyun yoğunluğunun azalması",
    "Suyun dalgıca yalnızca üstten basınç uygulaması",
    "Derinlere inildikçe su basıncının artması"
  ],
  dogru: 3,
  hatalar: [
    "Hava ile suyu karıştırma: dalgıcı zorlayan, derinlikle artan su basıncıdır; açık hava basıncı derinlikte artmaz.",
    "İlgisiz neden: sıvı basıncı derinlikle artar; yoğunluğun azalması basıncı artırmaz.",
    "Yön yanılgısı: su, dalgıca yalnızca üstten değil, her yönden basınç uygular.",
    null
  ],
  aciklama: `Sıvı basıncı derinlik arttıkça artar ve sıvı, içindeki cisme her yönden basınç uygular.
Adım 1: Dalgıç derine indikçe üzerindeki su tabakasının derinliği artar.
Adım 2: Derinlik arttığı için dalgıca etki eden su basıncı da artar.
Adım 3: Büyük basınca dayanabilmek için derin dalışlarda çok dayanıklı kıyafetler ve araçlar kullanılır.
Sık yapılan hata: Derinde artan basıncı açık hava basıncıyla karıştırmak.
Cevap D.`
},
{
  id: "fen-sg-132",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Ağzı kapalı ve yarısına kadar suyla dolu bir kabın içindeki su, kabın hangi yüzeylerine basınç uygular?**",
  gorsel: null,
  secenekler: [
    "Yalnızca suyla temas eden iç yüzeylerine",
    "Tavan dâhil bütün iç yüzeylerine",
    "Yalnızca tabana",
    "Yalnızca taban ile tavan yüzeyine"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tavanı da katma: kap yarısına kadar dolu olduğundan su tavana temas etmez; basınç yalnızca suyla temas edilen yüzeylere uygulanır.",
    "Katılarla karıştırma: katılar yalnızca üzerinde durdukları yüzeye basar; sıvı temas ettiği yan yüzeylere de basınç uygular.",
    "Yan yüzeyi unutma: su yan yüzeylere de basınç uygular; tavana ise temas etmediği için basınç uygulamaz."
  ],
  aciklama: `Sıvılar akışkandır; tanecikleri birbirinin üzerinden kayabilir ve temas ettikleri yüzeyleri iter.
Adım 1: Su, ağırlığı nedeniyle tabana basınç uygular.
Adım 2: Su, temas ettiği yan yüzeylere de basınç uygular.
Adım 3: Kap yalnızca yarısına kadar dolu olduğu için su tavana ulaşmaz. Temas olmayan yüzeye sıvı basıncı uygulanmaz.
Sağlama: Basınç, sıvının temas ettiği noktalarda vardır; suyla hiç temas etmeyen tavanda yoktur.
Cevap A.`
},
{
  id: "fen-sg-133",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Hidrolik sistemlerde gaz yerine sıvı (çoğunlukla yağ) kullanılmasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Sıvıların gazlardan daha hafif olması",
    "Gazların basıncı hiç iletmemesi",
    "Sıvıların hemen hemen sıkıştırılamaması",
    "Sıvıların açık hava basıncından etkilenmemesi"
  ],
  dogru: 2,
  hatalar: [
    "Yanlış özellik: sıvılar gazlardan hafif değildir; seçimin nedeni ağırlık değil, sıkıştırılabilirliktir.",
    "Aşırı genelleme: gazlar da basınç iletir, ama kolayca sıkıştıkları için itme önce gazı sıkıştırır ve sistem zayıf çalışır.",
    null,
    "İlgisiz neden: sıvıların açık hava basıncından etkilenmemesi sistemin çalışmasını belirleyen özellik değildir."
  ],
  aciklama: `Sıvılar neredeyse hiç sıkıştırılamaz; gazlar ise kolayca sıkışır.
Adım 1: Hidrolik sistemde dar piston itilince oluşan basıncın geniş pistona iletilmesi gerekir.
Adım 2: Sistemde gaz olsaydı, itme önce gazı sıkıştırırdı. Basınç tam iletilmez, sistem zayıf çalışırdı.
Adım 3: Sıvı sıkışmadığı için basıncı aynen iletir. Bu yüzden hidrolik sistemlerde yağ kullanılır.
Sık yapılan hata: Gazların basıncı iletmediğini sanmak. Gazlar da iletir, ama sıkışarak büyük kayıp yaşatır.
Cevap C.`
},
{
  id: "fen-sg-134",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Arabayla deniz kıyısından yüksek bir dağ yoluna çıkan Demet, yükselirken kulaklarının tıkandığını hissetmiştir.
**Demet'in bu hissinin temel nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Yükseldikçe açık hava basıncının azalması",
    "Yükseldikçe açık hava basıncının artması",
    "Arabanın hızının sürekli artması",
    "Yükseldikçe havanın daha yoğun hâle gelmesi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ters yön: yükseldikçe açık hava basıncı artmaz, azalır; hissedilen değişim bu azalmadan kaynaklanır.",
    "İlgisiz neden: kulakların tıkanması hızla değil, dışarıdaki basıncın değişmesiyle ilgilidir.",
    "Ters yön: yükseklerde hava seyrekleşir, yoğunlaşmaz; üstte kalan hava tabakası da incelir."
  ],
  aciklama: `Açık hava basıncı, hava tabakasının ağırlığından doğar ve yükseklere çıkıldıkça azalır.
Adım 1: Deniz kıyısında üstte kalın bir hava tabakası vardır; yükseldikçe bu tabaka incelir ve hava seyrekleşir.
Adım 2: Böylece Demet'in dışındaki açık hava basıncı azalır.
Adım 3: Kulağın içindeki basınç ile dışarıdaki basınç arasındaki bu fark, kulakların tıkanmış gibi hissedilmesine neden olur.
Sık yapılan hata: Yükseldikçe açık hava basıncının arttığını düşünmek.
Cevap A.`
},
{
  id: "fen-sg-135",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Bir iş makinesinin kepçe kolu, silindirin içindeki yağın basıncıyla hareket ettirilir. Pompa yağa basınç uygular ve bu basınç kepçe koluna bağlı pistona iletilir.
**Bu uygulamada aşağıdakilerden hangisinden yararlanılmıştır?**`,
  gorsel: null,
  secenekler: ["Sıvı basıncının derinlikle artmasından","Açık hava basıncının yükseklikle azalmasından","Katı basıncının yüzey alanıyla değişmesinden","Sıvının basıncı her yöne aynen iletmesinden"],
  dogru: 3,
  hatalar: [
    "Sıvı basıncıyla karıştırma: derinlikle artan basınç, açık kaplardaki sıvının kendi ağırlığından doğar; burada yağa dışarıdan basınç uygulanıyor.",
    "Açık hava basıncıyla karıştırma: sistem kapalıdır ve yağ pompayla itilmektedir; yükseklik bir rol oynamaz.",
    "Katı basıncıyla karıştırma: burada temas alanı değil, kapalı sıvının basıncı iletmesi söz konusudur.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya ve her yöne aynen iletilir.
Adım 1: Yağ, kapalı bir silindirin içindedir. Pompa yağa dışarıdan basınç uygular.
Adım 2: Bu basınç yağ aracılığıyla azalmadan kepçe koluna bağlı pistona iletilir ve piston hareket eder.
Adım 3: Kriko, fren ve berber koltuğu gibi iş makineleri de aynı ilkeyle çalışır.
Sık yapılan hata: Sıvıyla çalışan her düzeneği derinlik basıncına bağlamak.
Cevap D.`
},
{
  id: "fen-sg-136",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Aynı cins sıvıyla dolu K, L ve M kaplarının biçimleri, kaplardaki sıvı yükseklikleri tabloda verilmiştir.
**Buna göre kapların tabanlarındaki sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Biçim</th><th>Sıvı yüksekliği</th></tr><tr><td>K</td><td>Dar silindir</td><td>10 cm</td></tr><tr><td>L</td><td>Geniş leğen</td><td>25 cm</td></tr><tr><td>M</td><td>Huni</td><td>15 cm</td></tr></table>`,
  secenekler: [
    "P_{K} > P_{M} > P_{L}",
    "P_{L} > P_{M} > P_{K}",
    "P_{K} = P_{L} = P_{M}",
    "P_{M} > P_{K} > P_{L}"
  ],
  dogru: 1,
  hatalar: [
    "Ters sıralama: sıvı yüksekliği küçük olan K'nin basıncını en büyük sanma; derinlik arttıkça basınç artar.",
    null,
    "Biçime bakıp eşit sayma: aynı sıvıda basınç, kabın biçimine değil derinliğe bağlıdır; yükseklikler farklı olduğundan basınçlar da farklıdır.",
    "Karışık sıralama: M'yi en büyük sanma; en derin sıvı L kabındadır."
  ],
  aciklama: `Aynı sıvıda basıncı yalnızca derinlik belirler; kabın biçimi ve genişliği önemli değildir.
Adım 1: Üç kapta da sıvı aynı cinstir. Karşılaştırmayı derinlik belirler.
Adım 2: Derinlikler L'de 25 cm, M'de 15 cm, K'de 10 cm'dir. Sıralama L > M > K olur.
Adım 3: Basınçlar da aynı sırayla büyür: P_{L} > P_{M} > P_{K}.
Sık yapılan hata: Dar kapta ya da geniş kapta daha büyük basınç olduğunu sanmak.
Cevap B.`
},
{
  id: "fen-sg-137",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Bir bardaktaki meyve suyundan pipetle içen Emre, pipetin üst ucunu parmağıyla kapatıp pipeti bardaktan çıkarmıştır. Pipetin içindeki meyve suyu dökülmemiştir.
**Meyve suyunu pipetin içinde tutan etki aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Parmağın, meyve suyunu pipetin içinde yukarı doğru çekmesi",
    "Meyve suyunun ağırlığının pipette yukarı doğru etki etmesi",
    "Pipetin alt ucundan meyve suyuna etki eden açık hava basıncı",
    "Meyve suyunun pipetin iç duvarına yapışarak aşağı inmemesi"
  ],
  dogru: 2,
  hatalar: [
    "“Boşluk çeker” yanılgısı: parmak meyve suyunu çekmez; sıvıyı yukarı iten, alttan etki eden açık hava basıncıdır.",
    "Yön yanılgısı: sıvının ağırlığı aşağı doğrudur; sıvıyı aşağı düşmekten alıkoyan yukarı yönlü bir kuvvet gerekir.",
    null,
    "İlgisiz neden: pipetin duvarına yapışma, sıvıyı tutan asıl etki değildir; sıvıyı alttan açık hava basıncı tutar."
  ],
  aciklama: `Açık hava basıncı her yöne etki eder; aşağıdan yukarıya doğru da basınç uygular.
Adım 1: Pipetin üst ucu kapatılınca pipetin içine dışarıdan hava giremez.
Adım 2: Pipetin alt ucunda, meyve suyuna alttan yukarı doğru açık hava basıncı etki eder.
Adım 3: Bu basınç, pipetin içindeki meyve suyunu yukarı doğru iterek yerinde tutar. Parmak kalkınca içeri hava girer ve meyve suyu dökülür.
Sık yapılan hata: Parmağın sıvıyı çektiğini sanmak. Sıvıyı tutan, dışarıdaki havanın itmesidir.
Cevap C.`
},
{
  id: "fen-sg-138",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Aynı taş, tatlı su dolu bir havuzda 3 metre derinliğe batırılmıştır. Taş çıkarılıp tuzlu su dolu başka bir havuzda da 3 metre derinliğe batırılmıştır. Tuzlu suyun yoğunluğu tatlı suyunkinden büyüktür.
**Taşa etki eden su basıncı, tuzlu suda tatlı suya göre nasıl olur?**`,
  gorsel: null,
  secenekler: [
    "Değişmez; çünkü taşın derinliği aynı kalmıştır.",
    "Değişmez; çünkü taşın kütlesi aynı kalmıştır.",
    "Artar; çünkü tuzlu suyun yoğunluğu daha büyüktür.",
    "Azalır; çünkü tuzlu suda taş daha hafif gelir."
  ],
  dogru: 2,
  hatalar: [
    "Yalnız derinliğe bakma: derinlik aynı olsa da sıvının cinsi farklıdır; yoğunluğu büyük sıvı aynı derinlikte daha büyük basınç uygular.",
    "İlgisiz değişken: taşın kütlesi sıvı basıncını belirleyen bir değişken değildir.",
    null,
    "Ters yön: taşın suda hafif gelmesi basıncı azaltmaz; yoğunluğu büyük sıvı aynı derinlikte daha büyük basınç uygular."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının cinsine (yoğunluğuna) bağlıdır. Aynı derinlikte yoğunluğu büyük olan sıvının basıncı daha büyüktür.
Adım 1: İki havuzda da taş 3 metre derinliktedir. Derinlik aynıdır.
Adım 2: Sıvıların cinsi farklıdır. Tuzlu suyun yoğunluğu daha büyüktür.
Adım 3: Derinlik aynı olduğundan fark yoğunluktan gelir. Tuzlu suda taşa etki eden basınç daha büyüktür.
Sık yapılan hata: Derinlik eşit diye basıncın da eşit olduğunu düşünmek. Sıvının cinsi de basıncı belirler.
Cevap C.`
},
{
  id: "fen-sg-139",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki olaylardan hangisi açık hava basıncının etkisiyle gerçekleşir?**",
  gorsel: null,
  secenekler: [
    "Ağzı kâğıtla kapatılıp ters çevrilen bardaktaki suyun dökülmemesi",
    "Dalgıcın derinlere inince kulaklarında baskı hissetmesi",
    "Çivinin sivri ucunun tahtaya kolayca batması",
    "Barajın duvarının tabana doğru kalınlaştırılması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sıvı basıncını açık hava basıncıyla karıştırma: dalgıcın hissettiği baskı derinlikle artan su basıncından kaynaklanır.",
    "Katı basıncını açık hava basıncıyla karıştırma: çivinin ucu küçük olduğu için tahtaya büyük katı basıncı uygular.",
    "Sıvı basıncını açık hava basıncıyla karıştırma: duvarın tabanında derinlik fazla olduğu için su basıncı en büyüktür."
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğar ve her yöne, aşağıdan yukarıya doğru da etki eder.
Adım 1: Dolu bardağın ağzı kâğıtla kapatılıp bardak ters çevrilince kâğıdı alttan yukarı doğru açık hava basıncı bastırır. Bu basınç suyun dökülmesini engeller.
Adım 2: Dalgıcın kulaklarındaki baskı ve baraj duvarının kalınlaştırılması, derinlikle artan sıvı basıncının sonuçlarıdır.
Adım 3: Çivinin tahtaya batması ise küçük yüzeye etki eden katı basıncıyla ilgilidir.
Sık yapılan hata: Basınçla ilgili her olayı açık hava basıncına bağlamak.
Cevap A.`
},
{
  id: "fen-sg-140",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Tamamen yağ dolu kapalı bir kabın pistonu itildiğinde yağın basıncı artar. Kabın içindeki K, L ve M noktaları pistondan farklı uzaklıklardadır.
**Pascal prensibine göre pistonun eklediği basınç artışı için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "En çok pistona yakın K noktasında olur.",
    "En çok pistondan uzak M noktasında olur.",
    "En çok kabın tabanındaki L noktasında olur.",
    "Üç noktada da aynı miktarda olur."
  ],
  dogru: 3,
  hatalar: [
    "Yakınlık yanılgısı: basınç, uzaklaştıkça zayıflamaz; sıvı eklenen basıncı her noktaya aynen iletir.",
    "Uzaklık yanılgısı: basınç, uzağa gidildikçe büyümez; her noktada eklenen basınç aynıdır.",
    "Derinlik yanılgısı: tabandaki basıncın kendisi büyüktür ama pistonun eklediği artış her noktada aynıdır.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya ve her yöne aynen (azalmadan, artmadan) iletilir.
Adım 1: Piston itildiğinde yağın basıncı artar.
Adım 2: Bu artış yağın her noktasına aynen iletilir. K, L ve M noktalarının hepsinde artış eşittir.
Adım 3: Pistona yakın olmak ya da kabın dibinde bulunmak eklenen basıncı değiştirmez.
Sık yapılan hata: Basıncın uzaklaştıkça azaldığını sanmak.
Cevap D.`
},
{
  id: "fen-sg-141",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi hem sıvıların hem de gazların ortak özelliğidir?**",
  gorsel: null,
  secenekler: [
    "Basıncı yalnızca kabın tabanına uygulamaları",
    "Bulundukları kabın iç yüzeylerine basınç uygulamaları",
    "Hacimlerinin kolayca azaltılabilmesi",
    "Kabın hacmini tamamen doldurmaları"
  ],
  dogru: 1,
  hatalar: [
    "Yön yanılgısı: sıvılar da gazlar da yalnızca tabana değil, temas ettikleri yan yüzeylere de basınç uygular.",
    null,
    "Yalnız gazlara özgü özellik: gazlar kolayca sıkıştırılır, sıvılar ise neredeyse hiç sıkıştırılamaz.",
    "Yalnız gazlara özgü özellik: gazlar kabın hacmini tamamen doldurur; sıvılar yalnızca bulunduğu kısmı doldurur ve yüzeyi vardır."
  ],
  aciklama: `Sıvılar ve gazlar akışkandır; tanecikleri birbirinin üzerinden kayabilir ve bulundukları kabın biçimini alırlar.
Adım 1: Hacmin kolayca azaltılması gazlara özgüdür; sıvılar neredeyse sıkıştırılamaz.
Adım 2: Kabın hacmini tamamen doldurmak da gazlara özgüdür. Sıvıların ise yüzeyi vardır.
Adım 3: Sıvılar da gazlar da basıncı yalnızca tabana değil, temas ettikleri yan yüzeylere de uygular. Bu yüzden A yanlıştır.
Adım 4: Hem sıvılar hem gazlar bulundukları kabın iç yüzeylerine basınç uygular.
Sık yapılan hata: Basıncın yalnızca sıvılara özgü olduğunu düşünmek.
Cevap B.`
},
{
  id: "fen-sg-142",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Su dolu uzun bir bidonun yan yüzeyinde, aynı büyüklükte K, L, M ve N delikleri açılmıştır. Deliklerin su yüzeyinden derinlikleri tabloda verilmiştir.
**Delikler açıldığında suyun en güçlü fışkırdığı delik aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Delik</th><th>Su yüzeyinden derinlik</th></tr><tr><td>K</td><td>15 cm</td></tr><tr><td>L</td><td>5 cm</td></tr><tr><td>M</td><td>25 cm</td></tr><tr><td>N</td><td>40 cm</td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 3,
  hatalar: [
    "Orta yeri seçme: K, N'den daha sığdır; derinlik arttıkça basınç ve fışkırma artar.",
    "Ters yön: L en sığ deliktir; basıncı en küçüktür, en güçlü fışkıran değildir.",
    "Sıralamayı yarım bırakma: M, N'den daha sığdır; en güçlü fışkırma en derin delikte olur.",
    null
  ],
  aciklama: `Sıvı basıncı derinlik arttıkça artar. Basıncı büyük olan delikten su daha güçlü fışkırır.
Adım 1: Tablodaki derinlikleri sırala: L (5 cm) < K (15 cm) < M (25 cm) < N (40 cm).
Adım 2: Derinlik arttıkça basınç artar. En derin delik N'dir.
Adım 3: N deliğindeki basınç en büyüktür; su en güçlü bu delikten fışkırır.
Sık yapılan hata: Yan yüzeydeki deliklerde basıncın derinlikle değişmediğini sanmak.
Cevap D.`
},
{
  id: "fen-sg-143",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi sıvı basıncının derinlikle artmasıyla ilgili __değildir__?**",
  gorsel: null,
  secenekler: [
    "Vantuzun cama yapışması",
    "Baraj duvarının tabana doğru kalın yapılması",
    "Derine dalan denizaltının gövdesinin kalın yapılması",
    "Delikli kapta alttaki delikten suyun daha güçlü fışkırması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Baraj duvarını yabana atma: duvarın altı daha derindedir ve basınç orada büyüktür; bu olay derinlik basıncıyla ilgilidir.",
    "Denizaltıyı yabana atma: derinde su basıncı büyüktür, gövde bu yüzden kalın yapılır; bu olay da ilgilidir.",
    "Delikli kabı yabana atma: alttaki delik daha derindedir, basınç büyüktür ve su daha güçlü fışkırır; bu da ilgilidir."
  ],
  aciklama: `Sıvı basıncı derinlik arttıkça artar. Soruda "ilgili değildir" yanıtı aranıyor.
Adım 1: Baraj duvarı tabana doğru kalın yapılır, çünkü derinlik arttıkça basınç artar.
Adım 2: Denizaltının gövdesi, derinde büyük su basıncına dayanabilsin diye kalın yapılır.
Adım 3: Delikli kapta alttaki delik daha derin olduğu için basınç büyüktür; su daha güçlü fışkırır.
Adım 4: Vantuzu cama tutan ise dışarıdaki açık hava basıncıdır; derinlik basıncı değildir.
Sık yapılan hata: Sıvıyla ilgili her olayı derinlik basıncına bağlamak.
Cevap A.`
},
{
  id: "fen-sg-144",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Su dolu bir kabın tabanındaki sıvı basıncı, kaptan su boşaltıldıkça azalır. Bunun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Kabın ağırlığının azalması",
    "Suyun yoğunluğunun azalması",
    "Suyun derinliğinin azalması",
    "Kabın taban alanının küçülmesi"
  ],
  dogru: 2,
  hatalar: [
    "İlgisiz neden: kabın ağırlığı sıvı basıncını belirlemez; kapla ilgili değişkenler basıncı etkilemez.",
    "Cins yanılgısı: su boşaltılınca suyun cinsi ve yoğunluğu değişmez; yalnızca derinlik azalır.",
    null,
    "Alan yanılgısı: kabın taban alanı değişmez; üstelik taban alanı sıvı basıncını belirleyen bir değişken değildir."
  ],
  aciklama: `Sıvı basıncı, sıvının derinliğine ve cinsine bağlıdır.
Adım 1: Kaptan su boşaltılınca suyun cinsi değişmez; su yine sudur ve yoğunluğu aynıdır.
Adım 2: Kabın taban alanı da değişmez. Değişen, su yüksekliğidir; yani tabandaki derinlik azalır.
Adım 3: Derinlik azaldığı için tabandaki sıvı basıncı da azalır.
Sık yapılan hata: Kaptaki su miktarı azalınca basıncın miktardan dolayı azaldığını sanmak. Asıl neden derinliğin azalmasıdır.
Cevap C.`
},
{
  id: "fen-sg-145",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Açık hava basıncını ölçmek için aşağıdaki araçlardan hangisi kullanılır?**",
  gorsel: null,
  secenekler: ["Termometre", "Barometre", "Dinamometre", "Ampermetre"],
  dogru: 1,
  hatalar: [
    "Araç karıştırma: termometre sıcaklığı ölçer.",
    null,
    "Araç karıştırma: dinamometre kuvveti ölçer.",
    "Araç karıştırma: ampermetre elektrik akımını ölçer."
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğan basınçtır ve barometre adı verilen araçla ölçülür.
Adım 1: Termometre sıcaklığı, dinamometre kuvveti, ampermetre elektrik akımını ölçer.
Adım 2: Açık hava basıncını ölçen araç barometredir.
Sağlama: Barometre, yükseklere çıkıldıkça azalan değer gösterir; bu da açık hava basıncının yükseklikle azaldığını gösterir.
Cevap B.`
},
{
  id: "fen-sg-146",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Görselde 40 cm yüksekliğe kadar su dolu bir kap ve kabın tabanından 30 cm yukarıdaki K noktası verilmiştir.
**K noktasının su yüzeyinden derinliği kaç cm'dir?**`,
  gorsel: `<svg viewBox="0 0 360 250" role="img" aria-label="40 cm yüksekliğe kadar su dolu kap; K noktası kabın tabanından 30 cm yukarıda"><rect x="111" y="60" width="138" height="160" fill="var(--dolgu)"/><path d="M110 20 V220 H250 V20" fill="none" stroke="currentColor" stroke-width="2"/><line x1="110" y1="60" x2="250" y2="60" stroke="var(--vurgu)" stroke-width="3"/><circle cx="180" cy="100" r="6" fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" fill="none"><line x1="70" y1="100" x2="174" y2="100"/><line x1="70" y1="100" x2="70" y2="220"/><line x1="250" y1="60" x2="290" y2="60"/><line x1="290" y1="60" x2="290" y2="220"/></g><g fill="currentColor" font-size="15"><text x="192" y="96">K</text><text x="62" y="165" text-anchor="end">30 cm</text><text x="298" y="145">40 cm</text><text x="180" y="48" text-anchor="middle">Su yüzeyi</text></g></svg>`,
  secenekler: ["10 cm", "30 cm", "40 cm", "70 cm"],
  dogru: 0,
  hatalar: [
    null,
    "Derinliği tabandan ölçme: 30 cm, K'nin tabandan yüksekliğidir; derinlik su yüzeyinden aşağı doğru ölçülür.",
    "Su yüksekliğini derinlik sanma: 40 cm suyun toplam yüksekliğidir; K noktasının derinliği bundan küçüktür.",
    "Toplama hatası: yükseklikleri toplamak anlamsızdır; derinlik, toplam yükseklikten K'nin yüksekliği çıkarılarak bulunur."
  ],
  aciklama: `Derinlik, sıvının açık yüzeyinden noktaya kadar aşağı doğru ölçülür; tabandan ölçülmez.
Adım 1: Suyun toplam yüksekliği 40 cm, K noktasının tabandan yüksekliği 30 cm'dir.
Adım 2: Su yüzeyinden K'ye olan uzaklık, aradaki farktır: 40 − 30 = 10 cm.
Adım 3: Yani K noktası su yüzeyinin 10 cm altındadır.
Sağlama: K, kabın üst kısmına yakın bir noktadır; derinliğinin küçük çıkması beklenir.
Cevap A.`
},
{
  id: "fen-sg-147",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Hidrolik fren sisteminde sürücü pedala bastığında dört tekerleğin frenleri aynı anda çalışır.
**Bu durum sıvıların hangi özelliğinden kaynaklanır?**`,
  gorsel: null,
  secenekler: [
    "Sıvıların basıncı yalnızca uygulanan kuvvet yönünde iletmesinden",
    "Sıvı basıncının derinlik arttıkça artmasından",
    "Sıvıların kendilerine uygulanan basıncı aynen iletmesinden",
    "Sıvıların hacminin kolayca azalmasından"
  ],
  dogru: 2,
  hatalar: [
    "Katılarla karıştırma: sıvılar basıncı yalnızca itilen yöne iletmez; yanlara, geriye ve her yöne iletir.",
    "Derinlik basıncıyla karıştırma: frenlerin aynı anda çalışması dışarıdan uygulanan basıncın iletilmesiyle ilgilidir.",
    null,
    "Yanlış özellik: sıvılar kolayca sıkıştırılamaz; hacminin azalması frenleme için gerekli değildir."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya ve her yöne aynen iletilir.
Adım 1: Pedala basılınca ana silindirdeki fren yağına basınç uygulanır.
Adım 2: Bu basınç yağ aracılığıyla her tekerleğe aynen iletilir.
Adım 3: Böylece dört tekerlekteki fren pistonları aynı anda çalışır.
Sık yapılan hata: Sıvının basıncı yalnızca itilen yöne ilettiğini düşünmek.
Cevap C.`
},
{
  id: "fen-sg-148",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir göldeki balık, 6 metre derinlikten 2 metre derinliğe doğru yükselmektedir.
**Balığa etki eden su basıncı bu süreçte nasıl değişir?**`,
  gorsel: null,
  secenekler: [
    "Artar.",
    "Değişmez.",
    "Önce artar, sonra azalır.",
    "Azalır."
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: yükselen balığın derinliği azalır; derinlik azalınca basınç da azalır.",
    "Hareketi önemsememe: balığın derinliği değişiyor; yatay hareket olsaydı basınç değişmezdi.",
    "Karışık düşünme: derinlik 6 m'den 2 m'ye yalnızca azalıyor; basıncın artacağı bir aşama yoktur.",
    null
  ],
  aciklama: `Sıvı basıncı derinlikle artar. Derinlik azalırsa basınç da azalır.
Adım 1: Balığın derinliği 6 m'den 2 m'ye düşmektedir.
Adım 2: Derinlik sürekli azaldığı için balığa etki eden su basıncı da sürekli azalır.
Sağlama: Yüzeye yaklaşan balığın üzerindeki su tabakası incelir.
Cevap D.`
},
{
  id: "fen-sg-149",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 1,
  soru: `Bir çiviyi duvara çakmak için çivinin başına çekiçle vurulur. Su dolu kapalı bir kabın pistonuna ise elle bastırılır.
**Bu iki durum karşılaştırıldığında aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "İkisinde de kuvvet yalnızca uygulandığı doğrultuda iletilir.",
    "Çivide kuvvet vuruş doğrultusunda, sıvıda basınç her yöne aynen iletilir.",
    "Sıvıda kuvvet piston doğrultusunda, çivide basınç her yöne aynen iletilir.",
    "İkisinde de basınç her yöne aynen iletilir."
  ],
  dogru: 1,
  hatalar: [
    "Sıvıyı katı gibi düşünme: sıvılar basıncı yalnızca itilen yöne değil, her yöne iletir.",
    null,
    "Ters yön: katılar kuvveti uygulandığı doğrultuda iletir; sıvılar ise basıncı her yöne iletir.",
    "Katıyı sıvı gibi düşünme: çivi, çekicin kuvvetini yalnızca vuruş doğrultusunda iletir."
  ],
  aciklama: `Katılar kuvveti uygulandığı doğrultuda iletir. Sıvılar ise (Pascal prensibine göre) kendilerine uygulanan basıncı her yöne aynen iletir.
Adım 1: Çekicin vurduğu kuvvet, çivi boyunca yalnızca vuruş doğrultusunda ilerler.
Adım 2: Kapalı kaptaki sıvıya piston ile uygulanan basınç ise sıvı tarafından kabın her noktasına aynen iletilir.
Adım 3: Bu fark, hidrolik sistemlerin çalışmasının temelidir.
Sık yapılan hata: Sıvının da katı gibi kuvveti tek doğrultuda ilettiğini düşünmek.
Cevap B.`
},
{
  id: "fen-sg-150",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Deniz, akvaryumunda yüzen balık için şu yargıları ileri sürmüştür:
I. Akvaryum, su yüksekliği aynı kalacak biçimde daha geniş bir akvaryumla değiştirilirse balığa etki eden su basıncı artar.
II. Balık aynı derinlikte sağa sola yüzerse balığa etki eden su basıncı değişmez.
III. Balık akvaryumun dibine doğru dalarsa balığa etki eden su basıncı artar.
**Buna göre Deniz'in yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Eksik değerlendirme: II doğrudur ama III de doğrudur; derine dalan balığın derinliği arttığı için basıncı artar.",
    "Genişlik yanılgısı: I yanlıştır; akvaryumun genişliği basıncı değiştirmez. III'ü de atlamış olursun.",
    "Genişlik yanılgısı: I yanlıştır; kap genişleyince su yüksekliği aynı kaldığı için basınç artmaz. II'yi de atlamış olursun.",
    null
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının cinsine bağlıdır; kabın genişliği ve biçimi basıncı değiştirmez.
Adım 1: I. yargıyı kontrol et. Su yüksekliği aynı kaldığı için derinlik de aynıdır; akvaryumun genişliği basıncı artırmaz. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Balığın derinliği değişmediği için yatay yüzmek basıncı değiştirmez. Doğrudur.
Adım 3: III. yargıyı kontrol et. Dibe doğru dalan balığın derinliği artar; basınç da artar. Doğrudur.
Sık yapılan hata: Geniş kapta daha çok su olduğu için basıncın da daha büyük olacağını sanmak.
Cevap D.`
},
{
  id: "fen-sg-151",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Kolları alttan birbirine bağlı, ağızları açık bir kapta su durgun hâldedir. Sol kol dar, sağ kol geniştir. Sol kola bir bardak su eklenip su yeniden durgunlaştırılıyor.
**Su durgunlaştığında kollardaki su yüzeyleri için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "İki kolda da yüzeyler aynı yatay düzeydedir; çünkü kollar alttan bağlıdır.",
    "Sol kolda yüzey daha yüksektir; çünkü su sol kola eklenmiştir.",
    "Sağ kolda yüzey daha yüksektir; çünkü sağ kol daha geniştir.",
    "Sol kolda yüzey daha alçaktır; çünkü sol kol daha dardır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eklenen suyu kalıcı sanma: su eklenen kolda yüzey önce yükselir, ama sıvı diğer kola akarak yüzeyleri yeniden eşitler.",
    "Genişlik yanılgısı: geniş kolda daha çok su vardır ama seviye, kolun genişliğine bağlı değildir.",
    "Darlık yanılgısı: dar kolun yüzeyi alçakta kalmaz; kolun biçimi yüzey düzeyini değiştirmez."
  ],
  aciklama: `Alttan birbirine bağlı, ağızları açık kaplara bileşik kaplar denir. Durgun sıvının yüzeyi bütün kollarda aynı yatay düzeyde olur.
Adım 1: Sol kola su eklenince o koldaki yüzey yükselir. Alt bağlantıdaki basınç sol tarafta daha büyük olur.
Adım 2: Basıncın büyük olduğu taraftaki su, diğer kola doğru akar. Sağ koldaki yüzey yükselir, sol koldaki alçalır.
Adım 3: Su ancak iki kolda da yüzeyler aynı yatay düzeye gelince durgunlaşır.
Sık yapılan hata: Kolun genişliğine ya da su eklenen yere bakarak seviyeyi tahmin etmek.
Cevap A.`
},
{
  id: "fen-sg-152",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Zirvede ağzını sıkıca kapattığı boş bir plastik şişeyi vadiye indiren bir dağcı, şişenin büzüldüğünü görmüştür. Şişe hiç delinmemiştir. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. Zirvedeki açık hava basıncı, vadideki açık hava basıncından küçüktür.
II. Şişenin içindeki hava, aşağı inerken şişeden dışarı çıkmıştır.
III. Şişeyi dışarıdan bastıran açık hava basıncı, içerideki basınçtan büyük hâle gelmiştir.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Eksik değerlendirme: I doğrudur ama III de doğrudur; şişe, dışarıdaki basınç içeridekini aştığı için büzülür.",
    "Eksik değerlendirme: III doğrudur ama I de doğrudur; vadi zirveden alçak olduğu için açık hava basıncı orada daha büyüktür.",
    null,
    "Kapalı şişeyi gözden kaçırma: II yanlıştır; şişe sıkıca kapalıdır ve delinmemiştir, içindeki hava dışarı çıkamaz."
  ],
  aciklama: `Açık hava basıncı yükseklikle azalır; aşağı inildikçe artar.
Adım 1: I. yargıyı kontrol et. Zirve vadiden yüksektir; üstte kalan hava tabakası daha incedir. Zirvedeki açık hava basıncı daha küçüktür. Doğrudur.
Adım 2: II. yargıyı kontrol et. Şişenin ağzı sıkıca kapalıdır ve şişe delinmemiştir. İçindeki hava dışarı çıkamaz. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Vadiye inilince dışarıdaki açık hava basıncı artar ve şişenin içindeki basınçtan büyük olur. Şişe dışarıdan bastırılarak büzülür. Doğrudur.
Sık yapılan hata: Büzülen şişenin içinden hava çıktığını düşünmek. Değişen, dışarıdaki basınçtır.
Cevap C.`
},
{
  id: "fen-sg-153",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir dağcı, dağın eteğinden zirvesine doğru çıkarken ölçtüğü açık hava basıncını grafikte göstermiştir. K, L ve M noktaları sırasıyla yolun alt, orta ve üst bölümlerindeki ölçümleridir.
**Grafiğe göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 460 270" role="img" aria-label="Yükseklik arttıkça açık hava basıncının azaldığını gösteren grafik; K, L ve M noktaları işaretli"><path d="M60 20 V220 H440" fill="none" stroke="currentColor" stroke-width="2"/><line x1="60" y1="40" x2="420" y2="200" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><circle cx="140" cy="76" r="6"/><circle cx="240" cy="120" r="6"/><circle cx="340" cy="164" r="6"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="140" y="62">K</text><text x="240" y="106">L</text><text x="340" y="150">M</text><text x="250" y="252">Yükseklik</text><text transform="translate(24 120) rotate(-90)">Açık hava basıncı</text></g></svg>`,
  secenekler: [
    "K, L ve M noktalarında açık hava basıncı eşittir.",
    "Zirveye çıkıldıkça açık hava basıncı azalmıştır.",
    "En büyük açık hava basıncı M noktasında ölçülmüştür.",
    "Açık hava basıncı önce azalmış, sonra artmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Grafiği okumama: noktalar farklı yüksekliktedir ve grafikteki değerleri farklıdır; basınç eşit değildir.",
    null,
    "Ters yön: M, yolun en üst noktasıdır; açık hava basıncı en çok yolun en alt noktası K'da ölçülmüştür.",
    "Eğriyi yanlış okuma: grafikteki çizgi baştan sona azalır; artış olduğu bir bölüm yoktur."
  ],
  aciklama: `Açık hava basıncı, yükseklere çıkıldıkça üstte kalan hava tabakası incelmeye başladığı için azalır.
Adım 1: Grafikte yatay eksen yüksekliği, düşey eksen açık hava basıncını gösterir.
Adım 2: Çizgi soldan sağa doğru sürekli aşağı iner. Yani yükseklik arttıkça açık hava basıncı azalmıştır.
Adım 3: En büyük basınç en alçaktaki K noktasında, en küçük basınç en yüksekteki M noktasındadır.
Sık yapılan hata: Grafikte yükseklikle basıncın birlikte arttığını sanmak.
Cevap B.`
},
{
  id: "fen-sg-154",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Zehra, sıvı basıncının sıvının cinsine bağlı olup olmadığını test etmek için özdeş üç kaba su, zeytinyağı ve tuzlu su koymuştur. Sıvı yüksekliğini üç kapta da 12 cm yapmış ve her kabın tabanındaki basıncı bir basınç ölçerle ölçmüştür. Deneyle ilgili şu yargılar ileri sürülmüştür:
I. Bağımsız değişken, sıvının cinsidir.
II. Bağımlı değişken, basınç ölçerin gösterdiği değerdir.
III. Sıvı yüksekliği, bağımlı değişkendir.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Eksik değerlendirme: I doğrudur ama II de doğrudur; ölçülen değer olan basınç bağımlı değişkendir.",
    null,
    "Kontrol değişkenini bağımlı sanma: yükseklik Zehra'nın sabit tuttuğu koşuldur, ölçtüğü değer değildir; III yanlıştır.",
    "Bağımsız değişkeni atlama: I doğrudur; Zehra'nın değiştirdiği koşul sıvının cinsidir. III de yanlıştır."
  ],
  aciklama: `Bağımsız değişken deneyci tarafından değiştirilen, bağımlı değişken ölçülen, kontrol değişkenleri ise sabit tutulan koşullardır.
Adım 1: I. yargıyı kontrol et. Zehra sıvının cinsini değiştiriyor (su, zeytinyağı, tuzlu su). Bağımsız değişken sıvının cinsidir. Doğrudur.
Adım 2: II. yargıyı kontrol et. Zehra basınç ölçerle basıncı ölçüyor. Bağımlı değişken, ölçülen basınçtır. Doğrudur.
Adım 3: III. yargıyı kontrol et. Sıvı yüksekliği üç kapta da 12 cm'dir; yani sabit tutulmuştur. Bu bir kontrol değişkenidir, bağımlı değişken değildir. Yanlıştır.
Sık yapılan hata: Sabit tutulan koşulu bağımlı değişken sanmak.
Cevap B.`
},
{
  id: "fen-sg-155",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Banyo duvarına yapışan vantuzlu bir çengelin vantuz kısmında küçük bir delik açılınca çengel kısa sürede duvardan düşmüştür.
**Çengelin düşmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Vantuzun ağırlığının delikten dolayı artması",
    "Duvarın vantuzu çekmesinin delikten dolayı artması",
    "Dışarıdaki açık hava basıncının delikten dolayı azalması",
    "İçerideki basıncın delikten dolayı dışarıdakine eşitlenmesi"
  ],
  dogru: 3,
  hatalar: [
    "İlgisiz neden: delik açmak vantuzun ağırlığını anlamlı biçimde artırmaz; çengeli tutan etki basınç farkıdır.",
    "Yanlış kuvvet: duvar vantuzu çekmez; vantuzu duvara bastıran dışarıdaki açık hava basıncıdır.",
    "Yanlış değişken: delik, dışarıdaki açık hava basıncını değiştirmez; değişen vantuzun içindeki basınçtır.",
    null
  ],
  aciklama: `Vantuzu duvara tutan, vantuzun dışından etki eden açık hava basıncıdır; bunun için içerideki basıncın dışarıdakinden küçük olması gerekir.
Adım 1: Vantuz duvara bastırılınca altındaki hava dışarı çıkar. İçerideki basınç, dışarıdaki açık hava basıncından küçük olur.
Adım 2: Dışarıdaki büyük basınç vantuzu duvara doğru bastırır ve çengel yerinde kalır.
Adım 3: Vantuza delik açılınca içeri hava girer; içerideki basınç dışarıdakine eşitlenir. Vantuzu bastıran net etki kalmaz ve çengel düşer.
Sık yapılan hata: Vantuzu duvarın “çektiğini” sanmak.
Cevap D.`
},
{
  id: "fen-sg-156",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Bir otomobilin hidrolik fren sisteminde sürücü, fren pedalına daha büyük bir kuvvetle basmıştır. Sistem kapalıdır ve tamamen yağ doludur. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. Yağda oluşan basınç artar ve bu artış tekerlek pistonlarına aynen iletilir.
II. Tekerlek pistonunun yüzeyi geniş olduğu için orada basınç, pedala bağlı pistondakinden büyük olur.
III. Fren yağının basıncı yalnızca pedalın karşısındaki tekerlek pistonuna iletilir.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 0,
  hatalar: [
    null,
    "Basınç ile kuvveti karıştırma: geniş yüzeyde büyüyen kuvvettir, basınç iki pistonda eşittir; I'i de atlamış olursun.",
    "Yön yanılgısı: III yanlıştır; kapalı yağ basıncı yalnızca karşıdaki pistona değil, bütün tekerlek pistonlarına aynen iletir. I ise doğrudur.",
    "Kısmen doğru: I doğrudur ama II yanlıştır; basınç tekerlek pistonunda büyümez, yağ basıncı aynen iletir."
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya aynen iletilir.
Adım 1: I. yargıyı kontrol et. Pedala büyük kuvvetle basılınca yağın basıncı artar ve bu artış tekerleklere aynen iletilir. Doğrudur.
Adım 2: II. yargıyı kontrol et. Geniş pistonda büyüyen, basınç değil kuvvettir. Basınçlar iki pistonda eşittir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Basınç, kapalı yağ aracılığıyla pedalın karşısındaki pistona olduğu kadar bütün tekerlek pistonlarına da iletilir. Yanlıştır.
Sık yapılan hata: Geniş pistonda kuvvet büyüdüğü için basıncın da büyüdüğünü sanmak.
Cevap A.`
},
{
  id: "fen-sg-157",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir öğrenci, sıvı basıncını etkileyen değişkenleri araştırmak için dört düzenek hazırlamıştır. Her düzenekte kabın tabanındaki basıncı bir basınç ölçerle ölçecektir. Düzeneklerin özellikleri tabloda verilmiştir.
**Sıvı yüksekliğinin basınca etkisini test etmek için hangi iki düzeneğin sonuçları karşılaştırılmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Sıvı</th><th>Sıvı yüksekliği</th><th>Kabın genişliği</th></tr><tr><td>1</td><td>Su</td><td>10 cm</td><td>Dar</td></tr><tr><td>2</td><td>Su</td><td>20 cm</td><td>Dar</td></tr><tr><td>3</td><td>Zeytinyağı</td><td>10 cm</td><td>Geniş</td></tr><tr><td>4</td><td>Su</td><td>10 cm</td><td>Geniş</td></tr></table>`,
  secenekler: ["1 ve 4", "3 ve 4", "1 ve 2", "2 ve 3"],
  dogru: 2,
  hatalar: [
    "Yanlış değişkeni sınama: 1 ve 4'ün yalnızca kap genişliği farklıdır; bu karşılaştırma kabın genişliğini sınar.",
    "Yanlış değişkeni sınama: 3 ve 4'ün yalnızca sıvıları farklıdır; bu karşılaştırma sıvının cinsini sınar.",
    null,
    "Birden çok değişkeni değiştirme: 2 ve 3'te sıvı, yükseklik ve kap genişliği birlikte farklıdır; sonuç hangisinden geldiği anlaşılamaz."
  ],
  aciklama: `Bir değişkenin etkisini test etmek için karşılaştırılan iki düzenekte yalnızca o değişken farklı, geri kalan her şey aynı olmalıdır.
Adım 1: Sınanacak değişken sıvı yüksekliğidir. Yüksekliği farklı, diğerleri aynı olan iki düzenek aranır.
Adım 2: 1 ve 2'nin ikisinde de sıvı su, kap dardır. Yalnızca yükseklik farklıdır (10 cm ve 20 cm).
Adım 3: Diğer çiftlerde birden çok koşul ya da başka bir koşul farklıdır.
Sık yapılan hata: İki koşulu birden değiştirip sonucu yükseklikten kaynaklandığını sanmak.
Cevap C.`
},
{
  id: "fen-sg-158",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Aşağıda günlük yaşamdan üç uygulama verilmiştir:
I. Serum şişesinin hastanın kolundan yukarıda bir askıya asılması
II. Damperli kamyonun kasasının kaldırılması
III. Hidrolik presin metal levhayı sıkıştırması
**Bu uygulamalardan hangileri Pascal prensibine dayanır?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Sıvı basıncını Pascal prensibiyle karıştırma: serum askısı derinlikle artan sıvı basıncına dayanır; II ve III de Pascal prensibine dayanır.",
    "Eksik değerlendirme: II doğrudur ama hidrolik pres de kapalı sıvının basıncı iletmesiyle çalışır.",
    "Serumu Pascal sanma: I derinlikle artan sıvı basıncına dayanır; II'yi de atlamış olursun.",
    null
  ],
  aciklama: `Pascal prensibi: Kapalı bir kaptaki sıvıya uygulanan basınç, sıvı tarafından her yöne aynen iletilir.
Adım 1: I. uygulamayı kontrol et. Serum şişesi yukarıya asılınca hortumdaki sıvının derinliği, yani basıncı artar. Burada dışarıdan basınç uygulanan kapalı bir sıvı yoktur. Pascal prensibi değildir.
Adım 2: II. uygulamayı kontrol et. Kasayı kaldıran silindirdeki yağa pompayla basınç uygulanır ve bu basınç iletilir. Pascal prensibidir.
Adım 3: III. uygulamayı kontrol et. Hidrolik pres de kapalı yağın basıncı iletmesiyle çalışır. Pascal prensibidir.
Sık yapılan hata: Sıvı kullanılan her sistemi Pascal prensibine bağlamak.
Cevap D.`
},
{
  id: "fen-sg-159",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Ağzı kapalı bir teneke yağ kutusunun üst yüzüne tek bir delik açılıp kutu eğilince yağ zor ve kesik kesik akmıştır. Kutuya ikinci bir delik açılınca yağ rahatça akmıştır.
**İkinci deliğin yağın akışını kolaylaştırmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "İkinci delik, kutunun içindeki basıncı dışarıdaki basınca yaklaştırır.",
    "İkinci delik, kutunun içindeki yağın ağırlığını azaltır.",
    "İkinci delik, yağın yüzeyine etki eden açık hava basıncını sıfırlar.",
    "İkinci delik, kutunun içindeki yağın yoğunluğunu küçültür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "İlgisiz neden: delik açmak yağın ağırlığını değiştirmez; yalnızca içeri hava girmesini sağlar.",
    "Yanlış etki: açık hava basıncı sıfırlanmaz; deliklerden giren hava içerideki basıncı dışarıdakine yaklaştırır.",
    "İlgisiz neden: yoğunluk maddenin cinsine bağlıdır; delik açmak yağın yoğunluğunu değiştirmez."
  ],
  aciklama: `Sıvı, basıncın büyük olduğu yerden küçük olduğu yere doğru hareket eder.
Adım 1: Yağ akarken kutudaki yağın yeri boşalır. Tek delik varsa içeri hava giremez; kutunun içindeki basınç dışarıdaki açık hava basıncından küçük kalır.
Adım 2: Dışarıdaki büyük basınç yağın akmasını zorlaştırır; yağ ancak kesik kesik akar.
Adım 3: İkinci delikten içeri hava girer. İçerideki basınç dışarıdakine yaklaşır ve yağ rahatça akar.
Sık yapılan hata: Deliğin yağın ağırlığını ya da yoğunluğunu değiştirdiğini sanmak.
Cevap A.`
},
{
  id: "fen-sg-160",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Görselde, ağız kısmı geniş olan huni biçimli bir kaba doldurulmuş su ve kabın içindeki K, L ve M noktaları verilmiştir. L ve M noktaları aynı derinliktedir. Kap için şu yargılar ileri sürülmüştür:
I. K noktasına etki eden su basıncı, L noktasına etki edenden büyüktür.
II. L ve M noktalarına etki eden su basınçları birbirinden farklıdır.
III. Kaptan bir miktar su alınırsa K noktasına etki eden su basıncı azalır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 360 230" role="img" aria-label="Üstü geniş, altı dar huni biçimli su dolu kap; K su yüzeyine yakın, L ve M daha derin ve aynı düzeyde"><polygon points="78,60 282,60 220,200 140,200" fill="var(--dolgu)"/><path d="M60 20 L140 200 H220 L300 20" fill="none" stroke="currentColor" stroke-width="2"/><line x1="78" y1="60" x2="282" y2="60" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><circle cx="180" cy="100" r="6"/><circle cx="160" cy="160" r="6"/><circle cx="205" cy="160" r="6"/></g><g fill="currentColor" font-size="15"><text x="192" y="96">K</text><text x="140" y="156">L</text><text x="216" y="156">M</text><text x="180" y="48" text-anchor="middle">Su yüzeyi</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 2,
  hatalar: [
    "Ters değerlendirme: K, L'den daha sığdır; sığ noktada basınç daha küçüktür. I yanlıştır, III ise doğrudur.",
    "Kabın biçimine bakma: L ve M aynı derinlikte olduğundan aynı sıvıda basınçları eşittir. II yanlıştır.",
    null,
    "İki yanlış yargıyı seçme: I ve II yanlıştır; K, L'den sığdır, L ile M ise aynı derinliktedir."
  ],
  aciklama: `Aynı sıvıda basınç yalnızca derinliğe bağlıdır. Derinlik, su yüzeyinden aşağı doğru ölçülür.
Adım 1: I. yargıyı kontrol et. K noktası su yüzeyine L noktasından daha yakındır, yani daha sığdır. K'deki basınç L'dekinden küçüktür. Yanlıştır.
Adım 2: II. yargıyı kontrol et. L ve M aynı derinlikte olduğundan basınçları eşittir. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Su alınınca su yüzeyi iner; K'nin derinliği azalır, basıncı da azalır. Doğrudur.
Sık yapılan hata: Kabın biçimine bakıp aynı derinlikteki noktalarda farklı basınç olduğunu sanmak.
Cevap C.`
},
{
  id: "fen-sg-161",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Bir öğrenci, kar ayakkabısının kullanılmasını ve baraj duvarının tabana doğru kalınlaştırılmasını birer basınç türüyle ilişkilendirmiştir.
**Bu ilişkilendirmelerin doğru verildiği seçenek aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Kar ayakkabısı: sıvı basıncı; baraj duvarı: katı basıncı",
    "Kar ayakkabısı: katı basıncı; baraj duvarı: sıvı basıncı",
    "Kar ayakkabısı: açık hava basıncı; baraj duvarı: sıvı basıncı",
    "Kar ayakkabısı: katı basıncı; baraj duvarı: açık hava basıncı"
  ],
  dogru: 1,
  hatalar: [
    "Eşleştirmeleri ters kurma: kar ayakkabısı katı basıncını, baraj duvarı sıvı basıncını ilgilendirir.",
    null,
    "Kar ayakkabısını açık hava basıncına bağlama: ayakkabı, temas alanını büyütüp kara uygulanan katı basıncını azaltır.",
    "Baraj duvarını açık hava basıncına bağlama: duvarın tabanda kalın olması derinlikle artan sıvı basıncı nedeniyledir."
  ],
  aciklama: `Katı basıncı temas alanına bağlıdır; sıvı basıncı ise derinliğe bağlıdır.
Adım 1: Kar ayakkabısı geniştir. Temas alanını büyütür ve kişinin kara uyguladığı katı basıncını azaltır; kişi kara batmaz.
Adım 2: Baraj gölündeki su derinleştikçe duvara uyguladığı basınç artar. Duvar bu yüzden tabana doğru kalın yapılır. Bu sıvı basıncıdır.
Adım 3: Açık hava basıncı bu iki olayın hiçbirinde belirleyici değildir.
Sık yapılan hata: Her günlük olayı tek bir basınç türüne bağlamak.
Cevap B.`
},
{
  id: "fen-sg-162",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Mina, suyla doldurduğu plastik bir şişenin yan yüzeyine farklı yüksekliklerde delikler açmıştır. Delikler açıldığında suyun deliklerden fışkırdığı uzaklıkları kaydederek deliğin derinliği ile fışkırma uzaklığı arasındaki ilişkiyi incelemiştir.
**Bu deneyde bağımlı değişken aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Suyun deliklerden fışkırdığı uzaklık",
    "Deliklerin su yüzeyinden derinliği",
    "Şişenin biçimi",
    "Şişedeki sıvının cinsi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bağımsız değişkeni karıştırma: deliğin derinliği Mina'nın değiştirdiği koşuldur, ölçtüğü değer değildir.",
    "Kontrol değişkenini karıştırma: şişe aynı kalır; biçimi sabit tutulan koşuldur.",
    "Kontrol değişkenini karıştırma: şişede hep su vardır; sıvının cinsi sabit tutulan koşuldur."
  ],
  aciklama: `Bağımlı değişken, deneyde ölçülen ya da gözlenen değişkendir; bağımsız değişkene göre değişir.
Adım 1: Mina deliklerin derinliğini farklı seçmiştir. Bu bağımsız değişkendir.
Adım 2: Şişe ve içindeki su aynı kalmıştır. Şişenin biçimi ve sıvının cinsi kontrol değişkenleridir.
Adım 3: Mina suyun fışkırdığı uzaklığı ölçmektedir. Bu bağımlı değişkendir.
Sık yapılan hata: Değiştirilen değişkenle ölçülen değişkeni birbirine karıştırmak.
Cevap A.`
},
{
  id: "fen-sg-163",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Küçük bir teknenin yan yüzeyinde, su çizgisinin altında iki çatlak oluşmuştur. Çatlaklardan biri su yüzeyinin 20 cm, diğeri 60 cm altındadır. İki çatlağın büyüklüğü eşittir.
**Tekneye giren sular için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Üstteki çatlaktan daha hızlı su girer; çünkü çatlak su yüzeyine yakındır.",
    "İki çatlaktan da aynı hızda su girer; çünkü çatlakların büyüklükleri eşittir.",
    "İki çatlaktan da su girmez; çünkü su yalnızca tabana basınç uygular.",
    "Alttaki çatlaktan daha hızlı su girer; çünkü orada su basıncı daha büyüktür."
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: su yüzeyine yakın yerde basınç daha küçüktür; üstteki çatlaktan daha yavaş su girer.",
    "Tek değişkene bakma: çatlakların büyüklüğü eşit olsa da derinlikleri farklıdır; basınç ve su girişi bu yüzden farklıdır.",
    "Yön yanılgısı: sıvı yalnızca tabana değil, yan yüzeylere de basınç uygular; yan yüzeydeki çatlaktan su girer.",
    null
  ],
  aciklama: `Sıvı yan yüzeylere de basınç uygular ve bu basınç derinlik arttıkça artar.
Adım 1: Çatlaklar teknenin yan yüzeyindedir. Su yan yüzeylere de basınç uyguladığı için ikisinden de su girer.
Adım 2: Alttaki çatlak 60 cm, üstteki 20 cm derinliktedir. Alttaki daha derindir.
Adım 3: Derinlik arttıkça basınç artar. Alttaki çatlağa etki eden basınç daha büyüktür; oradan daha hızlı su girer.
Sağlama: Delikli kapta alttaki delikten su daha güçlü fışkırır.
Cevap D.`
},
{
  id: "fen-sg-164",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Fatma, iki şırıngayı bir hortumla birbirine bağlamıştır. Hortum ve şırıngalar tamamen suyla doludur; sistem kapalıdır. Fatma birinci şırıngayı ittiğinde ikinci şırınganın pistonu dışarı çıkmıştır. Fatma şu yargılarda bulunmuştur:
I. Hortum suyla değil havayla dolu olsaydı ikinci şırınganın pistonu aynı miktarda hareket ederdi.
II. Birinci şırıngadaki basınç artışı ikinci şırıngaya aynen iletilmiştir.
III. Birinci şırınga ikinciden daha yukarıda tutulsaydı basınç ikinci şırıngaya iletilmezdi.
**Buna göre Fatma'nın yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Hava ile suyu eşit sanma: hava kolayca sıkışır, itme önce havayı sıkıştırır ve ikinci piston daha az hareket eder; I yanlıştır, II ise doğrudur.",
    null,
    "İki yanlış yargıyı seçme: hava sıkışacağı için I yanlıştır, birinci şırınganın yüksekte olması basıncın iletilmesini engellemediği için III de yanlıştır.",
    "Konum yanılgısı: III yanlıştır; şırıngaların hangisinin yukarıda olduğu, kapalı sıvının basıncı iletmesini engellemez."
  ],
  aciklama: `Sıvılar neredeyse sıkıştırılamaz; basıncı her yöne aynen iletir. Gazlar ise kolayca sıkışır.
Adım 1: I. yargıyı kontrol et. Hortum havayla dolu olsaydı itme önce havayı sıkıştırırdı. İkinci piston daha az hareket ederdi. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Kapalı sistemde sıvıya uygulanan basınç ikinci şırıngaya aynen iletilir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Kapalı sistemdeki sıvı, şırıngaların hangisinin yukarıda olduğuna bakmadan basıncı iletir. Yanlıştır.
Sık yapılan hata: Kapalı sıvıda basıncın konuma göre iletilmediğini sanmak.
Cevap B.`
},
{
  id: "fen-sg-165",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Bir hidrolik sistemde pompa ile silindir arasındaki boru uzatılmış ve birkaç yerden bükülmüştür. Pompadaki piston öncekiyle aynı kuvvetle itilmektedir. Sistem kapalı ve tamamen yağ doludur.
**Silindirdeki yağın basıncı için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Azalır; çünkü basınç uzun yolda yağın içinde zayıflar.",
    "Artar; çünkü yağ bükülen boruda sıkışarak basınç yapar.",
    "Değişmez; çünkü boru uzunluğu ve biçimi basıncı değiştirmez.",
    "Artar; çünkü boru uzayınca sistemdeki yağ miktarı artmıştır."
  ],
  dogru: 2,
  hatalar: [
    "Uzaklık yanılgısı: basınç, sıvıda uzaklaştıkça zayıflamaz; boru uzasa da aynen iletilir.",
    "Biçim yanılgısı: boru bükülünce yağ sıkışmaz (sıvılar sıkışmaz) ve basınç artmaz.",
    null,
    "Miktar yanılgısı: boru uzayınca yağ miktarı artsa bile iletilen basıncı belirleyen pistona uygulanan basınçtır."
  ],
  aciklama: `Pascal prensibi: Kapalı kaptaki sıvıya uygulanan basınç, sıvı tarafından her noktaya aynen iletilir.
Adım 1: Pompadaki piston aynı kuvvetle itildiği için sıvıya uygulanan basınç aynıdır.
Adım 2: Bu basınç sıvı tarafından silindire aynen iletilir. İletim sırasında azalmaz ya da artmaz.
Adım 3: Borunun uzaması ya da bükülmesi iletilen basıncı değiştirmez.
Sık yapılan hata: Borunun uzunluğunun ve biçiminin basıncı etkilediğini düşünmek.
Cevap C.`
},
{
  id: "fen-sg-166",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Denizde dalış yapan bir dalgıç için şu yargılar ileri sürülmüştür:
I. Daha derine indikçe dalgıca etki eden su basıncı artar.
II. Su, dalgıcın yalnızca baş kısmına değil, vücudunun her yerine basınç uygular.
III. Dalgıç aynı derinlikte yüzerken önüne ve arkasına etki eden su basınçları birbirine eşittir.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "Eksik değerlendirme: I doğrudur ama II ve III de doğrudur; sıvı her yöne basınç uygular ve aynı derinlikte basınç her yönde eşittir.",
    "Eksik değerlendirme: I ve II doğrudur ama III de doğrudur; aynı derinlikte ön ve arka yüze etki eden basınçlar eşittir.",
    "Eksik değerlendirme: II ve III doğrudur ama I de doğrudur; derine inildikçe basınç artar.",
    null
  ],
  aciklama: `Sıvı basıncı derinlikle artar, içindeki cisme her yönden etki eder ve aynı derinlikte her yönde eşittir.
Adım 1: I. yargıyı kontrol et. Derinlik arttıkça sıvı basıncı artar. Doğrudur.
Adım 2: II. yargıyı kontrol et. Sıvı, içindeki cismin her yüzeyine basınç uygular; basınç yalnızca baştan gelmez. Doğrudur.
Adım 3: III. yargıyı kontrol et. Dalgıç yatay yüzdüğü için ön ve arka yüzeyleri aynı derinliktedir. Aynı derinlikte basınç her yönde eşit olduğundan bu basınçlar eşittir. Doğrudur.
Sık yapılan hata: Basıncın yalnızca su yüzeyinden aşağı doğru etki ettiğini sanmak.
Cevap D.`
},
{
  id: "fen-sg-167",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Berk, “Kaptaki sıvı miktarı arttıkça kabın tabanındaki sıvı basıncı artar.” tahmininde bulunmuştur. Bu tahmini aynı sıvıyla farklı kaplarda ölçüm yaparak test edecektir.
**Aşağıdaki gözlemlerden hangisi Berk'in tahmininin yanlış olduğunu gösterir?**`,
  gorsel: null,
  secenekler: [
    "Aynı kaba su eklenip miktar artarken tabandaki basıncın artması",
    "Aynı kapta tabana yakın noktada basıncın yüzeye yakın noktadan büyük ölçülmesi",
    "Su miktarları farklı, su yükseklikleri eşit iki kapta basınçların eşit ölçülmesi",
    "Su yüksekliği artan bir kapta tabandaki basıncın da artması"
  ],
  dogru: 2,
  hatalar: [
    "Derinlik artışını görmeme: kaba su eklenince hem miktar hem derinlik artar; bu gözlem tahmini çürütmez.",
    "Derinliği miktarla karıştırma: tabana yakın noktanın daha derin olması basıncı büyütür; bu gözlem miktarın etkisini sınamaz, tahmini çürütmez.",
    null,
    "Derinlik artışını görmeme: yükseklik artınca miktar da artar; bu gözlem tahmini çürütmez, derinliğin etkisini gösterir."
  ],
  aciklama: `Bir tahmini çürütmek için, tahmin edilen değişkenin farklı olduğu, diğer her koşulun aynı olduğu durumlar karşılaştırılmalıdır.
Adım 1: Tahmin miktarla ilgilidir. Miktar farklıyken basınç da farklı çıkmıyorsa tahmin yanlıştır.
Adım 2: Doğru seçenekte miktarlar farklı, yükseklikler eşittir ve basınçlar eşit ölçülmüştür. Bu, miktarın basıncı belirlemediğini gösterir.
Adım 3: Diğer seçeneklerde ya miktar artarken derinlik de artmıştır ya da yalnızca derinliğin etkisi görülmüştür. Bu gözlemler tahmini çürütmez.
Sık yapılan hata: Su eklenince basıncın miktardan dolayı arttığını düşünmek. Su eklenince derinlik de artar.
Cevap C.`
},
{
  id: "fen-sg-168",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Dikdörtgen biçimli, ağzı açık bir su deposu tamamen suyla doldurulmuştur. Depo için şu yargılar ileri sürülmüştür:
I. Su, deponun yan duvarlarına da basınç uygular.
II. Yan duvarda aynı derinlikteki noktalara etki eden su basınçları birbirine eşittir.
III. Yan duvarın en alt noktasındaki su basıncı, tabandaki basınçtan büyüktür.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Eksik değerlendirme: II doğrudur ama su yan duvarlara da basınç uyguladığı için I de doğrudur.",
    "Yan duvar basıncını abartma: yan duvarın en alt noktası tabanla aynı derinliktedir; basınç tabandakine eşittir. III yanlıştır, II ise doğrudur.",
    "Eksik değerlendirme: III yanlıştır; yan duvardaki basınç tabandakinden büyük olamaz. I doğrudur."
  ],
  aciklama: `Sıvılar tabana ve yan yüzeylere basınç uygular; basınç derinlikle artar ve aynı derinlikte her yönde eşittir.
Adım 1: I. yargıyı kontrol et. Sıvı, temas ettiği yan duvarlara da basınç uygular. Doğrudur.
Adım 2: II. yargıyı kontrol et. Aynı derinlikteki noktalarda basınç eşittir. Doğrudur.
Adım 3: III. yargıyı kontrol et. Yan duvarın en alt noktası ile taban aynı derinliktedir. Basınçlar eşittir; yan duvardaki basınç büyük değildir. Yanlıştır.
Sık yapılan hata: Yan yüzeylerde basıncın tabandakinden farklı olduğunu sanmak.
Cevap A.`
},
{
  id: "fen-sg-169",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir öğrenci, basınç algılayıcısını Z (zeytinyağı), S (su) ve T (tuzlu su) sıvılarının her birinde yüzeyden aynı derinliğe indirerek ölçüm yapmış ve sonuçları tabloya yazmıştır.
**Bu sonuçlara göre sıvıların yoğunlukları (d) arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>Algılayıcının gösterdiği basınç</th></tr><tr><td>Z</td><td>En küçük</td></tr><tr><td>S</td><td>Orta</td></tr><tr><td>T</td><td>En büyük</td></tr></table>`,
  secenekler: [
    "d_{Z} > d_{S} > d_{T}",
    "d_{T} > d_{S} > d_{Z}",
    "d_{S} > d_{T} > d_{Z}",
    "d_{Z} = d_{S} = d_{T}"
  ],
  dogru: 1,
  hatalar: [
    "Ters sıralama: aynı derinlikte yoğunluğu büyük sıvının basıncı büyüktür; basıncı en küçük olan Z'nin yoğunluğu en küçüktür.",
    null,
    "Karışık sıralama: basıncı en büyük olan T'nin yoğunluğu en büyüktür, S'ninki ondan küçüktür.",
    "Derinliğe takılma: derinlik eşit olduğu için basınçların da eşit olması beklenirdi; ölçülen basınçlar farklı olduğundan yoğunluklar farklıdır."
  ],
  aciklama: `Aynı derinlikte, yoğunluğu büyük olan sıvının basıncı daha büyüktür.
Adım 1: Algılayıcı her sıvıda aynı derinliğe indirilmiştir. Basınç farkı yalnızca sıvıların cinsinden, yani yoğunluklarından gelir.
Adım 2: Basınç sıralaması T > S > Z'dir.
Adım 3: Basınç sıralaması yoğunluk sıralamasıyla aynıdır: d_{T} > d_{S} > d_{Z}.
Sık yapılan hata: Derinlik eşit diye sıvıların aynı olduğunu sanmak.
Cevap B.`
},
{
  id: "fen-sg-170",
  kazanim: "F.8.3.1.3",
  kademe: 1,
  zorluk: 2,
  soru: `Pipetle meyve suyu içen bir öğrenci için şu yargılar ileri sürülmüştür:
I. Ağızla pipetin içindeki hava azaltılınca içerideki basınç, dışarıdaki açık hava basıncından küçük olur.
II. Meyve suyunu pipete çeken, pipetin içinde oluşan boşluktur.
III. Meyve suyunu pipette yukarı iten etki, bardaktaki meyve suyunun yüzeyine uygulanır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "“Boşluk çeker” yanılgısı: II yanlıştır; sıvıyı iten, bardaktaki meyve suyunun yüzeyine etki eden açık hava basıncıdır.",
    "Eksik değerlendirme: III doğrudur ama I de doğrudur; hava azalınca içerideki basınç küçülür.",
    "“Boşluk çeker” yanılgısı: II yanlıştır; I doğru olsa da meyve suyunu çeken bir boşluk yoktur.",
    null
  ],
  aciklama: `Sıvıyı pipete iten, sıvının yüzeyine etki eden açık hava basıncıdır. Bunun için pipetin içindeki basıncın dışarıdakinden küçük olması gerekir.
Adım 1: I. yargıyı kontrol et. Pipetin içindeki hava azalınca içerideki basınç küçülür ve dışarıdaki basınç içeridekinden büyük olur. Doğrudur.
Adım 2: II. yargıyı kontrol et. Meyve suyunu bir boşluk “çekmez”; dışarıdaki büyük basınç iter. Yanlıştır.
Adım 3: III. yargıyı kontrol et. Büyük olan açık hava basıncı bardaktaki meyve suyunun yüzeyine etki eder ve sıvıyı pipete doğru iter. Doğrudur.
Sık yapılan hata: İçecekleri pipetin “çektiğini” sanmak.
Cevap D.`
},
{
  id: "fen-sg-171",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir küvette 30 cm yüksekliğe kadar tatlı su vardır. Bir gölün kıyıya yakın sığ bir kısmında da tatlı su yüksekliği 30 cm'dir.
**Küvetin tabanına ve gölün bu kısmının tabanına etki eden su basınçları için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Gölde büyüktür; çünkü gölde çok daha fazla su vardır.",
    "Küvette büyüktür; çünkü su küçük kapta daha çok sıkışır.",
    "Eşittir; çünkü ikisinde de derinlik ve sıvının cinsi aynıdır.",
    "Gölde büyüktür; çünkü gölün tabanı çok daha geniştir."
  ],
  dogru: 2,
  hatalar: [
    "Miktar yanılgısı: gölde çok daha fazla su vardır ama sıvı basıncı suyun miktarına bağlı değildir.",
    "Darlık yanılgısı: sıvılar sıkıştırılamaz; küçük kapta su daha çok sıkışmaz ve basınç artmaz.",
    null,
    "Taban alanı yanılgısı: tabanın geniş olması sıvı basıncını değiştirmez; basınç derinliğe ve sıvının cinsine bağlıdır."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının cinsine bağlıdır; sıvının miktarına, kabın biçimine ve taban alanına bağlı değildir.
Adım 1: İki yerde de sıvı tatlı sudur. Sıvının cinsi aynıdır.
Adım 2: İki yerde de su yüksekliği 30 cm'dir. Derinlik aynıdır.
Adım 3: Derinlik ve sıvının cinsi aynı olduğu için tabanlara etki eden su basınçları eşittir.
Sık yapılan hata: Çok suyun çok basınç demek olduğunu sanmak.
Cevap C.`
},
{
  id: "fen-sg-172",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Özdeş iki bardaktan birine su, diğerine aynı yüksekliğe kadar bal konmuştur. Balın yoğunluğu suyun yoğunluğundan büyüktür. Bu durumla ilgili şu yargılar ileri sürülmüştür:
I. Bardakların tabanlarındaki sıvı basınçları eşittir.
II. Balın bardağın tabanına uyguladığı basınç, suyunkinden büyüktür.
III. Bal dolu bardak daha geniş bir bardakla değiştirilirse (bal yüksekliği aynı kalırsa) tabandaki basınç artar.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 1,
  hatalar: [
    "Cinsi göz ardı etme: yükseklikler eşit olsa da sıvıların yoğunlukları farklıdır; basınçlar eşit değildir.",
    null,
    "Genişlik yanılgısı: bardak genişleyince bal yüksekliği aynı kaldığı için basınç artmaz. III yanlıştır, II ise doğrudur.",
    "Kısmen doğru: II doğrudur ama I yanlıştır; derinlikler eşit olsa da yoğun sıvının basıncı büyüktür."
  ],
  aciklama: `Aynı derinlikte, yoğunluğu büyük olan sıvının basıncı daha büyüktür. Kabın genişliği basıncı değiştirmez.
Adım 1: I. yargıyı kontrol et. Derinlikler eşittir ama balın yoğunluğu büyüktür. Basınçlar eşit değildir. Yanlıştır.
Adım 2: II. yargıyı kontrol et. Aynı derinlikte yoğunluğu büyük olan balın basıncı suyunkinden büyüktür. Doğrudur.
Adım 3: III. yargıyı kontrol et. Bal yüksekliği aynı kaldığı sürece bardağın genişliği basıncı değiştirmez. Yanlıştır.
Sık yapılan hata: Yükseklikler eşit olduğunda basınçların da eşit olduğunu sanmak.
Cevap B.`
},
{
  id: "fen-sg-173",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Büyük bir akvaryumun içinden geçen cam bir tünelde yürüyen Ece, tünelin tavanındaki K noktası ile yan duvarındaki L noktasının su yüzeyinden aynı derinlikte olduğunu öğrenmiştir.
**K ve L noktalarına etki eden su basınçları için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "K'ye etki eden basınç daha büyüktür; çünkü su K'ye yukarıdan basar.",
    "L'ye etki eden basınç daha büyüktür; çünkü su L'ye yandan basar.",
    "L'ye etki eden basınç daha küçüktür; çünkü su yan duvara hiç basmaz.",
    "İkisi eşittir; çünkü aynı derinlikte sıvı basıncı yöne bağlı değildir."
  ],
  dogru: 3,
  hatalar: [
    "Yön yanılgısı: yukarıdan basma yönü basıncı büyütmez; aynı derinlikte basınç her yönde aynıdır.",
    "Yön yanılgısı: yandan basma yönü basıncı büyütmez; aynı derinlikte basınç her yönde aynıdır.",
    "Yan yüzeyi unutma: sıvı yan yüzeylere de basınç uygular; L'deki basınç K'dekine eşittir.",
    null
  ],
  aciklama: `Sıvı basıncı derinliğe bağlıdır ve aynı derinlikte her yönde eşittir.
Adım 1: K ve L noktaları su yüzeyinden aynı derinliktedir.
Adım 2: Basınç yöne bağlı değildir. K'ye yukarıdan, L'ye yandan etki etse de aynı derinlikteki noktalarda basınç eşittir.
Adım 3: Yani K ve L'ye etki eden su basınçları eşittir.
Sık yapılan hata: Basıncın etki ettiği yöne göre değiştiğini sanmak.
Cevap D.`
},
{
  id: "fen-sg-174",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Görselde, bir bölümünün üstü tavanla kapalı, bir bölümünün üstü açık olan su dolu bir kap verilmiştir. K noktası kapalı tavanın altında, L noktası ise üstü açık bölümdedir. İki nokta aynı yatay düzeydedir.
**K ve L noktalarına etki eden su basınçları için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 340 240" role="img" aria-label="Sol bölümü tavanla kapalı, sağ bölümü açık su dolu kap; K kapalı tavanın altında, L açık bölümde, ikisi aynı yatay düzeyde"><polygon points="181,60 299,60 299,219 51,219 51,101 181,101" fill="var(--dolgu)"/><path d="M180 30 V100 H50 V220 H300 V30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="181" y1="60" x2="299" y2="60" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><circle cx="110" cy="150" r="6"/><circle cx="240" cy="150" r="6"/></g><g fill="currentColor" font-size="15"><text x="122" y="146">K</text><text x="252" y="146">L</text><text x="115" y="88" text-anchor="middle">Kapalı tavan</text><text x="240" y="48" text-anchor="middle">Su yüzeyi</text></g></svg>`,
  secenekler: [
    "Eşittir; çünkü ikisi de su yüzeyinin hizasından aynı uzaklıktadır.",
    "K'ninki küçüktür; çünkü K'nin üstünde L'ninkinden daha az su vardır.",
    "L'ninki küçüktür; çünkü L'nin üstü açıktır.",
    "K'ninki sıfırdır; çünkü K'nin üstü tavanla kapalıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Derinliği noktanın tam üstündeki sıvıya göre ölçme: derinlik, su yüzeyinin hizasından ölçülür; K ve L aynı yatay düzeydedir.",
    "Açık yüzeyi basınç sanma: L'nin üstünün açık olması basıncını küçültmez; derinliği K ile aynıdır.",
    "Tavanın altındaki noktada basıncı sıfır sanma: sıvı bağlantılıdır ve K'de de basınç vardır; derinlik aynı olduğundan L'dekine eşittir."
  ],
  aciklama: `Aynı sıvıda aynı yatay düzeydeki noktaların basınçları eşittir. Derinlik, sıvının açık yüzeyinin hizasından ölçülür.
Adım 1: Su, kabın bölümlerinde birbirine bağlıdır. Su yüzeyinin hizası, açık bölümdeki yüzeydir.
Adım 2: K ve L bu hizadan aynı uzaklıktadır; derinlikleri eşittir.
Adım 3: Aynı sıvıda derinlikleri eşit olan noktaların basınçları eşittir. K'nin üstünün kapalı olması ya da üstündeki su miktarının farklı olması bunu değiştirmez.
Sık yapılan hata: Derinliği noktanın tam üstündeki su sütununa göre ölçmek.
Cevap A.`
},
{
  id: "fen-sg-175",
  kazanim: "F.8.3.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Uzun bir cam boru, görseldeki gibi yatayla açı yapacak biçimde eğik tutulmuş ve tamamen suyla doldurulmuştur. Borunun boyu 50 cm, borunun alt ucunun su yüzeyinden düşey uzaklığı 30 cm'dir.
**Borunun alt ucundaki K noktasının derinliği kaç cm'dir?**`,
  gorsel: `<svg viewBox="0 0 330 200" role="img" aria-label="Eğik tutulan su dolu cam boru: boru boyu 50 cm, alt ucun su yüzeyinden düşey uzaklığı 30 cm, yatay uzaklık 40 cm; alt uçta K noktası"><line x1="60" y1="40" x2="220" y2="160" stroke="currentColor" stroke-width="18"/><line x1="60" y1="40" x2="220" y2="160" stroke="var(--dolgu)" stroke-width="12"/><line x1="20" y1="40" x2="110" y2="40" stroke="var(--vurgu)" stroke-width="3"/><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" fill="none"><line x1="60" y1="40" x2="60" y2="160"/><line x1="60" y1="160" x2="214" y2="160"/></g><circle cx="220" cy="160" r="6" fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="15"><text x="24" y="28">Su yüzeyi</text><text x="52" y="105" text-anchor="end">30 cm</text><text x="137" y="182" text-anchor="middle">40 cm</text><text x="140" y="72">Borunun boyu 50 cm</text><text x="236" y="164">K</text></g></svg>`,
  secenekler: ["20 cm", "30 cm", "40 cm", "50 cm"],
  dogru: 1,
  hatalar: [
    "Hesaplama hatası: 20 cm, görselde verilen hiçbir uzunluğa karşılık gelmez; derinlik doğrudan düşey uzaklıktır.",
    null,
    "Yatay uzaklığı derinlik sanma: 40 cm yatay uzaklıktır; sıvı basıncında derinlik düşey ölçülür.",
    "Boru boyunu derinlik sanma: 50 cm borunun boyudur; derinlik, su yüzeyinden aşağı doğru düşey ölçülen uzaklıktır."
  ],
  aciklama: `Derinlik, sıvının açık yüzeyinin hizasından noktaya kadar düşey (aşağı doğru) ölçülen uzaklıktır. Borunun boyu ya da yatay uzaklık derinliği vermez.
Adım 1: Görselde üç uzunluk vardır: borunun boyu (50 cm), düşey uzaklık (30 cm) ve yatay uzaklık (40 cm).
Adım 2: Derinlik su yüzeyinden K'ye düşey olarak ölçülür. Düşey uzaklık 30 cm'dir.
Adım 3: Boru eğik olsa da K'nin derinliği 30 cm'dir.
Sık yapılan hata: Eğik borunun boyunu derinlik saymak.
Cevap B.`
}
);
