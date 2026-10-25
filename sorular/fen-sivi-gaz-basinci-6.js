// Fen Bilimleri — Sıvı ve Gaz Basıncı: Havuz eki (fen-sg-016 … fen-sg-075, kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sivi-gaz-basinci"] = window.LGS_BANK["sivi-gaz-basinci"] || []).push(
/* ===================== DÜZEY 1 ===================== */
{
  id: "fen-sg-016",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "Bir araştırmacı, göl tabanını incelemek için su geçirmez bir kamerayı halatla yüzeyden tabana doğru indirmektedir. **Kamera indirilirken gövdesine etki eden su basıncı ve bunun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Azalır, çünkü kamera su yüzeyinden uzaklaşır", "Değişmez, çünkü göldeki su aynı sudur", "Artar, çünkü kameranın üstündeki su yüksekliği artar", "Artar, çünkü kamera gölün daha geniş yerine ulaşır"],
  dogru: 2,
  hatalar: ["Ters yön: Yüzeyden uzaklaşmak derinliğin artması demektir; derinlik artınca basınç artar.", "Derinliğin etkisini yok sayma: Sıvı aynı olsa da derinlik değişince basınç değişir.", null, "Genişliği etken sanma: Gölün genişliği sıvı basıncını değiştirmez; yalnızca derinlik ve sıvının cinsi belirleyicidir."],
  aciklama: `Adım 1: Sıvı basıncı, sıvının ağırlığından doğar. Bir noktanın üstünde ne kadar yüksek sıvı sütunu varsa basınç o kadar büyüktür.
Adım 2: Kamera aşağı indikçe derinliği, yani üstündeki su yüksekliği artar.
Adım 3: Sıvı aynı olduğu için basıncı değiştiren tek etken derinliktir; basınç artar.
Sık yapılan hata: Göl genişliğinin basıncı etkilediğini sanmak. Genişlik ve su miktarı basıncı değiştirmez.
Cevap C.`
},
{
  id: "fen-sg-017",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "Bir meteoroloji istasyonu, havayı ölçen bir cihazı büyük bir balonla yerden gökyüzüne bırakmıştır. **Balon yükselirken cihazın dışındaki açık hava basıncı ve bunun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Azalır, çünkü üstte kalan hava tabakası incelir", "Artar, çünkü Güneş'e daha çok yaklaşılır", "Artar, çünkü yükseklerde hava daha soğuktur", "Değişmez, çünkü hava her yerde aynı ağırlıktadır"],
  dogru: 0,
  hatalar: [null, "İlgisiz neden: Basıncı değiştiren Güneş'e yakınlık değil, üstte kalan hava miktarıdır; üstelik basınç artmaz, azalır.", "Yönü ve nedeni yanlış bilme: Yükseklerde basınç soğuktan dolayı değil, hava tabakası inceldiği için değişir; üstelik azalır.", "Havanın ağırlığını her yerde aynı sanma: Yükseldikçe üstteki hava azalır, basınç da azalır."],
  aciklama: `Adım 1: Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğar.
Adım 2: Balon yükseldikçe üstünde kalan hava tabakası incelir, hava seyrekleşir.
Adım 3: Üstte az hava kaldığı için açık hava basıncı azalır.
Sık yapılan hata: Yükseldikçe basıncın artacağını sanmak. Dağa çıkıldıkça açık hava basıncı küçülür.
Cevap A.`
},
{
  id: "fen-sg-018",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "Banyo duvarındaki fayansa bastırılan bir vantuz, üzerine havlu asılsa bile duvarda kalmaktadır. **Vantuzu duvarda tutan etken aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["İçerideki hava basıncının dışarıdakinden büyük olması","Vantuzun kendi ağırlığının duvara baskı yapması","İçerideki boşluğun duvarı kendine doğru çekmesi","Dışarıdaki hava basıncının içeridekinden büyük olması"],
  dogru: 3,
  hatalar: ["Büyüklüğü ters yorumlama: İçerideki hava vantuz bastırılırken azaltıldığı için içerideki basınç küçüktür.", "Ağırlıkla basıncı karıştırma: Vantuz ağırlığı yüzünden değil, basınç farkı yüzünden tutunur.", "Boşluk çeker yanılgısı: Boşluk bir şey çekmez; vantuzu duvara iten dışarıdaki havadır.", null],
  aciklama: `Adım 1: Vantuz duvara bastırılınca içindeki havanın büyük bölümü dışarı çıkar; içeride basınç küçülür.
Adım 2: Dışarıdaki açık hava basıncı artık içerideki basınçtan büyüktür.
Adım 3: Basıncı büyük olan taraf, vantuzu duvara doğru iter ve tutar.
Sık yapılan hata: "Boşluk çekiyor" demek. Çeken değil, basıncı büyük olan taraftaki havanın itmesi vardır.
Cevap D.`
},
{
  id: "fen-sg-019",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Bir atölyedeki hidrolik pres, dar pistona uygulanan küçük bir kuvvetle geniş pistonda büyük bir kuvvet oluşturur. **Bu sistem aşağıdaki ilkelerden hangisine dayanarak çalışır?**",
  gorsel: null,
  secenekler: ["Bileşik kaplarda sıvı yüzeylerinin aynı hizaya gelmesi", "Kapalı kaptaki sıvının basıncı bütün yönlere aynen iletmesi", "Açık hava basıncının yükseklikle azalması", "Sıvı basıncının derinlikle artması"],
  dogru: 1,
  hatalar: ["Bileşik kapla karıştırma: Bileşik kaplar ağzı açık kaplardır; hidrolik sistem kapalıdır ve piston ile basınç iletir.", null, "Açık hava basıncını karıştırma: Hidrolik sistemi çalıştıran dışarıdaki hava değil, kapalı sıvıya piston ile uygulanan basınçtır.", "Derinlik etkisini karıştırma: Preste işi yapan derinlik değil, pistonla uygulanan basınçtır."],
  aciklama: `Adım 1: Hidrolik presin içinde kapalı bir kapta yağ vardır. Dar pistona kuvvet uygulanınca yağa basınç uygulanmış olur.
Adım 2: Pascal prensibine göre kapalı kaptaki sıvı, bu basıncı her noktaya ve her yöne aynen iletir.
Adım 3: Geniş pistonun yüzeyi büyük olduğu için aynı basınç orada daha büyük bir kuvvet oluşturur.
Sık yapılan hata: Bu düzeneği bileşik kap sanmak. Bileşik kapların ağzı açıktır ve piston yoktur.
Cevap B.`
},
{
  id: "fen-sg-020",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "Bir su tankının aynı yüzünde yukarıda K, aşağıda L musluğu bulunmaktadır. Tank ağzına kadar suyla doludur ve iki musluk aynı anda açılmıştır. **Musluklardan çıkan suyun gücü için aşağıdakilerden hangisi söylenir?**",
  gorsel: null,
  secenekler: ["K'den daha güçlü akar, çünkü K su yüzeyine daha yakındır", "L'den daha güçlü akar, çünkü L su yüzeyinden daha derindedir", "İkisinden de aynı güçte akar, çünkü ikisi de aynı tanktadır", "K'den daha güçlü akar, çünkü K'ye giden su yolu daha kısadır"],
  dogru: 1,
  hatalar: ["Ters yön: Yüzeye yakın nokta, derin noktadan daha küçük basınç altındadır; su daha zayıf akar.", null, "Aynı tank, aynı basınç sanma: Aynı sıvıda derinlik değişince basınç da değişir.", "Yolu etken sanma: Akışın gücünü suyun aldığı yol değil, musluğun su yüzeyine göre derinliği belirler."],
  aciklama: `Adım 1: Sıvıdan akan suyun gücü, o noktadaki sıvı basıncıyla belirlenir.
Adım 2: Sıvı basıncı derinlikle artar. L musluğu su yüzeyinden K musluğuna göre daha derindir.
Adım 3: L'deki basınç daha büyüktür; su L'den daha güçlü akar.
Sık yapılan hata: Aynı tankta aynı güçte akacağını sanmak. Tank aynı olsa da derinlik farklıdır.
Cevap B.`
},
{
  id: "fen-sg-021",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Derin deniz dalışı yapan dalgıçlar, yüzeyde kullanılanlardan çok daha sağlam ve kalın özel giysiler giyer. **Bu giysilerin sağlam yapılmasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Suyun yoğunluğunun derinlikle azalması", "Dalgıcın ağırlığının su altında artması", "Deniz tabanındaki akıntıların derinde güçlenmesi", "Sıvı basıncının derinlik arttıkça artması"],
  dogru: 3,
  hatalar: ["Ters bilgi: Suyun yoğunluğu derinlikle azalmaz; basıncı artıran derinliğin kendisidir.", "Ağırlıkla basıncı karıştırma: Giysiyi sağlam yaptıran dalgıcın ağırlığı değil, ona her yönden etki eden su basıncıdır.", "İlgisiz neden: Akıntı basınçla ilgili değildir; giysinin kalınlığı basınç içindir.", null],
  aciklama: `Adım 1: Sıvı basıncı derinlikle artar. Derin denizde dalgıca her yönden çok büyük basınç etki eder.
Adım 2: Giysi bu basınca dayanamazsa zarar görür; bu yüzden derin dalışta sağlam ve kalın giysi kullanılır.
Adım 3: Yani giysinin sağlam olmasının nedeni derinlik arttıkça sıvı basıncının artmasıdır.
Sık yapılan hata: Nedeni dalgıcın ağırlığı ya da akıntı sanmak.
Cevap D.`
},
{
  id: "fen-sg-022",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "Hakan, su dolu bardağa daldırdığı pipetin üst ucunu parmağıyla kapatmış ve pipeti bardaktan yukarı çıkarmıştır. Pipetin içindeki su dökülmemiştir. **Suyun pipette kalmasını sağlayan etken aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Pipetin alt ucuna etki eden açık hava basıncı", "Pipetin içindeki suyun ağırlığının olmaması", "Suyun pipetin yan çeperlerine yapışması", "Parmağın pipetteki suyu yukarı çekmesi"],
  dogru: 0,
  hatalar: [null, "Gerçek dışı varsayım: Pipetteki suyun ağırlığı vardır; suyu tutan, aşağıdan etki eden hava basıncıdır.", "Yapışmayı neden sanma: Suyun tutunması çeper yapışmasıyla değil, alttan etki eden açık hava basıncıyla açıklanır.", "Çekme yanılgısı: Parmak su çekmez; üst uç kapalı olduğu için aşağıdan itme dengelenir."],
  aciklama: `Adım 1: Pipetin üst ucu kapatılınca içeriye hava giremez; alt uçtan ise dışarıdaki hava pipetteki suya aşağıdan yukarı basınç uygular.
Adım 2: Bu açık hava basıncı, pipetteki suyun ağırlığını dengeler.
Adım 3: Su aşağı düşmez.
Sık yapılan hata: Suyu parmağın ya da boşluğun çektiğini sanmak.
Cevap A.`
},
{
  id: "fen-sg-023",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Bir iş makinesinin kolunu hareket ettiren kapalı hidrolik sistemlerde hava yerine yağ kullanılır. **Hava yerine yağ kullanılmasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Yağın havadan daha hafif olması", "Yağın basıncı yalnızca itildiği yöne iletmesi", "Yağın hava kadar kolay sıkıştırılamaması", "Yağın açık hava basıncını artırması"],
  dogru: 2,
  hatalar: ["Hafiflik yanılgısı: Yağ havadan daha ağırdır ve seçilme nedeni hafiflik değildir.", "Pascal prensibini yanlış bilme: Sıvı basıncı yalnızca itilen yöne değil, her yöne aynen iletir.", null, "İlgisiz neden: Yağ dışarıdaki açık hava basıncını değiştirmez."],
  aciklama: `Adım 1: Hidrolik sistemde piston itilince basınç sıvıyla her noktaya iletilir.
Adım 2: Sıvılar neredeyse hiç sıkışmaz; gazlar ise kolayca sıkışır. Sistemde hava olsaydı itme önce havayı sıkıştırır, yük güç kaybıyla hareket ederdi.
Adım 3: Bu yüzden sıkıştırılamayan sıvı, yani yağ tercih edilir.
Sık yapılan hata: Basıncın yalnızca itilen yöne gittiğini sanmak.
Cevap C.`
},
{
  id: "fen-sg-024",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "Bir tarlada ağzı açık, derin bir su kuyusu vardır. Kuyudaki K noktası su yüzeyinden 2 m, L noktası 5 m aşağıdadır. **K ve L noktalarındaki sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["P_{K} > P_{L}, çünkü K su yüzeyine daha yakındır", "P_{K} = P_{L}, çünkü ikisi de aynı kuyudaki aynı sudadır", "P_{K} < P_{L}, çünkü L'nin derinliği daha fazladır", "P_{K} > P_{L}, çünkü K'ye açık hava basıncı daha çok etki eder"],
  dogru: 2,
  hatalar: ["Ters yön: Yüzeye yakın olan K noktasında basınç, daha derindeki L noktasından küçüktür.", "Derinliği önemsememe: Aynı sıvıda derinlikleri farklı noktaların basınçları da farklıdır.", null, "Açık hava basıncını karıştırma: Açık hava basıncı su yüzeyinde iki noktaya da aynı etki eder; fark yaratan derinliktir."],
  aciklama: `Adım 1: İki nokta da aynı kuyudaki aynı suyun içindedir; sıvının cinsi aynıdır.
Adım 2: Derinlik, su yüzeyinden noktaya kadar aşağı doğru ölçülür: K için 2 m, L için 5 m.
Adım 3: Aynı sıvıda derinlik arttıkça basınç artar; L'nin basıncı daha büyüktür, yani P_{K} < P_{L}.
Sık yapılan hata: Kuyunun derin olmasından basıncın her yerde aynı olacağını sanmak.
Cevap C.`
},
{
  id: "fen-sg-025",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "Hemşire, ağzı açık bir bardaktaki şurubu, enjektörün ucunu şuruba batırıp pistonu geri çekerek enjektöre çekmiştir. **Şurubun enjektöre dolmasını sağlayan etken aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Bardaktaki şurup yüzeyine etki eden açık hava basıncı", "Pistonun şurubu kendine doğru çekmesi", "Şurubun ağırlığının enjektöre doğru yönelmesi", "Enjektördeki boşluğun şurubu emmesi"],
  dogru: 0,
  hatalar: [null, "Çekme yanılgısı: Piston şurubu çekmez; içeride basınç küçülünce dışarıdaki basınç şurubu iter.", "Ağırlığı neden sanma: Şurup yukarıya, ağırlığının tersi yönde hareket eder; bunu ağırlık sağlamaz.", "Boşluk emer yanılgısı: Boşluk bir şeyi emmez; basıncı büyük olan taraftaki hava iter."],
  aciklama: `Adım 1: Piston geri çekilince enjektörün içindeki hava basıncı küçülür.
Adım 2: Bardaktaki şurubun yüzeyine ise dışarıdaki açık hava basıncı etki etmeye devam eder; bu basınç daha büyüktür.
Adım 3: Açık hava basıncı şurubu enjektörün içine iter.
Sık yapılan hata: Şurubu pistonun ya da boşluğun çektiğini sanmak.
Cevap A.`
},
{
  id: "fen-sg-026",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "Özdeş iki kaptan birine alkol, diğerine su konmuştur. İki kapta da sıvı yüksekliği 12 cm'dir. Alkolün yoğunluğu suyun yoğunluğundan küçüktür. **Kapların tabanlarındaki sıvı basınçları için aşağıdakilerden hangisi söylenir?**",
  gorsel: null,
  secenekler: ["Alkol bulunan kaptakinin basıncı daha büyüktür, çünkü alkol daha hafiftir", "İkisinin basıncı eşittir, çünkü sıvı yükseklikleri eşittir", "İkisinin basıncı eşittir, çünkü kaplar özdeştir", "Su bulunan kaptakinin basıncı daha büyüktür, çünkü su daha yoğundur"],
  dogru: 3,
  hatalar: ["Yoğunluğu ters yorumlama: Hafif sıvı aynı derinlikte daha küçük basınç yapar.", "Cinsin etkisini yok sayma: Derinlik eşit olsa da sıvının yoğunluğu farklıysa basınç da farklıdır.", "Kabı neden sanma: Kapların özdeş olması basıncı eşitlemez; sıvıların yoğunlukları farklı olduğundan basınçlar da farklıdır.", null],
  aciklama: `Adım 1: Kaplar özdeş, sıvı yükseklikleri eşittir; derinlik aynıdır.
Adım 2: Derinlik aynı olduğunda basıncı belirleyen sıvının cinsidir, yani yoğunluğudur.
Adım 3: Su, alkolden daha yoğun olduğu için suyun tabana yaptığı basınç daha büyüktür.
Sık yapılan hata: Derinlik eşit diye basınçların eşit olduğunu sanmak.
Cevap D.`
},
{
  id: "fen-sg-027",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "Bir hastanede serum, yüksekteki bir askıya asılan torbadan hortumla hastanın koluna verilmektedir. Hemşire serumun yavaş aktığını görünce akışı hızlandırmak istemektedir. **Hemşirenin yapması gereken işlem ve nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Hortumu kısaltmalıdır, çünkü akış yolu kısalır", "Torbayı daha yükseğe asmalıdır, çünkü hortumdaki sıvı basıncı artar", "Torbaya daha çok serum eklemelidir, çünkü sıvı miktarı artar", "Torbayı daha aşağıya asmalıdır, çünkü sıvı basıncı aşağıda artar"],
  dogru: 1,
  hatalar: ["Boru uzunluğunu etken sanma: Akışı belirleyen hortumun uzunluğu değil, torba ile kol arasındaki yükseklik farkıdır.", null, "Miktarı etken sanma: Sıvı basıncı serum miktarına değil, sıvının yüksekliğine bağlıdır.", "Derinliği ters uygulama: Torba aşağı indirilirse torba ile kol arasındaki yükseklik farkı azalır; basınç artmaz, azalır."],
  aciklama: `Adım 1: Serumun hortumdan akmasını sağlayan, torbadaki sıvının oluşturduğu sıvı basıncıdır. Sıvı basıncı, sıvının yüksekliğiyle (derinliğiyle) artar.
Adım 2: Torba daha yükseğe asılırsa torba ile hastanın kolu arasındaki yükseklik farkı artar; hortumdaki basınç büyür ve serum daha hızlı akar.
Adım 3: Hortumun kısa olması ya da torbadaki serum miktarı bu basıncı belirlemez.
Sık yapılan hata: Torbayı aşağıya indirmenin akışı artıracağını sanmak. Yükseklik farkı azalınca basınç da azalır.
Cevap B.`
},
/* ===================== DÜZEY 2 ===================== */
{
  id: "fen-sg-028",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir su altı robotu, geniş bir gölün tabanına yakın K noktasında çalıştıktan sonra su yüzeyine yakın L noktasında çalışmıştır. Aynı derinliklerde bir deniz olduğu düşünülürse deniz suyunun yoğunluğu göl suyunun yoğunluğundan büyüktür.\nI. Robot, K noktasında L noktasındakinden daha büyük bir sıvı basıncı altındadır.\nII. Göl daha geniş olsaydı K noktasındaki sıvı basıncı daha büyük olurdu.\nIII. K noktası aynı derinlikteki deniz suyunda olsaydı sıvı basıncı daha büyük olurdu.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "II ve III", "I ve III"],
  dogru: 3,
  hatalar: ["Eksik değerlendirme: I doğrudur; ancak deniz suyunun yoğun olması III'ü de doğru yapar.", "Genişlik yanılgısı: Gölün genişliği sıvı basıncını değiştirmez; II yanlıştır, I ve III doğrudur.", "Derinliği önemsememe: K noktası daha derindir; I doğrudur. II ise genişliğe dayandığı için yanlıştır.", null],
  aciklama: `Adım 1: I. yargı: K, tabana yakın olduğu için L'den derindir. Derinlik arttıkça basınç artar; I doğru.
Adım 2: II. yargı: Gölün genişliği sıvı basıncını değiştirmez; yalnızca derinlik ve sıvının cinsi belirleyicidir. II yanlış.
Adım 3: III. yargı: Aynı derinlikte yoğunluğu büyük sıvı daha büyük basınç yapar. Deniz suyu daha yoğun olduğundan III doğru.
Sık yapılan hata: Kap ya da göl büyüdükçe basıncın arttığını sanmak.
Cevap D.`
},
{
  id: "fen-sg-029",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bahçedeki silindir biçimli, ağzı açık su deposunun tabanına bir basınç ölçer yerleştirilmiştir. Yaz boyunca depodan sulama yapılmış, deponun su seviyesi düşmüştür. **Ölçerin gösterdiği değer ve bunun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Azalmıştır, çünkü tabanın üstündeki su yüksekliği azalmıştır", "Azalmıştır, çünkü depo boşalınca açık hava basıncı azalmıştır", "Değişmemiştir, çünkü depo aynı depodur", "Değişmemiştir, çünkü tabanın alanı aynı kalmıştır"],
  dogru: 0,
  hatalar: [null, "İlgisiz neden: Depo boşalınca açık hava basıncı değişmez; değişen su yüksekliğidir.", "Kabı neden sanma: Kap aynı kalsa da içindeki sıvının derinliği değiştiği için basınç da değişir.", "Taban alanını etken sanma: Taban alanı basıncı belirlemez; belirleyici derinliktir."],
  aciklama: `Adım 1: Tabandaki basınç, tabanın üstündeki sıvı yüksekliğine, yani derinliğe bağlıdır.
Adım 2: Sulama yapılınca su seviyesi düşmüş, derinlik azalmıştır.
Adım 3: Derinlik azalınca sıvı basıncı da azalır; ölçerin değeri küçülür.
Sık yapılan hata: Taban alanı ya da kabın aynı kalmasından basıncın değişmediğini sanmak.
Cevap A.`
},
{
  id: "fen-sg-030",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir bahçede yüzeyi geniş ama sığ bir süs havuzu ile dar ve derin bir su kuyusu vardır. Havuzdaki suyun derinliği 40 cm, kuyudaki suyun derinliği 6 m'dir. İkisi de aynı musluk suyuyla doldurulmuştur. **Havuzun tabanındaki sıvı basıncı ile kuyunun su yüzeyinden 40 cm aşağısındaki bir noktadaki sıvı basıncı arasındaki ilişki aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Havuzdaki daha büyüktür, çünkü havuzdaki su daha çoktur", "Kuyudaki daha büyüktür, çünkü kuyu daha derindir", "İkisi eşittir, çünkü sıvı ve derinlik aynıdır", "Havuzdaki daha büyüktür, çünkü havuzun tabanı daha geniştir"],
  dogru: 2,
  hatalar: ["Miktarı etken sanma: Havuzdaki su daha çok olsa da basınç miktara değil derinliğe bağlıdır.", "Yanlış derinliği alma: Karşılaştırılan nokta kuyunun 6 m'lik tamamı değil, yüzeyden 40 cm aşağısındaki noktadır.", null, "Genişliği etken sanma: Havuzun tabanı geniş olsa da basınç genişliğe değil derinliğe bağlıdır."],
  aciklama: `Adım 1: İki sıvı da aynı sudur; yoğunlukları eşittir.
Adım 2: Havuz tabanı su yüzeyinden 40 cm, kuyudaki nokta da su yüzeyinden 40 cm derindedir; derinlikler eşittir.
Adım 3: Sıvı ve derinlik aynı olduğundan basınçlar eşittir. Havuzun geniş, kuyunun dar olması bunu değiştirmez.
Sık yapılan hata: Çok su, çok basınç demek.
Cevap C.`
},
{
  id: "fen-sg-031",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Kerem, açık hava basıncıyla ilgili şu yargılarda bulunmuştur:\nI. Yüksek bir dağın tepesinde açık hava basıncı, deniz kıyısındakinden büyüktür.\nII. Ağzı sıkıca kapalı esnek bir kap yükseğe çıkarılınca kabarır, çünkü dışarıdaki açık hava basıncı küçülür.\nIII. Pipetle içecek içilirken içeceği pipetten yukarı ağzımızın çekmesi çıkarır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız II","Yalnız I","I ve III","II ve III"],
  dogru: 0,
  hatalar: [null,"Yönü ters bilme: Yükseldikçe açık hava basıncı azalır, I yanlıştır.","Boşluk çeker yanılgısı: III yanlıştır; içeceği yukarı iten, dışarıdaki açık hava basıncıdır. I de yanlıştır.","III yanlış: Pipetle içerken içeceği ağzımız çekmez, dışarıdaki hava iter."],
  aciklama: `Adım 1: I. yargı: Dağın tepesinde üstte kalan hava tabakası incedir; açık hava basıncı deniz kıyısındakinden küçüktür. I yanlış.
Adım 2: II. yargı: Kap yükseğe çıkınca dışarıdaki basınç azalır, içeride kalan hava kabı şişirir. II doğru.
Adım 3: III. yargı: Ağızda basınç azaltılır; içeceği pipete iten, içeceğin yüzeyine etki eden açık hava basıncıdır. III yanlış.
Sık yapılan hata: "Çekiyor" demek. Hep basıncı büyük olan taraf iter.
Cevap A.`
},
{
  id: "fen-sg-032",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Fen dersinde iki şırınga, su dolu bir hortumla birbirine bağlanmıştır. K şırıngasının pistonu dar, L şırıngasının pistonu daha geniştir ve iki piston aynı yüksekliktedir. Öğrenci K pistonuna kuvvet uyguladığında L pistonu dışarı doğru hareket etmiştir. **Bu düzenekle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["İki pistonun altındaki basınç eşittir; K pistonuna etki eden kuvvet daha büyüktür","İki pistonun altındaki basınç eşittir; L pistonuna etki eden kuvvet daha büyüktür","L pistonunun altındaki basınç daha büyüktür; iki pistona etki eden kuvvetler eşittir","K pistonunun altındaki basınç daha büyüktür; L pistonuna etki eden kuvvet daha küçüktür"],
  dogru: 1,
  hatalar: ["Kuvveti ters yorumlama: Basınç eşit olduğunda yüzeyi büyük olan pistona etki eden kuvvet daha büyüktür.",null,"Basınçla kuvveti karıştırma: Sıvı kuvveti değil basıncı aynen iletir; basınçlar eşit, kuvvetler farklıdır.","İletilen basıncı değiştirme: Basınç sıvının her noktasına aynen iletilir; geniş ya da dar olması onu değiştirmez."],
  aciklama: `Adım 1: Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç her yöne aynen iletilir. Aynı yükseklikteki iki pistonun altındaki basınç eşittir.
Adım 2: Basınç, birim yüzeye etki eden kuvvettir. Aynı basınç, daha geniş yüzeyde daha büyük kuvvet oluşturur.
Adım 3: L pistonu daha geniş olduğundan L'ye etki eden kuvvet daha büyüktür.
Sık yapılan hata: Sıvının kuvveti aynen ilettiğini sanmak. İletilen basınçtır.
Cevap B.`
},
{
  id: "fen-sg-033",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Mert, bir kovadaki musluk suyunda aynı basınç sensörünü, kova ve su değişmeyecek biçimde 5, 10 ve 15 cm derinliğe indirerek ölçüm yapmış ve sonuçları tabloya yazmıştır. **Bu deneyle ilgili aşağıdakilerden hangisi söylenebilir?**",
  gorsel: `<table class="tablo"><tr><th>Derinlik (cm)</th><th>Sensörün gösterdiği değer (birim)</th></tr><tr><td>5</td><td>9</td></tr><tr><td>10</td><td>17</td></tr><tr><td>15</td><td>26</td></tr></table>`,
  secenekler: ["Bağımsız değişken ölçülen basınçtır; derinlik bağımlı değişkendir", "Bağımsız değişken sıvının cinsidir; derinlik kontrol değişkenidir", "Bağımlı değişken sıvının cinsidir; ölçülen basınç kontrol değişkenidir", "Bağımsız değişken derinliktir; ölçülen basınç bağımlı değişkendir"],
  dogru: 3,
  hatalar: ["Değişkenleri ters yerleştirme: Deneyci derinliği kendisi değiştirir, basıncı ise ölçer.", "Sıvı cinsini değiştirme: Deneyde sıvı hep musluk suyudur, yani sıvı cinsi sabittir; kontrol değişkenidir.", "Sabit tutulanı bağımlı sanma: Sıvının cinsi sabit tutulur, ölçülen değer ise basınçtır.", null],
  aciklama: `Adım 1: Bağımsız değişken, deneyi yapanın değiştirdiği koşuldur. Mert derinliği 5, 10 ve 15 cm olarak değiştirmiştir.
Adım 2: Bağımlı değişken ölçülen niceliktir; sensörün gösterdiği basınç değeridir.
Adım 3: Sıvının cinsi, kova ve sensör sabit tutulmuştur; bunlar kontrol değişkenleridir. Tabloya göre derinlik arttıkça basınç artmıştır.
Sık yapılan hata: Ölçülen değeri bağımsız değişken sanmak.
Cevap D.`
},
{
  id: "fen-sg-034",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir akvaryum mağazasında özdeş iki akvaryumdan biri tatlı suyla, diğeri deniz suyuyla doldurulmuştur. Deniz suyunun yoğunluğu tatlı sudan büyüktür. İki akvaryumda da su yüksekliği 50 cm'dir. K noktası tatlı su akvaryumunda, L noktası deniz suyu akvaryumunda ve ikisi de tabandan 20 cm yukarıdadır.\nI. K noktasındaki sıvı basıncı, L noktasındakinden büyüktür.\nII. L noktasındaki basınç, aynı noktada deniz suyu yerine tatlı su olsaydı olacağından büyüktür.\nIII. İki akvaryumun su yüksekliği de 10 cm azaltılırsa K ve L noktalarındaki basınçlar azalır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: ["Yoğunluğu ters yorumlama: Aynı derinlikte yoğun sıvının basıncı büyüktür; K'nin basıncı L'den küçüktür.", "Eksik değerlendirme: III doğrudur ama II de doğrudur; yoğun sıvı aynı derinlikte daha büyük basınç yapar.", "I yanlış: Aynı derinlikte tatlı su, deniz suyundan daha küçük basınç yapar.", null],
  aciklama: `Adım 1: K ve L aynı yükseklikte olduğundan aynı derinliktedir; derinlik su yüzeyinden ölçülür ve ikisinde de eşittir. Derinlik eşitken yoğun sıvıda basınç büyüktür: L'nin basıncı K'ninkinden büyüktür. I yanlış.
Adım 2: L noktasında deniz suyu yerine tatlı su olsaydı basınç daha küçük olurdu; yani deniz suyundaki değer daha büyüktür. II doğru.
Adım 3: Su yüksekliği azalırsa noktaların derinliği azalır; iki noktada da basınç azalır. III doğru.
Sık yapılan hata: Aynı derinlikte sıvı cinsinin etkisini yok saymak.
Cevap D.`
},
{
  id: "fen-sg-035",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Ters çevrilmiş damacanalı bir su sebilinin musluğu açıldığında su akar ve her akışta damacananın içinde yukarı doğru hava kabarcıkları yükselir. **Bu kabarcıkların oluşmasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Akan suyun damacanadaki suyu sürekli çalkalaması","Giren havanın içerideki basıncı dışarıdakine yaklaştırması","Damacanadaki suyun ısınarak içinden gaz çıkarması","Damacananın içindeki açık hava basıncının artması"],
  dogru: 1,
  hatalar: ["Gözlemi neden sanma: Çalkalanma kabarcığın sebebi değildir; hava, basınç farkını gidermek için girer.", null, "İlgisiz neden: Suyun ısınmasıyla ilgili bir durum yoktur; kabarcık dışarıdan giren havadır.", "Basıncı yanlış yorumlama: Su boşaldıkça içerideki basınç küçülür; dışarıdan hava girerek bunu dengeler."],
  aciklama: `Adım 1: Musluktan su çıktıkça damacanadaki su azalır ve içerideki hava basıncı dışarıdakinden küçülmeye başlar.
Adım 2: Dışarıdaki açık hava basıncı daha büyük olduğu için ağızdan içeri hava girer; bu hava kabarcık olarak yükselir.
Adım 3: Böylece içerideki basınç dışarıdakine yaklaşır ve su akmaya devam edebilir.
Sık yapılan hata: Kabarcıkların suyun çalkalanmasından ya da ısınmasından oluştuğunu sanmak.
Cevap B.`
},
{
  id: "fen-sg-036",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir apartmanın suyu, mahalledeki ağzı açık bir su kulesinden borularla gelmektedir. Apartmanın zemin katındaki ve en üst katındaki musluklar aynı anda açılmıştır. Kulenin su seviyesi iki musluğun da üstündedir. **Musluklardan akan suyun gücü ve nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["İkisinde de aynı güçtedir, çünkü ikisi de aynı kuleden beslenir", "Üst kattakinde daha güçlüdür, çünkü su üst kata daha az yol alarak ulaşır", "Zemin kattakinde daha güçlüdür, çünkü musluk kulenin su yüzeyine göre daha derindedir", "Zemin kattakinde daha güçlüdür, çünkü zemin katta daha çok su bulunur"],
  dogru: 2,
  hatalar: ["Aynı kaynağı aynı basınç sanma: Aynı kuleden beslenseler de musluklar su yüzeyine göre farklı derinliktedir; basınçları da farklıdır.", "Yolu etken sanma: Akışın gücünü suyun aldığı yol değil, musluğun kulenin su yüzeyine göre derinliği belirler; üst kat daha sığdır.", null, "Miktarı etken sanma: Zemin katta daha çok su bulunmaz; musluk gücünü belirleyen su miktarı değil, derinliktir."],
  aciklama: `Adım 1: Su kulesinde su yüzeyi yüksektedir. Musluktaki sıvı basıncını, kulenin su yüzeyinden musluğa kadar olan düşey uzaklık, yani derinlik belirler.
Adım 2: Zemin kattaki musluk kulenin su yüzeyine göre en üst kattakinden daha derindedir; basıncı daha büyüktür.
Adım 3: Basıncı büyük olan musluktan su daha güçlü akar. Suyun aldığı yol ya da su miktarı bunu belirlemez.
Sık yapılan hata: Aynı kuleden beslenen her musluğun aynı güçte akacağını sanmak. Aynı sıvıda derinlik değişince basınç da değişir.
Cevap C.`
},
{
  id: "fen-sg-037",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Şekildeki kap ağzına kadar su doludur ve yan yüzeyinde aynı dikey doğrultuda K, L ve M delikleri vardır. Delikler aynı anda açılıyor.\nI. M deliğinden çıkan su, K deliğinden çıkan sudan daha zayıf fışkırır.\nII. K deliğine etki eden sıvı basıncı, L deliğine etki eden sıvı basıncından büyüktür.\nIII. Delikler açık kalırsa kaptaki su azaldıkça deliklerden fışkıran suyun gücü azalır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: `<svg viewBox="0 0 380 250" role="img" aria-label="Ağzına kadar su dolu kabın sağ yüzeyinde yukarıdan aşağıya K, L ve M delikleri"><rect x="111" y="50" width="198" height="169" fill="var(--dolgu)"/><path d="M110 50 V220 H310 V50" fill="none" stroke="currentColor" stroke-width="2"/><line x1="110" y1="50" x2="310" y2="50" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><circle cx="310" cy="95" r="5"/><circle cx="310" cy="140" r="5"/><circle cx="310" cy="190" r="5"/></g><g fill="currentColor" font-size="16"><text x="325" y="100">K</text><text x="325" y="145">L</text><text x="325" y="195">M</text><text x="10" y="55">su yüzeyi</text></g></svg>`,
  secenekler: ["Yalnız III", "I ve II", "I ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [null, "Derinliği ters yorumlama: M deliği en derindedir; I ve II yanlıştır.", "I yanlış: M, K'den derindir; basıncı büyüktür, su daha güçlü fışkırır.", "I ve II yanlış: Derinlik arttıkça basınç artar; K en sığ, M en derin deliktir."],
  aciklama: `Adım 1: Derinlik, su yüzeyinden deliğe kadar ölçülür. K en sığ, M en derin deliktir.
Adım 2: I. yargı: M daha derin, basıncı büyük; M'den su daha güçlü fışkırır. I yanlış. II. yargı: K, L'den sığ olduğundan basıncı küçüktür. II yanlış.
Adım 3: III. yargı: Su aktıkça su yüzeyi alçalır, deliklerin derinliği azalır, basınç küçülür ve fışkırma zayıflar. III doğru.
Sık yapılan hata: Üstteki deliğin daha güçlü fışkırdığını sanmak.
Cevap A.`
},
{
  id: "fen-sg-038",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "**Aşağıdaki olaylardan hangisi açık hava basıncıyla __açıklanamaz__?**",
  gorsel: null,
  secenekler: ["Vantuzun cama yapışması","Damlalığa ilacın çekilmesi","Su kulesinden evlere pompasız su ulaşması","Pipetle meyve suyunun içilmesi"],
  dogru: 2,
  hatalar: ["Vantuzun tutunması dışarıdaki açık hava basıncıyla açıklanır; bu şık sorunun cevabı değildir.","Damlalığa ilacın dolması dışarıdaki açık hava basıncıyla açıklanır; bu şık sorunun cevabı değildir.",null,"Pipetle içecek içilmesi açık hava basıncıyla açıklanır; bu şık sorunun cevabı değildir."],
  aciklama: `Adım 1: Soru "açıklanamaz" diyor; açık hava basıncının etkili olmadığı olayı arıyoruz.
Adım 2: Vantuz, damlalık ve pipette içeride basınç azaltılır ve dışarıdaki açık hava basıncı hareketi sağlar.
Adım 3: Su kulesinde su, ağzı açık borularla bağlı bileşik kap mantığıyla evlere akar; kule evlerden yüksekte olduğu için pompa gerekmez. Burada belirleyici olan seviye farkıdır.
Sık yapılan hata: Sıvıyla ilgili her olayı açık hava basıncına bağlamak.
Cevap C.`
},
{
  id: "fen-sg-039",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Su dolu bir pet şişenin yan yüzeyine, tabana yakın bir yere iğneyle küçük bir delik açılmıştır. Kapak sıkıca kapalıyken delikten su akmamakta, kapak açılınca delikten su fışkırmaktadır. **Kapak açılınca suyun akmaya başlamasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Kapak açılınca suyun yoğunluğunun azalması","Giren havanın iç basıncı dış basınca yaklaştırması","Kapak açılınca suyun ağırlığının artması","Kapak açılınca şişedeki suyun ısınması"],
  dogru: 1,
  hatalar: ["Yoğunluğu neden sanma: Kapak açmak suyun yoğunluğunu değiştirmez.",null,"Ağırlığı neden sanma: Suyun ağırlığı kapak açılınca değişmez; değişen içerideki hava basıncıdır.","İlgisiz neden: Kapağı açmak suyu ısıtmaz; akışı başlatan hava girişidir."],
  aciklama: `Adım 1: Kapak kapalıyken su akarsa şişenin içindeki boşluk büyür ve içerideki hava basıncı dışarıdakinden küçülür. Dışarıdaki açık hava basıncı delikteki suyu içeri doğru tutar.
Adım 2: Kapak açılınca şişeye hava girer; içerideki basınç dışarıdaki basınca yaklaşır.
Adım 3: Böylece suyun derinliğinden doğan sıvı basıncı delikten suyu dışarı fışkırtabilir.
Sık yapılan hata: Suyun yoğunluğunun, ağırlığının ya da sıcaklığının değiştiğini sanmak.
Cevap B.`
},
{
  id: "fen-sg-040",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir hava durumu uygulaması, aynı gün saat 12.00'de üç şehirde ölçülen açık hava basınçlarını tablodaki gibi göstermiştir. Şehirler arasındaki basınç farkının yalnızca rakım farkından kaynaklandığı kabul edilsin. **Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Şehir</th><th>Açık hava basıncı (hPa)</th></tr><tr><td>K</td><td>1012</td></tr><tr><td>L</td><td>925</td></tr><tr><td>M</td><td>840</td></tr></table>`,
  secenekler: ["K şehrinin rakımı üç şehrin en yükseğidir","L şehrinin rakımı üç şehrin en düşüğüdür","M şehrinde hava üç şehrin en sıcağıdır","M şehrinin rakımı K şehrininkinden yüksektir"],
  dogru: 3,
  hatalar: ["Yönü ters bilme: En büyük basınç en düşük rakımda ölçülür; K'nin rakımı en düşüktür.", "Sıralamayı karıştırma: L'nin basıncı K'den küçük, M'den büyüktür; rakımı ikisinin arasındadır.", "İlgisiz çıkarım: Tablo sıcaklık hakkında bilgi vermez; basınç sıcaklığı göstermez.", null],
  aciklama: `Adım 1: Açık hava basıncı yükseldikçe azalır. Basınç farkı yalnızca rakımdan kaynaklanıyorsa basıncı küçük olan şehir daha yüksektedir.
Adım 2: Basınç sıralaması K (1012) > L (925) > M (840) olduğundan rakım sıralaması M > L > K olur.
Adım 3: M'nin rakımı K'nınkinden yüksektir; sıcaklık hakkında tablodan hiçbir çıkarım yapılamaz.
Sık yapılan hata: Basıncı büyük olan yerin daha yüksekte olduğunu sanmak.
Cevap D.`
},
{
  id: "fen-sg-041",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Zeynep, ucuna ince lastik zar gerilmiş bir huniyi su dolu bir akvaryuma daldırarak zarın çöküşünü gözlemlemiştir. Zarın bakış yönünü ve derinliği değiştirerek şu yargılarda bulunmuştur:\nI. Zar aynı derinlikte yukarı ya da yana baktığında aynı miktarda çöker.\nII. Zar daha derine indirildikçe daha fazla çöker.\nIII. Zar aşağı baktığında sıvı basıncı zarı etkilemez.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["I ve II", "Yalnız II", "Yalnız III", "II ve III"],
  dogru: 0,
  hatalar: [null, "Eksik değerlendirme: II doğrudur ancak aynı derinlikte yön değişince zarın çöküşü değişmez; I de doğrudur.", "Yönü etken sanma: Sıvı her yöne basınç uyguladığı için III yanlıştır.", "III yanlış: Zar aşağı baktığında da sıvı basıncı zarı etkiler."],
  aciklama: `Adım 1: Sıvılar her yöne basınç uygular; aynı derinlikte basınç her yönde eşittir. I doğru, III yanlış.
Adım 2: Derinlik arttıkça sıvı basıncı artar; zar daha fazla çöker. II doğru.
Adım 3: Yani doğru yargılar I ve II'dir.
Sık yapılan hata: Sıvının yalnızca tabana, yani aşağıya basınç yaptığını sanmak.
Cevap A.`
},
{
  id: "fen-sg-042",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Silindir biçimli ve ağzı açık bir kap, şekildeki gibi 30 cm yüksekliğe kadar suyla doldurulmuştur. K noktası su yüzeyinden 12 cm aşağıda, L noktası ise kabın tabanından 12 cm yukarıdadır. **K ve L noktalarındaki sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 360 240" role="img" aria-label="30 cm su dolu kapta su yüzeyinden 12 cm aşağıda K noktası ve tabandan 12 cm yukarıda L noktası"><rect x="101" y="30" width="138" height="180" fill="var(--dolgu)"/><path d="M100 10 V210 H240 V10" fill="none" stroke="currentColor" stroke-width="2"/><line x1="100" y1="30" x2="240" y2="30" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"><circle cx="170" cy="102" r="5"/><circle cx="170" cy="138" r="5"/></g><g stroke="currentColor" stroke-width="2"><line x1="270" y1="30" x2="270" y2="102"/><line x1="264" y1="30" x2="276" y2="30"/><line x1="264" y1="102" x2="276" y2="102"/><line x1="270" y1="138" x2="270" y2="210"/><line x1="264" y1="138" x2="276" y2="138"/><line x1="264" y1="210" x2="276" y2="210"/><line x1="70" y1="30" x2="70" y2="210"/><line x1="64" y1="30" x2="76" y2="30"/><line x1="64" y1="210" x2="76" y2="210"/></g><g fill="currentColor" font-size="15"><text x="182" y="107">K</text><text x="182" y="143">L</text><text x="282" y="70">12 cm</text><text x="282" y="178">12 cm</text><text x="10" y="125">30 cm</text></g></svg>`,
  secenekler: ["P_{K} > P_{L}, çünkü K'nin su yüzeyine uzaklığı daha büyüktür", "P_{K} = P_{L}, çünkü ikisi de 12 cm uzaklıktadır", "P_{K} < P_{L}, çünkü L'nin su yüzeyine uzaklığı daha büyüktür", "P_{K} = P_{L}, çünkü ikisi de aynı kaptaki aynı sudadır"],
  dogru: 2,
  hatalar: ["Derinliği yanlış okuma: K'nin yüzeye uzaklığı 12 cm, L'ninki 18 cm'dir; K daha sığdır, basıncı L'den küçüktür.", "Mesafeleri eşit görme: İkisi de 12 cm'dir ama biri yüzeyden, öbürü tabandan ölçülmüştür; derinlik yüzeyden ölçülür.", null, "Aynı kabı aynı basınç sanma: Aynı sıvıda bile derinlik farklıysa basınç da farklıdır."],
  aciklama: `Adım 1: Derinlik her zaman sıvının açık yüzeyinden noktaya kadar ölçülür, tabandan değil.
Adım 2: K'nin derinliği 12 cm. L tabandan 12 cm yukarıda olduğundan yüzeyden 30 − 12 = 18 cm aşağıdadır.
Adım 3: Aynı sıvıda daha derin olan L'nin basıncı daha büyüktür; P_{K} < P_{L}.
Sık yapılan hata: 12 cm'yi iki noktada da derinlik sanmak.
Cevap C.`
},
{
  id: "fen-sg-043",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir köyün evlerine su, tepedeki ağzı açık bir depodan borularla verilmektedir. Köy muhtarı, evlerdeki muslukların daha güçlü akması için deponun 5 metre daha yüksek bir yere taşınmasına karar vermiştir. **Akışın güçlenmesinin nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Depoda eskisinden çok daha fazla suyun bulunması","Su yüzeyi ile musluklar arasındaki düşey uzaklığın artması","Depoyu evlere bağlayan boruların daha kısa olması","Depo ile evler arasındaki yatay uzaklığın artması"],
  dogru: 1,
  hatalar: ["Miktarı neden sanma: Akışın gücü depodaki su miktarına değil, su yüzeyinin musluğa göre yüksekliğine bağlıdır.", null, "Boru uzunluğunu etken sanma: Borunun uzunluğu basıncı belirlemez; düşey yükseklik farkı belirler.", "Yatay uzaklığı etken sanma: Yatay uzaklık basıncı değiştirmez; düşey uzaklık değiştirir."],
  aciklama: `Adım 1: Musluktaki su basıncı, deponun su yüzeyi ile musluk arasındaki düşey uzaklığa, yani derinliğe bağlıdır.
Adım 2: Depo yukarı taşınınca bu düşey uzaklık artar; muslukta basınç büyür ve su daha güçlü akar.
Adım 3: Depodaki su miktarı, borunun uzunluğu ya da yatay uzaklık bunu belirlemez.
Sık yapılan hata: Çok su ya da kısa boru sayesinde akışın güçlendiğini sanmak.
Cevap B.`
},
{
  id: "fen-sg-044",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 2,
  soru: "Aşağıda üç düzenek verilmiştir:\nI. Vantuz\nII. Kamyon damperi\nIII. Damlalık\n**Bunlardan hangileri, kapalı kaptaki sıvının üzerine uygulanan basıncı her noktaya aynen iletmesi ilkesinden yararlanır?**",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "Yalnız II"],
  dogru: 3,
  hatalar: ["Vantuzu Pascal sanma: Vantuz sıvı kullanmaz, dışarıdaki açık hava basıncıyla tutunur. Damperin Pascal'a dayandığı gözden kaçmıştır.", "I yanlış: Damper doğrudur ama vantuz açık hava basıncıyla çalışır, sıvıya basınç iletmez.", "Açık hava uygulamalarını Pascal sanma: Vantuz ve damlalık açık hava basıncıyla çalışır; kapalı kaptaki sıvıya basınç uygulamazlar.", null],
  aciklama: `Adım 1: Pascal prensibi: Kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir. Bu ilkeye dayanan düzeneklerde kapalı bir kapta sıvı (genellikle yağ) ve piston bulunur.
Adım 2: Kamyon damperi, kapalı kaptaki yağın basıncı iletmesiyle çalışır. II doğru.
Adım 3: Vantuz ve damlalık sıvı basıncını iletmez; içerideki hava basıncı azalınca dışarıdaki açık hava basıncı onları çalıştırır. I ve III yanlış.
Sık yapılan hata: Basınçla çalışan her düzeneği Pascal prensibine bağlamak. Açık hava basıncı ile Pascal prensibini ayır.
Cevap D.`
},
{
  id: "fen-sg-045",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Taban alanları farklı, silindir biçimli K, L ve M kaplarına eşit hacimde su konmuştur. Kaplardaki su yükseklikleri şekilde verilmiştir. **Kapların tabanlarındaki sıvı basınçları arasındaki ilişki aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 400 240" role="img" aria-label="Eşit hacimde su bulunan üç kap: K kabında 20 cm, L kabında 10 cm, M kabında 25 cm su yüksekliği"><g fill="var(--dolgu)"><rect x="21" y="110" width="68" height="100"/><rect x="121" y="160" width="138" height="50"/><rect x="301" y="85" width="54" height="125"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 40 V210 H90 V40"/><path d="M120 40 V210 H260 V40"/><path d="M300 40 V210 H356 V40"/></g><g stroke="var(--vurgu)" stroke-width="3"><line x1="20" y1="110" x2="90" y2="110"/><line x1="120" y1="160" x2="260" y2="160"/><line x1="300" y1="85" x2="356" y2="85"/></g><g fill="currentColor" font-size="15"><text x="28" y="85">20 cm</text><text x="165" y="135">10 cm</text><text x="305" y="68">25 cm</text><text x="50" y="232">K</text><text x="185" y="232">L</text><text x="322" y="232">M</text></g></svg>`,
  secenekler: ["P_{M} > P_{K} > P_{L}", "P_{K} = P_{L} = P_{M}", "P_{L} > P_{K} > P_{M}", "P_{K} > P_{M} > P_{L}"],
  dogru: 0,
  hatalar: [null, "Eşit miktarı eşit basınç sanma: Su miktarı eşit olsa da yükseklikler farklıdır; basıncı yükseklik belirler.", "Genişliği etken sanma: Geniş kapta su alçakta kalır; basınç küçüktür. Sıralama ters kurulmuş.", "Yükseklikleri yanlış sıralama: M'nin su yüksekliği K'ninkinden büyüktür."],
  aciklama: `Adım 1: Kaplardaki sıvı aynı sudur; tabandaki basıncı belirleyen yalnızca su yüksekliğidir, su miktarı ya da taban alanı değildir.
Adım 2: Yükseklikler M = 25 cm, K = 20 cm, L = 10 cm olduğundan basınç sıralaması M > K > L olur.
Adım 3: Eşit hacimli su, dar kapta yükseğe çıkar, geniş kapta alçakta kalır.
Sık yapılan hata: Eşit miktar eşit basınç demek.
Cevap A.`
},
{
  id: "fen-sg-046",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir otobüs, deniz kıyısından 2000 m yüksekteki bir yaylaya hızla çıkarken yolcuların kulakları tıkanmaktadır. **Bu durumun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Dışarıdaki basıncın artması, kulak içindeki basıncın aynı kalması","Dışarıdaki havanın daha soğuk olması","Dışarıdaki basıncın azalması, kulak içindeki basıncın hemen değişmemesi","Dışarıdaki havanın daha fazla oksijen içermesi"],
  dogru: 2,
  hatalar: ["Yönü ters bilme: Yükseldikçe dışarıdaki açık hava basıncı artmaz, azalır.","İlgisiz neden: Kulağın tıkanması soğuk havayla değil, basınç farkıyla ilgilidir.",null,"İlgisiz neden: Hava bileşimi ve oksijen miktarı bu duruma neden olmaz."],
  aciklama: `Adım 1: Yükseğe çıkıldıkça açık hava basıncı azalır.
Adım 2: Kulağın içindeki hava basıncı hemen değişmez; içeride dışarıdan büyük bir basınç kalır.
Adım 3: İçeriyle dışarının basınç farkı kulakta tıkanma ve baskı hissi oluşturur.
Sık yapılan hata: Yükseklikte açık hava basıncının arttığını sanmak.
Cevap C.`
},
{
  id: "fen-sg-047",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir sulama göletinin kıyı bölgesi 1 m, orta bölgesi ise 4 m derinliğindedir. K noktası kıyı bölgesinin tabanında, L noktası orta bölgenin tabanındadır.\nI. L noktasındaki sıvı basıncı K noktasındakinden büyüktür.\nII. Göl iki kat daha geniş olsaydı L noktasındaki sıvı basıncı artardı.\nIII. Bir balık L noktasında tabana paralel yüzerse maruz kaldığı sıvı basıncı artar.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I","Yalnız II","Yalnız III","II ve III"],
  dogru: 0,
  hatalar: [null,"Genişliği etken sanma: Göl geniş olsa da basınç aynı kalır; II yanlıştır, I doğrudur.","Yatay hareketi etken sanma: Aynı derinlikte yatay yüzmek basıncı değiştirmez; III yanlıştır.","II ve III yanlış: Genişlik ve yatay hareket basıncı değiştirmez."],
  aciklama: `Adım 1: I. yargı: L, K'dan daha derindir; aynı sıvıda derinlik arttıkça basınç artar. I doğru.
Adım 2: II. yargı: Gölün genişliği sıvı basıncını değiştirmez. II yanlış.
Adım 3: III. yargı: Aynı derinlikte yatay hareket, basıncı değiştirmez; yalnızca derinlik değişince basınç değişir. III yanlış.
Sık yapılan hata: Geniş ya da uzun bir ortamda basıncın arttığını sanmak.
Cevap A.`
},
/* ===================== DÜZEY 3 ===================== */
{
  id: "fen-sg-048",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir bahçede kuşlar için hazırlanan suluk, su dolu bir şişenin ağzı aşağı gelecek biçimde, ağzı sığ bir tabağın içindeki suya değecek şekilde ters çevrilerek kurulmuştur. Başlangıçta şişedeki su dökülmemektedir. Kuşlar tabaktaki suyu içip su seviyesi şişenin ağzının altına düşünce şişeden tabağa yeniden su akmakta, ağzın hizası kapanınca akış durmaktadır. **Bu düzenekle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["Ağız suyun içindeyken şişedeki suyu şişenin ağırlığı tutar; seviye düşünce şişe hafifler","Ağız suyun içindeyken şişedeki suyu açık hava basıncı tutar; seviye düşünce şişeye hava girip su akar","Ağız suyun içindeyken şişedeki suyu tabaktaki suyun yoğunluğu tutar; seviye düşünce yoğunluk azalır","Ağız suyun içindeyken hava şişeyi aşağıdan iter; seviye düşünce şişeye giren hava suyu yukarı çeker"],
  dogru: 1,
  hatalar: ["Ağırlığı neden sanma: Şişenin ağırlığı sabittir; suyu tutan dışarıdaki hava basıncıdır.",null,"Yoğunluğu neden sanma: Tabaktaki suyun yoğunluğu değişmez; hareketi basınç farkı belirler.","Çekme yanılgısı: Giren hava suyu çekmez; içerideki basıncı dışarıdakine yaklaştırarak suyun akmasını sağlar."],
  aciklama: `Adım 1: Ağız tabaktaki suyun içindeyken şişeye hava giremez. Tabaktaki su yüzeyine etki eden açık hava basıncı, şişedeki suyu tutar ve dökülmesini engeller.
Adım 2: Kuşlar içip tabaktaki su seviyesi düşünce ağız havaya açılır ve şişeye bir hava kabarcığı girer.
Adım 3: Giren hava, içerideki basıncı dışarıdaki basınca yaklaştırır; su şişeden akar ve ağız yeniden kapanınca akış durur.
Sık yapılan hata: Suyu tutanın ağırlık ya da yoğunluk olduğunu sanmak.
Cevap B.`
},
{
  id: "fen-sg-049",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir kampçı, 2500 m yükseklikteki kamp alanında boş plastik su şişesinin kapağını sıkıca kapatmış ve çantasına koymuştur. Köye indiğinde şişenin içe doğru çöküp buruştuğunu görmüştür. Şişeye hava girmemiş, şişeden hava çıkmamıştır. **Şişenin buruşmasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Aşağıya inildikçe şişenin içindeki havanın dışarı sızması", "Köyün havasının kamp alanından daha soğuk olması", "Şişenin içindeki basıncın dışarıdaki açık hava basıncından büyük olması", "Köydeki açık hava basıncının şişenin içindeki basınçtan büyük olması"],
  dogru: 3,
  hatalar: ["Verilene aykırı: Şişeden hava çıkmadığı belirtilmiştir; neden hava sızması değildir.", "İlgisiz neden: Buruşmayı soğukluk değil basınç farkı açıklar.", "Büyüklüğü ters yorumlama: İçerisi büyük olsaydı şişe dışarı doğru kabarırdı, çökmezdi.", null],
  aciklama: `Adım 1: Kapak kapatılırken şişenin içindeki hava basıncı, kamp alanındaki açık hava basıncına eşittir.
Adım 2: Aşağıya inildikçe açık hava basıncı artar; içeride sıkışıp kalan havanın basıncı ise önceki değerinde kalır.
Adım 3: Dışarıdaki basınç içerideki basınçtan büyük olduğu için şişe içe doğru çöker.
Sık yapılan hata: Aşağıda basıncın azaldığını sanmak. Alçaldıkça açık hava basıncı artar.
Cevap D.`
},
{
  id: "fen-sg-050",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Selin, sıvı basıncının sıvının cinsine bağlı olup olmadığını araştırmak için özdeş iki kaba aynı yüksekliğe kadar biri su, diğeri tuzlu su koymuştur. Her kabın tabanına özdeş birer basınç sensörü yerleştirmiş ve sensörlerin gösterdiği değerleri karşılaştırmıştır. Odanın sıcaklığı deney boyunca değişmemiştir.\nI. Bağımsız değişken, kaplardaki sıvıların miktarıdır.\nII. Sıvı yüksekliği, kontrol değişkenlerinden biridir.\nIII. Bağımlı değişken, sensörlerin gösterdiği basınç değeridir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız II", "II ve III", "I ve II", "I ve III"],
  dogru: 1,
  hatalar: ["Eksik değerlendirme: II doğrudur ama III de doğrudur; ölçülen değer bağımlı değişkendir.", null, "I yanlış: Selin sıvının miktarını değil cinsini değiştirmiştir; bağımsız değişken sıvının cinsidir.", "I yanlış: Bağımsız değişken sıvıların miktarı değil, cinsidir; üstelik II de doğrudur."],
  aciklama: `Adım 1: Selin sıvının cinsini değiştiriyor (su – tuzlu su); bağımsız değişken sıvının cinsidir, miktarı değil. I yanlış.
Adım 2: Sıvı yüksekliği, kapların özdeşliği ve sensörler sabit tutulur; bunlar kontrol değişkenleridir. II doğru.
Adım 3: Sensörün gösterdiği değer ölçülen niceliktir, yani bağımlı değişkendir. III doğru.
Sık yapılan hata: Bağımsız değişkeni yanlış belirlemek.
Cevap B.`
},
{
  id: "fen-sg-051",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Can, sıvı basıncının kabın biçimine bağlı olup olmadığını araştırmak istemektedir. Aynı basınç sensörüyle dört ölçüm yapmış ve ölçüm koşullarını tabloya yazmıştır. **Can'ın hipotezini test etmek için hangi iki ölçümün sonuçlarını karşılaştırması gerekir?**",
  gorsel: `<table class="tablo"><tr><th>Ölçüm</th><th>Sıvı</th><th>Sıvı yüksekliği</th><th>Kabın biçimi</th></tr><tr><td>1</td><td>Su</td><td>20 cm</td><td>Silindir</td></tr><tr><td>2</td><td>Su</td><td>20 cm</td><td>Huni</td></tr><tr><td>3</td><td>Zeytinyağı</td><td>20 cm</td><td>Huni</td></tr><tr><td>4</td><td>Su</td><td>30 cm</td><td>Silindir</td></tr></table>`,
  secenekler: ["1 ve 3", "1 ve 4", "1 ve 2", "3 ve 4"],
  dogru: 2,
  hatalar: ["İki değişkeni birden değiştirme: 1 ve 3'te hem kabın biçimi hem sıvının cinsi farklıdır; sonucun hangisinden geldiği anlaşılmaz.", "Yanlış değişkeni sınama: 1 ve 4'te yalnızca sıvı yüksekliği farklıdır; bu derinliğin etkisini sınar.", null, "İki değişkeni birden değiştirme: 3 ve 4'te sıvı, yükseklik ve kabın biçimi farklıdır."],
  aciklama: `Adım 1: Hipotezi test ederken yalnızca sınanan değişken, yani kabın biçimi değişmeli; diğer her şey aynı kalmalıdır.
Adım 2: 1 ve 2'de sıvı (su) ve sıvı yüksekliği (20 cm) aynıdır, yalnızca kabın biçimi (silindir – huni) farklıdır.
Adım 3: Diğer çiftlerde birden çok koşul farklıdır; sonucun hangisinden geldiği anlaşılmaz.
Sık yapılan hata: Birden fazla değişkenin farklı olduğu çifti karşılaştırmak.
Cevap C.`
},
{
  id: "fen-sg-052",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir sitenin yüzme havuzunun tabanındaki tahliye vanası açılmış ve havuz boşalmaya başlamıştır. Havuz görevlisi, vanadan çıkan suyun ilk dakikalarda çok güçlü aktığını, havuz boşaldıkça akışın zayıfladığını ve en sonunda suyun ağır ağır sızdığını fark etmiştir. Havuzun yan duvarları diktir ve havuzun ağzı açıktır. **Vanadan akan suyun gücünün zamanla azalmasının nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Vananın boyutunun zamanla küçülmesi", "Havuzun genişliğinin zamanla azalması", "Vananın su yüzeyine göre derinliğinin azalması", "Havuzdaki suyun yoğunluğunun azalması"],
  dogru: 2,
  hatalar: ["Gözlem dışı varsayım: Vananın boyutu sabittir; değişen derinliktir.", "Genişliği etken sanma: Havuzun genişliği değişmez ve basıncı belirlemez.", null, "Yoğunluğu etken sanma: Suyun yoğunluğu havuz boşalırken değişmez."],
  aciklama: `Adım 1: Vanadan çıkan suyun gücü, vanadaki sıvı basıncına bağlıdır. Basınç, su yüzeyinden vanaya olan derinlikle belirlenir.
Adım 2: Havuz boşaldıkça su yüzeyi alçalır; vananın su yüzeyine göre derinliği azalır.
Adım 3: Derinlik azaldığı için basınç küçülür ve akış zayıflar.
Sık yapılan hata: Vananın küçüldüğünü ya da havuzun daraldığını düşünmek.
Cevap C.`
},
{
  id: "fen-sg-053",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Elif, bir bardaktaki meyve suyunu pipetle içerken şu yargılarda bulunmuştur:\nI. Pipetin içindeki hava basıncı dışarıdaki açık hava basıncından büyük olduğu için meyve suyu yükselir.\nII. Bardaktaki içeceğin yüzeyine açık hava basıncı etki etmez.\nIII. Ağzımla pipetin içindeki havayı azalttığımda pipetin içindeki basınç dışarıdakinden küçük olur.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız III", "I ve II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [null, "I yanlış: İçerideki basınç küçük, dışarıdaki büyüktür. II de yanlıştır.", "I yanlış: Meyve suyu, dışarıdaki basınç içeridekinden büyük olduğu için yükselir.", "II yanlış: Açık hava basıncı içeceğin yüzeyine de etki eder; içeceği pipette yükselten odur."],
  aciklama: `Adım 1: I. yargı: İçecek yükselirken pipetin içindeki basınç dışarıdakinden küçüktür; bu yüzden dışarıdaki basınç içeceği iter. I yanlış.
Adım 2: II. yargı: Açık hava basıncı içeceğin yüzeyine de etki eder; içeceği pipette yükselten odur. II yanlış.
Adım 3: III. yargı: Pipetteki havayı azaltmak içerideki basıncı küçültür. III doğru.
Sık yapılan hata: İçerideki basıncın daha büyük olduğunu sanmak ya da "çekiyor" demek.
Cevap A.`
},
{
  id: "fen-sg-054",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir araştırmacı, aynı tatlı sudan oluşan iki gölde ölçüm yapacaktır. K gölü deniz seviyesinde, L gölü ise 2000 m yükseklikte bir dağdadır. Araştırmacı kolundaki ölçerle, her iki gölde de su yüzeyinden 5 m aşağıda, bulunduğu yere etki eden toplam basıncı (açık hava basıncı + su basıncı) ölçecektir. **L gölündeki toplam basınç ve bunun nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["K gölündekinden büyüktür, çünkü L gölü daha yüksektedir", "K gölündekine eşittir, çünkü derinlik ve sıvı aynıdır", "K gölündekinden büyüktür, çünkü L gölünde su basıncı daha büyüktür", "K gölündekinden küçüktür, çünkü L gölünde açık hava basıncı daha küçüktür"],
  dogru: 3,
  hatalar: ["Yükseklikle basıncın arttığını sanma: Yükseldikçe açık hava basıncı azalır.", "Yalnız su basıncına bakma: Su basınçları eşittir ama toplam basınca açık hava basıncı da katılır.", "Su basıncını farklı sanma: İki gölde sıvı ve derinlik aynıdır; su basınçları eşittir.", null],
  aciklama: `Adım 1: Toplam basınç = açık hava basıncı + suyun basıncı. Su yüzeyindeki açık hava basıncı suyun içine de iletilir.
Adım 2: İki gölde de sıvı (tatlı su) ve derinlik (5 m) aynı olduğundan suyun basınçları eşittir.
Adım 3: L gölü yüksekte olduğundan açık hava basıncı daha küçüktür; toplam basınç K gölündekinden küçük olur.
Sık yapılan hata: Yalnız su basıncına bakıp eşit demek.
Cevap D.`
},
{
  id: "fen-sg-055",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Şekildeki ağzı açık silindir kapta altta 10 cm yüksekliğinde su, üstte 10 cm yüksekliğinde zeytinyağı vardır; sıvılar karışmamıştır. Zeytinyağının yoğunluğu suyunkinden küçüktür. Aynı kap 20 cm yüksekliğe kadar yalnızca suyla doldurulsaydı tabandaki basınç P_{su}, yalnızca zeytinyağıyla doldurulsaydı P_{yağ} olurdu. Şekildeki kapta tabandaki basınç P_{K}'dir. **P_{su}, P_{yağ} ve P_{K} arasındaki ilişki aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 400 240" role="img" aria-label="Alt yarısında 10 cm su, üst yarısında 10 cm zeytinyağı bulunan kap"><rect x="101" y="21" width="158" height="99" fill="var(--vurgu2)" fill-opacity="0.3"/><rect x="101" y="120" width="158" height="99" fill="var(--dolgu)"/><path d="M100 10 V220 H260 V10" fill="none" stroke="currentColor" stroke-width="2"/><line x1="100" y1="120" x2="260" y2="120" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><g fill="currentColor" font-size="15"><text x="275" y="65">zeytinyağı</text><text x="275" y="85">10 cm</text><text x="275" y="165">su</text><text x="275" y="185">10 cm</text></g></svg>`,
  secenekler: ["P_{K} > P_{su} > P_{yağ}", "P_{su} > P_{K} > P_{yağ}", "P_{yağ} > P_{K} > P_{su}", "P_{su} = P_{K} = P_{yağ}"],
  dogru: 1,
  hatalar: ["Tabakaları toplama hatası: Yağ tabakası suyun bir bölümünün yerini aldığı için P_{K}, tamamen su dolu kaptakinden büyük olamaz.", null, "Yoğunluğu ters yorumlama: Yağ sudan az yoğundur; tamamen yağ dolu kapta tabandaki basınç en küçüktür.", "Aynı yüksekliği aynı basınç sanma: Yükseklik aynı olsa da sıvıların yoğunluğu farklıdır; basınç da farklıdır."],
  aciklama: `Adım 1: Üç durumda da sıvı yüksekliği 20 cm'dir; fark yalnızca sıvının cinsindedir.
Adım 2: Suyun yoğunluğu büyük olduğundan yalnızca su dolu kapta basınç en büyüktür: P_{su}. Yalnızca yağ dolu kapta ise en küçüktür: P_{yağ}.
Adım 3: Şekildeki kapta 10 cm su ve 10 cm yağ vardır; yağ, suyun yarısının yerini aldığı için basınç P_{su}'dan küçük, P_{yağ}'dan büyüktür: P_{su} > P_{K} > P_{yağ}.
Sık yapılan hata: Yağ sudan hafif diye üstteki tabakanın basınca katkısını yok saymak. Yağ da basınç uygular.
Cevap B.`
},
{
  id: "fen-sg-056",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir berber koltuğunun yüksekliği, ayakla basılan bir pedalla ayarlanmaktadır. Pedala basılınca dar piston kapalı sistemdeki yağı iter ve yağ, koltuğa bağlı geniş pistonu yukarı kaldırır. Sistem sızdırmazdır.\nI. Pedala basılınca yağın basıncı yalnızca pistonlara iletilir; borunun yan duvarlarına basınç uygulanmaz.\nII. Pedala uygulanan kuvvet artırılırsa kapalı sistemdeki yağın her noktasında basınç artar.\nIII. Sistemde yağ yerine su kullanılsaydı basınç yine sıvının her noktasına aynen iletilirdi.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız II", "II ve III", "I ve III", "I, II ve III"],
  dogru: 1,
  hatalar: ["Eksik değerlendirme: II doğrudur; III de doğrudur, çünkü Pascal prensibi bütün sıvılar için geçerlidir.", null, "I yanlış: Sıvı, basıncı kabın her yüzeyine uygular; boru duvarları da bunun dışında değildir.", "I yanlış: Sıvı basıncı yalnızca pistonlara değil, temas ettiği bütün yüzeylere uygular."],
  aciklama: `Adım 1: I. yargı: Sıvılar bulundukları kabın her yüzeyine, yani boru duvarlarına da basınç uygular. Basıncın yalnızca pistonlara gittiğini söylemek yanlıştır. I yanlış.
Adım 2: II. yargı: Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir. Pedal kuvveti artınca yağdaki basınç her yerde artar. II doğru.
Adım 3: III. yargı: Pascal prensibi yağa özgü değildir; kapalı kaptaki her sıvı için geçerlidir. III doğru.
Sık yapılan hata: Basıncın yalnızca itilen yöne ya da pistonlara iletildiğini sanmak.
Cevap B.`
},
{
  id: "fen-sg-057",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "K ve L kaplarının ikisinin de ağzı açıktır. K kabında X sıvısı, L kabında Y sıvısı vardır. K kabındaki A noktası X sıvısının yüzeyinden 20 cm, L kabındaki B noktası Y sıvısının yüzeyinden 15 cm aşağıdadır. X sıvısının yoğunluğu Y sıvısınınkinden küçüktür; yoğunluk değerleri, sıvı miktarları ve kapların biçimleri bilinmemektedir. **A ve B noktalarındaki sıvı basınçları için aşağıdakilerden hangisi söylenir?**",
  gorsel: null,
  secenekler: ["P_{A} > P_{B}, çünkü A daha derindedir","P_{A} = P_{B}, çünkü iki kabın ağzı da açıktır","P_{A} < P_{B}, çünkü B'deki sıvı daha yoğundur","Kesin söylenemez; etkenler zıt yöndedir"],
  dogru: 3,
  hatalar: ["Yalnız derinliğe bakma: A daha derindir ama X sıvısı daha az yoğundur; tek etkene bakılarak karar verilemez.", "Eşitliği varsayma: Derinlik ve sıvı cinsi farklıdır; eşitlik için bir neden yoktur.", "Yalnız yoğunluğa bakma: Y sıvısı daha yoğundur ama B daha sığdır; tek etkene bakılarak karar verilemez.", null],
  aciklama: `Adım 1: A noktası 20 cm derinlikte, B noktası 15 cm derinliktedir; A daha derindir (A'nın basıncını artırır).
Adım 2: A, yoğunluğu daha küçük olan X sıvısında; B ise daha yoğun olan Y sıvısındadır (B'nin basıncını artırır).
Adım 3: İki etken zıt yönde olduğundan ve yoğunlukların oranı bilinmediğinden hangisinin büyük olduğu bu verilerle kesin söylenemez.
Sık yapılan hata: Tek etkene bakıp sonuca varmak. Etkenler aynı yönde olsaydı sonuç kesin olurdu.
Cevap D.`
},
{
  id: "fen-sg-058",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Fen kulübünde, içine şişirilmemiş bir balon konulmuş ağzı kapalı bir cam kavanoz kullanılmıştır. Balonun ağzı kavanozun kapağındaki delikten dışarıya açılmaktadır. Kavanozun içindeki hava bir pompayla dışarı çekildikçe balon kavanozun içinde şişmiştir. **Balonun şişmesinin nedeni aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Balonun içindeki hava basıncının, kavanozun içindeki hava basıncından büyük olması", "Kavanozun içindeki hava basıncının, balonun içindeki hava basıncından büyük olması", "Pompanın balonun içine hava üflemesi", "Kavanozun içindeki havanın zamanla ısınması"],
  dogru: 0,
  hatalar: [null, "Büyüklüğü ters yorumlama: Pompa kavanozun içindeki basıncı küçültür; kavanozdaki basınç balondakinden küçüktür.", "Gözlem dışı varsayım: Pompa kavanozdan hava çeker, balona hava üflemez.", "İlgisiz neden: Isınma bu düzenekte rol oynamaz; balonu şişiren basınç farkıdır."],
  aciklama: `Adım 1: Balonun ağzı dışarıya açık olduğu için balonun içindeki hava, açık hava basıncındadır.
Adım 2: Pompa kavanozdaki havayı çektikçe kavanozun içindeki basınç küçülür.
Adım 3: Balonun içindeki basınç kavanozdakinden büyük olduğu için balon genişler, yani şişer.
Sık yapılan hata: Pompanın balona hava verdiğini sanmak.
Cevap A.`
},
{
  id: "fen-sg-059",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir baraj gölünün duvarı, tabana doğru gittikçe kalınlaşmaktadır. Mühendisler bu durumla ilgili şu yargılarda bulunmuştur:\nI. Duvarın tabanda kalın yapılmasının nedeni, derinlik arttıkça sıvı basıncının artmasıdır.\nII. Aynı derinlikte, gölün daha geniş olması duvara etki eden sıvı basıncını değiştirmez.\nIII. Sıvı, duvarın yüzeyine yalnızca yukarıdan aşağıya doğru basınç uygular.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 2,
  hatalar: ["Eksik değerlendirme: I doğrudur ama II de doğrudur; genişlik basıncı değiştirmez.", "Eksik değerlendirme: II doğrudur ama I de doğrudur.", null, "III yanlış: Sıvı, duvara dik doğrultuda yatay yönde de basınç uygular; yalnızca aşağıya etki etmez."],
  aciklama: `Adım 1: I. yargı: Derinlik arttıkça sıvı basıncı artar; tabandaki duvar daha büyük basınca dayanmalıdır. I doğru.
Adım 2: II. yargı: Gölün genişliği sıvı basıncını değiştirmez; yalnızca derinlik ve sıvının cinsi belirler. II doğru.
Adım 3: III. yargı: Sıvılar kabın her yüzeyine, duvarlara da basınç uygular. III yanlış.
Sık yapılan hata: Sıvının yalnızca tabana basınç yaptığını sanmak.
Cevap C.`
},
{
  id: "fen-sg-060",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Özdeş iki plastik şişenin yan yüzeylerinde, tabandan aynı yükseklikte ve aynı büyüklükte birer delik vardır. Şişelerden birine su, diğerine yoğunluğu sudan büyük olan bir tuz çözeltisi aynı yüksekliğe kadar doldurulmuştur. Delikler kapalı tutulmaktadır. **Deliklerin hizasında sıvıların uyguladığı basınçlar için aşağıdakilerden hangisi söylenir?**",
  gorsel: null,
  secenekler: ["Su bulunan şişedeki daha büyüktür, çünkü su daha akıcıdır", "İkisinde de eşittir, çünkü sıvı yükseklikleri eşittir", "Tuz çözeltisi bulunan şişedeki daha küçüktür, çünkü çözünen tuz sıvının yüksekliğini azaltır", "Tuz çözeltisi bulunan şişedeki daha büyüktür, çünkü tuz çözeltisi daha yoğundur"],
  dogru: 3,
  hatalar: ["Akışkanlığı etken sanma: Basıncı sıvının akıcılığı değil, derinliği ve yoğunluğu belirler.", "Cinsin etkisini yok sayma: Derinlik eşit olsa da sıvıların yoğunluğu farklıysa basınç da farklıdır.", "Çözünmeyi derinlik sanma: Yükseklikler eşit verilmiştir; tuz çözününce değişen yükseklik değil yoğunluktur ve basınç büyür.", null],
  aciklama: `Adım 1: İki deliğin derinliği aynıdır (aynı yükseklikte delik, aynı yükseklikte sıvı).
Adım 2: Derinlik eşitken basıncı sıvının cinsi, yani yoğunluğu belirler. Yoğunluğu büyük sıvı aynı derinlikte daha büyük basınç yapar.
Adım 3: Tuz çözeltisinin yoğunluğu suyunkinden büyük olduğundan, deliğin hizasında tuz çözeltisinin uyguladığı basınç daha büyüktür.
Sık yapılan hata: Aynı yükseklik, aynı basınç demek. Sıvının cinsi de basıncı değiştirir.
Cevap D.`
},
{
  id: "fen-sg-061",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir otoparkta araçları üst kata çıkaran hidrolik platformda, pompaya bağlı dar piston kapalı sistemdeki yağı iter ve yağ, platformu taşıyan geniş pistonu yukarı doğru hareket ettirir. Dar pistona uygulanan kuvvetle platform, üzerindeki küçük bir araçla birlikte dengede kalmaktadır. Platformun üzerine bu kez daha ağır bir araç alınmıştır ve platformun aynı yükseklikte dengede kalması istenmektedir. **Bu durumda aşağıdakilerden hangisi gerçekleşir?**",
  gorsel: null,
  secenekler: ["Dar pistona uygulanan kuvvet artırılır; sıvıdaki basınç bütün noktalarda artar", "Dar pistona uygulanan kuvvet azaltılır; sıvıdaki basınç azalır", "Dar pistona uygulanan kuvvet değişmez; geniş pistonun yüzeyi büyür", "Dar pistona uygulanan kuvvet değişmez; basınç yalnızca geniş pistonun altında artar"],
  dogru: 0,
  hatalar: [null, "Yönü ters yorumlama: Daha ağır yükü dengelemek için daha büyük basınç gerekir; kuvvet azaltılmaz.", "Piston yüzeyini değişken sanma: Pistonların yüzeyi sabittir; değişen uygulanan kuvvettir.", "Pascal prensibini yanlış bilme: Basınç sıvının her noktasına aynen iletilir; yalnız geniş pistonun altında artmaz."],
  aciklama: `Adım 1: Geniş pistona etki eden yukarı kuvvet, sıvı basıncı ile geniş pistonun yüzeyinin çarpımına karşılık gelir. Yüzey sabit olduğundan daha ağır yükü dengelemek için sıvı basıncı artmalıdır.
Adım 2: Sıvıdaki basıncı, dar pistona uygulanan kuvvet belirler; basıncı artırmak için dar pistona uygulanan kuvvet artırılmalıdır.
Adım 3: Artan basınç, Pascal prensibine göre sıvının her noktasına aynen iletilir.
Sık yapılan hata: Basıncı yalnızca geniş pistonun altında artıyor sanmak.
Cevap A.`
},
{
  id: "fen-sg-062",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Fen dersinde şişirilmiş bir voleybol topu incelenirken öğrenciler gazların basıncıyla ilgili şu yargılarda bulunmuştur:\nI. Havanın ağırlığı olmadığı için hava basınç uygulamaz.\nII. Topun içindeki hava, topun bütün iç yüzeylerine basınç uygular.\nIII. Açık hava basıncı yalnızca yukarıdan aşağıya doğru etki eder.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "Yalnız II", "II ve III"],
  dogru: 2,
  hatalar: ["Gazları ağırlıksız sanma: Havanın da ağırlığı vardır ve basınç uygular; I yanlıştır.", "I ve III yanlış: Hava ağırlıklıdır ve açık hava basıncı her yöne etki eder.", null, "III yanlış: Açık hava basıncı yalnızca yukarıdan aşağıya değil, her yöne etki eder."],
  aciklama: `Adım 1: I. yargı: Havanın da ağırlığı vardır ve gazlar basınç uygular. I yanlış.
Adım 2: II. yargı: Gazlar bulundukları kabın bütün iç yüzeylerine her yönde basınç uygular; top her yanından gerilir. II doğru.
Adım 3: III. yargı: Açık hava basıncı Dünya'yı saran hava tabakasının ağırlığından doğar ve her yöne etki eder. III yanlış.
Sık yapılan hata: Gazların basınç uygulamadığını ya da yalnızca bir yöne uyguladığını sanmak.
Cevap C.`
},
{
  id: "fen-sg-063",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir öğrenci, yoğunlukları bilinmeyen X, Y ve Z sıvılarında aynı basınç sensörüyle ölçüm yapmış ve sonuçları tabloya yazmıştır. Ölçüm değeri, basınç arttıkça büyür. **Tabloya göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>Derinlik (cm)</th><th>Ölçüm değeri</th></tr><tr><td>X</td><td>12</td><td>36</td></tr><tr><td>Y</td><td>18</td><td>36</td></tr><tr><td>Z</td><td>12</td><td>30</td></tr></table>`,
  secenekler: ["Y sıvısının yoğunluğu X sıvısınınkinden büyüktür", "X sıvısının yoğunluğu hem Y hem Z sıvısınınkinden büyüktür", "Z sıvısının yoğunluğu X sıvısınınkinden büyüktür", "Y sıvısının yoğunluğu Z sıvısınınkinden büyüktür"],
  dogru: 1,
  hatalar: ["Ölçüm değerini derinlikle karıştırma: Y'de aynı değer daha derinde ölçülmüştür; bu Y'nin daha az yoğun olduğunu gösterir.", null, "Aynı derinlikte karşılaştırmayı ters yorumlama: Aynı derinlikte X'in değeri Z'nin değerinden büyüktür; X daha yoğundur.", "Sonuçları yanlış karşılaştırma: Tablodan Y'nin Z'den yoğun olduğu sonucuna ulaşılamaz."],
  aciklama: `Adım 1: X ve Z aynı derinliktedir (12 cm). X'in ölçüm değeri büyük olduğundan X, Z'den yoğundur.
Adım 2: X'in 12 cm'de ölçtüğü değerle Y'nin 18 cm'de ölçtüğü değer eşittir. Y daha derin olduğu hâlde aynı basıncı verdiğine göre daha az yoğundur; X, Y'den yoğundur.
Adım 3: Yani X hem Y'den hem Z'den yoğundur.
Sık yapılan hata: Derinliği hesaba katmadan yalnız ölçüm değerlerine bakmak.
Cevap B.`
},
/* ===================== DÜZEY 4 ===================== */
{
  id: "fen-sg-064",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Aynı bölgede bulunan iki gölden biri tatlı su, diğeri tuzlu su gölüdür; iki gölün yüzeyine etki eden açık hava basıncı eşittir. Tuzlu su gölünün suyunun yoğunluğu, tatlı su gölünün suyunun yoğunluğundan büyüktür. Bir araştırmacı, tabloda konumları verilen K, L, M ve N noktalarında kolundaki ölçerle toplam basıncı (açık hava basıncı + su basıncı) okuyacaktır. Derinlik, her gölde su yüzeyinden aşağı doğru ölçülmüştür. **Buna göre toplam basınçlar için aşağıdakilerden hangisi kesinlikle doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Nokta</th><th>Göl</th><th>Derinlik (m)</th></tr><tr><td>K</td><td>Tatlı su</td><td>6</td></tr><tr><td>L</td><td>Tatlı su</td><td>3</td></tr><tr><td>M</td><td>Tuzlu su</td><td>3</td></tr><tr><td>N</td><td>Tuzlu su</td><td>4</td></tr></table>`,
  secenekler: ["P_{M} > P_{K}", "P_{N} > P_{L}", "P_{L} > P_{M}", "P_{K} = P_{N}"],
  dogru: 1,
  hatalar: ["Tek etkene bakma: M daha yoğun sıvıdadır ama K daha derindir; etkenler zıt yöndedir, kesin karşılaştırma yapılamaz.", null, "Yoğunluğu yok sayma: L ile M aynı derinliktedir; M'nin sıvısı daha yoğun olduğundan P_{M} büyüktür, P_{L} değil.", "Eşitliği varsayma: K daha derin, N daha yoğun sıvıdadır; etkenler zıt yöndedir, eşit olmaları gerekmez."],
  aciklama: `Adım 1: Toplam basınç = açık hava basıncı + su basıncı. Açık hava basıncı iki gölde de eşit olduğundan karşılaştırma su basıncına iner. Su basıncı derinlikle ve sıvının yoğunluğuyla artar.
Adım 2: N noktası, L noktasından hem daha derindedir (4 m > 3 m) hem de daha yoğun sıvıdadır (tuzlu su). İki etken de aynı yönde olduğundan P_{N} > P_{L} kesindir.
Adım 3: M ile K'de, K'nin derinliği büyük, M'nin sıvısı yoğundur; etkenler zıt yöndedir, kesin karar verilemez. K ile N için de durum aynıdır. L ile M aynı derinliktedir ve M yoğun sıvıda olduğundan P_{M} > P_{L} olur; yani P_{L} > P_{M} yanlıştır.
Sık yapılan hata: Zıt yönlü etkenlerde kesin karar vermek.
Cevap B.`
},
{
  id: "fen-sg-065",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 4,
  soru: "Tamamen su dolu, kapalı bir kabın üst yüzeyinde sürtünmesiz hareket edebilen bir piston bulunmaktadır. Kabın yan yüzeyinde, pistonun biraz altında bir K deliği, tabana yakın bir yerde ise bir L deliği vardır. Delikler kapalıyken piston aşağı doğru itilmektedir.\nI. Pistonun uyguladığı basınç, kaptaki suyun her noktasına aynen iletilir.\nII. Piston itildiğinde K ve L deliklerine etki eden sıvı basınçları artar.\nIII. Piston itildiğinde yalnızca pistonun hemen altındaki noktalarda basınç artar.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "I ve II"],
  dogru: 3,
  hatalar: ["Eksik değerlendirme: I doğrudur ama piston itilince delikteki basınçlar da artar; II de doğrudur.", "III yanlış: Basınç yalnızca pistonun yakınına değil, sıvının her noktasına iletilir.", "III yanlış: Pistonun uyguladığı basınç her noktaya iletilir; yalnızca yakındaki noktalara gitmez.", null],
  aciklama: `Adım 1: I. yargı: Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir. I doğru.
Adım 2: II. yargı: Bu ek basınç K ve L deliklerine de ulaşır; onlardaki toplam basınç artar. II doğru.
Adım 3: III. yargı: Basınç yalnızca pistonun yakınına değil, her noktaya iletilir. III yanlış.
Sık yapılan hata: Eklenen basıncın yalnızca itilen bölgeye gittiğini sanmak. Derindeki noktada yine daha büyük basınç vardır, ama eklenen kısım her noktada aynıdır.
Cevap D.`
},
{
  id: "fen-sg-066",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 4,
  soru: "Bir otomobilin hidrolik fren sisteminde pedala bağlı dar ana piston, fren yağını borularla ön tekerleğin geniş silindirine ve arka tekerleğin dar silindirine göndermektedir. Ön silindire giden boru, arka silindire giden borudan daha uzun ve kıvrımlıdır. Sürücü ilk frende pedala belli bir kuvvetle, ikinci frende daha büyük bir kuvvetle basmıştır. Silindirlerin pistonları aynı yüksekliktedir. **Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["Her frende iki silindirdeki basınç eşittir; ikinci frende iki basınç da ilkinden büyüktür", "İlk frende ön silindirdeki basınç, borusu uzun olduğu için arka silindirdekinden küçüktür", "İkinci frende yalnızca ana pistonun altındaki basınç, ilkine göre artar", "Her frende ön silindirdeki basınç, yüzeyi geniş olduğu için arka silindirdekinden büyüktür"],
  dogru: 0,
  hatalar: [null, "Boru uzunluğunu etken sanma: Borunun uzunluğu ve kıvrımı iletilen basıncı değiştirmez.", "Basıncın yayılmasını yok sayma: Artan basınç ana pistonun altında kalmaz, yağın her noktasına iletilir.", "Basınçla kuvveti karıştırma: Ön silindirde büyük olan basınç değil kuvvettir; basınç iki silindirde eşittir."],
  aciklama: `Adım 1: Kapalı sistemde yağa uygulanan basınç, Pascal prensibine göre her noktaya aynen iletilir. Pistonlar aynı yükseklikte olduğundan ön ve arka silindirdeki basınç eşittir.
Adım 2: Borunun uzunluğu ya da kıvrımlı olması iletilen basıncı değiştirmez.
Adım 3: Sürücü pedala daha büyük kuvvetle basarsa yağdaki basınç artar; bu artış iki silindire de ulaşır. Ön silindirde büyük olan şey basınç değil, geniş yüzey nedeniyle oluşan kuvvettir.
Sık yapılan hata: Geniş yüzeyde basıncın da büyük olduğunu sanmak.
Cevap A.`
},
{
  id: "fen-sg-067",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Bir öğrenci, aynı kapta K, L ve M sıvılarında basıncı farklı derinliklerde ölçerek her sıvı için derinlik–basınç grafiğini çizmiştir. Kesikli çizgi, belirli bir P basıncını göstermektedir. Üç sıvı için de ölçümler aynı sensörle yapılmıştır. **Grafiğe göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 420 290" role="img" aria-label="Derinlik–basınç grafiği: K sıvısının doğrusu en dik, M sıvısının doğrusu en yatay; kesikli çizgi P basıncını gösteriyor"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M60 250 H390"/><path d="M60 250 V30"/></g><g stroke="currentColor" stroke-width="3" fill="none"><line x1="60" y1="250" x2="170" y2="50" stroke="var(--vurgu)"/><line x1="60" y1="250" x2="260" y2="50" stroke="var(--vurgu2)"/><line x1="60" y1="250" x2="350" y2="50"/></g><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" fill="none"><line x1="60" y1="130" x2="234" y2="130"/><line x1="126" y1="130" x2="126" y2="250"/><line x1="180" y1="130" x2="180" y2="250"/><line x1="234" y1="130" x2="234" y2="250"/></g><g fill="currentColor" font-size="15"><text x="176" y="46">K</text><text x="266" y="46">L</text><text x="356" y="46">M</text><text x="35" y="135">P</text><text x="120" y="270">K</text><text x="174" y="270">L</text><text x="228" y="270">M</text><text x="320" y="272">Derinlik</text><text x="68" y="24">Basınç</text></g></svg>`,
  secenekler: ["Yoğunluk sıralaması M > L > K'dir; aynı basınç için en derine K'de inilir", "Yoğunluk sıralaması K > L > M'dir; aynı basınç için en derine K'de inilir", "Yoğunluk sıralaması K > L > M'dir; aynı basınç için en derine M'de inilir", "Yoğunluk üç sıvıda da aynıdır; çizgilerin farkı kabın biçiminden kaynaklanır"],
  dogru: 2,
  hatalar: ["Eğimi ters yorumlama: Doğrusu en dik olan sıvı aynı derinlikte en büyük basıncı verir; yani en yoğundur, K'dir.", "Eğimi doğru yorumlayıp derinliği ters okuma: K en yoğun olduğundan P basıncına en sığda ulaşır; en derine M'de inilir.", null, "Aynı kap bilgisini yok sayma: Öğrenci ölçümleri aynı kapta yapmıştır; çizgilerin farkı sıvının cinsinden kaynaklanır."],
  aciklama: `Adım 1: Aynı derinlikte daha büyük basınç veren sıvı daha yoğundur. K'nin doğrusu en diktir; K en yoğun, M en az yoğun sıvıdır: K > L > M.
Adım 2: Kesikli P çizgisi, K'yi en küçük derinlikte, M'yi en büyük derinlikte keser. Yani aynı P basıncına ulaşmak için en derine, en az yoğun olan M'de inilir.
Adım 3: Ölçümler aynı kapta yapıldığı için çizgilerin farkı sıvının cinsindendir, kabın biçiminden değil.
Sık yapılan hata: Eğimi ters yorumlamak ya da P çizgisinde derinliği ters okumak.
Cevap C.`
},
{
  id: "fen-sg-068",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Selma, taban basıncını incelemek için dört kapta ölçüm yapmıştır. Her ölçümde özdeş sensör kabın tabanına konmuştur. Sonuçlar tabloda verilmiştir.\nI. Kabın biçimi, taban basıncını değiştirir.\nII. Sıvının cinsi, taban basıncını değiştirir.\nIII. Su dolu silindir biçimli K ve L kaplarında sıvı yüksekliği aynı olduğu için sensör değerleri de aynıdır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Biçim</th><th>Sıvı</th><th>Sıvı yüksekliği</th><th>Sensör değeri</th></tr><tr><td>K</td><td>Silindir (dar)</td><td>Su</td><td>20 cm</td><td>20</td></tr><tr><td>L</td><td>Silindir (geniş)</td><td>Su</td><td>20 cm</td><td>20</td></tr><tr><td>M</td><td>Silindir (dar)</td><td>Zeytinyağı</td><td>20 cm</td><td>17</td></tr><tr><td>N</td><td>Huni</td><td>Su</td><td>20 cm</td><td>20</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "Yalnız III"],
  dogru: 2,
  hatalar: ["Kap biçimi yanılgısı: K (silindir) ve N (huni) yalnızca biçim bakımından farklıdır ve değerleri eşittir; biçim basıncı değiştirmemiştir. I yanlış.", "I yanlış: Biçimi farklı K ve N'de değer aynıdır. II doğru olsa da seçenek hatalıdır.", null, "Eksik değerlendirme: III doğrudur ama K ile M'nin farkı sıvı cinsinin etkisini gösterir; II de doğrudur."],
  aciklama: `Adım 1: I. yargı: K (silindir) ve N (huni) aynı sıvı ve aynı yükseklikte aynı değeri vermiştir; kap biçimi basıncı değiştirmemiştir. I yanlış.
Adım 2: II. yargı: K ile M'de biçim ve yükseklik aynıdır, yalnızca sıvı farklıdır ve değerler farklıdır; sıvı cinsi basıncı değiştirir. II doğru.
Adım 3: III. yargı: K ve L'nin ikisi de su dolu silindirdir, sıvı yükseklikleri aynıdır ve sensör değerleri eşittir (L daha geniş olsa bile). III doğru.
Sık yapılan hata: Geniş ya da farklı biçimli kapta basıncın da farklı olacağını sanmak.
Cevap C.`
},
{
  id: "fen-sg-069",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Aslı, \"Sıvı basıncı kaptaki sıvı miktarına bağlıdır.\" hipotezini test etmek istemektedir. Üç kap hazırlamıştır: A kabı dar bir silindirdir ve 10 cm yüksekliğe kadar su ile doludur. B kabı geniş bir silindirdir ve yine 10 cm yüksekliğe kadar su ile doludur; B'deki su, A'dakinden çok daha fazladır. C kabı A kabının özdeşidir ve 20 cm yüksekliğe kadar su ile doludur. Aslı her kabın tabanına özdeş sensör yerleştirecektir. **Aslı hangi iki kabı karşılaştırmalıdır ve beklenen sonuç hakkında aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["A ve B; basınçlar eşit çıkar, hipotez desteklenmez","A ve C; basınçlar farklı çıkar, hipotez desteklenir","B ve C; basınçlar eşit çıkar, hipotez desteklenmez","A ve B; basınçlar farklı çıkar, hipotez desteklenir"],
  dogru: 0,
  hatalar: [null,"İki değişkeni birden değiştirme: A ve C'de hem su miktarı hem yükseklik farklıdır; hangisinin etkisi olduğu anlaşılmaz.","İki değişkeni birden değiştirme: B ve C'de hem miktar hem yükseklik farklıdır; basınçlar da eşit çıkmaz.","Beklenen sonucu yanlış tahmin etme: Miktarı farklı, yüksekliği aynı kapların basıncı eşittir; hipotez desteklenmez."],
  aciklama: `Adım 1: Hipotezde sınanan değişken sıvı miktarıdır. Bu yüzden yalnızca miktar farklı, öteki her şey (sıvı ve yükseklik) aynı olmalıdır. A ve B'de yükseklik ve sıvı aynıdır, miktar farklıdır.
Adım 2: A ve C'de ise yükseklik de farklıdır; B ve C'de hem miktar hem yükseklik farklıdır. Bu çiftler hipotezi test etmez.
Adım 3: A ve B'de sıvı yükseklikleri eşit olduğundan basınçlar eşit çıkar. Miktar farklı olsa da basınç değişmediği için hipotez desteklenmez.
Sık yapılan hata: Miktar farkının mutlaka basınç farkı yaratacağını sanmak.
Cevap A.`
},
{
  id: "fen-sg-070",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Ece, iki pipetle aynı meyve suyunu içmeyi denemiştir. K pipeti sağlamdır. L pipetinin ise içeceğin yüzeyinin üstünde kalan kısmında küçük bir delik vardır. Ece, K pipetiyle içeceği kolayca içmiş; L pipetiyle içeceğin yükselmediğini görmüş, L pipetinin deliğini parmağıyla kapatınca içeceğin pipette yükseldiğini görmüştür. **Bu gözleme göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["L pipetinde delik açıkken içerideki basınç dışarıdakinden küçük kalır; içecek ağırlığı yüzünden yükselmez", "L pipetinde delik açıkken içerideki basınç dışarıdaki açık hava basıncına yaklaşır; içecek bu yüzden yükselmez", "L pipetinde delik kapatılınca içerideki basınç artar; içecek bu yüzden yükselir", "L pipetinde delik açıkken içerideki basınç dışarıdakinden büyük olur; içecek bu yüzden yükselmez"],
  dogru: 1,
  hatalar: ["Basıncı doğru, nedeni yanlış bulma: Delik açıkken dışarıdan giren hava içerideki basıncı küçük bırakmaz; içeceğin yükselmemesinin nedeni basınç farkının oluşmamasıdır.", null, "Yönü ters bilme: Delik kapatılınca ağızla azaltılan basınç dışarıdakinden küçük olur; içerideki basınç artmaz, azalır.", "Büyüklüğü ters yorumlama: Giren hava, içerideki basıncı dışarıdakine yaklaştırır; dışarıdakinden büyük yapmaz."],
  aciklama: `Adım 1: Pipetle içecek içilirken ağızla pipetin içindeki basınç azaltılır. İçeceğin yüzeyine etki eden açık hava basıncı, pipetin içindeki basınçtan büyük olduğu için içeceği pipete iter.
Adım 2: L pipetinin deliği açıkken dışarıdan hava girer; pipetin içindeki basınç açık hava basıncına yakın kalır. İçeriyle dışarının basıncı yaklaşık eşit olunca içeceği yukarı iten bir basınç farkı oluşmaz ve içecek yükselmez.
Adım 3: Delik kapatılınca içerideki basınç ağızla yeniden dışarıdakinden küçük yapılabilir; basınç farkı içeceği yukarı iter.
Sık yapılan hata: İçecek yükselirken pipetin içinde basıncın arttığını sanmak. İçeceği yükselten, içerideki basıncın dışarıdakinden küçük olmasıdır.
Cevap B.`
},
{
  id: "fen-sg-071",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Bir öğrenci, fen defterine sıvı ve gaz basıncıyla ilgili şu notları yazmıştır:\nI. Deniz seviyesinden 2500 m yükseklikteki bir dağ kasabasında açık hava basıncı, deniz kıyısındakinden büyüktür.\nII. Bir gölde 5 m derinlikte sıvı basıncı, aynı gölde 3 m derinlikteki sıvı basıncından küçüktür.\nIII. Su dolu kapalı bir şırıngada piston itilince oluşan ek basınç, suyun her noktasına aynen iletilir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "Yalnız III"],
  dogru: 3,
  hatalar: ["Yönü ters bilme: Yükseldikçe açık hava basıncı azalır; I yanlıştır.", "I ve II yanlış: Kasabada açık hava basıncı daha küçüktür; derinlik arttıkça da sıvı basıncı artar.", "II yanlış: Aynı sıvıda derinlik arttıkça basınç artar; 5 m derinlikteki basınç daha büyüktür.", null],
  aciklama: `Adım 1: I. yargı: Yükseklere çıkıldıkça üstte kalan hava tabakası incelir ve açık hava basıncı azalır; kasabadaki basınç deniz kıyısındakinden küçüktür. I yanlış.
Adım 2: II. yargı: Aynı sıvıda derinlik arttıkça sıvı basıncı artar; 5 m derinlikteki basınç, 3 m derinlikten büyüktür. II yanlış.
Adım 3: III. yargı: Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir. III doğru.
Sık yapılan hata: Yüksekte açık hava basıncının arttığını ya da derinlikte sıvı basıncının azaldığını sanmak.
Cevap D.`
},
{
  id: "fen-sg-072",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Şekildeki kap, ortadaki ince bir bölmeyle iki parçaya ayrılmıştır. Bölmenin en altındaki delik, kapalı bir musluk içerir. Sol bölmede 25 cm yüksekliğe kadar su, sağ bölmede 25 cm yüksekliğe kadar zeytinyağı vardır. Zeytinyağının yoğunluğu suyun yoğunluğundan küçüktür ve iki bölmenin ağzı açıktır. Musluk açılıyor. **Bu durumda ne gözlenir?**",
  gorsel: `<svg viewBox="0 0 400 270" role="img" aria-label="Ortadan bölmeyle ayrılmış kap: solda 25 cm su, sağda 25 cm zeytinyağı, bölmenin altında musluk"><rect x="61" y="50" width="139" height="170" fill="var(--dolgu)"/><rect x="200" y="50" width="139" height="170" fill="var(--vurgu2)" fill-opacity="0.3"/><path d="M60 30 V220 H340 V30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="200" y1="30" x2="200" y2="220" stroke="currentColor" stroke-width="3"/><circle cx="200" cy="205" r="8" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="15"><text x="105" y="125">su</text><text x="85" y="147">25 cm</text><text x="235" y="125">zeytinyağı</text><text x="245" y="147">25 cm</text><text x="168" y="250">musluk</text></g></svg>`,
  secenekler: ["Yağ su bölmesine akar, çünkü yağ sudan hafiftir", "Hiçbir yönde akış olmaz, çünkü iki sıvı karışmaz", "Hangi yönde akış olacağı söylenemez, çünkü bölmelerin genişliği bilinmiyor", "Su yağ bölmesine akar, çünkü musluk hizasında sol bölmedeki basınç daha büyüktür"],
  dogru: 3,
  hatalar: ["Hafifliği neden sanma: Yağ sudan hafiftir ama bu, yağ tarafındaki basıncın küçük olması anlamına gelir; akış büyük basınçtan küçüğe doğrudur.", "Karışmamayı akışsızlık sanma: Sıvılar karışmasa bile basınç farkı onları hareket ettirir.", "Genişliği etken sanma: Bölmelerin genişliği basıncı belirlemez; yükseklik ve cins belirler.", null],
  aciklama: `Adım 1: Musluğun bulunduğu hizada iki bölmede de sıvı derinliği aynıdır (25 cm); derinlik eşit.
Adım 2: Derinlik eşitken basıncı sıvının cinsi belirler. Su daha yoğun olduğundan sol bölmede musluk hizasındaki basınç daha büyüktür.
Adım 3: Sıvı, basıncın büyük olduğu taraftan küçük olduğu tarafa akar; su yağ bölmesine geçer.
Sık yapılan hata: Bölmelerin genişliğinin ya da sıvıların karışmamasının akışı belirlediğini sanmak.
Cevap D.`
},
{
  id: "fen-sg-073",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Ağzı açık K, L ve M kaplarındaki sıvıların cinsi ve yükseklikleri tabloda verilmiştir. X sıvısının yoğunluğu Y sıvısının yoğunluğundan büyüktür; kaplar ve sıvı miktarları farklı olabilir. Kapların tabanlarındaki sıvı basınçları P_{K}, P_{L} ve P_{M}'dir. **Aşağıdaki sıralamalardan hangisi __olamaz__?**",
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Sıvı</th><th>Sıvı yüksekliği</th></tr><tr><td>K</td><td>X</td><td>10 cm</td></tr><tr><td>L</td><td>Y</td><td>10 cm</td></tr><tr><td>M</td><td>Y</td><td>20 cm</td></tr></table>`,
  secenekler: ["P_{L} > P_{K} > P_{M}", "P_{K} > P_{M} > P_{L}", "P_{M} > P_{K} > P_{L}", "P_{K} = P_{M} > P_{L}"],
  dogru: 0,
  hatalar: [null, "Bu sıralama olabilir: K, X'in yoğun olması nedeniyle L'den büyüktür; M'ye göre de büyük olabilir.", "Bu sıralama olabilir: M, L'den derindir; K'den büyük olması da mümkündür.", "Bu sıralama olabilir: K ve M'nin eşit olması mümkündür; ikisi de L'den büyüktür."],
  aciklama: `Adım 1: K ve L aynı derinlikte; K'nin sıvısı daha yoğun olduğundan P_{K} > P_{L}. Bu durumda her olası sıralamada K, L'den önce gelmelidir.
Adım 2: L ve M aynı sıvıdadır; M daha derin olduğundan P_{M} > P_{L}. Yani L, K ve M'nin ikisinden de küçüktür.
Adım 3: K ile M ise etkenleri zıt yönde olduğundan hangisi büyüktür ya da eşit midir söylenemez; üç ihtimal de olabilir. "L en büyük" diyen sıralama olamaz.
Sık yapılan hata: L'nin K ya da M'den büyük olabileceğini düşünmek.
Cevap A.`
},
{
  id: "fen-sg-074",
  kazanim: "F.8.3.1.3",
  kademe: 0,
  zorluk: 4,
  soru: "Bir fen öğretmeni, sıvı ve gaz basıncıyla ilgili şu yargıları tahtaya yazmıştır:\nI. İki kapta aynı cins sıvı eşit yüksekliktedir; kapların taban alanları farklı olsa bile tabandaki sıvı basınçları eşittir.\nII. Kapalı bir hidrolik sistemde dar pistona uygulanan kuvvet artırılırsa geniş pistonun altındaki basınç da artar.\nIII. Pipetle içecek içilirken içeceğin yüzeyine etki eden açık hava basıncı, pipetin içindeki basınçtan büyüktür.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  gorsel: null,
  secenekler: ["Yalnız I","I ve II","I, II ve III","II ve III"],
  dogru: 2,
  hatalar: ["Eksik değerlendirme: I doğrudur ama II ve III de doğrudur.","Eksik değerlendirme: I ve II doğrudur ama III de doğrudur; içeceği yükselten dışarıdaki büyük basınçtır.",null,"Eksik değerlendirme: II ve III doğrudur ama I de doğrudur; taban alanı basıncı değiştirmez."],
  aciklama: `Adım 1: I. yargı: Aynı sıvıda, eşit derinlikte basınç eşittir; taban alanı ve sıvı miktarı basıncı değiştirmez. I doğru.
Adım 2: II. yargı: Dar pistona uygulanan kuvvet artınca sıvıya uygulanan basınç artar; Pascal prensibine göre bu artış geniş pistonun altına da aynen iletilir. II doğru.
Adım 3: III. yargı: İçeceği pipetten yükselten, yüzeyine etki eden açık hava basıncının pipetin içindeki daha küçük basınca karşı üstünlüğüdür. III doğru.
Sık yapılan hata: Bir yargının "çok kesin" görünmesi nedeniyle doğru olanı elemek.
Cevap C.`
},
{
  id: "fen-sg-075",
  kazanim: "F.8.3.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Ağzı açık beş kapta bulunan X ve Y sıvılarında, K, L, M, N ve R noktaları tabloda verildiği gibi işaretlenmiştir. Derinlikler sıvı yüzeyinden aşağı doğru ölçülmüştür. X sıvısının yoğunluğu Y sıvısının yoğunluğundan büyüktür. **Buna göre hangi noktaların sıvı basıncı, K noktasındaki sıvı basıncından kesinlikle küçüktür?**",
  gorsel: `<table class="tablo"><tr><th>Nokta</th><th>Sıvı</th><th>Derinlik (cm)</th></tr><tr><td>K</td><td>X</td><td>20</td></tr><tr><td>L</td><td>X</td><td>30</td></tr><tr><td>M</td><td>Y</td><td>20</td></tr><tr><td>N</td><td>Y</td><td>10</td></tr><tr><td>R</td><td>Y</td><td>30</td></tr></table>`,
  secenekler: ["Yalnız N","M ve N","L ve M","M, N ve R"],
  dogru: 1,
  hatalar: ["Eksik değerlendirme: N kesindir ama M de K ile aynı derinlikte, daha az yoğun sıvıda olduğu için K'den küçüktür.",null,"L yanlış: L, K ile aynı sıvıda daha derindir; basıncı K'den büyüktür.","R kesin değildir: R daha derindir ama sıvısı daha az yoğundur; etkenler zıt yöndedir."],
  aciklama: `Adım 1: M, K ile aynı derinliktedir ve sıvısı daha az yoğundur; P_{M} < P_{K} kesindir.
Adım 2: N hem daha sığ hem daha az yoğun sıvıdadır; iki etken de basıncı küçültür; P_{N} < P_{K} kesindir. L ise K'den daha derin ve aynı sıvıdadır; basıncı büyüktür.
Adım 3: R daha derindir ama sıvısı daha az yoğundur. Etkenler zıt yönde olduğundan K ile kesin karşılaştırılamaz.
Sık yapılan hata: Zıt yönlü etkenlerde "daha derin, daha büyük" ya da "daha az yoğun, daha küçük" diye kesin karar vermek.
Cevap B.`
}
);
