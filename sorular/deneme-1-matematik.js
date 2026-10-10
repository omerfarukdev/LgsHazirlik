// Aylık Deneme 1 — Matematik (20 soru): Çarpanlar ve Katlar (10) + Üslü İfadeler (10)
window.LGS_DENEME = window.LGS_DENEME || {};
(window.LGS_DENEME["deneme-1"] = window.LGS_DENEME["deneme-1"] || []).push(
{
  id: "dn1-mat-01",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.2",
  zorluk: 2,
  soru: "**2^{3} · 2^{-1} + 2^{0} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["4", "5", "6", "17"],
  dogru: 1,
  hatalar: [
    "Sıfırıncı kuvvet hatası: 2^{0} değeri 0 sanıldı, oysa 0 dışındaki her sayının sıfırıncı kuvveti 1'dir.",
    null,
    "Sıfırıncı kuvvet hatası: 2^{0} değeri tabana eşit (2) sanıldı.",
    "Üs kuralı hatası: aynı tabanlı çarpmada üsler toplanmalıyken 3 − (−1) = 4 alınıp 2^{4} = 16 bulundu."
  ],
  aciklama: `Sıfırıncı kuvvet kuralı: 0 dışındaki her sayının sıfırıncı kuvveti 1'dir. Aynı tabanlı üslü ifadeler çarpılırken taban korunur, üsler toplanır.
Adım 1: 2^{3} · 2^{-1} = 2^{3 + (−1)} = 2^{2} = 4.
Adım 2: 2^{0} = 1 olduğundan işlem 4 + 1 olur.
Adım 3: 4 + 1 = 5.
Sağlama: 2^{3} = 8 ve 2^{-1} = [[1|2]] olduğundan 8 · [[1|2]] = 4 çıkar; 4 + 1 = 5.
Sık yapılan hata: 2^{0} değerini 0 ya da 2 sanmak.
Cevap B.`
},
{
  id: "dn1-mat-02",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.2",
  zorluk: 2,
  soru: "Bir mağaza, açılış gününe özel bir çekiliş düzenlemiştir. Müşterilere 100'den 200'e kadar (100 ve 200 dâhil) numaralı biletler dağıtılmıştır. Numarası **hem** 5'in **hem** de 9'un katı olan biletler hediye kazanacaktır.\n**Buna göre kaç bilet hediye kazanır?**",
  gorsel: null,
  secenekler: ["2", "11", "21", "32"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca 9'un katları sayıldı: 100 ile 200 arasında 9'un 11 katı vardır, ama bunların hepsi 5'in katı değildir.",
    "Yalnızca 5'in katları sayıldı: 100 ile 200 arasında 5'in 21 katı vardır, ama bunların hepsi 9'un katı değildir.",
    "İki sayının katları ayrı ayrı sayılıp toplandı (21 + 11); \"hem … hem\" koşulu için ortak katlar bulunmalıydı."
  ],
  aciklama: `Hem 5'in hem 9'un katı olan sayılar, 5 ile 9'un ortak katlarıdır. Ortak katlar da en küçük ortak katın (EKOK) katlarıdır.
Adım 1: 5 ile 9 aralarında asal olduğundan EKOK(5, 9) = 5 · 9 = 45.
Adım 2: 45'in katlarını yaz: 45 · 2 = 90 (100'den küçük), 45 · 3 = 135, 45 · 4 = 180, 45 · 5 = 225 (200'den büyük).
Adım 3: 100 ile 200 arasında kalanlar 135 ve 180'dir; yani 2 bilet.
Sağlama: 135 = 5 · 27 = 9 · 15 ve 180 = 5 · 36 = 9 · 20.
Sık yapılan hata: Katları ayrı ayrı sayıp toplamak; bu "ya da" koşulunun işidir, "hem … hem" ise ortak kat ister.
Cevap A.`
},
{
  id: "dn1-mat-03",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.5",
  zorluk: 3,
  soru: "Bir tarım bakanlığı, ülkenin yıllık buğday üretimini ve nüfusunu aşağıdaki tabloda duyurmuştur. Bakanlık, üretimin tamamının yurt içinde tüketildiğini ve her kişiye eşit miktarda pay düştüğünü varsayarak kişi başına düşen miktarı hesaplamak istemektedir.\n**Buna göre kişi başına düşen buğday miktarı yılda kaç kilogramdır?**",
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>Değer</th></tr><tr><td>Yıllık buğday üretimi</td><td>2,4 · 10<sup>7</sup> ton</td></tr><tr><td>Nüfus</td><td>8 · 10<sup>7</sup> kişi</td></tr><tr><td>Birim bilgisi</td><td>1 ton = 1000 kg</td></tr></table>`,
  secenekler: ["0,03", "0,3", "30", "300"],
  dogru: 3,
  hatalar: [
    "Üs hatası: nüfusun 10'un kuvveti 10^{8} sanılarak 2,4 ÷ 8 = 0,3 ve 10^{7} ÷ 10^{8} = 10^{-1} alındı; sonuç da kilograma çevrilmedi.",
    "Birim çevirmeme: 2,4 · 10^{7} ÷ 8 · 10^{7} = 0,3 ton bulundu ve kilograma çevrilmeden bırakıldı.",
    "Birim hatası: 1 ton 100 kg sanılarak 0,3 ton → 30 kg bulundu; oysa 1 ton = 1000 kg'dır.",
    null
  ],
  aciklama: `Büyük sayılar bilimsel gösterimle verildiğinde bölme yapılırken sayılar kendi aralarında, 10'un kuvvetleri de kendi aralarında işleme girer (aynı tabanlı bölmede üsler çıkarılır).
Adım 1: Üretimi kilograma çevir. 2,4 · 10^{7} ton = 2,4 · 10^{7} · 10^{3} kg = 2,4 · 10^{10} kg.
Adım 2: Kişi başına düşen miktar = (2,4 · 10^{10}) ÷ (8 · 10^{7}).
Adım 3: 2,4 ÷ 8 = 0,3 ve 10^{10} ÷ 10^{7} = 10^{3} olduğundan sonuç 0,3 · 10^{3} = 300 kg.
Sağlama: Ton cinsinden bölersen 0,3 ton bulursun; 0,3 ton = 300 kg'dır.
Sık yapılan hata: Sonucu ton cinsinden bırakmak ya da 1 ton'u 1000 kg yerine 100 kg almak.
Cevap D.`
},
{
  id: "dn1-mat-04",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.2",
  zorluk: 2,
  soru: "Bir maket yapımcısı, iki ayrı rayı uç uca eklenen hazır parçalarla oluşturacaktır. Birinci rayda yalnızca 18 cm'lik, ikinci rayda yalnızca 24 cm'lik parçalar kullanılacaktır. Parçalar kesilmeyecek ve iki ray tam aynı uzunlukta olacaktır.\n**Buna göre bir rayın uzunluğu en az kaç santimetre olabilir?**",
  gorsel: `<svg viewBox="0 0 540 160" role="img" aria-label="Birinci rayda 18 cm'lik parçalar, ikinci rayda 24 cm'lik parçalar uç uca eklenmektedir. İki rayın sonu aynı hizadadır."><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="20" y="40" width="63" height="30"/><rect x="83" y="40" width="63" height="30"/><rect x="146" y="40" width="63" height="30"/><rect x="20" y="105" width="84" height="30"/><rect x="104" y="105" width="84" height="30"/><rect x="188" y="105" width="84" height="30"/></g><g stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"><line x1="215" y1="55" x2="500" y2="55"/><line x1="278" y1="120" x2="500" y2="120"/><line x1="500" y1="30" x2="500" y2="145" stroke="var(--vurgu)"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="51" y="60">18 cm</text><text x="114" y="60">18 cm</text><text x="177" y="60">18 cm</text><text x="62" y="125">24 cm</text><text x="146" y="125">24 cm</text><text x="230" y="125">24 cm</text></g><g fill="currentColor" font-size="16"><text x="20" y="28">1. ray</text><text x="20" y="93">2. ray</text><text x="492" y="156" text-anchor="end">İki rayın sonu aynı hizada</text></g></svg>`,
  secenekler: ["6", "42", "72", "432"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK karıştırıldı: 6, 18 ile 24'ün en büyük ortak bölenidir; iki rayın uzunluğunun eşit olması ortak kat ister.",
    "Uzunluklar toplandı (18 + 24 = 42); 42 ne 18'in ne de 24'ün katıdır.",
    null,
    "Uzunluklar çarpıldı (18 · 24 = 432); 432 ortak kattır ama en küçük ortak kat değildir."
  ],
  aciklama: `Parçalar kesilmediği için bir rayın uzunluğu, kullanılan parça uzunluğunun katıdır. İki ray aynı uzunlukta olacağına göre bu uzunluk hem 18'in hem 24'ün katıdır; "en az" dendiği için en küçük ortak kat (EKOK) aranır.
Adım 1: 18 = 2 · 3^{2} ve 24 = 2^{3} · 3 olarak asal çarpanlarına ayır.
Adım 2: EKOK'ta her asal çarpanın en büyük üssü alınır: 2^{3} · 3^{2} = 8 · 9 = 72.
Adım 3: Bir rayda 72 ÷ 18 = 4 parça, diğerinde 72 ÷ 24 = 3 parça kullanılır.
Sağlama: 72'den küçük ortak kat yoktur; 18'in katları 18, 36, 54, 72; 24'ün katları 24, 48, 72 şeklinde ilk kez 72'de buluşur.
Sık yapılan hata: EBOB (6) ile EKOK'u (72) karıştırmak.
Cevap C.`
},
{
  id: "dn1-mat-05",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.3",
  zorluk: 3,
  soru: "Bir okul kütüphanesindeki dolaplar 11'den 25'e kadar (11 ve 25 dâhil) numaralanmıştır. Kütüphane görevlisi, bayram öncesi kitap düzenlemesi için şu kuralı koymuştur: Numarası 18 ile aralarında asal olan dolapların kapağına yeni etiket yapıştırılacaktır, diğerlerine yapıştırılmayacaktır.\n**Buna göre etiket yapıştırılacak dolap sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["6", "8", "10", "15"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca tek sayılar sayıldı (11, 13, 15, 17, 19, 21, 23, 25); 15 ve 21, 18 ile 3'ten ortak bölünür.",
    "Yalnızca 3'ün katları elendi; çift sayılar da 18 ile ortak çarpan (2) paylaştığı için elenmeliydi.",
    "Koşul hiç uygulanmadı: 11'den 25'e kadar bütün dolaplar (15 tane) sayıldı."
  ],
  aciklama: `İki sayı, 1 dışında ortak çarpan paylaşmıyorsa aralarında asaldır (EBOB'ları 1'dir).
Adım 1: 18 = 2 · 3^{2}. Yani 18'in asal çarpanları 2 ve 3'tür.
Adım 2: Bir sayı 18 ile aralarında asal olacaksa 2'ye de 3'e de bölünmemelidir.
Adım 3: 11'den 25'e kadar sayıları ele: 12, 14, 16, 18, 20, 22, 24 çift olduğu için; 15 ve 21 ise 3'e bölündüğü için elenir.
Adım 4: Kalanlar 11, 13, 17, 19, 23, 25 olur; yani 6 dolap.
Sağlama: 25 = 5^{2}; 5 ve 18'in ortak çarpanı yoktur, 25 uygundur.
Sık yapılan hata: Yalnızca çiftleri ya da yalnızca 3'ün katlarını elemek.
Cevap A.`
},
{
  id: "dn1-mat-06",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.2",
  zorluk: 3,
  soru: "Bir mikrobiyoloji laboratuvarında bir besi ortamına 5 bakteri bırakılmıştır. Bakterilerin her biri 20 dakikada bir ikiye bölünerek sayıları kendiliğinden iki katına çıkmaktadır ve hiçbir bakteri ölmemektedir. Laboratuvar görevlisi ortamı bırakıldıktan tam 3 saat sonra incelemiştir.\n**Buna göre ortamda incelendiği anda kaç bakteri vardır?**",
  gorsel: null,
  secenekler: ["40", "512", "1280", "2560"],
  dogru: 3,
  hatalar: [
    "Saat sayısı kullanıldı: 3 saat = 3 bölünme sanılıp 5 · 2^{3} = 40 bulundu; oysa her 20 dakikada bir bölünme olur.",
    "Başlangıç sayısı unutuldu: 2^{9} = 512 bulundu; bu sayı 5 bakterinin değil, 1 bakterinin soyudur.",
    "Bölünme sayısı bir eksik alındı (8): 5 · 2^{8} = 1280; 3 saat = 180 dakika = 9 bölünmedir.",
    null
  ],
  aciklama: `Her bölünmede sayı 2 ile çarpıldığından n bölünme sonunda bakteri sayısı (başlangıç) · 2^{n} olur.
Adım 1: 3 saat = 180 dakika. Her bölünme 20 dakika sürdüğünden 180 ÷ 20 = 9 bölünme olur.
Adım 2: Bakteri sayısı 5 · 2^{9} olur.
Adım 3: 2^{9} = 512 olduğundan 5 · 512 = 2560.
Sağlama: 2^{10} = 1024, yarısı 512 eder; 5 · 512 = 2560.
Sık yapılan hata: Saat sayısını bölünme sayısı sanmak ya da başlangıçtaki 5 bakteriyi çarpmayı unutmak.
Cevap D.`
},
{
  id: "dn1-mat-07",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.2",
  zorluk: 3,
  soru: "Bir okulun kitap şenliğinde sergilenecek kitaplar tezgâhlara dizilecektir. Görevli kitapları önce her tezgâha 6 kitap koyarak dizmiş; son tezgâhta yalnızca 4 kitap kalmıştır. Ardından aynı kitapları her tezgâha 8 kitap koyarak yeniden dizmiş; bu kez de son tezgâhta yalnızca 6 kitap kalmıştır. Sergideki kitap sayısı 100'den çok, 140'tan azdır.\n**Buna göre sergide kaç kitap vardır?**",
  gorsel: null,
  secenekler: ["94", "118", "120", "122"],
  dogru: 1,
  hatalar: [
    "Aralık koşulu denetlenmedi: 94 = 24 · 4 − 2 kalan koşullarını sağlar ama 100'den azdır.",
    null,
    "EKOK'un katı doğrudan alındı (24 · 5 = 120); 120 sayısı 6'ya ve 8'e tam bölünür, kalanlar 4 ve 6 olmaz.",
    "Eksik, fazla sanıldı: 24 · 5 + 2 = 122 alındı; 122 sayısı 6'ya bölününce kalan 2, 8'e bölününce kalan 2 olur."
  ],
  aciklama: `Son tezgâhta kalan kitap sayısına bakmak yerine o tezgâhta kaç kitabın eksik olduğuna bakmak işi kolaylaştırır.
Adım 1: 6'lı dizilişte son tezgâhta 4 kitap var, yani 6 − 4 = 2 kitap eksik. 8'li dizilişte son tezgâhta 6 kitap var, yani 8 − 6 = 2 kitap eksik.
Adım 2: Kitap sayısına 2 eklenirse iki dizilişte de bütün tezgâhlar dolar. Demek ki kitap sayısı + 2 hem 6'nın hem 8'in katıdır.
Adım 3: EKOK(6, 8) = 24 olduğundan kitap sayısı + 2, 24'ün katıdır: 24, 48, 72, 96, 120, 144 …
Adım 4: Kitap sayısı 100 ile 140 arasında olduğundan kitap sayısı + 2, 102 ile 142 arasındadır. Bu aralıktaki tek 24 katı 120'dir.
Adım 5: Kitap sayısı = 120 − 2 = 118.
Sağlama: 118 = 6 · 19 + 4 ve 118 = 8 · 14 + 6. İki dizilişte de kalanlar soruda verilenlerle aynıdır.
Sık yapılan hata: Kalan fazla olduğunda sayıdan kalan çıkarılır, kalan eksik olduğunda sayıya eksik eklenir; bu iki durumu karıştırmak.
Cevap B.`
},
{
  id: "dn1-mat-08",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.2",
  zorluk: 2,
  soru: "Bir okulun bahçesindeki musluk bozulmuştur ve saniyede 2 · 10^{-3} litre su damlatmaktadır. Okul görevlisi musluğu tam 10^{4} saniye sonra kapatabilmiştir.\n**Buna göre bu sürede damlayan su miktarı kaç litredir?**",
  gorsel: null,
  secenekler: ["2 · 10^{-12}", "2 · 10^{-7}", "2 · 10^{1}", "2 · 10^{7}"],
  dogru: 2,
  hatalar: [
    "Üsler çarpıldı: (−3) · 4 = −12 alındı; aynı tabanlı çarpmada üsler toplanır.",
    "Üslerin toplanmasında işaret hatası: −3 − 4 = −7 alındı; doğrusu −3 + 4 = 1.",
    null,
    "Negatif üssün işareti göz ardı edildi: 3 + 4 = 7 alındı; oysa üs −3'tür."
  ],
  aciklama: `Damlayan miktar = hız · süre olduğundan (2 · 10^{-3}) · 10^{4} işlemi yapılır. Aynı tabanlı çarpmada taban korunur, üsler toplanır.
Adım 1: 10^{-3} · 10^{4} = 10^{-3 + 4} = 10^{1}.
Adım 2: Katsayı 2 aynen kalır: 2 · 10^{1} = 20 litre.
Sağlama: 2 · 10^{-3} = 0,002 litre; 0,002 · 10 000 = 20 litre.
Sık yapılan hata: Negatif ve pozitif üssü toplarken işareti kaçırmak.
Cevap C.`
},
{
  id: "dn1-mat-09",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.2",
  zorluk: 3,
  soru: "Bir voleybol salonundaki seyirci sayısı üç basamaklı bir doğal sayıdır. Görevliler seyircileri önce 12'şerli sıralar hâlinde dizmiş ve son sırada 5 kişi kalmıştır. Ardından aynı seyircileri 18'erli sıralar hâlinde dizmiş ve yine son sırada 5 kişi kalmıştır.\n**Buna göre salondaki seyirci sayısı en çok kaç olabilir?**",
  gorsel: null,
  secenekler: ["941", "967", "972", "977"],
  dogru: 3,
  hatalar: [
    "Koşulu sağlayan ama en büyük olmayan bir önceki sayı seçildi (977 − 36 = 941); soru en çok değeri sorar.",
    "Kalan çıkarıldı: 972 − 5 = 967 alındı; kalan 5 çıkarılmaz, EKOK'un katına eklenir.",
    "Kalan eklenmedi: 972, 12 ve 18 ile tam bölünür ama kalan 5 olmalıdır.",
    null
  ],
  aciklama: `Bir sayı 12'ye bölündüğünde 5 kalıyorsa, o sayıdan 5 çıkarıldığında 12'nin katı kalır. 18 için de aynısı geçerlidir.
Adım 1: Seyirci sayısına N dersek N − 5 hem 12'nin hem 18'in katıdır. EKOK(12, 18) = 36 olduğundan N − 5, 36'nın katıdır; N = 36k + 5.
Adım 2: N üç basamaklı olduğundan en çok 999 olabilir: 36k + 5 ≤ 999 → 36k ≤ 994.
Adım 3: 36 · 27 = 972 ≤ 994 ve 36 · 28 = 1008 > 994 olduğundan k = 27'dir.
Adım 4: N = 972 + 5 = 977.
Sağlama: 977 = 12 · 81 + 5 ve 977 = 18 · 54 + 5. İkisinde de kalan 5'tir.
Sık yapılan hata: EKOK'un katını (972) cevap sanmak; kalan eklenmezse koşul bozulur.
Cevap D.`
},
{
  id: "dn1-mat-10",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.5",
  zorluk: 3,
  soru: "Bir belediye, şehirdeki iki köprünün bir yıl boyunca kaydedilen araç geçişlerini aşağıdaki tabloda duyurmuştur. Belediye, yeni bir köprü planlarken hangi köprünün ne kadar yoğun kullanıldığını karşılaştırmak istemektedir.\n**Buna göre A köprüsünden bir yılda geçen araç sayısı, B köprüsünden geçen araç sayısının kaç katıdır?**",
  gorsel: `<table class="tablo"><tr><th>Köprü</th><th>Bir yılda geçen araç sayısı</th></tr><tr><td>A köprüsü</td><td>4,5 · 10<sup>6</sup></td></tr><tr><td>B köprüsü</td><td>9 · 10<sup>4</sup></td></tr></table>`,
  secenekler: ["0,5", "5", "50", "500"],
  dogru: 2,
  hatalar: [
    "Üs farkı unutuldu: yalnızca 4,5 ÷ 9 = 0,5 bulundu; 10^{6} ÷ 10^{4} = 10^{2} ile çarpmak gerekirdi.",
    "Üs farkı bir eksik alındı: 0,5 · 10^{1} = 5; oysa 10^{6} ÷ 10^{4} = 10^{2}'dir.",
    null,
    "Katsayıların oranı yanlış alındı: 4,5 ÷ 9 = 0,5 iken 5 sanıldı ve 5 · 10^{2} = 500 bulundu."
  ],
  aciklama: `"Kaç katı" sorusu bölme ile cevaplanır: A'nın değeri ÷ B'nin değeri.
Adım 1: (4,5 · 10^{6}) ÷ (9 · 10^{4}) işlemini yaz.
Adım 2: Katsayıları böl: 4,5 ÷ 9 = 0,5.
Adım 3: Üsleri çıkar: 10^{6} ÷ 10^{4} = 10^{6−4} = 10^{2}.
Adım 4: 0,5 · 10^{2} = 0,5 · 100 = 50.
Sağlama: A = 4 500 000 ve B = 90 000; 4 500 000 ÷ 90 000 = 50.
Sık yapılan hata: Katsayıları bölüp 10'un kuvvetlerini hesaba katmamak.
Cevap C.`
},
{
  id: "dn1-mat-11",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.2",
  zorluk: 2,
  soru: "Bir okulun spor sahasında, aşağıda uzunlukları gösterilen iki çizginin üzerine boya ile işaretler konulacaktır. İşaretler her çizginin iki ucuna da konulacak ve her çizgide ardışık iki işaret arasındaki uzaklık iki çizgide de aynı, metre cinsinden bir tam sayı olacaktır. Bu uzaklık olabilecek en büyük değer seçilmiştir.\n**Buna göre toplam kaç işaret konulur?**",
  gorsel: `<svg viewBox="0 0 540 150" role="img" aria-label="Birinci çizgi 84 metre, ikinci çizgi 126 metre uzunluğundadır"><g stroke="currentColor" stroke-width="3"><line x1="20" y1="50" x2="356" y2="50"/><line x1="20" y1="115" x2="524" y2="115"/></g><g fill="var(--vurgu)"><circle cx="20" cy="50" r="6"/><circle cx="356" cy="50" r="6"/><circle cx="20" cy="115" r="6"/><circle cx="524" cy="115" r="6"/></g><g fill="currentColor" font-size="16"><text x="20" y="32">Çizgi 1: 84 m</text><text x="20" y="97">Çizgi 2: 126 m</text></g></svg>`,
  secenekler: ["5", "7", "12", "42"],
  dogru: 1,
  hatalar: [
    "Uç noktalar sayılmadı: 2 + 3 = 5 aralık sayısı bulundu; n aralık için n + 1 işaret gerekir.",
    null,
    "Aralık en büyük seçilmedi: 21 m alınınca 5 + 7 = 12 işaret gerekir; en büyük ortak bölen 42'dir.",
    "EBOB (aralık uzunluğu) işaret sayısı sanıldı; 42, iki işaret arasındaki uzaklıktır."
  ],
  aciklama: `İki uzunluğu da tam bölen en büyük sayı, en büyük ortak bölendir (EBOB). Aralık en büyük olacağına göre aralık uzunluğu EBOB(84, 126)'dır.
Adım 1: 84 = 2^{2} · 3 · 7 ve 126 = 2 · 3^{2} · 7 olduğundan EBOB = 2 · 3 · 7 = 42 m.
Adım 2: Çizgi 1 için 84 ÷ 42 = 2 aralık vardır. İki ucu da işaretlendiğinden 2 + 1 = 3 işaret gerekir.
Adım 3: Çizgi 2 için 126 ÷ 42 = 3 aralık vardır; 3 + 1 = 4 işaret gerekir.
Adım 4: Toplam 3 + 4 = 7 işaret.
Sağlama: 42 m'lik aralıkla çizgi 1 üzerinde 0, 42, 84; çizgi 2 üzerinde 0, 42, 84, 126 noktaları işaretlenir: 3 + 4 = 7.
Sık yapılan hata: Aralık sayısını işaret sayısı sanmak.
Cevap B.`
},
{
  id: "dn1-mat-12",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.2",
  zorluk: 4,
  soru: "Bir deniz fenerinde iki ışık düzenli aralıklarla yanıp sönmektedir. A ışığı 12 saniyede bir yanmaktadır. B ışığı ise b saniyede bir yanmaktadır; burada b pozitif bir tam sayıdır. Teknisyenler iki ışığın 0. saniyede birlikte yandığını, bundan sonra ilk kez 60. saniyede yeniden birlikte yandığını kaydetmiştir; zaman çizelgesi aşağıda verilmiştir. B ışığının ara yanışları kayıt cihazının arızası yüzünden çizelgeye geçmemiştir.\n**Buna göre b sayısı kaç farklı değer alabilir?**",
  gorsel: `<svg viewBox="0 0 540 175" role="img" aria-label="A ışığı 0, 12, 24, 36, 48 ve 60. saniyelerde yanmaktadır. B ışığı 0. ve 60. saniyelerde A ile birlikte yanmıştır."><g stroke="currentColor" stroke-width="2"><line x1="30" y1="62" x2="510" y2="62"/><line x1="30" y1="122" x2="510" y2="122"/></g><g fill="var(--vurgu)"><circle cx="30" cy="62" r="6"/><circle cx="126" cy="62" r="6"/><circle cx="222" cy="62" r="6"/><circle cx="318" cy="62" r="6"/><circle cx="414" cy="62" r="6"/><circle cx="510" cy="62" r="6"/></g><g fill="var(--vurgu2)"><circle cx="30" cy="122" r="6"/><circle cx="510" cy="122" r="6"/></g><g fill="currentColor" font-size="16"><text x="30" y="38">A ışığı: 12 sn'de bir</text><text x="30" y="98">B ışığı: b sn'de bir</text><text x="30" y="160">0. sn</text><text x="510" y="160" text-anchor="end">60. sn: ilk ortak yanış</text></g></svg>`,
  secenekler: ["6", "7", "11", "12"],
  dogru: 0,
  hatalar: [
    null,
    "b = 12 de sayıldı: EKOK(12, 12) = 12'dir, 60 değil; bu değer koşulu sağlamaz.",
    "60'ın 12 dışındaki bütün bölenleri alındı (11 tane); EKOK'un 60 olup olmadığı her değer için kontrol edilmedi.",
    "60'ın bütün pozitif bölenleri sayıldı (12 tane); b'nin 60'ı bölmesi gerekli ama yeterli değildir."
  ],
  aciklama: `İki ışık ilk kez 60. saniyede birlikte yandığına göre EKOK(12, b) = 60 olmalıdır. b hem 60'ı bölmeli hem de EKOK'u tam 60 yapmalıdır.
Adım 1: 60 = 2^{2} · 3 · 5 ve 12 = 2^{2} · 3. EKOK'ta 5 çarpanı yalnızca b'den gelebilir; yani b, 5'in katı olmalıdır.
Adım 2: 60'ın 5'e bölünen bölenleri: 5, 10, 15, 20, 30, 60.
Adım 3: Her biri için kontrol et: EKOK(12, 5) = 60, EKOK(12, 10) = 60, EKOK(12, 15) = 60, EKOK(12, 20) = 60, EKOK(12, 30) = 60, EKOK(12, 60) = 60. Hepsi uygundur.
Adım 4: 5'e bölünmeyen bölenlerde (1, 2, 3, 4, 6, 12) EKOK(12, b) = 12 çıkar, uygun değildir. Toplam 6 değer.
Sağlama: b = 12 için ışıklar her 12 saniyede birlikte yanardı, ilk ortak yanış 12. saniyede olurdu; bu da çizelgeye uymaz.
Sık yapılan hata: 60'ın bölenlerini sayıp EKOK koşulunu denetlememek.
Cevap A.`
},
{
  id: "dn1-mat-13",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.5",
  zorluk: 3,
  soru: "Bir harita çizim yarışmasında yarışmacılar, hazırladıkları haritalarda iki kent arasındaki uzaklığı ölçülü olarak göstermek zorundadır. Haritanın ölçeği 1 : 2 · 10^{5} olarak belirlenmiştir; yani haritadaki 1 cm gerçekte 2 · 10^{5} cm'ye karşılık gelir. Haritada iki kent arasındaki uzaklık aşağıdaki gibi ölçülmüştür.\n**Buna göre bu iki kent arasındaki gerçek uzaklık kaç kilometredir?**",
  gorsel: `<svg viewBox="0 0 540 190" role="img" aria-label="Harita üzerinde Kent A ile Kent B arası 6,5 santimetre ölçülmüştür. Ölçek 1'e 2 çarpı 10 üzeri 5."><line x1="70" y1="120" x2="460" y2="70" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="8 6"/><g fill="currentColor"><circle cx="70" cy="120" r="7"/><circle cx="460" cy="70" r="7"/></g><g fill="currentColor" font-size="16"><text x="40" y="148">Kent A</text><text x="420" y="52">Kent B</text><text x="200" y="76">Haritada: 6,5 cm</text><text x="30" y="178">Ölçek: 1 : 2 · 10<tspan dy="-7" font-size="14">5</tspan></text></g></svg>`,
  secenekler: ["1,3", "13", "130", "1300"],
  dogru: 1,
  hatalar: [
    "Birim hatası: 1 km = 10^{6} cm sanıldı; oysa 1 km = 1000 m = 100 000 cm = 10^{5} cm'dir.",
    null,
    "Birim hatası: 1 km = 10^{4} cm sanıldı; oysa 1 km = 10^{5} cm'dir.",
    "Birim hatası: 1 km = 10^{3} cm sanıldı; 1000 sayısı metre-kilometre dönüşümüne aittir, santimetre için 10^{5} gerekir."
  ],
  aciklama: `Ölçek, haritadaki uzunluğun gerçekte kaç katına karşılık geldiğini gösterir. Gerçek uzaklık = haritadaki uzaklık · ölçeğin payda değeri.
Adım 1: Gerçek uzaklık = 6,5 · 2 · 10^{5} cm = 13 · 10^{5} cm.
Adım 2: Kilometreye çevir: 1 km = 1000 m = 1000 · 100 cm = 10^{5} cm.
Adım 3: 13 · 10^{5} cm ÷ 10^{5} = 13 km.
Sağlama: 1 cm haritada 2 · 10^{5} cm = 2 km eder; 6,5 cm için 6,5 · 2 = 13 km.
Sık yapılan hata: Santimetreden kilometreye çevirirken 10'un kuvvetini yanlış almak.
Cevap B.`
},
{
  id: "dn1-mat-14",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.2",
  zorluk: 3,
  soru: "Bir fabrikada üretilen her ürüne, üretim sırasına göre hesaplanan bir seri numarası verilmektedir. Fabrikanın en son ürününün seri numarası 2^{7} · 5^{9} olarak hesaplanmıştır. Etiket basım makinesi, kâğıdı numaradaki rakam sayısına göre keseceği için bu sayının kaç basamaklı olduğunu bilmek istemektedir.\n**Buna göre bu seri numarası kaç basamaklıdır?**",
  gorsel: null,
  secenekler: ["7", "8", "9", "16"],
  dogru: 2,
  hatalar: [
    "Üs, basamak sayısı sanıldı: 10^{7} bulunduktan sonra 7 alındı; kalan 5^{2} çarpanı da hesaba katılmadı.",
    "Kalan çarpan unutuldu: 2^{7} · 5^{7} = 10^{7} sayısı 8 basamaklıdır, ama 5^{2} = 25 ile çarpılınca sayı 9 basamaklı olur.",
    null,
    "Üsler toplandı (7 + 9 = 16); tabanlar farklı olduğundan üsler toplanmaz."
  ],
  aciklama: `Üsleri aynı olan iki üslü ifade çarpılırken tabanlar çarpılır: (a · b)^{n} = a^{n} · b^{n}. Burada 2 · 5 = 10 olduğundan 10'un kuvvetlerini elde etmek işi kolaylaştırır.
Adım 1: 5^{9} = 5^{7} · 5^{2} yaz. Böylece 2^{7} · 5^{9} = 2^{7} · 5^{7} · 5^{2} olur.
Adım 2: 2^{7} · 5^{7} = (2 · 5)^{7} = 10^{7}.
Adım 3: 5^{2} = 25 olduğundan sayı 25 · 10^{7} = 250 000 000 olur.
Adım 4: 250 000 000 sayısında 9 rakam vardır.
Sağlama: 25 · 10^{7} = 2,5 · 10^{8} yazılır; bilimsel gösterimde üssü 8 olan sayı 9 basamaklıdır.
Sık yapılan hata: 10'un kuvvetinin üssünü basamak sayısı sanmak ya da artakalan 5^{2} çarpanını unutmak.
Cevap C.`
},
{
  id: "dn1-mat-15",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.2",
  zorluk: 3,
  soru: "Bir okul, müze gezisine 8. sınıflardan ve 7. sınıflardan öğrenci götürecektir. Katılacak öğrenci sayıları ve otobüs kapasitesi aşağıdaki tabloda verilmiştir. Gezi planına göre bütün öğrenciler gidecek; her otobüste eşit sayıda 8. sınıf öğrencisi ve eşit sayıda 7. sınıf öğrencisi bulunacak; kiralanan bütün otobüslerde aynı sayıda öğrenci olacaktır.\n**Buna göre en az kaç otobüs kiralanmalıdır?**",
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Sayı</th></tr><tr><td>8. sınıf öğrencisi</td><td>72</td></tr><tr><td>7. sınıf öğrencisi</td><td>54</td></tr><tr><td>Bir otobüsün kapasitesi</td><td>25 kişi</td></tr></table>`,
  secenekler: ["3", "6", "9", "18"],
  dogru: 1,
  hatalar: [
    "Kapasite denetlenmedi: 3 otobüste her otobüse (72 + 54) ÷ 3 = 42 kişi düşer, kapasite 25'tir.",
    null,
    "Uygun ama en az olmayan değer seçildi: 9 otobüs koşulları sağlar, ancak daha az otobüsle (6) de gidilebilir.",
    "EBOB cevap sanıldı: 18, en çok kaç otobüsün kullanılabileceğini gösterir; soru en az sayıyı sorar."
  ],
  aciklama: `Her otobüste eşit sayıda 8. sınıf ve 7. sınıf öğrencisi olacağına göre otobüs sayısı hem 72'yi hem 54'ü tam bölmelidir; yani 72 ile 54'ün ortak bölenidir.
Adım 1: 72 = 2^{3} · 3^{2} ve 54 = 2 · 3^{3}. EBOB = 2 · 3^{2} = 18. Ortak bölenler, 18'in bölenleridir: 1, 2, 3, 6, 9, 18.
Adım 2: Toplam öğrenci 72 + 54 = 126'dır. Otobüs sayısı k ise bir otobüsteki öğrenci 126 ÷ k olur ve 25'i geçemez.
Adım 3: k = 1 → 126, k = 2 → 63, k = 3 → 42 (hepsi 25'ten fazla). k = 6 → 21 kişi, kapasiteye uyar.
Adım 4: En küçük uygun değer k = 6'dır.
Sağlama: 6 otobüste her birinde 72 ÷ 6 = 12 sekizinci sınıf, 54 ÷ 6 = 9 yedinci sınıf, toplam 21 öğrenci vardır.
Sık yapılan hata: EBOB'u (18) doğrudan cevap sanmak.
Cevap B.`
},
{
  id: "dn1-mat-16",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.4",
  zorluk: 3,
  soru: "Bir botanik kulübü, bir bitki tohumunun kütlesini 4,8 · 10^{-3} gram olarak ölçmüştür. Kulüp üyeleri bu kütleyi defterlerine farklı yazımlarla geçirmiştir. Yazılan ifadelerden yalnızca biri ölçülen kütleye eşit değildir.\n**Buna göre aşağıdakilerden hangisi bu kütleye __eşit değildir__?**",
  gorsel: null,
  secenekler: ["0,048 · 10^{-1}", "0,48 · 10^{-2}", "48 · 10^{-4}", "480 · 10^{-4}"],
  dogru: 3,
  hatalar: [
    "Bu ifade eşittir: 0,048 · 10^{-1} = 0,0048 = 4,8 · 10^{-3}. Virgül sola kayarken üs artar kuralı ters uygulandığı için eşit değil sanılmış olabilir.",
    "Bu ifade eşittir: 0,48 · 10^{-2} = 0,0048 = 4,8 · 10^{-3}. Virgülün kayma yönü ile üsün değişimi karıştırılmış olabilir.",
    "Bu ifade eşittir: 48 · 10^{-4} = 0,0048 = 4,8 · 10^{-3}. Virgül sağa kayarken üs azalır kuralı yanlış yorumlanmış olabilir.",
    null
  ],
  aciklama: `Bir sayıyı farklı 10'un kuvvetleriyle yazarken virgül bir basamak sağa kayarsa üs 1 azaltılır, sola kayarsa üs 1 artırılır; sayının değeri değişmez.
Adım 1: Asıl sayı 4,8 · 10^{-3} = 0,0048'dir.
Adım 2: Seçenekleri tek tek ondalık yaz: 0,048 · 10^{-1} = 0,0048; 0,48 · 10^{-2} = 0,0048; 48 · 10^{-4} = 0,0048; 480 · 10^{-4} = 0,048.
Adım 3: Yalnızca 480 · 10^{-4} = 0,048 olup 0,0048'e eşit değildir (10 kat büyüktür).
Sağlama: 480 · 10^{-4} ifadesini 4,8 · 10^{-3} yapmak için 480 = 4,8 · 10^{2} yazılırsa 4,8 · 10^{-2} bulunur; üs −3 değildir.
Sık yapılan hata: Virgülü kaydırırken üssü aynı yönde değiştirmek.
Cevap D.`
},
{
  id: "dn1-mat-17",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.5",
  zorluk: 4,
  soru: "Bir kuruyemiş firması, bir günde işlediği 8 · 10^{5} fındığı paketleyecektir. Kalite kontrolde bu fındıklardan 1,6 · 10^{4} tanesi bozuk bulunarak ayrılmış, geri kalan fındıkların tamamı paketlenmiştir. Her pakete 2,5 · 10^{2} fındık konmaktadır. Paketler sevkiyat için 24'erli kolilere yerleştirilmektedir; yalnızca tam dolu kolilerin sevkiyatı yapılır, eksik kalan paketler ertesi güne bırakılır.\n**Buna göre bu gün sevk edilebilecek tam dolu koli sayısı en fazla kaçtır?**",
  gorsel: null,
  secenekler: ["130", "131", "133", "3136"],
  dogru: 0,
  hatalar: [
    null,
    "Yukarı yuvarlandı: 3136 ÷ 24 = 130,67 bulundu ve 131'e tamamlandı; tam dolu olmayan koli sevk edilmez.",
    "Bozuk fındıklar çıkarılmadı: 800 000 fındıkla 3200 paket, 3200 ÷ 24 ≈ 133 koli bulundu.",
    "Son adım atlandı: 3136 paket sayısıdır; soru koli sayısını sorar."
  ],
  aciklama: `Önce kaç fındık paketleneceğini, sonra kaç paket olduğunu, en son kaç tam koli olduğunu bul.
Adım 1: Paketlenen fındık = 8 · 10^{5} − 1,6 · 10^{4} = 800 000 − 16 000 = 784 000.
Adım 2: Paket sayısı = 784 000 ÷ (2,5 · 10^{2}) = 784 000 ÷ 250 = 3136.
Adım 3: Koli sayısı = 3136 ÷ 24 = 130,666… Tam dolu koli sayısı için küsurat atılır: 130.
Sağlama: 130 koli · 24 = 3120 paket; geriye 3136 − 3120 = 16 paket kalır ve koliyi dolduramaz.
Sık yapılan hata: Bölme sonucunu yukarı yuvarlamak ya da bozuk fındıkları çıkarmayı unutmak.
Cevap A.`
},
{
  id: "dn1-mat-18",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.2",
  zorluk: 4,
  soru: "Bir okulun satranç ve dama kulüplerinin üye sayıları birbirinden farklı birer pozitif tam sayıdır. İki kulübün üyeleri, her iki kulüpte de grup büyüklüğü aynı olacak ve kimse dışarıda kalmayacak biçimde, mümkün olan en büyük eşit gruplara bölündüğünde her grupta 6 kişi bulunmaktadır. İki kulübün üye sayılarının ortak katlarından en küçüğü ise 90'dır.\n**Buna göre iki kulübün toplam üye sayısı en çok kaç olabilir?**",
  gorsel: null,
  secenekler: ["48", "84", "96", "540"],
  dogru: 2,
  hatalar: [
    "En az değer bulundu: (18, 30) çifti toplam 48 verir; soru en çok değeri sorar.",
    "EKOK ile EBOB'un farkı alındı (90 − 6 = 84); iki sayının kendileri bulunmadı.",
    null,
    "Çarpım toplam sanıldı: iki sayının çarpımı EBOB · EKOK = 540'tır, toplamı değildir."
  ],
  aciklama: `İki kulüpte de grup büyüklüğü aynı ve en büyük olduğundan, bu büyüklük iki üye sayısının en büyük ortak bölenidir (EBOB). Demek ki EBOB = 6 ve EKOK = 90.
Adım 1: EBOB 6 ise sayılar 6x ve 6y biçiminde yazılır; burada x ile y aralarında asaldır (ortak çarpanları kalmamıştır).
Adım 2: Bu durumda EKOK = 6 · x · y olur. 6xy = 90 olduğundan x · y = 15.
Adım 3: Aralarında asal ve çarpımı 15 olan çiftler: (1, 15) ve (3, 5).
Adım 4: (1, 15) için sayılar 6 ve 90 olur; toplam 96. (3, 5) için sayılar 18 ve 30 olur; toplam 48.
Adım 5: En çok toplam 96'dır.
Sağlama: EBOB(6, 90) = 6 ve EKOK(6, 90) = 90; koşullar sağlanır. Üye sayıları farklıdır.
Sık yapılan hata: 3 · 5 = 15 çiftini unutmak ya da EBOB · EKOK = sayıların çarpımı bilgisini toplam sanmak.
Cevap C.`
},
{
  id: "dn1-mat-19",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.2",
  zorluk: 4,
  soru: "Bir mühendis, ayar düğmesi −10 ile 10 arasındaki tam sayı konumlarında durabilen bir lazer cihazının çıkış gücünü hesaplamaktadır. Düğme n konumundayken çıkış gücü (2^{n})^{3} · 4^{2} ÷ 2^{5} miliwatt olmaktadır. Güvenlik kuralına göre çıkış gücü (2^{-3})^{2} · 2^{-1} miliwatt'tan az olmamalı, 16^{3} ÷ 2 miliwatt'ı da aşmamalıdır.\n**Buna göre düğme kaç farklı konumda güvenle kullanılabilir?**",
  gorsel: null,
  secenekler: ["4", "5", "6", "7"],
  dogru: 3,
  hatalar: [
    "Negatif üssün negatif sayı verdiği sanıldı: n < 0 için çıkış gücü eksi sayı sanılıp yalnızca n = 1, 2, 3, 4 sayıldı; oysa 2'nin negatif kuvvetleri pozitif kesirlerdir.",
    "Alt sınırda üs hatası: (2^{-3})^{2} = 2^{-1} alındı (üsler toplandı); doğrusu 2^{-6}'dır. Bu yüzden n = 0, 1, 2, 3, 4 bulundu.",
    "Üst sınır yanlış sadeleştirildi: 16^{3} ÷ 2 = 8^{3} = 2^{9} alındı; doğrusu 16^{3} = 2^{12}, bölü 2 ise 2^{11}'dir. Bu yüzden n = −2, …, 3 bulundu.",
    null
  ],
  aciklama: `Üslü ifadelerde taban 2'ye eşitlenirse karşılaştırma yalnızca üslere bakılarak yapılır. Taban 1'den büyük olduğundan üs büyüdükçe ifade de büyür.
Adım 1: Çıkış gücü: (2^{n})^{3} = 2^{3n}, 4^{2} = 2^{4}. Buradan 2^{3n} · 2^{4} ÷ 2^{5} = 2^{3n + 4 − 5} = 2^{3n − 1}.
Adım 2: Alt sınır: (2^{-3})^{2} = 2^{-6}, çarpı 2^{-1} ise 2^{-7}. "Az olmamalı" dendiği için güç 2^{-7}'ye eşit olabilir: 2^{3n − 1} ≥ 2^{-7}.
Adım 3: Üst sınır: 16^{3} = (2^{4})^{3} = 2^{12}, bölü 2 ise 2^{11}. "Aşmamalı" dendiği için güç 2^{11}'e eşit olabilir: 2^{3n − 1} ≤ 2^{11}.
Adım 4: Üsleri karşılaştır: −7 ≤ 3n − 1 ≤ 11. Her tarafa 1 ekle: −6 ≤ 3n ≤ 12. Her tarafı 3'e böl: −2 ≤ n ≤ 4.
Adım 5: n = −2, −1, 0, 1, 2, 3, 4 olur; uçlar dâhil olduğundan 7 konum vardır. (Hepsi −10 ile 10 arasındadır.)
Sağlama: n = −2 için 2^{-7} alt sınıra, n = 4 için 2^{11} üst sınıra eşittir; ikisi de uygundur. n = −3 için 2^{-10} alt sınırın altında kalır.
Sık yapılan hata: "Az olmamalı" ve "aşmamalı" ifadelerinde eşitliği dışarıda bırakmak.
Cevap D.`
},
{
  id: "dn1-mat-20",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.3",
  zorluk: 4,
  soru: "Bir sınıfta 24 öğrenci iki gruba ayrılacaktır. Öğretmen, grupların mevcutlarının aralarında asal olmasını istemektedir. Hiçbir grup boş bırakılmayacak ve birinci grup ikinci gruptan daha az kişiden oluşacaktır.\n**Buna göre öğrenciler bu koşullara uygun kaç farklı biçimde iki gruba ayrılabilir?**",
  gorsel: null,
  secenekler: ["4", "6", "11", "12"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca tek sayılar alındı: birinci grup 1, 3, 5, 7, 9, 11 kişi sayıldı; ancak 3 ve 9 için ikinci grup 21 ve 15'tir ve 3 ile ortak çarpan vardır.",
    "Aralarında asal olma koşulu hiç uygulanmadı: birinci grup 1'den 11'e kadar her değeri alabilir sanıldı.",
    "Eşit gruplar da sayıldı: birinci grup 12 olursa iki grup eşit olur; soru birinci grubun daha az olmasını ister ve ayrıca asal koşulu da uygulanmamıştır."
  ],
  aciklama: `İki sayı aralarında asal ise ortak bölenleri yalnızca 1'dir. Toplamları 24 olan a ve 24 − a sayılarının ortak bölenleri, a ile 24'ün ortak bölenleridir; yani EBOB(a, 24 − a) = EBOB(a, 24).
Adım 1: Birinci grup a kişi olsun: 1 ≤ a ≤ 11 (a < 24 − a olduğundan a < 12).
Adım 2: a ile 24 aralarında asal olmalıdır. 24 = 2^{3} · 3 olduğundan a, 2'ye ve 3'e bölünmemelidir.
Adım 3: 1'den 11'e kadar bu koşulu sağlayanlar: 1, 5, 7, 11.
Adım 4: Gruplar (1, 23), (5, 19), (7, 17), (11, 13) olur; yani 4 farklı biçim.
Sağlama: (3, 21) için EBOB 3, (9, 15) için EBOB 3'tür; bu yüzden elenirler.
Sık yapılan hata: Yalnızca tek sayıları almak; 3 ve 9 da 24 ile ortak çarpan paylaşır.
Cevap A.`
}
);
