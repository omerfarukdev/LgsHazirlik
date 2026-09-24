// Türkçe — Sözel Mantık: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
// Kazanım: T.8.3.25 (çıkarım), tablo/çizelge verili sorularda T.8.3.32.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sozel-mantik"] = window.LGS_BANK["sozel-mantik"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "tur-sm-101",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Pencere önüne yan yana dört saksı konmuştur. Saksılara fesleğen, nane, maydanoz ve biberiye dikilecektir.
• Fesleğen 1 numaralı saksıya dikilecektir.
• Nane, fesleğenin hemen sağındaki saksıya dikilecektir.
• Maydanoz, biberiyenin solundaki saksılardan birine dikilecektir.

**Buna göre 3 numaralı saksıya hangi bitki dikilecektir?**`,
  gorsel: "<svg viewBox=\"0 0 442 136\" role=\"img\"><text x=\"221\" y=\"24\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Saksılar (soldan sağa)</text><rect x=\"20\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"65\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"65\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><rect x=\"124\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"169\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"169\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><rect x=\"228\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"273\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"273\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><rect x=\"332\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"377\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"377\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text></svg>",
  secenekler: [
    "Fesleğen",
    "Nane",
    "Maydanoz",
    "Biberiye"
  ],
  dogru: 2,
  hatalar: [
    "Konumu karıştırma: fesleğenin yeri açıkça verilmiştir, 1 numaralı saksıdadır.",
    "\"Hemen sağındaki\" ifadesini yanlış yerleştirme: nane, fesleğenin hemen sağında yani 2 numaralı saksıdadır.",
    null,
    "Sol ile sağı karıştırma: maydanoz biberiyenin solunda olduğu için biberiye en sağdaki 4 numaralı saksıdadır."
  ],
  aciklama: `Sıralama sorularında önce yeri kesin verilen öğeyi yerleştir, sonra ona bağlı olanları ekle.
Adım 1: Fesleğen 1 numaralı saksıdadır.
Adım 2: Nane fesleğenin hemen sağındadır, yani 2 numaralı saksıdadır.
Adım 3: Geriye 3 ve 4 numaralı saksılar kaldı. Maydanoz biberiyenin solunda olacağı için maydanoz 3, biberiye 4 numaralı saksıya dikilir.
Sağlama: Sıra fesleğen, nane, maydanoz, biberiye olur; üç kuralın üçü de sağlanır.
Cevap C.`
},
{
  id: "tur-sm-102",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Okulun kulüp panosuna, etkinliğin tarihini, yerini ve saatini birlikte gösteren afişler asılabilmektedir. Tabloda dört afişte hangi bilginin bulunduğu (✓) ya da bulunmadığı (✗) gösterilmiştir.

**Buna göre hangi afiş panoya asılabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Afiş</th><th>Tarih</th><th>Yer</th><th>Saat</th></tr><tr><td>Satranç turnuvası</td><td>✓</td><td>✗</td><td>✓</td></tr><tr><td>Resim sergisi</td><td>✗</td><td>✓</td><td>✓</td></tr><tr><td>Doğa yürüyüşü</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Kitap takası</td><td>✓</td><td>✓</td><td>✗</td></tr></table>",
  secenekler: [
    "Doğa yürüyüşü afişi",
    "Satranç turnuvası afişi",
    "Kitap takası afişi",
    "Resim sergisi afişi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eksik bilgiyi gözden kaçırma: satranç turnuvası afişinde yer bilgisi yoktur (✗).",
    "Eksik bilgiyi gözden kaçırma: kitap takası afişinde saat bilgisi yoktur (✗).",
    "Eksik bilgiyi gözden kaçırma: resim sergisi afişinde tarih bilgisi yoktur (✗)."
  ],
  aciklama: `Kural "birlikte" diyorsa üç koşulun üçü de aynı anda sağlanmalıdır; biri eksikse afiş asılamaz.
Adım 1: Her afişin satırını soldan sağa oku ve ✗ olup olmadığına bak.
Adım 2: Satranç turnuvasında yer, resim sergisinde tarih, kitap takasında saat eksiktir.
Adım 3: Satırında üç ✓ bulunan tek afiş doğa yürüyüşü afişidir.
Sık yapılan hata: Satırda iki ✓ görünce afişi uygun saymak. Kuraldaki "birlikte" sözcüğü her bilginin bulunmasını ister.
Cevap A.`
},
{
  id: "tur-sm-103",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Aylin, Batu ve Cemal'in her biri farklı bir çalgı çalmaktadır: keman, gitar ve flüt. Tabloda ✗ işareti, o kişinin o çalgıyı çalmadığını gösterir.

**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th></th><th>Keman</th><th>Gitar</th><th>Flüt</th></tr><tr><td>Aylin</td><td>✗</td><td>✗</td><td></td></tr><tr><td>Batu</td><td>✗</td><td></td><td></td></tr><tr><td>Cemal</td><td></td><td></td><td></td></tr></table>",
  secenekler: [
    "Aylin gitar çalar.",
    "Batu flüt çalar.",
    "Cemal gitar çalar.",
    "Cemal keman çalar."
  ],
  dogru: 3,
  hatalar: [
    "Tabloyu yanlış okuma: Aylin'in satırında gitarın altında ✗ vardır, Aylin gitar çalmaz.",
    "Eleme sırasını atlama: Aylin'in çalabileceği tek çalgı flüttür; flüt Aylin'in olduğu için Batu flüt çalamaz.",
    "Elemeyi yarım bırakma: Batu keman çalmaz ve flüt Aylin'indir; bu yüzden gitar Batu'ya kalır.",
    null
  ],
  aciklama: `Eşleştirme tablolarında önce tek boş hücresi kalan satırı bul; o hücre kesin cevaptır.
Adım 1: Aylin'in satırında keman ve gitar ✗ ile işaretlenmiştir. Aylin flüt çalar.
Adım 2: Batu keman çalmaz, flüt de Aylin'indir. Batu gitar çalar.
Adım 3: Geriye kalan keman Cemal'indir.
Sağlama: Aylin flüt, Batu gitar, Cemal keman; üç çalgı da farklı ve tablodaki hiçbir ✗ ile çelişmiyor.
Cevap D.`
},
{
  id: "tur-sm-104",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir gençlik merkezinde pazartesiden perşembeye kadar her gün tek bir kurs yapılmaktadır: resim, müzik, satranç ve dans. Görselde salı günü yapılan kurs yazılmıştır.
• Resim kursu, satranç kursundan hemen sonraki gün yapılır.
• Dans kursu pazartesi günü yapılmaz.

**Buna göre pazartesi günü hangi kurs yapılır?**`,
  gorsel: "<svg viewBox=\"0 0 498 110\" role=\"img\"><rect x=\"20\" y=\"14\" width=\"104\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"72\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"72\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Pazartesi</text><rect x=\"138\" y=\"14\" width=\"104\" height=\"56\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">Satranç</text><text x=\"190\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Salı</text><rect x=\"256\" y=\"14\" width=\"104\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"308\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"308\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Çarşamba</text><rect x=\"374\" y=\"14\" width=\"104\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"426\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"426\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Perşembe</text></svg>",
  secenekler: [
    "Resim",
    "Müzik",
    "Satranç",
    "Dans"
  ],
  dogru: 1,
  hatalar: [
    "\"Hemen sonraki\" ifadesinin yönünü ters çevirme: resim, satrançtan sonraki gün yani çarşamba yapılır; pazartesi satrançtan önceki gündür.",
    null,
    "Verilen bilgiyi yanlış güne taşıma: görselde satranç kursu salı gününe yazılmıştır.",
    "Olumsuz bilgiyi gözden kaçırma: dans kursunun pazartesi yapılmadığı açıkça söylenmiştir."
  ],
  aciklama: `Adım 1: Görselden satranç kursunun salı olduğunu oku.
Adım 2: Resim satrançtan hemen sonraki gündür, yani çarşambadır.
Adım 3: Pazartesi ve perşembe günleri müzik ile dansa kalır. Dans pazartesi yapılmadığı için dans perşembe, müzik pazartesi olur.
Sağlama: Pazartesi müzik, salı satranç, çarşamba resim, perşembe dans; iki kural da sağlanıyor.
Cevap B.`
},
{
  id: "tur-sm-105",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okulun geri dönüşüm köşesindeki kutular ve bu kutulara atılacak atıklar birinci tabloda, dört öğrencinin attığı atıklar ikinci tabloda verilmiştir.

**Buna göre hangi öğrenci atığını kurala __uygun olmayan__ kutuya atmıştır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kutu</th><th>Atılacak atık</th></tr><tr><td>Mavi</td><td>Kâğıt ve karton</td></tr><tr><td>Sarı</td><td>Plastik ve metal</td></tr><tr><td>Yeşil</td><td>Cam</td></tr></table><table class=\"tablo\"><tr><th>Öğrenci</th><th>Attığı atık</th><th>Attığı kutu</th></tr><tr><td>Elif</td><td>Gazete</td><td>Mavi</td></tr><tr><td>Onur</td><td>Cam kavanoz</td><td>Sarı</td></tr><tr><td>Deniz</td><td>Metal içecek kutusu</td><td>Sarı</td></tr><tr><td>Pelin</td><td>Karton koli</td><td>Mavi</td></tr></table>",
  secenekler: [
    "Elif",
    "Onur",
    "Deniz",
    "Pelin"
  ],
  dogru: 1,
  hatalar: [
    "Satırı yanlış değerlendirme: gazete kâğıttır ve kâğıt mavi kutuya atılır; Elif kurala uymuştur.",
    null,
    "Satırı yanlış değerlendirme: metal içecek kutusu sarı kutuya atılır; Deniz kurala uymuştur.",
    "Satırı yanlış değerlendirme: karton mavi kutuya atılır; Pelin kurala uymuştur."
  ],
  aciklama: `İki tablolu sorularda birinci tablo kuralı, ikinci tablo uygulamayı verir. Her satırı kuralla karşılaştır.
Adım 1: Elif gazeteyi (kâğıt) mavi kutuya atmış; uygun.
Adım 2: Onur cam kavanozu sarı kutuya atmış. Cam, yeşil kutuya atılmalıdır; uygun değil.
Adım 3: Deniz metal kutuyu sarıya, Pelin kartonu maviye atmış; ikisi de uygun.
Sık yapılan hata: Kavanozun kapağını düşünüp atığı metal sanmak. Tabloda atık "cam kavanoz" olarak yazılmıştır.
Cevap B.`
},
{
  id: "tur-sm-106",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir fırının önünde Ada, Berk, Cansu ve Doruk sıraya girmiştir.
• Sıranın en önünde Ada vardır.
• Berk, Ada'nın hemen arkasındadır.
• Cansu sıranın en arkasında değildir.

**Buna göre sıranın en arkasında kim vardır?**`,
  gorsel: "<svg viewBox=\"0 0 418 136\" role=\"img\"><text x=\"209\" y=\"24\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Fırın kapısı ← sıranın önü</text><rect x=\"20\" y=\"40\" width=\"84\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"62\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"62\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1.</text><rect x=\"118\" y=\"40\" width=\"84\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"160\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2.</text><rect x=\"216\" y=\"40\" width=\"84\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"258\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"258\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3.</text><rect x=\"314\" y=\"40\" width=\"84\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"356\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"356\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4.</text></svg>",
  secenekler: [
    "Cansu",
    "Berk",
    "Ada",
    "Doruk"
  ],
  dogru: 3,
  hatalar: [
    "Olumsuz bilgiyi gözden kaçırma: Cansu'nun en arkada olmadığı açıkça söylenmiştir.",
    "\"Hemen arkasında\" ifadesini \"en arkada\" sanma: Berk, Ada'nın hemen arkasında yani 2. sıradadır.",
    "Önü ile arkayı karıştırma: Ada sıranın en önündedir.",
    null
  ],
  aciklama: `Adım 1: Ada en öndedir, 1. sıradadır.
Adım 2: Berk Ada'nın hemen arkasında, 2. sıradadır.
Adım 3: 3. ve 4. sıralar Cansu ile Doruk'a kalır. Cansu en arkada olmadığı için 3. sıradadır; en arkada Doruk vardır.
Sağlama: Sıra Ada, Berk, Cansu, Doruk; üç bilgi de sağlanıyor.
Cevap D.`
},
{
  id: "tur-sm-107",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir yüzme havuzunun derin bölümüne girebilmek için iki koşulun birlikte sağlanması gerekir: ileri seviye yüzücülere verilen mavi boneyi takmak ve cankurtaranın imzaladığı giriş kartını taşımak. Dört öğrencinin durumu tabloda verilmiştir.

**Buna göre hangi öğrenci derin bölüme girebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>Bone rengi</th><th>İmzalı giriş kartı</th></tr><tr><td>Kaan</td><td>Mavi</td><td>Yok</td></tr><tr><td>Tuba</td><td>Yeşil</td><td>Var</td></tr><tr><td>Mira</td><td>Mavi</td><td>Var</td></tr><tr><td>Onat</td><td>Sarı</td><td>Yok</td></tr></table>",
  secenekler: [
    "Mira",
    "Kaan",
    "Tuba",
    "Onat"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Koşullardan birini yeterli sanma: Kaan'ın bonesi mavidir ama imzalı giriş kartı yoktur.",
    "Koşullardan birini yeterli sanma: Tuba'nın kartı vardır ama bonesi mavi değil, yeşildir.",
    "Satırı yanlış okuma: Onat'ın ne mavi bonesi ne de imzalı kartı vardır; iki koşulu da sağlamaz."
  ],
  aciklama: `"İki koşulun birlikte sağlanması", iki koşulun ikisinin de aynı kişide bulunması demektir.
Adım 1: Mavi bonesi olanları bul: Kaan ve Mira.
Adım 2: Bu ikisinden imzalı kartı olanı bul: Mira.
Sağlama: Mira'nın satırında "Mavi" ve "Var" birlikte yer alır; başka hiçbir satırda ikisi birlikte yoktur.
Cevap A.`
},
{
  id: "tur-sm-108",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Dört katlı bir apartmanın her katında bir aile oturmaktadır: Kaya, Öz, Aras ve Er aileleri.
• Kaya ailesi en üst katta oturur.
• Öz ailesi, Kaya ailesinin hemen altındaki katta oturur.
• Aras ailesi 1. katta oturmaz.

**Buna göre 1. katta hangi aile oturur?**`,
  gorsel: "<svg viewBox=\"0 0 340 282\" role=\"img\"><polygon points=\"100,60 190,14 280,60\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"100\" y=\"216\" width=\"180\" height=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"248\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"88\" y=\"248\" text-anchor=\"end\" font-size=\"15\" fill=\"currentColor\">1. kat</text><rect x=\"100\" y=\"164\" width=\"180\" height=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"196\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"88\" y=\"196\" text-anchor=\"end\" font-size=\"15\" fill=\"currentColor\">2. kat</text><rect x=\"100\" y=\"112\" width=\"180\" height=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"144\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"88\" y=\"144\" text-anchor=\"end\" font-size=\"15\" fill=\"currentColor\">3. kat</text><rect x=\"100\" y=\"60\" width=\"180\" height=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"92\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"88\" y=\"92\" text-anchor=\"end\" font-size=\"15\" fill=\"currentColor\">4. kat</text><line x1=\"70\" y1=\"268\" x2=\"310\" y2=\"268\" stroke=\"currentColor\" stroke-width=\"4\"/></svg>",
  secenekler: [
    "Aras ailesi",
    "Öz ailesi",
    "Er ailesi",
    "Kaya ailesi"
  ],
  dogru: 2,
  hatalar: [
    "Olumsuz bilgiyi gözden kaçırma: Aras ailesinin 1. katta oturmadığı açıkça söylenmiştir.",
    "\"Hemen altında\" ifadesini \"en altta\" sanma: Öz ailesi, Kaya ailesinin hemen altında yani 3. kattadır.",
    null,
    "Üst ile altı karıştırma: Kaya ailesi en üst katta, 4. katta oturur."
  ],
  aciklama: `Adım 1: Kaya ailesi en üstte, 4. kattadır.
Adım 2: Öz ailesi hemen altta, 3. kattadır.
Adım 3: 1. ve 2. katlar Aras ile Er ailelerine kalır. Aras 1. katta oturmadığı için 2. kattadır; 1. katta Er ailesi oturur.
Sağlama: Aşağıdan yukarıya Er, Aras, Öz, Kaya; üç bilgi de sağlanıyor.
Cevap C.`
},
{
  id: "tur-sm-109",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir kart oyununda kartlar soldan sağa yan yana dizilir. Oyunun kuralı şudur: Bir kartın hemen sağına ancak onunla aynı renkte ya da aynı şekilde olan bir kart konabilir. Masadaki kartlar ve renkleri görselde verilmiştir; sıradaki oyuncu en sağdaki boş yere bir kart koyacaktır.

**Buna göre boş yere aşağıdaki kartlardan hangisi konabilir?**`,
  gorsel: "<svg viewBox=\"0 0 560 150\" role=\"img\"><rect x=\"30\" y=\"14\" width=\"120\" height=\"120\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"90,30 130,92 50,92\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"90\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">sarı</text><rect x=\"180\" y=\"14\" width=\"120\" height=\"120\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"62\" r=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">sarı</text><rect x=\"330\" y=\"14\" width=\"120\" height=\"120\" rx=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"390\" cy=\"62\" r=\"32\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"390\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">kırmızı</text><rect x=\"480\" y=\"14\" width=\"70\" height=\"120\" rx=\"10\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><text x=\"515\" y=\"80\" text-anchor=\"middle\" font-size=\"22\" fill=\"var(--vurgu)\">?</text></svg>",
  secenekler: [
    "Mavi kare",
    "Yeşil üçgen",
    "Sarı yıldız",
    "Mavi daire"
  ],
  dogru: 3,
  hatalar: [
    "Kuralı yanlış anlama: mavi kare, en sağdaki kırmızı daireyle ne aynı renkte ne de aynı şekildedir.",
    "Kuralı en soldaki karta göre uygulama: üçgen ilk kartla aynı şekildedir ama yeni kart, en sağdaki kırmızı dairenin yanına konacaktır.",
    "Kuralı ortadaki karta göre uygulama: sarı, ortadaki kartın rengidir; yeni kartın yanında ise kırmızı daire vardır.",
    null
  ],
  aciklama: `Adım 1: Yeni kart, en sağdaki kartın hemen sağına konacaktır. O kart kırmızı bir dairedir.
Adım 2: Yeni kart ya kırmızı olmalı ya da daire olmalıdır.
Adım 3: Seçeneklerde kırmızı kart yoktur; daire olan tek kart mavi dairedir.
Sık yapılan hata: Kuralı masadaki bütün kartlarla karşılaştırmak. Kural yalnızca yan yana gelen iki kart için geçerlidir.
Cevap D.`
},
{
  id: "tur-sm-110",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir sınıfın haftalık nöbet çizelgesi aşağıda verilmiştir. Sınıfın kuralına göre nöbetçi öğrenci o gün okula gelmezse nöbeti, çizelgede kendisinden sonraki günün nöbetçisi tutar. Bu hafta çarşamba günü Cemre okula gelmemiştir.

**Buna göre çarşamba günü nöbeti kim tutmuştur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Gün</th><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th><th>Perşembe</th><th>Cuma</th></tr><tr><td>Nöbetçi</td><td>Arda</td><td>Beril</td><td>Cemre</td><td>Deniz</td><td>Ege</td></tr></table>",
  secenekler: [
    "Beril",
    "Deniz",
    "Ege",
    "Arda"
  ],
  dogru: 1,
  hatalar: [
    "Yönü ters çevirme: Beril, Cemre'den önceki günün nöbetçisidir; kural sonraki günün nöbetçisini ister.",
    null,
    "Bir gün fazla sayma: Ege iki gün sonraki cumanın nöbetçisidir; kural hemen sonraki günü ister.",
    "Çizelgenin başına dönme: Arda pazartesinin nöbetçisidir; çarşambadan sonra gelen gün perşembedir."
  ],
  aciklama: `Adım 1: Çizelgede çarşambanın nöbetçisi Cemre'dir.
Adım 2: Cemre gelmediği için nöbeti "kendisinden sonraki günün nöbetçisi" tutar.
Adım 3: Çarşambadan sonraki gün perşembedir; perşembenin nöbetçisi Deniz'dir.
Sık yapılan hata: "Sonraki" sözcüğünü tabloda sola doğru okumak. Günler soldan sağa ilerler.
Cevap B.`
},
{
  id: "tur-sm-111",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Üç kardeşin yaşları birbirinden farklıdır. Nil, Umut'tan büyüktür. Umut da Tuna'dan büyüktür.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Umut, kardeşlerin en büyüğüdür.",
    "Tuna, Nil'den büyüktür.",
    "Nil, kardeşlerin en büyüğüdür.",
    "Umut, kardeşlerin en küçüğüdür."
  ],
  dogru: 2,
  hatalar: [
    "Zinciri yarım okuma: Umut, Tuna'dan büyüktür ama Nil, Umut'tan da büyüktür.",
    "Yönü ters çevirme: Nil Umut'tan, Umut da Tuna'dan büyük olduğu için Nil, Tuna'dan büyüktür.",
    null,
    "Karşılaştırmanın yönünü karıştırma: Umut, Tuna'dan büyüktür; en küçük Tuna'dır."
  ],
  aciklama: `Adım 1: İki karşılaştırmayı tek zincirde birleştir: Nil > Umut > Tuna.
Adım 2: Zincirin başında Nil, sonunda Tuna vardır.
Adım 3: Buna göre en büyük Nil, ortanca Umut, en küçük Tuna'dır.
Sağlama: "Nil, Umut'tan büyük" ve "Umut, Tuna'dan büyük" bilgileri bu sıralamayla uyuşuyor.
Cevap C.`
},
{
  id: "tur-sm-112",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Beş arkadaş bir sözcük zinciri oyunu oynamaktadır. Kurala göre her oyuncu, bir önceki oyuncunun söylediği sözcüğün son harfiyle başlayan bir sözcük söylemelidir. Oyuncuların sırası ve söyledikleri sözcükler tabloda verilmiştir.

**Buna göre hangi oyuncu kurala __uymamıştır__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Sıra</th><th>Oyuncu</th><th>Söylediği sözcük</th></tr><tr><td>1</td><td>Ela</td><td>bardak</td></tr><tr><td>2</td><td>Mert</td><td>kiraz</td></tr><tr><td>3</td><td>Sena</td><td>zil</td></tr><tr><td>4</td><td>Kaan</td><td>limon</td></tr><tr><td>5</td><td>Efe</td><td>masa</td></tr></table>",
  secenekler: [
    "Efe",
    "Kaan",
    "Sena",
    "Mert"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yanlış harfe bakma: \"zil\" sözcüğü l harfiyle biter, \"limon\" da l ile başlar; Kaan kurala uymuştur.",
    "Yanlış harfe bakma: \"kiraz\" sözcüğü z harfiyle biter, \"zil\" de z ile başlar; Sena kurala uymuştur.",
    "Yanlış harfe bakma: \"bardak\" sözcüğü k harfiyle biter, \"kiraz\" da k ile başlar; Mert kurala uymuştur."
  ],
  aciklama: `Adım 1: Her sözcüğün son harfini yaz: bardak → k, kiraz → z, zil → l, limon → n.
Adım 2: Sonraki sözcüğün ilk harfiyle karşılaştır: kiraz (k) uygun, zil (z) uygun, limon (l) uygun.
Adım 3: "limon" n harfiyle biter ama Efe'nin söylediği "masa" m harfiyle başlar. Kurala uymayan Efe'dir.
Sık yapılan hata: Sözcüğün son harfi yerine ilk harfine ya da sondan bir önceki harfine bakmak.
Cevap A.`
},
{
  id: "tur-sm-113",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir rafa roman, şiir, öykü ve deneme kitapları yan yana dizilecektir. Görselde deneme kitabının yeri gösterilmiştir. Diğer kitaplar şu kurallara göre dizilecektir:
• Roman, rafın uçlarındaki iki yerden birine konacaktır.
• Şiir ile öykü kitapları yan yana konmayacaktır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 482 136\" role=\"img\"><text x=\"241\" y=\"24\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Raftaki yerler (soldan sağa)</text><rect x=\"20\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"70\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><rect x=\"134\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">Deneme</text><text x=\"184\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><rect x=\"248\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"298\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"298\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><rect x=\"362\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"412\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"412\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text></svg>",
  secenekler: [
    "Şiir kitabı 1 numaralı yerdedir.",
    "Öykü kitabı 3 numaralı yerdedir.",
    "Roman 1 numaralı yerdedir.",
    "Roman 4 numaralı yerdedir."
  ],
  dogru: 3,
  hatalar: [
    "Olasılığı kesinlik sanma: şiir 1 numarada olabilir ama öykü 1'de, şiir 3'te de olabilir.",
    "Olasılığı kesinlik sanma: öykü 3 numarada olabilir ama şiir 3'te, öykü 1'de de olabilir.",
    "Durumu denemeden seçme: roman 1'e konursa şiir ile öykü 3 ve 4'e, yani yan yana düşer; bu kurala aykırıdır.",
    null
  ],
  aciklama: `"Kesinlikle doğru" olan ifade, kurallara uyan bütün dizilişlerde doğru olmalıdır.
Adım 1: Deneme 2 numarada. Roman 1 ya da 4 numarada olabilir.
Adım 2: Roman 1'de olursa şiir ile öykü 3 ve 4'e düşer; bu iki yer yan yanadır, kural bozulur. Demek ki roman 4 numaradadır.
Adım 3: Şiir ile öykü 1 ve 3 numaralı yerlere iki farklı biçimde konabilir. Bu yüzden şiirin ve öykünün yeri kesin değildir.
Sağlama: İki dizilişte de (şiir-deneme-öykü-roman ve öykü-deneme-şiir-roman) roman 4 numaradadır.
Cevap D.`
},
{
  id: "tur-sm-114",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Aslı, Bulut, Ceren ve Deniz'in her biri farklı bir kulübe katılmıştır: satranç, tiyatro, robotik ve fotoğraf. Tabloda robotik kulübüne katılan öğrenci yazılmıştır. Ayrıca şunlar bilinmektedir:
• Aslı ile Deniz, sahnede oyun sergileyen kulübe katılmamıştır.
• Deniz fotoğraf kulübünde değildir.

**Buna göre fotoğraf kulübüne katılan öğrenci kimdir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kulüp</th><th>Satranç</th><th>Tiyatro</th><th>Robotik</th><th>Fotoğraf</th></tr><tr><td>Öğrenci</td><td>?</td><td>?</td><td>Bulut</td><td>?</td></tr></table>",
  secenekler: [
    "Bulut",
    "Ceren",
    "Aslı",
    "Deniz"
  ],
  dogru: 2,
  hatalar: [
    "Tabloyu gözden kaçırma: Bulut robotik kulübündedir, başka bir kulübe katılamaz.",
    "Eleme sırasını atlama: sahnede oyun sergileyen kulüp tiyatrodur; Aslı ve Deniz tiyatroda olmadığına göre tiyatro Ceren'e kalır.",
    null,
    "Olumsuz bilgiyi gözden kaçırma: Deniz'in fotoğraf kulübünde olmadığı açıkça söylenmiştir."
  ],
  aciklama: `Adım 1: Tablodan Bulut'un robotik kulübünde olduğunu oku.
Adım 2: Sahnede oyun sergileyen kulüp tiyatrodur. Aslı ve Deniz tiyatroda olmadığı için tiyatro Ceren'indir.
Adım 3: Satranç ve fotoğraf Aslı ile Deniz'e kalır. Deniz fotoğrafta olmadığı için satrançtadır; fotoğraf kulübüne Aslı katılmıştır.
Sağlama: Aslı fotoğraf, Bulut robotik, Ceren tiyatro, Deniz satranç; bütün bilgiler sağlanıyor.
Cevap C.`
},
{
  id: "tur-sm-115",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir halka atma oyununda her oyuncu üç atış yapar. Halka kırmızı kazığa geçerse 3, mavi kazığa geçerse 2, sarı kazığa geçerse 1 puan kazanılır; kazığa geçmeyen atış puan getirmez. Aynı renkteki kazıklara iki halka geçiren oyuncu ayrıca 1 ek puan alır. Oyuncuların atışları tabloda verilmiştir.

**Buna göre oyunu kim kazanmıştır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Oyuncu</th><th>1. atış</th><th>2. atış</th><th>3. atış</th></tr><tr><td>Oya</td><td>Kırmızı</td><td>Mavi</td><td>Geçmedi</td></tr><tr><td>Kerem</td><td>Mavi</td><td>Mavi</td><td>Sarı</td></tr><tr><td>Lale</td><td>Kırmızı</td><td>Sarı</td><td>Geçmedi</td></tr><tr><td>Bora</td><td>Sarı</td><td>Sarı</td><td>Mavi</td></tr></table>",
  secenekler: [
    "Kerem",
    "Oya",
    "Bora",
    "Lale"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ek puanı unutma: ek puan hesaba katılmazsa Oya ile Kerem 5'er puanla eşit görünür; Kerem'in iki mavi halkası ona 1 ek puan kazandırır.",
    "Puanları ters eşleme: sarıyı 3, kırmızıyı 1 puan sayarsan Bora öne geçer; oysa sarı 1 puandır.",
    "Tek atışa bakma: Lale'nin kırmızı halkası vardır ama toplam puanı 4'tür."
  ],
  aciklama: `Adım 1: Puanları topla. Oya: 3 + 2 = 5. Kerem: 2 + 2 + 1 = 5. Lale: 3 + 1 = 4. Bora: 1 + 1 + 2 = 4.
Adım 2: Ek puanı uygula. Kerem iki mavi, Bora iki sarı halka geçirmiştir; ikisi de 1 ek puan alır. Kerem 6, Bora 5 olur.
Adım 3: Sonuç: Kerem 6, Oya 5, Bora 5, Lale 4. En yüksek puan Kerem'indir.
Sık yapılan hata: Ek puan kuralını unutup Oya ile Kerem'i berabere sanmak.
Cevap A.`
},
{
  id: "tur-sm-116",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Zeynep, Arda, Mina ve Kaan bir koşuya katılmıştır; iki kişi aynı anda bitiş çizgisine varmamıştır. Zeynep, Arda'dan önce; Arda da Mina'dan önce bitirmiştir. Kaan ise Zeynep'ten sonra bitirmiştir.

**Buna göre aşağıdakilerden hangisi kesin olarak bilinemez?**`,
  gorsel: null,
  secenekler: [
    "Kaan'ın kaçıncı olduğu",
    "Yarışı kimin birinci bitirdiği",
    "Mina'nın Zeynep'ten sonra bitirip bitirmediği",
    "Arda'nın Mina'dan önce bitirip bitirmediği"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kesin bilgiyi bilinemez sanma: Arda, Mina ve Kaan, Zeynep'ten sonra bitirmiştir; birinci kesinlikle Zeynep'tir.",
    "Zinciri kuramama: Zeynep Arda'dan, Arda da Mina'dan önce olduğu için Mina, Zeynep'ten sonra bitirmiştir.",
    "Verilen bilgiyi gözden kaçırma: Arda'nın Mina'dan önce bitirdiği metinde açıkça söylenmiştir."
  ],
  aciklama: `Adım 1: Kesin zinciri yaz: Zeynep → Arda → Mina.
Adım 2: Kaan'ın tek bilgisi "Zeynep'ten sonra" olmasıdır. Kaan, Zeynep'ten sonraki herhangi bir yere girebilir: Zeynep-Kaan-Arda-Mina, Zeynep-Arda-Kaan-Mina ya da Zeynep-Arda-Mina-Kaan.
Adım 3: Üç sıralamada da Zeynep birincidir ve Mina Zeynep'ten sonradır. Değişen tek şey Kaan'ın yeridir (2., 3. ya da 4.).
Sağlama: Kaan'ın yeri üç farklı değer alabildiği için kesin olarak bilinemez.
Cevap A.`
},
{
  id: "tur-sm-117",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir okul kütüphanesinde her kitabın sırtına iki harfli bir kod yapıştırılır. Kodun ilk harfi kitabın türünü, ikinci harfi yazarın soyadının ilk harfini gösterir. Tür harfleri şöyledir: roman R, şiir Ş, öykü Ö, deneme D.

**Buna göre tablodaki kitaplardan hangisinin kodu kurala __uygun değildir__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kitap</th><th>Tür</th><th>Yazarın soyadı</th><th>Kod</th></tr><tr><td>Kıyıdaki Fener</td><td>Roman</td><td>Aksoy</td><td>R-A</td></tr><tr><td>Rüzgâr Defteri</td><td>Deneme</td><td>Kurt</td><td>D-R</td></tr><tr><td>Sessiz Orman</td><td>Şiir</td><td>Tan</td><td>Ş-T</td></tr><tr><td>Kayıp Anahtar</td><td>Öykü</td><td>Erdem</td><td>Ö-E</td></tr></table>",
  secenekler: [
    "Kıyıdaki Fener",
    "Rüzgâr Defteri",
    "Sessiz Orman",
    "Kayıp Anahtar"
  ],
  dogru: 1,
  hatalar: [
    "Harfleri yanlış karşılaştırma: roman R, soyadı Aksoy A ile başlar; R-A kodu doğrudur.",
    null,
    "Kitap adına bakma: ikinci harf kitabın adından değil yazarın soyadından gelir; Tan T ile başlar, Ş-T doğrudur.",
    "Harfleri yanlış karşılaştırma: öykü Ö, soyadı Erdem E ile başlar; Ö-E kodu doğrudur."
  ],
  aciklama: `Adım 1: Her satırda ilk harfi türle karşılaştır. Dört kodun ilk harfi de türle uyuşuyor.
Adım 2: İkinci harfi yazarın soyadının ilk harfiyle karşılaştır. Aksoy → A, Tan → T, Erdem → E doğrudur.
Adım 3: "Rüzgâr Defteri"nin yazarı Kurt'tur; kod D-K olmalıydı. Kodda yazılan R, kitabın adının ilk harfidir.
Sık yapılan hata: İkinci harfi kitabın adından almak. Kural soyadını ister.
Cevap B.`
},
{
  id: "tur-sm-118",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Ece, Fırat, Gül ve Harun'un her birinin farklı bir evcil hayvanı vardır: kedi, köpek, balık ve muhabbet kuşu. Ece'nin hayvanı suda yaşar. Fırat'ın hayvanı uçabilir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Gül'ün kedisi vardır.",
    "Harun'un köpeği vardır.",
    "Ece'nin muhabbet kuşu vardır.",
    "Fırat'ın muhabbet kuşu vardır."
  ],
  dogru: 3,
  hatalar: [
    "Olasılığı kesinlik sanma: kedi ile köpek Gül ile Harun'a kalır ama hangisinin kimde olduğu bilinmez.",
    "Olasılığı kesinlik sanma: Harun'un köpeği olabilir ama kedisi de olabilir; bilgiler bunu belirlemez.",
    "Özellikleri karıştırma: suda yaşayan hayvan balıktır; Ece'nin hayvanı balıktır.",
    null
  ],
  aciklama: `Adım 1: Dört hayvandan suda yaşayan balıktır; Ece'nin hayvanı balıktır.
Adım 2: Uçabilen hayvan muhabbet kuşudur; Fırat'ın hayvanı muhabbet kuşudur.
Adım 3: Kedi ile köpek Gül ile Harun'a kalır. Kimin hangisine sahip olduğunu söyleyen bir bilgi yoktur; iki durum da mümkündür.
Sık yapılan hata: İki olasılıktan birini seçip kesin sanmak. "Kesinlikle" sorusunda her durumda doğru olan ifade aranır.
Cevap D.`
},
{
  id: "tur-sm-119",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Okul radyosunda pazartesiden perşembeye kadar her gün tek bir yayın yapılacaktır: haber, şiir, müzik ve bilmece. Görselde şiir yayınının günü gösterilmiştir. Haber ve müzik yayınları art arda iki günde yapılmayacaktır.

**Buna göre yayınlar günlere kaç farklı biçimde yerleştirilebilir?**`,
  gorsel: "<svg viewBox=\"0 0 498 110\" role=\"img\"><rect x=\"20\" y=\"14\" width=\"104\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"72\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"72\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Pazartesi</text><rect x=\"138\" y=\"14\" width=\"104\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"190\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Salı</text><rect x=\"256\" y=\"14\" width=\"104\" height=\"56\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"308\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">Şiir</text><text x=\"308\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Çarşamba</text><rect x=\"374\" y=\"14\" width=\"104\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"426\" y=\"48\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"426\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Perşembe</text></svg>",
  secenekler: [
    "2",
    "3",
    "4",
    "6"
  ],
  dogru: 2,
  hatalar: [
    "Salı ile perşembeyi art arda sanma: bu iki günün arasında çarşamba vardır; haber ile müzik bu iki güne konabilir.",
    "Eksik sayma: bilmecenin pazartesi ve salı olduğu durumların her birinde haber ile müzik iki farklı biçimde sıralanabilir.",
    null,
    "Art arda kuralını uygulamama: üç yayının üç güne bütün dizilişleri 6'dır ama bunların 2'si kurala aykırıdır."
  ],
  aciklama: `Adım 1: Şiir çarşamba günüdür. Haber, müzik ve bilmece pazartesi, salı ve perşembeye yerleşecektir.
Adım 2: Bu üç günden art arda olanlar yalnızca pazartesi ile salıdır. Haber ile müzik bu iki güne birlikte konamaz; öyleyse bilmece pazartesi ya da salı olmalıdır.
Adım 3: Bilmece pazartesi ise haber ile müzik salı ve perşembeye 2 biçimde; bilmece salı ise pazartesi ve perşembeye 2 biçimde yerleşir. Toplam 2 + 2 = 4.
Sağlama: Bütün dizilişler 6'dır; haber ile müziğin pazartesi-salı olduğu 2 diziliş çıkarılınca 4 kalır.
Cevap C.`
},
{
  id: "tur-sm-120",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir robot, görseldeki tahtada şu komutlarla hareket etmektedir:
İ: Baktığı yöne doğru bir kare ilerler.
S: Olduğu yerde sağa döner.
L: Olduğu yerde sola döner.
Robota sırasıyla İ, S, İ, İ, L, İ komutları verilmiştir.

**Buna göre robot hangi karede durur?**`,
  gorsel: "<svg viewBox=\"0 0 560 272\" role=\"img\"><rect x=\"70\" y=\"162\" width=\"140\" height=\"74\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"140\" y=\"186\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Başlangıç</text><rect x=\"210\" y=\"162\" width=\"140\" height=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"206\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Erik</text><rect x=\"350\" y=\"162\" width=\"140\" height=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"420\" y=\"206\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">İncir</text><rect x=\"70\" y=\"88\" width=\"140\" height=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"140\" y=\"132\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Üzüm</text><rect x=\"210\" y=\"88\" width=\"140\" height=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"132\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Muz</text><rect x=\"350\" y=\"88\" width=\"140\" height=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"420\" y=\"132\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Ayva</text><rect x=\"70\" y=\"14\" width=\"140\" height=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"140\" y=\"58\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Elma</text><rect x=\"210\" y=\"14\" width=\"140\" height=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"58\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Armut</text><rect x=\"350\" y=\"14\" width=\"140\" height=\"74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"420\" y=\"58\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Kiraz</text><polygon points=\"140,196 128,222 152,222\" fill=\"var(--vurgu)\"/><text x=\"280\" y=\"262\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Robot başlangıç karesinde, ok yönüne (yukarı) bakıyor.</text></svg>",
  secenekler: [
    "Kiraz",
    "Armut",
    "Ayva",
    "İncir"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İki komutu tek adım sayma: art arda gelen iki İ komutu robotu iki kare ilerletir; biri sayılmazsa robot Armut'ta durur.",
    "Son komutu atlama: robot sola döndükten sonra bir kare daha ilerler; Ayva'da kalmaz.",
    "Sağ ile solu karıştırma: L komutunda robot sağa döndürülürse aşağıya bakar ve İncir'e iner."
  ],
  aciklama: `Yön sorularında her adımda robotun hem yerini hem de baktığı yönü yaz.
Adım 1: İ → robot yukarı bakarken bir kare ilerler: Üzüm. S → sağa döner, artık sağa bakar.
Adım 2: İ, İ → sağa doğru iki kare ilerler: önce Muz, sonra Ayva.
Adım 3: L → sağa bakarken sola dönen robot yukarı bakar. İ → bir kare yukarı çıkar: Kiraz.
Sağlama: Robotun yolu Başlangıç → Üzüm → Muz → Ayva → Kiraz'dır; tahtanın dışına hiç çıkmaz.
Cevap A.`
},
{
  id: "tur-sm-121",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Nehir, Onur, Pınar ve Rüzgâr sinemada yan yana dört koltuğa oturmuştur. Görselde Rüzgâr'ın koltuğu gösterilmiştir.
• Nehir ile Onur yan yana oturmuştur.
• Pınar 1 numaralı koltukta oturmamıştır.

**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: "<svg viewBox=\"0 0 482 136\" role=\"img\"><text x=\"241\" y=\"24\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">PERDE</text><line x1=\"20\" y1=\"32\" x2=\"462\" y2=\"32\" stroke=\"currentColor\" stroke-width=\"4\"/><rect x=\"20\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"70\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><rect x=\"134\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"184\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><rect x=\"248\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"298\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"298\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><rect x=\"362\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"412\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">Rüzgâr</text><text x=\"412\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text></svg>",
  secenekler: [
    "Nehir 1 numaralı koltukta oturmuştur.",
    "Onur 3 numaralı koltukta oturmuştur.",
    "Pınar, Rüzgâr'ın yanında oturmuştur.",
    "Onur, Nehir'in sağında oturmuştur."
  ],
  dogru: 1,
  hatalar: [
    "Olabilecek durumu olamaz sanma: Nehir 1, Onur 2, Pınar 3 dizilişi bütün bilgilere uyar.",
    null,
    "Kesin durumu olamaz sanma: Pınar 3 numaradadır ve Rüzgâr'ın yanındadır; bu her durumda doğrudur.",
    "Olabilecek durumu olamaz sanma: Nehir 1, Onur 2 numarada oturursa Onur, Nehir'in sağındadır."
  ],
  aciklama: `"Olamaz" sorusunda, bilgilere uyan hiçbir dizilişte gerçekleşmeyen ifade aranır.
Adım 1: Rüzgâr 4 numaradadır. Nehir ile Onur yan yana olacağı için ya 1-2 ya da 2-3 numaralı koltuklardadır.
Adım 2: Nehir ile Onur 2-3'te olursa Pınar 1 numaraya kalır; bu yasaktır. Öyleyse Nehir ile Onur 1-2'de, Pınar 3'tedir.
Adım 3: Onur 1 ya da 2 numarada olabilir; 3 numarada olamaz.
Sağlama: İki diziliş vardır: Nehir-Onur-Pınar-Rüzgâr ve Onur-Nehir-Pınar-Rüzgâr. İkisinde de 3 numarada Pınar oturur.
Cevap B.`
},
{
  id: "tur-sm-122",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir okul, bahar şenliğinin yerini hava durumuna göre şu kurallarla belirleyecektir:
• Yağış varsa şenlik spor salonunda yapılır.
• Yağış yoksa ve rüzgâr saatte 40 km'den hızlıysa şenlik yine spor salonunda yapılır.
• Yağış yoksa, rüzgâr saatte 40 km ya da daha yavaşsa ve sıcaklık 30 °C'nin üzerindeyse şenlik gölgelikli bahçede yapılır.
• Diğer durumlarda şenlik açık sahada yapılır.

**Tablodaki hava tahminlerine göre şenlik hangi gün yapılırsa gölgelikli bahçede düzenlenir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Gün</th><th>Hava</th><th>Sıcaklık</th><th>Rüzgâr</th></tr><tr><td>Pazartesi</td><td>Yağmurlu</td><td>32 °C</td><td>10 km/sa</td></tr><tr><td>Salı</td><td>Güneşli</td><td>30 °C</td><td>15 km/sa</td></tr><tr><td>Çarşamba</td><td>Güneşli</td><td>34 °C</td><td>45 km/sa</td></tr><tr><td>Perşembe</td><td>Güneşli</td><td>31 °C</td><td>20 km/sa</td></tr></table>",
  secenekler: [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe"
  ],
  dogru: 3,
  hatalar: [
    "Yağış kuralını atlama: pazartesi sıcaklık yüksektir ama yağmur vardır; şenlik spor salonunda yapılır.",
    "Sınırı dahil etme: 30 °C, \"30 °C'nin üzerinde\" sayılmaz; salı günü şenlik açık sahada yapılır.",
    "Rüzgâr kuralını atlama: çarşamba rüzgâr saatte 45 km'dir, 40 km'den hızlıdır; şenlik spor salonunda yapılır.",
    null
  ],
  aciklama: `Birden çok kural varsa her günü kuralların sırasına göre dene; bir kural uyduğunda karar verilir.
Adım 1: Pazartesi yağmurlu → spor salonu.
Adım 2: Çarşamba yağış yok ama rüzgâr saatte 45 km → spor salonu.
Adım 3: Salı ve perşembe yağışsızdır, rüzgâr da saatte 40 km'den yavaştır. Salı 30 °C'dir, "30 °C'nin üzerinde" değildir → açık saha. Perşembe 31 °C → gölgelikli bahçe.
Sık yapılan hata: "30 °C'nin üzerinde" ifadesine 30'u da katmak. Sınır değeri kuraldaki sözcüğe göre değerlendir.
Cevap D.`
},
{
  id: "tur-sm-123",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Sena, Taylan, Umay ve Veli okula farklı yollarla gelmektedir: yürüyerek, bisikletle, servisle ve otobüsle. Tabloda ✗ işareti, öğrencinin okula o yolla gelmediğini gösterir. Ayrıca Veli'nin bisiklet sürmeyi bilmediği bilinmektedir.

**Buna göre okula bisikletle gelen öğrenci kimdir?**`,
  gorsel: "<table class=\"tablo\"><tr><th></th><th>Yürüyerek</th><th>Bisikletle</th><th>Servisle</th><th>Otobüsle</th></tr><tr><td>Sena</td><td></td><td>✗</td><td>✗</td><td></td></tr><tr><td>Taylan</td><td>✗</td><td>✗</td><td>✗</td><td></td></tr><tr><td>Umay</td><td>✗</td><td></td><td></td><td></td></tr><tr><td>Veli</td><td></td><td></td><td></td><td></td></tr></table>",
  secenekler: [
    "Sena",
    "Umay",
    "Veli",
    "Taylan"
  ],
  dogru: 1,
  hatalar: [
    "Tabloyu yanlış okuma: Sena'nın satırında bisikletin altında ✗ vardır.",
    null,
    "Ek bilgiyi gözden kaçırma: Veli bisiklet sürmeyi bilmediği için bisikletle gelemez.",
    "Tabloyu yanlış okuma: Taylan'ın satırında tek boş hücre otobüstür; Taylan otobüsle gelir."
  ],
  aciklama: `Adım 1: Taylan'ın satırında yalnızca otobüs boştur; Taylan otobüsle gelir.
Adım 2: Sena bisikletle ve servisle gelmez, otobüs de Taylan'ındır; Sena yürüyerek gelir.
Adım 3: Bisiklet ve servis Umay ile Veli'ye kalır. Veli bisiklet süremediği için servisle gelir; bisikletle gelen Umay'dır.
Sağlama: Sena yürüyerek, Taylan otobüsle, Umay bisikletle, Veli servisle; tablodaki hiçbir ✗ ile çelişmiyor.
Cevap B.`
},
{
  id: "tur-sm-124",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir kulübün üyeleri gizli mesajlarını iki adımda şifrelemektedir:
1. adım: Sözcüğün harfleri sondan başa doğru yazılır.
2. adım: Ortaya çıkan yazıdaki ünlü harfler, tablodaki rakamlarla değiştirilir.

**Buna göre KALEM sözcüğü şifrelendiğinde hangisi elde edilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Ünlü harf</th><th>A</th><th>E</th><th>I</th><th>O</th></tr><tr><td>Rakam</td><td>1</td><td>2</td><td>3</td><td>4</td></tr></table>",
  secenekler: [
    "K1L2M",
    "M1L2K",
    "M2L1K",
    "MELAK"
  ],
  dogru: 2,
  hatalar: [
    "1. adımı atlama: harfler ters çevrilmeden yalnızca ünlüler rakama dönüştürülmüştür.",
    "Rakamları karıştırma: ters çevrilmiş MELAK yazısında önce E gelir; E'nin karşılığı 2, A'nın karşılığı 1'dir.",
    null,
    "2. adımı atlama: harfler ters çevrilmiş ama ünlüler rakama dönüştürülmemiştir."
  ],
  aciklama: `İşlem sırası verilen sorularda adımları sırasıyla ve ayrı ayrı uygula.
Adım 1: KALEM sözcüğünü sondan başa yaz: MELAK.
Adım 2: MELAK yazısındaki ünlüleri tabloya göre değiştir: E → 2, A → 1. Sonuç: M2L1K.
Sağlama: M2L1K yazısında rakamları harfe çevirip tersten okursan yeniden KALEM elde edersin.
Cevap C.`
},
{
  id: "tur-sm-125",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Ayla, Çınar, Sarp ve Berfin okul gezisinde dört farklı yerden birini seçecektir: deniz müzesi, oyuncak müzesi, bilim merkezi ve fotoğraf müzesi. Her yeri yalnızca bir öğrenci seçecektir.
• Ayla bilim merkezini ya da deniz müzesini seçecektir.
• Çınar oyuncak müzesini ve bilim merkezini seçmeyecektir.

**Herkesin seçeceği yerin kesin olarak belirlenebilmesi için aşağıdakilerden hangisinin bilinmesi tek başına yeterlidir?**`,
  gorsel: null,
  secenekler: [
    "Sarp bilim merkezini seçecektir.",
    "Ayla deniz müzesini seçecektir.",
    "Çınar fotoğraf müzesini seçecektir.",
    "Berfin oyuncak müzesini seçecektir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bir kişiyi kesinleştirince herkesi kesinleştirdiğini sanma: Ayla deniz müzesini seçerse Çınar fotoğraf müzesine gider ama Sarp ile Berfin bilim merkezi ile oyuncak müzesini iki biçimde paylaşabilir.",
    "Bir kişiyi kesinleştirince herkesi kesinleştirdiğini sanma: Çınar fotoğraf müzesini seçerse Ayla'nın yeri bile belli olmaz; dört farklı dağılım kalır.",
    "Bir kişiyi kesinleştirince herkesi kesinleştirdiğini sanma: Berfin oyuncak müzesini seçerse Ayla bilim merkezi ya da deniz müzesi olabilir; üç farklı dağılım kalır."
  ],
  aciklama: `"Tek başına yeterli" bilgi, eklendiğinde bilgilere uyan yalnızca bir dağılım bırakan bilgidir.
Adım 1: Çınar oyuncak müzesini ve bilim merkezini seçmediği için ya deniz müzesine ya da fotoğraf müzesine gider. Ayla ise bilim merkezine ya da deniz müzesine gider.
Adım 2: Sarp bilim merkezini seçerse Ayla'ya yalnızca deniz müzesi kalır. Deniz müzesi dolunca Çınar fotoğraf müzesine gider, Berfin'e de oyuncak müzesi kalır. Tek dağılım vardır.
Adım 3: Diğer bilgileri de dene. Ayla deniz müzesi dersen Sarp ile Berfin'in yerleri iki biçimde olabilir. Berfin oyuncak müzesi dersen üç, Çınar fotoğraf müzesi dersen dört dağılım kalır.
Sağlama: Ayla deniz müzesi, Çınar fotoğraf müzesi, Sarp bilim merkezi, Berfin oyuncak müzesi; iki bilgi de sağlanıyor.
Cevap A.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "tur-sm-201",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 2,
  soru: `Bir okuma yarışmasında öğrenciler okudukları kitaplar için yıldız toplamaktadır:
• Her kitap 1 yıldız kazandırır.
• 200 sayfadan uzun bir kitap 1 yerine 2 yıldız kazandırır.
• Aynı yazardan okunan ikinci kitap yıldız kazandırmaz.
Tabloda her hücrede kitabın sayfa sayısı ve yazarının soyadının ilk harfi yazılıdır.

**Buna göre en çok yıldızı hangi öğrenci toplamıştır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>1. kitap</th><th>2. kitap</th><th>3. kitap</th><th>4. kitap</th></tr><tr><td>Melis</td><td>120 · K</td><td>150 · L</td><td>90 · M</td><td>110 · K</td></tr><tr><td>Nazım</td><td>200 · N</td><td>200 · P</td><td>180 · R</td><td>–</td></tr><tr><td>Oğuz</td><td>260 · S</td><td>230 · S</td><td>150 · T</td><td>–</td></tr><tr><td>Pelin</td><td>190 · U</td><td>240 · V</td><td>120 · Y</td><td>–</td></tr></table>",
  secenekler: [
    "Melis",
    "Nazım",
    "Oğuz",
    "Pelin"
  ],
  dogru: 3,
  hatalar: [
    "Kitap sayısına bakma: Melis en çok kitabı okumuştur ama K yazarından okuduğu ikinci kitap yıldız getirmez; Melis 3 yıldız alır.",
    "Sınırı dahil etme: 200 sayfa, \"200 sayfadan uzun\" sayılmaz; bu hatayla Nazım'a 5 yıldız verilir, oysa Nazım 3 yıldız alır.",
    "Aynı yazar kuralını atlama: Oğuz'un iki kitabı da S yazarındandır; ikincisi yıldız getirmez, Oğuz 3 yıldız alır.",
    null
  ],
  aciklama: `Adım 1: Her kitabı üç kurala göre değerlendir: 200'den uzunsa 2, değilse 1 yıldız; aynı yazarın ikinci kitabı 0 yıldız.
Adım 2: Melis: 1 + 1 + 1 + 0 = 3. Nazım: 200 sayfa uzun sayılmaz, 1 + 1 + 1 = 3. Oğuz: 2 + 0 + 1 = 3.
Adım 3: Pelin: 190 sayfa 1, 240 sayfa 2, 120 sayfa 1 yıldız; toplam 4. Pelin'in üç kitabı da farklı yazarlardandır.
Sık yapılan hata: "200 sayfadan uzun" ifadesine 200'ü katmak ya da aynı yazar kuralını unutmak. İki hata da başka bir öğrenciyi öne geçirir.
Cevap D.`
},
{
  id: "tur-sm-202",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Kırmızı, mavi, yeşil ve sarı renkli dört kutu üst üste konmuştur. Kutuların yerleri aşağıdan yukarıya 1'den 4'e kadar numaralıdır.
• Kırmızı kutu, mavi kutunun üstündeki kutulardan biridir.
• Sarı kutu, yeşil kutunun hemen üstündedir.
• Yeşil kutu en altta değildir.

**Buna göre en alttaki kutu hangi renktir?**`,
  gorsel: "<svg viewBox=\"0 0 340 236\" role=\"img\"><rect x=\"100\" y=\"170\" width=\"180\" height=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"202\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"88\" y=\"202\" text-anchor=\"end\" font-size=\"15\" fill=\"currentColor\">1</text><rect x=\"100\" y=\"118\" width=\"180\" height=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"150\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"88\" y=\"150\" text-anchor=\"end\" font-size=\"15\" fill=\"currentColor\">2</text><rect x=\"100\" y=\"66\" width=\"180\" height=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"98\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"88\" y=\"98\" text-anchor=\"end\" font-size=\"15\" fill=\"currentColor\">3</text><rect x=\"100\" y=\"14\" width=\"180\" height=\"52\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"46\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"88\" y=\"46\" text-anchor=\"end\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"70\" y1=\"222\" x2=\"310\" y2=\"222\" stroke=\"currentColor\" stroke-width=\"4\"/></svg>",
  secenekler: [
    "Kırmızı",
    "Mavi",
    "Yeşil",
    "Sarı"
  ],
  dogru: 1,
  hatalar: [
    "Yönü ters çevirme: kırmızı kutu mavinin üstündedir; en altta olsaydı mavinin altında kalırdı.",
    null,
    "Olumsuz bilgiyi gözden kaçırma: yeşil kutunun en altta olmadığı açıkça söylenmiştir.",
    "Bağlı bilgiyi atlama: sarı, yeşilin hemen üstündedir; altında en az bir kutu bulunduğu için en altta olamaz."
  ],
  aciklama: `Adım 1: Yeşil 1 numarada olamaz. Sarı yeşilin hemen üstünde olduğu için yeşil 2 ya da 3 numaradadır.
Adım 2: Yeşil 2, sarı 3 ise 1 ve 4 kalır; kırmızı mavinin üstünde olacağı için mavi 1, kırmızı 4 olur.
Adım 3: Yeşil 3, sarı 4 ise 1 ve 2 kalır; mavi 1, kırmızı 2 olur.
Sağlama: İki durumda da en altta mavi kutu vardır. Kutuların dizilişi tek değildir ama sorulan kutu kesindir.
Cevap B.`
},
{
  id: "tur-sm-203",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Ilgın, Kuzey ve Lara'nın her biri farklı bir spor yapar (yüzme, tenis, voleybol) ve haftanın farklı bir gününde antrenmana gider (salı, perşembe, cumartesi).
• Tenis oynayan kişi salı günü antrenmana gider.
• Kuzey cumartesi günü antrenmana gider ve onun sporu yüzme değildir.
• Lara tenis oynamaz.

**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Lara perşembe günü yüzmeye gider.",
    "Ilgın salı günü voleybol oynar.",
    "Kuzey cumartesi günü tenis oynar.",
    "Lara salı günü yüzmeye gider."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Günü ve sporu ayrı eşleme: salı günü antrenmana giden kişi tenis oynar; Ilgın'ın günü salı ise sporu voleybol olamaz.",
    "Kurallar arasındaki bağı kaçırma: tenis salı günüdür; cumartesi antrenmana giden Kuzey tenis oynayamaz.",
    "Günleri karıştırma: salı tenis günüdür ve tenis Ilgın'ındır; Lara'nın günü perşembedir."
  ],
  aciklama: `Adım 1: Kuzey cumartesi antrenmana gider. Tenis salı günü olduğu için Kuzey tenis oynamaz; yüzme de oynamadığına göre Kuzey'in sporu voleyboldur.
Adım 2: Yüzme ve tenis Ilgın ile Lara'ya kalır. Lara tenis oynamadığı için Lara yüzer, Ilgın tenis oynar.
Adım 3: Tenis salı günüdür; Ilgın salı gider. Geriye kalan perşembe Lara'nındır.
Sağlama: Ilgın tenis-salı, Lara yüzme-perşembe, Kuzey voleybol-cumartesi; üç bilgi de sağlanıyor.
Cevap A.`
},
{
  id: "tur-sm-204",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Bir kutu oyununda piyon, zarda gelen sayı kadar ileri gider. Piyon kırmızı kareye gelirse 3 kare geri, yeşil kareye gelirse 2 kare ileri gider. Geri ya da ileri gidilen yeni karede kural yeniden uygulanmaz. Selin'in piyonu başlangıç karesindeyken zarda sırasıyla 5, 3 ve 4 gelmiştir.

**Buna göre üç atıştan sonra Selin'in piyonu kaç numaralı karededir?**`,
  gorsel: "<svg viewBox=\"0 0 560 130\" role=\"img\"><rect x=\"20\" y=\"20\" width=\"40\" height=\"44\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\" font-weight=\"bold\">B</text><text x=\"40\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">0</text><rect x=\"60\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"80\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1</text><rect x=\"100\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"120\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"120\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2</text><rect x=\"140\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"160\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><rect x=\"180\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"200\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4</text><rect x=\"220\" y=\"20\" width=\"40\" height=\"44\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\" font-weight=\"bold\">K</text><text x=\"240\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">5</text><rect x=\"260\" y=\"20\" width=\"40\" height=\"44\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\" font-weight=\"bold\">Y</text><text x=\"280\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">6</text><rect x=\"300\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"320\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"320\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">7</text><rect x=\"340\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"360\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">8</text><rect x=\"380\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"400\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">9</text><rect x=\"420\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"440\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"440\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">10</text><rect x=\"460\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"480\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"480\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">11</text><rect x=\"500\" y=\"20\" width=\"40\" height=\"44\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\"></text><text x=\"520\" y=\"84\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">12</text><text x=\"20\" y=\"116\" font-size=\"15\" fill=\"currentColor\">B: başlangıç   K: kırmızı kare (3 kare geri)   Y: yeşil kare (2 kare ileri)</text></svg>",
  secenekler: [
    "2",
    "6",
    "8",
    "12"
  ],
  dogru: 2,
  hatalar: [
    "Ara sonucu cevap sanma: piyon ikinci atıştan sonra 2 numaralı karededir ama üçüncü atış henüz yapılmamıştır.",
    "Son karenin kuralını unutma: üçüncü atışta piyon 6 numaralı yeşil kareye gelir ve 2 kare daha ilerler.",
    null,
    "Kareleri hiç uygulamama: 5 + 3 + 4 = 12 yalnızca zarların toplamıdır; kırmızı ve yeşil kareler hesaba katılmamıştır."
  ],
  aciklama: `Adım 1: 1. atış 5 → piyon 5 numaralı kırmızı kareye gelir, 3 kare geri gider: 2 numara.
Adım 2: 2. atış 3 → 2 + 3 = 5 numara; yine kırmızı kare, 3 kare geri: 2 numara.
Adım 3: 3. atış 4 → 2 + 4 = 6 numara; yeşil kare, 2 kare ileri: 8 numara. 8 numaralı karede kural yoktur.
Sağlama: Her atıştan sonra durulan kareler sırasıyla 2, 2 ve 8'dir.
Cevap C.`
},
{
  id: "tur-sm-205",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 2,
  soru: `Bir doğa parkındaki yürüyüş yolları görselde gösterilmiştir. Yollar tek yönlüdür; yalnızca okların gösterdiği yönde yürünebilir. Ekin girişten çıkışa kadar göl, kule ve şelalenin her birine uğrayacak ve hiçbir noktadan iki kez geçmeyecektir.

**Buna göre Ekin'in izleyeceği yol aşağıdakilerden hangisidir?**`,
  gorsel: "<svg viewBox=\"0 0 560 230\" role=\"img\"><line x1=\"99\" y1=\"110\" x2=\"188.7\" y2=\"60.7\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"201,54 191.6,66.0 185.8,55.5\" fill=\"currentColor\"/><line x1=\"99\" y1=\"130\" x2=\"188.7\" y2=\"179.3\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"201,186 185.8,184.5 191.6,174.0\" fill=\"currentColor\"/><line x1=\"240\" y1=\"171\" x2=\"240.0\" y2=\"83.0\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"240,69 246.0,83.0 234.0,83.0\" fill=\"currentColor\"/><line x1=\"282\" y1=\"44\" x2=\"364.0\" y2=\"44.0\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"378,44 364.0,50.0 364.0,38.0\" fill=\"currentColor\"/><line x1=\"444\" y1=\"65\" x2=\"470.4\" y2=\"126.2\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"476,139 464.9,128.5 476.0,123.8\" fill=\"currentColor\"/><line x1=\"282\" y1=\"193\" x2=\"444.2\" y2=\"165.4\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"458,163 445.2,171.3 443.2,159.4\" fill=\"currentColor\"/><rect x=\"16\" y=\"102\" width=\"88\" height=\"36\" rx=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"60\" y=\"126\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Giriş</text><rect x=\"196\" y=\"26\" width=\"88\" height=\"36\" rx=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"50\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Göl</text><rect x=\"196\" y=\"178\" width=\"88\" height=\"36\" rx=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"202\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Kule</text><rect x=\"376\" y=\"26\" width=\"88\" height=\"36\" rx=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"420\" y=\"50\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Şelale</text><rect x=\"456\" y=\"142\" width=\"88\" height=\"36\" rx=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"500\" y=\"166\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Çıkış</text></svg>",
  secenekler: [
    "Giriş – Kule – Göl – Şelale – Çıkış",
    "Giriş – Göl – Kule – Şelale – Çıkış",
    "Giriş – Göl – Şelale – Kule – Çıkış",
    "Giriş – Kule – Şelale – Göl – Çıkış"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ok yönünü ters okuma: göl ile kule arasındaki yol kuleden göle doğrudur; gölden kuleye gidilemez.",
    "Olmayan yolu varsayma: şelaleden kuleye giden bir yol yoktur; şelaleden yalnızca çıkışa gidilir.",
    "Olmayan yolu varsayma: kuleden şelaleye doğrudan giden bir yol yoktur."
  ],
  aciklama: `Adım 1: Şelaleden çıkan tek yol çıkışa gider. Öyleyse şelale, çıkıştan hemen önceki durak olmalıdır.
Adım 2: Şelaleye yalnızca gölden gelinir; demek ki göl şelaleden hemen öncedir.
Adım 3: Kule, girişten sonra ve gölden önce gelmelidir. Kuleden göle giden bir yol vardır. Yol: Giriş – Kule – Göl – Şelale – Çıkış.
Sağlama: Bu yoldaki her adımın (giriş→kule, kule→göl, göl→şelale, şelale→çıkış) görselde bir oku vardır.
Cevap A.`
},
{
  id: "tur-sm-206",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Dört kardeş Oya, Eda, Ela ve Tan fotoğraf çektirmek için yan yana dizilecektir.
• En büyük kardeş Oya, sıranın iki ucundan birinde duracaktır.
• İkiz kardeşler Eda ile Ela yan yana duracaktır.

**Buna göre kardeşler kaç farklı biçimde dizilebilir?**`,
  gorsel: null,
  secenekler: [
    "2",
    "4",
    "8",
    "12"
  ],
  dogru: 2,
  hatalar: [
    "İki şeyi birden unutma: hem Oya'nın öteki uçta durabileceği hem de ikizlerin kendi aralarında yer değiştirebileceği hesaba katılmamıştır.",
    "Tek ucu sayma: Oya yalnızca sol uca konmuştur; sağ uçta da aynı sayıda diziliş vardır.",
    null,
    "İkiz kuralını uygulamama: Oya bir uçta sabitken kalan üç kişi 6 biçimde dizilir, iki uç için 12 eder; ama bunların bir kısmında ikizler yan yana değildir."
  ],
  aciklama: `Adım 1: Oya sol uçta dursun. Kalan üç yere Eda, Ela ve Tan dizilecek; ikizler yan yana olmalı.
Adım 2: İkizler 2-3 ya da 3-4 numaralı yerlerde durabilir; her birinde Eda ile Ela yer değiştirebilir. Oya-Eda-Ela-Tan, Oya-Ela-Eda-Tan, Oya-Tan-Eda-Ela, Oya-Tan-Ela-Eda: 4 diziliş.
Adım 3: Oya sağ uçta durduğunda da aynı biçimde 4 diziliş vardır. Toplam 4 + 4 = 8.
Sık yapılan hata: İkizlerin kendi aralarında yer değiştirebileceğini unutmak.
Cevap C.`
},
{
  id: "tur-sm-207",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Barış, Defne, Emir ve Ferda sınıfta sırayla sunum yapacaktır.
• Defne, Emir'den önce sunum yapacaktır.
• İlk sunumu Barış yapmayacaktır.
• Ferda, Barış'tan hemen sonra sunum yapacaktır.

**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "Emir ikinci sunumu yapar.",
    "Barış üçüncü sunumu yapar.",
    "Ferda son sunumu yapar.",
    "Defne ikinci sunumu yapar."
  ],
  dogru: 3,
  hatalar: [
    "Olabilecek durumu olamaz sanma: Defne, Emir, Barış, Ferda sıralaması bütün kurallara uyar.",
    "Olabilecek durumu olamaz sanma: Barış üçüncü, Ferda dördüncü olabilir; Defne ile Emir ilk iki sunumu yapar.",
    "Olabilecek durumu olamaz sanma: Barış üçüncü sunumu yaparsa Ferda sonuncudur.",
    null
  ],
  aciklama: `Adım 1: Barış ile Ferda art arda sunum yapar ve Barış ilk değildir. Bu ikili 2-3 ya da 3-4. sıralardadır.
Adım 2: Barış-Ferda 2-3'te ise Defne ile Emir 1 ve 4'e kalır; Defne önce olduğu için Defne 1, Emir 4.
Adım 3: Barış-Ferda 3-4'te ise Defne 1, Emir 2 olur.
Sağlama: İki sıralama vardır: Defne-Barış-Ferda-Emir ve Defne-Emir-Barış-Ferda. İkisinde de Defne ilk sunumu yapar; ikinci olamaz.
Cevap D.`
},
{
  id: "tur-sm-208",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Aras, Beren, Can ve Duru'nun spor salonundaki dolapları yan yanadır.
• Aras'ın dolabı, Duru'nun dolabının hemen solundadır.
• Beren'in dolap numarası çift sayıdır.
• Can'ın dolabı 1 numaralı değildir.

**Buna göre 3 numaralı dolap kimindir?**`,
  gorsel: "<svg viewBox=\"0 0 482 136\" role=\"img\"><text x=\"241\" y=\"24\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Dolaplar (soldan sağa)</text><rect x=\"20\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"70\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><rect x=\"134\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"184\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><rect x=\"248\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"298\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"298\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><rect x=\"362\" y=\"40\" width=\"100\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"412\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"412\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text></svg>",
  secenekler: [
    "Aras",
    "Can",
    "Beren",
    "Duru"
  ],
  dogru: 1,
  hatalar: [
    "Durumları denemeden seçme: Aras 3 numarada olursa Duru 4'e, Beren 2'ye, Can da 1'e düşer; Can 1 numarada olamaz.",
    null,
    "Çift sayı bilgisini eksik kullanma: Beren 2 ya da 4 numarada olabilir; 3 tek sayıdır.",
    "Durumları denemeden seçme: Duru 3 numarada olursa Aras 2'ye, Beren 4'e, Can da 1'e düşer; Can 1 numarada olamaz."
  ],
  aciklama: `Adım 1: Aras ile Duru yan yanadır ve Aras soldadır: 1-2, 2-3 ya da 3-4 numaralar olabilir.
Adım 2: 2-3 olursa Beren 4'e (çift), Can 1'e düşer; yasak. 3-4 olursa Beren 2'ye, Can 1'e düşer; yine yasak.
Adım 3: Öyleyse Aras 1, Duru 2 numaradadır. Beren çift numaralı 4'e, Can 3'e yerleşir.
Sağlama: Aras 1, Duru 2, Can 3, Beren 4; üç bilgi de sağlanıyor.
Cevap B.`
},
{
  id: "tur-sm-209",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Bir sözcük oyununda oyuncular, görseldeki harf kartlarını kullanarak sözcük türetmektedir. Oyunun kuralları şunlardır:
• Her kart bir sözcükte en fazla bir kez kullanılabilir.
• Sözcük en az dört harfli olmalıdır.
• Sözcükte K harfi bulunmalıdır.

**Buna göre aşağıdaki sözcüklerden hangisi kurallara uygundur?**`,
  gorsel: "<svg viewBox=\"0 0 560 90\" role=\"img\"><rect x=\"24\" y=\"14\" width=\"60\" height=\"60\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"54\" y=\"53\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"bold\" fill=\"currentColor\">K</text><rect x=\"98\" y=\"14\" width=\"60\" height=\"60\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"128\" y=\"53\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"bold\" fill=\"currentColor\">A</text><rect x=\"172\" y=\"14\" width=\"60\" height=\"60\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"202\" y=\"53\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"bold\" fill=\"currentColor\">L</text><rect x=\"246\" y=\"14\" width=\"60\" height=\"60\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"276\" y=\"53\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"bold\" fill=\"currentColor\">E</text><rect x=\"320\" y=\"14\" width=\"60\" height=\"60\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350\" y=\"53\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"bold\" fill=\"currentColor\">M</text><rect x=\"394\" y=\"14\" width=\"60\" height=\"60\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"53\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"bold\" fill=\"currentColor\">İ</text><rect x=\"468\" y=\"14\" width=\"60\" height=\"60\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"498\" y=\"53\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"bold\" fill=\"currentColor\">R</text></svg>",
  secenekler: [
    "ELMA",
    "KALEM",
    "KAR",
    "KEKİK"
  ],
  dogru: 1,
  hatalar: [
    "Üçüncü kuralı atlama: ELMA dört harflidir ve kartlarla yazılabilir ama içinde K harfi yoktur.",
    null,
    "İkinci kuralı atlama: KAR sözcüğünde K vardır ama sözcük üç harflidir.",
    "Birinci kuralı atlama: KEKİK sözcüğünde üç K vardır; oysa tek bir K kartı bulunmaktadır."
  ],
  aciklama: `Kurallar listesi verilen sorularda her seçeneği kuralların hepsiyle tek tek karşılaştır; bir kuralı bozan seçenek elenir.
Adım 1: ELMA: kartlar yeterli, dört harfli ama K yok → elenir.
Adım 2: KAR: K var ama üç harfli → elenir. KEKİK: K harfi üç kez gerekiyor, kart bir tane → elenir.
Adım 3: KALEM: K, A, L, E, M kartlarının her biri bir kez kullanılır; sözcük beş harflidir ve K içerir.
Sağlama: KALEM üç kuralın üçünü de sağlıyor.
Cevap B.`
},
{
  id: "tur-sm-210",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Nil, Ozan, Pelin ve Rıza birer şemsiye almıştır. Şemsiyelerin renkleri sarı, mor, turuncu ve gridir; her birinin şemsiyesi farklı renktedir.
• Nil'in şemsiyesi sarı ya da mordur.
• Ozan'ın şemsiyesi ne gri ne de mordur.
• Pelin'in şemsiyesi mordur.

**Buna göre Rıza'nın şemsiyesi hangi renktir?**`,
  gorsel: null,
  secenekler: [
    "Sarı",
    "Mor",
    "Turuncu",
    "Gri"
  ],
  dogru: 3,
  hatalar: [
    "Eleme sırasını atlama: mor Pelin'in olduğu için Nil'in şemsiyesi sarıdır; sarı Rıza'nın olamaz.",
    "Verilen bilgiyi gözden kaçırma: mor şemsiye Pelin'indir.",
    "Eleme sırasını atlama: Ozan'ın şemsiyesi gri ve mor değildir, sarı da Nil'indir; turuncu Ozan'ındır.",
    null
  ],
  aciklama: `Adım 1: Mor, Pelin'indir. Nil'in şemsiyesi sarı ya da mor olduğuna göre Nil'inki sarıdır.
Adım 2: Ozan'ın şemsiyesi gri ve mor değildir; sarı da Nil'in olduğundan Ozan'ınki turuncudur.
Adım 3: Geriye kalan gri, Rıza'nındır.
Sağlama: Nil sarı, Ozan turuncu, Pelin mor, Rıza gri; üç bilgi de sağlanıyor.
Cevap D.`
},
{
  id: "tur-sm-211",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 2,
  soru: `Okul kantininde "dengeli tepsi" rozeti, şu iki koşulu birlikte sağlayan tepsilere verilmektedir:
• Tepside bir içecek, bir ana yiyecek ve bir meyve bulunmalıdır.
• İçecek şekerli olmamalıdır.
Dört öğrencinin tepsisinde bulunanlar tabloda verilmiştir.

**Buna göre kimin tepsisi rozet alır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>İçecek</th><th>Ana yiyecek</th><th>Meyve</th></tr><tr><td>Ferhat</td><td>Şekerli gazoz</td><td>Sandviç</td><td>Muz</td></tr><tr><td>Gökçe</td><td>Su</td><td>Simit</td><td>–</td></tr><tr><td>Ceyda</td><td>Ayran</td><td>Peynirli tost</td><td>Elma</td></tr><tr><td>Hilal</td><td>Süt</td><td>–</td><td>Elma, armut</td></tr></table>",
  secenekler: [
    "Ceyda",
    "Ferhat",
    "Gökçe",
    "Hilal"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İkinci koşulu atlama: Ferhat'ın tepsisi üç bölümü de içerir ama içeceği şekerlidir.",
    "Eksik bölümü gözden kaçırma: Gökçe'nin tepsisinde meyve yoktur.",
    "Fazlayı eksiği kapatır sanma: Hilal'in iki meyvesi vardır ama ana yiyeceği yoktur."
  ],
  aciklama: `Adım 1: Birinci koşula göre boş hücresi olan tepsiyi ele: Gökçe'de meyve, Hilal'de ana yiyecek yoktur.
Adım 2: Kalan Ferhat ile Ceyda'nın içeceğine bak: Ferhat'ınki şekerli gazozdur, ikinci koşulu bozar.
Adım 3: Ceyda'nın tepsisinde ayran, peynirli tost ve elma vardır; içecek şekerli değildir.
Sık yapılan hata: Bir satırda çok yiyecek görünce tepsiyi eksiksiz sanmak. Her bölüm ayrı ayrı dolu olmalıdır.
Cevap A.`
},
{
  id: "tur-sm-212",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 2,
  soru: `Mert, Nur, Oya ve Pars kütüphaneye farklı saatlerde gelmiştir.
• Oya, Mert'ten önce gelmiştir.
• Mert, Nur'dan önce gelmiştir.
• Pars, Nur'dan önce gelmiştir.

**Aşağıdaki bilgilerden hangisi eklenirse dört kişinin geliş sırası kesin olarak belirlenir?**`,
  gorsel: null,
  secenekler: [
    "Nur en son gelmiştir.",
    "Pars, Oya'dan sonra gelmiştir.",
    "Pars ile Nur art arda gelmiştir.",
    "Mert ikinci sırada gelmemiştir."
  ],
  dogru: 2,
  hatalar: [
    "Zaten bilinen bilgiyi ekleme: üç kişi de Nur'dan önce geldiği için Nur zaten sonuncudur; bu bilgi yeni bir şey söylemez.",
    "Olasılıkları azaltmayı kesinleştirme sanma: bu bilgiyle Oya-Pars-Mert-Nur ve Oya-Mert-Pars-Nur sıralamaları kalır.",
    null,
    "Olasılıkları azaltmayı kesinleştirme sanma: bu bilgiyle Pars-Oya-Mert-Nur ve Oya-Pars-Mert-Nur sıralamaları kalır."
  ],
  aciklama: `Adım 1: Oya → Mert → Nur zinciri kesindir. Pars yalnızca Nur'dan önce olmalıdır.
Adım 2: Pars zincirde Nur'dan önceki üç yerden birine girebilir: Pars-Oya-Mert-Nur, Oya-Pars-Mert-Nur, Oya-Mert-Pars-Nur. Üç sıralama mümkündür.
Adım 3: Her seçeneği bu üç sıralamaya uygula. "Pars ile Nur art arda gelmiştir" bilgisi yalnızca Oya-Mert-Pars-Nur sıralamasında sağlanır.
Sağlama: Diğer seçeneklerin her biri iki ya da üç sıralamayı ayakta bırakır.
Cevap C.`
},
{
  id: "tur-sm-213",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 2,
  soru: `Okulun bilgisayar sınıfında kullanılacak parolalar, tablodaki kuralların hepsine uymalıdır.

**Buna göre aşağıdaki parolalardan hangisi kurallara uygundur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kural</th><th>Açıklama</th></tr><tr><td>1</td><td>En az 8 karakterden oluşmalıdır.</td></tr><tr><td>2</td><td>En az bir büyük harf içermelidir.</td></tr><tr><td>3</td><td>En az bir rakam içermelidir.</td></tr><tr><td>4</td><td>Boşluk içermemelidir.</td></tr></table>",
  secenekler: [
    "kitap2027",
    "Deniz 2026",
    "Kule27a",
    "Martı4Kuş"
  ],
  dogru: 3,
  hatalar: [
    "2. kuralı atlama: kitap2027 dokuz karakterlidir ve rakam içerir ama büyük harf içermez.",
    "4. kuralı atlama: Deniz 2026 parolasında büyük harf ve rakam vardır ama boşluk bulunmaktadır.",
    "1. kuralı atlama: Kule27a büyük harf ve rakam içerir ama yalnızca 7 karakterlidir.",
    null
  ],
  aciklama: `Adım 1: Her parolanın karakterlerini say ve dört kuralı sırayla kontrol et.
Adım 2: kitap2027 → büyük harf yok. Deniz 2026 → boşluk var. Kule27a → 7 karakter, 8'den az.
Adım 3: Martı4Kuş → M, a, r, t, ı, 4, K, u, ş: 9 karakter; M ve K büyük harf; 4 rakam; boşluk yok.
Sağlama: Martı4Kuş dört kuralın dördünü de sağlıyor.
Cevap D.`
},
{
  id: "tur-sm-214",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 3,
  soru: `Okul korosundaki Alp, Bade, Cenk, Derya ve Ege, gösteri gecesinde sahneye birer birer çıkacaktır. Görselde Derya'nın sahneye çıkış sırası gösterilmiştir. Diğer öğrencilerin sırası için şunlar bilinmektedir:
• Alp, Ege'den önce sahneye çıkacaktır ama Ege'den hemen önce çıkmayacaktır.
• Bade, Cenk'ten sonra sahneye çıkacaktır.
• Ege sahneye en son çıkmayacaktır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 546 136\" role=\"img\"><text x=\"273\" y=\"24\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Sahneye çıkış sırası</text><rect x=\"20\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"65\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"65\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1.</text><rect x=\"124\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"169\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"169\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2.</text><rect x=\"228\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"273\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">Derya</text><text x=\"273\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3.</text><rect x=\"332\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"377\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"377\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4.</text><rect x=\"436\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"481\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"481\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5.</text></svg>",
  secenekler: [
    "Bade sahneye en son çıkar.",
    "Alp sahneye ilk çıkar.",
    "Cenk sahneye ikinci çıkar.",
    "Ege, Derya'dan önce sahneye çıkar."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Olasılığı kesinlik sanma: Alp ilk çıkabilir ama Cenk ilk, Alp ikinci de çıkabilir.",
    "Olasılığı kesinlik sanma: Cenk ikinci çıkabilir ama Cenk ilk, Alp ikinci sıralaması da kurallara uyar.",
    "Koşulu ters uygulama: Alp, Ege'den en az iki sıra önce olmalıdır; Ege 1. ya da 2. olursa Alp'e yer kalmaz, Ege 4. sıradadır."
  ],
  aciklama: `Adım 1: Ege son değildir ve 3. sıra Derya'nındır; Ege 1, 2 ya da 4. olabilir. Alp, Ege'den önce ve aralarında en az bir kişi olacağı için Ege 1 ya da 2 olamaz. Ege 4. sıradadır.
Adım 2: Alp, Ege'den hemen önce (3.) değildir; Alp 1 ya da 2. sıradadır.
Adım 3: Geriye 5. sıra ile 1-2. sıralardan biri kalır. Bade, Cenk'ten sonra olduğu için Bade 5., Cenk ise Alp'ten boş kalan 1 ya da 2. sıradadır.
Sağlama: İki sıralama vardır: Alp-Cenk-Derya-Ege-Bade ve Cenk-Alp-Derya-Ege-Bade. İkisinde de Bade en son çıkar.
Cevap A.`
},
{
  id: "tur-sm-215",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 3,
  soru: `Bir sokakta yan yana beş ev vardır. Evlerin her birinde farklı bir evcil hayvan beslenmektedir: kedi, köpek, kuş, balık ve tavşan. Görselde kedinin beslendiği ev gösterilmiştir. Ayrıca şunlar bilinmektedir:
• Köpek, kedinin beslendiği evin hemen yanındaki evlerden birindedir.
• Kuş ile balık yan yana iki evde beslenmektedir.
• Tavşan 1 numaralı evde değildir.

**Buna göre 5 numaralı evde hangi hayvan beslenmektedir?**`,
  gorsel: "<svg viewBox=\"0 0 546 136\" role=\"img\"><text x=\"273\" y=\"24\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Evler (soldan sağa)</text><rect x=\"20\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"65\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"65\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><rect x=\"124\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"169\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"169\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><rect x=\"228\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"273\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\" font-weight=\"bold\">Kedi</text><text x=\"273\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><rect x=\"332\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"377\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"377\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><rect x=\"436\" y=\"40\" width=\"90\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"481\" y=\"74\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"481\" y=\"122\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text></svg>",
  secenekler: [
    "Köpek",
    "Tavşan",
    "Kuş",
    "Balık"
  ],
  dogru: 1,
  hatalar: [
    "Durumu denemeden seçme: köpek kedinin hemen yanında, yani 2 ya da 4 numaradadır; 5 numaraya konamaz.",
    null,
    "Çift durumları yarım inceleme: kuş 5 numarada olsaydı balık 4'te, köpek 2'de olurdu; tavşana yalnızca 1 numara kalırdı ki bu yasaktır.",
    "Yasak durumu kontrol etmeme: balık 5 numarada olsaydı kuş 4'te, köpek 2'de olurdu; bu durumda tavşan 1 numaraya düşer ve kural bozulur."
  ],
  aciklama: `Adım 1: Kedi 3 numaradadır. Köpek hemen yanında, 2 ya da 4 numaradadır.
Adım 2: Köpek 2'de olursa boş evler 1, 4 ve 5'tir. Kuş ile balık yan yana olacağı için 4-5'e, tavşan 1'e düşer; bu yasaktır. Öyleyse köpek 4 numaradadır.
Adım 3: Boş evler 1, 2 ve 5'tir. Kuş ile balık yan yana olan 1-2'ye yerleşir; tavşan 5 numaradadır.
Sağlama: Kuş ile balığın 1-2'deki yeri iki biçimde olabilir ama iki durumda da 5 numarada tavşan vardır.
Cevap B.`
},
{
  id: "tur-sm-216",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 3,
  soru: `Bir bisiklet parkurunda rüzgârın hızına göre bayrak asılmakta ve parkurlar buna göre açılıp kapatılmaktadır. Tablo 1'de bayrak kuralları, Tablo 2'de bir gün boyunca ölçülen rüzgâr hızları verilmiştir. Bir bisikletlinin planı, parkurda kalacağı saat aralıklarının hepsinde seçtiği parkur açıksa kurallara uygundur.

**Buna göre aşağıdaki bisikletlilerden hangisinin planı kurallara uygundur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Rüzgâr hızı (km/sa)</th><th>Bayrak</th><th>Açık parkur</th></tr><tr><td>0–20</td><td>Yeşil</td><td>Kısa ve uzun parkur</td></tr><tr><td>21–35</td><td>Sarı</td><td>Kısa parkur</td></tr><tr><td>36 ve üzeri</td><td>Kırmızı</td><td>Açık parkur yok</td></tr></table><table class=\"tablo\"><tr><th>Saat aralığı</th><th>Rüzgâr hızı (km/sa)</th></tr><tr><td>09.00–11.00</td><td>18</td></tr><tr><td>11.00–13.00</td><td>27</td></tr><tr><td>13.00–15.00</td><td>36</td></tr><tr><td>15.00–17.00</td><td>21</td></tr><tr><td>17.00–19.00</td><td>12</td></tr></table>",
  secenekler: [
    "09.00–13.00 arasında uzun parkurda sürecek olan Selin",
    "11.00–15.00 arasında kısa parkurda sürecek olan Taner",
    "15.00–19.00 arasında kısa parkurda sürecek olan Ulaş",
    "15.00–19.00 arasında uzun parkurda sürecek olan Vildan"
  ],
  dogru: 2,
  hatalar: [
    "Yalnızca başlangıç saatine bakma: 09.00–11.00 arasında bayrak yeşildir ama 11.00–13.00 arasında rüzgâr 27 km/sa olur, sarı bayrakta uzun parkur kapalıdır.",
    "Sınır değeri yanlış aralığa koyma: 11.00–13.00 arasında kısa parkur açıktır ama 13.00–15.00 arasındaki 36 km/sa \"36 ve üzeri\" aralığındadır; kırmızı bayrakta hiçbir parkur açık değildir.",
    null,
    "Sınır değeri yanlış aralığa koyma: 21 km/sa yeşil değil sarı bayrak aralığındadır; 15.00–17.00 arasında uzun parkur kapalıdır."
  ],
  aciklama: `Bu tür sorularda planın kapsadığı her saat aralığını Tablo 2'de bul, rüzgâr hızını Tablo 1'deki aralığa yerleştir ve seçilen parkurun o aralıkta açık olup olmadığına bak. Tek bir aralıkta bile parkur kapalıysa plan uygun değildir.
Adım 1: Selin, uzun parkur: 09.00–11.00 → 18 km/sa → yeşil, açık; 11.00–13.00 → 27 km/sa → sarı, uzun parkur kapalı. Plan uygun değil.
Adım 2: Taner, kısa parkur: 11.00–13.00 → 27 km/sa → sarı, açık; 13.00–15.00 → 36 km/sa → kırmızı, parkur yok. Plan uygun değil.
Adım 3: Vildan, uzun parkur: 15.00–17.00 → 21 km/sa → sarı, uzun parkur kapalı. Plan uygun değil.
Adım 4: Ulaş, kısa parkur: 15.00–17.00 → 21 km/sa → sarı, kısa parkur açık; 17.00–19.00 → 12 km/sa → yeşil, kısa parkur açık. Plan uygundur.
Sık yapılan hata: Yalnızca planın ilk saat aralığına bakmak ya da 21'i "20'ye yakın" diye yeşil aralığa, 36'yı "35'e yakın" diye sarı aralığa koymak.
Cevap C.`
},
{
  id: "tur-sm-217",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 3,
  soru: `Sınıftaki akvaryumun balıklarına bu sabah yem verilmiştir. Asya, Barış, Cemre ve Demir'den yalnızca biri yem vermiştir. Öğretmen kimin yem verdiğini sorunca dördü tablodaki cevapları vermiştir. Daha sonra bu dört sözden yalnızca birinin doğru olduğu anlaşılmıştır.

**Buna göre balıklara yemi kim vermiştir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>Söylediği söz</th></tr><tr><td>Asya</td><td>\"Yemi Barış verdi.\"</td></tr><tr><td>Barış</td><td>\"Yemi Demir verdi.\"</td></tr><tr><td>Cemre</td><td>\"Yemi ben vermedim.\"</td></tr><tr><td>Demir</td><td>\"Barış doğruyu söylemiyor.\"</td></tr></table>",
  secenekler: [
    "Asya",
    "Barış",
    "Cemre",
    "Demir"
  ],
  dogru: 2,
  hatalar: [
    "Doğru söz sayısını kontrol etmeme: yemi Asya verseydi hem Cemre'nin hem de Demir'in sözü doğru olurdu.",
    "Doğru söz sayısını kontrol etmeme: yemi Barış verseydi Asya'nın, Cemre'nin ve Demir'in sözleri doğru olurdu.",
    null,
    "Doğru söz sayısını kontrol etmeme: yemi Demir verseydi hem Barış'ın hem de Cemre'nin sözü doğru olurdu."
  ],
  aciklama: `Bu tür sorularda her kişiyi sırayla "yemi o verdi" diye varsay ve kaç sözün doğru çıktığını say. Tam bir doğru söz veren durum cevaptır.
Adım 1: Asya verdiyse: Cemre ("ben vermedim") doğru, Demir ("Barış doğru söylemiyor") doğru → 2 doğru, olmaz.
Adım 2: Barış verdiyse: Asya, Cemre ve Demir doğru → 3 doğru, olmaz. Demir verdiyse: Barış ve Cemre doğru → 2 doğru, olmaz.
Adım 3: Cemre verdiyse: Asya yanlış, Barış yanlış, Cemre yanlış; yalnızca Demir'in sözü doğru → 1 doğru.
Sağlama: Cemre'nin durumunda tam bir söz doğrudur; koşul sağlanıyor.
Cevap C.`
},
{
  id: "tur-sm-218",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 3,
  soru: `Bir halk kütüphanesi pazartesiden cumaya kadar her gün bir atölye düzenleyecektir: masal, çizgi roman, origami, şiir ve bilim. Görselde origami atölyesinin günü gösterilmiştir. Diğer atölyeler için şunlar bilinmektedir:
• Masal ile şiir atölyeleri art arda iki günde yapılmayacaktır.
• Bilim atölyesi pazartesi yapılmayacaktır.
• Çizgi roman atölyesi, bilim atölyesinden önceki günlerden birinde yapılacaktır.
• Çizgi roman atölyesi pazartesi yapılmayacaktır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 560 110\" role=\"img\"><rect x=\"20\" y=\"14\" width=\"96\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"68\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">?</text><text x=\"68\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Pazartesi</text><rect x=\"126\" y=\"14\" width=\"96\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"174\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">?</text><text x=\"174\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Salı</text><rect x=\"232\" y=\"14\" width=\"96\" height=\"56\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\" font-weight=\"bold\">Origami</text><text x=\"280\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Çarşamba</text><rect x=\"338\" y=\"14\" width=\"96\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"386\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">?</text><text x=\"386\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Perşembe</text><rect x=\"444\" y=\"14\" width=\"96\" height=\"56\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"492\" y=\"48\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">?</text><text x=\"492\" y=\"96\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">Cuma</text></svg>",
  secenekler: [
    "Çizgi roman atölyesi salı günü yapılır.",
    "Masal atölyesi pazartesi günü yapılır.",
    "Bilim atölyesi cuma günü yapılır.",
    "Şiir atölyesi perşembe günü yapılır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Olasılığı kesinlik sanma: masal pazartesi olabilir ama şiir pazartesi, masal perşembe ya da cuma da olabilir.",
    "Olasılığı kesinlik sanma: bilim cuma olabilir ama bilim perşembe, şiir ya da masal cuma da olabilir.",
    "Olasılığı kesinlik sanma: şiir perşembe olabilir ama bu yalnızca dört sıralamadan birinde gerçekleşir."
  ],
  aciklama: `Adım 1: Çizgi roman bilimden önce olmalı ve pazartesi olamaz; çarşamba da origaminindir. Çizgi roman salı ise bilim perşembe ya da cuma olur. Çizgi roman perşembe ise bilim cuma olur.
Adım 2: Çizgi roman perşembe, bilim cuma olursa masal ile şiir pazartesi ve salıya kalır; bu iki gün art arda olduğu için yasaktır. Öyleyse çizgi roman salıdır.
Adım 3: Pazartesi, perşembe ve cuma masal, şiir ve bilime kalır; bilim pazartesi olamaz. Uygun sıralamalar: masal-çizgi roman-origami-şiir-bilim, masal-çizgi roman-origami-bilim-şiir, şiir-çizgi roman-origami-masal-bilim, şiir-çizgi roman-origami-bilim-masal.
Sağlama: Dört sıralamanın hepsinde çizgi roman salıdır; diğer seçenekler bazı sıralamalarda doğru, bazılarında yanlıştır.
Cevap A.`
},
{
  id: "tur-sm-219",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 3,
  soru: `Gaye, Hakan, İpek ve Kemal'in her biri farklı bir çalgı kursuna (bağlama, keman, piyano, davul) yazılmıştır. Kurslar pazartesiden perşembeye kadar her gün birer tanedir; iki kursun günleri tabloda verilmiştir. Ayrıca şunlar bilinmektedir:
• Gaye keman kursuna yazılmıştır.
• Hakan'ın kursu, Gaye'nin kursundan hemen sonraki gündür.
• İpek piyano kursuna yazılmamıştır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kurs</th><th>Bağlama</th><th>Keman</th><th>Piyano</th><th>Davul</th></tr><tr><td>Gün</td><td>?</td><td>?</td><td>Pazartesi</td><td>Perşembe</td></tr></table>",
  secenekler: [
    "Gaye'nin kursu salı günüdür.",
    "Hakan davul kursuna yazılmıştır.",
    "İpek'in kursu perşembe günüdür.",
    "Kemal piyano kursuna yazılmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Olasılığı kesinlik sanma: Gaye salı olabilir ama Gaye çarşamba, Hakan perşembe durumu da kurallara uyar.",
    "Olasılığı kesinlik sanma: Hakan davulda olabilir ama Gaye salı ise Hakan çarşamba günkü bağlama kursundadır.",
    "Olasılığı kesinlik sanma: İpek perşembe davul kursunda olabilir ama Hakan davuldaysa İpek salı günkü bağlamadadır.",
    null
  ],
  aciklama: `Adım 1: Piyano pazartesi günüdür. Gaye kemandadır; İpek piyanoda değildir. Hakan'ın kursu Gaye'ninkinden sonra olduğu için pazartesi olamaz; Hakan da piyanoda değildir. Piyano Kemal'indir.
Adım 2: Keman ve bağlama salı ile çarşambaya kalır. Gaye salı ise Hakan çarşamba (bağlama), İpek perşembe (davul) olur.
Adım 3: Gaye çarşamba ise Hakan perşembe (davul), İpek salı (bağlama) olur.
Sağlama: İki durumda da Kemal pazartesi günkü piyano kursundadır; diğer seçenekler yalnızca bir durumda doğrudur.
Cevap D.`
},
{
  id: "tur-sm-220",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 3,
  soru: `Bir okul futbol turnuvasında Kartal, Martı, Şahin ve Turna takımları birbiriyle birer maç yapmıştır. Galibiyet 3, beraberlik 1, yenilgi 0 puan getirir. Puanları eşit olan iki takımdan, aralarındaki maçı kazanan üst sırada yer alır. Maç sonuçları tabloda verilmiştir.

**Buna göre puan tablosunda ikinci sırada hangi takım yer alır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Maç</th><th>Skor</th></tr><tr><td>Kartal – Martı</td><td>2 – 1</td></tr><tr><td>Kartal – Şahin</td><td>1 – 0</td></tr><tr><td>Kartal – Turna</td><td>0 – 1</td></tr><tr><td>Martı – Şahin</td><td>3 – 1</td></tr><tr><td>Martı – Turna</td><td>2 – 0</td></tr><tr><td>Şahin – Turna</td><td>2 – 0</td></tr></table>",
  secenekler: [
    "Kartal",
    "Martı",
    "Şahin",
    "Turna"
  ],
  dogru: 1,
  hatalar: [
    "Eşitlik kuralını ters uygulama: Kartal ile Martı 6'şar puanla eşittir; aralarındaki maçı Kartal kazandığı için Kartal birinci, Martı ikincidir.",
    null,
    "Son maça göre karar verme: Şahin son maçını kazanmıştır ama toplam puanı 3'tür, Kartal ve Martı'nın gerisindedir.",
    "Eşitlik kuralını puanı eşit olmayan takımlara uygulama: Turna, Kartal'ı yenmiştir ama puanı 3'tür; kural yalnızca puanı eşit takımlar için geçerlidir."
  ],
  aciklama: `Adım 1: Her takımın maçlarını bul ve puanları topla. Kartal: galibiyet, galibiyet, yenilgi → 6. Martı: yenilgi, galibiyet, galibiyet → 6.
Adım 2: Şahin: yenilgi, yenilgi, galibiyet → 3. Turna: galibiyet, yenilgi, yenilgi → 3.
Adım 3: Kartal ile Martı eşittir; aralarındaki maçı Kartal 2 – 1 kazanmıştır. Kartal birinci, Martı ikincidir.
Sağlama: Şahin ile Turna da 3'er puanla eşittir; aralarındaki maçı Şahin kazandığı için Şahin üçüncü, Turna dördüncüdür.
Cevap B.`
},
{
  id: "tur-sm-221",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 3,
  soru: `Lale, Mert, Nail, Oya ve Poyraz, görseldeki trenin beş vagonundan farklı birer vagona binmiştir. Vagonlar önden arkaya 1'den 5'e kadar numaralıdır.
• Lale, Mert'in hemen arkasındaki vagondadır.
• Nail ile Oya'nın vagonları arasında tam bir vagon vardır.
• Oya, Mert'ten daha öndeki bir vagondadır.
• Poyraz 1 numaralı vagonda değildir.

**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: "<svg viewBox=\"0 0 560 124\" role=\"img\"><rect x=\"10\" y=\"30\" width=\"70\" height=\"56\" rx=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"45\" y=\"64\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Lokomotif</text><line x1=\"80\" y1=\"58\" x2=\"90\" y2=\"58\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"90\" y=\"30\" width=\"82\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"131\" y=\"64\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"131\" y=\"110\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1. vagon</text><line x1=\"172\" y1=\"58\" x2=\"182\" y2=\"58\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"182\" y=\"30\" width=\"82\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"223\" y=\"64\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"223\" y=\"110\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2. vagon</text><line x1=\"264\" y1=\"58\" x2=\"274\" y2=\"58\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"274\" y=\"30\" width=\"82\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"315\" y=\"64\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"315\" y=\"110\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3. vagon</text><line x1=\"356\" y1=\"58\" x2=\"366\" y2=\"58\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"366\" y=\"30\" width=\"82\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"407\" y=\"64\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"407\" y=\"110\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4. vagon</text><line x1=\"448\" y1=\"58\" x2=\"458\" y2=\"58\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"458\" y=\"30\" width=\"82\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"499\" y=\"64\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">?</text><text x=\"499\" y=\"110\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5. vagon</text><text x=\"10\" y=\"20\" font-size=\"15\" fill=\"var(--vurgu)\">← Trenin önü</text></svg>",
  secenekler: [
    "Nail 1 numaralı vagondadır.",
    "Oya 3 numaralı vagondadır.",
    "Poyraz 2 numaralı vagondadır.",
    "Lale, Nail'in hemen arkasındaki vagondadır."
  ],
  dogru: 3,
  hatalar: [
    "Olabilecek durumu olamaz sanma: Nail 1, Poyraz 2, Oya 3, Mert 4, Lale 5 dizilişi bütün bilgilere uyar.",
    "Olabilecek durumu olamaz sanma: Oya 3 numarada olursa Nail 1 numarada olur ve bütün bilgiler sağlanır.",
    "Kesin durumu olamaz sanma: Poyraz iki dizilişte de 2 numaralı vagondadır.",
    null
  ],
  aciklama: `Adım 1: Mert ile Lale art arda iki vagondadır (Lale arkada). Oya, Mert'ten öndedir; Nail ile Oya arasında bir vagon vardır.
Adım 2: Mert-Lale 1-2 olamaz (Oya'ya önde yer kalmaz). 2-3 olursa Oya 1'e düşer, Nail de 3'e düşmesi gerekir; 3 dolu olduğundan olmaz. 3-4 olursa Oya ile Nail'e 1, 2 ve 5 kalır; aralarında bir vagon olacak ikili bulunmaz.
Adım 3: Mert 4, Lale 5 olmalıdır. Oya ile Nail 1 ve 3'tedir (hangisinin nerede olduğu değişebilir); Poyraz 2'dedir.
Sağlama: Dizilişler Nail-Poyraz-Oya-Mert-Lale ve Oya-Poyraz-Nail-Mert-Lale'dir. Lale 5'te, Nail ise 1 ya da 3'te olduğundan Lale hiçbir zaman Nail'in hemen arkasında olamaz.
Cevap D.`
},
{
  id: "tur-sm-222",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 3,
  soru: `Bir sınav salonunda beş öğrenci yan yana beş sıraya oturtulacaktır. Sıralar soldan sağa 1'den 5'e kadar numaralıdır. Öğrencilerin şubeleri tabloda verilmiştir. Oturma planı şu kurallara uymalıdır:
• Aynı şubeden iki öğrenci yan yana oturamaz.
• Ece 3 numaralı sırada oturmalıdır.
• Ali 1 numaralı sırada oturamaz.

**Buna göre aşağıdaki oturma planlarından hangisi kurallara uygundur? (Planlar 1'den 5'e doğru yazılmıştır.)**`,
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>Ali</th><th>Berk</th><th>Cem</th><th>Dilan</th><th>Ece</th></tr><tr><td>Şube</td><td>8-A</td><td>8-A</td><td>8-B</td><td>8-B</td><td>8-C</td></tr></table>",
  secenekler: [
    "Cem – Ali – Ece – Dilan – Berk",
    "Ali – Cem – Ece – Berk – Dilan",
    "Dilan – Cem – Ece – Ali – Berk",
    "Berk – Dilan – Ali – Ece – Cem"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Üçüncü kuralı atlama: bu planda şubeler hiç yan yana gelmez ama Ali 1 numaralı sıradadır.",
    "Tabloyu eksik okuma: Dilan ile Cem aynı şubeden (8-B) oldukları hâlde 1 ve 2 numarada yan yana oturmaktadır.",
    "İkinci kuralı atlama: bu planda Ece 3 numarada değil, 4 numarada oturmaktadır."
  ],
  aciklama: `Kurallara uyan planı bulmak için her planı kurallarla tek tek karşılaştır; bir kuralı bozan plan elenir.
Adım 1: Ece'nin yeri: D seçeneğinde Ece 4 numaradadır → elenir.
Adım 2: Ali'nin yeri: B seçeneğinde Ali 1 numaradadır → elenir.
Adım 3: Yan yana şubeler: C seçeneğinde Dilan ile Cem (ikisi de 8-B) yan yanadır → elenir. A seçeneğinde komşu şubeler 8-B/8-A, 8-A/8-C, 8-C/8-B, 8-B/8-A olup hiçbiri aynı değildir.
Sağlama: A seçeneğinde Ece 3 numarada, Ali 2 numaradadır; üç kural da sağlanıyor.
Cevap A.`
},
{
  id: "tur-sm-223",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 3,
  soru: `Eylül, Ferit, Gonca, Haluk ve İlkim'in her biri farklı bir dersin projesini hazırlamıştır: fen, tarih, müzik, resim ve matematik. Tabloda ✗ işareti, öğrencinin o dersin projesini hazırlamadığını gösterir. Ayrıca Haluk'un resim projesini hazırlamadığı bilinmektedir.

**Buna göre fen projesini hazırlayan öğrenci kimdir?**`,
  gorsel: "<table class=\"tablo\"><tr><th></th><th>Fen</th><th>Tarih</th><th>Müzik</th><th>Resim</th><th>Matematik</th></tr><tr><td>Eylül</td><td>✗</td><td>✗</td><td></td><td>✗</td><td></td></tr><tr><td>Ferit</td><td>✗</td><td></td><td>✗</td><td>✗</td><td>✗</td></tr><tr><td>Gonca</td><td></td><td>✗</td><td>✗</td><td>✗</td><td></td></tr><tr><td>Haluk</td><td>✗</td><td>✗</td><td>✗</td><td></td><td></td></tr><tr><td>İlkim</td><td></td><td>✗</td><td>✗</td><td></td><td>✗</td></tr></table>",
  secenekler: [
    "Eylül",
    "İlkim",
    "Gonca",
    "Haluk"
  ],
  dogru: 2,
  hatalar: [
    "Tabloyu yanlış okuma: Eylül'ün satırında fenin altında ✗ vardır; Eylül müzik projesini hazırlamıştır.",
    "Ek bilgiyi kullanmama: tablo tek başına Gonca ile İlkim arasında karar verdirmez; Haluk resmi hazırlamadığı için matematik Haluk'a, fen Gonca'ya, resim İlkim'e kalır.",
    null,
    "Tabloyu yanlış okuma: Haluk'un satırında fenin altında ✗ vardır; Haluk matematik projesini hazırlamıştır."
  ],
  aciklama: `Eşleştirme tablolarında hem satırlara hem de sütunlara bak: tek boş hücresi kalan satır ya da sütun kesin bilgi verir.
Adım 1: Ferit'in satırında yalnızca tarih boştur → Ferit tarih. Müzik sütununda yalnızca Eylül boştur → Eylül müzik.
Adım 2: Ek bilgiye göre Haluk resim hazırlamadı; satırında yalnızca matematik kalır → Haluk matematik.
Adım 3: Gonca'nın satırında fen ve matematik boştur; matematik Haluk'un olduğundan Gonca fen hazırlamıştır. Geriye kalan resim İlkim'indir.
Sağlama: Eylül müzik, Ferit tarih, Gonca fen, Haluk matematik, İlkim resim; tablodaki hiçbir ✗ ile çelişmiyor.
Cevap C.`
},
{
  id: "tur-sm-224",
  kazanim: "T.8.3.25",
  kademe: 2,
  zorluk: 3,
  soru: `Ece, Fuat, Rana, Selim ve Tolga bir koşu yarışına katılmış ve yarışı farklı sıralarda bitirmiştir.
• Tolga, Ece'den önce bitirmiştir.
• Rana, Tolga'dan hemen sonra bitirmiştir.
• Selim üçüncü olmamıştır.
• Fuat birinci olmamıştır.

**Buna göre Ece yarışı kaç farklı sırada bitirmiş olabilir?**`,
  gorsel: null,
  secenekler: [
    "2",
    "3",
    "4",
    "5"
  ],
  dogru: 1,
  hatalar: [
    "Bir durumu gözden kaçırma: Tolga 1, Rana 2 olduğunda Ece 3. olabilir; bu durumda Selim ve Fuat 4 ve 5. sıralara yerleşir.",
    null,
    "\"Hemen sonra\" bilgisini atlama: Rana, Tolga'dan hemen sonra geldiği için Ece 2. olamaz; Tolga'dan sonraki ilk sıra Rana'nındır.",
    "Kuralları uygulamama: Ece 1. olamaz, çünkü Tolga ondan önce bitirmiştir; 2. de olamaz, çünkü o sıra Rana'nındır."
  ],
  aciklama: `"Kaç farklı sıra" sorusunda Ece'nin her olası sırasını tek tek dene ve en az bir uygun diziliş var mı diye bak.
Adım 1: Tolga, Ece'den önce; Rana da Tolga'nın hemen arkasındadır. Öyleyse Ece'den önce en az Tolga ve Rana vardır; Ece 1. ya da 2. olamaz.
Adım 2: Ece 3. ise Tolga 1, Rana 2 olur; Selim ile Fuat 4 ve 5'e yerleşir (Selim 3. değil, Fuat 1. değil): uygun. Ece 4. ise örneğin Selim 1, Tolga 2, Rana 3, Ece 4, Fuat 5: uygun.
Adım 3: Ece 5. ise örneğin Selim 1, Fuat 2, Tolga 3, Rana 4, Ece 5: uygun.
Sağlama: Ece 3, 4 ya da 5. olabilir; bu 3 farklı sıradır.
Cevap B.`
},
{
  id: "tur-sm-225",
  kazanim: "T.8.3.32",
  kademe: 2,
  zorluk: 3,
  soru: `Bir seradaki otomatik sulama sistemi, toprağın nem oranına göre ön vanayı, arka vanayı ve fanı açıp kapatmaktadır. Tablo 1'de sistemin temel kuralları, Tablo 2'de sistemin bir gün boyunca yaptığı ölçümler ve o anki çalışma durumu verilmiştir. Sistemde ayrıca şu iki kural vardır:
• 12.00 ile 16.00 arasında fan, nem oranı ne olursa olsun açık tutulur; vanalar Tablo 1'e göre çalışır.
• 18.00'den sonra iki vana da nem oranı ne olursa olsun kapalı tutulur; fan Tablo 1'e göre çalışır.

**Buna göre sistem hangi saatte kurallara __uygun çalışmamıştır__?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Nem oranı (%)</th><th>Ön vana</th><th>Arka vana</th><th>Fan</th></tr><tr><td>0–20</td><td>Açık</td><td>Açık</td><td>Kapalı</td></tr><tr><td>21–40</td><td>Açık</td><td>Kapalı</td><td>Kapalı</td></tr><tr><td>41–60</td><td>Kapalı</td><td>Kapalı</td><td>Kapalı</td></tr><tr><td>61 ve üzeri</td><td>Kapalı</td><td>Kapalı</td><td>Açık</td></tr></table><table class=\"tablo\"><tr><th>Saat</th><th>Nem oranı (%)</th><th>Ön vana</th><th>Arka vana</th><th>Fan</th></tr><tr><td>06.00</td><td>20</td><td>Açık</td><td>Açık</td><td>Kapalı</td></tr><tr><td>10.00</td><td>40</td><td>Açık</td><td>Kapalı</td><td>Kapalı</td></tr><tr><td>14.00</td><td>45</td><td>Kapalı</td><td>Kapalı</td><td>Açık</td></tr><tr><td>19.00</td><td>35</td><td>Açık</td><td>Kapalı</td><td>Kapalı</td></tr></table>",
  secenekler: [
    "06.00",
    "10.00",
    "14.00",
    "19.00"
  ],
  dogru: 3,
  hatalar: [
    "Sınır değeri yanlış aralığa koyma: %20, 0–20 aralığındadır; iki vananın açık, fanın kapalı olması doğrudur.",
    "Sınır değeri yanlış aralığa koyma: %40, 21–40 aralığındadır; yalnızca ön vananın açık olması doğrudur.",
    "Ek kuralı gözden kaçırma: %45'te Tablo 1'e göre fan kapalı olmalıdır ama 14.00, 12.00 ile 16.00 arasındadır; bu saatlerde fanın açık olması kurala uygundur.",
    null
  ],
  aciklama: `Bu tür sorularda her saati önce Tablo 1'e göre değerlendir, sonra o saatte geçerli bir ek kural varsa onu uygula. Ek kural, Tablo 1'in söylediğini değiştirir.
Adım 1: 06.00'da nem %20'dir → 0–20 aralığı: iki vana açık, fan kapalı. Tablo 2 bununla aynıdır; ek kural yoktur. Uygun.
Adım 2: 10.00'da nem %40'tır → 21–40 aralığı: ön vana açık, arka vana ve fan kapalı. Tablo 2 bununla aynıdır. Uygun.
Adım 3: 14.00'te nem %45'tir → 41–60 aralığı: vanalar kapalı. Fan Tablo 1'e göre kapalı olurdu ama 14.00, 12.00 ile 16.00 arasındadır; fan açık tutulur. Tablo 2'de vanalar kapalı, fan açıktır. Uygun.
Adım 4: 19.00'da nem %35'tir → 21–40 aralığı. Tablo 1'e göre ön vana açık olurdu ama 19.00, 18.00'den sonradır; iki vana da kapalı olmalıdır. Tablo 2'de ön vana açık görünür. Sistem kurala uymamıştır.
Sık yapılan hata: Yalnızca Tablo 1'e bakmak. Bu durumda 14.00'teki açık fan hatalı, 19.00'daki açık ön vana doğru sanılır.
Cevap D.`
}
);
