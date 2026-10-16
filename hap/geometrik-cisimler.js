window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["geometrik-cisimler"] = {
  "kazanimlar": ["M.8.3.4.1", "M.8.3.4.2", "M.8.3.4.3", "M.8.3.4.4", "M.8.3.4.5", "M.8.3.4.6"],
  "giris": "Bu konuda prizma, silindir, piramit ve koninin elemanlarını ve açınımlarını tanır, silindirin yüzey alanı ile hacmini hesaplarsın. Hangi formülü nerede kullanacağını ve hangi tuzaklardan kaçacağını öğrenirsin.",
  "bolumler": [
    {
      "baslik": "Cisimler ve temel elemanları",
      "maddeler": [
        "**Dik prizma:** iki tabanı eş ve paralel çokgendir; yan yüzleri dikdörtgendir. **Yükseklik**, iki taban arasındaki uzaklıktır ve yan ayrıtlardan biri kadardır. Tabanı n kenarlı ise n yan yüzü vardır.",
        "**Dik dairesel silindir:** iki tabanı eş ve paralel dairedir. **Yarıçap** (r) taban merkeziyle çember arasındaki uzaklık, **çap** yarıçapın iki katıdır. **Yanal yüz**, iki taban arasındaki eğri yüzeydir.",
        "**Dik piramit:** tabanı düzgün çokgendir ve tek tabanı vardır; yan yüzleri tepe noktasında birleşen eş ikizkenar üçgenlerdir. **Yükseklik**, tepeden tabana inen diktir ve taban merkezine ulaşır; yan yüzün yüksekliğiyle karıştırılmaz.",
        "**Dik dairesel koni:** tabanı bir dairedir ve bir tepe noktası vardır. **Yükseklik** (h) tepeden taban merkezine inen diktir. **Ana doğru** (ℓ) tepeyi taban çemberinin herhangi bir noktasına bağlar; yüksekliğe eşit değil, ondan uzundur.",
        "**Koninin üç uzunluğu** dik üçgen oluşturur: yükseklik ile yarıçap dik kenar, ana doğru hipotenüstür. Bu yüzden ℓ² = h² + r² yazılır (Pisagor). Kare tabanlı dik piramitte de benzer bir dik üçgen vardır: yükseklik ile taban kenarının yarısı dik kenar, yan yüz yüksekliği hipotenüstür. Sık çıkan üçlüler: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (ve katları)."
      ],
      "tablo": "<table class=\"tablo\"><tr><th>Cisim</th><th>Taban</th><th>Yanal yüz</th><th>Tepe noktası</th></tr><tr><td>Dik prizma</td><td>2 (çokgen)</td><td>Dikdörtgenler</td><td>Yok</td></tr><tr><td>Silindir</td><td>2 (daire)</td><td>Eğri yüzey</td><td>Yok</td></tr><tr><td>Dik piramit</td><td>1 (çokgen)</td><td>Üçgenler</td><td>Var</td></tr><tr><td>Dik koni</td><td>1 (daire)</td><td>Eğri yüzey</td><td>Var</td></tr></table>",
      "dikkat": [
        "**Çap ile yarıçapı karıştırmak.** Şekilde 12 cm yazan uzunluk çapsa r = 6 cm'dir."
      ]
    },
    {
      "baslik": "Köşe, ayrıt ve yüz sayıları",
      "maddeler": [
        "**Tabanı n kenarlı dik prizmada:** köşe sayısı 2n, ayrıt sayısı 3n (üst tabanda n, alt tabanda n, yan ayrıt n), yüz sayısı n + 2.",
        "**Tabanı n kenarlı dik piramitte:** köşe sayısı n + 1, ayrıt sayısı 2n (tabanda n, yan ayrıt n), yüz sayısı n + 1.",
        "**Çubuk ya da tel iskelet** sorusunda cismin bütün ayrıtlarının uzunlukları toplanır; yan ayrıtlar ile taban kenarları ayrı ayrı hesaplanır."
      ],
      "ornekler": [
        "Tabanı kare, taban kenarı 5 cm, yan ayrıtı 9 cm olan piramidin iskeleti: 4 · 5 + 4 · 9 = 56 cm tel ister."
      ],
      "dikkat": [
        "**Piramidin ayrıtını prizma gibi saymak.** Piramidin üst tabanı yoktur; ayrıtı 2n'dir, 3n değil."
      ]
    },
    {
      "baslik": "Açınımlar",
      "maddeler": [
        "**Açınım**, cismin yüzeylerinin kesilip düz bir yüzeye serilmiş hâlidir. Katlayınca cisim yeniden oluşmalıdır.",
        "**Dik prizma:** iki eş taban ve dikdörtgen yan yüzler. Yan yüz dizisinin uzunluğu taban çevresine, genişliği yüksekliğe eşittir. Yüzey alanı açınımın alanıdır: 2 · taban alanı + taban çevresi · yükseklik. Dikdörtgenler prizmasında bu 2(ab + bc + ac) olur.",
        "**Silindir:** iki eş daire ve bir dikdörtgen. Dikdörtgenin bir kenarı taban çevresi olan **2πr**, öbür kenarı yükseklik **h**'dir. Daireler dikdörtgenin 2πr'lik kenarına değer; bu kenar daireyi tam saracak uzunlukta olmalıdır.",
        "**Dik piramit:** bir taban çokgeni ve çevresinde n üçgen. Üçgenler tabanın kenarlarına yapışık durur. Katlayınca dış köşeler tek bir tepe noktasında buluşur.",
        "**Dik koni:** bir daire (taban) ve bir **daire dilimi** (yanal yüz). Dilimin yarıçapı koninin **ana doğrusu** ℓ'dir. Dilimin **yay uzunluğu**, taban çemberinin uzunluğu olan 2πr'ye eşittir.",
        "Dilimin tam çemberi 2πℓ olduğundan dilimin dairedeki payı [[r|ℓ]] kadardır; ℓ = 2r ise dilim yarım dairedir."
      ],
      "ornekler": [
        "3 × 4 × 5 cm'lik kutunun yüzey alanı: 2(12 + 15 + 20) = 94 cm².",
        "Taban yarıçapı 3 cm, ana doğrusu 9 cm olan koni: dilimin yarıçapı 9 cm, yay uzunluğu 2π · 3 = 6π cm, dilimin payı [[3|9]] = [[1|3]] yani dairenin üçte biridir."
      ],
      "dikkat": [
        "**Dilimin yarıçapını taban yarıçapı sanmak.** Dilimin yarıçapı ana doğrudur (ℓ); taban yarıçapı r ayrıdır.",
        "**Açınımın dış sınırını yanlış saymak.** Piramit açınımında taban kenarları üçgenlerle ortaktır, iç çizgidir; dış sınırı yalnızca üçgenlerin yan kenarları oluşturur."
      ]
    },
    {
      "baslik": "Silindirin yüzey alanı",
      "maddeler": [
        "**Yanal alan** açınımdaki dikdörtgenin alanıdır: taban çevresi çarpı yükseklik = 2πr · h = **2πrh**.",
        "**Taban alanı** bir daire alanıdır: **πr²**. Silindirin iki tabanı vardır; tabanların toplamı **2πr²**.",
        "**Toplam yüzey alanı = 2πr² + 2πrh.** Yani iki taban ile yanal yüzün toplamı.",
        "**Üstü açık** (kapaksız) kap için yalnızca bir taban eklenir: πr² + 2πrh. Etiket ya da boru yüzeyi yalnızca yanal yüzdür; alanı 2πrh'dır.",
        "**Yapıştırma:** birleştirilen iki cismin değen yüzleri dışarıda kalmaz; bu yüzlerin alanı toplamdan düşülür.",
        "**Ters problem:** alan verilip r veya h sorulabilir; formülü yaz, bilinenleri koy, bilinmeyeni çek."
      ],
      "ornekler": [
        "r = 6 cm, h = 5 cm, π = 3: yanal alan 2 · 3 · 6 · 5 = 180 cm², iki taban 2 · 3 · 36 = 216 cm², toplam 396 cm².",
        "Üstü açık, r = 3 cm, h = 8 cm, π = 3 olan bir kovanın dışı: 3 · 9 + 2 · 3 · 3 · 8 = 27 + 144 = 171 cm²."
      ],
      "dikkat": [
        "**Yanal alanı yüzey alanı sanmak.** Sorulan toplam yüzey ise iki tabanı da eklemelisin. Sağlama: sonuç yanal alandan büyük olmalıdır."
      ]
    },
    {
      "baslik": "Hacim ve prizma bağlantısı",
      "maddeler": [
        "**Dik prizmanın hacmi = taban alanı × yükseklik.** Dikdörtgenler prizmasında a · b · c bunun özel hâlidir.",
        "**Silindirin hacmi = taban alanı × yükseklik = πr²h.** Taban daire olduğu için taban alanı yerine πr² konur.",
        "Taban alanı ve yüksekliği aynı olan iki cismin **hacmi de aynıdır;** tabanın çokgen ya da daire olması fark yaratmaz.",
        "**Yarıçap hacme karesiyle etki eder.** Yarıçap 2 katına çıkarsa hacim 4 katına çıkar; yükseklik 2 katına çıkarsa hacim yalnızca 2 katına çıkar.",
        "**Boşluk ya da fark:** kabın içindeki cismin dışında kalan kısım, kap hacmi eksi cisim hacmidir. İçi oyuk borunun malzemesi, dış silindir eksi iç boşluktur.",
        "**Su yüksekliği:** kaptaki suya bir cisim batırılırsa yükselen su hacmi cismin hacmine eşittir. Su yükselmesi = batan hacim ÷ kabın taban alanı.",
        "**Doluluk oranı:** kabın [[3|5]]'i dolu ise su hacmi, kabın hacminin [[3|5]]'idir.",
        "**Akış:** borunun kesit alanı × akış hızı, birim zamanda akan hacmi verir. Süre = toplam hacim ÷ bu değerdir.",
        "**Hacim korunur:** su bir kaptan öbürüne aktarılınca ya da mum eritilip kalıba dökülünce hacim değişmez; taban alanı küçüldükçe yükseklik artar.",
        "**Aynı karton, farklı silindir:** bir dikdörtgeni iki yönde saran silindirlerin yanal alanı aynı, hacmi farklıdır.",
        "**Sığdırma:** kutuları koliye dizerken hacim bölmek yanıltır; tabana kaç tane, kaç kat sığdığını ayrı ayrı say (tam kısmı al).",
        "**Tahmin:** ölçüleri yuvarla (π ≈ 3). r = 5,1 cm, h = 19,8 cm için 3 · 5² · 20 = 1500 cm³ civarı."
      ],
      "ornekler": [
        "Yarıçapı 3 cm olan silindirik kaba batırılan bir taş suyu 2 cm yükseltirse (π = 3) taşın hacmi 3 · 9 · 2 = 54 cm³'tür."
      ],
      "dikkat": [
        "**r² yerine r almak.** 3 · r · h yazmak, yarıçapın karesini unutmaktır."
      ]
    },
    {
      "baslik": "Birim dönüşümü: litre ve kübik birimler",
      "maddeler": [
        "**1 dm³ = 1 litre = 1000 cm³.** Litre yazan soruda hacmi cm³ bulduysan 1000'e böl.",
        "**1 m³ = 1000 dm³ = 1000 litre.** Bir metreküp 1000 litredir; 100 değil.",
        "Uzunluk birimlerinde dönüşüm çarpanı, hacimde **küpüdür:** 1 m = 10 dm olduğundan 1 m³ = 10³ = 1000 dm³'tür.",
        "Kap kaç litre alır, kaç bardak doldurur, kaç saatte dolar gibi sorularda önce hacmi cm³ bul, sonra litreye çevir, en sonda böl. Hepsini doldurmak ya da boşaltmak için gereken sayı yukarı, tam dolan ya da içine sığan sayı aşağı yuvarlanır. Maliyet sorusunda önce alanı ya da litreyi bul, sonra birim fiyatla çarp."
      ],
      "ornekler": [
        "Taban yarıçapı 15 cm, yüksekliği 20 cm olan silindirik bir sürahi (π = 3): 3 · 225 · 20 = 13500 cm³ = 13,5 litre."
      ],
      "dikkat": [
        "**Birimi çevirmemek.** Şekilde cm yazar, şıklar litredir. Hacmi cm³ bulunca 1000'e bölmeyi unutma."
      ]
    }
  ],
  "lgs": [
    "Günlük hayattan bir kap (konserve, depo, boru, kutu) verilir; silindirin yüzey alanı ya da hacmi, litre dönüşümüyle sorulur. Çeldiriciler r² yerine r kullanmak, çapı yarıçap almak, iki tabandan birini unutmak ve birimi çevirmemektir.",
    "Şekilde bir cismin açınımı verilir; kenar uzunluklarından yarıçap, yükseklik, ana doğru ya da taban çevresi sorulur. Silindirde dikdörtgenin 2πr'lik kenarı, konide dilimin yay uzunluğu 2πr olarak okunur.",
    "Piramit ve koni sorularında alan ve hacim sorulmaz; eleman sayma (köşe, ayrıt, yüz), açınımı tanıma ve Pisagorla ℓ² = h² + r² bulma beklenir."
  ],
  "yokla": [
    {
      "soru": "Tabanı sekizgen olan dik prizmanın kaç köşesi, ayrıtı ve yüzü vardır?",
      "cevap": "Köşe 2 · 8 = 16, ayrıt 3 · 8 = 24, yüz 8 + 2 = 10."
    },
    {
      "soru": "Bir silindirin yanal yüzünün açınımı hangi şekildir? Kenarları nelerdir?",
      "cevap": "Dikdörtgen; bir kenarı taban çevresi 2πr, öbür kenarı yükseklik h'dir. Alanı 2πrh olur."
    },
    {
      "soru": "r = 2 cm, h = 6 cm, π = 3 olan silindirin toplam yüzey alanı ve hacmi kaçtır?",
      "cevap": "Yüzey alanı: 2 · 3 · 4 + 2 · 3 · 2 · 6 = 24 + 72 = 96 cm². Hacim: 3 · 4 · 6 = 72 cm³."
    },
    {
      "soru": "Yarıçapı 3 katına çıkarılan, yüksekliği aynı kalan bir silindirin hacmi kaç katına çıkar?",
      "cevap": "9 katına; yarıçap hacimde karesiyle yer alır (3² = 9)."
    },
    {
      "soru": "Koninin açınımındaki daire diliminin yarıçapı ve yay uzunluğu neye eşittir?",
      "cevap": "Yarıçap koninin ana doğrusudur (ℓ). Yay uzunluğu taban çemberinin uzunluğuna, yani 2πr'ye eşittir."
    },
    {
      "soru": "Yüksekliği 16 cm, taban yarıçapı 12 cm olan koninin ana doğrusu kaç cm'dir? 2,4 m³ su kaç litredir?",
      "cevap": "ℓ² = 16² + 12² = 400, ℓ = 20 cm. 1 m³ = 1000 L olduğundan 2,4 m³ = 2400 L."
    }
  ]
};
