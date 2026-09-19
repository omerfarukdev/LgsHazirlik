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
    "Kulübün yazılımını gönüllü bir öğrenci güncelledi.",
    "Mahalledeki gönüllü gençler eski bilgisayarları topluyor.",
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
Adım 1: A'nın yüklemi 'güncelledi'. 'Kim güncelledi?' → 'gönüllü bir öğrenci' (özne). 'Neyi güncelledi?' → 'Kulübün yazılımını' (nesne). Sıralanış: nesne – özne – yüklem.
Adım 2: B'nin yüklemi 'topluyor'. Özne 'Mahalledeki gönüllü gençler', nesne 'eski bilgisayarları'. Sıralanış: özne – nesne – yüklem.
Adım 3: C'nin yüklemi 'değiştiriyor'. Özne 'Bu küçük atölye', nesne 'kırık ekranları', zarf tamlayıcısı 'ustalıkla'. Sıralanış: özne – nesne – zarf tamlayıcısı – yüklem.
Adım 4: D'nin yüklemi 'deniyor'. Özne 'Deneyimli eğitmen', nesne 'bütün eski cihazları', zarf tamlayıcısı 'tek tek'. Sıralanış: özne – nesne – zarf tamlayıcısı – yüklem.
Adım 5: B, C ve D öznesiyle başlar; yalnızca A nesnesiyle başlar. Farklı olan A'dır.
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
  soru: `Bir cümlede, bir ögeden hemen sonra gelip onu açıklayan ve iki virgül arasına alınan söze ara söz denir. Aşağıdaki şemada buna bir örnek verilmiştir.
Bir şehirde açılan el sanatları sergisinde hem ustalar hem de kursiyerler eserlerini tanıtıyor.
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
  soru: `Bir mahallenin yıllardır bakımsız duran çocuk parkı bu yaz elden geçti. Belediye ekipleri ile mahalleliler işi birlikte yürüttü; kimi boya fırçası tuttu, kimi kırık oyuncakların yerine yenisini taşıdı. Aşağıda bu çalışmayla ilgili dört cümle numaralandırılarak verilmiştir.
**Buna göre, numaralanmış cümlelerden hangi ikisinin ögeleri aynı sırayla dizilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Belediye, çocuk parkını geçen ay yeniledi.</td></tr><tr><td>II</td><td>Kaydırağın boyasını her yıl gönüllüler tazeliyor.</td></tr><tr><td>III</td><td>Küçük çocuklar sabahları kum havuzunu tercih ediyor.</td></tr><tr><td>IV</td><td>Mahalleliler, yeni bankları bu sabah denedi.</td></tr></table>`,
  secenekler: ["I ve II", "I ve IV", "II ve III", "III ve IV"],
  dogru: 1,
  hatalar: [
    "I ile II'yi eşleştirmek için 'Kaydırağın boyasını' sözünü özne saydın. Bu söz '-ı' ekini almıştır ve 'Neyi tazeliyor?' sorusunun karşılığıdır; nesnedir. II'nin öznesi 'gönüllüler'dir.",
    null,
    "II ile III'ü eşleştirmek için 'Kaydırağın boyasını' ile 'Küçük çocuklar' sözlerini aynı öge saydın. Biri nesne, diğeri öznedir; iki cümlenin sıralanışı farklıdır.",
    "III ile IV'ü eşleştirirken nesne ve zarf tamlayıcısının yerini karıştırdın. III'te zarf tamlayıcısı nesneden önce, IV'te sonra gelir."
  ],
  aciklama: `Ögelerin sıralanışını karşılaştırmak için her cümlede önce yüklemi bul, sonra kalan söz öbeklerine tek tek soru sorarak sırayı yaz.
Adım 1: I → Yüklem 'yeniledi'. 'Kim yeniledi?' → 'Belediye' (özne). 'Neyi yeniledi?' → 'çocuk parkını' (nesne). 'Ne zaman?' → 'geçen ay' (zarf tamlayıcısı). Sıralanış: özne – nesne – zarf tamlayıcısı – yüklem.
Adım 2: II → Yüklem 'tazeliyor'. Özne 'gönüllüler', nesne 'Kaydırağın boyasını', zarf tamlayıcısı 'her yıl'. Sıralanış: nesne – zarf tamlayıcısı – özne – yüklem.
Adım 3: III → Yüklem 'tercih ediyor'. Özne 'Küçük çocuklar', zarf tamlayıcısı 'sabahları', nesne 'kum havuzunu'. Sıralanış: özne – zarf tamlayıcısı – nesne – yüklem.
Adım 4: IV → Yüklem 'denedi'. Özne 'Mahalleliler', nesne 'yeni bankları', zarf tamlayıcısı 'bu sabah'. Sıralanış: özne – nesne – zarf tamlayıcısı – yüklem.
Adım 5: I ile IV'ün sıralanışı aynıdır. II ve III hem birbirinden hem de bu ikisinden ayrılır.
Sık yapılan hata: Cümlenin başındaki her sözü özne sanmak. Baştaki sözde '-ı, -i, -u, -ü' eki varsa o söz nesnedir; özneyi başka yerde aramalısın.
Cevap B.`
},
{
  id: "tur-og-308",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 4,
  soru: `Bir belediye, boş duran eski bir binayı el sanatları merkezine çevirdi. Binanın her katında başka bir atölye var: heykel, ahşap oymacılığı, seramik ve desen. Aşağıda bu merkezde geçen bir günden dört cümle verilmiştir.
**Bu cümlelerin hangisinde 'Ne?' sorusunun karşılığı olan söz, nesne __değildir__?**`,
  gorsel: null,
  secenekler: [
    "Genç heykeltıraş, atölyesinde bütün gün kil yoğurdu.",
    "Ahşap ustası, tezgâhın üstüne ince bir cila sürdü.",
    "Fırının içinde küçük seramik kâseler yavaşça pişti.",
    "Kursiyerler, beyaz kâğıdın ortasına kalın bir çizgi çekti."
  ],
  dogru: 2,
  hatalar: [
    "A'da 'Ne yoğurdu?' sorusunun karşılığı 'kil'dir. Bu söz işten etkilenen ögedir, yani belirtisiz nesnedir; işi yapan 'Genç heykeltıraş'tır.",
    "B'de 'Ne sürdü?' sorusunun karşılığı 'ince bir cila'dır; belirtisiz nesnedir. '-e' ekli 'tezgâhın üstüne' sözü ise yer tamlayıcısıdır.",
    null,
    "D'de 'Ne çekti?' sorusunun karşılığı 'kalın bir çizgi'dir; belirtisiz nesnedir. İşi yapan özne 'Kursiyerler'dir."
  ],
  aciklama: `'Ne?' sorusu hem özneyi hem de belirtisiz nesneyi bulmaya yarar; bu yüzden tek başına yeterli değildir. Doğru yol şudur: önce 'İşi yapan kim/ne?' diye sorup özneyi ayır, geriye kalan 'ne' cevabı nesnedir.
Adım 1: A → Yüklem 'yoğurdu'. İşi yapan 'Genç heykeltıraş' (özne). 'Ne yoğurdu?' → 'kil'. Kil, yoğurma işinden etkilenir: belirtisiz nesne.
Adım 2: B → Yüklem 'sürdü'. İşi yapan 'Ahşap ustası'. 'Ne sürdü?' → 'ince bir cila': belirtisiz nesne.
Adım 3: D → Yüklem 'çekti'. İşi yapan 'Kursiyerler'. 'Ne çekti?' → 'kalın bir çizgi': belirtisiz nesne.
Adım 4: C → Yüklem 'pişti'. 'Ne pişti?' → 'küçük seramik kâseler'. Bu cümlede pişme işini üstlenen kâselerin kendisidir; cümlede başka bir işi yapan yoktur. Öyleyse bu söz nesne değil, öznedir.
Sağlama: 'Usta, kâseleri pişirdi.' dersen 'kâseleri' nesne olur, çünkü işi yapan başka biridir. Ama 'kâseler pişti' cümlesinde işi üstlenen kâselerdir; bu yüzden özne olur.
Cevap C.`
},
{
  id: "tur-og-309",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun yüzme takımı, il birinciliğine hazırlanıyor. Takım, hafta içi her sabah derse girmeden önce bir saat çalışıyor. Aşağıda bir antrenman gününden dört cümle numaralandırılarak verilmiştir.
**Buna göre, numaralanmış cümlelerin hangisinde özne, nesne, yer tamlayıcısı ve zarf tamlayıcısı bir arada bulunmaktadır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Yüzme takımı, yeni sezonun ilk antrenmanını sabah erkenden havuzda yaptı.</td></tr><tr><td>II</td><td>Küçük yüzücüler, uzun süre hiç yorulmadı.</td></tr><tr><td>III</td><td>Antrenör, havuzun kenarından herkese tek tek seslendi.</td></tr><tr><td>IV</td><td>Takımın en hızlı sporcusu, dün kendi rekorunu yeniledi.</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "II. cümlede 'uzun süre' sözünü nesne sandın. Bu söz 'Ne kadar?' sorusunun karşılığıdır; 'hiç' sözüyle birlikte zarf tamlayıcısıdır. Cümlede nesne de yer tamlayıcısı da yoktur.",
    "III. cümlede 'herkese' sözünü nesne sandın. '-e' ekli bu söz 'Kime seslendi?' sorusunun karşılığıdır; yer tamlayıcısıdır. Cümlede nesne yoktur.",
    "IV. cümlede 'dün' sözünü yer tamlayıcısı sandın. Bu söz 'Ne zaman?' sorusunun karşılığıdır; zarf tamlayıcısıdır. Cümlede yer tamlayıcısı yoktur."
  ],
  aciklama: `Bir cümlede hangi ögelerin bulunduğunu anlamak için yüklemi bulduktan sonra sırayla şu soruları sorarsın: 'Kim/ne?' (özne), 'Neyi/ne?' (nesne), 'Nereye, nerede, nereden, kime?' (yer tamlayıcısı), 'Ne zaman, nasıl, ne kadar?' (zarf tamlayıcısı).
Adım 1: I → Yüklem 'yaptı'. Özne 'Yüzme takımı', nesne 'yeni sezonun ilk antrenmanını', zarf tamlayıcısı 'sabah erkenden', yer tamlayıcısı 'havuzda'. Dört öge de var.
Adım 2: II → Yüklem 'yorulmadı'. Özne 'Küçük yüzücüler'; 'uzun süre' ve 'hiç' zarf tamlayıcısıdır. Nesne ve yer tamlayıcısı yok.
Adım 3: III → Yüklem 'seslendi'. Özne 'Antrenör'; 'havuzun kenarından' ve 'herkese' yer tamlayıcısı, 'tek tek' zarf tamlayıcısıdır. Nesne yok.
Adım 4: IV → Yüklem 'yeniledi'. Özne 'Takımın en hızlı sporcusu', nesne 'kendi rekorunu', zarf tamlayıcısı 'dün'. Yer tamlayıcısı yok.
Sık yapılan hata: '-e' ekli sözleri nesne sanmak. Nesne ya yalın hâldedir ya da '-ı, -i, -u, -ü' ekini almıştır; 'herkese' gibi sözler yer tamlayıcısıdır.
Cevap A.`
},
{
  id: "tur-og-310",
  kazanim: "T.8.4.18",
  kademe: 3,
  zorluk: 4,
  soru: `Türkçe dersinde ögeler konusu işlendi. Bir öğrenci, robotik atölyesiyle ilgili aşağıdaki cümleyi bölümlere ayırmış ve her bölümün altına o bölümün hangi öge olduğunu yazmıştır.
**Buna göre, öğrencinin ögesini yanlış yazdığı bölüm hangisidir?**`,
  gorsel: `<svg viewBox="0 0 560 195" role="img" aria-label="Öğrencinin bölümlere ayırdığı cümle ve yazdığı ögeler: I. bölüm 'Robotik atölyesine yeni katılan öğrenciler' özne, II. bölüm 'tasarladıkları küçük aracı' nesne, III. bölüm 'okulun bahçesinde' yer tamlayıcısı, IV. bölüm 'önümüzdeki hafta' yer tamlayıcısı, V. bölüm 'deneyecek' yüklem."><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="10" y="12" width="322" height="36" rx="6"/><rect x="340" y="12" width="205" height="36" rx="6"/><rect x="20" y="102" width="150" height="36" rx="6"/><rect x="180" y="102" width="150" height="36" rx="6"/><rect x="340" y="102" width="120" height="36" rx="6"/></g><g font-size="15" text-anchor="middle" fill="currentColor"><text x="171" y="36">Robotik atölyesine yeni katılan öğrenciler,</text><text x="442" y="36">tasarladıkları küçük aracı</text><text x="95" y="126">okulun bahçesinde</text><text x="255" y="126">önümüzdeki hafta</text><text x="400" y="126">deneyecek.</text></g><g font-size="15" text-anchor="middle" font-weight="bold" fill="var(--vurgu)"><text x="171" y="70">I · özne</text><text x="442" y="70">II · nesne</text><text x="95" y="160">III · yer tamlayıcısı</text><text x="255" y="160">IV · yer tamlayıcısı</text><text x="400" y="160">V · yüklem</text></g></svg>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "I. bölümdeki 'Robotik atölyesine' sözünü ayrı bir yer tamlayıcısı sandın. Bu söz, 'öğrenciler'i niteleyen 'yeni katılan' sıfat-fiiline bağlıdır; bölümün tamamı 'Kim deneyecek?' sorusunun karşılığıdır, yani öznedir.",
    "II. bölümdeki 'tasarladıkları küçük aracı' sözünü, içinde fiilimsi bulunduğu için özne sandın. Bu söz 'Neyi deneyecek?' sorusunun karşılığıdır; öğrencinin yazdığı gibi nesnedir.",
    "III. bölümdeki 'okulun bahçesinde' sözünü zarf tamlayıcısı sandın. 'Nerede deneyecek?' sorusunun karşılığı olduğu için yer tamlayıcısıdır; öğrencinin yazdığı doğrudur.",
    null
  ],
  aciklama: `Ögeyi belirlerken sözcüğün aldığı eke değil, yükleme sorduğun soruya bakarsın. '-de' ekli bir söz yer bildiriyorsa yer tamlayıcısı, zaman bildiriyorsa zarf tamlayıcısıdır.
Adım 1: Yüklemi bul: 'deneyecek'.
Adım 2: 'Kim deneyecek?' → 'Robotik atölyesine yeni katılan öğrenciler'. Bu bölümün tamamı öznedir. İçindeki 'Robotik atölyesine' sözü cümlenin değil, 'katılan' sıfat-fiilinin tamamlayıcısıdır; öznenin içinde kalır. I. bölüm doğru yazılmış.
Adım 3: 'Neyi deneyecek?' → 'tasarladıkları küçük aracı'. Nesne. II. bölüm doğru.
Adım 4: 'Nerede deneyecek?' → 'okulun bahçesinde'. Yer tamlayıcısı. III. bölüm doğru.
Adım 5: IV. bölüme bak: 'önümüzdeki hafta'. Bu söze 'Nerede?' diye sorulmaz, 'Ne zaman deneyecek?' diye sorulur. Öyleyse yer tamlayıcısı değil, zarf tamlayıcısıdır. Öğrenci yalnızca burada yanılmıştır.
Sağlama: Yer tamlayıcısı '-e, -de, -den' eklerinden birini almak zorundadır. 'önümüzdeki hafta' sözü bu eklerden hiçbirini almamıştır; zaten bu yüzden yer tamlayıcısı olamaz.
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
