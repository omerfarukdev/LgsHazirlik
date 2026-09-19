// Matematik — Kareköklü İfadeler: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["karekoklu-ifadeler"] = window.LGS_BANK["karekoklu-ifadeler"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "mat-kk-101",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir matematik dersinde öğretmen, öğrencilerinden tam kare doğal sayıları ayırt etmelerini istemiştir.\n**Buna göre aşağıdaki sayılardan hangisi bir tam kare doğal sayıdır?**",
  gorsel: null,
  secenekler: ["64", "72", "80", "96"],
  dogru: 0,
  hatalar: [
    null,
    "72 = 8 · 9 olduğu için tam kare sandın. Tam kare olmak için sayının **aynı** iki doğal sayının çarpımı olması gerekir; 8 ile 9 farklı sayılardır.",
    "80 = 16 · 5 yazıp 16'nın tam kare olmasına baktın. Çarpanlardan birinin tam kare olması yetmez; 5 tam kare olmadığı için 80 da tam kare değildir.",
    "96'yı 100'e yakın olduğu için tam kare sandın. Yakınlık yetmez: 9^{2} = 81 ve 10^{2} = 100 olduğundan 96, iki tam karenin arasında kalır."
  ],
  aciklama: `Bir doğal sayı, bir doğal sayının karesi olarak yazılabiliyorsa o sayıya tam kare doğal sayı denir. İlk tam kareler: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100…
Adım 1: Karelerin listesini yaz: 8^{2} = 64 ve 9^{2} = 81'dir.
Adım 2: Şıkları bu listeyle karşılaştır. 64 listede vardır; 72, 80 ve 96 ise 64 ile 81 arasında kalır, listede yoktur.
Adım 3: En çok kandıran şık 72'dir. 72 = 8 · 9 biçiminde yazılabilir ama 8 ile 9 farklı sayılardır; tam kare olmak için çarpanların **eşit** olması gerekir. Öyleyse tam kare olan sayı 64'tür ve √{64} = 8'dir.
Sağlama: 8 · 8 = 64.
Sık yapılan hata: Bir sayıyı iki çarpanın çarpımı olarak yazabilmek onu tam kare yapmaz; çarpanların eşit olması gerekir.
Cevap A.`
},
{
  id: "mat-kk-102",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıda kare biçiminde bir halı deseni ve bu desenin alanı verilmiştir.\n**Buna göre bu desenin bir kenar uzunluğu kaç birimdir?**",
  gorsel: `<svg viewBox="0 0 420 240" role="img" aria-label="Kare biçiminde halı deseni; alanı 196 birimkare, bir kenar uzunluğu soruluyor."><rect x="70" y="25" width="180" height="180" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="160" y="108" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Alan</text><text x="160" y="132" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">196 birimkare</text><line x1="70" y1="220" x2="250" y2="220" stroke="var(--vurgu2)" stroke-width="2"/><text x="160" y="236" font-size="16" text-anchor="middle" fill="var(--vurgu2)">? birim</text><text x="272" y="110" font-size="15" fill="currentColor">Desen kare</text><text x="272" y="132" font-size="15" fill="currentColor">biçimindedir.</text></svg>`,
  secenekler: ["13", "14", "49", "98"],
  dogru: 1,
  hatalar: [
    "Tahminini kare alarak doğrulamadın: 13 · 13 = 169 eder, 196 etmez.",
    null,
    "Alanı 4'e böldün. Kare dört eşit küçük kareye ayrılsaydı her birinin alanı 49 olurdu; bu bir alan değeridir, kenar uzunluğu değil.",
    "Karekök almak yerine alanı 2'ye böldün. 98 · 98 = 9604 eder; kenar 98 olsaydı alan çok daha büyük olurdu."
  ],
  aciklama: `Bir karenin alanı, kenar uzunluğunun kendisiyle çarpımıdır. Öyleyse kenar uzunluğu, alanın kareköküdür.
Adım 1: Kenara a diyelim. a · a = 196 olmalıdır; yani a = √{196}'dır.
Adım 2: Hangi doğal sayının karesi 196'dır? 10^{2} = 100, 15^{2} = 225 olduğuna göre aradığın sayı 10 ile 15 arasındadır. 14^{2} = 196'dır.
Adım 3: Kenar uzunluğu 14 birimdir.
Sağlama: 14 · 14 = 196.
Sık yapılan hata: Karekök almakla sayıyı ikiye bölmeyi karıştırmak. √{196} = 98 değildir.
Cevap B.`
},
{
  id: "mat-kk-103",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 1,
  soru: "**√{90} sayısı aşağıdaki hangi iki ardışık doğal sayı arasındadır?**",
  gorsel: null,
  secenekler: ["6 ile 7", "7 ile 8", "8 ile 9", "9 ile 10"],
  dogru: 3,
  hatalar: [
    "90'ı 36 ile 49 arasında sandın. 6^{2} = 36 ve 7^{2} = 49'dur; 90 bu iki sayının arasında değildir, ikisinden de büyüktür.",
    "7^{2} = 49 ve 8^{2} = 64'tür. 90 > 64 olduğundan √{90} 8'den de büyüktür.",
    "Üst sınırı yanlış seçtin: 9^{2} = 81 ve 81 < 90 olduğundan √{90} 9'dan büyüktür.",
    null
  ],
  aciklama: `Tam kare olmayan bir sayının karekökünü bulmak için sayıyı, kendisine en yakın iki tam kare arasına yerleştiririz.
Adım 1: 90'a en yakın tam kareleri ara: 9^{2} = 81 ve 10^{2} = 100'dür.
Adım 2: 81 < 90 < 100 olduğuna göre √{81} < √{90} < √{100} olur.
Adım 3: Yani 9 < √{90} < 10'dur. √{90} sayısı 9 ile 10 arasındadır.
Sağlama: 9,5^{2} = 90,25 olduğundan √{90} sayısı 9,5'ten biraz küçüktür; 9 ile 10 arasında olması bununla uyumludur.
Sık yapılan hata: Karekökü bulmak için sayıyı 2'ye bölmek. 90 : 2 = 45 seni yanlış aralığa götürür; her zaman tam kareleri kullan.
Cevap D.`
},
{
  id: "mat-kk-104",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 1,
  soru: "Bir sınıf panosuna asılan kartın üzerinde 3√{5} ifadesi yazılıdır.\n**Buna göre bu ifadenin katsayısı kök içine alınmış biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["√{15}", "√{45}", "√{75}", "√{225}"],
  dogru: 1,
  hatalar: [
    "Katsayıyı kök içindeki sayıyla doğrudan çarptın: 3 · 5 = 15. Katsayı kök içine girerken karesi alınır.",
    null,
    "Kareyi yanlış sayıya uyguladın: katsayının değil, kök içindeki sayının karesini alıp 3 · 5^{2} = 75 buldun.",
    "Hem katsayının hem kök içindeki sayının karesini aldın: 3^{2} · 5^{2} = 9 · 25 = 225."
  ],
  aciklama: `Bir kareköklü ifadede katsayıyı kök içine alırken katsayının **karesi** alınır ve kök içindeki sayıyla çarpılır: a√{b} = √{a^{2} · b}.
Adım 1: Katsayı 3, kök içindeki sayı 5'tir.
Adım 2: Katsayının karesini al: 3^{2} = 9.
Adım 3: Kök içindeki sayıyla çarp: 9 · 5 = 45. Yani 3√{5} = √{45}'tir.
Sağlama: Geriye dön: √{45} = √{9 · 5} = √{9} · √{5} = 3√{5}. Başladığın ifadeye ulaştın.
Sık yapılan hata: Katsayıyı kök içine karesini almadan sokmak. Bu, sayının değerini değiştirir: √{15} ≈ 3,9 iken 3√{5} ≈ 6,7'dir.
Cevap B.`
},
{
  id: "mat-kk-105",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 1,
  soru: "**3√{7} + 5√{7} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["8√{7}", "8√{14}", "15√{7}", "15√{14}"],
  dogru: 0,
  hatalar: [
    null,
    "Katsayıları doğru topladın ama kök içindeki sayıları da topladın: 7 + 7 = 14. Kök içi toplanmaz, aynen kalır.",
    "Katsayıları toplamak yerine çarptın: 3 · 5 = 15. Toplama işleminde katsayılar toplanır.",
    "Hem katsayıları çarptın hem de kök içindeki sayıları topladın; iki hatayı birden yaptın."
  ],
  aciklama: `Kök içleri aynı olan kareköklü ifadeler, aynı cinsten terimlerdir; bunlar toplanırken yalnızca katsayılar toplanır, kök içi değişmez: a√{c} + b√{c} = (a + b)√{c}.
Adım 1: İki terimin de kök içi 7'dir; yani aynı cinstendirler ve toplanabilirler.
Adım 2: Katsayıları topla: 3 + 5 = 8.
Adım 3: Kök içini aynen yaz: 8√{7}.
Sağlama: Bunu 3 elma + 5 elma = 8 elma gibi düşünebilirsin. "Elma"nın kendisi (yani √{7}) değişmez.
Sık yapılan hata: Kök içindeki sayıları da toplamak. √{7} + √{7} = √{14} **değildir**; 2√{7}'dir.
Cevap A.`
},
{
  id: "mat-kk-106",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 1,
  soru: "Bir öğrenci defterine √{1,44} işlemini yazmıştır.\n**Buna göre bu işlemin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["0,12", "0,72", "1,2", "12"],
  dogru: 2,
  hatalar: [
    "√{144} = 12 bulup virgülü iki basamak kaydırdın. Kesir biçiminde bakarsan paydanın karekökü 100 değil 10'dur; bu yüzden virgül bir basamak kaydırılır.",
    "Karekök almak yerine sayıyı 2'ye böldün: 1,44 : 2 = 0,72. Oysa 0,72 · 0,72 = 0,5184'tür.",
    null,
    "Virgülü hiç dikkate almadın ve yalnızca √{144} = 12 işlemini yaptın. 12 · 12 = 144 eder, 1,44 etmez."
  ],
  aciklama: `Bir ondalık gösterimin karekökünü bulmak için onu kesre çevirir, payın ve paydanın karekökünü ayrı ayrı alırsın.
Adım 1: Ondalık gösterimi kesre çevir: 1,44 = [[144|100]].
Adım 2: Pay ve paydanın kareköklerini al: √{144} = 12 ve √{100} = 10.
Adım 3: Sonucu yaz: [[12|10]] = 1,2.
Sağlama: 1,2 · 1,2 = 1,44. Doğru.
Sık yapılan hata: Virgülden sonraki basamak sayısını korumak. Karekök alındığında virgülden sonraki basamak sayısı **yarıya** iner: 1,44'te iki basamak vardı, 1,2'de bir basamak var.
Cevap C.`
},
{
  id: "mat-kk-107",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulun bahçesindeki çiçek tarhı kare biçiminde olup alanı 121 m²'dir. Okul yönetimi, tarhın çevresini boydan boya alçak bir tel çitle çevirmek istemektedir.\n**Buna göre bu iş için kaç metre tel çit gerekir?**",
  gorsel: `<svg viewBox="0 0 400 248" role="img" aria-label="Kare biçiminde çiçek tarhı; alanı 121 metrekare. Kesikli çerçeve, tarhın dört kenarı boyunca çekilecek tel çiti gösteriyor; gereken tel çit uzunluğu soruluyor."><text x="185" y="21" font-size="15" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">tel çit (dört kenar boyunca)</text><rect x="95" y="32" width="180" height="180" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4" stroke-dasharray="9 5"/><text x="185" y="112" font-size="16" text-anchor="middle" fill="currentColor">Çiçek tarhı</text><text x="185" y="139" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 121 m²</text><text x="185" y="165" font-size="15" text-anchor="middle" fill="currentColor">(kare biçiminde)</text><text x="185" y="240" font-size="16" text-anchor="middle" fill="var(--vurgu2)" font-weight="bold">Gereken tel çit: ? m</text></svg>`,
  secenekler: ["11", "22", "44", "121"],
  dogru: 2,
  hatalar: [
    "Kenar uzunluğunu buldun ve orada durdun. 11 m bir kenardır; soru dört kenarın toplamını, yani çevreyi soruyor.",
    "Çevreyi iki kenarın toplamı sandın: 11 + 11 = 22. Karenin dört kenarı vardır.",
    null,
    "Karekök almayı atlayıp alanı doğrudan çevre yerine yazdın. 121 bir alan değeridir ve birimi m²'dir; çevrenin birimi m olmalıdır."
  ],
  aciklama: `Karenin alanı kenarın kendisiyle çarpımı, çevresi ise kenarın 4 katıdır.
Adım 1: Kenar uzunluğunu bul. Kenar a ise a · a = 121 olmalıdır; 11 · 11 = 121 olduğundan a = √{121} = 11 m'dir.
Adım 2: Şekildeki kesikli çerçeve tarhın dört kenarını birden sarar; yani gereken tel çit, tarhın çevresi kadardır.
Adım 3: Çevreyi hesapla: 4 · 11 = 44 m.
En güçlü çeldirici 11'dir: doğru bulunmuş bir kenar uzunluğudur ama yalnızca tek bir kenarı çevirmeye yeter, tarhın tamamını değil.
Sağlama: Kenarı 11 m olan karenin alanı 11 · 11 = 121 m², çevresi 11 + 11 + 11 + 11 = 44 m'dir. İkisi de tutuyor.
Sık yapılan hata: Kenarı bulunca durmak. Soru kökünün ne istediğini (kenar mı, çevre mi, alan mı) her zaman son kez oku.
Cevap C.`
},
{
  id: "mat-kk-108",
  kazanim: "M.8.1.3.6",
  kademe: 1,
  zorluk: 2,
  soru: "Bir öğrenci, √{12} sayısını aşağıdaki dört sayıdan biriyle çarparak sonucun bir doğal sayı olmasını istemektedir.\n**Buna göre öğrenci hangi sayıyı seçmelidir?**",
  gorsel: null,
  secenekler: ["√{2}", "√{5}", "√{6}", "√{27}"],
  dogru: 3,
  hatalar: [
    "12 çift sayı olduğu için onu 2 ile eşleştirdin: √{12} · √{2} = √{24}'tür ve 24 tam kare değildir.",
    "Kök içindeki sayıların çarpımının tam kare olması gerektiğini gözden kaçırdın: 12 · 5 = 60 ve 60 tam kare değildir.",
    "12 · 6 = 72 buldun ve 72'yi tam kare sandın. 72 = 36 · 2'dir; √{72} = 6√{2} olur, doğal sayı değildir.",
    null
  ],
  aciklama: `İki kareköklü ifadenin çarpımı, kök içlerinin çarpımının kareköküdür: √{a} · √{b} = √{a · b}. Sonucun doğal sayı olması için kök içindeki çarpımın tam kare olması gerekir.
Adım 1: 12'yi asal çarpanlarına ayır: 12 = 2^{2} · 3. Burada 2'nin üssü çifttir ama 3'ün üssü tektir; eksik olan çarpan 3'tür.
Adım 2: Şıkları tek tek dene. √{12} · √{2} = √{24}, √{12} · √{5} = √{60}, √{12} · √{6} = √{72}. Üçünde de kök içi tam kare değildir.
Adım 3: √{12} · √{27} = √{12 · 27} = √{324} olur. 18^{2} = 324 olduğundan √{324} = 18'dir; bu bir doğal sayıdır.
Sağlama: 12 · 27 = (2^{2} · 3) · (3^{3}) = 2^{2} · 3^{4}'tür. Bütün üsler çift olduğu için çarpım tam karedir.
Sık yapılan hata: Yalnızca en küçük ya da en tanıdık sayıyı denemek. Kök içindeki çarpımı asal çarpanlarına ayırıp üslerin hepsinin çift olup olmadığına bak.
Cevap D.`
},
{
  id: "mat-kk-109",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıdaki sayı doğrusu üzerinde K, L, M ve N noktaları işaretlenmiştir.\n**Buna göre √{40} sayısı bu noktalardan hangisine karşılık gelir?**",
  gorsel: `<svg viewBox="0 0 540 130" role="img" aria-label="Sayı doğrusu: 4, 5, 6, 7 ve 8 işaretli. K noktası 4 ile 5, L noktası 5 ile 6, M noktası 6 ile 7, N noktası 7 ile 8 arasındadır."><line x1="25" y1="70" x2="525" y2="70" stroke="currentColor" stroke-width="2"/><polygon points="525,70 513,64 513,76" fill="currentColor"/><g stroke="currentColor" stroke-width="2"><line x1="40" y1="60" x2="40" y2="80"/><line x1="155" y1="60" x2="155" y2="80"/><line x1="270" y1="60" x2="270" y2="80"/><line x1="385" y1="60" x2="385" y2="80"/><line x1="500" y1="60" x2="500" y2="80"/></g><g font-size="16" text-anchor="middle" fill="currentColor"><text x="40" y="101">4</text><text x="155" y="101">5</text><text x="270" y="101">6</text><text x="385" y="101">7</text><text x="500" y="101">8</text></g><g fill="var(--vurgu)"><circle cx="98" cy="70" r="6"/><circle cx="213" cy="70" r="6"/><circle cx="328" cy="70" r="6"/><circle cx="443" cy="70" r="6"/></g><g font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold"><text x="98" y="52">K</text><text x="213" y="52">L</text><text x="328" y="52">M</text><text x="443" y="52">N</text></g></svg>`,
  secenekler: ["K noktasına", "L noktasına", "M noktasına", "N noktasına"],
  dogru: 2,
  hatalar: [
    "Kareleri hesaplamadan tahmin ettin: 4^{2} = 16 ve 5^{2} = 25'tir. 40 bu iki sayının arasında değildir.",
    "Aralığı yanlış seçtin: 5^{2} = 25 ve 6^{2} = 36'dır. 40 > 36 olduğundan √{40} 6'dan büyüktür.",
    null,
    "Üst sınırı yanlış aldın: 7^{2} = 49 ve 40 < 49 olduğundan √{40} 7'den küçüktür."
  ],
  aciklama: `Bir karekökü sayı doğrusuna yerleştirmek için sayıyı, kendisine en yakın iki tam kare arasına sıkıştırırız.
Adım 1: 40'a en yakın tam kareleri bul: 6^{2} = 36 ve 7^{2} = 49'dur.
Adım 2: 36 < 40 < 49 olduğundan √{36} < √{40} < √{49}, yani 6 < √{40} < 7'dir.
Adım 3: Sayı doğrusunda 6 ile 7 arasındaki nokta M'dir.
Sağlama: 6,3^{2} = 39,69 ve 6,4^{2} = 40,96'dır. Demek ki √{40} yaklaşık 6,3'tür ve gerçekten 6 ile 7 arasındadır.
Sık yapılan hata: Kök içindeki sayıyı doğrudan sayı doğrusunda aramak. Sayı doğrusuna yerleşen √{40}'tır, 40 değil.
Cevap C.`
},
{
  id: "mat-kk-110",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sınıf panosuna asılacak kartın boyutları aşağıdaki şekilde verilmiştir.\n**Buna göre bu kartın alanı kaç cm²'dir?**",
  gorsel: `<svg viewBox="0 0 420 210" role="img" aria-label="Dikdörtgen kart: uzun kenarı kök 15 santimetre, kısa kenarı kök 6 santimetre."><rect x="90" y="35" width="230" height="120" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="205" y="102" font-size="16" text-anchor="middle" fill="currentColor">Kart</text><text x="205" y="180" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√15 cm</text><text x="52" y="100" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√6 cm</text><line x1="90" y1="168" x2="320" y2="168" stroke="var(--vurgu)" stroke-width="2"/><line x1="72" y1="35" x2="72" y2="155" stroke="var(--vurgu)" stroke-width="2"/></svg>`,
  secenekler: ["√{21}", "3√{10}", "9√{10}", "90"],
  dogru: 1,
  hatalar: [
    "Çarpma işlemi yerine kök içindeki sayıları topladın: 6 + 15 = 21. Kökler çarpılırken kök içleri çarpılır.",
    null,
    "Kök dışına çıkarırken karekök almayı unuttun: 90 = 9 · 10'da 9'u olduğu gibi dışarı yazdın. Dışarı çıkan sayı √{9} = 3 olmalıdır.",
    "Kök işaretlerini yok sayıp kök içindeki sayıları çarptın: 6 · 15 = 90. Oysa √{6} · √{15} = √{90}'dır, 90 değil."
  ],
  aciklama: `Dikdörtgenin alanı iki kenarının çarpımıdır. Kareköklü ifadelerde çarpma, kök içlerinin çarpımının karekökü alınarak yapılır: √{a} · √{b} = √{a · b}.
Adım 1: Alanı yaz: √{6} · √{15} = √{6 · 15} = √{90}.
Adım 2: Kök içini tam kare bir çarpan ayıracak biçimde çarpanlarına ayır: 90 = 9 · 10.
Adım 3: Tam kare çarpanı kök dışına çıkar: √{90} = √{9} · √{10} = 3√{10} cm².
Sağlama: 3√{10} ifadesini geri kök içine al: 3^{2} · 10 = 90, yani √{90}. Başladığın yere döndün.
Sık yapılan hata: Kök dışına çıkarken sayının kendisini yazmak (9√{10} gibi). Dışarı çıkan sayı, tam kare çarpanın kareköküdür.
Cevap B.`
},
{
  id: "mat-kk-111",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir çerçeve atölyesinde uzunluğu √{50} cm olan bir ahşap çıtadan, uzunluğu √{18} cm olan bir parça kesilip ayrılmıştır.\n**Buna göre çıtanın geri kalan parçasının uzunluğu kaç cm'dir?**",
  gorsel: null,
  secenekler: ["2√{2}", "√{32}", "√{68}", "8√{2}"],
  dogru: 0,
  hatalar: [
    null,
    "Kök içindeki sayıları çıkardın: 50 − 18 = 32. Kareköklü ifadelerde çıkarma, kök içlerinde değil katsayılarda yapılır.",
    "Hem çıkarma yerine toplama yaptın hem de kök içindeki sayıları topladın: 50 + 18 = 68.",
    "İfadeleri doğru sadeleştirdin ama katsayıları çıkaracağına topladın: 5 + 3 = 8."
  ],
  aciklama: `Kareköklü ifadeler çıkarılırken önce her terim sadeleştirilir; kök içleri aynı olunca katsayılar çıkarılır: a√{c} − b√{c} = (a − b)√{c}.
Adım 1: √{50}'yi sadeleştir: 50 = 25 · 2 olduğundan √{50} = √{25} · √{2} = 5√{2}.
Adım 2: √{18}'i sadeleştir: 18 = 9 · 2 olduğundan √{18} = √{9} · √{2} = 3√{2}.
Adım 3: İki terimin de kök içi 2'dir; katsayıları çıkar: 5 − 3 = 2. Sonuç 2√{2} cm'dir.
Sağlama: √{50} ≈ 7,07 ve √{18} ≈ 4,24'tür. Farkları yaklaşık 2,83'tür; 2√{2} ≈ 2 · 1,41 = 2,83. Uyuyor.
Sık yapılan hata: √{50} − √{18} = √{50 − 18} sanmak. Kökte bu kural yoktur; √{32} ≈ 5,66 olup gerçek farktan çok büyüktür.
Cevap A.`
},
{
  id: "mat-kk-112",
  kazanim: "M.8.1.3.8",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulun matematik panosuna, üzerinde birer sayı yazılı dört kart asılmıştır. Kartlar aşağıdaki tabloda verilmiştir.\n**Buna göre bu kartlardan hangisinin üzerindeki sayı irrasyoneldir?**",
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Üzerindeki sayı</td><td>√0,09</td><td>√2,25</td><td>√16</td><td>√30</td></tr></table>`,
  secenekler: ["K kartındaki sayı", "L kartındaki sayı", "M kartındaki sayı", "N kartındaki sayı"],
  dogru: 3,
  hatalar: [
    "Virgüllü bir sayının karekökünün irrasyonel olacağını düşündün. √{0,09} = 0,3'tür ve 0,3 = [[3|10]] biçiminde yazılabildiği için rasyoneldir.",
    "2,25'in karekökünün tam çıkmayacağını sandın. 2,25 = [[225|100]] ve payı da paydası da tam karedir; √{2,25} = [[15|10]] = 1,5'tir.",
    "Kök işareti gördüğün her sayıyı irrasyonel saydın. 16 tam kare olduğundan √{16} = 4'tür ve 4 bir doğal sayıdır.",
    null
  ],
  aciklama: `Rasyonel sayı, iki tam sayının oranı ([[a|b]] biçiminde) yazılabilen sayıdır. Tam kare olmayan bir doğal sayının karekökü bu biçimde yazılamaz; böyle sayılara irrasyonel sayı denir.
Adım 1: K kartı: √{0,09} = 0,3. Bu sayı [[3|10]]'dur, rasyoneldir.
Adım 2: L kartı: 2,25 = [[225|100]] olduğundan √{2,25} = [[15|10]] = 1,5'tir, rasyoneldir.
Adım 3: M kartı: 16 = 4^{2} olduğundan √{16} = 4'tür; her doğal sayı [[4|1]] gibi yazılabildiği için rasyoneldir.
Adım 4: N kartı: 30 tam kare __değildir__ (5^{2} = 25, 6^{2} = 36). Bu yüzden √{30} iki tam sayının oranı olarak yazılamaz; irrasyoneldir.
Sık yapılan hata: Kök işaretini irrasyonellik işareti sanmak. Belirleyici olan kök işareti değil, kök içindeki sayının tam kare olup olmadığıdır.
Cevap D.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "mat-kk-201",
  kazanim: "M.8.1.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir döşeme ustası, kare biçimindeki fayanslarla çalışmaktadır. Kullandığı bir fayansın alanı aşağıdaki şekilde verilmiştir.\n**Buna göre bu fayansın bir kenar uzunluğu kaç cm'dir?**",
  gorsel: `<svg viewBox="0 0 420 235" role="img" aria-label="Kare biçiminde fayans; alanı 48 santimetrekare, bir kenar uzunluğu soruluyor."><rect x="75" y="25" width="170" height="170" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="160" y="105" font-size="16" text-anchor="middle" fill="currentColor">Fayans</text><text x="160" y="132" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 48 cm²</text><line x1="75" y1="212" x2="245" y2="212" stroke="var(--vurgu)" stroke-width="2"/><text x="160" y="229" font-size="16" text-anchor="middle" fill="var(--vurgu)">? cm</text><text x="268" y="105" font-size="15" fill="currentColor">Fayans kare</text><text x="268" y="127" font-size="15" fill="currentColor">biçimindedir.</text></svg>`,
  secenekler: ["4√{3}", "4√{12}", "24", "16√{3}"],
  dogru: 0,
  hatalar: [
    null,
    "48 = 4 · 12 ayrımını yaptın ama 4'ü karekök almadan dışarı çıkardın. Dışarı çıkan sayı √{4} = 2 olmalıydı; ayrıca 12'nin içinde hâlâ tam kare bir çarpan vardır.",
    "Karekök almak yerine alanı 2'ye böldün. Kenar 24 cm olsaydı alan 24 · 24 = 576 cm² olurdu.",
    "48 = 16 · 3 ayrımı doğru ama 16'yı karekök almadan dışarı çıkardın. Dışarı çıkan sayı √{16} = 4'tür."
  ],
  aciklama: `Karenin kenar uzunluğu, alanının kareköküdür. Kök içindeki sayı tam kare değilse sayıyı "tam kare bir çarpan × kalan" biçiminde ayırıp tam kare çarpanı kök dışına çıkarırız.
Adım 1: Kenar = √{48}'dir.
Adım 2: 48'i, en büyük tam kare çarpanını ayıracak biçimde yaz: 48 = 16 · 3.
Adım 3: Kökü ayır ve tam kare çarpanı dışarı çıkar: √{48} = √{16} · √{3} = 4√{3} cm.
Sağlama: 4√{3} ifadesini kök içine geri al: 4^{2} · 3 = 16 · 3 = 48. Alan yeniden 48 cm² çıktı.
Sık yapılan hata: Kök dışına çıkan sayının, tam kare çarpanın kendisi değil **karekökü** olduğunu unutmak. 4√{12} ve 16√{3} ifadeleri bu yüzden yanlıştır.
Cevap A.`
},
{
  id: "mat-kk-202",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okulun bahçesinde kare biçiminde bir sebze parseli ayrılmıştır. Parselin bir kenarının uzunluğu 3√{5} metredir.\n**Buna göre bu parselin alanı kaç m²'dir?**",
  gorsel: `<svg viewBox="0 0 420 220" role="img" aria-label="Kare biçiminde sebze parseli; bir kenarı 3 kök 5 metre."><rect x="95" y="25" width="170" height="170" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="180" y="100" font-size="16" text-anchor="middle" fill="currentColor">Sebze parseli</text><text x="180" y="126" font-size="16" text-anchor="middle" fill="currentColor">Alan: ? m²</text><text x="180" y="216" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">3√5 m</text><line x1="95" y1="205" x2="265" y2="205" stroke="var(--vurgu)" stroke-width="2"/><text x="308" y="118" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">3√5 m</text><line x1="278" y1="25" x2="278" y2="195" stroke="var(--vurgu)" stroke-width="2"/></svg>`,
  secenekler: ["9", "15", "45", "225"],
  dogru: 2,
  hatalar: [
    "Yalnızca katsayının karesini aldın: 3^{2} = 9. Kök içindeki 5'i çarpmayı unuttun.",
    "Katsayının karesini almadan doğrudan çarptın: 3 · 5 = 15. Kare alırken katsayı da kendisiyle çarpılır.",
    null,
    "Önce katsayıyla kök içini çarpıp sonra kare aldın: (3 · 5)^{2} = 225. Oysa kare alınacak ifade 3 · 5 değil, 3√{5}'tir."
  ],
  aciklama: `Karenin alanı, kenar uzunluğunun kendisiyle çarpımıdır. Kareköklü ifadeler çarpılırken katsayılar kendi aralarında, kök içleri kendi aralarında çarpılır.
Adım 1: Alanı yaz: 3√{5} · 3√{5}.
Adım 2: Katsayıları çarp: 3 · 3 = 9.
Adım 3: Kök içlerini çarp: √{5} · √{5} = √{25} = 5. Bir karekökün kendisiyle çarpımı, kök içindeki sayıyı verir.
Adım 4: Sonuçları çarp: 9 · 5 = 45 m².
Sağlama: Katsayıyı kök içine alarak da yapabilirsin: 3√{5} = √{45} olduğundan alan √{45} · √{45} = 45'tir.
Sık yapılan hata: (a√{b})^{2} işleminde yalnızca katsayının ya da yalnızca kök içinin karesini almak. Doğrusu a^{2} · b'dir.
Cevap C.`
},
{
  id: "mat-kk-203",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir sınıfta öğretmen tahtaya aşağıdaki işlemi yazmış ve öğrencilerden sonucu en sade biçimde yazmalarını istemiştir.\n**√{75} + √{27} − √{12} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["√{90}", "6√{3}", "8√{3}", "10√{3}"],
  dogru: 1,
  hatalar: [
    "Terimleri sadeleştirmeden kök içindeki sayılarla işlem yaptın: 75 + 27 − 12 = 90. Kök içleri toplanıp çıkarılmaz.",
    null,
    "Son terimi işleme katmadın: yalnızca 5 + 3 = 8 yaptın. √{12} = 2√{3} terimini çıkarmayı unuttun.",
    "Çıkarma işlemini de toplama gibi işleme aldın: 5 + 3 + 2 = 10. İşaretlere dikkat etmelisin."
  ],
  aciklama: `Kareköklü ifadelerde toplama ve çıkarma ancak kök içleri aynı olduğunda yapılabilir. Bu yüzden önce her terim sadeleştirilir.
Adım 1: √{75}'i sadeleştir: 75 = 25 · 3 olduğundan √{75} = 5√{3}.
Adım 2: √{27}'yi sadeleştir: 27 = 9 · 3 olduğundan √{27} = 3√{3}.
Adım 3: √{12}'yi sadeleştir: 12 = 4 · 3 olduğundan √{12} = 2√{3}.
Adım 4: Üç terimin de kök içi 3'tür. Katsayılarla işlem yap: 5 + 3 − 2 = 6. Sonuç 6√{3}'tür.
Sağlama: √{3} ≈ 1,73 alırsak √{75} ≈ 8,66, √{27} ≈ 5,20, √{12} ≈ 3,46'dır. 8,66 + 5,20 − 3,46 ≈ 10,40 ve 6√{3} ≈ 10,39. Uyuyor.
Sık yapılan hata: Sadeleştirmeden önce işleme başlamak. Kök içleri farklı görünen terimler sadeleştirilince aynı cinse dönüşebilir.
Cevap B.`
},
{
  id: "mat-kk-204",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir spor salonundaki jimnastik minderi dikdörtgen biçimindedir. Minderin alanı ve kısa kenarının uzunluğu aşağıdaki şekilde verilmiştir.\n**Buna göre minderin uzun kenarı kaç metredir?**",
  gorsel: `<svg viewBox="0 0 460 200" role="img" aria-label="Dikdörtgen jimnastik minderi: alanı kök 180 metrekare, kısa kenarı kök 5 metre, uzun kenarı soruluyor."><rect x="80" y="40" width="300" height="100" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="230" y="85" font-size="16" text-anchor="middle" fill="currentColor">Jimnastik minderi</text><text x="230" y="112" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: √180 m²</text><text x="45" y="96" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√5 m</text><line x1="66" y1="40" x2="66" y2="140" stroke="var(--vurgu)" stroke-width="2"/><line x1="80" y1="158" x2="380" y2="158" stroke="var(--vurgu)" stroke-width="2"/><text x="230" y="178" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text></svg>`,
  secenekler: ["6", "30", "36", "175"],
  dogru: 0,
  hatalar: [
    null,
    "Bölme yerine çarpma yaptın: √{180} · √{5} = √{900} = 30. Bir kenarı bulmak için alan diğer kenara bölünür.",
    "Kök içlerini doğru böldün (180 : 5 = 36) ama sonucun karekökünü almayı unuttun. √{36} = 6'dır.",
    "Bölme yerine kök içindeki sayıları çıkardın: 180 − 5 = 175. Kökler bölünürken kök içleri bölünür."
  ],
  aciklama: `Dikdörtgende bir kenar, alanın diğer kenara bölünmesiyle bulunur. Kareköklü ifadelerde bölme, kök içlerinin bölümünün karekökü alınarak yapılır: [[√{a}|√{b}]] = √{[[a|b]]}.
Adım 1: Uzun kenarı yaz: [[√{180}|√{5}]].
Adım 2: Kök içlerini böl: 180 : 5 = 36. Yani ifade √{36} olur.
Adım 3: Karekökü al: √{36} = 6. Uzun kenar 6 metredir.
Sağlama: Kenarları çarp: √{5} · 6 = 6√{5} = √{36 · 5} = √{180}. Alan yeniden √{180} m² çıktı.
Sık yapılan hata: Kök içlerini bölüp sonucun karekökünü almayı unutmak. √{36} ile 36 aynı sayı değildir.
Cevap A.`
},
{
  id: "mat-kk-205",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okul bahçesinin duvarına, kare biçiminde iki mozaik levha yan yana ve kenarları aynı doğru üzerinde olacak biçimde yerleştirilecektir. Levhaların alanları aşağıdaki şekilde verilmiştir.\n**Buna göre iki levhanın kapladığı bölümün genişliği kaç metredir?**",
  gorsel: `<svg viewBox="0 0 460 215" role="img" aria-label="Yan yana duran iki kare mozaik levha: birincinin alanı 0,81 metrekare, ikincinin alanı 0,04 metrekare. Toplam genişlik soruluyor."><rect x="70" y="30" width="150" height="150" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="220" y="147" width="33" height="33" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="145" y="98" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">I. levha</text><text x="145" y="122" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">0,81 m²</text><text x="330" y="150" font-size="16" fill="currentColor" font-weight="bold">II. levha</text><text x="330" y="172" font-size="16" fill="currentColor" font-weight="bold">0,04 m²</text><line x1="262" y1="164" x2="322" y2="164" stroke="currentColor" stroke-width="1.5"/><line x1="70" y1="196" x2="253" y2="196" stroke="var(--vurgu)" stroke-width="2"/><text x="161" y="211" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text><text x="330" y="60" font-size="15" fill="currentColor">İki levha da kare</text><text x="330" y="82" font-size="15" fill="currentColor">biçimindedir.</text></svg>`,
  secenekler: ["0,11", "0,85", "0,92", "1,1"],
  dogru: 3,
  hatalar: [
    "İki kökte de virgülü bir basamak fazla kaydırdın: 0,09 + 0,02 = 0,11. √{0,81} = 0,09 değil 0,9'dur.",
    "Karekök almayı atlayıp alanları topladın: 0,81 + 0,04 = 0,85. Toplanması gereken kenar uzunluklarıdır.",
    "İkinci levhada virgülü yanlış yere koydun: √{0,04} = 0,02 sandın. Oysa 0,02 · 0,02 = 0,0004'tür; doğrusu 0,2'dir.",
    null
  ],
  aciklama: `Her levhanın kenar uzunluğu, alanının kareköküdür. Ondalık gösterimin karekökünü bulmak için sayıyı kesre çevirip payın ve paydanın karekökünü ayrı ayrı alırız.
Adım 1: I. levhanın kenarı: 0,81 = [[81|100]] olduğundan √{0,81} = [[9|10]] = 0,9 m.
Adım 2: II. levhanın kenarı: 0,04 = [[4|100]] olduğundan √{0,04} = [[2|10]] = 0,2 m.
Adım 3: Levhalar yan yana durduğundan genişlik, kenarların toplamıdır: 0,9 + 0,2 = 1,1 m.
Sağlama: 0,9 · 0,9 = 0,81 ve 0,2 · 0,2 = 0,04. İki kenar da doğrulandı.
Sık yapılan hata: Alanları toplayıp karekökünü almak. √{0,85} ≈ 0,92'dir ve bu, iki kenarın toplamı __değildir__.
Cevap D.`
},
{
  id: "mat-kk-206",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir çiftçi, tarlasının kare biçimindeki bir bölümünü domates için ayırmıştır. Bu bölümün alanı 50 m²'dir. Çiftçi, bölümün bir kenarının kaç metre olduğunu kabaca kestirmek istemektedir.\n**Buna göre bu bölümün bir kenar uzunluğu için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "7 ile 8 metre arasındadır ve 7 metreye daha yakındır.",
    "7 ile 8 metre arasındadır ve 8 metreye daha yakındır.",
    "8 ile 9 metre arasındadır ve 8 metreye daha yakındır.",
    "8 ile 9 metre arasındadır ve 9 metreye daha yakındır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Aralığı doğru buldun ama yakınlığı ters belirledin. 50 sayısı 49'a 1 birim, 64'e ise 14 birim uzaktır; bu yüzden kenar 7'ye çok daha yakındır.",
    "Alt sınırı yanlış aldın: 8^{2} = 64 ve 50 < 64 olduğundan kenar 8 metreden küçüktür.",
    "Hem aralığı hem yakınlığı yanlış belirledin: 8^{2} = 64 ve 9^{2} = 81'dir; 50 bu iki sayının arasında değildir."
  ],
  aciklama: `Kare biçimindeki bir bölümün kenar uzunluğu, alanının kareköküdür: kenar = √{50} m. Tam kare olmayan bir karekökü kestirmek için sayıyı en yakın iki tam kare arasına yerleştiririz.
Adım 1: 50'ye en yakın tam kareler: 7^{2} = 49 ve 8^{2} = 64'tür.
Adım 2: 49 < 50 < 64 olduğundan 7 < √{50} < 8'dir. Kenar 7 ile 8 metre arasındadır.
Adım 3: Hangisine daha yakın? Uzaklıkları karşılaştır: 50 − 49 = 1 ve 64 − 50 = 14. Sayı 49'a çok daha yakın olduğundan karekökü de 7'ye daha yakındır.
Sağlama: 7,1^{2} = 50,41'dir; bu da √{50} sayısının 7,1'den biraz küçük, yani 7'ye yakın olduğunu gösterir.
Sık yapılan hata: Yakınlığı belirlerken aralığın ortasını (7,5) kullanmak. Karşılaştırmayı kök içindeki sayı ile tam kareler arasında yapmalısın.
Cevap A.`
},
{
  id: "mat-kk-207",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 3,
  soru: `Bir dokuma atölyesinde kare biçiminde kilimler üretilmektedir. Üretilen bir kilimin alanı aşağıdaki şekilde verilmiştir.
Kilimin kenarlarının yıpranmaması için dört kenarı boyunca, hiç boşluk kalmayacak biçimde süs şeridi dikilmektedir. Atölye, şeridi metresi 50 TL'den satın almaktadır.
**Buna göre bir kilimin şerit masrafı kaç TL'dir?**`,
  gorsel: `<svg viewBox="0 0 440 235" role="img" aria-label="Kare biçiminde kilim; alanı 3,24 metrekare, dört kenarına süs şeridi dikiliyor."><rect x="80" y="25" width="180" height="180" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="5"/><text x="170" y="108" font-size="16" text-anchor="middle" fill="currentColor">Kilim (kare)</text><text x="170" y="134" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 3,24 m²</text><text x="286" y="88" font-size="15" fill="var(--vurgu)" font-weight="bold">süs şeridi</text><line x1="264" y1="82" x2="282" y2="82" stroke="var(--vurgu)" stroke-width="5"/><text x="286" y="130" font-size="15" fill="currentColor">Şerit dört kenar</text><text x="286" y="152" font-size="15" fill="currentColor">boyunca dikilir.</text><text x="170" y="226" font-size="15" text-anchor="middle" fill="currentColor">Şeridin metresi: 50 TL</text></svg>`,
  secenekler: ["90", "180", "360", "648"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir kenarın şeridini hesapladın: 1,8 · 50 = 90. Şerit dört kenara da dikiliyor.",
    "Çevreyi iki kenarın toplamı sandın: (1,8 + 1,8) · 50 = 180. Karenin dört kenarı vardır.",
    null,
    "Karekök almayı atlayıp alanı 4 ile çarptın: 3,24 · 4 = 12,96 ve 12,96 · 50 = 648. Çevre hesaplanırken 4 ile çarpılan alan değil, kenar uzunluğudur."
  ],
  aciklama: `Kare biçimindeki kilimin kenar uzunluğu alanının kareköküdür; şerit uzunluğu ise kilimin çevresi kadardır.
Adım 1: Kenar uzunluğunu bul. 3,24 = [[324|100]] olduğundan √{3,24} = [[18|10]] = 1,8 m'dir.
Adım 2: Çevreyi hesapla: 4 · 1,8 = 7,2 m şerit gerekir.
Adım 3: Masrafı hesapla: 7,2 · 50 = 360 TL.
Sağlama: 1,8 · 1,8 = 3,24 olduğundan kenar doğrudur. 7 metre şerit 350 TL, 7,2 metre ise 360 TL eder; sonuç mantıklıdır.
Sık yapılan hata: Alanı doğrudan 4 ile çarpmak. Önce karekök alıp kenarı bulmalı, sonra 4 ile çarpmalısın.
Cevap C.`
},
{
  id: "mat-kk-208",
  kazanim: "M.8.1.3.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir okulda düzenlenen "Sayılar Şenliği"nde dört sınıf, panosuna üzerinde birer sayı yazılı kart asmıştır. Kartlar aşağıdaki tabloda verilmiştir.
Şenliğin kuralına göre kartındaki sayı en büyük olan sınıf birinci olmaktadır.
**Buna göre birinci olan sınıfın kartında yazan sayı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Sınıf</th><th>8-A</th><th>8-B</th><th>8-C</th><th>8-D</th></tr><tr><td>Karttaki sayı</td><td>6√2</td><td>√74</td><td>5√3</td><td>2√19</td></tr></table>`,
  secenekler: ["6√{2}", "√{74}", "5√{3}", "2√{19}"],
  dogru: 3,
  hatalar: [
    "Katsayısı en büyük olan kartı seçtin. Katsayının büyük olması sayının büyük olmasını gerektirmez: 6√{2} = √{72}'dir ve dördü içinde en küçüğüdür.",
    "Katsayılı ifadeleri kök içine almadan yalnızca kök içindeki sayılara baktın. Kök içine alındığında 5√{3} = √{75} ve 2√{19} = √{76} olur; ikisi de √{74}'ten büyüktür.",
    "Katsayıyı kök içine alırken bir terimde karesini almayı unutmuş olabilirsin: 2√{19} ifadesini √{2 · 19} = √{38} sandıysan 5√{3} = √{75} sana en büyük görünür. Doğrusu 2^{2} · 19 = 76'dır.",
    null
  ],
  aciklama: `Kareköklü ifadeleri karşılaştırmanın en güvenli yolu, hepsini tek bir karekök biçimine getirmektir. Bunun için katsayılar kök içine alınır: a√{b} = √{a^{2} · b}.
Adım 1: 8-A'nın kartı: 6√{2} = √{6^{2} · 2} = √{72}.
Adım 2: 8-B'nin kartı zaten kök biçimindedir: √{74}.
Adım 3: 8-C'nin kartı: 5√{3} = √{5^{2} · 3} = √{75}.
Adım 4: 8-D'nin kartı: 2√{19} = √{2^{2} · 19} = √{76}.
Adım 5: Kök içindeki sayıları karşılaştır: 72 < 74 < 75 < 76. En büyük sayı √{76}, yani 2√{19}'dur.
Sağlama: Yaklaşık değerlerle bak: 6√{2} ≈ 8,49; √{74} ≈ 8,60; 5√{3} ≈ 8,66; 2√{19} ≈ 8,72. Sıralama aynı çıktı.
Sık yapılan hata: Yalnızca katsayıya ya da yalnızca kök içindeki sayıya bakmak. Dört sayı da birbirine çok yakın olduğundan hepsini aynı biçime getirmeden karar verilemez.
Cevap D.`
},
{
  id: "mat-kk-209",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir okulun bahçesi kare biçiminde olup alanı 1 600 m²'dir. Bahçenin bir köşesine, kenar uzunluğu bahçenin kenar uzunluğunun [[1|4]]'ü kadar olan kare biçiminde bir basketbol sahası yapılmıştır.
Bahçenin, basketbol sahasının dışında kalan bütün bölümü çimlendirilecektir.
**Buna göre çimlendirilecek bölümün alanı kaç m²'dir?**`,
  gorsel: `<svg viewBox="0 0 440 240" role="img" aria-label="Kare biçiminde okul bahçesi, alanı 1600 metrekare. Sol alt köşesinde kare biçiminde basketbol sahası var; sahanın kenarı bahçenin kenarının dörtte biri kadar."><rect x="90" y="25" width="200" height="200" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="90" y="175" width="50" height="50" fill="var(--vurgu)" opacity="0.35" stroke="var(--vurgu)" stroke-width="3"/><text x="215" y="105" font-size="16" text-anchor="middle" fill="currentColor">Okul bahçesi</text><text x="215" y="131" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 1 600 m²</text><text x="310" y="196" font-size="15" fill="var(--vurgu)" font-weight="bold">Basketbol sahası</text><line x1="146" y1="200" x2="304" y2="196" stroke="var(--vurgu)" stroke-width="1.5"/><text x="310" y="218" font-size="15" fill="currentColor">(kenarı bahçenin</text><text x="310" y="236" font-size="15" fill="currentColor">kenarının dörtte biri)</text></svg>`,
  secenekler: ["100", "1 200", "1 500", "1 560"],
  dogru: 2,
  hatalar: [
    "Basketbol sahasının alanını buldun ve orada durdun. Soru, sahanın __dışında__ kalan bölümü soruyor.",
    "Sahanın alanını, bahçe alanının dörtte biri (1 600 : 4 = 400) sandın. Dörtte bir olan kenar uzunluğudur; alan oranı kenar oranıyla aynı değildir.",
    null,
    "Bahçenin kenar uzunluğu olan 40'ı alandan çıkardın. Çıkarılacak olan uzunluk değil, sahanın alanıdır."
  ],
  aciklama: `Kare biçimindeki bir alanda kenar, alanın kareköküdür. Kenar küçülürse alan, kenarın küçülme oranının karesi kadar küçülür.
Adım 1: Bahçenin kenarını bul: 40^{2} = 1 600 olduğundan kenar √{1 600} = 40 m'dir.
Adım 2: Sahanın kenarını bul: 40'ın dörtte biri 40 : 4 = 10 m'dir.
Adım 3: Sahanın alanını bul: 10 · 10 = 100 m².
Adım 4: Çimlendirilecek alanı bul: 1 600 − 100 = 1 500 m².
Sağlama: Sahanın kenarı bahçenin kenarının dörtte biri olduğuna göre alanı, bahçe alanının [[1|16]]'sı olmalıdır: 1 600 : 16 = 100. Doğru.
Sık yapılan hata: Kenar oranını doğrudan alana uygulamak. Kenar [[1|4]] oranında küçülürse alan [[1|16]] oranında küçülür.
Cevap C.`
},
{
  id: "mat-kk-210",
  kazanim: "M.8.1.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `Bir sınıfta "Gerçek Sayılar" panosu hazırlanmaktadır. Dört öğrenci birer karta birer ifade yazmış ve kartları panoya asmıştır. Kartlar aşağıdaki tabloda verilmiştir.
Öğretmen, kartındaki ifadenin değeri irrasyonel sayı olan öğrencilere birer mavi rozet vermiştir.
**Buna göre kaç öğrenci mavi rozet almıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Kartındaki ifade</th></tr><tr><td>Ayça</td><td>√0,36</td></tr><tr><td>Berk</td><td>√45</td></tr><tr><td>Ceren</td><td>√3 · √27</td></tr><tr><td>Deniz</td><td>2√5</td></tr></table>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: [
    "Sadeleşen bir kökü rasyonel saydın: √{45} = 3√{5}'tir ama kök içinde tam kare olmayan 5 kaldığı için bu sayı yine de irrasyoneldir.",
    null,
    "Ceren'in kartındaki çarpımı yapmadan, kök gördüğün için irrasyonel saydın. √{3} · √{27} = √{81} = 9'dur ve 9 bir doğal sayıdır.",
    "Kök işareti bulunan her ifadeyi irrasyonel saydın. Oysa √{0,36} = 0,6 ve √{3} · √{27} = 9 olduğundan bu iki sayı rasyoneldir."
  ],
  aciklama: `Bir sayı iki tam sayının oranı biçiminde yazılabiliyorsa rasyonel, yazılamıyorsa irrasyoneldir. Bir kareköklü ifade sadeleştirildikten sonra kök içinde tam kare olmayan bir sayı kalıyorsa o ifade irrasyoneldir.
Adım 1: Ayça: 0,36 = [[36|100]] olduğundan √{0,36} = [[6|10]] = 0,6'dır. Rasyoneldir.
Adım 2: Berk: 45 = 9 · 5 olduğundan √{45} = 3√{5}'tir. Kök içinde 5 kaldı ve 5 tam kare __değildir__; irrasyoneldir.
Adım 3: Ceren: √{3} · √{27} = √{81} = 9'dur. Bir doğal sayıdır, yani rasyoneldir.
Adım 4: Deniz: 2√{5} = √{20}'dir. 20 tam kare __değildir__ (4^{2} = 16, 5^{2} = 25); irrasyoneldir.
Adım 5: İrrasyonel sayı yazan öğrenciler Berk ve Deniz'dir; 2 öğrenci rozet alır.
Sık yapılan hata: İşlemi bitirmeden karar vermek. Kök işareti taşıyan bir ifade sadeleştirildiğinde doğal sayıya dönüşebilir (Ceren'in kartı gibi).
Cevap B.`
},
{
  id: "mat-kk-211",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 3,
  soru: `Bir sergi salonunun zemini dikdörtgen biçimindedir ve uzun kenarının uzunluğu √{75} metredir. Salonun kısa kenarı için depodaki dört bordürden biri seçilecektir; bordür uzunlukları aşağıdaki tabloda verilmiştir.
Salonun projesinde, zemin alanının metrekare cinsinden bir doğal sayı olması şartı bulunmaktadır.
**Buna göre hangi bordür seçilmelidir?**`,
  gorsel: `<table class="tablo"><tr><th>Bordür</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Uzunluk (m)</td><td>√5</td><td>3√5</td><td>√15</td><td>2√3</td></tr></table>`,
  secenekler: ["K bordürü", "L bordürü", "M bordürü", "N bordürü"],
  dogru: 3,
  hatalar: [
    "75'in içindeki 25'in tam kare olmasına bakıp eksik çarpanı 5 sandın. Oysa 75 = 5^{2} · 3'tür ve eksik olan çarpan 3'tür: 75 · 5 = 375 tam kare değildir.",
    "Katsayıyı kök içine almadan 3 · 5 = 15 diye düşünmüş olabilirsin. 3√{5} = √{45}'tir ve 75 · 45 = 3 375 tam kare değildir.",
    "15 sayısının içinde 3 çarpanı var diye seçtin ama 15'te fazladan bir 5 de vardır: 75 · 15 = 1 125 tam kare değildir.",
    null
  ],
  aciklama: `Dikdörtgenin alanı kenarların çarpımıdır. Kareköklü ifadelerde çarpma kök içlerinin çarpımıyla yapılır; sonucun doğal sayı olması için kök içindeki çarpımın tam kare olması gerekir.
Adım 1: Uzun kenarı çözümle: 75 = 5^{2} · 3'tür. Buradaki 3'ün üssü tek olduğundan, çarpımın tam kare olması için karşı kenardan bir 3 çarpanı daha gelmelidir.
Adım 2: Katsayılı bordürleri kök içine al: 3√{5} = √{45} ve 2√{3} = √{4 · 3} = √{12}.
Adım 3: Her bordür için kök içlerinin çarpımını hesapla: 75 · 5 = 375, 75 · 45 = 3 375, 75 · 15 = 1 125, 75 · 12 = 900.
Adım 4: Bu dört sayıdan yalnızca 900 tam karedir: 30^{2} = 900. Öyleyse N bordürü seçilmelidir.
Sağlama: √{75} · 2√{3} = 2√{225} = 2 · 15 = 30. Zemin alanı 30 m² olur; bu bir doğal sayıdır.
Sık yapılan hata: Katsayılı ifadeleri kök içine almadan denemek. 2√{3}, √{3}'ten farklıdır; kök içine alındığında √{12} olur.
Cevap D.`
},
{
  id: "mat-kk-212",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir el sanatları atölyesinde kare biçiminde üç kilim parçası dokunmuştur. Parçaların alanları aşağıdaki şekilde verilmiştir.
Parçaların kenarlarının sökülmemesi için her parçanın dört kenarı boyunca kenar şeridi dikilecektir.
**Buna göre üç parça için toplam kaç desimetre şerit gerekir?**`,
  gorsel: `<svg viewBox="0 0 470 210" role="img" aria-label="Kare biçiminde üç kilim parçası: alanları sırasıyla 27, 108 ve 48 desimetrekare."><rect x="30" y="95" width="85" height="85" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4"/><rect x="140" y="10" width="170" height="170" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4"/><rect x="335" y="67" width="113" height="113" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4"/><g text-anchor="middle" fill="currentColor"><text x="72" y="132" font-size="15" font-weight="bold">I</text><text x="72" y="156" font-size="15">27 dm²</text><text x="225" y="90" font-size="15" font-weight="bold">II</text><text x="225" y="114" font-size="15">108 dm²</text><text x="391" y="118" font-size="15" font-weight="bold">III</text><text x="391" y="142" font-size="15">48 dm²</text></g><text x="235" y="202" font-size="15" text-anchor="middle" fill="currentColor">Üç parça da kare biçimindedir; şerit dört kenara dikilir.</text></svg>`,
  secenekler: ["13√{3}", "52√{3}", "52√{9}", "288√{3}"],
  dogru: 1,
  hatalar: [
    "Kenar uzunluklarını doğru bulup topladın ama dört kenar olduğunu unuttun; 4 ile çarpmayı atladın.",
    null,
    "Katsayıları doğru topladın ama kök içindeki sayıları da topladın: 3 + 3 + 3 = 9. Kök içi toplanmaz, aynen kalır.",
    "Katsayıları toplayacağına çarptın: 3 · 6 · 4 = 72 ve 72 · 4 = 288. Aynı cinsten terimler toplanırken katsayılar toplanır."
  ],
  aciklama: `Her parçanın kenarı alanının kareköküdür; bir parçanın şerit uzunluğu ise çevresi, yani kenarının 4 katıdır.
Adım 1: I. parçanın kenarı: 27 = 9 · 3 olduğundan √{27} = 3√{3} dm.
Adım 2: II. parçanın kenarı: 108 = 36 · 3 olduğundan √{108} = 6√{3} dm.
Adım 3: III. parçanın kenarı: 48 = 16 · 3 olduğundan √{48} = 4√{3} dm.
Adım 4: Kenarları topla. Üçünün de kök içi 3 olduğundan katsayılar toplanır: 3 + 6 + 4 = 13, yani 13√{3} dm.
Adım 5: Her parçanın dört kenarına şerit dikildiğinden toplam uzunluk 4 · 13√{3} = 52√{3} dm'dir.
Sağlama: √{3} ≈ 1,73 alırsak kenarlar yaklaşık 5,20; 10,39 ve 6,93 dm'dir. Çevrelerin toplamı yaklaşık 4 · 22,52 = 90,1 dm ve 52√{3} ≈ 90,07'dir.
Sık yapılan hata: Kenarları bulup toplayınca durmak. Soru çevrelerin toplamını istiyor; son adımda 4 ile çarpmalısın.
Cevap B.`
}
);
