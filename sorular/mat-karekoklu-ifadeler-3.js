// Matematik — Kareköklü İfadeler | Tamamlama partisi
// Kademe 1: mat-kk-113…125 · Kademe 2: mat-kk-213…225 · Kademe 3: mat-kk-313…325 · Havuz: mat-kk-013…030
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["karekoklu-ifadeler"] = window.LGS_BANK["karekoklu-ifadeler"] || []).push(
/* ===================== KADEME 1 — KAVRAMA (113…125) ===================== */
{
  id: "mat-kk-113",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Karekökü 15 olan doğal sayı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["30", "150", "196", "225"],
  dogru: 3,
  hatalar: [
    "Sayıyı 15'in 2 katı olarak aldın. Karekök almak ikiye bölmek olmadığı gibi, karesini almak da iki ile çarpmak değildir: 30'un karekökü 15 etmez.",
    "15'i 10 ile çarptın. Aranan sayı 15 · 10 değil, 15 · 15 olmalıdır.",
    "Komşu tam kareyi seçtin: 196 = 14^{2}'dir, yani karekökü 15 değil 14'tür.",
    null
  ],
  aciklama: `Bir sayının karekökü, kendisiyle çarpıldığında o sayıyı veren sayıdır. Öyleyse karekökü 15 olan sayıyı bulmak için 15'in karesini alırsın.
Adım 1: Aranan sayıya x diyelim. √{x} = 15 ise x = 15 · 15 olmalıdır.
Adım 2: Çarpımı yap: 15 · 15 = 225.
Adım 3: Şıkları kontrol et. 196 = 14 · 14 olduğundan karekökü 14'tür; 30 ve 150 ise tam kare bile değildir.
Sağlama: √{225} = 15. Doğru.
Sık yapılan hata: Kare almak ile 2 ile çarpmayı karıştırmak. 15^{2} = 225'tir, 30 değil.
Cevap D.`
},
{
  id: "mat-kk-114",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 1,
  soru: "**√{68} sayısı aşağıdaki doğal sayılardan hangisine en yakındır?**",
  gorsel: null,
  secenekler: ["7", "8", "9", "34"],
  dogru: 1,
  hatalar: [
    "68'i 49 ile 64 arasında sandın. 7^{2} = 49 ve 8^{2} = 64'tür; 68 ikisinden de büyük olduğundan √{68} sayısı 8'den büyüktür.",
    null,
    "Üst komşuyu seçtin. 9^{2} = 81'dir ve 81 − 68 = 13'tür; oysa 68 − 64 = 4'tür. Sayı 64'e çok daha yakındır.",
    "Karekök almayı ikiye bölmekle karıştırdın: 68 : 2 = 34. Oysa 34 · 34 = 1156 eder."
  ],
  aciklama: `Bir karekökü tahmin etmek için sayıyı en yakın iki tam kare arasına yerleştirir, sonra hangisine daha yakın olduğuna bakarsın.
Adım 1: 68'e komşu tam kareleri bul: 8^{2} = 64 ve 9^{2} = 81.
Adım 2: 64 < 68 < 81 olduğundan 8 < √{68} < 9'dur.
Adım 3: Uzaklıkları karşılaştır: 68 − 64 = 4 ve 81 − 68 = 13. Sayı 64'e çok daha yakın olduğundan karekökü de 8'e daha yakındır.
Sağlama: 8,2^{2} = 67,24 ve 8,3^{2} = 68,89'dur. Yani √{68} yaklaşık 8,25'tir; en yakın doğal sayı 8'dir.
Sık yapılan hata: Aralığı bulunca ortada durmak. "Hangisine daha yakın?" sorulduğunda uzaklıkları mutlaka karşılaştır.
Cevap B.`
},
{
  id: "mat-kk-115",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 1,
  soru: "**√{72} ifadesi a√{2} biçiminde yazıldığında a kaç olur?**",
  gorsel: null,
  secenekler: ["6", "8", "36", "70"],
  dogru: 0,
  hatalar: [
    null,
    "72 = 8 · 9 ayrımını yapıp 8'i dışarı çıkardın. Kök dışına yalnızca tam kare çarpanın karekökü çıkar; burada ayrılması gereken çarpan 36'dır.",
    "Tam kare çarpanı doğru buldun ama karekökünü almadan dışarı yazdın. Dışarı çıkan sayı 36 değil √{36} = 6'dır.",
    "Kök içindeki sayıdan 2'yi çıkardın: 72 − 2 = 70. Kök içi ayrılırken çıkarma değil çarpanlara ayırma yapılır."
  ],
  aciklama: `Bir kareköklü ifadeyi sadeleştirmek için kök içindeki sayıyı "tam kare çarpan · kalan" biçiminde yazar, tam kare çarpanın karekökünü dışarı çıkarırsın.
Adım 1: Kök içi 2 kalacak biçimde ayır: 72 = 36 · 2.
Adım 2: Kökü ayır: √{72} = √{36} · √{2}.
Adım 3: Tam kare çarpanın karekökünü al: √{36} = 6. Yani √{72} = 6√{2} ve a = 6'dır.
Sağlama: 6√{2} ifadesini kök içine geri al: 6^{2} · 2 = 36 · 2 = 72. Başladığın sayıya döndün.
Sık yapılan hata: Tam kare çarpanı olduğu gibi dışarı yazmak. 36√{2} ifadesinin kök içi 36^{2} · 2 = 2592 olur, 72 değil.
Cevap A.`
},
{
  id: "mat-kk-116",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 1,
  soru: "**√{3} · √{27} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3√{3}", "√{30}", "9", "81"],
  dogru: 2,
  hatalar: [
    "√{27} = 3√{3} sadeleştirmesini yaptın ama sonucu √{3} ile çarpmayı unuttun; işlemi yarıda bıraktın.",
    "Çarpma yerine kök içlerini topladın: 3 + 27 = 30. Kökler çarpılırken kök içleri çarpılır.",
    null,
    "Kök içlerini doğru çarptın (3 · 27 = 81) ama sonucun karekökünü almayı unuttun. √{81} = 9'dur."
  ],
  aciklama: `İki karekök çarpılırken kök içleri çarpılır ve sonuç tek bir kök altında yazılır: √{a} · √{b} = √{a · b}.
Adım 1: Kök içlerini çarp: √{3} · √{27} = √{3 · 27} = √{81}.
Adım 2: 9^{2} = 81 olduğundan √{81} = 9'dur.
Adım 3: Sonuç bir doğal sayıdır: 9.
Sağlama: Başka yoldan da yapabilirsin: √{27} = 3√{3} olduğundan √{3} · 3√{3} = 3 · (√{3} · √{3}) = 3 · 3 = 9. Aynı sonuç.
Sık yapılan hata: Kök içlerini çarptıktan sonra kökü kaldırmayı unutmak. √{81} ile 81 aynı sayı değildir.
Cevap C.`
},
{
  id: "mat-kk-117",
  kazanim: "M.8.1.3.8",
  kademe: 1,
  zorluk: 1,
  soru: "**π sayısı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "İki tam sayının oranı biçiminde yazılabilen bir rasyonel sayıdır.",
    "Değeri [[22|7]] sayısına tam olarak eşit olan bir rasyonel sayıdır.",
    "Ondalık gösterimi 3,14'te sona eren bir rasyonel sayıdır.",
    "İki tam sayının oranı biçiminde yazılamayan bir irrasyonel sayıdır."
  ],
  dogru: 3,
  hatalar: [
    "π sayısını rasyonel saydın. Rasyonel sayılar iki tam sayının oranı biçiminde yazılabilir; π için böyle bir oran yoktur.",
    "[[22|7]] sayısını π'nin tam değeri sandın. [[22|7]] ≈ 3,142857… yalnızca işlem kolaylığı için kullanılan bir yaklaşık değerdir.",
    "π'nin ondalık gösterimini 3,14'te biten bir sayı sandın. 3,14 de yalnızca bir yaklaşık değerdir; π'nin ondalık gösterimi ne biter ne de tekrar eder.",
    null
  ],
  aciklama: `Rasyonel sayı, iki tam sayının oranı ([[a|b]] biçiminde) yazılabilen sayıdır. Böyle yazılamayan gerçek sayılara irrasyonel sayı denir.
Adım 1: π sayısı bir çemberin çevresinin çapına oranıdır ve değeri 3,14159… biçiminde sürer.
Adım 2: Bu ondalık gösterim ne bir basamakta biter ne de bir bölümü düzenli olarak tekrar eder. Bu yüzden π iki tam sayının oranı biçiminde yazılamaz; irrasyoneldir.
Adım 3: İşlemlerde kolaylık olsun diye π yerine 3; 3,14 ya da [[22|7]] alınabilir. Bunlar π'ye yakın değerlerdir, π'nin kendisi __değildir__.
Sık yapılan hata: "Bir sayıyı yazabiliyorsam rasyoneldir" diye düşünmek. Belirleyici olan sayıyı yazabilmek değil, onu iki tam sayının oranı biçiminde gösterebilmektir. Tam kare olmayan doğal sayıların kareköklerinde de (√{2}, √{5}…) durum aynıdır.
Cevap D.`
},
{
  id: "mat-kk-118",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 1,
  soru: "**Karekökü 0,9 olan sayı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["0,081", "0,18", "0,81", "8,1"],
  dogru: 2,
  hatalar: [
    "9 · 9 = 81 işlemini doğru yaptın ama virgülü iki basamak yerine üç basamak kaydırdın.",
    "Kare almak yerine sayıyı 2 ile çarptın: 0,9 · 2 = 1,8'in yarısı olan 0,18'e ulaştın. Kare almak, sayıyı kendisiyle çarpmaktır.",
    null,
    "81'i buldun ama virgülü hiç kaydırmadın ya da bir basamak kaydırdın. 8,1'in karekökü 0,9 değildir; 0,9 · 0,9 sonucunda virgülden sonra iki basamak olmalıdır."
  ],
  aciklama: `Bir sayının karekökü 0,9 ise o sayı 0,9'un karesidir. Ondalık gösterimlerde kare alırken sayıyı kesre çevirmek işi kolaylaştırır.
Adım 1: 0,9 = [[9|10]] biçiminde yaz.
Adım 2: Karesini al: [[9|10]] · [[9|10]] = [[81|100]].
Adım 3: Ondalık gösterime dön: [[81|100]] = 0,81.
Sağlama: 0,81 = [[81|100]] olduğundan √{0,81} = [[9|10]] = 0,9. Başladığın değere döndün.
Sık yapılan hata: Virgülden sonraki basamak sayısını takip etmemek. Kare alınınca virgülden sonraki basamak sayısı __ikiye katlanır__: 0,9'da bir basamak vardı, 0,81'de iki basamak var.
Cevap C.`
},
{
  id: "mat-kk-119",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 2,
  soru: "**√{12} + √{3} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2√{3}", "√{15}", "3√{3}", "5√{3}"],
  dogru: 2,
  hatalar: [
    "√{12} = 2√{3} sadeleştirmesini doğru yaptın ama ikinci terimi (√{3}) toplamaya katmadın.",
    "Kök içlerini topladın: 12 + 3 = 15. Karekökler toplanırken kök içleri toplanmaz; önce sadeleştirilir, sonra katsayılar toplanır.",
    null,
    "√{12}'yi 4√{3} sandın: 12 = 4 · 3 ayrımında 4'ü karekök almadan dışarı çıkardın. Dışarı çıkan sayı √{4} = 2 olmalıydı."
  ],
  aciklama: `Kareköklü ifadeler ancak kök içleri aynı olduğunda toplanabilir. Bu yüzden önce her terim sadeleştirilir.
Adım 1: √{12}'yi sadeleştir: 12 = 4 · 3 olduğundan √{12} = √{4} · √{3} = 2√{3}.
Adım 2: İkinci terimi yaz: √{3} = 1√{3}. Katsayısı yazılmamış her kökün katsayısı 1'dir.
Adım 3: Kök içleri aynı olduğundan katsayıları topla: 2 + 1 = 3. Sonuç 3√{3}'tür.
Sağlama: √{3} ≈ 1,73 alırsak √{12} ≈ 3,46'dır. 3,46 + 1,73 ≈ 5,19 ve 3√{3} ≈ 5,19. Uyuyor.
Sık yapılan hata: Katsayısı görünmeyen kökü "katsayısız" sanıp işleme katmamak. √{3} teriminin katsayısı 1'dir.
Cevap C.`
},
{
  id: "mat-kk-120",
  kazanim: "M.8.1.3.6",
  kademe: 1,
  zorluk: 2,
  soru: "Bir öğrenci, √{18} sayısını kök içi doğal sayı olan √{a} biçiminde bir sayıyla çarpmış ve sonucu 6 bulmuştur.\n**Buna göre a kaçtır?**",
  gorsel: null,
  secenekler: ["2", "3", "6", "18"],
  dogru: 0,
  hatalar: [
    null,
    "6 sayısını ikiye bölüp 3 buldun. Oysa kurulması gereken eşitlik 18 · a = 36'dır, 18 · a = 6 değildir.",
    "Sonuçta görünen 6'yı doğrudan kök içine yazdın. Kök içindeki çarpım 6 değil, 6'nın karesi olan 36 olmalıdır.",
    "Bir karekökün kendisiyle çarpımının kök içini verdiğini kullandın: √{18} · √{18} = 18. Bu doğru bir kuraldır ama sonucu 18 yapar, 6 yapmaz."
  ],
  aciklama: `İki karekökün çarpımı, kök içlerinin çarpımının kareköküdür: √{a} · √{b} = √{a · b}. Sonucun bir doğal sayıya eşit olması için kök içindeki çarpımın o sayının karesi olması gerekir.
Adım 1: İşlemi yaz: √{18} · √{a} = √{18 · a}.
Adım 2: Sonuç 6 olacağına göre √{18 · a} = 6, yani 18 · a = 6^{2} = 36 olmalıdır.
Adım 3: a'yı bul: a = 36 : 18 = 2.
Sağlama: √{18} · √{2} = √{36} = 6. İstenen sonuca ulaştın.
Sık yapılan hata: Kök içindeki çarpımı doğrudan sonuca eşitlemek. Kökten kurtulmak için sonucun karesini almalısın.
Cevap A.`
},
{
  id: "mat-kk-121",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir fidanlıkta 400 çam fidanı, sıra sayısı ile her sıradaki fidan sayısı birbirine eşit olacak biçimde kare düzende dikilecektir. Dikim planının bir bölümü aşağıda gösterilmiştir.\n**Buna göre bir sırada kaç fidan bulunur?**",
  gorsel: `<svg viewBox="0 0 470 240" role="img" aria-label="Kare düzende dikilecek 400 fidanın planı: sıra sayısı ile bir sıradaki fidan sayısı eşittir."><g fill="var(--vurgu)"><circle cx="70" cy="60" r="7"/><circle cx="115" cy="60" r="7"/><circle cx="160" cy="60" r="7"/><circle cx="205" cy="60" r="7"/><circle cx="70" cy="105" r="7"/><circle cx="115" cy="105" r="7"/><circle cx="160" cy="105" r="7"/><circle cx="205" cy="105" r="7"/><circle cx="70" cy="150" r="7"/><circle cx="115" cy="150" r="7"/><circle cx="160" cy="150" r="7"/><circle cx="205" cy="150" r="7"/></g><text x="248" y="112" font-size="20" fill="currentColor">…</text><text x="137" y="196" font-size="20" text-anchor="middle" fill="currentColor">⋮</text><line x1="70" y1="30" x2="205" y2="30" stroke="var(--vurgu2)" stroke-width="2"/><text x="137" y="22" font-size="15" text-anchor="middle" fill="var(--vurgu2)">bir sıra: ? fidan</text><text x="300" y="70" font-size="16" fill="currentColor" font-weight="bold">Toplam: 400 fidan</text><text x="300" y="100" font-size="15" fill="currentColor">Sıra sayısı = bir sıradaki</text><text x="300" y="122" font-size="15" fill="currentColor">fidan sayısı</text></svg>`,
  secenekler: ["20", "40", "100", "200"],
  dogru: 0,
  hatalar: [
    null,
    "Bir sıradaki fidan sayısını bulup iki katına çıkardın ya da iki sırayı birden saydın. Soru tek bir sıradaki fidan sayısını istiyor.",
    "400'ü 4'e böldün. Kare düzeni dört eşit parçaya ayırmak kenardaki fidan sayısını vermez; 100 bir alan büyüklüğüdür.",
    "Karekök almak yerine toplamı ikiye böldün: 400 : 2 = 200. Oysa 200 · 200 = 40 000 eder."
  ],
  aciklama: `Kare düzende dizilen nesnelerde toplam sayı, bir sıradaki sayının kendisiyle çarpımıdır. Öyleyse bir sıradaki sayı, toplamın kareköküdür.
Adım 1: Bir sıradaki fidan sayısına n diyelim. n sıra ve her sırada n fidan olduğundan n · n = 400'dür.
Adım 2: n = √{400}'dür. 20^{2} = 400 olduğundan n = 20.
Adım 3: Bir sırada 20 fidan bulunur (ve 20 sıra vardır).
Sağlama: 20 · 20 = 400. Toplam fidan sayısı tutuyor.
Sık yapılan hata: Toplamı 2'ye ya da 4'e bölmek. Kare düzende bölen değil, karekök çalışır.
Cevap A.`
},
{
  id: "mat-kk-122",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 2,
  soru: "**√{0,64} + √{0,36} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["0,14", "1", "1,4", "14"],
  dogru: 2,
  hatalar: [
    "Her iki kökte de virgülü bir basamak fazla kaydırdın: 0,08 + 0,06. Oysa √{0,64} = 0,8 ve √{0,36} = 0,6'dır.",
    "Kök içlerini topladın: 0,64 + 0,36 = 1 ve √{1} = 1. Karekökler toplanırken kök içleri toplanmaz.",
    null,
    "Virgülleri hiç dikkate almadan 8 + 6 işlemini yaptın. Kök içindeki sayılar 64 ve 36 değil, 0,64 ve 0,36'dır."
  ],
  aciklama: `Ondalık bir gösterimin karekökünü bulmak için sayıyı kesre çevirir, payın ve paydanın karekökünü ayrı ayrı alırsın.
Adım 1: Birinci terim: 0,64 = [[64|100]] olduğundan √{0,64} = [[8|10]] = 0,8.
Adım 2: İkinci terim: 0,36 = [[36|100]] olduğundan √{0,36} = [[6|10]] = 0,6.
Adım 3: Bulduğun iki sayıyı topla: 0,8 + 0,6 = 1,4.
Sağlama: 0,8 · 0,8 = 0,64 ve 0,6 · 0,6 = 0,36. İki karekök de doğru.
Sık yapılan hata: √{a} + √{b} = √{a + b} sanmak. Burada √{0,64 + 0,36} = √{1} = 1 çıkar ve bu sonuç yanlıştır.
Cevap C.`
},
{
  id: "mat-kk-123",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 2,
  soru: "Bir bilgi yarışmasında yarışmacının önünde üç zarf vardır. Yarışmacı, zarflardaki sayıları çarparak sonucu söyleyecektir. Zarfların üzerindeki sayılar aşağıda verilmiştir.\n**Buna göre yarışmacının söylemesi gereken sonuç kaçtır?**",
  gorsel: `<svg viewBox="0 0 480 170" role="img" aria-label="Üç zarfın üzerinde sırasıyla kök 2, kök 5 ve kök 10 sayıları yazılıdır."><g fill="var(--dolgu)" stroke="currentColor" stroke-width="3"><rect x="30" y="45" width="120" height="80" rx="6"/><rect x="180" y="45" width="120" height="80" rx="6"/><rect x="330" y="45" width="120" height="80" rx="6"/></g><g stroke="currentColor" stroke-width="2" fill="none"><polyline points="30,45 90,90 150,45"/><polyline points="180,45 240,90 300,45"/><polyline points="330,45 390,90 450,45"/></g><g font-size="20" text-anchor="middle" fill="currentColor" font-weight="bold"><text x="90" y="115">√2</text><text x="240" y="115">√5</text><text x="390" y="115">√10</text></g><g font-size="15" text-anchor="middle" fill="var(--vurgu2)"><text x="90" y="35">1. zarf</text><text x="240" y="35">2. zarf</text><text x="390" y="35">3. zarf</text></g><text x="240" y="158" font-size="15" text-anchor="middle" fill="currentColor">Üç sayı çarpılacaktır.</text></svg>`,
  secenekler: ["√{17}", "10", "10√{10}", "100"],
  dogru: 1,
  hatalar: [
    "Çarpma yerine kök içlerini topladın: 2 + 5 + 10 = 17. Kökler çarpılırken kök içleri çarpılır.",
    null,
    "√{2} · √{5} = √{10} adımını doğru yaptın ama son adımda √{10} · √{10} işlemini 10√{10} sandın. Bir karekökün kendisiyle çarpımı kök içindeki sayıyı verir: √{10} · √{10} = 10'dur.",
    "Kök içlerini doğru çarptın (2 · 5 · 10 = 100) ama sonucun karekökünü almayı unuttun."
  ],
  aciklama: `Karekökler çarpılırken kök içleri tek bir kök altında çarpılır: √{a} · √{b} · √{c} = √{a · b · c}.
Adım 1: Zarflardaki sayıları tek kök altında topla: √{2} · √{5} · √{10} = √{2 · 5 · 10}.
Adım 2: Kök içini hesapla: 2 · 5 = 10 ve 10 · 10 = 100. İfade √{100} olur.
Adım 3: Karekökü al: 10^{2} = 100 olduğundan √{100} = 10.
Sağlama: Adım adım da gidebilirsin: √{2} · √{5} = √{10}; sonra √{10} · √{10} = 10. Aynı sonuç.
Sık yapılan hata: √{10} · √{10} işlemini 10√{10} yazmak. Aynı iki karekök çarpılınca kök işareti tamamen kalkar.
Cevap B.`
},
{
  id: "mat-kk-124",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 2,
  soru: "**Aşağıdaki doğal sayılardan hangisinin karekökü 6 ile 7 arasındadır?**",
  gorsel: null,
  secenekler: ["30", "42", "50", "64"],
  dogru: 1,
  hatalar: [
    "Sınırların karelerini almadın. 6^{2} = 36 olduğundan aranan sayı 36'dan büyük olmalıdır; 30 < 36'dır ve √{30} sayısı 6'dan küçüktür.",
    null,
    "Üst sınırı kaçırdın: 7^{2} = 49'dur ve 50 > 49 olduğundan √{50} sayısı 7'den büyüktür.",
    "64'ün kendisinin 6 ile 7 arasındaki bir sayıya yakın olmasına baktın. Oysa 64 = 8^{2} olduğundan karekökü tam olarak 8'dir."
  ],
  aciklama: `Karekökü belli iki sayı arasında olan sayıları bulmak için sınırların karelerini alırsın.
Adım 1: Koşulu yaz: 6 < √{n} < 7.
Adım 2: Her tarafın karesini al: 6^{2} < n < 7^{2}, yani 36 < n < 49 olmalıdır.
Adım 3: Şıkları bu aralıkla karşılaştır. 30 aralığın altında, 50 ve 64 aralığın üstündedir. Yalnızca 42 sayısı 36 ile 49 arasındadır.
Sağlama: 6,5^{2} = 42,25'tir; demek ki √{42} sayısı 6,5'ten biraz küçüktür ve gerçekten 6 ile 7 arasındadır.
Sık yapılan hata: Sayının kendisini 6 ile 7 arasında aramak. Aralıkta olan karekök, kök içindeki sayı değildir.
Cevap B.`
},
{
  id: "mat-kk-125",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir öğrenci, defterine dört kareköklü ifadeyi sadeleştirerek yazmıştır. Öğrencinin yazdıkları aşağıdaki tabloda verilmiştir.\n**Buna göre öğrencinin hangi satırdaki sadeleştirmesi __yanlıştır__?**",
  gorsel: `<table class="tablo"><tr><th>Satır</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Öğrencinin yazdığı</td><td>√18 = 3√2</td><td>√40 = 4√10</td><td>√63 = 3√7</td><td>√75 = 5√3</td></tr></table>`,
  secenekler: ["K satırı", "L satırı", "M satırı", "N satırı"],
  dogru: 1,
  hatalar: [
    "K satırını yanlış sandın. 18 = 9 · 2 ve √{9} = 3 olduğundan √{18} = 3√{2}'dir; bu sadeleştirme doğrudur.",
    null,
    "M satırını yanlış sandın. 63 = 9 · 7 ve √{9} = 3 olduğundan √{63} = 3√{7}'dir; bu sadeleştirme doğrudur.",
    "N satırını yanlış sandın. 75 = 25 · 3 ve √{25} = 5 olduğundan √{75} = 5√{3}'tür; bu sadeleştirme doğrudur."
  ],
  aciklama: `Sadeleştirmede kök içindeki sayı "tam kare çarpan · kalan" biçiminde yazılır ve dışarı, tam kare çarpanın __karekökü__ çıkar.
Adım 1: K satırı: 18 = 9 · 2 → √{18} = √{9} · √{2} = 3√{2}. Doğru.
Adım 2: L satırı: 40 = 4 · 10 → √{40} = √{4} · √{10} = 2√{10}. Öğrenci dışarı √{4} = 2 yerine 4'ü çıkarmış. Yanlış.
Adım 3: M satırı: 63 = 9 · 7 → √{63} = 3√{7}. Doğru.
Adım 4: N satırı: 75 = 25 · 3 → √{75} = 5√{3}. Doğru.
Sağlama: Yanlış olanı kök içine geri alarak da görebilirsin: 4√{10} = √{4^{2} · 10} = √{160}'tır, √{40} değil.
Sık yapılan hata: Tam kare çarpanı karekökünü almadan dışarı çıkarmak. Bu, sayının değerini dört katına çıkarır.
Cevap B.`
},
/* ===================== KADEME 2 — PEKİŞTİRME (213…225) ===================== */
{
  id: "mat-kk-213",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir akvaryumun tabanı dikdörtgen biçimindedir. Tabanın kenar uzunlukları aşağıdaki şekilde verilmiştir.\n**Buna göre akvaryumun taban alanı kaç dm²'dir?**",
  gorsel: `<svg viewBox="0 0 470 210" role="img" aria-label="Dikdörtgen akvaryum tabanı: uzun kenarı kök 50 desimetre, kısa kenarı kök 8 desimetre."><rect x="95" y="35" width="260" height="110" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="225" y="88" font-size="16" text-anchor="middle" fill="currentColor">Akvaryum tabanı</text><text x="225" y="112" font-size="16" text-anchor="middle" fill="currentColor">Alan: ? dm²</text><line x1="95" y1="166" x2="355" y2="166" stroke="var(--vurgu)" stroke-width="2"/><text x="225" y="186" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√50 dm</text><line x1="76" y1="35" x2="76" y2="145" stroke="var(--vurgu)" stroke-width="2"/><text x="45" y="96" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√8 dm</text></svg>`,
  secenekler: ["√{58}", "7√{2}", "20", "400"],
  dogru: 2,
  hatalar: [
    "Çarpma yerine kök içlerini topladın: 8 + 50 = 58. Alan hesabında kök içleri çarpılır.",
    "Kenarları sadeleştirip topladın: 2√{2} + 5√{2} = 7√{2}. Bu, iki kenarın toplamıdır; alan için kenarlar çarpılmalıdır.",
    null,
    "Kök içlerini doğru çarptın (8 · 50 = 400) ama sonucun karekökünü almayı unuttun. √{400} = 20'dir."
  ],
  aciklama: `Dikdörtgenin alanı, iki kenarının çarpımıdır. Kareköklü ifadeler çarpılırken kök içleri çarpılır: √{a} · √{b} = √{a · b}.
Adım 1: Alanı yaz: √{8} · √{50} = √{8 · 50}.
Adım 2: Kök içini hesapla: 8 · 50 = 400. İfade √{400} olur.
Adım 3: Karekökü al: 20^{2} = 400 olduğundan alan 20 dm²'dir.
Sağlama: Kenarları sadeleştirerek de yapabilirsin: √{8} = 2√{2} ve √{50} = 5√{2}'dir. Çarpımları 2 · 5 · (√{2} · √{2}) = 10 · 2 = 20 eder. Aynı sonuç.
Sık yapılan hata: Kök içlerini çarpıp kökü kaldırmayı unutmak. 400 bir kök içi değeridir; alan √{400} = 20'dir.
Cevap C.`
},
{
  id: "mat-kk-214",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir tesisatçı, toplam uzunluğu 5√{3} metre olacak bir boru hattı kuracaktır. Hattın bir bölümünü aşağıdaki şekilde görülen borularla tamamlayacaktır.\n**Buna göre ikinci borunun uzunluğu kaç metredir?**",
  gorsel: `<svg viewBox="0 0 500 170" role="img" aria-label="Toplam uzunluğu 5 kök 3 metre olan boru hattı: birinci boru kök 12 metre, ikinci borunun uzunluğu soruluyor."><rect x="40" y="60" width="160" height="34" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="200" y="60" width="260" height="34" fill="none" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="8 5"/><text x="120" y="84" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">√12 m</text><text x="330" y="84" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text><text x="120" y="46" font-size="15" text-anchor="middle" fill="currentColor">1. boru</text><text x="330" y="46" font-size="15" text-anchor="middle" fill="var(--vurgu)">2. boru</text><line x1="40" y1="118" x2="460" y2="118" stroke="var(--vurgu2)" stroke-width="2"/><text x="250" y="140" font-size="16" text-anchor="middle" fill="var(--vurgu2)" font-weight="bold">Toplam hat: 5√3 m</text></svg>`,
  secenekler: ["2√{3}", "3√{3}", "3√{7}", "7√{3}"],
  dogru: 1,
  hatalar: [
    "√{12} = 2√{3} sadeleştirmesini yapıp orada durdun. 2√{3} birinci borunun uzunluğudur; soru ikinci boruyu istiyor.",
    null,
    "Kök içlerini çıkardın: 5√{3} = √{75} ve √{12} için 75 − 12 = 63, yani √{63} = 3√{7} buldun. Çıkarma kök içlerinde değil katsayılarda yapılır.",
    "Katsayıları çıkaracağına topladın: 5 + 2 = 7. Toplam uzunluktan bir parça çıkarılıyor."
  ],
  aciklama: `Kök içleri aynı olan kareköklü ifadelerde çıkarma, katsayılar üzerinden yapılır: a√{c} − b√{c} = (a − b)√{c}.
Adım 1: Birinci boruyu sadeleştir: 12 = 4 · 3 olduğundan √{12} = 2√{3} m.
Adım 2: İkinci boru = toplam − birinci boru: 5√{3} − 2√{3}.
Adım 3: Kök içleri aynı olduğundan katsayıları çıkar: 5 − 2 = 3. İkinci boru 3√{3} metredir.
Sağlama: 2√{3} + 3√{3} = 5√{3}. Toplam hat uzunluğu tutuyor.
Sık yapılan hata: Ara sonucu (2√{3}) cevap sanmak. Sadeleştirme çözümün ilk adımıdır, cevabın kendisi değildir.
Cevap B.`
},
{
  id: "mat-kk-215",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir spor merkezinde kare biçiminde iki trambolin vardır. Büyük trambolinin alanı 144 m², küçük trambolinin alanı 36 m²'dir.\n**Buna göre büyük trambolinin bir kenarı, küçük trambolinin bir kenarının kaç katıdır?**",
  gorsel: null,
  secenekler: ["2", "4", "6", "108"],
  dogru: 0,
  hatalar: [
    null,
    "Kenarları değil alanları oranladın: 144 : 36 = 4. Alanların oranı, kenarların oranına eşit değildir.",
    "Küçük trambolinin kenar uzunluğunu (6 m) cevap sandın. Soru bir uzunluk değil, kaç kat olduğunu soruyor.",
    "Alanların farkını aldın: 144 − 36 = 108. Kaç kat olduğu sorulduğunda çıkarma değil bölme yapılır."
  ],
  aciklama: `Kare biçimli bir bölgenin kenar uzunluğu, alanının kareköküdür.
Adım 1: Büyük trambolinin kenarı: √{144} = 12 m.
Adım 2: Küçük trambolinin kenarı: √{36} = 6 m.
Adım 3: Kenarları oranla: 12 : 6 = 2. Büyük trambolinin kenarı, küçüğünkinin 2 katıdır.
Sağlama: Kenar 2 katına çıkınca alan 2^{2} = 4 katına çıkar. Gerçekten 36 · 4 = 144'tür; bu da alan oranının (4) neden kenar oranı (2) olmadığını gösterir.
Sık yapılan hata: Alan oranını doğrudan kenar oranı sanmak. Kenar oranı, alan oranının kareköküdür.
Cevap A.`
},
{
  id: "mat-kk-216",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "√{20} sayısı, kök içi doğal sayı olan √{k} biçiminde bir sayıyla çarpılacak ve sonucun bir doğal sayı olması istenmektedir.\n**Buna göre k'nin alabileceği en küçük doğal sayı değeri kaçtır?**",
  gorsel: null,
  secenekler: ["2", "4", "5", "20"],
  dogru: 2,
  hatalar: [
    "20'nin asal çarpanı olduğu için 2'yi seçtin. 20 · 2 = 40'tır ve 40 tam kare değildir; 20 = 2^{2} · 5 ayrımında 2'nin üssü zaten çifttir.",
    "Tam kare olan en küçük sayıyı seçtin. 20 · 4 = 80'dir ve 80 tam kare değildir; çarpanın kendisinin tam kare olması işe yaramaz.",
    null,
    "√{20} · √{20} = 20 yolunu seçtin. Bu gerçekten bir doğal sayı verir ama 20, k'nin alabileceği en küçük değer değildir."
  ],
  aciklama: `İki karekökün çarpımı √{20 · k}'dır. Sonucun doğal sayı olması için 20 · k çarpımının tam kare olması, yani asal çarpanlarının __hepsinin üssünün çift__ olması gerekir.
Adım 1: 20'yi asal çarpanlarına ayır: 20 = 2^{2} · 5.
Adım 2: 2'nin üssü 2'dir (çift), 5'in üssü 1'dir (tek). Eksik olan tek çarpan 5'tir.
Adım 3: En küçük k, bu eksiği tamamlayan sayıdır: k = 5. Böylece 20 · 5 = 100 = 10^{2} olur ve √{100} = 10 bir doğal sayıdır.
Sağlama: √{20} · √{5} = √{100} = 10. Şıklardaki 20 de doğal sayı (20) verir ama 5 < 20 olduğundan en küçük değer 5'tir.
Sık yapılan hata: "Tam kare bir sayıyla çarparsam tam kare olur" diye düşünmek. Belirleyici olan çarpanın kendisi değil, çarpımdaki üslerin çift olmasıdır.
Cevap C.`
},
{
  id: "mat-kk-217",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 2,
  soru: "Bir atölyede kare biçiminde pencere camları kesilmektedir. Bir camın alanı aşağıdaki şekilde verilmiştir.\n**Buna göre bu camın bir kenar uzunluğu kaç santimetredir?**",
  gorsel: `<svg viewBox="0 0 440 230" role="img" aria-label="Kare biçiminde pencere camı; alanı 0,64 metrekaredir, kenar uzunluğu santimetre cinsinden soruluyor."><rect x="100" y="25" width="175" height="175" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><line x1="187" y1="25" x2="187" y2="200" stroke="currentColor" stroke-width="1"/><line x1="100" y1="112" x2="275" y2="112" stroke="currentColor" stroke-width="1"/><text x="187" y="100" font-size="16" text-anchor="middle" fill="currentColor">Pencere camı</text><text x="187" y="138" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 0,64 m²</text><line x1="100" y1="214" x2="275" y2="214" stroke="var(--vurgu)" stroke-width="2"/><text x="187" y="228" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? cm</text><text x="296" y="100" font-size="15" fill="currentColor">Cam kare</text><text x="296" y="122" font-size="15" fill="currentColor">biçimindedir.</text><text x="296" y="152" font-size="15" fill="currentColor">1 m = 100 cm</text></svg>`,
  secenekler: ["8", "64", "80", "800"],
  dogru: 2,
  hatalar: [
    "Kenarı 0,8 m bulup metreyi santimetreye çevirirken 10 ile çarptın. 1 metre 10 santimetre değil, 100 santimetredir.",
    "Alanın virgülünü kaldırıp 64'ü kenar uzunluğu sandın. 64 bir alan değeridir ve birimi m²'dir.",
    null,
    "Birim çevirmede 1 000 ile çarptın: 0,8 · 1 000 = 800. Bu dönüşüm metreden milimetreye geçiştir."
  ],
  aciklama: `Kare biçimli bir yüzeyin kenar uzunluğu, alanının kareköküdür. Ondalık gösterimin karekökü, sayı kesre çevrilerek bulunur.
Adım 1: Kenarı metre cinsinden bul: 0,64 = [[64|100]] olduğundan √{0,64} = [[8|10]] = 0,8 m.
Adım 2: Soru santimetre istiyor; birimi çevir: 1 m = 100 cm olduğundan 0,8 · 100 = 80 cm.
Adım 3: Camın bir kenarı 80 santimetredir.
Sağlama: 80 cm = 0,8 m ve 0,8 · 0,8 = 0,64 m². Alan tutuyor.
Sık yapılan hata: Doğru sayıyı bulup birimi çevirmemek ya da yanlış katsayıyla çevirmek. Soru kökündeki birimi (cm) her zaman son kez kontrol et.
Cevap C.`
},
{
  id: "mat-kk-218",
  kazanim: "M.8.1.3.8",
  kademe: 2,
  zorluk: 2,
  soru: "Bir öğrenci, sayı kümeleri arasındaki ilişkileri anlatan dört cümle yazmıştır.\n**Buna göre öğrencinin yazdığı cümlelerden hangisi __yanlıştır__?**",
  gorsel: null,
  secenekler: [
    "Her doğal sayı aynı zamanda bir rasyonel sayıdır.",
    "Her tam sayı aynı zamanda bir gerçek sayıdır.",
    "Her irrasyonel sayı aynı zamanda bir gerçek sayıdır.",
    "Her gerçek sayı aynı zamanda bir rasyonel sayıdır."
  ],
  dogru: 3,
  hatalar: [
    "Bu cümle doğrudur: 7 sayısı [[7|1]] biçiminde yazılabildiği gibi her doğal sayı iki tam sayının oranı olarak yazılabilir.",
    "Bu cümle doğrudur: gerçek sayılar kümesi tam sayıları da rasyonelleri de irrasyonelleri de kapsar.",
    "Bu cümle doğrudur: gerçek sayılar, rasyonel sayılarla irrasyonel sayıların birleşimidir; √{2} de bir gerçek sayıdır.",
    null
  ],
  aciklama: `Gerçek sayılar kümesi, rasyonel sayılarla irrasyonel sayıların birleşimidir. Rasyonel sayılar iki tam sayının oranı biçiminde yazılabilir; irrasyonel sayılar yazılamaz.
Adım 1: Doğal sayılar → tam sayılar → rasyonel sayılar → gerçek sayılar sıralamasında her küme bir sonrakinin içindedir. Bu yüzden ilk iki cümle doğrudur.
Adım 2: İrrasyonel sayılar da gerçek sayıların bir parçasıdır; üçüncü cümle de doğrudur.
Adım 3: Son cümle ters yöndedir. Her gerçek sayı rasyonel __değildir__: √{3} ve π birer gerçek sayıdır ama iki tam sayının oranı biçiminde yazılamadıkları için rasyonel değildirler.
Sağlama: Tek bir karşı örnek bir genellemeyi çürütmeye yeter; √{3} bunun için yeterlidir.
Sık yapılan hata: Kapsama ilişkisini ters çevirmek. "Her A bir B'dir" doğruyken "her B bir A'dır" genellikle yanlıştır.
Cevap D.`
},
{
  id: "mat-kk-219",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 2,
  soru: "**√{30} sayısı aşağıdaki ondalık gösterimlerden hangisine en yakındır?**",
  gorsel: null,
  secenekler: ["5,2", "5,5", "5,8", "6,1"],
  dogru: 1,
  hatalar: [
    "5,2'yi denemedin: 5,2 · 5,2 = 27,04'tür ve 27,04 sayısı 30'dan 2,96 uzaktır. 5,5'in karesi 30'a çok daha yakındır.",
    null,
    "5,8'i denemedin: 5,8 · 5,8 = 33,64'tür; bu sayı 30'u 3,64 aşar.",
    "6,1'i seçtin ama 6^{2} = 36 > 30 olduğundan √{30} sayısı 6'dan küçüktür; 6,1 ise 6'dan da büyüktür."
  ],
  aciklama: `Bir karekökü ondalık olarak tahmin etmenin en güvenli yolu, şıkların karesini alıp kök içindeki sayıya hangisinin daha yakın olduğuna bakmaktır.
Adım 1: Aralığı belirle: 5^{2} = 25 ve 6^{2} = 36 olduğundan 5 < √{30} < 6'dır. Öyleyse 6,1 elenir.
Adım 2: Şıkların karelerini al: 5,2^{2} = 27,04 · 5,5^{2} = 30,25 · 5,8^{2} = 33,64.
Adım 3: 30'a uzaklıkları karşılaştır: 2,96 · 0,25 · 3,64. En küçük uzaklık 5,5'e aittir.
Sağlama: 5,5 · 5,5 = 30,25 olduğundan √{30} sayısı 5,5'ten çok az küçüktür.
Sık yapılan hata: Aralığın ortasını otomatik olarak cevap sanmak. Burada 5,5 gerçekten en yakın değerdir ama bunu ancak kareleri karşılaştırarak bilebilirsin.
Cevap B.`
},
{
  id: "mat-kk-220",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 3,
  soru: `Bir lojistik deposunun zemini dikdörtgen biçimindedir. Zeminin alanı ve kısa kenarının uzunluğu aşağıdaki şekilde verilmiştir.
**Buna göre deponun uzun kenarı kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 490 215" role="img" aria-label="Dikdörtgen depo zemini: alanı 12 kök 6 metrekare, kısa kenarı 2 kök 3 metre, uzun kenarı soruluyor."><rect x="95" y="35" width="290" height="115" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="240" y="88" font-size="16" text-anchor="middle" fill="currentColor">Depo zemini</text><text x="240" y="115" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 12√6 m²</text><line x1="76" y1="35" x2="76" y2="150" stroke="var(--vurgu)" stroke-width="2"/><text x="42" y="98" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">2√3 m</text><line x1="95" y1="170" x2="385" y2="170" stroke="var(--vurgu)" stroke-width="2"/><text x="240" y="192" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text></svg>`,
  secenekler: ["6√{2}", "6√{3}", "10√{2}", "6√{6}"],
  dogru: 0,
  hatalar: [
    null,
    "Katsayıları doğru böldün ama kök içlerini bölmek yerine çıkardın: 6 − 3 = 3. Bölmede kök içleri de bölünür.",
    "Katsayıları bölmek yerine çıkardın: 12 − 2 = 10. Bölme işleminde katsayılar da bölünür.",
    "Katsayıları böldün ama kök içine hiç dokunmadın. [[√{6}|√{3}]] ifadesi √{6} olarak kalamaz; √{2}'ye sadeleşir."
  ],
  aciklama: `Dikdörtgende bir kenar, alanın diğer kenara bölünmesiyle bulunur. Kareköklü ifadelerde bölme yapılırken katsayılar kendi aralarında, kök içleri kendi aralarında bölünür.
Adım 1: Uzun kenarı yaz: [[12√{6}|2√{3}]].
Adım 2: Katsayıları böl: 12 : 2 = 6.
Adım 3: Kök içlerini böl: [[√{6}|√{3}]] = √{[[6|3]]} = √{2}.
Adım 4: Sonucu birleştir: uzun kenar 6√{2} metredir.
Sağlama: Kenarları çarp: 2√{3} · 6√{2} = (2 · 6) · √{3 · 2} = 12√{6} m². Alan yeniden çıktı.
Sık yapılan hata: Bölmeyi yalnızca katsayılara ya da yalnızca kök içine uygulamak. İkisi de bölünmelidir.
Cevap A.`
},
{
  id: "mat-kk-221",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir okulun 150 öğrencisi, tören alanında sıra sayısı ile her sıradaki öğrenci sayısı eşit olacak biçimde kare düzende dizilecektir. Öğretmen, kare düzeni bozmadan en çok sayıda öğrenciyi dizmek, kalanları ise alanın kenarında bekletmek istemektedir.
**Buna göre kaç öğrenci kenarda bekler?**`,
  gorsel: `<svg viewBox="0 0 480 210" role="img" aria-label="150 öğrenci kare düzende dizilecektir; kare düzene girmeyen öğrenciler kenarda bekleyecektir."><rect x="45" y="40" width="170" height="130" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><g fill="currentColor"><circle cx="80" cy="75" r="6"/><circle cx="115" cy="75" r="6"/><circle cx="150" cy="75" r="6"/><circle cx="185" cy="75" r="6"/><circle cx="80" cy="110" r="6"/><circle cx="115" cy="110" r="6"/><circle cx="150" cy="110" r="6"/><circle cx="185" cy="110" r="6"/><circle cx="80" cy="145" r="6"/><circle cx="115" cy="145" r="6"/><circle cx="150" cy="145" r="6"/><circle cx="185" cy="145" r="6"/></g><text x="130" y="30" font-size="15" text-anchor="middle" fill="var(--vurgu)">kare düzen</text><g fill="var(--vurgu2)"><circle cx="290" cy="110" r="6"/><circle cx="315" cy="110" r="6"/><circle cx="340" cy="110" r="6"/></g><text x="315" y="90" font-size="15" text-anchor="middle" fill="var(--vurgu2)">kenarda bekleyenler</text><text x="380" y="60" font-size="16" fill="currentColor" font-weight="bold">Toplam: 150 öğrenci</text><text x="380" y="150" font-size="15" fill="currentColor">Sıra sayısı = bir sıradaki</text><text x="380" y="172" font-size="15" fill="currentColor">öğrenci sayısı</text></svg>`,
  secenekler: ["6", "19", "29", "75"],
  dogru: 0,
  hatalar: [
    null,
    "13 sıra kurmaya çalıştın: 13^{2} = 169 > 150 olduğundan 13 sıra için öğrenci yetmez. 169 − 150 = 19 eksik olan öğrenci sayısıdır, artan değil.",
    "11 sırada durdun: 11^{2} = 121 ve 150 − 121 = 29. Oysa 12^{2} = 144 ≤ 150 olduğundan 12 sıra daha kurulabilir; en çok öğrencinin dizilmesi isteniyor.",
    "150'yi ikiye böldün. Kare düzende dizilen öğrenci sayısı toplamın yarısı değil, toplamı geçmeyen en büyük tam karedir."
  ],
  aciklama: `Kare düzende dizilen öğrenci sayısı bir tam kare olmalıdır. "En çok öğrenci dizilsin" istendiğine göre 150'yi geçmeyen en büyük tam kareyi bulman gerekir.
Adım 1: 150'ye komşu tam kareleri yaz: 12^{2} = 144 ve 13^{2} = 169.
Adım 2: 144 ≤ 150 < 169 olduğundan en çok 12 sıra ve her sırada 12 öğrenci, yani 144 öğrenci dizilebilir. (Bu, √{150} sayısının 12 ile 13 arasında olması demektir.)
Adım 3: Kenarda bekleyenleri bul: 150 − 144 = 6 öğrenci.
Sağlama: 13 sıra kurulsaydı 169 öğrenci gerekirdi; 19 öğrenci eksik kalırdı. Demek ki 12 sıra doğru seçimdir.
Sık yapılan hata: Karekökü yukarıya yuvarlamak. Eldeki sayıyı __aşmayan__ tam kare arandığında aşağıdaki tam kare alınır.
Cevap A.`
},
{
  id: "mat-kk-222",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 3,
  soru: `Bir sitede kare biçiminde bir çocuk havuzu vardır. Havuzun alanı aşağıdaki şekilde verilmiştir. Site yönetimi, havuzun dört kenarı boyunca kaydırmaz şerit döşeyecektir.
Şerit, 4 metrelik paketler hâlinde satılmakta ve paketler bölünerek satılmamaktadır.
**Buna göre en az kaç paket şerit alınmalıdır?**`,
  gorsel: `<svg viewBox="0 0 450 245" role="img" aria-label="Kare biçimli çocuk havuzunun alanı 30,25 metrekaredir; dört kenarına kaydırmaz şerit döşenecektir."><rect x="95" y="30" width="185" height="185" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="6"/><text x="187" y="110" font-size="16" text-anchor="middle" fill="currentColor">Çocuk havuzu (kare)</text><text x="187" y="140" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 30,25 m²</text><line x1="300" y1="60" x2="326" y2="60" stroke="var(--vurgu)" stroke-width="6"/><text x="334" y="65" font-size="15" fill="var(--vurgu)" font-weight="bold">kaydırmaz şerit</text><text x="300" y="105" font-size="15" fill="currentColor">Şerit dört kenar</text><text x="300" y="127" font-size="15" fill="currentColor">boyunca döşenir.</text><text x="300" y="160" font-size="15" fill="currentColor">Bir paket: 4 m</text><text x="187" y="238" font-size="15" text-anchor="middle" fill="currentColor">Paketler bölünerek satılmaz.</text></svg>`,
  secenekler: ["5", "6", "11", "22"],
  dogru: 1,
  hatalar: [
    "22 : 4 = 5,5 işleminde sonucu aşağıya yuvarladın. 5 paket 20 metredir; 2 metrelik bölüm şeritsiz kalır.",
    null,
    "Çevre yerine iki kenarın toplamını kullandın ya da 22 metreyi 2'ye böldün. Kare dört kenarlıdır ve paket uzunluğu 4 metredir.",
    "Çevre uzunluğunu (22 m) paket sayısı sandın. Paket sayısı için çevre, paket uzunluğuna bölünmelidir."
  ],
  aciklama: `Kare havuzun kenar uzunluğu alanının kareköküdür; şerit uzunluğu ise havuzun çevresi kadardır.
Adım 1: Kenar uzunluğunu bul: 30,25 = [[3025|100]] olduğundan √{30,25} = [[55|10]] = 5,5 m.
Adım 2: Çevreyi hesapla: 4 · 5,5 = 22 m şerit gerekir.
Adım 3: Paket sayısını bul: 22 : 4 = 5,5. Paket bölünerek satılmadığına göre 5 paket yetmez; 6 paket alınmalıdır.
Sağlama: 6 paket 24 metredir; 22 metrelik ihtiyacı karşılar ve 2 metresi artar. 5 paket ise yalnızca 20 metre eder.
Sık yapılan hata: Bölme sonucunda kalan olduğunda aşağıya yuvarlamak. "Yetecek kadar" istendiğinde her zaman yukarı çıkılır.
Cevap B.`
},
{
  id: "mat-kk-223",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir bahçenin ön yüzü, uzunluğu 20√{3} metre olan bir çit hattıyla kapatılacaktır. Hattın bir bölümü, uzunlukları aşağıdaki şekilde verilen üç hazır panelle tamamlanmıştır.
**Buna göre çit hattının kaç metrelik bölümü hâlâ açıktır?**`,
  gorsel: `<svg viewBox="0 0 500 200" role="img" aria-label="Toplam uzunluğu 20 kök 3 metre olan çit hattına kök 27, kök 48 ve kök 75 metrelik üç panel yerleştirilmiştir."><g fill="var(--dolgu)" stroke="currentColor" stroke-width="3"><rect x="30" y="55" width="90" height="55"/><rect x="120" y="55" width="110" height="55"/><rect x="230" y="55" width="130" height="55"/></g><rect x="360" y="55" width="110" height="55" fill="none" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="8 5"/><g font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold"><text x="75" y="90">√27 m</text><text x="175" y="90">√48 m</text><text x="295" y="90">√75 m</text></g><text x="415" y="90" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">açık: ? m</text><g font-size="14" text-anchor="middle" fill="var(--vurgu2)"><text x="75" y="45">1. panel</text><text x="175" y="45">2. panel</text><text x="295" y="45">3. panel</text></g><line x1="30" y1="132" x2="470" y2="132" stroke="var(--vurgu2)" stroke-width="2"/><text x="250" y="155" font-size="16" text-anchor="middle" fill="var(--vurgu2)" font-weight="bold">Çit hattının tamamı: 20√3 m</text></svg>`,
  secenekler: ["8√{3}", "12√{3}", "16√{3}", "32√{3}"],
  dogru: 0,
  hatalar: [
    null,
    "Üç panelin toplamını (12√{3}) cevap sandın. Bu, kapatılan bölümdür; soru açık kalan bölümü istiyor.",
    "Kök içlerini çıkardın: 20√{3} = √{1200} ve 12√{3} = √{432} için 1 200 − 432 = 768 yapıp √{768} = 16√{3} buldun. Çıkarma kök içlerinde değil katsayılarda yapılır.",
    "Çıkarma yerine toplama yaptın: 20 + 12 = 32. Panellerin uzunluğu toplam hattan çıkarılmalıdır."
  ],
  aciklama: `Kök içleri aynı olan ifadeler toplanıp çıkarılabilir. Bu yüzden önce her paneli sadeleştir.
Adım 1: Panelleri sadeleştir: √{27} = 3√{3} · √{48} = 4√{3} · √{75} = 5√{3}.
Adım 2: Kapatılan bölümü bul: 3√{3} + 4√{3} + 5√{3} = 12√{3} m.
Adım 3: Açık kalan bölümü bul: 20√{3} − 12√{3} = 8√{3} m.
Sağlama: √{3} ≈ 1,73 alırsak hattın tamamı ≈ 34,6 m, paneller ≈ 20,8 m, açık kalan ≈ 13,8 m'dir. 8√{3} ≈ 13,86. Uyuyor.
Sık yapılan hata: Ara sonucu (panellerin toplamı) cevap sanmak. Soru kökünün "kapatılan" mı "açık kalan" mı istediğini son kez oku.
Cevap A.`
},
{
  id: "mat-kk-224",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 3,
  soru: `Bir bulmaca uygulamasının ekranında √{60} sayısı görünmektedir. Oyuncu, ekranın altındaki dört düğmeden birine basar ve ekrandaki sayı, düğmenin üzerindeki sayıyla çarpılır. Sonuç tam olarak 30 olursa bölüm tamamlanır.
**Buna göre oyuncu hangi düğmeye basmalıdır?**`,
  gorsel: `<svg viewBox="0 0 470 235" role="img" aria-label="Ekranda kök 60 sayısı görünmektedir; altındaki dört düğmede kök 5, kök 15, kök 30 ve 2 kök 15 sayıları yazılıdır."><rect x="120" y="20" width="230" height="80" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="235" y="58" font-size="15" text-anchor="middle" fill="var(--vurgu2)">Ekrandaki sayı</text><text x="235" y="88" font-size="24" text-anchor="middle" fill="currentColor" font-weight="bold">√60</text><g fill="none" stroke="var(--vurgu)" stroke-width="3"><rect x="25" y="135" width="95" height="55" rx="10"/><rect x="135" y="135" width="95" height="55" rx="10"/><rect x="245" y="135" width="95" height="55" rx="10"/><rect x="355" y="135" width="95" height="55" rx="10"/></g><g font-size="19" text-anchor="middle" fill="currentColor" font-weight="bold"><text x="72" y="172">√5</text><text x="182" y="172">√15</text><text x="292" y="172">√30</text><text x="402" y="172">2√15</text></g><g font-size="14" text-anchor="middle" fill="var(--vurgu2)"><text x="72" y="208">A düğmesi</text><text x="182" y="208">B düğmesi</text><text x="292" y="208">C düğmesi</text><text x="402" y="208">D düğmesi</text></g><text x="235" y="122" font-size="15" text-anchor="middle" fill="currentColor">Sonuç 30 olmalıdır.</text></svg>`,
  secenekler: ["√{5}", "√{15}", "√{30}", "2√{15}"],
  dogru: 1,
  hatalar: [
    "60 · 5 = 300 buldun ve 300'ü tam kare sandın. 17^{2} = 289, 18^{2} = 324 olduğundan 300 tam kare değildir.",
    null,
    "İstenen sonucu (30) doğrudan kök içine yazdın. Kök içindeki çarpımın 30 değil, 30^{2} = 900 olması gerekir.",
    "Katsayıyı kök içine almayı unuttun. 2√{15} = √{60}'tır ve √{60} · √{60} = 60 eder; bu, istenenin iki katıdır."
  ],
  aciklama: `İki karekökün çarpımı √{60 · x}'tir. Sonucun 30 olması için kök içindeki çarpımın 30'un karesi olması gerekir.
Adım 1: Eşitliği kur: √{60} · √{x} = 30 → √{60 · x} = 30 → 60 · x = 30^{2} = 900.
Adım 2: x'i bul: x = 900 : 60 = 15. Yani düğmedeki sayı √{15} olmalıdır.
Adım 3: Denetle: √{60} · √{15} = √{900} = 30. İstenen sonuç çıktı.
Sağlama: Diğer düğmeleri de dene: √{60} · √{5} = √{300} (doğal sayı değil), √{60} · √{30} = √{1800} (doğal sayı değil), √{60} · 2√{15} = 2 · 30 = 60 (30 değil).
Sık yapılan hata: Sonucu kök içine yazmak. Kökten kurtulmak için sonucun karesi alınır.
Cevap B.`
},
{
  id: "mat-kk-225",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir kent bahçesinde, kare biçiminde bir kompost alanı ayrılacaktır. Alanın bir kenarı 7 metreden uzun, 8 metreden kısa olacaktır. Kaydın kolay tutulabilmesi için alanın metrekare cinsinden değerinin bir doğal sayı olması istenmektedir.
**Buna göre bu alan en fazla kaç m² olabilir?**`,
  gorsel: `<svg viewBox="0 0 500 175" role="img" aria-label="Sayı doğrusu: kenar uzunluğu 7 ile 8 metre arasında olduğunda alan 49 ile 64 metrekare arasındadır."><line x1="40" y1="60" x2="460" y2="60" stroke="currentColor" stroke-width="2"/><g stroke="var(--vurgu)" stroke-width="3"><line x1="120" y1="48" x2="120" y2="72"/><line x1="380" y1="48" x2="380" y2="72"/></g><g font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold"><text x="120" y="40">7 m</text><text x="380" y="40">8 m</text></g><text x="250" y="52" font-size="15" text-anchor="middle" fill="currentColor">kenar uzunluğu burada</text><text x="250" y="88" font-size="15" text-anchor="middle" fill="var(--vurgu2)">↓ kare alınır ↓</text><line x1="40" y1="130" x2="460" y2="130" stroke="currentColor" stroke-width="2"/><g stroke="var(--vurgu2)" stroke-width="3"><line x1="120" y1="118" x2="120" y2="142"/><line x1="380" y1="118" x2="380" y2="142"/></g><g font-size="16" text-anchor="middle" fill="var(--vurgu2)" font-weight="bold"><text x="120" y="163">49 m²</text><text x="380" y="163">64 m²</text></g><text x="250" y="124" font-size="15" text-anchor="middle" fill="currentColor">alan burada</text></svg>`,
  secenekler: ["49", "56", "63", "64"],
  dogru: 2,
  hatalar: [
    "Alt sınırı aldın: 49 = 7^{2}'dir ve bu değerde kenar tam 7 metre olur. Oysa kenarın 7 metreden __uzun__ olması isteniyor.",
    "Kenarı 7,5 m alıp 7,5^{2} = 56,25 buldun ve tam sayıya yuvarladın. Kenarın 7,5 olması gerekmiyor; alan 63 m² iken kenar 7,9 metreye yakındır ve koşulu sağlar.",
    null,
    "Üst sınırı dâhil ettin: 64 = 8^{2}'dir ve bu değerde kenar tam 8 metre olur. Oysa kenarın 8 metreden __kısa__ olması isteniyor."
  ],
  aciklama: `Kenar uzunluğu bir aralıkta verilmişse alanın hangi aralıkta olduğunu bulmak için sınırların karesi alınır.
Adım 1: Koşulu yaz: 7 < kenar < 8.
Adım 2: Her tarafın karesini al: 7^{2} < alan < 8^{2}, yani 49 < alan < 64.
Adım 3: Alan bir doğal sayı olacağına göre alabileceği değerler 50, 51, …, 63'tür. Sınırlar eşitsizliğe dâhil olmadığından 49 ve 64 alınamaz.
Adım 4: En büyük değer 63 m²'dir.
Sağlama: Alan 63 m² iken kenar √{63} metredir. 7^{2} = 49 < 63 < 64 = 8^{2} olduğundan √{63} gerçekten 7 ile 8 arasındadır (yaklaşık 7,94).
Sık yapılan hata: Sınır değerleri de saymak. "Uzun/kısa" denmişse sınır dışarıdadır; "en az/en çok" denmişse sınır içeridedir.
Cevap C.`
},
/* ===================== KADEME 3 — LGS AYARI (313…325) ===================== */
{
  id: "mat-kk-313",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir parkta dikdörtgen biçiminde bir yürüyüş yolu yapılmıştır. Yolun alanı ve genişliği aşağıdaki şekilde verilmiştir.
Yolun bir kenarı boyunca, iki uçta da birer tane bulunacak ve aralarındaki uzaklık 2 metre olacak biçimde aydınlatma direkleri dikilecektir.
**Buna göre bu kenara kaç direk dikilir?**`,
  gorsel: `<svg viewBox="0 0 500 215" role="img" aria-label="Dikdörtgen yürüyüş yolunun alanı kök 720 metrekare, genişliği kök 5 metredir; bir kenarına 2 metre aralıklarla direk dikilecektir."><rect x="60" y="70" width="380" height="60" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="250" y="96" font-size="16" text-anchor="middle" fill="currentColor">Yürüyüş yolu</text><text x="250" y="120" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: √720 m²</text><line x1="41" y1="70" x2="41" y2="130" stroke="var(--vurgu)" stroke-width="2"/><text x="24" y="104" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√5 m</text><g fill="var(--vurgu2)"><circle cx="60" cy="55" r="6"/><circle cx="123" cy="55" r="6"/><circle cx="186" cy="55" r="6"/><circle cx="250" cy="55" r="6"/><circle cx="313" cy="55" r="6"/><circle cx="376" cy="55" r="6"/><circle cx="440" cy="55" r="6"/></g><text x="250" y="33" font-size="15" text-anchor="middle" fill="var(--vurgu2)">direkler: aralarında 2 m, iki uçta da direk var</text><line x1="60" y1="152" x2="440" y2="152" stroke="var(--vurgu)" stroke-width="2"/><text x="250" y="174" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text><text x="250" y="200" font-size="15" text-anchor="middle" fill="currentColor">Direkler bu kenar boyunca dikilecektir.</text></svg>`,
  secenekler: ["6", "7", "12", "24"],
  dogru: 1,
  hatalar: [
    "Aralık sayısını (12 : 2 = 6) direk sayısı sandın. İki uçta da direk bulunduğu için direk sayısı aralık sayısından bir fazladır.",
    null,
    "Yolun uzunluğunu (12 m) cevap sandın. 12 bir uzunluk değeridir; direk sayısı değildir.",
    "Uzunluğu 2 ile böleceğine çarptın: 12 · 2 = 24. Aralık uzunluğu 2 metre olduğuna göre bölme yapılmalıdır."
  ],
  aciklama: `Dikdörtgende bir kenar, alanın diğer kenara bölünmesiyle bulunur. Kareköklerde bölme, kök içlerinin bölümünün karekökü alınarak yapılır.
Adım 1: Yolun uzunluğunu bul: [[√{720}|√{5}]] = √{[[720|5]]} = √{144} = 12 m.
Adım 2: Direkler arasındaki uzaklık 2 metre olduğuna göre kaç aralık oluştuğunu bul: 12 : 2 = 6 aralık.
Adım 3: İki uçta da direk bulunduğundan direk sayısı aralık sayısının bir fazlasıdır: 6 + 1 = 7 direk.
Sağlama: Direkleri 0, 2, 4, 6, 8, 10 ve 12. metrelere yerleştir; 7 direk sayarsın.
Sık yapılan hata: Aralık sayısı ile direk sayısını karıştırmak. Uçlar dâhilse direk sayısı bir fazladır; çevre boyunca dizilseydi ikisi eşit olurdu.
Cevap B.`
},
{
  id: "mat-kk-314",
  kazanim: "M.8.1.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kampüste kare biçiminde bir dinlenme terası bulunmaktadır. Terasın alanı 900 m²'dir. Öğrenci sayısı arttığı için teras, kare biçimi korunarak her kenarı 5 metre uzatılacak biçimde büyütülecektir.
**Buna göre büyütülen terasın alanı kaç m² olur?**`,
  gorsel: `<svg viewBox="0 0 430 260" role="img" aria-label="Alanı 900 metrekare olan kare terasın her kenarı 5 metre uzatılarak büyütülmektedir."><rect x="60" y="60" width="175" height="175" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="60" y="25" width="210" height="210" fill="none" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="9 5"/><text x="147" y="140" font-size="16" text-anchor="middle" fill="currentColor">Eski teras</text><text x="147" y="166" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">900 m²</text><line x1="235" y1="250" x2="270" y2="250" stroke="var(--vurgu)" stroke-width="3"/><text x="252" y="243" font-size="15" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">5 m</text><line x1="60" y1="250" x2="235" y2="250" stroke="currentColor" stroke-width="2"/><text x="147" y="243" font-size="15" text-anchor="middle" fill="currentColor">eski kenar</text><text x="300" y="60" font-size="15" fill="var(--vurgu)" font-weight="bold">Yeni teras</text><text x="300" y="86" font-size="15" fill="currentColor">Her kenar 5 m</text><text x="300" y="108" font-size="15" fill="currentColor">uzatılıyor.</text><text x="300" y="140" font-size="15" fill="currentColor">Yeni alan: ? m²</text></svg>`,
  secenekler: ["905", "925", "1 050", "1 225"],
  dogru: 3,
  hatalar: [
    "Uzatmayı doğrudan alana ekledin: 900 + 5 = 905. Uzayan şey kenar uzunluğudur; alan bundan çok daha fazla artar.",
    "Eklenen bölümü 5^{2} = 25 sanıp 900 + 25 = 925 yaptın. Bu yalnızca köşedeki küçük karenin alanıdır; iki yan şerit hesaba katılmamıştır.",
    "Yalnızca bir kenara şerit ekledin: 900 + 30 · 5 = 1 050. Kare biçimi korunduğu için iki kenara da şerit eklenir, ayrıca köşede bir kare oluşur.",
    null
  ],
  aciklama: `Kare biçimli bir bölgenin kenar uzunluğu, alanının kareköküdür. Kenar değişince yeni alan, yeni kenarın karesidir.
Adım 1: Eski kenarı bul: √{900} = 30 m.
Adım 2: Yeni kenarı bul: 30 + 5 = 35 m.
Adım 3: Yeni alanı hesapla: 35 · 35 = 1 225 m².
Sağlama: Artışı parça parça da sayabilirsin: iki yan şerit 30 · 5 = 150 m²'den 300 m², köşedeki kare 5 · 5 = 25 m². Toplam 900 + 300 + 25 = 1 225 m². Aynı sonuç.
Sık yapılan hata: Kenardaki artışı doğrudan alana eklemek. Kenar 5 metre uzadığında alan 325 m² artar; çünkü alan kenarın karesiyle değişir.
Cevap D.`
},
{
  id: "mat-kk-315",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Bir spor salonunda kare biçiminde bir trambolin kullanılmaktadır. Trambolinin zıplama yüzeyinin alanı aşağıdaki şekilde verilmiştir.
Yüzeyin dört kenarı boyunca, aralarındaki uzaklık 0,3 metre olacak biçimde yaylar takılmaktadır. Yaylar kenarlar boyunca kesintisiz olarak dizilmekte ve köşelerde üst üste gelmemektedir.
**Buna göre bu trambolinde kaç yay vardır?**`,
  gorsel: `<svg viewBox="0 0 460 235" role="img" aria-label="Kare trambolin yüzeyinin alanı 5,76 metrekaredir; dört kenar boyunca 0,3 metre aralıklarla yay takılmaktadır."><rect x="95" y="30" width="185" height="185" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><g stroke="var(--vurgu)" stroke-width="3"><line x1="110" y1="30" x2="110" y2="48"/><line x1="140" y1="30" x2="140" y2="48"/><line x1="170" y1="30" x2="170" y2="48"/><line x1="200" y1="30" x2="200" y2="48"/><line x1="230" y1="30" x2="230" y2="48"/><line x1="260" y1="30" x2="260" y2="48"/></g><text x="187" y="120" font-size="16" text-anchor="middle" fill="currentColor">Zıplama yüzeyi (kare)</text><text x="187" y="148" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 5,76 m²</text><text x="187" y="22" font-size="15" text-anchor="middle" fill="var(--vurgu)">yaylar: arada 0,3 m</text><text x="300" y="90" font-size="15" fill="currentColor">Yaylar dört kenar</text><text x="300" y="112" font-size="15" fill="currentColor">boyunca dizilir.</text><text x="300" y="144" font-size="15" fill="currentColor">Toplam yay: ?</text></svg>`,
  secenekler: ["8", "19", "32", "96"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir kenarı hesapladın: 2,4 : 0,3 = 8. Yaylar dört kenar boyunca dizilmektedir.",
    "Karekök almadan alanı aralığa böldün: 5,76 : 0,3 = 19,2. Bölünmesi gereken alan değil, çevre uzunluğudur.",
    null,
    "9,6 : 0,3 bölmesinde virgülü yanlış kaydırıp 9,6 : 0,1 işlemini yaptın. Doğru bölüm 96 : 3 = 32'dir."
  ],
  aciklama: `Kare yüzeyin kenar uzunluğu alanının kareköküdür; yayların dizildiği toplam uzunluk ise çevredir.
Adım 1: Kenar uzunluğunu bul: 5,76 = [[576|100]] olduğundan √{5,76} = [[24|10]] = 2,4 m.
Adım 2: Çevreyi hesapla: 4 · 2,4 = 9,6 m.
Adım 3: Yay sayısını bul: 9,6 : 0,3 işlemini yaparken iki sayıyı da 10 ile çarp: 96 : 3 = 32.
Sağlama: Bir kenarda 2,4 : 0,3 = 8 yay vardır; dört kenarda 4 · 8 = 32 yay eder. Aynı sonuç.
Sık yapılan hata: Ondalık bölmede virgülü tek sayıda kaydırmak. 9,6 : 0,3 işleminde iki sayı da aynı oranda büyütülmelidir.
Cevap C.`
},
{
  id: "mat-kk-316",
  kazanim: "M.8.1.3.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okçuluk kulübünde üç sporcunun bir atışta oku gönderdiği uzaklıklar ölçülmüş ve aşağıdaki tabloya metre cinsinden yazılmıştır.
**Buna göre sporcuların attığı uzaklıkların küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Sporcu</th><th>K</th><th>L</th><th>M</th></tr><tr><td>Uzaklık (m)</td><td>4√3</td><td>3√6</td><td>√50</td></tr></table>`,
  secenekler: ["K < L < M", "L < K < M", "M < K < L", "K < M < L"],
  dogru: 3,
  hatalar: [
    "Katsayılara bakarak sıraladın (4, 3 ve katsayısız). Katsayının büyük olması sayının büyük olmasını gerektirmez; ifadeleri tek kök altına almalısın.",
    "Kök içindeki sayılara (3, 6, 50) bakarak sıraladın. Katsayılar kök içine alınmadan bu karşılaştırma yapılamaz.",
    "√{50} ifadesini en küçük sandın. Kök içine alındığında K = √{48} olur ve 48 < 50 olduğundan K, M'den küçüktür.",
    null
  ],
  aciklama: `Kareköklü ifadeleri karşılaştırmanın en güvenli yolu hepsini tek bir kök biçimine getirmektir: a√{b} = √{a^{2} · b}.
Adım 1: K sporcusu: 4√{3} = √{4^{2} · 3} = √{48}.
Adım 2: L sporcusu: 3√{6} = √{3^{2} · 6} = √{54}.
Adım 3: M sporcusu zaten kök biçimindedir: √{50}.
Adım 4: Kök içlerini sırala: 48 < 50 < 54. Buna göre K < M < L olur.
Sağlama: Yaklaşık değerlerle bak: 4√{3} ≈ 6,93 · √{50} ≈ 7,07 · 3√{6} ≈ 7,35. Sıralama aynı.
Sık yapılan hata: Yalnızca katsayıya ya da yalnızca kök içine bakmak. Karşılaştırmadan önce bütün ifadeler aynı biçime getirilmelidir.
Cevap D.`
},
{
  id: "mat-kk-317",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir anaokulunun bahçesinde dikdörtgen biçiminde bir kum havuzu vardır. Havuzun kenar uzunlukları aşağıdaki şekilde verilmiştir.
Havuzun dört kenarı boyunca ahşap bir kenarlık çekilecektir.
**Buna göre kaç metre ahşap kenarlık gerekir?**`,
  gorsel: `<svg viewBox="0 0 480 215" role="img" aria-label="Dikdörtgen kum havuzunun uzun kenarı kök 72 metre, kısa kenarı kök 32 metredir; dört kenarına ahşap kenarlık çekilecektir."><rect x="90" y="40" width="300" height="115" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="5"/><text x="240" y="92" font-size="16" text-anchor="middle" fill="currentColor">Kum havuzu</text><text x="240" y="118" font-size="15" text-anchor="middle" fill="currentColor">(dikdörtgen)</text><line x1="90" y1="176" x2="390" y2="176" stroke="currentColor" stroke-width="2"/><text x="240" y="196" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">√72 m</text><line x1="70" y1="40" x2="70" y2="155" stroke="currentColor" stroke-width="2"/><text x="38" y="102" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">√32 m</text><line x1="406" y1="44" x2="428" y2="44" stroke="var(--vurgu)" stroke-width="5"/><text x="436" y="49" font-size="15" fill="var(--vurgu)" font-weight="bold">kenarlık</text><text x="406" y="120" font-size="15" fill="currentColor">Gereken kenarlık:</text><text x="406" y="142" font-size="15" fill="currentColor">? m</text></svg>`,
  secenekler: ["√{104}", "10√{2}", "20√{2}", "40√{2}"],
  dogru: 2,
  hatalar: [
    "Kök içlerini topladın: 72 + 32 = 104. Kareköklü ifadeler toplanırken kök içleri toplanmaz; önce sadeleştirilir.",
    "İki komşu kenarı topladın (6√{2} + 4√{2} = 10√{2}) ama çevre için bu toplamı 2 ile çarpmadın.",
    null,
    "Kenarların toplamını 4 ile çarptın: 10√{2} · 4 = 40√{2}. Dikdörtgenin çevresi, komşu iki kenarın toplamının 2 katıdır."
  ],
  aciklama: `Dikdörtgenin çevresi, komşu iki kenarın toplamının 2 katıdır. Kareköklü ifadeler toplanmadan önce sadeleştirilir.
Adım 1: Kenarları sadeleştir: 72 = 36 · 2 olduğundan √{72} = 6√{2}; 32 = 16 · 2 olduğundan √{32} = 4√{2} metredir.
Adım 2: Komşu iki kenarı topla: 6√{2} + 4√{2} = 10√{2} m.
Adım 3: Çevreyi bul: 2 · 10√{2} = 20√{2} m kenarlık gerekir.
Sağlama: √{2} ≈ 1,41 alırsak kenarlar ≈ 8,49 m ve ≈ 5,66 m'dir. Çevre ≈ 2 · 14,15 = 28,3 m ve 20√{2} ≈ 28,28. Uyuyor.
Sık yapılan hata: İki kenarı toplayıp durmak. Dikdörtgenin dört kenarı vardır; karşılıklı kenarlar eşittir.
Cevap C.`
},
{
  id: "mat-kk-318",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir cam atölyesinde kare biçiminde dört levha üretilmiştir. Levhaların alanları aşağıdaki tabloda verilmiştir.
Atölye, kenar uzunluğu rasyonel sayı olarak yazılamayan levhaları ayrı bir rafa kaldırmaktadır.
**Buna göre hangi levha ayrı rafa kaldırılır?**`,
  gorsel: `<table class="tablo"><tr><th>Levha</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Alan (m²)</td><td>0,16</td><td>2,25</td><td>6,25</td><td>12</td></tr></table>`,
  secenekler: ["K levhası", "L levhası", "M levhası", "N levhası"],
  dogru: 3,
  hatalar: [
    "Ondalık gösterimli alanın kenarının da rasyonel olamayacağını düşündün. 0,16 = [[16|100]] olduğundan kenar [[4|10]] = 0,4 m'dir ve rasyoneldir.",
    "2,25'in karekökünün tam çıkmayacağını sandın. 2,25 = [[225|100]] ve payı da paydası da tam karedir; kenar [[15|10]] = 1,5 m'dir.",
    "6,25'i tam kare olmayan bir sayı sandın. 6,25 = [[625|100]] olduğundan kenar [[25|10]] = 2,5 m'dir ve rasyoneldir.",
    null
  ],
  aciklama: `Kare levhanın kenar uzunluğu alanının kareköküdür. Bir karekökün rasyonel olması için kök içindeki sayının tam kare (ya da kesir biçiminde yazıldığında payı ve paydası tam kare) olması gerekir.
Adım 1: K levhası: 0,16 = [[16|100]] → kenar [[4|10]] = 0,4 m. Rasyonel.
Adım 2: L levhası: 2,25 = [[225|100]] → kenar [[15|10]] = 1,5 m. Rasyonel.
Adım 3: M levhası: 6,25 = [[625|100]] → kenar [[25|10]] = 2,5 m. Rasyonel.
Adım 4: N levhası: kenar √{12}'dir. 3^{2} = 9 ve 4^{2} = 16 olduğundan 12 tam kare __değildir__; √{12} iki tam sayının oranı biçiminde yazılamaz, yani irrasyoneldir.
Sağlama: √{12} = 2√{3} ≈ 3,46'dır ve ondalık gösterimi ne biter ne de tekrar eder.
Sık yapılan hata: Ondalık gösterimi görünce "bu sayı düzgün değildir" diye düşünmek. Belirleyici olan virgül değil, kök içindeki sayının tam kare olup olmadığıdır.
Cevap D.`
},
{
  id: "mat-kk-319",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir takı atölyesinde, bir kenarı √{45} cm olan kare biçimli gümüş levha kesilecektir. Levha, hiç artmayacak biçimde, bir kenarı √{5} cm olan kare parçalara ayrılacaktır.
**Buna göre bu levhadan kaç parça elde edilir?**`,
  gorsel: `<svg viewBox="0 0 470 225" role="img" aria-label="Bir kenarı kök 45 santimetre olan kare gümüş levha, bir kenarı kök 5 santimetre olan kare parçalara ayrılacaktır."><rect x="50" y="35" width="165" height="165" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="1"><line x1="105" y1="35" x2="105" y2="200"/><line x1="160" y1="35" x2="160" y2="200"/><line x1="50" y1="90" x2="215" y2="90"/><line x1="50" y1="145" x2="215" y2="145"/></g><line x1="50" y1="214" x2="215" y2="214" stroke="var(--vurgu)" stroke-width="2"/><text x="132" y="228" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√45 cm</text><text x="132" y="25" font-size="15" text-anchor="middle" fill="currentColor">Gümüş levha (kare)</text><rect x="300" y="80" width="55" height="55" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="327" y="70" font-size="15" text-anchor="middle" fill="currentColor">Bir parça</text><text x="327" y="155" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√5 cm</text><text x="380" y="112" font-size="15" fill="currentColor">Kaç parça?</text></svg>`,
  secenekler: ["3", "9", "15", "40"],
  dogru: 1,
  hatalar: [
    "Kenar oranını buldun ve orada durdun: [[√{45}|√{5}]] = 3. Bu, bir sıraya kaç parça sığdığıdır; levhanın tamamındaki parça sayısı değildir.",
    null,
    "Kenar oranını (3) buldun ama sonra levhanın kenarındaki sayıyla (45) böldün: 45 : 3 = 15. Parça sayısı için alanlar oranlanmalıdır.",
    "Kök içlerini çıkardın: 45 − 5 = 40. Kaç parça çıktığı bulunurken alanlar bölünür, çıkarılmaz."
  ],
  aciklama: `Bir bölge, küçük eş parçalara ayrılıyorsa parça sayısı, büyük alanın küçük alana bölünmesiyle bulunur. Kare bir bölgenin alanı, kenarının karesidir.
Adım 1: Levhanın alanını bul: (√{45})^{2} = 45 cm².
Adım 2: Bir parçanın alanını bul: (√{5})^{2} = 5 cm².
Adım 3: Parça sayısını bul: 45 : 5 = 9 parça.
Sağlama: Kenarlardan da gidebilirsin: [[√{45}|√{5}]] = √{9} = 3 olduğundan bir sıraya 3 parça sığar ve 3 sıra vardır; 3 · 3 = 9 parça. Aynı sonuç.
Sık yapılan hata: Kenar oranını parça sayısı sanmak. Kenar 3 katıysa alan 3^{2} = 9 katıdır.
Cevap B.`
},
{
  id: "mat-kk-320",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tarım işletmesi, kare biçimli bir parselin alanını 5 000 m² olarak kaydetmiştir. İşletme, parselin bir kenarının uzunluğunu en yakın tam metreye yuvarlayarak yazacaktır.
**Buna göre kenar uzunluğu kaç metre olarak yazılır?**`,
  gorsel: `<svg viewBox="0 0 420 235" role="img" aria-label="Kare biçimli tarım parselinin alanı 5000 metrekaredir; kenar uzunluğu en yakın tam metreye yuvarlanacaktır."><rect x="95" y="25" width="190" height="190" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="190" y="110" font-size="16" text-anchor="middle" fill="currentColor">Parsel (kare)</text><text x="190" y="140" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 5 000 m²</text><line x1="95" y1="228" x2="285" y2="228" stroke="var(--vurgu)" stroke-width="2"/><text x="190" y="222" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text><text x="305" y="100" font-size="15" fill="currentColor">Kenar, en yakın</text><text x="305" y="122" font-size="15" fill="currentColor">tam metreye</text><text x="305" y="144" font-size="15" fill="currentColor">yuvarlanacaktır.</text></svg>`,
  secenekler: ["69", "70", "71", "72"],
  dogru: 2,
  hatalar: [
    "69^{2} = 4 761 eder; bu değer 5 000'den 239 uzaktır. Daha yakın bir tam sayı vardır.",
    "70^{2} = 4 900 bulup orada durdun. Uzaklıkları karşılaştırmadın: 5 000 − 4 900 = 100 iken 5 041 − 5 000 = 41'dir.",
    null,
    "72^{2} = 5 184 eder; bu değer 5 000'i 184 aşar. 71 daha yakındır."
  ],
  aciklama: `Kare parselin kenar uzunluğu alanının kareköküdür: kenar = √{5 000} m. Tam kare olmayan bir karekökü tam sayıya yuvarlamak için komşu tam karelerin uzaklıkları karşılaştırılır.
Adım 1: Komşu tam kareleri hesapla: 70^{2} = 4 900 ve 71^{2} = 5 041.
Adım 2: 4 900 < 5 000 < 5 041 olduğundan 70 < √{5 000} < 71'dir.
Adım 3: Uzaklıkları karşılaştır: 5 000 − 4 900 = 100 ve 5 041 − 5 000 = 41. Sayı 5 041'e daha yakın olduğundan karekökü de 71'e daha yakındır.
Sağlama: 70,7^{2} = 4 998,49'dur; demek ki √{5 000} ≈ 70,71'dir ve en yakın tam sayı 71'dir.
Sık yapılan hata: Alt komşuyu otomatik olarak seçmek. Yuvarlama yapılırken iki tam karenin de uzaklığına bakılır.
Cevap C.`
},
{
  id: "mat-kk-321",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kodlama atölyesinde öğrenciler küçük bir program yazmıştır. Program, kullanıcının girdiği k doğal sayısı için √{50 · k} ifadesinin değerini hesaplar. Sonuç bir doğal sayı olduğunda ekrana "TAM" yazısı gelmektedir.
Kullanıcı yalnızca 100'den küçük doğal sayıları girebilmektedir.
**Buna göre ekrana "TAM" yazısını getiren kaç farklı k değeri vardır?**`,
  gorsel: `<svg viewBox="0 0 460 220" role="img" aria-label="Program, girilen k sayısı için kök 50 çarpı k değerini hesaplar ve sonuç doğal sayı olduğunda TAM yazısı gösterir."><rect x="40" y="70" width="110" height="60" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="95" y="96" font-size="15" text-anchor="middle" fill="var(--vurgu2)">girilen sayı</text><text x="95" y="120" font-size="20" text-anchor="middle" fill="currentColor" font-weight="bold">k</text><text x="170" y="106" font-size="24" fill="var(--vurgu)">→</text><rect x="195" y="60" width="140" height="80" rx="8" fill="none" stroke="var(--vurgu)" stroke-width="3"/><text x="265" y="88" font-size="15" text-anchor="middle" fill="var(--vurgu2)">hesaplanan</text><text x="265" y="118" font-size="21" text-anchor="middle" fill="currentColor" font-weight="bold">√(50 · k)</text><text x="352" y="106" font-size="24" fill="var(--vurgu)">→</text><rect x="375" y="70" width="70" height="60" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="410" y="107" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">TAM</text><text x="230" y="30" font-size="15" text-anchor="middle" fill="currentColor">k, 100'den küçük bir doğal sayıdır.</text><text x="230" y="180" font-size="15" text-anchor="middle" fill="currentColor">Sonuç doğal sayı olduğunda TAM yazısı gelir.</text></svg>`,
  secenekler: ["5", "6", "7", "8"],
  dogru: 2,
  hatalar: [
    "k = 2, 8, 18, 32 ve 50 değerlerini bulup durdun. 72 ve 98 de 100'den küçüktür ve koşulu sağlar.",
    "98'i listeye almadın. 98 < 100 olduğundan girilebilir ve 50 · 98 = 4 900 = 70^{2}'dir.",
    null,
    "128'i de saydın. 50 · 128 = 6 400 = 80^{2} olsa bile 128 sayısı 100'den küçük değildir; girilemez."
  ],
  aciklama: `Bir karekökün doğal sayı olması için kök içindeki sayının tam kare, yani asal çarpanlarının üslerinin hepsinin çift olması gerekir.
Adım 1: 50'yi asal çarpanlarına ayır: 50 = 2 · 5^{2}. Burada 5'in üssü çift, 2'nin üssü tektir. Çarpımın tam kare olması için k sayısı, eksik kalan 2'yi tamamlamalıdır.
Adım 2: Öyleyse k = 2 · (bir tam kare) biçiminde olmalıdır: k = 2 · 1^{2}, 2 · 2^{2}, 2 · 3^{2}, …
Adım 3: Değerleri yaz: 2, 8, 18, 32, 50, 72, 98. Bir sonraki değer 2 · 8^{2} = 128'dir ve 100'den küçük __değildir__.
Adım 4: Koşulu sağlayan 7 farklı k değeri vardır.
Sağlama: Birkaçını denetle: 50 · 8 = 400 = 20^{2} · 50 · 72 = 3 600 = 60^{2} · 50 · 98 = 4 900 = 70^{2}. Hepsi doğal sayı veriyor.
Sık yapılan hata: Yalnızca tam kare k değerlerini (1, 4, 9…) aramak. Burada k'nin kendisinin tam kare olması değil, 50 · k çarpımının tam kare olması gerekir.
Cevap C.`
},
{
  id: "mat-kk-322",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir belediye, sahil yolu boyunca kare biçiminde dinlenme platformları yaptıracaktır. Her platformun alanı 20 m²'den büyük, 300 m²'den küçük olacaktır. Üretim kolaylığı için her platformun bir kenar uzunluğu tam sayı metre olarak seçilecektir.
**Buna göre kenar uzunluğu için kaç farklı değer seçilebilir?**`,
  gorsel: null,
  secenekler: ["12", "13", "14", "15"],
  dogru: 1,
  hatalar: [
    "Üst uçtaki 17'yi listene almadın. 17^{2} = 289'dur ve 289 < 300 olduğundan 17 metre koşulu sağlar.",
    null,
    "Alt uçta 4'ü de saydın. 4^{2} = 16'dır ve 16 < 20 olduğundan 4 metrelik kenar, alanı 20 m²'den büyük yapmaz.",
    "Hem 4'ü hem 18'i saydın. 4^{2} = 16 < 20 ve 18^{2} = 324 > 300 olduğundan ikisi de koşulu sağlamaz."
  ],
  aciklama: `Kare platformun alanı, kenar uzunluğunun karesidir. Alan bir aralıkta verildiğine göre kenar uzunluğunun hangi tam sayılar olabileceğini bulman gerekir.
Adım 1: Koşulu yaz: 20 < kenar^{2} < 300.
Adım 2: Alt sınırı bul: 4^{2} = 16 (yetersiz), 5^{2} = 25 > 20. En küçük kenar 5 metredir.
Adım 3: Üst sınırı bul: 17^{2} = 289 < 300 (uygun), 18^{2} = 324 > 300. En büyük kenar 17 metredir.
Adım 4: 5'ten 17'ye kadar olan tam sayıları say: 17 − 5 + 1 = 13 farklı değer.
Sağlama: Sayarken "son − ilk + 1" kuralını kullan; uçları unutma. 5, 6, 7, …, 17 dizisinde 13 terim vardır.
Sık yapılan hata: Uçları dâhil etmeyi unutmak ya da sınır değerleri kontrol etmeden aralığı tahmin etmek. Sınırdaki her sayının karesi mutlaka hesaplanmalıdır.
Cevap B.`
},
{
  id: "mat-kk-323",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 4,
  soru: `Bir vitray atölyesinde, bir kenarı 6√{2} cm olan kare biçimli bir cam levha bulunmaktadır. Ustaya, bu levhadan kesilebilecek en büyük kare parça istenmiştir. Kesilecek parçanın bir kenar uzunluğu santimetre cinsinden tam sayı olmalıdır.
**Buna göre kesim sonunda levhadan geriye kaç cm² cam kalır?**`,
  gorsel: `<svg viewBox="0 0 450 235" role="img" aria-label="Bir kenarı 6 kök 2 santimetre olan kare cam levhadan, kenarı tam sayı olan en büyük kare parça kesilecektir."><rect x="70" y="30" width="190" height="190" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="70" y="50" width="170" height="170" fill="none" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="8 5"/><text x="155" y="20" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">6√2 cm</text><line x1="70" y1="26" x2="260" y2="26" stroke="currentColor" stroke-width="2"/><text x="290" y="70" font-size="15" fill="var(--vurgu)" font-weight="bold">kesilecek kare parça</text><text x="290" y="96" font-size="15" fill="currentColor">(kenarı tam sayı cm,</text><text x="290" y="118" font-size="15" fill="currentColor">en büyük olacak)</text><text x="290" y="156" font-size="15" fill="currentColor">Kalan alan: ? cm²</text></svg>`,
  secenekler: ["8", "23", "64", "72"],
  dogru: 0,
  hatalar: [
    null,
    "Kesilebilecek en büyük kareyi 7 cm kenarlı sandın: 72 − 49 = 23. Oysa 8^{2} = 64 ≤ 72 olduğundan 8 cm kenarlı kare de levhaya sığar.",
    "Kesilen parçanın alanını yazdın. Soru kesilen parçayı değil, geriye kalan camı soruyor.",
    "Levhanın alanını yazdın. Bu, kesimden önceki toplam alandır."
  ],
  aciklama: `Bir karenin alanı kenarının karesidir; kareköklü bir kenarda kare alırken katsayının da kök içinin de karesi alınır.
Adım 1: Levhanın alanını bul: (6√{2})^{2} = 6^{2} · 2 = 36 · 2 = 72 cm².
Adım 2: Kesilecek karenin kenarı tam sayı olacağına göre kenar^{2} ≤ 72 olmalıdır. 8^{2} = 64 ≤ 72 iken 9^{2} = 81 > 72'dir. Yani en büyük kenar 8 cm'dir.
Adım 3: Levhanın kenarının 8 cm'den uzun olduğunu doğrula: 6√{2} = √{72} ve 64 < 72 olduğundan 6√{2} > 8'dir. Parça gerçekten sığar.
Adım 4: Kalan alanı bul: 72 − 64 = 8 cm².
Sağlama: 6√{2} ≈ 8,49 cm'dir; 8 cm kenarlı kare sığar, 9 cm kenarlı kare sığmaz.
Sık yapılan hata: (6√{2})^{2} işleminde yalnızca katsayının karesini alıp 36 demek ya da kök içini unutmak. Doğrusu 6^{2} · 2 = 72'dir.
Cevap A.`
},
{
  id: "mat-kk-324",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ahşap atölyesinde dikdörtgen biçimli kutu tabanları kesilmektedir. Bir tabanın kenar uzunlukları √{18} cm ve √{k} cm'dir; burada k bir doğal sayıdır.
Atölyenin kuralına göre tabanın santimetrekare cinsinden alanı hem bir doğal sayı olmalı hem de 30'dan küçük olmalıdır.
**Buna göre k kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 1,
  hatalar: [
    "k = 32 değerini atladın. 18 · 32 = 576 = 24^{2} olduğundan alan 24 cm²'dir ve 30'dan küçüktür; bu değer de uygundur.",
    null,
    "k = 50'yi de saydın. 18 · 50 = 900 olduğundan alan tam 30 cm² olur; oysa alanın 30'dan __küçük__ olması isteniyor.",
    "Hem k = 50'yi hem k = 72'yi saydın. Bunların alanları 30 cm² ve 36 cm²'dir; ikisi de 30'dan küçük değildir."
  ],
  aciklama: `Alan √{18} · √{k} = √{18 · k} olur. Bu alanın doğal sayı olması için 18 · k çarpımının tam kare olması gerekir.
Adım 1: 18'i asal çarpanlarına ayır: 18 = 2 · 3^{2}. Eksik kalan çarpan 2'dir; öyleyse k = 2 · (bir tam kare) biçiminde olmalıdır.
Adım 2: Olası k değerlerini ve alanları yaz: k = 2 → alan √{36} = 6; k = 8 → alan √{144} = 12; k = 18 → alan √{324} = 18; k = 32 → alan √{576} = 24; k = 50 → alan √{900} = 30.
Adım 3: Alan 30'dan küçük olmalıdır. k = 50 için alan tam 30'dur ve koşulu sağlamaz; daha büyük k değerleri de sağlamaz.
Adım 4: Uygun değerler 2, 8, 18 ve 32'dir; yani k 4 farklı değer alabilir.
Sağlama: Alanlar 6, 12, 18, 24 biçiminde altışar artıyor. Bunun nedeni k = 2m^{2} için alanın √{36m^{2}} = 6m olmasıdır; 6m < 30 koşulu m < 5 demektir, yani m = 1, 2, 3, 4.
Sık yapılan hata: "30'dan küçük" ile "30'a kadar" ifadelerini aynı saymak. Sınır değeri (30) aralığa dâhil değildir.
Cevap B.`
},
{
  id: "mat-kk-325",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 4,
  soru: `Bir atölyede kare biçiminde dört ayna kesilmiştir. Aynaların metrekare cinsinden alanları aşağıdaki tabloda verilmiştir.
Atölye sahibi, kenar uzunluğunun sayı değeri alanının sayı değerinden büyük olan aynayı vitrine koyacaktır.
**Buna göre vitrine hangi ayna konur?**`,
  gorsel: `<table class="tablo"><tr><th>Ayna</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Alan (m²)</td><td>0,64</td><td>1,21</td><td>2,89</td><td>4</td></tr></table>`,
  secenekler: ["K aynası", "L aynası", "M aynası", "N aynası"],
  dogru: 0,
  hatalar: [
    null,
    "L aynasında kenar √{1,21} = 1,1 m'dir ve 1,1 < 1,21'dir. 1'den büyük sayılarda karekök, sayıyı küçültür.",
    "M aynasında kenar √{2,89} = 1,7 m'dir ve 1,7 < 2,89'dur. Aradaki fark büyüdükçe bu daha da belirginleşir.",
    "N aynasında kenar √{4} = 2 m'dir ve 2 < 4'tür. En büyük alanın kenarı da alanından küçüktür."
  ],
  aciklama: `Kare aynanın kenar uzunluğu alanının kareköküdür. Bir sayı ile karekökünü karşılaştırırken sayının 1'den büyük mü küçük mü olduğuna bakılır.
Adım 1: Kenarları bul: √{0,64} = 0,8 · √{1,21} = 1,1 · √{2,89} = 1,7 · √{4} = 2.
Adım 2: Her aynada kenarı alanla karşılaştır: 0,8 > 0,64 · 1,1 < 1,21 · 1,7 < 2,89 · 2 < 4.
Adım 3: Yalnızca K aynasında kenar uzunluğunun sayı değeri alanının sayı değerinden büyüktür.
Adım 4: Nedenini anla: 0 ile 1 arasındaki bir sayının karekökü kendisinden __büyüktür__ (0,8 · 0,8 = 0,64 olduğuna göre 0,64'ü büyütmek için karekök almak gerekir). 1'den büyük sayılarda ise karekök sayıyı küçültür.
Sağlama: 0,5 sayısını dene: √{0,5} ≈ 0,71 > 0,5. Kural tutuyor. 9 sayısını dene: √{9} = 3 < 9. Bu da tutuyor.
Sık yapılan hata: "Karekök her zaman küçültür" diye ezberlemek. Bu, yalnızca 1'den büyük sayılar için doğrudur.
Cevap A.`
},
/* ===================== HAVUZ (013…030) ===================== */
{
  id: "mat-kk-013",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 1,
  soru: "**7√{10} − 4√{10} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3", "3√{10}", "11√{10}", "28√{10}"],
  dogru: 1,
  hatalar: [
    "Katsayıları doğru çıkardın ama kök işaretini yazmayı unuttun. Terimlerin ortak çarpanı √{10}'dur ve sonuçta da durur.",
    null,
    "Çıkarma yerine toplama yaptın: 7 + 4 = 11. İşlem işaretine dikkat et.",
    "Katsayıları çıkaracağına çarptın: 7 · 4 = 28. Çıkarma işleminde katsayılar çıkarılır."
  ],
  aciklama: `Kök içleri aynı olan kareköklü ifadeler aynı cinsten terimlerdir; bunlar çıkarılırken yalnızca katsayılar çıkarılır: a√{c} − b√{c} = (a − b)√{c}.
Adım 1: İki terimin de kök içi 10'dur; yani işlem yapılabilir.
Adım 2: Katsayıları çıkar: 7 − 4 = 3.
Adım 3: Kök içini aynen yaz: 3√{10}.
Sağlama: Bunu 7 kalem − 4 kalem = 3 kalem gibi düşün. "Kalem" (yani √{10}) yok olmaz.
Sık yapılan hata: Sonucu yalnızca katsayı olarak yazmak. 3 ile 3√{10} farklı sayılardır: 3√{10} ≈ 9,49'dur.
Cevap B.`
},
{
  id: "mat-kk-014",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 1,
  soru: "**√{5} · √{5} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["√{10}", "2√{5}", "5", "25"],
  dogru: 2,
  hatalar: [
    "Çarpma yerine kök içlerini topladın: 5 + 5 = 10. Kökler çarpılırken kök içleri çarpılır.",
    "İşlemi toplama gibi yaptın ve katsayıları topladın: 1 + 1 = 2. Toplama olsaydı sonuç 2√{5} olurdu, çarpmada değil.",
    null,
    "Kök içlerini doğru çarptın (5 · 5 = 25) ama sonucun karekökünü almayı unuttun. √{25} = 5'tir."
  ],
  aciklama: `Karekökler çarpılırken kök içleri tek bir kök altında çarpılır: √{a} · √{b} = √{a · b}.
Adım 1: İşlemi yaz: √{5} · √{5} = √{5 · 5} = √{25}.
Adım 2: Karekökü al: 5^{2} = 25 olduğundan √{25} = 5.
Adım 3: Genel kural: bir karekökün kendisiyle çarpımı kök içindeki sayıyı verir: √{a} · √{a} = a.
Sağlama: √{5} ≈ 2,24'tür ve 2,24 · 2,24 ≈ 5,02 ≈ 5. Uyuyor.
Sık yapılan hata: √{5} · √{5} işlemini 2√{5} yazmak. Bu toplama işleminin sonucudur: √{5} + √{5} = 2√{5}.
Cevap C.`
},
{
  id: "mat-kk-015",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 1,
  soru: "**√{50} ifadesinin en sade biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["5√{2}", "2√{25}", "10√{5}", "25√{2}"],
  dogru: 0,
  hatalar: [
    null,
    "Çarpanları ters yerleştirdin: tam kare olan 25'i kök içinde bırakıp 2'yi dışarı çıkardın. Kök dışına çıkması gereken, tam kare çarpanın kareköküdür.",
    "50 = 10 · 5 ayrımını yapıp 10'u dışarı çıkardın. 10 tam kare olmadığı için kök dışına çıkamaz.",
    "50 = 25 · 2 ayrımı doğru ama 25'i karekökünü almadan dışarı yazdın. Dışarı çıkan sayı √{25} = 5 olmalıdır."
  ],
  aciklama: `Bir kareköklü ifadeyi sadeleştirirken kök içindeki sayı "en büyük tam kare çarpan · kalan" biçiminde yazılır ve tam kare çarpanın karekökü dışarı çıkarılır.
Adım 1: 50'yi çarpanlarına ayır: 50 = 25 · 2. Burada tam kare çarpan 25'tir.
Adım 2: Kökü ayır: √{50} = √{25} · √{2}.
Adım 3: Karekökü al ve yaz: √{25} = 5 olduğundan √{50} = 5√{2}.
Sağlama: 5√{2} ifadesini kök içine geri al: 5^{2} · 2 = 25 · 2 = 50. Başladığın ifadeye döndün.
Sık yapılan hata: Kök dışına tam kare çarpanın kendisini yazmak. 25√{2} ifadesinin kök içi 625 · 2 = 1 250 olur.
Cevap A.`
},
{
  id: "mat-kk-016",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 2,
  soru: "Bir kitap ayracı dikdörtgen biçimindedir. Ayracın kenar uzunlukları aşağıdaki şekilde verilmiştir.\n**Buna göre ayracın alanı kaç cm²'dir?**",
  gorsel: `<svg viewBox="0 0 420 215" role="img" aria-label="Dikdörtgen kitap ayracı: uzun kenarı kök 32 santimetre, kısa kenarı kök 2 santimetre."><rect x="140" y="30" width="70" height="150" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="175" y="105" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 175 105)">Kitap ayracı</text><line x1="228" y1="30" x2="228" y2="180" stroke="var(--vurgu)" stroke-width="2"/><text x="270" y="110" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√32 cm</text><line x1="140" y1="196" x2="210" y2="196" stroke="var(--vurgu)" stroke-width="2"/><text x="175" y="212" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√2 cm</text><text x="330" y="60" font-size="15" fill="currentColor">Alan: ? cm²</text></svg>`,
  secenekler: ["4√{2}", "√{34}", "8", "64"],
  dogru: 2,
  hatalar: [
    "√{32} = 4√{2} sadeleştirmesini yaptın ama sonucu √{2} ile çarpmayı unuttun; işlemi yarıda bıraktın.",
    "Çarpma yerine kök içlerini topladın: 2 + 32 = 34. Alan hesabında kenarlar çarpılır.",
    null,
    "Kök içlerini doğru çarptın (2 · 32 = 64) ama sonucun karekökünü almayı unuttun. √{64} = 8'dir."
  ],
  aciklama: `Dikdörtgenin alanı iki kenarının çarpımıdır; karekökler çarpılırken kök içleri çarpılır.
Adım 1: Alanı yaz: √{2} · √{32} = √{2 · 32} = √{64}.
Adım 2: Karekökü al: 8^{2} = 64 olduğundan alan 8 cm²'dir.
Sağlama: Sadeleştirerek de yapabilirsin: √{32} = 4√{2} olduğundan √{2} · 4√{2} = 4 · (√{2} · √{2}) = 4 · 2 = 8. Aynı sonuç.
Sık yapılan hata: Kök içlerini çarpıp kökü kaldırmayı unutmak. 64 bir kök içi değeridir; alan √{64} = 8'dir.
Cevap C.`
},
{
  id: "mat-kk-017",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 2,
  soru: "**√{27} − √{12} + √{3} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2√{3}", "3√{2}", "4√{3}", "6√{3}"],
  dogru: 0,
  hatalar: [
    null,
    "Terimleri sadeleştirmeden kök içlerinde işlem yaptın: 27 − 12 + 3 = 18 ve √{18} = 3√{2}. Kök içleri toplanıp çıkarılmaz.",
    "İşaretleri karıştırdın: 3 + 2 − 1 = 4 yaptın. Doğrusu 3 − 2 + 1'dir.",
    "Bütün terimleri topladın: 3 + 2 + 1 = 6. Ortadaki terimin başında eksi işareti vardır."
  ],
  aciklama: `Kareköklü ifadelerde toplama ve çıkarma ancak kök içleri aynı olduğunda yapılabilir; bu yüzden önce her terim sadeleştirilir.
Adım 1: √{27}'yi sadeleştir: 27 = 9 · 3 olduğundan √{27} = 3√{3}.
Adım 2: √{12}'yi sadeleştir: 12 = 4 · 3 olduğundan √{12} = 2√{3}.
Adım 3: Üçüncü terim zaten sadedir: √{3} = 1√{3}.
Adım 4: Katsayılarla işlem yap: 3 − 2 + 1 = 2. Sonuç 2√{3}'tür.
Sağlama: √{3} ≈ 1,73 alırsak √{27} ≈ 5,20 · √{12} ≈ 3,46 · √{3} ≈ 1,73'tür. 5,20 − 3,46 + 1,73 ≈ 3,47 ve 2√{3} ≈ 3,46. Uyuyor.
Sık yapılan hata: Sadeleştirmeden işleme başlamak. Kök içleri farklı görünen terimler sadeleşince aynı cinse dönüşebilir.
Cevap A.`
},
{
  id: "mat-kk-018",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 2,
  soru: "Bir fotoğrafçı, kare biçiminde fotoğraf baskıları yapmaktadır. Bir baskının alanı aşağıdaki şekilde verilmiştir.\n**Buna göre bu baskının çevresi kaç desimetredir?**",
  gorsel: `<svg viewBox="0 0 430 225" role="img" aria-label="Kare biçiminde fotoğraf baskısı; alanı 1,21 desimetrekaredir, çevresi soruluyor."><rect x="95" y="25" width="175" height="175" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4"/><text x="182" y="100" font-size="16" text-anchor="middle" fill="currentColor">Fotoğraf baskısı</text><text x="182" y="128" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 1,21 dm²</text><text x="182" y="154" font-size="15" text-anchor="middle" fill="currentColor">(kare biçiminde)</text><text x="182" y="218" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">Çevre: ? dm</text><text x="300" y="90" font-size="15" fill="currentColor">Çevre, dört</text><text x="300" y="112" font-size="15" fill="currentColor">kenarın toplamıdır.</text></svg>`,
  secenekler: ["1,1", "2,2", "4,4", "4,84"],
  dogru: 2,
  hatalar: [
    "Kenar uzunluğunu bulup orada durdun. 1,1 dm bir kenardır; çevre dört kenarın toplamıdır.",
    "Çevreyi iki kenarın toplamı sandın: 1,1 + 1,1 = 2,2. Karenin dört kenarı vardır.",
    null,
    "Karekök almayı atlayıp alanı 4 ile çarptın: 1,21 · 4 = 4,84. Dört ile çarpılması gereken alan değil, kenar uzunluğudur."
  ],
  aciklama: `Kare biçimli bir baskının kenar uzunluğu alanının karekökü, çevresi ise kenarın 4 katıdır.
Adım 1: Kenar uzunluğunu bul: 1,21 = [[121|100]] olduğundan √{1,21} = [[11|10]] = 1,1 dm.
Adım 2: Çevreyi hesapla: 4 · 1,1 = 4,4 dm.
Sağlama: 1,1 · 1,1 = 1,21 olduğundan kenar doğrudur; 1,1 + 1,1 + 1,1 + 1,1 = 4,4 dm.
Sık yapılan hata: Alanı doğrudan 4 ile çarpmak. Önce karekök alıp kenarı bulmalı, sonra 4 ile çarpmalısın.
Cevap C.`
},
{
  id: "mat-kk-019",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir doğal sayının karekökü 12 ile 13 arasındadır.\n**Buna göre bu sayı en az kaç olabilir?**",
  gorsel: null,
  secenekler: ["144", "145", "156", "169"],
  dogru: 1,
  hatalar: [
    "Sınırı dâhil ettin: 144 = 12^{2} olduğundan √{144} = 12'dir. 12, iki sayının arasında değil sınırın kendisidir.",
    null,
    "En küçük değeri değil, aralığın ortasına yakın bir sayıyı seçtin: 12,5^{2} = 156,25'tir. Daha küçük uygun sayılar vardır.",
    "Üst sınırı aldın: 169 = 13^{2} olduğundan √{169} = 13'tür; bu da aralığın dışındadır."
  ],
  aciklama: `Karekökü belli iki sayı arasında olan doğal sayıları bulmak için sınırların karesi alınır.
Adım 1: Koşulu yaz: 12 < √{n} < 13.
Adım 2: Her tarafın karesini al: 144 < n < 169.
Adım 3: n bir doğal sayı olduğuna ve 144 aralığa dâhil olmadığına göre alabileceği en küçük değer 145'tir.
Sağlama: √{145} sayısı 12'den büyük, 13'ten küçüktür; çünkü 144 < 145 < 169'dur. √{144} ise tam 12 eder ve koşulu sağlamaz.
Sık yapılan hata: Sınır değerleri de aralığa katmak. "Arasındadır" dendiğinde uç değerler dışarıda kalır.
Cevap B.`
},
{
  id: "mat-kk-020",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 2,
  soru: "Bir terzi, dikdörtgen biçiminde bir kumaş parçasıyla çalışmaktadır. Parçanın alanı √{96} m², bir kenarının uzunluğu ise √{6} m'dir.\n**Buna göre parçanın diğer kenarı kaç metredir?**",
  gorsel: null,
  secenekler: ["4", "16", "90", "576"],
  dogru: 0,
  hatalar: [
    null,
    "Kök içlerini doğru böldün (96 : 6 = 16) ama sonucun karekökünü almayı unuttun. √{16} = 4'tür.",
    "Bölme yerine kök içlerini çıkardın: 96 − 6 = 90. Bir kenarı bulmak için alan diğer kenara bölünür.",
    "Bölme yerine çarpma yaptın ve kökü de kaldırmadın: 96 · 6 = 576. Bu, alanın kenarla çarpımıdır."
  ],
  aciklama: `Dikdörtgende bir kenar, alanın diğer kenara bölünmesiyle bulunur. Kareköklerde bölme, kök içlerinin bölümünün karekökü alınarak yapılır: [[√{a}|√{b}]] = √{[[a|b]]}.
Adım 1: Diğer kenarı yaz: [[√{96}|√{6}]].
Adım 2: Kök içlerini böl: 96 : 6 = 16. İfade √{16} olur.
Adım 3: Karekökü al: √{16} = 4 m.
Sağlama: Kenarları çarp: √{6} · 4 = 4√{6} = √{16 · 6} = √{96} m². Alan yeniden çıktı.
Sık yapılan hata: Kök içlerini bölüp kökü kaldırmayı unutmak. √{16} ile 16 aynı sayı değildir.
Cevap A.`
},
{
  id: "mat-kk-021",
  kazanim: "M.8.1.3.8",
  kademe: 0,
  zorluk: 2,
  soru: "**√{2} sayısı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Bir tam kare sayının karekökü olduğu için doğal sayıdır.",
    "İki tam sayının oranı biçiminde yazılabilen rasyonel bir sayıdır.",
    "Ondalık gösterimi 1,41'de sona eren rasyonel bir sayıdır.",
    "1 ile 2 arasında yer alan irrasyonel bir sayıdır."
  ],
  dogru: 3,
  hatalar: [
    "2 sayısını tam kare sandın. Tam kareler 1, 4, 9, 16… biçiminde gider; 2 bunların arasında yoktur.",
    "√{2} sayısını rasyonel saydın. Tam kare olmayan bir doğal sayının karekökü iki tam sayının oranı biçiminde yazılamaz.",
    "1,41 değerini √{2}'nin kendisi sandın. 1,41 · 1,41 = 1,9881'dir, 2 değildir; 1,41 yalnızca bir yaklaşık değerdir.",
    null
  ],
  aciklama: `Tam kare olmayan bir doğal sayının karekökü iki tam sayının oranı biçiminde yazılamaz; böyle sayılara irrasyonel sayı denir.
Adım 1: 2 sayısının tam kare olup olmadığına bak: 1^{2} = 1 ve 2^{2} = 4'tür. 2 bu iki tam karenin arasındadır, yani tam kare __değildir__.
Adım 2: Öyleyse √{2} bir doğal sayı da rasyonel sayı da değildir; irrasyoneldir.
Adım 3: Değerini kestir: 1 < 2 < 4 olduğundan 1 < √{2} < 2'dir. √{2} sayısı 1 ile 2 arasındadır (yaklaşık 1,414…).
Sağlama: 1,41^{2} = 1,9881 ve 1,42^{2} = 2,0164'tür. Demek ki √{2} bu iki sayının arasındadır ve ondalık gösterimi bitmez.
Sık yapılan hata: Yaklaşık değeri sayının kendisi sanmak. 1,41 ve 1,414 gibi değerler √{2}'ye yakındır ama ona eşit değildir.
Cevap D.`
},
{
  id: "mat-kk-022",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 3,
  soru: "**Aşağıdaki ifadelerden hangisinin değeri 7 ile 8 arasındadır?**",
  gorsel: null,
  secenekler: ["2√{7}", "3√{5}", "4√{3}", "3√{6}"],
  dogru: 3,
  hatalar: [
    "Kök içindeki 7'yi görüp ifadeyi 7'ye yakın sandın. Katsayıyı kök içine al: 2√{7} = √{28}'dir ve 25 < 28 < 36 olduğundan bu sayı 5 ile 6 arasındadır.",
    "Katsayıyı kök içine alırken karesini almadın. 3√{5} = √{45}'tir ve 36 < 45 < 49 olduğundan bu sayı 6 ile 7 arasındadır.",
    "4 · 3 = 12 gibi düşünüp ifadeyi büyük sandın. 4√{3} = √{48}'dir ve 48 < 49 olduğundan bu sayı hâlâ 7'den küçüktür.",
    null
  ],
  aciklama: `Kareköklü bir ifadenin hangi iki tam sayı arasında olduğunu bulmak için katsayı kök içine alınır: a√{b} = √{a^{2} · b}. Sonra kök içi, komşu tam karelerle karşılaştırılır.
Adım 1: Aradığın aralığı kök içine çevir: 7 = √{49} ve 8 = √{64}. Yani kök içi 49 ile 64 arasında olmalıdır.
Adım 2: Şıkları kök içine al: 2√{7} = √{28} · 3√{5} = √{45} · 4√{3} = √{48} · 3√{6} = √{54}.
Adım 3: Karşılaştır: yalnızca 54 sayısı 49 ile 64 arasındadır. Öyleyse aranan ifade 3√{6}'dır.
Sağlama: 3√{6} ≈ 3 · 2,449 = 7,35'tir ve gerçekten 7 ile 8 arasındadır. 4√{3} ≈ 6,93'tür, yani 7'ye çok yakındır ama 7'den küçüktür.
Sık yapılan hata: Yalnızca katsayıya ya da yalnızca kök içine bakarak tahmin etmek. 4√{3} ile 3√{6} şıklarını ancak kök içine alarak ayırt edebilirsin.
Cevap D.`
},
{
  id: "mat-kk-023",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir sitenin bahçesinde kare biçiminde iki oyun alanı yapılacaktır. Birinci alanın alanı aşağıdaki şekilde verilmiştir. İkinci alanın bir kenarı, birinci alanın bir kenarının yarısı kadar olacaktır.
**Buna göre ikinci oyun alanının alanı kaç m²'dir?**`,
  gorsel: `<svg viewBox="0 0 470 215" role="img" aria-label="Birinci kare oyun alanının alanı 1024 metrekaredir; ikinci kare oyun alanının kenarı birincinin kenarının yarısıdır."><rect x="45" y="30" width="170" height="170" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="130" y="105" font-size="16" text-anchor="middle" fill="currentColor">1. oyun alanı</text><text x="130" y="133" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">1 024 m²</text><rect x="290" y="115" width="85" height="85" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="332" y="152" font-size="15" text-anchor="middle" fill="currentColor">2. oyun alanı</text><text x="332" y="176" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m²</text><text x="332" y="50" font-size="15" text-anchor="middle" fill="currentColor">2. alanın kenarı,</text><text x="332" y="72" font-size="15" text-anchor="middle" fill="currentColor">1. alanın kenarının</text><text x="332" y="94" font-size="15" text-anchor="middle" fill="currentColor">yarısı kadardır.</text></svg>`,
  secenekler: ["16", "256", "512", "2 048"],
  dogru: 1,
  hatalar: [
    "İkinci alanın kenar uzunluğunu (16 m) cevap sandın. Soru bir uzunluk değil, alan istiyor.",
    null,
    "Alanı ikiye böldün: 1 024 : 2 = 512. Yarıya inen kenardır; alan aynı oranda küçülmez.",
    "Alanı iki katına çıkardın. Kenar küçüldüğüne göre alan da küçülmelidir."
  ],
  aciklama: `Kare biçimli bir bölgenin kenar uzunluğu alanının karekökü, alanı ise kenarının karesidir.
Adım 1: Birinci alanın kenarını bul: √{1 024} = 32 m. (32 · 32 = 1 024'tür.)
Adım 2: İkinci alanın kenarını bul: 32 : 2 = 16 m.
Adım 3: İkinci alanın alanını hesapla: 16 · 16 = 256 m².
Sağlama: Kenar yarıya indiğinde alan [[1|4]]'e iner: 1 024 : 4 = 256. Aynı sonuç.
Sık yapılan hata: Kenardaki oranı doğrudan alana uygulamak. Kenar 2 kat küçülürse alan 2^{2} = 4 kat küçülür.
Cevap B.`
},
{
  id: "mat-kk-024",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 3,
  soru: "Bir biyoloji laboratuvarında mikroskopla incelenen kare biçimli bir doku kesitinin alanı 0,0025 mm² olarak ölçülmüştür.\n**Buna göre bu kesitin bir kenar uzunluğu kaç milimetredir?**",
  gorsel: null,
  secenekler: ["0,00125", "0,0025", "0,005", "0,05"],
  dogru: 3,
  hatalar: [
    "Karekök almak yerine alanı 2'ye böldün: 0,0025 : 2 = 0,00125. Oysa 0,00125 · 0,00125 çok daha küçük bir sayı verir.",
    "Alanı olduğu gibi kenar uzunluğu olarak yazdın. Bunların birimleri bile farklıdır: alan mm², kenar mm'dir.",
    "Virgülden sonraki basamak sayısını yanlış hesapladın: 0,005 · 0,005 = 0,000025'tir. Karekök alınırken basamak sayısı yarıya iner; 0,0025'te dört basamak vardı, kenarda iki basamak olmalıdır.",
    null
  ],
  aciklama: `Kare kesitin kenar uzunluğu alanının kareköküdür. Ondalık gösterimin karekökünü almak için sayıyı kesre çevirmek en güvenli yoldur.
Adım 1: Alanı kesre çevir: 0,0025 = [[25|10000]].
Adım 2: Payın ve paydanın kareköklerini ayrı ayrı al: √{25} = 5 ve √{10000} = 100.
Adım 3: Sonucu yaz: [[5|100]] = 0,05 mm.
Sağlama: 0,05 · 0,05 = 0,0025. Alan tutuyor.
Sık yapılan hata: Virgülden sonraki basamak sayısını takip etmemek. Karekök alındığında bu sayı __yarıya__ iner: 0,0025'te dört basamak vardı, 0,05'te iki basamak var.
Cevap D.`
},
{
  id: "mat-kk-025",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 3,
  soru: "Bir etkinlikte öğrencilerden 675 sayısını, bölümün tam kare bir doğal sayı olmasını sağlayacak biçimde bir doğal sayıya bölmeleri istenmiştir.\n**Buna göre 675 sayısı en küçük hangi doğal sayıya bölünmelidir?**",
  gorsel: null,
  secenekler: ["3", "5", "15", "27"],
  dogru: 0,
  hatalar: [
    null,
    "675 : 5 = 135 eder. 11^{2} = 121 ve 12^{2} = 144 olduğundan 135 tam kare değildir.",
    "675 : 15 = 45 eder. 6^{2} = 36 ve 7^{2} = 49 olduğundan 45 tam kare değildir.",
    "675 : 27 = 25 = 5^{2} eder; bu gerçekten tam karedir. Ancak 3 < 27 olduğundan 27, aranan en küçük bölen değildir."
  ],
  aciklama: `Bir sayının tam kare olması, asal çarpanlarının üslerinin hepsinin çift olması demektir. Bölerek tam kare elde etmek için üssü tek olan çarpanlar atılır.
Adım 1: 675'i asal çarpanlarına ayır: 675 = 27 · 25 = 3^{3} · 5^{2}.
Adım 2: Üsleri incele: 5'in üssü 2'dir (çift, sorun yok); 3'ün üssü 3'tür (tek). Tek üssü çift yapmak için bir tane 3 atılmalıdır.
Adım 3: 675'i 3'e böl: 675 : 3 = 225 ve 225 = 15^{2}'dir. Sonuç tam karedir.
Sağlama: 3^{3} : 3 = 3^{2} olur; geriye 3^{2} · 5^{2} = (3 · 5)^{2} = 15^{2} kalır. √{225} = 15.
Sık yapılan hata: Tam kare çarpanın kendisini (27 ya da 25) bölen sanmak. Atılması gereken, üssü tek olan çarpandır.
Cevap A.`
},
{
  id: "mat-kk-026",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 3,
  soru: `Bir matbaada kare biçimli bir karton levhadan, kare biçimli etiketler kesilmektedir. Levhanın alanı ve bir etiketin kenar uzunluğu aşağıdaki şekilde verilmiştir.
Kesim sırasında hiç artık bırakılmamaktadır.
**Buna göre bir levhadan kaç etiket kesilir?**`,
  gorsel: `<svg viewBox="0 0 470 220" role="img" aria-label="Kare karton levhanın alanı 0,36 metrekaredir; kesilecek kare etiketin bir kenarı 0,15 metredir."><rect x="45" y="30" width="180" height="180" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="1"><line x1="90" y1="30" x2="90" y2="210"/><line x1="135" y1="30" x2="135" y2="210"/><line x1="180" y1="30" x2="180" y2="210"/><line x1="45" y1="75" x2="225" y2="75"/><line x1="45" y1="120" x2="225" y2="120"/><line x1="45" y1="165" x2="225" y2="165"/></g><text x="135" y="22" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Levha: 0,36 m²</text><rect x="300" y="75" width="60" height="60" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="330" y="65" font-size="15" text-anchor="middle" fill="currentColor">Bir etiket</text><text x="330" y="155" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">0,15 m</text><text x="330" y="190" font-size="15" text-anchor="middle" fill="currentColor">Kaç etiket?</text></svg>`,
  secenekler: ["4", "6", "16", "24"],
  dogru: 2,
  hatalar: [
    "Bir sıraya kaç etiket sığdığını buldun (0,6 : 0,15 = 4) ve orada durdun. Levha kare olduğundan 4 sıra vardır.",
    "0,6 : 0,1 gibi böldün. Etiketin kenarı 0,1 m değil 0,15 m'dir.",
    null,
    "Etiketin alanını 0,015 m² sanıp 0,36 : 0,015 = 24 yaptın. Kenarı 0,15 m olan karenin alanı 0,15 · 0,15 = 0,0225 m²'dir."
  ],
  aciklama: `Kare levhanın kenar uzunluğu alanının kareköküdür; etiket sayısı ise levhanın kenarına bir sıraya kaç etiket sığdığından bulunur.
Adım 1: Levhanın kenarını bul: 0,36 = [[36|100]] olduğundan √{0,36} = [[6|10]] = 0,6 m.
Adım 2: Bir sıraya kaç etiket sığar? 0,6 : 0,15 işleminde iki sayıyı da 100 ile çarp: 60 : 15 = 4 etiket.
Adım 3: Levha kare olduğundan 4 sıra vardır: 4 · 4 = 16 etiket.
Sağlama: Alanlardan da gidebilirsin: bir etiketin alanı 0,15 · 0,15 = 0,0225 m²'dir ve 0,36 : 0,0225 = 16. Aynı sonuç.
Sık yapılan hata: Bir sıradaki sayıyı toplam sanmak. Kenar boyunca 4 etiket varsa levhanın tamamında 4^{2} = 16 etiket vardır.
Cevap C.`
},
{
  id: "mat-kk-027",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 4,
  soru: `Bir bahçe merdiveninin basamakları aşağıdan yukarıya doğru giderek genişlemektedir. İlk dört basamağın genişlikleri aşağıdaki şekilde verilmiştir. Usta, aynı kuralı sürdürerek beşinci basamağı da yapacaktır.
**Buna göre beşinci basamağın genişliği kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 470 230" role="img" aria-label="Merdiven basamaklarının genişlikleri aşağıdan yukarıya kök 8, kök 18, kök 32 ve kök 50 metredir; beşinci basamağın genişliği soruluyor."><g fill="var(--dolgu)" stroke="currentColor" stroke-width="3"><rect x="40" y="185" width="70" height="25"/><rect x="40" y="150" width="100" height="25"/><rect x="40" y="115" width="130" height="25"/><rect x="40" y="80" width="160" height="25"/></g><rect x="40" y="45" width="190" height="25" fill="none" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="8 5"/><g font-size="16" fill="currentColor" font-weight="bold"><text x="245" y="204">1. basamak: √8 m</text><text x="245" y="169">2. basamak: √18 m</text><text x="245" y="134">3. basamak: √32 m</text><text x="245" y="99">4. basamak: √50 m</text></g><text x="245" y="64" font-size="16" fill="var(--vurgu)" font-weight="bold">5. basamak: ? m</text></svg>`,
  secenekler: ["√{68}", "6√{2}", "7√{2}", "10√{2}"],
  dogru: 1,
  hatalar: [
    "Kök içlerindeki artışı sabit (18) sandın: 50 + 18 = 68. Oysa artışlar 10, 14, 18 biçiminde büyüyor; doğru kök içi 72'dir.",
    null,
    "Katsayı örüntüsünde bir adım atladın: 2, 3, 4, 5'ten sonra 6 gelir, 7 değil.",
    "Son basamağın iki katını aldın: 2 · 5√{2} = 10√{2}. Örüntüde katsayı ikiye katlanmıyor, birer birer artıyor."
  ],
  aciklama: `Kareköklü bir örüntüyü görebilmek için önce bütün terimler sadeleştirilir.
Adım 1: Basamakları sadeleştir: √{8} = 2√{2} · √{18} = 3√{2} · √{32} = 4√{2} · √{50} = 5√{2}.
Adım 2: Örüntüyü oku: kök içi hep 2'dir, katsayılar 2, 3, 4, 5 biçiminde birer birer artıyor.
Adım 3: Beşinci basamağın katsayısı 6 olur: 6√{2} metre.
Sağlama: 6√{2} = √{6^{2} · 2} = √{72}'dir. Kök içleri 8, 18, 32, 50, 72 biçiminde ilerler; bunlar 2 · 1^{2}, 2 · 2^{2}, 2 · 3^{2}, 2 · 4^{2}, 2 · 5^{2} sayılarıdır. Örüntü tutuyor.
Sık yapılan hata: Sadeleştirmeden örüntü aramak. Kök içindeki sayılar (8, 18, 32, 50) düzensiz görünür; sadeleştirince düzen ortaya çıkar.
Cevap B.`
},
{
  id: "mat-kk-028",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir salonun zemini kare biçimindedir ve bir kenarı 30 cm olan kare fayanslarla, hiçbir fayans kesilmeden ve boşluk kalmadan kaplanmıştır. Kullanılan fayans sayısı 240'tan fazla, 280'den azdır.
**Buna göre salonun bir kenarı kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 460 225" role="img" aria-label="Kare salonun zemini bir kenarı 30 santimetre olan kare fayanslarla kaplanmıştır; fayans sayısı 240 ile 280 arasındadır."><rect x="45" y="30" width="180" height="180" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="1"><line x1="81" y1="30" x2="81" y2="210"/><line x1="117" y1="30" x2="117" y2="210"/><line x1="153" y1="30" x2="153" y2="210"/><line x1="189" y1="30" x2="189" y2="210"/><line x1="45" y1="66" x2="225" y2="66"/><line x1="45" y1="102" x2="225" y2="102"/><line x1="45" y1="138" x2="225" y2="138"/><line x1="45" y1="174" x2="225" y2="174"/></g><text x="135" y="22" font-size="15" text-anchor="middle" fill="currentColor">Salon zemini (kare)</text><line x1="45" y1="220" x2="225" y2="220" stroke="var(--vurgu)" stroke-width="2"/><text x="135" y="216" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text><text x="255" y="70" font-size="16" fill="currentColor" font-weight="bold">Bir fayans: 30 cm × 30 cm</text><text x="255" y="105" font-size="16" fill="currentColor" font-weight="bold">Fayans sayısı:</text><text x="255" y="130" font-size="16" fill="currentColor" font-weight="bold">240'tan fazla, 280'den az</text><text x="255" y="165" font-size="15" fill="currentColor">1 m = 100 cm</text></svg>`,
  secenekler: ["4,5", "4,8", "5,1", "16"],
  dogru: 1,
  hatalar: [
    "Fayans sayısını 225 (yani 15^{2}) aldın. 225 sayısı 240'tan fazla değildir; bu yüzden koşulu sağlamaz.",
    null,
    "Fayans sayısını 289 (yani 17^{2}) aldın. 289 sayısı 280'den azdır diyemeyiz; bu yüzden koşulu sağlamaz.",
    "Bir kenardaki fayans sayısını (16) cevap yazdın. Soru kenar uzunluğunu metre cinsinden istiyor."
  ],
  aciklama: `Zemin kare ve fayanslar da kare olduğuna göre bir kenardaki fayans sayısı ile sıra sayısı eşittir. Öyleyse toplam fayans sayısı bir tam kare olmalıdır.
Adım 1: 240 ile 280 arasındaki tam kareleri ara: 15^{2} = 225 (küçük), 16^{2} = 256 (uygun), 17^{2} = 289 (büyük). Tek uygun sayı 256'dır.
Adım 2: Bir kenardaki fayans sayısını bul: √{256} = 16 fayans.
Adım 3: Kenar uzunluğunu hesapla: 16 · 30 = 480 cm.
Adım 4: Birimi çevir: 480 cm = 4,8 m.
Sağlama: Kenarı 4,8 m olan karenin alanı 23,04 m²'dir; bir fayansın alanı 0,3 · 0,3 = 0,09 m²'dir. 23,04 : 0,09 = 256 fayans. Tutuyor.
Sık yapılan hata: Ara sonucu (16 fayans) cevap sanmak ya da birimi çevirmeyi unutmak. Soru kökündeki birimi her zaman son kez oku.
Cevap B.`
},
{
  id: "mat-kk-029",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 4,
  soru: "Kare biçiminde bir bahçenin alanı 540 m²'den büyük, 600 m²'den küçüktür. Bahçenin bir kenar uzunluğu tam sayı metredir.\n**Buna göre bahçenin alanı kaç m²'dir?**",
  gorsel: null,
  secenekler: ["484", "529", "576", "600"],
  dogru: 2,
  hatalar: [
    "22^{2} = 484 değerini seçtin. 484 sayısı 540'tan küçük olduğu için verilen aralıkta değildir.",
    "23^{2} = 529 değerini seçtin. 529 sayısı da 540'tan küçüktür; aralığın hemen altında kalır.",
    null,
    "Üst sınırı cevap yazdın. 600 sayısı hem aralığa dâhil değildir hem de tam kare değildir (24^{2} = 576, 25^{2} = 625)."
  ],
  aciklama: `Kenar uzunluğu tam sayı olan bir karenin alanı bir tam karedir. Öyleyse verilen aralıkta hangi tam karenin bulunduğunu aramalısın.
Adım 1: Aralığı yaz: 540 < alan < 600.
Adım 2: Yakın tam kareleri hesapla: 23^{2} = 529 · 24^{2} = 576 · 25^{2} = 625.
Adım 3: Bunlardan yalnızca 576 sayısı 540 ile 600 arasındadır.
Adım 4: Bahçenin alanı 576 m²'dir (kenarı 24 metredir).
Sağlama: 540 < 576 < 600 ✓ ve √{576} = 24, bir tam sayıdır ✓.
Sık yapılan hata: Aralıktaki herhangi bir sayıyı seçmek. Kenarın tam sayı olması koşulu, alanı tek bir değere indirir.
Cevap C.`
},
{
  id: "mat-kk-030",
  kazanim: "M.8.1.3.8",
  kademe: 0,
  zorluk: 4,
  soru: "Kare biçiminde bir sebze bahçesinin alanı 18 m²'dir.\n**Buna göre bu bahçenin bir kenar uzunluğu ile ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "3 ile 4 metre arasında olan rasyonel bir sayıdır.",
    "3 ile 4 metre arasında olan irrasyonel bir sayıdır.",
    "4 ile 5 metre arasında olan rasyonel bir sayıdır.",
    "4 ile 5 metre arasında olan irrasyonel bir sayıdır."
  ],
  dogru: 3,
  hatalar: [
    "Hem aralığı hem sayının türünü yanlış belirledin. 16 < 18 < 25 olduğundan kenar 4 ile 5 metre arasındadır; ayrıca 18 tam kare olmadığı için karekökü rasyonel değildir.",
    "Sayının türünü doğru belirledin ama aralığı yanlış buldun: 3^{2} = 9 ve 4^{2} = 16'dır. 18 > 16 olduğundan kenar 4 metreden uzundur.",
    "Aralığı doğru buldun ama sayı türünü yanlış belirledin. 18 tam kare olmadığından √{18} iki tam sayının oranı biçiminde yazılamaz; rasyonel değildir.",
    null
  ],
  aciklama: `Kare bahçenin kenar uzunluğu alanının kareköküdür: kenar = √{18} m. Bu sayının hem hangi iki tam sayı arasında olduğunu hem de türünü belirlemelisin.
Adım 1: Aralığı bul: 4^{2} = 16 ve 5^{2} = 25'tir. 16 < 18 < 25 olduğundan 4 < √{18} < 5'tir.
Adım 2: Türünü belirle: 18 tam kare __değildir__ (16 ile 25 arasındadır). Tam kare olmayan bir doğal sayının karekökü iki tam sayının oranı biçiminde yazılamaz; yani irrasyoneldir.
Adım 3: Öyleyse kenar uzunluğu 4 ile 5 metre arasında olan irrasyonel bir sayıdır.
Sağlama: √{18} = 3√{2} ≈ 3 · 1,414 = 4,24 m'dir. Hem aralık hem tür uyuyor.
Sık yapılan hata: Sayının yalnızca büyüklüğüne bakıp türünü atlamak. Soru iki şeyi birden sorduğunda her iki koşulu da denetlemelisin.
Cevap D.`
}
);
