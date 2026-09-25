// Türkçe — Noktalama İşaretleri: Kademe 3 (LGS Ayarı) ve havuz (kademe 0)
// Kazanım: T.8.4.16 Yazdıklarını düzenler. (b: Metinde yer alan yazım ve noktalama kuralları ile sınırlı tutulur.)
// Kural kaynağı: TDK Yazım Kılavuzu, "Noktalama İşaretleri" ve "Büyük Harflerin Kullanıldığı Yerler" bölümleri.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["noktalama"] = window.LGS_BANK["noktalama"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "tur-nk-301",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun gezi kulübü başkanı, kulübün mesaj grubuna şu notu yazdı:
(I) Arkadaşlar, cuma günkü toplantımızı bir hafta sonraya erteledik. (II) Bu sürede afişlerin, davetiyelerin ve katılım listesinin hazırlanması gerekiyor. (III) Katılım listesini 14 Kasım'a kadar okul kütüphanesindeki kutuya bırakabilir misiniz. (IV) Afiş işini Zeynep ile Kerem üstlendi, davetiyeleri ise ben yazacağım.
**Bu mesajdaki numaralanmış cümlelerin hangisinde noktalama yanlışı yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Hitaptan sonraki virgülü yanlış sanma: 'Arkadaşlar,' bir seslenmedir ve seslenme sözünden sonra virgül konur.",
    "Sıralı ögelerdeki virgülü yanlış sanma: 'afişlerin, davetiyelerin ve …' sıralamasında virgül doğrudur; 've'den önce virgül konmaz, burada da konmamıştır.",
    null,
    "Sıralı cümleleri ayıran virgülü yanlış sanma: 'Afiş işini … üstlendi, davetiyeleri ise …' iki cümleyi virgülle ayırır; bu doğrudur."
  ],
  aciklama: `Soru işareti, soru eki ya da soru sözü taşıyan ve gerçekten bir şey soran cümlenin sonuna konur.
Adım 1: I. cümle: "Arkadaşlar" bir seslenmedir. Seslenme sözünden sonra virgül konur; cümle doğrudur.
Adım 2: II. cümle: "afişlerin, davetiyelerin ve katılım listesinin" sıralı ögelerdir. Aralarına virgül konmuş, "ve" bağlacından önce virgül konmamıştır; cümle doğrudur.
Adım 3: III. cümle: "bırakabilir misiniz" sözünde "mi" soru eki var ve başkan arkadaşlarından bir şey istiyor, onlara soruyor. Cümlenin sonuna nokta değil soru işareti konmalıdır: "… bırakabilir misiniz?"
Adım 4: IV. cümle: iki sıralı cümle virgülle ayrılmıştır; doğrudur.
Sık yapılan hata: Rica cümlelerini emir cümlesi sanıp nokta koymak. Sonunda "mi" soru eki olan rica da bir sorudur.
Cevap C.`
},
{
  id: "tur-nk-302",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Deniz, arkadaşının bir sinema teklifine şöyle cevap verdi:
"Hayır, bu akşam dışarı çıkmayacağız."
Öğretmen, bu cümledeki virgülün görevini sınıfa sordu ve aynı görevdeki virgülü bulmalarını istedi.
**Aşağıdaki cümlelerin hangisinde virgül, yukarıdaki cümledekiyle aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Tamam, afişleri okul panosuna ben asarım.",
    "Canım kardeşim, mektubunu dün akşam aldım.",
    "Bu, benim açtığım ilk resim sergisi olacak.",
    "Kuşlar güneye göç etti, bahçe sessizleşti."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Hitap virgülünü cevap virgülüyle karıştırma: 'Canım kardeşim' bir seslenmedir; virgül burada hitap sözünden sonra konmuştur.",
    "Zamirden sonraki virgülü cevap virgülüyle karıştırma: 'Bu,' bir zamirdir; virgül, 'bu' sözcüğünün sıfat sanılmasını önlemek için konmuştur.",
    "Sıralı cümle virgülünü cevap virgülüyle karıştırma: 'Kuşlar … göç etti' ve 'bahçe sessizleşti' iki ayrı cümledir; virgül onları ayırır."
  ],
  aciklama: `TDK'ye göre "evet, hayır, peki, tamam, olur, elbette" gibi kabul, ret ya da onay bildiren sözlerden sonra virgül konur.
Adım 1: Verilen cümlede "Hayır" bir ret sözüdür; virgül bu sözden sonra gelmiştir.
Adım 2: A seçeneğinde "Tamam" bir kabul sözüdür; virgül aynı görevdedir.
Adım 3: B'de "Canım kardeşim" bir seslenmedir (hitap). C'de "Bu" bir zamirdir; virgül olmasa "Bu benim…" sözü "bu sergi" gibi sıfat okunabilirdi. D'de virgül iki sıralı cümleyi ayırır.
Sık yapılan hata: Cümlenin başında duran her sözden sonraki virgülü aynı görev sanmak. Önce o sözün ne olduğunu sor: cevap mı, seslenme mi, zamir mi?
Cevap A.`
},
{
  id: "tur-nk-303",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Otobüs durağında yanımda bekleyen yaşlı adam önce saatine, sonra yolun sonuna baktı( ) otobüs hâlâ görünmüyordu. Kendi kendine söylendi: “Eskiden bu hattan her on dakikada bir otobüs geçerdi ama şimdi( )” Sözünü tamamlamadan elini salladı. Sonra bana dönüp şöyle bir öneride bulundu( ) Sahile yürüyerek inersek yarım saatte varabilirmişiz. Birlikte yürümeye karar verdik.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,) (…) (.)", "(;) (?) (:)", "(.) (…) (:)", "(;) (…) (:)"],
  dogru: 3,
  hatalar: [
    "'şöyle' sözünün ardından açıklama geldiğini kaçırma: Üçüncü boşluktan sonra önerinin ne olduğu açıklanıyor; nokta değil iki nokta gerekir. Birinci bölüm de içinde virgül taşıdığı için noktalı virgülle ayrılır.",
    "Yarım bırakılan sözü soru sanma: 'ama şimdi' sözünde bir şey sorulmuyor; adam sözünü tamamlamıyor, üç nokta gerekir.",
    "Büyük-küçük harf ipucunu kaçırma: Birinci boşluktan sonra 'otobüs' küçük harfle başlıyor; cümle bitmemiştir, araya nokta konamaz.",
    null
  ],
  aciklama: `Noktalı virgül, içinde virgül bulunan sıralı cümleleri ayırır; üç nokta yarım bırakılan sözün sonuna konur; iki nokta ardından açıklama geleceğini gösterir.
Adım 1: "önce saatine, sonra yolun sonuna baktı( ) otobüs hâlâ görünmüyordu." Birinci cümlenin içinde virgül var ve arkadan küçük harfle ikinci bir cümle geliyor. İçinde virgül bulunan sıralı cümleler noktalı virgülle (;) ayrılır.
Adım 2: “… ama şimdi( )” Adam sözünü tamamlamıyor; metin de bunu söylüyor: "Sözünü tamamlamadan…" Yarım kalan söze üç nokta (…) konur.
Adım 3: "şöyle bir öneride bulundu( ) Sahile yürüyerek…" "şöyle" sözü, önerinin hemen ardından açıklanacağını haber veriyor. Açıklamadan önce iki nokta (:) konur. Açıklama bir cümle olduğu için büyük harfle başlamış.
Sağlama: (;) (…) (:).
Sık yapılan hata: Büyük harfle başlayan her cümleden önce nokta olduğunu sanmak. İki noktadan sonra da cümle büyük harfle başlayabilir; ipucu "şöyle" sözündedir.
Cevap D.`
},
{
  id: "tur-nk-304",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ilçenin kitap şenliği afişinde şu metin yer alıyor:
KİTAP ŞENLİĞİ BAŞLIYOR
Yeşilvadi Belediyesinin (I) düzenlediği kitap şenliğine bu yıl Karadeniz'li (II) yazarlar da konuk olacak. Şenlik 12 Nisan'da (III) açılacak ve bir hafta sürecek. Etkinlik takvimini Yeşilvadi Gençlik Merkezinden (IV) öğrenebilirsiniz.
**Bu metinde numaralanmış sözcüklerin hangisinde kesme işaretiyle ilgili bir yanlışlık yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Kurum adına kesme gerekir sanma: 'Yeşilvadi Belediyesi' bir kurum adıdır; kurum adlarına gelen ekler kesmeyle ayrılmaz, 'Belediyesinin' doğrudur.",
    null,
    "Tarihe gelen eki bitişik yazmak gerekir sanma: '12 Nisan' belirli bir tarih bildirir; ekin kesmeyle ayrılması doğrudur.",
    "Kurum adına kesme gerekir sanma: 'Yeşilvadi Gençlik Merkezi' bir kurum adıdır; 'Merkezinden' biçiminde kesmesiz yazılır."
  ],
  aciklama: `Kesme işareti özel adlara gelen çekim eklerini ayırır; ancak kurum adlarına gelen ekler ve özel adlara gelen yapım ekleri kesmeyle ayrılmaz.
Adım 1: I: "Yeşilvadi Belediyesi" bir kurumun adıdır. TDK'ye göre kurum, kuruluş adlarına gelen ekler ayrılmaz: "Belediyesinin" doğrudur.
Adım 2: II: "Karadeniz'li" sözünde "-li" bir yapım ekidir; yeni bir sözcük türetir. Yapım ekleri kesmeyle ayrılmaz: doğrusu "Karadenizli".
Adım 3: III: "12 Nisan" belirli bir tarihtir. Belirli tarih bildiren ay adlarına gelen ekler kesmeyle ayrılır: "12 Nisan'da" doğrudur.
Adım 4: IV: "Yeşilvadi Gençlik Merkezi" de bir kurum adıdır: "Merkezinden" doğrudur.
Sık yapılan hata: Özel adın arkasına gelen her eki kesmeyle ayırmak. Önce ekin çekim eki mi yapım eki mi olduğuna, sonra adın kişi-yer adı mı kurum adı mı olduğuna bak.
Cevap B.`
},
{
  id: "tur-nk-305",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `İzci grubunun rehber öğretmeni, hafta sonu kampı için velilere şu notu gönderdi:
Kampa gelirken çocuklarınızın yanında şunlar olsun( ) uyku tulumu, yağmurluk, el feneri ve yedek çorap( ) çadırları, ocakları ve mutfak malzemelerini ise okul getirecek( )
**Bu notta yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(;) (:) (.)", "(:) (;) (.)", "(:) (,) (.)", "(,) (;) (!)"],
  dogru: 1,
  hatalar: [
    "İki nokta ile noktalı virgülün yerini karıştırma: Sıralanacak eşyalar gelmeden önce iki nokta, iki büyük bölümün arasına noktalı virgül konur.",
    null,
    "Noktalı virgül yerine virgül koyma: Birinci bölümde eşyalar zaten virgülle ayrılmış; iki bölüm arasına da virgül konursa hangi sözün hangi gruba ait olduğu karışır.",
    "Sıralamadan önce virgül koyma ve düz cümleyi ünlemle bitirme: Açıklama ya da sıralama öncesinde iki nokta kullanılır; bilgi veren cümle noktayla biter."
  ],
  aciklama: `Noktalı virgül, içinde virgüller bulunan sıralı bölümleri birbirinden ayırır; iki nokta ise ardından sıralama ya da açıklama geleceğini gösterir.
Adım 1: "şunlar olsun( )" sözünden sonra eşyalar sıralanıyor. Sıralama öncesine iki nokta (:) konur. Sıralanan sözler cümle değil, sözcük olduğu için küçük harfle başlar.
Adım 2: Birinci bölüm "uyku tulumu, yağmurluk, el feneri ve yedek çorap" içinde zaten virgüller var. İkinci bölüm "çadırları, ocakları ve …" da virgül taşıyor. İçinde virgül bulunan iki bölüm noktalı virgülle (;) ayrılır.
Adım 3: Not bilgi veren bir cümleyle bitiyor; sonuna nokta (.) konur.
Sağlama: (:) (;) (.) sırası.
Sık yapılan hata: İkinci boşluğa virgül koymak. O zaman "yedek çorap, çadırları…" sanki aynı listenin devamı gibi okunur.
Cevap B.`
},
{
  id: "tur-nk-306",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Selin, ödevi için ilçe kütüphanesini aradı. Görevliyle yaptığı kısa konuşmayı defterine şöyle yazdı:
(I) — Kütüphane akşam kaçta kapanıyor?
(II) — Hafta içi 19.00'da, cumartesi ise öğlen kapanıyor.
(III) — Peki, pazar günü açık mısınız?
(IV) — Hayır pazar günü bütün şubelerimiz kapalı.
**Bu konuşmada numaralanmış satırların hangisinde noktalama yanlışı yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "Soru sözü içeren cümlede soru işaretini yanlış sanma: 'kaçta' bir soru sözüdür ve gerçekten soru soruluyor; soru işareti doğrudur.",
    "Saat yazımını yanlış sanma: Saat ve dakika nokta ile ayrılır, rakama gelen ek kesmeyle ayrılır; '19.00'da' doğrudur.",
    "Onay sözünden sonraki virgülü gereksiz sanma: 'Peki' sözünden sonra virgül konur; satır doğrudur.",
    null
  ],
  aciklama: `"Evet, hayır, peki, tamam" gibi kabul ya da ret bildiren sözlerden sonra virgül konur. Satır başındaki uzun çizgi ise konuşmayı gösterir.
Adım 1: I. satır: "kaçta" soru sözüdür, cümle gerçekten soru soruyor; soru işareti doğrudur.
Adım 2: II. satır: TDK'ye göre saat ve dakika nokta ile ayrılır (19.00), rakamla yazılan sayıya gelen ek kesmeyle ayrılır (19.00'da). Satır doğrudur.
Adım 3: III. satır: "Peki" sözünden sonra virgül konmuştur; doğrudur.
Adım 4: IV. satır: "Hayır" bir ret sözüdür, arkasından virgül gelmeliydi: "— Hayır, pazar günü bütün şubelerimiz kapalı."
Sık yapılan hata: Kısa cevap sözlerini cümlenin bir parçası sanıp virgülü unutmak.
Cevap D.`
},
{
  id: "tur-nk-307",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Okuma kulübünün bu ayki toplantısından sonra kulüp defterine şu cümleler yazıldı:
(I) Kulübümüz bu ay “Rüzgârın Getirdiği Mektup”'u okudu.
(II) Kitabın yazarı 1987'de küçük bir sahil kasabasında doğmuş.
(III) Öğretmenimiz “Her okur kitaba kendi hikâyesini de getirir.” dedi.
(IV) Bazı arkadaşlarımız kitabın kahramanını “bencil” bulduklarını söyledi.
**Numaralanmış cümlelerin hangisinde noktalama yanlışı yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "Sayıya gelen eki bitişik yazmak gerekir sanma: Rakamla yazılan sayılara gelen ekler kesmeyle ayrılır; '1987'de' doğrudur.",
    "Alıntının noktasını tırnak dışına taşımak gerekir sanma: Tırnak içindeki cümlenin noktası tırnağın içinde kalır; cümle doğrudur.",
    "Vurgu için kullanılan tırnağı yanlış sanma: Özel olarak vurgulanan bir söz tırnak içine alınabilir; cümle doğrudur."
  ],
  aciklama: `Tırnak işareti alıntıları, eser adlarını ve vurgulanan sözleri gösterir. TDK'ye göre tırnak içindeki söze gelen ekler kesmeyle ayrılmaz.
Adım 1: I. cümle: Kitabın adı tırnak içine alınmış; buraya kadar doğru. Ama tırnaktan sonra gelen "-u" eki kesmeyle ayrılmış. Doğrusu: “Rüzgârın Getirdiği Mektup”u.
Adım 2: II. cümle: "1987'de" rakamla yazılmış sayıya gelen ektir; kesmeyle ayrılır. Doğru.
Adım 3: III. cümle: Öğretmenin sözü tırnak içinde, sonundaki nokta tırnağın içinde; ardından "dedi" gelmiş. Doğru.
Adım 4: IV. cümle: "bencil" sözü özellikle vurgulandığı için tırnak içine alınmış. Doğru.
Sık yapılan hata: Tırnağı da özel ad gibi düşünüp arkasına kesme koymak. Tırnak zaten sözün sınırını gösterir; ayrıca kesmeye gerek yoktur.
Cevap A.`
},
{
  id: "tur-nk-308",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gazete haberinde şu cümle geçiyor:
"İzmir-Ankara seferi, sisli hava yüzünden iki saat gecikmeyle yola çıktı."
**Aşağıdaki cümlelerin hangisinde kısa çizgi bu cümledeki görevle kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Sabaha karşı hava sıcaklığı -5 °C'ye kadar düştü.",
    "Öğretmen tahtaya gel- ve git- köklerini yazdı.",
    "Ablam 2019-2023 yıllarında bu okulda okudu.",
    "Kardeşim sözcüğü o-kul-da diye heceleyerek okudu."
  ],
  dogru: 2,
  hatalar: [
    "Eksi işaretini 'arasında' anlamıyla karıştırma: '-5' sıfırdan küçük bir değeri gösterir.",
    "Fiil kökünü gösteren çizgiyi 'arasında' anlamıyla karıştırma: 'gel-' ve 'git-' sözlerindeki çizgi bunların fiil kökü olduğunu gösterir.",
    null,
    "Hece çizgisini 'arasında' anlamıyla karıştırma: 'o-kul-da' yazımında çizgi heceleri birbirinden ayırır."
  ],
  aciklama: `Kısa çizginin birçok görevi vardır; bunlardan biri iki yer ya da iki tarih arasında "ile, arasında, ve" anlamı vermektir.
Adım 1: "İzmir-Ankara seferi" = İzmir ile Ankara arasındaki sefer. Çizgi "arasında" anlamındadır.
Adım 2: C'de "2019-2023 yıllarında" = 2019 ile 2023 arasındaki yıllarda. Aynı görev.
Adım 3: A'da çizgi sıfırın altındaki değeri gösterir (eksi beş). B'de fiil kökünü gösterir. D'de heceleri ayırır.
Sağlama: Çizginin yerine "ile … arası" koyabiliyorsan görev aynıdır: "2019 ile 2023 arası" olur, "o ile kul arası" olmaz.
Cevap C.`
},
{
  id: "tur-nk-309",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Türkçe öğretmeni tahtaya dört cümle yazdı ve öğrencilerden cümlelerin sonundaki işaretleri kontrol etmelerini istedi:
(I) Güneş battı mı kuşlar çınarın dallarına döner?
(II) Treni kaçırmamak için evden kaçta çıkmalıyız?
(III) Bu çiçeğin adını bilen biri var mı?
(IV) Kitabı sen mi aldın, yoksa kardeşin mi?
**Numaralanmış cümlelerin hangisinde soru işareti yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "Soru sözünü görmeme: 'kaçta' bir soru sözüdür ve cümle gerçekten bir şey soruyor; soru işareti doğrudur.",
    "Soru ekini yanlış değerlendirme: 'var mı' sözündeki 'mı' gerçek bir soru sorar; soru işareti doğrudur.",
    "Seçenek soran cümleyi soru saymama: 'sen mi …, yoksa kardeşin mi' iki olasılıktan birini sorar; sonuna soru işareti konur."
  ],
  aciklama: `TDK'ye göre "mı, mi" eki "-ınca, -ince" anlamında zaman bildirdiğinde cümle soru olmaz ve sonuna soru işareti konmaz.
Adım 1: I. cümle: "Güneş battı mı" = "Güneş batınca". Burada bir şey sorulmuyor, kuşların ne zaman döndüğü anlatılıyor. Cümlenin sonuna nokta konmalı: "Güneş battı mı kuşlar çınarın dallarına döner."
Adım 2: II. cümle: "kaçta" soru sözüdür, gerçek bir soru; soru işareti doğru.
Adım 3: III. cümle: "var mı" gerçek bir sorudur; doğru.
Adım 4: IV. cümle: iki seçenekten hangisinin doğru olduğu soruluyor; doğru.
Sağlama: "mı/mi" yerine "-ınca/-ince" koyabiliyorsan soru yoktur: "Güneş batınca kuşlar döner."
Cevap A.`
},
{
  id: "tur-nk-310",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, noktalı virgül çalışırken defterine şu cümleleri yazdı:
(I) Bahçede elma, armut, ayva; tarlada buğday, arpa, mısır yetiştiriyoruz.
(II) Rüzgâr dindi, deniz duruldu; kayıklar birer birer limana döndü.
(III) Sınıf başkanlığına Ece, Umut, Deniz; spor kulübü başkanlığına da Arda, Nil, Sena aday oldu.
(IV) Sabah erkenden kalktık; ve kahvaltıdan sonra yola çıktık.
**Numaralanmış cümlelerin hangisinde noktalı virgül yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "Takımları ayıran noktalı virgülü yanlış sanma: Virgülle ayrılmış iki grup (meyveler ve tahıllar) noktalı virgülle ayrılır; cümle doğrudur.",
    "Sıralı cümleleri ayıran noktalı virgülü yanlış sanma: Kendi içinde virgül bulunan sıralı cümleler noktalı virgülle ayrılabilir; cümle doğrudur.",
    "Takımları ayıran noktalı virgülü yanlış sanma: Virgülle ayrılmış iki aday grubu noktalı virgülle ayrılır; cümle doğrudur.",
    null
  ],
  aciklama: `Noktalı virgül, cümle içinde virgülle ayrılmış takımları ya da içinde virgül bulunan sıralı cümleleri birbirinden ayırır.
Adım 1: I. cümle: "elma, armut, ayva" bir grup, "buğday, arpa, mısır" başka bir grup. Grupların arasına noktalı virgül konmuş; doğru.
Adım 2: II. cümle: "Rüzgâr dindi, deniz duruldu" kendi içinde virgül taşıyan bir bölüm; ondan sonraki cümleye noktalı virgülle geçilmiş; doğru.
Adım 3: III. cümle: iki aday grubu noktalı virgülle ayrılmış; doğru.
Adım 4: IV. cümle: Birinci bölümde hiç virgül yok, üstelik ardından "ve" bağlacı geliyor. "ve" bağlacı iki cümleyi zaten bağlar; araya işaret konmaz: "Sabah erkenden kalktık ve kahvaltıdan sonra yola çıktık."
Sık yapılan hata: Noktalı virgülü "virgülden biraz uzun bir duraklama" sanıp her yere koymak. Ona ancak içinde virgül bulunan bölümleri ayırmak gerektiğinde başvurulur.
Cevap D.`
},
{
  id: "tur-nk-311",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun panosunda şu afiş asılı:
SATRANÇ TURNUVASI
(I) Akçay'da satranç heyecanı bu yıl 3'üncü kez yaşanıyor.
(II) Tarih: 18/05/2027
(III) Katılımcılar: 5., 6., 7. ve 8.'inci sınıf öğrencileri
(IV) Adres: Lale Sokağı No.: 7/3 Akçay / BALIKESİR
**Bu afişte numaralanmış satırların hangisinde noktalama yanlışı yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Sayıya gelen eki yanlış sanma: Rakamla yazılan sayılara gelen ekler kesmeyle ayrılır; '3'üncü' doğrudur.",
    "Tarihteki eğik çizgiyi yanlış sanma: Tarihler gün, ay ve yıl arasına eğik çizgi konarak yazılabilir; satır doğrudur.",
    null,
    "Adresteki eğik çizgiyi yanlış sanma: Adres yazarken semt ile il arasına ve kapı numaraları arasına eğik çizgi konur; satır doğrudur."
  ],
  aciklama: `Rakamla yazılan sıra sayılarında ya nokta ya da ek kullanılır; ikisi birlikte kullanılmaz: 8. ya da 8'inci.
Adım 1: I. satır: "3'üncü" sıra sayısıdır ve sayıya gelen ek kesmeyle ayrılmıştır; doğru.
Adım 2: II. satır: TDK'ye göre tarih "18/05/2027" biçiminde eğik çizgiyle yazılabilir; doğru.
Adım 3: III. satır: "5., 6., 7." doğru yazılmış ama "8.'inci" yanlıştır. Nokta zaten "sekizinci" anlamını verdiği için ayrıca "-inci" eki getirilmez. Doğrusu "8." ya da "8'inci"dir.
Adım 4: IV. satır: TDK'nin örneğindeki gibi "No.: 7/3 Akçay / BALIKESİR" biçimi doğrudur.
Sık yapılan hata: Sıra sayısını iki kez göstermek. Nokta ile "-inci" aynı işi yapar.
Cevap C.`
},
{
  id: "tur-nk-312",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, günlüğünün bir sayfasını şöyle doldurdu:
(I) Hava kararınca köyün yolları, bahçeleri, avluları sessizliğe gömüldü.
(II) Kardeşim ödevini bitirdi, ve hemen top oynamaya çıktı.
(III) Evet, bu tarifi geçen yaz anneannemden öğrendim.
(IV) Yarın erkenden kalkacağım, dedi ve odasına çekildi.
**Numaralanmış cümlelerin hangisinde virgül yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Sıralı ögeleri ayıran virgülü yanlış sanma: 'yolları, bahçeleri, avluları' eş görevli sözlerdir; virgülle ayrılır.",
    null,
    "Onay sözünden sonraki virgülü gereksiz sanma: 'Evet' sözünden sonra virgül konur; cümle doğrudur.",
    "Aktarılan sözden sonraki virgülü yanlış sanma: Tırnak içine alınmayan aktarma cümlelerden sonra virgül konur: 'Yarın erkenden kalkacağım, dedi.'"
  ],
  aciklama: `TDK'ye göre "ve, veya, yahut" bağlaçlarından önce de sonra da virgül konmaz.
Adım 1: I. cümle: "yolları, bahçeleri, avluları" sıralı ögelerdir; virgülle ayrılır. Doğru.
Adım 2: II. cümle: "bitirdi, ve hemen…" Burada "ve" bağlacından önce virgül konmuş; bu yanlıştır. Doğrusu: "Kardeşim ödevini bitirdi ve hemen top oynamaya çıktı."
Adım 3: III. cümle: "Evet" sözünden sonra virgül konur. Doğru.
Adım 4: IV. cümle: Tırnak içine alınmadan aktarılan "Yarın erkenden kalkacağım" sözünden sonra virgül konur. Doğru.
Sık yapılan hata: Sesli okurken "ve"den önce durakladığımız için oraya virgül koymak. "ve" zaten bağlar; virgüle gerek yoktur.
Cevap B.`
},
{
  id: "tur-nk-313",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Yay ayraç yalnızca açıklama eklemek için kullanılmaz; içine konan bir işaretle cümleye yeni bir anlam da katabilir. Örneğin yazar, bir sözü söylerken aslında tam tersini kastettiğini okura sezdirmek isteyebilir.
**Aşağıdaki cümlelerin hangisinde yay ayraç, söylenen sözün tersinin kastedildiğini göstermek için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Anneannem 1941 (?) yılında bu köyde doğmuş.",
    "Eski deniz feneri (1890'larda yapılmış) onarılıyor.",
    "Bütün gün uyuyan kedimiz çok çalışkan (!) bir hayvandır.",
    "Oyuncu (pencereye doğru yürür) bir süre sessizce bekler."
  ],
  dogru: 2,
  hatalar: [
    "Şüphe işaretini alayla karıştırma: Ayraç içindeki soru işareti, bilginin kesin olmadığını gösterir; tersini kastetmez.",
    "Açıklama ayracını alayla karıştırma: Ayraç içindeki söz fener hakkında ek bilgi verir.",
    null,
    "Sahne açıklamasını alayla karıştırma: Tiyatro metinlerinde ayraç, oyuncunun hareketini gösterir."
  ],
  aciklama: `TDK'ye göre alay, küçümseme ya da kinaye anlamı katmak için ünlem işareti yay ayraç içinde kullanılır: (!).
Adım 1: C'de kedi bütün gün uyuyor ama "çok çalışkan" deniyor. Sözün tersi kastediliyor; bu, ayraç içindeki ünlemle gösterilmiş.
Adım 2: A'da ayraç içindeki soru işareti, doğum yılının kesin bilinmediğini gösterir.
Adım 3: B'de ayraç, fener hakkında ek bilgi verir. D'de ayraç, tiyatro metninde oyuncunun hareketini anlatır.
Sık yapılan hata: (?) ile (!) işaretini karıştırmak. Soru işareti "emin değilim", ünlem "aslında öyle değil" demektir.
Cevap C.`
},
{
  id: "tur-nk-314",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, yaz tatilinde katıldığı gönüllü çalışmayı anlatan yazısında şu cümleleri kullandı:
(I) Bu yaz Türkçe'yi yabancılara öğreten bir kursa gönüllü olarak katıldım.
(II) Kursta Japonya'dan, Brezilya'dan ve Kenya'dan gelen öğrenciler vardı.
(III) Kursun sorumlusu Leyla Hanım'ın önerisiyle her hafta bir şarkı öğrendik.
(IV) Dersler her gün 14.00'te başlıyor ve iki saat sürüyordu.
**Numaralanmış cümlelerin hangisinde kesme işareti yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "Ülke adına gelen eki bitişik yazmak gerekir sanma: Ülke adlarına gelen çekim ekleri kesmeyle ayrılır; 'Japonya'dan' doğrudur.",
    "Unvana gelen eki bitişik yazmak gerekir sanma: Kişi adından sonra gelen saygı sözüne getirilen ek kesmeyle ayrılır; 'Leyla Hanım'ın' doğrudur.",
    "Saate gelen eki yanlış sanma: Rakamla yazılan saate gelen ek kesmeyle ayrılır ve okunuşa uyar ('on dörtte'); '14.00'te' doğrudur."
  ],
  aciklama: `Kesme işareti özel adlara gelen çekim eklerini ayırır; ancak özel addan yapım ekiyle türeyen sözcükler ve onlara gelen ekler kesmeyle ayrılmaz.
Adım 1: I. cümle: "Türkçe" sözcüğü "Türk" adına "-çe" yapım eki getirilerek türemiştir. Bu yüzden "Türkçe" sözcüğüne gelen ekler de kesmeyle ayrılmaz. Doğrusu: "Türkçeyi".
Adım 2: II. cümle: Ülke adlarına gelen ekler kesmeyle ayrılır: "Japonya'dan, Brezilya'dan, Kenya'dan". Doğru.
Adım 3: III. cümle: Kişi adından sonra gelen "Hanım" gibi saygı sözlerine getirilen ekler kesmeyle ayrılır. Doğru.
Adım 4: IV. cümle: Rakamla yazılan saate gelen ek kesmeyle ayrılır; "on dörtte" okunduğu için "-te" gelir. Doğru.
Sık yapılan hata: Dil adlarını (Türkçe, İngilizce) özel ad sanıp kesme koymak. "Türkçeyi, İngilizcenin" biçiminde bitişik yazılır.
Cevap A.`
},
{
  id: "tur-nk-315",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 3,
  soru: `Okulun edebiyat kulübü panoya şu duyuruyu astı:
Kulübümüzün şiir dinletisi 12/(I)03/2027 tarihinde yapılacak. Dinleti, kulüp üyemiz Ece'nin “Kar yağdı sessizce avluya /(II) Serçeler sığındı saçağa” dizeleriyle başlayan şiiriyle açılacak. Katılmak isteyenler başvuru formunu okulun genel ağ sayfasındaki www.ornekokul.k12.tr/(III)siir bölümünde bulabilir. Dinleti, Menekşe Sokağı No.: 14/(IV)2 adresindeki mahalle kütüphanesinin okuma salonunda yapılacak.
**Bu duyurudaki numaralanmış eğik çizgilerle ilgili aşağıdaki eşleştirmelerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I – yan yana yazılan dizeleri ayırma",
    "II – eklerin farklı biçimlerini gösterme",
    "III – birimler arasındaki oranı gösterme",
    "IV – bina ve daire numarasını ayırma"
  ],
  dogru: 3,
  hatalar: [
    "Tarih ile dizeleri karıştırma: I. eğik çizgi gün, ay ve yılı gösteren sayıları birbirinden ayırır; dizeleri ayıran çizgi II'dir.",
    "Dize çizgisini dil bilgisi gösterimi sanma: II. eğik çizgi yan yana yazılan iki dizeyi ayırır; '-a/-e' gibi ek biçimleri burada yoktur.",
    "Genel ağ adresini birim oranı sanma: III. eğik çizgi bir genel ağ adresinin parçasıdır; 'km/sa' gibi bir birim oranı göstermez.",
    null
  ],
  aciklama: `Eğik çizginin birçok görevi vardır: yan yana yazılan dizeleri ayırmak, tarihte gün-ay-yılı ayırmak, adreste bina ve daire numarasını ayırmak, genel ağ adreslerinde kullanılmak, eklerin farklı biçimlerini (-a/-e) ve birim oranlarını (km/sa) göstermek.
Adım 1: I: "12/03/2027" bir tarihtir; eğik çizgi gün, ay ve yılı ayırır.
Adım 2: II: “Kar yağdı sessizce avluya / Serçeler sığındı saçağa” iki dizedir; eğik çizgi, alt alta yazılması gereken dizeler yan yana yazılınca araya konmuştur.
Adım 3: III: "www.ornekokul.k12.tr/siir" bir genel ağ adresidir; eğik çizgi adresin parçasıdır.
Adım 4: IV: "No.: 14/2" adreste bina numarası (14) ile daire numarasını (2) ayırır. Eşleştirme doğrudur.
Sağlama: Her çizginin önüne ve arkasına bak: iki sayı + yıl ise tarih, iki dize ise şiir, "No.:" sonrası ise adrestir.
Sık yapılan hata: Bir metindeki bütün eğik çizgileri aynı görevde sanmak.
Cevap D.`
},
{
  id: "tur-nk-316",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Dedemin çiftliğine vardığımızda güneş batmak üzereydi( ) Uzun yolculuktan sonra hepimizin yüzünde yorgunluk vardı ama çiftliğin kokusunu alınca bunu çabucak unuttuk. Kapıda bizi karşılayan dedem, elindeki feneri başının üstüne kaldırıp sordu( ) “Yol nasıldı, çok yorulmadınız mı( )” Annem gülümsedi( ) arabadan indirdiği çantaları eve taşımaya başladı. Ben ise yıllardır görmediğim eski ahıra koştum.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(.) (,) (?) (;)", "(.) (:) (?) (,)", "(,) (:) (!) (,)", "(.) (:) (?) (.)"],
  dogru: 1,
  hatalar: [
    "Alıntı öncesini ve sıralı cümleyi yanlış işaretleme: Tırnaklı sözden önce virgül değil iki nokta gelir; içinde virgül olmayan iki kısa cümle noktalı virgülle değil virgülle ayrılır.",
    null,
    "Cümle sonunu ve soruyu yanlış işaretleme: Birinci boşluktan sonra 'Uzun' büyük harfle başlar, demek ki cümle biter; 'yorulmadınız mı' sözü 'mı' soru ekiyle bir sorudur.",
    "Büyük-küçük harf ipucunu kaçırma: Dördüncü boşluktan sonra 'arabadan' küçük harfle başlıyor; araya nokta konamaz, virgül gelir."
  ],
  aciklama: `Bu tür sorularda her boşluğu ayrı ayrı çöz ve boşluktan sonraki sözcüğün büyük mü küçük mü harfle başladığına bak.
Adım 1: "güneş batmak üzereydi( ) Uzun yolculuktan…" Sonraki sözcük büyük harfle başlıyor ve düşünce tamamlanmış. Cümle sonu: nokta (.).
Adım 2: "sordu( ) “Yol nasıldı…”" Aktarılan sözden önce iki nokta (:) konur.
Adım 3: "çok yorulmadınız mı( )" "mı" soru ekiyle gerçek bir soru; soru işareti (?) tırnağın içinde kalır.
Adım 4: "Annem gülümsedi( ) arabadan…" Sonraki sözcük küçük harfle başlıyor; iki sıralı cümle virgülle (,) ayrılır.
Sağlama: (.) (:) (?) (,) sırası yalnızca B'de var.
Sık yapılan hata: Son boşluğa nokta koymak. Seçenekler arasında tek fark bu olduğunda cevabı harf ipucu belirler.
Cevap B.`
},
{
  id: "tur-nk-317",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Okul gazetesinin son sayısında şu yazı yer aldı:
Sevgili okurlar,(I) bu sayımızda size küçük bir kasabanın büyük hikâyesini anlatacağız. Kasabanın gençleri, yıllardır kullanılmayan tren istasyonunu önce temizlemiş,(II) sonra boyamış ve sonunda bir kütüphaneye dönüştürmüş. Bu,(III) kasabada uzun zamandır yapılan en güzel işti. Kütüphanenin açılış gününde yaşlı bir kadın, raflara bakan çocuklara dönüp şöyle demiş: “Buradaki her kitabı okuyun,(IV) çocuklar.” O günden beri istasyonun bekleme salonu hiç boş kalmıyor.
**Bu metinde numaralanmış virgüllerden hangi ikisi aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve IV", "I ve III", "II ve III", "II ve IV"],
  dogru: 0,
  hatalar: [
    null,
    "Zamirden sonraki virgülü hitap virgülü sanma: III. virgül 'Bu' zamirinden sonra, sözün sıfat gibi okunmasını önlemek için konmuştur.",
    "Sıralı cümle virgülü ile zamir virgülünü eşleme: II. virgül sıralı yüklemleri ayırır, III. virgül zamirden sonra gelir; görevleri farklıdır.",
    "Sıralı cümle virgülünü hitap virgülü sanma: II. virgül 'temizlemiş' ve 'boyamış' eylemlerini ayırır; IV. virgül seslenme sözüyle ilgilidir."
  ],
  aciklama: `Aynı işaret bir metinde farklı görevlerde kullanılabilir. Her virgülün neden orada olduğunu tek tek sor.
Adım 1: I. virgül: "Sevgili okurlar," bir seslenmedir (hitap). Hitap sözlerinden sonra virgül konur.
Adım 2: II. virgül: "temizlemiş, sonra boyamış" sıralı eylemleri (yüklemleri) birbirinden ayırır.
Adım 3: III. virgül: "Bu," bir zamirdir. Virgül olmasa "Bu kasabada" diye okunup "bu" sıfat sanılabilirdi; virgül bu karışıklığı önler.
Adım 4: IV. virgül: "…okuyun, çocuklar." Buradaki "çocuklar" da bir seslenmedir. Hitap cümlenin sonunda da olsa virgülle ayrılır.
Sağlama: I ve IV aynı görevdedir (hitap).
Sık yapılan hata: Hitabın yalnızca cümle başında olabileceğini sanmak. Seslenme cümlenin sonunda da yer alabilir.
Cevap A.`
},
{
  id: "tur-nk-318",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Kardeşim odasını topladığını söyleyince kontrol etmeye gittim. Kapıyı açtığımda gördüğüm manzarayı kısaca anlatayım( ) Yatağın üstünde kitaplar, yerlerde oyuncaklar, masada da boş tabaklar duruyordu( ) Kardeşim ise köşedeki koltuğa kurulmuş, gururla gülümsüyordu. Önce bir şey demedim( ) sonra dayanamayıp “Sence bu oda gerçekten toplanmış mı( )” diye sordum. Kardeşim omuz silkti ve “Göründüğünden daha düzenli!” dedi.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(:) (;) (,) (?)", "(;) (.) (,) (!)", "(:) (.) (,) (?)", "(:) (.) (;) (?)"],
  dogru: 2,
  hatalar: [
    "Noktalı virgülden sonra büyük harfle devam etme: İkinci boşluktan sonra 'Kardeşim' büyük harfle başlıyor; cümle bitmiştir, nokta gerekir.",
    "Açıklama öncesine noktalı virgül koyma: Ardından ne gördüğünün anlatılacağı sözden sonra iki nokta gelir; tırnak içindeki 'mı' da soru ekidir.",
    null,
    "Gereksiz noktalı virgül: 'Önce bir şey demedim' ile 'sonra … sordum' içinde virgül bulunmayan iki kısa sıralı cümledir; virgülle ayrılır."
  ],
  aciklama: `İki nokta, kendisinden sonra açıklama geleceğini gösterir. TDK'ye göre iki noktadan sonra cümle gelirse büyük harfle başlar.
Adım 1: "manzarayı kısaca anlatayım( ) Yatağın üstünde…" Ardından manzaranın ne olduğu açıklanıyor; iki nokta (:) konur. Açıklama bir cümle olduğu için "Yatağın" büyük harfle başlamış.
Adım 2: "boş tabaklar duruyordu( ) Kardeşim ise…" Sonraki sözcük büyük harfle başlıyor; cümle bitmiş: nokta (.).
Adım 3: "Önce bir şey demedim( ) sonra…" Küçük harfle devam ediyor; içinde virgül olmayan iki sıralı cümle virgülle (,) ayrılır.
Adım 4: “Sence bu oda gerçekten toplanmış mı( )” "mı" soru ekiyle soru; soru işareti (?) tırnak içinde kalır.
Sağlama: (:) (.) (,) (?).
Sık yapılan hata: Noktalı virgülden sonra büyük harfle yeni cümle başlatmak. Noktalı virgül cümleyi bitirmez, bölümleri ayırır.
Cevap C.`
},
{
  id: "tur-nk-319",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Türkçe dersinde öğretmenimiz derse “Denizi Seven Çocuk”(I) adlı öyküyle başladı. Öyküyü okuduktan sonra kitabı masaya bıraktı ve “Okumak, başka hayatlara açılan bir penceredir.”(II) dedi. Ardından öyküdeki bir ayrıntıya dikkatimizi çekti: Yazar, denizi korkulacak bir yer olarak değil, bir “yol arkadaşı”(III) olarak anlatıyordu. Dersin son yarım saatinde de aynı yazarın “Kıyıdaki Fener”(IV) adlı şiirini okuduk ve iki metindeki deniz imgesini karşılaştırdık.
**Bu metinde numaralanmış tırnak işaretlerinden hangi ikisi aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve II", "II ve III", "III ve IV", "I ve IV"],
  dogru: 3,
  hatalar: [
    "Eser adını alıntı sanma: I. tırnak bir öykünün adını gösterir; II. tırnak ise öğretmenin söylediği sözü olduğu gibi aktarır.",
    "Alıntı ile vurguyu karıştırma: II. tırnak bir sözü aktarır; III. tırnak ise yazarın denize yüklediği özel anlamı vurgular.",
    "Vurguyu eser adıyla karıştırma: III. tırnak özel olarak vurgulanan bir sözü gösterir; IV. tırnak bir şiirin adıdır.",
    null
  ],
  aciklama: `Tırnak işaretinin üç temel görevi vardır: başkasının sözünü olduğu gibi aktarmak, özel olarak vurgulanan sözü belirtmek ve kitap, öykü, şiir gibi eserlerin adını göstermek.
Adım 1: I: “Denizi Seven Çocuk” adlı öykü → bir eser adı.
Adım 2: II: Öğretmenin söylediği cümle olduğu gibi aktarılıyor → alıntı.
Adım 3: III: "yol arkadaşı" sözü, yazarın denize yüklediği özel bir anlamı gösteriyor → özel vurgu.
Adım 4: IV: “Kıyıdaki Fener” adlı şiir → bir eser adı.
Sağlama: Aynı görevde olanlar I ve IV'tür; ikisinin de ardından "adlı" sözü gelir.
Sık yapılan hata: Tırnak içindeki her sözü alıntı sanmak. Tek bir sözcük ya da söz öbeği tırnağa alınmışsa vurgu olabilir; ardından "adlı" geliyorsa eser adıdır.
Cevap D.`
},
{
  id: "tur-nk-320",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Otobüs terminalinde bilet kuyruğu uzadıkça uzuyordu. Sıra bize geldiğinde görevli başını ekrandan kaldırdı.
— Kaç kişisiniz( )
Babam üç parmağını kaldırdı( ) görevli ekrana bakıp iç çekti.
— Son üç koltuk kaldı ama yan yana değil( ) diye ekledi.
Annem bana dönüp “Yolculuk boyunca kitabını okursun, değil mi( )” diye sordu. Başımı sallayınca biletler hemen kesildi.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(?) (;) (.) (?)", "(?) (,) (,) (?)", "(?) (,) (.) (!)", "(!) (,) (,) (?)"],
  dogru: 1,
  hatalar: [
    "Konuşmadan sonra 'diye' gelirken nokta koyma: Konuşma çizgisiyle verilen söz 'diye ekledi' ile sürüyorsa sözün sonuna virgül konur; ikinci boşluktaki sıralı cümleler de virgülle ayrılır.",
    null,
    "'diye' öncesini ve soru ekini yanlış işaretleme: Üçüncü boşlukta cümle 'diye ekledi' ile sürdüğü için virgül gelir; 'değil mi' ise gerçek bir sorudur.",
    "Soru cümlesini ünlemle bitirme: 'Kaç kişisiniz' sözünde 'kaç' soru sözü var; sonuna soru işareti konur."
  ],
  aciklama: `TDK'ye göre konuşma çizgisinden sonra gelen söz "diye sordu, diye ekledi" gibi bir sözle sürüyorsa konuşmanın sonuna virgül konur: "— Bu akşam gidiyor musunuz, diye sordu."
Adım 1: "— Kaç kişisiniz( )" konuşma burada bitiyor ve "kaç" soru sözü var: soru işareti (?).
Adım 2: "Babam üç parmağını kaldırdı( ) görevli…" küçük harfle devam ediyor; içinde virgül olmayan iki sıralı cümle virgülle (,) ayrılır.
Adım 3: "— Son üç koltuk kaldı ama yan yana değil( ) diye ekledi." Söz "diye ekledi" ile sürüyor; konuşmanın sonuna virgül (,) konur.
Adım 4: “…kitabını okursun, değil mi( )” "değil mi" gerçek bir soru sorar; soru işareti (?) tırnağın içinde kalır.
Sağlama: (?) (,) (,) (?).
Sık yapılan hata: Konuşma çizgisiyle başlayan her satırı noktayla bitirmek. Satırın sonunda "diye …" varsa söz henüz bitmemiştir.
Cevap B.`
},
{
  id: "tur-nk-321",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, dedesinin köyündeki eski çeşmeyi anlattığı yazısını arkadaşına okuttu. Arkadaşı, yazıdaki dört cümlenin altını çizip noktalama bakımından kontrol edilmesi gerektiğini söyledi:
(I) Köy odasının duvarında çeşmeye ait eski belgeler, fotoğraflar vb asılıydı.
(II) Çeşmenin kitabesini okumak için Yeşiltepe Muhtarlığı'ndan izin aldık.
(III) Kitabeyi okuyunca dedem bana dönüp sordu: “Bunu kimin yaptırdığını biliyor musun.”
(IV) Köy meydanındaki çeşme 1920'de yapılmış, 1974'te de onarılmış.
**Numaralanmış cümlelerin hangisinde noktalama yanlışı __yoktur__?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "Kısaltma noktasını gözden kaçırma: 've benzeri' anlamındaki kısaltma noktayla yazılır; doğrusu 'fotoğraflar vb. asılıydı'.",
    "Kurum adına kesme konmayacağını gözden kaçırma: 'Yeşiltepe Muhtarlığı' bir kurum adıdır; doğrusu 'Muhtarlığından'.",
    "Alıntıdaki soruyu gözden kaçırma: 'biliyor musun' sözünde 'mu' soru eki var; tırnak içindeki cümle soru işaretiyle bitmelidir.",
    null
  ],
  aciklama: `"Yanlışı yoktur" sorularında üç cümlede birer yanlış bulup elersin; kalan cümle doğrudur.
Adım 1: I. cümle: "vb." "ve benzeri" sözünün kısaltmasıdır. Kısaltmaların sonuna nokta konur; "vb" yanlış, doğrusu "vb.".
Adım 2: II. cümle: "Yeşiltepe Muhtarlığı" bir kurumdur. Kurum adlarına gelen ekler kesmeyle ayrılmaz: "Yeşiltepe Muhtarlığından". Yanlış.
Adım 3: III. cümle: Dedenin sözü "biliyor musun" diye bir soru; tırnak içindeki cümlenin sonuna nokta değil soru işareti konmalı. Yanlış.
Adım 4: IV. cümle: Rakamla yazılan sayılara gelen ekler kesmeyle ayrılır (1920'de, 1974'te); iki sıralı cümle virgülle ayrılmış. Yanlış yok.
Sık yapılan hata: Yalnızca bir cümleye bakıp "bu doğru" deyip geçmek. Olumsuz kökte her cümledeki yanlışı tek tek bulman gerekir.
Cevap D.`
},
{
  id: "tur-nk-322",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Sevgili Defne,
Tatilde okumak için üç kitap seçmiştim( ) bir macera romanı, bir gezi kitabı ve bir şiir kitabı. Macera romanını, aylardır sabırsızlıkla beklediğim o kalın kitabı, ilk hafta bitirdim( ) diğer ikisini henüz açmadım. Aslında her akşam okumaya niyetleniyorum ama bir bakıyorum ki( ) Neyse, bunu anlatmasam da olur. Sen bu yaz neler okudun( ) Mektubunu bekliyorum.
Arkadaşın Ada
**Bu mektupta yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(:) (,) (…) (?)", "(;) (;) (.) (?)", "(:) (;) (…) (?)", "(,) (;) (…) (!)"],
  dogru: 2,
  hatalar: [
    "İçinde virgül bulunan bölümü virgülle ayırma: Birinci bölümde ara söz virgülleri var; iki bölüm arasına virgül konursa hangi sözün nereye ait olduğu karışır, noktalı virgül gerekir.",
    "Sıralama öncesine noktalı virgül ve yarım cümleye nokta koyma: Kitaplar sıralanmadan önce iki nokta gelir; 'bir bakıyorum ki' sözü yarım kalmıştır, üç nokta gerekir.",
    null,
    "Sıralamadan önce virgül koyma ve soruyu ünlemle bitirme: Sıralama iki noktayla başlar; 'neler okudun' sözünde 'neler' soru sözüdür."
  ],
  aciklama: `Üç nokta, tamamlanmamış cümlelerin sonuna konur; noktalı virgül ise içinde virgül bulunan sıralı cümleleri ayırır.
Adım 1: "üç kitap seçmiştim( ) bir macera romanı…" Ardından kitaplar sıralanıyor; iki nokta (:) konur. Sıralanan sözler cümle olmadığı için küçük harfle başlar.
Adım 2: "Macera romanını, aylardır … o kalın kitabı, ilk hafta bitirdim( ) diğer ikisini…" Birinci bölümde ara sözü ayıran virgüller var. İçinde virgül bulunan bölümden sonraki sıralı cümleye noktalı virgülle (;) geçilir.
Adım 3: "ama bir bakıyorum ki( ) Neyse…" Cümle yarım bırakılmış, yazar sözü kesmiş. Tamamlanmamış cümleye üç nokta (…) konur.
Adım 4: "Sen bu yaz neler okudun( )" "neler" soru sözüdür; soru işareti (?) konur.
Sağlama: (:) (;) (…) (?).
Sık yapılan hata: Yarım bırakılan cümleye nokta koymak. Nokta, düşüncenin tamamlandığını gösterir; burada söz kesilmiştir.
Cevap C.`
},
{
  id: "tur-nk-323",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Kış tatilinde Kars-(I)Erzurum demir yolu hattında yolculuk yaptık. Tren yola çıktığında istasyondaki termometre -(II)12 °C gösteriyordu. Kompartımanda karşımıza oturan küçük bir çocuk, pencerenin üstündeki “Çıkış” yazısını hecelerine ayırarak okumaya çalışıyordu: “Çı-(III)kış.” Çocuğun dedesi ise bize 1990-(IV)1995 yıllarında bu hatta makinist olarak çalıştığını ve o yıllarda trenin çok daha yavaş gittiğini anlatıyordu. Yolculuk boyunca dedenin anılarını dinlemek, pencereden görünen karlı manzaradan bile güzeldi.
**Bu metinde numaralanmış kısa çizgilerden hangi ikisi aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I ve IV", "I ve III", "II ve IV", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Hece çizgisini 'arasında' çizgisiyle eşleme: III. çizgi 'Çı-kış' sözcüğünün hecelerini ayırır; I. çizgi iki şehir arasını gösterir.",
    "Eksi işaretini tarih aralığıyla eşleme: II. çizgi sıfırın altındaki sıcaklığı gösterir; IV. çizgi iki yıl arasını gösterir.",
    "Eksi işaretini hece çizgisiyle eşleme: II. çizgi sıfırdan küçük değeri, III. çizgi heceleri gösterir; görevleri farklıdır."
  ],
  aciklama: `Kısa çizgi; iki yer ya da iki tarih arasında "ile, arasında" anlamı vermek, sıfırdan küçük değerleri göstermek ve heceleri ayırmak gibi farklı görevlerde kullanılır.
Adım 1: I: "Kars-Erzurum hattı" = Kars ile Erzurum arasındaki hat → "arasında" anlamı.
Adım 2: II: "-12 °C" = sıfırın altında on iki derece → eksi değer.
Adım 3: III: "Çı-kış" → heceleri ayırma.
Adım 4: IV: "1990-1995 yıllarında" = 1990 ile 1995 arasındaki yıllarda → "arasında" anlamı.
Sağlama: Çizginin yerine "ile … arası" koy: "Kars ile Erzurum arası", "1990 ile 1995 arası" olur; ötekilerde olmaz.
Sık yapılan hata: İki sayı arasındaki çizgiyle sayının önündeki çizgiyi aynı sanmak. Önünde tek sayı varsa eksi, iki sayının arasındaysa "arasında" anlamı vardır.
Cevap A.`
},
{
  id: "tur-nk-324",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Sınıf başkanı, sınıfın mesaj grubuna şu duyuruyu yazdı:
Sevgili arkadaşlar( ) bu cumartesi sınıfça okulun arka bahçesine fidan dikmeye gidiyoruz. Ne güzel bir haber( ) Fidanları belediye verecek, kürekleri okul sağlayacak( ) eldivenlerinizi, şapkalarınızı ve sularınızı ise kendiniz getireceksiniz. Toplanma yeri okulun ön kapısı, saat 09.00. Dikim yaklaşık üç saat sürecek. Aramızda gelemeyecek olan var mı( ) Varsa bugün öğretmenimize haber verin.
**Bu duyuruda yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,) (?) (;) (?)", "(,) (!) (;) (?)", "(,) (!) (,) (?)", "(:) (!) (;) (?)"],
  dogru: 1,
  hatalar: [
    "Sevinç cümlesini soru sanma: 'Ne güzel bir haber' bir soru değil, sevinç bildiren bir sözdür; ünlem gerekir.",
    null,
    "İçinde virgül bulunan bölümleri virgülle ayırma: 'Fidanları belediye verecek, kürekleri okul sağlayacak' kendi içinde virgül taşıyor; sonraki bölüme noktalı virgülle geçilir.",
    "Hitaptan sonra iki nokta koyma: Seslenme sözünden sonra virgül konur; iki nokta açıklama ya da alıntıdan önce kullanılır."
  ],
  aciklama: `Noktalı virgül, içinde virgül bulunan sıralı cümleleri birbirinden ayırır. Ünlem ise duygu bildiren cümlelerin sonuna konur.
Adım 1: "Sevgili arkadaşlar( ) bu cumartesi…" Seslenme sözünden sonra virgül (,) konur; sonraki sözcük küçük harfle devam ediyor.
Adım 2: "Ne güzel bir haber( )" sevinç bildiriyor: ünlem (!).
Adım 3: "Fidanları belediye verecek, kürekleri okul sağlayacak( ) eldivenlerinizi, şapkalarınızı…" İki bölümün de içinde virgül var. Bölümler noktalı virgülle (;) ayrılır.
Adım 4: "gelemeyecek olan var mı( )" "mı" soru ekiyle gerçek bir soru: soru işareti (?).
Sağlama: (,) (!) (;) (?).
Sık yapılan hata: Üçüncü boşluğa virgül koymak. O zaman okul malzemeleri ile öğrencilerin getireceği eşyalar aynı listede karışır.
Cevap B.`
},
{
  id: "tur-nk-325",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Bilim kulübü öğretmeni, kulüp üyelerine şu e-postayı gönderdi:
Merhaba,(I)
Bu yılki bilim gezimiz 22-(II)24 Nisan tarihlerinde yapılacak. Gezi programında gözlemevi, müze,(III) ve kelebek vadisi var; rehberimiz her durakta kısa bir sunum yapacak. Gözlemevinde gece gözlemi de olacağı için kalın giysiler getirmeyi unutmayın. Katılmak isteyenler velilerine imzalattıkları izin formunu 15 Nisan'a(IV) kadar kulüp dolabına bıraksın. Sorusu olan teneffüslerde bana ulaşabilir.
**Bu e-postada numaralanmış yerlerin hangisinde noktalama işareti yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Selamlamadan sonraki virgülü yanlış sanma: Mektup ve e-postalarda seslenme ya da selamlama sözünden sonra virgül konur.",
    "Tarih aralığındaki kısa çizgiyi yanlış sanma: '22-24 Nisan' 22 ile 24 Nisan arası demektir; kısa çizgi 'arasında' anlamı verir.",
    null,
    "Tarihe gelen eki yanlış sanma: '15 Nisan' belirli bir tarihtir; ay adına gelen ek kesmeyle ayrılır."
  ],
  aciklama: `TDK'ye göre "ve, veya" bağlaçlarından önce de sonra da virgül konmaz.
Adım 1: I: "Merhaba," e-postanın seslenme bölümüdür; ardından virgül konur. Doğru.
Adım 2: II: "22-24 Nisan" 22 ile 24 Nisan arasındaki günlerdir; kısa çizgi "arasında" anlamı verir. Doğru.
Adım 3: III: "gözlemevi, müze, ve kelebek vadisi" sıralamasında "ve" bağlacından önce virgül konmuş. Bu yanlıştır; doğrusu "gözlemevi, müze ve kelebek vadisi".
Adım 4: IV: "15 Nisan" belirli bir tarih bildirir; ay adına gelen ek kesmeyle ayrılır: "15 Nisan'a". Doğru.
Sık yapılan hata: Sıralamanın son ögesinden önce de virgül koymak. Sıralamada son öge "ve" ile bağlanıyorsa "ve"den önce virgül olmaz.
Cevap C.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "tur-nk-001",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinin sonuna soru işareti konmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Otobüsün kaçta geleceğini merak ediyorum",
    "Bu kitabı daha önce okudun mu",
    "Nereye gittiğini annesine söylemiş",
    "Yağmur yağdı mı sokaklar göle döner"
  ],
  dogru: 1,
  hatalar: [
    "Soru sözünü görüp soru sanma: 'kaçta' sözü var ama cümle bir şey sormuyor, merak ettiğini bildiriyor; sonuna nokta konur.",
    null,
    "Soru sözünü görüp soru sanma: 'Nereye' sözü var ama cümle bir durumu bildiriyor; sonuna nokta konur.",
    "Zaman bildiren 'mı' ekini soru sanma: 'yağdı mı' burada 'yağınca' anlamındadır; cümle soru sormaz."
  ],
  aciklama: `Soru işareti, gerçekten bir şey soran cümlenin sonuna konur. İçinde soru sözü ya da "mi" eki bulunan her cümle soru değildir.
Adım 1: B'de "okudun mu" sözüyle karşıdakine gerçekten soru soruluyor; soru işareti gerekir.
Adım 2: A ve C'de "kaçta, nereye" sözleri var ama cümleler bir şey sormuyor, bildiriyor.
Adım 3: D'de "yağdı mı" = "yağınca"; soru anlamı yok.
Sağlama: Cümleye cevap verebiliyor musun? "Evet, okudum." B'ye cevap verilebilir, ötekilere verilemez.
Cevap B.`
},
{
  id: "tur-nk-002",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde kesme işareti yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Bu yaz tatilde Antalya'ya gideceğiz.",
    "Final maçı 19.00'da başlayacak.",
    "Kuzenim bu yıl TRT'de çalışmaya başladı.",
    "Sınıfımızdaki Ankaralı'lar öne geçti."
  ],
  dogru: 3,
  hatalar: [
    "Yer adına gelen eki yanlış sanma: Şehir adlarına gelen çekim ekleri kesmeyle ayrılır; 'Antalya'ya' doğrudur.",
    "Saate gelen eki yanlış sanma: Rakamla yazılan saate gelen ek kesmeyle ayrılır; '19.00'da' doğrudur.",
    "Kısaltmaya gelen eki yanlış sanma: Kısaltmalara gelen ekler kesmeyle ayrılır ve okunuşa uyar; 'TRT'de' doğrudur.",
    null
  ],
  aciklama: `Özel adlara yapım eki getirilerek türeyen sözcüklerde ve bunlara gelen eklerde kesme kullanılmaz.
Adım 1: D'de "Ankaralı" sözcüğü "Ankara" adına "-lı" yapım eki getirilerek türemiştir. Buna gelen çokluk eki de kesmeyle ayrılmaz. Doğrusu: "Ankaralılar".
Adım 2: A'da şehir adına, B'de rakamla yazılan saate, C'de kısaltmaya gelen ekler kesmeyle ayrılmıştır; üçü de doğrudur.
Sık yapılan hata: Büyük harfle başlayan her sözcükten sonra kesme koymak. "-lı, -ca, -lık" gibi yapım ekleri yeni sözcük türetir; kesme almaz.
Cevap D.`
},
{
  id: "tur-nk-003",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde virgül yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Hava güzel olursa, pikniğe gideriz.",
    "Evet, yarın erkenden yola çıkacağız.",
    "Kalemini, silgisini ve cetvelini unutmuş.",
    "Çocuklar, lütfen sıraya geçelim."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Onay sözünden sonraki virgülü yanlış sanma: 'Evet' sözünden sonra virgül konur.",
    "Sıralı ögeleri ayıran virgülü yanlış sanma: Eş görevli sözler virgülle ayrılır; 've'den önce virgül konmamıştır, cümle doğrudur.",
    "Hitap virgülünü yanlış sanma: 'Çocuklar' bir seslenmedir; ardından virgül konur."
  ],
  aciklama: `TDK'ye göre şart ekinden sonra virgül konmaz.
Adım 1: A'da "olursa" sözcüğü şart eki almıştır (-sa). Arkasına virgül konmaz: "Hava güzel olursa pikniğe gideriz."
Adım 2: B'de onay sözünden, C'de sıralı ögelerden, D'de seslenmeden sonra virgül doğrudur.
Sık yapılan hata: Sesli okurken şartlı bölümden sonra duraklandığı için virgül koymak.
Cevap A.`
},
{
  id: "tur-nk-004",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Sınava girecek öğrencilere şu hatırlatma yapıldı:
"Sınav salonuna girmeden önce şunları yanınıza almayı unutmayın( ) kimlik kartınız, iki kurşun kalem ve bir silgi( )"
**Bu cümlede yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(;) (.)", "(,) (!)", "(:) (.)", "(:) (?)"],
  dogru: 2,
  hatalar: [
    "Sıralama öncesine noktalı virgül koyma: Ardından eşyaların sıralanacağı sözden sonra iki nokta gelir.",
    "Sıralama öncesine virgül koyma ve düz cümleyi ünlemle bitirme: Sıralamadan önce iki nokta gelir, bilgi veren cümle noktayla biter.",
    null,
    "Düz cümleyi soru sanma: Cümle bir şey sormuyor, hatırlatma yapıyor; sonuna nokta konur."
  ],
  aciklama: `İki nokta, ardından örnek ya da sıralama geleceğini gösterir.
Adım 1: "şunları yanınıza almayı unutmayın( )" sözünden sonra alınacak eşyalar sıralanıyor; iki nokta (:) konur.
Adım 2: Hatırlatma bir bilgi cümlesidir, sonuna nokta (.) konur.
Sağlama: "şunlar, şöyle" gibi sözlerden sonra açıklama ya da sıralama geliyorsa genellikle iki nokta gerekir.
Cevap C.`
},
{
  id: "tur-nk-005",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Tırnak işareti bir cümlede farklı amaçlarla kullanılabilir: başkasının sözünü aktarmak, bir sözü vurgulamak ya da bir eserin adını göstermek gibi.
**Aşağıdaki cümlelerin hangisinde tırnak işareti bir eserin adını göstermek için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Babam her sabah “Erken kalkan yol alır.” der.",
    "Mahallenin “kahramanı” yine topu kaçırmıştı.",
    "Levhada “Çimlere basmayınız.” yazıyordu.",
    "Bu yaz “Kayıp Deniz Feneri” adlı romanı okudum."
  ],
  dogru: 3,
  hatalar: [
    "Alıntıyı eser adı sanma: Tırnak içindeki söz babanın söylediği bir sözdür; olduğu gibi aktarılmıştır.",
    "Vurguyu eser adı sanma: 'kahramanı' sözü alaycı bir vurguyla tırnağa alınmıştır.",
    "Levhadaki yazıyı eser adı sanma: Levhada yazan cümle olduğu gibi aktarılmıştır; bu bir alıntıdır.",
    null
  ],
  aciklama: `Kitap, dergi, şiir, öykü gibi eserlerin adları tırnak içine alınarak yazılabilir.
Adım 1: D'de tırnak içindeki söz bir romanın adıdır; ardından "adlı romanı" geliyor.
Adım 2: A ve C'de tırnak, bir sözü ya da yazıyı olduğu gibi aktarır (alıntı). B'de ise sözü vurgular.
Sağlama: Tırnağın ardından "adlı kitap, adlı şiir" gibi bir söz geliyorsa tırnak eser adını gösteriyordur.
Cevap D.`
},
{
  id: "tur-nk-006",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Nokta yalnızca cümle sonunda kullanılmaz; kısaltmalarda, tarihlerde, saatlerde ve sıra bildiren sayılarda da karşımıza çıkar.
**Aşağıdaki cümlelerin hangisinde nokta, bir sayının sıra bildirdiğini göstermek için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Resim yarışmasında 2. olan takım madalya aldı.",
    "Veli toplantısı 14.30'da okulda başlayacak.",
    "Prof. Demir bugün konferans verecekmiş.",
    "Kardeşim 12.06.2015 tarihinde doğmuş."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Saat noktasını sıra noktası sanma: '14.30' sözünde nokta saat ile dakikayı ayırır.",
    "Kısaltma noktasını sıra noktası sanma: 'Prof.' sözündeki nokta bir kısaltmayı gösterir.",
    "Tarih noktasını sıra noktası sanma: '12.06.2015' sözünde noktalar gün, ay ve yılı ayırır."
  ],
  aciklama: `Rakamla yazılan bir sayıdan sonra konan nokta, o sayının sıra bildirdiğini gösterir: 2. = ikinci.
Adım 1: A'da "2. olan takım" = "ikinci olan takım". Nokta sıra bildiriyor.
Adım 2: B'de nokta saat ile dakikayı, C'de kısaltmayı, D'de tarihin gün, ay ve yılını ayırır.
Sağlama: Noktalı sayıyı "-inci" ekiyle okuyabiliyorsan sıra sayısıdır: "ikinci olan takım" olur, "on dördüncü otuz" olmaz.
Cevap A.`
},
{
  id: "tur-nk-007",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Noktalı virgül, içinde virgül bulunan sıralı cümleleri ya da virgülle ayrılmış grupları birbirinden ayırmak için kullanılır.
**Aşağıdaki cümlelerin hangisinde noktalı virgül doğru kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Sabah çok erken; evden çıktık.",
    "Dedem çayı, simidi, peyniri sever; ninem ise meyve yer.",
    "Kitabı dün okudum; ve çok beğendim.",
    "Nereye gidiyorsun; diye sordu."
  ],
  dogru: 1,
  hatalar: [
    "Gereksiz noktalı virgül: 'Sabah çok erken' cümlenin bir ögesidir; ögeyi yüklemden noktalı virgülle ayırmak yanlıştır.",
    null,
    "'ve'den önce noktalı virgül: 've' bağlacı iki cümleyi zaten bağlar; araya işaret konmaz.",
    "Aktarılan sözden sonra noktalı virgül: Tırnaksız aktarılan soru 'diye' ile sürdüğünde araya virgül konur; noktalı virgül yanlıştır."
  ],
  aciklama: `Noktalı virgül yalnızca içinde virgül bulunan bölümleri ayırırken kullanılır.
Adım 1: B'de birinci cümlenin içinde virgüller var (çayı, simidi, peyniri). Bu cümleden sonraki sıralı cümleye noktalı virgülle geçilmiş; doğru.
Adım 2: A'da ögeler arasına, C'de "ve"den önce, D'de aktarılan sözden sonra noktalı virgül konmuş; üçü de yanlıştır. D'nin doğrusu: "Nereye gidiyorsun, diye sordu."
Sık yapılan hata: Noktalı virgülü rastgele bir duraklama işareti sanmak.
Cevap B.`
},
{
  id: "tur-nk-008",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 2,
  soru: `Evden çıkıp kapıyı çektikten sonra ceplerimi yokladım ve bir anda durdum:
"Eyvah( ) Anahtarı içeride unuttum( )"
**Bu sözde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(?) (.)", "(.) (?)", "(,) (?)", "(!) (.)"],
  dogru: 3,
  hatalar: [
    "Şaşkınlık sözünü soru sanma: 'Eyvah' bir şey sormaz, korku ve şaşkınlık bildirir; ünlem gerekir.",
    "Ünlem sözüne nokta, düz cümleye soru işareti koyma: 'Eyvah' duygu bildirir; 'unuttum' ise bir durumu bildirir, soru değildir.",
    "Büyük harf ipucunu kaçırma: 'Anahtarı' büyük harfle başlıyor; araya virgül konamaz. Ayrıca ikinci cümle soru değildir.",
    null
  ],
  aciklama: `Ünlem işareti; sevinç, korku, şaşkınlık gibi duyguları bildiren söz ve cümlelerden sonra konur.
Adım 1: "Eyvah" ani bir korku ve şaşkınlık bildirir; ardından ünlem (!) konur. Sonraki sözcük büyük harfle başlıyor.
Adım 2: "Anahtarı içeride unuttum" bir durumu bildiren düz cümledir; sonuna nokta (.) konur.
Sık yapılan hata: "Eyvah, vay, eh" gibi ünlem sözlerini soru sanmak.
Cevap D.`
},
{
  id: "tur-nk-009",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci, ailesini tanıttığı kompozisyonunda şu cümleleri yazdı:
(I) Kardeşim 2021'de ilkokula başladı ve şimdi okumayı çok seviyor.
(II) Annem uzun yıllar Çamlıbel Ortaokulu'nda matematik öğretmenliği yaptı.
(III) Yazın hep birlikte Karadeniz'in yaylalarını gezmeyi severiz.
(IV) Geçen ay apartmanımızın 3'üncü katındaki daireye taşındık.
**Numaralanmış cümlelerin hangisinde kesme işareti yanlış kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Sayıya gelen eki yanlış sanma: Rakamla yazılan sayılara gelen ekler kesmeyle ayrılır; '2021'de' doğrudur.",
    null,
    "Yer adına gelen eki yanlış sanma: 'Karadeniz' bir yer adıdır; çekim eki kesmeyle ayrılır.",
    "Sıra sayısına gelen eki yanlış sanma: Sıra sayısı rakamla yazılınca ek kesmeyle ayrılabilir; '3'üncü' doğrudur."
  ],
  aciklama: `Kişi, yer ve ülke adlarına gelen ekler kesmeyle ayrılır; kurum ve kuruluş adlarına gelen ekler ayrılmaz.
Adım 1: I: "2021'de" rakamla yazılan sayıya gelen ektir; kesme doğru.
Adım 2: II: "Çamlıbel Ortaokulu" bir kurumun adıdır. TDK'ye göre kurum adlarına gelen ekler kesmeyle ayrılmaz: "Çamlıbel Ortaokulunda". Yanlış burada.
Adım 3: III: "Karadeniz" bir yer adıdır; "Karadeniz'in" doğru.
Adım 4: IV: "3'üncü" rakamla yazılmış sıra sayısına gelen ektir; doğru.
Sık yapılan hata: Okul, belediye, dernek adlarını kişi adı gibi düşünüp kesme koymak.
Cevap B.`
},
{
  id: "tur-nk-010",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Hafta sonu alışverişinden dönünce mutfakta küçük bir sorunla karşılaştık. Annem pazardan sebze, meyve, peynir almış( ) babam ise marketten ekmek, süt ve yoğurt getirmiş( ) Kısa sürede sorunun ne olduğunu anladık( ) Buzdolabında yeni gelenler için tek bir boş raf bile kalmamıştı.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,) (.) (:)", "(;) (,) (:)", "(;) (.) (:)", "(;) (.) (;)"],
  dogru: 2,
  hatalar: [
    "İçinde virgül bulunan bölümleri virgülle ayırma: İki bölümde de sıralanmış ürünler virgülle ayrılmış; bölümler arasına noktalı virgül gelir.",
    "Cümle sonuna virgül koyma: İkinci boşluktan sonra 'Kısa' büyük harfle başlıyor; cümle bitmiştir, nokta gerekir.",
    null,
    "Açıklama öncesine noktalı virgül koyma: Sorunun ne olduğu ardından açıklanıyor; açıklama öncesine iki nokta konur. Noktalı virgülden sonra da büyük harfle devam edilmez."
  ],
  aciklama: `İki nokta, ardından açıklama geleceğini gösterir; iki noktadan sonra gelen cümle büyük harfle başlar.
Adım 1: "sebze, meyve, peynir almış( ) babam ise…" Her iki bölümün içinde de virgül var; bölümler noktalı virgülle (;) ayrılır.
Adım 2: "yoğurt getirmiş( ) Kısa sürede…" Sonraki sözcük büyük harfle başlıyor; cümle bitmiş: nokta (.).
Adım 3: "sorunun ne olduğunu anladık( ) Buzdolabında…" Ardından sorunun ne olduğu açıklanıyor: iki nokta (:).
Sağlama: (;) (.) (:).
Cevap C.`
},
{
  id: "tur-nk-011",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Bazen bir cümlenin ortasına, cümlede anlatılan kişi ya da şey hakkında ek bilgi veren bir söz eklenir. Bu söz çıkarıldığında cümle eksik kalmaz, yalnızca ek bilgi kaybolur.
**Aşağıdaki cümlelerin hangisinde virgüller, cümleye eklenmiş böyle bir ara sözü ayırmak için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Komşumuz, emekli bir öğretmen, her sabah çocuklara kitap okur.",
    "Bahçeden elma, armut, erik ve kayısı toplayıp eve getirdik.",
    "Güneş doğdu, kuşlar ötmeye başladı, köy yavaş yavaş uyandı.",
    "Hayır, bu akşam sinemaya gitmiyoruz, çok ödevimiz var."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sıralı ögeleri ara söz sanma: 'elma, armut, erik' eş görevli sözlerdir; virgüller sıralamayı ayırır.",
    "Sıralı cümleleri ara söz sanma: Her bölüm kendi yüklemi olan ayrı bir cümledir; virgüller cümleleri ayırır.",
    "Cevap virgülünü ve sıralı cümleyi ara söz sanma: 'Hayır' bir ret sözüdür; ikinci virgül ise iki cümleyi ayırır."
  ],
  aciklama: `Ara söz, cümlenin arasına ek bilgi vermek için giren sözdür; başına ve sonuna virgül konur.
Adım 1: A'da "emekli bir öğretmen" sözü "Komşumuz" hakkında ek bilgi veriyor. Çıkarınca cümle yine tamam: "Komşumuz her sabah çocuklara kitap okur." Ara söz budur.
Adım 2: B'de virgüller sıralı ögeleri, C'de sıralı cümleleri ayırır. D'de ilk virgül ret sözünden sonra, ikincisi iki cümle arasındadır.
Sağlama: İki virgül arasındaki sözü sil; cümle bozulmuyorsa ve yalnızca bir bilgi eksiliyorsa o bir ara sözdür.
Cevap A.`
},
{
  id: "tur-nk-012",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 3,
  soru: `Yıllar sonra teyzesini ziyarete giden bir öğrenci, o günü günlüğüne şöyle anlattı:
(I) Kapıyı açan teyzem beni görünce şaşırdı: “Nasıl da büyümüşsün!”
(II) İçeri girdim ve masadaki kutuyu açtım, içinde de…
(III) Teyzem, “Bu çantayı kaç liraya aldın?” diye sordu.
(IV) Akşam hangi otobüse bineceğimi hâlâ bilmiyorum?
**Numaralanmış cümlelerin hangisinde noktalama yanlışı yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "Şaşma cümlesindeki ünlemi yanlış sanma: 'Nasıl da büyümüşsün' bir şey sormaz, şaşkınlık bildirir; ünlem işareti doğrudur ve tırnağın içinde kalır.",
    "Yarım bırakılan cümledeki üç noktayı yanlış sanma: Tamamlanmamış cümlelerin sonuna üç nokta konur.",
    "Tırnak içindeki soruyu yanlış sanma: Aktarılan söz bir sorudur; soru işareti tırnağın içinde kalır, ardından 'diye sordu' gelir.",
    null
  ],
  aciklama: `İçinde soru sözü bulunan her cümle soru değildir; cümle bir şey sormuyorsa sonuna nokta konur.
Adım 1: I: "Nasıl da büyümüşsün!" sözünde "nasıl" soru sözü gibi görünse de teyze bir şey sormuyor, şaşkınlığını bildiriyor. Şaşma bildiren söze ünlem konur. Doğru.
Adım 2: II: Cümle yarım bırakılmış; üç nokta doğru.
Adım 3: III: Teyzenin sorusu tırnak içinde, soru işareti tırnağın içinde. Doğru.
Adım 4: IV: "hangi otobüse bineceğimi … bilmiyorum" bir soru değil, bilmediğini bildiren bir cümledir. Sonuna nokta konmalı. Yanlış burada.
Sağlama: Cümleye "evet" ya da "hayır" diye veya bir bilgiyle cevap verilebiliyor mu? IV'e cevap verilemez; bu bir bildirimdir.
Cevap D.`
},
{
  id: "tur-nk-013",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `Mahalle kütüphanesinin kapısına küçük bir not asılmıştı( ) “Ödünç aldığınız kitapları geri getirdiniz mi( )” Notun altına biri kurşun kalemle bir cümle eklemişti( ) “Geç getirdim ama sonuna kadar okudum.” Bu cümle beni hem güldürdü hem düşündürdü. Kendi çantamdaki iki haftalık gecikmiş kitabı hatırladım. Bir süre kapının önünde durup notu tekrar okudum( ) sonra kapıyı itip içeri girdim ve kitabı görevliye uzattım.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(:) (?) (;) (,)", "(,) (!) (:) (,)", "(:) (?) (:) (,)", "(:) (!) (:) (.)"],
  dogru: 2,
  hatalar: [
    "Alıntı öncesine noktalı virgül koyma: Tırnak içinde aktarılacak sözden önce iki nokta gelir.",
    "Alıntı öncesine virgül koyma ve soruyu ünlemle bitirme: Aktarılan sözden önce iki nokta konur; 'getirdiniz mi' bir sorudur.",
    null,
    "Soru ekini ve küçük harf ipucunu kaçırma: 'getirdiniz mi' sorudur; son boşluktan sonra 'sonra' küçük harfle başladığı için nokta konamaz."
  ],
  aciklama: `Başkasının sözü tırnak içinde aktarılırken sözden önce iki nokta konur; aktarılan sözün kendi işareti tırnağın içinde kalır.
Adım 1: "küçük bir not asılmıştı( ) “Ödünç…”" Ardından notun yazısı aktarılıyor: iki nokta (:).
Adım 2: “…geri getirdiniz mi( )” "mi" soru ekiyle soru: soru işareti (?).
Adım 3: "bir cümle eklemişti( ) “Geç getirdim…”" Yine aktarma: iki nokta (:).
Adım 4: "notu tekrar okudum( ) sonra kapıyı itip…" küçük harfle devam ediyor; iki sıralı cümle virgülle (,) ayrılır.
Sağlama: (:) (?) (:) (,).
Sık yapılan hata: Aynı işaretin bir metinde iki kez gelemeyeceğini sanmak. Burada iki ayrı aktarma olduğu için iki nokta iki kez kullanılır.
Cevap C.`
},
{
  id: "tur-nk-014",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `Geçen yaz ailecek Van'a(I) gittik. Gölün kıyısında 1970'lerde(II) yapılmış küçük bir otelde kaldık. Otelin sahibi, binanın bir dönem yıkılıp yerine bir AVM'nin(III) yapılmasının konuşulduğunu, mahalle halkının buna karşı çıktığını anlattı. Otel, 2011'deki(IV) depremde de hasar görmüş ama kısa sürede onarılmış. Ayrılırken otelin sahibi bize gölün en güzel gün batımının hangi tepeden izlendiğini de tarif etti.
**Bu metinde numaralanmış kesme işaretlerinden hangi ikisi aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["II ve IV", "I ve III", "I ve II", "III ve IV"],
  dogru: 0,
  hatalar: [
    null,
    "Kısaltmayı özel ad sanma: I. kesme bir şehir adına, III. kesme ise bir kısaltmaya gelen eki ayırır; kurallar ayrıdır.",
    "Şehir adını sayıyla eşleme: I. kesme özel ada, II. kesme rakamla yazılmış sayıya gelen eki ayırır.",
    "Kısaltmayı sayıyla eşleme: III. kesme kısaltmaya, IV. kesme rakamla yazılmış yıla gelen eki ayırır."
  ],
  aciklama: `Kesme işareti özel adlara, kısaltmalara ve rakamla yazılan sayılara gelen ekleri ayırmak gibi farklı görevlerde kullanılır.
Adım 1: I: "Van'a" → özel ada (şehir adına) gelen ek.
Adım 2: II: "1970'lerde" → rakamla yazılan sayıya gelen ek.
Adım 3: III: "AVM'nin" → kısaltmaya gelen ek. Ek, kısaltmanın okunuşuna (a-ve-me) uyar.
Adım 4: IV: "2011'deki" → rakamla yazılan sayıya gelen ek.
Sağlama: II ve IV'te ek, rakamla yazılmış bir sayıdan sonra geliyor.
Sık yapılan hata: Kısaltmaları özel ad saymak. TDK kısaltmalara gelen ekleri ayrı bir maddede anlatır.
Cevap A.`
},
{
  id: "tur-nk-015",
  kazanim: "T.8.4.16",
  kademe: 0,
  zorluk: 4,
  soru: `Sınıfça bir bilim fuarı hazırlayan öğrenciler, fuardan sonra okul gazetesine bir yazı gönderdi. Gazetenin editörü yazıdaki dört cümleyi işaretleyip noktalama bakımından yeniden gözden geçirilmelerini istedi:
(I) Evet biz de fuarda en çok ilgi gören standın bizimki olduğunu düşünüyoruz.
(II) Küçük kardeşim “Beni de götürün!” diye sabahtan beri tutturuyordu.
(III) Standımızı Ahmet, Elif, ve Can birlikte hazırladı.
(IV) Fuar yarın sabah saat 09.30'da; okulun spor salonunda açılacak.
**Numaralanmış cümlelerin hangisinde noktalama yanlışı __yoktur__?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Onay sözünden sonraki virgül eksikliğini görmeme: 'Evet' sözünden sonra virgül konmalıydı: 'Evet, biz de …'",
    null,
    "'ve'den önceki virgülü görmeme: 've' bağlacından önce virgül konmaz; doğrusu 'Ahmet, Elif ve Can'.",
    "Gereksiz noktalı virgülü görmeme: Zaman ve yer bildiren ögeler aynı cümlenin parçalarıdır; aralarına noktalı virgül konmaz."
  ],
  aciklama: `"Yanlışı yoktur" sorusunda üç cümlenin yanlışını tek tek bulursun; kalan cümle doğru olandır.
Adım 1: I: "Evet" onay sözüdür, ardından virgül gelmeliydi. Yanlış.
Adım 2: II: Kardeşin sözü tırnak içinde; istek ve heyecan bildirdiği için ünlemle bitmiş ve ünlem tırnağın içinde. Ardından "diye" ile cümle sürmüş. Doğru.
Adım 3: III: "Elif, ve Can" → "ve"den önce virgül konmaz. Yanlış.
Adım 4: IV: "09.30'da" doğru yazılmış ama sonrasındaki noktalı virgül yanlış. Zaman ve yer ögeleri aynı cümlenin parçalarıdır; araya noktalı virgül girmez.
Sık yapılan hata: Olumsuz kökü gözden kaçırıp ilk yanlışı bulunca o cümleyi işaretlemek. Soru, yanlışı OLMAYAN cümleyi istiyor.
Cevap B.`
}
);
