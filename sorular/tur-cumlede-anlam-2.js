// Türkçe — Cümlede Anlam: Kademe 3 (LGS Ayarı, 25 soru) ve havuz (kademe 0, 15 soru)
// Kazanımlar: T.8.3.25 Okudukları ile ilgili çıkarımlarda bulunur. (Neden-sonuç, amaç-sonuç, koşul, karşılaştırma,
//   nesnel, öznel ve duygu belirten ifadeler.) · T.8.3.10 Geçiş ve bağlantı ifadelerinin metnin anlamına olan
//   katkısını değerlendirir. · T.8.3.21 Metnin içeriğini yorumlar. (Öznel ve nesnel yaklaşımlar, bakış açısı.)
// Tutarlılık: Nesnel yargı sınanabilir olandır, doğru çıkması gerekmez; geleceğe ait tahmin sınanabildiği için nesneldir.
//   "için / diye": eylem henüz gerçekleşmemiş, istenen bir hedefse AMAÇ; gerçekleşmiş bir durumsa NEDEN.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cumlede-anlam"] = window.LGS_BANK["cumlede-anlam"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "tur-ca-301",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bilim şenliğine hazırlanan bir öğrenci, standını kurarken yaşadıklarını şu cümlelerle anlatıyor:
(I) Afişin boyası geç kuruduğu için harflerin kenarları biraz dağıldı.
(II) Deney düzeneğimiz büyük olduğu için masayı duvara yanaştırdık.
(III) Standımızı uzaktan fark ettirmek için masanın üstüne renkli bir pano astık.
(IV) Sunumu Ece yapacağı için provaları onun evinde yaptık.
**Numaralanmış cümlelerin hangisinde "için" sözcüğü, cümleye amaç-sonuç anlamı katmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Nedeni amaç sanma: Boyanın geç kuruması istenen bir hedef değil, olmuş bir durumdur; harflerin dağılmasının nedenidir.",
    "Nedeni amaç sanma: Düzeneğin büyük olması ulaşılmak istenen bir hedef değil, var olan bir durumdur.",
    null,
    "Gelecek zaman ekine aldanma: 'yapacağı' sözcüğü ileriyi gösterse de Ece'nin sunumu yapması provaların hedefi değil, önceden belli olmuş bir durumdur; bu yüzden neden bildirir."
  ],
  aciklama: `Amaç-sonuç ilişkisinde bir iş, henüz gerçekleşmemiş ve ulaşılmak istenen bir hedef için yapılır. Neden-sonuç ilişkisinde ise bir iş, zaten var olan ya da olmuş bir durum yüzünden gerçekleşir.
Adım 1: Her cümlede "için" yerine önce "bu yüzden", sonra "amacıyla" koyarak dene.
Adım 2: I. cümle: "Boya geç kurudu, bu yüzden kenarlar dağıldı." Anlam bozulmadı; neden-sonuç.
Adım 3: II. cümle: "Düzenek büyüktü, bu yüzden masayı yanaştırdık." Yine neden-sonuç.
Adım 4: III. cümle: "Standımızı uzaktan fark ettirmek amacıyla pano astık." Standın fark edilmesi henüz gerçekleşmemiş, istenen bir hedeftir. Amaç-sonuç budur.
Adım 5: IV. cümle: "Sunumu Ece yapacak, bu yüzden provaları onun evinde yaptık." Anlam bozulmadı. "Ece'nin sunum yapması amacıyla provaları onun evinde yaptık." ise anlamsızdır. Yani bu cümle neden bildirir.
Sık yapılan hata: Gelecek zaman ekini gördüğün anda amaç demek. Ölçüt ek değil, eylemin sonuçtaki işin hedefi olup olmadığıdır.
Cevap C.`
},
{
  id: "tur-ca-302",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Mahallemizin kütüphanesi yaz boyunca bir okuma yarışması düzenliyor. (I) Yarışmaya katılan her okur, bitirdiği kitabın özetini deftere yazarsa bir damga kazanıyor. (II) Geçen hafta yağmur yağdığı için okuma salonu her zamankinden kalabalıktı. (III) Görevli, küçük çocukların rahat okuması için minderleri pencerenin önüne dizdi. (IV) Ben de on damgaya ulaşmak amacıyla her akşam bir saat okuyorum.
**Bu metindeki numaralanmış cümlelerle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I. cümlede koşul-sonuç ilişkisi vardır.",
    "II. cümlede amaç-sonuç ilişkisi vardır.",
    "III. cümlede neden-sonuç ilişkisi vardır.",
    "IV. cümlede koşul-sonuç ilişkisi vardır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Nedeni amaç sanma: Yağmurun yağması istenen bir hedef değil, olmuş bir durumdur; salonun kalabalık olmasının nedenidir.",
    "Amacı neden sanma: Çocukların rahat okuması henüz gerçekleşmemiş, görevlinin ulaşmak istediği bir hedeftir; bu amaç-sonuçtur.",
    "Amacı koşul sanma: 'ulaşmak amacıyla' sözü bir şarta değil, bir hedefe işaret eder; cümlede '-sa/-se' gibi bir koşul yoktur."
  ],
  aciklama: `Koşul-sonuç ilişkisinde bir yargının gerçekleşmesi bir şarta bağlanır: "Şu olursa bu olur." Bu ilişki çoğunlukla "-sa/-se" ekiyle kurulur.
Adım 1: I. cümle: "özetini deftere yazarsa bir damga kazanıyor." Damga kazanmak, özeti yazma şartına bağlanmış. Koşul-sonuç vardır; A doğrudur.
Adım 2: II. cümle: "Yağmur yağdı, bu yüzden salon kalabalıktı." Yağmur olmuş bir durumdur; bu neden-sonuçtur, amaç değil.
Adım 3: III. cümle: Minderlerin dizilmesinin hedefi, çocukların rahat okumasıdır. Bu hedef henüz gerçekleşmemiştir; yani amaç-sonuçtur.
Adım 4: IV. cümle: "on damgaya ulaşmak amacıyla" sözü açıkça bir amaç bildirir; koşul yoktur.
Sağlama: I. cümlede şartı kaldır: "Her okur bir damga kazanıyor." Anlam değişti; demek ki damga bir şarta bağlıydı.
Cevap A.`
},
{
  id: "tur-ca-303",
  kazanim: "T.8.3.21",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun giriş katında yeni açılan kitap kafe için dört arkadaş şunları söylüyor:
Deniz: "Kafedeki koltuklar, okulun en rahat oturma yeri bence."
Mert: "Buradaki kurabiyeler kantindekilerden çok daha lezzetli."
Selin: "Raflarda yüz yirmi kitap var; hepsi mezunlarımızın bağışı."
Kaan: "Kafe, hafta içi öğle arasında bir saat açık kalıyor."
**Bu arkadaşlardan hangilerinin sözü nesnel bir yargı bildirmektedir?**`,
  gorsel: null,
  secenekler: ["Deniz ve Mert", "Deniz ve Selin", "Mert ve Kaan", "Selin ve Kaan"],
  dogru: 3,
  hatalar: [
    "İki öznel yargıyı nesnel sanma: 'en rahat' ve 'daha lezzetli' kişiden kişiye değişen değerlendirmelerdir.",
    "Kısmen doğru seçim: Selin'in sözü nesneldir ama Deniz'in 'en rahat … bence' sözü kişisel bir değerlendirmedir.",
    "Karşılaştırmayı nesnellik sanma: Kaan'ın sözü nesneldir ama Mert'in karşılaştırması tada dayanır; tat kişiden kişiye değişir.",
    null
  ],
  aciklama: `Nesnel yargı, doğruluğu ölçülerek, sayılarak ya da kontrol edilerek sınanabilen yargıdır. Öznel yargı ise kişinin beğenisine, duygusuna, zevkine dayanır ve kişiden kişiye değişir.
Adım 1: Deniz: "en rahat … bence" sözü kişisel bir değerlendirmedir. Başka biri başka yeri daha rahat bulabilir. Öznel.
Adım 2: Mert: Kurabiyelerin tadı ölçülemez; bu bir beğenidir. Karşılaştırma yapılması cümleyi nesnel yapmaz. Öznel.
Adım 3: Selin: Kitaplar sayılabilir, bağışçılar kayıtlardan kontrol edilebilir. Nesnel.
Adım 4: Kaan: Kafenin açık kaldığı saat, kapıdaki çizelgeye bakılarak doğrulanabilir. Nesnel.
Sık yapılan hata: "daha" sözcüğünü gören karşılaştırmayı hemen nesnel saymak. "Daha ucuz" nesnel, "daha lezzetli" özneldir; ölçüt, karşılaştırılan özelliğin ölçülüp ölçülemeyeceğidir.
Cevap D.`
},
{
  id: "tur-ca-304",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Sınıf başkanı Ayça, ayın ilk günü sınıf panosuyla ilgili görevleri dağıtırken Efe'ye dönüp şöyle diyor:
"Geçen ayki gibi panonun başlığını yine sen yaz Efe. Bu sefer harfleri biraz daha büyük yaparsan arka sıralardan da rahatça okunur."
**Ayça'nın bu sözlerinden aşağıdakilerin hangisi çıkarılabilir?**`,
  gorsel: null,
  secenekler: [
    "Efe, panonun başlığını bu ay ilk kez yazacaktır.",
    "Efe'nin geçen ay yazdığı başlık, arkadan zor okunmuştur.",
    "Ayça, pano başlıklarını Efe'den daha güzel yazmaktadır.",
    "Sınıftaki öğrenciler, Efe'nin el yazısını beğenmemektedir."
  ],
  dogru: 1,
  hatalar: [
    "Ters yön: 'Geçen ayki gibi … yine sen yaz' sözü, Efe'nin bu işi daha önce de yaptığını gösterir.",
    null,
    "Metinde olmayan yorum: Ayça kendi yazısıyla Efe'nin yazısını karşılaştırmıyor.",
    "Aşırı genelleme: Ayça yalnızca harflerin büyüklüğünden söz ediyor; yazının beğenilmediğine dair bir ipucu yok, üstelik görevi yine Efe'ye veriyor."
  ],
  aciklama: `Örtülü anlam (varsayım), bir sözde açıkça söylenmeyen ama o sözün doğru olabilmesi için önceden kabul edilmesi gereken bilgidir.
Adım 1: "Geçen ayki gibi … yine sen yaz" → Efe geçen ay da başlığı yazmıştır.
Adım 2: "Bu sefer harfleri biraz daha büyük yaparsan arka sıralardan da rahatça okunur" → "bu sefer" ve "daha büyük" sözleri, geçen ayki harflerin küçük olduğunu; "arka sıralardan da … okunur" sözü ise o başlığın arkadan rahat okunamadığını varsayar.
Adım 3: B seçeneği bu örtülü anlamı dile getiriyor.
Adım 4: A, "yine" sözcüğüyle çelişir. C ve D ise sözde hiçbir dayanağı olmayan yorumlardır.
Sağlama: Geçen ayki başlık arkadan rahat okunsaydı Ayça'nın "bu sefer daha büyük yaz" demesine gerek kalmazdı.
Cevap B.`
},
{
  id: "tur-ca-305",
  kazanim: "T.8.3.10",
  kademe: 3,
  zorluk: 3,
  soru: `Bu yıl bahçemizdeki domates fidelerini mayıs yerine haziranın ortasında dikebildik çünkü ilkbahar boyunca toprak çok ıslaktı. Fideler geç dikilince ilk çiçekler de geç açtı. - - - - domatesleri her yıl ağustosta toplamamıza rağmen bu yıl ancak eylülün sonunda sepete koyabildik. Annem, gelecek yıl fideleri önce evde saksıda büyütmeyi düşünüyor.
**Bu metinde boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["Oysa", "Üstelik", "Yine de", "Bu nedenle"],
  dogru: 3,
  hatalar: [
    "Karşıtlık bağlacını yanlış yerde kullanma: Geç açan çiçeklerle geç toplanan domates arasında karşıtlık yok, aynı yönde bir bağlantı var.",
    "Ekleme ile sonucu karıştırma: 'Üstelik' aynı yönde yeni bir bilgi ekler; oysa boşluktan sonraki cümle, önceki durumun doğal sonucudur.",
    "Beklenene aykırılık bağlacını yanlış kullanma: 'Yine de' beklenenin tersine olan bir durumu bağlar; çiçekler geç açınca hasadın gecikmesi zaten beklenen şeydir.",
    null
  ],
  aciklama: `Geçiş ve bağlantı ifadeleri cümleler arasındaki mantık ilişkisini gösterir: "bu nedenle" sonuç, "oysa" karşıtlık, "üstelik" ekleme, "yine de" beklenene aykırılık bildirir.
Adım 1: Boşluktan önceki cümle: Fideler geç dikildi, çiçekler de geç açtı.
Adım 2: Boşluktan sonraki cümle: Domatesler her yılkinden geç toplandı.
Adım 3: İkinci durum, birincinin doğal sonucudur. Aradaki ilişki neden-sonuçtur; bunu "Bu nedenle" kurar.
Adım 4: "Yine de" koyarsan "Çiçekler geç açmasına karşın domatesler geç toplandı." gibi anlamsız bir karşıtlık kurmuş olursun.
Sağlama: "Çiçekler geç açtı; bu nedenle domatesleri geç topladık." Cümle akıcı ve mantıklıdır.
Cevap D.`
},
{
  id: "tur-ca-306",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yaz kursunun kayıt haftasında öğrencilerin söylediği cümleler aşağıda verilmiştir.
**Bu cümlelerin hangisinde bir yargının gerçekleşmesi başka bir şarta bağlanmıştır?**`,
  gorsel: null,
  secenekler: [
    "Otobüs geç kaldığından kayıt saatine yetişemedik.",
    "Velinden imzalı izin getirmedikçe kursa kaydolamazsın.",
    "Kurs ücretli olsa da okulumuzdan çok öğrenci kaydoldu.",
    "Formu teslim edince görevli bana bir kart verdi."
  ],
  dogru: 1,
  hatalar: [
    "Nedeni koşul sanma: Otobüsün geç kalması bir şart değil, olmuş bir durumdur; yetişememenin nedenidir.",
    null,
    "'-sa da' yapısını koşul sanma: 'olsa da' bir şart kurmaz; kursun ücretli olmasına karşın beklenenin tersine çok kayıt yapıldığını anlatır.",
    "Zamanı koşul sanma: 'Teslim edince' sözü kartın ne zaman verildiğini bildirir; iki olay da zaten gerçekleşmiştir."
  ],
  aciklama: `Koşul-sonuç ilişkisinde bir yargı, gerçekleşip gerçekleşmeyeceği henüz belli olmayan bir şarta bağlanır. Şart yerine gelmezse sonuç da gerçekleşmez. Koşul her zaman "-sa/-se" ekiyle kurulmaz; "-madıkça", "şartıyla", "-madan … -maz" gibi yapılar da koşul bildirebilir. Tersine, "-sa da" yapısı çoğu zaman koşul değil, karşıtlık bildirir.
Adım 1: A: Otobüs geç kaldı; bu olmuş bir olaydır. "-dığından" eki neden bildirir. İlişki neden-sonuçtur.
Adım 2: B: "izin getirmedikçe … kaydolamazsın" → Kayıt, imzalı izni getirme şartına bağlanmış. İzin gelirse kayıt olur, gelmezse olmaz. Koşul-sonuç budur.
Adım 3: C: "ücretli olsa da" sözünde "-sa" eki var ama bir şart kurulmuyor. Kurs gerçekten ücretlidir; cümle, buna karşın çok öğrencinin kaydolduğunu anlatır. Bu, beklenenin tersine gerçekleşen bir durumdur.
Adım 4: D: "-ınca" eki burada zaman bildirir: Form teslim edildi, ardından kart verildi. İki olay da gerçekleşmiştir.
Sağlama: B'yi "-sa" ekiyle yeniden yaz: "Velinden imzalı izin getirmezsen kursa kaydolamazsın." Anlam değişmedi; demek ki cümle bir koşul bildiriyor.
Sık yapılan hata: Koşulu yalnızca "-sa/-se" ekine bakarak aramak. Önce ekin değil, anlamın şart kurup kurmadığına bak.
Cevap B.`
},
{
  id: "tur-ca-307",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `(I) Bisikletini kapının önüne kilitlemeden bırakmasaydın bu olmazdı.
(II) Otobüs kartına her ayın başında yükleme yaparsan yolda zor durumda kalmazsın.
(III) Rüzgârın yönüne bakılırsa bu bulutlar akşama doğru buraya ulaşır.
(IV) Bisiklet yolunun yaya kaldırımının ortasından geçirilmesi büyük bir yanlış olmuş.
**Numaralanmış cümlelerle ilgili aşağıdakilerden hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "I. cümlede öneri anlamı vardır.",
    "II. cümlede öneri anlamı vardır.",
    "III. cümlede tahmin anlamı vardır.",
    "IV. cümlede eleştiri anlamı vardır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru eşleştirmeyi yanlış sanma: II. cümle, karşıdakine ileride yapabileceği bir şeyi tavsiye ediyor; bu bir öneridir.",
    "Doğru eşleştirmeyi yanlış sanma: III. cümle, bir belirtiye dayanarak ileride olacak bir şeyi kestiriyor; bu bir tahmindir.",
    "Doğru eşleştirmeyi yanlış sanma: IV. cümle, bir uygulamanın kusurunu 'büyük bir yanlış' diye değerlendiriyor; bu bir eleştiridir."
  ],
  aciklama: `Öneri, karşıdakine ileride yapabileceği bir şeyi tavsiye etmektir. Eleştiri, bir kişinin ya da işin kusurunu dile getirmektir. Tahmin ise ileride olabilecek bir şeyi kestirmektir.
Adım 1: I. cümle geçmişe bakar: "bırakmasaydın bu olmazdı." İş olmuş bitmiştir; artık yapılabilecek bir şey önerilmiyor. Konuşan, karşısındakini yaptığı hata yüzünden suçluyor. Bu bir eleştiri, sitemdir; öneri değildir. Aradığımız yanlış ifade budur.
Adım 2: II. cümle ileriye bakar: "yükleme yaparsan … zor durumda kalmazsın." Karşıdakine yapabileceği bir şey tavsiye ediliyor: öneri.
Adım 3: III. cümle: "Rüzgârın yönüne bakılırsa … ulaşır." Bir belirtiden yola çıkılarak gelecek kestiriliyor: tahmin.
Adım 4: IV. cümle: Bir uygulama "büyük bir yanlış" diye kusurlu bulunuyor: eleştiri.
Sık yapılan hata: "-saydın" kalıbını görünce öneri demek. Öneri ileriye, sitem ve pişmanlık geçmişe bakar.
Cevap A.`
},
{
  id: "tur-ca-308",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Okul gazetesinde yayımlanan yıl sonu konseri haberinden bazı cümleler aşağıda verilmiştir.
**Bu cümlelerin hangisinde karşılaştırma __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Salon, konserlerin düzenlendiği yıllar içinde ilk kez bu kadar kalabalıktı.",
    "Koroda bu yıl da geçen yılki kadar öğrenci şarkı söyledi.",
    "Koro, son şarkıyı seyircilerin isteğiyle bir kez daha söyledi.",
    "Solo bölümü okuyan Elif'in sesi artık eskisi gibi titremiyordu."
  ],
  dogru: 2,
  hatalar: [
    "Örtük karşılaştırmayı gözden kaçırma: 'ilk kez bu kadar kalabalıktı' sözü, bu yılki kalabalığı önceki yılların kalabalığıyla kıyaslar.",
    "Eşitlik karşılaştırmasını tanımama: 'geçen yılki kadar' sözü iki yılı kıyaslar ve eşit bulur; bu da bir karşılaştırmadır.",
    null,
    "Örtük karşılaştırmayı gözden kaçırma: 'artık eskisi gibi titremiyordu' sözü, Elif'in sesinin bugünkü hâlini önceki hâliyle kıyaslar."
  ],
  aciklama: `Karşılaştırma, iki ya da daha çok varlık veya durum arasındaki benzerlik ya da farkı ortaya koymaktır. Karşılaştırma her zaman "-den daha" ile kurulmaz; "kadar", "ilk kez bu kadar", "eskisi gibi" gibi sözler de iki durumu kıyaslayabilir.
Adım 1: A: "ilk kez bu kadar kalabalıktı" → Salon önceki yıllarda hiç bu kadar dolmamıştı. Bu yıl, önceki yıllarla kıyaslanıyor. Karşılaştırma var.
Adım 2: B: Bu yılki öğrenci sayısı geçen yılkiyle kıyaslanmış ve eşit bulunmuş ("geçen yılki kadar"). Eşitlik de bir karşılaştırmadır.
Adım 3: C: "bir kez daha" sözünde "daha" geçiyor ama burada "yeniden, tekrar" anlamındadır. Şarkının tekrar söylendiği bildiriliyor; iki şey kıyaslanmıyor. Karşılaştırma yok.
Adım 4: D: "artık eskisi gibi titremiyordu" → Elif'in sesinin şimdiki hâli, eski hâliyle kıyaslanıyor. Karşılaştırma var.
Sık yapılan hata: Yalnızca "daha" sözcüğüne bakmak. "Bir kez daha" tekrar bildirir; "eskisi gibi" ise "daha" olmadan da karşılaştırma kurar.
Cevap C.`
},
{
  id: "tur-ca-309",
  kazanim: "T.8.3.21",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kırtasiye dükkânının vitrininde, yeni bir okul çantası için şu tanıtım yazısı asılı:
(I) Çantanın boş ağırlığı 650 gramdır. (II) Ön cebindeki yansıtıcı şerit, akşam karanlığında araç farlarının ışığını geri yansıtır. (III) Rengi ve deseniyle bu yılın en şık çantası budur. (IV) Sırt kısmındaki dolgu, uzun yolları çocuk oyuncağına çevirir.
**Bu yazıdaki numaralanmış cümlelerden hangileri nesnel yargı bildirmektedir?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve IV", "III ve IV"],
  dogru: 0,
  hatalar: [
    null,
    "Kısmen doğru seçim: I. cümle nesneldir ama 'en şık' değerlendirmesi kişinin zevkine göre değişir.",
    "Kısmen doğru seçim: II. cümle nesneldir ama 'uzun yolları çocuk oyuncağına çevirir' sözü abartılı ve kişisel bir değerlendirmedir.",
    "İki öznel yargıyı nesnel sanma: 'en şık' ve 'çocuk oyuncağına çevirir' sözleri ölçülemez; ikisi de reklamcının değerlendirmesidir."
  ],
  aciklama: `Nesnel yargı, tartılarak, ölçülerek ya da denenerek sınanabilen yargıdır. Kişiden kişiye değişen beğeni ve abartılı değerlendirmeler öznel yargıdır.
Adım 1: I. cümle: Çanta tartılarak 650 gram olup olmadığı kontrol edilebilir. Nesnel.
Adım 2: II. cümle: Yansıtıcı şeridin ışığı geri yansıtıp yansıtmadığı karanlıkta bir fenerle denenebilir. Nesnel.
Adım 3: III. cümle: "En şık" değerlendirmesi zevke bağlıdır; birine şık gelen, başkasına sade gelebilir. Öznel.
Adım 4: IV. cümle: Dolgunun "uzun yolları çocuk oyuncağına çevirmesi" ölçülemeyen, abartılı bir değerlendirmedir. Öznel.
Sık yapılan hata: Reklam metnindeki her cümleyi öznel saymak. Reklamlarda da ölçülebilir teknik bilgiler bulunur.
Cevap A.`
},
{
  id: "tur-ca-310",
  kazanim: "T.8.3.10",
  kademe: 3,
  zorluk: 3,
  soru: `Deniz yıldızlarının pek çok türü, bir yırtıcının saldırısında kolunu kaybedebilir. Bu kayıp, hayvan için bir son değildir. Kopan kolun yerinde zamanla yeni bir kol belirir ve bu kol yavaş yavaş eski boyuna ulaşır. __Başka bir deyişle__, deniz yıldızı yitirdiği parçayı kendi vücudunda yeniden üretir. Bilim insanları bu yeteneği, canlılarda yara iyileşmesini daha iyi anlamak için inceliyor.
**Bu metindeki altı çizili ifadenin metne katkısı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Önceki cümlelerle çelişen yeni bir bilgi getirmiştir.",
    "Anlatılan durumun doğurduğu sonuca geçiş sağlamıştır.",
    "Anlatılanlara aynı yönde yeni bir bilgi eklemiştir.",
    "Anlatılanları farklı sözcüklerle yeniden açıklamıştır."
  ],
  dogru: 3,
  hatalar: [
    "Karşıtlık sanma: Altı çizili ifadeden sonraki cümle, öncekilerle çelişmiyor; aynı şeyi söylüyor.",
    "Sonuç bağlacıyla karıştırma: 'Böylece' ya da 'bu nedenle' sonuç bildirir; 'başka bir deyişle' ise yeni bir sonuç değil, aynı bilginin başka bir anlatımını getirir.",
    "Ekleme bağlacıyla karıştırma: 'Üstelik' yeni bilgi ekler; burada yeni bir bilgi yoktur, kolun yeniden oluşması başka sözcüklerle tekrarlanmıştır.",
    null
  ],
  aciklama: `"Başka bir deyişle" ifadesi, söylenmiş bir düşünceyi farklı sözcüklerle, çoğu zaman daha kısa ya da daha anlaşılır biçimde yeniden anlatmak için kullanılır.
Adım 1: Önceki cümle: Kopan kolun yerinde yeni bir kol belirir ve eski boyuna ulaşır.
Adım 2: Sonraki cümle: Deniz yıldızı yitirdiği parçayı yeniden üretir.
Adım 3: İki cümle aynı bilgiyi verir; ikincisi yalnızca daha genel sözcüklerle anlatır. Yeni bir bilgi, sonuç ya da karşıtlık yoktur.
Adım 4: Bu nedenle ifadenin katkısı, anlatılanı farklı sözcüklerle yeniden açıklamaktır.
Sağlama: İfadenin yerine "yani" koy: "Yani deniz yıldızı yitirdiği parçayı yeniden üretir." Anlam değişmedi.
Cevap D.`
},
{
  id: "tur-ca-311",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Gökyüzü gözlem gecesinden döndükten sonra günlüğüme şunları yazdım:
(I) Haftalardır takvimde işaretli duran gece, gökyüzü bize tek bir yıldız bile göstermedi; kurduğumuz teleskobu hiç kullanamadan topladık.
(II) Geçen yaz dedemle aynı battaniyenin altında yıldız saydığımız o gece, bütün akşam gözümün önünden gitmedi.
(III) Yedek pilleri akşamüstü çantaya koymayı unutmasaydım fenerimiz dönüş yolunda sönmezdi.
(IV) Dönüşte sis bastırdıkça gözüm, babamın direksiyonu sımsıkı tutan ellerinden ayrılmadı.
**Numaralanmış cümlelerin hangisinde hayal kırıklığı dile getirilmiştir?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "Özlemi hayal kırıklığı sanma: II. cümlede geçmişte yaşanmış güzel bir anın yeniden anılması, yani özlem vardır; boşa çıkan bir beklenti yoktur.",
    "Pişmanlığı hayal kırıklığı sanma: III. cümlede konuşan, kendi yaptığı bir unutkanlık yüzünden üzülüyor ('unutmasaydım'); bu pişmanlıktır.",
    "Kaygıyı hayal kırıklığı sanma: IV. cümlede gözün babanın ellerinden ayrılmaması, sisli yolda bir şey olacağından duyulan endişeyi, yani kaygıyı gösterir."
  ],
  aciklama: `Duygular her zaman adıyla söylenmez; çoğu zaman bir davranış ya da durum anlatılarak sezdirilir. Hayal kırıklığı, umulan ya da beklenen bir şey gerçekleşmeyince duyulan üzüntüdür. Bu duyguyu bulmak için cümlede hem bir beklenti hem de o beklentinin boşa çıkması olmalıdır.
Adım 1: I. cümle: "Haftalardır takvimde işaretli duran gece" → uzun süredir beklenen bir gece (beklenti). "Tek bir yıldız bile göstermedi", "hiç kullanamadan topladık" → beklenti boşa çıktı. Hayal kırıklığı budur.
Adım 2: II. cümle: Geçmişte dedeyle yaşanan bir an özlemle anılıyor. Beklentinin boşa çıkması yok; duygu özlemdir.
Adım 3: III. cümle: "unutmasaydım … sönmezdi" → Konuşan, kendi hatasına üzülüyor. Kişinin kendi yaptığı ya da yapmadığı bir iş için duyduğu üzüntü pişmanlıktır.
Adım 4: IV. cümle: Sis arttıkça babanın ellerine bakılması, yolda bir sorun çıkacağından duyulan endişeyi gösterir. Bu kaygıdır.
Sık yapılan hata: Hayal kırıklığı ile pişmanlığı karıştırmak. Pişmanlıkta kişi kendi eylemine üzülür ("keşke yapsaydım", "yapmasaydım"); hayal kırıklığında ise beklediği şey, onun elinde olmadan gerçekleşmez.
Cevap A.`
},
{
  id: "tur-ca-312",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bazı cümleler, açıkça söylemedikleri bir bilgiyi de bize sezdirir. Örneğin "Otobüsü bu sefer kaçırmadık." diyen biri, önceki seferlerde otobüsü kaçırdıklarını da anlatmış olur.
**Aşağıdaki cümlelerin hangisinde bu türden örtülü bir anlam __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Kardeşim bu kez odasını kimse hatırlatmadan topladı.",
    "Dedem de sonunda telefonla görüntülü konuşmayı öğrendi.",
    "Kuzenim, bayram tatilinde bize Bursa'dan şeftali getirdi.",
    "Komşumuzun kedisi bile bu gürültüden rahatsız oldu."
  ],
  dogru: 2,
  hatalar: [
    "Örtülü anlamı gözden kaçırma: 'bu kez … kimse hatırlatmadan' sözü, kardeşin odasını önceden ancak biri hatırlatınca topladığını sezdirir.",
    "Örtülü anlamı gözden kaçırma: 'de' ve 'sonunda' sözleri, başkalarının bunu önceden öğrendiğini ve dedenin öğrenmekte zorlandığını sezdirir.",
    null,
    "Örtülü anlamı gözden kaçırma: 'bile' sözü, kedinin kolay kolay rahatsız olmadığını ve başkalarının da rahatsız olduğunu sezdirir."
  ],
  aciklama: `Örtülü anlam, cümlede açıkça söylenmeyen ama cümlenin kuruluşundan çıkarılan anlamdır. "Bu kez, de, bile, yine, artık, sonunda" gibi sözler çoğu zaman böyle bir anlam taşır.
Adım 1: A: "bu kez … kimse hatırlatmadan" → Önceki seferlerde biri hatırlatmıştı. Örtülü anlam var.
Adım 2: B: "Dedem de sonunda" → Başkaları bunu önceden öğrenmişti, dede ise uzun süre öğrenemedi. Örtülü anlam var.
Adım 3: C: Kuzenin şeftali getirdiği bildiriliyor. Cümle, söylediğinden başka bir bilgi sezdirmiyor.
Adım 4: D: "kedisi bile" → Kedi kolay rahatsız olmaz; demek ki gürültü çok fazlaydı ve başkaları da rahatsız oldu. Örtülü anlam var.
Sağlama: C'ye "yine" ekle: "Kuzenim bize yine şeftali getirdi." Şimdi "daha önce de getirmişti" anlamı doğdu; demek ki özgün cümlede bu anlam yoktu.
Cevap C.`
},
{
  id: "tur-ca-313",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Sınıfın sözlük panosu için hazırlanan bir metin şöyledir:
(I) Bilmece, bir varlığı adını söylemeden, özelliklerini üstü kapalı biçimde sıralayarak buldurmaya dayanan bir söz oyunudur.
(II) Örneğin "Yağmurda açılır, güneşte kapanır." diye sorulan bir bilmecenin cevabı şemsiyedir.
(III) Bulmaca ise verilen ipuçlarına uyan sözcüklerin harflerini, bir tablodaki boş karelere tek tek yerleştirerek çözülen bir oyundur.
(IV) Bilmece, çocukların hayal gücünü geliştiren en eğlenceli oyundur.
**Numaralanmış cümlelerden hangilerinde tanım yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve IV", "III ve IV"],
  dogru: 1,
  hatalar: [
    "Örneklemeyi tanım sanma: I. cümle tanımdır ama II. cümle bilmece kavramını açıklamıyor, tek bir bilmeceyi örnek veriyor; '… şemsiyedir' diye bitmesi onu tanım yapmaz.",
    null,
    "Tanım kalıbına aldanma: II. cümle bir örnek verir; IV. cümle ise '… oyundur' diye bitse de bilmeceyi kişisel beğeniyle değerlendirir. İkisi de kavramın ne olduğunu açıklamaz.",
    "Kısmen doğru seçim: III. cümle tanımdır ama IV. cümledeki 'en eğlenceli oyun' değerlendirmesi kişiden kişiye değişir; bu, tanım değil öznel bir yargıdır."
  ],
  aciklama: `Tanım, bir kavramın ne olduğunu, onu başka kavramlardan ayıran temel özellikleriyle açıklayan cümledir. Tanım herkes için geçerlidir; kişisel beğeni içermez. Örnekleme ise bir düşünceyi somut bir örnekle açıklamaktır ve çoğu zaman "örneğin, mesela" gibi sözlerle kurulur.
Adım 1: I. cümle: Bilmecenin ne olduğu, onu başka söz oyunlarından ayıran özelliklerle (adını söylemeden, özelliklerini sıralayarak buldurma) açıklanıyor. Tanım.
Adım 2: II. cümle: "Örneğin" sözüyle tek bir bilmece gösteriliyor. Kavram açıklanmıyor, somutlaştırılıyor. Örnekleme.
Adım 3: III. cümle: Bulmacanın ne olduğu, nasıl çözüldüğü üzerinden açıklanıyor. Tanım.
Adım 4: IV. cümle: Yapısı tanıma benziyor ("Bilmece, … oyundur") ama "en eğlenceli" kişiden kişiye değişen bir değerlendirmedir. Kavramın ne olduğunu değil, konuşanın onu nasıl bulduğunu anlatır. Öznel yargı.
Sık yapılan hata: "X, … -dır." kalıbındaki her cümleyi tanım saymak. Cümleye "Bu, kavramın ne olduğunu herkes için mi anlatıyor, yoksa birinin görüşünü mü bildiriyor?" diye sor.
Cevap B.`
},
{
  id: "tur-ca-314",
  kazanim: "T.8.3.10",
  kademe: 3,
  zorluk: 3,
  soru: `Okulumuzun bahçesindeki çeşmenin musluğu aylardır damlatıyordu. Fen kulübü, musluğun altına bir kova koyup bir gün boyunca biriken suyu ölçtü. Kulüp üyeleri, bir yılda boşa akacak suyu hesaplayıp sonuçları bir afişle koridora astı. __Böylece__ okul yönetimi, musluğu değiştirmek için hemen harekete geçti.
**Bu metindeki altı çizili sözcüğün yerine, anlamı değiştirmeden aşağıdakilerden hangisi getirilebilir?**`,
  gorsel: null,
  secenekler: ["Oysaki", "Özellikle", "Bu sayede", "Başka bir deyişle"],
  dogru: 2,
  hatalar: [
    "Karşıtlık bağlacı seçme: 'Oysaki' önceki cümleye karşıt bir durum bağlar; yönetimin harekete geçmesi afişe karşıt değil, afişin sonucudur.",
    "Vurgulama ifadesi seçme: 'Özellikle' genel bir yargının içinden bir parçayı öne çıkarır; burada öne çıkarılan bir parça değil, bir sonuç vardır.",
    null,
    "Açıklama ifadesi seçme: 'Başka bir deyişle' aynı düşünceyi yeniden anlatır; son cümle öncekileri tekrar etmiyor, yeni bir sonuç bildiriyor."
  ],
  aciklama: `"Böylece" sözcüğü, anlatılan eylemlerin sonunda ortaya çıkan sonucu bağlar. Anlamca en yakın ifadeler "bu sayede", "bu yolla" gibi sonuç bildiren sözlerdir.
Adım 1: Önceki cümlelerde kulübün yaptığı işler anlatılıyor: su ölçüldü, hesap yapıldı, afiş asıldı.
Adım 2: Son cümlede bu işlerin sonucu var: Yönetim musluğu değiştirmek için harekete geçti.
Adım 3: "Bu sayede" de bir işin olumlu sonucunu bağlar: "Bu sayede okul yönetimi … harekete geçti." Anlam korunur.
Adım 4: Diğer seçenekler karşıtlık (oysaki), vurgulama (özellikle) ve yeniden açıklama (başka bir deyişle) bildirir.
Sağlama: Cümleyi "Afiş asıldı; bu sayede yönetim harekete geçti." biçiminde oku. Aynı neden-sonuç zinciri kurulur.
Cevap C.`
},
{
  id: "tur-ca-315",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, hafta sonunu anlatan dört cümlesini aşağıdaki tabloya yazmıştır.
**Tablodaki cümlelerin taşıdığı anlam ilişkileri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>1</td><td>Pazar sabahı erken kalkmak için alarmı altıya kurdum.</td></tr><tr><td>2</td><td>Alarm çalmadığı için kahvaltıya geç kaldım.</td></tr><tr><td>3</td><td>Hafta içi uyandığım saatten bir saat daha geç kalktım.</td></tr><tr><td>4</td><td>Gelecek pazar erken kalkabilirsem babamla balığa gideceğim.</td></tr></table>`,
  secenekler: [
    "neden – amaç – karşılaştırma – koşul",
    "amaç – neden – koşul – karşılaştırma",
    "neden – neden – karşılaştırma – koşul",
    "amaç – neden – karşılaştırma – koşul"
  ],
  dogru: 3,
  hatalar: [
    "Amaç ile nedeni yer değiştirme: 1. cümlede erken kalkmak istenen hedeftir (amaç), 2. cümlede alarmın çalmaması olmuş bir durumdur (neden).",
    "Son iki cümleyi karıştırma: 3. cümle iki saati kıyaslar (karşılaştırma), 4. cümle balığa gitmeyi erken kalkma şartına bağlar (koşul).",
    "Amacı neden sanma: 1. cümlede alarm kurulurken erken kalkma henüz gerçekleşmemiştir; bu bir hedeftir, yani amaçtır.",
    null
  ],
  aciklama: `Cümlede anlam ilişkisini bulmak için iki eylem arasındaki bağa bak: Hedef mi (amaç), olmuş bir durum mu (neden), şart mı (koşul), kıyas mı (karşılaştırma)?
Adım 1: 1. cümle: Alarm kurulurken erken kalkmak henüz gerçekleşmemiş, istenen bir hedeftir. Amaç-sonuç.
Adım 2: 2. cümle: Alarm çalmamıştır; olmuş bu durum geç kalmanın nedenidir. Neden-sonuç.
Adım 3: 3. cümle: Pazar günkü kalkış saati hafta içiyle kıyaslanıyor ("bir saat daha geç"). Karşılaştırma.
Adım 4: 4. cümle: Balığa gitmek, erken kalkabilme şartına bağlanmış ("-sem"). Koşul-sonuç.
Adım 5: Sıra: amaç – neden – karşılaştırma – koşul.
Sık yapılan hata: 1. ve 2. cümlede de "için" geçtiği için ikisine aynı ilişkiyi vermek. "için" sözcüğü tek başına ilişkiyi belirlemez.
Cevap D.`
},
{
  id: "tur-ca-316",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Göl kıyısındaki bir kamp alanı, ziyaretçilere dağıttığı broşürde hem kurallara hem de önerilere yer vermiş. Broşürü hazırlayanlar, bazı cümlelerde bilgi vermekle yetinmiş, bazılarında ise kendi beğenilerini de okura aktarmışlar. Aşağıda bu broşürden dört cümle verilmiştir.
**Bu cümlelerin hangisinde hem koşul-sonuç ilişkisi vardır hem de öznel bir yargı bildirilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Kamp alanının giriş kapısı, yaz aylarında sabah yedide açılır.",
    "Gün doğumunu tepeden izlerseniz ömrünüzün en güzel sabahını yaşarsınız.",
    "Ateş yakmak isterseniz önce kamp görevlisinden izin almanız gerekir.",
    "Göl kıyısındaki çadırlar, kamp alanının en güzel köşesinde kuruludur."
  ],
  dogru: 1,
  hatalar: [
    "İki ölçütü de karşılamayan cümle: Kapının açılış saati nesnel bir bilgidir ve cümlede şarta bağlanmış bir yargı yoktur.",
    null,
    "Yarım doğru: Cümlede koşul-sonuç vardır ama izin almanın gerekmesi kamp alanının kuralıdır; kurallar denetlenebilir, yani yargı nesneldir.",
    "Yarım doğru: 'En güzel köşe' değerlendirmesi özneldir ama cümlede hiçbir yargı bir şarta bağlanmamıştır."
  ],
  aciklama: `İki ölçütlü sorularda her seçeneği iki ayrı soruyla sına: (1) Yargı bir şarta bağlanmış mı? (2) Yargı kişiden kişiye değişen bir değerlendirme mi?
Adım 1: A: Şart yok; saat bilgisi nesneldir. İki ölçüt de yok.
Adım 2: B: "izlerseniz … yaşarsınız" → Sonuç, gün doğumunu tepeden izleme şartına bağlı. "Ömrünüzün en güzel sabahı" ise kişiye göre değişen bir değerlendirmedir. İki ölçüt de var.
Adım 3: C: "isterseniz … gerekir" → Koşul var. Ancak izin alma zorunluluğu kamp alanının kuralıdır; bu kural sorularak doğrulanabilir. Yargı nesneldir.
Adım 4: D: "en güzel köşesinde" → Öznel. Ancak şart yok.
Sık yapılan hata: İki ölçütten birini bulunca seçeneği işaretlemek. C ve D, ölçütlerden yalnızca birini karşılayarak tuzak kurar.
Cevap B.`
},
{
  id: "tur-ca-317",
  kazanim: "T.8.3.21",
  kademe: 3,
  zorluk: 4,
  soru: `Okulumuzun fen kulübü, bir ay boyunca iki saksıdaki fasulye fidelerini izledi. Saksılardan biri güneş alan pencerenin önüne, diğeri ise dolabın gölgesine konmuştu. Kulübün hazırladığı gözlem defterinden şu cümleler alınmıştır:
(I) Güneş alan saksıdaki fide, gölgedekinden daha fazla yaprak açtı.
(II) Gölgedeki fide ışıksız kaldığı için bize çok zavallı göründü.
(III) Fideleri her gün aynı saatte sulamak için telefonumuza hatırlatıcı kurduk.
(IV) Gölgedeki fide yeterince ışık alamadığı için yaprakları sarardı.
**Numaralanmış cümlelerin hangisi hem nesnel bir yargı bildirmekte hem de neden-sonuç ilişkisi taşımaktadır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "Karşılaştırmayı neden-sonuç sanma: I. cümle nesneldir ama iki fideyi kıyaslar; bir durumun nedenini bildirmez.",
    "Yarım doğru: II. cümlede neden-sonuç vardır ama fidenin 'çok zavallı görünmesi' kişisel bir izlenimdir, yani özneldir.",
    "Amacı neden sanma: III. cümle nesneldir ama her gün aynı saatte sulamak henüz gerçekleşmemiş bir hedeftir; ilişki amaç-sonuçtur.",
    null
  ],
  aciklama: `Nesnel yargı gözlemle ya da ölçümle doğrulanabilir; neden-sonuç ilişkisinde ise olmuş bir durum, başka bir durumun sebebidir. Soru, iki özelliği birlikte taşıyan cümleyi istiyor.
Adım 1: I. cümle: Yapraklar sayılabilir; nesneldir. Ancak ilişki karşılaştırmadır, neden bildirilmez.
Adım 2: II. cümle: "ışıksız kaldığı için" → neden-sonuç var. Ancak "çok zavallı göründü" gözlemcilerin duygusudur; öznel.
Adım 3: III. cümle: Hatırlatıcı kurma işinin hedefi, düzenli sulamaktır; amaç-sonuç. Nesnel ama neden-sonuç değil.
Adım 4: IV. cümle: "ışık alamadığı için" → olmuş bir durum sararmanın nedeni. Yaprakların sarardığı gözle görülüp doğrulanabilir. İki özellik de var.
Sık yapılan hata: II ile IV'ü karıştırmak. İkisinde de "… için" nedeni var; farkı sonuç kısmı yaratır: "sarardı" gözlenebilir, "zavallı göründü" ise bir duygudur.
Cevap D.`
},
{
  id: "tur-ca-318",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul voleybol takımının antrenörü, deplasmandaki maçtan sonra soyunma odasında oyunculara şöyle seslendi:
"Bu maçta da ikinci yarıda hızımızı koruyamadık. Antrenmanlara herkes zamanında gelseydi son dakikalarda bu kadar yorulmazdık. Kondisyon çalışmalarını aksatırsak ligin ikinci yarısında da aynı sorunu yaşarız. Yine de savunmada geçen haftaya göre çok daha dikkatliydiniz; bunu gördüm ve sizi kutluyorum."
**Antrenörün bu sözlerinden aşağıdakilerin hangisi __çıkarılamaz__?**`,
  gorsel: null,
  secenekler: [
    "Takım, maçı ikinci yarıda yaptığı hatalar yüzünden kaybetmiştir.",
    "Takım, önceki maçlarda da ikinci yarıda yavaşlamıştır.",
    "Bazı oyuncular, antrenmanlara zamanında gelmemiştir.",
    "Takımın savunması, geçen haftakinden daha iyi olmuştur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Çıkarılabilen yargıyı çıkarılamaz sanma: 'Bu maçta da' sözündeki 'da', aynı sorunun önceki maçlarda da yaşandığını sezdirir.",
    "Çıkarılabilen yargıyı çıkarılamaz sanma: 'herkes zamanında gelseydi' sözü, bazı oyuncuların geç kaldığını örtülü olarak anlatır.",
    "Çıkarılabilen yargıyı çıkarılamaz sanma: 'geçen haftaya göre çok daha dikkatliydiniz' sözü bu karşılaştırmayı açıkça yapar."
  ],
  aciklama: `"Çıkarılamaz" sorularında her seçeneğin metinde bir dayanağı olup olmadığına bakılır. Dayanak, açık bir söz ya da "da, gelseydi, göre" gibi örtülü anlam taşıyan bir yapı olabilir.
Adım 1: B: "Bu maçta da" → "da" bağlacı, ikinci yarıda yavaşlamanın daha önce de yaşandığını sezdirir. Çıkarılabilir.
Adım 2: C: "Herkes zamanında gelseydi" → Gerçekleşmemiş bir şart kuruluyor; demek ki herkes zamanında gelmemiştir. Çıkarılabilir.
Adım 3: D: "geçen haftaya göre çok daha dikkatliydiniz" → Açık bir karşılaştırma. Çıkarılabilir.
Adım 4: A: Antrenör hız kaybından ve yorgunluktan söz ediyor ama maçın sonucunu hiç söylemiyor. Takım yorulmuş olsa da maçı kazanmış olabilir. Bu yargının metinde dayanağı yok.
Sık yapılan hata: Antrenörün eleştirel tonundan maçın kaybedildiği sonucunu çıkarmak. Eleştiri, yenilginin kanıtı değildir.
Cevap A.`
},
{
  id: "tur-ca-319",
  kazanim: "T.8.3.10",
  kademe: 3,
  zorluk: 4,
  soru: `Çoğumuz yarasaların göremediğini düşünürüz. (I) - - - - yarasaların gözleri vardır ve bazı türlerin görme duyusu oldukça gelişmiştir. Gece avlanan türlerin çoğu ise karanlıkta yolunu seslerle bulur. Bu yarasalar, insan kulağının duyamayacağı kadar yüksek perdeden sesler çıkarır. Sesler bir engele ya da bir böceğe çarpıp geri döner; (II) - - - - hayvan, çevresindeki cismin yerini ve uzaklığını kestirebilir. Bilim insanları bu yeteneği ses dalgalarıyla çalışan cihazları geliştirirken örnek almıştır.
**Bu metinde numaralanmış yerlere aşağıdakilerden hangileri sırasıyla getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "Üstelik / böylece",
    "Oysaki / özellikle",
    "Oysaki / böylece",
    "Kısaca / başka bir deyişle"
  ],
  dogru: 2,
  hatalar: [
    "İlk boşlukta ekleme bağlacı: Önceki cümledeki yaygın düşünce ile sonraki bilgi karşıttır; 'Üstelik' aynı yönde ekleme yapar. İkinci boşluk doğrudur.",
    "İkinci boşlukta vurgulama ifadesi: Sesin geri dönmesiyle hayvanın cismin yerini kestirmesi arasında sonuç ilişkisi var; 'özellikle' bir sonucu bağlamaz. İlk boşluk doğrudur.",
    null,
    "İki boşlukta da özetleme ve açıklama ifadesi: Metinde özetlenen ya da yeniden söylenen bir düşünce yok; ilk boşlukta karşıtlık, ikincide sonuç gerekir."
  ],
  aciklama: `Geçiş ifadesi seçerken boşluktan önceki ve sonraki cümlelerin ilişkisini adlandır; sonra o ilişkiyi kuran ifadeyi seç. "Oysaki" karşıtlık, "böylece" sonuç, "üstelik" ekleme, "özellikle" vurgulama, "kısaca" özetleme bildirir.
Adım 1: (I) öncesi: "Yarasaların göremediğini düşünürüz." (I) sonrası: "Yarasaların gözleri vardır ve bazı türler iyi görür." Yaygın düşünce ile gerçek karşıttır → "Oysaki".
Adım 2: (II) öncesi: "Sesler bir engele çarpıp geri döner." (II) sonrası: "Hayvan cismin yerini kestirebilir." Geri dönen ses bu kestirmeyi sağlar; sonuç ilişkisi → "böylece".
Adım 3: İki boşluğu da doğru karşılayan tek seçenek C'dir.
Sağlama: "Sesler geri döner; böylece hayvan cismin yerini kestirebilir." Neden-sonuç zinciri kopmadan okunuyor.
Sık yapılan hata: Yalnızca bir boşluğa bakıp seçenek işaretlemek. A ve B, boşluklardan birini doğru vererek tuzak kurar.
Cevap C.`
},
{
  id: "tur-ca-320",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `(I) Babaannemin köyündeki taş fırın her sabah beşte yakılır. (II) Hamurun zamanında mayalanması için fırıncı gece yarısı kalkıp hamuru yoğurur. (III) Bence o fırının ekmeği, şehirde yediğim ekmeklerin hepsinden daha lezzetli. (IV) Fırıncı, un fiyatları arttığı için geçen ay ekmeğin fiyatını iki lira yükseltmiş. (V) Keşke şehirdeki mahallemizde de böyle bir fırın olsa.
**Bu metindeki numaralanmış cümlelerle ilgili aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: [
    "II. cümlede neden-sonuç ilişkisi kurulmuştur.",
    "III. cümlede öznel bir karşılaştırma yapılmıştır.",
    "IV. cümlede neden-sonuç ilişkisi kurulmuştur.",
    "V. cümlede bir dilek dile getirilmiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Söylenebilen yargıyı seçme: III. cümle köy ekmeğini şehir ekmekleriyle kıyaslıyor ve 'bence … daha lezzetli' diyerek kişisel beğeniye dayanıyor.",
    "Söylenebilen yargıyı seçme: Un fiyatlarının artması olmuş bir durumdur ve ekmeğin pahalanmasının nedenidir.",
    "Söylenebilen yargıyı seçme: 'Keşke … olsa' kalıbı, gerçekleşmesi istenen bir dileği dile getirir."
  ],
  aciklama: `Neden-sonuç ile amaç-sonucu ayırmanın ölçütü: "için"den önceki eylem olmuş bir durumsa neden, henüz gerçekleşmemiş ve istenen bir hedefse amaçtır.
Adım 1: II. cümle: Fırıncı gece yarısı kalktığında hamur henüz mayalanmamıştır. Hamurun zamanında mayalanması, kalkıp yoğurma işinin ulaşmak istediği hedeftir. Bu amaç-sonuçtur; A'daki "neden-sonuç" yargısı yanlıştır.
Adım 2: III. cümle: Köy ekmeği şehir ekmekleriyle kıyaslanıyor; "bence … daha lezzetli" değerlendirmesi kişisel beğeniye dayanıyor. B doğrudur.
Adım 3: IV. cümle: Un fiyatları artmıştır; bu olmuş durum fiyat artışının nedenidir. C doğrudur.
Adım 4: V. cümle: "Keşke … olsa" gerçekleşmesi istenen bir dilektir. D doğrudur.
Sağlama: II. cümlede "amacıyla" dene: "Hamurun zamanında mayalanması amacıyla fırıncı gece yarısı kalkar." Anlam bozulmadı; ilişki amaçtır.
Cevap A.`
},
{
  id: "tur-ca-321",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Okul kütüphanesi kulübü, "Kitap Takas Günü" için bir afiş hazırlayacak. Kulüp danışmanı, afiş metninin aşağıdaki üç ölçütü birlikte karşılamasını istiyor. Kulüp üyeleri dört farklı taslak yazmıştır.
**Buna göre hangi taslak, ölçütlerin üçünü de karşılamaktadır?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüt</th><th>Afiş metni…</th></tr><tr><td>1</td><td>etkinliğin gününü ve saatini bildirmeli.</td></tr><tr><td>2</td><td>takastan yararlanmayı bir şarta bağlayan bir cümle içermeli.</td></tr><tr><td>3</td><td>öznel bir yargı içermemeli.</td></tr></table>`,
  secenekler: [
    "Kütüphanedeki takas günü yaklaşıyor. Bir kitap getirirsen raftan istediğin bir kitabı alabilirsin.",
    "Takas günü cuma saat 14.00'te kütüphanede. Bir kitap getirirsen raflardaki harika kitaplardan birini alırsın.",
    "Takas günü cuma saat 14.00'te kütüphanede. Katılan öğrenciler getirdikleri kitapları raflara kendileri dizecek.",
    "Takas günü cuma saat 14.00'te kütüphanede. Bir kitap getirirsen raftan istediğin bir kitabı alabilirsin."
  ],
  dogru: 3,
  hatalar: [
    "1. ölçütü atlama: Taslakta koşul var ve öznel yargı yok ama etkinliğin günü ve saati bildirilmemiş.",
    "3. ölçütü atlama: Gün, saat ve koşul var ama 'harika kitaplar' sözü kişisel bir değerlendirmedir.",
    "2. ölçütü atlama: Gün ve saat var, öznel yargı yok ama takastan yararlanma hiçbir şarta bağlanmamış.",
    null
  ],
  aciklama: `Ölçütlü sorularda her taslağı ölçütlerin hepsiyle tek tek sına; bir ölçüte takılan taslağı hemen ele.
Adım 1: A: Gün ve saat yok ("yaklaşıyor" demek yetmez). 1. ölçüt karşılanmıyor.
Adım 2: B: Gün ve saat var; "getirirsen … alırsın" koşulu var. Ancak "harika kitaplar" kişiye göre değişen bir değerlendirmedir. 3. ölçüt karşılanmıyor.
Adım 3: C: Gün ve saat var, öznel yargı yok. Ancak ikinci cümle yalnızca yapılacak işi bildiriyor, hiçbir şeyi şarta bağlamıyor. 2. ölçüt karşılanmıyor.
Adım 4: D: Gün ve saat var (1); "getirirsen … alabilirsin" koşulu var (2); iki cümle de denetlenebilir bilgi veriyor (3). Üç ölçüt de karşılanıyor.
Sık yapılan hata: B ile D'yi aynı sanmak. İkisi arasındaki tek fark "harika" sözcüğüdür; tek bir değerlendirme sözcüğü cümleyi öznel yapmaya yeter.
Cevap D.`
},
{
  id: "tur-ca-322",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Geçen yaz ağabeyimle üç günlük bir bisiklet turuna katıldık. Tur, kıyı boyunca uzanan köy yollarından geçiyordu. Her akşam belirlenen bir kamp alanında konaklıyorduk. Turdan aklımda kalanları şu cümlelerle yazdım:
(I) İkinci günkü rota, ilk günkünden on kilometre daha uzundu.
(II) Yokuşta nefesimi toparlamak için bisikletten inip bir süre yürüdüm.
(III) Kamp alanına diğer gruplardan daha erken varmak için molaları kısa tuttuk.
(IV) Rüzgâr arkamızdan estiği için dönüş yolu gidişten daha kısa sürdü.
**Numaralanmış cümlelerin hangisinde hem amaç-sonuç ilişkisi hem de karşılaştırma vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Yarım doğru: I. cümlede iki rota kıyaslanıyor ama bir hedef için yapılan bir iş yok.",
    "Yarım doğru: II. cümlede amaç-sonuç var ('nefesimi toparlamak için') ama bir kıyaslama yok.",
    null,
    "Nedeni amaç sanma: IV. cümlede karşılaştırma var ama rüzgârın arkadan esmesi olmuş bir durumdur; ilişki neden-sonuçtur."
  ],
  aciklama: `İki ölçütlü sorularda her cümleyi iki soruyla sına: (1) Bir iş, henüz gerçekleşmemiş istenen bir hedef için mi yapılmış? (2) İki şey kıyaslanmış mı?
Adım 1: I: Rotalar kıyaslanmış ("-den … daha uzun"). Hedef bildiren bir yapı yok. Yalnızca karşılaştırma.
Adım 2: II: "nefesimi toparlamak için" → hedef; amaç-sonuç. Kıyas yok.
Adım 3: III: "daha erken varmak için" → Kamp alanına varmak henüz gerçekleşmemiş, istenen bir hedeftir; amaç-sonuç. Aynı zamanda "diğer gruplardan daha erken" sözü grupları kıyaslıyor; karşılaştırma. İki ölçüt de var.
Adım 4: IV: "daha kısa sürdü" → karşılaştırma var. "Rüzgâr arkamızdan estiği için" ise olmuş bir durumdur; neden-sonuç.
Sık yapılan hata: IV'teki "için" sözcüğünü görüp amaç demek. Rüzgârın esmesi kimsenin ulaşmak istediği bir hedef değildir.
Cevap C.`
},
{
  id: "tur-ca-323",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Türkçe öğretmeni, Deren'in "Mahallemizin Unutulan Çeşmesi" başlıklı kompozisyonunu okuduktan sonra kâğıdın altına şu notu yazmış:
"Paragrafların arasındaki geçişler nihayet akıcı olmuş Deren, tebrik ederim. Keşke yazım kurallarına da bu kadar özen gösterseydin; birkaç sözcüğü yeniden gözden geçirmen gerekiyor."
Deren notu okuyunca önce sevinmiş, sonra kırmızıyla işaretlenen sözcüklere dikkatle bakmıştır.
**Öğretmenin notuyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Hem övgü hem de öğrencinin daha önce zorlandığı bir konuya gönderme vardır.",
    "Hem eleştiri hem de öğrencinin gelecekteki başarısına dair bir tahmin vardır.",
    "Hem övgü hem de öğrencinin yazım kurallarını bilmediğine dair bir yargı vardır.",
    "Hem pişmanlık hem de öğrencinin önceki yazılarının kısa olduğuna gönderme vardır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yarım doğru: Notta 'keşke … özen gösterseydin' diye bir eleştiri var ama Deren'in gelecekteki başarısı hakkında hiçbir tahmin yok.",
    "Aşırı yorum: Öğretmen 'özen gösterseydin' diyor; bu, kuralları bilmediğini değil, dikkat etmediğini anlatır. Övgü kısmı doğrudur.",
    "Duyguyu yanlış adlandırma: 'Keşke' burada öğretmenin kendi pişmanlığını değil, Deren'e yönelik bir sitemi anlatır; yazıların uzunluğundan da hiç söz edilmez."
  ],
  aciklama: `Bir sözdeki anlamı bulurken hem açıkça söyleneni (övgü, eleştiri) hem de örtülü olarak sezdirileni (varsayım) ara. İki parçalı seçeneklerde iki parçanın da doğru olması gerekir.
Adım 1: "Geçişler … akıcı olmuş, tebrik ederim" → açık bir övgü.
Adım 2: "nihayet" sözcüğü, bu başarının uzun süredir beklendiğini sezdirir: Deren daha önceki yazılarında paragraf geçişlerinde zorlanıyordu. Bu, örtülü bir gönderme. A'nın iki parçası da doğru.
Adım 3: B: Eleştiri var ama tahmin yok. C: Övgü var ama "bilmediği" yargısı notta yok; öğretmen özenden söz ediyor. D: "Keşke … gösterseydin" başkasının yaptığı işe yönelik bir sitemdir; pişmanlık, kişinin kendi yaptığı iş için duyduğu üzüntüdür. Uzunluktan da söz edilmez.
Sık yapılan hata: "Keşke" sözcüğünü her zaman pişmanlık saymak. Kişi kendi eylemi için "keşke" derse pişmanlık, başkasının eylemi için derse sitem ya da eleştiri olur.
Cevap A.`
},
{
  id: "tur-ca-324",
  kazanim: "T.8.3.21",
  kademe: 3,
  zorluk: 4,
  soru: `Okulun düzenlediği fidan dikme etkinliğinden sonra dört arkadaş bahçede şöyle konuşuyor:
Arda: "Bugün okul bahçesine otuz iki fidan diktik."
Buse: "Fidanlar kök salsın diye çevrelerindeki toprağı iyice sıkıştırdık."
Cem: "Bence en güzel köşe, çınar fidanını diktiğimiz kapı önü oldu."
Duru: "Bu fidanlar büyüyünce bahçenin yarısı gölgede kalacak."
**Bu konuşmayla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Arda'nın sözü hem nesneldir hem de koşul-sonuç ilişkisi taşır.",
    "Buse'nin sözü hem nesneldir hem de amaç-sonuç ilişkisi taşır.",
    "Cem'in sözü hem özneldir hem de neden-sonuç ilişkisi taşır.",
    "Duru'nun sözü hem nesneldir hem de karşılaştırma içerir."
  ],
  dogru: 1,
  hatalar: [
    "Yarım doğru: Arda'nın sözü nesneldir ama hiçbir yargı bir şarta bağlanmamıştır.",
    null,
    "Yarım doğru: Cem'in sözü özneldir ama bir durumun nedenini bildiren bir yapı yoktur.",
    "Yarım doğru: Duru'nun sözü, ileride gözlemle sınanabilecek bir tahmin olduğu için nesneldir ama cümlede iki varlık ya da durum kıyaslanmıyor; 'bahçenin yarısı' bir miktar bildirir, karşılaştırma değildir."
  ],
  aciklama: `Nesnel yargı sınanabilen yargıdır; doğru çıkması gerekmez. Geleceğe ait bir tahmin de zamanı gelince kontrol edilebildiği için nesnel sayılır. "diye" sözcüğü, henüz gerçekleşmemiş istenen bir hedefe bağlandığında amaç bildirir.
Adım 1: Arda: Fidanlar sayılabilir; nesnel. Ama şart yok. A yanlış.
Adım 2: Buse: "kök salsın diye" → Fidanların kök salması henüz gerçekleşmemiş, istenen bir hedeftir; amaç-sonuç. Toprağın sıkıştırıldığı da görülüp doğrulanabilir; nesnel. B doğru.
Adım 3: Cem: "Bence en güzel" → öznel; ama neden bildiren bir yapı yok. C yanlış.
Adım 4: Duru: Bir tahmin var. Gölgenin oluşup oluşmadığı ileride gözlenebilir; bu yüzden yargı nesnel sayılır. Ancak cümlede hiçbir şey başka bir şeyle kıyaslanmıyor; "bahçenin yarısı" yalnızca bir miktar bildirir. D'nin "karşılaştırma içerir" kısmı yanlış olduğu için D elenir.
Sık yapılan hata: Henüz olmamış bir şeyi söyleyen her cümleyi öznel saymak. Tahmin ile beğeniyi karıştırma; "gölgede kalacak" sınanır, "güzel olacak" sınanamaz.
Cevap B.`
},
{
  id: "tur-ca-325",
  kazanim: "T.8.3.10",
  kademe: 3,
  zorluk: 4,
  soru: `Mahallemizdeki eski sinema salonu yıllardır kapalıydı. Geçen ay bir grup gönüllü, salonu çocuklar için bir sanat atölyesine dönüştürmeye karar verdi. İşe başladıklarında koltukların çoğu kırıktı, perde yırtılmıştı; **üstelik** (I) çatı da yağmurda akıtıyordu. Gönüllüler bu sorunların hepsini bir ayda çözemedi. **Yine de** (II) açılış günü salon, resim yapmak ve kukla oynatmak isteyen çocuklarla doldu.
**Bu metinde numaralanmış geçiş ifadelerinin metne katkısıyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "I, olumsuzluklara aynı yönde bir yenisini eklemiş; II, beklenenin aksine olan bir durumu bağlamıştır.",
    "I, önceki durumların nedenini açıklamış; II, anlatılanların sonucunu bildiren bir durumu bağlamıştır.",
    "I, önceki durumlara karşıt bir durum getirmiş; II, beklenenin aksine olan bir durumu bağlamıştır.",
    "I, olumsuzluklara aynı yönde bir yenisini eklemiş; II, anlatılanların sonucunu bildiren bir durumu bağlamıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "İki ifadeyi de yanlış adlandırma: Akıtan çatı kırık koltukların nedeni değildir; 'yine de' ise sonuç değil, beklenene aykırılık bildirir.",
    "Yarım doğru: II doğru adlandırılmış ama akıtan çatı, kırık koltuk ve yırtık perdeyle karşıt değil, aynı yönde bir olumsuzluktur.",
    "Yarım doğru: I doğru adlandırılmış ama sorunlar çözülmemişken salonun dolması beklenen bir sonuç değil, beklenenin aksine olan bir durumdur."
  ],
  aciklama: `"Üstelik" önceki düşünceye aynı yönde yeni bir bilgi ekler. "Yine de" ise önceki cümleden beklenenin tersine gerçekleşen bir durumu bağlar.
Adım 1: I: Önce kırık koltuklar ve yırtık perde sayılıyor; "üstelik" ile bunlara akıtan çatı ekleniyor. Üçü de olumsuzdur; aynı yönde bir ekleme yapılmış.
Adım 2: II: Önceki cümle: Sorunlar bir ayda çözülemedi. Buradan beklenen, salonun boş kalmasıdır. Sonraki cümle: Salon çocuklarla doldu. Beklenenin tersi gerçekleşmiş; "yine de" bunu bağlıyor.
Adım 3: İki ifadeyi de doğru adlandıran tek seçenek A'dır.
Adım 4: C ve D, iki ifadeden yalnızca birini doğru vererek tuzak kurar.
Sağlama: "Yine de" yerine "bu nedenle" koy: "Sorunlar çözülemedi; bu nedenle salon çocuklarla doldu." Cümle mantıksızlaştı; demek ki ilişki sonuç değil.
Cevap A.`
},
/* ===================== HAVUZ (KADEME 0) ===================== */
{
  id: "tur-ca-001",
  kazanim: "T.8.3.21",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde nesnel bir yargı vardır?**`,
  gorsel: null,
  secenekler: [
    "Bu pastanenin kurabiyeleri çok lezzetli.",
    "Sonbaharda parkın renkleri insanı büyülüyor.",
    "Bu kitabın kapağı biraz sıkıcı görünüyor.",
    "Kütüphane cumartesi günleri saat on sekizde kapanıyor."
  ],
  dogru: 3,
  hatalar: [
    "Beğeniyi bilgi sanma: 'Lezzetli' değerlendirmesi kişinin damak zevkine bağlıdır.",
    "Duyguyu bilgi sanma: Renklerin 'büyülemesi' kişinin iç dünyasına ait bir izlenimdir.",
    "Değerlendirmeyi bilgi sanma: Bir kapağın 'sıkıcı' olup olmadığı bakan kişiye göre değişir.",
    null
  ],
  aciklama: `Nesnel yargı, doğruluğu kontrol edilerek sınanabilen yargıdır; öznel yargı ise kişinin beğenisine ya da duygusuna dayanır.
Adım 1: Her cümlede "Bunu herkes aynı yolla doğrulayabilir mi?" diye sor.
Adım 2: Kütüphanenin kapanış saati, kapıdaki çizelgeye bakılarak doğrulanabilir. Bu cümle nesneldir.
Adım 3: "Lezzetli", "büyülüyor", "sıkıcı" sözleri kişiden kişiye değişen değerlendirmelerdir.
Sık yapılan hata: "biraz" gibi yumuşatan sözcüklerin cümleyi nesnel yaptığını sanmak. "Biraz sıkıcı" da bir beğeni yargısıdır.
Cevap D.`
},
{
  id: "tur-ca-002",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Keşke o gün arkadaşımın doğum günü partisine gitseydim.
**Bu cümlede aşağıdaki anlamlardan hangisi vardır?**`,
  gorsel: null,
  secenekler: ["Öneri", "Pişmanlık", "Tahmin", "Eleştiri"],
  dogru: 1,
  hatalar: [
    "Geçmişi geleceğe çevirme: Öneri, karşıdakine ileride yapabileceği bir şeyi tavsiye eder; bu cümle olmuş bitmiş bir günden söz ediyor.",
    null,
    "Tahmin sanma: Cümle ileride olacak bir şeyi kestirmiyor, geçmişe bakıyor.",
    "Kişiyi karıştırma: Eleştiri başkasının kusurunu dile getirir; burada konuşan kişi kendi davranışından üzüntü duyuyor."
  ],
  aciklama: `Pişmanlık, kişinin geçmişte yaptığı ya da yapmadığı bir şeyden dolayı duyduğu üzüntüdür.
Adım 1: "o gün" sözü geçmişteki bir günü gösterir.
Adım 2: "Keşke … gitseydim" kalıbı, konuşanın partiye gitmediğini ve bundan üzüntü duyduğunu anlatır.
Adım 3: Üzüntü konuşanın kendi davranışına yönelik olduğu için pişmanlıktır.
Sık yapılan hata: "Keşke" sözcüğünü hep dilek saymak. Keşke, gelecek için söylenirse dilek ("Keşke yarın kar yağsa"), kişinin geçmişteki kendi davranışı için söylenirse pişmanlık bildirir.
Cevap B.`
},
{
  id: "tur-ca-003",
  kazanim: "T.8.3.10",
  kademe: 0,
  zorluk: 1,
  soru: `Sabah hava çok soğuktu; - - - - okulun futbol maçı ertelenmedi.
**Bu cümlede boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["bu nedenle", "üstelik", "yine de", "böylece"],
  dogru: 2,
  hatalar: [
    "Sonuç ile karşıtlığı karıştırma: Soğuk hava maçın ertelenmemesinin nedeni olamaz; beklenen, maçın ertelenmesidir.",
    "Ekleme sanma: 'Üstelik' aynı yönde yeni bir bilgi ekler; buradaki iki durum ise birbirine ters düşer.",
    null,
    "Sonuç bildiren ifadeyi seçme: 'Böylece' bir işin sonucunu bağlar; maçın ertelenmemesi soğuğun sonucu değildir."
  ],
  aciklama: `"Yine de" ifadesi, önceki durumdan beklenenin tersine gerçekleşen bir durumu bağlar.
Adım 1: Önceki durum: Hava çok soğuktu. Buradan beklenen: Maç ertelenir.
Adım 2: Gerçekleşen: Maç ertelenmedi. Beklenenin tersi olmuş.
Adım 3: Bu ilişkiyi "yine de" kurar.
Sağlama: "Hava çok soğuktu; buna rağmen maç ertelenmedi." Anlam aynı kalıyor.
Cevap C.`
},
{
  id: "tur-ca-004",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Sınıfça düzenlediğimiz kermesi anlatan cümleler şunlardır:
(I) Köy okulundaki öğrencilere kitap göndermek için pasta satmaya karar verdik.
(II) Evdeki fırın küçük olduğu için pastaları ikişer ikişer pişirdik.
(III) Pastalar çabuk tükendiği için masayı öğleden önce topladık.
(IV) Kermes bitince kasadaki parayı öğretmenimize teslim ettik.
**Numaralanmış cümlelerin hangisinde amaç-sonuç ilişkisi vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "Nedeni amaç sanma: Fırının küçük olması istenen bir hedef değil, var olan bir durumdur.",
    "Nedeni amaç sanma: Pastaların tükenmesi olmuş bir durumdur; masanın toplanmasının nedenidir.",
    "Zamanı amaç sanma: 'Bitince' sözü paranın ne zaman teslim edildiğini bildirir."
  ],
  aciklama: `Amaç-sonuç ilişkisinde bir iş, henüz gerçekleşmemiş ve ulaşılmak istenen bir hedef için yapılır. Olmuş bir durum yüzünden yapılan iş ise neden-sonuç ilişkisi taşır.
Adım 1: I. cümle: Satış kararı verildiğinde kitaplar henüz gönderilmemiştir. Kitap göndermek, ulaşılmak istenen hedeftir. Amaç-sonuç.
Adım 2: II ve III. cümleler: "Fırın küçüktü", "pastalar tükendi" olmuş durumlardır. Neden-sonuç.
Adım 3: IV. cümle: "-ınca" eki zaman bildirir.
Sağlama: I. cümlede "amacıyla" dene: "Kitap göndermek amacıyla pasta satmaya karar verdik." Anlam korunuyor.
Cevap A.`
},
{
  id: "tur-ca-005",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Okulun duyuru panosuna bahçeyle ilgili notlar asılmış. Notlarda yer alan cümleler aşağıda verilmiştir.
**Bu cümlelerin hangisinde koşul-sonuç ilişkisi vardır?**`,
  gorsel: null,
  secenekler: [
    "Bahçe kapısı, onarım yüzünden bir hafta kapalı kalacak.",
    "Öğrenciler, bahçeyi temizlemek için eldiven getirdi.",
    "Hava güzel olursa beden eğitimi dersi bahçede yapılacak.",
    "Bahçedeki yeni banklar, eskilerinden daha geniş yapılmış."
  ],
  dogru: 2,
  hatalar: [
    "Nedeni koşul sanma: 'Onarım yüzünden' sözü kapının neden kapalı kalacağını bildirir; bir şart kurmaz.",
    "Amacı koşul sanma: Eldiven getirmenin hedefi bahçeyi temizlemektir; bu bir amaçtır.",
    null,
    "Karşılaştırmayı koşul sanma: Yeni banklar eskileriyle kıyaslanıyor; bir şart yok."
  ],
  aciklama: `Koşul-sonuç ilişkisinde bir yargının gerçekleşmesi bir şarta bağlanır. Bu ilişki çoğu zaman "-sa/-se" ekiyle kurulur.
Adım 1: C'de dersin bahçede yapılması, havanın güzel olması şartına bağlanmıştır: "güzel olursa … yapılacak."
Adım 2: A'da neden, B'de amaç, D'de karşılaştırma vardır.
Sağlama: Şartı olumsuz yap: "Hava güzel olmazsa ders bahçede yapılmayacak." Sonuç da değişti; demek ki sonuç şarta bağlı.
Cevap C.`
},
{
  id: "tur-ca-006",
  kazanim: "T.8.3.21",
  kademe: 0,
  zorluk: 2,
  soru: `Planetaryum gezisinden dönen dört öğrenci izlenimlerini şöyle anlatıyor:
Ela: "Gösteri kırk dakika sürdü."
Umut: "Kubbeye yansıtılan gökyüzü, gördüğüm en etkileyici manzaraydı."
Nil: "Salonda yüz yirmi koltuk vardı."
Tuna: "Gösteriden sonra görevli bize Ay'ın evrelerini anlattı."
**Bu öğrencilerden hangisinin sözü öznel bir yargı bildirmektedir?**`,
  gorsel: null,
  secenekler: ["Ela", "Umut", "Nil", "Tuna"],
  dogru: 1,
  hatalar: [
    "Ölçülebilir bilgiyi öznel sanma: Gösterinin süresi saatle ölçülebilir.",
    null,
    "Sayılabilir bilgiyi öznel sanma: Koltuklar sayılarak doğrulanabilir.",
    "Olayı öznel sanma: Görevlinin ne anlattığı, orada bulunan herkesçe doğrulanabilir."
  ],
  aciklama: `Öznel yargı, kişinin duygu, beğeni ya da izlenimine dayanan ve kişiden kişiye değişebilen yargıdır.
Adım 1: Ela'nın ve Nil'in sözleri ölçülebilir, sayılabilir bilgilerdir.
Adım 2: Tuna, yaşanan bir olayı aktarıyor; bu da doğrulanabilir.
Adım 3: Umut'un "gördüğüm en etkileyici manzara" değerlendirmesi kişisel bir izlenimdir; başka biri aynı gösteriyi sıradan bulabilir.
Sık yapılan hata: "en" sözcüğünü görünce hemen nesnel bir sıralama sanmak. "En uzun" ölçülebilir, "en etkileyici" ölçülemez.
Cevap B.`
},
{
  id: "tur-ca-007",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Annem, akşam yemeğinde yaz planlarımızı konuşurken şöyle dedi: "Ablan bu yaz da yüzme kursuna gidecek."
**Annemin bu sözünden aşağıdakilerin hangisi çıkarılabilir?**`,
  gorsel: null,
  secenekler: [
    "Ablam, yüzmeyi bu yaz öğrenecektir.",
    "Ablam, yüzme kursunu çok sevmektedir.",
    "Ablam, bu yaz başka bir kursa da gidecektir.",
    "Ablam, daha önce de yüzme kursuna gitmiştir."
  ],
  dogru: 3,
  hatalar: [
    "Metinde olmayan yorum: Sözde ablanın yüzmeyi ne zaman öğreneceğine dair bir bilgi yok; daha önce de kursa gittiyse belki zaten biliyordur.",
    "Duygu ekleme: Sözde ablanın kursu sevip sevmediği söylenmiyor.",
    "'de' bağlacını yanlış sözcüğe bağlama: 'de' burada 'bu yaz' sözüne bağlıdır; başka bir kursu değil, önceki yazları sezdirir.",
    null
  ],
  aciklama: `Örtülü anlam, cümlede açıkça söylenmeyen ama cümlenin kuruluşundan çıkarılan anlamdır. "de/da" bağlacı çoğu zaman böyle bir anlam taşır.
Adım 1: "de" bağlacı hangi sözcükten sonra geliyor? "bu yaz da".
Adım 2: "Bu yaz da" demek, "önceki yazlarda olduğu gibi bu yaz da" demektir.
Adım 3: Demek ki abla daha önce de yüzme kursuna gitmiştir.
Sağlama: "de"yi çıkar: "Ablan bu yaz yüzme kursuna gidecek." Artık önceki yazlarla ilgili hiçbir bilgi kalmıyor.
Cevap D.`
},
{
  id: "tur-ca-008",
  kazanim: "T.8.3.10",
  kademe: 0,
  zorluk: 2,
  soru: `Mahallemizde yeni açılan halk kütüphanesi, evimize yürüme mesafesinde. __Üstelik__ hafta sonları da akşam dokuza kadar açık kalıyor.
**Bu metindeki altı çizili sözcüğün metne katkısı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Önceki cümleye karşıt bir düşünce getirmiştir.",
    "Önceki cümledeki olumlu yöne yeni bir bilgi eklemiştir.",
    "Önceki cümledeki durumun nedenini açıklamıştır.",
    "Önceki cümleyi başka sözcüklerle yeniden anlatmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Karşıtlık sanma: İki cümle de kütüphanenin olumlu bir yönünü anlatıyor; aralarında karşıtlık yok.",
    null,
    "Neden sanma: Kütüphanenin geç saate kadar açık olması, yakın olmasının nedeni değildir.",
    "Yeniden anlatım sanma: İkinci cümle ilkini tekrar etmiyor, yepyeni bir bilgi veriyor."
  ],
  aciklama: `"Üstelik" sözcüğü, önceki düşünceyle aynı yönde olan yeni bir bilgiyi ekler; "bunun yanında, dahası" anlamı taşır.
Adım 1: Birinci cümle kütüphanenin olumlu bir yönünü anlatıyor: eve yakın.
Adım 2: İkinci cümle başka bir olumlu yön ekliyor: hafta sonu geç saate kadar açık.
Adım 3: İki bilgi aynı yöndedir; "üstelik" bunları bağlayıp ikincisini ekler.
Sağlama: "Üstelik" yerine "bunun yanında" koy. Anlam değişmiyor.
Cevap B.`
},
{
  id: "tur-ca-009",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Okulumuzun meteoroloji kulübü, çatıya bir ölçüm cihazı yerleştirdi. Kulüp üyelerinden biri, ilk haftayı şu cümlelerle anlatıyor:
(I) Çatıdaki cihaz, dün öğle saatinde 31 derece sıcaklık gösterdi.
(II) Keşke cihazı güneş almayan bir köşeye yerleştirseydik.
(III) Kulüp başkanımız, ölçümleri her gün aynı saatte kaydetmemizi istedi.
(IV) Bulutlar bu hızla toplanmaya devam ederse akşama doğru yağmur başlar.
**Numaralanmış cümlelerin hangisinde bir tahmin dile getirilmiştir?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "Ölçümü tahmin sanma: I. cümle cihazın gösterdiği sıcaklığı aktarıyor; olmuş bir ölçüm tahmin değildir.",
    "Pişmanlığı tahmin sanma: 'Keşke … yerleştirseydik' kalıbı geçmişte yapılan bir iş için duyulan pişmanlığı anlatır.",
    "Aktarılan isteği tahmin sanma: III. cümlede başkanın bir isteği aktarılıyor; ileride olacak bir şey kestirilmiyor.",
    null
  ],
  aciklama: `Tahmin, bir belirtiye ya da bilgiye dayanarak ileride olabilecek bir şeyi kestirmektir.
Adım 1: I. cümle: Dünkü ölçüm aktarılıyor; olmuş bir şey.
Adım 2: II. cümle: Geçmişteki bir karardan duyulan pişmanlık.
Adım 3: III. cümle: Başkanın bir istekte bulunduğu aktarılıyor.
Adım 4: IV. cümle: Bulutların toplanması belirtisinden yola çıkılarak akşam yağmur yağacağı kestiriliyor. Bu bir tahmindir.
Sık yapılan hata: Koşul eki gördüğün için tahmini dışarıda bırakmak. Bir cümlede hem koşul hem tahmin bulunabilir; IV. cümle ikisini birden taşır.
Cevap D.`
},
{
  id: "tur-ca-010",
  kazanim: "T.8.3.21",
  kademe: 0,
  zorluk: 3,
  soru: `(I) Kâğıt katlama sanatı origami, adını Japoncadan alır. (II) Tek bir kare kâğıttan, makas ve yapıştırıcı kullanmadan pek çok farklı şekil elde edilebilir. (III) Origaminin asıl güzelliği, ortaya çıkan şekilde değil, katlarken kazanılan sabırdadır. (IV) Yeni başlayanlar için satılan origami kâğıtları genellikle 15 × 15 santimetre boyutundadır.
**Bu metindeki numaralanmış cümlelerin hangisinde yazar kişisel görüşünü dile getirmiştir?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Bilgiyi görüş sanma: Origaminin adının kökeni sözlüklerden doğrulanabilen bir bilgidir.",
    "Bilgiyi görüş sanma: Kâğıttan makassız şekil yapılabileceği denenerek doğrulanabilir.",
    null,
    "Bilgiyi görüş sanma: Kâğıtların boyutu ölçülerek doğrulanabilir."
  ],
  aciklama: `Kişisel görüş, yazarın bir konuya ilişkin kendi değerlendirmesidir; başka biri aynı konuda farklı düşünebilir. Bilgi ise kaynaklardan ya da ölçümle doğrulanabilir.
Adım 1: I, II ve IV. cümleler doğrulanabilir bilgiler veriyor: adın kökeni, yapılış biçimi, kâğıt boyutu.
Adım 2: III. cümlede yazar, origaminin "asıl güzelliğinin" ne olduğuna karar veriyor. Başka biri asıl güzelliği ortaya çıkan şekilde bulabilir. Bu bir görüştür.
Sık yapılan hata: Kişisel görüşü yalnızca "bence, bana göre" gibi sözlerle aramak. III. cümlede bu sözler yok ama "asıl güzellik" bir değerlendirmedir.
Cevap C.`
},
{
  id: "tur-ca-011",
  kazanim: "T.8.3.10",
  kademe: 0,
  zorluk: 3,
  soru: `Evde kompost yapmak isteyenler şu yolu izleyebilir. (I) - - - - bahçenin gölge bir köşesine tahta bir kasa yerleştirilir. Ardından kasaya sebze ve meyve kabuklarıyla kuru yapraklar kat kat serilir. Karışım haftada bir kez havalandırılır ve kurumaması için hafifçe sulanır. (II) - - - - birkaç ay sonra kasanın dibinde koyu renkli, toprak kokulu ve bitkiler için besleyici bir gübre birikir.
**Bu metinde numaralanmış yerlere aşağıdakilerden hangileri sırasıyla getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "İlk olarak / oysaki",
    "İlk olarak / böylece",
    "Özellikle / böylece",
    "Kısaca / son olarak"
  ],
  dogru: 1,
  hatalar: [
    "İkinci boşlukta karşıtlık: Gübrenin birikmesi, anlatılan işlerin sonucudur; önceki adımlarla çelişmez.",
    null,
    "İlk boşlukta vurgulama: Metin bir sürecin ilk adımıyla başlıyor; öne çıkarılan bir ayrıntı yok, bu yüzden 'özellikle' uymaz.",
    "İlk boşlukta özetleme: Henüz hiçbir şey anlatılmadığı için özetlenecek bir şey de yok; 'kısaca' metnin başına gelemez."
  ],
  aciklama: `Süreç anlatan metinlerde "ilk olarak, ardından, son olarak" gibi ifadeler adımların sırasını; "böylece" ise bu adımların sonucunu bildirir.
Adım 1: (I) süreci başlatan ilk adımın önünde duruyor; sonraki cümle "Ardından" ile devam ediyor. Buraya "İlk olarak" gelir.
Adım 2: (II)'den sonra yeni bir adım değil, bütün adımların sonucu anlatılıyor: gübre birikir. Buraya sonuç bildiren "böylece" gelir.
Adım 3: İki boşluğu da doğru karşılayan seçenek B'dir.
Sağlama: "Karışım havalandırılır ve sulanır. Böylece birkaç ay sonra gübre birikir." Neden-sonuç zinciri akıcı okunuyor.
Cevap B.`
},
{
  id: "tur-ca-012",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Apartmanın giriş kapısına şu not asılmış:
"Sevgili komşular, geçen hafta olduğu gibi bu hafta da merdivenlere bırakılan bisikletler yüzünden yaşlı komşularımız inip çıkmakta zorlanıyor. Bisikletlerinizi bodrumdaki bisiklet odasına koyarsanız hepimiz rahat ederiz. Apartman Yönetimi"
**Bu nottan aşağıdakilerin hangisine ulaşılabilir?**`,
  gorsel: null,
  secenekler: [
    "Bisikletlerin merdivenlere bırakılması yeni bir sorun değildir.",
    "Apartmandaki bütün komşular bisiklet kullanmaktadır.",
    "Yaşlı komşular, yönetime bu konuda şikâyette bulunmuştur.",
    "Bisiklet odası, geçen hafta kullanıma açılmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Aşırı genelleme: Notta bazı komşuların bisikletlerini merdivene bıraktığı anlaşılıyor; herkesin bisiklet kullandığına dair bir bilgi yok.",
    "Metinde olmayan bilgi: Notta yaşlı komşuların zorlandığı söyleniyor ama şikâyet edip etmedikleri söylenmiyor.",
    "Zaman bilgisini yanlış bağlama: 'Geçen hafta' sözü bisiklet odasıyla değil, merdivendeki bisikletlerle ilgilidir."
  ],
  aciklama: `"Ulaşılabilir" sorularında seçeneğin metinde açık ya da örtülü bir dayanağı olmalıdır. Metnin söylediğini aşan yorumlar elenir.
Adım 1: "geçen hafta olduğu gibi bu hafta da" sözü, sorunun en az bir haftadır sürdüğünü gösterir. A'nın dayanağı budur.
Adım 2: B: Notta "bütün komşular" hakkında bir bilgi yok; bu aşırı bir genellemedir.
Adım 3: C: Zorlanmak ile şikâyet etmek aynı şey değildir; şikâyet notta geçmiyor.
Adım 4: D: "Geçen hafta" sözü bisiklet odasına değil, merdivendeki bisikletlere bağlıdır.
Sağlama: "da" bağlacını çıkar: "Bu hafta merdivenlere bırakılan bisikletler…" Artık sorunun daha önce yaşandığı anlaşılmıyor. Demek ki A'nın dayanağı "geçen hafta olduğu gibi … da" yapısıdır.
Cevap A.`
},
{
  id: "tur-ca-013",
  kazanim: "T.8.3.21",
  kademe: 0,
  zorluk: 4,
  soru: `Sınıf gezisinin nereye yapılacağını konuşan dört öğrenci, görüşlerini şöyle dile getiriyor:
Ada: "Müzeye gidersek tarih dersinde işlediğimiz eserleri yakından görebiliriz."
Batu: "Botanik bahçesi pazartesi günleri kapalı olduğu için oraya ancak salı gidebiliriz."
Cansu: "Bilim merkezi, deneyleri kendimiz yapabildiğimiz için gidilecek en eğlenceli yer."
Doruk: "Bence en güzel seçenek, sahil boyunca bisiklet turu olur."
**Bu öğrencilerden hangisinin sözünde hem öznel bir yargı hem de neden-sonuç ilişkisi vardır?**`,
  gorsel: null,
  secenekler: ["Ada", "Batu", "Cansu", "Doruk"],
  dogru: 2,
  hatalar: [
    "İki ölçütü de karşılamayan söz: Ada'nın sözünde neden değil koşul ('gidersek') vardır; eserlerin müzede görülebileceği de doğrulanabilir bir bilgidir.",
    "Yarım doğru: Batu'nun sözünde neden-sonuç vardır ama bahçenin kapalı olduğu gün, çizelgeden doğrulanabilir; yargı nesneldir.",
    null,
    "Yarım doğru: Doruk'un sözü özneldir ama bu değerlendirmenin nedenini bildiren bir yapı yoktur."
  ],
  aciklama: `İki ölçütlü sorularda her konuşmayı iki ayrı soruyla sına: (1) Yargı kişiden kişiye değişir mi? (2) Olmuş ya da var olan bir durum, başka bir yargının nedeni olarak gösterilmiş mi?
Adım 1: Ada: "gidersek … görebiliriz" → koşul-sonuç; neden değil. Yargı da doğrulanabilir.
Adım 2: Batu: "kapalı olduğu için" → neden-sonuç var. Ancak kapanış günü doğrulanabilir bir bilgidir; nesnel.
Adım 3: Cansu: "deneyleri kendimiz yapabildiğimiz için" → neden. "En eğlenceli yer" → kişiye göre değişen değerlendirme; öznel. İki ölçüt de var.
Adım 4: Doruk: "Bence en güzel" → öznel. Ancak neden gösterilmiyor.
Sık yapılan hata: Batu'nun sözündeki "için"i görünce hemen seçmek. Neden-sonuç, yargıyı öznel yapmaz; öznelliği ayrıca aramak gerekir.
Cevap C.`
},
{
  id: "tur-ca-014",
  kazanim: "T.8.3.21",
  kademe: 0,
  zorluk: 4,
  soru: `Kuş gözlem gezisine katılan iki öğrenci, gezi defterlerine şunları yazmıştır:
Zeynep: "Göl kıyısındaki gözlem kulübesinde iki saat bekledik ve on dört farklı kuş türü saydık. Bu türlerin altısı su kuşuydu. Rehberimiz, kuşların sonbaharda göç yolunda bu gölde dinlendiğini söyledi."
Kerem: "Gözlem kulübesinde geçirdiğimiz iki saat, bu yılın en huzurlu anlarıydı. Bir yalıçapkınının suya dalıp gagasında balıkla çıktığını görünce heyecandan nefesimi tuttum."
**Bu iki öğrencinin yazdıklarıyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Zeynep de Kerem de gözlemi öznel yargılarla anlatmıştır.",
    "Zeynep gözlemini nesnel, Kerem ise duygularını da katarak anlatmıştır.",
    "Kerem, Zeynep'ten farklı olarak gözlemin süresine değinmemiştir.",
    "Zeynep, Kerem'den farklı olarak bir kuşun davranışını anlatmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Yarım doğru: Kerem'in yazısında öznel yargı var ama Zeynep yalnızca sayılabilen ve doğrulanabilen bilgiler veriyor.",
    null,
    "Metni atlama: Kerem de 'geçirdiğimiz iki saat' diyerek gözlemin süresini belirtiyor.",
    "Ters yön: Bir kuşun davranışını (yalıçapkınının suya dalışını) anlatan Kerem'dir; Zeynep türleri sayıyor."
  ],
  aciklama: `İki metni karşılaştırırken her seçenekteki yargıyı iki metinde ayrı ayrı sına. "… farklı olarak" diyen seçeneklerde, özelliğin bir metinde bulunup ötekinde bulunmaması gerekir.
Adım 1: Zeynep: süre, tür sayısı, su kuşu sayısı ve rehberin sözü aktarılıyor. Bunların hepsi doğrulanabilir; anlatım nesneldir.
Adım 2: Kerem: "en huzurlu anlar" ve "heyecandan nefesimi tuttum" sözleri duygu ve kişisel değerlendirme taşır.
Adım 3: B, iki metni doğru nitelendiriyor.
Adım 4: C: Kerem de "iki saat" diyor. D: Kuşun davranışını anlatan Zeynep değil, Kerem'dir.
Sık yapılan hata: "… farklı olarak" kalıbında yalnızca bir metne bakmak. Özelliğin öteki metinde bulunmadığını da kontrol etmelisin.
Cevap B.`
},
{
  id: "tur-ca-015",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Kardeşim Can, bu yıl da okulun satranç turnuvasında finale kalamadı. Oysa yaz boyunca her akşam babamla çalışmıştı. Yine de yarı finalden sonra rakibinin elini sıktı ve "Seneye yine buradayım." dedi. Eve dönerken yolda kaybettiği oyunun hamlelerini tek tek anlattı; hangi hamlede hata yaptığını da bulmuştu. Akşam yemeğinden sonra satranç tahtasını yeniden kurdu ve o hamleyi bu kez farklı oynayarak denedi.
**Bu metinden aşağıdakilerin hangisi __çıkarılamaz__?**`,
  gorsel: null,
  secenekler: [
    "Can, geçmiş yıllarda da bu turnuvaya katılmıştır.",
    "Can'ın yaz boyunca yaptığı çalışma, umulan sonucu vermemiştir.",
    "Can, yenilgiye rağmen turnuvaya katılmaktan vazgeçmemiştir.",
    "Can, turnuvadaki bütün maçlarını kaybetmiştir."
  ],
  dogru: 3,
  hatalar: [
    "Çıkarılabilen yargıyı seçme: 'bu yıl da … finale kalamadı' sözü, Can'ın önceki yıllarda da turnuvada yarıştığını sezdirir.",
    "Çıkarılabilen yargıyı seçme: 'Oysa' ile kurulan karşıtlık, yoğun çalışmaya rağmen beklenen sonucun gelmediğini gösterir.",
    "Çıkarılabilen yargıyı seçme: 'Yine de … Seneye yine buradayım' sözü, Can'ın vazgeçmediğini açıkça gösterir.",
    null
  ],
  aciklama: `"Çıkarılamaz" sorularında metnin söylediğini aşan seçeneği ararsın. Geçiş ifadeleri ("oysa, yine de") ve örtülü anlam taşıyan bağlaçlar ("da") çıkarımların dayanağıdır.
Adım 1: A: "bu yıl da" → önceki yıllarda da yarışmış ve finale kalamamıştır. Çıkarılabilir.
Adım 2: B: "Oysa yaz boyunca … çalışmıştı" → Çalışmaya karşın finale kalamadı; umulan sonuç gelmedi. Çıkarılabilir.
Adım 3: C: "Yine de … Seneye yine buradayım" → Yenilgiye karşın vazgeçmedi. Çıkarılabilir.
Adım 4: D: Can yarı finalde elenmiştir. Yarı finale kadar gelebilmek için önceki turlarda kazanmış olmalıdır. "Bütün maçlarını kaybetti" yargısı metnin söylediğini aşar, hatta metinle çelişir.
Sık yapılan hata: "Finale kalamadı" sözünü "hiç kazanamadı" diye genişletmek. Metin yalnızca sonucun finalden önce geldiğini söylüyor.
Cevap D.`
}
);
