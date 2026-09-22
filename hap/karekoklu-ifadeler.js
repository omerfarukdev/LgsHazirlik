window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["karekoklu-ifadeler"] = {
  kazanimlar: ["M.8.1.3.1", "M.8.1.3.2", "M.8.1.3.3", "M.8.1.3.4", "M.8.1.3.5", "M.8.1.3.6", "M.8.1.3.7", "M.8.1.3.8"],
  giris: "Karekök, karesi verilen sayıya eşit olan negatif olmayan sayıdır; alanı bilinen bir karenin kenarını bulmak gibi düşün. Sınavda tam kareleri tanıman, bir kökün hangi iki doğal sayı arasında olduğunu bulman, kökleri a√{b} biçiminde yazıp dört işlem yapman ve bir sayının rasyonel mi irrasyonel mi olduğuna karar vermen istenir. Hepsi tek bir alışkanlığa dayanır: kök içini çarpanlarına ayır.",
  bolumler: [
    {
      baslik: "Tam kareler ve karekök",
      maddeler: [
        "Bir doğal sayının kendisiyle çarpımı **tam kare** sayıdır. Ezberle: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400.",
        "√{a}, karesi a olan negatif olmayan sayıdır: √{81} = 9, çünkü 9^{2} = 81. Kare almakla karekök almak birbirinin tersidir.",
        "Alanı A olan karenin bir kenarı √{A}, çevresi 4 · √{A}'dır. Kare biçimli bir dizilimde de toplamın karekökü bir kenardaki nesne sayısını verir.",
        "Bir sayının tam kare olup olmadığını asal çarpanlarından anlarsın: bütün üsler çiftse tam karedir. 324 = 2^{2} · 3^{4} tam karedir; 48 = 2^{4} · 3 değildir.",
        "Kenar k katına çıkarsa alan k^{2} katına çıkar."
      ],
      dikkat: [
        "**Karekök almak ikiye bölmek değildir.** √{64} = 8'dir, 32 değil. Sağlama için sonucun karesini al.",
        "**İki çarpana ayrılması sayıyı tam kare yapmaz.** Tam kare, **eşit** iki doğal sayının çarpımıdır: 36 = 6 · 6 tam karedir, 42 = 6 · 7 değildir.",
        "**Alan ile çevreyi karıştırma.** Alanın birimi m², kenarın ve çevrenin birimi m'dir. Çevre için önce karekök al, sonra 4 ile çarp."
      ]
    },
    {
      baslik: "Tam kare olmayan kökü tahmin etme",
      maddeler: [
        "Sayının hemen altındaki ve üstündeki tam kareyi bul: 58 sayısı 49 ile 64 arasında olduğundan √{58} sayısı 7 ile 8 arasındadır.",
        "Hangi doğal sayıya daha yakın olduğunu uzaklıklara bakarak bulursun: 58, 49'dan 9 fazla, 64'ten 6 eksiktir; öyleyse √{58} sayısı 8'e daha yakındır.",
        "Ondalık tahmin için adayların karesini al: 7,6^{2} = 57,76 olduğundan √{58} ≈ 7,6'dır.",
        "Ters soru: karekökü 9 ile 10 arasında olan doğal sayılar 82, 83, …, 99'dur; sayısı 99 − 82 + 1 = 18'dir. İki ucu dahil bir aralıktaki tam sayıların sayısı büyük − küçük + 1'dir."
      ],
      dikkat: [
        "**Sınırı dahil etme ya da dışarıda bırakma.** “Arasında”, “büyük”, “küçük” sınırı kapsamaz; “en az”, “en fazla” kapsar. 81 ve 100'ün karekökleri tam sayıdır, aralığa girmez."
      ]
    },
    {
      baslik: "a√{b} biçimi",
      maddeler: [
        "**Kök dışına çıkarma:** Kök içini, biri **en büyük tam kare** olan iki çarpana ayır; tam karenin karekökü dışarı çıkar: √{112} = √{16 · 7} = 4√{7}.",
        "En büyük tam kareyi göremezsen küçüğüyle başla ve tekrarla: √{112} = √{4 · 28} = 2√{28} = 2 · 2√{7} = 4√{7}.",
        "**Kök içine alma:** Dışarıdaki katsayının **karesi** içeri girer: a√{b} = √{a^{2} · b}. Örnek: 2√{11} = √{4 · 11} = √{44}.",
        "**Karşılaştırma:** Katsayılı kökleri ya da bir tam sayıyla bir kökü karşılaştırmak için hepsini tek kök altına al: 2√{15} = √{60} ve 8 = √{64} olduğundan 2√{15} sayısı 8'den küçüktür."
      ],
      dikkat: [
        "**Dışarı çıkan sayı, çarpanın kareköküdür.** √{112} = √{16 · 7} ayrımında dışarı 16 değil 4 çıkar.",
        "**İçeri giren sayı, katsayının karesidir.** 2√{11} ifadesinde içeri 2 değil 4 girer.",
        "**Katsayısı büyük olan her zaman büyük olmaz:** 4√{2} = √{32} sayısı √{40}'tan küçüktür; karar vermek için hepsini tek kök altına al. Kök içinde tam kare çarpan kaldıysa sadeleştirme bitmemiştir: 2√{28} en sade biçim değildir."
      ]
    },
    {
      baslik: "Dört işlem",
      maddeler: [
        "İşlemden önce her kökü sadeleştir; çoğu soru bu adımdan sonra kendiliğinden çözülür.",
        "**Çarpmada katsayılar katsayılarla, kök içleri kök içleriyle çarpılır:** a√{b} · c√{d} = ac√{b · d}. Bölmede de ikisi ayrı ayrı bölünür. Sonucu her zaman sadeleştir.",
        "Toplama ve çıkarmada yalnızca **kök içleri aynı** terimler birleşir; katsayılar toplanır, kök içi aynen kalır: √{20} + √{45} = 2√{5} + 3√{5} = 5√{5}. Ortak kök çıkmazsa ifade olduğu gibi kalır: √{2} + √{3} birleşmez.",
        "Bir kök kendisiyle çarpılırsa kök içi kalır: √{13} · √{13} = 13. Buna göre (3√{2})^{2} = 9 · 2 = 18'dir.",
        "Paydada tek bir kök kalırsa pay ile paydayı o kökle çarp, paydayı kökten kurtar: [[10|√{5}]] = [[10√{5}|5]] = 2√{5}. Paydasında iki terim bulunan ifadeler (√{5} + 1 gibi) programında yoktur.",
        "Dikdörtgende bir kenar, alanın öteki kenara bölümüdür.",
        "**Aralık sayma:** İki ucunda da nesne bulunan düz bir kenarda nesne sayısı aralık sayısından **1 fazladır**: 12 m'lik kenara 2 m arayla 6 + 1 = 7 direk dikilir. Kapalı bir çevrede (bir şeklin dört kenarı boyunca) nesne sayısı aralık sayısına **eşittir**; köşeleri iki kez sayma."
      ],
      tablo: "<table class=\"tablo\"><tr><th>İşlem</th><th>Kural</th><th>Örnek</th></tr><tr><td>Çarpma</td><td>Katsayılar katsayılarla, kök içleri kök içleriyle</td><td>2<span class=\"kok\">√<span class=\"kok-ic\">3</span></span> · 5<span class=\"kok\">√<span class=\"kok-ic\">6</span></span> = 10<span class=\"kok\">√<span class=\"kok-ic\">18</span></span> = 30<span class=\"kok\">√<span class=\"kok-ic\">2</span></span></td></tr><tr><td>Bölme</td><td>Katsayılar ve kök içleri ayrı ayrı bölünür</td><td>12<span class=\"kok\">√<span class=\"kok-ic\">10</span></span> ÷ 4<span class=\"kok\">√<span class=\"kok-ic\">2</span></span> = 3<span class=\"kok\">√<span class=\"kok-ic\">5</span></span></td></tr></table>",
      dikkat: [
        "**Kök içleri toplanmaz.** √{9} + √{16} = 3 + 4 = 7'dir; √{25} = 5 değil.",
        "**Çarpmada kök içleri çarpılır, toplanmaz:** √{2} · √{8} = √{16} = 4'tür, √{10} değil.",
        "**Son karekökü almayı unutma.** √{5} · √{45} = √{225} = 15'tir, 225 değil.",
        "**Katsayıları çarpma.** 2√{7} + 4√{7} = 6√{7}'dir; 8√{7} ya da 6√{14} değil."
      ]
    },
    {
      baslik: "Sonucu doğal sayı yapan çarpan",
      maddeler: [
        "√{a} · √{k} bir doğal sayıysa a · k tam karedir. Bu yüzden a'yı asal çarpanlarına ayır ve **üssü tek kalan** çarpanları tamamla.",
        "Örnek: 63 = 3^{2} · 7 olduğundan eksik çarpan 7'dir: √{63} · √{7} = √{441} = 21. En küçük uygun değer k = 7'dir.",
        "Uygun bütün değerler, en küçük değerin tam karelerle çarpımıdır: 7, 7 · 4 = 28, 7 · 9 = 63, … Sayının kendisi de işe yarar, çünkü √{a} · √{a} = a'dır.",
        "Çarpanın kendisinin tam kare olması gerekmez; tam kare olması gereken **çarpımdır**."
      ],
      dikkat: [
        "**Tam kare bir sayıyla çarpmak kökü yok etmez.** √{63} · √{4} = √{252} = 6√{7} doğal sayı değildir; eksik olan 7 tamamlanmamıştır.",
        "**İstenen sonucu kök içine yazma.** √{a} · √{k} = 12 isteniyorsa a · k çarpımı 144 olmalıdır, 12 değil."
      ]
    },
    {
      baslik: "Ondalık sayıların karekökü",
      maddeler: [
        "Ondalık sayıyı kesre çevir: payı da paydası da tam kareyse karekök kolayca bulunur. √{0,49} = √{[[49|100]]} = [[7|10]] = 0,7.",
        "Kısa yol: virgülden sonraki basamak sayısı çift olmalı, karekökte bu sayı yarıya iner. √{0,0036} = 0,06 (dört basamak, karekökte iki basamak).",
        "Her ondalık sayının karekökü tam çıkmaz: 0,4 = [[40|100]] ve 40 tam kare olmadığından √{0,4} sonlu bir ondalık sayı değildir; 0,2 da değildir, çünkü 0,2^{2} = 0,04'tür.",
        "Sonucu her zaman kare alarak doğrula: 1,3^{2} = 1,69 olduğundan √{1,69} = 1,3'tür."
      ],
      dikkat: [
        "**Virgülü yanlış kaydırma.** √{0,25} = 0,5'tir, 0,05 değil; çünkü 0,05^{2} = 0,0025 eder.",
        "**Birim çevirmeyi atlama.** Kenar 0,6 m çıktıysa bu 60 cm'dir (1 m = 100 cm)."
      ]
    },
    {
      baslik: "Rasyonel, irrasyonel, gerçek sayılar",
      maddeler: [
        "**Rasyonel sayı,** iki tam sayının oranı biçiminde yazılabilen sayıdır: 5 = [[5|1]], 0,75 = [[3|4]], 0,333… = [[1|3]]. Bütün doğal sayılar, tam sayılar, kesirler, sonlu ve devirli ondalıklar rasyoneldir.",
        "**İrrasyonel sayı,** iki tam sayının oranı olarak yazılamayan sayıdır; ondalık gösterimi ne biter ne de düzenli tekrar eder.",
        "Tam kare olmayan doğal sayıların karekökleri irrasyoneldir: √{2}, √{7}, √{20}. Sadeleşmesi bunu değiştirmez: √{20} = 2√{5} yine irrasyoneldir.",
        "Kök işareti görmek yetmez, önce işlemi yap: √{49} = 7 ve √{2} · √{32} = 8 rasyoneldir.",
        "**π irrasyoneldir.** İşlem kolaylığı için yerine 3; 3,14 ya da [[22|7]] alınır; bunlar yaklaşık değerlerdir.",
        "**Gerçek sayılar (ℝ)** rasyonel ve irrasyonel sayıların tamamıdır: her rasyonel ve her irrasyonel sayı gerçektir, ama her gerçek sayı rasyonel değildir."
      ],
      dikkat: [
        "**Ondalık görünen her kök irrasyonel değildir.** √{1,96} = 1,4 rasyoneldir; √{1,6} ise irrasyoneldir, çünkü 1,6 = [[160|100]] ve 160 tam kare değildir.",
        "**[[22|7]] ve 3,14 sayıları π'ye eşit değildir;** ikisi de rasyoneldir."
      ]
    }
  ],
  lgs: [
    "Kare ya da dikdörtgen biçimli bir nesnenin alanı verilir; kenar, çevre ya da kaç parça çıktığı istenir. Çeldiriciler karekök yerine ikiye bölmekten, çevre yerine tek kenarı yazmaktan gelir. **Kaç paket, kaç rulo gerekir** diye sorulduğunda kalan varsa bir fazlasını al; **kaç tane sığar, kaç tanesi yapılabilir** diye sorulduğunda kalanı at.",
    "“Karekökü şu iki sayı arasında olan kaç doğal sayı vardır” gibi sorularda uç değerleri tek tek denetle.",
    "Tabloda dört kareköklü ifade verilir; sıralama, en büyüğü ya da hangisinin rasyonel olduğu sorulur. Hepsini tek kök altına al ya da sadeleştir.",
    "“Hangisiyle çarpılırsa sonuç doğal sayı olur” sorularında kök içini asal çarpanlarına ayır, üssü tek kalan çarpanı tamamla."
  ],
  yokla: [
    { soru: "√{130} hangi iki ardışık doğal sayı arasındadır, hangisine daha yakındır?", cevap: "11 ile 12 arasında, 11'e daha yakın: 130 sayısı 121'den 9 fazla ama 144'ten 14 eksiktir." },
    { soru: "√{200} ifadesini a√{b} biçiminde yaz.", cevap: "10√{2}. 200 = 100 · 2 ve √{100} = 10'dur." },
    { soru: "3√{2} + √{32} − √{8} işleminin sonucu nedir?", cevap: "5√{2}. Sadeleştir: √{32} = 4√{2}, √{8} = 2√{2}. Katsayılar: 3 + 4 − 2 = 5." },
    { soru: "√{40} en küçük hangi √{k} ile çarpılırsa sonuç doğal sayı olur?", cevap: "√{10} ile. 40 = 2^{3} · 5; üssü tek olan 2 ve 5 eksiktir: k = 10 ve √{40} · √{10} = √{400} = 20." },
    { soru: "√{0,01}, √{0,1} ve [[22|7]] sayılarından hangileri rasyoneldir?", cevap: "√{0,01} = 0,1 ve [[22|7]] rasyoneldir. √{0,1} irrasyoneldir: 0,1 = [[10|100]] ve 10 tam kare değildir." }
  ]
};
