// Türkçe — Fiilde Çatı: Kademe 3 (LGS Ayarı) YEDEĞİ, sıra 26-75 (tur-fc-326 … tur-fc-375)
// Kazanım: T.8.4.20 (fiillerin çatı özelliklerinin anlama katkısı; kavram tanımlarına girilmez)
// 30 düzey 3 + 20 düzey 4, kolaydan zora. Her soru bağımsızdır; iki soru aynı kaynak metni paylaşmaz.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["fiilde-cati"] = window.LGS_BANK["fiilde-cati"] || []).push(
{
  id: "tur-fc-326",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinin yüklemi hem etken hem de geçişsizdir?**`,
  gorsel: null,
  secenekler: [
    "Teknisyen projeksiyon cihazını sabaha kadar onardı.",
    "Konser salonunun perdeleri tören öncesinde kapatıldı.",
    "Konuklar konser salonuna ağır ağır ve sessizce girdi.",
    "Gençler konser biletlerini internetten erkenden aldı."
  ],
  dogru: 2,
  hatalar: [
    "Geçişli fiili geçişsiz sanma: 'Neyi onardı?' sorusunun cevabı 'cihazını'dır; nesne var.",
    "Edilgen fiili etken sanma: 'kapatıldı' fiilinde perdeleri kimin kapattığı belli değil.",
    null,
    "Geçişli fiili geçişsiz sanma: 'Neyi aldı?' sorusunun cevabı 'biletlerini'dir; nesne var."
  ],
  aciklama: `Etken fiilde işi yapan cümlede yazılıdır; geçişsiz fiil nesne almaz. İki ölçüt birlikte aranıyor.
Adım 1: Önce işi yapanı bulamadığın cümleyi ele. B'de perdeleri kapatan söylenmemiş; 'kapatıldı' edilgendir. B elenir.
Adım 2: Kalan cümlelerde yükleme "Neyi?" diye sor. A'da 'cihazını', D'de 'biletlerini' cevap verir. İkisi de geçişli; elenir.
Adım 3: C'de işi yapan 'konuklar'dır (etken). "Neyi girdi?" diye sorulamaz; 'salonuna' yalnızca yön bildirir. Yüklem geçişsizdir.
Sağlama: "Konuklar girdi." cümlesi nesne olmadan da tamdır.
Cevap C.`
},
{
  id: "tur-fc-327",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Satranç kulübü, yıllık turnuvanın ardından o günü anlatan kısa bir yazı yayımladı. Yazıdan alınan cümleler şöyledir:
(1) Finale kalan iki oyuncu masa başında saatlerce çekişti.
(2) Kulüp başkanı turnuva kurallarını katılımcılara okudu.
(3) Hakem satranç saatlerini ilk hamleden önce kurdu.
(4) Salonun arka sırasındaki izleyiciler hamleleri defterlerine not aldı.
**Bu cümlelerin hangisinde iş karşılıklı yapılmıştır?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tek yönlü işi karşılıklı sanma: başkan kuralları okuyor, kurallar başkanı okumuyor.",
    "Tek yönlü işi karşılıklı sanma: hakem saatleri kuruyor, saatler hakemi kurmuyor.",
    "Çoğul özneyi karşılıklı iş sanma: 'izleyiciler' çoğuldur ama her biri kendi notunu alıyor."
  ],
  aciklama: `İşteş fiilde iş iki taraf arasında karşılıklı yapılır: her taraf hem işi yapar hem de ötekinin yaptığı işi görür.
Adım 1: Her cümlede "İş kimden kime gidiyor, geri dönüyor mu?" diye sor.
Adım 2: (2)'de iş başkandan kurallara, (3)'te hakemden saatlere gidiyor; geri dönüş yok. Tek yönlü.
Adım 3: (4)'te özne çoğul ama her izleyici kendi defterine kendi notunu alıyor. Karşılıklılık yok.
Adım 4: (1)'de iki oyuncu birbirine karşı çekişiyor; her biri ötekiyle çekişen taraf. İş karşılıklı.
Sağlama: "İki oyuncu birbiriyle çekişti" demek anlamı bozmaz; öbür cümlelerde "birbirini" sözü cümleyi bozar.
Cevap A.`
},
{
  id: "tur-fc-328",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Çocuk kitabı fuarını anlatan bir haberde şu cümleler yer alıyor:
(1) Fuarın açılışı belediye başkanı tarafından yapıldı.
(2) Fuara gelen öğrenciler standları tek tek dolaştı.
(3) Giriş kapısının üstüne renkli bayraklar asıldı.
Bu cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümlede işi yapan belli olmadığı için yüklem edilgendir.
II. (2). cümlenin yüklemi etkendir.
III. (3). cümlede özne, işi yapan değil işten etkilenendir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "III de doğrudur: bayraklar asma işini yapmaz, işten etkilenir; (3) edilgendir. Yalnız II demek eksik kalır.",
    "I yanlıştır: (1) edilgendir ama işi yapan 'belediye başkanı tarafından' ile belirtilmiştir; yargının gerekçesi yanlış. III de doğru.",
    "I yanlıştır: yargının gerekçesi ('işi yapan belli olmadığı için') bu cümlede geçerli değil. II de doğrudur, onu dışarıda bırakmışsın.",
    null
  ],
  aciklama: `Edilgen çatıyı belirleyen şey, öznenin işi yapmayıp işten etkilenmesidir; işi yapanın yazılıp yazılmaması ayrı bir konudur. "Tarafından" ile işi yapan söylense de fiil edilgen kalır.
Adım 1: I → (1)'de 'açılış' işi yapmaz, işten etkilenir; yüklem edilgendir. Ama işi yapan 'belediye başkanı tarafından' ile belli. Yargı "belli olmadığı için" dediğinden yanlış.
Adım 2: II → (2)'de 'dolaştı' fiilini yapan 'öğrenciler'dir ve 'standları' nesnedir. Etken; yargı doğru.
Adım 3: III → (3)'te bayrakları kimin astığı söylenmemiş; özne bayraklar işten etkilenir. Yargı doğru.
Sonuç: II ve III doğru.
Sık yapılan hata: "Tarafından" görünce fiili etken saymak ya da "işi yapan belli" ile "edilgen değil" eşitliği kurmak.
Cevap D.`
},
{
  id: "tur-fc-329",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinin yüklemi, nesnesi yazılmamış olsa da geçişlidir?**`,
  gorsel: null,
  secenekler: [
    "Kuşlar sabahın ilk ışıklarıyla çam ağaçlarında öttü.",
    "Ada her akşam yemekten sonra bahçede uzun uzun okuyor.",
    "Yağmur dinince çocuklar kapıdan sokağa doğru koştu.",
    "Gün batarken sahildeki martılar denize doğru uçtu."
  ],
  dogru: 1,
  hatalar: [
    "Geçişsiz fiili geçişli sanma: 'ötmek' fiiline 'neyi?' diye sorulamaz; 'ağaçlarında' yer bildirir.",
    null,
    "Geçişsiz fiili geçişli sanma: 'koşmak' fiiline 'neyi?' diye sorulamaz; 'sokağa' yön bildirir.",
    "Geçişsiz fiili geçişli sanma: 'uçmak' fiiline 'neyi?' diye sorulamaz; 'denize' yön bildirir."
  ],
  aciklama: `Geçişlilik fiilin özelliğidir; nesnenin cümlede yazılı olmasına bağlı değildir. Fiile "neyi?" ya da "ne?" diye sorabiliyorsan fiil geçişlidir.
Adım 1: Her yükleme "Neyi?" sorusunu yönelt.
Adım 2: 'öttü', 'koştu', 'uçtu' için soru anlamsız; 'ağaçlarda', 'sokağa', 'denize' yer ve yön bildirir. Üçü geçişsizdir.
Adım 3: 'okuyor' için "Neyi okuyor?" diye sorulabilir (kitap, mektup, dergi…). Nesne söylenmemiş ama fiil geçişlidir.
Sağlama: "Ada okuyor." cümlesinde okunan bir şey olduğu hemen anlaşılır; "Kuşlar öttü." cümlesinde böyle bir eksiklik yoktur.
Sık yapılan hata: Cümlede nesne göremeyince fiili geçişsiz saymak.
Cevap B.`
},
{
  id: "tur-fc-330",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinin yüklemi yaptırma anlamı taşır?**`,
  gorsel: null,
  secenekler: [
    "Ceketin yırtılan kolu terzi tarafından yeniden dikildi.",
    "Aslı ceketin eskiyen düğmelerini terziye yeniden diktirdi.",
    "Terzi ceketin eskiyen düğmelerini özenle yeniden dikti.",
    "Ceketin eskiyen düğmeleri akşama kadar yeniden dikildi."
  ],
  dogru: 1,
  hatalar: [
    "Edilgeni yaptırma sanma: 'terzi tarafından' işi yapanı söylüyor ama özne (kol) işi yaptırmış değil, işten etkileniyor.",
    null,
    "Etken fiili yaptırma sanma: 'dikti' fiilini terzi kendisi yapıyor; kimseye yaptırılmıyor.",
    "Edilgeni yaptırma sanma: 'dikildi' fiilinde işi yapan belli değil, yaptıran bir özne de yok."
  ],
  aciklama: `Yaptırma anlamında özne işi kendisi yapmaz, başkasına yaptırır. Edilgende ise özne işten etkilenir. İkisini karıştırma.
Adım 1: A ve D'de özne ('kol', 'düğmeler') işi yapmıyor, işten etkileniyor; yüklem 'dikildi' edilgendir. A'daki 'terzi tarafından' işi yapanı söyler ama çatıyı değiştirmez.
Adım 2: C'de dikme işini terzi yapıyor ve özne de terzi; etkendir.
Adım 3: B'de Aslı düğmeleri dikmiyor; 'diktirdi' fiilinde dikme işini terziye yaptırıyor. Yaptırma burada.
Sağlama: B'de özne (Aslı) bellidir ve işi yapan ayrı bir kişidir ('terziye'). A'da işi yapan terzi ama özne ona iş buyurmuş değil.
Cevap B.`
},
{
  id: "tur-fc-331",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki tabloda dört cümle numaralandırılmıştır.
**Bu cümlelerin hangisinde özne, yaptığı işten kendisi etkilenmektedir?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Bahçedeki çiçekler sabah erkenden sulandı.</td></tr><tr><td>II</td><td>Mektuplar yarın sabah kargoyla gönderilecek.</td></tr><tr><td>III</td><td>Hemşire hastanın yarasını dikkatle sardı.</td></tr><tr><td>IV</td><td>Yağmurda ıslanan kız eve gelir gelmez sıcak bir havluyla kurulandı.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 3,
  hatalar: [
    "Edilgeni dönüşlü sanma: 'sulandı' fiilinde -n eki var ama çiçekler sulama işini kendilerine yapmaz; işi yapan belli değil.",
    "Edilgeni dönüşlü sanma: mektuplar gönderilme işinden etkilenir ama işi kendi üzerine yapmaz.",
    "Etken geçişli fiili dönüşlü sanma: 'sardı' fiilinde iş hastanın yarasına yönelir; hemşire kendini sarmıyor.",
    null
  ],
  aciklama: `Dönüşlü fiilde işi yapan ile işten etkilenen aynı kişidir. -n eki hem dönüşlü hem edilgen fiilde bulunabilir; bu yüzden ek değil anlam belirleyicidir.
Adım 1: I ve II'de çiçekleri ve mektupları işlerden etkilenen şeyler olarak görürsün; işi yapan söylenmemiş. İkisi de edilgen.
Adım 2: III'te hemşire işi yapıyor, iş yaraya yöneliyor; etken ve geçişli.
Adım 3: IV'te kızı kurulayan da kurulanan da kızdır. 'Kız kendini kuruladı' anlamı çıkar.
Sağlama: "Kız kendini kurulandı" diye sınama yapma; "kız kendini kuruladı" de. IV'te anlam aynı kalır, I-II'de bozulur.
Sık yapılan hata: -n eki gören her fiili dönüşlü saymak.
Cevap D.`
},
{
  id: "tur-fc-332",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Murat, okulun ilk gününü günlüğüne şöyle yazdı. Bazı fiillerin altı çizilmiştir:
Okul kapısından içeri __girdi__. Koridordaki duyuruların önünde durup dikkatle __okudu__. Sınıfa gelince çantasını sıranın yanına __astı__ ve defterine hızlıca __yazdı__.
**Altı çizili fiillerden hangisinin yüklemi nesne almaz (geçişsizdir)?**`,
  gorsel: null,
  secenekler: [
    "girdi",
    "okudu",
    "astı",
    "yazdı"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Nesnesi yazılmamış geçişli fiili geçişsiz sanma: 'Neyi okudu?' diye sorulabilir (duyuruları); nesne söylenmemiş ama fiil geçişlidir.",
    "Geçişli fiili geçişsiz sanma: 'Neyi astı?' sorusunun cevabı 'çantasını'dır; nesne var.",
    "Nesnesi yazılmamış geçişli fiili geçişsiz sanma: 'Neyi yazdı?' diye sorulabilir (notları, günlüğü…); nesne söylenmemiş ama fiil geçişlidir."
  ],
  aciklama: `Geçişli fiil nesne alabilir; geçişsiz fiil nesne almaz. Nesne yazılmamış olması fiili geçişsiz yapmaz.
Adım 1: 'astı' → "Neyi astı?" → çantasını. Nesne yazılı, geçişli.
Adım 2: 'okudu' ve 'yazdı' cümlede nesnesiz ama "Neyi okudu?" ve "Neyi yazdı?" soruları anlamlıdır; duyuruları okumuş, bir şeyler yazmıştır. İkisi de geçişli.
Adım 3: 'girdi' için "Neyi girdi?" sorusu anlamsızdır; 'kapısından içeri' yer bildirir. Geçişsiz.
Sağlama: "Murat girdi." cümlesi eksiksizdir, "Murat okudu." ve "Murat yazdı." cümlelerinde ise neyi okuduğu, neyi yazdığı merak edilir.
Cevap A.`
},
{
  id: "tur-fc-333",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Okul gözlem gününü anlatan bir yazıdan alınan cümleler şöyledir:
(1) Öğrenciler teleskobun merceğini yumuşak bir bezle sildi.
(2) Gözlem defterine yıldız haritaları çizildi.
(3) Hava kararınca çocuklar gökyüzünde parlayan gezegenlere baktı.
Bu cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümlede işi yapan belli olmadığı için yüklem edilgendir.
II. (2). cümlenin öznesi işi yapan değil, işten etkilenendir.
III. (3). cümlenin yüklemi işteştir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "Yalnız II",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "I yanlıştır: 'sildi' fiilini yapan 'öğrenciler' cümlede yazılıdır; (1) etkendir.",
    "III yanlıştır: 'baktı' fiilinde karşılıklı ya da ortak iş yok; çoğul özne işteşlik sağlamaz. II ise doğru, onu atlamışsın.",
    null,
    "III yanlıştır: çocukların her biri kendi başına bakıyor; iş karşılıklı değil. Yalnız II doğrudur."
  ],
  aciklama: `Her yargıyı kendi cümlesine götürüp ayrı ayrı sına.
Adım 1: I → (1)'de 'öğrenciler' merceği siliyor; işi yapan belli, yüklem etken. Yargı yanlış.
Adım 2: II → (2)'de haritaları kimin çizdiği söylenmemiş; özne 'haritalar' işten etkilenir. Yargı doğru.
Adım 3: III → (3)'te 'baktı' fiilinde ek de yok, karşılıklılık da. Çocuklar aynı yöne bakıyor ama birbirine karşılık vermiyor. Yargı yanlış.
Sonuç: yalnız II doğru.
Sık yapılan hata: Çoğul özneyi (çocuklar) işteşlik işareti saymak.
Cevap C.`
},
{
  id: "tur-fc-334",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Okul gazetesinin editörü, şu cümleyi haber yazısına koyacaktı: "Nöbetçi öğrenci koridorun ışığını dün akşam söndürdü." Ancak kimin söndürdüğünü belirtmeden aynı olayı anlatmak istiyor.
**Editörün yazacağı cümle aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Koridorun ışığı dün akşam kendiliğinden söndü.",
    "Nöbetçi öğrenci koridorun ışığını dün akşam arkadaşına söndürttü.",
    "Koridorun ışığı dün akşam saat sekizde söndürüldü.",
    "Nöbetçi öğrenciler koridorun ışığını dün akşam birlikte söndürdü."
  ],
  dogru: 2,
  hatalar: [
    "Edilgeni oluşla karıştırma: 'söndü' fiilinde ışığı söndüren hiç yok, ışık kendiliğinden sönmüş; olayın anlamı değişir.",
    "Edilgeni yaptırmayla karıştırma: 'söndürttü' fiilinde işi yapan arkadaştır, yaptıran nöbetçidir; işi yapan hâlâ belirtilmiş.",
    null,
    "Çatı değişmemiş: işi yapanlar ('nöbetçi öğrenciler') cümlede yazılı; yüklem etkendir."
  ],
  aciklama: `İşi yapanı belirtmeden, ama işin bir kişi tarafından yapıldığını koruyarak anlatmak edilgenle olur. 'söndü' ile 'söndürüldü' farklıdır.
Adım 1: 'söndü' geçişsiz bir fiildir ve ışığın kendiliğinden sönmesini anlatır; işi yapan yoktur. Oysa editör, birinin söndürdüğünü korumak istiyor.
Adım 2: B'de 'söndürttü' yaptırmadır; işi yapan yine söylenmiş (arkadaşına). D'de 'söndürdü' etkendir.
Adım 3: C'de 'söndürüldü' edilgendir: ışığı birinin söndürdüğü anlaşılır ama kim olduğu söylenmez.
Sağlama: C'ye "Biri tarafından" diye eklersen anlam bozulmaz; A'ya eklersen bozulur, çünkü 'söndü' kendiliğinden olan bir durumdur.
Cevap C.`
},
{
  id: "tur-fc-335",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde işi yapan cümlede belirtilmiş olduğu hâlde yüklem edilgendir?**`,
  gorsel: null,
  secenekler: [
    "Salonun ortasındaki heykel genç bir sanatçı tarafından yapıldı.",
    "Genç sanatçı heykelin son parçasını yarın akşam teslim edecek.",
    "Sergi salonundaki heykel gece vakti sessizce başka yere taşındı.",
    "Heykellerin altına küçük açıklama kartları özenle yerleştirildi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Etken fiili edilgen sanma: 'teslim edecek' fiilini yapan 'genç sanatçı'dır ve özne işi kendi yapar.",
    "Koşulun yarısını atlama: 'taşındı' edilgendir ama işi yapan cümlede belirtilmemiş.",
    "Koşulun yarısını atlama: 'yerleştirildi' edilgendir ama işi yapan cümlede belirtilmemiş."
  ],
  aciklama: `İki koşul birlikte aranıyor: yüklem edilgen olacak, işi yapan da cümlede yazılı olacak. "Tarafından" sözü işi yapanı gösterir ama özne yine işten etkilenir.
Adım 1: B etkendir: 'teslim edecek' fiilini sanatçı kendisi yapıyor. Edilgen değil, elenir.
Adım 2: C ve D edilgendir (taşındı, yerleştirildi) ama taşıyan ya da yerleştiren cümlede söylenmemiş. İkinci koşul sağlanmıyor.
Adım 3: A'da 'heykel' işi yapmaz, yapılır; yüklem edilgendir. İşi yapan 'genç bir sanatçı tarafından' ile belirtilmiş.
Sağlama: A'yı etkene çevirirsen "Genç bir sanatçı salonun ortasındaki heykeli yaptı." olur; işi yapan öznenin yerini alır.
Cevap A.`
},
{
  id: "tur-fc-336",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde yüklem, -t ya da -dır eki taşıdığı hâlde yaptırma anlamı taşımaz?**`,
  gorsel: null,
  secenekler: [
    "Zeynep bozulan kol saatini tamirciye onarttı.",
    "Rehber ziyaretçilere kalenin tarihini ayrıntılı anlattı.",
    "Belediye eski taş köprüyü geçen yıl yeniden yaptırdı.",
    "Ayşe ceketine yeni bir fermuar terziye taktırdı."
  ],
  dogru: 1,
  hatalar: [
    "Yaptırmayı görmeme: 'onarttı' fiilinde onarma işini tamirci yapıyor, yaptıran Zeynep'tir.",
    null,
    "Yaptırmayı görmeme: 'yaptırdı' fiilinde köprüyü belediye bizzat yapmıyor, yapılmasını sağlıyor.",
    "Yaptırmayı görmeme: 'taktırdı' fiilinde fermuarı terzi takıyor, yaptıran Ayşe'dir."
  ],
  aciklama: `Her -t ve -dır eki yaptırma anlamı vermez. Özne bu işi başkasına gördürüyor mu, buna bak.
Adım 1: A, C, D'de işin gerçek yapanı başkasıdır: tamirci, bir yapı ustası ya da ekibi, terzi. Özneler işi yaptırıyor.
Adım 2: B'de 'anlattı' fiilinde -t eki var ama rehber anlatma işini kendisi yapıyor; başkasına yaptırmıyor.
Sağlama: "Rehber anlatmayı başkasına yaptırdı" anlamı cümleden çıkmaz; öbür cümlelerde çıkar.
Sık yapılan hata: -t / -dır gören her fiili yaptırma saymak.
Cevap B.`
},
{
  id: "tur-fc-337",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Okul tiyatrosunun prova gününü anlatan dört cümle aşağıdaki tabloda numaralandırılmıştır.
**Bu cümlelerin hangisinin yüklemi hem dönüşlü hem de olumsuzdur?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kardeşim soğukta üşümemek için kalın bir şala sarındı.</td></tr><tr><td>II</td><td>Oyuncular sahneye çıkmadan önce kostümlerini giymedi.</td></tr><tr><td>III</td><td>Perde açılırken salondaki ışıklar söndürülmedi.</td></tr><tr><td>IV</td><td>Genç oyuncu sahneye çıkmadan önce aynaya bakıp hiç süslenmedi.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 3,
  hatalar: [
    "Olumsuz fiilimsiyi olumsuz yüklem sanma: 'üşümemek' fiilimsidir; yüklem 'sarındı' olumludur.",
    "Geçişli fiili dönüşlü sanma: 'giymedi' olumsuz ama iş kostümlere yönelir; 'giyinmedi' olsaydı dönüşlü olurdu.",
    "Edilgeni dönüşlü sanma: 'söndürülmedi' olumsuz ve edilgendir; ışıklar işi kendi üzerine yapmaz.",
    null
  ],
  aciklama: `İki ölçüt var: yüklem dönüşlü olacak (iş özneye dönecek) ve yüklem olumsuz olacak (-ma / -me).
Adım 1: Yüklemleri bul: sarındı, giymedi, söndürülmedi, süslenmedi.
Adım 2: Olumsuz olanlar: 'giymedi', 'söndürülmedi', 'süslenmedi'. 'sarındı' olumlu; 'üşümemek' ise yalnızca yüklemden önceki bir fiilimsidir. I elenir.
Adım 3: 'giymedi' etkendir, iş kostümlere yönelir. II elenir. 'söndürülmedi' edilgendir; ışıkları söndüren belli değil. III elenir.
Adım 4: 'süslenmedi' olumsuzdur ve süsleyen ile süslenen aynı kişidir (genç oyuncu). Dönüşlü.
Sağlama: "Genç oyuncu kendini süslemedi" cümlesi anlamı korur.
Cevap D.`
},
{
  id: "tur-fc-338",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde 'yıkandı' fiili, diğerlerinden farklı bir çatıdadır?**`,
  gorsel: null,
  secenekler: [
    "Yüzücü havuzdan çıkar çıkmaz soğuk suyla yıkandı.",
    "Mutfaktaki bütün tabaklar yemekten sonra yıkandı.",
    "Okulun üst kattaki camları tatilden önce yıkandı.",
    "Kirlenen perdeler geçen hafta sonu çamaşırhanede yıkandı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Çatıyı farklı sanma: 'yıkandı' burada edilgendir; tabakları kim yıkadı belli değil. C ve D ile aynı çatıdadır.",
    "Çatıyı farklı sanma: 'yıkandı' burada edilgendir; camları kim yıkadı belli değil. B ve D ile aynı çatıdadır.",
    "Çatıyı farklı sanma: 'yıkandı' burada edilgendir; perdeleri kim yıkadı belli değil. B ve C ile aynı çatıdadır."
  ],
  aciklama: `Aynı kökten ve aynı ekle kurulmuş fiiller farklı çatıda olabilir. Ek değil anlam belirler: işi kim yapıyor, kimin üzerinde gerçekleşiyor?
Adım 1: B, C, D'de yıkanan şeyler tabaklar, camlar, perdelerdir. Bunlar yıkama işini yapamaz; işi yapan söylenmemiş. Üçü de edilgen.
Adım 2: A'da yüzücü hem yıkayan hem yıkanandır. İş özneye dönüyor; yüklem dönüşlüdür.
Sağlama: "Yüzücü kendini yıkadı" anlamı korunur. Öbür cümlelerde "kendini" sözü saçma sonuç verir ("Tabaklar kendini yıkadı").
Sık yapılan hata: Üç cümlede aynı çatıyı görüp ötekini de aynı sanmak.
Cevap A.`
},
{
  id: "tur-fc-339",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Evin yenilenmesini anlatan dört cümle aşağıdaki tabloda numaralandırılmıştır.
**Bu cümlelerin hangisi hem soru cümlesidir hem de yüklemi yaptırma anlamı taşır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Salona yeni bir halı mı serdiniz?</td></tr><tr><td>II</td><td>Eski kapı geçen ay yeniden boyandı mı?</td></tr><tr><td>III</td><td>Duvar kâğıtlarını neden ustaya astırdınız?</td></tr><tr><td>IV</td><td>Dolaptaki kitapları sabaha kadar siz mi taşıdınız?</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 2,
  hatalar: [
    "Etken soru cümlesini yaptırma sanma: 'serdiniz' fiilini özne kendisi yapıyor; kimseye yaptırılmıyor.",
    "Edilgen soru cümlesini yaptırma sanma: 'boyandı' edilgendir; kapıyı boyayan belli değil, yaptıran özne de yok.",
    null,
    "Etken soru cümlesini yaptırma sanma: 'taşıdınız' işini 'siz' yapıyorsunuz; yaptırma yok."
  ],
  aciklama: `İki ölçüt var: cümle soru olacak (mı, neden, kim…), yüklem de yaptırma anlamı taşıyacak (-t, -dır, -tır ile iş başkasına yaptırılıyor).
Adım 1: Dört cümle de soru cümlesi; soru ölçütü hepsinde sağlanıyor. Asıl ayıran yaptırmadır.
Adım 2: I ('serdiniz') ve IV ('taşıdınız') etkendir; işi özne yapıyor. II ('boyandı') edilgendir.
Adım 3: III'te 'astırdınız' fiilinde -ır eki var; asma işini usta yapıyor, yaptıran özne ('siz').
Sağlama: "Ustaya astırdınız" cümlesinde işi yapan -e hâlindeki 'ustaya' sözüyle gösterilmiş.
Cevap C.`
},
{
  id: "tur-fc-340",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde özne çoğul olduğu hâlde iş karşılıklı ya da ortak yapılmamıştır?**`,
  gorsel: null,
  secenekler: [
    "Komşu çocuklar bahçe kapısında uzun uzun vedalaştı.",
    "Eski sınıf arkadaşları yıllar sonra kafede buluştu.",
    "Küs kuzenler yıllar sonra bayram sabahı barıştı.",
    "Yorgun yolcular sabaha karşı küçük kasabaya ulaştı."
  ],
  dogru: 3,
  hatalar: [
    "Karşılıklı işi karşılıksız sanma: 'vedalaştı' işteştir; çocuklar birbirine veda eder.",
    "Karşılıklı işi karşılıksız sanma: 'buluştu' işteştir; arkadaşlar birbiriyle buluşur.",
    "Karşılıklı işi karşılıksız sanma: 'barıştı' işteştir; kuzenler birbiriyle barışır.",
    null
  ],
  aciklama: `Dört fiilde de -ş var; ama -ş her zaman işteşlik eki değildir, bazen köke aittir. Ölçüt karşılıklılıktır.
Adım 1: 'vedalaştı', 'buluştu', 'barıştı' fiillerinde iş iki taraf arasında karşılıklı: "birbiriyle" sözü cümleye eklenebilir.
Adım 2: 'ulaştı' fiilinde -ş kökün parçasıdır ('ulaş-'). Yolcuların her biri kendi yolculuğunu bitirip kasabaya varıyor; birbirine ulaşmıyor.
Sağlama: "Yolcular birbiriyle ulaştı" anlamsızdır; "Çocuklar birbiriyle vedalaştı" doğal durur.
Sık yapılan hata: Çoğul özneyi ve -ş harfini birlikte görüp işteş saymak.
Cevap D.`
},
{
  id: "tur-fc-341",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiftlik gezisini anlatan yazıdan alınan cümleler şöyledir:
(1) Ahırın kapısı sabah erkenden açıldı.
(2) Çiftçi koyunların yünlerini bir yardımcıya kırktırdı.
(3) Çocuklar yeni doğan buzağıyı uzaktan seyretti.
(4) Ambarın penceresi sert rüzgârda kırıldı.
**Bu cümlelerin hangisinde iş, özne tarafından başkasına yaptırılmıştır?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 1,
  hatalar: [
    "Edilgeni yaptırma sanma: 'açıldı' fiilinde işi yapan belli değil, yaptıran bir özne de yok.",
    null,
    "Etken fiili yaptırma sanma: 'seyretti' fiilini çocuklar kendileri yapıyor.",
    "Edilgeni yaptırma sanma: 'kırıldı' fiilinde işi yapan belli değil, yaptıran bir özne de yok."
  ],
  aciklama: `Yaptırma anlamında özne işi kendisi yapmaz, başkasına yaptırır; bunu -t, -dır, -tır gibi ekler taşır. -ıl, -n ekli edilgen fiillerde ise işi yapan söylenmez, yaptıran da yoktur.
Adım 1: (1) 'açıldı' ve (4) 'kırıldı' edilgendir; özneler (kapı, pencere) işten etkilenir. Yaptıran yok.
Adım 2: (3) 'seyretti' fiilini çocuklar kendileri yapıyor; etkendir.
Adım 3: (2) 'kırktırdı' fiilinde -tır eki var; koyunları kırkan yardımcı, kırktıran çiftçidir.
Sağlama: (2)'de işi yapan -e hâlindeki 'yardımcıya' sözüyle bildirilmiş ve özne işi kendi yapmıyor.
Cevap B.`
},
{
  id: "tur-fc-342",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Bir konser gününü anlatan yazıdan alınan cümleler şöyledir:
(1) Orkestra şefi müzisyenlerle prova arasında uzun uzun tartıştı.
(2) Kemancı konserden önce kemanına yeni bir tel taktı.
(3) Sahnenin önüne yeni sandalyeler dizildi.
Bu cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümlede iş tek yönlüdür, işteşlik yoktur.
II. (2). cümlenin yüklemi yaptırma anlamı taşır.
III. (3). cümlede işi yapan belli değildir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "Yalnız III"
  ],
  dogru: 3,
  hatalar: [
    "I yanlıştır: 'tartıştı' işteş bir fiildir; şef ile müzisyenler birbiriyle tartışıyor. Doğru olan III'ü de atlamışsın.",
    "I ve II yanlıştır: 'tartıştı' karşılıklı iştir; 'taktı' fiilini kemancı kendisi yapıyor.",
    "II yanlıştır: 'taktı' fiilinde -tı zaman ekidir, yaptırma eki değil; kemancı teli kendisi takıyor.",
    null
  ],
  aciklama: `Her yargıyı kendi cümlesine götürüp ayrı ayrı sına.
Adım 1: I → (1)'de şef ile müzisyenler birbirine karşılık veriyor; 'tartıştı' işteştir. "Tek yönlü" diyen yargı yanlış.
Adım 2: II → (2)'de kemancı teli kendisi takıyor; 'taktı' fiilindeki -tı geçmiş zaman ekidir. Yaptırma yok. Yargı yanlış.
Adım 3: III → (3)'te sandalyeleri kimin dizdiği söylenmemiş; 'dizildi' edilgendir. Yargı doğru.
Sonuç: yalnız III doğru.
Sık yapılan hata: Fiilin sonundaki -t / -tı harflerini yaptırma eki sanmak.
Cevap D.`
},
{
  id: "tur-fc-343",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Okul gazetesinde aynı durumu anlatan iki cümle yer aldı:
Cümle 1: Kimse sınıfın kapısını açmadı.
Cümle 2: Sınıfın kapısı açılmadı.
**Bu iki cümle karşılaştırıldığında aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "İkinci cümlede özne, işi yapan değil işten etkilenendir.",
    "İlk cümlede işi yapan hiç belli değildir, ikincide belli olmuştur.",
    "İki cümlenin yüklemi de olumludur, yalnızca özneleri farklıdır.",
    "İkinci cümlede iş, kapı tarafından kendi üzerine yapılmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Çatıları ters değerlendirme: ilk cümlede işi yapan 'kimse' özne olarak yazılıdır (etken); işi yapanı vermeyen ikinci cümledir.",
    "Olumsuzluğu gözden kaçırma: iki cümlenin yüklemi de olumsuzdur (-ma); fark çatıdadır.",
    "Edilgeni dönüşlü sanma: kapı kendini açmıyor; işi yapan hiç söylenmemiş."
  ],
  aciklama: `Olumsuzluk çatıyı değiştirmez. Etken cümlede işi yapan (burada 'kimse') yazılıdır; edilgen cümlede yoktur ve özne işten etkilenir.
Adım 1: Cümle 1'de 'açmadı' fiilinin öznesi 'kimse', nesnesi 'kapısını'dır. Etken ve geçişli.
Adım 2: Cümle 2'de 'açılmadı' fiilinde -ıl eki var; 'kapısı' artık özne, ama kapıyı açan söylenmemiş. Edilgen.
Adım 3: Her iki yüklem de olumsuz; B'deki "hiç belli değildir" ve C'deki "olumludur" yanlış. D'deki "kendi üzerine" dönüşlüdür, burada yok.
Sağlama: Etken cümledeki nesne ('kapısını') edilgen cümlede özneye ('kapısı') dönüşmüş.
Cevap A.`
},
{
  id: "tur-fc-344",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Yarış gününü anlatan dört cümle aşağıdaki tabloda numaralandırılmıştır.
**Bu cümlelerin hangisi hem soru cümlesidir hem de yüklemi dönüşlüdür?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Kardeşinin saçlarını sabah sen mi taradın?</td></tr><tr><td>II</td><td>Yarıştan önce herkes soğuk suyla yıkandı mı?</td></tr><tr><td>III</td><td>Spor çantası neden koridorda unutuldu?</td></tr><tr><td>IV</td><td>Sporcular bu akşam ne zaman vedalaşacak?</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 1,
  hatalar: [
    "Etken geçişli fiili dönüşlü sanma: 'taradın' fiilinde iş kardeşin saçlarına yönelir; özne kendini taramıyor.",
    null,
    "Edilgeni dönüşlü sanma: 'unutuldu' edilgendir; çantayı kimin unuttuğu belli değil, çanta işi kendi üzerine yapmaz.",
    "İşteş fiili dönüşlü sanma: 'vedalaşacak' karşılıklı iştir; iş özneye dönmez, iki taraf arasında gider gelir."
  ],
  aciklama: `İki ölçüt: cümle soru olacak, yüklem dönüşlü olacak (işi yapan ile işten etkilenen aynı kişi).
Adım 1: Dört cümle de soru cümlesi (mı, neden, ne zaman). Ayıran ölçüt dönüşlülüktür.
Adım 2: I: 'taradın' → iş kardeşin saçlarına gidiyor. Etken, geçişli. III: 'unutuldu' → edilgen. IV: 'vedalaşacak' → işteş.
Adım 3: II: 'yıkandı' → herkes hem yıkayan hem yıkanan. "Herkes kendini yıkadı mı?" anlamı verir.
Sağlama: II'de "kendini" sözünü eklesen anlam korunur; öbür cümlelerde bozulur.
Cevap B.`
},
{
  id: "tur-fc-345",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Aynı kökten türeyen iki fiille kurulmuş şu cümleler verilmiştir:
(1) Hemşire uyuyan hastanın üstünü hafifçe örttü.
(2) Hasta üşüyünce kalın battaniyeye örtündü.
**Bu cümlelerin yüklemleri karşılaştırıldığında aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "İki cümlede de iş başkasına yönelir; ikisi de geçişli etkendir.",
    "(1)'de iş özneye döner, (2)'de ise başkasına yönelir.",
    "(1)'de iş başkasına yönelir, (2)'de özne işten kendisi etkilenir.",
    "(1)'de işi yapan belli değildir, (2)'de ise belli olmuştur."
  ],
  dogru: 2,
  hatalar: [
    "'Örtündü'yü geçişli etken sanma: hasta battaniyeyi kendi üstüne çekiyor; iş özneye dönüyor.",
    "Çatıları ters yerleştirme: (1)'de hemşire hastayı örtüyor (iş başkasına), (2)'de hasta kendini örtüyor (iş özneye).",
    null,
    "Dönüşlüyü edilgen sanma: iki cümlede de işi yapan açıkça yazılı ('hemşire', 'hasta'); belli olmayan yok."
  ],
  aciklama: `Aynı kökten gelen fiiller farklı çatıda olabilir. İşi yapan ile işten etkilenenin aynı olup olmadığına bak.
Adım 1: (1) 'örttü' → örten hemşire, örtülen hastanın üstü. İş başkasına yöneliyor; etken ve geçişli.
Adım 2: (2) 'örtündü' → örten de örtülen de hasta. Hasta kendini örtüyor; iş özneye dönüyor, yüklem dönüşlü.
Adım 3: Her iki cümlede işi yapan yazılı olduğu için hiçbiri edilgen değil.
Sağlama: (2)'de "hasta kendini örttü" demek anlamı korur; (1)'de "hemşire kendini örttü" demek anlamı değiştirir.
Cevap C.`
},
{
  id: "tur-fc-346",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde yüklem nesne almaz (geçişsizdir)?**`,
  gorsel: null,
  secenekler: [
    "Okulun bahçe kapısı sabahın ilk saatinde kilitlendi.",
    "Müdür bahçe kapısını sabahın ilk saatinde kilitledi.",
    "Öğretmenler yeni dönemin programını özenle hazırladı.",
    "Servis şoförü öğrencileri durakta sabırla ve sessizce bekledi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Geçişli fiili geçişsiz sanma: 'Neyi kilitledi?' sorusunun cevabı 'kapısını'dır; nesne var.",
    "Geçişli fiili geçişsiz sanma: 'Neyi hazırladı?' sorusunun cevabı 'programını'dır; nesne var.",
    "Geçişli fiili geçişsiz sanma: 'Kimi bekledi?' sorusunun cevabı 'öğrencileri'dir; nesne var."
  ],
  aciklama: `Edilgen cümlenin öznesi, etken cümlede nesne olan sözcüktür; ama edilgen cümlede nesne yoktur. Edilgen yüklemler nesne almaz.
Adım 1: B, C, D'de "Neyi / Kimi?" sorusu cevap buluyor: kapısını, programını, öğrencileri. Üçünde nesne var; yüklemler geçişli.
Adım 2: A'da 'kapısı' görünüşte nesneye benzer. Ama "Kapı kilitlendi" cümlesinde kapı özne; kilitleme işini yapan söylenmemiş.
Adım 3: 'kilitlendi' edilgendir, edilgen yüklem nesne almaz; cümlede "neyi kilitlendi?" diye sorulamaz.
Sağlama: A'yı etkene çevirince "Müdür kapıyı kilitledi." olur; 'kapı' o zaman nesne olur. B'nin kurduğu cümle budur.
Sık yapılan hata: Edilgen cümlenin öznesini nesne sanmak.
Cevap A.`
},
{
  id: "tur-fc-347",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun robotik kulübü, yarışma hazırlıklarını anlatan bir yazı yayımladı. Yazıdan alınan cümleler şöyledir:
(1) Ekip, pili tamamlanan robotu sabah test alanına yerleştirdi.
(2) Yarışma şartnamesi üyelere önceden dağıtıldı.
(3) Robotun sensörleri yeni yazılımla güncellendi.
(4) Takım üyeleri yarışma sabahı koridorda içtenlikle vedalaştı.
**Bu cümlelerin hangisinin yüklemi hem işteştir hem de geçişsizdir?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 3,
  hatalar: [
    "Etken geçişli fiili işteş sanma: 'yerleştirdi' tek yönlüdür ve 'robotu' nesnesi vardır.",
    "Edilgeni işteş sanma: 'dağıtıldı' edilgendir, iş karşılıklı değil; üyelere tek yönlü gider.",
    "Edilgeni işteş sanma: 'güncellendi' edilgendir, iş karşılıklı değil; sensörler işten etkilenir.",
    null
  ],
  aciklama: `İki ölçüt var: iş karşılıklı yapılacak (işteş) ve yüklem nesne almayacak (geçişsiz).
Adım 1: (1) 'yerleştirdi' → "Neyi yerleştirdi?" → robotu. Geçişli ve tek yönlü. Elenir.
Adım 2: (2) 'dağıtıldı' ve (3) 'güncellendi' edilgendir; işi yapan belli değil, karşılıklılık yok. İkisi elenir.
Adım 3: (4) 'vedalaştı' → üyeler birbirine veda ediyor; iş karşılıklı. "Neyi vedalaştı?" diye sorulamaz; yüklem nesne almaz.
Sağlama: "Takım üyeleri vedalaştı." cümlesi nesne olmadan eksiksizdir; "birbiriyle" sözü de anlamı bozmaz.
Cevap D.`
},
{
  id: "tur-fc-348",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yazarın romanını ve okurunu anlatan dört cümle aşağıda numaralandırılmıştır:
(1) Yazar romanını bir yılda tamamladı.
(2) Genç ressam kapak resmini yayınevine gönderdi.
(3) Roman, ünlü bir yayınevi tarafından yayımlandı.
(4) Okur kitabı bir oturuşta bitirdi.
**Bu cümlelerin hangisinin yüklemi, çatı bakımından diğerlerinden farklıdır?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 2,
  hatalar: [
    "Etken fiili farklı sanma: 'tamamladı' fiilini yazar yapıyor; (2) ve (4) ile aynı çatıdadır.",
    "Etken fiili farklı sanma: 'gönderdi' fiilini ressam yapıyor; (1) ve (4) ile aynı çatıdadır.",
    null,
    "Etken fiili farklı sanma: 'bitirdi' fiilini okur yapıyor; (1) ve (2) ile aynı çatıdadır."
  ],
  aciklama: `Üç cümlede ortak olan çatıyı bulursan farklı olanı seçersin.
Adım 1: (1), (2), (4) cümlelerinde özne ('yazar', 'ressam', 'okur') işi kendisi yapıyor ve nesne alıyor (romanını, kapak resmini, kitabı). Üçü etken ve geçişli.
Adım 2: (3)'te özne 'roman' işi yapmıyor, yayımlanma işinden etkileniyor. 'Ünlü bir yayınevi tarafından' sözü işi yapanı söylese de yüklem edilgen kalır.
Sağlama: (3)'ü "Ünlü bir yayınevi romanı yayımladı." yapınca cümle etkene döner ve özne işi yapan olur; öbür cümlelerde böyle bir çevirme gerekmez.
Sık yapılan hata: "Tarafından" ile işi yapan söylenince fiili etken saymak.
Cevap C.`
},
{
  id: "tur-fc-349",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Kapadokya'daki küçük bir pansiyonun yenilenmesini anlatan yazıdan alınan cümleler şöyledir:
(1) Pansiyon sahibi çatıdaki sızıntıyı ustaya onarttı.
(2) Odaların duvarları yeniden boyandı.
(3) Sahibi eski halıları halıcıya yıkattı.
(4) Misafirler yeni odalarını çok beğendi.
(5) Kahvaltı salonunun perdelerini kendisi astı.
**Bu cümlelerin kaçında iş, özne tarafından başkasına yaptırılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Bir",
    "İki",
    "Üç",
    "Dört"
  ],
  dogru: 1,
  hatalar: [
    "Eksik sayma: (1)'de 'onarttı' yaptırmadır ama (3)'teki 'yıkattı' da yaptırmadır; ikisini birlikte saymalısın.",
    null,
    "Fazla sayma: (2)'deki 'boyandı' edilgendir, yaptıran özne yok; (5)'te de özne işi 'kendisi' yapıyor.",
    "Fazla sayma: etken (4), (5) ve edilgen (2) cümleleri yaptırma değildir."
  ],
  aciklama: `Yaptırma anlamında özne işi başkasına yaptırır. Sayı sorularında her cümleyi tek tek yokla.
Adım 1: (1) 'onarttı' → sızıntıyı usta onarıyor, yaptıran pansiyon sahibi. Yaptırma var.
Adım 2: (2) 'boyandı' → edilgen; boyayan belli değil, yaptıran özne de yok. Yaptırma yok.
Adım 3: (3) 'yıkattı' → halıları halıcı yıkıyor, yaptıran sahip. Yaptırma var.
Adım 4: (4) 'beğendi' etken; (5) 'astı' fiilini özne ('kendisi') bizzat yapıyor; yaptırma yok.
Sağlama: Yaptırma olan cümleler (1) ve (3); yani iki cümle.
Cevap B.`
},
{
  id: "tur-fc-350",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müze bülteninde şu cümle yer almıştır: "Müzedeki vazo, koruma görevlileri tarafından özenle taşındı."
**Bu cümlenin yüklemi etken çatıya çevrildiğinde aşağıdakilerden hangisi elde edilir?**`,
  gorsel: null,
  secenekler: [
    "Müzedeki vazo koruma görevlilerini özenle taşıdı.",
    "Koruma görevlileri müzedeki vazoyu özenle taşıdı.",
    "Koruma görevlileri müzedeki vazoyu özenle taşıttı.",
    "Müzedeki vazo koruma görevlileriyle özenle taşındı."
  ],
  dogru: 1,
  hatalar: [
    "Özne ve nesneyi ters kurma: vazo taşıma işini yapmaz; taşıyanlar koruma görevlileridir.",
    null,
    "Etkeni yaptırmayla karıştırma: 'taşıttı' fiilinde koruma görevlileri taşıma işini başkasına yaptırmış olur; anlam değişir.",
    "Çatıyı değiştirmeme: 'taşındı' hâlâ edilgendir; yalnızca 'tarafından' sözü yerine başka bir söz konmuş."
  ],
  aciklama: `Edilgen cümle etkene çevrilirken işi yapan özne olur, edilgen cümlenin öznesi de nesne olur; yüklem etken biçime girer.
Adım 1: Edilgen cümlede özne 'vazo'dur; işi yapan 'koruma görevlileri'dir ('tarafından' ile belirtilmiş).
Adım 2: Etkende işi yapan özne olur: "Koruma görevlileri …". Vazo ise "Neyi taşıdı?" sorusunun cevabı olur: vazoyu (nesne).
Adım 3: Yüklem 'taşındı' → 'taşıdı'. 'taşıttı' olursa anlam yaptırmaya kayar.
Sağlama: A'da vazo kendi başına taşıma işi yapıyor gibi olur; bu anlamsız.
Cevap B.`
},
{
  id: "tur-fc-351",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinin yüklemi hem dönüşlü hem de devriktir?**`,
  gorsel: null,
  secenekler: [
    "Giyindi küçük oyuncu, sahneye çıkmadan önce hızla.",
    "Boyadı duvarları ustalar, tatil başlamadan önce.",
    "Toplandı çadırlar, sabah güneş doğmadan önce.",
    "Küçük oyuncu sahneye çıkmadan önce hızla giyindi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Etken fiili dönüşlü sanma: 'boyadı' fiilinde iş duvarlara yönelir; ustalar kendilerini boyamıyor.",
    "Edilgeni dönüşlü sanma: 'toplandı' fiilinde çadırları kimin topladığı belli değil; çadırlar işi kendine yapmaz.",
    "Devrik olmayanı devrik sanma: D'de yüklem cümlenin sonundadır; dönüşlü ama devrik değil."
  ],
  aciklama: `Devrik cümlede yüklem sonda değildir; dönüşlü yüklemde işi yapan ile işten etkilenen aynıdır. İki ölçüt birlikte aranıyor.
Adım 1: A, B, C devriktir (yüklem cümle başında). D'de yüklem sondadır; elenir.
Adım 2: B'de 'boyadı' etkendir, iş duvarlara yöneliyor. Elenir. C'de 'toplandı' edilgendir. Elenir.
Adım 3: A'da 'giyindi' fiilini yapan da giyinen de küçük oyuncudur. Dönüşlü ve devrik.
Sağlama: Devrik cümleyi düzgün sıraya sokunca "Küçük oyuncu … hızla giyindi." olur; çatı değişmez, yalnızca yüklemin yeri değişir.
Cevap A.`
},
{
  id: "tur-fc-352",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bahçenin bakımını anlatan yazıdan alınan cümleler şöyledir:
(1) Bahçe sahibi gül fidanlarını bahçıvana budattı.
(2) Gül fidanları nisan ayında toprağa dikildi.
(3) Komşular bahçe duvarının yanında selamlaştı.
Bu cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümlenin yüklemi hem geçişlidir hem de yaptırma anlamı taşır.
II. (2). cümlede işi yapan belli olmadığı için yüklem nesne alabilir.
III. (3). cümlede iş karşılıklı yapılmıştır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "III de doğrudur: 'selamlaştı' işteş bir fiildir; komşular birbirini selamlıyor. Yalnız I demek eksik kalır.",
    "II yanlıştır: 'dikildi' edilgendir ve edilgen yüklem nesne almaz; fidanlar özne, nesne değil. III ise doğru.",
    null,
    "I de doğrudur: 'budattı' geçişlidir ('Neyi budattı?' → fidanlarını) ve yaptırma anlamı taşır. II ise yanlış."
  ],
  aciklama: `Her yargıyı kendi cümlesine götürüp ayrı ayrı sına.
Adım 1: I → (1)'de "Neyi budattı?" → 'fidanlarını'. Yüklem geçişli. Budama işini bahçıvan yapıyor, bahçe sahibi yaptırıyor; yaptırma anlamı var. Yargı doğru.
Adım 2: II → (2)'de 'dikildi' edilgendir; fidanlar özne, nesne değil. "Neyi dikildi?" diye sorulamaz. Edilgen yüklem nesne alamaz. Yargı yanlış.
Adım 3: III → (3)'te 'selamlaştı' fiilinde komşular birbirini selamlıyor. İş karşılıklı. Yargı doğru.
Sonuç: I ve III doğru.
Sık yapılan hata: Edilgen cümlenin öznesini nesne sanmak.
Cevap C.`
},
{
  id: "tur-fc-353",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde özne çoğul olduğu hâlde yüklem dönüşlüdür?**`,
  gorsel: null,
  secenekler: [
    "Yolcular otelin bahçesinde akşam yemeğini birlikte yedi.",
    "Köylüler bayram sabahı mezarlığa çiçekler bıraktı.",
    "Gezginler dağ yolunda tek sıra hâlinde ilerledi.",
    "Tiyatrocular perde açılmadan önce kulislerde giyindi."
  ],
  dogru: 3,
  hatalar: [
    "Ortak işi dönüşlü sanma: 'birlikte' sözü işin ortak yapıldığını gösterir, işin özneye döndüğünü değil; 'yedi' geçişlidir.",
    "Çoğul özneyi dönüşlü sanma: 'bıraktı' fiilinde iş çiçeklere yönelir; köylüler kendilerine bir şey yapmıyor.",
    "Çoğul özneyi dönüşlü sanma: 'ilerledi' geçişsiz bir fiildir; iş özneye dönmüyor, yalnızca hareketi anlatıyor.",
    null
  ],
  aciklama: `Çoğul özne tek başına dönüşlülük ya da işteşlik anlamı vermez. Ölçüt, işi yapanla işten etkilenenin aynı kişiler olmasıdır.
Adım 1: A'da yemeği yiyen yolcular, yenen yemek; iş yemeğe yönelir. B'de iş çiçeklere yönelir. İkisi etken ve geçişli.
Adım 2: C'de 'ilerledi' hareket bildirir; iş kimseye yönelmez, özneye de dönmez.
Adım 3: D'de tiyatrocuların her biri kendi üstüne kıyafet giyiyor; giyen de giyilen de aynı kişiler. "Kendilerini giydirdi" anlamı çıkar.
Sağlama: D'de "Tiyatrocular kendilerini giydi" demek anlamı korur; A, B ve C'de "kendilerini" sözü anlamı bozar.
Sık yapılan hata: "Birlikte" sözünü görüp dönüşlü ya da işteş saymak.
Cevap D.`
},
{
  id: "tur-fc-354",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde 'kendi' ya da 'kendisi' sözü geçtiği hâlde yüklem dönüşlü değildir?**`,
  gorsel: null,
  secenekler: [
    "Elif ödevini kimseye yaptırmadan kendisi hazırladı.",
    "Elif her sabah okula gitmeden kendi kendine giyindi.",
    "Küçük çocuk plajda kimseye sormadan kendi kendine soyundu.",
    "Yaşlı adam yağmurda üşüyünce kendi kendine paltosuna sarındı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Dönüşlüyü etken sanma: 'giyindi' fiilinde giyen de giyinen de Elif'tir; iş özneye döner.",
    "Dönüşlüyü etken sanma: 'soyundu' fiilinde soyan da soyunan da çocuktur; iş özneye döner.",
    "Dönüşlüyü etken sanma: 'sarındı' fiilinde saran da sarılan da yaşlı adamdır; iş özneye döner."
  ],
  aciklama: `"Kendi" ya da "kendisi" sözü tek başına dönüşlülük göstermez. Ölçüt, işin özneye dönüp dönmediğidir.
Adım 1: B, C ve D'de giyinen, soyunan ve sarınan kişiler hem işi yapıyor hem işten etkileniyor. Üç yüklem de dönüşlüdür.
Adım 2: A'da 'hazırladı' fiilinin nesnesi 'ödevini'dir; Elif ödevi hazırlıyor, kendini hazırlamıyor. 'Kendisi' sözü yalnızca işi başkasına yaptırmadığını vurgular.
Sağlama: "Elif kendini hazırladı" demek anlamı değiştirir; öbür cümlelerde "kendini" sözü anlamı korur.
Sık yapılan hata: "Kendi" sözünü gören her cümleyi dönüşlü saymak.
Cevap A.`
},
{
  id: "tur-fc-355",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki dört cümlede 'yaz-' kökünden türeyen fiiller kullanılmıştır:
(1) İki arkadaş yaz tatilinde sık sık yazıştı.
(2) Edebiyat öğretmeni tahtaya ödev konusunu yazdı.
(3) Okul panosuna yarışma duyurusu yazıldı.
(4) Müdür yeni yönergeyi sekreterine yazdırdı.
**Bu cümlelerin hangisinde iş karşılıklı yapılmıştır?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Etken fiili işteş sanma: 'yazdı' fiilini öğretmen tek başına yapıyor; karşılık yok.",
    "Edilgeni işteş sanma: 'yazıldı' fiilinde işi yapan belli değil; iş karşılıklı değil.",
    "Yaptırmayı işteş sanma: 'yazdırdı' fiilinde müdür işi sekretere yaptırıyor; iş iki taraflı değil, yaptıran ile yapan arasında tek yönlüdür."
  ],
  aciklama: `Aynı kökten türeyen fiiller ekle farklı çatı kazanır. Bu soruda -ş eki işin karşılıklı yapıldığını gösteriyor.
Adım 1: (2) 'yazdı' → etken, iş öğretmenden tahtaya gidiyor.
Adım 2: (3) 'yazıldı' → edilgen; işi yapan belli değil. (4) 'yazdırdı' → yaptırma; müdür yazdırıyor, sekreter yazıyor.
Adım 3: (1) 'yazıştı' → iki arkadaş birbirine mektup yazıyor. İş karşılıklı.
Sağlama: "İki arkadaş birbirine yazdı" anlamı (1)'de korunur; öbür cümlelerde "birbirine" sözü anlamı bozar.
Cevap A.`
},
{
  id: "tur-fc-356",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Dağ yürüyüşüne çıkan bir grubu anlatan yazıdan alınan cümleler şöyledir:
(1) Rehber haritayı yürüyüşten önce herkese gösterdi.
(2) Yürüyüşçüler tepeye varmadan çantalarını yere bırakmadı.
(3) Hava bozulsa bile kimse yürüyüşten vazgeçmedi.
(4) Kamp ateşi gece boyunca hiç söndürülmedi.
**Bu cümlelerin hangisinin yüklemi hem etken hem olumsuz hem de geçişsizdir?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 2,
  hatalar: [
    "Olumsuzluk ölçütünü atlama: 'gösterdi' olumludur; ayrıca 'Neyi gösterdi?' sorusunun cevabı 'haritayı'dır, yüklem geçişlidir.",
    "Geçişli fiili geçişsiz sanma: 'bırakmadı' fiili olumsuz ve etken ama 'Neyi bırakmadı?' sorusunun cevabı 'çantalarını'dır.",
    null,
    "Edilgeni etken sanma: 'söndürülmedi' olumsuz ve geçişsiz görünür ama edilgendir; ateşi kimin söndürdüğü belli değil."
  ],
  aciklama: `Üç ölçüt birlikte aranıyor: etken (işi yapan cümlede yazılı), olumsuz (-ma / -me), geçişsiz (nesne almıyor). Seçenekleri tek tek eleyerek ilerle.
Adım 1: (1) 'gösterdi' olumlu; elenir.
Adım 2: (4) 'söndürülmedi' olumsuz ama edilgen; işi yapan belli değil. Elenir.
Adım 3: (2) 'bırakmadı' olumsuz ve etken; ama "Neyi bırakmadı?" → çantalarını. Geçişli olduğu için elenir.
Adım 4: (3) 'vazgeçmedi' olumsuz, işi yapan 'kimse' yazılı (etken) ve "Neyi vazgeçmedi?" diye sorulamaz; 'yürüyüşten' çıkış bildirir. Üç ölçüt de sağlanıyor.
Sağlama: "Kimse vazgeçmedi." cümlesi nesne olmadan tamdır.
Cevap C.`
},
{
  id: "tur-fc-357",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okul bahçesinin düzenlenmesini anlatan yazıdan alınan cümleler şöyledir:
(1) Okul müdürü bahçedeki fidanları gönüllülere diktirdi.
(2) Bahçedeki fidanlar gönüllüler tarafından dikildi.
(3) Bahçedeki fidanlar sabaha kadar sulandı.
(4) Okul müdürü bahçenin etrafına çit çektirdi.
**Bu cümlelerin hangisinde işi yapan cümlede belirtilmemiş olduğu hâlde yüklemde yaptırma anlamı vardır?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 3,
  hatalar: [
    "Koşulun yarısını atlama: (1)'de yaptırma vardır ama işi yapan 'gönüllülere' sözüyle belirtilmiştir.",
    "Edilgeni yaptırma sanma: 'dikildi' edilgendir; işi yapan 'gönüllüler tarafından' ile belirtilmiş, yaptıran bir özne de yok.",
    "Edilgeni yaptırma sanma: 'sulandı' edilgendir, işi yapan belli değil ama yaptırma anlamı yok.",
    null
  ],
  aciklama: `İki ölçüt birlikte aranıyor: yüklemde yaptırma anlamı olacak (özne işi başkasına yaptırır), işi yapan da cümlede belirtilmeyecek. Yaptırmada işi yapan çoğunlukla -e hâlindeki sözle gösterilir ama yazılması zorunlu değildir.
Adım 1: (2) ve (3) edilgendir; yaptıran özne yoktur. İkisi elenir.
Adım 2: (1) 'diktirdi' → yaptırma vardır; ama dikme işini yapanlar 'gönüllülere' sözüyle belirtilmiş. İkinci ölçüt sağlanmıyor.
Adım 3: (4) 'çektirdi' → yaptırma vardır; çiti kimin çektiği cümlede yok. İki ölçüt de sağlanıyor.
Sağlama: (4)'e "ustalara" eklesen işi yapan ortaya çıkar; yani gizliydi.
Sık yapılan hata: İşi yapanı belirtmeyen her cümleyi edilgen saymak.
Cevap D.`
},
{
  id: "tur-fc-358",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Eski bir çarşının bir gününü anlatan yazıdan alınan cümleler şöyledir:
(1) Esnaf, çarşının girişindeki tabelayı yeniletti.
(2) Dükkânların önündeki kaldırım taşları sabah erkenden yıkandı.
(3) Eski dostlar çarşıda yıllar sonra karşılaştı.
Bu cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümlede işi yapan hiç belirtilmemiş olmasına rağmen yüklem yaptırma anlamı taşır.
II. (2). cümlenin yüklemi hem edilgen hem de geçişsizdir.
III. (3). cümlenin yüklemi işteş olduğu için nesne alır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "II de doğrudur: 'yıkandı' edilgendir ve edilgen yüklem nesne almaz; yani geçişsizdir. Yalnız I demek eksik kalır.",
    null,
    "III yanlıştır: 'karşılaştı' işteştir ama nesne almaz; işteş olmak geçişli olmayı gerektirmez. II ise doğru.",
    "I de doğrudur: 'yeniletti' yaptırma anlamlıdır; işi yapan yazılmasa da yaptırma sürer. III ise yanlış."
  ],
  aciklama: `Yaptırmada işi yapanın cümlede yazılması zorunlu değildir. Edilgen yüklem nesne almaz. İşteş fiil de nesne almak zorunda değildir.
Adım 1: I → (1)'de 'yeniletti' fiilinde -t eki var; tabelayı esnaf yenilemiyor, yenilettiriyor. Yapan kişi yazılmamış ama yaptırma vardır. Yargı doğru.
Adım 2: II → (2)'de kaldırım taşları yıkama işinden etkilenir, yıkayan belli değil; edilgen. "Neyi yıkandı?" diye sorulamaz; geçişsiz. Yargı doğru.
Adım 3: III → (3)'te 'karşılaştı' işteştir ama "Neyi karşılaştı?" diye sorulamaz; nesne almaz. Yargı yanlış.
Sonuç: I ve II doğru.
Sık yapılan hata: "İşteş" ile "geçişli"yi eş saymak.
Cevap B.`
},
{
  id: "tur-fc-359",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `'kes-' kökünden türeyen fiillerle kurulmuş şu cümleler verilmiştir:
(1) Kavşakta iki sokak dik açıyla kesişti.
(2) Marangoz tahtayı ölçüye göre kesti.
(3) Yaşlı ressam çerçeve için camı ustaya kestirdi.
(4) Eski ağaçlar geçen hafta kesildi.
**Bu cümlelerin yüklemleri için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "(1) işteş, (2) etken, (3) yaptırma, (4) edilgendir.",
    "(1) işteş, (2) yaptırma, (3) etken, (4) edilgendir.",
    "(1) etken, (2) etken, (3) yaptırma, (4) dönüşlüdür.",
    "(1) işteş, (2) etken, (3) edilgen, (4) yaptırmadır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "(2) ile (3) karıştırılmış: 'kesti' fiilini marangoz kendisi yapıyor (etken); yaptırma 'kestirdi' fiilindedir.",
    "(1) 'kesişti' işteştir (iki sokak birbirini keser); (4) 'kesildi' edilgendir, dönüşlü değil.",
    "(3) 'kestirdi' edilgen değil yaptırmadır; (4) 'kesildi' ise yaptırma değil edilgendir."
  ],
  aciklama: `Aynı kökten türeyen dört fiil, eklere göre dört ayrı çatıya girmiştir. Her birini ayrı çöz.
Adım 1: (1) 'kesişti' → -ş eki ve iki sokağın birbirini kesmesi: karşılıklı iş. İşteş.
Adım 2: (2) 'kesti' → marangoz tahtayı kendisi kesiyor. Etken.
Adım 3: (3) 'kestirdi' → ressam camı kesmiyor, ustaya kestiriyor. Yaptırma.
Adım 4: (4) 'kesildi' → ağaçları kesenin kim olduğu belli değil. Edilgen.
Sağlama: Yalnız A seçeneğinde dört tanım da doğru.
Cevap A.`
},
{
  id: "tur-fc-360",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Yeni açılan bir köprüyü anlatan haberden alınan cümleler şöyledir:
(1) Köprü, bir inşaat firması tarafından yapıldı.
(2) Köprünün açılış töreni dün sabah yapıldı.
(3) Tören sırasında vali kısa bir konuşma yaptı.
(4) Köprüdeki aydınlatmalar belediye ekipleri tarafından kuruldu.
(5) Yeni köprüyü şehir halkı hevesle gezdi.
(6) Köprünün girişindeki pano bir mimar tarafından tasarlandı.
**Bu cümlelerin kaçında yüklem edilgendir ve işi yapan cümlede belirtilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Bir",
    "İki",
    "Üç",
    "Dört"
  ],
  dogru: 2,
  hatalar: [
    "Eksik sayma: yalnız ilk 'tarafından' cümlesini saymışsın; (4) ve (6) da aynı koşulu sağlıyor.",
    "Eksik sayma: (1) ve (4)'ü bulup (6)'yı atlamışsın; 'bir mimar tarafından' işi yapanı belirtiyor.",
    null,
    "Fazla sayma: (2)'yi de saymışsın; 'yapıldı' edilgen ama işi yapan cümlede yok."
  ],
  aciklama: `İki koşul birlikte aranıyor: yüklem edilgen olacak, işi yapan da cümlede (çoğu zaman "tarafından" ile) belirtilmiş olacak.
Adım 1: (1) 'yapıldı' edilgen; 'bir inşaat firması tarafından' işi yapanı belirtiyor. Koşul sağlanıyor.
Adım 2: (2) 'yapıldı' edilgen ama yapan yazılmamış. Sağlamıyor.
Adım 3: (3) ve (5) etken: 'vali' ve 'şehir halkı' işi yapıyor ama yüklem edilgen değil. Sağlamıyor.
Adım 4: (4) 'kuruldu' edilgen; 'belediye ekipleri tarafından' belirtilmiş. Sağlıyor.
Adım 5: (6) 'tasarlandı' edilgen; 'bir mimar tarafından' belirtilmiş. Sağlıyor.
Sağlama: (1), (4) ve (6) → üç cümle.
Cevap C.`
},
{
  id: "tur-fc-361",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Okul müdürü, toplantıda "Bahçedeki camlar kırıldı." diye konuştu. Toplantıdan çıkan bir öğrenci, bu sözü arkadaşlarına "Bahçedeki camları Kerem kırdı." diye aktardı.
**Öğrencinin yaptığı bu değişiklik, anlam bakımından aşağıdakilerden hangisine yol açmıştır?**`,
  gorsel: null,
  secenekler: [
    "Olayın zamanı değiştiğinden cümle yalnızca zaman bakımından farklılaşmıştır.",
    "Cam kırma işi artık iki kişi arasında karşılıklı olarak yapılmış olmaktadır.",
    "İş artık özneye döndüğünden camların kendilerini kırdığı anlaşılmaktadır.",
    "Müdürün belirtmediği bir kişi, işi yapan olarak cümleye eklenmiş olmaktadır."
  ],
  dogru: 3,
  hatalar: [
    "Zaman değişmemiş: iki cümlenin yüklemi de geçmiş zamandadır; değişen çatıdır.",
    "İşteşlik yok: 'kırdı' fiilinde -ş eki yok, Kerem camları kırıyor, camlar Kerem'i kırmıyor.",
    "Dönüşlülük yok: camlar işi yapan değil; Kerem camları kırıyor, camlar kendilerini kırmıyor.",
    null
  ],
  aciklama: `Edilgen cümle etken yapılınca işi yapan özne olarak cümleye girer. Bu, anlamı değiştirebilir: sorumlu belli olur.
Adım 1: "Camlar kırıldı." → camlar özne, işten etkileniyor; kırıcı belli değil. Edilgen.
Adım 2: "Kerem camları kırdı." → Kerem özne, camlar nesne. Etken.
Adım 3: Zaman iki cümlede de geçmiş; karşılıklılık ya da dönüşlülük yok. Değişen tek şey, müdürün söylemediği Kerem'in işi yapan olarak eklenmesi.
Sağlama: Müdürün cümlesi kimseyi suçlamıyor; öğrencinin cümlesi Kerem'i sorumlu gösteriyor.
Sık yapılan hata: Çatı değişimini zaman ya da olumsuzluk değişimiyle karıştırmak.
Cevap D.`
},
{
  id: "tur-fc-362",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Okuma alışkanlığı üzerine yazılmış bir yazıdan alınan cümleler şöyledir:
(1) Selin otobüste sessizce okudu.
(2) Kitabın son bölümü akşama kadar okundu.
(3) Servis okulun önünde durdu.
(4) Yan koltuktaki yolcu telefonunu çantasına koydu.
**Bu cümlelerin hangisinde yüklem, nesnesi yazılmadığı hâlde geçişlidir ve edilgen değildir?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Edilgeni geçişli sanma: 'okundu' edilgendir; 'kitabın son bölümü' özne, nesne değil. Edilgen yüklem nesne almaz.",
    "Geçişsiz fiili geçişli sanma: 'durdu' fiiline 'neyi?' diye sorulamaz; 'önünde' yer bildirir.",
    "Nesnesi yazılı olanı seçme: 'koydu' geçişlidir ama 'telefonunu' nesnesi cümlede yazılıdır."
  ],
  aciklama: `Üç ölçüt: yüklem geçişli, nesne cümlede yok, yüklem edilgen değil. Geçişlilik, nesnenin yazılmasına bağlı değildir.
Adım 1: (4) 'koydu' geçişli ama nesne ('telefonunu') yazılı. Üçüncü ölçüt değil, ikinci ölçüt bozuluyor. Elenir.
Adım 2: (3) 'durdu' geçişsiz. Elenir. (2) 'okundu' edilgen; edilgen yüklem nesne almaz. Elenir.
Adım 3: (1) 'okudu' → "Neyi okudu?" diye sorulabilir (kitap, gazete…). Nesne yazılı değil ama yüklem geçişli ve etken.
Sağlama: "Selin okudu." cümlesinde okunan şeyin eksik olduğu hissedilir.
Cevap A.`
},
{
  id: "tur-fc-363",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Okul gazetesi, "Müdür, pano için yeni bir çerçeve yaptı." cümlesini yayımlamıştı. Sonradan müdürün çerçevenin yapılmasını bir marangoza yaptırdığı anlaşıldı. Gazete, öznesi müdür olarak kalan ve işi yapanı da gösteren bir düzeltme yaptı.
**Düzeltilen cümle aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Pano için yeni bir çerçeve yapıldı.",
    "Müdür, pano için yeni bir çerçeveyi marangozla birlikte yaptı.",
    "Müdür, pano için yeni bir çerçeveyi marangoza yaptırdı.",
    "Pano için yeni bir çerçeve müdür tarafından yapıldı."
  ],
  dogru: 2,
  hatalar: [
    "Edilgen yapmak yetmez: 'yapıldı'da müdür cümleden düşer; müdürün işi yaptırdığı bilgisi kaybolur.",
    "Yaptırmayı ortak işle karıştırma: 'yaptı' fiilinde müdür de çalışmış olur; yaptırma 'yaptırdı' ile kurulur.",
    null,
    "Edilgen yapıp özneyi değiştirme: 'müdür tarafından yapıldı' işi yapanın müdür olduğunu söyler; marangoz hiç anılmaz, yaptırma anlamı da yoktur."
  ],
  aciklama: `Yaptırma anlamında özne işi başkasına yaptırır; yüklem -t, -dır, -tır ekleriyle kurulur ve işi yapan çoğunlukla -e hâlindeki sözle ('marangoza') gösterilir.
Adım 1: İlk cümle 'yaptı' ile müdürün çerçeveyi kendisinin yaptığını söylüyor; düzeltme gerekiyor. İki ölçüt var: özne müdür kalacak, işi yapan marangoz da cümlede görünecek.
Adım 2: A edilgen: özne değişir, müdür cümleden düşer, yaptırma bilgisi kaybolur. D de edilgen: işi yapanı müdür gösterir, marangoz anılmaz. B 'marangozla birlikte' diyerek müdürü de işin içine sokar.
Adım 3: C'de 'yaptırdı' → müdür işi yapmıyor, marangoz yapıyor; özne müdür kalıyor. Cümle istenen anlamı taşır.
Sağlama: C'de özne müdürdür (yaptıran), işi yapan -e hâlindeki 'marangoza' sözüyle belirtilir.
Cevap C.`
},
{
  id: "tur-fc-364",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki cümlelerde yüklemler cümlenin başına alınmıştır:
(1) Yırtıldı ceketin kolu, sert rüzgârda.
(2) Onarttı eski kemanını ustaya, konserden önce Arda.
(3) Taşıdı sandıkları hamallar, sabahın erken saatinde.
(4) Yazıştı iki arkadaş, bütün yaz boyunca.
**Bu cümlelerin hangisinin yüklemi hem devrik hem de yaptırma anlamlıdır?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 1,
  hatalar: [
    "Edilgeni yaptırma sanma: 'yırtıldı' edilgendir; yaptıran bir özne yok.",
    null,
    "Etken fiili yaptırma sanma: 'taşıdı' fiilini hamallar kendileri yapıyor.",
    "İşteş fiili yaptırma sanma: 'yazıştı' karşılıklı iştir; kimse işi başkasına yaptırmıyor."
  ],
  aciklama: `Dört cümlede de yüklem başa alındığı için hepsi devriktir; asıl ayırıcı ölçüt yaptırmadır. Devrik yüklem çatıyı değiştirmez.
Adım 1: (1) 'yırtıldı' → edilgen. Elenir.
Adım 2: (3) 'taşıdı' → etken, hamallar işi kendileri yapıyor. Elenir.
Adım 3: (4) 'yazıştı' → işteş, iki arkadaş birbirine yazıyor. Elenir.
Adım 4: (2) 'onarttı' → Arda kemanı onarmıyor, ustaya onarttırıyor. Yaptırma var. Cümle düz sıraya konunca "Arda konserden önce eski kemanını ustaya onarttı." olur ve çatı aynı kalır.
Sağlama: Devrik cümleyi düzgün sıraya getirmek çatıyı etkilemez.
Cevap B.`
},
{
  id: "tur-fc-365",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Bir haber metninde şu cümle yer almıştır: "Barajın kapakları sabaha karşı açıldı." Haberi yazan gazeteci burada edilgen çatılı bir yüklem seçmiştir.
**Gazetecinin bu tercihinde aşağıdakilerden hangisinin etkili olduğu söylenemez?**`,
  gorsel: null,
  secenekler: [
    "Kapakları kimin açtığının haber için önemsiz sayılması",
    "Dikkatin kapakları açandan açılma işine çekilmek istenmesi",
    "Haberin vurgusunun barajın durumuna kaydırılmak istenmesi",
    "Kapakları açan kişinin öne çıkarılıp sorumlu tutulmak istenmesi"
  ],
  dogru: 3,
  hatalar: [
    "Etkili olabilecek bir neden: edilgen çatı, işi yapanı geri plana iter; kimin açtığı önemsiz sayılmış olabilir.",
    "Etkili olabilecek bir neden: edilgen çatıda dikkat işi yapandan işin kendisine kayar.",
    "Etkili olabilecek bir neden: edilgen çatı, vurguyu işin sonucuna, yani barajın durumuna kaydırır.",
    null
  ],
  aciklama: `Edilgen çatı, işi yapanı geri plana iter ve dikkati işin kendisine ya da sonucuna çeker. İşi yapanı öne çıkarmak ise etken çatının işidir.
Adım 1: Kök olumsuz: "etkili olduğu söylenemez" diyor; yani edilgenin sağlamadığı bir amacı arıyoruz.
Adım 2: A, B, C edilgenin gerçekten sağladığı etkilerdir: yapanı önemsizleştirmek, dikkati işe çekmek, vurguyu sonuca kaydırmak.
Adım 3: D'de yapanı öne çıkarıp sorumlu tutmak isteniyor. Bunun için etken kullanılırdı: "Görevli kapakları açtı." gibi.
Sağlama: Cümlede 'açıldı'yı kimin açtığı hiç söylenmiyor; bu da D'nin tersidir.
Sık yapılan hata: Kök olumsuz olduğu hâlde doğru yapılabilecek seçeneği aramak.
Cevap D.`
},
{
  id: "tur-fc-366",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yüzme kursunu anlatan yazıdan alınan cümleler şöyledir:
(1) Kursa gelen çocuklar havuza girmeden önce soyundu.
(2) Eğitmen çocukların terliklerini sıraya dizdi.
(3) Küçük Ayşe kulaklarını kurulayıp hızla giyindi.
(4) Havuz başındaki sandalyeler ders öncesi düzenlendi.
(5) Dersten çıkan Mert sıcak duşta yıkandı.
(6) Kurs yöneticisi katılım belgelerini imzaladı.
**Bu cümlelerin kaçında iş, özneye dönmektedir (yüklem dönüşlüdür)?**`,
  gorsel: null,
  secenekler: [
    "İki",
    "Üç",
    "Dört",
    "Beş"
  ],
  dogru: 1,
  hatalar: [
    "Eksik sayma: (1), (3) ve (5) dönüşlüdür; birini atlamışsın.",
    null,
    "Fazla sayma: (4)'teki 'düzenlendi' -n eki taşır ama edilgendir; sandalyeler işi kendine yapmaz.",
    "Fazla sayma: -n ya da -l ekli bütün fiilleri saymışsın; (4) edilgen olduğu için dönüşlü değildir."
  ],
  aciklama: `Dönüşlü yüklemde işi yapan ile işten etkilenen aynı kişidir. -n eki edilgen fiilde de bulunur, bu yüzden anlama bak.
Adım 1: (1) 'soyundu' → çocuklar kendi üstlerini soyuyor. Dönüşlü.
Adım 2: (2) 'dizdi' → eğitmen terlikleri diziyor. Etken, geçişli.
Adım 3: (3) 'giyindi' → Ayşe kendini giydiriyor. Dönüşlü.
Adım 4: (4) 'düzenlendi' → sandalyeleri kimin düzenlediği belli değil. -n eki var ama edilgen.
Adım 5: (5) 'yıkandı' → Mert kendini yıkıyor. Dönüşlü. (6) 'imzaladı' etken.
Sağlama: Dönüşlü olanlar (1), (3), (5); yani üç cümle.
Cevap B.`
},
{
  id: "tur-fc-367",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `**Aşağıdaki cümlelerin hangisinde yükleme "birbiriyle" sözü eklenince anlam bozulmaz ve iş karşılıklı yapılmış olur?**`,
  gorsel: null,
  secenekler: [
    "Ece ile Mine kantinde uzun uzun görüştü.",
    "Ece ile Mine kantine sırayla girdi.",
    "Ece ile Mine kantinde öğle yemeğini yedi.",
    "Ece ile Mine kantine birlikte koştu."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Çoğul özneyi karşılıklı iş sanma: 'girdi' fiilinde iki kişi sırayla giriyor; birbirine karşılık yok.",
    "Çoğul özneyi karşılıklı iş sanma: 'yedi' fiilinde iş yemeğe yönelir; kızlar birbirini yemiyor.",
    "Köke ait -ş'yi işteşlik eki sanma: 'koştu'daki -ş köke aittir; 'birlikte' sözü ortak hareketi gösterir, karşılıklı iş değil."
  ],
  aciklama: `İşteş fiilin ayırıcı sınaması: yükleme "birbiriyle / birbirine" sözü eklenince anlam bozulmuyorsa iş karşılıklıdır.
Adım 1: B, C, D'de iki kız aynı işi ayrı ayrı yapıyor: girmek, yemek, koşmak. Aralarında karşılık yok. "Birbiriyle girdi / yedi / koştu" anlamsızdır.
Adım 2: D'de -ş eki var ama 'koş-' kökün parçasıdır; 'birlikte' sözü de karşılıklılık değil, birliktelik anlatır.
Adım 3: A'da 'görüştü' fiilinde Ece, Mine ile; Mine de Ece ile görüşüyor. "Birbiriyle görüştü" anlamı bozmaz.
Sağlama: Yalnız A'da sınama olumlu çıkıyor.
Cevap A.`
},
{
  id: "tur-fc-368",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yemek yarışmasını anlatan yazıdan alınan cümleler şöyledir:
(1) Yarışmacılar mutfağa girmeden önce takım arkadaşlarıyla yardımlaştı.
(2) Yarışma kuralları katılımcılara önceden dağıtıldı.
(3) Genç aşçı tabaktaki sosu yayıp tabağı özenle süsledi.
Bu cümlelerle ilgili şu yargılar verilmiştir:
I. (1). cümlenin yüklemi işteştir ve nesne almaz.
II. (2). cümlenin yüklemi edilgendir ve işi yapan belirtilmemiştir.
III. (3). cümlenin yüklemi etkendir ve geçişlidir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "I ve II",
    "I, II ve III",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "I de III de doğrudur: 'yardımlaştı' işteş ve geçişsizdir, 'süsledi' etken ve geçişlidir. Yalnız II demek eksik kalır.",
    "III de doğrudur: 'süsledi' fiilinde nesne ('tabağı') vardır; süsleyen aşçı, süslenen tabaktır. Etken ve geçişli.",
    null,
    "I de doğrudur: 'yardımlaştı' fiilinde -ş eki var ve ortak iş yapılıyor; 'Neyi yardımlaştı?' diye sorulamaz."
  ],
  aciklama: `Her yargıda iki özellik var; ikisi de doğru olmalı. Bir yargı ancak her iki özelliği doğruysa doğrudur.
Adım 1: I → 'yardımlaştı' işteştir (ortak iş, -ş eki); "Neyi yardımlaştı?" diye sorulamaz, nesne almaz. İki özellik de doğru.
Adım 2: II → 'dağıtıldı' edilgendir; kuralları kimin dağıttığı söylenmemiş. İki özellik de doğru.
Adım 3: III → 'süsledi' fiilini aşçı yapıyor (etken) ve "Neyi süsledi?" → tabağı (geçişli). Aşçı kendini süslemiyor, dönüşlü değil. İki özellik de doğru.
Sonuç: üç yargı da doğru.
Sık yapılan hata: Bir yargıdaki iki özellikten yalnızca birini denetleyip yargıyı doğru saymak.
Cevap C.`
},
{
  id: "tur-fc-369",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sanat galerisinin açılışını anlatan yazıdan alınan cümleler şöyledir:
(1) Ressam yeni tuvalleri ustaya yaptırdı.
(2) Galeri sahibi salonun zeminini ustaya yeniletti.
(3) Küratör ziyaretçilere sergideki eserleri tanıttı.
(4) Sergi sorumlusu davetiyeleri bastırdı.
**Bu cümlelerin hangisinde yüklem yaptırma anlamı taşır ve işi yapan cümlede belirtilmemiştir?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 3,
  hatalar: [
    "İşi yapanı gözden kaçırma: 'yaptırdı' yaptırma anlamlıdır ama işi yapan 'ustaya' sözüyle cümlede belirtilmiştir.",
    "İşi yapanı gözden kaçırma: 'yeniletti' yaptırma anlamlıdır ama zemini yenileyen kişi 'ustaya' sözüyle cümlede belirtilmiştir.",
    "Yaptırma anlamı olmayan fiili seçme: 'tanıttı' fiilinde -t eki var ama küratör eserleri kendisi tanıtıyor; yaptırma yok.",
    null
  ],
  aciklama: `İki ölçüt var: yüklem yaptırma anlamlı olacak, işi gerçekte yapan kişi cümlede söylenmeyecek. Yaptırmada işi yapan çoğunlukla -e hâlindeki sözle ('ustaya') bildirilir.
Adım 1: (3) 'tanıttı' fiilinde -t eki var ama küratör eserleri bizzat tanıtıyor; yaptırma yok. Elenir.
Adım 2: (1) 'yaptırdı' ve (2) 'yeniletti' yaptırma anlamlıdır; ama işi yapan ikisinde de 'ustaya' sözüyle belirtilmiştir. İkinci ölçüt bozulur, elenir.
Adım 3: (4) 'bastırdı' → sorumlu davetiyeleri kendisi basmıyor, başkasına bastırıyor; basan kişi ya da kurum cümlede hiç anılmıyor. İki ölçüt de sağlanır.
Sağlama: (4)'e "matbaaya" eklesen işi yapan belli olurdu; şimdiki hâliyle belli değil.
Sık yapılan hata: Yaptırma anlamlı her cümlede işi yapanın da yazılı olduğunu varsaymak.
Cevap D.`
},
{
  id: "tur-fc-370",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Hava durumu yüzünden yaşanan bir aksaklığı anlatan dört cümle aşağıdaki tabloda numaralandırılmıştır.
**Bu cümlelerin hangisinin yüklemi hem edilgen hem soru hem de devriktir?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Sefer, kar yüzünden iptal edildi mi?</td></tr><tr><td>II</td><td>İptal edildi sefer, kar yüzünden.</td></tr><tr><td>III</td><td>İptal edildi mi sefer, kar yüzünden?</td></tr><tr><td>IV</td><td>Kar yüzünden kim iptal etti seferi?</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 2,
  hatalar: [
    "Devrik olmayanı devrik sanma: I'de yüklem cümlenin sonundadır; edilgen ve soru ama devrik değil.",
    "Soru olmayanı soru sanma: II edilgen ve devriktir ama soru cümlesi değildir.",
    null,
    "Etkeni edilgen sanma: IV'te 'iptal etti' yüklemini yapan sorulmuştur, yani etkendir."
  ],
  aciklama: `Üç ölçüt birlikte aranıyor: yüklem edilgen, cümle soru, yüklem devrik. Zaman, olumsuzluk, soru ve devrik yapı çatıyı değiştirmez.
Adım 1: 'İptal edildi' (I, II, III) edilgendir; IV'teki 'iptal etti' etkendir. IV elenir.
Adım 2: I ve III soru cümlesi ("mi"), II değildir. II elenir.
Adım 3: I'de yüklem sondadır, düzgün sıralı. III'te yüklem başa alınmış ("iptal edildi mi sefer"). Devrik olan III.
Sağlama: III düz sıraya konunca "Sefer, kar yüzünden iptal edildi mi?" (I) olur; çatı aynı kalır.
Cevap C.`
},
{
  id: "tur-fc-371",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, cümlelerin yüklemlerini inceleyip çatı özelliklerini aşağıdaki tabloya yazmıştır.
**Öğrenci tabloda bir satırı yanlış doldurmuştur. Yanlış doldurulan satır hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th><th>Öğrencinin yazdığı</th></tr><tr><td>I</td><td>Rüzgâr çamaşırları sabaha kadar kuruttu.</td><td>Etken, geçişli</td></tr><tr><td>II</td><td>Duvar yeniden boyandı.</td><td>Edilgen, geçişli</td></tr><tr><td>III</td><td>Kardeşler bahçede kovalaştı.</td><td>İşteş, geçişsiz</td></tr><tr><td>IV</td><td>Genç kız soğukta kalın bir atkıya sarındı.</td><td>Dönüşlü, geçişsiz</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 1,
  hatalar: [
    "Doğru satırı yanlış sanma: 'kuruttu' fiilini rüzgâr yapıyor (etken) ve 'çamaşırları' nesnesi var (geçişli); satır doğru.",
    null,
    "Doğru satırı yanlış sanma: 'kovalaştı' karşılıklı iştir (işteş) ve nesne almaz (geçişsiz); satır doğru.",
    "Doğru satırı yanlış sanma: 'sarındı' iş özneye döndüğü için dönüşlüdür ve nesne almaz (geçişsiz); satır doğru."
  ],
  aciklama: `Her satırın iki özelliğini ayrı ayrı denetle. Edilgen yüklem nesne almaz; yani edilgen ile geçişli birlikte olamaz.
Adım 1: I → rüzgâr işi yapıyor (etken); "Neyi kuruttu?" → çamaşırları (geçişli). Doğru. -t ekine aldanma, yaptırma yok.
Adım 2: II → 'boyandı' edilgen. Edilgen yüklem nesne almaz; "Neyi boyandı?" diye sorulamaz; 'duvar' özne. Öğrenci "geçişli" yazmış, bu yanlış.
Adım 3: III → 'kovalaştı' karşılıklı iş, nesne yok. Doğru. IV → 'sarındı' dönüşlü, nesne yok. Doğru.
Sağlama: Yalnız II'de iki özellik birbiriyle çelişiyor (edilgen + geçişli).
Cevap B.`
},
{
  id: "tur-fc-372",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `"Ahmet çatıyı onarmadı." cümlesinin yüklemi yaptırma anlamlı yapılacak, onarma işini yapan kişi "usta" sözüyle gösterilecek ve cümlenin olumsuzluğu korunacaktır.
**Bu işlemlerin sonunda aşağıdakilerden hangisi elde edilir?**`,
  gorsel: null,
  secenekler: [
    "Ahmet çatıyı ustaya onartmadı.",
    "Çatıyı usta Ahmet'e onartmadı.",
    "Ahmet çatıyı ustaya onarttı.",
    "Çatı, usta tarafından onarılmadı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yaptıran ile yapanı karıştırma: 'Ahmet'e onartmadı' demek, ustanın Ahmet'e yaptırdığını söyler; oysa yaptıran Ahmet'tir.",
    "Olumsuzluğu kaybetme: 'onarttı' olumlu bir yüklemdir; cümlenin olumsuzluğu korunmadı.",
    "Çatıyı yaptırmaya çevirmeme: 'onarılmadı' edilgendir; Ahmet cümleden düşmüş, yaptırma anlamı da kaybolmuştur."
  ],
  aciklama: `Yaptırma anlamında yüklem -t, -dır, -tır ekleriyle kurulur; işi yapan -e hâlindeki sözle gösterilir. Olumsuzluk eki yaptırma ekinden sonra gelir.
Adım 1: Yüklem 'onarmadı' → köke yaptırma eki: onar-t-. Sonra olumsuzluk: onar-t-ma-dı → 'onartmadı'.
Adım 2: İşi yapan 'usta', -e hâlinde: 'ustaya'. Özne yaptıran Ahmet olarak kalır.
Adım 3: A'da hepsi sağlanıyor. C olumlu; D edilgen; B özne ile işi yapanı ters kuruyor.
Sağlama: A'da çatıyı onaracak kişi usta, onartmayan (yaptırmayan) Ahmet'tir; yüklem olumsuz olsa da yaptırma çatısındadır.
Cevap A.`
},
{
  id: "tur-fc-373",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Bayram sabahı yaşananları anlatan dört cümle aşağıda numaralandırılmıştır:
(1) Eski komşular bu bayramda kucaklaştı mı?
(2) Eski komşular bu bayramda da kucaklaşmadı.
(3) Eski komşular bayram sofrasında çay içmedi mi?
(4) Eski komşular bu bayramda da kucaklaşmadı mı?
**Bu cümlelerin hangisinin yüklemi hem işteş hem olumsuz hem de soru yüklemidir?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 3,
  hatalar: [
    "Olumsuzluğu atlama: (1)'de 'kucaklaştı' işteş ve soru ama olumludur.",
    "Soru ölçütünü atlama: (2)'de 'kucaklaşmadı' işteş ve olumsuz ama cümle soru cümlesi değildir.",
    "İşteş olmayanı işteş sanma: (3)'te 'içmedi' soru ve olumsuz ama etkendir; karşılıklı iş yok.",
    null
  ],
  aciklama: `Üç ölçüt birlikte aranıyor: işteş (karşılıklı iş), olumsuz (-ma / -me) ve soru (-mı / -mi). Olumsuzluk ve soru çatıyı değiştirmez.
Adım 1: (3) 'içmedi' etkendir, işteş değil; elenir.
Adım 2: (1) 'kucaklaştı' işteş ama olumlu; elenir.
Adım 3: (2) 'kucaklaşmadı' işteş ve olumsuz ama soru eki yok; elenir.
Adım 4: (4) 'kucaklaşmadı mı' → işteş (-ş), olumsuz (-ma), soru (mı). Üçü birlikte.
Sağlama: (4)'ün "kucaklaşmadı" kısmı (2)'dekiyle, soru eki (1)'dekiyle aynı; üç özellik burada buluşuyor.
Cevap D.`
},
{
  id: "tur-fc-374",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `Bir akşam yemeğini anlatan yazıdan alınan cümleler şöyledir:
(1) Misafirler akşam geç saatte geldi.
(2) Ev sahibi sofraya sıcak çorba getirdi.
(3) Çocuklar bahçede sessizce oturdu.
(4) Sofradaki tabaklar yemekten sonra kaldırıldı.
(5) Büyükanne herkese çay dağıttı.
(6) Misafirler gece yarısı yola çıktı.
**Bu cümlelerin kaçında yüklem nesne almaz (geçişsizdir)?**`,
  gorsel: null,
  secenekler: [
    "Üç",
    "Dört",
    "Beş",
    "Altı"
  ],
  dogru: 1,
  hatalar: [
    "Eksik sayma: edilgen (4)'ü geçişli sanmış olabilirsin; 'kaldırıldı' edilgendir ve nesne almaz.",
    null,
    "Fazla sayma: (2)'deki 'getirdi' ya da (5)'teki 'dağıttı' geçişlidir; 'çorba' ve 'çay' nesnedir.",
    "Fazla sayma: altı cümlenin hepsini saymışsın; (2) ve (5)'te nesne var."
  ],
  aciklama: `Her yükleme "Neyi? Kimi?" diye sor. Cevap yoksa geçişsiz. Edilgen yüklem de nesne almaz; edilgen cümlenin öznesi nesne değildir.
Adım 1: (1) 'geldi' → geçişsiz. (3) 'oturdu' → geçişsiz. (6) 'çıktı' → geçişsiz ('yola' yön bildirir).
Adım 2: (2) 'getirdi' → neyi getirdi? çorba. Geçişli. (5) 'dağıttı' → neyi dağıttı? çay. Geçişli.
Adım 3: (4) 'kaldırıldı' → edilgen; 'tabaklar' özne. "Neyi kaldırıldı?" diye sorulamaz. Geçişsiz.
Sağlama: Geçişsizler (1), (3), (4), (6) → dört cümle.
Cevap B.`
},
{
  id: "tur-fc-375",
  kazanim: "T.8.4.20",
  kademe: 3,
  zorluk: 4,
  soru: `**"Sınıfın penceresi yağmur başlamadan kapatılmamıştı." cümlesindeki yüklemle aynı çatıda olan yüklem, aşağıdaki cümlelerin hangisinde vardır?**`,
  gorsel: null,
  secenekler: [
    "Nöbetçiler pencereyi yağmur başlamadan kapatmamıştı.",
    "Nöbetçiler yağmur başlamadan sınıfı temizletmemişti.",
    "Sınıfın perdesi yağmur başlamadan çekilmiş miydi?",
    "Nöbetçiler yağmur başlamadan sınıftan hiç çıkmamıştı."
  ],
  dogru: 2,
  hatalar: [
    "Çatıyı eşleştirememe: 'kapatmamıştı' etkendir; işi yapan 'nöbetçiler' yazılı.",
    "Çatıyı eşleştirememe: 'temizletmemişti' yaptırmadır; nöbetçiler işi başkasına yaptırmamış.",
    null,
    "Çatıyı eşleştirememe: 'çıkmamıştı' etken ve geçişsizdir; işi yapan 'nöbetçiler' yazılı."
  ],
  aciklama: `Zaman, olumsuzluk ve soru çatıyı değiştirmez. Verilen yüklemin çatısını bulup aynı çatıdaki yüklemi seçeceksin.
Adım 1: Verilen yüklem 'kapatılmamıştı' → olumsuz, ama -ıl eki ve anlam edilgen. Pencereyi kimin kapattığı söylenmemiş; özne ('pencere') işten etkileniyor.
Adım 2: A: 'kapatmamıştı' etken (nöbetçiler). B: 'temizletmemişti' yaptırma. D: 'çıkmamıştı' etken, geçişsiz. Üçü de farklı çatı.
Adım 3: C: 'çekilmiş miydi' → perdeyi kimin çektiği belli değil; özne 'perde' işten etkileniyor. Soru eki ve zaman değişse de edilgen.
Sağlama: C'yi etkene çevirmek için dışarıdan bir özne eklemek gerekir; A, B, D'de gerekmez.
Cevap C.`
}
);
