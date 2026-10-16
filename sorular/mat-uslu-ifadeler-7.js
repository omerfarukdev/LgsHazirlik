// Matematik — Üslü İfadeler: Havuz eki (kademe 0, mat-ui-021 … mat-ui-075)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["uslu-ifadeler"] = window.LGS_BANK["uslu-ifadeler"] || []).push(
/* ===================== HAVUZ EKİ (kademe 0) ===================== */
{
  id: "mat-ui-021",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 1,
  soru: "Bir müzik platformunda bir şarkı 5 800 000 kez dinlenmiştir. Platform bu sayıyı 58 · 10^{n} biçiminde yazmaktadır. Burada n pozitif bir tam sayıdır.\n**Buna göre n kaçtır?**",
  gorsel: null,
  secenekler: ["7","6","5","4"],
  dogru: 2,
  hatalar: [
    "Basamak sayısını üs sanma: 5 800 000 yedi basamaklıdır ama 58'in arkasına gelecek sıfır sayısı 5'tir.",
    "Sıfırlardan birini fazla sayma: 58 · 10^{6} = 58 000 000 eder.",
    null,
    "Sıfırlardan birini saymama: 58 · 10^{4} = 580 000 eder."
  ],
  aciklama: `10'un pozitif tam sayı kuvvetleri, 1'in yanına üs kadar sıfır yazılarak elde edilir.
Adım 1: 5 800 000 sayısını 58'i içeren bir çarpım olarak yaz: 5 800 000 = 58 · 100 000.
Adım 2: 100 000 sayısında 1'in yanında 5 sıfır vardır: 100 000 = 10^{5}.
Adım 3: Öyleyse 5 800 000 = 58 · 10^{5} ve n = 5'tir.
Sağlama: 58 · 100 000 = 5 800 000.
Sık yapılan hata: Sayının basamak sayısını üs sanmak. Üs, 58'in arkasındaki sıfırların sayısıdır.
Cevap C.`
},
{
  id: "mat-ui-022",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: "Defne'nin çalışma kâğıdında aşağıdaki işlem yazılıdır.\n**5^{0} + 0^{3} + 1^{9} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["10","6","5","2"],
  dogru: 3,
  hatalar: [
    "1'in kuvvetini üsle çarpma: 1^{9} = 9 alınmış ve 1 + 0 + 9 = 10 bulunmuş. 1'in bütün kuvvetleri 1'dir.",
    "Sıfırıncı kuvvette üssü yok sayma: 5^{0} = 5 alınmış ve 5 + 0 + 1 = 6 bulunmuş. Oysa sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir.",
    "Sıfırın kuvvetini üsle eşleme: 0^{3} = 3 alınmış ve 1 + 3 + 1 = 5 bulunmuş. Oysa 0^{3} = 0 · 0 · 0 = 0'dır.",
    null
  ],
  aciklama: `Üç terimin her biri ayrı ayrı hesaplanır, sonra toplanır.
Adım 1: Sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir: 5^{0} = 1.
Adım 2: 0^{3} = 0 · 0 · 0 = 0.
Adım 3: 1'in bütün kuvvetleri 1'dir: 1^{9} = 1.
Adım 4: Topla: 1 + 0 + 1 = 2.
Sağlama: Her terimi tabana bakarak denetle: tabanı 0 olan pozitif kuvvet 0, tabanı 1 olan kuvvet 1'dir.
Sık yapılan hata: 5^{0} ifadesini 0 sanmak.
Cevap D.`
},
{
  id: "mat-ui-023",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 1,
  soru: "Matematik kulübünün şifre kartında (3^{-2})^{4} ifadesi yazılıdır. Şifre, bu ifadenin 3'ün tek bir kuvveti olarak yazılışıdır.\n**Buna göre şifre aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3^{-8}","3^{-6}","3^{2}","3^{8}"],
  dogru: 0,
  hatalar: [
    null,
    "Üssün üssünde üsleri toplama: (−2) + (−4) = −6 alınmış. Üssün üssünde üsler çarpılır.",
    "Üssün üssünde üsleri toplarken işaret hatası: −2 + 4 = 2 alınmış. Üsler toplanmaz, çarpılır.",
    "Negatif üssün işaretini kaybetme: (−2) · 4 = −8 yerine 8 yazılmış."
  ],
  aciklama: `Üssün üssü alınırken üsler çarpılır: (a^{m})^{n} = a^{m·n}. Negatif üs de çarpmaya olduğu gibi katılır.
Adım 1: Kuralı uygula: (3^{-2})^{4} = 3^{(−2)·4}.
Adım 2: Üsleri çarp: (−2) · 4 = −8.
Adım 3: Yaz: 3^{-8}.
Sağlama: (3^{-2})^{4} = 3^{-2} · 3^{-2} · 3^{-2} · 3^{-2}. Dört çarpanda üsler (−2) + (−2) + (−2) + (−2) = −8 eder.
Sık yapılan hata: Üssün üssünde üsleri toplamak.
Cevap A.`
},
{
  id: "mat-ui-024",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 1,
  soru: "Bir meyve suyu fabrikasının yıllık üretim hedefi 4 · 10^{6} şişedir. Fabrika dört farklı yılın üretimini aşağıdaki gibi rapor etmiştir.\n**Buna göre hangi yılın üretimi hedeften fazladır?**",
  gorsel: `<table class="tablo"><tr><th>Yıl</th><th>Üretim (şişe)</th></tr><tr><td>1. yıl</td><td>8 · 10<sup>4</sup></td></tr><tr><td>2. yıl</td><td>9 · 10<sup>5</sup></td></tr><tr><td>3. yıl</td><td>3,9 · 10<sup>6</sup></td></tr><tr><td>4. yıl</td><td>2 · 10<sup>7</sup></td></tr></table>`,
  secenekler: ["1. yıl","2. yıl","3. yıl","4. yıl"],
  dogru: 3,
  hatalar: [
    "Yalnızca başkatsayıya bakma: 8 > 4 diye büyük sanılmış. Oysa 8 · 10^{4} sayısı 4 · 10^{6} sayısından çok küçüktür.",
    "Yalnızca başkatsayıya bakma: 9 > 4 diye büyük sanılmış. 9 · 10^{5} = 900 000, hedef ise 4 000 000'dur.",
    "Üsler eşit olduğunda başkatsayılara bakmama: 3,9 < 4 olduğundan 3,9 · 10^{6} hedefin altındadır.",
    null
  ],
  aciklama: `Bilimsel gösterimle yazılmış sayılar karşılaştırılırken önce 10'un üssüne bakılır. Üssü büyük olan sayı büyüktür; üsler eşitse başkatsayılar karşılaştırılır.
Adım 1: Hedefin üssü 6'dır. 1. yılın üssü 4, 2. yılın üssü 5 olduğundan ikisi de hedeften küçüktür.
Adım 2: 3. yılın üssü de 6'dır. Başkatsayılara bak: 3,9 < 4 olduğundan 3. yıl da hedefin altındadır.
Adım 3: 4. yılın üssü 7 olduğundan 2 · 10^{7} sayısı 4 · 10^{6} sayısından büyüktür.
Sağlama: 2 · 10^{7} = 20 000 000 ve hedef 4 000 000'dur.
Sık yapılan hata: Yalnızca başkatsayılara bakmak. 8 ve 9 sayıları 4'ten büyüktür ama bu yılların üretimi çok daha azdır.
Cevap D.`
},
{
  id: "mat-ui-025",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 1,
  soru: "Bir spor kanalının takipçi sayısı 2,3 · 10^{5}'tir.\n**Buna göre bu kanalın takipçi sayısı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2300","23 000","230 000","2 300 000"],
  dogru: 2,
  hatalar: [
    "Üssü 3 gibi kaydırma: 2,3 · 10^{3} = 2300 eder.",
    "Virgülü bir basamak eksik kaydırma: 2,3 · 10^{4} = 23 000 eder.",
    null,
    "Virgülü bir basamak fazla kaydırma: 2,3 · 10^{6} = 2 300 000 eder."
  ],
  aciklama: `Pozitif üslü bir bilimsel gösterimde virgül, üs kadar basamak sağa kaydırılır.
Adım 1: Üs 5'tir; virgül 5 basamak sağa gider.
Adım 2: 2,3 sayısında virgülden sonra yalnızca bir rakam var, bu yüzden kalan 4 basamak sıfırla doldurulur: 2,30000.
Adım 3: Virgül sağa kayınca sayı 230 000 olur.
Sağlama: 2,3 · 100 000 = 230 000.
Sık yapılan hata: Üs kadar kaydırırken virgülden sonraki rakam sayısını hesaba katıp bir basamak eksik ya da fazla kaydırmak.
Cevap C.`
},
{
  id: "mat-ui-026",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 1,
  soru: "Bir fen dersinde öğretmen, bilimsel gösterimin a · 10^{n} biçiminde yazıldığını anlatmış ve öğrencilerden kurala uygun gösterimi bulmalarını istemiştir.\n**Buna göre aşağıdakilerden hangisi bilimsel gösterim biçiminde yazılmıştır?**",
  gorsel: null,
  secenekler: ["12 · 10^{5}","0,9 · 10^{4}","36 · 10^{-2}","4,2 · 10^{-3}"],
  dogru: 3,
  hatalar: [
    "Başkatsayısı 10'dan büyük: 12 sayısı 1 ile 10 arasında değildir.",
    "Başkatsayısı 1'den küçük: 0,9 sayısı 1 ile 10 arasında değildir.",
    "Başkatsayısı 10'dan büyük: bilimsel gösterimde 1 ≤ a < 10 olmalıdır, 36 bu aralıkta değildir.",
    null
  ],
  aciklama: `Bilimsel gösterim a · 10^{n} biçimindedir. Burada n bir tam sayıdır ve a sayısı 1'den küçük olmayan, 10'dan küçük bir sayıdır: 1 ≤ a < 10.
Adım 1: 36 · 10^{-2} ifadesinde a = 36'dır; 36 sayısı 10'dan büyüktür. Uygun değildir.
Adım 2: 0,9 · 10^{4} ifadesinde a = 0,9'dur; 0,9 sayısı 1'den küçüktür. Uygun değildir.
Adım 3: 12 · 10^{5} ifadesinde a = 12'dir; 12 sayısı 10'dan büyüktür. Uygun değildir.
Adım 4: 4,2 · 10^{-3} ifadesinde a = 4,2'dir; 1 ≤ 4,2 < 10 olduğundan uygundur.
Sağlama: Başkatsayının tam kısmı sıfırdan farklı tek bir rakam olmalıdır.
Sık yapılan hata: Değeri doğru olan her yazılışı bilimsel gösterim sanmak. 36 · 10^{-2} sayısının değeri 0,36'dır ama gösterimi bilimsel değildir.
Cevap D.`
},
{
  id: "mat-ui-027",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 1,
  soru: "Bir kuyumcunun etiketinde kolyenin kütlesi 7 · 10^{1} + 4 · 10^{0} + 9 · 10^{-2} gram olarak çözümlenmiş biçimde yazılıdır.\n**Buna göre kolyenin kütlesi kaç gramdır?**",
  gorsel: null,
  secenekler: ["7,49","74,09","74,9","749"],
  dogru: 1,
  hatalar: [
    "10^{1} terimini birler basamağı sanma: 7 · 10^{1} = 70'tir, 7 değil. Bütün rakamlar bir basamak kaydırılmış.",
    null,
    "Boş basamağı atlama: 9 yüzde birler basamağındadır; onda birler basamağına 0 yazılmalıdır.",
    "Negatif üsleri yok sayıp rakamları yan yana yazma. 10^{-2} terimi virgülün sağında yer alır."
  ],
  aciklama: `Çözümlemeyi geri yazarken her terimi ondalık sayıya çevirip toplarız.
Adım 1: 7 · 10^{1} = 70.
Adım 2: 4 · 10^{0} = 4.
Adım 3: 9 · 10^{-2} = 9 · 0,01 = 0,09.
Adım 4: Topla: 70 + 4 + 0,09 = 74,09.
Sağlama: Onda birler basamağının terimi (10^{-1}) yazılmadığı için orada 0 vardır; yüzde birler basamağında 9 bulunur: 74,09.
Sık yapılan hata: Eksik basamağa 0 koymayı unutup 74,9 yazmak.
Cevap B.`
},
{
  id: "mat-ui-028",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: "Bir bilgisayar oyununda gizli kapıyı açan kod, ekrandaki −2^{4} ifadesinin değeridir.\n**Buna göre kapıyı açan kod kaçtır?**",
  gorsel: null,
  secenekler: ["16","8","−8","−16"],
  dogru: 3,
  hatalar: [
    "Eksi işaretini tabana katma. Parantez yoksa üs yalnızca 2'ye uygulanır; (−2)^{4} = 16 ama −2^{4} = −16'dır.",
    "Üssü çarpma gibi kullanma ve eksi işaretini düşürme: 2 · 4 = 8 alınmış.",
    "Üssü çarpma gibi kullanma: 2 · 4 = 8 hesaplanmış, eksi işareti korunmuş. Üs, tabanın kaç kez çarpılacağını gösterir.",
    null
  ],
  aciklama: `Üs, yalnızca hemen solundaki sayıya uygulanır. Eksi işareti parantez içinde değilse tabana dâhil değildir.
Adım 1: Parantez yok, öyleyse üs yalnızca 2'ye uygulanır: 2^{4} = 2 · 2 · 2 · 2 = 16.
Adım 2: Önündeki eksi işaretini yaz: −2^{4} = −16.
Sağlama: (−2)^{4} yazılsaydı eksi işareti de dört kez çarpılır ve sonuç 16 olurdu. Parantezin yokluğu sonucu değiştirir.
Sık yapılan hata: −2^{4} ile (−2)^{4} ifadelerini aynı sanmak.
Cevap D.`
},
{
  id: "mat-ui-029",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 1,
  soru: "Bir eczacı, tablet başına etken madde miktarı olan 0,0072 gramı 72 · 10^{n} gram biçiminde yazmıştır. Burada n bir tam sayıdır.\n**Buna göre n kaçtır?**",
  gorsel: null,
  secenekler: ["−4","−3","−2","4"],
  dogru: 0,
  hatalar: [
    null,
    "Virgülü bir basamak eksik kaydırma: 72 · 10^{-3} = 0,072'dir.",
    "Üssü 72'nin rakam sayısına bakarak seçme: 72 · 10^{-2} = 0,72'dir.",
    "Üssün işaretini yanlış alma: 72 · 10^{4} = 720 000'dir. 1'den küçük sayıda üs negatif olur."
  ],
  aciklama: `72 · 10^{n} yazılışında 72 sayısı 10^{n} ile çarpılıyor. 10'un negatif kuvvetiyle çarpmak, virgülü sola kaydırmaktır.
Adım 1: 0,0072 sayısını 72'ye ulaştırmak için virgülü sağa kaydır: 0,0072 → 0,072 → 0,72 → 7,2 → 72. Virgül 4 basamak kaydı.
Adım 2: 72 sayısından 0,0072'ye dönmek için virgül 4 basamak sola gider; bu, 10^{-4} ile çarpmaktır.
Adım 3: Öyleyse 0,0072 = 72 · 10^{-4} ve n = −4'tür.
Sağlama: 72 · 10^{-4} = [[72|10 000]] = 0,0072.
Sık yapılan hata: Virgülü bir basamak eksik ya da fazla kaydırmak.
Cevap A.`
},
{
  id: "mat-ui-030",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 1,
  soru: "Bir bilgi yarışmasının son sorusunda sunucu ekrana aşağıdaki ifadeyi yansıtmıştır.\n**([[1|3]])^{-2} ifadesinin değeri kaçtır?**",
  gorsel: null,
  secenekler: ["9","6","[[1|9]]","−9"],
  dogru: 0,
  hatalar: [
    null,
    "Tabanı üsle çarpma: 3 · 2 = 6 alınmış. Üs, tabanın kaç kez çarpılacağını gösterir.",
    "Kesri ters çevirmeden üs alma: ([[1|3]])^{2} = [[1|9]] hesaplanmış. Negatif üs, kesri ters çevirir.",
    "Negatif üssü eksi işareti sanma. Negatif üs sayıyı negatif yapmaz; tabanın tersini almayı gösterir."
  ],
  aciklama: `Kesrin negatif kuvvetinde kesir ters çevrilir ve üs pozitif olur: ([[a|b]])^{-n} = ([[b|a]])^{n}.
Adım 1: Kesri ters çevir, üssü pozitif yap: ([[1|3]])^{-2} = ([[3|1]])^{2} = 3^{2}.
Adım 2: Hesapla: 3^{2} = 9.
Sağlama: ([[1|3]])^{2} = [[1|9]] olduğuna göre bunun çarpmaya göre tersi 9'dur. Negatif üs de bu tersi verir.
Sık yapılan hata: Kesri ters çevirmeyi unutmak. Negatif üs görünce kesir ters döner.
Cevap A.`
},
{
  id: "mat-ui-031",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 1,
  soru: "Elif'in mutfak tartısı, bir koli unun kütlesini 6,038 kilogram göstermiştir.\n**Buna göre bu sayının 10'un tam sayı kuvvetleriyle çözümlenmesinde 3 rakamının bulunduğu terim aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3 · 10^{-3}","3 · 10^{-2}","3 · 10^{-1}","3 · 10^{0}"],
  dogru: 1,
  hatalar: [
    "Virgülden sonraki basamakları bir fazla sayma: 3 rakamı binde birler basamağında sanılmış.",
    null,
    "Virgülden sonraki 0'ı saymama: 3 rakamı onda birler basamağında sanılmış. Onda birler basamağındaki rakam 0'dır.",
    "Virgülden sonraki basamakları birler basamağıyla karıştırma: 3 rakamı birler basamağında sanılmış."
  ],
  aciklama: `Ondalık yazılışta virgülden sonraki ilk basamak onda birler (10^{-1}), ikincisi yüzde birler (10^{-2}), üçüncüsü binde birler (10^{-3}) basamağıdır.
Adım 1: 6,038 sayısının basamaklarını yaz: 6 birler, 0 onda birler, 3 yüzde birler, 8 binde birler basamağındadır.
Adım 2: 3 rakamı yüzde birler basamağındadır; değeri 3 · 10^{-2} = 0,03'tür.
Sağlama: Çözümleme 6 · 10^{0} + 3 · 10^{-2} + 8 · 10^{-3} olur; toplamı 6 + 0,03 + 0,008 = 6,038'dir.
Sık yapılan hata: Virgülden sonraki 0'ı saymadan 3'ü onda birler basamağına koymak.
Cevap B.`
},
{
  id: "mat-ui-032",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: "Bir kutudan çekilen üç kartın üzerinde sırasıyla aşağıdaki ifadeler yazılıdır. Oyunda puan, üç kartın değerlerinin toplamıdır.\n**Buna göre bu oyuncunun puanı kaçtır?**",
  gorsel: `<svg viewBox="0 0 452 130" role="img" aria-label="Üç kart: eksi 1'in 99., 101. ve 103. kuvvetleri"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="20" y="34" width="130" height="80" rx="10"/><rect x="164" y="34" width="130" height="80" rx="10"/><rect x="308" y="34" width="130" height="80" rx="10"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="85" y="24">1. kart</text><text x="229" y="24">2. kart</text><text x="373" y="24">3. kart</text></g><g fill="currentColor" font-size="24" font-weight="bold" text-anchor="middle"><text x="85" y="86">(−1)<tspan font-size="16" dy="-11">99</tspan></text><text x="229" y="86">(−1)<tspan font-size="16" dy="-11">101</tspan></text><text x="373" y="86">(−1)<tspan font-size="16" dy="-11">103</tspan></text></g></svg>`,
  secenekler: ["3","1","−1","−3"],
  dogru: 3,
  hatalar: [
    "Üssün büyüklüğüne bakıp (−1)'in kuvvetini 1 alma: 1 + 1 + 1 = 3 bulunmuş. Üs tek olunca sonuç −1'dir.",
    "Tek üslerden ikisinin işaretini kaybetme: örneğin −1 + 1 + 1 = 1 bulunmuş. Üç üs de tektir.",
    "Tek üslerden birinin işaretini kaybetme: örneğin (−1)^{101} = 1 alınıp −1 + 1 − 1 = −1 bulunmuş. Üç üs de tektir.",
    null
  ],
  aciklama: `(−1)'in kuvvetleri yalnızca işareti belirler: üs çiftse sonuç 1, tekse −1'dir.
Adım 1: 99 tek sayıdır: (−1)^{99} = −1.
Adım 2: 101 tek sayıdır: (−1)^{101} = −1.
Adım 3: 103 tek sayıdır: (−1)^{103} = −1.
Adım 4: Topla: (−1) + (−1) + (−1) = −3.
Sağlama: Üçü de tek sayı olduğundan üç tane −1 toplanır.
Sık yapılan hata: Üssün büyüklüğüne bakıp sonucu pozitif sanmak. (−1) tabanında yalnızca üssün tek ya da çift olması önemlidir.
Cevap D.`
},
{
  id: "mat-ui-033",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir marangoz iki tahta parçasının uzunluğunu santimetre cinsinden, çözümlenmiş biçimde aşağıdaki tabloya yazmıştır.\n**Buna göre 1. parça 2. parçadan kaç santimetre uzundur?**",
  gorsel: `<table class="tablo"><tr><th>Parça</th><th>Uzunluk (cm)</th></tr><tr><td>1. parça</td><td>4 · 10<sup>2</sup> + 9 · 10<sup>0</sup> + 6 · 10<sup>−2</sup></td></tr><tr><td>2. parça</td><td>3 · 10<sup>1</sup> + 4 · 10<sup>−1</sup></td></tr></table>`,
  secenekler: ["405,66","379,2","379,02","378,66"],
  dogru: 3,
  hatalar: [
    "3 · 10^{1} terimini birler basamağı sanma: ikinci parça 3,4 alınmış.",
    "Boş basamağı atlama: birinci parça 409,6 alınmış; oysa 6, yüzde birler basamağındadır ve onda birler basamağında 0 vardır.",
    "4 · 10^{-1} terimini yüzde birler basamağına koyma: ikinci parça 30,04 alınmış.",
    null
  ],
  aciklama: `Önce her uzunluğu ondalık sayıya çevirir, sonra farkı alırız.
Adım 1: 1. parça: 400 + 9 + 0,06 = 409,06 cm.
Adım 2: 2. parça: 30 + 0,4 = 30,4 cm.
Adım 3: Farkı al: 409,06 − 30,4 = 378,66.
Sağlama: 378,66 + 30,4 = 409,06.
Sık yapılan hata: Yazılmayan basamağa 0 koymayı unutmak. 1. parçada onda birler basamağı boştur.
Cevap D.`
},
{
  id: "mat-ui-034",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 2,
  soru: "Bir mühendis, çok ince bir telin kalınlığını 4,5 · 10^{-2} cm olarak ölçmüştür. Teknik çizimde aynı kalınlık k · 10^{-5} cm biçiminde yazılacaktır.\n**Buna göre k kaçtır?**",
  gorsel: null,
  secenekler: ["4500","450","4,5","0,0045"],
  dogru: 0,
  hatalar: [
    null,
    "Üs farkını 2 alma: −2 ile −5 arasındaki fark 3'tür, bu yüzden başkatsayı 1000 katına çıkar, 100 katına değil.",
    "Başkatsayıyı hiç değiştirmeme: 4,5 · 10^{-5} sayısı 4,5 · 10^{-2} sayısının binde biridir.",
    "Başkatsayıyı ters yönde değiştirme: üs 3 azalırken başkatsayı 1000 katına çıkmalıdır, 1000'e bölünmemelidir."
  ],
  aciklama: `Bir sayıyı 10'un farklı kuvvetleriyle yazarken başkatsayı ile üs birbirini dengeler: üs 1 azalırsa başkatsayı 10 katına çıkar.
Adım 1: Üs −2'den −5'e iner; üs 3 azalmıştır.
Adım 2: Üs 3 azaldığı için başkatsayı 10^{3} = 1000 katına çıkmalıdır.
Adım 3: 4,5 · 1000 = 4500. Öyleyse k = 4500'dür.
Sağlama: 4500 · 10^{-5} = [[4500|100 000]] = 0,045 ve 4,5 · 10^{-2} = 0,045.
Sık yapılan hata: Üs azaldığında başkatsayıyı da küçültmek.
Cevap A.`
},
{
  id: "mat-ui-035",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 2,
  soru: "Bir kooperatifin bir yıllık cirosu 5,2 · 10^{8} TL'dir.\n**Buna göre bu ciro kaç basamaklı bir doğal sayıdır?**",
  gorsel: null,
  secenekler: ["52","10","9","8"],
  dogru: 2,
  hatalar: [
    "Başkatsayının rakamlarını yan yana yazıp basamak sayısı sanma: 5,2 → 52 alınmış.",
    "Üs ile başkatsayıdaki rakam sayısını toplama: 8 + 2 = 10 alınmış.",
    null,
    "Üssü basamak sayısı sanma: virgül 8 basamak kayar ama sayının ilk rakamı da bir basamak sayılır."
  ],
  aciklama: `Pozitif üslü bilimsel gösterimde virgül, üs kadar basamak sağa kaydırılır.
Adım 1: 5,2 · 10^{8} sayısında virgül 8 basamak sağa gider. 5,2 sayısında virgülden sonra yalnızca bir rakam var, geri kalan 7 basamak sıfırla doldurulur.
Adım 2: Sayı 520 000 000 olur.
Adım 3: Rakamları say: 5, 2 ve yedi sıfır; toplam 9 basamak.
Sağlama: Üs n ise sayı n + 1 basamaklıdır: 8 + 1 = 9.
Sık yapılan hata: Üssü doğrudan basamak sayısı sanmak. Başkatsayının tam kısmı da bir basamak ekler.
Cevap C.`
},
{
  id: "mat-ui-036",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: "Matematik kulübünün ifade makinesine (5^{-2})^{3} · 5^{4} ifadesi girilmiştir. Makine, sonucu 5'in tek bir kuvveti olarak ekrana yazmaktadır.\n**Buna göre ekranda hangi ifade görünür?**",
  gorsel: null,
  secenekler: ["5^{-2}","5^{2}","5^{5}","5^{10}"],
  dogru: 0,
  hatalar: [
    null,
    "Sonucun üssünün işaretini kaybetme: 5^{-2} yerine 5^{2} yazılmış. Negatif üs unutulmuştur.",
    "Üssün üssünde üsleri toplama: −2 + 3 = 1 alınmış ve 1 + 4 = 5 bulunmuş. Üssün üssünde üsler çarpılır.",
    "Negatif üssü pozitif alma: (5^{2})^{3} · 5^{4} = 5^{6} · 5^{4} = 5^{10} hesaplanmış."
  ],
  aciklama: `Önce üssün üssünü, sonra çarpımı düzenleriz.
Adım 1: Üssün üssünde üsler çarpılır: (5^{-2})^{3} = 5^{(−2)·3} = 5^{-6}.
Adım 2: Aynı tabanlı çarpımda üsler toplanır: 5^{-6} · 5^{4} = 5^{(−6)+4}.
Adım 3: Topla: −6 + 4 = −2. Sonuç 5^{-2} olur.
Sağlama: 5^{-6} = [[1|5^{6}]] ve 5^{4} ile çarpınca [[5^{4}|5^{6}]] = [[1|5^{2}]] = 5^{-2} bulunur.
Sık yapılan hata: Üssün üssünde üsleri toplamak.
Cevap A.`
},
{
  id: "mat-ui-037",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir şifre makinesi, girilen işlemin sonucunu doğal sayı olarak vermektedir. Makineye aşağıdaki işlem girilmiştir.\n**9^{-1} · 27^{2} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["27","81","243","6561"],
  dogru: 1,
  hatalar: [
    "Üssü tabanın üssüyle toplama: 27^{2} = 3^{5} alınmış ve 3^{-2} · 3^{5} = 3^{3} = 27 bulunmuş. Doğrusu 27^{2} = (3^{3})^{2} = 3^{6}'dır.",
    null,
    "Tabanı çevirirken üssü unutma: 9^{-1} = 3^{-1} alınmış ve 3^{-1} · 3^{6} = 3^{5} = 243 bulunmuş. Doğrusu 9^{-1} = 3^{-2}'dir.",
    "Negatif üssün işaretini kaybetme: 9^{-1} = 3^{2} alınmış ve 3^{2} · 3^{6} = 3^{8} = 6561 bulunmuş."
  ],
  aciklama: `Farklı tabanlar aynı tabana çevrilince üs kuralları uygulanabilir: 9 = 3^{2} ve 27 = 3^{3}.
Adım 1: 9^{-1} = (3^{2})^{-1} = 3^{-2}.
Adım 2: 27^{2} = (3^{3})^{2} = 3^{6}.
Adım 3: Çarpımda üsleri topla: 3^{-2} · 3^{6} = 3^{4}.
Adım 4: Hesapla: 3^{4} = 81.
Sağlama: 9^{-1} = [[1|9]] ve 27^{2} = 729; [[729|9]] = 81.
Sık yapılan hata: Tabanı değiştirirken üssü hesaba katmamak (9^{-1} = 3^{-1} yazmak).
Cevap B.`
},
{
  id: "mat-ui-038",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir kumaşçı, bir top kumaştan kestiği parçanın boyunu çözümlenmiş biçimde 5 · 10^{1} + 3 · 10^{-1} + 8 · 10^{-3} metre olarak yazmıştır.\n**Buna göre kumaş parçasının boyu kaç metredir?**",
  gorsel: null,
  secenekler: ["5,308","50,038","50,308","50,38"],
  dogru: 2,
  hatalar: [
    "10^{1} terimini birler basamağı sanma: 5 · 10^{1} = 50'dir, 5 değil.",
    "Terimleri bir basamak sağa kaydırma: 3 yüzde birler, 8 binde birler basamağına yazılmış. Oysa 3 · 10^{-1} onda birler basamağıdır.",
    null,
    "Boş basamağı atlama: yüzde birler basamağının terimi yazılmadığına göre orada 0 vardır; 8, binde birler basamağındadır."
  ],
  aciklama: `Çözümlemeyi geri yazarken her terimi ondalık değere çevirip toplarız.
Adım 1: 5 · 10^{1} = 50.
Adım 2: 3 · 10^{-1} = 0,3.
Adım 3: 8 · 10^{-3} = 0,008.
Adım 4: Topla: 50 + 0,3 + 0,008 = 50,308.
Sağlama: Basamakları yaz: onlar 5, birler 0, onda birler 3, yüzde birler 0, binde birler 8. Sayı 50,308'dir.
Sık yapılan hata: Yazılmayan 10^{-2} basamağına 0 koymayı unutmak.
Cevap C.`
},
{
  id: "mat-ui-039",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: "Bir bilgi yarışmasında bir takım iki kart çekmiştir. Kartlar aşağıda verilmiştir. Takımın puanı, 1. kartın değerinden 2. kartın değerinin çıkarılmasıyla bulunur.\n**Buna göre takımın puanı kaçtır?**",
  gorsel: `<svg viewBox="0 0 308 130" role="img" aria-label="İki kart: birinci kartta eksi 2'nin 3. kuvveti, ikinci kartta eksi 3'ün 2. kuvveti"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="20" y="34" width="130" height="80" rx="10"/><rect x="164" y="34" width="130" height="80" rx="10"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="85" y="24">1. kart</text><text x="229" y="24">2. kart</text></g><g fill="currentColor" font-size="24" font-weight="bold" text-anchor="middle"><text x="85" y="86">(−2)<tspan font-size="16" dy="-11">3</tspan></text><text x="229" y="86">(−3)<tspan font-size="16" dy="-11">2</tspan></text></g></svg>`,
  secenekler: ["−17","−1","1","17"],
  dogru: 0,
  hatalar: [
    null,
    "Tek kuvvette işareti kaybetme: (−2)^{3} = 8 alınmış ve 8 − 9 = −1 bulunmuş. Oysa (−2)^{3} = −8'dir.",
    "Çift kuvveti negatif alma: (−3)^{2} = −9 alınmış ve −8 − (−9) = 1 bulunmuş. Oysa (−3)^{2} = 9'dur.",
    "İki kuvvette de işareti yanlış alma: 8 − (−9) = 17 bulunmuş."
  ],
  aciklama: `Negatif tabanın kuvvetinde işareti üssün tek mi çift mi olduğu belirler: tek kuvvet negatif, çift kuvvet pozitiftir.
Adım 1: 1. kart: (−2)^{3} = (−2) · (−2) · (−2) = −8. Üs tek olduğu için sonuç negatiftir.
Adım 2: 2. kart: (−3)^{2} = (−3) · (−3) = 9. Üs çift olduğu için sonuç pozitiftir.
Adım 3: Puan, 1. kart eksi 2. karttır: −8 − 9 = −17.
Sağlama: −8 sayısından 9 çıkarmak sayıyı sola doğru 9 birim kaydırır: −8 − 9 = −17.
Sık yapılan hata: (−3)^{2} ifadesini −9 sanmak. Eksi işareti parantez içindedir ve iki kez çarpılır.
Cevap A.`
},
{
  id: "mat-ui-040",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir matematik yarışmasında yarışmacılardan 2^{4} · 5^{4} · 10^{-2} ifadesini 10'un tek bir kuvveti olarak yazmaları istenmiştir.\n**Buna göre doğru yazılış aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["10^{-8}","10^{2}","10^{4}","10^{6}"],
  dogru: 1,
  hatalar: [
    "Üsleri çarpma: 4 · (−2) = −8 alınmış. Aynı tabanlı çarpımda üsler toplanır.",
    null,
    "10^{-2} çarpanını hesaba katmama: yalnızca 2^{4} · 5^{4} = 10^{4} bulunmuş.",
    "Negatif üssü pozitif alma: 4 + 2 = 6 hesaplanmış. Oysa 10^{-2} çarpanının üssü −2'dir."
  ],
  aciklama: `Üsleri aynı olan çarpımlarda taban çarpılabilir: a^{k} · b^{k} = (a · b)^{k}.
Adım 1: 2^{4} · 5^{4} = (2 · 5)^{4} = 10^{4}.
Adım 2: Çarpımı 10^{-2} ile sürdür: 10^{4} · 10^{-2}.
Adım 3: Aynı tabanlı çarpımda üsleri topla: 4 + (−2) = 2. Sonuç 10^{2} olur.
Sağlama: 16 · 625 = 10 000 = 10^{4} ve 10 000 · 0,01 = 100 = 10^{2}.
Sık yapılan hata: Negatif üssü pozitif gibi toplamak.
Cevap B.`
},
{
  id: "mat-ui-041",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir hesap oyununda oyuncuya ([[2|3]])^{-3} ifadesinin değeri sorulmuş ve cevap olarak aşağıdaki seçenekler sunulmuştur.\n**Buna göre bu ifadenin değeri hangisidir?**",
  gorsel: null,
  secenekler: ["6","[[9|2]]","[[27|8]]","[[8|27]]"],
  dogru: 2,
  hatalar: [
    "Payı üsle çarpma: 2 · 3 = 6 alınmış. Üs, kesrin kaç kez çarpılacağını gösterir.",
    "Ters çevirip üssü ikinci kez uygulama: [[3|2]] · 3 = [[9|2]] alınmış. Ters çevrilmiş kesrin 3. kuvveti alınmalıdır.",
    null,
    "Kesri ters çevirmeden üs alma: ([[2|3]])^{3} = [[8|27]] hesaplanmış. Negatif üs kesri ters çevirir."
  ],
  aciklama: `Kesrin negatif kuvvetinde kesir ters çevrilir, üs pozitif olur: ([[a|b]])^{-n} = ([[b|a]])^{n}.
Adım 1: Kesri ters çevir: ([[2|3]])^{-3} = ([[3|2]])^{3}.
Adım 2: Üs pay ve paydaya dağılır: ([[3|2]])^{3} = [[3^{3}|2^{3}]].
Adım 3: Hesapla: [[3^{3}|2^{3}]] = [[27|8]].
Sağlama: ([[2|3]])^{3} = [[8|27]] değerinin çarpmaya göre tersi [[27|8]]'dir.
Sık yapılan hata: Ters çevirmeyi unutmak ya da ters çevirdikten sonra üssü bir daha uygulamak.
Cevap C.`
},
{
  id: "mat-ui-042",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir ilaç prospektüsünde tabletin etken madde miktarı 0,0705 gram olarak yazılıdır. Eczacı bu sayıyı 10'un tam sayı kuvvetleriyle çözümlemek istemektedir.\n**Buna göre doğru çözümleme aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["5 · 10^{-2} + 7 · 10^{-4}","7 · 10^{-1} + 5 · 10^{-3}","7 · 10^{-2} + 5 · 10^{-4}","7 · 10^{-2} + 5 · 10^{-3}"],
  dogru: 2,
  hatalar: [
    "Rakamların basamaklarını yer değiştirme: bu çözümleme 0,0507 sayısına aittir.",
    "Rakamları bir basamak sola kaydırma: bu çözümleme 0,705 sayısına aittir.",
    null,
    "Aradaki 0'ı saymama: 5 rakamı binde birler basamağına yazılmış; bu çözümleme 0,075 sayısına aittir."
  ],
  aciklama: `Ondalık sayının her rakamı, bulunduğu basamağın kuvvetiyle çarpılır; rakamı 0 olan basamağın terimi yazılmaz.
Adım 1: 0,0705 sayısının basamaklarını yaz: onda birler 0, yüzde birler 7, binde birler 0, on binde birler 5.
Adım 2: 7 rakamı yüzde birler basamağında olduğundan terimi 7 · 10^{-2}'dir.
Adım 3: 5 rakamı on binde birler basamağında olduğundan terimi 5 · 10^{-4}'tür.
Adım 4: Çözümleme: 7 · 10^{-2} + 5 · 10^{-4}.
Sağlama: 0,07 + 0,0005 = 0,0705.
Sık yapılan hata: 7'den sonraki 0'ı saymayıp 5'i binde birler basamağına koymak.
Cevap C.`
},
{
  id: "mat-ui-043",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 2,
  soru: "Bir kozmetik firmasının bir yıllık satış geliri 2 000 000 000 TL'dir. Firma bu sayıyı raporunda hem 2 · 10^{m} hem de 20 · 10^{n} biçiminde yazmıştır.\n**Buna göre m + n toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["20","19","18","17"],
  dogru: 3,
  hatalar: [
    "Sıfırlardan birini fazla sayma: m = 10 ve n = 10 alınmış.",
    "Milyarı 10^{10} sanma: m = 10 alınmış ve n = 9 bulunmuş.",
    "20'ye geçerken üssü azaltmayı unutma: n = 9 alınmış; 20 · 10^{9} = 20 000 000 000'dur.",
    null
  ],
  aciklama: `Bir milyar, 1'in yanına dokuz sıfır yazılarak elde edilir: 10^{9}. Başkatsayı 10 katına çıkarsa üs 1 azalır.
Adım 1: 2 000 000 000 sayısında 2'nin arkasında 9 sıfır vardır: 2 · 10^{9}. Öyleyse m = 9.
Adım 2: Başkatsayı 2'den 20'ye çıkınca 10 katı olur; üs 1 azalır: 20 · 10^{8}. Öyleyse n = 8.
Adım 3: Topla: m + n = 9 + 8 = 17.
Sağlama: 20 · 10^{8} = 20 · 100 000 000 = 2 000 000 000.
Sık yapılan hata: Başkatsayıyı büyütürken üssü azaltmayı unutmak.
Cevap D.`
},
{
  id: "mat-ui-044",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir fen laboratuvarında dört örneğin kütlesi gram cinsinden tartılmış ve sonuçlar aşağıda sıralanmıştır. Öğretmen bu sayılardan yalnızca birini 10'un tam sayı kuvvetleriyle çözümlerken 4 · 10^{1} terimini yazmıştır.\n**Buna göre öğretmen kütlesi kaç gram olan örneği çözümlemiştir?**",
  gorsel: null,
  secenekler: ["40,62","6,042","4,26","0,624"],
  dogru: 0,
  hatalar: [
    null,
    "4 rakamı yüzde birler basamağındadır: 6,042 sayısının çözümlemesinde 4 · 10^{-2} terimi bulunur.",
    "4 rakamı birler basamağındadır: 4,26 sayısının çözümlemesinde 4 · 10^{0} terimi bulunur.",
    "4 rakamı binde birler basamağındadır: 0,624 sayısının çözümlemesinde 4 · 10^{-3} terimi bulunur."
  ],
  aciklama: `4 · 10^{1} terimi, 4 rakamının onlar basamağında olduğunu gösterir; değeri 40'tır. Onlar basamağı, virgülün solundaki ikinci basamaktır.
Adım 1: 0,624 sayısında virgülden sonra 6, 2, 4 gelir; 4 üçüncü basamaktadır (10^{-3}). Uygun değil.
Adım 2: 4,26 sayısında 4 birler basamağındadır (10^{0}). Uygun değil.
Adım 3: 6,042 sayısında virgülden sonra 0, 4, 2 gelir; 4 ikinci basamaktadır (10^{-2}). Uygun değil.
Adım 4: 40,62 sayısında 4 onlar basamağındadır (10^{1}). Uygundur.
Sağlama: 40,62 = 4 · 10^{1} + 6 · 10^{-1} + 2 · 10^{-2}; birler basamağı 0 olduğu için 10^{0} terimi yoktur.
Sık yapılan hata: Birler basamağını 10^{1} sanıp bütün basamak kuvvetlerini kaydırmak. Birler basamağı 10^{0}'dır.
Cevap A.`
},
{
  id: "mat-ui-045",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: "Bir bilgisayar oyununda dört kapı vardır. Oyun, üzerindeki ifadenin değeri en küçük olan kapıya girenleri bölümü bitirmiş sayar.\n**Buna göre bölümü bitirmek için hangi kapıya girilmelidir?**",
  gorsel: `<table class="tablo"><tr><th>Kapı</th><th>Üzerindeki ifade</th></tr><tr><td>K</td><td>(−2)<sup>5</sup></td></tr><tr><td>L</td><td>−5<sup>2</sup></td></tr><tr><td>M</td><td>(−3)<sup>2</sup></td></tr><tr><td>N</td><td>2<sup>−5</sup></td></tr></table>`,
  secenekler: ["K","L","M","N"],
  dogru: 0,
  hatalar: [
    null,
    "−25 değerini en küçük sanma: −32 < −25 olduğundan K'nin değeri daha küçüktür.",
    "Negatif tabanlı ifadeyi negatif sanma: çift kuvvette sonuç pozitiftir, (−3)^{2} = 9'dur.",
    "Negatif üslü ifadeyi negatif ya da en küçük sanma: 2^{-5} = [[1|32]] pozitiftir."
  ],
  aciklama: `Dört ifadenin değerini bulup karşılaştıralım.
Adım 1: K: (−2)^{5} = −32. Üs tek, sonuç negatif.
Adım 2: L: −5^{2} = −25. Üs yalnızca 5'e uygulanır, eksi dışarıda kalır.
Adım 3: M: (−3)^{2} = 9. Üs çift, sonuç pozitif.
Adım 4: N: 2^{-5} = [[1|32]]. Pozitif ve çok küçük bir kesir.
Adım 5: Sırala: −32 < −25 < [[1|32]] < 9. En küçük değer K kapısındadır.
Sağlama: İki negatif sayıdan sayı doğrusunda daha solda olan küçüktür: −32, −25'in solundadır.
Sık yapılan hata: Negatif sayılarda büyük görünen sayıyı büyük sanmak. −32, −25'ten küçüktür.
Cevap A.`
},
{
  id: "mat-ui-046",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 2,
  soru: "Bir ağ cihazı her saniyede 8 · 10^{2} veri paketi iletmektedir. Cihaz kesintisiz olarak 5 · 10^{4} saniye çalışmıştır.\n**Buna göre cihazın ilettiği toplam paket sayısının bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["4 · 10^{6}","4 · 10^{7}","4 · 10^{8}","4 · 10^{9}"],
  dogru: 1,
  hatalar: [
    "Başkatsayıyı küçültüp üssü artırmama: 40 · 10^{6} sayısı 4 · 10^{6} diye yazılmış.",
    null,
    "40 sayısını 4 · 10^{2} alma: başkatsayı 40'tan 4'e inerken üs 1 değil 2 artırılmış.",
    "Üsleri çarpma: 2 · 4 = 8 alınmış ve 40 · 10^{8} sayısı 4 · 10^{9} yazılmış."
  ],
  aciklama: `Bilimsel gösterimle yazılmış sayılar çarpılırken başkatsayılar kendi arasında çarpılır, 10'un kuvvetlerinin üsleri toplanır; sonuç gerekirse bilimsel gösterime düzeltilir.
Adım 1: Başkatsayıları çarp: 8 · 5 = 40.
Adım 2: Üsleri topla: 10^{2} · 10^{4} = 10^{6}. Çarpım 40 · 10^{6} olur.
Adım 3: 40, 1 ile 10 arasında değildir. 40 = 4 · 10^{1} yazıp üsleri birleştir: 4 · 10^{1} · 10^{6} = 4 · 10^{7}.
Sağlama: 800 · 50 000 = 40 000 000 = 4 · 10^{7}.
Sık yapılan hata: 40 · 10^{6} sonucunu bilimsel gösterime çevirirken üssü artırmayı unutmak.
Cevap B.`
},
{
  id: "mat-ui-047",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: "Bir öğrenci, hesap makinesi kullanmadan defterine yazdığı işlemi çözmektedir.\n**3 + 2 · 4^{2} − 5^{0} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["34","35","66","79"],
  dogru: 0,
  hatalar: [
    null,
    "Sıfırıncı kuvveti 0 sanma: 5^{0} = 0 alınmış ve 3 + 32 − 0 = 35 bulunmuş.",
    "Üssü çarpımın tamamına uygulama: (2 · 4)^{2} = 64 alınmış ve 3 + 64 − 1 = 66 bulunmuş. Üs yalnızca 4'e uygulanır.",
    "İşlem önceliğini yok sayıp soldan sağa gitme: (3 + 2) · 16 − 1 = 79 bulunmuş. Çarpma, toplamadan önce yapılır."
  ],
  aciklama: `İşlem önceliği şöyledir: önce üsler, sonra çarpma, en son toplama ve çıkarma.
Adım 1: Üsleri hesapla: 4^{2} = 16 ve 5^{0} = 1.
Adım 2: Çarpmayı yap: 2 · 16 = 32.
Adım 3: Soldan sağa topla ve çıkar: 3 + 32 − 1 = 34.
Sağlama: Her adımda önceliği denetle: üs, sonra çarpma, sonra toplama-çıkarma.
Sık yapılan hata: Üssü yalnızca hemen solundaki sayıya değil, çarpımın tamamına uygulamak.
Cevap A.`
},
{
  id: "mat-ui-048",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 2,
  soru: "Bir saç telinin kalınlığı yaklaşık 8 · 10^{-5} metredir. Yeni geliştirilen bir yapay lifin kalınlığı ise 2 · 10^{-6} metredir.\n**Buna göre saç telinin kalınlığı, bu yapay lifin kalınlığının kaç katıdır?**",
  gorsel: null,
  secenekler: ["4 · 10^{-11}","2,5 · 10^{-2}","4 · 10^{0}","4 · 10^{1}"],
  dogru: 3,
  hatalar: [
    "Üsleri toplama ya da işareti yanlış alma: −5 − 6 = −11 hesaplanmış. Bölmede üslerin farkı (−5) − (−6) = 1'dir.",
    "Bölmeyi ters yönde yapma: lifin kalınlığı saç telinin kalınlığına bölünmüş.",
    "10'un kuvvetlerini hesaba katmama: yalnızca 8 ÷ 2 = 4 işlemi yapılmış.",
    null
  ],
  aciklama: `"Kaç katıdır?" sorusunda büyük değer küçük değere bölünür. Bilimsel gösterimde bölme yapılırken başkatsayılar bölünür, 10'un üsleri çıkarılır.
Adım 1: İşlemi kur: (8 · 10^{-5}) ÷ (2 · 10^{-6}).
Adım 2: Başkatsayıları böl: 8 ÷ 2 = 4.
Adım 3: 10'un kuvvetlerini böl: 10^{-5} ÷ 10^{-6} = 10^{(−5)−(−6)} = 10^{1}.
Adım 4: Birleştir: 4 · 10^{1} = 40.
Sağlama: 0,00008 ÷ 0,000002 = 40.
Sık yapılan hata: Negatif üslerin farkını alırken işareti yanlış kullanmak.
Cevap D.`
},
{
  id: "mat-ui-049",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 2,
  soru: "Bir öğrenci defterine 0,0036 sayısını 10'un farklı tam sayı kuvvetleriyle yazmak istemiş ve dört ayrı yazılış denemiştir.\n**Buna göre bu yazılışlardan hangisi 0,0036 sayısına eşittir?**",
  gorsel: null,
  secenekler: ["36 · 10^{-1}","3,6 · 10^{-1}","36 · 10^{-3}","360 · 10^{-5}"],
  dogru: 3,
  hatalar: [
    "Virgülü üç basamak eksik kaydırma: 36 · 10^{-1} = 3,6'dır.",
    "Virgülü iki basamak eksik kaydırma: 3,6 · 10^{-1} = 0,36'dır.",
    "Virgülü bir basamak eksik kaydırma: 36 · 10^{-3} = 0,036'dır.",
    null
  ],
  aciklama: `Her yazılışı ondalık sayıya çevirip 0,0036 ile karşılaştıralım. 10'un negatif kuvveti, virgülü o kadar basamak sola kaydırır.
Adım 1: 360 · 10^{-5}: 360,0 sayısında virgül 5 basamak sola gider → 0,00360 = 0,0036. Eşittir.
Adım 2: 36 · 10^{-3}: virgül 3 basamak sola gider → 0,036.
Adım 3: 3,6 · 10^{-1}: virgül 1 basamak sola gider → 0,36.
Adım 4: 36 · 10^{-1}: virgül 1 basamak sola gider → 3,6.
Sağlama: 360 · 10^{-5} = 3,6 · 10^{2} · 10^{-5} = 3,6 · 10^{-3} = 0,0036.
Sık yapılan hata: Virgülün kaç basamak kaydığını yanlış saymak.
Cevap D.`
},
{
  id: "mat-ui-050",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 3,
  soru: "Bir hava kalitesi çalışmasında dört toz tanesinin uzunluğu ölçülmüştür. Tabloda bazı uzunluklar metre, bazıları milimetre cinsinden verilmiştir (1 mm = 10^{-3} m). Araştırmacı, uzunluğu 4 · 10^{-5} metreden __küçük__ olan taneleri solunum riski taşımayan grup olarak ayıracaktır.\n**Buna göre bu gruba kaç tane girer?**",
  gorsel: `<table class="tablo"><tr><th>Tane</th><th>Uzunluk</th></tr><tr><td>K</td><td>6,5 · 10<sup>−5</sup> m</td></tr><tr><td>L</td><td>0,04 mm</td></tr><tr><td>M</td><td>3 · 10<sup>−2</sup> mm</td></tr><tr><td>N</td><td>90 · 10<sup>−7</sup> m</td></tr></table>`,
  secenekler: ["1","2","3","4"],
  dogru: 1,
  hatalar: [
    "N'yi büyük sayma: 90 · 10^{-7} sayısını başkatsayısı 90 diye büyük sanmak. Oysa 90 · 10^{-7} = 9 · 10^{-6}'dır ve sınırdan küçüktür.",
    null,
    "Sınıra eşit olanı da sayma: 0,04 mm = 4 · 10^{-5} m sınıra eşittir, ondan küçük değildir.",
    "K'yi de sayma: 6,5 · 10^{-5} sayısı 4 · 10^{-5} sayısından büyüktür."
  ],
  aciklama: `Dört uzunluğu da metre cinsinden, aynı üsle yazıp sınır olan 4 · 10^{-5} m ile karşılaştırırız.
Adım 1: K: 6,5 · 10^{-5} m. Üsler eşit, 6,5 > 4 olduğundan K sınırdan büyüktür.
Adım 2: L: 0,04 mm = 4 · 10^{-2} mm = 4 · 10^{-2} · 10^{-3} m = 4 · 10^{-5} m. Sınıra eşittir, küçük değildir.
Adım 3: M: 3 · 10^{-2} mm = 3 · 10^{-5} m. 3 < 4 olduğundan sınırdan küçüktür.
Adım 4: N: 90 · 10^{-7} m = 9 · 10^{-6} m. Üssü −6 olduğundan sınırdan küçüktür.
Adım 5: Küçük olanlar M ve N'dir; 2 tane.
Sağlama: M = 0,00003 m, N = 0,000009 m ve sınır 0,00004 m'dir.
Sık yapılan hata: Birimleri çevirmeden ya da sınır durumunu (eşitliği) gözetmeden karşılaştırmak.
Cevap B.`
},
{
  id: "mat-ui-051",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir şeker fabrikasında ayrıtı 2^{4} cm olan küp biçimindeki bir kutu, ayrıtı 2^{2} cm olan küp biçimindeki lokumlarla boşluk kalmayacak biçimde doldurulmaktadır. Her lokumun kütlesi 5 gramdır. Kutunun kendi kütlesi hesaba katılmayacaktır. Fabrikadaki görevli, lokum sayısını bulurken önce bir ayrıta kaç lokum dizildiğini hesaplamakta, sonra bu sayıyı üç boyuta uygulamaktadır.\n**Buna göre kutudaki lokumların toplam kütlesi kaç gramdır?**",
  gorsel: null,
  secenekler: ["20","64","160","320"],
  dogru: 3,
  hatalar: [
    "Oranın küpünü almama: bir ayrıttaki lokum sayısı 4 bulunmuş ve 4 · 5 = 20 yazılmış. Küp için oran üç boyutta da uygulanmalıdır.",
    "Kütleyi hesaba katmama: yalnızca lokum sayısı olan 64 bulunmuş. Soru toplam kütleyi sorar.",
    "Kuvvetin kuvvetinde üsleri toplama: (2^{2})^{3} = 2^{5} = 32 alınmış ve 32 · 5 = 160 bulunmuş. Üssün üssünde üsler çarpılır.",
    null
  ],
  aciklama: `Aynı tabanlı bölmede üsler çıkarılır; üssün üssünde üsler çarpılır. Bir küpün ayrıtı k katına çıkarsa dizilen küp sayısı k^{3} olur; çünkü üç boyutta da k kat yer vardır.
Adım 1: Bir ayrıta sığan lokum sayısını bul: 2^{4} ÷ 2^{2} = 2^{4−2} = 2^{2} = 4.
Adım 2: Üç boyutta da 4 lokum dizilir: (2^{2})^{3} = 2^{2·3} = 2^{6} = 64 lokum.
Adım 3: Toplam kütleyi bul: 64 · 5 = 320 gram.
Sağlama: Kutunun hacmi (2^{4})^{3} = 2^{12}, lokumun hacmi (2^{2})^{3} = 2^{6}; 2^{12} ÷ 2^{6} = 2^{6} = 64.
Sık yapılan hata: (2^{2})^{3} işleminde üsleri 2 + 3 = 5 diye toplamak. Üssün üssünde üsler çarpılır: 2 · 3 = 6.
Cevap D.`
},
{
  id: "mat-ui-052",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: "Kurgusal bir ilacın kandaki miktarı her 4 saatte yarıya düşmektedir. Bir hasta bu ilaçtan 96 mg almıştır. İlacın vücuda emilimi hemen gerçekleşmiş, hasta başka ilaç almamış ve miktar sürekli aynı kuralla azalmıştır.\n**Buna göre ilaç alındıktan 20 saat sonra kandaki ilaç miktarı kaç mg olur?**",
  gorsel: null,
  secenekler: ["3","6","12","19,2"],
  dogru: 0,
  hatalar: [
    null,
    "Bir adım eksik sayma: 96 ÷ 2^{4} = 6 hesaplanmış. 20 saatte 20 ÷ 4 = 5 yarılanma olur.",
    "İki adım eksik sayma: 96 ÷ 2^{3} = 12 hesaplanmış. 20 saatte 20 ÷ 4 = 5 yarılanma olur.",
    "Yarıya düşmeyi 5'e bölme sanma: 96 ÷ 5 = 19,2 hesaplanmış."
  ],
  aciklama: `Miktar her adımda yarıya iniyorsa n adım sonra başlangıç miktarı 2^{n}'e bölünür: 96 ÷ 2^{n} = 96 · 2^{-n}.
Adım 1: Yarılanma sayısını bul: 20 saat ÷ 4 saat = 5 yarılanma.
Adım 2: Kuralı uygula: 96 ÷ 2^{5}.
Adım 3: 2^{5} = 32; 96 ÷ 32 = 3.
Sağlama: Sırayla yarıya böl: 96 → 48 → 24 → 12 → 6 → 3. Beş yarılanma sonunda 3 mg kalır.
Sık yapılan hata: Yarılanma sayısını bir fazla ya da bir eksik saymak.
Cevap A.`
},
{
  id: "mat-ui-053",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 3,
  soru: "Bir süt ürünü fabrikasında bir litre ürüne katılan katkı maddesi miktarı 0,0275 litredir. Kalite raporunda bu miktar üç ayrı biçimde yazılmıştır: 275 · 10^{a}, 2,75 · 10^{b} ve 27,5 · 10^{c} litre. Burada a, b ve c birer tam sayıdır.\n**Buna göre a + b + c toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["9","−7","−8","−9"],
  dogru: 3,
  hatalar: [
    "Üslerin işaretini yanlış alma: 1'den küçük sayıda üsler negatif olur.",
    "Üç yazılıştan ikisinde virgülü bir basamak eksik kaydırma: örneğin a = −3 ve c = −2 alınmış.",
    "Üç yazılıştan birinde virgülü bir basamak eksik kaydırma: örneğin a = −3 alınmış; 275 · 10^{-3} = 0,275'tir.",
    null
  ],
  aciklama: `Virgülü sağa kaydırdıkça başkatsayı büyür, üs aynı sayıda azalır.
Adım 1: 0,0275 → 275: virgül 4 basamak sağa gider. Öyleyse 0,0275 = 275 · 10^{-4} ve a = −4.
Adım 2: 0,0275 → 2,75: virgül 2 basamak sağa gider. Öyleyse 0,0275 = 2,75 · 10^{-2} ve b = −2.
Adım 3: 0,0275 → 27,5: virgül 3 basamak sağa gider. Öyleyse 0,0275 = 27,5 · 10^{-3} ve c = −3.
Adım 4: Topla: (−4) + (−2) + (−3) = −9.
Sağlama: 275 · 10^{-4} = [[275|10 000]] = 0,0275.
Sık yapılan hata: Virgülün kaç basamak kaydığını sayarken bir basamak kaymak.
Cevap D.`
},
{
  id: "mat-ui-054",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir mağazanın kasa ekranında bir alışverişin tutarı TL cinsinden aşağıdaki gibi görünmektedir. Kasiyer çırağına, bu tutardaki 2 rakamlarının basamak değerlerini karşılaştırmasını söylemiştir. Ekrandaki tutarın basamakları tabloda gösterilmiştir.\n**Buna göre soldan 2. rakamın basamak değeri, sağdan 2. rakamın basamak değerinin kaç katıdır?**",
  gorsel: `<table class="tablo"><tr><th>Yüzler</th><th>Onlar</th><th>Birler</th><th>Onda birler</th><th>Yüzde birler</th></tr><tr><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td></tr></table>`,
  secenekler: ["10 000","1000","100","10"],
  dogru: 2,
  hatalar: [
    "Soldan ilk ve sağdan ilk rakamı karşılaştırma: yüzler ile yüzde birler basamağı arasında 10^{4} kat vardır.",
    "Araya giren basamakları fazla sayma: onlar ile onda birler arasındaki fark 10^{1} ÷ 10^{-1} = 10^{2}'dir, 10^{3} değil.",
    null,
    "Komşu basamakları karşılaştırma: iki basamak arasında birden fazla basamak vardır; fark 10 kat değildir."
  ],
  aciklama: `Basamak değeri, rakamın kendi değeri ile basamağının 10'un kuvveti biçimindeki değerinin çarpımıdır.
Adım 1: Soldan 2. rakam onlar basamağındadır: 2 · 10^{1} = 20.
Adım 2: Sağdan 2. rakam onda birler basamağındadır: 2 · 10^{-1} = 0,2.
Adım 3: Oranı bul: 20 ÷ 0,2 = 100.
Sağlama: 10^{1} ÷ 10^{-1} = 10^{1−(−1)} = 10^{2} = 100.
Sık yapılan hata: Aradaki basamak sayısını yanlış saymak. Onlardan onda birlere giderken 10^{1}, 10^{0}, 10^{-1} basamaklarından geçilir; üs farkı 2'dir.
Cevap C.`
},
{
  id: "mat-ui-055",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir laboratuvarda dört bakteri kültüründeki hücre sayıları son sayımda aşağıdaki gibi yazılmıştır. Araştırmacı, en çok hücre içeren kültür ile en az hücre içeren kültürü karşılaştıracaktır.\n**Buna göre en çok hücre içeren kültürdeki hücre sayısı, en az hücre içeren kültürdeki hücre sayısının kaç katıdır?**",
  gorsel: `<table class="tablo"><tr><th>Kültür</th><th>Hücre sayısı</th></tr><tr><td>K</td><td>4<sup>10</sup></td></tr><tr><td>L</td><td>8<sup>6</sup></td></tr><tr><td>M</td><td>2<sup>19</sup></td></tr><tr><td>N</td><td>16<sup>4</sup></td></tr></table>`,
  secenekler: ["2","4","16","20"],
  dogru: 2,
  hatalar: [
    "En az hücreli kültürü M sanma: K ile M arasındaki oran 2^{20} ÷ 2^{19} = 2'dir. Oysa en az hücre N kültüründedir.",
    "En az hücreli kültürü L sanma: K ile L arasındaki oran 2^{20} ÷ 2^{18} = 4'tür. Oysa en az hücre N kültüründedir.",
    null,
    "Büyük üssü cevap sanma: 20, K kültürünün 2'nin kuvveti olarak üssüdür; kat sayısı değildir."
  ],
  aciklama: `Karşılaştırma için dört sayıyı da 2'nin kuvveti olarak yazarız: 4 = 2^{2}, 8 = 2^{3}, 16 = 2^{4}.
Adım 1: K: 4^{10} = (2^{2})^{10} = 2^{20}.
Adım 2: L: 8^{6} = (2^{3})^{6} = 2^{18}.
Adım 3: M: 2^{19}.
Adım 4: N: 16^{4} = (2^{4})^{4} = 2^{16}.
Adım 5: Aynı tabanda üssü büyük olan büyüktür: en çok K (2^{20}), en az N (2^{16}).
Adım 6: Oranı bul: 2^{20} ÷ 2^{16} = 2^{4} = 16.
Sağlama: 2^{16} = 65 536 ve 2^{20} = 1 048 576; 65 536 · 16 = 1 048 576.
Sık yapılan hata: Tabanı büyük olan sayıyı daha büyük sanmak. Önce hepsini aynı tabana çevir.
Cevap C.`
},
{
  id: "mat-ui-056",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 3,
  soru: "Bir şehirde 9 · 10^{6} kişi yaşamaktadır ve her kişi günde ortalama 1,5 · 10^{2} litre su kullanmaktadır. Şehrin barajında 2,7 · 10^{11} litre su vardır ve baraja bundan sonra hiç su girmeyeceği varsayılmaktadır.\n**Buna göre bu baraj, şehrin su ihtiyacını kaç gün karşılar?**",
  gorsel: null,
  secenekler: ["5 · 10^{-3}","2 · 10^{2}","2 · 10^{3}","3 · 10^{4}"],
  dogru: 1,
  hatalar: [
    "Bölmeyi ters yönde yapma: günlük tüketim barajdaki suya bölünmüş.",
    null,
    "Günlük tüketimi 1,35 · 10^{8} yazma: 13,5 · 10^{8} sayısı bilimsel gösterime çevrilirken üs artırılmamış.",
    "Kişi başı tüketimi hesaba katmama: yalnızca 9 · 10^{6} litre günlük tüketim sanılmış."
  ],
  aciklama: `Önce şehrin bir günde kullandığı toplam suyu bulur, sonra barajdaki suyu buna böleriz.
Adım 1: Günlük toplam tüketim: (9 · 10^{6}) · (1,5 · 10^{2}) = 13,5 · 10^{8} = 1,35 · 10^{9} litre.
Adım 2: Gün sayısı: (2,7 · 10^{11}) ÷ (1,35 · 10^{9}).
Adım 3: Başkatsayıları böl: 2,7 ÷ 1,35 = 2. Üsleri çıkar: 10^{11} ÷ 10^{9} = 10^{2}.
Adım 4: Sonuç: 2 · 10^{2} = 200 gün.
Sağlama: 200 · 1,35 · 10^{9} = 2,7 · 10^{11}.
Sık yapılan hata: 13,5 · 10^{8} sayısını bilimsel gösterime çevirirken üssü artırmayı unutmak.
Cevap B.`
},
{
  id: "mat-ui-057",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 3,
  soru: "Kurgusal bir robot yarışmasında iki robotun 10 metrelik parkuru bitirme süreleri saniye cinsinden, çözümlenmiş biçimde aşağıdaki tabloya yazılmıştır. Hakem kurulu, iki süre arasındaki farkı inceleyecek ve sonucu tutanağa geçirecektir.\n**Buna göre Atlas'ın süresi, Boran'ın süresinden kaç saniye kısadır?**",
  gorsel: `<table class="tablo"><tr><th>Robot</th><th>Süre (s)</th></tr><tr><td>Atlas</td><td>9 · 10<sup>0</sup> + 6 · 10<sup>−1</sup> + 4 · 10<sup>−3</sup></td></tr><tr><td>Boran</td><td>9 · 10<sup>0</sup> + 6 · 10<sup>−1</sup> + 4 · 10<sup>−2</sup></td></tr></table>`,
  secenekler: ["36","0,36","0,04","0,036"],
  dogru: 3,
  hatalar: [
    "Virgülleri yok sayma: 9640 − 9604 = 36 hesaplanmış.",
    "Fark terimlerini bir basamak büyük hesaplama: 0,4 − 0,04 = 0,36 bulunmuş.",
    "Yalnızca yüzde birler terimine bakma: 4 · 10^{-2} = 0,04 alınmış; Atlas'taki 4 · 10^{-3} terimi hesaba katılmamış.",
    null
  ],
  aciklama: `Önce iki süreyi ondalık sayıya çevirip sonra farkı alırız.
Adım 1: Atlas: 9 + 0,6 + 0,004 = 9,604 saniye.
Adım 2: Boran: 9 + 0,6 + 0,04 = 9,64 saniye.
Adım 3: Basamakları hizala: 9,640 − 9,604.
Adım 4: Çıkar: 9,640 − 9,604 = 0,036.
Sağlama: 9,604 + 0,036 = 9,640.
Sık yapılan hata: Ondalık basamakları hizalamadan çıkarma yapmak ya da 10^{-3} ile 10^{-2} terimlerinin basamağını karıştırmak.
Cevap D.`
},
{
  id: "mat-ui-058",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 3,
  soru: "Bir yolcu uçağı bir haftada toplam 2,4 · 10^{4} km yol almıştır. Havayolu şirketi bu uzaklığı santimetre cinsinden 24 · 10^{n} biçiminde raporlamıştır. Burada n bir tam sayıdır ve 1 km = 10^{5} cm'dir.\n**Buna göre n kaçtır?**",
  gorsel: null,
  secenekler: ["11","10","9","8"],
  dogru: 3,
  hatalar: [
    "Başkatsayıyı 10 katına çıkarırken üssü iki artırma: 24 · 10^{11} yazılmış.",
    "Başkatsayıyı büyütürken üssü artırma: 2,4 · 10^{9} sayısı 24 · 10^{10} yazılmış.",
    "Başkatsayıyı 24 yapıp üssü azaltmayı unutma: 2,4 · 10^{9} sayısı olduğu gibi 24 · 10^{9} yazılmış.",
    null
  ],
  aciklama: `Önce birimi çeviririz, sonra başkatsayıyı istenen biçime getiririz.
Adım 1: Kilometreyi santimetreye çevir: 2,4 · 10^{4} · 10^{5} = 2,4 · 10^{9} cm.
Adım 2: 2,4'ten 24'e geçerken başkatsayı 10 katına çıkar; üs 1 azalır: 24 · 10^{8}.
Adım 3: Öyleyse n = 8'dir.
Sağlama: 24 · 10^{8} = 2 400 000 000 cm ve 2,4 · 10^{4} km · 100 000 = 2 400 000 000 cm.
Sık yapılan hata: Başkatsayı 10 katına çıkarken üssü azaltmak yerine artırmak.
Cevap D.`
},
{
  id: "mat-ui-059",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: "Bir bilim şenliğindeki deney düzeneğinde üç sensör vardır ve her sensörün ekranında bir üslü ifade görünür. Deneyin skoru, A sensörünün değeri ile B sensörünün değerinin çarpımından C sensörünün değerinin çıkarılmasıyla bulunur. Ekranlarda görünen ifadeler aşağıda gösterilmiştir.\n**Buna göre deneyin skoru kaçtır?**",
  gorsel: `<svg viewBox="0 0 452 130" role="img" aria-label="Üç sensör ekranı: A sensöründe eksi 3'ün 3. kuvveti, B sensöründe eksi 2'nin 2. kuvveti, C sensöründe parantezsiz eksi 3 üssü 2"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="20" y="34" width="130" height="80" rx="10"/><rect x="164" y="34" width="130" height="80" rx="10"/><rect x="308" y="34" width="130" height="80" rx="10"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="85" y="24">A sensörü</text><text x="229" y="24">B sensörü</text><text x="373" y="24">C sensörü</text></g><g fill="currentColor" font-size="24" font-weight="bold" text-anchor="middle"><text x="85" y="86">(−3)<tspan font-size="16" dy="-11">3</tspan></text><text x="229" y="86">(−2)<tspan font-size="16" dy="-11">2</tspan></text><text x="373" y="86">−3<tspan font-size="16" dy="-11">2</tspan></text></g></svg>`,
  secenekler: ["117","99","−99","−117"],
  dogru: 2,
  hatalar: [
    "A sensörünü pozitif alma: (−3)^{3} = 27 alınmış ve 27 · 4 − (−9) = 117 bulunmuş. Tek kuvvette işaret kaybedilmiştir.",
    "A sensörünü pozitif alıp C sensörünü de 9 alma: 27 · 4 − 9 = 99 bulunmuş. İki işaret hatası vardır.",
    null,
    "C sensörünü pozitif alma: −3^{2} = 9 alınmış ve −108 − 9 = −117 bulunmuş. Parantez olmadığı için −3^{2} = −9'dur."
  ],
  aciklama: `Üç sensörün değerini ayrı ayrı hesaplayıp skor kuralına göre birleştirelim.
Adım 1: A sensörü: (−3)^{3} = −27. Parantezin içindeki eksi işareti tabana dâhildir ve üs tektir.
Adım 2: B sensörü: (−2)^{2} = 4. Üs çifttir.
Adım 3: C sensörü: −3^{2} = −9. Parantez yoktur, üs yalnızca 3'e uygulanır.
Adım 4: Çarpımı bul: (−27) · 4 = −108.
Adım 5: C sensörünün değerini çıkar: −108 − (−9) = −108 + 9 = −99.
Sağlama: −99 + (−9) = −108 olur; kural doğru işlenmiştir.
Sık yapılan hata: −3^{2} ifadesini (−3)^{2} = 9 sanmak ve ardından 9'u çıkarmak.
Cevap C.`
},
{
  id: "mat-ui-060",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: "Bir robot, sayı doğrusunda 0 noktasından hareket etmeye başlamaktadır. Robotun n. hamlesinde hareketi (−1)^{n+1} · 2 birimdir; sonuç negatifse robot sola, pozitifse sağa gider. Hamle sayıları 1'den başlar. Örneğin 1. hamlede (−1)^{2} · 2 = 2 olduğundan robot 2 birim sağa, 2. hamlede (−1)^{3} · 2 = −2 olduğundan 2 birim sola gider. Robot ardışık 15 hamle yapmıştır.\n**Buna göre robot 15 hamlenin sonunda hangi noktadadır?**",
  gorsel: null,
  secenekler: ["2","0","−2","−30"],
  dogru: 0,
  hatalar: [
    null,
    "Son hamleyi yok sayma: 14 hamlede robot 0 noktasındadır; 15. hamle de hesaba katılmalıdır.",
    "İlk hamleyi sola sanma: (−1)^{2} = −1 alınmış. Oysa (−1)^{2} = 1'dir ve tek sayılı hamleler sağa gider.",
    "Bütün hamleleri sola doğru sayma: 15 · (−2) = −30 bulunmuş. Tek sayılı hamleler sağa gider."
  ],
  aciklama: `(−1)'in kuvvetlerinde üs tekse sonuç −1, çiftse 1'dir. Burada üs n + 1 olduğundan n tek olunca üs çift olur ve hamle sağa gider.
Adım 1: 1'den 15'e kadar 8 tek ve 7 çift sayı vardır.
Adım 2: n tek ise n + 1 çifttir: (−1)^{n+1} = 1, robot 2 birim sağa gider. 8 hamle için 8 · 2 = 16.
Adım 3: n çift ise n + 1 tektir: (−1)^{n+1} = −1, robot 2 birim sola gider. 7 hamle için 7 · (−2) = −14.
Adım 4: Toplam konum: 16 + (−14) = 2.
Sağlama: İlk 14 hamle 7 sağa + 7 sola gidiş olduğundan robot 0'a döner; 15. hamle onu 2 birim sağa götürür: 2.
Sık yapılan hata: Hamle sayısını çift sanıp robotun 0'a döndüğünü düşünmek.
Cevap A.`
},
{
  id: "mat-ui-061",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: "Bir kaçış odası oyununda çıkış kapısının şifresi, oyunculara gösterilen dört kapıdaki ifadelerin değerlerinin toplamıdır. Kapılardaki ifadeler aşağıda gösterilmiştir. Oyuncular şifreyi doğru bulamazsa kapı açılmamaktadır.\n**Buna göre çıkış kapısının şifresi kaçtır?**",
  gorsel: `<svg viewBox="0 0 524 130" role="img" aria-label="Dört kapı: eksi 1'in 2026. kuvveti, 0'ın 5. kuvveti, eksi 5'in 0. kuvveti ve eksi parantez eksi 2'nin 3. kuvveti"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="20" y="34" width="112" height="80" rx="10"/><rect x="146" y="34" width="112" height="80" rx="10"/><rect x="272" y="34" width="112" height="80" rx="10"/><rect x="398" y="34" width="112" height="80" rx="10"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="76" y="24">1. kapı</text><text x="202" y="24">2. kapı</text><text x="328" y="24">3. kapı</text><text x="454" y="24">4. kapı</text></g><g fill="currentColor" font-size="24" font-weight="bold" text-anchor="middle"><text x="76" y="86">(−1)<tspan font-size="16" dy="-11">2026</tspan></text><text x="202" y="86">0<tspan font-size="16" dy="-11">5</tspan></text><text x="328" y="86">(−5)<tspan font-size="16" dy="-11">0</tspan></text><text x="454" y="86">−(−2)<tspan font-size="16" dy="-11">3</tspan></text></g></svg>`,
  secenekler: ["10","9","8","−6"],
  dogru: 0,
  hatalar: [
    null,
    "Sıfırıncı kuvveti 0 sanma: (−5)^{0} = 0 alınmış ve 1 + 0 + 0 + 8 = 9 bulunmuş.",
    "Çift üssü negatif alma: (−1)^{2026} = −1 alınmış ve −1 + 0 + 1 + 8 = 8 bulunmuş.",
    "Dıştaki eksi işaretini uygulamama: 4. kapı −8 alınmış. (−2)^{3} = −8'dir ve önündeki eksiyle +8 olur; 1 + 0 + 1 − 8 = −6 bulunmuş."
  ],
  aciklama: `Dört kapıdaki ifadeyi ayrı ayrı hesaplayıp toplarız.
Adım 1: 2026 çift olduğu için (−1)^{2026} = 1.
Adım 2: 0'ın pozitif kuvveti 0'dır: 0^{5} = 0.
Adım 3: Sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir: (−5)^{0} = 1.
Adım 4: (−2)^{3} = −8; önündeki eksi işareti bunu +8 yapar: −(−8) = 8.
Adım 5: Topla: 1 + 0 + 1 + 8 = 10.
Sağlama: Dört değer 1, 0, 1 ve 8'dir; toplamları 10'dur.
Sık yapılan hata: Sıfırıncı kuvveti 0 sanmak ya da dıştaki eksi işaretini unutmak.
Cevap A.`
},
{
  id: "mat-ui-062",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 3,
  soru: "Bir çöp toplama tesisinin bir yıllık çöp miktarı 1,2 · 10^{5} kilogramdır. Tesisin yıllık raporunda bu miktar, a bir tam sayı olmak üzere 12 · 10^{a+2} kilogram biçiminde de yazılmıştır. Rapordaki iki yazılış aynı miktarı gösterir.\n**Buna göre a kaçtır?**",
  gorsel: null,
  secenekler: ["1","2","3","4"],
  dogru: 1,
  hatalar: [
    "Üssü gereğinden fazla azaltma: a + 2 = 3 alınmış. Başkatsayı 10 katına çıktığı için üs yalnızca 1 azalır.",
    null,
    "Üssü hiç değiştirmeme: a + 2 = 5 alınmış. Başkatsayı 1,2'den 12'ye çıktığında üs de değişmelidir.",
    "a + 2 ifadesini yok sayıp üssü a sanma: a = 4 alınmış. Üs a + 2'dir."
  ],
  aciklama: `Başkatsayı 10 katına çıkarsa üs 1 azalır.
Adım 1: 1,2 · 10^{5} sayısını başkatsayısı 12 olacak biçimde yaz: 1,2'den 12'ye geçerken başkatsayı 10 katına çıkar, üs 1 azalır: 12 · 10^{4}.
Adım 2: Rapordaki üs a + 2'dir; bu 4'e eşit olmalıdır: a + 2 = 4.
Adım 3: Buradan a = 2 bulunur.
Sağlama: a = 2 için 12 · 10^{4} = 120 000 = 1,2 · 10^{5}.
Sık yapılan hata: 12 · 10^{4} yazılışındaki 4'ü doğrudan a sanmak. Üs, a + 2 ifadesidir.
Cevap B.`
},
{
  id: "mat-ui-063",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 3,
  soru: "Sızdıran bir musluktan saniyede 2,5 · 10^{-3} litre su akmaktadır. Musluk, tamir edilmeden 8 · 10^{4} saniye boyunca aynı hızla su akıtmıştır.\n**Buna göre bu sürede boşa akan su miktarının bilimsel gösterimi, litre cinsinden aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2 · 10^{-12}","2 · 10^{1}","2 · 10^{2}","2 · 10^{3}"],
  dogru: 2,
  hatalar: [
    "Üsleri çarpma: (−3) · 4 = −12 alınmış. Çarpımda üsler toplanır.",
    "Başkatsayıyı küçültüp üssü artırmama: 20 · 10^{1} sayısı 2 · 10^{1} diye yazılmış.",
    null,
    "Başkatsayıyı düzeltirken üssü iki kez artırma: 20 = 2 · 10^{1} yerine 2 · 10^{2} alınıp 10^{1} ile çarpılmış."
  ],
  aciklama: `Toplam su, hız ile süre çarpılarak bulunur. Bilimsel gösterimde başkatsayılar çarpılır, üsler toplanır.
Adım 1: Başkatsayıları çarp: 2,5 · 8 = 20.
Adım 2: Üsleri topla: (−3) + 4 = 1; çarpım 20 · 10^{1} olur.
Adım 3: 20 sayısı 10'dan büyük olduğu için 20 = 2 · 10^{1} yaz: 2 · 10^{1} · 10^{1} = 2 · 10^{2}.
Sağlama: 0,0025 · 80 000 = 200 litre ve 2 · 10^{2} = 200.
Sık yapılan hata: 20 · 10^{1} çarpımını düzeltirken 20'nin içindeki 10^{1} çarpanını üsse eklemeyi unutmak.
Cevap C.`
},
{
  id: "mat-ui-064",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir kimya laboratuvarında hazırlanan bir çözeltinin hacmi litre cinsinden 3 · 10^{2} + 6 · 10^{0} + 5 · 10^{-1} + 8 · 10^{-3} biçiminde çözümlenmiştir. Laborant, çözeltinin hacmini tam 306,578 litreye tamamlamak için içine bir miktar daha çözelti eklemiştir.\n**Buna göre eklenen miktar aşağıdaki terimlerden hangisiyle gösterilir?**",
  gorsel: null,
  secenekler: ["7 · 10^{-3}","7 · 10^{-2}","7 · 10^{-1}","7 · 10^{0}"],
  dogru: 1,
  hatalar: [
    "Eklenen rakamı binde birler basamağına koyma: 7 · 10^{-3} = 0,007'dir.",
    null,
    "Eklenen rakamı onda birler basamağına koyma: 7 · 10^{-1} = 0,7'dir.",
    "Eklenen rakamı birler basamağına koyma: 7 · 10^{0} = 7'dir."
  ],
  aciklama: `Önce çözümlemeyi ondalık sayıya çevirir, sonra hedefle arasındaki farka bakarız.
Adım 1: Çözeltinin ilk hacmi: 300 + 6 + 0,5 + 0,008 = 306,508 litre.
Adım 2: Hedef hacim 306,578 litredir. Farkı bul: 306,578 − 306,508 = 0,07.
Adım 3: 0,07 sayısı yüzde birler basamağındadır: 0,07 = 7 · 10^{-2}.
Sağlama: 306,508 + 0,07 = 306,578.
Sık yapılan hata: Farktaki 7 rakamının hangi basamakta olduğunu yanlış saymak. İki sayı yalnızca yüzde birler basamağında ayrılır.
Cevap B.`
},
{
  id: "mat-ui-065",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 4,
  soru: "Bir kuruluşun kayıt numarası 2^{12} · 5^{10} sayısına eşittir. Kuruluş bu sayıyı hesap makinesi olmadan, 10'un kuvvetinden yararlanarak yazmak istemektedir.\n**Buna göre bu kayıt numarası kaç basamaklı bir doğal sayıdır?**",
  gorsel: null,
  secenekler: ["10","11","12","22"],
  dogru: 1,
  hatalar: [
    "4 çarpanını unutma: 2^{12} · 5^{10} = 10^{10} alınmış. Oysa iki çarpanın üsleri farklıdır, 2^{2} = 4 kalır.",
    null,
    "Büyük üsle sayının basamak sayısını karıştırma: 2^{12} · 5^{12} = 10^{12} gibi düşünülmüş; oysa 5'in üssü 10'dur.",
    "Üsleri toplayıp basamak sayısı sanma: 12 + 10 = 22 alınmış."
  ],
  aciklama: `2 ile 5'in aynı sayıda kuvvetleri çarpılırsa 10'un kuvveti elde edilir: 2^{k} · 5^{k} = 10^{k}.
Adım 1: 2^{12} sayısını iki çarpana ayır: 2^{12} = 2^{2} · 2^{10}.
Adım 2: Sayıyı yeniden yaz: 2^{12} · 5^{10} = 2^{2} · 2^{10} · 5^{10}.
Adım 3: Üsleri eşit olanları birleştir: 2^{10} · 5^{10} = 10^{10}.
Adım 4: Geriye kalan çarpan: 2^{2} = 4. Sayı 4 · 10^{10} = 40 000 000 000'dır.
Adım 5: Rakamları say: 4 ve on sıfır; toplam 11 basamak.
Sağlama: Üs n ise a · 10^{n} sayısı (a tek basamaklıysa) n + 1 basamaklıdır: 10 + 1 = 11.
Sık yapılan hata: Geriye kalan 2^{2} çarpanını unutup yalnızca 10^{10}'a bakmak.
Cevap B.`
},
{
  id: "mat-ui-066",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: "Bir güvenlik sisteminde kullanıcının şifresi, 3^{2027} + 7^{2027} sayısının birler basamağındaki rakam olarak belirlenmiştir. 3'ün kuvvetlerinin birler basamağı 3, 9, 7, 1, 3, 9, 7, 1, … diye dörder dörder yinelenir. 7'nin kuvvetlerinde ise birler basamağı 7, 9, 3, 1, 7, 9, 3, 1, … biçiminde tekrar eder. Sistem, hesap makinesi olmadan şifrenin bulunabilmesi için bu tekrarı kullanmaktadır.\n**Buna göre sistemin şifresi kaçtır?**",
  gorsel: null,
  secenekler: ["8","4","2","0"],
  dogru: 3,
  hatalar: [
    "Kalanı 3 yerine 2 alma: iki sayının da birler basamağı 9 alınmış ve 9 + 9 = 18'in birler basamağı 8 bulunmuş.",
    "7'nin kuvvetinde 3'ün tekrarını kullanma: iki sayının da birler basamağı 7 alınmış ve 7 + 7 = 14'ün birler basamağı 4 bulunmuş.",
    "Kalan 3'ü 4. rakam sayma: iki sayının da birler basamağı 1 alınmış ve 1 + 1 = 2 bulunmuş.",
    null
  ],
  aciklama: `Tekrar uzunluğu 4 olduğundan üssü 4'e böleriz; kalan, tekrarın kaçıncı rakamının geldiğini söyler.
Adım 1: 2027 ÷ 4 = 506 kalan 3. Kalan 3 ise listede 3. rakam alınır.
Adım 2: 3'ün kuvvetlerinde liste 3, 9, 7, 1 olduğundan 3. rakam 7'dir. 3^{2027} sayısının birler basamağı 7.
Adım 3: 7'nin kuvvetlerinde liste 7, 9, 3, 1 olduğundan 3. rakam 3'tür. 7^{2027} sayısının birler basamağı 3.
Adım 4: Birler basamaklarını topla: 7 + 3 = 10. Toplamın birler basamağı 0'dır.
Sağlama: 3^{3} = 27 ve 7^{3} = 343; birler basamakları 7 ve 3. Üs 2027 de 4'e bölününce aynı kalanı (3) verdiği için aynı rakamlar gelir.
Sık yapılan hata: Kalanı yanlış kullanmak. Kalan 0 olsaydı tekrarın son rakamı (1) alınırdı.
Cevap D.`
},
{
  id: "mat-ui-067",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 4,
  soru: "Bir yayınevi, bir romanın ilk 4 haftada toplam 3 · 10^{6} adet sattığını, bir şiir kitabının ise ilk 2 haftada toplam 4 · 10^{4} adet sattığını açıklamıştır. Her iki kitabın satış hızının bu dönemlerde haftalar boyunca sabit kaldığı varsayılmaktadır.\n**Buna göre romanın haftalık satış adedi, şiir kitabının haftalık satış adedinin kaç katıdır?**",
  gorsel: null,
  secenekler: ["1,5 · 10^{2}","7,5 · 10^{1}","3,75 · 10^{1}","1,875 · 10^{1}"],
  dogru: 2,
  hatalar: [
    "Romanı haftaya bölmeme: 3 · 10^{6} ÷ (4 · 10^{4} ÷ 2) = 1,5 · 10^{2} hesaplanmış.",
    "İki kitabı da haftaya bölmeme: 3 · 10^{6} ÷ 4 · 10^{4} = 7,5 · 10^{1} hesaplanmış.",
    null,
    "Şiir kitabının satışını haftaya bölmeme: (3 · 10^{6} ÷ 4) ÷ (4 · 10^{4}) = 1,875 · 10^{1} hesaplanmış."
  ],
  aciklama: `Önce her kitabın haftalık satışını bulur, sonra oranlarız.
Adım 1: Roman: (3 · 10^{6}) ÷ 4 = 0,75 · 10^{6} = 7,5 · 10^{5} adet/hafta.
Adım 2: Şiir kitabı: (4 · 10^{4}) ÷ 2 = 2 · 10^{4} adet/hafta.
Adım 3: Oranı yaz: (7,5 · 10^{5}) ÷ (2 · 10^{4}).
Adım 4: Başkatsayıları böl: 7,5 ÷ 2 = 3,75. Üsleri çıkar: 10^{5} ÷ 10^{4} = 10^{1}.
Adım 5: Sonuç: 3,75 · 10^{1} = 37,5 kat.
Sağlama: 750 000 ÷ 20 000 = 37,5.
Sık yapılan hata: Toplam satışları süreye bölmeden oranlamak. "Haftalık" ifadesi her iki kitap için de haftaya bölmeyi gerektirir.
Cevap C.`
},
{
  id: "mat-ui-068",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: "Bir hesap makinesi uygulaması, n tam sayısı −2, −1, 0, 1, 2 ve 3 değerlerini aldığında (−2)^{n} ifadesinin değerlerini ondalık sayı olarak hesaplayıp altına bu altı değerin toplamını yazmaktadır. Uygulamanın tablosu, değerler henüz hesaplanmadan aşağıda gösterilmiştir.\n**Buna göre uygulamanın yazacağı toplam kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>n</th><th>−2</th><th>−1</th><th>0</th><th>1</th><th>2</th><th>3</th></tr><tr><td>(−2)<sup>n</sup></td><td>?</td><td>?</td><td>?</td><td>?</td><td>?</td><td>?</td></tr></table>`,
  secenekler: ["−7,25","−5,75","−5,25","−4,25"],
  dogru: 2,
  hatalar: [
    "Sıfırıncı kuvveti −1 alma: (−2)^{0} = −1 alınmış ve toplam −7,25 bulunmuş. Oysa (−2)^{0} = 1'dir.",
    "Çift negatif üssü negatif alma: (−2)^{-2} = −0,25 alınmış ve toplam −5,75 bulunmuş. Oysa (−2)^{-2} = [[1|(−2)^{2}]] = [[1|4]] = 0,25'tir.",
    null,
    "Tek negatif üssün işaretini kaybetme: (−2)^{-1} = 0,5 alınmış ve toplam −4,25 bulunmuş. Oysa (−2)^{-1} = −0,5'tir."
  ],
  aciklama: `Negatif üs tabanın tersini alır; işareti ise üssün tek ya da çift olması belirler.
Adım 1: (−2)^{-2} = [[1|(−2)^{2}]] = [[1|4]] = 0,25.
Adım 2: (−2)^{-1} = [[1|−2]] = −0,5.
Adım 3: (−2)^{0} = 1 ve (−2)^{1} = −2.
Adım 4: (−2)^{2} = 4 ve (−2)^{3} = −8.
Adım 5: Hepsini topla: 0,25 − 0,5 + 1 − 2 + 4 − 8 = −5,25.
Sağlama: Pozitifler 0,25 + 1 + 4 = 5,25; negatifler −0,5 − 2 − 8 = −10,5. 5,25 − 10,5 = −5,25.
Sık yapılan hata: Negatif üslü ifadede işareti ters almak. İşareti yine üssün tek mi çift mi olduğuna bakarak belirle.
Cevap C.`
},
{
  id: "mat-ui-069",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 4,
  soru: "Bir kömür madeninin günlük üretimi, üretim raporunda 3,6 · 10^{a} ton olarak yazılmıştır. Madenin teknik raporunda ise aynı üretim 0,036 · 10^{b} ton olarak gösterilmiştir. Burada a ve b birer tam sayıdır ve iki rapordaki üretim miktarı aynıdır. Ayrıca a + b = 10'dur.\n**Buna göre a kaçtır?**",
  gorsel: null,
  secenekler: ["4","5","6","8"],
  dogru: 0,
  hatalar: [
    null,
    "İki yazılışta da aynı üssü alma: a = b = 5 alınmış. Başkatsayılar farklı olduğundan üsler de farklıdır.",
    "Üssü ters yönde değiştirme: b = a − 2 alınmış ve a = 6 bulunmuş. Başkatsayı küçüldüğünde üs artmalıdır.",
    "a + b − 2 gibi bir ifadeyi cevap sanma: 10 − 2 = 8 alınmış."
  ],
  aciklama: `Başkatsayı 100 kat küçülürse (3,6'dan 0,036'ya) üs 2 artar; böylece sayının değeri değişmez.
Adım 1: 3,6'dan 0,036'ya geçerken başkatsayı 100'e bölünmüştür.
Adım 2: Değer aynı kalmalıdır; bu yüzden üs 2 artar: b = a + 2.
Adım 3: a + b = 10 koşuluna yaz: a + (a + 2) = 10.
Adım 4: Sadeleştir: 2a + 2 = 10 → 2a = 8 → a = 4.
Sağlama: a = 4 ve b = 6: 3,6 · 10^{4} = 36 000 ve 0,036 · 10^{6} = 36 000. Üstelik 4 + 6 = 10.
Sık yapılan hata: Başkatsayı küçülürken üssü de küçültmek. Başkatsayı küçülünce üs büyümelidir.
Cevap A.`
},
{
  id: "mat-ui-070",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 4,
  soru: "Bir köyün 5 · 10^{2} hanesinde her hane günde ortalama 6 kilogram çöp çıkarmaktadır. Belediye, 30 gün boyunca biriken çöpü 1,5 · 10^{3} kilogram kapasiteli kamyonlarla taşıyacaktır. Her sefer tek bir kamyonla ve tam dolu olarak yapılacak, her sefer için 2,5 · 10^{2} TL ödenecektir.\n**Buna göre belediyenin 30 günde ödeyeceği toplam tutarın bilimsel gösterimi, TL cinsinden aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["5 · 10^{2}","1,5 · 10^{3}","1,5 · 10^{4}","1,5 · 10^{5}"],
  dogru: 2,
  hatalar: [
    "30 günü hesaba katmama: yalnızca bir günlük çöp için 2 sefer hesaplanmış ve 2 · 250 = 500 bulunmuş.",
    "15 · 10^{3} sayısını 1,5 · 10^{3} yazma: başkatsayı küçülürken üs artırılmamış.",
    null,
    "15 · 10^{3} sayısını 1,5 · 10^{5} yazma: başkatsayı küçülürken üs 2 artırılmış."
  ],
  aciklama: `Önce toplam çöpü, sonra sefer sayısını, en sonda ödenecek tutarı buluruz.
Adım 1: Bir günde çıkan çöp: 5 · 10^{2} · 6 = 3 · 10^{3} kg.
Adım 2: 30 günde çıkan çöp: 3 · 10^{3} · 3 · 10^{1} = 9 · 10^{4} kg.
Adım 3: Sefer sayısı: (9 · 10^{4}) ÷ (1,5 · 10^{3}) = 6 · 10^{1} = 60 sefer.
Adım 4: Toplam tutar: 60 · 2,5 · 10^{2} = 6 · 10^{1} · 2,5 · 10^{2} = 15 · 10^{3}.
Adım 5: 15 sayısını bilimsel gösterime getir: 15 = 1,5 · 10^{1}; sonuç 1,5 · 10^{4} TL.
Sağlama: 60 sefer · 250 TL = 15 000 TL = 1,5 · 10^{4}.
Sık yapılan hata: 15 · 10^{3} sonucunu bilimsel gösterime çevirirken 15'teki 10^{1} çarpanını üse eklemeyi unutmak.
Cevap C.`
},
{
  id: "mat-ui-071",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 4,
  soru: "Bir seramik atölyesinde kenar uzunluğu 2^{-3} metre olan kare biçimli bir karo ile, kısa kenarı 2^{-5} metre olan dikdörtgen biçimli bir fayansın alanları eşittir. Fayansın boyutları aşağıdaki şekilde gösterilmiştir. Ustanın amacı, fayansın uzun kenar uzunluğunu bulup üretim makinesine girmektir.\n**Buna göre fayansın uzun kenarı kaç metredir?**",
  gorsel: `<svg viewBox="0 0 460 190" role="img" aria-label="Kare karo: kenarı 2 üssü eksi 3 metre. Dikdörtgen fayans: kısa kenarı 2 üssü eksi 5 metre, uzun kenarı bilinmiyor"><rect x="30" y="30" width="100" height="100" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="190" y="60" width="170" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="17" text-anchor="middle"><text x="80" y="160">Karo: 2<tspan font-size="13" dy="-7">−3</tspan><tspan dy="7"> m</tspan></text><text x="275" y="50" fill="var(--vurgu)" font-weight="bold">uzun kenar: ?</text><text x="275" y="136">Fayans</text></g><g fill="currentColor" font-size="17"><text x="368" y="88">2<tspan font-size="13" dy="-7">−5</tspan><tspan dy="7"> m</tspan></text></g></svg>`,
  secenekler: ["2^{-11}","2^{-1}","2^{0}","2^{1}"],
  dogru: 1,
  hatalar: [
    "Alanı bölmek yerine çarpma: 2^{-6} · 2^{-5} = 2^{-11} bulunmuş. Bilinmeyen kenar, alanın bilinen kenara bölünmesiyle bulunur.",
    null,
    "Karenin alanını yanlış hesaplama: (2^{-3})^{2} = 2^{-5} alınmış (üsler toplanmış) ve 2^{-5} ÷ 2^{-5} = 2^{0} bulunmuş.",
    "Bölmeyi ters yönde yapma: 2^{-5} ÷ 2^{-6} = 2^{1} bulunmuş. Bilinmeyen kenar için alan, bilinen kenara bölünür."
  ],
  aciklama: `Dikdörtgenin alanı kısa kenar ile uzun kenarın çarpımıdır. Alanlar eşit olduğundan karonun alanı fayansın alanına eşittir.
Adım 1: Karonun alanı: (2^{-3})^{2} = 2^{(−3)·2} = 2^{-6} metrekare.
Adım 2: Fayansın alanı: 2^{-5} · (uzun kenar). Bu da 2^{-6} olmalıdır.
Adım 3: Uzun kenar = alan ÷ kısa kenar = 2^{-6} ÷ 2^{-5}.
Adım 4: Aynı tabanlı bölmede üsler çıkarılır: (−6) − (−5) = −1. Uzun kenar 2^{-1} metredir.
Sağlama: 2^{-1} = 0,5 metre. Fayansın alanı 2^{-5} · 2^{-1} = 2^{-6} olur ve karonun alanına eşittir.
Sık yapılan hata: Karenin alanını (2^{-3})^{2} = 2^{-5} hesaplamak. Üssün üssünde üsler çarpılır, toplanmaz.
Cevap B.`
},
{
  id: "mat-ui-072",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 4,
  soru: "Bir su kuruluşunun yedi yağmur suyu deposu vardır ve depoların kapasiteleri (litre) tabloda üslü ifade olarak verilmiştir. Kuruluş, kapasitesi 2^{6} litreden fazla ve 2^{21} litreden az olan depoları mahalle depoları olarak ayırmıştır. Kapasite sınırları ve depoların kapasiteleri aynı birimle verilmiştir.\n**Buna göre tablodaki depolardan kaç tanesi mahalle deposu olarak ayrılabilir?**",
  gorsel: `<table class="tablo"><tr><th>Depo</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th></tr><tr><th>Kapasite (L)</th><td>8<sup>1</sup></td><td>4<sup>3</sup></td><td>16<sup>2</sup></td><td>8<sup>3</sup></td><td>4<sup>9</sup></td><td>8<sup>5</sup></td><td>8<sup>7</sup></td></tr></table>`,
  secenekler: ["4","5","6","7"],
  dogru: 0,
  hatalar: [
    null,
    "Alt sınıra eşit olan depoyu da sayma: B deposu 4^{3} = 2^{6} litredir; 2^{6} sayısından fazla değildir, eşittir.",
    "İki sınırı da dâhil etme: hem B (4^{3} = 2^{6}) hem G (8^{7} = 2^{21}) sayılmış; bu kapasiteler sınıra eşittir.",
    "Hiçbir depoyu elemeden hepsini sayma: A deposu 8^{1} = 2^{3} litredir ve 2^{6} sayısından küçüktür; B ve G de sınıra eşittir."
  ],
  aciklama: `Tabanları aynı yapıp üsleri karşılaştırırız: aynı tabanda (1'den büyük) üssü büyük olan büyüktür. Bütün kapasiteleri 2'nin kuvveti olarak yazalım.
Adım 1: A: 8^{1} = (2^{3})^{1} = 2^{3}. B: 4^{3} = (2^{2})^{3} = 2^{6}. C: 16^{2} = (2^{4})^{2} = 2^{8}. D: 8^{3} = (2^{3})^{3} = 2^{9}.
Adım 2: E: 4^{9} = (2^{2})^{9} = 2^{18}. F: 8^{5} = (2^{3})^{5} = 2^{15}. G: 8^{7} = (2^{3})^{7} = 2^{21}.
Adım 3: Koşul 2^{6} < kapasite < 2^{21} olduğundan üsler 6'dan büyük, 21'den küçük olmalıdır.
Adım 4: A'nın üssü 3, 6'dan küçüktür; B'nin üssü 6 ve G'nin üssü 21 sınıra eşittir. Bu üçü uygun değildir.
Adım 5: C (8), D (9), E (18) ve F (15) uygundur; 4 depo.
Sağlama: B = 64 alt sınıra, G = 2 097 152 üst sınıra eşittir; C = 256 ve D = 512 ise 64 ile 2 097 152 arasındadır.
Sık yapılan hata: "Fazla" ve "az" sözcüklerindeki sınırı dâhil saymak. Eşit olan kapasite koşulu sağlamaz.
Cevap A.`
},
{
  id: "mat-ui-073",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 4,
  soru: "Ece, üzerinde 0, 3, 5 ve 8 rakamları yazılı dört kartın her birini tam bir kez kullanarak a · 10^{1} + b · 10^{0} + c · 10^{-1} + d · 10^{-2} biçiminde çözümlenen ondalık sayılar oluşturmaktadır. Burada a, b, c ve d bu kartlardaki rakamlardan birini gösterir ve sayının onlar basamağı a olduğundan a ≠ 0'dır. Ece, oluşturabildiği sayıların en büyüğünü ve en küçüğünü bulup farkını alacaktır.\n**Buna göre bu fark kaçtır?**",
  gorsel: null,
  secenekler: ["54,45","54,72","55,28","81,72"],
  dogru: 1,
  hatalar: [
    "Ondalık kısımdaki rakamları ters sıralama: en büyük sayı 85,03 ya da en küçük sayı 30,85 alınmış; fark 54,45 bulunmuş.",
    null,
    "Ondalık kısımlarda büyükten küçüğü çıkarma: 0,58 − 0,30 = 0,28 alınıp tam kısımdan ödünç alınmamış; fark 55,28 bulunmuş.",
    "Onlar basamağına 0 koyma: en küçük sayı 03,58 alınmış (a ≠ 0 koşulu unutulmuş); fark 81,72 bulunmuş."
  ],
  aciklama: `En büyük sayı için büyük rakamlar soldaki (büyük basamaklı) yerlere, en küçük sayı için küçük rakamlar soldaki yerlere konur; ancak onlar basamağı 0 olamaz.
Adım 1: En büyük sayı: a = 8, b = 5, c = 3, d = 0 → 85,30.
Adım 2: En küçük sayı: a 0 olamaz, kalan en küçük rakam 3'tür. a = 3 olunca geriye 0, 5, 8 kalır; küçükten büyüğe dizilir: b = 0, c = 5, d = 8 → 30,58.
Adım 3: Farkı al: 85,30 − 30,58.
Adım 4: Hizalayıp çıkar: 85,30 − 30,58 = 54,72.
Sağlama: 54,72 + 30,58 = 85,30.
Sık yapılan hata: En küçük sayıyı bulurken 0'ı onlar basamağına koymak. Onlar basamağındaki rakam 0 olursa sayı iki basamaklı olmaz.
Cevap B.`
},
{
  id: "mat-ui-074",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 4,
  soru: "Bir depoda iki ayrı malzemenin kütlesi ton cinsinden çözümlenmiş biçimde yazılmıştır: birinci malzemeninki x = 6 · 10^{1} + a · 10^{-1} + 8 · 10^{-3}, ikincisininki y = b · 10^{0} + 5 · 10^{-1} + 7 · 10^{-3}. Burada a ve b birer rakamdır. Depo sorumlusu iki malzemenin toplam kütlesinin x + y = 69,115 ton olduğunu belirtmiştir.\n**Buna göre a · b çarpımı kaçtır?**",
  gorsel: null,
  secenekler: ["9","14","42","48"],
  dogru: 3,
  hatalar: [
    "0,5 terimini hesaba katmama: 0,1a + b = 9,1 alınmış; b = 9 ve a = 1 bulunmuş.",
    "Çarpmak yerine toplama: a + b = 6 + 8 = 14 hesaplanmış, oysa a · b istenmektedir.",
    "Taşan birleri yanlış hesaplama: 0,5 + 0,6 = 1,1 taşmasını 2 sayıp b = 7 alınmış; a = 6 ile çarpım 42 bulunmuş.",
    null
  ],
  aciklama: `Terimleri ondalık sayıya çevirip toplamı 69,115'e eşitleriz.
Adım 1: x + y = 60 + 0,1a + 0,008 + b + 0,5 + 0,007.
Adım 2: Bilinen terimleri birleştir: 60 + 0,008 + 0,5 + 0,007 = 60,515. Öyleyse 60,515 + 0,1a + b = 69,115.
Adım 3: Buradan 0,1a + b = 8,6 olur.
Adım 4: b bir rakam, 0,1a ise 0 ile 0,9 arasında bir değerdir. Toplam 8,6 olacağından b = 8 ve 0,1a = 0,6 olmalıdır; yani a = 6.
Adım 5: a · b = 6 · 8 = 48.
Sağlama: x = 60,608; y = 8,507; toplam 69,115.
Sık yapılan hata: b'yi toplamın birler basamağındaki 9'a eşitlemek. Onda birler terimlerinin toplamı 1'i aştığında birler basamağına taşar.
Cevap D.`
},
{
  id: "mat-ui-075",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 4,
  soru: "Bir öğretmen, aşağıdaki tabloda kartlara yazdığı altı sayıdan hem bilimsel gösterimle yazılmış hem de 10^{-2} sayısından __küçük__ olanları bir kutuya ayıracaktır. Kartların değerleri tabloda verilmiştir.\n**Buna göre öğretmen kutuya kaç kart ayırır?**",
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>Sayı</th></tr><tr><td>1</td><td>4,5 · 10<sup>−3</sup></td></tr><tr><td>2</td><td>9,9 · 10<sup>−2</sup></td></tr><tr><td>3</td><td>0,8 · 10<sup>−1</sup></td></tr><tr><td>4</td><td>1 · 10<sup>−2</sup></td></tr><tr><td>5</td><td>1,2 · 10<sup>−4</sup></td></tr><tr><td>6</td><td>15 · 10<sup>−4</sup></td></tr></table>`,
  secenekler: ["1","2","3","4"],
  dogru: 1,
  hatalar: [
    "Yalnızca bir kartı ayırma: örneğin yalnızca üssü en küçük olan kartı seçme. Birden fazla kart her iki koşulu sağlar.",
    null,
    "Bilimsel gösterim koşulunu unutma ya da sınırı dâhil etme: 6. kart (15 · 10^{-4}) bilimsel değildir; 4. kart ise 10^{-2}'ye eşittir, küçük değildir.",
    "Hem bilimsel gösterim koşulunu hem sınır durumunu atlama: 1., 4., 5. ve 6. kartlar sayılmış."
  ],
  aciklama: `İki koşulu birlikte kontrol ederiz: başkatsayı 1 ≤ a < 10 aralığında mı, ve değer 10^{-2} = 0,01'den küçük mü?
Adım 1: Kart 1: 4,5 · 10^{-3} → bilimsel gösterim; değeri 0,0045 < 0,01. Ayrılır.
Adım 2: Kart 2: 9,9 · 10^{-2} → bilimsel gösterim; değeri 0,099 > 0,01. Ayrılmaz.
Adım 3: Kart 3: 0,8 · 10^{-1} → başkatsayı 1'den küçük, bilimsel gösterim değil. Ayrılmaz.
Adım 4: Kart 4: 1 · 10^{-2} → bilimsel gösterim; değeri tam 0,01, yani 10^{-2}'ye eşit; küçük değildir. Ayrılmaz.
Adım 5: Kart 5: 1,2 · 10^{-4} → bilimsel gösterim; değeri 0,00012 < 0,01. Ayrılır.
Adım 6: Kart 6: 15 · 10^{-4} → başkatsayı 10'dan büyük, bilimsel gösterim değil. Ayrılmaz.
Adım 7: Ayrılan kartlar 1 ve 5; toplam 2.
Sağlama: Kart 6'nın değeri (0,0015) küçük olsa da gösterimi bilimsel değildir; iki koşul birlikte aranır.
Sık yapılan hata: Eşitlik durumunu "küçük" saymak ya da koşullardan birini unutmak.
Cevap B.`
}
);
