// Matematik — Kareköklü İfadeler | Kademe 2 (Pekiştirme) yedeği
// Kademe 2 yedek: mat-kk-226…275 (kademe: 2; düzey 2: 226…251, düzey 3: 252…275)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["karekoklu-ifadeler"] = window.LGS_BANK["karekoklu-ifadeler"] || []).push(
{
  id: "mat-kk-226",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir satranç kulübü, 8 × 8 = 64 eş kareden oluşan kare biçimli bir tahta yaptırmıştır. Tahtanın tamamının alanı aşağıdaki şekilde verilmiştir.\n**Buna göre tahtadaki küçük karelerden birinin bir kenarı kaç cm'dir?**",
  gorsel: "<svg viewBox=\"0 0 420 256\" role=\"img\" aria-label=\"Kare biçimli satranç tahtası: 8 sıra, 8 sütun; tahtanın alanı 576 santimetrekare.\"><rect x=\"110\" y=\"15\" width=\"200\" height=\"200\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"135\" y1=\"15\" x2=\"135\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"40\" x2=\"310\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"160\" y1=\"15\" x2=\"160\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"65\" x2=\"310\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"185\" y1=\"15\" x2=\"185\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"90\" x2=\"310\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"210\" y1=\"15\" x2=\"210\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"115\" x2=\"310\" y2=\"115\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"235\" y1=\"15\" x2=\"235\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"140\" x2=\"310\" y2=\"140\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"260\" y1=\"15\" x2=\"260\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"165\" x2=\"310\" y2=\"165\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"285\" y1=\"15\" x2=\"285\" y2=\"215\" stroke=\"currentColor\" stroke-width=\"1\"/><line x1=\"110\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"210\" y=\"242\" font-size=\"17\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">Tahtanın alanı: 576 cm²</text></svg>",
  secenekler: ["3","9","24","72"],
  dogru: 0,
  hatalar: [
    null,
    "Küçük karenin alanını kenar sandın: 576 ÷ 64 = 9 cm²'dir. Kenarı bulmak için bir kez daha karekök almak gerekir.",
    "Tahtanın tamamının kenarını buldun: √{576} = 24 cm. Bu kenara 8 küçük kare sığdığı için 8'e bölmeyi unuttun.",
    "Alanı doğrudan 8'e böldün: 576 ÷ 8 = 72. Alan bir uzunluk değildir; önce karekök alınması gerekir."
  ],
  aciklama: "Karenin alanı, bir kenarının kendisiyle çarpımıdır; bu yüzden kenar, alanın karekökü alınarak bulunur.\nAdım 1: Tahtanın kenarını bul: 24^{2} = 576 olduğundan √{576} = 24 cm.\nAdım 2: Bu kenar boyunca 8 küçük kare yan yana dizilidir: 24 ÷ 8 = 3 cm.\nSağlama: Küçük karenin alanı 3 · 3 = 9 cm²'dir ve 64 kare 64 · 9 = 576 cm² eder.\nSık yapılan hata: Alanı kare sayısına bölüp bulduğun sayıyı (9) kenar sanmak.\nCevap A."
},
{
  id: "mat-kk-227",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir matematik öğretmeni tahtaya 9'un katı olan dört sayı yazmış ve bunlardan hangisinin karekökünün 8 ile 9 arasında olduğunu sormuştur.\n**Buna göre bu sayılardan hangisinin karekökü 8 ile 9 arasındadır?**",
  gorsel: null,
  secenekler: ["54","63","72","81"],
  dogru: 2,
  hatalar: [
    "54 sayısı 49 ile 64 arasındadır; karekökü 7 ile 8 arasında kalır, 8'e ulaşmaz.",
    "63 < 64 olduğundan karekökü 8'den küçüktür (7 ile 8 arasındadır). 8 ile 9 arasında olması için sayı 64'ten büyük olmalıdır.",
    null,
    "√{81} = 9 bir tam sayıdır. \"Arasında\" ifadesi uç değerleri kapsamaz; sınırı aralığa dahil ettin."
  ],
  aciklama: "Karekökü 8 ile 9 arasında olan sayı, 8'in karesinden büyük, 9'un karesinden küçük olmalıdır.\nAdım 1: 8^{2} = 64 ve 9^{2} = 81 olduğundan 64 < sayı < 81 aranıyor.\nAdım 2: Seçenekleri denetle: 54 ve 63 sayıları 64'ten küçüktür, 81 ise sınır değerdir ve aralığın dışında kalır. Yalnız 72, 64 ile 81 arasındadır.\nSağlama: 8,5^{2} = 72,25 olduğundan √{72} yaklaşık 8,5'tir ve gerçekten 8 ile 9 arasındadır.\nSık yapılan hata: Sınır değerleri (64 ve 81) aralığa dahil etmek.\nCevap C."
},
{
  id: "mat-kk-228",
  kazanim: "M.8.1.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir robot kolunun uzunluğu √{288} cm olarak ölçülmüştür. Robotun yazılımı bu uzunluğu a√{2} cm biçiminde göstermektedir.\n**Buna göre a kaçtır?**",
  gorsel: null,
  secenekler: ["2","12","24","144"],
  dogru: 1,
  hatalar: [
    "288 = 4 · 72 diye ayırıp yalnızca 4'ün karekökünü dışarı çıkardın; kök içinde hâlâ 72 kaldı ve 72 de tam kare çarpan içeriyor. Sadeleştirme yarım kaldı.",
    null,
    "Dışarı çıkan 12 ile kök içinde kalan 2'yi çarptın. Kök içindeki sayı katsayıya karışmaz; kök içinde aynen kalır.",
    "Tam kare çarpanı olduğu gibi dışarı yazdın. Dışarı çıkan sayı çarpanın kareköküdür: √{144} = 12."
  ],
  aciklama: "Bir karekökü a√{b} biçimine getirmek için kök içini, biri tam kare olan iki çarpanın çarpımı olarak yazarız.\nAdım 1: 288 = 144 · 2 (144 tam karedir).\nAdım 2: √{288} = √{144} · √{2} = 12√{2}. Demek ki a = 12.\nSağlama: 12 sayısını kök içine alırsan 12^{2} · 2 = 288 olur.\nSık yapılan hata: Dışarı çıkan sayı olarak çarpanın kendisini (144) yazmak.\nCevap B."
},
{
  id: "mat-kk-229",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir uçurtma yarışmasında kullanılan uzun ipin boyu √{150} m, kısa ipin boyu √{6} m'dir. İplerin boyları aşağıdaki şekilde gösterilmiştir.\n**Buna göre uzun ipin boyu kısa ipin boyunun kaç katıdır?**",
  gorsel: "<svg viewBox=\"0 0 420 135\" role=\"img\" aria-label=\"İki çubuk: üstteki uzun ip kök 150 metre, alttaki kısa ip kök 6 metre.\"><text x=\"40\" y=\"27\" font-size=\"16\" text-anchor=\"start\" fill=\"var(--vurgu)\" font-weight=\"bold\">Uzun ip: √150 m</text><rect x=\"40\" y=\"35\" width=\"300\" height=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"87\" font-size=\"16\" text-anchor=\"start\" fill=\"var(--vurgu)\" font-weight=\"bold\">Kısa ip: √6 m</text><rect x=\"40\" y=\"95\" width=\"60\" height=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>",
  secenekler: ["900","25","12","5"],
  dogru: 3,
  hatalar: [
    "Bölmek yerine kök içlerini çarptın: 150 · 6 = 900. \"Kaç katı\" sorusu bölme ile cevaplanır.",
    "Kök içlerini doğru böldün (150 ÷ 6 = 25) ama karekök almayı unuttun: √{25} = 5.",
    "Kök içlerini çıkardın: 150 − 6 = 144 ve √{144} = 12. Kaç katı olduğu kök içleri çıkarılarak değil, bölünerek bulunur.",
    null
  ],
  aciklama: "Bir uzunluğun başka bir uzunluğun kaç katı olduğunu bölme ile buluruz. Karekökler bölünürken kök içleri bölünür: √{a} ÷ √{b} = √{a ÷ b}.\nAdım 1: √{150} ÷ √{6} = √{150 ÷ 6}.\nAdım 2: 150 ÷ 6 = 25 olduğundan √{25} = 5.\nSağlama: 5 · √{6} = √{25 · 6} = √{150}. Uzun ip gerçekten kısa ipin 5 katıdır.\nSık yapılan hata: Kök içi bölümünü bulup karekök almayı unutmak (25).\nCevap D."
},
{
  id: "mat-kk-230",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir bahçıvan, çitin ilk bölümü için √{45} m, ikinci bölümü için √{80} m uzunluğunda hazır panel kullanmıştır. Paneller uç uca eklenmiştir.\n**Buna göre çitin toplam uzunluğu kaç metredir?**",
  gorsel: null,
  secenekler: ["7√{5}","7√{10}","12√{5}","√{125}"],
  dogru: 0,
  hatalar: [
    null,
    "Katsayıları doğru topladın ama kök içini de topladın (5 + 5 = 10). Kök içi aynı olan terimler toplanırken kök içi değişmez.",
    "Katsayıları toplamak yerine çarptın: 3 · 4 = 12. Toplamada katsayılar toplanır.",
    "Kök içlerini topladın: 45 + 80 = 125. √{a} + √{b} ifadesi √{a + b} değildir."
  ],
  aciklama: "Kareköklü ifadeleri toplamak için önce sadeleştirilir; kök içleri aynı olan terimlerin katsayıları toplanır.\nAdım 1: √{45} = √{9 · 5} = 3√{5} ve √{80} = √{16 · 5} = 4√{5}.\nAdım 2: Kök içleri aynı olduğundan katsayılar toplanır: 3√{5} + 4√{5} = 7√{5}.\nSağlama: √{45} ≈ 6,7 ve √{80} ≈ 8,9 olduğundan toplam yaklaşık 15,6'dır; 7√{5} ≈ 7 · 2,24 = 15,7 de buna yakındır.\nSık yapılan hata: Kök içlerini birbirine eklemek (√{125}).\nCevap A."
},
{
  id: "mat-kk-231",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "Mert, kartında yazan √{50} sayısını kendi seçtiği başka bir kareköklü sayıyla çarpıp sonucun doğal sayı çıkıp çıkmadığına bakmaktadır.\n**Buna göre Mert aşağıdaki sayılardan hangisini seçerse sonuç doğal sayı __olmaz__?**",
  gorsel: null,
  secenekler: ["√{2}","√{8}","√{18}","√{20}"],
  dogru: 3,
  hatalar: [
    "Soruyu \"doğal sayı olur\" diye okudun: √{50} · √{2} = √{100} = 10 doğal sayıdır.",
    "Soruyu \"doğal sayı olur\" diye okudun: √{50} · √{8} = √{400} = 20 doğal sayıdır.",
    "Soruyu \"doğal sayı olur\" diye okudun: √{50} · √{18} = √{900} = 30 doğal sayıdır.",
    null
  ],
  aciklama: "√{a} · √{b} = √{a · b} olduğundan çarpım, kök içlerinin çarpımı tam kare ise doğal sayıdır. Soru, doğal sayı vermeyeni istiyor.\nAdım 1: Her seçenek için 50 ile çarp: 50 · 2 = 100, 50 · 8 = 400, 50 · 18 = 900, 50 · 20 = 1000.\nAdım 2: 100 = 10^{2}, 400 = 20^{2} ve 900 = 30^{2} tam karedir. 1000 ise 31^{2} = 961 ile 32^{2} = 1024 arasında kalır, tam kare değildir.\nSağlama: 1000 = 2^{3} · 5^{3}; üsler tek olduğundan tam kare olamaz.\nSık yapılan hata: Soru kökündeki \"olmaz\" sözcüğünü atlayıp doğal sayı verenleri seçmek.\nCevap D."
},
{
  id: "mat-kk-232",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 2,
  soru: "Bir atölyede kare biçimli ahşap tencere altlıkları üretilmektedir. Bir altlığın alanı aşağıdaki şekilde verilmiştir.\n**Buna göre bu altlığın bir kenarı kaç santimetredir?**",
  gorsel: "<svg viewBox=\"0 0 420 200\" role=\"img\" aria-label=\"Kare biçimli tencere altlığı, alanı 0,0169 metrekare.\"><rect x=\"135\" y=\"25\" width=\"150\" height=\"150\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"210\" y=\"106\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">Alan: 0,0169 m²</text></svg>",
  secenekler: ["0,13","1,3","13","130"],
  dogru: 2,
  hatalar: [
    "Kenarı doğru buldun ama metre olarak bıraktın: 0,13 m. Soru santimetre istiyor.",
    "Virgülü yanlış kaydırdın: 1,3^{2} = 1,69'dur, 0,0169 değil.",
    null,
    "Metreyi santimetreye çevirirken 1000 ile çarptın. 1 m = 100 cm'dir."
  ],
  aciklama: "Ondalık bir sayının karekökünü bulmak için sayıyı kesre çevirir, pay ve paydanın karekökünü ayrı ayrı alırız.\nAdım 1: 0,0169 = [[169|10000]] olur ve √{[[169|10000]]} = [[13|100]] = 0,13 m'dir.\nAdım 2: Soru santimetre istiyor: 1 m = 100 cm olduğundan 0,13 · 100 = 13 cm.\nSağlama: 0,13 · 0,13 = 0,0169'dur.\nSık yapılan hata: Birimi çevirmeden 0,13 yazmak.\nCevap C."
},
{
  id: "mat-kk-233",
  kazanim: "M.8.1.3.8",
  kademe: 2,
  zorluk: 2,
  soru: "Ayşe, defterine dört kareköklü sayı yazmıştır.\n**Buna göre bu sayılardan hangisi rasyonel sayıdır?**",
  gorsel: null,
  secenekler: ["√{0,4}","√{0,9}","√{1,5}","√{0,16}"],
  dogru: 3,
  hatalar: [
    "0,4 = [[40|100]] olur ve 40 tam kare değildir; √{0,4} iki tam sayının oranı olarak yazılamaz. Ondalık yazılmış olması sayıyı rasyonel yapmaz.",
    "0,9 = [[90|100]] olur ve 90 tam kare değildir; √{0,9} irrasyoneldir. 0,3^{2} = 0,09'dur, 0,9 değil.",
    "1,5 = [[150|100]] olur ve 150 tam kare değildir; √{1,5} irrasyoneldir.",
    null
  ],
  aciklama: "Kök içindeki ondalık sayıyı kesre çevir: pay da payda da tam kare ise karekök rasyoneldir; değilse irrasyoneldir.\nAdım 1: 0,4 = [[40|100]], 0,9 = [[90|100]], 1,5 = [[150|100]], 0,16 = [[16|100]].\nAdım 2: Payları denetle: 40, 90 ve 150 tam kare değildir. 16 = 4^{2} ve 100 = 10^{2} tam karedir.\nAdım 3: √{0,16} = [[4|10]] = 0,4 rasyoneldir.\nSağlama: 0,4^{2} = 0,16'dır.\nSık yapılan hata: Kök içi ondalık olduğu için sonucun da rasyonel olacağını sanmak.\nCevap D."
},
{
  id: "mat-kk-234",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir pizzacı, kare biçimli kapağının alanı 16 dm² olan kutularını yeni modelde büyütecektir. Yeni modelde kapağın her kenarı, eski kenarın 3 katı olacaktır.\n**Buna göre yeni kapağın alanı kaç dm²'dir?**",
  gorsel: "<svg viewBox=\"0 0 420 215\" role=\"img\" aria-label=\"Küçük kare eski kapak, alanı 16 desimetrekare; büyük kare yeni kapak, kenarı eskisinin üç katı.\"><rect x=\"50\" y=\"130\" width=\"50\" height=\"50\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"190\" y=\"30\" width=\"150\" height=\"150\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"108\" y1=\"155\" x2=\"182\" y2=\"155\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"182,155 172,150 172,160\" fill=\"currentColor\"/><text x=\"145\" y=\"143\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">kenar ×3</text><text x=\"75\" y=\"204\" font-size=\"15\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">Eski: 16 dm²</text><text x=\"265\" y=\"204\" font-size=\"15\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">Yeni kapak</text></svg>",
  secenekler: ["256","144","48","12"],
  dogru: 1,
  hatalar: [
    "Alanı kendisiyle çarptın (16 · 16). Alan değil, kenar 3 katına çıkıyor.",
    null,
    "Alanı 3 ile çarptın. Kenar 3 katına çıkınca alan 3^{2} = 9 katına çıkar.",
    "Yeni kenarı buldun (4 · 3 = 12 dm) ama soru alanı soruyor; kenarı bir kez daha kendisiyle çarpmadın."
  ],
  aciklama: "Karenin kenarı k katına çıkarsa alanı k^{2} katına çıkar.\nAdım 1: Eski kenar √{16} = 4 dm.\nAdım 2: Yeni kenar 3 · 4 = 12 dm.\nAdım 3: Yeni alan 12^{2} = 144 dm².\nSağlama: Kenar 3 katı olduğundan alan 3^{2} = 9 katıdır: 16 · 9 = 144.\nSık yapılan hata: Alanı da 3 ile çarpmak (48).\nCevap B."
},
{
  id: "mat-kk-235",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 2,
  soru: "Kare biçimli bir ilan panosunun alanı 29 dm²'dir. Pano, çevresi boyunca ince bir ışıklı şeritle çevrilecektir.\n**Buna göre gereken şeridin uzunluğu dm cinsinden hangi iki ardışık doğal sayı arasındadır?**",
  gorsel: "<svg viewBox=\"0 0 420 200\" role=\"img\" aria-label=\"Kare biçimli ilan panosu, alanı 29 desimetrekare.\"><rect x=\"135\" y=\"25\" width=\"150\" height=\"150\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"210\" y=\"106\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">Alan: 29 dm²</text></svg>",
  secenekler: ["5 ile 6 arasında","20 ile 21 arasında","21 ile 22 arasında","23 ile 24 arasında"],
  dogru: 2,
  hatalar: [
    "Yalnızca kenarı buldun (√{29}, 5 ile 6 arasındadır). Soru kenarın değil, çevrenin yani kenarın 4 katının aralığını soruyor.",
    "Kenarın alt sınırı olan 5'i 4 ile çarpıp 20 buldun; ama √{29} sayısı 5'ten büyüktür. 4√{29} = √{464} ve 21^{2} = 441 < 464 olduğundan çevre 21'i de aşar.",
    null,
    "Kenarın üst sınırı olan 6'yı 4 ile çarptın. √{29}, 6'ya değil 5'e daha yakındır; çevre 22'ye bile ulaşmaz."
  ],
  aciklama: "Önce kenarı, sonra çevreyi bulacağız. Çevre için karekökü 4 ile çarpıp tek kök altına alırız.\nAdım 1: Kenar √{29} cm; çevre 4√{29} cm.\nAdım 2: 4√{29} = √{16 · 29} = √{464}.\nAdım 3: 21^{2} = 441 ve 22^{2} = 484 olduğundan 441 < 464 < 484, yani 21 < 4√{29} < 22.\nSağlama: 5,4^{2} = 29,16 olduğundan √{29} yaklaşık 5,4'tür ve 4 · 5,4 = 21,6'dır.\nSık yapılan hata: Kenarı tahmin edip çevreyi hesaplamayı unutmak.\nCevap C."
},
{
  id: "mat-kk-236",
  kazanim: "M.8.1.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir kumaş satıcısı, uzunluğu 6 metreden fazla olan parçayı vitrine koyacaktır. Dört parçanın uzunlukları metre cinsinden aşağıdaki seçeneklerde verilmiştir.\n**Buna göre hangi parça vitrine konulabilir?**",
  gorsel: null,
  secenekler: ["2√{10}","3√{3}","2√{7}","4√{2}"],
  dogru: 0,
  hatalar: [
    null,
    "3√{3} = √{27} olur (içeri 3 değil 9 girer) ve 27 < 36 olduğundan 6'dan kısadır.",
    "2√{7} = √{28} olur ve 28 < 36 olduğundan 6'dan kısadır. Katsayının büyük olması sayıyı büyük yapmaz.",
    "4√{2} = √{32} olur ve 32 < 36 olduğundan 6'dan kısadır."
  ],
  aciklama: "Katsayılı kökleri bir sayıyla karşılaştırmak için hepsini tek kök altına al. Katsayı kök içine karesiyle girer: a√{b} = √{a^{2} · b}.\nAdım 1: 6 = √{36}.\nAdım 2: 2√{10} = √{40}, 3√{3} = √{27}, 2√{7} = √{28}, 4√{2} = √{32}.\nAdım 3: Yalnız 40 sayısı 36'dan büyüktür.\nSağlama: √{40} ≈ 6,3 > 6'dır; √{32} ≈ 5,7 < 6'dır.\nSık yapılan hata: Katsayıyı karesini almadan kök içine alıp (2√{10} yerine √{20} gibi) yanlış karşılaştırmak.\nCevap A."
},
{
  id: "mat-kk-237",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir dekorasyon atölyesinde 12√{20} cm uzunluğundaki bir şerit, her biri 3√{5} cm olan eş parçalara bölünecektir.\n**Buna göre bu şeritten kaç parça elde edilir?**",
  gorsel: "<svg viewBox=\"0 0 420 135\" role=\"img\" aria-label=\"Üstte uzun şerit 12 kök 20 santimetre, altta kısa parça 3 kök 5 santimetre.\"><text x=\"40\" y=\"27\" font-size=\"16\" text-anchor=\"start\" fill=\"var(--vurgu)\" font-weight=\"bold\">Şerit: 12√20 cm</text><rect x=\"40\" y=\"35\" width=\"330\" height=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"87\" font-size=\"16\" text-anchor=\"start\" fill=\"var(--vurgu)\" font-weight=\"bold\">Bir parça: 3√5 cm</text><rect x=\"40\" y=\"95\" width=\"41\" height=\"18\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>",
  secenekler: ["4","8","9","16"],
  dogru: 1,
  hatalar: [
    "Katsayıları böldün (12 ÷ 3 = 4) ama kök içlerini bölmeyi unuttun: √{20 ÷ 5} = √{4} = 2.",
    null,
    "Katsayıları çıkardın (12 − 3 = 9). Kaç parça çıktığı bölme ile bulunur.",
    "Katsayıları (12 ÷ 3 = 4) ve kök içlerini (20 ÷ 5 = 4) böldün ama kök almadan çarptın: 4 · 4 = 16. Kök içi bölümünün karekökü alınmalıydı: √{4} = 2."
  ],
  aciklama: "Parça sayısı bölme ile bulunur. Kareköklü ifadelerde bölme yapılırken katsayılar katsayılarla, kök içleri kök içleriyle bölünür.\nAdım 1: 12√{20} ÷ 3√{5} = (12 ÷ 3) · √{20 ÷ 5} = 4 · √{4}.\nAdım 2: √{4} = 2 olduğundan sonuç 4 · 2 = 8 parçadır.\nSağlama: 8 · 3√{5} = 24√{5} ve 12√{20} = 12 · 2√{5} = 24√{5}. İkisi eşittir.\nSık yapılan hata: Kök içi bölümünün (4) karekökünü almadan çarpmak (16).\nCevap B."
},
{
  id: "mat-kk-238",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir bahçıvan 3√{12} metre uzunluğundaki çite √{27} metre eklemiş, daha sonra çitin √{48} metrelik bölümünü sökmüştür.\n**Buna göre çitin son uzunluğu kaç metredir?**",
  gorsel: null,
  secenekler: ["√{3}","5√{3}","7√{3}","13√{3}"],
  dogru: 1,
  hatalar: [
    "3√{12} ifadesindeki 3 katsayısını hesaba katmadın (√{12} = 2√{3} aldın); 2 + 3 − 4 = 1 buldun. Doğrusu 3√{12} = 6√{3}.",
    null,
    "√{48} sayısını 2√{3} yazdın; doğrusu √{48} = 4√{3}. Böylece 6 + 3 − 2 = 7 buldun.",
    "Sökme işlemini de toplama gibi yaptın: 6 + 3 + 4 = 13. Sökülen kısım çıkarılmalıdır."
  ],
  aciklama: "Önce her terimi sadeleştir; kök içleri aynı olunca katsayılarla işlem yapılır. Eklemek toplama, sökmek çıkarma demektir.\nAdım 1: 3√{12} = 3 · 2√{3} = 6√{3}; √{27} = 3√{3}; √{48} = 4√{3}.\nAdım 2: 6√{3} + 3√{3} − 4√{3} = (6 + 3 − 4)√{3} = 5√{3}.\nSağlama: 3√{12} ≈ 10,4; √{27} ≈ 5,2; √{48} ≈ 6,9. 10,4 + 5,2 − 6,9 = 8,7 ve 5√{3} ≈ 8,66'dır.\nSık yapılan hata: Katsayı çarpımını (3 · 2) atlayıp kökün önündeki 3'ü unutmak.\nCevap B."
},
{
  id: "mat-kk-239",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "Zeynep'in bilgisayar oyununda ekranda √{54} sayısı belirir. Oyuncu bu sayıyı, pozitif bir tam sayı olan k için √{k} ile çarpar; çarpım doğal sayı olursa puan kazanır.\n**Buna göre puan kazanmak için k en az kaç olmalıdır?**",
  gorsel: null,
  secenekler: ["2","3","6","18"],
  dogru: 2,
  hatalar: [
    "54 · 2 = 108 olur ve 108 = 2^{2} · 3^{3} tam kare değildir; 3 çarpanının üssü hâlâ tektir.",
    "54 · 3 = 162 olur ve 162 = 2 · 3^{4} tam kare değildir; 2 çarpanının üssü hâlâ tektir.",
    null,
    "54 · 18 = 972 olur ve 972 = 2^{2} · 3^{5} tam kare değildir. Üssü çift olan 3^{2} çarpanını da katarak 3'ün üssünü yine tek bıraktın."
  ],
  aciklama: "√{54} · √{k} = √{54 · k} doğal sayıdır, ancak 54 · k tam kare ise. Tam kare sayıda tüm asal çarpanların üsleri çifttir.\nAdım 1: 54 = 2 · 3^{3}. Üssü tek olanlar 2 ve 3'tür (3^{3} üssü tek).\nAdım 2: Bu üsleri çift yapmak için 2 · 3 = 6 ile çarp: 54 · 6 = 324 = 18^{2}.\nSağlama: √{54} · √{6} = √{324} = 18, doğal sayıdır.\nSık yapılan hata: Yalnızca bir çarpanı tamamlayıp (2 ya da 3) öteki çarpanı unutmak.\nCevap C."
},
{
  id: "mat-kk-240",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "Emre, aşağıdaki dört çarpma işleminden sonucu bir doğal sayı olanı bulmaya çalışmaktadır.\n**Buna göre hangi işlemin sonucu doğal sayıdır?**",
  gorsel: null,
  secenekler: ["√{6} · √{10}","√{12} · √{15}","√{5} · √{14}","√{8} · √{18}"],
  dogru: 3,
  hatalar: [
    "6 · 10 = 60 olur ve 60, 49 ile 64 arasında kaldığı için tam kare değildir.",
    "12 · 15 = 180 olur ve 180, 169 ile 196 arasında kaldığı için tam kare değildir.",
    "5 · 14 = 70 olur ve 70, 64 ile 81 arasında kaldığı için tam kare değildir.",
    null
  ],
  aciklama: "Çarpmada kök içleri çarpılır. Sonucun doğal sayı olması için çarpımın tam kare olması gerekir.\nAdım 1: Her işlemde kök içlerini çarp: 60, 180, 70 ve 144.\nAdım 2: Hangisi tam kare? 60 (7^{2} = 49, 8^{2} = 64 arası), 180 (13^{2} = 169, 14^{2} = 196 arası) ve 70 (8^{2} = 64, 9^{2} = 81 arası) değil; 144 = 12^{2} tam karedir.\nSağlama: √{8} · √{18} = 2√{2} · 3√{2} = 6 · 2 = 12.\nSık yapılan hata: Kök içlerini çarpıp tam kare olup olmadığını denetlemeden bırakmak.\nCevap D."
},
{
  id: "mat-kk-241",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 2,
  soru: "Bir seramik atölyesi, kare biçimli fayansları yan yana tek sıra dizerek bir şerit oluşturacaktır. Fayansların her birinin alanı şekilde verilmiştir. Şeritte 10 fayans, aralarında boşluk bırakılmadan uç uca dizilecektir.\n**Buna göre şeridin uzunluğu kaç metredir?**",
  gorsel: "<svg viewBox=\"0 0 420 150\" role=\"img\" aria-label=\"Uç uca dizilmiş 10 kare fayans; her bir fayansın alanı 0,0625 metrekare; toplam uzunluk soruluyor.\"><text x=\"210\" y=\"24\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">Her fayansın alanı: 0,0625 m²</text><rect x=\"40\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"74\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"108\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"142\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"176\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"210\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"244\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"278\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"312\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"346\" y=\"45\" width=\"34\" height=\"34\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"40\" y1=\"100\" x2=\"380\" y2=\"100\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"40\" y1=\"92\" x2=\"40\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"380\" y1=\"92\" x2=\"380\" y2=\"108\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"130\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">10 fayans: şeridin uzunluğu = ?</text></svg>",
  secenekler: ["0,25","0,625","2,5","6,25"],
  dogru: 2,
  hatalar: [
    "Tek bir fayansın kenarını buldun (0,25 m) ama 10 fayansın uç uca uzunluğunu hesaplamadın; kenarı 10 ile çarpmak gerekir.",
    "Alanı 10 ile çarptın (0,0625 · 10). Uzunluk için alan değil, kenar kullanılır; alan ile uzunluk farklı büyüklüklerdir.",
    null,
    "Virgülü yanlış kaydırıp kenarı 0,625 buldun ve 10 ile çarptın. 0,625^{2} = 0,390625'tir, 0,0625 değil; doğru kenar 0,25 m'dir."
  ],
  aciklama: "Alanı verilen karenin kenarı, alanın karekökü alınarak bulunur. Ondalık sayının karekökünü bulmak için sayıyı kesre çeviririz.\nAdım 1: 0,0625 = [[625|10000]] olur ve √{[[625|10000]]} = [[25|100]] = 0,25 m (bir fayansın kenarı).\nAdım 2: Fayanslar uç uca dizildiğinden uzunluk, kenarın 10 katıdır: 10 · 0,25 = 2,5 m.\nSağlama: 0,25 · 0,25 = 0,0625'tir ve 4 fayans yan yana 1 m eder; 10 fayans 2,5 m eder.\nSık yapılan hata: Alanı 10 ile çarpıp uzunluk sanmak (0,625).\nCevap C."
},
{
  id: "mat-kk-242",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 2,
  soru: "Bir resim sergisinde kare biçimli iki tablo vardır. Büyük tablonun alanı 1,69 m², küçük tablonun alanı 0,49 m²'dir.\n**Buna göre iki tablonun kenar uzunlukları arasındaki fark kaç metredir?**",
  gorsel: "<svg viewBox=\"0 0 420 200\" role=\"img\" aria-label=\"İki kare tablo: büyüğünün alanı 1,69 metrekare, küçüğünün alanı 0,49 metrekare.\"><rect x=\"40\" y=\"30\" width=\"130\" height=\"130\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"230\" y=\"90\" width=\"70\" height=\"70\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"105\" y=\"100\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">1,69 m²</text><text x=\"265\" y=\"130\" font-size=\"14\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">0,49 m²</text><text x=\"105\" y=\"188\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Büyük tablo</text><text x=\"265\" y=\"188\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Küçük tablo</text></svg>",
  secenekler: ["0,06","0,6","1,2","2"],
  dogru: 1,
  hatalar: [
    "Virgülü yanlış kaydırdın: √{1,69} = 0,13 ve √{0,49} = 0,07 yazıp farkı 0,06 buldun. Doğrusu 1,3 ve 0,7'dir.",
    null,
    "Alanların farkını (1,69 − 0,49 = 1,2) kenarların farkı sandın. Kenarlar için önce karekök alınmalıdır.",
    "Kenarları çıkarmak yerine topladın: 1,3 + 0,7 = 2."
  ],
  aciklama: "Alanı verilen karenin kenarı karekökle bulunur. Ondalık sayının karekökünü bulmak için sayıyı kesre çeviririz.\nAdım 1: √{1,69} = √{[[169|100]]} = [[13|10]] = 1,3 m; √{0,49} = √{[[49|100]]} = [[7|10]] = 0,7 m.\nAdım 2: Fark 1,3 − 0,7 = 0,6 m.\nSağlama: 0,6 + 0,7 = 1,3 olur; yani küçük kenar, fark kadar uzatılınca büyük kenara ulaşır.\nSık yapılan hata: Alanları çıkarıp bulunan sayıyı (1,2) kenar farkı sanmak.\nCevap B."
},
{
  id: "mat-kk-243",
  kazanim: "M.8.1.3.8",
  kademe: 2,
  zorluk: 2,
  soru: "Bir öğrenci, sayı kartlarının üzerine şu sayıları yazmıştır: √{5}, π, 0,25, √{36}, [[22|7]] ve √{0,81}.\n**Buna göre bu sayılardan kaç tanesi irrasyoneldir?**",
  gorsel: null,
  secenekler: ["2","3","4","5"],
  dogru: 0,
  hatalar: [
    null,
    "√{36} = 6 olduğunu görmeyip kök işareti taşıdığı için onu da irrasyonel saydın.",
    "√{36} = 6 ve √{0,81} = 0,9 rasyonel olduğu hâlde kök işareti taşıdıkları için ikisini de irrasyonel saydın.",
    "[[22|7]] sayısını da π gibi irrasyonel saydın; oysa [[22|7]] iki tam sayının oranıdır, rasyoneldir."
  ],
  aciklama: "İrrasyonel sayı, iki tam sayının oranı olarak yazılamayan sayıdır. Kök işareti görmek yetmez; önce sadeleştir.\nAdım 1: √{36} = 6, √{0,81} = 0,9 (0,9^{2} = 0,81), 0,25 = [[1|4]] ve [[22|7]] iki tam sayının oranıdır; hepsi rasyoneldir.\nAdım 2: 5 tam kare değildir; √{5} irrasyoneldir. π da irrasyoneldir.\nAdım 3: İrrasyonel olanlar yalnızca √{5} ve π'dir: 2 tane.\nSağlama: Rasyonel olanlar 4 tanedir; 4 + 2 = 6 sayının hepsi sayıldı.\nSık yapılan hata: Kök işaretini görünce sayıyı irrasyonel saymak.\nCevap A."
},
{
  id: "mat-kk-244",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 2,
  soru: "Alanı 256 m² olan kare biçimli bir bahçenin çevresi boyunca, köşelerde de birer direk bulunacak ve ardışık iki direk arası 2 m olacak biçimde direkler dikilecektir.\n**Buna göre bahçeye toplam kaç direk dikilir?**",
  gorsel: "<svg viewBox=\"0 0 420 220\" role=\"img\" aria-label=\"Kare bahçe, alanı 256 metrekare; köşelerde birer direk var, direkler arası uzaklık 2 metre.\"><rect x=\"135\" y=\"25\" width=\"150\" height=\"150\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"210\" y=\"106\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">Alan: 256 m²</text><circle cx=\"135\" cy=\"25\" r=\"6\" fill=\"var(--vurgu)\"/><circle cx=\"285\" cy=\"25\" r=\"6\" fill=\"var(--vurgu)\"/><circle cx=\"135\" cy=\"175\" r=\"6\" fill=\"var(--vurgu)\"/><circle cx=\"285\" cy=\"175\" r=\"6\" fill=\"var(--vurgu)\"/><text x=\"210\" y=\"206\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Direkler arası: 2 m</text></svg>",
  secenekler: ["128","64","33","32"],
  dogru: 3,
  hatalar: [
    "Alanı 2'ye böldün (256 ÷ 2 = 128). Direk sayısı için alan değil, çevre kullanılır.",
    "Çevreyi buldun (4 · 16 = 64 m) ama 2 m aralığa bölmeyi unuttun.",
    "Kapalı bir çevrede direk sayısı aralık sayısından bir fazla değildir; aralık sayısına eşittir. Düz bir hatta 1 eklenir, bu yüzden çevrede 33 değil 32 olur.",
    null
  ],
  aciklama: "Karenin kenarı alanın karekökü, çevresi kenarın 4 katıdır. Kapalı bir çevrede (bir şeklin çevresinde) nesne sayısı aralık sayısına eşittir.\nAdım 1: Kenar √{256} = 16 m.\nAdım 2: Çevre 4 · 16 = 64 m.\nAdım 3: Aralık sayısı 64 ÷ 2 = 32; kapalı çevrede direk sayısı da 32'dir.\nSağlama: Her kenarda 16 ÷ 2 = 8 aralık vardır; köşe direkleri iki kenara ortaktır, 4 · 8 = 32.\nSık yapılan hata: Düz bir hattaki gibi aralık sayısına 1 eklemek (33).\nCevap D."
},
{
  id: "mat-kk-245",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 2,
  soru: "Aşağıdaki sayı doğrusunda 6 ile 7 arasında bir P noktası işaretlenmiştir. P noktası 7'ye, 6'dan daha yakındır.\n**Buna göre P noktasına karşılık gelen sayı aşağıdakilerden hangisi olabilir?**",
  gorsel: "<svg viewBox=\"0 0 420 130\" role=\"img\" aria-label=\"Sayı doğrusu: 5, 6, 7 ve 8 işaretli. P noktası 6 ile 7 arasında, 7 sayısına daha yakındır.\"><line x1=\"20\" y1=\"80\" x2=\"400\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"400,80 388,74 388,86\" fill=\"currentColor\"/><line x1=\"40\" y1=\"70\" x2=\"40\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"112\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"150\" y1=\"70\" x2=\"150\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"150\" y=\"112\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">6</text><line x1=\"260\" y1=\"70\" x2=\"260\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"260\" y=\"112\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">7</text><line x1=\"370\" y1=\"70\" x2=\"370\" y2=\"90\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"370\" y=\"112\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">8</text><circle cx=\"238\" cy=\"80\" r=\"6\" fill=\"var(--vurgu)\"/><text x=\"238\" y=\"54\" font-size=\"18\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">P</text></svg>",
  secenekler: ["√{46}","√{42}","√{40}","√{38}"],
  dogru: 0,
  hatalar: [
    null,
    "42 sayısı 36'dan 6, 49'dan 7 uzaktadır; 36'ya daha yakın olduğu için √{42}, 6'ya daha yakındır.",
    "40 sayısı 36'dan 4, 49'dan 9 uzaktadır; 36'ya daha yakın olduğu için √{40}, 6'ya daha yakındır.",
    "38 sayısı 36'dan 2, 49'dan 11 uzaktadır; 36'ya daha yakın olduğu için √{38}, 6'ya daha yakındır."
  ],
  aciklama: "Bir karekökün hangi tam sayıya yakın olduğunu, kök içindeki sayının hangi tam kareye yakın olduğuna bakarak buluruz.\nAdım 1: 6^{2} = 36 ve 7^{2} = 49 olduğundan seçeneklerin hepsi 6 ile 7 arasındadır.\nAdım 2: 7'ye yakın olması için kök içi 49'a daha yakın olmalıdır. 46 sayısı 36'dan 10, 49'dan 3 uzaktadır; 42, 40 ve 38 ise 36'ya daha yakındır.\nSağlama: 6,8^{2} = 46,24 olduğundan √{46} yaklaşık 6,8'dir ve 7'ye daha yakındır.\nSık yapılan hata: Kök içi sayıyı 6 ya da 7 ile kıyaslamak; kıyas 36 ve 49 ile yapılır.\nCevap A."
},
{
  id: "mat-kk-246",
  kazanim: "M.8.1.3.3",
  kademe: 2,
  zorluk: 2,
  soru: "Üç dalgıç aynı gün farklı derinliklere inmiştir. İndikleri derinlikler metre cinsinden 4, 3√{2} ve 2√{5} olarak kaydedilmiştir.\n**Buna göre bu derinliklerin küçükten büyüğe sıralanışı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2√{5} < 4 < 3√{2}","3√{2} < 4 < 2√{5}","4 < 3√{2} < 2√{5}","2√{5} < 3√{2} < 4"],
  dogru: 2,
  hatalar: [
    "2√{5} ifadesini √{10} yazdın (2 · 5). Katsayı karesiyle içeri girer: 2√{5} = √{20}.",
    "3√{2} ifadesini √{6} yazdın (3 · 2). Katsayı karesiyle içeri girer: 3√{2} = √{18}.",
    null,
    "Sıralamayı ters kurdun; büyükten küçüğe sıraladın."
  ],
  aciklama: "Sayıları karşılaştırmak için hepsini tek kök altına al. Katsayı kök içine karesiyle girer: a√{b} = √{a^{2} · b}.\nAdım 1: 4 = √{16}; 3√{2} = √{9 · 2} = √{18}; 2√{5} = √{4 · 5} = √{20}.\nAdım 2: 16 < 18 < 20 olduğundan 4 < 3√{2} < 2√{5}.\nSağlama: Yaklaşık değerler 4; 4,24; 4,47'dir ve bu sırada artar.\nSık yapılan hata: Katsayıyı karesini almadan kök içine almak.\nCevap C."
},
{
  id: "mat-kk-247",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 2,
  soru: "Alanı 20 cm² olan dikdörtgen biçimli bir kitap kapağının genişliği √{5} cm'dir (şekil).\n**Buna göre kapağın uzunluğu kaç santimetredir?**",
  gorsel: "<svg viewBox=\"0 0 420 190\" role=\"img\" aria-label=\"Dikdörtgen kitap kapağı: alanı 20 santimetrekare, kısa kenarı kök 5 santimetre, uzun kenarı bilinmiyor.\"><rect x=\"105\" y=\"40\" width=\"220\" height=\"100\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"215\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">?</text><text x=\"94\" y=\"96\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--vurgu)\" font-weight=\"bold\">√5 cm</text><text x=\"215\" y=\"96\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">Alan: 20 cm²</text></svg>",
  secenekler: ["20√{5}","20","15","4√{5}"],
  dogru: 3,
  hatalar: [
    "Bölmek yerine çarptın: 20 · √{5}. Uzunluk, alanın genişliğe bölümüdür.",
    "Genişliği yok sayıp alanın kendisini yazdın. √{5} ile bölme işlemi yapılmadı.",
    "Alandan genişliği çıkardın (20 − 5 = 15). Dikdörtgende alan, çarpımla bulunduğundan uzunluk bölmeyle bulunur.",
    null
  ],
  aciklama: "Dikdörtgenin alanı = uzunluk · genişlik olduğundan uzunluk = alan ÷ genişlik.\nAdım 1: Uzunluk = [[20|√{5}]].\nAdım 2: Paydayı kökten kurtarmak için pay ve paydayı √{5} ile çarp: [[20√{5}|√{5} · √{5}]] = [[20√{5}|5]].\nAdım 3: 20 ÷ 5 = 4 olduğundan uzunluk 4√{5} cm'dir.\nSağlama: 4√{5} · √{5} = 4 · 5 = 20 cm².\nSık yapılan hata: Bölme yerine çarpma yapmak (20√{5}).\nCevap D."
},
{
  id: "mat-kk-248",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 2,
  soru: "Eşkenar üçgen biçimli bir arsanın bir kenarı √{75} metredir. Arsanın çevresi boydan boya tel örgüyle çevrilecektir (şekil).\n**Buna göre gereken tel örgü kaç metredir?**",
  gorsel: "<svg viewBox=\"0 0 420 205\" role=\"img\" aria-label=\"Eşkenar üçgen biçimli arsa; her kenarı kök 75 metre.\"><polygon points=\"210,25 90,165 330,165\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"140\" y=\"92\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--vurgu)\" font-weight=\"bold\">√75 m</text><text x=\"280\" y=\"92\" font-size=\"16\" text-anchor=\"start\" fill=\"var(--vurgu)\" font-weight=\"bold\">√75 m</text><text x=\"210\" y=\"192\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">√75 m</text><text x=\"210\" y=\"135\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Eşkenar</text></svg>",
  secenekler: ["5√{3}","15","15√{3}","75√{3}"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir kenarı buldun (√{75} = 5√{3}). Eşkenar üçgenin çevresi üç kenarın toplamıdır.",
    "√{75} + √{75} + √{75} toplamını √{225} gibi düşünüp 15 buldun. Toplamada kök içleri toplanmaz; kök içi aynı olan terimlerin katsayıları toplanır.",
    null,
    "√{75} ifadesini 25√{3} yazdın (dışarı 25 çıktı); dışarı çıkan sayı 25'in karekökü olan 5'tir. Böylece çevreyi 3 · 25 = 75√{3} buldun."
  ],
  aciklama: "Eşkenar üçgenin üç kenarı eşittir; çevre 3 · (kenar). Önce kenarı sadeleştirelim.\nAdım 1: √{75} = √{25 · 3} = 5√{3} m.\nAdım 2: Çevre = 3 · 5√{3} = 15√{3} m.\nSağlama: √{3} ≈ 1,73 olduğundan bir kenar yaklaşık 8,66 m, çevre yaklaşık 25,98 m'dir; 15 · 1,73 = 25,95 de buna yakındır.\nSık yapılan hata: Dışarı çıkan sayı olarak çarpanın kendisini (25) yazmak.\nCevap C."
},
{
  id: "mat-kk-249",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 2,
  soru: "Bir terzi, dikdörtgen biçimli bir kumaş parçası kesmiştir. Parçanın bir kenarı √{18} cm, diğer kenarı √{k} cm ve alanı 12 cm²'dir (şekil).\n**Buna göre k kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 420 190\" role=\"img\" aria-label=\"Dikdörtgen kumaş parçası: bir kenarı kök 18 santimetre, diğer kenarı kök k santimetre, alanı 12 santimetrekare.\"><rect x=\"105\" y=\"40\" width=\"220\" height=\"100\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"215\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">√k cm</text><text x=\"94\" y=\"96\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--vurgu)\" font-weight=\"bold\">√18 cm</text><text x=\"215\" y=\"96\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">Alan: 12 cm²</text></svg>",
  secenekler: ["144","12","8","6"],
  dogru: 2,
  hatalar: [
    "Eşitliğin iki yanının karesini aldın (18 · k = 144) ama 18 ile bölmeyi unuttun; 144'ü k sandın.",
    "Alanı (12) doğrudan kök içine yazdın. √{k} yerine k = 12 almak, 12 cm²'lik alanı kenar sanmaktır.",
    null,
    "Kök içlerini çıkarmayı denedin (18 − 12 = 6). Kareköklerin çarpımı kök içlerinin çarpımıdır; çıkarma ile eşitlik kurulmaz."
  ],
  aciklama: "Dikdörtgenin alanı, kenarlarının çarpımıdır; kareköklerin çarpımında kök içleri çarpılır: √{a} · √{b} = √{a · b}.\nAdım 1: √{18} · √{k} = 12 olduğundan √{18k} = 12.\nAdım 2: Her iki yanın karesini al: 18k = 144.\nAdım 3: k = 144 ÷ 18 = 8.\nSağlama: √{18} · √{8} = √{144} = 12 cm²'dir.\nSık yapılan hata: Karesini aldıktan sonra 18 ile bölmeyi unutup 144'te kalmak.\nCevap C."
},
{
  id: "mat-kk-250",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 2,
  soru: "Üç kare biçimli plakanın kenar uzunlukları metre cinsinden a = √{0,49}, b = √{0,64} ve c = 0,75 olarak verilmiştir.\n**Buna göre bu uzunlukların küçükten büyüğe sıralanışı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["a < c < b","c < a < b","a < b < c","b < c < a"],
  dogru: 0,
  hatalar: [
    null,
    "0,75 sayısını 0,7'den küçük sandın. Ondalık sayılarda 0,75 > 0,7'dir (0,75 = 0,70 + 0,05).",
    "c = 0,75 sayısını kök içindeki 0,49 ve 0,64 ile karşılaştırdın. Oysa a ve b sayılarının karekökü alınmalı: a = 0,7, b = 0,8.",
    "Sıralamayı ters kurdun; büyükten küçüğe sıraladın."
  ],
  aciklama: "Kök içinde ondalık sayı varsa önce karekökünü bulup sayıları aynı biçime getir.\nAdım 1: a = √{0,49} = 0,7 (0,7^{2} = 0,49) ve b = √{0,64} = 0,8 (0,8^{2} = 0,64).\nAdım 2: c = 0,75. Sıralama: 0,7 < 0,75 < 0,8, yani a < c < b.\nSağlama: 0,75, 0,70 ile 0,80'in tam ortasındadır.\nSık yapılan hata: Kök işareti olan sayıyla kök içi olan sayıyı doğrudan karşılaştırmak.\nCevap A."
},
{
  id: "mat-kk-251",
  kazanim: "M.8.1.3.8",
  kademe: 2,
  zorluk: 2,
  soru: "Bir sayı doğrusu etkinliğinde öğrencilerden 3 ile 4 arasında bulunan irrasyonel sayıyı seçmeleri istenmiştir.\n**Buna göre öğrenciler aşağıdaki sayılardan hangisini seçmelidir?**",
  gorsel: null,
  secenekler: ["√{5}","√{8}","[[7|2]]","√{14}"],
  dogru: 3,
  hatalar: [
    "√{5} irrasyoneldir ama 4 < 5 < 9 olduğundan 2 ile 3 arasındadır; 3 ile 4 arasında değildir.",
    "√{8} irrasyoneldir ama 4 < 8 < 9 olduğundan 2 ile 3 arasındadır; 3 ile 4 arasında değildir.",
    "[[7|2]] = 3,5 sayısı 3 ile 4 arasındadır ama iki tam sayının oranı olduğu için rasyoneldir, irrasyonel değildir.",
    null
  ],
  aciklama: "Soru iki koşul koyuyor: sayı 3 ile 4 arasında olacak ve irrasyonel olacak. Tam kare olmayan bir sayının karekökü irrasyoneldir.\nAdım 1: Aralık koşulu için kök içi 3^{2} = 9 ile 4^{2} = 16 arasında olmalı. √{5} ve √{8} için kök içi 4 ile 9 arasında kalır, yani bu sayılar 2 ile 3 arasındadır; elenirler.\nAdım 2: [[7|2]] = 3,5 aralıktadır ama iki tam sayının oranıdır, rasyoneldir; elenir.\nAdım 3: 9 < 14 < 16 olduğundan 3 < √{14} < 4; ayrıca 14 tam kare olmadığı için √{14} irrasyoneldir.\nSağlama: 3,7^{2} = 13,69 olduğundan √{14} yaklaşık 3,7'dir.\nSık yapılan hata: Yalnızca aralığa bakıp sayının türünü denetlememek ya da yalnızca türe bakıp aralığı denetlememek.\nCevap D."
},
{
  id: "mat-kk-252",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir tiyatro salonunda 196 koltuk, sıra sayısı ile her sıradaki koltuk sayısı eşit olacak biçimde kare düzende yerleştirilmiştir. Salon yönetimi; en ön ve en arka sıradaki koltukları ile en soldaki ve en sağdaki sütunlardaki koltukları (şekilde koyu gösterilen dış çerçeve) yaşlı misafirler için ayıracaktır.\n**Buna göre ayrılan koltuk sayısı kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 420 256\" role=\"img\" aria-label=\"Kare düzende koltuklar: dış çerçevedeki koltuklar koyu renkli, toplam 196 koltuk.\"><circle cx=\"103\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"14\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"30\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"30\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"30\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"46\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"46\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"46\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"62\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"62\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"62\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"78\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"78\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"78\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"94\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"94\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"94\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"110\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"110\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"110\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"126\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"126\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"126\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"142\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"142\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"142\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"158\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"158\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"158\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"174\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"174\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"174\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"190\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"190\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"190\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"206\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"206\" r=\"5.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"206\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"103\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"119\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"135\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"151\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"167\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"183\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"199\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"215\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"231\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"247\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"263\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"279\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"295\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><circle cx=\"311\" cy=\"222\" r=\"5.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"210\" y=\"246\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Toplam: 196 koltuk (koyu: dış çerçeve)</text></svg>",
  secenekler: ["48","52","56","98"],
  dogru: 1,
  hatalar: [
    "Köşeleri gereğinden fazla çıkardın: 4 · (14 − 2) = 48. Her kenarda yalnızca iki köşe koltuğu ortaktır, iki kez sayılan köşeler 4 tanedir.",
    null,
    "Dört kenarı 14 koltuk diye toplayıp (4 · 14 = 56) köşe koltuklarını ikişer kez saydın.",
    "Toplam koltuk sayısını ikiye böldün (196 ÷ 2 = 98). Dış çerçeve yarım değildir; sayısı kenar uzunluğundan bulunur."
  ],
  aciklama: "Kare düzende sıra sayısı, toplam koltuk sayısının karekökünü verir. Dış çerçevenin koltuk sayısı, tüm koltuklardan içteki küçük karenin koltuklarını çıkararak bulunur.\nAdım 1: Bir kenardaki koltuk sayısı √{196} = 14.\nAdım 2: Dış çerçeve çıkarılınca içte (14 − 2) · (14 − 2) = 12 · 12 = 144 koltuk kalır.\nAdım 3: Dış çerçeve: 196 − 144 = 52 koltuk.\nSağlama: Başka yoldan 4 · 14 − 4 = 52 (dört köşe ikişer kez sayıldığı için 4 çıkarıldı).\nSık yapılan hata: Köşe koltuklarını iki kez saymak (56).\nCevap B."
},
{
  id: "mat-kk-253",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 3,
  soru: "Kare biçimli bir sahnenin alanı 144 m²'dir. Sahnenin dört kenarı boyunca eşit genişlikte halı serilecektir. Sahne ve halı birlikte, alanı 256 m² olan kare biçimli bir bölge oluşturmaktadır (şekil).\n**Buna göre halının genişliği olan x kaç metredir?**",
  gorsel: "<svg viewBox=\"0 0 420 235\" role=\"img\" aria-label=\"İç içe iki kare: içteki sahne 144 metrekare; dıştaki sahne ve halı birlikte 256 metrekare; halı genişliği x.\"><rect x=\"120\" y=\"15\" width=\"180\" height=\"180\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"150\" y=\"45\" width=\"120\" height=\"120\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"210\" y=\"110\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Sahne</text><text x=\"210\" y=\"130\" font-size=\"15\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">144 m²</text><text x=\"135\" y=\"109\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">x</text><text x=\"210\" y=\"36\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">x</text><text x=\"210\" y=\"222\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Sahne ve halı birlikte: 256 m²</text></svg>",
  secenekler: ["2","4","16","112"],
  dogru: 0,
  hatalar: [
    null,
    "İki kenarın farkını (16 − 12 = 4) buldun ama halı sahnenin iki karşıt tarafında da bulunduğundan bu fark x'in iki katıdır. 4'ü ikiye bölmedin.",
    "Sahne ve halının birlikte oluşturduğu karenin kenarını (√{256} = 16) halı genişliği sandın.",
    "Alanların farkını (256 − 144 = 112) genişlik sandın. Genişlik kenarlardan bulunur, alanlardan değil."
  ],
  aciklama: "Halının genişliği, iki karenin kenar farkından bulunur; bu farkın yarısı bir yandaki genişliktir.\nAdım 1: Sahnenin kenarı √{144} = 12 m, toplam karenin kenarı √{256} = 16 m.\nAdım 2: Toplam kenar = sahne kenarı + iki yandaki halı: 16 = 12 + x + x.\nAdım 3: 2x = 4 olduğundan x = 2 m.\nSağlama: (12 + 2 + 2)^{2} = 16^{2} = 256 m².\nSık yapılan hata: Kenar farkını (4) iki tarafa bölmeden genişlik sanmak.\nCevap A."
},
{
  id: "mat-kk-254",
  kazanim: "M.8.1.3.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okulun 500 öğrencisi, sıra sayısı ile her sıradaki öğrenci sayısı eşit olacak biçimde kare düzende gösteri yapacaktır. Düzen, kurulabilecek en büyük kare olacak biçimde oluşturulacak; kare düzende yer alamayan öğrenciler yedek bekleyecektir.\n**Buna göre kaç öğrenci yedek bekler?**",
  gorsel: null,
  secenekler: ["484","29","22","16"],
  dogru: 3,
  hatalar: [
    "484, kare düzende yer alan öğrenci sayısıdır; soru yedekte kalanları soruyor.",
    "23^{2} = 529 olduğundan 529 − 500 = 29 buldun. Bu sayı, bir üst kareyi tamamlamak için eksik olan öğrenci sayısıdır, yedek sayısı değil.",
    "22, kare düzenin bir kenarındaki öğrenci sayısıdır; yedek sayısı değil.",
    null
  ],
  aciklama: "Kurulabilecek en büyük kare düzen için, karesi 500'ü aşmayan en büyük doğal sayı aranır.\nAdım 1: 22^{2} = 484 ve 23^{2} = 529 olduğundan 484 ≤ 500 < 529. En büyük düzen 22 sıra, her sırada 22 öğrenci.\nAdım 2: Kare düzende 484 öğrenci yer alır.\nAdım 3: Yedek: 500 − 484 = 16 öğrenci.\nSağlama: 484 + 16 = 500.\nSık yapılan hata: 23^{2} = 529 ile 500 arasındaki farkı (29) yedek sayısı sanmak.\nCevap D."
},
{
  id: "mat-kk-255",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 3,
  soru: "Dört arkadaş, aşağıdaki tabloda yer alan kareköklü sayılar için hangi iki doğal sayı arasında olduklarını ve hangisine daha yakın olduklarını tahmin etmiştir.\n**Buna göre hangi arkadaşın tahmininin tamamı doğrudur?**",
  gorsel: "<table class=\"tablo\"><tr><th>Arkadaş</th><th>Sayı</th><th>Tahmini</th></tr><tr><td>Ali</td><td>√26</td><td>5 ile 6 arasında, 6'ya daha yakın</td></tr><tr><td>Bora</td><td>√57</td><td>7 ile 8 arasında, 7'ye daha yakın</td></tr><tr><td>Cem</td><td>√105</td><td>11 ile 12 arasında, 11'e daha yakın</td></tr><tr><td>Deniz</td><td>√115</td><td>10 ile 11 arasında, 11'e daha yakın</td></tr></table>",
  secenekler: ["Ali","Bora","Cem","Deniz"],
  dogru: 3,
  hatalar: [
    "√26 gerçekten 5 ile 6 arasındadır ama 26, 25'ten 1, 36'dan 10 uzaktadır; 25'e yani 5'e daha yakındır.",
    "√57 gerçekten 7 ile 8 arasındadır ama 57, 49'dan 8, 64'ten 7 uzaktadır; 64'e yani 8'e daha yakındır.",
    "11^{2} = 121 > 105 olduğundan √105, 11'den küçüktür; aralık yanlış yazılmıştır. Doğrusu 10 ile 11 arasındadır ve 100'e yakın olduğundan 10'a daha yakındır.",
    null
  ],
  aciklama: "Her kareköke iki işlem uygulanır: önce iki tam kare arasına yerleştirilir, sonra kök içinin bu tam karelere uzaklığına bakılır.\nAdım 1: Ali: 25 < 26 < 36; 26 sayısı 25'e 1, 36'ya 10 uzakta → 5'e yakın. Ali \"6'ya yakın\" dediği için yanılıyor.\nAdım 2: Bora: 49 < 57 < 64; 57, 49'a 8, 64'e 7 uzakta → 8'e yakın. Bora \"7'ye yakın\" dediği için yanılıyor. Cem: 100 < 105 < 121; √105, 10 ile 11 arasındadır, \"11 ile 12 arasında\" demesi yanlıştır.\nAdım 3: Deniz: 100 < 115 < 121; 115, 100'e 15, 121'e 6 uzakta → 11'e yakın. Hem aralık hem yakınlık doğru.\nSağlama: 10,7^{2} = 114,49 olduğundan √{115} yaklaşık 10,7'dir; 11'e daha yakındır.\nSık yapılan hata: \"Arasında\" kısmını doğru bulup yakınlık kısmını denetlememek.\nCevap D."
},
{
  id: "mat-kk-256",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir ip makarasında 10 metre ip bulunmaktadır. Bu makaradan √{50} metre ip kesilerek bir pakete sarılmıştır.\n**Buna göre makarada kalan ipin uzunluğu, metre cinsinden hangi iki ardışık doğal sayı arasındadır?**",
  gorsel: null,
  secenekler: ["2 ile 3","3 ile 4","7 ile 8","17 ile 18"],
  dogru: 0,
  hatalar: [
    null,
    "Kesilen kısmı 6 ile 7 arasında aldın (√{50} için 49 < 50 olduğundan √{50} 7'den büyüktür). Doğrusu 7 ile 8 arasındadır.",
    "Kesilen ipin uzunluğunu (√{50}, yani 7 ile 8) kalan ip sandın.",
    "Çıkarma yerine toplama yaptın: 10 + √{50}."
  ],
  aciklama: "Önce kesilen ipin hangi iki doğal sayı arasında olduğunu buluruz; sonra 10'dan çıkarırken sınırların yer değiştirdiğine dikkat ederiz.\nAdım 1: 49 < 50 < 64 olduğundan 7 < √{50} < 8.\nAdım 2: Çıkarmada küçük sınırla büyük sınır yer değiştirir: 10 − 8 < 10 − √{50} < 10 − 7, yani 2 < kalan ip < 3.\nSağlama: √{50} ≈ 7,07 olduğundan 10 − 7,07 = 2,93 ve bu gerçekten 2 ile 3 arasındadır.\nSık yapılan hata: Çıkarma sonrası sınırların sırasını değiştirmeyi unutmak.\nCevap A."
},
{
  id: "mat-kk-257",
  kazanim: "M.8.1.3.2",
  kademe: 2,
  zorluk: 3,
  soru: "Sayı doğrusunda A noktası √{40} sayısına, B noktası √{90} sayısına karşılık gelmektedir.\n**Buna göre A ile B noktaları arasında kaç tane tam sayı vardır?**",
  gorsel: null,
  secenekler: ["3","4","5","6"],
  dogru: 0,
  hatalar: [
    null,
    "A noktasının solunda kalan 6'yı da saydın (6, 7, 8, 9). Oysa √{40} yaklaşık 6,3'tür; 6 bu noktanın solundadır.",
    "Hem A'nın solundaki 6'yı hem B'nin sağındaki 10'u saydın (6, 7, 8, 9, 10). Oysa √{40} > 6 ve √{90} < 10'dur.",
    "Uç noktaları yaklaşık değere dönüştürmek yerine 5'ten 10'a kadar olan tam sayıları (5, 6, 7, 8, 9, 10) saydın."
  ],
  aciklama: "A ile B arasındaki tam sayıları bulmak için iki kareköke de komşu tam sayılar bulunur.\nAdım 1: 36 < 40 < 49 olduğundan 6 < √{40} < 7. A noktası 6 ile 7 arasındadır.\nAdım 2: 81 < 90 < 100 olduğundan 9 < √{90} < 10. B noktası 9 ile 10 arasındadır.\nAdım 3: A ile B arasında kalan tam sayılar 7, 8 ve 9'dur: 3 tane.\nSağlama: √{40} ≈ 6,3 ve √{90} ≈ 9,5 olduğundan 6,3 ile 9,5 arasındaki tam sayılar 7, 8 ve 9'dur.\nSık yapılan hata: Uç noktaların komşu tam sayılarını da sayıya katmak.\nCevap A."
},
{
  id: "mat-kk-258",
  kazanim: "M.8.1.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir oyunda oyuncunun girdiği x doğal sayısı, 3√{2} sayısından büyük ve 4√{3} sayısından küçükse kapı açılmaktadır.\n**Buna göre kapıyı açan kaç farklı x doğal sayısı vardır?**",
  gorsel: null,
  secenekler: ["5","4","3","2"],
  dogru: 3,
  hatalar: [
    "Katsayıları karesiz içeri alıp (3√{2} = √{6}, 4√{3} = √{12}) alt sınırı yaklaşık 2,4 buldun; 3, 4, 5, 6, 7'yi saydın. Doğrusu 3√{2} = √{18}, 4√{3} = √{48}.",
    "Hem 4'ü hem 7'yi saydın: 3√{2} = √{18} sayısı 4'ten büyüktür, 4√{3} = √{48} sayısı 7'den küçüktür.",
    "3√{2} sayısını 4'ten küçük sandın ve 4, 5, 6 dedin. Oysa √{18} > √{16} = 4 olduğundan 4 aralığa girmez.",
    null
  ],
  aciklama: "Sınırlardaki katsayılı kökleri tek kök altına alıp hangi doğal sayılar arasında kaldıklarını buluruz.\nAdım 1: 3√{2} = √{9 · 2} = √{18} ve 4√{3} = √{16 · 3} = √{48}.\nAdım 2: 16 < 18 < 25 olduğundan 4 < √{18} < 5; 36 < 48 < 49 olduğundan 6 < √{48} < 7.\nAdım 3: 4,2 civarından 6,9 civarına kadar olan doğal sayılar 5 ve 6'dır: 2 tane.\nSağlama: 3√{2} ≈ 4,24 ve 4√{3} ≈ 6,93; bu iki sayı arasında yalnızca 5 ve 6 vardır.\nSık yapılan hata: Katsayıyı karesini almadan kök içine alıp sınırları yanlış bulmak.\nCevap D."
},
{
  id: "mat-kk-259",
  kazanim: "M.8.1.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir mimari çizim programı, uzunluğu √{450} metre olan bir duvarı a√{b} biçiminde göstermektedir. Burada b, mümkün olan en küçük pozitif tam sayıdır.\n**Buna göre a + b toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["17","23","53","451"],
  dogru: 0,
  hatalar: [
    null,
    "450 = 25 · 18 diye ayırıp 5√{18} yazdın; ama 18 içinde hâlâ tam kare çarpan (9) var. Sadeleştirme tamamlanmadı, b en küçük değil. (5 + 18 = 23)",
    "450 = 9 · 50 diye ayırıp 3√{50} yazdın; ama 50 içinde hâlâ tam kare çarpan (25) var. Sadeleştirme tamamlanmadı, b en küçük değil. (3 + 50 = 53)",
    "Hiç sadeleştirmeden √{450} = 1√{450} yazdın (a = 1, b = 450). Kök içinde 225 gibi tam kare çarpan olduğunu görmedin."
  ],
  aciklama: "b'nin en küçük olması, kök içinden mümkün olan en büyük tam kare çarpanın dışarı çıkması demektir.\nAdım 1: 450 = 225 · 2 (225 = 15^{2} tam karedir).\nAdım 2: √{450} = √{225} · √{2} = 15√{2}. Demek ki a = 15, b = 2.\nAdım 3: a + b = 15 + 2 = 17.\nSağlama: 15^{2} · 2 = 225 · 2 = 450.\nSık yapılan hata: Daha küçük bir tam kare çarpanla durmak (25 ya da 9); kök içinde tam kare çarpan kaldıysa sadeleştirme bitmemiştir.\nCevap A."
},
{
  id: "mat-kk-260",
  kazanim: "M.8.1.3.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir bulmaca oyununda iki gizli doğal sayı vardır: a ve b. Oyun bu sayıları doğrudan göstermez; yalnızca √{a} = 6√{2} ve √{b} = 2√{7} eşitliklerini verir. Anahtar sayı, a ile b'nin aritmetik ortalamasıdır ve oyuncu anahtar sayıyı bulursa bölümü geçer.\n**Buna göre anahtar sayı kaçtır?**",
  gorsel: null,
  secenekler: ["13","20","50","100"],
  dogru: 2,
  hatalar: [
    "Katsayıları kök içindeki sayılarla çarpıp a = 12, b = 14 buldun ve ortalamayı 13 aldın. Katsayı kök içine karesiyle girer: a = 36 · 2 = 72.",
    "Yalnızca katsayıların karesini aldın (a = 36, b = 4), kök içindeki sayıları (2 ve 7) katmadın; ortalamayı 20 buldun. Doğrusu a = 36 · 2 ve b = 4 · 7'dir.",
    null,
    "a + b = 72 + 28 = 100 toplamını buldun ama iki sayının ortalaması için toplamı 2'ye bölmeyi unuttun."
  ],
  aciklama: "Katsayılı bir kök, kök içine alınırken katsayının karesi kök içindeki sayıyla çarpılır: m√{n} = √{m^{2} · n}. İki sayının aritmetik ortalaması, toplamlarının yarısıdır.\nAdım 1: 6√{2} = √{6^{2} · 2} = √{72} olduğundan a = 72.\nAdım 2: 2√{7} = √{2^{2} · 7} = √{28} olduğundan b = 28.\nAdım 3: Anahtar sayı (72 + 28) ÷ 2 = 100 ÷ 2 = 50.\nSağlama: √{72} = √{36 · 2} = 6√{2} ve √{28} = √{4 · 7} = 2√{7}; iki sayı da doğru bulunmuştur.\nSık yapılan hata: Katsayının karesini almak yerine katsayıyı kök içiyle çarpmak (6 · 2 = 12).\nCevap C."
},
{
  id: "mat-kk-261",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir atölyede, bir kenarı 2√{6} cm olan kare biçimli bir levha, alanı değişmeyecek biçimde dikdörtgen biçimli bir levhaya dönüştürülecektir. Dikdörtgenin kenarlarından biri 4√{3} cm'dir (şekil).\n**Buna göre dikdörtgenin diğer kenarı kaç santimetredir?**",
  gorsel: "<svg viewBox=\"0 0 430 195\" role=\"img\" aria-label=\"Solda kenarı 2 kök 6 santimetre olan kare, sağda bir kenarı 4 kök 3 santimetre olan dikdörtgen; alanları eşit.\"><rect x=\"30\" y=\"45\" width=\"110\" height=\"110\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"85\" y=\"182\" font-size=\"17\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">2√6 cm</text><text x=\"195\" y=\"105\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Alan aynı</text><rect x=\"250\" y=\"70\" width=\"140\" height=\"75\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"320\" y=\"168\" font-size=\"17\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">4√3 cm</text><text x=\"402\" y=\"114\" font-size=\"18\" text-anchor=\"start\" fill=\"var(--vurgu)\" font-weight=\"bold\">?</text></svg>",
  secenekler: ["√{3}","2√{3}","6","6√{3}"],
  dogru: 1,
  hatalar: [
    "Karenin alanını hesaplarken katsayının karesini almadın: 2√{6} · 2√{6} = 2 · 6 = 12 buldun. Doğrusu 4 · 6 = 24. Sonra 12 ÷ 4√{3} = √{3} çıktı.",
    null,
    "Alanı doğru buldun (24) ve 24 ÷ 4 = 6 yaptın ama √{3} ile bölmeyi unuttun.",
    "[[6|√{3}]] ifadesini paydadan kurtarırken pay ve paydayı √{3} ile çarptın ama paydadaki √{3} · √{3} = 3 ile bölmeyi unuttun."
  ],
  aciklama: "Alan değişmediğine göre dikdörtgenin alanı, karenin alanına eşittir. Dikdörtgenin eksik kenarı, alanın bilinen kenara bölümüdür.\nAdım 1: Karenin alanı (2√{6})^{2} = 4 · 6 = 24 cm².\nAdım 2: Diğer kenar = 24 ÷ 4√{3} = [[6|√{3}]].\nAdım 3: Pay ve paydayı √{3} ile çarp: [[6√{3}|3]] = 2√{3} cm.\nSağlama: 4√{3} · 2√{3} = 8 · 3 = 24 cm².\nSık yapılan hata: Katsayının karesini almadan alan hesaplamak (12).\nCevap B."
},
{
  id: "mat-kk-262",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Dikdörtgen biçimli bir panonun genişliği √{3} dm, uzunluğu ise (√{27} − √{12}) dm'dir (şekil).\n**Buna göre panonun alanı kaç dm²'dir?**",
  gorsel: "<svg viewBox=\"0 0 420 190\" role=\"img\" aria-label=\"Dikdörtgen pano: genişliği kök 3 desimetre, uzunluğu kök 27 eksi kök 12 desimetre.\"><rect x=\"105\" y=\"40\" width=\"220\" height=\"100\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"215\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">(√27 − √12) dm</text><text x=\"94\" y=\"96\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--vurgu)\" font-weight=\"bold\">√3 dm</text><text x=\"215\" y=\"96\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">Pano</text></svg>",
  secenekler: ["9","3√{5}","6","3"],
  dogru: 3,
  hatalar: [
    "√{3} · √{27} = 9 hesaplayıp ikinci çarpımı (√{3} · √{12} = 6) çıkarmayı unuttun.",
    "√{27} − √{12} farkını √{15} yazdın (kök içlerini çıkardın) ve √{3} ile çarpıp √{45} = 3√{5} buldun. Kök içleri çıkarılmaz; önce sadeleştirilir.",
    "Yalnızca ikinci çarpımı aldın (√{3} · √{12} = 6); birinci çarpımı (9) ve çıkarmayı hesaba katmadın.",
    null
  ],
  aciklama: "Alan = genişlik · uzunluk. Parantez içindeki farkı önce sadeleştirmek en kısa yoldur.\nAdım 1: √{27} = 3√{3} ve √{12} = 2√{3} olduğundan √{27} − √{12} = 3√{3} − 2√{3} = √{3}.\nAdım 2: Alan = √{3} · √{3} = 3 dm².\nSağlama: Dağıtarak da yapılır: √{3} · √{27} − √{3} · √{12} = √{81} − √{36} = 9 − 6 = 3.\nSık yapılan hata: Farkı kök içlerini çıkararak (√{15}) yazmak.\nCevap D."
},
{
  id: "mat-kk-263",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir robot, saniyede √{6} metre hızla sabit giderek 18√{2} metrelik bir parkuru tamamlamaktadır.\n**Buna göre robot parkuru kaç saniyede tamamlar?**",
  gorsel: null,
  secenekler: ["3√{2}","6","6√{3}","18√{3}"],
  dogru: 2,
  hatalar: [
    "Katsayı 18'i kök içindeki 6 ile bölüp (18 ÷ 6 = 3) √{2}'yi aynen bıraktın. Katsayı kök içiyle değil, katsayıyla bölünür; kök içleri kendi aralarında bölünür.",
    "Kök işaretlerini bırakıp 18 · 2 ÷ 6 = 6 hesapladın. Kökler bu şekilde yok edilemez.",
    null,
    "√{2} ÷ √{6} yerine √{6} ÷ √{2} = √{3} aldın; bölmeyi ters yaptın."
  ],
  aciklama: "Süre = yol ÷ hız. Kareköklü ifadelerde bölünürken kök içleri kendi aralarında bölünür, sonra payda kökten kurtarılır.\nAdım 1: Süre = 18√{2} ÷ √{6} = 18 · √{2 ÷ 6} = [[18|√{3}]].\nAdım 2: Pay ve paydayı √{3} ile çarp: [[18√{3}|3]] = 6√{3} saniye.\nSağlama: 6√{3} · √{6} = 6√{18} = 6 · 3√{2} = 18√{2} metre.\nSık yapılan hata: Bölmeyi ters kurmak (√{6} ÷ √{2}).\nCevap C."
},
{
  id: "mat-kk-264",
  kazanim: "M.8.1.3.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kafenin terası dikdörtgen biçimlidir; kenar uzunlukları 6√{2} m ve 4√{2} m'dir. Teras, kenarı √{2} m olan kare biçimli karolarla, hiçbiri kesilmeden ve boşluk kalmadan döşenecektir (şekil).\n**Buna göre kaç karo gerekir?**",
  gorsel: "<svg viewBox=\"0 0 420 190\" role=\"img\" aria-label=\"Dikdörtgen teras: uzun kenarı 6 kök 2 metre, kısa kenarı 4 kök 2 metre.\"><rect x=\"105\" y=\"40\" width=\"220\" height=\"100\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"215\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">6√2 m</text><text x=\"94\" y=\"96\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--vurgu)\" font-weight=\"bold\">4√2 m</text><text x=\"215\" y=\"96\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">Teras</text><text x=\"215\" y=\"172\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Karo kenarı: √2 m</text></svg>",
  secenekler: ["10","24","24√{2}","48"],
  dogru: 1,
  hatalar: [
    "Uzun kenara 6, kısa kenara 4 karo sığdığını buldun ama bunları çarpmak yerine topladın (6 + 4 = 10).",
    null,
    "Terasın alanını (48) karonun kenarına (√{2}) böldün. Karo sayısı için alan, karonun alanına (2 m²) bölünmelidir.",
    "Terasın alanını (48 m²) karo sayısı sandın; karonun alanına bölmedin."
  ],
  aciklama: "Karo sayısı, her kenara kaç karo sığdığının çarpımıdır.\nAdım 1: Uzun kenara 6√{2} ÷ √{2} = 6 karo sığar.\nAdım 2: Kısa kenara 4√{2} ÷ √{2} = 4 karo sığar.\nAdım 3: Karo sayısı 6 · 4 = 24.\nSağlama: Terasın alanı 6√{2} · 4√{2} = 24 · 2 = 48 m²; bir karonun alanı (√{2})^{2} = 2 m²; 48 ÷ 2 = 24.\nSık yapılan hata: Alanı karonun kenarına bölmek (24√{2}).\nCevap B."
},
{
  id: "mat-kk-265",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 3,
  soru: "Kenar uzunlukları √{12} m, √{27} m ve √{48} m olan üçgen biçimli bir yelkenin her kenarına koruyucu bir şerit dikilecektir (şekil).\n**Buna göre gereken şerit kaç metredir?**",
  gorsel: "<svg viewBox=\"0 0 420 205\" role=\"img\" aria-label=\"Üçgen biçimli yelken: kenarları kök 12, kök 27 ve kök 48 metre.\"><polygon points=\"210,25 90,165 330,165\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"140\" y=\"92\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--vurgu)\" font-weight=\"bold\">√12 m</text><text x=\"280\" y=\"92\" font-size=\"16\" text-anchor=\"start\" fill=\"var(--vurgu)\" font-weight=\"bold\">√27 m</text><text x=\"210\" y=\"192\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">√48 m</text></svg>",
  secenekler: ["24√{3}","9√{3}","7√{3}","√{87}"],
  dogru: 1,
  hatalar: [
    "Katsayıları toplamak yerine çarptın: 2 · 3 · 4 = 24. Çevre, kenarların toplamıdır.",
    null,
    "√{48} sayısını 2√{3} yazdın; doğrusu 4√{3}. Böylece 2 + 3 + 2 = 7 buldun.",
    "Kök içlerini topladın: 12 + 27 + 48 = 87. Kareköklü ifadeler toplanırken kök içleri toplanmaz."
  ],
  aciklama: "Çevre, üç kenarın toplamıdır. Toplamak için önce kökleri sadeleştirip kök içlerini aynı yapmak gerekir.\nAdım 1: √{12} = 2√{3}, √{27} = 3√{3} ve √{48} = 4√{3}.\nAdım 2: 2√{3} + 3√{3} + 4√{3} = 9√{3} m.\nSağlama: Yaklaşık değerler 3,46 + 5,20 + 6,93 = 15,59 ve 9 · 1,73 = 15,57'dir.\nSık yapılan hata: Kök içlerini toplayıp √{87} yazmak.\nCevap B."
},
{
  id: "mat-kk-266",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir tasarımcı, uzunluğu 8√{2} cm olan bir şeridi iki parçanın uç uca eklenmesiyle oluşturacaktır. Birinci parça √{50} cm, ikinci parça ise √{x} cm'dir.\n**Buna göre x kaçtır?**",
  gorsel: null,
  secenekler: ["128","78","18","3"],
  dogru: 2,
  hatalar: [
    "8√{2} ifadesini √{128} diye kök içine alıp birinci parçayı çıkarmadan x yerine yazdın. Şeridin tamamı değil, ikinci parça aranıyor.",
    "Toplam şeridi √{128} yazıp kök içlerini çıkardın: 128 − 50 = 78. Kök içleri çıkarılmaz; önce sadeleştirilir.",
    null,
    "Katsayı farkını (8 − 5 = 3) buldun ama √{x} yerine bu katsayıyı yazdın. 3√{2} = √{18} olduğundan x = 3 değil, 18'dir."
  ],
  aciklama: "İki parçanın toplamı 8√{2} olduğundan önce birinci parçayı sadeleştirip ikinci parçayı toplamdan çıkaracağız.\nAdım 1: √{50} = 5√{2}.\nAdım 2: 5√{2} + √{x} = 8√{2} olduğundan √{x} = 8√{2} − 5√{2} = 3√{2}.\nAdım 3: Kök içine al: 3√{2} = √{9 · 2} = √{18}. Demek ki x = 18.\nSağlama: √{50} + √{18} = 5√{2} + 3√{2} = 8√{2}.\nSık yapılan hata: Kök içine alırken katsayının karesini almamak (3 yazmak).\nCevap C."
},
{
  id: "mat-kk-267",
  kazanim: "M.8.1.3.5",
  kademe: 2,
  zorluk: 3,
  soru: "Çevresi 14√{3} cm olan dikdörtgen biçimli bir kartın kısa kenarı 2√{3} cm'dir (şekil).\n**Buna göre kartın uzun kenarı kaç santimetredir?**",
  gorsel: "<svg viewBox=\"0 0 420 190\" role=\"img\" aria-label=\"Dikdörtgen kart: kısa kenarı 2 kök 3 santimetre, çevresi 14 kök 3 santimetre, uzun kenarı bilinmiyor.\"><rect x=\"105\" y=\"40\" width=\"220\" height=\"100\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"215\" y=\"28\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">?</text><text x=\"94\" y=\"96\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--vurgu)\" font-weight=\"bold\">2√3 cm</text><text x=\"215\" y=\"96\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\">Çevre: 14√3 cm</text></svg>",
  secenekler: ["5√{3}","7√{3}","10√{3}","12√{3}"],
  dogru: 0,
  hatalar: [
    null,
    "Çevrenin yarısını (7√{3}) uzun kenar sandın. Çevrenin yarısı, uzun ve kısa kenarın toplamıdır; kısa kenarı çıkarmak gerekir.",
    "14√{3} − 2 · 2√{3} = 10√{3} hesapladın; iki kısa kenarı çıkardın ama kalanı ikiye bölmedin (kalan iki uzun kenarın toplamıdır).",
    "Çevreden yalnızca bir kısa kenarı çıkardın (14√{3} − 2√{3}) ve bölmeyi yapmadın."
  ],
  aciklama: "Dikdörtgenin çevresi 2 · (uzun kenar + kısa kenar) olduğundan çevrenin yarısı iki komşu kenarın toplamıdır.\nAdım 1: Çevrenin yarısı 14√{3} ÷ 2 = 7√{3} cm.\nAdım 2: Uzun kenar = 7√{3} − 2√{3} = 5√{3} cm.\nSağlama: Çevre 2 · (5√{3} + 2√{3}) = 2 · 7√{3} = 14√{3}.\nSık yapılan hata: Çevrenin yarısını (7√{3}) uzun kenar sanmak.\nCevap A."
},
{
  id: "mat-kk-268",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 3,
  soru: "Bir şifre oyununda ekranda √{72} sayısı vardır. Oyuncu iki basamaklı bir k doğal sayısı seçip √{72} · √{k} çarpımını hesaplar; çarpım doğal sayı çıkarsa şifre çözülür.\n**Buna göre şifreyi çözen kaç farklı k değeri vardır?**",
  gorsel: null,
  secenekler: ["3","4","5","6"],
  dogru: 2,
  hatalar: [
    "Yalnızca 18, 32 ve 50'yi buldun; 72 ve 98 sayıları da uygundur (72 · 72 = 5184 = 72^{2}, 72 · 98 = 7056 = 84^{2}).",
    "18, 32, 50 ve 72'yi buldun ama 98'i (2 · 49) unuttun. 72 · 98 = 7056 = 84^{2} olduğundan 98 de uygundur.",
    null,
    "Tek basamaklı 8'i de (72 · 8 = 576 = 24^{2}) saydın. Soru iki basamaklı k değerlerini istiyor."
  ],
  aciklama: "72 · k çarpımı tam kare olmalıdır. Önce 72'nin asal çarpanlarına bak, eksik çarpanı bul.\nAdım 1: 72 = 2^{3} · 3^{2}. Üssü tek olan çarpan 2'dir; bu yüzden k = 2 · (tam kare) biçiminde olmalıdır.\nAdım 2: k değerleri: 2, 8, 18, 32, 50, 72, 98, 128, …\nAdım 3: İki basamaklı olanlar: 18, 32, 50, 72, 98 → 5 tane.\nSağlama: √{72} · √{98} = √{7056} = 84, doğal sayıdır.\nSık yapılan hata: Bir değeri atlamak ya da tek basamaklı değeri (8) saymak.\nCevap C."
},
{
  id: "mat-kk-269",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 3,
  soru: "√{48} sayısı, 2√{k} sayısıyla çarpılacak ve çarpımın bir doğal sayı olması istenmektedir. k, bunu sağlayan en küçük pozitif doğal sayıdır.\n**Buna göre bu çarpımın değeri kaçtır?**",
  gorsel: null,
  secenekler: ["48","24","12","3"],
  dogru: 1,
  hatalar: [
    "k yerine 48 alıp √{48} · √{48} = 48 hesapladın; 2 katsayısını ve en küçük k değerini hesaba katmadın.",
    null,
    "2 katsayısını unuttun: 4√{3} · √{3} = 12. Çarpımda 2 çarpanı da bulunur.",
    "Çarpımın değerini değil, k değerini (3) yazdın."
  ],
  aciklama: "Çarpımın doğal sayı olması için kök içlerini tamamlayan en küçük k bulunur; sonra çarpım hesaplanır.\nAdım 1: √{48} = 4√{3}. Çarpımın doğal sayı olması için √{3} ile çarpmak gerekir, bu yüzden en küçük k = 3.\nAdım 2: Çarpım = 4√{3} · 2√{3} = (4 · 2) · (√{3} · √{3}) = 8 · 3 = 24.\nSağlama: k = 1 ya da 2 olsaydı kök içinde 3 kalırdı; ilk uygun değer 3'tür.\nSık yapılan hata: Sorulan değer yerine k'yı yazmak (3).\nCevap B."
},
{
  id: "mat-kk-270",
  kazanim: "M.8.1.3.6",
  kademe: 2,
  zorluk: 3,
  soru: "Aşağıdaki sayılar, √{8} sayısıyla çarpılacaktır: √{2}, √{12}, √{18}, √{27}, √{32}, 3√{2} ve √{50}.\n**Buna göre bu sayılardan kaç tanesi √{8} ile çarpıldığında sonuç doğal sayı olur?**",
  gorsel: null,
  secenekler: ["4","5","6","7"],
  dogru: 1,
  hatalar: [
    "3√{2} sayısını katsayı var diye dışarıda bıraktın; oysa √{8} · 3√{2} = 3 · √{16} = 12 doğal sayıdır.",
    null,
    "Uygun olmayan bir sayıyı da saydın. √{8} · √{12} = √{96} ve √{8} · √{27} = √{216} doğal sayı değildir.",
    "Yedi sayının hepsini saydın. √{12} ve √{27} ile çarpım doğal sayı vermez."
  ],
  aciklama: "√{8} = 2√{2} olduğundan çarpımın doğal sayı olması için diğer sayının kök içinde 2 ile bir tam karenin çarpımı kalması gerekir.\nAdım 1: 8 · n çarpımı tam kare olmalı; 8 = 2^{3} olduğundan n = 2 · (tam kare) biçimindedir.\nAdım 2: √{2} (2 = 2 · 1) uygun; √{12} (12 = 2 · 6) uygun değil; √{18} (18 = 2 · 9) uygun; √{27} uygun değil; √{32} (32 = 2 · 16) uygun; 3√{2} = √{18} uygun; √{50} (50 = 2 · 25) uygun.\nAdım 3: Uygun olanlar: √{2}, √{18}, √{32}, 3√{2}, √{50} → 5 tane.\nSağlama: √{8} · √{50} = √{400} = 20 ve √{8} · √{12} = √{96} (96 tam kare değil).\nSık yapılan hata: Katsayılı bir kökü (3√{2}) atlamak.\nCevap B."
},
{
  id: "mat-kk-271",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 3,
  soru: "Alanı 1,44 m² olan kare biçimli bir masanın çevresine, 0,3 m uzunluğunda eş dantel parçaları dikilecektir. Parçalar uç uca eklenecek, aralarında boşluk ya da bindirme olmayacaktır (şekil).\n**Buna göre kaç dantel parçası gerekir?**",
  gorsel: "<svg viewBox=\"0 0 420 220\" role=\"img\" aria-label=\"Kare biçimli masa, alanı 1,44 metrekare.\"><rect x=\"135\" y=\"25\" width=\"150\" height=\"150\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"210\" y=\"106\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">Alan: 1,44 m²</text><text x=\"210\" y=\"206\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Dantel parçası: 0,3 m</text></svg>",
  secenekler: ["4","8","16","160"],
  dogru: 2,
  hatalar: [
    "Bir kenarın uzunluğunu parça uzunluğuna böldün (1,2 ÷ 0,3 = 4); masanın dört kenarı vardır, çevre için 4 ile çarpmak gerekir.",
    "Yalnızca iki kenarı hesaba kattın: 2,4 ÷ 0,3 = 8. Masanın dört kenarı vardır.",
    null,
    "Virgülü yanlış kaydırarak √{1,44} = 12 buldun; çevre 48 olunca 48 ÷ 0,3 = 160 çıktı. Doğrusu √{1,44} = 1,2'dir."
  ],
  aciklama: "Önce masanın kenarını karekökle bulur, sonra çevreyi parça uzunluğuna böleriz.\nAdım 1: √{1,44} = √{[[144|100]]} = [[12|10]] = 1,2 m.\nAdım 2: Çevre 4 · 1,2 = 4,8 m.\nAdım 3: Parça sayısı 4,8 ÷ 0,3 = 48 ÷ 3 = 16.\nSağlama: 16 parça · 0,3 m = 4,8 m ve bir kenarda 4 parça vardır (4 · 0,3 = 1,2).\nSık yapılan hata: Yalnızca bir kenarı hesaplayıp çevreye geçmeyi unutmak (4).\nCevap C."
},
{
  id: "mat-kk-272",
  kazanim: "M.8.1.3.7",
  kademe: 2,
  zorluk: 3,
  soru: "Bir tasarım atölyesinde kare biçimli iki plaka kesilecektir. Büyük plakanın kenarı √{0,16} dm, küçük plakanın kenarı √{0,0025} dm'dir (şekil).\n**Buna göre büyük plakanın kenarı, küçük plakanın kenarının kaç katıdır?**",
  gorsel: "<svg viewBox=\"0 0 420 200\" role=\"img\" aria-label=\"İki kare plaka: büyüğünün kenarı kök 0,16 desimetre, küçüğünün kenarı kök 0,0025 desimetre.\"><rect x=\"60\" y=\"30\" width=\"128\" height=\"128\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><rect x=\"260\" y=\"142\" width=\"16\" height=\"16\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"124\" y=\"100\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">√0,16 dm</text><text x=\"268\" y=\"130\" font-size=\"14\" text-anchor=\"middle\" fill=\"var(--vurgu)\" font-weight=\"bold\">√0,0025 dm</text><text x=\"124\" y=\"184\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Büyük plaka</text><text x=\"268\" y=\"184\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">Küçük plaka</text></svg>",
  secenekler: ["0,8","8","64","80"],
  dogru: 1,
  hatalar: [
    "√{0,0025} sayısını 0,5 buldun (virgülü yanlış kaydırdın): 0,4 ÷ 0,5 = 0,8. Doğrusu 0,05'tir, çünkü 0,05^{2} = 0,0025.",
    null,
    "Kenarların değil, kök içindeki sayıların oranını aldın: 0,16 ÷ 0,0025 = 64. Bu, alanların oranıdır.",
    "√{0,0025} sayısını 0,005 buldun (basamak sayısını yarıya indirmedin): 0,4 ÷ 0,005 = 80. Doğrusu 0,05'tir."
  ],
  aciklama: "Kaç katı olduğu bölme ile bulunur. Önce iki kenarı da ondalık biçimde yazarız.\nAdım 1: √{0,16} = 0,4 (0,4^{2} = 0,16).\nAdım 2: √{0,0025} = 0,05 (0,05^{2} = 0,0025).\nAdım 3: 0,4 ÷ 0,05 = 40 ÷ 5 = 8.\nSağlama: 8 · 0,05 = 0,4. Alanlar oranı 8^{2} = 64'tür; bu, yukarıdaki 0,16 ÷ 0,0025 = 64 ile uyuşur.\nSık yapılan hata: Kenar oranı yerine alan oranını (64) vermek.\nCevap B."
},
{
  id: "mat-kk-273",
  kazanim: "M.8.1.3.8",
  kademe: 2,
  zorluk: 3,
  soru: "Dört öğrenci, aşağıdaki tabloda gerçek sayılarla ilgili birer cümle kurmuştur.\n**Buna göre hangi öğrencinin cümlesi doğrudur?**",
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>Cümlesi</th></tr><tr><td>Ada</td><td>Karekökü rasyonel olan her doğal sayı, bir tam kare sayıdır.</td></tr><tr><td>Burak</td><td>3,14 sayısı π sayısına eşit olduğundan π rasyoneldir.</td></tr><tr><td>Cansu</td><td>Virgülden sonrası sonsuza giden her ondalık sayı irrasyoneldir.</td></tr><tr><td>Deniz</td><td>√2 · √8 çarpımının sonucu irrasyoneldir, çünkü iki irrasyonel sayının çarpımı irrasyoneldir.</td></tr></table>",
  secenekler: ["Ada","Burak","Cansu","Deniz"],
  dogru: 0,
  hatalar: [
    null,
    "3,14 sayısı π değildir; işlemlerde kolaylık olsun diye kullanılan yaklaşık bir değerdir. π irrasyoneldir ve ondalık gösterimi ne biter ne de düzenli tekrar eder.",
    "0,333… sayısının virgülden sonrası sonsuza gider ama devirlidir ve [[1|3]] olarak yazılabilir; bu yüzden rasyoneldir. Yalnızca devirsiz sonsuz ondalıklar irrasyoneldir.",
    "√2 · √8 = √16 = 4 olur ve 4 rasyoneldir. İki irrasyonel sayının çarpımı rasyonel olabilir."
  ],
  aciklama: "Her cümleyi ayrı ayrı sına.\nAdım 1: Ada: Tam kare olmayan bir doğal sayının karekökü irrasyoneldir. Karekök rasyonelse doğal sayı tam karedir; cümle doğru.\nAdım 2: Burak: π irrasyoneldir, 3,14 yalnızca yaklaşık değerdir; cümle yanlış. Cansu: 0,333… gibi devirli ondalıklar da sonsuzdur ama rasyoneldir; cümle yanlış.\nAdım 3: Deniz: √2 · √8 = √16 = 4 rasyoneldir; cümle yanlış.\nSağlama: Ada'nın cümlesini örnekle sına: √12 irrasyoneldir (12 tam kare değil); √49 = 7 rasyoneldir (49 tam kare).\nSık yapılan hata: Ondalık gösterimi \"sonsuza gidiyor\" diye irrasyonel saymak; devir olup olmadığına bakılmalıdır.\nCevap A."
},
{
  id: "mat-kk-274",
  kazanim: "M.8.1.3.8",
  kademe: 2,
  zorluk: 3,
  soru: "Bir yarışmada 1'den 30'a kadar (1 ve 30 dahil) numaralandırılmış kartlar vardır. Yarışmacılar, üzerindeki numaranın karekökü irrasyonel sayı olan kartları toplayacaktır.\n**Buna göre toplanacak kaç kart vardır?**",
  gorsel: null,
  secenekler: ["5","25","26","30"],
  dogru: 1,
  hatalar: [
    "Karekökü rasyonel olan (tam kare) kartları saydın: 1, 4, 9, 16, 25. Soru irrasyonel olanları soruyor.",
    null,
    "1 sayısını tam kare saymadın (√{1} = 1 rasyoneldir) ve 26 buldun.",
    "Bütün kartları aldın; tam kare kartların kareköklerinin rasyonel olduğunu denetlemedin."
  ],
  aciklama: "Tam kare olmayan doğal sayıların karekökü irrasyoneldir; tam karelerin karekökü ise doğal sayıdır, yani rasyoneldir.\nAdım 1: 1 ile 30 arasındaki tam kareler: 1, 4, 9, 16, 25 (5 tane).\nAdım 2: Bu 5 kartın karekökü rasyoneldir.\nAdım 3: Kalan 30 − 5 = 25 kartın karekökü irrasyoneldir.\nSağlama: 6^{2} = 36 > 30 olduğundan 25'ten sonra tam kare yoktur.\nSık yapılan hata: 1 sayısını tam kare saymayı unutmak (26).\nCevap B."
},
{
  id: "mat-kk-275",
  kazanim: "M.8.1.3.8",
  kademe: 2,
  zorluk: 3,
  soru: "Bir öğretmen tahtaya dört işlem yazmış ve öğrencilerden her işlemin sonucunu en sade biçime getirip sonucun rasyonel mi irrasyonel mi olduğunu belirlemelerini istemiştir.\n**Buna göre hangi işlemin sonucu rasyonel sayıdır?**",
  gorsel: null,
  secenekler: ["√{3} + √{12}","√{18} − √{2}","√{20} · √{3}","√{20} ÷ √{5}"],
  dogru: 3,
  hatalar: [
    "√{12} = 2√{3} olduğundan toplam 3√{3} olur; 3 tam kare olmadığından sonuç irrasyoneldir.",
    "√{18} − √{2} = 3√{2} − √{2} = 2√{2} olur; 2 tam kare olmadığından sonuç irrasyoneldir.",
    "√{20} · √{3} = √{60} olur; 60 tam kare olmadığından sonuç irrasyoneldir (2√{15}).",
    null
  ],
  aciklama: "Önce işlemi yap, sonucu sadeleştir; kök işareti kalıyorsa ve kök içi tam kare değilse sonuç irrasyoneldir.\nAdım 1: √{3} + √{12} = √{3} + 2√{3} = 3√{3} irrasyoneldir. √{18} − √{2} = 3√{2} − √{2} = 2√{2} irrasyoneldir.\nAdım 2: √{20} · √{3} = √{60} = 2√{15} irrasyoneldir.\nAdım 3: √{20} ÷ √{5} = √{4} = 2 rasyoneldir.\nSağlama: 2 · √{5} = 2√{5} = √{20} olduğundan bölüm gerçekten 2'dir.\nSık yapılan hata: Kök işareti görünce her sonucun irrasyonel olduğunu düşünmek.\nCevap D."
}
);
