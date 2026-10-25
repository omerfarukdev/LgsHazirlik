// Matematik — Basit Olayların Olma Olasılığı | 5. dosya
// Kademe 3 (LGS Ayarı) yedeği: mat-ol-326…375 (50 soru; 30 düzey 3 + 20 düzey 4)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["olasilik"] = window.LGS_BANK["olasilik"] || []).push(
{
  id: "mat-ol-326",
  kazanim: "M.8.5.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir tombala oyununda toplar 12'den 47'ye kadar (12 ve 47 dâhil) numaralandırılmıştır. Oyun başlamadan önce 20 ve 21 numaralı topların bozuk olduğu fark edilmiş ve bu iki top torbadan çıkarılmıştır. Oyunun ilk topu torbadan rastgele çekilecektir.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["34","35","36","38"],
  dogru: 0,
  hatalar: [
    null,
    "Top sayısını son − ilk = 47 − 12 = 35 diye buldun. Uçlar dâhil olduğundan aralıkta 36 top vardır; üstelik bozuk toplar da çıkarılmalıdır.",
    "Aralıktaki 36 topu doğru saydın ama bozuk iki topu torbadan çıkarmayı unuttun.",
    "Bozuk topları toplama ekledin (36 + 2). Çıkarılan toplar artık çekilemez; olası durum sayısı azalır."
  ],
  aciklama: `Olası durum, çekilişte ortaya çıkabilecek her ayrı sonuçtur; burada torbada kalan her top ayrı bir durumdur.
Adım 1: 12'den 47'ye kadar (uçlar dâhil) top sayısı son − ilk + 1 = 47 − 12 + 1 = 36'dır.
Adım 2: Bozuk iki top çıkarılınca torbada 36 − 2 = 34 top kalır.
Adım 3: Her top bir olası durum olduğundan olası durum sayısı 34'tür.
Sağlama: 12'den 19'a kadar 8, 22'den 47'ye kadar 26 top vardır; 8 + 26 = 34.
Sık yapılan hata: Uç sayılardan birini saymamak. İki ucu da içeren aralıkta sayı adedi son − ilk + 1 ile bulunur.
Cevap A.`
},
{
  id: "mat-ol-327",
  kazanim: "M.8.5.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir Türkçe etkinliğinde “MARMARA” sözcüğünün her harfi aynı büyüklükteki ayrı bir karta yazılmıştır. Öğretmen ünlü harf yazan kartları kenara ayırmış, geriye kalan kartları bir kutuya koymuştur. Kutudan bakmadan bir kart çekilecektir.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["2","3","4","7"],
  dogru: 2,
  hatalar: [
    "Farklı ünsüz harfleri saydın (M ve R). Aynı harfi taşıyan iki kart ayrı iki durumdur; kartlar sayılır, harfler değil.",
    "Ünlü harf kartlarının sayısını (A, A, A) buldun. Ünlü kartlar kenara ayrıldı; kutuda ünsüz kartlar var.",
    null,
    "Ayırma koşulunu kullanmadan bütün kartları saydın. Kutuda yalnızca ünsüz harf kartları bulunur."
  ],
  aciklama: `Her kart ayrı bir olası durumdur; aynı harfi taşıyan iki kart da iki ayrı durum oluşturur.
Adım 1: MARMARA sözcüğünde 7 harf, yani 7 kart vardır: M, A, R, M, A, R, A.
Adım 2: Ünlü harf yazan kartlar (3 tane A) kenara ayrıldığı için kutuda yalnızca ünsüz kartlar kalır: M, R, M, R.
Adım 3: Kutuda 4 kart olduğundan olası durum sayısı 4'tür.
Sağlama: Ayrılan 3 ünlü kart ile kutudaki 4 ünsüz kart, 7 kartın tamamını verir.
Sık yapılan hata: Farklı harf sayısını (2) durum sayısı sanmak. Durum sayısı kart sayısıdır.
Cevap C.`
},
{
  id: "mat-ol-328",
  kazanim: "M.8.5.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir spor kulübünün öğrenci listesinde 40 öğrenci vardır ve her öğrenci yalnızca bir branşa kayıtlıdır. Kayıtlı öğrenci sayıları branşlara göre şöyledir: basketbol 14, voleybol 14, futbol 8, yüzme 4. Kulüp başkanı bu listeden rastgele bir öğrenci seçip ona teşekkür belgesi verecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Seçilen öğrencinin yüzmeye kayıtlı olma olasılığı, futbola kayıtlı olma olasılığından fazladır.","Seçilen öğrencinin futbola kayıtlı olma olasılığı, yüzmeye kayıtlı olma olasılığının yarısına eşittir.","Seçilen öğrencinin voleybola kayıtlı olma olasılığı [[1|4]]'tür.","Seçilen öğrencinin basketbola kayıtlı olma olasılığı, voleybola kayıtlı olma olasılığına eşittir."],
  dogru: 3,
  hatalar: [
    "Sayıları ters karşılaştırdın: yüzmede 4, futbolda 8 öğrenci vardır. Aynı listeden seçimde öğrenci sayısı az olan branşın olasılığı da azdır.",
    "Oranı ters kurdun: futbolda 8, yüzmede 4 öğrenci vardır; futbolun olasılığı yüzmeninkinin iki katıdır.",
    "Dört branşı eş şanslı sanıp [[1|4]] aldın. Branşlardaki öğrenci sayıları farklıdır; olasılık [[14|40]] = [[7|20]]'dir.",
    null
  ],
  aciklama: `Aynı listeden seçim yapılırken öğrenci sayısı çok olan branşın olasılığı da çok olur; sayıları eşit olan branşların olasılığı eşittir.
Adım 1: Basketbol ve voleybolda 14'er öğrenci vardır; ikisinin olasılığı da [[14|40]]'tır, yani eşittir.
Adım 2: Futbolda 8, yüzmede 4 öğrenci vardır; futbolun olasılığı yüzmeninkinden fazladır ve iki katıdır.
Adım 3: Voleybol olasılığı [[14|40]] = [[7|20]]'dir, [[1|4]] değildir; çünkü branşlar eş şanslı değildir.
Sık yapılan hata: Branş sayısına (4) bakıp her branşa [[1|4]] vermek. Eş şans, yalnızca öğrenci sayıları eşitse olur.
Cevap D.`
},
{
  id: "mat-ol-329",
  kazanim: "M.8.5.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul kermesinde 1'den 24'e kadar (1 ve 24 dâhil) numaralandırılmış 24 özdeş kart bir kutuya konmuştur. Kutudan bakmadan bir kart çekilecektir. Dört arkadaş, çekilen kartın numarasıyla ilgili birer olay belirlemiştir.
**Buna göre bu olaylardan hangisinin gerçekleşme olasılığı diğer üçünden __farklıdır__?**`,
  gorsel: null,
  secenekler: ["Sayının tek olması","Sayının çift olması","Sayının iki basamaklı olması","Sayının 12'den büyük olması"],
  dogru: 2,
  hatalar: [
    "Numaralar 1'den başladığı için tek sayıların daha çok olduğunu sandın. 1'den 24'e kadar 12 tek, 12 çift sayı vardır; olasılık [[12|24]] = [[1|2]].",
    "0'ı da çift sayı sayıp 13 çift sayı buldun. Kartlar 1'den başlar; çift sayılar 2, 4, …, 24 olmak üzere 12 tanedir ([[1|2]]).",
    null,
    "12'yi de sayıp 13 sayı buldun. 12'den büyük sayılar 13, 14, …, 24 olmak üzere 12 tanedir ([[1|2]])."
  ],
  aciklama: `Aynı kutudan çekilişte payda hep 24'tür; bu yüzden olaya uyan kart sayısı eşit olan olayların olasılığı da eşittir.
Adım 1: Tek sayılar 1, 3, …, 23: 12 tane. Çift sayılar 2, 4, …, 24: 12 tane. İkisinin de olasılığı [[12|24]] = [[1|2]]'dir.
Adım 2: 12'den büyük sayılar 13'ten 24'e kadardır: 24 − 12 = 12 tane. Olasılığı yine [[1|2]]'dir.
Adım 3: İki basamaklı sayılar 10'dan 24'e kadardır: 24 − 10 + 1 = 15 tane. Olasılığı [[15|24]] = [[5|8]]'dir; diğer üçünden farklıdır.
Sağlama: Bir sayıdan sonraki ve önceki sayılar birbirini tamamladığından 24 kartın yarısı (12 kart) tek, yarısı çifttir.
Sık yapılan hata: 0'ı kartlara katmak ya da 12'yi "12'den büyük" sayılara dâhil etmek.
Cevap C.`
},
{
  id: "mat-ol-330",
  kazanim: "M.8.5.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sınıfta öğretmen, nöbetçi öğrenciyi belirlemek için çekiliş yapacaktır. Torbada özdeş 7 kâğıt vardır: Deniz'in adı 4 kâğıda, Ece'nin, Mert'in ve Selin'in adları ise birer kâğıda yazılmıştır. Kâğıtlar iyice karıştırılacak ve torbadan bakmadan bir kâğıt çekilecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Dört öğrencinin seçilme olasılığı eşittir ve her biri [[1|4]]'tür.","Deniz'in seçilme olasılığı [[4|7]]'dir; diğer her öğrencinin olasılığı [[1|7]]'dir.","Dört öğrencinin seçilme olasılığı eşittir ve her biri [[1|7]]'dir.","Deniz'in seçilme olasılığı [[1|2]]'dir; diğer her öğrencinin olasılığı [[1|6]]'dır."],
  dogru: 1,
  hatalar: [
    "Öğrenci sayısını (4) olası durum sayısı sandın. Eş şanslı olan öğrenciler değil kâğıtlardır; Deniz'in 4 kâğıdı, diğerlerinin birer kâğıdı vardır.",
    null,
    "Her kâğıdın olasılığını doğru buldun ([[1|7]]) ama öğrencileri eş şanslı saydın. Deniz'in adı 4 kâğıtta olduğundan olasılığı 4 · [[1|7]] = [[4|7]]'dir.",
    "Önce “Deniz” ve “diğerleri” diye iki durum sayıp [[1|2]] aldın. Bu iki durum eş şanslı değildir; Deniz 4 kâğıtta, diğer üç öğrenci toplam 3 kâğıttadır."
  ],
  aciklama: `Eş şanslı n durumda her birinin olasılığı [[1|n]]'dir. Bir öğrencinin seçilme olasılığı, adının yazılı olduğu kâğıt sayısının bütün kâğıt sayısına oranıdır. Burada eş şanslı olan öğrenciler değil, özdeş kâğıtlardır.
Adım 1: Torbada 7 özdeş kâğıt vardır; her kâğıdın çekilme olasılığı [[1|7]]'dir.
Adım 2: Deniz'in adı 4 kâğıtta olduğundan seçilme olasılığı 4 · [[1|7]] = [[4|7]]'dir.
Adım 3: Ece, Mert ve Selin'in adları birer kâğıtta olduğundan her birinin olasılığı [[1|7]]'dir. Öğrencilerin şansı eşit değildir.
Sağlama: [[4|7]] + [[1|7]] + [[1|7]] + [[1|7]] = [[7|7]] = 1.
Sık yapılan hata: Öğrenci sayısına bakıp her öğrenciye [[1|4]] vermek. Olası durumlar öğrenciler değil, kâğıtlardır.
Cevap B.`
},
{
  id: "mat-ol-331",
  kazanim: "M.8.5.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki çark, farklı büyüklükte altı dilime ayrılmıştır. Her dilimin harfi ve merkez açısı şekil üzerinde gösterilmiştir. Çark bir kez çevrilecek ve ok bir dilimde duracaktır.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 340" role="img" aria-label="Çark: A 90, B 90, C 60, D 60, E 30 ve F 30 derece."><path d="M280 190 L313.87 54.16 A140 140 0 0 1 415.84 223.87 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L415.84 223.87 A140 140 0 0 1 246.13 325.84 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L246.13 325.84 A140 140 0 0 1 145.42 228.59 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L145.42 228.59 A140 140 0 0 1 179.29 92.75 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L179.29 92.75 A140 140 0 0 1 241.41 55.42 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L241.41 55.42 A140 140 0 0 1 313.87 54.16 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="359.2" y="140.41" font-size="15" text-anchor="middle" font-weight="bold">A</text><text x="359.2" y="157.41" font-size="14" text-anchor="middle">90°</text><text x="327.59" y="267.2" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="327.59" y="284.2" font-size="14" text-anchor="middle">90°</text><text x="215.81" y="254.47" font-size="15" text-anchor="middle" font-weight="bold">C</text><text x="215.81" y="271.47" font-size="14" text-anchor="middle">60°</text><text x="184.91" y="164.29" font-size="15" text-anchor="middle" font-weight="bold">D</text><text x="184.91" y="181.29" font-size="14" text-anchor="middle">60°</text><text x="222.32" y="92" font-size="15" text-anchor="middle" font-weight="bold">E</text><text x="222.32" y="109" font-size="14" text-anchor="middle">30°</text><text x="278.05" y="76.02" font-size="15" text-anchor="middle" font-weight="bold">F</text><text x="278.05" y="93.02" font-size="14" text-anchor="middle">30°</text><polygon points="267,26 293,26 280,60" fill="currentColor"/><circle cx="280" cy="190" r="6" fill="currentColor"/></svg>`,
  secenekler: ["Altı dilimin her birinin gelme olasılığı [[1|6]]'dır.","A diliminin gelme olasılığı, B diliminin gelme olasılığından fazladır.","A diliminin gelme olasılığı, E diliminin gelme olasılığının iki katına eşittir.","E diliminin gelme olasılığı, C diliminin gelme olasılığının yarısına eşittir."],
  dogru: 3,
  hatalar: [
    "Dilimleri eş sandın. Açılar farklı olduğundan olasılıklar da farklıdır; örneğin A için [[90|360]] = [[1|4]].",
    "A ve B dilimlerinin ikisi de 90°'dir; olasılıkları eşittir ([[1|4]]).",
    "Açıların oranını yanlış aldın: 90 ÷ 30 = 3 olduğundan A'nın olasılığı E'ninkinin üç katıdır.",
    null
  ],
  aciklama: `Dilimleri eş olmayan bir çarkta olasılık dilim sayısıyla değil, dilimin merkez açısıyla bulunur: olasılık = dilimin açısı ÷ 360°.
Adım 1: A ve B için [[90|360]] = [[1|4]]; C ve D için [[60|360]] = [[1|6]]; E ve F için [[30|360]] = [[1|12]].
Adım 2: [[1|12]], [[1|6]]'nın yarısıdır; yani E'nin olasılığı C'ninkinin yarısıdır.
Adım 3: A ve B'nin olasılıkları eşittir; A'nın olasılığı E'ninkinin 3 katıdır ([[1|4]] = 3 · [[1|12]]).
Sağlama: 90 + 90 + 60 + 60 + 30 + 30 = 360°; olasılıklar toplamı [[1|4]] + [[1|4]] + [[1|6]] + [[1|6]] + [[1|12]] + [[1|12]] = 1.
Sık yapılan hata: Dilim sayısına bakıp altı dilime [[1|6]] vermek.
Cevap D.`
},
{
  id: "mat-ol-332",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir hava durumu uygulaması, bir şehirde yarın kar yağma olasılığını %35 olarak vermiştir. Dört arkadaş bu bilgiye dayanarak birer çıkarım yapmış ve çıkarımlar aşağıdaki seçeneklerde verilmiştir.
**Buna göre bu çıkarımlardan hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: ["Kar yağmama olasılığı %65'tir.","Kar yağması imkânsız değildir.","Olasılık %50'den az olduğu için yarın kar yağmayacaktır.","Kar yağma olasılığı, kar yağmama olasılığından azdır."],
  dogru: 2,
  hatalar: [
    "Bu çıkarım doğru: olma ve olmama olasılıklarının toplamı %100 olduğundan 100 − 35 = 65. Soru yanlış olanı soruyor.",
    "Bu çıkarım doğru: olasılığı 0 olmayan olay olabilir. İmkânsız olayın olasılığı 0'dır.",
    null,
    "Bu çıkarım doğru: %35, %65'ten küçüktür. Soru yanlış olanı soruyor."
  ],
  aciklama: `Olasılık bir olayın olma şansını ölçer; kesinlik bildirmez. Olasılığı 0 olan olay imkânsız, 1 olan olay kesindir; aradaki her değerde olay hem olabilir hem olmayabilir.
Adım 1: Kar yağma olasılığı %35 ise yağmama olasılığı 100 − 35 = %65'tir.
Adım 2: %35, 0'dan büyük olduğundan kar yağması imkânsız değildir; %35 < %65 olduğundan yağma olasılığı yağmama olasılığından azdır.
Adım 3: %35, %50'den küçüktür ama 0 değildir; bu yüzden “yarın kar yağmayacaktır” kesinliği yanlıştır.
Sık yapılan hata: Küçük olasılığı imkânsız olay sanmak. Yalnızca olasılığı 0 olan olay olamaz.
Cevap C.`
},
{
  id: "mat-ol-333",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çekilişte hediye paketleri kırmızı, mavi ve yeşil renkli kâğıtlarla sarılmıştır. Hediye seçmek için sırası gelen bir katılımcı paketlerden birini bakmadan alacaktır. Kırmızı kâğıtlı paket alma olasılığı 0,3; mavi kâğıtlı paket alma olasılığı %45'tir.
**Buna göre yeşil kâğıtlı paket alma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|4]]","[[11|20]]","[[7|10]]","[[3|4]]"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca mavi olasılığını çıkardın (1 − 0,45 = 0,55). Kırmızı olasılığını da çıkarmalısın.",
    "Yalnızca kırmızı olasılığını çıkardın (1 − 0,3 = 0,7). Mavi olasılığını da çıkarmalısın.",
    "Kırmızı ve mavinin olasılıkları toplamını (0,3 + 0,45 = 0,75) yeşilin olasılığı sandın. Bu değer yeşil olmama olasılığıdır."
  ],
  aciklama: `Bir deneyin bütün sonuçlarının olasılıkları toplamı 1'dir. Buradaki sonuçlar kâğıt renkleridir: kırmızı, mavi, yeşil.
Adım 1: Yüzdeyi ondalığa çevir: %45 = 0,45.
Adım 2: Kırmızı ve mavinin toplamı 0,30 + 0,45 = 0,75'tir.
Adım 3: Yeşil için 1 − 0,75 = 0,25 = [[1|4]] kalır.
Sağlama: 0,30 + 0,45 + 0,25 = 1.
Sık yapılan hata: Bulunan 0,75'i cevap sanmak. 0,75, yeşil olmama olasılığıdır.
Cevap A.`
},
{
  id: "mat-ol-334",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kütüphanede 1'den 90'a kadar (1 ve 90 dâhil) numaralandırılmış 90 üye kartı vardır. Kartlar özdeş zarflara konup bir kutuya atılmıştır. Kutudan rastgele bir zarf çekilecek; kartın numarası hem 3'e hem 5'e tam bölünüyorsa o üyeye hediye verilecektir.
**Buna göre hediye verilme olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|3]]","[[1|5]]","[[1|6]]","[[1|15]]"],
  dogru: 3,
  hatalar: [
    "Yalnızca 3'ün katlarını saydın (30 tane). Koşul hem 3'e hem 5'e bölünmedir.",
    "Yalnızca 5'in katlarını saydın (18 tane). Koşul hem 3'e hem 5'e bölünmedir.",
    "15 sayısını 15 tane kart sanıp [[15|90]] yazdın. Ortak katların sayısı 15 değil, 90 ÷ 15 = 6'dır.",
    null
  ],
  aciklama: `Hem 3'e hem 5'e bölünen sayılar, 3 ve 5'in ortak katlarıdır; yani 15'in katlarıdır.
Adım 1: 15'in katları 15, 30, 45, 60, 75, 90'dır; 90 ÷ 15 = 6 tanedir.
Adım 2: Olası durum sayısı 90'dır.
Adım 3: Olasılık [[6|90]] = [[1|15]].
Sağlama: 3'ün katları 30, 5'in katları 18 tanedir; ikisine birden uyanlar yalnızca 6 sayıdır ve 15'in katlarıdır.
Sık yapılan hata: Koşullardan yalnızca birini kullanmak.
Cevap D.`
},
{
  id: "mat-ol-335",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir dondurma dükkânının dolabındaki dondurmaların çeşitlere göre sayısı aşağıdaki tabloda verilmiştir. Öğleden önce 3 çikolatalı ve 2 limonlu dondurma satılmıştır. Öğleden sonra dolaptan bakmadan rastgele bir dondurma alınacaktır.
**Buna göre alınan dondurmanın çikolatalı __olmama__ olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Çeşit</th><th>Dondurma sayısı</th></tr><tr><td>Vanilya</td><td>14</td></tr><tr><td>Çikolata</td><td>18</td></tr><tr><td>Çilek</td><td>10</td></tr><tr><td>Limon</td><td>8</td></tr></table>`,
  secenekler: ["[[2|3]]","[[16|25]]","[[3|5]]","[[1|3]]"],
  dogru: 0,
  hatalar: [
    null,
    "Satışları hiç hesaba katmadın: çikolatalı olmayanlar 32, toplam 50 alındı.",
    "Payı satıştan sonra buldun (30) ama paydayı eski toplam (50) bıraktın. Satıştan sonra toplam 45 olur.",
    "Çikolatalı olma olasılığını buldun ([[15|45]]). Soru olmama olasılığını soruyor."
  ],
  aciklama: `Satıştan sonra dolaptaki dondurma sayıları değişir; hem pay hem payda yeniden bulunmalıdır.
Adım 1: Çikolatalı dondurma 18 − 3 = 15, limonlu dondurma 8 − 2 = 6 olur. Vanilya (14) ve çilek (10) değişmez.
Adım 2: Yeni toplam 14 + 15 + 10 + 6 = 45'tir.
Adım 3: Çikolatalı olmayan dondurma 45 − 15 = 30 tanedir. Olasılık [[30|45]] = [[2|3]].
Sağlama: Çikolatalı olma olasılığı [[15|45]] = [[1|3]]; [[1|3]] + [[2|3]] = 1.
Sık yapılan hata: Pay ve paydadan yalnızca birini güncellemek.
Cevap A.`
},
{
  id: "mat-ol-336",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kırtasiye albümündeki 24 çıkartma yalnızca mavi, yeşil ve kırmızı renklidir. Çıkartmalardan biri bakmadan seçilecektir. Mavi çıkartma seçme olasılığı [[1|3]], yeşil çıkartma seçme olasılığı [[3|8]]'dir.
**Buna göre albümde kaç kırmızı çıkartma vardır?**`,
  gorsel: null,
  secenekler: ["7","8","9","17"],
  dogru: 0,
  hatalar: [
    null,
    "Mavi çıkartma sayısını buldun (24 · [[1|3]] = 8). Soru kırmızıyı soruyor.",
    "Yeşil çıkartma sayısını buldun (24 · [[3|8]] = 9). Soru kırmızıyı soruyor.",
    "Mavi ve yeşil çıkartmaların toplamını (8 + 9) buldun. Kırmızıyı bulmak için bu toplamı 24'ten çıkarmalısın."
  ],
  aciklama: `Bir olayın olasılığıyla toplam çarpılırsa o olaya ait nesne sayısı bulunur.
Adım 1: Mavi çıkartma sayısı 24 · [[1|3]] = 8'dir.
Adım 2: Yeşil çıkartma sayısı 24 · [[3|8]] = 9'dur.
Adım 3: Kırmızı çıkartma sayısı 24 − 8 − 9 = 7'dir.
Sağlama: Kırmızı olasılığı [[7|24]]; [[8|24]] + [[9|24]] + [[7|24]] = 1.
Sık yapılan hata: Mavi ve yeşil sayılarının toplamını (17) cevap sanmak.
Cevap A.`
},
{
  id: "mat-ol-337",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki çark, üzerinde 1'den 10'a kadar sayılar yazılı 10 eş dilime ayrılmıştır. Çark bir kez çevrilecek ve ok bir dilimde duracaktır.
**Buna göre okun gösterdiği sayının 10'un böleni __olmama__ olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 340" role="img" aria-label="Çark: 1 den 10 a kadar sayılar yazılı 10 eş dilim."><path d="M280 190 L313.87 54.16 A140 140 0 0 1 387.25 100.01 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L387.25 100.01 A140 140 0 0 1 419.66 180.23 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L419.66 180.23 A140 140 0 0 1 398.73 264.19 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L398.73 264.19 A140 140 0 0 1 332.44 319.81 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L332.44 319.81 A140 140 0 0 1 246.13 325.84 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L246.13 325.84 A140 140 0 0 1 172.75 279.99 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L172.75 279.99 A140 140 0 0 1 140.34 199.77 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L140.34 199.77 A140 140 0 0 1 161.27 115.81 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L161.27 115.81 A140 140 0 0 1 227.56 60.19 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L227.56 60.19 A140 140 0 0 1 313.87 54.16 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="334.9" y="107.14" font-size="15" text-anchor="middle" font-weight="bold">1</text><text x="376.06" y="156.19" font-size="15" text-anchor="middle" font-weight="bold">2</text><text x="380.52" y="220.06" font-size="15" text-anchor="middle" font-weight="bold">3</text><text x="346.59" y="274.36" font-size="15" text-anchor="middle" font-weight="bold">4</text><text x="287.23" y="298.35" font-size="15" text-anchor="middle" font-weight="bold">5</text><text x="225.1" y="282.86" font-size="15" text-anchor="middle" font-weight="bold">6</text><text x="183.94" y="233.81" font-size="15" text-anchor="middle" font-weight="bold">7</text><text x="179.48" y="169.94" font-size="15" text-anchor="middle" font-weight="bold">8</text><text x="213.41" y="115.64" font-size="15" text-anchor="middle" font-weight="bold">9</text><text x="272.77" y="91.65" font-size="15" text-anchor="middle" font-weight="bold">10</text><polygon points="267,26 293,26 280,60" fill="currentColor"/><circle cx="280" cy="190" r="6" fill="currentColor"/></svg>`,
  secenekler: ["[[9|10]]","[[7|10]]","[[3|5]]","[[2|5]]"],
  dogru: 2,
  hatalar: [
    "Yalnızca 10'u bölen saydın. 10'un böleni 10 dışında 1, 2 ve 5'tir.",
    "1'i bölen saymayıp bölenleri 3 tane buldun. 1 de 10'u böler; bölenler 1, 2, 5, 10'dur.",
    null,
    "10'un bölenlerinin olasılığını buldun (1, 2, 5, 10: [[4|10]]). Soru bölen olmamayı soruyor."
  ],
  aciklama: `Bir sayının böleni, o sayıyı kalansız bölen sayıdır.
Adım 1: 10'un bölenleri 1, 2, 5, 10'dur; çarkta 4 dilimde bu sayılar vardır.
Adım 2: Bölen olmayan sayılar 3, 4, 6, 7, 8, 9'dur: 6 dilim.
Adım 3: Olasılık [[6|10]] = [[3|5]].
Sağlama: Bölen olma olasılığı [[4|10]] = [[2|5]]; [[2|5]] + [[3|5]] = 1.
Sık yapılan hata: “Olmama” sözcüğünü atlayıp bölenleri saymak ([[2|5]]).
Cevap C.`
},
{
  id: "mat-ol-338",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul kırtasiyesindeki 40 kalemin bulunduğu kutuda yalnızca kırmızı, mavi ve yeşil kalemler vardır. Kutudan bakmadan bir kalem alınacaktır. Kırmızı kalem alma olasılığı 0,35; mavi kalem alma olasılığı %40'tır.
**Buna göre kutuda kaç yeşil kalem vardır?**`,
  gorsel: null,
  secenekler: ["24","16","14","10"],
  dogru: 3,
  hatalar: [
    "Mavi olmayan kalemleri buldun (40 − 16). Bu sayı kırmızı ve yeşili birlikte verir.",
    "Mavi kalem sayısını buldun (40 · 0,40 = 16). Soru yeşil kalemi soruyor.",
    "Kırmızı kalem sayısını buldun (40 · 0,35 = 14). Soru yeşil kalemi soruyor.",
    null
  ],
  aciklama: `Olasılık ile toplam çarpılırsa nesne sayısı bulunur; kalan renk, toplamdan diğerleri çıkarılarak bulunur.
Adım 1: Kırmızı kalem sayısı 40 · 0,35 = 14'tür.
Adım 2: %40 = 0,40 olduğundan mavi kalem sayısı 40 · 0,40 = 16'dır.
Adım 3: Yeşil kalem sayısı 40 − 14 − 16 = 10'dur.
Sağlama: Yeşil olasılığı [[10|40]] = 0,25 ve 0,35 + 0,40 + 0,25 = 1.
Sık yapılan hata: Mavi olmayan kalem sayısını (24) cevap sanmak.
Cevap D.`
},
{
  id: "mat-ol-339",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir mozaik pano, aşağıda gösterildiği gibi 6 sütun ve 5 satırdan oluşan 30 eş kareden yapılmıştır. Bir arı, karelerden birine rastgele konacaktır.
**Arının, panonun kenarlarından en az birine dokunan bir kareye konma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 290" role="img" aria-label="6 sütun ve 5 satırdan oluşan 30 eş kareli pano."><rect x="130" y="30" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="130" y="74" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="130" y="118" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="130" y="162" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="130" y="206" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="180" y="30" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="180" y="74" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="180" y="118" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="180" y="162" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="180" y="206" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="230" y="30" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="230" y="74" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="230" y="118" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="230" y="162" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="230" y="206" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="30" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="74" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="118" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="162" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="206" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="330" y="30" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="330" y="74" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="330" y="118" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="330" y="162" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="330" y="206" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="380" y="30" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="380" y="74" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="380" y="118" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="380" y="162" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="380" y="206" width="50" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="280" y="20" font-size="15" text-anchor="middle" font-weight="bold">6 kare</text><text x="118" y="130" font-size="15" text-anchor="end" font-weight="bold">5</text><text x="118" y="148" font-size="15" text-anchor="end" font-weight="bold">kare</text><text x="280" y="272" font-size="14" text-anchor="middle">Panonun kenarlarına dokunan kareler de dâhildir.</text></svg>`,
  secenekler: ["[[11|15]]","[[3|5]]","[[2|5]]","[[2|15]]"],
  dogru: 1,
  hatalar: [
    "Kenarları 2 · 6 + 2 · 5 = 22 diye saydın; köşe kareleri iki kez saymış oldun.",
    null,
    "İçteki kareleri buldun (4 · 3 = 12; [[12|30]]). Soru kenara dokunan kareleri soruyor.",
    "Yalnızca 4 köşe karesini saydın ([[4|30]]). Kenar boyunca duran bütün kareler kenara dokunur."
  ],
  aciklama: `Kenarlara dokunan kareler en dıştaki karelerdir; iç kareler hiçbir kenara değmez.
Adım 1: İçteki kareler 4 sütun ve 3 satırdan oluşur: 4 · 3 = 12 kare.
Adım 2: Kenara dokunan kare sayısı 30 − 12 = 18'dir.
Adım 3: Olasılık [[18|30]] = [[3|5]].
Sağlama: Üst ve alt sıralarda 6 + 6 = 12, yan sütunlarda köşeler hariç 3 + 3 = 6 kare vardır; 12 + 6 = 18.
Sık yapılan hata: Köşe karelerini iki kez sayıp 22 bulmak.
Cevap B.`
},
{
  id: "mat-ol-340",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir torbada 4 mavi top ve bir miktar kırmızı top vardır (kırmızı top sayısı 0 ya da daha büyük bir doğal sayıdır). Torbadan rastgele bir top çekilecektir.
**Buna göre mavi top çekme olasılığı aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: ["[[1|4]]","[[1|2]]","[[2|3]]","[[3|4]]"],
  dogru: 3,
  hatalar: [
    "Bu değer olabilir: 12 kırmızı topla toplam 16 olur ve mavi olasılığı [[4|16]] = [[1|4]] bulunur. Soru olamayan değeri soruyor.",
    "Bu değer olabilir: 4 kırmızı topla toplam 8 olur ve mavi olasılığı [[4|8]] = [[1|2]] bulunur. Soru olamayan değeri soruyor.",
    "Bu değer olabilir: 2 kırmızı topla toplam 6 olur ve mavi olasılığı [[4|6]] = [[2|3]] bulunur. Soru olamayan değeri soruyor.",
    null
  ],
  aciklama: `Kırmızı top sayısına k denirse toplam 4 + k olur ve mavi olasılığı 4 bölü (4 + k) biçimindedir; k bir doğal sayı olmalıdır.
Adım 1: Olasılık [[1|4]] ise 4 mavi top toplamın dörtte biridir; toplam 16, k = 12. Olabilir.
Adım 2: Olasılık [[1|2]] ise toplam 8, k = 4; olasılık [[2|3]] ise toplam 6, k = 2. İkisi de olabilir.
Adım 3: Olasılık [[3|4]] ise toplam 4 ÷ [[3|4]] = [[16|3]] olmalıdır. Bu doğal sayı değildir, yani k bulunamaz. Bu olasılık olamaz.
Sağlama: Toplam 5 olsaydı olasılık [[4|5]], toplam 4 olsaydı 1 olurdu; [[3|4]] bu iki değerin arasında kalır ve hiçbir toplam top sayısıyla elde edilemez.
Sık yapılan hata: Yalnızca 0 ile 1 arasında olduğu için bir değerin olabileceğini sanmak. Top sayıları doğal sayı olmak zorundadır.
Cevap D.`
},
{
  id: "mat-ol-341",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kutuda 4 beyaz ve 8 siyah lego parçası vardır. Kutuya 4 beyaz ve 2 siyah lego parçası daha eklenecek, sonra kutudan bakmadan bir parça alınacaktır.
**Buna göre alınan parçanın beyaz olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[5|9]]","[[1|2]]","[[4|9]]","[[1|3]]"],
  dogru: 2,
  hatalar: [
    "Beyaz olmama olasılığını ([[10|18]]) buldun. Soru beyaz olma olasılığını soruyor.",
    "Eklenen 2 siyah parçayı paydaya katmadın ([[8|16]]). Siyah parçalar da toplamı artırır.",
    null,
    "Eklemeleri hiç hesaba katmadın ([[4|12]]). Parçalar eklendikten sonra hem pay hem payda değişir."
  ],
  aciklama: `Ekleme yapıldığında hem istenen durum sayısı hem toplam değişebilir.
Adım 1: Eklemeden sonra beyaz parça 4 + 4 = 8, siyah parça 8 + 2 = 10 olur.
Adım 2: Toplam parça sayısı 8 + 10 = 18'dir.
Adım 3: Olasılık [[8|18]] = [[4|9]].
Sağlama: [[8|18]] + [[10|18]] = 1.
Sık yapılan hata: Eklenen parçaların yalnızca bir kısmını paya ya da paydaya katmak.
Cevap C.`
},
{
  id: "mat-ol-342",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sınıfta 30 öğrenci vardır ve sınıf listesinden rastgele seçilen bir öğrencinin kız olma olasılığı [[3|5]]'tir. Sınıfa 4 yeni erkek öğrenci katılmıştır. Öğretmen, güncel sınıf listesinden rastgele bir öğrenci seçecektir.
**Buna göre seçilen öğrencinin kız olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[8|17]]","[[9|17]]","[[3|5]]","[[11|17]]"],
  dogru: 1,
  hatalar: [
    "Erkek olma olasılığını ([[16|34]]) buldun. Soru kız olma olasılığını soruyor.",
    null,
    "Yeni gelen öğrencileri hesaba katmadın. Toplam 34 olduğu için olasılık değişir.",
    "Yeni gelen 4 öğrenciyi de kız sayıp paya ekledin ([[22|34]]). Yeni gelenler erkektir."
  ],
  aciklama: `Sınıf mevcudu değiştiğinde olasılık yeniden hesaplanır.
Adım 1: 30 · [[3|5]] = 18 kız, 30 − 18 = 12 erkek öğrenci vardır.
Adım 2: 4 yeni erkek öğrenciyle sınıf mevcudu 30 + 4 = 34 olur; kız sayısı 18 olarak kalır.
Adım 3: Olasılık [[18|34]] = [[9|17]].
Sağlama: Erkek olma olasılığı [[16|34]] = [[8|17]]; [[9|17]] + [[8|17]] = 1.
Sık yapılan hata: Eski olasılığı ([[3|5]]) yeni sınıf için de geçerli sanmak.
Cevap B.`
},
{
  id: "mat-ol-343",
  kazanim: "M.8.5.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul gezisinde otobüsün koltukları 20'den 55'e kadar (20 ve 55 dâhil) numaralandırılmıştır ve her numara tek bir koltuğa aittir. Gezi sonunda küçük bir hediyenin kime verileceği, yalnızca tek numaralı koltuklar arasından belirlenecektir. Tek numaralı her koltuğun numarası ayrı bir kâğıda yazılıp bir torbaya atılacak ve torbadan bir kâğıt çekilecektir.
**Bu çekilişin olası durumlarının sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["36","34","19","18"],
  dogru: 3,
  hatalar: [
    "Aralıktaki bütün koltukları saydın (55 − 20 + 1). Çekilişe yalnızca tek numaralı koltuklar giriyor.",
    "55 − 21 = 34 buldun ama bunu ikiye bölmedin. Tek sayılar ikişer ikişer artar; ayrıca uçtaki koltuk da sayılır.",
    "Tek sayıları 19'dan başlatarak saydın. Aralık 20'den başladığı için ilk tek numara 21'dir.",
    null
  ],
  aciklama: `Her kâğıt ayrı bir olası durumdur; kâğıt sayısı, tek numaralı koltuk sayısına eşittir.
Adım 1: Tek numaralı koltuklar 21, 23, 25, …, 55'tir.
Adım 2: Ardışık tek sayılar 2'şer artar. Sayı adedi (55 − 21) ÷ 2 + 1 = 17 + 1 = 18'dir.
Adım 3: Olası durum sayısı 18'dir.
Sağlama: Aralıkta 55 − 20 + 1 = 36 koltuk vardır; 20 çift, 55 tek olduğundan yarısı tek numaralıdır: 18.
Sık yapılan hata: (55 − 21) ÷ 2 = 17 bulup sonuna +1 eklemeyi ya da hiç ikiye bölmemeyi unutmak.
Cevap D.`
},
{
  id: "mat-ol-344",
  kazanim: "M.8.5.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki iki çarkın her biri eş dilimlere ayrılmıştır. M harfi mavi dilimi, B harfi beyaz dilimi göstermektedir. Çarklardan her biri bir kez çevrilecek ve okun bir dilimde durması beklenecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 310" role="img" aria-label="Birinci çark 8 eş dilimli, 3 mavi 5 beyaz; ikinci çark 6 eş dilimli, 2 mavi 4 beyaz."><path d="M140 170 L177.46 77.28 A100 100 0 0 1 232.05 130.93 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M140 170 L232.05 130.93 A100 100 0 0 1 232.72 207.46 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M140 170 L232.72 207.46 A100 100 0 0 1 179.07 262.05 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M140 170 L179.07 262.05 A100 100 0 0 1 102.54 262.72 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M140 170 L102.54 262.72 A100 100 0 0 1 47.95 209.07 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M140 170 L47.95 209.07 A100 100 0 0 1 47.28 132.54 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M140 170 L47.28 132.54 A100 100 0 0 1 100.93 77.95 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M140 170 L100.93 77.95 A100 100 0 0 1 177.46 77.28 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="187.66" y="126.5" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="208" y="174.41" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="188.5" y="222.66" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="140.59" y="243" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="92.34" y="223.5" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="72" y="175.59" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="91.5" y="127.34" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="139.41" y="107" font-size="15" text-anchor="middle" font-weight="bold">B</text><polygon points="127,46 153,46 140,80" fill="currentColor"/><circle cx="140" cy="170" r="6" fill="currentColor"/><path d="M420 170 L470 83.4 A100 100 0 0 1 520 170 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M420 170 L520 170 A100 100 0 0 1 470 256.6 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M420 170 L470 256.6 A100 100 0 0 1 370 256.6 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M420 170 L370 256.6 A100 100 0 0 1 320 170 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M420 170 L320 170 A100 100 0 0 1 370 83.4 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M420 170 L370 83.4 A100 100 0 0 1 470 83.4 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="477.16" y="142" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="477.16" y="208" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="420" y="241" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="362.84" y="208" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="362.84" y="142" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="420" y="109" font-size="15" text-anchor="middle" font-weight="bold">B</text><polygon points="407,46 433,46 420,80" fill="currentColor"/><circle cx="420" cy="170" r="6" fill="currentColor"/><text x="140" y="298" font-size="16" text-anchor="middle" font-weight="bold">1. çark</text><text x="420" y="298" font-size="16" text-anchor="middle" font-weight="bold">2. çark</text></svg>`,
  secenekler: ["Okun mavi dilimde durma olasılığı 1. çarkta daha fazladır.","Okun mavi dilimde durma olasılığı 2. çarkta daha fazladır.","Okun mavi dilimde durma olasılığı iki çarkta da eşittir.","Okun beyaz dilimde durma olasılığı 1. çarkta daha fazladır."],
  dogru: 0,
  hatalar: [
    null,
    "Dilim sayısı az olan çarkı seçtin. 1. çarkta mavi dilimler çarkın [[3|8]]'ini, 2. çarkta [[2|6]] = [[1|3]]'ünü kaplar.",
    "Mavi dilim sayılarına bakıp (3 ve 2) toplam dilim sayısını unuttun. [[3|8]] ile [[1|3]] eşit değildir.",
    "Beyaz dilim sayısına baktın (5 > 4). Beyaz olasılıkları [[5|8]] = 0,625 ve [[4|6]] ≈ 0,667'dir; 2. çarkta daha fazladır."
  ],
  aciklama: `Eş dilimli çarkta olasılık = istenen dilim sayısı ÷ bütün dilim sayısıdır. Farklı çarkları karşılaştırırken kesirler ortak paydada ya da ondalık gösterimle kıyaslanır.
Adım 1: 1. çarkta mavi olasılığı [[3|8]], 2. çarkta [[2|6]] = [[1|3]]'tür.
Adım 2: Ortak payda 24 alınırsa [[3|8]] = [[9|24]] ve [[1|3]] = [[8|24]]; [[9|24]] > [[8|24]].
Adım 3: Mavi olasılığı 1. çarkta daha fazladır. Beyaz için durum tersine döner: [[5|8]] = [[15|24]], [[4|6]] = [[16|24]].
Sık yapılan hata: Yalnızca dilim sayısına bakmak. Her çarkta toplam dilim sayısı da farklıdır.
Cevap A.`
},
{
  id: "mat-ol-345",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `“ÇANAKKALE” sözcüğünün her harfi aynı büyüklükteki ayrı bir karta yazılmıştır. Bu kartlardan K harfli olanlardan biri kaybolmuştur. Kalan kartlar aşağıda gösterilmiştir. Kalan kartlar karıştırılıp ters çevrilecek ve içlerinden biri rastgele çekilecektir.
**Buna göre çekilen kartta A harfi olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 110" role="img" aria-label="Kalan 8 kart: Ç, A, N, A, K, A, L, E."><rect x="38" y="22" width="50" height="70" rx="6" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="63" y="66" font-size="22" text-anchor="middle" font-weight="bold">Ç</text><rect x="100" y="22" width="50" height="70" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="125" y="66" font-size="22" text-anchor="middle" font-weight="bold">A</text><rect x="162" y="22" width="50" height="70" rx="6" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="187" y="66" font-size="22" text-anchor="middle" font-weight="bold">N</text><rect x="224" y="22" width="50" height="70" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="249" y="66" font-size="22" text-anchor="middle" font-weight="bold">A</text><rect x="286" y="22" width="50" height="70" rx="6" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="311" y="66" font-size="22" text-anchor="middle" font-weight="bold">K</text><rect x="348" y="22" width="50" height="70" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="373" y="66" font-size="22" text-anchor="middle" font-weight="bold">A</text><rect x="410" y="22" width="50" height="70" rx="6" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="435" y="66" font-size="22" text-anchor="middle" font-weight="bold">L</text><rect x="472" y="22" width="50" height="70" rx="6" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="497" y="66" font-size="22" text-anchor="middle" font-weight="bold">E</text></svg>`,
  secenekler: ["[[1|4]]","[[1|3]]","[[3|8]]","[[5|8]]"],
  dogru: 2,
  hatalar: [
    "A harfi yazan kartları 2 tane saydın ([[2|8]]). Şekilde A harfi 3 kartta vardır.",
    "Kaybolan kartı hesaba kattın ([[3|9]]). Kayıp kart artık seçilemez; kutuda 8 kart var.",
    null,
    "A harfi gelmeme olasılığını ([[5|8]]) buldun. Soru A gelme olasılığını soruyor."
  ],
  aciklama: `Aynı harfi taşıyan kartlar da ayrı birer olası durumdur.
Adım 1: ÇANAKKALE sözcüğünde 9 harf vardır; K kartlarından biri kaybolunca 8 kart kalır.
Adım 2: Kalan kartlarda A harfi 3 kartta geçer: Ç, A, N, A, K, A, L, E.
Adım 3: Olasılık [[3|8]].
Sağlama: A olmayan kartlar 5 tanedir; [[3|8]] + [[5|8]] = 1.
Sık yapılan hata: Kaybolan kartı paydadan çıkarmayı unutup [[3|9]] = [[1|3]] bulmak.
Cevap C.`
},
{
  id: "mat-ol-346",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul kütüphanesinde 120 kitap vardır ve kitaplar yalnızca roman, hikâye ve şiir türündendir. Kütüphaneci kitaplardan birini bakmadan seçecektir. Roman seçme olasılığı 0,45'tir. Hikâye kitaplarının sayısı şiir kitaplarının sayısının 2 katıdır.
**Buna göre seçilen kitabın hikâye kitabı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[11|60]]","[[11|30]]","[[9|20]]","[[11|20]]"],
  dogru: 1,
  hatalar: [
    "Şiir kitaplarının olasılığını buldun ([[22|120]]). Hikâye sayısı şiirin 2 katıdır.",
    null,
    "Verilen roman olasılığını (0,45) cevap sandın. Soru hikâye kitabını soruyor.",
    "Roman olmayan kitapların olasılığını ([[66|120]]) buldun. Bu olasılık hikâye ve şiiri birlikte içerir."
  ],
  aciklama: `Adım 1: Roman sayısı 120 · 0,45 = 54'tür; roman olmayan 120 − 54 = 66 kitap vardır.
Adım 2: Şiir sayısına ş denirse hikâye 2ş olur. ş + 2ş = 66 olduğundan ş = 22 ve hikâye sayısı 44'tür.
Adım 3: Olasılık [[44|120]] = [[11|30]].
Sağlama: 54 + 44 + 22 = 120 ve [[54|120]] + [[44|120]] + [[22|120]] = 1.
Sık yapılan hata: Roman olmayan kitap sayısını (66) hikâye sayısı sanmak.
Cevap B.`
},
{
  id: "mat-ol-347",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul futbol takımının turnuvadaki bir sonraki maçı, üç sonuçtan yalnızca biriyle bitecektir: galibiyet, beraberlik ya da mağlubiyet. Antrenör takımın galibiyet olasılığını [[2|5]], beraberlik olasılığını [[1|4]] olarak tahmin etmiştir.
**Buna göre maçın mağlubiyetle bitme olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[3|4]]","[[13|20]]","[[3|5]]","[[7|20]]"],
  dogru: 3,
  hatalar: [
    "Yalnızca beraberlik olasılığını 1'den çıkardın (1 − [[1|4]]). Galibiyet olasılığını da çıkarmalısın.",
    "Galibiyet ve beraberlik olasılıklarının toplamını buldun. Mağlubiyet için bu toplamı 1'den çıkarmalısın.",
    "Yalnızca galibiyet olasılığını 1'den çıkardın (1 − [[2|5]]). Beraberlik olasılığını da çıkarmalısın.",
    null
  ],
  aciklama: `Maç sonucunun üç ihtimalinin olasılıkları toplamı 1'dir.
Adım 1: Paydaları eşitle: [[2|5]] = [[8|20]], [[1|4]] = [[5|20]].
Adım 2: Galibiyet ve beraberlik toplamı [[8|20]] + [[5|20]] = [[13|20]].
Adım 3: Mağlubiyet olasılığı 1 − [[13|20]] = [[7|20]].
Sağlama: [[8|20]] + [[5|20]] + [[7|20]] = [[20|20]] = 1.
Sık yapılan hata: [[13|20]]'yi cevap sanmak. O değer, takımın yenilmeme olasılığıdır.
Cevap D.`
},
{
  id: "mat-ol-348",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Olasılık dersinde öğretmen tahtaya dört çıkarım yazmış ve öğrencilerden doğru olanı bulmalarını istemiştir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Bir olayın olasılığı 0,5 ise bu olayın olma olasılığı, olmama olasılığına eşittir.","Bir torbadan kırmızı top çekme olasılığı 0,95 ise bu olay kesin olaydır.","Bir olayın olasılığı 0,02 ise bu olay imkânsız olaydır.","Bir olayın olasılığı [[7|5]] ise olmama olasılığı −[[2|5]]'tir."],
  dogru: 0,
  hatalar: [
    null,
    "Büyük olasılığı kesinlik sandın. Kesin olayın olasılığı tam 1'dir; 0,95 olduğunda 0,05 olasılıkla başka renk çıkabilir.",
    "Küçük olasılığı imkânsızlık sandın. İmkânsız olayın olasılığı tam 0'dır; 0,02 olan olay yine de olabilir.",
    "Olasılık 1'den büyük olamaz; böyle bir olay yoktur. Olma + olmama = 1 eşitliği geçerli bir olasılık değeriyle kurulur."
  ],
  aciklama: `Olma ve olmama olasılıklarının toplamı 1'dir; kesin olayın olasılığı 1, imkânsız olayın olasılığı 0'dır; her olasılık 0 ile 1 arasındadır.
Adım 1: Olasılık 0,5 ise olmama olasılığı 1 − 0,5 = 0,5'tir; ikisi eşittir.
Adım 2: 0,95 değeri 1'e eşit değildir, bu yüzden olay kesin değildir; 0,02 değeri 0'dan büyüktür, bu yüzden olay imkânsız değildir.
Adım 3: [[7|5]], 1'den büyük olduğu için bir olasılık değeri olamaz.
Sağlama: 0,5 + 0,5 = 1.
Sık yapılan hata: Çok büyük olasılığı kesin, çok küçük olasılığı imkânsız saymak.
Cevap A.`
},
{
  id: "mat-ol-349",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun 8-A ve 8-B sınıflarındaki öğrenci sayıları aşağıdaki tabloda verilmiştir. Okul müdürü, iki sınıfın bütün öğrencilerinin adlarını özdeş kâğıtlara yazıp tek bir torbaya atmış ve bu torbadan rastgele bir kâğıt çekecektir.
**Buna göre çekilen kâğıtta bir kız öğrencinin adının yazılı olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Sınıf</th><th>Kız öğrenci</th><th>Erkek öğrenci</th></tr><tr><td>8-A</td><td>12</td><td>14</td></tr><tr><td>8-B</td><td>15</td><td>11</td></tr></table>`,
  secenekler: ["[[15|26]]","[[27|52]]","[[25|52]]","[[6|13]]"],
  dogru: 1,
  hatalar: [
    "Yalnızca 8-B sınıfına baktın ([[15|26]]). İki sınıfın adları aynı torbadadır.",
    null,
    "Kız yerine erkek öğrenci olasılığını buldun ([[25|52]]). Soru kız öğrencinin adını soruyor.",
    "Yalnızca 8-A sınıfına baktın ([[12|26]] = [[6|13]]). İki sınıfın adları aynı torbadadır."
  ],
  aciklama: `Adım 1: Kız öğrenciler 12 + 15 = 27, erkek öğrenciler 14 + 11 = 25'tir; toplam 52 öğrenci vardır.
Adım 2: Bütün adlar tek torbada olduğundan payda 52'dir.
Adım 3: Olasılık [[27|52]].
Sağlama: Erkek olasılığı [[25|52]]; [[27|52]] + [[25|52]] = 1.
Sık yapılan hata: Yalnızca tek sınıfa bakmak ya da kız yerine erkek öğrencinin olasılığını bulmak.
Cevap B.`
},
{
  id: "mat-ol-350",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çekmecede yalnızca kırmızı, mavi ve siyah çoraplar vardır. Mavi çorap sayısı kırmızı çorap sayısının 2 katıdır ve çekmecede 4 siyah çorap bulunmaktadır. Çekmeceden bakmadan bir çorap alındığında kırmızı olma olasılığı [[1|5]]'tir.
**Buna göre çekmecede toplam kaç çorap vardır?**`,
  gorsel: null,
  secenekler: ["2","4","6","10"],
  dogru: 3,
  hatalar: [
    "Kırmızı çorap sayısını buldun. Soru çekmecedeki toplam çorap sayısını soruyor.",
    "Mavi (ya da siyah) çorap sayısını toplam sandın. Üç rengin sayıları toplanmalıdır.",
    "Yalnızca kırmızı ve mavi çorapları topladın (2 + 4). Siyah çoraplar da toplama girer.",
    null
  ],
  aciklama: `Adım 1: Kırmızı çorap sayısına k denirse mavi 2k, siyah 4 olur; toplam k + 2k + 4 = 3k + 4'tür.
Adım 2: Kırmızı olasılığı k bölü (3k + 4) = [[1|5]] olduğundan 5k = 3k + 4 ve k = 2'dir.
Adım 3: Toplam 3 · 2 + 4 = 10 çoraptır (2 kırmızı, 4 mavi, 4 siyah).
Sağlama: 10 çorabın 2'si kırmızı: [[2|10]] = [[1|5]].
Sık yapılan hata: Bulunan k değerini (2) cevap sanmak. Soru toplamı soruyor.
Cevap D.`
},
{
  id: "mat-ol-351",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir şehirde feribot seferleri 08.00'den 20.00'ye kadar (08.00 ve 20.00 dâhil) her saat başı kalkmaktadır. Belediye, bu seferlerden birini rastgele seçip o seferde ücretsiz yolculuk uygulayacaktır. Seçilen seferin kalkış saati 12.00 ile 15.00 arasındaysa (12.00 ve 15.00 dâhil) sefere gazeteciler davet edilecektir.
**Buna göre gazetecilerin davet edilme olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[9|13]]","[[1|3]]","[[4|13]]","[[3|13]]"],
  dogru: 2,
  hatalar: [
    "Davet edilmeme olasılığını ([[9|13]]) buldun. Soru davet edilme olasılığını soruyor.",
    "Sefer sayısını son − ilk = 12 aldın ([[4|12]]). Uçlar dâhil olduğundan 13 sefer vardır.",
    null,
    "12.00 ile 15.00 arasını 15 − 12 = 3 sefer saydın. Uçlar dâhil olduğundan 12, 13, 14 ve 15 olmak üzere 4 sefer vardır."
  ],
  aciklama: `Uçlar dâhil olduğunda sayı adedi son − ilk + 1 ile bulunur.
Adım 1: Bütün seferler: 20 − 8 + 1 = 13 sefer.
Adım 2: 12.00, 13.00, 14.00 ve 15.00 seferleri: 15 − 12 + 1 = 4 sefer.
Adım 3: Olasılık [[4|13]].
Sağlama: Davet edilmeme olasılığı [[9|13]]; [[4|13]] + [[9|13]] = 1.
Sık yapılan hata: Uçlardan birini saymamak.
Cevap C.`
},
{
  id: "mat-ol-352",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıda, üzerinde 1'den 8'e kadar numaralar yazılı, büyüklükleri ve ağırlıkları aynı 8 bilye gösterilmiştir. Bilyeler bir kutuya konulup karıştırılacak ve kutudan bakmadan bir bilye alınacaktır.
**Buna göre alınan bilyenin numarasının 3'ün katı __olmama__ olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 110" role="img" aria-label="Numaraları 1 den 8 e kadar olan 8 bilye."><circle cx="56" cy="60" r="24" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="56" y="66" font-size="18" text-anchor="middle" font-weight="bold">1</text><circle cx="120" cy="60" r="24" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="120" y="66" font-size="18" text-anchor="middle" font-weight="bold">2</text><circle cx="184" cy="60" r="24" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="184" y="66" font-size="18" text-anchor="middle" font-weight="bold">3</text><circle cx="248" cy="60" r="24" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="248" y="66" font-size="18" text-anchor="middle" font-weight="bold">4</text><circle cx="312" cy="60" r="24" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="312" y="66" font-size="18" text-anchor="middle" font-weight="bold">5</text><circle cx="376" cy="60" r="24" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="376" y="66" font-size="18" text-anchor="middle" font-weight="bold">6</text><circle cx="440" cy="60" r="24" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="440" y="66" font-size="18" text-anchor="middle" font-weight="bold">7</text><circle cx="504" cy="60" r="24" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="504" y="66" font-size="18" text-anchor="middle" font-weight="bold">8</text></svg>`,
  secenekler: ["[[7|8]]","[[3|4]]","[[5|8]]","[[1|4]]"],
  dogru: 1,
  hatalar: [
    "Yalnızca 3'ü 3'ün katı saydın. 6 da 3'ün katıdır.",
    null,
    "3'ün katlarını 3 tane sayıp 8 − 3 = 5 buldun. 9, bilyeler arasında yoktur; 3'ün katları yalnızca 3 ve 6'dır.",
    "3'ün katı olma olasılığını ([[2|8]]) buldun. Soru olmama olasılığını soruyor."
  ],
  aciklama: `Adım 1: 1'den 8'e kadar 3'ün katları 3 ve 6'dır; 2 bilye vardır.
Adım 2: 3'ün katı olmayan bilyeler 8 − 2 = 6 tanedir.
Adım 3: Olasılık [[6|8]] = [[3|4]].
Sağlama: 3'ün katı olma olasılığı [[2|8]] = [[1|4]]; [[1|4]] + [[3|4]] = 1.
Sık yapılan hata: Aralıkta bulunmayan 9'u da 3'ün katı olarak sayıp pay ve paydayı karıştırmak.
Cevap B.`
},
{
  id: "mat-ol-353",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulda 250 öğrenciye “En çok izlemeyi sevdiğiniz spor dalı hangisidir?” diye sorulmuş ve her öğrenci yalnızca bir dalı seçmiştir. Öğrencilerin %32'si futbolu, %24'ü basketbolu, geri kalanı voleybolu seçmiştir. Anket formlarından biri rastgele çekilecektir.
**Buna göre çekilen formda voleybolun seçilmiş olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[6|25]]","[[8|25]]","[[11|25]]","[[14|25]]"],
  dogru: 2,
  hatalar: [
    "Basketbolu seçenlerin oranını (%24) cevap sandın. Voleybol, geri kalan öğrencilerdir.",
    "Futbolu seçenlerin oranını (%32) cevap sandın. Voleybol, geri kalan öğrencilerdir.",
    null,
    "Futbol ve basketbolu seçenlerin oranını (%56) buldun. Bu oran voleybolu seçmeyenlerin oranıdır."
  ],
  aciklama: `Yüzde olarak verilen oranlar, olasılık olarak da yorumlanır. Bütün seçeneklerin yüzdeleri toplamı %100'dür.
Adım 1: Futbol ve basketbolu seçenlerin oranı %32 + %24 = %56'dır.
Adım 2: Voleybolu seçenlerin oranı %100 − %56 = %44'tür.
Adım 3: Olasılık 0,44 = [[44|100]] = [[11|25]].
Sağlama: 250 öğrencinin %44'ü 110 öğrenci eder; [[110|250]] = [[11|25]].
Sık yapılan hata: Futbol ve basketbol yüzdelerinin toplamını (%56) cevap sanmak.
Cevap C.`
},
{
  id: "mat-ol-354",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yarışmada 1'den 60'a kadar (1 ve 60 dâhil) numaralandırılmış özdeş kartlar vardır ve her sayı bir kartta yazılıdır. Kartlardan biri bakmadan çekilecek; çekilen kartta bir tam kare sayı yazıyorsa yarışmacı joker kazanacaktır.
**Buna göre joker kazanma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[2|15]]","[[7|59]]","[[7|60]]","[[1|10]]"],
  dogru: 2,
  hatalar: [
    "8² = 64 olduğu halde 8'i de saydın ve 8 tam kare buldun ([[8|60]]). 64, kartlarda yoktur.",
    "Kart sayısını son − ilk = 59 aldın. Uçlar dâhil olduğundan 60 kart vardır.",
    null,
    "1'i tam kare saymadın ve 6 tam kare buldun. 1 = 1² olduğundan 1 de tam karedir."
  ],
  aciklama: `Tam kare sayı, bir doğal sayının karesi olan sayıdır.
Adım 1: 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25, 6² = 36, 7² = 49 sayıları kartlarda vardır; 8² = 64 > 60 olduğu için dışarıdadır. 7 tam kare vardır.
Adım 2: Kart sayısı 60 − 1 + 1 = 60'tır.
Adım 3: Olasılık [[7|60]].
Sağlama: 49 < 60 < 64 olduğundan 7'den fazla tam kare yoktur.
Sık yapılan hata: 1'i tam kare saymamak ya da kart sayısını 59 almak.
Cevap C.`
},
{
  id: "mat-ol-355",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki torbada toplam 20 top bulunmaktadır; kırmızı (K), mavi (M) ve sarı (S) toplar şekilde gösterilmiştir. Torbadan 4 mavi top çıkarılıp kenara konulmuştur. Ardından torbadan bakmadan bir top çekilecektir.
**Buna göre çekilen topun sarı olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 262" role="img" aria-label="Torbadaki topların renklere göre dağılımı"><path d="M70 40 L70 60 Q40 70 40 100 L40 230 Q40 244 54 244 L246 244 Q260 244 260 230 L260 100 Q260 70 230 60 L230 40 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="72" cy="220" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="72" y="225" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="112" cy="220" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="112" y="225" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="152" cy="220" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="152" y="225" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="192" cy="220" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="192" y="225" font-size="15" text-anchor="middle" font-weight="bold">S</text><circle cx="232" cy="220" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="232" y="225" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="72" cy="182" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="72" y="187" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="112" cy="182" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="112" y="187" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="152" cy="182" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="152" y="187" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="192" cy="182" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="192" y="187" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="232" cy="182" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="232" y="187" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="72" cy="144" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="72" y="149" font-size="15" text-anchor="middle" font-weight="bold">S</text><circle cx="112" cy="144" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="112" y="149" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="152" cy="144" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="152" y="149" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="192" cy="144" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="192" y="149" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="232" cy="144" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="232" y="149" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="72" cy="106" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="72" y="111" font-size="15" text-anchor="middle" font-weight="bold">S</text><circle cx="112" cy="106" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="112" y="111" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="152" cy="106" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="152" y="111" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="192" cy="106" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="192" y="111" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="232" cy="106" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="232" y="111" font-size="15" text-anchor="middle" font-weight="bold">S</text><circle cx="310" cy="90" r="14" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="310" y="95" font-size="14" text-anchor="middle" font-weight="bold">K</text><text x="336" y="95" font-size="15" text-anchor="start">Kırmızı top</text><circle cx="310" cy="130" r="14" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="310" y="135" font-size="14" text-anchor="middle" font-weight="bold">M</text><text x="336" y="135" font-size="15" text-anchor="start">Mavi top</text><circle cx="310" cy="170" r="14" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="310" y="175" font-size="14" text-anchor="middle" font-weight="bold">S</text><text x="336" y="175" font-size="15" text-anchor="start">Sarı top</text></svg>`,
  secenekler: ["[[1|5]]","[[1|4]]","[[5|16]]","[[7|16]]"],
  dogru: 1,
  hatalar: [
    "Payda olarak eski toplamı (20) kullandın. Mavi toplar çıkarılınca torbada 16 top kalır.",
    null,
    "Kalan mavi topların olasılığını ([[5|16]]) buldun. Soru sarı topu soruyor.",
    "Kırmızı topların olasılığını ([[7|16]]) buldun. Soru sarı topu soruyor."
  ],
  aciklama: `Adım 1: Şekilde 7 kırmızı, 9 mavi ve 4 sarı top vardır.
Adım 2: 4 mavi top çıkarılınca torbada 20 − 4 = 16 top kalır: 7 kırmızı, 5 mavi, 4 sarı.
Adım 3: Sarı top sayısı değişmemiştir. Olasılık [[4|16]] = [[1|4]].
Sağlama: [[7|16]] + [[5|16]] + [[4|16]] = 1.
Sık yapılan hata: Payda olarak eski toplamı (20) kullanmak.
Cevap B.`
},
{
  id: "mat-ol-356",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kutuda 6 yeşil ve 10 turuncu mum vardır. Kutudan rastgele bir mum alınacaktır. Mum üreticisi, kutuya yeşil mum ekleyerek yeşil mum alma olasılığını [[1|2]]'den büyük yapmak istemektedir.
**Buna göre kutuya en az kaç yeşil mum eklenmelidir?**`,
  gorsel: null,
  secenekler: ["10","6","5","4"],
  dogru: 2,
  hatalar: [
    "Turuncu mum sayısı kadar ekledin. Bu da olasılığı artırır ama en az değer değildir.",
    "Gereğinden fazla ekledin. 6 mum olasılığı [[1|2]]'den büyük yapar ama en az değerden büyüktür; 5 mum yeterlidir.",
    null,
    "Eşitliği de yeterli saydın. 4 mum eklenince 10 yeşil, 10 turuncu olur ve olasılık tam [[1|2]] olur; [[1|2]]'den büyük olmaz."
  ],
  aciklama: `Yeşil mum eklendiğinde hem yeşil sayısı hem toplam artar.
Adım 1: x mum eklenirse yeşil olasılığı (6 + x) bölü (16 + x) olur.
Adım 2: Olasılığın [[1|2]]'den büyük olması için yeşil mum sayısı toplamın yarısından fazla olmalıdır: 2 · (6 + x) > 16 + x, yani 12 + 2x > 16 + x ve x > 4.
Adım 3: x doğal sayı ve 4'ten büyük olmalıdır; en küçük değer 5'tir.
Sağlama: x = 4 için 10 yeşil, 10 turuncu mum olur ve olasılık tam [[1|2]]'dir; yeterli değildir. x = 5 için [[11|21]] > [[1|2]].
Sık yapılan hata: “Büyük” kelimesine rağmen eşitliği yeterli saymak.
Cevap C.`
},
{
  id: "mat-ol-357",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir torbada 7 kırmızı, 14 mavi ve 9 sarı top vardır. Torbadan bazı sarı toplar çıkarılıp kenara ayrılacak, sonra torbadan tek bir top çekilecektir. Mavi top çekme olasılığının tam [[2|3]] olması istenmektedir.
**Buna göre torbadan kaç sarı top çıkarılmalıdır?**`,
  gorsel: null,
  secenekler: ["21","14","9","7"],
  dogru: 2,
  hatalar: [
    "Çıkarma sonrası kalan toplam top sayısını (21) buldun. Çıkarılacak top sayısı için 30 − 21 hesabı gerekir.",
    "Mavi top sayısını buldun. Mavi toplar çıkarılmıyor; yalnızca sarı toplar çıkarılıyor.",
    null,
    "Kırmızı top sayısını buldun. Çıkarılacak toplar sarıdır; sayıyı toplamın değişimiyle bulmalısın."
  ],
  aciklama: `Mavi top sayısı değişmez; yalnızca toplam top sayısı azalır.
Adım 1: Mavi toplar toplamın [[2|3]]'ü olmalıdır. 14 top toplamın [[2|3]]'ü ise toplam 14 ÷ 2 · 3 = 21 olmalıdır.
Adım 2: Şu an toplam 7 + 14 + 9 = 30'dur. Toplamı 21'e indirmek için 30 − 21 = 9 top çıkarılmalıdır.
Adım 3: Çıkarılan toplar sarıdır ve torbada 9 sarı top vardır; sarıların tamamı çıkarılır.
Sağlama: Torbada 7 kırmızı ve 14 mavi top kalır; mavi olasılığı [[14|21]] = [[2|3]].
Sık yapılan hata: Kalan toplam sayısını (21) cevap sanmak.
Cevap C.`
},
{
  id: "mat-ol-358",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir torbada yalnızca kırmızı ve mavi toplar vardır. Torbadan bakmadan bir top çekildiğinde kırmızı olma olasılığı [[2|5]]'tir. Torbaya 4 kırmızı top daha eklenirse kırmızı top çekme olasılığı [[1|2]] olmaktadır.
**Buna göre torbada başlangıçta kaç kırmızı top vardır?**`,
  gorsel: null,
  secenekler: ["8","12","20","24"],
  dogru: 0,
  hatalar: [
    null,
    "Ekleme yapıldıktan sonraki kırmızı top sayısını (8 + 4 = 12) ya da mavi top sayısını buldun. Soru başlangıçtaki kırmızı top sayısını soruyor.",
    "Başlangıçtaki toplam top sayısını (20) buldun. Soru yalnızca kırmızı topları soruyor.",
    "Ekleme yapıldıktan sonraki toplam top sayısını (24) cevap sandın. Soru başlangıçtaki kırmızı top sayısını soruyor."
  ],
  aciklama: `Kırmızı olasılığı [[1|2]] ise kırmızı ve mavi top sayıları eşittir. Mavi topların sayısı hiç değişmez; yalnızca kırmızı artar.
Adım 1: Başlangıçta kırmızı olasılığı [[2|5]] olduğundan mavi olasılığı [[3|5]]'tir. Kırmızı sayısı 2k, mavi sayısı 3k alınır.
Adım 2: 4 kırmızı eklenince kırmızı ile mavi eşitlenir: 2k + 4 = 3k, yani k = 4.
Adım 3: Başlangıçta kırmızı 2 · 4 = 8, mavi 3 · 4 = 12 toptur.
Sağlama: Başlangıçta [[8|20]] = [[2|5]]. Eklemeden sonra [[12|24]] = [[1|2]].
Sık yapılan hata: Ekleme sonrası sayıları (12 kırmızı, 24 toplam) cevap sanmak. Soru başlangıcı soruyor.
Cevap A.`
},
{
  id: "mat-ol-359",
  kazanim: "M.8.5.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `İki sınıfın mevcutları ve okula bisikletle gelen öğrenci sayıları tabloda verilmiştir. Her sınıfın listesinden rastgele bir öğrenci seçilecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Sınıf</th><th>Öğrenci sayısı</th><th>Bisikletle gelen</th></tr><tr><td>8-C</td><td>40</td><td>12</td></tr><tr><td>8-D</td><td>30</td><td>9</td></tr></table>`,
  secenekler: ["Seçilen öğrencinin bisikletle gelme olasılığı 8-C'de daha fazladır.","Seçilen öğrencinin bisikletle gelme olasılığı iki sınıfta eşittir.","Seçilen öğrencinin bisikletle gelme olasılığı 8-D'de daha fazladır.","Seçilen öğrencinin bisikletle gelmeme olasılığı 8-D'de daha fazladır."],
  dogru: 1,
  hatalar: [
    "Yalnızca bisikletli sayılarına baktın (12 > 9). Sınıf mevcutları farklıdır: [[12|40]] = 0,3 ve [[9|30]] = 0,3.",
    null,
    "Mevcudu az olan sınıfın olasılığının büyük olacağını sandın. Her iki sınıfta da olasılık 0,3'tür.",
    "Gelmeme olasılıkları, gelme olasılıklarının 1'e tamamlayanıdır. Gelme olasılıkları eşit olduğundan gelmeme olasılıkları da eşittir (0,7)."
  ],
  aciklama: `Mevcutları farklı iki sınıfta olasılıklar, sayılara değil kesirlere bakılarak karşılaştırılır.
Adım 1: 8-C'de bisikletle gelme olasılığı [[12|40]] = [[3|10]].
Adım 2: 8-D'de [[9|30]] = [[3|10]].
Adım 3: İki olasılık eşittir; bu yüzden gelmeme olasılıkları da eşittir: 1 − [[3|10]] = [[7|10]].
Sağlama: 40 öğrencinin 12'si ve 30 öğrencinin 9'u; her iki sınıfta da öğrencilerin %30'u bisikletle gelmektedir.
Sık yapılan hata: Sayıları doğrudan karşılaştırmak. Mevcutlar farklıysa kesirler karşılaştırılır.
Cevap B.`
},
{
  id: "mat-ol-360",
  kazanim: "M.8.5.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir oyun kulübünde 1'den 30'a kadar (1 ve 30 dâhil) her sayı özdeş ayrı bir karta yazılmış ve kartlar bir kutuya konmuştur. Bir oyuncu, kutudan bakmadan bir kart çekecek ve aşağıdaki dört olaydan birinin gerçekleşmesini bekleyecektir. Oyuncu, gerçekleşme olasılığı en fazla olan olayı seçmek istemektedir.
**Buna göre oyuncu hangi olayı seçmelidir?**`,
  gorsel: null,
  secenekler: ["Sayının 8'den büyük tek sayı olması","Sayının asal sayı olması","Sayının 3'ün katı olması","Sayının tam kare olması"],
  dogru: 0,
  hatalar: [
    null,
    "Asal sayıları sezgiyle çok sandın. Sayınca 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 olmak üzere 10 tanedir; 8'den büyük tek sayılar 11 tanedir.",
    "3'ün katlarını 0'dan başlatıp 11 tane saydın. Kartlar 1'den başlar; 3, 6, …, 30 olmak üzere 3'ün katları 10 tanedir.",
    "Tam kare sayıları sık sandın. 30'a kadar yalnızca 1, 4, 9, 16, 25 vardır; bu olayın olasılığı [[5|30]] = [[1|6]] ile en küçüktür."
  ],
  aciklama: `Kartların hepsi aynı kutuda olduğundan payda her olay için 30'dur. Olasılığı en fazla olan olay, uyan kart sayısı en çok olan olaydır.
Adım 1: 8'den büyük tek sayılar 9, 11, 13, …, 29 olmak üzere 11 tanedir: [[11|30]].
Adım 2: Asal sayılar 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 olmak üzere 10 tanedir: [[10|30]]. 3'ün katları 3, 6, …, 30 olmak üzere yine 10 tanedir: [[10|30]].
Adım 3: Tam kare sayılar 1, 4, 9, 16, 25 olmak üzere 5 tanedir: [[5|30]]. En fazla kart 11 ile ilk olaya uyar.
Sağlama: [[11|30]] > [[10|30]] = [[10|30]] > [[5|30]] olduğundan sıralama bu şekildedir.
Sık yapılan hata: 1'i asal saymak (11 asal bulunur) ya da 0'ı 3'ün katı saymak. 1 asal değildir; kartlar 1'den başlar.
Cevap A.`
},
{
  id: "mat-ol-361",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki çark 12 eş dilime ayrılmıştır; dilimlerden 3'ü kırmızı (K), diğerleri beyazdır (B). Çark çevrildiğinde okun kırmızı dilimde durma olasılığının [[1|2]]'den küçük kalması istenmektedir. Bunun için beyaz dilimlerden bazıları kırmızıya boyanacaktır.
**Buna göre en çok kaç beyaz dilim kırmızıya boyanabilir?**`,
  gorsel: `<svg viewBox="0 0 560 340" role="img" aria-label="12 eş dilimli çark: 3 kırmızı K, 9 beyaz B dilim."><path d="M280 190 L316.23 54.77 A140 140 0 0 1 378.99 91.01 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L378.99 91.01 A140 140 0 0 1 415.23 153.77 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L415.23 153.77 A140 140 0 0 1 415.23 226.23 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L415.23 226.23 A140 140 0 0 1 378.99 288.99 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L378.99 288.99 A140 140 0 0 1 316.23 325.23 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L316.23 325.23 A140 140 0 0 1 243.77 325.23 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L243.77 325.23 A140 140 0 0 1 181.01 288.99 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L181.01 288.99 A140 140 0 0 1 144.77 226.23 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L144.77 226.23 A140 140 0 0 1 144.77 153.77 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L144.77 153.77 A140 140 0 0 1 181.01 91.01 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L181.01 91.01 A140 140 0 0 1 243.77 54.77 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L243.77 54.77 A140 140 0 0 1 316.23 54.77 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="334.6" y="100.43" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="374.57" y="140.4" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="389.2" y="195" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="374.57" y="249.6" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="334.6" y="289.57" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="280" y="304.2" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="225.4" y="289.57" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="185.43" y="249.6" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="170.8" y="195" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="185.43" y="140.4" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="225.4" y="100.43" font-size="15" text-anchor="middle" font-weight="bold">B</text><text x="280" y="85.8" font-size="15" text-anchor="middle" font-weight="bold">B</text><polygon points="267,26 293,26 280,60" fill="currentColor"/><circle cx="280" cy="190" r="6" fill="currentColor"/></svg>`,
  secenekler: ["6","5","3","2"],
  dogru: 3,
  hatalar: [
    "Yarıya eşit olan toplam kırmızı sayısını (6) boyanacak dilim sayısı sandın. Mevcut 3 kırmızı dilimi de hesaba katmalısın.",
    "Toplam kırmızı dilim sayısını (5) boyanacak dilim sayısı sandın. Zaten 3 kırmızı dilim var; boyanacak dilim sayısı bundan azdır.",
    "Eşitliği de kabul ettin. 3 dilim boyanırsa 6 kırmızı dilim olur ve olasılık tam [[6|12]] = [[1|2]] olur; [[1|2]]'den küçük olmaz.",
    null
  ],
  aciklama: `Boyanan dilim sayısı ile toplam kırmızı dilim sayısı farklı şeylerdir.
Adım 1: x dilim boyanırsa kırmızı dilim sayısı 3 + x olur ve olasılık (3 + x) bölü 12 olur.
Adım 2: Olasılığın [[1|2]]'den küçük olması için kırmızı dilim sayısı 12'nin yarısı olan 6'dan küçük olmalıdır: 3 + x < 6, yani x < 3.
Adım 3: x en çok 2 olabilir.
Sağlama: x = 2 için [[5|12]] < [[1|2]]; x = 3 için [[6|12]] = [[1|2]] olur ve küçük değildir.
Sık yapılan hata: Eşitlik durumunu (tam [[1|2]]) “küçük” saymak.
Cevap D.`
},
{
  id: "mat-ol-362",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir sınıf kütüphanesindeki kitaplar roman, hikâye ve diğer türlerden oluşmaktadır. Toplam kitap sayısı 20'den azdır. Rastgele seçilen bir kitabın roman olma olasılığı [[2|5]], hikâye olma olasılığı [[1|3]]'tür.
**Buna göre kütüphanede roman ve hikâye dışında kaç kitap vardır?**`,
  gorsel: null,
  secenekler: ["4","5","6","15"],
  dogru: 0,
  hatalar: [
    null,
    "Hikâye kitaplarının sayısını buldun (15 · [[1|3]] = 5). Soru roman ve hikâye dışındaki kitapları soruyor.",
    "Roman kitaplarının sayısını buldun (15 · [[2|5]] = 6). Soru roman ve hikâye dışındaki kitapları soruyor.",
    "Toplam kitap sayısını buldun. Roman ve hikâye sayıları bu toplamdan çıkarılmalıdır."
  ],
  aciklama: `Bir kesir kadar bir sayı, ancak toplam paydaya uygunsa doğal sayı olur.
Adım 1: Roman sayısının toplamın [[2|5]]'i olması için toplam 5'in katı, hikâye sayısının [[1|3]]'i olması için 3'ün katı olmalıdır. Toplam 15'in katıdır.
Adım 2: Toplam 20'den az olduğundan toplam 15'tir (bir sonraki kat 30'dur).
Adım 3: Roman 15 · [[2|5]] = 6, hikâye 15 · [[1|3]] = 5; diğer kitaplar 15 − 6 − 5 = 4.
Sağlama: Diğer olasılığı 1 − [[2|5]] − [[1|3]] = [[15|15]] − [[6|15]] − [[5|15]] = [[4|15]].
Sık yapılan hata: Toplamı 30 ya da 15 yerine yanlış kata almak; “20'den az” koşulu tek değeri seçtirir.
Cevap A.`
},
{
  id: "mat-ol-363",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir torbada 30 top vardır ve toplar yalnızca kırmızı ve mavidir; torbada en az 1 kırmızı ve en az 1 mavi top bulunmaktadır. Torbadan bir top çekildiğinde kırmızı olma olasılığı, kırmızı top sayısına göre [[1|30]], [[2|30]], [[3|30]], …, [[29|30]] değerlerinden biri olabilir. Bu olasılık sadeleştirildiğinde paydası 5 olan bir kesir çıkmaktadır.
**Buna göre torbada kaç farklı sayıda kırmızı top bulunabilir?**`,
  gorsel: null,
  secenekler: ["8","5","4","3"],
  dogru: 2,
  hatalar: [
    "30'un bölenlerinin sayısını (1, 2, 3, 5, 6, 10, 15, 30) buldun. Payın 6'nın katı olması gerekir; bölen sayısının bununla ilgisi yoktur.",
    "6, 12, 18, 24 ile birlikte 30'u da saydın. Torbada en az 1 mavi top bulunduğundan 30 kırmızı top olamaz ([[30|30]] = 1).",
    null,
    "[[6|30]], [[12|30]] ve [[18|30]]'u buldun ama [[24|30]] = [[4|5]]'i atladın. Sayımı eksik bıraktın."
  ],
  aciklama: `Bir kesri sadeleştirmek, pay ile paydayı ortak bir sayıya bölmektir. Burada 30 → 5 olduğuna göre payda 6'ya bölünmüştür; pay da 6'ya bölünebilmelidir.
Adım 1: [[k|30]] kesri sadeleşince paydası 5 olacaksa k, 6'nın katı olmalıdır (30 ÷ 6 = 5). Ayrıca k, 1, 2, …, 29 değerlerinden biridir.
Adım 2: Kırmızı top sayısı 6, 12, 18, 24 olabilir: [[6|30]] = [[1|5]], [[12|30]] = [[2|5]], [[18|30]] = [[3|5]], [[24|30]] = [[4|5]].
Adım 3: 30 da 6'nın katıdır ama k = 30 olursa hiç mavi top kalmaz ve olasılık 1 olur; bu durum şartlara uymaz. Böylece 4 farklı sayı bulunur.
Sağlama: Payı 5, 10, 15, 20, 25 olan kesirler sadeleşince paydası 6, 3, 2, 3, 6 olur; hiçbirinin paydası 5 değildir.
Sık yapılan hata: Sınır değeri (30 kırmızı top) saymak. “En az 1 mavi” koşulu bu değeri eler.
Cevap C.`
},
{
  id: "mat-ol-364",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kutuda aynı büyüklükte 24 bilye vardır ve bilyeler yalnızca kırmızı ve mavidir. Kutuda en az bir mavi bilye bulunmaktadır. Kutudan bakmadan bir bilye çekildiğinde kırmızı olma olasılığı [[1|3]]'ten büyük, [[7|12]]'den küçüktür.
**Buna göre kutudaki kırmızı bilye sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["4","5","6","7"],
  dogru: 1,
  hatalar: [
    "Sınırdaki sayılardan birini fazla çıkardın. 9, 10, 11, 12, 13 olmak üzere 5 değer vardır.",
    null,
    "Uçlardan birini dâhil ettin (8 ya da 14). Soru “büyük” ve “küçük” dediği için uçlar dâhil değildir.",
    "Her iki ucu da dâhil ettin (8, 9, …, 14). Uçlar kesirlerin kendisidir ve koşulda dâhil değildir."
  ],
  aciklama: `Kırmızı bilye sayısına k denirse olasılık [[k|24]] olur. Sınırlar, paydası 24 olan kesirlere çevrilir.
Adım 1: [[1|3]] = [[8|24]] ve [[7|12]] = [[14|24]].
Adım 2: [[8|24]] < [[k|24]] < [[14|24]] olduğundan 8 < k < 14 olur; uçlar dâhil değildir.
Adım 3: k = 9, 10, 11, 12, 13 olabilir: 5 farklı değer.
Sağlama: k = 8 için olasılık tam [[1|3]], k = 14 için tam [[7|12]] olur; ikisi de koşulu sağlamaz.
Sık yapılan hata: Uç değerleri koşula dâhil etmek.
Cevap B.`
},
{
  id: "mat-ol-365",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kasadaki elmaların bir kısmı kırmızıdır; kasadan rastgele seçilen bir elmanın kırmızı olma olasılığı [[2|7]]'dir. Kasaya 4 kırmızı elma eklenince bu olasılık [[2|5]] olmuştur.
**Buna göre kasada başlangıçta kaç elma vardı?**`,
  gorsel: null,
  secenekler: ["35","25","21","6"],
  dogru: 2,
  hatalar: [
    "İki paydayı çarpıp (7 · 5) toplamı 35 aldın. Toplam, eklemeden önce ve sonra denklemle bulunur.",
    "Ekleme sonrasındaki toplam elma sayısını buldun. Başlangıçtaki toplam için eklenen 4 elma çıkarılmalıdır.",
    null,
    "Başlangıçtaki kırmızı elma sayısını buldun. Soru toplam elma sayısını soruyor."
  ],
  aciklama: `Ekleme yapıldığında hem pay hem payda değişir; başlangıç durumunu bir ortak katsayıyla yazmak işi kolaylaştırır.
Adım 1: Başlangıçta toplam 7t, kırmızı elma 2t olsun (olasılık [[2|7]]).
Adım 2: 4 kırmızı eklenince kırmızı 2t + 4, toplam 7t + 4 olur ve olasılık [[2|5]] olur: 5 · (2t + 4) = 2 · (7t + 4). Buradan 10t + 20 = 14t + 8 ve t = 3 bulunur.
Adım 3: Başlangıçta 7 · 3 = 21 elma (6 kırmızı) vardı.
Sağlama: 4 kırmızı eklenince 10 kırmızı elma ve 25 elma olur; [[10|25]] = [[2|5]].
Sık yapılan hata: 25 cevabı. O, ekleme sonrası toplamdır.
Cevap C.`
},
{
  id: "mat-ol-366",
  kazanim: "M.8.5.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yarışmada 1'den 90'a kadar (1 ve 90 dâhil) numaralandırılmış özdeş toplar bir torbaya konmuştur. Yarışma başlamadan önce numarası 5'in katı olan bütün toplar torbadan çıkarılmış, kalan toplardan 3'ünün de yırtık olduğu görülerek bu 3 top da çıkarılmıştır. Ardından torbadan bakmadan bir top çekilecektir.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["87","75","72","69"],
  dogru: 3,
  hatalar: [
    "5'in katı olan topların çıkarıldığını hesaba katmadın; yalnızca 3 yırtık topu çıkardın.",
    "5'in katlarını 15 tane saydın. 90 ÷ 5 = 18 olduğundan 18 top çıkarılır.",
    "Yırtık olan 3 topu torbadan çıkarmayı unuttun. Yırtık toplar da çıkarıldığı için 72 − 3 = 69 top kalır.",
    null
  ],
  aciklama: `Olası durum sayısı, çekilişte torbada kalan top sayısıdır.
Adım 1: 1'den 90'a kadar 5'in katları 5, 10, …, 90'dır; 90 ÷ 5 = 18 tanedir.
Adım 2: 18 top çıkarılınca 90 − 18 = 72 top kalır.
Adım 3: Yırtık 3 top da çıkarılınca 72 − 3 = 69 top kalır.
Sağlama: 5'in katı olmayan 72 top vardır; 3'ü çıkarılınca 69 olur.
Sık yapılan hata: Çıkarma işlemlerinden birini unutmak.
Cevap D.`
},
{
  id: "mat-ol-367",
  kazanim: "M.8.5.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki çarkın dilimleri farklı büyüklüktedir; K kırmızı, M mavi, S sarı ve Y yeşil dilimi göstermektedir. Her dilimin merkez açısı üzerinde yazılıdır. Çark bir kez çevrilecek ve ok bir dilimde duracaktır.
**Buna göre dilimlerden kaç tanesinin gelme olasılığı [[1|4]]'tür?**`,
  gorsel: `<svg viewBox="0 0 560 340" role="img" aria-label="Çark: K 90, M 90, S 60 ve Y 120 derece."><path d="M280 190 L313.87 54.16 A140 140 0 0 1 415.84 223.87 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L415.84 223.87 A140 140 0 0 1 246.13 325.84 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L246.13 325.84 A140 140 0 0 1 145.42 228.59 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L145.42 228.59 A140 140 0 0 1 313.87 54.16 Z" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="359.2" y="140.41" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="359.2" y="157.41" font-size="14" text-anchor="middle">90°</text><text x="327.59" y="267.2" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="327.59" y="284.2" font-size="14" text-anchor="middle">90°</text><text x="208.03" y="262.52" font-size="15" text-anchor="middle" font-weight="bold">S</text><text x="208.03" y="279.52" font-size="14" text-anchor="middle">60°</text><text x="213.53" y="123.81" font-size="15" text-anchor="middle" font-weight="bold">Y</text><text x="213.53" y="140.81" font-size="14" text-anchor="middle">120°</text><polygon points="267,26 293,26 280,60" fill="currentColor"/><circle cx="280" cy="190" r="6" fill="currentColor"/></svg>`,
  secenekler: ["1","2","3","4"],
  dogru: 1,
  hatalar: [
    "Yalnızca bir dilimi buldun. Hem K hem M diliminin açısı 90°'dir; ikisinin de olasılığı [[1|4]]'tür.",
    null,
    "Y dilimini de [[1|4]] saydın. 120° açının olasılığı [[120|360]] = [[1|3]]'tür.",
    "Dilimleri eş sandın ve dört dilime [[1|4]] verdin. Açılar farklı olduğundan olasılıklar da farklıdır."
  ],
  aciklama: `Eş olmayan dilimli çarkta olasılık, dilimin merkez açısının 360°'ye oranıdır.
Adım 1: Olasılığın [[1|4]] olması için açı 360° ÷ 4 = 90° olmalıdır.
Adım 2: K ve M dilimlerinin açısı 90°'dir; olasılıkları [[90|360]] = [[1|4]].
Adım 3: S için [[60|360]] = [[1|6]], Y için [[120|360]] = [[1|3]]'tür. Yalnızca 2 dilimin olasılığı [[1|4]]'tür.
Sağlama: 90 + 90 + 60 + 120 = 360°.
Sık yapılan hata: Dilim sayısına bakıp dört dilimin her birine [[1|4]] vermek.
Cevap B.`
},
{
  id: "mat-ol-368",
  kazanim: "M.8.5.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir yarışmada kutudaki özdeş kartlardan biri rastgele çekilecektir ve her kartın çekilme olasılığı birbirine eşittir. Kutuya aynı büyüklükte 8 kart daha konunca bir kartın çekilme olasılığı [[1|24]] olmuştur.
**Buna göre kutuda başlangıçta kaç kart vardı?**`,
  gorsel: null,
  secenekler: ["32","24","16","8"],
  dogru: 2,
  hatalar: [
    "Eklenen 8 kartı çıkarmak yerine ekledin (24 + 8). Başlangıçtaki sayı, ekleme sonrasından küçüktür.",
    "Ekleme sonrasındaki kart sayısını buldun. Başlangıçtakini bulmak için eklenen 8 kartı çıkarmalısın.",
    null,
    "Eklenen kart sayısını buldun. Soru başlangıçtaki kart sayısını soruyor."
  ],
  aciklama: `Eş şanslı n durumda her birinin olasılığı [[1|n]]'dir; payda toplam durum sayısını verir.
Adım 1: Eklemeden sonra bir kartın olasılığı [[1|24]] olduğundan kutuda 24 kart vardır.
Adım 2: Eklenen 8 kart çıkarılırsa başlangıçtaki kart sayısı 24 − 8 = 16 bulunur.
Adım 3: Başlangıçta kutuda 16 kart vardı.
Sağlama: 16 kartla her kartın olasılığı [[1|16]]; 8 kart eklenince 24 kart olur ve olasılık [[1|24]] olur.
Sık yapılan hata: Ekleme sonrasındaki sayıyı (24) cevap sanmak.
Cevap C.`
},
{
  id: "mat-ol-369",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Üç arkadaşın katıldığı bir yarışmada tek bir kazanan belirlenecektir. Bora'nın kazanma olasılığı Ali'nin kazanma olasılığının 2 katı, Cem'in kazanma olasılığı ise Ali'nin kazanma olasılığının 3 katıdır.
**Buna göre Cem'in kazanma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[5|6]]","[[1|2]]","[[1|3]]","[[1|6]]"],
  dogru: 1,
  hatalar: [
    "Ali'nin kazanmama olasılığını (1 − [[1|6]]) buldun. Soru Cem'in kazanma olasılığını soruyor.",
    null,
    "Bora'nın kazanma olasılığını buldun. Soru Cem'in olasılığını soruyor.",
    "Ali'nin kazanma olasılığını buldun. Soru Cem'in olasılığını soruyor."
  ],
  aciklama: `Tek kazanan olacağı için üç olasılığın toplamı 1'dir.
Adım 1: Ali'nin olasılığı p olsun; Bora'nınki 2p, Cem'inki 3p olur.
Adım 2: p + 2p + 3p = 1 olduğundan 6p = 1 ve p = [[1|6]].
Adım 3: Cem'in olasılığı 3 · [[1|6]] = [[1|2]].
Sağlama: [[1|6]] + [[2|6]] + [[3|6]] = [[6|6]] = 1.
Sık yapılan hata: Üç kişiyi eş şanslı sayıp [[1|3]] yazmak; olasılıklar eşit değildir.
Cevap B.`
},
{
  id: "mat-ol-370",
  kazanim: "M.8.5.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Bir tombala çekilişinde 40 özdeş bilet vardır ve her bilet ya ödüllüdür ya da ödülsüzdür. Rastgele seçilen bir biletin ödülsüz olma olasılığı, ödüllü olma olasılığının 4 katıdır.
**Buna göre ödüllü bilet sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["8","10","32","40"],
  dogru: 0,
  hatalar: [
    null,
    "Ödüllü olasılığını [[1|4]] sandın (40 ÷ 4 = 10). “4 katı” ödülsüz ile ödüllü arasındaki orandır; ödüllü olasılığı [[1|5]]'tir.",
    "Ödülsüz bilet sayısını buldun. Soru ödüllü bilet sayısını soruyor.",
    "Toplam bilet sayısını cevap sandın. Ödüllü bilet sayısı toplamın bir kısmıdır."
  ],
  aciklama: `Ödüllü ve ödülsüz olasılıklarının toplamı 1'dir.
Adım 1: Ödüllü olasılığı p ise ödülsüz olasılığı 4p'dir. p + 4p = 1 olduğundan p = [[1|5]].
Adım 2: Ödüllü bilet sayısı 40 · [[1|5]] = 8'dir.
Adım 3: Ödülsüz bilet sayısı 40 − 8 = 32'dir; bu 8'in 4 katıdır.
Sağlama: 32 = 4 · 8 ve 8 + 32 = 40.
Sık yapılan hata: Ödüllü olasılığını [[1|4]] alarak 10 bulmak.
Cevap A.`
},
{
  id: "mat-ol-371",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir pastanede iki ayrı kutuda lokum vardır. 1. kutuda 24 lokum bulunur ve rastgele alınan bir lokumun fındıklı olma olasılığı [[1|4]]'tür. 2. kutuda 12 lokum bulunur ve fındıklı olma olasılığı [[3|4]]'tür. İki kutudaki bütün lokumlar yeni bir tabağa boşaltılıp karıştırılmış ve tabaktan bir lokum alınacaktır.
**Buna göre alınan lokumun fındıklı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[5|12]]","[[1|2]]","[[7|12]]","[[3|4]]"],
  dogru: 0,
  hatalar: [
    null,
    "İki olasılığın ortalamasını aldın ([[1|4]] ile [[3|4]]'ün ortası). Kutulardaki lokum sayıları farklı olduğundan ortalama doğru değildir.",
    "Fındıklı olmama olasılığını ([[21|36]]) buldun. Soru fındıklı olma olasılığını soruyor.",
    "Yalnızca 2. kutunun olasılığını yazdın. İki kutunun lokumları birleşti."
  ],
  aciklama: `Kutular birleştirilince fındıklı lokum sayıları ve toplam lokum sayısı ayrı ayrı toplanır; olasılıkların ortalaması alınmaz.
Adım 1: 1. kutuda fındıklı lokum 24 · [[1|4]] = 6; 2. kutuda 12 · [[3|4]] = 9 tanedir.
Adım 2: Tabakta 24 + 12 = 36 lokum ve 6 + 9 = 15 fındıklı lokum vardır.
Adım 3: Olasılık [[15|36]] = [[5|12]].
Sağlama: Fındıksız lokum 36 − 15 = 21 tanedir; [[15|36]] + [[21|36]] = 1.
Sık yapılan hata: Kutu mevcutlarını dikkate almadan iki olasılığın ortalamasını almak.
Cevap A.`
},
{
  id: "mat-ol-372",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki çarkın dilimlerinin merkez açıları 2 : 3 : 4 oranındadır; oran, dilimlerin üzerinde birim olarak gösterilmiştir. K kırmızı, M mavi, S sarı dilimi göstermektedir. Çark bir kez çevrilecektir.
**Buna göre okun sarı (S) dilimde durma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 340" role="img" aria-label="Çark: K 2 birim, M 3 birim, S 4 birim."><path d="M280 190 L313.87 54.16 A140 140 0 0 1 419.66 199.77 Z" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L419.66 199.77 A140 140 0 0 1 201.71 306.07 Z" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><path d="M280 190 L201.71 306.07 A140 140 0 0 1 313.87 54.16 Z" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="354.75" y="133.69" font-size="15" text-anchor="middle" font-weight="bold">K</text><text x="354.75" y="150.69" font-size="14" text-anchor="middle">2 birim</text><text x="320.51" y="271.05" font-size="15" text-anchor="middle" font-weight="bold">M</text><text x="320.51" y="288.05" font-size="14" text-anchor="middle">3 birim</text><text x="195.59" y="150.42" font-size="15" text-anchor="middle" font-weight="bold">S</text><text x="195.59" y="167.42" font-size="14" text-anchor="middle">4 birim</text><polygon points="267,26 293,26 280,60" fill="currentColor"/><circle cx="280" cy="190" r="6" fill="currentColor"/></svg>`,
  secenekler: ["[[5|9]]","[[4|9]]","[[1|3]]","[[2|9]]"],
  dogru: 1,
  hatalar: [
    "Sarı dilim olmama olasılığını buldun. Soru sarı olma olasılığını soruyor.",
    null,
    "Üç dilimi eş sandın. Dilimlerin açıları 2 : 3 : 4 oranındadır; eş değildir.",
    "Kırmızı dilimin olasılığını buldun. Soru sarı dilimi soruyor."
  ],
  aciklama: `Dilimlerin açıları verilen orandaysa olasılıklar da aynı orandadır.
Adım 1: Toplam 2 + 3 + 4 = 9 birimdir; 1 birim 360° ÷ 9 = 40°'dir.
Adım 2: Sarı dilimin açısı 4 · 40° = 160°'dir.
Adım 3: Olasılık [[160|360]] = [[4|9]].
Sağlama: K 80°, M 120°, S 160°; 80 + 120 + 160 = 360°.
Sık yapılan hata: Üç dilim var diye [[1|3]] yazmak.
Cevap B.`
},
{
  id: "mat-ol-373",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki torbada toplam 20 top bulunmaktadır; kırmızı (K), mavi (M) ve yeşil (Y) toplar şekilde gösterilmiştir. Torbadaki bütün yeşil toplar çıkarılıp yerine 4 kırmızı ve 1 mavi top konmuştur. Ardından torbadan bakmadan bir top çekilecektir.
**Buna göre çekilen topun kırmızı olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 262" role="img" aria-label="Torbadaki topların renklere göre dağılımı"><path d="M70 40 L70 60 Q40 70 40 100 L40 230 Q40 244 54 244 L246 244 Q260 244 260 230 L260 100 Q260 70 230 60 L230 40 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="72" cy="220" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="72" y="225" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="112" cy="220" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="112" y="225" font-size="15" text-anchor="middle" font-weight="bold">Y</text><circle cx="152" cy="220" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="152" y="225" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="192" cy="220" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="192" y="225" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="232" cy="220" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="232" y="225" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="72" cy="182" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="72" y="187" font-size="15" text-anchor="middle" font-weight="bold">Y</text><circle cx="112" cy="182" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="112" y="187" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="152" cy="182" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="152" y="187" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="192" cy="182" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="192" y="187" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="232" cy="182" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="232" y="187" font-size="15" text-anchor="middle" font-weight="bold">Y</text><circle cx="72" cy="144" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="72" y="149" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="112" cy="144" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="112" y="149" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="152" cy="144" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="152" y="149" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="192" cy="144" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="192" y="149" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="232" cy="144" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="232" y="149" font-size="15" text-anchor="middle" font-weight="bold">Y</text><circle cx="72" cy="106" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="72" y="111" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="112" cy="106" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="112" y="111" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="152" cy="106" r="17" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="152" y="111" font-size="15" text-anchor="middle" font-weight="bold">K</text><circle cx="192" cy="106" r="17" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="192" y="111" font-size="15" text-anchor="middle" font-weight="bold">Y</text><circle cx="232" cy="106" r="17" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="232" y="111" font-size="15" text-anchor="middle" font-weight="bold">M</text><circle cx="310" cy="90" r="14" fill="var(--vurgu2)" fill-opacity="0.32" stroke="currentColor" stroke-width="1.5"/><text x="310" y="95" font-size="14" text-anchor="middle" font-weight="bold">K</text><text x="336" y="95" font-size="15" text-anchor="start">Kırmızı top</text><circle cx="310" cy="130" r="14" fill="var(--vurgu)" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/><text x="310" y="135" font-size="14" text-anchor="middle" font-weight="bold">M</text><text x="336" y="135" font-size="15" text-anchor="start">Mavi top</text><circle cx="310" cy="170" r="14" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><text x="310" y="175" font-size="14" text-anchor="middle" font-weight="bold">Y</text><text x="336" y="175" font-size="15" text-anchor="start">Yeşil top</text></svg>`,
  secenekler: ["[[3|5]]","[[1|2]]","[[2|5]]","[[3|10]]"],
  dogru: 1,
  hatalar: [
    "Bir önceki yanlış sonucun tersini ([[15|25]]) aldın. Torbada artık yeşil top yoktur ve toplam 20'dir.",
    null,
    "Yeşil topları çıkarmayı unuttun ([[10|25]]). Yeşil topların hepsi torbadan çıkarılmıştır.",
    "Değişiklikleri hesaba katmadın ([[6|20]]). Yeşiller çıkarılıp yeni toplar konduğunda pay da payda da değişir."
  ],
  aciklama: `Adım 1: Şekilde 6 kırmızı, 9 mavi ve 5 yeşil top vardır.
Adım 2: Yeşil toplar çıkarılınca 15 top kalır (6 kırmızı, 9 mavi). 4 kırmızı ve 1 mavi eklenince 10 kırmızı, 10 mavi, toplam 20 top olur.
Adım 3: Kırmızı olasılığı [[10|20]] = [[1|2]].
Sağlama: Torbada yeşil top yoktur; [[10|20]] + [[10|20]] = 1.
Sık yapılan hata: Yeşil topları çıkarmayı ya da yeni toplamı hesaba katmayı unutmak.
Cevap B.`
},
{
  id: "mat-ol-374",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `1'den 20'ye kadar (1 ve 20 dâhil) her sayı ayrı bir karta yazılmış ve 20 kart bir kutuya konmuştur. Kutudan, üzerinde asal olmayan bir sayı yazan bazı kartlar çıkarılacaktır. Daha sonra kutudan rastgele bir kart çekildiğinde üzerindeki sayının asal olma olasılığının [[1|2]] olması istenmektedir.
**Buna göre kartlar çıkarıldıktan sonra kutuda kaç kart kalır?**`,
  gorsel: null,
  secenekler: ["4","8","12","16"],
  dogru: 3,
  hatalar: [
    "Çıkarılması gereken kart sayısını (20 − 16 = 4) buldun. Soru kutuda kalan kart sayısını soruyor.",
    "Asal sayılı kartların sayısını (8) cevap sandın. Kutuda asal olmayan kartlar da kalır; kalanların yarısı asal olmalıdır.",
    "Asal olmayan sayılı kartların sayısını (1 dâhil 12) buldun. Bu, kalan kart sayısı değildir; bunların 4'ü çıkarılır, kutuda 8 asal olmayan kart kalır.",
    null
  ],
  aciklama: `Asal sayı, 1'den büyük olan ve yalnızca 1'e ve kendisine bölünebilen sayıdır; 1 asal değildir.
Adım 1: 1'den 20'ye kadar asal sayılar 2, 3, 5, 7, 11, 13, 17, 19'dur: 8 tane. Asal olmayan kartlar 20 − 8 = 12 tanedir.
Adım 2: Yalnızca asal olmayan kartlar çıkarıldığı için asal sayılı kartların sayısı 8 olarak kalır.
Adım 3: Asal olma olasılığı [[1|2]] olacaksa 8 kart, kalan kartların yarısı olmalıdır: kalan kart sayısı 8 · 2 = 16'dır (4 kart çıkarılır).
Sağlama: Kutuda 8 asal, 12 − 4 = 8 asal olmayan kart kalır; olasılık [[8|16]] = [[1|2]].
Sık yapılan hata: 1'i asal saymak. Bu durumda 9 asal kart bulunur ve sonuç yanlış çıkar.
Cevap D.`
},
{
  id: "mat-ol-375",
  kazanim: "M.8.5.1.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir torbada yalnızca kırmızı ve mavi toplar bulunmaktadır. Torbadaki toplam top sayısı 6, 7 ya da 8 olabilir. Her durumda kırmızı top sayısı en az 2'dir ve torbadan bir top çekildiğinde kırmızı olma olasılığı [[1|2]]'den küçüktür.
**Buna göre kırmızı top çekme olasılığı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["4","5","6","8"],
  dogru: 1,
  hatalar: [
    "Bir durumu eksik saydın. 6 topta [[1|3]], 7 topta [[2|7]] ve [[3|7]], 8 topta [[1|4]] ve [[3|8]] olmak üzere 5 değer vardır.",
    null,
    "Olasılığı tam [[1|2]] olan durumu da saydın. [[1|2]]'den küçük olması istendiği için bu durum alınmaz.",
    "Kırmızı top sayısı 1 olan durumları da saydın. Kırmızı top sayısı en az 2'dir."
  ],
  aciklama: `Her toplam top sayısı için koşula uyan kırmızı top sayılarını bul, sonra olasılık değerlerini karşılaştır.
Adım 1: 6 topta kırmızı sayısı 2 olabilir (3 olsa olasılık [[1|2]] olurdu): [[2|6]] = [[1|3]].
Adım 2: 7 topta kırmızı sayısı 2 ya da 3 olabilir: [[2|7]] ve [[3|7]]. 8 topta kırmızı sayısı 2 ya da 3 olabilir: [[2|8]] = [[1|4]] ve [[3|8]].
Adım 3: Değerler [[1|3]], [[2|7]], [[3|7]], [[1|4]], [[3|8]]; hepsi birbirinden farklıdır (yaklaşık 0,333; 0,286; 0,429; 0,25; 0,375). 5 farklı değer vardır.
Sağlama: Kırmızı sayısı 6 topta 1 durum, 7 topta 2 durum, 8 topta 2 durum verir; 1 + 2 + 2 = 5.
Sık yapılan hata: Olasılığı [[1|2]] olan durumu koşula dâhil etmek.
Cevap B.`
}
);
