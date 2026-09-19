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
  soru: `Aşağıda bir öğrencinin gözlemevi gezisiyle ilgili kulüp notları verilmiştir.
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
  soru: `Bir gönüllü grubu, çöpe atılacak eski telefonlar için bir onarım atölyesi açtı. Aşağıda bu atölyeyle ilgili dört cümle verilmiştir.
**Bu cümlelerin hangisindeki fiilimsi, tür bakımından diğer üçünden farklıdır?**`,
  gorsel: null,
  secenekler: [
    "Eski cihazları onarmak, hem parayı hem de doğayı korur.",
    "Lehim makinesinin çalışması, kapının önünden bile duyuluyor.",
    "Kartların temizlenmesi, işin en uzun süren bölümüdür.",
    "Atölyeye gelen cihazların çoğu yalnızca küçük bir arıza taşıyor."
  ],
  dogru: 3,
  hatalar: [
    "'onarmak' sözcüğünü çekimli fiil sanma: kip ve kişi eki almamıştır, işin adını bildirir; bu bir isim-fiildir.",
    "'çalışması' sözcüğünü iyelik eki aldığı için ad sanma: yine işin adını bildirir; bu da isim-fiildir.",
    "'temizlenmesi' sözcüğünü yapım ekiyle türemiş bir ad sanma: işin adını bildirdiği için isim-fiildir.",
    null
  ],
  aciklama: `Fiilimsinin türünü ek değil, sözcüğün cümledeki görevi belirler: işin adını bildiriyorsa isim-fiil, bir varlığı niteliyorsa sıfat-fiil, işin nasıl-ne zaman yapıldığını bildiriyorsa zarf-fiildir.
Adım 1: A'daki 'onarmak' → 'ne korur?' sorusunun karşılığıdır, bir işin adıdır: isim-fiil.
Adım 2: B'deki 'çalışması' → 'ne duyuluyor?' sorusunun karşılığıdır, yine bir işin adıdır: isim-fiil.
Adım 3: C'deki 'temizlenmesi' → 'en uzun süren bölüm nedir?' sorusunun karşılığıdır: isim-fiil.
Adım 4: D'deki 'gelen' → 'hangi cihazlar?' sorusuna cevap verir; 'cihazlar' adını niteler. Bu bir sıfat-fiildir ve diğer üçünden farklıdır.
Sağlama: A, B ve C'deki fiilimsileri cümleden çıkarırsan cümle 'neyi/nesi' sorusunun karşılığını kaybeder; D'dekini çıkarırsan 'cihazlar' adı niteliksiz kalır.
Cevap D.`
},
{
  id: "tur-fi-303",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, tren yolculuğuyla ilgili dört cümledeki fiilimsileri bulmuş ve türlerini tabloya yazmıştır.
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
  soru: `Ayşe Teyze, köyündeki küçük serada yıl boyunca sebze yetiştiriyor. Aşağıda onun bir gününden dört cümle verilmiştir.
**Bu cümlelerin hangisinde birden fazla fiilimsi vardır?**`,
  gorsel: null,
  secenekler: [
    "Serada yetişen domatesler, sabah erkenden toplanıyor.",
    "Ayşe Teyze, fideleri dikerken eldiven takmayı hiç ihmal etmiyor.",
    "Ayşe Teyze, toprağın nemini ölçmek için küçük bir aygıt kullanıyor.",
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
  soru: `Sekizinci sınıflar, şehirdeki bilim müzesini gezdi. Aşağıda bir öğrencinin gezi defterinden dört cümle verilmiştir.
(I) Uzay bölümüne girmek, ziyaretin en heyecanlı anıydı.
(II) Müzenin ilk salonundaki dev pusula, çocukların en çok ilgisini çekiyor.
(III) Vitrindeki fosilleri inceleyen ziyaretçiler, rehberi soru yağmuruna tuttu.
(IV) Rehber, deneyi anlatırken gönüllü bir öğrenci seçti.
**Buna göre, numaralanmış cümlelerin hangisinde isim-fiil kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "Her cümlede mutlaka fiilimsi bulunur sanma: II. cümlede fiilimsi yoktur, 'çekiyor' kip eki almış çekimli fiildir.",
    "'inceleyen' sözcüğünü isim-fiil sanma: 'hangi ziyaretçiler?' sorusuna cevap verir, bu bir sıfat-fiildir.",
    "'anlatırken' sözcüğünü isim-fiil sanma: 'ne zaman seçti?' sorusuna cevap verir, bu bir zarf-fiildir."
  ],
  aciklama: `İsim-fiil, bir işi varlık gibi adlandırır; cümlede 'ne?' sorusunun karşılığı olur ve yerine bir ad koyabilirsin.
Adım 1: I → 'En heyecanlı an neydi?' Cevap: 'uzay bölümüne girmek'. Yerine 'giriş' gibi bir ad koyabilirsin; bu bir isim-fiildir.
Adım 2: II → Sözcükleri tara: 'pusula', 'ilgisini', 'çekiyor'. Fiil kökenli tek sözcük 'çekiyor'dur ve kip ekiyle çekimlenmiştir; cümlede fiilimsi yoktur.
Adım 3: III → 'inceleyen' sözcüğü 'ziyaretçiler' adını niteler: sıfat-fiil.
Adım 4: IV → 'anlatırken' sözcüğü işin ne zaman yapıldığını bildirir: zarf-fiil.
Sık yapılan hata: III ve IV'te fiilimsi bulunduğunu görüp türünü kontrol etmeden işaretlemek. Soru 'fiilimsi var mı' değil, 'isim-fiil var mı' diye soruyor.
Cevap A.`
},
{
  id: "tur-fi-306",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 3,
  soru: `Fen kulübü, ilçedeki göl kıyısında iki günlük bir doğa gözlemi kampı düzenliyor. Öğrenciler hazırlıklarını akşamdan tamamladı. Aşağıda kamp defterindeki cümlelerden dördü verilmiştir.
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
  soru: `Aşağıda bir spor bilimi merkezinin çalışmasıyla ilgili dört cümle verilmiştir.
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
  soru: `Aşağıda bir cam geri dönüşüm fabrikasıyla ilgili beş cümle verilmiştir.
**Buna göre, bu beş cümlede toplam kaç fiilimsi kullanılmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Şehrin kıyısındaki fabrikada her gün binlerce cam şişe yeniden işleniyor.</td></tr><tr><td>II</td><td>Kamyonlardan boşaltılan şişeler, renklerine göre üç bantta ayrılıyor.</td></tr><tr><td>III</td><td>Bantta ilerleyen şişeleri temizlemek için sıcak su kullanılıyor.</td></tr><tr><td>IV</td><td>Kırılan parçalar eritilerek yeni şişelere dönüştürülüyor.</td></tr><tr><td>V</td><td>Fabrika müdürü, bu yıl üretimi yüzde yirmi artıracak.</td></tr></table>`,
  secenekler: ["3", "4", "5", "6"],
  dogru: 2,
  hatalar: [
    "Her cümlede en çok bir fiilimsi bulunur sanma: III ve IV. cümlelerin her birinde ikişer fiilimsi vardır.",
    "IV. cümledeki 'eritilerek' sözcüğünü atlama: işin nasıl yapıldığını bildiren bir zarf-fiildir.",
    null,
    "V. cümledeki 'artıracak' sözcüğünü sıfat-fiil sanma: burada -acak eki gelecek zaman ekidir, sözcük cümlenin çekimli fiilidir."
  ],
  aciklama: `Sayma sorularında yöntem şudur: her cümlenin çekimli fiilini bul, üstünü çiz; geriye kalan fiil kökenli sözcükler fiilimsidir.
Adım 1: I → çekimli fiil 'işleniyor'. Başka fiil kökenli sözcük yok. Fiilimsi sayısı 0.
Adım 2: II → çekimli fiil 'ayrılıyor'. Geriye 'boşaltılan' kalır (hangi şişeler? → sıfat-fiil). Toplam 1.
Adım 3: III → çekimli fiil 'kullanılıyor'. Geriye 'ilerleyen' (hangi şişeler? → sıfat-fiil) ve 'temizlemek' (ne için? → isim-fiil) kalır. Toplam 2.
Adım 4: IV → çekimli fiil 'dönüştürülüyor'. Geriye 'Kırılan' (hangi parçalar? → sıfat-fiil) ve 'eritilerek' (nasıl? → zarf-fiil) kalır. Toplam 2.
Adım 5: V → 'artıracak' cümleyi bitiren, gelecek zamanla çekimlenmiş fiildir; hiçbir adı nitelemez. Fiilimsi sayısı 0.
Adım 6: Topla: 0 + 1 + 2 + 2 + 0 = 5.
Sağlama: Bulunan fiilimsiler boşaltılan, ilerleyen, temizlemek, Kırılan, eritilerek. Beş tane.
Cevap C.`
},
{
  id: "tur-fi-309",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gökbilim ekibi, yıllar önce çekilmiş fotoğraflar üzerinde yeniden çalıştı ve beklenmedik bir sonuca ulaştı. Aşağıda bu çalışmayla ilgili dört cümle verilmiştir.
(I) Gökbilimciler, eski fotoğrafları yeniden incelerken şaşırtıcı bir iz fark etti.
(II) Bu izi doğrulamak, ekibin o günden sonraki en büyük hedefi oldu.
(III) Aylarca süren gözlemler sonunda ekibi haklı çıkardı.
(IV) Görüntüdeki parlak halka, kara deliğin çevresinde dönen gazdan oluşuyor.
**Buna göre, bu cümlelerle ilgili aşağıdakilerden hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "I. cümledeki fiilimsi, bir varlığı nitelemektedir.",
    "II. cümledeki fiilimsi, bir işin adını bildirmektedir.",
    "III ve IV. cümlelerdeki fiilimsiler aynı türdendir.",
    "Cümlelerin dördünde de birer fiilimsi bulunmaktadır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "'doğrulamak' sözcüğünü çekimli fiil sanma: 'Ekibin en büyük hedefi neydi?' sorusunun karşılığıdır, bir işin adıdır; yargı doğrudur.",
    "'süren' ile 'dönen' sözcüklerini farklı tür sanma: ikisi de kendinden sonraki adı niteler, ikisi de sıfat-fiildir; yargı doğrudur.",
    "'şaşırtıcı' gibi yapım ekiyle türemiş sözcükleri de fiilimsi sayma: her cümlede tam bir fiilimsi vardır, yargı doğrudur."
  ],
  aciklama: `Bu soruda her cümlenin fiilimsisini bulup görevini adlandırman, sonra dört yargıyı tek tek denetlemen gerekir.
Adım 1: I → çekimli fiil 'fark etti'. Fiilimsi 'incelerken'dir ve 'ne zaman fark etti?' sorusuna cevap verir: zarf-fiil. 'şaşırtıcı' sözcüğü ise yapım ekiyle türemiş bir sıfattır, fiilimsi değildir.
Adım 2: II → çekimli fiil 'oldu'. Fiilimsi 'doğrulamak'tır; işin adını bildirir: isim-fiil.
Adım 3: III → çekimli fiil 'çıkardı'. Fiilimsi 'süren'dir; 'hangi gözlemler?' sorusuna cevap verir: sıfat-fiil.
Adım 4: IV → çekimli fiil 'oluşuyor'. Fiilimsi 'dönen'dir; 'hangi gaz?' sorusuna cevap verir: sıfat-fiil.
Adım 5: Yargıları denetle. B doğrudur (II isim-fiil). C doğrudur (III ve IV sıfat-fiil). D doğrudur (her cümlede birer fiilimsi var). A ise yanlıştır: I. cümledeki fiilimsi bir varlığı nitelemez, işin zamanını bildirir.
Sık yapılan hata: Zarf-fiil ile sıfat-fiili, sözcüğün yerine bakarak ayırmaya çalışmak. Ayırt etmenin yolu, sözcüğün kendisinden sonra bir adı niteleyip nitelemediğine bakmaktır.
Cevap A.`
},
{
  id: "tur-fi-310",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Bir otogarın dijital panosunda bugünkü seferler aşağıdaki gibi görünmektedir.
**Buna göre, aşağıdaki cümlelerin hangisi hem panodaki bilgiye uyar hem de bir zarf-fiil içerir?**`,
  gorsel: `<table class="tablo"><tr><th>Saat</th><th>Güzergâh</th><th>Yolculuk süresi</th><th>Durum</th></tr><tr><td>07.10</td><td>Kastamonu</td><td>3 sa 20 dk</td><td>Kalktı</td></tr><tr><td>09.45</td><td>Sinop</td><td>4 sa</td><td>Doldu</td></tr><tr><td>12.30</td><td>Amasya</td><td>2 sa 50 dk</td><td>Boş koltuk var</td></tr><tr><td>16.15</td><td>Kastamonu</td><td>3 sa 20 dk</td><td>İptal</td></tr></table>`,
  secenekler: [
    "En kısa yolculuk, saat 12.30'da kalkan otobüsle yapılıyor.",
    "Kastamonu seferlerinden biri iptal edilince bugün tek sefer kaldı.",
    "Sinop otobüsü, boş koltuklarını satamadan yola çıkacak.",
    "Amasya seferinde boş koltuk bulmak artık mümkün değildir."
  ],
  dogru: 1,
  hatalar: [
    "Fiilimsinin türünü karıştırma: bilgi panoya uygun olsa da 'kalkan' sözcüğü otobüsü niteleyen bir sıfat-fiildir, zarf-fiil değildir.",
    null,
    "Panoyu yanlış okuma: Sinop seferinin durumu 'Doldu'dur, yani boş koltuk kalmamıştır; cümledeki bilgi panoya uymaz.",
    "Hem panoyu yanlış okuma hem de türü karıştırma: Amasya seferinde boş koltuk vardır, ayrıca 'bulmak' bir isim-fiildir."
  ],
  aciklama: `Bu soruda iki koşul birden aranıyor: cümledeki bilgi panoya uyacak ve cümlede zarf-fiil bulunacak. İki koşulu ayrı ayrı denetle.
Adım 1: A'yı denetle. Süreler 3 sa 20 dk, 4 sa, 2 sa 50 dk ve 3 sa 20 dk'dır; en kısası 2 sa 50 dk, yani 12.30 Amasya seferidir. Bilgi doğrudur. Ama 'kalkan' sözcüğü 'hangi otobüs?' sorusuna cevap verir: sıfat-fiildir. İkinci koşul sağlanmaz.
Adım 2: B'yi denetle. Panoda iki Kastamonu seferi vardır (07.10 ve 16.15); 16.15 iptal edildiğine göre geriye tek sefer kalır. Bilgi doğrudur. 'iptal edilince' sözü 'ne zaman tek sefer kaldı?' sorusuna cevap verir: zarf-fiildir. İki koşul da sağlanır.
Adım 3: C'yi denetle. Panoya göre Sinop otobüsünün durumu 'Doldu'dur; cümle bunun tersini söyler. Zarf-fiil ('satamadan') bulunsa da bilgi yanlıştır.
Adım 4: D'yi denetle. Panoda Amasya seferi için 'Boş koltuk var' yazar; bilgi yanlıştır. Ayrıca 'bulmak' bir isim-fiildir.
Sağlama: Yalnızca B, iki koşulu birden karşılar.
Cevap B.`
},
{
  id: "tur-fi-311",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, müze gezisiyle ilgili dört cümlede fiilimsi aramış; bulduğu sözcüğü ve türünü tabloya yazmıştır.
**Buna göre, öğrenci bu dört satırın kaçında hata yapmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th><th>Seçilen sözcük</th><th>Yazılan tür</th></tr><tr><td>I</td><td>Sergiyi gezen öğrenciler, panolardaki yazıları ilgiyle okudu.</td><td>gezen</td><td>sıfat-fiil</td></tr><tr><td>II</td><td>Müze görevlisi, vitrinleri silerken ince bir eldiven takıyor.</td><td>silerken</td><td>isim-fiil</td></tr><tr><td>III</td><td>Eski duvar saatlerini onarmak, büyük sabır ister.</td><td>onarmak</td><td>isim-fiil</td></tr><tr><td>IV</td><td>Bahçedeki heykel, geçen yıl baştan aşağı temizlenmiş.</td><td>temizlenmiş</td><td>sıfat-fiil</td></tr></table>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: [
    "Yalnızca tür yanlışlarını arama: IV. satırda öğrenci fiilimsi olmayan bir sözcüğü seçmiştir, bu da bir hatadır.",
    null,
    "Doğru satırı da yanlış sayma: III. satırda 'onarmak' işin adını bildirir ve isim-fiil olarak doğru yazılmıştır.",
    "Bütün satırları yanlış sanma: I ve III. satırlarda hem seçilen sözcük hem yazılan tür doğrudur."
  ],
  aciklama: `Bu tabloda iki ayrı hata yapılabilir: yanlış sözcüğü seçmek ya da sözcüğün türünü yanlış yazmak. Satırları ikisi için de denetlemelisin.
Adım 1: I → Cümlenin çekimli fiili 'okudu'dur. 'gezen' sözcüğü 'hangi öğrenciler?' sorusuna cevap verir, yani sıfat-fiildir. Sözcük de tür de doğru.
Adım 2: II → Çekimli fiil 'takıyor'dur. 'silerken' sözcüğü 'ne zaman takıyor?' sorusuna cevap verir; bu bir zarf-fiildir. Öğrenci isim-fiil yazmış, tür yanlış. (1. hata)
Adım 3: III → Çekimli fiil 'ister'dir. 'onarmak' bir işin adıdır, isim-fiildir. Sözcük de tür de doğru.
Adım 4: IV → Cümlenin çekimli fiili zaten 'temizlenmiş'tir; burada -mış eki duyulan geçmiş zaman ekidir, sözcük fiilimsi değildir. Bu cümlenin fiilimsisi 'geçen'dir ve sıfat-fiildir. Öğrenci yanlış sözcüğü seçmiş. (2. hata)
Adım 5: Hatalı satır sayısı 2'dir.
Sık yapılan hata: -mış ekini görünce sözcüğü doğrudan sıfat-fiil saymak. 'temizlenmiş heykel' deseydin sıfat-fiil olurdu; burada sözcük cümleyi bitiren yargıdır.
Cevap B.`
},
{
  id: "tur-fi-312",
  kazanim: "T.8.3.9",
  kademe: 3,
  zorluk: 4,
  soru: `Akıllı saatler, gün içindeki hareketleri ve uyku süresini kaydediyor. Aşağıda bu cihazlarla ilgili dört cümle verilmiştir.
(I) Sabah koşusuna çıkan Deniz, saatini şarj etmeyi akşamdan unutmuş.
(II) Akıllı saat, adım sayısını ölçmek ve uykuyu izlemek için iki algılayıcı kullanır.
(III) Ekrandaki uyarıyı görünce sporcular hemen su içiyor.
(IV) Veriyi aktaran uygulama, haftalık grafiği gösterecek bir bölüm de içeriyor.
**Buna göre, numaralanmış cümlelerin hangisinde farklı türde iki fiilimsi bir arada kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "İki fiilimsiyi görüp türlerini karşılaştırmama: 'ölçmek' ve 'izlemek' işin adını bildirir, ikisi de isim-fiildir.",
    "Çekimli fiili ikinci bir fiilimsi sanma: 'içiyor' kip eki almıştır; bu cümlede yalnızca 'görünce' fiilimsidir.",
    "Ekleri farklı diye türleri de farklı sanma: 'aktaran' ve 'gösterecek' kendilerinden sonraki adı niteler, ikisi de sıfat-fiildir."
  ],
  aciklama: `Bu soruda önce her cümledeki bütün fiilimsileri bulman, sonra türlerini karşılaştırman gerekir. Cümlenin çekimli fiilini ayırmayı unutma.
Adım 1: I → Çekimli fiil 'unutmuş'. Geriye 'çıkan' (hangi Deniz? → sıfat-fiil) ve 'etmeyi' (neyi unutmuş? → isim-fiil) kalır. İki fiilimsi, iki farklı tür.
Adım 2: II → Çekimli fiil 'kullanır'. Geriye 'ölçmek' ve 'izlemek' kalır; ikisi de işin adını bildirir, yani ikisi de isim-fiildir. Türleri aynı.
Adım 3: III → Çekimli fiil 'içiyor'. Geriye yalnızca 'görünce' kalır: tek fiilimsi.
Adım 4: IV → Çekimli fiil 'içeriyor'. Geriye 'aktaran' ('uygulama'yı niteler) ve 'gösterecek' ('bölüm'ü niteler) kalır; ikisi de sıfat-fiildir. Türleri aynı.
Sağlama: Yalnızca I. cümlede iki fiilimsi farklı türdendir.
Sık yapılan hata: IV. cümledeki 'gösterecek' sözcüğünü gelecek zaman çekimi sanmak. Sözcük cümleyi bitirmiyor, 'bölüm' adını nitelendiriyorsa sıfat-fiildir.
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
    "Kahvaltıda köy fırınından aldığımız ekmek çok lezzetliydi."
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
Adım 4: D → 'ekmek' burada yapılan bir işi değil, fırından alınan bir yiyeceği karşılar. Sözcük fiilden türemiş olsa da kalıcı bir ad hâline gelmiştir; fiilimsi değildir.
Sağlama: A, B ve C'de 'ekmek' yerine 'ekme işi' diyebilirsin; D'de diyemezsin.
Sık yapılan hata: '-mak/-mek' ekini görünce her sözcüğü isim-fiil saymak. 'ekmek', 'çakmak', 'kaymak' gibi sözcükler bazı cümlelerde varlık adıdır.
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
    "Gökyüzüne çıplak gözle bakmak o anlarda çok tehlikeliydi.",
    "Olayı izleyen kalabalık uzun uzun alkışladı.",
    "Bu görüntüyü çekmek yıllarca beklemeyi gerektirdi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "'bakmak' sözcüğünün zaman bildirdiğini sanma: işin adını bildiren bir isim-fiildir; zamanı bildiren söz 'o anlarda'dır.",
    "'izleyen' sözcüğünün zaman bildirdiğini sanma: 'hangi kalabalık?' sorusuna cevap veren bir sıfat-fiildir.",
    "'çekmek' ve 'beklemeyi' sözcüklerinin zaman bildirdiğini sanma: ikisi de işin adını bildiren isim-fiildir."
  ],
  aciklama: `Soru, fiilimsinin adını değil işlevini soruyor: işin ne zaman yapıldığını bildiren fiilimsi zarf-fiildir.
Adım 1: A → 'Ortalık ne zaman karardı?' Cevap: 'gölge Dünya'ya ulaşınca'. İşin zamanını bildirir: zarf-fiil.
Adım 2: B → 'bakmak' bir işin adıdır; cümlede zamanı 'o anlarda' sözü bildirir, fiilimsi değil.
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
  soru: `Bir spor bilimi merkezinde, ameliyat sonrası hastalar için su içinde egzersiz programları uygulanıyor. Aşağıda bu merkezle ilgili dört cümle verilmiştir.
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
