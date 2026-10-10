window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["dogrusal-denklemler"] = {
  kazanimlar: ["M.8.2.2.1", "M.8.2.2.2", "M.8.2.2.3", "M.8.2.2.4", "M.8.2.2.5", "M.8.2.2.6"],
  giris: "Doğrusal denklem, iki nicelik arasındaki düzenli ilişkiyi gösterir; tablo, denklem ve grafik bu ilişkinin üç yazılışıdır. Sınavda denklem çözmeni, koordinat düzleminde nokta okumanı, tablodan denklem çıkarmanı, doğruyu eksenlerle ilişkilendirmeni ve eğimi hesaplamanı isterler. Bu özeti okuyunca hangi soruda hangi geçişi (tablo, denklem, grafik) yapacağını bileceksin.",
  bolumler: [
    {
      baslik: "Birinci dereceden denklem çözme",
      maddeler: [
        "**Denklem**, içinde bilinmeyen bulunan eşitliktir. Terazi gibi düşün: iki kefeye **aynı işlemi** uygularsan denge bozulmaz. Amaç x'i tek başına bırakmaktır.",
        "**Adımlar:** (1) Parantez varsa dağıt. (2) Kesir varsa bütün terimleri paydaların ortak katıyla çarp. (3) x'li terimleri bir tarafa, sayıları öbür tarafa topla; taraf değiştiren terimin işareti değişir. (4) x'in katsayısına böl. (5) Sağlama yap.",
        "Kesirli denklemde çarpma **her terime**, sabit terimlere de uygulanır. Payı iki terimli kesir çarpılınca parantezli kalır: (x + 2)/3 kesrini 12 ile çarpınca 4(x + 2) olur. İki kesir birbirine eşitse **içler-dışlar çarpımı** da kullanılır.",
        "Katsayılar rasyonel sayı olabilir; yöntem aynıdır. Sözel problemde bilinmeyene harf ver, cümleyi denkleme çevir, çöz ve **istenen** niceliği bulduğundan emin ol."
      ],
      ornekler: [
        "3(x + 2) = 5x − 4 → 3x + 6 = 5x − 4 → 10 = 2x → x = 5. Sağlama: 3 · 7 = 21 ve 5 · 5 − 4 = 21.",
        "[[x + 2|3]] − [[x|4]] = 1 → her terimi 12 ile çarp: 4(x + 2) − 3x = 12 → x + 8 = 12 → x = 4."
      ],
      dikkat: [
        "**Kesirde sabit terimi çarpmamak.** [[x|3]] + 2 = 5 denkleminde 3 ile çarparken 2'yi de çarparsın: x + 6 = 15, x = 9.",
        "**Taşırken işareti değiştirmemek.** x − 7 = 12 denkleminde −7 öbür tarafa +7 olarak geçer: x = 19.",
        "**Eksi işaretli kesirde parantezi dağıtmamak.** [[x|3]] − [[x − 2|6]] = 1 denklemini 6 ile çarpınca 2x − (x − 2) = 6 olur; eksi **her** terimin işaretini değiştirir: 2x − x + 2 = 6, x = 4."
      ]
    },
    {
      baslik: "Koordinat sistemi ve sıralı ikili",
      maddeler: [
        "**Koordinat sistemi**, birbirine dik iki sayı doğrusundan oluşur: yatay **x ekseni**, dikey **y ekseni**. Kesişim noktası **orijin** O(0, 0)'dır.",
        "Her nokta bir **sıralı ikili** (x, y) ile gösterilir. **İlk sayı yatay**, ikinci sayı **dikey** konumu verir. Sıra önemlidir: (2, 5) ile (5, 2) farklı noktalardır.",
        "Konum için orijinden başla: x pozitifse sağa, negatifse sola; y pozitifse yukarı, negatifse aşağı git. (−4, 3) orijinin 4 birim solunda, 3 birim yukarısındadır.",
        "Eksenler düzlemi **4 bölgeye** ayırır; numaralama **saatin tersi yönündedir**. Eksenler üzerindeki noktalar hiçbir bölgede sayılmaz.",
        "Aynı yatay (ya da dikey) doğru üzerindeki iki noktanın uzaklığı koordinatların farkıdır: (−1, 2) ile (5, 2) arası 5 − (−1) = 6 birimdir. Harita ve oturma planında **1 birimin kaç metre** olduğuna bak.",
        "3 birim sağa, 4 birim yukarı gitmek (x, y) → (x + 3, y + 4) demektir. **Dikdörtgenin** eksik köşesi diğer köşelerden okunur: K(−2, 1), L(3, 1), M(3, −2) ise N(−2, −2). **Paralelkenarda** karşılıklı kenarlar paralel ve eşittir; bir kenardaki sağa-yukarı gidiş karşı kenarda da aynıdır: P(0, 0), R(5, 0), S(7, 3) ise T(2, 3).",
        "**Alan:** eksene paralel kenarı taban al; karşı köşenin bu kenara dik uzaklığı yüksekliktir. (−1, 2), (5, 2), (1, 6) köşeli üçgende taban 6, yükseklik 4, alan 12."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Bölge</th><th>x</th><th>y</th><th>Örnek</th></tr><tr><td>I</td><td>+</td><td>+</td><td>(3, 2)</td></tr><tr><td>II</td><td>−</td><td>+</td><td>(−3, 2)</td></tr><tr><td>III</td><td>−</td><td>−</td><td>(−3, −2)</td></tr><tr><td>IV</td><td>+</td><td>−</td><td>(3, −2)</td></tr></table>",
      dikkat: [
        "**x ile y'yi karıştırmak.** (6, −1) için 6 birim sağa, 1 birim aşağı gidilir.",
        "**Bölgeleri saat yönünde saymak.** II. bölge sol üsttür."
      ]
    },
    {
      baslik: "Doğrusal ilişki: tablo ve denklem",
      maddeler: [
        "**Bağımsız değişken** değerini bizim seçtiğimiz niceliktir (süre, kilometre, adet). **Bağımlı değişken** ona göre belirlenendir (ücret, su miktarı). Genelde x bağımsız, y bağımlıdır.",
        "Bağımsız değişken eşit adımlarla artarken bağımlı değişken **her adımda aynı miktar** değişiyorsa ilişki **doğrusaldır**. Bu sabit değişim (x her 1 artarken) x'in katsayısıdır. Tablodaki her sütun bir sıralı ikilidir: x = 2, y = 10 ise (2, 10).",
        "**Denklem:** y = (adım başına değişim) · x + (x = 0 iken y). Tabloda x her 1 artmıyorsa y'nin değişimini x'in değişimine böl: x 2 artarken y 10 artıyorsa katsayı 5'tir. x = 0 sütunu yoksa bir sütunu denkleme yazıp sabit terimi bul.",
        "Bir nokta denklemi sağlıyorsa o doğrunun **üzerindedir**: x yerine değeri yaz, y eşit çıkıyor mu bak."
      ],
      tablo: "<table class=\"tablo\"><tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>y</th><td>4</td><td>7</td><td>10</td><td>13</td></tr></table>",
      ornekler: [
        "Tabloda y her adımda 3 artar, x = 0 iken y = 4'tür: y = 3x + 4. x = 10 için y = 34.",
        "Havuzda 200 litre su var, dakikada 15 litre boşalıyor: y = 200 − 15x. Havuzun boşaldığı an için y = 0 yazılır."
      ],
      dikkat: [
        "**Başlangıç değerini unutmak.** Sabit ücretli tarifede y = 8x yazmak sabit ücreti yok saymaktır.",
        "**Rolleri ters almak.** Ücret süreye bağlıdır; süre bağımsız, ücret bağımlıdır."
      ]
    },
    {
      baslik: "Doğrunun grafiği",
      maddeler: [
        "Doğrusal denklemin grafiği bir **doğrudur**; çizmek için **iki nokta yeter**, üçüncü nokta sağlama içindir.",
        "**Eksenleri kestiği noktalar:** x eksenini keserken **y = 0**, y eksenini keserken **x = 0** yazılır. 5x + 2y = 20 için (4, 0) ve (0, 10) bulunur. Kısayol: ax + by = c doğrusu eksenleri (c/a, 0) ve (0, c/b) noktalarında keser.",
        "**x = a** doğrusu dikeydir, **y eksenine paraleldir**; **y = b** doğrusu yataydır, **x eksenine paraleldir**. Kesiştikleri nokta (a, b)'dir.",
        "**Orijinden geçme:** (0, 0) denklemi sağlıyorsa doğru orijinden geçer. y = 2x geçer; y = 2x + 3 geçmez.",
        "Eksenler ve doğru bir dik üçgen oluşturur; dik kenarlar kesim noktalarının orijine uzaklığıdır. 5x + 2y = 20 için alan 4 · 10 ÷ 2 = 20 birimkaredir. Kesim noktası (0, −6) ise uzunluk 6'dır.",
        "İki ilişkiyi aynı grafikte çizersen **doğruların kesiştiği nokta** iki ilişkinin eşit olduğu yerdir. Kesişimden sonra üstte kalan doğru daha büyük, **altta kalan daha küçük** (daha ucuz) değer verir."
      ],
      dikkat: [
        "**x = 3 doğrusunu x eksenine paralel sanmak.** x = 3 dikeydir; (3, 0) ve (3, 5) gibi noktalardan geçer.",
        "**Üçgen alanında ikiye bölmeyi unutmak.** Dik kenarların çarpımı alanın iki katıdır."
      ]
    },
    {
      baslik: "Eğim",
      maddeler: [
        "**Eğim**, doğrunun (rampanın, yokuşun) dikliğini gösteren orandır: **eğim = dikey uzunluk / yatay uzunluk**. Yükseklik 2 m, yatay uzunluk 10 m ise eğim [[2|10]] = [[1|5]]'tir. Eğim fark değil, orandır.",
        "**Koordinatlardan:** (1, 2) ve (4, 8) noktalarından geçen doğrunun eğimi [[8 − 2|4 − 1]] = 2'dir. Pay ve paydada aynı noktadan başla.",
        "**Denklemden:** y = mx + n biçiminde m eğimdir; n, y eksenini kestiği noktanın y değeridir. 3x + 4y = 12 için y'yi yalnız bırak: y = −[[3|4]]x + 3, eğim −[[3|4]]. y = [[2|3]]x − 1 gibi kesirli denklemi 3 ile çarpıp 2x − 3y = 3 biçiminde de yazabilirsin.",
        "Soldan sağa yükselen doğrunun eğimi pozitif, alçalanın negatiftir; yatay doğrunun eğimi 0'dır. Rampa ve yokuş gibi günlük hayat modellerinde işaret üzerinde durulmaz.",
        "Eğimin işaretsiz değeri büyüdükçe doğru dikleşir: eğimi −5 olan doğru, eğimi 3 olandan diktir. Aynı eğimli iki rampada oran eşittir: [[40|160]] = [[100|x]] içler-dışlar çarpımıyla çözülür (x = 400). **Paralel doğruların eğimi eşittir**; bir noktadan geçen paralel doğru için aynı eğimi kullanıp sabit terimi o noktadan bul.",
        "Doğrusal ilişkide eğim, **adım başına değişimdir**: taksinin km başına ücreti, musluğun dakikadaki akışı."
      ],
      dikkat: [
        "**Oranı ters kurmak.** Eğim yüksekliğin yatay uzunluğa oranıdır, tersi değil.",
        "**Sabit terimi eğim sanmak.** y = 2x + 9'da eğim 2'dir; 9 değil."
      ]
    },
    {
      baslik: "Günlük hayat modelleri",
      maddeler: [
        "Üç gösterimi birbirine çevir: **tablo** → fark bul → **denklem** → iki nokta bul → **grafik**. Grafikten okunan iki nokta da denklem verir.",
        "Sabit ücret + birim ücret (taksi, kargo, abonelik): y = (birim ücret) · x + (sabit ücret). Azalan durumlar (boşalan depo, yanan mum): y = (başlangıç) − (hız) · x; bitiş için y = 0 yazılır.",
        "İki noktadan denklem: 3 km'de 50 TL, 7 km'de 90 TL ise katsayı (90 − 50) ÷ (7 − 3) = 10, sabit terim 50 − 30 = 20, denklem y = 10x + 20.",
        "İki planı karşılaştırırken denklemleri eşitle: 80 + 10x = 30x → x = 4. Grafik sorularında **eksenin adını, birimini ve ölçeğini** oku."
      ],
      dikkat: [
        "**Sorulan niceliği karıştırmak.** “Kaç dakikada?” diyorsa cevap x'tir, y değil.",
        "**Ölçeği atlamak.** Kareler 2'şer artıyorsa bir kare 1 değil 2 birimdir."
      ]
    }
  ],
  lgs: [
    "Taksi, kumbara, dolan depo ya da kısalan mum gibi bir durumun tablosu veya grafiği verilir; denklem kurup belli bir değer için süre ya da miktar sorulur. Çeldiriciler sabit terimi unutmaktan ve sorulan niceliği karıştırmaktan gelir.",
    "Koordinat düzleminde noktalar ve eksenlere paralel doğrularla bir şekil (dikdörtgen, üçgen) kurulur; köşe koordinatı, çevre veya alan sorulur. Birim ölçeğini ve ikiye bölmeyi kontrol et.",
    "Eğim rampa, çatı ya da iki noktayla verilir; “hangisi daha diktir?” sorusunda işaretsiz değerleri kıyasla.",
    "İki doğrunun grafiğinde kesişim noktasına göre karşılaştırma yapılır: eşit olduğu değer ve hangisinin daha ucuz olduğu. “En az kaç” sorusunda ucuzluk kesişimden sonra başlar: kesişim 12 ise 13'ten."
  ],
  yokla: [
    { soru: "[[x + 1|2]] − [[x|3]] = 1 denklemini çöz.", cevap: "x = 3. Her terimi 6 ile çarp: 3(x + 1) − 2x = 6 → x + 3 = 6. Sağlama: 2 − 1 = 1." },
    { soru: "(−5, 2) noktası kaçıncı bölgededir ve orijinden nasıl gidilir?", cevap: "II. bölge. 5 birim sola, 2 birim yukarı; x negatif, y pozitiftir." },
    { soru: "x = 1, 2, 3 için y = 6, 10, 14 ise denklem nedir?", cevap: "y = 4x + 2. y her adımda 4 artar; x = 1 için 4 + 2 = 6 olduğundan sabit terim 2'dir." },
    { soru: "2x − 3y = 12 doğrusu eksenleri hangi noktalarda keser?", cevap: "x eksenini (6, 0), y eksenini (0, −4) noktasında. y = 0 için 2x = 12; x = 0 için −3y = 12." },
    { soru: "x = −2 ve y = 5 doğruları hangi eksene paraleldir, nerede kesişir?", cevap: "x = −2 y eksenine, y = 5 x eksenine paraleldir; kesişim (−2, 5)'tir." },
    { soru: "Dikey yüksekliği 8 m, yatay uzunluğu 20 m olan rampanın eğimi kaçtır?", cevap: "[[2|5]]. Eğim dikeyin yataya oranıdır: 8 ÷ 20." }
  ]
};
