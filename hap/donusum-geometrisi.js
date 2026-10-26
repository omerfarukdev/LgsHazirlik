window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["donusum-geometrisi"] = {
  "kazanimlar": [
    "M.8.3.2.1",
    "M.8.3.2.2",
    "M.8.3.2.3"
  ],
  "giris": "Bu konuda bir şekli kaydırmayı (öteleme) ve aynada görmeyi (yansıma) öğrenirsin. Sınavda görüntüyü ya da yeni koordinatı bulman, çini ve kilim desenlerinde hangi dönüşümün kullanıldığını söylemen istenir. Özeti okuyunca her dönüşümün kuralını ve sırasını bileceksin.",
  "bolumler": [
    {
      "baslik": "Öteleme: şekli kaydırmak",
      "maddeler": [
        "**Öteleme**, şeklin bütün noktalarını **aynı yönde** ve **aynı miktarda** kaydırmaktır. Şekil dönmez, ters çevrilmez, büyümez ve küçülmez.",
        "Öteleme iki bilgiyle verilir: yatayda kaç birim (sağa ya da sola), dikeyde kaç birim (yukarı ya da aşağı). Örnek: \"4 birim sola, 3 birim yukarı\".",
        "**Şekil ile görüntüsü eştir.** Kenar uzunlukları, açılar, köşe sayısı, çevre ve alan değişmez. Şeklin her noktasını görüntüsüne bağlayan parçalar birbirine **paralel ve eşit uzunluktadır.**",
        "**Kural:** (x, y) noktası a birim sağa, b birim yukarı ötelenirse (x + a, y + b) olur. Sola ya da aşağı gitmek, a ya da b'nin eksi olması demektir.",
        "**Ötelemeyi bulmak:** bir noktanın asıl ve görüntü koordinatları verilirse yeni koordinattan eskisini çıkar; sonucu bütün noktalara uygula. Görüntüden asıl noktaya dönmek için ötelemeyi **ters yönde** uygula."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Hareket</th><th>Koordinata etkisi</th></tr><tr><td>m birim sağa</td><td>x → x + m</td></tr><tr><td>m birim sola</td><td>x → x − m</td></tr><tr><td>n birim yukarı</td><td>y → y + n</td></tr><tr><td>n birim aşağı</td><td>y → y − n</td></tr></table>",
      "ornekler": [
        "K(−2, 6) noktası 5 birim sağa ve 7 birim aşağı ötelenirse K′(−2 + 5, 6 − 7) = K′(3, −1) olur.",
        "M(4, 3) noktası M′(1, 8) noktasına gelmişse: x için 1 − 4 = −3, y için 8 − 3 = +5. Öteleme 3 birim sola, 5 birim yukarıdır."
      ],
      "dikkat": [
        "**Yönü ters almak.** \"Sola\" denince x'e eklemek yanlıştır; sol, x'in azalması demektir. Önce yönü, sonra işareti yaz.",
        "**Miktarları yer değiştirmek.** 2 birim sağa, 5 birim yukarı ile 5 birim sağa, 2 birim yukarı farklı yerlere götürür. Yatay hep x'e, dikey hep y'ye yazılır."
      ]
    },
    {
      "baslik": "Yansıma: aynadaki görüntü",
      "maddeler": [
        "**Yansıma**, bir şeklin **simetri doğrusuna** (ayna doğrusu) göre karşı taraftaki görüntüsünü almaktır. Şekil ile görüntüsü **eştir;** ama yön değişir, şekil ters çevrilmiş gibi görünür.",
        "**İki kural:** bir noktayı görüntüsüne bağlayan doğru parçası simetri doğrusuna **diktir** ve doğru bu parçayı **tam ortadan** keser. Nokta ile görüntüsü doğruya **eşit uzaklıktadır,** ayrı taraflardadır.",
        "Nokta ile görüntüsü arasındaki uzaklık, noktanın doğruya uzaklığının **iki katıdır.** Doğruya 3 birim uzaktaki nokta ile görüntüsü arasında 6 birim vardır.",
        "**Doğru üzerindeki nokta yerinde kalır;** uzaklığı 0'dır. Şeklin bir kenarı simetri doğrusu üzerindeyse o kenar görüntüde de aynı yerdedir.",
        "Göl yüzeyi ya da ayna da simetri doğrusudur: tepe yüzeyden 5 m yüksekteyse görüntüdeki tepe 5 m altındadır; ikisi arası 10 m'dir.",
        "Yatay ve dikey doğrulara göre yansıma yapılır: kareli kâğıtta çizili doğrular, koordinat düzleminde eksenler ya da x = a, y = b doğruları."
      ],
      "dikkat": [
        "**Görüntüyü aynı tarafa koymak.** Yansımada görüntü doğrunun öbür tarafındadır; aynı tarafta kalıyorsa bu öteleme olmuştur.",
        "**Uzaklıkları eşit saymamak.** Doğruya 1 birim uzaktaki noktanın görüntüsü öbür yanda, yine 1 birim uzaktadır; ikisi arası 2 birimdir."
      ]
    },
    {
      "baslik": "Koordinat düzleminde yansıma",
      "maddeler": [
        "**x eksenine göre yansıma:** (x, y) → (x, −y). Ordinatın işareti değişir, apsis aynı kalır.",
        "**y eksenine göre yansıma:** (x, y) → (−x, y). Apsisin işareti değişir, ordinat aynı kalır.",
        "**Hangi koordinat değişir?** Doğruya dik yöndeki koordinat. x ekseni yataydır, nokta dikey yönde yer değiştirir: y değişir. y ekseni dikeydir, nokta yatay yönde yer değiştirir: x değişir.",
        "**Eksen dışındaki doğrular:** x = a (dikey) doğrusuna göre yansımada ordinat aynı kalır, apsis doğrunun öbür yanına geçer. y = b (yatay) doğrusuna göre apsis aynı kalır, ordinat öbür yana geçer. Formül yerine **uzaklık say:** noktanın doğruya uzaklığını ölç, karşı yana aynısını ekle.",
        "**Doğruyu bulmak:** nokta ile görüntüsü aynı yükseklikteyse doğru dikeydir ve apsislerin tam ortasından geçer. Aynı dikey hizadaysa doğru yataydır ve ordinatların ortasından geçer.",
        "**Bilinmeyenli koordinat:** görüntünün kuralını yaz, karşılık gelen koordinatları eşitle. Hangisinin aynı kaldığını, hangisinin işaret değiştirdiğini önce belirle."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Yansıma doğrusu</th><th>(x, y) noktasının görüntüsü</th></tr><tr><td>x ekseni</td><td>(x, −y)</td></tr><tr><td>y ekseni</td><td>(−x, y)</td></tr><tr><td>x = a doğrusu</td><td>apsis a'nın öbür yanına geçer, ordinat aynı</td></tr><tr><td>y = b doğrusu</td><td>ordinat b'nin öbür yanına geçer, apsis aynı</td></tr></table>",
      "ornekler": [
        "**x = 3 doğrusuna göre:** S(7, 4) noktası doğrunun 4 birim sağındadır. Görüntü 4 birim solundadır: S′(3 − 4, 4) = S′(−1, 4).",
        "**y = −2 doğrusuna göre:** T(1, −5) noktası doğrunun 3 birim altındadır. Görüntü 3 birim üstündedir: T′(1, −2 + 3) = T′(1, 1).",
        "**Doğruyu bulma:** P(−3, 2) ile P′(7, 2) aynı yüksekliktedir; doğru dikeydir ve x = (−3 + 7) : 2 = 2 doğrusudur.",
        "**Bilinmeyen:** (a + 2, 5) noktasının y eksenine göre görüntüsü (−7, b) ise ordinat aynıdır: b = 5. Apsis işaret değiştirir: a + 2 = 7, a = 5."
      ],
      "dikkat": [
        "**İşareti yanlış koordinata uygulamak.** x eksenine göre yansımada y'nin, y eksenine göre yansımada x'in işareti değişir. \"Hangi eksene göre?\" sorusunu önce yanıtla.",
        "**Çizgileri saymak.** Uzaklık sayarken aralıkları say: 2'den 5'e 3 birim vardır, 4 değil."
      ]
    },
    {
      "baslik": "Ardışık dönüşümler",
      "maddeler": [
        "Bir şekle **en çok iki** dönüşüm art arda uygulanır: iki öteleme, iki yansıma ya da bir öteleme ile bir yansıma. Bu konuda yalnızca öteleme ve yansıma vardır.",
        "Dönüşümleri **verilen sırayla** uygula; her adımın sonucu sonraki adımın başlangıcıdır. Ara noktayı yazmak hata yapmanı önler.",
        "**İki öteleme** tek bir ötelemeye eşdeğerdir: yatay miktarları, dikey miktarları ayrı ayrı topla (sağ ve yukarı artı, sol ve aşağı eksi sayılır).",
        "**Öteleme ile yansıma karışırsa sıra önemlidir.** Önce ötele sonra yansıt ile önce yansıt sonra ötele çoğu zaman farklı noktalara götürür. Soruda sıra \"önce… ardından…\" diye açıkça yazılır.",
        "**Ardışık iki yansıma:** birbirine paralel iki doğruya göre art arda yansıyan şekil, tek bir öteleme yapmış gibi görünür. Kayma miktarı iki doğru arasındaki uzaklığın **iki katıdır** (doğrular 5 birim arayla ise kayma 10 birimdir).",
        "**Önce x eksenine, sonra y eksenine göre yansıma:** (x, y) → (x, −y) → (−x, −y). Eksenlerin sırası değişse de aynı nokta bulunur.",
        "**Geriye doğru çözüm:** son nokta verilip ilk nokta ya da işlem isteniyorsa sondan başa git; işlemleri ters sırayla geri al (ötelemeyi ters yönde, yansımayı aynı doğruya göre).",
        "**Seçimli hamleler:** \"şunu ya da bunu yapar\" denirse bütün yolları yaz, aynı noktaya varanları **bir kez** say."
      ],
      "dikkat": [
        "**Sırayı karıştırmak.** M(4, −3) noktasına \"önce 6 birim sola öteleme, sonra y eksenine göre yansıma\" uygulanırsa (−2, −3) ve sonra (2, −3) bulunur. Sıra ters olursa (−4, −3) ve sonra (−10, −3) olur."
      ]
    },
    {
      "baslik": "Desen ve motiflerde dönüşüm",
      "maddeler": [
        "Çini, seramik, kilim ve dokuma desenleri bir motifin tekrar tekrar kaydırılması ya da aynalanmasıyla oluşur. Soru, iki motif arasındaki dönüşümü sorar.",
        "**Öteleme mi, yansıma mı?** Motifi bir köşesinden izle. İki motif **aynı yöne** bakıyorsa dönüşüm ötelemedir. Biri diğerinin **ters çevrilmiş** (sağ-sol ya da alt-üst değişmiş) hâliyse yansımadır.",
        "**Yön bildiren bir parça izle.** L ya da F gibi harf biçimli motiflerde ayak, sap ya da bayrak kısmı yönü gösterir. Daire gibi iki yanı eş motiflerde ikisi ayırt edilemez; sorularda yönlü motifler verilir.",
        "**Sağ-sol aynalanma dikey doğruya, alt-üst aynalanma yatay doğruya göre yansımadır.** Simetri doğrusu iki motifin tam ortasından geçer. Motif hem sağ-sol hem alt-üst ters dönmüşse **iki yansıma** gerekir: biri dikey, biri yatay doğruya göre.",
        "**Dizi desenlerde:** motifler eşit aralıkla kayıyorsa her adım aynı ötelemedir. Her adım yansımaysa motifler düz-ters-düz-ters sıralanır; 1. ile 3. motif aynı yöne bakar, yani aralarında bir öteleme vardır. Böyle bir desen, 2 motiflik bir grubun kaydırılmasıdır.",
        "**Uzaklık:** n. motif 1. motiften (n − 1) adım uzaktadır. Adım 4 cm ise uzaklık (n − 1) · 4 cm'dir."
      ]
    },
    {
      "baslik": "Ölçü, alan ve uzaklık soruları",
      "maddeler": [
        "Öteleme ve yansıma **uzunluğu, açıyı, çevreyi ve alanı değiştirmez.** m(B) = 110° olan bir köşenin görüntüsü de 110°'dir.",
        "**Öteleme:** her köşe ile görüntüsü arasındaki uzaklık aynıdır. Biri 6 cm ise hepsi 6 cm'dir.",
        "**Şekil ile yansımasını birleştirme:** simetri doğrusu bir kenar üzerindeyse iki şekil o kenarı paylaşır. Birleşik şeklin alanı, bir şeklin alanının iki katıdır; ortak kenar içeride kalır, dış çevreye girmez.",
        "**Ortak bölge:** dikdörtgen yatayda a, dikeyde b birim ötelenirse asıl ile görüntünün ortak bölgesi yine dikdörtgendir; eni (en − a), boyu (boy − b) olur. Boyanan toplam alan = iki alanın toplamı − ortak bölge.",
        "**Uzaklık:** aynı yatay ya da dikey hizadaki iki nokta arası, farklı olan koordinatların farkıdır: (−3, 2) ile (4, 2) arası 7 birimdir. Hem yatay hem dikey fark varsa bu iki fark dik kenar olur, uzaklık hipotenüstür (**Pisagor**).",
        "**Sınır koşulu:** \"koordinatlar pozitif olmalı, eksenler üzerinde olmamalı\" denirse sıfır olamaz; en küçük koordinat 1 olacak biçimde kaydır.",
        "**Bölgeler:** eksenler düzlemi dört bölgeye ayırır. **1. bölge:** x > 0, y > 0. **2. bölge:** x < 0, y > 0. **3. bölge:** x < 0, y < 0. **4. bölge:** x > 0, y < 0. Eksenler üzerindeki noktalar hiçbir bölgede sayılmaz. \"En az / en çok tam sayı\" sorularında önce eşitsizliği yaz, sonra sınırı dışarıda bırak (x > 0 ise en küçük tam sayı 1'dir).",
        "**Orta nokta:** iki noktanın orta noktasının apsisi, apsislerin toplamının yarısıdır; ordinatı da ordinatların toplamının yarısıdır. Öteleme ve yansıma orta noktayı da aynı kuralla taşır: önce uçları dönüştürüp sonra orta noktayı bulabilir ya da orta noktayı bulup dönüştürebilirsin.",
        "**Yansımayla en kısa yol:** bir doğru üzerindeki P noktasından geçerek iki noktaya giden yolun en kısası için noktalardan birinin doğruya göre yansımasını al. Yansıma uzunluğu koruduğundan |AP| = |A′P| olur; |A′P| + |PB| toplamı en az |A′B| kadardır (doğru parçası en kısa yoldur). A ve B doğrunun aynı yanındaysa bu yöntem işe yarar.",
        "**Köşegen ve paralelkenar:** dikdörtgenin köşegeni, kenarları dik kenar kabul eden Pisagor hipotenüsüdür. Öteleme sonunda köşeleri görüntülerine bağlayan parçalar paralel ve eşit olduğundan şekil, görüntüsü ve bu parçalar paralelkenar oluşturur; paralelkenarın alanı taban × yüksekliktir."
      ],
      "ornekler": [
        "**Alan:** Bir dik üçgenin dik kenarları 7 ve 10 cm'dir ve 10 cm'lik kenarı simetri doğrusu üzerindedir. Üçgenle yansıması birleşince tabanı 2 · 7 = 14 cm, yüksekliği 10 cm olan üçgen oluşur. Alan = [[14 · 10|2]] = 70 cm². Sağlama: 2 · [[7 · 10|2]] = 70.",
        "**Ortak bölge:** 7 × 5 birimlik dikdörtgen 2 birim sağa, 1 birim yukarı ötelenir. Ortak bölge (7 − 2) · (5 − 1) = 20 birimkaredir; boyanan alan 35 + 35 − 20 = 50 birimkaredir.",
        "**Orta nokta:** A(−4, 9) ve B(12, −3) noktalarının orta noktası ((−4 + 12) : 2, (9 + (−3)) : 2) = (4, 3) olur.",
        "**En kısa yol:** Kıyı x ekseni, evler R(0, 1) ve S(6, 7) ise R′(0, −1) alınır. |R′S| için yatay fark 6, dikey fark 8; en kısa yol 10 birimdir.",
        "**Uzaklık:** (−1, 2) ile (8, 14) arasında yatay fark 9, dikey fark 12'dir; uzaklık 15 birimdir (9² + 12² = 15²)."
      ],
      "dikkat": [
        "**Yalnız bir farkı almak.** Hem yatay hem dikey kayma varsa uzaklık ikisinin toplamı değil, Pisagor sonucudur."
      ]
    }
  ],
  "lgs": [
    "Koordinat düzleminde bir noktanın öteleme ya da eksene göre yansıma sonucundaki koordinatını bulma sorulur. Çeldiriciler yönü ters almak, x ile y'yi karıştırmak ve işareti yanlış koordinata uygulamaktır.",
    "Günlük hayat senaryosunda (oyun karakteri, harita, çiçek tarhı planı, çini deseni) iki ardışık dönüşüm ve son noktanın bir özelliği (apsis çarpımı, uzaklık, alan) sorulur. Ara noktaları yaz; ara sonucu cevap sanmak yaygın hatadır.",
    "Kareli kâğıtta çini, kilim ve dokuma motifleri verilir; \"hangi dönüşümle elde edilmiştir?\" ya da \"hangisi doğrudur?\" sorulur. Yönlü bir parçayı izleyerek öteleme ile yansımayı ayır."
  ],
  "yokla": [
    {
      "soru": "P(−1, 4) noktası 6 birim sağa ve 3 birim aşağı ötelenirse hangi noktaya gelir?",
      "cevap": "(−1 + 6, 4 − 3) = (5, 1). Sağ, apsise eklenir; aşağı, ordinattan çıkarılır."
    },
    {
      "soru": "Q(3, −5) noktasının x eksenine göre ve y eksenine göre yansımaları nelerdir?",
      "cevap": "x eksenine göre (3, 5): ordinatın işareti değişir. y eksenine göre (−3, −5): apsisin işareti değişir."
    },
    {
      "soru": "Bir nokta simetri doğrusuna 7 birim uzaktadır. Noktayla görüntüsü arasındaki uzaklık kaç birimdir? Doğru üzerindeki bir noktanın görüntüsü nerededir?",
      "cevap": "14 birim; uzaklık iki katıdır. Doğru üzerindeki nokta yerinde kalır, görüntüsü kendisidir."
    },
    {
      "soru": "V(5, −2) noktasına önce 8 birim sola öteleme, sonra y eksenine göre yansıma uygulanırsa son nokta nedir? Sıra değişirse aynı nokta mı bulunur?",
      "cevap": "Önce (−3, −2), sonra (3, −2). Sıra değişirse önce (−5, −2), sonra 8 sola (−13, −2) bulunur; sonuç farklıdır, sıra önemlidir."
    },
    {
      "soru": "Aynı yöne bakan iki L biçimli motif yan yana duruyor. İkinci motif birinciden hangi dönüşümle elde edilmiştir?",
      "cevap": "Öteleme; çünkü motif ters çevrilmemiş, yalnızca kaymıştır. Yansımada motifin yönü (L'nin ayağı) ters görünürdü."
    },
    {
      "soru": "A(2, 3) noktası öteleme ile A′(6, 1) noktasına gelmiştir. Aynı ötelemeyle B(−1, 5) noktası nereye gider?",
      "cevap": "Öteleme (6 − 2, 1 − 3) = (+4, −2): 4 sağa, 2 aşağı. B′(−1 + 4, 5 − 2) = (3, 3)."
    }
  ]
};
