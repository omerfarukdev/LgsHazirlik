window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["cebirsel-ifadeler"] = {
  kazanimlar: ["M.8.2.1.1", "M.8.2.1.2", "M.8.2.1.3", "M.8.2.1.4"],
  giris: "Cebirsel ifade, sayıların yanında harflerin de bulunduğu matematik ifadesidir; harf, değeri değişebilen bir sayının yerini tutar. Sınavda senden terim ve katsayıyı tanımanı, ifadeleri çarpıp sadeleştirmeni, iki özdeşliği (kare açılımı ve kare farkı) kullanmanı ve ifadeleri çarpanlarına ayırmanı isterler; sorular çoğunlukla kenarları cebirsel ifade olan bahçe, karton ve çerçeve şekilleriyle gelir. Bu özeti okuyunca hangi ifadede hangi yöntemi kullanacağını ve işaret hatalarının nerede çıktığını bileceksin.",
  bolumler: [
    {
      baslik: "Terim, katsayı, değişken, sabit terim",
      maddeler: [
        "Cebirsel ifade, harflerin (**değişkenlerin**) ve sayıların işlemlerle bağlandığı ifadedir: 4m + 7, 3k^{2}, 2a + 2b, −6y^{2}.",
        "**Terim**, ifadenin toplama ve çıkarma işaretleriyle ayrılan her parçasıdır. İşaret, ait olduğu terimin parçasıdır: 5m^{2} − 3m + 8 ifadesinin terimleri 5m^{2}, −3m ve 8'dir.",
        "**Katsayı**, terimdeki sayı çarpanıdır. **Sabit terim** değişken içermeyen terimdir ve o da bir katsayıdır. Katsayılar toplamını sorarlarsa sabit terimi ve işaretleri de say.",
        "Üs katsayı değildir: 5m^{2} teriminin katsayısı 5'tir, 2 değil. Harfin önünde sayı yoksa katsayı 1'dir. Terimde birden çok harf olabilir: −3a^{2}b teriminin katsayısı −3, değişken kısmı a^{2}b'dir.",
        "**Benzer terimler** değişken kısmı (harf ve üs) aynı olan terimlerdir; yalnızca onlar toplanır ya da çıkarılır: 4m + 3m = 7m. Ama m^{2} ile m ya da a ile b benzer değildir, birleşmez.",
        "**Değer bulma:** Harfin yerine verilen sayı yazılır; önce üs, sonra çarpma, en son toplama ve çıkarma yapılır. x = 1 yazmak katsayılar toplamını verir."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Terim</th><th>Katsayı</th><th>Değişken kısmı</th></tr><tr><td>7p<sup>2</sup></td><td>7</td><td>p<sup>2</sup></td></tr><tr><td>−4q</td><td>−4</td><td>q</td></tr><tr><td>r</td><td>1</td><td>r</td></tr><tr><td>9</td><td>9 (sabit terim)</td><td>yok</td></tr></table>",
      ornekler: [
        "5m^{2} − 3m + 8 ifadesinde m = 2 için değer: 5 · 4 − 3 · 2 + 8 = 20 − 6 + 8 = 22.",
      ],
      dikkat: [
        "**Üssü katsayı sanma.** 8d^{3} teriminde katsayı 8'dir, 3 değildir.",
        "**Farklı türleri birleştirme.** 2k^{2} + 3k toplamı 5k^{3} ya da 5k^{2} olmaz; terimler benzer değildir, olduğu gibi kalır.",
        "**Negatif değeri parantezsiz yazmak.** 4n^{2} + 3n ifadesinde n = −3 için 4 · (−3)^{2} + 3 · (−3) = 36 − 9 = 27'dir; (−3)^{2} = 9'dur, −9 değil.",
      ]
    },
    {
      baslik: "İfade kurma, toplama ve çıkarma",
      maddeler: [
        "Sözel bir durumu önce terimlere böl: “fiyatı p TL olan 3 defter” 3p; “yaşı t olan kişiden 5 yaş büyük” t + 5; “t'nin 2 katından 1 eksik” 2t − 1.",
        "Sık kullanılan bağıntılar: tutar = adet × birim fiyat, yol = hız × süre, dikdörtgenin alanı = kenarların çarpımı, çevresi = komşu kenarların toplamının 2 katı. Kenarlar ya da fiyatlar cebirsel ifade olunca bağıntı aynı kalır, işlem ifadelerle yapılır.",
        "Toplamada parantez olduğu gibi açılır: (3a + 2) + (a − 5) = 4a − 3.",
        "**Çıkarmada eksi işareti parantezin her terimine dağıtılır, işaretler değişir:** (3a + 2) − (a − 5) = 3a + 2 − a + 5 = 2a + 7.",
      ],
      dikkat: [
        "**Eksiyi yalnızca ilk terime uygulamak.** 5 − (2b − 4) ifadesi 5 − 2b + 4 = 9 − 2b olur; 5 − 2b − 4 yazmak yanlıştır.",
      ]
    },
    {
      baslik: "Cebirsel ifadeleri çarpma",
      maddeler: [
        "Tek terim ile çarpmada katsayılar kendi arasında, harfler kendi arasında çarpılır: 3a · 4a = 12a^{2}; (−2b) · 5c = −10bc.",
        "**Dağılma:** Dışarıdaki terim parantezdeki her terimle çarpılır: 2t(t − 5) = 2t^{2} − 10t.",
        "**İki terimli × iki terimli:** Birinci paranteze ait her terim ikinci parantezdeki her terimle çarpılır (dört çarpım), sonra benzer terimler birleşir.",
        "**Alan modeli:** Kenarları (a + b) ve (c + d) olan dikdörtgen dört parçaya bölünür; parçaların alanları toplanır. Cebir karolarında büyük kare x^{2}, uzun dikdörtgen x, küçük kare 1 birimdir; karoların sayısı ifadenin katsayılarını verir.",
      ],
      tablo: "<table class=\"tablo\"><tr><th>(k + 4) · (3k − 1)</th><th>3k</th><th>−1</th></tr><tr><th>k</th><td>3k<sup>2</sup></td><td>−k</td></tr><tr><th>4</th><td>12k</td><td>−4</td></tr></table>",
      ornekler: [
        "(k + 4)(3k − 1) = 3k^{2} − k + 12k − 4 = 3k^{2} + 11k − 4. Kontrol: k = 1 için (5)(2) = 10 ve 3 + 11 − 4 = 10.",
        "İki harfli örnek: (2m + n)(m − 3n) = 2m^{2} − 6mn + mn − 3n^{2} = 2m^{2} − 5mn − 3n^{2}. mn'li iki terim benzerdir, birleşir; sonuç üç terimlidir.",
      ],
      dikkat: [
        "**İşaret hatası.** Eksi terimle çarpınca işarete dikkat et: (−1) · 6 = −6; (−3) · (−2) = +6.",
        "**Katsayıları toplamak.** 2a · 3a = 6a^{2}'dir; 5a^{2} değil. Çarpmada katsayılar çarpılır, toplama yalnızca benzer terimlerde olur.",
      ]
    },
    {
      baslik: "İki özdeşlik",
      maddeler: [
        "**Özdeşlik**, harflere hangi sayıyı verirsen ver doğru olan eşitliktir.",
        "**Tam kare açılımı:** (a + b)^{2} = a^{2} + 2ab + b^{2} ve (a − b)^{2} = a^{2} − 2ab + b^{2}. Ortadaki terim her zaman **iki katı çarpım** (2ab) olur; son terim her zaman artıdır.",
        "**İki kare farkı:** a^{2} − b^{2} = (a − b)(a + b). Çarpımda ortadaki iki terim birbirini götürür.",
        "**Alan modeli:** Kenarı (a + b) olan kare; a^{2} alanlı bir kare, b^{2} alanlı bir kare ve ab alanlı iki dikdörtgenden oluşur. Bu yüzden ortada 2ab vardır.",
        "Katsayılı terimlerde terimin hepsinin karesi alınır: (5p − 2)^{2} = (5p)^{2} − 2 · 5p · 2 + 2^{2} = 25p^{2} − 20p + 4.",
        "a ve b iki terimli bir ifade de olabilir: (3x + 4)^{2} − (x + 2)^{2} = [(3x + 4) − (x + 2)] · [(3x + 4) + (x + 2)] = (2x + 2)(4x + 6). Birinci köşeli parantezde eksi, parantezdeki her terimi etkiler."
      ],
      tablo: "<table class=\"tablo\"><tr><th>İfade</th><th>Açılımı</th><th>Orta terim</th></tr><tr><td>(m + 6)<sup>2</sup></td><td>m<sup>2</sup> + 12m + 36</td><td>2 · m · 6 = +12m</td></tr><tr><td>(m − 6)<sup>2</sup></td><td>m<sup>2</sup> − 12m + 36</td><td>−12m</td></tr><tr><td>(m − 6)(m + 6)</td><td>m<sup>2</sup> − 36</td><td>yok (götürülür)</td></tr></table>",
      dikkat: [
        "**(a + b)^{2} ≠ a^{2} + b^{2}.** (x + 4)^{2} açılırken ortadaki 8x terimi unutulmaz; x = 1 için 25 eder, 1 + 16 = 17 değil.",
        "**Son terimin işareti.** (x − 9)^{2} = x^{2} − 18x + 81'dir; son terim +81, çünkü (−9)^{2} = 81.",
      ]
    },
    {
      baslik: "Çarpanlara ayırma: üç yöntem",
      maddeler: [
        "**Çarpanlara ayırma, çarpmanın tersidir:** toplam biçimindeki ifade çarpım biçimine getirilir. Programda yalnızca üç yöntem vardır.",
        "**1) Ortak çarpan parantezi:** Bütün terimleri bölen en büyük sayı ve ortak harfler dışarı alınır, her terim ona bölünüp parantez içine yazılır: 8m^{2} + 12m = 4m(2m + 3).",
        "**2) İki kare farkı:** İki terim, ikisi de bir ifadenin karesi ve aralarında eksi varsa: 9k^{2} − 64 = (3k)^{2} − 8^{2} = (3k − 8)(3k + 8).",
        "**3) Tam kare:** Üç terimden ilk ve son terim birer karedir ve ortadaki terim, işaretine bakmadan, köklerin çarpımının 2 katıdır: k^{2} − 14k + 49 = (k − 7)^{2}; ortadaki terimin işareti parantezdeki işareti belirler.",
        "**Sıra:** Önce ortak çarpan var mı bak, sonra kalan ifadeye kare farkı ya da tam kare uygula: 3p^{2} − 27 = 3(p^{2} − 9) = 3(p − 3)(p + 3). İşin sonunda parantez çarpılınca ilk ifadeyi bulmalısın (sağlama).",
        "Çarpanlara ayrılmış biçim hesabı kolaylaştırır: 61^{2} − 39^{2} = (61 − 39)(61 + 39) = 22 · 100 = 2200. Ya da 99^{2} = (100 − 1)^{2} = 10000 − 200 + 1 = 9801. Bir ifadenin değerini sorarlarsa önce çarpanlara ayır, sonra sayıyı yaz: x^{2} − 8x + 16 = (x − 4)^{2} olduğundan x = 84 için 80^{2} = 6400.",
        "Ortak çarpan, çarpanlardan birinin içine katılabilir: 3(x − 2)(x + 2) = (3x − 6)(x + 2). Alan ya da gelir ifadesi çarpanlarına ayrılınca bilinen kenarın (ya da adedin) dışında kalan çarpanlar diğer kenarı (ya da fiyatı) verir."
      ],
      dikkat: [
        "**Ortak çarpanı eksik almak.** 12a + 18 için 2(6a + 9) kısmen doğrudur ama en büyük ortak çarpan 6'dır: 6(2a + 3). Parantezin içinde hâlâ ortak çarpan kalmamalı.",
        "**Tam kareyi kare farkı gibi yazmak.** n^{2} + 10n + 25 = (n + 5)^{2}'dir; (n − 5)(n + 5) değildir. Ortada terim varsa kare farkı olamaz.",
      ]
    },
    {
      baslik: "Özdeşlikle problem çözme",
      maddeler: [
        "Şekilli sorularda önce alanı iki yoldan düşün: bütün alan eksi kesilen parça, ya da parçaların toplamı. Çerçeve, yol ve kesilen köşe soruları böyle çözülür.",
        "Alan bir karenin alanıysa kenar o ifadenin kareköküdür; çevre bu kenarın 4 katıdır. Dikdörtgende çevre, komşu iki kenar toplamının 2 katıdır.",
        "**Çerçeve ve şerit:** Çerçeve her yanda k birim kalınlıktaysa dış kenar iç kenardan 2k fazladır (iki karşılıklı yan). Yalnızca iki komşu kenara şerit eklenirse kenar k kadar artar. Köşelerdeki küçük kareleri unutma.",
        "**Kısaltıp uzatma:** Karenin bir kenarını k kısaltıp komşu kenarını k uzatırsan çevre değişmez ama alan k^{2} azalır: (a − k)(a + k) = a^{2} − k^{2}.",
        "**Toplam ve çarpım verilince:** a + b = 10 ve ab = 21 ise a^{2} + b^{2} = (a + b)^{2} − 2ab = 100 − 42 = 58. Denklem çözmeden yalnızca özdeşlik kullanırsın.",
        "Büyük bir sayının karesi gelirse sayıyı yuvarlak sayı ile küçük sayıya ayır: 62^{2} = (60 + 2)^{2} = 3600 + 240 + 4 = 3844.",
      ],
      dikkat: [
        "**Alan farkını kenar farkıyla karıştırmak.** 12^{2} − 8^{2} = (12 − 8)(12 + 8) = 80'dir; (12 − 8)^{2} = 16 değildir."
      ]
    }
  ],
  lgs: [
    "Kenarları cebirsel ifade olan bir şekilde (bahçe, çerçeve, kesilen köşe) alan ya da çevre ifadesi sorulur. Alanı çarpıp sadeleştir; çeldiriciler dört çarpımdan birini unutmaktan, eksi işaretini kaçırmaktan ya da çevreyi yarım bırakmaktan gelir.",
    "Dört eşitlikten hangisinin özdeşlik olduğu ya da hangisinin yanlış olduğu sorulur. Ortadaki 2ab terimi, son terimin işareti ve katsayının karesi en sık kurulan tuzaklardır; her seçeneğe x = 1 yazarak da deneyebilirsin.",
    "Bir alan ifadesi verilir, çarpanlara ayrılarak bilinmeyen kenar ya da çevre bulunur. Önce ortak çarpanı, sonra kare farkı ya da tam kareyi ara; ortak çarpanı unutan şık hep vardır.",
    "Büyük sayılarla işlem hesap makinesiz yaptırılır (62^{2}, 71^{2} − 29^{2}). Sayıyı özdeşliğe uyan biçimde yaz ve sonunda istenen büyüklüğe (alan, çevre, maliyet) dön."
  ],
  yokla: [
    { soru: "7n^{2} − n + 4 ifadesinin katsayılar toplamı kaçtır?", cevap: "10. Katsayılar 7, −1 ve 4'tür; sabit terim de katsayıdır. n = 1 yazınca da 7 − 1 + 4 = 10 çıkar." },
    { soru: "(4k − 3)^{2} ifadesini aç.", cevap: "16k^{2} − 24k + 9. Orta terim 2 · 4k · 3 = 24k ve fark karesinde eksi, son terim +9." },
    { soru: "(t + 11)(t − 11) çarpımı neye eşittir?", cevap: "t^{2} − 121. Ortadaki +11t ile −11t birbirini götürür; iki kare farkı özdeşliğidir." },
    { soru: "6m^{2} + 15m ifadesini çarpanlarına ayır.", cevap: "3m(2m + 5). 6 ile 15'in en büyük ortak çarpanı 3, m^{2} ile m'nin ortak çarpanı m'dir." },
    { soru: "2x^{2} − 32 ifadesini çarpanlarına ayır.", cevap: "2(x − 4)(x + 4). Önce 2 ortak çarpan olarak alınır, kalan x^{2} − 16 iki kare farkıdır." },
    { soru: "(a + b)^{2} ile a^{2} + b^{2} aynı mıdır?", cevap: "Hayır. (a + b)^{2} = a^{2} + 2ab + b^{2}'dir; ortadaki 2ab terimi olduğu için fark vardır (a = 1, b = 2 için 9 ve 5)." }
  ]
};
