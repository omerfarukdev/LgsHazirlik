// Matematik — Cebirsel İfadeler ve Özdeşlikler | 6. dosya
// Havuz eki (kademe 0): mat-ci-016…075
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cebirsel-ifadeler"] = window.LGS_BANK["cebirsel-ifadeler"] || []).push(
{
  id: "mat-ci-016",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 1,
  soru: `**−6y^{2} + 4y − 11 ifadesinde y teriminin katsayısı kaçtır?**`,
  gorsel: null,
  secenekler: [`−11`, `−6`, `4`, `6`],
  dogru: 2,
  hatalar: [
    `Sabit terimi aldın: −11 değişken içermez. Katsayı, y'nin önündeki sayıdır.`,
    `y^{2} teriminin katsayısını aldın. y^{2} ile y farklı terimlerdir.`,
    null,
    `y^{2} teriminin katsayısını aldın ve işaretini de yok saydın.`
  ],
  aciklama: `Katsayı, bir terimdeki sayı çarpanıdır; terimin işareti de ona aittir.
Adım 1: İfadenin terimleri −6y^{2}, 4y ve −11'dir.
Adım 2: Değişken kısmı y olan terim 4y'dir; y'nin önündeki sayı 4'tür.
Sık yapılan hata: y^{2} teriminin katsayısıyla y teriminin katsayısını karıştırmak.
Cevap C.`
},
{
  id: "mat-ci-017",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 1,
  soru: `**k − 5k^{2} + 2 ifadesinde k teriminin katsayısı kaçtır?**`,
  gorsel: null,
  secenekler: [`−5`, `1`, `2`, `5`],
  dogru: 1,
  hatalar: [
    `k^{2} teriminin katsayısını aldın. O terim k^{2}'dir, k değil.`,
    null,
    `Sabit terimi katsayı sandın. Sabit terim k içermez.`,
    `k^{2} teriminin katsayısını aldın ve işaretini yok saydın.`
  ],
  aciklama: `Harfin önünde sayı yazmıyorsa katsayı 1'dir (k = 1 · k).
Adım 1: İfadenin terimleri k, −5k^{2} ve 2'dir.
Adım 2: Değişken kısmı k olan terim, başında sayı bulunmayan k'dir; katsayısı 1'dir.
Sık yapılan hata: Sayısı yazılmamış terimin katsayısını 0 ya da yok saymak.
Cevap B.`
},
{
  id: "mat-ci-018",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdakilerden hangisi 5ab^{2} terimiyle benzer terimdir?**`,
  gorsel: null,
  secenekler: [`7a^{2}b`, `2ab`, `−4ab^{2}`, `6a^{2}b^{2}`],
  dogru: 2,
  hatalar: [
    `Harfler aynı ama üsler yer değiştirmiş: a^{2}b ile ab^{2} aynı türden değildir.`,
    `Üsleri yok saydın: ab ile ab^{2}'nin değişken kısımları farklıdır.`,
    null,
    `Üsleri toplayıp birleştirdin: a^{2}b^{2} ile ab^{2}'nin değişken kısımları farklıdır.`
  ],
  aciklama: `Benzer terimler, harfleri ve bu harflerin üsleri aynı olan terimlerdir; yalnızca katsayıları farklı olabilir.
Adım 1: 5ab^{2} teriminin değişken kısmı ab^{2}'dir (a birinci, b ikinci kuvvet).
Adım 2: −4ab^{2} teriminin değişken kısmı da ab^{2}'dir; yalnızca katsayı farklıdır.
Sık yapılan hata: a^{2}b ile ab^{2}'yi aynı sanmak; üslerin hangi harfte durduğuna bak.
Cevap C.`
},
{
  id: "mat-ci-019",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 1,
  soru: `**4k(2k + 7) çarpımı aşağıdakilerden hangisine eşittir?**`,
  gorsel: null,
  secenekler: [`8k^{2} + 28k`, `8k^{2} + 28`, `6k^{2} + 28k`, `8k^{2} + 11k`],
  dogru: 0,
  hatalar: [
    null,
    `4k ile 7'yi çarparken k'yi unuttun: 4k · 7 = 28k olmalı.`,
    `Katsayıları çarpmak yerine topladın: 4k · 2k = 8k^{2}'dir, 6k^{2} değil.`,
    `İkinci terimde çarpma yerine toplama yaptın: 4k + 7k = 11k değil, 4k · 7 = 28k.`
  ],
  aciklama: `Dağılma: dışarıdaki terim parantezdeki her terimle ayrı ayrı çarpılır.
Adım 1: 4k · 2k = 8k^{2}.
Adım 2: 4k · 7 = 28k.
Adım 3: Sonuç 8k^{2} + 28k olur.
Sağlama: k = 1 için 4 · 9 = 36 ve 8 + 28 = 36.
Cevap A.`
},
{
  id: "mat-ci-020",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 1,
  soru: `**(m − 2)(m + 6) çarpımı aşağıdakilerden hangisine eşittir?**`,
  gorsel: null,
  secenekler: [`m^{2} − 12`, `m^{2} + 8m − 12`, `m^{2} + 4m + 12`, `m^{2} + 4m − 12`],
  dogru: 3,
  hatalar: [
    `Ortadaki iki çarpımı (6m ve −2m) unuttun; dört çarpımın hepsi yazılmalı.`,
    `−2m'yi +2m aldın: 6m − 2m = 4m olmalı, 8m değil.`,
    `Son terimde işaret hatası: (−2) · 6 = −12'dir, +12 değil.`,
    null
  ],
  aciklama: `İki terimli ifadelerin çarpımında ilk paranteze ait her terim, ikinci parantezdeki her terimle çarpılır.
Adım 1: m · m = m^{2}, m · 6 = 6m, (−2) · m = −2m, (−2) · 6 = −12.
Adım 2: Benzer terimleri birleştir: 6m − 2m = 4m.
Adım 3: Sonuç m^{2} + 4m − 12.
Sağlama: m = 1 için (−1) · 7 = −7 ve 1 + 4 − 12 = −7.
Cevap D.`
},
{
  id: "mat-ci-021",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 1,
  soru: `**Kenar uzunlukları 3x cm ve (x + 2) cm olan dikdörtgen biçimli bir etiketin alanı kaç cm^{2}'dir?**`,
  gorsel: null,
  secenekler: [`3x^{2} + 2`, `3x^{2} + 6x`, `3x^{2} + 6`, `3x^{2} + 5x`],
  dogru: 1,
  hatalar: [
    `3x ile yalnızca x'i çarptın; 2 ile de çarpılması gerekir: 3x · 2 = 6x.`,
    null,
    `3x · 2 işleminde x'i unuttun: sonuç 6x olur, 6 değil.`,
    `İkinci terimde çarpma yerine toplama yaptın: 3x + 2x = 5x değil, 3x · 2 = 6x.`
  ],
  aciklama: `Dikdörtgenin alanı kenar uzunluklarının çarpımıdır.
Adım 1: Alan = 3x · (x + 2).
Adım 2: 3x · x = 3x^{2} ve 3x · 2 = 6x.
Adım 3: Alan 3x^{2} + 6x cm^{2} olur.
Sağlama: x = 1 için kenarlar 3 ve 3, alan 9; 3 + 6 = 9.
Cevap B.`
},
{
  id: "mat-ci-022",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 1,
  soru: `**(a + b)^{2} ifadesi açıldığında ortadaki terim aşağıdakilerden hangisi olur?**`,
  gorsel: null,
  secenekler: [`ab`, `2a + 2b`, `a^{2}b^{2}`, `2ab`],
  dogru: 3,
  hatalar: [
    `Çarpımı bir kez aldın; ortadaki terim iki kat çarpımdır: (a + b)(a + b) açılımında ab iki kez çıkar.`,
    `Toplam alıp 2 ile çarptın; ortadaki terim a ile b'nin çarpımının 2 katıdır.`,
    `Karelerin çarpımını yazdın; a^{2} ve b^{2} baştaki ve sondaki terimlerdir.`,
    null
  ],
  aciklama: `Tam kare açılımı: (a + b)^{2} = a^{2} + 2ab + b^{2}.
Adım 1: (a + b)(a + b) çarpımında dört çarpım oluşur: a · a, a · b, b · a ve b · b.
Adım 2: a · b ile b · a benzer terimlerdir; toplamları ab + ab = 2ab olur.
Sık yapılan hata: Ortadaki 2ab terimini hiç yazmamak (a^{2} + b^{2} demek).
Cevap D.`
},
{
  id: "mat-ci-023",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 1,
  soru: `**Kenar uzunluğu (x − 4) cm olan kare biçimli bir kartonun alanı kaç cm^{2}'dir?**`,
  gorsel: null,
  secenekler: [`x^{2} − 8x + 16`, `x^{2} − 8x − 16`, `x^{2} − 16`, `x^{2} + 16`],
  dogru: 0,
  hatalar: [
    null,
    `Son terimin işareti yanlış: (−4)^{2} = +16'dır.`,
    `Fark karesini kare farkı sandın: (x − 4)^{2} ≠ x^{2} − 16; ortadaki −8x terimi var.`,
    `Ortadaki terimi unuttun ve işaretini atladın; (x − 4)^{2} üç terimlidir.`
  ],
  aciklama: `Karenin alanı = kenar · kenar = (x − 4)^{2}.
Adım 1: Fark karesi: (a − b)^{2} = a^{2} − 2ab + b^{2}; burada a = x, b = 4.
Adım 2: x^{2} − 2 · x · 4 + 4^{2} = x^{2} − 8x + 16.
Sağlama: x = 5 için kenar 1, alan 1; 25 − 40 + 16 = 1.
Cevap A.`
},
{
  id: "mat-ci-024",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 1,
  soru: `(x + 4)^{2} = x^{2} + 8x + 16 eşitliği bir özdeşliktir.
**Buna göre eşitliğin her iki tarafının x = 3 için aldığı değer kaçtır?**`,
  gorsel: null,
  secenekler: [`14`, `25`, `33`, `49`],
  dogru: 3,
  hatalar: [
    `(3 + 4) değerini 2 ile çarptın; kare almak iki ile çarpmak değildir.`,
    `3^{2} + 4^{2} = 25 buldun; (a + b)^{2} = a^{2} + b^{2} değildir, ortadaki terim eksik kaldı.`,
    `Ortadaki terimde 8x yerine 8 yazdın; x = 3 yazınca 8x = 24 olur.`,
    null
  ],
  aciklama: `Özdeşlik, harfe hangi sayıyı verirsen ver doğru olan eşitliktir; yani iki taraf aynı değeri verir.
Adım 1: Sol taraf: (3 + 4)^{2} = 7^{2} = 49.
Adım 2: Sağ taraf: 9 + 8 · 3 + 16 = 9 + 24 + 16 = 49.
Sağlama: İki taraf da 49 çıktı, özdeşlik doğrulandı.
Cevap D.`
},
{
  id: "mat-ci-025",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 1,
  soru: `**7p^{2} − 14p ifadesi, ortak çarpanların tamamı parantez dışına alınarak yazılırsa aşağıdakilerden hangisi elde edilir?**`,
  gorsel: null,
  secenekler: [`p(7p − 14)`, `7p(p − 2)`, `7(p^{2} − 2p)`, `7p(p − 14)`],
  dogru: 1,
  hatalar: [
    `Yalnızca harfi dışarı aldın; 7 de ortak çarpandır.`,
    null,
    `Yalnızca sayıyı dışarı aldın; p de ortak çarpandır.`,
    `−14p'yi 7p'ye bölmedin: −14p ÷ 7p = −2 olmalı, −14 değil.`
  ],
  aciklama: `Ortak çarpan parantezi: tüm terimleri bölen en büyük sayı ve ortak harfler dışarı alınır.
Adım 1: 7 ile 14'ün en büyük ortak çarpanı 7; p^{2} ile p'nin ortak çarpanı p. Dışarı 7p alınır.
Adım 2: 7p^{2} ÷ 7p = p ve 14p ÷ 7p = 2; parantezin içi (p − 2) olur.
Sağlama: 7p · p = 7p^{2}, 7p · 2 = 14p; açınca ilk ifade çıkar.
Cevap B.`
},
{
  id: "mat-ci-026",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki ifadelerden hangisi iki kare farkı özdeşliği kullanılarak çarpanlarına ayrılabilir?**`,
  gorsel: null,
  secenekler: [`4n^{2} + 9`, `4n − 9`, `4n^{2} − 9`, `4n^{2} − 6`],
  dogru: 2,
  hatalar: [
    `İki karenin toplamı çarpanlarına ayrılmaz; aralarında eksi olmalı.`,
    `4n bir ifadenin karesi değildir; iki terim de kare olmalı.`,
    null,
    `6 tam kare bir sayı değildir; iki terim de birer karedir diye bakılmalı.`
  ],
  aciklama: `İki kare farkı: a^{2} − b^{2} = (a − b)(a + b). İfade iki terimli olmalı, iki terim de birer kare olmalı ve aralarında eksi bulunmalı.
Adım 1: 4n^{2} = (2n)^{2} ve 9 = 3^{2} olduğundan 4n^{2} − 9 = (2n)^{2} − 3^{2} olur.
Adım 2: Çarpanlarına ayrılmış biçimi (2n − 3)(2n + 3).
Sık yapılan hata: Artı işaretli ifadeye de kare farkı uygulamaya çalışmak.
Cevap C.`
},
{
  id: "mat-ci-027",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 1,
  soru: `**Aşağıdaki ifadelerden hangisi bir ifadenin tam karesine eşittir?**`,
  gorsel: null,
  secenekler: [`y^{2} + 8y + 16`, `y^{2} + 4y + 16`, `y^{2} + 16y + 16`, `y^{2} + 8y + 4`],
  dogru: 0,
  hatalar: [
    null,
    `Son terim 16 = 4^{2} ise ortadaki terim 2 · y · 4 = 8y olmalı, 4y değil.`,
    `Ortadaki terime 16'yı yazdın; ortadaki terim köklerin çarpımının 2 katıdır: 2 · y · 4 = 8y.`,
    `Son terim 4 = 2^{2} ise ortadaki terim 2 · y · 2 = 4y olmalı; 8y ile uyuşmaz.`
  ],
  aciklama: `Tam kare: a^{2} + 2ab + b^{2} = (a + b)^{2}. İlk ve son terim birer kare, ortadaki terim köklerin çarpımının 2 katı olmalı.
Adım 1: y^{2} + 8y + 16'da ilk terim y^{2}, son terim 4^{2}.
Adım 2: Ortadaki terim 2 · y · 4 = 8y olduğundan ifade (y + 4)^{2}'dir.
Sağlama: y = 1 için 1 + 8 + 16 = 25 = 5^{2}.
Cevap A.`
},
{
  id: "mat-ci-028",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir sinemada tam bilet x TL, öğrenci bileti ise tam biletten 6 TL ucuzdur. Bir okul grubu 5 tam bilet ve 8 öğrenci bileti almıştır.
**Grubun ödediği toplam tutarı gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`13x − 6`, `13x + 48`, `40x − 48`, `13x − 48`],
  dogru: 3,
  hatalar: [
    `6 TL indirimini yalnızca bir bilete uyguladın; 8 öğrenci bileti olduğundan 8 · 6 = 48 TL düşmeli.`,
    `Öğrenci biletini x + 6 saydın; ucuz olduğu için x − 6 olmalı.`,
    `Bilet sayılarını toplamak yerine çarptın; 5x + 8x = 13x olur.`,
    null
  ],
  aciklama: `Öğrenci biletinin fiyatı x − 6 TL'dir. Toplam tutar = adet × birim fiyat toplamıdır.
Adım 1: Tam biletler: 5 · x = 5x.
Adım 2: Öğrenci biletleri: 8 · (x − 6) = 8x − 48.
Adım 3: Toplam: 5x + 8x − 48 = 13x − 48.
Sağlama: x = 10 için 5 · 10 + 8 · 4 = 82 ve 130 − 48 = 82.
Cevap D.`
},
{
  id: "mat-ci-029",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `**4a^{2} + 3a − 2a^{2} + 5a − 7 ifadesinin en sade biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`10a^{2} − 7`, `2a^{2} + 8a − 7`, `6a^{2} + 8a − 7`, `2a^{2} − 2a − 7`],
  dogru: 1,
  hatalar: [
    `Bütün a'lı terimleri benzer sanıp katsayıları topladın; a^{2} ile a benzer terim değildir.`,
    null,
    `−2a^{2} terimini +2a^{2} gibi topladın; eksi işareti terime aittir: 4a^{2} − 2a^{2} = 2a^{2}.`,
    `3a ile 5a'yı çıkardın; ikisi de pozitiftir ve 3a + 5a = 8a olur.`
  ],
  aciklama: `Yalnızca benzer terimler (harf ve üsleri aynı olanlar) birleştirilir.
Adım 1: a^{2} içerenler: 4a^{2} − 2a^{2} = 2a^{2}.
Adım 2: a içerenler: 3a + 5a = 8a.
Adım 3: Sabit terim −7 tek başına kalır.
Sağlama: a = 1 için 4 + 3 − 2 + 5 − 7 = 3 ve 2 + 8 − 7 = 3.
Cevap B.`
},
{
  id: "mat-ci-030",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Şekilde dikdörtgen biçimli bir bilgisayar ekranının kenar uzunlukları cm cinsinden verilmiştir. Ekranın dış kenarı boyunca ince bir koruyucu bant yapıştırılacaktır.
**Gereken bandın uzunluğunu gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: "<svg viewBox=\"0 0 400 250\"><rect x=\"100\" y=\"40\" width=\"240\" height=\"176\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"30\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3a</text><text x=\"92\" y=\"134\" text-anchor=\"end\" font-size=\"16\" fill=\"currentColor\">2a + 1</text><text x=\"220\" y=\"134\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">ekran</text><text x=\"220\" y=\"240\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Uzunluklar cm cinsindendir.</text></svg>",
  secenekler: ["5a + 1","6a^{2} + 3a","10a + 2","8a + 1"],
  dogru: 2,
  hatalar: ["Yarım çevreyi buldun: iki komşu kenarın toplamı çevrenin yarısıdır, 2 ile çarpmalısın.","Alanı buldun: 3a · (2a + 1) alandır; bant dış kenar boyunca gittiği için çevre gerekir.",null,"Dört kenardan birini eksik topladın: 3a + 3a + 2a + 1 yalnızca üç kenardır."],
  aciklama: "Bant ekranın dış kenarı boyunca gideceğinden çevre uzunluğu aranır. Dikdörtgenin çevresi, komşu iki kenarın toplamının 2 katıdır.\nAdım 1: Komşu kenarların toplamı: 3a + (2a + 1) = 5a + 1.\nAdım 2: Çevre: 2 · (5a + 1) = 10a + 2.\nSağlama: a = 1 için kenarlar 3 ve 3; çevre 12 ve 10 + 2 = 12.\nCevap C."
},
{
  id: "mat-ci-031",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir otoparkta ilk saatin ücreti a TL, sonraki her saatin ücreti ise ilk saatten 2 TL azdır. Bir araç bu otoparkta tam 4 saat kalmıştır.
**Aracın ödeyeceği toplam ücreti gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`4a − 6`, `4a − 2`, `4a − 8`, `3a − 6`],
  dogru: 0,
  hatalar: [
    null,
    `2 TL indirimi yalnızca bir saate uyguladın; indirim ilk saatten sonraki 3 saatin her biri için geçerlidir.`,
    `İlk saati de indirimli saydın; ilk saat tam a TL'dir.`,
    `İlk saatin ücretini toplama katmadın; yalnızca sonraki 3 saati hesapladın.`
  ],
  aciklama: `İlk saat: a TL. Sonraki 3 saatin her biri: a − 2 TL.
Adım 1: Toplam = a + 3 · (a − 2).
Adım 2: 3 · (a − 2) = 3a − 6.
Adım 3: a + 3a − 6 = 4a − 6.
Sağlama: a = 10 için 10 + 8 + 8 + 8 = 34 ve 40 − 6 = 34.
Cevap A.`
},
{
  id: "mat-ci-032",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir yayınevi, kapağı dikdörtgen biçimli bir kitap basacaktır. Kapağın kısa kenarı (x − 3) cm, uzun kenarı (2x + 1) cm'dir.
**Kapağın alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`2x^{2} − 3`, `2x^{2} − 5x − 3`, `2x^{2} − 5x + 3`, `2x^{2} + 7x + 3`],
  dogru: 1,
  hatalar: [
    `Ortadaki iki çarpımı (x · 1 ve −3 · 2x) yazmadın; dört çarpımın hepsi alınmalı.`,
    null,
    `Son terimin işareti yanlış: (−3) · 1 = −3'tür.`,
    `−3'ü +3 aldın; bu yüzden hem ortadaki terim hem son terim hatalı çıktı.`
  ],
  aciklama: `Dikdörtgenin alanı, kenar uzunluklarının çarpımıdır.
Adım 1: (x − 3)(2x + 1) = x · 2x + x · 1 + (−3) · 2x + (−3) · 1.
Adım 2: Çarpımlar: 2x^{2} + x − 6x − 3.
Adım 3: x − 6x = −5x olduğundan alan 2x^{2} − 5x − 3 olur.
Sağlama: x = 4 için kenarlar 1 ve 9, alan 9; 32 − 20 − 3 = 9.
Cevap B.`
},
{
  id: "mat-ci-033",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Şekilde, yan yana duran iki dikdörtgenden oluşan bir sınıf panosunun ölçüleri cm cinsinden verilmiştir.
**Panonun tamamının alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 400 280"><rect x="70" y="40" width="168" height="196" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="238" y="40" width="70" height="196" fill="none" stroke="currentColor" stroke-width="2"/><text x="154" y="30" text-anchor="middle" font-size="16" fill="currentColor">x</text><text x="273" y="30" text-anchor="middle" font-size="16" fill="currentColor">5</text><text x="62" y="144" text-anchor="end" font-size="16" fill="currentColor">x + 2</text></svg>`,
  secenekler: [`x^{2} + 10`, `x^{2} + 2x + 5`, `x^{2} + 5x + 10`, `x^{2} + 7x + 10`],
  dogru: 3,
  hatalar: [
    `Yalnızca ilk ve son çarpımı yazdın; x · 2 ve 5 · x terimleri eksik kaldı.`,
    `Sağdaki parçayı 5 · (x + 2) yerine yalnızca 5 aldın; 5 ile x + 2'nin tamamı çarpılmalı.`,
    `Soldaki parçanın alanında x · (x + 2) yerine yalnızca x^{2} aldın; 2x terimi eksik kaldı.`,
    null
  ],
  aciklama: `Panonun yüksekliği (x + 2) cm, genişliği x ve 5'in toplamı yani (x + 5) cm'dir.
Adım 1: Soldaki parça: x · (x + 2) = x^{2} + 2x.
Adım 2: Sağdaki parça: 5 · (x + 2) = 5x + 10.
Adım 3: Toplam: x^{2} + 2x + 5x + 10 = x^{2} + 7x + 10.
Sağlama: (x + 5)(x + 2) çarpımı da aynı sonucu verir; x = 1 için 6 · 3 = 18 ve 1 + 7 + 10 = 18.
Cevap D.`
},
{
  id: "mat-ci-034",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki çarpma işlemlerinden hangisinin sonucu doğru yazılmıştır?**`,
  gorsel: null,
  secenekler: [`(x + 4)(x − 1) = x^{2} + 3x − 4`, `(x − 5)(x + 2) = x^{2} − 3x + 10`, `(x − 2)(x − 6) = x^{2} − 8x − 12`, `(3x + 1)(x + 2) = 3x^{2} + 7x + 1`],
  dogru: 0,
  hatalar: [
    null,
    `Son terim (−5) · 2 = −10 olmalı, +10 değil.`,
    `Son terim (−2) · (−6) = +12 olmalı, −12 değil.`,
    `Son terim 1 · 2 = 2 olmalı, 1 değil.`
  ],
  aciklama: `Her seçenekte dört çarpımı yapıp benzer terimleri birleştir.
Adım 1: A seçeneği: x^{2} − x + 4x − 4 = x^{2} + 3x − 4. Doğru.
Adım 2: B: x^{2} + 2x − 5x − 10 = x^{2} − 3x − 10. C: x^{2} − 6x − 2x + 12 = x^{2} − 8x + 12. D: 3x^{2} + 6x + x + 2 = 3x^{2} + 7x + 2. Üçü de son terimde hatalı.
Sağlama: x = 1 için A'da 5 · 0 = 0 ve 1 + 3 − 4 = 0.
Cevap A.`
},
{
  id: "mat-ci-035",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `**3x(x + 2) − 2(x^{2} − 5) ifadesinin en sade biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`x^{2} + 6x − 10`, `x^{2} + 12`, `x^{2} + 6x + 10`, `5x^{2} + 6x − 10`],
  dogru: 2,
  hatalar: [
    `Eksi işaretini yalnızca x^{2}'ye dağıttın; −2 · (−5) = +10 olmalı.`,
    `3x · 2 = 6x işleminde 3x'i unuttun; bu yüzden x'li terim kayboldu.`,
    null,
    `−2 ile çarpmayı +2 gibi yaptın ve x^{2} terimlerini toplayıp son terimi de ters yazdın.`
  ],
  aciklama: `Önce her çarpımı aç, sonra benzer terimleri birleştir; eksi işareti parantezin her terimini etkiler.
Adım 1: 3x(x + 2) = 3x^{2} + 6x.
Adım 2: −2(x^{2} − 5) = −2x^{2} + 10.
Adım 3: 3x^{2} − 2x^{2} = x^{2}; sonuç x^{2} + 6x + 10.
Sağlama: x = 1 için 3 · 3 − 2 · (−4) = 9 + 8 = 17 ve 1 + 6 + 10 = 17.
Cevap C.`
},
{
  id: "mat-ci-036",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir parti malzemeleri dükkânından (2k + 3) torba balon alınmıştır. Her torbada (k − 1) balon vardır. Ayrıca 4 tane tek balon da hediye edilmiştir.
**Alınan toplam balon sayısını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`2k^{2} − k + 1`, `2k^{2} + k − 3`, `2k^{2} + k + 1`, `2k^{2} + 5k + 1`],
  dogru: 2,
  hatalar: [
    `Ortadaki terimde 3k − 2k = +k olmalı; işareti ters aldın.`,
    `Hediye edilen 4 balonu eklemedin.`,
    null,
    `(−1)'i +1 gibi çarptın; ortadaki terim 2k + 3k = 5k çıktı. Doğrusu −2k + 3k = k.`
  ],
  aciklama: `Torbalardaki balonlar: (2k + 3)(k − 1); bunlara 4 hediye balon eklenir.
Adım 1: (2k + 3)(k − 1) = 2k^{2} − 2k + 3k − 3 = 2k^{2} + k − 3.
Adım 2: 4 balon eklenir: 2k^{2} + k − 3 + 4 = 2k^{2} + k + 1.
Sağlama: k = 2 için 7 torba, torbada 1 balon, 7 + 4 = 11; 8 + 2 + 1 = 11.
Cevap C.`
},
{
  id: "mat-ci-037",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki eşitliklerden hangisi bir özdeşliktir?**`,
  gorsel: null,
  secenekler: [`(m + 6)^{2} = m^{2} + 36`, `(2m − 3)^{2} = 4m^{2} − 12m + 9`, `(m − 4)^{2} = m^{2} − 8m − 16`, `(3m + 1)^{2} = 9m^{2} + 3m + 1`],
  dogru: 1,
  hatalar: [
    `Ortadaki terim eksik: (m + 6)^{2} = m^{2} + 12m + 36.`,
    null,
    `Son terim (−4)^{2} = +16 olmalı.`,
    `Ortadaki terim 2 · 3m · 1 = 6m olmalı, 3m değil.`
  ],
  aciklama: `Özdeşlik, harfe hangi sayı verilirse verilsin doğru olan eşitliktir. Tam kare açılımını her seçenekte kontrol et.
Adım 1: (2m − 3)^{2} = (2m)^{2} − 2 · 2m · 3 + 3^{2} = 4m^{2} − 12m + 9. Seçenek B doğru.
Adım 2: Diğerleri: (m + 6)^{2} = m^{2} + 12m + 36; (m − 4)^{2} = m^{2} − 8m + 16; (3m + 1)^{2} = 9m^{2} + 6m + 1.
Sağlama: m = 1 için B'nin iki tarafı da 1 eder; A'da 49 ile 37 çıkar, eşit değildir.
Cevap B.`
},
{
  id: "mat-ci-038",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Kenarı 79 cm olan kare biçimli bir posterin alanını hesap makinesi kullanmadan bulmak isteyen Aras, 79 sayısını 80 − 1 biçiminde yazıp özdeşlikten yararlanmıştır.
**Posterin alanı kaç cm^{2}'dir?**`,
  gorsel: null,
  secenekler: [`6240`, `6241`, `6399`, `6561`],
  dogru: 1,
  hatalar: [
    `Son terimi (+1) eklemeyi unuttun: 80^{2} − 2 · 80 · 1 = 6240'tır.`,
    null,
    `80^{2} − 1^{2} = 6399 buldun; fark karesi, kare farkı değildir.`,
    `80 + 1 = 81 aldın; 79 = 80 − 1 olduğu için (80 − 1)^{2} gerekir.`
  ],
  aciklama: `Alan = 79^{2} = (80 − 1)^{2}. Fark karesi açılımı: (a − b)^{2} = a^{2} − 2ab + b^{2}.
Adım 1: a = 80, b = 1 alınır.
Adım 2: 80^{2} = 6400, 2 · 80 · 1 = 160, 1^{2} = 1.
Adım 3: 6400 − 160 + 1 = 6241.
Sağlama: 79 · 79 = 79 · 80 − 79 = 6320 − 79 = 6241.
Cevap B.`
},
{
  id: "mat-ci-039",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Dikdörtgen biçimli bir kuponun uzun kenarı m cm, kısa kenarı n cm'dir. Uzun kenar, kısa kenardan 3 cm fazladır ve kuponun alanı 10 cm^{2}'dir.
**Buna göre m^{2} + n^{2} toplamı kaçtır?**`,
  gorsel: null,
  secenekler: [`9`, `19`, `29`, `49`],
  dogru: 2,
  hatalar: [
    `Yalnızca (m − n)^{2} = 9 değerini aldın; açılımdaki −2mn terimini hesaba katmadın.`,
    `Ortadaki terimi 2mn yerine mn aldın: 9 + 10 = 19.`,
    null,
    `Ortadaki terimi 4mn aldın: 9 + 40 = 49. Açılımda 2mn vardır.`
  ],
  aciklama: `m − n = 3 ve m · n = 10 verilmiş. Fark karesi açılımı: (m − n)^{2} = m^{2} − 2mn + n^{2}.
Adım 1: (m − n)^{2} = 3^{2} = 9.
Adım 2: m^{2} + n^{2} = (m − n)^{2} + 2mn = 9 + 2 · 10.
Adım 3: 9 + 20 = 29.
Sağlama: m = 5, n = 2 bu koşulları sağlar (fark 3, çarpım 10) ve 25 + 4 = 29.
Cevap C.`
},
{
  id: "mat-ci-040",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `**(x + 6)^{2} − x^{2} ifadesinin en sade biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`12x + 36`, `36`, `12x`, `x^{2} + 12x + 36`],
  dogru: 0,
  hatalar: [
    null,
    `(x + 6)^{2} = x^{2} + 36 yazdın; ortadaki 12x terimi unutuldu.`,
    `Son terimi (6^{2} = 36) unuttun.`,
    `Açtın ama x^{2}'yi çıkarmayı unuttun; ifadenin sonunda −x^{2} var.`
  ],
  aciklama: `Önce tam kareyi aç, sonra x^{2}'yi çıkar.
Adım 1: (x + 6)^{2} = x^{2} + 12x + 36.
Adım 2: x^{2} + 12x + 36 − x^{2}; x^{2} terimleri birbirini götürür.
Adım 3: Kalan: 12x + 36.
Sağlama: x = 1 için 49 − 1 = 48 ve 12 + 36 = 48.
Cevap A.`
},
{
  id: "mat-ci-041",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğretmen, kenar uzunluğu (x + 4) olan bir kareyi cebir karolarıyla göstermek istiyor. Büyük kare x^{2}, uzun dikdörtgen x ve küçük kare 1 birimi göstermektedir; karolar üst üste gelmeden dizilecektir.
**Bu kareyi oluşturmak için toplam kaç karo gerekir?**`,
  gorsel: null,
  secenekler: [`17`, `21`, `24`, `25`],
  dogru: 3,
  hatalar: [
    `Uzun dikdörtgen karoları saymadın; yalnızca büyük kare ile 16 küçük kareyi aldın.`,
    `Uzun dikdörtgenleri 4 tane aldın; ortadaki terim 2 · 4 · x = 8x olduğundan 8 tane gerekir.`,
    `Büyük kareyi (x^{2}) saymadın; 8 uzun dikdörtgen ve 16 küçük kare var, bir de büyük kare.`,
    null
  ],
  aciklama: `Karo sayıları, (x + 4)^{2} açılımının katsayılarını verir.
Adım 1: (x + 4)^{2} = x^{2} + 8x + 16.
Adım 2: 1 büyük kare, 8 uzun dikdörtgen ve 16 küçük kare gerekir.
Adım 3: Toplam 1 + 8 + 16 = 25 karo.
Sık yapılan hata: Ortadaki 2ab terimini yarısı kadar (4 karo) almak.
Cevap D.`
},
{
  id: "mat-ci-042",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `**12a^{2}b − 18ab ifadesi, ortak çarpanların tamamı parantez dışına alınarak yazılırsa aşağıdakilerden hangisi elde edilir?**`,
  gorsel: null,
  secenekler: [`6(2a^{2}b − 3ab)`, `3ab(4a − 6)`, `6ab(2a − 3)`, `6b(2a^{2} − 3a)`],
  dogru: 2,
  hatalar: [
    `Yalnızca sayıyı dışarı aldın; a ve b harfleri de iki terimde ortaktır.`,
    `12 ile 18'in en büyük ortak çarpanı 6'dır; 3 aldığın için parantez içinde hâlâ ortak çarpan (2) kaldı.`,
    null,
    `a harfini dışarı almadın; iki terimde de a vardır (a^{2} ve a).`
  ],
  aciklama: `Ortak çarpan olarak sayıların en büyük ortak çarpanı ve her iki terimde bulunan harfler (en küçük üsleriyle) alınır.
Adım 1: 12 ile 18'in en büyük ortak çarpanı 6; her iki terimde a ve b var. Dışarı 6ab alınır.
Adım 2: 12a^{2}b ÷ 6ab = 2a ve 18ab ÷ 6ab = 3. Parantezin içi (2a − 3).
Sağlama: 6ab · 2a = 12a^{2}b ve 6ab · 3 = 18ab.
Cevap C.`
},
{
  id: "mat-ci-043",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `**x^{2} + kx + 49 ifadesi bir tam kare ifadedir.**
**Buna göre k pozitif sayısı kaçtır?**`,
  gorsel: null,
  secenekler: [`7`, `14`, `28`, `49`],
  dogru: 1,
  hatalar: [
    `7, son terimin kökü; ortadaki terim köklerin çarpımının 2 katıdır.`,
    null,
    `Ortadaki terimi 4 · 7 aldın; tam karede çarpım 2 ile çarpılır: 2 · 1 · 7 = 14.`,
    `Son terimin kendisini ortaya yazdın; ortadaki terim 49x değildir.`
  ],
  aciklama: `Tam kare ifade: (x + b)^{2} = x^{2} + 2bx + b^{2}.
Adım 1: Son terim 49 = 7^{2} olduğundan b = 7 olmalıdır.
Adım 2: Ortadaki terim 2 · x · 7 = 14x olur, yani k = 14.
Sağlama: (x + 7)^{2} açılırsa x^{2} + 14x + 49 çıkar.
Cevap B.`
},
{
  id: "mat-ci-044",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kırtasiye, bir defteri 83 TL'den satmaktadır. Cumartesi günü 27, pazar günü 43 defter satılmıştır. Kasiyer, iki günün toplam hasılatını 83 · 27 + 83 · 43 işlemiyle göstermiştir.
**Bu işlem ortak çarpan parantezine alınarak yapılırsa toplam hasılat kaç TL olur?**`,
  gorsel: null,
  secenekler: [`1244`, `2284`, `3569`, `5810`],
  dogru: 3,
  hatalar: [
    `83 + 27 · 43 hesapladın; 83 iki terimin de çarpanıdır, yalnızca birine yazamazsın.`,
    `83 · 27 + 43 hesapladın; ikinci çarpımdaki 83'ü unuttun.`,
    `Yalnızca pazar günkü hasılatı (83 · 43) buldun; cumartesi eksik.`,
    null
  ],
  aciklama: `83 her iki çarpımda da ortak çarpandır: 83 · 27 + 83 · 43 = 83 · (27 + 43).
Adım 1: Parantez içini topla: 27 + 43 = 70.
Adım 2: 83 · 70 = 5810.
Sağlama: 2241 + 3569 = 5810.
Cevap D.`
},
{
  id: "mat-ci-045",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `**4x^{2} − 12xy + 9y^{2} ifadesinin çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`(2x − 3y)^{2}`, `(2x + 3y)^{2}`, `(4x − 9y)^{2}`, `(2x − 3y)(2x + 3y)`],
  dogru: 0,
  hatalar: [
    null,
    `Ortadaki terim eksi olduğundan parantez içi eksi olmalı: (2x + 3y)^{2} açılırsa +12xy çıkar.`,
    `Katsayıların kökünü almadın; 4x^{2} = (2x)^{2} ve 9y^{2} = (3y)^{2} olduğundan 2x ve 3y gerekir.`,
    `Tam kareyi kare farkı gibi yazdın; bu çarpım açılınca ortadaki terim yok olur (4x^{2} − 9y^{2}).`
  ],
  aciklama: `İlk ve son terimin birer kare olduğunu, ortadaki terimin köklerin çarpımının 2 katı olduğunu kontrol et.
Adım 1: 4x^{2} = (2x)^{2} ve 9y^{2} = (3y)^{2}.
Adım 2: 2 · 2x · 3y = 12xy; ortadaki terim −12xy olduğundan parantez içinde eksi kullanılır.
Adım 3: İfade (2x − 3y)^{2} olur.
Cevap A.`
},
{
  id: "mat-ci-046",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `**Aşağıdaki çarpanlara ayırma işlemlerinden hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: [`x^{2} − 25 = (x − 5)(x + 5)`, `y^{2} − 12y + 36 = (y − 6)^{2}`, `6x^{2} + 15x = 3x(2x + 5)`, `4m^{2} − 9 = (2m − 3)^{2}`],
  dogru: 3,
  hatalar: [
    `Bu işlem doğrudur (iki kare farkı); soru yanlış olanı soruyor.`,
    `Bu işlem doğrudur (6^{2} = 36 ve 2 · 6 = 12); soru yanlış olanı soruyor.`,
    `Bu işlem doğrudur (3x · 2x = 6x^{2}, 3x · 5 = 15x); soru yanlış olanı soruyor.`,
    null
  ],
  aciklama: `Her eşitliğin sağ tarafını çarparak sol tarafı verip vermediğine bak.
Adım 1: (x − 5)(x + 5) = x^{2} − 25; (y − 6)^{2} = y^{2} − 12y + 36; 3x(2x + 5) = 6x^{2} + 15x. Üçü doğru.
Adım 2: (2m − 3)^{2} = 4m^{2} − 12m + 9'dur, 4m^{2} − 9 değil. 4m^{2} − 9'un doğru çarpanları (2m − 3)(2m + 3)'tür.
Sık yapılan hata: İki kare farkını tam kare gibi yazmak.
Cevap D.`
},
{
  id: "mat-ci-047",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `**(x + 5)^{2} − 25 ifadesi çarpanlarına ayrılırsa aşağıdakilerden hangisi elde edilir?**`,
  gorsel: null,
  secenekler: [`x(x + 5)`, `x(x − 10)`, `x(x + 10)`, `(x − 5)(x + 5)`],
  dogru: 2,
  hatalar: [
    `İkinci çarpanda (x + 5) + 5 = x + 10 olmalı; 5'i eklemedin.`,
    `İkinci çarpanda işareti ters aldın: (x + 5) + 5 = x + 10.`,
    null,
    `(x + 5)^{2} yerine x^{2} yazdın; birinci terim x değil (x + 5)'tir.`
  ],
  aciklama: `İki kare farkı: a^{2} − b^{2} = (a − b)(a + b). Burada a = x + 5 ve b = 5'tir.
Adım 1: a − b = (x + 5) − 5 = x.
Adım 2: a + b = (x + 5) + 5 = x + 10.
Adım 3: Çarpanlar x ve (x + 10).
Sağlama: x = 1 için 36 − 25 = 11 ve 1 · 11 = 11.
Cevap C.`
},
{
  id: "mat-ci-048",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir mobilya atölyesinde bir masanın maliyeti (3x + 40) TL, bir sandalyenin maliyeti (x + 15) TL'dir. Atölyeye gelen bir sipariş tabloda verilmiştir. Siparişin toplam maliyeti ax + b biçiminde yazılmıştır.
**Buna göre a + b toplamı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Birim maliyet (TL)</th><th>Sipariş adedi</th></tr><tr><td>Masa</td><td>3x + 40</td><td>2</td></tr><tr><td>Sandalye</td><td>x + 15</td><td>6</td></tr></table>`,
  secenekler: [`12`, `67`, `170`, `182`],
  dogru: 3,
  hatalar: [
    `Yalnızca x'in katsayısını (a = 12) aldın; sabit terimi (b) toplama katmadın.`,
    `Sabit terimleri adetle çarpmadın: 12x + 40 + 15 = 12x + 55 buldun, a + b = 67 çıktı. Parantezin tamamı adetle çarpılır.`,
    `Yalnızca sabit terimi (b = 170) aldın; a katsayısını toplama katmadın.`,
    null
  ],
  aciklama: `Toplam maliyet = (masa adedi) × (masa maliyeti) + (sandalye adedi) × (sandalye maliyeti).
Adım 1: Masalar: 2 · (3x + 40) = 6x + 80.
Adım 2: Sandalyeler: 6 · (x + 15) = 6x + 90.
Adım 3: Toplam: 12x + 170 olur. Sabit terim de bir katsayıdır; a = 12, b = 170.
Adım 4: a + b = 12 + 170 = 182.
Sağlama: x = 1 için masa 43, sandalye 16: 2 · 43 + 6 · 16 = 86 + 96 = 182 ve 12 + 170 = 182.
Cevap D.`
},
{
  id: "mat-ci-049",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Şekildeki çokgenin bazı kenar uzunlukları birim cinsinden verilmiştir. Çokgenin bütün köşelerindeki açılar dik açıdır.
**Çokgenin çevresini gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 420 270"><path d="M80,235 H350 V145 H224 V37 H80 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="215" y="260" text-anchor="middle" font-size="16" fill="currentColor">4a + 3</text><text x="360" y="195" text-anchor="start" font-size="16" fill="currentColor">a + 2</text><text x="287" y="135" text-anchor="middle" font-size="16" fill="currentColor">2a + 1</text><text x="232" y="95" text-anchor="start" font-size="16" fill="currentColor">2a</text></svg>`,
  secenekler: [`14a + 10`, `9a + 6`, `7a + 5`, `28a + 20`],
  dogru: 0,
  hatalar: [
    null,
    `Yalnızca üzerinde yazan dört kenarı topladın; yazılmayan iki kenar da çevreye girer.`,
    `Çevrenin yarısını buldun; bütün kenarların toplamı bunun 2 katıdır.`,
    `Çevrenin 2 katını buldun; bütün kenarları bir kez toplamak yeterlidir.`
  ],
  aciklama: `Önce yazılmayan kenarları bul.
Adım 1: Üst kenar = alt kenar − girinti = (4a + 3) − (2a + 1) = 2a + 2.
Adım 2: Sol kenar = (a + 2) + 2a = 3a + 2.
Adım 3: Altı kenarın toplamı: (4a + 3) + (a + 2) + (2a + 1) + 2a + (2a + 2) + (3a + 2) = 14a + 10.
Sağlama: a = 1 için kenarlar 7, 3, 3, 2, 4, 5 olur; toplamları 24 ve 14 + 10 = 24.
Cevap A.`
},
{
  id: "mat-ci-050",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir otogarda numaraları çift sayı olan peronlardan, birbirini izleyen üç tanesinin en küçüğünün numarası 2n'dir (n bir doğal sayıdır). Otogar yönetimi, her peronda günlük sefer sayısını o peronun numarasının 3 katı olarak planlamıştır. Örneğin 8 numaralı peronda günde 24 sefer yapılır.
**Bu üç peronda yapılacak günlük toplam sefer sayısını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`6n + 6`, `18n + 6`, `18n + 18`, `18n + 36`],
  dogru: 2,
  hatalar: [
    `Yalnızca peron numaralarını topladın; sefer sayısı için toplamı 3 ile çarpmak gerekir.`,
    `3 ile yalnızca 6n'yi çarptın; sabit terim 6'yı da 3 ile çarpmayı unuttun.`,
    null,
    `Numaraları 2n + 2, 2n + 4, 2n + 6 gibi aldın; en küçük peron numarası 2n'dir.`
  ],
  aciklama: `Birbirini izleyen çift sayılar arasında 2 fark vardır.
Adım 1: Üç peronun numarası 2n, 2n + 2 ve 2n + 4'tür.
Adım 2: Sefer sayıları numaranın 3 katıdır: 3 · 2n = 6n, 3 · (2n + 2) = 6n + 6 ve 3 · (2n + 4) = 6n + 12.
Adım 3: Toplam: 6n + (6n + 6) + (6n + 12) = 18n + 18.
Sağlama: n = 3 için numaralar 6, 8, 10; seferler 18, 24, 30, toplam 72 ve 18 · 3 + 18 = 72.
Cevap C.`
},
{
  id: "mat-ci-051",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Şekilde dikdörtgen biçimli bir mahalle bahçesinin ölçüleri metre cinsinden verilmiştir. Bahçeyi boydan boya kesen, 2 m genişliğinde bir yürüyüş yolu vardır; geri kalan kısım çimdir.
**Çimle kaplı alanı gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 400 250"><rect x="70" y="50" width="288" height="162" fill="none" stroke="currentColor" stroke-width="2"/><rect x="196" y="50" width="36" height="162" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="214" y="40" text-anchor="middle" font-size="16" fill="currentColor">2x + 6</text><text x="62" y="136" text-anchor="end" font-size="16" fill="currentColor">x + 4</text><text x="214" y="136" text-anchor="middle" font-size="14" fill="currentColor">yol</text><text x="214" y="234" text-anchor="middle" font-size="16" fill="currentColor">2</text><text x="133" y="136" text-anchor="middle" font-size="14" fill="currentColor">çim</text><text x="295" y="136" text-anchor="middle" font-size="14" fill="currentColor">çim</text></svg>`,
  secenekler: [`2x^{2} + 12x + 24`, `2x^{2} + 12x + 16`, `2x^{2} + 14x + 22`, `2x^{2} + 14x + 24`],
  dogru: 1,
  hatalar: [
    `Yolun alanını 2x olarak çıkardın; yolun alanı 2 · (x + 4) = 2x + 8'dir, 8'i de çıkarmalısın.`,
    null,
    `Yolun alanı yerine yalnızca 2 çıkardın; yolun alanı 2 · (x + 4)'tür.`,
    `Yolun alanını çıkarmadın; bu, bahçenin tamamının alanıdır.`
  ],
  aciklama: `Çim alanı = bahçenin alanı − yolun alanı.
Adım 1: Bahçenin alanı: (2x + 6)(x + 4) = 2x^{2} + 8x + 6x + 24 = 2x^{2} + 14x + 24.
Adım 2: Yol, 2 m genişliğinde ve bahçenin yüksekliği (x + 4) boyunca uzandığından alanı 2(x + 4) = 2x + 8'dir.
Adım 3: 2x^{2} + 14x + 24 − (2x + 8) = 2x^{2} + 12x + 16.
Sağlama: x = 1 için bahçe 8 · 5 = 40, yol 10, çim 30; 2 + 12 + 16 = 30.
Cevap B.`
},
{
  id: "mat-ci-052",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir elektronik mağazasında iki tabletin ekranı da dikdörtgen biçimlidir. A tabletinin ekran kenarları (2x + 1) cm ve (x + 3) cm, B tabletinin ekran kenarları (x + 2) cm ve (2x − 1) cm'dir.
**A tabletinin ekran alanı, B tabletinin ekran alanından kaç cm^{2} fazladır?**`,
  gorsel: null,
  secenekler: [`4x + 1`, `2x^{2} + 4x + 5`, `4x^{2} + 10x + 1`, `4x + 5`],
  dogru: 3,
  hatalar: [
    `Eksiyi B'nin her terimine dağıtmadın: −(−2) = +2 olduğundan sabit terim 3 + 2 = 5 olmalı.`,
    `Alanlar farkında x^{2} terimlerini de çıkarman gerekirdi; 2x^{2} − 2x^{2} = 0.`,
    `İki alanı çıkarmak yerine topladın.`,
    null
  ],
  aciklama: `Fazlalık = A'nın alanı − B'nin alanı.
Adım 1: A'nın alanı: (2x + 1)(x + 3) = 2x^{2} + 6x + x + 3 = 2x^{2} + 7x + 3.
Adım 2: B'nin alanı: (x + 2)(2x − 1) = 2x^{2} − x + 4x − 2 = 2x^{2} + 3x − 2.
Adım 3: Fark: (2x^{2} + 7x + 3) − (2x^{2} + 3x − 2) = 4x + 5.
Sağlama: x = 1 için A: 3 · 4 = 12, B: 3 · 1 = 3; fark 9 ve 4 + 5 = 9.
Cevap D.`
},
{
  id: "mat-ci-053",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir tur otobüsü, önce (2x + 10) km/sa sabit hızla (x − 2) saat, ardından (x + 30) km/sa sabit hızla 2 saat yol almıştır.
**Otobüsün aldığı toplam yolu km cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`2x^{2} + 6x − 20`, `2x^{2} + 7x + 10`, `2x^{2} + 8x + 40`, `2x^{2} + 8x + 80`],
  dogru: 2,
  hatalar: [
    `Yalnızca ilk bölümün yolunu buldun; ikinci bölümde alınan yol da eklenmeli.`,
    `İkinci bölümde hızı süreyle çarpmadın: (x + 30) · 2 = 2x + 60 olmalı.`,
    null,
    `İlk bölümde (−2) · 10 = −20 olmalı; +20 aldığın için sabit terim yanlış çıktı.`
  ],
  aciklama: `Yol = hız × süre; her bölümün yolu ayrı bulunur ve toplanır.
Adım 1: İlk bölüm: (2x + 10)(x − 2) = 2x^{2} − 4x + 10x − 20 = 2x^{2} + 6x − 20.
Adım 2: İkinci bölüm: (x + 30) · 2 = 2x + 60.
Adım 3: Toplam: 2x^{2} + 6x − 20 + 2x + 60 = 2x^{2} + 8x + 40.
Sağlama: x = 5 için 20 km/sa hızla 3 saatte 60 km, 35 km/sa hızla 2 saatte 70 km; toplam 130 km. 50 + 40 + 40 = 130.
Cevap C.`
},
{
  id: "mat-ci-054",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir okul kütüphanesi için alınan iki tür kitabın adedi ve birim fiyatı tabloda verilmiştir (n pozitif bir tam sayıdır).
**Kütüphanenin ödediği toplam tutarı gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Kitap türü</th><th>Adet</th><th>Birim fiyat (TL)</th></tr><tr><td>Roman</td><td>n + 2</td><td>n + 5</td></tr><tr><td>Ansiklopedi</td><td>n</td><td>n + 1</td></tr></table>`,
  secenekler: [`n^{2} + 7n + 10`, `2n^{2} + n + 10`, `2n^{2} + 7n + 11`, `2n^{2} + 8n + 10`],
  dogru: 3,
  hatalar: [
    `Yalnızca romanların tutarını buldun; ansiklopedilerin tutarı da eklenmeli.`,
    `Romanlarda (n + 2)(n + 5) çarpımının ortadaki terimlerini (5n ve 2n) yazmadın.`,
    `Ansiklopedilerde n · (n + 1) çarpımında n · 1 = n terimini unuttun; n^{2} + 1 yazdın.`,
    null
  ],
  aciklama: `Tutar = adet × birim fiyat; iki kitap türünün tutarları toplanır.
Adım 1: Romanlar: (n + 2)(n + 5) = n^{2} + 5n + 2n + 10 = n^{2} + 7n + 10.
Adım 2: Ansiklopediler: n(n + 1) = n^{2} + n.
Adım 3: Toplam: n^{2} + 7n + 10 + n^{2} + n = 2n^{2} + 8n + 10.
Sağlama: n = 1 için 3 · 6 + 1 · 2 = 20 ve 2 + 8 + 10 = 20.
Cevap D.`
},
{
  id: "mat-ci-055",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Bir belediye, kenarı 997 m olan kare biçimli bir arazinin alanını hesap makinesi kullanmadan, 997 = 1000 − 3 yazarak bulacaktır.
**Arazinin alanı kaç m^{2}'dir?**`,
  gorsel: null,
  secenekler: [`994000`, `994009`, `997009`, `999991`],
  dogru: 1,
  hatalar: [
    `Son terimi (+9) eklemeyi unuttun.`,
    null,
    `Ortadaki terimi 2 · 1000 · 3 = 6000 yerine 3000 aldın; 2 katını almak gerekir.`,
    `1000^{2} − 3^{2} hesapladın; fark karesi, kare farkı değildir.`
  ],
  aciklama: `Alan = 997^{2} = (1000 − 3)^{2}. Fark karesi: (a − b)^{2} = a^{2} − 2ab + b^{2}.
Adım 1: a = 1000, b = 3 için a^{2} = 1000000, 2ab = 6000, b^{2} = 9.
Adım 2: 1000000 − 6000 + 9 = 994009.
Sağlama: 997 · 997 = 997 · 1000 − 997 · 3 = 997000 − 2991 = 994009.
Cevap B.`
},
{
  id: "mat-ci-056",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `İki kare biçimli mozaik parçasının kenar uzunlukları (a − 3) cm ve (a + 3) cm'dir (a > 3).
**Bu iki parçanın alanları toplamını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`2a^{2} + 18`, `12a`, `2a^{2}`, `2a^{2} + 9`],
  dogru: 0,
  hatalar: [
    null,
    `Alanların toplamı yerine farkını buldun: (a + 3)^{2} − (a − 3)^{2} = 12a.`,
    `Karelerin ortadaki terimlerini olmadan açtın (a^{2} − 9 ve a^{2} + 9 gibi); son terim 9 + 9 = 18 olmalı.`,
    `Son terim 9'u yalnızca bir kez saydın; iki karenin her birinden 9 gelir.`
  ],
  aciklama: `Alanlar toplamı = (a − 3)^{2} + (a + 3)^{2}.
Adım 1: (a − 3)^{2} = a^{2} − 6a + 9.
Adım 2: (a + 3)^{2} = a^{2} + 6a + 9.
Adım 3: Topla: −6a ile +6a birbirini götürür; 2a^{2} + 18 kalır.
Sağlama: a = 4 için 1 + 49 = 50 ve 2 · 16 + 18 = 50.
Cevap A.`
},
{
  id: "mat-ci-057",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Dikdörtgen biçimli bir kartonun uzun kenarı a cm, kısa kenarı b cm'dir.
**(a + b)^{2} − (a − b)^{2} ifadesi aşağıdakilerden hangisine eşittir?**`,
  gorsel: null,
  secenekler: [`4ab`, `0`, `2ab`, `2b^{2}`],
  dogru: 0,
  hatalar: [
    null,
    `İki ifadeyi de a^{2} + b^{2} sanıp çıkardın; ortadaki terimler (+2ab ve −2ab) farklıdır.`,
    `Yalnızca bir tarafın ortadaki terimini (2ab) aldın; çıkarma işlemiyle ikinci 2ab de eklenir.`,
    `Eksiyi (a − b)^{2}'nin ortadaki terimine dağıtmadın: −(−2ab) = +2ab olur.`
  ],
  aciklama: `Önce iki tam kareyi aç, sonra çıkar; eksi işareti parantezin her terimini etkiler.
Adım 1: (a + b)^{2} = a^{2} + 2ab + b^{2}.
Adım 2: (a − b)^{2} = a^{2} − 2ab + b^{2}.
Adım 3: a^{2} + 2ab + b^{2} − a^{2} + 2ab − b^{2}; a^{2} ve b^{2} terimleri gider, 4ab kalır.
Sağlama: a = 3, b = 1 için 16 − 4 = 12 ve 4 · 3 · 1 = 12.
Cevap A.`
},
{
  id: "mat-ci-058",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Kenar uzunlukları birbirini izleyen iki doğal sayı olan iki kare biçimli levhanın alanları farkı 49 cm^{2}'dir.
**Bu levhaların kenar uzunluklarının toplamı kaç cm'dir?**`,
  gorsel: null,
  secenekler: [`7`, `24`, `25`, `49`],
  dogru: 3,
  hatalar: [
    `49'un kareköküne baktın; alanlar farkı kenarlar farkının karesi değildir.`,
    `Küçük levhanın kenarını buldun; soru iki kenarın toplamını soruyor.`,
    `Büyük levhanın kenarını buldun; soru iki kenarın toplamını soruyor.`,
    null
  ],
  aciklama: `Büyük kenar b, küçük kenar a olsun; b − a = 1'dir. İki kare farkı: b^{2} − a^{2} = (b − a)(b + a).
Adım 1: 49 = 1 · (b + a).
Adım 2: b + a = 49. Kenar uzunlukları toplamı 49 cm'dir.
Sağlama: Kenarlar 24 ve 25 olur; 625 − 576 = 49 ve 24 + 25 = 49.
Cevap D.`
},
{
  id: "mat-ci-059",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `Alanı 3x^{2} − 24x + 48 cm^{2} olan dikdörtgen biçimli bir afişin kenar uzunlukları, katsayıları tam sayı olan birer birinci dereceden cebirsel ifadedir (x > 4).
**Afişin uzun kenarı ile kısa kenarı arasındaki farkı gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`x − 4`, `2x − 8`, `2x − 12`, `4x − 16`],
  dogru: 1,
  hatalar: [
    `Yalnızca kısa kenarı buldun (x − 4); fark için uzun kenardan kısa kenar çıkarılmalı.`,
    null,
    `Kısa kenarı x aldın; ikinci çarpan (x − 4)'tür.`,
    `Kenarları çıkarmak yerine topladın; fark istendiği için uzun kenardan kısa kenar çıkarılmalı.`
  ],
  aciklama: `Önce ortak çarpan, sonra tam kare ara.
Adım 1: 3x^{2} − 24x + 48 = 3(x^{2} − 8x + 16).
Adım 2: x^{2} − 8x + 16 = (x − 4)^{2} olduğundan alan 3(x − 4)(x − 4) olur.
Adım 3: Kenarlar 3(x − 4) = 3x − 12 ve (x − 4); x > 4 olduğundan 3x − 12 uzun kenardır.
Adım 4: Fark: (3x − 12) − (x − 4) = 2x − 8.
Sağlama: x = 5 için alan 75 − 120 + 48 = 3; kenarlar 3 ve 1, çarpım 3. Fark 2; 2 · 5 − 8 = 2.
Cevap B.`
},
{
  id: "mat-ci-060",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `**Aşağıdakilerden hangisi 8x^{2} − 32 ifadesinin çarpanlarından biri __değildir__?**`,
  gorsel: null,
  secenekler: [`x − 2`, `x + 2`, `x + 4`, `8`],
  dogru: 2,
  hatalar: [
    `x − 2 bu ifadenin çarpanıdır: 8x^{2} − 32 = 8(x − 2)(x + 2). Soru çarpan olmayanı soruyor.`,
    `x + 2 bu ifadenin çarpanıdır: 8x^{2} − 32 = 8(x − 2)(x + 2). Soru çarpan olmayanı soruyor.`,
    null,
    `8 ortak çarpandır ve ifadenin çarpanıdır. Soru çarpan olmayanı soruyor.`
  ],
  aciklama: `Önce ortak çarpan, sonra iki kare farkı uygula.
Adım 1: 8x^{2} − 32 = 8(x^{2} − 4).
Adım 2: x^{2} − 4 = (x − 2)(x + 2).
Adım 3: İfade 8(x − 2)(x + 2) olur; çarpanlar 8, x − 2 ve x + 2'dir. x + 4 bunların arasında yoktur (4 değil, 4'ün karekökü olan 2 gerekir).
Sağlama: x = 2 için 8x^{2} − 32 = 0 ve x − 2 = 0; x + 4 = 6 sıfır olmaz.
Cevap C.`
},
{
  id: "mat-ci-061",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `**(x + 3)^{2} − 16 ifadesinin çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`(x − 1)(x + 7)`, `(x − 1)(x + 1)`, `(x + 1)(x + 7)`, `(x − 7)(x + 1)`],
  dogru: 0,
  hatalar: [
    null,
    `İkinci çarpanı (x + 3) + 4 = x + 7 yerine x + 1 yazdın; 3'ü hesaba katmadın.`,
    `İlk çarpanı (x + 3) − 4 = x − 1 yerine x + 1 yazdın; çıkarmayı yanlış yaptın.`,
    `Çarpanların işaretlerini yer değiştirdin; (x + 3) − 4 = x − 1 ve (x + 3) + 4 = x + 7'dir.`
  ],
  aciklama: `İki kare farkı: a^{2} − b^{2} = (a − b)(a + b). Burada a = x + 3, b = 4 (16 = 4^{2}).
Adım 1: a − b = (x + 3) − 4 = x − 1.
Adım 2: a + b = (x + 3) + 4 = x + 7.
Adım 3: Çarpanlar (x − 1) ve (x + 7).
Sağlama: x = 2 için 25 − 16 = 9 ve 1 · 9 = 9.
Cevap A.`
},
{
  id: "mat-ci-062",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `Alanı 16a^{2} − 25b^{2} cm^{2} olan dikdörtgen biçimli bir cam levhanın bir kenarı (4a + 5b) cm'dir.
**Levhanın çevresi kaç cm'dir?**`,
  gorsel: null,
  secenekler: [`16a`, `8a`, `8a + 10b`, `16a + 20b`],
  dogru: 0,
  hatalar: [
    null,
    `Yarım çevreyi buldun; çevre bunun 2 katıdır.`,
    `İki kenarı da (4a + 5b) aldın ve yarım çevreyi hesapladın; öbür kenar (4a − 5b)'dir.`,
    `İki kenarı da (4a + 5b) aldın; kare farkında çarpanlar (4a − 5b) ve (4a + 5b)'dir.`
  ],
  aciklama: `İki kare farkı: 16a^{2} − 25b^{2} = (4a)^{2} − (5b)^{2} = (4a − 5b)(4a + 5b).
Adım 1: Bir kenar (4a + 5b) ise öbür kenar (4a − 5b)'dir.
Adım 2: Çevre = 2 · [(4a + 5b) + (4a − 5b)].
Adım 3: Köşeli parantezin içi 8a olur; çevre 16a.
Sağlama: a = 2, b = 1 için alan 64 − 25 = 39; kenarlar 13 ve 3, çevre 32 ve 16 · 2 = 32.
Cevap A.`
},
{
  id: "mat-ci-063",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `**a = 7 ve b = 3 iken 4a^{2} − 12ab + 9b^{2} ifadesinin değeri, ifade önce çarpanlarına ayrılarak bulunursa kaç olur?**`,
  gorsel: null,
  secenekler: [`5`, `25`, `277`, `1225`],
  dogru: 1,
  hatalar: [
    `Çarpanlara ayırdıktan sonra kare almayı unuttun: (2a − 3b) = 5 bulundu, ama ifade bunun karesidir.`,
    null,
    `Ortadaki terimi unutup 4a^{2} + 9b^{2} = 196 + 81 hesapladın.`,
    `Parantez içinde artı kullandın: (2a + 3b)^{2} = 35^{2}; ortadaki terim eksi olduğundan (2a − 3b) gerekir.`
  ],
  aciklama: `4a^{2} = (2a)^{2}, 9b^{2} = (3b)^{2} ve 12ab = 2 · 2a · 3b olduğundan ifade tam karedir.
Adım 1: 4a^{2} − 12ab + 9b^{2} = (2a − 3b)^{2}.
Adım 2: a = 7, b = 3 yazılırsa 2a − 3b = 14 − 9 = 5.
Adım 3: Değer 5^{2} = 25.
Sağlama: Doğrudan hesap: 196 − 252 + 81 = 25.
Cevap B.`
},
{
  id: "mat-ci-064",
  kazanim: "M.8.2.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir okulun iki kantin şubesinin günlük kazançları, satılan ürün sayısı x'e bağlı olarak TL cinsinden hesaplanmaktadır. Belirli bir gün Merkez şubenin kazancı 4x^{2} − 3x + 5, Yeni şubenin kazancı x^{2} − 6x − 2 ifadesiyle bulunmuştur. Müdür, Merkez şubenin kazancı ile Yeni şubenin kazancı arasındaki farkı (Merkez − Yeni) ax^{2} + bx + c biçiminde yazıyor.
**Buna göre b + c toplamı kaçtır?**`,
  gorsel: null,
  secenekler: [`−6`, `3`, `7`, `10`],
  dogru: 3,
  hatalar: [
    `Eksiyi Yeni şubenin yalnızca ilk terimine uyguladın: −x^{2} − 6x − 2 yazdın. Eksi, parantezin her terimini etkiler.`,
    `Yalnızca x'in katsayısını (b = 3) aldın; sabit terim c de toplama girer.`,
    `Yalnızca sabit terimi (c = 7) aldın; x'in katsayısı b de toplama girer.`,
    null
  ],
  aciklama: `Fark için ikinci ifadenin önüne eksi koyarken her terimin işareti değişir.
Adım 1: (4x^{2} − 3x + 5) − (x^{2} − 6x − 2) = 4x^{2} − 3x + 5 − x^{2} + 6x + 2.
Adım 2: Benzer terimleri birleştir: 3x^{2} + 3x + 7. Burada a = 3, b = 3, c = 7.
Adım 3: b + c = 3 + 7 = 10.
Sağlama: x = 1 için 6 − (−7) = 13 ve 3 + 3 + 7 = 13.
Cevap D.`
},
{
  id: "mat-ci-065",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Dikdörtgen biçimli bir çocuk parkının ölçüleri metre cinsinden şekilde verilmiştir. Parkı kenarlara paralel olarak kesen, 2 m genişliğinde iki yürüyüş yolu vardır; geri kalan dört parça çimdir.
**Çimle kaplı toplam alanı gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 460 280"><rect x="90" y="45" width="324" height="180" fill="none" stroke="currentColor" stroke-width="2"/><rect x="240" y="45" width="36" height="180" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="90" y="115" width="324" height="36" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="252" y="35" text-anchor="middle" font-size="16" fill="currentColor">4x + 6</text><text x="82" y="140" text-anchor="end" font-size="16" fill="currentColor">2x + 4</text><text x="258" y="248" text-anchor="middle" font-size="16" fill="currentColor">2</text><text x="424" y="138" text-anchor="start" font-size="16" fill="currentColor">2</text><text x="165" y="85" text-anchor="middle" font-size="14" fill="currentColor">çim</text><text x="345" y="85" text-anchor="middle" font-size="14" fill="currentColor">çim</text><text x="165" y="193" text-anchor="middle" font-size="14" fill="currentColor">çim</text><text x="345" y="193" text-anchor="middle" font-size="14" fill="currentColor">çim</text></svg>`,
  secenekler: [`8x^{2} + 16x + 4`, `8x^{2} + 16x + 8`, `8x^{2} + 20x + 12`, `8x^{2} + 28x + 24`],
  dogru: 1,
  hatalar: [
    `İki yolun alanını ayrı ayrı çıkardın; ortak kesişim karesi (2 · 2 = 4) iki kez çıkarılmış oldu.`,
    null,
    `Yalnızca bir yolun alanını çıkardın; ikinci yol da çimi böler.`,
    `Yolların alanını çıkarmadın; bu, parkın tamamının alanıdır.`
  ],
  aciklama: `Çim alanı = parkın alanı − yolların kapladığı alan; kesişim karesi yalnızca bir kez çıkarılır.
Adım 1: Parkın alanı: (4x + 6)(2x + 4) = 8x^{2} + 16x + 12x + 24 = 8x^{2} + 28x + 24.
Adım 2: Dikey yol 2(2x + 4) = 4x + 8, yatay yol 2(4x + 6) = 8x + 12; kesişim 2 · 2 = 4. Yolların kapladığı alan: 4x + 8 + 8x + 12 − 4 = 12x + 16.
Adım 3: 8x^{2} + 28x + 24 − (12x + 16) = 8x^{2} + 16x + 8.
Sağlama: Dört çim parçası birleştirilirse kenarları (4x + 4) ve (2x + 2) olan dikdörtgen olur; çarpımı 8x^{2} + 8x + 8x + 8 = 8x^{2} + 16x + 8.
Cevap B.`
},
{
  id: "mat-ci-066",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir otoparkta (2x + 3) sıra vardır ve her sırada (x + 4) araç yeri bulunmaktadır. Bakım çalışması nedeniyle 3 sıra tamamen kapatılmıştır.
**x = 6 olduğuna göre otoparkta kullanıma açık araç yeri sayısı kaçtır?**`,
  gorsel: null,
  secenekler: [`30`, `120`, `147`, `150`],
  dogru: 1,
  hatalar: [
    `Yalnızca kapatılan sıralardaki yerleri buldun (3 · 10); açık yer sayısı toplamdan bunu çıkarınca bulunur.`,
    null,
    `Kapatılan sıra sayısı olan 3'ü araç yeri sayısından çıkardın; her sırada (x + 4) yer olduğundan 3 · (x + 4) çıkarılmalı.`,
    `Otoparkın toplam yer sayısını buldun; kapalı sıralardaki yerler çıkarılmadı.`
  ],
  aciklama: `Açık yer = toplam yer − kapalı yer.
Adım 1: Toplam yer: (2x + 3)(x + 4) = 2x^{2} + 11x + 12; x = 6 için 72 + 66 + 12 = 150.
Adım 2: Kapalı yer: 3 · (x + 4) = 3 · 10 = 30.
Adım 3: Açık yer: 150 − 30 = 120.
Sağlama: Açık sıra sayısı 2x + 3 − 3 = 2x = 12 ve her sırada 10 yer var; 12 · 10 = 120.
Cevap B.`
},
{
  id: "mat-ci-067",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir müzik kulübü, birinci konserde bileti (x + 5) TL'den satarak (x + 2) bilet satmıştır. İkinci konserde bilet fiyatını 3 TL artırmış, satılan bilet sayısı ise 2 azalmıştır.
**İkinci konserin hasılatı ile birinci konserin hasılatı arasındaki farkı (ikinci − birinci) gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`x − 10`, `10 − x`, `3x + 6`, `x^{2} + 8x`],
  dogru: 0,
  hatalar: [
    null,
    `Çıkarmayı ters yaptın: soru ikinci hasılattan birinciyi çıkarmayı istiyor.`,
    `Satılan bilet sayısındaki azalmayı unuttun: (x + 8)(x + 2) − (x + 5)(x + 2) = 3x + 6 buldun.`,
    `Yalnızca ikinci konserin hasılatını buldun; birinci konserin hasılatı çıkarılmadı.`
  ],
  aciklama: `Hasılat = bilet fiyatı × satılan bilet sayısı.
Adım 1: Birinci konser: (x + 5)(x + 2) = x^{2} + 7x + 10.
Adım 2: İkinci konserde fiyat x + 8, bilet sayısı x olur: (x + 8) · x = x^{2} + 8x.
Adım 3: Fark: x^{2} + 8x − (x^{2} + 7x + 10) = x − 10.
Sağlama: x = 12 için birinci 17 · 14 = 238, ikinci 20 · 12 = 240; fark 2 ve 12 − 10 = 2.
Cevap A.`
},
{
  id: "mat-ci-068",
  kazanim: "M.8.2.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir spor salonunun iki şubesinden A şubesi (2x − 1) TL'lik üyelik paketinden 3x adet, B şubesi (x + 2) TL'lik üyelik paketinden (x − 4) adet satmıştır.
**A şubesinin geliri, B şubesinin gelirinden kaç TL fazladır?**`,
  gorsel: null,
  secenekler: [`5x^{2} − 5x − 8`, `5x^{2} − x − 8`, `5x^{2} − x + 8`, `7x^{2} − 5x − 8`],
  dogru: 2,
  hatalar: [
    `Çıkarırken eksiyi B'nin hiçbir terimine dağıtmadın: −x^{2} − 2x − 8 yazdın.`,
    `Eksiyi B'nin yalnızca ilk terimine dağıttın; −(−8) = +8 olmalı.`,
    null,
    `Gelirleri çıkarmak yerine topladın.`
  ],
  aciklama: `Gelir = paket fiyatı × adet. Fazlalık, A'nın gelirinden B'nin gelirini çıkararak bulunur.
Adım 1: A: (2x − 1) · 3x = 6x^{2} − 3x.
Adım 2: B: (x + 2)(x − 4) = x^{2} − 4x + 2x − 8 = x^{2} − 2x − 8.
Adım 3: Fark: 6x^{2} − 3x − (x^{2} − 2x − 8) = 6x^{2} − 3x − x^{2} + 2x + 8 = 5x^{2} − x + 8.
Sağlama: x = 5 için A: 9 · 15 = 135, B: 7 · 1 = 7; fark 128 ve 125 − 5 + 8 = 128.
Cevap C.`
},
{
  id: "mat-ci-069",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Bir spor kompleksinde kenarı 70 m olan kare biçimli bir antrenman sahası ile 67 m × 73 m ölçülerinde dikdörtgen biçimli bir saha vardır. Alanları hesap makinesi kullanmadan karşılaştırılacaktır.
**Kare sahanın alanı, dikdörtgen sahanın alanından kaç m^{2} fazladır?**`,
  gorsel: null,
  secenekler: [`3`, `6`, `9`, `4891`],
  dogru: 2,
  hatalar: [
    `Kenar farkını (70 − 67 = 3) buldun; alanlar farkı kenar farkı değildir.`,
    `Ortadaki terim gibi 2 · 3 işlemini yaptın; 67 · 73 = (70 − 3)(70 + 3) çarpımında ortadaki terimler birbirini götürür.`,
    null,
    `Dikdörtgen sahanın alanını (67 · 73) buldun; soru iki alan arasındaki farkı soruyor.`
  ],
  aciklama: `67 = 70 − 3 ve 73 = 70 + 3 olduğundan dikdörtgenin alanı iki kare farkı özdeşliğiyle bulunur.
Adım 1: Kare sahanın alanı: 70^{2} = 4900.
Adım 2: Dikdörtgen sahanın alanı: (70 − 3)(70 + 3) = 70^{2} − 3^{2} = 4900 − 9 = 4891.
Adım 3: Fark: 4900 − 4891 = 9.
Sağlama: 67 · 73 = 67 · 70 + 67 · 3 = 4690 + 201 = 4891.
Cevap C.`
},
{
  id: "mat-ci-070",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Kenarı x cm olan kare biçimli bir kartonun sağ kenarından ve alt kenarından, şekilde boyalı gösterildiği gibi 2 cm genişliğinde iki şerit kesilip atılıyor (x > 2). Şeritler köşede kesişmektedir.
**Atılan kısmın toplam alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 360 300"><rect x="90" y="40" width="200" height="200" fill="none" stroke="currentColor" stroke-width="2"/><rect x="250" y="40" width="40" height="200" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="90" y="200" width="200" height="40" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="190" y="30" text-anchor="middle" font-size="16" fill="currentColor">x</text><text x="82" y="145" text-anchor="end" font-size="16" fill="currentColor">x</text><text x="300" y="125" text-anchor="start" font-size="16" fill="currentColor">2</text><text x="82" y="225" text-anchor="end" font-size="16" fill="currentColor">2</text><text x="170" y="125" text-anchor="middle" font-size="14" fill="currentColor">kalan</text><text x="190" y="275" text-anchor="middle" font-size="14" fill="currentColor">Boyalı kısımlar atılacak.</text></svg>`,
  secenekler: [`4x − 4`, `4x`, `4x + 4`, `4`],
  dogru: 0,
  hatalar: [
    null,
    `İki şeridin alanını 2x + 2x diye topladın; köşedeki 2 × 2 = 4 cm^{2}'lik kare iki kez sayıldı, bir kez çıkarılmalı.`,
    `Köşedeki kareyi çıkarmak yerine ekledin.`,
    `Kalan kısmı (x − 2)^{2} = x^{2} − 4 sandın; fark karesinde ortadaki −4x terimi de vardır.`
  ],
  aciklama: `Atılan alan = kartonun alanı − kalan karenin alanı. Kalan kısım kenarı (x − 2) olan bir karedir.
Adım 1: Kartonun alanı x^{2}; kalan kısmın alanı (x − 2)^{2} = x^{2} − 4x + 4.
Adım 2: Atılan alan: x^{2} − (x^{2} − 4x + 4) = 4x − 4.
Adım 3: Aynı sonucu şeritlerle de bulabilirsin: 2x + 2x − 4; köşedeki kare iki şeride de ait olduğu için bir kez çıkarılır.
Sağlama: x = 10 için atılan alan 100 − 64 = 36 ve 4 · 10 − 4 = 36.
Cevap A.`
},
{
  id: "mat-ci-071",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Poyraz, bir ödevde (x − 6)^{2} ifadesini x^{2} − 36 olarak, (x + 6)^{2} ifadesini ise x^{2} + 36 olarak açmıştır.
**Doğru açılımların toplamından Poyraz'ın bulduğu iki ifadenin toplamı çıkarılırsa sonuç aşağıdakilerden hangisi olur?**`,
  gorsel: null,
  secenekler: [`0`, `72`, `24x + 72`, `2x^{2} + 72`],
  dogru: 1,
  hatalar: [
    `Doğru açılımlardaki +36 terimlerinin birbirini götürdüğünü sandın; ikisi de pozitiftir ve toplamları 72 eder.`,
    null,
    `(x − 6)^{2} açılımında ortadaki terimi +12x aldın; fark karesinde ortadaki terim −12x'tir.`,
    `Poyraz'ın ifadelerinin toplamını (2x^{2}) çıkarmayı unuttun; yalnızca doğru açılımların toplamını verdin.`
  ],
  aciklama: `Toplamın karesi (a + b)^{2} = a^{2} + 2ab + b^{2}, farkın karesi (a − b)^{2} = a^{2} − 2ab + b^{2} biçiminde açılır.
Adım 1: Doğru açılımlar: (x − 6)^{2} = x^{2} − 12x + 36 ve (x + 6)^{2} = x^{2} + 12x + 36. Toplamları 2x^{2} + 72.
Adım 2: Poyraz'ın ifadelerinin toplamı: (x^{2} − 36) + (x^{2} + 36) = 2x^{2}.
Adım 3: Fark: (2x^{2} + 72) − 2x^{2} = 72.
Sağlama: x = 1 için doğru açılımlar 25 ve 49 (toplam 74), Poyraz'ınkiler −35 ve 37 (toplam 2); fark 72.
Sık yapılan hata: Ortadaki ±2ab terimini unutmak. Burada bu terimler (−12x ve +12x) birbirini götürür, ama son terimler (36 + 36) götürmez.
Cevap B.`
},
{
  id: "mat-ci-072",
  kazanim: "M.8.2.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Dikdörtgen biçimli bir perdenin kenar uzunlukları (x + y + 2) cm ve (x + y − 2) cm'dir.
**Perdenin alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [`x^{2} + y^{2} − 4`, `x^{2} + 2xy + y^{2} + 4`, `x^{2} − 2xy + y^{2} − 4`, `x^{2} + 2xy + y^{2} − 4`],
  dogru: 3,
  hatalar: [
    `(x + y)^{2} açılırken ortadaki 2xy terimini unuttun.`,
    `Son terimi +4 aldın; (+2) · (−2) = −4'tür, iki kare farkında son terim eksi olur.`,
    `(x + y)^{2} açılımında ortadaki terimin işaretini ters yazdın; toplamın karesinde +2xy vardır.`,
    null
  ],
  aciklama: `(x + y) tek bir terim gibi düşünülürse ifade (a + 2)(a − 2) biçimindedir; a = x + y.
Adım 1: İki kare farkı: (a + 2)(a − 2) = a^{2} − 4.
Adım 2: a = x + y olduğundan (x + y)^{2} − 4.
Adım 3: (x + y)^{2} = x^{2} + 2xy + y^{2} açılır; alan x^{2} + 2xy + y^{2} − 4.
Sağlama: x = 2, y = 1 için kenarlar 5 ve 1; alan 5. İfadeden 4 + 4 + 1 − 4 = 5 bulunur.
Cevap D.`
},
{
  id: "mat-ci-073",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 4,
  soru: `Alanı 8x^{2} + 48x + 72 cm^{2} olan dikdörtgen biçimli bir tuvalin bir kenarı (2x + 6) cm'dir. Tuvalin kenar uzunlukları, katsayıları tam sayı olan birer cebirsel ifadedir.
**Tuvalin çevresi kaç cm'dir?**`,
  gorsel: null,
  secenekler: [`6x + 18`, `12x + 24`, `12x + 36`, `20x + 60`],
  dogru: 2,
  hatalar: [
    `Yarım çevreyi buldun; çevre komşu kenarlar toplamının 2 katıdır.`,
    `Öbür kenarı 4x + 6 buldun; 4(x + 3) = 4x + 12'dir, 3'ü 4 ile çarpmayı unuttun.`,
    null,
    `Öbür kenarı 8x + 24 aldın; 8 çarpanının tamamını öbür kenara yazdın, oysa bu çarpanın 2'si (2x + 6) kenarında zaten vardır.`
  ],
  aciklama: `Önce alanı çarpanlarına ayır: 8x^{2} + 48x + 72 = 8(x^{2} + 6x + 9) = 8(x + 3)^{2}.
Adım 1: 8(x + 3)(x + 3) = [2(x + 3)] · [4(x + 3)] = (2x + 6)(4x + 12).
Adım 2: Bir kenar (2x + 6) ise öbür kenar (4x + 12) olur.
Adım 3: Çevre: 2 · (2x + 6 + 4x + 12) = 2 · (6x + 18) = 12x + 36.
Sağlama: x = 1 için alan 128; kenarlar 8 ve 16 (8 · 16 = 128), çevre 48 ve 12 + 36 = 48.
Cevap C.`
},
{
  id: "mat-ci-074",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 4,
  soru: `Alanı 20ab + 15b^{2} dm^{2} olan dikdörtgen biçimli bir halının bir kenarı 5b dm'dir. Bu halı, 5b dm'lik kenarı değiştirilmeden öbür kenarı 2 dm kısaltılarak yeniden kesilecektir.
**Yeni halının alanı kaç dm^{2} olur?**`,
  gorsel: null,
  secenekler: [`20ab + 15b^{2} − 10b`, `20ab + 15b^{2} − 2b`, `20ab + 15b^{2} − 10`, `20ab + 15b^{2} − 2`],
  dogru: 0,
  hatalar: [
    null,
    `Kısaltılan 2 dm'yi 5b ile değil yalnızca b ile çarptın; kenarın tamamı (5b) çarpılmalı.`,
    `Kısaltılan 2 dm'yi 5b yerine yalnızca 5 ile çarptın; b çarpanını unuttun.`,
    `Kısaltılan 2'yi 5b ile çarpmadan doğrudan alandan çıkardın; çıkan parça 5b · 2 = 10b dm^{2}'dir.`
  ],
  aciklama: `Önce öbür kenarı bulmak için alanı ortak çarpan parantezine al: 20ab + 15b^{2} = 5b(4a + 3b).
Adım 1: Bir kenar 5b ise öbür kenar (4a + 3b) dm'dir.
Adım 2: Kısaltılınca yeni kenar (4a + 3b − 2) dm olur.
Adım 3: Yeni alan = 5b · (4a + 3b − 2) = 20ab + 15b^{2} − 10b.
Sağlama: a = 2, b = 1 için eski kenarlar 5 ve 11, yeni kenarlar 5 ve 9; yeni alan 45 ve 40 + 15 − 10 = 45.
Cevap A.`
},
{
  id: "mat-ci-075",
  kazanim: "M.8.2.1.4",
  kademe: 0,
  zorluk: 4,
  soru: `Alanları x^{2} − 100 cm^{2} ve 5x + 50 cm^{2} olan iki dikdörtgenin birer kenarı (x + 10) cm'dir (x > 10). Bu iki dikdörtgen, şekildeki gibi (x + 10) cm'lik kenarlarından birleştirilerek yeni bir dikdörtgen oluşturuluyor.
**Yeni dikdörtgenin (x + 10) cm'lik kenarına dik olan kenarının uzunluğunu gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 460 250"><rect x="70" y="45" width="170" height="130" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="240" y="45" width="110" height="130" fill="none" stroke="currentColor" stroke-width="2"/><text x="155" y="105" text-anchor="middle" font-size="16" fill="currentColor">x² − 100</text><text x="155" y="127" text-anchor="middle" font-size="14" fill="currentColor">cm²</text><text x="295" y="105" text-anchor="middle" font-size="16" fill="currentColor">5x + 50</text><text x="295" y="127" text-anchor="middle" font-size="14" fill="currentColor">cm²</text><text x="62" y="116" text-anchor="end" font-size="16" fill="currentColor">x + 10</text><path d="M70,195 H350 M70,187 V203 M350,187 V203" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="222" text-anchor="middle" font-size="16" fill="currentColor">?</text><text x="210" y="243" text-anchor="middle" font-size="14" fill="currentColor">Şekil ölçekli değildir.</text></svg>`,
  secenekler: [`x − 15`, `x − 10`, `x + 15`, `x − 5`],
  dogru: 3,
  hatalar: [
    `İkinci dikdörtgenin kenarını −5 aldın; 5x + 50 = 5(x + 10) olduğundan o kenar +5'tir.`,
    `Yalnızca birinci dikdörtgenin genişliğini (x − 10) buldun; ikinci dikdörtgenin genişliği olan 5 de eklenir.`,
    `Birinci dikdörtgenin öbür kenarını x + 10 aldın; x^{2} − 100 = (x − 10)(x + 10) olduğundan o kenar x − 10'dur.`,
    null
  ],
  aciklama: `Her alanı çarpanlarına ayırıp (x + 10) dışında kalan çarpanı bul; iki dikdörtgenin (x + 10)'a dik kenarları yan yana gelir ve toplanır.
Adım 1: x^{2} − 100 = (x − 10)(x + 10); öbür kenar x − 10.
Adım 2: 5x + 50 = 5(x + 10); öbür kenar 5.
Adım 3: Birleşik dikdörtgenin dik kenarı: (x − 10) + 5 = x − 5.
Sağlama: x = 20 için (x + 10) = 30; alanlar 300 ve 150, öbür kenarlar 10 ve 5; toplam 15 ve 20 − 5 = 15.
Cevap D.`
}
);
