// Türkçe — Anlatım Bozuklukları: Kademe 3 (LGS Ayarı) yedeği, tur-ab-326…375
// Kazanım: T.8.3.8 Metindeki anlatım bozukluklarını belirler. (Dil bilgisi yönünden anlatım bozuklukları üzerinde durulur.)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["anlatim-bozukluklari"] = window.LGS_BANK["anlatim-bozukluklari"] || []).push(
{
  id: "tur-ab-326",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir spor kulübünün web sitesinde yayımlanan duyurulardan dört cümle seçilmiştir.
**Bu cümlelerin hangisinde özne ile yüklem arasında kişi bakımından uyumsuzluk vardır?**`,
  gorsel: null,
  secenekler: [
    "Antrenörümüz ve kaptanımız turnuva için yarın sabah yola çıkacaklar.",
    "Kaptanımızla ben maç öncesi soyunma odasında planı konuştuk.",
    "Hakemle antrenör sahadan ayrılıp soyunma odasına gidiyorsunuz.",
    "Sen ve takım arkadaşların maç öncesi birlikte ısınıyorsunuz."
  ],
  dogru: 2,
  hatalar: [
    "Bu cümle kusursuzdur: özne \"antrenörümüz ve kaptanımız\" üçüncü çoğul kişidir, \"çıkacaklar\" da üçüncü çoğul kişidir.",
    "Bu cümle kusursuzdur: \"kaptanımızla ben\" birlikte \"biz\" demektir, \"konuştuk\" bu kişiye uyar.",
    null,
    "Bu cümle kusursuzdur: \"sen ve takım arkadaşların\" birlikte \"siz\" demektir, \"ısınıyorsunuz\" bu kişiye uyar."
  ],
  aciklama: `Yüklem, öznenin kişisine ve sayısına uymalıdır. Özne içinde "ben" varsa topluluk "biz", "sen" varsa (ben yoksa) "siz", ikisi de yoksa "onlar" olur.
Adım 1: Her cümlenin öznesini ve kaç kişi olduğunu bul.
Adım 2: "Antrenörümüz ve kaptanımız" onlardır; "çıkacaklar" uyar. "Kaptanımızla ben" bizdir; "konuştuk" uyar. "Sen ve takım arkadaşların" sizdir; "ısınıyorsunuz" uyar.
Adım 3: "Hakemle antrenör" üçüncü kişilerdir (onlar). Yüklem ise "gidiyorsunuz" biçiminde ikinci çoğul kişidir; özneye uymaz.
Sağlama: Cümleyi "Hakemle antrenör sahadan ayrılıp soyunma odasına gidiyor." diye düzeltirsen uyum kurulur.
Cevap C.`
},
{
  id: "tur-ab-327",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir mahalle pazarında yaşanan olayları anlatan dört cümle aşağıda verilmiştir.
**Bu cümlelerin hangisinde yüklem eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Pazarda dolaşırken hem yeni çıkan çilekleri tattık hem de fiyatlarını.",
    "Satıcı, tezgâhtaki çilekleri özenle tartıp ince bir poşete koydu.",
    "Annem hem çilek aldı hem de kiraz için satıcıyla pazarlık etti.",
    "Babam çileklerin parasını ödedi, ben de poşetleri arabaya taşıdım."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bu cümle kusursuzdur: \"tartıp\" ve \"koydu\" aynı nesneyi (çilekleri) ister ve ikisi de -i ekiyle uyumludur.",
    "Bu cümle kusursuzdur: \"aldı\" çileğe, \"pazarlık etti\" kiraza ayrı ayrı bağlanmıştır; her öğenin kendi yüklemi vardır.",
    "Bu cümle kusursuzdur: iki cümlecikte özneler (babam, ben) farklıdır ve her yüklem kendi öznesine uyar."
  ],
  aciklama: `Farklı fiiller isteyen öğeler tek bir yükleme bağlanırsa yüklem eksikliği olur. Her öğeyi yükleme ayrı ayrı sormak gerekir.
Adım 1: Birinci cümlede ortak yüklem "tattık"tır; "çilekleri tattık" doğrudur.
Adım 2: "Fiyatlarını tattık" anlamsızdır; fiyat tadılmaz, sorulur. İkinci öğe için ayrı bir yüklem ("sorduk") eksiktir.
Adım 3: Diğer cümlelerde her öğenin yüklemi yerindedir.
Sağlama: Birinci cümleyi "… hem de fiyatlarını sorduk." diye tamamlarsan bozukluk kalkar.
Cevap A.`
},
{
  id: "tur-ab-328",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen kulübünün çalışma raporundan dört cümle seçilmiştir.
**Bu cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Laboratuvarda grup arkadaşlarımla birbirimize karşılıklı yardım ettik.",
    "Deney setindeki malzemelerden her biri dolaba kaldırıldılar.",
    "Fen laboratuvarın dolapları bu hafta yeniden düzenlendi.",
    "Öğrenciler önce eldivenlerini giydi, sonra çözeltiyi damlalıkla tüpe aktardı."
  ],
  dogru: 3,
  hatalar: [
    "Gereksiz sözcük kullanılmıştır: \"birbirimize\" zaten karşılıklılığı anlatır, \"karşılıklı\" aynı anlamı yineler.",
    "Sayı uyumsuzluğu vardır: \"her biri\" tekil bir öznedir; yüklem \"kaldırıldı\" olmalıdır.",
    "Tamlama yanlışlığı vardır: \"laboratuvarın\" tamlayan ekini aldığı için tamlanan \"laboratuvarının\" biçiminde yazılmalıdır.",
    null
  ],
  aciklama: `Bozukluk olmayan cümlede özne ile yüklem uyumlu, ekler yerinde ve anlam tutarlıdır. Bu soruda önce bozuk üç cümleyi ayıklamak işe yarar.
Adım 1: Birinci cümlede "birbirimize" ve "karşılıklı" aynı anlamı taşır; gereksiz sözcük var.
Adım 2: İkinci cümlede özne "malzemelerden her biri"dir ve tekildir; "kaldırıldılar" çoğul olduğu için uymaz.
Adım 3: Üçüncü cümlede "fen laboratuvarın" tamlayan ekini almış, tamlanan ise "dolapları" ile bağlanıyor; zincir "laboratuvarının dolapları" biçiminde kurulmalıdır.
Adım 4: Dördüncü cümlede iki yüklem de aynı özneye ("öğrenciler") bağlı, ikisi de etken ve üçüncü kişidir; nesneler ayrı ayrı yazılmıştır. Kusursuz.
Sağlama: Dördüncü cümlede her yüklemin öznesini ve nesnesini bulabiliyorsun.
Cevap D.`
},
{
  id: "tur-ab-329",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Okul resim sergisinin duyurusunda geçen cümlelerden dördü aşağıda verilmiştir.
**Bu cümlelerin hangisinde çatı uyuşmazlığından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Biletler satışa çıkarıldı ve kısa sürede satıldı.",
    "Sergi salonu gün boyu süslendi ve akşam ziyaretçilere açtık.",
    "Okul müdürü sergiyi açış konuşmasıyla başlattı ve ziyaretçileri karşıladı.",
    "Sergi için hazırlanan afişler duvara asıldı ve herkesçe beğenildi."
  ],
  dogru: 1,
  hatalar: [
    "Bu cümle kusursuzdur: \"çıkarıldı\" ve \"satıldı\" ikisi de edilgendir, özne \"biletler\" ile uyumludur.",
    null,
    "Bu cümle kusursuzdur: \"başlattı\" ve \"karşıladı\" ikisi de etkendir, özne \"okul müdürü\"dür.",
    "Bu cümle kusursuzdur: \"asıldı\" ve \"beğenildi\" ikisi de edilgendir, özne \"afişler\" ile uyumludur."
  ],
  aciklama: `Aynı özneye bağlanan yüklemler aynı çatıda olmalıdır. İşi yapanı belli olmayan yüklem edilgen, işi yapanı belli olan yüklem etkendir.
Adım 1: Her cümlede yüklemlerin çatısını belirle.
Adım 2: Birinci, üçüncü ve dördüncü cümlelerde iki yüklem de aynı çatıdadır (edilgen, etken, edilgen).
Adım 3: İkinci cümlede "süslendi" edilgendir ve özne "sergi salonu"dur. "Açtık" ise etkendir ve işi yapan "biz"dir. İki yüklem aynı çatıda değil.
Adım 4: Düzeltme: "Sergi salonu gün boyu süslendi ve akşam ziyaretçilere açıldı."
Sağlama: Yüklemleri öznenin yerine koy: "Salon süslendi" ile "salon açtık" birlikte olmaz.
Cevap B.`
},
{
  id: "tur-ab-330",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Dil bilgisi sınavında bağlaç ve edat kullanımı yoklanıyor.
**Aşağıdaki cümlelerin hangisinde bağlaç kullanımından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Maçı kaybetmemize rağmen takım arkadaşlarımızla gurur duyuyoruz.",
    "Dün çok yorulduğum için ama erkenden yatıp sabaha kadar uyudum.",
    "Okulun sergisi hem veliler hem de öğretmenler tarafından ilgiyle izlendi.",
    "Yolda trafik yoğundu, bu yüzden toplantıya on dakika geç kaldık."
  ],
  dogru: 1,
  hatalar: [
    "Bu cümle kusursuzdur: \"rağmen\" karşıtlık bildirir; maçın kaybedilmesi ile gurur duymak karşıt durumlardır.",
    null,
    "Bu cümle kusursuzdur: \"hem … hem de\" iki özneyi eşit düzeyde bağlıyor, yüklem edilgen ve uyumludur.",
    "Bu cümle kusursuzdur: \"bu yüzden\" önce nedeni (trafik), sonra sonucu (geç kalmak) getirir."
  ],
  aciklama: `"İçin" neden bildirir, "ama" ise karşıtlık bildirir. Aynı iki cümlecik arasında hem neden hem karşıtlık bağı kurulursa anlatım bozulur.
Adım 1: Her cümlede bağlaç ve edatların türünü belirle.
Adım 2: Birinci, üçüncü ve dördüncü cümlelerde bağlar tek ve yerindedir (karşıtlık, eşlik, neden).
Adım 3: İkinci cümlede "yorulduğum için" nedeni verir; arkasından gelen "ama" karşıtlık ister ama burada karşıt bir durum yoktur. İki bağ birbirini bozar.
Adım 4: Düzeltme: "Dün çok yorulduğum için erkenden yatıp sabaha kadar uyudum."
Sık yapılan hata: Cümlede bağlaç sayısı çok diye uzun cümleyi doğru kabul etmek. Her bağın ne ilişki kurduğunu sorgula.
Cevap B.`
},
{
  id: "tur-ab-331",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul gazetesinin aile köşesinden dört cümle alınmıştır.
**Bu cümlelerin hangisinde anlamca çelişen ifadeler birlikte kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Doğum günü pastasını hep birlikte kesip fotoğraf çektirdik.",
    "Misafirlerin çoğu erkenden gitti, yalnızca birkaç yakın arkadaş kaldı.",
    "Parti için balkonu balonlarla süsleyince ev bambaşka göründü.",
    "Davetlilerden hiçbirinin gelmediği doğum günü partisi çok kalabalık geçti."
  ],
  dogru: 3,
  hatalar: [
    "Bu cümle kusursuzdur: \"hep birlikte\" tek bir bilgi verir, çelişen ya da yineleyen bir sözcük yoktur.",
    "Bu cümle kusursuzdur: \"çoğu gitti\" ile \"birkaç arkadaş kaldı\" aynı durumu iki yönden anlatır, çelişmez.",
    "Bu cümle kusursuzdur: balonlarla süslemek ile evin bambaşka görünmesi neden-sonuç olarak tutarlıdır.",
    null
  ],
  aciklama: `Birbirini yok eden iki bilginin aynı cümlede verilmesi anlam çelişkisidir.
Adım 1: Her cümlede iki bilgiyi karşılaştır.
Adım 2: Birinci ve ikinci cümlede bilgiler birbirini destekliyor; üçüncü cümlede neden-sonuç tutarlı.
Adım 3: Dördüncü cümlede davetlilerden hiçbiri gelmemişken parti "çok kalabalık" geçmiş. Hiç kimse gelmediyse parti kalabalık olamaz.
Sağlama: "Hiçbiri gelmedi" ile "kalabalık geçti" aynı anda doğru olamaz.
Cevap D.`
},
{
  id: "tur-ab-332",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bayram yazısından alınan cümleler incelenmektedir.
**Aşağıdaki cümlelerin hangisinde ortak kullanılan öğenin yüklemlerden birine uymaması yüzünden anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Elif, büyükannesine sarıldı ve çok özledi.",
    "Elif, büyükannesinin valizini aldı ve misafir odasına götürdü.",
    "Elif, büyükannesinin elini öpüp bayramını kutladı.",
    "Elif, büyükannesinden öğrendiği tarifi defterine yazdı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bu cümle kusursuzdur: \"aldı\" ve \"götürdü\" aynı nesneyi (valizini) ister, ikisi de -i ekine uyar.",
    "Bu cümle kusursuzdur: \"öpüp\" ve \"kutladı\" her biri kendi nesnesini (elini, bayramını) almıştır.",
    "Bu cümle kusursuzdur: \"büyükannesinden\" yalnız \"öğrendiği\" sözcüğüne bağlıdır, ortak bir öğe yoktur."
  ],
  aciklama: `Bir öğe iki yükleme birden bağlanıyorsa her yüklemin istediği hâl eki aynı olmalıdır. Farklıysa öğe ikinci yüklem için yeniden yazılmalıdır.
Adım 1: Birinci cümlede ortak öğe "büyükannesine"dir. "Sarılmak" yönelme hâli (-e) ister: "büyükannesine sarıldı" doğru.
Adım 2: "Özlemek" ise belirtme hâli (-i) ister: "büyükannesini özledi". Ortak "büyükannesine" ikinci yükleme uymaz.
Adım 3: Düzeltme: "Elif, büyükannesine sarıldı ve onu çok özlediğini söyledi."
Adım 4: Diğer cümlelerde her yüklemin istediği öğe uyumludur ya da ayrı yazılmıştır.
Sağlama: "Neyi özledi?" sorusuna cümleden "büyükannesine" cevabı çıkmaz.
Cevap A.`
},
{
  id: "tur-ab-333",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müze gezisini anlatan yazıdan dört cümle verilmiştir.
**Bu cümlelerin hangisinde gereksiz sözcük kullanımından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Müze rehberi eski eserlerin hangi dönemde yapıldığını anlattı.",
    "Rehberin anlattıkları ziyaretçilerin çok ilgisini çekti.",
    "Müze rehberi, eski eserlerin tarihçesini ayrıntılı detaylarıyla anlattı.",
    "Ziyaretçiler çıkışta rehbere teşekkür edip hediyelik eşya dükkânına uğradı."
  ],
  dogru: 2,
  hatalar: [
    "Bu cümle kusursuzdur: \"eski\" ve \"hangi dönemde\" farklı bilgiler verir, birbirini yinelemez.",
    "Bu cümle kusursuzdur: \"çok\" ilginin derecesini bildirir, fazlalık değildir.",
    null,
    "Bu cümle kusursuzdur: \"teşekkür edip\" ve \"uğradı\" ayrı eylemlerdir, anlam yinelemesi yoktur."
  ],
  aciklama: `Aynı anlamı taşıyan iki sözcüğün birlikte kullanılması gereksiz sözcük kullanımıdır. Bir sözcüğü çıkarınca anlam aynı kalıyorsa o sözcük fazladır.
Adım 1: Her cümlede aynı kavramı anlatan sözcük çifti ara.
Adım 2: Üçüncü cümlede "ayrıntılı" ve "detaylarıyla" aynı anlama gelir; "ayrıntılı" sözcüğü zaten ayrıntıyı anlatır.
Adım 3: Düzeltme: "…tarihçesini ayrıntılarıyla anlattı." ya da "…tarihçesini ayrıntılı anlattı."
Sık yapılan hata: "Çok" gibi derece bildiren sözcüğü fazlalık sanmak. Çıkarınca anlam azalıyorsa gereksiz değildir.
Cevap C.`
},
{
  id: "tur-ab-334",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul dergisinin dil köşesinde şu cümleler yer almıştır:
I. Kar yağınca köy yolları kapandı ve ekipler yolu açmaya çalıştı.
II. Mahalledeki çocuklar kırılan camı fark edip hemen güvenlik görevlisine haber verdi.
III. Yeni açılan müzeyi gezdik, rehberin anlattıklarını dinledim ve çok beğendik.
**Bu cümlelerden hangilerinde anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Yalnız III",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Birinci ve ikinci cümle kusursuzdur; \"Yalnız II\" demek kusursuz bir cümleyi bozuk saymaktır. Bozukluk üçüncü cümlededir.",
    "Birinci cümle kusursuzdur: \"yollar kapandı\" ve \"ekipler çalıştı\" iki ayrı özne ve yükleme sahip iki cümlecik. Bozukluk yalnız III'tedir.",
    "İkinci cümle kusursuzdur: \"fark edip\" ve \"haber verdi\" aynı özneye (çocuklar) bağlı, uyumlu yüklemlerdir."
  ],
  aciklama: `Önce her cümleyi ayrı ayrı sına, sonra seçenekleri karşılaştır.
Adım 1: I → iki cümlecik ayrı özneli: yollar kapandı, ekipler çalıştı. Her yüklem kendi öznesine uyar. Bozukluk yok.
Adım 2: II → "fark edip" ve "haber verdi" aynı özneye ("çocuklar") bağlı; üçüncü kişi, etken. Bozukluk yok.
Adım 3: III → aynı özneye bağlı üç yüklem var: "gezdik" (biz), "dinledim" (ben), "beğendik" (biz). "Dinledim" kişi bakımından uymuyor.
Sağlama: III'ü "…rehberin anlattıklarını dinledik ve çok beğendik." yaparsan uyum kurulur.
Cevap A.`
},
{
  id: "tur-ab-335",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Okul panosuna asılan duyurulardan dört cümle şöyledir.
**Bu cümlelerin hangisinde tamlama yanlışlığından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Okulumuzun öğrenci sayısı bu yıl yüz kişi arttı.",
    "Kitaplığın en alt rafındaki sözlükler yeniden düzenlendi.",
    "Komşumuzun torununun doğum günü pazar günü kutlanacak.",
    "Sınıftaki öğrenciler sayısı bu yıl otuza yükseldi."
  ],
  dogru: 3,
  hatalar: [
    "Bu cümle kusursuzdur: \"okulumuzun\" tamlayan eki, \"sayısı\" tamlanan eki taşır; \"öğrenci sayısı\" belirtisiz tamlamadır.",
    "Bu cümle kusursuzdur: \"kitaplığın … rafındaki\" tamlama ekleri tamdır.",
    "Bu cümle kusursuzdur: \"komşumuzun torununun doğum günü\" tamlama zinciri eksiksizdir.",
    null
  ],
  aciklama: `Belirtisiz isim tamlamasında (öğrenci sayısı, kayısı reçeli) tamlayan yalın kalır, çoğul eki almaz. Çoğul eki alan tamlayan ise belirtili tamlama yapar ve -ın eki ister.
Adım 1: Her cümledeki tamlamanın ekleri tam mı, bak.
Adım 2: Birinci, ikinci ve üçüncü cümlelerdeki zincirlerde (okulumuzun … sayısı; kitaplığın … rafı; komşumuzun torununun … günü) ekler yerindedir.
Adım 3: Dördüncü cümlede "öğrenciler" çoğul eki almış ama tamlayan eki (-in) almamış; "sayısı" ise belirtisiz tamlamaya özgü ek taşıyor. İkisi uyuşmuyor.
Adım 4: Düzeltme: "Sınıftaki öğrencilerin sayısı…" ya da "Sınıftaki öğrenci sayısı…"
Sağlama: "Öğrenciler sayısı" demek, "elmalar suyu" demek kadar tuhaftır.
Cevap D.`
},
{
  id: "tur-ab-336",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ailenin hafta sonu rutinini anlatan yazıdan numaralı cümleler verilmiştir:
(1) Babaannem sabah erkenden kalkıp hamuru yoğurdu ve fırını yaktı.
(2) Dayım yemekten sonra tavla oynadı, sonra çay demledi.
(3) Anneannem bahçedeki gül fidanını çok sevdi ve her gün baktı.
(4) Teyzem pencereyi açıp odayı havalandırdı, sonra çiçekleri suladı.
**Bu cümlelerin hangisinde ortak kullanılan öğe yüzünden anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "(1). cümle",
    "(2). cümle",
    "(3). cümle",
    "(4). cümle"
  ],
  dogru: 2,
  hatalar: [
    "\"Yoğurdu\" ve \"yaktı\" nesnelerini ayrı ayrı almıştır (hamuru, fırını); ortak öğe yoktur, bozukluk yok.",
    "\"Oynadı\" ve \"demledi\" ayrı yüklemlerdir; her birinin kendi nesnesi (tavla, çay) vardır. Bozukluk yok.",
    null,
    "\"Havalandırdı\" ve \"suladı\" ayrı yüklemlerdir; her birinin kendi nesnesi vardır. Bozukluk yok."
  ],
  aciklama: `Ortak öğe, tek bir kez yazılıp birden çok yükleme bağlanan öğedir. Her yüklem o öğeyi aynı ekle istiyorsa sorun yoktur; farklı ek istiyorsa ek eksikliği doğar.
Adım 1: (1), (2) ve (4). cümlelerde her yüklemin nesnesi ayrı yazılmıştır; ortak öğe yok.
Adım 2: (3). cümlede "fidanını" iki yükleme birden bağlanmış: "sevdi" ve "baktı".
Adım 3: "Sevmek" belirtme hâli (-i) ister: "fidanını sevdi". "Bakmak" yönelme hâli (-e) ister: "fidanına baktı". Ortak "fidanını" ikinci yükleme uymaz.
Adım 4: Düzeltme: "…gül fidanını çok sevdi ve her gün ona baktı."
Sağlama: "Neye baktı?" sorusuna cümleden uygun bir yanıt çıkmıyor.
Cevap C.`
},
{
  id: "tur-ab-337",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Karne gününü anlatan kısa cümleler incelenmektedir.
**Aşağıdaki cümlelerin hangisinde yüklem, anlamca yanlış seçilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Karne günü öğretmenimiz bizlere tatil boyunca okumamız için kitap önerdi.",
    "Karne günü bütün derslerden pekiyi not verdiğim için çok sevindim.",
    "Karne günü arkadaşlarımla okulun bahçesinde fotoğraf çektirdik.",
    "Karne günü annem beni tebrik edip en sevdiğim yemeği yaptı."
  ],
  dogru: 1,
  hatalar: [
    "Bu cümle kusursuzdur: \"önermek\" öğretmenin yapabileceği bir eylemdir ve cümlede doğru yerde kullanılmıştır.",
    null,
    "Bu cümle kusursuzdur: \"fotoğraf çektirmek\" ifadesi bağlama uygundur.",
    "Bu cümle kusursuzdur: \"tebrik etmek\" ve \"yemek yapmak\" annenin yapabileceği eylemlerdir."
  ],
  aciklama: `Bazı fiiller yönü belirler: öğretmen not verir, öğrenci not alır. Yönü ters bir fiil seçmek, yüklemi anlamca yanlış kullanmaktır.
Adım 1: Her cümlede fiilin kim tarafından yapıldığını kontrol et.
Adım 2: İkinci cümlede özne "ben"dir, yani öğrencidir. Öğrenci not "verdiğim" diyemez; not alır.
Adım 3: Doğrusu: "Karne günü bütün derslerden pekiyi not aldığım için çok sevindim."
Adım 4: Diğer cümlelerde fiiller öznelerin yapabileceği işlerdir.
Sağlama: "Ben not verdim" diyen kişi öğretmen olur; cümlenin anlamı ters döner.
Cevap B.`
},
{
  id: "tur-ab-338",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yazı atölyesinde öğrencilerden aşağıdaki cümleleri incelemeleri istenmiştir.
**Bu cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: ["Sonuçları öğrenmek için okula koşan Zeynep, listeyi sevinçle inceledi.","Hava güzel olursa yarın denizde yüzmeye ve sahilde top oynamak istiyoruz.","Bütün ödevler öğretmenimiz tarafından okundu ve notlarını ilan etti.","Hastalığı tamamen geçtiği için doktor ona daha güçlü bir ilaç yazdı."],
  dogru: 0,
  hatalar: [null,"Eş görevli öğelerde biçim uyumsuzluğu vardır: \"yüzmeye\" yönelme hâlinde, \"oynamak\" yalın mastar; ikisi aynı yapıda olmalıdır.","Çatı uyuşmazlığı vardır: \"okundu\" edilgen, \"ilan etti\" etkendir; ikisi de aynı özneye (ödevler) bağlıdır.","Mantık hatası vardır: hastalığı tamamen geçen kişiye daha güçlü ilaç yazılmaz, yazılan ilaç hastalığa uygun olmalıdır."],
  aciklama: `Bozukluk olmayan cümlede yüklemler öznelerle, öğeler yüklemlerle ve anlam bütünlüğüyle uyumludur.
Adım 1: İkinci cümlede "yüzmeye" ve "oynamak" aynı yükleme bağlı eş görevli öğelerdir; biri -e hâlinde, biri yalın mastar.
Adım 2: Üçüncü cümlede "ödevler" özne olduğu için "okundu" edilgendir; ama "ilan etti" etkendir, işi yapan "öğretmen" gibi görünüyor. Çatı uyuşmazlığı.
Adım 3: Dördüncü cümlede hastalığın geçmesi ile daha güçlü ilaç yazılması mantık dışı; neden-sonuç ters kurulmuş.
Adım 4: Birinci cümlede uzun bir sıfat-fiil öbeği öznenin önüne gelmiş ama özne "Zeynep", yüklem "inceledi" uyumlu. Kusursuz.
Sık yapılan hata: Uzun ve karışık görünen cümleyi bozuk sanmak.
Cevap A.`
},
{
  id: "tur-ab-339",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul konferansını anlatan yazıda şu cümle yer almıştır:
"Öğrenciler konferans salonuna girdi ve konuşmacıyı dinlemeye başladım."
**Bu cümledeki anlatım bozukluğu aşağıdakilerden hangisi yapılarak giderilir?**`,
  gorsel: null,
  secenekler: [
    "\"başladım\" sözcüğü \"başladı\" biçimine çevrilmelidir.",
    "\"girdi\" sözcüğü \"girdim\" biçimine çevrilmelidir.",
    "\"konuşmacıyı\" sözcüğü \"konuşmacıya\" biçimine çevrilmelidir.",
    "\"öğrenciler\" sözcüğü \"öğrenci\" biçimine çevrilmelidir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "\"Girdim\" yapılırsa \"öğrenciler girdim\" olur; bu kez ilk yüklem özneye uymaz ve ikinci yüklem de hâlâ uyuşmaz.",
    "\"Dinlemek\" nesne ister (konuşmacıyı); \"konuşmacıya\" yönelme hâli olur, hâl ekini bozar ve kişi uyumsuzluğunu gidermez.",
    "Özneyi tekil yapmak ilk yükleme uyar ama \"başladım\" ile \"öğrenci\" yine uyuşmaz; bozukluk sürer."
  ],
  aciklama: `Aynı özneye bağlı yüklemler aynı kişi ekini taşımalıdır. Önce özneyi bul, sonra yüklemleri ona göre çekimle.
Adım 1: Özne "öğrenciler"dir; üçüncü çoğul kişidir. "Girdi" üçüncü kişiye uyar.
Adım 2: "Başladım" ise birinci tekil kişidir; özneye uymaz.
Adım 3: Uymayan yüklemi düzeltmek gerekir: "başladı". Cümle "Öğrenciler konferans salonuna girdi ve konuşmacıyı dinlemeye başladı." olur.
Sağlama: Diğer seçeneklerden her biri bir sözcüğü değiştirir ama ya yeni bir uyumsuzluk yaratır ya da eskisini bırakır.
Cevap A.`
},
{
  id: "tur-ab-340",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir aile sohbetini anlatan yazıda şu cümle bulunmaktadır:
"Annemin onun arkadaşı bizi akşam yemeğine çağırdı."
**Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Ortak kullanılan yüklemin öğelerden birine uymaması",
    "Belirtili tamlamada tamlanan ekinin eksik bırakılması",
    "Aynı özneye bağlı yüklemlerin çatılarının farklı olması",
    "Tamlama kurulurken gereksiz bir sözcüğün kullanılması"
  ],
  dogru: 3,
  hatalar: [
    "Cümlede tek yüklem (\"çağırdı\") vardır; ortak yüklem söz konusu değildir.",
    "\"Arkadaşı\" sözcüğü tamlanan ekini zaten almıştır; eksik olan ek değil, fazla olan sözcüktür.",
    "Cümlede tek yüklem olduğu için çatı uyuşmazlığı doğmaz; \"çağırdı\" etkendir ve özneyle uyumludur.",
    null
  ],
  aciklama: `"Annemin arkadaşı" belirtili isim tamlamasıdır: tamlayan "annemin" (-in), tamlanan "arkadaşı" (-ı). Bu tamlamanın içine fazladan bir sözcük girerse anlatım bozulur.
Adım 1: Yüklemi bul: "çağırdı". Tek yüklem var; ortak yüklem ya da çatı sorunu yok.
Adım 2: Tamlamaya bak: "Annemin" tamlayan eki almış, "arkadaşı" tamlanan eki almış. Ekler tam.
Adım 3: Aralarına giren "onun" sözcüğü aynı tamlayanı bir kez daha yineliyor; gereksiz sözcük.
Adım 4: Düzeltme: "Annemin arkadaşı bizi akşam yemeğine çağırdı."
Sağlama: "Onun" sözcüğünü çıkarınca anlam değişmiyorsa sözcük fazlalıktır.
Cevap D.`
},
{
  id: "tur-ab-341",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Hâl eklerinin kullanımı üzerine hazırlanan bir çalışma kâğıdında dört cümle verilmiştir.
**Bu cümlelerin hangisinde ek yanlışlığından kaynaklanan bir anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Yarın akşam arkadaşlarım bizi misafir gelecek.",
    "Kardeşim bu yaz ilk kez bisikletten binmeyi öğrendi.",
    "Dedem, bahçedeki ağaçları budamak için merdiveni duvara dayadı.",
    "Öğretmenimiz bizi sınavdan hazırlanmamız için uyardı."
  ],
  dogru: 2,
  hatalar: [
    "Ek yanlışlığı vardır: \"misafir gelmek\" yönelme hâlini ister; \"bizi\" yerine \"bize\" olmalıdır.",
    "Ek yanlışlığı vardır: \"binmek\" yönelme hâlini ister; \"bisikletten\" yerine \"bisiklete\" olmalıdır.",
    null,
    "Ek yanlışlığı vardır: \"hazırlanmak\" yönelme hâlini ister; \"sınavdan\" yerine \"sınava\" olmalıdır."
  ],
  aciklama: `Her fiil, hangi hâl ekini istediği bellidir: kime? (-e), neyi? (-i), nereden? (-den). Fiilin istediği ek yerine başka bir ek kullanılırsa ek yanlışlığı olur.
Adım 1: Birinci cümlede "misafir gelmek" fiiline "kime?" diye sorulur: bize. "Bizi" yanlıştır.
Adım 2: İkinci cümlede "binmek" fiiline "neye?" diye sorulur: bisiklete. "Bisikletten" yanlıştır.
Adım 3: Dördüncü cümlede "hazırlanmak" fiiline "neye?" diye sorulur: sınava. "Sınavdan" yanlıştır.
Adım 4: Üçüncü cümlede "ağaçları budamak" (-i) ve "merdiveni duvara dayadı" (-i, -e) doğru kurulmuş. Kusursuz.
Sağlama: Fiile soruyu sor; cümledeki ek, sorunun istediği ekse sorun yoktur.
Cevap C.`
},
{
  id: "tur-ab-342",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir haber sitesinin gündem bölümünden dört cümle alınmıştır.
**Bu cümlelerin hangisinde bağlaç ya da edat anlam bakımından yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Teknik arıza yüzünden seferlerin bir kısmı iptal edildi.",
    "Kötü hava koşulları sayesinde uçuşlar iptal edildi.",
    "Hızlı davranan ekipler sayesinde yangın büyümeden söndürüldü.",
    "Yağış beklenmesine karşın etkinlik açık havada yapıldı."
  ],
  dogru: 1,
  hatalar: [
    "Bu cümle kusursuzdur: \"yüzünden\" olumsuz bir sonuç için kullanılır ve iptal olumsuz bir sonuçtur.",
    null,
    "Bu cümle kusursuzdur: \"sayesinde\" olumlu bir sonuç için kullanılır; yangının büyümemesi olumlu bir sonuçtur.",
    "Bu cümle kusursuzdur: \"karşın\" karşıtlık bildirir; yağış beklenirken açık havada yapılması karşıt bir durumdur."
  ],
  aciklama: `"Sayesinde" olumlu bir sonuç, "yüzünden" olumsuz bir sonuç için kullanılır. Anlama uymayan edat anlatımı bozar.
Adım 1: Her cümlede sonucun olumlu mu olumsuz mu olduğunu belirle.
Adım 2: Birinci cümlede iptal olumsuzdur; "yüzünden" doğru. Üçüncü cümlede yangının söndürülmesi olumludur; "sayesinde" doğru.
Adım 3: İkinci cümlede uçuşların iptali olumsuz bir sonuçtur ama "sayesinde" edatı olumlu sonuç ister. Edat anlamla çelişiyor.
Adım 4: Düzeltme: "Kötü hava koşulları yüzünden uçuşlar iptal edildi."
Sağlama: "Kötü havanın sayesinde" ifadesi, iptali bir iyilik gibi gösterir.
Cevap B.`
},
{
  id: "tur-ab-343",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul gazetesinin deyimler köşesinde dört cümle yer almıştır.
**Bu cümlelerin hangisinde deyim anlamına uygun kullanılmamıştır?**`,
  gorsel: null,
  secenekler: ["Yeni oyuncağı görünce küçük kızın ağzı kulaklarına vardı.","Öğretmenin uyarılarına kulak veren öğrenciler sınavda başarılı oldu.","Komşumuz, bahçemizdeki ağacın dallarının sokağa uzanmasına göz yumdu.","Yarışmayı birincilikle bitirince herkesin gözünden düştü."],
  dogru: 3,
  hatalar: ["Bu cümle kusursuzdur: \"ağzı kulaklarına varmak\" çok sevinmek anlamındadır ve cümlede doğru kullanılmıştır.","Bu cümle kusursuzdur: \"kulak vermek\" dinlemek anlamındadır ve cümlede doğru kullanılmıştır.","Bu cümle kusursuzdur: \"göz yummak\" görmezden gelmek anlamındadır ve cümlede doğru kullanılmıştır.",null],
  aciklama: `Deyimler kendi anlamıyla kullanılmalıdır. Yanlış anlamda kullanılan deyim cümleyi mantık hatasına götürür.
Adım 1: Deyimin anlamını belirle: "gözünden düşmek" değerini ve saygınlığını yitirmek demektir.
Adım 2: Dördüncü cümlede birincilik gibi olumlu bir sonuçtan sonra "gözünden düştü" denmiş; üstelik arkasından "alkışlarla karşılandı" geliyor. İkisi çelişir.
Adım 3: Öteki cümlelerde deyimler doğru anlamlarıyla kullanılmıştır (çok sevindi, dinleyen, görmezden gelen).
Sağlama: Deyimi anlamıyla değiştirip cümleyi yeniden oku; anlam çelişiyorsa deyim yanlış kullanılmıştır.
Cevap D.`
},
{
  id: "tur-ab-344",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kompozisyon ödevinden alınan cümleler şunlardır:
I. Sınıf kitaplığına bağışlanan kitaplar bu hafta öğrencilere dağıtıldı.
II. Kardeşim hem sebze çorbasını hem de taze ekmeğe bayılır.
III. Maç bitince seyirciler tribünlerden indi ve stadyumdan ayrıldı.
**Bu cümlelerden hangilerinde anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "Yalnız II",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "I kusursuzdur: \"kitaplar\" özne, \"dağıtıldı\" edilgen yüklemdir ve \"öğrencilere\" yönelme hâli yerindedir.",
    "I ve III kusursuzdur: I'de özne-yüklem uyumu tam; III'te \"indi\" ve \"ayrıldı\" aynı özneye (seyirciler) bağlı iki uyumlu yüklemdir.",
    null,
    "III kusursuzdur: \"tribünlerden\" ve \"stadyumdan\" ayrılma hâlinde ve \"indi\" ile \"ayrıldı\" yüklemlerine uygundur."
  ],
  aciklama: `Her cümleyi ayrı ayrı sına; sonra hangilerinin bozuk olduğunu işaretle.
Adım 1: I → "kitaplar dağıtıldı" ve "öğrencilere" yönelme hâli; bozukluk yok.
Adım 2: II → "bayılmak" fiili yönelme hâli (-e) ister: "çorbasına bayılır". Cümlede "çorbasını" (-i) yazılmış; ortak yüklem "bayılır" ilk öğeye uymuyor. Ek yanlışlığı var.
Adım 3: III → "indi" ve "ayrıldı" ayrılma hâli (-den) isteyen iki yüklemdir; "tribünlerden", "stadyumdan" bu ekle doğru kurulmuş. Bozukluk yok.
Sağlama: II'yi "…hem sebze çorbasına hem de taze ekmeğe bayılır." diye yazarsan bozukluk biter.
Cevap C.`
},
{
  id: "tur-ab-345",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir spor kulübünün dergisinde yayımlanan düşünce cümlelerinden dördü aşağıda verilmiştir.
**Bu cümlelerin hangisinde anlamca çelişen sözcükler birlikte kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Yarınki maçı büyük olasılıkla takımımız kazanacak diye düşünüyorum.",
    "Yarınki maçı takımımızın kazanması için elimizden geleni yapacağız.",
    "Yarınki maçı kesinlikle takımımız kazanabilir diye düşünüyorum.",
    "Yarınki maçı kazansak bile finale gitmemiz için bir maç daha kazanmamız gerekir."
  ],
  dogru: 2,
  hatalar: [
    "Bu cümle kusursuzdur: \"büyük olasılıkla\" yüksek bir ihtimali anlatır, \"kazanacak\" ile uyumludur.",
    "Bu cümle kusursuzdur: \"elimizden geleni yapacağız\" kararlılık bildirir, çelişen bir ifade yoktur.",
    null,
    "Bu cümle kusursuzdur: \"kazansak bile\" ve \"bir maç daha kazanmamız gerekir\" birbirini tamamlayan koşul bildirir."
  ],
  aciklama: `"Kesinlikle" kesinlik, "-ebilir" ise olasılık bildirir. Biri "kesin", öteki "belki" der; birlikte kullanılınca anlam çelişir.
Adım 1: Her cümlede kesinlik ve olasılık bildiren ifadeleri bul.
Adım 2: Birinci cümlede "büyük olasılıkla" ile "kazanacak" tutarlı. İkinci ve dördüncü cümlede çelişki yok.
Adım 3: Üçüncü cümlede "kesinlikle" ve "kazanabilir" yan yana. Kazanması kesinse "kazanabilir" denmez.
Adım 4: Düzeltme: "kesinlikle kazanacak" ya da "kazanabilir".
Sağlama: İki ifadeyi ayrı ayrı oku; biri "eminim", öteki "emin değilim" diyor.
Cevap C.`
},
{
  id: "tur-ab-346",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Sınıf panosuna asılan bir uyarı yazısında şu cümle bulunmaktadır:
"Öğretmenimiz, ödevi yapmayanları onları uyardı."
**Bu cümledeki anlatım bozukluğu aşağıdakilerden hangisi yapılarak giderilir?**`,
  gorsel: null,
  secenekler: [
    "\"onları\" sözcüğü cümleden çıkarılmalıdır.",
    "\"ödevi\" sözcüğü \"ödev\" biçimine çevrilmelidir.",
    "\"uyardı\" sözcüğü \"uyardılar\" biçimine çevrilmelidir.",
    "\"yapmayanları\" sözcüğü \"yapmayanlar\" biçimine çevrilmelidir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "\"Ödev yapmayanları\" biçimi de kurallıdır ama \"onları\" fazlalığı yerinde kalır; bozukluk giderilmez.",
    "\"Öğretmenimiz\" tekildir; çoğul yüklem yeni bir uyumsuzluk yaratır ve \"onları\" fazlalığı kalır.",
    "\"Yapmayanlar\" özne gibi okunur ve \"öğretmenimiz\" ile karışır; ayrıca \"onları\" fazlalığı yerinde kalır."
  ],
  aciklama: `Aynı varlığı iki kez gösteren iki öğe (burada nesne) cümleyi bozar. "Ödevi yapmayanları" zaten uyarılan kişileri gösterir.
Adım 1: Yüklemi bul: "uyardı". "Kimi uyardı?" diye sor.
Adım 2: Cevap "ödevi yapmayanları"dır; "onları" ise aynı nesneyi ikinci kez söylüyor.
Adım 3: Fazla olan "onları" sözcüğü çıkarılınca "Öğretmenimiz, ödevi yapmayanları uyardı." kusursuz olur.
Sık yapılan hata: Eksik bir ek ya da yüklem aramak; bu cümlede sorun eksiklik değil fazlalıktır.
Cevap A.`
},
{
  id: "tur-ab-347",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sinema gününü anlatan kompozisyondan dört cümle seçilmiştir.
**Bu cümlelerin hangisinde mantık hatasından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Bileti son anda alabildiğim için sinemaya koşarak gittim ve filme yetiştim.",
    "Bilet almayı unuttuğum için sinemaya girdim ve filmi baştan sona izledim.",
    "Film bitince sinemadan çıktık ve sahilde biraz yürüdük.",
    "Sinemada arka sıradaki seyirciler konuşunca film sesini zor duyduk."
  ],
  dogru: 1,
  hatalar: [
    "Bu cümle kusursuzdur: bileti son anda almak ile koşarak gitmek tutarlıdır.",
    null,
    "Bu cümle kusursuzdur: olaylar zaman sırasına göre dizilmiş ve yüklemler uyumludur.",
    "Bu cümle kusursuzdur: konuşma sesi ile filmi zor duymak arasında doğru neden-sonuç ilişkisi vardır."
  ],
  aciklama: `Neden-sonuç ilişkisi gerçeğe aykırıysa mantık hatası oluşur.
Adım 1: Her cümlede nedeni ve sonucu bul.
Adım 2: İkinci cümlede neden "bilet almayı unutmak"tır; sonuç "sinemaya girip filmi baştan sona izlemek" olarak verilmiş. Bilet almayı unutan kişi sinemaya giremez; sonuç nedenle çelişir.
Adım 3: Öteki cümlelerde neden ve sonuç aynı yönde ilerliyor.
Sağlama: "Bilet almadığım için filme giremedim" cümlesi tutarlıdır.
Cevap B.`
},
{
  id: "tur-ab-348",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gezi yazısından dört cümle alınmıştır.
**Bu cümlelerin hangisinde yüklemin gerektirdiği tümleç eksiktir?**`,
  gorsel: null,
  secenekler: [
    "Ekip, dağ yolunu yaya olarak aşıp tepedeki gözlem evine ulaştı.",
    "Teknemiz fırtınaya rağmen sabaha karşı küçük bir koya sığındı.",
    "Kargo şirketi siparişleri iki gün içinde müşterilere teslim etti.",
    "Kurtarma ekibi gece yarısı yola çıktı ve sabaha karşı ulaştı."
  ],
  dogru: 3,
  hatalar: [
    "Bu cümle kusursuzdur: \"ulaştı\" yükleminin yönelme tümleci \"gözlem evine\" yazılıdır.",
    "Bu cümle kusursuzdur: \"sığındı\" yükleminin yönelme tümleci \"koya\" yazılıdır.",
    "Bu cümle kusursuzdur: \"teslim etti\" yükleminin nesnesi (siparişleri) ve tümleci (müşterilere) yazılıdır.",
    null
  ],
  aciklama: `Bazı fiiller yönelme hâli tümleci olmadan eksik kalır: "ulaşmak", "varmak", "sığınmak", "gitmek" gibi fiillere "nereye?" sorusu sorulur.
Adım 1: Dördüncü cümlede yüklem "ulaştı"dır. "Nereye ulaştı?" diye sor.
Adım 2: "Sabaha karşı" zaman bildirir, yer bildirmez. Cümlede yönelme hâlinde bir tümleç yok.
Adım 3: Öteki cümlelerde tümleçler yazılmış (gözlem evine, koya, müşterilere).
Adım 4: Düzeltme: "…sabaha karşı kazazedelerin bulunduğu yere ulaştı."
Sık yapılan hata: Zamanı bildiren ifadeyi yer tümleci sanmak.
Cevap D.`
},
{
  id: "tur-ab-349",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Okul atölyesinde yapılan bir çalışmayı anlatan yazıda şu cümle bulunmaktadır:
"Öğrenciler, atölyede ahşaptan kuş yuvası yaptılar ve duvara asıldı."
**Bu cümledeki anlatım bozukluğunu gideren ve yeni bir bozukluk doğurmayan düzeltme aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "\"yaptılar\" sözcüğü \"yapıldı\" biçiminde yazılmalıdır.",
    "\"asıldı\" sözcüğü \"astılar\" biçiminde yazılmalıdır.",
    "\"duvara\" sözcüğü \"duvarı\" biçiminde yazılmalıdır.",
    "\"ahşaptan\" sözcüğü \"ahşabı\" biçiminde yazılmalıdır."
  ],
  dogru: 1,
  hatalar: [
    "\"Öğrenciler … yapıldı\" yeni bir çatı uyuşmazlığı doğurur: öğrenciler özne iken edilgen yüklem yazılmış olur.",
    null,
    "Hâl ekini değiştirmek çatı uyuşmazlığını gidermez; \"asmak\" yönelme hâlini zaten \"duvara\" ile alır.",
    "Hâl ekini değiştirmek çatı uyuşmazlığını gidermez; \"ahşaptan\" yapıldığı maddeyi bildirir ve doğrudur."
  ],
  aciklama: `Aynı özneye bağlı yüklemler aynı çatıda olmalıdır. Düzeltme yaparken yeni bir bozukluk doğmamasına da dikkat et.
Adım 1: Özneyi bul: "öğrenciler". İlk yüklem "yaptılar" etkendir.
Adım 2: İkinci yüklem "asıldı" edilgendir; işi yapan öğrenciler olduğu hâlde edilgen çekimlenmiş. Çatı uyuşmazlığı var.
Adım 3: En doğru düzeltme, uymayan yüklemi özneye ve diğer yüklemin çatısına uydurmaktır: "…yaptılar ve duvara astılar."
Adım 4: Birinci seçenek özneyle uyuşmayan yeni bir bozukluk doğurur; diğerleri bozukluğun nedenine dokunmaz.
Sağlama: Düzeltilmiş cümlede iki yüklem de etken, üçüncü çoğul kişi ve özneyle uyumlu.
Cevap B.`
},
{
  id: "tur-ab-350",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Öğretmen, tahtaya şu üç cümleyi yazmıştır:
I. Öğrenciler, fen şenliğinde yaptıkları deneyleri karşılıklı birbirine anlattı.
II. Bahçıvan, kuruyan gülleri sökmek yerine yeniden sulamaya karar verdi.
III. Servis aracı okul önünde durdu ve öğrenciler sırayla indi.
**Bu cümlelerden hangilerinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 2,
  hatalar: [
    "II ve III kusursuzdur; \"Yalnız I\" bozuk olan cümleyi kusursuz sayar ve kusursuz iki cümleyi dışarıda bırakır.",
    "I bozuktur: \"karşılıklı\" ve \"birbirine\" aynı anlamı yineler; gereksiz sözcük vardır.",
    null,
    "I bozuktur; üç cümlenin hepsi kusursuz değildir."
  ],
  aciklama: `Kökte "yoktur" sorulduğuna dikkat et: kusursuz olanları seçeceksin.
Adım 1: I → "karşılıklı" ve "birbirine" aynı anlama gelir; biri fazladır. Gereksiz sözcük, yani bozuk.
Adım 2: II → "sökmek yerine sulamaya karar verdi" kalıbı eş görevli öğeleri doğru kurmuş; yüklem özneye uyar. Kusursuz.
Adım 3: III → iki cümlecik ayrı öznelidir (servis aracı durdu, öğrenciler indi); her yüklem kendi öznesine uyar. Kusursuz.
Sonuç: Bozukluk II ve III'te yoktur.
Sık yapılan hata: Kökteki "yoktur" sözcüğünü gözden kaçırıp bozuk olanı işaretlemek.
Cevap C.`
},
{
  id: "tur-ab-351",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bayram şenliğini anlatan yazıdan dört cümle seçilmiştir.
**Bu cümlelerin hangisinde bağlaç kullanımından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Çocuk, elindeki renkli balonu havaya bırakarak ve sevinçle koştu.",
    "Çocuk, balonunu elinden kaçırınca hem ağladı hem de kaçan balonun peşinden koştu.",
    "Yağmur başlayınca herkes ağaçların altına sığındı.",
    "Meydandaki çocuklar, balonları havaya bırakıp gökyüzüne baktı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bu cümle kusursuzdur: \"hem … hem de\" iki eylemi eşit düzeyde bağlıyor, yüklemler uyumludur.",
    "Bu cümle kusursuzdur: \"-ınca\" zaman bildirir ve iki cümlecik arasındaki ilişki doğrudur.",
    "Bu cümle kusursuzdur: \"-ıp\" zarf-fiili iki eylemi bağlıyor ve yanında ayrıca bağlaç yok."
  ],
  aciklama: `"-arak", "-ıp" gibi zarf-fiil ekleri iki eylemi zaten birbirine bağlar. Yanlarına bir de "ve" koymak gereksiz bağlaç kullanımıdır.
Adım 1: Her cümlede eylemleri bağlayan öğeleri ara.
Adım 2: Birinci cümlede "bırakarak" zarf-fiildir; eylemi "koştu" ile bağlıyor. Aralarına "ve" girmesi fazladır.
Adım 3: İkinci cümledeki "hem … hem de" bir bağlaç çiftidir ve doğru kullanılmıştır. Üçüncü ve dördüncü cümlelerde bağlama tek bir araçla yapılmıştır.
Adım 4: Düzeltme: "Çocuk, elindeki renkli balonu havaya bırakarak sevinçle koştu."
Sık yapılan hata: Bağlaç görünce cümleyi doğru saymak. Zarf-fiil varsa "ve"yi sorgula.
Cevap A.`
},
{
  id: "tur-ab-352",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yarışma duyurusundan alınan dört cümle aşağıda verilmiştir.
**Bu cümlelerin hangisinde özne ile yüklem arasında sayı bakımından uyumsuzluk vardır?**`,
  gorsel: null,
  secenekler: ["Yarışmaya katılan öğrenciler ödüllerini törende alacak.","Sınıfımızdaki öğrencilerden hiçbiri kitabını unutmadı.","Bu mahallede oturan herkes parkın yenilenmesini istiyor.","Yarışmacıların her biri sıra numarasını sahnede aldılar."],
  dogru: 3,
  hatalar: ["Bu cümle kusursuzdur: özne \"öğrenciler\" üçüncü çoğul kişidir; çoğul eki almayan \"alacak\" yüklemi de uyumludur.","Bu cümle kusursuzdur: \"hiçbiri\" tekil öznedir ve \"unutmadı\" tekildir.","Bu cümle kusursuzdur: \"herkes\" tekil öznedir ve \"istiyor\" tekildir.",null],
  aciklama: "\"Biri, hiçbiri, herkes, her biri\" gibi sözcükler tekil özne sayılır. Önlerinde çoğul bir ad (yarışmacıların) bulunsa bile yüklem tekil olmalıdır.\nAdım 1: Dördüncü cümlede özne \"yarışmacıların her biri\"dir; tekil bir öznedir.\nAdım 2: Yüklem \"aldılar\" çoğul eki taşıyor; özneyle sayı bakımından uyumsuz.\nAdım 3: Düzeltme: \"…sıra numarasını sahnede aldı.\"\nAdım 4: Birinci cümlede özne çoğul olsa da üçüncü kişi için çoğul eki zorunlu değildir. İkinci ve üçüncü cümlelerde tekil özneye tekil yüklem uyar.\nSık yapılan hata: \"Yarışmacıların\" sözcüğündeki çoğulu görüp özneyi çoğul sanmak. Öznenin çekirdeği \"her biri\"dir.\nCevap D."
},
{
  id: "tur-ab-353",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Dil bilgisi çalışma kâğıdında bağlaçların anlama uygun kullanımı yoklanıyor.
**Aşağıdaki cümlelerin hangisinde bağlaç, cümlecikler arasındaki anlam ilişkisine uygun kullanılmamıştır?**`,
  gorsel: null,
  secenekler: [
    "Yağmur başladığı için maç yarım saat ertelendi.",
    "Salonun kapısı kilitliydi, bu nedenle toplantıya bahçede devam ettik.",
    "Kasaya uzun bir kuyruk olmasına rağmen bekleyenler sakin davrandı.",
    "Hazırlıklarını titizlikle yaptı ve yarışmada ilk elemede elendi."
  ],
  dogru: 3,
  hatalar: [
    "Bu cümle kusursuzdur: \"-dığı için\" neden bildirir; yağmur ile erteleme arasındaki neden-sonuç ilişkisi doğrudur.",
    "Bu cümle kusursuzdur: \"bu nedenle\" önce nedeni, sonra sonucu getirir; kilitli kapı ile bahçede devam etme tutarlıdır.",
    "Bu cümle kusursuzdur: \"rağmen\" karşıtlık bildirir; uzun kuyruk ile sakin davranma karşıt durumlardır.",
    null
  ],
  aciklama: `Karşıt iki durum arasındaki ilişki "ama, fakat, -dığı hâlde" gibi karşıtlık bildiren bağlarla kurulur. "Ve" böyle bir karşıtlığı anlatmaz.
Adım 1: Her cümlede iki cümlecik arasındaki ilişkiyi belirle (neden-sonuç, karşıtlık, ekleme).
Adım 2: Birinci ve ikinci cümlede neden-sonuç, üçüncü cümlede karşıtlık doğru kurulmuş.
Adım 3: Dördüncü cümlede titizlikle hazırlanmak ile elenmek karşıt durumlardır. Bu karşıtlığı "ve" bağlacı karşılayamaz.
Adım 4: Düzeltme: "Hazırlıklarını titizlikle yaptı ama yarışmada ilk elemede elendi."
Sık yapılan hata: "Ve"nin her zaman uygun olduğunu sanmak. Cümlecikler arasındaki ilişkiye bak.
Cevap D.`
},
{
  id: "tur-ab-354",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul teknoloji kulübünün bülteninden dört cümle alınmıştır.
**Bu cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Yeni tabletin pili ancak sadece üç saat dayanıyor.",
    "Yazılım kulübü ilk toplantısını önümüzdeki cuma günü yapacağını duyurdu.",
    "Tüm dosyalar buluta yüklendi ve ardından bilgisayardan sildik.",
    "Atölyede öğrenciler robotu monte etti ve test ettik."
  ],
  dogru: 1,
  hatalar: [
    "Gereksiz sözcük vardır: \"ancak\" ve \"sadece\" aynı anlama (yalnızca) gelir, biri fazladır.",
    null,
    "Çatı uyuşmazlığı vardır: \"yüklendi\" edilgen, \"sildik\" etkendir; ikisi aynı özneye (dosyalar) bağlıdır.",
    "Özne-yüklem uyumsuzluğu vardır: \"öğrenciler\" üçüncü çoğul kişidir; \"monte etti\" uyar, \"test ettik\" birinci çoğul kişiyle çekimlenmiştir."
  ],
  aciklama: `"Yoktur" sorusunda bozuk olan üç cümleyi ayıklayıp geriye kalanı seçmek en güvenli yoldur.
Adım 1: Birinci cümlede "ancak" ve "sadece" aynı anlamda; gereksiz sözcük.
Adım 2: Üçüncü cümlede "yüklendi" edilgen, "sildik" etken; aynı özneye bağlı yüklemlerin çatısı farklı.
Adım 3: Dördüncü cümlede özne "öğrenciler" (onlar); "etti" uyar ama "ettik" biz kişisine geçmiş. Kişi uyumsuzluğu.
Adım 4: İkinci cümlede özne "yazılım kulübü", yüklem "duyurdu" uyumlu; "yapacağını" ise "duyurdu" yüklemine nesne olur; "önümüzdeki" ve "cuma günü" birbirini yinelemez. Kusursuz.
Sağlama: İkinci cümlede her yüklemin öznesini ve nesnesini kolayca bulabiliyorsun.
Cevap B.`
},
{
  id: "tur-ab-355",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul etkinliğini anlatan yazıda şu cümle yer almaktadır:
"Kutlama sırasında Kaan fotoğrafları çekti, Selin ise videoyu kaydettim."
Bu cümleyle ilgili şu yargılar öne sürülmüştür:
I. Bozukluk, özne ile yüklemin kişi bakımından uyuşmamasından kaynaklanır.
II. "kaydettim" sözcüğü "kaydetti" biçiminde yazılırsa bozukluk giderilir.
III. "çekti" sözcüğü "çektim" biçiminde yazılırsa bozukluk giderilir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "Yalnız I",
    "Yalnız II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "I doğrudur ama II de doğrudur: \"kaydetti\" yazılırsa Selin ile yüklem uyumlu olur.",
    "II doğrudur ama I de doğrudur: bozukluğun nedeni kişi uyumsuzluğudur.",
    "III yanlıştır: \"Kaan fotoğrafları çektim\" olur; bu kez ilk cümlecik bozulur ve ikinci cümlecik de düzelmez."
  ],
  aciklama: `Bozukluğu önce adlandır, sonra yargıları tek tek sına.
Adım 1: İlk cümlecikte özne "Kaan", yüklem "çekti"; üçüncü tekil kişi, uyumlu. İkinci cümlecikte özne "Selin", yüklem "kaydettim" birinci tekil; kişi bakımından uyuşmuyor.
Adım 2: I → bozukluğun nedeni kişi uyumsuzluğudur; yargı doğru.
Adım 3: II → "Selin ise videoyu kaydetti." olursa uyum kurulur; yargı doğru.
Adım 4: III → "çekti" doğrudur; onu "çektim" yapmak Kaan ile uyumu bozar ve asıl bozukluğu gidermez; yargı yanlış.
Sonuç: I ve II doğrudur.
Cevap A.`
},
{
  id: "tur-ab-356",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bilim müzesi gezisini anlatan yazıdan numaralı cümleler verilmiştir:
(1) Sekizinci sınıflar bu yıl bilim müzesine bir gezi düzenledi.
(2) Rehber, öğrencileri gruplara ayırdı ve müzenin kurallarını anlattık.
(3) Öğrenciler en çok uzay bölümünde vakit geçirdi.
(4) Gezinin sonunda herkes müzeden çıkarken geriye geri dönüp son bir kez baktı.
(5) Dönüşte öğrenciler otobüste müzede gördüklerini birbirine anlattı.
**(2). ve (4). cümlelerdeki bozuklukların nedenleri sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Gereksiz sözcük kullanımı – özne-yüklem uyumsuzluğu",
    "Özne-yüklem uyumsuzluğu – gereksiz sözcük kullanımı",
    "Çatı uyuşmazlığı – anlamca çelişen sözcükler",
    "Yüklem eksikliği – gereksiz sözcük kullanımı"
  ],
  dogru: 1,
  hatalar: [
    "Nedenlerin sırası ters verilmiştir: (2)'de gereksiz sözcük yoktur, (4)'te de özne-yüklem uyumsuzluğu yoktur.",
    null,
    "(2)'de iki yüklem de etkendir, çatı uyuşmazlığı yoktur; (4)'te çelişen sözcük değil aynı anlamlı sözcükler vardır.",
    "(2)'de her yüklemin kendi nesnesi (öğrencileri, kuralları) yazılıdır; yüklem eksikliği yoktur."
  ],
  aciklama: `İki ayrı bozukluğu birbirinden ayırırken önce her bozuk cümlenin nedenini ayrı ayrı adlandır.
Adım 1: (1), (3) ve (5) kusursuzdur: yüklemler öznelerle uyumlu, anlam tutarlı.
Adım 2: (2) → aynı özneye ("rehber") bağlı iki yüklem var: "ayırdı" (üçüncü tekil) ve "anlattık" (birinci çoğul). Özne-yüklem uyumsuzluğu, yani dil bilgisi yönünden bozukluk.
Adım 3: (4) → "geriye" ve "geri" aynı anlamı iki kez söyler. Bu, anlam yönünden gereksiz sözcük kullanımıdır.
Adım 4: Sıra önemli: önce (2), sonra (4) sorulduğu için "özne-yüklem uyumsuzluğu – gereksiz sözcük" eşleşmesi doğrudur.
Sık yapılan hata: İki nedeni doğru bulup sırayı karıştırmak.
Cevap B.`
},
{
  id: "tur-ab-357",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okul müdür yardımcısının verdiği görevlerle ilgili şu cümle yazılmıştır:
"Müdür yardımcısı hem nöbetçi öğrencilere hem de koridordaki öğretmenleri uyardı."
**Bu cümledeki anlatım bozukluğu aşağıdakilerin hangisinde de vardır?**`,
  gorsel: null,
  secenekler: [
    "Eski mahallemizdeki ağaçlar hem gölge verdi hem de sokağı serinletti.",
    "Bayram sabahı ev halkı hem erkenden kalktı hem de kahvaltı sofrasını kurdu.",
    "Tatilden dönen komşumuz hem bize hediye getirdi hem de bizi çok özlediğini söyledi.",
    "Kaptan hem kıyıda bekleyen yolcuları hem de iskeledeki görevliye el salladı."
  ],
  dogru: 3,
  hatalar: [
    "Bu cümle kusursuzdur: \"verdi\" ve \"serinletti\" farklı nesnelerle (gölge, sokağı) kurulmuş, ekler yüklemlere uygundur.",
    "Bu cümle kusursuzdur: \"kalktı\" ve \"kurdu\" aynı özneye bağlıdır; her yüklemin kendi tümleci ya da nesnesi vardır.",
    "Bu cümle kusursuzdur: \"getirdi\" ve \"söyledi\" ayrı yüklemlerdir; \"bizi … özlediğini\" öğesi de doğru kurulmuştur.",
    null
  ],
  aciklama: `Verilen cümlede "uyardı" yüklemi belirtme hâli (-i) ister: "öğretmenleri uyardı" doğru. Ama "hem … hem de" ile eş görevli bağlanan ilk öğe "öğrencilere" yönelme hâlinde yazılmış. Eş görevli öğeler aynı görevde ve aynı ekte olmalıdır.
Adım 1: Verilen cümledeki bozukluğu adlandır: eş görevli öğelerde (öğrencilere / öğretmenleri) ek uyumsuzluğu.
Adım 2: Birinci, ikinci ve üçüncü seçeneklerde "hem … hem de" kalıbı var ama öğelerin ekleri yüklemlere uygun; bozukluk yok.
Adım 3: Dördüncü seçenekte "el sallamak" fiili yönelme hâli (-e) ister. "Yolcuları" belirtme hâlinde, "görevliye" yönelme hâlinde; eş görevli öğeler farklı ekte. Aynı bozukluk.
Adım 4: Düzeltme: "Kaptan hem kıyıda bekleyen yolculara hem de iskeledeki görevliye el salladı."
Sağlama: "Yolcuları el salladı" denmez; "yolculara el salladı" denir.
Cevap D.`
},
{
  id: "tur-ab-358",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okul haberinde şu cümle yer almıştır:
"Okulumuzun robotik takımı il finaline katıldı ve birincilik ödülü verildi."
**Bu cümledeki anlatım bozukluğunu gideren ve yeni bir bozukluk doğurmayan düzeltme aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "\"verildi\" sözcüğü \"kazandı\" biçiminde yazılmalıdır.",
    "\"katıldı\" sözcüğü \"katılındı\" biçiminde yazılmalıdır.",
    "\"ödülü\" sözcüğü \"ödülünü\" biçiminde yazılmalıdır.",
    "\"verildi\" sözcüğü \"verdiler\" biçiminde yazılmalıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "\"Takımı … katılındı\" edilgen yüklemin öznesini yok eder; özne \"takım\" iken \"verildi\" ile birlikte cümle yine uyuşmaz, yeni bozukluk doğar.",
    "Ek değiştirmek çatı uyuşmazlığını gidermez: \"katıldı\" etken, \"verildi\" edilgen olarak kalır.",
    "\"Verdiler\" kişi-sayı olarak özneyle (takım) uyuşmaz ve \"takım ödül verdi\" anlamı da değişir; yeni bozukluk doğar."
  ],
  aciklama: `Aynı özneye bağlı yüklemler aynı çatıda olmalıdır. Düzeltme, hem bozukluğu gidermeli hem de yeni bir bozukluk yaratmamalıdır.
Adım 1: Özne "robotik takımı"dır. "Katıldı" etkendir, yani işi takım yapmıştır.
Adım 2: "Verildi" edilgendir; ödülü veren başkasıdır. İki yüklem farklı çatıda; çatı uyuşmazlığı var.
Adım 3: Takımın yapabileceği eylem "ödül kazanmak"tır. "Kazandı" etken ve özneyle uyumludur.
Adım 4: Düzeltilmiş cümle: "Okulumuzun robotik takımı il finaline katıldı ve birincilik ödülü kazandı."
Sağlama: Diğer seçeneklerde ya çatı karışıklığı sürer ya da özneyle uyum bozulur.
Cevap A.`
},
{
  id: "tur-ab-359",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir spor dergisinin yazı işleri bölümü, gelen dört cümleyi inceliyor.
**Bu cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: ["Antrenör, oyuncuların performansını izledi ve çok beğendim.","Final maçının biletleri bir saat içinde hemen derhal tükendi.","Teknik direktör, maçtan önce oyuncularını toplayıp son taktiği anlattı.","Okul futbol takımı kaptanı babası maçı tribünden izledi."],
  dogru: 2,
  hatalar: ["Kişi uyumsuzluğu vardır: özne \"antrenör\" üçüncü tekil kişidir; \"izledi\" uyar, \"beğendim\" birinci tekil kişiyle çekimlenmiştir.","Gereksiz sözcük vardır: \"hemen\" ve \"derhal\" aynı anlama gelir.",null,"Tamlama yanlışlığı vardır: \"kaptanı babası\" yerine \"kaptanının babası\" olmalıdır; tamlayan eki eksiktir."],
  aciklama: "Önce üç bozuk cümleyi ayıkla, kalan cümlenin gerçekten kusursuz olduğunu yeniden sına.\nAdım 1: Birinci cümlede özne \"antrenör\" (üçüncü tekil), \"izledi\" uyar; \"beğendim\" ise birinci tekil kişidir. Kişi uyumsuzluğu.\nAdım 2: İkinci cümlede \"hemen\" ve \"derhal\" aynı anlamı iki kez söylüyor.\nAdım 3: Dördüncü cümlede \"futbol takımı kaptanı\" zinciri \"kaptanının babası\" olarak sürmeli; ek eksik.\nAdım 4: Üçüncü cümlede iki yüklem (\"toplayıp\", \"anlattı\") aynı özneye bağlı, ikisi de etken ve üçüncü kişi. Nesneleri (oyuncularını, taktiği) ayrı yazılmış, \"maçtan önce\" zaman bildiren söz doğru yerde. Kusursuz.\nCevap C."
},
{
  id: "tur-ab-360",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir doğa gezisi yazısında geçen cümlelerden dördü şöyledir.
**Bu cümlelerin hangisinde anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Yıldızları gözlemlemek için teleskopa bakan çocuklar, gökyüzünün güzelliğine hayran kaldı.",
    "Fen öğretmeni, deneyden önce bütün öğrencilerin gözlük taktığından emin oldu.",
    "Doğa kulübünün başkanı, kuş gözlem etkinliğini planladı ve sonuna kadar katıldı.",
    "Kuş gözlemcileri sabah erkenden gölün kıyısına geldi, dürbünlerini çıkarıp beklemeye başladı."
  ],
  dogru: 2,
  hatalar: [
    "Bu cümle kusursuzdur: \"hayran kalmak\" yönelme hâli ister ve \"güzelliğine\" doğru kurulmuştur.",
    "Bu cümle kusursuzdur: \"emin olmak\" ayrılma hâli ister ve \"taktığından\" doğru kurulmuştur.",
    null,
    "Bu cümle kusursuzdur: \"geldi\" ve \"başladı\" aynı özneye bağlı uyumlu yüklemlerdir; yan öğeler doğru yerinde."
  ],
  aciklama: `Ortak öğe sınaması: bir öğe iki yükleme birden bağlanıyorsa her yüklemin o öğeyi aynı ekle istediğini denetle.
Adım 1: Üçüncü cümlede "etkinliğini" hem "planladı" hem "katıldı" yüklemine bağlanıyor.
Adım 2: "Planlamak" belirtme hâli (-i) ister: "etkinliği planladı". "Katılmak" ise yönelme hâli (-e) ister: "etkinliğe katıldı". Ortak öğe ikinci yükleme uymuyor.
Adım 3: Düzeltme: "…kuş gözlem etkinliğini planladı ve sonuna kadar ona katıldı."
Adım 4: Birinci, ikinci ve dördüncü cümlelerde her yüklem istediği ekle birlikte kullanılmıştır.
Sağlama: "Neye katıldı?" sorusuna cümleden uygun cevap çıkmıyor.
Cevap C.`
},
{
  id: "tur-ab-361",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Okul panosundaki duyurulardan üç cümle aşağıda verilmiştir:
I. Okul bahçesine yeni bir oyun alanı yapıldı ve çocuklara açtılar.
II. Öğrenciler sınıfı toplayıp çöpleri kutuya attı.
III. Panoya yeni sınav takvimi asıldı ve öğrencilere hatırlattık.
**Bu cümlelerden hangilerinde çatı uyuşmazlığı vardır?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "III de bozuktur: \"asıldı\" edilgen, \"hatırlattık\" etkendir; çatılar farklıdır.",
    null,
    "II kusursuzdur: \"toplayıp\" ve \"attı\" aynı özneye (öğrenciler) bağlı iki etken yüklemdir.",
    "II kusursuzdur: iki yüklem de etken ve özneyle uyumludur."
  ],
  aciklama: `Aynı özneye bağlı yüklemlerin çatısını karşılaştır: biri edilgen, biri etkense çatı uyuşmazlığı vardır.
Adım 1: I → "yapıldı" edilgen, "açtılar" etken. Çatı uyuşmazlığı var.
Adım 2: II → "toplayıp" ve "attı" ikisi de etken; özne "öğrenciler". Bozukluk yok.
Adım 3: III → "asıldı" edilgen, "hatırlattık" etken. Çatı uyuşmazlığı var.
Sonuç: Çatı uyuşmazlığı I ve III'tedir.
Sık yapılan hata: Her cümlede "ve" bağlacını gördüğünde bozukluk aramak; çatıyı yüklemlere bakarak belirle.
Cevap B.`
},
{
  id: "tur-ab-362",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir robot yarışmasının duyurusundan numaralı cümleler verilmiştir:
(1) Yarışma, okulumuzun spor salonunda hafta sonu yapılacak.
(2) Takımlar, hazırladıkları robotları jüriye sunmadan önce son kez denedik.
(3) Jüri üyeleri her projeyi dikkatle inceleyip puanlayacak.
(4) Sonuçlar akşam ilan edilecek ve kazananlara ödüller verilecek.
(5) Yarışmaya katılan her takımın üyeleri sertifika alacak.
**Bu cümlelerin kaçında anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "1",
    "2",
    "3",
    "4"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bozuk cümle sayısı 1'dir; 2 demek kusursuz bir cümleyi bozuk saymaktır.",
    "Bozuk cümle sayısı 1'dir; 3 demek kusursuz iki cümleyi bozuk saymaktır.",
    "Bozuk cümle sayısı 1'dir; 4 demek kusursuz üç cümleyi bozuk saymaktır."
  ],
  aciklama: `Her cümleyi ayrı ayrı sına ve bozuk olanları say.
Adım 1: (1) → özne "yarışma", yüklem "yapılacak" edilgen; uyumlu.
Adım 2: (2) → özne "takımlar" üçüncü çoğul kişidir; "denedik" ise birinci çoğul kişidir. Özne-yüklem uyumsuzluğu var; bozuk.
Adım 3: (3) → "inceleyip" ve "puanlayacak" aynı nesneyi (projeyi) ister, ikisi de -i ekine uyar; uyumlu.
Adım 4: (4) → "ilan edilecek" ve "verilecek" ikisi de edilgen ve farklı özneli iki cümlecik; uyumlu.
Adım 5: (5) → özne "üyeleri", yüklem "alacak"; uyumlu.
Sonuç: Yalnız (2). cümle bozuktur; sayı 1.
Sağlama: Kusursuz cümleler (1), (3), (4), (5); 5 − 4 = 1.
Cevap A.`
},
{
  id: "tur-ab-363",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okul gezisi raporundan dört cümle seçilmiştir.
**Bu cümlelerin hangisinde özne ile yüklem arasında sayı bakımından uyumsuzluk vardır?**`,
  gorsel: null,
  secenekler: ["Bahçedeki ağaçlar fırtınada eğildi ama kırılmadı.","Sınıfın yarısı gezi parasını yatırdı.","Bir grup öğrenci sergiyi gezdi ve hatıra defterini imzaladı.","Gruptaki küçük kız, heykele dokunup fotoğraf çektirdiler."],
  dogru: 3,
  hatalar: ["Bu cümle kusursuzdur: özne \"ağaçlar\" üçüncü kişidir; çoğul eki almayan \"eğildi\" yüklemi uyumludur.","Bu cümle kusursuzdur: özne \"yarısı\" tekildir ve \"yatırdı\" tekildir.","Bu cümle kusursuzdur: özne \"bir grup öğrenci\" tekil bir topluluktur; \"gezdi\" ve \"imzaladı\" tekildir ve uyumludur.",null],
  aciklama: "Tek kişiyi gösteren özne, tekil yüklemle kullanılmalıdır. Yüklem çoğul ekini alırsa özne ile yüklem sayı bakımından uyuşmaz.\nAdım 1: Dördüncü cümlenin öznesini \"kim?\" diye sorarak bul: \"Gruptaki küçük kız\". Özne tek kişidir.\nAdım 2: Yüklemler \"dokunup\" ve \"çektirdiler\"dir. \"Çektirdiler\" çoğul ekini taşıyor; özneyle sayı bakımından uyuşmuyor.\nAdım 3: Düzeltme: \"Gruptaki küçük kız, heykele dokunup fotoğraf çektirdi.\"\nAdım 4: Birinci cümlede çoğul özne üçüncü kişi olduğu için tekil yüklemle de kullanılabilir. İkinci ve üçüncü cümlelerde özne tekildir ve yüklemler tekildir.\nSık yapılan hata: Cümlenin başındaki uzun öbekte \"grup\" sözcüğünü görüp öznenin çoğul olduğunu sanmak. Özneyi her zaman yükleme \"kim?\" diye sorarak bul.\nCevap D."
},
{
  id: "tur-ab-364",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir şehir parkını tanıtan yazıdan numaralı cümleler verilmiştir:
(1) Parktaki yürüyüş yolları hafta sonu yenilendi.
(2) Çocuklar oyun alanından ayrılmak istemedi.
(3) Parkı ziyaret edenler güvenlik görevlisine selam verip teşekkür ettik.
(4) Park yönetimi bu yıl yaklaşık olarak tahminen beş yüz fidan dikecek.
(5) Parkta çalışan gönüllüler kendi fidanlarını dikip adlarını levhaya yazdınız.
**Bu cümlelerden hangi ikisindeki bozukluk aynı nedenden kaynaklanmaktadır?**`,
  gorsel: null,
  secenekler: [
    "(1) ve (2)",
    "(2) ve (4)",
    "(4) ve (5)",
    "(3) ve (5)"
  ],
  dogru: 3,
  hatalar: [
    "(1) ve (2) kusursuzdur; ikisinde de bozukluk yoktur.",
    "(2) kusursuzdur; yalnız (4) bozuktur (gereksiz sözcük).",
    "(4) gereksiz sözcük yüzünden, (5) kişi uyumsuzluğu yüzünden bozuktur; nedenleri farklıdır.",
    null
  ],
  aciklama: `Önce her cümlenin bozukluğunu adlandır, sonra aynı adı taşıyanları eşleştir.
Adım 1: (1) ve (2) kusursuz. (2)'de çoğul özne ("çocuklar") üçüncü kişi olduğundan tekil yüklem uyar.
Adım 2: (3) → özne "ziyaret edenler" üçüncü çoğul kişidir, yüklem "ettik" birinci çoğul kişidir. Kişi uyumsuzluğu.
Adım 3: (4) → "yaklaşık olarak" ve "tahminen" aynı anlamdadır. Gereksiz sözcük.
Adım 4: (5) → özne "gönüllüler" üçüncü çoğul kişidir, yüklem "yazdınız" ikinci çoğul kişidir. Kişi uyumsuzluğu.
Sonuç: (3) ve (5) aynı nedenle bozuktur. (4) de bozuktur ama nedeni farklıdır.
Sık yapılan hata: İki bozuk cümleyi bulup nedenlerine bakmadan eşleştirmek.
Cevap D.`
},
{
  id: "tur-ab-365",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir dil bilgisi yarışmasında öğrencilerden aşağıdaki cümleler arasında kusursuz olanı bulmaları istenmiştir.
**Bu cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Rüzgâr hafifleyince denize açılarak ve balık tutmaya başladık.",
    "Mert, arkadaşının ağır çantasını taşıdı ve ona yardımcı oldu.",
    "Sesi hiç çıkmayan radyo, haber bültenini yüksek sesle okudu.",
    "Sokaklar bayraklarla süslendi, çünkü kutlama çok güzel geçti."
  ],
  dogru: 1,
  hatalar: [
    "Gereksiz bağlaç vardır: \"açılarak\" zarf-fiili eylemleri zaten bağlar, yanına \"ve\" getirilmemelidir.",
    null,
    "Anlamca çelişki vardır: \"sesi hiç çıkmayan\" bir radyo yüksek sesle haber okuyamaz.",
    "Neden-sonuç ters kurulmuştur: \"çünkü\" nedeni getirir; sokakların süslenmesi kutlamanın güzel geçmesinin nedeni değil, kutlama hazırlığıdır."
  ],
  aciklama: `Bu soruda üç cümle farklı nedenlerle bozuktur; kusursuz olanı bulmak için nedenleri ayrı ayrı adlandır.
Adım 1: Birinci cümlede "açılarak" zarf-fiildir ve eylemleri bağlar; "ve" bağlacı fazladır.
Adım 2: Üçüncü cümlede "sesi hiç çıkmayan" ile "yüksek sesle okudu" çelişir.
Adım 3: Dördüncü cümlede "çünkü" kendinden sonra nedeni getirir. Burada sokakların süslenmesi sonuç, kutlamanın güzel geçmesi neden gibi verilmiş; bağlaç ters kullanılmış.
Adım 4: İkinci cümlede "taşıdı" nesne ister (çantasını), "yardımcı oldu" ise ayrı bir yüklemdir ve "ona" ile kendi öğesini almıştır. Özne "Mert", iki yüklem uyumlu. Kusursuz.
Sağlama: İkinci cümlede ortak bir öğe yok; her yüklem kendi öğesiyle kullanılmış.
Cevap B.`
},
{
  id: "tur-ab-366",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sağlık kompozisyonunda şu cümle yer almaktadır:
"Hemşire, hastanın tansiyonunu ölçüp ateşine baktı ve gerekli ilaçları hazırlayarak doktora haber verdi."
Bu cümleyle ilgili şu yargılar öne sürülmüştür:
I. Cümlede çatı uyuşmazlığı vardır.
II. Cümledeki yüklemler aynı özneye bağlıdır ve kişi bakımından uyumludur.
III. Cümledeki bozukluk, "ateşine" sözcüğünün "ateşini" biçiminde yazılmasıyla giderilir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "Yalnız II",
    "I, II ve III"
  ],
  dogru: 2,
  hatalar: [
    "I yanlıştır: bütün yüklemler etkendir (ölçüp, baktı, hazırlayarak, haber verdi); çatı uyuşmazlığı yoktur.",
    "I ve III yanlıştır: çatı uyuşmazlığı yoktur; ayrıca cümlede bozukluk olmadığından III'ün giderecek bir şeyi yoktur.",
    null,
    "I ve III yanlıştır; yalnız II doğrudur."
  ],
  aciklama: `Önce cümlenin kusursuz olup olmadığını belirle, sonra yargıları sına.
Adım 1: Aynı özneye ("hemşire") bağlı yüklemler: "ölçüp", "baktı", "hazırlayarak", "haber verdi". Hepsi etkendir; üçüncü tekil kişidir.
Adım 2: Öğeler yüklemlere uygun: "tansiyonunu ölçüp" (-i), "ateşine baktı" (-e), "ilaçları hazırlayarak" (-i), "doktora haber verdi" (-e). Her yüklemin kendi öğesi var; ortak öğe yok.
Adım 3: I → çatı uyuşmazlığı yok; yargı yanlış.
Adım 4: II → yüklemler aynı özneye bağlı ve uyumlu; yargı doğru.
Adım 5: III → "ateşine baktı" doğrudur; "ateşini" yazmak onu bozar. Yargı yanlış.
Sonuç: Yalnız II doğrudur.
Sık yapılan hata: Cümle uzun diye bozukluk aramak.
Cevap C.`
},
{
  id: "tur-ab-367",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: "Yaban hayatının korunmasını anlatan bir yazıdan numaralı cümleler verilmiştir:\n(1) Ormanlık alanlarda yaşayan hayvanların sayısı her yıl azalıyor.\n(2) Yaban hayatı uzmanları, bunun en önemli nedeninin yaşam alanlarının daralması olduğunu söylüyor.\n(3) Ağaçlar kesildikçe hayvanlar yiyecek ve barınak bulabiliyorlar.\n(4) Bu nedenle birçok canlı yok olma tehlikesiyle karşı karşıya kalıyor.\n(5) Doğal alanları korumak isteyenler ormanlara yeniden tekrar fidan dikmeye başladı.\n(6) Herkes bu konuda üzerine düşeni yapmalıdır.\n**Bu cümlelerin kaçında anlatım bozukluğu vardır?**",
  gorsel: null,
  secenekler: [
    "2",
    "3",
    "4",
    "5"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bozuk cümle sayısı 2'dir; 3 demek kusursuz bir cümleyi bozuk saymaktır.",
    "Bozuk cümle sayısı 2'dir; 4 demek kusursuz iki cümleyi bozuk saymaktır.",
    "Bozuk cümle sayısı 2'dir; 5 demek kusursuz üç cümleyi bozuk saymaktır."
  ],
  aciklama: `Her cümleyi ayrı ayrı sına; hem dil bilgisi hem anlam bakımından bak.
Adım 1: (1) ve (2) kusursuz: özne-yüklem uyumu tam, anlam tutarlı.
Adım 2: (3) → ağaçlar kesildikçe hayvanların yiyecek ve barınak bulması beklenmez, bulamaması beklenir. Mantık hatası; bozuk.
Adım 3: (4) → "bu nedenle" ile önceki cümledeki durumdan sonuç çıkarılıyor; "karşı karşıya kalıyor" da doğru kurulmuş. Kusursuz.
Adım 4: (5) → "yeniden" ve "tekrar" aynı anlamdadır. Gereksiz sözcük kullanımı; bozuk.
Adım 5: (6) → "herkes" tekil, "yapmalıdır" tekil; kusursuz.
Sonuç: (3) ve (5) bozuktur; sayı 2.
Cevap A.`
},
{
  id: "tur-ab-368",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun spor şenliğini anlatan bir haberden numaralı cümleler verilmiştir:
(1) Okulumuzun spor şenliği bu yıl hava durumu nedeniyle kapalı spor salonunda yapıldı.
(2) Öğrenciler sabah dokuzdan itibaren voleybol, basketbol ve halat çekme yarışlarına katıldı.
(3) Sınıf temsilcileri hem takım listelerini hazırladı hem de hakemlere maç saatlerini.
(4) Hakemler maçları yöneterek skorları tabloya işledi.
(5) Hiç maç kazanamayan takım şampiyon olarak kupayı aldı.
**(3). ve (5). cümlelerdeki bozuklukların nedenleri sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Özne-yüklem uyumsuzluğu – gereksiz sözcük kullanımı",
    "Yüklem eksikliği – anlamca çelişki",
    "Ek yanlışlığı – anlamca çelişki",
    "Yüklem eksikliği – gereksiz sözcük kullanımı"
  ],
  dogru: 1,
  hatalar: [
    "(3)'te özneyle yüklem arasında kişi ya da sayı uyumsuzluğu yoktur; (5)'te gereksiz sözcük yoktur.",
    null,
    "(3)'te ekler doğrudur; sorun eksik yüklemdir. (5)'te gereksiz sözcük yoktur, çelişki vardır.",
    "(3) için yüklem eksikliği doğrudur ama (5)'te gereksiz sözcük yoktur, anlam çelişkisi vardır."
  ],
  aciklama: `İki bozukluğu doğru sırayla eşleştirmek için her cümleyi ayrı çöz.
Adım 1: (1), (2), (4) kusursuz: yüklemler özneye ve öğelere uyuyor.
Adım 2: (3) → "hazırladı" yalnız "takım listelerini" ile anlamlıdır. "Hakemlere maç saatlerini hazırladı" ise anlamsızdır; bu öğe için "bildirdi" gibi ayrı bir yüklem gerekir. Yüklem eksikliği.
Adım 3: (5) → "Hiç maç kazanamayan" bir takımın şampiyon olması çelişkilidir; şampiyon olmak için maç kazanmak gerekir. Anlamca çelişki.
Adım 4: Sıra (3), (5) şeklinde: yüklem eksikliği – anlamca çelişki.
Sağlama: (3) düzeltmesi: "… hem de hakemlere maç saatlerini bildirdi."
Cevap B.`
},
{
  id: "tur-ab-369",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okul gazetesinin yazım köşesine gelen dört cümle aşağıda verilmiştir.
**Bu cümlelerin hangisinde birden fazla anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Akşam yemeğinden sonra annem bulaşıkları yıkadı, babam ise mutfağı toparladık.",
    "Takım kaptanı hakeme itiraz etti ve sahadan uzaklaştırıldı.",
    "Servis her sabah tam zamanında vaktinde durağa geliyor.",
    "Ablamla ben pazara hep birlikte beraber gitti ve alışverişi yaptık."
  ],
  dogru: 3,
  hatalar: [
    "Yalnız bir bozukluk vardır: ikinci cümleciğin özne-yüklem uyumsuzluğu (babam – toparladık).",
    "Yalnız bir bozukluk vardır: çatı uyuşmazlığı (itiraz etti – uzaklaştırıldı).",
    "Yalnız bir bozukluk vardır: \"zamanında\" ve \"vaktinde\" aynı anlamı yineler.",
    null
  ],
  aciklama: `Bu soruda her cümledeki bozukluk sayısını ayrı ayrı belirlemen gerekir.
Adım 1: Birinci cümlede tek bozukluk var: özne "babam", yüklem "toparladık" (birinci çoğul). Kişi uyumsuzluğu.
Adım 2: İkinci cümlede özne "takım kaptanı"; "itiraz etti" etken, "uzaklaştırıldı" edilgen. Tek bozukluk: çatı uyuşmazlığı.
Adım 3: Üçüncü cümlede "zamanında" ve "vaktinde" aynı anlamdadır. Tek bozukluk: gereksiz sözcük.
Adım 4: Dördüncü cümlede iki ayrı bozukluk var: "hep birlikte beraber" gereksiz sözcük yineleme; ayrıca özne "ablamla ben" (biz) iken "gitti" üçüncü kişidir ve "yaptık" ile uyuşmaz. Kişi uyumsuzluğu.
Sonuç: Birden fazla bozukluk dördüncü cümlededir.
Cevap D.`
},
{
  id: "tur-ab-370",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yerel gazetenin okur köşesine gelen dört cümle incelenmektedir.
**Bu cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: ["Kasabanın eski çeşmesi, belediyece onarılıp yeniden hizmete açıldı.","Tören bittikten sonra herkes sırayla teker teker kürsüye çıktı.","Çok pahalı olan bu ucuz saati almak için uzun süre tasarruf yaptım.","Sergideki tablolar öğrenciler tarafından seçildi ve salona astık."],
  dogru: 0,
  hatalar: [null,"Gereksiz sözcük vardır: \"sırayla\" ve \"teker teker\" aynı anlama gelir.","Anlamca çelişki vardır: \"pahalı\" ve \"ucuz\" aynı saati niteliyor.","Çatı uyuşmazlığı vardır: \"seçildi\" edilgen, \"astık\" etkendir; ikisi de aynı özneye (tablolar) bağlanmıştır."],
  aciklama: `Üç bozuk cümleyi nedenleriyle birlikte ayıkla, kalanı seç.
Adım 1: İkinci cümlede "sırayla" ve "teker teker" aynı fikri iki kez söylüyor.
Adım 2: Üçüncü cümlede "pahalı" ve "ucuz" birbirinin zıddı; aynı saat hem pahalı hem ucuz olamaz.
Adım 3: Dördüncü cümlede "tablolar seçildi" edilgen, "salona astık" etken; çatılar farklı.
Adım 4: Birinci cümlede "onarılıp" ve "açıldı" ikisi de edilgen ve aynı özneye ("çeşme") bağlı; "yeniden" ise tamamen yeni bir bilgi. Kusursuz.
Sağlama: Birinci cümlede her sözcüğü çıkarmayı dene; çıkarınca anlam azalıyorsa gereksiz değildir.
Cevap A.`
},
{
  id: "tur-ab-371",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Okul yönetimi ile ilgili bir haberde şu cümle yer almıştır:
"Müdür bey hem sınıfları gezdi hem de ayrıca bunun yanı sıra öğretmenlerle konuştu."
**Bu cümledeki anlatım bozukluğu aşağıdakilerin hangisinde de vardır?**`,
  gorsel: null,
  secenekler: [
    "Öğrenciler hem sergiyi gezdi hem de hatıra defterine görüşlerini yazdı.",
    "Konuklar bagajlarını arabadan indirip eve taşıdık.",
    "Bu sırada aynı anda ikinci grup da sahneye çıktı.",
    "Rehber hem müzenin tarihini hem de heykelleri anlattı."
  ],
  dogru: 2,
  hatalar: [
    "Bu cümle kusursuzdur: \"gezdi\" ve \"yazdı\" ayrı yüklemlerdir; her öğenin kendi yüklemi ve eki vardır.",
    "Bu cümlede bozukluk vardır ama gereksiz sözcük değil, kişi uyumsuzluğudur: \"konuklar\" üçüncü çoğul kişidir, \"taşıdık\" birinci çoğul kişidir.",
    null,
    "Bu cümle kusursuzdur: \"anlattı\" yüklemi hem \"tarihini\" hem \"heykelleri\" ile uyumludur; ek ve anlam yönünden sorun yoktur."
  ],
  aciklama: `Verilen cümlede "ayrıca" ve "bunun yanı sıra" aynı anlamı taşır ve "hem de" ile üçüncü kez ekleme bildirir. Bu gereksiz sözcük kullanımıdır.
Adım 1: Bozukluğu adlandır: aynı anlamı yineleyen sözcük öbekleri.
Adım 2: Birinci ve dördüncü seçenekte "hem … hem de" kalıbı doğru kullanılmış; fazlalık yok.
Adım 3: İkinci seçenekte bozukluk var ama nedeni farklı (kişi uyumsuzluğu), bu yüzden eşleşmez.
Adım 4: Üçüncü seçenekte "bu sırada" ve "aynı anda" aynı anlamı yineler; gereksiz sözcük. Verilen cümleyle aynı bozukluk.
Sağlama: Üçüncü seçeneği "Bu sırada ikinci grup da sahneye çıktı." yaparsan düzelir.
Cevap C.`
},
{
  id: "tur-ab-372",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir robotik kulübünü tanıtan yazıdan numaralı cümleler verilmiştir:
(1) Okulumuzun robotik kulübü bu yıl bölge yarışmasına katılacak.
(2) Kulüp üyeleri hafta içi her gün okuldan sonra atölyede toplanacak.
(3) Yazılım sorumlusu Selin, kodları tamamlayıp ekibe gösterdim.
(4) Kulüp üyeleri yarışmada kullanılacak parçaları satın aldı ve atölyeye getirildi.
(5) Takım danışmanı çalışmaları yakından izleyip öğrencilere destek oldu.
(6) Takım kaptanı pilleri değiştirdi ve bağlantıları kontrol ettik.
**Bu cümlelerden hangi ikisindeki bozukluk aynı nedenden kaynaklanmaktadır?**`,
  gorsel: null,
  secenekler: [
    "(1) ve (2)",
    "(3) ve (4)",
    "(3) ve (6)",
    "(4) ve (5)"
  ],
  dogru: 2,
  hatalar: [
    "(1) ve (2) kusursuzdur; ikisinde de bozukluk yoktur.",
    "(3) kişi uyumsuzluğu, (4) çatı uyuşmazlığı yüzünden bozuktur; nedenleri farklıdır.",
    null,
    "(5) kusursuzdur; yalnız (4) bozuktur (çatı uyuşmazlığı)."
  ],
  aciklama: `Bozuk cümleleri bul ve her birinin nedenini adlandır.
Adım 1: (1), (2), (5) kusursuz: öznelerle yüklemler uyumlu.
Adım 2: (3) → özne "Selin" (üçüncü tekil), yüklem "gösterdim" (birinci tekil). Kişi uyumsuzluğu.
Adım 3: (4) → "satın aldı" etken, "getirildi" edilgen; ikisi de üçüncü kişidir ve aynı özneye ("kulüp üyeleri") bağlıdır. Yalnız çatı uyuşmazlığı var.
Adım 4: (6) → özne "takım kaptanı" (üçüncü tekil); "değiştirdi" uyar, "ettik" (birinci çoğul) uymaz. Kişi uyumsuzluğu.
Sonuç: (3) ve (6) aynı nedenle, yani kişi uyumsuzluğundan bozuktur.
Sık yapılan hata: (4)'ü de "yüklem uyumsuzluğu" diye (3) ve (6) ile eşleştirmek; (4)'ün nedeni çatıdır.
Cevap C.`
},
{
  id: "tur-ab-373",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gazetecinin sergi yazısından dört cümle seçilmiştir.
**Bu cümlelerin hangisinde ortak kullanılan öğe yüzünden anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Gazeteci, yeni açılan sergideki eserlere hayran kaldı ve çok etkilendi.",
    "Gazeteci, yeni açılan sergiye gidip yöneticilerle konuştu.",
    "Gazeteci, sergideki eserleri inceleyip hakkında yazı yazdı.",
    "Gazeteci, sergiyi hazırlayanlara teşekkür etti ve onları tebrik etti."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bu cümle kusursuzdur: \"gidip\" ve \"konuştu\" ayrı öğeleri (sergiye, yöneticilerle) alır; ortak öğe yoktur.",
    "Bu cümle kusursuzdur: \"inceleyip\" nesnesini (eserleri) alır, \"yazdı\" için \"hakkında yazı\" ayrı yazılmıştır.",
    "Bu cümle kusursuzdur: \"teşekkür etti\" yönelme, \"tebrik etti\" belirtme hâli ister; \"hazırlayanlara\" birincisine, \"onları\" ikincisine ayrı ayrı yazılmıştır."
  ],
  aciklama: `Ortak öğe sınaması: iki yükleme tek öğe bağlanmışsa her yüklemin o öğeyi aynı ekle istediğini denetle.
Adım 1: Birinci cümlede "eserlere" iki yükleme birden bağlanıyor: "hayran kaldı" ve "etkilendi".
Adım 2: "Hayran kalmak" yönelme hâli (-e) ister: "eserlere hayran kaldı". "Etkilenmek" ise ayrılma hâli (-den) ister: "eserlerden etkilendi".
Adım 3: Ortak "eserlere" ikinci yükleme uymuyor; ek eksikliği var.
Adım 4: Düzeltme: "…sergideki eserlere hayran kaldı ve onlardan çok etkilendi."
Adım 5: Öteki cümlelerde her yüklemin öğesi ya ayrı yazılmış ya da aynı ekle uyumludur.
Cevap A.`
},
{
  id: "tur-ab-374",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: "Kutup ayılarını anlatan bir bilgilendirme yazısından numaralı cümleler verilmiştir:\n(1) Kutup ayıları, yaşamlarının büyük bölümünü buzul alanlarında geçirir.\n(2) Buzullar eridikçe ayıların avlanabileceği alanlar daralıyor.\n(3) Bilim insanları bu nedenle ayıların kıyıya inmesini ve yiyecek aramasını gözlemledi.\n(4) Araştırmacılar, bölgedeki ayı sayısını uydu görüntüleriyle izliyor ve düzenli olarak yayımlanıyor.\n**Bu yazıdaki bozukluk ve giderilme yolu aşağıdakilerden hangisinde doğru verilmiştir?**",
  gorsel: null,
  secenekler: ["(2); \"daralıyor\" sözcüğü \"daralıyorlar\" olmalıdır.","(4); \"yayımlanıyor\" sözcüğü \"yayımlıyor\" olmalıdır.","(3); \"gözlemledi\" sözcüğü \"gözlemlediler\" olmalıdır.","(1); \"geçirir\" sözcüğü \"geçirirler\" olmalıdır."],
  dogru: 1,
  hatalar: [
    "Özne \"alanlar\" üçüncü kişidir ve yüklem tekil kalabilir; \"daralıyor\" zaten uyumludur, çoğul yapmak bozukluğu gidermez.",
    null,
    "(3) kusursuzdur; \"gözlemlediler\" yazmak çoğul eki ekler ama bozukluk (4)'tedir, bu düzeltme onu gidermez.",
    "(1) kusursuzdur; \"geçirirler\" yazmak çoğul eki ekler ama bozukluk (4)'tedir, bu düzeltme onu gidermez."
  ],
  aciklama: "Bozukluğun hangi cümlede olduğunu ve düzeltmenin onu giderip gidermediğini birlikte kontrol et.\nAdım 1: (1), (2) ve (3) kusursuzdur: özneler ve yüklemler uyumlu, nesneler yüklemlere uygun.\nAdım 2: (4)'te özne \"araştırmacılar\"dır. \"İzliyor\" etkendir (araştırmacılar izler). \"Yayımlanıyor\" ise edilgendir ve aynı özneye bağlanmıştır; oysa araştırmacılar yayımlanmaz, ayı sayısını yayımlar.\nAdım 3: Doğru düzeltme, ikinci yüklemi de etken yapmaktır: \"…izliyor ve düzenli olarak yayımlıyor.\" Ortak nesne \"ayı sayısını\" iki yükleme de uyar.\nAdım 4: Öteki seçenekler kusursuz cümleleri değiştirir ve gerçek bozukluğa dokunmaz.\nSağlama: Düzeltilmiş cümlede iki yüklem de etken ve özneyle uyumlu.\nCevap B."
},
{
  id: "tur-ab-375",
  kazanim: "T.8.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir şiir yarışmasının sonuç duyurusundan dört cümle alınmıştır.
**Bu cümlelerin hangisindeki anlatım bozukluğu, ortak kullanılan nesne ya da tümlecin yüklemlerden birine uymamasından kaynaklanmaktadır?**`,
  gorsel: null,
  secenekler: [
    "Zeynep ödülünü aldı ve herkese teşekkür ettiler.",
    "Ödül törenine katılan herkes ayakta beraber birlikte alkışladı.",
    "Yarışmaya gönderilen şiirler jüri üyelerince okundu ve puanladı.",
    "Edebiyat öğretmenimiz şiir yarışmasını duyurdu ve ilk günden katıldı."
  ],
  dogru: 3,
  hatalar: [
    "Bozukluk vardır ama nedeni ortak öğe değil, sayı uyumsuzluğudur: özne \"Zeynep\" tekil, \"ettiler\" çoğuldur.",
    "Bozukluk vardır ama nedeni ortak öğe değil, gereksiz sözcüktür: \"beraber\" ve \"birlikte\" aynı anlamdadır.",
    "Bozukluk vardır ama nedeni ortak öğe değil, çatı uyuşmazlığıdır: \"okundu\" edilgen, \"puanladı\" etkendir.",
    null
  ],
  aciklama: `Önce her cümledeki bozukluğun nedenini adlandır, sonra sorulan nedeni taşıyanı seç.
Adım 1: Birinci cümlede özne "Zeynep" tekil, ikinci yüklem "ettiler" çoğul. Sayı uyumsuzluğu.
Adım 2: İkinci cümlede "beraber" ve "birlikte" aynı anlamı iki kez söylüyor. Gereksiz sözcük.
Adım 3: Üçüncü cümlede "okundu" edilgen, "puanladı" etken; çatı uyuşmazlığı.
Adım 4: Dördüncü cümlede "şiir yarışmasını" ortak öğedir. "Duyurmak" belirtme hâli (-i) ister; "katılmak" ise yönelme hâli (-e) ister: "yarışmaya katıldı". Ortak öğe ikinci yükleme uymuyor.
Sağlama: Dördüncü cümleyi "…yarışmayı duyurdu ve ilk günden ona katıldı." yaparsan bozukluk biter.
Cevap D.`
}
/*SON*/
);
