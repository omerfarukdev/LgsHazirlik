// Matematik — Üslü İfadeler: 25 soruluk teste tamamlama (Kademe 1/2/3 ek soruları + havuz)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["uslu-ifadeler"] = window.LGS_BANK["uslu-ifadeler"] || []).push(
/* ===================== KADEME 1 — KAVRAMA (ek) ===================== */
{
  id: "mat-ui-113",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir fen dersinde ölçülen kalınlık, defterlere 10^{-2} metre olarak yazılmıştır.\n**Buna göre bu ölçümün ondalık gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["0,001", "0,01", "0,1", "100"],
  dogru: 1,
  hatalar: [
    "0,001: Üssü bir fazla sayma. 0,001 sayısı 10^{-3}'tür; virgülden sonra 3 basamak vardır.",
    null,
    "0,1: Üssü bir eksik sayma. 0,1 sayısı 10^{-1}'dir.",
    "100: Negatif üssü görmezden gelme. 10^{-2} ile 10^{2} aynı değildir; eksi üs sayıyı 1'den küçük yapar."
  ],
  aciklama: `10'un negatif kuvveti, 1'in 10'un o kuvvetine bölümüdür: 10^{-n} = [[1|10^{n}]]. Üssün mutlak değeri, virgülden sonraki basamak sayısını verir.
Adım 1: Kuralı uygula: 10^{-2} = [[1|10^{2}]] = [[1|100]].
Adım 2: Kesri ondalık gösterime çevir: [[1|100]] = 0,01.
Sağlama: 0,01 · 100 = 1 olduğuna göre 0,01 gerçekten 1'in yüzde biridir.
Sık yapılan hata: Negatif üssü sayının işareti sanmak. 10^{-2} negatif bir sayı değildir; 0 ile 1 arasında pozitif bir sayıdır.
Cevap B.`
},
{
  id: "mat-ui-114",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 1,
  soru: "**3^{4} · 3^{2} işleminin sonucu aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["9^{6}", "3^{8}", "3^{6}", "3^{2}"],
  dogru: 2,
  hatalar: [
    "9^{6}: Üslerle birlikte tabanları da çarpma. Aynı tabanlı çarpımda taban değişmez.",
    "3^{8}: Çarpmada üsleri çarpma: 4 · 2 = 8 alınmış. Üsler yalnızca üssün üssü alınırken çarpılır.",
    null,
    "3^{2}: Çarpmada üsleri çıkarma: 4 − 2 = 2 alınmış. Çıkarma yalnızca bölmede yapılır."
  ],
  aciklama: `Tabanları aynı olan iki üslü sayı çarpılırken taban aynen yazılır, üsler toplanır: a^{n} · a^{m} = a^{n+m}.
Adım 1: Tabanların aynı olduğunu gör: ikisi de 3'tür.
Adım 2: Üsleri topla: 4 + 2 = 6.
Adım 3: Sonucu yaz: 3^{6}.
Sağlama: İfadeyi açık yaz: (3 · 3 · 3 · 3) · (3 · 3). Toplam 6 tane 3 çarpılıyor, yani 3^{6}.
Sık yapılan hata: Tabanları da çarpıp 9^{6} yazmak. Taban, kaç kez çarpıldığını değil hangi sayının çarpıldığını gösterir; bu yüzden değişmez.
Cevap C.`
},
{
  id: "mat-ui-115",
  kazanim: "M.8.1.2.3",
  kademe: 1,
  zorluk: 1,
  soru: "**3 · 10^{1} + 4 · 10^{-1} ifadesinin ondalık gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3,04", "3,4", "30,4", "34"],
  dogru: 2,
  hatalar: [
    "3,04: Her iki terimi de bir basamak sağa kaydırma. Bu, 3 · 10^{0} + 4 · 10^{-2} çözümlemesinin sonucudur.",
    "3,4: 10^{1} çarpanını 10^{0} sanma. 3 rakamı onlar basamağındadır, birler basamağında değil.",
    null,
    "34: Negatif üssü yok sayma. 4 · 10^{-1} = 0,4'tür; 4 · 10^{0} = 4 değildir."
  ],
  aciklama: `Çözümlenmiş bir ifadede her terim, bir rakam ile o rakamın basamak değerinin çarpımıdır. Terimleri tek tek hesaplayıp toplamak yeterlidir.
Adım 1: Birinci terimi hesapla: 3 · 10^{1} = 3 · 10 = 30.
Adım 2: İkinci terimi hesapla: 4 · 10^{-1} = 4 · 0,1 = 0,4.
Adım 3: Topla: 30 + 0,4 = 30,4.
Sağlama: 30,4 sayısında 3 onlar, 0 birler, 4 onda birler basamağındadır. Çözümlemede birler terimi yazılmamış, çünkü o basamakta 0 vardır.
Sık yapılan hata: 10^{1} ile 10^{-1} çarpanlarını aynı yöne kaydırmak. Üs pozitifse basamak virgülün solunda, negatifse sağındadır.
Cevap C.`
},
{
  id: "mat-ui-116",
  kazanim: "M.8.1.2.4",
  kademe: 1,
  zorluk: 1,
  soru: "**7 · 10^{4} sayısı aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["0,7 · 10^{3}", "7 · 10^{3}", "70 · 10^{3}", "700 · 10^{3}"],
  dogru: 2,
  hatalar: [
    "0,7 · 10^{3} = 700: Baştaki sayıyı küçültürken üssü de küçültme. Baştaki sayı 10'a bölünürse üs 1 artmalıdır.",
    "7 · 10^{3} = 7000: Yalnızca üssü değiştirip baştaki sayıyı olduğu gibi bırakma. Bu, sayının onda biridir.",
    null,
    "700 · 10^{3} = 700 000: Baştaki sayıyı 100 katına çıkarırken üssü yalnızca 1 azaltma. Bu, sayının 10 katıdır."
  ],
  aciklama: `Bir sayı 10'un farklı tam sayı kuvvetleriyle yazılabilir. Baştaki sayı 10 katına çıkarsa üs 1 azalır, baştaki sayı 10'a bölünürse üs 1 artar; böylece sayının değeri korunur.
Adım 1: Sayıyı aç: 7 · 10^{4} = 7 · 10 000 = 70 000.
Adım 2: İstenen biçimde üs 10^{3} olacaksa baştaki sayı 10 katına çıkmalıdır: 7 → 70.
Adım 3: Yaz: 70 · 10^{3} = 70 · 1000 = 70 000.
Sağlama: 7 · 10^{4} = 70 · 10^{3} = 700 · 10^{2}. Her adımda baştaki sayı 10 katına çıkarken üs 1 azaldı.
Sık yapılan hata: Baştaki sayıyı büyütürken üssü azaltmayı unutmak; bu, sayının değerini değiştirir.
Cevap C.`
},
{
  id: "mat-ui-117",
  kazanim: "M.8.1.2.5",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki gösterimlerden hangisi bilimsel gösterimdir?**",
  gorsel: null,
  secenekler: ["0,9 · 10^{5}", "6,3 · 10^{4}", "12 · 10^{3}", "45 · 10^{-2}"],
  dogru: 1,
  hatalar: [
    "0,9 · 10^{5}: Baştaki sayı 1'den küçük. Bilimsel gösterimde baştaki sayı 1 ile 10 arasında olmalıdır; 1 de bu aralığa dâhildir.",
    null,
    "12 · 10^{3}: Baştaki sayı 10'dan büyük. Değeri doğru yazılabilir ama gösterim bilimsel değildir.",
    "45 · 10^{-2}: Baştaki sayı 10'dan büyük. Üssün negatif olması gösterimi bilimsel yapmaz."
  ],
  aciklama: `Bilimsel gösterim a · 10^{n} biçimindedir. Burada a sayısı 1'den küçük olmayan ve 10'dan küçük bir sayıdır (1 ≤ a < 10); n ise bir tam sayıdır. Üssün işareti serbesttir, asıl koşul baştaki sayıyla ilgilidir.
Adım 1: Baştaki sayıları tek tek denetle: 0,9 < 1 olduğu için uygun değildir.
Adım 2: 6,3 sayısı 1 ile 10 arasındadır; bu gösterim koşulu sağlar.
Adım 3: 12 ve 45 sayıları 10'dan büyüktür; ikisi de uygun değildir.
Sağlama: Uygun olmayanları düzelt: 0,9 · 10^{5} = 9 · 10^{4}; 12 · 10^{3} = 1,2 · 10^{4}; 45 · 10^{-2} = 4,5 · 10^{-1}.
Sık yapılan hata: Üs negatifse gösterimin bilimsel olamayacağını sanmak. Koşul yalnızca baştaki sayıyla ilgilidir.
Cevap B.`
},
{
  id: "mat-ui-118",
  kazanim: "M.8.1.2.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir haber sitesinde bir videonun izlenme sayısı 5 · 10^{6} olarak verilmiştir.\n**Buna göre bu video kaç kez izlenmiştir?**",
  gorsel: null,
  secenekler: ["50 000", "500 000", "5 000 000", "50 000 000"],
  dogru: 2,
  hatalar: [
    "50 000: Üssü 4 sanma. 10^{6} sayısında 6 tane sıfır vardır.",
    "500 000: Bir sıfırı eksik yazma. 5 · 10^{5} = 500 000'dir.",
    null,
    "50 000 000: Bir sıfırı fazla yazma. 5 · 10^{7} = 50 000 000'dir."
  ],
  aciklama: `Bilimsel gösterimle yazılmış bir sayıyı açmak için baştaki sayı, 10'un o kuvvetiyle çarpılır. 10'un pozitif kuvvetleri 1'in yanına üs kadar sıfır yazılarak bulunur.
Adım 1: 10'un kuvvetini aç: 10^{6} = 1 000 000.
Adım 2: Baştaki sayıyla çarp: 5 · 1 000 000 = 5 000 000.
Sağlama: Virgülü sağa kaydırarak da bulabilirsin: 5,0 sayısında virgülü 6 basamak sağa kaydırınca 5 000 000 elde edilir.
Sık yapılan hata: Sıfırları sayarken şaşırmak. Üs kaçsa, baştaki sayının arkasına o kadar sıfır gelir.
Cevap C.`
},
{
  id: "mat-ui-119",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir bulmaca dergisinin \"Zihin Jimnastiği\" sayfasında aşağıdaki işlem verilmiştir.\n**Buna göre bu işlemin sonucu kaçtır?**",
  gorsel: `<svg viewBox="0 0 440 130" role="img" aria-label="Dergi sayfasında yazan işlem: eksi 2'nin 4. kuvveti eksi, eksi 2'nin 3. kuvveti"><rect x="14" y="14" width="412" height="102" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="34" y="46" font-size="16" fill="currentColor">ZİHİN JİMNASTİĞİ</text><text x="220" y="94" font-size="28" font-weight="bold" fill="var(--vurgu)" text-anchor="middle">(−2)<tspan font-size="18" dy="-12">4</tspan><tspan dy="12"> − (−2)</tspan><tspan font-size="18" dy="-12">3</tspan></text></svg>`,
  secenekler: ["−8", "−2", "8", "24"],
  dogru: 3,
  hatalar: [
    "−8: Tek kuvvette negatif tabanın işaretini kaybetme. (−2)^{4} = −16 sanılıp −16 − (−8) = −8 bulunmuş.",
    "−2: Üs almak yerine tabanı üsle çarpma: (−2) · 4 = −8 ve (−2) · 3 = −6 alınıp −8 − (−6) = −2 bulunmuş.",
    "8: Negatif bir sayıyı çıkarırken işaret değişimini atlama: 16 − 8 = 8 alınmış. Oysa −(−8) = +8'dir.",
    null
  ],
  aciklama: `Taban negatifse üssün tek mi çift mi olduğuna bakılır: çift kuvvette sonuç pozitif, tek kuvvette negatif olur. Ayrıca bir sayıdan negatif bir sayı çıkarmak, o sayıyı toplamak demektir.
Adım 1: Birinci ifadeyi hesapla: (−2)^{4} = (−2) · (−2) · (−2) · (−2) = 16. Üs çift olduğu için sonuç pozitiftir.
Adım 2: İkinci ifadeyi hesapla: (−2)^{3} = (−2) · (−2) · (−2) = −8. Üs tek olduğu için sonuç negatiftir.
Adım 3: Çıkarmayı yap: 16 − (−8) = 16 + 8 = 24.
Sağlama: Aynı tabanın çift kuvveti pozitif, tek kuvveti negatiftir; pozitif bir sayıdan negatif bir sayı çıkarıldığında sonuç ikisinin de büyüğünden büyük çıkar. 24 > 16 olması bunu doğruluyor.
Sık yapılan hata: İkinci terimin başındaki eksi ile ifadenin kendi eksisini tek eksi sayıp 16 − 8 = 8 demek.
Cevap D.`
},
{
  id: "mat-ui-120",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir hava kalitesi ölçüm cihazı her saniyede 10^{5} ölçüm yapmakta ve yaptığı her ölçümü 10^{-8} saniyede işlemektedir.\n**Buna göre cihazın bir saniyede yaptığı ölçümleri işlemesi kaç saniye sürer?**",
  gorsel: null,
  secenekler: ["10^{-13}", "10^{-3}", "10^{3}", "10^{13}"],
  dogru: 1,
  hatalar: [
    "10^{-13}: İki üssü de negatif alıp toplama: (−5) + (−8) = −13 bulunmuş. Ölçüm sayısındaki üs pozitiftir.",
    null,
    "10^{3}: Üsleri toplarken işaretleri karıştırma: 8 − 5 = 3 alınmış. Doğrusu 5 + (−8) = −3'tür.",
    "10^{13}: Çarpmada üsleri çıkarma: 5 − (−8) = 13 alınmış. Çıkarma yalnızca bölmede yapılır."
  ],
  aciklama: `Tabanları aynı olan iki üslü sayı çarpılırken taban aynı kalır, üsler toplanır: a^{n} · a^{m} = a^{n+m}. Bu kural üslerden biri ya da ikisi negatifken de geçerlidir.
Adım 1: İşlemi kur. Cihaz 10^{5} ölçüm yapıyor ve her biri 10^{-8} saniye sürüyorsa toplam süre 10^{5} · 10^{-8} olur.
Adım 2: Üsleri topla: 5 + (−8) = −3.
Adım 3: Sonucu yaz: 10^{-3} saniye, yani 0,001 saniye.
Sağlama: 10^{5} = 100 000 ölçüm ve her biri 0,000 000 01 saniye sürer; 100 000 · 0,000 000 01 = 0,001 saniyedir.
Sık yapılan hata: Çarpmada üsleri çıkarmak ya da negatif üssü toplamaya dâhil ederken işareti düşürmek.
Cevap B.`
},
{
  id: "mat-ui-121",
  kazanim: "M.8.1.2.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir akaryakıt istasyonunda pompanın ekranı, doldurulan yakıt miktarını litre cinsinden göstermektedir. Bir aracın deposu dolduğunda ekranda görünen değer aşağıda verilmiştir.\n**Buna göre bu değerin 10'un tam sayı kuvvetleriyle çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 400 150" role="img" aria-label="Akaryakıt pompası ekranı: 47,05 litre"><rect x="16" y="16" width="368" height="118" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="16" y1="56" x2="384" y2="56" stroke="currentColor" stroke-width="2"/><text x="200" y="44" font-size="16" fill="currentColor" text-anchor="middle">DOLDURULAN MİKTAR</text><text x="200" y="108" font-size="34" font-weight="bold" fill="var(--vurgu)" text-anchor="middle">47,05 L</text></svg>`,
  secenekler: [
    "4 · 10^{1} + 7 · 10^{0} + 5 · 10^{-1}",
    "4 · 10^{2} + 7 · 10^{1} + 5 · 10^{-2}",
    "4 · 10^{1} + 7 · 10^{0} + 5 · 10^{-3}",
    "4 · 10^{1} + 7 · 10^{0} + 5 · 10^{-2}"
  ],
  dogru: 3,
  hatalar: [
    "Virgülden sonraki sıfırı saymayıp 5'i onda birler basamağına koyma: bu çözümleme 47,5 sayısına aittir.",
    "Virgülden önceki basamak kuvvetlerini birer artırma: onlar basamağının kuvveti 10^{1}, birler basamağının kuvveti 10^{0}'dır. Bu çözümleme 470,05 eder.",
    "Virgülden sonraki basamağı bir fazla kaydırma: bu çözümleme 47,005 sayısına aittir. 5 rakamı binde birler değil yüzde birler basamağındadır.",
    null
  ],
  aciklama: `Bir ondalık gösterimi çözümlerken her rakam, bulunduğu basamağın değeriyle çarpılır. Virgülden önceki basamaklar 10^{0}, 10^{1}, 10^{2}…; virgülden sonrakiler 10^{-1}, 10^{-2}… değerini alır.
Adım 1: Ekrandaki sayının basamaklarını adlandır: 4 onlar, 7 birler, 0 onda birler, 5 yüzde birler basamağındadır.
Adım 2: Her rakamı basamak değeriyle çarp: 4 · 10^{1} + 7 · 10^{0} + 0 · 10^{-1} + 5 · 10^{-2}.
Adım 3: Değeri 0 olan terim toplamı değiştirmediği için yazılmayabilir: 4 · 10^{1} + 7 · 10^{0} + 5 · 10^{-2}.
Sağlama: 40 + 7 + 0,05 = 47,05.
Sık yapılan hata: Virgülden sonraki sıfırı atlayıp 5 rakamını onda birler basamağına kaydırmak; o zaman 47,5 elde edilir ve bu, ekrandaki değerin yaklaşık 10 katıdır.
Cevap D.`
},
{
  id: "mat-ui-122",
  kazanim: "M.8.1.2.4",
  kademe: 1,
  zorluk: 2,
  soru: "Bir gıda analiz laboratuvarında bütün kütleler, forma 10^{-6} gram (mikrogram) biriminde yazılmaktadır. Bir numunedeki katkı maddesinin kütlesi terazide 0,00042 gram ölçülmüştür.\n**Buna göre bu kütle forma hangi sayı ile yazılır?**",
  gorsel: null,
  secenekler: ["420", "42", "4,2", "0,42"],
  dogru: 0,
  hatalar: [
    null,
    "42: Virgülü bir basamak eksik kaydırma. 42 · 10^{-6} = 0,000042 gram eder; bu, ölçülen kütlenin onda biridir.",
    "4,2: Virgülü iki basamak eksik kaydırma. 4,2 · 10^{-6} = 0,0000042 gram eder.",
    "0,42: Virgülü üç basamak eksik kaydırma. 0,42 · 10^{-6} = 0,000 000 42 gram eder."
  ],
  aciklama: `Bir sayıyı 10'un belirli bir kuvveti cinsinden yazmak, baştaki sayı ile üssü birbirini dengeleyecek biçimde değiştirmek demektir: üs 1 azalırsa baştaki sayı 10 katına çıkar.
Adım 1: Kütleyi bilimsel gösterime çevir: 0,00042 = 4,2 · 10^{-4} gram.
Adım 2: İstenen birim 10^{-6}'dır. Üs −4'ten −6'ya inerken 2 azaldığına göre baştaki sayı 100 katına çıkmalıdır: 4,2 → 420.
Adım 3: Yaz: 0,00042 = 420 · 10^{-6} gram. Forma 420 yazılır.
Sağlama: 420 · 0,000001 = 0,00042. Sayı değişmedi, yalnızca yazılışı değişti.
Sık yapılan hata: Üs küçülürken baştaki sayıyı da küçültmek. Üs azalıyorsa baştaki sayı büyümelidir; ikisi ters yönde değişir.
Cevap A.`
},
{
  id: "mat-ui-123",
  kazanim: "M.8.1.2.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir meteoroloji çalışmasında bir kar tanesinin kütlesi ortalama 3,5 · 10^{-3} gram olarak alınmaktadır.\n**Buna göre 100 kar tanesinin toplam kütlesinin bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3,5 · 10^{-5}", "3,5 · 10^{-2}", "3,5 · 10^{-1}", "3,5 · 10^{5}"],
  dogru: 2,
  hatalar: [
    "3,5 · 10^{-5}: Çarpmada üsleri çıkarma: (−3) − 2 = −5 alınmış. Çarpmada üsler toplanır.",
    "3,5 · 10^{-2}: 100 sayısını 10 sanma. 100 = 10^{2}'dir, bu yüzden üs 1 değil 2 artar.",
    null,
    "3,5 · 10^{5}: Üssün negatifliğini yok sayma: 3 + 2 = 5 alınmış. Doğrusu (−3) + 2 = −1'dir."
  ],
  aciklama: `Bilimsel gösterimle yazılmış bir sayı 10'un bir kuvvetiyle çarpılırken baştaki sayı değişmez, yalnızca üsler toplanır: (a · 10^{n}) · 10^{m} = a · 10^{n+m}.
Adım 1: İşlemi kur: (3,5 · 10^{-3}) · 100.
Adım 2: 100 sayısını 10'un kuvveti olarak yaz: 100 = 10^{2}.
Adım 3: Üsleri topla: (−3) + 2 = −1. Sonuç 3,5 · 10^{-1} gramdır.
Adım 4: Baştaki sayının 1 ile 10 arasında olduğunu denetle: 3,5 uygundur, gösterim bilimseldir.
Sağlama: Bir tane 0,0035 gram, 100 tanesi 0,35 gramdır ve 3,5 · 10^{-1} = 0,35'tir.
Sık yapılan hata: 100 ile çarparken üssü 1 artırmak. Üs, çarpanın 10'un kaçıncı kuvveti olduğu kadar artar.
Cevap C.`
},
{
  id: "mat-ui-124",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulun kitap okuma etkinliğinde 8-A sınıfı bir ayda 4^{3} sayfa, 8-B sınıfı ise aynı ayda 3^{4} sayfa okumuştur.\n**Buna göre iki sınıfın okuduğu sayfa sayıları arasındaki fark kaçtır?**",
  gorsel: null,
  secenekler: ["0", "17", "37", "145"],
  dogru: 1,
  hatalar: [
    "0: Üs almak yerine tabanı üsle çarpma: 4 · 3 = 12 ve 3 · 4 = 12 alınıp iki sınıf eşit sanılmış.",
    null,
    "37: 3^{4} yerine 3^{3} = 27 hesaplama; 64 − 27 = 37 bulunmuş.",
    "145: Fark yerine toplam alma: 64 + 81 = 145."
  ],
  aciklama: `Üslü bir ifadede taban, üs kadar kez kendisiyle çarpılır. Taban ile üs yer değiştirirse sonuç genellikle değişir; bu yüzden ikisini karıştırmamak gerekir.
Adım 1: 8-A'nın okuduğunu hesapla: 4^{3} = 4 · 4 · 4 = 64 sayfa.
Adım 2: 8-B'nin okuduğunu hesapla: 3^{4} = 3 · 3 · 3 · 3 = 81 sayfa.
Adım 3: Farkı bul: 81 − 64 = 17 sayfa.
Sağlama: 4^{3} = 64 ve 3^{4} = 81 olduğuna göre daha çok okuyan sınıf 8-B'dir; aradaki fark 17 sayfadır.
Sık yapılan hata: Tabanı üsle çarpmak. 4^{3} ifadesi 4 · 3 = 12 değil, 4'ün üç kez çarpımıdır.
Cevap B.`
},
{
  id: "mat-ui-125",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir matematik yazılımında sayılar, aşağıdaki işlem şeridinden geçirilmektedir. Şeride giren sayı önce ikinci kuvvetine yükseltilmekte, sonra 3^{5} sayısına bölünmektedir.\n**Şeride 3^{4} sayısı girdiğine göre şeritten çıkan sayı aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 130" role="img" aria-label="İşlem şeridi: giren sayı 3 üssü 4, birinci kutu karesini al, ikinci kutu 3 üssü 5'e böl, çıkan sayı soru işareti"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="92" y1="64" x2="132" y2="64"/><line x1="252" y1="64" x2="292" y2="64"/><line x1="412" y1="64" x2="452" y2="64"/><path d="M124 56 l10 8 l-10 8"/><path d="M284 56 l10 8 l-10 8"/><path d="M444 56 l10 8 l-10 8"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="132" y="36" width="120" height="56" rx="8"/><rect x="292" y="36" width="120" height="56" rx="8"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="192" y="70">Karesini al</text><text x="352" y="70">3<tspan font-size="13" dy="-8">5</tspan><tspan dy="8">'e böl</tspan></text></g><text x="48" y="70" font-size="20" font-weight="bold" fill="var(--vurgu)" text-anchor="middle">3<tspan font-size="14" dy="-9">4</tspan></text><text x="484" y="70" font-size="24" font-weight="bold" fill="var(--vurgu)" text-anchor="middle">?</text></svg>`,
  secenekler: ["3^{13}", "3^{8}", "3^{3}", "3^{1}"],
  dogru: 2,
  hatalar: [
    "3^{13}: Bölmede üsleri toplama: 8 + 5 = 13 alınmış. Bölmede üsler çıkarılır.",
    "3^{8}: Son adımı atlama. 3^{8} yalnızca karesi alınmış hâldir; bölme işlemi yapılmamış.",
    null,
    "3^{1}: Kare alırken üsleri toplama: (3^{4})^{2} = 3^{6} sanılıp 6 − 5 = 1 bulunmuş. Üssün üssünde üsler çarpılır."
  ],
  aciklama: `İki kural gerekir: üssün üssü alınırken üsler çarpılır, (a^{n})^{m} = a^{n·m}; aynı tabanlı sayılar bölünürken üsler çıkarılır, a^{n} ÷ a^{m} = a^{n-m}.
Adım 1: Birinci kutuyu uygula: (3^{4})^{2} = 3^{4·2} = 3^{8}.
Adım 2: İkinci kutuyu uygula: 3^{8} ÷ 3^{5} = 3^{8-5} = 3^{3}.
Adım 3: Şeritten çıkan sayı 3^{3}, yani 27'dir.
Sağlama: 3^{3} · 3^{5} = 3^{8} olmalıdır; gerçekten de 27 · 243 = 6561 = 3^{8}'dir.
Sık yapılan hata: Kare alırken üssü 2 ile toplamak. Kare almak, ifadeyi kendisiyle çarpmaktır: 3^{4} · 3^{4} = 3^{8}.
Cevap C.`
},
/* ===================== KADEME 2 — PEKİŞTİRME (ek) ===================== */
{
  id: "mat-ui-213",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir masa oyununda oyuncunun n. turda aldığı puan, (−1)^{n} · n^{2} kuralıyla hesaplanmaktadır. Oyuncunun toplam puanı, turlarda aldığı puanların toplamına eşittir.\n**Buna göre bir oyuncunun yalnızca 3. ve 4. turlarda aldığı puanların toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["−25", "−7", "7", "25"],
  dogru: 2,
  hatalar: [
    "−25: İki turun puanını da negatif alma: −9 + (−16) = −25 bulunmuş. 4 çift sayı olduğu için 4. turun puanı pozitiftir.",
    "−7: İki turun işaretini ters alma: 9 + (−16) = −7 bulunmuş. 3 tek, 4 çift sayıdır.",
    null,
    "25: İki turun puanını da pozitif alma: 9 + 16 = 25 bulunmuş. 3 tek sayı olduğu için 3. turun puanı negatiftir."
  ],
  aciklama: `Tabanı −1 olan bir kuvvette sonuç yalnızca üssün tek mi çift mi olduğuna bağlıdır: (−1)^{tek} = −1, (−1)^{çift} = 1.
Adım 1: 3. turun puanını bul: (−1)^{3} · 3^{2} = (−1) · 9 = −9. Üs tek olduğu için işaret eksidir.
Adım 2: 4. turun puanını bul: (−1)^{4} · 4^{2} = 1 · 16 = 16. Üs çift olduğu için işaret artıdır.
Adım 3: Topla: −9 + 16 = 7.
Sağlama: İlk turlardaki puanları yazarak kuralı görebilirsin: −1, 4, −9, 16, −25… Tek turlarda puan eksi, çift turlarda artıdır.
Sık yapılan hata: (−1)^{n} çarpanını sonucun işareti yerine bir sayı gibi görmezden gelmek. Bu çarpan yalnızca puanın işaretini belirler, büyüklüğünü değiştirmez.
Cevap C.`
},
{
  id: "mat-ui-214",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir matematik etkinliğinde kefeleri dengede duran bir terazinin iki kefesine üslü ifadeler yerleştirilmiştir. Sol kefedeki ifadelerden birinin üssü silinmiş ve yerine bir soru işareti konulmuştur.\n**Terazi dengede olduğuna göre silinen üs kaçtır?**",
  gorsel: `<svg viewBox="0 0 520 190" role="img" aria-label="Dengede terazi: sol kefede 3 üssü soru işareti çarpı 3 üssü 4, sağ kefede 3 üssü 12"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="260" y1="40" x2="260" y2="150"/><line x1="120" y1="40" x2="400" y2="40"/><line x1="120" y1="40" x2="120" y2="70"/><line x1="400" y1="40" x2="400" y2="70"/><path d="M226 150 h68 l16 20 h-100 z"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="30" y="70" width="180" height="56" rx="8"/><rect x="310" y="70" width="180" height="56" rx="8"/></g><g fill="currentColor" font-size="22" font-weight="bold" text-anchor="middle"><text x="120" y="106">3<tspan font-size="15" dy="-10" fill="var(--vurgu)">?</tspan><tspan dy="10"> · 3</tspan><tspan font-size="15" dy="-10">4</tspan></text><text x="400" y="106">3<tspan font-size="15" dy="-10">12</tspan></text></g></svg>`,
  secenekler: ["3", "8", "16", "48"],
  dogru: 1,
  hatalar: [
    "3: Üsleri bölme: 12 ÷ 4 = 3 alınmış. Bölme işlemi üslerde değil, tabanlarda anlam taşır.",
    null,
    "16: Üsleri toplama: 12 + 4 = 16 alınmış. Çarpımın üssü zaten toplam olduğuna göre bilinmeyen üs için çıkarma yapılır.",
    "48: Üsleri çarpma: 12 · 4 = 48 alınmış. Çarpma yalnızca üssün üssü alınırken yapılır."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken üsler toplanır: a^{n} · a^{m} = a^{n+m}. Terazi dengede olduğuna göre iki kefedeki ifadeler eşittir.
Adım 1: Sol kefedeki çarpımı kurala göre yaz: 3^{?} · 3^{4} = 3^{? + 4}.
Adım 2: İki kefeyi eşitle. Tabanlar aynı olduğu için üsler de eşit olmalıdır: ? + 4 = 12.
Adım 3: Bilinmeyen üssü bul: ? = 12 − 4 = 8.
Sağlama: 3^{8} · 3^{4} = 3^{8+4} = 3^{12}. İki kefe gerçekten eşit.
Sık yapılan hata: Üslerin toplandığı yerde bilinmeyeni bulmak için de toplama yapmak. Toplamın bir parçası aranıyorsa çıkarma yapılır.
Cevap B.`
},
{
  id: "mat-ui-215",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okulun geri dönüşüm panosunda sınıfların bir haftada topladığı kâğıdın kütlesi, basamak değerleri görünsün diye çözümlenmiş biçimde yazılmaktadır. Panonun bu haftaki görüntüsü aşağıda verilmiştir.\n**Buna göre iki sınıfın topladığı kâğıdın toplam kütlesi kaç kilogramdır?**",
  gorsel: `<table class="tablo"><tr><th>Sınıf</th><th>Toplanan kâğıt (kg)</th></tr><tr><td>8-A</td><td>1 · 10<sup>1</sup> + 5 · 10<sup>0</sup> + 4 · 10<sup>−1</sup></td></tr><tr><td>8-B</td><td>2 · 10<sup>1</sup> + 8 · 10<sup>−1</sup></td></tr></table>`,
  secenekler: ["35,2", "36,12", "36,2", "362"],
  dogru: 2,
  hatalar: [
    "35,2: Onda birlerden gelen eliyi atlama. 0,4 + 0,8 = 1,2 olduğu için birler basamağına 1 devreder.",
    "36,12: Onda birleri tam sayı gibi yan yana yazma: 4 + 8 = 12 sonucunu doğrudan virgülden sonraya koyma.",
    null,
    "362: Virgülü hiç yazmama. Negatif üslü terimler virgülden sonraki basamakları gösterir."
  ],
  aciklama: `Çözümlenmiş bir ifadeyi ondalık gösterime çevirmek için her terim hesaplanıp toplanır. Sonra iki sayı, virgüller alt alta gelecek biçimde toplanır.
Adım 1: 8-A'nın kütlesini bul: 10 + 5 + 0,4 = 15,4 kg.
Adım 2: 8-B'nin kütlesini bul: 20 + 0,8 = 20,8 kg. Birler terimi yazılmadığına göre birler basamağında 0 vardır.
Adım 3: İki kütleyi topla: 15,4 + 20,8 = 36,2 kg. Onda birler toplamı 0,4 + 0,8 = 1,2 olduğu için birler basamağına 1 devreder.
Sağlama: 36,2 − 20,8 = 15,4. Toplam doğru.
Sık yapılan hata: Virgülden sonraki rakamları ayrı bir sayı gibi toplayıp 36,12 yazmak. Onda birler toplamı 10'u geçerse elde devreder.
Cevap C.`
},
{
  id: "mat-ui-216",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir mobil oyunun indirilme sayısı, yayımcının sitesinde 6,4 · 10^{5} olarak duyurulmuştur. Yayımcı aynı sayıyı basın bültenlerinde 10'un farklı kuvvetlerini kullanarak da yazmaktadır.\n**Buna göre aşağıdakilerden hangisi bu indirilme sayısına eşittir?**",
  gorsel: null,
  secenekler: ["640 · 10^{3}", "6400 · 10^{3}", "0,64 · 10^{5}", "64 · 10^{6}"],
  dogru: 0,
  hatalar: [
    null,
    "6400 · 10^{3} = 6 400 000: Baştaki sayıyı 1000 katına çıkarıp üssü yalnızca 2 azaltma. Baştaki sayı 1000 katına çıkarsa üs 3 azalmalıdır.",
    "0,64 · 10^{5} = 64 000: Baştaki sayıyı 10'a bölerken üssü artırmayı unutma.",
    "64 · 10^{6} = 64 000 000: Baştaki sayıyı 10 katına çıkarırken üssü azaltacak yerde 1 artırma."
  ],
  aciklama: `Bir sayı 10'un farklı tam sayı kuvvetleriyle yazılırken baştaki sayı ile üs birbirini dengeler: baştaki sayı 10 katına çıkarsa üs 1 azalır, 10'a bölünürse üs 1 artar.
Adım 1: Sayıyı aç: 6,4 · 10^{5} = 640 000.
Adım 2: Şıkları tek tek hesapla: 640 · 10^{3} = 640 · 1000 = 640 000. Eşittir.
Adım 3: Kalanları denetle: 6400 · 10^{3} = 6 400 000; 0,64 · 10^{5} = 64 000; 64 · 10^{6} = 64 000 000. Hiçbiri 640 000 değildir.
Sağlama: 6,4 sayısından 640 sayısına geçerken baştaki sayı 100 katına çıktı, öyleyse üs 2 azalarak 10^{5}'ten 10^{3}'e indi. Denge korunmuş.
Sık yapılan hata: Baştaki sayı ile üssü aynı yönde değiştirmek. İkisi her zaman ters yönde değişir.
Cevap A.`
},
{
  id: "mat-ui-217",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir doğa belgeselinde, bir örümcek ağını oluşturan ipliğin kalınlığının 3,2 · 10^{-6} metre olduğu söylenmiştir. Bir öğrenci bu kalınlığı ödevinde milimetre cinsinden yazacaktır. (1 metre = 10^{3} milimetre)\n**Buna göre ipliğin kalınlığının milimetre cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3,2 · 10^{-18}", "3,2 · 10^{-9}", "3,2 · 10^{-4}", "3,2 · 10^{-3}"],
  dogru: 3,
  hatalar: [
    "3,2 · 10^{-18}: Çarpmada üsleri çarpma: (−6) · 3 = −18 alınmış. Çarpmada üsler toplanır.",
    "3,2 · 10^{-9}: 10^{3} ile çarpmak yerine bölme: (−6) − 3 = −9 alınmış. Metreden milimetreye geçilirken sayı büyür.",
    "3,2 · 10^{-4}: 1 metreyi 100 milimetre sanma (santimetre ile karıştırma). Bir metrede 1000 milimetre vardır.",
    null
  ],
  aciklama: `Küçük bir uzunluğu daha küçük bir birimle yazarken sayı büyür. Metreden milimetreye geçmek için sayı 10^{3} ile çarpılır; aynı tabanlı çarpmada üsler toplanır.
Adım 1: İşlemi kur: (3,2 · 10^{-6}) · 10^{3}.
Adım 2: Üsleri topla: (−6) + 3 = −3.
Adım 3: Sonucu yaz: 3,2 · 10^{-3} mm. Baştaki sayı 1 ile 10 arasında olduğu için gösterim bilimseldir.
Sağlama: 3,2 · 10^{-6} m = 0,0000032 m'dir. Bunu 1000 ile çarpınca 0,0032 mm elde edilir ve 3,2 · 10^{-3} = 0,0032'dir.
Sık yapılan hata: Birim küçülünce sayının da küçüleceğini sanmak. Birim küçüldükçe aynı uzunluğu anlatan sayı büyür.
Cevap D.`
},
{
  id: "mat-ui-218",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir baharatçıda kullanılan hassas terazi, tartılan ürünün kütlesini gram cinsinden ondalık gösterimle yazmaktadır. Bir müşteriye tartılan safranın kütlesi ekranda aşağıdaki gibi görünmektedir.\n**Buna göre ekrandaki sayının soldaki 3 rakamının basamak değeri, sağdaki 3 rakamının basamak değerinin kaç katıdır?**",
  gorsel: `<svg viewBox="0 0 380 140" role="img" aria-label="Hassas terazi ekranı: 3,63 gram"><rect x="14" y="14" width="352" height="112" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="14" y1="52" x2="366" y2="52" stroke="currentColor" stroke-width="2"/><text x="190" y="42" font-size="15" fill="currentColor" text-anchor="middle">HASSAS TERAZİ</text><text x="190" y="102" font-size="34" font-weight="bold" fill="var(--vurgu)" text-anchor="middle">3,63 g</text></svg>`,
  secenekler: ["10", "100", "1000", "10 000"],
  dogru: 1,
  hatalar: [
    "10: Basamak değerleri arasında yalnızca bir basamak fark olduğunu sanma. Birler ile yüzde birler basamağı arasında iki basamak vardır.",
    null,
    "1000: Bir basamak fazla sayma. Soldaki 3 birler, sağdaki 3 yüzde birler basamağındadır; aradaki fark üç basamak değil iki basamaktır.",
    "10 000: Sağdaki 3 rakamını on binde birler basamağında sanma. Ekrandaki sayıda virgülden sonra yalnızca iki basamak vardır."
  ],
  aciklama: `Bir rakamın basamak değeri, o rakam ile bulunduğu basamağın değerinin çarpımıdır. Basamak değerleri sağa doğru her adımda 10'a bölünür.
Adım 1: Soldaki 3'ün basamağını bul: birler basamağındadır, basamak değeri 3 · 10^{0} = 3'tür.
Adım 2: Sağdaki 3'ün basamağını bul: yüzde birler basamağındadır, basamak değeri 3 · 10^{-2} = 0,03'tür.
Adım 3: Oranı hesapla: 3 ÷ 0,03 = 100.
Sağlama: Üslerle de yapabilirsin: (3 · 10^{0}) ÷ (3 · 10^{-2}) = 10^{0-(−2)} = 10^{2} = 100.
Sık yapılan hata: Aynı rakamın her yerde aynı değeri taşıdığını sanmak. Rakam aynı olsa da basamak değeri bulunduğu yere göre değişir.
Cevap B.`
},
{
  id: "mat-ui-219",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir sınav sonrası öğretmen, iki öğrencinin aynı soruyu farklı okuduğunu görmüştür. Ceren ifadeyi (−4)^{2} biçiminde, Barış ise −4^{2} biçiminde yazıp hesaplamıştır.\n**Buna göre iki öğrencinin bulduğu sonuçların toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["32", "16", "0", "−32"],
  dogru: 2,
  hatalar: [
    "32: İki sonucu da pozitif alma: 16 + 16 = 32 bulunmuş. Parantez yokken üs yalnızca 4'e uygulanır, eksi işareti dışarıda kalır.",
    "16: Yalnızca bir öğrencinin sonucunu yazma ya da iki sonucu eşit sanıp birini toplamaya katmama.",
    null,
    "−32: İki sonucu da negatif alma: (−16) + (−16) = −32 bulunmuş. Parantez varken eksi işareti de kuvvet aldığı için Ceren'in sonucu pozitiftir."
  ],
  aciklama: `Parantez, üssün hangi sayıya uygulanacağını belirler. (−a)^{n} ifadesinde eksi işareti de tabana dâhildir; −a^{n} ifadesinde ise üs yalnızca a'ya uygulanır, eksi işareti sonuçta kalır.
Adım 1: Ceren'in sonucunu bul: (−4)^{2} = (−4) · (−4) = 16.
Adım 2: Barış'ın sonucunu bul: −4^{2} = −(4 · 4) = −16.
Adım 3: Topla: 16 + (−16) = 0.
Sağlama: İki sayı birbirinin ters işaretlisi olduğu için toplamları 0'dır.
Sık yapılan hata: Parantezli ve parantezsiz yazımı aynı sanmak. Tek fark parantez olsa da sonuçlar birbirinin ters işaretlisidir.
Cevap C.`
},
{
  id: "mat-ui-220",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kuyumcuda tartılan takıların kütlesi, müşteri basamakları görebilsin diye fişe çözümlenmiş biçimde yazılmaktadır. Bir gümüş zincirin fişi aşağıda verilmiştir. Kuyumcu bu zinciri eşit uzunlukta 5 parçaya ayıracak, ayırma sırasında hiç kayıp olmayacaktır.\n**Buna göre bir parçanın kütlesi kaç gramdır?**",
  gorsel: `<svg viewBox="0 0 520 140" role="img" aria-label="Kuyumcu fişi: gümüş zincirin kütlesi 3 çarpı 10 üssü 1 artı 4 çarpı 10 üssü 0 artı 2 çarpı 10 üssü eksi 1 artı 5 çarpı 10 üssü eksi 2 gram"><rect x="16" y="14" width="488" height="112" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="16" y1="52" x2="504" y2="52" stroke="currentColor" stroke-width="2"/><text x="260" y="40" font-size="16" font-weight="bold" fill="var(--vurgu)" text-anchor="middle">GÜMÜŞ ZİNCİR — TARTIM FİŞİ</text><text x="36" y="96" font-size="17" fill="currentColor">Kütle: 3 · 10<tspan font-size="13" dy="-8">1</tspan><tspan dy="8"> + 4 · 10</tspan><tspan font-size="13" dy="-8">0</tspan><tspan dy="8"> + 2 · 10</tspan><tspan font-size="13" dy="-8">−1</tspan><tspan dy="8"> + 5 · 10</tspan><tspan font-size="13" dy="-8">−2</tspan><tspan dy="8"> g</tspan></text></svg>`,
  secenekler: ["34,25", "6,85", "6,84", "6,05"],
  dogru: 1,
  hatalar: [
    "34,25: Son adımı atlama. 34,25 gram zincirin tamamının kütlesidir; soru bir parçayı istiyor.",
    null,
    "6,84: Yüzde birler terimini atlama: 34,2 ÷ 5 = 6,84 bulunmuş. Fişteki 5 · 10^{-2} terimi hesaba katılmamış.",
    "6,05: Birler terimini atlama: 30,25 ÷ 5 = 6,05 bulunmuş. Fişteki 4 · 10^{0} terimi hesaba katılmamış."
  ],
  aciklama: `Çözümlenmiş bir ifadeyi ondalık gösterime çevirmek için her terimin değeri bulunup toplanır; sonra istenen işlem yapılır.
Adım 1: Terimleri hesapla: 3 · 10^{1} = 30; 4 · 10^{0} = 4; 2 · 10^{-1} = 0,2; 5 · 10^{-2} = 0,05.
Adım 2: Topla: 30 + 4 + 0,2 + 0,05 = 34,25 gram. Zincirin tamamı bu kadardır.
Adım 3: Beş eşit parçaya ayır: 34,25 ÷ 5 = 6,85 gram.
Sağlama: 6,85 · 5 = 34,25. Parçaların toplamı zincirin kütlesine eşit.
Sık yapılan hata: Toplam kütleyi bulunca durmak. Soru bir parçanın kütlesini istiyor, bu yüzden bir bölme daha gerekir.
Cevap B.`
},
{
  id: "mat-ui-221",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okulun yardım kampanyasında toplanan tutar 7,2 · 10^{5} TL'dir. Kampanya panosunu hazırlayan görevli bu tutarı yazarken virgülü atlamış ve panoya 72 · 10^{5} TL yazmıştır. Öğrenciler panodaki yazımın yanlış olduğunu fark etmiştir.\n**Buna göre panoda yazan tutar, gerçek tutarın kaç katıdır?**",
  gorsel: null,
  secenekler: ["0,1", "1", "10", "100"],
  dogru: 2,
  hatalar: [
    "0,1: Kat ilişkisini ters kurma. Gerçek tutar panodakine bölünmüş; oysa panodaki tutarın gerçeğin kaç katı olduğu soruluyor.",
    "1: Baştaki sayı değişince 10'un üssünün de kendiliğinden değiştiğini sanıp iki yazımı eşit kabul etme.",
    null,
    "100: 7,2 ile 72 arasındaki farkı 100 kat sanma. 72 sayısı 7,2'nin 10 katıdır."
  ],
  aciklama: `Bir sayı 10'un kuvvetleriyle yazılırken baştaki sayı 10 katına çıkarsa üs 1 azalmalıdır. Üs olduğu gibi bırakılırsa sayının değeri de 10 katına çıkar.
Adım 1: Gerçek tutarı aç: 7,2 · 10^{5} = 720 000 TL.
Adım 2: Panodaki tutarı aç: 72 · 10^{5} = 7 200 000 TL.
Adım 3: Oranı bul: 7 200 000 ÷ 720 000 = 10. Panodaki tutar gerçeğin 10 katıdır.
Sağlama: Doğru yazım 72 · 10^{4} olurdu; baştaki sayı 10 katına çıktığı için üs 5'ten 4'e inmeliydi.
Sık yapılan hata: Baştaki sayıyı değiştirip üssü olduğu gibi bırakmak. Bu tek başına sayının değerini 10 katına çıkarır.
Cevap C.`
},
{
  id: "mat-ui-222",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir barajın su miktarı her ayın başında ölçülüp bir tabloya yazılmaktadır. Nisan ve mayıs aylarının başındaki ölçümler aşağıda verilmiştir.\n**Buna göre baraja nisan ayı boyunca giren su miktarının bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Ölçüm zamanı</th><th>Barajdaki su (m³)</th></tr><tr><td>1 Nisan</td><td>8 · 10<sup>4</sup></td></tr><tr><td>1 Mayıs</td><td>3 · 10<sup>5</sup></td></tr></table>`,
  secenekler: ["2,2 · 10^{4}", "2,2 · 10^{5}", "2,8 · 10^{5}", "2,92 · 10^{5}"],
  dogru: 1,
  hatalar: [
    "2,2 · 10^{4}: Başkatsayıyı doğru bulup üssü yanlış yazma. 300 000 − 80 000 = 220 000 sayısı 2,2 · 10^{5}'tir; 2,2 · 10^{4} = 22 000 eder.",
    null,
    "2,8 · 10^{5}: 8 · 10^{4} sayısını 0,2 · 10^{5} sanma. Doğrusu 8 · 10^{4} = 0,8 · 10^{5}'tir.",
    "2,92 · 10^{5}: 8 · 10^{4} sayısını 0,08 · 10^{5} sanma. Üsleri eşitlerken virgül bir basamak fazla kaydırılmış."
  ],
  aciklama: `Bilimsel gösterimle yazılmış iki sayı çıkarılırken önce ikisi de 10'un aynı kuvveti cinsinden yazılır; sonra başkatsayılar çıkarılır.
Adım 1: Neyin sorulduğunu belirle. Nisan boyunca giren su, ay sonundaki miktardan ay başındaki miktarın çıkarılmasıyla bulunur: (3 · 10^{5}) − (8 · 10^{4}).
Adım 2: Küçük üslü sayıyı büyüğün kuvvetine çevir: 8 · 10^{4} = 0,8 · 10^{5}. Başkatsayı 10'a bölündü, bu yüzden üs 1 arttı.
Adım 3: Başkatsayıları çıkar: 3 − 0,8 = 2,2. Sonuç 2,2 · 10^{5} m³'tür.
Adım 4: Bilimsel gösterime uygunluğu denetle: 2,2 sayısı 1 ile 10 arasındadır.
Sağlama: 300 000 − 80 000 = 220 000 = 2,2 · 10^{5}.
Sık yapılan hata: Kuvvetleri eşitlemeden başkatsayıları çıkarmak. 3 − 8 işlemi negatif çıkar ve barajda su azalmış gibi görünür.
Cevap B.`
},
{
  id: "mat-ui-223",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir sınıfın matematik panosunda her hafta bir işlem asılmakta ve doğru sonucu bulan öğrencilerin adı panoya yazılmaktadır. Bu haftanın işlemi aşağıda verilmiştir.\n**Buna göre panodaki işlemin sonucu kaçtır?**",
  gorsel: `<svg viewBox="0 0 480 140" role="img" aria-label="Pano: eksi 3'ün karesi çarpı eksi 2'nin küpü bölü eksi 6'nın karesi"><rect x="14" y="14" width="452" height="112" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="240" y="46" font-size="16" fill="currentColor" text-anchor="middle">HAFTANIN İŞLEMİ</text><text x="240" y="100" font-size="26" font-weight="bold" fill="var(--vurgu)" text-anchor="middle">(−3)<tspan font-size="17" dy="-11">2</tspan><tspan dy="11"> · (−2)</tspan><tspan font-size="17" dy="-11">3</tspan><tspan dy="11"> ÷ (−6)</tspan><tspan font-size="17" dy="-11">2</tspan></text></svg>`,
  secenekler: ["−72", "−3", "−2", "2"],
  dogru: 2,
  hatalar: [
    "−72: Son adımı atlama. −72 sayısı yalnızca ilk iki çarpanın çarpımıdır; bölme işlemi yapılmamış.",
    "−3: Üs almak yerine tabanı üsle çarpma: (−3) · 2 = −6, (−2) · 3 = −6 ve (−6) · 2 = −12 alınıp 36 ÷ (−12) = −3 bulunmuş.",
    null,
    "2: (−2)^{3} sonucunu pozitif alma. Taban negatif ve üs tek olduğu için sonuç negatiftir; işaret düşünce 9 · 8 ÷ 36 = 2 bulunur."
  ],
  aciklama: `Taban negatifse üssün tek mi çift mi olduğuna bakılır: çift kuvvette sonuç pozitif, tek kuvvette negatiftir. İşlem sırasında çarpma ve bölme soldan sağa yapılır.
Adım 1: Kuvvetleri tek tek hesapla: (−3)^{2} = 9 (üs çift, pozitif); (−2)^{3} = −8 (üs tek, negatif); (−6)^{2} = 36 (üs çift, pozitif).
Adım 2: Çarpmayı yap: 9 · (−8) = −72.
Adım 3: Bölmeyi yap: −72 ÷ 36 = −2. Farklı işaretli sayıların bölümü negatiftir.
Sağlama: −2 · 36 = −72; bölme doğru yapılmış.
Sık yapılan hata: Bütün parantezlerdeki eksi işaretlerini aynı sayıp sonucu pozitif bırakmak. İşareti belirleyen, üssün tek ya da çift olmasıdır.
Cevap C.`
},
{
  id: "mat-ui-224",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir seramik atölyesinde sır karışımı hazırlanmaktadır. Karışım için A bileşeninden 2^{5} mL, B bileşeninden 2^{3} mL alınıp iyice karıştırılmakta, elde edilen karışımın tamamı 2^{2} eşit kaba paylaştırılmaktadır.\n**Buna göre bir kaba kaç mililitre karışım konulur?**",
  gorsel: null,
  secenekler: ["8", "10", "40", "64"],
  dogru: 1,
  hatalar: [
    "8: Yalnızca A bileşenini paylaştırma: 32 ÷ 4 = 8 bulunmuş. B bileşeni karışıma katılmamış.",
    null,
    "40: Son adımı atlama. 40 mL karışımın tamamıdır; kaplara paylaştırma yapılmamış.",
    "64: Toplamada üsleri toplama: 2^{5} + 2^{3} = 2^{8} sanılıp 2^{8} ÷ 2^{2} = 2^{6} = 64 bulunmuş. Üsler yalnızca çarpmada toplanır."
  ],
  aciklama: `Üslü ifadelerde toplama ile çarpma karıştırılmamalıdır: a^{n} · a^{m} = a^{n+m} kuralı yalnızca çarpma içindir. Toplama yapılacaksa üslü sayıların değerleri bulunup toplanır.
Adım 1: Bileşenlerin hacimlerini hesapla: 2^{5} = 32 mL ve 2^{3} = 8 mL.
Adım 2: Karışımın tamamını bul: 32 + 8 = 40 mL.
Adım 3: Kap sayısını bul: 2^{2} = 4 kap.
Adım 4: Paylaştır: 40 ÷ 4 = 10 mL.
Sağlama: 4 kap · 10 mL = 40 mL; karışımın tamamı kaplara dağılmış.
Sık yapılan hata: 2^{5} + 2^{3} toplamını 2^{8} sanmak. 2^{8} = 256'dır, oysa toplam 40'tır.
Cevap B.`
},
{
  id: "mat-ui-225",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir belediyenin yıllık raporunda bütün tutarlar, sayfalar sade görünsün diye 10^{9} TL (milyar TL) biriminde yazılmaktadır. Bu yıl bir parkın yenilenmesine ayrılan tutar 3,2 · 10^{6} TL'dir.\n**Buna göre parka ayrılan tutar rapora hangi sayı ile yazılır?**",
  gorsel: null,
  secenekler: ["0,0032", "0,032", "32", "3200"],
  dogru: 0,
  hatalar: [
    null,
    "0,032: Üs farkını 2 sanma. 10^{6}'dan 10^{9}'a geçerken üs 3 artar, bu yüzden baştaki sayı 1000'e bölünür.",
    "32: Kaydırma yönünü ters alma: 3,2 · 10^{6} = 32 · 10^{5} yazılıp durulmuş. Üs büyüyünce baştaki sayı küçülmelidir.",
    "3200: 10^{9} yerine 10^{3} (bin) birimini kullanma. 3200 · 10^{3} = 3 200 000'dir."
  ],
  aciklama: `Bir sayıyı 10'un belirli bir kuvveti cinsinden yazarken baştaki sayı ile üs ters yönde değişir: üs artarsa baştaki sayı aynı oranda küçülür.
Adım 1: Tutarı aç: 3,2 · 10^{6} = 3 200 000 TL.
Adım 2: İstenen birim 10^{9}'dur. Üs 6'dan 9'a çıkarken 3 arttığına göre baştaki sayı 1000'e bölünmelidir: 3,2 ÷ 1000 = 0,0032.
Adım 3: Yaz: 3 200 000 = 0,0032 · 10^{9} TL. Rapora 0,0032 yazılır.
Sağlama: 0,0032 · 1 000 000 000 = 3 200 000. Sayı değişmedi, yalnızca birimi değişti.
Sık yapılan hata: Üs büyürken baştaki sayıyı da büyütmek. Bu durumda tutar gerçekte olduğundan çok daha büyük görünür.
Cevap A.`
},
/* ===================== KADEME 3 — LGS AYARI (ek) ===================== */
{
  id: "mat-ui-313",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir metal atölyesinde geniş bir alüminyum levha, bir makineyle turlar hâlinde küçültülmektedir. Makine her turda elindeki bütün parçaları 3 eşit parçaya böler; bölme sırasında hiç fire verilmez. İlk üç turun sonunda elde edilen parça sayısı tabloda verilmiştir. Makine, parça sayısı 243 olunca durdurulmuştur.\n**Buna göre makine kaç tur çalışmıştır?**",
  gorsel: `<table class="tablo"><tr><th>Tur</th><th>1</th><th>2</th><th>3</th></tr><tr><td>Parça sayısı</td><td>3</td><td>9</td><td>27</td></tr></table>`,
  secenekler: ["4", "5", "6", "81"],
  dogru: 1,
  hatalar: [
    "4: Bir turu eksik sayma. 4 tur sonunda parça sayısı 3^{4} = 81 olur, 243 değil.",
    null,
    "6: Başlangıçtaki bütün levhayı da bir tur sayma. Levha bölünmeden önce henüz hiçbir tur yapılmamıştır.",
    "81: Son turdan bir önceki parça sayısını cevap sanma: 243 ÷ 3 = 81 bulunup durulmuş. Soru parça sayısını değil tur sayısını istiyor."
  ],
  aciklama: `Her adımda aynı sayıyla çarpılan bir sayma işinde sonuç üslü ifadeyle yazılır. Tekrar tekrar çarpılan sayı taban, kaç kez çarpıldığı ise üstür.
Adım 1: Tablodaki örüntüyü oku: 1. tur 3 = 3^{1}, 2. tur 9 = 3^{2}, 3. tur 27 = 3^{3} parça. Demek ki tur sayısı üs, 3 ise tabandır.
Adım 2: Durma koşulunu yaz: 3^{tur} = 243 olmalıdır.
Adım 3: 3'ün kuvvetlerini sırayla yaz: 3^{1} = 3, 3^{2} = 9, 3^{3} = 27, 3^{4} = 81, 3^{5} = 243. Öyleyse tur sayısı 5'tir.
Sağlama: 3^{5} = 3^{3} · 3^{2} = 27 · 9 = 243. Sayı tutuyor.
Sık yapılan hata: Üslü ifadenin değerini cevap yazmak. Burada aranan, üssün değeri olan tur sayısıdır.
Cevap B.`
},
{
  id: "mat-ui-314",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir çevrim içi oyunda karakterlerin güç değerleri, oyuncular karşılaştırma yapabilsin diye üslü ifadelerle gösterilmektedir. İki karakterin güç kartı aşağıda verilmiştir. Bu iki karakterin gücü birbirine eşittir.\n**Buna göre k kaçtır?**",
  gorsel: `<svg viewBox="0 0 460 170" role="img" aria-label="İki güç kartı: Ada karakterinin gücü 4 üssü 9, Kaya karakterinin gücü 8 üssü k"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="24" y="24" width="180" height="120" rx="10"/><rect x="256" y="24" width="180" height="120" rx="10"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="114" y="54">ADA</text><text x="346" y="54">KAYA</text><text x="114" y="132">Güç</text><text x="346" y="132">Güç</text></g><g fill="var(--vurgu)" font-size="32" font-weight="bold" text-anchor="middle"><text x="114" y="104">4<tspan font-size="20" dy="-14">9</tspan></text><text x="346" y="104">8<tspan font-size="20" dy="-14">k</tspan></text></g></svg>`,
  secenekler: ["18", "9", "6", "3"],
  dogru: 2,
  hatalar: [
    "18: Ortak tabana çevirdikten sonra bulunan üssü doğrudan cevap sanma. 4^{9} = 2^{18}'dir ama soruda taban 8'dir, 2 değil.",
    "9: Tabanı değiştirirken üssü olduğu gibi bırakma. 4 ile 8 farklı sayılar olduğu için 4^{9} ile 8^{9} eşit olamaz.",
    null,
    "3: Üssü tabanların üs farkına bölme: 9 ÷ 3 = 3 alınmış. Doğru yol iki ifadeyi de aynı tabanda yazmaktır."
  ],
  aciklama: `Tabanları farklı iki üslü sayıyı karşılaştırmak için ikisi de ortak bir tabanda yazılır. Bunun için (a^{n})^{m} = a^{n·m} kuralı kullanılır. 4 ve 8 sayılarının ikisi de 2'nin kuvvetidir.
Adım 1: Ada'nın gücünü 2 tabanında yaz: 4^{9} = (2^{2})^{9} = 2^{2·9} = 2^{18}.
Adım 2: Kaya'nın gücünü 2 tabanında yaz: 8^{k} = (2^{3})^{k} = 2^{3k}.
Adım 3: Güçler eşit olduğuna göre tabanlar aynıyken üsler de eşittir: 3k = 18.
Adım 4: k değerini bul: k = 18 ÷ 3 = 6.
Sağlama: 4^{9} = 262 144 ve 8^{6} = 262 144. İki güç gerçekten eşit.
Sık yapılan hata: Tabanı büyütürken üssü aynı bırakmak. Taban 2'den 8'e çıkarken üs 3 kat küçülmelidir, çünkü 8 = 2^{3}'tür.
Cevap C.`
},
{
  id: "mat-ui-315",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir fen laboratuvarında dört öğrenci, aynı maddeden hazırladıkları örnekleri ayrı ayrı tartmıştır. Öğretmen, basamak değerlerini fark etmeleri için sonuçları çözümlenmiş biçimde yazmalarını istemiştir. Öğrencilerin yazdıkları aşağıdaki tabloda verilmiştir.\n**Buna göre en ağır örneği hangi öğrenci tartmıştır?**",
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Örneğin kütlesi (g)</th></tr><tr><td>Bora</td><td>4 · 10<sup>0</sup> + 1 · 10<sup>−1</sup></td></tr><tr><td>Ceren</td><td>4 · 10<sup>0</sup> + 9 · 10<sup>−2</sup></td></tr><tr><td>Deniz</td><td>4 · 10<sup>0</sup> + 8 · 10<sup>−2</sup> + 5 · 10<sup>−3</sup></td></tr><tr><td>Emir</td><td>3 · 10<sup>0</sup> + 9 · 10<sup>−1</sup> + 9 · 10<sup>−2</sup></td></tr></table>`,
  secenekler: ["Bora", "Ceren", "Deniz", "Emir"],
  dogru: 0,
  hatalar: [
    null,
    "Ceren: 9 rakamını görüp büyük sanma. Ceren'in örneği 4,09 gramdır; 9 rakamı yüzde birler basamağındadır ve 0,09 değerini taşır. Bora'nın 0,1 grama karşılık gelen terimi bundan büyüktür.",
    "Deniz: Terim sayısı en çok olanı en ağır sanma. Deniz'in örneği 4,085 gramdır; terim sayısı büyüklük anlamına gelmez.",
    "Emir: Virgülden sonraki rakamlara bakıp seçme. Emir'in örneği 3,99 gramdır; birler basamağı 3 olduğu için hepsinden hafiftir."
  ],
  aciklama: `Çözümlenmiş ifadeleri karşılaştırmak için önce her birini ondalık gösterime çevirmek gerekir. Karşılaştırmada en soldaki basamaktan başlanır; basamak değerleri sağa doğru küçülür.
Adım 1: Kütleleri hesapla. Bora: 4 + 0,1 = 4,1 g. Ceren: 4 + 0,09 = 4,09 g. Deniz: 4 + 0,08 + 0,005 = 4,085 g. Emir: 3 + 0,9 + 0,09 = 3,99 g.
Adım 2: Birler basamağına bak. Emir'in örneğinde 3, diğerlerinde 4 vardır; öyleyse en hafif örnek Emir'indir.
Adım 3: Kalan üç örnekte onda birler basamağına bak: Bora'da 1, Ceren'de 0, Deniz'de 0. En büyük onda birler basamağı Bora'dadır.
Adım 4: En ağır örnek 4,1 gramla Bora'nındır.
Sağlama: Basamak sayılarını eşitleyerek karşılaştır: 4,100 > 4,090 > 4,085 > 3,990.
Sık yapılan hata: Virgülden sonraki rakamları bir tam sayı gibi okuyup 9'u 1'den büyük sanmak. Karşılaştırma basamak basamak yapılır.
Cevap A.`
},
{
  id: "mat-ui-316",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir kargo şirketinin dört şubesi, bir yılda işlem gören gönderi sayısını giriş panolarına yazmıştır. Şubeler bu sayıları yazarken 10'un farklı tam sayı kuvvetlerini kullanmıştır. Panolarda yazan değerler aşağıdaki tabloda verilmiştir.\n**Buna göre bir yılda en çok gönderi hangi şubede işlem görmüştür?**",
  gorsel: `<table class="tablo"><tr><th>Şube</th><th>Gönderi sayısı</th></tr><tr><td>K</td><td>0,04 · 10<sup>7</sup></td></tr><tr><td>L</td><td>0,5 · 10<sup>6</sup></td></tr><tr><td>M</td><td>49 · 10<sup>4</sup></td></tr><tr><td>N</td><td>4500 · 10<sup>2</sup></td></tr></table>`,
  secenekler: ["K şubesi", "L şubesi", "M şubesi", "N şubesi"],
  dogru: 1,
  hatalar: [
    "K şubesi: 10'un üssü en büyük olanı seçme. K şubesinde 0,04 · 10^{7} = 400 000 gönderi vardır; baştaki sayı 1'den küçük olduğu için sayı beklenenden küçük çıkar.",
    null,
    "M şubesi: Sayıları açmadan baştaki sayıların büyüklüğüne bakma. M şubesinde 49 · 10^{4} = 490 000 gönderi vardır; bu, L şubesindeki 500 000'den azdır.",
    "N şubesi: Baştaki sayısı en büyük olanı seçme. N şubesinde 4500 · 10^{2} = 450 000 gönderi vardır."
  ],
  aciklama: `10'un farklı kuvvetleriyle yazılmış sayılar, baştaki sayı ile üs birlikte değerlendirilmeden karşılaştırılamaz. En güvenli yol, hepsini açıp aynı biçimde yazmaktır.
Adım 1: K şubesini aç: 0,04 · 10^{7} = 0,04 · 10 000 000 = 400 000.
Adım 2: L şubesini aç: 0,5 · 10^{6} = 0,5 · 1 000 000 = 500 000.
Adım 3: M ve N şubelerini aç: 49 · 10^{4} = 490 000 ve 4500 · 10^{2} = 450 000.
Adım 4: Sayıları karşılaştır: 500 000 > 490 000 > 450 000 > 400 000. En çok gönderi L şubesindedir.
Sağlama: Hepsini bilimsel gösterimle yaz: K = 4 · 10^{5}, L = 5 · 10^{5}, M = 4,9 · 10^{5}, N = 4,5 · 10^{5}. Üsler eşit olunca karşılaştırma baştaki sayılarla yapılır ve 5 en büyüğüdür.
Sık yapılan hata: Yalnızca 10'un üssüne ya da yalnızca baştaki sayıya bakmak. Sayının değerini ikisi birlikte belirler.
Cevap B.`
},
{
  id: "mat-ui-317",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir matbaada kullanılan baskı kâğıdı paketlerinin her birinde 5 · 10^{2} yaprak bulunmaktadır ve bir paketin kalınlığı 5 · 10^{1} milimetredir. Paketteki bütün yaprakların kalınlığı birbirine eşittir ve yapraklar arasında boşluk yoktur.\n**Buna göre bir yaprağın kalınlığı kaç metredir? (1 milimetre = 10^{-3} metre)**",
  gorsel: `<svg viewBox="0 0 480 170" role="img" aria-label="Kâğıt paketi: 5 çarpı 10 üssü 2 yaprak, paketin kalınlığı 5 çarpı 10 üssü 1 milimetre"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="40" y="46" width="200" height="86" rx="4"/></g><g stroke="currentColor" stroke-width="1"><line x1="40" y1="60" x2="240" y2="60"/><line x1="40" y1="74" x2="240" y2="74"/><line x1="40" y1="88" x2="240" y2="88"/><line x1="40" y1="102" x2="240" y2="102"/><line x1="40" y1="116" x2="240" y2="116"/></g><g stroke="var(--vurgu)" stroke-width="2"><line x1="264" y1="46" x2="264" y2="132"/><line x1="256" y1="46" x2="272" y2="46"/><line x1="256" y1="132" x2="272" y2="132"/></g><g fill="currentColor" font-size="16"><text x="284" y="84">Paketin kalınlığı:</text><text x="284" y="106">5 · 10<tspan font-size="13" dy="-8">1</tspan><tspan dy="8"> mm</tspan></text><text x="40" y="158">Paketteki yaprak sayısı: 5 · 10<tspan font-size="13" dy="-8">2</tspan></text></g></svg>`,
  secenekler: ["10^{-4}", "10^{-3}", "10^{-2}", "10^{-1}"],
  dogru: 0,
  hatalar: [
    null,
    "10^{-3}: Bölmeyi atlayıp bir yaprağı 1 mm sanma. 1 mm = 10^{-3} m'dir ama bir yaprak 1 mm'den incedir.",
    "10^{-2}: 1 milimetreyi 10^{-2} metre sanma (santimetre ile karıştırma). Bir metrede 1000 milimetre vardır.",
    "10^{-1}: Birim çevirmeyi atlama. 10^{-1} sayısı bir yaprağın milimetre cinsinden kalınlığıdır, metre cinsinden değil."
  ],
  aciklama: `Bilimsel gösterimdeki sayılar bölünürken baştaki sayılar kendi aralarında bölünür, 10'un kuvvetlerinde üsler çıkarılır: (a · 10^{n}) ÷ (b · 10^{m}) = (a ÷ b) · 10^{n-m}.
Adım 1: Bir yaprağın milimetre cinsinden kalınlığını bul: (5 · 10^{1}) ÷ (5 · 10^{2}). Baştaki sayılar: 5 ÷ 5 = 1. Üsler: 1 − 2 = −1. Sonuç 10^{-1} mm'dir.
Adım 2: Birimi çevir. 1 mm = 10^{-3} m olduğuna göre 10^{-1} mm = 10^{-1} · 10^{-3} m.
Adım 3: Üsleri topla: (−1) + (−3) = −4. Bir yaprak 10^{-4} metre kalınlığındadır.
Sağlama: 10^{-4} m = 0,0001 m = 0,1 mm'dir. 500 yaprak · 0,1 mm = 50 mm ve bu, paketin kalınlığıdır.
Sık yapılan hata: Milimetre cinsinden bulunan sonucu metre sanıp durmak. Birim çevrilmezse sonuç 1000 kat büyük kalır.
Cevap A.`
},
{
  id: "mat-ui-318",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir öğrenci, ödevinde bir tartım sonucu olan 205,07 sayısını 10'un tam sayı kuvvetleriyle çözümlemiştir. Öğrencinin defterine yazdığı çözümleme aşağıda verilmiştir. Öğretmen, çözümlemede yalnızca bir terimin yanlış yazıldığını, diğerlerinin doğru olduğunu söylemiştir.\n**Buna göre öğrenci hangi düzeltmeyi yapmalıdır?**",
  gorsel: `<svg viewBox="0 0 520 140" role="img" aria-label="Defterde yazan çözümleme: 205,07 eşittir 2 çarpı 10 üssü 2 artı 5 çarpı 10 üssü 0 artı 7 çarpı 10 üssü eksi 1"><rect x="16" y="16" width="488" height="108" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="56" y1="16" x2="56" y2="124" stroke="var(--vurgu)" stroke-width="2"/><text x="80" y="60" font-size="16" fill="currentColor">Ödev — çözümleme</text><text x="80" y="102" font-size="20" fill="currentColor">205,07 = 2 · 10<tspan font-size="14" dy="-9">2</tspan><tspan dy="9"> + 5 · 10</tspan><tspan font-size="14" dy="-9">0</tspan><tspan dy="9"> + 7 · 10</tspan><tspan font-size="14" dy="-9">−1</tspan></text></svg>`,
  secenekler: [
    "2 · 10^{2} yerine 2 · 10^{3} yazmalı",
    "5 · 10^{0} yerine 5 · 10^{1} yazmalı",
    "7 · 10^{-1} yerine 7 · 10^{-3} yazmalı",
    "7 · 10^{-1} yerine 7 · 10^{-2} yazmalı"
  ],
  dogru: 3,
  hatalar: [
    "2 rakamını binler basamağında sanma. 205,07 sayısı üç basamaklı bir tam kısma sahiptir; 2 rakamı yüzler basamağındadır ve terimi 2 · 10^{2}'dir.",
    "Tam kısımdaki 0 rakamını atlayıp 5'i onlar basamağında sanma. 205 sayısında onlar basamağı 0, birler basamağı 5'tir.",
    "Virgülden sonraki basamağı bir fazla kaydırma. 7 rakamı binde birler değil yüzde birler basamağındadır.",
    null
  ],
  aciklama: `Bir ondalık gösterimi çözümlerken her rakam, bulunduğu basamağın değeriyle çarpılır. Virgülden sonraki ilk basamak 10^{-1}, ikinci basamak 10^{-2} değerini taşır.
Adım 1: Sayının basamaklarını adlandır: 2 yüzler, 0 onlar, 5 birler, 0 onda birler, 7 yüzde birler basamağındadır.
Adım 2: Doğru çözümlemeyi yaz: 2 · 10^{2} + 5 · 10^{0} + 7 · 10^{-2}. Değeri 0 olan terimler yazılmayabilir.
Adım 3: Öğrencinin yazdıklarıyla karşılaştır. İlk iki terim doğrudur; son terim 7 · 10^{-1} yazılmış, oysa 7 · 10^{-2} olmalıydı.
Sağlama: Öğrencinin yazdığı çözümlemenin değeri 200 + 5 + 0,7 = 205,7'dir; doğrusu 200 + 5 + 0,07 = 205,07 olmalıdır.
Sık yapılan hata: Virgülden sonraki 0'ı atlayıp 7 rakamını onda birler basamağına kaydırmak.
Cevap D.`
},
{
  id: "mat-ui-319",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir müzik atölyesinde gitar tellerinin kalınlığı, tellerin geldiği kutulara farklı birimlerle yazılmıştır. Atölyedeki dört telin kutusunda yazan değerler aşağıdaki tabloda verilmiştir.\n**Buna göre bu tellerden hangisi en kalındır? (1 cm = 10 mm, 1 m = 1000 mm)**",
  gorsel: `<table class="tablo"><tr><th>Tel</th><th>Kalınlık</th></tr><tr><td>Mi</td><td>3 · 10<sup>−1</sup> mm</td></tr><tr><td>Re</td><td>2 · 10<sup>−4</sup> m</td></tr><tr><td>Sol</td><td>9 · 10<sup>−3</sup> cm</td></tr><tr><td>La</td><td>4 · 10<sup>−2</sup> cm</td></tr></table>`,
  secenekler: ["Mi teli", "Re teli", "Sol teli", "La teli"],
  dogru: 3,
  hatalar: [
    "Mi teli: Birimleri eşitlemeden 10'un üssü en büyük olanı (−1) seçme. Mi teli 0,3 mm kalınlığındadır.",
    "Re teli: Metre en büyük birim olduğu için o satırdaki telin en kalın olduğunu sanma. Re teli 0,2 mm kalınlığındadır.",
    "Sol teli: Baştaki sayısı en büyük olanı (9) seçme. Sol teli 0,09 mm ile en ince teldir.",
    null
  ],
  aciklama: `Farklı birimlerle yazılmış büyüklükler karşılaştırılmadan önce hepsi aynı birime çevrilir. Birim çevirmek, sayıyı 10'un bir kuvvetiyle çarpmak demektir.
Adım 1: Mi telini yaz: 3 · 10^{-1} mm = 0,3 mm. Zaten milimetre cinsindendir.
Adım 2: Re telini çevir: 1 m = 1000 mm olduğundan 2 · 10^{-4} m = 2 · 10^{-4} · 10^{3} mm = 2 · 10^{-1} mm = 0,2 mm.
Adım 3: Sol ve La tellerini çevir: 1 cm = 10 mm olduğundan 9 · 10^{-3} cm = 9 · 10^{-2} mm = 0,09 mm ve 4 · 10^{-2} cm = 4 · 10^{-1} mm = 0,4 mm.
Adım 4: Karşılaştır: 0,4 > 0,3 > 0,2 > 0,09. En kalın tel La telidir.
Sağlama: Hepsini milimetre cinsinden sırala: La 0,4; Mi 0,3; Re 0,2; Sol 0,09. Dört değer de gerçek gitar tellerinin kalınlığına yakındır.
Sık yapılan hata: Birimlere bakmadan yalnızca baştaki sayıları ya da yalnızca üsleri karşılaştırmak.
Cevap D.`
},
{
  id: "mat-ui-320",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir tıbbi malzeme fabrikası her gün aynı sayıda, günde 2,5 · 10^{4} maske üretmektedir. Fabrikaya 3 · 10^{5} maskelik tek bir sipariş gelmiştir. Fabrika bu süre boyunca yalnızca bu siparişi üretecek ve hiç ara vermeyecektir.\n**Buna göre sipariş kaç günde tamamlanır?**",
  gorsel: null,
  secenekler: ["1,2", "12", "75", "120"],
  dogru: 1,
  hatalar: [
    "1,2: 10'un kuvvetlerini bölmeyi atlama. Yalnızca 3 ÷ 2,5 = 1,2 işlemi yapılmış, üsler hesaba katılmamış.",
    null,
    "75: Bölme yerine çarpma: 2,5 · 3 = 7,5 bulunup 10'un kuvvetleriyle 75 yazılmış. Sipariş sayısı günlük üretime bölünmelidir.",
    "120: Üsleri çıkarırken hata yapma: 10^{5} ÷ 10^{4} = 10^{1}'dir, 10^{2} değildir."
  ],
  aciklama: `Bilimsel gösterimle yazılmış sayılar bölünürken baştaki sayılar kendi aralarında bölünür, 10'un kuvvetlerinde üsler çıkarılır.
Adım 1: İşlemi kur: gün sayısı = toplam sipariş ÷ günlük üretim = (3 · 10^{5}) ÷ (2,5 · 10^{4}).
Adım 2: Baştaki sayıları böl: 3 ÷ 2,5 = 30 ÷ 25 = 1,2.
Adım 3: 10'un kuvvetlerini böl: 10^{5} ÷ 10^{4} = 10^{5-4} = 10^{1} = 10.
Adım 4: Sonuçları çarp: 1,2 · 10 = 12 gün.
Sağlama: Sayıları aç: 300 000 ÷ 25 000 = 12. Ayrıca 12 gün · 25 000 maske = 300 000 maske eder.
Sık yapılan hata: Yalnızca baştaki sayıları bölüp 1,2 demek. Bu sonuç, siparişin bir günden kısa sürede biteceği anlamına gelirdi; oysa sipariş günlük üretimin 12 katıdır.
Cevap B.`
},
{
  id: "mat-ui-321",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir şifre üretme programı, her adımda bir önceki adımda ürettiği sayıyı 3 ile çarpmaktadır. Program 3 sayısıyla başladığı için n. adımda 3^{n} sayısını üretir. Ekran küçük olduğundan programda yalnızca üretilen sayının birler basamağındaki rakam görünür; sayının kalanı ekrana yazılmaz. İlk altı adımın sonucu tabloda verilmiştir.\n**Buna göre 26. adımda ekranda hangi rakam görünür?**",
  gorsel: `<table class="tablo"><tr><th>Adım</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>Üretilen sayı</td><td>3</td><td>9</td><td>27</td><td>81</td><td>243</td><td>729</td></tr><tr><td>Ekranda görünen</td><td>3</td><td>9</td><td>7</td><td>1</td><td>3</td><td>9</td></tr></table>`,
  secenekler: ["1", "3", "7", "9"],
  dogru: 3,
  hatalar: [
    "1: 26 sayısını 4'e tam bölünüyor sanma. Tam bölünseydi örüntünün dördüncü rakamı olan 1 görünürdü.",
    "3: Kalanı 1 sanma. Kalan 1 olsaydı örüntünün birinci rakamı olan 3 görünürdü.",
    "7: Kalanı 3 sanma. 26 ÷ 4 işleminde bölüm 6, kalan 2'dir; kalan 3 olsaydı 7 görünürdü.",
    null
  ],
  aciklama: `Bir sayının kuvvetlerinde birler basamağı belirli bir uzunlukta tekrar eden bir örüntü oluşturur. Örüntünün uzunluğu bulunursa istenen adımdaki rakam, bölme kalanı yardımıyla belirlenir.
Adım 1: Tablodaki ekran satırını oku: 3, 9, 7, 1, 3, 9… Rakamlar dörder dörder tekrar ediyor; örüntünün uzunluğu 4'tür.
Adım 2: Örüntüdeki sırayı yaz: 1. sıra 3, 2. sıra 9, 3. sıra 7, 4. sıra 1.
Adım 3: 26. adımın örüntüdeki yerini bul: 26 ÷ 4 = 6 kalan 2. Demek ki 26. adım, örüntünün 2. sırasındaki rakamı gösterir.
Adım 4: Örüntünün 2. sırasındaki rakam 9'dur.
Sağlama: Tabloda 2., 6. adımlarda ekranda 9 görünüyor. Bu adımların 4'e bölümünden kalan da 2'dir; örüntü tutarlı.
Sık yapılan hata: Kalan 0 çıktığında örüntünün birinci rakamını yazmak. Kalan 0 ise örüntünün son rakamı (burada 1) görünür.
Cevap D.`
},
{
  id: "mat-ui-322",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bilim şenliğinde üç takım, etkinlikler boyunca puan toplamıştır. Şenlik sonunda takımların puanları, tabelaya üslü ifadelerle yazılmıştır. Tabelada K takımının puanı 2^{30}, L takımının puanı 3^{20}, M takımının puanı 6^{10} olarak görünmektedir. Takımlar puanlarına göre sıraya dizilecektir.\n**Buna göre takımların puanları azdan çoğa doğru nasıl sıralanır?**",
  gorsel: null,
  secenekler: ["M, K, L", "K, L, M", "M, L, K", "L, K, M"],
  dogru: 0,
  hatalar: [
    null,
    "K, L, M: Yalnızca tabanlara bakma. 2 < 3 < 6 olduğu için puanların da bu sırada olduğu sanılmış; oysa üsler birbirinden farklıdır.",
    "M, L, K: Yalnızca üslere bakma. 10 < 20 < 30 olduğu için puanların bu sırada olduğu sanılmış; oysa tabanlar da farklıdır.",
    "L, K, M: Karşılaştırmayı doğru yapıp sıralamayı ters yazma. Bu sıralama çoktan aza doğrudur, soru azdan çoğa istiyor."
  ],
  aciklama: `Tabanları ve üsleri farklı olan üslü sayıları karşılaştırmanın en kolay yolu, hepsini aynı üsle yazmaktır. Bunun için (a^{n})^{m} = a^{n·m} kuralı kullanılır. Üsleri eşit olan sayılarda tabanı büyük olan sayı büyüktür.
Adım 1: Üslerin ortak böleni 10'dur. Her puanı 10 üssüyle yaz.
Adım 2: K takımı: 2^{30} = (2^{3})^{10} = 8^{10}.
Adım 3: L takımı: 3^{20} = (3^{2})^{10} = 9^{10}.
Adım 4: M takımı zaten 6^{10}'dur. Üsler eşit olduğuna göre tabanları karşılaştır: 6 < 8 < 9. Öyleyse M < K < L olur.
Sağlama: Sayıları aç: 6^{10} ≈ 60 milyon, 2^{30} ≈ 1,07 milyar, 3^{20} ≈ 3,49 milyar. Sıralama doğrulanıyor.
Sık yapılan hata: Üssü en büyük olanı en büyük sayı sanmak. 2^{30} sayısı, üssü daha küçük olan 3^{20} sayısından küçüktür.
Cevap A.`
},
{
  id: "mat-ui-323",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 4,
  soru: "Bir kargo firmasında paketler tartıldığında terazinin ekranında kütle, çözümlenmiş biçimde görünmektedir. Firmanın kuralına göre bir koliye konulan paketlerin toplam kütlesi 25 kilogramı __geçemez__; 25 kilogram olması ise uygundur. Bir koliye ikişer paket konulacaktır. Dört paketin ekranda görünen kütleleri tabloda verilmiştir.\n**Buna göre aşağıdaki paket çiftlerinden hangisi aynı koliye konulabilir?**",
  gorsel: `<table class="tablo"><tr><th>Paket</th><th>Ekranda görünen kütle (kg)</th></tr><tr><td>K</td><td>1 · 10<sup>1</sup> + 1 · 10<sup>0</sup> + 4 · 10<sup>−1</sup></td></tr><tr><td>L</td><td>1 · 10<sup>1</sup> + 3 · 10<sup>0</sup> + 5 · 10<sup>−1</sup></td></tr><tr><td>M</td><td>1 · 10<sup>1</sup> + 3 · 10<sup>0</sup> + 8 · 10<sup>−1</sup></td></tr><tr><td>N</td><td>1 · 10<sup>1</sup> + 4 · 10<sup>0</sup> + 2 · 10<sup>−1</sup></td></tr></table>`,
  secenekler: ["K ve L", "K ve M", "K ve N", "M ve N"],
  dogru: 0,
  hatalar: [
    null,
    "K ve M: Onda birler basamağını atlayıp kütleleri 11 ve 13 kilogram okuma; toplam 24 sanılmış. Gerçek toplam 11,4 + 13,8 = 25,2 kilogramdır ve sınırı aşar.",
    "K ve N: N paketinin çözümlemesindeki 4 · 10^{0} terimini 4 · 10^{-1} sanıp kütleyi 10,6 kilogram okuma. Gerçek toplam 11,4 + 14,2 = 25,6 kilogramdır.",
    "M ve N: Çözümlemedeki 1 · 10^{1} terimini birler basamağı sanıp kütleleri 4,8 ve 5,2 kilogram okuma. Gerçek toplam 13,8 + 14,2 = 28 kilogramdır."
  ],
  aciklama: `Çözümlenmiş kütleler önce ondalık gösterime çevrilir, sonra ikişerli toplamlar sınırla karşılaştırılır. "Geçemez" ifadesi sınır değerin kendisini dışarıda bırakmaz: 25 kilogram uygundur.
Adım 1: Kütleleri hesapla: K = 10 + 1 + 0,4 = 11,4 kg; L = 10 + 3 + 0,5 = 13,5 kg; M = 10 + 3 + 0,8 = 13,8 kg; N = 10 + 4 + 0,2 = 14,2 kg.
Adım 2: Seçeneklerdeki çiftleri topla: K + L = 24,9 kg; K + M = 25,2 kg; K + N = 25,6 kg; M + N = 28 kg.
Adım 3: Sınırla karşılaştır: yalnızca 24,9 kilogram 25 kilogramı geçmez. Öteki üç çift sınırı aşar.
Adım 4: Aynı koliye K ve L paketleri konulabilir.
Sağlama: En hafif iki paket K (11,4 kg) ve L (13,5 kg) paketleridir; toplamları bile sınıra yalnızca 0,1 kilogram kalmıştır. Bu yüzden başka hiçbir çift uygun olamaz.
Sık yapılan hata: Onda birler basamağını yuvarlayıp atmak. 0,4 ile 0,8 küçük görünür ama toplamları sınırı aştırmaya yeter.
Cevap A.`
},
{
  id: "mat-ui-324",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir su arıtma tesisi her gün aynı miktarda, günde 4,8 · 10^{5} litre suyu arıtmaktadır. Arıtılan su, tesisin yanındaki 6 · 10^{2} metreküp hacimli depolara doldurulmakta ve yalnızca tamamen dolan depolar şehre gönderilmektedir; yarım kalan depo beklemeye alınır. Tesis bir hafta boyunca 7 gün çalışmıştır. (1 metreküp = 10^{3} litre)\n**Buna göre bir haftada arıtılan su, bu depolardan kaç tanesini tamamen doldurur?**",
  gorsel: `<svg viewBox="0 0 520 165" role="img" aria-label="Arıtma tesisi bilgileri: günlük arıtılan su 4,8 çarpı 10 üssü 5 litre, bir deponun hacmi 6 çarpı 10 üssü 2 metreküp"><rect x="16" y="14" width="300" height="136" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="16" y1="52" x2="316" y2="52" stroke="currentColor" stroke-width="2"/><text x="166" y="40" font-size="16" font-weight="bold" fill="var(--vurgu)" text-anchor="middle">ARITMA TESİSİ</text><g fill="currentColor" font-size="16"><text x="36" y="86">Günlük arıtılan su:</text><text x="36" y="112">4,8 · 10<tspan font-size="13" dy="-8">5</tspan><tspan dy="8"> litre</tspan></text><text x="36" y="140">Çalışma: haftada 7 gün</text></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="356" y="46" width="120" height="76" rx="6"/></g><line x1="356" y1="86" x2="476" y2="86" stroke="var(--vurgu)" stroke-width="2"/><g fill="currentColor" font-size="15" text-anchor="middle"><text x="416" y="36">Bir depo</text><text x="416" y="76">6 · 10<tspan font-size="12" dy="-7">2</tspan><tspan dy="7"> m³</tspan></text><text x="416" y="142">Depo hacmi</text></g></svg>`,
  secenekler: ["5", "5,6", "6", "56"],
  dogru: 0,
  hatalar: [
    null,
    "5,6: \"Tamamen dolan depo\" koşulunu atlama. 5,6 sayısı bulunan bölümdür; altıncı deponun yalnızca bir bölümü dolar, o depo gönderilmez.",
    "6: Bölümü yukarı yuvarlama. Altıncı depo tamamen dolmadığı için sayılmaz.",
    "56: 6 · 10^{2} sayısını 60 sanma. Bir deponun hacmi 600 metreküptür."
  ],
  aciklama: `Farklı birimlerle verilen büyüklükler önce aynı birime çevrilir. Litreden metreküpe geçerken sayı 10^{3}'e bölünür; bölmede 10'un üsleri çıkarılır.
Adım 1: Günlük arıtılan suyu metreküpe çevir: (4,8 · 10^{5}) ÷ 10^{3} = 4,8 · 10^{5-3} = 4,8 · 10^{2} = 480 m³.
Adım 2: Haftalık miktarı bul: 480 · 7 = 3360 m³.
Adım 3: Bir deponun hacmini yaz: 6 · 10^{2} = 600 m³.
Adım 4: Depo sayısını bul: 3360 ÷ 600 = 5,6.
Adım 5: Koşulu uygula. Yalnızca tamamen dolan depolar gönderildiğine göre 5 depo tamamen dolar; kalan 360 metreküp altıncı depoyu tam dolduramaz.
Sağlama: 5 depo · 600 m³ = 3000 m³ ve 3360 − 3000 = 360 m³ artar. 360 < 600 olduğu için altıncı depo yarım kalır.
Sık yapılan hata: Bölme sonucunu doğrudan cevap yazmak ya da yukarı yuvarlamak. "Tamamen dolan" koşulu, sonucun aşağı yuvarlanmasını gerektirir.
Cevap A.`
},
{
  id: "mat-ui-325",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir matematik kulübünün duvarına dört ifade kartı asılmıştır. Kartlar, üzerlerindeki ifadelerin değerine göre soldan sağa küçükten büyüğe doğru yeniden dizilecektir.\n**Buna göre kartların soldan sağa doğru sıralanışı aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 150" role="img" aria-label="Dört kart: eksi 2'nin 3. kuvveti, 2'nin eksi 3. kuvveti, eksi 2'nin eksi 2. kuvveti, 2'nin 0. kuvveti"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="16" y="34" width="108" height="86" rx="8"/><rect x="148" y="34" width="108" height="86" rx="8"/><rect x="280" y="34" width="108" height="86" rx="8"/><rect x="412" y="34" width="92" height="86" rx="8"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="70" y="26">1. kart</text><text x="202" y="26">2. kart</text><text x="334" y="26">3. kart</text><text x="458" y="26">4. kart</text></g><g fill="var(--vurgu)" font-size="24" font-weight="bold" text-anchor="middle"><text x="70" y="86">(−2)<tspan font-size="16" dy="-11">3</tspan></text><text x="202" y="86">2<tspan font-size="16" dy="-11">−3</tspan></text><text x="334" y="86">(−2)<tspan font-size="16" dy="-11">−2</tspan></text><text x="458" y="86">2<tspan font-size="16" dy="-11">0</tspan></text></g></svg>`,
  secenekler: [
    "2^{0}, (−2)^{-2}, 2^{-3}, (−2)^{3}",
    "(−2)^{3}, (−2)^{-2}, 2^{-3}, 2^{0}",
    "2^{-3}, (−2)^{-2}, 2^{0}, (−2)^{3}",
    "(−2)^{3}, 2^{-3}, (−2)^{-2}, 2^{0}"
  ],
  dogru: 3,
  hatalar: [
    "Sıralamayı ters yönde yapma: bu dizilim büyükten küçüğe doğrudur, soru küçükten büyüğe istiyor.",
    "Paydası büyük olan kesri büyük sanma: [[1|8]] < [[1|4]] olduğu hâlde 2^{-3} sayısı (−2)^{-2} sayısından büyük sanılmış.",
    "(−2)^{3} ifadesini pozitif sanma: taban negatif ve üs tek olduğu için sonuç −8'dir ve bütün kartlardan küçüktür.",
    null
  ],
  aciklama: `Negatif üs, sayının çarpmaya göre tersini gösterir: a^{-n} = [[1|a^{n}]]. Taban negatifse önce kuvvetin işareti belirlenir: üs çiftse sonuç pozitif, tekse negatiftir. Ayrıca sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir.
Adım 1: 1. kartı hesapla: (−2)^{3} = (−2) · (−2) · (−2) = −8. Tek üs olduğu için sonuç negatiftir.
Adım 2: 2. kartı hesapla: 2^{-3} = [[1|2^{3}]] = [[1|8]] = 0,125.
Adım 3: 3. kartı hesapla: (−2)^{-2} = [[1|(−2)^{2}]] = [[1|4]] = 0,25. Üs çift olduğu için payda pozitiftir.
Adım 4: 4. kartı hesapla: 2^{0} = 1.
Adım 5: Değerleri sırala: −8 < 0,125 < 0,25 < 1. Öyleyse dizilim (−2)^{3}, 2^{-3}, (−2)^{-2}, 2^{0} olur.
Sağlama: Kesirleri karşılaştırmak için paydaları eşitle: [[1|8]] ile [[2|8]]. İkincisi büyüktür, yani (−2)^{-2} > 2^{-3}'tür.
Sık yapılan hata: Negatif üslü ifadeleri negatif sayı sanmak. Negatif üs sayıyı işaretçe değiştirmez, yalnızca 1'den küçük yapar.
Cevap D.`
},
/* ===================== HAVUZ (kademe 0, ek) ===================== */
{
  id: "mat-ui-013",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 1,
  soru: "Bir yayınevi, yeni çıkan kitabından 5 · 10^{3} adet bastığını duyurmuştur.\n**Buna göre aşağıdakilerden hangisi basılan kitap sayısına eşittir?**",
  gorsel: null,
  secenekler: ["50 · 10^{2}", "500 · 10^{2}", "50 · 10^{4}", "5000 · 10^{3}"],
  dogru: 0,
  hatalar: [
    null,
    "500 · 10^{2} = 50 000: Baştaki sayıyı 100 katına çıkarıp üssü yalnızca 1 azaltma.",
    "50 · 10^{4} = 500 000: Baştaki sayıyı 10 katına çıkarırken üssü azaltacak yerde 1 artırma.",
    "5000 · 10^{3} = 5 000 000: Baştaki sayıyı büyütüp üssü olduğu gibi bırakma."
  ],
  aciklama: `Bir sayı 10'un farklı tam sayı kuvvetleriyle yazılabilir. Baştaki sayı 10 katına çıkarsa üs 1 azalır; böylece sayının değeri korunur.
Adım 1: Kitap sayısını aç: 5 · 10^{3} = 5 · 1000 = 5000.
Adım 2: Şıkları hesapla: 50 · 10^{2} = 50 · 100 = 5000. Eşittir.
Adım 3: Denge kuralını gör: baştaki sayı 5'ten 50'ye çıkarken 10 katına çıktı, bu yüzden üs 3'ten 2'ye indi.
Sağlama: 5 · 10^{3} = 50 · 10^{2} = 500 · 10^{1} = 5000. Üç yazım da aynı sayıyı gösterir.
Sık yapılan hata: Baştaki sayıyı büyütürken üssü de büyütmek. Bu, sayının değerini artırır.
Cevap A.`
},
{
  id: "mat-ui-014",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: "**(−2)^{4} · (−1)^{7} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["16", "8", "−8", "−16"],
  dogru: 3,
  hatalar: [
    "16: (−1)^{7} ifadesini 1 sanma. 7 tek sayı olduğu için (−1)^{7} = −1'dir.",
    "8: Tabanı üsle çarpma: (−2) · 4 = −8 alınıp (−1) ile çarpılmış.",
    "−8: Tabanı üsle çarpıp işareti düşürme: (−2)^{4} yerine 2 · 4 = 8 alınıp (−1) ile çarpılmış.",
    null
  ],
  aciklama: `Taban negatifse sonucun işaretini üssün tek mi çift mi olduğu belirler: çift kuvvette sonuç pozitif, tek kuvvette negatiftir.
Adım 1: Birinci çarpanı hesapla: (−2)^{4} = (−2) · (−2) · (−2) · (−2) = 16. Üs çift olduğu için sonuç pozitiftir.
Adım 2: İkinci çarpanı hesapla: (−1)^{7} = −1. Üs tek olduğu için sonuç negatiftir.
Adım 3: Çarp: 16 · (−1) = −16.
Sağlama: −1 ile çarpmak sayının yalnızca işaretini değiştirir; büyüklüğü 16 olarak kalmalıdır.
Sık yapılan hata: (−1)^{7} ifadesini 1 sanmak. Eksi işareti 7 kez çarpılır ve tek sayıda eksi negatif verir.
Cevap D.`
},
{
  id: "mat-ui-015",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir teknik resim dersinde çizilen bir parçanın kalınlığı 0,507 metre ölçülmüştür.\n**Buna göre bu sayının 10'un tam sayı kuvvetleriyle çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "5 · 10^{-1} + 7 · 10^{-3}",
    "5 · 10^{-1} + 7 · 10^{-2}",
    "5 · 10^{0} + 7 · 10^{-2}",
    "5 · 10^{-2} + 7 · 10^{-3}"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Boş basamağı atlayıp 7'yi yüzde birler basamağına kaydırma: bu çözümleme 0,57 sayısına aittir.",
    "5 rakamını birler basamağında sanma: bu çözümleme 5,07 sayısına aittir.",
    "Bütün rakamları bir basamak sağa kaydırma: bu çözümleme 0,057 sayısına aittir."
  ],
  aciklama: `Bir ondalık gösterimi çözümlerken her rakam, bulunduğu basamağın değeriyle çarpılır. Virgülden sonraki basamaklar sırasıyla 10^{-1}, 10^{-2}, 10^{-3} değerini taşır.
Adım 1: Basamakları adlandır: 0 birler, 5 onda birler, 0 yüzde birler, 7 binde birler basamağındadır.
Adım 2: Her rakamı basamak değeriyle çarp: 5 · 10^{-1} + 0 · 10^{-2} + 7 · 10^{-3}.
Adım 3: Değeri 0 olan terimi yazma: 5 · 10^{-1} + 7 · 10^{-3}.
Sağlama: 0,5 + 0,007 = 0,507.
Sık yapılan hata: Yüzde birler basamağındaki 0'ı atlayıp 7'yi bir basamak sola kaydırmak; o zaman 0,57 elde edilir.
Cevap A.`
},
{
  id: "mat-ui-016",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 2,
  soru: "Bir çalışmada bir kum tanesinin kütlesi 8 · 10^{-3} gram olarak alınmıştır.\n**Buna göre bir kum tanesinin kütlesinin ondalık gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["8000", "0,8", "0,08", "0,008"],
  dogru: 3,
  hatalar: [
    "8000: Negatif üssü görmezden gelme. 8 · 10^{3} = 8000'dir; negatif üs sayıyı büyütmez, küçültür.",
    "0,8: Üssü 1 sanma. 8 · 10^{-1} = 0,8'dir.",
    "0,08: Üssü 2 sanma. 8 · 10^{-2} = 0,08'dir; virgül bir basamak eksik kaydırılmış.",
    null
  ],
  aciklama: `Negatif üslü bir bilimsel gösterimi açmak için baştaki sayının virgülü, üssün mutlak değeri kadar basamak sola kaydırılır.
Adım 1: Üssü oku: −3. Öyleyse virgül 3 basamak sola kayacaktır.
Adım 2: Kaydırmayı yap: 8,0 → 0,8 → 0,08 → 0,008.
Adım 3: Sonucu yaz: 8 · 10^{-3} = 0,008 gram.
Sağlama: 0,008 · 1000 = 8 olduğuna göre 0,008 gerçekten 8'in binde biridir.
Sık yapılan hata: Kaydırma sayısını yanlış saymak. Üssün mutlak değeri kaçsa virgül o kadar basamak kayar.
Cevap D.`
},
{
  id: "mat-ui-017",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir bilgisayar oyununda karakterin bölüm sonundaki gücü, üç aşamadaki değerler kullanılarak 2^{5} · 2^{-3} ÷ 2^{-2} işlemiyle hesaplanmaktadır.\n**Buna göre karakterin bölüm sonundaki gücü aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2^{0}", "2^{4}", "2^{6}", "2^{10}"],
  dogru: 1,
  hatalar: [
    "2^{0}: Bölmede üsleri toplama: 5 + (−3) + (−2) = 0 alınmış. Bölmede üsler çıkarılır.",
    null,
    "2^{6}: Çarpmadaki negatif üssü pozitif alma: 5 + 3 − 2 = 6 bulunmuş.",
    "2^{10}: Bütün üsleri pozitif alıp toplama: 5 + 3 + 2 = 10 bulunmuş."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken üsler toplanır (a^{n} · a^{m} = a^{n+m}), bölünürken üsler çıkarılır (a^{n} ÷ a^{m} = a^{n-m}). Negatif üsler bu işlemlere olduğu gibi katılır.
Adım 1: Çarpmayı yap: 2^{5} · 2^{-3} = 2^{5+(−3)} = 2^{2}.
Adım 2: Bölmeyi yap: 2^{2} ÷ 2^{-2} = 2^{2−(−2)} = 2^{2+2} = 2^{4}.
Adım 3: Sonucu yaz: 2^{4} = 16.
Sağlama: Değerlerle dene: 2^{5} = 32, 2^{-3} = [[1|8]] ve 2^{-2} = [[1|4]]. 32 · [[1|8]] = 4 ve 4 ÷ [[1|4]] = 16 = 2^{4}.
Sık yapılan hata: Negatif bir üs çıkarılırken işaret değişimini atlamak. Negatif bir sayıyı çıkarmak onu toplamak demektir.
Cevap B.`
},
{
  id: "mat-ui-018",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 3,
  soru: "Bir nakliye firmasının kamyonu en fazla 2,4 · 10^{4} kilogram yük taşıyabilmektedir. Taşınacak kolilerin hepsi aynı olup her biri 8 · 10^{1} kilogramdır. Kamyona yalnızca bu kolilerden yüklenecek ve taşıma sınırı aşılmayacaktır.\n**Buna göre kamyona en fazla kaç koli yüklenebilir?**",
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Kamyonun taşıma sınırı</td><td>2,4 · 10<sup>4</sup> kg</td></tr><tr><td>Bir kolinin kütlesi</td><td>8 · 10<sup>1</sup> kg</td></tr></table>`,
  secenekler: ["0,3", "30", "300", "30 000"],
  dogru: 2,
  hatalar: [
    "0,3: 10'un kuvvetlerini bölmeyi atlama. Yalnızca 2,4 ÷ 8 = 0,3 işlemi yapılmış.",
    "30: Bölümü bilimsel gösterime çevirirken üssü yanlış ayarlama: 0,3 · 10^{3} sayısı 3 · 10^{1} sanılmış, oysa 3 · 10^{2}'dir.",
    null,
    "30 000: Bölmede üsleri toplama: 4 + 1 = 5 alınıp 0,3 · 10^{5} bulunmuş."
  ],
  aciklama: `Bilimsel gösterimdeki sayılar bölünürken baştaki sayılar kendi aralarında bölünür, 10'un kuvvetlerinde üsler çıkarılır: (a · 10^{n}) ÷ (b · 10^{m}) = (a ÷ b) · 10^{n-m}.
Adım 1: İşlemi kur: koli sayısı = taşıma sınırı ÷ bir kolinin kütlesi = (2,4 · 10^{4}) ÷ (8 · 10^{1}).
Adım 2: Baştaki sayıları böl: 2,4 ÷ 8 = 0,3.
Adım 3: 10'un kuvvetlerini böl: 10^{4} ÷ 10^{1} = 10^{4−1} = 10^{3}.
Adım 4: Sonucu birleştir ve düzenle: 0,3 · 10^{3} = 0,3 · 1000 = 300 koli.
Sağlama: 300 koli · 80 kg = 24 000 kg ve bu, kamyonun taşıma sınırı olan 2,4 · 10^{4} kg'a tam olarak eşittir.
Sık yapılan hata: 0,3 · 10^{3} ifadesini 30 sanmak. Baştaki sayı 0,3'ten 3'e çıkarken üs 3'ten 2'ye iner ve sonuç 3 · 10^{2} = 300 olur.
Cevap C.`
},
{
  id: "mat-ui-019",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 4,
  soru: "Bir matematik yarışmasında öğrencilerden, 3^{a} · 9^{b} çarpımının 3^{10} sayısına eşit olmasını sağlayan a ve b pozitif tam sayılarını bulmaları istenmiştir. Yarışmada her farklı ikili ayrı bir çözüm sayılmaktadır.\n**Buna göre bu koşulu sağlayan kaç farklı (a, b) ikilisi vardır?**",
  gorsel: null,
  secenekler: ["4", "5", "6", "9"],
  dogru: 0,
  hatalar: [
    null,
    "5: a = 0 durumunu da sayma. b = 5 alınırsa a = 0 olur; oysa a pozitif bir tam sayı olmalıdır.",
    "6: Hem a = 0 hem b = 0 durumlarını sayma. b = 0 alınırsa 9^{0} = 1 olur ve ikinci çarpan yok sayılmış olur.",
    "9: 9^{b} ifadesini 3^{b} sanma. Bu durumda a + b = 10 bulunur ve 9 ikili sayılır; oysa 9 = 3^{2} olduğu için üs iki katına çıkar."
  ],
  aciklama: `Tabanları farklı üslü sayılarla çalışırken önce ortak taban seçilir. 9 = 3^{2} olduğundan (a^{n})^{m} = a^{n·m} kuralıyla ifade tek tabanda yazılabilir.
Adım 1: İkinci çarpanı 3 tabanında yaz: 9^{b} = (3^{2})^{b} = 3^{2b}.
Adım 2: Çarpımı yaz: 3^{a} · 3^{2b} = 3^{a+2b}.
Adım 3: Tabanlar eşit olduğuna göre üsler de eşittir: a + 2b = 10.
Adım 4: b değerlerini sırayla dene. b = 1 ise a = 8; b = 2 ise a = 6; b = 3 ise a = 4; b = 4 ise a = 2. b = 5 alınırsa a = 0 olur ve a'nın pozitif olma koşulu bozulur.
Adım 5: Uygun ikilileri say: (8, 1), (6, 2), (4, 3), (2, 4). Toplam 4 farklı ikili vardır.
Sağlama: (6, 2) ikilisini dene: 3^{6} · 9^{2} = 729 · 81 = 59 049 ve 3^{10} = 59 049. Eşitlik sağlanıyor.
Sık yapılan hata: 9^{b} ifadesini 3^{b} sanmak. Taban 9'dan 3'e inerken üs iki katına çıkar.
Cevap A.`
},
{
  id: "mat-ui-020",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 4,
  soru: "Bir laboratuvar cihazı ölçtüğü değeri, basamaklar görünsün diye çözümlenmiş biçimde kaydetmektedir. Cihazın kaydettiği değer 4 · 10^{1} + 7 · 10^{-1} + 2 · 10^{-2} birimdir. Cihaz, ekrana yazarken bu değeri her zaman 10 katına çıkarmakta ve sonucu yine çözümlenmiş biçimde göstermektedir.\n**Buna göre ekranda görünen çözümleme aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "4 · 10^{1} + 7 · 10^{0} + 2 · 10^{-1}",
    "4 · 10^{2} + 7 · 10^{-1} + 2 · 10^{-2}",
    "4 · 10^{2} + 7 · 10^{1} + 2 · 10^{0}",
    "4 · 10^{2} + 7 · 10^{0} + 2 · 10^{-1}"
  ],
  dogru: 3,
  hatalar: [
    "Yalnızca virgülden sonraki terimleri kaydırma: bu çözümleme 47,2 sayısına aittir. 10 ile çarpınca bütün basamaklar bir sola kayar.",
    "Yalnızca en soldaki terimi 10 ile çarpma: bu çözümleme 400,72 sayısına aittir.",
    "Boş basamağı atlayıp rakamları yan yana kaydırma: bu çözümleme 472 sayısına aittir; oysa 40,72 sayısında onlar basamağının sağında 0 vardır.",
    null
  ],
  aciklama: `Bir sayı 10 ile çarpıldığında bütün rakamlar bir basamak sola kayar; başka bir deyişle çözümlemedeki her terimin 10 kuvveti 1 artar.
Adım 1: Kaydedilen değeri ondalık gösterime çevir: 40 + 0,7 + 0,02 = 40,72.
Adım 2: 10 ile çarp: 40,72 · 10 = 407,2.
Adım 3: Yeni sayının basamaklarını adlandır: 4 yüzler, 0 onlar, 7 birler, 2 onda birler basamağındadır.
Adım 4: Çözümlemeyi yaz: 4 · 10^{2} + 7 · 10^{0} + 2 · 10^{-1}. Onlar basamağındaki 0 için terim yazılmaz.
Sağlama: Terimleri topla: 400 + 7 + 0,2 = 407,2. Ayrıca her terimin üssünün 1 arttığına dikkat et: 10^{1} → 10^{2}, 10^{-1} → 10^{0}, 10^{-2} → 10^{-1}.
Sık yapılan hata: 10 ile çarparken yalnızca bir terimi kaydırmak. Çarpma bütün basamakları birlikte etkiler.
Cevap D.`
}
);
