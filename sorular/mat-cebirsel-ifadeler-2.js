// Matematik — Cebirsel İfadeler ve Özdeşlikler | 2. dosya
// Kademe 3 (LGS Ayarı): mat-ci-301…325 · Havuz: mat-ci-001…015
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cebirsel-ifadeler"] = window.LGS_BANK["cebirsel-ifadeler"] || []).push(
{
  id: "mat-ci-301",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kafede masa başına 5 TL servis ücreti alınmakta, ayrıca sipariş edilen her ürün için tablodaki birim fiyatlar ödenmektedir. Bir masa a bardak çay ve b dilim kek sipariş etmiştir. Bu masanın ödeyeceği toplam ücret 4a + 9b + 5 cebirsel ifadesiyle gösterilmiştir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kalem</th><th>Tutar (TL)</th></tr><tr><td>Bir bardak çay</td><td>4</td></tr><tr><td>Bir dilim kek</td><td>9</td></tr><tr><td>Servis ücreti (masa başına)</td><td>5</td></tr></table>`,
  secenekler: [`İfade üç terimlidir ve a = 2, b = 3 için değeri 35'tir.`, `İfade iki terimlidir ve a = 2, b = 3 için değeri 40'tır.`, `İfade üç terimlidir ve a = 2, b = 3 için değeri 40'tır.`, `İfade üç terimlidir ve a = 3, b = 2 için değeri 40'tır.`],
  dogru: 2,
  hatalar: [
    `Sabit terimi (servis ücretini) hesaba katmadın: 8 + 27 = 35 yalnızca çay ve kek tutarıdır. Sabit terim de ifadenin değerine katılır.`,
    `Sabit terimi saymadın. 4a, 9b ve 5 olmak üzere ifadenin üç terimi vardır.`,
    null,
    `Değişkenlerin yerini karıştırdın. a çay, b kek sayısıdır; a = 3, b = 2 için değer 12 + 18 + 5 = 35 olur.`
  ],
  aciklama: `Cebirsel ifadede toplama ve çıkarma işaretleriyle ayrılan her parçaya terim denir. Yalnızca sayıdan oluşan terime sabit terim denir.
Adım 1: 4a, 9b ve 5 olmak üzere ifadenin üç terimi vardır. "İki terimlidir" diyen B yanlıştır.
Adım 2: a = 2, b = 3 için ifadenin değeri 4 · 2 + 9 · 3 + 5 = 8 + 27 + 5 = 40 olur. Bu, C seçeneğini doğrular.
Adım 3: A'daki 35 değeri servis ücreti unutulduğunda çıkar. D'de a = 3, b = 2 alınırsa 12 + 18 + 5 = 35 bulunur; 40 değildir.
Sağlama: Masaya 2 çay (8 TL), 3 kek (27 TL) ve 5 TL servis ücreti gelir; toplam 40 TL eder.
Sık yapılan hata: Sabit terimi ne terim sayarken ne de değer hesaplarken katmamak.
Cevap C.`
},
{
  id: "mat-ci-302",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Dikdörtgen biçimli bir bahçenin kısa kenarı (x + 2) metre, uzun kenarı (3x − 1) metredir. Bahçenin bir köşesine kenarı x metre olan kare biçimli bir havuz yapılmıştır. Havuzun kapladığı yer dışında kalan bahçe alanına çim ekilecektir.
**Buna göre çim ekilecek alan kaç metrekaredir?**`,
  gorsel: `<svg viewBox="0 0 480 230"><rect x="60" y="45" width="360" height="140" fill="none" stroke="currentColor" stroke-width="2"/><rect x="350" y="115" width="70" height="70" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="240" y="32" text-anchor="middle" font-size="16" fill="currentColor">3x − 1</text><text x="52" y="120" text-anchor="end" font-size="16" fill="currentColor">x + 2</text><text x="385" y="156" text-anchor="middle" font-size="16" fill="currentColor">x</text><text x="195" y="120" text-anchor="middle" font-size="16" fill="currentColor">çim</text><text x="385" y="206" text-anchor="middle" font-size="14" fill="currentColor">havuz</text></svg>`,
  secenekler: [`2x^{2} + 5x − 2`, `2x^{2} + 5x + 2`, `3x^{2} + 5x − 2`, `4x^{2} + 5x − 2`],
  dogru: 0,
  hatalar: [
    null,
    `(3x − 1)(x + 2) çarpımında −1 · 2 = −2 olmasına rağmen +2 yazdın; sabit terim negatiftir.`,
    `Havuzun alanını (x^{2}) çıkarmayı unuttun; bu ifade bütün bahçenin alanıdır.`,
    `Havuzun alanını çıkarmak yerine ekledin; çim alanı bahçeden küçüktür.`
  ],
  aciklama: `Dikdörtgenin alanı, kenar uzunluklarının çarpımıdır; her terim diğer ifadenin her terimiyle çarpılır.
Adım 1: Bahçenin alanı: (3x − 1)(x + 2) = 3x^{2} + 6x − x − 2 = 3x^{2} + 5x − 2.
Adım 2: Havuzun alanı x · x = x^{2} olur.
Adım 3: Çim alanı = bahçe − havuz = 3x^{2} + 5x − 2 − x^{2} = 2x^{2} + 5x − 2.
Sağlama: x = 2 için bahçe 5 · 4 = 20 m^{2}, havuz 4 m^{2}, çim 16 m^{2} eder. İfade: 8 + 10 − 2 = 16 olur.
Sık yapılan hata: Negatif terimle çarparken işareti kaçırmak. (−1) · (+2) = −2'dir.
Cevap A.`
},
{
  id: "mat-ci-303",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun kare biçimli ilan panosunun kenarı 2x santimetredir. Pano büyütülürken iki komşu kenarına 5 cm genişliğinde şeritler eklenerek yeni bir kare elde ediliyor. Şekilde yeni panonun eklenen kısmı boyalı gösterilmiştir.
**Buna göre eklenen kısmın alanı kaç santimetrekaredir?**`,
  gorsel: `<svg viewBox="0 0 400 290"><rect x="60" y="40" width="150" height="150" fill="none" stroke="currentColor" stroke-width="2"/><path d="M210,40 H250 V230 H60 V190 H210 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="135" y="28" text-anchor="middle" font-size="16" fill="currentColor">2x</text><text x="230" y="28" text-anchor="middle" font-size="16" fill="currentColor">5</text><text x="52" y="120" text-anchor="end" font-size="16" fill="currentColor">2x</text><text x="52" y="215" text-anchor="end" font-size="16" fill="currentColor">5</text><text x="60" y="262" text-anchor="start" font-size="16" fill="currentColor">Boyalı kısım: eklenen şerit</text></svg>`,
  secenekler: [`25`, `10x + 25`, `20x + 10`, `20x + 25`],
  dogru: 3,
  hatalar: [
    `Yeni karenin alanını (2x + 5)^{2} = 4x^{2} + 25 yazıp ortadaki terimi atladın. Bu durumda eklenen alan yalnızca 25 çıkar.`,
    `Ortadaki terimi 2ab yerine ab aldın: 2 · 2x · 5 = 20x olmalıydı.`,
    `Son terimde 5^{2} = 25 yerine 2 · 5 = 10 yazdın.`,
    null
  ],
  aciklama: `(a + b)^{2} = a^{2} + 2ab + b^{2} özdeşliği, kenarı (a + b) olan karenin alanını dört parçaya ayırır: a^{2}, iki tane ab ve b^{2}.
Adım 1: Yeni karenin kenarı (2x + 5) olduğundan alanı (2x + 5)^{2} = (2x)^{2} + 2 · 2x · 5 + 5^{2} = 4x^{2} + 20x + 25 olur.
Adım 2: Eski panonun alanı (2x)^{2} = 4x^{2}'dir.
Adım 3: Eklenen alan = 4x^{2} + 20x + 25 − 4x^{2} = 20x + 25.
Sağlama: x = 1 için yeni kare 7 · 7 = 49, eski kare 2 · 2 = 4; fark 45'tir. 20 + 25 = 45.
Sık yapılan hata: (a + b)^{2} = a^{2} + b^{2} yazmak.
Cevap D.`
},
{
  id: "mat-ci-304",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Alanı 12x^{2} + 18x metrekare olan dikdörtgen biçimli bir seranın bir kenarı 6x metredir. Serinin diğer kenarının uzunluğu, alan ifadesi ortak çarpan parantezine alınarak bulunacaktır. Daha sonra serinin dört kenarı boyunca bir sıra koruma teli çekilecektir.
**Buna göre çekilecek telin uzunluğu kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 460 190"><rect x="60" y="45" width="300" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="33" text-anchor="middle" font-size="16" fill="currentColor">6x</text><text x="380" y="100" text-anchor="start" font-size="16" fill="currentColor">?</text><text x="210" y="100" text-anchor="middle" font-size="16" fill="currentColor">Alan = 12x² + 18x</text><text x="210" y="172" text-anchor="middle" font-size="14" fill="currentColor">Tel: serinin çevresi boyunca</text></svg>`,
  secenekler: [`8x + 3`, `16x + 6`, `2x + 3`, `16x + 3`],
  dogru: 1,
  hatalar: [
    `Çevre yerine iki komşu kenarın toplamını (yarım çevreyi) buldun; çevre bunun 2 katıdır.`,
    null,
    `Yalnızca serinin diğer kenarını buldun; sorulan tel uzunluğu yani çevredir.`,
    `Çevrede 2 ile çarparken parantezin tamamını çarpmadın: 2(8x + 3) = 16x + 6 olur, sabit terim de çarpılır.`
  ],
  aciklama: `Ortak çarpan parantezine alma, bütün terimlerde bulunan çarpanı dışarı almaktır. Dışarı en büyük ortak çarpan alınır. Dikdörtgenin çevresi, iki komşu kenarın toplamının 2 katıdır.
Adım 1: 12 ve 18'in en büyük ortak böleni 6'dır; x^{2} ve x'in ortak çarpanı x'tir. Ortak çarpan 6x olur.
Adım 2: 12x^{2} + 18x = 6x · 2x + 6x · 3 = 6x(2x + 3). Bir kenar 6x olduğuna göre diğer kenar (2x + 3) metredir.
Adım 3: Komşu kenarların toplamı 6x + 2x + 3 = 8x + 3 olur.
Adım 4: Çevre = 2 · (8x + 3) = 16x + 6 metredir.
Sağlama: x = 1 için kenarlar 6 ve 5, çevre 2 · 11 = 22 olur. 16 + 6 = 22.
Sık yapılan hata: Çevreyi bulurken yalnızca kenarların toplamında kalmak ya da 2 ile çarparken sabit terimi unutmak.
Cevap B.`
},
{
  id: "mat-ci-305",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir manavda 1 kg elmanın fiyatı x TL, 1 kg armudun fiyatı y TL'dir. Deniz ile Kaan'ın bu manavdan aldıkları meyveler tabloda verilmiştir. Kaan, Deniz'den daha çok ödeme yapmıştır.
**Buna göre Kaan'ın ödediği tutar, Deniz'in ödediği tutardan kaç TL fazladır?**`,
  gorsel: `<table class="tablo"><tr><th>Kişi</th><th>Elma (kg)</th><th>Armut (kg)</th></tr><tr><td>Deniz</td><td>3</td><td>2</td></tr><tr><td>Kaan</td><td>2</td><td>5</td></tr></table>`,
  secenekler: [`x − 3y`, `−x + 3y`, `−x + 7y`, `5x + 7y`],
  dogru: 1,
  hatalar: [
    `Çıkarmayı ters sırayla yaptın: Deniz'in ödemesinden Kaan'ınkini çıkardın.`,
    null,
    `Parantez önündeki eksiyi yalnızca ilk terime uyguladın: 2x + 5y − 3x + 2y yazdın.`,
    `Fark yerine iki ödemeyi topladın.`
  ],
  aciklama: `Benzer terimler (aynı değişkenli terimler) katsayıları toplanarak ya da çıkarılarak birleştirilir.
Adım 1: Deniz'in ödemesi 3x + 2y, Kaan'ınki 2x + 5y TL'dir.
Adım 2: Fark = (2x + 5y) − (3x + 2y). Eksi işareti parantezdeki her terime dağıtılır: 2x + 5y − 3x − 2y.
Adım 3: x'li terimler: 2x − 3x = −x. y'li terimler: 5y − 2y = 3y. Fark −x + 3y olur.
Sağlama: x = 2, y = 3 alırsak Deniz 6 + 6 = 12, Kaan 4 + 15 = 19 öder; fark 7'dir. −2 + 9 = 7.
Sık yapılan hata: Eksi işaretini parantezin içindeki bütün terimlere dağıtmamak.
Cevap B.`
},
{
  id: "mat-ci-306",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki şekilde uzunluğu (2x + 3) birim, genişliği (x + 2) birim olan dikdörtgen, gösterilen cebir karolarıyla tamamen kaplanacaktır. Kenarı x birim olan kare karo "x^{2} karosu", kenarları x ve 1 birim olan dikdörtgen karo "x karosu", kenarı 1 birim olan kare karo "birim karo" adını alır.
**Buna göre dikdörtgeni boşluk ve çakışma kalmadan kaplamak için kaç tane x^{2} karosu, x karosu ve birim karo gerekir?**`,
  gorsel: `<svg viewBox="0 0 500 270"><rect x="70" y="45" width="340" height="140" fill="none" stroke="currentColor" stroke-width="2"/><text x="240" y="32" text-anchor="middle" font-size="16" fill="currentColor">2x + 3</text><text x="62" y="120" text-anchor="end" font-size="16" fill="currentColor">x + 2</text><rect x="70" y="215" width="36" height="36" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="88" y="239" text-anchor="middle" font-size="14" fill="currentColor">x²</text><text x="114" y="238" text-anchor="start" font-size="14" fill="currentColor">x² karosu</text><rect x="210" y="224" width="36" height="18" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="254" y="238" text-anchor="start" font-size="14" fill="currentColor">x karosu</text><rect x="340" y="224" width="18" height="18" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="366" y="238" text-anchor="start" font-size="14" fill="currentColor">birim karo</text></svg>`,
  secenekler: [`2 x^{2} karosu, 4 x karosu, 6 birim karo`, `3 x^{2} karosu, 7 x karosu, 6 birim karo`, `2 x^{2} karosu, 7 x karosu, 5 birim karo`, `2 x^{2} karosu, 7 x karosu, 6 birim karo`],
  dogru: 3,
  hatalar: [
    `3 · x = 3x çarpımını saymadın: yalnızca 2x · 2 = 4x karosu aldın.`,
    `x^{2} karosu sayısını 2x ile x'i toplayarak 3 buldun; 2x · x = 2x^{2} olur.`,
    `Birim karoları çarpmak yerine topladın: 3 · 2 = 6 olmalıydı, 3 + 2 = 5 yazdın.`,
    null
  ],
  aciklama: `Dikdörtgenin alanı, cebir karolarının toplam sayısıdır ve alan çarpımı açılarak bulunur: (2x + 3)(x + 2).
Adım 1: 2x · x = 2x^{2} → 2 tane x^{2} karosu.
Adım 2: 2x · 2 = 4x ve 3 · x = 3x → 4 + 3 = 7 tane x karosu.
Adım 3: 3 · 2 = 6 → 6 tane birim karo.
Sağlama: x = 1 için dikdörtgenin alanı 5 · 3 = 15, karoların alanı 2 + 7 + 6 = 15 olur.
Sık yapılan hata: Çaprazdaki iki çarpımdan birini unutmak.
Cevap D.`
},
{
  id: "mat-ci-307",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir belediye, kare biçimli bir parkın alanını metrekare cinsinden 46^{2} − 2 · 46 · 9 + 9^{2} işlemiyle göstermiştir. Parkın dört kenarı boyunca bir sıra çit çekilecektir. Çit uzunluğunu hesap makinesi kullanmadan bulmak isteyen mühendis, önce uygun bir özdeşlikten yararlanmayı düşünmektedir.
**Buna göre çekilecek çit kaç metredir?**`,
  gorsel: null,
  secenekler: [`37`, `74`, `148`, `220`],
  dogru: 2,
  hatalar: [
    `Parkın bir kenarını (37 m) buldun; çit dört kenar boyunca çekilir, çevre sorulmaktadır.`,
    `Çevreyi iki kenarın toplamı (2 · 37) aldın; karenin dört kenarı vardır.`,
    null,
    `Özdeşliği (46 + 9)^{2} = 55^{2} diye yorumladın ve kenarı 55 buldun; ortadaki terimin işareti eksi olduğundan kenar 46 − 9 = 37'dir.`
  ],
  aciklama: `a^{2} − 2ab + b^{2} biçimindeki bir ifade, (a − b)^{2} ile aynıdır. Karenin alanı kenarının karesidir; çevresi kenarının 4 katıdır.
Adım 1: a = 46 ve b = 9 alınırsa 2ab = 2 · 46 · 9 olduğundan ifade tam kare özdeşliğine uyar.
Adım 2: 46^{2} − 2 · 46 · 9 + 9^{2} = (46 − 9)^{2} = 37^{2}.
Adım 3: Alan 37^{2} metrekare ise karenin kenarı 37 metredir.
Adım 4: Çevre = 4 · 37 = 148 metredir.
Sağlama: 46^{2} = 2116, 2 · 46 · 9 = 828, 9^{2} = 81; 2116 − 828 + 81 = 1369 = 37^{2}.
Sık yapılan hata: Kenarı bulup durmak ya da çevre yerine alanı yazmak.
Cevap C.`
},
{
  id: "mat-ci-308",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Kare biçimli bir oyun alanının zeminine yapılan kaplamanın alanı 4x^{2} + 12x + 9 metrekaredir. Belediye, oyun alanının dört kenarı boyunca güvenlik bandı çekecektir. Band, alanın çevresi kadar uzunlukta kullanılacaktır.
**Buna göre kullanılacak bandın uzunluğu kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 320 230"><rect x="80" y="40" width="150" height="150" fill="none" stroke="currentColor" stroke-width="2"/><text x="155" y="105" text-anchor="middle" font-size="16" fill="currentColor">Alan =</text><text x="155" y="130" text-anchor="middle" font-size="16" fill="currentColor">4x² + 12x + 9</text><text x="155" y="28" text-anchor="middle" font-size="16" fill="currentColor">kenar = ?</text></svg>`,
  secenekler: [`4x + 6`, `8x + 3`, `8x + 12`, `8x + 24`],
  dogru: 2,
  hatalar: [
    `Çevreyi iki kenarın toplamı olarak aldın; karenin dört kenarı vardır.`,
    `Çevreyi 4 · 2x + 3 diye hesapladın; 4 ile çarparken parantezin tamamı çarpılmalı.`,
    null,
    `Kenarı 2x + 6 buldun: 12x'in yarısını sabit terim sandın. Sabit terim 9'un kareköküdür, yani 3.`
  ],
  aciklama: `a^{2} + 2ab + b^{2} biçimindeki ifade (a + b)^{2} olarak yazılır. Kenarı bulunan karenin çevresi, kenarın 4 katıdır.
Adım 1: 4x^{2} = (2x)^{2} ve 9 = 3^{2}. Ortadaki terim 2 · 2x · 3 = 12x olduğundan ifade tam karedir: (2x + 3)^{2}.
Adım 2: Alan (2x + 3)^{2} ise kare biçimli alanın kenarı (2x + 3) metredir.
Adım 3: Çevre = 4 · (2x + 3) = 8x + 12 metre.
Sağlama: x = 1 için alan 4 + 12 + 9 = 25, kenar 5, çevre 20'dir. 8 + 12 = 20.
Sık yapılan hata: Kenarı bulduktan sonra çevre için 4 ile çarparken sabit terimi çarpmamak.
Cevap C.`
},
{
  id: "mat-ci-309",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun matematik kulübünde dört üye, kenar uzunlukları x'e bağlı olan birer bahçenin alanını açarak tabloya yazmıştır. Kulüp öğretmeni, yalnızca bir üyenin yazdığı eşitliğin x'in her değeri için doğru olduğunu, diğerlerinin ise işlem hatası içerdiğini söylemiştir.
**Buna göre hangi üyenin yazdığı eşitlik x'in her değeri için doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Üye</th><th>Bahçe</th><th>Yazılan alan eşitliği</th></tr><tr><td>Ayşe</td><td>Kenarı (x − 7) m olan kare</td><td>(x − 7)² = x² − 14x − 49</td></tr><tr><td>Burak</td><td>Kenarı (3x + 2) m olan kare</td><td>(3x + 2)² = 9x² + 6x + 4</td></tr><tr><td>Can</td><td>Kenarları (x + 8) m ve (x − 8) m olan dikdörtgen</td><td>(x + 8)(x − 8) = x² − 16</td></tr><tr><td>Derya</td><td>Kenarı (2x − 5) m olan kare</td><td>(2x − 5)² = 4x² − 20x + 25</td></tr></table>`,
  secenekler: [`Ayşe'nin`, `Burak'ın`, `Can'ın`, `Derya'nın`],
  dogru: 3,
  hatalar: [
    `Ayşe'nin eşitliğinde son terimin işareti yanlış: (−7)^{2} = +49 olur. Kare özdeşliğinde son terim her zaman artıdır.`,
    `Burak'ın eşitliğinde ortadaki terim yanlış: 2 · 3x · 2 = 12x olmalıydı, 6x yazılmış.`,
    `Can'ın eşitliğinde son terim yanlış: iki kare farkında son terim 8^{2} = 64'tür, 16 değil.`,
    null
  ],
  aciklama: `Her x değeri için doğru olan eşitliğe özdeşlik denir. Kullanacağımız özdeşlikler: (a ± b)^{2} = a^{2} ± 2ab + b^{2} ve (a − b)(a + b) = a^{2} − b^{2}.
Adım 1: Ayşe: (x − 7)^{2} = x^{2} − 14x + 49'dur; tabloda son terim −49 yazılmış, yanlış.
Adım 2: Burak: (3x + 2)^{2} = 9x^{2} + 12x + 4'tür; tabloda ortadaki terim 6x yazılmış, yanlış.
Adım 3: Can: (x + 8)(x − 8) = x^{2} − 64'tür; tabloda x^{2} − 16 yazılmış, yanlış.
Adım 4: Derya: (2x − 5)^{2} = (2x)^{2} − 2 · 2x · 5 + 5^{2} = 4x^{2} − 20x + 25. Tablodaki eşitlik doğrudur.
Sağlama: x = 1 için Derya'nın eşitliğinin sol tarafı (−3)^{2} = 9, sağ tarafı 4 − 20 + 25 = 9 olur.
Sık yapılan hata: Ortadaki terimin 2 katsayısını unutmak ya da son terimin işaretini karıştırmak.
Cevap D.`
},
{
  id: "mat-ci-310",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Kenarı x santimetre olan kare biçimli bir kartonun bir köşesinden, kenarı 7 cm olan kare kesilip atılıyor (x > 7). Kalan L biçimli parçanın alanı, bir kenarı (x − 7) cm olan bir dikdörtgenin alanına eşittir. Şekilde bu dikdörtgen yanda gösterilmiştir.
**Buna göre bu dikdörtgenin çevresi kaç santimetredir?**`,
  gorsel: `<svg viewBox="0 0 520 250"><path d="M40,40 H170 V90 H220 V220 H40 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M170,40 H220 V90 H170 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="30" y="135" text-anchor="end" font-size="16" fill="currentColor">x</text><text x="195" y="28" text-anchor="middle" font-size="16" fill="currentColor">7</text><text x="290" y="140" text-anchor="middle" font-size="28" fill="currentColor">→</text><rect x="340" y="95" width="150" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="415" y="85" text-anchor="middle" font-size="16" fill="currentColor">?</text><text x="332" y="145" text-anchor="end" font-size="16" fill="currentColor">x − 7</text><text x="415" y="145" text-anchor="middle" font-size="14" fill="currentColor">aynı alan</text></svg>`,
  secenekler: [`4x`, `2x`, `4x − 28`, `4x − 98`],
  dogru: 0,
  hatalar: [
    null,
    `Dikdörtgenin kenarlarını (x − 7) ve (x + 7) buldun ama çevre için bu iki kenarı yalnızca topladın; çevre bu toplamın 2 katıdır.`,
    `Dikdörtgeni kenarı (x − 7) olan bir kare sandın ve çevresini 4(x − 7) aldın.`,
    `Alanı x^{2} − 49 = x(x − 49) diye çarpanlara ayırdın; bu ayırma doğru değildir. Diğer kenar (x + 7) olmalıydı.`
  ],
  aciklama: `İki karenin alanları farkı a^{2} − b^{2}, (a − b)(a + b) biçiminde çarpanlarına ayrılır. Dikdörtgenin alanı, iki komşu kenarın çarpımıdır.
Adım 1: Kalan parçanın alanı x^{2} − 7^{2} = x^{2} − 49'dur.
Adım 2: x^{2} − 49 = (x − 7)(x + 7). Dikdörtgenin bir kenarı (x − 7) cm olduğundan diğer kenarı (x + 7) cm olur.
Adım 3: Çevre = 2 · [(x − 7) + (x + 7)] = 2 · 2x = 4x cm.
Sağlama: x = 10 için alan 100 − 49 = 51'dir. Kenarlar 3 ve 17, 3 · 17 = 51; çevre 2 · (3 + 17) = 40 = 4 · 10.
Sık yapılan hata: Kenarları bulduktan sonra çevre yerine kenarların toplamını yazmak.
Cevap A.`
},
{
  id: "mat-ci-311",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Kenar uzunlukları (3x − 2) birim ve (2x − 5) birim olan bir dikdörtgenin alanı ax^{2} + bx + c biçiminde yazılmıştır. Burada x, kenarları pozitif yapan uygun bir sayıdır ve a, b, c birer tam sayıdır.
**Buna göre a + b + c toplamı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 440 190"><rect x="60" y="45" width="300" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="32" text-anchor="middle" font-size="16" fill="currentColor">3x − 2</text><text x="52" y="100" text-anchor="end" font-size="16" fill="currentColor">2x − 5</text><text x="210" y="100" text-anchor="middle" font-size="16" fill="currentColor">Alan = ax² + bx + c</text></svg>`,
  secenekler: [`−23`, `−3`, `5`, `35`],
  dogru: 1,
  hatalar: [
    `Sabit terimi −10 buldun; iki negatif sayının çarpımı (−2) · (−5) = +10'dur.`,
    null,
    `x'li iki çarpımı (−15x ve −4x) toplarken birinin işaretini değiştirdin ve b = −11 buldun.`,
    `Katsayıların işaretlerini hep pozitif aldın: 6 + 19 + 10 = 35.`
  ],
  aciklama: `Çarpma işleminde birinci ifadenin her terimi ikinciyle çarpılır, sonra benzer terimler toplanır.
Adım 1: (3x − 2)(2x − 5) = 6x^{2} − 15x − 4x + 10.
Adım 2: Benzer terimleri topla: 6x^{2} − 19x + 10. Demek ki a = 6, b = −19, c = 10.
Adım 3: a + b + c = 6 − 19 + 10 = −3.
Sağlama: Katsayılar toplamı, x = 1 için ifadenin değeridir: (3 − 2)(2 − 5) = 1 · (−3) = −3.
Sık yapılan hata: Negatif terimlerin çarpımında işaretleri karıştırmak.
Cevap B.`
},
{
  id: "mat-ci-312",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Kenarı 102 metre olan kare biçimli bir bahçenin tam ortasına, kenarları bahçenin kenarlarına paralel olan ve kenarı 98 metre olan kare biçimli bir çim alan yapılmıştır. Çim alanın dışında kalan yol kısmı baştan sona taşla kaplanacak ve kaplamanın metrekaresi için 6 TL ödenecektir. Kaplama maliyetini hesap makinesi kullanmadan bulmak isteyen usta, özdeşlikten yararlanacaktır.
**Buna göre yolun kaplama maliyeti kaç TL'dir?**`,
  gorsel: `<svg viewBox="0 0 480 250"><path fill-rule="evenodd" d="M40,40 H230 V230 H40 Z M60,60 H210 V210 H60 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="135" y="30" text-anchor="middle" font-size="16" fill="currentColor">102 m</text><text x="135" y="88" text-anchor="middle" font-size="16" fill="currentColor">98 m</text><text x="135" y="140" text-anchor="middle" font-size="16" fill="currentColor">çim</text><text x="260" y="100" text-anchor="start" font-size="16" fill="currentColor">Boyalı kısım: yol</text><text x="260" y="130" text-anchor="start" font-size="16" fill="currentColor">Kaplama: 1 m² için 6 TL</text><text x="260" y="190" text-anchor="start" font-size="14" fill="currentColor">(Şekil ölçekli değildir.)</text></svg>`,
  secenekler: [`96`, `800`, `4 800`, `240 000`],
  dogru: 2,
  hatalar: [
    `Kenarların farkının karesini aldın: (102 − 98)^{2} = 16 ve 16 · 6 = 96. Alanlar farkı kenar farkının karesi değildir.`,
    `Yolun alanını (800 m^{2}) doğru buldun ama m^{2} başına 6 TL ile çarpmadın.`,
    null,
    `Kenarların toplamının karesini aldın: (102 + 98)^{2} = 40 000 ve 40 000 · 6 = 240 000.`
  ],
  aciklama: `İki karenin farkı a^{2} − b^{2} = (a − b)(a + b) biçiminde çarpanlara ayrılır. Yolun alanı, büyük karenin alanından küçük karenin alanı çıkarılarak bulunur.
Adım 1: Yolun alanı 102^{2} − 98^{2} metrekaredir.
Adım 2: Özdeşliğe göre (102 − 98)(102 + 98) = 4 · 200 = 800 m^{2}.
Adım 3: Maliyet = 800 · 6 = 4 800 TL.
Sağlama: 102^{2} = 10 404, 98^{2} = 9 604; fark 800'dür. 800 · 6 = 4 800.
Sık yapılan hata: a^{2} − b^{2} yerine (a − b)^{2} ya da (a + b)^{2} hesaplamak; ayrıca alanı bulup birim fiyatla çarpmayı unutmak.
Cevap C.`
},
{
  id: "mat-ci-313",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Boyutları (x + 4) cm ve (x + 2) cm olan dikdörtgen bir fotoğrafın dört kenarına, her yanda 1 cm kalınlığında bir çerçeve çekilecektir. Şekilde çerçeve boyalı gösterilmiştir. Çerçevenin köşelerindeki küçük kareler de çerçevenin bir parçasıdır.
**Buna göre çerçevenin alanı kaç santimetrekaredir?**`,
  gorsel: `<svg viewBox="0 0 440 280"><path fill-rule="evenodd" d="M40,30 H400 V230 H40 Z M80,70 H360 V190 H80 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="220" y="125" text-anchor="middle" font-size="16" fill="currentColor">Fotoğraf</text><text x="220" y="152" text-anchor="middle" font-size="16" fill="currentColor">(x + 4) × (x + 2)</text><text x="220" y="262" text-anchor="middle" font-size="14" fill="currentColor">Çerçeve her yanda 1 cm kalınlığındadır</text></svg>`,
  secenekler: [`4x + 16`, `2x + 7`, `4x + 12`, `x^{2} + 10x + 24`],
  dogru: 0,
  hatalar: [
    null,
    `Dış dikdörtgenin boyutlarını (x + 5) ve (x + 3) aldın; çerçeve her yanda 1 cm olduğundan her boyut 2 cm artar.`,
    `Köşelerdeki dört birim kareyi (4 cm^{2}) saymadın; yalnızca kenar şeritlerini topladın.`,
    `Dış dikdörtgenin alanını yazdın; fotoğrafın alanını çıkarmadın.`
  ],
  aciklama: `Çerçevenin alanı, dış dikdörtgenin alanı ile iç dikdörtgenin (fotoğrafın) alanı arasındaki farktır.
Adım 1: Çerçeve her yanda 1 cm olduğundan dış boyutlar (x + 4 + 2) ve (x + 2 + 2), yani (x + 6) ve (x + 4) olur.
Adım 2: Dış alan: (x + 6)(x + 4) = x^{2} + 10x + 24. İç alan: (x + 4)(x + 2) = x^{2} + 6x + 8.
Adım 3: Fark: x^{2} + 10x + 24 − x^{2} − 6x − 8 = 4x + 16.
Sağlama: x = 1 için dış alan 7 · 5 = 35, iç alan 5 · 3 = 15; fark 20'dir. 4 + 16 = 20.
Sık yapılan hata: Çerçeve kalınlığını bir kez eklemek; dikdörtgenin iki karşılıklı kenarında da çerçeve vardır.
Cevap A.`
},
{
  id: "mat-ci-314",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir halı mağazasında kenarı (x + 3) metre olan kare biçimli bir halı ile kenarı (x − 3) metre olan kare biçimli bir halı satılmaktadır (x > 3). Mağaza sahibi, büyük halının küçük halıdan kaç metrekare daha geniş olduğunu x cinsinden yazıp vitrindeki etikete eklemek istiyor.
**Buna göre iki halının alanları farkı kaç metrekaredir?**`,
  gorsel: `<svg viewBox="0 0 420 230"><rect x="40" y="40" width="140" height="140" fill="none" stroke="currentColor" stroke-width="2"/><rect x="240" y="80" width="100" height="100" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="110" y="30" text-anchor="middle" font-size="16" fill="currentColor">x + 3</text><text x="32" y="115" text-anchor="end" font-size="16" fill="currentColor">x + 3</text><text x="290" y="70" text-anchor="middle" font-size="16" fill="currentColor">x − 3</text><text x="232" y="135" text-anchor="end" font-size="16" fill="currentColor">x − 3</text><text x="110" y="115" text-anchor="middle" font-size="14" fill="currentColor">büyük halı</text><text x="290" y="135" text-anchor="middle" font-size="14" fill="currentColor">küçük halı</text><text x="210" y="212" text-anchor="middle" font-size="14" fill="currentColor">(Şekil ölçekli değildir.)</text></svg>`,
  secenekler: [`18`, `6x`, `12x + 18`, `12x`],
  dogru: 3,
  hatalar: [
    `(x + 3)^{2} = x^{2} + 9 ve (x − 3)^{2} = x^{2} − 9 yazdın; iki karede de ortadaki 2ab terimini unuttun.`,
    `Yalnızca bir karenin ortadaki terimini (6x) aldın; fark alınırken 6x − (−6x) = 12x olur.`,
    `(x − 3)^{2} = x^{2} − 6x − 9 yazdın; kare özdeşliğinde son terim her zaman artıdır (+9).`,
    null
  ],
  aciklama: `Karenin alanı kenarının karesidir. Kare özdeşlikleri: (a + b)^{2} = a^{2} + 2ab + b^{2} ve (a − b)^{2} = a^{2} − 2ab + b^{2}.
Adım 1: Büyük halının alanı (x + 3)^{2} = x^{2} + 6x + 9.
Adım 2: Küçük halının alanı (x − 3)^{2} = x^{2} − 6x + 9.
Adım 3: Fark = (x^{2} + 6x + 9) − (x^{2} − 6x + 9). Eksi işareti ikinci parantezdeki her terime dağıtılır: x^{2} + 6x + 9 − x^{2} + 6x − 9 = 12x.
Sağlama: x = 5 için büyük halı 8 · 8 = 64, küçük halı 2 · 2 = 4; fark 60'tır. 12 · 5 = 60.
Sık yapılan hata: Çıkarma işaretini parantezin içindeki bütün terimlere dağıtmamak.
Cevap D.`
},
{
  id: "mat-ci-315",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kırtasiyede kalem kutusunun fiyatı (3x − 1) TL, defterin fiyatı (x − 4) TL'dir. Bir okul 2 kalem kutusu ve 3 defter satın alıyor; ayrıca siparişin eve teslimi için 5 TL kargo ücreti ödüyor.
**Buna göre okulun ödediği toplam tutar en sade hâliyle aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Birim fiyat (TL)</th><th>Adet</th></tr><tr><td>Kalem kutusu</td><td>3x − 1</td><td>2</td></tr><tr><td>Defter</td><td>x − 4</td><td>3</td></tr><tr><td>Kargo</td><td>5</td><td>1</td></tr></table>`,
  secenekler: [`9x + 15`, `9x − 8`, `9x − 9`, `9x − 14`],
  dogru: 2,
  hatalar: [
    `Defterin fiyatında −4 ile 3'ü çarparken işareti artı yaptın: 3(x − 4) = 3x + 12 yazdın.`,
    `2(3x − 1) işleminde −1'i 2 ile çarpmadın: 6x − 1 yazdın.`,
    null,
    `Kargo ücretini toplamaya katmadın.`
  ],
  aciklama: `Parantezin önündeki sayı, parantez içindeki her terimle çarpılır. Sonra benzer terimler birleştirilir.
Adım 1: Kalem kutuları: 2(3x − 1) = 6x − 2. Defterler: 3(x − 4) = 3x − 12.
Adım 2: Toplam ödeme: 6x − 2 + 3x − 12 + 5.
Adım 3: x'li terimler 9x; sabit terimler −2 − 12 + 5 = −9. Sonuç 9x − 9 olur.
Sağlama: x = 5 için kalem kutusu 14 TL, defter 1 TL'dir. 2 · 14 + 3 · 1 + 5 = 36. 9 · 5 − 9 = 36.
Sık yapılan hata: Çarpma işlemini parantezin yalnızca ilk terimine uygulamak.
Cevap C.`
},
{
  id: "mat-ci-316",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Bir atölyede üretilen bir ürünün x. partideki maliyeti 2x^{2} − 12x + 18 TL formülüyle hesaplanıyor. Atölyenin muhasebecisi, 53. partinin maliyetini bulmak için formülde x yerine 53 yazıp büyük sayılarla uğraşmak yerine, önce ifadeyi çarpanlarına ayırmaya karar veriyor.
**Buna göre 53. partinin maliyeti kaç TL'dir?**`,
  gorsel: null,
  secenekler: [`2 500`, `5 000`, `5 600`, `6 272`],
  dogru: 1,
  hatalar: [
    `Ortak çarpan 2'yi dışarıda bırakmayı unuttun: (x − 3)^{2} = 2500 çıkar, ama maliyet bunun 2 katıdır.`,
    null,
    `Tam kare ifadeyi iki kare farkı sandın: 2(x^{2} − 9) = 2 · 2800 = 5600.`,
    `(x + 3)^{2} yazdın: işaretini yanlış belirledin ve 2 · 56^{2} = 6272 buldun.`
  ],
  aciklama: `Çarpanlara ayırmada önce ortak çarpan dışarı alınır, sonra kalan ifadeye bakılır.
Adım 1: 2x^{2} − 12x + 18 = 2(x^{2} − 6x + 9).
Adım 2: x^{2} − 6x + 9, a^{2} − 2ab + b^{2} biçiminde olduğundan (x − 3)^{2}'dir (a = x, b = 3, 2ab = 6x).
Adım 3: Maliyet = 2(x − 3)^{2}. x = 53 için 2 · 50^{2} = 2 · 2500 = 5000.
Sağlama: 2 · 53^{2} − 12 · 53 + 18 = 5618 − 636 + 18 = 5000.
Sık yapılan hata: Ortak çarpan ile tam kare işlemlerinden birini yarıda bırakmak.
Cevap B.`
},
{
  id: "mat-ci-317",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Bir atölyede kenar uzunluğu (2x + 3) cm olan kare biçimli bir pleksi levhanın bir köşesinden, kenarı (x + 1) cm olan kare parça kesilip çıkarılıyor. Şekilde kesilen parça kesikli çizgiyle gösterilmiştir. Usta, kalan L biçimli parçanın alanını iki cebirsel ifadenin çarpımı olarak yazacaktır.
**Buna göre kalan parçanın alanı aşağıdaki çarpımlardan hangisine eşittir?**`,
  gorsel: `<svg viewBox="0 0 460 270"><path d="M50,40 H155 V125 H240 V230 H50 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M155,40 H240 V125 H155 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><path d="M50,30 H240 M50,24 V36 M240,24 V36" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="145" y="18" text-anchor="middle" font-size="16" fill="currentColor">2x + 3 (bütün kenar)</text><path d="M252,40 V125 M246,40 H258 M246,125 H258" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="266" y="88" text-anchor="start" font-size="16" fill="currentColor">x + 1</text><text x="266" y="150" text-anchor="start" font-size="14" fill="currentColor">kesikli: kesilen kare</text></svg>`,
  secenekler: [`(x + 2)(3x + 4)`, `(x + 2)(3x + 2)`, `(x + 4)(3x + 2)`, `(x + 2)^{2}`],
  dogru: 0,
  hatalar: [
    null,
    `Toplamı alırken (x + 1)'in işaretini değiştirdin: (2x + 3) + (x − 1) = 3x + 2 yazdın.`,
    `İki parantezde de işaret hatası yaptın: (2x + 3) − (x − 1) = x + 4 ve (2x + 3) + (x − 1) = 3x + 2.`,
    `İki kare farkını fark karesi sandın; çarpanlardan biri toplam olmalıydı.`
  ],
  aciklama: `İki karenin farkı a^{2} − b^{2}, (a − b)(a + b) biçiminde yazılır. Kalan parçanın alanı büyük karenin alanından küçük karenin alanı çıkarılarak bulunur.
Adım 1: Kalan alan (2x + 3)^{2} − (x + 1)^{2} olur. Burada a = 2x + 3 ve b = x + 1'dir.
Adım 2: a − b = (2x + 3) − (x + 1) = x + 2. (Eksi, parantezdeki her terime dağıtılır.)
Adım 3: a + b = (2x + 3) + (x + 1) = 3x + 4.
Adım 4: Alan = (x + 2)(3x + 4) olur.
Sağlama: x = 1 için büyük kare 5 · 5 = 25, kesilen kare 2 · 2 = 4; kalan 21. (1 + 2)(3 + 4) = 21.
Sık yapılan hata: a − b alınırken parantezdeki ikinci ifadenin işaretlerini değiştirmemek.
Cevap A.`
},
{
  id: "mat-ci-318",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun kermesinde x. gün satılan ürün adedi (x − 4) tanedir ve o gün elde edilen gelir 3x^{2} − 48 TL'dir (x > 4). O gün satılan bütün ürünler aynı fiyattan satılmıştır. Gelir, satılan adet ile ürün fiyatının çarpımına eşittir. Ürün fiyatı, katsayıları tam sayı olan sade bir cebirsel ifade ile yazılabilmektedir.
**Buna göre x. günkü ürün fiyatını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Satılan adet</th><th>Gelir (TL)</th></tr><tr><td>x. gün (x &gt; 4)</td><td>x − 4</td><td>3x² − 48</td></tr></table>`,
  secenekler: [`x + 4`, `3x − 12`, `3x + 4`, `3x + 12`],
  dogru: 3,
  hatalar: [
    `Ortak çarpan 3'ü fiyata katmadın: 3x^{2} − 48 = 3(x − 4)(x + 4) olduğundan fiyat 3(x + 4) olur, yalnızca (x + 4) değil.`,
    `Fiyat yerine adedi gösteren çarpanı kullandın: 3(x − 4) = 3x − 12 yazdın; adet zaten (x − 4)'tür, diğer çarpan (x + 4) olmalıydı.`,
    `3'ü parantezin yalnızca ilk terimiyle çarptın: 3(x + 4) = 3x + 12 olur, sabit terim de çarpılır.`,
    null
  ],
  aciklama: `Çarpanlara ayırmada önce ortak çarpan dışarı alınır, sonra kalan ifade iki kare farkıysa (a − b)(a + b) biçiminde yazılır.
Adım 1: 3x^{2} − 48 = 3(x^{2} − 16).
Adım 2: x^{2} − 16 = (x − 4)(x + 4). Gelir = 3(x − 4)(x + 4) olur.
Adım 3: Gelir = adet · fiyat ve adet (x − 4) olduğuna göre fiyat, geriye kalan çarpan 3(x + 4) = 3x + 12 TL'dir.
Sağlama: x = 14 için gelir 3 · 196 − 48 = 540 TL, adet 10'dur. Fiyat 54 TL olur ve 3 · 14 + 12 = 54.
Sık yapılan hata: Ortak çarpanı unutmak ya da dağıtırken yalnızca ilk terimi çarpmak.
Cevap D.`
},
{
  id: "mat-ci-319",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Kenarları a metre ve b metre olan dikdörtgen biçimli bir çiçekliğin çevresi 28 metredir. Aynı a ve b uzunlukları birer kenar kabul edilerek çizilen iki kare bahçenin alanları toplamı ise 100 metrekaredir. Bahçıvan, çiçekliğin alanını bulmak için (a + b)^{2} özdeşliğinden yararlanacaktır.
**Buna göre çiçekliğin alanı kaç metrekaredir?**`,
  gorsel: `<svg viewBox="0 0 400 190"><rect x="60" y="45" width="260" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="190" y="33" text-anchor="middle" font-size="16" fill="currentColor">b</text><text x="52" y="100" text-anchor="end" font-size="16" fill="currentColor">a</text><text x="190" y="90" text-anchor="middle" font-size="16" fill="currentColor">Çevre = 28 m</text><text x="190" y="118" text-anchor="middle" font-size="16" fill="currentColor">a² + b² = 100</text></svg>`,
  secenekler: [`24`, `48`, `96`, `296`],
  dogru: 1,
  hatalar: [
    `2ab = 96 eşitliğini 4'e bölüp 24 buldun; ab bulmak için 2'ye bölmek yeterlidir.`,
    null,
    `2ab = 96'yı alan sandın; alan ab'dir, yani 96'nın yarısı.`,
    `(a + b)^{2} = 196 ile 100'ü toplayıp 296 yazdın; 196 = 100 + 2ab olduğundan 2ab = 196 − 100 olmalıydı.`
  ],
  aciklama: `(a + b)^{2} = a^{2} + 2ab + b^{2} özdeşliği, kenarların toplamı ile kareleri toplamı bilindiğinde çarpımı verir. Dikdörtgenin alanı ab'dir.
Adım 1: Çevre 2(a + b) = 28 olduğundan a + b = 14'tür.
Adım 2: (a + b)^{2} = 14^{2} = 196 ve (a + b)^{2} = a^{2} + b^{2} + 2ab = 100 + 2ab.
Adım 3: 196 = 100 + 2ab → 2ab = 96 → ab = 48.
Sağlama: a = 6, b = 8 alınırsa çevre 28, kareler 36 + 64 = 100, alan 48 olur.
Sık yapılan hata: 2ab ile ab'yi karıştırmak.
Cevap B.`
},
{
  id: "mat-ci-320",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okul, kenar uzunlukları (2x − 6) santimetre ve (x + 1) santimetre olan dikdörtgen biçimli panolar üretmektedir (x, kenarları pozitif yapan bir sayıdır). Panonun alan ifadesi çarpılıp benzer terimler birleştirildiğinde 2x^{2} + bx + c biçiminde yazılmıştır; burada b ve c birer tam sayıdır.
**Buna göre b − c değeri kaçtır?**`,
  gorsel: `<svg viewBox="0 0 440 190"><rect x="60" y="45" width="300" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="32" text-anchor="middle" font-size="16" fill="currentColor">2x − 6</text><text x="52" y="100" text-anchor="end" font-size="16" fill="currentColor">x + 1</text><text x="210" y="100" text-anchor="middle" font-size="16" fill="currentColor">Alan = 2x² + bx + c</text></svg>`,
  secenekler: [`−10`, `−2`, `2`, `14`],
  dogru: 2,
  hatalar: [
    `b − c yerine b + c hesapladın: −4 + (−6) = −10.`,
    `Çıkarmayı ters sırayla yaptın: c − b = −6 − (−4) = −2.`,
    null,
    `x'li terimleri toplarken −6x yerine +6x aldın ve b = 8 buldun; doğru değer b = −4'tür.`
  ],
  aciklama: `Çarpma işleminde birinci ifadenin her terimi ikinciyle çarpılır, sonra benzer terimler toplanır. Katsayı, bir terimdeki sayısal çarpandır; sayıdan oluşan terim sabit terimdir.
Adım 1: (2x − 6)(x + 1) = 2x^{2} + 2x − 6x − 6.
Adım 2: Benzer terimleri topla: 2x^{2} − 4x − 6. Demek ki b = −4 ve c = −6.
Adım 3: b − c = −4 − (−6) = −4 + 6 = 2.
Sağlama: x = 1 için (2 − 6)(1 + 1) = −8 ve 2 − 4 − 6 = −8 olur.
Sık yapılan hata: Negatif bir sayıyı çıkarırken işareti karıştırmak.
Cevap C.`
},
{
  id: "mat-ci-321",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Kenarı (a + b) metre olan kare biçimli bir bahçe, şekildeki gibi iki kare ve iki eş dikdörtgen bölüme ayrılmıştır. Kare bölümlerin alanları 49 m^{2} ve 25 m^{2}'dir. Bahçıvan, bahçenin tamamının alanını bulmak için kare bölümlerin kenarlarından ve bölümlerin alanlarından yararlanacaktır.
**Buna göre bahçenin tamamı kaç metrekaredir?**`,
  gorsel: `<svg viewBox="0 0 480 260"><rect x="40" y="40" width="117" height="117" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="157" y="40" width="83" height="117" fill="none" stroke="currentColor" stroke-width="2"/><rect x="40" y="157" width="117" height="83" fill="none" stroke="currentColor" stroke-width="2"/><rect x="157" y="157" width="83" height="83" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="98" y="104" text-anchor="middle" font-size="16" fill="currentColor">49 m²</text><text x="198" y="104" text-anchor="middle" font-size="16" fill="currentColor">ab</text><text x="98" y="204" text-anchor="middle" font-size="16" fill="currentColor">ab</text><text x="198" y="204" text-anchor="middle" font-size="16" fill="currentColor">25 m²</text><text x="98" y="30" text-anchor="middle" font-size="16" fill="currentColor">a</text><text x="198" y="30" text-anchor="middle" font-size="16" fill="currentColor">b</text><text x="32" y="104" text-anchor="end" font-size="16" fill="currentColor">a</text><text x="32" y="204" text-anchor="end" font-size="16" fill="currentColor">b</text><text x="270" y="110" text-anchor="start" font-size="16" fill="currentColor">Bahçenin kenarı:</text><text x="270" y="136" text-anchor="start" font-size="16" fill="currentColor">(a + b) metre</text><text x="270" y="190" text-anchor="start" font-size="14" fill="currentColor">(Şekil ölçekli değildir.)</text></svg>`,
  secenekler: [`70`, `74`, `109`, `144`],
  dogru: 3,
  hatalar: [
    `Yalnızca iki dikdörtgen bölümün alanını (35 + 35) topladın; kare bölümler de bahçenin parçasıdır.`,
    `Yalnızca iki kare bölümü (49 + 25) topladın; (a + b)^{2} = a^{2} + b^{2} değildir, dikdörtgen bölümler de vardır.`,
    `İki kare bölüme yalnızca bir dikdörtgenin alanını (35) ekledin; şekilde iki dikdörtgen bölüm vardır.`,
    null
  ],
  aciklama: `(a + b)^{2} = a^{2} + 2ab + b^{2} özdeşliği, kenarı (a + b) olan karenin alanını dört parçaya ayırır: a^{2} alanlı kare, b^{2} alanlı kare ve ab alanlı iki dikdörtgen.
Adım 1: a^{2} = 49 olduğundan a = 7; b^{2} = 25 olduğundan b = 5 olur.
Adım 2: Her dikdörtgen bölümün alanı ab = 7 · 5 = 35 m^{2}'dir.
Adım 3: Bahçenin tamamı = 49 + 25 + 35 + 35 = 144 m^{2} olur.
Sağlama: Bahçenin kenarı a + b = 12 m ve 12^{2} = 144.
Sık yapılan hata: (a + b)^{2} yerine a^{2} + b^{2} hesaplamak ve ortadaki 2ab terimini unutmak.
Cevap D.`
},
{
  id: "mat-ci-322",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Dikdörtgen biçimli bir panonun uzunluğu (2a + 3b) desimetre, genişliği (a − 2b) desimetredir. Panonun alan ifadesi çarpılıp benzer terimler birleştirilerek en sade biçimde yazılacaktır.
**Buna göre sadeleşmiş alan ifadesinin terim sayısı ve katsayılar toplamı aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 440 190"><rect x="60" y="45" width="300" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="32" text-anchor="middle" font-size="16" fill="currentColor">2a + 3b</text><text x="52" y="100" text-anchor="end" font-size="16" fill="currentColor">a − 2b</text></svg>`,
  secenekler: [`3 terimli, katsayılar toplamı −5`, `3 terimli, katsayılar toplamı −11`, `3 terimli, katsayılar toplamı 7`, `4 terimli, katsayılar toplamı −5`],
  dogru: 0,
  hatalar: [
    null,
    `ab'li terimleri −4ab ve −3ab diye topladın; 3b · a = +3ab olmalıydı.`,
    `−6b^{2} yerine +6b^{2} yazdın: (3b)(−2b) = −6b^{2}'dir.`,
    `ab'li terimleri (−4ab ve +3ab) birleştirmedin; benzer terimler toplanınca tek terim olur.`
  ],
  aciklama: `Katsayı, bir terimdeki sayısal çarpandır. Benzer terimler (değişken kısmı aynı olanlar) toplanınca terim sayısı azalır.
Adım 1: (2a + 3b)(a − 2b) = 2a^{2} − 4ab + 3ab − 6b^{2}.
Adım 2: −4ab ile +3ab benzerdir: toplamı −ab. İfade 2a^{2} − ab − 6b^{2} olur; 3 terimlidir.
Adım 3: Katsayılar 2, −1 ve −6'dır; toplamları 2 − 1 − 6 = −5.
Sağlama: a = 1, b = 1 için alan (2 + 3)(1 − 2) = −5 verir; katsayılar toplamı da −5'tir.
Sık yapılan hata: Benzer terimleri toplamadan terim saymak.
Cevap A.`
},
{
  id: "mat-ci-323",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Alanı 18x^{2} − 50 santimetrekare olan dikdörtgen biçimli bir sticker kâğıdının kenar uzunlukları, katsayıları tam sayı olan sade cebirsel ifadelerdir. Kâğıdın iki kenarının çarpımı alanı vermektedir.
**Buna göre bu kâğıdın kenar uzunlukları aşağıdakilerden hangisi olabilir?**`,
  gorsel: `<svg viewBox="0 0 400 190"><rect x="60" y="45" width="260" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="190" y="33" text-anchor="middle" font-size="16" fill="currentColor">? cm</text><text x="340" y="100" text-anchor="start" font-size="16" fill="currentColor">? cm</text><text x="190" y="100" text-anchor="middle" font-size="16" fill="currentColor">Alan = 18x² − 50 cm²</text></svg>`,
  secenekler: [`(3x − 5) cm ve (6x − 10) cm`, `(9x − 5) cm ve (2x + 10) cm`, `(6x − 5) cm ve (3x + 10) cm`, `(3x − 5) cm ve (6x + 10) cm`],
  dogru: 3,
  hatalar: [
    `Çarpımı 18x^{2} − 60x + 50 olur; iki kare farkı yerine tam kare yazdın.`,
    `Çarpımı açınca 18x^{2} + 80x − 50 çıkar; ortadaki x terimi sıfır olmalıydı.`,
    `Çarpımı açınca 18x^{2} + 45x − 50 çıkar; ortadaki x terimi sıfır olmalıydı.`,
    null
  ],
  aciklama: `Ortak çarpan dışarı alındıktan sonra kalan ifade iki kare farkıysa (a − b)(a + b) biçiminde yazılır.
Adım 1: 18x^{2} − 50 = 2(9x^{2} − 25).
Adım 2: 9x^{2} − 25 = (3x)^{2} − 5^{2} = (3x − 5)(3x + 5).
Adım 3: Alan = 2(3x − 5)(3x + 5). Ortak çarpan 2'yi ikinci parantezle birleştirirsek (3x − 5)(6x + 10) olur.
Sağlama: Çarpımı açarsak (3x − 5)(6x + 10) = 18x^{2} + 30x − 30x − 50 = 18x^{2} − 50. x terimleri birbirini götürür.
Sık yapılan hata: Seçenekteki çarpımı açıp ortadaki terimin sıfır olup olmadığına bakmamak.
Cevap D.`
},
{
  id: "mat-ci-324",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Kenar uzunluğu (x + 3) metre olan kare biçimli bir bahçenin bir yöndeki kenarları 2 m kısaltılıyor, diğer yöndeki kenarları 2 m uzatılıyor ve dikdörtgen biçimli yeni bir bahçe elde ediliyor. Şekilde eski ve yeni bahçe gösterilmiştir.
**Buna göre yeni bahçenin alanı eski bahçenin alanına göre nasıl değişir?**`,
  gorsel: `<svg viewBox="0 0 520 210"><rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="100" y="30" text-anchor="middle" font-size="16" fill="currentColor">x + 3</text><text x="32" y="105" text-anchor="end" font-size="16" fill="currentColor">x + 3</text><text x="205" y="105" text-anchor="middle" font-size="28" fill="currentColor">→</text><rect x="250" y="55" width="200" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="350" y="45" text-anchor="middle" font-size="16" fill="currentColor">x + 5</text><text x="242" y="105" text-anchor="end" font-size="16" fill="currentColor">x + 1</text></svg>`,
  secenekler: [`Değişmez.`, `4 m² azalır.`, `4 m² artar.`, `4x m² azalır.`],
  dogru: 1,
  hatalar: [
    `Bir kenarı kısaltıp diğerini aynı miktarda uzatmak alanı korumaz; çarpım değişir.`,
    null,
    `İşareti ters aldın: (x + 3)^{2} büyüktür, yeni alan ondan küçüktür.`,
    `Farkı x ile ilişkilendirdin; (x + 1)(x + 5) açılınca x'li terimler eski alanla aynıdır, fark yalnızca sabit terimdedir.`
  ],
  aciklama: `Aynı miktar uzatılıp kısaltılan kare, (a − b)(a + b) = a^{2} − b^{2} özdeşliğine götürür.
Adım 1: Eski alan: (x + 3)^{2} = x^{2} + 6x + 9.
Adım 2: Yeni boyutlar (x + 3 − 2) = (x + 1) ve (x + 3 + 2) = (x + 5). Yeni alan: (x + 1)(x + 5) = x^{2} + 6x + 5.
Adım 3: Fark: (x^{2} + 6x + 5) − (x^{2} + 6x + 9) = −4. Alan, x ne olursa olsun 4 m^{2} azalır.
Sağlama: x = 1 için eski alan 16, yeni alan 2 · 6 = 12; 4 m^{2} azalmıştır.
Sık yapılan hata: "Bir yanda kısaldı, bir yanda uzadı, alan aynı kalır" düşüncesi.
Cevap B.`
},
{
  id: "mat-ci-325",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Boyutları (4x + 6) cm ve (3x + 2) cm olan dikdörtgen biçimli bir kartonun dört köşesinden, kenarı x cm olan birer kare kesilip atılıyor. Şekilde kesilen kareler kesikli çizgiyle gösterilmiştir. Kalan parçanın alanı hesaplanıp ortak çarpan parantezine alınarak yazılacaktır.
**Buna göre kalan parçanın alanı aşağıdakilerden hangisi şeklinde yazılabilir?**`,
  gorsel: `<svg viewBox="0 0 480 250"><rect x="60" y="40" width="360" height="180" fill="none" stroke="currentColor" stroke-width="2"/><rect x="60" y="40" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><rect x="380" y="40" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><rect x="60" y="180" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><rect x="380" y="180" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="80" y="66" text-anchor="middle" font-size="14" fill="currentColor">x</text><text x="400" y="66" text-anchor="middle" font-size="14" fill="currentColor">x</text><text x="80" y="206" text-anchor="middle" font-size="14" fill="currentColor">x</text><text x="400" y="206" text-anchor="middle" font-size="14" fill="currentColor">x</text><text x="240" y="28" text-anchor="middle" font-size="16" fill="currentColor">4x + 6</text><text x="52" y="135" text-anchor="end" font-size="16" fill="currentColor">3x + 2</text></svg>`,
  secenekler: [`2(4x^{2} + 13x + 6)`, `2(8x^{2} + 13x + 6)`, `2(4x^{2} + 13x + 12)`, `2(4x^{2} + 26x + 6)`],
  dogru: 0,
  hatalar: [
    null,
    `Ortak çarpan 2'yi alırken x^{2} terimini bölmedin: 8x^{2} yerine 4x^{2} olmalıydı.`,
    `Ortak çarpan 2'yi alırken sabit terimi bölmedin: 12 yerine 6 olmalıydı.`,
    `Ortak çarpan 2'yi alırken x'li terimi bölmedin: 26x yerine 13x olmalıydı.`
  ],
  aciklama: `Alan hesabında kartonun alanından kesilen parçaların alanı çıkarılır. Sonuç, bütün terimleri bölen en büyük sayı dışarı alınarak yazılır.
Adım 1: Kartonun alanı (4x + 6)(3x + 2) = 12x^{2} + 8x + 18x + 12 = 12x^{2} + 26x + 12.
Adım 2: Dört köşeden kesilen alan 4 · x^{2} = 4x^{2}'dir. Kalan alan 12x^{2} + 26x + 12 − 4x^{2} = 8x^{2} + 26x + 12.
Adım 3: 8, 26 ve 12'nin ortak çarpanı 2'dir. 8x^{2} + 26x + 12 = 2(4x^{2} + 13x + 6).
Sağlama: x = 1 için karton 10 · 5 = 50, kesilen 4; kalan 46. 2(4 + 13 + 6) = 46.
Sık yapılan hata: Ortak çarpanla her terimi bölerken bir terimi unutmak.
Cevap A.`
},
{
  id: "mat-ci-001",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 1,
  soru: `**4x^{2} + 9x − 5 ifadesinde x^{2} teriminin katsayısı kaçtır?**`,
  gorsel: null,
  secenekler: [`−5`, `4`, `9`, `13`],
  dogru: 1,
  hatalar: [
    `−5 sabit terimdir; x^{2} teriminin katsayısı değildir.`,
    null,
    `9, x teriminin katsayısıdır.`,
    `13 = 4 + 9 katsayıların toplamıdır; x^{2} teriminin katsayısı yalnızca 4'tür.`
  ],
  aciklama: `Bir terimdeki sayısal çarpana katsayı denir.
Adım 1: 4x^{2} + 9x − 5 ifadesinin terimleri 4x^{2}, 9x ve −5'tir.
Adım 2: x^{2} terimi 4x^{2}'dir ve katsayısı 4'tür.
Sağlama: 4x^{2} = 4 · x^{2} yazılırsa çarpılan sayı 4'tür.
Sık yapılan hata: Sabit terimi ya da başka bir terimin katsayısını seçmek.
Cevap B.`
},
{
  id: "mat-ci-002",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 1,
  soru: `**y(y + 4) çarpımı aşağıdakilerden hangisine eşittir?**`,
  gorsel: null,
  secenekler: [`2y + 4`, `y^{2} + 4`, `5y`, `y^{2} + 4y`],
  dogru: 3,
  hatalar: [
    `Çarpmak yerine toplama yaptın.`,
    `y ile yalnızca ilk terimi çarptın; ikinci terim de y ile çarpılmalıdır.`,
    `y, y ve 4'ü benzer terim sayıp topladın; y · y = y^{2} bir çarpımdır.`,
    null
  ],
  aciklama: `Parantezin dışındaki ifade, parantezdeki her terimle çarpılır (dağılma).
Adım 1: y · y = y^{2}.
Adım 2: y · 4 = 4y.
Adım 3: Sonuç y^{2} + 4y olur.
Sağlama: y = 2 için 2 · 6 = 12 ve 4 + 8 = 12.
Sık yapılan hata: Dağıtmada ikinci terimi çarpmayı unutmak.
Cevap D.`
},
{
  id: "mat-ci-003",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 1,
  soru: `**(x − 4)^{2} ifadesinin açılımı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`x^{2} − 8x + 16`, `x^{2} − 4x + 16`, `x^{2} − 16`, `x^{2} + 8x + 16`],
  dogru: 0,
  hatalar: [
    null,
    `Ortadaki terimi 2ab yerine ab aldın; 2 · x · 4 = 8x olmalıydı.`,
    `Bu, (x − 4)(x + 4) açılımıdır; ortadaki terimi yok saydın.`,
    `Ortadaki terimin işaretini artı yazdın; fark karesinde eksidir.`
  ],
  aciklama: `(a − b)^{2} = a^{2} − 2ab + b^{2}.
Adım 1: a = x, b = 4 → a^{2} = x^{2}, 2ab = 8x, b^{2} = 16.
Adım 2: (x − 4)^{2} = x^{2} − 8x + 16.
Sağlama: x = 5 için (1)^{2} = 1 ve 25 − 40 + 16 = 1.
Sık yapılan hata: (a − b)^{2} = a^{2} − b^{2} sanmak.
Cevap A.`
},
{
  id: "mat-ci-004",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `Alanı 8x + 20 metrekare olan dikdörtgen biçimli bir bahçenin bir kenarı 4 metredir.
**Buna göre bahçenin diğer kenarı kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 400 180"><rect x="60" y="45" width="260" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="190" y="33" text-anchor="middle" font-size="16" fill="currentColor">?</text><text x="52" y="95" text-anchor="end" font-size="16" fill="currentColor">4 m</text><text x="190" y="95" text-anchor="middle" font-size="16" fill="currentColor">Alan = 8x + 20 (m²)</text></svg>`,
  secenekler: [`2x + 20`, `8x + 5`, `2x + 5`, `8x + 16`],
  dogru: 2,
  hatalar: [
    `Yalnızca 8x terimini 4'e böldün; 20 de bölünmelidir.`,
    `Yalnızca sabit terimi 4'e böldün; 8x de bölünmelidir.`,
    null,
    `Bölmek yerine 4 çıkardın: 8x + 20 − 4 işlemi çarpan bulmaz.`
  ],
  aciklama: `Alan, iki kenarın çarpımıdır. Bir kenar bilinirse alan ifadesindeki ortak çarpan dışarı alınarak diğer kenar bulunur.
Adım 1: 8x + 20 = 4 · 2x + 4 · 5 = 4(2x + 5).
Adım 2: Bir kenar 4 m olduğuna göre diğer kenar (2x + 5) metredir.
Sağlama: x = 1 için alan 28, kenarlar 4 ve 7; 4 · 7 = 28.
Sık yapılan hata: Parantez içine yalnızca bir terimi bölerek yazmak.
Cevap C.`
},
{
  id: "mat-ci-005",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Dikdörtgen biçimli bir odanın uzunluğu (2x + 1) metre, genişliği (x + 4) metredir. Odanın zeminine parke döşenecektir.
**Buna göre odanın zemin alanı kaç metrekaredir?**`,
  gorsel: `<svg viewBox="0 0 440 190"><rect x="60" y="45" width="300" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="32" text-anchor="middle" font-size="16" fill="currentColor">2x + 1</text><text x="52" y="100" text-anchor="end" font-size="16" fill="currentColor">x + 4</text></svg>`,
  secenekler: [`2x^{2} + 4`, `2x^{2} + 8x + 4`, `2x^{2} + 9x + 4`, `3x^{2} + 9x + 4`],
  dogru: 2,
  hatalar: [
    `Yalnızca iki uç çarpımı (2x · x ve 1 · 4) yazdın; ortadaki iki çarpım eksik.`,
    `1 · x = x çarpımını saymadın: x'li terim 8x + x = 9x olmalıydı.`,
    null,
    `x^{2} terimini 2x + x gibi topladın; 2x · x = 2x^{2} olur.`
  ],
  aciklama: `Çarpımda birinci parantezin her terimi ikinci parantezin her terimiyle çarpılır.
Adım 1: 2x · x = 2x^{2}; 2x · 4 = 8x; 1 · x = x; 1 · 4 = 4.
Adım 2: Benzer terimler: 8x + x = 9x. Sonuç 2x^{2} + 9x + 4.
Sağlama: x = 1 için 3 · 5 = 15 ve 2 + 9 + 4 = 15.
Sık yapılan hata: Dört çarpımdan birini atlamak.
Cevap C.`
},
{
  id: "mat-ci-006",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Dikdörtgen biçimli bir kartonun kenar uzunlukları (x + 7) cm ve (x − 7) cm'dir.
**Buna göre kartonun alanı kaç santimetrekaredir?**`,
  gorsel: `<svg viewBox="0 0 440 190"><rect x="60" y="45" width="300" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="32" text-anchor="middle" font-size="16" fill="currentColor">x + 7</text><text x="52" y="100" text-anchor="end" font-size="16" fill="currentColor">x − 7</text></svg>`,
  secenekler: [`x^{2} − 49`, `x^{2} + 49`, `x^{2} − 14x + 49`, `x^{2} + 14x + 49`],
  dogru: 0,
  hatalar: [
    null,
    `Son terimin işaretini artı yazdın; 7 · (−7) = −49 olur.`,
    `Bu, (x − 7)^{2} açılımıdır. Burada iki kenar farklıdır.`,
    `Bu, (x + 7)^{2} açılımıdır. Burada iki kenar farklıdır.`
  ],
  aciklama: `(a − b)(a + b) = a^{2} − b^{2}: ortadaki terimler birbirini götürür.
Adım 1: x · x = x^{2}; x · (−7) = −7x; 7 · x = 7x; 7 · (−7) = −49.
Adım 2: −7x + 7x = 0. Sonuç x^{2} − 49.
Sağlama: x = 10 için 17 · 3 = 51 ve 100 − 49 = 51.
Sık yapılan hata: İki kenarı farklı olan dikdörtgeni kare gibi açmak.
Cevap A.`
},
{
  id: "mat-ci-007",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir deney düzeneğinde ortam sıcaklığı x °C iken cihazın gösterdiği değer 3x^{2} − 2x + 5 ifadesiyle hesaplanmaktadır.
**Buna göre sıcaklık −2 °C iken cihazın göstereceği değer kaçtır?**`,
  gorsel: null,
  secenekler: [`−3`, `3`, `13`, `21`],
  dogru: 3,
  hatalar: [
    `(−2)^{2} = −4 aldın; negatif sayının karesi pozitiftir.`,
    `Üslü terimi 3 · (−2) = −6 gibi çarpma saydın.`,
    `−2x terimini hesaplarken −2 · (−2) = −4 aldın; çarpım +4'tür.`,
    null
  ],
  aciklama: `Bir ifadenin değerini bulmak için değişkenin yerine sayı yazılır ve işlem önceliğine uyulur: önce üs, sonra çarpma, en son toplama ve çıkarma.
Adım 1: 3 · (−2)^{2} = 3 · 4 = 12.
Adım 2: −2 · (−2) = +4.
Adım 3: 12 + 4 + 5 = 21.
Sağlama: Terimleri ayrı ayrı yaz: 12, +4, +5 → 21.
Sık yapılan hata: Negatif sayının karesini negatif almak.
Cevap D.`
},
{
  id: "mat-ci-008",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 2,
  soru: "Kare biçimli bir fotoğrafın alanı (x^{2} − 12x + 36) santimetrekaredir (x > 6).\n**Buna göre bu fotoğrafın bir kenar uzunluğunu gösteren ifade aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["x + 6", "x − 6", "x − 12", "x − 36"],
  dogru: 1,
  hatalar: [
    "İşareti artı aldın: (x + 6)^{2} = x^{2} + 12x + 36 olurdu. Ortadaki terim −12x olduğu için kenar (x − 6)'dir.",
    null,
    "Ortadaki terimin katsayısını kenar sandın: 2 · 6 = 12 olduğu için b = 6'dır, 12 değil.",
    "Sabit terimi kenar sandın: 36 kenarın değil, 6'nın karesidir."
  ],
  aciklama: `Tam kare ifade a^{2} − 2ab + b^{2} = (a − b)^{2} biçiminde çarpanlarına ayrılır. Karenin alanı kenarın karesi olduğu için alanı veren ifadeyi bir ifadenin karesi olarak yazarsan kenarı bulursun.
Adım 1: x^{2} → a = x; 36 = 6^{2} → b = 6.
Adım 2: 2ab = 2 · x · 6 = 12x; ortadaki terim −12x olduğuna göre ifade (x − 6)^{2} olur.
Adım 3: Alan (x − 6)^{2} ise bir kenar uzunluğu x − 6 santimetredir.
Sağlama: (x − 6)^{2} = x^{2} − 12x + 36.
Sık yapılan hata: Ortadaki terimin katsayısını (12) ya da sabit terimi (36) kenar sanmak.
Cevap B.`
},
{
  id: "mat-ci-009",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir belediye parkında, kenarı (x + 2) metre olan kare biçimli bir çocuk oyun alanı ile kenarları (x + 5) metre ve (x − 1) metre olan dikdörtgen biçimli bir spor alanı yan yana yapılmıştır. İki alan birbirinin üzerine taşmamaktadır.
**Buna göre iki alanın toplam büyüklüğü kaç metrekaredir?**`,
  gorsel: `<svg viewBox="0 0 520 200"><rect x="40" y="50" width="100" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="90" y="40" text-anchor="middle" font-size="16" fill="currentColor">x + 2</text><text x="90" y="100" text-anchor="middle" font-size="16" fill="currentColor">oyun</text><rect x="180" y="50" width="220" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="290" y="40" text-anchor="middle" font-size="16" fill="currentColor">x + 5</text><text x="290" y="105" text-anchor="middle" font-size="16" fill="currentColor">spor</text><text x="420" y="100" text-anchor="start" font-size="16" fill="currentColor">x − 1</text></svg>`,
  secenekler: [`2x^{2} + 8x − 1`, `2x^{2} + 8x + 9`, `2x^{2} + 4x − 1`, `2x^{2} + 8x − 9`],
  dogru: 0,
  hatalar: [
    null,
    `Dikdörtgenin sabit terimini (+5) · (−1) = +5 aldın; çarpım −5'tir.`,
    `Kare açılımında ortadaki terimi atladın: (x + 2)^{2} = x^{2} + 4x + 4 olmalıydı.`,
    `Sabit terimleri toplarken kare için −4 aldın; (x + 2)^{2} sabit terimi +4'tür.`
  ],
  aciklama: `Toplam büyüklük, iki alanın alanlarının toplamıdır.
Adım 1: Kare: (x + 2)^{2} = x^{2} + 4x + 4.
Adım 2: Dikdörtgen: (x + 5)(x − 1) = x^{2} − x + 5x − 5 = x^{2} + 4x − 5.
Adım 3: Toplam: x^{2} + 4x + 4 + x^{2} + 4x − 5 = 2x^{2} + 8x − 1.
Sağlama: x = 3 için kare 25, dikdörtgen 8 · 2 = 16, toplam 41. 18 + 24 − 1 = 41.
Sık yapılan hata: (x + 2)^{2} açılımında 2ab terimini unutmak.
Cevap A.`
},
{
  id: "mat-ci-010",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Kare biçimli bir tarlanın kenarı 53 metredir. Ali, tarlanın alanını hesap makinesi olmadan bulmak için 53 = 50 + 3 yazıp (a + b)^{2} özdeşliğini kullanıyor.
**Buna göre tarlanın alanı kaç metrekaredir?**`,
  gorsel: `<svg viewBox="0 0 300 230"><rect x="60" y="40" width="150" height="150" fill="none" stroke="currentColor" stroke-width="2"/><text x="135" y="28" text-anchor="middle" font-size="16" fill="currentColor">53 m</text><text x="135" y="120" text-anchor="middle" font-size="14" fill="currentColor">= 50 + 3</text></svg>`,
  secenekler: [`2 509`, `2 659`, `2 791`, `2 809`],
  dogru: 3,
  hatalar: [
    `Ortadaki terimi (2ab) atladın: 2500 + 9 = 2509.`,
    `Ortadaki terimi 2ab yerine ab aldın: 2500 + 150 + 9 = 2659.`,
    `Son terimin işaretini eksi aldın: 2500 + 300 − 9 = 2791.`,
    null
  ],
  aciklama: `(a + b)^{2} = a^{2} + 2ab + b^{2}.
Adım 1: a = 50, b = 3 → a^{2} = 2500, 2ab = 2 · 50 · 3 = 300, b^{2} = 9.
Adım 2: 2500 + 300 + 9 = 2809.
Sağlama: 53 · 53 = 53 · 50 + 53 · 3 = 2650 + 159 = 2809.
Sık yapılan hata: 2ab yerine ab hesaplamak.
Cevap D.`
},
{
  id: "mat-ci-011",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `Alanı 4a^{2} − 36 metrekare olan dikdörtgen biçimli bir perdenin kenarlarından biri (2a − 6) metredir. Perdenin diğer kenarı, alan ifadesinin çarpanlarına ayrılmasıyla bulunacaktır.
**Buna göre perdenin diğer kenarı kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 440 190"><rect x="60" y="45" width="300" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="32" text-anchor="middle" font-size="16" fill="currentColor">2a − 6</text><text x="380" y="100" text-anchor="start" font-size="16" fill="currentColor">?</text><text x="210" y="100" text-anchor="middle" font-size="16" fill="currentColor">Alan = 4a² − 36</text></svg>`,
  secenekler: [`2a − 6`, `a + 3`, `2a + 6`, `2a + 18`],
  dogru: 2,
  hatalar: [
    `İki kenarı aynı sandın: 4a^{2} − 36 bir tam kare değildir, iki kare farkıdır.`,
    `Ortak çarpanı iki yerde birden böldün; her iki kenar da 2 katsayılıdır.`,
    null,
    `36'yı 2'ye bölerek sabit terimi 18 aldın; iki kare farkında sabit terim 6'dır.`
  ],
  aciklama: `4a^{2} − 36 bir iki kare farkıdır: (2a)^{2} − 6^{2}.
Adım 1: a^{2} − b^{2} = (a − b)(a + b) ile (2a − 6)(2a + 6) bulunur.
Adım 2: Bir kenar (2a − 6) ise diğer kenar (2a + 6) metredir.
Sağlama: (2a − 6)(2a + 6) = 4a^{2} − 36.
Sık yapılan hata: İki kare farkını tam kare gibi yazmak.
Cevap C.`
},
{
  id: "mat-ci-012",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir ailenin iki cep telefonu hattı vardır. Hatların tarifeleri tabloda verilmiştir. Bir ay içinde her iki hatta da aynı süre (m dakika) konuşma ve aynı sayıda (s adet) kısa mesaj kullanılmıştır.
**Buna göre iki hattın o aydaki toplam faturası en sade hâliyle aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Hat</th><th>Sabit ücret (TL)</th><th>Dakika başı (TL)</th><th>Mesaj başı (TL)</th></tr><tr><td>1. hat</td><td>25</td><td>3</td><td>2</td></tr><tr><td>2. hat</td><td>15</td><td>4</td><td>2</td></tr></table>`,
  secenekler: [`7m + 2s + 40`, `7m + 4s + 40`, `7m + 4s + 10`, `11ms + 40`],
  dogru: 1,
  hatalar: [
    `Mesaj terimlerinden birini toplamaya katmadın; iki hattın mesaj ücretleri de toplanır.`,
    null,
    `Sabit ücretleri toplamak yerine çıkardın.`,
    `Benzer olmayan terimleri (dakika ve mesaj) birleştirdin: 7m + 4s ifadesi tek terim olmaz.`
  ],
  aciklama: `Toplam fatura, iki hattın faturalarının toplamıdır. Yalnızca benzer terimler (aynı değişkenli olanlar) birleştirilir.
Adım 1: 1. hat: 25 + 3m + 2s. 2. hat: 15 + 4m + 2s.
Adım 2: m'li terimler: 3m + 4m = 7m. s'li terimler: 2s + 2s = 4s. Sabit: 25 + 15 = 40.
Adım 3: Toplam 7m + 4s + 40.
Sağlama: m = 10, s = 5 için 1. hat 25 + 30 + 10 = 65, 2. hat 15 + 40 + 10 = 65; toplam 130. 70 + 20 + 40 = 130.
Sık yapılan hata: Farklı değişkenli terimleri tek terimde toplamak.
Cevap B.`
},
{
  id: "mat-ci-013",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Bir atölyede kare biçimli iki levha kesilmiştir. Büyük levhanın kenarı a desimetre, küçük levhanın kenarı b desimetredir ve kenarlar arasındaki fark 3 desimetredir. Kenarları a ve b olan dikdörtgen biçimli bir şeridin alanı ise 40 desimetrekaredir.
**Buna göre iki kare levhanın alanları toplamı kaç desimetrekaredir?**`,
  gorsel: `<svg viewBox="0 0 480 200"><rect x="30" y="40" width="120" height="120" fill="none" stroke="currentColor" stroke-width="2"/><rect x="190" y="85" width="75" height="75" fill="none" stroke="currentColor" stroke-width="2"/><text x="90" y="30" text-anchor="middle" font-size="16" fill="currentColor">a</text><text x="227" y="75" text-anchor="middle" font-size="16" fill="currentColor">b</text><text x="300" y="90" text-anchor="start" font-size="16" fill="currentColor">a − b = 3 dm</text><text x="300" y="125" text-anchor="start" font-size="16" fill="currentColor">a · b = 40 dm²</text></svg>`,
  secenekler: [`49`, `71`, `80`, `89`],
  dogru: 3,
  hatalar: [
    `(a − b)^{2} + ab = 9 + 40 işlemini yaptın; 2ab gerekir, yani 80.`,
    `2ab − (a − b)^{2} = 80 − 9 işlemini yaptın; (a − b)^{2} eklenmelidir.`,
    `Yalnızca 2ab'yi aldın; (a − b)^{2} = 9 da eklenmelidir.`,
    null
  ],
  aciklama: `(a − b)^{2} = a^{2} − 2ab + b^{2}. Buradan a^{2} + b^{2} = (a − b)^{2} + 2ab bulunur.
Adım 1: (a − b)^{2} = 3^{2} = 9. 2ab = 2 · 40 = 80.
Adım 2: a^{2} + b^{2} = 9 + 80 = 89.
Sağlama: a = 8, b = 5 olur (fark 3, çarpım 40). 64 + 25 = 89.
Sık yapılan hata: 2ab yerine ab kullanmak.
Cevap D.`
},
{
  id: "mat-ci-014",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 4,
  soru: `Alanı 5x^{2} − 20 metrekare olan dikdörtgen biçimli bir bahçenin kenar uzunlukları (m), katsayıları tam sayı olan birer cebirsel ifadedir ve x > 2'dir. Alan ifadesi ortak çarpan ve iki kare farkı kullanılarak çarpanlarına ayrılacaktır.
**Buna göre aşağıdakilerden hangisi bahçenin kenarlarından biri __olamaz__?**`,
  gorsel: `<svg viewBox="0 0 400 180"><rect x="60" y="45" width="260" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="190" y="33" text-anchor="middle" font-size="16" fill="currentColor">? m</text><text x="340" y="95" text-anchor="start" font-size="16" fill="currentColor">? m</text><text x="190" y="95" text-anchor="middle" font-size="16" fill="currentColor">Alan = 5x² − 20 (m²)</text></svg>`,
  secenekler: [`x + 4`, `5x − 10`, `x + 2`, `x − 2`],
  dogru: 0,
  hatalar: [
    null,
    `5x − 10 = 5(x − 2) bir çarpandır; diğer kenar x + 2 olabilir.`,
    `x + 2 bir çarpandır: 5x^{2} − 20 = 5(x − 2)(x + 2).`,
    `x − 2 bir çarpandır; diğer kenar 5(x + 2) = 5x + 10 olabilir.`
  ],
  aciklama: `Önce ortak çarpan (5) dışarı alınır, sonra iki kare farkı uygulanır.
Adım 1: 5x^{2} − 20 = 5(x^{2} − 4).
Adım 2: x^{2} − 4 = (x − 2)(x + 2). Alan 5(x − 2)(x + 2) olur.
Adım 3: Kenarlar (5x − 10) ve (x + 2) ya da (x − 2) ve (5x + 10) olabilir. x + 4 bu çarpanların hiçbirinde yoktur.
Sağlama: x = 3 için alan 25'tir. x + 4 = 7 olur ve 25, 7'ye tam bölünmez.
Sık yapılan hata: 20 / 5 = 4 bulup (x + 4) çarpanını uydurmak; sabit terim 4'ün karekökü olan 2'dir.
Cevap A.`
},
{
  id: "mat-ci-015",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Kenar uzunlukları (3x + 2) cm ve (x + 5) cm olan dikdörtgen biçimli bir kartonun bir köşesinden, kenarı 2 cm olan kare kesilip atılıyor (x > 2). Şekilde kesilen kare kesikli çizgiyle gösterilmiştir.
**Buna göre kalan parçanın alanı kaç santimetrekaredir?**`,
  gorsel: `<svg viewBox="0 0 480 230"><path d="M60,40 H350 V80 H420 V190 H60 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M350,40 H420 V80 H350 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="205" y="28" text-anchor="middle" font-size="16" fill="currentColor">3x + 2</text><text x="52" y="115" text-anchor="end" font-size="16" fill="currentColor">x + 5</text><text x="385" y="66" text-anchor="middle" font-size="14" fill="currentColor">2</text></svg>`,
  secenekler: [`3x^{2} + 15x + 6`, `3x^{2} + 17x − 4`, `3x^{2} + 17x + 6`, `3x^{2} + 17x + 10`],
  dogru: 2,
  hatalar: [
    `2 · x = 2x çarpımını saymadın ve x'li terimi 15x buldun; 15x + 2x = 17x olmalıydı.`,
    `Sabit terim olarak 10 − 4 = 6 yerine kesilen alanı −4 yazdın.`,
    null,
    `Kesilen karenin alanını (4 cm²) çıkarmayı unuttun.`
  ],
  aciklama: `Kalan alan = kartonun alanı − kesilen karenin alanı.
Adım 1: Kartonun alanı (3x + 2)(x + 5) = 3x^{2} + 15x + 2x + 10 = 3x^{2} + 17x + 10.
Adım 2: Kesilen karenin alanı 2 · 2 = 4 cm^{2}.
Adım 3: Kalan alan: 3x^{2} + 17x + 10 − 4 = 3x^{2} + 17x + 6.
Sağlama: x = 1 için karton 5 · 6 = 30, kalan 26. 3 + 17 + 6 = 26.
Sık yapılan hata: Kesilen kısmın alanını çıkarmamak.
Cevap C.`
}
);
