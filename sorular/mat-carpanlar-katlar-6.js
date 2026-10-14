// Matematik — Çarpanlar ve Katlar: Kademe 3 (LGS Ayarı) yedeği, sıra 26-75 (mat-ck-326 … mat-ck-375)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["carpanlar-katlar"] = window.LGS_BANK["carpanlar-katlar"] || []).push(
{
  id: "mat-ck-326",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kütüphanede iki rafın kitap sayıları birbirinden farklıdır ve ikisi de 6'dan fazladır. Bu iki sayının EBOB'u 6, EKOK'u 36'dır.
**Buna göre kitap sayısı fazla olan rafta kaç kitap vardır?**`,
  gorsel: null,
  secenekler: ["36", "18", "12", "6"],
  dogru: 1,
  hatalar: [
    "EKOK'u cevap sanma ya da (6, 36) çiftini seçme: sayılar 6'dan fazla olmalıdır.",
    null,
    "Küçük sayıyı verme: 12 ve 18 bulunur; soru fazla olan rafı soruyor.",
    "EBOB'u cevap sanma: 6, iki sayının ortak bölenidir; üstelik sayılar 6'dan fazladır."
  ],
  aciklama: `İki sayının çarpımı, EBOB'larıyla EKOK'larının çarpımına eşittir.
Adım 1: Sayıların çarpımı 6 · 36 = 216'dır.
Adım 2: Sayılar EBOB'un katı olduğundan 6m ve 6n yazılır; m ile n aralarında asaldır. 36mn = 216 → m · n = 6. Aralarında asal çiftler: (1, 6) ve (2, 3).
Adım 3: (1, 6) → sayılar 6 ve 36; 6, "6'dan fazla" koşuluna uymaz. (2, 3) → sayılar 12 ve 18.
Adım 4: Fazla olan raf 18 kitaptır.
Sağlama: EBOB(12, 18) = 6, EKOK(12, 18) = 36.
Sık yapılan hata: (6, 36) çiftini seçmek ya da küçük sayıyı vermek.
Cevap B.`
},
{
  id: "mat-ck-327",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kıyı kasabasında iskeleye banliyö treni 15 dakikada bir, vapur 25 dakikada bir gelmektedir. Sabah 08.10'da ikisi iskeleye aynı anda gelmiştir. Bir yolcu, ikisinin yeniden aynı anda iskelede bulunacağı ilk saatte aktarma yapmayı planlamaktadır.
**Buna göre yolcu hangi saatte aktarma yapar?**`,
  gorsel: null,
  secenekler: ["08.15", "08.50", "09.25", "14.25"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: EBOB(15, 25) = 5 alınıp 08.10'a 5 dakika eklenmiş; o saatte ikisi birden gelmez.",
    "Süreleri toplama: 15 + 25 = 40 dakika eklenmiş; 40, ne 15'in ne de 25'in katıdır.",
    null,
    "EKOK yerine 15 · 25 = 375 dakikayı (6 saat 15 dakika) alma: o saatte de birlikte gelirler ama ilk kez değil."
  ],
  aciklama: `İkisinin yeniden aynı anda geldiği ilk an, 08.10'dan hem 15'in hem 25'in katı kadar dakika sonradır; yani EKOK aranır.
Adım 1: 15 = 3 · 5 ve 25 = 5^{2} olduğundan EKOK(15, 25) = 3 · 5^{2} = 75 dakika.
Adım 2: 75 dakika = 1 saat 15 dakikadır. 08.10 + 1 saat 15 dakika = 09.25.
Sağlama: Tren 08.25, 08.40, 08.55, 09.10, 09.25'te; vapur 08.35, 09.00, 09.25'te gelir. İlk ortak saat 09.25'tir.
Sık yapılan hata: EBOB = 5'i kullanmak. "Yeniden aynı anda" ifadesi EKOK'a işaret eder.
Cevap C.`
},
{
  id: "mat-ck-328",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir spor merkezinde 180 sporcu, her grupta eşit sayıda sporcu bulunacak biçimde gruplara ayrılacaktır. Antrenör, bir gruptaki sporcu sayısının 4'ün katı olmasını istemektedir. Tek bir grup da oluşturulabilir.
**Buna göre bir gruptaki sporcu sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 3,
  hatalar: [
    "Farklı asal çarpan sayısını (2, 3, 5) bulma: soru çarpanları sayıyor, asal çarpanları değil.",
    "4 · 1, 4 · 3, 4 · 5, 4 · 9 değerlerinde durma; 4 · 15 = 60 ve 4 · 45 = 180 de uygundur.",
    "180'in kendisini atlama: tek grup olursa 180 sporcu da 4'ün katıdır ve soru buna izin veriyor.",
    null
  ],
  aciklama: `Grup büyüklüğü 180'in çarpanı ve 4'ün katı olmalıdır.
Adım 1: 180'in çarpanları: 1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 30, 36, 45, 60, 90, 180.
Adım 2: 4'ün katı olanlar: 4, 12, 20, 36, 60, 180.
Adım 3: Say: 6 değer.
Kısa yol: 180 = 4 · 45; 4'ün katı olan çarpanlar 4 · (45'in çarpanları) biçimindedir. 45'in 1, 3, 5, 9, 15, 45 olmak üzere 6 çarpanı vardır.
Sık yapılan hata: Çarpanları sıralarken 60 ve 180'i atlamak.
Cevap D.`
},
{
  id: "mat-ck-329",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ödül töreninde 1'den 20'ye kadar numaralanmış 20 koltuk vardır. Numarası 20 ile aralarında asal olan ve 1'den farklı olan koltuklar ev sahiplerine ayrılmıştır.
**Buna göre ev sahiplerine kaç koltuk ayrılmıştır?**`,
  gorsel: null,
  secenekler: ["6", "7", "8", "9"],
  dogru: 1,
  hatalar: [
    "Aralarında asal olmayı asal sayı olmakla karıştırma: yalnızca 3, 7, 11, 13, 17, 19 sayılmış; oysa 9, 20 ile aralarında asaldır.",
    null,
    "1'i de sayma: 1, 20 ile aralarında asaldır ama soru 1'den farklı koltukları istiyor.",
    "Yalnızca 2'ye bakma: 5 ve 15 de tek sayıdır ama 20 ile ortak böleni 5'tir."
  ],
  aciklama: `20 = 2^{2} · 5 olduğundan 20 ile aralarında asal olan sayı 2'ye ve 5'e bölünmemelidir.
Adım 1: Çift sayıları ele; 1, 3, 5, …, 19 kalır.
Adım 2: Kalanlardan 5'e bölünenleri ele: 5 ve 15.
Adım 3: Geriye 1, 3, 7, 9, 11, 13, 17, 19 kalır. 1'den farklı olduğu söylendiği için 1'i çıkar: 3, 7, 9, 11, 13, 17, 19 → 7 koltuk.
Sık yapılan hata: Asal sayıları saymak (9 elenir) ya da 1'i unutmak.
Cevap B.`
},
{
  id: "mat-ck-330",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müzenin girişindeki iki ışıklı tabeladan biri 8 saniyede bir, diğeri 15 saniyede bir yanıp sönmektedir. Saat 12.00'da iki tabela aynı anda yanıp sönmüştür. Bu andan sonraki 10 dakika (12.00 hariç, 12.10 dâhil) izlenmektedir.
**Buna göre bu 10 dakikada iki tabela kaç kez aynı anda yanıp söner?**`,
  gorsel: null,
  secenekler: ["75", "40", "6", "5"],
  dogru: 3,
  hatalar: [
    "Yalnızca 8 saniyelik tabelayı sayma: 600 ÷ 8 = 75.",
    "Yalnızca 15 saniyelik tabelayı sayma: 600 ÷ 15 = 40.",
    "Başlangıç anını da sayma: 12.00 soruda izlenen aralığın dışındadır.",
    null
  ],
  aciklama: `İki tabela, hem 8'in hem 15'in katı olan saniyelerde birlikte yanıp söner; ilk birliktelik EKOK'ta olur.
Adım 1: 8 = 2^{3} ve 15 = 3 · 5 aralarında asaldır. EKOK(8, 15) = 8 · 15 = 120 saniye.
Adım 2: 10 dakika = 600 saniyedir. 600 ÷ 120 = 5.
Adım 3: Başlangıç (12.00) sayılmadığı için 5 kez: 12.02, 12.04, 12.06, 12.08, 12.10.
Sık yapılan hata: Başlangıç anını da sayıp 6 bulmak. Soru başlangıcın hariç olduğunu açıkça söylüyor.
Cevap D.`
},
{
  id: "mat-ck-331",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Mert ile Selin düz bir çizgi boyunca yürümektedir. Mert'in adımları 45 cm, Selin'in adımları 60 cm uzunluğundadır. İkisi de çizginin başlangıç noktasından aynı anda yürümeye başlamış ve ilk kez aynı noktaya bastıkları yerde durmuştur.
**Buna göre iki arkadaş durduklarında toplam kaç adım atmış olurlar?**`,
  gorsel: null,
  secenekler: ["7", "4", "3", "1"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca Mert'in adım sayısını bulma: 180 ÷ 45 = 4; Selin'in adımları eklenmemiş.",
    "Yalnızca Selin'in adım sayısını bulma: 180 ÷ 60 = 3; Mert'in adımları eklenmemiş.",
    "İki arkadaşın adım sayıları arasındaki farkı bulma: 4 − 3 = 1."
  ],
  aciklama: `Mert 45'in katlarına, Selin 60'ın katlarına basar. İlk ortak nokta EKOK'ta olur.
Adım 1: 45 = 3^{2} · 5 ve 60 = 2^{2} · 3 · 5. EKOK(45, 60) = 2^{2} · 3^{2} · 5 = 180 cm.
Adım 2: Mert 180 ÷ 45 = 4 adım, Selin 180 ÷ 60 = 3 adım atmıştır.
Adım 3: Toplam adım: 4 + 3 = 7.
Sık yapılan hata: EKOK'u bulup durmak (180) ya da yalnızca bir kişinin adımını saymak. Soru toplam adımı soruyor.
Cevap A.`
},
{
  id: "mat-ck-332",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Kerem'in şifre kartında 30 yazmaktadır. Kerem, bu sayıyı toplamları 30 olan iki asal sayının toplamı biçiminde yazmak istemektedir. Sıralama önemli değildir; yani 7 + 23 ile 23 + 7 aynı yazılış sayılır.
**Buna göre Kerem, 30'u kaç farklı biçimde iki asal sayının toplamı olarak yazabilir?**`,
  gorsel: null,
  secenekler: ["5", "4", "3", "2"],
  dogru: 2,
  hatalar: [
    "1 + 29 ve 15 + 15 gibi asal olmayan sayıları da kullanma.",
    "1'i asal sayma: 1 + 29 yazılışı da sayılmış; oysa 1 asal değildir.",
    null,
    "Bir yazılışı atlama: 7 + 23 çifti gözden kaçmış olabilir."
  ],
  aciklama: `Asal sayı, 1'den büyük olup yalnızca 1'e ve kendisine bölünen sayıdır. 30'dan küçük asal sayılar: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
Adım 1: 30 çift olduğundan 2 + 28 olmaz (28 asal değil). Tek asal sayıları dene.
Adım 2: 3 + 27 (27 asal değil), 5 + 25 (25 asal değil).
Adım 3: 7 + 23, 11 + 19 ve 13 + 17 çiftlerinde iki sayı da asaldır.
Adım 4: 3 farklı yazılış vardır.
Sık yapılan hata: 1 + 29'u saymak. 1 asal sayı değildir (yalnızca bir böleni vardır).
Cevap C.`
},
{
  id: "mat-ck-333",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulda iki kulübün üye sayılarından biri 24'tür. Bu iki sayının EBOB'u 6, EKOK'u 120'dir.
**Buna göre diğer kulübün üye sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["5", "30", "96", "120"],
  dogru: 1,
  hatalar: [
    "Yanlış işlem: 120 ÷ 24 = 5 bulunmuş; oysa 24 · b = EBOB · EKOK = 720 olmalıdır.",
    null,
    "EKOK'tan çıkarma: 120 − 24 = 96; sayılar arasındaki ilişki toplam değil çarpımdır.",
    "EKOK'u cevap sanma: 120, iki sayının ortak katıdır; diğer sayı değildir."
  ],
  aciklama: `İki sayının çarpımı, EBOB'larıyla EKOK'larının çarpımına eşittir.
Adım 1: 24 · b = 6 · 120 = 720.
Adım 2: b = 720 ÷ 24 = 30.
Sağlama: 24 = 2^{3} · 3 ve 30 = 2 · 3 · 5. EBOB = 2 · 3 = 6, EKOK = 2^{3} · 3 · 5 = 120.
Sık yapılan hata: EKOK'u 24'e bölmek ya da çıkarma yapmak. Bağıntı çarpımsaldır.
Cevap B.`
},
{
  id: "mat-ck-334",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir belediye, iki ayrı düz yürüyüş yolunun kenarına ağaç diktirecektir. Yolların uzunlukları 84 m ve 140 m'dir; yollar birbirine bağlı değildir. Her yolun iki ucuna da birer ağaç dikilecek, her yolda ardışık iki ağaç arasındaki uzaklık eşit ve metre cinsinden tam sayı olacaktır. İki yolda da aynı aralık kullanılacak ve toplam ağaç sayısı mümkün olduğunca az olacaktır.
**Buna göre toplam kaç ağaç dikilir?**`,
  gorsel: null,
  secenekler: ["8", "9", "10", "28"],
  dogru: 2,
  hatalar: [
    "Aralık sayılarını toplama: 3 + 5 = 8 aralık vardır; uç ağaçlar için her yolda 1 ekleme yapılmamış.",
    "İki yolu tek bir yolmuş gibi hesaplama: 224 ÷ 28 = 8 aralık, +1 = 9; oysa iki ayrı yolun toplam 4 ucu vardır.",
    null,
    "Ara sonucu cevap sanma: 28, ağaçlar arasındaki uzaklıktır (EBOB); ağaç sayısı bulunmamış."
  ],
  aciklama: `Aralığın en uzun olması toplam ağaç sayısını en aza indirir; aralık her iki yol uzunluğunu da kalansız bölmelidir. Bu nedenle aralık EBOB'dur.
Adım 1: 84 = 2^{2} · 3 · 7 ve 140 = 2^{2} · 5 · 7 olduğundan EBOB(84, 140) = 2^{2} · 7 = 28. Aralık 28 m'dir.
Adım 2: Aralık sayıları: 84 ÷ 28 = 3 ve 140 ÷ 28 = 5.
Adım 3: Düz bir yolun iki ucuna da ağaç dikildiğinde ağaç sayısı aralık sayısından 1 fazladır: 3 + 1 = 4 ve 5 + 1 = 6 ağaç.
Adım 4: Toplam 4 + 6 = 10 ağaç.
Sık yapılan hata: Uçlardaki fazladan ağacı unutmak. n aralık için n + 1 ağaç gerekir.
Cevap C.`
},
{
  id: "mat-ck-335",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul, geziye katılan öğrencileri eşit sayıda öğrenci içeren gruplara ayıracaktır; tek grup ya da her öğrencinin ayrı grup olması da kabul edilmektedir. Dört sınıfın mevcudu aşağıdaki tabloda verilmiştir.
**Buna göre eşit gruplara en çok farklı biçimde ayrılabilen sınıfın mevcudu kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Sınıf</th><th>8-A</th><th>8-B</th><th>8-C</th><th>8-D</th></tr><tr><td>Mevcut</td><td>36</td><td>40</td><td>42</td><td>44</td></tr></table>`,
  secenekler: ["36", "40", "42", "44"],
  dogru: 0,
  hatalar: [
    null,
    "Büyük üssü olanı seçme: 40 = 2^{3} · 5 sayısının (3 + 1)(1 + 1) = 8 çarpanı vardır.",
    "Farklı asal çarpanı en çok olanı seçme: 42 = 2 · 3 · 7 sayısının 8 çarpanı vardır.",
    "En büyük sayıyı seçme: 44 = 2^{2} · 11 sayısının yalnızca 6 çarpanı vardır."
  ],
  aciklama: `Bir sayıyı eşit gruplara ayırma biçimlerinin sayısı, o sayının pozitif tam sayı çarpanlarının sayısına eşittir. Asal çarpanlarına ayrılmış biçimde üsler birer artırılıp çarpılır.
Adım 1: 36 = 2^{2} · 3^{2} → (2 + 1)(2 + 1) = 9 çarpan.
Adım 2: 40 = 2^{3} · 5 → (3 + 1)(1 + 1) = 8 çarpan.
Adım 3: 42 = 2 · 3 · 7 → (1 + 1)(1 + 1)(1 + 1) = 8 çarpan.
Adım 4: 44 = 2^{2} · 11 → (2 + 1)(1 + 1) = 6 çarpan.
En çok çarpana sahip sayı 36'dır.
Sağlama: 36'nın çarpanları 1, 2, 3, 4, 6, 9, 12, 18, 36 olmak üzere 9 tanedir.
Sık yapılan hata: En büyük sayıyı ya da en çok farklı asal çarpanı olan sayıyı seçmek. Ölçüt çarpan sayısıdır.
Cevap A.`
},
{
  id: "mat-ck-336",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir oyuncakçıda bilyeler 6'şarlı kutulara konulduğunda 5 bilye, 8'erli kutulara konulduğunda da yine 5 bilye artmaktadır. Dükkândaki bilye sayısının 100'den fazla, 200'den az olduğu bilinmektedir.
**Buna göre dükkânda kaç farklı sayıda bilye bulunabilir?**`,
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 2,
  hatalar: [
    "EKOK yerine 6 · 8 = 48 kullanma: 48k + 5 biçiminde yalnızca 101, 149 ve 197 bulunur; 125 ve 173 gözden kaçar.",
    "Artanı eklemeyi unutma: 24'ün katları (120, 144, 168, 192) sayılıp 4 bulunmuş; oysa bilye sayısı bunların 5 fazlasıdır.",
    null,
    "Aralığın dışında kalan bir sayıyı da (77 ya da 221) sayma."
  ],
  aciklama: `Her iki paketlemede de aynı sayıda bilye artıyorsa bilye sayısı, 6 ile 8'in ortak katının 5 fazlasıdır: EKOK'un katı + 5.
Adım 1: EKOK(6, 8) = 24. Bilye sayısı 24k + 5 biçimindedir. (Kalan 5, hem 6'dan hem 8'den küçüktür; uygundur.)
Adım 2: k = 4 için 101, k = 5 için 125, k = 6 için 149, k = 7 için 173, k = 8 için 197. k = 3 için 77 (100'den az), k = 9 için 221 (200'den fazla) uygun değildir.
Adım 3: 101, 125, 149, 173, 197: 5 farklı sayı.
Sağlama: 125 = 6 · 20 + 5 ve 125 = 8 · 15 + 5.
Sık yapılan hata: 24'ün katlarını sayıp artan 5'i eklemeyi unutmak.
Cevap C.`
},
{
  id: "mat-ck-337",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yayınevi, 72 broşürü kutulara dağıtacaktır. Her kutuda eşit sayıda broşür bulunacak ve hiçbir broşür artmayacaktır. Kutu sayısı da bir kutudaki broşür sayısı da 2'den büyük olacak; ayrıca kutu sayısı, bir kutudaki broşür sayısından az olacaktır.
**Buna göre bu dağıtım kaç farklı biçimde yapılabilir?**`,
  gorsel: null,
  secenekler: ["12", "6", "5", "4"],
  dogru: 3,
  hatalar: [
    "Koşulları uygulamadan 72'nin bütün çarpanlarını sayma.",
    "1 kutu – 72 broşür ve 2 kutu – 36 broşür dağıtımlarını da sayma: ikisinde de koşul bozulur.",
    "2 kutu – 36 broşür dağıtımını da sayma: kutu sayısı 2'den büyük olmalıdır.",
    null
  ],
  aciklama: `Kutu sayısı ile bir kutudaki broşür sayısının çarpımı 72'dir. Çarpımı 72 olan çiftleri yazıp koşullara bakacağız.
Adım 1: Çarpımı 72 olan ve ilk sayısı küçük olan çiftler: 1 · 72, 2 · 36, 3 · 24, 4 · 18, 6 · 12, 8 · 9.
Adım 2: Kutu sayısı (ilk sayı) 2'den büyük olmalıdır: 1 ve 2 elenir.
Adım 3: Geriye 3 · 24, 4 · 18, 6 · 12, 8 · 9 kalır. Hepsinde kutu sayısı kutudaki sayıdan azdır ve ikisi de 2'den büyüktür.
Adım 4: 4 farklı dağıtım vardır.
Sık yapılan hata: 2 · 36 ve 1 · 72 çiftlerini de saymak.
Cevap D.`
},
{
  id: "mat-ck-338",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir apartmanda iki görevli nöbet tutmaktadır. Ali ayın 2. gününde nöbete başlamış ve ondan sonra her 5 günde bir nöbet tutmaktadır. Yusuf ayın 3. gününde nöbete başlamış ve ondan sonra her 4 günde bir nöbet tutmaktadır. Aynı gün nöbet tutmalarına "ortak nöbet" denir.
**Buna göre 1'den 90'a kadar numaralanan günler (90. gün dâhil) içinde son ortak nöbet kaçıncı gündedir?**`,
  gorsel: null,
  secenekler: ["67", "80", "87", "90"],
  dogru: 2,
  hatalar: [
    "Bir önceki ortak günde kalma: 87. gün de 90'ı geçmeyen bir ortak nöbet günüdür.",
    "Başlangıç günlerini hesaba katmadan EKOK'un katını (20 · 4) alma: 80, Ali'nin 2 ya da 7 ile biten günlerinden biri değildir.",
    null,
    "Sınır günü ortak sanma: 90, Ali'nin nöbet günlerinden biri değildir (Ali'nin günleri 2 ya da 7 ile biter)."
  ],
  aciklama: `Ali'nin nöbet günleri 2, 7, 12, 17, … (5 günde bir); Yusuf'un nöbet günleri 3, 7, 11, 15, … (4 günde bir). Başlangıçlar farklı olduğundan 20'nin katlarını doğrudan kullanamayız; önce ilk ortak günü bulmalıyız.
Adım 1: Yusuf'un günlerinden Ali'nin listesinde olanı ara: 3 yok, 7 var. İlk ortak nöbet 7. gündür.
Adım 2: Sonraki ortak günler EKOK(5, 4) = 20 gün arayla gelir: 7, 27, 47, 67, 87, 107, …
Adım 3: 90'ı geçmeyen en son ortak gün 87'dir.
Sağlama: 87 = 2 + 5 · 17 ve 87 = 3 + 4 · 21.
Sık yapılan hata: Başlangıçlar farklıyken 20'nin katlarına bakmak. Önce ilk ortak günü bul, sonra EKOK kadar ilerle.
Cevap C.`
},
{
  id: "mat-ck-339",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fabrikada iki makinenin seri numaraları asal çarpanlarına ayrılarak aşağıdaki tabloya yazılmıştır. Mühendis, bu iki sayının EKOK'unun EBOB'una oranını hesaplayacaktır.
**Buna göre EKOK(A, B) ÷ EBOB(A, B) işleminin sonucu kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Sayı</th><th>Asal çarpanlarına ayrılmış biçimi</th></tr><tr><td>A</td><td>2<sup>3</sup> · 3 · 5<sup>2</sup></td></tr><tr><td>B</td><td>2<sup>2</sup> · 3<sup>2</sup> · 5</td></tr></table>`,
  secenekler: ["6", "30", "60", "1800"],
  dogru: 1,
  hatalar: [
    "EKOK'ta 5'in küçük üssünü alma: EKOK 2^{3} · 3^{2} · 5 = 360 bulunur ve 360 ÷ 60 = 6 çıkar.",
    null,
    "Ara sonucu cevap sanma: 60, EBOB'dur; bölme işlemi yapılmamış.",
    "Ara sonucu cevap sanma: 1800, EKOK'tur; EBOB'a bölünmemiş."
  ],
  aciklama: `EBOB için ortak asalların küçük üslüleri, EKOK için bütün asalların büyük üslüleri çarpılır.
Adım 1: EBOB(A, B) = 2^{2} · 3 · 5 = 60.
Adım 2: EKOK(A, B) = 2^{3} · 3^{2} · 5^{2} = 8 · 9 · 25 = 1800.
Adım 3: Oran: 1800 ÷ 60 = 30.
Sağlama: A = 600, B = 180 olur; A · B = 108000 ve EBOB · EKOK = 60 · 1800 = 108000. Ayrıca A ÷ 60 = 10 ve B ÷ 60 = 3; 10 · 3 = 30.
Sık yapılan hata: Üslerden birini yanlış seçmek ya da EBOB veya EKOK'ta kalıp soruyu sonuçlandırmamak.
Cevap B.`
},
{
  id: "mat-ck-340",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiftçi 60 koyunu ve 84 keçiyi ağıllara yerleştirecektir. Her ağılda eşit sayıda koyun ve eşit sayıda keçi bulunacak, hiçbir hayvan açıkta kalmayacaktır. Ağıl sayısı çift sayı olacaktır.
**Buna göre ağıl sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 1,
  hatalar: [
    "En büyük değeri atlama: ortak bölenlerden yalnızca 2, 4 ve 6 bulunmuş; 12 de çifttir ve uygundur.",
    null,
    "Çift koşulunu yarım uygulama: 1'i çıkarıp (2, 3, 4, 6, 12) 3'ü de sayma.",
    "Çift koşulunu uygulamama: 60 ile 84'ün bütün ortak bölenleri (1, 2, 3, 4, 6, 12) sayılmış."
  ],
  aciklama: `Ağıl sayısı hem 60'ı hem 84'ü kalansız bölmelidir; yani ortak bölendir. Ortak bölenler EBOB'un bölenleridir.
Adım 1: 60 = 2^{2} · 3 · 5 ve 84 = 2^{2} · 3 · 7. EBOB(60, 84) = 2^{2} · 3 = 12.
Adım 2: 12'nin çarpanları, yani ortak bölenler: 1, 2, 3, 4, 6, 12.
Adım 3: Çift olanlar: 2, 4, 6, 12 → 4 farklı değer.
Sık yapılan hata: Çift koşulunu unutup 6 demek ya da tek olan 3'ü saymak.
Cevap B.`
},
{
  id: "mat-ck-341",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kitap kulübünün elinde 84 roman ve 126 hikâye kitabı vardır. Kitaplar, her kolide eşit sayıda roman ve eşit sayıda hikâye kitabı bulunacak, hiçbir kitap açıkta kalmayacak biçimde kolilere yerleştirilecektir. Kulüp başkanı, her kolide en az 4 roman olmasını istemekte ve mümkün olan en çok sayıda koli hazırlanmasını istemektedir.
**Buna göre hazırlanan her kolide toplam kaç kitap bulunur?**`,
  gorsel: null,
  secenekler: ["4", "5", "6", "10"],
  dogru: 3,
  hatalar: [
    "Yalnızca romanları sayma: 84 ÷ 21 = 4 romandır, hikâye kitapları eklenmemiş.",
    "Koşulu uygulamama: 42 koli yapılırsa her kolide 2 roman ve 3 hikâye, yani 5 kitap düşer; ama bu durumda her kolide en az 4 roman koşulu bozulur.",
    "Yalnızca hikâye kitaplarını sayma: 126 ÷ 21 = 6 hikâyedir, romanlar eklenmemiş.",
    null
  ],
  aciklama: `Koli sayısı hem 84'ü hem 126'yı kalansız bölmelidir; yani 84 ile 126'nın ortak bölenidir. Ortak bölenler EBOB'un bölenleridir.
Adım 1: 84 = 2^{2} · 3 · 7 ve 126 = 2 · 3^{2} · 7 olduğundan EBOB(84, 126) = 2 · 3 · 7 = 42. Koli sayısı 42'nin bir çarpanıdır: 1, 2, 3, 6, 7, 14, 21, 42.
Adım 2: Her kolide en az 4 roman olacağından 84 ÷ koli sayısı ≥ 4 olmalıdır. 42 koli olursa kolide 2 roman düşer, uygun değildir. 21 koli olursa 4 roman düşer, uygundur.
Adım 3: En çok koli sayısı 21'dir. Her kolide 84 ÷ 21 = 4 roman ve 126 ÷ 21 = 6 hikâye vardır: 4 + 6 = 10 kitap.
Sağlama: 21 · 10 = 210 = 84 + 126.
Sık yapılan hata: EBOB'u (42) bulup koşulu denetlemeden devam etmek.
Cevap D.`
},
{
  id: "mat-ck-342",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, A sayısını bölen merdiveni ile asal çarpanlarına ayırmıştır. Ayırma işleminin tablosu aşağıda verilmiştir; tablonun ilk iki satırındaki sayılar silinmiş ve A ile B harfleriyle gösterilmiştir.
**Buna göre A sayısının pozitif tam sayı çarpanlarının sayısı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Sayı</th><th>Asal bölen</th></tr><tr><td>A</td><td>2</td></tr><tr><td>B</td><td>2</td></tr><tr><td>315</td><td>3</td></tr><tr><td>105</td><td>3</td></tr><tr><td>35</td><td>5</td></tr><tr><td>7</td><td>7</td></tr><tr><td>1</td><td>–</td></tr></table>`,
  secenekler: ["4", "6", "18", "36"],
  dogru: 3,
  hatalar: [
    "Farklı asal çarpan sayısını (2, 3, 5, 7) çarpan sayısı sanma.",
    "Üsleri toplama: 2 + 2 + 1 + 1 = 6; çarpan sayısı için üsler birer artırılıp çarpılır.",
    "7'yi hesaba katmama: (2 + 1)(2 + 1)(1 + 1) = 18 bulunur; 7 çarpanı da çarpıma girmelidir.",
    null
  ],
  aciklama: `Bölen merdiveninde her satırdaki sayı, sağındaki asal sayıya bölünerek bir alt satıra yazılır. O hâlde yukarı çıkarken asal bölenle çarpılır.
Adım 1: B = 315 · 2 = 630 ve A = 630 · 2 = 1260.
Adım 2: Sağ sütundaki asal bölenler 2, 2, 3, 3, 5, 7'dir: A = 2^{2} · 3^{2} · 5 · 7.
Adım 3: Çarpan sayısı için üsleri birer artırıp çarp: (2 + 1)(2 + 1)(1 + 1)(1 + 1) = 3 · 3 · 2 · 2 = 36.
Sağlama: 4 · 9 · 5 · 7 = 1260.
Sık yapılan hata: Üsleri toplamak ya da 7 gibi tek geçen bir asalın (1 + 1) = 2 katkısını unutmak.
Cevap D.`
},
{
  id: "mat-ck-343",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir anket çalışmasında 126 öğrenciden 84'ü yüzmeyi tercih etmiştir. Bu oran [[84|126]] kesriyle gösterilmiştir. Öğretmen kesri, pay ile paydası aralarında asal olacak biçimde yazmak istemektedir.
**Buna göre kesrin bu biçimdeki pay ile paydasının toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["5", "10", "15", "35"],
  dogru: 0,
  hatalar: [
    null,
    "Sadeleştirmeyi yarım bırakma: 21'e bölünüp [[4|6]] bulunmuş; 4 ile 6'nın ortak böleni 2'dir.",
    "Sadeleştirmeyi yarım bırakma: 14'e bölünüp [[6|9]] bulunmuş; 6 ile 9'un ortak böleni 3'tür.",
    "Sadeleştirmeyi yarım bırakma: 6'ya bölünüp [[14|21]] bulunmuş; 14 ile 21'in ortak böleni 7'dir."
  ],
  aciklama: `Pay ve paydası aralarında asal olan kesir en sade hâldedir. Bunun için pay ve payda, EBOB'larına bölünür.
Adım 1: 84 = 2^{2} · 3 · 7 ve 126 = 2 · 3^{2} · 7. EBOB(84, 126) = 2 · 3 · 7 = 42.
Adım 2: 84 ÷ 42 = 2 ve 126 ÷ 42 = 3. Kesir [[2|3]] olur.
Adım 3: Pay ile payda toplamı: 2 + 3 = 5.
Sağlama: 2 ile 3 aralarında asaldır.
Sık yapılan hata: Ortak bir bölene bölüp durmak. [[4|6]], [[6|9]] ve [[14|21]] hâlâ sadeleşir; EBOB'a bölünürse pay ile payda aralarında asal olur.
Cevap A.`
},
{
  id: "mat-ck-344",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir depodaki ürünlerin kodları 100'den küçük doğal sayılardır. Kodu, asal çarpanlarına ayrıldığında hem 2'yi hem 5'i bulunduran ve başka asal çarpanı olmayan ürünlere kırmızı etiket yapıştırılmıştır.
**Buna göre kaç ürüne kırmızı etiket yapıştırılmıştır?**`,
  gorsel: null,
  secenekler: ["4", "5", "6", "9"],
  dogru: 1,
  hatalar: [
    "Bir uygun kodu atlama: 50 = 2 · 5^{2} de uygundur.",
    null,
    "100'ü de sayma: 100'den küçük kodlar isteniyor, 100 bu aralığın dışındadır.",
    "10'un katlarını sayma: 30, 60 ve 90'ın asal çarpanları arasında 3 de vardır."
  ],
  aciklama: `Kod 2^{a} · 5^{b} biçiminde olmalıdır (a ≥ 1, b ≥ 1).
Adım 1: b = 1 için: 2 · 5 = 10, 2^{2} · 5 = 20, 2^{3} · 5 = 40, 2^{4} · 5 = 80. (2^{5} · 5 = 160 > 100)
Adım 2: b = 2 için: 2 · 25 = 50. (2^{2} · 25 = 100, 100'den küçük değil)
Adım 3: 10, 20, 40, 50, 80 → 5 ürün.
Sık yapılan hata: 10'un katlarına bakmak. 30 = 2 · 3 · 5 gibi sayıların 3 çarpanı da vardır; bunlar uygun değildir.
Cevap B.`
},
{
  id: "mat-ck-345",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir matematik kulübünde öğretmen, 150 sayısının bütün pozitif çarpanlarını tahtaya yazmıştır. Ardından Elif, tahtadan önce 1'i, sonra da asal olan sayıları silmiştir.
**Buna göre tahtada kaç sayı kalmıştır?**`,
  gorsel: null,
  secenekler: ["3", "4", "8", "12"],
  dogru: 2,
  hatalar: [
    "Yalnızca asal çarpanları sayma: 2, 3 ve 5 silinen sayılardır, kalanlar değil.",
    "Silinenleri sayma: 1 ile üç asal çarpan (2, 3, 5) silinmiştir; soru kalanları soruyor.",
    null,
    "Silme işlemini yapmama: 150'nin bütün çarpanları (12 tane) sayılmış."
  ],
  aciklama: `Asal sayı, 1'den büyük olup yalnızca 1'e ve kendisine bölünen sayıdır. Birden çok asal çarpanın çarpımı olan çarpanlar asal değildir.
Adım 1: 150 = 2 · 3 · 5^{2}. Çarpan sayısı (1 + 1)(1 + 1)(2 + 1) = 12'dir.
Adım 2: Çarpanlar: 1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150.
Adım 3: 1 silinir. Asal olanlar 2, 3 ve 5 silinir. 25 = 5 · 5 olduğu için asal değildir ve tahtada kalır.
Adım 4: Kalanlar 6, 10, 15, 25, 30, 50, 75, 150 olmak üzere 8 sayıdır.
Sağlama: 12 − 1 − 3 = 8.
Sık yapılan hata: Silinen sayıları saymak (4) ya da 1'i silmeyi unutup 9 bulmak.
Cevap C.`
},
{
  id: "mat-ck-346",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Defne, tuttuğu x sayısını arkadaşlarına şu ipuçlarıyla anlatmıştır: "x ile 14 aralarında asaldır ve x ile 14'ün EKOK'u 126'dır."
**Buna göre Defne'nin tuttuğu x sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["9", "18", "63", "126"],
  dogru: 0,
  hatalar: [
    null,
    "Aralarında asallığı denetlememe: EKOK(14, 18) = 126'dır ama 14 ile 18'in ortak böleni 2'dir.",
    "Aralarında asallığı denetlememe: EKOK(14, 63) = 126'dır ama 14 ile 63'ün ortak böleni 7'dir.",
    "EKOK'u cevap sanma: 126, EKOK'un kendisidir; x'i bulmak için 14'e bölmek gerekir."
  ],
  aciklama: `Aralarında asal iki sayının EBOB'u 1'dir. Bu nedenle EKOK, sayıların çarpımına eşittir (a · b = EBOB · EKOK = 1 · EKOK).
Adım 1: 14 · x = 126.
Adım 2: x = 126 ÷ 14 = 9.
Adım 3: Aralarında asallığı denetle: 14 = 2 · 7 ve 9 = 3^{2}; ortak asal çarpan yok. Şart sağlanır.
Sağlama: EKOK(14, 9) = 126.
Sık yapılan hata: Yalnızca EKOK şartına bakmak. 18 ve 63 de EKOK şartını sağlar ama 14 ile aralarında asal değildir.
Cevap A.`
},
{
  id: "mat-ck-347",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir otoparkta araçlara 300 ile 500 arasında numaralı biletler verilmiştir (300 ve 500 dâhil). Bilet numarası hem 12'ye hem 18'e tam bölünen araçlar indirimlidir.
**Buna göre indirimli araçların bilet numaraları arasında en büyük numara kaçtır?**`,
  gorsel: null,
  secenekler: ["396", "432", "468", "504"],
  dogru: 2,
  hatalar: [
    "Ortak katlardan iki öncekini alma: 500 ÷ 36 işleminde bölüm 13'tür; 36 · 11 = 396 daha küçük bir ortak kattır.",
    "Bir önceki ortak katı alma: 36 · 12 = 432'dir; 36 · 13 = 468 de 500'ü geçmez.",
    null,
    "Aralığı aşan ilk ortak katı alma: 504 > 500 olduğundan bilet numarası olamaz."
  ],
  aciklama: `Hem 12'ye hem 18'e bölünen sayılar, EKOK'un katlarıdır.
Adım 1: 12 = 2^{2} · 3 ve 18 = 2 · 3^{2}. EKOK(12, 18) = 2^{2} · 3^{2} = 36.
Adım 2: 500'ü 36'ya böl: 500 = 36 · 13 + 32. En büyük kat 36 · 13 = 468'dir.
Adım 3: 468 ≥ 300 olduğundan aralıktadır. Bir sonraki ortak kat 504, 500'ü aşar.
Sağlama: 468 ÷ 12 = 39 ve 468 ÷ 18 = 26.
Sık yapılan hata: Üst sınırı aşan 504'ü almak ya da bölümün küsuratını yanlış yuvarlamak.
Cevap C.`
},
{
  id: "mat-ck-348",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yarışmada 1'den 50'ye kadar numaralanmış kapılar vardır. Sunucu, numarası tam 3 pozitif çarpanı olan kapılardan en büyük numaralısının arkasında ödül bulunduğunu söylemiştir.
**Buna göre ödül kaç numaralı kapının arkasındadır?**`,
  gorsel: null,
  secenekler: ["25", "36", "47", "49"],
  dogru: 3,
  hatalar: [
    "Daha küçük bir uygun sayıda kalma: 49 = 7^{2} sayısının da tam 3 çarpanı vardır (1, 7, 49).",
    "Tam kare olmayı yeterli sanma: 36'nın 9 çarpanı vardır, 3 değil.",
    "Asal sayıyı seçme: bir asal sayının yalnızca 2 çarpanı vardır (1 ve kendisi).",
    null
  ],
  aciklama: `Çarpan sayısı için üsler birer artırılıp çarpılır. Çarpım 3 (asal) olacağına göre sayı tek bir asalın karesi olmalıdır: (2 + 1) = 3. Yani sayı p^{2} biçimindedir (p asal).
Adım 1: p = 2, 3, 5, 7 için 4, 9, 25, 49 bulunur. p = 11 için 121 > 50'dir.
Adım 2: Bunlardan en büyüğü 49'dur.
Sağlama: 49'un çarpanları 1, 7, 49 olmak üzere tam 3 tanedir.
Sık yapılan hata: 3 çarpanlı sayıları asal sayılarla karıştırmak. Asal sayının 2, asal sayının karesinin 3 çarpanı vardır.
Cevap D.`
},
{
  id: "mat-ck-349",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir spor salonunda dolap kartları 2'den 49'a kadar (2 ve 49 dâhil) numaralanmıştır. Görevli, numarası 30 ile aralarında asal olan ancak 77 ile aralarında asal olmayan kartları ayırmıştır.
**Buna göre görevli kaç kart ayırmıştır?**`,
  gorsel: null,
  secenekler: ["6", "5", "4", "3"],
  dogru: 3,
  hatalar: [
    "Yalnızca 2'yi eleme: 7, 11, 21, 33, 35 ve 49 sayılmış; oysa 21 ve 33, 3'e; 35 ise 5'e bölündüğünden 30 ile aralarında asal değildir.",
    "3'ü unutma: 7, 11, 21, 33 ve 49 sayılmış; oysa 21 ve 33, 30 ile 3 ortak böleni taşır.",
    "5'i unutma: 7, 11, 35 ve 49 sayılmış; oysa 35, 30 ile 5 ortak böleni taşır.",
    null
  ],
  aciklama: `İki sayı aralarında asalsa 1'den başka ortak bölenleri yoktur. 30 = 2 · 3 · 5 ve 77 = 7 · 11 olduğundan kart numarası 2'ye, 3'e ve 5'e bölünmemeli; ama 77 ile ortak çarpanı olması için 7'ye ya da 11'e bölünmelidir.
Adım 1: 2 ile 49 arasında 7'nin katları 7, 14, 21, 28, 35, 42, 49; 11'in katları 11, 22, 33, 44'tür.
Adım 2: Bunlardan 2, 3 ya da 5'e bölünenleri ele: 14, 28, 42 (2'ye); 21 (3'e); 35 (5'e); 22, 44 (2'ye); 33 (3'e) elenir.
Adım 3: Geriye 7, 11 ve 49 kalır: 3 kart.
Sağlama: 49 = 7 · 7; 30 ile ortak böleni yoktur, 77 ile ortak böleni 7'dir.
Sık yapılan hata: 30 ile aralarında asal olma koşulunun üç asal çarpanını da denetlememek.
Cevap D.`
},
{
  id: "mat-ck-350",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğretmen 100 kalem ve 160 silgiyi sınıftaki öğrencilere eşit sayıda dağıtmıştır. Dağıtım bitince hem kalemden hem silgiden 4'er adet artmış, artanlar dağıtıma katılmamıştır.
**Buna göre sınıf mevcudu en çok kaç olabilir?**`,
  gorsel: null,
  secenekler: ["4", "12", "20", "60"],
  dogru: 1,
  hatalar: [
    "Kalanı cevap sanma: 4, artan kalem ve silgi sayısıdır; öğrenci sayısı artandan büyük olmalıdır.",
    null,
    "Artanları çıkarmadan EBOB(100, 160) = 20 alma: 20 öğrenci olsaydı hiçbir şey artmazdı.",
    "Farkı cevap sanma: 160 − 100 = 60'tır ama iki sayının farkı öğrenci sayısını vermez."
  ],
  aciklama: `Artanlar dağıtıma katılmadığı için dağıtılan kalem 100 − 4 = 96, silgi 160 − 4 = 156'dır. Öğrenci sayısı bu iki sayıyı da kalansız bölmelidir; en çok istendiğinden EBOB aranır. Kalan 4 olduğundan öğrenci sayısı 4'ten büyük olmalıdır (kalan her zaman bölenden küçüktür).
Adım 1: 96 = 2^{5} · 3 ve 156 = 2^{2} · 3 · 13. EBOB = 2^{2} · 3 = 12.
Adım 2: 12 > 4 olduğundan koşul sağlanır.
Sağlama: 100 = 12 · 8 + 4 ve 160 = 12 · 13 + 4.
Sık yapılan hata: EBOB(100, 160) = 20 almak. Önce artanları çıkar, sonra EBOB al.
Cevap B.`
},
{
  id: "mat-ck-351",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilgi yarışmasında Ela'nın kartında 36 yazmaktadır. Rakibi Kaan'ın kartındaki sayının 100'den küçük bir doğal sayı olduğu ve iki kartın sayısının EBOB'unun tam 12 olduğu açıklanmıştır.
**Buna göre Kaan'ın kartında kaç farklı sayı yazıyor olabilir?**`,
  gorsel: null,
  secenekler: ["8", "7", "6", "5"],
  dogru: 2,
  hatalar: [
    "12'nin bütün katlarını (12, 24, …, 96) sayma: 36 ve 72 için EBOB 12 değil 36 çıkar.",
    "36'yı eleyip 72'yi unutma: EBOB(36, 72) = 36'dır, 12 değil.",
    null,
    "Bir uygun sayıyı atlama: 12, 24, 48, 60, 84 ve 96 sayılarından biri listeye alınmamış."
  ],
  aciklama: `EBOB'u 12 olan iki sayının her ikisi de 12'nin katıdır; 12'ye bölündüklerinde çıkan bölümler ise aralarında asaldır.
Adım 1: Kaan'ın sayısı 12k biçimindedir. 36 = 12 · 3 olduğundan k ile 3 aralarında asal olmalıdır; yani k, 3'ün katı olmamalıdır.
Adım 2: 12k < 100 olduğundan k = 1, 2, …, 8 değerlerine bakılır.
Adım 3: k = 3 (36) ve k = 6 (72) elenir; ikisinin de 36 ile EBOB'u 36'dır.
Adım 4: Geriye 12, 24, 48, 60, 84 ve 96 kalır: 6 sayı.
Sağlama: EBOB(36, 60) = 12 ve EBOB(36, 84) = 12.
Sık yapılan hata: 12'nin bütün katlarını saymak. 36 ve 72 de 12'nin katıdır ama EBOB'u 12 yapmazlar.
Cevap C.`
},
{
  id: "mat-ck-352",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kantine gelen simitler 10'arlı poşetlere konulduğunda son poşette 7 simit, 15'erli poşetlere konulduğunda ise son poşette 12 simit kalmaktadır. Simit sayısı üç basamaklıdır.
**Buna göre kantine gelen simit sayısı en az kaçtır?**`,
  gorsel: null,
  secenekler: ["117", "120", "123", "127"],
  dogru: 0,
  hatalar: [
    null,
    "Kalanları unutma: 120, 30'un katıdır; 10'a ve 15'e kalansız bölünür.",
    "Eksik yerine fazla alma: 30'un katının 3 fazlası olan 123, 10'a bölününce 3, 15'e bölününce de 3 kalan verir.",
    "Yalnızca ilk kalanı kullanma: 127, 10'a bölününce 7 kalan verir ama 15'e bölününce 7 kalır, 12 değil."
  ],
  aciklama: `10'a bölününce 7 kalıyorsa tam bölünmeye 3 eksiktir (10 − 7 = 3); 15'e bölününce 12 kalıyorsa yine 3 eksiktir (15 − 12 = 3). Eksikler eşit olduğundan sayı, ortak katın 3 eksiğidir.
Adım 1: EKOK(10, 15) = 30. Sayı 30k − 3 biçimindedir: 27, 57, 87, 117, …
Adım 2: Üç basamaklı en küçük değer k = 4 için 117'dir.
Sağlama: 117 = 10 · 11 + 7 ve 117 = 15 · 7 + 12.
Sık yapılan hata: Kalan farklı olduğu için EKOK yöntemini bırakmak. Kalanlar farklı olsa da eksikler eşitse "katın eksiği" olarak çöz.
Cevap A.`
},
{
  id: "mat-ck-353",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir matematik kulübünde öğrenciler, paydası 84 olan [[n|84]] biçimindeki kesirleri yazmaktadır. Burada n, 30'dan büyük ve 40'tan küçük bir doğal sayıdır. Kulüp öğretmeni, sadeleştirilemeyen kesirleri tahtaya asmıştır.
**Buna göre tahtaya asılan kesirlerin paylarının toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["103", "68", "37", "31"],
  dogru: 1,
  hatalar: [
    "7'yi unutma: 35 de sayılmış (31 + 35 + 37 = 103); oysa 35 ile 84'ün ortak böleni 7'dir.",
    null,
    "Yalnızca son uygun payı alma: 31 de 84 ile aralarında asaldır.",
    "Yalnızca ilk uygun payı bulup durma: 37 de 84 ile aralarında asaldır."
  ],
  aciklama: `Bir kesrin sadeleşmemesi için pay ile paydanın aralarında asal olması, yani 1'den başka ortak bölenlerinin bulunmaması gerekir. 84 = 2^{2} · 3 · 7 olduğundan pay 2'ye, 3'e ve 7'ye bölünmemelidir.
Adım 1: n = 31, 32, …, 39 değerlerini ele. Çift olanlar (32, 34, 36, 38) 2'ye bölünür; elenir.
Adım 2: Kalanlar 31, 33, 35, 37, 39. 33 ve 39, 3'e bölünür; 35, 7'ye bölünür. Elenirler.
Adım 3: Geriye 31 ve 37 kalır: 31 + 37 = 68.
Sık yapılan hata: Yalnızca 2 ve 3'e bakıp 7'yi unutmak; 35 sanki uygunmuş gibi toplamaya katılır.
Cevap B.`
},
{
  id: "mat-ck-354",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yarışmada dört yarışmacının kart numaraları 40, 63, 66 ve 195'tir. Sunucu, kart numaraları aralarında asal olan iki yarışmacıyı finale çıkaracağını açıklamıştır.
**Buna göre finale çıkan yarışmacıların kart numaraları aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["40 ve 63", "40 ve 66", "63 ve 195", "66 ve 195"],
  dogru: 0,
  hatalar: [
    null,
    "Ortak çarpanı gözden kaçırma: 40 = 2^{3} · 5 ve 66 = 2 · 3 · 11 sayılarının ortak böleni 2'dir.",
    "İkisi de tek diye aralarında asal sanma: 63 = 3^{2} · 7 ve 195 = 3 · 5 · 13 sayılarının ortak böleni 3'tür.",
    "Ortak çarpanı gözden kaçırma: 66 = 2 · 3 · 11 ve 195 = 3 · 5 · 13 sayılarının ortak böleni 3'tür."
  ],
  aciklama: `İki sayı aralarında asalsa asal çarpanlarından hiçbiri ortak değildir. Önce dört sayıyı asal çarpanlarına ayır.
Adım 1: 40 = 2^{3} · 5, 63 = 3^{2} · 7, 66 = 2 · 3 · 11, 195 = 3 · 5 · 13.
Adım 2: 40 ve 66 → ortak 2. 63 ve 195 → ortak 3. 66 ve 195 → ortak 3.
Adım 3: 40 ve 63 → ortak asal çarpan yok; EBOB = 1.
Sağlama: Diğer ikililer de ortak çarpan taşır: 40 ve 195 → 5; 63 ve 66 → 3. Yalnızca 40 ve 63 aralarında asaldır.
Sık yapılan hata: Tek ya da çift olmaya bakarak karar vermek. 63 ile 195 ikisi de tek sayıdır ama aralarında asal değildir.
Cevap A.`
},
{
  id: "mat-ck-355",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir pastanede bir günde satılan bütün pastaların [[5|12]]'si çikolatalı, [[7|18]]'i meyvelidir. Geri kalan pastalar başka çeşitlerdendir.
**Buna göre çikolatalı ve meyveli pastalar birlikte, satılan bütün pastaların kaçta kaçıdır?**`,
  gorsel: null,
  secenekler: ["[[12|30]]", "[[19|36]]", "[[29|36]]", "[[31|36]]"],
  dogru: 2,
  hatalar: [
    "Payları ve paydaları ayrı ayrı toplama: [[5 + 7|12 + 18]] = [[12|30]]; kesirler paydalar eşitlenmeden toplanmaz.",
    "Yalnızca ikinci kesri genişletme: [[5|12]] kesri [[15|36]] yapılmamış, 5 + 14 = 19 alınmış.",
    null,
    "Genişletme katsayılarını ters kullanma: 5 · 2 + 7 · 3 = 31 bulunmuş; oysa [[5|12]] 3 ile, [[7|18]] 2 ile genişletilir."
  ],
  aciklama: `Paydaları farklı kesirler toplanırken önce paydalar eşitlenir; en küçük ortak payda, paydaların EKOK'udur.
Adım 1: 12 = 2^{2} · 3 ve 18 = 2 · 3^{2} olduğundan EKOK(12, 18) = 2^{2} · 3^{2} = 36.
Adım 2: 36 ÷ 12 = 3 olduğundan [[5|12]] = [[15|36]]; 36 ÷ 18 = 2 olduğundan [[7|18]] = [[14|36]].
Adım 3: [[15|36]] + [[14|36]] = [[29|36]].
Sağlama: [[29|36]] 1'den küçüktür; geri kalan pastalar [[7|36]]'dır.
Sık yapılan hata: Payları ve paydaları ayrı ayrı toplamak. Payda eşitlemeden kesir toplanmaz.
Cevap C.`
},
{
  id: "mat-ck-356",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir belediye, 360 fidanı bir dikdörtgen düzeninde sıralara dikecektir. Tek sıralı düzen de (1 sıra) kabul edilmektedir. Sıra sayısı ile bir sıradaki fidan sayısı birbirinden farklı ve aralarında asal olacaktır. Sıra sayısı, bir sıradaki fidan sayısından az olacaktır.
**Buna göre fidanların dikim düzeni kaç farklı biçimde belirlenebilir?**`,
  gorsel: null,
  secenekler: ["4", "8", "12", "24"],
  dogru: 0,
  hatalar: [
    null,
    "Sıra ve sütunu ayırt edip iki kez sayma: sıra sayısı bir sıradaki fidan sayısından az olacağından her çift yalnızca bir yönde sayılır.",
    "Aralarında asallık koşulunu atlama: çarpımı 360 olan bütün farklı çiftler (12 çift) sayılmış.",
    "Çarpanları çift değil tek tek sayma: 360'ın 24 çarpanı vardır, her çiftte 2 çarpan bulunur."
  ],
  aciklama: `Sıra sayısı a, bir sıradaki fidan sayısı b olsun: a · b = 360 ve a, b aralarında asal. Aralarında asal iki sayının çarpımı 360 ise her asal çarpanın tamamı yalnızca bir tarafa gider.
Adım 1: 360 = 2^{3} · 3^{2} · 5. Asal çarpanların tam grupları: 8, 9 ve 5.
Adım 2: Bu üç grubu iki sayıya paylaştır. Bir tarafa hiçbir şey vermezsen 1 kalır: (1, 360); tek sıralı düzen kabul edildiği için bu çift de sayılır. Sonra: (8, 45), (9, 40), (5, 72).
Adım 3: 8'i iki parçaya bölmek (örneğin 4 ve 2) iki tarafta da 2 çarpanı bırakır ve aralarında asallığı bozar; başka paylaşım yoktur. Dört çift bulunur ve her çiftte küçük sayı sıra sayısıdır.
Sağlama: 1 · 360, 8 · 45, 9 · 40, 5 · 72 = 360 ve her çiftin EBOB'u 1'dir.
Sık yapılan hata: Çarpımı 360 olan her çifti saymak (EBOB(10, 36) = 2 gibi aralarında asal olmayanlar da çıkar).
Cevap A.`
},
{
  id: "mat-ck-357",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir müzede sergilenen bir eserin envanter numarası 1001'dir. Kataloğu hazırlayan görevli, bu numaranın iki basamaklı pozitif çarpanlarını ayrı ayrı kartlara yazmıştır. Sonra bu kartlardan farklı ikisini seçerek yazdığı sayıların aralarında asal olup olmadığına bakmıştır. İkili seçiminde sıra önemli değildir (11 ve 13 seçimi ile 13 ve 11 seçimi aynı sayılır).
**Buna göre görevlinin seçebileceği, sayıları aralarında asal olan kaç farklı kart ikilisi vardır?**`,
  gorsel: null,
  secenekler: ["2", "3", "4", "6"],
  dogru: 1,
  hatalar: [
    "Bir ikiliyi atlama: (11, 13), (11, 91) ve (13, 77) ikililerinden biri sayılmamış.",
    null,
    "Ortak çarpanlı bir ikiliyi de sayma: (11, 77) için 11, (13, 91) için 13, (77, 91) için 7 ortak bölendir.",
    "Aralarında asal olma koşulunu uygulamama: dört kartın bütün ikilileri (6 tane) sayılmış."
  ],
  aciklama: `İki sayı aralarında asalsa 1'den başka ortak bölenleri yoktur; yani asal çarpanlarından hiçbiri ortak değildir.
Adım 1: 1001 = 7 · 11 · 13. Çarpanları: 1, 7, 11, 13, 7 · 11 = 77, 7 · 13 = 91, 11 · 13 = 143 ve 1001.
Adım 2: İki basamaklı çarpanlar: 11, 13, 77 ve 91. Dört karttan 6 farklı ikili seçilebilir.
Adım 3: Asal çarpanlar: 11 → (11), 13 → (13), 77 → (7, 11), 91 → (7, 13).
Adım 4: (11, 13) ortak yok, (11, 91) ortak yok, (13, 77) ortak yok. (11, 77) ortak 11, (13, 91) ortak 13, (77, 91) ortak 7.
Adım 5: Aralarında asal olan 3 ikili vardır.
Sağlama: EBOB(11, 91) = 1 ve EBOB(13, 77) = 1.
Sık yapılan hata: 77 ile 91'in aralarında asal olduğunu sanmak (ikisi de 7'nin katıdır) ya da koşulu denetlemeden 6 demek.
Cevap B.`
},
{
  id: "mat-ck-358",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Ayşe 270 sayfalık, Mehmet 450 sayfalık birer kitap okumaktadır. İkisi de her gün aynı sayıda sayfa okuyacak ve kitabını tam bitirecektir; yani günlük sayfa sayısı kitabın sayfa sayısını kalansız bölmelidir. Günlük okunacak sayfa sayısı iki basamaklı bir sayı olacak ve Ayşe'nin kitabı en az 4 gün sürecektir.
**Buna göre günlük okunacak sayfa sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["12", "11", "6", "5"],
  dogru: 3,
  hatalar: [
    "Hiçbir koşulu uygulamama: 90'ın bütün çarpanları sayılmış.",
    "İki basamaklı koşulunu atlama: 1, 2, 3, 5, 6, 9 gibi tek basamaklı değerler de sayılmış (günlük 67 sayfayı geçmeyen bütün ortak bölenler).",
    "Gün koşulunu uygulamama: 90 sayfa da sayılmış; oysa Ayşe'nin kitabı 90 sayfa/gün ile 3 günde biter.",
    null
  ],
  aciklama: `Günlük sayfa sayısı hem 270'i hem 450'yi kalansız bölmelidir; yani ortak bölendir. Ortak bölenler EBOB'un bölenleridir.
Adım 1: 270 = 2 · 3^{3} · 5 ve 450 = 2 · 3^{2} · 5^{2}. EBOB = 2 · 3^{2} · 5 = 90.
Adım 2: 90'ın çarpanları: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90.
Adım 3: İki basamaklı olanlar: 10, 15, 18, 30, 45, 90.
Adım 4: Ayşe'nin kitabı en az 4 gün sürecek: 270 ÷ günlük sayfa ≥ 4. 90 için 270 ÷ 90 = 3 gün olduğundan elenir. 45 için 6 gün, 30 için 9 gün; uygundur.
Adım 5: Geriye 10, 15, 18, 30, 45 kalır: 5 değer.
Sık yapılan hata: 90'ı koşula uymasına rağmen listede bırakmak.
Cevap D.`
},
{
  id: "mat-ck-359",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bisiklet yarışmasında yarışmacılara 101'den 129'a kadar numaralar verilmiştir (101 ve 129 dâhil). Yarışma sonunda numarası 360 ile aralarında asal olan yarışmacılara hatıra madalyası verilecektir.
**Buna göre kaç yarışmacıya madalya verilir?**`,
  gorsel: null,
  secenekler: ["15", "12", "10", "8"],
  dogru: 3,
  hatalar: [
    "Yalnızca 2'ye bakma: tek sayıların hepsi (15 tane) sayılmış; 3 ve 5'e bölünenler elenmemiş.",
    "3'ü unutma: 3'e bölünen 111, 117, 123 ve 129 elenmemiş; bunların 360 ile ortak böleni 3'tür (105 zaten 5'e bölündüğü için elenmiştir).",
    "5'i unutma: 5'e bölünen tek sayılar (115 ve 125) elenmemiş; bunların 360 ile ortak böleni 5'tir.",
    null
  ],
  aciklama: `360 = 2^{3} · 3^{2} · 5 olduğundan 360 ile aralarında asal olan sayı 2'ye, 3'e ve 5'e bölünmemelidir.
Adım 1: 101'den 129'a kadar tek sayılar: 101, 103, …, 129 → 15 tane. Çiftler elenmiştir.
Adım 2: Bunlardan 3'e bölünenler: 105, 111, 117, 123, 129 (5 tane). Elenir; 10 kalır.
Adım 3: Kalanlardan 5'e bölünenler: 115 ve 125 (105 daha önce elendi). Elenir; 8 kalır.
Adım 4: Geriye 101, 103, 107, 109, 113, 119, 121, 127 kalır: 8 yarışmacı.
Sık yapılan hata: Asal çarpanlardan birini denetlememek. 119 = 7 · 17 ve 121 = 11^{2} asal olmasa da 360 ile aralarında asaldır.
Cevap D.`
},
{
  id: "mat-ck-360",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Zeynep, iki sayı kartı seçecektir. Kartlardaki sayılar 1'den büyük, birbirinden farklı ve aralarında asaldır. Bu iki sayının EKOK'u 84'tür. Zeynep, seçebileceği bütün kart çiftleri için kartlardaki iki sayının toplamını ayrı ayrı hesaplamış ve bulduğu farklı toplamları bir listeye yazmıştır.
**Buna göre listedeki toplamların toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["44", "56", "75", "160"],
  dogru: 2,
  hatalar: [
    "Bir çifti atlama: 25 + 19 = 44; (3, 28) çiftinin toplamı olan 31 listeye girmemiş.",
    "Bir çifti atlama: 31 + 25 = 56; (7, 12) çiftinin toplamı olan 19 listeye girmemiş.",
    null,
    "1'i de sayma: (1, 84) çifti 85 toplamını verir ama sayılar 1'den büyük olmalıdır."
  ],
  aciklama: `Aralarında asal iki sayının EKOK'u, çarpımlarına eşittir. Yani iki sayının çarpımı 84'tür.
Adım 1: 84 = 2^{2} · 3 · 7. Aralarında asal olabilmesi için her asalın tamamı yalnızca bir sayıya gider: 4, 3 ve 7 grupları.
Adım 2: Paylaşımlar: (1, 84), (4, 21), (3, 28), (7, 12). 1'den büyük olmaları gerektiğinden (1, 84) elenir.
Adım 3: Toplamlar: 4 + 21 = 25, 3 + 28 = 31, 7 + 12 = 19.
Adım 4: Toplamların toplamı: 25 + 31 + 19 = 75.
Sık yapılan hata: (2, 42) ve (6, 14) gibi çarpımı 84 olan ama aralarında asal olmayan çiftleri de saymak.
Cevap C.`
},
{
  id: "mat-ck-361",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sergide 24 tablo iki salona dağıtılacaktır. Her salonda en az bir tablo bulunacak, iki salondaki tablo sayıları birbirinden farklı ve aralarında asal olacaktır. Salonların sırası önemli değildir (örneğin 5 ve 19 ile 19 ve 5 aynı dağılımdır).
**Buna göre tabloların dağıtımı kaç farklı biçimde yapılabilir?**`,
  gorsel: null,
  secenekler: ["4", "6", "11", "22"],
  dogru: 0,
  hatalar: [
    null,
    "Aralarında asal olmayı tek sayı olmakla karıştırma: 3 ve 21 ya da 9 ve 15 çiftlerinin ortak böleni 3'tür; aralarında asal değildir.",
    "Aralarında asallık koşulunu hiç uygulamama: farklı sayılı 11 dağılımın hepsi sayılmış.",
    "Salonları ayırt edip iki kez sayma: sıra önemli olmadığı için (5, 19) ile (19, 5) aynı dağılımdır."
  ],
  aciklama: `İki salondaki tablo sayıları a ve b olsun: a + b = 24, a < b. a ile b'nin ortak böleni, toplamlarını da böler; yani 24'ü böler. Bu nedenle a ile b aralarında asal olabilmesi için a, 24 ile aralarında asal olmalıdır.
Adım 1: 24 = 2^{3} · 3. a, 2'ye ve 3'e bölünmemelidir. a < 12 olduğundan a = 1, 2, …, 11 değerlerine bak.
Adım 2: 2'ye ve 3'e bölünmeyenler: 1, 5, 7, 11.
Adım 3: Dağılımlar: (1, 23), (5, 19), (7, 17), (11, 13) → 4 farklı biçim.
Sağlama: Her çiftte ortak bölen yalnızca 1'dir. a = 12 olsaydı b de 12 olurdu; sayılar farklı olmalıdır.
Sık yapılan hata: Yalnızca tek sayılara bakıp 3, 9 gibi değerleri almak.
Cevap A.`
},
{
  id: "mat-ck-362",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir spor kulübünde üç kardeşin yaşları ardışık üç çift sayıdır ve yaşlarının çarpımı 1680'dir.
**Buna göre üç kardeşin yaşları toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["17", "23", "30", "36"],
  dogru: 3,
  hatalar: [
    "Farklı asal çarpanları toplama: 2 + 3 + 5 + 7 = 17; bu, yaşlar toplamı değildir.",
    "Asal çarpanları tekrarlarıyla toplama: 2 + 2 + 2 + 2 + 3 + 5 + 7 = 23; bu, yaşlar toplamı değildir.",
    "Yanlış üçlüyü seçme: 8, 10 ve 12'nin toplamı 30'dur ama çarpımları 960'tır, 1680 değil.",
    null
  ],
  aciklama: `Çarpımı verilen ardışık sayıları bulmak için çarpımı asal çarpanlarına ayır ve çarpanları birbirine yakın üç sayıya paylaştır.
Adım 1: 1680 = 2^{4} · 3 · 5 · 7. (1680 ÷ 2 = 840, ÷ 2 = 420, ÷ 2 = 210, ÷ 2 = 105 = 3 · 5 · 7)
Adım 2: Üç sayı birbirine yakındır; ortadaki sayı 12 civarındadır (12 · 12 · 12 = 1728 sayısı 1680'e yakındır).
Adım 3: Ardışık çift sayılar olarak 10, 12, 14 denenir: 10 = 2 · 5, 12 = 2^{2} · 3, 14 = 2 · 7 ve çarpım 2^{4} · 3 · 5 · 7 = 1680.
Adım 4: Yaşlar toplamı: 10 + 12 + 14 = 36.
Sağlama: 10 · 12 · 14 = 120 · 14 = 1680. Çarpım, sayılar büyüdükçe büyüdüğü için başka üçlü yoktur.
Sık yapılan hata: Asal çarpanların toplamını (17 ya da 23) cevap sanmak.
Cevap D.`
},
{
  id: "mat-ck-363",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir tiyatro kulübünün gardırobunda 504 mavi ve 756 beyaz kostüm bulunmaktadır. Kostümlerin hepsi, her kutuda eşit sayıda mavi ve eşit sayıda beyaz kostüm olacak, hiçbir kostüm açıkta kalmayacak biçimde kutulara yerleştirilecektir. Kulüp başkanı, kutu sayısı için hangi seçeneklerin olabileceğini merak etmektedir.
**Buna göre kutu sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["6", "9", "12", "18"],
  dogru: 3,
  hatalar: [
    "3'ü unutma: EBOB 2^{2} · 7 = 28 alınmış; 28'in 6 çarpanı vardır.",
    "7'yi unutma: EBOB 2^{2} · 3^{2} = 36 alınmış; 36'nın 9 çarpanı vardır.",
    "3'ün üssünü küçük alma: EBOB 2^{2} · 3 · 7 = 84 alınmış; 84'ün 12 çarpanı vardır.",
    null
  ],
  aciklama: `Kutu sayısı hem 504'ü hem 756'yı kalansız bölmelidir; yani ortak bölendir. Ortak bölenler EBOB'un bölenleridir.
Adım 1: 504 = 2^{3} · 3^{2} · 7 ve 756 = 2^{2} · 3^{3} · 7. Ortak asalların küçük üsleri: EBOB = 2^{2} · 3^{2} · 7 = 252.
Adım 2: 252'nin çarpan sayısı: (2 + 1)(2 + 1)(1 + 1) = 3 · 3 · 2 = 18.
Sağlama: 252'nin çarpanları 1, 2, 3, 4, 6, 7, 9, 12, 14, 18, 21, 28, 36, 42, 63, 84, 126, 252 olmak üzere 18 tanedir.
Sık yapılan hata: EBOB'u hesaplarken bir asalın üssünü yanlış almak ya da bir asalı atlamak.
Cevap D.`
},
{
  id: "mat-ck-364",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir dans kulübü, üye sayısını tam 10 farklı biçimde eşit sayıda üye içeren gruplara ayırabilmek istemektedir. Tek bir grup oluşturmak da, her üyenin ayrı bir grup olması da bu biçimlere dâhildir. Kulüp yönetimi, bu özelliği taşıyan en küçük üye sayısını bulmaya çalışmaktadır.
**Buna göre kulübün üye sayısı en az kaç olmalıdır?**`,
  gorsel: null,
  secenekler: ["48", "80", "162", "512"],
  dogru: 0,
  hatalar: [
    null,
    "İkinci asalı 3 yerine 5 seçme: 2^{4} · 5 = 80 sayısının da 10 çarpanı vardır ama 48'den büyüktür.",
    "Büyük asalı büyük üsse koyma: 2 · 3^{4} = 162 sayısının da 10 çarpanı vardır ama büyüktür.",
    "Tek asalla yazma: 2^{9} = 512 sayısının 10 çarpanı vardır ama çok büyüktür."
  ],
  aciklama: `Bir sayının çarpan sayısı, asal çarpanlarına ayrılmış biçimde üslerin birer fazlasının çarpımıdır. Çarpan sayısı 10 olmalıdır.
Adım 1: 10 sayısı iki biçimde yazılır: 10 = 10 ya da 10 = 5 · 2.
Adım 2: Birinci durumda sayı p^{9} biçimindedir; en küçüğü 2^{9} = 512.
Adım 3: İkinci durumda sayı p^{4} · q biçimindedir. Sayıyı küçük tutmak için küçük asalı büyük üsse koy: 2^{4} · 3 = 48. (3^{4} · 2 = 162 ve 2^{4} · 5 = 80 daha büyüktür.)
Adım 4: En küçüğü 48'dir.
Sağlama: 48'in çarpanları 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 olmak üzere 10 tanedir.
Sık yapılan hata: 512 gibi tek asallı sayıda durmak ya da büyük asala büyük üs vermek.
Cevap A.`
},
{
  id: "mat-ck-365",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kitapçı, 540 kitabı her rafta eşit sayıda kitap olacak ve hiç kitap açıkta kalmayacak biçimde raflara yerleştirecektir. Kitapçının raflarının sayısı yeterlidir. Kitapçı, raf başına kitap sayısının 6'nın katı olmasını istemektedir.
**Buna göre raf başına kitap sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["24", "18", "12", "6"],
  dogru: 2,
  hatalar: [
    "Koşulu uygulamama: 540'ın bütün çarpanları (2 + 1)(3 + 1)(1 + 1) = 24 sayılmış.",
    "2'nin üssünü sıfırdan başlatma: 2 için 3 seçenek (2^{0} dâhil) sayılmış; oysa 6'nın katı olması için en az bir 2 gerekir.",
    null,
    "5 çarpanını hesaba katmama: 2 için 2, 3 için 3 seçenek bulunur ve 5 sayılmaz; 2 · 3 = 6."
  ],
  aciklama: `Raf başına kitap sayısı 540'ın bir çarpanıdır ve 6 = 2 · 3'ün katı olmalıdır; yani çarpan en az bir 2 ve en az bir 3 içermelidir.
Adım 1: 540 = 2^{2} · 3^{3} · 5. Çarpan 2^{a} · 3^{b} · 5^{c} biçimindedir.
Adım 2: En az bir 2 ve bir 3 gerektiğinden a = 1, 2 (2 seçenek); b = 1, 2, 3 (3 seçenek); c = 0, 1 (2 seçenek).
Adım 3: Seçenekleri çarp: 2 · 3 · 2 = 12.
Sağlama: 6 · 90 = 540 olduğundan 6'nın katı olan çarpanlar, 90'ın çarpanlarının 6 katıdır. 90 = 2 · 3^{2} · 5 sayısının (1 + 1)(2 + 1)(1 + 1) = 12 çarpanı vardır.
Sık yapılan hata: Her asal için seçenek sayısını yanlış başlatmak; "en az bir 2 ve bir 3" demek bu asallar için 0 üssünü dışlar.
Cevap C.`
},
{
  id: "mat-ck-366",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir müzenin eser kodları 500'den küçük doğal sayılardır. Kodun asal çarpanları arasında hem 2 hem 3 vardır, başka asal çarpan yoktur ve kodun tam 12 pozitif çarpanı vardır. Bu özelliklere uyan kodlu eserler, vitrinin ön tarafına konulacaktır.
**Buna göre vitrinin ön tarafındaki eserlerin kodlarının toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["762", "654", "276", "168"],
  dogru: 0,
  hatalar: [
    null,
    "108'i atlama: 2^{2} · 3^{3} = 108 de koşulu sağlar; 72 + 96 + 486 = 654 eksiktir.",
    "486'yı atlama: 2 · 3^{5} = 486 da 500'den küçüktür; 72 + 96 + 108 = 276 eksiktir.",
    "100'den küçük sanma: yalnızca 72 ve 96 alınmış; oysa 108 ve 486 da 500'den küçüktür."
  ],
  aciklama: `Kod 2^{a} · 3^{b} biçimindedir (a ≥ 1, b ≥ 1). Çarpan sayısı (a + 1)(b + 1) = 12 olmalıdır.
Adım 1: a + 1 ve b + 1 en az 2'dir. 12'yi iki çarpana ayır: 2 · 6, 3 · 4, 4 · 3, 6 · 2.
Adım 2: (a, b) = (1, 5), (2, 3), (3, 2), (5, 1) bulunur.
Adım 3: Kodlar: 2 · 3^{5} = 486, 2^{2} · 3^{3} = 108, 2^{3} · 3^{2} = 72, 2^{5} · 3 = 96. Hepsi 500'den küçüktür.
Adım 4: Toplam: 486 + 108 + 72 + 96 = 762.
Sağlama: 72'nin çarpan sayısı (3 + 1)(2 + 1) = 12; 486'nın (1 + 1)(5 + 1) = 12.
Sık yapılan hata: Dört durumdan birini atlamak ya da 500 sınırını yanlış uygulamak.
Cevap A.`
},
{
  id: "mat-ck-367",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir matematik yarışmasında Aslı'ya beş kart verilmiştir. Kartlarda 15, 18, 25, 35 ve 40 sayıları yazmaktadır. Aslı, bu beş sayıyı birbiriyle çarpmış ve çarpımın sonunda kaç tane sıfır olduğunu merak etmiştir.
**Buna göre çarpımın sonunda kaç sıfır vardır?**`,
  gorsel: null,
  secenekler: ["3", "4", "5", "9"],
  dogru: 1,
  hatalar: [
    "Yalnızca 25 · 40 = 1000 çarpımına bakma: 3 sıfır bulunmuş; oysa diğer sayılardan da 2 ve 5 çarpanları gelir.",
    null,
    "5 çarpanlarının sayısını sıfır sayısı sanma: her sıfır bir 2 ve bir 5 ister; 2 çarpanı yalnızca 4 tanedir.",
    "2 ve 5 çarpanlarının sayılarını toplama: 4 + 5 = 9; her sıfır için 2 ve 5 birlikte kullanılır."
  ],
  aciklama: `Çarpımın sonundaki her sıfır, çarpımda bir 10 = 2 · 5 çarpanından gelir. Bu yüzden sıfır sayısı, çarpımdaki 2'lerin sayısı ile 5'lerin sayısından küçük olanıdır.
Adım 1: Sayıları asal çarpanlarına ayır: 15 = 3 · 5, 18 = 2 · 3^{2}, 25 = 5^{2}, 35 = 5 · 7, 40 = 2^{3} · 5.
Adım 2: 5 çarpanları: 1 + 0 + 2 + 1 + 1 = 5 tane.
Adım 3: 2 çarpanları: 0 + 1 + 0 + 0 + 3 = 4 tane.
Adım 4: 4 tane 2 ile ancak 4 tane 10 oluşur; bir 5 artar. Sıfır sayısı 4'tür.
Sağlama: Çarpım 2^{4} · 5^{5} · 3^{3} · 7 = 10^{4} · 5 · 189 biçimindedir ve sonunda 4 sıfır vardır.
Sık yapılan hata: Yalnızca 5'leri sayıp 5 demek. Her sıfır için bir 2 ve bir 5 gerekir; sayısı az olan çarpan sıfır sayısını belirler.
Cevap B.`
},
{
  id: "mat-ck-368",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir okulun iki servis aracı sabah 06.00'da aynı anda otoparktan çıkmıştır. A servisi her 40 dakikada bir, B servisi her 50 dakikada bir otoparktan çıkmaktadır. Okul müdürü, 06.00 ile 20.00 arasında (06.00 ve 20.00 dâhil) iki servisin aynı anda otoparktan çıktığı kaç an olduğunu merak etmektedir. 06.00'daki ortak çıkış da sayılacaktır.
**Buna göre bu ortak çıkışların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["5", "6", "17", "21"],
  dogru: 0,
  hatalar: [
    null,
    "Saat sınırını aşan bir ortak anı da sayma: 22.40'taki çıkış 20.00'den sonradır.",
    "Yalnızca 50 dakikalık servisi sayma: 840 ÷ 50 işleminin bölümü 16'dır ve başlangıçla 17 çıkış olur.",
    "Yalnızca 40 dakikalık servisin sefer sayısını bulma: 840 ÷ 40 = 21."
  ],
  aciklama: `İki servis, 06.00'dan hem 40'ın hem 50'nin katı kadar dakika sonra birlikte çıkar; aralık EKOK'tur.
Adım 1: 40 = 2^{3} · 5 ve 50 = 2 · 5^{2}. EKOK(40, 50) = 2^{3} · 5^{2} = 200 dakika = 3 saat 20 dakika.
Adım 2: Ortak çıkış anları: 06.00, 09.20, 12.40, 16.00, 19.20. Bir sonraki 22.40'tır ve 20.00'ü geçer.
Adım 3: 5 ortak çıkış vardır.
Sağlama: 06.00 ile 20.00 arası 14 saat = 840 dakikadır; 840 ÷ 200 işleminin bölümü 4'tür, 06.00 da sayıldığı için 4 + 1 = 5.
Sık yapılan hata: Başlangıç anını saymamak (4) ya da süreyi dakika ve saat arasında karıştırmak.
Cevap A.`
},
{
  id: "mat-ck-369",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğretmen 93 çikolata ve 131 şekeri sınıftaki öğrencilere eşit sayıda dağıtmıştır. Dağıtım sonunda çikolatadan 3, şekerden 5 adet artmış; artanlar dağıtılmamıştır.
**Buna göre sınıf mevcudu kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["6", "5", "4", "3"],
  dogru: 3,
  hatalar: [
    "Kalan koşullarını uygulamama: 18'in bütün bölenleri (1, 2, 3, 6, 9, 18) sayılmış; 1, 2 ve 3 öğrenciyle dağıtımda 5 şeker artamaz.",
    "Yalnızca 1'i eleme: 2 ve 3 öğrenciyle dağıtımda 5 şeker artamaz, kalan bölenden küçük olmalıdır.",
    "3'ü de sayma: 3 öğrenciyle dağıtımda 5 şeker artamaz; kalan, bölenden küçük olmalıdır.",
    null
  ],
  aciklama: `Artanlar dağıtıma katılmadığı için dağıtılan çikolata 93 − 3 = 90, şeker 131 − 5 = 126'dır. Öğrenci sayısı bu iki sayıyı da kalansız bölmelidir. Ayrıca kalan her zaman bölenden küçük olduğundan öğrenci sayısı hem 3'ten hem 5'ten büyük olmalıdır; yani 5'ten büyüktür.
Adım 1: 90 = 2 · 3^{2} · 5 ve 126 = 2 · 3^{2} · 7. EBOB(90, 126) = 2 · 3^{2} = 18.
Adım 2: Ortak bölenler 18'in çarpanlarıdır: 1, 2, 3, 6, 9, 18.
Adım 3: 5'ten büyük olanlar: 6, 9, 18 → 3 farklı değer.
Sağlama: 6 öğrenciyle 93 = 6 · 15 + 3 ve 131 = 6 · 21 + 5.
Sık yapılan hata: Ortak bölenlerin hepsini sayıp kalanın bölenden küçük olması koşulunu unutmak. İki kalandan büyüğü (5) sınırı belirler.
Cevap D.`
},
{
  id: "mat-ck-370",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir market, 420 süt kutusunu dikdörtgen düzeninde raflara dizecektir: her rafta eşit sayıda kutu bulunacak ve hiç kutu açıkta kalmayacaktır. Market sahibi, hem raf sayısının hem de bir raftaki kutu sayısının çift olmasını istemektedir. Ayrıca raf sayısı ile bir raftaki kutu sayısının toplamının mümkün olduğunca küçük olmasını da istemektedir.
**Buna göre bu toplam en az kaç olur?**`,
  gorsel: null,
  secenekler: ["41", "44", "52", "76"],
  dogru: 1,
  hatalar: [
    "Çift koşulunu atlama: birbirine en yakın çarpanlar 20 ve 21'dir (toplam 41) ama 21 tek sayıdır.",
    null,
    "Çarpan çiftlerinde erken durma: 10 · 42 çifti seçilmiş; 14 · 30 çiftinin toplamı daha küçüktür.",
    "Çarpan çiftlerinde erken durma: 6 · 70 çifti seçilmiş; 10 · 42 ve 14 · 30 çiftlerinin toplamı daha küçüktür."
  ],
  aciklama: `Çarpımı sabit olan iki sayının toplamı, sayılar birbirine ne kadar yakınsa o kadar küçüktür. Burada iki sayı da çift olmalıdır.
Adım 1: İki çarpan da çift olduğundan raf sayısı 2a, kutu sayısı 2b yazılır. 2a · 2b = 420 → a · b = 105.
Adım 2: Çarpımı 105 olan çiftler: (1, 105), (3, 35), (5, 21), (7, 15). Bunlara karşılık gelen (raf, kutu) çiftleri: (2, 210), (6, 70), (10, 42), (14, 30).
Adım 3: Toplamlar: 212, 76, 52, 44. En küçüğü 44'tür.
Sağlama: 14 · 30 = 420 ve ikisi de çifttir.
Sık yapılan hata: Çift koşulunu unutup birbirine en yakın çarpanlar olan 20 ile 21'i seçmek; 21 tek sayıdır.
Cevap B.`
},
{
  id: "mat-ck-371",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yarışmada 100'den küçük numaralar kullanılmıştır. Yarışma sunucusu, numarası tam üç farklı asal çarpana sahip olan numaralar arasından en büyük numaralı yarışmacıya büyük ödülü vereceğini açıklamıştır.
**Buna göre büyük ödülü hangi numaralı yarışmacı alır?**`,
  gorsel: null,
  secenekler: ["98", "96", "90", "84"],
  dogru: 2,
  hatalar: [
    "Tek bir asalın üssünü ayrı asal sanma: 98 = 2 · 7^{2} sayısının yalnızca 2 farklı asal çarpanı vardır (2 ve 7).",
    "Tekrarlı çarpanları farklı sayma: 96 = 2^{5} · 3 sayısının yalnızca 2 farklı asal çarpanı vardır (2 ve 3).",
    null,
    "Daha büyük uygun sayıyı gözden kaçırma: 84 = 2^{2} · 3 · 7 uygundur ama 90 = 2 · 3^{2} · 5 daha büyüktür."
  ],
  aciklama: `Farklı asal çarpan sayısı, sayıyı oluşturan farklı asalların sayısıdır (üsler bu sayıyı değiştirmez).
Adım 1: 99'dan geriye doğru kontrol et: 99 = 3^{2} · 11 (2 farklı asal), 98 = 2 · 7^{2} (2), 97 asal (1), 96 = 2^{5} · 3 (2), 95 = 5 · 19 (2), 94 = 2 · 47 (2), 93 = 3 · 31 (2), 92 = 2^{2} · 23 (2), 91 = 7 · 13 (2).
Adım 2: 90 = 2 · 3^{2} · 5 → farklı asallar 2, 3 ve 5. Tam üç tane; aranan sayı 90'dır.
Sağlama: 90'dan büyük hiçbir sayı üç farklı asal içermez; 84 = 2^{2} · 3 · 7 de üç asallıdır ama 90'dan küçüktür.
Sık yapılan hata: Üslü asalları ayrı asal saymak (96 = 2 · 2 · 2 · 2 · 2 · 3 altı çarpandır ama farklı asal sayısı 2'dir).
Cevap C.`
},
{
  id: "mat-ck-372",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir apartmanda iki görevli nöbet tutmaktadır. Selim 6 günde bir, Nehir 10 günde bir nöbet tutmaktadır. Bir Pazartesi günü ikisi de nöbet tutmuştur ve bu gün "1. ortak nöbet" sayılmıştır. Ortak nöbetler bundan sonra da aynı düzenle sürmektedir.
**Buna göre bir Pazar gününe denk gelen ilk ortak nöbet kaçıncı ortak nöbettir?**`,
  gorsel: null,
  secenekler: ["3", "4", "6", "7"],
  dogru: 1,
  hatalar: [
    "30 günü yanlış haftaya çevirme ya da ilk ortak nöbeti saymama: 30 = 4 · 7 + 2 olduğundan ortak nöbetler her seferinde 2 gün ilerler, 3 gün değil.",
    null,
    "EKOK yerine 6 · 10 = 60 alma: 60 = 8 · 7 + 4 olduğundan her seferinde 4 gün ilerlenir ve Pazar 6. nöbette bulunur; oysa ortak nöbetler 30 günde bir gelir.",
    "30 gün sonrasını aynı günden 1 gün ileri sanma: 30 = 4 · 7 + 2 olduğundan ilerleme 2 gündür, 1 gün değil."
  ],
  aciklama: `Önce ortak nöbetler arasındaki gün sayısı EKOK ile bulunur; sonra haftanın günü, geçen günlerin 7'ye bölümünden kalanla ilerler.
Adım 1: EKOK(6, 10) = 30. Ortak nöbetler 30 günde bir gelir.
Adım 2: 30 = 4 · 7 + 2 olduğundan her ortak nöbet, bir öncekinden 2 gün ileridedir.
Adım 3: 1. nöbet Pazartesi. 2. nöbet Çarşamba, 3. nöbet Cuma, 4. nöbet Pazar (Pazartesi + 6 gün).
Sağlama: 3 · 30 = 90 gün sonra: 90 = 12 · 7 + 6 ve Pazartesi'den 6 gün sonrası Pazar'dır.
Sık yapılan hata: EBOB ya da çarpımı (60) EKOK sanmak; 1. ortak nöbeti sayma dışı bırakmak.
Cevap B.`
},
{
  id: "mat-ck-373",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Hakan, birbirinden farklı iki doğal sayı yazmıştır. Bu sayıların toplamı 135, EBOB'u 15'tir. Sayıların yazılış sırası önemli değildir.
**Buna göre Hakan bu sayıları kaç farklı biçimde yazmış olabilir?**`,
  gorsel: null,
  secenekler: ["8", "4", "3", "2"],
  dogru: 2,
  hatalar: [
    "Koşulları uygulamadan m + n = 9 için bütün m = 1, …, 8 değerlerini sayma: sıra önemli değildir ve m ile n aralarında asal olmalıdır.",
    "EBOB koşulunu denetlememe: 45 ve 90 çifti de toplamı 135 yapar ama EBOB'u 45'tir.",
    null,
    "Bir çifti atlama: (1 · 15, 8 · 15), (2 · 15, 7 · 15) ve (4 · 15, 5 · 15) çiftlerinden biri gözden kaçmış."
  ],
  aciklama: `EBOB 15 olduğundan sayılar 15m ve 15n biçimindedir; m ile n aralarında asaldır (yoksa EBOB 15'ten büyük olurdu).
Adım 1: Toplam: 15m + 15n = 135 → m + n = 9.
Adım 2: m < n olan çiftler: (1, 8), (2, 7), (3, 6), (4, 5).
Adım 3: Aralarında asal olanlar: (1, 8), (2, 7), (4, 5). (3, 6) ortak böleni 3 olduğundan elenir.
Adım 4: Sayı çiftleri: (15, 120), (30, 105), (60, 75) → 3 farklı biçim.
Sağlama: EBOB(60, 75) = 15 ve 60 + 75 = 135.
Sık yapılan hata: (45, 90) çiftini de saymak; toplamı 135 yapar ama EBOB'u 45'tir.
Cevap C.`
},
{
  id: "mat-ck-374",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir saat atölyesinde birbirine geçmiş iki dişli çarkın küçüğünde 24, büyüğünde 40 diş vardır. Başlangıçta her çarkın boyayla işaretlenmiş birer dişi tam karşı karşıyadır. Çarklar dönmeye başlamış ve küçük çark toplam 100 tur atmıştır. İşaretli iki dişin yeniden karşı karşıya geldiği her an sayılacaktır.
**Buna göre bu süre içinde, başlangıç anı hariç, işaretli dişler kaç kez karşı karşıya gelir?**`,
  gorsel: null,
  secenekler: ["5", "20", "21", "100"],
  dogru: 1,
  hatalar: [
    "İlk karşılaşmanın tur sayısını cevap sanma: 5, küçük çarkın iki karşılaşma arasındaki tur sayısıdır.",
    null,
    "Başlangıç anını da sayma: soru başlangıç anını hariç tutuyor.",
    "Küçük çarkın tur sayısını cevap sanma: 100, küçük çarkın attığı tur sayısıdır."
  ],
  aciklama: `İşaretli dişler yeniden karşı karşıya geldiğinde geçen diş sayısı hem 24'ün hem 40'ın katıdır; ilk karşılaşma EKOK'ta olur.
Adım 1: 24 = 2^{3} · 3 ve 40 = 2^{3} · 5 olduğundan EKOK(24, 40) = 2^{3} · 3 · 5 = 120 diş.
Adım 2: Küçük çark bu sürede 120 ÷ 24 = 5 tur atar (büyük çark 120 ÷ 40 = 3 tur atar). Yani her 5 turda bir karşılaşma olur.
Adım 3: 100 tur boyunca 100 ÷ 5 = 20 karşılaşma olur (5., 10., …, 100. turlarda). 100. tur sonundaki karşılaşma da dâhildir.
Sağlama: 20 karşılaşma 20 · 120 = 2400 diş eder ve 2400 = 100 · 24 olur.
Sık yapılan hata: Başlangıç anını da sayıp 21 bulmak ya da 5 turu cevap sanmak.
Cevap B.`
},
{
  id: "mat-ck-375",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Efe, bir pozitif tam sayının bütün pozitif çarpanlarını küçükten büyüğe doğru bir şeride yazmıştır. Şeridin baş tarafından sayıldığında 6. sırada 6, son tarafından sayıldığında 6. sırada 10 yazmaktadır.
**Buna göre Efe'nin çarpanlarını yazdığı sayı kaçtır?**`,
  gorsel: null,
  secenekler: ["120", "60", "30", "16"],
  dogru: 1,
  hatalar: [
    "Çarpan çiftinin çarpımını iki katına çıkarma: 6 · 10 = 60 sayının kendisidir.",
    null,
    "Eşleşmeyi EKOK ile karıştırma: EKOK(6, 10) = 30'dur ama baştan ve sondan eşleşen çarpanların çarpımı sayıyı verir. 30'un baştan 6. çarpanı yoktur.",
    "Çarpanları toplama: 6 + 10 = 16; oysa eşleşen çarpanların çarpımı sayıya eşittir."
  ],
  aciklama: `Bir sayının çarpanları küçükten büyüğe yazıldığında baştan 1. çarpan ile sondan 1. çarpanın (1 ve sayının kendisi), baştan 2. ile sondan 2. çarpanın... çarpımı hep sayıya eşittir. Çünkü çarpanlar, çarpımı sayıyı veren çiftler hâlinde bulunur.
Adım 1: Baştan 6. çarpan 6 ve sondan 6. çarpan 10 eşleşen bir çifttir.
Adım 2: Sayı = 6 · 10 = 60.
Sağlama: 60'ın çarpanları 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60'tır. Baştan 6. çarpan 6, sondan 6. çarpan 10'dur.
Sık yapılan hata: 6 ve 10'u toplamak (16) ya da EKOK'u (30) almak. Eşleşen çarpanlar çarpılır.
Cevap B.`
}
);
