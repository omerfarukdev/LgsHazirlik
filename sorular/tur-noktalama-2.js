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
  soru: `İlçe yüzme şenliğinin son yarışı bayrak yarışıydı. Geçen yıl bu yarışı tek bir hatalı çıkış yüzünden kaybetmiştik. Tribünler ailelerle, öteki kulüplerin yüzücüleriyle dolmuştu. Çıkıştan önce antrenörümüz Sevda Hanım dördümüzü havuzun başında topladı. Sırayı bir kez daha saydı: önce Derin, sonra Kaan, ardından Elçin, en son ben.
— Arkadaşı duvara dokunmadan atlayan olursa takım elenir( ) dedi.
Kaan tedirgindi. Dokunuşu hangi hakemin izlediğini, itirazın kime yapılacağını sordu( ) Sevda Hanım elini onun omzuna koydu:
— Orasını bana bırak. Sen arkadaşının eline bak. El duvara değdi mi suya öyle atla( )
İlk üç arkadaşım yarışı ikinci sırada getirdi. Ben suya girdiğimde öndeki takımla aramızda bir kulaç vardı. Son metrelerde yetiştim, duvara neredeyse aynı anda uzandık. Elimi duvara vurduğumda kimin önce dokunduğunu ben de bilmiyordum. Soluk soluğa tabelaya döndüm ama yüzücü gözlüğüm buğulanmıştı. Tam o sırada tribünden biri avazı çıktığı kadar bağırdı( ) “Üçüncü kulvar birinci oldu!” Üçüncü kulvarda biz yüzüyorduk.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,) (?) (.) (:)", "(,) (.) (.) (:)", "(,) (.) (?) (:)", "(.) (?) (.) (;)"],
  dogru: 1,
  hatalar: ["Soru sözünü görüp soru cümlesi sanma: “hangi” ve “kime” sözleri var ama cümle bir şey sormuyor, Kaan’ın sorduğunu haber veriyor; sonuna nokta konur.", null, "Soru sormayan “mi”yi soru eki sanma: “değdi mi” burada “değince” demektir; cümle yanıt beklemez, öğüt verir ve noktayla biter.", "“dedi”den önceki sözü noktayla bitirme: konuşma çizgisiyle verilen söz “dedi” ile sürdüğü için sonuna virgül gelir; aktarılan sözden önce de noktalı virgül değil iki nokta konur. 2. boşluktaki cümle de soru sormadığı, Kaan’ın sorduğunu haber verdiği için soru işareti almaz."],
  aciklama: `Bu tür sorularda her boşluğu ayrı ayrı çöz. Boşluktan sonra gelen sözcüğe ve cümlenin gerçekten yanıt bekleyip beklemediğine bak.
Adım 1: Birinci boşluk, konuşma çizgisiyle verilen sözün sonunda ve ardından “dedi” geliyor. Tırnak içine alınmadan aktarılan söz “dedi, diye ekledi” gibi bir sözle sürüyorsa sonuna virgül konur: (,). Nokta konursa “dedi” sözcüğü açıkta kalır.
Adım 2: İkinci boşluğun bulunduğu cümlede “hangi” ve “kime” sözleri var. Ama cümle soru sormuyor; Kaan’ın soru sorduğunu haber veriyor. Yanıt beklemeyen cümlenin sonuna nokta konur: (.).
Adım 3: Üçüncü boşluktaki “değdi mi” sözü “değince” anlamındadır. Buradaki “mi” soru sormaz, zaman bildirir. Cümle bir öğüttür: (.).
Adım 4: Dördüncü boşluktan sonra tırnak içinde, tribünden bağıran kişinin sözü geliyor. Aktarılan sözden önce iki nokta konur: (:).
Sağlama: (,) (.) (.) (:) sırası yalnızca B’de var. A ikinci boşlukta, C üçüncü boşlukta soru işareti kullanıyor. D ise birinci, ikinci ve dördüncü boşlukta yanılıyor.
Sık yapılan hata: Soru sözünü ya da “mi” ekini görür görmez soru işareti koymak. Kendine “Bu cümle birinden yanıt bekliyor mu?” diye sor; beklemiyorsa soru işareti gelmez.
Cevap B.`
},
{
  id: "tur-nk-317",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Bilim kulübümüzle geçen ay bir meteoroloji istasyonunu gezdik. Öğretmenimiz bu gezi için haftalar önce randevu almıştı. İstasyonun sorumlusu Nevin Hanım,(I) otuz yıldır burada çalışıyormuş,(I) bizi önce bahçedeki ölçüm aletlerinin başına götürdü. Yağışölçeri,(II) rüzgârölçeri ve toprak termometresini tek tek tanıttı. Her alet çitle çevrili çimenlikte ayrı bir direğin üstünde duruyordu. Bizim gözümüz ise köşede duran beyaz balondaydı. Balonun işi basitti:(III) Altına bağlanan küçük kutu yükselirken havanın sıcaklığını, nemini ve basıncını ölçüp yere bildiriyordu. Bu ölçümler -(IV)hava tahminlerinin dayandığı temel veriler-(IV) dünyanın yüzlerce istasyonunda her gün aynı saatlerde yineleniyordu. Balon 25-(V)35 kilometre yüksekliğe çıkınca patlıyor, kutu da küçük bir paraşütle yere iniyordu. Nevin Hanım balonu bırakma işini bize verdi. İpi çözdüğümüzde arkadaşım Tuna heyecanla bağırdı:(VI) “Bakın, bulutlara doğru gidiyor!” Beyaz balon birkaç dakika içinde gri bulutların arasında gözden kayboldu. Dönüş yolunda hepimiz kutunun nereye ineceğini tahmin etmeye çalıştık. Tuna’ya göre kutu çoktan komşu ilin sınırını geçmişti.
**Bu metinde numaralanmış noktalama işaretleriyle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve IV numaralı işaretlerin ikisi de ara sözü cümleden ayırmıştır.", "I ve II numaralı işaretlerin ikisi de eş görevli sözcükleri ayırmıştır.", "III ve VI numaralı işaretlerin ikisi de aktarılan bir sözden önce gelmiştir.", "IV ve V numaralı işaretlerin ikisi de “ile, arasında” anlamı katmıştır."],
  dogru: 0,
  hatalar: [null, "Ara söz virgülünü sıralama virgülü sanma: I numaralı virgüller bir şey sıralamaz, “otuz yıldır burada çalışıyormuş” sözünü cümleden ayırır. Eş görevli sözcükleri ayıran II numaralı virgüldür.", "Büyük harfle başlayan açıklamayı aktarılan söz sanma: III’ten sonraki cümle kimsenin sözü değildir, “Balonun işi basitti” yargısını açıklar. Aktarılan sözden önce gelen VI numaralı iki noktadır.", "Aynı işarete aynı görevi yükleme: V numaralı çizgi iki sayı arasına “ile, arasında” anlamı katar; IV numaralı çizgiler ise araya giren sözü iki yandan ayırır."],
  aciklama: `Bir işaretin görevini biçimine bakarak değil, o cümlede ne yaptığına bakarak bulursun. Aynı işaret farklı görevler üstlenebilir; farklı iki işaret de aynı görevi yapabilir.
Adım 1: I numaralı virgüller “otuz yıldır burada çalışıyormuş” sözünü iki yandan sarıyor. Bu sözü çıkar: “Nevin Hanım bizi önce … götürdü.” Cümle bozulmuyor. Cümleye sonradan eklenen, çıkarılınca cümleyi bozmayan söze ara söz denir. Görev: ara sözü ayırma.
Adım 2: II numaralı virgül “yağışölçeri, rüzgârölçeri ve toprak termometresini” sıralamasında. Görev: eş görevli sözcükleri ayırma.
Adım 3: III numaralı iki noktadan sonra balonun işinin ne olduğu anlatılıyor. Bu, kimsenin sözü değil; önceki yargının açıklaması. VI numaralı iki noktadan sonra ise Tuna’nın tırnak içindeki sözü geliyor. Görevler farklı: açıklama ve aktarma.
Adım 4: IV numaralı çizgiler “hava tahminlerinin dayandığı temel veriler” sözünü iki yandan ayırıyor; bu söz de çıkarılınca cümle bozulmuyor. Görev: ara sözü ayırma. V numaralı çizgi “25 ile 35 kilometre arası” demek. Görev: “ile, arasında” anlamı.
Adım 5: Seçeneklere dön. B’de I yanlış, C’de III yanlış, D’de IV yanlış tanımlanmış. I ile IV ise biri virgül, öbürü kısa çizgi olduğu hâlde aynı işi yapıyor.
Sık yapılan hata: Aynı görevi yalnızca aynı işaretlerde aramak. Ara söz hem virgülle hem kısa çizgiyle ayrılabilir.
Cevap A.`
},
{
  id: "tur-nk-318",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Bir mahalle derneğinin aylık bülteninde şu haber yayımlandı:
Yıllardır beklediğimiz tramvay hattı 18. Nisan’da(I) hizmete giriyor. Hattın yapımı üç yıl sürdü. Bu sürede ana cadde iki kez trafiğe kapatıldı. Kıyı Mahallesi’ni(II) otogara bağlayan hatta on durak bulunuyor. Hat sayesinde ilçenin iki ucu arasındaki yolculuk yirmi beş dakikaya inecek. Sarıçay Ulaşım Müdürlüğü’nün(III) duyurusuna göre ilk hafta yolculuklar ücretsiz olacak. Tramvaylar her gün saat 06.00’dan(IV) gece yarısına kadar on dakikada bir kalkacak. Eski otobüs seferleri ise bir ay daha sürecek. Bisikletiyle gelenler için üç durağa bisiklet park yeri yapıldı. Derneğimizin başkanı Aysel Hanım, açılış törenine bütün komşularımızı çağırıyor ve hattın mahalleye ne kazandıracağını şöyle özetliyor: “Çarşıya, hastaneye, sahile artık tek araçla gideceğiz.” Tören sabah saat onda ilk durağın önünde başlayacak. Törene gelen çocuklara ilk yolculuk için birer hatıra bileti dağıtılacak.
Bülteni yayımlanmadan önce okuyan bir dernek üyesi, numaralanmış yerlerden bazılarında noktalama yanlışı yapıldığını fark etti.
**Buna göre bu yanlışların giderilmesi için aşağıdakilerden hangisi yapılmalıdır?**`,
  gorsel: null,
  secenekler: ["I. yerdeki kesme işareti kaldırılmalı, III. yerdeki kesme işareti de kaldırılmalıdır.", "I. yerdeki nokta kaldırılmalı, IV. yerdeki kesme işareti de kaldırılmalıdır.", "I. yerdeki nokta kaldırılmalı, III. yerdeki kesme işareti de kaldırılmalıdır.", "II. yerdeki kesme işareti kaldırılmalı, III. yerdeki kesme işareti de kaldırılmalıdır."],
  dogru: 2,
  hatalar: ["Doğru yeri bulup yanlış işareti düzeltme: I. yerde yanlış olan kesme değil noktadır. “18 Nisan” belirli bir tarihtir, ay adına gelen ek kesmeyle ayrılır; gün sayısından sonra ise nokta konmaz.", "Rakama gelen eki kurum adına gelen ekle karıştırma: “06.00’dan” doğru yazılmıştır, rakamla yazılan sayıya gelen ek kesmeyle ayrılır. Bu öneri doğru bir kesmeyi siler, III. yerdeki yanlışı da düzeltmez.", null, "Yer adını kurum adı sanma: “Kıyı Mahallesi” bir yer adıdır, eki kesmeyle ayrılır. Kesmesiz yazılması gereken, kurum adı olan “Sarıçay Ulaşım Müdürlüğü”ne gelen ektir. Bu öneri I. yerdeki noktayı da düzeltmez."],
  aciklama: `Önce numaralı dört yeri tek tek değerlendir, sonra seçeneklerdeki önerilere bak.
Adım 1: I. yer → “18. Nisan’da”. Ay adı yazıyla yazılan tarihte gün sayısından sonra nokta konmaz; doğrusu “18 Nisan’da”. Kesme ise yerinde, çünkü belirli bir tarih bildiren ay adına gelen ek kesmeyle ayrılır. Bu yerde yanlış olan noktadır.
Adım 2: II. yer → “Kıyı Mahallesi’ni”. Mahalle adı bir yer adıdır, yani özel addır. Özel ada gelen hâl eki kesmeyle ayrılır. Yanlış yok.
Adım 3: III. yer → “Sarıçay Ulaşım Müdürlüğü’nün”. Müdürlük bir kurumdur. Kurum adlarına gelen ekler kesmeyle ayrılmaz; doğrusu “Sarıçay Ulaşım Müdürlüğünün”.
Adım 4: IV. yer → “06.00’dan”. Rakamla yazılan sayılara gelen ekler kesmeyle ayrılır ve okunuşa uyar (altıdan). Yanlış yok.
Adım 5: Yapılması gereken iki iş var: I. yerdeki noktayı ve III. yerdeki kesmeyi kaldırmak. A, B ve D doğru yazılmış bir kesmeyi siliyor. İki düzeltmeyi birlikte veren seçenek C’dir.
Sık yapılan hata: Kesme gördüğün her yerde aynı kuralı aramak. “Mahallesi’ni”, “Müdürlüğü’nün” ve “06.00’dan” sözlerinin üçünde de kesme var; ama biri yer adı, biri kurum adı, biri rakamdır. Kesmeyi kaldıran şey adın kurum adı olmasıdır.
Cevap C.`
},
{
  id: "tur-nk-319",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `İlçe gençlik merkezinin kısa film atölyesi, üç aylık çalışmasını cumartesi akşamı küçük bir gösterimle tamamladı. Atölyeye katılan on dört genç bu sürede senaryo yazdı, çekim yaptı, kurgu öğrendi. Çekimlerin çoğu merkezin bahçesinde ve yakındaki parkta yapıldı. Gösterimde her biri beş dakikayı geçmeyen üç film izlendi: “Son Durak”, “Balkondaki Kedi” ve “Kuyudaki Ses”. Salonu en çok güldüren, bir apartmanın “sessiz” köpeğini anlatan ikinci filmdi. Köpek film boyunca bir an bile susmuyordu. Gösterimi yüzden fazla kişi izledi, salonda ayakta duranlar bile vardı. Filmlerin ardından sahneye çıkan atölye yürütücüsü, gençlerin ilk günkü acemiliğini gülerek anlattı. Sonra ilçe gazetesinde çıkan bir yazıdan şu bölümü okudu: “Bu gençler kamerayı ilk kez ellerine aldı (…) ama izlediklerimiz usta işi gibiydi.” Seyircilerin oylarıyla seçilen film önümüzdeki ay il şenliğinde gösterilecek. Atölyenin yeni dönemi için kayıtlar da aynı akşam başladı. İlk gün yirmi iki genç adını yazdırdı. Yeni dönemde kısa belgeseller çekilecek.
**Bu metindeki noktalama işaretleriyle ilgili aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: ["Tırnak işareti hem eser adlarını hem de özel olarak vurgulanan bir sözü göstermek için kullanılmıştır.", "İki nokta hem sıralanan örneklerden hem de aktarılan bir sözden önce kullanılmıştır.", "Virgül hem sıralı cümleleri ayırmak hem de yüklemden uzak düşen özneyi belirtmek için kullanılmıştır.", "Üç nokta hem alıntıda atlanan bölümü hem de tamamlanmamış bir cümleyi göstermek için kullanılmıştır."],
  dogru: 3,
  hatalar: ["Vurgu tırnağını gözden kaçırma: film adları eser adıdır; “sessiz” sözü ise kimseden aktarılmamıştır, köpeğin hiç susmadığını sezdirmek için özel olarak vurgulanmıştır. İki görev de metinde var.", "İki noktanın ikinci görevini aramama: “üç film izlendi” sözünden sonra örnekler sıralanır, “şu bölümü okudu” sözünden sonra ise gazeteden aktarılan söz gelir. İki görev de metinde var.", "Özneden sonraki virgülü fark etmeme: “senaryo yazdı, çekim yaptı, kurgu öğrendi” sıralı cümledir; “atölye yürütücüsü” sözünden sonraki virgül ise yüklemden uzak düşen özneyi belirtir. İki görev de metinde var.", null],
  aciklama: `Her seçenek bir işaretin iki görevini birlikte söylüyor. Seçeneğin doğru olması için iki görevin de metinde bulunması gerekir; biri eksikse o yargı söylenemez.
Adım 1: Tırnak → “Son Durak”, “Balkondaki Kedi” ve “Kuyudaki Ses” film adlarıdır (eser adı). “sessiz” sözünü kimse söylememiş; yazar, hiç susmayan köpek için bu sözü bilerek öne çıkarmış (özel vurgu). A söylenebilir.
Adım 2: İki nokta → “üç film izlendi:” sözünden sonra filmler sıralanıyor (örnek). “şu bölümü okudu:” sözünden sonra gazetedeki yazı aktarılıyor (aktarılan söz). B söylenebilir.
Adım 3: Virgül → “senaryo yazdı, çekim yaptı, kurgu öğrendi” bölümünde üç yargı sıralanıyor (sıralı cümle). “Filmlerin ardından sahneye çıkan atölye yürütücüsü,” sözünde ise özne, yüklem olan “anlattı” sözcüğünden uzak düştüğü için virgülle belirtilmiş. C söylenebilir.
Adım 4: Üç nokta → Metinde üç nokta bir kez geçiyor: gazeteden aktarılan sözün ortasında, ayraç içinde. Bu “(…)” alıntıdan bir bölümün atlandığını gösterir. Metindeki bütün cümleler ise tamamlanmış; yarım bırakılan cümle yok. D’nin ilk yarısı doğru, ikinci yarısı yanlış.
Sık yapılan hata: Bir yargının ilk yarısı doğru çıkınca gerisini denetlemeden geçmek. “Hem … hem de …” diyen seçenekte iki yarıyı da metinde tek tek bul.
Cevap D.`
},
{
  id: "tur-nk-320",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Deniz, takımıyla katıldığı robot yarışmasını anlatan bir yazı hazırladı ve yazıyı gençlik merkezinin sayfasında yayımlamadan önce üç arkadaşına okuttu:
(I) Takımımız bu yıl TÜBİTAK’ın desteklediği bölge yarışmasına ilk kez katıldı. (II) Kendi ağırlığının üç katını taşıyabilen küçük robotumuzun adı “Karınca”’ydı. (III) Hakemler her takıma aynı soruyu sordu: “Robotunuz çizgiyi kaybederse ne yapıyor.” (IV) Biz de robotumuzun sensörlerini, motorlarını, ve yazılımını hakemlere tek tek anlattık. (V) İngilizceyi en iyi konuşan arkadaşımızın yaptığı sunumdan sonra yarışmayı otuz takım arasında üçüncü sırada bitirdik.
Arkadaşları yazıdaki noktalama işaretleriyle ilgili şunları söyledi:
Irmak: II. cümlede tırnaktan sonraki kesme işareti kaldırılmalı. I. cümledeki kesme işareti ise yerinde, çünkü kısaltmaya gelen ek kesmeyle ayrılır.
Tolga: III. cümlede tırnak içindeki nokta soru işaretiyle değiştirilmeli. V. cümlede “İngilizceyi” sözcüğündeki ek de kesmeyle ayrılmalı.
Selen: IV. cümlede “ve”den önceki virgül kaldırılmalı. III. cümledeki iki nokta ise yerinde, çünkü aktarılan sözden önce iki nokta konur.
**Buna göre Deniz’in arkadaşlarından hangilerinin söylediklerinin tamamı doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız Irmak", "Irmak ve Selen", "Tolga ve Selen", "Irmak, Tolga ve Selen"],
  dogru: 1,
  hatalar: ["Selen’in sözlerini eksik değerlendirme: “ve” bağlacından önce virgül konmaz, aktarılan sözden önce de iki nokta konur. Selen’in iki sözü de doğrudur.", null, "Irmak’ı yanlış, Tolga’yı doğru sayma: tırnak içindeki söze gelen ek kesmeyle ayrılmaz, kısaltmaya gelen ek ayrılır; Irmak haklıdır. Tolga’nın ikinci sözü ise yanlıştır, “İngilizceyi” kesmesiz yazılır.", "Yarısı doğru sözü tam doğru sayma: Tolga’nın ilk sözü yerindedir ama ikincisi yanlıştır. Yapım eki almış özel ada sonradan gelen ek kesmeyle ayrılmaz (İngilizceyi, Almancayı)."],
  aciklama: `Üç arkadaşın her biri iki şey söylüyor. Sözlerinin tamamı doğru sayılsın diye ikisinin de doğru olması gerekir. Önce cümleleri kendin denetle.
Adım 1: I. cümle → “TÜBİTAK’ın”. Kısaltmalara gelen ekler kesmeyle ayrılır. Doğru.
Adım 2: II. cümle → “Karınca”’ydı. Tırnak içindeki söze gelen ek kesmeyle ayrılmaz; sözün bittiği yeri zaten tırnak gösterir. Doğrusu “Karınca”ydı. Yanlış var.
Adım 3: III. cümle → İki nokta, aktarılan sözden önce geldiği için yerinde. Ama tırnak içindeki “ne yapıyor” bir soru; sonuna nokta değil soru işareti konmalı. Yanlış var.
Adım 4: IV. cümle → “ve” bağlacından önce de sonra da virgül konmaz. Doğrusu “sensörlerini, motorlarını ve yazılımını”. Yanlış var.
Adım 5: V. cümle → “İngilizceyi”. Özel ad “-ce” yapım ekini almış; yapım ekinden sonra gelen ekler kesmeyle ayrılmaz. Doğru yazılmış.
Adım 6: Arkadaşlarının sözlerine dön. Irmak: II’deki kesme kalkmalı (doğru), I’deki kesme yerinde (doğru). Tolga: III’teki nokta soru işareti olmalı (doğru), “İngilizceyi” kesmeyle ayrılmalı (yanlış). Selen: IV’teki virgül kalkmalı (doğru), III’teki iki nokta yerinde (doğru).
Sık yapılan hata: Özel ad gördüğün her yerde eki kesmeyle ayırmak. “İngiltere’yi” yazılır ama “İngilizceyi” yazılır; araya yapım eki girince kesme kalkar.
Cevap B.`
},
{
  id: "tur-nk-321",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `(I) Avrupa-Afrika göç yolunu kullanan leylekler, ağustos ve eylül aylarında büyük sürüler hâlinde İstanbul Boğazı’nın üzerinden geçer. (II) Bu iri kuşların açık denizden uzak durmasının nedeni basittir: Kanat çırpmadan süzülebilmek için karada ısınıp yükselen havaya ihtiyaç duyarlar. (III) Göç günlerinde tepelere çıkan gözlemciler yanlarına dürbün, sayaç, defter; çocukları için de kuş kartları, boya kalemleri getirir. (IV) Göçü kırk yıldır aynı tepeden izleyen emekli öğretmen Harun Bey, bu yıl ilk büyük sürüyü ağustosun ikinci haftasında gördüğünü söylüyor. (V) Onun her sabah oturduğu taş kulübenin 1960 (?) yılında yapıldığı sanılıyor. (VI) Geçen yıl kulübeye uğrayan pek dikkatli (!) bir ziyaretçi, önünden geçen martıları leylek diye saymış.
Aşağıdaki tabloda, numaralanmış cümlelerde geçen bazı noktalama işaretlerinin o cümledeki görevi açıklanmıştır.
**Buna göre tablodaki açıklamalardan hangileri __yanlıştır__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Cümle</th><th>İşaret</th><th>Cümledeki görevi</th></tr><tr><td>I</td><td>Kısa çizgi</td><td>İki sözcük arasına “ile, arasında” anlamı katma</td></tr><tr><td>II</td><td>İki nokta</td><td>Kendisinden sonra açıklama geleceğini gösterme</td></tr><tr><td>III</td><td>Noktalı virgül</td><td>Virgülle ayrılmış takımları birbirinden ayırma</td></tr><tr><td>IV</td><td>Virgül</td><td>Ara sözü cümleden ayırma</td></tr><tr><td>V</td><td>Ayraç içindeki soru işareti</td><td>Bilginin kesin olmadığını gösterme</td></tr><tr><td>VI</td><td>Ayraç içindeki ünlem işareti</td><td>Söze şaşma ve hayranlık anlamı katma</td></tr></table>",
  secenekler: ["I ve IV", "II ve VI", "III ve V", "IV ve VI"],
  dogru: 3,
  hatalar: ["Doğru açıklamayı yanlış sayma: IV’teki açıklama gerçekten yanlıştır ama I doğrudur; “Avrupa-Afrika göç yolu” Avrupa ile Afrika arasındaki yol demektir.", "Açıklama cümlesini başka bir görev sanma: VI’daki açıklama gerçekten yanlıştır ama II doğrudur; iki noktadan sonraki cümle “nedeni basittir” yargısını açıklar.", "Az bilinen doğru kullanımları yanlış sayma: noktalı virgül virgüllü iki takımı ayırır, ayraç içindeki soru işareti de tarihin kesin olmadığını gösterir. İki açıklama da doğrudur.", null],
  aciklama: `Altı açıklamayı da cümlesiyle karşılaştır. Seçenekler ikili olduğu için tek bir yanlışı bulmak yetmez.
Adım 1: I → “Avrupa-Afrika göç yolu”, Avrupa ile Afrika arasındaki yol demek. Kısa çizgi “ile, arasında” anlamı katmış. Açıklama doğru.
Adım 2: II → İki noktadan sonra, leyleklerin neden denizden uzak durduğu anlatılıyor. İki nokta açıklamadan önce gelmiş. Açıklama doğru.
Adım 3: III → “dürbün, sayaç, defter” bir takım, “kuş kartları, boya kalemleri” başka bir takım. Kendi içinde virgülle ayrılan bu iki takımı noktalı virgül ayırmış. Açıklama doğru.
Adım 4: IV → Ara söz, cümlenin içine sonradan eklenen ve iki yanından ayrılan sözdür; çıkarılınca cümle bozulmaz. Bu cümlede tek virgül var ve araya giren bir söz yok. “Göçü kırk yıldır aynı tepeden izleyen emekli öğretmen Harun Bey” cümlenin öznesidir; yüklem olan “söylüyor” çok uzakta kaldığı için özneden sonra virgül konmuş. Açıklama yanlış.
Adım 5: V → Kulübenin yapım yılı kesin bilinmiyor, “sanılıyor”. Ayraç içindeki soru işareti bu kuşkuyu gösterir. Açıklama doğru.
Adım 6: VI → Martıları leylek diye sayan ziyaretçi dikkatli değildir. Ayraç içindeki ünlem, “dikkatli” sözüne alay anlamı katar; şaşma ya da hayranlık bildirmez. Açıklama yanlış.
Sık yapılan hata: Ayraç içindeki ünlemi cümle sonundaki ünlemle bir tutmak. Cümle sonundaki ünlem duygu bildirir; ayraç içindeki ünlem sözün tersinin kastedildiğini gösterir.
Cevap D.`
},
{
  id: "tur-nk-322",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Yaz tatilinde tuttuğum gezi defterinden:
Dün gece heyecandan doğru dürüst uyuyamamıştım. Bu sabah Bozcaada feribotunun ilk seferine yetiştik. Babam adayı yürüyerek gezmek istediği için arabayı iskelede bırakacaktı. Gişedeki görevli bunu bilmediği için bilet keserken sordu: “Aracınızın plakası( )” Babam yaya geçeceğimizi söyleyip dört bilet aldı. Feribot kıyıdan ayrılır ayrılmaz güverteye çıktım. Martılar nasıl da peşimize takılmıştı( ) Kimi direğin tepesine konuyor, kimi yolcuların attığı simit parçalarını havada kapıyordu. Tam o sırada rüzgâr şapkamı başımdan aldı. Yakalamak için korkuluğa doğru atıldım ama( ) Şapka çoktan dalgaların arasındaydı. Yarım saat sonra adanın taş kalesi göründü. Babam iki günde gezeceğimiz yerleri bir bir saydı. Bugün kaleyi, çarşıyı( ) yarın üzüm bağlarını, batı burnundaki feneri görecekmişiz. Kardeşim bunu duyunca yüzünü buruşturdu. O kadar yolu nasıl yürüyeceğini düşünüyordu herhâlde. Annem bağlara bisikletle gidebileceğimizi söyleyince rahatladı. Ben en çok feneri merak ediyorum. Babamın dediğine göre adada gün batımı en güzel oradan izlenirmiş. Akşam yemeğinden sonra iskelede oturup balıkçı teknelerini izledik. Fotoğraf makinemi şimdiden çantama koydum, pilini de az önce doldurdum.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(?) (?) (…) (;)", "(.) (!) (…) (;)", "(?) (!) (…) (;)", "(?) (!) (.) (,)"],
  dogru: 2,
  hatalar: ["Duygu bildiren cümleyi soru sanma: “nasıl” sözü var ama cümle bir şey sormuyor; martıların peşe takılmasına duyulan şaşkınlığı bildiriyor. Sonuna ünlem konur.", "Ek taşımayan soruyu bildirme cümlesi sanma: “Aracınızın plakası” sözünde soru eki de soru sözü de yok ama görevli bunu soruyor, babam da yanıtlıyor. Ek taşımayan soru da soru işareti alır.", null, "Yarım cümleyi bitmiş sayma ve takım sınırını kaçırma: “ama” ile kesilen cümle tamamlanmamıştır, sonuna nokta değil üç nokta konur. Kendi içinde virgülle ayrılan iki günün yerleri de birbirinden virgülle değil noktalı virgülle ayrılır."],
  aciklama: `Dört boşluğu sırayla çöz. Soru sözü olup olmadığına değil, cümlenin ne yaptığına bak: Soruyor mu, duygu mu bildiriyor, yarım mı kalıyor?
Adım 1: “Aracınızın plakası( )” sözünde “mi” eki de “ne, kaç” gibi bir soru sözü de yok. Ama hemen önünde “sordu” yazıyor ve babam bu söze yanıt veriyor. Ek taşımayan soru da soru işareti alır: (?).
Adım 2: “Martılar nasıl da peşimize takılmıştı( )” Bu kez tersine, cümlede “nasıl” var ama yazar kimseye bir şey sormuyor, gördüğüne şaşıyor. Şaşma, hayranlık bildiren cümlenin sonuna ünlem konur: (!).
Adım 3: “Yakalamak için korkuluğa doğru atıldım ama( )” Cümle “ama” sözünde kesiliyor, ne olduğu söylenmiyor; sonraki sözcük de büyük harfle başlıyor. Tamamlanmamış cümlenin sonuna üç nokta konur: (…). Nokta, bitmiş cümlenin işaretidir.
Adım 4: “Bugün kaleyi, çarşıyı( ) yarın üzüm bağlarını, batı burnundaki feneri…” İki günün gezilecek yerleri kendi içinde virgülle ayrılmış. Virgülle ayrılmış takımları birbirinden noktalı virgül ayırır: (;). Buraya da virgül konursa hangi yerin hangi güne ait olduğu karışır.
Sağlama: (?) (!) (…) (;) sırası yalnızca C’de var. A ikinci boşlukta, B birinci boşlukta, D son iki boşlukta yanılıyor.
Sık yapılan hata: Birinci ve ikinci boşluğu soru sözüne bakarak doldurmak. Soru sözü olmayan söz soru olabilir (Aracınızın plakası?), soru sözü olan cümle de soru olmayabilir (Martılar nasıl da peşimize takılmıştı!).
Cevap C.`
},
{
  id: "tur-nk-323",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Amcam geçen ay bize eski bir daktilo getirdi. Makineyi bodrumdaki bir sandıkta bulmuş. Üstü tozla kaplıydı ama tuşlardaki harfler hâlâ okunuyordu. Dedem gençliğinde bir yerel gazetede çalışırmış. O,(I) daktiloyu kırk yıl boyunca çalışma masasından hiç ayırmamış. Makine bize geldiğinde tuşların yarısı takılıyordu,(II) şeridi de çoktan kurumuştu. Kardeşim Emre daktiloyu onarmaya karar verdi. Yedek parça bulmanın çok zor olacağını söyledik. Bu,(III) onu hiç yıldırmadı. Hafta sonu çarşıdaki yaşlı saat tamircisinin dükkânına gitti. Tamirciye tuşları,(IV) kolu ve vidaları tek tek söktürüp temizletti. Yeni şeridi de uzun aramalardan sonra internette buldu. Paket perşembe günü öğleden sonra geldi. Emre akşam ilk mektubunu yazıp babaanneme uzattı. O,(V) mektubu iki kez okudu. Mektup dedemin ağzından yazılmıştı ve “Sevgili Hatice” diye başlıyordu. Babaannem önce güldü, sonra gözlüğünü çıkarıp gözlerini sildi. Daktilo şimdi salonda, dedemin fotoğrafının altında duruyor. Emre her pazar babaanneme yeni bir mektup yazıyor. Babaannem mektupları küçük bir kutuda biriktiriyor.
**Bu metinde numaralanmış virgüllerle ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Özne olan zamirden sonra konan I ve V numaralı virgüller kaldırılırsa cümlelerin anlamı değişir.", "Özne olan zamirden sonra konan I ve III numaralı virgüller kaldırılırsa cümlelerin anlamı değişir.", "Sıralı cümleleri ayıran II ve IV numaralı virgüller kaldırılırsa cümlelerin anlamı değişmez.", "Özne olan zamirden sonra konan III ve V numaralı virgüller kaldırılırsa cümlelerin anlamı değişmez."],
  dogru: 0,
  hatalar: [null, "Kuralı yarım uygulama: “bu, şu, o”dan sonraki her virgülü anlamı değiştiren virgül sayma. III’te “bu”dan sonra bir ad gelmiyor; “bu onu” diye bir öbek kurulamayacağı için virgül kalksa da “bu” özne olarak kalır.", "Benzer görünen iki görevi karıştırma: II sıralı cümleleri ayırır ama IV eş görevli sözcükleri (tuşları, kolu, vidaları) ayırır. Yargının görevle ilgili yarısı yalnızca II için doğrudur.", "Kısmen doğru: III kalkınca anlam değişmez ama V kalkınca değişir. “O mektubu iki kez okudu.” cümlesinde “o” artık babaannemi göstermez, mektubu niteler; okuyan da Emre gibi anlaşılır."],
  aciklama: `Her virgül için iki şeye bak: Görevi ne, kaldırılınca cümlenin anlamı değişiyor mu? Zamir, bir adın yerini tutan sözcüktür. Özne olan “bu, şu, o” zamirlerinden sonra virgül konur; konmazsa zamir, kendisinden sonraki adı niteleyen bir sıfat gibi okunabilir.
Adım 1: I → “O, daktiloyu kırk yıl boyunca … ayırmamış.” “O” dedemin yerini tutuyor ve cümlenin öznesi. Virgülü kaldır: “O daktiloyu … ayırmamış.” Artık “o”, “daktilo” adını niteliyor; cümle “o daktilo”dan söz ediyor ve işi yapanı söylemiyor. Görev: özne olan zamirden sonra. Anlam değişir.
Adım 2: II → “Tuşların yarısı takılıyordu, şeridi de çoktan kurumuştu.” İki ayrı yargı var. Görev: sıralı cümleleri ayırma. Virgül kalksa da iki yargı aynı kalır. Anlam değişmez.
Adım 3: III → “Bu, onu hiç yıldırmadı.” “Bu” özne olan bir zamir. Ama ardından bir ad gelmiyor, “onu” geliyor; “bu onu” diye bir öbek kurulamaz. Virgül kalksa da “bu” özne olarak kalır. Görev: özne olan zamirden sonra. Anlam değişmez.
Adım 4: IV → “Tamirciye tuşları, kolu ve vidaları … temizletti.” Temizletilen üç şey sıralanıyor; ortada tek yargı var. Görev: eş görevli sözcükleri ayırma. Bu virgül sıralı cümleleri ayırmıyor.
Adım 5: V → “O, mektubu iki kez okudu.” “O” babaannemin yerini tutuyor. Virgülü kaldır: “O mektubu iki kez okudu.” Artık “o mektup” deniyor; okuyan da bir önceki cümlenin öznesi olan Emre gibi anlaşılıyor. Görev: özne olan zamirden sonra. Anlam değişir.
Adım 6: Seçeneklere dön. B’de III, D’de V yanlış değerlendirilmiş. C’de IV’ün görevi yanlış verilmiş. I ve V için söylenenlerin ikisi de doğru.
Sık yapılan hata: “Bu, şu, o” sözcüklerinden sonraki her virgülü anlamı değiştiren virgül saymak. Asıl bakman gereken, zamirden hemen sonra onun niteleyebileceği bir ad gelip gelmediğidir: “o mektup” olur, “bu onu” olmaz.
Cevap A.`
},
{
  id: "tur-nk-324",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ilçe gazetesinin “Mesleğim” köşesinde bu hafta, hayvanları iyileştirmeye yıllarını vermiş bir veteriner hekim tanıtıldı. Yazının yayımlanmadan önceki hâlinden alınan altı cümle şöyledir:
(I) Çarşının girişindeki küçük klinikte yirmi yıldır aralıksız çalışan Selma Hanım; ilçedeki hayvanseverlerin zor günde ilk aradığı kişi oluyor.
(II) Mahalleli; sabırlı, soğukkanlı, güler yüzlü bu hekime sokakta bulduğu yaralı ya da hasta hayvanları gözü kapalı emanet ediyor.
(III) Kliniğin en yaşlı hastasını (on yedi yaşında bir tekir) aşıları ve kontrolleri için her ayın ilk haftasında on bir yaşındaki sahibi Elif getiriyor.
(IV) Elif her gelişinde kedisinin kaç yıl daha yaşayacağını soruyor, aldığı cevap ise hiç değişmiyor: “Onu ne kadar seversen o kadar yaşar”.
(V) Klinik sabah 08.30’da açılıyor ama gece yarısı bir köyden telefon gelince veteriner hekim çantasını kapıp hiç söylenmeden yola düşüyor.
(VI) Selma Hanım hafta içi klinikte kedi, köpek, kuş; hafta sonu çevredeki köylerde inek, koyun, keçi tedavi ediyor.
**Buna göre numaralanmış cümlelerin hangilerinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve IV", "II ve IV", "III ve VI"],
  dogru: 1,
  hatalar: ["Kuralı yarım uygulama: özneden sonraki her noktalı virgülü yanlış sayma. I gerçekten yanlıştır ama II doğrudur; özneden sonra virgülle sıralanan eş değer sözler (sabırlı, soğukkanlı, güler yüzlü) geldiği için noktalı virgül konabilir. IV’teki yanlış da gözden kaçmıştır.", null, "İki noktalı virgülü ters değerlendirme: IV gerçekten yanlıştır ama II doğrudur. Yanlış olan I’dir, çünkü orada özneden sonra virgülle sıralanan sözler gelmiyor.", "Az bilinen doğru kullanımları yanlış sayma: ayraçtan önceki söze gelen ek ayraçtan önce yazılır (hastasını), virgüllü iki takımın arasına da noktalı virgül konur. İki cümle de doğrudur."],
  aciklama: `Altı cümleyi de tek tek denetle. Bu soruda yanlışlar göze batmıyor; doğru cümlelerin bazıları da ilk bakışta yanlış gibi duruyor.
Adım 1: I → Özneden (“… çalışan Selma Hanım”) sonra noktalı virgül var. Bu işaret özneden sonra ancak ardından virgülle sıralanan eş değer sözler geliyorsa konabilir. Burada öyle bir sıralama yok; cümlede başka virgül bile yok. Özne yüklemden uzak düştüğü için buraya noktalı virgül değil virgül konmalıydı. Yanlış var.
Adım 2: II → Yine özneden (“Mahalleli”) sonra noktalı virgül var. Ama bu kez ardından virgülle sıralanan eş değer sözler geliyor: “sabırlı, soğukkanlı, güler yüzlü”. Noktalı virgül öznenin nerede bittiğini gösteriyor. Yanlış yok.
Adım 3: III → Ayraç, “hasta” sözüyle ilgili ek bilgi veriyor. Ayraçtan önceki söz ek alacaksa ek ayraçtan önce yazılır: “hastasını (on yedi yaşında bir tekir)”. Yanlış yok.
Adım 4: IV → “soruyor” sözcüğü soru bildirmez, Elif’in sorduğunu haber verir; virgül ve iki nokta yerinde. Ama aktarılan cümlenin kendi noktası tırnağın içinde kalmalıydı: “Onu ne kadar seversen o kadar yaşar.” Nokta tırnağın dışına konmuş. Yanlış var.
Adım 5: V → “08.30’da” doğru: Rakama gelen ek kesmeyle ayrılır ve okunuşa uyar (otuzda). “gelince” sözünden sonra virgül olmaması da doğru; tek başına duran zarf-fiilden sonra virgül konmaz. Yanlış yok.
Adım 6: VI → “kedi, köpek, kuş” ile “inek, koyun, keçi” kendi içinde virgülle ayrılan iki takımdır; aralarına noktalı virgül konmuş. Yanlış yok.
Sık yapılan hata: I ile II’yi aynı saymak. İkisinde de noktalı virgül özneden sonra gelmiş; farkı yaratan, ardından virgülle sıralanan sözlerin gelip gelmemesidir.
Cevap B.`
},
{
  id: "tur-nk-325",
  kazanim: "T.8.4.16",
  kademe: 3,
  zorluk: 4,
  soru: `Bir doğa sporları kulübü, üyelerine şu duyuruyu gönderdi:
Sevgili gençler,(I) kulübümüzün bahar oryantiring şenliği bu yıl 5.(II) kez düzenleniyor. Geçen yıl yüz yirmi yarışmacının katıldığı şenliğe bu yıl daha çok başvuru bekliyoruz. Bu sporda yarışmacılar, harita ve pusula yardımıyla arazideki hedef noktalarını en kısa sürede bulmaya çalışır. Şenlik 23 Mayıs’ta Kartepe’nin eteklerindeki ormanda yapılacak. Sabah yeni başlayanlara harita okuma eğitimi verilecek, öğleden sonra takımlar yarışacak. Başvurular kulüp binamızda alınıyor. Adresimiz: Ihlamur Sokağı No.: 6 Kartepe /(III) KOCAELİ. Katılmak isteyenlerin 15.(IV)05.2027 tarihine kadar gelip adını yazdırması gerekiyor. Yürüyüş ayakkabısı, yağmurluk ve su matarası getirmeyi unutmayın. Haritaları ve pusulaları kulübümüz dağıtacak. Yarışmanın sonunda her takıma katılım belgesi verilecek.
Duyuruyu okuyan dört genç, numaralanmış işaretlerle ilgili birer değişiklik önerdi:
Arda: I numaralı virgülün yerine iki nokta konabilir.
Bora: II numaralı nokta kaldırılıp sayıya kesme işaretiyle “-inci” eki getirilebilir.
Cenk: III numaralı eğik çizginin yerine kısa çizgi konabilir.
Duru: IV numaralı tarihteki noktaların yerine eğik çizgi konabilir.
**Buna göre hangi gençlerin önerisi uygulanırsa duyuruda noktalama yanlışı __yapılmamış__ olur?**`,
  gorsel: null,
  secenekler: ["Arda ve Cenk", "Arda ve Duru", "Bora ve Duru", "Bora ve Cenk"],
  dogru: 2,
  hatalar: ["İki yanlış öneriyi doğru sayma: seslenmeden sonra iki nokta değil virgül konur. Adreste semt ile ili eğik çizgi ayırır; kısa çizgi iki adın arasına “ile, arasında” anlamı katar, semtin hangi ilde olduğunu göstermez.", "Yarısı doğru: Duru’nun önerisi yerindedir ama Arda’nınki yanlıştır. Seslenme sözünden sonra iki nokta konmaz; iki nokta açıklamadan ya da aktarılan sözden önce gelir.", null, "Yarısı doğru: Bora’nın önerisi yerindedir ama Cenk’inki yanlıştır. Adreste semtin hangi ilde olduğunu eğik çizgi gösterir; kısa çizgi bu görevi üstlenemez."],
  aciklama: `Bazı görevleri iki ayrı işaret de yerine getirebilir; bazı görevleri ise tek bir işaret yapar. Dört öneriyi sırayla dene.
Adım 1: Arda → “Sevgili gençler,” bir seslenmedir. Seslenmeden sonra virgül konur. İki nokta ise açıklamadan ya da aktarılan sözden önce gelir; burada ikisi de yok. Öneri yanlış.
Adım 2: Bora → “5. kez” sözündeki nokta sıra bildirir. Sıra sayısı iki yolla yazılabilir: sayıdan sonra nokta konur (5.) ya da sıra eki kesmeyle ayrılarak yazılır (5’inci). İkisi birlikte kullanılmaz. Nokta kaldırılıp “5’inci kez” yazılırsa yanlış olmaz. Öneri doğru.
Adım 3: Cenk → “Kartepe / KOCAELİ” bir adresin sonudur. Adreste semt ile il arasına eğik çizgi konur; bu çizgi semtin hangi ilde olduğunu gösterir. Kısa çizgi ise iki adın arasına “ile, arasında” anlamı katar (Kartepe-Kocaeli yolu gibi). Adreste eğik çizginin yerini tutamaz. Öneri yanlış.
Adım 4: Duru → “15.05.2027” tek bir günü gösteren tarihtir. Tarihte gün, ay ve yıl noktayla da eğik çizgiyle de ayrılabilir: 15/05/2027. Öneri doğru.
Adım 5: Doğru öneriler Bora ile Duru’nundur.
Sık yapılan hata: Kısa çizgi ile eğik çizgiyi birbirinin yerine kullanmak. Cenk de Duru da bir işareti başka bir çizgiyle değiştiriyor; ama eğik çizgi tarihte noktanın yerini tutabilirken kısa çizgi adreste eğik çizginin yerini tutamaz.
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
