// Fen Bilimleri — DNA ve Genetik Kod | Kademe 3 (LGS Ayarı, fen-dn-301…312) + Havuz (fen-dn-001…012)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["dna-genetik-kod"] = window.LGS_BANK["dna-genetik-kod"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "fen-dn-301",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir dağ kazasında kaybolan kişinin kimliğinin belirlenmesi için adli tıp laboratuvarına üç örnek gönderilmiştir. Örneklerin alındığı dokular ve incelenen hücreler tabloda verilmiştir. İnceleme sonunda üç örneğin de aynı kişiye ait olduğu belirlenmiştir.
Buna göre;
I. K, L ve M'den elde edilen DNA moleküllerindeki nükleotid dizilimi aynıdır.
II. Hücre tipleri farklı olduğu için bu hücrelerin taşıdığı genler birbirinden farklıdır.
III. Her üç örnekte de DNA molekülleri hücrelerin çekirdeğinde bulunur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Örnek</th><th>Alındığı doku</th><th>İncelenen hücre</th></tr><tr><td>K</td><td>Saç kökü</td><td>Saç kökü hücresi</td></tr><tr><td>L</td><td>Ağız içi</td><td>Epitel hücresi</td></tr><tr><td>M</td><td>Kan</td><td>Akyuvar</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III. yargıyı atlama: DNA'nın çekirdekte bulunması, örneklerin hangi dokudan alındığına bağlı değildir. Üç hücrenin de çekirdeği vardır.",
    "I. yargıyı atlama: aynı kişiye ait olduğu belirlenen örneklerde nükleotid dizilimi de aynıdır; kimlik belirleme zaten buna dayanır.",
    null,
    "II. yargıyı doğru sayma: bir kişinin bütün vücut hücreleri aynı DNA'yı, dolayısıyla aynı genleri taşır. Hücrelerin görevi farklıdır, taşıdıkları genler değil."
  ],
  aciklama: `Bir canlının bütün vücut hücreleri, tek bir hücrenin bölünmeleriyle oluştuğu için aynı DNA'yı taşır. Kimlik belirleme de bu gerçeğe dayanır.
Adım 1: I. yargıyı incele. Üç örnek de aynı kişiye aittir. Aynı kişinin saç kökü hücresi, ağız içi epitel hücresi ve akyuvarındaki DNA'ların nükleotid dizilimi aynıdır. I doğrudur.
Adım 2: II. yargıyı incele. Hücrelerin görevleri farklıdır ama taşıdıkları genler aynıdır. Bir saç kökü hücresi de akyuvar da kişinin bütün genlerini taşır. II yanlıştır.
Adım 3: III. yargıyı incele. Tabloda incelenen üç hücrenin de çekirdeği vardır ve DNA çekirdekte bulunur. III doğrudur.
Adım 4: Doğru yargılar I ve III'tür.
Sağlama: Eğer farklı dokulardan alınan hücrelerin DNA'sı farklı olsaydı, adli tıp bir kişiyi saçından da kanından da aynı sonuçla tanıyamazdı.
Sık yapılan hata: "Hücreler farklı görevler yapıyorsa genleri de farklıdır." demek. Farklı olan, hücrenin yaptığı iş; genler ortaktır.
Cevap C.`
},
{
  id: "fen-dn-302",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `1953 yılında iki araştırmacı, X ışınlarıyla elde edilmiş bir DNA görüntüsünden ve bazların eşleşme kuralından yararlanarak DNA'nın maketini kurmuştur. Aşağıda bu maketin bir bölümünün düzleştirilerek çizilmiş görünümü verilmiştir.
Buna göre bu maketle ilgili;
I. İki zincir, karşılıklı gelen bazların eşleşmesiyle bir arada tutulmaktadır.
II. Bir zincirdeki bazların sırası bilindiğinde karşı zincirdeki bazların sırası bulunabilir.
III. İki zincirdeki bazların sırası birbirinin aynısıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 420 270" role="img" aria-label="DNA maketinin düzleştirilmiş görünümü: iki zincir ve karşılıklı eşleşmiş bazlar"><line x1="70" y1="45" x2="70" y2="250" stroke="currentColor" stroke-width="3"/><line x1="350" y1="45" x2="350" y2="250" stroke="currentColor" stroke-width="3"/><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="70" y1="75" x2="350" y2="75"/><line x1="70" y1="120" x2="350" y2="120"/><line x1="70" y1="165" x2="350" y2="165"/><line x1="70" y1="210" x2="350" y2="210"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"><rect x="113" y="59" width="36" height="32" rx="5"/><rect x="113" y="104" width="36" height="32" rx="5"/><rect x="113" y="149" width="36" height="32" rx="5"/><rect x="113" y="194" width="36" height="32" rx="5"/><rect x="271" y="59" width="36" height="32" rx="5"/><rect x="271" y="104" width="36" height="32" rx="5"/><rect x="271" y="149" width="36" height="32" rx="5"/><rect x="271" y="194" width="36" height="32" rx="5"/></g><g fill="currentColor" font-size="17" font-weight="bold" text-anchor="middle"><text x="131" y="83">A</text><text x="131" y="128">T</text><text x="131" y="173">G</text><text x="131" y="218">C</text><text x="289" y="83">T</text><text x="289" y="128">A</text><text x="289" y="173">C</text><text x="289" y="218">G</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="70" y="32">1. zincir</text><text x="350" y="32">2. zincir</text></g></svg>`,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "III. yargıyı doğru sayma: karşılıklı zincirler birbirinin aynısı değil, birbirini tamamlar. 1. zincirde A varken 2. zincirde T vardır.",
    "Hem I'i atlama hem III'ü doğru sayma: şekilde zincirleri bağlayan çizgiler karşılıklı bazlar arasındadır ve karşılıklı bazlar aynı değil, birbirinin eşidir.",
    "Üç yargıyı da doğru sayma: I ve II doğrudur ama III yanlıştır; iki zincirdeki baz sıraları aynı değil, birbirinin karşılığıdır."
  ],
  aciklama: `DNA iki zincirden oluşur. Zincirler, karşı karşıya gelen bazların birbiriyle eşleşmesiyle bir arada durur: adenin (A) karşısına timin (T), guanin (G) karşısına sitozin (C) gelir.
Adım 1: I. yargıyı incele. Şekilde iki zinciri birbirine bağlayan çizgiler karşılıklı baz kutucukları arasındadır. Zincirleri bir arada tutan, bazların eşleşmesidir. I doğrudur.
Adım 2: II. yargıyı incele. Eşleşme kuralı sabit olduğu için bir zincirdeki sırayı bilmek yeterlidir. 1. zincirdeki A – T – G – C sırasından, 2. zincirin T – A – C – G olacağını bulabilirsin. II doğrudur.
Adım 3: III. yargıyı incele. Şekilde 1. zincirde A, karşısında ise T vardır. Yani sıralar aynı değildir; biri diğerinin karşılığıdır. III yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sağlama: İki zincirdeki bazlar aynı olsaydı A karşısına A gelirdi; bu, eşleşme kuralına aykırıdır.
Sık yapılan hata: "İki zincir birbirinin kopyasıdır." demek. Zincirler birbirinin kopyası değil, tamamlayıcısıdır.
Cevap A.`
},
{
  id: "fen-dn-303",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tarımsal araştırma enstitüsünde, kurağa dayanıklı buğday çeşitlerini ayırt edebilmek için buğday hücreleri büyükten küçüğe doğru adım adım incelenmiştir. Araştırmacıların çizdiği şemada birbirinin içinden çıkan dört yapı K, L, M ve N ile gösterilmiştir. Bu yapılardan biri kromozom, biri DNA, biri gen, biri de nükleotiddir.
**Buna göre K, L, M ve N ile gösterilen yapılar aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 560 250" role="img" aria-label="Kromozomdan nükleotide doğru büyütülerek çizilmiş dört yapı"><path d="M32 42 C 54 80, 54 112, 32 150" fill="none" stroke="currentColor" stroke-width="8"/><path d="M78 42 C 56 80, 56 112, 78 150" fill="none" stroke="currentColor" stroke-width="8"/><text x="55" y="178" fill="currentColor" font-size="17" font-weight="bold" text-anchor="middle">K</text><g stroke="currentColor" stroke-width="2"><line x1="98" y1="96" x2="136" y2="96"/><polygon points="146,96 132,90 132,102" fill="currentColor" stroke="none"/></g><line x1="162" y1="70" x2="382" y2="70" stroke="currentColor" stroke-width="3"/><line x1="162" y1="122" x2="382" y2="122" stroke="currentColor" stroke-width="3"/><g stroke="var(--vurgu2)" stroke-width="2.5"><line x1="182" y1="70" x2="182" y2="122"/><line x1="207" y1="70" x2="207" y2="122"/><line x1="237" y1="70" x2="237" y2="122"/><line x1="262" y1="70" x2="262" y2="122"/><line x1="287" y1="70" x2="287" y2="122"/><line x1="312" y1="70" x2="312" y2="122"/><line x1="342" y1="70" x2="342" y2="122"/><line x1="367" y1="70" x2="367" y2="122"/></g><text x="272" y="152" fill="currentColor" font-size="17" font-weight="bold" text-anchor="middle">L</text><rect x="226" y="56" width="98" height="80" fill="none" stroke="var(--vurgu)" stroke-width="2.5" stroke-dasharray="6 4"/><text x="275" y="46" fill="var(--vurgu)" font-size="17" font-weight="bold" text-anchor="middle">M</text><g stroke="currentColor" stroke-width="2"><line x1="396" y1="96" x2="434" y2="96"/><polygon points="444,96 430,90 430,102" fill="currentColor" stroke="none"/></g><polygon points="500,52 484,80 516,80" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><circle cx="500" cy="100" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="481" y="120" width="38" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="500" y="178" fill="currentColor" font-size="17" font-weight="bold" text-anchor="middle">N</text><g fill="currentColor" font-size="14" text-anchor="start"><text x="524" y="72">fosfat</text><text x="524" y="105">şeker</text><text x="524" y="140">baz</text></g></svg>`,
  secenekler: [
    "K: DNA — L: Kromozom — M: Gen — N: Nükleotid",
    "K: DNA — L: Kromozom — M: Nükleotid — N: Gen",
    "K: Kromozom — L: Gen — M: DNA — N: Nükleotid",
    "K: Kromozom — L: DNA — M: Gen — N: Nükleotid"
  ],
  dogru: 3,
  hatalar: [
    "Kromozom ile DNA'yı ters yerleştirme: kromozom, DNA'nın proteinlerle birlikte sıkıca sarılmasıyla oluşan daha büyük yapıdır. Şemada en büyük yapı K'dir.",
    "Hem kromozom ile DNA'yı hem gen ile nükleotidi ters yerleştirme: gen DNA'nın bir bölümü, nükleotid ise DNA'nın yapı birimidir.",
    "Gen ile DNA'yı ters yerleştirme: gen, DNA'nın tamamı değil, üzerindeki anlamlı bir bölümdür; bu yüzden DNA genden büyüktür.",
    null
  ],
  aciklama: `Bu yapılar büyükten küçüğe şöyle sıralanır: kromozom > DNA > gen > nükleotid.
Adım 1: Şemanın en solundaki K, hücre bölünmesi sırasında görülen X biçimli yapıdır. Bu kromozomdur.
Adım 2: Ok, kromozomun büyütülmüş hâlini gösterir. L, iki zincirli merdiven biçimindeki moleküldür; yani DNA'dır. Kromozom, DNA'nın proteinlerle birlikte sarılmasıyla oluşur.
Adım 3: M, DNA üzerinde kesik çizgiyle çerçevelenmiş bir bölümdür. DNA'nın bir özelliği belirleyen anlamlı bölümüne gen denir. Öyleyse M gendir.
Adım 4: N, fosfat – şeker – baz kısımlarından oluşan tek bir parçadır. Bu, DNA'nın yapı birimi olan nükleotiddir.
Sağlama: Sıralamayı içten dışa da okuyabilirsin: nükleotidler birleşip DNA'yı, DNA'nın bir bölümü geni, DNA'nın tamamı da proteinlerle sarılarak kromozomu oluşturur.
Sık yapılan hata: Geni DNA'dan büyük sanmak. Gen her zaman DNA'nın bir parçasıdır.
Cevap D.`
},
{
  id: "fen-dn-304",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tohum ıslah merkezinde çimlendirilen buğday tohumunda hücreler bölünerek çoğalmaktadır. Aşağıdaki şemada, bölünmeden önce bir hücredeki DNA'nın kendini eşlemesi gösterilmiştir. Şemada düz çizgiler eski zincirleri, kesik çizgiler ise yeni kurulan zincirleri göstermektedir.
**Buna göre eşlenme sonunda oluşan iki DNA molekülü için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 540 230" role="img" aria-label="Bir DNA molekülünün eşlenerek iki DNA oluşturması"><line x1="30" y1="88" x2="150" y2="88" stroke="currentColor" stroke-width="3.5"/><line x1="30" y1="140" x2="150" y2="140" stroke="currentColor" stroke-width="3.5"/><g stroke="var(--vurgu2)" stroke-width="2"><line x1="48" y1="88" x2="48" y2="140"/><line x1="73" y1="88" x2="73" y2="140"/><line x1="98" y1="88" x2="98" y2="140"/><line x1="123" y1="88" x2="123" y2="140"/></g><text x="90" y="176" fill="currentColor" font-size="15" text-anchor="middle">Eşlenmeden önce</text><g stroke="currentColor" stroke-width="2"><line x1="168" y1="114" x2="208" y2="114"/><polygon points="218,114 204,108 204,120" fill="currentColor" stroke="none"/></g><line x1="240" y1="34" x2="400" y2="34" stroke="currentColor" stroke-width="3.5"/><line x1="240" y1="80" x2="400" y2="80" stroke="var(--vurgu)" stroke-width="3.5" stroke-dasharray="9 6"/><g stroke="var(--vurgu2)" stroke-width="2"><line x1="262" y1="34" x2="262" y2="80"/><line x1="292" y1="34" x2="292" y2="80"/><line x1="322" y1="34" x2="322" y2="80"/><line x1="352" y1="34" x2="352" y2="80"/><line x1="382" y1="34" x2="382" y2="80"/></g><line x1="240" y1="150" x2="400" y2="150" stroke="var(--vurgu)" stroke-width="3.5" stroke-dasharray="9 6"/><line x1="240" y1="196" x2="400" y2="196" stroke="currentColor" stroke-width="3.5"/><g stroke="var(--vurgu2)" stroke-width="2"><line x1="262" y1="150" x2="262" y2="196"/><line x1="292" y1="150" x2="292" y2="196"/><line x1="322" y1="150" x2="322" y2="196"/><line x1="352" y1="150" x2="352" y2="196"/><line x1="382" y1="150" x2="382" y2="196"/></g><g fill="currentColor" font-size="15"><text x="410" y="60">1. DNA</text><text x="410" y="178">2. DNA</text><text x="240" y="222">Eşlenmeden sonra</text></g><g font-size="14" fill="currentColor"><text x="30" y="212">— eski zincir</text></g><text x="150" y="212" fill="var(--vurgu)" font-size="14">- - - yeni zincir</text></svg>`,
  secenekler: [
    "Her ikisi de yalnızca yeni zincirlerden oluşmuştur.",
    "Her birinde bir eski, bir yeni zincir bulunmaktadır.",
    "Biri yalnızca eski, diğeri yalnızca yeni zincirlerden oluşmuştur.",
    "Her ikisinde de bazların sırası eski DNA'dakinden farklıdır."
  ],
  dogru: 1,
  hatalar: [
    "Eski zincirlerin kaybolduğunu sanma: eski zincirler atılmaz, kalıp olarak kullanılır ve yeni DNA'ların içinde yer almayı sürdürür.",
    null,
    "Eski DNA'nın olduğu gibi kaldığını, yanına bambaşka bir DNA yapıldığını sanma: şemada her iki DNA'da da bir düz, bir kesik çizgi vardır.",
    "Eşlenmenin baz sırasını değiştirdiğini sanma: eşlenmenin amacı aynı bilgiyi kopyalamaktır; bazlar eşleşme kuralına göre yerleşir."
  ],
  aciklama: `DNA'nın kendini eşlemesi, hücre bölünmeden önce kalıtsal bilginin kopyalanmasıdır.
Adım 1: Eşlenme, DNA'nın iki zincirinin fermuar gibi birbirinden ayrılmasıyla başlar.
Adım 2: Ayrılan her zincir bir kalıp gibi davranır. Karşısına, eşleşme kuralına uyan nükleotidler dizilir: A karşısına T, G karşısına C gelir.
Adım 3: Şemadaki çizgileri oku. Eşlenmeden sonraki 1. DNA'da bir düz (eski) zincir ve bir kesik (yeni) zincir vardır. 2. DNA'da da durum aynıdır.
Adım 4: Öyleyse oluşan iki DNA'nın her birinde bir eski, bir yeni zincir bulunur.
Sağlama: Eski zincirler kalıp olduğu için yeni DNA'ların baz sırası eskisiyle aynı olur. Bu sayede bölünmeyle oluşan yeni hücreler aynı kalıtsal bilgiyi alır.
Sık yapılan hata: "Eşlenmede eski DNA korunur, yanına yepyeni bir DNA yapılır." demek. Şemadaki kesik ve düz çizgiler bunun böyle olmadığını gösterir.
Cevap B.`
},
{
  id: "fen-dn-305",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müzenin bilim atölyesinde ziyaretçilere DNA maketi yaptırılmaktadır. Atölyede nükleotidin yapısındaki üç kısım için üç ayrı parça kullanılır: üçgen parça fosfatı, yuvarlak parça şekeri, kare parça ise organik bazı temsil eder. Aşağıda bir ziyaretçinin kurduğu maketin bir bölümü verilmiştir.
**Buna göre bu maketle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 470 260" role="img" aria-label="Üçgen, yuvarlak ve kare parçalarla kurulmuş DNA maketi"><line x1="50" y1="52" x2="410" y2="52" stroke="currentColor" stroke-width="2"/><line x1="50" y1="208" x2="410" y2="208" stroke="currentColor" stroke-width="2"/><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><polygon points="80,38 68,60 92,60"/><polygon points="200,38 188,60 212,60"/><polygon points="320,38 308,60 332,60"/><polygon points="80,222 68,200 92,200"/><polygon points="200,222 188,200 212,200"/><polygon points="320,222 308,200 332,200"/><circle cx="140" cy="52" r="17"/><circle cx="260" cy="52" r="17"/><circle cx="380" cy="52" r="17"/><circle cx="140" cy="208" r="17"/><circle cx="260" cy="208" r="17"/><circle cx="380" cy="208" r="17"/><rect x="120" y="86" width="40" height="32" rx="5"/><rect x="240" y="86" width="40" height="32" rx="5"/><rect x="360" y="86" width="40" height="32" rx="5"/><rect x="120" y="142" width="40" height="32" rx="5"/><rect x="240" y="142" width="40" height="32" rx="5"/><rect x="360" y="142" width="40" height="32" rx="5"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="140" y1="69" x2="140" y2="86"/><line x1="260" y1="69" x2="260" y2="86"/><line x1="380" y1="69" x2="380" y2="86"/><line x1="140" y1="191" x2="140" y2="174"/><line x1="260" y1="191" x2="260" y2="174"/><line x1="380" y1="191" x2="380" y2="174"/></g><g stroke="var(--vurgu)" stroke-width="2.5"><line x1="140" y1="118" x2="140" y2="142"/><line x1="260" y1="118" x2="260" y2="142"/><line x1="380" y1="118" x2="380" y2="142"/></g><g fill="currentColor" font-size="17" font-weight="bold" text-anchor="middle"><text x="140" y="109">A</text><text x="260" y="109">G</text><text x="380" y="109">C</text><text x="140" y="165">T</text><text x="260" y="165">C</text><text x="380" y="165">G</text></g><g fill="currentColor" font-size="14"><text x="20" y="26">1. zincir</text><text x="20" y="246">2. zincir</text></g></svg>`,
  secenekler: [
    "Bir nükleotid yalnızca üçgen ve yuvarlak parçalardan oluşur.",
    "Zincirler, üçgen parçaların karşılıklı eşleşmesiyle bir arada tutulur.",
    "Aynı zincirdeki bütün kare parçalar birbirinin aynısıdır.",
    "Nükleotidlerin adları, yapılarındaki kare parçaya göre belirlenir."
  ],
  dogru: 3,
  hatalar: [
    "Nükleotidin üç kısımdan oluştuğunu unutma: organik baz da nükleotidin bir parçasıdır; fosfat ve şekere baz eklenmeden nükleotid tamamlanmaz.",
    "Zincirleri bir arada tutan eşleşmeyi yanlış yere koyma: eşleşme, maketin ortasındaki kare parçalar (bazlar) arasındadır. Fosfat ve şeker dışta sıra hâlinde dizilir.",
    "Bir zincirde tek çeşit baz bulunduğunu sanma: şekilde 1. zincirde A, G ve C gibi farklı bazlar bulunmaktadır.",
    null
  ],
  aciklama: `Nükleotid, DNA'nın yapı birimidir ve üç kısımdan oluşur: fosfat, şeker ve organik baz. DNA'daki organik bazlar A, T, G ve C'dir.
Adım 1: Maketi oku. Dışta üçgen (fosfat) ve yuvarlak (şeker) parçalar sırayla dizilmiş, kare parçalar (bazlar) ise ortaya doğru uzanmıştır.
Adım 2: Nükleotidler taşıdıkları organik baza göre adlandırılır. Kare parçada A yazıyorsa o nükleotid adenin nükleotididir. Öyleyse "nükleotidin adı kare parçaya göre belirlenir" ifadesi doğrudur.
Adım 3: Diğer ifadeleri ele. Nükleotid üç parçadan oluşur, ikisinden değil. Zincirleri bir arada tutan, ortadaki bazların eşleşmesidir. 1. zincirde A, G ve C birlikte bulunduğuna göre bir zincirdeki bazlar aynı değildir.
Sağlama: Maketteki eşleşmeleri kontrol et: A – T ve G – C. Kural her karşılıklı çiftte tutuyor.
Sık yapılan hata: Nükleotidi yalnızca baz sanmak. Baz, nükleotidin üç kısmından biridir; ona adını verir ama tek başına nükleotid değildir.
Cevap D.`
},
{
  id: "fen-dn-306",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir adli tıp laboratuvarında, olay yerinde bulunan bir saç telinden elde edilen DNA ile iki kişiden alınan DNA örnekleri karşılaştırılmıştır. Üç örnekte de aynı bölge incelenmiş ve bu bölgedeki baz dizilimleri tabloda verilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Örnek</th><th>İncelenen bölgedeki baz dizilimi</th></tr><tr><td>Olay yerindeki saç teli</td><td>A – T – G – C – C – A – T</td></tr><tr><td>1. kişi</td><td>A – T – G – C – C – A – T</td></tr><tr><td>2. kişi</td><td>A – T – G – G – C – A – T</td></tr></table>`,
  secenekler: [
    "Olay yerindeki DNA, baz dizilimi aynı olduğu için 1. kişiye ait olabilir.",
    "Olay yerindeki DNA, baz çeşitleri aynı olduğu için 2. kişiye ait olabilir.",
    "Olay yerindeki DNA'nın dizilimi her iki kişininkiyle de aynıdır.",
    "Olay yerindeki DNA'nın dizilimi her iki kişininkinden de farklıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Baz çeşitlerinin aynı olmasını yeterli sanma: bütün canlıların DNA'sında aynı dört baz bulunur. Kişiyi ayırt eden, bazların çeşidi değil sırasıdır.",
    "Tek bazlık farkı önemsiz sanma: 2. kişide dördüncü sırada C yerine G vardır. Dizilimdeki tek bir fark bile iki DNA'yı farklı kılar.",
    "Tabloyu karşılaştırmadan karar verme: 1. kişinin dizilimi olay yerindekiyle harf harf aynıdır."
  ],
  aciklama: `Bütün canlıların DNA'sında aynı dört organik baz (A, T, G, C) bulunur. Canlıları ve kişileri birbirinden ayıran, bu bazların çeşidi değil, diziliş sırasıdır.
Adım 1: Olay yerindeki dizilimi yaz: A – T – G – C – C – A – T.
Adım 2: 1. kişinin dizilimiyle karşılaştır: A – T – G – C – C – A – T. Yedi bazın yedisi de aynı sıradadır.
Adım 3: 2. kişinin dizilimiyle karşılaştır: A – T – G – G – C – A – T. Dördüncü sırada C yerine G vardır. Bu tek fark bile dizilimi farklı kılar.
Adım 4: İncelenen bölge yalnızca 1. kişide örtüştüğüne göre olay yerindeki DNA 1. kişiye ait olabilir.
Sağlama: İki dizilimi alt alta yazıp sırayla karşılaştır; bir harf bile tutmuyorsa diziliş aynı değildir.
Sık yapılan hata: "İkisinde de A, T, G ve C var, öyleyse ikisi de olabilir." demek. Baz çeşitleri herkeste ortaktır; ayırt edici olan sıradır.
Cevap A.`
},
{
  id: "fen-dn-307",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tarımsal araştırma merkezinde, kurağa dayanıklı bir buğday çeşidinin kök ucundan alınan hücreler incelenmiştir. İnceleme sonunda bu hücrelerin bölünerek çoğaldığı, bölünmeden önce ise DNA'ların kendini eşlediği belirlenmiştir.
Buna göre;
I. Eşlenme sırasında DNA'nın iki zinciri birbirinden ayrılır.
II. Yeni zincirler kurulurken adenin bazının karşısına guanin bazı gelir.
III. Eşlenme, hücre bölünmesinden önce gerçekleşir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 3,
  hatalar: [
    "III. yargıyı atlama: metinde de belirtildiği gibi eşlenme, bölünmeden önce gerçekleşir.",
    "I. yargıyı atlama: eşlenme, iki zincirin fermuar gibi birbirinden ayrılmasıyla başlar.",
    "Eşleşme kuralını karıştırma: adenin karşısına timin, guanin karşısına sitozin gelir. II yanlıştır.",
    null
  ],
  aciklama: `DNA'nın kendini eşlemesi, kalıtsal bilginin kopyalanmasıdır ve hücre bölünmesinden önce gerçekleşir.
Adım 1: I. yargıyı incele. Eşlenme, DNA'nın iki zincirinin fermuar gibi açılıp birbirinden ayrılmasıyla başlar. I doğrudur.
Adım 2: II. yargıyı incele. Eşleşme kuralına göre adenin (A) karşısına timin (T), guanin (G) karşısına sitozin (C) gelir. Adenin karşısına guanin gelmez. II yanlıştır.
Adım 3: III. yargıyı incele. Bölünmeyle oluşacak yeni hücrelerin tam bir DNA alabilmesi için bilgi önceden kopyalanmalıdır. Bu yüzden eşlenme bölünmeden önce olur. III doğrudur.
Adım 4: Doğru yargılar I ve III'tür.
Sağlama: Eşlenme bölünmeden sonra olsaydı yeni hücrelerin birinde eksik kalıtsal bilgi bulunurdu.
Sık yapılan hata: A – T ve G – C eşleşmesini karıştırmak. Harfleri hatırlamak için "düz olanlar düz, yuvarlak olanlar yuvarlak" gibi kendi kısa yolunu kur: A ile T, G ile C.
Cevap D.`
},
{
  id: "fen-dn-308",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir arkeoloji kazısında bulunan iki tohum kalıntısından (K ve L) az miktarda DNA elde edilmiştir. Yapılan incelemede K ve L'nin DNA'larındaki baz dizilimlerinin birbirinden farklı olduğu görülmüştür. Araştırmacılar, kalıntıların hangi bitkilere ait olduğunu belirlemeye çalışmaktadır.
Buna göre yalnızca bu bilgiyle;
I. K ve L farklı bitki türlerine aittir.
II. K ve L'nin DNA'larındaki nükleotid dizilimleri birbirinden farklıdır.
III. K ve L'nin DNA'larını oluşturan baz çeşitleri birbirinden farklıdır.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "Farklı dizilimi doğrudan farklı tür sayma: aynı türün iki ayrı bireyinin baz dizilimleri de birbirinden farklıdır. I kesin değildir.",
    null,
    "I. yargıyı kesin sayma: iki kalıntı aynı türün farklı bireylerine de ait olabilir; verilen bilgi tür ayrımı yapmaya yetmez.",
    "Baz çeşitlerinin türden türe değiştiğini sanma: bütün canlıların DNA'sında aynı dört baz bulunur; değişen, bu bazların sırasıdır."
  ],
  aciklama: `Bu soruda "kesinlikle doğrudur" deniyor. Yani yalnızca verilen bilgiden çıkan, fazladan varsayım gerektirmeyen yargıları seçmelisin.
Adım 1: Verilen tek bilgi şudur: K ve L'nin baz dizilimleri farklıdır.
Adım 2: I. yargıyı incele. Baz dizilimi aynı türün farklı bireylerinde de farklıdır. Örneğin iki ayrı buğday bitkisinin dizilimleri de birbirinin aynısı değildir. Bu yüzden "farklı türdendir" sonucu kesin değildir. I elenir.
Adım 3: II. yargıyı incele. Nükleotidler taşıdıkları baza göre adlandırılır; bazların sırası değişince nükleotidlerin sırası da değişir. Baz dizilimleri farklıysa nükleotid dizilimleri de kesinlikle farklıdır. II doğrudur.
Adım 4: III. yargıyı incele. Bütün canlıların DNA'sında A, T, G ve C bazları bulunur. Baz çeşitleri değil, sıraları farklıdır. III yanlıştır.
Adım 5: Kesinlikle doğru olan yalnızca II'dir.
Sağlama: Baz çeşitleri farklı olsaydı, farklı canlıların DNA'ları için ayrı eşleşme kuralları gerekirdi; oysa kural bütün canlılarda aynıdır.
Sık yapılan hata: "Farklı" sözcüğünü gördüğü anda "farklı tür" diye düşünmek. Tür ayrımı için çok daha fazla veri gerekir.
Cevap B.`
},
{
  id: "fen-dn-309",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir tohum bankasında, aynı buğday çeşidine ait bir bitkinin yaprak, kök ve gövdesinden birer hücre örneği ile başka bir buğday çeşidine ait bir bitkinin yaprağından bir hücre örneği alınmıştır. Dört örnekte de aynı bölge incelenmiş ve elde edilen baz dizilimleri tabloda verilmiştir.
Buna göre;
I. K, L ve M örneklerinin alındığı hücreler aynı kalıtsal bilgiyi taşımaktadır.
II. İncelenen bölgedeki baz dizilimi, buğday çeşitlerini ayırt etmekte kullanılabilir.
III. N örneğinin alındığı çeşidin hücrelerindeki kromozom sayısı diğerinden fazladır.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Örnek</th><th>Alındığı bitki</th><th>Alındığı yapı</th><th>İncelenen bölgedeki baz dizilimi</th></tr><tr><td>K</td><td>1. çeşit</td><td>Yaprak</td><td>A – G – T – C – C</td></tr><tr><td>L</td><td>1. çeşit</td><td>Kök</td><td>A – G – T – C – C</td></tr><tr><td>M</td><td>1. çeşit</td><td>Gövde</td><td>A – G – T – C – C</td></tr><tr><td>N</td><td>2. çeşit</td><td>Yaprak</td><td>A – G – T – T – C</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "I. yargıyı atlama: K, L ve M aynı bitkiden alınmıştır ve dizilimleri aynıdır; aynı bitkinin bütün hücreleri aynı kalıtsal bilgiyi taşır.",
    "III. yargıyı doğru sayma: tabloda kromozom sayısıyla ilgili hiçbir veri yoktur; baz dizilimindeki fark kromozom sayısı hakkında bilgi vermez.",
    null,
    "III. yargıyı doğru sayma: verilmeyen bir bilgiyi tablodan çıkarmaya çalışma. Dizilim farkı, kromozom sayısının farklı olduğunu göstermez."
  ],
  aciklama: `"Kesinlikle doğrudur" sorularında yalnızca tablodan okunabilen ya da tablodan doğrudan çıkan yargılar seçilir.
Adım 1: Tabloyu oku. K, L ve M aynı bitkinin farklı organlarından alınmıştır ve üçünün dizilimi de A – G – T – C – C'dir. N ise başka bir çeşide aittir ve dördüncü sırada C yerine T vardır.
Adım 2: I. yargıyı incele. Bir bitkinin bütün hücreleri tek bir hücrenin bölünmeleriyle oluşur; bu yüzden aynı kalıtsal bilgiyi taşır. Tablodaki üç aynı dizilim de bunu destekler. I doğrudur.
Adım 3: II. yargıyı incele. İki çeşit arasında bu bölgede bir baz farkı görülmüştür. Öyleyse bu bölge çeşitleri ayırt etmekte kullanılabilir. II doğrudur.
Adım 4: III. yargıyı incele. Tabloda kromozom sayısı hiç verilmemiştir. Baz dizilimindeki bir fark, kromozom sayısı hakkında bir şey söylemez. III kesin değildir.
Adım 5: Kesinlikle doğru olanlar I ve II'dir.
Sağlama: Tabloda hangi sütunların bulunduğuna bak. Sorulan bilgi hiçbir sütunda yoksa o yargı "kesinlikle doğru" olamaz.
Sık yapılan hata: Bir farkı gördüğünde bütün özelliklerin farklı olduğunu düşünmek. Yalnızca ölçülen özellik hakkında konuşabilirsin.
Cevap C.`
},
{
  id: "fen-dn-310",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ıslah merkezinde, kurağa dayanıklı bir buğday bitkisinin kök ucundaki bir hücre bölünerek iki yeni hücre oluşturmuştur. Araştırmacılar ana hücreden ve iki yeni hücreden alınan örneklerde aynı gen bölgesini incelemiş ve elde ettikleri baz dizilimlerini tabloya yazmıştır.
**Buna göre yeni hücrelerdeki baz diziliminin ana hücredekiyle aynı olmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Hücre</th><th>İncelenen gen bölgesindeki baz dizilimi</th></tr><tr><td>Ana hücre</td><td>T – A – C – G – G – A</td></tr><tr><td>1. yeni hücre</td><td>T – A – C – G – G – A</td></tr><tr><td>2. yeni hücre</td><td>T – A – C – G – G – A</td></tr></table>`,
  secenekler: [
    "Bölünmeden önce DNA'nın kendini eşleyerek aynı bilgiyi kopyalaması",
    "Bölünme sırasında hücrenin kromozom sayısını iki katına çıkarması",
    "Yeni hücrelerin kendilerine ait yeni genler oluşturması",
    "Bölünmeden sonra bazların yeniden sıraya dizilmesi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eşlenmeyi kromozom sayısının kalıcı olarak artmasıyla karıştırma: bölünme sonunda yeni hücrelerin kromozom sayısı ana hücreyle aynıdır; kopyalanan DNA iki hücreye paylaştırılır.",
    "Hücrelerin kendi genlerini oluşturduğunu sanma: yeni hücreler gen üretmez, ana hücrenin DNA'sının kopyasını alır.",
    "Sıralamanın bölünmeden sonra yapıldığını sanma: baz sırası kopyalama sırasında, yani bölünmeden önce belirlenir."
  ],
  aciklama: `Bir hücre bölündüğünde oluşan yeni hücrelerin kalıtsal bilgisi ana hücreyle aynıdır. Bunun nedeni, bölünmeden önce DNA'nın kendini eşlemesidir.
Adım 1: Tabloyu oku. Ana hücre ile iki yeni hücrenin baz dizilimi harf harf aynıdır: T – A – C – G – G – A.
Adım 2: Bu aynılığın nedenini düşün. Bölünmeden önce DNA'nın iki zinciri ayrılır ve her zincir kalıp görevi görerek karşısına yeni bir zincir kurdurur.
Adım 3: Eşleşme kuralı sabit olduğu için (A karşısına T, G karşısına C) oluşan iki DNA'nın baz sırası eskisiyle aynıdır.
Adım 4: Bölünme sırasında bu iki DNA, iki yeni hücreye birer birer dağıtılır. Böylece her yeni hücre ana hücreyle aynı dizilimi almış olur.
Sağlama: Kopyalama olmasaydı DNA ikiye bölünüp paylaştırılırdı ve her yeni hücrede bilginin yalnızca yarısı bulunurdu; oysa tabloda diziliş eksiksiz aynıdır.
Sık yapılan hata: Eşlenmeyi hücre bölünmesinden sonra gerçekleşen bir olay sanmak. Sıra şudur: önce eşlenme, sonra bölünme.
Cevap A.`
},
{
  id: "fen-dn-311",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir adli tıp uzmanı, ziyarete gelen öğrencilere iki ayrı kişiden alınan DNA'ları temsil eden K ve L maketlerini göstermiştir. Maketlerdeki bazlar harflerle belirtilmiştir.
Buna göre;
I. K maketinde bazlar eşleşme kuralına uygun yerleştirilmiştir.
II. L maketinde bir bazın karşısına yanlış bir baz yerleştirilmiştir.
III. Maketler farklı kişileri temsil ettiği için eşleşme kuralı L maketinde aranmaz.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 240" role="img" aria-label="K ve L maketlerinde karşılıklı bazların gösterimi"><text x="115" y="26" fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle">K maketi</text><line x1="40" y1="52" x2="40" y2="210" stroke="currentColor" stroke-width="3"/><line x1="190" y1="52" x2="190" y2="210" stroke="currentColor" stroke-width="3"/><g stroke="var(--vurgu2)" stroke-width="2"><line x1="40" y1="76" x2="190" y2="76"/><line x1="40" y1="116" x2="190" y2="116"/><line x1="40" y1="156" x2="190" y2="156"/><line x1="40" y1="196" x2="190" y2="196"/></g><g fill="currentColor" font-size="17" font-weight="bold" text-anchor="middle"><text x="72" y="82">A</text><text x="72" y="122">T</text><text x="72" y="162">G</text><text x="72" y="202">C</text><text x="158" y="82">T</text><text x="158" y="122">A</text><text x="158" y="162">C</text><text x="158" y="202">G</text></g><text x="395" y="26" fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle">L maketi</text><line x1="320" y1="52" x2="320" y2="210" stroke="currentColor" stroke-width="3"/><line x1="470" y1="52" x2="470" y2="210" stroke="currentColor" stroke-width="3"/><g stroke="var(--vurgu2)" stroke-width="2"><line x1="320" y1="76" x2="470" y2="76"/><line x1="320" y1="116" x2="470" y2="116"/><line x1="320" y1="156" x2="470" y2="156"/><line x1="320" y1="196" x2="470" y2="196"/></g><g fill="currentColor" font-size="17" font-weight="bold" text-anchor="middle"><text x="352" y="82">A</text><text x="352" y="122">G</text><text x="352" y="162">T</text><text x="352" y="202">C</text><text x="438" y="82">T</text><text x="438" y="122">C</text><text x="438" y="162">G</text><text x="438" y="202">G</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="115" y="232">1. zincir — 2. zincir</text><text x="395" y="232">1. zincir — 2. zincir</text></g></svg>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "II. yargıyı atlama: L maketinde üçüncü sıradaki T bazının karşısına A yerine G yerleştirilmiştir.",
    null,
    "I. yargıyı atlama: K maketindeki dört çiftin dördü de (A–T, T–A, G–C, C–G) kurala uygundur.",
    "III. yargıyı doğru sayma: eşleşme kuralı kişiden kişiye değişmez; bütün canlıların DNA'sında A karşısına T, G karşısına C gelir."
  ],
  aciklama: `Baz eşleşme kuralı evrenseldir: her canlının her hücresinde adenin (A) karşısına timin (T), guanin (G) karşısına sitozin (C) gelir. Kişiden kişiye değişen, bazların sırasıdır; kuralın kendisi değildir.
Adım 1: K maketindeki çiftleri sırayla kontrol et: A – T, T – A, G – C, C – G. Dördü de kurala uygundur. I doğrudur.
Adım 2: L maketindeki çiftleri kontrol et: A – T doğru, G – C doğru, T – G yanlış, C – G doğru. Üçüncü sırada T'nin karşısına A gelmeliydi. II doğrudur.
Adım 3: III. yargıyı incele. Maketlerin farklı kişileri temsil etmesi kuralı değiştirmez. İki kişinin DNA'sında bazların sırası farklı olabilir ama eşleşme kuralı ikisinde de aynıdır. III yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sağlama: Kural kişiden kişiye değişseydi, bir DNA'nın karşı zincirini bulmak için önce kimin DNA'sı olduğunu bilmek gerekirdi. Oysa kural tektir.
Sık yapılan hata: "Kişiler farklıysa kurallar da farklıdır." demek. Farklı olan, aynı kurala göre dizilmiş bazların sırasıdır.
Cevap B.`
},
{
  id: "fen-dn-312",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `1869 yılında bir araştırmacı, hücrelerin çekirdeklerinden o güne kadar bilinmeyen, fosfor bakımından zengin bir madde ayırmayı başarmıştır. Araştırmacı bu maddeye, çekirdek anlamına gelen sözcükten yola çıkarak "nüklein" adını vermiştir. Bu maddenin kalıtsal bilgiyi taşıyan DNA olduğu ise ancak yıllar sonra anlaşılmıştır.
Buna göre yalnızca bu bilgiyle;
I. Araştırmacının incelediği hücrelerde çekirdek bulunmaktadır.
II. Ayrılan maddenin yapısında fosfor elementi bulunmaktadır.
III. Araştırmacı, ayırdığı maddenin kalıtsal bilgiyi taşıdığını kendi döneminde belirlemiştir.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: metinde maddenin fosfor bakımından zengin olduğu açıkça yazmaktadır.",
    "I. yargıyı atlama: madde çekirdeklerden ayrıldığına göre incelenen hücrelerin çekirdeği vardır.",
    null,
    "III. yargıyı doğru sayma: metinde bu maddenin DNA olduğunun \"yıllar sonra\" anlaşıldığı belirtilmiştir; araştırmacı bunu kendi döneminde bilmiyordu."
  ],
  aciklama: `Bu soruda metinde açıkça verilen ya da metinden zorunlu olarak çıkan yargılar aranıyor. Metnin söylemediğini eklemek "fazla varsayım" hatasıdır.
Adım 1: I. yargıyı incele. Madde, hücrelerin çekirdeklerinden ayrılmıştır. Çekirdeği olmayan bir hücreden çekirdek maddesi ayrılamaz. Öyleyse incelenen hücrelerin çekirdeği vardır. I doğrudur.
Adım 2: II. yargıyı incele. Metinde maddenin "fosfor bakımından zengin" olduğu yazılıdır. Bu doğrudan verilmiş bir bilgidir. II doğrudur.
Adım 3: III. yargıyı incele. Metin, maddenin DNA olduğunun yıllar sonra anlaşıldığını söylüyor. Yani araştırmacı bunu kendi döneminde belirlememiştir. III yanlıştır.
Adım 4: Kesinlikle doğru olanlar I ve II'dir.
Sağlama: III'ün yanlışlığını metindeki "ancak yıllar sonra anlaşılmıştır" ifadesinden doğrudan görebilirsin.
Sık yapılan hata: Bir bilim insanının bulduğu şeyin anlamını da hemen bildiğini varsaymak. Bilimde çoğu zaman önce madde bulunur, görevi sonra anlaşılır.
Cevap C.`
}
);

/* ===================== HAVUZ (kademe 0) ===================== */
(window.LGS_BANK["dna-genetik-kod"] = window.LGS_BANK["dna-genetik-kod"] || []).push(
{
  id: "fen-dn-001",
  kazanim: "F.8.2.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**DNA'nın yapı birimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Gen", "Kromozom", "Nükleotid", "Organik baz"],
  dogru: 2,
  hatalar: [
    "Geni yapı birimi sanma: gen, DNA'nın bir özelliği belirleyen anlamlı bölümüdür; yapı birimi değildir.",
    "Kromozomu yapı birimi sanma: kromozom, DNA'dan daha büyük bir yapıdır; DNA'nın proteinlerle sarılmasıyla oluşur.",
    null,
    "Organik bazı tek başına yapı birimi sanma: baz, nükleotidin üç kısmından yalnızca biridir."
  ],
  aciklama: `Yapı birimi, bir molekülün tekrar tekrar bir araya gelerek onu oluşturan en küçük parçasıdır.
Adım 1: DNA'yı bir merdivene benzet. Bu merdiven, birbirine eklenen küçük parçalardan oluşur.
Adım 2: Bu parçanın adı nükleotiddir. Her nükleotid fosfat, şeker ve organik baz olmak üzere üç kısımdan oluşur.
Adım 3: Gen DNA'nın bir bölümü, kromozom ise DNA'dan büyük bir yapıdır; ikisi de yapı birimi değildir. Organik baz ise nükleotidin yalnızca bir parçasıdır.
Sağlama: Sıralamayı küçükten büyüğe hatırla: nükleotid → gen → DNA → kromozom.
Cevap C.`
},
{
  id: "fen-dn-002",
  kazanim: "F.8.2.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "**Bir nükleotidin yapısında aşağıdakilerden hangisi __bulunmaz__?**",
  gorsel: null,
  secenekler: ["Fosfat", "Şeker", "Organik baz", "Protein"],
  dogru: 3,
  hatalar: [
    "Fosfatı yapının dışında sanma: fosfat, nükleotidin üç kısmından biridir.",
    "Şekeri yapının dışında sanma: şeker, fosfat ile bazın arasında yer alan kısımdır.",
    "Organik bazı yapının dışında sanma: baz, nükleotide adını veren kısımdır.",
    null
  ],
  aciklama: `Nükleotid üç kısımdan oluşur: fosfat, şeker ve organik baz.
Adım 1: Seçenekleri tek tek bu üç kısımla karşılaştır. Fosfat, şeker ve organik baz nükleotidin içinde yer alır.
Adım 2: Protein bu üçünün arasında yoktur. Protein, DNA ile birlikte kromozomun yapısında bulunur ama nükleotidin bir parçası değildir.
Sağlama: Bir nükleotidi çizdiğini düşün: bir üçgen (fosfat), bir yuvarlak (şeker) ve bir kare (baz). Proteine yer yok.
Sık yapılan hata: "Kromozomda protein var, öyleyse nükleotidde de vardır." demek. Protein kromozom düzeyinde bulunur, nükleotid düzeyinde değil.
Cevap D.`
},
{
  id: "fen-dn-003",
  kazanim: "F.8.2.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "**DNA'nın kendini eşlemesiyle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "İki zincirin birbirinden ayrılmasıyla başlar.",
    "Sırasında adenin bazının karşısına guanin gelir.",
    "Sonunda tek bir DNA molekülü oluşur.",
    "Hücre bölünmesi tamamlandıktan sonra gerçekleşir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eşleşme kuralını karıştırma: adenin karşısına timin, guanin karşısına sitozin gelir.",
    "Eşlenmenin sonucunu yanlış hatırlama: eşlenme sonunda birbirinin aynısı iki DNA molekülü oluşur.",
    "Sırayı ters kurma: eşlenme, hücre bölünmesinden önce gerçekleşir."
  ],
  aciklama: `DNA'nın kendini eşlemesi, kalıtsal bilginin kopyalanmasıdır.
Adım 1: Eşlenme, DNA'nın iki zincirinin fermuar gibi açılmasıyla başlar. Bu yüzden ilk seçenek doğrudur.
Adım 2: Ayrılan her zincirin karşısına eşleşme kuralına uyan nükleotidler dizilir: A karşısına T, G karşısına C.
Adım 3: Sonuçta birbirinin aynısı iki DNA molekülü oluşur ve bu olay hücre bölünmesinden önce gerçekleşir.
Sağlama: Kopyalama bölünmeden önce bitmezse yeni hücrelerden birine eksik bilgi düşerdi.
Cevap A.`
},
{
  id: "fen-dn-004",
  kazanim: "F.8.2.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir tohum bankasında saklanan buğday çeşitlerinin etiketlerinde "kurağa dayanıklılık geni", "başak uzunluğu geni" gibi ifadeler yer almaktadır.
**Buna göre etiketlerde geçen "gen" kavramı için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Kromozomun etrafını saran ve onu koruyan yapıdır.",
    "DNA üzerinde bir özelliği belirleyen anlamlı nükleotid dizisidir.",
    "Hücre çekirdeğinde bulunan, DNA'dan büyük bir moleküldür.",
    "Nükleotidin yapısındaki üç kısımdan biridir."
  ],
  dogru: 1,
  hatalar: [
    "Geni bir örtü ya da kılıf gibi düşünme: gen, kromozomu saran bir yapı değil, DNA'nın üzerindeki bir bölümdür.",
    null,
    "Geni DNA'dan büyük sanma: gen her zaman DNA'nın bir parçasıdır, DNA'dan büyük olamaz.",
    "Geni nükleotidin bir kısmı sanma: tam tersine, gen birçok nükleotidin arka arkaya dizilmesiyle oluşur."
  ],
  aciklama: `Gen, DNA üzerinde bulunan ve bir özelliği belirleyen anlamlı nükleotid dizisidir.
Adım 1: Etikette "kurağa dayanıklılık geni" yazıyorsa, bu özelliği belirleyen bilginin DNA'nın belirli bir bölümünde bulunduğu anlatılıyordur.
Adım 2: Bu bölüm, arka arkaya dizilmiş nükleotidlerden oluşur. Yani gen, nükleotidlerden küçük değil, onların oluşturduğu bir dizidir.
Adım 3: Gen DNA'nın bir parçası olduğu için DNA'dan büyük olamaz; kromozom ise DNA'dan da büyüktür.
Sağlama: Bir kitabı DNA, içindeki bir bölümü gen, harfleri ise nükleotid gibi düşünebilirsin.
Cevap B.`
},
{
  id: "fen-dn-005",
  kazanim: "F.8.2.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıdaki şemada, bir hücrede DNA'nın kendini eşlemesinin bir bölümü gösterilmiştir. Eski zincirdeki bazlar harflerle, yeni kurulan zincirde henüz yerleştirilmemiş bazlar ise 1, 2 ve 3 numaralı kutucuklarla belirtilmiştir.
**Buna göre 1, 2 ve 3 numaralı kutucuklara sırasıyla hangi bazlar gelmelidir?**`,
  gorsel: `<svg viewBox="0 0 420 260" role="img" aria-label="Eski zincirdeki bazların karşısına gelecek bazların numaralandırıldığı eşlenme şeması"><line x1="90" y1="48" x2="90" y2="236" stroke="currentColor" stroke-width="3"/><line x1="330" y1="48" x2="330" y2="236" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="9 6"/><g stroke="var(--vurgu2)" stroke-width="2"><line x1="90" y1="80" x2="330" y2="80"/><line x1="90" y1="140" x2="330" y2="140"/><line x1="90" y1="200" x2="330" y2="200"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"><rect x="128" y="62" width="44" height="36" rx="5"/><rect x="128" y="122" width="44" height="36" rx="5"/><rect x="128" y="182" width="44" height="36" rx="5"/><rect x="248" y="62" width="44" height="36" rx="5"/><rect x="248" y="122" width="44" height="36" rx="5"/><rect x="248" y="182" width="44" height="36" rx="5"/></g><g fill="currentColor" font-size="18" font-weight="bold" text-anchor="middle"><text x="150" y="88">T</text><text x="150" y="148">G</text><text x="150" y="208">A</text><text x="270" y="88">1</text><text x="270" y="148">2</text><text x="270" y="208">3</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="90" y="34">Eski zincir</text><text x="330" y="34">Yeni zincir</text></g></svg>`,
  secenekler: [
    "1: A — 2: C — 3: T",
    "1: A — 2: G — 3: T",
    "1: T — 2: C — 3: A",
    "1: T — 2: G — 3: A"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Guanini sitozinle değil kendisiyle eşleştirme: G karşısına G değil, C gelir.",
    "Timin ve adenini kendileriyle eşleştirme: T karşısına T, A karşısına A gelmez; T karşısına A, A karşısına T gelir.",
    "Bütün bazları kendileriyle eşleştirme: eşlenmede her baz karşısına aynısı değil, eşi gelir."
  ],
  aciklama: `Eşlenme sırasında yeni zincirdeki bazlar, eski zincirdeki bazların karşılığı olacak biçimde yerleşir: adenin (A) karşısına timin (T), guanin (G) karşısına sitozin (C) gelir.
Adım 1: Eski zincirdeki ilk baz T'dir. Timinin eşi adenindir. 1 numaralı kutucuğa A gelir.
Adım 2: İkinci baz G'dir. Guaninin eşi sitozindir. 2 numaralı kutucuğa C gelir.
Adım 3: Üçüncü baz A'dır. Adeninin eşi timindir. 3 numaralı kutucuğa T gelir.
Adım 4: Sırasıyla A, C ve T olur.
Sağlama: Yerleştirdiğin bazları karşılıklı oku: T–A, G–C, A–T. Üç çift de kurala uyuyor.
Sık yapılan hata: Bazı kendisiyle eşleştirmek (T karşısına T yazmak). Eşlenmede kopyalanan bilgi aynıdır ama karşılıklı bazlar aynı değil, eştir.
Cevap A.`
},
{
  id: "fen-dn-006",
  kazanim: "F.8.2.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir müzede açılan sergide, hücre bölünmesi sırasında çekirdekte belirginleşen yapıların fotoğrafları yer almaktadır. Sergi metninde bu yapıların, DNA'nın proteinlerle birlikte sıkıca sarılmasıyla oluştuğu yazmaktadır.
**Sergide sözü edilen yapı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Gen", "Kromozom", "Hücre çekirdeği", "Nükleotid"],
  dogru: 1,
  hatalar: [
    "Geni kromozomla karıştırma: gen, DNA üzerindeki bir bölümdür; proteinlerle sarılarak oluşan bir yapı değildir.",
    null,
    "Çekirdeği kromozomla karıştırma: çekirdek, kromozomların içinde bulunduğu hücre kısmıdır; DNA'nın sarılmasıyla oluşmaz.",
    "Nükleotidi kromozomla karıştırma: nükleotid, DNA'nın yapı birimidir; DNA'dan çok daha küçüktür."
  ],
  aciklama: `Kromozom, DNA'nın proteinlerle birlikte sıkıca sarılıp paketlenmesiyle oluşan yapıdır ve en belirgin hâlini hücre bölünmesi sırasında alır.
Adım 1: Sergi metnindeki iki ipucuna bak: "hücre bölünmesi sırasında belirginleşiyor" ve "DNA'nın proteinlerle sarılmasıyla oluşuyor".
Adım 2: Bu iki özellik yalnızca kromozoma uyar.
Adım 3: Geni ele: gen DNA'nın bir bölümüdür, ayrı bir paket değildir. Çekirdek, kromozomların bulunduğu yerdir. Nükleotid ise DNA'nın en küçük yapı birimidir.
Sağlama: Uzun bir ipi makaraya sararak küçük bir yumak yaptığını düşün. İp DNA, yumak kromozomdur.
Cevap B.`
},
{
  id: "fen-dn-007",
  kazanim: "F.8.2.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıdaki tabloda, DNA'nın kendini eşlemesi sırasında gerçekleşen üç olay karışık sırayla verilmiştir.
**Buna göre bu olayların gerçekleşme sırası aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Olay</th><th>Açıklama</th></tr><tr><td>K</td><td>Ayrılan zincirlerin karşısına uygun nükleotidlerin yerleştirilmesi</td></tr><tr><td>L</td><td>DNA'nın iki zincirinin birbirinden ayrılması</td></tr><tr><td>M</td><td>Birbirinin aynısı iki DNA molekülünün oluşması</td></tr></table>`,
  secenekler: ["K – L – M", "K – M – L", "L – M – K", "L – K – M"],
  dogru: 3,
  hatalar: [
    "Nükleotid yerleştirmeyi başa alma: zincirler ayrılmadan karşılarına nükleotid yerleştirilemez.",
    "Hem sırayı ters kurma hem ayrılmayı sona bırakma: eşlenme her zaman zincirlerin ayrılmasıyla başlar.",
    "Sonucu ortaya koyma: iki DNA molekülü, nükleotidler yerleştikten sonra oluşur; ondan önce değil.",
    null
  ],
  aciklama: `Eşlenme üç adımda ilerler: ayrılma, yerleşme, tamamlanma.
Adım 1: Önce DNA'nın iki zinciri fermuar gibi birbirinden ayrılır. Bu, tablodaki L olayıdır.
Adım 2: Ayrılan her zincir kalıp görevi görür ve karşısına eşleşme kuralına uyan nükleotidler yerleştirilir (A karşısına T, G karşısına C). Bu, K olayıdır.
Adım 3: Yerleştirme bitince birbirinin aynısı iki DNA molekülü oluşmuş olur. Bu, M olayıdır.
Adım 4: Sıra L – K – M'dir.
Sağlama: Kendine "Zincirler ayrılmadan karşılarına nükleotid nasıl dizilir?" diye sor. Cevap, L'nin başta olması gerektiğini gösterir.
Cevap D.`
},
{
  id: "fen-dn-008",
  kazanim: "F.8.2.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `1950'li yıllarda X ışınları kullanılarak elde edilen bir DNA görüntüsünde, molekülün burgu biçiminde olduğunu gösteren bir desen ortaya çıkmıştır. Araştırmacılar bu görüntüden ve bazların eşleşme kuralından yararlanarak DNA'nın yapısını açıklayan bir model kurmuştur.
Buna göre;
I. DNA'nın yapısı doğrudan gözle görülerek değil, dolaylı yollarla belirlenmiştir.
II. Modelde iki zincir, bazların karşılıklı eşleşmesiyle birbirine bağlanır.
III. Elde edilen desen, DNA'nın düz bir merdiven biçiminde olduğunu göstermiştir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: metinde modelin bazların eşleşme kuralından yararlanılarak kurulduğu yazmaktadır.",
    "I. yargıyı atlama: yapı, X ışınlarıyla elde edilen bir desenden yola çıkılarak belirlenmiştir; bu doğrudan görme değildir.",
    null,
    "III. yargıyı doğru sayma: metinde desenin molekülün burgu biçiminde olduğunu gösterdiği yazmaktadır; düz merdiven değil."
  ],
  aciklama: `DNA, iki zincirin birbirine sarılmasıyla oluşan burgu (sarmal) biçiminde bir moleküldür.
Adım 1: I. yargıyı incele. Araştırmacılar DNA'ya bakmamış, X ışınlarının oluşturduğu deseni yorumlamıştır. Bu dolaylı bir yöntemdir. I doğrudur.
Adım 2: II. yargıyı incele. Metinde modelin "bazların eşleşme kuralından yararlanılarak" kurulduğu söyleniyor. Zincirleri bir arada tutan, karşılıklı bazların eşleşmesidir. II doğrudur.
Adım 3: III. yargıyı incele. Metin, desenin molekülün burgu biçiminde olduğunu gösterdiğini söylüyor. Düz merdiven, DNA'nın yalnızca kolay çizilsin diye kullanılan basitleştirilmiş görünümüdür. III yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sağlama: Defterinde DNA'yı düz merdiven gibi çizebilirsin ama gerçekte merdiven kendi çevresinde dolanmıştır.
Sık yapılan hata: Ders kitabındaki düzleştirilmiş çizimi DNA'nın gerçek biçimi sanmak.
Cevap C.`
},
{
  id: "fen-dn-009",
  kazanim: "F.8.2.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir mağarada yapılan kazıda bulunan kemik parçasından (K) az miktarda DNA elde edilmiştir. Araştırmacılar, K'nin baz diziliminin bir bölümünü okumuş ve bunu günümüzde yaşayan bir canlıdan alınan örneğin (L) aynı bölgesiyle karşılaştırmıştır. Sonuçlar tabloda verilmiştir.
Buna göre;
I. K ve L'nin DNA'larında aynı çeşit organik bazlar bulunmaktadır.
II. K ile L'nin okunan baz dizilimleri birbirinden farklıdır.
III. K çok eski olduğu için DNA'sının yapı birimi nükleotidden farklıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Örnek</th><th>Yaklaşık yaşı</th><th>Okunan baz dizilimi</th></tr><tr><td>K</td><td>9.000 yıl</td><td>G – A – T – C – C – A</td></tr><tr><td>L</td><td>Günümüz</td><td>G – A – T – T – C – A</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "II. yargıyı atlama: tabloda dördüncü sırada K'de C, L'de T vardır; diziliş aynı değildir.",
    null,
    "III. yargıyı doğru sayma: DNA'nın yapı birimi bütün canlılarda ve her dönemde nükleotiddir; yaş bunu değiştirmez.",
    "III. yargıyı doğru sayma: örneğin eski olması yapı birimini değiştirmez. Eskiyen DNA parçalanabilir ama yapı birimi yine nükleotiddir."
  ],
  aciklama: `Bütün canlıların DNA'sı aynı yapı biriminden (nükleotid) ve aynı dört organik bazdan (A, T, G, C) oluşur. Canlıları ayıran, bu bazların dizilişidir.
Adım 1: I. yargıyı incele. Tabloda K'de G, A, T ve C; L'de de G, A, T ve C bazları görünüyor. Baz çeşitleri aynıdır. I doğrudur.
Adım 2: II. yargıyı incele. Dizilimleri sırayla karşılaştır: G – A – T – C – C – A ve G – A – T – T – C – A. Dördüncü sırada bir fark vardır. II doğrudur.
Adım 3: III. yargıyı incele. Bir DNA'nın eski olması yapı birimini değiştirmez. Yapı birimi her durumda nükleotiddir. III yanlıştır.
Adım 4: Doğru yargılar I ve II'dir.
Sağlama: Baz çeşitleri değişseydi eşleşme kuralı da değişirdi; oysa kural her canlıda aynıdır.
Sık yapılan hata: "Çok eski" ifadesini gördüğünde temel kuralların da değiştiğini düşünmek. Değişen, dizilişin ayrıntısıdır.
Cevap B.`
},
{
  id: "fen-dn-010",
  kazanim: "F.8.2.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir bilim merkezinde DNA'nın kendini eşlemesi büyük bir maketle canlandırılmaktadır. Gösteride, eşlenme sırasında bir bazın karşısına kural dışı bir baz yerleştirildiği, hücrenin ise bu hatayı fark ederek yanlış bazı çıkarıp yerine kurala uygun olanı koyduğu anlatılmaktadır.
**Buna göre bu gösteriye dayanarak aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: [
    "Eşlenme sırasında bazlar yanlış yerleştirilebilir.",
    "Oluşan hataların bir kısmı hücre tarafından onarılabilir.",
    "Onarımdan sonra bazlar eşleşme kuralına uygun hâle gelir.",
    "Eşlenme sırasında hiçbir zaman hata oluşmaz."
  ],
  dogru: 3,
  hatalar: [
    "Gösterideki hatayı gözden kaçırma: metinde bir bazın karşısına kural dışı bir baz yerleştirildiği açıkça anlatılmaktadır.",
    "Onarım bölümünü atlama: metinde hücrenin yanlış bazı çıkarıp yerine doğrusunu koyduğu belirtilmiştir.",
    "Onarımın sonucunu atlama: yanlış bazın yerine kurala uygun olanı konduğuna göre son durumda kural sağlanır.",
    null
  ],
  aciklama: `Bu soru "söylenemez" diye soruyor; yani metinle çelişen ifadeyi bulmalısın.
Adım 1: Metni oku. İki olay anlatılıyor: eşlenme sırasında yanlış bir baz yerleştirilmesi ve hücrenin bu hatayı onarması.
Adım 2: İlk üç seçeneği metinle karşılaştır. Hata oluşabilmesi, hatanın onarılabilmesi ve onarımdan sonra kurala uyulması metinde yer alıyor. Üçü de söylenebilir.
Adım 3: Son seçeneğe bak: "hiçbir zaman hata oluşmaz" ifadesi, metinde anlatılan hatanın tam tersidir. Bu, söylenemez.
Sağlama: "Hiçbir zaman", "her zaman" gibi kesin ifadeler gördüğünde metinde bunun tersine bir örnek olup olmadığını kontrol et.
Sık yapılan hata: "Söylenemez" sorularında metne uyan ilk seçeneği işaretlemek. Burada aranan, metne uymayan tek seçenektir.
Cevap D.`
},
{
  id: "fen-dn-011",
  kazanim: "F.8.2.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir adli tıp laboratuvarına K, L ve M olarak adlandırılan üç DNA örneği gelmiştir. Üç örnekte de aynı bölge incelenmiş ve karşılaştırma sonuçları tabloda verilmiştir.
Buna göre;
I. K ve L aynı kişiden alınmıştır.
II. K ve M farklı kişilerden alınmıştır.
III. L ile M'nin incelenen bölgedeki baz dizilimleri birbirinden farklıdır.
**yargılarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Karşılaştırılan örnekler</th><th>İncelenen bölgedeki baz dizilimi</th></tr><tr><td>K ile L</td><td>Aynı</td></tr><tr><td>K ile M</td><td>Farklı</td></tr></table>`,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III. yargıyı atlama: K ile L aynı, K ile M farklı olduğuna göre L ile M de kesinlikle farklıdır.",
    "I. yargıyı kesin sayma: tek bir bölgenin aynı çıkması iki örneğin aynı kişiye ait olduğunu kanıtlamaz; başka kişilerde de o bölge aynı olabilir.",
    null,
    "I. yargıyı kesin sayma: kimlik belirlemede tek bölgenin uyması yetmez. Farklılık kesin bilgi verir, benzerlik ise olasılık verir."
  ],
  aciklama: `"Kesinlikle doğrudur" sorularında, verilenden zorunlu olarak çıkan yargılar seçilir; olasılık bildirenler elenir.
Adım 1: Tabloyu oku. K ile L'nin dizilimi aynı, K ile M'nin dizilimi farklıdır.
Adım 2: I. yargıyı incele. Tek bir bölgenin aynı çıkması aynı kişi olmayı kanıtlamaz; iki ayrı kişinin de o bölgesi aynı olabilir. Bu yüzden "aynı kişiden alınmıştır" kesin değildir, yalnızca olabilir. I elenir.
Adım 3: II. yargıyı incele. Dizilimler farklı çıktıysa bu iki örnek aynı kişiye ait olamaz; çünkü bir kişinin bütün hücrelerinde aynı dizilim bulunur. II kesinlikle doğrudur.
Adım 4: III. yargıyı incele. K ile L aynıdır. K ile M farklıdır. Öyleyse L de M'den farklıdır. III kesinlikle doğrudur.
Adım 5: Kesinlikle doğru olanlar II ve III'tür.
Sağlama: L'yi K'nin yerine koy. K ≠ M olduğuna ve L = K olduğuna göre L ≠ M olmak zorundadır.
Sık yapılan hata: Aynı çıkan sonucu kanıt, farklı çıkan sonucu ise ihtimal sanmak. Tam tersidir: farklılık kesin ayırır, benzerlik yalnızca ihtimal verir.
Cevap C.`
},
{
  id: "fen-dn-012",
  kazanim: "F.8.2.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir ıslah merkezinde, X ve Y olarak adlandırılan iki buğday çeşidinin yaprak hücreleri incelenmiştir. İnceleme sonuçları tabloda verilmiştir.
Buna göre;
I. X ve Y'nin hücrelerindeki kalıtsal bilgiler birbirinin tamamen aynısı değildir.
II. Kromozom sayıları eşit olduğu için X ve Y'nin DNA'ları da birbirinin aynısıdır.
III. X ve Y'nin DNA'larında birbirinden farklı çeşitte organik bazlar bulunmaktadır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>İncelenen özellik</th><th>X çeşidi</th><th>Y çeşidi</th></tr><tr><td>Bir hücredeki kromozom sayısı</td><td>42</td><td>42</td></tr><tr><td>İncelenen gen bölgesindeki baz dizilimi</td><td>A – T – G – C – A</td><td>A – T – C – G – A</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 0,
  hatalar: [
    null,
    "I ile II'yi ters değerlendirme: tabloda baz dizilimleri farklıdır, bu yüzden DNA'lar aynı olamaz.",
    "I ile II'yi birlikte doğru sayma: bu iki yargı birbiriyle çelişir. Dizilimler farklıysa DNA'lar aynı değildir.",
    "III. yargıyı doğru sayma: iki dizilimde de A, T, G ve C bazları bulunmaktadır; farklı olan baz çeşitleri değil, bazların sırasıdır."
  ],
  aciklama: `Kromozom sayısı ile DNA'nın baz dizilimi ayrı bilgilerdir. Aynı türün farklı çeşitlerinde kromozom sayısı eşit olsa bile diziliş farklı olabilir.
Adım 1: Tabloyu oku. Kromozom sayıları eşittir (42 ve 42), ancak incelenen gen bölgesindeki dizilimler farklıdır: A – T – G – C – A ile A – T – C – G – A. Üçüncü ve dördüncü sıralar yer değiştirmiştir.
Adım 2: I. yargıyı incele. Dizilimler farklı olduğuna göre taşınan kalıtsal bilgiler tamamen aynı değildir. I doğrudur.
Adım 3: II. yargıyı incele. Kromozom sayısının eşit olması DNA'ların aynı olduğunu göstermez; tablo tam tersini gösteriyor. II yanlıştır.
Adım 4: III. yargıyı incele. Her iki dizilimde de A, T, G ve C bazları vardır. Baz çeşitleri değil, sıraları farklıdır. III yanlıştır.
Adım 5: Yalnızca I doğrudur.
Sağlama: Aynı harflerle farklı sözcükler yazılabildiğini düşün: "kar" ve "rak" aynı harfleri taşır ama aynı sözcük değildir.
Sık yapılan hata: Kromozom sayısı eşit olan hücrelerin DNA'sını da eşit sanmak. Sayı aynı olabilir, içerik farklıdır.
Cevap A.`
}
);
