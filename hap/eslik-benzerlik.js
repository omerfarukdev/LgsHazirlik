window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["eslik-benzerlik"] = {
  "kazanimlar": [
    "M.8.3.3.1",
    "M.8.3.3.2"
  ],
  "giris": "Bu konuda iki çokgenin aynı şekil mi, yoksa aynı biçimde büyütülmüş ya da küçültülmüş şekil mi olduğunu ayırt edersin. Sınavda karşılık gelen kenar ve açıyı eşleştirmen, benzerlik oranını bulman ve oranla eksik kenarı ya da çevreyi hesaplaman istenir. Özeti okuyunca neyi neyle eşleyeceğini bileceksin.",
  "bolumler": [
    {
      "baslik": "Eş ve benzer çokgen nedir?",
      "maddeler": [
        "**Eş çokgenler:** üst üste konunca tam örtüşen, yani şekli de boyutu da aynı olan çokgenlerdir. Sembolü **≅**'dir. ABC ≅ DEF diye okunur: \"ABC üçgeni DEF üçgenine eştir\". Çevreleri de eşittir.",
        "**Benzer çokgenler:** biçimi aynı, boyutu farklı olabilen çokgenlerdir; biri ötekinin aynı oranda büyütülmüş ya da küçültülmüş hâlidir. Sembolü **~**'dir. ABC ~ DEF diye okunur: \"ABC üçgeni DEF üçgenine benzerdir\".",
        "**Eş çokgenler her zaman benzerdir** (oran 1). Ama **benzer çokgenlerin eş olması gerekmez:** kenarı 3 cm ve 9 cm olan iki kare benzerdir, eş değildir.",
        "Üçgenler için ayrı eşlik ya da benzerlik kuralları bu derste verilmez. Üçgen de öteki çokgenler gibi değerlendirilir: açılar eşit mi, kenarlar eşit mi, kenarlar orantılı mı?"
      ],
      "tablo": "<table class=\"tablo\"><tr><th></th><th>Eş çokgenler (≅)</th><th>Benzer çokgenler (~)</th></tr><tr><td>Karşılık gelen açılar</td><td>Eşit</td><td>Eşit</td></tr><tr><td>Karşılık gelen kenarlar</td><td>Eşit</td><td>Orantılı</td></tr><tr><td>Boyut</td><td>Aynı</td><td>Farklı olabilir</td></tr><tr><td>Birbirleri için</td><td>Her zaman benzer</td><td>Eş olmayabilir</td></tr></table>",
      "dikkat": [
        "**Semboller karışır.** ≅ eşliktir, ~ benzerlik. \"Benzerdir\" diyorsa ~ ara; eşit işareti (=) ya da paralel işareti (∥) şekiller arasındaki bu ilişkiyi göstermez.",
        "**Ters bağlantı kurmak.** \"Benzerler eştir\" yanlıştır; doğrusu \"eşler benzerdir\"dir."
      ]
    },
    {
      "baslik": "Karşılık gelen köşe, kenar ve açı",
      "maddeler": [
        "Harflerin **sırası önemlidir:** ABC ~ DEF yazılışında **A↔D, B↔E, C↔F** köşeleri karşılık gelir.",
        "Kenarın iki ucunu da çevir: [AB]'nin karşılığı [DE], [BC]'nin karşılığı [EF], [CA]'nın karşılığı [FD]'dir. Açı da aynı: m(A) = m(D), m(B) = m(E), m(C) = m(F). Dörtgende de kural aynı: ABCD ~ KLMN ise |CD| kenarının karşılığı |MN|'dir.",
        "Şekil döndürülmüş, ters çevrilmiş ya da harfler farklı yerlerde yazılmış olabilir. Karşılığı **konuma göre değil harf sırasına göre** bul.",
        "Harf sırası verilmemişse **eşit açılara** bak: eşit açıların köşeleri karşılık gelir; **en uzun kenar** en uzun kenarın, **en kısa kenar** en kısa kenarın karşılığıdır.",
        "**Eksik açı için yardımcı bilgiler:** üçgende iç açılar toplamı 180°, dörtgende 360°'dir. Paralelkenarda (eşkenar dörtgende de) karşılıklı açılar eşit, komşu açıların toplamı 180°'dir. İkizkenar üçgende taban açıları eşittir. **İkizkenar yamukta** iki bacak eşittir ve aynı tabana komşu açılar eşittir; paralel tabanlar arasındaki komşu açıların toplamı 180°'dir (66° + 114° = 180°).",
        "Şekillerde **eşit açılar aynı sayıda yayla** işaretlenir; aynı sayıda yay taşıyan köşeler karşılık gelir."
      ],
      "ornekler": [
        "PRS ~ TUV, m(P) = 40°, m(U) = 90° ise m(V) = 180° − 40° − 90° = 50°'dir. P↔T, R↔U, S↔V olduğundan m(S) = m(V) = 50°.",
        "JKLM ≅ STUV ve |KL| = (4x + 1) cm, |TU| = 21 cm ise karşılık gelen kenarlar eşit olduğundan 4x + 1 = 21, x = 5."
      ],
      "dikkat": [
        "**Karşılık gelen kenarı ya da köşeyi yanlış eşlemek.** |DE| kenarı |AB|'nin, F açısı C açısının karşılığıdır; |BC| ya da A değil. Önce hangi köşenin hangi köşe olduğunu yaz."
      ]
    },
    {
      "baslik": "Benzerlik oranı",
      "maddeler": [
        "Karşılık gelen kenarların oranına **benzerlik oranı** denir; bütün kenar çiftlerinde **aynıdır.** Oranı bulmak için **bir** kenar çifti yeter: oran = yeni kenar ÷ eski kenar.",
        "**Oran hangi sırayla alınırsa öyle okunur:** ABC ~ DEF iken |DE| ÷ |AB| \"DEF'nin ABC'ye\", |AB| ÷ |DE| \"ABC'nin DEF'ye\" benzerlik oranıdır. Biri öbürünün tersidir. Büyüğün küçüğe oranı 1'den büyük, küçüğün büyüğe oranı 1'den küçüktür. Oran 1 ise şekiller **eştir.**",
        "**Oranla eksik kenar:** oran büyük ÷ küçük (1'den büyük) alınmışsa küçükten büyüğe giderken **çarp**, büyükten küçüğe giderken **böl.**",
        "**Çevre oranı:** benzer çokgenlerin çevreleri de aynı oranda değişir. Çevreler oranı = benzerlik oranı.",
        "**Dikdörtgenlerde** açılar zaten 90°'dir; kısa kenar ÷ uzun kenar aynıysa benzerdir. Köşegen de aynı oranda değişir.",
        "**Kareler**, **eşkenar üçgenler** ve aynı kenar sayılı **düzgün çokgenler** her zaman benzerdir. **Dikdörtgenler, eşkenar dörtgenler, ikizkenar üçgenler** ve **yamuklar** her zaman benzer değildir."
      ],
      "ornekler": [
        "**Çözümlü örnek:** ABC ~ UVW, |AB| = 10 cm, |BC| = 14 cm, |CA| = 18 cm ve |UV| = 15 cm. Oran = 15 ÷ 10 = [[3|2]]. |VW| = 14 · [[3|2]] = 21 cm, |WU| = 18 · [[3|2]] = 27 cm. Çevreler 42 ve 63; 63 ÷ 42 = [[3|2]]. Sağlama: çevre oranı benzerlik oranına eşit çıktı.",
        "**Küçültme:** büyüğün küçüğe benzerlik oranı 4 ise büyükteki 28 cm'lik kenarın küçükteki karşılığı 28 ÷ 4 = 7 cm'dir."
      ],
      "dikkat": [
        "**Kenar farkını oran sanmak.** Kenarları 5 cm ve 8 cm olan dikdörtgenle 9 cm ve 12 cm olan dikdörtgende iki kenar da 4 artmıştır, ama 8 ÷ 5 ≠ 12 ÷ 9: benzer değildir. Benzerlikte **toplama değil çarpma** vardır.",
        "**Oranı ters almak.** [[1|3]] ile 3 farklı sayılardır; büyütme sorusunda kenar büyümelidir.",
        "**Ara sonucu cevap sanmak.** Önce oran bulunur; sorulan çoğu zaman başka bir kenar, toplam ya da çevredir."
      ]
    },
    {
      "baslik": "Benzer mi, değil mi?",
      "maddeler": [
        "Benzer olmak için **hem** açılar eşit **hem** kenarlar orantılı olmalıdır. **Yalnızca biri yetmez.**",
        "**Açılar eşit, kenarlar orantısız:** 5 × 8 ve 5 × 10 dikdörtgenlerinde açılar 90°'dir, ama 5 ÷ 5 ≠ 8 ÷ 10. **Kenarlar orantılı, açılar farklı:** kenarı 8 cm olan kare ile kenarı 8 cm olan yassı eşkenar dörtgen. İkisi de benzer değildir.",
        "**Dikdörtgen kontrolü:** 15 × 25 ile 6 × 10 için 15 ÷ 25 = 6 ÷ 10 = [[3|5]]: benzerdir (oran [[5|2]]).",
        "**Çerçeve (paspartu) tuzağı:** fotoğrafın her yanına aynı genişlikte çerçeve eklenirse (ya da kenarlardan aynı miktar çıkarılırsa) kenarlara aynı sayı **eklenmiş** olur. 10 × 16 fotoğraf, her yanda 2 cm çerçeveyle 14 × 20 olur; [[10|16]] = 0,625 iken [[14|20]] = 0,7: benzer değildir. Eklemeyle yalnızca kare benzer kalır.",
        "**Kâğıt katlama ve kesme:** kenar oranına bak. 30 × 40 kâğıt iki kenarının orta noktaları birleşecek biçimde kesilirse dört parça 15 × 20 olur; 15 ÷ 20 = 30 ÷ 40, parçalar kâğıda benzerdir (oran [[1|2]]). Ama 10 × 10 kare tek yönde ortadan kesilirse iki parça 10 × 5 olur: birbirine eştir, kareye benzemez. Kalan parça asıl kâğıda benzerse uzun kenar uzun kenara, kısa kenar kısa kenara karşılık gelir.",
        "**Eşkenar üçgenin kenar orta noktaları** birleştirilirse 4 eş eşkenar üçgen oluşur; her biri büyüğe benzerdir, oran [[1|2]]'dir.",
        "**Kareli kâğıtta seçme:** karşılık gelen kenarları kare sayısıyla say. Hepsi eşitse şekil **eştir**; hepsi aynı k katıysa (k ≠ 1) **benzerdir.** L, T, U gibi şekillerde dış ölçülerin yanında **kol genişliği ve taban kalınlığı** da aynı oranda olmalıdır. **Çizme:** her yatay ve düşey kenarı oran kadar uzat ya da kısalt (oran 3 ise 2 kare olan kenarı 6 kare çiz).",
        "**Kare boyutu:** karelerin kenarı iki kâğıtta farklıysa (1 cm ve 2 cm) kare sayısını değil gerçek uzunluğu oranla."
      ],
      "dikkat": [
        "**Tek koşulu yeterli saymak.** \"Bütün açıları eşit\" ya da \"kenarları orantılı\" tek başına benzerlik değildir.",
        "**Çevresi aynı olmak benzerlik değildir.** Çevresi 20 cm olan 2 × 8 ve 5 × 5 dikdörtgenleri benzer değildir.",
        "**Açıların da orantılı olduğunu sanmak.** Şekil büyüyünce açı büyümez; 80° açı 3 kat büyük şekilde de 80°'dir.",
        "**Eş sorusunda yalnızca biçime bakmak.** Biçimi aynı ama kare sayıları farklı şekiller eş değildir."
      ]
    },
    {
      "baslik": "Hesap araçları: Pisagor, x'li ifadeler",
      "maddeler": [
        "**Eksik kenar şekilde yoksa** dik üçgende (dikdörtgenin köşegeni de dik üçgen oluşturur) Pisagor ile bul: a^{2} + b^{2} = c^{2}; c en uzun kenardır. Sonra oranı uygula. Sık üçlüler: 3-4-5, 5-12-13, 8-15-17 ve katları.",
        "**x'li ifade verilmişse:** eşlikte karşılık gelen iki ifadeyi eşitle (3x − 1 = 14). Benzerlikte açıları yine eşitle; kenarlarda sayıyla verilen çiftten oranı bul, ifadeyi oranla ilişkilendir. Örnek: oran 2, 5x − 1 = 2 · (x + 4) → 3x = 9, x = 3.",
        "**Maket ve ölçek:** \"maketteki her uzunluk gerçeğin [[1|25]]'i\" demek, gerçek uzunluğun maketin 25 katı olması demektir. Maketteki 14 cm gerçekte 14 · 25 = 350 cm = 3,5 m'dir. Oranı alırken iki uzunluğu **aynı birime** çevir (m ↔ cm).",
        "**Üçgen eşitsizliği:** üçgende bir kenar, diğer ikisinin farkından büyük, toplamından küçüktür. Kenarları 7 ve 12 olan üçgende üçüncü kenar 5 < x < 19'dur. Benzerlik sorusunda tam sayı koşulu varsa karşılık gelen kenarı da oranla denetle.",
        "**İki bilinmeyen:** iki ayrı kenar çifti ya da iki açı ifadesi verilmişse iki eşitlik yazıp x ve y'yi sırayla bul.",
        "**Oranı m ile yaz:** dikdörtgenin kısa ÷ uzun kenar oranı [[2|3]] ise kenarlar 2m ve 3m'dir. Kenarlar tam sayıysa m tam sayıdır; çevre 2 · (2m + 3m) = 10m, yani 10'un katıdır.",
        "**Benzerlik geçişlidir:** ABC ~ DEF ve DEF ~ KLM ise ABC ~ KLM. Art arda gelen oranlar çarpılır: ilk büyütme 2, ikincisi [[3|2]] ise toplam oran 3'tür.",
        "**Bütün açıları dik L ve merdiven biçimlerinde** (içe oyuk girmeyen şekiller) çevre, şekli saran dikdörtgenin çevresine eşittir. U gibi oyuklu şekillerde oyuğun duvarlarını da ekle."
      ]
    }
  ],
  "lgs": [
    "\"Hangisi kesinlikle doğrudur?\" türünde, eş çokgenlerin benzer olduğu, benzerlerin eş olmayabileceği ve dikdörtgenlerin her zaman benzer olmadığı sınanır. Çeldiriciler bu ilişkileri ters çevirir.",
    "ABC ~ DEF yazılışından karşılık gelen kenarı bulma, tablo ya da şekilde oranla eksik kenarı ve çevreyi hesaplama sorulur. Harf sırasına bakmazsan yanlış kenarı oranlarsın; çeldiriciler bu eşleşmelerden üretilir. Bazen \"hangisi olamaz\" kökü gelir: oranı m ile yaz, tam sayı koşulunu denetle.",
    "Kareli kâğıtta \"hangisi benzerdir ama eş değildir\" ya da \"hangisi eştir\" sorulur: kare sayılarını say, oranı sabitle. Fotoğraf büyütme, çerçeve ve kâğıt kesme sorularında eklemeyle büyütülen şeklin benzer olmadığını yakala."
  ],
  "yokla": [
    {
      "soru": "Eş olan iki çokgen her zaman benzer midir? Benzer olan iki çokgen her zaman eş midir?",
      "cevap": "Birincisi evet (oran 1); ikincisi hayır. Kenarı 2 cm ve 5 cm olan iki kare benzerdir ama eş değildir."
    },
    {
      "soru": "XYZ ~ HJK ise [YZ] kenarının karşılığı hangi kenardır? m(Z) hangi açıya eşittir?",
      "cevap": "X↔H, Y↔J, Z↔K olduğundan [YZ] ile [JK] karşılık gelir; m(Z) = m(K)."
    },
    {
      "soru": "Benzer iki üçgenden küçüğünün bir kenarı 8 cm, büyüğünde karşılığı 20 cm ise büyüğün küçüğe benzerlik oranı kaçtır? Büyüğün çevresi 70 cm ise küçüğün çevresi kaç cm'dir?",
      "cevap": "Oran 20 ÷ 8 = [[5|2]]. Çevreler de aynı oranda değişir: 70 ÷ [[5|2]] = 28 cm."
    },
    {
      "soru": "FGHJ ~ WXYZ ve m(G) = 110° ise m(X) kaç derecedir? Benzerlik oranı 3 olsaydı değişir miydi?",
      "cevap": "m(X) = 110°. Karşılık gelen açılar eşittir; oran açıyı değiştirmez."
    },
    {
      "soru": "6 cm × 9 cm bir dikdörtgenin her boyutuna 3 cm eklenerek 9 cm × 12 cm dikdörtgen elde ediliyor. İki dikdörtgen benzer midir?",
      "cevap": "Hayır. 6 ÷ 9 = [[2|3]] iken 9 ÷ 12 = [[3|4]]; kenarlar orantılı değildir. Benzerlikte kenarlar çarpılır, toplanmaz."
    }
  ]
};
