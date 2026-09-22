window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["uslu-ifadeler"] = {
  kazanimlar: ["M.8.1.2.1", "M.8.1.2.2", "M.8.1.2.3", "M.8.1.2.4", "M.8.1.2.5"],
  giris: "Üslü ifade, aynı sayının tekrar tekrar çarpımını kısaca yazmanın yoludur. Sınavda senden negatif tabanlı ve negatif üslü ifadeleri hesaplamanı, üs kurallarıyla denk ifadeler kurmanı, ondalık sayıları 10'un kuvvetleriyle çözümlemeni ve çok büyük ya da çok küçük sayıları bilimsel gösterimle yazıp karşılaştırmanı isterler. Bu özeti okuyunca hangi işlemde üslerin toplandığını, hangisinde çıkarıldığını ve eksi işaretinin nereden geldiğini karıştırmayacaksın.",
  bolumler: [
    {
      baslik: "Üs ne demek?",
      maddeler: [
        "a^{n} ifadesinde a **taban**, n **üs**tür. Üs, tabanın kaç kez çarpan olduğunu gösterir: 5^{3} = 5 · 5 · 5 = 125.",
        "Sıfırdan farklı her sayının 0. kuvveti 1'dir: 12^{0} = 1, (−5)^{0} = 1. Her sayının 1. kuvveti kendisidir. 1'in bütün kuvvetleri 1'dir.",
        "**İşlem önceliği:** Önce üsler, sonra çarpma-bölme, en son toplama-çıkarma: 3 + 2^{3} = 3 + 8 = 11.",
        "Her adımda aynı sayıyla çarpılan durumlar üslü sayı üretir: her gün 3 katına çıkan bir şey n gün sonra başlangıcın 3^{n} katıdır. Başlangıç durumunu bir adım sayma.",
        "Bir sayının kuvvetlerinde **birler basamağı** tekrar eder: 7'nin kuvvetlerinde bu rakam 7, 9, 3, 1, 7, 9, … diye dörder dörder yinelenir. Büyük bir üste birler basamağını bulmak için üssü tekrar uzunluğuna böl, kalana bak; kalan 0 ise tekrarın son rakamı görünür."
      ],
      dikkat: [
        "**Üs, tabanla çarpılmaz:** 5^{3} sayısı 5 · 3 = 15 değildir. **Taban ile üs yer değiştirmez:** 2^{5} = 32 ama 5^{2} = 25."
      ]
    },
    {
      baslik: "Negatif taban ve işaret",
      maddeler: [
        "Negatif tabanın **çift** kuvveti pozitif, **tek** kuvveti negatiftir: (−5)^{2} = 25, (−5)^{3} = −125.",
        "(−1)'in kuvvetleri yalnızca işareti belirler: (−1)^{çift} = 1, (−1)^{tek} = −1. Bir çarpanı (−1)'in kuvveti olan ifadelerde bu çarpan sonucun büyüklüğünü değil yalnızca işaretini değiştirir.",
        "Pozitif tabanın her kuvveti pozitiftir."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Yazılış</th><th>Üs neye etki eder?</th><th>Değer</th></tr><tr><td>(−5)<sup>2</sup></td><td>Parantezin tamamına: (−5) · (−5)</td><td>25</td></tr><tr><td>−5<sup>2</sup></td><td>Yalnızca 5'e, eksi dışarıda kalır</td><td>−25</td></tr><tr><td>(−5)<sup>3</sup></td><td>Parantezin tamamına, üs tek</td><td>−125</td></tr><tr><td>−5<sup>3</sup></td><td>Yalnızca 5'e</td><td>−125</td></tr></table>",
      dikkat: [
        "**−5^{2} ile (−5)^{2} aynı değildir.** Parantez yoksa eksi işareti kuvvete girmez.",
        "**Tek kuvvette işareti kaybetme.** (−2)^{5} = −32'dir. Önce işareti belirle (üs tek mi çift mi?), sonra sayıyı hesapla.",
        "Negatif bir sayı çıkarılırken işaret değişir: 10 − (−3)^{3} = 10 + 27 = 37."
      ]
    },
    {
      baslik: "Negatif üs",
      maddeler: [
        "Negatif üs, tabanın çarpmaya göre tersini alır: a^{−n} = [[1|a^{n}]]. Örnek: 3^{−2} = [[1|3^{2}]] = [[1|9]]. Tersi de doğrudur: [[1|4^{−1}]] = 4.",
        "Negatif üs sayıyı **negatif yapmaz**: 2^{−4} = [[1|16]] pozitiftir. Taban negatifse işareti yine üssün tek ya da çift olması belirler: (−3)^{−2} = [[1|9]].",
        "Kesrin negatif kuvvetinde kesir ters çevrilir, üs pozitif olur: ([[2|3]])^{−2} = ([[3|2]])^{2} = [[9|4]].",
        "10'un negatif kuvvetleri ondalık sayıdır: 10^{−1} = 0,1; 10^{−2} = 0,01; 10^{−3} = 0,001. Üs kaçsa virgülden sonra o kadar basamak vardır.",
        "Tabanı 1'den büyük bir sayıda üs küçüldükçe sayı küçülür: 2^{−1} = [[1|2]] sayısı 2^{−2} = [[1|4]] sayısından büyüktür. **Payları eşit** kesirlerde paydası büyük olan küçüktür."
      ],
      dikkat: [
        "**Negatif üssü eksi sayı sanma.** 5^{−2} ne −25 ne de −10'dur; 5^{−2} = [[1|25]].",
        "**2^{0} sıfır değildir.** Sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir."
      ]
    },
    {
      baslik: "Üs kuralları",
      maddeler: [
        "Kurallar **aynı tabanlı** çarpma-bölmede ya da **aynı üslü** çarpımlarda çalışır. Negatif üslerde de geçerlidir: 5^{−2} ÷ 5^{−6} = 5^{−2−(−6)} = 5^{4}.",
        "**Tabanı eşitle:** 4 = 2^{2}, 8 = 2^{3}, 16 = 2^{4}, 9 = 3^{2}, 27 = 3^{3}, 25 = 5^{2}. Farklı tabanları aynı tabana çevirince kurallar işler: 8^{2} · 4^{3} = 2^{6} · 2^{6} = 2^{12}.",
        "Tabanları aynı iki üslü sayı eşitse üsleri de eşittir: 2^{a} = 2^{9} ise a = 9'dur.",
        "**Karşılaştırma:** Tabanlar aynıysa (ve 1'den büyükse) üssü büyük olan büyüktür; üsler aynıysa tabanı büyük olan büyüktür. İkisi de farklıysa ortak üs yakala: 5^{20} = (5^{2})^{10} = 25^{10} ve 3^{30} = (3^{3})^{10} = 27^{10} olduğundan 3^{30} daha büyüktür."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Kural</th><th>Ne yaparsın?</th><th>Örnek</th></tr><tr><td>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></td><td>Çarpmada üsleri topla</td><td>7<sup>2</sup> · 7<sup>5</sup> = 7<sup>7</sup></td></tr><tr><td>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></td><td>Bölmede üstteki üsten alttakini çıkar</td><td>6<sup>9</sup> ÷ 6<sup>4</sup> = 6<sup>5</sup></td></tr><tr><td>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></td><td>Üssün üssünde üsleri çarp</td><td>(5<sup>2</sup>)<sup>3</sup> = 5<sup>6</sup></td></tr><tr><td>(a · b)<sup>n</sup> = a<sup>n</sup> · b<sup>n</sup></td><td>Üs her çarpana dağılır</td><td>(2 · 7)<sup>3</sup> = 2<sup>3</sup> · 7<sup>3</sup></td></tr><tr><td>(a ÷ b)<sup>n</sup> = a<sup>n</sup> ÷ b<sup>n</sup></td><td>Üs paya da paydaya da dağılır</td><td>(10 ÷ 2)<sup>3</sup> = 10<sup>3</sup> ÷ 2<sup>3</sup></td></tr></table>",
      dikkat: [
        "**Toplamada üsler toplanmaz.** 3^{2} + 3^{3} = 9 + 27 = 36'dır, 3^{5} değil. Toplama ve çıkarmada önce her kuvveti hesapla.",
        "**Tabanları da çarpma.** 5^{3} · 5^{4} = 5^{7}'dir, 25^{7} değil.",
        "**Tabanı çevirirken üssü unutma.** 9^{4} = (3^{2})^{4} = 3^{8}'dir, 3^{4} değil."
      ]
    },
    {
      baslik: "Ondalık gösterimi 10'un kuvvetleriyle çözümleme",
      maddeler: [
        "Çözümlemede her rakam, basamağının 10'un kuvvetiyle çarpılır ve terimler toplanır. Birler basamağı 10^{0}'dır; sola doğru üs birer artar, sağa doğru birer azalır.",
        "Rakamı 0 olan basamağın terimi yazılmaz; ama sayıyı geri yazarken o basamağa 0 koymayı unutma.",
        "Komşu iki basamağın basamak değerleri arasında **10 kat** fark vardır; iki basamak uzaktaysa 100 kat, üç basamak uzaktaysa 1000 kat. Kaç kat olduğunu bulmak için aradaki basamak sayısını say.",
        "Birim çevirmede de aynı basamaklar işe yarar: 1 m = 10^{2} cm = 10^{3} mm, 1 g = 10^{3} mg."
      ],
      tablo: "<table class=\"tablo\"><tr><th>Basamak</th><th>Kuvvet</th><th>Değeri</th></tr><tr><td>onlar</td><td>10<sup>1</sup></td><td>10</td></tr><tr><td>birler</td><td>10<sup>0</sup></td><td>1</td></tr><tr><td>onda birler</td><td>10<sup>−1</sup></td><td>0,1</td></tr><tr><td>yüzde birler</td><td>10<sup>−2</sup></td><td>0,01</td></tr><tr><td>binde birler</td><td>10<sup>−3</sup></td><td>0,001</td></tr></table>",
      ornekler: [
        "50,36 = 5 · 10^{1} + 3 · 10^{−1} + 6 · 10^{−2}. Birler basamağı 0 olduğu için 10^{0} terimi yoktur.",
        "Geri yazarken: 7 · 10^{1} + 4 · 10^{−3} = 70,004."
      ],
      dikkat: [
        "**Birler basamağı 10^{1} değil 10^{0}'dır.** Basamakları 1'den saymaya başlarsan bütün üsler kayar.",
        "**Virgülden sonra üs negatiftir:** 0,3 = 3 · 10^{−1}; 3 · 10^{1} ise 30 eder.",
        "**Boş basamağı atlama.** 9 · 10^{0} + 2 · 10^{−2} = 9,02'dir, 9,2 değil."
      ]
    },
    {
      baslik: "10'un farklı kuvvetleri ve bilimsel gösterim",
      maddeler: [
        "Aynı sayı birçok biçimde yazılabilir: 4300 = 43 · 10^{2} = 430 · 10^{1} = 4,3 · 10^{3} = 0,43 · 10^{4}.",
        "**Denge kuralı:** Baştaki sayı 10 katına çıkarsa üs 1 azalır; 10'a bölünürse üs 1 artar. Virgül kaç basamak kayarsa üs o kadar değişir.",
        "**Bilimsel gösterim** a · 10^{n} biçimidir; burada n bir tam sayı, a ise 1 ile 10 arasında (1 dahil, 10 hariç) pozitif bir sayıdır. a sayısına **başkatsayı** denir.",
        "1'den büyük sayılarda üs pozitif, 1'den küçük pozitif sayılarda negatiftir: 52 000 = 5,2 · 10^{4}; 0,0071 = 7,1 · 10^{−3}.",
        "**Karşılaştırma:** Önce 10'un üssüne bak, üssü büyük olan büyüktür; üsler eşitse başkatsayıya bak. 9,9 · 10^{5} sayısı 1,1 · 10^{6} sayısından küçüktür. Değerler farklı birimlerde verilmişse (mm, cm, m) önce hepsini aynı birime çevir, üslere ondan sonra bak.",
        "**Çarpma-bölme:** Baştaki sayıları kendi arasında çarp ya da böl, 10'un kuvvetlerini kurala göre birleştir, sonra baştaki sayıyı 1 ile 10 arasına getir: (4 · 10^{5}) · (5 · 10^{3}) = 20 · 10^{8} = 2 · 10^{9}.",
        "**Toplama-çıkarma:** Önce iki sayıyı aynı kuvvete getir: 2,6 · 10^{6} + 7 · 10^{5} = 2,6 · 10^{6} + 0,7 · 10^{6} = 3,3 · 10^{6}."
      ],
      dikkat: [
        "**73 · 10^{2} bilimsel gösterim değildir** (73 sayısı 10'dan büyük); **0,6 · 10^{5}** de değildir (0,6 sayısı 1'den küçük). Değerleri doğru olabilir, gösterimleri bilimsel değildir.",
        "**Yalnızca baştaki sayılara bakıp sıralama.** Önce üslere bak: 9 · 10^{−6} sayısı 2 · 10^{−5} sayısından küçüktür.",
        "**Üssü ters yönde değiştirme.** Baştaki sayı büyürse üs küçülmeli: 0,8 · 10^{7} = 8 · 10^{6} = 80 · 10^{5}; üçü de aynı sayıdır."
      ]
    }
  ],
  lgs: [
    "Bir miktar her adımda aynı sayıyla çarpılır ya da bölünür (katlama, dallanma, sıkıştırma); adım sayısını ya da sonucu üslü ifadeyle bulman istenir. Çeldiriciler bir adım eksik veya fazla saymaktan gelir.",
    "Dört işlem ya da dört eşitlik verilir, “hangisi yanlıştır” veya “hangisi ötekilere denktir” diye sorulur. Hepsini aynı tabana çevirip üsleri karşılaştır.",
    "Bilimsel gösterimli iki büyüklükle çarpma ya da bölme yaptırılır (kaç katı, kaç tane sığar); araya birim çevirme de eklenir. Sonucu bilimsel gösterime düzeltmeyi unutma.",
    "Ondalık çözümleme sorularında eksik basamak, yanlış yazılmış terim ya da çözümlenmiş sayıların toplamı sorulur; çeldiriciler basamağı bir kaydırmaktan gelir."
  ],
  yokla: [
    { soru: "(−2)^{4} ile −2^{4} kaçtır?", cevap: "(−2)^{4} = 16 ve −2^{4} = −16. Parantez yoksa eksi işareti kuvvete girmez." },
    { soru: "4^{−2} kaçtır?", cevap: "[[1|16]]. Negatif üs tabanın tersini alır: 4^{−2} = [[1|4^{2}]]." },
    { soru: "9^{3} · 3^{2} ifadesini 3'ün kuvveti olarak yaz.", cevap: "3^{8}. Önce tabanı eşitle: 9^{3} = (3^{2})^{3} = 3^{6}; sonra 3^{6} · 3^{2} = 3^{8}." },
    { soru: "0,00058 sayısını bilimsel gösterimle yaz.", cevap: "5,8 · 10^{−4}. Virgül 4 basamak sağa kayar; sayı 1'den küçük olduğu için üs negatiftir." },
    { soru: "6 · 10^{1} + 2 · 10^{−2} hangi sayıdır?", cevap: "60,02. Birler ve onda birler basamağının terimi yok, oralara 0 yazılır." }
  ]
};
