// Fen Bilimleri — Maddenin Isı ile Etkileşimi: Kademe 3 (LGS Ayarı) ve Havuz (kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["isi-madde"] = window.LGS_BANK["isi-madde"] || []).push(
{
  "id": "fen-im-301",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Burak, ısınmanın süreye bağlı olup olmadığını araştırıyor. Üç özdeş kaba 20 °C'ta 200'er gram su koyuyor ve kapları aynı güçte özdeş ısıtıcılarla sırasıyla 2, 4 ve 6 dakika ısıtıyor. Isı kaybı yok sayılacak. Suyun sıcaklık artışları sırasıyla 8 °C, 16 °C ve 24 °C ölçülüyor.\nI. Isıtma süresi uzadıkça suyun aldığı ısı artar.\nII. Suyun aldığı ısı iki katına çıkınca sıcaklık artışı da iki katına çıkmıştır.\nIII. Isıtma süresi uzadıkça suyun öz ısısı artar.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "I ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "II'yi atlama: süre 2 dakikadan 4 dakikaya çıkınca alınan ısı iki katına çıkar ve sıcaklık artışı 8 °C'tan 16 °C'a, yani iki katına çıkar; II de doğrudur.",
    "I'i atlama: ısıtıcılar özdeş olduğundan süre uzadıkça verilen ve alınan ısı artar; I de doğrudur.",
    null,
    "Öz ısıyı süreye bağlama: öz ısı maddeye özgüdür, ısıtma süresiyle değişmez; sıcaklık artışının büyümesi alınan ısının artmasındandır. III yanlıştır."
  ],
  "aciklama": "Özdeş ve aynı güçte ısıtıcılar eşit sürede eşit ısı verir; süre uzadıkça alınan ısı artar. Öz ısı ise maddenin cinsine bağlı bir özelliktir.\nAdım 1 (I): Isı kaybı yok ve ısıtıcılar aynı güçte; 4 dakikada verilen ısı 2 dakikadakinin iki katı, 6 dakikada üç katıdır. I doğrudur.\nAdım 2 (II): Süre 2 dakikadan 4 dakikaya çıkınca alınan ısı iki katına çıkıyor; sıcaklık artışı da 8 °C'tan 16 °C'a, yani iki katına çıkıyor. II doğrudur.\nAdım 3 (III): Öz ısı maddenin cinsine özgüdür; üç kapta da aynı su olduğundan öz ısı değişmez. III yanlıştır.\nSık yapılan hata: Sıcaklık artışının büyümesini öz ısının büyümesi sanmak.\nCevap C."
},
{
  "id": "fen-im-302",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen kulübünde üç sıvının ısınması karşılaştırılıyor. Başlangıç sıcaklığı 20 °C olan eşit kütleli K, L ve M sıvıları özdeş kaplarda, özdeş ısıtıcılarla 5 dakika ısıtılıyor. Isı kaybı yok sayılacak. Sıvıların son sıcaklıkları tabloda verilmiştir.\n**Buna göre K, L ve M sıvılarının öz ısıları arasındaki ilişki aşağıdakilerden hangisidir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Sıvı</th><th>Kütle (g)</th><th>Başlangıç sıcaklığı (°C)</th><th>Isıtma süresi (dk)</th><th>Son sıcaklık (°C)</th></tr><tr><td>K</td><td>200</td><td>20</td><td>5</td><td>60</td></tr><tr><td>L</td><td>200</td><td>20</td><td>5</td><td>35</td></tr><tr><td>M</td><td>200</td><td>20</td><td>5</td><td>48</td></tr></table>",
  "secenekler": [
    "L > M > K",
    "K > M > L",
    "M > K > L",
    "L > K > M"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sıralamayı ters kurma: en çok ısınan K'nin öz ısısı büyük sanılmış; oysa daha çok ısınan maddenin öz ısısı daha küçüktür.",
    "En az ısınanı sona koyma: en az ısınan L, öz ısısı en büyük olandır; L'yi en küçük sanmak hatadır.",
    "K ile M'yi karıştırma: M, K'den daha az ısındığı için öz ısısı K'ninkinden büyüktür."
  ],
  "aciklama": "Öz ısı, bir maddenin 1 g'ının sıcaklığını 1 °C artırmak için gereken ısıdır ve maddeye özgüdür. Kütleler ve alınan ısı eşitse öz ısısı küçük olan daha çok ısınır.\nAdım 1: Sıcaklık artışlarını bul. K: 60 − 20 = 40 °C. L: 35 − 20 = 15 °C. M: 48 − 20 = 28 °C.\nAdım 2: Kütle, süre ve ısıtıcı aynı olduğundan üçü de eşit ısı almıştır. En az ısınan L'nin öz ısısı en büyüktür, en çok ısınan K'ninki en küçüktür.\nAdım 3: Aradaki M'nin öz ısısı ikisinin arasındadır: L > M > K.\nSık yapılan hata: Çok ısınan maddenin öz ısısını büyük sanmak.\nCevap A."
},
{
  "id": "fen-im-303",
  "kazanim": "F.8.4.5.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Katı hâldeki X saf maddesi sabit güçlü bir ısıtıcıyla ısıtılıyor ve sıcaklığı zamana göre ölçülüyor. Elde edilen grafik aşağıda verilmiştir.\n**Bu grafiğe göre aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"X maddesinin sıcaklık zaman grafiği: 10 derecede başlar, 3 ile 9. dakika arasında 50 derecede sabit, 13 ile 20. dakika arasında 110 derecede sabit, 24. dakikada 140 derece\"><line x1=\"66\" y1=\"221.7\" x2=\"536\" y2=\"221.7\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"226.7\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">10</text><line x1=\"66\" y1=\"164.7\" x2=\"536\" y2=\"164.7\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"169.7\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">50</text><line x1=\"66\" y1=\"79.1\" x2=\"536\" y2=\"79.1\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"84.1\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">110</text><line x1=\"66\" y1=\"36.3\" x2=\"536\" y2=\"36.3\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"41.3\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">140</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"124.8\" y1=\"236\" x2=\"124.8\" y2=\"241\" stroke=\"currentColor\"/><text x=\"124.8\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><line x1=\"242.3\" y1=\"236\" x2=\"242.3\" y2=\"241\" stroke=\"currentColor\"/><text x=\"242.3\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">9</text><line x1=\"320.6\" y1=\"236\" x2=\"320.6\" y2=\"241\" stroke=\"currentColor\"/><text x=\"320.6\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">13</text><line x1=\"457.7\" y1=\"236\" x2=\"457.7\" y2=\"241\" stroke=\"currentColor\"/><text x=\"457.7\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">20</text><line x1=\"536.0\" y1=\"236\" x2=\"536.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"536.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">24</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,221.7 124.8,164.7 242.3,164.7 320.6,79.1 457.7,79.1 536.0,36.3\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"66.0\" cy=\"221.7\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"124.8\" cy=\"164.7\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"242.3\" cy=\"164.7\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"320.6\" cy=\"79.1\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"457.7\" cy=\"79.1\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"536.0\" cy=\"36.3\" r=\"3.5\" fill=\"var(--vurgu)\"/></svg>",
  "secenekler": [
    "3-9. dakikalar arasında madde ısı almadığı için sıcaklığı değişmemiştir.",
    "9. dakikada maddenin tamamı gaz hâline geçmiştir.",
    "Maddenin donma noktası 110 °C'tır.",
    "13-20. dakikalar arasında madde sıvı ve gaz hâlde birlikte bulunur."
  ],
  "dogru": 3,
  "hatalar": [
    "Isı alma ile sıcaklık artışını karıştırma: yatay bölümde de ısı alınır; alınan ısı sıcaklığı artırmak yerine hâl değiştirmeye harcanır.",
    "Hâl sırasını atlama: 9. dakikada erime biter, madde tamamen sıvıdır; gaz hâline henüz geçmemiştir.",
    "Kaynama noktası ile donma noktasını karıştırma: 110 °C kaynama noktasıdır; donma noktası erime noktasına eşit, yani 50 °C'tır.",
    null
  ],
  "aciklama": "Saf maddelerde hâl değişimi sırasında sıcaklık sabit kalır; grafikte bu bölümler yataydır. Isıtıcı çalıştığı için madde ısı almaya devam eder, ancak bu ısı sıcaklığı artırmak yerine hâli değiştirmeye harcanır.\nAdım 1: 3-9. dakikalar arası yatay ve 50 °C'tadır; bu erimedir. Madde bu sırada ısı alır. İlk seçenek yanlış.\nAdım 2: Erime 9. dakikada biter, madde sıvıdır; ikinci seçenek yanlış.\nAdım 3: Donma noktası erime noktasına eşittir ve 50 °C'tır. 110 °C kaynama noktasıdır; üçüncü seçenek yanlış.\nAdım 4: 13-20. dakikalar arası yatay ve 110 °C'tadır; bu kaynamadır, sıvı ve gaz birlikte bulunur.\nSağlama: İki yatay bölüm iki hâl değişimini (erime, kaynama) gösterir.\nCevap D."
},
{
  "id": "fen-im-304",
  "kazanim": "F.8.4.5.4",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Yaz günü sahilde bulunan Deniz, yaşadığı olayları ısı alışverişi açısından yorumluyor.\nI. Terleyen kişinin vücudundaki ter buharlaşırken vücuda ısı verir.\nII. Islak çamaşır kururken çamaşırdaki su buharlaşarak çevreden ısı alır.\nIII. Soğuk limonata bardağının dışında oluşan su damlacıkları, havadaki su buharı yoğuşurken çevreden ısı alınarak oluşur.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  "dogru": 1,
  "hatalar": [
    "Buharlaşmada ısı yönünü ters yazma: buharlaşan ter vücuttan ısı alır ve bizi serinletir.",
    null,
    "Yoğuşmada ısı yönünü ters yazma: su buharı yoğuşurken çevresine ısı verir. II'yi de atladın.",
    "Terlemede ısı yönünü ters yazma: ter buharlaşırken vücuda ısı vermez, vücuttan ısı alır."
  ],
  "aciklama": "Buharlaşma, erime ve süblimleşme ısı alarak gerçekleşir; yoğuşma ve donma ısı vererek gerçekleşir.\nAdım 1 (I): Ter buharlaşırken vücuttan ısı alır; bu yüzden terleyince serinleriz. I yanlıştır.\nAdım 2 (II): Çamaşırdaki su buharlaşırken çevreden ısı alır. II doğrudur.\nAdım 3 (III): Su buharı yoğuşurken çevresine ısı verir, çevreden ısı almaz. III yanlıştır.\nSağlama: Isı alan olay buharlaşma, ısı veren olay yoğuşmadır.\nCevap B."
},
{
  "id": "fen-im-305",
  "kazanim": "F.8.4.5.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aynı ortamda bulunan iki özdeş kaptan birinde 100 g, diğerinde 300 g saf su kaynamaktadır. Her iki kap da aynı güçte, özdeş ısıtıcılarla ısıtılmaktadır.\n**Buna göre bu iki kaptaki suyla ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Kaynama noktaları farklıdır; 300 g su daha yüksek sıcaklıkta kaynar.",
    "Kaynama noktaları eşittir; 300 g suyun tamamen buharlaşması için gereken ısı daha fazladır.",
    "Kaynama noktaları eşittir; iki suyun tamamen buharlaşması için gereken ısı eşittir.",
    "Kaynama noktaları farklıdır; 100 g su daha yüksek sıcaklıkta kaynar."
  ],
  "dogru": 1,
  "hatalar": [
    "Kaynama noktasını kütleye bağlama: kaynama noktası ayırt edici özelliktir, madde miktarı değişince değişmez.",
    null,
    "Hâl değişimi için gereken ısıyı kütleden bağımsız sanma: kütle arttıkça hâl değiştirmek için gereken ısı da artar.",
    "Kaynama noktasını kütleye bağlama: iki kapta da aynı saf su vardır, kaynama noktaları aynıdır."
  ],
  "aciklama": "Kaynama noktası saf maddenin ayırt edici özelliğidir; madde miktarına bağlı değildir. Hâl değiştirmek için gereken ısı ise maddenin cinsine ve kütlesine bağlıdır.\nAdım 1: İki kapta da saf su vardır ve ortam aynıdır; kaynama noktaları eşittir.\nAdım 2: Kaynarken sıcaklık sabit kalır; ısıtıcının verdiği ısı suyu buhara çevirmeye harcanır.\nAdım 3: Kütle büyüdükçe daha çok tanecik hâl değiştireceğinden gereken ısı artar. 300 g suyun tamamen buharlaşması daha fazla ısı ister.\nSık yapılan hata: Kaynama noktası ile gereken ısıyı karıştırıp ikisini de kütleye bağlamak.\nCevap B."
},
{
  "id": "fen-im-306",
  "kazanim": "F.8.4.5.4",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen öğretmeni günlük hayattan üç olay söylüyor ve öğrencilerden bu olayları ısı alışverişi açısından değerlendirmelerini istiyor.\nI. Gölün yüzeyindeki su donarken çevreden ısı alır.\nII. Ele dökülen kolonya buharlaşırken eli ısıtır.\nIII. İçeceğe atılan buz kalıbı erirken içecekten ısı alır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Donmada ısı yönünü ters yazma: su donarken çevresine ısı verir, çevreden ısı almaz.",
    "Buharlaşmada ısı yönünü ters yazma: kolonya buharlaşırken elden ısı alır ve el serinler.",
    null,
    "Buharlaşmada ısı yönünü ters yazma: II yanlıştır; kolonya buharlaşırken eli ısıtmaz, serinletir."
  ],
  "aciklama": "Isı alan hâl değişimleri: erime, buharlaşma, süblimleşme. Isı veren hâl değişimleri: donma, yoğuşma.\nAdım 1 (I): Donma ısı veren bir olaydır; su donarken çevresine ısı verir. I yanlıştır.\nAdım 2 (II): Buharlaşma ısı alan bir olaydır; kolonya elden ısı aldığı için el serinler. II yanlıştır.\nAdım 3 (III): Buz erirken ısı alır; bu ısıyı içecekten alır ve içecek soğur. III doğrudur.\nSağlama: Üç olayın yalnızca biri ısı alışverişinin yönünü doğru anlatıyor.\nCevap C."
},
{
  "id": "fen-im-307",
  "kazanim": "F.8.4.5.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aşağıdaki tabloda dört saf maddenin erime ve kaynama noktaları verilmiştir.\n**Bu maddeler −100 °C sıcaklığında bulunduğunda K, L, M ve N maddelerinin hâlleri sırasıyla aşağıdakilerden hangisi olur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Madde</th><th>Erime noktası (°C)</th><th>Kaynama noktası (°C)</th></tr><tr><td>K</td><td>−115</td><td>78</td></tr><tr><td>L</td><td>−219</td><td>−183</td></tr><tr><td>M</td><td>801</td><td>1413</td></tr><tr><td>N</td><td>63</td><td>770</td></tr></table>",
  "secenekler": [
    "katı – gaz – katı – sıvı",
    "sıvı – sıvı – katı – katı",
    "katı – sıvı – sıvı – katı",
    "sıvı – gaz – katı – katı"
  ],
  "dogru": 3,
  "hatalar": [
    "Negatif sıcaklıkları yanlış karşılaştırma: −100 °C, K'nin erime noktası olan −115 °C'tan yüksektir, bu yüzden K katı değil sıvıdır.",
    "L'yi sıvı sanma: L'nin kaynama noktası −183 °C'tır; −100 °C bunun üstündedir, L gaz hâldedir.",
    "Erime ve kaynama noktalarını karıştırma: M ve N'nin erime noktaları −100 °C'ın çok üstündedir, ikisi de katıdır.",
    null
  ],
  "aciklama": "Bir saf madde, sıcaklık erime noktasının altındaysa katı; erime ile kaynama noktası arasındaysa sıvı; kaynama noktasının üstündeyse gaz hâldedir.\nAdım 1 (K): −115 < −100 < 78 olduğundan K sıvıdır.\nAdım 2 (L): −100 > −183 olduğundan L kaynama noktasını geçmiştir; gazdır.\nAdım 3 (M ve N): −100 °C, 801 °C ve 63 °C erime noktalarının altındadır; ikisi de katıdır.\nSağlama: Negatif sayılarda sıfıra yakın olan büyüktür; −100, −115'ten büyüktür.\nCevap D."
},
{
  "id": "fen-im-308",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Ayşe, ısınmanın maddenin cinsine bağlı olduğunu deneyle göstermek istiyor. Elinde özdeş kaplar, özdeş ısıtıcılar, su, zeytinyağı ve alkol var.\n**Ayşe'nin güvenilir bir sonuç alabilmesi için aşağıdaki düzeneklerden hangisini kurması gerekir?**",
  "gorsel": null,
  "secenekler": [
    "Kaplara aynı kütlede ve aynı sıcaklıkta farklı sıvılar koyup aynı süre ısıtmalıdır.",
    "Kaplara farklı kütlede ve aynı sıcaklıkta farklı sıvılar koyup aynı süre ısıtmalıdır.",
    "Kaplara aynı kütlede ve aynı sıcaklıkta aynı sıvıdan koyup farklı sürelerde ısıtmalıdır.",
    "Kaplara aynı kütlede ve farklı sıcaklıkta farklı sıvılar koyup aynı süre ısıtmalıdır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Kontrol edilen değişkeni bozma: kütle de değişirse sıcaklık artışındaki farkın cinsten mi kütleden mi geldiği anlaşılmaz.",
    "Bağımsız değişkeni yanlış seçme: aynı sıvıyı farklı sürelerde ısıtmak maddenin cinsini değil ısıtma süresini sınar.",
    "Başlangıç sıcaklığını farklı bırakma: kontrol edilmesi gereken bir değişken değiştiği için sonuç güvenilir olmaz."
  ],
  "aciklama": "Bir değişkenin etkisini sınamak için yalnızca onu değiştirir, diğer her şeyi (kontrol edilen değişkenleri) sabit tutarsın.\nAdım 1: Sınanan şey maddenin cinsi. Bağımsız değişken sıvının cinsidir; farklı sıvılar kullanılmalı.\nAdım 2: Kütle, başlangıç sıcaklığı, ısıtma süresi ve ısıtıcı kontrol edilen değişkenlerdir; hepsi eşit olmalı.\nAdım 3: Bu koşulları yalnızca ilk düzenek sağlar. Ölçülen sıcaklık artışları artık yalnızca cinse bağlı olur.\nSık yapılan hata: Aynı anda iki değişkeni birden değiştirmek.\nCevap A."
},
{
  "id": "fen-im-309",
  "kazanim": "F.8.4.5.4",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen kulübü öğrencisi Eda, günlük hayatta gözlemlediği dört olayı ısı alışverişi açısından incelemek istiyor. Bunun için önce her olayda maddenin hangi hâl değişimini geçirdiğini belirliyor ve olayı bu hâl değişimiyle eşleştiriyor. Eşleştirmelerin yalnızca biri hatalıdır.\n**Buna göre __hatalı__ olan eşleştirme aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Güneşte kuruyan ıslak yol – buharlaşma",
    "Dondurucuda buz tutan su – donma",
    "Tavada sıvılaşan tereyağı – buharlaşma",
    "Sabah çimenlerde oluşan çiy damlaları – yoğuşma"
  ],
  "dogru": 2,
  "hatalar": [
    "Doğru eşleştirmeyi hatalı sanma: ıslak yolun kuruması suyun sıvıdan gaza geçmesidir, yani buharlaşmadır.",
    "Doğru eşleştirmeyi hatalı sanma: suyun buz tutması sıvıdan katıya geçiştir, yani donmadır.",
    null,
    "Doğru eşleştirmeyi hatalı sanma: havadaki su buharı soğuk yüzeyde sıvıya dönüşür, bu yoğuşmadır."
  ],
  "aciklama": "Hâl değişimlerini yönüne göre adlandırırsın: katı → sıvı erime, sıvı → katı donma, sıvı → gaz buharlaşma, gaz → sıvı yoğuşma. Hâl değişiminin adını doğru belirlemek, ısı alışverişini yorumlamanın ilk adımıdır.\nAdım 1: Islak yol kururken su sıvıdan gaza geçer; bu buharlaşmadır. Eşleştirme doğru.\nAdım 2: Dondurucuda su sıvıdan katıya geçer; bu donmadır. Eşleştirme doğru.\nAdım 3: Tereyağı tavada katıdan sıvıya geçer; bu erimedir, buharlaşma değildir. Hatalı eşleştirme budur.\nAdım 4: Çiy, havadaki su buharının soğuk yüzeyde sıvıya dönüşmesidir; bu yoğuşmadır. Eşleştirme doğru.\nSık yapılan hata: Sıvılaşmayı buharlaşma sanmak; buharlaşmada sıvı değil gaz oluşur.\nCevap C."
},
{
  "id": "fen-im-310",
  "kazanim": "F.8.4.5.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Gaz hâldeki Y saf maddesi soğutulurken sıcaklığı zamana göre ölçülüyor ve aşağıdaki grafik çiziliyor.\nI. 4-8. dakikalar arasında madde yoğuşmaktadır.\nII. Maddenin donma noktası 40 °C'tır.\nIII. 12-18. dakikalar arasında madde çevresine ısı vermektedir.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"Y maddesinin soğuma grafiği: 120 dereceden başlar, 4 ile 8. dakika arasında 80 derecede sabit, 12 ile 18. dakika arasında 40 derecede sabit, 22. dakikada 10 derece\"><line x1=\"66\" y1=\"219.5\" x2=\"536\" y2=\"219.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"224.5\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">10</text><line x1=\"66\" y1=\"170.2\" x2=\"536\" y2=\"170.2\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"175.2\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">40</text><line x1=\"66\" y1=\"104.3\" x2=\"536\" y2=\"104.3\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"109.3\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">80</text><line x1=\"66\" y1=\"38.5\" x2=\"536\" y2=\"38.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"43.5\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">120</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"144.3\" y1=\"236\" x2=\"144.3\" y2=\"241\" stroke=\"currentColor\"/><text x=\"144.3\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4</text><line x1=\"222.7\" y1=\"236\" x2=\"222.7\" y2=\"241\" stroke=\"currentColor\"/><text x=\"222.7\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">8</text><line x1=\"301.0\" y1=\"236\" x2=\"301.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"301.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">12</text><line x1=\"418.5\" y1=\"236\" x2=\"418.5\" y2=\"241\" stroke=\"currentColor\"/><text x=\"418.5\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">18</text><line x1=\"496.8\" y1=\"236\" x2=\"496.8\" y2=\"241\" stroke=\"currentColor\"/><text x=\"496.8\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">22</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,38.5 144.3,104.3 222.7,104.3 301.0,170.2 418.5,170.2 496.8,219.5\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"66.0\" cy=\"38.5\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"144.3\" cy=\"104.3\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"222.7\" cy=\"104.3\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"301.0\" cy=\"170.2\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"418.5\" cy=\"170.2\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"496.8\" cy=\"219.5\" r=\"3.5\" fill=\"var(--vurgu)\"/></svg>",
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "II ve III'ü atlama: 12-18. dakikalardaki yatay bölüm donmadır; madde bu sırada ısı verir ve donma noktası 40 °C'tır.",
    "III'ü atlama: hâl değişimi sırasında soğuyan madde ısı vermeye devam eder; yatay bölümde ısı alışverişi bitmez.",
    "I'i atlama: gazdan sıvıya geçiş yoğuşmadır; 4-8. dakikalardaki yatay bölüm yoğuşmadır.",
    null
  ],
  "aciklama": "Soğuma grafiğinde yatay bölümler hâl değişimini gösterir. Gaz soğurken önce yoğuşur, sonra sıvı soğur, en son donar. Bu olayların hepsinde madde çevresine ısı verir.\nAdım 1 (I): 4-8. dakikalar yatay ve 80 °C'tadır; gaz sıvıya dönüşüyor, yani yoğuşuyor. I doğrudur.\nAdım 2 (II): İkinci yatay bölüm 40 °C'tadır; sıvı katıya dönüşüyor. Donma noktası 40 °C'tır. II doğrudur.\nAdım 3 (III): Madde soğutulduğu için hâl değişimi sırasında da çevresine ısı verir. III doğrudur.\nSağlama: Grafikte iki yatay bölüm var: yoğuşma (80 °C) ve donma (40 °C).\nCevap D."
},
{
  "id": "fen-im-311",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Zeynep, aynı miktarda su koyduğu üç özdeş kabı sırasıyla siyah, beyaz ve gri kâğıtla sarıp aynı güneşli yerde 30 dakika bekletiyor. Sonra her kaptaki suyun sıcaklık artışını ölçüyor.\n**Bu araştırmada bağımsız değişken, bağımlı değişken ve kontrol edilen değişkenlerden biri sırasıyla aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Suyun sıcaklık artışı – kâğıdın rengi – bekletme süresi",
    "Kâğıdın rengi – suyun sıcaklık artışı – suyun miktarı",
    "Bekletme süresi – kâğıdın rengi – suyun miktarı",
    "Suyun miktarı – bekletme süresi – suyun sıcaklık artışı"
  ],
  "dogru": 1,
  "hatalar": [
    "Bağımsız ile bağımlı değişkeni yer değiştirme: Zeynep rengi değiştiriyor (bağımsız), sıcaklık artışını ölçüyor (bağımlı).",
    null,
    "Sabit tutulan niceliği bağımsız sanma: bekletme süresi bütün kaplarda aynıdır, kontrol edilen değişkendir.",
    "Kontrol edilen değişkeni bağımlı sanma: su miktarı ve süre sabit tutulur; sonucu gösteren nicelik sıcaklık artışıdır."
  ],
  "aciklama": "Bağımsız değişken araştırmacının değiştirdiği, bağımlı değişken ölçtüğü, kontrol edilen değişkenler sabit tuttuğu niceliktir.\nAdım 1: Zeynep yalnızca kâğıdın rengini değiştiriyor. Bağımsız değişken kâğıdın rengidir.\nAdım 2: Sonuç olarak suyun sıcaklık artışını ölçüyor. Bağımlı değişken sıcaklık artışıdır.\nAdım 3: Su miktarı, bekletme süresi ve kabın türü bütün kaplarda aynıdır; bunlar kontrol edilen değişkenlerdir.\nSağlama: Seçenekte üçüncü sırada su miktarı ya da süre yer alıyorsa kontrol edilen değişken doğru verilmiştir.\nCevap B."
},
{
  "id": "fen-im-312",
  "kazanim": "F.8.4.5.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Başlangıç sıcaklıkları eşit olan K ve L sıvıları özdeş kaplarda, özdeş ve aynı güçte ısıtıcılarla ısıtılıyor. Sıvıların kütleleri eşittir. Sıcaklık-zaman grafiği aşağıda verilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"K ve L sıvılarının ısınma grafiği: ikisi de 20 dereceden başlar; 8. dakikada K 80 dereceye, L 50 dereceye ulaşır\"><line x1=\"66\" y1=\"193.2\" x2=\"536\" y2=\"193.2\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"198.2\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">20</text><line x1=\"66\" y1=\"129.0\" x2=\"536\" y2=\"129.0\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"134.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">50</text><line x1=\"66\" y1=\"64.8\" x2=\"536\" y2=\"64.8\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"69.8\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">80</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"183.5\" y1=\"236\" x2=\"183.5\" y2=\"241\" stroke=\"currentColor\"/><text x=\"183.5\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2</text><line x1=\"301.0\" y1=\"236\" x2=\"301.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"301.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4</text><line x1=\"418.5\" y1=\"236\" x2=\"418.5\" y2=\"241\" stroke=\"currentColor\"/><text x=\"418.5\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">6</text><line x1=\"536.0\" y1=\"236\" x2=\"536.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"536.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">8</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,193.2 536.0,64.8\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"536.0\" y=\"64.8\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu)\" text-anchor=\"end\">K</text><polyline points=\"66.0,193.2 536.0,129.0\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"536.0\" y=\"129.0\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu2)\" text-anchor=\"end\">L</text></svg>",
  "secenekler": [
    "K'nin öz ısısı L'ninkinden küçüktür.",
    "8. dakikada L, K'den daha fazla ısı almıştır.",
    "K ve L aynı maddedir; yalnızca ısınma hızları farklıdır.",
    "L'nin sıcaklık artışı daha az olduğu için öz ısısı daha küçüktür."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Alınan ısıyı sıcaklıkla karıştırma: ısıtıcılar özdeş ve süre aynı olduğundan K ve L eşit ısı almıştır.",
    "Aynı maddeyi farklı ısınmaya bağlama: aynı kütle ve aynı ısıyla farklı ısınan maddelerin öz ısıları farklıdır, yani madde farklıdır.",
    "Sıcaklık artışı ile öz ısı ilişkisini ters kurma: aynı ısıyla daha az ısınan L'nin öz ısısı daha büyüktür."
  ],
  "aciklama": "Kütle ve alınan ısı eşitse, öz ısısı küçük olan madde daha çok ısınır.\nAdım 1: Isıtıcılar özdeş ve süre aynı olduğundan K ve L eşit ısı alır.\nAdım 2: Kütleler eşittir. Grafikte K, 60 °C; L ise 30 °C ısınmıştır. K daha çok ısınmıştır.\nAdım 3: Daha çok ısınan K'nin öz ısısı daha küçüktür, L'ninki daha büyüktür.\nSık yapılan hata: Az ısınan maddenin öz ısısını küçük sanmak.\nCevap A."
},
{
  "id": "fen-im-313",
  "kazanim": "F.8.4.5.4",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen öğretmeni hâl değişimlerinde ısı alışverişini konuşurken tahtaya şu yargıları yazıyor.\nI. Donma ve yoğuşma sırasında madde çevresine ısı verir.\nII. Buharlaşma sırasında madde çevresine ısı verir.\nIII. Süblimleşme sırasında madde çevresinden ısı alır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Buharlaşmada ısı yönünü ters yazma: buharlaşan madde çevresinden ısı alır; I ve III de doğrudur.",
    "I'i atlama: donma ve yoğuşma ısı veren hâl değişimleridir; I de doğrudur.",
    "Buharlaşmada ısı yönünü ters yazma: buharlaşma ısı alan bir olaydır; III'ü de atladın.",
    null
  ],
  "aciklama": "Katı → sıvı → gaz yönündeki hâl değişimleri (erime, buharlaşma, süblimleşme) ısı alır. Gaz → sıvı → katı yönündeki hâl değişimleri (yoğuşma, donma) ısı verir.\nAdım 1 (I): Donma ve yoğuşma ısı verir. I doğrudur.\nAdım 2 (II): Buharlaşma ısı alır, vermez. II yanlıştır.\nAdım 3 (III): Süblimleşme katının doğrudan gaza geçmesidir ve ısı alır. III doğrudur.\nSağlama: Katıdan gaza giden her yol ısı alır.\nCevap D."
},
{
  "id": "fen-im-314",
  "kazanim": "F.8.4.5.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Okan, 0 °C'taki 200 g buzu ve 0 °C'taki 200 g suyu özdeş kaplara koyup aynı güçte özdeş ısıtıcılarla ısıtıyor. Kapların çevresi yalıtılmıştır, yani ısı kaybı yoktur. İkinci dakikanın sonunda su kabındaki termometre 12 °C gösterirken buz kabındaki termometre hâlâ 0 °C gösteriyor; buz kabında erimemiş buz ile oluşmuş su birlikte bulunuyor.\n**Buna göre buz kabının sıcaklığının 0 °C'ta kalmasının nedeni aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Buz kabına verilen ısı daha azdır; bu yüzden sıcaklığı değişmemiştir.",
    "İki kap eşit ısı almıştır; buzun öz ısısı büyük olduğundan sıcaklığı değişmemiştir.",
    "İki kap eşit ısı almıştır; buz kabında ısı hâl değişimine harcandığından sıcaklık değişmemiştir.",
    "İki kap eşit ısı almıştır; buz kabında ısı çevreye geri verildiğinden sıcaklık değişmemiştir."
  ],
  "dogru": 2,
  "hatalar": [
    "Isıtıcıların farklı ısı verdiğini sanma: ısıtıcılar özdeş ve süre eşit olduğundan iki kap da eşit ısı almıştır.",
    "Hâl değişimi sırasındaki sabit sıcaklığı öz ısıya bağlama: sıcaklığın sabit kalması öz ısıdan değil, alınan ısının erimeye harcanmasındandır.",
    null,
    "Aldığı ısıyı geri verdiğini sanma: erimekte olan madde ısı alır, ısı vermez; ısı sıcaklığı değil hâli değiştirir."
  ],
  "aciklama": "Saf bir madde hâl değiştirirken sıcaklığı sabit kalır; alınan ısı sıcaklığı artırmaya değil, maddenin hâlini değiştirmeye harcanır.\nAdım 1: Isıtıcılar özdeş ve süre aynı olduğundan iki kap da eşit ısı almıştır. Bu yüzden ilk seçenek yanlıştır.\nAdım 2: Su kabında hâl değişimi yoktur; alınan ısı sıcaklığı 12 °C artırmıştır.\nAdım 3: Buz kabında buz erimektedir; aynı ısı buzu suya çevirmeye harcandığı için termometre 0 °C'ta kalır. Öz ısı bu sabitliğin nedeni değildir.\nAdım 4: Erime ısı alan bir olaydır; madde aldığı ısıyı çevreye geri vermez.\nSık yapılan hata: Sıcaklık değişmiyor diye ısı alışverişi olmadığını düşünmek.\nCevap C."
},
{
  "id": "fen-im-315",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Fen kulübü öğrencileri 20 °C'taki farklı miktarlarda suyu özdeş kaplarda, özdeş ısıtıcılarla 4 dakika ısıtıyor ve sonuçları tabloya yazıyor. Isı kaybı yok sayılacak.\n**Bu deney sonuçlarına göre aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Suyun kütlesi (g)</th><th>Sıcaklık artışı (°C)</th></tr><tr><td>50</td><td>24</td></tr><tr><td>100</td><td>12</td></tr><tr><td>200</td><td>6</td></tr></table>",
  "secenekler": [
    "Kütle arttıkça aynı ısıyı alan suyun sıcaklık artışı da artar.",
    "Kütle arttıkça aynı ısıyı alan suyun sıcaklık artışı azalır.",
    "Kütle arttıkça suyun öz ısısı azalır.",
    "Kütle arttıkça suyun öz ısısı artar."
  ],
  "dogru": 1,
  "hatalar": [
    "Kütle ile sıcaklık artışı ilişkisini ters kurma: tabloda kütle 50 g'dan 200 g'a çıkarken sıcaklık artışı 24 °C'tan 6 °C'a düşüyor.",
    null,
    "Öz ısıyı kütleye bağlama: öz ısı maddenin cinsine bağlıdır; hepsi su olduğundan öz ısıları eşittir.",
    "Öz ısıyı kütleye bağlama: öz ısı kütleye bağlı değildir, sıcaklık artışının azalması kütle büyüdüğü içindir."
  ],
  "aciklama": "Aynı madde aynı ısıyı alırken kütle büyüdükçe sıcaklık artışı azalır. Öz ısı maddenin cinsine bağlıdır, kütleye bağlı değildir.\nAdım 1: Kütle 50 g'dan 100 g'a, 200 g'a çıkarken sıcaklık artışı 24, 12, 6 °C olmuş; kütle iki katına çıkınca artış yarıya iniyor.\nAdım 2: Hepsi su olduğundan öz ısı sabittir, değişen yalnızca kütle ve sıcaklık artışıdır.\nAdım 3: Kütle arttıkça sıcaklık artışı azalır.\nSık yapılan hata: Sıcaklık artışındaki değişimi öz ısıdaki değişim sanmak.\nCevap B."
},
{
  "id": "fen-im-316",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Başlangıç sıcaklıkları eşit olan X, Y ve Z sıvıları özdeş kaplarda, özdeş ve aynı güçte ısıtıcılarla tabloda verilen sürelerce ısıtılıyor. Isı kaybı yok sayılacak.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Sıvı</th><th>Kütle (g)</th><th>Isıtma süresi (dk)</th><th>Sıcaklık artışı (°C)</th></tr><tr><td>X</td><td>100</td><td>4</td><td>20</td></tr><tr><td>Y</td><td>200</td><td>4</td><td>20</td></tr><tr><td>Z</td><td>100</td><td>8</td><td>10</td></tr></table>",
  "secenekler": [
    "Y'nin öz ısısı X'inkinden küçüktür.",
    "Z'nin öz ısısı X'inkinden küçüktür.",
    "X ile Y aynı maddedir.",
    "Y'nin öz ısısı Z'ninkinden büyüktür."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sıcaklık artışına bakıp ısıyı unutma: Z daha az ısındı ama iki kat ısı aldı; 100 g'ını 1 °C ısıtmak için en çok ısı gereken sıvı Z'dir.",
    "Aynı artışı aynı madde sanma: Y'nin kütlesi iki kat olmasına rağmen aynı ısıyla aynı kadar ısınmıştır; öz ısıları farklıdır.",
    "Sıralamayı ters kurma: Z, aynı kütledeki X'ten bile daha az ısınmasına rağmen daha çok ısı almıştır; Y'nin öz ısısı Z'ninkinden küçüktür."
  ],
  "aciklama": "Öz ısı, 1 g maddenin sıcaklığını 1 °C artırmak için gereken ısıdır. Karşılaştırmak için \"100 g'ı 1 °C ısıtmak için ne kadar ısı gerekir?\" sorusunu sorarız. Isıtıcılar özdeş olduğundan 1 dakika = 1 birim ısı diyelim.\nAdım 1 (X): 100 g, 4 birim ısıyla 20 °C ısınmış; 1 °C için 4/20 = 0,2 birim.\nAdım 2 (Y): 200 g, 4 birim ısıyla 20 °C ısınmış. 100 g için 2 birim, 1 °C için 0,1 birim. Y'nin öz ısısı X'inkinden küçüktür.\nAdım 3 (Z): 100 g, 8 birim ısıyla 10 °C ısınmış; 1 °C için 0,8 birim. Z'nin öz ısısı en büyüktür.\nSıralama: Z > X > Y. Yalnızca ilk seçenek bu sıralamayla uyuşur.\nSağlama: Z için 0,8; X için 0,2; Y için 0,1 birim bulundu, sıralama Z > X > Y.\nCevap A."
},
{
  "id": "fen-im-317",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Elif, ısınmayı etkileyen değişkenleri incelemek için üç özdeş kaba 20 °C'taki sıvılardan koyuyor ve özdeş ısıtıcılarla 5 dakika ısıtıyor. Kapların içerikleri tabloda verilmiştir. Elif sıcaklık artışlarını ölçecektir.\nI. K ve L kapları karşılaştırılırsa bağımsız değişken sıvının cinsi olur.\nII. L ve M kapları karşılaştırılırsa kütle kontrol edilen değişkenlerden biri olur.\nIII. K ve M kapları karşılaştırılarak sıvının cinsinin ısınmaya etkisi tek başına belirlenemez.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Kap</th><th>Sıvı</th><th>Kütle (g)</th><th>Isıtma süresi (dk)</th></tr><tr><td>K</td><td>Su</td><td>100</td><td>5</td></tr><tr><td>L</td><td>Su</td><td>200</td><td>5</td></tr><tr><td>M</td><td>Zeytinyağı</td><td>200</td><td>5</td></tr></table>",
  "secenekler": [
    "I ve II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Bağımsız değişkeni karıştırma: K ve L'de değişen kütledir, sıvı aynı (su) olduğundan cins bağımsız değişken değildir. III'ü de atladın.",
    "Bağımsız değişkeni karıştırma: K ve L'de sıvı aynıdır; değişen nicelik kütledir. II'yi de atladın.",
    null,
    "Bağımsız değişkeni karıştırma: K ve L'yi karşılaştırırken sıvının cinsi sabittir, bağımsız değişken kütledir; I yanlıştır."
  ],
  "aciklama": "Bir etkiyi tek başına görmek için karşılaştırılan iki kapta yalnızca bir değişken farklı, diğerleri aynı olmalıdır.\nAdım 1 (I): K ve L'de sıvı aynı (su), kütle farklı (100 g ve 200 g). Bağımsız değişken kütledir, cins değil. I yanlıştır.\nAdım 2 (II): L ve M'de kütle (200 g), süre ve ısıtıcı aynı; yalnızca sıvı farklıdır. Kütle kontrol edilen değişkendir. II doğrudur.\nAdım 3 (III): K ve M'de hem sıvı hem kütle farklıdır. Sıcaklık artışı farkının hangisinden geldiği ayırt edilemez. III doğrudur.\nSağlama: Cinsin etkisi L ve M'nin karşılaştırılmasıyla belirlenir.\nCevap C."
},
{
  "id": "fen-im-318",
  "kazanim": "F.8.4.5.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Başlangıç sıcaklıkları eşit olan K ve L katı maddeleri, aynı güçte ve özdeş ısıtıcılarla ayrı kaplarda ısıtılıyor. Maddelerin kütleleri bilinmiyor. Sıcaklık-zaman grafiği aşağıda verilmiştir.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"K ve L katı maddelerinin ısınma grafiği: K 20 dereceden başlar, 3 ile 7. dakika arasında 40 derecede sabit kalır; L 20 dereceden başlar, 5 ile 8. dakika arasında 60 derecede sabit kalır\"><line x1=\"66\" y1=\"193.2\" x2=\"536\" y2=\"193.2\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"198.2\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">20</text><line x1=\"66\" y1=\"150.4\" x2=\"536\" y2=\"150.4\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"155.4\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">40</text><line x1=\"66\" y1=\"107.6\" x2=\"536\" y2=\"107.6\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"112.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">60</text><line x1=\"66\" y1=\"43.4\" x2=\"536\" y2=\"43.4\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"48.4\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">90</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"183.5\" y1=\"236\" x2=\"183.5\" y2=\"241\" stroke=\"currentColor\"/><text x=\"183.5\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><line x1=\"261.8\" y1=\"236\" x2=\"261.8\" y2=\"241\" stroke=\"currentColor\"/><text x=\"261.8\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">5</text><line x1=\"340.2\" y1=\"236\" x2=\"340.2\" y2=\"241\" stroke=\"currentColor\"/><text x=\"340.2\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">7</text><line x1=\"379.3\" y1=\"236\" x2=\"379.3\" y2=\"241\" stroke=\"currentColor\"/><text x=\"379.3\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">8</text><line x1=\"536.0\" y1=\"236\" x2=\"536.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"536.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">12</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,193.2 183.5,150.4 340.2,150.4 457.7,86.2\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"465.5\" y=\"86.2\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu)\" text-anchor=\"start\">K</text><polyline points=\"66.0,193.2 261.8,107.6 379.3,107.6 496.8,43.4\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"504.7\" y=\"43.4\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu2)\" text-anchor=\"start\">L</text></svg>",
  "secenekler": [
    "K'nin kütlesi L'ninkinden büyüktür.",
    "K'nin öz ısısı L'ninkinden küçüktür.",
    "Erime sırasında K, L'den daha az ısı almıştır.",
    "L'nin erime noktası K'ninkinden yüksektir."
  ],
  "dogru": 3,
  "hatalar": [
    "Süre uzunluğunu kütleye bağlama: yatay bölümün uzun olması kütleden ya da madde cinsinden kaynaklanabilir; kütle kesin değildir.",
    "Kütleler bilinmeden öz ısı karşılaştırılamaz: ısınma hızı hem kütleye hem öz ısıya bağlıdır.",
    "Süre ile ısı ilişkisini ters kurma: özdeş ısıtıcıda süre uzadıkça alınan ısı artar; K daha uzun süre erimiştir, daha çok ısı almıştır.",
    null
  ],
  "aciklama": "Grafikte yatay bölümün sıcaklığı o maddenin erime noktasını verir. Kütleler bilinmediğinde süre farkları kütleden de, madde cinsinden de gelebilir.\nAdım 1: K, 40 °C'ta; L ise 60 °C'ta sabit kalıyor. Yani K'nin erime noktası 40 °C, L'ninki 60 °C'tır.\nAdım 2: L'nin erime noktası K'ninkinden yüksektir. Bu bilgi grafikten doğrudan okunur; kesindir.\nAdım 3: Kütle ve öz ısı karşılaştırmaları için kütle bilgisi gerekir; bu seçenekler kesin değildir. Üçüncü seçenekte ise yön ters: K 4 dakika, L ise 3 dakika erimiştir; yani K daha çok ısı almıştır.\nSık yapılan hata: Yatay bölüm uzunluğundan kütleyi kesin çıkarmak.\nCevap D."
},
{
  "id": "fen-im-319",
  "kazanim": "F.8.4.5.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Fen kulübü öğrencileri, aynı cins sıvıdan aldıkları K ve L örneklerini özdeş kaplarda, aynı güçte özdeş ısıtıcılarla 10 dakika ısıtıyor. K örneği 20 °C'ta, L örneği ise 40 °C'ta ısıtılmaya başlıyor. Isı kaybı yok sayılacak ve örneklerin hâli değişmiyor. Örneklerin kütleleri bilinmiyor. Sıcaklık-zaman grafiği aşağıda verilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"K ve L sıvı örneklerinin ısınma grafiği: K 20 dereceden, L 40 dereceden başlar; 10. dakikada K 80 dereceye, L 70 dereceye ulaşır\"><line x1=\"66\" y1=\"193.2\" x2=\"536\" y2=\"193.2\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"198.2\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">20</text><line x1=\"66\" y1=\"150.4\" x2=\"536\" y2=\"150.4\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"155.4\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">40</text><line x1=\"66\" y1=\"86.2\" x2=\"536\" y2=\"86.2\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"91.2\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">70</text><line x1=\"66\" y1=\"64.8\" x2=\"536\" y2=\"64.8\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"69.8\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">80</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"160.0\" y1=\"236\" x2=\"160.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"160.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2</text><line x1=\"254.0\" y1=\"236\" x2=\"254.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"254.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4</text><line x1=\"348.0\" y1=\"236\" x2=\"348.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"348.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">6</text><line x1=\"442.0\" y1=\"236\" x2=\"442.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"442.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">8</text><line x1=\"536.0\" y1=\"236\" x2=\"536.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"536.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">10</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,193.2 536.0,64.8\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"536.0\" y=\"56.8\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu)\" text-anchor=\"end\">K</text><polyline points=\"66.0,150.4 536.0,86.2\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"536.0\" y=\"106.2\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu2)\" text-anchor=\"end\">L</text></svg>",
  "secenekler": [
    "K'nin kütlesi L'ninkinden küçüktür; çünkü aynı ısıyla daha çok ısınmıştır.",
    "K'nin öz ısısı L'ninkinden küçüktür; çünkü aynı ısıyla daha çok ısınmıştır.",
    "K, L'den daha fazla ısı almıştır; çünkü son sıcaklığı daha yüksektir.",
    "K'nin kütlesi L'ninkinden büyüktür; çünkü son sıcaklığı daha yüksektir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Öz ısı ile kütleyi karıştırma: iki örnek aynı cins sıvı olduğundan öz ısıları eşittir; farklı ısınmanın nedeni kütle farkıdır.",
    "Isı ile sıcaklığı karıştırma: ısıtıcılar özdeş ve süre aynı olduğundan K ve L eşit ısı almıştır; son sıcaklık alınan ısıyı göstermez.",
    "Son sıcaklığa bakıp kütleyi yorumlama: kütleyi sıcaklık artışı belirler. K 60 °C, L 30 °C ısınmıştır; aynı ısıyla daha çok ısınan K'nin kütlesi daha küçüktür."
  ],
  "aciklama": "Özdeş ve aynı güçte ısıtıcılar aynı sürede eşit ısı verir. Aynı cins maddenin öz ısısı aynıdır; bu durumda eşit ısıyla daha çok ısınan, kütlesi daha küçük olandır.\nAdım 1: Sıcaklık artışlarını bul. K: 80 − 20 = 60 °C. L: 70 − 40 = 30 °C. Son sıcaklığa değil, artışa bakılır.\nAdım 2: Isıtıcılar özdeş ve süre aynı olduğundan K ve L eşit ısı almıştır. Örnekler aynı cins olduğundan öz ısıları da eşittir.\nAdım 3: Eşit ısı ve eşit öz ısıyla K daha çok ısındığına göre K'nin kütlesi daha küçüktür.\nSık yapılan hata: Son sıcaklığı yüksek olan örneği daha büyük kütleli ya da daha çok ısı almış sanmak.\nCevap A."
},
{
  "id": "fen-im-320",
  "kazanim": "F.8.4.5.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aynı saf katı maddenin kütleleri farklı P, R ve S örnekleri, özdeş ve aynı güçte ısıtıcılarla ayrı kaplarda ısıtılıyor. Üç örneğin de başlangıç sıcaklığı −10 °C'tır. Sıcaklık-zaman grafiği aşağıda verilmiştir.\nI. Üç örneğin de erime noktası 0 °C'tır.\nII. Örneklerin kütleleri arasındaki ilişki S > R > P biçimindedir.\nIII. En kısa sürede eriyen P örneği, ısıtıcıdan en çok ısı almıştır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"P, R ve S örneklerinin ısınma grafiği: üçü de eksi 10 dereceden başlar ve 0 derecede sabit kalır; P 1 ile 4, R 2 ile 8, S 3 ile 12. dakikalar arasında sabit kalır\"><line x1=\"66\" y1=\"236.0\" x2=\"536\" y2=\"236.0\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"241.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">−10</text><line x1=\"66\" y1=\"164.7\" x2=\"536\" y2=\"164.7\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"169.7\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"66\" y1=\"93.3\" x2=\"536\" y2=\"93.3\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"98.3\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">10</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"144.3\" y1=\"236\" x2=\"144.3\" y2=\"241\" stroke=\"currentColor\"/><text x=\"144.3\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><line x1=\"222.7\" y1=\"236\" x2=\"222.7\" y2=\"241\" stroke=\"currentColor\"/><text x=\"222.7\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">6</text><line x1=\"301.0\" y1=\"236\" x2=\"301.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"301.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">9</text><line x1=\"379.3\" y1=\"236\" x2=\"379.3\" y2=\"241\" stroke=\"currentColor\"/><text x=\"379.3\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">12</text><line x1=\"457.7\" y1=\"236\" x2=\"457.7\" y2=\"241\" stroke=\"currentColor\"/><text x=\"457.7\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">15</text><line x1=\"536.0\" y1=\"236\" x2=\"536.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"536.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">18</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,236.0 92.1,164.7 170.4,164.7 222.7,93.3\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"230.5\" y=\"93.3\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu)\" text-anchor=\"start\">P</text><polyline points=\"66.0,236.0 118.2,164.7 274.9,164.7 379.3,93.3\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"387.2\" y=\"93.3\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu2)\" text-anchor=\"start\">R</text><polyline points=\"66.0,236.0 144.3,164.7 379.3,164.7 536.0,93.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"8 5\" stroke-linejoin=\"round\"/><text x=\"525.6\" y=\"57.7\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"end\">S</text></svg>",
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "II'yi atlama: aynı maddeden kütlesi büyük olanın erimesi için daha çok ısı gerekir; özdeş ısıtıcıda bu daha uzun süre demektir. Kütleler S > R > P olduğundan II de doğrudur.",
    null,
    "Süre ile ısı ilişkisini ters kurma: özdeş ısıtıcıda süre kısaldıkça alınan ısı azalır; P en kısa sürede erir ve en az ısıyı alır. II'yi de atladın.",
    "Erime noktalarını farklı sanma: yatay bölümlerin hepsi 0 °C'tadır; aynı maddenin erime noktası kütleye bağlı değildir. III de yanlıştır."
  ],
  "aciklama": "Aynı saf maddenin erime noktası, kütle ne olursa olsun aynıdır. Kütle arttıkça hâl değişimi için gereken ısı, dolayısıyla özdeş ısıtıcıdaki süre artar.\nAdım 1 (I): Üç grafik de 0 °C'ta yatay kalıyor. Erime noktaları eşittir. I doğrudur.\nAdım 2 (II): Madde aynı, ısıtıcı özdeş. Kütle büyüdükçe erime için gereken ısı ve süre artar: P 3 dk, R 6 dk, S 9 dk. Kütleler S > R > P'dir. II doğrudur.\nAdım 3 (III): Isıtıcı özdeş olduğundan alınan ısı süreyle artar. En kısa sürede eriyen P, en az ısıyı almıştır. III yanlıştır.\nSağlama: Başlangıçtan erimenin başlamasına kadar geçen süre de P: 1 dk, R: 2 dk, S: 3 dk'dır; kütle büyüdükçe iki bölüm de uzar.\nCevap B."
},
{
  "id": "fen-im-321",
  "kazanim": "F.8.4.5.4",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Kış günü balkondaki sıcaklık bütün gün −5 °C ile −2 °C arasında kalıyor. Nazlı sabah yıkadığı çamaşırı balkondaki ipe asıyor. Akşam çamaşırın tahta gibi sertleştiğini ve üzerinde ince buz kristalleri oluştuğunu görüyor. Hava üç gün boyunca aynı soğuklukta kalıyor. Nazlı bu süre içinde çamaşırın altında hiç su damlası ya da su birikintisi görmüyor; ama üçüncü günün sonunda çamaşır yumuşuyor ve kuruyor.\nSuyun erime noktasının 0 °C olduğunu bilen Nazlı, çamaşırdaki suyun geçirdiği hâl değişimlerini sırasıyla yazmak istiyor.\n**Buna göre bu hâl değişimleri sırasıyla aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Yoğuşma – süblimleşme",
    "Donma – erime – buharlaşma",
    "Donma – buharlaşma",
    "Donma – süblimleşme"
  ],
  "dogru": 3,
  "hatalar": [
    "Donmayı yoğuşma sanma: ıslak çamaşırdaki sıvı su buza dönüşüyor; bu sıvıdan katıya geçiştir ve donmadır. Gazdan sıvıya geçiş yoktur.",
    "Erimeyi dahil etme: sıcaklık hiç 0 °C'a çıkmadığı için buz erimez; sıvı su da görülmemiştir.",
    "Süblimleşmeyi buharlaşma sanma: buharlaşma sıvıdan gaza geçiştir; oysa çamaşırdaki su buz hâlindeyken kurumuştur. Katıdan doğrudan gaza geçiş süblimleşmedir.",
    null
  ],
  "aciklama": "Suyun donma ve erime noktası 0 °C'tır. Katıdan doğrudan gaza geçişe süblimleşme, sıvıdan gaza geçişe buharlaşma denir.\nAdım 1: Islak çamaşırdaki su sıvıdır. Sıcaklık −5 °C ile −2 °C arasında, yani 0 °C'ın altındadır; sıvı su donar. İlk hâl değişimi donmadır.\nAdım 2: Sıcaklık hiç 0 °C'a çıkmadığı için buz erimez; zaten su damlası ya da birikintisi de görülmemiştir. Erime olmamıştır.\nAdım 3: Buz sıvı oluşturmadan yok olup çamaşırı kurutmuştur. Katıdan doğrudan gaza geçiş süblimleşmedir.\nSıralama: donma – süblimleşme.\nSık yapılan hata: Kurumayı her zaman buharlaşma sanmak.\nCevap D."
},
{
  "id": "fen-im-322",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Her biri 150 g olan su ve zeytinyağı, 20 °C'ta özdeş kaplarda özdeş ısıtıcılarla 6 dakika ısıtılıyor. Isı kaybı yok sayılıyor. Deney sonunda suyun sıcaklığı 38 °C, zeytinyağının sıcaklığı 56 °C oluyor.\nI. Zeytinyağının öz ısısı suyunkinden küçüktür.\nII. Zeytinyağı, ısıtıcıdan sudan daha fazla ısı almıştır.\nIII. İki sıvının sıcaklık artışlarının farklı olması, sıvıların cinsinin farklı olmasından kaynaklanır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  "dogru": 2,
  "hatalar": [
    "Isı ile sıcaklık artışını karıştırma: ısıtıcılar özdeş ve süre eşit olduğundan iki sıvı da eşit ısı almıştır.",
    "Alınan ısıyı sıcaklık artışına bağlama: daha çok ısınmak daha çok ısı almak demek değildir; III'ü de atladın.",
    null,
    "I'i atlama ve ısı-sıcaklık karışıklığı: aynı ısıyla daha çok ısınan zeytinyağının öz ısısı küçüktür; II ise yanlıştır."
  ],
  "aciklama": "Eşit kütle ve eşit ısı alan maddelerden öz ısısı küçük olan daha çok ısınır.\nAdım 1 (I): Zeytinyağı 36 °C, su 18 °C ısınmış. Aynı ısıyla daha çok ısınan zeytinyağının öz ısısı daha küçüktür. I doğrudur.\nAdım 2 (II): Isıtıcılar özdeş ve süre aynı. İki sıvı da eşit ısı almıştır. II yanlıştır.\nAdım 3 (III): Kütle (150 g), ısıtma süresi ve ısıtıcı aynıdır; alınan ısı eşittir. Bu koşullarda sıcaklık artışlarının farklı çıkmasının tek nedeni sıvıların cinsidir. III doğrudur.\nSık yapılan hata: Daha çok ısınan maddenin daha çok ısı aldığını düşünmek.\nCevap C."
},
{
  "id": "fen-im-323",
  "kazanim": "F.8.4.5.4",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Kış günü sabahtan beri hava çok soğukken kar yağmaya başlayınca Mert havanın biraz ısındığını fark ediyor. Öğleden sonra yağış durup karlar erimeye başlayınca hava yeniden soğuyor. Mert bu durumu fen öğretmenine soruyor ve öğretmeni olayı ısı alışverişi açısından açıklıyor.\nI. Havadaki su, kara dönüşürken çevreye ısı verir.\nII. Kar erirken çevresine ısı verir.\nIII. Kar yağarken ve erirken çevre ile ısı alışverişi gerçekleşmez.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Erimede ısı yönünü ters yazma: kar erirken çevresinden ısı alır; hava bu yüzden yeniden soğur.",
    "Hâl değişiminde ısı alışverişi olmadığını sanma: hem kar oluşumunda hem erimesinde çevreyle ısı alışverişi vardır.",
    "Erimede ısı yönünü ters yazma ve alışverişi yok sayma: II ve III yanlıştır."
  ],
  "aciklama": "Su kara dönüşürken (donma, katılaşma) ısı verir; kar erirken ısı alır. Bu yüzden kar yağarken hava biraz ısınır, kar erirken soğur.\nAdım 1 (I): Kar oluşurken su katı hâle geçer ve çevresine ısı verir. Havanın ısındığını hissetmemizin nedeni budur. I doğrudur.\nAdım 2 (II): Kar erirken çevreden ısı alır; hava soğur. II yanlıştır.\nAdım 3 (III): İki olayda da çevreyle ısı alışverişi vardır. III yanlıştır.\nSağlama: Mert'in gözlemi (yağarken ısınma, erirken soğuma) yalnızca I ile uyumludur.\nCevap A."
},
{
  "id": "fen-im-324",
  "kazanim": "F.8.4.5.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aynı sıcaklıkta (80 °C) olan K kabında 50 g, L kabında 200 g su bulunuyor. İki kap da 20 °C'lık bir odada bekletiliyor ve ikisinin de sıcaklığı 30 °C'a kadar düşüyor.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Çevreye verdikleri ısı eşittir; çünkü ikisinin de başlangıç sıcaklığı 80 °C'tır.",
    "L, çevreye daha fazla ısı vermiştir; çünkü sıcaklık düşüşü eşitken kütlesi daha büyüktür.",
    "K, çevreye daha fazla ısı vermiştir; çünkü kütlesi küçük olduğu için daha hızlı soğumuştur.",
    "Çevreye verdikleri ısı eşittir; çünkü ikisinin de son sıcaklığı 30 °C'tır."
  ],
  "dogru": 1,
  "hatalar": [
    "Isı ile sıcaklığı karıştırma: sıcaklıkları eşit olan maddelerin verdiği ısı eşit olmak zorunda değildir, kütle de önemlidir.",
    null,
    "Hızlı soğumayı çok ısı vermek sanma: kütlesi küçük olan daha az ısı verir, hızlı soğuması verdiği ısıyı artırmaz.",
    "Isı ile sıcaklığı karıştırma: son sıcaklıkların eşit olması verilen ısıların eşit olduğunu göstermez."
  ],
  "aciklama": "Aynı maddenin sıcaklığı aynı miktar değiştiğinde, alınan veya verilen ısı kütleyle artar. Sıcaklık ısı değildir; ısı bir enerjidir, sıcaklık ise maddenin ne kadar sıcak olduğunun ölçüsüdür.\nAdım 1: İki kapta da aynı madde (su) vardır ve ikisi de 80 °C'tan 30 °C'a, yani 50 °C soğumuştur. Sıcaklık düşüşü eşittir.\nAdım 2: Kütleler 50 g ve 200 g. Aynı sıcaklık düşüşü için kütlesi büyük olan daha fazla ısı verir.\nAdım 3: L'nin kütlesi K'ninkinin 4 katıdır; L daha çok ısı vermiştir. Bu sonuç kesindir.\nSık yapılan hata: Sıcaklıkları eşit olan iki cismin ısılarının da eşit olduğunu düşünmek.\nCevap B."
},
{
  "id": "fen-im-325",
  "kazanim": "F.8.4.5.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aynı sıcaklıkta başlayan X ve Y saf sıvıları özdeş kaplarda, aynı güçte özdeş ısıtıcılarla ısıtılıyor. Sıvıların kütleleri bilinmiyor. Sıcaklık-zaman grafiği aşağıda verilmiştir.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"X ve Y sıvılarının ısınma grafiği: X 20 dereceden başlar, 4 ile 9. dakika arasında 80 derecede sabit kalır; Y 20 dereceden başlar, 7. dakikada 100 dereceye ulaşır ve 7 ile 10. dakika arasında 100 derecede sabit kalır\"><line x1=\"66\" y1=\"205.4\" x2=\"536\" y2=\"205.4\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"210.4\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">20</text><line x1=\"66\" y1=\"113.7\" x2=\"536\" y2=\"113.7\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"118.7\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">80</text><line x1=\"66\" y1=\"83.1\" x2=\"536\" y2=\"83.1\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"88.1\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">100</text><line x1=\"66\" y1=\"37.3\" x2=\"536\" y2=\"37.3\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"42.3\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">130</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"200.3\" y1=\"236\" x2=\"200.3\" y2=\"241\" stroke=\"currentColor\"/><text x=\"200.3\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4</text><line x1=\"233.9\" y1=\"236\" x2=\"233.9\" y2=\"241\" stroke=\"currentColor\"/><text x=\"233.9\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">5</text><line x1=\"301.0\" y1=\"236\" x2=\"301.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"301.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">7</text><line x1=\"368.1\" y1=\"236\" x2=\"368.1\" y2=\"241\" stroke=\"currentColor\"/><text x=\"368.1\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">9</text><line x1=\"401.7\" y1=\"236\" x2=\"401.7\" y2=\"241\" stroke=\"currentColor\"/><text x=\"401.7\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">10</text><line x1=\"536.0\" y1=\"236\" x2=\"536.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"536.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">14</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,205.4 200.3,113.7 368.1,113.7 468.9,67.9\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"475.6\" y=\"67.9\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu)\" text-anchor=\"start\">X</text><polyline points=\"66.0,205.4 301.0,83.1 401.7,83.1 502.4,37.3\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"509.1\" y=\"37.3\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu2)\" text-anchor=\"start\">Y</text></svg>",
  "secenekler": [
    "7. dakikada Y'nin sıcaklığı 80 °C'tır.",
    "X'in kütlesi, Y'nin kütlesinden büyüktür.",
    "5. dakikada X kaynamakta, Y ise ısınmaktadır.",
    "5. dakikada her iki sıvı da hâl değiştirmektedir."
  ],
  "dogru": 2,
  "hatalar": [
    "Grafiği yanlış okuma: Y, 7. dakikada 100 °C'a ulaşmıştır; 80 °C'ı daha önce geçmiştir.",
    "Yatay bölüm uzunluğundan kütleyi kesin çıkarma: X'in yatay bölümü daha uzundur ama maddeler farklıdır; hâl değiştirme ısısı cinse de bağlıdır.",
    null,
    "Yatay olmayan bölümü hâl değişimi sanma: 5. dakikada Y'nin sıcaklığı hâlâ artmaktadır, hâl değiştirmemektedir."
  ],
  "aciklama": "Grafikte yatay bölümde madde hâl değiştirir (burada kaynar); eğimli bölümde sıcaklığı artar.\nAdım 1: X, 4-9. dakikalar arasında 80 °C'ta yataydır; bu aralıkta kaynar. Y, 7-10. dakikalar arasında 100 °C'ta yataydır.\nAdım 2: 5. dakika X'in yatay aralığındadır, X kaynamaktadır. Y'nin grafiği 5. dakikada eğimlidir; sıcaklığı artmaktadır.\nAdım 3: Kütleler bilinmediği için kütle karşılaştırması kesin değildir. Y'nin 7. dakikadaki sıcaklığı 100 °C'tır.\nSağlama: 5. dakikada dikey bir doğru çizersen X'in yatay, Y'nin eğimli bölümünü keser.\nCevap C."
},
{
  "id": "fen-im-001",
  "kazanim": "F.8.4.5.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Isı ile ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Isı, termometre ile ölçülen bir niceliktir.",
    "Isı, sıcak cisimden soğuk cisme aktarılan enerjidir.",
    "Isı, bir maddenin ne kadar sıcak olduğunu gösterir.",
    "Isı, maddenin kütlesinden bağımsız bir niceliktir."
  ],
  "dogru": 1,
  "hatalar": [
    "Isı ile sıcaklığı karıştırma: termometre sıcaklığı ölçer, ısıyı değil.",
    null,
    "Isı ile sıcaklığı karıştırma: maddenin ne kadar sıcak olduğunu gösteren sıcaklıktır.",
    "Isıyı kütleden bağımsız sanma: aynı sıcaklık değişimi için gereken ısı kütle arttıkça artar."
  ],
  "aciklama": "Isı bir enerji türüdür; sıcaklık ise maddenin ne kadar sıcak olduğunun ölçüsüdür.\nAdım 1: Termometre sıcaklığı ölçer, ısıyı değil. İlk seçenek yanlış.\nAdım 2: Isı, sıcaklıkları farklı cisimler arasında sıcak olandan soğuk olana doğru aktarılan enerjidir. İkinci seçenek doğru.\nAdım 3: Maddenin ne kadar sıcak olduğunu sıcaklık gösterir; kütleye de bağlı olan ısıdır.\nSık yapılan hata: Isı ve sıcaklığı aynı şey sanmak.\nCevap B."
},
{
  "id": "fen-im-002",
  "kazanim": "F.8.4.5.3",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Saf bir katı madde erirken sıcaklığı için aşağıdakilerden hangisi söylenebilir?**",
  "gorsel": null,
  "secenekler": [
    "Sürekli artar.",
    "Sürekli azalır.",
    "Önce artar, sonra azalır.",
    "Sabit kalır."
  ],
  "dogru": 3,
  "hatalar": [
    "Erime sırasında sıcaklığın artmaya devam ettiğini sanma: hâl değişimi boyunca sıcaklık sabittir.",
    "Isı alan maddenin sıcaklığının düşeceğini sanma: erirken sıcaklık düşmez.",
    "Hâl değişimini sıcaklık dalgalanması sanma: erime boyunca sıcaklık aynı kalır.",
    null
  ],
  "aciklama": "Saf maddelerde hâl değişimi sırasında sıcaklık sabit kalır. Alınan ısı, sıcaklığı artırmak yerine hâl değiştirmeye harcanır.\nAdım 1: Madde erirken ısı almaya devam eder.\nAdım 2: Bu ısı hâl değişimine harcandığı için sıcaklık sabit kalır.\nSağlama: Erime grafiğinde bu bölüm yataydır.\nCevap D."
},
{
  "id": "fen-im-003",
  "kazanim": "F.8.4.5.4",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Eline kolonya döken Mert, elinde serinlik hissediyor.\n**Bu durumun nedeni aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Kolonya buharlaşırken elden ısı alır.",
    "Kolonya buharlaşırken ele ısı verir.",
    "Kolonya yoğuşurken elden ısı alır.",
    "Kolonya yoğuşurken ele ısı verir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Buharlaşmada ısı yönünü ters yazma: buharlaşma ısı alan bir olaydır; ısı veriyor olsaydı el ısınırdı.",
    "Olayın adını karıştırma: kolonya yoğuşmaz, buharlaşır; yoğuşma da ısı verir.",
    "Olayın adını karıştırma: ele dökülen sıvı gaza geçiyor, yani buharlaşıyor."
  ],
  "aciklama": "Sıvıların buharlaşması ısı alarak gerçekleşir.\nAdım 1: Kolonya el üzerinde buharlaşır, yani sıvıdan gaza geçer.\nAdım 2: Buharlaşan kolonya ısıyı elden alır, bu yüzden el serinler.\nSağlama: Isı alan olay el soğutur, ısı veren olay ısıtır.\nCevap A."
},
{
  "id": "fen-im-004",
  "kazanim": "F.8.4.5.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Ela, aynı sıcaklıktaki sudan özdeş kaplara farklı kütlelerde koyup aynı ısıtıcıyla 3 dakika ısıtıyor ve sonra suların sıcaklık artışını ölçüyor.\n**Bu deneyde bağımlı değişken aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "Suyun kütlesi",
    "Isıtıcının gücü",
    "Suyun sıcaklık artışı",
    "Isıtma süresi"
  ],
  "dogru": 2,
  "hatalar": [
    "Bağımsız değişkeni bağımlı sanma: Ela'nın değiştirdiği nicelik kütledir, bu bağımsız değişkendir.",
    "Kontrol edilen değişkeni bağımlı sanma: ısıtıcılar aynı tutulur.",
    null,
    "Kontrol edilen değişkeni bağımlı sanma: süre bütün kaplarda aynıdır (3 dk)."
  ],
  "aciklama": "Bağımlı değişken, araştırmacının ölçtüğü ve diğer değişkenlere bağlı olarak değişen niceliktir.\nAdım 1: Ela kütleyi değiştiriyor; kütle bağımsız değişkendir.\nAdım 2: Isıtma süresi ve ısıtıcı sabittir; bunlar kontrol edilen değişkenlerdir.\nAdım 3: Sonunda ölçtüğü sıcaklık artışı bağımlı değişkendir.\nSağlama: Ela'nın sonuçta sayı olarak yazdığı nicelik sıcaklık artışıdır.\nCevap C."
},
{
  "id": "fen-im-005",
  "kazanim": "F.8.4.5.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Kütleleri eşit olan K ve L sıvıları özdeş ısıtıcılarla aynı süre ısıtılıyor. K'nin sıcaklığı 15 °C, L'nin sıcaklığı 25 °C artıyor.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "K'nin öz ısısı daha büyüktür; çünkü aynı ısıyla daha az ısınmıştır.",
    "K'nin öz ısısı daha büyüktür; çünkü aynı ısıyla daha çok ısınmıştır.",
    "L'nin öz ısısı daha büyüktür; çünkü aynı ısıyla daha az ısınmıştır.",
    "L'nin öz ısısı daha büyüktür; çünkü aynı ısıyla daha çok ısınmıştır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Gerekçeyi ters kurma: K daha az ısınmıştır, daha çok değil.",
    "Sonucu ters kurma: daha az ısınan K'dir, öz ısısı büyük olan da K'dir.",
    "Çok ısınanın öz ısısını büyük sanma: aynı ısıyla daha çok ısınan maddenin öz ısısı daha küçüktür."
  ],
  "aciklama": "Eşit kütle ve eşit ısıda öz ısısı büyük olan madde daha az ısınır.\nAdım 1: Kütle ve süre eşit olduğundan K ve L eşit ısı almıştır.\nAdım 2: K 15 °C, L 25 °C ısınmış; daha az ısınan K'dir.\nAdım 3: Daha az ısınan K'nin öz ısısı daha büyüktür.\nSağlama: Aynı ısıyla çok ısınan L'nin öz ısısı küçük olmalıdır; bu K'nin büyük olmasıyla uyumludur.\nCevap A."
},
{
  "id": "fen-im-006",
  "kazanim": "F.8.4.5.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Erime noktası −30 °C, kaynama noktası 70 °C olan X saf maddesi bir laboratuvarda sıcaklığı değiştirilerek inceleniyor.\n**X maddesi aşağıdaki sıcaklıklardan hangisinde gaz hâldedir?**",
  "gorsel": null,
  "secenekler": [
    "−50 °C",
    "0 °C",
    "20 °C",
    "100 °C"
  ],
  "dogru": 3,
  "hatalar": [
    "Negatif sıcaklıkları karıştırma: −50 °C, erime noktası olan −30 °C'tan düşüktür; X bu sıcaklıkta katıdır.",
    "Erime ve kaynama noktası arasını gaz sanma: 0 °C, −30 ile 70 arasındadır; madde sıvıdır.",
    "Erime ve kaynama noktası arasını gaz sanma: 20 °C, −30 ile 70 arasındadır; madde sıvıdır.",
    null
  ],
  "aciklama": "Saf madde kaynama noktasının üstündeki sıcaklıklarda gaz hâldedir.\nAdım 1: −30 °C'ın altı katı, −30 ile 70 °C arası sıvı, 70 °C'ın üstü gazdır.\nAdım 2: Seçeneklerden yalnızca 100 °C, 70 °C'ın üstündedir.\nSağlama: −50 katı; 0 ve 20 sıvı; 100 gaz.\nCevap D."
},
{
  "id": "fen-im-007",
  "kazanim": "F.8.4.5.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**Aşağıdakilerden hangisi bir saf maddenin miktarına (kütlesine) bağlı değildir?**",
  "gorsel": null,
  "secenekler": [
    "Kütlesi",
    "Erime noktası",
    "Hacmi",
    "Tamamen erimesi için gereken ısı"
  ],
  "dogru": 1,
  "hatalar": [
    "Kütleyi miktardan bağımsız sanma: kütle zaten madde miktarını gösterir.",
    null,
    "Hacmi ayırt edici sanma: madde miktarı arttıkça hacim de artar.",
    "Hâl değişimi için gereken ısıyı miktardan bağımsız sanma: kütle arttıkça gereken ısı artar."
  ],
  "aciklama": "Ayırt edici özellikler (erime noktası, kaynama noktası, öz ısı, yoğunluk) madde miktarına bağlı değildir.\nAdım 1: Kütle ve hacim madde miktarıyla artar.\nAdım 2: Hâl değişimi için gereken ısı da kütleyle artar.\nAdım 3: Erime noktası ayırt edici bir özelliktir ve miktara bağlı değildir.\nSağlama: 1 g buzun da 1 kg buzun da erime noktası 0 °C'tır.\nCevap B."
},
{
  "id": "fen-im-008",
  "kazanim": "F.8.4.5.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Y saf maddesi sabit güçlü bir ısıtıcıyla ısıtılırken sıcaklığı zamana göre ölçülüyor ve aşağıdaki grafik çiziliyor.\n**Buna göre Y maddesinin kaynama noktası kaç °C'tır?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"Y maddesinin ısınma grafiği: 10 dereceden başlar, 3 ile 7. dakika arasında 30 derecede sabit, 11 ile 16. dakika arasında 80 derecede sabit, 19. dakikada 100 derece\"><line x1=\"66\" y1=\"216.5\" x2=\"536\" y2=\"216.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"221.5\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">10</text><line x1=\"66\" y1=\"177.6\" x2=\"536\" y2=\"177.6\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"182.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">30</text><line x1=\"66\" y1=\"80.4\" x2=\"536\" y2=\"80.4\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"85.4\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">80</text><line x1=\"66\" y1=\"41.5\" x2=\"536\" y2=\"41.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"46.5\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">100</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"136.5\" y1=\"236\" x2=\"136.5\" y2=\"241\" stroke=\"currentColor\"/><text x=\"136.5\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><line x1=\"230.5\" y1=\"236\" x2=\"230.5\" y2=\"241\" stroke=\"currentColor\"/><text x=\"230.5\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">7</text><line x1=\"324.5\" y1=\"236\" x2=\"324.5\" y2=\"241\" stroke=\"currentColor\"/><text x=\"324.5\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">11</text><line x1=\"442.0\" y1=\"236\" x2=\"442.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"442.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">16</text><line x1=\"512.5\" y1=\"236\" x2=\"512.5\" y2=\"241\" stroke=\"currentColor\"/><text x=\"512.5\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">19</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,216.5 136.5,177.6 230.5,177.6 324.5,80.4 442.0,80.4 512.5,41.5\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"66.0\" cy=\"216.5\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"136.5\" cy=\"177.6\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"230.5\" cy=\"177.6\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"324.5\" cy=\"80.4\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"442.0\" cy=\"80.4\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"512.5\" cy=\"41.5\" r=\"3.5\" fill=\"var(--vurgu)\"/></svg>",
  "secenekler": [
    "10",
    "30",
    "80",
    "100"
  ],
  "dogru": 2,
  "hatalar": [
    "Başlangıç noktasını okuma: 10 °C ısıtmanın başladığı sıcaklıktır, kaynama noktası değildir.",
    "Erime noktasını kaynama sanma: 30 °C'taki yatay bölüm erimedir.",
    null,
    "Grafiğin son noktasını okuma: 100 °C, ölçümün bittiği sıcaklıktır; yatay bölüm değildir."
  ],
  "aciklama": "Isınma grafiğinde birinci yatay bölüm erime noktasını, ikinci yatay bölüm kaynama noktasını verir.\nAdım 1: İlk yatay bölüm 30 °C'tadır; bu erimedir.\nAdım 2: İkinci yatay bölüm 80 °C'tadır; bu kaynamadır.\nSağlama: Kaynama noktası erime noktasından yüksektir: 80 > 30.\nCevap C."
},
{
  "id": "fen-im-009",
  "kazanim": "F.8.4.5.4",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Fen öğretmeni günlük hayattan üç olay yazıyor.\nI. Sabah çimenlerde oluşan çiğ damlaları oluşurken su buharı çevreden ısı alır.\nII. Havuzdan çıkan kişinin ıslak vücudundaki su buharlaşırken vücuttan ısı alır.\nIII. Kışın otobüs camının iç yüzeyinde oluşan buğu, su buharının yoğuşarak çevresine ısı vermesiyle oluşur.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  "dogru": 3,
  "hatalar": [
    "Yoğuşmada ısı yönünü ters yazma: çiğ oluşumu yoğuşmadır ve ısı verir; II ve III doğrudur.",
    "II'yi atlama: buharlaşan su vücuttan ısı alır, üşümemizin nedeni budur.",
    "Yoğuşmada ısı yönünü ters yazma: I yanlıştır; III'ü de atladın.",
    null
  ],
  "aciklama": "Buharlaşma ısı alır, yoğuşma ısı verir.\nAdım 1 (I): Çiğ, su buharının yoğuşmasıdır; yoğuşan buhar ısı verir. I yanlıştır.\nAdım 2 (II): Islak vücuttaki su buharlaşırken vücuttan ısı alır, vücut serinler. II doğrudur.\nAdım 3 (III): Buğu su buharının yoğuşmasıdır, yoğuşma ısı verir. III doğrudur.\nSağlama: Isı alan olay buharlaşma, ısı veren iki olay yoğuşmadır.\nCevap D."
},
{
  "id": "fen-im-010",
  "kazanim": "F.8.4.5.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Başlangıç sıcaklıkları ve kütleleri eşit olan K, L, M ve N metal çubuklarına özdeş ısıtıcılarla aynı süre ısı veriliyor. Çubukların sıcaklık artışları tabloda verilmiştir. Isı kaybı yok sayılacak.\n**Buna göre öz ısısı en büyük ve en küçük olan çubuklar sırasıyla hangi seçenekte doğru verilmiştir?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Çubuk</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Sıcaklık artışı (°C)</td><td>10</td><td>25</td><td>15</td><td>30</td></tr></table>",
  "secenekler": [
    "K – N",
    "N – K",
    "L – K",
    "M – L"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sıralamayı ters kurma: en çok ısınan N'nin öz ısısı en küçüktür, en az ısınan K'ninki en büyüktür.",
    "Orta değeri uç sanma: L ne en çok ne en az ısınmıştır.",
    "Orta değerleri uç sanma: M ve L ne en çok ne en az ısınmıştır."
  ],
  "aciklama": "Eşit kütle ve eşit ısıda en az ısınan maddenin öz ısısı en büyük, en çok ısınanınki en küçüktür.\nAdım 1: En az ısınan K (10 °C), en çok ısınan N (30 °C).\nAdım 2: Öz ısısı en büyük K, en küçük N'dir.\nSağlama: Sıralama K > M > L > N şeklindedir.\nCevap A."
},
{
  "id": "fen-im-011",
  "kazanim": "F.8.4.5.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Saf bir madde için hâl değişimleriyle ilgili şu yargılar veriliyor.\nI. Erime sırasında madde çevresine ısı verir.\nII. Bir saf maddenin erime noktası ile donma noktası farklıdır.\nIII. Donma sırasında saf maddenin sıcaklığı sabit kalır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  "dogru": 1,
  "hatalar": [
    "Erime ve donma noktalarını farklı sanma: aynı saf maddede ikisi eşittir.",
    null,
    "Erimede ısı yönünü ters yazma ve noktaları farklı sanma: erime ısı alır; erime ve donma noktası eşittir.",
    "Erimede ısı yönünü ters yazma: erime sırasında madde ısı alır, ısı vermez."
  ],
  "aciklama": "Erime noktası = donma noktasıdır. Hâl değişimi sırasında saf maddenin sıcaklığı sabit kalır; erime ısı alır, donma ısı verir.\nAdım 1 (I): Erime ısı alan bir olaydır. I yanlıştır.\nAdım 2 (II): Aynı saf maddede erime ve donma noktaları aynıdır. II yanlıştır.\nAdım 3 (III): Donma sırasında sıcaklık sabit kalır. III doğrudur.\nSağlama: Buz 0 °C'ta erir, su 0 °C'ta donar.\nCevap B."
},
{
  "id": "fen-im-012",
  "kazanim": "F.8.4.5.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Erime noktalarında bulunan eşit kütleli K ve L katıları, özdeş ısıtıcılarla ısıtılıyor. K 3 dakikada, L ise 5 dakikada tamamen eriyor.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "K ve L aynı cins maddelerdir.",
    "K'nin erime noktası daha düşüktür.",
    "L'nin erimesi için gereken ısı daha fazladır.",
    "L'nin kütlesi daha büyüktür."
  ],
  "dogru": 2,
  "hatalar": [
    "Aynı kütlede farklı gereken ısıyı yok sayma: aynı cins ve aynı kütlede maddelerin erimesi için gereken ısı eşit olurdu.",
    "Süreyi erime noktasına bağlama: erime süresi erime noktası hakkında bilgi vermez.",
    null,
    "Soruda verilen bilgiyi yok sayma: kütleler eşit olarak verilmiştir."
  ],
  "aciklama": "Hâl değiştirmek için gereken ısı maddenin cinsine ve kütlesine bağlıdır.\nAdım 1: Isıtıcılar özdeş olduğundan süre uzadıkça alınan ısı artar. L daha uzun sürede erimiştir; daha çok ısı almıştır.\nAdım 2: Kütleler eşit olduğundan fark madde cinsinden gelir. K ve L farklı maddelerdir.\nAdım 3: Erime noktası hakkında bilgi verilmediği için ikinci seçenek kesin değildir.\nSağlama: Eşit kütle, farklı süre; fark maddenin cinsindedir.\nCevap C."
},
{
  "id": "fen-im-013",
  "kazanim": "F.8.4.5.3",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Katı bir maddenin 100 g'ı sabit güçlü bir ısıtıcıyla ısıtılırken sıcaklık-zaman grafiği K eğrisi gibi çiziliyor. Aynı maddeden 200 g alınıp aynı ısıtıcıyla, aynı başlangıç sıcaklığından ısıtılıyor.\n**Bu ikinci deneyin grafiği K eğrisine göre nasıl değişir?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"K eğrisi: 20 dereceden başlar, 2 ile 8. dakika arasında 40 derecede sabit kalır, 10. dakikada 60 dereceye ulaşır\"><line x1=\"66\" y1=\"182.5\" x2=\"536\" y2=\"182.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"187.5\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">20</text><line x1=\"66\" y1=\"129.0\" x2=\"536\" y2=\"129.0\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"134.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">40</text><line x1=\"66\" y1=\"75.5\" x2=\"536\" y2=\"75.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"80.5\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">60</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"144.3\" y1=\"236\" x2=\"144.3\" y2=\"241\" stroke=\"currentColor\"/><text x=\"144.3\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2</text><line x1=\"379.3\" y1=\"236\" x2=\"379.3\" y2=\"241\" stroke=\"currentColor\"/><text x=\"379.3\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">8</text><line x1=\"457.7\" y1=\"236\" x2=\"457.7\" y2=\"241\" stroke=\"currentColor\"/><text x=\"457.7\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">10</text><line x1=\"536.0\" y1=\"236\" x2=\"536.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"536.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">12</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,182.5 144.3,129.0 379.3,129.0 457.7,75.5\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"465.5\" y=\"75.5\" font-size=\"15\" font-weight=\"bold\" fill=\"var(--vurgu)\" text-anchor=\"start\">K</text></svg>",
  "secenekler": [
    "Erime noktası değişmez; yatay bölüm uzar.",
    "Erime noktası yükselir; yatay bölüm uzar.",
    "Erime noktası değişmez; yatay bölüm kısalır.",
    "Erime noktası düşer; yatay bölüm kısalır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Erime noktasını kütleye bağlama: erime noktası ayırt edici bir özelliktir, kütle iki katına çıkınca yükselmez.",
    "Süre ile kütle ilişkisini ters kurma: kütle arttıkça hâl değişimi için gereken ısı artar, yatay bölüm uzar.",
    "Erime noktasını kütleye bağlama ve süreyi ters kurma: erime noktası değişmez, yatay bölüm uzar."
  ],
  "aciklama": "Erime noktası maddeye özgüdür; kütleye bağlı değildir. Hâl değişimi için gereken ısı kütleyle artar, özdeş ısıtıcıda bu daha uzun süre demektir.\nAdım 1: Aynı madde olduğundan erime noktası 40 °C kalır.\nAdım 2: Kütle iki katına çıkınca hâl değişimi için gereken ısı da artar; aynı ısıtıcıyla yatay bölüm uzar.\nAdım 3: Isınan bölümler de daha yavaş yükselir; ancak erime sıcaklığı değişmez.\nSık yapılan hata: Kütle artınca erime noktasının da değiştiğini sanmak.\nCevap A."
},
{
  "id": "fen-im-014",
  "kazanim": "F.8.4.5.4",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Çevreyle ısı alışverişi olmayan yalıtılmış bir kaba önce 0 °C'taki buz parçaları, sonra 40 °C'taki su konuyor. Bir süre sonra kapta hem erimemiş buz parçaları hem de su bulunuyor ve kaba daldırılan termometre 0 °C gösteriyor. Fen öğretmeni öğrencilerden kapta olanları ısı alışverişi açısından yorumlamalarını istiyor.\nI. Su, buza ısı vererek soğumuştur.\nII. Buz, sudan aldığı ısıyla erimiştir.\nIII. Buz erirken aldığı ısı, sıcaklığını 0 °C'ın üstüne çıkarmıştır.\n**Buna göre bu yargılardan hangileri doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  "dogru": 3,
  "hatalar": [
    "II'yi atlama: buz sıcak sudan aldığı ısıyla erir; I ile birlikte II de doğrudur.",
    "I'i atlama: sıcaklığı yüksek olan su, düşük olan buza ısı verir ve soğur; I de doğrudur.",
    "Erimede sıcaklığın arttığını sanma: erime sürerken (kapta buz kaldıkça) sıcaklık 0 °C'ta sabit kalır; alınan ısı hâl değişimine harcanır.",
    null
  ],
  "aciklama": "Isı, sıcaklığı yüksek olandan düşük olana akar. Saf madde hâl değiştirirken sıcaklığı sabit kalır: alınan ısı sıcaklığı artırmaz, hâli değiştirir.\nAdım 1 (I): Su (40 °C) buzdan (0 °C) sıcaktır; ısı sudan buza akar, su ısı verdiği için soğur. I doğrudur.\nAdım 2 (II): Buz, sudan aldığı ısıyla erir. II doğrudur.\nAdım 3 (III): Kapta erimemiş buz kaldığı sürece sıcaklık 0 °C'ta sabit kalır; buzun aldığı ısı sıcaklığı değil hâli değiştirir. III yanlıştır.\nSağlama: Termometrenin 0 °C göstermesi, kapta hâl değişiminin sürdüğünü gösterir.\nCevap D."
},
{
  "id": "fen-im-015",
  "kazanim": "F.8.4.5.3",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Sıvı hâldeki Z saf maddesi sabit bir ortamda soğutulurken sıcaklığı zamana göre ölçülüyor ve aşağıdaki grafik elde ediliyor.\n**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"Z maddesinin soğuma grafiği: 90 dereceden başlar, 3. dakikada 60 dereceye iner, 3 ile 9. dakika arasında 60 derecede sabit kalır, 12. dakikada 30 dereceye iner\"><line x1=\"66\" y1=\"177.6\" x2=\"536\" y2=\"177.6\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"182.6\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">30</text><line x1=\"66\" y1=\"119.3\" x2=\"536\" y2=\"119.3\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"124.3\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">60</text><line x1=\"66\" y1=\"60.9\" x2=\"536\" y2=\"60.9\" stroke=\"currentColor\" stroke-opacity=\"0.18\"/><text x=\"58\" y=\"65.9\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">90</text><line x1=\"66.0\" y1=\"236\" x2=\"66.0\" y2=\"241\" stroke=\"currentColor\"/><text x=\"66.0\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"166.7\" y1=\"236\" x2=\"166.7\" y2=\"241\" stroke=\"currentColor\"/><text x=\"166.7\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><line x1=\"267.4\" y1=\"236\" x2=\"267.4\" y2=\"241\" stroke=\"currentColor\"/><text x=\"267.4\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">6</text><line x1=\"368.1\" y1=\"236\" x2=\"368.1\" y2=\"241\" stroke=\"currentColor\"/><text x=\"368.1\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">9</text><line x1=\"468.9\" y1=\"236\" x2=\"468.9\" y2=\"241\" stroke=\"currentColor\"/><text x=\"468.9\" y=\"258\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">12</text><line x1=\"66\" y1=\"16\" x2=\"66\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"66\" y1=\"236\" x2=\"546\" y2=\"236\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301\" y=\"282\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Zaman (dk)</text><text x=\"16\" y=\"129\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\" transform=\"rotate(-90 16 129)\">Sıcaklık (°C)</text><polyline points=\"66.0,60.9 166.7,119.3 368.1,119.3 468.9,177.6\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><circle cx=\"66.0\" cy=\"60.9\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"166.7\" cy=\"119.3\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"368.1\" cy=\"119.3\" r=\"3.5\" fill=\"var(--vurgu)\"/><circle cx=\"468.9\" cy=\"177.6\" r=\"3.5\" fill=\"var(--vurgu)\"/></svg>",
  "secenekler": [
    "0-3. dakikalar arasında madde katı hâldedir.",
    "Maddenin erime noktası 60 °C'tır.",
    "3-9. dakikalar arasında madde çevresinden ısı alır.",
    "9. dakikadan sonra madde sıvı hâldedir."
  ],
  "dogru": 1,
  "hatalar": [
    "Başlangıç hâlini yanlış okuma: soruda madde sıvı hâlde başlıyor; ilk bölümde sıvıdır.",
    null,
    "Soğuma ile ısı alma karışıklığı: madde soğutulduğu için donarken çevresine ısı verir.",
    "Hâl sırasını yanlış kurma: 9. dakikada donma biter, madde katıdır."
  ],
  "aciklama": "Soğuma grafiğindeki yatay bölüm donmadır. Donma noktası erime noktasına eşittir.\nAdım 1: Madde sıvı hâlde başlıyor; 3. dakikaya kadar sıvı olarak soğur.\nAdım 2: 3-9. dakikalar arası 60 °C'ta yataydır; madde donar ve çevresine ısı verir.\nAdım 3: Donma noktası 60 °C ise erime noktası da 60 °C'tır. 9. dakikadan sonra madde katıdır.\nSağlama: Seçeneklerden yalnızca erime noktasına ilişkin ifade grafikle çelişmiyor.\nCevap B."
}
);
