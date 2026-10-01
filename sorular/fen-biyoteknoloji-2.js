// Fen Bilimleri — Biyoteknoloji: Kademe 3 (LGS Ayarı) ve Havuz (kademe 0)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["biyoteknoloji"] = window.LGS_BANK["biyoteknoloji"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "fen-bt-301",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tarım araştırma istasyonunda iki buğday çeşidi bulunmaktadır. Birinci çeşidin başakları çok tane verir ama pas hastalığına kolayca yakalanır. İkinci çeşit pas hastalığına dayanıklıdır ama az tane verir. Araştırmacılar bu iki çeşidi çaprazlamış, yavrular arasından hem çok tane veren hem de hastalığa dayanıklı olanları seçmiştir. Seçtikleri bitkileri kuşaklar boyunca birbiriyle çaprazlamayı ve seçmeyi sürdürerek sekiz yıl sonra yeni bir çeşit elde etmişlerdir.
**Buna göre araştırmacıların uyguladığı yöntem ve bu yöntemin özelliği aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Gen aktarımı: buğdaya başka bir türden alınan gen eklenmiştir.",
    "Islah: var olan özellikler çaprazlanıp seçilerek birleştirilmiştir.",
    "Klonlama: tek bir bitkinin kalıtsal kopyaları çoğaltılmıştır.",
    "Aşılama: bir bitkinin dalı başka bir bitkinin gövdesine eklenmiştir."
  ],
  dogru: 1,
  hatalar: [
    "Islahı gen aktarımıyla karıştırma: araştırmacılar başka bir türden gen almamış, aynı türden iki buğday çeşidini çaprazlamıştır.",
    null,
    "Çaprazlamayı klonlamayla karıştırma: klonlamada tek bir bireyin kopyası elde edilir; burada iki çeşit çaprazlanarak yeni bir gen birleşimi oluşturulmuştur.",
    "Yöntemi yanlış eşleştirme: aşılamada çaprazlama yapılmaz, bir bitkinin dalı ya da gözü başka bir bitkiye eklenir."
  ],
  aciklama: `Islah, istenen özellikleri taşıyan bireylerin seçilip çaprazlanmasıyla canlıların verimini ya da niteliğini artırma yöntemidir. Bu yönteme yapay seçilim de denir.
Adım 1: Araştırmacılar aynı türden iki buğday çeşidini çaprazlamıştır. Başka bir türden gen alınmamıştır; bu yüzden yöntem gen aktarımı değildir.
Adım 2: Yavruların içinden istenen iki özelliği birlikte taşıyanlar seçilmiş ve seçim kuşaklar boyunca sürdürülmüştür. Bu, ıslahın tanımına uyar.
Adım 3: Yeni çeşit, iki ebeveynde zaten var olan "çok tane verme" ve "hastalığa dayanıklılık" özelliklerini bir arada taşır. Islah yeni bir gen üretmez; var olan genleri yeni bir birleşimde toplar.
Sık yapılan hata: Araştırma istasyonunda yapılan her çalışmayı gen aktarımı sanmak. Ölçüt, canlıya başka bir canlının geninin eklenip eklenmediğidir.
Cevap B.`
},
{
  id: "fen-bt-302",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir köyde toprakta yaşayan bir mantar, sevilen bir şeftali çeşidinin köklerini çürütmektedir. Bir bahçıvan, kökleri bu mantara dayanıklı olan yabani bir şeftali fidanını toprağa dikip gövdesinden kesmiştir. Kesik yere, lezzetli şeftali çeşidinden aldığı bir dal parçasını (kalem) yerleştirip sıkıca bağlamıştır. Birkaç yıl sonra ağaç, lezzetli çeşidin meyvelerini vermiş ve mantarlı toprakta sağlıklı kalmıştır.
Buna göre;
I. Kalemden gelişen dallardaki meyveler, kalemin alındığı çeşidin özelliklerini taşır.
II. Uygulama sonucunda kalemin kalıtsal yapısı değişerek mantara dayanıklı hâle gelmiştir.
III. Uygulama, iki farklı bitkinin yararlı özelliklerini tek bir ağaçta bir araya getirmiştir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: ağacın meyvesi kalemden, mantara dayanıklılığı ise anaçtan gelir; iki bitkinin yararlı özellikleri bir aradadır.",
    "Aşılamanın genleri değiştirdiğini sanma: kalemin kalıtsal yapısı değişmez; dayanıklılık, kökleri oluşturan anacın özelliğidir.",
    "Anacın özelliğini kaleme mal etme: kalem mantara dayanıklı hâle gelmemiştir; mantarla temas eden kökler yabani fidana aittir.",
    null
  ],
  aciklama: `Aşılama, bir bitkiden alınan göz ya da dal parçasının (kalem), kökleri toprakta olan başka bir bitkiye (anaç) eklenmesidir. Eklenen parça anaçla kaynaşır ve büyümeye devam eder.
Adım 1 (I): Dallar ve meyveler kalemden gelişir. Kalem, alındığı lezzetli çeşidin genlerini taşır; meyveler de o çeşidin özelliklerini gösterir. I doğrudur.
Adım 2 (II): Aşılama genlere dokunmaz; kalemin kalıtsal yapısı aynı kalır. Ağacın mantarlı toprakta sağlıklı kalmasının nedeni, köklerin mantara dayanıklı yabani fidana ait olmasıdır. II yanlıştır.
Adım 3 (III): Lezzetli meyve kalemden, hastalığa dayanıklı kök anaçtan gelir. İki bitkinin yararlı özellikleri tek ağaçta birleşmiştir. III doğrudur.
Sık yapılan hata: "Ağaç artık mantara dayanıklı, demek ki kalemin genleri değişti." demek. Dayanıklı olan, kalemin değil anacın kökleridir.
Cevap D.`
},
{
  id: "fen-bt-303",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Şeker hastalığının bir türünde vücut yeterince insülin hormonu üretemez ve hastanın dışarıdan insülin alması gerekir. Tabloda, ilaç olarak kullanılan insülinin üretiminde geçmişte ve günümüzde kullanılan iki yöntem karşılaştırılmıştır.
**Tablodaki bilgilere göre günümüzde kullanılan yöntemle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Geçmişteki yöntem</th><th>Günümüzdeki yöntem</th></tr><tr><td>Kaynak</td><td>Kesilen hayvanların pankreası</td><td>İnsan insülin geni aktarılmış bakteriler</td></tr><tr><td>Üretim miktarı</td><td>Kesilen hayvan sayısıyla sınırlı</td><td>Bakteriler çoğaltıldıkça artırılabilir</td></tr><tr><td>Elde edilen insülin</td><td>İnsan insülininden bir ya da birkaç yapı taşı farklı</td><td>İnsan insülininin aynısı</td></tr></table>`,
  secenekler: [
    "Elde edilen insülin, insan vücudundaki insülinle tamamen aynı yapıdadır.",
    "Üretimi artırmak için kesilen hayvan sayısının da artırılması gerekir.",
    "Bakteriler insülinli ortamda beslendiği için insülin üretmeyi öğrenmiştir.",
    "Hastanın hücrelerindeki bozuk gen onarılarak insülin ürettirilir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "İki yöntemi karıştırma: hayvan sayısıyla sınırlı olan geçmişteki yöntemdir; günümüzde üretim bakteriler çoğaltılarak artırılır.",
    "Kalıtsal özelliği beslenmeyle kazanılmış sanma: bakteriler insülin üretme özelliğini kendilerine aktarılan insan geniyle kazanmıştır.",
    "Gen aktarımını gen tedavisiyle karıştırma: tabloda hastanın hücrelerine dokunulmaz; gen bakteriye aktarılır ve ilaç bakteriye ürettirilir."
  ],
  aciklama: `Gen aktarımı, bir canlının geninin başka bir canlıya aktarılmasıdır. Aktarılan gen, yeni canlıda da kendi ürününü yaptırır.
Adım 1: Tabloya göre günümüzde insülin, insan insülin geni aktarılmış bakterilerle üretilmektedir. Bakteri, aldığı insan genindeki bilgiye göre insülin yapar.
Adım 2: Tablonun son satırı bu insülinin "insan insülininin aynısı" olduğunu söyler. A şıkkı bu bilgiyle desteklenir.
Adım 3: Hayvan sayısıyla sınırlı olan geçmişteki yöntemdir; günümüzde miktar bakteriler çoğaltılarak artırılır. B yanlıştır.
Adım 4: Bakteriler insülin üretme özelliğini beslenerek değil, kendilerine aktarılan genle kazanmıştır. Hastanın bozuk geninin onarılması ise gen tedavisidir; tabloda böyle bir uygulama yoktur. C ve D yanlıştır.
Sık yapılan hata: Gen aktarımı ile gen tedavisini karıştırmak. Gen aktarımında gen başka bir canlıya eklenir; gen tedavisinde hastanın kendi hücrelerindeki bozuk genin işlevi düzeltilir.
Cevap A.`
},
{
  id: "fen-bt-304",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiftlik sahibi, süt verimi çok yüksek olan tek bir inekten klonlama yoluyla 40 buzağı elde etmiş ve sürüsünü yalnızca bu buzağılardan oluşturmuştur. Birkaç yıl sonra bölgede, bu ineğin dayanıksız olduğu bir sığır hastalığı yayılmaya başlamıştır. Komşu çiftlikteki sürü ise farklı ineklerin çiftleşmesiyle doğan hayvanlardan oluşmaktadır.
Buna göre;
I. Klon ineklerin süt verimi, beslenme ve bakım koşullarından etkilenmez.
II. Klon sürüdeki ineklerin bu hastalığa karşı dayanıklılıkları birbirine benzer.
III. Klon sürüde kalıtsal çeşitliliğin az olması, hastalığın bütün sürüye yayılma riskini artırır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: bütün inekler kalıtsal olarak aynı olduğu için hastalığa karşı dayanıksızlık da hepsinde ortaktır; çeşitliliğin azlığı riski artırır.",
    "Klonların çevreden etkilenmediğini sanma: süt verimi genlerin yanında beslenme ve bakımdan da etkilenir. Ayrıca II doğrudur.",
    null,
    "Kalıtsal aynılığı her özelliğin aynı olması sanma: klon inekler de farklı koşullarda farklı miktarda süt verebilir; I yanlıştır."
  ],
  aciklama: `Klonlama, bir bireyle kalıtsal olarak özdeş (aynı) bireyler elde etme yöntemidir.
Adım 1 (I): Klon ineklerin genleri aynıdır, ancak süt verimi yalnızca genlere bağlı değildir. Çevre koşullarının etkisiyle oluşan, kalıtsal olmayan değişikliklere modifikasyon dendiğini hatırla. Kötü beslenen bir klon inek daha az süt verebilir. I yanlıştır.
Adım 2 (II): Hastalığa dayanıklılık kalıtsal bir özelliktir. Kalıtsal olarak aynı olan inekler bu bakımdan birbirine benzer. II doğrudur.
Adım 3 (III): İnekler, bu hastalığa dayanıksız olan tek bir ineğin kopyasıdır; sürüde hastalığa dayanıklı genler taşıyan başka bir birey yoktur. Hastalık bir ineğe bulaşırsa diğerleri de aynı ölçüde savunmasızdır. Komşu sürüde ise bireyler farklı gen birleşimleri taşıdığı için bazıları dayanıklı olabilir. III doğrudur.
Sık yapılan hata: Kalıtsal olarak aynı olmayı "her koşulda aynı olmak" sanmak. Aynı genler, farklı ortamlarda farklı sonuç verebilir.
Cevap C.`
},
{
  id: "fen-bt-305",
  kazanim: "F.8.2.5.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun bilim şenliğinde öğrenciler, "2050 yılında tarım ve hayvancılık" konulu bir pano hazırlamıştır. Herkes, gelecekte yapılabileceğini düşündüğü bir uygulamayı bir karta yazıp panoya asmıştır. Öğretmenleri, her tahminin yanına dayandığı biyoteknoloji yöntemini de yazmalarını istemiştir. Panoyu düzenleyen öğrenci ise gen aktarımına dayanan tahminleri kırmızı kartlara yazmaya karar vermiştir.
**Buna göre aşağıdaki tahminlerden hangisi kırmızı karta yazılmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Tuzlu topraklarda yaşayabilen bir bitkiden alınan tuza dayanıklılık geni, pirinç bitkisine eklenecek.",
    "En çok tane veren buğdaylar seçilip kuşaklar boyunca çaprazlanarak bu özelliği sağlayan genler tek çeşitte toplanacak.",
    "Soğuğa dayanıklılık genleri taşıyan bir anacın gövdesine, lezzetli bir portakal çeşidinin dalı eklenecek.",
    "Çok yün veren bir koyunun vücut hücresinden, onunla aynı genleri taşıyan bir kopyası elde edilecek."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Islahı gen aktarımı sanma: seçilen buğdaylar birbiriyle çaprazlanır; genler aynı türün bireyleri arasında çiftleşmeyle birleşir, bitkiye başka bir canlıdan gen eklenmez.",
    "Aşılamayı gen aktarımı sanma: anacın dayanıklılık genleri dala geçmez; portakala bir gen değil, başka bir bitkinin gövdesi üzerinde büyüyecek bir dal eklenir.",
    "Klonlamayı gen aktarımı sanma: vücut hücresinden kopya elde etmek klonlamadır; yeni koyun kendi genlerinin aynısını taşır, ona başka bir canlıdan gen eklenmez."
  ],
  aciklama: `Gen aktarımı, bir canlının geninin başka bir canlıya aktarılarak ona yeni bir özellik kazandırılmasıdır.
Adım 1: Dört tahminde de "gen" sözcüğü geçiyor. Bu yüzden sözcüğe değil, yapılan işe bak ve şunu sor: Bir canlıya, başka bir canlıdan alınan bir gen ekleniyor mu?
Adım 2: A'da tuzlu toprakta yaşayabilen bir bitkiden alınan gen pirince ekleniyor. Pirinç, kendisinde olmayan bir özelliği başka bir canlının geniyle kazanacak. Bu, gen aktarımıdır.
Adım 3: B'de buğdaylar seçilip çaprazlanıyor; genler aynı türün bireyleri arasında çiftleşmeyle bir araya geliyor. Bu ıslahtır. C'de anacın genleri dala geçmez, anaç dala yalnızca su ve besin taşır; bu aşılamadır. D'de koyunun kendi genlerini taşıyan kopyası elde ediliyor; bu klonlamadır. Bu üç tahminde hiçbir canlıya başka bir canlıdan gen eklenmiyor.
Sık yapılan hata: İçinde "gen" sözcüğü geçen her tahmini gen aktarımı saymak. Islah, aşılama ve klonlama da genlerle ilgilidir; belirleyici olan, bir canlıya başka bir canlıdan alınan genin eklenmesidir.
Cevap A.`
},
{
  id: "fen-bt-306",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bölgede, bir bakteriden alınan gen aktarılarak zararlı bir böceğe dayanıklı hâle getirilmiş pamuk yetiştirilmesi tartışılmaktadır. Bu konuda iki görüş dile getirilmiştir:
Görüş 1: "Bu pamuk, onu yiyen zararlı böcekleri kendisi etkisiz hâle getirir. Böylece tarlaya daha az böcek ilacı atılır ve verim artar."
Görüş 2: "Bu pamuk yalnızca zararlı böcekleri değil, onunla beslenen zararsız ya da yararlı başka böcekleri de etkileyebilir. Bu da tarladaki doğal dengeyi bozabilir."
Buna göre;
I. İki görüş, aynı uygulamanın farklı yönlerini ele almaktadır.
II. Görüş 2, uygulamanın çevreye olası etkileriyle ilgili bir kaygı taşımaktadır.
III. Görüş 1'i dile getiren kişi, uygulamanın insan sağlığına zararlı olduğunu kabul etmektedir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Görüşe söylemediği bir şeyi yükleme: Görüş 1 uygulamanın yararlarından söz eder; insan sağlığına zarar kabul eden bir ifadesi yoktur. Ayrıca II doğrudur.",
    "I'i yanlış sayma: iki görüş de aynı pamuk uygulamasını konu alır; biri yararlarını, diğeri olası zararlarını anlatır.",
    "III'ü doğru sayma: Görüş 1'de insan sağlığıyla ilgili bir kabul yoktur; bu yargı metinde dayanağı olmayan bir çıkarımdır."
  ],
  aciklama: `Biyoteknoloji uygulamalarının çoğunun hem yararlı hem de zararlı olabilecek yönleri vardır. Bir uygulamayı değerlendirirken iki tarafı da görmek gerekir.
Adım 1 (I): İki görüş de gen aktarılmış aynı pamuğu konu alır. Görüş 1 yararlarını (daha az ilaç, daha çok verim), Görüş 2 olası zararlarını anlatır. I doğrudur.
Adım 2 (II): Görüş 2, pamuğun zararsız ya da yararlı böcekleri de etkilemesinden ve tarladaki doğal dengenin bozulmasından kaygılanır. Bu kaygı doğadaki canlılarla, yani çevreyle ilgilidir. II doğrudur.
Adım 3 (III): Görüş 1'de insan sağlığıyla ilgili hiçbir cümle yoktur. Bu kişinin uygulamayı zararlı bulduğunu söylemek, metinde olmayan bir bilgiyi eklemek olur. III yanlıştır.
Sık yapılan hata: Bir görüşü değerlendirirken kendi bildiklerini ya da tahminlerini metne eklemek. Yargı yalnızca metinde söylenenlere göre doğru ya da yanlış sayılır.
Cevap A.`
},
{
  id: "fen-bt-307",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Deniz, kalıtsal bir bağışıklık hastalığıyla doğmuştur. Hastalığın nedeni, bağışıklık hücrelerinde görev yapan bir proteinin üretimini sağlayan genin bozuk olmasıdır. Doktorlar, Deniz'in kemik iliğinden aldıkları ve kan hücrelerini üreten hücrelere bu genin sağlam bir kopyasını yerleştirmiş, sonra bu hücreleri yeniden Deniz'in vücuduna vermiştir. Bir süre sonra Deniz'in bağışıklık hücreleri eksik proteini üretmeye başlamıştır.
**Buna göre Deniz'e uygulanan yöntemle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Hücrelerine başka bir türün geni eklenerek ona o türe ait yeni bir özellik kazandırılmıştır.",
    "Kalıtsal kopyası olan bir birey elde edilerek hastalıklı hücreleri bu bireyinkilerle değiştirilmiştir.",
    "Eksik protein dışarıdan ilaç olarak verilerek bozuk genin görevi karşılanmaya çalışılmıştır.",
    "Hastalığa yol açan bozuk genin işlevi, aynı genin sağlam bir kopyasıyla düzeltilmeye çalışılmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Gen tedavisini türler arası gen aktarımı sanma: Deniz'e verilen gen başka bir türe değil insana aittir; amaç yeni bir özellik değil, eksik işlevi tamamlamaktır.",
    "Gen tedavisini klonlamayla karıştırma: Deniz'in kopyası üretilmemiştir; kendi hücrelerine sağlam gen yerleştirilmiştir.",
    "Sonucu yöntem sanma: Deniz'e protein verilmemiştir. Hücrelerine genin sağlam kopyası yerleştirilmiş, eksik proteini bu hücreler kendisi üretmeye başlamıştır.",
    null
  ],
  aciklama: `Gen tedavisi, hastalığa yol açan bozuk bir genin sağlamıyla değiştirilmesi ya da işlevinin düzeltilmesidir.
Adım 1: Deniz'in hastalığının nedeni bozuk bir gendir. Bu gen bir proteinin üretimini sağlar; gen bozuk olduğu için protein üretilemez.
Adım 2: Doktorlar Deniz'in kendi hücrelerine aynı genin sağlam kopyasını yerleştirmiştir. Sağlam gen, eksik proteinin üretilmesini sağlamıştır. Bu, gen tedavisidir.
Adım 3: Verilen gen başka bir türe ait değildir (A yanlış). Deniz'in kopyası üretilmemiştir (B yanlış). Deniz'e protein ilaç olarak verilmemiştir; proteini, sağlam gen yerleştirilen hücreler kendisi üretmiştir (C yanlış).
Sık yapılan hata: Gen tedavisini gen aktarımıyla karıştırmak. Gen aktarımında bir canlıya başka bir canlının geni eklenerek yeni özellik kazandırılır; gen tedavisinde hastanın bozuk geninin görevi yerine getirilir.
Cevap D.`
},
{
  id: "fen-bt-308",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Denize dökülen petrol, birçok farklı bileşenden oluşur ve deniz canlılarına zarar verir. Doğada bu bileşenleri parçalayabilen bakteri türleri vardır, ancak her tür yalnızca bazılarını parçalayabilir. Araştırmacılar, R ve S türlerinde parçalama işini sağlayan genleri P türünden bir bakteriye yerleştirerek yeni bir bakteri elde etmiştir. Tabloda, doğal türlerin ve yeni bakterinin petrolün beş bileşenini parçalayıp parçalayamadığı gösterilmiştir (✓: parçalar, –: parçalayamaz).
**Buna göre bu çalışmayla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bileşen</th><th>P türü</th><th>R türü</th><th>S türü</th><th>Yeni bakteri</th></tr><tr><td>1</td><td>✓</td><td>–</td><td>–</td><td>✓</td></tr><tr><td>2</td><td>✓</td><td>–</td><td>✓</td><td>✓</td></tr><tr><td>3</td><td>–</td><td>✓</td><td>–</td><td>✓</td></tr><tr><td>4</td><td>–</td><td>–</td><td>✓</td><td>✓</td></tr><tr><td>5</td><td>–</td><td>–</td><td>–</td><td>–</td></tr></table>`,
  secenekler: [
    "Yöntem ıslahtır; yeni bakteri, P türünün parçalayamadığı bileşenlerden ikisini parçalar.",
    "Yöntem gen aktarımıdır; yeni bakteri, P türünün parçalayamadığı bileşenlerden ikisini parçalar.",
    "Yöntem gen aktarımıdır; yeni bakteri, P türünün parçalayamadığı bileşenlerin üçünü de parçalar.",
    "Yöntem ıslahtır; yeni bakteri, P türünün parçalayamadığı bileşenlerin üçünü de parçalar."
  ],
  dogru: 1,
  hatalar: [
    "Gen aktarımını ıslahla karıştırma: tablo doğru okunmuştur, ancak ıslahta aynı türün bireyleri seçilip çaprazlanır; burada P türüne başka türlerin genleri yerleştirilmiştir.",
    null,
    "Ara sonucu cevap sanma: P türünün parçalayamadığı bileşenler 3, 4 ve 5'tir; ancak tabloya göre yeni bakteri 5. bileşeni parçalayamaz; bu bileşeni tablodaki türlerin hiçbiri parçalayamadığı için ona böyle bir gen aktarılmamıştır.",
    "Hem yöntemi hem tabloyu yanlış değerlendirme: P türüne başka türlerin genleri yerleştirildiği için yöntem gen aktarımıdır; yeni bakteri de 5. bileşeni parçalayamaz."
  ],
  aciklama: `Gen aktarımı, bir canlının geninin başka bir canlıya aktarılarak ona yeni bir özellik kazandırılmasıdır. Aktarılan gen, yeni canlıda da kendi işini yapar.
Adım 1 (Yöntem): R ve S türlerinin genleri P türünden bir bakteriye yerleştirilmiştir. Başka türlerin genleri eklendiği için yöntem gen aktarımıdır; ıslah değildir. Islahta aynı türün bireyleri seçilip çaprazlanır. A ve D elenir.
Adım 2 (Tablo): P türünün parçalayamadığı bileşenler 3, 4 ve 5'tir.
Adım 3: Yeni bakteri 3. bileşeni (R türünden gelen genle) ve 4. bileşeni (S türünden gelen genle) parçalar. 5. bileşeni tablodaki türlerin hiçbiri parçalayamaz; bu yüzden yeni bakteriye bu işi yapan bir gen aktarılmamıştır ve tablo da yeni bakterinin 5. bileşeni parçalayamadığını gösterir. Yeni bakteri P'nin parçalayamadığı üç bileşenden ikisini parçalar.
Sağlama: Yeni bakterinin sütununda 1, 2, 3 ve 4 işaretlidir. Bunlardan 1 ve 2'yi P zaten parçalıyordu; yeni kazanılanlar 3 ve 4'tür, yani iki bileşen.
Sık yapılan hata: P'nin parçalayamadığı bileşenleri sayıp (3 tane) bu sayıyı cevap sanmak. Yeni bakterinin bunlardan hangilerini gerçekten parçaladığına da bakmalısın.
Cevap B.`
},
{
  id: "fen-bt-309",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Pirincin ana besin olduğu bazı bölgelerde, A vitamini eksikliği yüzünden görme sorunları yaşayan çocukların sayısı fazladır. Pirinç tanesinin yenen kısmında, vücudun A vitamini yapmak için kullandığı sarı-turuncu renkli madde üretilmez. Bilim insanları, bu maddenin üretimini sağlayan ve başka canlılardan alınan genleri pirince aktarmıştır. Elde edilen pirincin taneleri, bu madde sayesinde sarı renkli olmuştur.
Buna göre;
I. Yeni pirinç, bu maddeyi üreten pirinç bitkileri seçilip çaprazlanarak geliştirilmiştir.
II. Çalışmanın amacı, pirincin besin değerini artırarak bir sağlık sorununu azaltmaktır.
III. Bu pirinci yiyen kişilerin genleri de değişir ve vücutları bu maddeyi üretmeye başlar.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Genlerin besinle aktarıldığını sanma: besinle alınan genler yiyen kişinin genlerini değiştirmez; III yanlış, II ise doğrudur.",
    "Gen aktarımını ıslahla karıştırma: pirince başka canlıların genleri aktarılmıştır; pirinç bitkileri seçilip çaprazlanmamıştır. I yanlıştır.",
    "III'ü doğru sayma: pirinçteki genler, onu yiyen insanın hücrelerine geçip genlerini değiştirmez."
  ],
  aciklama: `Gen aktarımında bir canlıya, kendisinde bulunmayan bir özelliği kazandıran gen başka bir canlıdan aktarılır.
Adım 1 (I): Metne göre genler başka canlılardan alınıp pirince aktarılmıştır. Pirinç bitkilerinin seçilip çaprazlanması ıslah olurdu; burada ıslah yapılmamıştır. Üstelik pirinç taneleri bu maddeyi üretmediği için seçilecek böyle bir pirinç de yoktur. I yanlıştır.
Adım 2 (II): Çalışma, A vitamini eksikliğinin yol açtığı görme sorunlarını azaltmak için pirincin besin değerini artırmayı amaçlar. II doğrudur.
Adım 3 (III): Yediğimiz besinlerdeki genler sindirilir; bizim genlerimize eklenmez. Pirinç, vücudun A vitamini yapmak için kullandığı maddeyi hazır olarak verir; insanın genleri değişmez. III yanlıştır.
Sık yapılan hata: "Gen aktarılmış besini yiyen kişiye de gen geçer." sanmak. Besinle alınan genler kişinin kalıtsal yapısını değiştirmez.
Cevap A.`
},
{
  id: "fen-bt-310",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Genetik mühendisliği, canlıların genleri üzerinde doğrudan çalışarak onlara yeni özellikler kazandıran ya da bozuk bir genin işlevini düzelten bilim dalıdır. Bir öğrenci, biyoteknoloji uygulamalarını araştırırken aşağıdaki üç örneği not etmiştir.
I. Bir bakteriye, insan büyüme hormonunun üretimini sağlayan genin aktarılması
II. Bir armut çeşidinin dalının, ayva fidanının gövdesine aşılanması
III. Kalıtsal bir kas hastalığı olan kişinin kas hücrelerine, bozuk genin görevini yapacak sağlam bir gen kopyasının verilmesi
**Bu örneklerden hangilerinde genetik mühendisliği yöntemleri kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: sağlam gen kopyasının hücrelere verilmesi gen tedavisidir; gen üzerinde doğrudan çalışıldığı için bu da genetik mühendisliğidir.",
    "I'i gözden kaçırma: bir bakteriye insan geni aktarmak, genler üzerinde doğrudan çalışmaktır; bu da genetik mühendisliğidir.",
    "Aşılamayı genetik mühendisliği sanma: aşılamada genlere dokunulmaz, iki bitkinin parçaları birleştirilir. Ayrıca III de genetik mühendisliği uygulamasıdır.",
    null
  ],
  aciklama: `Biyoteknoloji, canlıları ve canlılardan elde edilen yapıları kullanarak insanlara yararlı ürünler ve yöntemler geliştirir. Genetik mühendisliği ise biyoteknolojinin genlerle doğrudan çalışan koludur.
Adım 1 (I): Bakteriye insan geni aktarılmıştır. Bakterinin genlerine yeni bir gen eklendiği için bu bir genetik mühendisliği uygulamasıdır (gen aktarımı).
Adım 2 (II): Aşılamada armut dalı ayva gövdesiyle kaynaşır, ama iki bitkinin de genleri değişmez. Aşılama bir biyoteknoloji uygulamasıdır; genetik mühendisliği değildir.
Adım 3 (III): Hastanın hücrelerine, bozuk genin görevini yapacak sağlam gen verilmiştir. Bu gen tedavisidir ve genlerle doğrudan çalışır; genetik mühendisliği uygulamasıdır.
Sık yapılan hata: Her biyoteknoloji uygulamasını genetik mühendisliği saymak. Ölçüt, genlerin doğrudan değiştirilip değiştirilmediğidir.
Cevap D.`
},
{
  id: "fen-bt-311",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bazı denizanaları, mor ötesi ışık altında yeşil renkte parlar. Bu özelliği sağlayan gen bir denizanasından alınmış ve bir tütün bitkisine aktarılmıştır. Gen aktarılan bitki, mor ötesi ışık altında yeşil parlamıştır. Araştırmacılar bu bitkinin tohumlarını ekmiş; tohumlardan yetişen yeni bitkiler, mor ötesi ışığa hiç tutulmadan büyütülmüş ve ilk kez bu ışığın altına konulduklarında yeşil parlamıştır.
Buna göre;
I. Aktarılan gen, tütün bitkisinin kendisinde bulunmayan bir özellik kazanmasını sağlamıştır.
II. Aktarılan gen, bitkinin tohumlarıyla yeni bitkilere geçmiştir.
III. Parlama özelliği, bitki mor ötesi ışık altında tutuldukça kazanılan bir özelliktir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: tohumlardan yetişen bitkiler de parladığına göre aktarılan gen tohumlara, yani yeni kuşağa geçmiştir.",
    "I'i gözden kaçırma: tütün bitkisi normalde parlamaz; bu özelliği denizanasından aktarılan gen sayesinde kazanmıştır.",
    null,
    "Kalıtsal özelliği ortamdan kazanılmış sanma: yeni bitkiler mor ötesi ışığa hiç tutulmadan büyütüldüğü hâlde parlamıştır; özellik ışıktan değil genden gelir. III yanlıştır."
  ],
  aciklama: `Gen aktarımı, bir canlının geninin başka bir canlıya aktarılarak ona yeni bir özellik kazandırılmasıdır.
Adım 1 (I): Tütün bitkisi kendiliğinden parlamaz. Denizanasından aktarılan gen sayesinde mor ötesi ışık altında parlama özelliği kazanmıştır. I doğrudur.
Adım 2 (II): Gen aktarılan bitkinin tohumlarından yetişen bitkiler de parlamıştır. Demek ki aktarılan gen tohumlara geçmiş ve yeni kuşakta da iş görmüştür. II doğrudur.
Adım 3 (III): Yeni bitkiler büyürken hiç mor ötesi ışık almamıştır; buna rağmen ilk ışıkta parlamıştır. Özellik ışık altında kazanılmamış, genle birlikte gelmiştir. Işık yalnızca parlamanın görülmesini sağlar. III yanlıştır.
Sık yapılan hata: Bir özelliğin görülmesi için gereken koşulu, özelliğin nedeni sanmak. Işık parlamayı görünür kılar; parlama yeteneğini veren gendir.
Cevap C.`
},
{
  id: "fen-bt-312",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir hayvancılık kooperatifi, her kuşakta sürüdeki en çok süt veren inekleri seçip yalnızca bunları birbiriyle çiftleştirmektedir. Bu süre boyunca ineklerin beslenme ve bakım koşulları bütün kuşaklarda aynı tutulmuştur. Grafikte, sürüdeki ineklerin beş kuşak boyunca ortalama günlük süt verimi gösterilmiştir.
**Grafikteki değişimin nedeni için aşağıdakilerden hangisi en uygun açıklamadır?**`,
  gorsel: `<svg viewBox="0 0 520 300" role="img" aria-label="Beş kuşak boyunca ortalama günlük süt verimi grafiği"><text x="270" y="24" text-anchor="middle" font-size="16" fill="currentColor">Grafik: Ortalama günlük süt verimi</text><line x1="70" y1="250" x2="500" y2="250" stroke="currentColor" stroke-width="2"/><line x1="70" y1="45" x2="70" y2="250" stroke="currentColor" stroke-width="2"/><text x="60" y="255" text-anchor="end" font-size="14" fill="currentColor">0</text><text x="60" y="188" text-anchor="end" font-size="14" fill="currentColor">10</text><text x="60" y="122" text-anchor="end" font-size="14" fill="currentColor">20</text><text x="60" y="55" text-anchor="end" font-size="14" fill="currentColor">30</text><line x1="70" y1="183" x2="500" y2="183" stroke="currentColor" stroke-opacity="0.25"/><line x1="70" y1="117" x2="500" y2="117" stroke="currentColor" stroke-opacity="0.25"/><line x1="70" y1="50" x2="500" y2="50" stroke="currentColor" stroke-opacity="0.25"/><text x="14" y="40" font-size="14" fill="currentColor">Litre</text><rect x="105" y="157" width="50" height="93" fill="var(--vurgu)"/><rect x="185" y="137" width="50" height="113" fill="var(--vurgu)"/><rect x="265" y="123" width="50" height="127" fill="var(--vurgu)"/><rect x="345" y="103" width="50" height="147" fill="var(--vurgu)"/><rect x="425" y="90" width="50" height="160" fill="var(--vurgu)"/><text x="130" y="150" text-anchor="middle" font-size="14" fill="currentColor">14</text><text x="210" y="130" text-anchor="middle" font-size="14" fill="currentColor">17</text><text x="290" y="116" text-anchor="middle" font-size="14" fill="currentColor">19</text><text x="370" y="96" text-anchor="middle" font-size="14" fill="currentColor">22</text><text x="450" y="83" text-anchor="middle" font-size="14" fill="currentColor">24</text><text x="130" y="272" text-anchor="middle" font-size="14" fill="currentColor">1.</text><text x="210" y="272" text-anchor="middle" font-size="14" fill="currentColor">2.</text><text x="290" y="272" text-anchor="middle" font-size="14" fill="currentColor">3.</text><text x="370" y="272" text-anchor="middle" font-size="14" fill="currentColor">4.</text><text x="450" y="272" text-anchor="middle" font-size="14" fill="currentColor">5.</text><text x="290" y="294" text-anchor="middle" font-size="14" fill="currentColor">Kuşak</text></svg>`,
  secenekler: [
    "Her kuşakta ineklere başka türlerden süt verimini artıran genler aktarılmıştır.",
    "Yüksek verimi sağlayan genleri taşıyan inekler seçildikçe bu genler sürüde çoğalmıştır.",
    "Sürü, tek bir ineğin kalıtsal kopyalarından oluşturulduğu için verim giderek artmıştır.",
    "İneklerin iyi bakımla kazandığı yüksek verim, her kuşakta yavrularına aktarılmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Islahı gen aktarımı sanma: metinde ineklere başka türlerden gen aktarıldığına dair bilgi yoktur; yalnızca seçme ve çiftleştirme yapılmıştır.",
    null,
    "Islahı klonlamayla karıştırma: sürü, seçilen ineklerin çiftleştirilmesiyle çoğalmıştır; bir ineğin kopyaları üretilmemiştir. Kopyalardan oluşan sürüde verim kuşaktan kuşağa artmazdı.",
    "Bakımla kazanılan özelliğin kalıtıldığını sanma: bakım koşulları hep aynı tutulmuştur; üstelik bakımla kazanılan özellikler yavrulara geçmez."
  ],
  aciklama: `Islah, istenen özelliği taşıyan bireylerin seçilip çaprazlanmasıyla verimin kuşaklar boyunca artırılmasıdır.
Adım 1: Grafiğe göre ortalama süt verimi 1. kuşakta 14 litreden 5. kuşakta 24 litreye yükselmiştir.
Adım 2: Beslenme ve bakım koşulları aynı tutulduğu için artışı çevre koşulları açıklayamaz. Değişen tek şey, hangi ineklerin çiftleştirildiğidir.
Adım 3: Her kuşakta en çok süt veren inekler seçilmiştir. Bu inekler yüksek verim sağlayan genleri taşıdığı için yavrularına da bu genleri aktarır. Kuşaklar geçtikçe bu genler sürüde çoğalır ve ortalama verim yükselir.
Sağlama: Klonlamada bütün bireyler aynı genleri taşır; verim kuşaktan kuşağa düzenli artmaz. Gen aktarımından ise metinde hiç söz edilmez.
Sık yapılan hata: İyi bakımla artan verimin yavrulara geçtiğini düşünmek. Çevrenin etkisiyle oluşan değişiklikler kalıtsal değildir.
Cevap B.`
},
{
  id: "fen-bt-313",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Selin'in dedesi, yıllar önce bahçesindeki bir erik ağacına üç farklı erik çeşidinden aldığı gözleri aşılamıştır. Her göz ayrı bir dala aşılanmıştır ve bugün bu dallardan biri sarı, biri mor, biri kırmızı erikler vermektedir. Selin, mor erik veren daldan topladığı en iri meyvenin çekirdeğini bir saksıya ekmiştir. Çekirdekten çıkan fidanı büyütüp bahçeye dikmeyi ve yıllar sonra onun meyvelerini toplamayı planlamaktadır.
**Buna göre Selin'in çekirdekten yetiştireceği ağaçla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Çekirdek mor erik dalında oluştuğu için ağaç, mor erik çeşidinin kalıtsal kopyası olur.",
    "Çekirdek üç renk meyve veren bir ağaçtan alındığı için ağaç da üç renk erik verebilir.",
    "Çekirdek tozlaşma ve döllenmeyle oluştuğu için ağacın erikleri mor eriklerden farklı olabilir.",
    "Çekirdeğin oluştuğu dal gövdeden beslendiği için ağaç, gövdenin (anacın) çeşidinden olur."
  ],
  dogru: 2,
  hatalar: [
    "Çekirdeği aşılanan dal gibi düşünme: dal, alındığı çeşidin kalıtsal kopyasıdır; ama çekirdek tozlaşma ve döllenmeyle oluşur, genlerinin bir kısmı polenden gelir. Kopya olması beklenmez.",
    "Aşılamayla oluşan özelliğin çekirdekle aktarıldığını sanma: üç renk, üç ayrı çeşidin gözlerinin aşılanmasıyla oluşmuştur. Çekirdekten yetişen ağaç tek bir bireydir; bütün dalları aynı genleri taşır.",
    null,
    "Anacın genlerinin dala geçtiğini sanma: gövde dala su ve besin taşır, gen taşımaz. Çekirdeğin genleri mor daldaki çiçekten ve o çiçeğe gelen polenden gelir."
  ],
  aciklama: `Aşılamada eklenen göz ya da kalem, alındığı çeşidin genlerini korur. Ama aşılanmış dalda oluşan çekirdek (tohum) başka bir yolla, eşeyli üremeyle oluşur.
Adım 1: Çekirdek, mor erik dalındaki bir çiçeğin tozlaşıp döllenmesiyle oluşmuştur. Tohumdaki genlerin bir kısmı çiçeğin kendisinden, bir kısmı ise polenin geldiği bitkiden gelir. Genler yeni bir biçimde birleşir.
Adım 2: Bu yüzden çekirdekten yetişen ağaç yeni bir gen birleşimi taşır; erikleri mor eriklerden farklı olabilir. Kalıtsal kopya, göz ya da kalem gibi bir bitki parçasıyla çoğaltmada ya da klonlamada elde edilir; tohumla çoğaltmada elde edilmez. A yanlıştır.
Adım 3: Dedenin ağacındaki üç renk, üç ayrı çeşitten alınan gözlerin aşılanmasıyla oluşmuştur. Ağacın üç renk meyve vermesi, aşılamayla sonradan sağlanmış bir durumdur; çekirdekle aktarılmaz. Çekirdekten yetişen ağaç tek bir bireydir ve bütün dalları aynı genleri taşır. B yanlıştır.
Adım 4: Gövde (anaç) dala su ve besin taşır, gen taşımaz. Çekirdeğin genleri gövdeden gelmez. D yanlıştır.
Sık yapılan hata: Aşılanmış daldaki meyvenin çekirdeğini de dal gibi kopya sanmak. Dal, alındığı çeşidin kopyası olarak büyür; çekirdek ise eşeyli üremenin ürünüdür.
Cevap C.`
},
{
  id: "fen-bt-314",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırma ekibi, soya fasulyesinin besin değerini artırmak için bir kuruyemişten aldığı bir geni soyaya aktarmıştır. Ürün satışa sunulmadan önce yapılan testlerde, bu kuruyemişe alerjisi olan kişilerin yeni soyaya da alerjik tepki gösterdiği belirlenmiştir. Bunun üzerine ürünün satışa sunulmasından vazgeçilmiştir. Aynı yıllarda gen aktarılarak geliştirilen başka ürünlerde ise böyle bir tepki görülmemiştir.
Buna göre;
I. Gen aktarılarak elde edilen ürünler, onları yiyen herkeste alerjiye yol açar.
II. Aktarılan gen, alındığı canlının alerji yapan özelliğini yeni ürüne de taşımıştır.
III. Gen aktarılmış ürünlerin kullanıma sunulmadan önce test edilmesi, olası zararları önlemeye yardımcı olur.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: testler sayesinde alerji yapan ürün satışa çıkmadan fark edilmiştir; testin zararı önlediği metinde görülmektedir.",
    "II'yi gözden kaçırma: tepki, o kuruyemişe alerjisi olan kişilerde görülmüştür; bu da alerji yapan özelliğin genle birlikte soyaya geçtiğini gösterir.",
    "Tek örnekten genelleme yapma: tepki yalnızca kuruyemiş alerjisi olanlarda görülmüş, başka gen aktarılmış ürünlerde hiç görülmemiştir; I yanlıştır.",
    null
  ],
  aciklama: `Biyoteknoloji uygulamaları yararlı olabilir, ama beklenmedik zararlar da doğurabilir. Bu yüzden ürünler kullanıma sunulmadan önce denenir.
Adım 1 (I): Alerjik tepkiyi yalnızca o kuruyemişe alerjisi olanlar göstermiştir. Başka gen aktarılmış ürünlerde de tepki görülmemiştir. "Herkeste" ve "bütün ürünlerde" demek, tek bir örnekten aşırı genelleme yapmaktır. I yanlıştır.
Adım 2 (II): Soyaya kuruyemişten alınan gen aktarılmıştır ve kuruyemişe alerjisi olanlar yeni soyaya da tepki vermiştir. Gen, alındığı canlıdaki alerji yapan özelliği soyaya taşımıştır. II doğrudur.
Adım 3 (III): Sorun satıştan önce yapılan testlerde fark edilmiş ve ürün satışa çıkmamıştır. Test, olası bir zararı önlemiştir. III doğrudur.
Sık yapılan hata: Bir örnekte görülen zararı, o yöntemle yapılan bütün uygulamalara genellemek. Her ürün ayrı ayrı değerlendirilmelidir.
Cevap D.`
},
{
  id: "fen-bt-315",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir at yetiştiricisi, yarışlarda çok başarılı olan bir atın özelliklerini gelecek kuşaklarda da görmek istemektedir. Yetiştiricinin önünde iki yol vardır:
1. yol: Bu atın vücut hücresinden klonlama yöntemiyle yeni bir at elde etmek
2. yol: Bu atı yarışlarda başarılı başka bir atla çiftleştirmek ve doğan taylar arasından en hızlılarını seçip çiftleştirmeyi kuşaklar boyunca sürdürmek
**Bu iki yolla elde edilecek atlar karşılaştırıldığında aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "1. yolla elde edilen atta yeni gen birleşimleri oluşur; 2. yolda ise doğan taylar ebeveynlerinin aynısıdır.",
    "1. yolla elde edilen at, hücresi alınan atla kalıtsal olarak aynıdır; 2. yolda ise yeni gen birleşimleri oluşur.",
    "İki yolda da atlara başka bir türün genleri aktarıldığı için yeni özellikler kazandırılmış olur.",
    "İki yolda da elde edilen atların kalıtsal özellikleri, başarılı atınkilerle birebir aynı olur."
  ],
  dogru: 1,
  hatalar: [
    "İki yöntemi ters eşleştirme: klonlamada yeni gen birleşimi oluşmaz, bir bireyin kopyası elde edilir; çiftleştirmede ise yavrular iki ebeveynden gen alır ve farklı birleşimler oluşur.",
    null,
    "Klonlamayı ve ıslahı gen aktarımı sanma: iki yolda da başka bir türden gen alınmaz; atın kendi genleri kopyalanır ya da çiftleştirmeyle yeniden birleşir.",
    "Çiftleştirmeyi kopyalama sanma: 2. yolda taylar genlerin yarısını başka bir attan alır; bu yüzden başarılı atın aynısı olmazlar."
  ],
  aciklama: `Klonlama, bir bireyle kalıtsal olarak aynı birey elde etme yöntemidir. Islah ise istenen özellikteki bireylerin seçilip çiftleştirilmesiyle kuşaklar boyunca yapılır.
Adım 1 (1. yol): Klonlamada yeni at, tek bir atın vücut hücresinden elde edilir. Genlerin hepsi o attan gelir; yeni at onunla kalıtsal olarak aynıdır.
Adım 2 (2. yol): Çiftleştirmede tay, genlerinin bir kısmını bir ebeveynden, bir kısmını öteki ebeveynden alır. Böylece yeni gen birleşimleri oluşur. Yetiştirici bu yavrular arasından en hızlıları seçer; bu da ıslahtır.
Adım 3: İki yolda da başka bir türden gen alınmaz; bu yüzden gen aktarımı yoktur.
Sık yapılan hata: Islahla elde edilen yavruların ebeveynlerin aynısı olduğunu sanmak. Aynı birey yalnızca klonlamayla elde edilir.
Cevap B.`
},
{
  id: "fen-bt-316",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ülkede, yetişkin boyuna normalden çok daha kısa sürede ulaşan bir somon balığı geliştirilmiştir. Bunun için başka bir balık türünden alınan ve büyümeyi hızlandıran bir gen somonlara aktarılmıştır. Yetiştiriciler, bu balıkların aynı sürede daha fazla besin sağlayacağını ve denizdeki balıklar üzerindeki av baskısını azaltabileceğini söylemektedir. Çevre bilimciler ise bu balıklar kafeslerden kaçıp doğadaki somonlarla çiftleşirse aktarılan genin doğal somon topluluklarına geçebileceği kaygısını dile getirmiştir. Bu kaygı üzerine balıkların, üreyemeyen (kısır) dişi bireyler olarak ve karadaki kapalı havuzlarda yetiştirilmesine karar verilmiştir.
Buna göre;
I. Somonlara uygulanan yöntem gen aktarımıdır.
II. Bu balıklar doğaya karışırsa doğal somon toplulukları yok olur.
III. Kısır bireylerin kapalı havuzlarda yetiştirilmesi, genin doğal topluluklara geçme riskini azaltmaya yöneliktir.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: kısır balıklar yavru veremez, kapalı havuzdan da doğaya kaçamaz; bu önlemler genin doğaya geçme riskini azaltmak için alınmıştır.",
    "Kaygıyı kesin sonuç sanma: çevre bilimciler genin doğal topluluklara geçebileceğinden kaygılanmıştır; toplulukların yok olacağına dair metinde bir bilgi yoktur.",
    null,
    "Olasılığı kesinlik gibi okuma: II metinde kanıtlanmış bir sonuç olarak geçmez; 'yok olur' demek için veri yoktur."
  ],
  aciklama: `"Kesinlikle doğrudur" diye sorulan yargılar, yalnızca metindeki bilgilerle kanıtlanabilen yargılardır. Olabilecek ama kanıtlanmamış bir sonuç kesin sayılmaz.
Adım 1 (I): Somonlara başka bir balık türünden alınan gen aktarılmıştır. Bir canlının geninin başka bir canlıya aktarılması gen aktarımıdır. I kesinlikle doğrudur.
Adım 2 (II): Çevre bilimciler yalnızca genin doğal topluluklara "geçebileceği" kaygısını belirtmiştir. Doğal somonların yok olacağına dair bir veri yoktur. II kesin değildir.
Adım 3 (III): Kısır balıklar çiftleşse bile yavru oluşmaz; kapalı havuzdaki balıklar da denize kaçamaz. İki önlem de metindeki kaygıya, yani genin doğaya geçmesine karşı alınmıştır. III kesinlikle doğrudur.
Sık yapılan hata: Bir kaygıyı ya da olasılığı gerçekleşmiş bir sonuç gibi okumak. "Geçebilir" ile "yok olur" aynı şey değildir.
Cevap C.`
},
{
  id: "fen-bt-317",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, gen tedavisiyle ilgili iki kaynaktan şu bilgileri not etmiştir:
Kaynak 1: "Kalıtsal bir göz hastalığında, gözün ağ tabakasındaki bazı hücreler bozuk bir gen yüzünden görevini yapamaz. Hastaların bu hücrelerine genin sağlam bir kopyası verilmiş ve birçok hastanın görmesi iyileşmiştir."
Kaynak 2: "Günümüzde onaylanmış gen tedavilerinde değişiklik, yalnızca tedavi edilen vücut hücrelerinde yapılır. Yumurta ve sperm gibi üreme hücrelerinin genlerine dokunulmaz."
**Bu iki kaynağa göre, göz hastalığı gen tedavisiyle iyileşmiş bir kişinin ileride doğacak çocuklarıyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kişinin üreme hücreleri bozuk geni taşımayı sürdürdüğü için çocuklar bu geni alabilir.",
    "Tedavi edilen göz hücrelerindeki sağlam gen, kişinin çocuklarına da geçebilir.",
    "Tedavi, kişinin üreme hücrelerindeki bozuk genleri de sağlamlarıyla değiştirmiştir.",
    "Kişinin çocuklarının hepsi bu göz hastalığıyla doğacak ve aynı tedaviye ihtiyaç duyacaktır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Vücut hücresindeki değişikliğin yavruya geçtiğini sanma: çocuklara genler göz hücrelerinden değil üreme hücrelerinden geçer; sağlam gen yalnızca göz hücrelerine verilmiştir, üreme hücrelerindeki bozuk gen değişmemiştir.",
    "Kaynak 2'yi gözden kaçırma: kaynakta üreme hücrelerinin genlerine dokunulmadığı açıkça yazmaktadır.",
    "Olasılığı kesinliğe çevirme: çocukların bozuk geni alması mümkündür, ancak hepsinin hasta doğacağını söylemek için kaynaklarda bilgi yoktur."
  ],
  aciklama: `Gen tedavisi, hastalığa yol açan bozuk bir genin sağlamıyla değiştirilmesi ya da işlevinin düzeltilmesidir. Genler yavrulara yalnızca üreme hücreleriyle (yumurta ve sperm) aktarılır.
Adım 1 (Kaynak 1): Tedavide sağlam gen, gözün ağ tabakasındaki vücut hücrelerine verilmiştir. Görme bu yüzden iyileşmiştir.
Adım 2 (Kaynak 2): Üreme hücrelerinin genlerine dokunulmaz. Demek ki kişinin yumurta ya da sperm hücreleri hâlâ bozuk geni taşır.
Adım 3: Çocuklar genleri anne ve babanın üreme hücrelerinden alır. Bu kişinin üreme hücrelerinde bozuk gen bulunduğu için çocuklar bu geni alabilir. Göz hücrelerine verilen sağlam gen ise çocuklara geçemez, çünkü göz hücreleri üreme hücresi değildir.
Adım 4: "Hepsi hasta doğar" demek aşırıdır; çocuğun hasta olup olmaması öteki ebeveynden aldığı gene de bağlıdır ve kaynaklarda bu konuda bilgi yoktur.
Sık yapılan hata: Vücut hücresinde yapılan bir değişikliğin çocuklara da geçeceğini sanmak. Mutasyonda olduğu gibi, yalnızca üreme hücrelerindeki değişiklikler kalıtılır.
Cevap A.`
},
{
  id: "fen-bt-318",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bilim kurulu, kendisine sunulan biyoteknoloji projelerini üç ölçüte göre değerlendirmekte ve yalnızca üç ölçütün hepsini karşılayan projeyi desteklemektedir:
Ölçüt 1: Proje, insan sağlığına ya da çevreye bir yarar sağlamalıdır.
Ölçüt 2: Genleri değiştirilen bir canlı varsa bu canlının genleri doğadaki canlılara geçme riski olmamalıdır.
Ölçüt 3: Proje doğaya canlı dikmeyi ya da bırakmayı içeriyorsa bu canlılar, kalıtsal olarak birbirinden farklı bireylerden oluşmalıdır.
Tabloda kurula sunulan dört proje verilmiştir.
**Buna göre kurulun desteklediği proje hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Proje</th><th>Uygulama</th><th>Ayrıntı</th></tr><tr><td>K</td><td>Kuraklığa dayanıklılık geni aktarılmış buğday</td><td>Açık tarlalarda, buğdayla çiftleşebilen yabani akraba bitkilerin yakınında yetiştirilecek; kurak bölgelerde verimi artıracak.</td></tr><tr><td>L</td><td>Parlak renk geni aktarılmış süs balığı</td><td>Kapalı akvaryumlarda yetiştirilip satılacak; balıklar daha çekici görünecek.</td></tr><tr><td>M</td><td>İnsan geni aktarılmış bakteriyle ilaç üretimi</td><td>Bakteriler kapalı üretim tanklarında çoğaltılacak; ilaç daha ucuza üretilecek.</td></tr><tr><td>N</td><td>Çam fidanlarıyla orman yenileme</td><td>Yanan ormanın yerine, hepsi aynı genleri taşıyan binlerce çam fidanı dikilecek; toprak kaybı önlenecek.</td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 2,
  hatalar: [
    "Ölçüt 2'yi atlama: K projesinin yararı vardır, ancak buğday yabani akrabalarının yakınında açık tarlada yetiştirilecektir; aktarılan gen polenle bu bitkilere geçebilir.",
    "Ölçüt 1'i atlama: L projesi kapalı ortamdadır, ancak yalnızca balıkların görünüşünü değiştirir; insan sağlığına ya da çevreye bir yararı yoktur.",
    null,
    "Ölçüt 3'ü atlama: N projesinin çevreye yararı vardır ve genleri değiştirilen bir canlı yoktur; ancak doğaya dikilecek fidanların hepsi aynı genleri taşır. Ölçüt 3 ise bu canlıların kalıtsal olarak birbirinden farklı olmasını ister."
  ],
  aciklama: `Ölçütlü sorularda her projeyi bütün ölçütlerle tek tek karşılaştır; bir ölçütü karşılamayan proje elenir.
Adım 1 (K): Kurak bölgelerde verim artışı bir yarardır (Ölçüt 1 tamam). Ancak buğday, çiftleşebildiği yabani akrabalarının yakınında açıkta yetiştirilecek; aktarılan gen polenle onlara geçebilir. Ölçüt 2 karşılanmaz.
Adım 2 (L): Balık kapalı ortamdadır, ama projenin tek sonucu balığın daha çekici görünmesidir. İnsan sağlığına ya da çevreye yararı yoktur. Ölçüt 1 karşılanmaz.
Adım 3 (M): Ucuz ilaç insan sağlığına yarar (Ölçüt 1). Bakteriler kapalı tanklarda kaldığı için genlerin doğaya geçme riski yoktur (Ölçüt 2). Projede doğaya canlı dikilmez ya da bırakılmaz; bu yüzden Ölçüt 3'e takılmaz. Üç ölçüt de karşılanır.
Adım 4 (N): Toprak kaybını önlemek çevreye yararlıdır ve genleri değiştirilen bir canlı yoktur. Ancak doğaya dikilecek binlerce fidanın hepsi aynı genleri taşır. Ölçüt 3, doğaya dikilen canlıların kalıtsal olarak birbirinden farklı olmasını istediği için karşılanmaz.
Sağlama: K, L ve N en az bir ölçüte takılır; M ise hiçbirine takılmaz.
Sık yapılan hata: Bir projenin yararını görünce öteki ölçütleri denetlemeden onu seçmek. Kurul, üç ölçütün hepsini karşılayan projeyi destekler.
Cevap C.`
},
{
  id: "fen-bt-319",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir dağ keçisi türünün doğada yalnızca birkaç yüz bireyi kalmıştır. Türün azalmasının başlıca nedeni, yaşadığı ormanların kesilerek tarım arazisine dönüştürülmesidir. Bilim insanları, türün son yıllarda ölen 12 bireyinin vücut hücrelerini dondurarak saklamış ve gerekirse bu hücrelerden klonlama yoluyla yeni bireyler elde etmeyi planlamıştır. Bir çevre derneği ise "Klonlama yararlı olabilir ama tek başına yeterli değildir." açıklamasını yapmıştır.
Buna göre;
I. Bu yolla yeni bireyler elde etmek için bir erkek ve bir dişi keçinin çiftleşmesi gerekmez.
II. Yalnızca bu hücrelerden elde edilen klonların taşıdığı gen birleşimleri, saklanan 12 keçininkilerden farklı olmaz.
III. Klonlama, türün yaşam alanının yok olması sorununu tek başına çözemez.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: türün azalma nedeni ormanların yok olmasıdır; klonlama birey sayısını artırsa da ormanları geri getirmez.",
    "II'yi gözden kaçırma: klonlamada yeni gen birleşimi oluşmaz; her klon, hücresi alınan keçinin genlerini aynen taşır.",
    "I'i yanlış sayma: klonlamada yeni birey tek bir bireyin vücut hücresinden elde edilir; erkek ve dişi bireyin çiftleşmesine gerek yoktur.",
    null
  ],
  aciklama: `Klonlama, bir bireyle kalıtsal olarak aynı yeni bireyler elde etme yöntemidir. Nesli tükenmekte olan türler için umut verir, ama sınırları vardır.
Adım 1 (I): Klonlamada yeni birey, tek bir bireyin vücut hücresinden elde edilir. Bunun için bir erkek ve bir dişi keçinin çiftleşmesi gerekmez; zaten hücreleri saklanan keçiler ölmüştür. I kesinlikle doğrudur.
Adım 2 (II): Klonlamada iki bireyin genleri birleşmez; her yeni birey saklanan 12 keçiden birinin kopyasıdır. Yalnızca klonlamayla çoğaltılırsa bu 12 keçide olmayan bir gen birleşimi ortaya çıkmaz. II kesinlikle doğrudur.
Adım 3 (III): Metne göre türün azalmasının başlıca nedeni ormanların kesilmesidir. Klonlama birey sayısını artırabilir, ama bu bireylerin yaşayacağı ormanları geri getirmez. Derneğin "tek başına yeterli değildir" açıklaması da bunu anlatır. III kesinlikle doğrudur.
Sık yapılan hata: Klonlamayı nesli tükenen türler için eksiksiz bir çözüm sanmak. Klonlama kalıtsal çeşitliliği artırmaz ve türün yaşam alanı sorununu çözmez.
Cevap D.`
},
{
  id: "fen-bt-320",
  kazanim: "F.8.2.5.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, gelecekte yapılabilecek üç biyoteknoloji uygulamasını tahmin etmiştir. Her tahminin dayandığı yöntemi ve bu uygulamanın olası bir zararını da tabloya yazmıştır.
**Buna göre tablonun hangi satırlarında hem yöntem hem de olası zarar doğru belirlenmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Satır</th><th>Tahmin</th><th>Yöntem</th><th>Olası zarar</th></tr><tr><td>I</td><td>Kuraklığa dayanıklı bir çöl bitkisinin geni buğdaya eklenecek.</td><td>Islah</td><td>Tohumları pahalı olursa küçük çiftçiler bu buğdaydan yararlanamayabilir.</td></tr><tr><td>II</td><td>Yarışlarda başarılı bir güvercinin vücut hücresinden yeni güvercinler elde edilecek.</td><td>Klonlama</td><td>Güvercinin bir kazada kırılıp eğri kaynamış kanadı, yeni güvercinlerde de doğuştan eğri olacak.</td></tr><tr><td>III</td><td>Kalıtsal bir işitme kaybında, iç kulaktaki duyu hücrelerine işitme için gereken genin çalışan bir hâli yerleştirilecek.</td><td>Gen tedavisi</td><td>Hücrelere verilen gen yanlış bir yere yerleşip başka bir genin çalışmasını bozabilir.</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "Sonradan kazanılan özelliği kalıtsal sanma: II'de yöntem doğru ama zarar yanlıştır; kazada eğri kaynayan kanat genlerden kaynaklanmaz, klonlamayla yeni güvercinlere geçmez. Ayrıca III doğrudur.",
    null,
    "Yalnızca zarar sütununa bakma: I'de zarar olası olsa da yöntem yanlıştır; başka bir türün genini eklemek ıslah değil gen aktarımıdır. II'deki zarar da sonradan kazanılan bir özelliğin kalıtılacağını varsayar.",
    "II'deki zararı doğru sayma: kanattaki eğrilik bir kazayla sonradan oluşmuştur; güvercinin genlerinde bir değişiklik olmadığı için yeni güvercinlerde görülmez."
  ],
  aciklama: `Bu soruda her satırda iki şey denetlenir: yöntem doğru mu, olası zarar o uygulamada gerçekten ortaya çıkabilir mi? İkisinden biri yanlışsa satır elenir.
Adım 1 (I): Çöl bitkisinin geni buğdaya eklenecektir. Başka bir canlının genini eklemek gen aktarımıdır, ıslah değildir. Zarar sütunu olası bir sorunu anlatsa da yöntem yanlıştır; satır elenir.
Adım 2 (II): Bir canlının vücut hücresinden yeni bireyler elde etmek klonlamadır; yöntem doğrudur. Ancak kanattaki eğrilik bir kazayla sonradan oluşmuştur, genlerden kaynaklanmaz. Klonlamada yeni bireye genler aktarılır; kazayla oluşan bir bozukluk aktarılmaz. Zarar yanlıştır; satır elenir.
Adım 3 (III): Hastalığa yol açan genin çalışan hâlini hastanın kendi hücrelerine yerleştirmek gen tedavisidir. Verilen genin yanlış bir yere yerleşip başka bir genin çalışmasını bozması, gen tedavisinde bilinen bir risktir. İki sütun da doğrudur.
Sık yapılan hata: Bir satırın yalnızca bir sütununa bakıp karar vermek. I'deki zarar gerçekçi göründüğü için satır doğru sanılabilir, ama yöntemi yanlıştır.
Cevap B.`
},
{
  id: "fen-bt-321",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bakteriden aktarılan gen sayesinde, mısır köklerini yiyen zararlı bir kurtçuğu öldüren bir mısır çeşidi geliştirilmiştir. Bu mısırın ekildiği X ve Y bölgelerinde, mısırı yediği hâlde ölmeyen dirençli kurtçukların oranı altı yıl boyunca izlenmiştir. X bölgesinde tarlaların hepsine gen aktarılmış mısır ekilmiştir. Y bölgesinde ise tarlaların bir kısmına, dirençli olmayan kurtçukların da yaşayabilmesi için normal mısır ekilmiştir. İki bölgenin iklimi, toprağı ve tarım yöntemleri aynıdır. Sonuçlar grafikte verilmiştir.
Buna göre;
I. İki bölgede de dirençli kurtçuk oranı her yıl aynı miktarda artmıştır.
II. Tarlaların bir kısmına normal mısır ekilmesi, dirençli kurtçuk oranının artışını yavaşlatmıştır.
III. Gen aktarılmış mısırın kurtçuklara karşı sağladığı yarar zamanla azalabilir.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 540 330" role="img" aria-label="X ve Y bölgelerinde altı yıl boyunca dirençli kurtçuk oranı grafiği"><text x="280" y="22" text-anchor="middle" font-size="16" fill="currentColor">Grafik: Dirençli kurtçuk oranı (%)</text><line x1="80" y1="260" x2="500" y2="260" stroke="currentColor" stroke-width="2"/><line x1="80" y1="50" x2="80" y2="260" stroke="currentColor" stroke-width="2"/><text x="70" y="265" text-anchor="end" font-size="14" fill="currentColor">0</text><text x="70" y="215" text-anchor="end" font-size="14" fill="currentColor">10</text><text x="70" y="165" text-anchor="end" font-size="14" fill="currentColor">20</text><text x="70" y="115" text-anchor="end" font-size="14" fill="currentColor">30</text><text x="70" y="65" text-anchor="end" font-size="14" fill="currentColor">40</text><line x1="80" y1="210" x2="500" y2="210" stroke="currentColor" stroke-opacity="0.25"/><line x1="80" y1="160" x2="500" y2="160" stroke="currentColor" stroke-opacity="0.25"/><line x1="80" y1="110" x2="500" y2="110" stroke="currentColor" stroke-opacity="0.25"/><line x1="80" y1="60" x2="500" y2="60" stroke="currentColor" stroke-opacity="0.25"/><polyline points="120,255 190,245 260,225 330,190 400,135 470,60" fill="none" stroke="var(--vurgu)" stroke-width="3"/><polyline points="120,255 190,255 260,250 330,245 400,240 470,235" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/><circle cx="120" cy="255" r="4" fill="var(--vurgu)"/><circle cx="190" cy="245" r="4" fill="var(--vurgu)"/><circle cx="260" cy="225" r="4" fill="var(--vurgu)"/><circle cx="330" cy="190" r="4" fill="var(--vurgu)"/><circle cx="400" cy="135" r="4" fill="var(--vurgu)"/><circle cx="470" cy="60" r="4" fill="var(--vurgu)"/><text x="120" y="243" text-anchor="middle" font-size="14" fill="currentColor">1</text><text x="190" y="235" text-anchor="middle" font-size="14" fill="currentColor">3</text><text x="470" y="50" text-anchor="middle" font-size="14" fill="currentColor">40</text><text x="400" y="125" text-anchor="middle" font-size="14" fill="currentColor">25</text><text x="330" y="180" text-anchor="middle" font-size="14" fill="currentColor">14</text><text x="260" y="215" text-anchor="middle" font-size="14" fill="currentColor">7</text><text x="470" y="228" text-anchor="middle" font-size="14" fill="currentColor">5</text><text x="120" y="280" text-anchor="middle" font-size="14" fill="currentColor">1</text><text x="190" y="280" text-anchor="middle" font-size="14" fill="currentColor">2</text><text x="260" y="280" text-anchor="middle" font-size="14" fill="currentColor">3</text><text x="330" y="280" text-anchor="middle" font-size="14" fill="currentColor">4</text><text x="400" y="280" text-anchor="middle" font-size="14" fill="currentColor">5</text><text x="470" y="280" text-anchor="middle" font-size="14" fill="currentColor">6</text><text x="290" y="300" text-anchor="middle" font-size="14" fill="currentColor">Yıl</text><line x1="120" y1="318" x2="150" y2="318" stroke="var(--vurgu)" stroke-width="3"/><text x="158" y="323" font-size="14" fill="currentColor">X bölgesi</text><line x1="300" y1="318" x2="330" y2="318" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="8 5"/><text x="338" y="323" font-size="14" fill="currentColor">Y bölgesi</text></svg>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: X bölgesinde dirençli kurtçuk oranı %1'den %40'a çıkmıştır; mısırın koruyuculuğunun zamanla azalabileceği grafikte görülür.",
    "Grafiği yanlış okuma: X bölgesinde artış yıldan yıla büyümüştür, Y bölgesinde ise çok küçüktür; artışlar ne yıldan yıla ne de bölgeden bölgeye aynıdır. I yanlıştır.",
    "I'i doğru sayma: artış miktarları yıldan yıla ve bölgeden bölgeye farklıdır. Ayrıca iki bölge arasındaki tek fark normal mısır olduğu için II grafikle desteklenir.",
    null
  ],
  aciklama: `Gen aktarılmış bitkilerin yararı kalıcı olmayabilir: zararlıların içinde bu bitkiye dayanabilen az sayıda birey varsa, zamanla bunlar çoğalabilir.
Adım 1 (I): X bölgesinde oran 1, 3, 7, 14, 25, 40 olarak artmıştır; yıllık artışlar 2, 4, 7, 11, 15'tir, yani her yıl farklıdır. Y bölgesinde oran 6 yılda yalnızca 1'den 5'e çıkmıştır. I yanlıştır.
Adım 2 (II): İki bölgenin iklimi, toprağı ve tarım yöntemleri aynıdır; tek fark Y'de bazı tarlalara normal mısır ekilmesidir. Y'deki artış X'tekinden çok daha yavaştır. Bu farkı açıklayan tek değişken normal mısır ekilmesidir. II doğrudur.
Adım 3 (III): X bölgesinde 6. yılda kurtçukların %40'ı mısırı yiyip yaşayabilmektedir. Mısırın zararlıya karşı sağladığı koruma azalmıştır. III doğrudur.
Sık yapılan hata: Grafikte iki çizginin de yükseldiğini görüp "ikisi de aynı artmış" demek. Artış miktarlarını yıl yıl hesapla.
Cevap D.`
},
{
  id: "fen-bt-322",
  kazanim: "F.8.2.5.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğretmen, üç biyoteknoloji uygulamasını tahtada sembollerle özetlemiştir. Tabloda her sembol, bir özelliği belirleyen bir geni göstermektedir. Aynı sembol aynı geni, farklı semboller farklı genleri gösterir. ★ sembolü, bir bakteriden alınmış bir gendir.
**Buna göre K, L ve M uygulamalarıyla ilgili aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Uygulama</th><th>Başlangıçtaki canlı ya da canlılar</th><th>Elde edilen canlı</th></tr><tr><td>K</td><td>Buğday: ♠ ♣ ✚</td><td>Buğday: ♠ ♣ ✚ ★</td></tr><tr><td>L</td><td>1. koyun: ▲ ● ■<br>2. koyun: △ ○ □</td><td>Kuşaklar boyunca çiftleştirilip seçilerek elde edilen koyun: ▲ ○ ■</td></tr><tr><td>M</td><td>Koyun: ▲ ● ◆</td><td>Yeni koyun: ▲ ● ◆</td></tr></table>`,
  secenekler: [
    "K'de başka bir türün geni aktarılmış, M'de ise tek bir bireyle kalıtsal olarak aynı bir birey elde edilmiştir.",
    "L'de başka bir türün geni aktarılmış, K'de ise iki bireyin genleri çaprazlamayla bir araya getirilmiştir.",
    "M'de iki bireyin genleri yeni bir birleşimde toplanmış, L'de ise bir bireyin kalıtsal kopyası elde edilmiştir.",
    "K'de bir bireyin kalıtsal kopyası elde edilmiş, L'de ise başlangıçta bulunmayan yeni bir gen ortaya çıkmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sembolleri yanlış okuma: L'deki koyunun genlerinin hepsi iki koyundan gelir, yabancı gen yoktur; K'de ise çaprazlama değil, ★ geninin eklenmesi vardır.",
    "M ile L'yi karıştırma: M'de yeni koyun tek bir koyunla aynı genleri taşır; iki bireyin genlerinin birleştiği uygulama L'dir.",
    "K'yi klonlama sanma: K'de elde edilen buğdayda başlangıçta olmayan ★ geni vardır, yani kopya değildir. L'deki ○ geni de 2. koyunda zaten vardır."
  ],
  aciklama: `Sembollü modellerde her uygulamada genlerin nereden geldiğini izle: yeni bir gen eklenmiş mi, iki bireyin genleri karışmış mı, yoksa genler aynen mi kalmış?
Adım 1 (K): Başlangıçtaki buğdayda olmayan ★ geni, elde edilen buğdayda vardır. ★ bir bakteriden alınmıştır. Başka bir türün geni eklendiği için bu gen aktarımıdır.
Adım 2 (L): Elde edilen koyundaki ▲ ve ■ 1. koyundan, ○ ise 2. koyundan gelmiştir. Yeni bir gen yoktur; var olan genler yeni bir birleşimde toplanmıştır. Kuşaklar boyunca seçim yapıldığı için bu ıslahtır.
Adım 3 (M): Yeni koyunun genleri, başlangıçtaki tek koyunun genleriyle tamamen aynıdır. Bu, klonlamanın sonucudur.
Adım 4: A şıkkındaki iki bilgi de tablodan doğrudan okunur. Diğer şıkların her birinde en az bir bilgi tabloyla çelişir.
Sık yapılan hata: L'deki ○ genini "yeni gen" sanmak. Bu gen başlangıçta 2. koyunda zaten vardır; ıslah yeni gen üretmez, var olanları birleştirir.
Cevap A.`
},
{
  id: "fen-bt-323",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 4,
  soru: `Mısır, polenleri rüzgârla taşınarak tozlaşan bir bitkidir. Bir araştırmada, gen aktarılmış bir mısır tarlasının çevresindeki normal mısır tarlalarında, aktarılan geni taşıyan tanelerin oranı ölçülmüştür. Sonuçlar, tarlalar arasındaki uzaklığa göre tabloda verilmiştir.
Organik tarım yapan Ayten Hanım, gen aktarılmış tarlanın yakınında yeni bir mısır tarlası kuracaktır. Ürününde aktarılan geni taşıyan tanelerin oranının binde birin, yani %0,1'in altında kalmasını istemektedir. Tarlası ne kadar uzakta olursa ürününü pazara taşımak da o kadar pahalıya mal olacaktır.
**Buna göre Ayten Hanım tablodaki uzaklıklardan hangisini seçerse hem isteğini karşılar hem de taşıma masrafını en aza indirir?**`,
  gorsel: `<table class="tablo"><tr><th>Gen aktarılmış tarlaya uzaklık (m)</th><th>Aktarılan geni taşıyan tanelerin oranı (%)</th></tr><tr><td>10</td><td>2,5</td></tr><tr><td>50</td><td>0,6</td></tr><tr><td>100</td><td>0,1</td></tr><tr><td>200</td><td>0,03</td></tr><tr><td>400</td><td>0,01</td></tr></table>`,
  secenekler: ["50 m", "100 m", "200 m", "400 m"],
  dogru: 2,
  hatalar: [
    "Binde biri yüzde bir sanma: 50 m'de oran %0,6'dır; bu %1'in altındadır ama istenen sınır %0,1'dir.",
    "Sınırı dahil etme: 100 m'de oran tam %0,1'dir; Ayten Hanım oranın bu değerin altında kalmasını istemektedir.",
    null,
    "İkinci koşulu atlama: 400 m de isteği karşılar, ancak 200 m yeterliyken daha uzağa gitmek taşıma masrafını gereksiz yere artırır."
  ],
  aciklama: `Gen aktarılmış bitkilerin olası zararlarından biri, aktarılan genin polenlerle çevredeki tarlalara geçmesidir. Bu soru, bu riski azaltmak için bir karar vermeyi istiyor.
Adım 1: Koşul 1: oran %0,1'in altında olmalı. Tabloda %0,1'in altında kalan uzaklıklar 200 m (%0,03) ve 400 m'dir (%0,01).
Adım 2: 100 m'de oran tam %0,1'dir. "Altında kalmak" eşitliği kapsamaz; 100 m koşulu sağlamaz.
Adım 3: Koşul 2: taşıma masrafı en az olmalı. Koşulu sağlayan iki uzaklıktan daha yakın olanı 200 m'dir.
Sağlama: 200 m'de oran %0,03'tür; bu %0,1'den küçüktür. Bir önceki uzaklık olan 100 m ise sınırın üstüne çıkar (tam sınırdadır).
Sık yapılan hata: "Binde bir" ile "yüzde bir"i karıştırmak ya da sınır değerin kendisini kabul etmek.
Cevap C.`
},
{
  id: "fen-bt-324",
  kazanim: "F.8.2.5.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir aile, yaşlanan kedileri Pamuk'un vücut hücresinden klonlama yoluyla yeni bir kedi elde ettirmeyi düşünmektedir. Araştırdıklarında işlemin çok pahalı olduğunu öğrenmişlerdir. Ayrıca klonlanan yavruyu karnında taşıması için başka bir dişi kediye ihtiyaç duyulduğunu ve denemelerin büyük bir kısmının yavru doğmadan sona erdiğini öğrenmişlerdir. Ailenin iki çocuğu bu konuda şunları söylemiştir:
Efe: "Yeni kedi, Pamuk'la birlikte yaşadığımız anıları bilmeyecek. Bu yüzden bizim için Pamuk'un yerini tutamaz."
Nil: "Denemelerin çoğu başarısız oluyorsa, yavruyu taşıyan kediler de boş yere zorlanmış olur. Bunu hayvanlar için doğru bulmuyorum."
Buna göre;
I. Efe ile Nil, klonlamaya aynı gerekçeyle karşı çıkmaktadır.
II. Nil'in görüşü, uygulamanın Pamuk dışındaki hayvanlar üzerindeki olası etkisine dayanmaktadır.
III. Ailenin öğrendiklerine göre, klonlama denemesinin başarısız olacağı kesindir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Aynı sonuca varan görüşlerin gerekçesini de aynı sanma: Efe yeni kedinin Pamuk'un yerini tutamayacağını, Nil ise taşıyıcı kedilerin boş yere zorlanacağını öne sürer; gerekçeler farklıdır. Ayrıca II doğrudur.",
    null,
    "Gerekçeleri ayırt etmeme ve olasılığı kesinlik sanma: I'de iki çocuğun gerekçesi farklıdır; III'te ise denemelerin hepsi değil büyük bir kısmı başarısız olduğu için başarısızlık kesin değildir.",
    "Olasılığı kesinlik gibi okuma: denemelerin büyük bir kısmının başarısız olması, her denemenin başarısız olacağı anlamına gelmez; III yanlıştır."
  ],
  aciklama: `Biyoteknoloji uygulamaları tartışılırken insanlar farklı ölçütlere dayanabilir: kimi duygusal nedenlere, kimi maliyete, kimi de hayvanların iyiliğine bakar. Bir görüşün gerekçesini bulmak için "Bu kişi neden böyle düşünüyor?" diye sor.
Adım 1 (I): Efe, yeni kedinin aileyle yaşanan anıları bilmeyeceğini, bu yüzden Pamuk'un yerini tutamayacağını söyler. Nil ise yavruyu taşıyan kedilerin boş yere zorlanmasına itiraz eder. İkisi de klonlamaya sıcak bakmasa da gerekçeleri farklıdır. I yanlıştır.
Adım 2 (II): Nil'in kaygısı, yavruyu karnında taşıyacak kedilerle ilgilidir. Bu kediler Pamuk değildir; yani Nil, uygulamanın başka hayvanlar üzerindeki etkisini düşünmektedir. II doğrudur.
Adım 3 (III): Aile, denemelerin "büyük bir kısmının" başarısız olduğunu öğrenmiştir. Bu, bazı denemelerin başarılı olabileceğini de gösterir. Başarısızlık olası ama kesin değildir. III yanlıştır.
Sık yapılan hata: İki kişi aynı sonuca vardığında gerekçelerinin de aynı olduğunu sanmak. Önce sonuca değil, "çünkü" kısmına bak.
Cevap B.`
},
{
  id: "fen-bt-325",
  kazanim: "F.8.2.5.3",
  kademe: 3,
  zorluk: 4,
  soru: `Tabloda, bir bölgenin buğday tarımını etkileyen bazı verilerin 2000 yılındaki değerleri ve 2050 yılı için tahmin edilen değerleri verilmiştir. Bölgenin tarım müdürlüğü, gelecekte gen aktarımıyla geliştirilecek buğday çeşitleriyle ilgili dört çalışmadan birini destekleyecektir. Müdürlük, desteklenecek çeşidin, tabloya göre 2050'ye kadar büyüyecek sorunların her birine karşı dayanıklı olmasını şart koşmaktadır. Çeşidin bunların dışında başka özellikler de taşıması bir sakınca oluşturmamaktadır.
**Buna göre müdürlüğün şartını karşılayan çalışma aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>2000</th><th>2050 (tahmin)</th></tr><tr><td>Yıllık ortalama yağış (mm)</td><td>600</td><td>420</td></tr><tr><td>Toprağı tuzlanmış tarla oranı (%)</td><td>4</td><td>15</td></tr><tr><td>Yılda don olan gün sayısı</td><td>35</td><td>10</td></tr><tr><td>Pas hastalığı görülen tarla oranı (%)</td><td>20</td><td>6</td></tr></table>`,
  secenekler: [
    "Kuraklığa, tuzlu toprağa ve dona dayanıklı bir buğday çeşidi geliştirilecek.",
    "Kuraklığa, dona ve pas hastalığına dayanıklı bir buğday çeşidi geliştirilecek.",
    "Tuzlu toprağa, dona ve zararlı böceklere dayanıklı bir buğday çeşidi geliştirilecek.",
    "Kuraklığa, pas hastalığına ve zararlı böceklere dayanıklı bir buğday çeşidi geliştirilecek."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Küçülen sorunu büyüyen sorun sanma: don olan gün sayısı ve pas hastalığı görülen tarla oranı azalacaktır. Bu çeşit, %4'ten %15'e çıkacak toprak tuzluluğuna karşı dayanıklı değildir.",
    "Yağıştaki azalmayı sorun olarak görmeme: yağışın 600 mm'den 420 mm'ye düşmesi kuraklık sorununu büyütür. Bu çeşit kuraklığa dayanıklı değildir.",
    "Tablo dışındaki bir özelliğe yönelme: zararlı böceklerle ilgili tabloda veri yoktur, pas hastalığı ise azalacaktır. Bu çeşit, büyüyecek olan toprak tuzluluğuna karşı dayanıklı değildir."
  ],
  aciklama: `Gelecekle ilgili bir biyoteknoloji tahmini, çözmeyi amaçladığı sorunlara uygun olmalıdır. Önce tablodaki her verinin hangi yönde değişeceğine, sonra bu değişimin bir sorunu büyütüp büyütmediğine bak.
Adım 1 (Yağış): 600 mm'den 420 mm'ye düşecek. Su azalacağı için kuraklık sorunu büyür; çeşit kuraklığa dayanıklı olmalıdır.
Adım 2 (Tuzluluk): Toprağı tuzlanmış tarlaların oranı %4'ten %15'e çıkacak. Bu sorun büyür; çeşit tuzlu toprağa dayanıklı olmalıdır.
Adım 3 (Don ve pas hastalığı): Don olan gün sayısı 35'ten 10'a, pas hastalığı görülen tarla oranı %20'den %6'ya inecek. Bu iki sorun küçülür; müdürlüğün şartı bunlar için dayanıklılık istemez. Zararlı böceklerle ilgili tabloda hiç veri yoktur.
Adım 4: Şart, kuraklığa ve tuzlu toprağa dayanıklılığın birlikte bulunmasıdır; fazladan bir özellik sakınca oluşturmaz. İkisini birlikte taşıyan tek çeşit A'dadır. B ve D tuzlu toprağa, C ise kuraklığa dayanıklı değildir.
Sağlama: A'daki dona dayanıklılık şart değildir, ama müdürlük fazladan özelliği sakınca saymadığı için A elenmez.
Sık yapılan hata: Tablodaki her değişimi büyüyen bir sorun sanmak. Don ve hastalık verilerinde sayının azalması sorunun küçüldüğünü, yağışta ise sorunun büyüdüğünü gösterir.
Cevap A.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "fen-bt-001",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 1,
  soru: `**Bir canlıdan alınan bir genin başka bir canlıya aktarılarak ona yeni bir özellik kazandırılmasına ne ad verilir?**`,
  gorsel: null,
  secenekler: ["Islah", "Aşılama", "Gen aktarımı", "Klonlama"],
  dogru: 2,
  hatalar: [
    "Islahı karıştırma: ıslahta istenen özellikteki bireyler seçilip çaprazlanır; başka bir canlıdan gen alınmaz.",
    "Aşılamayı karıştırma: aşılamada bir bitkinin dalı ya da gözü başka bir bitkiye eklenir; gen aktarılmaz.",
    null,
    "Klonlamayı karıştırma: klonlamada bir bireyin kalıtsal kopyası elde edilir; canlıya yeni bir gen eklenmez."
  ],
  aciklama: `Gen aktarımı, bir canlının geninin başka bir canlıya aktarılmasıdır. Aktarılan gen, yeni canlıya kendisinde olmayan bir özellik kazandırır.
Adım 1: Soruda "bir canlıdan alınan gen" ve "başka bir canlıya aktarılması" ifadeleri var. Bu, gen aktarımının tanımıdır.
Adım 2: Islah seçip çaprazlamaya, aşılama bitki parçalarını birleştirmeye, klonlama kopya elde etmeye dayanır. Üçünde de canlıya başka bir canlının geni eklenmez.
Sık yapılan hata: "Yeni özellik kazandırma" ifadesini görünce ıslah demek. Islah da verimi artırır, ama bunu var olan genleri seçip birleştirerek yapar.
Cevap C.`
},
{
  id: "fen-bt-002",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir bahçıvan, lezzetli kirazlar veren bir ağaçtan kestiği bir dal parçasını, kökleri güçlü yabani bir kiraz fidanının gövdesine ekleyip sıkıca bağlamıştır.
**Bahçıvanın yaptığı bu uygulama aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Aşılama", "Klonlama", "Gen tedavisi", "Gen aktarımı"],
  dogru: 0,
  hatalar: [
    null,
    "Aşılamayı klonlamayla karıştırma: klonlamada bir bireyin kalıtsal kopyası olan yeni bir birey elde edilir; burada iki bitkinin parçaları birleştirilmiştir.",
    "Gen tedavisiyle karıştırma: gen tedavisi, hastalığa yol açan bozuk bir genin işlevini düzeltmektir; bu uygulamada genlere dokunulmaz.",
    "Parçayı genle karıştırma: bitkiye bir gen değil, başka bir bitkinin dal parçası eklenmiştir."
  ],
  aciklama: `Aşılama, bir bitkiden alınan göz ya da dal parçasının (kalem), kökleri toprakta olan başka bir bitkiye (anaç) eklenmesidir.
Adım 1: Bahçıvan lezzetli kiraz ağacından bir dal parçası almıştır; bu parça kalemdir.
Adım 2: Kalemi, kökleri güçlü yabani fidanın gövdesine eklemiştir; bu fidan anaçtır. Böylece lezzetli meyve ile güçlü kök tek ağaçta birleşir.
Sık yapılan hata: Aşılamayı gen aktarımı sanmak. Aşılamada bitkinin bir parçası eklenir; genler değişmez.
Cevap A.`
},
{
  id: "fen-bt-003",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 1,
  soru: `1996 yılında doğan Dolly adlı koyun, yetişkin bir koyunun vücut hücresinden klonlama yöntemiyle elde edilmiştir.
**Klonlama yöntemiyle elde edilen bir canlı için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Başka bir türden aktarılmış genler taşır.",
    "İki farklı bireyin genlerinin yeni bir birleşimini taşır.",
    "Hastalığa yol açan bir geni sağlamıyla değiştirilmiştir.",
    "Hücresi alınan bireyle kalıtsal olarak aynıdır."
  ],
  dogru: 3,
  hatalar: [
    "Klonlamayı gen aktarımıyla karıştırma: klonlamada başka bir türden gen alınmaz; bir bireyin genleri aynen kopyalanır.",
    "Klonlamayı çaprazlamayla karıştırma: iki bireyin genlerinin birleşmesi çiftleşmeyle olur; klon tek bir bireyin genlerini taşır.",
    "Klonlamayı gen tedavisiyle karıştırma: bozuk genin sağlamıyla değiştirilmesi gen tedavisidir.",
    null
  ],
  aciklama: `Klonlama, bir bireyle kalıtsal olarak aynı (özdeş) yeni bir birey elde etme yöntemidir.
Adım 1: Dolly, tek bir yetişkin koyunun vücut hücresinden elde edilmiştir. Genlerinin hepsi bu koyundan gelir.
Adım 2: Genler başka bir bireyin genleriyle birleşmediği ve dışarıdan gen eklenmediği için klon, hücresi alınan bireyle kalıtsal olarak aynıdır.
Sık yapılan hata: Klonu, iki ebeveynin karışımı sanmak. Klonda gen birleşimi olmaz; tek bireyin kopyası elde edilir.
Cevap D.`
},
{
  id: "fen-bt-004",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir çiftçi, her yıl tarlasındaki en büyük ve en tatlı kavunların tohumlarını ayırmakta ve ertesi yıl bu tohumları ekmektedir. Bunu yıllarca sürdüren çiftçinin tarlasındaki kavunlar giderek daha büyük ve daha tatlı olmuştur.
**Çiftçinin uyguladığı yöntemle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "İstenen özellikteki bireyler seçilerek ıslah yapılmıştır.",
    "Kavunlara başka bir bitkiden tatlılık geni aktarılmıştır.",
    "Kavunlar iyi sulandığı için kazandıkları tatlılık tohumlara geçmiştir.",
    "Tarladaki kavunlar, tek bir bitkinin klonlanmasıyla elde edilmiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Islahı gen aktarımı sanma: çiftçi yalnızca tohum seçmiştir; kavunlara başka bir bitkinin geni eklenmemiştir.",
    "Çevreyle kazanılan özelliğin kalıtıldığını sanma: sulama gibi koşullarla oluşan değişiklikler tohumla yeni bitkilere geçmez.",
    "Islahı klonlamayla karıştırma: tohumlar çiçeklerin tozlaşmasıyla oluşur; her yeni kavun tek bir bitkinin kopyası değildir."
  ],
  aciklama: `Islah, istenen özellikleri taşıyan bireylerin seçilip çoğaltılmasıyla canlıların verimini ya da niteliğini artırma yöntemidir.
Adım 1: Çiftçi her yıl en büyük ve en tatlı kavunları seçmiştir. Bu kavunlar, büyüklük ve tatlılık sağlayan genleri taşır.
Adım 2: Seçilen kavunların tohumları ekildikçe bu genler tarlada çoğalmış, kavunlar kuşaklar boyunca iyileşmiştir. Bu, ıslahtır.
Sık yapılan hata: Kavunların iyi bakım sayesinde tatlandığını ve bu tatlılığın tohuma geçtiğini düşünmek. Çevreyle kazanılan özellikler kalıtılmaz; kalıtılan, seçilen bitkilerin genleridir.
Cevap A.`
},
{
  id: "fen-bt-005",
  kazanim: "F.8.2.5.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğrenci, biyoteknoloji uygulamalarıyla ilgili üç durumu "yararlı yön" ya da "zararlı yön" olarak sınıflandırmıştır. Öğrencinin sınıflandırması tabloda verilmiştir.
**Buna göre öğrenci hangi durumlarda doğru sınıflandırma yapmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Durum</th><th>Açıklama</th><th>Öğrencinin sınıflandırması</th></tr><tr><td>I</td><td>Gen aktarılmış bir bitkinin polenleriyle, aktarılan genin yabani akraba bitkilere geçmesi</td><td>Yararlı yön</td></tr><tr><td>II</td><td>İnsan geni aktarılmış bakterilerle bol ve ucuz ilaç üretilmesi</td><td>Yararlı yön</td></tr><tr><td>III</td><td>Tek bir hayvanın klonlarından oluşan sürüde kalıtsal çeşitliliğin azalması</td><td>Zararlı yön</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: kalıtsal çeşitliliğin azalması sürüyü hastalıklara karşı savunmasız bırakır; bunu zararlı yön saymak doğrudur.",
    "Genin doğaya yayılmasını yarar sanma: aktarılan genin yabani bitkilere kontrolsüzce geçmesi, doğal türlerin kalıtsal yapısını değiştirebilecek zararlı bir yöndür.",
    "I'i doğru sayma: genin yabani bitkilere geçmesi zararlı bir yöndür. Ayrıca II'deki ilaç üretimi gerçekten yararlı bir yöndür.",
    null
  ],
  aciklama: `Biyoteknoloji uygulamalarının insanlığa yarar sağlayan yönleri olduğu gibi, çevreye ve canlılara zarar verebilecek yönleri de vardır.
Adım 1 (I): Aktarılan genin yabani bitkilere geçmesi, doğadaki türlerin kalıtsal yapısını kontrolsüzce değiştirebilir. Bu zararlı bir yöndür; öğrenci yanlış sınıflandırmıştır.
Adım 2 (II): Bakterilerle bol ve ucuz ilaç üretmek hastalara yarar sağlar. Öğrenci doğru sınıflandırmıştır.
Adım 3 (III): Kalıtsal çeşitliliği az olan bir sürüde bir hastalık bütün hayvanları aynı ölçüde etkileyebilir. Bu zararlı bir yöndür; öğrenci doğru sınıflandırmıştır.
Sık yapılan hata: Genin "yayılmasını" uygulamanın başarısı sanmak. Genin istenmeyen canlılara geçmesi, kontrol edilemeyen bir sonuçtur.
Cevap D.`
},
{
  id: "fen-bt-006",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir hastanın karaciğer hücrelerinde, kanın pıhtılaşmasını sağlayan bir proteinin üretimini yöneten gen bozuktur. Doktorlar, hastanın karaciğer hücrelerine bu genin sağlam bir kopyasını vermeyi planlamaktadır.
**Doktorların planladığı bu uygulamanın amacı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Hastaya başka bir türün özelliklerini kazandırmak",
    "Hastanın kalıtsal olarak aynısı olan bir birey elde etmek",
    "Bozuk genin yol açtığı hastalığı tedavi etmek",
    "Hastanın genleriyle yeni gen birleşimleri oluşturmak"
  ],
  dogru: 2,
  hatalar: [
    "Gen tedavisini türler arası gen aktarımı sanma: hastaya verilecek gen insana aittir; amaç yeni bir tür özelliği değil, bozuk genin görevini yerine getirmektir.",
    "Gen tedavisini klonlamayla karıştırma: uygulamada yeni bir birey elde edilmez, hastanın kendi hücrelerine sağlam gen verilir.",
    null,
    "Gen tedavisini ıslahla karıştırma: yeni gen birleşimleri çaprazlamayla oluşur; burada yalnızca bozuk genin sağlam kopyası verilmektedir."
  ],
  aciklama: `Gen tedavisi, hastalığa yol açan bozuk bir genin sağlamıyla değiştirilmesi ya da işlevinin düzeltilmesidir.
Adım 1: Hastanın karaciğer hücrelerindeki bozuk gen yüzünden pıhtılaşmayı sağlayan protein üretilemez; kan kolay pıhtılaşmaz.
Adım 2: Hücrelere genin sağlam kopyası verilirse protein yeniden üretilebilir ve hastalık tedavi edilebilir. Bu uygulama gen tedavisidir.
Sık yapılan hata: Gen tedavisini "insana başka canlıdan gen aktarmak" sanmak. Verilen gen, bozuk olan insan geninin sağlam hâlidir.
Cevap C.`
},
{
  id: "fen-bt-007",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 2,
  soru: `Biyoteknoloji, canlıları ya da canlılardan elde edilen yapıları kullanarak insanlara yararlı ürünler geliştirir. Genetik mühendisliği ise canlıların genlerini doğrudan değiştirerek onlara yeni özellikler kazandırır.
**Buna göre aşağıdakilerden hangisi genetik mühendisliğinden yararlanan bir biyoteknoloji uygulamasıdır?**`,
  gorsel: null,
  secenekler: [
    "Bir asma dalının, hastalığa dayanıklılık genleri taşıyan başka bir asmanın köküne aşılanması",
    "Kuraklığa dayanıklılık geni aktarılmış mısırın kurak bölgelerde ekilmesi",
    "Çok yumurta verme genlerini taşıyan tavukların seçilip kuşaklar boyunca çiftleştirilmesi",
    "Sütün, eklenen yoğurt bakterileri sayesinde mayalanarak yoğurda dönüşmesi"
  ],
  dogru: 1,
  hatalar: [
    "Aşılamayı genetik mühendisliği sanma: kökün dayanıklılık genleri dala geçmez; aşılamada iki bitkinin parçaları birleşir, ama hiçbirinin genleri değiştirilmez.",
    null,
    "Islahı genetik mühendisliği sanma: ıslahta istenen genleri taşıyan bireyler seçilip çiftleştirilir; genler doğrudan değiştirilmez.",
    "Her biyoteknoloji uygulamasını genetik mühendisliği sanma: yoğurt yapımında bakteriler kullanılır, ama bakterilerin genleri değiştirilmez."
  ],
  aciklama: `Genetik mühendisliği, biyoteknolojinin genlerle doğrudan çalışan koludur. Her genetik mühendisliği uygulaması biyoteknolojidir, ama her biyoteknoloji uygulaması genetik mühendisliği değildir.
Adım 1: Dört şıkta da canlılardan yararlanılır; hepsi biyoteknoloji sayılabilir.
Adım 2: Genlerin doğrudan değiştirildiği tek uygulama B'dir: mısıra kuraklığa dayanıklılık geni aktarılmıştır.
Adım 3: A ve C'de de gen sözcüğü geçer, ama bu uygulamalarda canlıların var olan genlerinden yararlanılır. Aşılamada (A) kökün genleri dala geçmez; ıslahta (C) istenen genleri taşıyan tavuklar seçilip çiftleştirilir. Yoğurt yapımında (D) da bakterilerin genleri değiştirilmez.
Sık yapılan hata: İçinde gen sözcüğü geçen ya da yavaş yavaş verim artıran her uygulamayı genetik mühendisliği sanmak. Islah seçerek çalışır; genetik mühendisliği genin kendisini değiştirir.
Cevap B.`
},
{
  id: "fen-bt-008",
  kazanim: "F.8.2.5.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir bakteriden alınan bir gen patatese aktarılmıştır. Bu gen sayesinde patates bitkisi, yapraklarını yiyen patates böceğini etkisiz hâle getiren bir madde üretmektedir.
Buna göre;
I. Patatese başka bir canlının geni aktarılmıştır.
II. Bu patatesin yetiştirildiği tarlalarda böcek ilacı kullanımı azalabilir.
III. Patatesin kazandığı bu özellik, yetiştiği tarladaki toprağın etkisiyle ortaya çıkmıştır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi gözden kaçırma: bitki zararlı böceği kendisi etkisiz hâle getirdiği için çiftçinin böcek ilacına daha az ihtiyacı olabilir.",
    null,
    "Kalıtsal özelliği çevreye bağlama: özellik topraktan değil, aktarılan genden gelir. Ayrıca II doğrudur.",
    "I'i gözden kaçırma: gen bir bakteriden alınıp patatese aktarılmıştır; bu gen aktarımıdır. III ise yanlıştır."
  ],
  aciklama: `Gen aktarımında bir canlıya başka bir canlının geni aktarılarak ona yeni bir özellik kazandırılır.
Adım 1 (I): Gen bir bakteriden alınıp patatese aktarılmıştır. I doğrudur.
Adım 2 (II): Patates, zararlı böceği kendisi etkisiz hâle getirdiği için tarlaya daha az böcek ilacı atılması gerekebilir. Bu, uygulamanın yararlı bir yönüdür. II doğrudur.
Adım 3 (III): Özellik, bakteriden aktarılan genle kazanılmıştır; toprağın etkisiyle ortaya çıkmamıştır. III yanlıştır.
Sık yapılan hata: Gen aktarılmış bir bitkinin özelliğini çevre koşullarına bağlamak. Bu özellik genden gelir ve bitkinin tohumlarıyla yeni kuşaklara da geçebilir.
Cevap B.`
},
{
  id: "fen-bt-009",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir meyve üreticisinin bahçesinde, meyveleri çok lezzetli olan bir elma ağacı vardır. Üretici bu ağacın tohumlarından 20 fidan yetiştirmiş; fidanlar büyüyünce meyvelerinin çoğunun ekşi ve küçük olduğunu, fidanların meyvelerinin birbirinden de farklı olduğunu görmüştür. Ertesi yıl lezzetli ağaçtan kestiği dal parçalarını başka elma fidanlarının gövdelerine aşılamıştır. Aşılanan dallar, lezzetli ağacınkilerle aynı meyveleri vermiştir.
Buna göre;
I. Aşılanan fidanların kökleri, lezzetli ağacın kök özelliklerini taşır.
II. Tohumdan yetişen fidanlar, eşeyli üreme sonucu ana ağaçtan farklı gen birleşimleri taşıyabilir.
III. Aşılanan dallar, alındıkları ağacın kalıtsal özelliklerini korumuştur.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: aşılanan dallar lezzetli ağacınkilerle aynı meyveleri vermiştir; bu, dalların kalıtsal özelliklerini koruduğunu gösterir.",
    "II'yi gözden kaçırma: tohumdan yetişen fidanların meyveleri hem ana ağaçtan hem de birbirinden farklıdır; bu, farklı gen birleşimlerinin sonucudur.",
    "Kalemle anacı karıştırma: aşılanan ağacın kökleri, dalın eklendiği fidana (anaca) aittir; lezzetli ağaçtan yalnızca dal alınmıştır. I yanlıştır.",
    null
  ],
  aciklama: `Aşılamada kalem (eklenen dal) alındığı bitkinin kalıtsal özelliklerini korur. Kökler ise kalemin eklendiği anaca aittir.
Adım 1 (I): Üretici lezzetli ağaçtan yalnızca dal almıştır. Aşılanan ağaçların kökleri, dalların eklendiği fidanlara aittir. I yanlıştır.
Adım 2 (II): Tohum, eşeyli üremeyle oluşur; yavru bitki genlerini iki ebeveynden alır. Bu yüzden tohumdan yetişen fidanlar ana ağaçtan ve birbirinden farklı gen birleşimleri taşıyabilir. Üreticinin gözlemi de bunu destekler. II doğrudur.
Adım 3 (III): Aşılanan dallar, lezzetli ağacınkilerle aynı meyveleri vermiştir. Dallar alındıkları ağacın kalıtsal özelliklerini korumuştur. III doğrudur.
Sık yapılan hata: Lezzetli bir ağacı tohumuyla çoğaltmanın aynı meyveyi vereceğini sanmak. Özellikleri korumak isteyen üretici aşılamayı seçer.
Cevap D.`
},
{
  id: "fen-bt-010",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir araştırma merkezi, soğuğa dayanıklı bir domates çeşidi elde etmek için iki yöntemi karşılaştırmıştır. İki yöntemle ilgili bilgiler tabloda verilmiştir.
Buna göre;
I. Islahla domatese, soğuk sularda yaşayan bir balığın geni kazandırılabilir.
II. Gen aktarımı, ıslahtan her zaman daha güvenlidir.
III. Hedeflenen özelliğe ulaşma süresi gen aktarımında daha kısadır.
**yargılarından hangileri tablodaki bilgilerle desteklenir?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Islah</th><th>Gen aktarımı</th></tr><tr><td>Kullanılabilecek genlerin kaynağı</td><td>Domates ve domatesle çiftleşebilen akraba bitkiler</td><td>Herhangi bir canlı (ör. soğuk sularda yaşayan bir balık)</td></tr><tr><td>Yeni çeşidi elde etme süresi</td><td>Yaklaşık 10-12 yıl</td><td>Yaklaşık 3-4 yıl</td></tr><tr><td>Kullanıma sunulmadan önce</td><td>Kısa süreli denemeler yapılır</td><td>Uzun süreli güvenlik testleri gerekir</td></tr></table>`,
  secenekler: ["Yalnız III", "I ve II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "İki yöntemi karıştırma: balık gibi herhangi bir canlının genini kullanabilen yöntem gen aktarımıdır; ayrıca tabloda hangi yöntemin daha güvenli olduğuna dair bilgi yoktur.",
    "I'i doğru sayma: tabloya göre ıslahta yalnızca domates ve onunla çiftleşebilen akraba bitkilerin genleri kullanılabilir; balık geni tabloda gen aktarımı sütununda yer alır.",
    "Tabloda olmayan bir yargıyı kabul etme: gen aktarımında uzun güvenlik testleri gerektiği yazar, ama bu yöntemin daha güvenli olduğu yazmaz."
  ],
  aciklama: `Bu soruda yargıların doğru olup olmadığına değil, tablodaki bilgilerle desteklenip desteklenmediğine bakılır.
Adım 1 (I): Tabloya göre ıslahta yalnızca domates ve onunla çiftleşebilen akraba bitkilerin genleri kullanılabilir. Bir balık domatesle çiftleşemez; tabloda balık geni örneği gen aktarımı sütununda verilmiştir. I desteklenmez.
Adım 2 (II): Tabloda gen aktarımıyla elde edilen ürünlere uzun güvenlik testleri yapıldığı yazar; ama hangi yöntemin daha güvenli olduğu karşılaştırılmaz. "Her zaman daha güvenlidir" yargısı desteklenmez.
Adım 3 (III): Islahla yeni çeşit 10-12 yılda, gen aktarımıyla 3-4 yılda elde edilir. III desteklenir.
Sık yapılan hata: Uzun güvenlik testi yapılmasını "daha güvenli" ya da "daha tehlikeli" diye yorumlamak. Tablo yalnızca test süresinden söz eder.
Cevap A.`
},
{
  id: "fen-bt-011",
  kazanim: "F.8.2.5.3",
  kademe: 0,
  zorluk: 3,
  soru: `Bitkiler büyümek için azota ihtiyaç duyar; çiftçiler bu ihtiyacı çoğunlukla gübreyle karşılar. Fasulye gibi bazı bitkiler ise köklerinde yaşayan bakteriler sayesinde havadaki azottan yararlanır ve daha az gübreye ihtiyaç duyar. Bir araştırma ekibi, fasulyenin bu bakterilerle birlikte yaşamasını sağlayan genleri buğdaya aktarmayı hedeflemektedir.
**Bu çalışma gelecekte başarıya ulaşırsa aşağıdakilerden hangisi beklenir?**`,
  gorsel: null,
  secenekler: [
    "Buğday tanelerinde fasulyenin tadı ve besin öğeleri ortaya çıkar.",
    "Fasulye tarlalarında kullanılan gübre miktarı artabilir.",
    "Buğday tarlalarında kullanılan gübre miktarı azalabilir.",
    "Buğdayın büyümek için azota ihtiyacı tamamen ortadan kalkar."
  ],
  dogru: 2,
  hatalar: [
    "Aktarımı bütün özelliklere genelleme: buğdaya yalnızca bakterilerle birlikte yaşamayı sağlayan genler aktarılacaktır; fasulyenin öteki özellikleri buğdaya geçmez.",
    "İlgisiz bitkiye yönelme: çalışma buğdayı değiştirmeyi amaçlar; fasulyenin gübre ihtiyacıyla ilgili bir değişiklik beklenmez.",
    null,
    "Aşırı genelleme: buğday azottan havadaki kaynak sayesinde yararlanacak, ama azota yine ihtiyaç duyacaktır; bu ihtiyaç ortadan kalkmaz."
  ],
  aciklama: `Gelecekteki bir biyoteknoloji uygulamasıyla ilgili tahmin yaparken, aktarılan genin hangi özelliği kazandıracağına odaklan.
Adım 1: Fasulye, köklerindeki bakteriler sayesinde havadaki azottan yararlanır; bu yüzden daha az gübreye ihtiyaç duyar.
Adım 2: Bu birlikte yaşamayı sağlayan genler buğdaya aktarılırsa buğday da havadaki azottan yararlanabilir.
Adım 3: Buğday azotun bir kısmını havadan sağlayınca çiftçinin buğday tarlasına daha az gübre vermesi yeterli olabilir.
Adım 4: Bitki azota ihtiyaç duymaya devam eder; değişen, azotu nereden aldığıdır. Fasulyenin tadı gibi başka özellikler de buğdaya geçmez.
Sık yapılan hata: Bir genin aktarılmasıyla, genin alındığı canlının bütün özelliklerinin geçeceğini sanmak. Yalnızca aktarılan genin sağladığı özellik kazanılır.
Cevap C.`
},
{
  id: "fen-bt-012",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 3,
  soru: `Güney Afrika'da yetişen bir sikas bitkisi türünün doğada tek bir bireyi bulunmuştur ve bu birey erkektir. Bu türün bugün dünyadaki botanik bahçelerinde bulunan bireylerinin hepsi, o tek bitkinin gövdesinden çıkan filizlerin ayrılıp dikilmesiyle çoğaltılmıştır. Bu türün tohum oluşturabilmesi için erkek bireyin yanında dişi bir bireye de ihtiyaç vardır.
**Buna göre bu türün botanik bahçelerindeki bireyleriyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Farklı gen birleşimleri taşıdıkları için türün kalıtsal çeşitliliğini artırırlar.",
    "Bütün bireyler ana bitkiyle kalıtsal olarak aynı olduğu için hepsi erkektir.",
    "Birbirleriyle tozlaştırılırlarsa bu türün yeni tohumları elde edilebilir.",
    "Gövdelerine başka türlerin genleri aktarıldığı için yeni özellikler kazanmışlardır."
  ],
  dogru: 1,
  hatalar: [
    "Klonun çeşitlilik yarattığını sanma: filizlerden çoğaltılan bireyler ana bitkinin kopyasıdır; yeni gen birleşimi oluşmaz.",
    null,
    "Kopyaların cinsiyetini gözden kaçırma: bütün bireyler erkek bitkinin kopyası olduğu için aralarında dişi yoktur; tohum oluşamaz.",
    "Klonlamayı gen aktarımıyla karıştırma: filizlerden çoğaltmada bitkilere başka bir türün geni eklenmez."
  ],
  aciklama: `Bir bitkinin gövde ya da filiz gibi bir parçasından yeni bitki elde etmek, o bitkinin kalıtsal kopyalarını üretmek demektir. Bu kopyalar klon olarak adlandırılır.
Adım 1: Bahçelerdeki bütün bireyler tek bir bitkinin filizlerinden çoğaltılmıştır. Hepsi o bitkiyle kalıtsal olarak aynıdır.
Adım 2: Ana bitki erkek olduğuna göre kopyaların hepsi de erkektir.
Adım 3: Tohum oluşması için dişi bir bireye de ihtiyaç vardır. Bireylerin hiçbiri dişi olmadığı için birbirleriyle tozlaştırılsalar bile tohum elde edilemez.
Sık yapılan hata: Birey sayısının artmasını kalıtsal çeşitliliğin artması sanmak. Kopyalar ne kadar çok olursa olsun, taşıdıkları genler aynıdır.
Cevap B.`
},
{
  id: "fen-bt-013",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, biyoteknoloji uygulamalarını gruplara ayırmak için şu soruları sırayla kullanmaktadır:
1. soru: Canlının genleri doğrudan değiştiriliyor ya da genlerine yeni bir gen ekleniyor mu? Cevap "evet" ise 2. soruya, "hayır" ise 3. soruya geç.
2. soru: Eklenen gen, canlının kendi türünden başka bir türden mi alınıyor? Cevap "evet" ise P grubu, "hayır" ise R grubu.
3. soru: Tek bir bireyin kalıtsal kopyası mı elde ediliyor? Cevap "evet" ise S grubu, "hayır" ise T grubu.
**Buna göre aşağıdaki uygulama ve grup eşleştirmelerinden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kalıtsal kan hastalığı olan kişiye sağlam insan geni verilmesi – R grubu",
    "Kuraklığa dayanıklı bir çöl bitkisinin geninin buğdaya eklenmesi – R grubu",
    "En çok süt veren ineklerin seçilip kuşaklar boyunca çiftleştirilmesi – S grubu",
    "Bir koyunun vücut hücresinden onun kalıtsal kopyasının elde edilmesi – T grubu"
  ],
  dogru: 0,
  hatalar: [
    null,
    "2. soruyu yanlış cevaplama: gen çöl bitkisinden, yani buğdaydan başka bir türden alınmıştır; bu uygulama P grubuna girer.",
    "3. soruyu yanlış cevaplama: çiftleştirmede yeni gen birleşimleri oluşur, tek bireyin kopyası elde edilmez; bu uygulama T grubuna girer.",
    "3. soruyu yanlış cevaplama: tek bir koyunun kalıtsal kopyası elde edilmiştir; cevap 'evet' olduğu için bu uygulama S grubuna girer."
  ],
  aciklama: `Akış sorularında her uygulamayı adım adım sorulardan geçir ve vardığın grubu şıktaki grupla karşılaştır.
Adım 1 (A, gen tedavisi): Hastanın hücrelerine gen veriliyor; 1. sorunun cevabı "evet". Verilen gen insan genidir, yani hastanın kendi türünden; 2. sorunun cevabı "hayır". Grup R'dir. Eşleştirme doğrudur.
Adım 2 (B, gen aktarımı): Buğdaya gen ekleniyor; 1. soru "evet". Gen çöl bitkisinden, yani başka bir türden; 2. soru "evet". Grup P olmalıdır.
Adım 3 (C, ıslah): Genler doğrudan değiştirilmiyor; 1. soru "hayır". Çiftleştirmeyle kopya değil yeni birleşimler oluşur; 3. soru "hayır". Grup T olmalıdır.
Adım 4 (D, klonlama): Genler değiştirilmiyor; 1. soru "hayır". Tek bir koyunun kalıtsal kopyası elde ediliyor; 3. soru "evet". Grup S olmalıdır.
Sık yapılan hata: Gen tedavisinde verilen geni "başka bir canlıdan gelen gen" sanmak. Gen insana aittir ve insan hücresine verilir; tür değişmez.
Cevap A.`
},
{
  id: "fen-bt-014",
  kazanim: "F.8.2.5.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bazı sivrisinek türleri insanlara hastalık taşır ve bu hastalıkları yalnızca dişi sivrisinekler bulaştırır. Bir araştırmada, hastalık taşıyan bir sivrisinek türünün erkeklerine, yavruların erişkin olmadan ölmesine yol açan bir gen aktarılmıştır. Laboratuvarda üretilen bu erkekler bir bölgede doğaya bırakılmış ve buradaki dişilerle çiftleşmiştir. Bir yıl sonra bölgede bu türe ait sivrisineklerin sayısının belirgin biçimde azaldığı görülmüştür. Bazı çevre bilimciler ise bu sivrisineklerle beslenen canlıların nasıl etkileneceğinin henüz yeterince araştırılmadığını belirtmiştir.
Buna göre;
I. Uygulamanın amacı, hastalık taşıyan sivrisineklerin sayısını azaltarak insan sağlığını korumaktır.
II. Erkeklere aktarılan gen, çiftleşme yoluyla yavrulara geçmiştir.
III. Sivrisinek sayısının azalması, bu sivrisineklerle beslenen canlıları hiç etkilemez.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 3,
  hatalar: [
    "II'yi gözden kaçırma: genin etkisi yavrularda görülür; yavruların ölmesi ve sivrisinek sayısının azalması, genin çiftleşmeyle yavrulara geçtiğini gösterir.",
    "Amacı gözden kaçırma: bu sivrisinekler hastalık taşıdığı için sayılarının azaltılması insan sağlığını korumaya yöneliktir; I doğrudur.",
    "Araştırılmamış bir konuda kesin yargı verme: çevre bilimciler bu etkinin henüz yeterince araştırılmadığını söylemiştir; 'hiç etkilemez' denemez.",
    null
  ],
  aciklama: `Bir biyoteknoloji uygulamasının hem amacını hem de olası sonuçlarını yalnızca metindeki bilgilere göre değerlendir.
Adım 1 (I): Sivrisinekler insanlara hastalık taşır. Sayılarını azaltmaya yönelik bir uygulama, insanları bu hastalıklardan korumayı amaçlar. I kesinlikle doğrudur.
Adım 2 (II): Gen erkeklere aktarılmıştır, ama etkisi yavrularda görülür: yavrular erişkin olmadan ölür. Bölgedeki sivrisinek sayısının azalması, genin çiftleşmeyle yavrulara geçtiğini gösterir. II kesinlikle doğrudur.
Adım 3 (III): Çevre bilimciler, sivrisineklerle beslenen canlıların nasıl etkileneceğinin henüz bilinmediğini söylemiştir. Bilinmeyen bir konuda "hiç etkilemez" denemez. III yanlıştır.
Sık yapılan hata: Uygulamanın yararlı olmasına bakıp olası zararları yok saymak. Besin zincirindeki bir canlının azalması, ona bağlı canlıları etkileyebilir.
Cevap D.`
},
{
  id: "fen-bt-015",
  kazanim: "F.8.2.5.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir araştırmacı, aynı bahçede, aynı yaşta ve aynı bakım koşullarında büyüyen üç elma ağacını incelemiştir. Her ağaç, bir elma çeşidinden alınan dalın (kalem) başka bir elma fidanının gövdesine (anaç) aşılanmasıyla elde edilmiştir. Ağaçlarda kullanılan kalem ve anaç çeşitleri ile yapılan ölçümler tabloda verilmiştir.
**Bu tablodaki bilgilere göre aşağıdakilerden hangisi kesinlikle söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Ağaç</th><th>Kalem</th><th>Anaç</th><th>Ağacın boyu</th><th>Meyve rengi</th></tr><tr><td>1</td><td>X çeşidi</td><td>P anacı</td><td>2,5 m</td><td>Kırmızı</td></tr><tr><td>2</td><td>X çeşidi</td><td>R anacı</td><td>6 m</td><td>Kırmızı</td></tr><tr><td>3</td><td>Y çeşidi</td><td>P anacı</td><td>2,5 m</td><td>Sarı</td></tr></table>`,
  secenekler: [
    "Meyve renginin farklı olmasında anacın etkisi vardır.",
    "Ağacın boyunu, aşılanan kalemin çeşidi belirler.",
    "Ağaç boyunun farklı olmasında anacın etkisi vardır.",
    "Anacın kalıtsal özellikleri kalemin genlerini değiştirmiştir."
  ],
  dogru: 2,
  hatalar: [
    "Boy ile rengi karıştırma: anaçları farklı olan 1. ve 2. ağaçların meyveleri aynı renktedir; renk yalnızca kalemleri farklı olan 1. ve 3. ağaçlarda değişmiştir. Renk farkında anacın etkisini gösteren bir veri yoktur.",
    "Karşılaştırmayı yanlış yapma: 1. ve 3. ağaçların kalemi farklı olduğu hâlde boyları aynıdır; kalemi aynı olan 1. ve 2. ağaçların boyu ise farklıdır.",
    null,
    "Aşılamanın genleri değiştirdiğini sanma: X kalemi iki farklı anaçta da kırmızı meyve vermiştir; kalemin genlerinin değiştiğini gösteren bir veri yoktur."
  ],
  aciklama: `Bir özelliği neyin belirlediğini bulmak için, yalnızca tek bir değişkeni farklı olan ağaçları karşılaştır. Ağaçların yaşı, bahçesi ve bakımı aynı olduğu için bunlar sonucu etkilemez.
Adım 1 (1. ve 2. ağaç): Kalemleri aynı (X), anaçları farklı (P ve R). Boyları farklı (2,5 m ve 6 m), meyve renkleri aynı. Boyu değiştiren şey anaçtır.
Adım 2 (1. ve 3. ağaç): Anaçları aynı (P), kalemleri farklı (X ve Y). Boyları aynı, meyve renkleri farklı. Meyve rengini kalem belirler.
Adım 3: Bu karşılaştırmalar, ağaç boyunun farklı olmasında anacın, meyve renginin farklı olmasında ise kalemin etkisi olduğunu gösterir. Renk farkında anacın etkisini gösteren bir veri yoktur; bu yüzden A söylenemez. C ise kesinlikle söylenebilir.
Sağlama: X kalemi P anacında da R anacında da kırmızı meyve vermiştir. Kalem anaca göre değişmemiş, kendi özelliğini korumuştur.
Sık yapılan hata: Değişkenleri kontrol etmeden iki ağacı karşılaştırmak. 2. ve 3. ağaçta hem kalem hem anaç farklıdır; bu ikisinden bir sonuç çıkarılamaz.
Cevap C.`
}
);
