// Türkçe — Sözel Mantık: Havuz eki (kademe 0, tur-sm-016 … 075)
// Kazanım: T.8.3.25 (çıkarım), tablo/çizelge verili sorularda T.8.3.32.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sozel-mantik"] = window.LGS_BANK["sozel-mantik"] || []).push(
/* ===================== HAVUZ EKİ — DÜZEY 1 ===================== */
{
  id: "tur-sm-016",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 1,
  soru: `Zeynep, pazar yerinde annesi için hem elma hem armut almak istemektedir. Tabloda dört tezgâhta hangi meyvenin satıldığı (✓) ya da satılmadığı (✗) gösterilmiştir.

**Buna göre Zeynep her iki meyveyi de hangi tezgâhtan alabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Tezgâh</th><th>Elma</th><th>Armut</th><th>Kiraz</th></tr><tr><td>Tezgâh 1</td><td>✓</td><td>✗</td><td>✓</td></tr><tr><td>Tezgâh 2</td><td>✗</td><td>✓</td><td>✓</td></tr><tr><td>Tezgâh 3</td><td>✓</td><td>✓</td><td>✗</td></tr><tr><td>Tezgâh 4</td><td>✗</td><td>✗</td><td>✓</td></tr></table>`,
  secenekler: [
    "Tezgâh 1",
    "Tezgâh 2",
    "Tezgâh 3",
    "Tezgâh 4"
  ],
  dogru: 2,
  hatalar: [
    "Koşulun yarısına bakma: Tezgâh 1'de elma vardır ama armut satılmaz (✗).",
    "Koşulun yarısına bakma: Tezgâh 2'de armut vardır ama elma satılmaz (✗).",
    null,
    "Yanlış sütuna bakma: Tezgâh 4'te yalnızca kiraz vardır; ne elma ne armut satılır."
  ],
  aciklama: `"Hem … hem …" diyen bir istekte iki koşulun ikisi de aynı satırda sağlanmalıdır.
Adım 1: İstenen iki meyve elma ve armuttur; kiraz sütunu işine yaramaz.
Adım 2: Her satırda elma ve armut hücrelerine birlikte bak. Tezgâh 1'de armut, Tezgâh 2'de elma, Tezgâh 4'te ikisi de ✗'dir.
Adım 3: Elma ve armut hücrelerinin ikisinde de ✓ bulunan tek satır Tezgâh 3'tür.
Sık yapılan hata: Satırda bir ✓ görünce o tezgâhı seçmek. İki meyve birlikte aranıyorsa iki ✓ gerekir.
Cevap C.`
},
{
  id: "tur-sm-017",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Bir spor salonunun girişinde şu kural asılıdır: "Salona girmek için üyelik kartını okutmak ve spor ayakkabısı giymek gerekir." Dört kişi kapıya geldiğinde şunlar görülmüştür:
• Ece, kartını okutmuş ancak terlik giymiştir.
• Gül, kartını okutmuş ve spor ayakkabısı giymiştir.
• Fatih, spor ayakkabısı giymiş ancak kartını evde unutmuştur.
• Hakan, kartını okutmamış ve terlik giymiştir.

**Buna göre salona girebilen kişi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Gül",
    "Ece",
    "Fatih",
    "Hakan"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İkinci koşulu atlama: Ece'nin kartı tamdır ama terlikle girilemez.",
    "İkinci koşulu atlama ile aynı hata ters yönde: Fatih'in ayakkabısı uygundur ama kartını okutmamıştır.",
    "Hiçbir koşul sağlanmıyor: Hakan hem kartını okutmamış hem de terlik giymiştir."
  ],
  aciklama: `Kuraldaki "ve" bağlacı, iki koşulun birlikte sağlanmasını ister; biri eksikse giriş yoktur.
Adım 1: İki koşulu yaz: kart okutulmuş olmalı, spor ayakkabısı giyilmiş olmalı.
Adım 2: Ece'de ayakkabı, Fatih'te kart, Hakan'da ikisi de eksiktir.
Adım 3: İki koşulu birlikte sağlayan tek kişi Gül'dür.
Sağlama: Gül'ün kartı okutulmuş ve ayakkabısı spor ayakkabıdır; kural tam olarak sağlanıyor.
Cevap A.`
},
{
  id: "tur-sm-018",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 1,
  soru: `Okulun bilim kulübündeki teleskop, üyelere en fazla 14 gün ödünç verilmektedir. Dört üyenin teleskobu kaç gün elinde tuttuğu tabloda verilmiştir.

**Buna göre hangi üye süreyi aşmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Üye</th><th>Elinde tuttuğu gün sayısı</th></tr><tr><td>Mina</td><td>12</td></tr><tr><td>Orhan</td><td>14</td></tr><tr><td>Pelin</td><td>9</td></tr><tr><td>Rıza</td><td>16</td></tr></table>`,
  secenekler: [
    "Mina",
    "Orhan",
    "Pelin",
    "Rıza"
  ],
  dogru: 3,
  hatalar: [
    "Sayıyı yanlış karşılaştırma: 12 gün, 14 günden azdır; Mina süreyi aşmamıştır.",
    "Sınırı dışarıda sayma: \"en fazla 14 gün\" 14'ü içine alır; Orhan süreyi aşmamıştır.",
    "Sayıyı yanlış karşılaştırma: 9 gün, 14 günden azdır; Pelin süreyi aşmamıştır.",
    null
  ],
  aciklama: `"En fazla 14" sözü 14'ü de içine alır; süre ancak 14'ten büyük olunca aşılmış sayılır.
Adım 1: Sınırı belirle: 14 gün ve 14'ten az sürenin hepsi uygundur.
Adım 2: 12, 14 ve 9 gün sınırın içinde kalır.
Adım 3: 16 gün, 14'ü aştığı için Rıza kuralı bozmuştur.
Sık yapılan hata: 14 günü de aşmış saymak. "En fazla" sınır değeri kapsar.
Cevap D.`
},
{
  id: "tur-sm-019",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Bir futsal turnuvasında galibiyet 3, beraberlik 1, mağlubiyet 0 puan getirmektedir. Yıldızlar takımı 4 maç oynamış; 2 maçı kazanmış, 1 maçta berabere kalmış, 1 maçı kaybetmiştir.

**Buna göre Yıldızlar takımı kaç puan toplamıştır?**`,
  gorsel: null,
  secenekler: [
    "6 puan",
    "7 puan",
    "8 puan",
    "9 puan"
  ],
  dogru: 1,
  hatalar: [
    "Beraberliği saymama: 2 × 3 = 6 puandır; beraberliğin getirdiği 1 puan unutulmuştur.",
    null,
    "Mağlubiyete puan verme: yenilgi 0 puandır, 1 puan eklenmez.",
    "Beraberliğe 3 puan verme: beraberlik 1 puan getirir, 3 değil."
  ],
  aciklama: `Puanlama sorularında her sonucun puanını ayrı hesaplayıp topla.
Adım 1: 2 galibiyet 2 × 3 = 6 puan eder.
Adım 2: 1 beraberlik 1 puan, 1 mağlubiyet 0 puan eder.
Adım 3: Toplam 6 + 1 + 0 = 7 puandır.
Sağlama: 4 maçın dördü de hesaba katıldı (2 + 1 + 1).
Cevap B.`
},
{
  id: "tur-sm-020",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Bir ormanlık alanda dört ağaç türünün boyları karşılaştırılmıştır.
• Çam, meşeden kısadır.
• Çam, ladinden uzundur.
• Kayın, ladinden kısadır.

**Buna göre dört ağaç türünden en kısa olan hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Çam",
    "Kayın",
    "Ladin",
    "Meşe"
  ],
  dogru: 1,
  hatalar: [
    "Yönü ters okuma: çam, ladinden uzundur; en kısa olamaz.",
    null,
    "Zinciri yarım bırakma: ladin, çamdan kısadır ama kayın ladinden de kısadır.",
    "Yönü ters okuma: çam meşeden kısa olduğuna göre meşe çamdan uzundur; en uzun odur."
  ],
  aciklama: `Karşılaştırma zincirinde ağaçları uzundan kısaya doğru alt alta yaz.
Adım 1: "Çam meşeden kısa" der; meşe çamın üstünde olur.
Adım 2: "Çam ladinden uzun" der; ladin çamın altına gelir.
Adım 3: "Kayın ladinden kısa" der; kayın ladinin altına gelir.
Sıralama: meşe > çam > ladin > kayın. En kısa kayındır.
Sağlama: Üç bilginin üçü de bu sıralamayla uyuşuyor.
Cevap B.`
},
{
  id: "tur-sm-021",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 1,
  soru: `Okul kantininde bir haftanın ilk dört gününde satılan simit sayıları grafikte gösterilmiştir.

**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 400 204" role="img"><text x="200" y="18" text-anchor="middle" font-size="15" fill="currentColor">Günlük satılan simit sayısı</text><line x1="20" y1="170" x2="390" y2="170" stroke="currentColor" stroke-width="2"/><rect x="40" y="80" width="60" height="90" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="130" y="95" width="60" height="75" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="220" y="50" width="60" height="120" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="310" y="65" width="60" height="105" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="70" y="74" text-anchor="middle" font-size="15" fill="currentColor">30</text><text x="160" y="89" text-anchor="middle" font-size="15" fill="currentColor">25</text><text x="250" y="44" text-anchor="middle" font-size="15" fill="currentColor">40</text><text x="340" y="59" text-anchor="middle" font-size="15" fill="currentColor">35</text><text x="70" y="192" text-anchor="middle" font-size="14" fill="currentColor">Pazartesi</text><text x="160" y="192" text-anchor="middle" font-size="14" fill="currentColor">Salı</text><text x="250" y="192" text-anchor="middle" font-size="14" fill="currentColor">Çarşamba</text><text x="340" y="192" text-anchor="middle" font-size="14" fill="currentColor">Perşembe</text></svg>`,
  secenekler: [
    "Pazartesi günü, perşembe gününden fazla simit satılmıştır.",
    "En çok simit perşembe günü satılmıştır.",
    "Salı ve çarşamba günlerinde toplam 60 simit satılmıştır.",
    "En az simit salı günü satılmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Çubukları yanlış karşılaştırma: pazartesi 30, perşembe 35 simittir; pazartesi daha azdır.",
    "En yüksek çubuğu karıştırma: en çok simit 40 ile çarşamba günü satılmıştır.",
    "Toplamı yanlış hesaplama: 25 + 40 = 65'tir, 60 değil.",
    null
  ],
  aciklama: `Grafik sorularında önce her çubuğun değerini oku, sonra şıkları tek tek bu değerlerle sına.
Adım 1: Değerler pazartesi 30, salı 25, çarşamba 40, perşembe 35'tir.
Adım 2: Pazartesi (30) perşembeden (35) azdır; en çok satış 40 ile çarşambadır; salı ile çarşamba toplamı 65'tir.
Adım 3: En kısa çubuk 25 ile salıya aittir; yani en az simit salı günü satılmıştır.
Sağlama: Dört değerin en küçüğü 25'tir ve salı gününe aittir.
Cevap D.`
},
{
  id: "tur-sm-022",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Bir okulun gezi planında şu kurallar yazılıdır:
• Hava yağmurluysa piknik salonda yapılır.
• Hava yağmurlu değilse piknik bahçede yapılır.

Öğrenciler pikniği bahçede yapmıştır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Hava yağmurlu değildir.",
    "Hava yağmurludur.",
    "Piknik salonda yapılmıştır.",
    "Piknik ertelenmiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kuralı ters uygulama: hava yağmurlu olsaydı piknik salonda yapılırdı, oysa bahçede yapılmıştır.",
    "Verilen bilgiyle çelişme: öğrenciler pikniği bahçede yapmıştır, salonda değil.",
    "Metinde olmayan bir bilgi ekleme: piknik yapıldığı söylenmiştir, ertelendiği söylenmemiştir."
  ],
  aciklama: `Bir kuralın sonucu gerçekleşmediyse, kuralın koşulu da gerçekleşmemiştir.
Adım 1: Yağmurluysa piknik salonda yapılır. Piknik salonda yapılmadığına göre hava yağmurlu olamaz.
Adım 2: Böylece ikinci kural işler: hava yağmurlu değildir ve piknik bahçede yapılır.
Sağlama: "Yağmurlu değil" bilgisi hem bahçede yapıldığını açıklar hem de ilk kuralla çelişmez.
Cevap A.`
},
{
  id: "tur-sm-023",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Okul yemekhanesindeki masalarda en az 3, en fazla 5 öğrenci oturabilir. Beş masada oturan öğrenci sayıları şöyledir: 1. masada 2, 2. masada 3, 3. masada 4, 4. masada 5, 5. masada 6.

**Buna göre kaç masadaki oturma düzeni kurala uygundur?**`,
  gorsel: null,
  secenekler: [
    "1",
    "2",
    "3",
    "4"
  ],
  dogru: 2,
  hatalar: [
    "Sınırları dışarıda sayma: yalnızca 4 öğrencili masa uygun sanılırsa 3 ve 5 öğrencili masalar atlanır.",
    "Bir sınırı dışarıda sayma: 3 ya da 5 öğrencili masalardan biri atlanmıştır; ikisi de kurala uyar.",
    null,
    "Üst sınırı aşan masayı da sayma: 6 öğrencili masa \"en fazla 5\" kuralına uymaz."
  ],
  aciklama: `"En az 3" ve "en fazla 5" sözleri uç değerleri de içine alır; uygun aralık 3, 4 ve 5'tir.
Adım 1: Uygun öğrenci sayıları 3, 4 ve 5'tir.
Adım 2: 1. masa (2) altta kalır, 5. masa (6) üstte kalır.
Adım 3: 2., 3. ve 4. masa uygundur; toplam 3 masa.
Sık yapılan hata: Sınır değerlerini (3 ve 5) dışarıda bırakmak.
Cevap C.`
},
{
  id: "tur-sm-024",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 1,
  soru: `Bir okul gezisinin program çizelgesi aşağıda verilmiştir.

**Buna göre öğle yemeğinden hemen sonra yapılacak etkinlik hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Saat</th><th>Etkinlik</th></tr><tr><td>09:00</td><td>Müze gezisi</td></tr><tr><td>10:30</td><td>Atölye çalışması</td></tr><tr><td>12:00</td><td>Öğle yemeği</td></tr><tr><td>13:00</td><td>Botanik bahçesi gezisi</td></tr><tr><td>15:00</td><td>Alışveriş</td></tr></table>`,
  secenekler: [
    "Müze gezisi",
    "Atölye çalışması",
    "Alışveriş",
    "Botanik bahçesi gezisi"
  ],
  dogru: 3,
  hatalar: [
    "Yönü ters okuma: müze gezisi öğle yemeğinden önce, 09:00'da yapılır.",
    "Yönü ters okuma: atölye çalışması öğle yemeğinden önce, 10:30'da yapılır.",
    "Hemen sonrasını atlama: alışveriş 15:00'dadır, arada botanik bahçesi gezisi vardır.",
    null
  ],
  aciklama: `Çizelgede "hemen sonra" demek, saat sırasına göre bir sonraki satır demektir.
Adım 1: Öğle yemeğinin saatini bul: 12:00.
Adım 2: Çizelgede 12:00 satırının hemen altındaki satıra bak: 13:00, botanik bahçesi gezisi.
Adım 3: Alışveriş de yemekten sonradır ama hemen sonrası değildir.
Sağlama: Öğle yemeği ile botanik bahçesi gezisi arasında başka etkinlik yoktur.
Cevap D.`
},
{
  id: "tur-sm-025",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Bir kutu oyununda iki zar birlikte atılır. Kurala göre iki zar aynı sayıyı gösterirse oyuncu bir kez daha zar atar. Dört oyuncunun attığı zarlar şöyledir:
• Ali: 3 ve 3
• Bora: 2 ve 5
• Cem: 4 ve 4
• Deniz: 1 ve 6

**Buna göre yeniden zar atma hakkı kazanan oyuncular hangileridir?**`,
  gorsel: null,
  secenekler: [
    "Ali ile Cem",
    "Ali ile Bora",
    "Bora ile Deniz",
    "Cem ile Deniz"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Toplamlara bakma: Bora'nın zarları 2 ve 5'tir, aynı sayı değildir.",
    "Aynı sayı ile toplamı karıştırma: 2 + 5 = 7 ve 1 + 6 = 7 olsa da zarlar aynı sayıyı göstermemiştir.",
    "Yarım doğru: Cem'in zarları aynıdır ama Deniz'in zarları 1 ve 6'dır."
  ],
  aciklama: `Kural zarların toplamına değil, ikisinin aynı sayıyı göstermesine bakar.
Adım 1: Ali 3-3 attı: aynı.
Adım 2: Cem 4-4 attı: aynı.
Adım 3: Bora (2-5) ve Deniz (1-6) farklı sayılar attı; toplamları eşit olsa da bu kuralı sağlamaz.
Sağlama: Yalnızca Ali ve Cem'in zarları aynı sayıyı gösteriyor.
Cevap A.`
},
{
  id: "tur-sm-026",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 1,
  soru: `Okul kırtasiyesindeki ürünlerin fiyatları tabloda verilmiştir. Mira'nın cebinde tam 25 TL vardır ve bu parayı tam olarak harcayacak iki ürün almak istemektedir.

**Buna göre Mira hangi iki ürünü almalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Fiyat</th></tr><tr><td>Defter</td><td>20 TL</td></tr><tr><td>Silgi</td><td>8 TL</td></tr><tr><td>Kalem</td><td>5 TL</td></tr><tr><td>Cetvel</td><td>12 TL</td></tr></table>`,
  secenekler: [
    "Defter ve silgi",
    "Silgi ve cetvel",
    "Defter ve kalem",
    "Kalem ve cetvel"
  ],
  dogru: 2,
  hatalar: [
    "Toplamı yanlış hesaplama: 20 + 8 = 28 TL eder, cepteki para yetmez.",
    "Toplamı yanlış hesaplama: 8 + 12 = 20 TL eder; 5 TL arta kalır.",
    null,
    "Toplamı yanlış hesaplama: 5 + 12 = 17 TL eder; 8 TL arta kalır."
  ],
  aciklama: `"Tam olarak" sözü, toplamın ne az ne çok, tam 25 TL olmasını ister.
Adım 1: Her şıkkın iki fiyatını topla: 20 + 8 = 28, 8 + 12 = 20, 20 + 5 = 25, 5 + 12 = 17.
Adım 2: Yalnızca defter ile kalem 25 TL eder.
Sağlama: 20 + 5 = 25 olduğundan para tam olarak harcanır.
Cevap C.`
},
{
  id: "tur-sm-027",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 1,
  soru: `Okul servisinde iki kişilik bir koltukta Kaan ile Lale yan yana oturmaktadır. Kaan cam kenarındadır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Lale cam kenarındadır.",
    "Lale koridor tarafındadır.",
    "Kaan koridor tarafındadır.",
    "Kaan ile Lale ayrı koltuklardadır."
  ],
  dogru: 1,
  hatalar: [
    "Verilen bilgiyle çelişme: cam kenarı Kaan'ındır, iki kişilik koltukta Lale cam kenarında olamaz.",
    null,
    "Verilen bilgiyi tersine çevirme: Kaan cam kenarında oturmaktadır.",
    "Verilen bilgiyle çelişme: ikisi aynı koltukta yan yana oturmaktadır."
  ],
  aciklama: `İki yeri olan bir koltukta bir yer belliyse diğeri kesinleşir.
Adım 1: Koltuğun iki yeri vardır: cam kenarı ve koridor tarafı.
Adım 2: Cam kenarını Kaan almıştır.
Adım 3: Geriye kalan koridor tarafında Lale oturur.
Sağlama: Kaan cam, Lale koridor; iki kişi iki ayrı yerde ve aynı koltukta.
Cevap B.`
},
/* ===================== DÜZEY 2 ===================== */
{
  id: "tur-sm-028",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Bir sınıfta şu kurallar bilinmektedir:
• Kar yağarsa okul tatil edilir.
• Okul tatil edilirse Deniz sinemaya gider.

Deniz bugün sinemaya gitmemiştir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Bugün kar yağmamıştır.",
    "Bugün kar yağmıştır.",
    "Okul bugün tatil edilmiştir.",
    "Deniz bugün evde ders çalışmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Zinciri ters yürütme: kar yağsaydı okul tatil edilir, Deniz de sinemaya giderdi; Deniz gitmediğine göre kar yağmamıştır.",
    "Sonuç gerçekleşmedi ama koşulu gerçekleşmiş sayma: okul tatil edilseydi Deniz sinemaya giderdi.",
    "Metinde olmayan bir bilgi ekleme: Deniz'in sinemaya gitmeyip ne yaptığı bilinmez."
  ],
  aciklama: `Koşul zincirinde sonuç gerçekleşmemişse zincirin başı da gerçekleşmemiştir.
Adım 1: Deniz sinemaya gitmediğine göre okul tatil edilmemiştir (tatil edilseydi giderdi).
Adım 2: Okul tatil edilmediğine göre kar yağmamıştır (yağsaydı tatil edilirdi).
Adım 3: Deniz'in ne yaptığı soruda yazmaz; D şıkkı bilinemez.
Sağlama: Kar yağmadı, okul açık, Deniz sinemaya gitmedi; üç bilgi birbiriyle uyumlu.
Cevap A.`
},
{
  id: "tur-sm-029",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Fen laboratuvarında pazartesiden cumaya her gün bir öğrenci nöbet tutar. Nöbet kuralları şunlardır:
• Hiçbir öğrenci üst üste iki gün nöbet tutamaz.
• Hiçbir öğrenci haftada ikiden fazla nöbet tutamaz.

Hazırlanan çizelge aşağıda verilmiştir.

**Buna göre hangi öğrenci kurallardan en az birine uymamıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Nöbetçi</th></tr><tr><td>Pazartesi</td><td>Ceyda</td></tr><tr><td>Salı</td><td>Aslı</td></tr><tr><td>Çarşamba</td><td>Deniz</td></tr><tr><td>Perşembe</td><td>Deniz</td></tr><tr><td>Cuma</td><td>Bora</td></tr></table>`,
  secenekler: [
    "Aslı",
    "Bora",
    "Ceyda",
    "Deniz"
  ],
  dogru: 3,
  hatalar: [
    "Çizelgeyi yanlış okuma: Aslı yalnızca salı günü nöbet tutuyor, kurallara uyuyor.",
    "Çizelgeyi yanlış okuma: Bora yalnızca cuma günü nöbet tutuyor, kurallara uyuyor.",
    "Çizelgeyi yanlış okuma: Ceyda yalnızca pazartesi nöbet tutuyor, kurallara uyuyor.",
    null
  ],
  aciklama: `Her öğrencinin adını çizelgede ara; hem kaç kez geçtiğine hem de günlerin ardışık olup olmadığına bak.
Adım 1: Aslı, Bora ve Ceyda birer kez geçiyor; iki kural da sağlanıyor.
Adım 2: Deniz çarşamba ve perşembe günleri nöbet tutuyor; bu iki gün ardışıktır.
Adım 3: Birinci kural çiğnendiği için Deniz kurala uymamıştır (iki nöbet "ikiden fazla" değildir ama ardışıktır).
Sık yapılan hata: Yalnızca nöbet sayısına bakıp "iki, kuralın içinde" demek. Ardışıklık ayrı bir kuraldır.
Cevap D.`
},
{
  id: "tur-sm-030",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Okul panosuna gezi, sınav, kermes ve yarışma duyuruları soldan sağa 1'den 4'e kadar numaralı bölmelere birer tane asılacaktır.
• Kermes duyurusu, gezi duyurusunun hemen sağındaki bölmeye asılacaktır.
• Yarışma duyurusu en sağdaki bölmeye asılmayacaktır.
• Sınav duyurusu en soldaki bölmeye asılmayacaktır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Gezi duyurusu en soldaki bölmede asılıdır.","Yarışma duyurusu, sınav duyurusunun solundadır.","Kermes duyurusu en sağdaki bölmede asılıdır.","Sınav duyurusu en sağdaki bölmede asılıdır."],
  dogru: 1,
  hatalar: [
    "Tek bir dizilişe bakma: gezi yalnızca ilk dizilişte en soldadır; diğer iki dizilişte yarışma 1. bölmededir.",
    null,
    "Tek bir dizilişe bakma: kermes yalnızca üçüncü dizilişte en sağdadır; diğer iki dizilişte sınav 4. bölmededir.",
    "Tek bir dizilişe bakma: sınav ilk iki dizilişte en sağdadır ama üçüncü dizilişte 2. bölmededir."
  ],
  aciklama: `Kesinlik sorularında önce kurallara uyan bütün dizilişleri bul.
Adım 1: Gezi-kermes ikilisi 1-2, 2-3 ya da 3-4. bölmelerde olabilir.
Adım 2: İkili 1-2'deyse yarışma 3, sınav 4; ikili 2-3'teyse yarışma 1, sınav 4; ikili 3-4'teyse yarışma 1, sınav 2. Üç diziliş vardır.
Adım 3: Üçünde de yarışma, sınavın solundadır. Diğer şıklar bir dizilişte yanlıştır.
Sağlama: (gezi, kermes, yarışma, sınav), (yarışma, gezi, kermes, sınav), (yarışma, sınav, gezi, kermes): her birinde yarışma sınavdan öncedir.
Cevap B.`
},
{
  id: "tur-sm-031",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Bir spor salonunun üyelik paketleri tabloda gösterilmiştir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Paket</th><th>Haftalık giriş hakkı</th><th>Havuz</th><th>Aylık ücret</th></tr><tr><td>Başlangıç</td><td>2</td><td>Yok</td><td>300 TL</td></tr><tr><td>Orta</td><td>4</td><td>Var</td><td>450 TL</td></tr><tr><td>Tam</td><td>7</td><td>Var</td><td>600 TL</td></tr></table>`,
  secenekler: [
    "Aylık ücreti en az olan pakette havuz hakkı vardır.",
    "Haftalık giriş hakkı arttıkça aylık ücret azalır.",
    "Havuz hakkı olan her paket haftada en az 4 girişe izin verir.",
    "Haftada 7 giriş hakkı veren paket havuz hakkı sunmaz."
  ],
  dogru: 2,
  hatalar: [
    "Satırı yanlış okuma: en ucuz paket Başlangıç'tır ve havuz sütununda \"Yok\" yazar.",
    "Yönü ters okuma: giriş hakkı 2, 4, 7 olarak artarken ücret 300, 450, 600 olarak artar.",
    null,
    "Satırı yanlış okuma: 7 giriş hakkı Tam pakettedir ve havuz sütununda \"Var\" yazar."
  ],
  aciklama: `"Her" diyen bir şıkkı doğrulamak için o özelliğe sahip bütün satırlara bakmak gerekir.
Adım 1: Havuz hakkı "Var" olan satırlar Orta (4 giriş) ve Tam (7 giriş) paketleridir.
Adım 2: İkisinde de haftalık giriş hakkı en az 4'tür.
Adım 3: Diğer şıklar tablodaki bir satırla çelişir: en ucuz pakette havuz yok, ücret giriş hakkıyla birlikte artıyor, 7 girişli pakette havuz var.
Sağlama: "Havuz var" olan iki satırda 4 ve 7 değerleri 4'ün altına inmiyor.
Cevap C.`
},
{
  id: "tur-sm-032",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Bir bilgisayar oyununda puanlar şöyle hesaplanır:
• Her altın toplamak 4 puan kazandırır.
• Her anahtar bulmak 10 puan kazandırır.
• Her düşmanı yenmek 6 puan kazandırır.
• Her can kaybı 5 puan düşürür.

İlayda bir bölümde 3 altın toplamış, 2 anahtar bulmuş, 4 düşman yenmiş ve 1 can kaybetmiştir.

**Buna göre İlayda bu bölümde kaç puan toplamıştır?**`,
  gorsel: null,
  secenekler: [
    "43",
    "46",
    "51",
    "56"
  ],
  dogru: 2,
  hatalar: [
    "Düşman puanını yanlış alma: düşman başına 4 değil 6 puan verilir; bu hesap 43 verir.",
    "Can kaybını iki kez çıkarma: tek can kaybı vardır, yalnızca 5 puan düşer.",
    null,
    "Can kaybını unutma: 56 puan, düşen 5 puan hesaba katılmadan bulunur."
  ],
  aciklama: `Puan sorularında kazandıran ve düşüren kalemleri ayrı ayrı hesapla, sonra birleştir.
Adım 1: Altın 3 × 4 = 12, anahtar 2 × 10 = 20, düşman 4 × 6 = 24 puan kazandırır; toplam 56.
Adım 2: 1 can kaybı 5 puan düşürür: 56 − 5 = 51.
Sağlama: Dört kalemin dördü de kullanıldı.
Sık yapılan hata: Son adımdaki puan düşmesini unutmak.
Cevap C.`
},
{
  id: "tur-sm-033",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Pazarda dört satıcıdan her biri bal, zeytin, peynir ve reçelden farklı birini satmaktadır.
• Ali ile Berna ne bal ne de zeytin satmaktadır.
• Cem ne reçel ne de peynir satmaktadır.
• Dilek ne zeytin ne de reçel satmaktadır.

**Buna göre ürünler satıcılara kaç farklı biçimde dağılmış olabilir?**`,
  gorsel: null,
  secenekler: [
    "2",
    "3",
    "4",
    "6"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Fazladan bir durum sayma: zeytin ve bal tek biçimde yerleşir, yalnızca peynir ile reçelin iki satıcıya dağılışı değişir; bu da 2 durumdur.",
    "Kuralları eksik uygulama: Berna'nın da bal ve zeytin satmadığı atlanırsa olduğundan fazla durum sayılır.",
    "Elemesiz sayım: ürünlerin hepsini serbestçe dağıtınca 24 durum çıkar; kurallar bunu 2'ye indirir, 6'ya değil."
  ],
  aciklama: `Önce kesinleşen ürünleri yerleştir, sonra geriye kalan ürünlerin kaç biçimde dağılabileceğini say.
Adım 1: Bal ve zeytini Ali ile Berna satamaz; Cem ya da Dilek satmalıdır. Dilek zeytin satamaz, bu yüzden zeytin Cem'indir.
Adım 2: Bal geriye kalan Dilek'e gider.
Adım 3: Ali ile Berna peynir ve reçeli paylaşır: Ali peynir, Berna reçel ya da Ali reçel, Berna peynir. İki durum vardır.
Sağlama: Her iki durumda da bütün kuralların hepsi sağlanır.
Cevap A.`
},
{
  id: "tur-sm-034",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okulda satranç ve tiyatro kulüpleri vardır. Altı öğrencinin bu kulüplere katılıp katılmadığı tabloda gösterilmiştir (✓: katılıyor, ✗: katılmıyor).

**Buna göre bu kulüplerden en az birine katılan kaç öğrenci vardır?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Satranç</th><th>Tiyatro</th></tr><tr><td>Ali</td><td>✓</td><td>✗</td></tr><tr><td>Bora</td><td>✓</td><td>✓</td></tr><tr><td>Ceren</td><td>✗</td><td>✓</td></tr><tr><td>Deniz</td><td>✓</td><td>✓</td></tr><tr><td>Ece</td><td>✗</td><td>✗</td></tr><tr><td>Fırat</td><td>✓</td><td>✗</td></tr></table>`,
  secenekler: [
    "2",
    "3",
    "4",
    "5"
  ],
  dogru: 3,
  hatalar: [
    "Yalnızca iki kulübe de katılanları sayma: Bora ile Deniz'dir; \"en az bir\" ifadesi daha geniştir.",
    "Yalnızca tiyatroya katılanları sayma: Bora, Ceren ve Deniz'dir; satranççılar atlanmıştır.",
    "Yalnızca satranca katılanları sayma: Ali, Bora, Deniz ve Fırat'tır; yalnız tiyatroya katılan Ceren atlanmıştır.",
    null
  ],
  aciklama: `"En az bir" sözü, iki kulüpten yalnız birine ya da ikisine birden katılanların hepsini kapsar.
Adım 1: Satıra sırayla bak: Ali, Bora, Ceren, Deniz ve Fırat'ın satırlarında en az bir ✓ vardır.
Adım 2: Yalnız Ece'nin satırında iki ✗ vardır.
Adım 3: Altı öğrenciden Ece dışarıda kalır; 6 − 1 = 5 öğrenci en az bir kulübe katılıyor.
Sağlama: Satranç 4, tiyatro 3 öğrenci; iki kulübe katılan 2 öğrenci iki kez sayıldığı için 4 + 3 − 2 = 5.
Cevap D.`
},
{
  id: "tur-sm-035",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Bilgi yarışmasında Efe, Gül, Hira ve İsa; birinci, ikinci, üçüncü ve dördüncü olmuştur. Hiçbirinin sırası diğeriyle aynı değildir.
• Efe, Gül'den daha iyi bir sırada bitirmiştir.
• Hira, Gül'ün hemen arkasındaki sırada bitirmiştir.
• İsa birinci olmamıştır.

**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "Gül üçüncü olmuştur.",
    "Hira birinci olmuştur.",
    "İsa dördüncü olmuştur.",
    "İsa ikinci olmuştur."
  ],
  dogru: 1,
  hatalar: [
    "Olası durumu olamaz sanma: Efe, İsa, Gül, Hira sırasında Gül üçüncüdür.",
    null,
    "Olası durumu olamaz sanma: Efe, Gül, Hira, İsa sırasında İsa dördüncüdür.",
    "Olası durumu olamaz sanma: Efe, İsa, Gül, Hira sırasında İsa ikincidir."
  ],
  aciklama: `"Olamaz" kökünde kurallara uyan bütün durumları bul ve hiçbirinde gerçekleşmeyen şıkkı seç.
Adım 1: Hira, Gül'ün hemen arkasındadır; Gül-Hira ikilisi bir blok gibi düşünülür. Efe Gül'den öndedir.
Adım 2: Kurallara uyan iki diziliş vardır: Efe, Gül, Hira, İsa ve Efe, İsa, Gül, Hira.
Adım 3: Hira birinci olabilecek bir diziliş yoktur, çünkü Hira'nın önünde en az Gül ve Efe bulunur.
Sağlama: Diğer üç şık iki dizilişten birinde gerçekleşir.
Cevap B.`
},
{
  id: "tur-sm-036",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Sınıf başkanlığı seçiminde 8-A ve 8-B şubelerinde kullanılan oylar tabloda verilmiştir. İki şubedeki toplam oyu en çok olan aday başkan seçilecektir.

**Buna göre başkan seçilen aday kimdir?**`,
  gorsel: `<table class="tablo"><tr><th>Aday</th><th>8-A</th><th>8-B</th></tr><tr><td>Aylin</td><td>9</td><td>7</td></tr><tr><td>Barış</td><td>8</td><td>9</td></tr><tr><td>Cemre</td><td>11</td><td>5</td></tr><tr><td>Doruk</td><td>6</td><td>10</td></tr></table>`,
  secenekler: [
    "Barış",
    "Cemre",
    "Doruk",
    "Aylin"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tek şubeye bakma: Cemre 8-A'da en çok oyu almıştır ama toplamı 11 + 5 = 16'dır.",
    "Tek şubeye bakma: Doruk 8-B'de en çok oyu almıştır ama toplamı 6 + 10 = 16'dır.",
    "Toplamı yanlış hesaplama: Aylin'in toplamı 9 + 7 = 16'dır; en yüksek değildir."
  ],
  aciklama: `Karar ölçütü "toplam oy" ise iki sütunu satır satır toplamak gerekir; tek sütunda en yüksek olan aday kazanmak zorunda değildir.
Adım 1: Aylin 9 + 7 = 16, Barış 8 + 9 = 17, Cemre 11 + 5 = 16, Doruk 6 + 10 = 16.
Adım 2: En yüksek toplam 17 ile Barış'ındır.
Sık yapılan hata: Bir şubede birinci olanı genel birinci sanmak.
Cevap A.`
},
{
  id: "tur-sm-037",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kantinde şu kampanya uygulanmaktadır:
• Bir müşteri 3 ya da daha fazla tost alırsa 1 ayran hediye edilir.
• Bir müşteri 6 ya da daha fazla tost alırsa ayrıca 1 su da hediye edilir.

Dört müşterinin aldığı tost sayıları şöyledir: Ali 2, Bora 3, Cemre 6, Defne 5.

**Buna göre toplam 2 hediye ürün alan müşteri kimdir?**`,
  gorsel: null,
  secenekler: [
    "Ali",
    "Bora",
    "Cemre",
    "Defne"
  ],
  dogru: 2,
  hatalar: [
    "Kampanyayı uygulamama: 2 tost, 3 tost sınırının altında kaldığı için hiç hediye gelmez.",
    "Sadece ilk kuralı uygulama: 3 tost yalnızca 1 ayran kazandırır.",
    null,
    "İkinci kuralın sınırını yanlış okuma: 5 tost, 6 tostluk sınıra ulaşmaz; yalnız 1 ayran gelir."
  ],
  aciklama: `Kademeli kampanyalarda önce hangi sınıra ulaşıldığına bak, sonra o sınıra bağlı hediyeleri topla.
Adım 1: Ali (2 tost) hiçbir hediye alamaz.
Adım 2: Bora (3) ve Defne (5) yalnızca ayran kazanır, 1 hediye.
Adım 3: Cemre (6) hem ayran hem su kazanır, 2 hediye.
Sağlama: Yalnız 6 tost, ikinci kuralın "6 ya da daha fazla" şartını sağlıyor.
Cevap C.`
},
{
  id: "tur-sm-038",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Kaan, Lale, Mert ve Nur okul bahçesindeki bir sıranın dört yerine, soldan sağa 1'den 4'e kadar yan yana oturmuştur.
• Kaan, Mert'in hemen solundadır.
• Lale ile Nur yan yana oturmamıştır.

I. Lale, Kaan'ın solundadır.
II. Kaan, soldan ikinci yerdedir.
III. Mert, Lale ile Nur'un arasındadır.

**Buna göre numaralanmış ifadelerden hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Olası durumu kesin sanma: Lale-Kaan-Mert-Nur dizilişinde I doğrudur ama Nur-Kaan-Mert-Lale dizilişinde Lale en sağdadır.",
    "Seçeneği eksik bırakma: II doğrudur ama III de her iki dizilişte doğrudur.",
    "Olası durumu kesin sanma: I yalnızca bir dizilişte doğrudur.",
    null
  ],
  aciklama: `Öncüllü sorularda her öncülü, kurallara uyan bütün dizilişlerde ayrı ayrı sına.
Adım 1: Kaan-Mert ikilisi 1-2, 2-3 ya da 3-4. yerlerde olabilir. İkili 1-2'de ya da 3-4'teyse Lale ile Nur kalan iki bitişik yerde olur; bu yasaktır.
Adım 2: İkili 2-3. yerdedir; Lale ile Nur 1. ve 4. yerlerdedir. İki diziliş vardır: Lale, Kaan, Mert, Nur ve Nur, Kaan, Mert, Lale.
Adım 3: I yalnızca ilkinde doğrudur. II ve III ise iki dizilişte de doğrudur.
Sağlama: Her iki dizilişte Kaan ikinci yerde, Mert iki kişinin arasındadır.
Cevap D.`
},
{
  id: "tur-sm-039",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Bir sınıfın haftalık ders programından ilk üç ders aşağıdaki tabloda verilmiştir.

**Buna göre hem fen hem Türkçe dersi olan ve ilk dersi matematik olmayan gün hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>1. ders</th><th>2. ders</th><th>3. ders</th></tr><tr><td>Pazartesi</td><td>Matematik</td><td>Fen</td><td>Türkçe</td></tr><tr><td>Salı</td><td>Fen</td><td>İngilizce</td><td>Matematik</td></tr><tr><td>Çarşamba</td><td>Türkçe</td><td>Matematik</td><td>Müzik</td></tr><tr><td>Perşembe</td><td>İngilizce</td><td>Türkçe</td><td>Fen</td></tr><tr><td>Cuma</td><td>Matematik</td><td>Müzik</td><td>İngilizce</td></tr></table>`,
  secenekler: [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe"
  ],
  dogru: 3,
  hatalar: [
    "İkinci koşulu atlama: pazartesi fen ve Türkçe vardır ama ilk ders matematiktir.",
    "İlk koşulu atlama: salı günü fen vardır ama Türkçe dersi yoktur.",
    "İlk koşulu atlama: çarşamba günü Türkçe vardır ama fen dersi yoktur.",
    null
  ],
  aciklama: `Üç ayrı koşulu sırayla uygula ve her adımda uymayan günleri ele.
Adım 1: Hem fen hem Türkçe olan günler: pazartesi ve perşembe.
Adım 2: İlk dersi matematik olan pazartesi elenir.
Adım 3: Perşembenin ilk dersi İngilizcedir; üç koşulun üçünü de perşembe sağlar.
Sağlama: Perşembe günü ders sırası İngilizce, Türkçe, fen; fen ve Türkçe var, matematik ilk ders değil.
Cevap D.`
},
{
  id: "tur-sm-040",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Üç arkadaş okul koşusunda yarışmış, aynı anda bitiren olmamıştır. Kerem, Leyla'dan önce bitirmiştir.

**Buna göre aşağıdaki bilgilerden hangisi tek başına bilinirse üç kişinin bitiş sırası kesin olarak belirlenir?**`,
  gorsel: null,
  secenekler: [
    "Leyla son bitirmiştir.",
    "Melis birinci bitirmiştir.",
    "Kerem birinci bitirmiştir.",
    "Melis, Leyla'dan önce bitirmiştir."
  ],
  dogru: 1,
  hatalar: [
    "Durumu yeterli sanma: Leyla sonda ise Kerem, Melis, Leyla ya da Melis, Kerem, Leyla olabilir.",
    null,
    "Durumu yeterli sanma: Kerem birinciyse Leyla ile Melis'in sırası belirsiz kalır.",
    "Durumu yeterli sanma: Melis, Leyla'dan önceyse Melis, Kerem, Leyla ya da Kerem, Melis, Leyla olabilir."
  ],
  aciklama: `"Hangisi bilinirse kesin belirlenir?" sorusunda her şıkkı mevcut bilgiye ekleyip kaç diziliş kaldığını say.
Adım 1: Yalnızca ilk bilgiyle üç diziliş vardır: Kerem, Leyla, Melis; Kerem, Melis, Leyla; Melis, Kerem, Leyla.
Adım 2: "Leyla son" iki dizilişte (ikinci ve üçüncü), "Kerem birinci" iki dizilişte (birinci ve ikinci), "Melis, Leyla'dan önce" iki dizilişte (ikinci ve üçüncü) doğrudur.
Adım 3: "Melis birinci" yalnızca üçüncü dizilişte doğrudur: Melis, Kerem, Leyla.
Sağlama: Bu bilgiyle üç kişi için tek diziliş kalır.
Cevap B.`
},
{
  id: "tur-sm-041",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Kargo şirketinde dört koli tartılmıştır; hiçbirinin ağırlığı bir diğerine eşit değildir.
• Pembe koli, mavi koliden ağırdır.
• Mavi koli, yeşil koliden ağırdır.
• Sarı koli, yeşil koliden ağırdır.

**Buna göre aşağıdakilerden hangisi kesin olarak __bilinemez__?**`,
  gorsel: null,
  secenekler: [
    "Sarı koli, mavi koliden ağırdır.",
    "Yeşil koli, pembe koliden hafiftir.",
    "Yeşil koli, mavi koliden hafiftir.",
    "Yeşil koli en hafif kolidir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Zinciri takip etmeme: pembe > mavi > yeşil olduğundan yeşil, pembeden kesinlikle hafiftir.",
    "Kuralı ters okuma: mavi koli yeşilden ağır olduğuna göre yeşil, maviden hafiftir; bu kesin bilinir.",
    "Zinciri yarım bırakma: yeşil hem maviden hem sarıdan hem de pembeden hafiftir; en hafif kolidir."
  ],
  aciklama: `Karşılaştırma zincirinde yalnızca doğrudan ya da zincirle bağlanan koliler kıyaslanabilir; bağlanmayanlar bilinemez.
Adım 1: Pembe > mavi > yeşil zinciri vardır; sarı ise yalnızca yeşille karşılaştırılmıştır (sarı > yeşil).
Adım 2: Yeşil hepsinden hafiftir; B, C ve D şıkları zincirden kesin çıkar.
Adım 3: Sarı ile mavi arasında bir bilgi yoktur; sarı mavi kadar ağır da olabilir daha hafif de.
Sağlama: Sarı, yeşilin üstünde bir yere gelir ama mavinin altında da üstünde de olabilir.
Cevap A.`
},
{
  id: "tur-sm-042",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Drama kulübü, okul salonunu aralıksız iki saat süreyle kullanmak istemektedir. Salonun bu hafta bazı günlerdeki saatlik doluluk durumu tabloda gösterilmiştir. Her hücre bir saatlik oturumu gösterir.

**Buna göre kulüp salonu hangi gün istediği gibi kullanabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>13:00</th><th>14:00</th><th>15:00</th></tr><tr><td>Pazartesi</td><td>Dolu</td><td>Boş</td><td>Dolu</td></tr><tr><td>Salı</td><td>Boş</td><td>Dolu</td><td>Boş</td></tr><tr><td>Çarşamba</td><td>Dolu</td><td>Boş</td><td>Boş</td></tr><tr><td>Perşembe</td><td>Boş</td><td>Dolu</td><td>Dolu</td></tr></table>`,
  secenekler: [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe"
  ],
  dogru: 2,
  hatalar: [
    "Boş saatleri toplama: pazartesi yalnızca bir saat boştur.",
    "Aralıksız şartını atlama: salı günü iki saat boştur ama araya dolu bir saat girer.",
    null,
    "Boş saati yeterli sanma: perşembe günü yalnız 13:00 boştur."
  ],
  aciklama: `"Aralıksız" sözü, boş iki saatin art arda gelmesini ister; ayrı ayrı iki boş saat işe yaramaz.
Adım 1: Her satırda yan yana iki "Boş" hücresi ara.
Adım 2: Salı günü boş saatler 13:00 ve 15:00'tir; ikisinin arasında 14:00 dolu olduğundan aralıksız değildir.
Adım 3: Çarşamba günü 14:00 ve 15:00 art arda boştur.
Sağlama: 14:00-16:00 arası çarşamba günü kesintisiz kullanılabilir.
Cevap C.`
},
{
  id: "tur-sm-043",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Bilgi yarışması için Ali, Bora, Cem ve Deniz arasından iki kişilik bir ekip kurulacaktır. Ekip için şu kurallar belirlenmiştir:
• Ali ile Bora aynı ekipte yer alamaz.
• Cem ekipte yer alıyorsa Deniz de ekipte yer almalıdır.

**Buna göre kurulabilecek her ekipte kesinlikle yer alan öğrenci kimdir?**`,
  gorsel: null,
  secenekler: [
    "Cem",
    "Deniz",
    "Ali",
    "Bora"
  ],
  dogru: 1,
  hatalar: [
    "Koşulu ters okuma: Cem varsa Deniz de olmalıdır; ama Cem olmadan da (Ali-Deniz, Bora-Deniz) ekip kurulur.",
    null,
    "Tek bir ekibe bakma: Ali-Deniz ekibinde Ali vardır ama Bora-Deniz ve Cem-Deniz ekiplerinde yoktur.",
    "Tek bir ekibe bakma: Bora-Deniz ekibinde Bora vardır ama Ali-Deniz ve Cem-Deniz ekiplerinde yoktur."
  ],
  aciklama: `İki kişilik bütün ekipleri yaz, kurallara uymayanları ele.
Adım 1: Altı olası ekip vardır: Ali-Bora, Ali-Cem, Ali-Deniz, Bora-Cem, Bora-Deniz, Cem-Deniz.
Adım 2: Ali-Bora birinci kuralı bozar; Ali-Cem ve Bora-Cem, Cem var Deniz yok olduğu için ikinci kuralı bozar.
Adım 3: Geriye Ali-Deniz, Bora-Deniz ve Cem-Deniz kalır; üçünde de Deniz vardır.
Sağlama: Deniz üç ekibin üçünde de yer alıyor.
Cevap B.`
},
{
  id: "tur-sm-044",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Bir botanik parkında bilet ücretleri yaşa göre belirlenmiştir:
• 0-6 yaş arası ziyaretçiler ücretsiz girer.
• 7-12 yaş arası ziyaretçiler yarım bilet alır.
• 13 yaş ve üzeri ziyaretçiler tam bilet alır; ancak 65 yaş ve üzeri ziyaretçiler yarım bilet alır.

**Buna göre aşağıdaki ziyaretçilerden hangisi tam bilet almak zorundadır?**`,
  gorsel: null,
  secenekler: [
    "Ayşe (12 yaşında)",
    "Bülent (7 yaşında)",
    "Ceylan (65 yaşında)",
    "Davut (13 yaşında)"
  ],
  dogru: 3,
  hatalar: [
    "Sınırı bir fazla alma: 12 yaş, 7-12 aralığının içindedir; Ayşe yarım bilet alır.",
    "Sınırı bir eksik alma: 7 yaş, 7-12 aralığının içindedir; Bülent yarım bilet alır.",
    "İstisnayı atlama: 65 yaş ve üzeri ziyaretçiler tam bilet değil, yarım bilet alır.",
    null
  ],
  aciklama: `Yaş aralığı kurallarında sınır değerlerin hangi gruba girdiğine dikkat et; istisna genel kuralı değiştirir.
Adım 1: 12 yaş 7-12 aralığındadır: yarım bilet.
Adım 2: 7 yaş da aynı aralıktadır: yarım bilet.
Adım 3: 65 yaş "13 ve üzeri" gruptadır ama istisna gereği yarım bilet alır.
Adım 4: 13 yaş tam biletin başladığı yaştır ve istisna kapsamında değildir.
Sağlama: Dört ziyaretçiden yalnız Davut tam bilet öder.
Cevap D.`
},
{
  id: "tur-sm-045",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `İki şehirde ilk dört ayda ölçülen yağış miktarları (mm) tabloda verilmiştir.

**Buna göre her iki şehirde de yağış miktarının 50 mm'den fazla olduğu ay hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Ay</th><th>Şehir X</th><th>Şehir Y</th></tr><tr><td>Ocak</td><td>60</td><td>70</td></tr><tr><td>Şubat</td><td>40</td><td>55</td></tr><tr><td>Mart</td><td>80</td><td>45</td></tr><tr><td>Nisan</td><td>55</td><td>48</td></tr></table>`,
  secenekler: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bir şehre bakma: Şubat'ta Şehir Y'de 55 mm vardır ama Şehir X'te 40 mm'dir.",
    "Bir şehre bakma: Mart'ta Şehir X'te 80 mm vardır ama Şehir Y'de 45 mm'dir.",
    "Sınıra yakın değeri geçmiş sayma: Nisan'da Şehir Y'de 48 mm vardır, 50'nin altındadır."
  ],
  aciklama: `"Her iki şehirde de" sözü, iki sütunun aynı satırda koşulu birlikte sağlamasını ister.
Adım 1: Şehir X'te 50'den fazla olan aylar: Ocak (60), Mart (80), Nisan (55).
Adım 2: Bu aylarda Şehir Y'ye bak: Ocak 70 (uygun), Mart 45 ve Nisan 48 (50'nin altında).
Adım 3: İki şehirde birden 50 mm'yi aşan tek ay Ocak'tır.
Sağlama: Ocak'ta 60 ve 70 değerlerinin ikisi de 50'den büyük.
Cevap A.`
},
{
  id: "tur-sm-046",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Ece, Fırat, Gül ve Halil, soldan sağa 1'den 4'e kadar numaralanmış dört sandalyeye birer kişi olacak biçimde oturmuştur.
• Ece ile Fırat'ın arasında tam bir kişi oturmaktadır.
• Gül en soldaki sandalyede oturmamaktadır.
• Halil, Ece'nin hemen sağındaki sandalyede oturmamaktadır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Halil, Ece'nin solunda oturmaktadır.",
    "Gül ile Halil yan yana oturmamaktadır.",
    "Fırat, Gül'ün solunda oturmamaktadır.",
    "Ece, Halil'in sağında oturmaktadır."
  ],
  dogru: 1,
  hatalar: [
    "Olası durumu kesin sanma: Ece-Gül-Fırat-Halil dizilişinde Halil, Ece'nin sağındadır.",
    null,
    "Olası durumu kesin sanma: Fırat-Halil-Ece-Gül dizilişinde Fırat, Gül'ün solundadır.",
    "Olası durumu kesin sanma: Ece-Gül-Fırat-Halil dizilişinde Ece, Halil'in solundadır."
  ],
  aciklama: `Kesinlik için kurallara uyan bütün dizilişleri bul ve her şıkkı hepsinde dene.
Adım 1: Ece ile Fırat 1-3, 3-1, 2-4 ya da 4-2. sandalyelerdedir; Gül ile Halil kalan iki sandalyeyi paylaşır.
Adım 2: Gül'ün 1. sandalyede olmaması ve Halil'in Ece'nin hemen sağında olmaması dört dizilişi bırakır: Ece, Gül, Fırat, Halil; Fırat, Halil, Ece, Gül; Halil, Ece, Gül, Fırat; Halil, Fırat, Gül, Ece.
Adım 3: Dördünde de Gül ile Halil yan yana değildir. Diğer şıklar bir dizilişte yanlıştır.
Sağlama: Dört dizilişte Gül ile Halil'in sandalye numaraları farkı en az 2'dir.
Cevap B.`
},
{
  id: "tur-sm-047",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okul kütüphanesi, ayırtılan kitapları ayırtma gününden sonraki 2. iş gününde teslime hazır etmektedir. Cumartesi ve pazar iş günü sayılmaz. Dört öğrenci kitaplarını şu günlerde ayırtmıştır: Ali salı, Bora çarşamba, Ceren perşembe, Deniz cuma.

**Buna göre kitabı pazartesi günü hazır olan öğrenci kimdir?**`,
  gorsel: null,
  secenekler: [
    "Ali",
    "Bora",
    "Ceren",
    "Deniz"
  ],
  dogru: 2,
  hatalar: [
    "Sayım hatası: salı günü ayırtılan kitap, ikinci iş günü olan perşembe hazır olur.",
    "Sayım hatası: çarşamba günü ayırtılan kitap, ikinci iş günü olan cuma hazır olur.",
    null,
    "Hafta sonunu atlama hatası: cumadan sonraki 1. iş günü pazartesi, 2. iş günü salıdır; kitap salı hazır olur."
  ],
  aciklama: `İş günü sayarken cumartesi ve pazarı atla; hafta sonuna denk gelen sayımı pazartesiden devam ettir.
Adım 1: Ali salı: çarşamba (1), perşembe (2). Perşembe.
Adım 2: Bora çarşamba: perşembe (1), cuma (2). Cuma.
Adım 3: Ceren perşembe: cuma (1), pazartesi (2). Pazartesi.
Adım 4: Deniz cuma: pazartesi (1), salı (2). Salı.
Sağlama: Yalnız Ceren'in kitabı pazartesi gününe denk gelir.
Cevap C.`
},
/* ===================== DÜZEY 3 ===================== */
{
  id: "tur-sm-048",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Bir yaz spor okulunda yüzme, tenis, basketbol ve jimnastik branşları vardır. Okulun kayıt kuralları şunlardır:
• Bir öğrenci en çok iki branşa kayıt olabilir.
• Tenis ile basketbol aynı saatte yapıldığı için ikisine birden kayıt olunamaz.
• Yüzme branşına kayıt olan öğrenci jimnastik branşına da kayıt olmak zorundadır.

Dört öğrencinin kayıt oldukları branşlar şöyledir:
• Ada: yüzme, tenis
• Berk: yüzme, jimnastik
• Ceren: tenis, basketbol, jimnastik
• Defne: tenis, basketbol

**Buna göre hangi öğrencinin kaydı kurallara uygundur?**`,
  gorsel: null,
  secenekler: [
    "Ada",
    "Berk",
    "Ceren",
    "Defne"
  ],
  dogru: 1,
  hatalar: [
    "Üçüncü kuralı atlama: Ada yüzmeye kayıt olmuştur ama jimnastiğe kayıt olmamıştır.",
    null,
    "Birden çok kuralı atlama: Ceren üç branşa kayıt olmuş ve tenisle basketbolu birlikte seçmiştir.",
    "İkinci kuralı atlama: Defne tenis ile basketbola birlikte kayıt olmuştur."
  ],
  aciklama: `Birden çok kural varsa her öğrenciyi kuralların hepsiyle tek tek sına; birini bile bozan eler.
Adım 1: Ada yüzmeye kayıtlı ama jimnastiğe kayıtlı değil; üçüncü kural bozuluyor.
Adım 2: Ceren üç branşa kayıtlı (birinci kural) ve tenis ile basketbol birlikte (ikinci kural) bozuluyor.
Adım 3: Defne tenis ve basketbolu birlikte almış; ikinci kural bozuluyor.
Adım 4: Berk iki branşa kayıtlı, tenis-basketbol çifti yok, yüzme yanında jimnastik var; üç kural da sağlanıyor.
Sağlama: Berk'in kaydında hiçbir kural çiğnenmiyor.
Cevap B.`
},
{
  id: "tur-sm-049",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Bir pazar yerinde balık, sebze, peynir, bal ve baharat tezgâhları soldan sağa 1'den 5'e kadar numaralı beş yere birer tane kurulacaktır.
• Sebze tezgâhı en soldaki yere kurulacaktır.
• Bal tezgâhı, peynir tezgâhının hemen sağındaki yere kurulacaktır.
• Baharat ile balık tezgâhlarının arasında tam iki tezgâh bulunacaktır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Balık tezgâhı 2. yerdedir.",
    "Baharat tezgâhı 5. yerdedir.",
    "Peynir tezgâhı 3. yerdedir.",
    "Bal tezgâhı 5. yerdedir."
  ],
  dogru: 2,
  hatalar: [
    "Olası durumu kesin sanma: balık 2. yerde olabilir ama baharat 2. yerdeyken balık 5. yerdedir.",
    "Olası durumu kesin sanma: baharat 5. yerde olabilir ama balık 5. yerdeyken baharat 2. yerdedir.",
    null,
    "Bal tezgâhının yerini yanlış bulma: bal, peynirin hemen sağındadır ve 4. yerdedir."
  ],
  aciklama: `Önce kesin yerleşeni koy, sonra "arasında tam iki" gibi kuralın hangi yer çiftlerine izin verdiğine bak.
Adım 1: Sebze 1. yerdedir; diğer dört tezgâh 2-5. yerlere dağılır.
Adım 2: Aralarında tam iki tezgâh olan iki yer, 2-5 aralığında yalnızca 2. ve 5. yerlerdir. Balık ile baharat bu iki yeri paylaşır.
Adım 3: Peynir ve bal 3. ve 4. yerlere kalır; bal peynirin hemen sağında olduğundan peynir 3., bal 4. yerdedir.
Sağlama: Balık 2 ve baharat 5 ya da balık 5 ve baharat 2; iki durumda da peynir 3. yerdedir.
Cevap C.`
},
{
  id: "tur-sm-050",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Meryem'in evi Park durağının yanındadır. Okula ulaşmak için hem Park hem Okul durağına uğrayan ve 08:00'den önce kalkan bir servis hattı seçecektir. Hatların kalkış saatleri ve uğradığı duraklar tabloda gösterilmiştir (✓: uğruyor, ✗: uğramıyor).

**Buna göre Meryem hangi hattı seçmelidir?**`,
  gorsel: `<table class="tablo"><tr><th>Hat</th><th>Kalkış</th><th>Park</th><th>Okul</th><th>Hastane</th></tr><tr><td>Hat 1</td><td>07:30</td><td>✓</td><td>✓</td><td>✗</td></tr><tr><td>Hat 2</td><td>08:15</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Hat 3</td><td>07:45</td><td>✗</td><td>✓</td><td>✓</td></tr><tr><td>Hat 4</td><td>07:50</td><td>✓</td><td>✗</td><td>✓</td></tr><tr><td>Hat 5</td><td>08:30</td><td>✗</td><td>✗</td><td>✓</td></tr></table>`,
  secenekler: [
    "Hat 1",
    "Hat 2",
    "Hat 3",
    "Hat 4"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Saat koşulunu atlama: Hat 2 iki durağa da uğrar ama 08:15'te kalkar.",
    "Durak koşulunu atlama: Hat 3 saatine uygundur ve Okul'a uğrar ama Park durağına uğramaz.",
    "Durak koşulunu atlama: Hat 4 saatine uygundur ve Park'a uğrar ama Okul durağına uğramaz."
  ],
  aciklama: `Birden çok koşul varsa tabloyu koşul koşul süz: her adımda uymayan satırları ele.
Adım 1: Park durağına uğrayan hatlar: 1, 2 ve 4.
Adım 2: Bunlar içinde Okul'a da uğrayanlar: 1 ve 2 (Hat 4 elenir).
Adım 3: 08:00'den önce kalkan olan Hat 1'dir (07:30). Hat 2, 08:15'te kalkar ve elenir.
Sağlama: Hat 1 Park ve Okul'a uğruyor, 07:30'da kalkıyor; üç koşul da sağlanıyor.
Cevap A.`
},
{
  id: "tur-sm-051",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Kırmızı, Mavi, Yeşil ve Sarı takımlar bir robot parkurunu farklı sürelerde bitirmiştir; hiçbir iki takım aynı anda bitirmemiştir.
• Kırmızı takım, Mavi takımdan önce bitirmiştir.
• Yeşil takım ne ilk ne de son bitiren takımdır.
• Sarı takım, Yeşil takımdan sonra bitirmiştir.

I. Mavi takım son bitiren takımdır.
II. Sarı takım son bitiren takımdır.
III. Kırmızı takım, Yeşil takımdan önce bitirmiştir.

**Buna göre numaralanmış ifadelerden hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "Yalnız III"
  ],
  dogru: 3,
  hatalar: [
    "Olası durumu kesin sanma: Mavi takım yalnızca bir dizilişte sonuncudur.",
    "I ve II'yi birlikte kesin sanma: Mavi ve Sarı aynı anda son olamaz; her biri yalnız bazı sıralamalarda sonuncudur.",
    "II'yi kesin sanma: Sarı iki dizilişte sonuncudur, üçüncü dizilişte Mavi sonuncudur.",
    null
  ],
  aciklama: `Önce kurallara uyan bütün sıralamaları yaz, sonra her öncülü hepsinde dene.
Adım 1: Yeşil 2. ya da 3. sıradadır. Yeşil 2. ise Sarı 3. ya da 4.; Yeşil 3. ise Sarı 4. sıradadır.
Adım 2: Kırmızı Mavi'den önce olacak biçimde üç sıralama çıkar: Kırmızı-Mavi-Yeşil-Sarı, Kırmızı-Yeşil-Mavi-Sarı, Kırmızı-Yeşil-Sarı-Mavi.
Adım 3: I yalnız üçüncüde, II ilk ikisinde doğrudur. III ise üçünde de doğrudur: Kırmızı hep birinci.
Sağlama: Yalnız III her sıralamada doğru.
Cevap D.`
},
{
  id: "tur-sm-052",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Bir bilgisayar oyununda karakter, yeteneklerini açarken şu kurallara uymak zorundadır:
• Ateş yeteneği açıksa güç yeteneği de açık olmalıdır.
• Buz yeteneği açıksa ateş yeteneği de açık olmalıdır.
• Kalkan yeteneği açıksa güç yeteneği de açık olmalıdır.
• Buz ve kalkan yetenekleri aynı anda açık olamaz.
Hız yeteneği için herhangi bir kural yoktur.

**Buna göre aşağıdaki yetenek setlerinden hangisi kurallara uygundur?**`,
  gorsel: null,
  secenekler: [
    "Güç, ateş, buz, hız",
    "Ateş, buz, kalkan, hız",
    "Güç, buz, kalkan, hız",
    "Güç, ateş, buz, kalkan"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Birinci kuralı atlama: ateş açıkken güç de açık olmalıdır, bu sette güç yoktur.",
    "İkinci kuralı atlama: buz açıkken ateş de açık olmalıdır, bu sette ateş yoktur; ayrıca buz ve kalkan birliktedir.",
    "Dördüncü kuralı atlama: buz ve kalkan aynı anda açık olamaz."
  ],
  aciklama: `Bağımlılık kurallarında "A açıksa B de açık olmalıdır" sözü, A'nın B'siz kullanılamayacağını söyler.
Adım 1: İlk sette ateş için güç, buz için ateş var; kalkan yok, dolayısıyla dördüncü kural da çiğnenmez. Hız serbesttir.
Adım 2: İkinci sette ateş var ama güç yok; birinci kural bozulur.
Adım 3: Üçüncü sette buz var ama ateş yok, üstelik buz ve kalkan birliktedir; kurallar bozulur.
Adım 4: Dördüncü sette buz ve kalkan aynı anda açıktır; dördüncü kural bozulur.
Sağlama: Birinci sette dört kuralın dördü de sağlanıyor.
Cevap A.`
},
{
  id: "tur-sm-053",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Okullar arası bir zekâ oyunları liginde her takım 7 maç oynamıştır. Galibiyet 2, beraberlik 1, mağlubiyet 0 puan getirmektedir. Maç sonuçları tabloda verilmiştir.

**Buna göre en çok puan toplayan takım hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Takım</th><th>Galibiyet</th><th>Beraberlik</th><th>Mağlubiyet</th></tr><tr><td>Aslan</td><td>5</td><td>0</td><td>2</td></tr><tr><td>Panter</td><td>3</td><td>2</td><td>2</td></tr><tr><td>Şahin</td><td>2</td><td>5</td><td>0</td></tr><tr><td>Kaplan</td><td>4</td><td>3</td><td>0</td></tr></table>`,
  secenekler: [
    "Aslan",
    "Panter",
    "Şahin",
    "Kaplan"
  ],
  dogru: 3,
  hatalar: [
    "Yalnız galibiyete bakma: Aslan en çok galibiyete sahiptir ama 5 × 2 = 10 puanla Kaplan'ın 11 puanının gerisindedir.",
    "Puanı yanlış hesaplama: Panter 3 × 2 + 2 = 8 puandır.",
    "Beraberliği hesaba az katma: Şahin 2 × 2 + 5 = 9 puandır.",
    null
  ],
  aciklama: `Puan sıralaması için her takımın puanını ayrı hesapla: galibiyet sayısını 2 ile çarp, beraberlik sayısını ekle.
Adım 1: Aslan 5 × 2 + 0 = 10, Panter 3 × 2 + 2 = 8.
Adım 2: Şahin 2 × 2 + 5 = 9, Kaplan 4 × 2 + 3 = 11.
Adım 3: En yüksek puan 11 ile Kaplan'ındır.
Sık yapılan hata: En çok galibiyeti olan takımı lider sanmak. Beraberlikler de puan getirir.
Cevap D.`
},
{
  id: "tur-sm-054",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Okul şenliğinde sahne, ses, kayıt ve ikram görevleri dört arkadaşa dağıtılacaktır: Eda, Faruk, Gizem ve Hakan. Her görevi tam olarak bir kişi üstlenecek, her kişi de tam olarak bir görev alacaktır. Dağıtım kuralları şunlardır:
• Eda, sahne ya da ses görevini alır.
• Faruk, ikram görevini almaz.
• Hakan, kayıt görevini almaz.
• Eda sahne görevini alıyorsa Faruk ses görevini almalıdır.

**Buna göre kurallara uygun kaç farklı görev dağılımı yapılabilir?**`,
  gorsel: null,
  secenekler: [
    "3",
    "4",
    "5",
    "6"
  ],
  dogru: 1,
  hatalar: [
    "Bir dağılımı atlama: Eda ses, Faruk sahne, Gizem kayıt, Hakan ikram dağılımı da kurallara uyar; kurallara uyan dört dağılım vardır.",
    null,
    "Kuralı atlama: Faruk'un ikram görevini alamayacağı atlanırsa 5 dağılım bulunur; oysa Faruk'un ikram aldığı dağılım kurala uymaz.",
    "Kuralları eksik uygulama: Hakan'ın kayıt almama kuralı ya da son kural atlanırsa 6 dağılım bulunur; oysa her kural uygulanmalıdır."
  ],
  aciklama: `Önce kesinleşen eşleşmeleri bul, sonra geriye kalan görevlerin kaç biçimde dağılabileceğini say.
Adım 1: Eda sahne ya da ses alır. Faruk ikram, Hakan kayıt alamaz.
Adım 2: Eda sahne alırsa Faruk ses almalıdır. Kalan kayıt ve ikramı Gizem ile Hakan paylaşır; Hakan kayıt alamayacağı için Hakan ikram, Gizem kayıt alır. Bu durumda tek dağılım vardır.
Adım 3: Eda ses alırsa Faruk sahne ya da kayıt alır. Faruk sahne alırsa Hakan ikram, Gizem kayıt alır: 1 dağılım. Faruk kayıt alırsa Gizem ile Hakan sahne ve ikramı iki biçimde paylaşır (Gizem sahne-Hakan ikram ya da Gizem ikram-Hakan sahne): 2 dağılım.
Adım 4: Toplam 1 + 1 + 2 = 4 dağılım vardır.
Sağlama: Dört dağılımın her biri dört kuralı da sağlıyor.
Cevap B.`
},
{
  id: "tur-sm-055",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kış gününde şu bilgiler bilinmektedir:
• Hava soğuksa Mert eşarp takar.
• Mert eşarp takarsa Nil de eşarp takar.
• Nil eşarp takarsa Oya eldiven giyer.

Oya bugün eldiven giymemiştir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Mert eşarp takmıştır.",
    "Nil eşarp takmıştır.",
    "Hava soğuk değildir.",
    "Mert eldiven giymemiştir."
  ],
  dogru: 2,
  hatalar: [
    "Zinciri ters yürütme: Oya eldiven giymediğine göre Nil eşarp takmamıştır; Mert de takmamıştır.",
    "Zinciri ters yürütme: Nil eşarp takmış olsaydı Oya eldiven giyerdi.",
    null,
    "Metinde olmayan bilgiyi ekleme: Mert'in eldiven giyip giymediği hakkında hiçbir bilgi verilmemiştir."
  ],
  aciklama: `Uzun bir koşul zincirinde son halka gerçekleşmediyse, zincirde geri doğru her halka da gerçekleşmemiştir.
Adım 1: Oya eldiven giymediğine göre Nil eşarp takmamıştır (takmış olsaydı Oya giyerdi).
Adım 2: Nil takmadığına göre Mert eşarp takmamıştır (takmış olsaydı Nil de takardı).
Adım 3: Mert takmadığına göre hava soğuk değildir (soğuk olsaydı Mert takardı).
Sağlama: Hava soğuk değil, Mert ve Nil eşarpsız, Oya eldivensiz; hiçbir kuralla çelişmiyor.
Cevap C.`
},
{
  id: "tur-sm-056",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Yaz okulundaki kursların kontenjanları ve başvuru sayıları tabloda verilmiştir. Kayıt kuralları şunlardır:
• Başvuru sayısı kontenjanı aşan kursta, fazla başvuranlar kabul edilmez.
• Başvuru sayısı 10'dan az olan kurs açılmaz; o kursa başvuranların hiçbiri kabul edilmez.
• Boş kalan yerler başka kurslara aktarılmaz.

**Buna göre toplam kaç öğrencinin başvurusu kabul edilmeyecektir?**`,
  gorsel: `<table class="tablo"><tr><th>Kurs</th><th>Kontenjan</th><th>Başvuran</th></tr><tr><td>Resim</td><td>20</td><td>24</td></tr><tr><td>Müzik</td><td>15</td><td>16</td></tr><tr><td>Satranç</td><td>12</td><td>9</td></tr><tr><td>Dans</td><td>18</td><td>21</td></tr></table>`,
  secenekler: [
    "8",
    "9",
    "13",
    "17"
  ],
  dogru: 3,
  hatalar: [
    "Açılmayan kursu atlama: yalnızca kontenjanı aşan kursların fazlası (4 + 1 + 3 = 8) hesaplanmış, 10'dan az başvurusu olan Satranç kursu unutulmuştur.",
    "Kontenjan fazlasını atlama: yalnızca açılmayan Satranç kursunun 9 başvuranı sayılmış, diğer üç kursun fazlası unutulmuştur.",
    "Kursları eksik toplama: Resim fazlası (4) ile Satranç'ın 9 başvuranı toplanmış, Müzik ve Dans fazlaları unutulmuştur.",
    null
  ],
  aciklama: `Önce hangi kursların açıldığını belirle, sonra açılan kurslarda kontenjan fazlasını bul; kabul edilmeyenleri topla.
Adım 1: Başvuranı 10'dan az olan kurs açılmaz. Satranç kursuna 9 kişi başvurmuştur; kurs açılmaz ve 9 öğrenci kabul edilmez. Diğer kursların başvuru sayıları 10'un üzerindedir.
Adım 2: Açılan kurslarda fazlayı bul: Resim 24 − 20 = 4, Müzik 16 − 15 = 1, Dans 21 − 18 = 3 öğrenci kabul edilmez.
Adım 3: Toplam 9 + 4 + 1 + 3 = 17 öğrenci kabul edilmez.
Sık yapılan hata: Satranç kursunda kontenjan boş kalıyor diye bu kursu "sorunsuz" sanmak. Kurs hiç açılmıyorsa başvuranların hepsi dışarıda kalır.
Cevap D.`
},
{
  id: "tur-sm-057",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Ayşe, Burak ve Ceren; salı, çarşamba ve perşembe günlerinin her birinde farklı birer ders almaktadır. Dersler piyano, yüzme ve resimdir; her gün yalnızca bir ders yapılır ve her öğrenci yalnızca kendi dersine katılır.
• Ayşe salı günü derse gitmektedir.
• Piyano dersi, yüzme dersinden önceki bir günde yapılır.
• Resim dersi çarşamba günü yapılmaz.
• Ceren resim dersine gitmemektedir.
• Burak, Ceren'den sonraki bir günde derse gitmektedir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Ayşe, piyano dersine salı günü gider.",
    "Burak, perşembe günü derse gider.",
    "Ceren, yüzme dersine perşembe günü gider.",
    "Burak, yüzme dersine çarşamba günü gider."
  ],
  dogru: 1,
  hatalar: [
    "Olası durumu kesin sanma: Ayşe salı günü piyano dersine gidebilir ama salı günü resim dersi de yapılabilir.",
    null,
    "Günleri yanlış yerleştirme: Ayşe salı, Ceren çarşamba, Burak perşembe günü gider; Ceren perşembe gidemez.",
    "Günleri yanlış yerleştirme: Burak perşembe günü gider, çarşamba günü gidemez."
  ],
  aciklama: `Gün ve ders gibi iki özelliği olan sorularda önce kişileri günlere, sonra dersleri günlere yerleştir.
Adım 1: Ayşe salıdır. Burak, Ceren'den sonra gittiğine göre Ceren çarşamba, Burak perşembe günü derse gider.
Adım 2: Resim çarşamba olmadığı için salı ya da perşembe günü yapılır; piyano yüzmeden önce olduğundan iki ders-gün dizilişi çıkar: (salı piyano, çarşamba yüzme, perşembe resim) ya da (salı resim, çarşamba piyano, perşembe yüzme).
Adım 3: Ceren resme gitmez; iki dizilişte de çarşamba günü resim yok. Dersler iki biçimde dağılsa da Burak her durumda perşembe günü gider.
Sağlama: A şıkkı yalnızca birinci dizilişte doğrudur; C ve D hiçbir dizilişte doğru değildir.
Cevap B.`
},
{
  id: "tur-sm-058",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Bir vakfın burs kuralı şöyledir: "Matematik, fen ve Türkçe sınavlarının en az ikisinden 80 ya da üzeri puan almış ve hiçbirinden 60'ın altında puan almamış öğrenciler burs alabilir." Dört öğrencinin sınav puanları tabloda verilmiştir.

**Buna göre burs alabilecek öğrenci kimdir?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Matematik</th><th>Fen</th><th>Türkçe</th></tr><tr><td>Ada</td><td>80</td><td>79</td><td>85</td></tr><tr><td>Barış</td><td>90</td><td>70</td><td>75</td></tr><tr><td>Cem</td><td>85</td><td>90</td><td>55</td></tr><tr><td>Deniz</td><td>60</td><td>60</td><td>95</td></tr></table>`,
  secenekler: [
    "Ada",
    "Barış",
    "Cem",
    "Deniz"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Birinci koşulu atlama: Barış yalnız bir sınavdan 80 ve üzeri almıştır.",
    "İkinci koşulu atlama: Cem iki sınavdan 80'in üzerine çıkmıştır ama Türkçeden 60'ın altında (55) almıştır.",
    "Birinci koşulu atlama: Deniz yalnız Türkçeden 80 ve üzeri almıştır; 60 puan sınırdadır ve uygundur."
  ],
  aciklama: `İki ayrı koşulun hem alt hem üst sınırını ayrı kontrol et; sınır değerler ("80 ya da üzeri", "60'ın altında") kuralın içindedir.
Adım 1: En az iki sınavdan 80 ve üzeri olanlar: Ada (80 ve 85) ve Cem (85 ve 90). Barış ve Deniz'de yalnız birer sınav var.
Adım 2: Hiçbirinden 60'ın altında almamış olanlar: Ada'nın en düşük puanı 79, Cem'in 55. Cem elenir.
Adım 3: Ada'nın 80 puanı "80 ya da üzeri" sınırının içindedir.
Sağlama: Ada'da iki puan 80 ve üzeri, en düşük puan 79 (60'ın üstünde).
Cevap A.`
},
{
  id: "tur-sm-059",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Ela, Fikret, Gönül ve Hasan; İspanyolca, Almanca, Fransızca ve İtalyancadan farklı birini öğrenmektedir.
• Ela ne Almanca ne de İtalyanca öğrenmektedir.
• Fikret İspanyolca öğrenmemektedir.
• Gönül Almanca öğrenmemektedir.
• Hasan ne Fransızca ne de İspanyolca öğrenmektedir.

I. Fikret Almanca öğrenmektedir.
II. İspanyolcayı Ela ya da Gönül öğrenmektedir.
III. Hasan İtalyanca öğrenmektedir.

**Buna göre numaralanmış ifadelerden hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "Yalnız II",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "Olası durumu kesin sanma: Fikret Almanca öğrenebilir ama Fransızca ya da İtalyanca öğrendiği durumlar da vardır; ayrıca kesin doğru olan II atlanmıştır.",
    "I'i kesin sanma: Fikret'in Fransızca ya da İtalyanca öğrendiği durumlarda I yanlıştır.",
    null,
    "III'ü kesin sanma: Hasan Almanca öğrenebilir, yalnız İtalyancaya bağlı değildir."
  ],
  aciklama: `Önce hangi kişinin hangi dili öğrenemeyeceğini çiz; "kesinlikle" için bütün olasılıkları dene.
Adım 1: Fikret ve Hasan İspanyolca öğrenemez. İspanyolcayı Ela ya da Gönül öğrenir; II kesin doğrudur.
Adım 2: Hasan'ın dili Almanca ya da İtalyancadır; iki durum da mümkündür (III kesin değil).
Adım 3: Fikret Almanca, Fransızca ya da İtalyanca öğrenebilir; örneğin Ela İspanyolca, Fikret Fransızca, Gönül İtalyanca, Hasan Almanca durumu kurallara uyar (I kesin değil).
Sağlama: Bu örnek durumda II doğru, I ve III yanlıştır.
Cevap C.`
},
{
  id: "tur-sm-060",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kültür merkezinde pazartesiden perşembeye her gün bir film gösterilecektir. Filmler komedi, macera, belgesel ve animasyondur; her film bir gün gösterilir.
• Komedi filmi, macera filminden önceki bir günde gösterilecektir.
• Belgesel perşembe günü gösterilmeyecektir.
• Animasyon pazartesi günü gösterilmeyecektir.

**Buna göre film programı kaç farklı biçimde hazırlanabilir?**`,
  gorsel: null,
  secenekler: [
    "5",
    "7",
    "8",
    "12"
  ],
  dogru: 1,
  hatalar: [
    "Bir programı atlama: kurallara uyan yedi program vardır, beş değil.",
    null,
    "Bir programı fazla sayma: animasyonun pazartesi ya da belgeselin perşembe gösterildiği bir programı kuralı bozarak saymak gerekir.",
    "Yalnız birinci kuralı uygulama: komedinin macerayı önceleme kuralı 24 programı 12'ye indirir; diğer iki kural kalanı 7'ye indirir."
  ],
  aciklama: `Kuralları sırayla uygulayıp kalan programları düzenli biçimde yaz.
Adım 1: Dört gün için 24 farklı program vardır. Komedi macera önce olacağından 12 program kalır.
Adım 2: Komedi macera önce olan 12 programı yaz ve belgeselin perşembe, animasyonun pazartesi olduğu programları çıkar.
Adım 3: Kalan programlar: komedi-animasyon-belgesel-macera, komedi-macera-belgesel-animasyon, komedi-belgesel-animasyon-macera, komedi-belgesel-macera-animasyon, belgesel-animasyon-komedi-macera, belgesel-komedi-animasyon-macera, belgesel-komedi-macera-animasyon. Yedi program.
Sağlama: Yedi programın hepsinde komedi maceradan önce, belgesel pazartesi-çarşamba aralığında, animasyon pazartesi dışında.
Cevap B.`
},
{
  id: "tur-sm-061",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Bir giysi mağazasının dört haftalık satış adetleri tabloda verilmiştir.

**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Hafta</th><th>Tişört</th><th>Pantolon</th><th>Ceket</th></tr><tr><td>1. hafta</td><td>40</td><td>10</td><td>25</td></tr><tr><td>2. hafta</td><td>35</td><td>15</td><td>30</td></tr><tr><td>3. hafta</td><td>50</td><td>12</td><td>28</td></tr><tr><td>4. hafta</td><td>45</td><td>20</td><td>22</td></tr></table>`,
  secenekler: [
    "Pantolon satışı her hafta bir önceki haftadan fazladır.",
    "Ceket satışı dördüncü haftada ilk haftadan fazladır.",
    "Üç ürünün toplam satışı en yüksek olan hafta ikinci haftadır.",
    "Tişört satışı her hafta ceket satışından fazladır."
  ],
  dogru: 3,
  hatalar: [
    "Bir haftayı gözden kaçırma: pantolon 3. haftada 15'ten 12'ye düşmüştür.",
    "Sayıları yanlış karşılaştırma: ceket 4. haftada 22, ilk haftada 25'tir; azalmıştır.",
    "Toplamı yanlış hesaplama: haftalık toplamlar 75, 80, 90, 87'dir; en yüksek toplam 3. haftadadır.",
    null
  ],
  aciklama: `Her şıkkı tablodaki ilgili hücrelerle tek tek sına; "her hafta" diyen şıkta dört haftanın dördüne de bak.
Adım 1: Pantolon: 10, 15, 12, 20; üçüncü hafta düşüş var.
Adım 2: Ceket: ilk hafta 25, dördüncü hafta 22; azalmıştır. Haftalık toplamlar 75, 80, 90, 87'dir.
Adım 3: Tişört-ceket: 40>25, 35>30, 50>28, 45>22; dört haftada da tişört fazla.
Sağlama: Hiçbir haftada tişört satışı ceket satışının altına inmiyor.
Cevap D.`
},
{
  id: "tur-sm-062",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Altı arkadaş (Ada, Berk, Cem, Deniz, Ece ve Fulya), yuvarlak bir masanın etrafındaki 1'den 6'ya kadar numaralı koltuklara görseldeki gibi birer kişi olarak oturmuştur. Koltuklar sırayla dizilmiştir; 1 numaralı koltukla 6 numaralı koltuk da yan yanadır. Ada 1 numaralı koltuktadır.
• Berk, Ada'nın tam karşısındaki koltuktadır.
• Cem, Ada'nın yanındaki koltuklardan birindedir.
• Deniz, Berk'in yanındaki koltuklardan birinde değildir.
• Ece, Deniz'in yanındaki koltuklardan birindedir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 400 290" role="img"><circle cx="200" cy="150" r="55" fill="none" stroke="currentColor" stroke-width="2"/><text x="200" y="156" text-anchor="middle" font-size="15" fill="currentColor">Masa</text><circle cx="200" cy="55" r="18" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="200" y="61" text-anchor="middle" font-size="16" fill="currentColor">1</text><text x="228" y="52" font-size="15" fill="currentColor">Ada</text><circle cx="282" cy="102" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="282" y="108" text-anchor="middle" font-size="16" fill="currentColor">2</text><circle cx="282" cy="198" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="282" y="204" text-anchor="middle" font-size="16" fill="currentColor">3</text><circle cx="200" cy="245" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="200" y="251" text-anchor="middle" font-size="16" fill="currentColor">4</text><circle cx="118" cy="198" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="118" y="204" text-anchor="middle" font-size="16" fill="currentColor">5</text><circle cx="118" cy="102" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="118" y="108" text-anchor="middle" font-size="16" fill="currentColor">6</text></svg>`,
  secenekler: [
    "Fulya, Berk'in yanındaki koltuklardan birindedir.",
    "Cem, Berk'in yanındaki koltuklardan birindedir.",
    "Ece, Cem'in yanındaki koltuklardan birindedir.",
    "Deniz, Fulya'nın yanındaki koltuklardan birindedir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Koltukları yanlış sayma: Berk 4 numaralı koltuktadır; yanındaki koltuklar 3 ve 5'tir, Cem ise 2 ya da 6 numaralı koltuktadır.",
    "Yan yana koltukları yanlış belirleme: Cem 2 ya da 6, Ece ise 3 ya da 5 numaralı koltuktadır; yan yana değillerdir.",
    "Yan yana koltukları yanlış belirleme: Deniz 2 ya da 6, Fulya ise 3 ya da 5 numaralı koltuktadır; yan yana değillerdir."
  ],
  aciklama: `Yuvarlak düzende 6 ve 1 numaralı koltuklar da komşudur; önce sayıları koltuklara yerleştir.
Adım 1: Berk, Ada'nın karşısında, yani 4 numaralı koltuktadır. Cem, Ada'nın yanında olduğuna göre 2 ya da 6 numaralı koltuktadır. Deniz, Berk'in yanındaki 3 ve 5 numaralı koltuklarda oturamaz; boş koltuklar arasında ona yalnız 2 ya da 6 kalır. Cem ile Deniz 2 ve 6 numaralı koltukları paylaşır.
Adım 2: Ece, Deniz'in yanında oturur. Deniz 6 ise Ece 5'te (Fulya 3), Deniz 2 ise Ece 3'te (Fulya 5) oturur.
Adım 3: Her iki durumda Ece ile Fulya, Berk'in iki yanındaki 3 ve 5 numaralı koltuklara oturur.
Sağlama: Fulya 3 ya da 5 numaralı koltuktadır ve Berk'in yanındadır; diğer şıklar iki durumda da yanlıştır.
Cevap A.`
},
{
  id: "tur-sm-063",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kargo firması ücretleri şu kurallarla hesaplamaktadır (paketlerin ağırlığı tam sayıdır):
• 0-2 kg arası paketler için 20 TL, 3-5 kg arası paketler için 30 TL, 6 kg ve üzeri paketler için 45 TL alınır.
• Şehir dışına gönderilen her pakete ayrıca 10 TL eklenir.
• Kırılacak eşya içeren her pakete ayrıca 5 TL eklenir.

**Buna göre aşağıdaki paketlerden hangisinin ücreti 40 TL'dir?**`,
  gorsel: null,
  secenekler: [
    "2 kg, şehir dışına giden, kırılacak eşyalı paket",
    "5 kg, şehir içine giden, kırılacak eşyalı paket",
    "3 kg, şehir dışına giden, kırılacak eşyasız paket",
    "6 kg, şehir içine giden, kırılacak eşyasız paket"
  ],
  dogru: 2,
  hatalar: [
    "Hesabı eksik bırakma: 20 + 10 + 5 = 35 TL eder.",
    "Hesabı eksik bırakma: 30 + 5 = 35 TL eder; şehir içidir, 10 TL eklenmez.",
    null,
    "Ağırlık dilimini yanlış seçme: 6 kg paket 45 TL'dir, ek ücret yoktur."
  ],
  aciklama: `Ücret sorularında önce ağırlık dilimine bak, sonra ek kuralları (şehir dışı, kırılacak eşya) sırayla ekle.
Adım 1: 2 kg → 20 TL, şehir dışı +10, kırılgan +5 = 35 TL.
Adım 2: 5 kg → 30 TL, şehir içi (ek yok), kırılgan +5 = 35 TL.
Adım 3: 3 kg → 30 TL, şehir dışı +10, kırılgan değil = 40 TL.
Adım 4: 6 kg → 45 TL, ek ücret yok = 45 TL.
Sağlama: Yalnız üçüncü paketin ücreti 40 TL.
Cevap C.`
},
/* ===================== DÜZEY 4 ===================== */
{
  id: "tur-sm-064",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Bir tiyatro oyununun sonunda altı oyuncu, sahnede soldan sağa 1'den 6'ya kadar numaralı yerlere tek sıra hâlinde dizilecektir.
• Ada ile Bora'nın arasında tam iki oyuncu bulunmaktadır.
• Deniz, Ceren'in hemen sağındadır.
• Ece ne en soldaki ne de en sağdaki yerdedir.
• Fatih, Ada'nın sağındadır.

**Buna göre aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "Ece, 5. sıradadır.",
    "Fatih, 3. sıradadır.",
    "Bora, 6. sıradadır.",
    "Deniz, 4. sıradadır."
  ],
  dogru: 3,
  hatalar: [
    "Olası durumu olamaz sanma: Ada, Ceren, Deniz, Bora, Ece, Fatih sırasında Ece 5. sıradadır.",
    "Olası durumu olamaz sanma: Ada, Ece, Fatih, Bora, Ceren, Deniz sırasında Fatih 3. sıradadır.",
    "Olası durumu olamaz sanma: Ceren, Deniz, Ada, Ece, Fatih, Bora sırasında Bora 6. sıradadır.",
    null
  ],
  aciklama: `"Olamaz" kökünde kurallara uyan bütün dizilişleri çıkar ve hiçbirinde gerçekleşmeyen şıkkı seç.
Adım 1: Ada-Bora arasında iki kişi olduğundan yerleri 1-4, 2-5 ya da 3-6'dır (kendi aralarında iki sırayla). Ceren-Deniz bitişik bir ikili, Fatih Ada'nın sağında, Ece uç yerlerde değildir.
Adım 2: Kurallara uyan altı diziliş vardır: Ada-Ceren-Deniz-Bora-Ece-Fatih, Ada-Ece-Fatih-Bora-Ceren-Deniz, Ada-Fatih-Ece-Bora-Ceren-Deniz, Bora-Ceren-Deniz-Ada-Ece-Fatih, Ceren-Deniz-Ada-Ece-Fatih-Bora, Ceren-Deniz-Ada-Fatih-Ece-Bora.
Adım 3: Deniz bu dizilişlerde 3., 6., 6., 3., 2., 2. sıradadır; hiçbirinde 4. sırada değildir.
Sağlama: İlk üç şık yukarıdaki dizilişlerin en az birinde gerçekleşir.
Cevap D.`
},
{
  id: "tur-sm-065",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Bir müzik grubu konserinde beş şarkıyı (Rüzgâr, Deniz, Yağmur, Orman ve Dağ) farklı sıralarda, 1'den 5'e kadar sırayla çalacaktır.
• Rüzgâr, Deniz'den önce çalınacaktır.
• Yağmur ile Orman şarkılarının arasında tam bir şarkı çalınacaktır.
• Dağ, ilk sırada çalınmayacaktır.
• Deniz, Orman'dan önce çalınacaktır.

**Buna göre şarkı sıralaması kaç farklı biçimde olabilir?**`,
  gorsel: null,
  secenekler: [
    "4",
    "5",
    "10",
    "14"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Dağ kuralını atlama: Dağ'ın ilk sırada olamayacağı kuralı uygulanmazsa Dağ'ın birinci olduğu bir sıralama daha çıkar.",
    "\"Arasında tam bir şarkı\" ifadesini \"en az bir şarkı\" diye okuma: Yağmur-Orman için daha fazla yer çifti kabul edilir ve sıralama sayısı artar.",
    "Deniz-Orman kuralını atlama: bu kural uygulanmazsa olduğundan fazla sıralama sayılır."
  ],
  aciklama: `Sıralama sayarken önce zorunlu sırayı bul, sonra kalan yerleri sistemli olarak dene.
Adım 1: Rüzgâr, Deniz'den; Deniz, Orman'dan önce çalınır. Bu yüzden Orman 3., 4. ya da 5. sıradadır ve Yağmur, Orman'dan bir şarkı arayla ayrılır.
Adım 2: Orman 3. ise Rüzgâr ve Deniz 1-2, Yağmur 5, Dağ 4. sıradadır: 1 sıralama. Orman 4. ise Yağmur 2, Rüzgâr 1, Deniz 3, Dağ 5. sıradadır: 1 sıralama. Orman 5. ise Yağmur 3, Rüzgâr 1'dir; Deniz ile Dağ 2. ve 4. sıraları iki biçimde paylaşır: 2 sıralama.
Adım 3: Toplam 1 + 1 + 2 = 4 sıralama bulunur.
Sağlama: Dört sıralamada da Dağ ilk sırada değil, Rüzgâr 1. sıradadır ve bütün kurallar sağlanır.
Cevap A.`
},
{
  id: "tur-sm-066",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 4,
  soru: `Bir şehirdeki beş müzeyi gezmek isteyen Selin, hepsine girebilmek için tam iki paket bilet satın alacaktır. Beş paketin hangi müzelere giriş hakkı verdiği tabloda gösterilmiştir (✓: giriş hakkı var, ✗: yok).

**Buna göre Selin'in beş müzenin hepsine girebileceği kaç farklı paket çifti vardır?**`,
  gorsel: `<table class="tablo"><tr><th>Paket</th><th>Tarih</th><th>Bilim</th><th>Resim</th><th>Oyuncak</th><th>Deniz</th></tr><tr><td>Paket 1</td><td>✓</td><td>✓</td><td>✗</td><td>✓</td><td>✗</td></tr><tr><td>Paket 2</td><td>✓</td><td>✗</td><td>✓</td><td>✗</td><td>✓</td></tr><tr><td>Paket 3</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td><td>✗</td></tr><tr><td>Paket 4</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td></tr><tr><td>Paket 5</td><td>✓</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td></tr></table>`,
  secenekler: [
    "1",
    "2",
    "3",
    "4"
  ],
  dogru: 2,
  hatalar: [
    "Çiftleri tam taramama: ilk bulunan P1-P2 çiftiyle yetinmek, P2-P3 ve P3-P4 çiftlerini kaçırır.",
    "Bir çifti atlama: Deniz Müzesi'ni P4 üzerinden kapatan P3-P4 çifti gibi bir çift gözden kaçmıştır.",
    null,
    "Kapsamayan bir çifti sayma: P2-P4 Deniz Müzesi'ni iki kez kapsar ama Oyuncak Müzesi'ni hiç kapsamaz."
  ],
  aciklama: "İki paketin birleşimi beş müzenin hepsini kapsamalıdır; eksik kalan bir müze çifti eler.\nAdım 1: Paketlerin müzeleri: P1: Tarih, Bilim, Oyuncak. P2: Tarih, Resim, Deniz. P3: Bilim, Resim, Oyuncak. P4: Tarih, Bilim, Deniz. P5: Tarih, Bilim, Resim.\nAdım 2: Deniz Müzesi'ni yalnız P2 ve P4 kapsar; çiftin bir üyesi bunlardan biri olmalıdır. P2'nin eksiği Bilim ve Oyuncak'tır; bunları birlikte veren paketler P1 ve P3'tür: P1-P2 ve P2-P3. P4'ün eksiği Resim ve Oyuncak'tır; bunları birlikte veren tek paket P3'tür: P3-P4.\nAdım 3: P2-P4 çifti Oyuncak Müzesi'ni kapsamaz. Toplam 3 çift vardır.\nSağlama: P2 ve P3: Tarih, Resim, Deniz + Bilim, Resim, Oyuncak = beş müzenin hepsi.\nCevap C."
},
{
  id: "tur-sm-067",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Ada, Bora, Ceyda, Deniz ve Efe; fen projesi için su, rüzgâr, güneş, toprak ve ses konularından farklı birini seçmiştir.
• Ada, su ya da rüzgâr konusunu seçmemiştir.
• Bora, güneş ya da toprak konusunu seçmiştir.
• Ceyda, ne ses ne de su konusunu seçmiştir.
• Deniz, rüzgâr, güneş ve su konularından hiçbirini seçmemiştir.
• Efe, toprak konusunu seçmemiştir.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Ada güneş konusunu seçmiştir.",
    "Efe su konusunu seçmiştir.",
    "Deniz ses konusunu seçmiştir.",
    "Bora toprak konusunu seçmiştir."
  ],
  dogru: 1,
  hatalar: [
    "Olası durumu kesin sanma: Ada güneşi seçebilir ama toprağı ya da sesi seçtiği durumlar da vardır.",
    null,
    "Olası durumu kesin sanma: Deniz sesi seçebilir ama toprağı seçtiği bir durum da vardır.",
    "Olası durumu kesin sanma: Bora toprağı seçebilir ama güneşi seçtiği durumlar da vardır."
  ],
  aciklama: `Eşleştirmede her kişinin seçemeyeceği konuları çıkar; bir konuyu tek bir kişi seçebiliyorsa o eşleşme kesinleşir.
Adım 1: Su konusunu Ada, Bora, Ceyda ve Deniz seçemez (Bora yalnız güneş ya da toprak seçer). Su yalnız Efe için mümkündür; Efe suyu seçmiştir.
Adım 2: Rüzgâr konusunu Ada, Bora ve Deniz seçemez; geriye Ceyda kalır. Ceyda rüzgârı seçmiştir.
Adım 3: Ada, Bora ve Deniz güneş, toprak ve ses konularını paylaşır: (Ada güneş, Bora toprak, Deniz ses), (Ada toprak, Bora güneş, Deniz ses) ya da (Ada ses, Bora güneş, Deniz toprak). Üç durumdur.
Sağlama: Üç durumda da Efe su, Ceyda rüzgâr konusundadır; diğer şıklar bir durumda yanlıştır.
Cevap B.`
},
{
  id: "tur-sm-068",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Bir bilgi yarışmasında 6 soru sorulmuştur. Her soru için doğru cevap 4 puan, boş bırakılan soru 1 puan, yanlış cevap 0 puan getirmektedir. Ela, yarışmada toplam 8 puan toplamıştır.

**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Ela en az bir soruyu boş bırakmıştır.",
    "Ela en az bir soruyu yanlış cevaplamıştır.",
    "Ela en az iki soruyu doğru cevaplamıştır.",
    "Ela dört soruyu boş bırakmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Olası durumu kesin sanma: 2 doğru ve 4 yanlışla da 8 puan toplanır; bu durumda hiç soru boş kalmaz.",
    null,
    "Olası durumu kesin sanma: 1 doğru, 4 boş ve 1 yanlışla da 8 puan toplanır; bu durumda yalnız bir soru doğrudur.",
    "Olası durumu kesin sanma: 4 boş soru yalnızca bir durumda vardır; 2 doğru ve 4 yanlış durumunda hiç soru boş kalmaz."
  ],
  aciklama: `Puan ve soru sayısı birlikte verildiğinde doğru-boş-yanlış üçlülerini sistematik olarak dene.
Adım 1: Doğru sayısına d, boş sayısına b dersek 4d + b = 8 olur ve d + b en çok 6 olabilir (kalan sorular yanlıştır).
Adım 2: d = 0 ise b = 8 olur; bu 6 soruyu aşar. d = 1 ise b = 4, yanlış sayısı 6 − 5 = 1 olur. d = 2 ise b = 0, yanlış sayısı 6 − 2 = 4 olur. d = 3 ise puan 12'yi bulur; 8'i aşar.
Adım 3: İki durum vardır: (1 doğru, 4 boş, 1 yanlış) ve (2 doğru, 0 boş, 4 yanlış). İkisinde de en az bir yanlış vardır. Diğer şıklar bir durumda yanlıştır.
Sağlama: 4 · 1 + 4 = 8 ve 4 · 2 + 0 = 8.
Cevap B.`
},
{
  id: "tur-sm-069",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Bir lokantada menü; bir ana yemek (köfte, tavuk, balık), bir garnitür (pilav, makarna, salata) ve bir içecek (ayran, limonata) seçilerek oluşturulur. Lokantanın kuralları şunlardır:
• Balık ile makarna aynı menüde bulunamaz.
• Makarna ile ayran aynı menüde bulunamaz.

**Buna göre kurallara uygun kaç farklı menü oluşturulabilir?**`,
  gorsel: null,
  secenekler: [
    "16",
    "15",
    "14",
    "13"
  ],
  dogru: 2,
  hatalar: [
    "Yalnız ikinci kuralı uygulamama: balık-makarna menülerini (2 tane) çıkarmak unutulmuştur; 18 − 2 = 16.",
    "Yalnız birinci kuralı uygulamama: makarna-ayran menülerini (3 tane) çıkarmak unutulmuştur; 18 − 3 = 15.",
    null,
    "Ortak menüyü iki kez çıkarma: balık-makarna-ayran menüsü iki kuralın da yasakladığı menüdür, bir kez çıkarılır; 18 − 5 = 13 olmaz."
  ],
  aciklama: `Yasaklı menüleri sayarken iki kurala birden takılan menüyü yalnızca bir kez say.
Adım 1: Kuralsız menü sayısı 3 × 3 × 2 = 18'dir.
Adım 2: Balık-makarna menüleri: içecek 2 türlü, 2 menü. Makarna-ayran menüleri: ana yemek 3 türlü, 3 menü.
Adım 3: Balık-makarna-ayran menüsü her iki grupta da vardır; yasaklı menü sayısı 2 + 3 − 1 = 4'tür.
Adım 4: 18 − 4 = 14 menü kurallara uygundur.
Sağlama: Yasaklı menüler: balık-makarna-ayran, balık-makarna-limonata, köfte-makarna-ayran, tavuk-makarna-ayran.
Cevap C.`
},
{
  id: "tur-sm-070",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 4,
  soru: `Bir kültür merkezinde pazartesi günü yapılan altı kursun saatleri tabloda verilmiştir. Bir kursun bittiği anda başka bir kurs başlayabilir; ancak saatleri çakışan iki kursa aynı anda katılınamaz.

**Buna göre Deniz, pazartesi günü çakışma olmadan en çok kaç kursa katılabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Kurs</th><th>Başlangıç</th><th>Bitiş</th></tr><tr><td>Bilim</td><td>13:00</td><td>14:30</td></tr><tr><td>Resim</td><td>14:00</td><td>15:30</td></tr><tr><td>Müzik</td><td>15:00</td><td>16:00</td></tr><tr><td>Drama</td><td>15:30</td><td>17:00</td></tr><tr><td>Satranç</td><td>16:00</td><td>17:30</td></tr><tr><td>Dans</td><td>17:00</td><td>18:00</td></tr></table>`,
  secenekler: [
    "3",
    "4",
    "5",
    "6"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Çakışmaları gözden kaçırma: Bilim-Resim, Müzik-Drama ve Satranç-Dans çiftlerinin her birinden yalnız biri seçilebilir; dört kurs mümkün değildir.",
    "Kursları saatlerine bakmadan sayma: altı kursun bir kısmı birbirini engellediği için beş kurs mümkün değildir.",
    "Bütün kursları sayma: Bilim-Resim gibi çakışan kurslara aynı anda katılınamaz."
  ],
  aciklama: `Çakışma sorularında hangi kursların birbirini engellediğini bul ve çakışan kursları gruplara ayır.
Adım 1: Bilim (13:00-14:30) ile Resim (14:00-15:30) çakışır. Müzik (15:00-16:00) ile Drama (15:30-17:00) çakışır. Satranç (16:00-17:30) ile Dans (17:00-18:00) çakışır.
Adım 2: Altı kurs bu üç çakışan çifte ayrıldığı için her çiftten en çok biri seçilebilir. Bu yüzden en çok 3 kursa katılınabilir.
Adım 3: 3 kursa katılmak mümkündür: Bilim 14:30'da biter, Müzik 15:00'te başlar; Müzik 16:00'da biter, Satranç 16:00'da başlar.
Sağlama: Bilim-Müzik-Satranç çakışmasız bir üçlüdür; dört kurslu çakışmasız küme yoktur.
Cevap A.`
},
{
  id: "tur-sm-071",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Ayla, Berkay, Canan ve Deniz, okul bahçesine pazartesiden perşembeye farklı günlerde fidan dikecektir; her gün yalnızca biri fidan dikecektir.
• Ayla, Berkay'dan önceki bir günde fidan dikecektir.
• Canan, Berkay'dan sonraki bir günde fidan dikecektir.
• Deniz ne pazartesi ne de perşembe günü fidan dikecektir.

I. Ayla pazartesi günü fidan dikecektir.
II. Deniz salı günü fidan dikecektir.
III. Canan perşembe günü fidan dikecektir.

**Buna göre numaralanmış ifadelerden hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  dogru: 3,
  hatalar: [
    "II'yi kesin sanma: Deniz salı ya da çarşamba günü fidan dikebilir; ayrıca I ve III kesin doğrudur.",
    "Seçeneği eksik bırakma: III kesin doğrudur ama I de her durumda doğrudur.",
    "II'yi kesin sanma: Deniz'in çarşamba günü fidan diktiği bir durum da vardır.",
    null
  ],
  aciklama: `Önce kimin hangi günlerde olamayacağını çıkar; sonra ilk ve son günü kimin alacağını bul.
Adım 1: Deniz ne pazartesi ne perşembe günüdür; salı ya da çarşamba günü fidan diker.
Adım 2: Ayla, Berkay'dan; Berkay da Canan'dan önce fidan dikecektir: Ayla < Berkay < Canan. Bu üç kişi pazartesi ve perşembe günlerini aldığından zincirin ilk kişisi pazartesi, son kişisi perşembe günü fidan diker: Ayla pazartesi, Canan perşembe.
Adım 3: Berkay ile Deniz salı ve çarşambayı paylaşır: Ayla-Berkay-Deniz-Canan ya da Ayla-Deniz-Berkay-Canan. II yalnız ikinci dizilişte doğrudur.
Sağlama: İki dizilişte de Ayla pazartesi, Canan perşembe günü fidan dikiyor.
Cevap D.`
},
{
  id: "tur-sm-072",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Resim atölyesinde bir boya kutusunun kapağı açık bırakılmıştır. Kapağı beş öğrenciden yalnızca biri açık bırakmıştır. Öğrenciler şunları söylemiştir:
• Ela: "Ben açık bırakmadım."
• Bora: "Arda açık bıraktı."
• Cem: "Arda açık bırakmadı."
• Deniz: "Ben ya da Cem açık bıraktı."
• Arda: "Bora açık bırakmadı."

Bu beş ifadeden tam üçünün doğru olduğu bilindiğine göre,

**kapağı açık bırakan öğrenci kimdir?**`,
  gorsel: null,
  secenekler: [
    "Arda",
    "Bora",
    "Cem",
    "Deniz"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru ifadeleri yanlış sayma: Bora açık bırakmışsa doğru ifadeler Ela ve Cem'inkiler olur; tam iki ifade doğru çıkar, üç değil.",
    "Doğru ifadeleri yanlış sayma: Cem açık bırakmışsa yalnız Bora'nın ifadesi yanlış çıkar; dört doğru olur, üç değil.",
    "Doğru ifadeleri yanlış sayma: Deniz açık bırakmışsa dört ifade doğru çıkar; üç değil."
  ],
  aciklama: `"Tam üçü doğru" koşulunda her adayı sırayla "bunu yaptı" diye varsay ve beş ifadenin kaçının doğru olduğunu say. Sayı üç olan tek adayı bul.
Adım 1: Arda yaptıysa: Ela doğru, Bora doğru, Cem yanlış, Deniz yanlış (ne kendisi ne Cem), Arda doğru. Üç doğru.
Adım 2: Bora yaptıysa: Ela doğru, Bora yanlış, Cem doğru, Deniz yanlış, Arda yanlış. İki doğru.
Adım 3: Cem yaptıysa: Ela, Cem, Deniz, Arda doğru, Bora yanlış. Dört doğru. Deniz yaptıysa da aynı sayı dört çıkar.
Sağlama: Ela yaptıysa yalnızca Cem ve Arda doğru söylemiş olur (iki doğru); yalnız Arda üç doğru verir.
Cevap A.`
},
{
  id: "tur-sm-073",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Okul bahçesinde küçük bir sebze bahçesi kurulacaktır. Altı iş birer kez yapılacak ve aynı anda yalnızca biri yürütülecektir: toprağı kazmak, tohum ekmek, boru döşemek, sulama başlıklarını takmak, ilk sulamayı yapmak ve tabela asmak. Kurallar şunlardır:
• Toprak kazılmadan tohum ekilemez.
• Boru döşenmeden sulama başlıkları takılamaz.
• İlk sulama, tohum ekildikten ve başlıklar takıldıktan sonra yapılır.
• Tabela, tohum ekildikten sonra asılır.

**Buna göre bu altı iş kaç farklı sırayla yapılabilir?**`,
  gorsel: null,
  secenekler: [
    "36",
    "26",
    "20",
    "16"
  ],
  dogru: 3,
  hatalar: [
    "Tabela kuralını uygulamama: ilk beş iş 6 sırayla yapılıp tabela herhangi bir yere konursa 36 sıra çıkar.",
    "Tabela kuralını gevşek uygulama: tabelanın yalnızca toprak kazıldıktan sonra asılması kuralı 26 sıra verir.",
    "Tabela kuralını ters uygulama: tabela tohum ekilmeden önce asılırsa 20 sıra çıkar.",
    null
  ],
  aciklama: `Önce zincirleri kur, sonra serbest kalan işin kaç yere girebileceğini say.
Adım 1: Tabela dışındaki beş işte ilk sulama en sondadır; (toprak, tohum) ve (boru, başlık) iki çifti kendi içinde sırayı koruyarak 6 farklı biçimde karışır.
Adım 2: Tabela, tohumdan sonra gelen boşluklara girebilir. Tohum 2. sıradaysa 4, 3. sıradaysa 3, 4. sıradaysa 2 boşluk vardır.
Adım 3: Altı karışımdan 1'inde tohum 2., 2'sinde 3., 3'ünde 4. sıradadır. Toplam 1 × 4 + 2 × 3 + 3 × 2 = 16 sıra bulunur.
Sağlama: 16, kuralsız durumdaki 36'dan küçüktür; tabela kuralı bazı sıraları eler.
Cevap D.`
},
{
  id: "tur-sm-074",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 4,
  soru: `Bir bilim fuarında Ada, Bora, Ceyda, Deniz ve Efe pazartesiden cumaya kadar her gün biri olmak üzere rehberlik yapacaktır; herkes yalnızca bir gün rehberlik yapacaktır. Öğrencilerin müsait olduğu günler tabloda ✓ ile gösterilmiştir.

**Buna göre herkesin müsait olduğu günde rehberlik yapacağı kaç farklı çizelge hazırlanabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Pzt</th><th>Sal</th><th>Çar</th><th>Per</th><th>Cum</th></tr><tr><td>Ada</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr><tr><td>Bora</td><td>✓</td><td>✗</td><td>✓</td><td>✓</td><td>✗</td></tr><tr><td>Ceyda</td><td>✗</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>Deniz</td><td>✗</td><td>✓</td><td>✗</td><td>✓</td><td>✗</td></tr><tr><td>Efe</td><td>✗</td><td>✗</td><td>✓</td><td>✗</td><td>✓</td></tr></table>`,
  secenekler: [
    "3",
    "4",
    "5",
    "6"
  ],
  dogru: 2,
  hatalar: [
    "Bir dalı eksik sayma: Ada pazartesiyken 3, Ada salıyken 2 çizelge çıkar; yalnız birini saymak 3 ya da 2 verir.",
    "Bir çizelgeyi atlama: Ada pazartesiyken Bora, Ceyda ve Efe'nin üç yerleşimi vardır, biri atlanmıştır.",
    null,
    "Fazla çizelge sayma: birinin müsait olmadığı bir güne yerleştirme yapılırsa 6 çizelge bulunur."
  ],
  aciklama: `Eşleştirmede en az seçeneği olan kişiden başla ve her seçimin kalan kişileri nasıl kısıtladığını izle.
Adım 1: Ada yalnız pazartesi ya da salı gelebilir; pazartesiyi yalnız Ada ve Bora, salıyı yalnız Ada ve Deniz seçebilir.
Adım 2: Ada pazartesiyse salıyı Deniz alır. Bora, Ceyda ve Efe çarşamba, perşembe, cuma günlerini üç farklı biçimde paylaşır: (Bora çarşamba, Ceyda perşembe, Efe cuma), (Bora perşembe, Ceyda çarşamba, Efe cuma), (Bora perşembe, Ceyda cuma, Efe çarşamba).
Adım 3: Ada salıysa pazartesiyi Bora, perşembeyi Deniz alır; Ceyda ile Efe çarşamba ve cumayı iki biçimde paylaşır.
Adım 4: Toplam 3 + 2 = 5 çizelge.
Sağlama: Beş çizelgede de her kişi yalnız ✓ olan günde, her gün tek kişiyle.
Cevap C.`
},
{
  id: "tur-sm-075",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Bir belediyenin oyun alanında şu kurallar uygulanmaktadır:
• Oyun alanına yalnızca 3-12 yaş arası (3 ve 12 dahil) çocuklar girebilir.
• 6 yaşından küçük çocuklar, yanlarında bir yetişkin yoksa oyun alanına giremez.
• Kaydıraktan yararlanmak için yaşın en az 5 ve boyun en az 110 cm olması gerekir.
• Salıncaktan yararlanmak için yaşın en az 4 olması gerekir.

Altı çocuğun bilgileri tabloda verilmiştir.

**Buna göre hem kaydıraktan hem salıncaktan yararlanabilen kaç çocuk vardır?**`,
  gorsel: `<table class="tablo"><tr><th>Çocuk</th><th>Yaş</th><th>Boy (cm)</th><th>Yanında yetişkin</th></tr><tr><td>Ali</td><td>4</td><td>105</td><td>Var</td></tr><tr><td>Bora</td><td>5</td><td>112</td><td>Yok</td></tr><tr><td>Ceren</td><td>6</td><td>108</td><td>Yok</td></tr><tr><td>Deniz</td><td>7</td><td>120</td><td>Yok</td></tr><tr><td>Ece</td><td>13</td><td>150</td><td>Yok</td></tr><tr><td>Gül</td><td>5</td><td>115</td><td>Var</td></tr></table>`,
  secenekler: [
    "1",
    "2",
    "3",
    "4"
  ],
  dogru: 1,
  hatalar: [
    "Bir çocuğu eleme hatası: hem Deniz hem Gül iki araçtan da yararlanır.",
    null,
    "Oyun alanına giremeyen çocuğu sayma: Bora 6 yaşından küçüktür ve yanında yetişkin yoktur; araç koşullarını sağlasa da giremez.",
    "Oyun alanına giremeyen çocukları sayma: Bora yetişkinsiz küçük olduğu, Ece 12 yaşını aştığı için giremez."
  ],
  aciklama: `Önce herkesi giriş kurallarıyla süz; ancak içeri girebilenlerin araç koşullarına bak.
Adım 1: Ece 13 yaşında olduğundan giremez. Bora 6 yaşından küçüktür ve yanında yetişkin yoktur, giremez. Geriye Ali, Ceren, Deniz ve Gül kalır.
Adım 2: Kaydırak için yaş en az 5 ve boy en az 110 cm gerekir: Ali (4 yaş, 105 cm) ve Ceren (108 cm) elenir; Deniz (7, 120) ve Gül (5, 115) kalır.
Adım 3: Salıncak için yaş en az 4 gerekir; Deniz ve Gül'ün ikisi de uygundur.
Sağlama: Hem kaydırak hem salıncak koşulunu sağlayan Deniz ve Gül, yani 2 çocuk.
Cevap B.`
}
);
