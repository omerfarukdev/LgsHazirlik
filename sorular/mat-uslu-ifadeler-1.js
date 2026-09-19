// Matematik — Üslü İfadeler: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["uslu-ifadeler"] = window.LGS_BANK["uslu-ifadeler"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "mat-ui-101",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir sınıf etkinliğinde tahtaya (−3)^{2} üslü ifadesi yazılmıştır.\n**Buna göre bu ifadenin değeri kaçtır?**",
  gorsel: null,
  secenekler: ["−9", "−6", "6", "9"],
  dogru: 3,
  hatalar: [
    "−9: Üssü yalnızca 3'e uygulama. Parantez içindeki eksi işareti de tabana dâhildir; (−3)^{2} = (−3) · (−3)'tür.",
    "−6: Üs almak yerine tabanı üsle çarpma: (−3) · 2 = −6 alınmış.",
    "6: Hem üs almak yerine çarpma hem de eksi işaretini düşürme: 3 · 2 = 6 alınmış.",
    null
  ],
  aciklama: `Üslü ifadede taban, üs kadar kez kendisiyle çarpılır. Taban parantez içindeyse eksi işareti de tabana dâhildir.
Adım 1: Üssü aç: (−3)^{2} = (−3) · (−3).
Adım 2: Çarpımı yap. İki negatif sayının çarpımı pozitiftir: (−3) · (−3) = 9.
Sağlama: Taban negatif ve üs çift ise sonuç pozitiftir. Üs tek olsaydı sonuç negatif olurdu; örneğin (−3)^{3} = −27'dir.
Sık yapılan hata: −3^{2} ile (−3)^{2} ifadelerini karıştırmak. Parantez yoksa üs yalnızca 3'e uygulanır ve −3^{2} = −9 olur.
Cevap D.`
},
{
  id: "mat-ui-102",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 1,
  soru: "Kerem, matematik defterine 2^{-3} üslü ifadesini yazmıştır.\n**Buna göre bu ifadenin değeri aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["8", "6", "[[1|6]]", "[[1|8]]"],
  dogru: 3,
  hatalar: [
    "8: Negatif üssü görmezden gelme. 2^{-3} ile 2^{3} aynı değildir; eksi üs sayıyı paydaya taşır.",
    "6: Üs almak yerine çarpma ve eksi işaretini yok sayma: 2 · 3 = 6 alınmış.",
    "[[1|6]]: Paydada üs almak yerine çarpma: 2^{3} = 8 yerine 2 · 3 = 6 alınmış.",
    null
  ],
  aciklama: `Bir sayının negatif kuvveti, aynı sayının pozitif kuvvetinin çarpmaya göre tersidir: a sıfırdan farklı olmak üzere a^{-n} = [[1|a^{n}]].
Adım 1: Kuralı uygula: 2^{-3} = [[1|2^{3}]].
Adım 2: Paydayı hesapla: 2^{3} = 2 · 2 · 2 = 8.
Adım 3: Sonucu yaz: 2^{-3} = [[1|8]].
Sağlama: 2^{3} · 2^{-3} = 2^{3+(−3)} = 2^{0} = 1 olmalıdır. Gerçekten de 8 · [[1|8]] = 1'dir.
Sık yapılan hata: Negatif üssü sonucun işareti sanmak. 2^{-3} negatif bir sayı değildir; 0 ile 1 arasında pozitif bir kesirdir.
Cevap D.`
},
{
  id: "mat-ui-103",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir çalışma kâğıdında aşağıdaki işlem verilmiştir.\n**(−7)^{0} + 5^{1} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["6", "5", "4", "2"],
  dogru: 0,
  hatalar: [
    null,
    "5: Sıfırıncı kuvveti 0 sanma. (−7)^{0} = 0 alınmış; oysa sıfırdan farklı her tam sayının sıfırıncı kuvveti 1'dir.",
    "4: Sıfırıncı kuvveti −1 sanma. Taban negatif olsa da sıfırıncı kuvvet 1'dir.",
    "2: Birinci kuvveti 1 sanma. 5^{1} = 5'tir; bir sayının birinci kuvveti kendisidir."
  ],
  aciklama: `Sıfırdan farklı her tam sayının sıfırıncı kuvveti 1'dir: a^{0} = 1. Bir sayının birinci kuvveti ise kendisidir: a^{1} = a.
Adım 1: (−7)^{0} = 1. Taban negatif olsa da sonuç 1'dir; kural sıfırdan farklı bütün sayılar için geçerlidir.
Adım 2: 5^{1} = 5.
Adım 3: Topla: 1 + 5 = 6.
Sağlama: Sıfırıncı kuvvetin neden 1 olduğunu bölme kuralıyla görebilirsin: a^{3} ÷ a^{3} = a^{3-3} = a^{0}. Bir sayının kendisine bölümü 1 olduğuna göre a^{0} = 1'dir.
Sık yapılan hata: a^{0} ifadesini 0 sanmak.
Cevap A.`
},
{
  id: "mat-ui-104",
  kazanim: "M.8.1.2.3",
  kademe: 1,
  zorluk: 1,
  soru: "Sınıfta yapılan bir ölçümde bir sözlüğün kalınlığı 4,07 santimetre bulunmuştur. Bu sayının basamakları aşağıdaki tabloda gösterilmiştir.\n**Buna göre 4,07 sayısının 10'un tam sayı kuvvetleriyle çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Basamak</th><th>Birler</th><th>Onda birler</th><th>Yüzde birler</th></tr><tr><td>Rakam</td><td>4</td><td>0</td><td>7</td></tr></table>`,
  secenekler: [
    "4 · 10^{1} + 7 · 10^{-1}",
    "4 · 10^{1} + 7 · 10^{-2}",
    "4 · 10^{0} + 7 · 10^{-1}",
    "4 · 10^{0} + 7 · 10^{-2}"
  ],
  dogru: 3,
  hatalar: [
    "Her iki rakamı da bir basamak sola kaydırma: bu çözümleme 40 + 0,7 = 40,7 sayısına aittir.",
    "Birler basamağını 10^{1} ile eşleştirme: birler basamağının kuvveti 10^{0}'dır. Bu çözümleme 40 + 0,07 = 40,07 eder.",
    "Virgülden sonraki sıfırı saymayıp 7'yi onda birler basamağına koyma: bu çözümleme 4 + 0,7 = 4,7 sayısına aittir.",
    null
  ],
  aciklama: `Bir sayıyı 10'un kuvvetleriyle çözümlerken her rakam, bulunduğu basamağın değeriyle çarpılır. Basamak kuvvetleri birler basamağından sola doğru 10^{0}, 10^{1}, 10^{2}…; sağa doğru 10^{-1}, 10^{-2}… diye gider.
Adım 1: Tabloya bak. 4 rakamı birler basamağındadır: 4 · 10^{0} = 4.
Adım 2: Virgülden sonraki ilk rakam 0'dır. 0 · 10^{-1} = 0 ettiği için bu terim çözümlemede yazılmaz.
Adım 3: 7 rakamı yüzde birler basamağındadır: 7 · 10^{-2} = 0,07.
Adım 4: Terimleri yaz: 4 · 10^{0} + 7 · 10^{-2}.
Sağlama: 4 + 0,07 = 4,07.
Sık yapılan hata: Virgülden sonraki sıfırı atlayıp 7'yi onda birler basamağına koymak; o zaman 4,7 elde edilir.
Cevap D.`
},
{
  id: "mat-ui-105",
  kazanim: "M.8.1.2.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir şehir kütüphanesindeki kitap sayısı 48 000'dir.\n**Buna göre bu sayının bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["4,8 · 10^{4}", "4,8 · 10^{5}", "48 · 10^{3}", "480 · 10^{2}"],
  dogru: 0,
  hatalar: [
    null,
    "4,8 · 10^{5} = 480 000: Virgülü bir basamak fazla kaydırma. 48 000 sayısında virgül 4 basamak kayar.",
    "48 · 10^{3}: Sıfırları üçerli gruplayıp 48'i olduğu gibi bırakma. Değeri 48 000'dir ama bilimsel gösterimde başkatsayı 1 ile 10 arasında olmalıdır; 48 sayısı 10'dan büyüktür.",
    "480 · 10^{2}: Virgülü yeterince kaydırmama. Değeri 48 000'dir ama 480 sayısı 10'dan büyük olduğu için bu bir bilimsel gösterim değildir."
  ],
  aciklama: `Bilimsel gösterim a · 10^{n} biçimindedir. Burada a, 1'den küçük olmayan ve 10'dan küçük bir sayıdır (1 ≤ a < 10); n ise bir tam sayıdır.
Adım 1: Başkatsayıyı bul. Virgülü, soldan ilk rakamın hemen arkasına gelecek biçimde yerleştir: 4,8.
Adım 2: Virgülün kaç basamak kaydığını say: 48000,0 sayısından 4,8000 sayısına geçerken virgül 4 basamak sola kaydı. Öyleyse üs 4'tür.
Adım 3: Yaz: 48 000 = 4,8 · 10^{4}.
Sağlama: 4,8 · 10 000 = 48 000.
Sık yapılan hata: 48 · 10^{3} yazmak. Bu ifadenin değeri doğrudur ama başkatsayı 10'dan büyük olduğu için bilimsel gösterim sayılmaz.
Cevap A.`
},
{
  id: "mat-ui-106",
  kazanim: "M.8.1.2.4",
  kademe: 1,
  zorluk: 1,
  soru: "Bir müzik dinletisinin yapılacağı salonda 3200 koltuk vardır. Görevli bu sayıyı, n bir tam sayı olmak üzere 32 · 10^{n} biçiminde yazmıştır.\n**Buna göre n yerine hangi sayı gelmelidir?**",
  gorsel: null,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: [
    "1: Sıfırlardan birini saymama: 32 · 10^{1} = 320'dir.",
    null,
    "3: Sayının basamak sayısını üs sanma. 3200 dört basamaklıdır ama 32'nin arkasına gelecek sıfır sayısı 2'dir; 32 · 10^{3} = 32 000 eder.",
    "4: Bütün basamakları sayıp üs yapma: 32 · 10^{4} = 320 000'dir."
  ],
  aciklama: `10'un pozitif tam sayı kuvvetleri, 1'in yanına üs kadar sıfır yazılarak elde edilir: 10^{1} = 10, 10^{2} = 100, 10^{3} = 1000.
Adım 1: 3200 sayısını 32'yi içeren bir çarpım biçiminde yaz: 3200 = 32 · 100.
Adım 2: 100 sayısını 10'un kuvveti olarak yaz: 100 = 10^{2}.
Adım 3: Öyleyse 3200 = 32 · 10^{2} ve n = 2'dir.
Sağlama: 32 · 100 = 3200.
Sık yapılan hata: Sayının basamak sayısını üs sanmak. Üs, başkatsayının arkasına eklenen sıfırların sayısıdır.
Cevap B.`
},
{
  id: "mat-ui-107",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 2,
  soru: "Deniz, kırtasiyeden aldığı bir kâğıdı üst üste katlamaktadır. Her katlamada kâğıdın kat sayısı bir önceki kat sayısının 2 katına çıkmaktadır. İlk üç katlamanın sonucu aşağıdaki tabloda verilmiştir.\n**Deniz toplam 6 katlama yaptığına göre kâğıt kaç kat olur?**",
  gorsel: `<table class="tablo"><tr><th>Katlama sayısı</th><th>1</th><th>2</th><th>3</th></tr><tr><td>Kâğıdın kat sayısı</td><td>2</td><td>4</td><td>8</td></tr></table>`,
  secenekler: ["12", "32", "36", "64"],
  dogru: 3,
  hatalar: [
    "12: Katlama sayısını 2 ile çarpma: 6 · 2 = 12 alınmış. Her katlamada kat sayısı 2 katına çıkar, 2 artmaz.",
    "32: Bir katlamayı eksik sayma: 2^{5} = 32'dir; 6 katlama yapıldığı için üs 6 olmalıdır.",
    "36: Taban ile üssü yer değiştirme: 6^{2} = 36 alınmış. Her adımda 2 ile çarpıldığı için taban 2'dir.",
    null
  ],
  aciklama: `Bir büyüklük her adımda aynı sayıyla çarpılıyorsa sonuç üslü ifadeyle yazılır. Tekrar tekrar çarpılan sayı taban, kaç kez çarpıldığı ise üstür.
Adım 1: Tablodaki örüntüyü oku: 1 katlamada 2 = 2^{1}, 2 katlamada 4 = 2^{2}, 3 katlamada 8 = 2^{3} kat oluyor. Demek ki katlama sayısı üs, 2 ise tabandır.
Adım 2: Kuralı 6 katlamaya uygula: kat sayısı 2^{6} olur.
Adım 3: Hesapla: 2^{6} = 2 · 2 · 2 · 2 · 2 · 2 = 64.
Sağlama: 2^{3} = 8 olduğuna göre 2^{6} = 2^{3} · 2^{3} = 8 · 8 = 64.
Sık yapılan hata: Taban ile üssü karıştırıp 6^{2} = 36 bulmak.
Cevap D.`
},
{
  id: "mat-ui-108",
  kazanim: "M.8.1.2.2",
  kademe: 1,
  zorluk: 2,
  soru: "Matematik dersinde öğretmen tahtaya üslü ifadelerle ilgili dört eşitlik yazmış ve bunlardan yalnızca birinin yanlış olduğunu söylemiştir.\n**Buna göre tahtaya yazılan eşitliklerden hangisi __yanlıştır__?**",
  gorsel: null,
  secenekler: [
    "2^{5} · 2^{3} = 2^{8}",
    "7^{6} ÷ 7^{2} = 7^{4}",
    "(2 · 5)^{3} = 2^{3} · 5^{3}",
    "(3^{2})^{4} = 3^{6}"
  ],
  dogru: 3,
  hatalar: [
    "Çarpmada üslerin toplandığı kuralını bilmeme: aynı tabanlı sayılar çarpılırken üsler toplanır, 2^{5} · 2^{3} = 2^{5+3} = 2^{8}. Eşitlik doğrudur.",
    "Bölmede üslerin çıkarıldığı kuralını bilmeme: aynı tabanlı sayılar bölünürken üsler çıkarılır, 7^{6} ÷ 7^{2} = 7^{6-2} = 7^{4}. Eşitlik doğrudur.",
    "Üssün çarpanlara dağıldığını bilmeme: (2 · 5)^{3} = 2^{3} · 5^{3}. Eşitlik doğrudur; 10^{3} = 1000 ve 8 · 125 = 1000.",
    null
  ],
  aciklama: `Üslü ifadelerin temel kuralları şunlardır: a^{n} · a^{m} = a^{n+m}, a^{n} ÷ a^{m} = a^{n-m}, (a^{n})^{m} = a^{n·m} ve (a · b)^{k} = a^{k} · b^{k}.
Adım 1: 2^{5} · 2^{3} → aynı taban, üsler toplanır: 5 + 3 = 8. Tahtadaki 2^{8} doğrudur.
Adım 2: 7^{6} ÷ 7^{2} → aynı taban, üsler çıkarılır: 6 − 2 = 4. Tahtadaki 7^{4} doğrudur.
Adım 3: (2 · 5)^{3} → üs her çarpana dağılır: 2^{3} · 5^{3}. Doğrudur; sağlaması 10^{3} = 1000 ve 8 · 125 = 1000'dir.
Adım 4: (3^{2})^{4} → üssün üssünde üsler çarpılır: 2 · 4 = 8. Doğrusu 3^{8}'dir; tahtaya yazılan 3^{6} yanlıştır.
Sık yapılan hata: Üssün üssünde üsleri toplamak. Çarpmada üsler toplanır, üssün üssünde çarpılır.
Cevap D.`
},
{
  id: "mat-ui-109",
  kazanim: "M.8.1.2.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir hava durumu uygulamasının dünkü rapor ekranı aşağıda verilmiştir.\n**Buna göre ekranda yazan yağış miktarının 10'un tam sayı kuvvetleriyle çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 360 170" role="img" aria-label="Hava durumu ekranı: dün düşen yağış miktarı 26,45 milimetre"><rect x="10" y="10" width="340" height="150" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="10" y1="56" x2="350" y2="56" stroke="currentColor" stroke-width="2"/><text x="26" y="42" font-size="17" fill="currentColor" font-weight="bold">Dünkü hava raporu</text><text x="26" y="92" font-size="16" fill="currentColor">Düşen yağış miktarı</text><text x="26" y="134" font-size="28" fill="var(--vurgu)" font-weight="bold">26,45 mm</text></svg>`,
  secenekler: [
    "2 · 10^{1} + 6 · 10^{0} + 4 · 10^{-1} + 5 · 10^{-2}",
    "2 · 10^{1} + 6 · 10^{0} + 5 · 10^{-1} + 4 · 10^{-2}",
    "2 · 10^{2} + 6 · 10^{1} + 4 · 10^{-1} + 5 · 10^{-2}",
    "2 · 10^{1} + 6 · 10^{0} + 4 · 10^{1} + 5 · 10^{2}"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Onda birler ile yüzde birler basamağındaki rakamları yer değiştirme: bu çözümleme 26,54 sayısına aittir.",
    "Virgülden önceki basamak kuvvetlerini birer artırma: onlar basamağının kuvveti 10^{1}, birler basamağının kuvveti 10^{0}'dır. Bu çözümleme 260,45 eder.",
    "Virgülden sonraki basamaklarda üssün negatif olduğunu unutma: bu çözümleme 20 + 6 + 40 + 500 = 566 eder."
  ],
  aciklama: `Ekrandaki yağış miktarı 26,45 mm'dir. Bir ondalık gösterimi çözümlerken her rakam, bulunduğu basamağın 10'lu değeriyle çarpılır.
Adım 1: Basamakları adlandır: 2 onlar, 6 birler, 4 onda birler, 5 yüzde birler basamağındadır.
Adım 2: Basamak kuvvetlerini yaz: onlar 10^{1}, birler 10^{0}, onda birler 10^{-1}, yüzde birler 10^{-2}.
Adım 3: Her rakamı kendi basamağının kuvvetiyle çarpıp topla: 2 · 10^{1} + 6 · 10^{0} + 4 · 10^{-1} + 5 · 10^{-2}.
Sağlama: 20 + 6 + 0,4 + 0,05 = 26,45.
Sık yapılan hata: Virgülden sonraki basamaklarda üssü pozitif bırakmak. Virgülün sağına geçildiğinde kuvvet negatif olur.
Cevap A.`
},
{
  id: "mat-ui-110",
  kazanim: "M.8.1.2.4",
  kademe: 1,
  zorluk: 2,
  soru: "Okul bahçesine ekilecek çim tohumunun paketinde 3,6 · 10^{5} tohum bulunduğu yazmaktadır. Bahçıvan Selim Bey aynı sayıyı defterine iki biçimde daha yazmıştır: 36 · 10^{a} ve 360 · 10^{b}.\n**Buna göre a + b toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["5", "6", "7", "9"],
  dogru: 2,
  hatalar: [
    "5: Her iki üssü de bir fazla azaltma. 36 · 10^{3} = 36 000 ve 360 · 10^{2} = 36 000 eder; ikisi de tohum sayısının onda biridir.",
    "6: İkinci ifadede üssü fazladan azaltma. 360 · 10^{2} = 36 000 alınmış; oysa 360 · 10^{3} olmalıdır.",
    null,
    "9: Başkatsayıyı büyütürken üssü azaltmayı unutma. 36 · 10^{5} = 3 600 000 ve 360 · 10^{4} = 3 600 000 alınmış; ikisi de tohum sayısının 10 katıdır."
  ],
  aciklama: `Bir sayıyı 10'un farklı kuvvetleriyle yazarken başkatsayı ile üs birbirini dengeler: başkatsayı 10 katına çıkarsa üs 1 azalır, başkatsayı 10'a bölünürse üs 1 artar. Sayının değeri değişmez.
Adım 1: Tohum sayısını aç: 3,6 · 10^{5} = 360 000.
Adım 2: 36 · 10^{a} = 360 000 olmalı. 36 · 10 000 = 360 000 olduğuna göre 10^{a} = 10 000 ve a = 4'tür.
Adım 3: 360 · 10^{b} = 360 000 olmalı. 360 · 1000 = 360 000 olduğuna göre 10^{b} = 1000 ve b = 3'tür.
Adım 4: Topla: a + b = 4 + 3 = 7.
Sağlama: 3,6 · 10^{5} = 36 · 10^{4} = 360 · 10^{3}. Her adımda başkatsayı 10 katına çıkarken üs 1 azaldı.
Cevap C.`
},
{
  id: "mat-ui-111",
  kazanim: "M.8.1.2.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir spor sitesinde dört spor kulübünün sosyal medya hesaplarındaki takipçi sayıları bilimsel gösterimle verilmiştir.\n**Buna göre kulüpleri takipçi sayısına göre azdan çoğa sıralayan seçenek hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Kulüp</th><th>Takipçi sayısı</th></tr><tr><td>K</td><td>9,4 · 10<sup>5</sup></td></tr><tr><td>L</td><td>1,2 · 10<sup>6</sup></td></tr><tr><td>M</td><td>7,8 · 10<sup>4</sup></td></tr><tr><td>N</td><td>2,5 · 10<sup>5</sup></td></tr></table>`,
  secenekler: ["M, N, K, L", "M, K, N, L", "L, N, M, K", "L, K, N, M"],
  dogru: 0,
  hatalar: [
    null,
    "Üsleri eşit olan sayıları karşılaştırmayı atlama: K ile N'nin ikisinde de 10'un üssü 5'tir. Bu durumda başkatsayılara bakılır ve 2,5 < 9,4 olduğu için N, K'den önce gelir.",
    "Yalnızca başkatsayıları karşılaştırma: 1,2 < 2,5 < 7,8 < 9,4 sıralaması yapılmış. Oysa önce 10'un üssüne bakılır.",
    "Sıralamayı ters yönde yapma: bu sıralama çoktan aza doğrudur, soru azdan çoğa istiyor."
  ],
  aciklama: `Bilimsel gösterimle yazılmış sayılar karşılaştırılırken önce 10'un üssüne bakılır; üssü büyük olan sayı büyüktür. Üsler eşitse başkatsayılar karşılaştırılır.
Adım 1: Üsleri karşılaştır: M'de 4, K ile N'de 5, L'de 6. En küçük üs M'de olduğu için en az takipçi M kulübünün, en büyük üs L'de olduğu için en çok takipçi L kulübünündür.
Adım 2: Üsleri eşit olan K ile N'nin başkatsayılarına bak: 2,5 < 9,4 olduğundan N kulübü K kulübünden önce gelir.
Adım 3: Sırala: M < N < K < L.
Sağlama: Sayıları aç: M = 78 000, N = 250 000, K = 940 000, L = 1 200 000.
Sık yapılan hata: Yalnızca başkatsayılara bakmak. 7,8 sayısı 1,2'den büyüktür ama 7,8 · 10^{4} sayısı 1,2 · 10^{6} sayısından küçüktür.
Cevap A.`
},
{
  id: "mat-ui-112",
  kazanim: "M.8.1.2.1",
  kademe: 1,
  zorluk: 2,
  soru: "Okulun matematik kulübünde bir puan oyunu oynanmaktadır. Her oyuncu üç kart çeker; puanı, birinci ve ikinci karttaki sayıların toplamından üçüncü karttaki sayı çıkarılarak bulunur. Yaren'in çektiği kartlar aşağıda verilmiştir.\n**Buna göre Yaren'in puanı kaçtır?**",
  gorsel: `<svg viewBox="0 0 480 170" role="img" aria-label="Üç kart: birinci kartta eksi 2'nin 3. kuvveti, ikinci kartta eksi 1'in 4. kuvveti, üçüncü kartta 3'ün 0. kuvveti"><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="20" y="34" width="120" height="110" rx="10"/><rect x="180" y="34" width="120" height="110" rx="10"/><rect x="340" y="34" width="120" height="110" rx="10"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="80" y="24">1. kart</text><text x="240" y="24">2. kart</text><text x="400" y="24">3. kart</text></g><g fill="currentColor" font-size="26" font-weight="bold" text-anchor="middle"><text x="80" y="100">(−2)<tspan font-size="17" dy="-11">3</tspan></text><text x="240" y="100">(−1)<tspan font-size="17" dy="-11">4</tspan></text><text x="400" y="100">3<tspan font-size="17" dy="-11">0</tspan></text></g></svg>`,
  secenekler: ["−10", "−8", "−6", "8"],
  dogru: 1,
  hatalar: [
    "−10: Çift kuvvetin sonucunu negatif alma. (−1)^{4} = 1'dir, −1 değil; böylece −8 − 1 − 1 = −10 bulunmuş.",
    null,
    "−6: Sıfırıncı kuvveti −1 sanma ya da çıkarma işleminin işaretini ters alma: −8 + 1 + 1 = −6 bulunmuş.",
    "8: Tek kuvvette negatif tabanın işaretini kaybetme. (−2)^{3} = −8'dir, 8 değil; böylece 8 + 1 − 1 = 8 bulunmuş."
  ],
  aciklama: `Taban negatifse üssün tek mi çift mi olduğuna bakılır: çift kuvvette sonuç pozitif, tek kuvvette negatif olur. Sıfırdan farklı her sayının sıfırıncı kuvveti ise 1'dir.
Adım 1: Birinci kart: (−2)^{3} = (−2) · (−2) · (−2) = −8. Üs tek olduğu için sonuç negatiftir.
Adım 2: İkinci kart: (−1)^{4} = (−1) · (−1) · (−1) · (−1) = 1. Üs çift olduğu için sonuç pozitiftir.
Adım 3: Üçüncü kart: 3^{0} = 1.
Adım 4: Oyunun kuralını uygula: (−8 + 1) − 1 = −7 − 1 = −8.
Sağlama: İlk iki kartın toplamı −7'dir; ondan 1 çıkınca −8 olur.
Sık yapılan hata: (−1)^{4} işlemini −1 sanmak. Eksi işareti parantez içinde olduğu için dört kez çarpılır ve çift sayıda eksi pozitif verir.
Cevap B.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "mat-ui-201",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Matematik öğretmeni tahtaya 2^{6} sayısını yazmış ve öğrencilerden bu sayıya denk üslü ifadeler yazmalarını istemiştir. Tahtaya yazılan dört ifade aşağıda verilmiştir.\n**Buna göre bu ifadelerden hangisi 2^{6} sayısına eşit __değildir__?**",
  gorsel: null,
  secenekler: ["4^{3}", "2^{2} · 2^{4}", "2^{8} ÷ 2^{2}", "(2^{2})^{4}"],
  dogru: 3,
  hatalar: [
    "Tabanı değiştirilmiş denk ifadeyi tanımama: 4 = 2^{2} olduğundan 4^{3} = (2^{2})^{3} = 2^{6} = 64'tür. Eşittir.",
    "Çarpmada üslerin toplandığını unutma: 2^{2} · 2^{4} = 2^{2+4} = 2^{6}. Eşittir.",
    "Bölmede üslerin çıkarıldığını unutma: 2^{8} ÷ 2^{2} = 2^{8-2} = 2^{6}. Eşittir.",
    null
  ],
  aciklama: `Bir üslü ifadeye denk ifadeler temel kurallarla üretilir: a^{n} · a^{m} = a^{n+m}, a^{n} ÷ a^{m} = a^{n-m}, (a^{n})^{m} = a^{n·m}.
Adım 1: 4^{3} ifadesinde tabanı 2'ye çevir: 4 = 2^{2} olduğundan 4^{3} = (2^{2})^{3} = 2^{2·3} = 2^{6}. Eşittir. Sağlaması: 4^{3} = 64 ve 2^{6} = 64.
Adım 2: 2^{2} · 2^{4} = 2^{2+4} = 2^{6}. Eşittir.
Adım 3: 2^{8} ÷ 2^{2} = 2^{8-2} = 2^{6}. Eşittir.
Adım 4: (2^{2})^{4} = 2^{2·4} = 2^{8} = 256. Bu ifade 2^{6} = 64 sayısına eşit değildir.
Sık yapılan hata: Üssün üssünde üsleri toplamak. Toplanırsa (2^{2})^{4} ifadesi yanlışlıkla 2^{6} sanılır; oysa üsler çarpılır.
Cevap D.`
},
{
  id: "mat-ui-202",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okulun bahçesindeki damla sulama düzeneğinin şeması aşağıda verilmiştir. Ana borudan çıkan su önce kollara, her kol hortumlara, her hortum da damlatıcılara ayrılmaktadır.\n**Buna göre bu düzenekte toplam kaç damlatıcı vardır?**",
  gorsel: `<svg viewBox="0 0 560 270" role="img" aria-label="Damla sulama şeması: ana borudan 3 kol, her koldan 3 hortum çıkıyor, her hortuma 3 damlatıcı bağlı"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="104" y1="135" x2="168" y2="55"/><line x1="104" y1="135" x2="168" y2="135"/><line x1="104" y1="135" x2="168" y2="215"/><line x1="240" y1="55" x2="321" y2="27"/><line x1="240" y1="55" x2="321" y2="55"/><line x1="240" y1="55" x2="321" y2="83"/><line x1="240" y1="135" x2="321" y2="107"/><line x1="240" y1="135" x2="321" y2="135"/><line x1="240" y1="135" x2="321" y2="163"/><line x1="240" y1="215" x2="321" y2="187"/><line x1="240" y1="215" x2="321" y2="215"/><line x1="240" y1="215" x2="321" y2="243"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="12" y="117" width="92" height="36" rx="6"/><rect x="168" y="40" width="72" height="30" rx="6"/><rect x="168" y="120" width="72" height="30" rx="6"/><rect x="168" y="200" width="72" height="30" rx="6"/></g><g fill="var(--vurgu)"><circle cx="328" cy="27" r="7"/><circle cx="328" cy="55" r="7"/><circle cx="328" cy="83" r="7"/><circle cx="328" cy="107" r="7"/><circle cx="328" cy="135" r="7"/><circle cx="328" cy="163" r="7"/><circle cx="328" cy="187" r="7"/><circle cx="328" cy="215" r="7"/><circle cx="328" cy="243" r="7"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="58" y="140">Ana boru</text><text x="204" y="60">Kol</text><text x="204" y="140">Kol</text><text x="204" y="220">Kol</text></g><g fill="currentColor" font-size="15"><text x="346" y="120">Her nokta bir hortumdur.</text><text x="346" y="145">Her hortuma 3 damlatıcı</text><text x="346" y="170">bağlıdır.</text></g></svg>`,
  secenekler: ["81", "39", "27", "9"],
  dogru: 2,
  hatalar: [
    "81: Bir dallanmayı fazla sayma: 3^{4} = 81 alınmış. Şemada üç dallanma vardır; ana borunun kendisi bir dallanma değildir.",
    "39: Sorulanı karıştırma: 3 kol + 9 hortum + 27 damlatıcı = 39 sayısı düzenekteki bütün parçaların sayısıdır.",
    null,
    "9: Son dallanmayı saymama: 3 · 3 = 3^{2} = 9 bulunup hortumlarda kalınmış, damlatıcılara geçilmemiş."
  ],
  aciklama: `Her adımda aynı sayıyla çarpılan bir sayma işinde sonuç üslü ifadeyle yazılır.
Adım 1: Ana borudan 3 kol çıkar: 3 = 3^{1} kol.
Adım 2: Her kol 3 hortuma ayrılır: 3 · 3 = 3^{2} = 9 hortum.
Adım 3: Her hortuma 3 damlatıcı bağlıdır: 9 · 3 = 3^{3} = 27 damlatıcı.
Sağlama: Üç dallanma olduğu için taban 3, üs 3'tür: 3^{3} = 27.
Sık yapılan hata: Bütün parçaları toplamak. 3 + 9 + 27 = 39 sayısı kol, hortum ve damlatıcıların toplamıdır; soru yalnızca damlatıcı sayısını istiyor.
Cevap C.`
},
{
  id: "mat-ui-203",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir kek tarifinde kullanılacak kabartma tozu mutfak terazisinde tartılmıştır. Terazinin ekranında kütle, 10'un tam sayı kuvvetleriyle çözümlenmiş olarak 7 · 10^{0} + 5 · 10^{-1} + 2 · 10^{-3} gram biçiminde görünmektedir.\n**Buna göre tartılan kabartma tozunun kütlesi kaç gramdır?**",
  gorsel: null,
  secenekler: ["7,502", "7,52", "75,02", "752"],
  dogru: 0,
  hatalar: [
    null,
    "7,52: Boş kalan basamağa 0 yazmayı unutma. Çözümlemede 10^{-2} terimi yoktur, öyleyse yüzde birler basamağında 0 vardır. 7,52 sayısının çözümlemesi 7 · 10^{0} + 5 · 10^{-1} + 2 · 10^{-2} olurdu.",
    "75,02: Birler basamağını onlar basamağı sanma: 7 · 10^{0} = 7'dir, 70 değil.",
    "752: Negatif üsleri yok sayıp rakamları yan yana yazma. 10^{-1} ve 10^{-3} basamakları virgülün sağında yer alır."
  ],
  aciklama: `Çözümlemedeki her terim, bir rakam ile o rakamın basamağının değerinin çarpımıdır. Terimleri tek tek ondalık gösterime çevirip toplamak yeterlidir.
Adım 1: 7 · 10^{0} = 7 · 1 = 7.
Adım 2: 5 · 10^{-1} = 5 · 0,1 = 0,5.
Adım 3: 2 · 10^{-3} = 2 · 0,001 = 0,002.
Adım 4: Topla: 7 + 0,5 + 0,002 = 7,502.
Sağlama: Basamakları sırala: birler 7, onda birler 5, yüzde birler 0, binde birler 2. Sayı 7,502'dir.
Sık yapılan hata: Çözümlemede bulunmayan basamağı atlayıp 7,52 yazmak. Yüzde birler terimi yazılmadığına göre o basamakta 0 vardır.
Cevap A.`
},
{
  id: "mat-ui-204",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okulun bahçesinde yağmur suyu toplayan iki depo bulunmaktadır. Yağışlı bir haftanın sonunda birinci depoda 2,4 · 10^{4} litre, ikinci depoda 6 · 10^{3} litre su birikmiştir.\n**Buna göre iki depodaki toplam su miktarının bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["8,4 · 10^{4}", "3 · 10^{4}", "2,46 · 10^{4}", "3 · 10^{3}"],
  dogru: 1,
  hatalar: [
    "8,4 · 10^{4}: 10'un kuvvetleri farklıyken başkatsayıları doğrudan toplama: 2,4 + 6 = 8,4 alınmış. Bu sonuç 84 000 litre demektir.",
    null,
    "2,46 · 10^{4}: Sayıları aynı kuvvete getirirken virgülü fazla kaydırma. 6 · 10^{3} = 0,6 · 10^{4}'tür, 0,06 · 10^{4} değildir.",
    "3 · 10^{3}: Toplamı doğru bulup kuvveti yanlış yazma. 30 000 sayısı 3 · 10^{4}'tür; 3 · 10^{3} = 3000 eder."
  ],
  aciklama: `Bilimsel gösterimle yazılmış iki sayı toplanırken önce ikisi de 10'un aynı kuvveti cinsinden yazılır; sonra başkatsayılar toplanır.
Adım 1: Küçük üslü sayıyı büyüğün kuvvetine çevir: 6 · 10^{3} = 0,6 · 10^{4}. Başkatsayı 10'a bölündü, bu yüzden üs 1 arttı.
Adım 2: Başkatsayıları topla: 2,4 + 0,6 = 3. Toplam su 3 · 10^{4} litredir.
Adım 3: Sonucun bilimsel gösterime uygunluğunu denetle: 3 sayısı 1 ile 10 arasındadır, uygundur.
Sağlama: 24 000 + 6000 = 30 000 = 3 · 10^{4}.
Sık yapılan hata: Kuvvetleri eşitlemeden başkatsayıları toplamak. 2,4 + 6 = 8,4 sonucu 84 000 litre demektir; oysa depolardaki su 30 000 litredir.
Cevap B.`
},
{
  id: "mat-ui-205",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Mutfakta kullanılan haşhaş tohumlarının her birinin kütlesi yaklaşık 0,00025 gramdır.\n**Buna göre bir haşhaş tohumunun kütlesinin bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2,5 · 10^{-5}", "25 · 10^{-5}", "2,5 · 10^{-4}", "2,5 · 10^{-3}"],
  dogru: 2,
  hatalar: [
    "2,5 · 10^{-5}: Virgülü bir basamak fazla kaydırma: 2,5 · 10^{-5} = 0,000025'tir.",
    "25 · 10^{-5}: Değeri 0,00025'tir ama bilimsel gösterim değildir; başkatsayı 1 ile 10 arasında olmalıdır, 25 ise 10'dan büyüktür.",
    null,
    "2,5 · 10^{-3}: Virgülü bir basamak eksik kaydırma: 2,5 · 10^{-3} = 0,0025'tir."
  ],
  aciklama: `Bilimsel gösterimde sayı a · 10^{n} biçiminde yazılır; a, 1 ile 10 arasında bir sayıdır (1 ≤ a < 10). 1'den küçük sayılarda üs negatif olur.
Adım 1: Başkatsayıyı bul. 0,00025 sayısındaki ilk sıfırdan farklı rakam 2'dir; virgülü onun hemen arkasına koy: 2,5.
Adım 2: Virgülün kaç basamak kaydığını say: 0,00025 → 0,0025 → 0,025 → 0,25 → 2,5. Virgül 4 basamak sağa kaydı.
Adım 3: Virgül sağa kaydığı için üs negatiftir: 0,00025 = 2,5 · 10^{-4}.
Sağlama: 2,5 · 10^{-4} = [[2,5|10 000]] = 0,00025.
Sık yapılan hata: 25 · 10^{-5} yazmak. Bu ifadenin değeri doğrudur ama başkatsayı 10'dan büyük olduğu için bilimsel gösterim sayılmaz.
Cevap C.`
},
{
  id: "mat-ui-206",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Ece, matematik defterine üslü ifadelerle bir bölme işlemi yazmıştır: 2^{-3} sayısı 2^{-5} sayısına bölünecektir.\n**Buna göre bu bölme işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["256", "4", "[[1|4]]", "[[1|256]]"],
  dogru: 1,
  hatalar: [
    "256: Üsleri çıkarırken eksi işaretlerini yok sayma: 5 + 3 = 8 alınıp 2^{8} = 256 bulunmuş.",
    null,
    "[[1|4]]: Üsleri ters yönde çıkarma: (−5) − (−3) = −2 alınmış. Bölmede payın üssünden paydanın üssü çıkarılır.",
    "[[1|256]]: Bölmede üsleri çıkarmak yerine toplama: (−3) + (−5) = −8 alınıp 2^{-8} bulunmuş."
  ],
  aciklama: `Aynı tabanlı üslü sayılar bölünürken taban aynen yazılır, payın üssünden paydanın üssü çıkarılır: a^{n} ÷ a^{m} = a^{n-m}.
Adım 1: Kuralı uygula: 2^{-3} ÷ 2^{-5} = 2^{(−3)−(−5)}.
Adım 2: Üsteki işlemi yap. Negatif bir sayıyı çıkarmak onu toplamak demektir: (−3) − (−5) = −3 + 5 = 2.
Adım 3: Sonucu hesapla: 2^{2} = 4.
Sağlama: 2^{-3} = [[1|8]] ve 2^{-5} = [[1|32]]. Kesirlerde bölme, ikinciyi ters çevirip çarpmaktır: [[1|8]] · [[32|1]] = [[32|8]] = 4.
Sık yapılan hata: Negatif bir sayı çıkarılırken işaret değişimini atlamak.
Cevap B.`
},
{
  id: "mat-ui-207",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir sağlık sitesinde, düzenli spor yapan bir kişinin bir yıl içinde gerçekleşen kalp atışı sayısı ile bir yılda attığı adım sayısı bilimsel gösterimle verilmiştir. Bu değerler aşağıdaki tabloda gösterilmiştir.\n**Buna göre bu kişinin bir yıldaki kalp atışı sayısı, bir yılda attığı adım sayısının kaç katıdır?**",
  gorsel: `<table class="tablo"><tr><th>Ölçüm</th><th>Bir yıldaki sayı</th></tr><tr><td>Kalp atışı</td><td>3,6 · 10<sup>7</sup></td></tr><tr><td>Atılan adım</td><td>4,5 · 10<sup>6</sup></td></tr></table>`,
  secenekler: ["0,125", "0,8", "8", "80"],
  dogru: 2,
  hatalar: [
    "0,125: Bölmeyi ters yönde yapma. Adım sayısı kalp atışı sayısına bölünmüş; oysa büyük değer küçüğe bölünür.",
    "0,8: 10'un kuvvetlerini hesaba katmama. Yalnızca 3,6 ÷ 4,5 = 0,8 işlemi yapılmış, üsler bölünmemiş.",
    null,
    "80: Üsleri çıkarırken hata yapma: 10^{7} ÷ 10^{6} = 10^{1}'dir, 10^{2} değildir."
  ],
  aciklama: `"Kaç katıdır?" sorusunda büyük değer küçük değere bölünür. Bilimsel gösterimde bölme yapılırken başkatsayılar bölünür, 10'un üsleri çıkarılır.
Adım 1: İşlemi kur: (3,6 · 10^{7}) ÷ (4,5 · 10^{6}).
Adım 2: Başkatsayıları böl: 3,6 ÷ 4,5 = 36 ÷ 45 = 0,8.
Adım 3: 10'un kuvvetlerini böl: 10^{7} ÷ 10^{6} = 10^{7-6} = 10^{1} = 10.
Adım 4: İki sonucu çarp: 0,8 · 10 = 8. Kalp atışı sayısı, adım sayısının 8 katıdır.
Sağlama: Sayıları aç: 36 000 000 ÷ 4 500 000 = 8.
Sık yapılan hata: Yalnızca başkatsayıları bölüp 0,8 demek. Bu sonuç kalp atışının adımdan az olduğu anlamına gelirdi; oysa tablodaki üslere bakınca kalp atışının çok daha fazla olduğu görülür.
Cevap C.`
},
{
  id: "mat-ui-208",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "Okulun müzik kulübü, hazırladığı tanıtım videosunu pazartesi günü paylaşmıştır. Videonun ilk üç gündeki izlenme sayıları aşağıdaki tabloda verilmiştir. İzlenme sayısı, haftanın kalan günlerinde de her gün bir önceki günün 3 katına çıkmaya devam etmiştir.\n**Buna göre video, aynı haftanın cuma günü kaç kez izlenir?**",
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th></tr><tr><td>İzlenme sayısı</td><td>5</td><td>15</td><td>45</td></tr></table>`,
  secenekler: ["135", "405", "605", "1215"],
  dogru: 1,
  hatalar: [
    "135: Bir günü eksik sayma. 5 · 3^{3} = 135 sayısı perşembe gününün izlenme sayısıdır; pazartesiden cumaya 4 kez üçe katlanır.",
    null,
    "605: Sorulanı karıştırma: 5 + 15 + 45 + 135 + 405 = 605 sayısı beş gündeki toplam izlenmedir. Soru yalnızca cuma gününü istiyor.",
    "1215: Bir günü fazla sayma: 5 · 3^{5} = 1215 alınmış; pazartesi günü de üçe katlanmış sayılmış."
  ],
  aciklama: `Her gün aynı sayıyla çarpılan bir büyüklükte, geçen gün sayısı üs olur.
Adım 1: Pazartesi izlenme 5'tir ve henüz hiç katlanma olmamıştır: 5 · 3^{0} = 5.
Adım 2: Tabloyla kuralı doğrula: salı 5 · 3^{1} = 15, çarşamba 5 · 3^{2} = 45. Tablo bunu doğruluyor.
Adım 3: Pazartesiden cumaya 4 gün geçer: perşembe 5 · 3^{3}, cuma 5 · 3^{4} olur.
Adım 4: Hesapla: 3^{4} = 81 ve 5 · 81 = 405.
Sağlama: 45 (çarşamba) · 3 = 135 (perşembe) ve 135 · 3 = 405 (cuma).
Sık yapılan hata: Pazartesiyi de bir katlanma saymak. Pazartesi başlangıç günü olduğu için üs 0'dır.
Cevap B.`
},
{
  id: "mat-ui-209",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kırtasiyede bir defterin fiyatı 38,64 TL'dir. Öğretmen bu fiyatın 10'un tam sayı kuvvetleriyle çözümlenmiş biçimini tahtaya yazmış, sonra iki terimin üzerini kapatıp bunları K ve L harfleriyle göstermiştir. Tahtaya yazılanlar aşağıda verilmiştir.\n**Buna göre K ve L terimlerinin değerleri toplamı kaçtır?**",
  gorsel: `<svg viewBox="0 0 520 150" role="img" aria-label="Tahtada yazan çözümleme: 38,64 eşittir 3 çarpı 10 üssü 1 artı K artı 6 çarpı 10 üssü eksi 1 artı L"><rect x="12" y="14" width="496" height="122" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="34" y="66" font-size="22" fill="currentColor">38,64 = 3 · 10<tspan font-size="15" dy="-10">1</tspan><tspan dy="10"> + </tspan><tspan fill="var(--vurgu)" font-weight="bold">K</tspan><tspan> + 6 · 10</tspan><tspan font-size="15" dy="-10">−1</tspan><tspan dy="10"> + </tspan><tspan fill="var(--vurgu)" font-weight="bold">L</tspan></text><text x="34" y="110" font-size="16" fill="currentColor">K ve L: üzeri kapatılan terimler</text></svg>`,
  secenekler: ["12", "8,4", "8,04", "0,84"],
  dogru: 2,
  hatalar: [
    "12: Basamak değerleri yerine yalnızca rakamları toplama: 8 + 4 = 12 alınmış. Oysa 4 rakamı yüzde birler basamağındadır.",
    "8,4: 4 rakamını onda birler basamağına koyma: 8 + 0,4 = 8,4 bulunmuş. Oysa onda birler basamağı zaten 6 · 10^{-1} teriminde kullanılmıştır.",
    null,
    "0,84: İki terimi de bir basamak sağa kaydırma: 8 · 10^{-1} + 4 · 10^{-2} = 0,84 alınmış. Oysa 8 rakamı birler basamağındadır."
  ],
  aciklama: `Çözümlemede terimler soldan sağa, basamak kuvvetleri birer azalacak biçimde sıralanır.
Adım 1: Fiyatın basamaklarını yaz: 38,64 sayısında 3 onlar, 8 birler, 6 onda birler, 4 yüzde birler basamağındadır.
Adım 2: Tahtadaki terimleri basamaklarla eşleştir. Birinci terim 3 · 10^{1} onlar basamağını, üçüncü terim 6 · 10^{-1} onda birler basamağını gösteriyor.
Adım 3: Geriye kalan basamakları yerleştir. K, birler basamağının terimidir: K = 8 · 10^{0} = 8. L ise yüzde birler basamağının terimidir: L = 4 · 10^{-2} = 0,04.
Adım 4: Topla: 8 + 0,04 = 8,04.
Sağlama: 30 + 8 + 0,6 + 0,04 = 38,64.
Sık yapılan hata: Terimlerin değerleri yerine yalnızca rakamlarını toplamak. 8 + 4 = 12 sonucu basamak değerlerini yok sayar.
Cevap C.`
},
{
  id: "mat-ui-210",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir ailenin evinde bir yıl boyunca kullandığı elektrik enerjisi 5,4 · 10^{6} vatsaattir. Matematik ödevinde dört öğrenciden bu sayıyı, 10'un farklı bir tam sayı kuvvetini kullanarak yeniden yazmaları istenmiştir. Öğrencilerin yazdıkları aşağıdaki tabloda verilmiştir.\n**Buna göre hangi öğrencinin yazdığı ifade __yanlıştır__?**",
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Yazdığı ifade</th></tr><tr><td>Ada</td><td>540 · 10<sup>3</sup></td></tr><tr><td>Bora</td><td>54 · 10<sup>5</sup></td></tr><tr><td>Cem</td><td>0,54 · 10<sup>7</sup></td></tr><tr><td>Derin</td><td>5400 · 10<sup>3</sup></td></tr></table>`,
  secenekler: ["Ada", "Bora", "Cem", "Derin"],
  dogru: 0,
  hatalar: [
    null,
    "Bora'nın ifadesi doğrudur: başkatsayı 10 katına çıkarken üs 1 azalır ve 54 · 10^{5} = 5 400 000 eder.",
    "Cem'in ifadesi doğrudur: başkatsayı 10'a bölünürken üs 1 artar ve 0,54 · 10^{7} = 5 400 000 eder.",
    "Derin'in ifadesi doğrudur: başkatsayı 1000 katına çıkarken üs 3 azalır ve 5400 · 10^{3} = 5 400 000 eder."
  ],
  aciklama: `Bir sayıyı 10'un farklı kuvvetleriyle yazarken başkatsayı ile üs birbirini dengeler: başkatsayı 10 katına çıkarsa üs 1 azalır, başkatsayı 10'a bölünürse üs 1 artar.
Adım 1: Sayıyı aç: 5,4 · 10^{6} = 5 400 000.
Adım 2: Ada: 540 · 10^{3} = 540 · 1000 = 540 000. Bu sayı 5 400 000 değildir; Ada yanlış yazmıştır. Doğrusu 540 · 10^{4} olurdu.
Adım 3: Bora: 54 · 10^{5} = 54 · 100 000 = 5 400 000. Doğrudur.
Adım 4: Cem: 0,54 · 10^{7} = 0,54 · 10 000 000 = 5 400 000. Doğrudur. Derin: 5400 · 10^{3} = 5400 · 1000 = 5 400 000. Doğrudur.
Sık yapılan hata: Başkatsayıyı büyütürken üssü aynı oranda azaltmayı unutmak. 5,4 sayısından 540 sayısına geçerken başkatsayı 100 katına çıktığı için üs 6'dan 4'e inmelidir.
Cevap A.`
},
{
  id: "mat-ui-211",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 3,
  soru: "Matematik öğretmeni tahtaya aşağıdaki şemayı çizmiştir. Şemada her kutudaki sayı, hemen altındaki iki kutuda yazan sayıların çarpımına eşittir. En alt sıradaki üç sayı şemada verilmiş, üstteki kutular boş bırakılmıştır.\n**Buna göre en üstteki kutuya yazılması gereken sayı aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 480 260" role="img" aria-label="Çarpım şeması: en alt sırada 2 üssü 5, 2 üssü eksi 2 ve 2 üssü 4; üstlerindeki kutular boş"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="65" y1="200" x2="145" y2="159"/><line x1="220" y1="200" x2="145" y2="159"/><line x1="220" y1="200" x2="300" y2="159"/><line x1="375" y1="200" x2="300" y2="159"/><line x1="145" y1="115" x2="220" y2="74"/><line x1="300" y1="115" x2="220" y2="74"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="20" y="200" width="90" height="44" rx="6"/><rect x="175" y="200" width="90" height="44" rx="6"/><rect x="330" y="200" width="90" height="44" rx="6"/><rect x="100" y="115" width="90" height="44" rx="6"/><rect x="255" y="115" width="90" height="44" rx="6"/><rect x="175" y="30" width="90" height="44" rx="6"/></g><g fill="currentColor" font-size="22" font-weight="bold" text-anchor="middle"><text x="65" y="230">2<tspan font-size="15" dy="-10">5</tspan></text><text x="220" y="230">2<tspan font-size="15" dy="-10">−2</tspan></text><text x="375" y="230">2<tspan font-size="15" dy="-10">4</tspan></text></g><text x="220" y="62" font-size="26" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text></svg>`,
  secenekler: ["2^{1}", "2^{5}", "2^{7}", "2^{13}"],
  dogru: 1,
  hatalar: [
    "2^{1}: En üstteki kutuda çarpma yerine çıkarma yapma. Ortadaki kutuların üsleri 3 ve 2 iken 3 − 2 = 1 alınmış; oysa çarpmada üsler toplanır.",
    null,
    "2^{7}: Ortadaki 2^{-2} sayısını bir kez sayma: 5 + (−2) + 4 = 7 alınmış. Oysa bu sayı iki çarpıma birden girdiği için üssü iki kez toplanır.",
    "2^{13}: Negatif üssü görmezden gelme. 2^{-2} yerine 2^{2} alınmış; 5 + 2 = 7 ve 2 + 4 = 6 bulunup 7 + 6 = 13 elde edilmiş."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken taban aynen yazılır, üsler toplanır: a^{n} · a^{m} = a^{n+m}. Negatif üs de bu toplamaya olduğu gibi katılır.
Adım 1: Ortadaki sol kutuyu bul: 2^{5} · 2^{-2} = 2^{5+(−2)} = 2^{3}.
Adım 2: Ortadaki sağ kutuyu bul: 2^{-2} · 2^{4} = 2^{(−2)+4} = 2^{2}.
Adım 3: En üstteki kutuyu bul: 2^{3} · 2^{2} = 2^{3+2} = 2^{5}.
Sağlama: 2^{3} = 8 ve 2^{2} = 4'tür; 8 · 4 = 32 = 2^{5}.
Sık yapılan hata: Alttaki üç üssü bir kez toplamak. Ortadaki kutu iki çarpıma birden girdiği için üssü iki kez toplanmalıdır: 5 + (−2) + (−2) + 4 = 5.
Cevap B.`
},
{
  id: "mat-ui-212",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okul kütüphanesine alınan hava temizleme cihazının filtresi, çapı 2,5 · 10^{-6} metreden büyük olan bütün tanecikleri tutmaktadır. Kütüphanenin havasında bulunan dört tanecik türünün çapları aşağıdaki tabloda verilmiştir.\n**Buna göre filtre, tablodaki taneciklerden kaç türünü tutar?**",
  gorsel: `<table class="tablo"><tr><th>Tanecik</th><th>Çap (m)</th></tr><tr><td>Polen</td><td>3,5 · 10<sup>−5</sup></td></tr><tr><td>İnce toz</td><td>9 · 10<sup>−7</sup></td></tr><tr><td>Küf sporu</td><td>4 · 10<sup>−6</sup></td></tr><tr><td>Duman zerresi</td><td>8 · 10<sup>−8</sup></td></tr></table>`,
  secenekler: ["4", "3", "2", "1"],
  dogru: 2,
  hatalar: [
    "4: Tanecikleri sınırla karşılaştırmadan hepsini sayma. İnce toz ile duman zerresinin çapı, filtrenin tuttuğu boyuttan küçüktür.",
    "3: Yalnızca başkatsayılara bakma. 9 > 2,5 olduğu için ince tozun çapı büyük sanılmış; oysa 9 · 10^{-7} = 0,9 · 10^{-6}'dır.",
    null,
    "1: Üsleri eşit olan sayıları karşılaştırmayı atlama. Küf sporunun çapında da 10^{-6} vardır ve 4 > 2,5 olduğu için filtre onu da tutar."
  ],
  aciklama: `Negatif üslü bilimsel gösterimlerde de önce 10'un üssüne bakılır; üssü büyük olan sayı büyüktür (−5 > −6 > −7 > −8). Üsler eşitse başkatsayılar karşılaştırılır.
Adım 1: Karşılaştırmayı kolaylaştırmak için hepsini 10^{-6} cinsinden yaz: polen 3,5 · 10^{-5} = 35 · 10^{-6}; ince toz 9 · 10^{-7} = 0,9 · 10^{-6}; küf sporu 4 · 10^{-6}; duman zerresi 8 · 10^{-8} = 0,08 · 10^{-6}.
Adım 2: Sınırla karşılaştır. Filtre 2,5 · 10^{-6} metreden büyük olanları tutar: 35 > 2,5 ve 4 > 2,5 olduğundan polen ile küf sporu tutulur.
Adım 3: Kalanlara bak: 0,9 < 2,5 ve 0,08 < 2,5 olduğundan ince toz ile duman zerresi tutulmaz.
Adım 4: Filtrenin tuttuğu tanecik türü sayısı 2'dir.
Sık yapılan hata: Yalnızca başkatsayılara bakmak. 9 sayısı 2,5'ten büyüktür ama 9 · 10^{-7} sayısı 2,5 · 10^{-6} sayısından küçüktür.
Cevap C.`
}
);
