// Matematik — Üslü İfadeler: testleri 25 soruya tamamlayan ek parti (kademe 1-2-3) ve havuz eki
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["uslu-ifadeler"] = window.LGS_BANK["uslu-ifadeler"] || []).push(
/* ===================== KADEME 1 — KAVRAMA (113-125) ===================== */
{
  id: "mat-ui-113",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir bilim şenliğinde çok küçük sayıları tanıtan panoda 10^{-3} üslü ifadesi yer almaktadır.\n**Buna göre bu ifadenin ondalık gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["−1000", "0,0001", "0,001", "0,01"],
  dogru: 2,
  hatalar: [
    "Negatif üssü sayının işareti sanma: 10^{-3} ifadesi −1000 demek değildir. Negatif üs sayıyı 1'den küçük yapar, işaretini değiştirmez.",
    "Virgülü bir basamak fazla kaydırma: 0,0001 sayısı 10^{-4} ifadesinin değeridir.",
    null,
    "Virgülü bir basamak eksik kaydırma: 0,01 sayısı 10^{-2} ifadesinin değeridir."
  ],
  aciklama: `Negatif üs, sayının çarpmaya göre tersini gösterir: a^{-n} = [[1|a^{n}]]. Üssün negatif olması sayıyı eksi yapmaz, 1'den küçük yapar.
Adım 1: İfadeyi kesir biçiminde yaz: 10^{-3} = [[1|10^{3}]].
Adım 2: Paydayı hesapla: 10^{3} = 10 · 10 · 10 = 1000.
Adım 3: Kesri ondalık gösterime çevir: [[1|1000]] = 0,001.
Sağlama: 0,001 · 1000 = 1 olduğundan 0,001 gerçekten 1000'in çarpmaya göre tersidir.
Sık yapılan hata: Üsteki sıfır sayısı ile virgülden sonraki basamak sayısını karıştırmak. 10'un üssündeki 3 sayısı, virgülden sonra üç basamak olacağını söyler: 0,001.
Cevap C.`
},
{
  id: "mat-ui-114",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir matematik kulübü toplantısında üyelere 3^{4} · 3^{2} işlemi sorulmuştur.\n**Buna göre bu işlemin sonucu aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["3^{6}", "3^{8}", "9^{6}", "9^{8}"],
  dogru: 0,
  hatalar: [
    null,
    "Çarpmada üsleri çarpma: 4 · 2 = 8 alınmış. Aynı tabanlı çarpmada üsler toplanır, çarpılmaz.",
    "Tabanları da çarpma: 3 · 3 = 9 yazılmış. Kural uygulanırken taban aynı kalır.",
    "İki hata birden: hem tabanlar çarpılmış hem de üsler çarpılmış."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken taban aynı kalır, üsler toplanır: a^{n} · a^{m} = a^{n+m}.
Adım 1: Tabanların aynı olduğunu gör: iki ifadenin de tabanı 3'tür.
Adım 2: Üsleri topla: 4 + 2 = 6.
Adım 3: Sonucu yaz: 3^{4} · 3^{2} = 3^{6}.
Sağlama: 3^{4} = 81 ve 3^{2} = 9'dur. 81 · 9 = 729 eder. 3^{6} = 729 olduğundan sonuç doğrudur.
Sık yapılan hata: Tabanları da çarpıp 9^{6} yazmak. 9^{6} sayısı 3^{12}'ye eşittir, yani çok daha büyüktür.
Cevap A.`
},
{
  id: "mat-ui-115",
  kazanim: "M.8.1.2.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir doğa dergisinde bir kar tanesini oluşturan buz kristalinin kütlesi 74 · 10^{-7} gram olarak verilmiştir.\n**Buna göre bu kütlenin bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["74 · 10^{-6}", "7,4 · 10^{-6}", "7,4 · 10^{-7}", "7,4 · 10^{-8}"],
  dogru: 1,
  hatalar: [
    "Baştaki sayıyı 1 ile 10 arasına getirmeden üssü değiştirme: 74 sayısı 10'dan büyük olduğu için bu bir bilimsel gösterim değildir; üstelik değeri verilen kütlenin 10 katıdır.",
    null,
    "Üssü değiştirmeyi unutma: 74 yerine 7,4 yazılınca sayı 10 kat küçüldüğü için üs de 1 artmalıdır.",
    "Üssü ters yönde değiştirme: baştaki sayı 10 kat küçültülürken üs 1 artar, azalmaz."
  ],
  aciklama: `Bilimsel gösterim a · 10^{n} biçimindedir; burada a, 1 ≤ a < 10 koşulunu sağlar. Bir sayı zaten 10'un bir kuvvetiyle yazılmışsa baştaki sayıyı bu aralığa çekmek yeter: baştaki sayı 10 kat küçülürse üs 1 artar, 10 kat büyürse üs 1 azalır.
Adım 1: Baştaki sayıya bak: 74 sayısı 10'dan büyüktür, demek ki gösterim bilimsel değildir.
Adım 2: 74'ü 1 ile 10 arasına çek: 74 ÷ 10 = 7,4. Sayıyı 10 kat küçülttün.
Adım 3: Dengeyi koru: küçülttüğün kadar üssü büyüt. Üs −7 iken 1 artar ve −6 olur.
Adım 4: Yaz: 74 · 10^{-7} = 7,4 · 10^{-6}.
Sağlama: 74 · 10^{-7} = 0,0000074 ve 7,4 · 10^{-6} = 0,0000074. İki gösterim de aynı sayıyı verir.
Sık yapılan hata: Negatif üslerde "büyütme" yönünü şaşırmak. −7'nin 1 artmış hâli −6'dır; −8 değildir.
Cevap B.`
},
{
  id: "mat-ui-116",
  kazanim: "M.8.1.2.4",
  kademe: 1,
  zorluk: 1,
  soru: "Bir kuyumcu atölyesinde bir yüzüğe yapılan altın kaplamanın kalınlığı 0,0007 santimetredir. Usta bu sayıyı, n bir tam sayı olmak üzere 7 · 10^{n} biçiminde yazmıştır.\n**Buna göre n yerine hangi sayı gelmelidir?**",
  gorsel: null,
  secenekler: ["−4", "−3", "3", "4"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca sıfırları sayma: virgülden sonra üç sıfır görülüp −3 yazılmış; oysa 7 rakamının durduğu basamak da sayılmalıdır. 7 · 10^{-3} = 0,007'dir.",
    "Üssün işaretini yazmayı unutma: 7 · 10^{3} = 7000 eder. 1'den küçük sayılarda 10'un üssü negatiftir.",
    "Hem işareti hem basamak sayısını yanlış yazma: 7 · 10^{4} = 70 000 eder."
  ],
  aciklama: `Bir sayı 10'un tam sayı kuvvetleriyle yazılırken üs, virgülün kaç basamak kaydığını söyler. Sayı 1'den küçükse üs negatiftir.
Adım 1: 0,0007 sayısında 7 rakamının hangi basamakta olduğunu bul. Virgülden sonra sırasıyla onda birler, yüzde birler, binde birler, on binde birler gelir. 7 rakamı dördüncü sırada, yani on binde birler basamağındadır.
Adım 2: On binde birler basamağının değeri [[1|10 000]] = 10^{-4}'tür.
Adım 3: Öyleyse 0,0007 = 7 · 10^{-4} olur ve n = −4'tür.
Sağlama: 7 · 10^{-4} = 7 · 0,0001 = 0,0007.
Sık yapılan hata: Virgülden sonraki sıfırları sayıp üssü −3 yazmak. Sayılması gereken, 7 rakamının kendi basamağı dâhil virgülden sonraki basamak sayısıdır.
Cevap A.`
},
{
  id: "mat-ui-117",
  kazanim: "M.8.1.2.3",
  kademe: 1,
  zorluk: 1,
  soru: "Bir teknoloji sitesinde tanıtılan cep telefonunun kalınlığı 0,86 santimetredir. Bu sayının basamakları aşağıdaki tabloda gösterilmiştir.\n**Buna göre 0,86 sayısının 10'un tam sayı kuvvetleriyle çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Basamak</th><th>Birler</th><th>Onda birler</th><th>Yüzde birler</th></tr><tr><td>Rakam</td><td>0</td><td>8</td><td>6</td></tr></table>`,
  secenekler: [
    "8 · 10^{-2} + 6 · 10^{-3}",
    "8 · 10^{-1} + 6 · 10^{-2}",
    "8 · 10^{0} + 6 · 10^{-1}",
    "8 · 10^{1} + 6 · 10^{0}"
  ],
  dogru: 1,
  hatalar: [
    "Bir basamak fazla kaydırma: 8 rakamı yüzde birler basamağında sanılmış. Bu çözümleme 0,086 sayısına aittir.",
    null,
    "Baştaki sıfırı da bir rakam sayıp çözümlemeye birler basamağından başlama: bu çözümleme 8,6 sayısına aittir.",
    "Virgülü hiç dikkate almama: bu çözümleme 86 sayısına aittir."
  ],
  aciklama: `Bir ondalık gösterimi çözümlemek, her rakamı kendi basamağının değeriyle çarpıp bu çarpımları toplamaktır. Virgülden sonraki basamaklar sırasıyla 10^{-1}, 10^{-2}, 10^{-3}… değerlerini alır.
Adım 1: Tam kısma bak: 0,86 sayısının birler basamağındaki rakam 0'dır. 0 · 10^{0} = 0 ettiği için bu terim yazılmaz.
Adım 2: 8 rakamı onda birler basamağındadır: 8 · 10^{-1} = 0,8.
Adım 3: 6 rakamı yüzde birler basamağındadır: 6 · 10^{-2} = 0,06.
Adım 4: Terimleri topla ve yaz: 8 · 10^{-1} + 6 · 10^{-2}.
Sağlama: 0,8 + 0,06 = 0,86.
Sık yapılan hata: Tam kısmı 0 olan sayılarda çözümlemeye birler basamağından başlamak. Sayının ilk anlamlı rakamı virgülden sonraysa çözümleme negatif üslerle başlar.
Cevap B.`
},
{
  id: "mat-ui-118",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir matematik uygulamasının alıştırma ekranında 2^{-4} · 2^{6} işlemi çıkmıştır.\n**Buna göre bu işlemin sonucu aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["2^{-24}", "2^{-10}", "2^{2}", "2^{10}"],
  dogru: 2,
  hatalar: [
    "Çarpmada üsleri çarpma: (−4) · 6 = −24 alınmış. Aynı tabanlı çarpmada üsler toplanır.",
    "Üsleri toplarken işareti yanlış kullanma: −4 − 6 = −10 alınmış; oysa üsler toplanır, −4 + 6 = 2 olur.",
    null,
    "Negatif üssü pozitif sayma: 4 + 6 = 10 alınmış. Üssün eksi işareti toplama girerken korunmalıdır."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken üsler toplanır: a^{n} · a^{m} = a^{n+m}. Üslerden biri negatifse toplama işlemi yine aynı kuralla yapılır; eksi işareti yok sayılmaz.
Adım 1: Tabanlar aynı: ikisi de 2.
Adım 2: Üsleri topla: (−4) + 6 = 2.
Adım 3: Sonucu yaz: 2^{-4} · 2^{6} = 2^{2}.
Sağlama: 2^{-4} = [[1|16]] ve 2^{6} = 64'tür. [[1|16]] · 64 = [[64|16]] = 4 eder; 2^{2} = 4 olduğundan sonuç doğrudur.
Sık yapılan hata: Negatif üsleri toplarken işlemi çıkarmaya çevirip −10 bulmak. (−4) + 6 işleminde büyük olan 6 pozitif olduğu için sonuç pozitiftir.
Cevap C.`
},
{
  id: "mat-ui-119",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir müzik atölyesinde gitar akordu anlatılırken bir notanın frekansının her oktav yükselişte 2 katına çıktığı söylenmiştir. Atölyedeki tabloda başlangıç notasının frekansı ile bu notanın birinci ve ikinci oktavdaki frekansları verilmiştir.\n**Buna göre başlangıç notasının 4 oktav yukarısındaki notanın frekansı kaç hertzdir?**",
  gorsel: `<table class="tablo"><tr><th>Oktav</th><th>Başlangıç</th><th>1. oktav</th><th>2. oktav</th></tr><tr><td>Frekans (Hz)</td><td>55</td><td>110</td><td>220</td></tr></table>`,
  secenekler: ["220", "440", "880", "1760"],
  dogru: 2,
  hatalar: [
    "Tablodaki son değeri cevap sanma: 220 Hz, 2. oktavın frekansıdır; iki oktav daha yükselmek gerekir.",
    "Bir oktavı eksik sayma: 440 Hz, 3. oktavın frekansıdır (55 · 2^{3}).",
    null,
    "Bir oktavı fazla sayma: 1760 Hz, 5. oktavın frekansıdır (55 · 2^{5})."
  ],
  aciklama: `Bir büyüklük her adımda aynı sayıyla çarpılıyorsa toplam değişim üslü ifadeyle yazılır: kaç adım varsa üs o kadardır.
Adım 1: Tablodaki örüntüyü oku. 55 → 110 → 220 giderken her seferinde 2 ile çarpılıyor. Demek ki k. oktavdaki frekans 55 · 2^{k}'dir.
Adım 2: Kuralı sağla: 2. oktav için 55 · 2^{2} = 55 · 4 = 220. Tablodaki değerle uyuşuyor.
Adım 3: 4. oktav için kuralı uygula: 55 · 2^{4} = 55 · 16.
Adım 4: Çarpımı yap: 55 · 16 = 880 Hz.
Sağlama: 220'den itibaren iki kez ikiye katla: 220 → 440 → 880.
Sık yapılan hata: Tabloda "2. oktav" 220 yazdığı için iki katlama daha gerektiğini fark etmeyip 440'ta durmak.
Cevap C.`
},
{
  id: "mat-ui-120",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 2,
  soru: "Okul gazetesinin bulmaca köşesinde her hafta üslü ifadelerle bir işlem yayımlanmakta, sonucu doğru bulan öğrencilere kitap verilmektedir. Bu haftanın işlemi aşağıdaki kutuda verilmiştir.\n**Buna göre bu işlemin sonucu aşağıdakilerden hangisine eşittir?**",
  gorsel: `<svg viewBox="0 0 460 130" role="img" aria-label="Bulmaca kutusu: 2 üssü 3 çarpı 2 üssü 5, bölü 2 üssü 6"><rect x="20" y="20" width="420" height="90" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="16"><text x="40" y="46">BU HAFTANIN İŞLEMİ</text></g><g fill="var(--vurgu)" font-size="28" font-weight="bold" text-anchor="middle"><text x="230" y="90">(2<tspan font-size="18" dy="-10">3</tspan><tspan dy="10"> · 2</tspan><tspan font-size="18" dy="-10">5</tspan><tspan dy="10">) ÷ 2</tspan><tspan font-size="18" dy="-10">6</tspan></text></g></svg>`,
  secenekler: ["2^{2}", "2^{9}", "2^{14}", "2^{15}"],
  dogru: 0,
  hatalar: [
    null,
    "Çarpmada üsleri çarpma: 3 · 5 = 15 alınıp 15 − 6 = 9 bulunmuş. Çarpmada üsler toplanır.",
    "Bölmede de üsleri toplama: 3 + 5 + 6 = 14 alınmış. Toplama yalnızca çarpmada yapılır.",
    "Hem çarpmada üsleri çarpma hem de bölme adımını atlama: yalnızca 3 · 5 = 15 hesaplanmış."
  ],
  aciklama: `İki kural gerekir: aynı tabanlı çarpmada üsler toplanır (a^{n} · a^{m} = a^{n+m}), aynı tabanlı bölmede paydaki üsten paydadaki üs çıkarılır (a^{n} ÷ a^{m} = a^{n−m}).
Adım 1: Parantez içini sadeleştir: 2^{3} · 2^{5} = 2^{3+5} = 2^{8}.
Adım 2: Bölmeyi yap: 2^{8} ÷ 2^{6} = 2^{8−6} = 2^{2}.
Sağlama: Sayılarla dene. 2^{3} = 8, 2^{5} = 32; 8 · 32 = 256. 2^{6} = 64 olduğundan 256 ÷ 64 = 4 = 2^{2}.
Sık yapılan hata: Çarpma ile bölmenin kurallarını karıştırmak. Çarpmada üsler toplanır, bölmede çıkarılır; hiçbirinde üsler çarpılmaz.
Cevap A.`
},
{
  id: "mat-ui-121",
  kazanim: "M.8.1.2.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir eczanede hassas terazi kullanılarak bir vitamin tabletinin kütlesi ölçülmüştür. Eczacı, ekranda gördüğü sayıyı basamak değerlerine ayırıp kayıt defterine yazacaktır. Terazinin ekran görüntüsü aşağıda verilmiştir.\n**Buna göre ekrandaki sayının 10'un tam sayı kuvvetleriyle çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 440 150" role="img" aria-label="Hassas terazi ekranında 0,375 gram yazıyor"><rect x="30" y="18" width="380" height="80" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="60" y="110" width="320" height="20" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="220" y="70" fill="var(--vurgu)" font-size="40" font-weight="bold" text-anchor="middle">0,375 g</text><text x="220" y="146" fill="currentColor" font-size="15" text-anchor="middle">Hassas terazi</text></svg>`,
  secenekler: [
    "3 · 10^{-2} + 7 · 10^{-3} + 5 · 10^{-4}",
    "3 · 10^{-1} + 7 · 10^{-2} + 5 · 10^{-3}",
    "5 · 10^{-1} + 7 · 10^{-2} + 3 · 10^{-3}",
    "3 · 10^{0} + 7 · 10^{-1} + 5 · 10^{-2}"
  ],
  dogru: 1,
  hatalar: [
    "Bütün basamakları bir sıra sağa kaydırma: bu çözümleme 0,0375 sayısına aittir.",
    null,
    "Rakamları ters sırada eşleştirme: soldan sağa 3, 7, 5 sırası korunmalıdır. Bu çözümleme 0,573 sayısına aittir.",
    "Tam kısmı 0 olan sayıda çözümlemeye birler basamağından başlama: bu çözümleme 3,75 sayısına aittir."
  ],
  aciklama: `Virgülden sonraki basamakların değerleri sırasıyla 10^{-1} (onda birler), 10^{-2} (yüzde birler), 10^{-3} (binde birler) biçiminde gider. Çözümlemede her rakam kendi basamağının değeriyle çarpılır.
Adım 1: Ekrandaki sayı 0,375'tir. Birler basamağı 0 olduğu için çözümlemede yer almaz.
Adım 2: Rakamları basamaklarıyla eşle: 3 → onda birler, 7 → yüzde birler, 5 → binde birler.
Adım 3: Terimleri yaz: 3 · 10^{-1} + 7 · 10^{-2} + 5 · 10^{-3}.
Sağlama: 0,3 + 0,07 + 0,005 = 0,375.
Sık yapılan hata: Rakamların sırasını bozmak. Çözümlemede rakamlar soldan sağa okundukları sırayla, basamak değerleri ise küçülerek yazılır.
Cevap B.`
},
{
  id: "mat-ui-122",
  kazanim: "M.8.1.2.4",
  kademe: 1,
  zorluk: 2,
  soru: "Bir doğa dergisinde, bir arı kovanındaki arıların bir mevsim boyunca yaptığı çiçek ziyareti sayısı 4 · 10^{5} olarak verilmiştir. Derginin editörü aynı sayıyı, yazının başlığında kullanmak için 10'un farklı bir kuvvetiyle yeniden yazmak istemektedir.\n**Buna göre aşağıdakilerden hangisi bu sayıya eşittir?**",
  gorsel: null,
  secenekler: ["0,04 · 10^{6}", "0,4 · 10^{6}", "4 · 10^{6}", "40 · 10^{6}"],
  dogru: 1,
  hatalar: [
    "Baştaki sayıyı 100 kat küçültüp üssü yalnızca 1 artırma: 0,04 · 10^{6} = 40 000 eder, verilen sayının onda biridir.",
    null,
    "Üssü 1 artırırken baştaki sayıyı küçültmeyi unutma: 4 · 10^{6} = 4 000 000 eder, verilen sayının 10 katıdır.",
    "Hem baştaki sayıyı 10 kat büyütme hem de üssü 1 artırma: 40 · 10^{6} = 40 000 000 eder."
  ],
  aciklama: `Bir sayı 10'un farklı kuvvetleriyle birçok biçimde yazılabilir; yeter ki değeri korunsun. Kural şudur: baştaki sayı 10 kat küçülürse 10'un üssü 1 artar, baştaki sayı 10 kat büyürse üs 1 azalır.
Adım 1: Verilen sayının değerini bul: 4 · 10^{5} = 4 · 100 000 = 400 000.
Adım 2: Üssü 6 yapmak istiyorsun; üs 1 arttığı için baştaki sayı 10 kat küçülmelidir: 4 ÷ 10 = 0,4.
Adım 3: Yaz: 400 000 = 0,4 · 10^{6}.
Sağlama: 0,4 · 1 000 000 = 400 000. Değer korunmuştur.
Sık yapılan hata: Üssü büyütürken baştaki sayıyı olduğu gibi bırakmak. Bu, sayıyı 10 kat büyütür.
Cevap B.`
},
{
  id: "mat-ui-123",
  kazanim: "M.8.1.2.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir tekstil laboratuvarında dört ipliğin çapı ölçülmüş ve sonuçlar bilimsel gösterimle tabloya yazılmıştır. Laboratuvar sorumlusu, çapı en küçük olan ipliği seçip mikroskopta inceleyecektir.\n**Buna göre sorumlunun seçeceği iplik hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>İplik</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Çap (m)</td><td>6,2 · 10<sup>−5</sup></td><td>2,3 · 10<sup>−4</sup></td><td>9,5 · 10<sup>−4</sup></td><td>8,1 · 10<sup>−6</sup></td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 3,
  hatalar: [
    "Üsleri yanlış sıralama: −5 üssü −6'dan küçük sanılıp baştaki sayısı küçük olan iplik seçilmiş.",
    "Yalnızca baştaki sayılara bakma: 2,3 en küçük baştaki sayıdır ama üssü −4 olduğu için bu iplik en kalın ipliklerden biridir.",
    "Soru kökünü ters okuma: 9,5 · 10^{-4} tablodaki en büyük çaptır; soruda en küçük çap istenmiştir.",
    null
  ],
  aciklama: `Bilimsel gösterimle yazılmış sayılar karşılaştırılırken önce 10'un üslerine bakılır. Üssü küçük olan sayı daha küçüktür. Üsler eşitse baştaki sayılar karşılaştırılır. Negatif üslerde −6 sayısı −5'ten, −5 sayısı da −4'ten küçüktür.
Adım 1: Üsleri sırala: −6 < −5 < −4. En küçük üs N ipliğindedir.
Adım 2: En küçük üs tek bir iplikte bulunduğu için baştaki sayıları karşılaştırmaya gerek kalmaz: en küçük çap N ipliğine aittir.
Adım 3: İstersen ondalık gösterimle doğrula: K = 0,000062 m; L = 0,00023 m; M = 0,00095 m; N = 0,0000081 m.
Sağlama: N ipliğinin çapı K ipliğinin çapından bile küçüktür, çünkü 0,0000081 < 0,000062.
Sık yapılan hata: Negatif üsleri sıralarken sayının mutlak değerine bakmak. 10^{-6}, 10^{-5}'ten küçüktür; üssün mutlak değeri büyüdükçe sayı küçülür.
Cevap D.`
},
{
  id: "mat-ui-124",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okul kulübünün malzeme dolabında dört göstergeli bir şifre kilidi vardır. Her gösterge aşağıda verilen beş simgeden birini gösterebilmekte ve aynı simge birden çok göstergede kullanılabilmektedir.\n**Buna göre bu kilit için kaç farklı şifre oluşturulabilir?**",
  gorsel: `<svg viewBox="0 0 500 190" role="img" aria-label="Dört göstergeli şifre kilidi ve kullanılabilen beş simge"><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><rect x="60" y="20" width="70" height="70" rx="8"/><rect x="150" y="20" width="70" height="70" rx="8"/><rect x="240" y="20" width="70" height="70" rx="8"/><rect x="330" y="20" width="70" height="70" rx="8"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="95" y="63">?</text><text x="185" y="63">?</text><text x="275" y="63">?</text><text x="365" y="63">?</text><text x="230" y="120">4 gösterge</text><text x="230" y="180">Kullanılabilen 5 simge</text></g><g stroke="var(--vurgu)" stroke-width="2" fill="none"><circle cx="110" cy="150" r="12"/><rect x="158" y="138" width="24" height="24"/><polygon points="230,138 242,162 218,162"/><path d="M278 138 v24 M266 150 h24"/><polygon points="326,136 330,148 342,148 332,156 336,168 326,160 316,168 320,156 310,148 322,148"/></g></svg>`,
  secenekler: ["20", "120", "625", "1024"],
  dogru: 2,
  hatalar: [
    "Seçenekleri çarpmak yerine toplama mantığıyla ilerleme: 4 · 5 = 20 alınmış. Her göstergedeki seçim ayrı yapıldığı için seçenek sayıları çarpılır.",
    "Simgelerin tekrar edilemeyeceğini sanma: 5 · 4 · 3 · 2 = 120 alınmış. Soruda aynı simgenin birden çok göstergede kullanılabileceği belirtilmiştir.",
    null,
    "Taban ile üssü yer değiştirme: 4^{5} = 1024 alınmış. Tekrar tekrar çarpılan sayı (5) taban, kaç kez çarpıldığı (4) ise üstür."
  ],
  aciklama: `Aynı sayı kendisiyle tekrar tekrar çarpılıyorsa sonuç üslü ifadeyle yazılır: tekrar eden sayı taban, tekrar sayısı üstür.
Adım 1: Birinci göstergeyi düşün: 5 farklı simgeden biri seçilebilir.
Adım 2: Her gösterge için seçim bağımsızdır ve simgeler tekrar edebilir. Öyleyse toplam şifre sayısı 5 · 5 · 5 · 5 olur.
Adım 3: Üslü biçimde yaz: 5^{4}.
Adım 4: Hesapla: 5^{2} = 25 olduğundan 5^{4} = 25 · 25 = 625.
Sağlama: Kilit üç göstergeli olsaydı 5^{3} = 125 şifre olurdu; dördüncü gösterge eklenince bu sayı 5 katına çıkar: 125 · 5 = 625.
Sık yapılan hata: 4^{5} yazmak. Kaç kez çarpıldığını gösterge sayısı belirler; bu yüzden üs 4, taban 5'tir.
Cevap C.`
},
{
  id: "mat-ui-125",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir matematik yarışmasının hızlı tur bölümünde yarışmacılara ekranda bir üslü ifade gösterilmekte ve bu ifadenin değeri sorulmaktadır. Yarışmanın son sorusunda ekrana gelen ifade aşağıda verilmiştir.\n**Buna göre ekrandaki ifadenin değeri kaçtır?**",
  gorsel: `<svg viewBox="0 0 420 140" role="img" aria-label="Yarışma ekranında 3 üssü eksi 2 ifadesinin eksi 1. kuvveti gösteriliyor"><rect x="20" y="16" width="380" height="88" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="210" y="72" fill="var(--vurgu)" font-size="34" font-weight="bold" text-anchor="middle">(3<tspan font-size="22" dy="-12">−2</tspan><tspan dy="12">)</tspan><tspan font-size="22" dy="-12">−1</tspan></text><text x="210" y="128" fill="currentColor" font-size="15" text-anchor="middle">Son soru</text></svg>`,
  secenekler: ["[[1|9]]", "[[1|6]]", "6", "9"],
  dogru: 3,
  hatalar: [
    "Dıştaki üssü hesaba katmama: yalnızca 3^{-2} = [[1|9]] hesaplanıp orada durulmuş.",
    "Tabanla üssü çarpıp üssün negatifliğini koruma: 3 · 2 = 6 alınıp 6^{-1} = [[1|6]] yazılmış.",
    "Tabanı üsle çarpma: 3 · 2 = 6 alınmış. Üslü ifadede taban, üs kadar kez kendisiyle çarpılır; üsle çarpılmaz.",
    null
  ],
  aciklama: `Üssün üssü alınırken üsler çarpılır: (a^{n})^{m} = a^{n·m}. İki üs de negatifse çarpımları pozitif olur.
Adım 1: Üsleri çarp: (−2) · (−1) = 2.
Adım 2: Yeni ifadeyi yaz: (3^{-2})^{-1} = 3^{2}.
Adım 3: Değeri hesapla: 3^{2} = 9.
Sağlama: Adım adım da gidebilirsin. 3^{-2} = [[1|9]]'dur. Bir sayının −1. kuvveti, o sayının çarpmaya göre tersidir; [[1|9]] sayısının çarpmaya göre tersi 9'dur.
Sık yapılan hata: İki negatif üssün çarpımını negatif sanmak. Eksi ile eksinin çarpımı artıdır; bu yüzden sonuç 1'den küçük değil, 9'dur.
Cevap D.`
},
/* ===================== KADEME 2 — PEKİŞTİRME (213-225) ===================== */
{
  id: "mat-ui-213",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir kargo deposunda özdeş koliler küp biçiminde bir yığın oluşturacak şekilde istiflenmiştir. Yığının eni, derinliği ve yüksekliği boyunca 4'er koli vardır. Depo görevlisi yığındaki koli sayısını sayarak değil hesaplayarak bulacaktır.\n**Buna göre yığında toplam kaç koli vardır?**",
  gorsel: `<svg viewBox="0 0 480 220" role="img" aria-label="Küp biçiminde koli yığını: en, derinlik ve yükseklik boyunca 4'er koli"><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><rect x="90" y="70" width="200" height="120"/><polygon points="90,70 150,30 350,30 290,70"/><polygon points="290,70 350,30 350,150 290,190"/></g><g stroke="currentColor" stroke-width="1" opacity="0.55"><line x1="140" y1="70" x2="140" y2="190"/><line x1="190" y1="70" x2="190" y2="190"/><line x1="240" y1="70" x2="240" y2="190"/><line x1="90" y1="100" x2="290" y2="100"/><line x1="90" y1="130" x2="290" y2="130"/><line x1="90" y1="160" x2="290" y2="160"/></g><g stroke="var(--vurgu)" stroke-width="2"><line x1="90" y1="204" x2="290" y2="204"/><line x1="64" y1="70" x2="64" y2="190"/><line x1="300" y1="62" x2="358" y2="24"/></g><g fill="currentColor" font-size="16"><text x="150" y="220">4 koli</text><text x="10" y="136">4 koli</text><text x="330" y="16">4 koli</text></g></svg>`,
  secenekler: ["12", "48", "64", "81"],
  dogru: 2,
  hatalar: [
    "Çarpma yerine toplama mantığı: 4 · 3 = 12 alınmış. Üç yönün her birinde 4 koli varsa sayılar çarpılır.",
    "Bir yöndeki koli sayısını 3 sanma: 4 · 4 · 3 = 48 alınmış. Yığın küp biçiminde olduğu için üç yönde de 4 koli vardır.",
    null,
    "Taban ile üssü yer değiştirme: 3^{4} = 81 alınmış. Tekrar eden sayı 4, tekrar sayısı 3'tür."
  ],
  aciklama: `Bir çarpımda aynı sayı birkaç kez tekrar ediyorsa çarpım üslü ifadeyle yazılır: tekrar eden sayı taban, kaç kez tekrar ettiği üstür.
Adım 1: Bir katta kaç koli olduğunu bul: en ve derinlik boyunca 4'er koli var, yani 4 · 4 = 16 koli.
Adım 2: Kaç kat olduğunu bul: yükseklik boyunca 4 koli var, yani 4 kat.
Adım 3: Toplamı yaz: 16 · 4 = 4 · 4 · 4 = 4^{3}.
Adım 4: Hesapla: 4^{3} = 64 koli.
Sağlama: Yığın 3 katlı olsaydı 16 · 3 = 48 koli olurdu; dördüncü kat eklenince 48 + 16 = 64 olur.
Sık yapılan hata: 3^{4} = 81 yazmak. Üs, tekrar sayısını gösterir; burada 4 sayısı üç kez tekrar ettiği için üs 3'tür.
Cevap C.`
},
{
  id: "mat-ui-214",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir müzede kullanılan sesli rehber cihazının teknik kartında, cihazın saniyede 8^{3} ses örneği aldığı yazmaktadır. Teknisyen, cihazın belgelerindeki yazıma uysun diye bu sayıyı 2'nin bir kuvveti biçiminde yeniden yazacaktır.\n**Buna göre teknisyenin yazacağı ifade aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2^{6}", "2^{9}", "2^{12}", "2^{27}"],
  dogru: 1,
  hatalar: [
    "Üssün üssünde üsleri toplama: 8 = 2^{3} yazıldıktan sonra 3 + 3 = 6 alınmış. Üssün üssünde üsler çarpılır.",
    null,
    "Tabanı yanlış çevirme: 8 sayısı 2^{4} sanılmış; oysa 2^{4} = 16'dır, 8 = 2^{3}'tür.",
    "Üssü kendi kuvvetiyle karıştırma: 3^{3} = 27 alınmış. Burada yapılması gereken 3 ile 3'ü çarpmaktır."
  ],
  aciklama: `Üssün üssü alınırken üsler çarpılır: (a^{n})^{m} = a^{n·m}. Bir sayıyı başka bir tabanın kuvveti olarak yazmak için önce tabanı çevirmek gerekir.
Adım 1: Tabanı çevir: 8 = 2 · 2 · 2 = 2^{3}.
Adım 2: İfadeyi yerine yaz: 8^{3} = (2^{3})^{3}.
Adım 3: Üsleri çarp: 3 · 3 = 9. Sonuç 2^{9}'dur.
Sağlama: 8^{3} = 8 · 8 · 8 = 512 eder. 2^{9} = 512 olduğundan iki ifade eşittir.
Sık yapılan hata: (2^{3})^{3} ifadesinde üsleri toplayıp 2^{6} = 64 bulmak. Toplama, aynı tabanlı çarpmada yapılır; üssün üssünde üsler çarpılır.
Cevap B.`
},
{
  id: "mat-ui-215",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir fen laboratuvarında öğrenciler tarttıkları taşın kütlesini çözümlenmiş biçimde tahtaya yazmıştır. Ancak terimleri basamak sırasına göre değil, akıllarına geldikleri sırayla yazmışlardır. Tahtadaki yazım aşağıda verilmiştir.\n**Buna göre taşın kütlesi kaç gramdır?**",
  gorsel: `<svg viewBox="0 0 480 130" role="img" aria-label="Tahtada yazan çözümleme: 3 çarpı 10 üssü eksi 2, artı 6 çarpı 10 üssü 1, artı 4 çarpı 10 üssü 0"><rect x="16" y="14" width="448" height="100" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="240" y="76" fill="var(--vurgu)" font-size="26" font-weight="bold" text-anchor="middle">3 · 10<tspan font-size="17" dy="-11">−2</tspan><tspan dy="11"> + 6 · 10</tspan><tspan font-size="17" dy="-11">1</tspan><tspan dy="11"> + 4 · 10</tspan><tspan font-size="17" dy="-11">0</tspan></text></svg>`,
  secenekler: ["6,43", "46,03", "64,03", "64,3"],
  dogru: 2,
  hatalar: [
    "Terimleri yazıldıkları sırayla okuyup rakamları sırayla dizme: 3, 6, 4 rakamları 6,43 biçiminde yerleştirilmiş; oysa basamağı belirleyen şey 10'un üssüdür.",
    "Onlar ve birler basamağındaki rakamları yer değiştirme: 6 · 10^{1} terimi onlar, 4 · 10^{0} terimi birler basamağına aittir.",
    null,
    "10^{-2} terimini onda birler sanma: 3 rakamı yüzde birler basamağındadır, bu yüzden sayı 64,3 değil 64,03'tür."
  ],
  aciklama: `Çözümlenmiş bir ifadeden sayıya dönerken her terimin değeri hesaplanıp toplanır. Terimlerin yazılış sırası önemli değildir; rakamın basamağını 10'un üssü belirler.
Adım 1: Terimleri tek tek hesapla: 3 · 10^{-2} = 0,03 ; 6 · 10^{1} = 60 ; 4 · 10^{0} = 4.
Adım 2: Basamakları yerleştir: 60 onlar, 4 birler, 0,03 yüzde birler basamağına düşer. Onda birler basamağında terim yoktur, oraya 0 yazılır.
Adım 3: Topla: 60 + 4 + 0,03 = 64,03.
Sağlama: 64,03 sayısını yeniden çözümle: 6 · 10^{1} + 4 · 10^{0} + 0 · 10^{-1} + 3 · 10^{-2}. Tahtadaki terimlerle aynıdır.
Sık yapılan hata: Terimleri yazıldıkları sırayla okuyup rakamları o sırada dizmek. Sıralamayı 10'un üsleri belirler: büyük üs solda, küçük üs sağda yer alır.
Cevap C.`
},
{
  id: "mat-ui-216",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir kargo şirketinin sayım raporunda iki depodaki koli sayıları farklı biçimlerde yazılmıştır. A deposu için 45 · 10^{3} koli, B deposu için 4,5 · 10^{4} koli yazılıdır. Şirket müdürü iki depoyu karşılaştırmak istemektedir.\n**Buna göre B deposundaki koli sayısı için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "A deposundakinin binde biri kadardır.",
    "A deposundakinin yüzde biri kadardır.",
    "A deposundakinin onda biri kadardır.",
    "A deposundakine eşittir."
  ],
  dogru: 3,
  hatalar: [
    "Üs farkını 3 sanma: 10^{4} ile 10^{3} arasındaki fark 3 basamak değil 1 basamaktır.",
    "Baştaki sayıdaki ve üsteki değişimi aynı yönde sayıp çarpma: 10 · 10 = 100 alınmış.",
    "Yalnızca baştaki sayılara bakma: 4,5 sayısı 45'in onda biridir ama B'nin üssü de 1 büyüktür; bu iki fark birbirini götürür.",
    null
  ],
  aciklama: `Bir sayı 10'un farklı kuvvetleriyle yazılabilir: baştaki sayı 10 kat küçülürken üs 1 artarsa sayının değeri değişmez. İki gösterimi karşılaştırmak için en güvenli yol ikisini de düz sayıya çevirmektir.
Adım 1: A deposunu çöz: 45 · 10^{3} = 45 · 1000 = 45 000 koli.
Adım 2: B deposunu çöz: 4,5 · 10^{4} = 4,5 · 10 000 = 45 000 koli.
Adım 3: Karşılaştır: iki depodaki koli sayısı birbirine eşittir.
Sağlama: 45 · 10^{3} ifadesinde baştaki sayıyı 10 kat küçültüp 4,5 yaparsan üssü 1 artırman gerekir: 4,5 · 10^{4}. İki yazım aynı sayıyı gösterir.
Sık yapılan hata: Yalnızca 10'un üssüne bakıp "üssü büyük olan daha çoktur" demek. Baştaki sayılar farklıysa bu karşılaştırma yanlış sonuç verir.
Cevap D.`
},
{
  id: "mat-ui-217",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir köprünün girişindeki dijital panoda, köprünün açılışından bu yana geçen araç sayısı gösterilmektedir. Belediye, panodaki bu sayıyı yıl sonu raporuna bilimsel gösterimle yazacaktır. Panodaki görüntü aşağıda verilmiştir.\n**Buna göre rapora yazılacak gösterim aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 480 150" role="img" aria-label="Köprü panosunda 92 milyon araç yazıyor"><rect x="24" y="16" width="432" height="96" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="24" y1="52" x2="456" y2="52" stroke="currentColor" stroke-width="2"/><text x="240" y="44" fill="currentColor" font-size="16" text-anchor="middle">KÖPRÜDEN GEÇEN TOPLAM ARAÇ</text><text x="240" y="96" fill="var(--vurgu)" font-size="34" font-weight="bold" text-anchor="middle">92 milyon</text><g stroke="currentColor" stroke-width="2"><line x1="60" y1="112" x2="60" y2="140"/><line x1="420" y1="112" x2="420" y2="140"/></g></svg>`,
  secenekler: ["9,2 · 10^{5}", "9,2 · 10^{6}", "9,2 · 10^{7}", "9,2 · 10^{8}"],
  dogru: 2,
  hatalar: [
    "Bir milyonu yüz bin sanma: 9,2 · 10^{5} = 920 000 eder.",
    "92 sayısını 9,2 yaparken üssü 1 artırmayı unutma: 9,2 · 10^{6} = 9 200 000 eder, yani panodaki sayının onda biridir.",
    null,
    "Üssü bir fazla artırma: 9,2 · 10^{8} = 920 000 000 eder, yani panodaki sayının 10 katıdır."
  ],
  aciklama: `Bilimsel gösterimde baştaki sayı 1 ile 10 arasında olmalıdır. Bir milyon 1 000 000, yani 10^{6}'dır.
Adım 1: Panodaki sayıyı rakamlarla yaz: 92 milyon = 92 · 10^{6} = 92 000 000.
Adım 2: Baştaki sayıyı 1 ile 10 arasına çek: 92 ÷ 10 = 9,2. Sayıyı 10 kat küçülttüğün için üssü 1 artırmalısın: 6 + 1 = 7.
Adım 3: Yaz: 92 000 000 = 9,2 · 10^{7}.
Sağlama: Virgülü sayarak da bulabilirsin. 92 000 000 sayısında virgülü 9'un hemen sağına taşırsan 7 basamak sola kaymış olur; bu yüzden üs 7'dir.
Sık yapılan hata: "Milyon" sözcüğünü görünce doğrudan 10^{6} yazıp baştaki 92'yi değiştirmemek ya da değiştirip üssü sabit bırakmak.
Cevap C.`
},
{
  id: "mat-ui-218",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir bilim merkezindeki ışık panosunda lambaların durumu (−1) sayısının kuvvetleriyle gösterilmektedir. Pano her saniye (−1)^{n} değerini hesaplar; burada n geçen saniye sayısıdır. Değer 1 ise lamba yanar, −1 ise söner.\n**Buna göre (−1)^{15} + (−1)^{20} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["−2", "−1", "0", "2"],
  dogru: 2,
  hatalar: [
    "Çift üslü terimi de negatif sanma: (−1)^{20} = 1'dir, çünkü üs çifttir.",
    "Terimleri toplamak yerine çarpma: (−1)^{15} · (−1)^{20} = (−1)^{35} = −1 bulunmuş. İşlem toplamadır.",
    null,
    "Tek üslü terimi de pozitif sanma: (−1)^{15} = −1'dir, çünkü üs tektir."
  ],
  aciklama: `Negatif bir sayının çift kuvveti pozitif, tek kuvveti negatiftir. Çünkü çift sayıda eksi işareti ikişer ikişer eşleşip birbirini götürür; tek sayıda eksi işaretinde ise bir tane açıkta kalır.
Adım 1: Birinci terimi bul: 15 tek sayıdır, öyleyse (−1)^{15} = −1.
Adım 2: İkinci terimi bul: 20 çift sayıdır, öyleyse (−1)^{20} = 1.
Adım 3: Topla: (−1) + 1 = 0.
Sağlama: Küçük üslerle dene: (−1)^{3} = −1 ve (−1)^{4} = 1'dir; toplamları yine 0 eder.
Sık yapılan hata: Üssün büyüklüğüne takılmak. Sonucu belirleyen üssün büyüklüğü değil, tek mi çift mi olduğudur.
Cevap C.`
},
{
  id: "mat-ui-219",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okul kantininde satılan meyve suyu kutusunun üzerinde hacim 0,25 · 10^{3} mL biçiminde yazmaktadır. Kantin görevlisi fiyat listesini hazırlarken bu hacmi, 10'un kuvveti kullanmadan düz bir sayı olarak yazacaktır.\n**Buna göre listeye yazılacak sayı kaçtır?**",
  gorsel: null,
  secenekler: ["250", "25", "2,5", "0,25"],
  dogru: 0,
  hatalar: [
    null,
    "Virgülü yalnızca iki basamak kaydırma: 0,25 · 10^{2} = 25 eder; oysa kutudaki üs 3'tür.",
    "Virgülü yalnızca bir basamak kaydırma: 0,25 · 10^{1} = 2,5 eder.",
    "10'un kuvvetini büsbütün yok sayma: kutudaki sayının baştaki kısmı olduğu gibi yazılmış."
  ],
  aciklama: `Bir sayı 10^{n} ile çarpılırken virgül n basamak sağa kaydırılır. Basamak yetmezse sağa sıfır eklenir.
Adım 1: Üssü oku: 10^{3} = 1000.
Adım 2: Çarpımı yap: 0,25 · 1000 = 250.
Adım 3: Virgül kaydırmayla sağla: 0,25 sayısında virgülü üç basamak sağa kaydır: 0,25 → 2,5 → 25 → 250.
Sağlama: 250 mL, yarım litrenin yarısıdır; 4 kutu meyve suyu 1000 mL, yani 1 litre eder.
Sık yapılan hata: Virgülü üssün söylediği kadar kaydırmamak. Üs 3 ise virgül tam üç basamak sağa gider.
Cevap A.`
},
{
  id: "mat-ui-220",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kâğıt fabrikasında üretilen yazıcı kâğıtlarının kalınlığı mikrometre ile ölçülmekte ve kataloğa bilimsel gösterimle yazılmaktadır. Fabrikada bu kâğıtlar 500'erli paketler hâlinde kutulanmaktadır. Paketlerin yüksekliği, kâğıtlar arasında boşluk kalmadığı varsayılarak hesaplanmaktadır. Katalogdaki bilgiler aşağıda verilmiştir.\n**Buna göre bir paketin yüksekliği kaç santimetredir? (1 m = 100 cm)**",
  gorsel: `<svg viewBox="0 0 500 170" role="img" aria-label="Katalog bilgisi: bir yaprağın kalınlığı 1,2 çarpı 10 üssü eksi 4 metre, bir pakette 500 yaprak"><rect x="20" y="16" width="300" height="130" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="20" y1="54" x2="320" y2="54" stroke="currentColor" stroke-width="2"/><text x="40" y="42" fill="currentColor" font-size="16" font-weight="bold">KATALOG BİLGİSİ</text><g fill="currentColor" font-size="17"><text x="40" y="88">Bir yaprak: 1,2 · 10<tspan font-size="13" dy="-8">−4</tspan><tspan dy="8"> m</tspan></text><text x="40" y="126">Bir paket: 500 yaprak</text></g><g stroke="var(--vurgu)" stroke-width="2" fill="none"><rect x="356" y="46" width="110" height="80"/><line x1="356" y1="66" x2="466" y2="66"/><line x1="356" y1="86" x2="466" y2="86"/><line x1="356" y1="106" x2="466" y2="106"/></g><text x="411" y="146" fill="currentColor" font-size="15" text-anchor="middle">1 paket</text></svg>`,
  secenekler: ["0,006", "0,06", "0,6", "6"],
  dogru: 3,
  hatalar: [
    "Çarpmada bir basamak kaybetme: 500 · 1,2 çarpımı 60 sanılıp 60 · 10^{-4} = 0,006 m bulunmuş. Doğru çarpım 600'dür.",
    "Birimi çevirmeyi unutma: 0,06 sayısı paketin metre cinsinden yüksekliğidir, santimetre cinsinden değil.",
    "Metreyi santimetreye çevirirken 10 ile çarpma: 0,06 m sayısı 100 ile çarpılmalıdır, 10 ile değil.",
    null
  ],
  aciklama: `Bilimsel gösterimle yazılmış bir sayı bir tam sayıyla çarpılırken baştaki sayılar çarpılır, 10'un kuvveti gerekirse yeniden düzenlenir.
Adım 1: Paketin metre cinsinden yüksekliğini bul: 500 · (1,2 · 10^{-4}).
Adım 2: Baştaki sayıları çarp: 500 · 1,2 = 600. Şimdi elde 600 · 10^{-4} var.
Adım 3: Sadeleştir: 600 · 10^{-4} = 6 · 10^{2} · 10^{-4} = 6 · 10^{2−4} = 6 · 10^{-2} = 0,06 m.
Adım 4: Santimetreye çevir: 1 m = 100 cm olduğundan 0,06 · 100 = 6 cm.
Sağlama: Bir yaprak 0,00012 m, yani 0,012 cm'dir. 500 · 0,012 = 6 cm.
Sık yapılan hata: Metre cinsinden bulunan 0,06 değerini cevap sanmak. Soruda santimetre istendiği için bir çevirme adımı daha gerekir.
Cevap D.`
},
{
  id: "mat-ui-221",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir su kalitesi laboratuvarında yoğun bir numune ölçüm cihazına verilmeden önce seyreltilmektedir. Her seyreltme adımında numunedeki madde derişimi bir önceki adımın onda birine iner. Laboratuvar görevlisi, derişimi 2 · 10^{-2} gram/litre olan numuneye üç seyreltme adımı uygulamıştır.\n**Buna göre son numunenin derişimi kaç gram/litredir?**",
  gorsel: `<svg viewBox="0 0 520 150" role="img" aria-label="Üç seyreltme adımı: her adımda derişim onda birine iner"><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><rect x="24" y="40" width="70" height="70" rx="6"/><rect x="168" y="40" width="70" height="70" rx="6"/><rect x="312" y="40" width="70" height="70" rx="6"/><rect x="440" y="40" width="70" height="70" rx="6"/></g><g stroke="var(--vurgu)" stroke-width="2" fill="none"><path d="M98 75 h62 M148 66 l14 9 -14 9"/><path d="M242 75 h62 M292 66 l14 9 -14 9"/><path d="M386 75 h46 M420 66 l14 9 -14 9"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="59" y="80">2 · 10<tspan font-size="12" dy="-7">−2</tspan></text><text x="203" y="80">?</text><text x="347" y="80">?</text><text x="475" y="80">?</text><text x="129" y="112">÷ 10</text><text x="273" y="112">÷ 10</text><text x="409" y="112">÷ 10</text><text x="59" y="132">başlangıç</text><text x="475" y="132">3. adım</text></g></svg>`,
  secenekler: ["2 · 10^{-6}", "2 · 10^{-5}", "2 · 10^{-4}", "2 · 10^{1}"],
  dogru: 1,
  hatalar: [
    "Üsleri çarpma: (−2) · 3 = −6 alınmış. Onda bire inme her adımda 10'a bölmektir; bölmede üsler çıkarılır.",
    null,
    "Bir seyreltme adımını eksik sayma: 2 · 10^{-4} değeri ikinci adımın sonucudur.",
    "Bölmede üsleri toplama: −2 + 3 = 1 alınmış. Bölmede üsteki üsten alttaki üs çıkarılır."
  ],
  aciklama: `Bir sayı 10'a bölündüğünde 10'un üssü 1 azalır, çünkü aynı tabanlı bölmede üsler çıkarılır: a^{n} ÷ a^{m} = a^{n−m}.
Adım 1: Bir adımı yaz: (2 · 10^{-2}) ÷ 10 = 2 · 10^{-2−1} = 2 · 10^{-3}.
Adım 2: Üç adımı birleştir: her adımda üs 1 azaldığı için toplam 3 azalır: −2 − 3 = −5.
Adım 3: Sonucu yaz: 2 · 10^{-5} gram/litre.
Sağlama: Ondalık gösterimle takip et: 0,02 → 0,002 → 0,0002 → 0,00002. Son değer 2 · 10^{-5}'tir.
Sık yapılan hata: Negatif üste bölme yapılırken üssü artırmak. Sayı küçüldüğü için üs de küçülmelidir.
Cevap B.`
},
{
  id: "mat-ui-222",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okullar arası bilgi yarışması eleme usulüyle oynanmaktadır. Her turda takımlar üçerli gruplara ayrılmakta ve her gruptan yalnızca bir takım bir sonraki tura çıkmaktadır; yani her turdan sonra kalan takım sayısı bir önceki turun üçte birine iner. Yarışma, 5. turun sonunda tek bir takım kalınca bitmektedir.\n**Buna göre yarışmaya başlangıçta kaç takım katılmıştır?**",
  gorsel: `<table class="tablo"><tr><th>Tur</th><th>1. tur</th><th>2. tur</th><th>3. tur</th></tr><tr><td>Tur sonunda kalan takım sayısı</td><td>başlangıcın 3'te 1'i</td><td>başlangıcın 9'da 1'i</td><td>başlangıcın 27'de 1'i</td></tr></table>`,
  secenekler: ["9", "15", "27", "243"],
  dogru: 3,
  hatalar: [
    "Tur sayısını yanlış kullanma: 9 = 3^{2} değeri yalnızca iki tur oynansaydı geçerli olurdu.",
    "Çarpma ile üs almayı karıştırma: 5 · 3 = 15 alınmış. Her turda takım sayısı 3'e bölündüğü için üslü ifade kullanılmalıdır.",
    "Bir turu eksik sayma: 27 = 3^{3} değeri dört turluk bir yarışmaya aittir.",
    null
  ],
  aciklama: `Bir büyüklük her adımda aynı sayıya bölünüyorsa, adım sayısı kadar kez bölünmüş olur. Başa dönmek için aynı sayıyla o kadar kez çarpmak gerekir.
Adım 1: Tablodaki örüntüyü oku: 1. tur sonunda başlangıcın [[1|3]]'ü, 2. tur sonunda [[1|9]]'u, yani 3^{2}'de biri kalıyor. Demek ki k. tur sonunda başlangıcın 3^{k}'da biri kalır.
Adım 2: Yarışma 5. turun sonunda bitiyor: kalan takım sayısı başlangıcın 3^{5}'te biridir.
Adım 3: Sonunda 1 takım kaldığına göre başlangıçtaki takım sayısı 3^{5}'tir.
Adım 4: Hesapla: 3^{5} = 3 · 3 · 3 · 3 · 3 = 243 takım.
Sağlama: Geriye doğru git: 1 → 3 → 9 → 27 → 81 → 243. Beş tur geriye gidildiğinde 243 bulunur.
Sık yapılan hata: Tur sayısını bir eksik saymak. Son turda da bir bölme yapıldığı için üs, tur sayısına eşittir.
Cevap D.`
},
{
  id: "mat-ui-223",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okul bahçesine dikilen fidanın boyu, büyümesini izlemek için iki kez ölçülmüştür. Öğrenciler ilkbahar ve sonbahar ölçümleri arasındaki farkı hesaplayıp bu farkı basamak değerleriyle çözümleyerek gözlem defterine yazacaktır. Ölçüm sonuçları aşağıda verilmiştir.\n**Buna göre iki ölçüm arasındaki farkın metre cinsinden çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 460 210" role="img" aria-label="İlkbaharda fidan boyu 1,24 metre, sonbaharda 1,70 metre"><g stroke="currentColor" stroke-width="2"><line x1="40" y1="180" x2="420" y2="180"/><line x1="130" y1="180" x2="130" y2="96"/><line x1="320" y1="180" x2="320" y2="56"/></g><g stroke="var(--vurgu)" stroke-width="3" fill="none"><path d="M130 96 q-26 -18 -34 -40 M130 96 q26 -18 34 -40"/><path d="M320 56 q-30 -20 -40 -46 M320 56 q30 -20 40 -46"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="130" y="202">İlkbahar</text><text x="320" y="202">Sonbahar</text><text x="130" y="142">1,24 m</text><text x="320" y="142">1,70 m</text></g></svg>`,
  secenekler: [
    "4 · 10^{1} + 6 · 10^{0}",
    "5 · 10^{-1} + 4 · 10^{-2}",
    "4 · 10^{-1} + 6 · 10^{-2}",
    "4 · 10^{-2} + 6 · 10^{-3}"
  ],
  dogru: 2,
  hatalar: [
    "Virgülü yok sayıp farkı tam sayı gibi çözümleme: bu çözümleme 46 sayısına aittir.",
    "Çıkarmada basamakları ters yönde işletme: 0 − 4 yerine 4 − 0 yapılıp fark 0,54 bulunmuş.",
    null,
    "Bütün basamakları bir sıra sağa kaydırma: bu çözümleme 0,046 sayısına aittir."
  ],
  aciklama: `Ondalık gösterimlerde çıkarma yapılırken virgüller alt alta gelecek biçimde yazılır ve eksik basamaklar sıfırla tamamlanır. Çözümlemede ise her rakam kendi basamağının değeriyle çarpılır.
Adım 1: Farkı hesapla. Virgülleri hizala ve 1,70 − 1,24 işlemini yap. Yüzde birler basamağında 0'dan 4 çıkmadığı için onda birlerden ödünç alınır: 10 − 4 = 6. Onda birlerde 6 kalır, ondan 2 çıkar: 4. Tam kısımda 1 − 1 = 0. Fark 0,46 metredir.
Adım 2: Basamakları adlandır: 4 rakamı onda birler, 6 rakamı yüzde birler basamağındadır. Tam kısım 0 olduğu için çözümlemede yazılmaz.
Adım 3: Çözümlemeyi yaz: 4 · 10^{-1} + 6 · 10^{-2}.
Sağlama: 0,4 + 0,06 = 0,46. Ayrıca 1,24 + 0,46 = 1,70 olduğundan fark doğrudur.
Sık yapılan hata: Çıkarmada küçük rakamdan büyük rakamı çıkarmak yerine ters çevirip 0,54 bulmak. Ödünç alma adımı atlanmamalıdır.
Cevap C.`
},
{
  id: "mat-ui-224",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir belediye üç yıl süren fidan dikim kampanyasının sonuçlarını açıklamıştır. Her yılın sayısı basın bülteninde 10'un farklı bir kuvvetiyle yazılmıştır. Basın sözcüsü, üç yılın toplamını bilimsel gösterimle tek bir sayı hâlinde açıklayacaktır. Yıllara göre dikilen fidan sayıları aşağıdaki tabloda verilmiştir.\n**Buna göre üç yılda dikilen toplam fidan sayısının bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Yıl</th><th>1. yıl</th><th>2. yıl</th><th>3. yıl</th></tr><tr><td>Dikilen fidan sayısı</td><td>12 · 10<sup>4</sup></td><td>0,9 · 10<sup>6</sup></td><td>8 · 10<sup>5</sup></td></tr></table>`,
  secenekler: ["1,01 · 10^{6}", "1,82 · 10^{6}", "2,9 · 10^{6}", "2,09 · 10^{7}"],
  dogru: 1,
  hatalar: [
    "Baştaki sayısı 1'den küçük olan terimi yanlış okuma: 0,9 · 10^{6} sayısı 90 000 sanılmış; oysa değeri 900 000'dir. Bu hatayla toplam 1 010 000 bulunur.",
    null,
    "Birinci yılın üssünü yanlış yönde düzenleme: 12 · 10^{4} sayısı 1,2 · 10^{6} sanılmış; doğrusu 1,2 · 10^{5}'tir.",
    "Üsleri eşitlemeden baştaki sayıları toplama: 12 + 0,9 + 8 = 20,9 alınıp 20,9 · 10^{6} yazılmış."
  ],
  aciklama: `Farklı kuvvetlerle yazılmış sayılar doğrudan toplanamaz. Önce hepsi aynı biçime (en kolayı düz sayıya) çevrilir, sonra toplanır.
Adım 1: Her yılı düz sayıya çevir: 12 · 10^{4} = 120 000 ; 0,9 · 10^{6} = 900 000 ; 8 · 10^{5} = 800 000.
Adım 2: Topla: 120 000 + 900 000 + 800 000 = 1 820 000 fidan.
Adım 3: Bilimsel gösterime çevir: virgülü soldan ilk rakamın arkasına al, 1,82 elde et; virgül 6 basamak kaydığı için üs 6'dır. Sonuç 1,82 · 10^{6}'dır.
Sağlama: 1,82 · 1 000 000 = 1 820 000.
Sık yapılan hata: 10'un üsleri farklıyken baştaki sayıları doğrudan toplamak. Toplama yapabilmek için önce kuvvetler eşitlenmelidir.
Cevap B.`
},
{
  id: "mat-ui-225",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir tarım lisesinin serasında mantar kültürü yetiştirilmektedir. Öğretmen, ortam koşulları sabit tutulduğunda mantar sayısının her 2 günde bir 4 katına çıktığını söylemiştir. Öğrenciler bir kap mantarı seraya koymuş ve 8 gün sonra kaptaki mantar sayısını 4^{5} olarak saymıştır.\n**Buna göre öğrenciler seraya başlangıçta kaç mantar koymuştur?**",
  gorsel: `<table class="tablo"><tr><th>Geçen gün</th><th>0. gün</th><th>2. gün</th><th>4. gün</th></tr><tr><td>Mantar sayısı</td><td>başlangıç</td><td>başlangıcın 4 katı</td><td>başlangıcın 4<sup>2</sup> katı</td></tr></table>`,
  secenekler: ["4", "16", "64", "256"],
  dogru: 0,
  hatalar: [
    null,
    "Katlanma sayısını 3 sanma: 8 günde 8 ÷ 2 = 4 katlanma olur. Üç katlanmayla 4^{5} ÷ 4^{3} = 4^{2} = 16 bulunur.",
    "Katlanma sayısını 2 sanma: 4^{5} ÷ 4^{2} = 4^{3} = 64 bulunmuş.",
    "Katlanma sayısını 1 sanma: 8 günün tamamı tek bir katlanma sayılıp 4^{5} ÷ 4^{1} = 4^{4} = 256 bulunmuş."
  ],
  aciklama: `Bir büyüklük her adımda aynı sayıyla çarpılıyorsa, sonuç başlangıç değerinin o sayının kuvvetiyle çarpımıdır. Başlangıcı bulmak için bölme yapılır; aynı tabanlı bölmede üsler çıkarılır.
Adım 1: Kaç katlanma olduğunu bul: katlanma her 2 günde bir olduğuna göre 8 günde 8 ÷ 2 = 4 katlanma olur.
Adım 2: İlişkiyi kur: başlangıç sayısı b ise 8 gün sonra b · 4^{4} mantar olur.
Adım 3: Eşitliği kullan: b · 4^{4} = 4^{5} olduğundan b = 4^{5} ÷ 4^{4} = 4^{5−4} = 4^{1} = 4.
Sağlama: Baştan ilerle: 4 → 16 → 64 → 256 → 1024. Dört katlanma sonunda 1024 olur ve 4^{5} = 1024'tür.
Sık yapılan hata: Gün sayısını doğrudan üs sanmak. Katlanma iki günde bir olduğu için üs, gün sayısının yarısıdır.
Cevap A.`
},
/* ===================== KADEME 3 — LGS AYARI (313-325) ===================== */
{
  id: "mat-ui-313",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir hidroelektrik barajının türbinlerinden bir günde geçen su miktarı ile aynı vadideki sulama kanalının bir günde taşıdığı su miktarı ölçülmüştür. Bölge müdürlüğü hazırladığı bilgilendirme afişine, türbinlerden geçen suyun kanaldan geçen suyun kaç katı olduğunu yazacaktır. Ölçüm sonuçları aşağıda verilmiştir.\n**Buna göre afişe yazılacak sayı aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 170" role="img" aria-label="Türbinlerden günde 8,4 çarpı 10 üssü 8 litre, kanaldan günde 2,1 çarpı 10 üssü 5 litre su geçiyor"><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><rect x="26" y="26" width="220" height="54" rx="6"/><rect x="26" y="98" width="220" height="54" rx="6"/></g><g fill="currentColor" font-size="16"><text x="44" y="50">Türbinler</text><text x="44" y="122">Sulama kanalı</text></g><g fill="var(--vurgu)" font-size="18" font-weight="bold"><text x="270" y="58">8,4 · 10<tspan font-size="14" dy="-8">8</tspan><tspan dy="8"> litre/gün</tspan></text><text x="270" y="130">2,1 · 10<tspan font-size="14" dy="-8">5</tspan><tspan dy="8"> litre/gün</tspan></text></g><g stroke="var(--vurgu2)" stroke-width="2"><line x1="250" y1="53" x2="264" y2="53"/><line x1="250" y1="125" x2="264" y2="125"/></g></svg>`,
  secenekler: ["4 · 10^{13}", "6,3 · 10^{3}", "4 · 10^{3}", "2,5 · 10^{-4}"],
  dogru: 2,
  hatalar: [
    "Bölmede üsleri toplama: 8 + 5 = 13 alınmış. Aynı tabanlı bölmede üsler çıkarılır.",
    "Bölme yerine çıkarma yapma: 8,4 − 2,1 = 6,3 alınmış. \"Kaç katıdır\" sorusu bölme gerektirir.",
    null,
    "Böleni ve böleneni ters alma: 2,1 ÷ 8,4 = 0,25 ve 10^{5−8} = 10^{-3} alınıp 2,5 · 10^{-4} bulunmuş."
  ],
  aciklama: `Bilimsel gösterimle yazılmış iki sayı bölünürken baştaki sayılar kendi aralarında bölünür, 10'un kuvvetlerinde ise üsler çıkarılır: (a · 10^{n}) ÷ (b · 10^{m}) = (a ÷ b) · 10^{n−m}.
Adım 1: Baştaki sayıları böl: 8,4 ÷ 2,1 = 4.
Adım 2: Üsleri çıkar: 10^{8} ÷ 10^{5} = 10^{8−5} = 10^{3}.
Adım 3: Sonucu birleştir: 4 · 10^{3}. Yani türbinlerden geçen su, kanaldan geçen suyun 4000 katıdır.
Sağlama: Ters yönde dene: 2,1 · 10^{5} · 4 · 10^{3} = 8,4 · 10^{5+3} = 8,4 · 10^{8}. Başlangıçtaki değere ulaşıldı.
Sık yapılan hata: "Kaç katıdır" sorusunda çıkarma yapmak. Kat sorusu her zaman bölme ile çözülür.
Cevap C.`
},
{
  id: "mat-ui-314",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir eğitsel bilgisayar oyununda oyuncunun puanı her seviye atlayışında 9 katına çıkmaktadır. Oyunun puan tablosunda bütün puanlar 3'ün bir kuvveti biçiminde gösterilmektedir. Oyuna 3^{2} puanla başlayan bir oyuncu, hiç puan kaybetmeden 4 seviye atlamıştır. Tablonun ilk satırları aşağıda verilmiştir.\n**Buna göre oyuncunun 4 seviye sonundaki puanı aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Atlanan seviye</th><th>0</th><th>1</th><th>2</th></tr><tr><td>Puan</td><td>3<sup>2</sup></td><td>3<sup>2</sup> · 9</td><td>3<sup>2</sup> · 9<sup>2</sup></td></tr></table>`,
  secenekler: ["3^{16}", "3^{10}", "3^{8}", "3^{6}"],
  dogru: 1,
  hatalar: [
    "Çarpmada üsleri çarpma: 2 · 8 = 16 alınmış. Aynı tabanlı çarpmada üsler toplanır.",
    null,
    "Başlangıç puanını hesaba katmama: yalnızca 9^{4} = 3^{8} hesaplanmış.",
    "Tabanı çevirirken üssü değiştirmeme: 9^{4} ifadesi 3^{4} sanılmış; oysa 9 = 3^{2} olduğundan 9^{4} = 3^{8}'dir."
  ],
  aciklama: `Farklı tabanlı üslü ifadeler ancak ortak bir tabana çevrildikten sonra birleştirilebilir. Tabanı çevirirken üssün üssü kuralı kullanılır: (a^{n})^{m} = a^{n·m}.
Adım 1: Tabloyu oku. 4 seviye sonunda puan 3^{2} · 9^{4} olur.
Adım 2: 9 sayısını 3'ün kuvveti olarak yaz: 9 = 3^{2}.
Adım 3: Üssün üssünü al: 9^{4} = (3^{2})^{4} = 3^{2·4} = 3^{8}.
Adım 4: Aynı tabanlı çarpımı yap: 3^{2} · 3^{8} = 3^{2+8} = 3^{10}.
Sağlama: Sayılarla dene. 3^{2} = 9 puanla başlanır; her seviyede 9 ile çarpılır: 9 · 9 · 9 · 9 · 9 = 59 049. 3^{10} = 59 049'dur.
Sık yapılan hata: 9^{4} ifadesini 3^{4} sanmak. Taban 3 kat büyümez, karesi alınır; bu yüzden üs iki katına çıkar.
Cevap B.`
},
{
  id: "mat-ui-315",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir terzi atölyesinde kumaş toplarının uzunlukları etiketlere, 10'un tam sayı kuvvetleriyle çözümlenmiş biçimde yazılmaktadır. Usta, perde siparişi için elindeki dört toptan en uzun olanını seçecektir. Toplara ait etiketler aşağıdaki tabloda verilmiştir.\n**Buna göre ustanın seçeceği top hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Top</th><th>Etikette yazan uzunluk (m)</th></tr><tr><td>K</td><td>5 · 10<sup>0</sup> + 2 · 10<sup>−2</sup></td></tr><tr><td>L</td><td>4 · 10<sup>0</sup> + 9 · 10<sup>−1</sup> + 8 · 10<sup>−2</sup></td></tr><tr><td>M</td><td>5 · 10<sup>0</sup> + 9 · 10<sup>−3</sup></td></tr><tr><td>N</td><td>5 · 10<sup>0</sup> + 1 · 10<sup>−1</sup></td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 3,
  hatalar: [
    "İkinci terimin rakamına bakıp karar verme: K topunda 2 · 10^{-2} = 0,02'dir; N topundaki 1 · 10^{-1} = 0,1 bundan büyüktür.",
    "Terim sayısı çok olanı uzun sanma: L topunun uzunluğu 4,98 m'dir ve 5 m'yi bile geçmez.",
    "Büyük rakamı büyük değer sanma: M topundaki 9 · 10^{-3} = 0,009'dur, yani çok küçük bir eklemedir.",
    null
  ],
  aciklama: `Çözümlenmiş biçimde yazılmış sayılar karşılaştırılırken önce her biri ondalık gösterime çevrilir. Bir terimin büyüklüğünü rakam değil, 10'un üssü belirler: 10^{-1} > 10^{-2} > 10^{-3}'tür.
Adım 1: K topunu çöz: 5 + 0,02 = 5,02 m.
Adım 2: L topunu çöz: 4 + 0,9 + 0,08 = 4,98 m.
Adım 3: M topunu çöz: 5 + 0,009 = 5,009 m.
Adım 4: N topunu çöz: 5 + 0,1 = 5,1 m.
Adım 5: Karşılaştır: 4,98 < 5,009 < 5,02 < 5,1. En uzun top N'dir.
Sağlama: Dört sayıyı da yüzde birler basamağına kadar yaz: 4,98 ; 5,00 ; 5,02 ; 5,10. En büyük olan 5,10'dur.
Sık yapılan hata: M topundaki 9 rakamını görüp onu en uzun sanmak. 9 rakamı binde birler basamağındadır, yani yalnızca 0,009 değerindedir.
Cevap D.`
},
{
  id: "mat-ui-316",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir gıda fabrikasında ürünler önce kutulanmakta, kutular kolilere, koliler de tırlara yüklenmektedir. Bir kutuda 24 paket, bir kolide 10^{2} kutu, bir tırda ise 10^{3} koli bulunmaktadır. Bütün kutular, koliler ve tırlar tam dolu olarak yüklenmektedir. Sevkiyat sorumlusu bir tırdaki paket sayısını bilimsel gösterimle rapora yazacaktır.\n**Buna göre rapora yazılacak gösterim aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 540 130" role="img" aria-label="Bir kutuda 24 paket, bir kolide 10 üssü 2 kutu, bir tırda 10 üssü 3 koli"><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><rect x="24" y="34" width="100" height="58" rx="6"/><rect x="204" y="34" width="100" height="58" rx="6"/><rect x="384" y="34" width="110" height="58" rx="6"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="74" y="60">KUTU</text><text x="254" y="60">KOLİ</text><text x="439" y="60">TIR</text><text x="74" y="84">24 paket</text><text x="254" y="84">10<tspan font-size="13" dy="-7">2</tspan><tspan dy="7"> kutu</tspan></text><text x="439" y="84">10<tspan font-size="13" dy="-7">3</tspan><tspan dy="7"> koli</tspan></text></g><g stroke="var(--vurgu)" stroke-width="2" fill="none"><path d="M132 63 h62 M182 54 l14 9 -14 9"/><path d="M312 63 h62 M362 54 l14 9 -14 9"/></g></svg>`,
  secenekler: ["2,4 · 10^{3}", "2,4 · 10^{5}", "2,4 · 10^{6}", "24 · 10^{6}"],
  dogru: 2,
  hatalar: [
    "Bir adımı atlama: yalnızca 24 · 10^{2} = 2400 hesaplanıp bir tırdaki koli sayısı hesaba katılmamış.",
    "24 · 10^{5} ifadesinde baştaki sayıyı 2,4 yaparken üssü 1 artırmayı unutma: doğrusu 2,4 · 10^{6}'dır.",
    null,
    "Baştaki sayıyı 1 ile 10 arasına çekmeme: 24 sayısı 10'dan büyük olduğu için bu bir bilimsel gösterim değildir; üstelik değeri 10 kat büyüktür."
  ],
  aciklama: `Zincirleme sayma problemlerinde her basamaktaki sayı çarpılır. 10'un kuvvetleri çarpılırken üsler toplanır.
Adım 1: Bir kolideki paket sayısını bul: 24 · 10^{2} = 2400 paket.
Adım 2: Bir tırdaki paket sayısını bul: 2400 · 10^{3} = 24 · 10^{2} · 10^{3} = 24 · 10^{2+3} = 24 · 10^{5}.
Adım 3: Bilimsel gösterime çevir: baştaki sayı 1 ile 10 arasında olmalıdır. 24 sayısını 10 kat küçültüp 2,4 yaz, karşılığında üssü 1 artır: 24 · 10^{5} = 2,4 · 10^{6}.
Sağlama: 2,4 · 10^{6} = 2 400 000. Doğrudan da hesaplayabilirsin: 24 · 100 · 1000 = 2 400 000.
Sık yapılan hata: 24 · 10^{5} ifadesini bilimsel gösterim sanmak. Bilimsel gösterimde baştaki sayı 1 ile 10 arasında olmak zorundadır.
Cevap C.`
},
{
  id: "mat-ui-317",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir soğuk hava deposunun kapısında üst üste asılan yalıtım perdeleri kullanılmaktadır. Her perde, kendisine ulaşan ısı kaybını üçte birine düşürmektedir. Depo sorumlusu kapıya 4 perde asmıştır. Perdelerin ısı kaybına etkisi aşağıdaki tabloda verilmiştir.\n**Buna göre 4 perde asıldığında ısı kaybı, hiç perde yokkenki kaybın kaçta kaçına iner?**",
  gorsel: `<table class="tablo"><tr><th>Asılan perde sayısı</th><th>1</th><th>2</th><th>3</th></tr><tr><td>Kalan ısı kaybı</td><td>ilk kaybın 3'te 1'i</td><td>ilk kaybın 9'da 1'i</td><td>ilk kaybın 27'de 1'i</td></tr></table>`,
  secenekler: ["[[1|81]]", "[[1|27]]", "[[1|12]]", "[[1|9]]"],
  dogru: 0,
  hatalar: [
    null,
    "Bir perdeyi eksik sayma: 27 = 3^{3}'tür, yani bu değer 3 perdeye aittir.",
    "Üs almak yerine çarpma yapma: 3 · 4 = 12 alınmış. Her perdede üçe bölme yeniden yapıldığı için üslü ifade kullanılır.",
    "İki perdeyi eksik sayma: 9 = 3^{2}'dir, yani bu değer 2 perdeye aittir."
  ],
  aciklama: `Bir büyüklük her adımda aynı sayıya bölünüyorsa, adım sayısı kadar kez bölünmüş olur. Bu durum negatif üsle de yazılabilir: üçte bire inme, 3^{-1} ile çarpma demektir.
Adım 1: Tablodaki örüntüyü oku: 1 perdede 3^{1}'de 1, 2 perdede 3^{2}'de 1, 3 perdede 3^{3}'te 1 kalıyor. Demek ki perde sayısı üssü veriyor.
Adım 2: Kuralı 4 perdeye uygula: kalan kayıp, ilk kaybın 3^{4}'te 1'idir.
Adım 3: Hesapla: 3^{4} = 81. Yani kayıp, ilk kaybın [[1|81]]'ine iner.
Sağlama: Adım adım git: ilk kayıp 81 birim olsaydı perdelerden sonra sırasıyla 27, 9, 3 ve 1 birim kalırdı. Son değer başlangıcın [[1|81]]'idir.
Sık yapılan hata: Perde sayısını üs yerine çarpan sanıp 3 · 4 = 12 yazmak. Tekrarlanan bölme, çarpma ile değil üs ile gösterilir.
Cevap A.`
},
{
  id: "mat-ui-318",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bilim olimpiyatında takımların puanları duyuru panosunda üslü ifadelerle ilan edilmektedir. Panoda A takımının puanı 4^{6}, B takımının puanı ise 2^{11} olarak yazılıdır. Öğrenciler tabanları farklı olan bu iki puanı karşılaştırmak istemektedir.\n**Buna göre A takımının puanı B takımının puanının kaç katıdır?**",
  gorsel: `<svg viewBox="0 0 460 140" role="img" aria-label="Duyuru panosu: A takımı 4 üssü 6 puan, B takımı 2 üssü 11 puan"><rect x="20" y="18" width="420" height="104" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="230" y1="18" x2="230" y2="122" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="17" text-anchor="middle"><text x="125" y="48">A TAKIMI</text><text x="335" y="48">B TAKIMI</text></g><g fill="var(--vurgu)" font-size="30" font-weight="bold" text-anchor="middle"><text x="125" y="96">4<tspan font-size="20" dy="-12">6</tspan></text><text x="335" y="96">2<tspan font-size="20" dy="-12">11</tspan></text></g></svg>`,
  secenekler: ["[[1|2]]", "1", "2", "4"],
  dogru: 2,
  hatalar: [
    "Karşılaştırmayı ters yönde yapma: 2^{11} ÷ 2^{12} = 2^{-1} = [[1|2]] bulunmuş. Soruda A'nın B'ye oranı istenmektedir.",
    "Üsler arasındaki 1 farkını \"fark yok\" diye okuma: 2^{12} ÷ 2^{11} = 2^{1} = 2'dir, 1 değil.",
    null,
    "Üsler arasındaki farkı 2 sanma: 12 − 11 = 1 olduğundan oran 2^{1}'dir, 2^{2} değil."
  ],
  aciklama: `Tabanları farklı iki üslü ifade karşılaştırılırken ikisi de aynı tabana çevrilir. Burada 4 sayısı 2'nin kuvveti olarak yazılabilir: 4 = 2^{2}.
Adım 1: A takımının puanını 2 tabanına çevir: 4^{6} = (2^{2})^{6} = 2^{2·6} = 2^{12}.
Adım 2: Oranı yaz: 2^{12} ÷ 2^{11}.
Adım 3: Aynı tabanlı bölmede üsleri çıkar: 2^{12−11} = 2^{1} = 2.
Sağlama: Küçük sayılarla dene. 4^{2} = 16 ve 2^{3} = 8'dir; 16 ÷ 8 = 2 eder. Aynı ilişki büyük üslerde de geçerlidir.
Sık yapılan hata: 4^{6} ifadesini 2^{6} ya da 2^{8} sanmak. Taban 4'ten 2'ye inerken üs iki katına çıkar, çünkü 4 = 2^{2}'dir.
Cevap C.`
},
{
  id: "mat-ui-319",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir gıda laboratuvarında maya hücrelerinin kütlesi incelenmektedir. Ölçümlerde tek bir maya hücresinin kütlesi 2,5 · 10^{-12} gram bulunmuştur. Araştırmacı, hazırladığı kültürde 8 · 10^{7} maya hücresi olduğunu belirlemiştir. Rapora, kültürdeki hücrelerin toplam kütlesi bilimsel gösterimle yazılacaktır.\n**Buna göre rapora yazılacak gösterim aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Ölçülen büyüklük</th><th>Değer</th></tr><tr><td>Bir maya hücresinin kütlesi</td><td>2,5 · 10<sup>−12</sup> g</td></tr><tr><td>Kültürdeki hücre sayısı</td><td>8 · 10<sup>7</sup></td></tr></table>`,
  secenekler: ["2 · 10^{-19}", "2 · 10^{-6}", "2 · 10^{-5}", "2 · 10^{-4}"],
  dogru: 3,
  hatalar: [
    "Üsleri toplarken ikinci üssü de negatif sayma: (−12) + 7 = −5'tir; (−12) + (−7) = −19 alınmış.",
    "20 · 10^{-5} ifadesini düzeltirken üssü ters yönde değiştirme: baştaki sayı 10 kat küçültülünce üs 1 artar, azalmaz.",
    "20 · 10^{-5} ifadesinde baştaki sayıyı 2 yapıp üssü değiştirmeyi unutma.",
    null
  ],
  aciklama: `Bilimsel gösterimle yazılmış sayılar çarpılırken baştaki sayılar çarpılır, 10'un kuvvetlerinde üsler toplanır. Sonuçta baştaki sayı 1 ile 10 arasında değilse gösterim yeniden düzenlenir.
Adım 1: Baştaki sayıları çarp: 2,5 · 8 = 20.
Adım 2: Üsleri topla: 10^{-12} · 10^{7} = 10^{-12+7} = 10^{-5}.
Adım 3: Ara sonucu yaz: 20 · 10^{-5}. Baştaki sayı 10'dan büyük olduğu için bu henüz bilimsel gösterim değildir.
Adım 4: Düzenle: 20 sayısını 10 kat küçültüp 2 yap, karşılığında üssü 1 artır: 20 · 10^{-5} = 2 · 10^{-4}.
Sağlama: 2 · 10^{-4} = 0,0002 gramdır. Hücre başına 0,0000000000025 g düşer ve 80 000 000 hücre için 0,0002 g bulunur.
Sık yapılan hata: Negatif üsle pozitif üs toplanırken işaretleri karıştırmak. (−12) + 7 işleminde büyük olan 12 negatif olduğu için sonuç negatiftir: −5.
Cevap D.`
},
{
  id: "mat-ui-320",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir doğa kulübünün üyeleri gözlemledikleri dört böceğin kanat uzunluklarını not defterine yazmıştır. Ancak her üye kendi alışkanlığına göre yazdığı için uzunluklar farklı biçimlerde kaydedilmiştir. Kulüp danışmanı notları düzenlerken kanadı en uzun olan böceği belirlemek istemektedir. Defterdeki kayıtlar aşağıdaki tabloda verilmiştir.\n**Buna göre kanadı en uzun olan böcek hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Böcek</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Kanat uzunluğu (m)</td><td>0,004</td><td>3,5 · 10<sup>−3</sup></td><td>0,0038</td><td>45 · 10<sup>−4</sup></td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 3,
  hatalar: [
    "Yalnızca düz yazılmış sayıları karşılaştırma: 0,004 m, N böceğindeki 45 · 10^{-4} = 0,0045 m'den küçüktür.",
    "Baştaki sayıya bakıp karar verme: 3,5 · 10^{-3} = 0,0035 m'dir ve dört kayıt içinde en küçüğüdür.",
    "Virgülden sonraki basamak sayısı çok olanı büyük sanma: 0,0038 m, 0,0045 m'den küçüktür.",
    null
  ],
  aciklama: `Farklı biçimlerde yazılmış sayılar ancak ortak bir biçime çevrildikten sonra karşılaştırılabilir. En güvenli yol hepsini ondalık gösterime çevirmektir.
Adım 1: K kaydı zaten ondalıktır: 0,004 m.
Adım 2: L kaydını çevir: 3,5 · 10^{-3} = 0,0035 m.
Adım 3: M kaydı zaten ondalıktır: 0,0038 m.
Adım 4: N kaydını çevir: 45 · 10^{-4} = 45 ÷ 10 000 = 0,0045 m.
Adım 5: Sırala: 0,0035 < 0,0038 < 0,004 < 0,0045. En uzun kanat N böceğine aittir.
Sağlama: Dört sayıyı da on binde birler basamağına kadar yaz: 0,0040 ; 0,0035 ; 0,0038 ; 0,0045. En büyüğü 0,0045'tir.
Sık yapılan hata: 45 · 10^{-4} gösterimindeki 45 sayısını küçük bir değer sanmak ya da doğrudan 45 diye büyük görmek. Gösterimin değeri ancak 10'un kuvveti uygulandıktan sonra anlaşılır.
Cevap D.`
},
{
  id: "mat-ui-321",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ilaç fabrikasında hazırlanan sıvı ilaç, depodan alınıp küçük şişelere doldurulmaktadır. Depoda bulunan ilacın tamamı şişelenecek, doldurulan şişeler 250'şerli kolilere yerleştirilecektir. Şişeleme sonunda bütün koliler tam dolmaktadır. Depodaki ilaç miktarı ile bir şişenin aldığı ilaç miktarı aşağıda verilmiştir.\n**Buna göre bu ilaçtan kaç koli elde edilir?**",
  gorsel: `<svg viewBox="0 0 520 160" role="img" aria-label="Depoda 1,2 çarpı 10 üssü 3 litre ilaç, bir şişe 4 çarpı 10 üssü eksi 2 litre, bir koli 250 şişe"><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><path d="M30 40 h96 v88 h-96 z"/><path d="M212 48 h34 v80 h-34 z"/><path d="M222 32 h14 v16 h-14 z"/><rect x="330" y="48" width="86" height="80" rx="5"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="78" y="150">Depo</text><text x="229" y="150">Şişe</text><text x="373" y="150">Koli</text></g><g fill="var(--vurgu)" font-size="16" font-weight="bold" text-anchor="middle"><text x="78" y="92">1,2 · 10<tspan font-size="13" dy="-8">3</tspan><tspan dy="8"> L</tspan></text><text x="229" y="98">4 · 10<tspan font-size="13" dy="-8">−2</tspan><tspan dy="8"> L</tspan></text><text x="373" y="94">250 şişe</text></g></svg>`,
  secenekler: ["12", "120", "1200", "30 000"],
  dogru: 1,
  hatalar: [
    "Baştaki sayıları bölerken virgülü fazladan kaydırma: 1,2 ÷ 4 = 0,3'tür, 0,03 değil. Bu hatayla 3000 şişe, yani 12 koli bulunur.",
    null,
    "Baştaki sayıları bölerken sonucu 3 sanma: 1,2 ÷ 4 işleminin sonucu 0,3'tür. Bu hatayla 300 000 şişe, yani 1200 koli bulunur.",
    "Ara sonucu cevap sanma: 30 000 sayısı şişe sayısıdır; soruda koli sayısı istenmektedir."
  ],
  aciklama: `Bilimsel gösterimle yazılmış sayılar bölünürken baştaki sayılar bölünür, üsler çıkarılır. Üslerden biri negatifse çıkarma işleminde işaret dikkatle kullanılır.
Adım 1: Şişe sayısını bul: (1,2 · 10^{3}) ÷ (4 · 10^{-2}).
Adım 2: Baştaki sayıları böl: 1,2 ÷ 4 = 0,3.
Adım 3: Üsleri çıkar: 3 − (−2) = 3 + 2 = 5. Yani 10^{5}.
Adım 4: Ara sonucu düzenle: 0,3 · 10^{5} = 30 000 şişe.
Adım 5: Koli sayısını bul: 30 000 ÷ 250 = 120 koli.
Sağlama: 120 koli · 250 şişe = 30 000 şişe; 30 000 · 0,04 L = 1200 L. Bu, depodaki 1,2 · 10^{3} L ilaca eşittir.
Sık yapılan hata: Şişe sayısını bulunca durmak. Soruda koli sayısı istendiği için bir bölme adımı daha gerekir.
Cevap B.`
},
{
  id: "mat-ui-322",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir matematik etkinliğinde öğrencilere (−2)^{n} üslü ifadesi verilmiştir. Öğrencilerden n yerine sırasıyla −2, −1, 0, 1, 2 ve 3 tam sayılarını yazmaları ve elde ettikleri altı sonucu bir tabloya işlemeleri istenmiştir. Öğretmen, tablo tamamlandıktan sonra sonuçların bir kısmının tam sayı, bir kısmının ise kesir olduğunu söylemiştir. Öğrencilerden sonuçları bu ölçüte göre ayırmaları beklenmektedir.\n**Buna göre elde edilen altı sonuçtan kaç tanesi tam sayıdır?**",
  gorsel: `<table class="tablo"><tr><th>n</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>(−2)<sup>n</sup></th><td>?</td><td>?</td><td>?</td><td>?</td><td>?</td><td>?</td></tr></table>`,
  secenekler: ["2", "3", "4", "6"],
  dogru: 2,
  hatalar: [
    "Yalnızca pozitif sonuçları sayma: 1 ve 4 tam sayıdır ama −2 ile −8 de tam sayıdır.",
    "(−2)^{0} sonucunu 0 sanıp saymama: sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir.",
    null,
    "Negatif üslü sonuçları da tam sayı sanma: (−2)^{-1} = −[[1|2]] ve (−2)^{-2} = [[1|4]] değerleri tam sayı değildir."
  ],
  aciklama: `Üç kural bir arada gerekir: negatif bir sayının tek kuvveti negatif, çift kuvveti pozitiftir; sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir; negatif üs ise sayının çarpmaya göre tersini verir (a^{-n} = [[1|a^{n}]]).
Adım 1: n = −2 için hesapla: (−2)^{-2} = [[1|(−2)^{2}]] = [[1|4]]. Kesirdir.
Adım 2: n = −1 için hesapla: (−2)^{-1} = [[1|−2]] = −[[1|2]]. Kesirdir.
Adım 3: n = 0 için hesapla: (−2)^{0} = 1. Tam sayıdır.
Adım 4: n = 1, 2 ve 3 için hesapla: (−2)^{1} = −2 ; (−2)^{2} = 4 ; (−2)^{3} = −8. Üçü de tam sayıdır.
Adım 5: Say: 1, −2, 4 ve −8 olmak üzere 4 sonuç tam sayıdır.
Sağlama: Negatif sayılar da tam sayıdır; bu yüzden −2 ve −8 sayıları listeye girer. Kesir olanlar yalnızca üssü negatif olan iki sonuçtur.
Sık yapılan hata: Tam sayı denince yalnızca pozitif sayıları düşünmek ya da (−2)^{0} sonucunu 0 sanmak.
Cevap C.`
},
{
  id: "mat-ui-323",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir optik atölyesinde mercek yüzeylerine ince bir koruyucu film kaplanmaktadır. Kaplamanın kabul edilebilmesi için kalınlığının 3,2 · 10^{-4} metre ile 5,8 · 10^{-4} metre arasında olması gerekmekte, bu iki sınır değerin kendisi de kabul edilmektedir. Kalite kontrol görevlisi gelen dört merceğin kaplama kalınlığını ölçmüş, değerleri alışkanlığına göre kimi zaman ondalık gösterimle kimi zaman 10'un kuvvetiyle not etmiştir. Ölçümlerden yalnızca biri kabul sınırlarının dışında kalmaktadır.\n**Buna göre aşağıdaki ölçümlerden hangisi __kabul edilemez__?**",
  gorsel: `<svg viewBox="0 0 520 130" role="img" aria-label="Kabul aralığı: 3,2 çarpı 10 üssü eksi 4 metre ile 5,8 çarpı 10 üssü eksi 4 metre arası"><line x1="40" y1="70" x2="480" y2="70" stroke="currentColor" stroke-width="2"/><rect x="150" y="56" width="220" height="28" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g stroke="currentColor" stroke-width="2"><line x1="150" y1="50" x2="150" y2="90"/><line x1="370" y1="50" x2="370" y2="90"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="150" y="40">3,2 · 10<tspan font-size="12" dy="-7">−4</tspan><tspan dy="7"> m</tspan></text><text x="370" y="40">5,8 · 10<tspan font-size="12" dy="-7">−4</tspan><tspan dy="7"> m</tspan></text><text x="260" y="112">kabul edilen kalınlık aralığı</text></g></svg>`,
  secenekler: ["3,9 · 10^{-4}", "0,00048", "5,4 · 10^{-4}", "62 · 10^{-5}"],
  dogru: 3,
  hatalar: [
    "Baştaki sayıyı alt sınırın baştaki sayısıyla karşılaştırırken yanılma: 3,9 sayısı 3,2'den büyüktür, yani bu ölçüm aralığın içindedir.",
    "Ondalık gösterimi çevirmeden eleme: 0,00048 = 4,8 · 10^{-4}'tür ve aralığın tam ortasına yakındır.",
    "Üst sınıra yakın değeri sınır dışı sanma: 5,4 · 10^{-4} ölçümü, üst sınır olan 5,8 · 10^{-4}'ten küçüktür.",
    null
  ],
  aciklama: `Farklı biçimlerde yazılmış sayıları bir aralıkla karşılaştırmadan önce hepsini aynı gösterime çevirmek gerekir. Burada en kolayı hepsini "… · 10^{-4}" biçimine getirmektir.
Adım 1: Sınırları yaz: alt sınır 3,2 · 10^{-4}, üst sınır 5,8 · 10^{-4}.
Adım 2: Ölçümleri tek tek çevir. 3,9 · 10^{-4} zaten bu biçimdedir. 0,00048 = 4,8 · 10^{-4}'tür. 5,4 · 10^{-4} zaten bu biçimdedir. 62 · 10^{-5} ifadesinde baştaki sayıyı 10 kat küçültüp üssü 1 artır: 6,2 · 10^{-4}.
Adım 3: Karşılaştır: 3,9 ; 4,8 ve 5,4 sayıları 3,2 ile 5,8 arasındadır. 6,2 sayısı ise 5,8'den büyüktür.
Adım 4: Öyleyse kabul edilemeyen ölçüm 62 · 10^{-5}'tir.
Sağlama: Ondalık gösterimle de bak: 0,00039 ; 0,00048 ; 0,00054 kabul aralığı olan 0,00032 – 0,00058 içindedir; 0,00062 ise dışarıdadır.
Sık yapılan hata: 62 · 10^{-5} gösterimini 6,2 · 10^{-5} sanıp çok küçük bir değer olarak görmek. Baştaki sayı küçültülürken üs artırılmalıdır.
Cevap D.`
},
{
  id: "mat-ui-324",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir belediyenin arşiv biriminde eski belgeler taranarak dijital ortama aktarılmaktadır. Taranan her belge bellekte 5^{3} kilobayt yer kaplamaktadır. Birimde kullanılan taşınabilir belleklerin her birinde 5^{6} kilobayt boş yer bulunmaktadır. Bu hafta 2100 belge taranacak; belgeler belleklere sırayla, bir bellek tamamen dolduktan sonra diğerine geçilerek kaydedilecektir. Son belleğin tamamen dolması gerekmemektedir.\n**Buna göre bu haftaki belgelerin tamamının kaydedilebilmesi için en az kaç taşınabilir bellek gerekir?**",
  gorsel: `<table class="tablo"><tr><th>Büyüklük</th><th>Değer</th></tr><tr><td>Bir belgenin kapladığı yer</td><td>5<sup>3</sup> kilobayt</td></tr><tr><td>Bir belleğin boş yeri</td><td>5<sup>6</sup> kilobayt</td></tr><tr><td>Taranacak belge sayısı</td><td>2100</td></tr></table>`,
  secenekler: ["16", "17", "21", "84"],
  dogru: 1,
  hatalar: [
    "Kalanı göz ardı etme: 16 bellek 16 · 125 = 2000 belge alır; geriye kalan 100 belge için bir bellek daha gerekir.",
    null,
    "Bir belleğe sığan belge sayısını 100 sanma: 5^{3} = 125'tir, 100 değil.",
    "Bölmede üsleri yanlış çıkarma: 6 − 3 = 3'tür. Üs 2 alınırsa bir belleğe 25 belge sığdığı sanılır ve 2100 ÷ 25 = 84 bulunur."
  ],
  aciklama: `Aynı tabanlı bölmede üsler çıkarılır: a^{n} ÷ a^{m} = a^{n−m}. "En az kaç" soruları, bölmede kalan varsa sonucun bir artırılmasını gerektirir.
Adım 1: Bir belleğe kaç belge sığdığını bul: 5^{6} ÷ 5^{3} = 5^{6−3} = 5^{3} = 125 belge.
Adım 2: Gereken bellek sayısını hesapla: 2100 ÷ 125 işlemini yap. 125 · 16 = 2000 olduğundan 16 bellek dolar, geriye 2100 − 2000 = 100 belge kalır.
Adım 3: Kalan 100 belge de kaydedilmek zorunda olduğu için bir bellek daha gerekir: 16 + 1 = 17 bellek.
Sağlama: 17 bellek 17 · 125 = 2125 belge alabilir; bu, 2100 belgeyi karşılar. 16 bellek ise yalnızca 2000 belge alır ve yetmez.
Sık yapılan hata: Bölme sonucunun tam çıkmadığı durumlarda kalanı yok sayıp aşağı yuvarlamak. "En az kaç" sorularında kalan varsa sonuç bir artırılır.
Cevap B.`
},
{
  id: "mat-ui-325",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir kargo uçağının kalkışta taşıyabileceği toplam yük 4,86 · 10^{4} kilogramı geçemez. Bu toplam yükün içinde uçağın yakıtı da sayılmaktadır ve uçağa 8 · 10^{3} kilogram yakıt alınmıştır. Uçağa yüklenecek kutuların her biri 2,5 · 10^{2} kilogram gelmekte, kutular bölünememekte ve kısmen yüklenememektedir. Yükleme görevlisi, yakıt alındıktan sonra kalan kapasiteyi aşmadan kutuları yükleyecektir.\n**Buna göre uçağa en fazla kaç kutu yüklenebilir?**",
  gorsel: `<svg viewBox="0 0 520 160" role="img" aria-label="Uçağın toplam yük sınırı 4,86 çarpı 10 üssü 4 kilogram, yakıt 8 çarpı 10 üssü 3 kilogram, bir kutu 2,5 çarpı 10 üssü 2 kilogram"><rect x="24" y="24" width="300" height="112" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="24" y1="62" x2="324" y2="62" stroke="currentColor" stroke-width="2"/><text x="44" y="50" fill="currentColor" font-size="16" font-weight="bold">YÜKLEME KARTI</text><g fill="currentColor" font-size="16"><text x="44" y="92">Toplam sınır: 4,86 · 10<tspan font-size="13" dy="-8">4</tspan><tspan dy="8"> kg</tspan></text><text x="44" y="124">Yakıt: 8 · 10<tspan font-size="13" dy="-8">3</tspan><tspan dy="8"> kg</tspan></text></g><g stroke="var(--vurgu)" stroke-width="2" fill="none"><rect x="368" y="54" width="120" height="56" rx="5"/><line x1="368" y1="82" x2="488" y2="82"/></g><text x="428" y="46" fill="currentColor" font-size="15" text-anchor="middle">Bir kutu</text><text x="428" y="132" fill="var(--vurgu)" font-size="16" font-weight="bold" text-anchor="middle">2,5 · 10<tspan font-size="13" dy="-8">2</tspan><tspan dy="8"> kg</tspan></text></svg>`,
  secenekler: ["162", "163", "194", "1624"],
  dogru: 0,
  hatalar: [
    null,
    "Sınırı aşacak biçimde yukarı yuvarlama: 163 kutu 163 · 250 = 40 750 kg eder ve kalan 40 600 kg'lık kapasiteyi aşar.",
    "Yakıtı hesaba katmama: 48 600 ÷ 250 = 194,4 alınıp 194 bulunmuş; oysa yakıt da toplam yüke dâhildir.",
    "Kutu kütlesini 25 kg sanma: 2,5 · 10^{2} = 250'dir. 40 600 ÷ 25 işlemiyle 1624 bulunur."
  ],
  aciklama: `Bilimsel gösterimle verilen büyüklükler bir arada kullanılacaksa önce düz sayıya çevrilir. "En fazla kaç" sorularında bölme tam çıkmazsa sonuç aşağı yuvarlanır, çünkü sınır aşılamaz.
Adım 1: Değerleri çevir: toplam sınır 4,86 · 10^{4} = 48 600 kg; yakıt 8 · 10^{3} = 8000 kg; bir kutu 2,5 · 10^{2} = 250 kg.
Adım 2: Kutular için kalan kapasiteyi bul: 48 600 − 8000 = 40 600 kg.
Adım 3: Kutu sayısını hesapla: 40 600 ÷ 250 işlemini yap. 250 · 160 = 40 000 ve 250 · 2 = 500 olduğundan 162 kutu 40 500 kg eder; geriye 100 kg kalır ve bu bir kutuya yetmez.
Adım 4: Kutular bölünemediği için en fazla 162 kutu yüklenebilir.
Sağlama: 162 kutu ile toplam yük 40 500 + 8000 = 48 500 kg olur ve 48 600 kg sınırının altındadır. 163 kutu olsaydı toplam 40 750 + 8000 = 48 750 kg olur ve sınır aşılırdı.
Sık yapılan hata: "En fazla" sorularında kalanı görünce sonucu yukarı yuvarlamak. Sınır aşılamayacağı için bu tür sorularda aşağı yuvarlanır.
Cevap A.`
}
);
