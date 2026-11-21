// Türkçe — Cümlenin Ögeleri: Kademe 3 (LGS Ayarı, tur-og-301…310) + Havuz (tur-og-001…006)
// Kazanım: T.8.4.18 Cümlenin ögelerini ayırt eder.
// Ögeler: yüklem, özne, nesne, yer tamlayıcısı (dolaylı tümleç), zarf tamlayıcısı; ayrıca vurgu ve ara söz.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cumlenin-ogeleri"] = window.LGS_BANK["cumlenin-ogeleri"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "tur-og-301",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 3,
  soru: `Şehrin eski çarşısındaki küçük bir çini atölyesi, hafta sonları ücretsiz kurs açıyor. Kursa gelenler önce desen çizmeyi, sonra boyamayı öğreniyor. Aşağıda bu atölyede geçen bir günden dört cümle numaralandırılarak verilmiştir.
**Buna göre, numaralanmış cümlelerin hangisinde nesne __yoktur__?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Usta, fırından yeni çıkan tabakları özenle raflara dizdi.</td></tr><tr><td>II</td><td>Kursiyerler, kendi desenlerini önce kâğıda çizdi.</td></tr><tr><td>III</td><td>Atölyenin penceresinden içeriye ılık bir rüzgâr giriyordu.</td></tr><tr><td>IV</td><td>Genç zanaatkâr, son fırçasını mavi boyaya batırdı.</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "I. cümledeki nesneyi gözden kaçırdın: 'Neyi dizdi?' sorusunun karşılığı olan 'fırından yeni çıkan tabakları' söz öbeğinin tamamı nesnedir. Uzun öbeklere de soru sormalısın.",
    "II. cümlede 'kâğıda' sözünü tek tamlayıcı sanıp nesneyi atladın: 'Neyi çizdi?' sorusunun karşılığı 'kendi desenlerini'dir.",
    null,
    "IV. cümlede 'mavi boyaya' sözünü nesne sandın. '-e' ekli bu söz yer tamlayıcısıdır; nesne ise 'Neyi batırdı?' sorusunun karşılığı olan 'son fırçasını'dır."
  ],
  aciklama: `Nesne, yüklemdeki işten etkilenen ögedir. Yükleme 'neyi, kimi' (belirtili nesne) ya da 'ne' (belirtisiz nesne) sorusu sorularak bulunur. '-e, -de, -den' ekli bir söz nesne olamaz.
Adım 1: I. cümlenin yüklemi 'dizdi'. 'Neyi dizdi?' → 'fırından yeni çıkan tabakları'. Nesne var.
Adım 2: II. cümlenin yüklemi 'çizdi'. 'Neyi çizdi?' → 'kendi desenlerini'. Nesne var. 'kâğıda' sözü 'Nereye çizdi?' sorusunun karşılığıdır, yani yer tamlayıcısıdır.
Adım 3: IV. cümlenin yüklemi 'batırdı'. 'Neyi batırdı?' → 'son fırçasını'. Nesne var. 'mavi boyaya' yine yer tamlayıcısıdır.
Adım 4: III. cümlenin yüklemi 'giriyordu'. 'Ne giriyordu?' diye sorunca 'ılık bir rüzgâr' cevabını alırsın; ama bu söz işi yapan ögedir, yani öznedir. Bu cümleye 'Neyi giriyordu?' diye sorulamaz. Geriye 'atölyenin penceresinden' ve 'içeriye' yer tamlayıcıları kalır; nesne yoktur.
Sık yapılan hata: 'Ne?' sorusunun cevabını görür görmez nesne demek. Önce 'İşi yapan kim/ne?' diye sorup özneyi ayır; geriye kalan 'ne' cevabı nesnedir.
Cevap C.`
},
{
  id: "tur-og-302",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulda kurulan onarım kulübü, çöpe atılmak üzere olan elektronik eşyaları ücretsiz tamir ediyor. Kulüp, topladığı cihazları önce ayırıyor, sonra çalışır duruma getiriyor. Aşağıda bu kulüple ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisinde ögelerin sıralanışı diğer üçünden farklıdır?**`,
  gorsel: null,
  secenekler: [
    "Kulübün yazılımını geçen hafta gönüllü bir öğrenci güncelledi.",
    "Mahalledeki gönüllü gençler eski bilgisayarları sabırla topluyor.",
    "Bu küçük atölye kırık ekranları ustalıkla değiştiriyor.",
    "Deneyimli eğitmen bütün eski cihazları tek tek deniyor."
  ],
  dogru: 0,
  hatalar: [
    null,
    "B'de 'Mahalledeki' sözündeki '-de' ekine bakıp bu sözü ayrı bir yer tamlayıcısı sandın. '-deki' eki burada 'gençler'i niteleyen bir sıfat yapmıştır; ayrı bir öge değildir.",
    "C'de 'Bu küçük atölye' sözünü yer tamlayıcısı sandın. Bu söz hâl eki almamıştır ve işi yapan ögedir, yani öznedir.",
    "D'de 'Deneyimli eğitmen' ile 'bütün eski cihazları' sözlerinin yerini karıştırdın: cümle özneyle başlar, nesne ondan sonra gelir."
  ],
  aciklama: `Ögelerin sıralanışını bulmak için önce yüklemi bul, sonra yükleme 'Kim/ne yapıyor?' (özne), 'Neyi/ne?' (nesne), 'Nerede, nereye, nereden?' (yer tamlayıcısı), 'Nasıl, ne zaman?' (zarf tamlayıcısı) sorularını sor.
Adım 1: A'nın yüklemi 'güncelledi'. 'Kim güncelledi?' → 'gönüllü bir öğrenci' (özne). 'Neyi güncelledi?' → 'Kulübün yazılımını' (nesne). 'Ne zaman?' → 'geçen hafta' (zarf tamlayıcısı). Sıralanış: nesne – zarf tamlayıcısı – özne – yüklem.
Adım 2: B'nin yüklemi 'topluyor'. Özne 'Mahalledeki gönüllü gençler', nesne 'eski bilgisayarları', zarf tamlayıcısı 'sabırla'. Sıralanış: özne – nesne – zarf tamlayıcısı – yüklem.
Adım 3: C'nin yüklemi 'değiştiriyor'. Özne 'Bu küçük atölye', nesne 'kırık ekranları', zarf tamlayıcısı 'ustalıkla'. Sıralanış: özne – nesne – zarf tamlayıcısı – yüklem.
Adım 4: D'nin yüklemi 'deniyor'. Özne 'Deneyimli eğitmen', nesne 'bütün eski cihazları', zarf tamlayıcısı 'tek tek'. Sıralanış: özne – nesne – zarf tamlayıcısı – yüklem.
Adım 5: B, C ve D'nin sıralanışı birebir aynıdır: özne – nesne – zarf tamlayıcısı – yüklem. A'da ise cümle nesneyle başlar, özne yüklemin hemen önüne geçer. Farklı olan A'dır.
Sık yapılan hata: Cümlenin başındaki sözü koşulsuz özne saymak. Baştaki söz '-ı, -i, -u, -ü' ekini almışsa o, nesnedir.
Cevap A.`
},
{
  id: "tur-og-303",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sahil kentinde yıllar önce kaldırılan tramvay hattı yeniden çalışmaya başladı. Tek vagonlu kırmızı tramvay, sabahtan akşama sahil boyunca gidip geliyor. Aşağıda bu tramvayla ilgili dört cümle numaralandırılarak verilmiştir.
**Buna göre, numaralanmış cümlelerin hangisinde yer tamlayıcısı __kullanılmamıştır__?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Yolcular, kırmızı vagona ön kapıdan biniyor.</td></tr><tr><td>II</td><td>Bu tramvay, şehrin en dar sokaklarında rahatça ilerliyor.</td></tr><tr><td>III</td><td>Şoför, son durakta bütün yolcuları indirdi.</td></tr><tr><td>IV</td><td>Belediye, eski tramvay hattını geçen yıl yeniden açtı.</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "I. cümledeki 'kırmızı vagona' ve 'ön kapıdan' sözlerini nesne sandın. Bunlar 'Nereye?' ve 'Nereden?' sorularının karşılığıdır; ikisi de yer tamlayıcısıdır.",
    "II. cümlede 'şehrin en dar sokaklarında' söz öbeğini uzun olduğu için öznenin parçası sandın. Bu öbek 'Nerede ilerliyor?' sorusunun karşılığıdır; yer tamlayıcısıdır.",
    "III. cümlede 'son durakta' sözünü zaman bildiren bir zarf sandın. Bu söz 'Ne zaman?' değil 'Nerede indirdi?' sorusunun karşılığıdır; yer tamlayıcısıdır.",
    null
  ],
  aciklama: `Yer tamlayıcısı (dolaylı tümleç), yükleme sorulan 'nereye, nerede, nereden, kime, kimde, kimden' sorularının karşılığıdır ve her zaman '-e, -de, -den' eklerinden birini alır.
Adım 1: I → 'Nereye biniyor?' → 'kırmızı vagona'; 'Nereden biniyor?' → 'ön kapıdan'. İki yer tamlayıcısı var.
Adım 2: II → 'Nerede ilerliyor?' → 'şehrin en dar sokaklarında'. Yer tamlayıcısı var.
Adım 3: III → 'Nerede indirdi?' → 'son durakta'. Yer tamlayıcısı var. Bu cümlede ayrıca 'bütün yolcuları' nesnesi bulunur.
Adım 4: IV → Yüklem 'açtı'. Özne 'Belediye', nesne 'eski tramvay hattını', zarf tamlayıcıları 'geçen yıl' ve 'yeniden'. Cümlede '-e, -de, -den' ekli hiçbir söz yoktur; yer tamlayıcısı kullanılmamıştır.
Sık yapılan hata: '-e, -de, -den' eki alan her sözü yer tamlayıcısı saymak da yanlıştır. 'Son saniyede, bir anda' gibi zaman bildiren sözler '-de' eki alsa bile zarf tamlayıcısıdır. Önce soruyu sor, sonra karar ver.
Cevap D.`
},
{
  id: "tur-og-304",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun basketbol takımı, ilçe turnuvasının yarı finaline kaldı. Türkçe öğretmeni, maçla ilgili dört cümleyi tahtaya yazmış; bir öğrenci de koyu yazılmış sözlerin hangi öge olduğunu tabloya işlemiştir.
**Buna göre, öğrenci hangi cümledeki koyu sözün ögesini yanlış yazmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th><th>Öğrencinin yazdığı öge</th></tr><tr><td>I</td><td><b>Antrenör</b>, yeni taktiği tahtada tek tek anlattı.</td><td>özne</td></tr><tr><td>II</td><td>Takım kaptanı, <b>son saniyede</b> üç sayılık bir atış yaptı.</td><td>yer tamlayıcısı</td></tr><tr><td>III</td><td>Yedek oyuncular, maçı <b>tribünün ilk sırasından</b> izledi.</td><td>yer tamlayıcısı</td></tr><tr><td>IV</td><td>Genç forvet, <b>yeni ayakkabılarını</b> ilk kez giydi.</td><td>nesne</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "I'deki 'Antrenör' sözünü, hâl eki almadığı için nesne sandın. Bu söz 'Kim anlattı?' sorusunun karşılığıdır; öznedir ve tablodaki yazı doğrudur.",
    null,
    "III'teki 'tribünün ilk sırasından' sözünü, uzun bir tamlama olduğu için zarf sandın. 'Nereden izledi?' sorusunun karşılığıdır; tablodaki 'yer tamlayıcısı' yazısı doğrudur.",
    "IV'teki 'yeni ayakkabılarını' sözünü, iyelik eki taşıdığı için özne sandın. 'Neyi giydi?' sorusunun karşılığıdır; tablodaki 'nesne' yazısı doğrudur."
  ],
  aciklama: `Bir sözün hangi öge olduğunu aldığı ek değil, yükleme sorduğun soru belirler. '-de' ekli bir söz 'Nerede?' sorusuna cevap veriyorsa yer tamlayıcısı, 'Ne zaman?' sorusuna cevap veriyorsa zarf tamlayıcısıdır.
Adım 1: I → Yüklem 'anlattı'. 'Kim anlattı?' → 'Antrenör'. Özne. Tablo doğru.
Adım 2: II → Yüklem 'yaptı'. 'Son saniyede' sözüne 'Nerede yaptı?' diye sorulmaz; bu söz 'Ne zaman yaptı?' sorusunun karşılığıdır. Öyleyse yer tamlayıcısı değil, zarf tamlayıcısıdır. Öğrenci burada yanılmıştır.
Adım 3: III → Yüklem 'izledi'. 'Nereden izledi?' → 'tribünün ilk sırasından'. Yer tamlayıcısı. Tablo doğru.
Adım 4: IV → Yüklem 'giydi'. 'Neyi giydi?' → 'yeni ayakkabılarını'. Nesne. Tablo doğru.
Sık yapılan hata: '-e, -de, -den' ekli sözlerin hepsini yer tamlayıcısı saymak. Söz zaman bildiriyorsa ('bu sabah', 'son saniyede', 'akşamları') zarf tamlayıcısıdır.
Cevap B.`
},
{
  id: "tur-og-305",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 3,
  soru: `Bir şehirde açılan el sanatları sergisinde hem ustalar hem de kursiyerler eserlerini tanıtıyor. Bir cümlede, bir ögeden hemen sonra gelip onu açıklayan ve iki virgül arasına alınan söze ara söz denir. Aşağıdaki şemada buna bir örnek verilmiştir.
**Buna göre, aşağıdaki cümlelerin hangisinde ara söz, cümlenin öznesini açıklamaktadır?**`,
  gorsel: `<svg viewBox="0 0 560 190" role="img" aria-label="Örnek cümle: Duvardaki tabloyu, o büyük manzarayı, herkes izledi. Nesne olan 'Duvardaki tabloyu' sözünü, ara söz olan 'o büyük manzarayı' sözü açıklıyor."><path d="M247 60 C 247 22, 95 22, 95 58" fill="none" stroke="var(--vurgu)" stroke-width="2.5"/><polygon points="89,50 101,50 95,62" fill="var(--vurgu)"/><text x="171" y="18" font-size="15" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">açıklıyor</text><rect x="20" y="64" width="150" height="38" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="176" y="64" width="150" height="38" rx="6" fill="none" stroke="var(--vurgu)" stroke-width="2.5"/><g font-size="15" fill="currentColor"><text x="95" y="89" text-anchor="middle">Duvardaki tabloyu,</text><text x="251" y="89" text-anchor="middle">o büyük manzarayı,</text><text x="338" y="89">herkes izledi.</text></g><g font-size="15" text-anchor="middle" font-weight="bold"><text x="95" y="128" fill="currentColor">nesne</text><text x="251" y="128" fill="var(--vurgu)">ara söz</text></g><text x="280" y="168" font-size="15" text-anchor="middle" fill="currentColor">Ara söz, kendinden önce gelen ögeyi açıklar.</text></svg>`,
  secenekler: [
    "Atölyenin en eski ustası, Rıfat Usta, bakır tepsileri hâlâ elde dövüyor.",
    "Sergideki en büyük eseri, o rengârenk çini panoyu, herkes uzun uzun izledi.",
    "Kursiyerler, atölyenin arka odasına, boya deposuna, izinsiz girmiyor.",
    "Usta, bu işi yıllardır aynı sabırla, hiç acele etmeden, sürdürüyor."
  ],
  dogru: 0,
  hatalar: [
    null,
    "B'de ara sözün açıkladığı 'Sergideki en büyük eseri' sözünü özne sandın. Bu söz '-i' ekini almıştır ve 'Neyi izledi?' sorusunun karşılığıdır; nesnedir. Cümlenin öznesi 'herkes'tir.",
    "C'de ara sözün açıkladığı 'atölyenin arka odasına' sözünü özne sandın. Bu söz 'Nereye girmiyor?' sorusunun karşılığıdır; yer tamlayıcısıdır. Cümlenin öznesi 'Kursiyerler'dir.",
    "D'de ara sözün açıkladığı 'aynı sabırla' sözünü özne sandın. Bu söz 'Nasıl sürdürüyor?' sorusunun karşılığıdır; zarf tamlayıcısıdır. Cümlenin öznesi 'Usta'dır."
  ],
  aciklama: `Ara söz, kendinden önce gelen ögeyi açıklar. Bu yüzden ara sözün hangi ögeyi açıkladığını bulmak için, hemen öncesindeki söze yüklemden hangi sorunun sorulduğuna bakarsın.
Adım 1: A → Yüklem 'dövüyor'. 'Kim dövüyor?' → 'Atölyenin en eski ustası'. Bu, öznedir; hemen ardından gelen 'Rıfat Usta' ara sözü onu açıklar. Aranan cümle budur.
Adım 2: B → Yüklem 'izledi'. 'Kim izledi?' → 'herkes' (özne). Ara sözün açıkladığı 'Sergideki en büyük eseri' ise 'Neyi izledi?' sorusunun karşılığıdır, yani nesnedir.
Adım 3: C → 'Nereye girmiyor?' → 'atölyenin arka odasına'. Ara söz burada bir yer tamlayıcısını açıklar.
Adım 4: D → 'Nasıl sürdürüyor?' → 'aynı sabırla'. Ara söz burada bir zarf tamlayıcısını açıklar.
Sağlama: A'da 'Atölyenin en eski ustası' ile 'Rıfat Usta' sözlerinin ikisi de aynı kişiyi, yani işi yapanı gösterir. İkisi birlikte cümlenin öznesini kurar.
Sık yapılan hata: Ara sözün kendinden sonra gelen ögeyi açıkladığını sanmak. Ara söz her zaman kendinden önceki ögeyi açıklar ve o ögeyle aynı eki alır.
Cevap A.`
},
{
  id: "tur-og-306",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun kodlama kulübü, yıl boyunca hazırladığı işleri tanıtmak için küçük bir gösteri düzenledi. Gösteride öğrenciler hem robotlarını hem de yazdıkları oyunları anlattı. Aşağıda bu gösteriyle ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisinde vurgulanan öge zarf tamlayıcısıdır?**`,
  gorsel: null,
  secenekler: [
    "Öğrenciler, hazırladıkları tanıtım videosunu büyük salonda izledi.",
    "Turnuvanın kurallarını bu sabah kulüp başkanı açıkladı.",
    "Kulüp üyeleri, atölyede küçük bir robot yaptı.",
    "Kodlama kulübü, yeni robotunu geçen hafta tanıttı."
  ],
  dogru: 3,
  hatalar: [
    "A'da yükleme en yakın öge 'büyük salonda'dır. Bu söz 'Nerede izledi?' sorusunun karşılığı olduğu için yer tamlayıcısıdır, zarf tamlayıcısı değildir.",
    "B'de yükleme en yakın öge 'kulüp başkanı'dır. Bu söz 'Kim açıkladı?' sorusunun karşılığı olduğu için öznedir. Cümlede zarf tamlayıcısı ('bu sabah') vardır ama vurgulanan öge o değildir.",
    "C'de yükleme en yakın öge 'küçük bir robot'tur. Bu söz 'Ne yaptı?' sorusunun karşılığı olduğu için nesnedir.",
    null
  ],
  aciklama: `Kurallı bir cümlede vurgulanan, yani öne çıkarılan öge yükleme en yakın olan ögedir. Bu yüzden önce yüklemi bul, sonra hemen önündeki ögeyi belirle ve ona hangi sorunun sorulduğuna bak.
Adım 1: A → Yüklem 'izledi'. Hemen önündeki öge 'büyük salonda'. 'Nerede?' sorusunun karşılığı: yer tamlayıcısı.
Adım 2: B → Yüklem 'açıkladı'. Hemen önündeki öge 'kulüp başkanı'. 'Kim?' sorusunun karşılığı: özne.
Adım 3: C → Yüklem 'yaptı'. Hemen önündeki öge 'küçük bir robot'. 'Ne?' sorusunun karşılığı: nesne.
Adım 4: D → Yüklem 'tanıttı'. Hemen önündeki öge 'geçen hafta'. 'Ne zaman?' sorusunun karşılığı: zarf tamlayıcısı. Aranan cümle budur.
Sağlama: D'deki ögelerin yerini değiştirip 'Kodlama kulübü, geçen hafta yeni robotunu tanıttı.' dersen bu kez nesne vurgulanır. Demek ki vurgu, ögenin yüklemle arasındaki uzaklığa bağlıdır.
Cevap D.`
},
{
  id: "tur-og-307",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 4,
  soru: `Geleneksel Türk okçuluğunda kiriş başparmakla çekilir; parmağı korumak için de “zihgir” adı verilen bir yüzük takılır. Kısa mesafe atışlarında kullanılan, armut biçimli deri hedefe ise “puta” denir. Geçen pazar şehrimizin eski ok meydanında bir puta yarışması vardı; ben de seyircilerin arasında, en ön sıradaydım. Davulun sesi kesilince yarışma başladı; okçular sırayla atış çizgisine geliyor, her biri üç ok atıyordu. (I) Yarışmanın en genç okçusu, nefesini tutarak okunu putanın tam ortasına yolladı. Meydandan bir alkış koptu; okun putaya saplanırken çıkardığı tok ses bana kadar geldi. (II) Hedefin yanında bekleyen görevli, putaya saplanan okları tek tek sadağa yerleştirdi. Atışlar böyle saatlerce sürdü. (III) Baş hakem, düdüğünü iki kez çalarak bütün atışları öğle arasında durdurdu. Bir saatlik aradan sonra sıra finaldeydi. (IV) Yayını kendi eliyle yapan yaşlı okçu, atış çizgisine gelmeden önce yeni kirişi yayın iki ucuna taktı. Son okunu attığında meydanda çıt çıkmıyordu; kupayı o kazandı.

**Buna göre numaralanmış cümlelerden hangi ikisinin öge dizilişi aynıdır?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve IV", "II ve III", "III ve IV"],
  dogru: 1,
  hatalar: ["Sırayı denetlememe: I ile II aynı ögeleri taşır ama II'de nesne (“putaya saplanan okları”) zarf tamlayıcısından (“tek tek”) önce gelir; I'de zarf tamlayıcısı (“nefesini tutarak”) nesneden öncedir.", null, "Hem sırayı hem öge türünü gözden kaçırma: II'de nesne zarf tamlayıcısından önce gelir ve cümlede yer tamlayıcısı (“sadağa”) vardır; III'te ise sıra farklıdır ve yer tamlayıcısı yoktur.", "“-de” ekli zaman sözünü yer tamlayıcısı sanma: III'teki “öğle arasında” sözü “Ne zaman durdurdu?” sorusunun cevabıdır, zarf tamlayıcısıdır; IV'teki “yayın iki ucuna” sözü ise yer tamlayıcısıdır."],
  aciklama: `Öge dizilişini karşılaştırmak için her cümlede önce yüklemi bulur, sonra yükleme sorular sorarsın. Fiilimsiyle kurulan söz öbeği bölünmez; tamamı tek ögedir. İki cümlenin dizilişinin aynı olması için ögelerin hem türü hem sırası tutmalıdır.
Adım 1: I → Yüklem “yolladı”. Kim yolladı? “Yarışmanın en genç okçusu” (özne). Nasıl yolladı? “nefesini tutarak” (zarf tamlayıcısı). Neyi? “okunu” (nesne). Nereye? “putanın tam ortasına” (yer tamlayıcısı). Diziliş: özne – zarf tamlayıcısı – nesne – yer tamlayıcısı – yüklem.
Adım 2: II → Yüklem “yerleştirdi”. Özne “Hedefin yanında bekleyen görevli”, nesne “putaya saplanan okları”, zarf tamlayıcısı “tek tek”, yer tamlayıcısı “sadağa”. Diziliş: özne – nesne – zarf tamlayıcısı – yer tamlayıcısı – yüklem. Ögeler I ile aynı, sıra farklı.
Adım 3: III → Yüklem “durdurdu”. Özne “Baş hakem”, zarf tamlayıcısı “düdüğünü iki kez çalarak”, nesne “bütün atışları”. “öğle arasında” sözü “Ne zaman durdurdu?” sorusunun cevabıdır; “-de” ekini alsa da zarf tamlayıcısıdır. Diziliş: özne – zarf tamlayıcısı – nesne – zarf tamlayıcısı – yüklem.
Adım 4: IV → Yüklem “taktı”. Özne “Yayını kendi eliyle yapan yaşlı okçu” (öbeğin tamamı). Ne zaman taktı? “atış çizgisine gelmeden önce” (zarf tamlayıcısı). Neyi? “yeni kirişi” (nesne). Nereye? “yayın iki ucuna” (yer tamlayıcısı). Diziliş: özne – zarf tamlayıcısı – nesne – yer tamlayıcısı – yüklem.
Adım 5: I ile IV'ün dizilişi aynıdır. III bu ikisine çok benzer ama son tamlayıcısı yer değil, zaman bildirir.
Sık yapılan hata: IV. cümlede “Yayını” ve “atış çizgisine” sözlerini ayrı öge saymak. Biri “yapan”, öbürü “gelmeden” fiilimsisine bağlıdır; yükleme “Nereye taktı?” diye sorduğunda tek cevap “yayın iki ucuna” sözüdür.
Cevap B.`
},
{
  id: "tur-og-308",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 4,
  soru: `Her yıl binlerce kişinin gezdiği bir mağaranın girişinde, ziyaretçileri şu bilgi panosu karşılar:

“Mağaramıza hoş geldiniz! Bu mağara, yer altı sularının binlerce yıllık eseridir. Tavandan sarkan oluşumlara sarkıt denir. (I) Tabandan yukarı doğru yükselen kalın oluşumların adı ise dikittir. Sarkıt ile dikit birleşince sütun oluşur. (II) Bu mağaradaki sarkıtların boyu, yüz yılda ancak bir santimetre uzar. (III) Parmak uçlarımızdaki yağ, taşların büyümesine engel olur. (IV) Görevlilerimiz, gişenin önünde bekleyen her ziyaretçiye pamuklu iş eldiveni verir. Lütfen eldivensiz hiçbir yere dokunmayın. (V) Mağaranın içindeki havanın sıcaklığı yaz kış on dört derecedir. Yanınızda ince bir hırka bulunsun. (VI) Büyük salonun yarasaları kasımdan marta kadar derin bir uykudadır. (VII) Fotoğraf makinelerinin flaşı, bu uykunun en büyük düşmanıdır. Lütfen flaş kullanmayın, fısıltıyla konuşun. Hepinize iyi gezmeler dileriz!”

Bu panoyu inceleyen bir öğrenci, numaralanmış yedi cümleyi ögelerine ayırmış ve aşağıdaki ögelerden birinin bu cümlelerde hiç geçmediğini fark etmiştir.

**Buna göre aşağıdaki ögelerden hangisi, numaralanmış cümlelerin hiçbirinde __kullanılmamıştır__?**`,
  gorsel: null,
  secenekler: ["Yer tamlayıcısı", "Zarf tamlayıcısı", "Belirtili nesne", "Belirtisiz nesne"],
  dogru: 2,
  hatalar: ["Yer tamlayıcısını yalnızca yer adı sanma: III. cümledeki “taşların büyümesine” sözü “Neye engel olur?”, IV. cümledeki “gişenin önünde bekleyen her ziyaretçiye” sözü “Kime verir?” sorusunun cevabıdır; ikisi de yer tamlayıcısıdır.", "Ekli zaman sözlerini yer tamlayıcısı sayma: “yüz yılda” ve “kasımdan marta kadar” sözleri ile eksiz “yaz kış” sözü “Ne zaman?” sorusunun cevabıdır; II, V ve VI. cümlelerde zarf tamlayıcısı vardır.", null, "İyelik ekini belirtme eki sanma: IV. cümledeki “pamuklu iş eldiveni” sözünün sonundaki “-i” tamlama kuran iyelik ekidir; söz hâl eki almamıştır, “Ne verir?” sorusunun cevabıdır ve belirtisiz nesnedir."],
  aciklama: `Bir ögenin cümlede bulunup bulunmadığını anlamak için eke değil, yükleme sorduğun soruya bakarsın. Belirtili nesne “Neyi? Kimi?” sorusuna cevap verir ve “-ı, -i, -u, -ü” belirtme ekini alır. Aynı seslerle kurulan iyelik eki (sarkıtların boyu, havanın sıcaklığı) seni yanıltmasın. Yedi cümleyi sırayla ögelerine ayır.
Adım 1: I → Yüklem “dikittir”. Ne dikittir? “Tabandan yukarı doğru yükselen kalın oluşumların adı” (özne). Başka öge yok.
Adım 2: II → Yüklem “uzar”. Ne uzar? “Bu mağaradaki sarkıtların boyu” (özne). Ne kadar sürede? “yüz yılda” (zarf tamlayıcısı). Ne kadar? “ancak bir santimetre” (zarf tamlayıcısı).
Adım 3: III → Yüklem “engel olur”. Ne engel olur? “Parmak uçlarımızdaki yağ” (özne). Neye engel olur? “taşların büyümesine” (yer tamlayıcısı).
Adım 4: IV → Yüklem “verir”. Kim verir? “Görevlilerimiz” (özne). Kime verir? “gişenin önünde bekleyen her ziyaretçiye” (yer tamlayıcısı). Ne verir? “pamuklu iş eldiveni”. Bu söz hâl eki almamıştır; sondaki “-i”, “iş eldiveni” tamlamasını kuran iyelik ekidir. Belirtme ekini alsaydı “eldivenini” olurdu. Öyleyse belirtisiz nesnedir.
Adım 5: V → Yüklem “on dört derecedir”. Özne “Mağaranın içindeki havanın sıcaklığı”, zarf tamlayıcısı “yaz kış” (Ne zaman?).
Adım 6: VI → Yüklem “derin bir uykudadır”. Özne “Büyük salonun yarasaları”, zarf tamlayıcısı “kasımdan marta kadar” (Ne zaman?).
Adım 7: VII → Yüklem “bu uykunun en büyük düşmanıdır”. Ne, bu uykunun en büyük düşmanıdır? “Fotoğraf makinelerinin flaşı” (özne). Başka öge yok.
Adım 8: Topla. Yer tamlayıcısı III ve IV'te, zarf tamlayıcısı II, V ve VI'da, belirtisiz nesne IV'te var. “Neyi? Kimi?” sorusuna ise yedi cümlenin hiçbiri cevap vermiyor; belirtili nesne hiç kullanılmamış.
Sık yapılan hata: “adı, boyu, sıcaklığı, yarasaları, flaşı, iş eldiveni” sözlerinin son sesine bakıp bunları belirtili nesne saymak. Bu sözlerdeki ek iyelik ekidir; ilk beşi öznenin, sonuncusu belirtisiz nesnenin son sözüdür. Yükleme “Neyi?” diye sor: cevap alamıyorsan belirtili nesne yoktur.
Cevap C.`
},
{
  id: "tur-og-309",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 4,
  soru: `Görme engelli okurlar için hazırlanan sesli kitapların çoğu, gönüllülerin emeğiyle ortaya çıkar. Gönüllü olmak için güzel bir sesten çok sabır gerekir: Üç yüz sayfalık bir romanın kaydı yaklaşık on saat sürer. Bir ilçe kütüphanesinin bodrum katındaki küçük stüdyoda da her hafta yeni bir kitap seslendiriliyor. Gönüllüler kitabı bölüm bölüm okuyor; kayıtlar düzeltildikten sonra üyeler kitapları telefonlarından dinleyebiliyor. Bu stüdyodaki çalışmayı anlatan dört cümle şöyledir:

(I) Duvarları süngerle kaplı odaya giren gönüllü, önündeki romanı ağır ağır okuyor. (II) Ses teknisyeni, kayda karışan öksürükleri yan odada tek tek ayıklıyor. (III) Kütüphane görevlisi, düzeltilen bölümleri akşam olmadan telefon uygulamasına yüklüyor. (IV) Kitabı telefonundan dinleyen bir okur, geçen hafta gönüllülere uzun bir teşekkür mesajı gönderdi.

Bu cümleleri inceleyen üç öğrenci şunları söylemiştir:

**Ilgın:** I. cümlede yer tamlayıcısı yoktur, III. cümlede vardır.
**Kaan:** II. ve IV. cümleler aynı sayıda ögeden oluşur.
**Mert:** III. cümlede belirtili nesne, IV. cümlede ise hem belirtili hem belirtisiz nesne vardır.

**Buna göre hangi öğrencilerin söyledikleri doğrudur?**`,
  gorsel: null,
  secenekler: ["Ilgın ve Kaan", "Ilgın ve Mert", "Kaan ve Mert", "Ilgın, Kaan ve Mert"],
  dogru: 0,
  hatalar: [null, "Fiilimsi öbeğini bölme: IV. cümledeki “Kitabı” sözü “dinleyen” fiilimsisine bağlıdır ve öznenin içinde kalır; cümlenin tek nesnesi belirtisiz olan “uzun bir teşekkür mesajı”dır. Mert yanılmış, Kaan ise doğru saymıştır.", "Eke bakıp Ilgın'ı yanlış sayma: I. cümledeki “odaya” sözü “giren” fiilimsisine bağlıdır, öznenin içindedir; I'de yer tamlayıcısı gerçekten yoktur. Mert de “Kitabı” sözünü nesne sayarak yanılmıştır.", "Yargının yarısını denetleme: Mert'in III. cümleyle ilgili sözü doğrudur ama IV. cümlede “Kitabı telefonundan dinleyen bir okur” tek ögedir (özne); “Kitabı” cümlenin belirtili nesnesi değildir."],
  aciklama: `Bir öge, yükleme bağlanan sözün tamamıdır. Fiilimsiyle kurulan söz öbeği bölünmez; içindeki “-ı” ya da “-e” ekli sözler cümlenin ayrı ögesi olmaz. Üç öğrencinin sözünü sınamak için önce dört cümleyi ögelerine ayır.
Adım 1: I → Yüklem “okuyor”. Özne “Duvarları süngerle kaplı odaya giren gönüllü”, nesne “önündeki romanı”, zarf tamlayıcısı “ağır ağır”. “odaya” sözü “giren” fiilimsisine bağlıdır; yer tamlayıcısı yok.
Adım 2: II → Yüklem “ayıklıyor”. Özne “Ses teknisyeni”, nesne “kayda karışan öksürükleri”, yer tamlayıcısı “yan odada”, zarf tamlayıcısı “tek tek”. Yüklemle birlikte beş öge.
Adım 3: III → Yüklem “yüklüyor”. Özne “Kütüphane görevlisi”, belirtili nesne “düzeltilen bölümleri”, zarf tamlayıcısı “akşam olmadan”, yer tamlayıcısı “telefon uygulamasına”.
Adım 4: IV → Yüklem “gönderdi”. Özne “Kitabı telefonundan dinleyen bir okur”, zarf tamlayıcısı “geçen hafta”, yer tamlayıcısı “gönüllülere”, belirtisiz nesne “uzun bir teşekkür mesajı”. Yüklemle birlikte beş öge.
Adım 5: Ilgın → I'de yer tamlayıcısı yok, III'te var: doğru. Kaan → II de IV de beş ögeli: doğru. Mert → III'te belirtili nesne var ama IV'te belirtili nesne yok; “Kitabı” sözü öznenin içindedir: yanlış.
Sık yapılan hata: “-ı” ekini gördüğün her sözü cümlenin nesnesi saymak. “Kitabı” sözüne “Neyi gönderdi?” diye soramazsın; o, “Neyi dinleyen?” sorusunun cevabıdır, yani fiilimsiye bağlıdır.
Cevap A.`
},
{
  id: "tur-og-310",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 4,
  soru: `Vaşak, ormanlarımızın en zor görülen memelilerindendir: Gündüzleri sık çalılıklarda dinlenir, çoğunlukla alaca karanlıkta ve gece avlanır. Bu yüzden araştırmacılar onu gözle değil, fotokapanla izler. Fotokapan, önünden geçen canlının hareketini ve vücut ısısını algılayınca kendiliğinden fotoğraf çeken bir kameradır. Pille çalışır, çektiği kareleri küçük bir hafıza kartına kaydeder. Bir araştırma ekibi, geçen kış bir çam ormanındaki ağaçlara böyle on kamera bağladı. Kameralar, __hafıza kartları dolduğunda__ (I) çekimi kendiliğinden durduruyordu. Ekipteki genç biyolog, __karlar erimeden__ (II) on kartın hepsini topladı. Üçüncü kamera, __pili soğukta çabuk bittiğinden__ (III) tek bir kare bile çekememişti. Öteki kartlarda kar üstünde gezinen tavşanlar, karacalar ve meraklı bir sansar vardı. Dokuzuncu karttaki son karede ise iri bir vaşak, gece yarısından az sonra kameranın bir adım önünde durmuş, doğrudan merceğe bakıyordu. Yöredeki köylüler, yıllardır __bu ormanda vaşak yaşadığından__ (IV) söz ediyordu. Ekip, bunu ilk kez bir fotoğrafla kanıtlamış oldu.

**Bu metindeki altı çizili söz gruplarından hangisinin cümledeki öge görevi diğerlerinden farklıdır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: ["Eki farklı olanı seçme: “hafıza kartları dolduğunda” sözü öbürlerinden farklı olarak “-de” ekini taşır ama “Ne zaman durduruyordu?” sorusunun cevabıdır; II ve III gibi zarf tamlayıcısıdır.", "Hâl eki taşımayanı farklı sanma: “karlar erimeden” sözü “Ne zaman topladı?” sorusunun cevabıdır; ekli görünen I ve III de onun gibi zarf tamlayıcısıdır.", "Aynı ekle biten iki sözü karıştırma: “bittiğinden” ile “yaşadığından” aynı eki taşır ama “pili soğukta çabuk bittiğinden” sözü “Niçin çekememişti?” sorusunun cevabıdır; sebep bildirir, I ve II gibi zarf tamlayıcısıdır.", null],
  aciklama: `Bir söz grubunun hangi öge olduğunu ekine bakarak değil, yükleme sorduğun soruya göre bulursun. Zarf tamlayıcısı işin zamanını, sebebini, nasıl yapıldığını bildirir; yer tamlayıcısı ise “Nereye? Nerede? Nereden? Kime? Neye? Neyden?” sorularına cevap verir. Aynı eki taşıyan iki söz, iki ayrı öge olabilir.
Adım 1: I → Yüklem “durduruyordu”. Ne zaman durduruyordu? “hafıza kartları dolduğunda”. “-de” ekini almış ama zaman bildiriyor: zarf tamlayıcısı.
Adım 2: II → Yüklem “topladı”. Ne zaman topladı? “karlar erimeden”. Zaman bildiriyor: zarf tamlayıcısı.
Adım 3: III → Yüklem “çekememişti”. Niçin çekememişti? “pili soğukta çabuk bittiğinden”. “-den” ekini almış ama sebep bildiriyor: zarf tamlayıcısı.
Adım 4: IV → Yüklem “söz ediyordu”; birden çok sözcükten oluşan yüklem bölünmez. Neyden söz ediyordu? “bu ormanda vaşak yaşadığından”. Bu söz sebep ya da zaman bildirmiyor; söz etme işinin konusunu gösteriyor ve “Neyden?” sorusuna cevap veriyor: yer tamlayıcısı.
Adım 5: III ile IV'ü yan yana koy: “Pili bittiğinden çekememişti.” (Niçin? → zarf tamlayıcısı) · “Vaşak yaşadığından söz ediyordu.” (Neyden? → yer tamlayıcısı). Ek aynı, görev farklı.
Adım 6: I, II ve III zarf tamlayıcısı, IV yer tamlayıcısıdır. Görevi farklı olan IV'tür.
Sık yapılan hata: Biçime bakıp karar vermek, yani “-de” ekli I. söz grubunu ya da eksiz görünen II. söz grubunu “farklı olan” saymak. Öge görevini biçim değil, sözün yükleme hangi soruyla bağlandığı belirler.
Cevap D.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "tur-og-001",
  kazanim: "T.8.4.18",
  kademe: 0,
  zorluk: 2,
  soru: `Kültür merkezinde bir ahşap oymacılığı sergisi açık. Sergide ustaların yıllardır kullandığı eski aletler de yer alıyor.
**Buna göre, aşağıdaki cümlelerin hangisinde nesne kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Küçük kızın gözleri vitrindeki oyuncaklara takıldı.",
    "Ziyaretçiler, ustanın oyma tekniğini merakla izledi.",
    "Yaşlı usta, her sabah erkenden atölyesine geliyor.",
    "Salondaki ışıklar, akşamları daha parlak yanıyor."
  ],
  dogru: 1,
  hatalar: [
    "A'da 'vitrindeki oyuncaklara' sözünü nesne sandın. '-e' ekli bu söz 'Neye takıldı?' sorusunun karşılığıdır; yer tamlayıcısıdır.",
    null,
    "C'de 'atölyesine' sözünü nesne sandın. '-e' ekli bu söz 'Nereye geliyor?' sorusunun karşılığıdır; yer tamlayıcısıdır.",
    "D'de 'Salondaki ışıklar' sözünü nesne sandın. Bu söz 'Ne yanıyor?' sorusunun karşılığıdır ama işi yapan ögedir, yani öznedir."
  ],
  aciklama: `Nesne, yüklemdeki işten etkilenen ögedir. Onu bulmak için önce yüklemi ve özneyi belirle, sonra yükleme 'neyi, kimi' ya da 'ne' diye sor. Nesne ya yalın hâldedir ya da '-ı, -i, -u, -ü' ekini almıştır; '-e, -de, -den' ekli sözler nesne olamaz.
Adım 1: B'ye bak. Yüklem 'izledi'. 'Kim izledi?' → 'Ziyaretçiler' (özne).
Adım 2: 'Neyi izledi?' → 'ustanın oyma tekniğini'. '-i' ekini almış bu söz nesnedir.
Adım 3: Diğerlerini dene: A'da 'oyuncaklara', C'de 'atölyesine' yer tamlayıcısıdır; D'de yalnızca özne ve zarf tamlayıcıları vardır.
Sık yapılan hata: '-e' ekli sözleri nesne sanmak. Nesneye 'neye' değil, 'neyi' diye sorulur.
Cevap B.`
},
{
  id: "tur-og-002",
  kazanim: "T.8.4.18",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okulun bisiklet kulübü, bahar şenliği için mahalle turu düzenledi. Tura yüzden fazla öğrenci katıldı.
**Buna göre, aşağıdaki cümlelerin hangisinde yer tamlayıcısı vardır?**`,
  gorsel: null,
  secenekler: [
    "Kulüp, turun kurallarını dün akşam açıkladı.",
    "Bisikletçiler, uzun bir süre hiç durmadı.",
    "Genç sporcular, bitiş çizgisine birlikte ulaştı.",
    "Yarışın son bölümü herkesi epeyce yordu."
  ],
  dogru: 2,
  hatalar: [
    "A'da 'dün akşam' sözünü yer tamlayıcısı sandın. Bu söz 'Ne zaman açıkladı?' sorusunun karşılığıdır; zarf tamlayıcısıdır.",
    "B'de 'uzun bir süre' sözünü yer tamlayıcısı sandın. Bu söz 'Ne kadar durmadı?' sorusunun karşılığıdır; zarf tamlayıcısıdır.",
    null,
    "D'de 'herkesi' sözünü yer tamlayıcısı sandın. '-i' ekli bu söz 'Kimi yordu?' sorusunun karşılığıdır; nesnedir."
  ],
  aciklama: `Yer tamlayıcısı (dolaylı tümleç), yükleme sorulan 'nereye, nerede, nereden, kime, kimde, kimden' sorularının karşılığıdır. Bu öge her zaman '-e, -de, -den' eklerinden birini alır.
Adım 1: C'ye bak. Yüklem 'ulaştı'. 'Kim ulaştı?' → 'Genç sporcular' (özne).
Adım 2: 'Nereye ulaştı?' → 'bitiş çizgisine'. '-e' ekini almış bu söz yer tamlayıcısıdır. 'birlikte' ise 'Nasıl ulaştı?' sorusunun karşılığıdır; zarf tamlayıcısıdır.
Adım 3: Diğer cümlelerde '-e, -de, -den' ekli hiçbir söz yoktur. A ve B'de zarf tamlayıcıları, D'de nesne bulunur.
Sık yapılan hata: Bu ekleri almayan bir söz yer tamlayıcısı olamaz. Önce eke bak, sonra soruyu sor.
Cevap C.`
},
{
  id: "tur-og-003",
  kazanim: "T.8.4.18",
  kademe: 0,
  zorluk: 3,
  soru: `Şehrin en kalabalık meydanı, akşam saatlerinde bambaşka bir görünüm alıyor. Aşağıda bu meydanla ilgili dört cümle numaralandırılarak verilmiştir.
**Buna göre, numaralanmış cümlelerin hangisi yalnızca iki ögeden oluşmaktadır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Meydanı aydınlatan yüksek direkli lambaların hepsi söndü.</td></tr><tr><td>II</td><td>Akşamüstü caddedeki bütün vitrinler birden aydınlandı.</td></tr><tr><td>III</td><td>Simitçinin sesi o dar sokakta yankılandı.</td></tr><tr><td>IV</td><td>Meydandaki saat kulesi her saat başında çalıyor.</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "II'de 'birden' sözünü yüklemin bir parçası saydın. Bu söz 'Nasıl aydınlandı?' sorusunun karşılığı olduğu için ayrı bir zarf tamlayıcısıdır; 'Akşamüstü' de öyledir. Cümle dört ögeden oluşur.",
    "III'te 'o dar sokakta' sözünü öznenin bir parçası saydın. Bu söz 'Nerede yankılandı?' sorusunun karşılığıdır ve ayrı bir yer tamlayıcısıdır. Cümle üç ögeden oluşur.",
    "IV'te 'her saat başında' sözünü, '-de' ekine bakarak öznenin bir parçası saydın. Bu söz 'Ne zaman çalıyor?' sorusunun karşılığıdır ve ayrı bir zarf tamlayıcısıdır. Cümle üç ögeden oluşur."
  ],
  aciklama: `Bir cümlenin kaç ögeden oluştuğunu bulmak için önce yüklemi işaretle, sonra kalan söz öbeklerine tek tek soru sor. Uzun bir söz öbeği tek bir öge olabilir; sözcük sayısıyla öge sayısı karıştırılmamalıdır.
Adım 1: I → Yüklem 'söndü'. 'Ne söndü?' → 'Meydanı aydınlatan yüksek direkli lambaların hepsi'. Bu uzun öbeğin tamamı öznedir. Soru sorulacak başka söz kalmaz: cümle iki ögeden (özne ve yüklem) oluşur.
Adım 2: II → Yüklem 'aydınlandı'. Özne 'caddedeki bütün vitrinler', zarf tamlayıcıları 'Akşamüstü' ve 'birden'. Dört öge.
Adım 3: III → Yüklem 'yankılandı'. Özne 'Simitçinin sesi', yer tamlayıcısı 'o dar sokakta'. Üç öge.
Adım 4: IV → Yüklem 'çalıyor'. Özne 'Meydandaki saat kulesi', zarf tamlayıcısı 'her saat başında'. Üç öge.
Sık yapılan hata: I. cümledeki 'Meydanı' sözünü cümlenin nesnesi sanmak. O söz cümlenin yüklemine değil, 'aydınlatan' sıfat-fiiline bağlıdır ve öznenin içinde kalır.
Cevap A.`
},
{
  id: "tur-og-004",
  kazanim: "T.8.4.18",
  kademe: 0,
  zorluk: 3,
  soru: `Bir okulun tiyatro topluluğu, yıl sonu oyununa hazırlanıyor. Dekor, kostüm ve ışık işlerini öğrenciler kendileri yapıyor.
**Buna göre, aşağıdaki cümlelerin hangisinde belirtisiz nesne kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Işıkçı, sahnedeki mavi filtreyi dikkatlice değiştirdi.",
    "Yönetmen, oyunun finalini baştan sona yeniden yazdı.",
    "Kostümcü, eski perdeleri şık bir elbiseye çevirdi.",
    "Kulüp üyeleri, sahnenin arkasına büyük bir pano yerleştirdi."
  ],
  dogru: 3,
  hatalar: [
    "A'daki 'sahnedeki mavi filtreyi' sözü '-i' ekini almıştır; bu, belirtili nesnedir. 'sahnedeki' sözündeki '-de' eki ayrı bir öge yapmaz, yalnızca filtreyi niteler.",
    "B'deki 'oyunun finalini' sözü '-i' ekini almıştır; belirtili nesnedir. 'baştan sona' ile 'yeniden' ise zarf tamlayıcısıdır.",
    "C'deki 'eski perdeleri' sözü '-i' ekini almıştır; belirtili nesnedir. '-e' ekli 'şık bir elbiseye' sözü ise yer tamlayıcısıdır.",
    null
  ],
  aciklama: `Nesne iki türlüdür: hiçbir hâl eki almamış, yalın durumdaki nesneye belirtisiz nesne; '-ı, -i, -u, -ü' ekini almış nesneye belirtili nesne denir. Ayırmak için nesneye 'ne?' mi yoksa 'neyi?' mi sorulduğuna bakarsın.
Adım 1: D'ye bak. Yüklem 'yerleştirdi', özne 'Kulüp üyeleri'. 'Ne yerleştirdi?' → 'büyük bir pano'. Bu söz hiçbir hâl eki almamıştır: belirtisiz nesne.
Adım 2: A → 'Neyi değiştirdi?' → 'sahnedeki mavi filtreyi': belirtili nesne.
Adım 3: B → 'Neyi yazdı?' → 'oyunun finalini': belirtili nesne.
Adım 4: C → 'Neyi çevirdi?' → 'eski perdeleri': belirtili nesne. 'şık bir elbiseye' ise yer tamlayıcısıdır.
Sağlama: D'deki nesneyi 'büyük panoyu' biçimine çevirirsen belirtili nesne olur ve hangi panodan söz edildiği belirginleşir. Şimdiki hâlinde pano belirtilmemiştir; bu yüzden belirtisizdir.
Cevap D.`
},
{
  id: "tur-og-005",
  kazanim: "T.8.4.18",
  kademe: 0,
  zorluk: 4,
  soru: `Bir ilçenin amatör futbol takımı, uzun bir aradan sonra şampiyon oldu. Kutlamalar bütün hafta sürdü, ilçedeki okullar da kutlamalara katıldı. Aşağıda bu günlerle ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisinde vurgulanan öge diğer üçünden farklıdır?**`,
  gorsel: null,
  secenekler: [
    "Kupayı takım kaptanı sahnede aldı.",
    "Yeni formaları oyunculara kulüp başkanı dağıttı.",
    "Maçın özetini bütün taraftarlar kulüp sayfasından izledi.",
    "Şampiyonluk kutlamasını gençler meydanda yaptı."
  ],
  dogru: 1,
  hatalar: [
    "A'da yükleme en yakın öge 'sahnede'dir. 'Nerede aldı?' sorusunun karşılığı olduğu için yer tamlayıcısıdır; C ve D ile aynı ögedir.",
    null,
    "C'de yükleme en yakın öge 'kulüp sayfasından'dır. 'Nereden izledi?' sorusunun karşılığı olduğu için yer tamlayıcısıdır; A ve D ile aynı ögedir.",
    "D'de yükleme en yakın öge 'meydanda'dır. 'Nerede yaptı?' sorusunun karşılığı olduğu için yer tamlayıcısıdır; A ve C ile aynı ögedir."
  ],
  aciklama: `Kurallı bir cümlede vurgulanan öge, yükleme en yakın olan ögedir. Dört cümlede de yüklemin hemen önündeki ögeyi bulup ona soru sorman yeterlidir.
Adım 1: A → Yüklem 'aldı'. Hemen önündeki öge 'sahnede'. 'Nerede?' → yer tamlayıcısı.
Adım 2: B → Yüklem 'dağıttı'. Hemen önündeki öge 'kulüp başkanı'. 'Kim dağıttı?' → özne. Bu cümlede yer tamlayıcısı ('oyunculara') vardır ama yüklemin hemen önünde değildir; bu yüzden vurgu öznededir.
Adım 3: C → Yüklem 'izledi'. Hemen önündeki öge 'kulüp sayfasından'. 'Nereden?' → yer tamlayıcısı.
Adım 4: D → Yüklem 'yaptı'. Hemen önündeki öge 'meydanda'. 'Nerede?' → yer tamlayıcısı.
Adım 5: A, C ve D'de yer tamlayıcısı vurgulanmıştır; yalnızca B'de özne vurgulanır.
Sık yapılan hata: Vurgulanan ögeyi cümlenin başındaki söz sanmak. Vurgu cümlenin başında değil, yükleme en yakın yerdedir.
Cevap B.`
},
{
  id: "tur-og-006",
  kazanim: "T.8.4.18",
  kademe: 0,
  zorluk: 4,
  soru: `Bir çarşının en eski dükkânlarından birinde yıllardır saat onarımı yapılıyor. Aşağıdaki cümle, bu dükkânın sahibini anlatmaktadır:
Eski saatleri onaran usta bu küçük dükkânda otuz yıldır çalışıyor.
**Buna göre, bu cümle aşağıdakilerin hangisinde ögelerine doğru ayrılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Eski saatleri / onaran usta / bu küçük dükkânda / otuz yıldır / çalışıyor.",
    "Eski saatleri onaran usta / bu küçük dükkânda otuz yıldır / çalışıyor.",
    "Eski saatleri onaran usta / bu küçük dükkânda / otuz yıldır / çalışıyor.",
    "Eski saatleri / onaran usta / bu küçük dükkânda otuz yıldır / çalışıyor."
  ],
  dogru: 2,
  hatalar: [
    "Sıfat-fiil öbeğini ikiye bölüp 'Eski saatleri' sözünü cümlenin nesnesi saydın. Bu söz cümlenin yüklemine değil, 'onaran' sıfat-fiiline bağlıdır; öznenin içinde kalır.",
    "Yer tamlayıcısı ile zarf tamlayıcısını tek öge saydın. 'bu küçük dükkânda' 'Nerede?', 'otuz yıldır' ise 'Ne kadar zamandır?' sorusunun karşılığıdır; bunlar iki ayrı ögedir.",
    null,
    "Hem sıfat-fiil öbeğini böldün hem de yan yana duran iki tamlayıcıyı tek öge saydın. 'Eski saatleri' özneye aittir; 'bu küçük dükkânda' ile 'otuz yıldır' ise ayrı ögelerdir."
  ],
  aciklama: `Ögelere ayırırken önce yüklemi bul, sonra ona sırayla soru sor. Bir söz öbeği (sıfat-fiil öbeği, isim tamlaması) bölünmez; tamamı tek bir öge sayılır.
Adım 1: Yüklem 'çalışıyor'.
Adım 2: 'Kim çalışıyor?' → 'Eski saatleri onaran usta'. Bu öbeğin tamamı öznedir. İçindeki 'Eski saatleri' sözü 'onaran' sıfat-fiilinin nesnesidir; cümlenin nesnesi değildir.
Adım 3: 'Nerede çalışıyor?' → 'bu küçük dükkânda'. Yer tamlayıcısı.
Adım 4: 'Ne kadar zamandır çalışıyor?' → 'otuz yıldır'. Zarf tamlayıcısı.
Adım 5: Öyleyse cümle dört ögeden oluşur: özne / yer tamlayıcısı / zarf tamlayıcısı / yüklem. Bu ayrım yalnızca C'de yapılmıştır.
Sık yapılan hata: Yan yana duran iki tamlayıcıyı tek öge saymak. Her birine ayrı bir soru sorabiliyorsan onlar ayrı ögedir.
Cevap C.`
}
);
