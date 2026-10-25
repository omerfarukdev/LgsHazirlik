// Matematik — Cebirsel İfadeler ve Özdeşlikler | 4. dosya
// Kademe 2 (Pekiştirme) yedeği: mat-ci-226…275
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cebirsel-ifadeler"] = window.LGS_BANK["cebirsel-ifadeler"] || []).push(
{
  id: "mat-ci-226",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir pastane, bir doğum günü pastasının maliyetini lira cinsinden 2a^{2} − 3ab + b^{2} − 4 cebirsel ifadesiyle göstermiştir.
**Bu ifadenin terim sayısı ile ab'li terimin katsayısı sırasıyla aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`3 terim; −3`, `4 terim; 2`, `4 terim; 3`, `4 terim; −3`],
  dogru: 3,
  hatalar: [
    `Sabit terimi (−4) terim saymadın. Sabit terim de ifadenin bir terimidir; terimler 2a^{2}, −3ab, b^{2} ve −4 olmak üzere dörttür.`,
    `Başka bir terimin katsayısını aldın: 2, 2a^{2} teriminin katsayısıdır. ab'li terim −3ab'dir.`,
    `Eksi işaretini terimin dışında bıraktın. İşaret, ait olduğu terimin parçasıdır; ab'li terim −3ab olduğundan katsayısı −3'tür.`,
    null
  ],
  aciklama: `Cebirsel ifadede toplama ve çıkarma işaretleriyle ayrılan her parçaya terim, terimdeki sayı çarpanına katsayı denir. İşaret terime aittir.
Adım 1: İfadeyi işaretlerinden ayır: 2a^{2}, −3ab, b^{2}, −4. Sabit terim de bir terim olduğundan toplam 4 terim vardır.
Adım 2: ab'li terim −3ab'dir; katsayısı −3'tür (eksi işareti katsayıya dahildir).
Sık yapılan hata: Sabit terimi saymamak ya da eksi işaretini katsayıdan ayırmak.
Cevap D.`
},
{
  id: "mat-ci-227",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir tatil köyünde bisiklet kiralama ücreti şöyledir: ilk saat için sabit 15 TL, sonraki her saat için t TL. Ceren, bu köyde bir bisikleti 5 saat kiralamıştır.
**Ceren'in ödeyeceği tutarı TL cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`4t + 15`, `5t + 15`, `15t + 4`, `15t + 5`],
  dogru: 0,
  hatalar: [
    null,
    `İlk saat için de t TL ödenecekmiş gibi hesapladın. İlk saat sabit 15 TL'dir; t TL yalnızca sonraki 4 saat için ödenir.`,
    `Katsayı ile sabit terimin rollerini karıştırdın. Saat sayısı t ile çarpılır; 15 TL sabit olarak eklenir.`,
    `Sabit ücreti t ile çarptın. Sabit ücret yalnızca bir kez ödenir, saat sayısıyla çarpılmaz.`
  ],
  aciklama: `Bu tür sorularda önce sabit olan kısmı, sonra değişen kısmı ayrı yaz ve topla.
Adım 1: İlk saat sabit 15 TL'dir.
Adım 2: Toplam 5 saat olduğundan sonraki saat sayısı 5 − 1 = 4'tür; bu saatler için 4 · t = 4t TL ödenir.
Adım 3: Toplam tutar 4t + 15 TL olur.
Sağlama: t = 10 TL olsaydı 15 + 4 · 10 = 55 TL ödenirdi; ifade de 4 · 10 + 15 = 55 verir.
Cevap A.`
},
{
  id: "mat-ci-228",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `**2y(y + 7) − y(y − 3) ifadesinin en sade biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`3y^{2} + 17y`, `y^{2} + 11y`, `3y^{2} + 11y`, `y^{2} + 17y`],
  dogru: 3,
  hatalar: [
    `−y · y çarpımını +y^{2} yazdın; eksi ile artının çarpımı eksidir: −y^{2} olmalıydı.`,
    `−y · (−3) çarpımını −3y yazdın; eksi ile eksinin çarpımı artıdır: +3y olmalıydı.`,
    `Çıkarma işaretini hesaba katmadın: −y(y − 3) yerine +y(y − 3) = y^{2} − 3y ekledin.`,
    null
  ],
  aciklama: `Önce her çarpımı dağılma özelliğiyle aç, sonra benzer terimleri birleştir.
Adım 1: 2y(y + 7) = 2y^{2} + 14y.
Adım 2: −y(y − 3) = −y^{2} + 3y (eksi işareti hem y'ye hem −3'e dağılır).
Adım 3: Toplayınca (2y^{2} − y^{2}) + (14y + 3y) = y^{2} + 17y bulunur.
Sağlama: y = 1 için 2 · 8 − 1 · (−2) = 18 ve 1 + 17 = 18.
Cevap D.`
},
{
  id: "mat-ci-229",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir okul koşusunda birinci sporcu (5x − 3) metre, ikinci sporcu (2x − 7) metre koşmuştur (x > 4).
**Birinci sporcu, ikinci sporcudan kaç metre daha fazla koşmuştur?**`,
  gorsel: null,
  secenekler: [`3x − 10`, `3x + 4`, `7x + 4`, `7x − 10`],
  dogru: 1,
  hatalar: [
    `Eksi işaretini yalnızca ilk terime uyguladın: 5x − 3 − 2x − 7 yazdın. Eksi, parantezin her terimine dağıtılır; −(−7) = +7'dir.`,
    null,
    `x'li terimleri topladın (5x + 2x), sabitleri çıkardın. Fark istendiğinde bütün terimler çıkarılır.`,
    `İki uzunluğu topladın. Soru farkı sorar; (5x − 3) + (2x − 7) = 7x − 10 toplamı verir.`
  ],
  aciklama: `Fark bulmak için büyük değerden küçük değer çıkarılır; çıkarmada eksi işareti parantezdeki her terimi etkiler.
Adım 1: (5x − 3) − (2x − 7) yaz.
Adım 2: Parantezi aç: 5x − 3 − 2x + 7.
Adım 3: Benzer terimleri birleştir: (5x − 2x) + (−3 + 7) = 3x + 4.
Sağlama: x = 5 için sporcular 22 m ve 3 m koşmuştur; fark 19'dur. 3 · 5 + 4 = 19.
Cevap B.`
},
{
  id: "mat-ci-230",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir elektronik atölyesinin günlük kazancı 3x^{2} + 4x − x^{2} + 6x − 5 TL olarak yazılmıştır.
**Bu ifadenin en sade biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`12x^{2} − 5`, `2x^{2} + 10x + 5`, `3x^{2} + 9x − 5`, `2x^{2} + 10x − 5`],
  dogru: 3,
  hatalar: [
    `x^{2} ile x'li terimleri benzer sayıp hepsini birleştirdin (3 + 4 − 1 + 6 = 12). Yalnızca harf ve üssü aynı olan terimler birleşir.`,
    `Sabit terimin işaretini değiştirdin; −5 işaretiyle birlikte terimdir ve eksi olarak kalır.`,
    `−x^{2} terimini −x gibi okuyup 4x ve 6x ile birleştirdin. x^{2} ile x benzer terim değildir.`,
    null
  ],
  aciklama: `Benzer terimler, değişken kısmı (harf ve üs) aynı olan terimlerdir; yalnızca onlar toplanır ya da çıkarılır.
Adım 1: x^{2}'li terimler: 3x^{2} − x^{2} = 2x^{2}.
Adım 2: x'li terimler: 4x + 6x = 10x.
Adım 3: Sabit terim −5 olduğu gibi kalır.
Sağlama: x = 1 için ilk ifade 3 + 4 − 1 + 6 − 5 = 7'dir; 2 + 10 − 5 = 7.
Cevap D.`
},
{
  id: "mat-ci-231",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir akıllı tahtanın ekran genişliği (x + 3) dm, yüksekliği (x − 4) dm'dir (x > 4).
**Ekranın alanı kaç desimetrekaredir?**`,
  gorsel: null,
  secenekler: [`x^{2} − 12`, `x^{2} + x − 12`, `x^{2} − x − 12`, `x^{2} − 7x − 12`],
  dogru: 2,
  hatalar: [
    `Ortadaki iki çarpımı (3x ve −4x) hiç yazmadın. Dört çarpımın dördü de hesaba katılmalıdır.`,
    `Ortadaki terimlerin işaretini karıştırdın. 3x ve −4x toplanınca −x olur, +x değil.`,
    null,
    `3x'i de eksi aldın. x · (−4) = −4x, ama 3 · x = +3x'tir; toplamları −x olur.`
  ],
  aciklama: `İki terimli iki ifade çarpılırken birinci paranteze ait her terim ikinci parantezdeki her terimle çarpılır.
Adım 1: x · x = x^{2}; x · (−4) = −4x; 3 · x = 3x; 3 · (−4) = −12.
Adım 2: Benzer terimleri birleştir: −4x + 3x = −x.
Adım 3: Alan x^{2} − x − 12 olur.
Sağlama: x = 5 için (8)(1) = 8 ve 25 − 5 − 12 = 8.
Cevap C.`
},
{
  id: "mat-ci-232",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Kenar uzunluğu (x + 8) dm olan kare biçimli bir halı serilecektir.
**Halının alanını desimetrekare cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`x^{2} + 16x + 64`, `x^{2} + 8x + 64`, `x^{2} + 16x + 16`, `x^{2} + 64`],
  dogru: 0,
  hatalar: [
    null,
    `Ortadaki terimi 8x yazdın; iki katı çarpım olduğundan 2 · x · 8 = 16x olmalıdır.`,
    `Son terimi 2 · 8 = 16 aldın. Son terim 8'in karesidir: 8^{2} = 64.`,
    `(x + 8)^{2} = x^{2} + 8^{2} sandın. Ortadaki 2 · x · 8 = 16x terimi unutulmamalıdır.`
  ],
  aciklama: `Tam kare açılımı: (a + b)^{2} = a^{2} + 2ab + b^{2}. Ortadaki terim her zaman iki katı çarpımdır.
Adım 1: a = x, b = 8 al.
Adım 2: a^{2} = x^{2}; 2ab = 2 · x · 8 = 16x; b^{2} = 64.
Adım 3: Alan x^{2} + 16x + 64 olur.
Sağlama: x = 2 için 10^{2} = 100 ve 4 + 32 + 64 = 100.
Cevap A.`
},
{
  id: "mat-ci-233",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Bir pastane, bir tepsi tatlının maliyetini 14x − 21 TL olarak hesaplamıştır.
**Bu ifadenin ortak çarpan parantezine alınmış biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`7(2x + 3)`, `7(x − 3)`, `7(2x − 7)`, `7(2x − 3)`],
  dogru: 3,
  hatalar: [
    `Parantez içindeki işareti değiştirdin. 21 çıkarıldığı için parantezde −3 kalır; 7(2x + 3) = 14x + 21 olurdu.`,
    `14'ü 7'ye bölünce 1 buldun; 14 ÷ 7 = 2'dir. 7(x − 3) = 7x − 21 eder.`,
    `21'i 7'ye bölünce 7 buldun; 21 ÷ 7 = 3'tür. 7(2x − 7) = 14x − 49 eder.`,
    null
  ],
  aciklama: `Ortak çarpan parantezi: terimleri bölen ortak sayı dışarı alınır, her terim ona bölünüp parantez içine yazılır.
Adım 1: 14 ile 21'in en büyük ortak böleni 7'dir.
Adım 2: 14x ÷ 7 = 2x ve 21 ÷ 7 = 3; işaret korunur: 7(2x − 3).
Sağlama: 7 · 2x − 7 · 3 = 14x − 21.
Cevap D.`
},
{
  id: "mat-ci-234",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir çiftçinin ekin tarlası eni (2x − 1) m, boyu (x + 6) m olan dikdörtgen biçimindedir (x > 1).
**Tarlanın alanı kaç metrekaredir?**`,
  gorsel: null,
  secenekler: [`2x^{2} + 12x − 6`, `2x^{2} + 13x − 6`, `2x^{2} + 11x + 6`, `2x^{2} + 11x − 6`],
  dogru: 3,
  hatalar: [
    `(−1) · x = −x terimini hiç yazmadın. 12x'in yanında −x de vardır.`,
    `(−1) · x çarpımını +x aldın. Eksi çarpanın işareti korunur: 12x − x = 11x olmalıdır.`,
    `(−1) · 6 çarpımını +6 yazdın; eksi ile artının çarpımı −6'dır.`,
    null
  ],
  aciklama: `Adım 1: 2x · x = 2x^{2}; 2x · 6 = 12x; (−1) · x = −x; (−1) · 6 = −6.
Adım 2: Benzer terimler: 12x − x = 11x.
Adım 3: Alan 2x^{2} + 11x − 6 olur.
Sağlama: x = 2 için (3)(8) = 24 ve 8 + 22 − 6 = 24.
Cevap D.`
},
{
  id: "mat-ci-235",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Kenar uzunluğu (4m − 3) cm olan kare biçimli bir pano yapılacaktır (m > 1).
**Panonun alanı kaç santimetrekaredir?**`,
  gorsel: null,
  secenekler: [`16m^{2} − 24m + 9`, `16m^{2} − 12m + 9`, `16m^{2} − 24m − 9`, `4m^{2} − 24m + 9`],
  dogru: 0,
  hatalar: [
    null,
    `Ortadaki terimi 4m · 3 = 12m aldın; iki katı çarpım 2 · 4m · 3 = 24m olmalıdır.`,
    `Son terimi −9 yazdın. Fark karesinde de son terim artıdır: (−3)^{2} = +9.`,
    `Katsayının karesini almadın: (4m)^{2} = 16m^{2}'dir, 4m^{2} değil.`
  ],
  aciklama: `Fark karesi: (a − b)^{2} = a^{2} − 2ab + b^{2}.
Adım 1: a = 4m, b = 3 al.
Adım 2: a^{2} = 16m^{2}; 2ab = 2 · 4m · 3 = 24m; b^{2} = 9.
Adım 3: Alan 16m^{2} − 24m + 9 olur.
Sağlama: m = 1 için (4 − 3)^{2} = 1 ve 16 − 24 + 9 = 1.
Cevap A.`
},
{
  id: "mat-ci-236",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Alanı 25a^{2} − 36 cm² olan dikdörtgen biçimli bir levhanın kenar uzunlukları, katsayıları tam sayı olan cebirsel ifadelerdir.
**Bu kenar uzunlukları aşağıdakilerden hangisi olabilir?**`,
  gorsel: null,
  secenekler: [`5a − 6 ve 5a − 6`, `25a − 6 ve 25a + 6`, `5a − 6 ve 5a + 6`, `5a − 36 ve 5a + 36`],
  dogru: 2,
  hatalar: [
    `Tam kare yazdın. (5a − 6)^{2} açılınca ortada −60a çıkar; bu ifadede orta terim yoktur.`,
    `25a^{2}'nin karekökünü 25a aldın; karekökü 5a'dır.`,
    null,
    `36'nın karekökünü 36 aldın; karekökü 6'dır.`
  ],
  aciklama: `İki kare farkı: a^{2} − b^{2} = (a − b)(a + b).
Adım 1: 25a^{2} = (5a)^{2} ve 36 = 6^{2} olduğundan ifade (5a)^{2} − 6^{2}'dir.
Adım 2: Kare farkı özdeşliğiyle (5a − 6)(5a + 6) olur.
Sağlama: (5a − 6)(5a + 6) = 25a^{2} + 30a − 30a − 36 = 25a^{2} − 36.
Cevap C.`
},
{
  id: "mat-ci-237",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir robotun başlangıç noktasına uzaklığı, hareketin t. saniyesinde 2t^{2} − 5t + 3 santimetre olarak hesaplanmaktadır.
**Buna göre robot 4. saniyede başlangıç noktasından kaç santimetre uzaktadır?**`,
  gorsel: null,
  secenekler: [`12`, `15`, `47`, `55`],
  dogru: 1,
  hatalar: [
    `Sabit terimi (+3) eklemeyi unuttun: 32 − 20 = 12 yalnızca ilk iki terimin değeridir.`,
    null,
    `2t^{2} yerine (2t)^{2} = 64 aldın. Üs yalnızca t'ye aittir: 2 · 4^{2} = 32.`,
    `−5t terimini +20 aldın. Eksi işaretli terim değeri azaltır: 32 − 20 + 3.`
  ],
  aciklama: `Değer bulmak için harfin yerine sayı yazılır; önce üs, sonra çarpma, en son toplama ve çıkarma yapılır.
Adım 1: t = 4 yaz: 2 · 4^{2} − 5 · 4 + 3.
Adım 2: Üs: 4^{2} = 16, yani 2 · 16 = 32.
Adım 3: 32 − 20 + 3 = 15.
Sık yapılan hata: Üssü katsayıya bulaştırmak ya da sabit terimi unutmak.
Cevap B.`
},
{
  id: "mat-ci-238",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Dikdörtgen biçimli bir fotoğraf albümü kapağının eni (3a − b) cm, boyu (a + 2b) cm'dir.
**Kapağın alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`3a^{2} + 7ab − 2b^{2}`, `3a^{2} + 5ab − 2b^{2}`, `3a^{2} + 6ab − 2b^{2}`, `3a^{2} + 5ab + 2b^{2}`],
  dogru: 1,
  hatalar: [
    `(−b) · a çarpımını +ab aldın; sonuç −ab'dir. 6ab − ab = 5ab olmalıdır.`,
    null,
    `(−b) · a = −ab çarpımını hiç yazmadın. ab'li iki terim vardır: 6ab ve −ab.`,
    `(−b) · 2b çarpımını +2b^{2} yazdın; eksi ile artının çarpımı −2b^{2}'dir.`
  ],
  aciklama: `Adım 1: 3a · a = 3a^{2}; 3a · 2b = 6ab; (−b) · a = −ab; (−b) · 2b = −2b^{2}.
Adım 2: ab'li terimler benzerdir: 6ab − ab = 5ab.
Adım 3: Alan 3a^{2} + 5ab − 2b^{2} olur.
Sağlama: a = 2, b = 1 için (5)(4) = 20 ve 12 + 10 − 2 = 20.
Cevap B.`
},
{
  id: "mat-ci-239",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki eşitliklerden hangisi her a değeri için doğrudur?**`,
  gorsel: null,
  secenekler: [`(a − 6)(a + 6) = a^{2} − 36`, `(a − 5)(a + 5) = a^{2} − 10`, `(a − 3)^{2} = a^{2} − 6a − 9`, `(a + 4)^{2} = a^{2} + 16`],
  dogru: 0,
  hatalar: [
    null,
    `(a − 5)(a + 5) = a^{2} − 25'tir; 5'in karesi 25'tir, 2 katı değil.`,
    `(a − 3)^{2} = a^{2} − 6a + 9'dur; son terim (−3)^{2} = +9'dur.`,
    `(a + 4)^{2} = a^{2} + 8a + 16'dır; ortadaki 8a terimi eksik.`
  ],
  aciklama: `Özdeşlik, harflere hangi sayıyı verirsen ver doğru olan eşitliktir. Şüphede bir sayı dene.
Adım 1: Seçenekleri a = 1 ile dene.
Adım 2: (1 + 4)^{2} = 25 iken 1 + 16 = 17; (1 − 5)(1 + 5) = −24 iken 1 − 10 = −9; (1 − 3)^{2} = 4 iken 1 − 6 − 9 = −14. Üçü de tutmuyor.
Adım 3: (1 − 6)(1 + 6) = −35 ve 1 − 36 = −35; ayrıca iki kare farkı özdeşliği (a − 6)(a + 6) = a^{2} − 36 tanımıdır.
Sık yapılan hata: Kare farkında karenin karesini değil, sayının kendisini ya da iki katını yazmak.
Cevap A.`
},
{
  id: "mat-ci-240",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Alanı 9m^{2} + 12m + 4 santimetrekare olan kare biçimli bir kitap kapağı tasarlanmıştır.
**Bu kapağın bir kenar uzunluğunu santimetre cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`3m + 2`, `3m − 2`, `3m + 4`, `9m + 2`],
  dogru: 0,
  hatalar: [
    null,
    `Parantezdeki işareti ortadaki terim belirler. Ortadaki terim +12m olduğundan parantezde + olmalıdır.`,
    `Son terim 4'tür; kenarın sabit terimi 4'ün karekökü olan 2'dir.`,
    `9m^{2}'nin karekökü 3m'dir; 9m değil.`
  ],
  aciklama: `Karenin alanı kenarın karesi olduğundan alan ifadesi tam kare ise kenar, ifadenin kareköküdür.
Adım 1: 9m^{2} = (3m)^{2} ve 4 = 2^{2} olduğundan ilk ve son terimin kökleri 3m ve 2'dir.
Adım 2: Ortadaki terim 2 · 3m · 2 = 12m ve işaret + olduğundan ifade (3m + 2)^{2} biçimindedir.
Sağlama: (3m + 2)^{2} = 9m^{2} + 12m + 4.
Cevap A.`
},
{
  id: "mat-ci-241",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `**−3k(2k − 5) + 4k^{2} ifadesinin en sade biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`−2k^{2} − 15k`, `−2k^{2} + 15k`, `10k^{2} − 15k`, `10k^{2} + 15k`],
  dogru: 1,
  hatalar: [
    `(−3k) · (−5) çarpımını −15k yazdın; eksi ile eksinin çarpımı artıdır: +15k.`,
    null,
    `İşaret hatasını iki yerde yaptın: (−3k)(2k) = −6k^{2} olmalıydı, (−3k)(−5) = +15k olmalıydı.`,
    `(−3k) · 2k çarpımını +6k^{2} yazdın; eksi ile artının çarpımı −6k^{2}'dir.`
  ],
  aciklama: `Adım 1: −3k(2k − 5) = −6k^{2} + 15k; çünkü (−3k)(2k) = −6k^{2} ve (−3k)(−5) = +15k.
Adım 2: 4k^{2} ile topla: −6k^{2} + 4k^{2} = −2k^{2}.
Adım 3: Sonuç −2k^{2} + 15k olur.
Sağlama: k = 1 için −3 · (−3) + 4 = 13 ve −2 + 15 = 13.
Cevap B.`
},
{
  id: "mat-ci-242",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Kenarı 49 metre olan kare biçimli bir otoparkın alanını hesap makinesi kullanmadan bulmak isteyen Aras, 49 = 50 − 1 yazarak özdeşlikten yararlanıyor.
**Otoparkın alanı kaç metrekaredir?**`,
  gorsel: null,
  secenekler: [`2400`, `2401`, `2499`, `2601`],
  dogru: 1,
  hatalar: [
    `Son terimi (b^{2} = 1) unuttun: 2500 − 100 = 2400.`,
    null,
    `Fark karesi yerine (50 − 1)(50 + 1) = 2499 hesapladın. Kare açılımında ortadaki terim vardır.`,
    `Ortadaki terimi artı aldın: 2500 + 100 + 1. Fark karesinde orta terim eksidir.`
  ],
  aciklama: `Fark karesi: (a − b)^{2} = a^{2} − 2ab + b^{2}.
Adım 1: 49^{2} = (50 − 1)^{2}.
Adım 2: 50^{2} = 2500; 2 · 50 · 1 = 100; 1^{2} = 1.
Adım 3: 2500 − 100 + 1 = 2401.
Sağlama: 49 · 49 = 2401.
Cevap B.`
},
{
  id: "mat-ci-243",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `**3x^{2} − 12 ifadesinin tamamen çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`3(x − 2)^{2}`, `3(x − 4)(x + 4)`, `3(x^{2} − 4)`, `3(x − 2)(x + 2)`],
  dogru: 3,
  hatalar: [
    `Tam kare yazdın. Ortada terim olmadığı için bu bir kare farkıdır; (x − 2)^{2} açılınca −4x çıkar.`,
    `12 ÷ 3 = 4'ün karekökünü 4 aldın; karekökü 2'dir.`,
    `Yalnızca ortak çarpanı aldın; parantezin içindeki x^{2} − 4 hâlâ iki kare farkıdır, ayırma yarım kaldı.`,
    null
  ],
  aciklama: `Çarpanlara ayırırken önce ortak çarpan, sonra kare farkı ya da tam kare aranır.
Adım 1: Ortak çarpan 3: 3x^{2} − 12 = 3(x^{2} − 4).
Adım 2: x^{2} − 4 iki kare farkıdır: (x − 2)(x + 2).
Adım 3: Sonuç 3(x − 2)(x + 2).
Sağlama: 3(x^{2} − 4) = 3x^{2} − 12.
Cevap D.`
},
{
  id: "mat-ci-244",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Şekilde dikdörtgen biçimli bir sınıf panosu dört parçaya ayrılmıştır. Sol üstteki parça kare biçimlidir ve parçaların alanları santimetrekare cinsinden şekil üzerinde yazılıdır.
**Panonun çevresini santimetre cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 400 245"><rect x="80" y="30" width="120" height="120" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="200" y="30" width="70" height="120" fill="none" stroke="currentColor" stroke-width="2"/><rect x="80" y="150" width="120" height="55" fill="none" stroke="currentColor" stroke-width="2"/><rect x="200" y="150" width="70" height="55" fill="none" stroke="currentColor" stroke-width="2"/><text x="140" y="96" text-anchor="middle" font-size="18" fill="currentColor">x²</text><text x="235" y="96" text-anchor="middle" font-size="18" fill="currentColor">3x</text><text x="140" y="184" text-anchor="middle" font-size="18" fill="currentColor">2x</text><text x="235" y="184" text-anchor="middle" font-size="18" fill="currentColor">6</text><text x="175" y="232" text-anchor="middle" font-size="14" fill="currentColor">Alanlar cm² cinsindendir.</text></svg>`,
  secenekler: [`4x + 10`, `4x + 5`, `2x + 5`, `x^{2} + 5x + 6`],
  dogru: 0,
  hatalar: [
    null,
    `Çevreyi 2 ile çarparken sabit terimi çarpmayı unuttun: 2(2x + 5) = 4x + 10.`,
    `Yarım çevreyi buldun. Çevre, komşu iki kenarın toplamının 2 katıdır.`,
    `Alanı yazdın; soru çevreyi sorar.`
  ],
  aciklama: `Parçaların alanından kenarları bul: sol üst kare x^{2} alanlıysa kenarı x'tir.
Adım 1: Sağ üst parçanın alanı 3x ve bir kenarı x olduğundan diğer kenarı 3'tür. Alt sol parça 2x ve bir kenarı x olduğundan yüksekliği 2'dir.
Adım 2: Pano (x + 3) ve (x + 2) kenarlı bir dikdörtgendir.
Adım 3: Çevre = 2[(x + 3) + (x + 2)] = 2(2x + 5) = 4x + 10.
Sağlama: Alan (x + 3)(x + 2) = x^{2} + 5x + 6, parçaların toplamıdır.
Cevap A.`
},
{
  id: "mat-ci-245",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Kenarı 63 metre olan kare biçimli bir arsanın içinde, kenarı 37 metre olan kare biçimli bir bölüm kamulaştırılmıştır.
**Arsanın kamulaştırılmayan kısmının alanı kaç metrekaredir?**`,
  gorsel: null,
  secenekler: [`126`, `676`, `2600`, `10000`],
  dogru: 2,
  hatalar: [
    `İki kenarı topladın (63 + 37 = 100) ve farkı (26) çarpmak yerine toplayıp 126 buldun; alanlar farkı (63 − 37)(63 + 37) çarpımıdır.`,
    `Yalnızca kenar farkının karesini aldın: 26^{2} = 676. Kare farkında çarpılan, farkla toplamdır.`,
    null,
    `Kenarların toplamının karesini aldın: 100^{2}. Alan farkı için fark da çarpıma girer.`
  ],
  aciklama: `İki kare farkı: a^{2} − b^{2} = (a − b)(a + b). Alanlar farkını kenarlarla hesaplamak işlemi kolaylaştırır.
Adım 1: Kalan alan 63^{2} − 37^{2}'dir.
Adım 2: (63 − 37)(63 + 37) = 26 · 100.
Adım 3: 26 · 100 = 2600.
Sağlama: 63^{2} = 3969 ve 37^{2} = 1369; 3969 − 1369 = 2600.
Cevap C.`
},
{
  id: "mat-ci-246",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Bir yemek şirketinin bir etkinlik menüsü için hesapladığı maliyet 12ab + 18b TL'dir.
**Bu ifadenin, parantez içinde ortak çarpan kalmayacak biçimde ortak çarpan parantezine alınmış hâli aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`2b(6a + 9)`, `6b(2a + 3)`, `6(2ab + 3b)`, `6b(2a + 18)`],
  dogru: 1,
  hatalar: [
    `Ortak çarpanı eksik aldın: parantezin içinde hâlâ 3 ortak çarpanı kalıyor (6a + 9 = 3(2a + 3)).`,
    null,
    `b harfini dışarı almadın; parantezin içinde hâlâ b ortak çarpanı var.`,
    `18'i 6'ya bölmeyi unuttun. 18b ÷ 6b = 3'tür.`
  ],
  aciklama: `En büyük ortak çarpan; sayıların en büyük ortak böleni ile ortak harflerin çarpımıdır.
Adım 1: 12 ile 18'in en büyük ortak böleni 6'dır; her iki terimde b vardır. Ortak çarpan 6b.
Adım 2: 12ab ÷ 6b = 2a ve 18b ÷ 6b = 3.
Adım 3: İfade 6b(2a + 3) olur.
Sağlama: 6b · 2a + 6b · 3 = 12ab + 18b.
Cevap B.`
},
{
  id: "mat-ci-247",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir botanik sergisinde saksılar (x + 1) sıra hâlinde dizilmiş ve her sırada (x + 6) saksı bulunmaktadır. Sergi açılmadan önce 3 saksı kırıldığı için diziden çıkarılmıştır.
**Sergide kalan saksı sayısını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`x^{2} + 6x + 3`, `x^{2} + 7x + 6`, `x^{2} + 7x + 3`, `x^{2} + 7x + 9`],
  dogru: 2,
  hatalar: [
    `Çarpımda x'li terimlerden birini yazmadın: 6x ve x terimleri birlikte 7x eder.`,
    `Kırılan 3 saksıyı çıkarmayı unuttun; (x + 1)(x + 6) = x^{2} + 7x + 6 yalnızca ilk düzendeki sayıdır.`,
    null,
    `Kırılan saksıları çıkarmak yerine ekledin: 6 + 3 = 9.`
  ],
  aciklama: `Adım 1: İlk düzendeki saksı sayısı sıra sayısı çarpı sıradaki saksı sayısıdır: (x + 1)(x + 6) = x^{2} + 6x + x + 6 = x^{2} + 7x + 6.
Adım 2: Kırılan 3 saksı çıkarılır: x^{2} + 7x + 6 − 3 = x^{2} + 7x + 3.
Sağlama: x = 2 için 3 · 8 − 3 = 21 ve 4 + 14 + 3 = 21.
Cevap C.`
},
{
  id: "mat-ci-248",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Kenar uzunluğu (3x − 5) metre olan kare biçimli bir yüzme havuzunun yüzeyi su geçirmez boyayla kaplanacaktır (x > 2).
**Yüzeyin alan ifadesi açıldığında x'li terimin katsayısı kaç olur?**`,
  gorsel: null,
  secenekler: [`−30`, `−15`, `15`, `30`],
  dogru: 0,
  hatalar: [
    null,
    `İki katı çarpımdaki 2 çarpanını unuttun: 3x · 5 = 15x değil, 2 · 3x · 5 = 30x.`,
    `Hem 2 çarpanını unuttun hem de fark karesindeki eksi işaretini kaçırdın.`,
    `Ortadaki terimin işaretini artı aldın; fark karesinde ortadaki terim eksidir.`
  ],
  aciklama: `Adım 1: (3x − 5)^{2} = (3x)^{2} − 2 · 3x · 5 + 5^{2}.
Adım 2: = 9x^{2} − 30x + 25.
Adım 3: x'li terim −30x olduğundan katsayısı −30'dur (işaret katsayıya dahildir).
Sağlama: x = 2 için 1^{2} = 1 ve 36 − 60 + 25 = 1.
Cevap A.`
},
{
  id: "mat-ci-249",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Alanı 16x^{2} − 40x + 25 metrekare olan kare biçimli bir oyun alanının çevresine koruma bandı çekilecektir (x > 2).
**Bandın uzunluğu kaç metredir?**`,
  gorsel: null,
  secenekler: [`16x − 20`, `8x − 10`, `4x − 5`, `16x − 5`],
  dogru: 0,
  hatalar: [
    null,
    `Yarım çevreyi (iki kenarı) buldun; çevre 4 kenarın toplamıdır.`,
    `Bir kenarın uzunluğunu buldun; bant, dört kenarı kaplar.`,
    `4 ile yalnızca ilk terimi çarptın; 4(4x − 5) = 16x − 20'dir.`
  ],
  aciklama: `Alan tam kare olduğundan kenar, ifadenin kareköküdür; çevre kenarın 4 katıdır.
Adım 1: 16x^{2} = (4x)^{2}, 25 = 5^{2}, ortadaki terim 2 · 4x · 5 = 40x ve işaret eksi: ifade (4x − 5)^{2}.
Adım 2: Kenar 4x − 5 metredir.
Adım 3: Çevre 4(4x − 5) = 16x − 20 metredir.
Sağlama: (4x − 5)^{2} = 16x^{2} − 40x + 25.
Cevap A.`
},
{
  id: "mat-ci-250",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Kenar uzunluğu (x + 4) cm olan kare biçimli bir karton, şekildeki gibi dört parçaya ayrılmıştır. Taralı iki dikdörtgen parça boyanacaktır.
**Boyanacak parçaların alanları toplamı kaç santimetrekaredir?**`,
  gorsel: `<svg viewBox="0 0 360 260"><rect x="80" y="40" width="120" height="120" fill="none" stroke="currentColor" stroke-width="2"/><rect x="200" y="40" width="70" height="120" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="80" y="160" width="120" height="70" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="200" y="160" width="70" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="140" y="30" text-anchor="middle" font-size="16" fill="currentColor">x</text><text x="235" y="30" text-anchor="middle" font-size="16" fill="currentColor">4</text><text x="68" y="106" text-anchor="end" font-size="16" fill="currentColor">x</text><text x="68" y="201" text-anchor="end" font-size="16" fill="currentColor">4</text></svg>`,
  secenekler: [`4x`, `x^{2} + 16`, `8x`, `x^{2} + 8x + 16`],
  dogru: 2,
  hatalar: [
    `Yalnızca bir taralı dikdörtgenin alanını buldun; iki tane var.`,
    `Taralı olmayan iki karenin alanları toplamını (x^{2} + 16) buldun.`,
    null,
    `Karenin tamamının alanını buldun; yalnızca taralı kısım isteniyor.`
  ],
  aciklama: `Adım 1: Taralı dikdörtgenlerin kenarları x ve 4'tür; her birinin alanı 4x'tir.
Adım 2: İki dikdörtgenin alanları toplamı 4x + 4x = 8x olur.
Sağlama: Bütün alan (x + 4)^{2} = x^{2} + 8x + 16'dır; boyanmayan x^{2} ve 16 çıkarılınca 8x kalır.
Sık yapılan hata: Ortadaki 2ab terimini unutmak ya da (x + 4)^{2} = x^{2} + 16 sanmak.
Cevap C.`
},
{
  id: "mat-ci-251",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Bir kafenin n. günkü kârı n^{2} − 4n + 4 TL ifadesiyle hesaplanıyor. Kafe sahibi 48. günün kârını hesap makinesi olmadan bulmak için ifadeyi önce çarpanlarına ayırıyor.
**48. günün kârı kaç TL'dir?**`,
  gorsel: null,
  secenekler: [`1936`, `2116`, `2300`, `2500`],
  dogru: 1,
  hatalar: [
    `Çarpanlara ayırırken (n − 4)^{2} yazdın; ortadaki terim 2 · n · 2 = 4n olduğundan parantezdeki sayı 2'dir (44^{2} = 1936).`,
    null,
    `Kare farkı gibi (n − 2)(n + 2) hesapladın. Ortada −4n terimi olduğundan bu bir tam karedir.`,
    `Parantezdeki işareti artı aldın: (n + 2)^{2} = 50^{2}. Ortadaki terim eksi olduğundan (n − 2)^{2} olmalıdır.`
  ],
  aciklama: `Tam kare: n^{2} − 4n + 4 ifadesinde ilk ve son terim birer karedir (n ve 2) ve ortadaki terim 2 · n · 2 = 4n'dir; işaret eksi olduğundan ifade (n − 2)^{2}'dir.
Adım 1: İfadeyi (n − 2)^{2} olarak yaz.
Adım 2: n = 48 için (48 − 2)^{2} = 46^{2}.
Adım 3: 46^{2} = 2116.
Sağlama: 46 · 46 = 2116.
Cevap B.`
},
{
  id: "mat-ci-252",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir kantinde x. gün elde edilen gelir (3x^{2} − 2x + 1) TL, aynı gün yapılan gider (x^{2} + 4x − 5) TL'dir. Kantin sorumlusu kârı, gelirden gideri çıkararak bulmaktadır.
**Kantinin x. gündeki kârını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`4x^{2} + 2x − 4`, `2x^{2} + 2x − 4`, `2x^{2} − 6x − 4`, `2x^{2} − 6x + 6`],
  dogru: 3,
  hatalar: [
    `Gelir ile gideri topladın. Kâr, gelirden gider çıkarılarak bulunur.`,
    `Çıkarma işaretini parantezdeki terimlere dağıtmadın: 3x^{2} − 2x + 1 − x^{2} + 4x − 5 yazdın. Eksi işareti x^{2}, 4x ve −5'in hepsini değiştirir.`,
    `Eksiyi son terime dağıtmadın: −(−5) = +5 olduğundan sabit terim 1 + 5 = 6 olmalıdır.`,
    null
  ],
  aciklama: `Çıkarma yaparken eksi işareti, parantezin içindeki her terimin işaretini değiştirir.
Adım 1: Kâr = (3x^{2} − 2x + 1) − (x^{2} + 4x − 5).
Adım 2: Parantezi aç: 3x^{2} − 2x + 1 − x^{2} − 4x + 5.
Adım 3: Benzer terimler: (3x^{2} − x^{2}) + (−2x − 4x) + (1 + 5) = 2x^{2} − 6x + 6.
Sağlama: x = 1 için gelir 2, gider 0, kâr 2'dir; 2 − 6 + 6 = 2.
Cevap D.`
},
{
  id: "mat-ci-253",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir mağaza, etiket fiyatı 40 TL olan bir ürüne kampanya boyunca 2x TL indirim uygulamaktadır; yani indirimli fiyat (40 − 2x) TL'dir. Kampanyada satılan ürün sayısı (x + 10) adettir (0 < x < 20).
**Mağazanın bu üründen elde ettiği toplam geliri TL cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`2x^{2} + 20x + 400`, `−2x^{2} + 60x + 400`, `−2x^{2} + 20x + 400`, `2x^{2} + 60x + 400`],
  dogru: 2,
  hatalar: [
    `(−2x) · x çarpımını +2x^{2} yazdın; eksi ile artının çarpımı −2x^{2}'dir.`,
    `(−2x) · 10 çarpımını +20x aldın; sonuç −20x'tir. 40x − 20x = 20x olmalıdır.`,
    null,
    `İki işaret hatası yaptın: (−2x)(x) = −2x^{2} ve (−2x)(10) = −20x olmalıdır.`
  ],
  aciklama: `Gelir = fiyat × adet. Fiyat da adet de ifade olduğundan iki ifade çarpılır.
Adım 1: (40 − 2x)(x + 10) için 40 · x = 40x, 40 · 10 = 400, (−2x) · x = −2x^{2}, (−2x) · 10 = −20x.
Adım 2: x'li terimler: 40x − 20x = 20x.
Adım 3: Gelir −2x^{2} + 20x + 400 TL olur.
Sağlama: x = 5 için (30)(15) = 450 ve −50 + 100 + 400 = 450.
Cevap C.`
},
{
  id: "mat-ci-254",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Kare biçimli bir çocuk parkının alanı x^{2} − 14x + 49 metrekaredir (x > 7). Belediye parkın dört kenarına çit çekecektir ve çitin uzunluğu x = 10 için hesaplanacaktır.
**Çitin uzunluğu kaç metredir?**`,
  gorsel: null,
  secenekler: [`3`, `9`, `12`, `33`],
  dogru: 2,
  hatalar: [
    `Bir kenarın uzunluğunu (x − 7 = 3) buldun; çit dört kenarı çevreler.`,
    `Parkın alanını buldun (3^{2} = 9). Soru çevreyi sorar.`,
    null,
    `4 ile yalnızca ilk terimi çarptın: 4x − 7 = 33. Çevre 4(x − 7)'dir.`
  ],
  aciklama: `Alan tam kare olduğundan kenar, ifadenin kareköküdür; çevre kenarın 4 katıdır.
Adım 1: x^{2} = x · x, 49 = 7^{2}, ortadaki terim 2 · x · 7 = 14x ve işaret eksi: alan (x − 7)^{2}.
Adım 2: Kenar x − 7 = 10 − 7 = 3 metredir.
Adım 3: Çevre 4 · 3 = 12 metredir.
Sağlama: x = 10 için alan 100 − 140 + 49 = 9 = 3^{2}.
Cevap C.`
},
{
  id: "mat-ci-255",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir kültür merkezinde iki salonun koltuk düzeni şöyledir: A salonunda 49 sıra vardır ve her sırada 51 koltuk bulunur; B salonunda 48 sıra vardır ve her sırada 52 koltuk bulunur. Koltuk sayılarını hesap makinesi kullanmadan karşılaştıran Nil, her çarpımı 50 civarındaki sayılarla yazıp iki kare farkı özdeşliğinden yararlanıyor.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [`A salonu, B salonundan 5 koltuk fazladır.`, `A salonu, B salonundan 3 koltuk fazladır.`, `B salonu, A salonundan 3 koltuk fazladır.`, `B salonu, A salonundan 5 koltuk fazladır.`],
  dogru: 1,
  hatalar: [
    `49 · 51'i 50^{2} + 1 = 2501 hesapladın (işareti karıştırdın); doğrusu 50^{2} − 1 = 2499'dur. Bu durumda fark 5 çıkıyor.`,
    null,
    `Fark doğru bulundu ama yönü ters yorumladın: 2499, 2496'dan büyüktür; fazla olan A salonudur.`,
    `48 · 52'yi 50^{2} + 4 = 2504 hesapladın (işareti karıştırdın); doğrusu 50^{2} − 4 = 2496'dır.`
  ],
  aciklama: `İki kare farkı: (a − b)(a + b) = a^{2} − b^{2}.
Adım 1: A salonu: 49 · 51 = (50 − 1)(50 + 1) = 2500 − 1 = 2499 koltuk.
Adım 2: B salonu: 48 · 52 = (50 − 2)(50 + 2) = 2500 − 4 = 2496 koltuk.
Adım 3: 2499 − 2496 = 3; A salonu 3 koltuk fazladır.
Sağlama: 49 · 51 = 2499 ve 48 · 52 = 2496.
Cevap B.`
},
{
  id: "mat-ci-256",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Şekildeki dörtgen biçimli ekran çerçevesinin kenar uzunlukları santimetre cinsinden cebirsel ifadelerle verilmiştir (x > 6). Kenar uzunluğu (3x + 4) cm olan kare biçimli ikinci bir çerçeve de vardır.
**Karenin çevresi, dörtgen çerçevenin çevresinden kaç santimetre fazladır?**`,
  gorsel: `<svg viewBox="0 0 420 225"><polygon points="90,40 320,50 340,170 80,185" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="205" y="30" text-anchor="middle" font-size="16" fill="currentColor">3x + 2</text><text x="348" y="115" text-anchor="start" font-size="16" fill="currentColor">x + 5</text><text x="205" y="210" text-anchor="middle" font-size="16" fill="currentColor">4x − 3</text><text x="72" y="118" text-anchor="end" font-size="16" fill="currentColor">2x − 1</text></svg>`,
  secenekler: [`−2x − 13`, `2x + 1`, `2x + 9`, `2x + 13`],
  dogru: 3,
  hatalar: [
    `Çıkarmayı ters yaptın: dörtgenin çevresinden karenin çevresini çıkardın. Soru, karenin çevresinin ne kadar fazla olduğunu sorar.`,
    `Karenin çevresini 4 · 3x + 4 = 12x + 4 hesapladın; 4 çarpanı parantezin her terimine dağıtılır: 12x + 16.`,
    `Dörtgenin çevresinde sabit terimleri yanlış topladın (10x + 7 buldun); 2 + 5 − 3 − 1 = 3 eder.`,
    null
  ],
  aciklama: `Çevre, bütün kenar uzunluklarının toplamıdır. Karenin dört kenarı eşit olduğundan çevresi bir kenarın 4 katıdır.
Adım 1: Dörtgenin çevresi: (3x + 2) + (x + 5) + (4x − 3) + (2x − 1) = 10x + 3.
Adım 2: Karenin çevresi: 4(3x + 4) = 12x + 16.
Adım 3: Fark: (12x + 16) − (10x + 3) = 2x + 13.
Sağlama: x = 7 için dörtgenin kenarları 23, 12, 25, 13 cm ve çevresi 73 cm'dir; karenin kenarı 25 cm ve çevresi 100 cm'dir. Fark 27; 2 · 7 + 13 = 27.
Cevap D.`
},
{
  id: "mat-ci-257",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir hediyelik eşya dükkânında iki masa örtüsü satılmaktadır. Birinin biçimi kenarı (x + 3) dm olan karedir; diğerinin biçimi kenarları (x + 1) dm ve (x + 5) dm olan dikdörtgendir.
**Kare biçimli örtünün alanı, dikdörtgen biçimli örtünün alanından kaç desimetrekare fazladır?**`,
  gorsel: null,
  secenekler: [`4`, `5`, `9`, `14`],
  dogru: 0,
  hatalar: [
    null,
    `Dikdörtgenin sabit terimini (1 · 5 = 5) fark sandın. Karenin alanından dikdörtgeninki çıkarılmalıdır.`,
    `Karenin sabit terimini (3^{2} = 9) fark sandın; dikdörtgenin sabit terimi 5'tir ve çıkarılmalıdır.`,
    `İki sabit terimi topladın (9 + 5). Alanlar çıkarılır: 9 − 5.`
  ],
  aciklama: `Adım 1: Karenin alanı (x + 3)^{2} = x^{2} + 6x + 9.
Adım 2: Dikdörtgenin alanı (x + 1)(x + 5) = x^{2} + 5x + x + 5 = x^{2} + 6x + 5.
Adım 3: Fark (x^{2} + 6x + 9) − (x^{2} + 6x + 5) = 4. Fark x'e bağlı değildir.
Sağlama: x = 1 için kare 16, dikdörtgen 2 · 6 = 12; fark 4.
Cevap A.`
},
{
  id: "mat-ci-258",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Bir atölyede x. günde üretilen ürünlerin maliyeti 2x^{2} + 12x + 18 TL olarak hesaplanmaktadır.
**Bu ifadenin tamamen çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`2(x − 3)^{2}`, `2(x + 3)(x − 3)`, `2(x + 3)^{2}`, `2(x + 9)^{2}`],
  dogru: 2,
  hatalar: [
    `Parantezdeki işareti ortadaki terim belirler. Ortadaki terim +12x olduğundan parantezde + olmalıdır.`,
    `Kare farkı yazdın. Ortada 12x terimi olduğundan bu bir tam karedir; 2(x + 3)(x − 3) = 2x^{2} − 18 eder.`,
    null,
    `9'un karekökünü 9 aldın; karekökü 3'tür. 2(x + 9)^{2} açılınca 2x^{2} + 36x + 162 çıkar.`
  ],
  aciklama: `Önce ortak çarpan, sonra tam kare ya da kare farkı aranır.
Adım 1: Ortak çarpan 2: 2x^{2} + 12x + 18 = 2(x^{2} + 6x + 9).
Adım 2: x^{2} + 6x + 9'da ilk terim x'in karesi, son terim 3'ün karesi ve ortadaki terim 2 · x · 3 = 6x; yani (x + 3)^{2}.
Adım 3: İfade 2(x + 3)^{2} olur.
Sağlama: 2(x^{2} + 6x + 9) = 2x^{2} + 12x + 18.
Cevap C.`
},
{
  id: "mat-ci-259",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `İki kare biçimli seramiğin kenar uzunlukları a cm ve b cm'dir (a > b). Kenar uzunluklarının farkı 4 cm, çarpımı 12 cm²'dir.
**Bu iki seramiğin alanları toplamı kaç santimetrekaredir?**`,
  gorsel: null,
  secenekler: [`16`, `28`, `40`, `64`],
  dogru: 2,
  hatalar: [
    `Yalnızca (a − b)^{2} = 16'yı buldun; (a − b)^{2} = a^{2} − 2ab + b^{2} olduğundan 2ab eklenmelidir.`,
    `2ab yerine yalnızca ab ekledin: 16 + 12. İki katı çarpım 2 · 12 = 24'tür.`,
    null,
    `2ab yerine 4ab ekledin: 16 + 48. Doğrusu 16 + 24'tür.`
  ],
  aciklama: `(a − b)^{2} = a^{2} − 2ab + b^{2} olduğundan a^{2} + b^{2} = (a − b)^{2} + 2ab'dir.
Adım 1: (a − b)^{2} = 4^{2} = 16.
Adım 2: 2ab = 2 · 12 = 24.
Adım 3: a^{2} + b^{2} = 16 + 24 = 40.
Sağlama: a = 6, b = 2 farkı 4, çarpımı 12 yapar ve 36 + 4 = 40.
Cevap C.`
},
{
  id: "mat-ci-260",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir spor kulübünün dikdörtgen biçimli arsasının uzun kenarı (2x + 7) metre, kısa kenarı (x + 4) metredir. Arsanın uzun kenarı boyunca, şekilde gösterildiği gibi 3 metre genişliğinde bir koşu yolu yapılmıştır.
**Koşu yolu dışında kalan alan kaç metrekaredir?**`,
  gorsel: `<svg viewBox="0 0 480 220"><rect x="40" y="40" width="360" height="150" fill="none" stroke="currentColor" stroke-width="2"/><rect x="40" y="150" width="360" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="220" y="28" text-anchor="middle" font-size="16" fill="currentColor">2x + 7</text><text x="410" y="120" text-anchor="start" font-size="16" fill="currentColor">x + 4</text><text x="32" y="176" text-anchor="end" font-size="16" fill="currentColor">3</text><text x="220" y="176" text-anchor="middle" font-size="15" fill="currentColor">koşu yolu</text></svg>`,
  secenekler: [`2x^{2} + 9x + 7`, `2x^{2} + 9x + 28`, `2x^{2} + 12x + 16`, `2x^{2} + 15x + 25`],
  dogru: 0,
  hatalar: [
    null,
    `Yolun alanını 3 · 2x = 6x aldın; 21'i unuttun. Yolun alanı 3(2x + 7) = 6x + 21'dir.`,
    `Yolun genişliğini yanlış kenardan düştün: (2x + 7 − 3)(x + 4). Yol uzun kenar boyunca uzandığından kısa kenar 3 azalır.`,
    `Toplam alandan yalnızca 3 çıkardın. Yolun alanı genişlik çarpı uzunluktur.`
  ],
  aciklama: `Adım 1: Yol uzun kenar boyunca uzandığından uzunluğu 2x + 7, genişliği 3'tür.
Adım 2: Kalan alan, kısa kenarı 3 azalmış dikdörtgenin alanıdır: (2x + 7)(x + 4 − 3) = (2x + 7)(x + 1).
Adım 3: 2x^{2} + 2x + 7x + 7 = 2x^{2} + 9x + 7.
Sağlama: Toplam alan (2x + 7)(x + 4) = 2x^{2} + 15x + 28; yolun alanı 6x + 21; fark 2x^{2} + 9x + 7.
Cevap A.`
},
{
  id: "mat-ci-261",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir kitapçıda bir romanın fiyatı (2x + 5) TL, bir hikâye kitabının fiyatı (x − 1) TL'dir (x > 1). Ayşe ve Burak'ın aldıkları kitapların sayısı tabloda verilmiştir.
**İkisinin birlikte ödediği toplam tutarı gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Kişi</th><th>Roman (adet)</th><th>Hikâye kitabı (adet)</th></tr><tr><td>Ayşe</td><td>2</td><td>1</td></tr><tr><td>Burak</td><td>1</td><td>4</td></tr></table>`,
  secenekler: [`10x + 11`, `11x + 8`, `11x + 10`, `11x + 20`],
  dogru: 2,
  hatalar: [
    `Hikâye kitabı sayısını 4 aldın; Ayşe'nin 1'i ile birlikte toplam 5 hikâye kitabı vardır (toplam 3 roman, 5 hikâye).`,
    `Çarpmada parantezin yalnızca ilk terimini çarptın: 2(2x + 5) = 4x + 5 ve 4(x − 1) = 4x − 1 yazdın. Adetle parantezin her terimi çarpılır.`,
    null,
    `Hikâye kitabının fiyatını (x + 1) aldın; (x − 1)'deki −1 sabit terimdir ve eksi kalır.`
  ],
  aciklama: `Toplam tutar, her kitap türünün toplam adedi çarpı birim fiyatın toplamıdır.
Adım 1: Roman sayısı 2 + 1 = 3, hikâye kitabı sayısı 1 + 4 = 5.
Adım 2: 3(2x + 5) + 5(x − 1) = 6x + 15 + 5x − 5.
Adım 3: Benzer terimler: 11x + 10.
Sağlama: x = 2 için roman 9, hikâye 1 TL; 3 · 9 + 5 · 1 = 32. 11 · 2 + 10 = 32.
Cevap C.`
},
{
  id: "mat-ci-262",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Kenarı x cm olan kare biçimli bir fotoğrafın dört kenarına, şekildeki gibi 2 cm genişliğinde bir çerçeve geçirilecek ve çerçeve (taralı kısım) boyanacaktır (x > 4).
**Boyanacak çerçeve kısmının alanı kaç santimetrekaredir?**`,
  gorsel: `<svg viewBox="0 0 320 270"><path d="M60 40h200v200h-200z M90 70h140v140h-140z" fill="var(--dolgu)" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/><text x="160" y="146" text-anchor="middle" font-size="18" fill="currentColor">x</text><text x="160" y="61" text-anchor="middle" font-size="16" fill="currentColor">2</text><text x="75" y="146" text-anchor="middle" font-size="16" fill="currentColor">2</text><text x="160" y="228" text-anchor="middle" font-size="16" fill="currentColor">2</text><text x="245" y="146" text-anchor="middle" font-size="16" fill="currentColor">2</text></svg>`,
  secenekler: [`4x + 4`, `8x + 16`, `4x + 16`, `x^{2} + 8x + 16`],
  dogru: 1,
  hatalar: [
    `Dış kenarı x + 2 aldın. Çerçeve fotoğrafın iki karşılıklı yanına da eklendiğinden dış kenar x + 2 + 2 = x + 4'tür; (x + 2)^{2} − x^{2} = 4x + 4 olurdu.`,
    null,
    `(x + 4)^{2} açılımında ortadaki terimi 4x aldın; iki katı çarpım 2 · x · 4 = 8x olmalıdır.`,
    `Çerçeveli bütün karenin alanını buldun. Boyanacak kısım için içteki fotoğrafın alanı (x^{2}) çıkarılmalıdır.`
  ],
  aciklama: `Çerçevenin alanı, dıştaki bütün karenin alanından içteki karenin alanı çıkarılarak bulunur.
Adım 1: Çerçeve her yanda 2 cm olduğundan dış karenin kenarı x + 2 + 2 = x + 4 cm'dir.
Adım 2: Dış karenin alanı (x + 4)^{2} = x^{2} + 8x + 16'dır; içteki fotoğrafın alanı x^{2}'dir.
Adım 3: Çerçeve: x^{2} + 8x + 16 − x^{2} = 8x + 16 santimetrekare.
Sağlama: x = 6 için dış kare 10 · 10 = 100, iç kare 36; fark 64. 8 · 6 + 16 = 64.
Cevap B.`
},
{
  id: "mat-ci-263",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Alanı x^{2} + kx + 25 santimetrekare olan kare biçimli bir fotoğrafın kenar uzunluğu, katsayıları tam sayı olan bir cebirsel ifadedir. Burada k pozitif bir tam sayıdır.
**Buna göre k kaçtır?**`,
  gorsel: null,
  secenekler: [`5`, `10`, `25`, `50`],
  dogru: 1,
  hatalar: [
    `İki katı çarpımdaki 2 çarpanını unuttun: ortadaki terim 2 · x · 5 = 10x olmalıdır.`,
    null,
    `Son terimi (25) ortadaki terimin katsayısı sandın. Ortadaki terim köklerin çarpımının 2 katıdır.`,
    `2 · 25 = 50 aldın. Ortadaki terim, köklerin (x ve 5) çarpımının 2 katıdır; 25'in değil.`
  ],
  aciklama: `Alan tam kare ise ifade (x + 5)^{2} biçimindedir; çünkü ilk terim x^{2}, son terim 25 = 5^{2}.
Adım 1: Kenar x + 5 (ya da x − 5) olabilir.
Adım 2: (x + 5)^{2} = x^{2} + 10x + 25 ve (x − 5)^{2} = x^{2} − 10x + 25.
Adım 3: k pozitif olduğundan k = 10.
Sağlama: x^{2} + 10x + 25 = (x + 5)^{2}.
Cevap B.`
},
{
  id: "mat-ci-264",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir parkta yan yana yapılan iki dikdörtgen çiçeklikten birinin boyutları x m ve (x + 3) m, diğerinin boyutları (x + 2) m ve (x − 1) m'dir (x > 1).
**İki çiçekliğin toplam alanı kaç metrekaredir?**`,
  gorsel: null,
  secenekler: [`2x^{2} + 4x − 2`, `2x^{2} + 3x − 2`, `2x^{2} + 4x + 2`, `2x^{2} + 5x − 2`],
  dogru: 0,
  hatalar: [
    null,
    `İkinci çarpımın orta terimini (2x − x = x) hiç yazmadın.`,
    `(+2) · (−1) çarpımını +2 yazdın; artı ile eksinin çarpımı −2'dir.`,
    `(x + 2)(x − 1) çarpımında −x terimini unuttun; yalnızca 2x aldın.`
  ],
  aciklama: `Toplam alan, iki dikdörtgenin alanlarının toplamıdır.
Adım 1: Birinci alan x(x + 3) = x^{2} + 3x.
Adım 2: İkinci alan (x + 2)(x − 1) = x^{2} − x + 2x − 2 = x^{2} + x − 2.
Adım 3: Toplam: 2x^{2} + 4x − 2.
Sağlama: x = 2 için 2 · 5 + 4 · 1 = 14 ve 8 + 8 − 2 = 14.
Cevap A.`
},
{
  id: "mat-ci-265",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `İki dikdörtgen panonun alanları x^{2} − 9 cm² ve x^{2} − 6x + 9 cm²'dir (x > 3). Her iki alan ifadesi de çarpanlarına ayrıldığında ortak çıkan çarpan, iki panonun da bir kenar uzunluğunu verir.
**Bu ortak kenar uzunluğu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`(x − 9) cm`, `(x + 3) cm`, `(x − 3) cm`, `(x + 9) cm`],
  dogru: 2,
  hatalar: [
    `9'un karekökünü 9 aldın; karekökü 3'tür.`,
    `x^{2} − 9 = (x − 3)(x + 3) olduğundan (x + 3) çarpandır ama ikinci ifade (x − 3)^{2} olduğundan (x + 3) orada yoktur.`,
    null,
    `9'un karekökünü 9 aldın ve işareti artı seçtin; çarpanlar x − 3 ve x + 3'tür.`
  ],
  aciklama: `Önce iki ifadeyi çarpanlarına ayır, sonra ikisinde de bulunan çarpanı seç.
Adım 1: x^{2} − 9 iki kare farkıdır: (x − 3)(x + 3).
Adım 2: x^{2} − 6x + 9 tam karedir (ortadaki terim 2 · x · 3 = 6x, işaret eksi): (x − 3)^{2} = (x − 3)(x − 3).
Adım 3: İkisinde de bulunan çarpan x − 3'tür.
Sağlama: x = 5 için alanlar 16 ve 4; ikisi de 2'ye (= x − 3) bölünür.
Cevap C.`
},
{
  id: "mat-ci-266",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `İki kare biçimli reklam panosunun kenar uzunluklarının toplamı 9 dm, farkı 3 dm'dir.
**Bu iki panonun alanları farkı kaç desimetrekaredir?**`,
  gorsel: null,
  secenekler: [`12`, `27`, `54`, `81`],
  dogru: 1,
  hatalar: [
    `Toplamla farkı topladın (9 + 3). Alanlar farkı için bunlar çarpılır.`,
    null,
    `İkisinin çarpımını 2 ile çarptın (2 · 9 · 3); iki kare farkı özdeşliğinde 2 çarpanı yoktur.`,
    `Yalnızca kenarların toplamının karesini aldın (9^{2}); farkla çarpmak gerekir.`
  ],
  aciklama: `İki kare farkı: a^{2} − b^{2} = (a − b)(a + b). Kenarları ayrı ayrı bulmaya gerek yoktur.
Adım 1: a + b = 9 ve a − b = 3.
Adım 2: a^{2} − b^{2} = (a − b)(a + b) = 3 · 9 = 27.
Sağlama: Kenarlar 6 ve 3 dm olur; 36 − 9 = 27.
Cevap B.`
},
{
  id: "mat-ci-267",
  kazanim: "M.8.2.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir yüzme kursunun iki paketi vardır. Birinci pakette 120 TL kayıt ücreti ödenir ve her ders için (x + 4) TL alınır. İkinci pakette kayıt ücreti yoktur ve her ders için (2x + 10) TL alınır. Ali birinci paketten 6 ders, Elif ikinci paketten 3 ders almıştır.
**Ali'nin ödediği tutar, Elif'in ödediği tutardan kaç TL fazladır?**`,
  gorsel: null,
  secenekler: [`−6`, `94`, `114`, `144`],
  dogru: 2,
  hatalar: [
    `Birinci paketin 120 TL kayıt ücretini hesaba katmadın: 6(x + 4) − 3(2x + 10) = −6 çıkar. Kayıt ücreti Ali'nin tutarına eklenir.`,
    `6(x + 4) çarpımında 6'yı yalnızca x'e dağıttın (6x + 4 yazdın). Çarpan parantezin her terimine dağıtılır: 6x + 24.`,
    null,
    `Elif'in tutarındaki sabit terimi (30) çıkarmadın; yalnızca x'li terimleri sadeleştirip Ali'nin sabit terimini (144) aldın.`
  ],
  aciklama: `Her kişinin ödediği tutarı ayrı ifade olarak yaz, sonra çıkar. Sabit ücret yalnızca bir kez eklenir, ders ücreti ders sayısıyla çarpılır.
Adım 1: Ali: 120 + 6(x + 4) = 120 + 6x + 24 = 6x + 144.
Adım 2: Elif: 3(2x + 10) = 6x + 30.
Adım 3: Fark: (6x + 144) − (6x + 30) = 114. x'li terimler birbirini götürür, fark x'e bağlı değildir.
Sağlama: x = 1 için Ali 120 + 30 = 150 TL, Elif 36 TL ödemiştir; fark 114.
Cevap C.`
},
{
  id: "mat-ci-268",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir elektronik mağazasında bir tabletin ekranı (3x + 2) cm genişliğinde ve (2x + 1) cm yüksekliğindedir. Aynı mağazadaki bir televizyonun ekranının genişliği ve yüksekliği, tabletinkinin tam 2 katıdır.
**Televizyon ekranının alanı, tablet ekranının alanından kaç santimetrekare fazladır?**`,
  gorsel: null,
  secenekler: [`6x^{2} + 7x + 2`, `12x^{2} + 14x + 4`, `18x^{2} + 21x + 6`, `24x^{2} + 28x + 8`],
  dogru: 2,
  hatalar: [
    `Alanı 2 katı sandın; fark o zaman tablet alanı kadar olurdu. Kenarlar 2 katına çıkınca alan 4 katına çıkar.`,
    `Alanı 3 katı sandın. Kenarlar 2 katına çıkınca alan 2 · 2 = 4 katına çıkar; fark 3 katıdır.`,
    null,
    `Televizyonun alanını buldun; fark için tablet alanını çıkarmak gerekir.`
  ],
  aciklama: `Kenarlar 2 katına çıkarsa alan 2 · 2 = 4 katına çıkar.
Adım 1: Tablet alanı (3x + 2)(2x + 1) = 6x^{2} + 3x + 4x + 2 = 6x^{2} + 7x + 2.
Adım 2: Televizyon alanı tablet alanının 4 katıdır: 24x^{2} + 28x + 8.
Adım 3: Fark: 24x^{2} + 28x + 8 − (6x^{2} + 7x + 2) = 18x^{2} + 21x + 6.
Sağlama: x = 1 için tablet 5 · 3 = 15, televizyon 60; fark 45 ve 18 + 21 + 6 = 45.
Cevap C.`
},
{
  id: "mat-ci-269",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Dört farklı kare biçimli levhanın alanları, santimetrekare cinsinden aşağıdaki ifadelerden biriyle gösterilmiştir (x > 4).
**Hangi levhanın kenar uzunluğu (x − 4) cm'dir?**`,
  gorsel: null,
  secenekler: [`Alanı x^{2} − 8x + 16 olan levha`, `Alanı x^{2} − 8 olan levha`, `Alanı x^{2} + 8x + 16 olan levha`, `Alanı x^{2} + 16 olan levha`],
  dogru: 0,
  hatalar: [
    null,
    `(x − 4)^{2} açılınca x^{2} − 8x + 16 çıkar; x^{2} − 8 ifadesi bir tam kare değildir.`,
    `Bu ifade (x + 4)^{2}'dir; kenarı x + 4 olan levhanın alanıdır.`,
    `x^{2} + 16'da orta terim yoktur; (x − 4)^{2} bu ifadeyi vermez (x^{2} − 8x + 16 verir).`
  ],
  aciklama: `Kenarı (x − 4) olan karenin alanı (x − 4)^{2}'dir; bunu açıp seçeneklerle karşılaştır.
Adım 1: (x − 4)^{2} = x^{2} − 2 · x · 4 + 4^{2}.
Adım 2: = x^{2} − 8x + 16.
Adım 3: Bu ifade ikinci levhanın alanıdır.
Sağlama: x = 5 için (5 − 4)^{2} = 1 ve 25 − 40 + 16 = 1.
Cevap A.`
},
{
  id: "mat-ci-270",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Kenar uzunlukları 502 m ve 498 m olan iki kare biçimli tarla vardır.
**Büyük tarlanın alanı, küçük tarlanın alanından kaç metrekare fazladır?**`,
  gorsel: null,
  secenekler: [`16`, `1004`, `2000`, `4000`],
  dogru: 3,
  hatalar: [
    `Yalnızca kenar farkının karesini aldın: 4^{2} = 16. Alanlar farkı için fark ile toplam çarpılır.`,
    `Kenar farkıyla (4) toplamı (1000) topladın. İkisi çarpılmalıdır.`,
    `Toplamı (1000) 2 ile çarptın; kenar farkı 502 − 498 = 4'tür, 2 değil.`,
    null
  ],
  aciklama: `İki kare farkı: a^{2} − b^{2} = (a − b)(a + b).
Adım 1: Alanlar farkı 502^{2} − 498^{2}'dir.
Adım 2: (502 − 498)(502 + 498) = 4 · 1000.
Adım 3: 4 · 1000 = 4000.
Sağlama: Aynı yöntemle 52^{2} − 48^{2} = 4 · 100 = 400; 2704 − 2304 = 400.
Cevap D.`
},
{
  id: "mat-ci-271",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Dikdörtgen biçimli bir ahşap tahtanın eni (2a + b) cm, boyu (a − b) cm'dir (a > b). Marangoz, bu tahtanın alanına eni a cm, boyu b cm olan dikdörtgen biçimli bir parçanın alanını da ekleyerek bir masa yüzeyi hazırlıyor.
**Masa yüzeyinin toplam alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`2a^{2} − ab − b^{2}`, `2a^{2} + ab − b^{2}`, `2a^{2} + b^{2}`, `2a^{2} − b^{2}`],
  dogru: 3,
  hatalar: [
    `Eklenen parçanın alanını (ab) katmadın; bu yalnızca tahtanın alanıdır.`,
    `ab terimini iki kez ekledin (−ab + 2ab). Ek parça bir kez eklenir.`,
    `(−b) · b çarpımını +b^{2} yazdın; eksi ile artının çarpımı −b^{2}'dir.`,
    null
  ],
  aciklama: `Toplam alan = tahtanın alanı + eklenen parçanın alanı.
Adım 1: (2a + b)(a − b) = 2a^{2} − 2ab + ab − b^{2} = 2a^{2} − ab − b^{2}.
Adım 2: Eklenen parçanın alanı a · b = ab.
Adım 3: Toplam: 2a^{2} − ab − b^{2} + ab = 2a^{2} − b^{2}.
Sağlama: a = 2, b = 1 için (5)(1) + 2 = 7 ve 8 − 1 = 7.
Cevap D.`
},
{
  id: "mat-ci-272",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki ifadelerden hangisi, katsayıları tam sayı olan bir cebirsel ifadenin karesine eşittir?**`,
  gorsel: null,
  secenekler: [`9x^{2} − 12x + 4`, `9x^{2} − 6x + 4`, `9x^{2} + 12x − 4`, `9x^{2} − 12x + 16`],
  dogru: 0,
  hatalar: [
    null,
    `Ortadaki terim 2 · 3x · 2 = 12x olmalıdır; 6x değil.`,
    `Son terim eksi olamaz; kareler her zaman pozitiftir.`,
    `Son terim 16 olunca köklerin çarpımı 3x · 4'tür ve ortadaki terim 24x olmalıdır; 12x değil.`
  ],
  aciklama: `Tam kare: ilk ve son terim birer kare, ortadaki terim köklerin çarpımının 2 katıdır (işaret önemli değildir).
Adım 1: 9x^{2} = (3x)^{2} ve 4 = 2^{2}; ortadaki terim 2 · 3x · 2 = 12x olmalı.
Adım 2: 9x^{2} − 12x + 4 = (3x − 2)^{2}.
Adım 3: Diğer seçeneklerde orta terim ya da son terim uymuyor.
Sağlama: (3x − 2)^{2} = 9x^{2} − 12x + 4.
Cevap A.`
},
{
  id: "mat-ci-273",
  kazanim: "M.8.2.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Kenar uzunluğu 3x cm olan kare biçimli bir satranç tahtası, her kenarı 2 cm kısaltılarak daha küçük bir kare tahta hâline getiriliyor (x > 1).
**Tahtanın alanı kaç santimetrekare azalmıştır?**`,
  gorsel: null,
  secenekler: [`6x − 4`, `−12x + 4`, `12x + 4`, `12x − 4`],
  dogru: 3,
  hatalar: [
    `Yeni karenin ortadaki terimini 2 · 3x · 2 yerine 3x · 2 = 6x aldın (iki katı unutuldu).`,
    `Çıkarmayı ters yaptın: yeni alan − eski alan. Azalma, eskiden yeniyi çıkararak bulunur.`,
    `(3x − 2)^{2} açılımında son terimi −4 aldın; (−2)^{2} = +4'tür.`,
    null
  ],
  aciklama: `Azalma = eski alan − yeni alan.
Adım 1: Eski alan (3x)^{2} = 9x^{2}.
Adım 2: Yeni alan (3x − 2)^{2} = 9x^{2} − 12x + 4.
Adım 3: Azalma 9x^{2} − (9x^{2} − 12x + 4) = 9x^{2} − 9x^{2} + 12x − 4 = 12x − 4.
Sağlama: x = 2 için 6 cm kenar 4 cm olur; 36 − 16 = 20 ve 12 · 2 − 4 = 20.
Cevap D.`
},
{
  id: "mat-ci-274",
  kazanim: "M.8.2.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Bir mağazanın bir üründen elde ettiği gelir (2x − 3)(x + 5) TL ifadesiyle gösterilmiştir. Bu çarpım yapılıp sadeleştirildiğinde elde edilen ifadenin bütün terimlerinin katsayıları toplanıyor.
**Bu toplam kaçtır?**`,
  gorsel: null,
  secenekler: [`−13`, `−6`, `0`, `24`],
  dogru: 1,
  hatalar: [
    `Ortadaki terimleri (10x ve −3x) hesaba katmadın; yalnızca 2x^{2} − 15 yazıp 2 − 15 aldın.`,
    null,
    `−3 · x çarpımını +3x aldın: 2x^{2} + 13x − 15 olur ve katsayılar toplamı 0 çıkar.`,
    `(−3) · 5 çarpımını +15 aldın; eksi ile artının çarpımı −15'tir.`
  ],
  aciklama: `Adım 1: (2x − 3)(x + 5) = 2x^{2} + 10x − 3x − 15 = 2x^{2} + 7x − 15.
Adım 2: Katsayılar 2, 7 ve −15'tir (sabit terim de katsayıdır); toplam 2 + 7 − 15 = −6.
Kısa yol: Katsayılar toplamı, x = 1 yazılarak bulunur: (2 − 3)(1 + 5) = −6.
Sağlama: İki yöntem de −6 verir.
Cevap B.`
},
{
  id: "mat-ci-275",
  kazanim: "M.8.2.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Kenarı 3 cm olan kare biçimli bir kartonun tam ortasından, kenarları kartonun kenarlarına paralel ve kenarı x cm olan kare biçimli bir parça şekildeki gibi kesilip çıkarılmıştır (0 < x < 3).
**Kalan parçanın alanını gösteren ifadenin çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 320 260"><path d="M60 40h200v200h-200z M115 95h90v90h-90z" fill="var(--dolgu)" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/><text x="160" y="30" text-anchor="middle" font-size="16" fill="currentColor">3 cm</text><text x="160" y="146" text-anchor="middle" font-size="16" fill="currentColor">x cm</text></svg>`,
  secenekler: [`(x − 3)(x + 3)`, `(3 + x)^{2}`, `(3 − x)^{2}`, `(3 − x)(3 + x)`],
  dogru: 3,
  hatalar: [
    `Bu çarpım x^{2} − 9 eder ve negatiftir; kalan alan 9 − x^{2}'dir.`,
    `Tam kare yazdın; (3 + x)^{2} = 9 + 6x + x^{2} eder. Ortada terim yoktur, bu kare farkıdır.`,
    `Tam kare yazdın; (3 − x)^{2} = 9 − 6x + x^{2} eder. Ortada terim yoktur, bu kare farkıdır.`,
    null
  ],
  aciklama: `Kalan alan = büyük karenin alanı − çıkarılan karenin alanı.
Adım 1: Kalan alan 3^{2} − x^{2} = 9 − x^{2}.
Adım 2: İki kare farkı: a^{2} − b^{2} = (a − b)(a + b), burada a = 3, b = x.
Adım 3: 9 − x^{2} = (3 − x)(3 + x). Her iki çarpan da pozitiftir (0 < x < 3).
Sağlama: x = 1 için 9 − 1 = 8 ve (2)(4) = 8.
Cevap D.`
}
);
