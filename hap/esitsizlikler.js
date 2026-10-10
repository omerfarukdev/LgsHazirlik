window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["esitsizlikler"] = {
  kazanimlar: ["M.8.2.3.1", "M.8.2.3.2", "M.8.2.3.3"],
  giris: "Eşitsizlik, iki şeyin eşit değil, biri ötekinden büyük ya da küçük olduğunu söyler; günlük hayatta sınırlar böyle yazılır (yaş sınırı, kontenjan, bütçe). Sınavda bir cümleyi eşitsizliğe çevirmeni, sayı doğrusundaki gösterimi okumanı ve eşitsizliği çözüp çözüm kümesindeki tam sayıları saymanı isterler. Bu özeti okuyunca sembolü, yönü ve sınırın dahil olup olmadığını güvenle seçeceksin.",
  bolumler: [
    {
      baslik: "Semboller ve sözel ifadeler",
      maddeler: [
        "**Eşitsizlik**, içinde bilinmeyen olan ve <, >, ≤, ≥ sembollerinden biriyle kurulan ifadedir. Sembolün **açık ucu büyük sayıya** bakar: 5 > 2 ve 2 < 5 aynı şeyi söyler.",
        "**≤ ve ≥ eşitliği de kapsar** (sınırın kendisi uygundur). **< ve >** sınırı kapsamaz. Sorudaki ilk iş, sınırın uygun olup olmadığına karar vermektir.",
        "**En az** alt sınır koyar ve sınır dahildir (≥). **En fazla, en çok, aşmamalı, geçmemeli, geçmez** üst sınır koyar ve sınır dahildir (≤). **-den çok, -den fazla, -i geçen, -den büyük** sınırı dışarıda bırakır (>). **-den az, -in altında, -den küçük** de sınırı dışarıda bırakır (<).",
        "**-den az değildir, -den az olmamalı** demek “≥” demektir; **-den büyük değildir, -den fazla olmamalı** demek “≤” demektir. Olumsuzu çevirirken sembolün tersini al, ardından eşitliği ekle: “az” (<) → tersi > → eşitlikle birlikte ≥.",
        "**İki sınır birlikte** verilirse (“2 kg'dan az olmamalı ve 9 kg'ı aşmamalı”) her sınırı ayrı çevir, sonra küçükten büyüğe birleştir: 2 ≤ m ≤ 9.",
        "Cümleyi parçala: önce işlemi yaz (“bir sayının 3 katının 2 fazlası” → 3x + 2), sonra sınır sembolünü ekle. Sözcük sırasına dikkat et: “x'in 1 eksiğinin üçte biri” → [[x − 1|3]]; “x'in üçte birinin 1 eksiği” → [[x|3]] − 1. Sorudaki “toplam, kalan, ödenecek tutar” sözleri hangi niceliğin sınırlandığını gösterir.",
        "Formüller de cümleye girer: çevre (kare için 4a), kâr = gelir − gider, yol = hız · süre, doğru-yanlış puanında yanlış sayısı = toplam soru − doğru sayısı."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Cümlede</th><th>Sembol</th><th>Sınır dahil mi?</th></tr><tr><td>en az 8</td><td>x ≥ 8</td><td>evet</td></tr><tr><td>en fazla 8, 8'i aşmamalı</td><td>x ≤ 8</td><td>evet</td></tr><tr><td>8'den çok, 8'i geçen</td><td>x &gt; 8</td><td>hayır</td></tr><tr><td>8'den az</td><td>x &lt; 8</td><td>hayır</td></tr><tr><td>8'den az değil</td><td>x ≥ 8</td><td>evet</td></tr><tr><td>8'den büyük değil</td><td>x ≤ 8</td><td>evet</td></tr></table>",
      ornekler: [
        "“Bir çocuk kulübüne katılmak için yaşın en az 7 olması gerekir.” → y ≥ 7.",
        "“Bir sayının yarısının 3 eksiği 10'u geçmez.” → [[x|2]] − 3 ≤ 10.",
        "Fiyatı 24 TL olan kitaptan n tane alıp 200 TL'yi aşmamak: 24n ≤ 200."
      ],
      dikkat: [
        "**En az ile en fazlayı karıştırmak.** “En az 10” alt sınırdır (≥ 10); “en fazla 10” üst sınırdır (≤ 10). Kendine sor: 10 uygun mu, daha büyükler mi yoksa daha küçükler mi?",
        "**Sınırı yanlış dahil etmek.** “Yaşı 16'dan büyük” için y ≥ 16 yazarsan 16 yaşındaki de girmiş olur. Doğrusu y > 16'dır."
      ]
    },
    {
      baslik: "Sayı doğrusunda gösterim",
      maddeler: [
        "**Dolu (içi boyalı) yuvarlak**: o sayı çözüme dahildir (≤ ya da ≥). **Boş yuvarlak**: o sayı dahil değildir (< ya da >).",
        "**Ok sağa** gidiyorsa değerler sınırdan büyüktür; **ok sola** gidiyorsa küçüktür. Kalın çizgi çözüm kümesinin bulunduğu bölgeyi gösterir.",
        "**Çift taraflı** eşitsizlik, iki sınırı birden verir: −3 ≤ t < 7 demek t'nin −3 ile 7 arasında olduğunu, −3'ün dahil, 7'nin dahil olmadığını söyler. İki uç ayrı ayrı okunur: sol uçta dolu yuvarlak, sağ uçta boş yuvarlak.",
        "Eşitsizliği yazarken sayıları **küçükten büyüğe** sırala: a < x ≤ b. Soldaki sayı hep sağdakinden küçüktür.",
        "**İki gösterimin ortak kısmı** (kesişim), iki koşulu birden sağlayan değerlerdir. İki sayı doğrusunu üst üste düşün; ikisinin de boyalı olduğu bölge ortak çözümdür."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Eşitsizlik</th><th>Sayı doğrusu</th></tr><tr><td>x ≥ −1</td><td>−1'de dolu yuvarlak, ok sağa</td></tr><tr><td>a < 1</td><td>1'de boş yuvarlak, ok sola</td></tr><tr><td>−3 ≤ t < 7</td><td>−3'te dolu, 7'de boş; arası kalın</td></tr></table>",
      dikkat: [
        "**Dolu ile boş yuvarlağı karıştırmak.** Yuvarlak boşsa sınır çözüm değildir: x > 2 için 2 yazılmaz, 3'ten başlanır.",
        "**Ok yönünü ters okumak.** Ok sağa gidiyorsa hangi sembol olursa olsun “büyük” tarafı gösterir; sola gidiyorsa “küçük” tarafı."
      ]
    },
    {
      baslik: "Eşitsizlik çözme",
      maddeler: [
        "Eşitsizlik bir **terazi** gibi çözülür, ancak denge yerine yön korunur. Amaç x'i yalnız bırakmaktır; programda en çok **iki işlem** gerekir (örneğin önce toplama-çıkarma, sonra çarpma-bölme).",
        "**Aynı sayıyı** iki tarafa eklemek ya da iki taraftan çıkarmak **yönü değiştirmez**. Sabit terimi karşı tarafa geçirince işareti değişir.",
        "**Pozitif sayıyla** çarpmak ya da bölmek de yönü değiştirmez.",
        "**Negatif sayıyla** çarpmak ya da bölmek **yönü ters çevirir**: < olan > olur, ≤ olan ≥ olur. Nedeni: 2 < 5 iken her ikisini −1 ile çarpınca −2 > −5 olur.",
        "Çözümün sonucu bir **aralık** olur. “x > 3” demek 3'ten büyük sonsuz sayıda değer demektir. Soru “en küçük tam sayı” ya da “kaç tam sayı” diyorsa sınır dahil mi diye bakıp tam sayıları tek tek yaz.",
        "**Çift taraflı** eşitsizlikte üç parçanın hepsine aynı işlemi uygula. Negatife bölersen üç parçayı çevir ve sırayı düzelt: −6 < −2x ≤ 4 → böl (−2): 3 > x ≥ −2 → −2 ≤ x < 3.",
        "**Sağlama** yap: bulduğun aralıktan bir sayıyı ve sınırı eşitsizlikte yerine koy. Sınır sayı ≤ ya da ≥ ise eşitsizlik sağlanır (eşitlik olur); < ya da > ise sağlanmaz."
      ],
      ornekler: [
        "2x − 7 ≥ 11 → 2x ≥ 18 → x ≥ 9. Sağlama: x = 9 için 18 − 7 = 11 ≥ 11 doğru.",
        "5 − 3x > 17 → −3x > 12 → (−3'e böl, yön çevir) x < −4. Sağlama: x = −5 için 5 + 15 = 20 > 17 doğru.",
        "[[x|4]] + 2 < 6 → [[x|4]] < 4 → x < 16."
      ],
      dikkat: [
        "**Negatife bölünce yönü çevirmemek.** −3x < 12 için x < −4 yazarsan yanlış olur; doğrusu x > −4. Kontrol: x = 0 için 0 < 12 doğru, x > −4 içinde 0 var.",
        "**İşaret kaybı.** 15 ÷ (−5) = −3 olur, 3 değil. Önce işareti, sonra sayıyı yaz.",
        "**−x'li eşitsizlikte yön unutmak.** 4 − x > 1 → −x > −3 → x < 3. Eksiyi atarken iki tarafı −1 ile çarpmış olursun; yön döner.",
        "**Çift taraflıda sırayı bozmak.** Negatife bölünce 3 > x ≥ −2 çıkar; bunu küçükten büyüğe −2 ≤ x < 3 yaz."
      ]
    },
    {
      baslik: "Sorudaki çözümü sayma ve yorumlama",
      maddeler: [
        "**Tam sayı sayma:** Aralığın iki ucunun dahil olup olmadığına bak. İkisi de dahilse **büyük − küçük + 1**. Biri dahil, biri dahil değilse **büyük − küçük**. İkisi de dahil değilse **büyük − küçük − 1**. Yine de emin olmak için sayıları tek tek yazmak güvenlidir.",
        "**Kaç tane / toplamı / en küçük / en büyük:** önce çözüm aralığını bul, sonra tam sayıları sırala. “Pozitif”, “çift”, “asal” gibi ek koşulları en son uygula. 0 çifttir ama pozitif de negatif de değildir.",
        "**Tam sayı olması gereken durumlar** (kişi, adet, hafta) için ondalık çıkan sonucu doğru yöne yuvarla: önce sınırın hangi yönde olduğuna bak: üst sınır (≤) varsa aşağı, alt sınır (≥) varsa yukarı yuvarla. Örnek: 7n ≤ 50 → n ≤ 7,14 → en fazla 7. 7n ≥ 50 → n ≥ 7,14 → en az 8. Sonuç tam sayı çıkıp sınır dahil değilse (t > 20 gibi) bir sonraki tam sayıya geç: en az 21.",
        "**Ortalama sorusu:** ortalama toplamın sayıya bölümüdür. İlk iki sınav notu 66 ve 78 olan öğrencinin üçüncü sınav notu x olsun; üç sınav ortalamasının en az 75 olması için [[66 + 78 + x|3]] ≥ 75 → 144 + x ≥ 225 → x ≥ 81.",
        "**Sabit ücret + birim ücret** (abonelik, tarife) toplam = sabit + birim · adet olarak kurulur. Kalan paranın sınırı varsa başlangıç tutarından harcama çıkarılır.",
        "**Kesişim:** iki koşul birlikte aranıyorsa her birini ayrı çöz, sayı doğrularını üst üste koy, ortak bölgeyi al.",
        "**Çözüm kümesi verilmiş, katsayı aranıyorsa** (a − 3x ≤ 6 ve çözüm x ≥ 1 gibi; sonuç a = 9): eşitsizliği önce x için a cinsinden çöz, bulduğun sınırı sayı doğrusundaki sınıra eşitle ve a'yı bul."
      ],
      ornekler: [
        "−2 ≤ x < 5 aralığında 5 − (−2) = 7 tam sayı vardır: −2, −1, 0, 1, 2, 3, 4.",
        "Bir sayının 2 katının 3 fazlası 17'den az olsun: 2x + 3 < 17 → x < 7. En büyük tam sayı 6'dır, çünkü 7 dahil değildir."
      ],
      dikkat: [
        "**Boş ucu saymak.** −3 < x ≤ 2 için −3 sayılmaz; tam sayılar −2, −1, 0, 1, 2 olur (5 tane).",
        "**Yuvarlama yönünü karıştırmak.** “En fazla kaç adet?” sorusunda 7,14 değerini 8 yapma; 8 adet sınırı aşar.",
        "**Soruyu bitirmeden durmak.** Çözümü x ≤ 9 bulmak “kaç tam sayı” sorusunun cevabı değildir; sayılar sayılmalı."
      ]
    }
  ],
  lgs: [
    "Bir bütçe, kontenjan, kapasite ya da yaş sınırı anlatılır; “en az kaç”, “en fazla kaç” ya da “kaç farklı tam sayı” sorulur. Çeldiriciler sınırı yanlış dahil etmekten, yönü ters kurmaktan ve ondalık sonucu yanlış yöne yuvarlamaktan gelir.",
    "Sayı doğrusu verilir ve gösterilen aralıktaki tam sayıların sayısı, toplamı ya da bir koşulu sağlayanı sorulur. Uçlardaki yuvarlak türüne ve soruda ek koşula (çift, pozitif, asal) dikkat et.",
    "Negatif katsayılı ya da çift taraflı bir eşitsizlik verilir ve çözüm kümesinden tam sayı sayılır. En sık hata, negatife bölünce yönü çevirmemektir."
  ],
  yokla: [
    { soru: "“Bir paketin kütlesi 9 kg'dan az değildir” cümlesi nasıl yazılır?", cevap: "m ≥ 9. “Az değildir” sınırı ve daha büyükleri kapsar; 9 dahildir." },
    { soru: "Sayı doğrusunda 4'te boş yuvarlak, ok sola ise eşitsizlik nedir?", cevap: "x < 4. Ok sola olduğundan küçük, boş yuvarlak olduğundan 4 dahil değil." },
    { soru: "−4x ≥ 20 eşitsizliğini çöz.", cevap: "x ≤ −5. Negatif sayı olan −4'e bölünce yön döner; 20 ÷ (−4) = −5." },
    { soru: "4x − 1 < 15 eşitsizliğini sağlayan en büyük tam sayı kaçtır?", cevap: "3. Çözüm x < 4; 4 dahil olmadığından en büyük tam sayı 3." },
    { soru: "−1 < x ≤ 4 aralığında kaç tam sayı vardır?", cevap: "5. Tam sayılar 0, 1, 2, 3, 4; −1 boş uçtur ve sayılmaz." },
    { soru: "Eşitsizliğin her iki tarafı hangi sayıyla çarpılınca yön değişir?", cevap: "Negatif sayıyla. Pozitif sayıyla çarpmak ya da bölmek, toplamak ve çıkarmak yönü değiştirmez." }
  ]
};
