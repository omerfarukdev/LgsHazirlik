// Türkçe — Noktalama İşaretleri: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
// Kural kaynağı: TDK Yazım Kılavuzu, "Noktalama İşaretleri" (tdk.gov.tr). Kesme işareti de bu başlık altında sorulur.
// Gösterim: noktalama sorularında gerçek LGS'deki gibi boş yer yay ayraçla ( ) gösterilir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["noktalama"] = window.LGS_BANK["noktalama"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "tur-nk-101",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `Tamam( ) sergi afişlerini bu akşam ben asarım.
**Bu cümlede yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(.)", "(,)", "(:)", "(;)"],
  dogru: 1,
  hatalar: [
    "Küçük harfi gözden kaçırma: nokta cümleyi bitirir; ardından gelen “sergi” küçük harfle başladığı için cümle burada bitmiyor.",
    null,
    "Açıklama sanma: iki nokta, ardından açıklama ya da örnek gelecekse konur; “Tamam” sözü bir açıklama başlatmıyor, yalnızca kabul bildiriyor.",
    "Noktalı virgülü duraklama işareti sanma: noktalı virgül, içinde virgül bulunan sıralı cümleleri ya da takımları ayırır; tek bir kabul sözünden sonra kullanılmaz."
  ],
  aciklama: `Kural: Kendisinden sonraki cümleye bağlı olarak kabul, ret ya da teşvik bildiren “evet, hayır, peki, tamam, olur, haydi” gibi sözlerden sonra virgül konur.
Adım 1: “Tamam” sözü ne bildiriyor? Bir öneriyi kabul ettiğini. Kendi başına bir cümle değil, arkasından gelen cümleye bağlanıyor.
Adım 2: Arkasından gelen söze bak: “sergi” küçük harfle başlıyor. Demek ki cümle bitmiyor; nokta olamaz.
Adım 3: İki nokta ve noktalı virgülün bu kullanımda bir görevi yok. Kabul sözünü cümleden ayıran işaret virgüldür: “Tamam, sergi afişlerini bu akşam ben asarım.”
Sağlama: Aynı kural “Peki, gideriz.” ya da “Olur, ben de gelirim.” cümlelerinde de işler.
Cevap B.`
},
{
  id: "tur-nk-102",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `Okul bahçesine dikilen fidanları bu hafta kimin sulayacağını öğrendin mi( )
**Bu cümlenin sonuna aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(.)", "(!)", "(…)", "(?)"],
  dogru: 3,
  hatalar: [
    "Soru ekini gözden kaçırma: cümle “mi” soru ekiyle bitiyor ve yanıt bekliyor; nokta bildirme cümlelerine konur.",
    "Duygu cümlesi sanma: ünlem sevinç, şaşma, korku gibi duyguları ya da seslenmeyi bildirir; bu cümle bir duygu değil, bir soru bildiriyor.",
    "Yarım cümle sanma: üç nokta anlatımı tamamlanmamış cümlelere konur; bu cümle yüklemiyle tamamlanmış bir sorudur.",
    null
  ],
  aciklama: `Kural: Soru eki (mı, mi, mu, mü) ya da soru sözü içeren ve karşıdakinden yanıt bekleyen cümlelerin sonuna soru işareti konur.
Adım 1: Cümlenin yüklemine bak: “öğrendin mi”. Yüklemde “mi” soru eki var.
Adım 2: Cümle karşıdakinden bir yanıt bekliyor: “Evet, öğrendim.” ya da “Hayır.” Bu, gerçek bir sorudur.
Adım 3: Gerçek sorunun sonuna soru işareti konur.
Sık yapılan hata: Cümlenin içindeki “kimin” sözüne takılıp soruyu orada aramak. Soru işareti cümlenin sonuna, bütün cümle için konur.
Cevap D.`
},
{
  id: "tur-nk-103",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `Eyvah, otobüsün kalkmasına yalnızca iki dakika kalmış( )
**Bu cümlenin sonuna aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(!)", "(?)", "(:)", "(;)"],
  dogru: 0,
  hatalar: [
    null,
    "Soru sanma: cümlede soru eki ya da soru sözü yok; konuşan kişi bir şey sormuyor, telaşını dile getiriyor.",
    "Açıklama beklentisi: iki nokta, ardından açıklama ya da örnek gelecekse konur; cümle burada bitiyor.",
    "Noktalı virgülü cümle sonu sanma: noktalı virgül cümleyi bitirmez, cümle içindeki takımları ya da sıralı cümleleri ayırır."
  ],
  aciklama: `Kural: Sevinç, kıvanç, acı, korku, şaşma gibi duyguları anlatan cümlelerin sonuna ünlem işareti konur.
Adım 1: Cümledeki duyguyu bul. “Eyvah” sözü telaş ve korku bildirir; konuşan kişi otobüsü kaçırmaktan korkuyor.
Adım 2: Cümle bir soru değil; soru eki ya da soru sözü içermiyor. Soru işareti elenir.
Adım 3: İki nokta ve noktalı virgül cümle sonuna konmaz. Duyguyu anlatan cümlenin sonuna ünlem gelir.
Sağlama: “Vah vah!”, “Ne kadar da sıcak!” gibi cümleler de aynı kurala uyar.
Cevap A.`
},
{
  id: "tur-nk-104",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde nokta, sıra bildirmek için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Sınav sabah 09.40’ta başladı.",
    "Nüfus kaydımda doğum tarihim 07.05.2013 yazıyor.",
    "Mahallemizdeki 4. Sokak yeniden asfaltlandı.",
    "Bu kitabın yazarı Prof. Nermin Aksoy’dur."
  ],
  dogru: 2,
  hatalar: [
    "Saati sıra sanma: “09.40” içindeki nokta saat ile dakikayı birbirinden ayırır; bir sıra bildirmez.",
    "Tarihi sıra sanma: “07.05.2013” içindeki noktalar gün, ay ve yılı birbirinden ayırır.",
    null,
    "Kısaltmayı sıra sanma: “Prof.” sözündeki nokta, “profesör” sözünün kısaltıldığını gösterir."
  ],
  aciklama: `Kural: Sayılardan sonra konan nokta sıra bildirir: 3. (üçüncü), 15. (on beşinci), 2. Cadde, 20. Sokak gibi.
Adım 1: Her cümledeki noktayı okumayı dene. “4. Sokak” sözü “dördüncü sokak” diye okunur; nokta sayıyı sıra sayısına çevirmiş.
Adım 2: “09.40” saat bildirir: dokuzu kırk geçe. Nokta saat ile dakikayı ayırır.
Adım 3: “07.05.2013” tarih bildirir. Noktalar gün, ay ve yılı ayırır. “Prof.” ise kısaltmadır.
Sağlama: Sıra bildiren noktayı “-ıncı, -inci” diye okuyabilirsin: dördüncü sokak. Öbür örneklerde bu okuma olmaz.
Cevap C.`
},
{
  id: "tur-nk-105",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde kesme işaretinin kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Yaz tatilinde ailecek Trabzon’a gittik.",
    "Ödevimi Mert’le birlikte hazırladım.",
    "Geçen ay Çınar Gönüllüleri Derneği’ne üye oldum.",
    "Ablam üniversiteyi 2019’da bitirdi."
  ],
  dogru: 2,
  hatalar: [
    "Yer adını kurum adı sanma: “Trabzon” bir şehir adıdır; özel ada gelen ek kesmeyle ayrılır, bu kullanım doğrudur.",
    "Kişi adına gelen eki kesmesiz sanma: “Mert” bir kişi adıdır; “-le” eki kesmeyle ayrılır, bu kullanım doğrudur.",
    null,
    "Sayıya gelen eki kesmesiz sanma: rakamla yazılan sayılara gelen ekler kesmeyle ayrılır; “2019’da” doğrudur."
  ],
  aciklama: `Kural: Kişi, yer, ülke gibi özel adlara ve rakamla yazılan sayılara gelen ekler kesme işaretiyle ayrılır. Ancak kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesmeyle ayrılmaz.
Adım 1: A’da “Trabzon” şehir adıdır: “Trabzon’a” doğru. B’de “Mert” kişi adıdır: “Mert’le” doğru.
Adım 2: D’de ek, rakamla yazılmış bir sayıya gelmiş: “2019’da” doğru.
Adım 3: C’de “Çınar Gönüllüleri Derneği” bir kuruluş adıdır. Kuruluş adına gelen ek kesmesiz, bitişik yazılır: “Çınar Gönüllüleri Derneğine”.
Sık yapılan hata: Büyük harfle başlayan her ada kesme koymak. Kurum ve kuruluş adları büyük harfle yazılır ama ekleri kesmeyle ayrılmaz: Türk Dil Kurumuna, Bakanlar Kuruluna.
Cevap C.`
},
{
  id: "tur-nk-106",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `Doğa yürüyüşü için çantama şunları koydum( ) su, şapka, harita ve el feneri.
**Bu cümlede yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(:)", "(,)", "(;)", "(…)"],
  dogru: 0,
  hatalar: [
    null,
    "Sıralamanın başladığını fark etmeme: virgül eş görevli sözleri birbirinden ayırır; “şunları” sözünden sonra gelecek örnekleri haber veren işaret değildir.",
    "Noktalı virgülü iki nokta ile karıştırma: noktalı virgül takımları ya da sıralı cümleleri ayırır; ardından örnek geleceğini göstermez.",
    "Yarım bırakma sanma: üç nokta, anlatımı tamamlanmamış sözlere konur; burada söz yarım bırakılmıyor, tam tersine örneklerle sürüyor."
  ],
  aciklama: `Kural: Kendisinden sonra örnek verilecek ya da açıklama yapılacak cümlenin sonuna iki nokta konur.
Adım 1: “şunları koydum” sözü okuru bekletir: Neleri? Bu söz, arkasından bir sıralama geleceğini haber veriyor.
Adım 2: Arkasından gelenler (su, şapka, harita ve el feneri) “şunları” sözünün örnekleridir.
Adım 3: Örnekleri başlatan işaret iki noktadır: “Çantama şunları koydum: su, şapka, harita ve el feneri.”
Sağlama: “şu, şunlar, şöyle” gibi sözler çoğu zaman iki noktanın habercisidir.
Cevap A.`
},
{
  id: "tur-nk-107",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde tırnak işareti, başkasının sözünü olduğu gibi aktarmak için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Okulumuzun “temiz sınıf” yarışması bu ay başladı.",
    "Bu hafta “Kış Masalları” adlı kitabı okudum.",
    "Gazetede “Yaz Şenliği Başlıyor” başlıklı haberi gördük.",
    "Öğretmenimiz “Deneyden önce gözlüklerinizi takın.” dedi."
  ],
  dogru: 3,
  hatalar: [
    "Vurguyu aktarma sanma: “temiz sınıf” sözü kimseden aktarılmamış; yazar bu sözü özel olarak vurgulamak için tırnağa almış.",
    "Eser adını aktarma sanma: “Kış Masalları” bir kitabın adıdır; eser adları tırnak içine alınabilir ama bu bir aktarma değildir.",
    "Başlığı aktarma sanma: “Yaz Şenliği Başlıyor” bir haberin başlığıdır; yazı başlıkları da tırnağa alınır ama kimsenin sözü değildir.",
    null
  ],
  aciklama: `Kural: Tırnak işaretinin üç görevi vardır: başkasının sözünü olduğu gibi aktarmak, bir sözü özel olarak vurgulamak ve cümle içinde eser, yazı adlarını belirtmek.
Adım 1: Her tırnağın içine bak ve sor: Bu sözü biri söylemiş mi?
Adım 2: D’de tırnak içindeki cümleyi öğretmen söylemiş; arkasından gelen “dedi” sözü de bunu gösteriyor. Söz değiştirilmeden aktarılmış.
Adım 3: A’da tırnak bir sözü vurguluyor, B’de kitap adını, C’de haber başlığını gösteriyor. Bunların hiçbiri birinin sözü değil.
Sağlama: Aktarılan sözden sonra çoğu zaman “dedi, diye sordu, diye bağırdı” gibi bir söyleme sözü gelir.
Cevap D.`
},
{
  id: "tur-nk-108",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `Pazardan domates, biber, patlıcan ve kabak aldık.
**Bu cümlede virgül hangi görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Hitap sözünden sonra gelme",
    "Eş görevli sözcükleri ayırma",
    "Ara sözü cümleden ayırma",
    "Sıralı cümleleri ayırma"
  ],
  dogru: 1,
  hatalar: [
    "Hitabı yanlış yerde arama: cümlede kimseye seslenilmiyor; “domates” bir hitap sözü değildir.",
    null,
    "Ara söz sanma: ara söz cümlenin arasına sonradan eklenen açıklamadır; burada sayılanların hepsi aynı nesnenin parçasıdır.",
    "Sözcüğü cümle sanma: cümlede tek yüklem (“aldık”) var; virgüller cümleleri değil, sözcükleri ayırıyor."
  ],
  aciklama: `Kural: Birbiri ardınca sıralanan eş görevli sözcük ve söz öbeklerinin arasına virgül konur; son ikisinin arasına “ve” gelirse virgül konmaz.
Adım 1: Yüklemi bul: “aldık”. Sor: “Ne aldık?”
Adım 2: Yanıt: domates, biber, patlıcan, kabak. Dördü de aynı soruya yanıt veriyor; yani cümlede aynı görevi üstleniyor.
Adım 3: Aynı görevdeki sözcükleri ayıran virgül, eş görevli sözcükleri ayırma görevindedir.
Sık yapılan hata: Tek yüklemli bir cümlede virgülü sıralı cümle virgülü sanmak. Sıralı cümle için her bölümün kendi yüklemi olmalıdır.
Cevap B.`
},
{
  id: "tur-nk-109",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `Yeni açılan Ankara( )Eskişehir hızlı tren hattında her gün altı sefer yapılıyor.
**Bu cümlede yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(-)", "(/)", "(:)", "(,)"],
  dogru: 0,
  hatalar: [
    null,
    "Eğik çizgiyi “arasında” sanma: eğik çizgi adreslerde, yan yana yazılan dizelerde ve tarihlerde kullanılır; iki şehir arasını göstermez.",
    "İki noktayı bağlantı işareti sanma: iki nokta açıklama ya da örnek başlatır; iki yer adını birbirine bağlamaz.",
    "Virgülle sıralama sanma: virgül koyarsan iki ayrı şehir sayılmış olur; oysa söz konusu olan iki şehir arasındaki tek bir hattır."
  ],
  aciklama: `Kural: “arasında, ile, …-den …-e” anlamlarını vermek için sözcükler ya da sayılar arasına kısa çizgi konur: Aydın-İzmir yolu, 09.30-10.30 gibi.
Adım 1: Cümlede anlatılan şey ne? Ankara ile Eskişehir arasında giden tek bir tren hattı.
Adım 2: “Ankara’dan Eskişehir’e” ya da “Ankara ile Eskişehir arasındaki” anlamını veren işaret kısa çizgidir.
Adım 3: Yazılışı: “Ankara-Eskişehir hızlı tren hattı”.
Sağlama: “Türk-Alman ilişkileri”, “İstanbul-Bursa otobüsü” gibi örneklerde de kısa çizgi “arasında” anlamı taşır.
Cevap A.`
},
{
  id: "tur-nk-110",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `( ) Kütüphane cumartesi günü açık mı?
( ) Evet, öğlene kadar açık.
**Bu karşılıklı konuşmada satır başlarına aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(:)", "(;)", "(…)", "(—)"],
  dogru: 3,
  hatalar: [
    "İki noktayı satır başına taşıma: iki nokta, konuşmadan önceki ifadenin sonuna konur; konuşma satırının başına konmaz.",
    "Noktalı virgülü konuşma işareti sanma: noktalı virgülün karşılıklı konuşmalarda böyle bir görevi yoktur.",
    "Üç noktayı konuşma işareti sanma: üç nokta, konuşmalarda eksik bırakılan cevaplarda kullanılır; satır başındaki konuşmayı göstermez.",
    null
  ],
  aciklama: `Kural: Yazıda satır başına alınan konuşmaları göstermek için uzun çizgi (—) kullanılır. Buna konuşma çizgisi de denir.
Adım 1: Metin iki kişinin karşılıklı konuşması: biri soruyor, öbürü yanıtlıyor. Her konuşma yeni bir satırdan başlıyor.
Adım 2: Satır başına alınan her konuşmanın önüne konuşma çizgisi konur:
— Kütüphane cumartesi günü açık mı?
— Evet, öğlene kadar açık.
Adım 3: Öbür işaretlerin satır başında böyle bir görevi yoktur.
Sık yapılan hata: Uzun çizgi ile kısa çizgiyi karıştırmak. Kısa çizgi (-) “arasında” anlamı verir ya da sözcük böler; konuşmayı uzun çizgi gösterir.
Cevap D.`
},
{
  id: "tur-nk-111",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `Zarfın üstüne adresi şöyle yazdım: Kırlangıç Sokağı No.: 8( )2 Merkez / Bolu
**Bu adreste yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(-)", "(:)", "(/)", "(.)"],
  dogru: 2,
  hatalar: [
    "Kısa çizgiyi adreste kullanma: kısa çizgi “arasında” anlamı verir; bina ile daire numarasını birbirinden ayırmak için kullanılmaz.",
    "İki noktayı numara ayracı sanma: “No.:” sözünden sonra zaten iki nokta var; bina ile daire numarası arasına iki nokta konmaz.",
    null,
    "Noktayı adrese taşıma: sayılar arasındaki nokta tarih, saat ya da büyük sayılarda kullanılır; “8.2” yazılırsa ne olduğu anlaşılmaz."
  ],
  aciklama: `Kural: Adres yazarken apartman numarası ile daire numarası arasına ve semt ile şehir arasına eğik çizgi (/) konur.
Adım 1: “No.: 8( )2” bölümünde iki sayı var: 8 binanın numarası, 2 dairenin numarası.
Adım 2: Bu iki numarayı ayıran işaret eğik çizgidir: “No.: 8/2”.
Adım 3: Adresin sonundaki “Merkez / Bolu” bölümü de aynı kuralı gösteriyor: semt ile şehir arasında da eğik çizgi var.
Sağlama: TDK’nin örneğindeki “No.: 21/6” yazılışı da bu biçimdedir.
Cevap C.`
},
{
  id: "tur-nk-112",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdakilerin hangisinde yay ayraç, cümlenin anlamını tamamlayan ek bir bilgiyi göstermek için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "“Damlaya damlaya göl olur.” (Atasözü)",
    "Babaannemin köyü (Giresun’a bağlı küçük bir köy) yazın kalabalıklaşır.",
    "Kasabadaki taş köprünün 1580 (?) yılında yapıldığı sanılıyor.",
    "Yaşlı Kadın — (Pencereyi açar.) Ne güzel bir sabah!"
  ],
  dogru: 1,
  hatalar: [
    "Kaynağı ek bilgi sanma: “(Atasözü)” sözü cümlenin içindeki bir bilgiyi tamamlamıyor; alıntının nereden alındığını gösteriyor.",
    null,
    "Şüpheyi ek bilgi sanma: ayraç içindeki soru işareti, yılın kesin olmadığını gösterir; bir açıklama eklemez.",
    "Oyun yönergesini ek bilgi sanma: tiyatro metinlerinde ayraç, konuşan kişinin hareketini gösterir."
  ],
  aciklama: `Kural: Yay ayraç, cümledeki anlamı tamamlayan ve cümlenin dışında kalan ek bilgiler için kullanılır. Ayraç içindeki söz çıkarılsa da cümle eksik kalmaz.
Adım 1: B’de ayraç içindeki söz, “köy” hakkında ek bir bilgi veriyor: Giresun’a bağlı küçük bir köy. Ayracı çıkarınca cümle yine tamamdır: “Babaannemin köyü yazın kalabalıklaşır.”
Adım 2: A’da ayraç alıntının kaynağını, C’de bir bilginin şüpheli olduğunu, D’de tiyatroda konuşanın hareketini gösteriyor.
Adım 3: Aranan görev B’de var.
Sağlama: Ayraç içindeki sözü “Bu arada şunu da ekleyeyim…” diye okuyabiliyorsan o söz ek bilgidir.
Cevap B.`
},
{
  id: "tur-nk-113",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `Okulumuzun bahar şenliği için sınıfça iş bölümü yaptık. Sınıfın bir grubu afiş, broşür, davetiye( ) öbür grubu ise sahne, ışık, müzik işlerini üstlendi.
**Bu metinde yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,)", "(:)", "(…)", "(;)"],
  dogru: 3,
  hatalar: [
    "Takımları ayırmayı atlama: virgül konursa grupların sınırı kaybolur; “davetiye, öbür grubu” diye okununca hangi işin hangi gruba ait olduğu karışır.",
    "Açıklama sanma: iki nokta, ardından açıklama ya da örnek gelecekse konur; buradan sonra ikinci grubun işleri anlatılıyor, birincinin açıklaması değil.",
    "Sıralamayı yarım bırakma sanma: üç nokta söz yarım kalınca konur; burada birinci grubun işleri tamamlanmış, cümle ikinci grupla sürüyor.",
    null
  ],
  aciklama: `Kural: Cümle içinde virgüllerle ayrılmış takımları birbirinden ayırmak için noktalı virgül konur.
Adım 1: Cümlede iki takım var. Birinci takım: afiş, broşür, davetiye (birinci grubun işleri). İkinci takım: sahne, ışık, müzik (öbür grubun işleri).
Adım 2: Her takımın içindeki sözler zaten virgülle ayrılmış. İki takımı da virgülle ayırırsan sınır görünmez olur.
Adım 3: Virgülden daha güçlü bir duraklama gerekiyor; bu işi noktalı virgül yapar: “…afiş, broşür, davetiye; öbür grubu ise sahne, ışık, müzik işlerini üstlendi.”
Sağlama: Noktalı virgülün yerine nokta koyamazsın, çünkü ardından gelen “öbür” küçük harfle başlıyor ve cümle sürüyor.
Cevap D.`
},
{
  id: "tur-nk-114",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde virgül, sıralı cümleleri birbirinden ayırmak için kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Ders zili çaldı, öğrenciler bahçeye koştu.",
    "Komşumuz, emekli bir öğretmen, her akşam çocuklara kitap okuyor.",
    "Kardeşim, sen de bu akşam bizimle sinemaya gel.",
    "Kırmızı, mavi ve sarı kalemlerini masanın üstüne bıraktı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ara sözü cümle sanma: “emekli bir öğretmen” sözünün yüklemi yoktur; komşuyu tanıtan bir ara sözdür.",
    "Hitabı cümle sanma: “Kardeşim” sözü bir seslenmedir; yüklemi olan ayrı bir cümle değildir.",
    "Eş görevli sözcükleri cümle sanma: “kırmızı, mavi, sarı” sözcükleri aynı görevde sıralanmıştır; cümlede tek yüklem (“bıraktı”) var."
  ],
  aciklama: `Kural: Sıralı cümleler, her biri kendi yüklemine sahip olup anlamca birbirine bağlanan cümlelerdir; aralarına virgül konur.
Adım 1: Virgülün iki yanına bak ve her iki yanda da ayrı bir yüklem var mı diye sor.
Adım 2: A’da virgülün solunda “Ders zili çaldı”, sağında “öğrenciler bahçeye koştu” var. İki yüklem (çaldı, koştu), iki cümle. Virgül bunları ayırıyor.
Adım 3: B’de virgüller ara sözü, C’de hitabı, D’de eş görevli sözcükleri ayırıyor; bu cümlelerde tek yüklem var.
Sağlama: Sıralı cümleyi virgülden bölersen iki yanda da tek başına anlamlı iki cümle kalır: “Ders zili çaldı.” “Öğrenciler bahçeye koştu.”
Cevap A.`
},
{
  id: "tur-nk-115",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdakilerin hangisinin sonuna soru işareti __konmaz__?**`,
  gorsel: null,
  secenekler: [
    "Yarınki sınav saat kaçta başlıyor",
    "Bu resmi sen mi çizdin",
    "Güneş battı mı kuşlar ağaçlara dönerdi",
    "Bu yolun sonu nereye çıkıyor"
  ],
  dogru: 2,
  hatalar: [
    "Soru sözünü gözden kaçırma: “kaçta” bir soru sözüdür ve cümle yanıt bekler; sonuna soru işareti konur.",
    "Soru ekini gözden kaçırma: “mi” eki burada gerçekten soru sorar (Resmi kim çizdi?); sonuna soru işareti konur.",
    null,
    "Soru sözünü gözden kaçırma: “nereye” bir soru sözüdür ve cümle yanıt bekler; sonuna soru işareti konur."
  ],
  aciklama: `Kural: “mı, mi” eki soru sormuyor da “-ınca, -ince” anlamında zaman bildiriyorsa, cümlenin sonuna soru işareti konmaz.
Adım 1: C’deki “battı mı” sözünü “batınca” diye okuyabilir misin? “Güneş batınca kuşlar ağaçlara dönerdi.” Anlam bozulmuyor.
Adım 2: Demek ki “mı” burada soru sormuyor; “ne zaman” sorusuna yanıt veren bir zaman anlamı katıyor. Cümle bir bildirim, yanıt beklemiyor. Sonuna nokta konur.
Adım 3: A, B ve D gerçek sorulardır; sonlarına soru işareti konur.
Sağlama: B’deki “mi”yi “-ınca” diye okumayı dene: “Bu resmi sen çizince” olmaz. Orada “mi” gerçekten soru ekidir.
Cevap C.`
},
{
  id: "tur-nk-116",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde virgülün kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Kütüphanede kitap, dergi ve gazete okuyabilirsiniz.",
    "Hava güzel olursa, hafta sonu pikniğe gideriz.",
    "Sevgili arkadaşlar, yarın kermes için erken toplanıyoruz.",
    "Yağmur dindi, çocuklar yeniden sokağa çıktı."
  ],
  dogru: 1,
  hatalar: [
    "Eş görevli sözcük virgülünü yanlış sanma: “kitap” ile “dergi” arasındaki virgül doğrudur; “ve” bağlacından önce virgül konmamış, bu da doğrudur.",
    null,
    "Hitap virgülünü yanlış sanma: seslenme sözünden sonra virgül konur; “Sevgili arkadaşlar,” doğrudur.",
    "Sıralı cümle virgülünü yanlış sanma: “Yağmur dindi” ve “çocuklar yeniden sokağa çıktı” iki ayrı cümledir; aralarındaki virgül doğrudur."
  ],
  aciklama: `Kural: Şart eki (-sa, -se) almış sözden sonra virgül konmaz.
Adım 1: B’deki “olursa” sözü şart eki almış: Pikniğe gitmemiz havanın güzel olması koşuluna bağlı.
Adım 2: Şart bildiren bölüm ile ana cümle arasına virgül konmaz. Doğrusu: “Hava güzel olursa hafta sonu pikniğe gideriz.”
Adım 3: Öbür cümlelerde virgül doğru yerde: A’da eş görevli sözcükler arasında, C’de hitaptan sonra, D’de iki sıralı cümle arasında.
Sık yapılan hata: Konuşurken şart bölümünden sonra durakladığımız için oraya virgül koymak. Duraklamak her zaman virgül gerektirmez.
Cevap B.`
},
{
  id: "tur-nk-117",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde kesme işaretinin kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Kardeşim her yıl Nisan’da doğum gününü kutlar.",
    "Konser 18 Mayıs’ta açık havada yapılacak.",
    "Mektubu Ali Bey’e bizzat ben verdim.",
    "Teyzem uzun zamandır ABD’de yaşıyor."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Belirli tarihi gözden kaçırma: “18 Mayıs” belirli bir günü gösterir; ay adı büyük harfle yazılır ve eki kesmeyle ayrılır.",
    "Saygı sözünü kesmesiz sanma: kişi adından sonra gelen “Bey, Hanım” gibi saygı sözlerine gelen ekler kesmeyle ayrılır.",
    "Kısaltmaya gelen eki kesmesiz sanma: kısaltmalara gelen ekler kesmeyle ayrılır; “ABD’de” doğrudur."
  ],
  aciklama: `Kural: Ay ve gün adları, belirli bir tarih bildiriyorsa büyük harfle başlar ve aldıkları ek kesmeyle ayrılır (17 Aralık’a kadar). Belirli bir tarih bildirmiyorsa küçük harfle yazılır ve eki kesmesiz, bitişik yazılır.
Adım 1: A’daki “her yıl Nisan’da” sözü belirli bir tarih göstermiyor; hangi gün olduğu belli değil, yalnızca ay söyleniyor.
Adım 2: Bu durumda ay adı küçük harfle, eki de bitişik yazılır: “Kardeşim her yıl nisanda doğum gününü kutlar.”
Adım 3: B’de “18 Mayıs” belirli bir tarihtir: “Mayıs’ta” doğru. C’de saygı sözüne gelen ek, D’de kısaltmaya gelen ek kesmeyle ayrılmış; ikisi de doğru.
Sağlama: Ay adının önünde gün sayısı varsa (18 Mayıs) belirli tarihtir; yoksa (nisanda, mayısta) belirli tarih değildir.
Cevap A.`
},
{
  id: "tur-nk-118",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `Fen dersinin başında öğretmenimiz tahtaya şu soruyu yazdı( ) Bir ağacın yaşını nasıl anlarız( )
**Bu cümlede yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(,) (?)", "(:) (.)", "(:) (?)", "(;) (!)"],
  dogru: 2,
  hatalar: [
    "İki noktanın yerine virgül koyma: “şu soruyu” sözü bir açıklamanın geleceğini haber veriyor; açıklamayı başlatan işaret virgül değil iki noktadır.",
    "Sorunun sonunu gözden kaçırma: “nasıl” soru sözüyle kurulan cümle yanıt bekler; sonuna nokta değil soru işareti konur.",
    null,
    "İki yeri birden karıştırma: noktalı virgül açıklama başlatmaz, ünlem de soru bildirmez; iki yer de yanlış doldurulmuş."
  ],
  aciklama: `Kural: Kendisinden sonra açıklama yapılacak cümlenin sonuna iki nokta konur. Soru sözü içeren ve yanıt bekleyen cümlenin sonuna soru işareti konur.
Adım 1: Birinci yer: “şu soruyu yazdı” sözünden sonra sorunun kendisi geliyor. “Şu” sözünü açıklayan bölüm başlıyor; iki nokta konur.
Adım 2: İkinci yer: “Bir ağacın yaşını nasıl anlarız” cümlesinde “nasıl” soru sözü var ve cümle yanıt bekliyor; soru işareti konur.
Adım 3: Sıra: (:) (?).
Sağlama: İki noktadan sonra gelen bölüm tam bir cümle olduğu için büyük harfle başlamış: “Bir ağacın…”
Cevap C.`
},
{
  id: "tur-nk-119",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: [
    "Dedem “Fidanlara her akşam su ver.” dedi.",
    "Kardeşim “Kalemimi gören oldu mu?” diye sordu.",
    "Arkadaşım “Ne güzel bir manzara!” diye bağırdı.",
    "Komşumuz “Kapınızın önüne bir paket bıraktım”. dedi."
  ],
  dogru: 3,
  hatalar: [
    "Tırnak içindeki noktayı yanlış sanma: aktarılan cümlenin sonundaki nokta tırnak içinde kalır; bu kullanım doğrudur.",
    "Tırnak içindeki soru işaretini yanlış sanma: aktarılan soru cümlesinin soru işareti tırnak içinde kalır; bu kullanım doğrudur.",
    "Tırnak içindeki ünlemi yanlış sanma: aktarılan cümlenin ünlem işareti tırnak içinde kalır; bu kullanım doğrudur.",
    null
  ],
  aciklama: `Kural: Tırnak içindeki alıntının sonunda bulunan işaret (nokta, soru işareti, ünlem işareti) tırnak içinde kalır.
Adım 1: Her cümlede tırnak kapanmadan önceki işarete bak. A’da nokta, B’de soru işareti, C’de ünlem tırnağın içinde. Doğru.
Adım 2: D’de aktarılan cümlenin noktası tırnağın dışına, kapanış tırnağından sonraya konmuş: “…bıraktım”. Bu yanlıştır.
Adım 3: Doğrusu: Komşumuz “Kapınızın önüne bir paket bıraktım.” dedi.
Sık yapılan hata: Aktarılan sözü bir kutu gibi düşünüp noktayı kutunun dışına koymak. Nokta, aktarılan cümlenin bir parçasıdır; onunla birlikte tırnağın içinde durur.
Cevap D.`
},
{
  id: "tur-nk-120",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `Kardeşim odasını çok güzel (!) topladığını söyledi. Yatağın altından üç tek çorap, iki boş kutu ve bir yarım elma çıktı.
**Bu metinde yay ayraç içindeki ünlem işareti hangi amaçla kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Bilginin kesin olmadığını göstermek",
    "Söze alaycı bir anlam katmak",
    "Seslenme sözünü belirtmek",
    "Sevinç duygusunu vurgulamak"
  ],
  dogru: 1,
  hatalar: [
    "Ayraç içindeki iki işareti karıştırma: bir bilginin kesin olmadığını ayraç içindeki soru işareti (?) gösterir, ünlem değil.",
    null,
    "Seslenme sanma: cümlede kimseye seslenilmiyor; “çok güzel” sözü bir hitap değildir.",
    "Ünlemin genel görevini ayraç içine taşıma: cümle sonundaki ünlem duygu bildirir; ayraç içindeki ünlem ise alay ya da küçümseme katar. Metindeki durum sevinç değil, iğnelemedir."
  ],
  aciklama: `Kural: Bir söze alay, kinaye ya da küçümseme anlamı kazandırmak için o sözden hemen sonra yay ayraç içinde ünlem işareti (!) kullanılır.
Adım 1: Kardeşin sözüne bak: odasını “çok güzel” topladığını söylüyor.
Adım 2: İkinci cümle bunun doğru olmadığını gösteriyor: yatağın altından çoraplar, kutular, yarım elma çıkıyor.
Adım 3: Yazar “çok güzel” sözünün hemen arkasına (!) koyarak bu sözle alay ediyor: “Güzel topladığı belli!” demek istiyor.
Sağlama: Ayraç içindeki ünlemi “sözde” diye okuyabilirsin: “Odasını sözde çok güzel topladı.”
Cevap B.`
},
{
  id: "tur-nk-121",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `Yaşlı balıkçı denize uzun uzun baktı ve kendi kendine mırıldandı: “Bu dalgalar bana bir şey anlatıyor ama…”
**Bu metinde üç noktanın görevi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Açık yazılmak istenmeyen bir sözcüğün yerini tutmak",
    "Alıntıda alınmayan bölümün yerini göstermek",
    "Anlatımı tamamlanmamış cümlenin sonunda bulunmak",
    "Konuşmada eksik bırakılan cevabı göstermek"
  ],
  dogru: 2,
  hatalar: [
    "Gizlenen sözcük sanma: bu kullanımda üç nokta bir sözcüğün içine ya da yerine konur (b…tan gibi); burada gizlenen bir sözcük yok.",
    "Kesilmiş alıntı sanma: bu kullanım, bir yazıdan yapılan alıntıda atlanan bölümü gösterir; balıkçının sözü bir yazıdan alınmadı, cümle kendisi yarım kaldı.",
    null,
    "Cevap sanma: eksik cevap üç noktası karşılıklı konuşmada bir soruya verilen yanıtta olur; burada kimse soru sormuyor, balıkçı kendi kendine konuşuyor."
  ],
  aciklama: `Kural: Anlatım olarak tamamlanmamış cümlelerin sonuna üç nokta konur.
Adım 1: Balıkçının sözü “ama” bağlacıyla bitiyor. “Ama” bir karşıtlık başlatır; ardından bir şey gelmesi beklenir.
Adım 2: O bölüm söylenmemiş: “…anlatıyor ama (ne anlattığını çözemiyorum)” gibi bir devam okura bırakılmış. Cümle anlam olarak yarım kalmış.
Adım 3: Yarım kalan cümlenin sonunu üç nokta gösterir.
Sağlama: Üç noktayı sildiğinde cümle “ama” ile havada kalır ve eksik okunur; demek ki işaret, eksikliği bilerek göstermek için konmuş.
Cevap C.`
},
{
  id: "tur-nk-122",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `Kasabanın tek sineması -yıllar önce bir un deposuymuş- geçen ay yeniden açıldı.
**Bu cümlede kısa çizgilerin görevi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Ara sözü cümleden ayırmak",
    "“Arasında” anlamı vermek",
    "Satıra sığmayan sözcüğü bölmek",
    "Sözcüğün kökünü ekinden ayırmak"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kısa çizginin başka görevini seçme: “arasında” anlamı iki sözcük ya da sayı arasındaki tek bir çizgiyle verilir (Ankara-Sivas); burada çizgiler bir sözü iki yandan kuşatıyor.",
    "Satır sonu çizgisi sanma: satıra sığmayan sözcük bölünürken çizgi satırın sonuna konur; burada bölünmüş bir sözcük yok.",
    "Dil bilgisi gösterimi sanma: kök ve ekleri ayırma (gör-gü) sözcüğün içinde yapılır; burada çizgiler sözcükleri değil, bir söz öbeğini ayırıyor."
  ],
  aciklama: `Kural: Cümle içinde ara sözleri ya da ara cümleleri ayırmak için ara sözün başına ve sonuna kısa çizgi konur. Aynı görevde virgül de kullanılabilir.
Adım 1: Çizgilerin arasındaki sözü çıkar: “Kasabanın tek sineması geçen ay yeniden açıldı.” Cümle eksiksiz kalıyor.
Adım 2: Demek ki “yıllar önce bir un deposuymuş” sözü, cümleye sonradan eklenmiş bir açıklamadır: sinemanın eskiden ne olduğunu anlatıyor.
Adım 3: Böyle sözlere ara söz denir; kısa çizgiler onu cümleden ayırıyor.
Sağlama: Ara söz iki yanından kuşatılır: bir çizgi başında, bir çizgi sonunda. “Arasında” anlamı veren çizgi ise tektir.
Cevap A.`
},
{
  id: "tur-nk-123",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `Bu, dedemin gençken çaldığı kemandır.
**Bu cümledeki virgül, aşağıdakilerin hangisindeki virgülle aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Anneciğim, biraz daha oturalım mı?",
    "Masada ekmek, peynir, zeytin ve çay vardı.",
    "Rüzgâr sertleşti, dalgalar kıyıyı dövmeye başladı.",
    "O, sınıfın en sessiz ama en dikkatli öğrencisiydi."
  ],
  dogru: 3,
  hatalar: [
    "Başa gelen sözü hitap sanma: “Anneciğim” bir seslenmedir; örnekteki “Bu” ise kimseye seslenmiyor, cümlenin öznesidir.",
    "Eş görevli sözcük virgülü seçme: bu virgül aynı görevdeki sözcükleri sıralar; örnekteki virgülden sonra sıralanan bir söz yok.",
    "Sıralı cümle virgülü seçme: bu virgül iki ayrı cümleyi ayırır; örnek cümlenin tek yüklemi var (“kemandır”).",
    null
  ],
  aciklama: `Kural: “bu, şu, o” zamirleri cümlede özne olarak kullanıldığında kendilerinden sonra virgül konur. Böylece zamirin sonraki sözün önüne gelen bir sıfat gibi okunması önlenir.
Adım 1: Örnekte virgül olmasaydı “Bu dedemin…” diye okunur, “bu” sözcüğü “dedem”i niteliyormuş gibi anlaşılabilirdi. Virgül, “Bu”nun tek başına özne olduğunu gösteriyor: Bu (şey), dedemin kemanıdır.
Adım 2: D’de de aynı durum var: “O, sınıfın en sessiz… öğrencisiydi.” “O” zamiri özne; virgül onu “sınıfın” sözünden ayırıyor.
Adım 3: A’da virgül hitaptan, B’de eş görevli sözcüklerden sonra geliyor; C’de sıralı cümleleri ayırıyor.
Sağlama: Özne olan zamiri “bu şey, o kişi” diye açarak okuyabiliyorsan virgül bu görevdedir.
Cevap D.`
},
{
  id: "tur-nk-124",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde noktanın kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Kermeste tam 2.450 lira toplandı.",
    "Kayıtlar 3. Eylül 2027’de sona eriyor.",
    "XV. yüzyılda yapılan bu han hâlâ ayakta.",
    "Gündemin 2, 3 ve 5. maddeleri ertelendi."
  ],
  dogru: 1,
  hatalar: [
    "Büyük sayıdaki noktayı yanlış sanma: dört ve daha çok basamaklı sayılar sondan üçlü gruplara ayrılır ve araya nokta konur; “2.450” doğrudur.",
    null,
    "Romen rakamındaki noktayı yanlış sanma: sıra bildiren nokta Romen rakamından sonra da konur; “XV. yüzyıl” on beşinci yüzyıl demektir.",
    "Art arda sayılarda her birine nokta arama: virgülle sıralanan sıra sayılarında yalnızca sonuncusundan sonra nokta konur; “2, 3 ve 5. maddeler” doğrudur."
  ],
  aciklama: `Kural: Tarihte ay adı yazıyla yazılırsa ay adından önce ve sonra nokta kullanılmaz: 29 Mayıs 1453, 29 Ekim 1923 gibi.
Adım 1: B’deki tarihte ay adı yazıyla yazılmış (Eylül). Günü gösteren 3 sayısından sonra nokta konmuş: “3. Eylül”.
Adım 2: Bu nokta “üçüncü eylül” gibi yanlış bir okuma doğurur. Doğrusu: “Kayıtlar 3 Eylül 2027’de sona eriyor.”
Adım 3: Öbür cümlelerde nokta doğru: A’da büyük sayıyı üçlü gruplara ayırıyor, C’de Romen rakamıyla sıra bildiriyor, D’de art arda sıra sayılarından yalnızca sonuncusuna konmuş.
Sağlama: Tarih tamamen rakamla yazılırsa nokta kullanılır: 03.09.2027. Ay adı yazıyla yazılınca noktalar kalkar.
Cevap B.`
},
{
  id: "tur-nk-125",
  kazanim: "T.8.4.16",
  kademe: 1,
  zorluk: 2,
  soru: `Bir öğrenci, yazdığı şiirin iki dizesini okul dergisinde yer kazanmak için tek satırda yazmak istiyor:
Sabah olur, kuşlar öter dallarda( ) Rüzgâr eser ılık ılık yollarda
**Dizelerin arasına, yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(/)", "(-)", "(;)", "(:)"],
  dogru: 0,
  hatalar: [
    null,
    "Kısa çizgiyi dize ayracı sanma: kısa çizgi “arasında” anlamı verir ya da ara söz ayırır; yan yana yazılan dizeleri ayırmaz.",
    "Noktalı virgülü dize ayracı sanma: noktalı virgül cümle içindeki takımları ayırır; dizelerin nerede bittiğini göstermez.",
    "İki noktayı dize ayracı sanma: iki nokta açıklama ya da örnek başlatır; ikinci dize birincinin açıklaması değildir."
  ],
  aciklama: `Kural: Şiirin dizeleri alt alta değil de yan yana yazıldığında aralarına eğik çizgi (/) konur.
Adım 1: Durumu belirle: iki dize, yer kazanmak için tek satıra yazılıyor.
Adım 2: Okur bir dizenin nerede bitip öbürünün nerede başladığını görmeli. Bu sınırı eğik çizgi gösterir.
Adım 3: Yazılışı: “Sabah olur, kuşlar öter dallarda / Rüzgâr eser ılık ılık yollarda”.
Sağlama: İkinci dizenin büyük harfle başlaması (Rüzgâr) da yeni bir dizenin başladığını gösterir; eğik çizgi bu sınırı işaretler.
Cevap A.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "tur-nk-201",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `Bu yaz yapacağımız gezinin listesinde üç şehir var( ) Sivas, Tokat ve Amasya( ) Sen hangisini daha çok merak ediyorsun( )
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(;) (.) (?)", "(:) (,) (!)", "(,) (.) (?)", "(:) (.) (?)"],
  dogru: 3,
  hatalar: [
    "Noktalı virgülü iki nokta sanma: noktalı virgül takımları ya da sıralı cümleleri ayırır; ardından sıralanacak örnekleri haber vermez.",
    "Büyük harfi ve soruyu gözden kaçırma: “Sen” büyük harfle başladığı için önceki cümle nokta ile bitmeli; son cümle de soru sözü (hangisini) içerdiği için soru işareti almalı.",
    "Örnek başlatan işareti karıştırma: “üç şehir var” sözünden sonra bu şehirler sayılıyor; örnekleri başlatan işaret virgül değil iki noktadır.",
    null
  ],
  aciklama: `Kural: Kendisinden sonra örnek verilecek cümlenin sonuna iki nokta, bildirme cümlesinin sonuna nokta, soru cümlesinin sonuna soru işareti konur.
Adım 1: Birinci yer: “listede üç şehir var” sözü, ardından bu şehirlerin sayılacağını haber veriyor. Örnekleri başlatan işaret iki noktadır.
Adım 2: İkinci yer: Şehirler sayıldıktan sonra cümle bitiyor; sonraki sözcük “Sen” büyük harfle başlıyor. Buraya nokta gelir.
Adım 3: Üçüncü yer: “Sen hangisini daha çok merak ediyorsun” cümlesinde “hangisini” soru sözü var ve cümle yanıt bekliyor. Soru işareti gelir.
Sağlama: Sıra (:) (.) (?) olunca metin şöyle okunur: “…üç şehir var: Sivas, Tokat ve Amasya. Sen hangisini daha çok merak ediyorsun?”
Cevap D.`
},
{
  id: "tur-nk-202",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde noktalı virgülün kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Kardeşim; bu sabah okula yine geç kaldı.",
    "İlk gün müzeyi, kaleyi, çarşıyı; ikinci gün gölü, şelaleyi, mağarayı gezdik.",
    "Hava serin, rüzgâr hafifti; yürüyüş için daha iyi bir gün olamazdı.",
    "Yeni kütüphanemiz; aydınlık, geniş, sessiz bir yerdi."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Takım ayıran noktalı virgülü yanlış sanma: virgülle ayrılmış iki takım (ilk günün ve ikinci günün yerleri) noktalı virgülle ayrılır; bu kullanım doğrudur.",
    "Sıralı cümle noktalı virgülünü yanlış sanma: içinde virgül bulunan sıralı cümleler noktalı virgülle ayrılır; bu kullanım doğrudur.",
    "Özneden sonraki noktalı virgülü her durumda yanlış sanma: özneden sonra ikiden fazla eş değer öge virgülle sıralanıyorsa özneden sonra noktalı virgül konabilir; bu kullanım doğrudur."
  ],
  aciklama: `Kural: Noktalı virgül üç durumda kullanılır: virgülle ayrılmış takımları ayırmak, ögeleri arasında virgül bulunan sıralı cümleleri ayırmak ve ikiden fazla eş değer ögenin virgülle sıralandığı cümlelerde özneden sonra.
Adım 1: B’de iki takım var (müze, kale, çarşı / göl, şelale, mağara); noktalı virgül takımları ayırıyor. Doğru.
Adım 2: C’de “Hava serin, rüzgâr hafifti” bölümü içinde virgül taşıyor; ardından gelen sıralı cümleden noktalı virgülle ayrılmış. Doğru. D’de özneden (Yeni kütüphanemiz) sonra üç eş değer söz (aydınlık, geniş, sessiz) sıralanıyor; özneden sonra noktalı virgül konabilir. Doğru.
Adım 3: A’da özneden sonra virgülle sıralanan eş değer sözler yok. Bu durumda özneden sonra noktalı virgül konmaz. Doğrusu: “Kardeşim bu sabah okula yine geç kaldı.”
Sık yapılan hata: D ile A’yı aynı sanmak. İkisinde de noktalı virgül özneden sonra geliyor; ama yalnızca D’de ardından virgüllerle sıralanan eş değer sözler var.
Cevap A.`
},
{
  id: "tur-nk-203",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `(I) Gezimizi sınıf öğretmenimiz Aylin Hanım’la birlikte planlamıştık. (II) Otobüsümüz sabah erkenden yola çıktı ve öğleye doğru Nevşehir’e ulaştı. (III) Rehberimiz bize Göreme’deki kaya kiliselerini anlattı. (IV) Dönüş yolunda herkes 25 Martta açılacak sınıf sergisini konuştu.
**Bu metinde numaralanmış cümlelerin hangisinde kesme işaretiyle ilgili bir yanlışlık yapılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 3,
  hatalar: [
    "Saygı sözüne gelen eki yanlış sanma: kişi adından sonra gelen “Hanım, Bey” gibi saygı sözlerine gelen ekler kesmeyle ayrılır; “Aylin Hanım’la” doğrudur.",
    "Şehir adına gelen eki yanlış sanma: “Nevşehir” bir yer adıdır; eki kesmeyle ayrılır.",
    "Yer adına gelen eki yanlış sanma: “Göreme” bir yer adıdır; “-deki” eki kesmeyle ayrılır.",
    null
  ],
  aciklama: `Kural: Belirli bir tarih bildiren ay ve gün adlarına gelen ekler kesmeyle ayrılır: 17 Aralık’a kadar, 12 Temmuz’da gibi.
Adım 1: I, II ve III’teki eklere bak: saygı sözüne (Aylin Hanım’la), şehir adına (Nevşehir’e), yer adına (Göreme’deki) gelen ekler kesmeyle ayrılmış. Hepsi doğru.
Adım 2: IV’te “25 Mart” belirli bir tarihtir: önünde gün sayısı var.
Adım 3: Belirli tarih bildiren ay adına gelen ek kesmeyle ayrılır. Doğrusu: “25 Mart’ta açılacak sınıf sergisi”.
Sağlama: Belirli tarih değilse ay adı küçük harfle ve kesmesiz yazılır: “Sergi her yıl martta açılır.” Burada ise gün belli olduğu için kesme gerekir.
Cevap D.`
},
{
  id: "tur-nk-204",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde kısa çizginin kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Kütüphane hafta içi 09.00-17.00 saatlerinde açık.",
    "Mahalledeki parka üç-beş çocuk gelmişti.",
    "İstanbul-Ankara otobüsü sabah yola çıktı.",
    "Türkçe-İngilizce sözlüğümü sınıfta unuttum."
  ],
  dogru: 1,
  hatalar: [
    "Saat aralığındaki çizgiyi yanlış sanma: iki saat arasına konan kısa çizgi “…den …e kadar” anlamı verir; “09.00-17.00” doğrudur.",
    null,
    "Şehirler arasındaki çizgiyi yanlış sanma: kısa çizgi “…den …e” anlamı verir; “İstanbul-Ankara otobüsü” doğrudur.",
    "Diller arasındaki çizgiyi yanlış sanma: kısa çizgi “ve, ile” anlamı verir; “Türkçe-İngilizce sözlük” doğrudur."
  ],
  aciklama: `Kural: Kısa çizgi, “arasında, ve, ile, …-den …-e” anlamlarını vermek için sözcükler ya da sayılar arasında kullanılır. Ancak cümle içinde sayı adlarının yinelenmesinde (üç beş, on on beş) araya kısa çizgi konmaz.
Adım 1: A’da iki saat arasında “…den …e kadar” anlamı var; C’de iki şehir, D’de iki dil arasında bağlantı kuruluyor. Üçü de doğru.
Adım 2: B’deki “üç beş” sözü “birkaç, az sayıda” anlamında bir sayı tekrarıdır; “üçten beşe kadar” anlamı taşımaz.
Adım 3: Sayı adlarının yinelenmesinde kısa çizgi kullanılmaz. Doğrusu: “Mahalledeki parka üç beş çocuk gelmişti.”
Sık yapılan hata: Yan yana gelen iki sayıyı gördüğünde hemen çizgi koymak. Rakamla yazılmış bir aralık (09.00-17.00) çizgi alır; yazıyla yazılan “üç beş” gibi tekrarlar almaz.
Cevap B.`
},
{
  id: "tur-nk-205",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `Akşam balkonda oturuyorduk. “Ne kadar güzel bir gün batımı( )” dedi annem. Sonra bana dönüp sordu: “Fotoğrafını çekmek ister misin( )”
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(.) (!)", "(?) (?)", "(!) (.)", "(!) (?)"],
  dogru: 3,
  hatalar: [
    "İki yeri birden karıştırma: birinci söz hayranlık bildirdiği için nokta değil ünlem alır; ikinci söz soru eki taşıdığı için ünlem değil soru işareti alır.",
    "“Ne kadar” sözünü soru sanma: “Ne kadar güzel bir gün batımı” bir şey sormuyor, hayranlık bildiriyor; soru işareti ancak ikinci yere gelir.",
    "Soru ekini gözden kaçırma: “ister misin” sözü “mi” soru ekini taşıyor ve yanıt bekliyor; sonuna nokta değil soru işareti konur.",
    null
  ],
  aciklama: `Kural: Sevinç, hayranlık, şaşma gibi duyguları anlatan cümlelerin sonuna ünlem, soru bildiren cümlelerin sonuna soru işareti konur. Tırnak içindeki cümlenin işareti tırnağın içinde kalır.
Adım 1: Birinci söz: “Ne kadar güzel bir gün batımı”. Anne bir şey sormuyor; gördüğü manzaraya hayran kalıyor. Bu bir duygu cümlesidir: ünlem.
Adım 2: İkinci söz: “Fotoğrafını çekmek ister misin”. “mi” soru eki var ve anne yanıt bekliyor: soru işareti.
Adım 3: Sıra: (!) (?).
Sık yapılan hata: “Ne kadar” sözünü gördüğü an soru işareti koymak. “Ne kadar tuttu?” bir sorudur; “Ne kadar güzel!” ise bir hayranlık cümlesidir. Cümlenin yanıt bekleyip beklemediğine bak.
Cevap D.`
},
{
  id: "tur-nk-206",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `Geçen yaz arkadaşlarım denize girerken ben hep kıyıda oturdum. Bu yıl kararımı verdim: Bu yaz yüzme öğreneceğim.
**Bu metinde iki nokta hangi görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["Karşılıklı konuşmada konuşan kişiyi belirtme", "Kendisinden sonra açıklama yapılacağını gösterme", "Matematikte bölme işlemini gösterme", "Kendisinden sonra örnek sıralanacağını gösterme"],
  dogru: 1,
  hatalar: [
    "Konuşma sanma: metinde karşılıklı konuşma yok; “kararımı verdim” bir konuşan kişi adı değildir.",
    null,
    "Matematik işaretini metne taşıma: iki nokta matematikte bölme işareti olarak kullanılır; burada sayı ya da işlem yok.",
    "Açıklama ile örneği karıştırma: iki noktadan sonra sıralanan örnekler yok; tek bir cümle ile verilen kararın ne olduğu anlatılıyor."
  ],
  aciklama: `Kural: Kendisinden sonra açıklama yapılacak cümlenin sonuna iki nokta konur.
Adım 1: “Bu yıl kararımı verdim” sözü okuru bekletir: Hangi karar?
Adım 2: İki noktadan sonra gelen “Bu yaz yüzme öğreneceğim.” cümlesi bu kararın ne olduğunu açıklıyor.
Adım 3: Ardından bir liste gelmediği için bu bir örnek sıralama değildir; bir açıklamadır.
Sağlama: İki noktanın yerine “şöyle ki” ya da “o da şu” diyebiliyorsan açıklama görevindedir: “Kararımı verdim, o da şu: Bu yaz yüzme öğreneceğim.” İki noktadan sonra tam bir cümle geldiği için büyük harfle başlamıştır.
Cevap B.`
},
{
  id: "tur-nk-207",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde virgülün kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Kapıyı açınca, içeriye serin bir rüzgâr doldu.",
    "Koşarak, gülerek, şarkı söyleyerek bahçeye çıktılar.",
    "Sayın veliler, toplantı saat üçte başlayacaktır.",
    "Bu, şimdiye kadar okuduğum en heyecanlı romandı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Art arda gelen zarf-fiilleri gözden kaçırma: metin içinde art arda gelen zarf-fiillerden sonra virgül konur; sonuncusundan (söyleyerek) sonra konmamış, bu da doğrudur.",
    "Hitap virgülünü yanlış sanma: “Sayın veliler” bir seslenmedir; ardından virgül konur.",
    "Zamir virgülünü yanlış sanma: “Bu” zamiri özne olarak kullanılmıştır; ardından virgül konur."
  ],
  aciklama: `Kural: Metin içinde zarf-fiil eki (-ınca, -ıp, -arak, -madan…) almış sözden sonra virgül konmaz. Yalnızca art arda sıralanan zarf-fiiller virgülle ayrılır.
Adım 1: A’daki “açınca” sözü zarf-fiil eki (-ınca) almış ve tek başına duruyor. Ardından virgül konmaz. Doğrusu: “Kapıyı açınca içeriye serin bir rüzgâr doldu.”
Adım 2: B’de üç zarf-fiil art arda sıralanmış (koşarak, gülerek, şarkı söyleyerek); aralarındaki virgüller doğru, sonuncusundan sonra virgül yok.
Adım 3: C’de hitaptan, D’de özne olan “bu” zamirinden sonra virgül konmuş; ikisi de doğru.
Sık yapılan hata: A ile B’yi aynı sanmak. İkisinde de zarf-fiil var; ama virgül yalnızca zarf-fiiller art arda sıralandığında onları birbirinden ayırır.
Cevap A.`
},
{
  id: "tur-nk-208",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: [
    "Geçen hafta “Deniz Feneri” adlı öyküyü üç kez okudum.",
    "Sınıfça “Yıldızların Sırrı”’nı izlemeye karar verdik.",
    "Kapıdaki kâğıtta “Lütfen zili çalmayın.” yazıyordu.",
    "Kardeşim bu sözcüğü hep “makarna” yerine “marakna” diye söylüyor."
  ],
  dogru: 1,
  hatalar: [
    "Eser adındaki tırnağı yanlış sanma: cümle içinde eser adları tırnak içine alınır; “Deniz Feneri” doğrudur.",
    null,
    "Tırnak içindeki noktayı yanlış sanma: aktarılan cümlenin sonundaki nokta tırnak içinde kalır; bu kullanım doğrudur.",
    "Vurgu tırnağını yanlış sanma: özel olarak üzerinde durulan sözler tırnak içine alınır; iki sözcüğün tırnakla gösterilmesi doğrudur."
  ],
  aciklama: `Kural: Tırnak içine alınan sözlerden sonra gelen ekler kesme işaretiyle ayrılmaz; ek, kapanış tırnağından hemen sonra bitişik yazılır.
Adım 1: B’de film adı tırnak içinde verilmiş, sonra gelen “-nı” eki kesmeyle ayrılmış: “Yıldızların Sırrı”’nı. Tırnak zaten adın bittiği yeri gösterdiği için ayrıca kesme konmaz.
Adım 2: Doğrusu: Sınıfça “Yıldızların Sırrı”nı izlemeye karar verdik.
Adım 3: A’da eser adı, C’de aktarılan söz, D’de üzerinde durulan sözcükler doğru biçimde tırnağa alınmış.
Sık yapılan hata: Özel ad kuralını tırnağa taşımak. Özel adlara gelen ekler kesmeyle ayrılır; ama ad tırnak içindeyse sınırı tırnak gösterir, kesme gerekmez.
Cevap B.`
},
{
  id: "tur-nk-209",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `Müzede sergilenen el yazması kitabın 1640 ( ) yılında yazıldığı düşünülüyor. Kitabın hiçbir sayfasında tarih bulunmadığı için uzmanlar bu yıldan emin değil.
**Bu metinde yay ayraçla ( ) gösterilen yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(!)", "(…)", "(:)", "(?)"],
  dogru: 3,
  hatalar: [
    "Ayraç içindeki iki işareti karıştırma: ayraç içindeki ünlem bir söze alay ya da küçümseme katar; burada alay yok, yalnızca bir belirsizlik var.",
    "Alıntı işaretini seçme: ayraç içindeki üç nokta, bir alıntıda alınmayan bölümün yerini gösterir; burada alıntı yok.",
    "Açıklama işaretini ayraca koyma: iki nokta açıklama başlatır; ayraç içinde tek başına bir görevi yoktur.",
    null
  ],
  aciklama: `Kural: Bir bilginin şüpheyle karşılandığını ya da kesin olmadığını göstermek için yay ayraç içinde soru işareti (?) kullanılır.
Adım 1: Metin, kitabın 1640 yılında yazıldığının “düşünüldüğünü” söylüyor.
Adım 2: İkinci cümle nedenini açıklıyor: kitapta tarih yok, uzmanlar emin değil. Yani 1640 kesin bir bilgi değildir.
Adım 3: Kesin olmayan bilginin hemen arkasına ayraç içinde soru işareti konur: “1640 (?) yılında”.
Sık yapılan hata: (?) ile (!) işaretlerini karıştırmak. (?) “emin değilim” der; (!) “bu söze inanmıyorum, alay ediyorum” der.
Cevap D.`
},
{
  id: "tur-nk-210",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdakilerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: [
    "— Bu trenin son durağı neresi?",
    "Garson masaya gelip sordu: “Siparişinizi alabilir miyim?”",
    "“— Yarın erken kalkmamız gerekiyor.” dedi babam.",
    "Görevli biletlerimize bakıp “İyi yolculuklar!” dedi."
  ],
  dogru: 2,
  hatalar: [
    "Konuşma çizgisini yanlış sanma: satır başına alınan konuşmanın önüne uzun çizgi konur; bu kullanım doğrudur.",
    "İki noktayı yanlış sanma: konuşmadan önceki ifadenin sonuna iki nokta konabilir; soru işareti de tırnağın içinde kalmış. Doğru.",
    null,
    "Tırnak içindeki ünlemi yanlış sanma: aktarılan sözün ünlemi tırnağın içinde kalır; bu kullanım doğrudur."
  ],
  aciklama: `Kural: Konuşmalar tırnak içinde verildiğinde uzun çizgi (konuşma çizgisi) kullanılmaz. Bir konuşma ya tırnakla ya da satır başındaki uzun çizgiyle gösterilir; ikisi birlikte kullanılmaz.
Adım 1: C’de babanın sözü hem tırnak içine alınmış hem de başına uzun çizgi konmuş.
Adım 2: Tırnak zaten sözün aktarıldığını gösterdiği için çizgi fazladır. Doğrusu: “Yarın erken kalkmamız gerekiyor.” dedi babam.
Adım 3: A’da konuşma yalnızca uzun çizgiyle, B ve D’de yalnızca tırnakla gösterilmiş. Üçü de doğru.
Sağlama: Aynı sözü iki işaretle birden işaretliyorsan birini fazladan kullanmışsındır.
Cevap C.`
},
{
  id: "tur-nk-211",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `Çocuklar, bu hafta sonu mahallede kitap, oyuncak ve kıyafet toplayacağız.
**Bu cümlede kullanılan virgüllerin görevleri sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: ["Hitap sözünden sonra gelme / Sıralı cümleleri ayırma", "Ara sözü ayırma / Eş görevli sözcükleri ayırma", "Hitap sözünden sonra gelme / Eş görevli sözcükleri ayırma", "Özneyi belirtme / Eş görevli sözcükleri ayırma"],
  dogru: 2,
  hatalar: [
    "İkinci virgülü sıralı cümle virgülü sanma: cümlenin tek yüklemi var (toplayacağız); “kitap, oyuncak” bir cümle değil, aynı nesnenin parçalarıdır.",
    "Hitabı ara söz sanma: “Çocuklar” cümlenin arasına eklenmiş bir açıklama değil, cümlenin başındaki bir seslenmedir.",
    null,
    "Hitabı özne sanma: toplama işini yapan “biz”dir (toplayacağız); “Çocuklar” sözü konuşanın seslendiği kişilerdir, cümlenin öznesi değildir."
  ],
  aciklama: `Kural: Hitap için kullanılan sözlerden sonra virgül konur. Birbiri ardınca sıralanan eş görevli sözcüklerin arasına da virgül konur.
Adım 1: Birinci virgül “Çocuklar” sözünden sonra. Konuşan kişi çocuklara sesleniyor. Yüklem “toplayacağız” (biz), yani “Çocuklar” özne değil, hitaptır.
Adım 2: İkinci virgül “kitap” ile “oyuncak” arasında. “Neyi toplayacağız?” sorusuna üçü birlikte yanıt veriyor: kitap, oyuncak ve kıyafet. Eş görevli sözcüklerdir.
Adım 3: Sıra: hitap / eş görevli sözcükler.
Sağlama: Hitabı özneden ayırmak için yüklemin kişisine bak. “toplayacağız” birinci çoğul kişidir; “Çocuklar” üçüncü çoğul olduğu için özne olamaz.
Cevap C.`
},
{
  id: "tur-nk-212",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde kesme işaretinin kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Sınıfımızda üç Ankara’lı öğrenci var.",
    "Hafta sonu Ege Denizi’nin kıyısında yürüdük.",
    "Maçın özetini TRT’den izledik.",
    "Bu romanı ilk kez 2024’te okumuştum."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Deniz adına gelen eki yanlış sanma: “Ege Denizi” özel bir yer adıdır; aldığı ek kesmeyle ayrılır.",
    "Kısaltmaya gelen eki yanlış sanma: kısaltmalara gelen ekler kesmeyle ayrılır; “TRT’den” doğrudur.",
    "Sayıya gelen eki yanlış sanma: rakamla yazılan sayılara gelen ekler kesmeyle ayrılır; “2024’te” doğrudur."
  ],
  aciklama: `Kural: Özel adlara gelen çekim ekleri (hâl, iyelik, bildirme ekleri) kesmeyle ayrılır; ama yapım ekleri ve çokluk eki kesmeyle ayrılmaz: Ankaralı, Türkçe, Konyalılar, Ahmetler gibi.
Adım 1: A’daki “-lı” eki “Ankara” sözcüğünden yeni bir sözcük türetiyor: Ankaralı (Ankara’da doğmuş, oradan olan). Bu bir yapım ekidir.
Adım 2: Yapım eki kesmeyle ayrılmaz. Doğrusu: “Sınıfımızda üç Ankaralı öğrenci var.”
Adım 3: B’de özel yer adına, C’de kısaltmaya, D’de rakamla yazılmış sayıya çekim eki gelmiş; üçü de kesmeyle doğru ayrılmış.
Sağlama: Ek sözcüğe yeni bir anlam katıp yeni bir sözcük yapıyorsa (Ankaralı, Türkçe) kesme yoktur; yalnızca cümledeki görevini belirliyorsa (Ankara’ya, Ankara’da) kesme vardır.
Cevap A.`
},
{
  id: "tur-nk-213",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde soru işaretinin kullanımı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Bu sabah kimin geleceğini biliyor musun?",
    "Arkadaşının neden gelmediğini merak ediyorum?",
    "Bu şehrin en eski çarşısı hangi yüzyılda kurulmuş?",
    "Görevli başını kaldırıp sordu: “Adınız?”"
  ],
  dogru: 1,
  hatalar: [
    "İç sorudan dolayı yanılma: “kimin” sözü cümlenin içinde; ama cümle “musun” soru ekiyle bitiyor ve yanıt bekliyor. Soru işareti doğrudur.",
    null,
    "Soru sözünü gözden kaçırma: “hangi” soru sözü var ve cümle yanıt bekliyor; soru işareti doğrudur.",
    "Ek taşımayan soruyu yanlış sanma: soru eki ya da soru sözü içermese de soru bildiren sözlerin sonuna soru işareti konur; “Adınız?” doğrudur."
  ],
  aciklama: `Kural: Soru işareti, soru bildiren ve yanıt bekleyen cümlelerin sonuna konur. İçinde soru sözü geçse bile bildirme cümlesinin sonuna soru işareti konmaz.
Adım 1: B’de “neden” sözcüğü var; ama yüklem “merak ediyorum”. Konuşan kişi karşısındakine bir şey sormuyor, kendi merakını bildiriyor.
Adım 2: Yanıt bekleyen bir soru olmadığı için cümle nokta ile biter: “Arkadaşının neden gelmediğini merak ediyorum.”
Adım 3: A ve C yanıt bekleyen sorulardır. D’deki “Adınız?” soru eki taşımasa da bir sorudur; sonuna soru işareti konur.
Sık yapılan hata: Cümlede “neden, kim, nasıl” gibi bir söz görünce hemen soru işareti koymak. Ölçüt, cümlenin tamamının yanıt bekleyip beklemediğidir.
Cevap B.`
},
{
  id: "tur-nk-214",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Bilim kulübünün panoya astığı duyuru şöyledir:
(I) Okulumuzun bilim kulübü bu yıl ilk kez bir gökyüzü gözlem gecesi düzenliyor. (II) Etkinlik 12 Ekim Cuma akşamı okul bahçesinde başlayacak ve gece yarısına kadar sürecek. (III) Gözleme katılmak isteyenler yanlarına şunları almalı; kalın bir mont, küçük bir el feneri ve bir not defteri. (IV) Gökyüzü bulutlu olursa etkinlik bir hafta sonraya ertelenecek ve yeni tarih bu panodan duyurulacak.
**Bu duyurudaki numaralanmış cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Özneden sonra virgül arama: I. cümle uzun değildir ve özne yüklemden uzak düşmemiştir; virgülsüz yazılması doğrudur.",
    "Tarihte işaret arama: “12 Ekim Cuma” belirli bir tarihtir ama ek almamıştır; kesme ya da nokta gerekmez.",
    null,
    "Şart ekinden sonra virgül arama: “olursa” şart eki almıştır ve şart ekinden sonra virgül konmaz; cümle doğrudur."
  ],
  aciklama: `Kural: Kendisinden sonra örnek verilecek ya da açıklama yapılacak cümlenin sonuna iki nokta konur. Noktalı virgül bu görevi üstlenmez.
Adım 1: III. cümlede “şunları almalı” sözü, ardından alınacak eşyaların sayılacağını haber veriyor: mont, el feneri, not defteri.
Adım 2: Sıralanacak örnekleri başlatan işaret iki noktadır; cümlede ise noktalı virgül kullanılmış. Doğrusu: “…yanlarına şunları almalı: kalın bir mont, küçük bir el feneri ve bir not defteri.”
Adım 3: Öbür cümleleri de denetle. II’de belirli tarih bildiren “Ekim” ve “Cuma” büyük harfle yazılmış, ek almadıkları için kesme yok. IV’te şart ekinden (olursa) sonra virgül konmamış. İkisi de doğru.
Sık yapılan hata: IV. cümlede “olursa” sözünden sonra virgül eksik sanmak. Şart ekinden sonra virgül konmaz.
Cevap C.`
},
{
  id: "tur-nk-215",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Kasabamızda her sabah aynı düzen sürer( ) fırıncı dükkânını açar, balıkçılar teknelerini suya iter, çocuklar okul yoluna dökülür. Öğleye doğru yaşlılar çınarın altında toplanır ve birbirlerine hep aynı şeyi sorar( ) “Bu yıl nehir taşar mı acaba( )” Kimse kesin bir cevap veremez( ) herkes bir önceki yılı hatırlatır.
**Bu metinde yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(:) (:) (?) (,)", "(…) (:) (?) (,)", "(:) (:) (.) (,)", "(:) (:) (?) (.)"],
  dogru: 0,
  hatalar: [
    null,
    "Açıklamayı yarım söz sanma: “aynı düzen sürer” sözünden sonra bu düzenin ne olduğu açıklanıyor; cümle yarım bırakılmamış, üç nokta değil iki nokta gerekir.",
    "Soru ekini gözden kaçırma: “taşar mı acaba” sözü “mı” soru ekini taşıyor ve yaşlılar birbirine soruyor; tırnak içine nokta değil soru işareti gelir.",
    "Küçük harfi gözden kaçırma: son boşluktan sonra “herkes” küçük harfle başlıyor; cümle bitmediği için nokta konamaz, sıralı cümleleri virgül ayırır."
  ],
  aciklama: `Kural: Açıklama yapılacak cümlenin sonuna iki nokta, soru cümlesinin sonuna soru işareti, sıralı cümlelerin arasına virgül konur.
Adım 1: Birinci yer: “aynı düzen sürer” sözünden sonra bu düzenin ne olduğu anlatılıyor (fırıncı dükkânı açar, balıkçılar…). Açıklamayı başlatan işaret iki noktadır.
Adım 2: İkinci yer: “hep aynı şeyi sorar” sözünden sonra sorulan şey tırnak içinde veriliyor. “Aynı şey”in ne olduğu açıklanıyor: yine iki nokta.
Adım 3: Üçüncü yer: “Bu yıl nehir taşar mı acaba” bir sorudur; soru işareti tırnağın içinde kalır. Dördüncü yer: “Kimse kesin bir cevap veremez” ve “herkes bir önceki yılı hatırlatır” iki sıralı cümledir; ikinci cümle küçük harfle başladığı için araya virgül konur.
Sağlama: İkinci yer bütün seçeneklerde aynıdır; seçenekleri ayıran birinci (iki nokta mı, üç nokta mı), üçüncü (soru işareti mi, nokta mı) ve dördüncü (virgül mü, nokta mı) yerlerdir. Üçünde de doğru seçim A’dadır.
Cevap A.`
},
{
  id: "tur-nk-216",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Sevgili Defne,
Mektubunda yeni mahallemizi merak ettiğini yazmıştın. (I) Taşındığımız evin bahçesinde elma, armut ve ayva ağaçları var. (II) Evet, burası eski mahallemizden çok daha sessiz. (III) Sabahları kuş sesleri, akşamları cırcır böcekleri eksik olmuyor. (IV) Yeni okulumda Ece, Can ve Burak’la hemen arkadaş oldum. Seni çok özledim. Yazın mutlaka bize gel.
**Bu mektupta numaralanmış cümlelerin hangisinde virgül, ötekilerden farklı bir görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Ağaç adlarını farklı sanma: “elma, armut ve ayva” aynı görevde sıralanmış sözcüklerdir; bu virgül III ve IV’tekiyle aynı görevdedir.",
    null,
    "Söz öbeklerini sıralı cümle sanma: “kuş sesleri” ve “cırcır böcekleri” aynı yüklemin (eksik olmuyor) iki öznesidir; ayrı yüklemleri yoktur. Bu virgül de eş görevli sözleri ayırır.",
    "Kişi adlarını hitap sanma: “Ece, Can ve Burak” kimseye seslenmiyor; arkadaş olunan kişileri sıralıyor. Bu virgül de eş görevli sözcükleri ayırır."
  ],
  aciklama: `Kural: Virgül, eş görevli sözcük ve söz öbeklerini ayırır; kendisinden sonraki cümleye bağlı olarak kabul ya da ret bildiren “evet, hayır, peki” gibi sözlerden sonra da konur.
Adım 1: I’de “elma, armut ve ayva” aynı görevde sıralanmış (ağaçların adları). IV’te “Ece, Can ve Burak” aynı görevde sıralanmış (arkadaş olunan kişiler).
Adım 2: III dikkat ister: “Sabahları kuş sesleri, akşamları cırcır böcekleri eksik olmuyor.” Tek yüklem var (eksik olmuyor); kuş sesleri ve cırcır böcekleri bu yüklemin iki öznesidir. Virgül yine eş görevli söz öbeklerini ayırıyor.
Adım 3: II’de virgül “Evet” sözünden sonra geliyor. “Evet” sıralanan bir öge değil; mektubu okuyanın merakına verilen bir onaydır. Onay sözünden sonra konan virgül farklı görevdedir.
Sağlama: Eş görevli sözlerde virgülün iki yanındaki sözlerin yeri değiştirilebilir (armut, elma); “Evet” sözünü ise cümlenin sonuna taşıyamazsın.
Cevap B.`
},
{
  id: "tur-nk-217",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Tiyatro kulübünün ilk toplantısında öğretmenimiz bize geçen yılki gösteride yaşadığımız olayı hatırlattı. O akşam perdenin açılmasına birkaç dakika kalmıştı ki salonun bütün ışıkları bir anda söndü ve…
Karanlıkta yanımda duran arkadaşım, adını burada yalnızca K… diye anacağım, kulağıma eğilip sordu:
— Şimdi ne yapacağız?
Ne diyeceğimi bilemeden fısıldadım:
— Bilmiyorum… Belki…
**Bu metinde üç nokta aşağıdaki görevlerin hangisinde __kullanılmamıştır__?**`,
  gorsel: null,
  secenekler: [
    "Anlatım olarak tamamlanmamış bir cümlenin sonunu göstermek",
    "Açık yazılmak istenmeyen bir sözün yerini tutmak",
    "Karşılıklı konuşmada eksik bırakılan bir cevabı göstermek",
    "Alıntı yapılan bir sözden atlanan bölümü göstermek"
  ],
  dogru: 3,
  hatalar: [
    "Kullanılan görevi gözden kaçırma: “bir anda söndü ve…” cümlesi anlam olarak yarım kalmıştır; sonra ne olduğu söylenmez. Üç nokta bu görevde kullanılmıştır.",
    "Kullanılan görevi gözden kaçırma: anlatıcı arkadaşının adını açıkça yazmak istemiyor, yalnızca ilk harfini verip gerisinin yerine üç nokta koyuyor (K…). Bu görev metinde vardır.",
    "Kullanılan görevi gözden kaçırma: “— Bilmiyorum… Belki…” cevabı yarım bırakılmış, yeterli olmayan bir cevaptır. Üç nokta bu görevde de kullanılmıştır.",
    null
  ],
  aciklama: `Kural: TDK’ye göre üç noktanın görevlerinden bazıları şunlardır: anlatım olarak tamamlanmamış cümlelerin sonuna konur; açık yazılmak istenmeyen kelime ve bölümlerin yerine konur; alıntılarda alınmayan kelime ve bölümlerin yerine konur; karşılıklı konuşmalarda eksik bırakılan cevaplarda kullanılır.
Adım 1: Metindeki üç noktaları tek tek bul. Birincisi “salonun bütün ışıkları bir anda söndü ve…” sözünde: cümle yarıda kalmış, sonrası okura bırakılmış. Bu, A’daki görevdir.
Adım 2: İkincisi “K…” sözünde: anlatıcı arkadaşının adını açık yazmak istemiyor. Bu, B’deki görevdir. Üçüncüsü “— Bilmiyorum… Belki…” cevabında: soru eksik, yetersiz bir cevapla karşılanmış. Bu, C’deki görevdir.
Adım 3: Metinde başka bir kaynaktan alıntı yapılıp bir bölümü atlanmış bir söz yok. Konuşma çizgisiyle verilen sözler iki arkadaşın kendi konuşmasıdır, bir yazıdan kısaltılarak alınmış değildir. Demek ki D’deki görev kullanılmamıştır.
Sık yapılan hata: “Bilmiyorum… Belki…” sözünü, bir sözden atlanan bölüm sanmak. Alıntıda atlanan bölüm, başka bir metinden alınan sözün bir kısmı çıkarılınca gösterilir; burada ise konuşan kişi cevabını kendisi yarım bırakmıştır.
Cevap D.`
},
{
  id: "tur-nk-218",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Mahallemizin en eski dükkânı saatçi Nuri Bey’inkidir (dedemin anlattığına göre dükkân 1950’lerde açılmış). Nuri Bey vitrindeki saatleri her sabah tek tek kurar. Bunu yaparken müşterilerine hep aynı öğüdü verir. Onun “Saat kurulmazsa zaman da durur.” sözünü mahallede bilmeyen yoktur.
**Bu metinde kullanılan noktalama işaretleriyle ilgili aşağıdakilerden hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Yay ayraç, cümleye ek bir bilgi katmak için kullanılmıştır.",
    "Kesme işareti, saygı sözüne gelen eki ayırmak için kullanılmıştır.",
    "Tırnak işareti, bir sözü özel olarak vurgulamak için kullanılmıştır.",
    "Kesme işareti, sayıya gelen eki ayırmak için kullanılmıştır."
  ],
  dogru: 2,
  hatalar: [
    "Doğru yargıyı yanlış sanma: ayraç içindeki söz dükkânın ne zaman açıldığına dair ek bir bilgi veriyor; cümleden çıkarılsa da cümle eksik kalmaz.",
    "Doğru yargıyı yanlış sanma: “Nuri Bey’inkidir” sözünde kişi adından sonra gelen saygı sözüne (Bey) gelen ek kesmeyle ayrılmıştır.",
    null,
    "Doğru yargıyı yanlış sanma: “1950’lerde” sözünde rakamla yazılmış sayıya gelen ek kesmeyle ayrılmıştır."
  ],
  aciklama: `Kural: Tırnak işareti başkasının sözünü olduğu gibi aktarmak, bir sözü özel olarak vurgulamak ve eser adlarını belirtmek için kullanılır. Bu görevleri birbirinden ayırmak için tırnak içindeki sözün kime ait olduğuna bakılır.
Adım 1: Tırnak içindeki söz: “Saat kurulmazsa zaman da durur.” Bu söz Nuri Bey’in müşterilerine verdiği öğüttür; metin onun sözünü değiştirmeden aktarıyor (“Onun … sözünü”).
Adım 2: Demek ki tırnak, özel vurgu için değil, başkasının sözünü aktarmak için kullanılmıştır. C’deki yargı yanlıştır.
Adım 3: Öbür yargıları denetle: ayraç ek bilgi veriyor (A doğru), “Bey’inkidir” sözünde saygı sözüne gelen ek ayrılmış (B doğru), “1950’lerde” sözünde sayıya gelen ek ayrılmış (D doğru).
Sık yapılan hata: Tırnak içindeki sözün bir cümle mi, tek bir sözcük mü olduğuna bakmadan “vurgu” demek. Vurgulanan söz genellikle bir iki sözcüktür ve kimseye ait değildir; burada ise bir kişinin kurduğu tam bir cümle var.
Cevap C.`
},
{
  id: "tur-nk-219",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `(I) Kütüphanede bulduğum eski defterin sayfalarını çevirdim mi aralarından kurumuş yapraklar dökülürdü? (II) İlk sayfada kurşun kalemle yazılmış bir not vardı: “Bu defteri bulan son sayfayı okusun.” (III) Sabırsızlanıp hemen son sayfaya geçtim. (IV) Orada tek bir soru yazıyordu: “Sen de bu deftere bir şey bırakacak mısın?”
**Bu metinde numaralanmış cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "İki noktayı yanlış sanma: “bir not vardı” sözünden sonra notun ne olduğu açıklanıyor; iki nokta doğru, aktarılan cümlenin noktası da tırnağın içinde kalmış.",
    "Zarf-fiilden sonra virgül arama: “Sabırsızlanıp” zarf-fiil eki almıştır; metin içinde zarf-fiilden sonra virgül konmaz, cümle doğrudur.",
    "Soru işaretini yanlış yerde sanma: aktarılan soru cümlesinin soru işareti tırnağın içinde kalır; bu kullanım doğrudur."
  ],
  aciklama: `Kural: “mı, mi” eki soru sormuyor da “-ınca, -ince” anlamında zaman bildiriyorsa cümle bir soru değildir; bu tür cümlelerin sonuna soru işareti konmaz. TDK örneği: “Akşam oldu mu sürüler döner.”
Adım 1: I’deki “çevirdim mi” sözünü “çevirince” diye oku: “Sayfalarını çevirince aralarından kurumuş yapraklar dökülürdü.” Anlam bozulmuyor; “mi” burada soru eki değil, zaman bildiriyor.
Adım 2: Cümle kimseye bir şey sormuyor, bir durumu bildiriyor. Bu yüzden sonuna soru işareti değil nokta konmalıdır. Doğrusu: “…sayfalarını çevirdim mi aralarından kurumuş yapraklar dökülürdü.”
Adım 3: II ve IV’te iki nokta açıklama başlatıyor ve tırnak içindeki işaretler içeride kalmış; IV’teki soru işareti gerçekten soru soran bir cümleye ait. III’te zarf-fiilden (Sabırsızlanıp) sonra virgül konmamış. Üçü de doğru.
Sık yapılan hata: Cümlede “mi” görünce hemen soru işareti koymak. Önce “mi”yi “-ınca, -ince” diye okumayı dene; anlam bozulmuyorsa cümle soru değildir.
Cevap A.`
},
{
  id: "tur-nk-220",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Okul panosundaki duyuru:
Bilim Günleri 3( )5 Mayıs tarihlerinde okulumuzun spor salonunda yapılacak. İlk gün robotik, kodlama, uzay( ) ikinci gün resim, müzik, tiyatro atölyeleri açılacak. Atölyelere katılmak isteyenler şu kurala uymalıdır( ) Her öğrenci en fazla iki atölyeye yazılabilir( )
**Bu duyuruda yay ayraçla ( ) gösterilen yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: ["(/) (;) (:) (.)", "(-) (,) (:) (.)", "(-) (;) (:) (.)", "(-) (;) (;) (!)"],
  dogru: 2,
  hatalar: [
    "Eğik çizgiyi aralık sanma: eğik çizgi tarihlerde gün, ay ve yılı ayırır (18/11/1969); iki gün arasındaki süreyi, yani “3’ünden 5’ine kadar” anlamını kısa çizgi verir.",
    "Takımları virgülle ayırma: iki günün atölyeleri kendi içinde virgülle sıralanmış; bu iki takımı virgülle ayırırsan “uzay” ile “ikinci gün” birbirine karışır. Takımlar noktalı virgülle ayrılır.",
    null,
    "Açıklama işaretini ve cümle sonunu karıştırma: “şu kurala uymalıdır” sözünden sonra kuralın kendisi geliyor; açıklama başlatan işaret noktalı virgül değil iki noktadır. Son cümle de duygu değil bilgi bildirdiği için ünlem değil nokta alır."
  ],
  aciklama: `Kural: Kısa çizgi “…den …e” anlamı verir; noktalı virgül virgülle ayrılmış takımları ayırır; iki nokta açıklama başlatır; bildirme cümlesi nokta ile biter.
Adım 1: Birinci yer: “3( )5 Mayıs” sözü 3 Mayıs’tan 5 Mayıs’a kadar süren bir aralığı gösteriyor. Aralık anlamını kısa çizgi verir: 3-5 Mayıs.
Adım 2: İkinci yer: “robotik, kodlama, uzay” birinci günün, “resim, müzik, tiyatro” ikinci günün takımıdır. Virgülle ayrılmış iki takımı noktalı virgül ayırır.
Adım 3: Üçüncü yer: “şu kurala uymalıdır” sözünden sonra kuralın ne olduğu açıklanıyor: iki nokta. Dördüncü yer: kural bir bildirme cümlesidir: nokta.
Sağlama: Sıra (-) (;) (:) (.) olunca her yer ayrı bir kurala uyar ve duyuru şöyle okunur: “…3-5 Mayıs tarihlerinde… uzay; ikinci gün… şu kurala uymalıdır: Her öğrenci en fazla iki atölyeye yazılabilir.”
Cevap C.`
},
{
  id: "tur-nk-221",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Durakta beklerken yaşlı bir adam yanıma yaklaştı:
(I) — Evladım, Saat Kulesi’ne giden otobüs buradan geçer mi?
(II) — Evet, on dakika sonra burada olur. dedim.
(III) Adam gülümseyerek teşekkür etti ve şunu ekledi:
(IV) — Senin gibi yardımsever gençler az kaldı!..
**Bu metinde numaralanmış bölümlerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Hitap ve kesmeyi yanlış sanma: “Evladım” bir seslenmedir, ardından virgül konur; “Saat Kulesi’ne” sözünde özel yer adına gelen ek kesmeyle ayrılmıştır. Bölüm doğrudur.",
    null,
    "İki noktayı yanlış sanma: edebî metinlerde konuşma bölümünden önceki ifadenin sonuna iki nokta konur; “şunu ekledi:” doğrudur.",
    "Ünlemden sonraki iki noktayı yanlış sanma: ünlem ve soru işaretinden sonra üç nokta yerine iki nokta konması yeterlidir; “!..” doğrudur."
  ],
  aciklama: `Kural: Konuşma çizgisiyle başlayan bir alıntı cümlesinden sonra “dedi, dedim, diye sordu” gibi bir söz geliyorsa alıntı cümlesinin bitimine nokta değil virgül konur: “— Bu akşam gidiyor musunuz, diye sordu.”
Adım 1: II’de konuşma “— Evet, on dakika sonra burada olur” sözüyle bitiyor ve ardından “dedim” geliyor.
Adım 2: Alıntı cümlesinin sonuna nokta konmuş, sonra da cümle “dedim” ile sürmüş. Nokta cümleyi bitirdiği için “dedim” havada kalır. Doğrusu: “— Evet, on dakika sonra burada olur, dedim.”
Adım 3: Öbür bölümleri denetle. I’de hitaptan sonra virgül ve yer adına kesme var; III’te konuşmadan önceki ifade iki noktayla bitiyor; IV’te ünlemden sonra iki nokta (!..) kullanılmış. Üçü de doğru.
Sık yapılan hata: IV’teki “!..” yazılışını yanlış sanmak. Üç nokta ünlem ya da soru işaretinden sonra gelecekse iki noktaya iner: “!..”, “?..”.
Cevap B.`
},
{
  id: "tur-nk-222",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `(I) Kasaba müzemizin en kalabalık salonu yöremizin ilk kadın ressamı Leyla Aras’a ayrılmış. (II) Girişteki levhada ressamın doğduğu köyün adı (Yukarıçamlı) ve ilk tablosunu yaptığı yıl yazıyor. (III) Rehberimiz Leyla Aras (1932-2001)’ın ömrü boyunca bu köyden hiç ayrılmadığını söyledi. (IV) Salondan çıkarken ziyaretçi defterine şu cümleyi yazdım: “Renkleriniz hâlâ çok canlı!”
**Bu metinde numaralanmış cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 2,
  hatalar: [
    "Kişi adına gelen eki yanlış sanma: “Leyla Aras” bir kişi adıdır; aldığı ek kesmeyle ayrılır, “Aras’a” doğrudur.",
    "Ayraçtan önceki eki yanlış sanma: II’de ek (“adı” sözündeki iyelik eki) ayraçtan önce yazılmıştır; bu, kuralın doğru uygulanmış hâlidir.",
    null,
    "İki nokta ve tırnağı yanlış sanma: “şu cümleyi yazdım” sözünden sonra yazılan cümle açıklanıyor; iki nokta doğru, ünlem de tırnağın içinde kalmış."
  ],
  aciklama: `Kural: Bir özel ad için yay ayraç içinde açıklama yapılıyorsa, o ada gelen ek ayraçtan önce yazılır: Yunus Emre’nin (1240?-1320) gibi.
Adım 1: III’te “Leyla Aras” adından sonra ayraç içinde doğum ve ölüm yılları verilmiş; ada gelen “-ın” eki ise ayraçtan sonraya bırakılmış: “(1932-2001)’ın”.
Adım 2: Ek, ait olduğu addan kopmuş ve sayılara eklenmiş gibi görünüyor. Doğrusu: “Rehberimiz Leyla Aras’ın (1932-2001) ömrü boyunca…”
Adım 3: II’de aynı kural doğru uygulanmış: “köyün adı (Yukarıçamlı)” sözünde ek (adı) ayraçtan önce yazılmış. I’de kişi adına kesme, IV’te iki nokta ve tırnak doğru.
Sık yapılan hata: II ile III’ü karıştırmak. İkisinde de ayraç var; farkı, ekin ayraçtan önce mi sonra mı yazıldığıdır. Ek her zaman ait olduğu sözle birlikte, ayraçtan önce yazılır.
Cevap C.`
},
{
  id: "tur-nk-223",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Dedemin bahçesindeki kuyu -köyde hâlâ su veren tek kuyu- bu yaz yeniden onarıldı.
Bu cümlede kısa çizgiler bir sözü iki yanından kuşatıyor. Aynı iş, bazı cümlelerde kısa çizgi yerine virgülle de yapılabilir.
**Buna göre bu cümledeki kısa çizgiler, aşağıdakilerin hangisindeki virgüllerle aynı görevde kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Kalemler, silgiler, boya kutuları ve defterler masanın üstüne dağılmıştı.",
    "Sevgili kardeşim, mektubunu dün aldım, okuyunca çok sevindim.",
    "Rüzgâr dindi, yağmur kesildi, bulutların arasından güneş çıktı.",
    "Okulumuzun en yaşlı ağacı, bahçenin köşesindeki çınar, bu bahar da yapraklandı."
  ],
  dogru: 3,
  hatalar: [
    "Eş görevli sözcükleri ara söz sanma: “kalemler, silgiler” aynı yüklemin sıralanan özneleridir; cümleye sonradan eklenmiş bir açıklama değildir.",
    "Hitap ve sıralı cümle virgülünü ara söz sanma: birinci virgül seslenmeden sonra, ikinci virgül iki sıralı cümle arasında; ikisi de bir sözü iki yandan kuşatmıyor.",
    "Sıralı cümleleri ara söz sanma: virgüllerin ayırdığı her bölümün kendi yüklemi var (dindi, kesildi, çıktı); bunlar ara söz değil, sıralı cümledir.",
    null
  ],
  aciklama: `Kural: Cümle içindeki ara sözler ya da ara cümleler, başlarına ve sonlarına konan virgüllerle ya da kısa çizgilerle ayrılır. Ara söz çıkarılınca cümle eksiksiz kalır.
Adım 1: Örnekteki çizgilerin arasındaki sözü çıkar: “Dedemin bahçesindeki kuyu bu yaz yeniden onarıldı.” Cümle tam. Demek ki “köyde hâlâ su veren tek kuyu” sözü, kuyuyu tanıtan bir ara sözdür.
Adım 2: D’de de aynı yapı var: “bahçenin köşesindeki çınar” sözü, “okulumuzun en yaşlı ağacı”nın hangisi olduğunu açıklıyor. Çıkarınca cümle tam kalıyor: “Okulumuzun en yaşlı ağacı bu bahar da yapraklandı.”
Adım 3: A’da virgüller eş görevli sözcükleri, B’de hitabı ve sıralı cümleleri, C’de sıralı cümleleri ayırıyor.
Sağlama: D’deki virgülleri kısa çizgiyle değiştirmeyi dene: “Okulumuzun en yaşlı ağacı -bahçenin köşesindeki çınar- bu bahar da yapraklandı.” Anlam ve yapı korunuyor.
Cevap D.`
},
{
  id: "tur-nk-224",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Okul gazetemizde çıkan habere göre kitap kampanyamız sona erdi:
(I) Kampanyaya en çok kitabı bu yıl da 6.’ncı sınıflar getirdi. (II) Okul genelinde tam 1.240 kitap toplandı. (III) Kitaplar dün saat 10.30’da açılan sergide velilere tanıtıldı. (IV) Önümüzdeki hafta 8. sınıfların yardımıyla köy okullarına gönderilecek.
**Bu metinde numaralanmış cümlelerin hangisinde noktalama yanlışı vardır?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 0,
  hatalar: [
    null,
    "Büyük sayıdaki noktayı yanlış sanma: dört ve daha çok basamaklı sayılar sondan üçlü gruplara ayrılır ve araya nokta konur; “1.240” doğrudur.",
    "Saatteki noktayı yanlış sanma: saat ve dakikayı ayırmak için nokta konur, sayıya gelen ek de kesmeyle ayrılır; “10.30’da” doğrudur.",
    "Sıra sayısındaki noktayı yanlış sanma: sıra sayısı rakamla yazılınca rakamdan sonra nokta konabilir; “8. sınıflar” doğrudur."
  ],
  aciklama: `Kural: Sıra sayıları rakamla iki yoldan biriyle yazılır: ya rakamdan sonra nokta konur (6.) ya da kesme işaretinden sonra sıra eki yazılır (6’ncı). İkisi birlikte kullanılmaz: 2.’nci değil 2’nci ya da 2.
Adım 1: I’deki “6.’ncı” yazılışında hem nokta hem de kesmeyle ayrılmış “-ncı” eki var. Sıra iki kez gösterilmiş.
Adım 2: Doğrusu ya “6. sınıflar” ya da “6’ncı sınıflar” olmalıdır.
Adım 3: II’de büyük sayı üçlü gruplara ayrılmış, III’te saat ile dakika nokta ile ayrılmış, IV’te sıra sayısı yalnızca nokta ile gösterilmiş. Üçü de doğru.
Sık yapılan hata: IV’teki “8.” ile I’deki “6.’ncı” yazılışını aynı sanmak. IV’te yalnızca nokta var; I’de nokta ile ek üst üste binmiş.
Cevap A.`
},
{
  id: "tur-nk-225",
  kazanim: "T.8.4.16",
  kademe: 2,
  zorluk: 3,
  soru: `Geçen hafta sonu ailecek göl kıyısında kamp yaptık. (I) Sabah erkenden yola çıktık, öğlene doğru göle vardık. (II) Babam çadırı, ipleri, kazıkları taşıdı, annem, ablam ve ben yiyecekleri yerleştirdik. (III) Akşam olunca ateşin başına toplandık, dedem eski bir türkü söyledi. (IV) Kamp alanı küçük ama çok temizdi.
**Bu metinde numaralanmış cümlelerin hangisinde bir virgülün yerine noktalı virgül kullanılması gerekir?**`,
  gorsel: null,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Her sıralı cümlede noktalı virgül arama: I’deki iki sıralı cümlenin içinde virgül yok; aralarına virgül konması yeterlidir.",
    null,
    "Uzun cümleyi noktalı virgül gerekçesi sanma: III’teki sıralı cümlelerin içinde virgül yok; cümle uzun olsa da aralarına virgül yeterlidir.",
    "Virgül olmayan yerde işaret arama: IV’te hiç virgül yok ve “ama” bağlacından önce işaret gerekmez; değiştirilecek bir virgül bulunmuyor."
  ],
  aciklama: `Kural: Ögeleri arasında virgül bulunan sıralı cümleler birbirinden noktalı virgülle ayrılır. Sıralı cümlelerin içinde virgül yoksa aralarına virgül konması yeterlidir.
Adım 1: II’de iki cümle var: “Babam çadırı, ipleri, kazıkları taşıdı” ve “annem, ablam ve ben yiyecekleri yerleştirdik”. İkisinin içinde de virgül var.
Adım 2: Cümleleri ayıran işaret de virgül olunca sınır kaybolur: “kazıkları taşıdı, annem, ablam…” diye okunduğunda annemin de taşınan eşyalardan biri sanılabilir. İki cümle arasındaki virgül noktalı virgül olmalıdır: “Babam çadırı, ipleri, kazıkları taşıdı; annem, ablam ve ben yiyecekleri yerleştirdik.”
Adım 3: I ve III’teki sıralı cümlelerin içinde virgül yok; aralarındaki virgül doğru. IV’te virgül yok.
Sağlama: Noktalı virgül koyduktan sonra her takım kendi içinde virgüllerle, takımlar da birbirinden noktalı virgülle ayrılmış olur.
Cevap B.`
}
);
