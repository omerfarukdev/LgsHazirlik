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
  soru: `Satrancı, kuzenimin bana bıraktığı eski bir kitaptan öğrendim. Yaz boyunca her taşın nasıl yürüdüğünü çalıştım: Filin çapraz, kalenin düz gittiğini, atın öteki taşların üstünden atlayabildiğini, piyonun ileri yürüyüp çapraz aldığını defterime çizdim. Okul açıldığında satrancı bildiğimi sanıyordum; arkadaşlarıma kuralları anlatabiliyor, hangi hamlenin geçersiz olduğunu hemen söyleyebiliyordum. Sınıflar arası satranç karşılaşmalarının ilk gününde üst üste dört oyun kaybettim. Rakiplerim benden fazla kural bilmiyordu, yine de dört oyunun dördünde de mat olan bendim. Vezirimi neden erkenden ortaya sürmemem gerektiğini, tahtanın kenarında kalmış bir atın ne kadar az işe yaradığını, tek bir piyonu korumak uğruna bütün düzenimi bozmanın nelere yol açtığını o dört oyunda gördüm. Eve dönerken canım sıkkındı ama kitaba kızgın değildim; tahtadaki her taş, tam da orada yazdığı gibi yürümüştü. __Kitap bana taşların nereye gidebileceğini söylemişti, nereye gitmeleri gerektiğini ise ancak kaybettiğim oyunlar öğretti.__ Şimdi yeni bir açılış öğrenirken kitabı yine açıyorum, sonra kapatıp karşıma oturacak birini arıyorum.
**Bu metindeki altı çizili cümleye anlamca en yakın olan aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Kitabın kuralları eksik anlattığını, taşların nasıl yürüdüğünü ise kaybettiğim o oyunlarda öğrendiğimi anladım.", "Kitaptan yalnızca yapılabilecek hamleleri öğrenmiştim; hangisinin yerinde olduğunu ise yenilerek kavradım.", "Kitap taşların nereye gidebileceğini öğrettiği için nereye gitmeleri gerektiğini oyunlarda çabucak kavradım.", "Kitaptan öğrendiğim hamleleri, oyun kaybettikçe çok daha iyi kavradığımı ve artık unutmadığımı fark ettim."],
  dogru: 1,
  hatalar: ["Kısmen doğru: Oyunların, kitabın veremediği bir şeyi öğrettiği doğrudur. Ancak cümleye göre taşların nasıl yürüdüğünü, yani kuralları kitap söylemiştir; oyunların öğrettiği şey kural değil, hangi hamlenin yerinde olduğudur.", null, "Metnin ima etmediği yorum: Cümle iki ayrı bilgiyi yan yana koyar, birini ötekinin nedeni yapmaz. 'Ancak kaybettiğim oyunlar öğretti' sözü de çabuk gelen değil, yenilgiyle kazanılan bir öğrenmeyi anlatır.", "Kısmen doğru: Hamlelerin kitaptan öğrenildiği doğrudur. Ancak cümleye göre oyunlar aynı bilgiyi pekiştirmiyor; kitabın vermediği başka bir bilgiyi, taşın nereye gitmesi gerektiğini öğretiyor."],
  aciklama: `"Anlamca en yakın" sorusunda cümleyi yargılarına ayırırsın; doğru şık bu yargıların hepsini taşır, cümlede olmayan yeni bir yargı da eklemez.
Adım 1: Altı çizili cümlede iki yargı var. Birincisi: Kitap, taşların nereye gidebileceğini, yani hangi hamlelerin yapılabildiğini bildirdi. İkincisi: Taşların nereye gitmesi gerektiğini, yani hangi hamlenin yerinde olduğunu "ancak" kaybedilen oyunlar öğretti; kitap bunu öğretmedi.
Adım 2: B'ye bak. "Yalnızca yapılabilecek hamleleri öğrenmiştim" birinci yargıyı ve kitabın sınırını, "hangisinin yerinde olduğunu yenilerek kavradım" ikinci yargıyı karşılıyor. Eklenen ya da eksilen bir yargı yok.
Adım 3: D, B'ye çok benziyor; ikisi de hamlelerin kitaptan öğrenildiğini söylüyor. Fark ikinci yarıda: D'ye göre oyunlar aynı bilgiyi, yani hamleleri daha iyi kavratmış. Cümleye göre ise oyunlar başka türden bir bilgi vermiş: "gidebilir" ile "gitmeli" aynı şey değildir.
Adım 4: A, iki bilginin kaynağını karıştırıyor: Taşların nasıl yürüdüğünü kitap söylemişti, oyunlar değil. C ise cümlede bulunmayan bir neden-sonuç ilişkisi kuruyor ve öğrenmenin "çabucak" olduğunu söylüyor; "ancak kaybettiğim oyunlar" sözü bunun tersini düşündürür.
Sık yapılan hata: İlk yarısı doğru olan şıkkı sonuna kadar okumadan işaretlemek. Birbirine benzeyen iki şıkta farkı yaratan çoğu zaman ikinci yarıdır.
Cevap B.`
},
{
  id: "tur-ca-317",
  kazanim: "T.8.3.21",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gezi dergisinin yazarı, gezdiği kentte otuz yıl aradan sonra yeniden hizmete giren tramvay hattını tanıtan yazısında şu cümlelere yer vermiştir:
(I) Hat, kentin en uzun caddesi boyunca iskele meydanından eski hal binasına kadar 2,4 kilometre uzanıyor ve yedi durakta yolcu alıyor.
(II) Ahşap kaplamalı iki vagon, yeni döşenen parke taşlarının üzerinde caddeye çok yakışan bir ağırbaşlılıkla ilerliyor.
(III) Seferler sabah yedide başlıyor ve akşam dokuza kadar on beş dakikada bir yineleniyor; hafta sonları son sefer bir saat geç kalkıyor.
(IV) Cadde esnafıyla geçen hafta yapılan ankete katılan her on kişiden yedisi, tramvayın çarşıyı güzelleştirdiğini, üçü ise gürültüyü artırdığını söyledi.
(V) Yolculuk baştan sona on iki dakika sürüyor; ne yazık ki bu süre, pencereden kıyıyı doya doya seyretmeye yetmiyor.
(VI) Belediyenin açıkladığı sayılara göre hat, ilk haftasında yirmi bine yakın yolcu taşıdı; bu sayı, aynı güzergâhtaki otobüsün bir aylık yolcusuna denk geliyor.
**Bu cümlelerin hangilerinde yazar, doğrulanabilir bir bilginin yanında kendi kişisel değerlendirmesine de yer vermiştir?**`,
  gorsel: null,
  secenekler: ["I ve IV", "II ve VI", "IV ve V", "II ve V"],
  dogru: 3,
  hatalar: ["'En' sözcüğünü ve aktarılan görüşü öznellik sayma: 'Kentin en uzun caddesi' ölçülerek doğrulanır. IV'te 'güzelleştirdiğini' diyenler esnaftır; yazar anketin sonucunu bildirir. İki cümlede de yazarın kendi değerlendirmesi yoktur.", "Karşılaştırmayı değerlendirme sanma: II uygundur. VI'da ise yolcu sayısının otobüsünkiyle kıyaslanması belediyenin sayılarına dayanır; sayılabilen iki şeyi kıyaslamak kişisel değerlendirme değildir.", "Aktarılan görüşü yazarın görüşü sanma: V uygundur ama IV'teki beğeni esnafa aittir; yazar o cümlede kendi değerlendirmesini katmaz.", null],
  aciklama: `Nesnel yargı ölçümle, sayımla ya da belgeyle doğrulanabilir; öznel yargı ise kişiden kişiye değişen bir beğeni ya da duygudur. Soru, ikisini aynı cümlede birlikte taşıyanları istiyor; üstelik değerlendirmenin yazara ait olması gerekiyor.
Adım 1: I: Caddenin uzunluğu ve hattın 2,4 kilometre olduğu ölçülebilir. "En uzun" bir beğeni değil, ölçülebilen bir üstünlüktür. Değerlendirme yok.
Adım 2: II: Vagonların ahşap kaplamalı ve iki tane olduğu doğrulanabilir; "caddeye çok yakışan bir ağırbaşlılıkla" ise yazarın beğenisidir. İkisi birlikte var.
Adım 3: III ve VI: Saatler, sefer aralığı ve yolcu sayısı denetlenebilir. VI'daki kıyaslama da iki sayıya dayanır; "denk geliyor" sözü bir beğeni değil, hesaplanabilen bir eşitliktir. Değerlendirme yok.
Adım 4: IV: "Güzelleştirdiğini" sözü bir beğenidir ama bunu söyleyen esnaftır. Yazar "on kişiden yedisi böyle söyledi" demekle yetiniyor; bu, anket kayıtlarından doğrulanabilir. Yazarın kendi değerlendirmesi yok.
Adım 5: V: Yolculuğun on iki dakika sürdüğü ölçülebilir; "ne yazık ki … yetmiyor" ise yazarın kişisel yakınmasıdır. İkisi birlikte var.
Sık yapılan hata: İçinde beğeni sözcüğü ya da karşılaştırma geçen her cümleyi öznel saymak. Başkasının görüşünü sayıyla aktaran cümle, aktaran kişi açısından nesneldir.
Cevap D.`
},
{
  id: "tur-ca-318",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir lokantanın mutfağında akşam servisi bitince Nevin Usta, yanında dört aydır çalışan çırağı Tuna'ya döndü. Lokanta o akşam her zamankinden kalabalıktı; son masa kalkınca mutfakta ikisinden başka kimse kalmamıştı. Usta önlüğünü çıkarırken şunları söyledi:
"Bugün mercimek çorbasını ilk kez baştan sona sana bıraktım, sonuçtan da memnunum. Garsonlar bu akşam çorbadan iki kez ek istedi. Soğanı yine biraz iri doğramışsın ama çorbayı süzgeçten geçirdiğin için bu kez kimse fark etmedi. Tuzunu ben bile daha iyi ayarlayamazdım. Ekmekleri kızartmayı ise yine bana bıraktın; yarın onu da senden bekliyorum. Kepçeyi tencerenin dibine kadar daldırmayı da unutmamışsın; geçen ay bunu sana üç kez hatırlatmam gerekmişti. Yalnız, pencere kenarındaki masada oturan müşteri tabağını yarım bırakmış; sen de nedenini sormadan tabağı kaldırmışsın. Ben senin yaşındayken yarım dönen her tabağın nedenini öğrenmeden mutfağa girmezdim. Yarın ana yemeğin sosunu da sana vereceğim; bugünkü dikkatini gösterirsen onun da üstesinden gelirsin. Bir de sebze siparişini artık son saate bırakma, hal kapanmadan orada ol."
**Nevin Usta'nın bu sözlerinden aşağıdakilerin hangisi __çıkarılamaz__?**`,
  gorsel: null,
  secenekler: ["Tuna, mercimek çorbasının yapımında ilk kez bugün çalışmıştır.", "Tuna, soğanı önceki günlerde de olması gerekenden iri doğramıştır.", "Nevin Usta, tuz ayarlamada kendi becerisine güvenmektedir.", "Tuna, sebze siparişini daha önce son saate bırakmıştır."],
  dogru: 0,
  hatalar: [null, "'Yine' sözcüğünü atlama: 'Yine biraz iri doğramışsın' sözü bu durumun daha önce de yaşandığını sezdirir; 'bu kez kimse fark etmedi' sözü de bunu destekler. Yargı çıkarılabilir.", "'Bile' sözcüğünü atlama: 'Ben bile daha iyi ayarlayamazdım' diyen kişi, bu işi en iyi yapması beklenen kişinin kendisi olduğunu kabul eder. Yargı çıkarılabilir.", "'Artık' sözcüğünü atlama: 'Artık son saate bırakma' uyarısı, siparişin daha önce son saate bırakıldığını gösterir. Yargı çıkarılabilir."],
  aciklama: `Bazı sözcükler, cümlenin açıkça söylemediği bir bilgiyi de sezdirir: "yine, bile, artık, de, ilk kez" bunların başında gelir. "Çıkarılamaz" sorusunda her şıkkın metinde böyle bir dayanağı olup olmadığına bakarsın.
Adım 1: B: "Soğanı yine biraz iri doğramışsın." → "yine", aynı şeyin daha önce de olduğunu bildirir. Çıkarılabilir.
Adım 2: C: "Tuzunu ben bile daha iyi ayarlayamazdım." → "bile", konuşanı o işte en üst ölçü olarak gösterir; usta kendi becerisine güveniyor. Çıkarılabilir.
Adım 3: D: "Siparişi artık son saate bırakma." → "artık", bugüne kadar süren bir durumun bitmesini ister; demek ki sipariş daha önce son saate bırakılmış. Çıkarılabilir.
Adım 4: A: Usta "ilk kez baştan sona sana bıraktım" diyor. İlk kez olan şey, çorbanın bütünüyle Tuna'ya bırakılmasıdır. Tuna'nın önceki günlerde çorbanın bir aşamasında çalışıp çalışmadığını bu sözden bilemeyiz; kepçeyle ilgili geçen ayki uyarılar da onun tencerenin başında daha önce bulunduğunu düşündürür. Yargının dayanağı yok.
Sık yapılan hata: "İlk kez" sözünü görüp yanındaki "baştan sona"yı atlamak. Örtük anlam, sözcüğün neyi nitelediğine göre değişir.
Cevap A.`
},
{
  id: "tur-ca-319",
  kazanim: "T.8.3.10",
  kademe: 3,
  zorluk: 4,
  soru: `Dolunay gecelerinde Ay'ın yüzeyindeki koyu lekeler çıplak gözle bile seçilir; dikkatli bakan biri bu lekelerin yerinin aydan aya değişmediğini fark eder. Çünkü gökyüzüne ne zaman baksak Ay'ın hep aynı yüzünü görürüz. Bu yüzden pek çok kişi Ay'ın kendi ekseni etrafında dönmediğini sanır. (I) - - - - Ay hiç dönmeseydi, Dünya'nın çevresindeki bir turu boyunca bize bütün yanlarını sırayla gösterirdi. Ay da tıpkı Dünya gibi kendi ekseni etrafında döner; ancak bu dönüşünü, Dünya'nın çevresindeki bir turunu bitirdiği sürede, yaklaşık yirmi yedi günde tamamlar. İki hareket aynı sürede bittiği için Ay, yörüngesinde ne kadar yol alırsa kendi ekseninde de o kadar döner; (II) - - - - Dünya'ya dönük yanı değişmez. Yeryüzünden görülemeyen öteki yana "karanlık yüz" denmesi ise yanıltıcıdır. O yüz de Güneş'ten ışık alır; hatta yeni ay evresinde, bize dönük yüz karanlıktayken öteki yüz baştan başa aydınlıktır. Buradaki "karanlık" sözü ışıksızlığı değil, bilinmezliği anlatır; (III) - - - - o yüz ışıktan değil, yalnızca bizim bakışımızdan uzaktır.
**Bu metinde numaralanmış yerlere düşüncenin akışına göre sırasıyla aşağıdakilerden hangileri getirilmelidir?**`,
  gorsel: null,
  secenekler: ["Oysaki / böylece / son olarak", "Başka bir deyişle / böylece / başka bir deyişle", "Oysaki / böylece / başka bir deyişle", "Başka bir deyişle / özellikle / son olarak"],
  dogru: 2,
  hatalar: ["Son cümleyi sıralamanın son basamağı sanma: (III)'ten sonraki cümle yeni bir bilgi eklemiyor, bir önceki cümleyi başka sözlerle yineliyor. 'Son olarak' ise sıralanan işlerin ya da düşüncelerin sonuncusunu bildirir. İlk iki boşluk doğrudur.", "Karşıt gerçeği yeniden söyleme sanma: (I)'den sonraki cümle 'Ay dönmüyor' sanısını yinelemiyor, çürütüyor: Ay dönmeseydi bütün yanlarını görürdük. Sanı ile gerçek arasına 'oysaki' girer. Öteki iki boşluk doğrudur.", null, "Üç boşlukta da ilişkiyi karıştırma: (I)'de sanı çürütülüyor, yeniden söylenmiyor. (II)'de dönük yanın değişmemesi bir sonuçtur, öne çıkarılan bir parça değildir. (III)'te de sıralama yoktur."],
  aciklama: `Geçiş ifadesi, iki düşünce arasındaki ilişkiyi adlandırır: "oysaki" karşıtlık, "böylece" sonuç, "başka bir deyişle" aynı düşünceyi yeniden söyleme, "özellikle" bir bütünün içinden bir parçayı öne çıkarma, "son olarak" sıralananların sonuncusunu bildirir. Boşluğa karar vermeden önce iki yanındaki cümlelerin ne söylediğini kendi sözlerinle özetle.
Adım 1: (I) öncesi: İnsanlar Ay'ın dönmediğini sanır. (I) sonrası: Ay dönmeseydi bize bütün yanlarını gösterirdi; yani hep aynı yüzü görmemiz, sanılanın tersine Ay'ın döndüğünü gösterir. İkinci cümle sanıyı yinelemiyor, çürütüyor → "Oysaki". İki cümlede de "dönme" sözü geçtiği için "başka bir deyişle" çekici görünür ama düşünce aynı değil, karşıttır. B ve D elenir.
Adım 2: (II) öncesi: Ay, yol aldığı kadar döner. (II) sonrası: Dünya'ya dönük yanı değişmez. İkincisi birincinin doğal sonucu → "böylece". "Özellikle" burada öne çıkaracak bir parça bulamaz.
Adım 3: (III) öncesi: "Karanlık" sözü ışıksızlığı değil, bilinmezliği anlatır. (III) sonrası: O yüz ışıktan değil, bakışımızdan uzaktır. Aynı düşünce başka sözlerle yineleniyor → "başka bir deyişle". Cümle metnin sonunda diye "son olarak" gelmez; metinde sıralanan basamaklar yok, bu cümle de yeni bir basamak eklemiyor. A elenir.
Sağlama: Üç ifadeyi yerine koyup metni baştan oku; karşıtlık, sonuç ve yeniden söyleme sırasıyla kopmadan akıyor.
Sık yapılan hata: İfadeyi cümlenin yerine ya da içindeki sözcüklere bakarak seçmek. Son cümle her zaman "son olarak" istemez; aynı sözcüğün yinelenmesi de düşüncenin yinelendiğini göstermez.
Cevap C.`
},
{
  id: "tur-ca-320",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Cam bir eşyaya biçim vermek dakikalar, onu soğutmak ise saatler alır. Kum, soda ve kireç taşı karışımı bin dört yüz dereceyi aşan fırınlarda eriyip bal kıvamına gelir. Camcı, uzun bir demir borunun ucuna bir parça eriyik alır ve boruya üfleyerek birkaç dakika içinde bir bardağı ya da vazoyu ortaya çıkarır; eşyanın ağzı ve tabanı da cam henüz yumuşakken düzeltilir. İşin incelik isteyen bölümü bundan sonra başlar. Açık havada bırakılan sıcak camın dış yüzeyi çabucak soğuyup büzülür, içi ise hâlâ sıcak ve genişlemiş durumdadır; bu çekişme camı içten gerer. __Hızlı soğuyan cam kendiliğinden çatlayabildiğinden camcılar, eşya ağır ağır soğusun diye onu saatlerce tavlama fırınında bekletir.__ Yaklaşık beş yüz dereceye ayarlanan bu fırının sıcaklığı azar azar düşürülür; kalın parçalarda bu iş bir günden uzun sürebilir. Fırından çıkan eşya ancak bundan sonra rafa konur. Tavlanmamış bir bardak ilk bakışta sağlam görünür, oysa günler sonra hafif bir dokunuşla dağılabilir.
**Altı çizili cümlede bulunan anlam ilişkilerinin ikisi de aşağıdaki cümlelerin hangisinde vardır?**`,
  gorsel: null,
  secenekler: ["Yayla yolu kışın sık sık kapandığı için köylüler, baharı erzaksız beklememek üzere kilerini güzden doldurur.", "Sis bastırdığından seferler durduruldu; yolcular da gemi kalkmıyor diye geceyi iskeledeki bekleme salonunda geçirdi.", "Fideler dondan zarar görmesin diye bahçıvan, hava soğursa seranın kapaklarını akşamdan sıkıca kapatır.", "Kar erken yağdığından dağ köylerindeki okullar, bu yıl ovadakilerden iki hafta önce yarıyıl tatiline girdi."],
  dogru: 0,
  hatalar: [null, "'Diye' sözcüğünü hep amaç sanma: 'Gemi kalkmıyor diye' gerçekleşmiş bir durumu, yani nedeni bildirir. Cümlede iki neden-sonuç var, amaç-sonuç yok.", "Yarım doğru: 'Zarar görmesin diye' amaç bildirir ama cümlenin öbür ilişkisi koşuldur ('soğursa'); neden-sonuç yok.", "Yarım doğru: 'Yağdığından' neden bildirir ama cümlenin öbür ilişkisi karşılaştırmadır ('ovadakilerden iki hafta önce'); amaç-sonuç yok."],
  aciklama: `Neden-sonuçta bir iş, olmuş ya da var olan bir durum yüzünden yapılır. Amaç-sonuçta ise iş, henüz gerçekleşmemiş ve istenen bir hedefe ulaşmak için yapılır. Bu ilişkileri eklere değil, anlama bakarak bulursun.
Adım 1: Altı çizili cümle: "Hızlı soğuyan cam çatlayabildiğinden" → var olan bir durum; fırında bekletmenin nedeni. "Eşya ağır ağır soğusun diye" → istenen hedef; bekletmenin amacı. Aradığın çift: neden-sonuç + amaç-sonuç.
Adım 2: A: "Yol kapandığı için" → var olan durum, neden. "Baharı erzaksız beklememek üzere" → hedef, amaç. İki ilişki de var.
Adım 3: B: "Sis bastırdığından" → neden. "Gemi kalkmıyor diye" → gemi gerçekten kalkmıyor; bu da neden. Amaç yok.
Adım 4: C: "Zarar görmesin diye" → amaç. "Hava soğursa" → koşul. Neden yok.
Adım 5: D: "Kar erken yağdığından" → neden. "Ovadakilerden iki hafta önce" → karşılaştırma. Amaç yok.
Sık yapılan hata: "Diye" ya da "-dığından" gördüğün şıkkı, altı çizili cümleye benziyor diye seçmek. "Soğusun diye" bir isteği, "kalkmıyor diye" ise olmuş bir durumu bildirir; aynı sözcük iki ayrı ilişki kurabilir.
Cevap A.`
},
{
  id: "tur-ca-321",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Geçen kasım, sınıf arkadaşlarımla bir köy kooperatifinin zeytin hasadına gönüllü olarak katıldım. On iki kişiydik; çoğumuz o güne kadar bir zeytin ağacına elini bile sürmemişti. Ağaçlar köyün üst yamacındaydı; şafak sökmeden yola çıktık, gün batarken de son kasaları yağhaneye gidecek kamyona yükledik. Akşam eve dönünce, yorgunluğuma aldırmadan, o günü unutmamak için günlüğüme şu cümleleri yazdım:
(I) Kooperatif, zeytin dalında fazla beklerse yağın asidinin yükseleceğini söyleyerek hasadı bu yıl iki hafta öne almıştı.
(II) Taneler toprağa düşüp ezilmesin diye ağaçların altına sabahtan, kenarlarını taşla tutturduğumuz geniş örtüler serdik.
(III) Öğle yemeğinde ekmeğimi yağa banarken düşündüm: Sofradaki yağı beğenmeyip tabağımı ittiğim günlerde bir şişe yağın ardındaki bu emeği bilseydim keşke.
(IV) Akşama doğru kollarım öyle yoruldu ki son kasayı bir arkadaşımla iki ucundan tutarak ancak taşıyabildik.
(V) Gün batarken saydığımız dolu kasalar, kooperatifin defterine göre geçen yılki gönüllülerin iki günde doldurduğundan tam dört fazlaydı.
**Bu metindeki numaralanmış cümlelerle ilgili aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: ["I. cümlede bir karar, koşula bağlı bir öngörüyle gerekçelendirilmiştir.", "II. cümlede bir önlem, olması istenmeyen bir durumla gerekçelendirilmiştir.", "III. cümlede kişinin kendi davranışından duyduğu pişmanlık dile getirilmiştir.", "V. cümlede iki yılın hasadı, eşit süreler üzerinden karşılaştırılmıştır."],
  dogru: 3,
  hatalar: ["Koşulu gözden kaçırma: 'Fazla beklerse … yükseleceğini' koşula bağlı bir öngörüdür; kooperatif, hasadı öne alma kararını bu öngörüyle açıklamıştır. Yargı söylenebilir.", "Amacı tanıyamama: Tanelerin ezilmesi olmuş bir şey değil, olması istenmeyen bir durumdur; örtü serme önlemi bununla gerekçelendirilmiştir. Yargı söylenebilir.", "Pişmanlığı sitemle karıştırma: 'Bilseydim keşke' diyen kişi, yağı beğenmeyip tabağını iten kişinin kendisidir. İnsan kendi davranışı için 'keşke' derse pişmanlık duyar. Yargı söylenebilir.", null],
  aciklama: `Bu soruda şıklar ilişkilerin adını vermiyor, onları tarif ediyor. Her tarifi önce bildiğin ada çevir, sonra cümleyle sözcük sözcük karşılaştır.
Adım 1: A: "Koşula bağlı öngörü" = koşul-sonuç. I. cümlede "fazla beklerse asit yükselir" öngörüsü var ve kooperatif hasadı bunu söyleyerek öne almış. Tarif doğru.
Adım 2: B: "Olması istenmeyen durumla gerekçelendirilen önlem" = amaç-sonuç. II. cümlede örtüler, taneler ezilmesin diye serilmiş; ezilme henüz olmamış, önlenmek istenen bir durum. Tarif doğru.
Adım 3: C: III. cümlede "keşke … bilseydim" diyen kişi, tabağını iten kişinin ta kendisi. Kendi davranışı için duyulan üzüntü pişmanlıktır; sitem ise başkasının davranışına duyulan kırgınlıktır. Tarif doğru.
Adım 4: D: V. cümlede bir karşılaştırma gerçekten var: bu yılın kasaları ile geçen yılın kasaları. Ancak süreler eşit değil. Bu yıl kasalar bir günde ("gün batarken saydığımız"), geçen yıl ise "iki günde" doldurulmuş. "Eşit süreler üzerinden" sözü tarifi yanlış yapıyor.
Sık yapılan hata: Tarifin ilk yarısı tutunca gerisini okumamak. D'de "karşılaştırılmıştır" sözü doğru olduğu için şık doğru sanılır; oysa tarifin her sözcüğü cümleyle örtüşmelidir.
Cevap D.`
},
{
  id: "tur-ca-322",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Kasabanın tek saat tamircisi Rauf Usta, dükkânına telaşla giren genci başını kaldırmadan dinledi. Duvarlardaki onlarca saat, her biri kendi sesiyle tıkırdıyordu. Usta otuz yıldır işini aynı sırayla yapardı: önce dinler, sonra açar, en sonunda konuşurdu. Genç, dedesinden kalan cep saatini tezgâha bıraktı; ertesi sabah erkenden yola çıkacağını, saati akşama kadar almak istediğini söyledi. Usta arka kapağı açtı, büyütecini gözüne yerleştirdi. Yayın sağlam, çarklardan birinin dişlerinin ise aşınmış olduğunu gördü. Parçayı yenisiyle değiştirmek bir saatlik işti; ama yeni çarkın ötekilerle uyumlu çalışıp çalışmadığını anlamak için saati en az iki gün kurulu bekletmesi, ne kadar geri kaldığına bakması gerekiyordu. Bunu anlattığında genç omuz silkti: "Çalışsın yeter, gerisini yolda ben ayarlarım." Usta saati avucunda tarttı, sonra kapağını kapatmadan gence uzatıp şöyle dedi: __"Saati acele ettirirsen o da seni hep geç bırakır."__ Genç bir süre elindeki saate baktı; ardından onu yeniden tezgâha koydu ve dönüşte uğrayacağını söyledi.
**Bu metinde altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Aceleyle onarılan bir saat kısa bir süre çalışır, ardından büsbütün durur.", "Sabırsız müşteriye uyan usta, zamanla işine gösterdiği özeni yitirir.", "Sınanmadan alınan saat, kazandırdığı süreden fazlasını sonra kaybettirir.", "Yola çıkacak kişi, saatini son güne bırakmadan çok önceden onartmalıdır."],
  dogru: 2,
  hatalar: ["Kısmen doğru: Aceleye gelen onarımın sorun çıkaracağı doğrudur ama söz saatin duracağını değil, 'geç bırakacağını', yani geri kalıp sahibine vakit kaybettireceğini söyler.", "Odağı kaydırma: Söz ustanın özeniyle ilgili değildir; aceleyle alınan saatin sahibine ne yapacağını anlatır. Usta aceleye zaten razı olmamıştır.", null, "Metinde var ama sözün anlamı değil: Gencin saati son güne bıraktığı doğrudur; ancak usta 'erken getirmeliydin' demiyor, sınanmadan alınan saatin sonucunu anlatıyor."],
  aciklama: `Altı çizili bir sözün anlamını bulurken sözü tek başına okumazsın; ondan önce anlatılanlarla birlikte düşünürsün. Burada söz bir koşul-sonuç cümlesi: "acele ettirirsen" koşul, "seni hep geç bırakır" sonuç.
Adım 1: "Acele ettirmek" neyi karşılıyor? Genç, saatin iki gün sınanmasını beklemeden akşama almak istiyor. Demek ki acele, sınama süresini atlamaktır.
Adım 2: "Geç bırakmak" neyi karşılıyor? Usta, sınamada saatin "ne kadar geri kaldığına" bakacaktı. Sınanmayan saat geri kalabilir; geri kalan saat de sahibini gideceği yere geç ulaştırır.
Adım 3: "Hep" sözcüğüne dikkat et: Kazanılan süre bir kezliktir (iki gün), kayıp ise sürekli. Usta, bugün kazanılan zamanın ileride fazlasıyla geri ödeneceğini söylüyor. Bunu veren şık C.
Adım 4: A saatin duracağını söylüyor; söz durmaktan değil, geç bırakmaktan söz ediyor. B ustanın özenine, D gencin saati ne zaman getirmesi gerektiğine kayıyor; ikisi de sözün koşul-sonuç yapısını karşılamıyor.
Sık yapılan hata: Sözdeki "acele" sözcüğünü görüp içinde acele geçen ilk şıkkı seçmek. Sözün iki yarısını da (koşul ve sonuç) karşılayan şıkkı aramalısın.
Cevap C.`
},
{
  id: "tur-ca-323",
  kazanim: "T.8.3.25",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ilçenin atletizm kulübü, her nisan ayında düzenlediği bahar koşusunun duyurusunu ilçedeki bütün okullara gönderdi. Geçen yıl kayıt masasında uzun kuyruklar oluşmuş, bazı koşucular da öğle sıcağında zorlanmıştı. Kulüp bu yıl hem parkuru hem de bazı kuralları değiştirdi. Duyuruda yer alan cümlelerden bazıları şöyledir:
(I) On dört yaşından küçük koşucular, yanlarında bir yetişkin bulunmadıkça yetişkin parkurundan üç kilometre kısa olan gençlik parkuruna da alınmayacaktır.
(II) Son bölümü dik bir yokuş olsa da bu yılki parkur, baştan sona asfalt olduğu için geçen yılki toprak parkurdan az yorucudur.
(III) Göğüs numaranızı start saatine kadar kayıt masasından almazsanız koşuya katılamazsınız, ancak seyirci olarak alana girebilirsiniz.
(IV) Kaydınızı ilk hafta içinde kulübün internet sayfasından yaptırırsanız katılım ücretini, son haftaya kalanların ödeyeceğinin yarısı kadar ödersiniz.
(V) Koşucular öğle sıcağına kalmasın diye start bu yıl, geçen yılkinden bir saat erken, sabah dokuzda çarşı meydanından verilecektir.
**Numaralanmış cümlelerin hangilerinde bir yargı koşula bağlanmış, ayrıca bir karşılaştırma da yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve IV", "I ve III", "II ve V", "III ve IV"],
  dogru: 0,
  hatalar: [null, "'Kadar' sözcüğünü karşılaştırma sanma: I uygundur. III'te 'almazsanız' koşul bildirir ama 'start saatine kadar' bir zaman sınırıdır, iki şeyi kıyaslamaz; cümlede karşılaştırma yoktur.", "'-sa da' ve 'diye' sözlerini koşul sanma: İkisinde de karşılaştırma vardır. Ancak II'deki 'olsa da' 'olmasına rağmen' demektir, V'teki 'kalmasın diye' ise amaç bildirir; ikisinde de yargı bir koşula bağlanmamıştır.", "Yarım doğru: IV uygundur. III'te koşul vardır ama karşılaştırma yoktur; 'kadar' sözcüğü IV'te iki ücreti kıyaslar, III'te yalnızca süreyi sınırlar."],
  aciklama: `Koşul-sonuçta bir yargının gerçekleşmesi başka bir şeyin olmasına bağlıdır ("-se, -medikçe, -diği sürece"). Karşılaştırmada iki varlık ya da durum bir özellik bakımından kıyaslanır ("-den kısa, -e göre, yarısı kadar"). Bu ilişkiler her zaman aynı ekle kurulmaz; her cümleye iki soruyu ayrı ayrı sor.
Adım 1: I: "Yanlarında bir yetişkin bulunmadıkça … alınmayacaktır" → alınma, yetişkinin bulunmasına bağlı; koşul var. "Yetişkin parkurundan üç kilometre kısa olan" → iki parkur kıyaslanıyor. İkisi de var.
Adım 2: II: "Geçen yılki toprak parkurdan az yorucu" → karşılaştırma var. "Dik bir yokuş olsa da" sözü "yokuş olmasına rağmen" demektir; parkurun az yorucu olması yokuşa bağlanmıyor. "Asfalt olduğu için" de nedendir. Koşul yok.
Adım 3: III: "Almazsanız katılamazsınız" → koşul var. "Start saatine kadar" ise bir süre sınırıdır; iki şey kıyaslanmıyor. Karşılaştırma yok.
Adım 4: IV: "İlk hafta içinde yaptırırsanız" → koşul var. "Son haftaya kalanların ödeyeceğinin yarısı kadar" → iki ücret kıyaslanıyor. İkisi de var.
Adım 5: V: "Geçen yılkinden bir saat erken" → karşılaştırma var. "Kalmasın diye" → istenen hedef; bu amaç-sonuç. Koşul yok.
Sık yapılan hata: "-sa" ekini gördüğün her yerde koşul, "kadar" sözcüğünü gördüğün her yerde karşılaştırma aramak. "Olsa da" koşul değil karşıtlık bildirir; "saatine kadar" ile "yarısı kadar" da aynı görevi yapmaz.
Cevap A.`
},
{
  id: "tur-ca-324",
  kazanim: "T.8.3.21",
  kademe: 3,
  zorluk: 4,
  soru: `Sekizinci sınıf öğrencisi Aras, Türkçe dersinde okudukları bir gezi yazısından dört cümle seçti. Yazının yazarı, bir kasabanın yakınındaki eski bir hanı gezmiş ve gördüklerini anlatmıştı. Aras, seçtiği her cümlenin öznel mi nesnel mi olduğuna karar verdi, kararının gerekçesini de yanına yazdı. Tabloyu inceleyen öğretmeni, Aras'ın iki satırda yanlış yargıya vardığını, bir satırda ise yargısı doğru olduğu hâlde gerekçesinin yanlış olduğunu söyledi.
**Buna göre Aras'ın değerlendirmelerinden hangisinde hem yargı hem de gerekçe doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Satır</th><th>Yazıdan alınan cümle</th><th>Aras'ın değerlendirmesi</th></tr><tr><td>1</td><td>Kapının üstündeki kitabeye göre han, on üçüncü yüzyılda kervanların konaklaması için yaptırılmış.</td><td>Özneldir; çünkü \"-mış\" ekiyle biten cümleler kesinlik taşımaz, yazarın tahminini bildirir.</td></tr><tr><td>2</td><td>Avluya inen kırk iki basamaklı taş merdiven, insana hiç bitmeyecekmiş gibi geliyor.</td><td>Özneldir; çünkü basamaklar sayılabilse de merdivenin insana nasıl geldiği kişiden kişiye değişir.</td></tr><tr><td>3</td><td>Avludaki taş işçiliği, bugüne dek gezdiğim bütün hanlardakinden daha zarifti.</td><td>Nesneldir; çünkü yazar öteki hanları da gezmiş, yargısını kendi gözlemine dayandırmış.</td></tr><tr><td>4</td><td>Hanın kuzey duvarı, güney duvarından yaklaşık iki metre daha yüksek.</td><td>Nesneldir; çünkü içinde karşılaştırma bulunan cümleler nesnel bir yargı bildirir.</td></tr></table>",
  secenekler: ["1. satır", "2. satır", "3. satır", "4. satır"],
  dogru: 1,
  hatalar: ["Eke bakarak karar verme: Hanın hangi yüzyılda ve ne için yaptırıldığı kitabeden doğrulanabilir. '-mış' eki burada tahmin değil, başka bir kaynaktan öğrenilen bilgiyi bildirir; cümleyi öznel yapmaz. Yargı yanlıştır.", null, "Gözlemi nesnellikle karıştırma: 'Daha zarif' kişiden kişiye değişen bir beğenidir; yazarın yapıyı kendi gözüyle görmesi yargıyı nesnel yapmaz. Yargı yanlıştır.", "Doğru yargı, yanlış gerekçe: Cümle ölçülebildiği için nesneldir. Ancak karşılaştırma içeren her cümle nesnel olmaz; 3. satırdaki cümle de karşılaştırma içerir ve özneldir."],
  aciklama: `Nesnel yargı, kim söylerse söylesin ölçümle, sayımla ya da belgeyle doğrulanabilen yargıdır. Öznel yargı ise kişinin beğenisine, duygusuna dayanır. Ölçüt, cümlenin hangi ekle bittiği ya da içinde hangi yapının bulunduğu değil, yargının sınanabilir olup olmadığıdır.
Adım 1: 1. satır: Hanın yapım yüzyılı ve yapılış amacı kitabeden, belgelerden doğrulanabilir. "Yaptırılmış" sözündeki "-mış" eki, yazarın bu bilgiyi kendisi görmeyip kitabeden öğrendiğini gösterir; bir tahmin ya da beğeni bildirmez. Cümle nesneldir; Aras "öznel" demiş. Yargı yanlış.
Adım 2: 2. satır: Cümlede sayılabilen bir bilgi var (kırk iki basamak) ama cümlenin yargısı bu değil; yargı, merdivenin "hiç bitmeyecekmiş gibi gelmesi". Bu bir izlenimdir, başkasına kısa gelebilir. Cümle özneldir; gerekçe de tam olarak bu ayrımı yapıyor. Yargı ve gerekçe doğru.
Adım 3: 3. satır: "Daha zarif" bir beğenidir; başkası aynı avluyu görüp öyle bulmayabilir. Cümle özneldir; Aras "nesnel" demiş. Yargı yanlış.
Adım 4: 4. satır: Duvarların yüksekliği ölçülebilir; cümle nesneldir, yargı doğru. Fakat gerekçe yanlış bir genelleme: 3. satırdaki cümle de karşılaştırma içeriyor ve öznel. Demek ki karşılaştırma, cümleyi kendiliğinden nesnel yapmaz.
Sağlama: Öğretmen "iki satırda yargı yanlış, bir satırda gerekçe yanlış" demişti: 1 ve 3'te yargı, 4'te gerekçe yanlış çıktı; geriye 2 kaldı.
Sık yapılan hata: İçinde sayı geçen cümleyi hemen nesnel saymak ya da belli bir eki, belli bir yapıyı gördüğün her cümleye aynı etiketi yapıştırmak. Sayıya, eke ya da yapıya değil, cümlenin asıl yargısına bak.
Cevap B.`
},
{
  id: "tur-ca-325",
  kazanim: "T.8.3.10",
  kademe: 3,
  zorluk: 4,
  soru: `Kasabamızdaki tohum takas şenliği beş yıl önce on iki kişinin bir araya gelmesiyle başlamıştı; bu bahar meydana yüzden fazla tezgâh kuruldu, komşu ilçelerden gelenler bile oldu. İlk yıl tohumlar kese kâğıtlarına konup tek bir masanın üstüne dizilmişti. Şenliğin işleyişi ilk yıldan beri değişmedi. (I) __İlk olarak__ herkes getirdiği tohumu girişteki deftere yazdırıyor. Sonra tezgâhlar dolaşılıyor; yöreye özgü domates, fasulye ve biber tohumları elden ele geçiyor, (II) __özellikle__ yaşlı çiftçilerin yıllardır sakladığı, artık dükkânlarda bulunmayan çeşitler kısa sürede tükeniyor. Sarı kabuklu bir fasulye için öğleden önce sıra oluştuğunu gördüm. Şenlikte para geçmiyor; herkes getirdiği kadar tohum alıp evine dönüyor, ertesi yıl da o tohumdan aldığı ürünün bir avucunu geri getiriyor. Kimin ne getirdiği deftere yazılıyor ama kimse kimseden hesap sormuyor. (III) __Böylece__ unutulmaya yüz tutmuş çeşitler bir bahçeden ötekine geçerek yaşamayı sürdürüyor. (IV) __Kısaca__ bu şenlik, bir alışveriş gününden çok, kasabanın ortak belleğini koruma çabasıdır.
**Bu metinde numaralanmış ifadelerle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: ["III. ifade yerine \"son olarak\" getirilirse çeşitlerin yaşaması, bir sonuç değil, son aşama gibi sunulmuş olur.", "II. ifade yerine \"kısaca\" getirilirse eski çeşitlere gösterilen ilgi, öncekinden çok daha güçlü vurgulanmış olur.", "I. ifade yerine \"özellikle\" getirilirse deftere yazdırma işinin sıralamadaki yeri daha belirgin kılınmış olur.", "IV. ifade yerine \"özellikle\" getirilirse son cümle, anlatılanların tümünü toparlayan bir yargıya dönüşür."],
  dogru: 0,
  hatalar: [null, "İfadenin görevini ters çevirme: Eski çeşitleri öne çıkaran, yani vurguyu sağlayan 'özellikle'dir. 'Kısaca' özetler; yerine gelirse vurgu güçlenmez, kaybolur.", "Öne çıkarma ile sıralamayı karıştırma: Deftere yazdırmanın ilk iş olduğunu bildiren 'ilk olarak'tır. 'Özellikle' bir parçayı öne çıkarır ama sıra bildirmez; yerine gelirse işin sıralamadaki yeri belirginleşmez, silikleşir.", "İfadelerin görevini karıştırma: Son cümleyi toparlayıcı yapan zaten 'kısaca'dır. 'Özellikle' bir parçayı öne çıkarır; yerine gelirse cümle özet olma niteliğini yitirir."],
  aciklama: `Geçiş ifadesi, iki düşünceyi belli bir ilişkiyle bağlar; ifade değişirse ilişki de değişir. "İlk olarak" ve "son olarak" sıralananların başını ve sonunu, "özellikle" bir bütünün içinden öne çıkarılan parçayı, "böylece" sonucu, "kısaca" özeti bildirir.
Adım 1: A: III'ün öncesinde takasın kuralı anlatılıyor (alan, ertesi yıl geri getiriyor), sonrasında çeşitlerin yaşamayı sürdürdüğü söyleniyor. "Böylece" ile bu, kuralın sonucudur. Yerine "son olarak" koy: Metinde "ilk olarak" ve "sonra" ile başlayan bir sıralama olduğu için cümle, o sıralamanın son basamağı gibi okunur; sonuç anlamı kaybolur. Şıktaki yargı doğru.
Adım 2: B: II'de "özellikle", bütün tohumlar arasından eski çeşitleri öne çıkarıyor; vurgu ondan geliyor. "Kısaca" gelirse cümle bir özet gibi sunulur, vurgu güçlenmez. Yargı yanlış.
Adım 3: C: I'de deftere yazdırmanın ilk iş olduğunu "ilk olarak" bildiriyor. "Özellikle" gelirse cümle, işleyişin öne çıkarılan bir parçası gibi okunur; sıra bilgisi güçlenmez, zayıflar. Yargı yanlış.
Adım 4: D: IV'te son cümle "kısaca" sayesinde zaten toparlayıcıdır. "Özellikle" gelirse cümle bir parçayı öne çıkarıyormuş gibi okunur; toparlayıcı yargıya dönüşmez, o niteliğini yitirir. Yargı yanlış.
Sağlama: Dört ifadenin görevleri sırasıyla sıralamayı başlatma, öne çıkarma, sonuç ve özet. Yalnızca A, yeni gelen ifadenin ("son olarak" = sıralamanın sonu) görevini doğru tarif ediyor.
Sık yapılan hata: Şıkta adı geçen yeni ifadeyi cümleye koyup okumadan karar vermek. Her şıkta değişikliği gerçekten yap ve cümleyi yeniden oku.
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
