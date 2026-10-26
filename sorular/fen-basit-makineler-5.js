// Fen Bilimleri — Basit Makineler: Kademe 3 (LGS Ayarı) yedeği (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["basit-makineler"] = window.LGS_BANK["basit-makineler"] || []).push(
{
  "id": "fen-bm-326",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Şekildeki K ve L düzeneklerinde özdeş yükler aynı yüksekliğe çıkarılıyor. K'de işçi ipi doğrudan yukarı doğru çekiyor; L'de ip tavandaki sabit bir makaradan geçiyor ve işçi ipi aşağı doğru çekiyor. Sürtünmeler ile ip ve makara ağırlıkları önemsizdir.\nI. L'de uygulanan kuvvet, K'de uygulanan kuvvetten küçüktür.\nII. L'de uygulanan kuvvetin yönü, yükün hareket yönünün tersidir.\nIII. İki düzenekte de ip ucu, yük kadar yol alır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 245\" role=\"img\" aria-label=\"K'de ip yukarı çekiliyor, L'de sabit makaradan geçen ip aşağı çekiliyor\"><line x1=\"110\" y1=\"62\" x2=\"110\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"110\" y1=\"62\" x2=\"110\" y2=\"37\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"110,26 104,37 116,37\" fill=\"var(--vurgu)\"/><text x=\"122\" y=\"46\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><rect x=\"88\" y=\"150\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"110\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><text x=\"110\" y=\"232\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">K</text><line x1=\"300\" y1=\"15\" x2=\"500\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"4\"/><line x1=\"308\" y1=\"15\" x2=\"301\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"320\" y1=\"15\" x2=\"313\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"332\" y1=\"15\" x2=\"325\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"344\" y1=\"15\" x2=\"337\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"356\" y1=\"15\" x2=\"349\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"368\" y1=\"15\" x2=\"361\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"380\" y1=\"15\" x2=\"373\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"392\" y1=\"15\" x2=\"385\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"404\" y1=\"15\" x2=\"397\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"416\" y1=\"15\" x2=\"409\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"428\" y1=\"15\" x2=\"421\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"440\" y1=\"15\" x2=\"433\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"452\" y1=\"15\" x2=\"445\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"464\" y1=\"15\" x2=\"457\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"476\" y1=\"15\" x2=\"469\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"488\" y1=\"15\" x2=\"481\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"400\" y1=\"15\" x2=\"400\" y2=\"36\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"400\" cy=\"52\" r=\"16\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"400\" cy=\"52\" r=\"3\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M384 150 L384 52 A16 16 0 0 1 416 52 L416 100\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"362\" y=\"150\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"384\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"416\" y1=\"100\" x2=\"416\" y2=\"154\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"416,165 410,154 422,154\" fill=\"var(--vurgu)\"/><text x=\"426\" y=\"140\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"400\" y=\"232\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">L</text></svg>",
  "secenekler": [
    "Yalnız II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "III'ü atlama: sabit makarada ip ucu yükle aynı yolu alır; III de doğrudur.",
    "Sabit makarayı kuvvet kazandıran sanma: L'de kuvvet K'dekine eşittir, I yanlıştır. Yön değiştiği için doğru olan II de atlanmış.",
    null,
    "Sabit makarayı kuvvet kazandıran sanma: sabit makara kuvvetin büyüklüğünü değiştirmez; I yanlıştır."
  ],
  "aciklama": "Sabit makara, ekseni yerinde duran makaradır. Yalnızca kuvvetin yönünü değiştirir; kuvvetten de yoldan da kazanç sağlamaz.\nAdım 1 (I): L'de uygulanan kuvvet, yükü doğrudan kaldırmak için gereken kuvvetle aynıdır; K'dekinden küçük olmaz. I yanlıştır.\nAdım 2 (II): L'de işçi ipi aşağı çeker, yük yukarı çıkar. Kuvvetin yönü yükün hareket yönünün tersidir. II doğrudur.\nAdım 3 (III): Sabit makarada ipin iki tarafı aynı uzunlukta hareket eder; ip ucu yük kadar yol alır, K'de de öyledir. III doğrudur.\nSık yapılan hata: Makara görünce “kuvvet azalır” demek. Kuvveti azaltan, yükle birlikte hareket eden makaradır.\nCevap C."
},
{
  "id": "fen-bm-327",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir çiftlikte samanlığın kirişine bağlı ipin bir ucu, saman balyasını taşıyan hareketli makaradan geçirilmiş; ipin öbür ucu çiftçinin elindedir (şekil). Sürtünmeler ile ip ve makara ağırlıkları önemsizdir.\nI. Çiftçi ipi aşağı doğru çekerek balyayı yükseltir.\nII. Balyayı iki ip parçası taşıdığı için çiftçi, balyanın ağırlığından küçük bir kuvvet uygular.\nIII. Çiftçinin balyayı bu düzenekle yükseltirken yaptığı iş, balyayı doğrudan kaldırırken yapacağı işten azdır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 200\" role=\"img\" aria-label=\"Kirişe bağlı ipin geçtiği hareketli makaraya asılı balya\"><line x1=\"160\" y1=\"15\" x2=\"400\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"4\"/><line x1=\"168\" y1=\"15\" x2=\"161\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"180\" y1=\"15\" x2=\"173\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"192\" y1=\"15\" x2=\"185\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"204\" y1=\"15\" x2=\"197\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"216\" y1=\"15\" x2=\"209\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"228\" y1=\"15\" x2=\"221\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"240\" y1=\"15\" x2=\"233\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"252\" y1=\"15\" x2=\"245\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"264\" y1=\"15\" x2=\"257\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"276\" y1=\"15\" x2=\"269\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"288\" y1=\"15\" x2=\"281\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"300\" y1=\"15\" x2=\"293\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"312\" y1=\"15\" x2=\"305\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"324\" y1=\"15\" x2=\"317\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"336\" y1=\"15\" x2=\"329\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"348\" y1=\"15\" x2=\"341\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"360\" y1=\"15\" x2=\"353\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"372\" y1=\"15\" x2=\"365\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"384\" y1=\"15\" x2=\"377\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"396\" y1=\"15\" x2=\"389\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M260 15 L260 105 A20 20 0 0 0 300 105 L300 62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"300\" y1=\"62\" x2=\"300\" y2=\"37\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"300,26 306,37 294,37\" fill=\"var(--vurgu)\"/><text x=\"310\" y=\"50\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><circle cx=\"280\" cy=\"105\" r=\"20\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"280\" cy=\"105\" r=\"3\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"280\" y1=\"125\" x2=\"280\" y2=\"145\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"258\" y=\"145\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"166\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Hareketli makarada ip yukarı çekilir; tek başına yön değişmez. I yanlıştır, doğru olan II de atlanmış.",
    null,
    "İşten kazanç sanma: hiçbir basit makine yapılan işi azaltmaz; III yanlıştır.",
    "III'ü doğru sanma: kuvvetten kazanç, yoldan kayıpla ödenir; iş değişmez."
  ],
  "aciklama": "Hareketli makara, yükle birlikte yükselen makaradır. Yükü taşıyan ip parçası sayısı arttığı için kuvvetten kazandırır; karşılığında ip daha uzun çekilir.\nAdım 1 (I): İpin serbest ucu yukarı doğrudur; çiftçi ipi yukarı çeker. Tek hareketli makara yönü değiştirmez. I yanlıştır.\nAdım 2 (II): Balyayı iki ip parçası taşır, bu yüzden uygulanan kuvvet balyanın ağırlığından küçüktür. II doğrudur.\nAdım 3 (III): Kuvvetten kazanç yol kaybıyla gelir; iş aynı kalır. III yanlıştır.\nSık yapılan hata: Kuvvetin azalmasını işin azalması sanmak.\nCevap B."
},
{
  "id": "fen-bm-328",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Marangoz Selim, yükü taşıyan ip sayısı 2 olan bir palangayla ahşap bir kirişi çatıya çıkarıyor ve ipi yukarı doğru çekiyor. İpi aşağı doğru çekebilmek için ipin çıkış ucuna tavana bağlı bir sabit makara daha ekliyor; yükü taşıyan ip parçalarının sayısı hâlâ 2'dir. Sürtünmeler ile ip ve makara ağırlıkları önemsizdir.\n**Bu değişiklikle ilgili aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Gereken kuvvet azalır, ipi aşağı çekmek mümkün olur.",
    "Gereken kuvvet aynı kalır, ip ucunun aldığı yol azalır.",
    "Gereken kuvvet aynı kalır, ipi aşağı çekmek mümkün olur.",
    "Gereken kuvvet azalır, ip ucunun aldığı yol da azalır."
  ],
  "dogru": 2,
  "hatalar": [
    "Makara sayısı arttı diye kuvvetin azalacağını sanma: kuvveti azaltan, yükü taşıyan ip sayısıdır. Eklenen sabit makara yalnızca yönü değiştirir.",
    "Yol ile kuvveti karıştırma: taşıyıcı ip sayısı değişmediği için ip ucunun aldığı yol da aynı kalır.",
    null,
    "Kuvvet azalırken yolun da kısalacağını sanma: kuvvetten kazanç yol kaybıyla gelir; üstelik burada kuvvet de yol da değişmez."
  ],
  "aciklama": "Yükü taşıyan ip sayısı kuvveti belirler. Sabit makara yalnızca ipin yönünü değiştirir.\nAdım 1: Yükü taşıyan ip parçalarının sayısı 2 olarak kalıyor. Gereken kuvvet de ip ucunun aldığı yol da değişmez.\nAdım 2: Eklenen sabit makara ipin çıkış yönünü değiştirir; Selim artık ipi aşağı doğru çekebilir.\nSağlama: Kuvvet azalsaydı yol artması gerekirdi; burada ikisi de aynı kaldığı için yalnızca yön değişmiştir.\nSık yapılan hata: Makara sayısına bakıp kuvvetin azalacağını düşünmek.\nCevap C."
},
{
  "id": "fen-bm-329",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kantin görevlisi Hasan, kapağı sıkı bir şişeyi açacakla açıyor. Açacağın bir ucu kapağın kenarına dayanır ve destek olur; kapağı kaldıran nokta (yük), destek ile elin tuttuğu yer arasındadır (şekil). Hasan kuvvetini yukarı doğru uyguluyor ve elini açacağın tuttuğu yerden ucuna doğru kaydırıyor.\n**Buna göre aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 160\" role=\"img\" aria-label=\"Bir ucu destek olan açacak: yük destekle el arasında, el çubuğun ortasında\"><line x1=\"50\" y1=\"75\" x2=\"50\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"75\" x2=\"110\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"75\" x2=\"230\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"75\" x2=\"290\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"75\" x2=\"410\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"75\" x2=\"470\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"75\" x2=\"530\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"75\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"30,122 70,122 50,85\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"141\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"170\" y1=\"85\" x2=\"170\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"148\" y=\"110\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"170\" y=\"131\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"350\" y1=\"135\" x2=\"350\" y2=\"97\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"350,86 344,97 356,97\" fill=\"var(--vurgu)\"/><text x=\"362\" y=\"120\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text></svg>",
  "secenekler": [
    "Gereken kuvvet azalır, elin aldığı yol artar.",
    "Gereken kuvvet azalır, elin aldığı yol da azalır.",
    "Gereken kuvvet artar, elin aldığı yol azalır.",
    "Gereken kuvvet azalır, yapılan iş de azalır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Kuvvetten kazancı yoldan da kazanç sanma: kuvvet kolu uzayınca gereken kuvvet azalır ama el daha uzun yol alır.",
    "Eli desteğe yaklaştırıyor sanma: el destekten uzaklaştığı için kuvvet kolu uzar ve gereken kuvvet azalır.",
    "İşten kazanç sanma: kuvvet azalsa da el daha uzun yol alır; iş değişmez."
  ],
  "aciklama": "Kaldıraçta kuvvet kolu, destek ile kuvvetin uygulandığı nokta arasındaki uzaklıktır. Kuvvet kolu uzadıkça gereken kuvvet azalır, kuvvetin uygulandığı nokta daha çok yol alır.\nAdım 1: Hasan elini ucuna kaydırınca el destekten uzaklaşır; kuvvet kolu uzar.\nAdım 2: Kuvvet kolu uzayınca gereken kuvvet azalır.\nAdım 3: Kuvvetten kazanç yol kaybıyla ödenir; el daha uzun yol alır. İş değişmez.\nSık yapılan hata: Eli ucuna kaydırmayı desteğe yaklaştırmak sanmak.\nCevap A."
},
{
  "id": "fen-bm-330",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Belediye, bir okul girişindeki engelli rampasının yüksekliğini değiştirmeden boyunu uzatıyor. Tekerlekli sandalyedeki öğrenci rampadan sabit hızla çıkarılıyor. Sürtünmeler önemsizdir.\nI. Öğrenciyi çıkarmak için gereken kuvvet azalır.\nII. Öğrencinin rampada aldığı yol artar.\nIII. Öğrencinin ağırlığı azalır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "II'yi atlama: rampa uzadığı için alınan yol da artar; II de doğrudur.",
    null,
    "Ağırlık ile gereken kuvveti karıştırma: rampa cismin ağırlığını değiştirmez, yalnızca uygulanacak kuvveti küçültür. III yanlıştır.",
    "I'i atlama: rampa uzayınca eğim azalır ve gereken kuvvet de azalır. Ayrıca III yanlıştır."
  ],
  "aciklama": "Yükseklik sabitken rampa uzadıkça eğim azalır. Eğik düzlemde eğim azaldıkça gereken kuvvet azalır, alınan yol artar.\nAdım 1 (I): Rampa uzayınca eğim azalır; gereken kuvvet azalır. I doğrudur.\nAdım 2 (II): Aynı yüksekliğe daha uzun bir yoldan çıkılır; alınan yol artar. II doğrudur.\nAdım 3 (III): Ağırlık, cismin kendisine ait bir özelliktir; rampa onu değiştirmez. III yanlıştır.\nSık yapılan hata: Kuvvet küçüldü diye cismin hafiflediğini düşünmek.\nCevap B."
},
{
  "id": "fen-bm-331",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "İki balıkçı teknesinde çapa, çıkrıkla kaldırılıyor. Çıkrıkların tamburları aynı kalınlıktadır; K çıkrığının kolu L çıkrığınınkinden kısadır (şekil). Özdeş çapalar aynı yüksekliğe çıkarılıyor. Sürtünmeler önemsizdir.\nI. L çıkrığında gereken kuvvet, K çıkrığındakinden azdır.\nII. Kolun ucu, K çıkrığında L çıkrığındakinden daha çok yol alır.\nIII. İki çıkrıkta da çapayı yükseltmek için yapılan iş eşittir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 215\" role=\"img\" aria-label=\"Tamburları eşit, kolu kısa K ve kolu uzun L çıkrığı\"><line x1=\"72\" y1=\"50\" x2=\"72\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"50\" y=\"150\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"72\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çapa</text><circle cx=\"100\" cy=\"50\" r=\"28\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"100\" y1=\"50\" x2=\"160\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"160\" cy=\"50\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"50\" r=\"3\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"130\" y=\"33\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kol</text><text x=\"100\" y=\"207\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">K çıkrığı</text><line x1=\"312\" y1=\"50\" x2=\"312\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"290\" y=\"150\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"312\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Çapa</text><circle cx=\"340\" cy=\"50\" r=\"28\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"340\" y1=\"50\" x2=\"470\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"470\" cy=\"50\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"340\" cy=\"50\" r=\"3\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"405\" y=\"33\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kol</text><text x=\"340\" y=\"207\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">L çıkrığı</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "II ve III",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "III'ü atlama: aynı yük aynı yüksekliğe çıkarıldığı için iki çıkrıkta da iş eşittir; III de doğrudur.",
    "I'i atlama: kol uzadıkça gereken kuvvet azalır; I de doğrudur.",
    "Kol uzunluğunu ters yorumlama: kolu uzun olan L'de kolun ucu daha çok yol alır; II yanlıştır. I atlanmış.",
    null
  ],
  "aciklama": "Çıkrıkta kol uzadıkça gereken kuvvet azalır; karşılığında kolun ucu daha uzun yol alır. İş değişmez.\nAdım 1 (I): Tamburlar aynı, L'nin kolu daha uzun. L'de gereken kuvvet daha azdır. I doğrudur.\nAdım 2 (II): Kuvvetten kazanç yol kaybıyla ödenir; kolu uzun olan L'de kolun ucu daha çok yol alır. II yanlıştır.\nAdım 3 (III): Aynı çapa aynı yüksekliğe çıkıyor; basit makineler işten kazandırmadığı için iş eşittir. III doğrudur.\nSık yapılan hata: Kolu uzatınca hem kuvvetin hem yolun azalacağını düşünmek.\nCevap D."
},
{
  "id": "fen-bm-332",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir atölyede vidalı bir mengene, dişli çarklı bir el matkabı ve kayış kasnaklı bir tezgâh makinesi inceleniyor.\n**Bu üç parçayla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Üçü de basit makinedir ve üçü de işten kazanç sağlar yani iş azalır.",
    "Üçü de basit makinedir ve üçü de işten kazanç sağlamaz yani iş azalmaz.",
    "Yalnızca vida basit makinedir; dişli çark ile kasnak sayılmaz.",
    "Vida ile dişli çark basit makinedir; kasnak sayılmaz."
  ],
  "dogru": 1,
  "hatalar": [
    "İşten kazanç sanma: vida, dişli çark ve kasnak da diğer basit makineler gibi işten kazanç sağlamaz.",
    null,
    "Dişli çark ve kasnak da basit makinedir; ikisini de listeden çıkarma.",
    "Kasnağı basit makine saymamak: kasnak da dişli ve vida gibi basit makine kabul edilir."
  ],
  "aciklama": "Dişli çarklar, vida ve kasnaklar da birer basit makinedir. Bu konuda ayrıntıya girilmez; bunların da basit makine olduğunu ve diğerleri gibi işten kazanç sağlamadığını bilmek yeter.\nAdım 1: Vida (yivi eğik düzlem gibi çalışır), dişli çark ve kasnak basit makinedir.\nAdım 2: Hiçbir basit makine enerji üretmez, işi azaltmaz; işten kazanç yoktur.\nSık yapılan hata: Dişli ve kasnağı basit makine saymamak ya da bu araçların işten kazandırdığını düşünmek.\nCevap B."
},
{
  "id": "fen-bm-333",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Şekildeki K ve L palangalarıyla özdeş yükler aynı yüksekliğe çıkarılıyor. K'de yükü 2, L'de 5 ip parçası taşıyor. Sürtünmeler ile ip ve makara ağırlıkları önemsizdir.\nI. İp ucu, K'de L'dekinden daha çok yol alır.\nII. Gereken kuvvet, K'de L'dekinden azdır.\nIII. İki palangada da yükü yükseltmek için yapılan iş eşittir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 245\" role=\"img\" aria-label=\"K'de yükü 2, L'de 5 ip parçası taşıyan palangalar\"><line x1=\"20\" y1=\"15\" x2=\"540\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"4\"/><line x1=\"28\" y1=\"15\" x2=\"21\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"15\" x2=\"33\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"52\" y1=\"15\" x2=\"45\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"64\" y1=\"15\" x2=\"57\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"76\" y1=\"15\" x2=\"69\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"88\" y1=\"15\" x2=\"81\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"15\" x2=\"93\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"112\" y1=\"15\" x2=\"105\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"124\" y1=\"15\" x2=\"117\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"136\" y1=\"15\" x2=\"129\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"148\" y1=\"15\" x2=\"141\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"15\" x2=\"153\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"172\" y1=\"15\" x2=\"165\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"184\" y1=\"15\" x2=\"177\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"196\" y1=\"15\" x2=\"189\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"208\" y1=\"15\" x2=\"201\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"220\" y1=\"15\" x2=\"213\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"232\" y1=\"15\" x2=\"225\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"244\" y1=\"15\" x2=\"237\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"256\" y1=\"15\" x2=\"249\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"268\" y1=\"15\" x2=\"261\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"280\" y1=\"15\" x2=\"273\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"292\" y1=\"15\" x2=\"285\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"304\" y1=\"15\" x2=\"297\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"316\" y1=\"15\" x2=\"309\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"328\" y1=\"15\" x2=\"321\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"340\" y1=\"15\" x2=\"333\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"352\" y1=\"15\" x2=\"345\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"364\" y1=\"15\" x2=\"357\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"376\" y1=\"15\" x2=\"369\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"388\" y1=\"15\" x2=\"381\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"400\" y1=\"15\" x2=\"393\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"412\" y1=\"15\" x2=\"405\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"424\" y1=\"15\" x2=\"417\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"436\" y1=\"15\" x2=\"429\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"448\" y1=\"15\" x2=\"441\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"460\" y1=\"15\" x2=\"453\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"472\" y1=\"15\" x2=\"465\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"484\" y1=\"15\" x2=\"477\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"496\" y1=\"15\" x2=\"489\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"508\" y1=\"15\" x2=\"501\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"520\" y1=\"15\" x2=\"513\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"532\" y1=\"15\" x2=\"525\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"130\" y1=\"15\" x2=\"130\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"105\" y=\"30\" width=\"50\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"105\" y=\"126\" width=\"50\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"119\" y1=\"56\" x2=\"119\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"141\" y1=\"56\" x2=\"141\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"130\" y1=\"152\" x2=\"130\" y2=\"168\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"108\" y=\"168\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"130\" y=\"189\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"155\" y1=\"40\" x2=\"171\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"171\" y1=\"40\" x2=\"171\" y2=\"109\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"171,120 165,109 177,109\" fill=\"var(--vurgu)\"/><text x=\"181\" y=\"90\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"130\" y=\"232\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">K: yükü taşıyan ip sayısı 2</text><line x1=\"390\" y1=\"15\" x2=\"390\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"332\" y=\"30\" width=\"116\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"332\" y=\"126\" width=\"116\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"346\" y1=\"56\" x2=\"346\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"368\" y1=\"56\" x2=\"368\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"390\" y1=\"56\" x2=\"390\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"412\" y1=\"56\" x2=\"412\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"434\" y1=\"56\" x2=\"434\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"390\" y1=\"152\" x2=\"390\" y2=\"168\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"368\" y=\"168\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"390\" y=\"189\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"448\" y1=\"40\" x2=\"464\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"464\" y1=\"40\" x2=\"464\" y2=\"109\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"464,120 458,109 470,109\" fill=\"var(--vurgu)\"/><text x=\"474\" y=\"90\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"390\" y=\"232\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">L: yükü taşıyan ip sayısı 5</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Ters yorum: ip sayısı fazla olan L'de ip ucu daha çok yol alır; I yanlıştır. Doğru olan III atlanmış.",
    null,
    "Kuvvet ile yolu ters yorumlama: ip sayısı fazla olan L'de kuvvet daha azdır, ip ucunun yolu daha uzundur. I ve II yanlıştır.",
    "II'yi doğru sanma: kuvvet K'de daha çoktur, II yanlıştır."
  ],
  "aciklama": "Palangada yükü taşıyan ip parçası sayısı arttıkça gereken kuvvet azalır, ip ucunun aldığı yol artar. İş değişmez.\nAdım 1 (I): L'de 5 ip parçası var; ip ucu L'de daha çok yol alır. I yanlıştır.\nAdım 2 (II): Kuvvet L'de daha azdır; K'de daha çoktur. II yanlıştır.\nAdım 3 (III): Aynı yük aynı yüksekliğe çıktığı için iki palangada da iş eşittir. III doğrudur.\nSık yapılan hata: Kuvvet azalınca yolun da kısalacağını sanmak.\nCevap B."
},
{
  "id": "fen-bm-334",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir alışveriş merkezinde yüklü bir sepet, aynı kata iki yoldan biriyle çıkarılabiliyor: K rampası kısa ve diktir, L rampası uzun ve hafif eğimlidir. Sepet iki rampada da sabit hızla ve sürtünmesiz biçimde çıkarılıyor.\n**Buna göre sepeti L rampasından çıkaran görevli için, K rampasına göre aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Gereken kuvvet daha azdır, yapılan iş de daha azdır.",
    "Gereken kuvvet daha azdır, yapılan iş ise daha fazladır.",
    "Gereken kuvvet aynıdır, yapılan iş daha fazladır.",
    "Gereken kuvvet daha azdır, yapılan iş aynıdır."
  ],
  "dogru": 3,
  "hatalar": [
    "İşten kazanç sanma: eğik düzlem kuvveti azaltır ama işi azaltmaz.",
    "Yol uzun diye işin arttığını sanma: kuvvet azaldığı için yol uzar; ikisinin etkisi birbirini götürür ve iş değişmez.",
    "Rampa boyunun kuvvete etkisini yok sayma: eğim azalınca gereken kuvvet azalır.",
    null
  ],
  "aciklama": "Eğik düzlemde eğim azaldıkça gereken kuvvet azalır, yol uzar. İş ise iki durumda da aynıdır.\nAdım 1: L rampası daha uzun ve az eğimlidir; gereken kuvvet K'dekinden azdır.\nAdım 2: Sepet aynı yüksekliğe çıktığı ve sürtünme olmadığı için iki rampada da yapılan iş eşittir.\nSağlama: Kuvvet azalırken yol artar; çarpım yani iş değişmez.\nSık yapılan hata: Yol uzadı diye işin de arttığını ya da kuvvet azaldı diye işin azaldığını düşünmek.\nCevap D."
},
{
  "id": "fen-bm-335",
  "kazanim": "F.8.5.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bahçedeki ana su vanasının mili, çapı 2 cm olan ince bir çubuktur ve paslandığı için çevrilmesi çok zor. Bahçıvan Ece, vananın miline sabitleyeceği bir parçayla vanayı çevirmeyi kolaylaştırmak istiyor. Ece, mili çevirmek için uygulayacağı kuvvetin en az olmasını istiyor. Elinde farklı çaplarda ahşap tekerlekler var.\n**Ece aşağıdaki tasarımlardan hangisini seçmelidir?**",
  "gorsel": null,
  "secenekler": ["Mile çapı 3 cm olan bir tekerlek takıp tekerleği kenarından çevirmek","Mile çapı 10 cm olan bir tekerlek takıp tekerleği kenarından çevirmek","Mile çapı 40 cm olan bir tekerlek takıp tekerleği milin yakınından çevirmek","Mile çapı 40 cm olan bir tekerlek takıp tekerleği kenarından çevirmek"],
  "dogru": 3,
  "hatalar": ["Çapı yetersiz seçme: tekerlek milin kalınlığına yakın olduğundan kazanç çok azdır. Çap büyüdükçe gereken kuvvet azalır; seçenekler arasında en büyük çap 40 cm'dir.","En büyük çapı seçmeme: 10 cm'lik tekerlek de kuvveti azaltır ama çapı 40 cm olan tekerlek kuvveti daha da azaltır.","Kuvvetin uygulandığı yeri gözden kaçırma: tekerlek büyük olsa da mile yakın bir noktadan çevrilirse kol kısalır ve kazanç kaybolur. Kuvvet tekerleğin kenarından uygulanmalıdır.",null],
  "aciklama": "Vana mili, çıkrığın silindiri gibi çalışır; mile takılan tekerlek de çıkrığın kolu gibi davranır. Kuvvetin uygulandığı nokta milden ne kadar uzaksa gereken kuvvet o kadar azalır, kuvvetin uygulandığı noktanın aldığı yol ise artar.\nAdım 1: Amaç gereken kuvveti en aza indirmektir; bunun için kuvvetin uygulandığı noktayı milden olabildiğince uzağa taşımak gerekir.\nAdım 2: Mil 2 cm çapındadır. 3 cm'lik tekerlek milden çok az büyüktür; 10 cm'lik tekerlek daha çok kazandırır; 40 cm'lik tekerlek en çok kazandırır.\nAdım 3: Aynı 40 cm'lik tekerlek mile yakın bir noktadan çevrilirse kol kısalır ve kazanç kaybolur; kuvvet tekerleğin kenarından uygulanmalıdır.\nSık yapılan hata: Yalnızca tekerleğin büyüklüğüne bakıp kuvvetin nereden uygulandığını unutmak.\nCevap D."
},
{
  "id": "fen-bm-336",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Mangalda et çeviren Tuncay, ızgara maşasını iki kolunun ortasından sıkarak eti tutuyor. Maşanın kolları bir uçta birleşir ve bu uç destek gibi davranır; Tuncay'ın uyguladığı kuvvet destek ile et arasındadır ve etin ağırlığını dengelemek için yukarı yönlüdür (şekil).\n**Bu maşayla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 160\" role=\"img\" aria-label=\"Bir ucu destek olan maşa: kuvvet ortada, yük diğer uçta\"><line x1=\"50\" y1=\"75\" x2=\"50\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"75\" x2=\"110\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"75\" x2=\"230\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"75\" x2=\"290\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"75\" x2=\"410\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"75\" x2=\"470\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"75\" x2=\"530\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"75\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"30,122 70,122 50,85\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"141\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"530\" y1=\"85\" x2=\"530\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"508\" y=\"110\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"530\" y=\"131\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"230\" y1=\"135\" x2=\"230\" y2=\"97\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"230,86 224,97 236,97\" fill=\"var(--vurgu)\"/><text x=\"242\" y=\"120\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text></svg>",
  "secenekler": [
    "Kuvvet kolu yük kolundan uzun olduğu için gereken kuvvet etin ağırlığından küçüktür.",
    "Kuvvet kolu ile yük kolu eşit olduğu için gereken kuvvet etin ağırlığına eşittir.",
    "Kuvvet kolu yük kolundan kısa olduğu için gereken kuvvet etin ağırlığından büyüktür.",
    "Maşa kuvvetin yönünü değiştirdiği için gereken kuvvet etin ağırlığından küçüktür."
  ],
  "dogru": 2,
  "hatalar": [
    "Kuvvet ve yük kolunu karıştırma: kuvvet ortadayken kuvvet kolu yük kolundan kısadır; kazanç olmaz.",
    "Kolları eşit sanma: şekilde kuvvet kolu 3 bölme, yük kolu 8 bölmedir.",
    null,
    "Yön değişimini kuvvet kazancı sanma: maşada kuvvetten kazanç yoktur."
  ],
  "aciklama": "Kaldıraçta kuvvet kolu yük kolundan kısaysa gereken kuvvet yükten büyük olur; kuvvetten kazanç sağlanmaz.\nAdım 1: Şekilde destek sol uçtadır. Kuvvet desteğe 3 bölme, et (yük) 8 bölme uzaklıktadır.\nAdım 2: Kuvvet kolu (3) yük kolundan (8) kısadır; bu yüzden gereken kuvvet etin ağırlığından büyüktür.\nSağlama: Kuvvet ortadaki kaldıraçlar (maşa, cımbız) ince ve duyarlı iş için kullanılır, kuvvet kazandırmaz.\nSık yapılan hata: Her kaldıracın kuvvetten kazandırdığını düşünmek.\nCevap C."
},
{
  "id": "fen-bm-337",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Marangoz Kemal, çekicin arkadaki çatallı ucuyla tahtaya çakılı bir çiviyi söküyor. Çekicin kafasının tahtaya dayanan yeri destek, çivi yük, elin tuttuğu sap ise kuvvetin uygulandığı yerdir.\nI. Sapı, kafaya yakın bir yerinden tutmak çiviyi sökmeyi kolaylaştırır.\nII. Sapı ucundan tutmak gereken kuvveti azaltır.\nIII. Çekiç kuvvetten kazandırdığı için çiviyi sökerken yapılan iş azalır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "İşten kazanç sanma: kuvvetten kazanç sağlayan çekiç işi azaltmaz; III yanlıştır. Doğru olan II de atlanmış.",
    "Kuvvet kolunu kısaltmak kolaylık sağlar sanma: sapı kafaya yakın tutmak kuvvet kolunu kısaltır, gereken kuvvet artar. I yanlıştır.",
    "III'ü doğru sanma: hiçbir basit makine işten kazanç sağlamaz; III yanlıştır."
  ],
  "aciklama": "Çekiç, destek noktası etrafında dönen bir kaldıraçtır. Kuvvetin uygulandığı nokta destekten uzaklaştıkça kuvvet kolu uzar ve gereken kuvvet azalır.\nAdım 1 (I): Sapı kafaya yakın tutmak kuvvet kolunu kısaltır; gereken kuvvet artar. I yanlıştır.\nAdım 2 (II): Sapı ucundan tutmak kuvvet kolunu uzatır; gereken kuvvet azalır. II doğrudur.\nAdım 3 (III): Kuvvetten kazanç yol kaybıyla ödenir, iş azalmaz. III yanlıştır.\nSık yapılan hata: Kuvvet kolu kısalınca işin kolaylaşacağını düşünmek.\nCevap A."
},
{
  "id": "fen-bm-338",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Şekildeki kaldıraçta yük, desteğin solunda; kuvvet çubuğun sağ ucundadır. Bölmeler eşit aralıklıdır. Aşağıdaki değişikliklerden yalnızca biri yapıldığında yükü dengede tutmak için gereken kuvvet __artar__.\n**Buna göre bu değişiklik aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 160\" role=\"img\" aria-label=\"Destek 3. bölmede, yük 1. bölmede, kuvvet 8. bölmede olan kaldıraç\"><line x1=\"50\" y1=\"75\" x2=\"50\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"75\" x2=\"110\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"75\" x2=\"230\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"75\" x2=\"290\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"75\" x2=\"410\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"75\" x2=\"470\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"75\" x2=\"530\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"75\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"210,122 250,122 230,85\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"230\" y=\"141\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"110\" y1=\"85\" x2=\"110\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"88\" y=\"110\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"110\" y=\"131\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"530\" y1=\"27\" x2=\"530\" y2=\"63\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"530,74 524,63 536,63\" fill=\"var(--vurgu)\"/><text x=\"542\" y=\"47\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text></svg>",
  "secenekler": [
    "Kuvveti desteğe 2 bölme yaklaştırmak",
    "Yükü desteğe 1 bölme yaklaştırmak",
    "Desteği yüke 1 bölme yaklaştırmak",
    "Çubuğu uzatıp kuvveti uzatılan uca uygulamak"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yük kolunu kısaltmak kuvveti azaltır: yük desteğe yaklaştıkça gereken kuvvet küçülür.",
    "Desteği yüke yaklaştırmak yük kolunu kısaltıp kuvvet kolunu uzatır; gereken kuvvet azalır.",
    "Kuvvet kolu uzadıkça gereken kuvvet azalır; bu değişiklik kuvveti artırmaz."
  ],
  "aciklama": "Kaldıraçta gereken kuvvet, yük kolunun kuvvet koluna oranıyla ilgilidir: kuvvet kolu kısalırsa ya da yük kolu uzarsa gereken kuvvet artar. Hesap gerekmez, kolların uzayıp kısaldığına bakmak yeter.\nAdım 1: Şu an yük kolu 2, kuvvet kolu 5 bölmedir.\nAdım 2: Kuvveti desteğe yaklaştırmak kuvvet kolunu kısaltır; gereken kuvvet artar.\nAdım 3: Diğer üç değişiklik yük kolunu kısaltır ya da kuvvet kolunu uzatır; üçünde de gereken kuvvet azalır.\nSık yapılan hata: Kuvvet kolu kısalırken kolaylık sağlandığını düşünmek.\nCevap A."
},
{
  "id": "fen-bm-339",
  "kazanim": "F.8.5.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Çiftçi Rıza, kuyu başındaki çıkrığın kolunu ve tamburunu yenileyecek. Aynı kovayı kuyudan çıkarırken mümkün olan en az kuvveti uygulamak istiyor. Aşağıdaki dört çıkrık modelinden birini seçecek. Sürtünmeler önemsizdir.\n**Rıza hangi modeli seçmelidir?**",
  "gorsel": null,
  "secenekler": [
    "Kolu uzun, tamburu kalın olan model",
    "Kolu kısa, tamburu ince olan model",
    "Kolu uzun, tamburu ince olan model",
    "Kolu kısa, tamburu kalın olan model"
  ],
  "dogru": 2,
  "hatalar": [
    "Tambur kalınlığını yok sayma: tambur kalınlaştıkça gereken kuvvet artar; en az kuvvet için tambur ince olmalıdır.",
    "Kol uzunluğunu yok sayma: kol kısaldıkça gereken kuvvet artar; en az kuvvet için kol uzun olmalıdır.",
    null,
    "İki değişkeni de ters seçme: kısa kol ve kalın tambur gereken kuvveti en çok artıran birleşimdir."
  ],
  "aciklama": "Çıkrıkta kol uzadıkça gereken kuvvet azalır, tambur kalınlaştıkça artar. En az kuvvet için kol en uzun, tambur en ince olmalıdır.\nAdım 1: Kolun uzun olması kuvvetten kazancı artırır.\nAdım 2: Tamburun ince olması kuvvetten kazancı artırır.\nAdım 3: İkisini birleştiren model, kolu uzun ve tamburu ince olandır. Karşılığında kolun ucu daha uzun yol alır.\nSık yapılan hata: Yalnızca kola bakıp tambur kalınlığını unutmak.\nCevap C."
},
{
  "id": "fen-bm-340",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen kulübünde çıkrık modelleriyle yapılan bir deneyde, kol uzunluğunun gereken kuvvete etkisi incelenecek. Öğrenciler, yalnızca kol uzunluğu farklı olan iki çıkrığı karşılaştırmak istiyor. Elde bulunan çıkrıkların özellikleri tabloda verilmiştir.\n**Buna göre öğrenciler hangi iki çıkrığı karşılaştırmalıdır?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Çıkrık</th><th>Kol uzunluğu</th><th>Tambur kalınlığı</th></tr><tr><td>K</td><td>10 cm</td><td>İnce</td></tr><tr><td>L</td><td>10 cm</td><td>Kalın</td></tr><tr><td>M</td><td>20 cm</td><td>Orta</td></tr><tr><td>N</td><td>20 cm</td><td>Kalın</td></tr></table>",
  "secenekler": [
    "K ve L",
    "K ve N",
    "L ve M",
    "L ve N"
  ],
  "dogru": 3,
  "hatalar": [
    "Bu çift yalnızca tambur kalınlığı farklı olan çıkrıklardır; kol uzunluğunun etkisini değil, tambur kalınlığının etkisini gösterir.",
    "Hem kol (10 cm ve 20 cm) hem tambur (ince ve kalın) farklı: iki değişken birlikte değiştiğinde sonuç hangisinden kaynaklandığı anlaşılmaz.",
    "Hem kol (10 cm ve 20 cm) hem tambur (kalın ve orta) farklı: iki değişken birlikte değiştiğinde sonucun nedeni belli olmaz.",
    null
  ],
  "aciklama": "Deneyde yalnızca incelenen değişken değişir, diğerleri sabit tutulur.\nAdım 1: İncelenen değişken kol uzunluğudur; tambur kalınlığı iki çıkrıkta da aynı olmalıdır.\nAdım 2: Tablodaki çiftlere bak: K ve L'de kol aynı, tambur farklı; K ve N ile L ve M'de ikisi de farklıdır.\nAdım 3: Tamburları eşit (kalın) olan, kolları 10 cm ve 20 cm olan çiftin L ile N olduğunu görürsün.\nSık yapılan hata: Yalnızca bir değişkenin farklı olduğunu kontrol etmeden iki çıkrığı seçmek.\nSağlama: L ve N'de tek fark kol uzunluğudur.\nCevap D."
},
{
  "id": "fen-bm-341",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Ayşe, mutfak ve atölyedeki araçları kaldıraç türüne göre gruplandırıyor.\nI. Pense\nII. Makas\nIII. Fındık kıracağı\n**Bu araçlardan hangilerinde destek noktası, kuvvetin uygulandığı nokta ile yükün bulunduğu nokta arasındadır?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "II'yi atlama: makasta da menteşe (destek) kuvvet ile yük arasındadır.",
    null,
    "Fındık kıracağını yanlış gruba koyma: kıracakta fındık (yük) destek ile kuvvet arasındadır, destek ortada değildir.",
    "Pensenin yerini yanlış belirleme: pensede de destek ortadadır. Fındık kıracağında ise yük ortadadır."
  ],
  "aciklama": "Kaldıraçlar, ortada hangi noktanın bulunduğuna göre ayrılır. Pense ve makasta destek (menteşe) ortadadır; fındık kıracağında yük ortadadır.\nAdım 1: Pense, menteşenin bir yanından tutulur, öbür yanıyla tel kesilir. Destek ortadadır.\nAdım 2: Makas da menteşenin iki yanında kuvvet ve yük taşır. Destek ortadadır.\nAdım 3: Fındık kıracağında destek uçtadır, fındık (yük) ortadadır.\nSık yapılan hata: Tüm aletleri aynı kaldıraç düzeni sanmak.\nCevap B."
},
{
  "id": "fen-bm-342",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aslı, eğik düzlemde rampa boyunun kutuyu çıkarmak için gereken kuvvete etkisini araştırıyor. Dört deneyin koşulları tabloda verilmiştir.\n**Aslı'nın sonucu doğru yorumlayabilmesi için hangi iki deneyi karşılaştırması gerekir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Deney</th><th>Rampa boyu</th><th>Rampa yüksekliği</th><th>Kutu</th></tr><tr><td>1</td><td>2 m</td><td>1 m</td><td>Büyük</td></tr><tr><td>2</td><td>4 m</td><td>1 m</td><td>Büyük</td></tr><tr><td>3</td><td>4 m</td><td>2 m</td><td>Büyük</td></tr><tr><td>4</td><td>3 m</td><td>1 m</td><td>Küçük</td></tr></table>",
  "secenekler": [
    "1 ve 2",
    "1 ve 3",
    "2 ve 3",
    "2 ve 4"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Hem boy hem yükseklik farklı: iki değişken birlikte değişince sonuç hangisinden kaynaklandığı anlaşılmaz.",
    "Bu çift yalnızca yüksekliği farklıdır; yüksekliğin etkisini gösterir, boyun etkisini değil.",
    "Hem boy hem kutu farklı: iki değişken birlikte değişince sonuç hangisinden kaynaklandığı anlaşılmaz."
  ],
  "aciklama": "Bir değişkenin etkisini görmek için yalnızca o değişken değiştirilir, diğerleri sabit tutulur.\nAdım 1: İncelenen değişken rampa boyudur; yükseklik ve kutu iki deneyde aynı olmalıdır.\nAdım 2: 1. ve 2. deneyde yükseklik 1 m, kutu büyüktür; yalnızca boy 2 m ve 4 m olarak farklıdır.\nAdım 3: Diğer çiftlerde boydan başka bir değişken daha farklıdır ya da yalnızca yükseklik değişmiştir.\nSağlama: 1 ve 2'de tek fark rampa boyudur.\nSık yapılan hata: Boyları farklı iki deneyi seçip diğer değişkenlerin aynı olup olmadığına bakmamak.\nCevap A."
},
{
  "id": "fen-bm-343",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Şekildeki K ve L kaldıraçlarında destek noktaları çubukların sol ucundadır. K'de yük, L'de ise kuvvet destek ile çubuğun sağ ucu arasındadır. Bölmeler eşit aralıklıdır ve kuvvetler şekilde gösterilen yönde uygulanmaktadır.\nI. K'de gereken kuvvet, yükün ağırlığından küçüktür.\nII. L'de gereken kuvvet, yükün ağırlığından küçüktür.\nIII. L'de kuvvetin uygulandığı nokta, yükten daha uzun yol alır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 320\" role=\"img\" aria-label=\"K'de yük ortada, L'de kuvvet ortada olan iki kaldıraç\"><line x1=\"50\" y1=\"75\" x2=\"50\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"75\" x2=\"110\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"75\" x2=\"230\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"75\" x2=\"290\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"75\" x2=\"410\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"75\" x2=\"470\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"75\" x2=\"530\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"75\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"30,122 70,122 50,85\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"141\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"230\" y1=\"85\" x2=\"230\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"208\" y=\"110\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"230\" y=\"131\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"530\" y1=\"135\" x2=\"530\" y2=\"97\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"530,86 524,97 536,97\" fill=\"var(--vurgu)\"/><text x=\"542\" y=\"115\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"6\" y=\"59\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">K</text><line x1=\"50\" y1=\"235\" x2=\"50\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"235\" x2=\"110\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"235\" x2=\"170\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"235\" x2=\"230\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"235\" x2=\"290\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"235\" x2=\"350\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"235\" x2=\"410\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"235\" x2=\"470\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"235\" x2=\"530\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"235\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"30,282 70,282 50,245\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"301\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"530\" y1=\"245\" x2=\"530\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"508\" y=\"270\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"530\" y=\"291\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"230\" y1=\"292\" x2=\"230\" y2=\"258\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"230,246 224,258 236,258\" fill=\"var(--vurgu)\"/><text x=\"242\" y=\"278\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"6\" y=\"219\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">L</text></svg>",
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Kuvvet ortadayken kuvvetin uygulandığı noktanın yükten daha kısa yol aldığını unutma; III yanlıştır. Doğru olan I de atlanmış.",
    "II'yi doğru sanma: L'de kuvvet kolu yük kolundan kısadır, gereken kuvvet yükten büyüktür. II yanlıştır.",
    "II ve III yanlıştır: kuvvet ortadayken kuvvetten kazanç olmaz ve kuvvetin uygulandığı nokta daha kısa yol alır."
  ],
  "aciklama": "Kaldıraçta kuvvet kolu yük kolundan uzunsa kuvvetten kazanç vardır; kısaysa yoktur.\nAdım 1 (I): K'de yük ortadadır; kuvvet kolu (8 bölme) yük kolundan (3 bölme) uzundur. Gereken kuvvet yükten küçüktür. I doğrudur.\nAdım 2 (II): L'de kuvvet ortadadır; kuvvet kolu (3) yük kolundan (8) kısadır. Gereken kuvvet yükten büyüktür. II yanlıştır.\nAdım 3 (III): L'de kuvvet desteğe yükten daha yakındır; kuvvetin uygulandığı nokta yükten daha kısa yol alır. III yanlıştır.\nSık yapılan hata: Her kaldıraçta kuvvetten kazanç olduğunu düşünmek.\nCevap A."
},
{
  "id": "fen-bm-344",
  "kazanim": "F.8.5.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Oto tamircisi Cem, bir tekerleğin çok sıkılmış somununu anahtarıyla sökemiyor. Somunun ekseni destek noktası gibi davranır; Cem anahtarın sapına kuvvet uygular. Atölyede uzun bir boru ve kısa bir anahtar daha var.\n**Cem somunu sökmek için gereken kuvveti azaltmak istiyorsa aşağıdakilerden hangisini yapmalıdır?**",
  "gorsel": null,
  "secenekler": [
    "Boruyu anahtarın sapına geçirip boruyu somuna yakın yerinden itmek",
    "Boruyu anahtarın sapına geçirip boruyu ucundan itmek",
    "Kısa anahtarı kullanıp sapının ucundan itmek",
    "Anahtara hiçbir şey eklemeden sapı ucundan daha hızlı itmek"
  ],
  "dogru": 1,
  "hatalar": [
    "Kuvvet kolunu kısa bırakma: boru takılsa bile somuna yakın yerden itmek kuvvet kolunu uzatmaz.",
    null,
    "Kol kısalınca kolay olur sanma: kısa anahtarda kuvvet kolu kısalır ve gereken kuvvet artar.",
    "Hızı kuvvet sanma: kuvveti azaltan, kuvvet kolunun uzunluğudur; itme hızı bunu değiştirmez."
  ],
  "aciklama": "Anahtar, ekseni destek olan bir kaldıraçtır. Kuvvetin uygulandığı nokta destekten uzaklaştıkça kuvvet kolu uzar ve gereken kuvvet azalır.\nAdım 1: Kuvveti azaltmak için kuvvet kolunu uzatmak gerekir.\nAdım 2: Boruyu sapa geçirmek kolu uzatır; boruyu ucundan itmek kuvvet kolunu en uzun yapar.\nAdım 3: Karşılığında elin aldığı yol artar.\nSık yapılan hata: Kolun uzunluğu yerine itme hızının önemli olduğunu düşünmek.\nCevap B."
},
{
  "id": "fen-bm-345",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Şekilde özdeş yükler, aynı uzunlukta K ve L kaldıraçlarıyla aynı yüksekliğe kaldırılıyor. Kuvvetler çubukların sağ ucuna uygulanıyor. Bölmeler eşit aralıklıdır.\n**K ve L kaldıraçları için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 320\" role=\"img\" aria-label=\"Destekleri farklı yerde olan K ve L kaldıraçları\"><line x1=\"50\" y1=\"75\" x2=\"50\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"75\" x2=\"110\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"75\" x2=\"230\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"75\" x2=\"290\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"75\" x2=\"410\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"75\" x2=\"470\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"75\" x2=\"530\" y2=\"68\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"75\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"150,122 190,122 170,85\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"170\" y=\"141\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"50\" y1=\"85\" x2=\"50\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"28\" y=\"110\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"131\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"530\" y1=\"27\" x2=\"530\" y2=\"63\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"530,74 524,63 536,63\" fill=\"var(--vurgu)\"/><text x=\"542\" y=\"47\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"6\" y=\"59\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">K</text><line x1=\"50\" y1=\"235\" x2=\"50\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"235\" x2=\"110\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"235\" x2=\"170\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"235\" x2=\"230\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"235\" x2=\"290\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"235\" x2=\"350\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"235\" x2=\"410\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"235\" x2=\"470\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"235\" x2=\"530\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"235\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"270,282 310,282 290,245\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"290\" y=\"301\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"50\" y1=\"245\" x2=\"50\" y2=\"270\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"28\" y=\"270\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"291\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"530\" y1=\"187\" x2=\"530\" y2=\"223\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"530,234 524,223 536,223\" fill=\"var(--vurgu)\"/><text x=\"542\" y=\"207\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"6\" y=\"219\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">L</text></svg>",
  "secenekler": [
    "K'de gereken kuvvet L'dekinden azdır; K'de kuvvetin uygulandığı uç daha çok yol alır.",
    "K'de gereken kuvvet L'dekinden azdır; K'de kuvvetin uygulandığı uç daha az yol alır.",
    "K'de gereken kuvvet L'dekinden çoktur; K'de kuvvetin uygulandığı uç daha çok yol alır.",
    "K'de gereken kuvvet L'dekiyle aynıdır; kuvvetin uygulandığı uçların yolları da aynıdır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Kuvvet azalırken yolun da kısalacağını sanma: kuvvetten kazanç yol kaybıyla gelir.",
    "Destekle yük arasındaki uzaklığı ters yorumlama: K'de destek yüke daha yakın olduğu için gereken kuvvet daha azdır.",
    "Destek yerinin etkisini yok sayma: destek yük kolunu ve kuvvet kolunu değiştirir; ikisi de farklı çıkar."
  ],
  "aciklama": "Destek yüke yaklaştıkça yük kolu kısalır, kuvvet kolu uzar; gereken kuvvet azalır ve kuvvetin uygulandığı nokta daha çok yol alır.\nAdım 1: K'de destek yüke 2 bölme, L'de 4 bölme uzaklıktadır. K'nin yük kolu daha kısadır.\nAdım 2: K'nin kuvvet kolu daha uzun olduğundan K'de gereken kuvvet daha azdır.\nAdım 3: Kuvvetten kazanç yol kaybıyla ödenir; K'de uç daha çok yol alır.\nSık yapılan hata: Desteği yükten uzaklaştırınca kolaylaşacağını düşünmek.\nCevap A."
},
{
  "id": "fen-bm-346",
  "kazanim": "F.8.5.1.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Belediye çalışanı Berna, bir sokak lambasının armatürünü direğin tepesine çıkaracak. Direğin tepesine istediği makarayı bağlayabilir. Berna armatürü, ipi yerden aşağı doğru çekerek ve armatürün ağırlığından daha küçük bir kuvvetle kaldırmak istiyor. Sürtünmeler önemsizdir.\n**Berna aşağıdaki düzeneklerden hangisini kurmalıdır?**",
  "gorsel": null,
  "secenekler": [
    "Direğe bağlı yalnızca bir sabit makara",
    "Armatüre bağlı yalnızca bir hareketli makara",
    "Biri direğe, biri armatüre bağlı iki makara",
    "Direğe bağlı iki sabit makara"
  ],
  "dogru": 2,
  "hatalar": [
    "Sabit makarayı kuvvet kazandıran sanma: ipi aşağı çekmeyi sağlar ama gereken kuvvet armatürün ağırlığına eşittir.",
    "Hareketli makara kuvvetten kazandırır ama tek başına yönü değiştirmez; Berna ipi yukarı çekmek zorunda kalır.",
    null,
    "Sabit makara sayısını artırmak kuvveti azaltmaz; yükü taşıyan ip sayısı değişmez."
  ],
  "aciklama": "İki isteği birlikte sağlayan düzenek, sabit ve hareketli makaranın birlikte kullanıldığı palangadır.\nAdım 1: Kuvvetin ağırlıktan küçük olması için hareketli makara gerekir.\nAdım 2: İpin aşağı çekilebilmesi için bir sabit makara gerekir.\nAdım 3: Biri direğe (sabit), biri armatüre (hareketli) bağlı iki makara bu iki isteği karşılar.\nSık yapılan hata: Makarayı çeşidine bakmadan seçmek.\nCevap C."
},
{
  "id": "fen-bm-347",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen laboratuvarında K, L ve M ile adlandırılan üç düzenek inceleniyor. Her düzenek bir sabit makara, bir hareketli makara ya da bir palangadır. Düzeneklerin özellikleri tabloda gösterilmiştir.\n**Buna göre K, L ve M düzenekleri sırasıyla aşağıdakilerden hangisi olabilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Düzenek</th><th>Kuvvetten kazanç</th><th>Yön değişimi</th></tr><tr><td>K</td><td>Var</td><td>Yok</td></tr><tr><td>L</td><td>Yok</td><td>Var</td></tr><tr><td>M</td><td>Var</td><td>Var</td></tr></table>",
  "secenekler": [
    "Hareketli makara – Sabit makara – Palanga",
    "Sabit makara – Hareketli makara – Palanga",
    "Hareketli makara – Palanga – Sabit makara",
    "Palanga – Sabit makara – Hareketli makara"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sabit ve hareketli makaranın özelliklerini ters eşleştirme: kuvvetten kazanç sağlayan hareketli, yalnızca yön değiştiren sabit makaradır.",
    "Palanga ile sabit makarayı karıştırma: palanga hem kuvvetten kazandırır hem yönü değiştirir; L'de kazanç yok.",
    "K'de yön değişimi olmadığı için palanga olamaz; M'de hem kazanç hem yön değişimi vardır."
  ],
  "aciklama": "Sabit makara yalnızca yönü değiştirir. Hareketli makara kuvvetten kazandırır ama yönü değiştirmez. Palanga ikisini birlikte sağlar.\nAdım 1: K'de kuvvetten kazanç var, yön değişimi yok; bu hareketli makaradır.\nAdım 2: L'de kazanç yok, yön değişimi var; bu sabit makaradır.\nAdım 3: M'de ikisi de var; bu palangadır.\nSağlama: Sıra “hareketli – sabit – palanga” olur.\nSık yapılan hata: Sabit makarayı kuvvet kazandıran sanmak.\nCevap A."
},
{
  "id": "fen-bm-348",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aynı kutu, aynı h yüksekliğine K, L ve M rampalarından sürtünmesiz biçimde çıkarılıyor. Kutuyu çıkarmak için gereken kuvvet grafikte gösterilmiştir.\n**Buna göre rampaların boyları arasındaki ilişki aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 250\" role=\"img\" aria-label=\"K, L ve M rampalarında gereken kuvveti gösteren sütun grafiği\"><line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"100\" y1=\"190\" x2=\"480\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"106\" y=\"26\" font-size=\"14\" fill=\"currentColor\">Gereken kuvvet</text><rect x=\"140\" y=\"70\" width=\"70\" height=\"120\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"260\" y=\"105\" width=\"70\" height=\"85\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"380\" y=\"140\" width=\"70\" height=\"50\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"175\" y=\"212\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">K rampası</text><text x=\"295\" y=\"212\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">L rampası</text><text x=\"415\" y=\"212\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">M rampası</text></svg>",
  "secenekler": [
    "M < L < K",
    "K < L < M",
    "L < K < M",
    "K = L = M"
  ],
  "dogru": 1,
  "hatalar": [
    "Kuvveti boy sanma: kuvvet çok olan rampa kısa ve diktir; boy ile kuvvet ters orantılı gider.",
    null,
    "Sütun yüksekliklerini yanlış sıralama: en yüksek sütun K'nindir, K rampası en kısadır.",
    "Aynı yüksekliğe çıkıldığı için boyları eşit sanma: yükseklik aynı olsa da boy farklıysa gereken kuvvet de farklıdır."
  ],
  "aciklama": "Aynı yüksekliğe çıkarken rampa uzadıkça eğim azalır ve gereken kuvvet azalır.\nAdım 1: Grafikte en büyük kuvvet K'dedir; K en diktir, yani en kısadır.\nAdım 2: Kuvvet L'de daha azdır, M'de en azdır. M en az eğimli, yani en uzundur.\nAdım 3: Boylar K < L < M biçiminde sıralanır.\nSağlama: Kuvvet azaldıkça boy artmalıdır; grafik bunu doğrular.\nSık yapılan hata: Kuvveti çok olan rampayı uzun sanmak.\nCevap B."
},
{
  "id": "fen-bm-349",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Limandaki bir vincin kolunun ucunda bir palanga bulunur. Konteyner, palangaya bağlı ipin elektrik motoruyla çekilmesiyle kaldırılıyor. Sürtünmeler ile ip ve makara ağırlıkları önemsizdir.\n**Bu düzenekle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Palanga konteynerin kaldırılması için gereken enerjiyi kendisi üretir.",
    "Palanga motorun konteyneri kaldırmak için yapması gereken işi azaltır.",
    "Palanga ip ucunun aldığı yolu konteynerin aldığı yola eşitler.",
    "Palanga ipi çeken kuvveti küçültür; enerjiyi motor sağlar."
  ],
  "dogru": 3,
  "hatalar": [
    "Basit makineyi enerji kaynağı sanma: palanga enerji üretmez, yalnızca kuvvetin büyüklüğünü ya da yönünü değiştirir.",
    "İşten kazanç sanma: palanga kuvveti küçültür ama işi azaltmaz.",
    "Yol kazancı sanma: palangada ip ucu, konteynerden daha uzun yol alır.",
    null
  ],
  "aciklama": "Basit makineler enerji üretmez. Palanga kuvveti küçültür, ama kuvvetten kazanç yol kaybıyla ödenir ve iş değişmez.\nAdım 1: Konteyneri kaldırmak için gereken enerji motordan gelir; palanga enerji vermez.\nAdım 2: Palanga yükü taşıyan ip sayısını artırdığı için ipi çeken kuvveti küçültür.\nAdım 3: İp ucu konteynerden daha çok yol alır; yapılan iş değişmez.\nSık yapılan hata: Palangayı enerji kaynağı ya da iş azaltıcı sanmak.\nCevap D."
},
{
  "id": "fen-bm-350",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "**Basit makinelerle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Kuvvetin yönünü değiştiren her düzenek aynı zamanda kuvvetten de kazandırır.",
    "Kuvvetten kazanç sağlanan her düzenekte yoldan kayıp vardır.",
    "Eğik düzlemde eğim arttıkça gereken kuvvet azalır.",
    "Kaldıraçta kuvvet kolu kısaldıkça gereken kuvvet azalır."
  ],
  "dogru": 1,
  "hatalar": [
    "Yön değişimini kuvvet kazancı sanma: sabit makara yönü değiştirir ama kuvvetten kazandırmaz.",
    null,
    "Eğimi ters yorumlama: eğim arttıkça rampa dikleşir ve gereken kuvvet artar.",
    "Kuvvet kolunu ters yorumlama: kuvvet kolu kısaldıkça gereken kuvvet artar."
  ],
  "aciklama": "Basit makinelerde kuvvetten kazanç yol kaybıyla ödenir.\nAdım 1: Kuvvet küçüldüyse, iş değişmediği için kuvvetin uygulandığı nokta daha uzun yol alır. Bu ifade doğrudur.\nAdım 2: Sabit makara yönü değiştirir ama kuvvetten kazandırmaz; yön değişimi kazanç demek değildir.\nAdım 3: Eğim arttıkça kuvvet artar; kuvvet kolu kısaldıkça kuvvet artar.\nSık yapılan hata: Eğim ve kol uzunluğunu ters yorumlamak.\nCevap B."
},
{
  "id": "fen-bm-351",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Depo çalışanı Ahmet, bir buzdolabını kamyonetin kasasına rampa kullanarak çıkarırken “Buzdolabı rampada hafifledi, çünkü artık onu daha az kuvvetle itiyorum.” diyor. Sürtünmeler önemsizdir.\n**Ahmet'in söylediği için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Buzdolabının ağırlığı azalmıştır; çünkü eğik düzlem ağırlığı paylaştırır.",
    "Buzdolabının ağırlığı değişmemiştir; yalnızca Ahmet'in uygulaması gereken kuvvet azalmıştır.",
    "Buzdolabının ağırlığı da Ahmet'in uyguladığı kuvvet de doğrudan kaldırmaya göre değişmemiştir.",
    "Buzdolabının ağırlığı değişmemiştir, ancak Ahmet'in yaptığı iş azalmıştır."
  ],
  "dogru": 1,
  "hatalar": [
    "Ağırlık ile gereken kuvveti karıştırma: rampa cismin ağırlığını değiştirmez, yalnızca uygulanacak kuvveti küçültür.",
    null,
    "Rampanın kuvveti azalttığını yok sayma: eğik düzlem, doğrudan kaldırmaya göre gereken kuvveti küçültür.",
    "İşten kazanç sanma: eğik düzlemde kuvvet azalır, yol artar; yapılan iş değişmez."
  ],
  "aciklama": "Ağırlık, Dünya'nın cisme uyguladığı çekim kuvvetidir; rampa kullanmak bunu değiştirmez. Eğik düzlem yalnızca bizim uygulamamız gereken kuvveti küçültür.\nAdım 1: Buzdolabı rampada da, doğrudan kaldırılırken de aynı buzdolabıdır; ağırlığı değişmez.\nAdım 2: Rampa eğimli olduğu için Ahmet'in uygulaması gereken kuvvet azalır.\nAdım 3: Kuvvet azalırken yol uzar; yapılan iş değişmez.\nSık yapılan hata: “Daha az kuvvet” ile “daha hafif” sözcüklerini aynı şey sanmak.\nCevap B."
},
{
  "id": "fen-bm-352",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir dağ köyüne giden yol için iki seçenek var: yamaca dik tırmanan kısa bir patika ile yamacı dolanarak yükselen kıvrımlı uzun bir yol. Yüklü bir traktör, aynı yüksekliğe iki yoldan da sabit hızla çıkabiliyor. Sürtünmeler önemsizdir.\nI. Kıvrımlı yolda traktörün çıktığı yükseklik daha azdır.\nII. Traktörü kıvrımlı yoldan çıkarmak için gereken kuvvet daha azdır.\nIII. Traktör kıvrımlı yolda daha uzun yol alır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "III'ü atlama: kuvvetten kazanç yol kaybıyla ödenir; kıvrımlı yol daha uzundur, III de doğrudur.",
    "II'yi atlama: yol uzayıp eğim azalınca gereken kuvvet de azalır; II de doğrudur.",
    "I'i doğru sanma, II'yi atlama: iki yol da traktörü aynı yüksekliğe çıkarır; kıvrımlı yol yüksekliği değil eğimi azaltır. II doğru olduğu hâlde atlanmış.",
    null
  ],
  "aciklama": "Yamaçtan kıvrılarak çıkan yol bir eğik düzlem gibi çalışır: yol uzadıkça eğim azalır, gereken kuvvet azalır, alınan yol artar.\nAdım 1 (I): Soruda traktör iki yoldan da aynı yüksekliğe çıkıyor. Kıvrımlı yol yüksekliği değiştirmez; yalnızca eğimi azaltır. I yanlıştır.\nAdım 2 (II): Eğim azaldığı için traktörü çıkarmak için gereken kuvvet azalır. II doğrudur.\nAdım 3 (III): Kıvrımlı yol daha uzundur; traktör daha uzun yol alır. III doğrudur.\nSık yapılan hata: Uzun yolun, çıkılan yüksekliği de değiştirdiğini sanmak.\nCevap D."
},
{
  "id": "fen-bm-353",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Üç makaradan K'nin ekseni tavana, L'nin ekseni yükü taşıyan askıya (yükle birlikte yükselir), M'nin ekseni ise duvara sabitlenmiştir. Makaralar tek başına kullanılıyor. Sürtünmeler ile ip ve makara ağırlıkları önemsizdir.\n**Bu makaralardan hangileri tek başına kullanıldığında kuvvetten kazanç sağlamaz?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız K",
    "Yalnız L",
    "K ve M",
    "L ve M"
  ],
  "dogru": 2,
  "hatalar": [
    "M'yi atlama: ekseni duvara sabitlenmiş makara da sabit makaradır ve kuvvetten kazandırmaz.",
    "Makara türlerini ters eşleştirme: yükle birlikte yükselen L hareketli makaradır ve kuvvetten kazandırır.",
    null,
    "Hareketli makarayı kuvvet kazandırmayan sanma: L kuvvetten kazandırır; sabit olan K'yi ise listeden çıkarmışsın."
  ],
  "aciklama": "Sabit makaranın ekseni yerinden oynamaz; yalnızca yönü değiştirir. Hareketli makaranın ekseni yükle birlikte hareket eder ve kuvvetten kazandırır.\nAdım 1: K'nin ekseni tavana bağlıdır; sabit makaradır.\nAdım 2: L'nin ekseni yükle birlikte yükselir; hareketli makaradır, kuvvetten kazandırır.\nAdım 3: M'nin ekseni duvara sabitlenmiştir; sabit makaradır.\nSağlama: Sabit makaralar K ve M'dir.\nSık yapılan hata: Makaranın nereye bağlı olduğuna değil, şekline bakmak.\nCevap C."
},
{
  "id": "fen-bm-354",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir fen öğretmeni, basit makinelerde yapılan değişikliklerin sonuçlarını aşağıdaki tabloda toplamıştır. Sürtünmeler önemsizdir ve her durumda aynı yük aynı yüksekliğe çıkarılmaktadır.\n**Buna göre tablodaki K, L, M ve N ile gösterilen boşluklara sırasıyla aşağıdakilerden hangisi yazılmalıdır?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Değişiklik</th><th>Gereken kuvvet</th><th>Kuvvetin uygulandığı noktanın yolu</th><th>Yapılan iş</th></tr><tr><td>Hareketli makara kullanılması</td><td>Azalır</td><td>Artar</td><td>Değişmez</td></tr><tr><td>Rampa boyunun uzatılması</td><td>Azalır</td><td>K</td><td>L</td></tr><tr><td>Kaldıraçta kuvvet kolunun kısaltılması</td><td>M</td><td>N</td><td>Değişmez</td></tr></table>",
  "secenekler": [
    "Artar – Azalır – Artar – Azalır",
    "Azalır – Değişmez – Artar – Azalır",
    "Artar – Değişmez – Azalır – Artar",
    "Artar – Değişmez – Artar – Azalır"
  ],
  "dogru": 3,
  "hatalar": [
    "İşten kazanç sanma: rampa uzayınca yol artar ama iş azalmaz, değişmez.",
    "Rampada yolun kısaldığını sanma: kuvvet azaldığı için yol uzar.",
    "Kuvvet kolunu ters yorumlama: kuvvet kolu kısalınca gereken kuvvet artar, kuvvetin uygulandığı noktanın yolu azalır.",
    null
  ],
  "aciklama": "Basit makinelerde kuvvet ile yol ters yönde değişir; iş ise değişmez.\nAdım 1 (K): Rampa uzayınca yol artar. K: Artar.\nAdım 2 (L): Basit makinelerde işten kazanç yoktur. L: Değişmez.\nAdım 3 (M, N): Kuvvet kolu kısalınca gereken kuvvet artar, kuvvetin uygulandığı nokta daha az yol alır. M: Artar, N: Azalır.\nSağlama: Kuvvet artınca yol azalıyor, iş değişmiyor; tablo tutarlıdır.\nSık yapılan hata: Kuvvetle yolu aynı yönde değişen büyüklükler sanmak.\nCevap D."
},
{
  "id": "fen-bm-355",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bisiklet fren kolu, bir ucu menteşeli bir çubuktur. Fren teli menteşeye yakın bir noktaya bağlıdır; sürücü kolu ucundan sıkar. Bir bisiklet üreticisi, sürücünün daha az kuvvetle fren yapabilmesi için fren kolunu daha uzun yapıyor.\n**Bu değişiklikle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Kuvvet kolu uzar, gereken kuvvet azalır; elin aldığı yol azalır.",
    "Kuvvet kolu kısalır, gereken kuvvet azalır; elin aldığı yol artar.",
    "Kuvvet kolu uzar, gereken kuvvet azalır; elin aldığı yol artar.",
    "Kuvvet kolu uzar, gereken kuvvet artar; elin aldığı yol azalır."
  ],
  "dogru": 2,
  "hatalar": [
    "Kuvvetten kazancı yoldan da kazanç sanma: kuvvet azalırken el daha uzun yol alır.",
    "Kolu uzatmanın kuvvet kolunu kısalttığını sanma: fren kolu uzayınca kuvvet kolu uzar.",
    null,
    "Kuvvet kolunu ters yorumlama: kuvvet kolu uzadıkça gereken kuvvet azalır."
  ],
  "aciklama": "Fren kolu bir kaldıraçtır: destek menteşedir, yük (tel) menteşeye yakındır, kuvvet kolun ucundadır. Kuvvet kolu uzadıkça gereken kuvvet azalır, el daha çok yol alır.\nAdım 1: Fren kolu uzayınca el menteşeden uzaklaşır; kuvvet kolu uzar.\nAdım 2: Kuvvet kolu uzayınca gereken kuvvet azalır.\nAdım 3: Kuvvetten kazanç yol kaybıyla ödenir; el daha uzun yol alır.\nSık yapılan hata: Kolun uzamasını kuvvetin artması ile ilişkilendirmek.\nCevap C."
},
{
  "id": "fen-bm-356",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Şekilde özdeş yükler, aynı uzunlukta K, L ve M çubuklarıyla dengede tutuluyor. Kuvvetler aşağı doğru ve şekilde gösterilen noktalarda uygulanıyor. Bölmeler eşit aralıklıdır.\n**Dengeyi sağlamak için gereken kuvvetlerin küçükten büyüğe sıralanışı aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 430\" role=\"img\" aria-label=\"Destek ve kuvvet noktaları farklı olan K, L ve M kaldıraçları\"><line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"70\" x2=\"110\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"70\" x2=\"170\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"70\" x2=\"230\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"70\" x2=\"290\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"70\" x2=\"350\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"70\" x2=\"410\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"70\" x2=\"470\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"70\" x2=\"530\" y2=\"63\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"70\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"210,117 250,117 230,80\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"230\" y=\"136\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"50\" y1=\"80\" x2=\"50\" y2=\"105\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"28\" y=\"105\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"126\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"530\" y1=\"22\" x2=\"530\" y2=\"58\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"530,69 524,58 536,58\" fill=\"var(--vurgu)\"/><text x=\"542\" y=\"42\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"6\" y=\"54\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">K</text><line x1=\"50\" y1=\"205\" x2=\"50\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"205\" x2=\"110\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"205\" x2=\"170\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"205\" x2=\"230\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"205\" x2=\"290\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"205\" x2=\"350\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"205\" x2=\"410\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"205\" x2=\"470\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"205\" x2=\"530\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"205\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"90,252 130,252 110,215\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"110\" y=\"271\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"50\" y1=\"215\" x2=\"50\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"28\" y=\"240\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"261\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"530\" y1=\"157\" x2=\"530\" y2=\"193\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"530,204 524,193 536,193\" fill=\"var(--vurgu)\"/><text x=\"542\" y=\"177\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"6\" y=\"189\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">L</text><line x1=\"50\" y1=\"340\" x2=\"50\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"340\" x2=\"110\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"170\" y1=\"340\" x2=\"170\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"340\" x2=\"230\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"290\" y1=\"340\" x2=\"290\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350\" y1=\"340\" x2=\"350\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"410\" y1=\"340\" x2=\"410\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"470\" y1=\"340\" x2=\"470\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"530\" y1=\"340\" x2=\"530\" y2=\"333\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"340\" width=\"480\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"150,387 190,387 170,350\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"170\" y=\"406\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Destek</text><line x1=\"50\" y1=\"350\" x2=\"50\" y2=\"375\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"28\" y=\"375\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"50\" y=\"396\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"470\" y1=\"292\" x2=\"470\" y2=\"328\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"470,339 464,328 476,328\" fill=\"var(--vurgu)\"/><text x=\"482\" y=\"312\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"6\" y=\"324\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">M</text></svg>",
  "secenekler": [
    "K < M < L",
    "K < L < M",
    "M < L < K",
    "L < M < K"
  ],
  "dogru": 3,
  "hatalar": [
    "Kolları ters yorumlama: desteği yüke uzak olan K'de yük kolu uzun olduğu için gereken kuvvet en büyüktür.",
    "Yalnızca kuvvetin noktasına bakma: kuvvet kolunun uzunluğu kadar yük kolunun kısalığı da önemlidir.",
    "Yalnızca destek yüke yaklaştıkça kuvvetin arttığını sanma: desteği yüke en yakın olan L'de kuvvet en küçüktür.",
    null
  ],
  "aciklama": "Yük kolu kısaldıkça ve kuvvet kolu uzadıkça gereken kuvvet azalır.\nAdım 1: K'de yük kolu 3, kuvvet kolu 5 bölmedir. L'de yük kolu 1, kuvvet kolu 7 bölmedir. M'de yük kolu 2, kuvvet kolu 5 bölmedir.\nAdım 2: L'nin yük kolu M'ninkinden kısa, kuvvet kolu ise uzundur; L'de kuvvet M'dekinden küçüktür.\nAdım 3: M ile K'nin kuvvet kolları eşittir (5 bölme), M'nin yük kolu K'ninkinden kısadır; M'de kuvvet K'dekinden küçüktür.\nSağlama: Sıralama L < M < K olur.\nSık yapılan hata: Yalnızca bir kolun uzunluğuna bakmak.\nCevap D."
},
{
  "id": "fen-bm-357",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aynı yük, K, L ve M rampalarından sürtünmesiz biçimde rampa boyunca çıkarılıyor. Rampaların boyları ve yükseklikleri tabloda verilmiştir.\n**Buna göre gereken kuvvetin en büyük olduğu rampa ile yükün aldığı yolun en uzun olduğu rampa sırasıyla hangileridir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Rampa</th><th>Boy</th><th>Yükseklik</th></tr><tr><td>K</td><td>4 m</td><td>2 m</td></tr><tr><td>L</td><td>4 m</td><td>1 m</td></tr><tr><td>M</td><td>6 m</td><td>1 m</td></tr></table>",
  "secenekler": [
    "K ve M",
    "M ve M",
    "K ve K",
    "M ve K"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Uzun rampayı kuvveti en büyük sanma: rampa uzadıkça eğim azalır ve gereken kuvvet azalır. M, yüksekliği L ile aynı olan ve daha uzun olan rampadır; kuvveti en küçüktür.",
    "Yüksek rampayı yolu en uzun sanma: yolu rampa boyu belirler, yükseklik değil. K ve L'nin boyları eşittir, en uzun rampa M'dir.",
    "Soruyu ters yorumlama: kuvveti en büyük olan K, yolu en uzun olan M'dir; iki rampanın yeri değiştirilmiş."
  ],
  "aciklama": "Yolu rampa boyu belirler. Gereken kuvvet ise rampanın eğimine bağlıdır: yükseklik aynıyken boy uzadıkça, boy aynıyken yükseklik azaldıkça eğim küçülür ve gereken kuvvet azalır.\nAdım 1 (yol): Boylar 4, 4 ve 6 m'dir; yolu en uzun olan rampa M'dir.\nAdım 2 (K ile L): İkisinin boyu eşittir (4 m). K daha yüksek olduğu için daha diktir; K'de gereken kuvvet L'dekinden büyüktür.\nAdım 3 (L ile M): İkisinin yüksekliği eşittir (1 m). M daha uzun olduğu için daha az eğimlidir; M'de gereken kuvvet L'dekinden küçüktür.\nAdım 4: Sıralama K > L > M olur; gereken kuvvet en büyük K'dedir.\nSağlama: K en diktir, M en az eğimlidir ve yolu en uzundur.\nSık yapılan hata: Yalnızca rampa boyuna bakıp yüksekliği unutmak.\nCevap A."
},
{
  "id": "fen-bm-358",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Şekildeki K, L ve M palangalarıyla özdeş yükler aynı yüksekliğe çıkarılıyor. Sürtünmeler ile ip ve makara ağırlıkları önemsizdir.\n**Buna göre ipi çeken kuvvetin en küçük olduğu düzenek ile ip ucunun aldığı yolun en kısa olduğu düzenek sırasıyla hangileridir?**",
  "gorsel": "<svg viewBox=\"0 0 560 245\" role=\"img\" aria-label=\"Yükü taşıyan ip sayıları farklı K, L ve M palangaları\"><line x1=\"20\" y1=\"15\" x2=\"540\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"4\"/><line x1=\"28\" y1=\"15\" x2=\"21\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"15\" x2=\"33\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"52\" y1=\"15\" x2=\"45\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"64\" y1=\"15\" x2=\"57\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"76\" y1=\"15\" x2=\"69\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"88\" y1=\"15\" x2=\"81\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"15\" x2=\"93\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"112\" y1=\"15\" x2=\"105\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"124\" y1=\"15\" x2=\"117\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"136\" y1=\"15\" x2=\"129\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"148\" y1=\"15\" x2=\"141\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"15\" x2=\"153\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"172\" y1=\"15\" x2=\"165\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"184\" y1=\"15\" x2=\"177\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"196\" y1=\"15\" x2=\"189\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"208\" y1=\"15\" x2=\"201\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"220\" y1=\"15\" x2=\"213\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"232\" y1=\"15\" x2=\"225\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"244\" y1=\"15\" x2=\"237\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"256\" y1=\"15\" x2=\"249\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"268\" y1=\"15\" x2=\"261\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"280\" y1=\"15\" x2=\"273\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"292\" y1=\"15\" x2=\"285\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"304\" y1=\"15\" x2=\"297\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"316\" y1=\"15\" x2=\"309\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"328\" y1=\"15\" x2=\"321\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"340\" y1=\"15\" x2=\"333\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"352\" y1=\"15\" x2=\"345\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"364\" y1=\"15\" x2=\"357\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"376\" y1=\"15\" x2=\"369\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"388\" y1=\"15\" x2=\"381\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"400\" y1=\"15\" x2=\"393\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"412\" y1=\"15\" x2=\"405\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"424\" y1=\"15\" x2=\"417\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"436\" y1=\"15\" x2=\"429\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"448\" y1=\"15\" x2=\"441\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"460\" y1=\"15\" x2=\"453\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"472\" y1=\"15\" x2=\"465\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"484\" y1=\"15\" x2=\"477\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"496\" y1=\"15\" x2=\"489\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"508\" y1=\"15\" x2=\"501\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"520\" y1=\"15\" x2=\"513\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"532\" y1=\"15\" x2=\"525\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"90\" y1=\"15\" x2=\"90\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"65\" y=\"30\" width=\"50\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"65\" y=\"126\" width=\"50\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"79\" y1=\"56\" x2=\"79\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"101\" y1=\"56\" x2=\"101\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"90\" y1=\"152\" x2=\"90\" y2=\"168\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"68\" y=\"168\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"90\" y=\"189\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"115\" y1=\"40\" x2=\"131\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"131\" y1=\"40\" x2=\"131\" y2=\"109\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"131,120 125,109 137,109\" fill=\"var(--vurgu)\"/><text x=\"141\" y=\"90\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"90\" y=\"232\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">K</text><line x1=\"280\" y1=\"15\" x2=\"280\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"233\" y=\"30\" width=\"94\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"233\" y=\"126\" width=\"94\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"247\" y1=\"56\" x2=\"247\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"269\" y1=\"56\" x2=\"269\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"291\" y1=\"56\" x2=\"291\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"313\" y1=\"56\" x2=\"313\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"280\" y1=\"152\" x2=\"280\" y2=\"168\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"258\" y=\"168\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"189\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"327\" y1=\"40\" x2=\"343\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"343\" y1=\"40\" x2=\"343\" y2=\"109\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"343,120 337,109 349,109\" fill=\"var(--vurgu)\"/><text x=\"353\" y=\"90\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"280\" y=\"232\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">L</text><line x1=\"460\" y1=\"15\" x2=\"460\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"424\" y=\"30\" width=\"72\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"424\" y=\"126\" width=\"72\" height=\"26\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"438\" y1=\"56\" x2=\"438\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"460\" y1=\"56\" x2=\"460\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"482\" y1=\"56\" x2=\"482\" y2=\"126\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"460\" y1=\"152\" x2=\"460\" y2=\"168\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"438\" y=\"168\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"189\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Yük</text><line x1=\"496\" y1=\"40\" x2=\"512\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"512\" y1=\"40\" x2=\"512\" y2=\"109\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polygon points=\"512,120 506,109 518,109\" fill=\"var(--vurgu)\"/><text x=\"522\" y=\"90\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">F</text><text x=\"460\" y=\"232\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">M</text></svg>",
  "secenekler": [
    "K ve L",
    "L ve L",
    "L ve K",
    "K ve K"
  ],
  "dogru": 2,
  "hatalar": [
    "Kuvvet ile yolu ters eşleştirme: ip sayısı en çok olan L'de kuvvet en küçüktür, ip ucunun yolu ise en uzundur.",
    "Kuvvet azalınca yolun da azalacağını sanma: kuvveti en küçük olan düzenekte ip ucu en uzun yolu alır.",
    null,
    "Yolu kısa olan düzeneği kuvveti de küçük sanma: K'de yol kısadır ama kuvvet en büyüktür."
  ],
  "aciklama": "Yükü taşıyan ip parçalarının sayısı arttıkça gereken kuvvet azalır, ip ucunun aldığı yol artar.\nAdım 1: İpleri say. Yükü K'de 2, L'de 4, M'de 3 ip parçası taşır.\nAdım 2: Kuvvet en küçük olan, ip sayısı en çok olan L'dir.\nAdım 3: İp ucunun yolu en kısa olan, ip sayısı en az olan K'dir.\nSağlama: Kuvvet ve yol ters yönde değişir; L'de kuvvet en az, yol en çoktur; K'de tersidir.\nSık yapılan hata: Kuvveti en küçük düzeneğin yolunu da en kısa sanmak.\nCevap C."
},
{
  "id": "fen-bm-359",
  "kazanim": "F.8.5.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Dar bir sokaktaki tarihî hanın üst katına ağır eşyalar çıkarılacak. Hanın önünde rampa kurmak için yatay alan yoktur; çatı kirişi sağlamdır ve işçi yerden ipi çekecektir. Sürtünmeler önemsizdir.\n**İşçiler eşyaları en az kuvvetle çıkarmak için aşağıdaki tasarım ve gerekçelerden hangisini seçmelidir?**",
  "gorsel": null,
  "secenekler": [
    "Uzun bir rampa kurmak; çünkü rampa uzadıkça gereken kuvvet azalır.",
    "Kirişe tek bir sabit makara kurmak; çünkü sabit makara gereken kuvveti azaltır.",
    "Eşyayı ipe bağlayıp elle yukarı çekmek; çünkü ip kuvveti azaltır.",
    "Kirişe palanga kurmak; çünkü taşıyıcı ip sayısı arttıkça kuvvet azalır."
  ],
  "dogru": 3,
  "hatalar": [
    "Kısıtı gözden kaçırma: rampa kuvveti azaltır ama burada rampa için yatay alan yoktur.",
    "Sabit makarayı kuvvet kazandıran sanma: sabit makara yalnızca yönü değiştirir.",
    "İpi basit makine sanma: ip kuvvetin büyüklüğünü değiştirmez, gereken kuvvet eşyanın ağırlığı kadardır.",
    null
  ],
  "aciklama": "Önce kısıtları yaz: rampa olmaz (yatay alan yok), kiriş kullanılabilir, kuvvet en az olmalı.\nAdım 1: Rampa seçeneği alan kısıtı yüzünden elenir.\nAdım 2: Sabit makara ve düz ip kuvveti azaltmaz.\nAdım 3: Kirişe kurulan palangada yükü taşıyan ip sayısı artar; gereken kuvvet azalır ve işçi ipi yerden aşağı çekebilir.\nSık yapılan hata: Kısıtı okumadan en çok bilinen makineyi seçmek.\nCevap D."
},
{
  "id": "fen-bm-360",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Fen öğretmeni, “Kuvvetten kazanç vardır ama işten kazanç yoktur.” cümlesinin hangi düzenekler için doğru olduğunu soruyor.\nI. İnşaat iskelesinin tepesindeki sabit makara\nII. Ambara sandık çıkarmakta kullanılan uzun rampa\nIII. Kolu uzun olan bir kuyu çıkrığı\n**Bu cümle yukarıdaki düzeneklerden hangileri için doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Sabit makarada kuvvetten kazanç yoktur; I'de cümlenin ilk yarısı sağlanmaz. Doğru olan II ve III atlanmış.",
    "II'yi atlama: rampa da kuvvetten kazandırır ama işten kazandırmaz; II de doğrudur.",
    "I'i doğru sanma: sabit makara yalnızca yönü değiştirir, kuvvetten kazandırmaz. III de atlanmış.",
    null
  ],
  "aciklama": "Cümlenin doğru olması için düzenek kuvvetten kazandırmalı, iş ise değişmemelidir.\nAdım 1 (I): Sabit makara kuvvetten kazandırmaz; yalnızca yönü değiştirir. Cümle doğru değildir.\nAdım 2 (II): Rampa kuvveti azaltır, yolu uzatır; işten kazanç yoktur. Cümle doğrudur.\nAdım 3 (III): Kolu uzun çıkrık kuvveti azaltır, kolun ucu daha uzun yol alır; işten kazanç yoktur. Cümle doğrudur.\nSık yapılan hata: Makara görünce kuvvetten kazanç olduğunu sanmak.\nCevap D."
},
{
  "id": "fen-bm-361",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir kurtarma aracında üç parça inceleniyor: K, arızalı otomobili araca çıkaran eğimli yükleme tahtasıdır; L, sürücünün aracı çevirmek için kullandığı direksiyon simididir; M ise çekme halatının geçtiği, ekseni vinç koluna sabitlenmiş makaradır.\n**K, L ve M parçaları sırasıyla aşağıdaki basit makinelerden hangisine örnektir?**",
  "gorsel": null,
  "secenekler": [
    "Eğik düzlem – Çıkrık – Sabit makara",
    "Kaldıraç – Çıkrık – Hareketli makara",
    "Eğik düzlem – Kaldıraç – Sabit makara",
    "Çıkrık – Eğik düzlem – Hareketli makara"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eğimli yüzeyi kaldıraç sanma: dönen bir çubuk yoksa eğik düzlemdir. Ekseni sabit makarayı da hareketli sanmışsın.",
    "Direksiyonu kaldıraç sanma: çevrilen tekerlek, çıkrık gibi çalışır.",
    "Parçaları karıştırma: yükleme tahtası eğik düzlem, direksiyon çıkrıktır; ekseni sabit makara sabittir."
  ],
  "aciklama": "Eğimli yüzey eğik düzlem, çevrilen tekerlek ya da kol çıkrık, ekseni yerinde duran makara sabit makaradır.\nAdım 1 (K): Yükleme tahtası eğimlidir; eğik düzlemdir.\nAdım 2 (L): Direksiyon simidi bir milin etrafında çevrilir; çapı büyüdükçe çevirmek kolaylaşır. Çıkrık gibi çalışır.\nAdım 3 (M): Ekseni vinç koluna sabitlenmiştir; yerinden oynamaz. Sabit makaradır.\nSık yapılan hata: Parçaların görünüşüne değil, çalışma biçimine bakmamak.\nCevap A."
},
{
  "id": "fen-bm-362",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aynı yük, aynı yüksekliğe K ve L basit makine düzenekleriyle çıkarılıyor. Sürtünmeler önemsizdir ve K düzeneğinde gereken kuvvet L düzeneğindekinden küçüktür.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "İki düzenekte yükü çıkarmak için yapılan iş eşittir.",
    "K düzeneği bir hareketli makaradır.",
    "K düzeneğinde yükün aldığı yol L düzeneğindekinden fazladır.",
    "K düzeneğinde yapılan iş L düzeneğindekinden azdır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Düzeneğin türünü kesinleştirme: kuvvetin az olması rampa, kaldıraç, çıkrık ya da palanga için de olabilir.",
    "Yükün yolunu düzeneğin yoluyla karıştırma: yük iki düzenekte de aynı yüksekliğe çıkar.",
    "İşten kazanç sanma: kuvvet azalsa da kuvvetin uygulandığı nokta daha uzun yol alır; iş değişmez."
  ],
  "aciklama": "Basit makinelerde işten kazanç yoktur: aynı yük aynı yüksekliğe çıktığında sürtünme yoksa iş her zaman aynıdır.\nAdım 1: Kuvvetin az olması hangi düzenek olduğunu belirlemez; K rampa, kaldıraç ya da palanga olabilir.\nAdım 2: Yük aynı yüksekliğe çıktığı için yükün yolu iki durumda da aynıdır.\nAdım 3: İş değişmediğinden K'de kuvvet küçükse kuvvetin uygulandığı nokta daha uzun yol alır; ama iş eşit kalır.\nSık yapılan hata: Kuvvetten kazancı işten kazanç sanmak.\nCevap A."
},
{
  "id": "fen-bm-363",
  "kazanim": "F.8.5.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir ilkokulun girişindeki basamakların yüksekliği 60 cm'dir. Okul yönetimi, tekerlekli sandalye kullanan öğrencilerin kolay çıkabilmesi için basamakların yanına rampa yaptıracak. Ayrılan alanın izin verdiği en uzun rampa boyu 6 m'dir. Yönetim, öğrencileri çıkarmak için gereken kuvvetin en az olmasını istiyor; ayrıca rampa ne kadar uzun olursa o kadar az iş yapılacağını düşünüyor. Sürtünmeler önemsizdir.\n**Buna göre yönetimin seçeceği rampa boyu ve yapılan iş ile ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "3 m'lik rampa seçilir; yapılan iş değişmez.",
    "4,5 m'lik rampa seçilir; yapılan iş azalır.",
    "6 m'lik rampa seçilir; yapılan iş değişmez.",
    "8 m'lik rampa seçilir; yapılan iş azalır."
  ],
  "dogru": 2,
  "hatalar": [
    "Kısa rampayı seçme: aynı yüksekliğe kısa rampadan çıkmak daha büyük kuvvet ister. İş yargısı doğru ama boy yanlıştır.",
    "Hem boyu hem işi yanlış değerlendirme: 4,5 m, izin verilen en uzun boy değildir, 6 m'ye göre daha büyük kuvvet gerektirir. Ayrıca rampa uzasa da iş azalmaz.",
    null,
    "Kısıtı gözden kaçırma ve işten kazanç sanma: 8 m izin verilen 6 m'yi aşar. Ayrıca rampa uzasa da yapılan iş azalmaz."
  ],
  "aciklama": "Yükseklik sabitken rampa uzadıkça eğim azalır ve gereken kuvvet azalır. Ama alan kısıtı rampa boyunu sınırlar. Basit makineler kuvvetten kazanç sağlar, işten kazanç sağlamaz.\nAdım 1: Kuvveti azaltmak için rampa mümkün olduğunca uzun olmalıdır.\nAdım 2: İzin verilen en uzun boy 6 m'dir; 8 m bu sınırı aşar. Sınır içinde en uzun seçenek 6 m'dir.\nAdım 3: Rampa uzayınca kuvvet azalır, alınan yol artar; çarpımları yani iş değişmez. Sandalye aynı yüksekliğe çıktığı ve sürtünme olmadığı için iş her rampada aynıdır.\nSağlama: 3 m ve 4,5 m daha diktir, 8 m sınırı aşar; \"iş azalır\" diyen seçenekler de yanlıştır.\nSık yapılan hata: Kolaylığı iş azalması sanmak.\nCevap C."
},
{
  "id": "fen-bm-364",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Şekildeki K, L ve M çıkrıklarıyla özdeş kovalar aynı derinlikteki kuyulardan çıkarılıyor. Çıkrıkların kolları ve tamburları farklıdır. Sürtünmeler önemsizdir.\n**Kovaları çıkarmak için gereken kuvvetlerin küçükten büyüğe sıralanışı aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 215\" role=\"img\" aria-label=\"K: ince tambur ve uzun kol, L: kalın tambur ve kısa kol, M: kalın tambur ve uzun kol\"><line x1=\"48\" y1=\"50\" x2=\"48\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"26\" y=\"150\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"48\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kova</text><circle cx=\"60\" cy=\"50\" r=\"12\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"60\" y1=\"50\" x2=\"140\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"140\" cy=\"50\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"50\" r=\"3\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"33\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kol</text><text x=\"60\" y=\"207\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">K çıkrığı</text><line x1=\"196\" y1=\"50\" x2=\"196\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"174\" y=\"150\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"196\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kova</text><circle cx=\"220\" cy=\"50\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"220\" y1=\"50\" x2=\"260\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"260\" cy=\"50\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"220\" cy=\"50\" r=\"3\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"33\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kol</text><text x=\"220\" y=\"207\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">L çıkrığı</text><line x1=\"336\" y1=\"50\" x2=\"336\" y2=\"150\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"314\" y=\"150\" width=\"44\" height=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"336\" y=\"171\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kova</text><circle cx=\"360\" cy=\"50\" r=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"360\" y1=\"50\" x2=\"440\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"440\" cy=\"50\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"360\" cy=\"50\" r=\"3\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"33\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Kol</text><text x=\"360\" y=\"207\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">M çıkrığı</text></svg>",
  "secenekler": [
    "L < M < K",
    "K < L < M",
    "K < M < L",
    "M < K < L"
  ],
  "dogru": 2,
  "hatalar": [
    "Sıralamayı ters kurma: kolu kısa ve tamburu kalın olan L'de gereken kuvvet en büyüktür.",
    "Kol uzunluğunu ters yorumlama: M'nin kolu L'ninkinden uzun olduğu için M'de gereken kuvvet L'dekinden azdır.",
    null,
    "Tambur inceliğini yok sayma: K'nin tamburu M'ninkinden incedir ve kolları eşittir; K'de kuvvet M'dekinden azdır."
  ],
  "aciklama": "Kol uzadıkça ve tambur inceldikçe gereken kuvvet azalır.\nAdım 1: K ile M'nin kolları aynı (uzun); K'nin tamburu daha ince. Bu yüzden K'de kuvvet M'dekinden azdır.\nAdım 2: M ile L'nin tamburları aynı (kalın); M'nin kolu daha uzun. Bu yüzden M'de kuvvet L'dekinden azdır.\nAdım 3: Sıralama K < M < L olur.\nSağlama: Her ikili karşılaştırmada tek bir fark vardır; zincir tutarlıdır.\nSık yapılan hata: Kol ve tambur değişkenlerinden yalnızca birine bakmak.\nCevap C."
},
{
  "id": "fen-bm-365",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir çiftlikteki ambarın girişine kurulan rampa için şu yargılar ileri sürülüyor. Sürtünmeler önemsizdir.\nI. Rampa, kuvvetten kazanç sağlar ama işten kazanç sağlamaz.\nII. Rampanın eğimi artırılırsa kuvvetten kazanç artar.\nIII. Rampa, yükün aldığı yolu kısaltır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eğimi ters yorumlama: eğim arttıkça rampa dikleşir, kuvvetten kazanç azalır. II yanlıştır; I doğru olduğu hâlde atlanmış.",
    "Yolun kısaldığını sanma: rampa kuvveti azaltırken yolu uzatır. III yanlıştır.",
    "II ve III yanlıştır: eğim artınca kazanç azalır ve rampa yolu kısaltmaz, uzatır."
  ],
  "aciklama": "Eğik düzlemde kuvvetten kazanç vardır, işten kazanç yoktur.\nAdım 1 (I): Rampa gereken kuvveti azaltır, yolu uzatır; iş değişmez. I doğrudur.\nAdım 2 (II): Eğim arttıkça rampa dikleşir; gereken kuvvet artar, kuvvetten kazanç azalır. II yanlıştır.\nAdım 3 (III): Rampa yolu uzatır, kısaltmaz. III yanlıştır.\nSık yapılan hata: Eğim arttıkça kolaylık arttığını sanmak.\nCevap A."
},
{
  "id": "fen-bm-366",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir bisikletin parçaları, basit makine türleriyle şöyle eşleştiriliyor:\nI. Fren kolu – Kaldıraç\nII. Zincirin geçtiği dişliler – Sabit makara\nIII. Sele borusunu sıkan vida – Vida\n**Buna göre bu eşleştirmelerden hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "III'ü atlama: yivli bir silindir olan vida da bir basit makinedir; sele borusunu sıkan vida, vida olarak eşleştirilmiştir. III de doğrudur.",
    null,
    "I'i atlama, II'yi doğru sanma: fren kolu menteşe etrafında dönen bir çubuktur, yani kaldıraçtır; I doğrudur. Zincirin geçtiği dişliler ise sabit makara değil, dişli çarktır.",
    "II'yi doğru sanma: zincir dişlilere dişleriyle kavrar; bu parçalar dişli çarktır. Sabit makara ise ipin geçtiği, dişi olmayan oluklu tekerlektir."
  ],
  "aciklama": "Bileşik araçların parçalarına ayrı ayrı bak; her parça kendi çalışma biçimiyle sınıflandırılır.\nAdım 1 (I): Fren kolu menteşe etrafında dönen bir çubuktur; kaldıraçtır. I doğrudur.\nAdım 2 (II): Zincir, dişlilerin dişlerine kavrayarak hareketi aktarır; bunlar dişli çarktır. Sabit makara ise ipin geçtiği, dişi olmayan oluklu bir tekerlektir. II yanlıştır.\nAdım 3 (III): Yivli bir silindir olan vida bir basit makinedir; sele borusunu sıkan parça da vidadır. III doğrudur.\nSık yapılan hata: Üzerinden zincir ya da ip geçen her dönen tekerleği makara sanmak.\nCevap B."
},
{
  "id": "fen-bm-367",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "**Aşağıdaki araç ikililerinden hangisi, nasıl kullanılırsa kullanılsın kesinlikle kuvvetten kazanç sağlar?**",
  "gorsel": null,
  "secenekler": [
    "Makas ve tel kesme pensesi",
    "Cımbız ve ızgara maşası",
    "Makas ve ince uçlu cımbız",
    "El arabası ve fındık kıracağı"
  ],
  "dogru": 3,
  "hatalar": [
    "Destek ortadaki kaldıraçlarda kazanç kolların uzunluğuna bağlıdır; tel ağzın ucuna yerleştirilirse kazanç kaybolabilir.",
    "Kuvvet ortadaki kaldıraçlarda kuvvet kolu kısadır; bu araçlar kuvvetten kazandırmaz.",
    "Cımbızda kuvvet kolu yük kolundan kısadır; makasta ise kazanç kullanılışa bağlıdır. Kesin kazanç yoktur.",
    null
  ],
  "aciklama": "Yük ortadaysa kuvvet kolu her zaman yük kolundan uzundur; kuvvetten kazanç kesindir. Destek ortadaysa kazanç, kolların uzunluğuna bağlıdır. Kuvvet ortadaysa kazanç yoktur.\nAdım 1: El arabasında ve fındık kıracağında yük ortadadır; kuvvet kolu uzundur. Kazanç kesindir.\nAdım 2: Makas ve pensede destek ortadadır; nesne menteşeden uzağa konursa kazanç azalır.\nAdım 3: Cımbız ve maşada kuvvet ortadadır; kazanç yoktur.\nSık yapılan hata: Tüm kaldıraçların her zaman kuvvetten kazandırdığını düşünmek.\nCevap D."
},
{
  "id": "fen-bm-368",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Fen kulübünde kaldıraçlarla ilgili şu yargılar ileri sürülüyor:\nI. Kuvvet ortadaysa kuvvetten kazanç sağlanmaz.\nII. Kuvvet kolu yük kolundan uzunsa işten de kazanç sağlanır.\nIII. Kuvvet kolu yük kolundan uzunsa kuvvetin uygulandığı nokta, yükten daha uzun yol alır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "III'ü atlama: kuvvetten kazanç yol kaybıyla gelir; kuvvet kolu uzunsa kuvvetin uygulandığı nokta daha uzun yol alır. III de doğrudur.",
    null,
    "I'i atlama: kuvvet ortadayken kuvvet kolu kısadır, kuvvetten kazanç olmaz; I de doğrudur. II ise yanlıştır.",
    "II'yi doğru sanma: hiçbir kaldıraç işten kazanç sağlamaz; II yanlıştır."
  ],
  "aciklama": "Kaldıraçta kuvvet kolu yük kolundan uzunsa kuvvetten kazanç vardır; karşılığında yol kaybı olur. İş ise değişmez.\nAdım 1 (I): Kuvvet ortadaysa kuvvet kolu yük kolundan kısadır; kuvvetten kazanç yoktur. I doğrudur.\nAdım 2 (II): Hiçbir kaldıraç işten kazandırmaz. II yanlıştır.\nAdım 3 (III): Kuvvet kolu uzunsa kuvvetin uygulandığı nokta yükten daha uzun yol alır. III doğrudur.\nSık yapılan hata: Kuvvetten kazancı işten kazanç sanmak.\nCevap B."
},
{
  "id": "fen-bm-369",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "**Palangayla ilgili aşağıdakilerden hangisi kesinlikle __yanlıştır__?**",
  "gorsel": null,
  "secenekler": [
    "Yükü taşıyan ip sayısı arttıkça ip ucunun aldığı yol azalır.",
    "Sabit makara içeren bir palangada ip aşağı doğru çekilebilir.",
    "Yükü taşıyan ip sayısı arttıkça gereken kuvvet azalır.",
    "Palanga kuvvetten kazanç sağlar ama işten kazanç sağlamaz."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Doğru bir ifadeyi yanlış sanma: palangadaki sabit makara ipin yönünü değiştirir.",
    "Doğru bir ifadeyi yanlış sanma: ip sayısı arttıkça yük daha çok ipe paylaşılır ve kuvvet azalır.",
    "Doğru bir ifadeyi yanlış sanma: palangada da iş değişmez."
  ],
  "aciklama": "Yanlış olan ifadeyi arıyoruz; üç ifade doğrudur.\nAdım 1: Sabit makaralı palangada ip aşağı çekilebilir. Doğru.\nAdım 2: İp sayısı arttıkça gereken kuvvet azalır. Doğru.\nAdım 3: Palanga işten kazanç sağlamaz. Doğru.\nAdım 4: İp sayısı arttıkça kuvvet azalırken ip ucunun yolu azalmaz, artar. Bu ifade yanlıştır.\nSık yapılan hata: Kuvvet ve yolu aynı yönde değişen büyüklükler sanmak.\nCevap A."
},
{
  "id": "fen-bm-370",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Fen kulübü, çıkrık modeliyle ilgili şu yargılara ulaşıyor. Sürtünmeler önemsizdir.\nI. Çıkrık kuvvetten kazanç sağlar ama işten kazanç sağlamaz.\nII. Kol uzadıkça kolun ucu daha çok yol alır.\nIII. Tambur kalınlaştıkça kuvvetten kazanç artar.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "II'yi atlama: kuvvetten kazanç yol kaybıyla ödenir; kol uzadıkça kolun ucu daha çok yol alır. II de doğrudur.",
    null,
    "Tamburu ters yorumlama: tambur kalınlaştıkça gereken kuvvet artar, kazanç azalır. III yanlıştır; II atlanmış.",
    "I'i atlama ve III'ü doğru sanma: çıkrık kuvvetten kazandırır, ama tambur kalınlaşınca kazanç azalır."
  ],
  "aciklama": "Çıkrıkta kol uzadıkça gereken kuvvet azalır, kolun ucu daha çok yol alır; tambur kalınlaştıkça gereken kuvvet artar. İş değişmez.\nAdım 1 (I): Çıkrık kuvvetten kazandırır, işten kazandırmaz. I doğrudur.\nAdım 2 (II): Kuvvetten kazanç yol kaybıyla ödenir; kol uzadıkça kolun ucu daha çok yol alır. II doğrudur.\nAdım 3 (III): Tambur kalınlaşınca gereken kuvvet artar, kazanç azalır. III yanlıştır.\nSık yapılan hata: Kalın tamburun daha güçlü olduğunu sanmak.\nCevap B."
},
{
  "id": "fen-bm-371",
  "kazanim": "F.8.5.1.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bahçıvan Selçuk, ağaçtaki kalın bir dalı budayacak. Elindeki dört makasın hepsinde destek (menteşe) ortadadır. Dal kalın olduğu için makasın ağzının ucuna yerleştirilerek kesilecek ve sapları sıkılacak. Selçuk en az kuvveti uygulamak istiyor.\n**Selçuk hangi makası ve hangi gerekçeyi seçmelidir?**",
  "gorsel": null,
  "secenekler": [
    "Sapları uzun, ağzı uzun olan; çünkü yalnızca kuvvet kolunun uzunluğu önemlidir.",
    "Sapları kısa, ağzı kısa olan; çünkü yalnızca yük kolunun kısalığı önemlidir.",
    "Sapları uzun, ağzı kısa olan; çünkü kuvvet kolu uzar, yük kolu kısalır.",
    "Sapları kısa, ağzı uzun olan; çünkü yük kolu uzadıkça kesmek kolaylaşır."
  ],
  "dogru": 2,
  "hatalar": [
    "Yük kolunu yok sayma: dal ağzın ucuna konduğundan ağız uzunsa yük kolu da uzar ve kuvvetten kazanç azalır.",
    "Kuvvet kolunu yok sayma: sapların kısa olması kuvvet kolunu kısaltır ve gereken kuvveti artırır.",
    null,
    "Yük kolunu ters yorumlama: yük kolu uzadıkça gereken kuvvet artar."
  ],
  "aciklama": "Kaldıraçta kuvvet kolu uzadıkça ve yük kolu kısaldıkça gereken kuvvet azalır.\nAdım 1: Kuvvet kolu, destek ile elin yeri arasındadır; saplar uzunsa kuvvet kolu uzar.\nAdım 2: Yük kolu, destek ile kesilen dal arasındadır. Dal ağzın ucuna yerleştirildiği için ağız kısaysa yük kolu kısalır, ağız uzunsa yük kolu uzar.\nAdım 3: En az kuvvet için iki etki birlikte aranır: uzun sap (uzun kuvvet kolu), kısa ağız (kısa yük kolu).\nSık yapılan hata: Yalnızca tek bir kolun uzunluğuna bakmak.\nCevap C."
},
{
  "id": "fen-bm-372",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aynı kutu, aynı yüksekliğe sürtünmesiz K ve L rampalarından çıkarılıyor. Kutuyu K rampasından çıkarmak için gereken kuvvet, L rampasındakinden küçüktür.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "K rampasının boyu L rampasının boyundan uzundur.",
    "Kutuyu K rampasından çıkarmak için yapılan iş L rampasındakinden azdır.",
    "K rampasının yüksekliği L rampasının yüksekliğinden küçüktür.",
    "Kutunun K rampasında aldığı yol L rampasındakinden kısadır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "İşten kazanç sanma: eğik düzlemde kuvvet azalır ama iş değişmez.",
    "Verilen bilgiyi yok sayma: kutu iki rampada da aynı yüksekliğe çıkarılıyor.",
    "Kuvvet ve yolu ters yorumlama: kuvvetin az olduğu rampada kutu daha uzun yol alır."
  ],
  "aciklama": "Yükseklik aynıysa rampa uzadıkça eğim azalır ve gereken kuvvet azalır.\nAdım 1: Yükseklikler eşittir; gereken kuvvetin küçük olması, eğimin küçük olması demektir.\nAdım 2: Yükseklik aynıyken eğimi küçük olan rampanın boyu uzundur. K'nin boyu L'ninkinden uzundur.\nAdım 3: Yapılan iş iki rampada da aynıdır; yüksekliklerin eşitliği zaten verilmiştir.\nSık yapılan hata: Kuvvet azalınca işin de azaldığını düşünmek.\nCevap A."
},
{
  "id": "fen-bm-373",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "**Aşağıdaki günlük hayat örneği – basit makine eşleştirmelerinden hangisi __yanlıştır__?**",
  "gorsel": null,
  "secenekler": ["Kuyu başındaki kol ve tambur – Çıkrık","Kaydırağın eğimli yüzeyi – Eğik düzlem","Yükle yükselen vinç makarası – Sabit makara","Kapak açan şişe açacağı – Kaldıraç"],
  "dogru": 2,
  "hatalar": ["Doğru bir eşleştirmeyi yanlış sanma: kolla çevrilen tambur çıkrıktır.","Doğru bir eşleştirmeyi yanlış sanma: kaydırağın eğimli yüzeyi eğik düzlemdir.",null,"Doğru bir eşleştirmeyi yanlış sanma: şişe açacağı bir ucu destek olan kaldıraçtır."],
  "aciklama": "Yanlış eşleştirmeyi arıyoruz. Sabit makaranın ekseni yerinde durur; hareketli makaranın ekseni yükle birlikte yer değiştirir.\nAdım 1: Kuyu başındaki kol ve tambur çıkrıktır. Doğru.\nAdım 2: Kaydırağın eğimli yüzeyi eğik düzlemdir. Doğru.\nAdım 3: Şişe açacağı, destek etrafında dönen bir çubuktur; kaldıraçtır. Doğru.\nAdım 4: Yükle birlikte yükselen makaranın ekseni yer değiştirir; bu makara hareketli makaradır, sabit makara değildir. Bu eşleştirme yanlıştır.\nSık yapılan hata: Makarayı yalnızca görünüşüne bakarak sınıflandırmak; eksenin yerinde durup durmadığına bakmak gerekir.\nCevap C."
},
{
  "id": "fen-bm-374",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Özdeş yükler aynı yüksekliğe şu yollarla çıkarılıyor: K'de yük elle doğrudan kaldırılıyor, L'de palanga, M'de uzun bir rampa, N'de ise kaldıraç kullanılıyor. Sürtünmeler ile makara ve çubuk ağırlıkları önemsizdir.\n**Yükleri çıkarmak için yapılan işler arasındaki ilişki aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "K > L = M = N",
    "K = L = M = N",
    "K < L = M = N",
    "K > L > M > N"
  ],
  "dogru": 1,
  "hatalar": [
    "İşten kazanç sanma: basit makineler yapılan işi azaltmaz.",
    null,
    "Yol uzayınca işin arttığını sanma: kuvvet azalır, yol uzar; çarpımları değişmez.",
    "Kolaylığı iş azalması sanma: daha çok kolaylık sağlayan düzenek de aynı işi yapar."
  ],
  "aciklama": "Sürtünme yokken aynı yük aynı yüksekliğe çıkarılırsa, hangi yolla çıkarılırsa çıkarılsın yapılan iş aynıdır.\nAdım 1: Palanga, rampa ve kaldıraç kuvveti azaltır ama yolu uzatır.\nAdım 2: Kuvvet ile yolun çarpımı yani iş değişmez.\nAdım 3: Elle kaldırmada da iş aynıdır.\nSağlama: Dört yolda da iş eşittir.\nSık yapılan hata: Kolaylığı iş azalması sanmak.\nCevap B."
},
{
  "id": "fen-bm-375",
  "kazanim": "F.8.5.1.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Fen laboratuvarında bir çıkrığın kolu uzatılıyor ve aynı anda tamburu kalınlaştırılıyor. Çıkrıkla aynı yük, aynı yüksekliğe çekiliyor. Sürtünmeler önemsizdir.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yükü çekmek için gereken kuvvet kesinlikle azalır.",
    "Yükü çekmek için gereken kuvvet kesinlikle artar.",
    "Kolun ucunun aldığı yol kesinlikle azalır.",
    "Yükü yükseltmek için yapılan iş kesinlikle değişmez."
  ],
  "dogru": 3,
  "hatalar": [
    "Kesin sanma: kol uzayınca gereken kuvvet azalır, tambur kalınlaşınca artar. İki etki zıt yönde olduğundan sonuç değişimlerin miktarına bağlıdır.",
    "Kesin sanma: tambur kalınlaşınca gereken kuvvet artar, ama kol uzayınca azalır. İki etki zıt yönde olduğundan sonuç değişimlerin miktarına bağlıdır.",
    "Kesin sanma: kol uzayınca kolun ucunun yolu artar, tambur kalınlaşınca azalır. Zıt etkiler olduğundan sonuç belli değildir.",
    null
  ],
  "aciklama": "Çıkrıkta kol uzadıkça gereken kuvvet azalır, kolun ucunun yolu artar; tambur kalınlaştıkça gereken kuvvet artar, kolun ucunun yolu azalır. Basit makinelerde iş ise değişmez.\nAdım 1: Kolun uzaması kuvveti azaltır, yolu artırır.\nAdım 2: Tamburun kalınlaşması kuvveti artırır, yolu azaltır.\nAdım 3: İki değişiklik zıt etkili olduğundan kuvvetin ve yolun artıp azaldığı kesin söylenemez; hangisinin ağır bastığı değişimin miktarına bağlıdır.\nAdım 4: Aynı yük aynı yüksekliğe çekildiğinde ve sürtünme olmadığında yapılan iş, çıkrığın kolu ve tamburu ne olursa olsun aynıdır. Bu yargı kesindir.\nSık yapılan hata: Zıt etkili değişikliklerde sonucu kesin sanmak.\nCevap D."
}
);
