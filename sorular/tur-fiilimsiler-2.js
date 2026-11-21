// Türkçe — Fiilimsiler: Kademe 3 (LGS Ayarı) ve Havuz
// Kazanım: T.8.3.9 Fiilimsilerin cümledeki işlevlerini kavrar. (Türler fark ettirilir, ekler ezberletilmez.)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["fiilimsiler"] = window.LGS_BANK["fiilimsiler"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "tur-fi-301",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun gökyüzü kulübü, her yıl sonbaharda bir gözlemevi gezisi düzenler. Bu yılki gezi, ayın en karanlık gecesine denk geldi. Kulüp üyeleri geziden sonra defterlerine birer sayfa not tutar. Aşağıda bu defterdeki dört not sırayla verilmiştir.
**Buna göre, numaralanmış cümlelerin hangisinde fiilimsi __kullanılmamıştır__?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Okulumuzun gökyüzü kulübü, hafta sonu şehir dışındaki küçük gözlemevine bir gezi düzenledi.</td></tr><tr><td>II</td><td>Gözlemevi, yıldızları rahatça izlemek için ışık kirliliğinden uzak bir tepeye kurulmuş.</td></tr><tr><td>III</td><td>Kubbenin altındaki teleskobun başına geçen öğrenciler, Satürn'ün halkalarını ilk kez gördü.</td></tr><tr><td>IV</td><td>Rehber öğretmen, gezegenlerin yerini gösterirken sesini hiç yükseltmedi.</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "II'deki 'izlemek' sözcüğünü mastar hâlinde bir fiil sanma: kip ve kişi eki almamıştır, işin adını bildiren isim-fiildir.",
    "III'teki 'geçen' sözcüğünü zaman bildiren bir söz sanma: 'öğrenciler'i niteleyen sıfat-fiildir.",
    "IV'teki 'gösterirken' sözcüğünü çekimli fiil sanma: işin ne zaman yapıldığını bildiren zarf-fiildir."
  ],
  aciklama: `Fiilimsi, bir fiilden türeyen ama cümlede isim, sıfat ya da zarf görevi üstlenen sözcüktür. Kip ve kişi eki almadığı için cümlenin çekimli fiili olamaz.
Adım 1: II. cümleye bak. 'izlemek' bir işin adıdır; 'ne için kurulmuş?' sorusunun karşılığıdır. Bu bir isim-fiildir.
Adım 2: III. cümleye bak. 'geçen' sözcüğü 'hangi öğrenciler?' sorusuna cevap verir, yani bir varlığı niteler. Bu bir sıfat-fiildir.
Adım 3: IV. cümleye bak. 'gösterirken' sözcüğü 'ne zaman yükseltmedi?' sorusunun karşılığıdır. Bu bir zarf-fiildir.
Adım 4: I. cümledeki sözcükleri tek tek geçir: 'kulübü', 'gezi', 'düzenledi'. 'gezi' fiilden türemiştir ama yapım ekiyle kalıcı bir ad olmuştur; 'düzenledi' ise görülen geçmiş zaman ve 3. kişi ekini almış çekimli fiildir. Cümlede fiilimsi yoktur.
Sık yapılan hata: Fiilden türemiş her sözcüğü fiilimsi saymak. 'gezi', 'gözlem', 'yazı' gibi sözcükler yapım ekiyle türemiş adlardır; fiilimsi değildir.
Cevap A.`
},
{
  id: "tur-fi-302",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gönüllü grubu, çöpe atılacak eski telefonlar için bir onarım atölyesi açtı. Grup, her cumartesi öğleden sonra bir okulun boş sınıfında toplanıyor. Bu yıl iki yüzden fazla telefon yeniden kullanıma kazandırıldı. Aşağıda bu atölyeyle ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisindeki fiilimsi, tür bakımından diğer üçünden farklıdır?**`,
  gorsel: null,
  secenekler: [
    "Eski cihazları onarmak, hem parayı hem de doğayı korur.",
    "Lehim makinesinin çalışması, kapının önünden bile duyuluyor.",
    "Gönüllüler, kartların temizlenmesini işin en sıkıcı bölümü sayıyor.",
    "Atölyeye gelen cihazların çoğu yalnızca küçük bir arıza taşıyor."
  ],
  dogru: 3,
  hatalar: [
    "'onarmak' sözcüğünü çekimli fiil sanma: kip ve kişi eki almamıştır, işin adını bildirir; bu bir isim-fiildir.",
    "'çalışması' sözcüğünü iyelik eki aldığı için ad sanma: yine işin adını bildirir; bu da isim-fiildir.",
    "'temizlenmesini' sözcüğünü yapım ekiyle türemiş bir ad sanma: 'neyi en sıkıcı bölüm sayıyor?' sorusunun karşılığıdır, işin adını bildirdiği için isim-fiildir.",
    null
  ],
  aciklama: `Fiilimsinin türünü ek değil, sözcüğün cümledeki görevi belirler: işin adını bildiriyorsa isim-fiil, bir varlığı niteliyorsa sıfat-fiil, işin nasıl-ne zaman yapıldığını bildiriyorsa zarf-fiildir.
Adım 1: A'daki 'onarmak' → 'ne korur?' sorusunun karşılığıdır, bir işin adıdır: isim-fiil.
Adım 2: B'deki 'çalışması' → 'ne duyuluyor?' sorusunun karşılığıdır, yine bir işin adıdır: isim-fiil.
Adım 3: C'deki 'temizlenmesini' → 'neyi en sıkıcı bölüm sayıyor?' sorusunun karşılığıdır; nesne görevinde olsa da yine bir işin adıdır: isim-fiil.
Adım 4: D'deki 'gelen' → 'hangi cihazlar?' sorusuna cevap verir; 'cihazlar' adını niteler. Bu bir sıfat-fiildir ve diğer üçünden farklıdır.
Sağlama: A, B ve C'deki fiilimsileri cümleden çıkarırsan cümle 'neyi/nesi' sorusunun karşılığını kaybeder; D'dekini çıkarırsan 'cihazlar' adı niteliksiz kalır.
Cevap D.`
},
{
  id: "tur-fi-303",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Türkçe dersinde fiilimsi konusu işlendi. Öğretmen, tahtaya bir tren yolculuğuyla ilgili dört cümle yazdı ve sınıftan her cümledeki fiilimsiyi bulmasını istedi. Bir öğrenci, bulduğu fiilimsilerin türlerini aşağıdaki tabloya yazmıştır.
**Buna göre, öğrenci hangi cümledeki fiilimsinin türünü yanlış yazmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th><th>Öğrencinin yazdığı tür</th></tr><tr><td>I</td><td>Trenin kalkması on beş dakika ertelendi.</td><td>isim-fiil</td></tr><tr><td>II</td><td>Peronda bekleyen yolcular anonsu sabırla dinledi.</td><td>sıfat-fiil</td></tr><tr><td>III</td><td>Vagonun penceresinden görünen tarlalar sarıya boyanmıştı.</td><td>zarf-fiil</td></tr><tr><td>IV</td><td>Görevli, biletleri kontrol ederken herkese gülümsedi.</td><td>zarf-fiil</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "İsim-fiilin yalnızca -mak/-mek ekiyle kurulduğunu sanma: 'kalkması' da işin adını bildirir, tablodaki tür doğrudur.",
    "'bekleyen' sözcüğünü zarf sanma: 'hangi yolcular?' sorusuna cevap verdiği için sıfat-fiildir, tablodaki tür doğrudur.",
    null,
    "'ederken' sözcüğünü sıfat-fiil sanma: 'ne zaman gülümsedi?' sorusunun karşılığıdır, tablodaki tür doğrudur."
  ],
  aciklama: `Bir fiilimsinin türünü bulmak için ona soru sorarsın: 'ne?' sorusunun karşılığıysa isim-fiil, 'hangi?' sorusunun karşılığıysa sıfat-fiil, 'nasıl, ne zaman?' sorusunun karşılığıysa zarf-fiildir.
Adım 1: I → 'Ne ertelendi?' Cevap: 'trenin kalkması'. İşin adıdır, isim-fiil. Tablo doğru.
Adım 2: II → 'Hangi yolcular?' Cevap: 'bekleyen yolcular'. Bir varlığı niteler, sıfat-fiil. Tablo doğru.
Adım 3: III → 'Hangi tarlalar?' Cevap: 'görünen tarlalar'. 'görünen' sözcüğü 'tarlalar' adını nitelediği için sıfat-fiildir; öğrenci buraya zarf-fiil yazmış, yanılmıştır.
Adım 4: IV → 'Ne zaman gülümsedi?' Cevap: 'biletleri kontrol ederken'. Zarf-fiil. Tablo doğru.
Sık yapılan hata: Fiilimsiyi cümlenin ortasında ya da sonunda görünce zarf-fiil sanmak. Türü yer değil, görev belirler.
Cevap C.`
},
{
  id: "tur-fi-304",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Ayşe teyze, köyündeki küçük serada yıl boyunca sebze yetiştiriyor. Sera, iki yıl önce ilçe tarım müdürlüğünün desteğiyle kuruldu. Ayşe teyze sabah altıda seraya gider, akşama kadar orada kalır. Ürünlerini de pazartesi günleri ilçe pazarına götürür. Aşağıda onun bir gününden dört cümle verilmiştir.
**Bu cümlelerin hangisinde birden fazla fiilimsi vardır?**`,
  gorsel: null,
  secenekler: [
    "Serada yetişen domatesler, sabah erkenden toplanıyor.",
    "Ayşe teyze, fideleri dikerken eldiven takmayı hiç ihmal etmiyor.",
    "Ayşe teyze, toprağın nemini ölçmek için küçük bir aygıt kullanıyor.",
    "Camlara vuran yağmurun sesi serada yankılanıyordu."
  ],
  dogru: 1,
  hatalar: [
    "Çekimli fiili de fiilimsi sayma: 'toplanıyor' kip eki almış bir fiildir; bu cümlede yalnızca 'yetişen' fiilimsidir.",
    null,
    "'ölçmek için' sözündeki 'için' edatını ikinci bir fiilimsi sanma: edat tek başına fiilimsi olmaz, cümlede yalnızca 'ölçmek' fiilimsidir.",
    "'vuran' ile 'yankılanıyordu' sözcüklerinin ikisini de fiilimsi sayma: ikincisi kip eki almış çekimli fiildir."
  ],
  aciklama: `Bir cümlede yalnızca bir çekimli fiil bulunur; ondan başka fiil kökenli sözcükler varsa bunlar fiilimsidir. Bu yüzden önce çekimli fiili işaretle, sonra kalanları incele.
Adım 1: A → çekimli fiil 'toplanıyor'. Geriye 'yetişen' kalır: bir fiilimsi.
Adım 2: B → çekimli fiil 'etmiyor'. Geriye 'dikerken' (ne zaman? → zarf-fiil) ve 'takmayı' (neyi? → isim-fiil) kalır: iki fiilimsi.
Adım 3: C → çekimli fiil 'kullanıyor'. Geriye yalnızca 'ölçmek' kalır: bir fiilimsi.
Adım 4: D → çekimli fiil 'yankılanıyordu'. Geriye yalnızca 'vuran' kalır: bir fiilimsi.
Sağlama: Birden fazla fiilimsi taşıyan tek cümle B'dir ve bu iki fiilimsi farklı türdendir.
Cevap B.`
},
{
  id: "tur-fi-305",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Sekizinci sınıflar, şehirdeki bilim müzesini gezdi. Müzede uzay, fosiller ve basit deneyler için ayrı salonlar var. Öğrenciler her salonda yirmişer dakika kaldı, sonunda da birer gezi notu yazdı. Aşağıda bir öğrencinin defterinden dört cümle verilmiştir.
(I) Müzenin ilk salonundaki dev pusula, bu yılki gezinin en çok konuşulan parçasıydı.
(II) Vitrindeki fosiller, yüz yıl önce bir kömür ocağında bulunmuş.
(III) Uzay bölümünde astronot giysisini denememiz, ziyaretin en heyecanlı anıydı.
(IV) Rehber, deneyi anlatırken gönüllü bir öğrenci seçti.
**Buna göre, numaralanmış cümlelerin hangisinde isim-fiil kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "'gezinin' ya da 'konuşulan' sözcüğünü isim-fiil sanma: 'gezi' yapım ekiyle kalıcı ad olmuştur, 'konuşulan' ise 'hangi parça?' sorusuna cevap veren sıfat-fiildir.",
    "Her cümlede mutlaka fiilimsi bulunur sanma: 'bulunmuş' sözcüğündeki -mış eki duyulan geçmiş zaman ekidir, sözcük cümlenin çekimli fiilidir; II. cümlede fiilimsi yoktur.",
    null,
    "'anlatırken' sözcüğünü isim-fiil sanma: 'ne zaman seçti?' sorusuna cevap verir, bu bir zarf-fiildir."
  ],
  aciklama: `İsim-fiil, bir işi varlık gibi adlandırır; cümlede 'ne?' sorusunun karşılığı olur ve iyelik, hâl gibi ad çekim eklerini alabilir. Yapım ekiyle kalıcı ad olmuş sözcükler ise fiilimsi değildir.
Adım 1: I → Fiil kökenli iki sözcük var: 'gezinin' ve 'konuşulan'. 'gezi', tıpkı 'yazı' ya da 'gözlem' gibi yapım ekiyle türemiş kalıcı bir addır; 'konuşulan' ise 'hangi parça?' sorusuna cevap verir, sıfat-fiildir. İsim-fiil yok.
Adım 2: II → Fiil kökenli tek sözcük 'bulunmuş'tur; cümleyi bitirir, yargı bildirir. Buradaki -mış duyulan geçmiş zaman ekidir, sözcük çekimli fiildir. Fiilimsi yok.
Adım 3: III → 'Ziyaretin en heyecanlı anı neydi?' Cevap: 'astronot giysisini denememiz'. Bir işin adıdır ve iyelik eki almıştır; cümleden çıkarırsan 'en heyecanlı an'ın ne olduğu belirsiz kalır. İsim-fiil.
Adım 4: IV → 'anlatırken' sözcüğü işin ne zaman yapıldığını bildirir: zarf-fiil.
Sık yapılan hata: İsim-fiili yalnızca -mak/-mek ekinde aramak ve fiilden türeyen her sözcüğü ('gezi' gibi) fiilimsi saymak. Ölçüt ek değil görevdir: 'denememiz' bir işi adlandırır, 'gezi' ise artık bir varlığın adıdır.
Cevap C.`
},
{
  id: "tur-fi-306",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Fen kulübü, ilçedeki göl kıyısında iki günlük bir doğa gözlemi kampı düzenliyor. Programda kuş sayımı, bitki fotoğrafı ve gece gökyüzü gözlemi için ayrı saatler var. Herkes kendi çadırından ve çöpünden sorumlu. Grup cumartesi sabahı okuldan yola çıkacak; öğrenciler hazırlıklarını akşamdan tamamladı. Aşağıda kamp defterindeki cümlelerden dördü verilmiştir.
**Bu cümlelerin hangisinde fiilimsi vardır?**`,
  gorsel: null,
  secenekler: [
    "Yarın sabah çadırın önünde kuş sesleriyle uyanacağız.",
    "Rehberimiz, gece gözlemi için ayrı bir program hazırlamış.",
    "Çadırların yeri akşamdan haritada tek tek belirlenmişti.",
    "Ateşin çevresine dizilecek taşları sabahtan topladık."
  ],
  dogru: 3,
  hatalar: [
    "'uyanacağız' sözcüğünü fiilimsi sanma: burada -acak eki gelecek zaman ekidir ve sözcük kişi eki de almıştır; bu, cümlenin çekimli fiilidir.",
    "'hazırlamış' sözcüğünü fiilimsi sanma: burada -mış eki duyulan geçmiş zaman ekidir; sözcük cümlenin çekimli fiilidir.",
    "'belirlenmişti' sözcüğünü fiilimsi sanma: -mış eki ek fiille birleşerek zaman bildirmiştir; sözcük cümlenin çekimli fiilidir.",
    null
  ],
  aciklama: `Aynı ek, bir cümlede fiili çekimleyebilir, başka bir cümlede fiilimsi yapabilir. Karar vermek için sözcüğün görevine bak: bir adı nitelemiyor ve kip-kişi eki almışsa çekimli fiildir.
Adım 1: A → 'uyanacağız' yargı bildirir, cümleyi bitirir; kişi eki de almıştır. Çekimli fiil.
Adım 2: B → 'hazırlamış' yargı bildirir, cümleyi bitirir. Çekimli fiil.
Adım 3: C → 'belirlenmişti' yargı bildirir, cümleyi bitirir. Çekimli fiil.
Adım 4: D → 'dizilecek' sözcüğü cümleyi bitirmez; 'hangi taşlar?' sorusuna cevap vererek 'taşlar' adını niteler. Cümlenin çekimli fiili 'topladık'tır. Öyleyse 'dizilecek' bir sıfat-fiildir.
Sağlama: 'dizilecek taşlar' sözünü 'büyük taşlar' gibi okuyabiliyorsan sözcük sıfat görevindedir; 'uyanacağız' için böyle bir okuma yapılamaz.
Cevap D.`
},
{
  id: "tur-fi-307",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Üniversitenin spor bilimi merkezi, uzun mesafe koşucularına ücretsiz ölçüm hizmeti veriyor. Merkeze her hafta yirmi kadar sporcu geliyor. Ölçümler bir saat sürüyor ve sonuçlar aynı gün sporcuya ulaşıyor. Aşağıda bu merkezin çalışmasıyla ilgili dört cümle verilmiştir.
**Buna göre, numaralanmış cümlelerin hangisinde zarf-fiil kullanılmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Merkezde, koşucuların dakikadaki soluk sayısını ölçmek için özel bir maske kullanılıyor.</td></tr><tr><td>II</td><td>Bantta koşan sporcuların kalp ritmi ekrandan anlık izleniyor.</td></tr><tr><td>III</td><td>Uzman, ölçüm bitince sporcuya iki sayfalık ayrıntılı bir rapor veriyor.</td></tr><tr><td>IV</td><td>Bu raporlar, antrenmanın yoğunluğunu belirlemede antrenöre yol gösteriyor.</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "'ölçmek' sözcüğünü zarf-fiil sanma: 'ne için kullanılıyor?' sorusuna cevap verse de kendisi bir işin adıdır; bu bir isim-fiildir.",
    "'koşan' sözcüğünü zarf-fiil sanma: 'hangi sporcular?' sorusuna cevap verir; bu bir sıfat-fiildir.",
    null,
    "'belirlemede' sözcüğünü zarf-fiil sanma: hâl eki almış olsa da işin adını bildirir; bu bir isim-fiildir."
  ],
  aciklama: `Zarf-fiil, işin nasıl, ne zaman, ne kadar yapıldığını bildirir; cümlede bir eylemi durum ya da zaman yönünden tamamlar.
Adım 1: I → 'ölçmek' sözcüğüne 'ne?' diye sorabilirsin: bir işin adıdır, isim-fiil.
Adım 2: II → 'koşan' sözcüğü 'sporcular' adını niteler: sıfat-fiil.
Adım 3: III → 'Uzman ne zaman rapor veriyor?' Cevap: 'ölçüm bitince'. İşin zamanını bildirdiği için zarf-fiildir.
Adım 4: IV → 'belirlemede' sözcüğü 'yol gösterme' işinin konusunu adlandırır; 'belirleme işinde' demektir, yani isim-fiildir.
Sık yapılan hata: Hâl eki ya da edat alan her fiilimsiyi zarf-fiil sanmak. 'ölçmek için' ve 'belirlemede' sözlerinde fiilimsiler isim görevindedir; onlara eklenen edat ve ekler türü değiştirmez.
Cevap C.`
},
{
  id: "tur-fi-308",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Teyzem her yaz, deniz kaplumbağalarının yumurtladığı bir kumsalda gönüllü olarak çalışır. Dişi kaplumbağalar mayıstan ağustosa kadar geceleri kıyıya çıkar, kumda kazdıkları çukura yüze yakın yumurta bırakır. Yavrular yaklaşık iki ay sonra kumdan çıkar ve denizin parlaklığına doğru yürür; bu yüzden kumsalda geceleri ışık yakılmaz. Gönüllüler gün doğmadan kumsalı tarar, yeni yuvaların üstünü tel kafesle kapatır. Bu yıl bir nöbete ben de katıldım ve gördüklerimi günlüğüme yazdım:

(I) Ekip başkanı, kumda denize doğru uzanan izleri el feneri yakmadan tek tek saydı. (II) Tilkilerin eşelediği bir yuvayı yeniden kumla örtmek, teyzemin yarım saatini aldı. (III) Sabaha karşı ilk yavruyu görmek, gönüllülerin gece boyunca biriken yorgunluğunu bir anda sildi. (IV) Kumdan çıkan yavrular, dalgalara doğru yürümeyi kimseden öğrenmeden başardı.

Türkçe öğretmenim, bu cümlelerden birinde şu iki özelliğin birlikte bulunduğunu söyledi:
· Cümlenin öznesi, bir isim-fiille kurulmuş söz öbeğidir.
· Cümlenin nesnesinde, bir adı niteleyen sıfat-fiil vardır.

**Buna göre öğretmenin sözünü ettiği cümle, numaralanmış cümlelerden hangisidir?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: ["Yalnızca ikinci özelliği denetleme: nesnede “uzanan” sıfat-fiili vardır ama cümlenin öznesi “ekip başkanı” sözüdür; öznede isim-fiil yoktur.", "Sıfat-fiilin hangi ögede durduğuna bakmama: “eşelediği” sözcüğü öznenin içindeki “yuva” adını niteler; nesne olan “teyzemin yarım saatini” sözünde sıfat-fiil yoktur.", null, "Görevleri ters çevirme: bu cümlede sıfat-fiil öznededir (“çıkan yavrular”), isim-fiil ise nesnededir (“yürümeyi”); istenen bunun tersidir."],
  aciklama: `Fiilimsi, kendisine bağlı sözcüklerle birlikte bir söz öbeği kurar ve bu öbek cümlede tek bir öge olur. Bu yüzden önce yüklemi bul, sonra yükleme "Ne? Kim?" (özne) ve "Neyi?" (nesne) sorularını sor; fiilimsilere en son bak.
Adım 1: I → Yüklem "saydı". Kim saydı? "Ekip başkanı" (özne). Neyi saydı? "kumda denize doğru uzanan izleri" (nesne). Nesnede "uzanan" sıfat-fiili var ama öznede isim-fiil yok. Birinci özellik yok.
Adım 2: II → Yüklem "aldı". Ne aldı? "Tilkilerin eşelediği bir yuvayı yeniden kumla örtmek" (özne). Özne, "örtmek" isim-fiiliyle kurulmuş. Neyi aldı? "teyzemin yarım saatini" (nesne). Bu sözde sıfat-fiil yok; "eşelediği" sıfat-fiili öznenin içinde kalıyor. İkinci özellik yok.
Adım 3: III → Yüklem "sildi". Ne sildi? "Sabaha karşı ilk yavruyu görmek" (özne; "görmek" isim-fiiliyle kurulmuş). Neyi sildi? "gönüllülerin gece boyunca biriken yorgunluğunu" (nesne). Hangi yorgunluk? "Biriken yorgunluk": sıfat-fiil, nesnenin içinde bir adı niteliyor. İki özellik de var.
Adım 4: IV → Yüklem "başardı". Kim başardı? "Kumdan çıkan yavrular" (özne; içinde sıfat-fiil var). Neyi başardı? "dalgalara doğru yürümeyi" (nesne; isim-fiille kurulmuş). Görevler istenenin tam tersi.
Sık yapılan hata: II. cümlede "yuvayı" sözcüğündeki eke bakıp onu cümlenin nesnesi saymak. "Yuvayı", "örtmek" fiilimsisine bağlıdır ve onunla birlikte öznenin içinde yer alır. Cümlenin nesnesini fiilimsiye değil, yükleme soru sorarak bul.
Cevap C.`
},
{
  id: "tur-fi-309",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Kapadokya'da sıcak hava balonları gün doğarken havalanır; çünkü sabahın ilk saatlerinde rüzgâr hafiftir. Öğleye doğru ısınan toprak havayı hareketlendirir, uçuş güvenli olmaktan çıkar. Elif ile ailesi kalkış alanına henüz karanlıkta vardı. Görevli megafonla seslendi: “Balonlar birazdan __havalanacak__ (I), yolcular sepetlerin yanına gelsin!” Oysa yerde, henüz __şişirilmemiş__ (II) rengârenk kumaşlar yatıyordu; her biri bir ev büyüklüğündeydi. Bu yolculuğa ilk kez katılanlar biraz tedirgindi; Elif ise yerinde duramıyordu. Bir gece önce heyecandan doğru dürüst uyuyamamış, saat dörtte herkesten önce kalkmıştı. Onun aylardır tek hayali, peribacalarını bir kuş gibi yukarıdan __izlemekti__ (III). Pilot brülörü ateşledi; ısınan hava, yerde yatan kumaşı yavaş yavaş doğrulttu. Az sonra sepet, içindeki yolcuları hiç __sarsmadan__ (IV) yerden kesildi. Brülör arada bir gürlüyor, Elif'in yüzüne sıcak bir dalga çarpıyordu. Aşağıda vadiler, üzüm bağları ve gittikçe küçülen evler kalmıştı. Elif, pilotun balonu sağa sola çeviremediğini, onu alçaltıp yükselterek farklı yönlere esen rüzgârları aradığını o sabah öğrendi.

**Bu metinde numaralanmış sözcüklerle ilgili aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: ["I numaralı sözcük, kendisinden sonraki adı niteleyen bir sıfat-fiildir.", "II numaralı sözcük, olumsuzluk eki almış bir sıfat-fiildir.", "III numaralı sözcük, yüklem görevinde kullanılmış bir isim-fiildir.", "IV numaralı sözcük, işin nasıl gerçekleştiğini bildiren bir zarf-fiildir."],
  dogru: 0,
  hatalar: [null, "“-miş” ekli her sözcüğü çekimli fiil sanma: “şişirilmemiş” yargı bildirmez, “kumaşlar” adını niteler (“Hangi kumaşlar?”); içindeki “-me” olumsuzluk ekidir. Bu yargı doğrudur.", "Yüklem olan her sözcüğü çekimli fiil sanma: “izlemekti” sözcüğünde “izlemek” işin adıdır, sonundaki “-ti” ek fiildir. Bu yargı doğrudur.", "“-ma” sesini görüp sözcüğü isim-fiil ya da olumsuz fiil sanma: “sarsmadan”, sepetin yerden nasıl kesildiğini bildiren zarf-fiildir. Bu yargı doğrudur."],
  aciklama: `Bir sözcüğün fiilimsi olup olmadığına ekine değil, cümlede yaptığı işe bakarak karar verirsin: kip ve kişi anlamı taşıyıp yargı bildiren sözcük çekimli fiildir; fiilimsi ise ad, sıfat ya da zarf gibi kullanılır.
Adım 1: I → "Balonlar birazdan havalanacak, yolcular sepetlerin yanına gelsin!" Burada virgülle ayrılmış iki ayrı yargı var. "Havalanacak", "balonlar" öznesinin yüklemidir ve gelecek zaman bildirir; yani çekimli fiildir. Ardından "yolcular" adı gelse de onu nitelemez; sözcük kendi yargısını bitirmiştir. A'daki yargı söylenemez.
Adım 2: II → "henüz şişirilmemiş rengârenk kumaşlar": Hangi kumaşlar? "Şişirilmemiş" olanlar. Sözcük cümleyi bitirmiyor, yargı bildirmiyor; bir adı niteliyor: sıfat-fiil. İçindeki "-me" de olumsuzluk ekidir. B doğru.
Adım 3: III → "Tek hayali … izlemekti." Hayali neydi? "İzlemek." Bu bir işin adıdır; sonuna ek fiil ("-ti") alarak yüklem olmuştur. Yüklem olması onu fiilimsi olmaktan çıkarmaz. C doğru.
Adım 4: IV → "Sepet, yolcuları sarsmadan yerden kesildi." Nasıl kesildi? "Sarsmadan." Çekimli fiili durum yönünden niteleyen zarf-fiildir. D doğru.
Sık yapılan hata: "-acak" ekli sözcüğün arkasında bir ad görünce onu hemen sıfat-fiil saymak. Önce aradaki virgüle ve anlama bak: sözcük kendi yargısını bitiriyorsa çekimli fiildir, arkasındaki adla tek bir öbek kuruyorsa ("havalanacak balonlar") sıfat-fiildir.
Cevap A.`
},
{
  id: "tur-fi-310",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Ağustos gelince Karadeniz'in yamaçlarında fındık hasadı başlar. Bahçeler çok dik olduğu için buralara makine giremez; dallar elle eğilir, fındıklar tek tek toplanır. Dolu sepetleri sırtta taşımak, en güçlü işçiyi bile akşama kadar yorar. Toplanan fındık, yeşil kabuğuyla birlikte harman yerine serilir ve birkaç gün güneşte soldurulur. Hava kapanınca bütün aile harmana koşar; çünkü yağmur yiyen fındık küflenir. Köylüler, şehirden dönen akrabalarını da yardıma çağırır. Solan yeşil kabuklar, patoz adı verilen makinede ayrılır; geriye kalan sert kabuklu fındık yeniden güneşe çıkarılır. Harmana yayılan taneler kahverengi bir halıyı andırır. Türkiye, dünyadaki fındığın yarısından fazlasını tek başına üretir; bu yüzden birkaç haftalık bu telaş, bölgenin bütün yılını belirler.

Bir öğrenci, bu metindeki dört fiilimsiyi incelemiş; her birinin türünü ve cümlede hangi ögenin içinde yer aldığını aşağıdaki tabloya yazmıştır.

**Bu tabloda numaralanmış satırların hangisinde verilen iki bilgi de doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>No</th><th>Fiilimsi</th><th>Türü</th><th>İçinde yer aldığı öge</th></tr><tr><td>I</td><td>taşımak</td><td>isim-fiil</td><td>nesne</td></tr><tr><td>II</td><td>kapanınca</td><td>zarf-fiil</td><td>zarf tamlayıcısı</td></tr><tr><td>III</td><td>dönen</td><td>zarf-fiil</td><td>nesne</td></tr><tr><td>IV</td><td>yayılan</td><td>sıfat-fiil</td><td>yer tamlayıcısı</td></tr></table>",
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: ["Belirtme eki almış sözcüğü cümlenin nesnesi sanma: “sepetleri” sözcüğü “taşımak” fiilimsisine bağlıdır; “Dolu sepetleri sırtta taşımak” öbeği “Ne yorar?” sorusunun cevabıdır, yani öznedir. Tür doğru, öge yanlış.", null, "Sıfat-fiili zarf-fiil sanma: “dönen” sözcüğü “akrabalar” adını niteler, sıfat-fiildir. Öge doğru (nesne), tür yanlış.", "Fiilimsiye bağlı sözcüğü ayrı bir öge sayma: “harmana” sözcüğü “yayılan” fiilimsisine bağlıdır; “Harmana yayılan taneler” öbeğinin tamamı öznedir. Tür doğru, öge yanlış."],
  aciklama: `Bu soruda her satırda iki şeyi ayrı ayrı denetlemelisin: fiilimsinin türü ve içinde yer aldığı öge. Fiilimsi, kendisine bağlı sözcüklerle birlikte tek bir öge oluşturur; ögeyi bulmak için soruyu fiilimsiye değil, cümlenin yüklemine sor.
Adım 1: I → "Dolu sepetleri sırtta taşımak, en güçlü işçiyi bile akşama kadar yorar." "Taşımak" bir işin adıdır: isim-fiil, tür doğru. Yüklem "yorar". Ne yorar? "Dolu sepetleri sırtta taşımak." Bu öbek öznedir; cümlenin nesnesi "en güçlü işçiyi bile" sözüdür. Tabloda "nesne" yazıyor: öge yanlış.
Adım 2: II → "Hava kapanınca bütün aile harmana koşar." Ne zaman koşar? "Hava kapanınca." "Kapanınca" zarf-fiildir ve bu öbek zarf tamlayıcısıdır. İki bilgi de doğru.
Adım 3: III → "Köylüler, şehirden dönen akrabalarını da yardıma çağırır." Kimi çağırır? "Şehirden dönen akrabalarını." Öbek nesnedir, öge doğru. Ama "dönen", "akrabalar" adını niteler: sıfat-fiildir. Tabloda "zarf-fiil" yazıyor: tür yanlış.
Adım 4: IV → "Harmana yayılan taneler kahverengi bir halıyı andırır." "Yayılan", "taneler" adını niteler: sıfat-fiil, tür doğru. Ne andırır? "Harmana yayılan taneler." Öbeğin tamamı öznedir. Tabloda "yer tamlayıcısı" yazıyor: öge yanlış.
Sık yapılan hata: Fiilimsiye bağlı sözcükleri ("sepetleri", "harmana") eklerine bakarak cümlenin ayrı bir ögesi saymak. Bu sözcükler yükleme değil fiilimsiye bağlıdır; öbeği bölmeden bütün olarak düşün.
Cevap B.`
},
{
  id: "tur-fi-311",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Deniz fenerleri gemilere yalnızca karanın yerini göstermez. Karanlıkta bütün kıyılar birbirine benzer; denizcinin, karşısındaki ışığın hangi fenere ait olduğunu da bilmesi gerekir. Her fenerin kendine özgü bir ışık düzeni vardır: Kimi beş saniyede bir çakar, kimi art arda iki kez parlayıp uzun süre karanlıkta kalır. Kaptan bu düzeni haritadaki bilgiyle karşılaştırır ve hangi burnun açığında bulunduğunu anlar. Eskiden her fenerde bir bekçi yaşar, lambayı akşam yakıp sabah söndürürdü; bugün fenerlerin çoğu güneş enerjisiyle kendiliğinden çalışıyor. Bekçi kulübelerinin birçoğu müzeye ya da kafeye dönüştü. Üstelik uydular, gemilerin yerini dünyanın her köşesinde birkaç metrelik hatayla bildiriyor. Bu gelişmeler fenerlerin devrini kapatmış gibi görünebilir. Oysa elektronik aygıtlar arızalanabilir, fırtınada uydu bağlantısı kesilebilir, ekran bir anda kararabilir. Açık denizde bu, küçük bir aksaklıktır; kaptan beklemeyi göze alabilir. Kayalık bir kıyıda ise böyle bir an, geminin sonunu getirebilir. - - - -

**Bu parçanın sonuna, düşüncenin akışına uygun olan ve içinde hem isim-fiil hem zarf-fiil bulunan aşağıdaki cümlelerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["Bu yüzden eski fenerleri söküp yerlerine yeni uydu alıcıları kurmak gerekir.", "Bu yüzden denizciler, ekrana bakarken ufuktaki ışığı aramayı da bırakmaz.", "Bu yüzden limana yaklaşan kaptanlar, feneri görünce rahat bir nefes alır.", "Bu yüzden fenerleri korumak, denizi tanıyan insanların ortak sorumluluğudur."],
  dogru: 1,
  hatalar: ["Fiilimsi türlerine bakıp anlamı denetlememe: “söküp” zarf-fiil, “kurmak” isim-fiildir; ama parça elektronik aygıtların yarı yolda bırakabileceğini söylüyor, fenerleri sökmek bu düşünceyle çelişir.", null, "Sıfat-fiili isim-fiil yerine sayma: cümle akışa uyar ama “yaklaşan” bir adı niteleyen sıfat-fiil, “görünce” zarf-fiildir; cümlede isim-fiil yoktur.", "Sıfat-fiili zarf-fiil yerine sayma: cümle akışa uyar ama “korumak” isim-fiil, “tanıyan” sıfat-fiildir; cümlede zarf-fiil yoktur."],
  aciklama: `İki koşul var: cümle parçanın düşüncesini sürdürecek, ayrıca içinde hem isim-fiil (işin adı) hem zarf-fiil (çekimli fiili zaman ya da durum yönünden niteleyen fiilimsi) bulunacak. İkisini ayrı ayrı denetle.
Adım 1: Parçanın düşüncesini bul. Fenerler eskimiş gibi görünse de elektronik aygıtlar yarı yolda bırakabilir; öyleyse fenerlere hâlâ gerek vardır. Son cümle bu sonuca bağlanmalı.
Adım 2: A → "söküp" zarf-fiil, "kurmak" isim-fiil: tür koşulu tamam. Ama fenerleri sökmeyi önermek, parçanın vardığı sonucun tam tersidir. Anlam koşulu sağlanmaz.
Adım 3: B → "bakarken" (Ne zaman?) zarf-fiil, "aramayı" (Neyi bırakmaz?) isim-fiil: tür koşulu tamam. Denizcilerin ekrana bakarken feneri de gözden kaçırmaması, parçanın sonucuyla örtüşür. İki koşul da sağlanır. "Bırakmaz" ise cümleyi bitiren çekimli fiildir.
Adım 4: C → "yaklaşan" (Hangi kaptanlar?) sıfat-fiil, "görünce" zarf-fiil. Anlam uygun ama isim-fiil yok.
Adım 5: D → "korumak" isim-fiil, "tanıyan" (Hangi insanlar?) sıfat-fiil. Anlam uygun ama zarf-fiil yok.
Sık yapılan hata: Cümlede iki fiilimsi görünce türlerini tek tek adlandırmadan koşulun sağlandığını düşünmek. C ve D'de de ikişer fiilimsi var; onları eleyen, istenen türlerden birinin eksik olmasıdır.
Cevap B.`
},
{
  id: "tur-fi-312",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Sahaflar, eski kitap ve dergilerin alınıp satıldığı, raflarında yıllar önce basılmış ender eserlerin de bulunduğu dükkânlardır. Aşağıdaki parça, bir sekizinci sınıf öğrencisinin okul dergisine yazdığı “Mahallemizin Sahafı” başlıklı yazıdan alınmıştır.

(I) Dolmuş durağının hemen arkasındaki sahafa dün genç bir yazar uğramış, raflardaki eski çocuk dergilerinin hepsini almış; yarın öbür ciltler için yine gelecekmiş. (II) Dükkânın kırk yıllık sahibi Nuri Bey, bu güzel haberi bize anlatırken bayram sabahındaki küçük bir çocuk gibi seviniyordu. (III) Onun bu daracık, loş dükkânda yıllardır tek amacı, eski kitapları yeni okurlarıyla buluşturmaktır. (IV) Girişteki küçük masada yaz kış her sabah taze çay bulunur, çayın yanında da mutlaka bir tabak kuru yemiş durur. (V) Nuri Bey hiçbir müşterisini acele ettirmez; tozlu raflarda aradığını bulamayana da kendi eliyle yardım eder. (VI) Bu yüzden o yüksek ve dar raflar arasında saatlerce dolaşmak, benim için sıradan bir alışverişten çok eski bir dostu ziyarete benzer.

**Bu parçada numaralanmış cümlelerin hangilerinde fiilimsi __yoktur__?**`,
  gorsel: null,
  secenekler: ["I ve IV", "I ve III", "II ve IV", "II ve III"],
  dogru: 0,
  hatalar: [null, "Yüklem olan isim-fiili çekimli fiil sanma: III. cümledeki “buluşturmaktır” sözcüğünde “buluşturmak” işin adıdır, “-tır” ek fiildir; bu cümlede fiilimsi vardır. IV. cümledeki “yemiş” ve “giriş” ise kalıcı addır.", "“-ken” ekli zarf-fiili atlama ve kalıcı adları fiilimsi sayma: II. cümlede “anlatırken” zarf-fiildir; I. cümledeki “dolmuş” ile “yazar” ise birer varlığın adıdır, fiilimsi değildir.", "İki gizli fiilimsiyi birden atlama: II. cümlede “anlatırken” zarf-fiil, III. cümlede “buluşturmaktır” yüklem olmuş isim-fiildir; fiilimsi bulunmayan cümleler bunlar değildir."],
  aciklama: `Fiilimsi ararken iki tuzağı ele: kip ve kişi anlamı taşıyıp yargı bildiren çekimli fiiller ile fiilden türediği hâlde bir varlığın adı olmuş kalıcı adlar fiilimsi değildir.
Adım 1: I → "uğramış", "almış", "gelecekmiş" sözcüklerinin üçü de yargı bildirir; çekimli fiildir. "Dolmuş" bir taşıtın, "yazar" bir mesleğin adıdır; kalıcı addır. Fiilimsi yok.
Adım 2: II → Yüklem "seviniyordu". "Anlatırken" sözcüğü "Ne zaman seviniyordu?" sorusuna cevap verir: zarf-fiil. Fiilimsi var.
Adım 3: III → "Tek amacı … buluşturmaktır." Amacı nedir? "Buluşturmak." Bu bir işin adıdır; sonundaki "-tır" ek fiildir. Yüklem olmuş isim-fiil yine fiilimsidir. ("Okur" ise kitap okuyan kişinin kalıcı adıdır.) Fiilimsi var.
Adım 4: IV → "bulunur" ve "durur" geniş zamanlı çekimli fiillerdir. "Giriş" bir yerin, "yemiş" bir yiyeceğin adıdır. Fiilimsi yok.
Adım 5: V → "ettirmez" ve "eder" çekimli fiildir. "Aradığını" (aradığı kitabı) ve "bulamayana" (bulamayan kişiye) adlaşmış sıfat-fiillerdir. Fiilimsi var.
Adım 6: VI → "Dolaşmak" işin adıdır: isim-fiil. "Benzer" çekimli fiil, "alışveriş" kalıcı addır. Fiilimsi var.
Sık yapılan hata: I ve IV. cümlelerdeki "dolmuş, yazar, yemiş" gibi sözcükleri eklerine bakarak fiilimsi saymak, buna karşılık "anlatırken" ve "buluşturmaktır" gibi gerçek fiilimsileri atlamak. Her sözcük için sor: cümlede bir iş mi anlatıyor, yoksa bir varlığın adı mı?
Cevap A.`
},
/* ===================== HAVUZ ===================== */
{
  id: "tur-fi-001",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki cümlelerin hangisinde isim-fiil vardır?**",
  gorsel: null,
  secenekler: [
    "Kayan yıldızı gören herkes bir dilek tuttu.",
    "Dün gece gökyüzü bulutsuzdu.",
    "Teleskobu kurarken parmağımı sıkıştırdım.",
    "Gökyüzünü izlemek için balkona dürbün kurduk."
  ],
  dogru: 3,
  hatalar: [
    "'Kayan' ve 'gören' sözcüklerini isim-fiil sanma: ikisi de bir varlığı niteler, bunlar sıfat-fiildir.",
    "Bu cümlede fiilimsi yoktur: 'bulutsuzdu' sözcüğü ek fiil almış bir addır.",
    "'kurarken' sözcüğünü isim-fiil sanma: işin ne zaman yapıldığını bildirir, bu bir zarf-fiildir.",
    null
  ],
  aciklama: `İsim-fiil, bir işi ad gibi kullanmamızı sağlayan fiilimsidir; cümlede 'ne?' sorusunun karşılığı olur.
Adım 1: A → 'Kayan' ve 'gören' sözcükleri 'hangi yıldız?', 'hangi herkes?' sorularına cevap verir; sıfat-fiildir.
Adım 2: B → Cümledeki tek yargı 'bulutsuzdu'dur; fiil kökenli bir sözcük yoktur.
Adım 3: C → 'kurarken' işin zamanını bildirir; zarf-fiildir.
Adım 4: D → 'Ne için dürbün kurduk?' Cevap: 'gökyüzünü izlemek'. Bu bir işin adıdır, isim-fiildir.
Sık yapılan hata: Cümlede fiilimsi görür görmez işaretlemek. Önce türünü kontrol et.
Cevap D.`
},
{
  id: "tur-fi-002",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki cümlelerin hangisinde fiilimsi __yoktur__?**",
  gorsel: null,
  secenekler: [
    "Vapurdan inen yolcular iskelede toplandı.",
    "Bilet almak için uzun bir kuyruk oluştu.",
    "Gemi limandan tam saatinde ayrıldı.",
    "Martılar, vapur hareket edince peşine takıldı."
  ],
  dogru: 2,
  hatalar: [
    "'inen' sözcüğünü çekimli fiil sanma: 'hangi yolcular?' sorusuna cevap veren bir sıfat-fiildir, yani bu cümlede fiilimsi vardır.",
    "'almak' sözcüğünü mastar hâlinde bir fiil sanma: işin adını bildiren bir isim-fiildir, yani bu cümlede fiilimsi vardır.",
    null,
    "'edince' sözcüğünü çekimli fiil sanma: işin zamanını bildiren bir zarf-fiildir, yani bu cümlede fiilimsi vardır."
  ],
  aciklama: `Fiilimsi, kip ve kişi eki almadan cümlede ad, sıfat ya da zarf görevi yapan fiil kökenli sözcüktür.
Adım 1: A → 'inen', 'yolcular' adını niteler: sıfat-fiil.
Adım 2: B → 'almak', 'ne için kuyruk oluştu?' sorusuna cevap veren bir iş adıdır: isim-fiil.
Adım 3: D → 'edince', 'ne zaman takıldı?' sorusuna cevap verir: zarf-fiil.
Adım 4: C → Sözcükleri tek tek geçir: 'Gemi', 'limandan', 'tam', 'saatinde', 'ayrıldı'. Fiil kökenli tek sözcük 'ayrıldı'dır ve görülen geçmiş zamanla çekimlenmiştir. Cümlede fiilimsi yoktur.
Sağlama: Bir cümlede fiilimsi olup olmadığını anlamak için çekimli fiili çizdikten sonra geriye fiil kökenli sözcük kalıp kalmadığına bak.
Cevap C.`
},
{
  id: "tur-fi-003",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki cümlelerin hangisinde zarf-fiil vardır?**",
  gorsel: null,
  secenekler: [
    "Koşu bandında yürüyen adam nefes nefese kaldı.",
    "Kaslarını iyice esnetmeden koşuya başlama.",
    "Sporcunun günlük su tüketimi iki litredir.",
    "Antrenör, dinlenmenin önemini uzun uzun anlattı."
  ],
  dogru: 1,
  hatalar: [
    "'yürüyen' sözcüğünü zarf-fiil sanma: adamı niteler, bu bir sıfat-fiildir.",
    null,
    "Bu cümlede fiilimsi yoktur: 'tüketim' sözcüğü yapım ekiyle türemiş bir addır.",
    "'dinlenmenin' sözcüğünü zarf-fiil sanma: işin adını bildirir, bu bir isim-fiildir."
  ],
  aciklama: `Zarf-fiil, işin nasıl, ne zaman ya da hangi durumda yapıldığını bildirir.
Adım 1: A → 'yürüyen' sözcüğü 'hangi adam?' sorusuna cevap verir: sıfat-fiil.
Adım 2: B → 'Nasıl koşuya başlama?' Cevap: 'kaslarını iyice esnetmeden'. İşin hangi durumda yapıldığını bildirdiği için zarf-fiildir.
Adım 3: C → 'tüketim' fiilden türemiştir ama artık bir addır; fiilimsi değildir.
Adım 4: D → 'dinlenmenin' sözcüğü 'neyin önemi?' sorusuna cevap verir: isim-fiil.
Sık yapılan hata: Fiilden türeyen her sözcüğü fiilimsi saymak. 'tüketim', 'gelişim', 'bilgi' gibi sözcükler yapım ekiyle kalıcı ad olmuştur.
Cevap B.`
},
{
  id: "tur-fi-004",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 2,
  soru: `Şehir müzesinin yeni bölümü bu ay ziyarete açıldı. Aşağıda bu bölümle ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisinde sıfat-fiil kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Müzeye gelmek için önceden randevu alınıyor.",
    "Görevliler, kapı açılınca ziyaretçileri içeri alıyor.",
    "Ziyaretçiler burada fotoğraf çekmeyi çok seviyor.",
    "Camekânda duran çini tabak iki yüz yıl öncesine ait."
  ],
  dogru: 3,
  hatalar: [
    "'gelmek' sözcüğünü sıfat-fiil sanma: hiçbir adı nitelemez, işin adını bildiren isim-fiildir.",
    "'açılınca' sözcüğünü sıfat-fiil sanma: işin ne zaman yapıldığını bildiren zarf-fiildir.",
    "'çekmeyi' sözcüğünü sıfat-fiil sanma: 'neyi seviyor?' sorusuna cevap veren isim-fiildir.",
    null
  ],
  aciklama: `Sıfat-fiil, kendisinden sonra gelen adı niteler; 'hangi?' ya da 'nasıl bir?' sorusunun karşılığıdır.
Adım 1: A → 'gelmek', 'ne için randevu alınıyor?' sorusunun karşılığıdır: isim-fiil.
Adım 2: B → 'açılınca', 'ne zaman alıyor?' sorusunun karşılığıdır: zarf-fiil.
Adım 3: C → 'çekmeyi', 'neyi seviyor?' sorusunun karşılığıdır: isim-fiil.
Adım 4: D → 'Hangi çini tabak?' Cevap: 'camekânda duran'. 'duran' sözcüğü 'tabak' adını nitelediği için sıfat-fiildir.
Sağlama: 'duran' sözcüğünün yerine 'mavi' gibi bir sıfat koyabiliyorsan sözcük sıfat görevindedir.
Cevap D.`
},
{
  id: "tur-fi-005",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıda küçük bir ayakkabı atölyesiyle ilgili dört cümle verilmiştir.
(I) Atölyede çalışan ustalar günde yüz çift ayakkabı dikiyor.
(II) Boyanan ayakkabılar iki gün rafta bekletiliyor.
(III) Deriyi kesmek, işin en zor aşamasıdır.
(IV) Kalıplar hazırlanınca dikiş bölümüne geçiliyor.
**Buna göre, hangi iki cümledeki fiilimsiler aynı türdendir?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve IV", "III ve IV"],
  dogru: 0,
  hatalar: [
    null,
    "'çalışan' ustaları niteleyen bir sıfat-fiildir; 'kesmek' ise işin adını bildiren isim-fiildir, türleri farklıdır.",
    "'Boyanan' ayakkabıları niteleyen bir sıfat-fiildir; 'hazırlanınca' ise zaman bildiren zarf-fiildir, türleri farklıdır.",
    "'kesmek' işin adını bildiren isim-fiildir; 'hazırlanınca' ise zaman bildiren zarf-fiildir, türleri farklıdır."
  ],
  aciklama: `Önce her cümlenin fiilimsisini bul, sonra türünü adlandır; en sonunda eşleşen ikiliyi ara.
Adım 1: I → 'Hangi ustalar?' Cevap: 'çalışan'. Sıfat-fiil.
Adım 2: II → 'Hangi ayakkabılar?' Cevap: 'Boyanan'. Sıfat-fiil.
Adım 3: III → 'İşin en zor aşaması ne?' Cevap: 'deriyi kesmek'. İsim-fiil.
Adım 4: IV → 'Ne zaman geçiliyor?' Cevap: 'kalıplar hazırlanınca'. Zarf-fiil.
Adım 5: Türleri karşılaştır: sıfat-fiil, sıfat-fiil, isim-fiil, zarf-fiil. Aynı tür yalnızca I ve II'de vardır.
Sık yapılan hata: Ekleri karşılaştırmak. 'çalışan' ile 'Boyanan' aynı türdendir çünkü ikisi de bir adı niteler; önemli olan ek değil görevdir.
Cevap A.`
},
{
  id: "tur-fi-006",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 2,
  soru: `Kuş gözlem kulübünün üyeleri, sabah çok erken kalkar. Aşağıdaki cümle Kerem'in böyle bir sabahını anlatmaktadır.
Sabah erkenden kalkıp dürbününü alan Kerem, göl kıyısında beslenen kuşları saymaya başladı.
**Buna göre, bu cümlede kaç fiilimsi vardır?**`,
  gorsel: null,
  secenekler: ["2", "3", "4", "5"],
  dogru: 2,
  hatalar: [
    "Bir adı niteleyen fiilimsileri saymama: 'alan' ve 'beslenen' sözcükleri de fiilimsidir.",
    "Bir fiilimsiyi atlama: 'kalkıp' sözcüğü de fiilimsidir; iki eylemi birbirine bağlayan bir zarf-fiildir.",
    null,
    "Cümlenin çekimli fiilini de fiilimsi sayma: 'başladı' kip ve kişi eki almış bir fiildir."
  ],
  aciklama: `Cümlede yalnızca bir çekimli fiil bulunur; kalan bütün fiil kökenli sözcükler fiilimsidir.
Adım 1: Çekimli fiili bul: 'başladı'. Cümleyi bitiren yargı budur.
Adım 2: Geriye kalan fiil kökenli sözcükleri sırayla işaretle: 'kalkıp' (nasıl? → zarf-fiil), 'alan' (hangi Kerem? → sıfat-fiil), 'beslenen' (hangi kuşlar? → sıfat-fiil), 'saymaya' (neye başladı? → isim-fiil).
Adım 3: Say: 4 fiilimsi.
Sağlama: Cümlede üç türün de örneği vardır: bir zarf-fiil, iki sıfat-fiil, bir isim-fiil.
Cevap C.`
},
{
  id: "tur-fi-007",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 2,
  soru: `Ekim ayında zeytin hasadı başlıyor. Aşağıda bu hasatla ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisindeki fiilimsi, tür bakımından diğerlerinden farklıdır?**`,
  gorsel: null,
  secenekler: [
    "Zeytinleri toplamak için bütün köy seferber oldu.",
    "Ağaçların altına serilen filelere zeytinler döküldü.",
    "Zeytinlerin taş değirmende ezilişi saatler sürüyor.",
    "Dedem, dalları silkelemeyi torunlarına bırakmış."
  ],
  dogru: 1,
  hatalar: [
    "'toplamak' sözcüğünü çekimli fiil sanma: işin adını bildirir, bu bir isim-fiildir.",
    null,
    "'ezilişi' sözcüğünü yapım ekiyle türemiş bir ad sanma: yine işin adını bildirir, bu da bir isim-fiildir.",
    "'silkelemeyi' sözcüğünü zarf-fiil sanma: 'neyi bırakmış?' sorusuna cevap verir, bu bir isim-fiildir."
  ],
  aciklama: `Farklı olanı bulmak için dört fiilimsiyi de adlandırıp karşılaştırmalısın.
Adım 1: A → 'toplamak', 'ne için seferber oldu?' sorusunun karşılığıdır; bir işin adıdır: isim-fiil.
Adım 2: C → 'ezilişi', 'ne sürüyor?' sorusunun karşılığıdır: isim-fiil.
Adım 3: D → 'silkelemeyi', 'neyi bırakmış?' sorusunun karşılığıdır: isim-fiil.
Adım 4: B → 'serilen' sözcüğü 'hangi fileler?' sorusuna cevap verir; 'fileler' adını nitelediği için sıfat-fiildir. Farklı olan budur.
Sık yapılan hata: İsim-fiili yalnızca -mak/-mek ekiyle aramak. '-ma' ve '-ış' ekleriyle kurulan 'silkelemeyi', 'ezilişi' sözcükleri de isim-fiildir.
Cevap B.`
},
{
  id: "tur-fi-008",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 3,
  soru: `Aşağıda bir köydeki ekim hazırlıklarıyla ilgili dört cümle verilmiştir. Dört cümlede de "ekmek" sözcüğü geçmektedir.
**Buna göre, bu cümlelerin hangisinde "ekmek" sözcüğü fiilimsi __değildir__?**`,
  gorsel: null,
  secenekler: [
    "Tohumları zamanında ekmek, verimi doğrudan etkiliyor.",
    "Bu makine, mısırı sıralar hâlinde ekmek için tasarlanmış.",
    "Nadasa bırakılan tarlaya bu yıl arpa ekmek gerekiyor.",
    "Köyde buğdayı öğütüp ekmek yapmak için ortak bir fırın kuruldu."
  ],
  dogru: 3,
  hatalar: [
    "Sözcüğü yediğimiz ekmekle karıştırma: burada 'ekmek', tohum saçma işinin adıdır; bir isim-fiildir.",
    "Sözcüğün ardından edat geldiği için fiilimsi değildir sanma: burada 'ekmek', makinenin yaptığı işin adıdır; bir isim-fiildir.",
    "'ekmek gerekiyor' yapısında sözcüğü nesne adı sanma: burada da tarlaya tohum atma işinin adı vardır; bir isim-fiildir.",
    null
  ],
  aciklama: `Aynı sözcük bir cümlede fiilimsi, başka bir cümlede kalıcı bir ad olabilir. Ayırmak için sözcüğün bir işi mi yoksa bir varlığı mı karşıladığına bak.
Adım 1: A → 'Verimi ne etkiliyor?' Cevap: 'tohumları zamanında ekmek'. Ortada yapılan bir iş vardır: isim-fiil.
Adım 2: B → 'Makine ne için tasarlanmış?' Cevap: 'mısırı ekmek için'. Yine bir iş: isim-fiil.
Adım 3: C → 'Ne gerekiyor?' Cevap: 'arpa ekmek'. Yine bir iş: isim-fiil.
Adım 4: D → 'ekmek' burada yapılan bir işi değil, fırında pişirilen bir yiyeceği karşılar; 'buğdayı öğütüp ekmek yapmak' sözünde yapılan iş 'yapmak'tır. Sözcük fiilden türemiş olsa da kalıcı bir ad hâline gelmiştir; fiilimsi değildir. Cümlede fiilimsi vardır ('öğütüp' zarf-fiil, 'yapmak' isim-fiil) ama bunlar 'ekmek' sözcüğü değildir.
Sağlama: A, B ve C'de 'ekmek' yerine 'ekme işi' diyebilirsin; D'de diyemezsin.
Sık yapılan hata: '-mak/-mek' ekini görünce her sözcüğü isim-fiil saymak ya da cümlede başka fiilimsi görünce sorulan sözcüğü de fiilimsi sanmak. 'ekmek', 'çakmak', 'kaymak' gibi sözcükler bazı cümlelerde varlık adıdır.
Cevap D.`
},
{
  id: "tur-fi-009",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 3,
  soru: `Tam güneş tutulması sırasında gökyüzü birkaç dakikalığına karardı. Aşağıda o günle ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisinde fiilimsi, işin ne zaman yapıldığını bildirmektedir?**`,
  gorsel: null,
  secenekler: [
    "Gölge Dünya'ya ulaşınca ortalık birden karardı.",
    "Güneş'e çıplak gözle bakmak tam karanlıktan önce çok tehlikeliydi.",
    "Olayı izleyen kalabalık uzun uzun alkışladı.",
    "Bu görüntüyü çekmek yıllarca beklemeyi gerektirdi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "'bakmak' sözcüğünün zaman bildirdiğini sanma: işin adını bildiren bir isim-fiildir; zamanı bildiren söz 'tam karanlıktan önce'dir ve fiilimsi değildir.",
    "'izleyen' sözcüğünün zaman bildirdiğini sanma: 'hangi kalabalık?' sorusuna cevap veren bir sıfat-fiildir.",
    "'çekmek' ve 'beklemeyi' sözcüklerinin zaman bildirdiğini sanma: ikisi de işin adını bildiren isim-fiildir."
  ],
  aciklama: `Soru, fiilimsinin adını değil işlevini soruyor: işin ne zaman yapıldığını bildiren fiilimsi zarf-fiildir.
Adım 1: A → 'Ortalık ne zaman karardı?' Cevap: 'gölge Dünya'ya ulaşınca'. İşin zamanını bildirir: zarf-fiil.
Adım 2: B → 'bakmak' bir işin adıdır; cümlede zamanı 'tam karanlıktan önce' sözü bildirir, bu söz fiilimsi değildir ('karanlık' fiilden türememiştir).
Adım 3: C → 'izleyen' sözcüğü 'kalabalık' adını niteler: sıfat-fiil.
Adım 4: D → 'çekmek' ve 'beklemeyi' işin adını bildirir: isim-fiil.
Sık yapılan hata: Cümlede zaman anlamı olan bir söz görünce onu fiilimsi sanmak. Zaman bildiren her söz fiilimsi değildir; fiilimsi olması için fiilden türemiş olması gerekir.
Cevap A.`
},
{
  id: "tur-fi-010",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 3,
  soru: `Aşağıda bir millî park kamp alanının girişine asılan levha verilmiştir.
**Buna göre, levhadaki maddelerin hangisinde sıfat-fiil kullanılmıştır?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Kamp alanı kuralları levhası"><rect x="8" y="8" width="504" height="234" rx="12" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><line x1="8" y1="54" x2="512" y2="54" stroke="var(--vurgu)" stroke-width="2"/><text x="260" y="38" text-anchor="middle" font-size="19" font-weight="bold" fill="currentColor">GÖKÇEPINAR KAMP ALANI KURALLARI</text><g font-size="16" fill="currentColor"><text x="28" y="94">1. Ateş yakmak yalnızca ocak başlarında serbesttir.</text><text x="28" y="132">2. Gece 23.00'ten sonra yüksek sesle müzik dinlenmez.</text><text x="28" y="170">3. Çadırlar, işaretlenmiş alanların dışına kurulamaz.</text><text x="28" y="208">4. Çöpler, alandan ayrılırken görevliye teslim edilir.</text></g></svg>`,
  secenekler: ["1. madde", "2. madde", "3. madde", "4. madde"],
  dogru: 2,
  hatalar: [
    "'yakmak' sözcüğünü sıfat-fiil sanma: hiçbir adı nitelemez, işin adını bildiren isim-fiildir.",
    "Bu maddede fiilimsi yoktur: 'dinlenmez' geniş zamanın olumsuzuyla çekimlenmiş bir fiildir.",
    null,
    "'ayrılırken' sözcüğünü sıfat-fiil sanma: işin ne zaman yapıldığını bildiren zarf-fiildir."
  ],
  aciklama: `Sıfat-fiil, kendisinden sonra gelen adı niteler; onu bulmak için ada 'hangi?' diye sor.
Adım 1: 1. madde → 'Ne serbesttir?' Cevap: 'ateş yakmak'. Bir işin adıdır: isim-fiil.
Adım 2: 2. madde → Fiil kökenli tek sözcük 'dinlenmez'dir; geniş zamanın olumsuzuyla çekimlenmiş, cümleyi bitiren fiildir. Fiilimsi yoktur.
Adım 3: 3. madde → 'Hangi alanların dışına?' Cevap: 'işaretlenmiş alanların'. 'işaretlenmiş' sözcüğü 'alanlar' adını nitelediği için sıfat-fiildir.
Adım 4: 4. madde → 'Çöpler ne zaman teslim edilir?' Cevap: 'alandan ayrılırken'. Zarf-fiil.
Sık yapılan hata: '-mış' ekini görünce sözcüğü duyulan geçmiş zaman çekimi sanmak. 'işaretlenmiş' cümleyi bitirmiyor, 'alanlar' adını nitelendiriyor.
Cevap C.`
},
{
  id: "tur-fi-011",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 4,
  soru: `Bir okulun teknoloji atölyesinde üç boyutlu yazıcıyla parça üretiliyor. Aşağıda bu çalışmayla ilgili dört cümle verilmiştir.
**Buna göre, numaralanmış cümlelerin hangisinde fiilimsi sayısı en fazladır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Okulun atölyesine geçen ay yeni bir üç boyutlu yazıcı alındı.</td></tr><tr><td>II</td><td>Tasarımı çizen öğrenciler, dosyayı yazıcıya göndermeden önce ölçüleri kontrol ediyor.</td></tr><tr><td>III</td><td>Eriyen plastik, ince bir uçtan akarak katman katman birikiyor.</td></tr><tr><td>IV</td><td>Baskı bitince parçayı zımparalamak ve boyamak epeyce uzun sürüyor.</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "'yazıcı' sözcüğünü de fiilimsi sayma: yapım ekiyle türemiş, araç adı olmuş bir addır; bu cümlede tek fiilimsi 'geçen'dir.",
    "Saymayı eksik bitirme: II. cümlede iki, IV. cümlede üç fiilimsi vardır.",
    "Çekimli fiili de sayma: 'birikiyor' kip eki almıştır; III. cümlede 'Eriyen' ve 'akarak' olmak üzere iki fiilimsi vardır.",
    null
  ],
  aciklama: `Her cümlede önce çekimli fiili ayır, sonra geriye kalan fiil kökenli sözcükleri say. Yapım ekiyle kalıcı ad olmuş sözcükleri sayma.
Adım 1: I → Çekimli fiil 'alındı'. Geriye 'geçen' kalır ('geçen ay' → 'ay' adını niteler, sıfat-fiil). 'yazıcı' sözcüğü ise fiilden türemiş bir araç adıdır, fiilimsi değildir. Toplam 1.
Adım 2: II → Çekimli fiil 'kontrol ediyor'. Geriye 'çizen' (hangi öğrenciler? → sıfat-fiil) ve 'göndermeden' (ne zaman? → zarf-fiil) kalır. Toplam 2.
Adım 3: III → Çekimli fiil 'birikiyor'. Geriye 'Eriyen' (hangi plastik? → sıfat-fiil) ve 'akarak' (nasıl? → zarf-fiil) kalır. Toplam 2.
Adım 4: IV → Çekimli fiil 'sürüyor'. Geriye 'bitince' (ne zaman? → zarf-fiil), 'zımparalamak' ve 'boyamak' (ne sürüyor? → isim-fiil) kalır. Toplam 3.
Adım 5: En fazla fiilimsi IV. cümlededir.
Sağlama: Sayılar sırasıyla 1, 2, 2 ve 3'tür.
Cevap D.`
},
{
  id: "tur-fi-012",
  kazanim: "T.8.3.9",
  kademe: 0,
  zorluk: 4,
  soru: `Belediyenin kapalı yüzme havuzunda çocuklara yüzme dersi, bel ağrısı çeken yetişkinlere de su içi egzersiz programı sunuluyor. Aşağıda bu havuzla ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisinde isim-fiil ile sıfat-fiil bir arada kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Antrenör, suya girmeden önce herkesi on dakika boyunca hareket ettiriyor.",
    "Yüzmeyi yeni öğrenen çocuklar, sığ havuzda haftada iki gün ders alıyor.",
    "Havuzu her sabah temizleyen görevliler, suyun sıcaklığını da ölçüyor.",
    "Düzenli yüzmek, sırt ve bel ağrılarını zamanla azaltmayı sağlıyor."
  ],
  dogru: 1,
  hatalar: [
    "'girmeden' sözcüğünü isim-fiil sanma: işin ne zaman yapıldığını bildiren bir zarf-fiildir; bu cümlede başka fiilimsi yoktur.",
    null,
    "'temizleyen' sözcüğünü isim-fiil sanma: görevlileri niteleyen bir sıfat-fiildir; bu cümlede isim-fiil yoktur.",
    "'yüzmek' ile 'azaltmayı' sözcüklerini farklı tür sanma: ikisi de işin adını bildirir, ikisi de isim-fiildir."
  ],
  aciklama: `Soru iki koşul birden istiyor: cümlede hem bir isim-fiil hem de bir sıfat-fiil bulunacak. Bu yüzden her cümlenin bütün fiilimsilerini bulup adlandırmalısın.
Adım 1: A → Çekimli fiil 'hareket ettiriyor'. Geriye 'girmeden' kalır: 'ne zaman?' sorusuna cevap verdiği için zarf-fiildir. Tek fiilimsi var, koşul sağlanmaz.
Adım 2: B → Çekimli fiil 'ders alıyor'. Geriye 'Yüzmeyi' ('neyi öğrenen?' → işin adı, isim-fiil) ve 'öğrenen' ('hangi çocuklar?' → sıfat-fiil) kalır. İki koşul da sağlanır.
Adım 3: C → Çekimli fiil 'ölçüyor'. Geriye 'temizleyen' kalır: 'hangi görevliler?' sorusuna cevap verir, sıfat-fiildir. İsim-fiil yok.
Adım 4: D → Çekimli fiil 'sağlıyor'. Geriye 'yüzmek' ve 'azaltmayı' kalır; ikisi de isim-fiildir. Sıfat-fiil yok.
Sağlama: Yalnızca B'de iki farklı türden fiilimsi bir arada bulunur.
Sık yapılan hata: Cümlede iki fiilimsi görünce türlerini kontrol etmeden işaretlemek. D'de de iki fiilimsi vardır ama ikisi de aynı türdendir.
Cevap B.`
}
);
