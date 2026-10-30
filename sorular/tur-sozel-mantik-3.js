// Türkçe — Sözel Mantık: Kademe 1 (Kavrama) yedeği, sıra 26-75 (tur-sm-126 … tur-sm-175)
// Kazanım: T.8.3.25 (çıkarım), tablo/çizelge verili sorularda T.8.3.32.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sozel-mantik"] = window.LGS_BANK["sozel-mantik"] || []).push(
{
  id: "tur-sm-126",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir pazarcı tezgâhına soldan sağa doğru dört kasa dizecektir: elma, armut, üzüm ve incir.
• Üzüm kasası en soldadır.
• Elma kasası, üzüm kasasının hemen sağındadır.
• İncir kasası en sağda değildir.

**Buna göre armut kasası soldan kaçıncı sıradadır?**`,
  gorsel: null,
  secenekler: ["1. sırada", "2. sırada", "3. sırada", "4. sırada"],
  dogru: 3,
  hatalar: [
    "En sol yeri armuta verme: en soldaki kasa üzümdür.",
    "\"Hemen sağında\" bilgisini atlama: elma, üzümün hemen sağında yani 2. sıradadır.",
    "İncirin yerini armuta verme: incir en sağda olmadığı için 3. sıradadır.",
    null
  ],
  aciklama: `Sıralama sorularında önce yeri kesin verilen öğeyi yerleştir, sonra ona bağlı olanları ekle.
Adım 1: Üzüm en soldadır, yani 1. sıradadır.
Adım 2: Elma üzümün hemen sağındadır, yani 2. sıradadır.
Adım 3: Geriye 3. ve 4. sıra kaldı. İncir en sağda (4.) olamaz, o hâlde incir 3. sıradadır. Armut 4. sıraya kalır.
Sağlama: Sıra üzüm, elma, incir, armut olur; üç bilgi de sağlanır.
Cevap D.`
},
{
  id: "tur-sm-127",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir bilgisayar oyununda karakterlerin yetenekleri tabloda gösterilmiştir. ✓ işareti yeteneğin var olduğunu, ✗ işareti yok olduğunu belirtir. Final bölümüne yalnızca hem uçabilen hem de ateş edebilen karakterler girebilmektedir.

**Buna göre final bölümüne hangi karakter girebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Karakter</th><th>Uçabilir</th><th>Ateş edebilir</th><th>Zırhı var</th></tr><tr><td>Kuzgun</td><td>✓</td><td>✗</td><td>✗</td></tr><tr><td>Ejder</td><td>✓</td><td>✓</td><td>✗</td></tr><tr><td>Şövalye</td><td>✗</td><td>✗</td><td>✓</td></tr><tr><td>Büyücü</td><td>✗</td><td>✓</td><td>✓</td></tr></table>`,
  secenekler: ["Ejder", "Kuzgun", "Şövalye", "Büyücü"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca bir koşula bakma: Kuzgun uçar ama ateş edemez.",
    "İki koşulu da sağlamayan karakteri seçme: Şövalye ne uçar ne ateş eder.",
    "Yalnızca bir koşula bakma: Büyücü ateş eder ama uçamaz."
  ],
  aciklama: `Tablo sorularında kuralı önce parçalara ayır: burada iki koşul var ve ikisi birlikte aranıyor.
Adım 1: "Uçabilir" sütununda ✓ olanlar Kuzgun ve Ejder'dir.
Adım 2: "Ateş edebilir" sütununda ✓ olanlar Ejder ve Büyücü'dür.
Adım 3: İki listede de bulunan karakter Ejder'dir.
Sağlama: Ejder'in satırında uçma ve ateş etme sütunlarının ikisi de ✓.
Cevap A.`
},
{
  id: "tur-sm-128",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okulda voleybol maçının yeri hava durumuna göre belirlenmektedir. Okulun kuralı şudur: "Yağmur yağarsa maç spor salonunda oynanır." Bugünkü maç bahçedeki sahada oynanmıştır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Bugün spor salonu başka bir etkinlik için kullanılmıştır.",
    "Bugün gün boyunca hiç yağmur yağmamıştır.",
    "Bugün yağmur yağmış, maç yine de bahçede oynanmıştır.",
    "Bugünkü maç, yağmur beklentisiyle bahçeye alınmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Bilgide olmayan bir neden uydurma: salonun başka bir etkinlik için kullanıldığı hiçbir yerde söylenmiyor.",
    null,
    "Kuralı yok sayma: yağmur yağsaydı maç kurala göre salonda oynanırdı, oysa sahada oynanmıştır.",
    "Tahmini kesin bilgi sanma: maçın bir beklenti yüzünden taşındığı yazılmıyor; kesin olan yalnızca yağmurun yağmadığıdır."
  ],
  aciklama: `"... ise ..." kuralında sonuç gerçekleşmediyse neden de gerçekleşmemiştir.
Adım 1: Kural: yağmur yağarsa → maç salonda oynanır.
Adım 2: Maç salonda oynanmadı, sahada oynandı.
Adım 3: Yağmur yağmış olsaydı maç salonda oynanacaktı; oynanmadığına göre bugün hiç yağmur yağmamıştır.
Sık yapılan hata: Kuralın söylemediği bir neden uydurmak ("salon başka iş için kullanıldı", "yağmur beklentisiyle taşındı" gibi).
Cevap B.`
},
{
  id: "tur-sm-129",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Okul kantininde bazı ürünlerin fiyatları tabloda verilmiştir. Kantinin kuralı şudur: "Tost ile birlikte herhangi bir içecek alan öğrenciye toplam tutardan 3 TL indirim yapılır."

**Bir tost ve bir meyve suyu alan öğrenci kaç TL öder?**`,
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Fiyat</th></tr><tr><td>Tost</td><td>20 TL</td></tr><tr><td>Ayran</td><td>5 TL</td></tr><tr><td>Meyve suyu</td><td>10 TL</td></tr></table>`,
  secenekler: ["25 TL", "27 TL", "30 TL", "33 TL"],
  dogru: 1,
  hatalar: [
    "Meyve suyu yerine ayranın fiyatını kullanma: 20 + 5 = 25 olur; oysa meyve suyu 10 TL'dir.",
    null,
    "İndirimi unutma: 20 + 10 = 30 TL, ama kurala göre bu tutardan 3 TL düşülür.",
    "İndirimi toplama ekleme: indirim tutardan düşülür, eklenmez."
  ],
  aciklama: `Kural uygulama sorularında önce tutarı bul, sonra kuralın koşulunun sağlanıp sağlanmadığına bak.
Adım 1: Tost 20 TL + meyve suyu 10 TL = 30 TL.
Adım 2: Tost ile bir içecek alındığı için indirim koşulu sağlanır.
Adım 3: 30 − 3 = 27 TL.
Sağlama: 27 TL, indirimsiz tutardan (30 TL) tam 3 TL azdır.
Cevap B.`
},
{
  id: "tur-sm-130",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Gül, Efe, Hakan ve İlke bir basketbol takımının oyuncularıdır. Dördü de farklı renkte forma giymektedir: kırmızı, mavi, sarı ve yeşil.
• Gül mavi forma giymektedir.
• Efe ne kırmızı ne de yeşil forma giymektedir.
• Hakan yeşil forma giymemektedir.

**Buna göre İlke hangi renk forma giymektedir?**`,
  gorsel: null,
  secenekler: ["Kırmızı", "Mavi", "Yeşil", "Sarı"],
  dogru: 2,
  hatalar: [
    "Hakan'ın rengini İlke'ye verme: yeşil giymeyen Hakan'a, geriye kalan kırmızı düşer.",
    "Verilen bilgiyi atlama: mavi forma Gül'ün, açıkça yazılmıştır.",
    null,
    "Efe'nin rengini İlke'ye verme: Efe kırmızı ve yeşil giymediği, mavi de Gül'de olduğu için sarı giyer."
  ],
  aciklama: `Eşleştirme sorularında kesin bilgiyi yerleştir, sonra olumsuz bilgilerle renkleri ele.
Adım 1: Gül mavi giyer.
Adım 2: Efe kırmızı ve yeşil giymez, mavi de Gül'de; Efe'ye sarı kalır.
Adım 3: Hakan yeşil giymez; mavi ve sarı alınmış olduğundan Hakan kırmızı giyer.
Adım 4: Geriye yeşil kalır, o da İlke'nindir.
Sağlama: Dört renk dört farklı kişide; üç bilgi de sağlanıyor.
Cevap C.`
},
{
  id: "tur-sm-131",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okulun gezi kuralı şöyledir: "İzin kâğıdını getiren veya velisi yanında olan öğrenci gezi otobüsüne binebilir." Bu iki koşuldan en az biri sağlanıyorsa öğrenci binebilir; ikisi de sağlanıyorsa da binebilir. Dört öğrenci otobüse binmek istemektedir.

**Buna göre aşağıdaki öğrencilerden hangisi otobüse __binemez__?**`,
  gorsel: null,
  secenekler: [
    "İzin kâğıdını getirmiş, velisi gelmemiş olan Ali",
    "İzin kâğıdını unutmuş, velisi yanında olan Berna",
    "İzin kâğıdını getirmiş, velisi de yanında olan Can",
    "İzin kâğıdını unutmuş, velisi de gelmemiş olan Deniz"
  ],
  dogru: 3,
  hatalar: [
    "\"Veya\" sözcüğünü \"ve\" okuma: koşullardan birini sağlamak yeterlidir, Ali kâğıdı getirdiği için binebilir.",
    "\"Veya\" sözcüğünü \"ve\" okuma: velisi yanında olan Berna kâğıt olmadan da binebilir.",
    "Koşulların ikisini birden sağlayanı elenmiş sanma: ikisi de sağlanıyorsa kural zaten sağlanmış olur.",
    null
  ],
  aciklama: `Kuralda "veya" ile bağlanan koşullardan en az biri sağlanırsa öğrenci binebilir; yalnızca ikisi de sağlanmazsa kural bozulur.
Adım 1: Ali kâğıdı getirmiş, birinci koşul sağlanıyor: binebilir.
Adım 2: Berna'nın velisi yanında, ikinci koşul sağlanıyor: binebilir.
Adım 3: Can iki koşulu da sağlıyor: binebilir.
Adım 4: Deniz'de koşulların ikisi de yok: binemez.
Sık yapılan hata: "Veya"yı "ve" okuyup kâğıdı da veliyi de aramak.
Cevap D.`
},
{
  id: "tur-sm-132",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okulun fen laboratuvarında bir haftalık görev çizelgesi hazırlanmıştır. Her gün bir nöbetçi öğrenci ve bir yardımcı öğrenci görev yapmaktadır.

**Buna göre salı günü yardımcı olan öğrenci hangi gün nöbetçidir?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Nöbetçi</th><th>Yardımcı</th></tr><tr><td>Pazartesi</td><td>Gül</td><td>Ece</td></tr><tr><td>Salı</td><td>Hakan</td><td>Gül</td></tr><tr><td>Çarşamba</td><td>Fırat</td><td>Hakan</td></tr><tr><td>Perşembe</td><td>Ece</td><td>Fırat</td></tr><tr><td>Cuma</td><td>Fırat</td><td>Ece</td></tr></table>`,
  secenekler: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
  dogru: 0,
  hatalar: [
    null,
    "Yardımcı olduğu günü nöbetçi olduğu gün sanma: Gül salı günü yardımcıdır, o günün nöbetçisi Hakan'dır.",
    "Satırı kaydırma: çarşamba günü nöbetçi Fırat'tır, Gül değil.",
    "Satırı kaydırma: perşembe günü nöbetçi Ece'dir, Gül değil."
  ],
  aciklama: `Çizelge sorularında önce sorulan kişiyi bul, sonra onu başka sütunda ara.
Adım 1: Salı satırında yardımcı sütununa bak: Gül.
Adım 2: Nöbetçi sütununda Gül'ü ara: yalnızca pazartesi satırında.
Sağlama: Pazartesi satırında nöbetçi gerçekten Gül.
Cevap A.`
},
{
  id: "tur-sm-133",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir spor salonunda üç dambıl vardır. Mor dambıl, turuncu dambıldan ağırdır. Yeşil dambıl da turuncu dambıldan ağırdır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Mor dambıl, yeşil dambıldan ağırdır.","Yeşil dambıl, mor dambıldan ağırdır.","Turuncu dambıl, en hafif dambıldır.","Turuncu dambıl, mor dambıldan ağırdır."],
  dogru: 2,
  hatalar: [
    "Mor ile yeşilin kendi aralarında karşılaştırılmadığını fark etmeme: ikisi yalnızca turuncuyla kıyaslanmış.",
    "Mor ile yeşilin kendi aralarında karşılaştırılmadığını fark etmeme: hangisinin ağır olduğu bilinmiyor.",
    null,
    "Yönü ters çevirme: mor dambıl turuncudan ağırdır, turuncu mordan değil."
  ],
  aciklama: `Karşılaştırma sorularında bilgiyi ok gibi düşün: iki dambılın da ağır olduğu tek dambıl turuncudur.
Adım 1: Mor > turuncu.
Adım 2: Yeşil > turuncu.
Adım 3: Turuncu hem mordan hem yeşilden hafif olduğu için en hafif olandır.
Adım 4: Mor ile yeşil birbiriyle kıyaslanmadığından hangisinin ağır olduğu bilinemez.
Sık yapılan hata: Aynı üçüncü ögeyle kıyaslanan iki ögenin kendi sırasını kestirmek.
Cevap C.`
},
{
  id: "tur-sm-134",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Sinemada yan yana dört koltuk soldan sağa 1'den 4'e kadar numaralanmıştır. Kerem, Lale, Mert ve Nur bu koltuklara birer kişi olarak oturmuştur.
• Kerem 1 numaralı koltuktadır.
• Lale, Kerem'in hemen yanında oturmamaktadır.
• Mert, Nur'un hemen solundadır.

**Buna göre Mert kaç numaralı koltuktadır?**`,
  gorsel: null,
  secenekler: ["1 numaralı koltuk", "2 numaralı koltuk", "3 numaralı koltuk", "4 numaralı koltuk"],
  dogru: 1,
  hatalar: [
    "Verilen bilgiyi atlama: 1 numaralı koltukta Kerem oturmaktadır.",
    null,
    "Mert 3, Nur 4 yerleşimini seçme: bu durumda Lale 2. koltuğa düşer ve Kerem'in hemen yanında oturmuş olur.",
    "\"Hemen solunda\" bilgisini ters yerleştirme: Mert, Nur'un solundadır, sağında değil."
  ],
  aciklama: `Yan yana oturma sorularında önce kesin yeri yerleştir, sonra "hemen" sözcüğünü taşıyan bilgiyi kutulara uygula.
Adım 1: Kerem 1. koltukta. Lale 2. koltukta olamaz (Kerem'in hemen yanı), yani Lale 3 ya da 4'tedir.
Adım 2: Mert ve Nur art arda iki koltuk tutmalıdır, Mert soldadır. Boş koltuklar 2, 3, 4'tür.
Adım 3: Mert 3, Nur 4 olursa Lale 2'ye düşer, bu olmaz. Mert 2, Nur 3 olursa Lale 4'e düşer, kurallar sağlanır.
Sağlama: Kerem, Mert, Nur, Lale; Lale Kerem'in yanında değil.
Cevap B.`
},
{
  id: "tur-sm-135",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir basketbol atış oyununda içeriden atılan sayı 2 puan, dışarıdan atılan sayı 3 puan getirmektedir. Ela'nın bu oyunda attığı sayılar tabloda verilmiştir.

**Buna göre Ela kaç puan toplamıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Atış türü</th><th>Sayı adedi</th></tr><tr><td>İçeriden</td><td>4</td></tr><tr><td>Dışarıdan</td><td>2</td></tr></table>`,
  secenekler: ["6 puan", "12 puan", "14 puan", "16 puan"],
  dogru: 2,
  hatalar: [
    "Puanlarla değil sayı adetleriyle toplama: 4 + 2 = 6 yalnızca atış sayısıdır.",
    "Bütün sayıları 2 puan sayma: 6 × 2 = 12 olur; oysa dışarıdan atılan sayı 3 puandır.",
    null,
    "Puan değerlerini ters kullanma: 4 × 3 + 2 × 2 = 16 olur; içeriden 2, dışarıdan 3 puandır."
  ],
  aciklama: `Puanlama sorularında her türün puanını ayrı hesapla, sonra topla.
Adım 1: İçeriden 4 sayı × 2 puan = 8 puan.
Adım 2: Dışarıdan 2 sayı × 3 puan = 6 puan.
Adım 3: 8 + 6 = 14 puan.
Sağlama: Puan değerleri tablodaki sayılarla doğru eşleşti: içeriden 2, dışarıdan 3.
Cevap C.`
},
{
  id: "tur-sm-136",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir spor kulübündeki bütün öğrenciler futbol ya da basketbol oynamaktadır. Aylin bu kulübün öğrencisidir ve futbol oynamamaktadır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Aylin, futbol oynamayıp basketbol oynayan öğrencilerdendir.",
    "Aylin, yalnızca voleybol oynayan öğrencilerdendir.",
    "Aylin, hiçbir sporu yapmayan öğrencilerdendir.",
    "Aylin, hem futbol hem basketbol oynayan öğrencilerdendir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kulübün kuralını yok sayma: kulüpteki herkes futbol ya da basketbol oynar, voleybol bu kurala girmez.",
    "Kulübün kuralını yok sayma: bütün öğrenciler iki sporun en az birini yapar.",
    "Verilen bilgiyle çelişme: Aylin'in futbol oynamadığı açıkça yazılıdır."
  ],
  aciklama: `"Ya da" ile verilen iki seçenekten biri elenirse öteki kalır.
Adım 1: Kulüpteki herkes futbol ya da basketbol oynuyor.
Adım 2: Aylin kulüpte ve futbol oynamıyor.
Adım 3: Geriye basketbol kalır; Aylin basketbol oynar.
Sağlama: Aylin "futbol ya da basketbol" koşulunu basketbolla sağlıyor.
Cevap A.`
},
{
  id: "tur-sm-137",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir müzenin giriş ücretleri yaş aralıklarına göre tabloda verilmiştir. Selin 13, kardeşi Kemal 7, kuzenleri Poyraz ise 5 yaşındadır.

**Buna göre üçü birlikte müzeye girerse toplam kaç TL öder?**`,
  gorsel: `<table class="tablo"><tr><th>Yaş aralığı</th><th>Ücret</th></tr><tr><td>0 – 6 yaş</td><td>Ücretsiz</td></tr><tr><td>7 – 12 yaş</td><td>10 TL</td></tr><tr><td>13 yaş ve üzeri</td><td>20 TL</td></tr></table>`,
  secenekler: ["30 TL", "40 TL", "50 TL", "60 TL"],
  dogru: 0,
  hatalar: [
    null,
    "Sınır yaşı yanlış aralığa koyma: 7 yaş, 7 – 12 aralığındadır ve 10 TL öder; 20 + 20 = 40 olur.",
    "Ücretsiz aralığı atlama: 5 yaşındaki Poyraz ücretsizdir; 20 + 20 + 10 = 50 olur.",
    "Tablodaki aralıkları kullanmama: üç kişiyi de tam ücretle sayarak 3 × 20 = 60 bulunur."
  ],
  aciklama: `Aralık tablolarında her kişinin yaşına uyan satırı ayrı ayrı bul; sınırdaki yaşlara dikkat et.
Adım 1: Selin 13 yaşında: "13 yaş ve üzeri" satırı, 20 TL.
Adım 2: Kemal 7 yaşında: "7 – 12 yaş" satırı, 10 TL.
Adım 3: Poyraz 5 yaşında: "0 – 6 yaş" satırı, ücretsiz.
Adım 4: 20 + 10 + 0 = 30 TL.
Cevap A.`
},
{
  id: "tur-sm-138",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir voleybol takımında Pınar, Rıza'dan uzundur. Rıza, Sevgi'den uzundur. Tamer de Pınar'dan uzundur.

**Buna göre takımın en kısa oyuncusu kimdir?**`,
  gorsel: null,
  secenekler: ["Pınar", "Rıza", "Tamer", "Sevgi"],
  dogru: 3,
  hatalar: [
    "Orta sıradaki birini en kısa sanma: Pınar, Rıza ve Sevgi'den uzundur.",
    "Karşılaştırmayı yarım bırakma: Rıza, Pınar'dan kısadır ama Sevgi'den uzundur.",
    "\"Uzundur\" yönünü ters okuma: Tamer, Pınar'dan uzun olduğu için en uzundur.",
    null
  ],
  aciklama: `Karşılaştırma zincirinde bilgileri tek bir sıraya diz.
Adım 1: Pınar > Rıza ve Rıza > Sevgi, yani Pınar > Rıza > Sevgi.
Adım 2: Tamer > Pınar, zincirin başına eklenir: Tamer > Pınar > Rıza > Sevgi.
Adım 3: Sıranın sonundaki Sevgi en kısadır.
Sağlama: Üç bilginin üçü de bu sıralamada sağlanır.
Cevap D.`
},
{
  id: "tur-sm-139",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir gençlik merkezinde dört öğrencinin katıldığı kurslar tabloda gösterilmiştir. ✓ işareti kursa katıldığını, ✗ işareti katılmadığını belirtir.

**Buna göre yalnızca müzik kursuna katılan öğrenci kimdir?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Resim</th><th>Müzik</th><th>Spor</th></tr><tr><td>Alp</td><td>✓</td><td>✗</td><td>✓</td></tr><tr><td>Bade</td><td>✗</td><td>✓</td><td>✗</td></tr><tr><td>Cenk</td><td>✓</td><td>✓</td><td>✗</td></tr><tr><td>Derya</td><td>✗</td><td>✗</td><td>✓</td></tr></table>`,
  secenekler: ["Alp", "Bade", "Cenk", "Derya"],
  dogru: 1,
  hatalar: [
    "Müzik sütununu denetlememe: Alp müzik kursuna katılmamıştır.",
    null,
    "\"Yalnızca\" sözcüğünü atlama: Cenk müziğe katılır ama resme de katılır.",
    "Müzik sütununu denetlememe: Derya yalnızca spor kursuna katılmıştır."
  ],
  aciklama: `"Yalnızca" demek, o kursta ✓ olup diğer iki kursta ✗ olmak demektir.
Adım 1: Müzik sütununda ✓ olanlar Bade ve Cenk'tir.
Adım 2: Cenk'in resim sütununda da ✓ var, yani yalnızca müzik değil.
Adım 3: Bade'nin resim ve spor sütunları ✗'dir.
Sağlama: Bade'nin satırında tek ✓ müzik sütunundadır.
Cevap B.`
},
{
  id: "tur-sm-140",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okul kütüphanesinin kuralı şudur: "Elinde süresi geçmiş kitap bulunan öğrenci yeni kitap ödünç alamaz." Burak bugün kütüphaneden yeni bir kitap ödünç almıştır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Burak'ın elinde hiç kitap yoktur.",
    "Burak bugün iki kitap ödünç almıştır.",
    "Burak bütün kitaplarını her zaman erken iade etmiştir.",
    "Burak'ın elinde süresi geçmiş hiçbir kitap yoktur."
  ],
  dogru: 3,
  hatalar: [
    "Bilgiyi gereğinden fazla genişletme: Burak'ın süresi geçmemiş başka bir kitabı olabilir.",
    "Bilgide olmayan sayıyı uydurma: Burak'ın bugün yalnızca yeni bir kitap aldığı yazılıdır.",
    "Aşırı genelleme: kurala göre yalnızca şu anda süresi geçmiş kitabı olmaması gerekir, geçmişteki iadeler hakkında bir şey söylenmez.",
    null
  ],
  aciklama: `Kural "A varsa B yoktur" biçimindeyse, B olduğunda A'nın olmadığı anlaşılır.
Adım 1: Kural: süresi geçmiş kitap varsa → ödünç alamaz.
Adım 2: Burak ödünç aldı, yani ödünç alamama durumu gerçekleşmedi.
Adım 3: O hâlde süresi geçmiş kitabı olamaz.
Sık yapılan hata: Kuralın söylediğinden fazlasını çıkarmak ("hiç kitabı yoktur", "her zaman erken getirmiştir").
Cevap D.`
},
{
  id: "tur-sm-141",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `8. sınıfların bir günlük gezi programı tabloda verilmiştir. Program, saatlerine göre sırayla uygulanmıştır.

**Buna göre öğle yemeğinden hemen önce yapılan etkinlik hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Saat</th><th>Etkinlik</th></tr><tr><td>09.00</td><td>Okulda buluşma</td></tr><tr><td>10.30</td><td>Müze gezisi</td></tr><tr><td>12.00</td><td>Öğle yemeği</td></tr><tr><td>13.30</td><td>Botanik park</td></tr><tr><td>15.00</td><td>Dönüş</td></tr></table>`,
  secenekler: ["Okulda buluşma", "Botanik park", "Müze gezisi", "Dönüş"],
  dogru: 2,
  hatalar: [
    "Hemen önceki etkinlikle ilk etkinliği karıştırma: okulda buluşma 09.00'dadır, müze gezisi ile yemek arasında etkinlik yoktur.",
    "\"Önce\" ile \"sonra\" yönünü karıştırma: botanik park öğle yemeğinden sonradır.",
    null,
    "\"Önce\" ile \"sonra\" yönünü karıştırma: dönüş en son etkinliktir."
  ],
  aciklama: `Çizelgede zaman yukarıdan aşağıya akar; "hemen önce" bir satır yukarıdaki demektir.
Adım 1: Öğle yemeği 12.00 satırındadır.
Adım 2: Bir satır yukarıda 10.30'daki müze gezisi vardır.
Sağlama: Müze gezisi 10.30'da yapılmış, ondan sonra 12.00'ye kadar başka etkinlik yok.
Cevap C.`
},
{
  id: "tur-sm-142",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir asansörde en fazla 8 kişi taşınabilmektedir. Asansörde şu anda 5 kişi bulunmaktadır.

**Buna göre asansöre en fazla kaç kişi daha binebilir?**`,
  gorsel: null,
  secenekler: ["3 kişi", "5 kişi", "8 kişi", "13 kişi"],
  dogru: 0,
  hatalar: [
    null,
    "Asansördeki kişi sayısını cevap sanma: 5 kişi zaten içeridedir.",
    "Kapasiteyi cevap sanma: 8, toplam kapasitedir; içerideki 5 kişi de bu sayıya dahildir.",
    "Sayıları toplama: 5 + 8 = 13 olur, oysa kapasiteden içeridekiler düşülmelidir."
  ],
  aciklama: `"En fazla" bir üst sınır koyar: sayı sınıra eşit olabilir, ondan büyük olamaz.
Adım 1: Kapasite 8 kişidir.
Adım 2: İçeride 5 kişi var.
Adım 3: 8 − 5 = 3 kişi daha binebilir.
Sağlama: 5 + 3 = 8, sınırı aşmıyor.
Cevap A.`
},
{
  id: "tur-sm-143",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Selma, Tuna ve Ümit sınıf görevlerini paylaşmıştır: tahta silme, çiçek sulama ve pano düzenleme. Üçünün görevi birbirinden farklıdır ve herkes yalnızca bir görev almıştır.
• Tuna pano düzenlemektedir.
• Selma çiçek sulamamaktadır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Ümit pano düzenlemektedir.",
    "Tuna çiçek sulamaktadır.",
    "Ümit tahta silmektedir.",
    "Selma tahta silmektedir."
  ],
  dogru: 3,
  hatalar: [
    "Verilen bilgiyi atlama: pano düzenleyen Tuna'dır, görevler farklı olduğu için Ümit'e panodan başka görev kalır.",
    "Verilen bilgiyi atlama: Tuna zaten pano düzenlemektedir, aynı kişi iki görev almaz.",
    "Görevleri ters dağıtma: Selma çiçek sulamadığı ve pano da Tuna'da olduğu için tahta silme Selma'ya, çiçek sulama Ümit'e düşer.",
    null
  ],
  aciklama: `Eşleştirmede kesin bilgiyi yerleştir, sonra ✗ koyduğun görevleri ele.
Adım 1: Tuna panoyu düzenler.
Adım 2: Geriye tahta silme ve çiçek sulama kaldı; bu iki görevi Selma ile Ümit paylaşır.
Adım 3: Selma çiçek sulamadığına göre Selma tahta siler, Ümit çiçek sular.
Sağlama: Üç görev üç farklı kişide, iki bilgi de sağlanıyor; yalnızca "Selma tahta silmektedir" ifadesi bu dağılımla uyumludur.
Cevap D.`
},
{
  id: "tur-sm-144",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir sınıfta en sevilen meyveyi belirlemek için oylama yapılmıştır. Her öğrenci yalnızca bir meyveye oy vermiştir. Sonuçlar tabloda verilmiştir.

**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Meyve</th><th>Oy sayısı</th></tr><tr><td>Elma</td><td>7</td></tr><tr><td>Muz</td><td>9</td></tr><tr><td>Çilek</td><td>6</td></tr><tr><td>Üzüm</td><td>8</td></tr></table>`,
  secenekler: [
    "Üzüm, elmadan az oy almıştır.",
    "Çilek, en çok oy alan meyvedir.",
    "Muz ile üzümün oy toplamı 17'dir.",
    "Elma ile çileğin oy toplamı 12'dir."
  ],
  dogru: 2,
  hatalar: [
    "Oy sayılarını ters karşılaştırma: üzüm 8, elma 7 oy almıştır.",
    "En çok ile en az sözcüklerini karıştırma: çilek 6 oyla en az oy alandır.",
    null,
    "Toplamı yanlış yapma: 7 + 6 = 13'tür, 12 değil."
  ],
  aciklama: `Tablo sorularında her seçeneği tablodaki sayıyla tek tek sına.
Adım 1: Üzüm 8, elma 7: üzüm elmadan fazla oy almıştır, A yanlış.
Adım 2: En çok oyu muz (9) almıştır, çilek (6) en azı, B yanlış.
Adım 3: Muz 9 + üzüm 8 = 17, C doğru.
Adım 4: Elma 7 + çilek 6 = 13, D yanlış.
Cevap C.`
},
{
  id: "tur-sm-145",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Bir kitapçının kampanyası şöyledir: "Satın alınan her 3 kitap için 1 kitap hediye verilir." (Hediye kitaplar kampanya hesabına katılmaz.) Ceyda bu kampanyadan 9 kitap satın almıştır.

**Buna göre Ceyda toplam kaç kitapla ayrılmıştır?**`,
  gorsel: null,
  secenekler: ["9 kitap", "10 kitap", "12 kitap", "18 kitap"],
  dogru: 2,
  hatalar: [
    "Hediyeyi unutma: satın alınan 9 kitabın üzerine hediyeler eklenir.",
    "Kuralı yalnızca bir kez uygulama: 9 kitapta üç ayrı \"3 kitap\" grubu vardır.",
    null,
    "Her kitaba hediye verildiğini sanma: hediye, her 3 kitap için 1 tanedir."
  ],
  aciklama: `"Her 3 kitap için 1" demek, 3'lük grup sayısı kadar hediye demektir.
Adım 1: 9 kitapta kaç tane 3'lük grup var? 9 ÷ 3 = 3 grup.
Adım 2: Her grup için 1 hediye: 3 kitap hediye.
Adım 3: Toplam 9 + 3 = 12 kitap.
Sağlama: Hediye kitaplar kampanya hesabına katılmadığı için 12 sayısı değişmez.
Cevap C.`
},
{
  id: "tur-sm-146",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Üç arkadaş bir bisiklet turunu farklı sıralarla bitirmiştir. Ali, Bora'dan önce; Bora da Cem'den önce bitirmiştir.

**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "Cem birinci bitirmiştir.",
    "Bora ikinci bitirmiştir.",
    "Ali birinci bitirmiştir.",
    "Cem üçüncü bitirmiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Olabilen durumu olamaz sanma: Ali, Bora, Cem sırasında Bora ikinci bitirir.",
    "Olabilen durumu olamaz sanma: Ali, Bora'dan önce bitirdiğine göre birinci olabilir.",
    "Olabilen durumu olamaz sanma: Cem, Bora'dan sonra bitirdiğine göre sonuncu olabilir."
  ],
  aciklama: `"Olamaz" sorusunda hiçbir durumda gerçekleşmeyen ifadeyi ararsın.
Adım 1: Bilgiler: Ali < Bora < Cem (sıra numarası küçük olan önce bitirir).
Adım 2: Üç kişi için tek diziliş çıkar: Ali, Bora, Cem.
Adım 3: Cem hem Ali'den hem Bora'dan sonra bitirdiği için birinci olamaz.
Sağlama: Diğer üç ifade bu dizilişte gerçekleşir.
Cevap A.`
},
{
  id: "tur-sm-147",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okulda sınav puanlarına göre verilen değerlendirme tabloda gösterilmiştir. Ece 59, Fatih 60, Gül 80, Hasan 39 puan almıştır.

**Buna göre hangi öğrenci "İyi" değerlendirmesini almıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Puan aralığı</th><th>Değerlendirme</th></tr><tr><td>0 – 39</td><td>Zayıf</td></tr><tr><td>40 – 59</td><td>Orta</td></tr><tr><td>60 – 79</td><td>İyi</td></tr><tr><td>80 – 100</td><td>Çok iyi</td></tr></table>`,
  secenekler: ["Ece", "Fatih", "Gül", "Hasan"],
  dogru: 1,
  hatalar: [
    "Sınırın bir altını sınıra dahil etme: 59, \"Orta\" aralığındadır.",
    null,
    "Sınırı bir üst aralığa koyma: 80, \"Çok iyi\" aralığındadır.",
    "Aralıkları karıştırma: 39 puan \"Zayıf\" aralığındadır."
  ],
  aciklama: `Aralık tablolarında sınırdaki sayının hangi satıra girdiğine dikkat et.
Adım 1: "İyi" aralığı 60 – 79'dur; 60 ve 79 bu aralığa dahildir.
Adım 2: Ece 59 → Orta, Fatih 60 → İyi, Gül 80 → Çok iyi, Hasan 39 → Zayıf.
Sağlama: Yalnızca Fatih'in puanı 60 – 79 arasındadır.
Cevap B.`
},
{
  id: "tur-sm-148",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 1,
  soru: `Spor salonunu pazartesiden perşembeye kadar her gün bir sınıf kullanacaktır. 8/A, 8/B, 8/C ve 8/D sınıflarının her biri farklı bir günde salona girecektir.
• 8/A pazartesi günü kullanacaktır.
• 8/B, 8/A'dan bir gün sonra kullanacaktır.
• 8/C perşembe günü kullanmayacaktır.

**Buna göre 8/D hangi gün kullanacaktır?**`,
  gorsel: null,
  secenekler: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
  dogru: 3,
  hatalar: [
    "Verilen bilgiyi atlama: pazartesi günü 8/A kullanmaktadır.",
    "\"Bir gün sonra\" bilgisini atlama: salı günü 8/B kullanmaktadır.",
    "8/C'nin gününü 8/D'ye verme: 8/C perşembe kullanmadığı için çarşambayı alır.",
    null
  ],
  aciklama: `Gün sıralaması sorularında günleri yan yana yaz ve bilgileri sırayla yerleştir.
Adım 1: Pazartesi 8/A.
Adım 2: 8/B, 8/A'dan bir gün sonra, yani salı.
Adım 3: Geriye çarşamba ve perşembe kaldı. 8/C perşembe kullanmayacağına göre çarşamba kullanır.
Adım 4: 8/D'ye perşembe kalır.
Sağlama: Pzt A, Salı B, Çarşamba C, Perşembe D; üç bilgi de sağlanıyor.
Cevap D.`
},
{
  id: "tur-sm-149",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 1,
  soru: `Bir spor salonunda şu kural uygulanmaktadır: "Bir ayda en az 8 gün salona gelen üyeye 'Düzenli üye' rozeti verilir." Dört üyenin bu ay salona geldiği gün sayısı tabloda verilmiştir.

**Buna göre rozeti hangi üyeler alır?**`,
  gorsel: `<table class="tablo"><tr><th>Üye</th><th>Geldiği gün sayısı</th></tr><tr><td>Ali</td><td>7</td></tr><tr><td>Berna</td><td>8</td></tr><tr><td>Cem</td><td>6</td></tr><tr><td>Deniz</td><td>9</td></tr></table>`,
  secenekler: [
    "Yalnızca Deniz",
    "Ali ve Deniz",
    "Yalnızca Berna ve Deniz",
    "Ali, Berna ve Deniz"
  ],
  dogru: 2,
  hatalar: [
    "\"En az 8\" ifadesinin 8'i de içerdiğini unutma: Berna tam 8 gün gelmiştir ve rozet alır.",
    "7 gün gelen Ali'yi dahil etme: 7, 8'den azdır.",
    null,
    "Sınırı aşağı çekme: Ali 7 gün gelmiştir, en az 8 gün koşulunu sağlamaz."
  ],
  aciklama: `"En az 8" demek 8 ve 8'den büyük sayılar demektir; 8 sınırın kendisidir ve dahildir.
Adım 1: Ali 7 → 8'den az, rozet yok.
Adım 2: Berna 8 → sınır, rozet var.
Adım 3: Cem 6 → rozet yok.
Adım 4: Deniz 9 → rozet var.
Sağlama: Rozet alanlar Berna (8) ve Deniz (9).
Cevap C.`
},
{
  id: "tur-sm-150",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Okulun bahçesindeki çiçekleri pazartesiden perşembeye kadar her gün bir öğrenci sulayacaktır. Ayşe, Bora, Cansu ve Doruk'un her biri farklı bir günde sulama yapacaktır.
• Cansu, Doruk'tan önce sulayacaktır.
• Bora salı günü sulayacaktır.
• Ayşe çarşamba günü sulamayacaktır.

**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "Doruk perşembe günü sulayacaktır.",
    "Cansu perşembe günü sulayacaktır.",
    "Ayşe pazartesi günü sulayacaktır.",
    "Doruk çarşamba günü sulayacaktır."
  ],
  dogru: 1,
  hatalar: [
    "Olabilen durumu olamaz sanma: Doruk, Cansu'dan sonra olduğu için son gün sulayabilir (Ayşe pazartesi, Bora salı, Cansu çarşamba, Doruk perşembe).",
    null,
    "Olabilen durumu olamaz sanma: Ayşe pazartesi sulayabilir; o zaman Cansu çarşamba, Doruk perşembe sular.",
    "Olabilen durumu olamaz sanma: Cansu pazartesi, Doruk çarşamba, Ayşe perşembe sularsa üç bilgi de sağlanır."
  ],
  aciklama: `"Olamaz" sorusunda hiçbir geçerli durumda gerçekleşmeyen ifadeyi ararsın; geçerli durumları önce yaz.
Adım 1: Bora salı günüdür; geriye pazartesi, çarşamba ve perşembe kaldı. Ayşe çarşamba sulamadığına göre Ayşe pazartesi ya da perşembe sular.
Adım 2: Ayşe pazartesi sularsa Cansu çarşamba, Doruk perşembe sular. Ayşe perşembe sularsa Cansu pazartesi, Doruk çarşamba sular. Başka geçerli durum yoktur.
Adım 3: Cansu iki durumda da perşembe sulamaz; zaten Doruk'tan önce sulayan kişi perşembe günü (son gün) sulayamaz.
Sağlama: Öteki üç ifade bu iki durumdan birinde gerçekleşir.
Cevap B.`
},
{
  id: "tur-sm-151",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir spor salonunun giriş ücretleri tabloda verilmiştir. Salonun kuralı şudur: "14 yaşından küçük olanlar, kendi ücretinin yarısını öder."

**Üye olmayan 12 yaşındaki Hande ile üye olan 15 yaşındaki ağabeyi Murat salona birlikte girerse toplam kaç TL öder?**`,
  gorsel: `<table class="tablo"><tr><th>Durum</th><th>Giriş ücreti</th></tr><tr><td>Üye</td><td>30 TL</td></tr><tr><td>Üye değil</td><td>50 TL</td></tr></table>`,
  secenekler: ["40 TL", "45 TL", "55 TL", "80 TL"],
  dogru: 2,
  hatalar: [
    "Yarım ücret kuralını Murat'a da uygulama: Murat 15 yaşındadır, tam öder (25 + 15 = 40 olur).",
    "Hande'nin ücretini üye fiyatından hesaplama: Hande üye değildir, yarım ücreti 25 TL'dir (15 + 30 = 45 olur).",
    null,
    "Yarım ücret kuralını hiç uygulamama: 50 + 30 = 80 olur."
  ],
  aciklama: `Önce her kişinin hangi satıra girdiğini belirle, sonra ek kuralı uygula.
Adım 1: Hande üye değil: 50 TL. 12 yaşında olduğu için 14'ten küçüktür, yarısını öder: 25 TL.
Adım 2: Murat üye: 30 TL. 15 yaşında olduğu için indirim yok, 30 TL öder.
Adım 3: 25 + 30 = 55 TL.
Sağlama: Yarım ücret kuralı yalnızca Hande'ye uygulandı.
Cevap C.`
},
{
  id: "tur-sm-152",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Deniz, Emre ve Fulya havuzda bir yüzme müsabakasını farklı sıralarla bitirmiştir. Emre, Deniz'den önce bitirmiştir. Fulya birinci bitirmemiştir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Deniz ikinci bitirmiştir.",
    "Emre birinci bitirmiştir.",
    "Fulya üçüncü bitirmiştir.",
    "Fulya, Deniz'den önce bitirmiştir."
  ],
  dogru: 1,
  hatalar: [
    "Tek bir diziliş bulup durma: Emre, Fulya, Deniz sırasında Deniz üçüncü bitirir.",
    null,
    "Tek bir diziliş bulup durma: Emre, Fulya, Deniz sırasında Fulya ikinci bitirir.",
    "Tek bir diziliş bulup durma: Emre, Deniz, Fulya sırasında Fulya, Deniz'den sonra bitirir."
  ],
  aciklama: `"Kesinlikle doğru" ifade, kurallara uyan bütün dizilişlerde doğru olandır; önce dizilişleri yaz.
Adım 1: Fulya birinci değil, o hâlde birinci Emre ya da Deniz'dir. Emre, Deniz'den önce bitirdiği için Deniz birinci olamaz; birinci Emre'dir.
Adım 2: Geriye Deniz ile Fulya kalır, ikisi iki biçimde sıralanabilir: Emre, Deniz, Fulya ya da Emre, Fulya, Deniz.
Adım 3: İki dizilişte de Emre birincidir; öteki üç ifade yalnızca birinde doğrudur.
Sık yapılan hata: Bulduğun ilk dizilişe bakıp "kesinlikle" şıkkını işaretlemek.
Cevap B.`
},
{
  id: "tur-sm-153",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Nur, Oğuz, Pelin ve Rıza'nın her biri farklı bir kursa gitmektedir: resim, satranç, tiyatro ve yüzme.
• Rıza yüzme kursuna gitmektedir.
• Oğuz ne tiyatro ne de resim kursuna gitmektedir.
• Pelin resim kursuna gitmemektedir.

**Buna göre Nur hangi kursa gitmektedir?**`,
  gorsel: null,
  secenekler: ["Resim", "Satranç", "Tiyatro", "Yüzme"],
  dogru: 0,
  hatalar: [
    null,
    "Oğuz'un kursunu Nur'a verme: Oğuz ne tiyatro ne resim ne de yüzme kursuna gittiğinden satranca gider.",
    "Pelin'in kursunu Nur'a verme: Pelin'e satranç ve yüzme dolu olunca tiyatro kalır.",
    "Verilen bilgiyi atlama: yüzme kursuna Rıza gitmektedir."
  ],
  aciklama: `Eşleştirme sorularında kesin bilgiden başla, ✗ koyduğun hücrelerle kalanları ele.
Adım 1: Rıza yüzme.
Adım 2: Oğuz tiyatro ve resim değil, yüzme de Rıza'da; Oğuz'a satranç kalır.
Adım 3: Pelin resim değil; satranç ve yüzme dolu; Pelin tiyatroya gider.
Adım 4: Geriye resim kalır, o da Nur'undur.
Sağlama: Dört kurs dört farklı kişide, üç bilgi de sağlanır.
Cevap A.`
},
{
  id: "tur-sm-154",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Okul spor deposunda malzeme ödünç verme kuralları şunlardır:
• Bir öğrenci aynı anda en fazla 2 malzeme alabilir.
• Raket yalnızca 7. ve 8. sınıf öğrencilerine verilir.
• Elinde süresi geçmiş malzeme olan öğrenci yeni malzeme alamaz.
Dört öğrencinin durumu ve istedikleri malzeme tabloda verilmiştir.

**Buna göre hangi öğrenci istediği malzemeyi alabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Sınıf</th><th>Elindeki malzeme sayısı</th><th>Süresi geçmiş malzeme</th><th>İstediği</th></tr><tr><td>Ada</td><td>6</td><td>1</td><td>Yok</td><td>Raket</td></tr><tr><td>Berk</td><td>8</td><td>2</td><td>Yok</td><td>Top</td></tr><tr><td>Defne</td><td>7</td><td>1</td><td>Var</td><td>Top</td></tr><tr><td>Eren</td><td>8</td><td>1</td><td>Yok</td><td>Raket</td></tr></table>`,
  secenekler: ["Ada", "Berk", "Defne", "Eren"],
  dogru: 3,
  hatalar: [
    "Sınıf kuralını atlama: Ada 6. sınıftadır, raket alamaz.",
    "En fazla 2 kuralını atlama: Berk'in elinde zaten 2 malzeme vardır, üçüncüyü alamaz.",
    "Süresi geçmiş malzeme kuralını atlama: Defne'nin süresi geçmiş malzemesi vardır, yeni malzeme alamaz.",
    null
  ],
  aciklama: `Birden çok kural varsa her öğrenciyi her kuralla sırayla sına; tek bir kural bozulsa bile istek reddedilir.
Adım 1: Ada raket istiyor ama 6. sınıf: 2. kural bozulur.
Adım 2: Berk'in elinde 2 malzeme var: 1. kural bozulur.
Adım 3: Defne'nin süresi geçmiş malzemesi var: 3. kural bozulur.
Adım 4: Eren 8. sınıf, elinde 1 malzeme var, süresi geçmiş malzeme yok: üç kural da sağlanır.
Sık yapılan hata: Kuralların yalnızca birini denetlemek.
Cevap D.`
},
{
  id: "tur-sm-155",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Kırmızı, mavi, yeşil ve sarı kapaklı dört kavanoz bir rafa soldan sağa art arda dizilmiştir.
• Kırmızı kapaklı kavanoz, mavi kapaklı kavanozdan öncedir (solundadır).
• Yeşil kapaklı kavanoz en sağda değildir.
• Sarı kapaklı kavanoz en solda değildir.

**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "Mavi kapaklı kavanoz en sağdadır.",
    "Yeşil kapaklı kavanoz en soldadır.",
    "Kırmızı kapaklı kavanoz en sağdadır.",
    "Sarı kapaklı kavanoz en sağdadır."
  ],
  dogru: 2,
  hatalar: [
    "Olabilen durumu olamaz sanma: kırmızı, yeşil, sarı, mavi dizilişinde mavi en sağdadır.",
    "Olabilen durumu olamaz sanma: yeşil, kırmızı, mavi, sarı dizilişinde yeşil en soldadır.",
    null,
    "Olabilen durumu olamaz sanma: kırmızı, yeşil, mavi, sarı dizilişinde sarı en sağdadır."
  ],
  aciklama: `"Olamaz" sorusunda hiçbir geçerli dizilişte gerçekleşmeyen ifadeyi ararsın; her şıkkı gerçekleştiren bir diziliş kurmayı dene.
Adım 1: Kırmızı, maviden önce olduğuna göre mavinin solunda en az bir kavanoz (kırmızı) vardır. Kırmızı en sağda olsaydı mavi onun sağında kalmak zorunda olurdu; bu mümkün değildir.
Adım 2: Öteki şıkları gerçekleştiren dizilişler: kırmızı, yeşil, sarı, mavi (mavi en sağda); yeşil, kırmızı, mavi, sarı (yeşil en solda); kırmızı, yeşil, mavi, sarı (sarı en sağda).
Sağlama: Bu üç dizilişte üç kural da sağlanır; kırmızının en sağda olması hiçbir dizilişte gerçekleşmez.
Cevap C.`
},
{
  id: "tur-sm-156",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir okulun dört servis hattının kalkış ve okula varış saatleri tabloda verilmiştir. Dersler 08.15'te başlamaktadır. Ceyda evden en erken 07.25'te çıkabilmekte, servis ise kendi kalkış saatinde Ceyda'nın durağında bulunmaktadır. Ceyda derse geç kalmak istememektedir.

**Buna göre Ceyda hangi hattı kullanmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Hat</th><th>Kalkış</th><th>Okula varış</th></tr><tr><td>A hattı</td><td>07.10</td><td>07.50</td></tr><tr><td>B hattı</td><td>07.30</td><td>08.05</td></tr><tr><td>C hattı</td><td>07.20</td><td>08.10</td></tr><tr><td>D hattı</td><td>07.40</td><td>08.25</td></tr></table>`,
  secenekler: ["A hattı", "B hattı", "C hattı", "D hattı"],
  dogru: 1,
  hatalar: [
    "Kalkış koşulunu atlama: A hattı 07.10'da kalkar, Ceyda henüz evden çıkamamıştır.",
    null,
    "Kalkış koşulunu atlama: C hattı 07.20'de kalkar, Ceyda 07.25'ten önce çıkamaz.",
    "Varış koşulunu atlama: D hattı okula 08.25'te varır, ders 08.15'te başlamıştır."
  ],
  aciklama: `İki koşul birlikte aranır: kalkış 07.25'ten önce olmamalı ve varış 08.15'ten sonra olmamalı.
Adım 1: Kalkış saati 07.25'ten sonra olanlar: B (07.30) ve D (07.40).
Adım 2: Varış saati 08.15'i geçmeyenler: A (07.50), B (08.05), C (08.10).
Adım 3: İki listede ortak olan tek hat B'dir.
Sağlama: B hattı 07.30'da kalkar, 08.05'te varır; iki koşul da sağlanır.
Cevap B.`
},
{
  id: "tur-sm-157",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir yıldız gözlem kampında şu kurallar uygulanmaktadır:
• Hava açıksa gece teleskopla gözlem yapılır.
• Gece teleskopla gözlem yapılırsa ertesi sabah kahvaltı geç saatte yapılır.
Bu sabah kahvaltı erken saatte yapılmıştır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Dün gece teleskopla gözlem yapılmış, hava da açık olmuştur.",
    "Dün gece hava açıktı, ancak teleskopla gözlem yapılmamıştır.",
    "Dün gece gökyüzünde hiç yıldız görülmemiş, gözlem yapılmamıştır.",
    "Dün gece hava açık değildi, teleskopla gözlem de yapılmamıştır."
  ],
  dogru: 3,
  hatalar: [
    "Zinciri ters okuma: gözlem yapılsaydı kahvaltı geç yapılırdı; kahvaltı erkendir.",
    "İlk kuralı unutma: hava açıksa gözlem yapılır, yani hava açıkken gözlem yapılmamış olamaz.",
    "Yarım doğru: gözlemin yapılmadığı doğrudur, ama havanın açık olmaması gökyüzünde hiç yıldız görülmediği anlamına gelmez.",
    null
  ],
  aciklama: `Art arda "ise" kurallarında sonuçtan geriye doğru giderek nedeni bulursun.
Adım 1: Kahvaltı erken yapıldı, yani geç yapılmadı. İkinci kurala göre gözlem yapılmamıştır.
Adım 2: Hava açık olsaydı birinci kurala göre gözlem yapılırdı; yapılmadığına göre hava açık değildi.
Sık yapılan hata: "Yıldız hiç görülmedi" gibi kuralların söylemediği bir sonuç eklemek.
Cevap D.`
},
{
  id: "tur-sm-158",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Ela, Fırat ve Gül konser bileti için tek sıra hâlinde kuyruğa girecektir. Ela ile Fırat birbirinin hemen yanında duracaktır.

**Buna göre üç arkadaş kaç farklı biçimde sıraya girebilir?**`,
  gorsel: null,
  secenekler: ["2 farklı biçimde", "4 farklı biçimde", "5 farklı biçimde", "6 farklı biçimde"],
  dogru: 1,
  hatalar: [
    "Yan yana duran ikilinin kendi içinde yer değiştirebileceğini unutma: Ela, Fırat ve Fırat, Ela ayrı sıralamalardır.",
    null,
    "Sıraları düzenli yazmadan sayma: eksik ya da fazla sayım yapılır.",
    "Yan yana olma koşulunu yok sayma: 3 kişi 6 biçimde sıralanır ama ikisinde Ela ile Fırat'ın arasına Gül girer."
  ],
  aciklama: `Yan yana duracak iki kişiyi tek bir kutu gibi düşün, sonra kutunun içindeki sıralamayı da say.
Adım 1: Sıralamaları düzenli yaz: Ela-Fırat-Gül, Fırat-Ela-Gül, Gül-Ela-Fırat, Gül-Fırat-Ela.
Adım 2: Ela-Gül-Fırat ve Fırat-Gül-Ela dizilişlerinde Gül araya girdiği için bu iki sıralama kurala uymaz.
Adım 3: Kurala uyan sıralama sayısı 4'tür.
Sağlama: Kutu yöntemiyle: iki birim (kutu ve Gül) 2 biçimde dizilir, kutunun içi 2 biçimde dizilir: 2 × 2 = 4.
Cevap B.`
},
{
  id: "tur-sm-159",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir turnuvada dört takım 4'er maç yapmıştır. Galibiyet 3 puan, beraberlik 1 puan, mağlubiyet 0 puan getirmektedir. Takımların sonuçları tabloda verilmiştir.

**Buna göre hangi iki takımın puanı eşittir?**`,
  gorsel: `<table class="tablo"><tr><th>Takım</th><th>Galibiyet</th><th>Beraberlik</th><th>Mağlubiyet</th></tr><tr><td>Dalga</td><td>1</td><td>3</td><td>0</td></tr><tr><td>Fırtına</td><td>2</td><td>0</td><td>2</td></tr><tr><td>Yıldırım</td><td>2</td><td>1</td><td>1</td></tr><tr><td>Bora</td><td>0</td><td>4</td><td>0</td></tr></table>`,
  secenekler: [
    "Dalga ve Fırtına",
    "Fırtına ve Yıldırım",
    "Dalga ve Bora",
    "Dalga ve Yıldırım"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Galibiyet sayısına bakıp puanı eşit sanma: ikisinin de 2 galibiyeti var ama Yıldırım'ın bir beraberliği daha var (7 ve 6 puan).",
    "Mağlubiyet sayısına bakıp puanı eşit sanma: ikisi de hiç kaybetmemiştir ama puanları 6 ve 4'tür.",
    "Yakın puanı eşit sanma: Dalga 6, Yıldırım 7 puandadır."
  ],
  aciklama: `Önce her takımın puanını hesapla, sonra eşit olanları bul.
Adım 1: Dalga: 1 × 3 + 3 × 1 = 6 puan.
Adım 2: Fırtına: 2 × 3 + 0 + 0 = 6 puan.
Adım 3: Yıldırım: 2 × 3 + 1 × 1 = 7 puan.
Adım 4: Bora: 4 × 1 = 4 puan.
Sağlama: Eşit puanlı takımlar Dalga ve Fırtına (ikisi de 6).
Cevap A.`
},
{
  id: "tur-sm-160",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Robotik kulübüne katılmak isteyen öğrenciden şu koşul aranmaktadır: "Matematik notu en az 80 olmalı ya da bir bilim fuarına katılmış olmalıdır." Dört öğrencinin durumu şöyledir:
• Alp: Matematik notu 85, fuara katılmamış.
• Bade: Matematik notu 70, fuara katılmış.
• Cenk: Matematik notu 79, fuara katılmamış.
• Derya: Matematik notu 80, fuara katılmamış.

**Buna göre hangi öğrenciler kulübe katılabilir?**`,
  gorsel: null,
  secenekler: [
    "Alp ve Bade",
    "Alp ve Derya",
    "Alp, Bade ve Derya",
    "Alp, Bade, Cenk ve Derya"
  ],
  dogru: 2,
  hatalar: [
    "\"En az 80\" ifadesinin 80'i de içerdiğini unutma: Derya tam 80 almıştır.",
    "\"Ya da\" koşulunun fuar kısmını atlama: fuara katılan Bade de kulübe katılabilir.",
    null,
    "Sınırın altındaki notu kabul etme: Cenk'in notu 79'dur ve fuara da katılmamıştır."
  ],
  aciklama: `"Ya da" kuralında koşullardan biri yeterlidir; "en az 80" ise 80'i içerir.
Adım 1: Alp 85 ≥ 80, birinci koşul sağlanır.
Adım 2: Bade'nin notu düşük ama fuara katılmış, ikinci koşul sağlanır.
Adım 3: Cenk 79 < 80 ve fuara katılmamış, hiçbir koşul sağlanmaz.
Adım 4: Derya 80 ≥ 80 (sınır dahil), birinci koşul sağlanır.
Sağlama: Katılabilenler Alp, Bade ve Derya'dır.
Cevap C.`
},
{
  id: "tur-sm-161",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir tiyatro gösterisinde Aras, Berna, Cemre, Deniz ve Emir aynı sırada yan yana beş koltuğa oturmuştur. Koltuklar soldan sağa 1'den 5'e kadar numaralanmıştır.
• Aras 1 numaralı koltuktadır.
• Berna, Cemre'nin hemen sağındadır.
• Emir, Deniz'in hemen solundadır.
• Emir, Berna'nın yanındaki koltuklardan birinde oturmamaktadır.

**Buna göre 3 numaralı koltukta kim oturmaktadır?**`,
  gorsel: null,
  secenekler: ["Cemre", "Berna", "Emir", "Deniz"],
  dogru: 3,
  hatalar: [
    "İkinci yerleşimi seçme: Cemre, 4 numaralı koltuktadır.",
    "Berna'nın yerini yanlış bulma: Berna, Cemre'nin hemen sağında olduğu için 5 numaralı koltuktadır.",
    "Emir'in yerini yanlış bulma: Emir, Deniz'in hemen solunda olduğu için 2 numaralı koltuktadır.",
    null
  ],
  aciklama: `Art arda iki kişiyi tek blok gibi düşün: "Cemre-Berna" bloğu ve "Emir-Deniz" bloğu 2'den 5'e kadar olan dört koltuğa iki biçimde yerleşir.
Adım 1: Cemre 2, Berna 3, Emir 4, Deniz 5 olursa Emir (4), Berna'nın (3) yanında oturur; son kural bozulur.
Adım 2: Öbür yerleşim: Emir 2, Deniz 3, Cemre 4, Berna 5. Emir ile Berna yan yana değildir, kurallar sağlanır.
Adım 3: 3 numaralı koltukta Deniz oturur.
Cevap D.`
},
{
  id: "tur-sm-162",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir kargo şirketinin paket ücretleri ağırlığa göre tabloda verilmiştir. Bir kişi ağırlıkları 1 kg, 3 kg ve 4 kg olan üç paketi ayrı ayrı göndermiştir.

**Buna göre bu kişi toplam kaç TL öder?**`,
  gorsel: `<table class="tablo"><tr><th>Paket ağırlığı</th><th>Ücret</th></tr><tr><td>1 kg'a kadar (1 kg dahil)</td><td>20 TL</td></tr><tr><td>1 kg'dan fazla, 3 kg'a kadar (3 kg dahil)</td><td>35 TL</td></tr><tr><td>3 kg'dan fazla, 5 kg'a kadar (5 kg dahil)</td><td>50 TL</td></tr></table>`,
  secenekler: ["90 TL", "105 TL", "120 TL", "135 TL"],
  dogru: 1,
  hatalar: [
    "4 kg'lık paketi ikinci aralıkta sayma: 4 kg, 3 kg'dan fazladır ve 50 TL öder (20 + 35 + 35 = 90 olur).",
    null,
    "3 kg'lık paketi bir üst aralığa koyma: 3 kg, \"3 kg dahil\" aralığındadır ve 35 TL öder (20 + 50 + 50 = 120 olur).",
    "1 kg ve 3 kg'lık paketleri bir üst aralığa koyma: iki sınır da kendi aralığındadır (35 + 50 + 50 = 135 olur)."
  ],
  aciklama: `Aralık tablolarında sınırdaki değer "dahil" yazan aralığa girer.
Adım 1: 1 kg → "1 kg'a kadar (1 kg dahil)" → 20 TL.
Adım 2: 3 kg → "3 kg'a kadar (3 kg dahil)" → 35 TL.
Adım 3: 4 kg → "3 kg'dan fazla, 5 kg'a kadar" → 50 TL.
Adım 4: 20 + 35 + 50 = 105 TL.
Cevap B.`
},
{
  id: "tur-sm-163",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir bilgisayar oyununun 5 bölümü vardır. Oyuncu her bölümde en az 1, en fazla 3 yıldız kazanır. Kemal ilk dört bölümde toplam 9 yıldız kazanmıştır.

**Buna göre Kemal'in beş bölümün sonundaki toplam yıldız sayısı en fazla kaç olabilir?**`,
  gorsel: null,
  secenekler: ["10", "11", "12", "15"],
  dogru: 2,
  hatalar: [
    "\"En fazla\" ile \"en az\" sözcüklerini karıştırma: 9 + 1 = 10, toplamın en az olabileceği değerdir.",
    "Son bölümde en fazla 2 yıldız kazanılabileceğini sanma: bir bölümde en fazla 3 yıldız vardır.",
    null,
    "Yıldız sınırını ilk dört bölüme de uygulama: 5 × 3 = 15 olurdu, ama ilk dört bölümde kazanılan 9 yıldız bellidir."
  ],
  aciklama: `"En fazla" için bilinmeyen kısmı olabilecek en büyük değere ayarla.
Adım 1: İlk dört bölümde toplam 9 yıldız kazanılmış; bu sayı belli.
Adım 2: Beşinci bölümde en fazla 3 yıldız kazanılabilir.
Adım 3: Toplam en fazla 9 + 3 = 12 olur.
Sağlama: Toplamın en az olduğu durum 9 + 1 = 10'dur; en fazla olduğu durum 12'dir.
Cevap C.`
},
{
  id: "tur-sm-164",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Havalimanında dört bavul tartılmıştır. Mavi bavul, kırmızı bavuldan ağırdır. Kırmızı bavul, yeşil bavuldan ağırdır. Sarı bavul da kırmızı bavuldan ağırdır.

**Buna göre aşağıdaki ifadelerden hangisinin doğru olup olmadığı kesin olarak __bilinemez__?**`,
  gorsel: null,
  secenekler: [
    "Mavi bavul, sarı bavuldan ağırdır.",
    "Mavi bavul, yeşil bavuldan ağırdır.",
    "Kırmızı bavul, sarı bavuldan ağırdır.",
    "Sarı bavul, yeşil bavuldan ağırdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Zinciri sonuna kadar izleme: mavi > kırmızı ve kırmızı > yeşil olduğundan mavi > yeşil kesin bilinir.",
    "Verilen bilginin tersini kabul etme: sarı bavul kırmızıdan ağırdır, bu ifade kesin olarak yanlıştır.",
    "Zinciri sonuna kadar izleme: sarı > kırmızı ve kırmızı > yeşil olduğundan sarı > yeşil kesin bilinir."
  ],
  aciklama: `"Kesin olarak bilinemez", bilgilerden doğru ya da yanlış olduğu çıkarılamayan ifadedir.
Adım 1: Zincirler: mavi > kırmızı > yeşil ve sarı > kırmızı.
Adım 2: Mavi > yeşil ve sarı > yeşil, zincirlerden çıkar (kesin doğru). "Kırmızı > sarı" ise verilene ters olduğundan kesin yanlış.
Adım 3: Mavi ile sarı ise yalnızca kırmızıyla kıyaslanmıştır; hangisinin ağır olduğu bilinemez.
Sık yapılan hata: Aynı bavulla kıyaslanan iki bavulun kendi sırasını kestirmek.
Cevap A.`
},
{
  id: "tur-sm-165",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir kart oyununda kartların puanları birinci tabloda, dört oyuncunun çektiği kartlar ikinci tabloda verilmiştir. Oyunu en yüksek toplam puanı olan oyuncu kazanır.

**Buna göre oyunu kim kazanmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>Puanı</th></tr><tr><td>Mavi</td><td>2</td></tr><tr><td>Sarı</td><td>3</td></tr><tr><td>Kırmızı</td><td>5</td></tr><tr><td>Siyah</td><td>−4</td></tr></table><table class="tablo"><tr><th>Oyuncu</th><th>Mavi</th><th>Sarı</th><th>Kırmızı</th><th>Siyah</th></tr><tr><td>Ada</td><td>2</td><td>0</td><td>1</td><td>1</td></tr><tr><td>Bora</td><td>1</td><td>2</td><td>0</td><td>1</td></tr><tr><td>Ceren</td><td>3</td><td>1</td><td>1</td><td>2</td></tr><tr><td>Deniz</td><td>1</td><td>0</td><td>2</td><td>1</td></tr></table>`,
  secenekler: ["Ada", "Bora", "Ceren", "Deniz"],
  dogru: 3,
  hatalar: [
    "Hesabı eksik yapma: Ada'nın toplamı 4 + 0 + 5 − 4 = 5'tir.",
    "Sarı kartların çokluğuna güvenme: Bora'nın toplamı 2 + 6 + 0 − 4 = 4'tür.",
    "Siyah kartların puanını düşmeyi unutma: eksi puanlar çıkarılmazsa Ceren 14 görünür, oysa toplamı 6'dır.",
    null
  ],
  aciklama: `Her oyuncunun puanını kart sayısı × kart puanı biçiminde ayrı ayrı hesapla; siyah kart puandan düşer.
Adım 1: Ada: 2 × 2 + 0 + 1 × 5 − 4 = 5.
Adım 2: Bora: 1 × 2 + 2 × 3 + 0 − 4 = 4.
Adım 3: Ceren: 3 × 2 + 1 × 3 + 1 × 5 − 2 × 4 = 6.
Adım 4: Deniz: 1 × 2 + 0 + 2 × 5 − 4 = 8.
Sağlama: En yüksek toplam 8 ile Deniz'dedir.
Cevap D.`
},
{
  id: "tur-sm-166",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Aylin, Buse, Cem ve Deniz farklı renkte tişört giymiştir: kırmızı, mavi, yeşil ve sarı. Aylin, mavi tişört giyenden uzundur. Buse mavi tişört giymemiştir. Deniz de mavi tişört giymemiştir.

**Buna göre mavi tişörtü kim giymiştir?**`,
  gorsel: null,
  secenekler: ["Aylin", "Cem", "Buse", "Deniz"],
  dogru: 1,
  hatalar: [
    "\"Uzundur\" bilgisini yanlış yorumlama: bir kişi kendinden uzun olamaz, bu yüzden Aylin mavi giyen olamaz.",
    null,
    "Verilen olumsuz bilgiyi atlama: Buse mavi tişört giymemiştir.",
    "Verilen olumsuz bilgiyi atlama: Deniz mavi tişört giymemiştir."
  ],
  aciklama: `Eşleştirmede önce "olamaz" diyen bilgilerle adayları ele.
Adım 1: Aylin, mavi giyenden uzundur; yani Aylin mavi giyen değildir (kimse kendinden uzun olamaz).
Adım 2: Buse ve Deniz de mavi giymemiştir.
Adım 3: Dört kişiden üçü elendi; mavi tişörtü Cem giymiştir.
Sağlama: Aylin, Cem'den uzundur; bu hiçbir bilgiyle çelişmez.
Cevap B.`
},
{
  id: "tur-sm-167",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir su parkının giriş ücretleri, ziyaret gününe ve bilet türüne göre tabloda verilmiştir. Zeynep ile annesi çarşamba günü; Zeynep'in iki kardeşi ile babası ise cumartesi günü su parkına gitmiştir. Zeynep ve kardeşleri öğrenci bileti, anne ile baba tam bilet almıştır.

**Buna göre bu beş kişi su parkına giriş için toplam kaç TL ödemiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Bilet türü</th><th>Hafta içi (pazartesi – cuma)</th><th>Hafta sonu (cumartesi – pazar)</th></tr><tr><td>Tam</td><td>40 TL</td><td>60 TL</td></tr><tr><td>Öğrenci</td><td>25 TL</td><td>35 TL</td></tr></table>`,
  secenekler: ["155 TL", "185 TL", "195 TL", "225 TL"],
  dogru: 2,
  hatalar: [
    "Hafta sonu sütununu hiç kullanmama: bütün girişleri hafta içi fiyatıyla hesaplama (65 + 90 = 155 olur).",
    "Günleri ters eşleştirme: çarşamba için hafta sonu, cumartesi için hafta içi sütununu okuma (95 + 90 = 185 olur).",
    null,
    "Bütün girişleri hafta sonu fiyatıyla hesaplama: çarşamba hafta içidir (95 + 130 = 225 olur)."
  ],
  aciklama: `İki girdili tabloda önce satırı (bilet türü), sonra sütunu (gün) belirleyip kesiştiği hücreyi okursun.
Adım 1: Çarşamba hafta içidir. Zeynep (öğrenci) 25 TL + annesi (tam) 40 TL = 65 TL.
Adım 2: Cumartesi hafta sonudur. İki kardeş (öğrenci) 2 × 35 = 70 TL, baba (tam) 60 TL; toplam 130 TL.
Adım 3: 65 + 130 = 195 TL.
Sağlama: Beş kişinin hepsi sayıldı: 2 tam + 3 öğrenci bileti; çarşamba 2 kişi, cumartesi 3 kişi.
Cevap C.`
},
{
  id: "tur-sm-168",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Kare şeklindeki bir masanın kuzey, güney, doğu ve batı kenarlarının her birine birer kişi oturmuştur: Ada, Barış, Ceren ve Deniz.
• Ada kuzey kenarında oturmaktadır.
• Barış ne doğu ne de güney kenarında oturmaktadır.
• Ceren, Ada'nın tam karşısında oturmaktadır.

**Buna göre Deniz hangi kenarda oturmaktadır?**`,
  gorsel: null,
  secenekler: ["Doğu", "Batı", "Kuzey", "Güney"],
  dogru: 0,
  hatalar: [
    null,
    "Barış'ın kenarını Deniz'e verme: Barış kuzey, doğu ve güney kenarlarında olamayacağına göre batıdadır.",
    "Verilen bilgiyi atlama: kuzey kenarında Ada oturmaktadır.",
    "Ceren'in kenarını Deniz'e verme: Ada'nın karşısı güneydir ve orada Ceren oturmaktadır."
  ],
  aciklama: `Karşılıklı kenarlar: kuzey-güney ve doğu-batı. Karşısında demek, o kenarın tam öbür ucu demektir.
Adım 1: Ada kuzeyde; karşısı güneydir, Ceren güneyde oturur.
Adım 2: Barış doğuda ve güneyde değil; kuzey de dolu, bu yüzden batıdadır.
Adım 3: Boş kalan doğu kenarı Deniz'indir.
Sağlama: Ada-kuzey, Ceren-güney, Barış-batı, Deniz-doğu; üç bilgi de sağlanıyor.
Cevap A.`
},
{
  id: "tur-sm-169",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir okul kantininde Ali, Berna ve Cem'den en az ikisinin her gün çalışması gerekmektedir. Bugün Ali izinlidir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnızca Berna kantinde çalışmaktadır.","Yalnızca Cem kantinde çalışmaktadır.","Kantinde üç kişi çalışmaktadır.","Berna ve Cem'in ikisi de çalışmaktadır."],
  dogru: 3,
  hatalar: [
    "Cem'in de çalışması gerektiğini atlama: tek başına çalışan Berna, en az iki kişi koşulunu sağlamaz.",
    "Berna'nın da çalışması gerektiğini atlama: tek başına çalışan Cem, en az iki kişi koşulunu sağlamaz.",
    "Ali'nin izinli olduğunu unutma: Ali çalışamayacağına göre en çok iki kişi çalışır.",
    null
  ],
  aciklama: `"En az iki" en az iki kişi çalışacak demektir; üç kişiden biri izinliyse kalan ikisinin de çalışması gerekir.
Adım 1: Üç kişiden en az ikisi çalışmalı.
Adım 2: Ali izinli, geriye iki kişi (Berna ve Cem) kaldı.
Adım 3: En az ikisi çalışacağına göre bu ikisinin ikisi de çalışmalıdır.
Sağlama: Ali çalışmadığı için üç kişi çalışmaz; çalışanlar tam iki kişidir.
Cevap D.`
},
{
  id: "tur-sm-170",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir kitapçıda her kitap 40 TL'dir. Alınan kitap sayısına göre toplam tutardan düşülen indirim tabloda verilmiştir. Sevgi 4 kitap, Tarık 5 kitap almıştır. İkisi ayrı ayrı alışveriş yapmıştır.

**Buna göre ikisi birlikte kaç TL ödemiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Alınan kitap sayısı</th><th>İndirim</th></tr><tr><td>1 – 2 kitap</td><td>Yok</td></tr><tr><td>3 – 4 kitap</td><td>10 TL</td></tr><tr><td>5 ve daha fazla</td><td>25 TL</td></tr></table>`,
  secenekler: ["325 TL", "335 TL", "350 TL", "360 TL"],
  dogru: 0,
  hatalar: [
    null,
    "Sevgi'nin indirimini unutma: yalnızca Tarık'ın 25 TL indirimi düşülmüş olur (360 − 25 = 335).",
    "Tarık'ın indirimini unutma: yalnızca Sevgi'nin 10 TL indirimi düşülmüş olur (360 − 10 = 350).",
    "İndirimleri hiç uygulamama: 9 kitap × 40 TL = 360 TL olur."
  ],
  aciklama: `Her müşterinin kitap sayısına uyan satırı ayrı bul; indirimleri ayrı ayrı uygula.
Adım 1: Sevgi: 4 kitap × 40 = 160 TL; "3 – 4 kitap" satırı → 10 TL indirim → 150 TL.
Adım 2: Tarık: 5 kitap × 40 = 200 TL; "5 ve daha fazla" satırı → 25 TL indirim → 175 TL.
Adım 3: 150 + 175 = 325 TL.
Sağlama: Toplam indirimsiz tutar 360 TL, toplam indirim 35 TL; 360 − 35 = 325.
Cevap A.`
},
{
  id: "tur-sm-171",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Ece, Ferit, Gül, Hakan ve İpek bir kantin kuyruğunda tek sıra hâlinde beş sıraya girmiştir. Sıralar önden arkaya 1'den 5'e kadar numaralanmıştır.
• Ece 1. sıradadır.
• Ferit, Gül'ün önündedir ve ikisinin arasında tam bir kişi vardır.
• İpek, Gül'ün hemen önündedir.
• Hakan sonuncu değildir.

**Buna göre 3. sırada kim bulunmaktadır?**`,
  gorsel: null,
  secenekler: ["Gül", "Hakan", "Ferit", "İpek"],
  dogru: 2,
  hatalar: [
    "Gül'ün yerini yanlış bulma: İpek Gül'ün hemen önünde olduğuna göre Gül, 5. sıradadır.",
    "Hakan'ın yerini yanlış bulma: Hakan'a 2. sıra kalır.",
    null,
    "İpek'in yerini yanlış bulma: İpek, Gül'ün hemen önündedir ve 4. sıradadır."
  ],
  aciklama: `Önce kesin yeri yerleştir, sonra "tam bir kişi arada" bilgisiyle olası ikilileri yaz ve diğer bilgilerle ele.
Adım 1: Ece 1. sırada. Ferit-Gül çifti (arada tam bir kişi) ya 2. ve 4. sırada ya da 3. ve 5. sırada olabilir.
Adım 2: 2 ve 4 olursa Gül 4'te, İpek 3'te, Hakan 5'te kalır; Hakan sonuncu olamayacağı için bu olmaz.
Adım 3: 3 ve 5 olursa Gül 5'te, İpek 4'te, Hakan 2'dedir; bütün bilgiler sağlanır.
Sağlama: Sıra Ece, Hakan, Ferit, İpek, Gül olur. 3. sırada Ferit vardır.
Cevap C.`
},
{
  id: "tur-sm-172",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir kargo otomatı paketleri şu sırayla işlemektedir:
1. Paket kırmızı etiketliyse "Acil" bölmesine gider ve işlem biter.
2. Kırmızı etiketli değilse ve 5 kg'dan ağırsa "Ağır" bölmesine gider.
3. Diğer paketler "Normal" bölmesine gider.
Otomata sırasıyla kırmızı etiketli 8 kg'lık paket, mavi etiketli 6 kg'lık paket ve sarı etiketli 5 kg'lık paket verilmiştir.

**Buna göre bu paketler sırasıyla hangi bölmelere gider?**`,
  gorsel: null,
  secenekler: [
    "Acil, Acil, Ağır",
    "Acil, Ağır, Normal",
    "Ağır, Ağır, Normal",
    "Acil, Ağır, Ağır"
  ],
  dogru: 1,
  hatalar: [
    "Kuralın koşulunu genişletme: yalnızca kırmızı etiketli paket Acil bölmesine gider.",
    null,
    "Kural sırasını atlama: kırmızı etiketli paket, ağırlığına bakılmadan Acil bölmesine gider.",
    "Sınır değeri dahil etme: \"5 kg'dan ağır\" 5 kg'ı içermez, sarı paket Normal bölmeye gider."
  ],
  aciklama: `Kurallar sırayla uygulanır; ilk uyan kural paketi bölmeye gönderir ve diğerlerine bakılmaz.
Adım 1: Kırmızı 8 kg: 1. kural uyar → Acil.
Adım 2: Mavi 6 kg: kırmızı değil, 5 kg'dan ağır → Ağır.
Adım 3: Sarı 5 kg: kırmızı değil, 5 kg'dan ağır değil (eşit) → Normal.
Sık yapılan hata: "Ağır" ifadesini 5 kg'ı da içerir sanmak.
Cevap B.`
},
{
  id: "tur-sm-173",
  kazanim: "T.8.3.32",
  kademe: 1,
  zorluk: 2,
  soru: `Bir yaz okulunda etkinlikler hava durumuna göre tabloda gösterildiği gibi belirlenmektedir. Cumartesi günü hava rüzgârlı, pazar günü hava yağmurlu olmuştur.

**Buna göre öğleden sonra yapılan etkinlikler cumartesi ve pazar günleri sırasıyla hangileridir?**`,
  gorsel: `<table class="tablo"><tr><th>Hava durumu</th><th>Sabah etkinliği</th><th>Öğleden sonra etkinliği</th></tr><tr><td>Güneşli</td><td>Yüzme</td><td>Bisiklet</td></tr><tr><td>Yağmurlu</td><td>Sinema</td><td>Atölye</td></tr><tr><td>Rüzgârlı</td><td>Uçurtma</td><td>Satranç</td></tr></table>`,
  secenekler: [
    "Uçurtma ve Sinema",
    "Bisiklet ve Atölye",
    "Atölye ve Satranç",
    "Satranç ve Atölye"
  ],
  dogru: 3,
  hatalar: [
    "Yanlış sütunu okuma: bunlar sabah etkinlikleridir.",
    "Hava durumunu yanlış eşleştirme: cumartesi güneşli değil, rüzgârlıdır.",
    "Günlerin sırasını ters çevirme: cumartesi rüzgârlı, pazar yağmurlu olduğuna göre etkinlikler Satranç, Atölye sırasıyla yapılır.",
    null
  ],
  aciklama: `Önce hangi gün hangi satırda, sonra hangi sütunu okuyacağını belirle.
Adım 1: Cumartesi rüzgârlı: "Rüzgârlı" satırı, öğleden sonra sütunu → Satranç.
Adım 2: Pazar yağmurlu: "Yağmurlu" satırı, öğleden sonra sütunu → Atölye.
Adım 3: Cumartesi'den pazara sırayla: Satranç, Atölye.
Sağlama: Seçilen sütun "Öğleden sonra etkinliği"dir, günlerin sırası korunmuştur.
Cevap D.`
},
{
  id: "tur-sm-174",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir sınıftaki öğrencilerin hepsi en az bir kulübe üyedir. Bu sınıfta en az bir öğrenci iki kulübe üyedir.

**Buna göre aşağıdakilerden hangisi kesinlikle yanlıştır?**`,
  gorsel: null,
  secenekler: [
    "Sınıfta yalnızca bir kulübe üye olan öğrenci vardır.",
    "Sınıfta hiçbir kulübe üye olmayan bir öğrenci vardır.",
    "Sınıftaki bütün öğrenciler iki kulübe üyedir.",
    "Sınıfta üç kulübe üye olan bir öğrenci vardır."
  ],
  dogru: 1,
  hatalar: [
    "Olabilir ifadeyi kesinlikle yanlış sanma: en az bir öğrenci iki kulübe üyedir, ötekiler tek kulübe üye olabilir.",
    null,
    "Olabilir ifadeyi kesinlikle yanlış sanma: en az bir öğrenci iki kulübe üyedir, belki herkes öyledir.",
    "Olabilir ifadeyi kesinlikle yanlış sanma: bilgi üç kulübe üye öğrenciyi dışlamaz."
  ],
  aciklama: `"Kesinlikle yanlış" ifade, verilen bilgiyle çelişen ifadedir; "olabilir" olanlar yanlış sayılmaz.
Adım 1: "Hepsi en az bir kulübe üye" demek, kulübe üye olmayan öğrenci yok demektir.
Adım 2: "Hiçbir kulübe üye olmayan öğrenci vardır" ifadesi bununla çelişir, kesinlikle yanlıştır.
Adım 3: Öteki üç ifade bilgilerle çelişmez; sınıf yapısına göre doğru olabilir ama kesin değildir.
Cevap B.`
},
{
  id: "tur-sm-175",
  kazanim: "T.8.3.25",
  kademe: 1,
  zorluk: 2,
  soru: `Bir okulun yangın sisteminde şu kurallar uygulanmaktadır:
• Duman algılanırsa alarm çalar.
• Alarm çalarsa kapılar kendiliğinden açılır.
Bugün okulda alarm çalmıştır.

**Buna göre aşağıdaki ifadelerden hangisinin doğru olup olmadığı kesin olarak __bilinemez__?**`,
  gorsel: null,
  secenekler: [
    "Bugün alarm çalmamıştır.",
    "Kapılar kendiliğinden açılmıştır.",
    "Kapılar kapalı kalmıştır.",
    "Duman algılanmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Verilen bilgiyi yok sayma: alarmın bugün çaldığı açıkça yazılıdır, bu ifade kesin olarak yanlıştır.",
    "Kesin doğruyu bilinemez sanma: alarm çaldığına göre ikinci kural gereği kapılar açılmıştır, bu ifade kesin olarak doğrudur.",
    "Kesin yanlışı bilinemez sanma: alarm çaldığına göre kapıların kapalı kalması ikinci kuralla çelişir.",
    null
  ],
  aciklama: `"A ise B" kuralı yalnızca ileri yönde işler: neden gerçekleşirse sonuç gerçekleşir, ama sonuç gerçekleşmişse neden kesinleşmez.
Adım 1: Kurallar zincir oluşturur: duman → alarm → kapıların açılması.
Adım 2: Alarm çaldığına göre ikinci kural gereği kapılar açılmıştır; "kapılar açılmıştır" kesin doğru, "kapılar kapalı kalmıştır" ve "alarm çalmamıştır" kesin yanlıştır.
Adım 3: Alarm başka bir nedenle de çalmış olabilir; bu yüzden dumanın algılanıp algılanmadığı bilinemez.
Sık yapılan hata: Sonuçtan geriye giderek nedeni kesin sanmak.
Cevap D.`
}
);
