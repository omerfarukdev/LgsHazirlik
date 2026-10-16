window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["ucgenler"] = {
  "kazanimlar": [
    "M.8.3.1.1",
    "M.8.3.1.2",
    "M.8.3.1.3",
    "M.8.3.1.4",
    "M.8.3.1.5"
  ],
  "giris": "Bu konuda üçgenin özel çizgilerini, kenarlar arasındaki sınırı, kenar ile açı sıralamasını, üçgenin çizilebilirliğini ve Pisagor bağıntısını öğrenirsin. Sınavda günlük hayat durumlarında bir uzunluk bulman istenir.",
  "bolumler": [
    {
      "baslik": "Kenarortay, açıortay, yükseklik",
      "maddeler": [
        "**Kenarortay:** bir köşeyi karşı kenarın **orta noktasına** birleştirir; kenarı iki **eşit** parçaya böler. Parçalar eşitlenerek denklem kurulur.",
        "**Açıortay:** köşedeki açıyı **iki eşit açıya** ayırır (80° → 40° + 40°). Açı toplamıyla birlikte kullanılır: B = 64°, C = 50° ise B'nin açıortayının [AC]'yi kestiği D için m(BDC) = 180° − 32° − 50° = 98°.",
        "**Yükseklik:** köşeden karşı kenara (gerekirse uzantısına) inen **dikme**dir, kenarla 90° yapar.",
        "**İkizkenar üçgende** tepeden tabana inen doğru parçası aynı anda yükseklik, kenarortay ve açıortaydır: tabanı ve tepe açısını ikiye böler, tabanla 90° yapar. Taban açıları eşittir.",
        "**Eşkenar üçgende** bu özellik her köşe için geçerlidir; bütün açılar 60°'dir. Yükseklik tabanı a/2 + a/2 böler; Pisagorla bulunur (kenar 10 ise 5√{3}).",
        "**Alan** = taban × yükseklik ÷ 2. Alan iki yoldan yazılarak bilinmeyen yükseklik bulunur: dik kenarları 9, 12, hipotenüsü 15 ise 9 · 12 = 15 · h, h = 7,2. İkizkenarda önce yüksekliği Pisagorla bul."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Çizgi</th><th>Nereye</th><th>Özelliği</th></tr><tr><td>Kenarortay</td><td>Orta noktaya</td><td>Kenarı ikiye böler</td></tr><tr><td>Açıortay</td><td>Karşı kenara</td><td>Açıyı iki eşit parçaya böler</td></tr><tr><td>Yükseklik</td><td>Karşı kenara dik</td><td>90° yapar</td></tr></table>",
      "dikkat": [
        "**Kenarortay ile yüksekliği karıştırmak.** Kenarortay orta noktaya gider (uzunluk eşitliği), yükseklik dik iner (90°). İkisi yalnızca ikizkenarda tepeden, eşkenarda her köşeden aynı çizgi olur.",
        "**Parçayı bütün kenar sanmak.** |BD| = |DC| = 9 ise taban 18'dir."
      ]
    },
    {
      "baslik": "Üçgen eşitsizliği",
      "maddeler": [
        "Her kenar, diğer ikisinin **toplamından küçük**, **farkından büyüktür:** | b − c | < a < b + c. Kenarlar 3 ve 10 ise 7 < x < 13. **Sınırlar dahil değildir:** x = 7 ya da 13 olursa çubuklar düz bir doğruya yatar, üçgen oluşmaz.",
        "Tam sayı değerlerini say: 8, 9, 10, 11, 12 → **5 değer** (üst sınır − alt sınır − 1). Çevre sorusunda en küçük ve en büyük değer çevrenin sınırlarını verir.",
        "**İkizkenarda** verilen iki uzunluk için iki durumu da dene. 3 ve 8 için 3, 3, 8 olmaz (3 + 3 < 8); 8, 8, 3 olur, çevre 19.",
        "**İfadeli kenar:** kenarlar 5, 9 ve (2x − 1) ise 4 < 2x − 1 < 14 yazılıp x çözülür.",
        "**Çevre verilmişse** en uzun kenar çevrenin yarısından küçük olmalıdır.",
        "**Ek koşul** ('çevre çift', 'çevre 5'in katı'): önce eşitsizlik aralığını yaz, sonra koşulu sağlamayanları ele. Kenarlar 4 ve 7, çevre çift ise x = 4, …, 10 içinde x tek olmalı: 5, 7, 9.",
        "**Üç çıta:** en küçük ikisinin toplamı en büyükten büyük olmalı; 6, 9, 15 olmaz (6 + 9 = 15). **Dörtgenin köşegeni** onu iki üçgene ayırır; iki aralığı ayrı yaz, ortak kısmı al."
      ],
      "dikkat": [
        "**Sınırı dahil etmek.** Fark ya da toplama eşit uzunluk üçgen vermez; 7 < x < 13'te 7 ve 13 yoktur.",
        "**Yalnızca toplamı kontrol etmek.** Farkı da düşün: 3, 10 ve 5 için 3 + 5 < 10 olduğundan olmaz.",
        "**İki koşuldan birini atlamak.** Birden fazla koşul varsa hepsini uygula; ortak aralık cevaptır."
      ]
    },
    {
      "baslik": "Kenar ve açı ilişkisi",
      "maddeler": [
        "**Büyük kenarın karşısında büyük açı**, küçük kenarın karşısında küçük açı bulunur; sıralamalar aynı yöndedir. **Eşit kenarların karşısında eşit açılar** vardır.",
        "**Kenarı karşısındaki açıyla eşle:** [AB] kenarının karşısında C, [BC]'nin karşısında A, [CA]'nın karşısında B açısı vardır.",
        "Açılar x'li verilirse önce 180° toplamıyla x'i bul, sonra sırala (5x + 4x + 3x = 180, x = 15).",
        "**Ortak kenarlı iki üçgen:** her üçgende kenarları ayrı sırala, ortak kenarı köprü yap. Doğru üzerindeki komşu açıların toplamı 180°'dir.",
        "**Kenar sırası verilip açı sayılırsa:** m(A) = 80° ve |AB| < |AC| < |BC| ise m(C) < m(B) < m(A). B + C = 100° ve B > C olduğundan 50° < m(B) < 80°."
      ],
      "dikkat": [
        "**Kenarı yanındaki açıyla eşlemek.** |AB| en uzunsa en büyük açı A ya da B değil, karşısındaki C'dir.",
        "**Sıralamayı ters yazmak.** Büyük açı büyük kenarın karşısındadır."
      ]
    },
    {
      "baslik": "Hangi bilgilerle üçgen çizilir?",
      "maddeler": [
        "Yeterli üç bilgi türü: **üç kenar**, **iki kenar ve aralarındaki açı**, **bir kenar ve ona komşu iki açı**.",
        "**Üç kenar:** bir kenarı çiz, uçlardan diğer iki uzunlukta pergelle yay çiz; yayların kesiştiği nokta üçüncü köşedir. Yaylar kesişmezse eşitsizlik sağlanmıyordur.",
        "**Bir kenar ve iki komşu açı:** açıların toplamı 180°'den küçük olmalıdır; aksi hâlde ışınlar buluşmaz. Üç açı ve bir kenar verilirse üçüncü açı zaten bellidir.",
        "**Yetmeyenler:** üç açı verilirse sonsuz üçgen çizilir (açılar aynı, kenarlar farklı). Bir kenar ve karşısındaki açı gibi eksik bilgilerde ya da açı iki kenarın arasında değilse tek üçgen garantisi yoktur."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Verilen bilgi</th><th>Sonuç</th></tr><tr><td>Üç kenar (eşitsizlik sağlanıyorsa)</td><td>Tek üçgen</td></tr><tr><td>İki kenar + aradaki açı</td><td>Tek üçgen</td></tr><tr><td>Kenar + iki komşu açı (toplam 180°'den küçük)</td><td>Tek üçgen</td></tr><tr><td>İki kenar + aralarında olmayan açı</td><td>Tek üçgen garantisi yok</td></tr><tr><td>Üç açı</td><td>Sonsuz üçgen</td></tr><tr><td>Üç kenar, eşitsizlik sağlanmıyorsa</td><td>Çizilemez</td></tr></table>",
      "dikkat": [
        "**Üç açıyı yeterli saymak.** 50°, 60°, 70° ile açılar aynı kalır ama kenarlar değişebilir; bir uzunluk da gerekir.",
        "**Uzunluğun eşitsizliğini kontrol etmemek.** 3, 4, 9 cm ile çizim yapılamaz (3 + 4 < 9)."
      ]
    },
    {
      "baslik": "Pisagor bağıntısı",
      "maddeler": [
        "**Dik üçgende** dik açıyı oluşturan kenarlar **dik kenar**, dik açının karşısındaki en uzun kenar **hipotenüs**tür. Dik kenarlar a, b, hipotenüs c ise **a² + b² = c²**.",
        "**Hipotenüsü bulmak:** kareleri **topla**, kök al (dik kenarlar 9 ve 40 ise 81 + 1600 = 1681, c = 41). **Dik kenarı bulmak:** hipotenüsün karesinden öbür dik kenarın karesini **çıkar**, kök al (c = 37, a = 12 ise b = 35). Kök tam çıkmazsa √{a} ya da a√{b} biçiminde bırak.",
        "**Pisagor üçlüleri:** 3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29 ve katları (6-8-10, 9-12-15, 15-20-25).",
        "**Dik üçgen mi?** En uzun kenarın karesini öbür ikisinin kareleri toplamıyla karşılaştır. 14² = 196, 7² + 12² = 193; eşit değil, dik değildir.",
        "**Günlük hayat:** merdiven, rampa, halat, direk, kestirme yol dik üçgen kurmanın işaretidir. Kestirmede kısalan yol = dik kenarların toplamı − hipotenüs.",
        "**Dikdörtgenin köşegeni** onu iki dik üçgene ayırır (16 ve 30 için köşegen 34). Köşegen ve bir kenar verilmişse öbür kenar dik kenardır. Kenarı a olan karenin köşegeni a√{2}'dir.",
        "**Ortak dikmeli iki dik üçgen:** dikmenin boyu ortaktır. Tabanı x ve 21 − x diye bölen dikme için 13² − x² = 20² − (21 − x)² yazılır.",
        "**Kayma:** merdiven kayarsa önceki ve sonraki durum için ayrı dik üçgen kur, farkı al. 10 m'lik merdivenin alt ucu 6 m uzaktayken üst ucu 8 m yüksektedir; üst uç 2 m inerse alt uç 8 m uzağa gelir, yani 2 m kayar."
      ],
      "dikkat": [
        "**Hipotenüsü yanlış kenar sanmak.** Hipotenüs hep dik açının karşısındaki en uzun kenardır. Hipotenüs 25 ise 7² + b² = 25² yazılır.",
        "**Karekökü almamak.** 1681 hipotenüsün karesidir; cevap 41.",
        "**Dik kenarı bulurken toplamak.** Hipotenüs verilmişse çıkarırsın.",
        "**Ara sonucu cevap sanmak.** Bulduğun kenar çoğu zaman yolun sonu değildir; soru çevre, alan, fark, süre ya da maliyet isteyebilir."
      ]
    },
    {
      "baslik": "Koordinat düzleminde uzaklık",
      "maddeler": [
        "**Ezberlenecek formül yok;** Pisagor kullanırsın. Yatay fark ve dikey fark dik kenarlar, uzaklık hipotenüstür. A(2, 1) ve B(10, 7) için farklar 8 ve 6; uzaklık 10 birim.",
        "Negatif koordinatlarda farkı dikkatle al: 4 − (−4) = 8. Noktalar aynı yatay ya da dikey doğrudaysa uzaklık doğrudan farktır.",
        "**Ölçeğe bak:** bir birim 20 m ise birim uzaklığını 20 ile çarp. Parçalı rotada her parçayı ayrı hesapla, topla, sonra çevir. Gidiş–dönüşte yol iki katıdır; süre = yol ÷ hız, maliyet = yol × fiyat."
      ],
      "dikkat": [
        "**Farkların toplamını uzaklık sanmak.** 8 + 6 = 14 değil, 10.",
        "**Ölçeği çarpmayı unutmak.** Cevap metre isteniyorsa ölçekle çarp.",
        "**Eğik parçayı kareleri sayarak ölçmek.** Eğik parça kare saymakla değil, Pisagorla hesaplanır."
      ]
    }
  ],
  "lgs": [
    "Merdiven, rampa, kestirme yol, ekran köşegeni, direk ve halat gibi durumlarda Pisagor sorulur. Çeldiriciler toplama-çıkarma karışıklığından ve karekökü almamaktan gelir.",
    "\"Üçüncü kenar kaç farklı tam sayı değeri alır?\", \"olamaz\" ya da \"çevre en çok kaç\" kökleri üçgen eşitsizliğini sorar. Sınırların dahil olmadığını ve ikizkenarda iki ihtimali kontrol et.",
    "Koordinat düzleminde rota ve ölçek verilir; Pisagorla uzaklık bulunur, süre ya da maliyet sorulur. Ölçeği en son çarpmayı unutma.",
    "Üçgen eşitsizliği, kenar–açı sıralaması ve çevre koşulu birleşebilir; her koşuldan bir aralık çıkar, ortak aralığı al."
  ],
  "yokla": [
    {
      "soru": "Dik kenarları 18 ve 24 olan bir dik üçgenin hipotenüsü kaçtır?",
      "cevap": "30. 18-24-30, 3-4-5'in 6 katıdır; ya da 324 + 576 = 900, √{900} = 30."
    },
    {
      "soru": "İki kenarı 8 cm ve 15 cm olan bir üçgenin üçüncü kenarı kaç farklı tam sayı değeri alabilir?",
      "cevap": "15 değer. 7 < x < 23 olur; değerler 8'den 22'ye kadar gider: 23 − 7 − 1 = 15."
    },
    {
      "soru": "Kenarları 9, 40 ve 41 olan üçgen dik üçgen midir?",
      "cevap": "Evet. En uzun kenar 41; 81 + 1600 = 1681 = 41²."
    },
    {
      "soru": "Koordinat düzleminde P(1, 2) ve R(7, 10) arasındaki uzaklık kaç birimdir?",
      "cevap": "10 birim. Yatay fark 6, dikey fark 8; √{36 + 64} = 10."
    },
    {
      "soru": "ABC üçgeninde m(A) = 50° ve m(B) = 60° ise en kısa kenar hangisidir?",
      "cevap": "[BC]. m(C) = 70°; en küçük açı A olduğundan karşısındaki [BC] en kısa kenardır."
    }
  ]
};
