// Fen Bilimleri — Katı Basıncı: Havuz eki (kademe 0, fen-kb-016 … fen-kb-075)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["kati-basinci"] = window.LGS_BANK["kati-basinci"] || []).push(
{
  id: "fen-kb-016",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "Bir deterjan kutusu, bir masaya önce geniş yüzeyi, sonra dar yüzeyi üzerine konmuştur.\n**Kutunun ağırlığı ve masaya uyguladığı basınç için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Ağırlığı artar, basıncı artar",
    "Ağırlığı azalır, basıncı artar",
    "Ağırlığı değişmez, basıncı azalır",
    "Ağırlığı değişmez, basıncı artar"
  ],
  dogru: 3,
  hatalar: [
    "Ağırlığı yüzeye bağlı sanma: kutu hangi yüzeyi üzerine konursa konsun ağırlığı aynıdır; değişen yalnızca temas alanıdır.",
    "Ağırlığın azaldığını sanma: kutunun içindeki madde miktarı değişmediği için ağırlığı azalmaz.",
    "Alan-basınç ilişkisini ters kurma: dar yüzeyde temas alanı küçüldüğü için basınç azalmaz, artar.",
    null
  ],
  aciklama: `Basınç, kuvvetin yüzeyin birim alanına düşen payıdır; yüzeye değen alan küçülürse aynı kuvvet daha az yere toplanır.
Adım 1: Kutu çevrilirken içindeki madde değişmez. Dolayısıyla ağırlığı, yani masaya uyguladığı kuvvet değişmez.
Adım 2: Dar yüzeyde temas alanı küçülür. Aynı ağırlık daha küçük bir alana yayıldığı için basınç artar.
Sık yapılan hata: Kutu çevrilince "kuvvet de değişti" demek. Değişen kuvvet değil, kuvvetin yayıldığı alandır.
Cevap D.`
},
{
  id: "fen-kb-017",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Ördeklerin ayak parmaklarının arasında ince bir zar bulunur. Bu zar, ördeğin yumuşak ve ıslak çamurda batmadan yürümesine yardım eder.\n**Zarın bu işe katkısı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Ayağın temas alanını artırarak çamura uygulanan basıncı azaltır",
    "Ayağın temas alanını artırarak ördeğin ağırlığını azaltır",
    "Ayağın temas alanını azaltarak çamura uygulanan basıncı azaltır",
    "Ayağın temas alanını azaltarak çamura uygulanan basıncı artırır"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Basıncı ağırlıkla karıştırma: zar ördeğin ağırlığını değiştirmez, yalnızca ağırlığın yayıldığı alanı büyütür.",
    "Alan-basınç ilişkisini ters kurma: alan küçülürse basınç azalmaz, artar. Zar ise alanı küçültmez.",
    "Zarın amacını ters değerlendirme: ördek batmak değil batmamak ister; bu yüzden zar alanı küçültmez, büyütür."
  ],
  aciklama: `Çamurda batmamak için zemine uygulanan basıncın küçük olması gerekir.
Adım 1: Parmaklar arasındaki zar, ayağın çamura değen yüzeyini genişletir. Temas alanı büyür.
Adım 2: Ördeğin ağırlığı değişmediği için aynı kuvvet daha geniş bir alana yayılır ve basınç azalır.
Sağlama: Aynı ağırlıkla geniş ayakkabı giyince yumuşak zemine daha az batarsın; zar da aynı işi yapar.
Cevap A.`
},
{
  id: "fen-kb-018",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "Ağırlıkları eşit K, L, M ve N kitapları aynı oyun hamuru zemine, farklı yüzeyleri üzerine bırakılmıştır. Kitapların hamura değen yüzeylerinin alanları tabloda verilmiştir.\n**Hamurda en derin izi bırakan kitap hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Kitap</th><th>Hamura değen alan (cm²)</th></tr><tr><td>K</td><td>60</td></tr><tr><td>L</td><td>240</td></tr><tr><td>M</td><td>30</td></tr><tr><td>N</td><td>120</td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 2,
  hatalar: [
    "Orta değeri seçme: K'nın alanı M'ninkinden büyüktür; ağırlıklar eşitken en derin izi en küçük alan bırakır.",
    "Alan-basınç ilişkisini ters kurma: en geniş yüzey basıncı en çok azaltır, bu yüzden en sığ izi L bırakır.",
    null,
    "Alan-basınç ilişkisini ters kurma: N'nin alanı M'ninkinden büyüktür, dolayısıyla basıncı daha küçüktür."
  ],
  aciklama: `Ağırlıklar eşit olduğunda iz derinliğini temas alanı belirler.
Adım 1: Tabloda alanları karşılaştır: M 30, K 60, N 120, L 240 cm².
Adım 2: Aynı ağırlık ne kadar küçük alana yayılırsa basınç o kadar büyük olur. En küçük alan M'dedir.
Adım 3: Basıncın en büyük olduğu yerde iz en derindir.
Sağlama: L en geniş yüzeyli kitap olduğundan en sığ izi bırakır.
Cevap C.`
},
{
  id: "fen-kb-019",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "Tabanları aynı büyüklükte olan K ve L kutuları, aynı süngerin üzerine konmuştur. K kutusu, L kutusundan daha ağırdır.\n**Süngerde hangi kutu daha derin bir iz bırakır ve nedeni nedir?**",
  gorsel: null,
  secenekler: [
    "L; çünkü ağırlığı daha azdır",
    "K; çünkü ağırlığı daha fazladır",
    "K; çünkü temas alanı daha büyüktür",
    "İkisi de aynı iz bırakır; çünkü tabanları eşittir"
  ],
  dogru: 1,
  hatalar: [
    "Ağırlık-basınç ilişkisini ters kurma: alan eşitken hafif kutu daha az bastırır, daha sığ iz bırakır.",
    null,
    "Alan-basınç ilişkisini ters kurma: tabanlar zaten eşittir; üstelik alan büyüdükçe basınç artmaz, azalır.",
    "Yalnızca alana bakma: alanlar eşit olsa da ağırlık farklıysa basınç farklı olur."
  ],
  aciklama: `Temas alanı eşit olduğunda basıncı ağırlık belirler.
Adım 1: Tabanlar eşit olduğundan alan değişkeni devre dışıdır.
Adım 2: K daha ağır olduğu için süngere daha büyük kuvvet uygular. Aynı alana daha büyük kuvvet binince basınç artar.
Adım 3: Basınç büyük olan kutu süngerde daha derin iz bırakır.
Sık yapılan hata: Yalnızca tabanın eşit olmasına bakıp "izler de eşit" demek. Eşit olan alandır, ağırlık değildir.
Cevap B.`
},
{
  id: "fen-kb-020",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Ağaçkakan, gagasının ince ve sivri ucuyla ağaç gövdesini oyar.\n**Gagasının ucunun sivri olması ağaçkakana nasıl bir yarar sağlar?**",
  gorsel: null,
  secenekler: [
    "Gövdeye uyguladığı kuvveti azaltarak basıncı azaltır",
    "Gövdeye değen alanı küçülterek basıncı artırır",
    "Gövdeye değen alanı büyüterek basıncı artırır",
    "Gövdeye değen alanı küçülterek basıncı azaltır"
  ],
  dogru: 1,
  hatalar: [
    "Amacı ters değerlendirme: ağaçkakan gövdeyi oymak ister, yani basıncı artırmak ister; sivri uç kuvveti değil alanı etkiler.",
    null,
    "Alan-basınç ilişkisini ters kurma: alan büyürse basınç artmaz, azalır. Sivri uç alanı büyütmez, küçültür.",
    "Alan-basınç ilişkisini ters kurma: alan küçülünce basınç azalmaz, artar."
  ],
  aciklama: `Bir şeyi delmek ya da oymak için basıncın büyük olması gerekir.
Adım 1: Sivri uç, gagayı gövdeye çok küçük bir alanla değdirir.
Adım 2: Aynı kuvvet çok küçük bir alana toplandığında basınç artar.
Adım 3: Büyük basınç, ağaç lifini kolayca ezer ve oyuk açılır.
Sık yapılan hata: Kuvvetin azaldığını sanmak. Sivri uç kuvveti değil, kuvvetin yayıldığı alanı değiştirir.
Cevap B.`
},
{
  id: "fen-kb-021",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi katı basıncını belirleyen bir değişken __değildir__?**",
  gorsel: null,
  secenekler: [
    "Cismin ağırlığı",
    "Cismin temas yüzeyinin alanı",
    "Cismin hacmi",
    "Cismin yüzeye dik uyguladığı kuvvet"
  ],
  dogru: 2,
  hatalar: [
    "Ağırlığı etkisiz sanma: ağırlık, yüzeye dik kuvvettir ve basıncı doğrudan etkiler.",
    "Alanı etkisiz sanma: temas yüzeyi büyüdükçe basınç azalır, bu nedenle alan belirleyici bir değişkendir.",
    null,
    "Kuvveti etkisiz sanma: yüzeye dik kuvvet arttıkça basınç artar."
  ],
  aciklama: `Katı basıncı iki şeye bağlıdır: yüzeye dik kuvvet (çoğu zaman ağırlık) ve temas alanı.
Adım 1: Ağırlık ve yüzeye dik kuvvet aynı değişkenin iki adıdır; ikisi de basıncı belirler.
Adım 2: Temas yüzeyinin alanı da basıncı belirler.
Adım 3: Hacim ise tek başına belirleyici değildir. Büyük hacimli bir cisim çok hafif olabilir, bu durumda basıncı küçük kalır.
Sık yapılan hata: Büyük cismin her zaman büyük basınç yaptığını sanmak.
Cevap C.`
},
{
  id: "fen-kb-022",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Zımba teli, kâğıt destesine bastırıldığında ucu kâğıdı deler. Aynı kuvvetle telin geniş sırtı bastırılırsa tel kâğıdı delmez.\n**Bu durum aşağıdakilerden hangisiyle açıklanır?**",
  gorsel: null,
  secenekler: [
    "Uçların temas alanı daha küçüktür",
    "Uçlara daha büyük kuvvet uygulanır",
    "Sırtın temas alanı daha küçüktür",
    "Sırtın ağırlığı uçlardan fazladır"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Basıncı kuvvetle karıştırma: soruda kuvvet aynı verilmiştir; değişen alandır.",
    "Alan-basınç ilişkisini ters kurma: sırt geniştir, alanı küçük değildir; bu yüzden basıncı küçüktür.",
    "Basıncı ağırlıkla karıştırma: aynı telin her yeri aynı ağırlıktadır; fark ağırlıkta değil temas alanındadır."
  ],
  aciklama: `Bir cismin kâğıda girmesi için basıncın yeterince büyük olması gerekir.
Adım 1: Soruda kuvvetin aynı olduğu söyleniyor. Öyleyse fark kuvvetten gelmez.
Adım 2: Tel ucunun kâğıda değen alanı çok küçüktür; sırt ise geniş bir alanla değer.
Adım 3: Aynı kuvvet küçük alana toplanırsa basınç büyür ve tel kâğıda girer.
Sağlama: Aynı kuvvetle geniş sırt basınç oluşturamadığı için kâğıt delinmez.
Cevap A.`
},
{
  id: "fen-kb-023",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisinde kuvvet ve basınç birimleri doğru verilmiştir?**",
  gorsel: null,
  secenekler: [
    "Kuvvet: newton · Basınç: metrekare",
    "Kuvvet: pascal · Basınç: newton",
    "Kuvvet: kilogram · Basınç: pascal",
    "Kuvvet: newton · Basınç: pascal"
  ],
  dogru: 3,
  hatalar: [
    "Alan ile basıncı karıştırma: metrekare alanın birimidir; basıncın birimi pascaldır.",
    "Birimleri yer değiştirme: newton kuvvetin, pascal basıncın birimidir.",
    "Kütle ile kuvveti karıştırma: kilogram kütlenin birimidir; kuvvet newton ile ölçülür.",
    null
  ],
  aciklama: `Her nicelik kendi birimiyle ölçülür.
Adım 1: Kuvvet itme ya da çekmedir ve newton (N) ile ölçülür. Ağırlık da bir kuvvet olduğu için newtondur.
Adım 2: Basınç, kuvvetin birim alana düşen payıdır ve birimi pascaldır (Pa).
Sık yapılan hata: Kilogramı kuvvet birimi, metrekareyi basınç birimi sanmak. Kilogram kütlenin, metrekare alanın birimidir.
Cevap D.`
},
{
  id: "fen-kb-024",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "Yatay bir masanın üzerinde bir kitap durmaktadır.\n**Kitabın masaya uyguladığı kuvvet aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: [
    "Kitabın hacmine",
    "Kitabın temas alanına",
    "Kitabın ağırlığına",
    "Kitabın kütlesine"
  ],
  dogru: 2,
  hatalar: [
    "Hacmi kuvvetle karıştırma: hacim cismin kapladığı yerdir, kuvvet değildir.",
    "Alanı kuvvetle karıştırma: temas alanı yüzeyin büyüklüğüdür; kuvvet değildir.",
    null,
    "Kütle ile ağırlığı karıştırma: kütle madde miktarıdır ve kilogramla ölçülür; masaya uygulanan kuvvet ise yer çekimi kuvvetidir, yani ağırlıktır."
  ],
  aciklama: `Yatay bir yüzeyde duran cisim, yüzeyi kendi ağırlığıyla bastırır.
Adım 1: Ağırlık, cisme etki eden yer çekimi kuvvetidir.
Adım 2: Kitap masanın üzerinde dengede durduğunda masaya uyguladığı kuvvet ağırlığına eşittir.
Sık yapılan hata: Kütleyi kuvvet sanmak. Kütle madde miktarıdır; kuvvet olarak masaya etki eden ağırlıktır.
Cevap C.`
},
{
  id: "fen-kb-025",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Karda ayakkabıyla yürüyen bir kişi dizine kadar batarken, ayaklarına geniş kayak bağlayan kişi kar üzerinde ilerleyebilmektedir.\n**Kayağın batmayı önlemesinin nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Kişinin kara değen alanını büyüterek basıncı azaltması",
    "Kişinin ağırlığını azaltarak basıncı azaltması",
    "Kişinin kara uyguladığı kuvveti yok etmesi",
    "Kişinin kara değen alanını küçülterek basıncı artırması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Basıncı ağırlıkla karıştırma: kayak kişinin ağırlığını azaltmaz; ağırlık aynı kalır, alan büyür.",
    "Kuvvetin yok olduğunu sanma: kişinin ağırlığı karı bastırmaya devam eder; yalnızca daha geniş alana yayılır.",
    "Amacı ters değerlendirme: alan küçülürse basınç artar ve kişi daha çok batar."
  ],
  aciklama: `Karda batmamak için kara uygulanan basıncı azaltmak gerekir.
Adım 1: Kayak, ayakkabıdan çok daha geniştir; kişinin kara değen toplam alanı büyür.
Adım 2: Kişinin ağırlığı aynı kalır. Aynı ağırlık daha geniş alana yayılınca basınç azalır.
Sağlama: Basınç azalınca kar çok az çöker ve kişi batmaz.
Cevap A.`
},
{
  id: "fen-kb-026",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "Ali, özdeş bir kutuyu aynı un dolu tepsiye farklı yüzeyleri üzerine koyup her seferinde una oluşan iz derinliğini ölçmüştür.\n**Bu deneyde bağımsız değişken aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Unda oluşan iz derinliği","Tepsideki unun türü","Kutunun toplam ağırlığı","Kutunun una değen yüzeyi"],
  dogru: 3,
  hatalar: [
    "Bağımlı değişkeni bağımsız sanma: iz derinliği, değiştirilen şeye göre ölçülen sonuçtur.",
    "Kontrol değişkenini bağımsız sanma: un hep aynı tepsiden alındığı için sabit tutulur.",
    "Kontrol değişkenini bağımsız sanma: kutu hep aynı kutudur, ağırlığı sabit kalır.",
    null
  ],
  aciklama: `Bağımsız değişken, deneyi yapanın bilerek değiştirdiği niceliktir.
Adım 1: Ali kutuyu her seferinde farklı yüzeyi üzerine koyuyor; yani una değen alanı değiştiriyor.
Adım 2: Ölçtüğü şey iz derinliğidir; bu bağımlı değişkendir. Kutu ve un aynı kaldığı için ağırlık ve zemin türü kontrol değişkenleridir.
Sık yapılan hata: Ölçülen sonucu (iz derinliğini) bağımsız değişken sanmak.
Cevap D.`
},
{
  id: "fen-kb-027",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisinde temas alanı, basıncı azaltmak amacıyla büyütülmüştür?**",
  gorsel: null,
  secenekler: [
    "Dikiş iğnesinin sivri ucu",
    "Baltanın bilenmiş ağzı",
    "Binanın geniş beton temeli",
    "Kedinin keskin pençeleri"
  ],
  dogru: 2,
  hatalar: [
    "Amacı ters değerlendirme: iğne ucu kumaşa girmek için alanı küçültüp basıncı artırır.",
    "Amacı ters değerlendirme: balta ağzı keskin olarak alanı küçültür, odunu yarmak için basıncı artırır.",
    null,
    "Amacı ters değerlendirme: pençeler avı tutup delmek için alanı küçültür, basıncı artırır."
  ],
  aciklama: `Basıncı azaltmak için temas alanı büyütülür; artırmak için küçültülür.
Adım 1: İğne ucu, balta ağzı ve pençe batmak ya da kesmek içindir; bunlarda alan küçülerek basınç artırılmıştır.
Adım 2: Binanın geniş temeli ise binanın ağırlığını toprağın geniş bir alanına yayar ve toprağa binen basıncı azaltır.
Sağlama: Temel dar olsaydı bina toprağa batabilirdi.
Cevap C.`
},
{
  id: "fen-kb-028",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Masanın üzerinde yatay duran bir ansiklopedinin üzerine, aynı boyutlarda ikinci bir ansiklopedi tam hizalanarak konmuştur.\nBuna göre,\nI. Masaya değen yüzeyin alanı artar.\nII. Masaya uygulanan kuvvet artar.\nIII. Masaya uygulanan basınç artar.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız II", "II ve III", "I ve II", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Yarım bırakma: kuvvet artar, ama alan aynı kaldığı için basınç da artar; III. yargı atlanmış.",
    null,
    "Alanı ağırlıkla karıştırma: üst üste konan kitap masaya değen yüzeyi büyütmez; I. yargı yanlıştır.",
    "Alanın arttığını sanma: ikinci kitap üstte durduğu için masayla temas eden yüzey aynı kalır."
  ],
  aciklama: `Üst üste koymak ağırlığı artırır, temas alanını artırmaz.
Adım 1: Alttaki kitabın masaya değen yüzeyi hâlâ yalnızca kendi tabanıdır. I. yargı yanlıştır.
Adım 2: Masayı bastıran toplam ağırlık iki kitabın ağırlığı olur; kuvvet artar. II. yargı doğrudur.
Adım 3: Alan aynıyken kuvvet arttığı için basınç artar. III. yargı doğrudur.
Sık yapılan hata: Kitap sayısı artınca masa ile temas alanının da arttığını sanmak.
Cevap B.`
},
{
  id: "fen-kb-029",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir yürüyüşçü, sırt çantasının ince ve sert askılarını geniş ve yumuşak askılarla değiştirmiştir. Çantanın içindekiler aynıdır.\nBuna göre bu değişiklikle ilgili,\nI. Omuza uygulanan kuvvet azalır.\nII. Omuza değen alan artar.\nIII. Omuza uygulanan basınç artar.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "Yalnız II"],
  dogru: 3,
  hatalar: [
    "Basıncı kuvvetle karıştırma: askının genişliği çantanın ağırlığını, dolayısıyla omuza binen kuvveti değiştirmez; I. yargı yanlıştır.",
    "Alan-basınç ilişkisini ters kurma: alan büyüdüğünde basınç artmaz, azalır; hem I. hem III. yargı yanlıştır.",
    "Alan-basınç ilişkisini ters kurma: II. yargı doğru, ama alan arttığı için basınç azalır; III. yargı yanlıştır.",
    null
  ],
  aciklama: `Geniş askı, çantanın ağırlığını omzun daha geniş bir bölgesine yayar.
Adım 1: Çantanın içindekiler aynı olduğu için ağırlığı, yani omuza binen kuvvet değişmez. I. yargı yanlıştır.
Adım 2: Geniş askı omuza değen alanı büyütür. II. yargı doğrudur.
Adım 3: Aynı kuvvet daha geniş alana yayıldığı için basınç artmaz, azalır. III. yargı yanlıştır.
Sık yapılan hata: Geniş askının yükü hafiflettiğini sanmak. Askı yükü hafifletmez, yalnızca yayar.
Cevap D.`
},
{
  id: "fen-kb-030",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Aynı kişi, taban alanları farklı K, L ve M ayakkabılarını sırayla giyip yumuşak bahçe toprağında durmuş ve her seferinde bıraktığı izin derinliğini ölçmüştür. Sonuçlar tabloda verilmiştir.\n**Kişinin ağırlığı değişmediğine göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Ayakkabı</th><th>İz derinliği (mm)</th></tr><tr><td>K</td><td>12</td></tr><tr><td>L</td><td>5</td></tr><tr><td>M</td><td>8</td></tr></table>`,
  secenekler: [
    "K'nin taban alanı en büyüktür",
    "M'nin taban alanı en küçüktür",
    "L'nin taban alanı en büyüktür",
    "K giyildiğinde zemine uygulanan kuvvet en büyüktür"
  ],
  dogru: 2,
  hatalar: [
    "Alan-basınç ilişkisini ters kurma: en derin izi bırakan K'nin basıncı en büyüktür; ağırlık aynı olduğundan K'nin alanı en küçüktür.",
    "Orta değeri seçme: M'nin izi K'ninkinden sığdır; ağırlık aynı olduğundan en küçük alan K'dedir, M'de değil.",
    null,
    "Basıncı kuvvetle karıştırma: kişinin ağırlığı değişmediği için üç ayakkabıda da zemine uygulanan kuvvet aynıdır; fark alandan gelir."
  ],
  aciklama: `Ağırlık ve zemin aynı kaldığında iz derinliğini yalnızca temas alanı belirler.
Adım 1: Kişi her seferinde aynıdır; zemine uygulanan kuvvet üç durumda da eşittir. Zemin de aynıdır.
Adım 2: En sığ iz L'de oluşmuştur; yani L'nin basıncı en küçüktür. Aynı kuvvet ancak en geniş alana yayılırsa en küçük basıncı verir.
Adım 3: Bu yüzden L'nin taban alanı en büyüktür. En derin iz K'dadır; K'nin alanı en küçüktür.
Sık yapılan hata: Derin izi büyük kuvvete bağlamak. Burada kuvvet sabittir.
Cevap C.`
},
{
  id: "fen-kb-031",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Cam kesicilerin ucundaki küçük çark çok incedir. Ustalar çarkı camın üzerinde hafifçe bastırarak gezdirir ve cam çizilir.\nBuna göre,\nI. Çarkın camla temas alanı çok küçüktür.\nII. Küçük bir kuvvet bile camda büyük basınç oluşturur.\nIII. Çarkın camla temas alanı büyütülürse aynı kuvvetle cam daha kolay çizilir.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "Yalnız I"],
  dogru: 0,
  hatalar: [
    null,
    "Alan-basınç ilişkisini ters kurma: alan büyürse basınç azalır ve cam daha zor çizilir; III. yargı yanlıştır.",
    "Alan-basınç ilişkisini ters kurma: III. yargı yanlıştır. Çark inceldikçe, yani alan küçüldükçe cam daha kolay çizilir.",
    "Yarım bırakma: I. yargı doğru, ama küçük alanın büyük basınç yarattığını söyleyen II. yargı da doğrudur."
  ],
  aciklama: `Basınç, kuvvetin küçük bir alana toplanmasıyla büyür.
Adım 1: Çark çok ince olduğu için camla değen alan çok küçüktür. I. yargı doğrudur.
Adım 2: Küçük alana düşen kuvvet küçük olsa bile birim alana etkiyen kuvvet, yani basınç büyük olur. II. yargı doğrudur.
Adım 3: Çarkın camla değen alanı büyütülürse aynı kuvvet daha geniş alana yayılır, basınç azalır ve cam daha zor çizilir. III. yargı yanlıştır.
Sık yapılan hata: Kesici aletlerin işini büyük kuvvete bağlamak. Asıl etken küçük alandır.
Cevap A.`
},
{
  id: "fen-kb-032",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Selin, katı basıncının ağırlığa bağlı olduğunu göstermek için aynı hamur yüzeyinde iki bardakla deney yapıyor. Birinci bardakta az, ikinci bardakta çok su vardır. Ancak ikinci bardağın tabanı birinciden daha geniştir.\n**Bu deneyde kontrol edilmemiş değişken aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Bardakların tabanının alanı",
    "Bardakların içindeki su miktarı",
    "Hamurda oluşan iz derinliği",
    "Hamur yüzeyinin türü"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bağımsız değişkeni kontrol sanma: su miktarı Selin'in bilerek değiştirdiği değişkendir; sabit tutulması gerekmez.",
    "Bağımlı değişkeni kontrol sanma: iz derinliği ölçülen sonuçtur; sabit tutulmaz.",
    "Verilen bilgiyi yok sayma: iki bardak da aynı hamur yüzeyine konduğu için zemin sabittir."
  ],
  aciklama: `Ağırlığın etkisini sınarken ağırlık dışındaki her şey sabit olmalıdır.
Adım 1: Ağırlık (su miktarı) bilerek değiştirilen bağımsız değişkendir; iz derinliği de bağımlı değişkendir.
Adım 2: Hamur yüzeyi iki bardakta da aynıdır. Fakat bardakların tabanı farklıdır; temas alanı da değişmiş olur.
Adım 3: Alan sabit tutulmadığı için iz farkının ağırlıktan mı alandan mı geldiği bilinemez.
Sık yapılan hata: Bilerek değiştirilen değişkeni de "kontrol edilmemiş" saymak.
Cevap A.`
},
{
  id: "fen-kb-033",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Terzi, kalın bir kumaşa iğne batırırken iğnenin başını doğrudan parmağıyla değil, yüksükle iter. Yüksüğün üst yüzeyi iğnenin başına göre oldukça geniştir ve terzinin parmağı acımaz.\n**Yüksüğün parmağı acıtmamasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Parmağa uygulanan kuvveti artırarak basıncı küçülttüğü için",
    "Kuvveti parmağın daha geniş bir alanına yayarak basıncı küçülttüğü için",
    "İğnenin ağırlığını azaltarak basıncı küçülttüğü için",
    "Parmağın iğneyle temas alanını küçülterek basıncı küçülttüğü için"
  ],
  dogru: 1,
  hatalar: [
    "Basıncı kuvvetle karıştırma: kuvvetin artması basıncı küçültmez; yüksük kuvveti artırmaz.",
    null,
    "Basıncı ağırlıkla karıştırma: iğnenin ağırlığı zaten ihmal edilebilir ve yüksükle değişmez.",
    "Alan-basınç ilişkisini ters kurma: temas alanı küçülürse basınç artar; yüksük alanı küçültmez, büyütür."
  ],
  aciklama: `Acıma, parmağa binen basıncın büyük olmasından gelir.
Adım 1: İğne başı küçüktür. Parmakla itilseydi itme kuvveti çok küçük bir alana toplanırdı.
Adım 2: Yüksük, aynı itme kuvvetini parmağın daha geniş bir bölgesine yayar. Temas alanı büyür.
Adım 3: Kuvvet aynıyken alan büyüdüğü için basınç azalır ve parmak acımaz.
Sık yapılan hata: Yüksüğün itme kuvvetini azalttığını sanmak. Değişen kuvvet değil, alandır.
Cevap B.`
},
{
  id: "fen-kb-034",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Aynı kum zemine konulan X ve Y cisimlerinden X'in bıraktığı iz, Y'ninkinden daha derindir. Cisimlerin ağırlığı ve temas alanı hakkında başka bir bilgi yoktur.\nBuna göre,\nI. X'in kuma uyguladığı basınç Y'ninkinden büyüktür.\nII. X, Y'den daha ağırdır.\nIII. X'in temas alanı Y'ninkinden küçüktür.\n**yargılarından hangileri kesinlikle doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "II ve III", "Yalnız I"],
  dogru: 3,
  hatalar: [
    "Kesin sonuç çıkarma hatası: ağırlık hakkında bilgi yoktur; X, daha hafif ama daha küçük tabanlı olabilir.",
    "Kesin sonuç çıkarma hatası: alan hakkında bilgi yoktur; X, daha geniş tabanlı ama çok daha ağır olabilir.",
    "Kesin sonuç çıkarma hatası: ağırlıkları ya da alanları bilmeden ikisi hakkında da kesin konuşulamaz.",
    null
  ],
  aciklama: `Derin iz yalnızca basıncın büyük olduğunu söyler.
Adım 1: Aynı zeminde daha derin iz, daha büyük basınç demektir. I. yargı kesinlikle doğrudur.
Adım 2: Basıncı büyük yapan neden ağırlığın fazla olması da olabilir, alanın küçük olması da. Hangisinin etkili olduğunu bilmiyoruz.
Adım 3: Bu yüzden II. ve III. yargılar doğru olabilir ama kesin değildir.
Sık yapılan hata: "Derin iz bırakan daha ağırdır" diye düşünmek.
Cevap D.`
},
{
  id: "fen-kb-035",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Sivrisineğin hortumu bir saç telinden bile incedir. Sivrisinek çok hafif olmasına rağmen hortumuyla derimizi kolayca delebilir.\n**Bu durumun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Hortumun ağırlığının sivrisineğin ağırlığından çok fazla olması",
    "Hortumun ucunun temas alanının büyük olması",
    "Hortum ucunun temas alanının çok küçük olması",
    "Sivrisineğin cilde çok büyük bir kuvvet uygulaması"
  ],
  dogru: 2,
  hatalar: [
    "Mantık hatası: hortum sivrisineğin bir parçasıdır; ağırlığı bütün ağırlığından fazla olamaz.",
    "Alan-basınç ilişkisini ters kurma: alan büyük olsaydı basınç küçük olur ve cilt delinmezdi.",
    null,
    "Verilen bilgiyi yok sayma: sivrisinek çok hafiftir; büyük bir kuvvet uygulayamaz."
  ],
  aciklama: `Delme işi büyük basınçla olur; hafif bir cisim bile temas alanı çok küçükse büyük basınç oluşturabilir.
Adım 1: Soruda sivrisineğin çok hafif olduğu söylenmiş; yani uyguladığı kuvvet küçüktür.
Adım 2: Hortum çok ince olduğu için cilde değen alan inanılmaz küçüktür.
Adım 3: Küçük kuvvet çok küçük alana düşünce basınç büyür ve cilt delinir.
Sık yapılan hata: Delmek için büyük kuvvet gerektiğini sanmak. Alan yeterince küçükse küçük kuvvet de yeter.
Cevap C.`
},
{
  id: "fen-kb-036",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Özdeş kutularla kurulan K, L ve M düzenekleri aynı yatay zemine görseldeki gibi yerleştirilmiştir. L'de kutu, ağırlığı ihmal edilebilecek kadar hafif ve kutunun tabanından daha geniş bir levhanın üzerindedir.\n**Düzeneklerin zemine uyguladığı basınçlar arasındaki ilişki aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 460 150" role="img" aria-label="K tek kutu, L geniş ve hafif bir levha üzerinde tek kutu, M iki kutu üst üste"><line x1="10" y1="110" x2="450" y2="110" stroke="currentColor" stroke-width="2"/><rect x="30" y="70" width="50" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="150" y="104" width="130" height="6" fill="currentColor"/><rect x="190" y="64" width="50" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="340" y="70" width="50" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="340" y="30" width="50" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="55" y="136" text-anchor="middle" font-size="16" fill="currentColor">K</text><text x="215" y="136" text-anchor="middle" font-size="16" fill="currentColor">L</text><text x="365" y="136" text-anchor="middle" font-size="16" fill="currentColor">M</text><text x="286" y="108" font-size="14" fill="currentColor">levha</text></svg>`,
  secenekler: [
    "P_{M} > P_{L} > P_{K}",
    "P_{M} > P_{K} > P_{L}",
    "P_{K} = P_{L} = P_{M}",
    "P_{L} > P_{K} > P_{M}"
  ],
  dogru: 1,
  hatalar: [
    "Levhayı basıncı artıran sanma: levha zemine değen alanı büyütür; ağırlık aynı kaldığı için L'nin basıncı K'ninkinden küçük olur.",
    null,
    "Düzenekleri etkisiz sanma: L'de alan büyür, M'de ağırlık artar; üç düzeneğin basıncı eşit olamaz.",
    "Alan-basınç ilişkisini ters kurma: ağırlığı en büyük olan M'nin basıncı en küçük olamaz; L'nin basıncı da K'ninkinden büyük değildir."
  ],
  aciklama: `Levha ağırlığı değiştirmeden alanı büyütür; üst üste koymak ise alanı değiştirmeden ağırlığı artırır.
Adım 1: K tek kutudur. Basıncı P_{K} olsun.
Adım 2: L'de levhanın ağırlığı ihmal edilir; kutunun ağırlığı K ile aynıdır. Zemine değen alan büyüdüğü için P_{L} < P_{K} olur.
Adım 3: M'de iki kutu üst üste durur. Temas alanı K ile aynıdır, ağırlık artmıştır; P_{M} > P_{K} olur.
Sağlama: P_{M} > P_{K} > P_{L}.
Cevap B.`
},
{
  id: "fen-kb-037",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Ekskavatör kepçesinin ön kenarında, sert toprağa saplanan ucu sivri metal dişler bulunur. Bu dişler sayesinde kepçe toprağı kolayca kazar.\n**Kepçe dişlerinin sivri olması aşağıdakilerden hangisini sağlar?**",
  gorsel: null,
  secenekler: [
    "Toprağa uygulanan kuvveti azaltır",
    "Toprağa değen alanı küçülterek kuvveti artırır",
    "Toprağa değen alanı büyütüp basıncı artırır",
    "Toprağa değen alanı küçültüp basıncı artırır"
  ],
  dogru: 3,
  hatalar: [
    "Basıncı kuvvetle karıştırma: dişlerin sivri olması kuvveti azaltmaz; alanı küçülterek basıncı artırır.",
    "Alanı kuvvetle karıştırma: toprağa uygulanan kuvveti kepçeyi hareket ettiren makine belirler; sivri uç yalnızca alanı küçültür ve basıncı artırır.",
    "Alan-basınç ilişkisini ters kurma: alan büyürse basınç artmaz, azalır. Sivri uç alanı küçültür.",
    null
  ],
  aciklama: `Sert toprağı kazmak için basıncın büyük olması gerekir.
Adım 1: Dişlerin sivri uçları toprağa çok küçük bir alanla değer.
Adım 2: Kepçeyi hareket ettiren kuvvet bu küçük alana toplanır; basınç büyür. Kuvvetin kendisi dişlerin biçimine göre değişmez.
Adım 3: Büyük basınç toprağı kolayca parçalar.
Sağlama: Düz kenarlı bir kepçe aynı kuvvetle geniş alana dayanır ve toprağı zor kazar.
Cevap D.`
},
{
  id: "fen-kb-038",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Mars'a gönderilen bir araştırmacı, yüzeydeki yumuşak toprakta Dünya'dakiyle aynı botlarla yürümektedir. Mars'ın çekim kuvveti Dünya'nınkinden küçüktür.\nBuna göre araştırmacı için Dünya'dakiyle karşılaştırıldığında,\nI. Kütlesi değişmez.\nII. Ağırlığı artar.\nIII. Toprağa uyguladığı basınç azalır.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["I ve III", "Yalnız III", "II ve III", "I ve II"],
  dogru: 0,
  hatalar: [
    null,
    "Yarım bırakma: III. yargı doğru, fakat kütle gezegene göre değişmez; I. yargı da doğrudur.",
    "Çekim ile ağırlık ilişkisini ters kurma: çekim azaldığı için ağırlık artmaz, azalır; II. yargı yanlıştır.",
    "Çekim ile ağırlık ilişkisini ters kurma: ağırlık azalır; II. yargı yanlıştır."
  ],
  aciklama: `Kütle madde miktarıdır ve yere göre değişmez; ağırlık ise yer çekimi kuvvetidir.
Adım 1: Araştırmacının madde miktarı aynıdır; kütlesi değişmez. I. yargı doğrudur.
Adım 2: Mars'ın çekimi daha küçük olduğundan ağırlığı azalır. II. yargı yanlıştır.
Adım 3: Botları aynı, yani temas alanı aynıdır. Ağırlık azaldığı için topraktaki basınç azalır. III. yargı doğrudur.
Sık yapılan hata: Kütle ile ağırlığı karıştırmak.
Cevap A.`
},
{
  id: "fen-kb-039",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir parkta, ziyaretçilerin çimenleri ezmemesi için çimlerin üzerine hafif, geniş ve düz beton plakalar döşenmiştir. Ziyaretçiler plakaların üzerinde yürür.\n**Plakaların çimenleri koruma nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Ziyaretçilerin ağırlığını azaltarak basıncı azaltması",
    "Çime değen alanı büyütüp çime uygulanan kuvveti artırması",
    "Aynı ağırlığı daha geniş bir alana yayarak basıncı azaltması",
    "Aynı ağırlığı daha küçük bir alana toplayarak basıncı artırması"
  ],
  dogru: 2,
  hatalar: [
    "Basıncı ağırlıkla karıştırma: plaka kişinin ağırlığını azaltmaz; ağırlığı yayar.",
    "Alanı kuvvetle karıştırma: plaka alanı büyütür, ama ziyaretçinin ağırlığı değişmediği için çime uygulanan kuvvet artmaz; azalan basınçtır.",
    null,
    "Amacı ters değerlendirme: plakanın amacı çimi korumaktır; bunun için basınç artırılmaz, azaltılır."
  ],
  aciklama: `Çimeni korumak için çime binen basıncı azaltmak gerekir.
Adım 1: Kişinin ağırlığı değişmez; çime uygulanan toplam kuvvet aynı kalır.
Adım 2: Geniş plaka bu kuvveti çimin çok daha geniş bir alanına yayar.
Adım 3: Alan büyüdüğü için basınç azalır ve çimen ezilmez.
Sık yapılan hata: Plakanın ağırlığı azalttığını düşünmek.
Cevap C.`
},
{
  id: "fen-kb-040",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Ağırlıkları eşit olan Selim ve Mert, aynı yumuşak kum plajında yürümektedir. Selim'in ayakkabılarının tabanı Mert'inkilerden daha geniştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Selim'in kuma uyguladığı kuvvet daha büyüktür",
    "Mert'in kuma uyguladığı kuvvet daha büyüktür",
    "Selim'in kuma uyguladığı basınç daha büyüktür",
    "Mert'in kuma uyguladığı basınç daha büyüktür"
  ],
  dogru: 3,
  hatalar: [
    "Basıncı kuvvetle karıştırma: ağırlıklar eşit olduğu için kuvvetler eşittir; geniş taban kuvveti artırmaz.",
    "Basıncı kuvvetle karıştırma: ağırlıklar eşit olduğu için kuvvetler eşittir; hiçbiri daha büyük değildir.",
    "Alan-basınç ilişkisini ters kurma: tabanı geniş olan Selim'in basıncı daha küçüktür.",
    null
  ],
  aciklama: `Ağırlıklar eşitse kuvvetler eşittir; basıncı alan belirler.
Adım 1: İkisinin ağırlığı eşit olduğundan kuma uyguladıkları kuvvet de eşittir.
Adım 2: Selim'in tabanı geniş, yani temas alanı büyüktür. Aynı kuvvet geniş alana yayıldığı için basıncı küçüktür.
Adım 3: Mert'in temas alanı daha küçük olduğundan basıncı daha büyüktür; kuma daha çok batar.
Cevap D.`
},
{
  id: "fen-kb-041",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Golf sahalarında çim bakımında kullanılan küçük araçların lastikleri geniş ve yumuşaktır. Bu sayede araç ağır olmasına rağmen çimeni ezmez.\n**Geniş lastiklerin çimeni korumasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Aracın ağırlığını azaltarak basıncı azaltması",
    "Zemine değen alanı artırarak basıncı azaltması",
    "Zemine değen alanı azaltarak basıncı artırması",
    "Aracın zemine uyguladığı kuvveti artırarak basıncı azaltması"
  ],
  dogru: 1,
  hatalar: [
    "Basıncı ağırlıkla karıştırma: lastiğin genişliği aracın ağırlığını değiştirmez.",
    null,
    "Amacı ters değerlendirme: çimeni korumak için basınç azaltılır; alan küçülünce basınç artardı.",
    "Basıncı kuvvetle karıştırma: kuvvet artarsa basınç azalmaz, artar. Lastik genişliği kuvveti de değiştirmez."
  ],
  aciklama: `Çimeni korumak için çime binen basıncın küçük olması gerekir.
Adım 1: Aracın ağırlığı, yani çime uyguladığı kuvvet, lastik genişliğinden bağımsızdır.
Adım 2: Geniş lastikler çime değen toplam alanı büyütür.
Adım 3: Aynı kuvvet daha büyük bir alana yayıldığında basınç azalır ve çimen ezilmez.
Sık yapılan hata: Geniş lastiğin aracı hafifleteceğini sanmak.
Cevap B.`
},
{
  id: "fen-kb-042",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Tabanları aynı olan özdeş K, L ve M bardaklarının içinde sırasıyla 1, 3 ve 5 özdeş misket bulunmaktadır. Bardaklar aynı oyun hamuru zemine yavaşça bırakılıp hamurda oluşan izin derinliği ölçülmüştür.\n**Buna göre iz derinlikleri arasındaki ilişki aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["K > L > M", "K = L = M", "M > L > K", "L > K > M"],
  dogru: 2,
  hatalar: [
    "Ağırlık-basınç ilişkisini ters kurma: misket sayısı arttıkça ağırlık artar ve iz derinleşir, sığlaşmaz.",
    "Alanı belirleyici sanma: tabanlar eşit olsa da ağırlıklar farklı olduğu için basınçlar farklıdır.",
    null,
    "Sıralamayı karıştırma: ağırlık arttıkça iz düzenli olarak derinleşir; L, K ile M arasında olmalıdır."
  ],
  aciklama: `Temas alanı eşit olduğunda basıncı ağırlık belirler.
Adım 1: Bardakların tabanları aynıdır; alan değişkeni sabittir.
Adım 2: İçindeki misket sayısı arttıkça toplam ağırlık artar: M en ağır, K en hafiftir.
Adım 3: Ağırlık arttıkça basınç artar ve iz derinleşir: M > L > K.
Sağlama: En az yük taşıyan K'nin izi en sığ olmalıdır.
Cevap C.`
},
{
  id: "fen-kb-043",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Balık oltalarının iğneleri çok ince ve sivri uçludur. Balık yemi yutunca iğne, balığın ağız dokusuna kolayca saplanır.\n**Bunun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Küçük bir temas alanında büyük basınç oluşması",
    "Büyük bir temas alanında büyük basınç oluşması",
    "Küçük bir temas alanında basıncın azalması",
    "Büyük bir temas alanında basıncın azalması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Alan-basınç ilişkisini ters kurma: iğnenin ucu büyük değil küçük bir alanla temas eder.",
    "Alan-basınç ilişkisini ters kurma: alan küçülünce basınç azalmaz, artar.",
    "Verilen bilgiyi yok sayma: iğne ucu sivridir, temas alanı büyük değildir."
  ],
  aciklama: `İğnenin dokuya saplanması için basıncın büyük olması gerekir.
Adım 1: İğne ucu çok sivri olduğu için dokuya çok küçük bir alanla değer.
Adım 2: Aynı kuvvet küçük bir alana toplanınca basınç çok büyür.
Adım 3: Büyük basınç dokuyu deler ve iğne saplanır.
Sık yapılan hata: Alan ile basıncı doğru orantılı sanmak. Alan küçüldükçe basınç artar.
Cevap A.`
},
{
  id: "fen-kb-044",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Bir depocu, yatay zemindeki bir sandığın zemine uyguladığı basıncı değiştirmek istemektedir. Sandığa eşya ekleyerek ya da çıkararak ağırlığını, sandığı farklı yüzeyi üzerine koyarak da temas alanını değiştirebilir.\n**Aşağıdaki değişikliklerden hangisi sandığın zemine uyguladığı basıncı kesinlikle artırır?**",
  gorsel: null,
  secenekler: [
    "Ağırlığı artırıp temas alanını da artırmak",
    "Ağırlığı azaltıp temas alanını da azaltmak",
    "Ağırlığı azaltıp temas alanını artırmak",
    "Ağırlığı artırıp temas alanını azaltmak"
  ],
  dogru: 3,
  hatalar: [
    "Zıt etkileri tartma hatası: ağırlık artışı basıncı artırır, alan artışı ise azaltır; sonuç kesin değildir.",
    "Zıt etkileri tartma hatası: ağırlık azalışı basıncı azaltır, alan azalışı ise artırır; sonuç kesin değildir.",
    "Ters yöne bakma: ağırlık azalıp alan artarsa iki etki de basıncı küçültür; basınç azalır.",
    null
  ],
  aciklama: `Ağırlık arttıkça basınç artar; temas alanı küçüldükçe basınç artar. Kesin sonuç için iki etkinin aynı yönde olması gerekir.
Adım 1: Ağırlığı artırmak tek başına basıncı artırır.
Adım 2: Temas alanını azaltmak da tek başına basıncı artırır.
Adım 3: İkisi birlikte yapılırsa etkiler aynı yönde olur ve basınç kesinlikle artar. Diğer seçeneklerde ya etkiler zıt yöndedir (sonuç belirsizdir) ya da ikisi de basıncı azaltır.
Sık yapılan hata: Zıt yönlü iki değişimin sonucunu önceden belli sanmak.
Cevap D.`
},
{
  id: "fen-kb-045",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Yumuşak ve çamurlu bir arazide çalışan iş makinesinin tekerlekleri geniş zincirli paletlerle değiştirilmiştir. Paletler, makinenin zemine değen yüzeyini genişletir. Makinenin ağırlığı değişmemiştir.\n**Paletlerin kullanılması aşağıdakilerden hangisini sağlar?**",
  gorsel: null,
  secenekler: [
    "Zemine değen alanı artırarak zemine uygulanan basıncın azalmasını",
    "Zemine değen alanı artırarak makinenin ağırlığının azalmasını",
    "Zemine değen alanı artırarak zemine uygulanan basıncın artmasını",
    "Zemine uygulanan kuvveti azaltarak batmanın azalmasını"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Basıncı ağırlıkla karıştırma: palet makinenin ağırlığını değiştirmez.",
    "Alan-basınç ilişkisini ters kurma: alan arttıkça basınç azalır, artmaz.",
    "Basıncı kuvvetle karıştırma: makinenin ağırlığı aynı kaldığı için zemine uyguladığı kuvvet de aynıdır."
  ],
  aciklama: `Çamurda batmamak için zemine uygulanan basıncın küçük olması gerekir.
Adım 1: Geniş paletler, makinenin zemine değen toplam alanını büyütür.
Adım 2: Makinenin ağırlığı değişmez, ancak bu ağırlık daha geniş bir alana yayılır.
Adım 3: Alan büyüyünce basınç azalır ve makine batmaz.
Sağlama: Geniş ayakkabıyla yumuşak zeminde daha az batarsın; palet de aynı işi yapar.
Cevap A.`
},
{
  id: "fen-kb-046",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 2,
  soru: "Aynı yumuşak zemine bırakılan K, L ve M cisimlerinin ağırlıkları ve zemine değen yüzeylerinin alanları tabloda verilmiştir.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Cisim</th><th>Ağırlık (N)</th><th>Temas alanı (cm²)</th></tr><tr><td>K</td><td>30</td><td>10</td></tr><tr><td>L</td><td>30</td><td>20</td></tr><tr><td>M</td><td>70</td><td>20</td></tr></table>`,
  secenekler: [
    "L'nin basıncı K'ninkinden büyüktür",
    "L'nin basıncı M'ninkinden büyüktür",
    "K'nin basıncı L'ninkinden büyüktür",
    "K, L ve M'nin basınçları eşittir"
  ],
  dogru: 2,
  hatalar: [
    "Alan-basınç ilişkisini ters kurma: ağırlıkları eşit olan K ve L'den alanı daha geniş olan L'nin basıncı daha küçüktür.",
    "Ağırlık-basınç ilişkisini ters kurma: alanları eşit olan L ve M'den daha ağır olan M'nin basıncı daha büyüktür.",
    null,
    "Eşitlik varsayma: ağırlıklar ya da alanlar eşit olsa da ikisi birden eşit değildir; basınçlar farklıdır."
  ],
  aciklama: `İki cismi karşılaştırırken önce eşit olan değişkeni bul.
Adım 1: K ve L'nin ağırlıkları eşittir. Alanı küçük olan K'nin basıncı daha büyüktür.
Adım 2: L ve M'nin alanları eşittir. Ağırlığı büyük olan M'nin basıncı L'ninkinden büyüktür.
Adım 3: Buna göre P_{K} > P_{L} ve P_{M} > P_{L} olur; L'nin basıncı en küçüktür.
Sık yapılan hata: Alan büyüdükçe basıncın da büyüdüğünü sanmak.
Cevap C.`
},
{
  id: "fen-kb-047",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Çadır kazıklarının bir ucu sivri, diğer ucu geniş ve düzdür. Kazık, geniş ucundan tokmakla vurularak toprağa çakılır. Tokmağın uyguladığı kuvvet kazık boyunca aynen iletilir.\n**Kazığın bu biçimde yapılmasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Sivri uçta kuvvet büyüktür, geniş uçta kuvvet küçüktür; bu yüzden kazık girer ve baş ezilmez",
    "Sivri uçta basınç büyüktür, geniş uçta basınç küçüktür; bu yüzden kazık girer ve baş ezilmez",
    "Sivri uçta basınç küçüktür, geniş uçta basınç büyüktür; bu yüzden kazık girer ve baş ezilmez",
    "Sivri uçta alan büyüktür, geniş uçta alan küçüktür; bu yüzden kazık girer ve baş ezilmez"
  ],
  dogru: 1,
  hatalar: [
    "Kuvvetin uçlara göre değiştiğini sanma: tokmağın kuvveti kazık boyunca aynen iletilir; iki uçta değişen kuvvet değil, alandır.",
    null,
    "Alan-basınç ilişkisini ters kurma: basıncı büyük olan uç sivri uçtur, geniş uç değildir.",
    "Alanı ters yorumlama: sivri uç küçük, geniş uç büyük bir alanla değer."
  ],
  aciklama: `Kuvvet kazık boyunca aynen iletildiğine göre iki uçtaki basıncı yalnızca alanlar belirler.
Adım 1: Geniş başta kuvvet geniş alana yayılır; basınç küçüktür. Böylece baş ezilmez.
Adım 2: Sivri uçta aynı kuvvet çok küçük alana toplanır; basınç büyüktür.
Adım 3: Büyük basınç toprağı iter ve kazık girer.
Sık yapılan hata: İki uçta farklı kuvvet olduğunu sanmak. Kuvvet aynıdır; farklı olan alandır.
Cevap B.`
},
{
  id: "fen-kb-048",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir sergi salonunda halı kaplı zemine konan ağır metal heykelin tabanı dar olduğu için halı zamanla çökmüştür. Görevliler heykelin altına, heykelin tabanından daha geniş, ağırlığı heykele göre çok küçük bir mermer levha yerleştirmiştir. Heykel levhanın üzerine konmuştur.\nBuna göre,\nI. Zemine uygulanan kuvvet yaklaşık olarak değişmez.\nII. Halıya değen alan artar.\nIII. Halıya uygulanan basınç azalır.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız III", "I ve II", "I, II ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Yarım bırakma: III. yargı doğru, ama I ve II de doğrudur; kuvvet aynı kalır ve alan artar.",
    "Yarım bırakma: I ve II doğru, ama alan artıp kuvvet aynı kaldığı için basınç da azalır; III. yargı da doğrudur.",
    null,
    "Yarım bırakma: II ve III doğru, ama heykelin ağırlığı değişmediği için kuvvetin değişmediğini söyleyen I. yargı da doğrudur."
  ],
  aciklama: `Altına levha koymak ağırlığı değiştirmez, yalnızca alanı büyütür.
Adım 1: Levhanın ağırlığı heykelinkine göre çok küçüktür. Zemine binen toplam kuvvet heykelin ağırlığı kadar kalır. I. yargı doğrudur.
Adım 2: Heykel artık levha aracılığıyla halıya değer; halıya değen alan heykelin dar tabanından büyüktür. II. yargı doğrudur.
Adım 3: Aynı kuvvet daha büyük alana yayıldığı için basınç azalır. III. yargı doğrudur.
Sağlama: Halıda çökme azalır.
Cevap C.`
},
{
  id: "fen-kb-049",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: "Özdeş bir taş blok, aynı yüzeyi üzerine üç farklı zemine sırayla bırakılmıştır. Her zeminde bloğun bıraktığı izin derinliği ölçülmüş ve sonuçlar tabloda verilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Zemin</th><th>İz derinliği (mm)</th></tr><tr><td>Sıkıştırılmış kum</td><td>1</td></tr><tr><td>Kuru kum</td><td>4</td></tr><tr><td>Un</td><td>9</td></tr></table>`,
  secenekler: [
    "Üç zemine uygulanan basınç aynıdır; çünkü ağırlık ve alan değişmemiştir",
    "Una uygulanan basınç en büyüktür; çünkü iz derinliği en fazladır",
    "Sıkıştırılmış kuma uygulanan basınç en küçüktür; çünkü iz en sığdır",
    "Una uygulanan kuvvet en büyüktür; çünkü un en kolay çöken zemindir"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İz derinliğini basınç sanma: zeminler farklı olduğundan iz derinliği basıncın göstergesi olmaz; blok, alanı ve ağırlığı aynı olduğu için her zemine aynı basıncı uygular.",
    "İz derinliğini basınç sanma: iz en sığ olsa da zeminler farklıdır; blok her zemine aynı basıncı uygular.",
    "Zeminin kuvveti değiştirdiğini sanma: kuvvet bloğun ağırlığıdır ve zemine bağlı değildir; una uygulanan kuvvet diğerlerinden büyük değildir."
  ],
  aciklama: `İz derinliği ancak aynı zeminde karşılaştırılırsa basıncın göstergesidir.
Adım 1: Blok özdeştir ve aynı yüzeyi üzerine konmuştur. Ağırlığı ve temas alanı hiçbir zeminde değişmez.
Adım 2: Kuvvet ve alan aynı olduğu için bloğun her zemine uyguladığı basınç aynıdır.
Adım 3: İz derinliklerinin farklı çıkması zeminlerin ne kadar kolay çöktüğünü gösterir.
Sık yapılan hata: Derin ize bakıp "orada basınç daha büyük" demek.
Cevap A.`
},
{
  id: "fen-kb-050",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir otel, kumsalda bagaj taşıyan küçük aracının ince lastiklerini, aynı sayıda ama daha geniş balon lastiklerle değiştirmiştir. Aracın ve taşıdığı bagajın ağırlığı değişmemiştir.\nBuna göre,\nI. Aracın kuma uyguladığı kuvvet azalmıştır.\nII. Kuma değen toplam alan değişmemiştir.\nIII. Kuma uygulanan basınç azalmıştır.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "Yalnız III"],
  dogru: 3,
  hatalar: [
    "Basıncı kuvvetle karıştırma: araç hâlâ aynı ağırlıkta olduğu için kuma uyguladığı kuvvet azalmaz; I. yargı yanlıştır.",
    "Kuvvet ve alan hakkında yanlış yargı: hem kuvvet azalmamıştır hem de geniş lastikler alanı büyüttüğü için alan değişmiştir; I. ve II. yargı yanlıştır.",
    "Yarım doğru: III. yargı doğru, ama geniş lastikler kuma değen alanı büyütmüştür; II. yargı yanlıştır.",
    null
  ],
  aciklama: `Lastik genişliği yalnızca temas alanını değiştirir.
Adım 1: Araç ve bagajın ağırlığı değişmediği için kuma uygulanan kuvvet de aynıdır. I. yargı yanlıştır.
Adım 2: Geniş balon lastikler kuma değen toplam alanı büyütür. II. yargı yanlıştır.
Adım 3: Aynı kuvvet daha geniş alana yayıldığı için basınç azalır. III. yargı doğrudur.
Sık yapılan hata: Basıncın azalmasını kuvvetin azalması sanmak.
Cevap D.`
},
{
  id: "fen-kb-051",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: "Özdeş kitaplarla kurulan dört düzeneğin özellikleri tabloda verilmiştir. Kitaplar zemine yavaşça bırakılmıştır.\nBu düzeneklerle,\nI. 1 ve 2 ile temas alanının etkisi,\nII. 2 ve 3 ile ağırlığın etkisi,\nIII. 2 ve 4 ile zemin türünün etkisi\nincelenmek isteniyor.\n**Buna göre hangileri doğru bir karşılaştırmadır?**",
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Üst üste kitap sayısı</th><th>Zemine değen yüzey</th><th>Zemin</th></tr><tr><td>1</td><td>1</td><td>Geniş</td><td>Kum</td></tr><tr><td>2</td><td>1</td><td>Dar</td><td>Kum</td></tr><tr><td>3</td><td>2</td><td>Geniş</td><td>Kum</td></tr><tr><td>4</td><td>1</td><td>Dar</td><td>Un</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Yarım bırakma: I. karşılaştırma doğru, ama 2 ve 4 de yalnızca zeminin farklı olduğu çifttir; III. de doğrudur.",
    null,
    "İki değişkeni birden değiştirme: 2 ve 3'te hem kitap sayısı hem yüzey farklıdır; II. karşılaştırma ağırlığın etkisini gösteremez.",
    "İki değişkeni birden değiştirme: 2 ve 3 arasında hem ağırlık hem alan farklıdır; II. karşılaştırma yanlıştır."
  ],
  aciklama: `Bir değişkenin etkisi, yalnızca o değişkenin farklı olduğu iki düzenekle incelenir.
Adım 1: 1 ve 2'de kitap sayısı ve zemin aynı, yüzey farklıdır. Bu çift temas alanının etkisini gösterir. I. doğrudur.
Adım 2: 2 ve 3'te hem kitap sayısı (ağırlık) hem yüzey (alan) farklıdır. Bu çift ağırlığın etkisini ayıramaz. II. yanlıştır.
Adım 3: 2 ve 4'te kitap sayısı ve yüzey aynı, yalnızca zemin farklıdır. Bu çift zemin türünün etkisini gösterir. III. doğrudur.
Sağlama: Ağırlığın etkisini göstermek için 1 ve 3 karşılaştırılırdı.
Cevap B.`
},
{
  id: "fen-kb-052",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Nemli toprakta duran bir fotoğrafçının üç ayaklı sehpası, kamera takılınca ayaklarının altında toprağın çöktüğünü göstermiştir. Fotoğrafçı bunun üzerine ayakların altına geniş plastik tabanlar takmıştır. Tabanların ağırlığı ihmal edilebilir.\n**Plastik tabanlar takıldığında sehpa ve kameranın zemine uyguladığı kuvvet ve basınç nasıl değişir?**",
  gorsel: null,
  secenekler: [
    "Kuvvet azalır, basınç azalır",
    "Kuvvet değişmez, basınç azalır",
    "Kuvvet değişmez, basınç değişmez",
    "Kuvvet artar, basınç azalır"
  ],
  dogru: 1,
  hatalar: [
    "Basıncı kuvvetle karıştırma: tabanların ağırlığı ihmal edilebildiği için toplam kuvvet değişmez.",
    null,
    "Alanı etkisiz sanma: tabanlar temas alanını büyüttüğü için basınç değişir, azalır.",
    "Kuvvetin arttığını sanma: tabanlar ihmal edilebilir ağırlıktadır; zemine binen kuvvet artmaz."
  ],
  aciklama: `Altına geniş taban koymak kuvveti değil alanı değiştirir.
Adım 1: Sehpa, kamera ve tabanlardan oluşan sistemin ağırlığı değişmez; zemine uygulanan kuvvet aynı kalır.
Adım 2: Geniş tabanlar ayakların toprakla temas alanını büyütür.
Adım 3: Aynı kuvvet daha geniş alana yayıldığı için basınç azalır.
Sık yapılan hata: Basıncın azalmasını kuvvetin azalması sanmak.
Cevap B.`
},
{
  id: "fen-kb-053",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: "Kaan, içi kitapla dolu bir koliyi önce geniş yüzeyi, sonra dar yüzeyi üzerine yumuşak kuma bırakmış ve izlerin derinliklerini karşılaştırmıştır. Dar yüzeyi üzerine bıraktığında iz daha derin olmuştur. Aynı kuma ve aynı bırakma biçimiyle deneyi tekrarlamıştır.\n**Kaan'ın gözlemini aşağıdakilerden hangisi hem sonuç hem gerekçe bakımından doğru açıklar?**",
  gorsel: null,
  secenekler: [
    "Dar yüzeyde temas alanı küçüldüğü için koliden kuma uygulanan basınç artmıştır",
    "Dar yüzeyde koli daha ağır olduğu için kuma uygulanan basınç artmıştır",
    "Dar yüzeyde kuma uygulanan kuvvet arttığı için iz daha derin olmuştur",
    "Dar yüzeyde temas alanı küçüldüğü için kolinin ağırlığı azalmıştır"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ağırlığın değiştiğini sanma: koliyi çevirmek ağırlığı artırmaz; değişen temas alanıdır.",
    "Kuvvetin değiştiğini sanma: kuvvet kolinin ağırlığıdır ve yüzey değişince değişmez.",
    "Alan ile ağırlığı karıştırma: temas alanı küçülünce ağırlık azalmaz."
  ],
  aciklama: `İzdeki fark, koli ve kum aynı kaldığına göre yalnızca temas alanından gelir.
Adım 1: Koli aynı koli olduğu için ağırlığı, yani kuma uyguladığı kuvvet iki durumda da aynıdır.
Adım 2: Dar yüzeyde temas alanı küçülür; aynı kuvvet daha küçük bir alana toplanır.
Adım 3: Basınç artar ve iz derinleşir. Sonuç (basınç arttı) ile gerekçe (alan küçüldü) birlikte doğru olmalıdır.
Sık yapılan hata: Sonucu doğru bulup gerekçeyi (ağırlık arttı, kuvvet arttı) denetlememek.
Cevap A.`
},
{
  id: "fen-kb-054",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Jakana adlı su kuşunun parmakları vücut boyuna göre çok uzundur. Bu kuş, göl yüzeyinde yüzen yaprakların üzerinde batmadan yürüyebilir.\nBuna göre,\nI. Uzun parmaklar, yaprağa değen toplam alanı artırır.\nII. Kuşun yaprağa uyguladığı kuvvet, aynı ağırlıktaki kısa parmaklı bir kuşunkine eşittir.\nIII. Yaprağa uygulanan basınç, aynı ağırlıktaki kısa parmaklı bir kuşunkinden büyüktür.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "II ve III", "I ve II"],
  dogru: 3,
  hatalar: [
    "Yarım bırakma: II. yargı doğru, ama uzun parmakların alanı artırdığını söyleyen I. yargı da doğrudur.",
    "Alan-basınç ilişkisini ters kurma: alan büyüdüğü için basınç büyümez, küçülür; III. yargı yanlıştır.",
    "Alan-basınç ilişkisini ters kurma: III. yargı yanlıştır. Parmaklar uzadıkça alan artar ve basınç azalır.",
    null
  ],
  aciklama: `Parmakları uzun olan kuş, aynı ağırlığı daha geniş bir alana dağıtır.
Adım 1: Uzun parmaklar yaprağa değen yüzeyi büyütür. I. yargı doğrudur.
Adım 2: İki kuşun ağırlığı eşit olduğundan yaprağa uyguladıkları kuvvet de eşittir; parmak uzunluğu kuvveti değiştirmez. II. yargı doğrudur.
Adım 3: Kuvvet aynıyken alan büyüdüğü için basınç, kısa parmaklı kuşa göre daha küçüktür. III. yargı yanlıştır.
Sık yapılan hata: Geniş ya da uzun tabanın basıncı artırdığını sanmak. Alan büyüdükçe basınç azalır.
Cevap D.`
},
{
  id: "fen-kb-055",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: "Bir bahçıvan, yumuşak toprakta kullandığı el arabasının tekerleğini daha geniş bir tekerlekle değiştirmiş ve aynı anda arabaya ek kum torbaları yüklemiştir.\n**Bu iki değişiklik birlikte yapıldığında arabanın toprağa uyguladığı basınç için aşağıdakilerden hangisi söylenebilir?**",
  gorsel: null,
  secenekler: [
    "Ağırlık arttığı için basınç kesinlikle artar",
    "Temas alanı arttığı için basınç kesinlikle azalır",
    "İki etki zıt yönde çalıştığı için basıncın nasıl değişeceği kesin söylenemez",
    "İki değişiklik birbirini yok ettiği için basınç kesinlikle değişmez"
  ],
  dogru: 2,
  hatalar: [
    "Yalnızca bir değişkene bakma: ağırlık artarken temas alanı da arttığı için basıncın artacağı kesin değildir.",
    "Yalnızca bir değişkene bakma: temas alanı artarken ağırlık da arttığı için basıncın azalacağı kesin değildir.",
    null,
    "Eşitlik varsayma: etkilerin tam olarak dengelendiğini gösteren bir bilgi yoktur; basınç artmış da azalmış da olabilir."
  ],
  aciklama: `Ağırlık arttıkça basınç artar; alan arttıkça basınç azalır. İki etki zıt yöndedir.
Adım 1: Ek kum torbaları ağırlığı artırır; bu tek başına basıncı artırırdı.
Adım 2: Daha geniş tekerlek alanı artırır; bu tek başına basıncı azaltırdı.
Adım 3: Ağırlığın ne kadar, alanın ne kadar arttığı bilinmediği için sonuç kesin söylenemez.
Sağlama: Etkilerin aynı yönde olduğu durumlarda (ağırlık artıp alan azalırsa) basınç kesinlikle artardı.
Cevap C.`
},
{
  id: "fen-kb-056",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Çamura saplanan bir kamyonetin sürücüsü, aracı kurtarmak için çamura uygulanan basıncı azaltmak istemektedir. Üç yöntem düşünmektedir.\nK: Kasadaki yükün bir kısmını boşaltmak\nL: Lastiklerin altına geniş ve düz levhalar yerleştirmek\nM: Her lastiğin yanına özdeş birer lastik daha takmak (araç ağırlığı değişmiyor sayılacaktır)\n**Bu yöntemlerden hangileri aracın çamura uyguladığı basıncı azaltır?**",
  gorsel: null,
  secenekler: ["Yalnızca L", "K, L ve M", "K ve L", "L ve M"],
  dogru: 1,
  hatalar: [
    "Yarım bırakma: levha alanı büyütür ama yükü boşaltmak ağırlığı, ek lastik de alanı değiştirir; diğer yöntemler de basıncı azaltır.",
    null,
    "Yarım bırakma: ek lastik temas alanını büyüttüğü için M de basıncı azaltır.",
    "Yarım bırakma: yükü boşaltmak ağırlığı azalttığı için K da basıncı azaltır."
  ],
  aciklama: `Basıncı azaltmanın iki yolu vardır: ağırlığı azaltmak ya da temas alanını büyütmek.
Adım 1: K'da yük boşaltılınca ağırlık azalır. Alan aynı kaldığı için basınç azalır.
Adım 2: L'de levhalar temas alanını büyütür. Ağırlık aynıyken basınç azalır.
Adım 3: M'de lastik sayısı artınca toplam temas alanı büyür. Ağırlık değişmediği için basınç azalır.
Sağlama: Üçü de iki yoldan birini kullanıyor.
Cevap B.`
},
{
  id: "fen-kb-057",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: "Mina, oyun hamurunun üzerine özdeş küplerden 1, 2 ve 3 tanesini üst üste koyup hamurda oluşan iz derinliğini ölçmektedir. Küpleri her seferinde aynı yüzeyleri üzerine yerleştirmekte ve aynı hamuru kullanmaktadır.\nBu deneyle ilgili,\nI. Bağımsız değişken iz derinliğidir.\nII. Bağımlı değişken iz derinliğidir.\nIII. Küplerin hamura değen yüzeyi kontrol değişkenidir.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Yarım bırakma: II. yargı doğru, fakat küplerin hamura değen yüzeyi hep aynı tutulduğu için III. yargı da doğrudur.",
    "Bağımsız ile bağımlı değişkeni karıştırma: iz derinliği Mina'nın değiştirdiği değil, ölçtüğü niceliktir; I. yargı yanlıştır.",
    "Bağımsız ile bağımlı değişkeni karıştırma: I. yargı yanlıştır. Bağımsız değişken, üst üste konan küp sayısıdır.",
    null
  ],
  aciklama: `Bağımsız değişken değiştirilen, bağımlı değişken ölçülen, kontrol değişkeni sabit tutulandır.
Adım 1: Mina küp sayısını, yani ağırlığı değiştiriyor; bağımsız değişken ağırlıktır. I. yargı yanlıştır.
Adım 2: Ölçtüğü şey iz derinliğidir; bu bağımlı değişkendir. II. yargı doğrudur.
Adım 3: Küpleri hep aynı yüzeyleri üzerine koyduğu için temas alanı ve hamur türü sabit tutulur; kontrol değişkenidir. III. yargı doğrudur.
Sık yapılan hata: Ölçülen sonucu bağımsız değişken sanmak.
Cevap D.`
},
{
  id: "fen-kb-058",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Kediler yürürken tırnaklarını içeri çekerek geniş ve yumuşak pati yastıkları üzerinde basar. Av yakalarken ise tırnaklarını dışarı çıkarır ve avın üzerine tırnak uçlarıyla bastırır. Bir kedi her iki durumda da yüzeye aynı büyüklükte kuvvet uyguluyor olsun.\n**Bu durumda tırnak uçlarının ve pati yastığının yüzeye uyguladığı basınçlar için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Tırnak uçlarının basıncı daha büyüktür; çünkü temas alanı daha küçüktür",
    "Tırnak uçlarının basıncı daha küçüktür; çünkü temas alanı daha küçüktür",
    "İkisinin basıncı eşittir; çünkü yüzeye uygulanan kuvvet eşittir",
    "Pati yastığının basıncı daha büyüktür; çünkü temas alanı daha büyüktür"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Alan-basınç ilişkisini ters kurma: alan küçüldükçe basınç azalmaz, artar.",
    "Basıncı kuvvetle karıştırma: kuvvet eşit olsa da alanlar farklı olduğundan basınçlar eşit olmaz.",
    "Alan-basınç ilişkisini ters kurma: alan büyüdükçe basınç artmaz, azalır."
  ],
  aciklama: `Kuvvet aynıysa basıncı temas alanı belirler.
Adım 1: Tırnak uçları çok sivridir; yüzeye değen alanları çok küçüktür.
Adım 2: Pati yastığı geniştir; yüzeye değen alanı büyüktür.
Adım 3: Aynı kuvvet tırnak uçlarında küçük alana toplanır, yastıkta geniş alana yayılır. Bu yüzden tırnak ucundaki basınç daha büyüktür.
Sağlama: Kedi bu yüzden avını tırnaklarıyla tutabilir, ama yastıklarıyla yürürken zemine zarar vermez.
Cevap A.`
},
{
  id: "fen-kb-059",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: "K, L ve M cisimleri aynı sünger zemine görseldeki gibi konmuştur. Cisimlerin ağırlıkları görselde newton (N) cinsinden verilmiştir. Cisimlerin derinlikleri eşittir; taban genişliği büyük olanın zemine değen alanı da büyüktür.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<svg viewBox="0 0 460 170" role="img" aria-label="Sünger üzerinde K dar ve 20 N, L geniş ve 40 N, M dar ve 40 N olan üç cisim"><rect x="10" y="130" width="440" height="24" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="30" y="80" width="40" height="50" fill="none" stroke="currentColor" stroke-width="2"/><rect x="160" y="80" width="120" height="50" fill="none" stroke="currentColor" stroke-width="2"/><rect x="360" y="80" width="40" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="112" text-anchor="middle" font-size="16" fill="currentColor">K</text><text x="220" y="112" text-anchor="middle" font-size="16" fill="currentColor">L</text><text x="380" y="112" text-anchor="middle" font-size="16" fill="currentColor">M</text><text x="50" y="68" text-anchor="middle" font-size="16" fill="var(--vurgu)">20 N</text><text x="220" y="68" text-anchor="middle" font-size="16" fill="var(--vurgu)">40 N</text><text x="380" y="68" text-anchor="middle" font-size="16" fill="var(--vurgu)">40 N</text></svg>`,
  secenekler: [
    "K'nin basıncı M'ninkinden büyüktür",
    "L'nin basıncı M'ninkinden büyüktür",
    "M'nin basıncı K'ninkinden büyüktür",
    "K'nin basıncı L'ninkinden büyüktür"
  ],
  dogru: 2,
  hatalar: [
    "Ağırlık-basınç ilişkisini ters kurma: alanları eşit olan K ve M'den ağır olan M'nin basıncı daha büyüktür.",
    "Alan-basınç ilişkisini ters kurma: ağırlıkları eşit olan L ve M'den alanı geniş olan L'nin basıncı daha küçüktür.",
    null,
    "Zıt etkileri tartma hatası: K, L'den hem hafif hem dar tabanlıdır; iki etki zıt yönde olduğundan K ile L'nin basıncı kesin karşılaştırılamaz."
  ],
  aciklama: `Eşit olan değişkeni bulup ona göre karşılaştır.
Adım 1: Görselden oku: K ve M'nin tabanları aynı genişliktedir, yani alanları eşittir. M daha ağır (40 N > 20 N) olduğu için M'nin basıncı K'ninkinden büyüktür.
Adım 2: L ve M'nin ağırlıkları eşittir (40 N). L'nin tabanı daha geniştir; bu yüzden basıncı M'ninkinden küçüktür.
Adım 3: K ile L'de hem ağırlık hem alan farklıdır ve etkiler zıt yöndedir; bu çiftin sıralaması kesin söylenemez.
Sık yapılan hata: K ve L gibi iki değişkeni birden farklı olan çiftlerde karşılaştırma yapmaya çalışmak.
Cevap C.`
},
{
  id: "fen-kb-060",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir aşçı, pizzayı dilimlemek için kenarı çok ince, tekerlek biçimli bir kesici kullanmaktadır. Aşçı kesiciyi pizza hamuruna belli bir kuvvetle bastırarak yuvarlar ve hamur kolayca kesilir.\nBuna göre,\nI. Kesicinin kenarı inceldikçe hamura uygulanan kuvvet artar.\nII. Kesicinin kenarı kalınlaştırılırsa aynı kuvvet için basınç artar.\nIII. Kesicinin hamura değen alanı küçük olduğundan aynı kuvvetle büyük basınç oluşur.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "II ve III", "I ve III"],
  dogru: 1,
  hatalar: [
    "Basıncı kuvvetle karıştırma: kesici inceldikçe uygulanan kuvvet değişmez; değişen temas alanıdır. I. yargı yanlış, III. yargı doğrudur.",
    null,
    "Alan-basınç ilişkisini ters kurma: kenar kalınlaşırsa temas alanı büyür ve basınç azalır; II. yargı yanlıştır.",
    "Basıncı kuvvetle karıştırma: I. yargı yanlıştır. Kuvveti aşçı belirler, kesicinin inceliği belirlemez."
  ],
  aciklama: `Kesmek için gereken şey büyük kuvvet değil büyük basınçtır.
Adım 1: Aşçı kuvveti aynı tutuyor; kesicinin incelmesi kuvveti değiştirmez. I. yargı yanlıştır.
Adım 2: Kenar kalınlaşırsa alan büyür, aynı kuvvet için basınç azalır, artmaz. II. yargı yanlıştır.
Adım 3: Kenar ince olduğu için hamura değen alan küçüktür; aynı kuvvet küçük alana toplanır ve basınç büyür. III. yargı doğrudur.
Sık yapılan hata: Keskin aletlerin daha fazla kuvvet uyguladığını sanmak.
Cevap B.`
},
{
  id: "fen-kb-061",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: "Özdeş tuğlalarla kurulan K, L ve M düzenekleri aynı yatay zemine görseldeki gibi yerleştirilmiştir. K'de tuğla yatık, L'de dik, M'de iki tuğla dik olarak üst üste durmaktadır.\n**Düzeneklerin zemine uyguladığı basınçlar arasındaki ilişki aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 460 170" role="img" aria-label="K yatık bir tuğla, L dik bir tuğla, M üst üste iki dik tuğla"><line x1="10" y1="140" x2="450" y2="140" stroke="currentColor" stroke-width="2"/><rect x="30" y="116" width="60" height="24" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="190" y="80" width="24" height="60" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="340" y="80" width="24" height="60" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="340" y="20" width="24" height="60" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="60" y="162" text-anchor="middle" font-size="16" fill="currentColor">K</text><text x="202" y="162" text-anchor="middle" font-size="16" fill="currentColor">L</text><text x="352" y="162" text-anchor="middle" font-size="16" fill="currentColor">M</text></svg>`,
  secenekler: [
    "P_{M} > P_{L} > P_{K}",
    "P_{L} > P_{M} > P_{K}",
    "P_{K} > P_{L} > P_{M}",
    "P_{M} > P_{K} > P_{L}"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Üst üste koymanın etkisini küçümseme: M'de alan L ile aynıdır, ağırlık iki katına çıkmıştır; M'nin basıncı L'ninkinden büyüktür.",
    "Alan-basınç ilişkisini ters kurma: yatık tuğlanın alanı geniştir, basıncı en küçüktür; sıralama ters yazılmış.",
    "Alan-basınç ilişkisini ters kurma: L'nin alanı K'ninkinden küçüktür; aynı ağırlıkta L'nin basıncı K'ninkinden büyüktür."
  ],
  aciklama: `Önce aynı ağırlıklı K ve L'yi, sonra aynı alanlı L ve M'yi karşılaştır.
Adım 1: K ve L'de tuğla aynıdır; ağırlıkları eşittir. L dik durduğu için alanı küçüktür; P_{L} > P_{K}.
Adım 2: L ve M'de tuğlaların tabanı aynıdır, alanları eşittir. M'de ağırlık iki tuğla kadardır; P_{M} > P_{L}.
Adım 3: İki sonucu birleştir: P_{M} > P_{L} > P_{K}.
Sağlama: En büyük basınç, hem en dar tabanlı hem en ağır olan düzenekte (M) olmalıdır.
Cevap A.`
},
{
  id: "fen-kb-062",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bataklık bölgelerinde görev yapan kurtarma helikopterlerinin iniş takımı, tekerlek yerine uzun ve yassı kızaklardan oluşur. Helikopterin ağırlığı iki iniş takımı için de aynıdır.\n**Kızakların yumuşak zeminde tekerleğe göre sağladığı yarar aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Helikopterin ağırlığını azaltarak batmayı azaltır",
    "Kuvveti kızaklar arasında bölüştürerek toplam kuvveti azaltır",
    "Zemine değen alanı küçültüp basıncı azaltır",
    "Zemine değen alanı büyütüp basıncı azaltır"
  ],
  dogru: 3,
  hatalar: [
    "Basıncı ağırlıkla karıştırma: iniş takımı helikopterin ağırlığını değiştirmez.",
    "Bölüştürmeyi kuvvetin azalması sanma: zemine binen toplam kuvvet helikopterin ağırlığı kadardır ve kızaklar bunu değiştirmez; kızaklar yalnızca kuvvetin yayıldığı alanı büyütür.",
    "Alan-basınç ilişkisini ters kurma: alan küçülürse basınç azalmaz, artar. Kızaklar alanı büyütür.",
    null
  ],
  aciklama: `Bataklıkta batmamak için basıncı azaltmak gerekir.
Adım 1: Helikopterin ağırlığı değişmediği için zemine uygulanan kuvvet iki iniş takımında da aynıdır.
Adım 2: Uzun ve yassı kızaklar, tekerleklerin küçük temas yüzeyine göre zemine çok daha büyük alanla değer.
Adım 3: Aynı kuvvet daha büyük alana yayılınca basınç azalır ve helikopter batmaz.
Sağlama: Palet ve geniş lastik de aynı ilkeye dayanır.
Cevap D.`
},
{
  id: "fen-kb-063",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 3,
  soru: "Güneş, bahçedeki nemli toprakta ince topuklu ayakkabıyla ayakta dururken derin izler bıraktığını, düz tabanlı ayakkabıyla dururken izlerin sığ kaldığını fark etmiştir. Güneş'in ağırlığı iki durumda da aynıdır. Dört arkadaşı bu gözlemi yorumlamıştır.\n**Hangi arkadaşının yorumu hem sonuç hem gerekçe bakımından doğrudur?**",
  gorsel: null,
  secenekler: [
    "Ali: Düz tabanda zemine uygulanan kuvvet azalır; çünkü ağırlık geniş yüzeye yayılır",
    "Beren: Düz tabanda zemine uygulanan basınç azalır; çünkü temas alanı büyür",
    "Cem: Düz tabanda zemine uygulanan basınç azalır; çünkü ayakkabı daha hafiftir",
    "Deniz: Düz tabanda zemine uygulanan basınç azalır; çünkü temas alanı küçülür"
  ],
  dogru: 1,
  hatalar: [
    "Yayılmayı kuvvetin azalması sanma: Güneş'in ağırlığı aynı olduğu için zemine uygulanan kuvvet değişmez; azalan basınçtır.",
    null,
    "Gerekçe yanlış: ayakkabının hafif olması basıncı belirlemez; Güneş'in ağırlığı aynı kalır ve basıncı değiştiren taban alanıdır.",
    "Gerekçe yanlış: düz tabanda temas alanı küçülmez, büyür; alan küçülürse basınç artardı."
  ],
  aciklama: `Hem sonuç hem gerekçe doğru olan yorum aranıyor; iki yarının da ayrı ayrı denetlenmesi gerekir.
Adım 1: Güneş'in ağırlığı değişmediğinden zemine uygulanan kuvvet iki ayakkabıda da aynıdır. Ali'nin "kuvvet azalır" sonucu yanlıştır.
Adım 2: Düz taban temas alanını büyütür. Aynı kuvvet geniş alana yayıldığı için basınç azalır ve iz sığ kalır. Beren'in hem sonucu hem gerekçesi doğrudur.
Adım 3: Cem'in sonucu doğru ama gerekçesi (hafiflik) yanlıştır; Deniz'in sonucu doğru ama gerekçesi (alanın küçülmesi) yanlıştır.
Sık yapılan hata: Sonucu doğru bulup gerekçeyi denetlememek.
Cevap B.`
},
{
  id: "fen-kb-064",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Bir fen öğretmeni, sınıfta K, L ve M cisimlerini aynı kum havuzuna sırayla bırakmış ve oluşan izlerin derinliklerinin K > L > M olduğunu göstermiştir. Cisimlerin ağırlıkları ve temas alanları öğrencilere verilmemiştir. Öğretmen yalnızca iki ipucu vermiştir: K ile L'nin ağırlıkları eşittir; L ile M'nin kuma değen yüzeylerinin alanları eşittir.\n**Bu bilgilere göre K cismi için aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: null,
  secenekler: [
    "Alanı M'ninkinden büyük, ağırlığı M'ninkinden büyüktür",
    "Alanı M'ninkinden büyük, ağırlığı L'ninkinden küçüktür",
    "Alanı L'ninkinden büyük, ağırlığı M'ninkinden küçüktür",
    "Alanı M'ninkinden küçük, ağırlığı M'ninkinden büyüktür"
  ],
  dogru: 3,
  hatalar: [
    "Alan-basınç ilişkisini ters kurma: K, L'den daha derin iz bıraktığı ve ağırlıkları eşit olduğu için K'nın alanı L'ninkinden küçüktür; L ile M'nin alanları eşit olduğundan K'nın alanı M'ninkinden de küçüktür.",
    "Verilen bilgiyi yok sayma: K ile L'nin ağırlıkları eşittir; K'nın ağırlığı L'ninkinden küçük olamaz.",
    "Alan-basınç ilişkisini ters kurma: K'nın alanı L'ninkinden büyük olamaz, çünkü ağırlıkları eşitken daha derin iz bırakan K'nın alanı küçüktür.",
    null
  ],
  aciklama: `Eşit olan değişkeni kullanarak iki adımda sonuca git.
Adım 1: K ve L'nin ağırlıkları eşit, K daha derin iz bırakıyor. Basıncı büyük olan K'nın alanı daha küçüktür: A_{K} < A_{L}.
Adım 2: L ve M'nin alanları eşit, L daha derin iz bırakıyor. Basıncı büyük olan L daha ağırdır: W_{L} > W_{M}.
Adım 3: A_{L} = A_{M} olduğundan A_{K} < A_{M}. W_{K} = W_{L} olduğundan W_{K} > W_{M}.
Sağlama: K, M'den hem daha dar hem daha ağırdır; iz derinliği bunu doğrular.
Cevap D.`
},
{
  id: "fen-kb-065",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 4,
  soru: "Bir pazarcı, aynı sayıda tekerleği olan el arabasını yumuşak topraklı bir zeminde dört farklı durumda kullanmıştır. Durumlar tabloda verilmiştir. Geniş tekerlekler, ince tekerleklerden daha geniş bir alanla toprağa değer. Arabanın kendi ağırlığı bütün durumlarda aynıdır.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Durum</th><th>Arabanın yükü</th><th>Tekerlekler</th></tr><tr><td>1</td><td>Boş</td><td>İnce</td></tr><tr><td>2</td><td>Dolu</td><td>İnce</td></tr><tr><td>3</td><td>Boş</td><td>Geniş</td></tr><tr><td>4</td><td>Dolu</td><td>Geniş</td></tr></table>`,
  secenekler: ["En büyük basınç 2. durumda, en küçüğü 3. durumdadır","1. durumdaki basınç, 4. durumdakinden küçüktür","4. durumdaki basınç, 1. durumdakinden küçüktür","2. durumdaki basınç, 4. durumdaki basınca eşittir"],
  dogru: 0,
  hatalar: [
    null,
    "Kesin sonuç çıkarma hatası: 4. durumda yük de alan da artmıştır; etkiler zıt yönde olduğundan 1. ile 4. kesin karşılaştırılamaz.",
    "Kesin sonuç çıkarma hatası: 1. ile 4. durumda hem yük hem tekerlek farklıdır; hangisinin büyük olduğu bu bilgilerle bilinemez.",
    "Eşitlik varsayma: 2. ve 4. durumlarda yük eşit, alanlar farklıdır; ince tekerlekli 2. durumda basınç daha büyüktür."
  ],
  aciklama: `Her karşılaştırmada ağırlık ya da alandan yalnızca biri farklı olmalı.
Adım 1: 2. durum, hem en ağır hem en dar alanlıdır. 1'e göre ağırlık fazla (alan eşit), 4'e göre alan dar (ağırlık eşit); 3'e göre de her iki etki aynı yöndedir. Basınç en büyüktür.
Adım 2: 3. durum hem en hafif hem en geniş alanlıdır. 1'e göre alan geniş (ağırlık eşit), 4'e göre ağırlık az (alan eşit); basınç en küçüktür.
Adım 3: 1. ile 4. durumda etkiler zıt yönde olduğundan sıralama kesin değildir.
Sık yapılan hata: 1. ve 4. arasında kesin hüküm vermek.
Cevap A.`
},
{
  id: "fen-kb-066",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Fen kulübündeki öğrenciler, aynı kum zeminde K, L, M ve N cisimlerini ayrı ayrı denemişlerdir. Bıraktıkları izlerin derinlikleri K > L = M > N şeklinde bulunmuştur. Ayrıca K ile L'nin zemine değen yüzeylerinin alanlarının eşit olduğu, L ile M'nin ağırlıklarının eşit olduğu bilinmektedir. N hakkında başka bir bilgi yoktur.\nBuna göre,\nI. K'nin ağırlığı L'ninkinden büyüktür.\nII. M'nin temas alanı N'ninkinden küçüktür.\nIII. N'nin ağırlığı M'ninkinden küçüktür.\n**yargılarından hangileri kesinlikle doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız III", "II ve III", "Yalnız I", "I ve II"],
  dogru: 2,
  hatalar: [
    "Kesin sonuç çıkarma hatası: N'nin basıncı küçük olabilir ama bunun nedeni küçük ağırlık mı geniş alan mı bilinmez; III. yargı kesin değildir.",
    "Kesin sonuç çıkarma hatası: N hakkında ağırlık ya da alan bilgisi yoktur; II. ve III. yargıların ikisi de kesin değildir.",
    null,
    "Yarım doğru: I. yargı kesin doğru, ama M ile N'nin alanları hakkında bilgi olmadığından II. yargı kesin değildir."
  ],
  aciklama: `Kesin yargı için karşılaştırılan iki cisimde ağırlık ya da alandan biri eşit olmalıdır.
Adım 1: K ve L'nin alanları eşit, K daha derin iz bırakıyor. Alan eşitken basıncı büyük olan daha ağırdır; K, L'den ağırdır. I. yargı kesinlikle doğrudur.
Adım 2: L ve M'nin izleri eşit, ağırlıkları eşit. Basınç ve ağırlık eşitse alanları da eşittir.
Adım 3: N'nin basıncı M'ninkinden küçüktür, ama N'nin ağırlığı ya da alanı hakkında bilgi yoktur. N daha hafif olabilir, daha geniş de olabilir. II. ve III. kesin değildir.
Sık yapılan hata: Sığ iz bırakan cismin kesinlikle daha hafif olduğunu sanmak.
Cevap C.`
},
{
  id: "fen-kb-067",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 4,
  soru: "Okul sekreteri, kâğıt delgecinin kolunu bastırarak kalın bir kâğıt destesini deliyor. Delgecin delici uçlarının kenarı çok incedir; zamanla bu uçlar körelip kalınlaşmaktadır.\nBuna göre,\nI. Deliciler ince kenarlı olduğu için kâğıtla temas alanı küçüktür.\nII. Aynı kolu daha büyük bir kuvvetle bastırmak, delici uçlardaki basıncı artırır.\nIII. Uçlar körelip kalınlaşırsa aynı kuvvet için basınç azalır.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["I ve II", "I, II ve III", "II ve III", "Yalnız I"],
  dogru: 1,
  hatalar: [
    "Yarım bırakma: körelen uçlarda temas alanı büyür ve aynı kuvvetle basınç azalır; III. yargı da doğrudur.",
    null,
    "Yarım bırakma: ince kenarın temas alanını küçülttüğünü söyleyen I. yargı da doğrudur.",
    "Yarım bırakma: kuvvet artınca basıncın arttığını söyleyen II. ve körelmeyi anlatan III. yargı da doğrudur."
  ],
  aciklama: `Basınç, kuvvetin temas alanına bölünmesiyle oluşan etkidir; kuvvet artarsa artar, alan büyürse azalır.
Adım 1: İnce kenar, kâğıda değen alanı küçültür. I. yargı doğrudur.
Adım 2: Alan aynıyken kuvvet artarsa basınç artar. II. yargı doğrudur.
Adım 3: Uç körelip kalınlaşırsa temas alanı büyür; aynı kuvvet için basınç azalır ve delmek zorlaşır. III. yargı doğrudur.
Sağlama: Bu yüzden körelmiş aletle işi görmek için daha büyük kuvvet gerekir.
Cevap B.`
},
{
  id: "fen-kb-068",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Bir mobilya atölyesi, yumuşak halı zeminde kullanılacak dört farklı tabure düzeneği denemiştir. Düzeneklerin ayak sayısı, ayak ucu biçimi ve üzerine oturan kişi sayısı tabloda verilmiştir. Aynı biçimli ayaklar özdeştir; yassı ayak ucu, sivri ayak ucundan daha geniş bir alanla halıya değer. Bütün kişiler özdeştir ve taburelerin kendi ağırlığı ihmal edilecektir.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Tabure</th><th>Ayak sayısı</th><th>Ayak ucu</th><th>Oturan kişi sayısı</th></tr><tr><td>K</td><td>3</td><td>Sivri</td><td>1</td></tr><tr><td>L</td><td>4</td><td>Yassı</td><td>1</td></tr><tr><td>M</td><td>4</td><td>Sivri</td><td>1</td></tr><tr><td>N</td><td>3</td><td>Yassı</td><td>2</td></tr></table>`,
  secenekler: ["K'nin basıncı hem L'ninkinden hem M'ninkinden küçüktür","N'nin basıncı hem K'ninkinden hem L'ninkinden büyüktür","L'nin basıncı hem K'ninkinden hem M'ninkinden küçüktür","M'nin basıncı hem L'ninkinden hem N'ninkinden büyüktür"],
  dogru: 2,
  hatalar: ["Ters karşılaştırma: K'de de L ile M'deki gibi bir kişi oturur, ama K'nin ayakları daha az ve sivridir; alanı en küçük olduğundan basıncı ikisinden de büyüktür.","Yarım doğruyu kesin sanma: N'nin basıncı L'ninkinden büyüktür (daha ağırdır, ayağı daha azdır); ama N ile K'de etkiler zıt yönde olduğundan bu karşılaştırma kesin değildir.",null,"Yarım doğruyu kesin sanma: M'nin basıncı L'ninkinden büyüktür (ağırlık ve ayak sayısı eşit, ayakları sivri); ama N daha ağırdır ve alanlar karşılaştırılamaz, M ile N kesin karşılaştırılamaz."],
  aciklama: "Kesin sonuç için iki tabureyi karşılaştırırken ağırlık ve alan etkilerinin aynı yönde olması ya da birinin eşit olması gerekir.\nAdım 1: K ve L'de oturan kişi sayısı eşittir (ağırlık eşit). L'nin ayakları hem daha fazla hem yassıdır; alanı daha büyüktür. Bu yüzden L'nin basıncı K'ninkinden küçüktür.\nAdım 2: L ve M'de hem ayak sayısı hem oturan kişi sayısı eşittir; M'nin ayakları sivri, L'ninkiler yassıdır. L'nin alanı daha büyük olduğu için basıncı M'ninkinden küçüktür. C doğrudur.\nAdım 3: A'da K'nin basıncı L ve M'den küçük deniyor; oysa K'nin alanı en küçüktür, basıncı ikisinden de büyüktür. B ve D'nin ilk karşılaştırması doğrudur, ama ikinci karşılaştırma (N-K, M-N) zıt yönlü etkiler yüzünden kesin değildir.\nSık yapılan hata: Zıt yönlü etkileri tartmadan \"ağır olanın basıncı büyüktür\" demek.\nCevap C."
},
{
  id: "fen-kb-069",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Bir öğrenci, aynı bloğun üç farklı yüzeyini (K, L ve M) aynı yumuşak kum zeminine koymuştur. Bloğun üstüne eklenen ağırlıkla iz derinliğinin nasıl değiştiğini ölçmüş ve sonuçları grafikte göstermiştir. Yüzeylerin alanları dışındaki bütün koşullar aynıdır; bloğun kendi ağırlığı önemsenmeyecektir.\n**Bu grafiğe göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<svg viewBox="0 0 360 240" role="img" aria-label="Üç doğrunun iz derinliği-ağırlık grafiği; K en dik, M en yatık"><line x1="50" y1="200" x2="340" y2="200" stroke="currentColor" stroke-width="2"/><line x1="50" y1="200" x2="50" y2="26" stroke="currentColor" stroke-width="2"/><line x1="50" y1="200" x2="310" y2="40" stroke="var(--vurgu)" stroke-width="3"/><line x1="50" y1="200" x2="310" y2="105" stroke="var(--vurgu2)" stroke-width="3"/><line x1="50" y1="200" x2="310" y2="165" stroke="currentColor" stroke-width="3"/><text x="320" y="46" font-size="16" fill="currentColor">K</text><text x="320" y="111" font-size="16" fill="currentColor">L</text><text x="320" y="171" font-size="16" fill="currentColor">M</text><text x="195" y="228" text-anchor="middle" font-size="14" fill="currentColor">Eklenen ağırlık</text><text x="56" y="18" font-size="14" fill="currentColor">İz derinliği</text></svg>`,
  secenekler: [
    "K yüzeyinin alanı en küçük, M yüzeyinin alanı en büyüktür",
    "K yüzeyinin alanı en büyük, M yüzeyinin alanı en küçüktür",
    "Üç yüzeyin alanı da eşittir; çünkü doğruların hepsi başlangıç noktasından geçer",
    "Ağırlık arttıkça yüzeylerin alanı küçülür; çünkü iz derinleşir"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Alan-basınç ilişkisini ters kurma: aynı ağırlıkta en derin izi bırakan K'dir; basıncı en büyük olan yüzey en küçük alanlı yüzeydir.",
    "Grafiği yanlış yorumlama: doğruların hepsi orijinden geçse de eğimleri farklıdır; aynı ağırlıkta farklı iz derinliği farklı alan demektir.",
    "Bağımlı değişkeni alan sanma: eklenen ağırlık bloğun yüzeylerinin alanını değiştirmez; yalnızca iz derinliğini artırır."
  ],
  aciklama: `Aynı ağırlıkta daha derin iz bırakan yüzey, daha büyük basınç uygular.
Adım 1: Grafikte aynı ağırlık değerinden yukarı çık: K'nin çizgisi en yüksek, M'ninki en alçaktır. Demek ki K en derin, M en sığ iz bırakır.
Adım 2: Ağırlık her yüzeyde aynıdır; basıncı alan belirler. En büyük basınç en küçük alanda oluşur.
Adım 3: Buna göre K'nin alanı en küçük, M'nin alanı en büyüktür.
Sık yapılan hata: Dik çizgiyi "alanı büyük" diye yorumlamak. Dik çizgi, iz derinliğinin hızlı arttığını, yani alanın küçük olduğunu gösterir.
Cevap A.`
},
{
  id: "fen-kb-070",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 4,
  soru: "Yürüyüş bastonlarının ucunda buza ve kayaya tutunan sivri bir metal uç, hemen üstünde ise karda batmayı önleyen yassı bir tabla bulunur. Bir dağcı karlı bir yamaçta bastonunu karın içine bastırmaktadır.\nBuna göre,\nI. Sivri uç, buza değen alanı küçülterek basıncı artırır.\nII. Tabla, bastonun kara değen alanını artırır.\nIII. Tabla, karı bastıran kuvveti azaltarak batmayı engeller.\n**yargılarından hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I ve II"],
  dogru: 3,
  hatalar: [
    "Yarım bırakma: I. yargı doğru, ama tablanın kara değen alanı artırdığını söyleyen II. yargı da doğrudur.",
    "Basıncı kuvvetle karıştırma: tabla kuvveti azaltmaz, kuvveti geniş alana yayar; III. yargı yanlıştır.",
    "Basıncı kuvvetle karıştırma: III. yargı yanlıştır. Sivri uca ilişkin I. yargı ise doğrudur ve atlanmamalıdır.",
    null
  ],
  aciklama: `Sivri uç basıncı artırır, yassı tabla basıncı azaltır; ikisi de kuvveti değil alanı değiştirir.
Adım 1: Sivri uç buza çok küçük alanla değer; aynı kuvvet için basınç büyür ve uç buza saplanır. I. yargı doğrudur.
Adım 2: Yassı tabla bastonun kara değen alanını artırır. II. yargı doğrudur.
Adım 3: Alan arttığı için kara birim alana düşen kuvvet, yani basınç azalır ve baston batmaz. Ancak dağcının bastırdığı kuvvet azalmaz, yalnızca yayılır. III. yargı yanlıştır.
Sağlama: Aynı baston iki ayrı iş için iki ayrı alan kullanır.
Cevap D.`
},
{
  id: "fen-kb-071",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Özdeş kutularla kurulan beş düzeneğin özellikleri tabloda verilmiştir. Bir öğrenci K düzeneğini referans alıp ağırlığın ve temas alanının basınca etkisini ayrı ayrı incelemek istemektedir. Kutuların içine taş konarak ağırlıkları artırılabilmektedir.\n**Öğrenci K ile birlikte hangi iki düzeneği kullanırsa ağırlığın ve temas alanının etkisini ayrı ayrı inceleyebilir?**",
  gorsel: `<table class="tablo"><tr><th>Düzenek</th><th>Kutudaki yük</th><th>Zemine değen yüzey</th><th>Zemin</th></tr><tr><td>K</td><td>Boş</td><td>Geniş</td><td>Kum</td></tr><tr><td>L</td><td>Taş dolu</td><td>Geniş</td><td>Kum</td></tr><tr><td>M</td><td>Boş</td><td>Dar</td><td>Kum</td></tr><tr><td>N</td><td>Taş dolu</td><td>Dar</td><td>Kum</td></tr><tr><td>P</td><td>Boş</td><td>Geniş</td><td>Un</td></tr></table>`,
  secenekler: ["L ve N", "L ve M", "M ve P", "N ve P"],
  dogru: 1,
  hatalar: [
    "İki değişkeni birden değiştirme: N, K'den hem yük hem yüzey bakımından farklıdır; ağırlık ya da alanın tek başına etkisini göstermez.",
    null,
    "Yanlış değişkeni sınama: P, K'den yalnızca zemin bakımından farklıdır; M ile birlikte alanın etkisi görülür, ağırlığınki görülmez.",
    "İki değişkeni birden değiştirme: N hem yük hem yüzey, P ise zemin bakımından farklıdır; hiçbiri ağırlığın tek başına etkisini göstermez."
  ],
  aciklama: `Her etki için K'den yalnızca bir özelliği farklı olan düzenek seçilir.
Adım 1: Ağırlığın etkisi için K'den yalnızca yükü farklı olan düzenek gerekir: L (taş dolu, aynı yüzey ve zemin).
Adım 2: Temas alanının etkisi için K'den yalnızca yüzeyi farklı olan düzenek gerekir: M (dar yüzey, aynı yük ve zemin).
Adım 3: N hem yük hem yüzey, P ise yalnızca zemin bakımından farklıdır. Bunlar istenen etkileri ayırmaz.
Sağlama: K–L çifti ağırlığı, K–M çifti alanı gösterir.
Cevap B.`
},
{
  id: "fen-kb-072",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Aynı kum zemine konulan X ve Y katı cisimlerinden X'in bıraktığı iz Y'ninkinden daha derindir. X ile Y'nin hem ağırlıkları hem de zemine değen yüzeylerinin alanları birbirinden farklıdır. Bir öğrenci bu iki cismin özellikleri hakkında farklı durumlar düşünmektedir.\n**Buna göre aşağıdaki durumlardan hangisi __olamaz__?**",
  gorsel: null,
  secenekler: [
    "X'in ağırlığı daha küçük ve temas alanı daha büyük",
    "X'in ağırlığı daha büyük ve temas alanı daha büyük",
    "X'in ağırlığı daha büyük ve temas alanı daha küçük",
    "X'in ağırlığı daha küçük ve temas alanı daha küçük"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yanlış eleme: X daha ağır ve daha geniş tabanlı olabilir; ağırlığın etkisi alanın etkisinden fazlaysa X daha büyük basınç uygular.",
    "Yanlış eleme: X daha ağır ve daha dar tabanlıysa basıncı kesinlikle daha büyüktür; bu durum olabilir.",
    "Yanlış eleme: X daha hafif ama çok daha dar tabanlı olabilir; bu durumda basıncı daha büyük olur."
  ],
  aciklama: `Derin iz, X'in basıncının Y'ninkinden büyük olduğunu söyler. Hangi durumların bununla çeliştiğine bak.
Adım 1: X daha hafif ve daha geniş tabanlıysa, ağırlığı azaldığı için basıncı azalır; alanı arttığı için de basıncı azalır. İki etki de basıncı küçültür. Bu durumda X'in basıncı Y'ninkinden küçük olur ve çelişki doğar.
Adım 2: Diğer üç durumda etkiler ya aynı yönde büyütür (daha ağır ve daha dar) ya da zıt yöndedir. Zıt yönlerde sonuç bilinemediğinden bu durumlar olabilir.
Sık yapılan hata: Zıt etkili durumları da "olamaz" saymak.
Cevap A.`
},
{
  id: "fen-kb-073",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 4,
  soru: "Bir sahil kasabasında, yumuşak deniz dibine ahşap iskele yapılacaktır. Mühendis iskeleyi taşıyacak kazıkların alt ucunu sivri kestirmiş, üst ucuna ise geniş ve düz bir başlık taktırmıştır. Kazıklar, başlığa ağır bir çekiçle vurularak zemine çakılacaktır. Çekicin başlığa uyguladığı kuvvet kazık boyunca aynen iletilmektedir.\n**Mühendisin tasarımıyla ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Sivri alt uç kazığın ağırlığını azaltır, geniş başlık çekiç kuvvetini artırır",
    "Başlıktaki basınç alt uçtakinden büyüktür; çünkü çekiç doğrudan başlığa vurur",
    "Çekiç kuvveti kazıktan geçerken büyür; bu yüzden alt uçta basınç artar",
    "Kuvvet alt uçta başlıktakiyle aynıdır; alan küçük olduğundan alt uçtaki basınç büyüktür"
  ],
  dogru: 3,
  hatalar: [
    "Basıncı kuvvet ve ağırlıkla karıştırma: sivri uç ağırlığı azaltmaz, geniş başlık kuvveti artırmaz; değişen yalnızca alandır.",
    "Alan-basınç ilişkisini ters kurma: başlık geniş olduğu için orada basınç küçüktür; alt ucun alanı küçük olduğundan basınç alt uçtadır.",
    "Kuvvetin büyüdüğünü sanma: soruda kuvvetin aynen iletildiği söyleniyor; kuvvet kazık boyunca değişmez.",
    null
  ],
  aciklama: `Kuvvet aynen iletilirse iki uçtaki basıncı karşılaştırmak için yalnızca alanlara bakılır.
Adım 1: Kuvvet başlıktan alt uca değişmeden gelir; iki uçta kuvvet aynıdır.
Adım 2: Başlığın alanı geniştir; basınç küçüktür ve başlık ezilmez. Alt ucun alanı çok küçüktür; basınç büyüktür.
Adım 3: Büyük basınç yumuşak dibi iter ve kazık girer.
Sağlama: Sivri uç batmayı, geniş baş korunmayı sağlar; ikisinde de kuvvet aynıdır.
Cevap D.`
},
{
  id: "fen-kb-074",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Can, kum havuzunda özdeş K ve L bloklarıyla üç gözlem yapmış ve notlarını tutmuştur.\nGözlem 1: K geniş, L dar yüzeyi üzerinde dururken L'nin izi daha derindir.\nGözlem 2: L'nin üstüne özdeş bir blok daha konunca L'nin izi derinleşmiştir.\nGözlem 3: Dar yüzeyi üzerinde duran tek L bloğu ile geniş yüzeyi üzerinde duran, üstüne iki özdeş blok eklenmiş K bloğunun izleri eşit derinliktedir.\n**Bu gözlemlere göre Gözlem 3 için aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: null,
  secenekler: ["K'nin basıncı L'nin basıncından büyüktür","K'nin temas alanı L'ninkinden küçüktür","Basınçlar eşittir; K'nin ağırlığı daha büyüktür","K'nin basıncı L'nin basıncından küçüktür"],
  dogru: 2,
  hatalar: [
    "Veriyi yok sayma: iki iz eşit derinlikte olduğundan basınçlar eşittir; K'nin basıncı daha büyük değildir.",
    "Gözlem 1'i unutma: K geniş yüzeyi üzerinde durduğu için temas alanı L'nin dar yüzeyinden büyüktür.",
    null,
    "Veriyi yok sayma: izler eşit derinlikte olduğundan K'nin basıncı daha küçük değildir."
  ],
  aciklama: `Aynı kum zeminde eşit iz derinliği, eşit basınç demektir.
Adım 1: Gözlem 3'te izler eşit olduğundan K ve L'nin basınçları eşittir. Bu yüzden basıncı karşılaştıran seçenekler yanlıştır.
Adım 2: Gözlem 1'e göre K'nin geniş yüzeyinin alanı L'nin dar yüzeyinden büyüktür; K'nin alanı büyüktür.
Adım 3: Alanı büyük olan K'nin basıncı L ile eşit olabilmesi için ağırlığının da L'ninkinden büyük olması gerekir (üstünde iki blok daha var).
Sağlama: Daha geniş alana yayılan K'nin aynı basıncı oluşturabilmesi için daha ağır olması gerekir.
Cevap C.`
},
{
  id: "fen-kb-075",
  kazanim: "F.8.3.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Ece, \"Katı basıncı, cismin temas ettiği yüzeyin alanına bağlıdır.\" hipotezini sınamak istemiştir. Özdeş iki kutuyu aynı kum havuzuna koymuş; birincisini geniş yüzeyi, ikincisini dar yüzeyi üzerine yerleştirmiştir. Dar yüzeyi üzerinde duran kutunun devrilmemesi için içine birkaç kalın kitap koymuştur. Kutuları kuma yavaşça yerleştirmeye ve her iki kutu için de aynı kumu kullanmaya dikkat etmiştir. Deneyi her koşulda beş kez tekrarlamış, dar yüzeyli kutunun izinin her seferinde daha derin çıktığını görmüş ve hipotezinin doğrulandığını söylemiştir.\n**Ece'nin bu deneyle hipotezini doğrulaması neden yeterli değildir?**",
  gorsel: null,
  secenekler: [
    "Zemin türü de değiştirilmediği için iz derinlikleri genellenemez",
    "Alanla birlikte ağırlık da değiştiği için iz farkı yalnızca alana bağlanamaz",
    "Basınç doğrudan ölçülmeyip iz derinliğine bakıldığı için sonuç geçersizdir",
    "Kutular iki durumda da aynı kumda denendiği için karşılaştırma yapılamaz"
  ],
  dogru: 1,
  hatalar: [
    "Gereksiz koşulu eksik sanma: hipotez alanla ilgilidir; zemin türünün sabit tutulması doğrudur, değiştirilmesi gerekmez.",
    null,
    "Bağımlı değişkeni hata sanma: iz derinliği, basıncın karşılaştırılmasında kullanılan geçerli bir ölçümdür; sorun ölçümde değil, ağırlığın da değişmesindedir.",
    "Doğru kontrolü hata sanma: aynı kumun kullanılması zemin türünü sabit tutar; bu deneyi yetersiz kılmaz, tam tersine gereklidir."
  ],
  aciklama: `Bir hipotezi sınarken yalnızca bağımsız değişken farklı olmalı, diğer her şey sabit kalmalıdır.
Adım 1: Ece'nin bağımsız değişkeni temas alanıdır. Aynı kum ve yavaş yerleştirme doğru kontrollerdir; beş tekrar da sonucu güvenilir kılar.
Adım 2: Ama dar yüzeyli kutunun içine kitap koyunca kutunun ağırlığı da artmıştır. Böylece iki kutuda hem alan hem ağırlık farklı olmuştur.
Adım 3: İz farkı alandan mı, ağırlıktan mı, yoksa ikisinden mi geldiği bilinemez. Hipotez doğrulanmış sayılamaz.
Sık yapılan hata: Fark edilmeyen ikinci değişkeni gözden kaçırmak. Hipoteze bağlı olmayan koşulları (aynı kum gibi) hata sanmak.
Cevap B.`
}
);
