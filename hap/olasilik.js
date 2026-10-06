window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["olasilik"] = {
  kazanimlar: ["M.8.5.1.1", "M.8.5.1.2", "M.8.5.1.3", "M.8.5.1.4", "M.8.5.1.5"],
  giris: "Olasılık, bir olayın ne kadar şansı olduğunu 0 ile 1 arasında bir sayıyla söylemektir. Sınavda tek bir deneme (bir top çekmek, bir çark çevirmek, bir kart seçmek) için olası durumları sayman ve bir olayın olasılığını kesir olarak yazman istenir. Bu özetten sonra neyi saydığını bilecek, payı ve paydayı doğru kuracaksın.",
  bolumler: [
    {
      baslik: "Temel kavramlar: deney, olası durum, olay",
      maddeler: [
        "**Deney:** Sonucu önceden kesin bilinmeyen işlem. Zar atmak, torbadan top çekmek, çarkı çevirmek birer deneydir.",
        "**Olası durum (çıktı):** Deneyde ortaya çıkabilecek her ayrı sonuç. Zarda 6, bozuk para atışında 2 olası durum vardır.",
        "**Olay:** Olası durumlardan, bizim istediğimiz bir ya da birkaçı. “Zarın çift gelmesi” olayı 2, 4 ve 6 sonuçlarından oluşur.",
        "Bu konuda deney **tek denemelidir**: bir top, bir kart, bir atış. Birden fazla deneme birleştirilmez.",
        "**Her top, her kart ayrı bir durumdur.** Torbadan top çekme olayında çekilebilecek her top bir olası durumdur: 3 kırmızı ve 5 mavi top varsa olası durum sayısı 3 + 5 = 8'dir, renk sayısı olan 2 değil. Aynı harfli iki kart ya da adı iki kâğıda yazılan kişi de iki ayrı durum oluşturur."
      ],
      dikkat: [
        "**Renk sayısını durum sayısı sanma.** Kutuda 3 kırmızı, 2 yeşil kalem varsa kalem çekme olayının olası durum sayısı 5'tir, renk sayısı olan 2 değil. Yeşil olasılığı da kalemler sayılarak bulunur: [[2|5]].",
        "**Verilen koşulları kullan.** Seçim bir koşulla sınırlıysa (“yalnızca tek rakam denenecek” gibi) olası durumlar yalnızca koşula uyanlardır, bütün seçenekler değil."
      ]
    },
    {
      baslik: "Eşit şans ve olasılık formülü",
      maddeler: [
        "**Eşit şans:** Her olası durumun gerçekleşme şansı aynıysa durumlara eş olasılıklı denir. Hilesiz zar, özdeş toplar, eş dilimli çark, aynı büyüklükte kâğıtlar eşit şans verir.",
        "**n olası durum eş olasılıklıysa her birinin olasılığı [[1|n]]'dir.** 8 eş dilimli çarkta belirli bir dilimin gelme olasılığı [[1|8]]'dir.",
        "**Bir olayın olasılığı = [[istenen durum sayısı|olası tüm durum sayısı]].** Pay istenen olayın durumlarını, payda bütün durumları sayar.",
        "Sonucu sadeleştirilmiş kesir olarak yazabilirsin: [[6|8]] ile [[3|4]] aynı olasılıktır. Yüzde ya da ondalık gösterim de aynı değeri verir: [[3|4]] = 0,75 = %75.",
        "**Eşit şans yoksa durumları saymak yetmez.** Eş olmayan dilimlerde merkez açıya bakılır: açısı 90° olan dilimin olasılığı [[90|360]] = [[1|4]]'tür. Tersine, olasılığı P olan dilimin açısı P · 360°'dir. Parçalar eş değilse önce eş parçalara ayır.",
        "**Kaydedilen sonuçlar eş şanslı olmayabilir.** Zarın yüzlerine 1, 1, 1, 2, 3, 3 yazılmışsa sonuçlar 1, 2 ve 3'tür; ama 1'in şansı [[3|6]], 2'ninki [[1|6]]'dır. Sonuçları eş saymadan önce her sonucun kaç nesneden geldiğini say."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Deney</th><th>Olası durum sayısı</th><th>Bir olayın olasılığı</th></tr><tr><td>Hilesiz zar atmak</td><td>6</td><td>Çift gelmesi: [[3|6]] = [[1|2]]</td></tr><tr><td>Her harfi ayrı karta yazılmış “KAYAK” sözcüğünden kart çekmek</td><td>5</td><td>A harfi gelmesi: [[2|5]] (iki ayrı A kartı var)</td></tr></table>",
      dikkat: [
        "**Eşit şanslı olmayan durumu eşit sanma.** Bir torbada 7 mavi, 1 beyaz top varsa “iki renk var, olasılık [[1|2]]” demek yanlıştır; mavi için [[7|8]], beyaz için [[1|8]] olur.",
        "**Payı bütün olası durumlarla karıştırma.** Pay, istenen olayın durumlarıdır; payda bütün olası durumlar. 20 kartın 5'i kırmızıysa kırmızı olasılığı [[5|20]]'dir, [[5|15]] değil."
      ]
    },
    {
      baslik: "Olasılığın değer aralığı: imkânsız ve kesin olay",
      maddeler: [
        "Her olayın olasılığı **0 ile 1 arasındadır** (0 ve 1 dâhil): 0 ≤ P ≤ 1. Kesir, ondalık sayı ya da yüzde olarak yazılabilir.",
        "**İmkânsız olay:** Hiçbir olası durumu içermeyen olay; olasılığı **0**. Hilesiz zarla 7 gelmesi imkânsızdır.",
        "**Kesin olay:** Bütün olası durumları içeren olay; olasılığı **1**. İçinde yalnızca kırmızı top olan torbadan kırmızı çekmek kesindir.",
        "Olasılık hiçbir zaman negatif olamaz ve 1'i aşamaz. [[9|8]], 1,2 ve −0,3 birer olasılık değeri **olamaz**.",
        "**Olma + olmama = 1.** Bir olayın olasılığı p ise gerçekleşmeme olasılığı 1 − p'dir. Yağmur yağma olasılığı [[3|10]] ise yağmama olasılığı [[7|10]]'dur.",
      ],
      dikkat: [
        "**Olasılığı 0 olan olay ile az olasılıklı olayı karıştırma.** Torbada 1 kırmızı, 99 mavi top varsa kırmızı çekme olasılığı [[1|100]]'dür; küçüktür ama 0 değildir, çünkü olay olabilir.",
        "**Kesin olayı bul, tahmin etme.** “Kesin” için bütün durumlar olayın içinde olmalı. Zarın 1'den büyük gelmesi kesin değildir; 1 gelirse gerçekleşmez ([[5|6]])."
      ]
    },
    {
      baslik: "Olasılıkları sezgiyle karşılaştırma",
      maddeler: [
        "**Aynı torba ya da listeden** seçim yapılıyorsa hesap yapmadan sayıları karşılaştır: sayısı çok olan olay daha olasılıklı, sayıları eşitse olasılıkları eşittir. Sınıfta 15 kız, 15 erkek varsa ikisinin olasılığı eşittir.",
        "**Farklı kaplarda** toplam sayı da değişir; kesirleri payda eşitleyerek ya da ondalık yazarak karşılaştır: [[3|8]] ile [[2|5]] için [[15|40]] ile [[16|40]] bulunur, ikincisi büyüktür.",
        "Çarkta ya da şekilde dilimlerin **alanı** büyükse olasılık da büyüktür. Alan ne kadar fazlaysa şans o kadar fazladır.",
      ],
      dikkat: [
        "**Paydaları farklı kesirleri paya bakarak kıyaslama.** [[4|9]] ile [[3|5]] için pay büyük olan [[4|9]] gibi görünür, oysa [[3|5]] daha büyüktür.",
        "**Farklı kaplarda yalnızca istenen sayıya bakma.** A kutusunda 20 toptan 6'sı, B kutusunda 8 toptan 4'ü kırmızıysa kırmızı sayısı A'da fazladır; ama olasılık B'de ([[4|8]]) daha büyüktür."
      ]
    },
    {
      baslik: "Çözümlü örnekler: sayma, tablo ve kesir",
      maddeler: [
        "**Çözümlü örnek (torba):** Bir torbada 5 siyah, 7 turuncu ve 3 gri top vardır; biri rastgele çekilecek. Adım 1: Toplam 5 + 7 + 3 = 15 top, yani 15 olası durum. Adım 2: Turuncu olmayan topların sayısı 5 + 3 = 8. Adım 3: Olasılık [[8|15]]. Sağlama: turuncu olasılığı [[7|15]], olmama olasılığı 1 − [[7|15]] = [[8|15]] olur.",
        "**Çözümlü örnek (sayı kartları):** 3'ten 22'ye kadar (3 ve 22 dâhil) her sayı ayrı karta yazılmış. Adım 1: Kart sayısı 22 − 3 + 1 = 20. Adım 2: 5'in katları 5, 10, 15, 20; 4 tane. Adım 3: Olasılık [[4|20]] = [[1|5]]. Uçları dâhil olan aralıkta kart sayısı **son − ilk + 1**'dir.",
        "**Tablo ve grafik:** Önce istenen değeri okuyup bütünü bul. Tabloda 6 kız, 9 erkek varsa bütün 15'tir; kız olasılığı [[6|15]] = [[2|5]]. Sütun ve çizgi grafiğinde değerleri toplayıp bütünü, koşula uyanları ayrı sayıp payı bul; ortalamayla karşılaştırma varsa önce ortalamayı hesapla. Daire grafiğinde dilimin olasılığı açısı ÷ 360°'dir.",
        "**Koşullu seçim:** “Hem 3'e hem 4'e bölünen” sayılar 12'nin katlarıdır (ortak kat). “Asal”, “bölen”, “kat”, “tam kare” gibi koşulları önce tek tek kartlar üzerinde işaretle, sonra say.",
        "**Olasılıktan sayı bulma:** P = [[2|7]] ve toplam 35 ise istenen durum sayısı 35 ÷ 7 · 2 = 10'dur. Toplam bilinmiyorsa durum sayıları sadeleşmiş kesrin katlarıdır: P = [[2|7]] ise toplam 7, 14, 21, … ve istenen durum 2, 4, 6, … olur; “30'dan az” gibi bir koşul uygun katı seçtirir. İki olasılık verilmişse toplam paydaların ortak katıdır."
      ],
      dikkat: [
        "**Sınırı doğru say.** “6'dan büyük” 6'yı içermez; “6 ya da daha büyük” içerir. Sınırı yanlış kapsayınca pay 1 kayar.",
        "**İstenen ile istenmeyeni karıştırma.** “Çekilmeme”, “olmama” ya da “kırmızı olmayan” istenmişse 1'den çıkar ya da istenmeyenleri say. Soru kökünü iki kez oku."
      ]
    },
    {
      baslik: "Torbaya ekleme ve çıkarma",
      maddeler: [
        "Bir değişiklikten sonra **hem pay hem payda değişebilir**: eklenen top istenen renkteyse ikisi birden artar, başka renkteyse yalnızca payda artar.",
        "**Çözümlü örnek:** Bir kutuda 3 mor ve 5 pembe boncuk var. Mor boncuk çekme olasılığının [[1|2]] olması için kaç mor boncuk eklenmelidir? Adım 1: x ekleyelim: mor x + 3, toplam 8 + x. Adım 2: (3 + x) = (8 + x) ÷ 2, yani 6 + 2x = 8 + x, x = 2. Sağlama: 5 mor, 5 pembe; [[5|10]] = [[1|2]].",
        "Yöntem: değişiklik sonrası **yeni payı ve yeni paydayı** yaz, olasılığa eşitle. Burada hâlâ tek çekim vardır; ardışık çekim yoktur.",
        "Çıkarılan ya da daha önce kullanılan öğeler artık seçilemez; olası durumları yeniden say. Bir rengin hepsi çıkarılırsa o rengin olasılığı 0, geri kalan tek renk ise o rengin olasılığı 1 olur."
      ],
      dikkat: [
        "**Ekleneni yalnızca paya ya da yalnızca paydaya katma.** İstenen renkten eklenen top hem paya hem paydaya girer.",
        "**Yeni toplamı cevap sanma.** Soru “kaç top eklenmeli” diyorsa, bulduğun toplam top sayısından ilk sayıyı çıkar."
      ]
    }
  ],
  lgs: [
    "Torba, çark, kart ya da tablodan olasılık hesabı sorulur; tuzak olası durumları yanlış saymak (aynı türü tek durum saymak, uç sayıları unutmak) ve paydaya yanlış toplamı koymaktır.",
    "“Hangisinin olasılığı 0'dır / 1'dir / olamaz” tipinde imkânsız-kesin olay ayrımı ve olasılık değer aralığı sorulur; çeldirici, küçük olasılığı imkânsız sanmaktır.",
    "Ekleme-çıkarma ya da olasılıktan toplam bulma sorularında koşul denklemle kurulur. Üst düzey sorularda koşullu bir sayma (ortak kat, bölen, asal sayı, kenar parça) ve olasılığı eşitleme istenir."
  ],
  yokla: [
    { soru: "Bir çantada 9 kalem vardır: 4'ü mavi, 5'i siyah. Çantadan rastgele çekilen bir kalemin siyah olma olasılığı nedir?", cevap: "[[5|9]]. Pay siyah kalem sayısı (5), payda bütün kalem sayısıdır (4 + 5 = 9); renk sayısı (2) değildir." },
    { soru: "Hilesiz bir zarla 8 gelme olasılığı kaçtır? Hilesiz bir zarla 6'dan küçük bir sayı gelme olasılığı kesin midir?", cevap: "İlki 0'dır, imkânsız olaydır. İkincisi kesin değildir: 6 gelirse gerçekleşmez, olasılığı [[5|6]]'dır." },
    { soru: "Bir olayın olma olasılığı [[3|11]] ise olmama olasılığı kaçtır?", cevap: "[[8|11]]. Olma ve olmama olasılıkları toplamı 1'dir: 1 − [[3|11]] = [[8|11]]." },
    { soru: "Aşağıdakilerden hangisi bir olasılık değeri olamaz: 0, 0,45, [[7|6]], %100?", cevap: "[[7|6]]. Olasılık 1'den büyük olamaz; [[7|6]] 1'den büyüktür." },
    { soru: "8'den 31'e kadar (ikisi de dâhil) her sayı ayrı bir kâğıda yazılmıştır. Kâğıt sayısı kaçtır?", cevap: "24. Uçları dâhil aralıkta sayı adedi son − ilk + 1 = 31 − 8 + 1 = 24'tür." }
  ]
};
