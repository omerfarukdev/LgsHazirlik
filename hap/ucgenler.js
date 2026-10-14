window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["ucgenler"] = {
  "kazanimlar": [
    "M.8.3.1.1",
    "M.8.3.1.2",
    "M.8.3.1.3",
    "M.8.3.1.4",
    "M.8.3.1.5"
  ],
  "giris": "Üçgenler konusunda üçgenin özel çizgilerini, kenarlar arasındaki sınırı, kenar ile açı arasındaki sıralamayı, üçgenin çizilebilirliğini ve en çok sorulan Pisagor bağıntısını öğrenirsin. Sınavda merdiven, rampa, yürüyüş yolu ya da koordinat düzlemi gibi günlük hayat durumlarında bir kenar uzunluğu bulman istenir. Bu özeti okuyunca hangi soruda hangi kuralı kullanacağını bileceksin.",
  "bolumler": [
    {
      "baslik": "Kenarortay, açıortay, yükseklik",
      "maddeler": [
        "**Kenarortay:** bir köşeyi karşı kenarın **orta noktasına** birleştiren doğru parçasıdır. Karşı kenarı iki **eşit** parçaya böler.",
        "**Açıortay:** bir köşedeki açıyı **iki eşit açıya** ayıran doğru parçasıdır. Köşe açısı 80° ise açıortay onu 40° + 40° yapar. Açı toplamıyla birlikte kullanılır: B = 64°, C = 50° olan üçgende B'nin açıortayı [AC]'yi D'de keserse m(BDC) = 180° − 32° − 50° = 98°.",
        "**Yükseklik:** bir köşeden karşı kenara (gerekirse uzantısına) çizilen **dikme**dir. Yükseklik kenarla 90° yapar.",
        "**Dik üçgende** dik açıyı oluşturan iki kenar birbirinin yüksekliğidir; alan = dik kenarların çarpımı ÷ 2.",
        "**İkizkenar üçgende** eş kenarların birleştiği tepe köşesinden tabana inen doğru parçası aynı anda yükseklik, kenarortay ve açıortaydır. Taban ikiye bölünür, tepe açısı ikiye bölünür, tabanla 90° yapar. Taban açıları eşittir: tepe açısı 100° ise her taban açısı (180° − 100°) ÷ 2 = 40°.",
        "**Eşkenar üçgende** bu özellik üç köşe için de geçerlidir: bütün kenarlar eşit, bütün açılar 60°'dir. Kenarı a olan eşkenar üçgende yükseklik tabanı a/2 ve a/2 diye böler; Pisagor ile yükseklik bulunur. Kenarı 8 cm ise yarım taban 4 cm, yükseklik √{64 − 16} = √{48} = 4√{3} cm'dir.",
        "**Kenarortay ve denklem:** kenarortay kenarı ikiye böldüğünden parçalar eşitlenir. |BD| = 3x − 2, |DC| = x + 8 ise 3x − 2 = x + 8, x = 5; |BC| = 13 + 13 = 26.",
        "**Alan ve yükseklik:** üçgenin alanı = taban × yükseklik ÷ 2'dir. Alan iki yoldan yazılırsa bilinmeyen yükseklik bulunur: dik kenarları 15 ve 20, hipotenüsü 25 olan üçgende 15 · 20 = 25 · h, h = 12 cm. İkizkenar üçgende kenarlar verilmişse yüksekliği Pisagorla bul: 25, 25, 14 cm kenarlı üçgende yarım taban 7, yükseklik √{625 − 49} = 24, alan 14 · 24 ÷ 2 = 168 cm²."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Çizgi</th><th>Nereye</th><th>Özelliği</th></tr><tr><td>Kenarortay</td><td>Karşı kenarın orta noktasına</td><td>Kenarı iki eşit parçaya böler</td></tr><tr><td>Açıortay</td><td>Karşı kenara</td><td>Açıyı iki eşit parçaya böler</td></tr><tr><td>Yükseklik</td><td>Karşı kenara dik</td><td>90° yapar</td></tr></table>",
      "dikkat": [
        "**Kenarortay ile yüksekliği karıştırmak.** Kenarortay orta noktaya gider (uzunluk eşitliği), yükseklik dik iner (90°). Bir üçgende ikisi yalnızca ikizkenarda tepeden, eşkenarda her köşeden aynı çizgi olur.",
        "**Kenarortayın böldüğü parçayı bütün kenar sanmak.** |BD| = |DC| = 9 ise taban 18'dir, 9 değil."
      ]
    },
    {
      "baslik": "Üçgen eşitsizliği",
      "maddeler": [
        "Üçgenin her kenarı, diğer iki kenarın **toplamından küçük**, **farkından büyüktür:** | b − c | < a < b + c.",
        "İki kenar 3 cm ve 10 cm ise üçüncü kenar x için 7 < x < 13 olur. **Sınırlar dahil değildir:** x = 7 ya da x = 13 olursa çubuklar düz bir doğru üzerine yatar, üçgen oluşmaz.",
        "Tam sayı değerleri sayarken: 8, 9, 10, 11, 12 → **5 değer**. Kısayol: üst sınır − alt sınır − 1 = 13 − 7 − 1 = 5.",
        "**Çevre soruları:** üçüncü kenarın en büyük ve en küçük tam sayı değerleri çevrenin sınırlarını verir. 3 ve 10 için çevre en az 3 + 10 + 8 = 21, en çok 3 + 10 + 12 = 25 olur.",
        "**İkizkenar üçgende** verilen iki uzunluk için iki durumu da dene. 3 ve 8 verilmişse: 3, 3, 8 olmaz (3 + 3 < 8); 8, 8, 3 olur, çevre 19.",
        "**İfadeli kenar:** üçüncü kenar (2x − 1) gibi verilmişse eşitsizliği bu ifadeye uygula, sonra x'i çöz. Kenarlar 5, 9 ve (2x − 1) ise 4 < 2x − 1 < 14, yani 2,5 < x < 7,5; tam sayı x değerleri 3, 4, 5, 6, 7 → 5 değer.",
        "**Çevre verilmişse en uzun kenar:** en uzun kenar çevrenin yarısından küçük olmalıdır. Çevre 24 ise en uzun kenar en çok 11'dir (örneğin 11, 7, 6).",
        "**Ek koşul:** 'çevre çift', 'çevre 5'in katı' gibi koşulda önce üçgen eşitsizliğinin aralığını yaz, sonra koşulu sağlamayanları ele. Kenarlar 4 ve 7 ise 3 < x < 11, x = 4, …, 10; çevre 11 + x çift olsun diye x tek: 5, 7, 9 → 3 değer.",
        "**Üç çıta, iki üçgen:** üç uzunlukla üçgen kurulabilmesi için en küçük ikisinin toplamı en büyüğünden büyük olmalıdır; 6, 9, 15 olmaz (6 + 9 = 15). Dörtgenin köşegeni onu iki üçgene ayırır; iki üçgenin aralığını ayrı yaz, ortak kısmı al: 7 < x < 15 ve 9 < x < 20 ise 9 < x < 15."
      ],
      "dikkat": [
        "**Sınırı dahil etmek.** Fark ya da toplama eşit olan uzunluk üçgen vermez; 7 < x < 13'te 7 ve 13 yoktur.",
        "**Yalnızca toplamı kontrol etmek.** Alt sınır olan farkı da düşün: 3, 10 ve 5 için 3 + 5 < 10 olduğundan olmaz.",
        "**İki koşuldan birini atlamak.** İki üçgen ya da kenar sırası ile eşitsizlik birlikte verilmişse ikisini de uygula; ortak aralık cevaptır."
      ]
    },
    {
      "baslik": "Kenar ve açı ilişkisi",
      "maddeler": [
        "Bir üçgende **büyük kenarın karşısında büyük açı**, küçük kenarın karşısında küçük açı bulunur. Kenar uzunluklarının sırası, karşılarındaki açıların sırasıyla aynıdır.",
        "**Eşit kenarların karşısında eşit açılar** vardır (ikizkenarda taban açıları). Eşkenarda üç açı da 60°'dir.",
        "Açıları biliyorsan sıralama tersinden yürür: **en büyük açının karşısı en uzun kenar**dır. Dik üçgende en büyük açı 90° olduğundan hipotenüs en uzun kenardır.",
        "**Kenar adı ile karşısındaki açıyı eşle:** [AB] kenarının karşısında C açısı, [BC] kenarının karşısında A açısı, [CA] kenarının karşısında B açısı bulunur.",
        "Açılar x'li verilirse önce 180° toplamıyla x'i bul, açıları sırala, sonra kenarlara geç. m(A) = 5x, m(B) = 4x, m(C) = 3x ise 12x = 180, x = 15; açılar 75°, 60°, 45° ve en uzun kenar [BC]'dir.",
        "**Ortak kenarlı iki üçgen:** her üçgende kenarları ayrı sırala, ortak kenarı köprü yap. Bir doğru üzerindeki iki komşu açı toplamı 180°'dir; ikinci üçgenin açısını bununla bul.",
        "**Kenar sırası verilip açı sayılırsa:** m(A) = 80° ve |AB| < |AC| < |BC| ise m(C) < m(B) < m(A) olur. B + C = 100° ve B > C olduğundan 50° < m(B) < 80°; tam sayı değerleri sayılır."
      ],
      "dikkat": [
        "**Kenarı yanındaki açıyla eşlemek.** |AB| en uzunsa en büyük açı A ya da B değil, onun karşısındaki C'dir.",
        "**Sıralamayı ters yazmak.** Büyük açı büyük kenarın karşısındadır; sıralama aynı yönde gider."
      ]
    },
    {
      "baslik": "Hangi bilgilerle üçgen çizilir?",
      "maddeler": [
        "Bu üç bilgi türü yeter: **üç kenar**, **iki kenar ve aralarındaki açı**, **bir kenar ve ona komşu iki açı**.",
        "**Üç kenar:** önce bir kenarı çiz; uçlardan diğer iki kenar uzunluğunda pergelle yay çiz; yayların kesiştiği nokta üçüncü köşedir. Yaylar kesişmiyorsa üçgen eşitsizliği sağlanmıyordur.",
        "**Bir kenar ve iki komşu açı:** kenarı çiz, iki ucuna iletkiyle açıları çiz. İki açının toplamı 180°'den küçük olmalıdır; toplam 180° ya da fazlaysa ışınlar buluşmaz.",
        "**İki kenar ve aradaki açı:** açıyı çiz, kollarına kenar uzunluklarını işaretle, uçları birleştir.",
        "**Üç açı ve bir kenar** verilirse üçüncü açı zaten 180° ile bulunur; bu, bir kenar ve komşu iki açı durumuna döner ve tek üçgen çizilir.",
        "**Yetmeyen bilgiler:** üç açı verilirse sonsuz sayıda üçgen çizilir: açılar aynı, kenar uzunlukları farklı olur. Bir kenar ve karşısındaki açı gibi eksik bilgilerde birden çok üçgen çıkabilir. İki kenar ve açı verilmiş ama açı bu kenarların arasında değilse de tek üçgen garantisi yoktur."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Verilen bilgi</th><th>Sonuç</th></tr><tr><td>Üç kenar (eşitsizlik sağlanıyorsa)</td><td>Tek üçgen</td></tr><tr><td>İki kenar + aradaki açı</td><td>Tek üçgen</td></tr><tr><td>Bir kenar + iki komşu açı (toplamları 180°'den küçük)</td><td>Tek üçgen</td></tr><tr><td>İki kenar + aralarında olmayan açı</td><td>Tek üçgen garantisi yok</td></tr><tr><td>Üç açı</td><td>Sonsuz üçgen</td></tr><tr><td>Üç kenar, eşitsizlik sağlanmıyorsa</td><td>Çizilemez</td></tr></table>",
      "dikkat": [
        "**Üç açıyı yeterli saymak.** 50°, 60°, 70° verilince açılar aynı kalır ama kenarlar değişebilir; bir uzunluk da gerekir.",
        "**Uzunluğun eşitsizliğini kontrol etmemek.** 3, 4, 9 cm ile çizim yapılamaz (3 + 4 < 9), yaylar kesişmez."
      ]
    },
    {
      "baslik": "Pisagor bağıntısı",
      "maddeler": [
        "**Dik üçgende** dik açıyı oluşturan kenarlar **dik kenar**, dik açının karşısındaki en uzun kenar **hipotenüs**tür. Dik kenarlar a ile b, hipotenüs c ise **a² + b² = c²**.",
        "**Hipotenüsü bulmak:** kareleri **topla**, kökünü al. 9 ve 40 dik kenar ise 81 + 1600 = 1681, c = 41. **Dik kenarı bulmak:** hipotenüsün karesinden öbür dik kenarın karesini **çıkar**, kökünü al. c = 37, a = 12 ise b = √{1369 − 144} = 35.",
        "**Pisagor üçlüleri**, kökü tam çıkan sayılardır: 3-4-5, 5-12-13, 8-15-17, 7-24-25 ve katları (6-8-10, 9-12-15, 15-20-25); 20-21-29 da bir üçlüdür. Sayıları tanıyınca hesap yapmadan sonuca gidersin.",
        "Kök tam çıkmıyorsa sonuç √{a} ya da a√{b} biçiminde bırakılır: dik kenarlar 4 ve 6 ise 16 + 36 = 52, c = √{52} = 2√{13}.",
        "**Dik üçgen mi?** Üç kenar verilmişse en uzun kenarın karesini öbür ikisinin kareleri toplamıyla karşılaştır. 14² = 196 ve 7² + 12² = 49 + 144 = 193; eşit değil, dik üçgen değildir. Eşit olsaydı en uzun kenarın karşısındaki açı 90° olurdu.",
        "**Günlük hayat:** duvara yaslanan merdiven, rampa, dikdörtgenin köşegeni, iki yürüyüş yolunun kestirmesi, ip ya da halat uzunluğu dik üçgen kurmanın işaretidir. Kestirme sorusunda kısalan yol = dik kenarların toplamı − hipotenüs: 12 ve 16 m dik kenarsa 28 − 20 = 8 m. Şekildeki dik açıyı bul, hipotenüsü belirle, sonra bilinmeyeni hesapla.",
        "**Dikdörtgen ve karenin köşegeni** onu iki dik üçgene ayırır. Kenarları 16 ve 30 olan dikdörtgende köşegen √{256 + 900} = 34'tür. Bir kenar ve köşegen verilmişse öbür kenar dik kenar olarak bulunur: köşegen 25, bir kenar 20 ise öbür kenar 15. Kare ise kenarı a ise köşegeni a√{2}'dir.",
        "**Ortak dikmeli iki dik üçgen:** üçgenin bir kenarına inen dikme onu iki dik üçgene ayırır, dikmenin boyu ortaktır. Kenarları 13, 20, 21 olan üçgende 21'lik kenara inen dikme kenarı x ve 21 − x diye böler: 13² − x² = 20² − (21 − x)². Buradan x = 5, dikme √{169 − 25} = 12 çıkar.",
        "**Kayma ve değişen durum:** merdiven kayarsa önceki ve sonraki durum için ayrı dik üçgen kur, farkı al. 10 m'lik merdivenin alt ucu duvardan 6 m uzaktayken üst ucu 8 m yüksektedir; üst uç 2 m inerse yükseklik 6, alt uç uzaklığı 8 m olur; alt uç 8 − 6 = 2 m uzaklaşır."
      ],
      "dikkat": [
        "**Hipotenüsü yanlış kenar sanmak.** Hipotenüs hep dik açının karşısındaki ve en uzun kenardır. Verilen 25 hipotenüsse 7² + b² = 25² yazılır, 7² + 25² değil.",
        "**Karekökü almayı unutmak.** 81 + 1600 = 1681 hipotenüs değil, hipotenüsün karesidir; cevap 41.",
        "**Dik kenarı bulurken toplamak.** Hipotenüs verilmişse kareleri çıkarırsın.",
        "**Ara sonucu cevap sanmak.** Pisagorla bulduğun kenar çoğu zaman yolun sonu değildir; soru çevre, alan, fark, süre ya da maliyet isteyebilir. Soru kökünü bir daha oku; köşegen çevrenin parçası değildir."
      ]
    },
    {
      "baslik": "Koordinat düzleminde uzaklık",
      "maddeler": [
        "**Ezberlenecek formül yok;** Pisagor kullanırsın. İki noktadan yatay ve dikey doğrular çizip dik üçgen kur: yatay fark bir dik kenar, dikey fark öbür dik kenardır; uzaklık hipotenüstür.",
        "A(2, 1) ve B(10, 7) için yatay fark 10 − 2 = 8, dikey fark 7 − 1 = 6; uzaklık √{64 + 36} = 10 birimdir.",
        "Negatif koordinatlarda farkı dikkatle al: (−4, 2) ile (4, −4) arasında yatay fark 4 − (−4) = 8, dikey fark 2 − (−4) = 6; uzaklık 10.",
        "Noktalar aynı yatay ya da dikey doğrudaysa uzaklık doğrudan farktır, Pisagor gerekmez.",
        "**Ölçeğe bak:** eksendeki bir birim 20 m ise bulunan birim uzaklığı 20 ile çarp. Birden fazla parçalı rotada her parçayı ayrı hesapla, topla, sonra çevir. Gidiş–dönüşte yol iki katıdır; hız verilirse süre = yol ÷ hız, birim fiyat verilirse maliyet = yol × fiyat."
      ],
      "dikkat": [
        "**Yatay ve dikey farkın toplamını uzaklık sanmak.** 8 + 6 = 14 değil, √{64 + 36} = 10.",
        "**Ölçeği çarpmayı unutmak.** Cevap birim değil metre isteniyorsa ölçekle çarp.",
        "**Eğik parçayı dik kenarların toplamı almak.** Koordinat kâğıdında eğik yol yatay + dikey kare sayılarının toplamı değildir; eğik parça Pisagorla hesaplanır."
      ]
    }
  ],
  "lgs": [
    "Merdiven, rampa, kestirme yol, ekran köşegeni, direk ve halat gibi günlük hayat durumlarında Pisagor sorulur. Çeldiriciler toplama-çıkarma karışıklığından, karekökü almamaktan ve ara sonucu cevap sanmaktan gelir. En çok bu tür çıkar.",
    "\"Üçüncü kenar kaç farklı tam sayı değeri alır?\", \"olamaz\" ya da \"çevre en çok kaç\" kökleri üçgen eşitsizliğini sorar. Sınır değerlerin dahil olmadığını ve ikizkenar durumunda iki ihtimali kontrol et.",
    "Koordinat düzleminde rota verilir, ölçek bir birim kaç metre olarak yazılır; Pisagor ile uzaklık bulunur, süre ya da maliyet sorulur. Ölçeği en son çarpmayı unutma.",
    "Üçgen eşitsizliği, kenar–açı sıralaması ve çevre koşulu birleşir ('kaç farklı değer'); her koşuldan bir aralık çıkar, ortak aralığı al."
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
