// Matematik — Kareköklü İfadeler: Havuz eki (kademe 0), mat-kk-031 … mat-kk-075
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["karekoklu-ifadeler"] = window.LGS_BANK["karekoklu-ifadeler"] || []).push(
{
  id: "mat-kk-031",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 1,
  soru: "**√{225} − √{49} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["4", "8", "22", "176"],
  dogru: 1,
  hatalar: [
    "Doğru farkı (8) bulduktan sonra gereksiz yere ikiye böldün; karekök işlemi zaten bitmişti.",
    null,
    "Çıkarma yerine toplama yaptın: 15 + 7 = 22 eder.",
    "Kök içindeki sayıları çıkardın: 225 − 49 = 176. Karekök, çıkarmadan önce ayrı ayrı alınır."
  ],
  aciklama: `Karekök, karesi verilen sayıya eşit olan negatif olmayan sayıdır.
Adım 1: 15^{2} = 225 olduğundan √{225} = 15'tir.
Adım 2: 7^{2} = 49 olduğundan √{49} = 7'dir.
Adım 3: Farkı al: 15 − 7 = 8.
Sağlama: 8 + 7 = 15.
Sık yapılan hata: √{225} − √{49}, √{225 − 49} değildir; kökler önce ayrı ayrı alınır.
Cevap B.`
},
{
  id: "mat-kk-032",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi 12 ile 13 arasındadır?**",
  gorsel: null,
  secenekler: ["√{100}", "√{125}", "√{140}", "√{150}"],
  dogru: 3,
  hatalar: [
    "√{100} = 10'dur; 12'den küçüktür.",
    "125 sayısı 121 ile 144 arasındadır; √{125} sayısı 11 ile 12 arasında kalır.",
    "140 sayısı 144'e çok yakın ama ondan küçüktür; √{140} sayısı hâlâ 11 ile 12 arasındadır.",
    null
  ],
  aciklama: `Bir sayının karekökünün 12 ile 13 arasında olması için kök içindeki sayı 12^{2} = 144 ile 13^{2} = 169 arasında olmalıdır.
Adım 1: Sınırları yaz: 144 ve 169.
Adım 2: Şıklardaki kök içlerine bak: 100, 125 ve 140 sayıları 144'ten küçüktür; yalnızca 150 sayısı 144 ile 169 arasındadır.
Adım 3: Öyleyse 12 < √{150} < 13'tür.
Sık yapılan hata: 140'ın 144'e yakınlığına aldanmak. Yakın olmak aralığın içinde olmak demek değildir.
Cevap D.`
},
{
  id: "mat-kk-033",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 1,
  soru: "**(√{7})^{2} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["7", "14", "7√{7}", "49"],
  dogru: 0,
  hatalar: [
    null,
    "Kök içini ikiyle çarptın. Üs 2 çarpma anlamına gelmez; √{7} kendisiyle çarpılır.",
    "Sonuca fazladan bir √{7} çarpanı ekledin; bu (√{7})^{3} olurdu.",
    "7 sayısının karesini aldın. Oysa kök içi zaten kare alınınca ortaya çıkar: √{7} · √{7} = 7."
  ],
  aciklama: `Bir kök kendisiyle çarpılırsa kök içindeki sayı kalır.
Adım 1: (√{7})^{2} = √{7} · √{7} diye aç.
Adım 2: Kök içleri çarpılır: √{7 · 7} = √{49}.
Adım 3: √{49} = 7'dir.
Sağlama: √{7} yaklaşık 2,6'dır; 2,6 · 2,6 yaklaşık 7'dir.
Sık yapılan hata: Karekökün karesini alınca sayının karesini (49) bulmak.
Cevap A.`
},
{
  id: "mat-kk-034",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 1,
  soru: "**5√{7} + 3√{7} − 2√{7} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["0", "4√{7}", "6√{7}", "10√{7}"],
  dogru: 2,
  hatalar: [
    "İlk işareti de çıkarma gibi okudun: 5 − 3 − 2 = 0.",
    "İşaretleri karıştırdın: 5 − 3 + 2 = 4 buldun. Üçüncü terim çıkarılır.",
    null,
    "Bütün terimleri topladın: 5 + 3 + 2 = 10. Üçüncü terimin önünde eksi var."
  ],
  aciklama: `Kök içleri aynı olan terimler toplanıp çıkarılabilir; katsayılar işlem görür, kök içi aynen kalır.
Adım 1: Üç terimin de kök içi 7'dir, yani terimler birleşir.
Adım 2: Katsayıları işaretlerine göre hesapla: 5 + 3 − 2 = 6.
Adım 3: Kök içi aynen kalır: 6√{7}.
Sağlama: 5 + 3 = 8 ve 8 − 2 = 6.
Sık yapılan hata: Eksi işaretini görmeyip tüm katsayıları toplamak.
Cevap C.`
},
{
  id: "mat-kk-035",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 1,
  soru: "**√{6} · √{24} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2√{6}", "√{30}", "6", "12"],
  dogru: 3,
  hatalar: [
    "√{24} = 2√{6} yazdın ama √{6} ile çarpmayı yapmadan bıraktın.",
    "Kök içlerini topladın: 6 + 24 = 30. Çarpmada kök içleri çarpılır.",
    "Çarpımın karekökünü bulduktan sonra sonucu ikiye böldün; 144'ün karekökü 12'dir.",
    null
  ],
  aciklama: `Çarpmada kök içleri çarpılır: √{a} · √{b} = √{a · b}.
Adım 1: √{6} · √{24} = √{6 · 24} = √{144}.
Adım 2: 12^{2} = 144 olduğundan √{144} = 12'dir.
Sağlama: √{24} = 2√{6} ve √{6} · 2√{6} = 2 · 6 = 12.
Sık yapılan hata: Çarpma yerine kök içlerini toplamak.
Cevap D.`
},
{
  id: "mat-kk-036",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 1,
  soru: "**√{0,36} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["0,06", "0,6", "3,6", "6"],
  dogru: 1,
  hatalar: [
    "Virgülü fazla kaydırdın: 0,06^{2} = 0,0036 eder, 0,36 etmez.",
    null,
    "Sayıyı 10 ile çarpıp virgülü yanlış yöne kaydırdın; 3,6^{2} = 12,96 eder.",
    "Virgülü yok sayıp √{36} = 6 aldın. 6^{2} = 36'dır, 0,36 değil."
  ],
  aciklama: `Ondalık sayının karekökünü bulmak için sayıyı kesre çevir.
Adım 1: 0,36 = [[36|100]].
Adım 2: Pay ve payda tam karedir: √{36} = 6 ve √{100} = 10.
Adım 3: √{[[36|100]]} = [[6|10]] = 0,6.
Sağlama: 0,6 · 0,6 = 0,36.
Sık yapılan hata: Virgülü yanlış kaydırmak; sonucu her zaman kare alarak denetle.
Cevap B.`
},
{
  id: "mat-kk-037",
  kazanim: "M.8.1.3.8",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi irrasyonel sayıdır?**",
  gorsel: null,
  secenekler: ["√{18}", "√{169}", "√{0,09}", "[[22|7]]"],
  dogru: 0,
  hatalar: [
    null,
    "√{169} = 13'tür; bir doğal sayı olduğu için rasyoneldir.",
    "√{0,09} = 0,3'tür; [[3|10]] biçiminde yazılabildiği için rasyoneldir.",
    "[[22|7]] iki tam sayının oranıdır; π'ye yakın olsa da rasyoneldir."
  ],
  aciklama: `İki tam sayının oranı olarak yazılabilen sayılara rasyonel sayı, yazılamayanlara irrasyonel sayı denir.
Adım 1: √{169} = 13 ve √{0,09} = 0,3 olduğundan bu ikisi rasyoneldir.
Adım 2: [[22|7]] zaten bir kesirdir; rasyoneldir.
Adım 3: 18 tam kare değildir (16 < 18 < 25); √{18} = 3√{2} hiçbir kesre eşit değildir, yani irrasyoneldir.
Sık yapılan hata: Kök işareti görünce sayıyı hemen irrasyonel saymak ya da [[22|7]] sayısını π ile karıştırmak.
Cevap A.`
},
{
  id: "mat-kk-038",
  kazanim: "M.8.1.3.6",
  kademe: 0,
  zorluk: 1,
  soru: "**√{8} · √{k} = 12 eşitliğini sağlayan k doğal sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["6", "12", "18", "144"],
  dogru: 2,
  hatalar: [
    "12'nin yarısını alıp tahmin ettin; √{8} · √{6} = √{48} eder, 12 etmez.",
    "Sonuçtaki 12'yi k sandın; √{8} · √{12} = √{96} eder. Kök içi çarpımının 144 olması gerekir.",
    null,
    "12'nin karesini k yaptın; 8 · 144 = 1 152 eder. Kök içi çarpımı 144 olmalıdır."
  ],
  aciklama: `Önce eşitliğin sol yanını tek kök altında yaz.
Adım 1: √{8} · √{k} = √{8k}.
Adım 2: 12 = √{144} olduğundan 8k = 144 olmalıdır.
Adım 3: k = 144 ÷ 8 = 18.
Sağlama: √{8} · √{18} = √{144} = 12.
Sık yapılan hata: İstenen sonucu (12) kök içine yazmayı unutmak.
Cevap C.`
},
{
  id: "mat-kk-039",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 1,
  soru: "**√{27} sayısı aşağıdaki doğal sayılardan hangisine en yakındır?**",
  gorsel: null,
  secenekler: ["4", "5", "6", "7"],
  dogru: 1,
  hatalar: [
    "27 sayısını 16'ya yakın saydın; oysa 27, 25'e çok yakındır ve 16'dan 11 fazladır.",
    null,
    "36'ya yakın sandın. 27 sayısı 36'dan 9 eksik, 25'ten ise yalnızca 2 fazladır.",
    "27'yi 4'e bölüp yaklaşık 7 buldun. Karekök bölme ile bulunmaz, tam karelerle karşılaştırılır."
  ],
  aciklama: `Bir kökün hangi doğal sayıya yakın olduğunu bulmak için kök içine en yakın tam kareye bak.
Adım 1: 27 sayısı 25 = 5^{2} ile 36 = 6^{2} arasındadır.
Adım 2: Uzaklıklar: 27 − 25 = 2, 36 − 27 = 9.
Adım 3: 25'e çok daha yakın olduğundan √{27} sayısı 5'e daha yakındır.
Sağlama: 5,2^{2} = 27,04 olduğundan √{27} yaklaşık 5,2'dir.
Cevap B.`
},
{
  id: "mat-kk-040",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 2,
  soru: "Alanı 324 m² olan kare biçimli bir arsanın çevresi, kazıklar üzerinden boydan boya 3 sıra dikenli telle çevrilecektir. Köşelerde kullanılacak ek tel ve kazıklar hesaba katılmayacaktır.\n**Buna göre toplam kaç metre dikenli tel gerekir?**",
  gorsel: null,
  secenekler: ["54", "72", "108", "216"],
  dogru: 3,
  hatalar: [
    "Yalnızca bir kenarı hesaba katıp 3 ile çarptın: 18 · 3 = 54. Arsanın dört kenarı vardır.",
    "Tek sıra tel için gereken uzunluğu (çevreyi) buldun; 3 sıra olduğunu unuttun.",
    "Yalnızca iki kenarı hesaba katıp 3 ile çarptın: 36 · 3 = 108.",
    null
  ],
  aciklama: `Karenin alanı kenarının karesidir; çevresi ise kenarının 4 katıdır.
Adım 1: Kenar uzunluğu √{324} = 18 m'dir (18^{2} = 324).
Adım 2: Bir sıra tel için çevre: 4 · 18 = 72 m.
Adım 3: Tel 3 sıra olacağı için 72 · 3 = 216 m gerekir.
Sağlama: 216 ÷ 3 = 72 ve 72 ÷ 4 = 18.
Sık yapılan hata: Sıra sayısını ya da kenar sayısını eksik hesaba katmak.
Cevap D.`
},
{
  id: "mat-kk-041",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir kültür merkezinde kare biçimli bir sahne yapılacaktır. Sahnenin alanı 70 m² olacaktır.\n**Buna göre sahnenin bir kenar uzunluğu için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "8 m ile 9 m arasındadır ve 8 m'ye daha yakındır.",
    "8 m ile 9 m arasındadır ve 9 m'ye daha yakındır.",
    "7 m ile 8 m arasındadır ve 8 m'ye daha yakındır.",
    "9 m ile 10 m arasındadır ve 9 m'ye daha yakındır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Aralığı doğru buldun ama uzaklıkları ters yorumladın: 70 sayısı 64'ten 6, 81'den 11 uzaktadır.",
    "70 sayısını 49 ile 64 arasında sandın; oysa 64 < 70 < 81'dir.",
    "70 sayısını 81 ile 100 arasında sandın; 70, 81'den küçüktür."
  ],
  aciklama: `Kenar uzunluğu alanın karekökü olduğundan √{70} sayısını tam karelerle karşılaştır.
Adım 1: 8^{2} = 64 ve 9^{2} = 81 olduğundan 64 < 70 < 81, yani 8 < √{70} < 9'dur.
Adım 2: Uzaklıkları bul: 70 − 64 = 6 ve 81 − 70 = 11.
Adım 3: 64'e daha yakın olduğundan √{70} sayısı 8'e daha yakındır.
Sağlama: 8,4^{2} = 70,56 olduğundan kenar yaklaşık 8,4 m'dir; 8'e daha yakındır.
Cevap A.`
},
{
  id: "mat-kk-042",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir ahşap atölyesinde dört çıtanın uzunlukları ölçülmüş ve desimetre cinsinden aşağıdaki tabloya yazılmıştır.\n**Buna göre hangi çıta en kısadır?**",
  gorsel: `<table class="tablo"><tr><th>Çıta</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Uzunluk (dm)</td><td>3√6</td><td>2√14</td><td>7</td><td>5√2</td></tr></table>`,
  secenekler: ["K çıtası", "L çıtası", "M çıtası", "N çıtası"],
  dogru: 2,
  hatalar: [
    "3√{6} = √{54} olup 49'dan büyüktür; en kısa değildir.",
    "2√{14} = √{56} olup dördü arasında en uzun olandır.",
    null,
    "5√{2} = √{50}'dir; 49'a çok yakın ama ondan büyüktür."
  ],
  aciklama: `Katsayılı kökleri ve tam sayıyı karşılaştırmak için hepsini tek kök altına al: a√{b} = √{a^{2} · b}.
Adım 1: K: 3√{6} = √{9 · 6} = √{54}.
Adım 2: L: 2√{14} = √{4 · 14} = √{56}. N: 5√{2} = √{25 · 2} = √{50}. M: 7 = √{49}.
Adım 3: Kök içleri 54, 56, 49, 50 olur; en küçüğü 49'dur, yani M çıtası en kısadır.
Sık yapılan hata: Tam sayıyı (7) kökle karşılaştırırken kök altına almamak.
Cevap C.`
},
{
  id: "mat-kk-043",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 2,
  soru: "Bir tiyatro sahnesinin dikdörtgen biçimli arka perdesinin ölçüleri şekilde verilmiştir.\n**Buna göre perdenin alanı kaç m²'dir?**",
  gorsel: `<svg viewBox="0 0 440 200" role="img" aria-label="Dikdörtgen biçimli perde; kısa kenarı 2 kök 6 metre, uzun kenarı 3 kök 24 metre."><rect x="60" y="30" width="260" height="110" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="190" y="90" font-size="16" text-anchor="middle" fill="currentColor">Perde</text><text x="190" y="165" font-size="16" text-anchor="middle" fill="currentColor">3√24 m</text><text x="335" y="90" font-size="16" fill="currentColor">2√6 m</text></svg>`,
  secenekler: ["6√{30}", "72", "144", "864"],
  dogru: 1,
  hatalar: [
    "Kök içlerini toplayıp 6 + 24 = 30 yazdın. Çarpmada kök içleri çarpılır.",
    null,
    "Kök içlerini çarptın (6 · 24 = 144) ama bu sayıyı sonuç sandın; katsayıları da karekökü de atladın.",
    "Katsayıların çarpımı 6 ile kök içi çarpımı 144'ü çarptın; karekökü almayı unuttun."
  ],
  aciklama: `Dikdörtgenin alanı kenarlarının çarpımıdır. Kareköklü ifadelerde katsayılar katsayılarla, kök içleri kök içleriyle çarpılır.
Adım 1: Alan = 2√{6} · 3√{24}.
Adım 2: Katsayılar: 2 · 3 = 6. Kök içleri: √{6 · 24} = √{144} = 12.
Adım 3: 6 · 12 = 72 m².
Sağlama: √{24} = 2√{6} olduğundan alan 2√{6} · 6√{6} = 12 · 6 = 72.
Sık yapılan hata: Karekök almayı unutup kök içi çarpımını sonuç saymak.
Cevap B.`
},
{
  id: "mat-kk-044",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 2,
  soru: "Bir yelken yarışının rotası iki ayaktan oluşmaktadır. Birinci ayak √{98} km, ikinci ayak √{32} km uzunluğundadır.\n**Buna göre rotanın toplam uzunluğu kaç km'dir?**",
  gorsel: null,
  secenekler: ["11√{2}", "√{130}", "7√{2}", "28√{2}"],
  dogru: 0,
  hatalar: [
    null,
    "Kök içlerini topladın: 98 + 32 = 130. Kök içleri toplanmaz; önce sadeleştirilir.",
    "Yalnızca birinci ayağın uzunluğunu yazdın; ikinci ayağı (4√{2}) unuttun.",
    "Katsayıları çarptın: 7 · 4 = 28. Toplamada katsayılar toplanır."
  ],
  aciklama: `Kök içleri aynı olan terimler toplanabilir; bunun için önce her kökü sadeleştir.
Adım 1: √{98} = √{49 · 2} = 7√{2}.
Adım 2: √{32} = √{16 · 2} = 4√{2}.
Adım 3: Katsayıları topla: 7√{2} + 4√{2} = 11√{2}.
Sağlama: 11√{2} yaklaşık 15,6; √{98} + √{32} yaklaşık 9,9 + 5,7 = 15,6.
Sık yapılan hata: √{a} + √{b} = √{a + b} sanmak.
Cevap A.`
},
{
  id: "mat-kk-045",
  kazanim: "M.8.1.3.6",
  kademe: 0,
  zorluk: 2,
  soru: "**√{50} ifadesi aşağıdakilerden hangisiyle çarpılırsa sonuç bir doğal sayı olur?**",
  gorsel: null,
  secenekler: ["√{10}", "5", "5√{5}", "3√{2}"],
  dogru: 3,
  hatalar: [
    "√{50} · √{10} = √{500} = 10√{5} olur; kök içi tam kare olmadığı için sonuç doğal sayı değildir.",
    "5 bir doğal sayıdır ama çarpımda kök kalır: 5√{50} = 25√{2}. Tam kare bir sayıyla çarpmak kökü yok etmez.",
    "√{50} · 5√{5} = 5√{250} = 25√{10} olur; kök yok olmaz.",
    null
  ],
  aciklama: `Sonucun doğal sayı olması için kök içi çarpımı tam kare olmalıdır.
Adım 1: 50 = 25 · 2 olduğundan √{50} = 5√{2}'dir; eksik olan √{2} çarpanıdır.
Adım 2: 3√{2} ile çarp: 5√{2} · 3√{2} = 15 · 2 = 30.
Adım 3: Diğer şıkların hiçbirinde √{2} yoktur; çarpımlarda kök kalır.
Sağlama: √{50} · 3√{2} = 3√{100} = 3 · 10 = 30.
Sık yapılan hata: Çarpanın kendisinin tam kare olmasını istemek; tam kare olması gereken çarpımdır.
Cevap D.`
},
{
  id: "mat-kk-046",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 2,
  soru: "Kare biçimli bir tablonun alanı 0,64 m²'dir. Aynı büyüklükte üç tablo, aralarında boşluk bırakılmadan bir duvara yan yana asılacaktır.\n**Buna göre tabloların kapladığı toplam genişlik kaç santimetredir?**",
  gorsel: null,
  secenekler: ["24", "80", "240", "2 400"],
  dogru: 2,
  hatalar: [
    "Kenarı 0,8 m yerine 0,08 m aldın: virgülü yanlış kaydırdın.",
    "Yalnızca tek tablonun genişliğini (80 cm) buldun; üç tablo var.",
    null,
    "Metreyi santimetreye çevirirken 100 yerine 1 000 ile çarptın."
  ],
  aciklama: `Karenin alanı 0,64 m² ise kenar uzunluğu karekökle bulunur.
Adım 1: 0,64 = [[64|100]] olduğundan √{0,64} = [[8|10]] = 0,8 m.
Adım 2: 0,8 m = 80 cm.
Adım 3: Üç tablo yan yana: 3 · 80 = 240 cm.
Sağlama: 0,8 · 0,8 = 0,64 ve 240 cm = 2,4 m = 3 · 0,8 m.
Sık yapılan hata: Birim çevirmeyi atlamak ya da virgülü yanlış kaydırmak.
Cevap C.`
},
{
  id: "mat-kk-047",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 2,
  soru: "Berk aklından bir doğal sayı tutmuştur. Bu sayıdan 25 çıkarıldığında sonuç, karekökü 12 olan sayıya eşit olmaktadır.\n**Buna göre Berk'in tuttuğu sayının karekökü kaçtır?**",
  gorsel: null,
  secenekler: ["12", "13", "17", "169"],
  dogru: 1,
  hatalar: [
    "Yalnızca 25 çıkarılmış sayının karekökünü aldın; asıl sayıyı bulup onun karekökünü almalıydın.",
    null,
    "Kökleri ayrı ayrı topladın: 12 + √{25} = 17. Karekök toplamaya yayılmaz.",
    "Berk'in tuttuğu sayının kendisini yazdın; karekökü sorulmuştu."
  ],
  aciklama: `Karekökü 12 olan sayı 12^{2} = 144'tür.
Adım 1: Tutulan sayıdan 25 çıkınca 144 kalıyor: sayı = 144 + 25 = 169.
Adım 2: Sayının karekökü: √{169} = 13.
Sağlama: 169 − 25 = 144 ve √{144} = 12.
Sık yapılan hata: Adımları ters sırayla kurmak ya da √{144 + 25} yerine 12 + 5 yazmak.
Cevap B.`
},
{
  id: "mat-kk-048",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 2,
  soru: "Bir bilgisayar oyununda karakterin ilerlediği yol √{n} birimdir ve bu yol 5√{12} birime eşittir.\n**Buna göre n kaçtır?**",
  gorsel: null,
  secenekler: ["17", "60", "120", "300"],
  dogru: 3,
  hatalar: [
    "Katsayı ile kök içini topladın: 5 + 12 = 17. Katsayı kök içine karesiyle girer.",
    "Katsayı ile kök içini çarptın: 5 · 12 = 60. İçeri girecek olan 5'in kendisi değil, karesidir.",
    "Katsayıyı 5 yerine 10 ile çarptın; içeri 5^{2} = 25 girer, 10 değil.",
    null
  ],
  aciklama: `Dışarıdaki katsayı kök içine girerken karesi alınır: a√{b} = √{a^{2} · b}.
Adım 1: 5√{12} = √{5^{2} · 12}.
Adım 2: 5^{2} = 25 olduğundan √{25 · 12} = √{300}.
Adım 3: √{n} = √{300} olduğundan n = 300'dür.
Sağlama: 300 = 25 · 12 ve √{25} = 5.
Sık yapılan hata: Katsayıyı karesini almadan kök içine çarpmak.
Cevap D.`
},
{
  id: "mat-kk-049",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 2,
  soru: "Bir bisiklet turunun üç etabı vardır. Birinci gün √{75} km, ikinci gün √{12} km, üçüncü gün √{3} km yol gidilmiştir.\n**Buna göre birinci gün, diğer iki günün toplamından kaç km fazla yol gidilmiştir?**",
  gorsel: null,
  secenekler: ["2√{3}", "3√{3}", "4√{3}", "8√{3}"],
  dogru: 0,
  hatalar: [
    null,
    "Birinci günden yalnızca ikinci günü çıkardın: 5√{3} − 2√{3} = 3√{3}. Üçüncü gün de çıkarılmalıydı.",
    "Üçüncü günü çıkarmak yerine ekledin: 5√{3} − 2√{3} + √{3} = 4√{3}.",
    "Üç günün hepsini topladın; fark istenmişti."
  ],
  aciklama: `Önce her kökü sadeleştir; sonra aynı kök içli terimleri birleştir.
Adım 1: √{75} = 5√{3}, √{12} = 2√{3}, √{3} = √{3}.
Adım 2: Diğer iki günün toplamı: 2√{3} + √{3} = 3√{3}.
Adım 3: Fark: 5√{3} − 3√{3} = 2√{3} km.
Sağlama: 2√{3} + 3√{3} = 5√{3} = √{75}.
Sık yapılan hata: Üç terimli işlemde işaretlerden birini yanlış kullanmak.
Cevap A.`
},
{
  id: "mat-kk-050",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 2,
  soru: "**Karekökü 11 ile 12 arasında olan ve 9'un katı olan en büyük doğal sayı kaçtır?**",
  gorsel: null,
  secenekler: ["126", "132", "135", "144"],
  dogru: 2,
  hatalar: [
    "126 aralıktaki 9'un katlarından en küçüğüdür; bir sonraki kat olan 135 de aralıktadır.",
    "132 aralıktadır ama 9'un katı değildir (132 ÷ 9 tam bölünmez).",
    null,
    "144 = 12^{2} olduğundan karekökü tam 12'dir; 12 ile 12 arasında değildir, aralığın dışında kalır."
  ],
  aciklama: `Karekökü 11 ile 12 arasındaysa sayı 11^{2} = 121 ile 12^{2} = 144 arasındadır (uçlar dahil değildir).
Adım 1: Aralık: 121 < sayı < 144.
Adım 2: Bu aralıktaki 9'un katları: 9 · 14 = 126 ve 9 · 15 = 135 (9 · 16 = 144 aralığın dışındadır).
Adım 3: En büyüğü 135'tir.
Sağlama: 11 < √{135} < 12 çünkü 121 < 135 < 144 ve 135 = 9 · 15.
Sık yapılan hata: Sınır sayıyı (144) aralığa dahil etmek.
Cevap C.`
},
{
  id: "mat-kk-051",
  kazanim: "M.8.1.3.8",
  kademe: 0,
  zorluk: 2,
  soru: "Yarıçapı 10 cm olan daire biçimli bir tepsinin çevresini bir öğrenci, π yerine 3,14 alarak 62,8 cm bulmuştur.\n**Buna göre bu sonuç hakkında aşağıdaki yorumlardan hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Çevre tam olarak 62,8 cm'dir; çünkü π sayısı 3,14'e eşittir.",
    "Çevre yaklaşık 62,8 cm'dir; çünkü gerçek çevre rasyoneldir.",
    "Çevre tam olarak 62,8 cm'dir; çünkü π sayısı rasyoneldir.",
    "Çevre yaklaşık 62,8 cm'dir; çünkü gerçek çevre irrasyoneldir."
  ],
  dogru: 3,
  hatalar: [
    "3,14 sayısı π'nin yaklaşık değeridir; bir ondalık sayı olarak rasyoneldir, π ise irrasyoneldir. İkisi eşit olamaz.",
    "Sonucun yaklaşık olduğunu doğru gördün ama gerekçe yanlış: 20π, iki tam sayının oranı olarak yazılamaz; gerçek çevre irrasyoneldir.",
    "π sayısı irrasyoneldir; rasyonel olsaydı iki tam sayının oranı olarak yazılabilirdi. Bu yüzden 62,8 tam değer olamaz.",
    null
  ],
  aciklama: `Çemberin çevresi 2πr formülüyle bulunur. π irrasyonel bir sayıdır; işlemlerde yerine 3, 3,14 ya da [[22|7]] gibi yaklaşık değerler kullanılır.
Adım 1: Gerçek çevre 2 · π · 10 = 20π cm'dir.
Adım 2: π irrasyonel olduğundan 20π de irrasyoneldir.
Adım 3: Öğrencinin 20 · 3,14 = 62,8 sonucu, π yerine 3,14 alındığı için yaklaşık değerdir.
Sık yapılan hata: 3,14 ya da [[22|7]] gibi yaklaşık değerleri π'nin kendisi sanmak, yani π'yi rasyonel saymak.
Cevap D.`
},
{
  id: "mat-kk-052",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 2,
  soru: "Bir kurye, √{300} km uzunluğundaki güzergâhı 2√{3} saatte sabit hızla tamamlamıştır.\n**Buna göre kuryenin hızı kaç km/saattir?**",
  gorsel: null,
  secenekler: ["5", "5√{3}", "10", "10√{3}"],
  dogru: 0,
  hatalar: [
    null,
    "Katsayıları böldün (10 ÷ 2 = 5) ama kök içlerini bölmeyi unuttun; √{3} ÷ √{3} = 1'dir.",
    "Kök içlerini böldün (√{300} ÷ √{3} = 10) ama paydadaki 2 katsayısını unuttun.",
    "√{300} sayısını 10√{3} diye sadeleştirdin ama paydaya bölmedin."
  ],
  aciklama: `Hız, yolun süreye bölümüdür. Bölmede katsayılar katsayılara, kök içleri kök içlerine bölünür.
Adım 1: √{300} = √{100 · 3} = 10√{3}.
Adım 2: Hız = 10√{3} ÷ 2√{3}.
Adım 3: Katsayılar: 10 ÷ 2 = 5. Kök içleri: √{3} ÷ √{3} = 1. Hız 5 km/saat olur.
Sağlama: 5 · 2√{3} = 10√{3} = √{300}.
Sık yapılan hata: Bölmede katsayılardan ya da kök içlerinden birini atlamak.
Cevap A.`
},
{
  id: "mat-kk-053",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 2,
  soru: "Kare biçimli bir aynanın alanı şekilde verilmiştir.\n**Buna göre aynanın bir kenarı kaç santimetredir?**",
  gorsel: `<svg viewBox="0 0 360 200" role="img" aria-label="Kare biçimli ayna; alanı 0,0144 metrekare."><rect x="90" y="25" width="140" height="140" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="160" y="90" font-size="16" text-anchor="middle" fill="currentColor">Alan</text><text x="160" y="114" font-size="16" text-anchor="middle" fill="currentColor">0,0144 m²</text><text x="160" y="190" font-size="16" text-anchor="middle" fill="var(--vurgu2)">? cm</text></svg>`,
  secenekler: ["1,2", "12", "120", "144"],
  dogru: 1,
  hatalar: [
    "Virgülü yanlış kaydırdın: 1,2^{2} = 1,44 eder, 0,0144 etmez.",
    null,
    "Metreyi santimetreye çevirirken 100 yerine 1 000 ile çarptın: 0,12 m = 12 cm eder.",
    "Virgülü atıp 144 sayısını yazdın; karekök almayı unuttun."
  ],
  aciklama: `Önce kenarı metre cinsinden bul, sonra santimetreye çevir.
Adım 1: 0,0144 = [[144|10000]] olduğundan √{0,0144} = [[12|100]] = 0,12 m.
Adım 2: 1 m = 100 cm olduğundan 0,12 m = 12 cm.
Sağlama: 0,12 · 0,12 = 0,0144.
Sık yapılan hata: Virgülden sonra 4 basamak varsa karekökte 2 basamak olacağını unutmak; ayrıca birimi çevirmeyi atlamak.
Cevap B.`
},
{
  id: "mat-kk-054",
  kazanim: "M.8.1.3.6",
  kademe: 0,
  zorluk: 2,
  soru: "√{12} · √{k} çarpımının bir doğal sayı olması istenmektedir.\n**Buna göre k üç basamaklı bir doğal sayıysa k'nin en küçük değeri kaçtır?**",
  gorsel: null,
  secenekler: ["100", "102", "108", "147"],
  dogru: 2,
  hatalar: [
    "100 üç basamaklı en küçük sayıdır ama √{12} · √{100} = √{1 200} doğal sayı değildir.",
    "102 tam kareye yakın görünür ama 12 · 102 = 1 224 tam kare değildir (35^{2} = 1 225).",
    null,
    "147 koşulu sağlar (12 · 147 = 1 764 = 42^{2}) ama üç basamaklı en küçük değer değildir; 108 daha küçüktür."
  ],
  aciklama: `√{12} · √{k} = √{12k} ve bunun doğal sayı olması için 12k tam kare olmalıdır.
Adım 1: 12 = 2^{2} · 3 olduğundan eksik olan çarpan 3'tür; yani k = 3 · m^{2} biçimindedir.
Adım 2: Uygun değerler: 3, 12, 27, 48, 75, 108, 147, …
Adım 3: Bunlardan üç basamaklı en küçük olan 108'dir (m = 6).
Sağlama: √{12} · √{108} = √{1 296} = 36.
Sık yapılan hata: Koşulları (üç basamaklı olma ve tam kare yapma) aynı anda denetlememek.
Cevap C.`
},
{
  id: "mat-kk-055",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 3,
  soru: "Bir tiyatro gösterisinde 484 dansçı, sıra sayısı ile her sıradaki dansçı sayısı birbirine eşit olacak biçimde kare düzende dizilmiştir. Gösterinin ikinci bölümünde ön taraftaki 4 sıra sahneden ayrılmıştır.\n**Buna göre sahnede kalan dansçı sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["88", "396", "462", "480"],
  dogru: 1,
  hatalar: [
    "Sahneden ayrılan dansçıların sayısını (4 · 22) buldun; kalanlar soruluyordu.",
    null,
    "Yalnızca bir sıranın ayrıldığını düşündün: 484 − 22 = 462.",
    "4 sırayı değil 4 kişiyi çıkardın: 484 − 4 = 480."
  ],
  aciklama: `Kare düzende sıra sayısı, her sıradaki kişi sayısına eşittir; bu sayı toplamın karekökü olur.
Adım 1: Bir kenardaki dansçı sayısı √{484} = 22'dir (22^{2} = 484).
Adım 2: Ayrılan 4 sırada 4 · 22 = 88 dansçı vardır.
Adım 3: Kalan: 484 − 88 = 396 dansçı. (Kontrol: kalan 18 sıra, her sırada 22 kişi, 18 · 22 = 396.)
Sık yapılan hata: Sıra sayısı ile kişi sayısını karıştırmak.
Cevap B.`
},
{
  id: "mat-kk-056",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir ses teknikeri, uzunluğu 4,5 m'ye en yakın olan kabloyu satın alacaktır. Mağazadaki dört kablonun uzunlukları metre cinsinden aşağıdaki tabloda verilmiştir.\n**Buna göre teknikerin hangi kabloyu seçmesi gerekir?**",
  gorsel: `<table class="tablo"><tr><th>Kablo</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>Uzunluk (m)</td><td>√23</td><td>√26</td><td>√17</td><td>√19</td></tr></table>`,
  secenekler: ["1. kablo", "2. kablo", "3. kablo", "4. kablo"],
  dogru: 3,
  hatalar: [
    "√{23} yaklaşık 4,8'dir; 4,5'ten 0,3 uzaktadır. 4. kablo 4,5'e daha yakındır.",
    "√{26} yaklaşık 5,1'dir; 4,5'ten 0,6 uzaktadır.",
    "√{17} yaklaşık 4,1'dir; 4,5'ten 0,4 uzaktadır.",
    null
  ],
  aciklama: `Kökleri 4,5 ile karşılaştırmak için her birinin yaklaşık değerini bul; hangi iki tam sayı arasında olduğuna ve ondalık tahmine bak.
Adım 1: 4,1^{2} = 16,81 olduğundan √{17} yaklaşık 4,1'dir; 4,4^{2} = 19,36 olduğundan √{19} yaklaşık 4,4'tür.
Adım 2: 4,8^{2} = 23,04 olduğundan √{23} yaklaşık 4,8'dir; 5,1^{2} = 26,01 olduğundan √{26} yaklaşık 5,1'dir.
Adım 3: 4,5'e uzaklıklar: 1. kablo için 0,3, 2. kablo için 0,6, 3. kablo için 0,4, 4. kablo için 0,1. En küçük uzaklık 4. kablodadır.
Sık yapılan hata: Kök içindeki sayıyı doğrudan 4,5 ile karşılaştırmak; önce kökün kendisinin değerini tahmin etmek gerekir.
Cevap D.`
},
{
  id: "mat-kk-057",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir belediye, üç farklı kaldırım taşı seçeneğini incelemektedir. Taşların kenar uzunlukları desimetre cinsinden tabloda verilmiştir.\n**Buna göre kenar uzunluklarının küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Taş</th><th>a</th><th>b</th><th>c</th></tr><tr><td>Kenar (dm)</td><td>3√7</td><td>4√5</td><td>5√3</td></tr></table>`,
  secenekler: ["a < b < c", "b < c < a", "a < c < b", "c < a < b"],
  dogru: 2,
  hatalar: [
    "Yalnızca katsayılara baktın (3 < 4 < 5). Katsayılı kökleri karşılaştırmak için hepsini kök altına almalısın.",
    "Sıralamayı tersine kurdun: b en büyük olduğu hâlde en küçük yazılmış.",
    null,
    "c = √{75}, a = √{63} sayısından büyüktür; c en küçük değildir."
  ],
  aciklama: `Katsayılı kökleri karşılaştırmak için katsayıyı kök içine al: a√{b} = √{a^{2} · b}.
Adım 1: a = 3√{7} = √{9 · 7} = √{63}.
Adım 2: b = 4√{5} = √{16 · 5} = √{80}; c = 5√{3} = √{25 · 3} = √{75}.
Adım 3: Kök içleri 63 < 75 < 80 olduğundan a < c < b'dir.
Sık yapılan hata: Katsayısı büyük olan sayının büyük olduğunu sanmak.
Cevap C.`
},
{
  id: "mat-kk-058",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 3,
  soru: "Bir bahçıvan, kenar uzunlukları şekilde verilen dikdörtgen biçimli bir çiçek tarhıyla alanı aynı olan kare biçimli yeni bir tarh yapacaktır.\n**Buna göre yeni tarhın bir kenarı kaç desimetre olmalıdır?**",
  gorsel: `<svg viewBox="0 0 440 190" role="img" aria-label="Dikdörtgen çiçek tarhı; kısa kenarı 2 kök 3 desimetre, uzun kenarı 6 kök 3 desimetre."><rect x="50" y="25" width="270" height="90" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="185" y="76" font-size="16" text-anchor="middle" fill="currentColor">Tarh</text><text x="185" y="145" font-size="16" text-anchor="middle" fill="currentColor">6√3 dm</text><text x="335" y="76" font-size="16" fill="currentColor">2√3 dm</text></svg>`,
  secenekler: ["6", "4√{3}", "6√{3}", "18"],
  dogru: 0,
  hatalar: [
    null,
    "Kenarların ortalamasını aldın: (2√{3} + 6√{3}) ÷ 2 = 4√{3}. Eşit alanlı karenin kenarı ortalama değil, alanın karekökü olur.",
    "Yalnızca uzun kenarı yazdın; kare yapınca alan korunmaz.",
    "Alanın yarısını yazdın; kenar bulmak için karekök almak gerekir."
  ],
  aciklama: `Karenin alanı, kenarının karesine eşittir; bu yüzden eşit alanlı karenin kenarı alanın karekökü olur.
Adım 1: Dikdörtgenin alanı: 2√{3} · 6√{3} = 12 · 3 = 36 dm².
Adım 2: Karenin alanı da 36 dm² olmalıdır.
Adım 3: Kenar = √{36} = 6 dm.
Sağlama: 6 · 6 = 36.
Sık yapılan hata: Eşit alan yerine kenarların ortalamasını almak.
Cevap A.`
},
{
  id: "mat-kk-059",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 3,
  soru: "Aşağıdaki ikizkenar üçgen biçimli yelkenin kenar uzunlukları desimetre cinsinden şekilde verilmiştir. Yelkenin üç kenarı boyunca baştan sona kenar şeridi dikilecektir.\n**Buna göre kaç desimetre şerit gerekir?**",
  gorsel: `<svg viewBox="0 0 440 245" role="img" aria-label="İkizkenar üçgen biçimli yelken; eşit kenarlar kök 80 desimetre, tabanı kök 20 desimetre."><polygon points="220,15 170,205 270,205" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="185" y="100" font-size="16" text-anchor="end" fill="currentColor">√80 dm</text><text x="255" y="100" font-size="16" fill="currentColor">√80 dm</text><text x="220" y="232" font-size="16" text-anchor="middle" fill="var(--vurgu2)">√20 dm</text></svg>`,
  secenekler: ["4√{5}", "√{180}", "8√{5}", "10√{5}"],
  dogru: 3,
  hatalar: [
    "Yalnızca eşit kenarlardan birini yazdın: √{80} = 4√{5}. Üç kenar da şerit alacak.",
    "Kök içlerini topladın: 80 + 80 + 20 = 180. Kök içleri toplanmaz; önce sadeleştirilir.",
    "İki eşit kenarı topladın (4√{5} + 4√{5}); tabandaki 2√{5}'i unuttun.",
    null
  ],
  aciklama: `Çevre, tüm kenarların toplamıdır. Toplamak için önce kökleri sadeleştir.
Adım 1: √{80} = √{16 · 5} = 4√{5}.
Adım 2: √{20} = √{4 · 5} = 2√{5}.
Adım 3: Çevre = 4√{5} + 4√{5} + 2√{5} = 10√{5} dm.
Sağlama: 4 + 4 + 2 = 10 ve kök içi 5 aynen kalır.
Sık yapılan hata: Üç kenarın içinden birini unutmak ya da kök içlerini toplamak.
Cevap D.`
},
{
  id: "mat-kk-060",
  kazanim: "M.8.1.3.6",
  kademe: 0,
  zorluk: 3,
  soru: "Bir kasanın şifresi, √{72} · √{k} çarpımının doğal sayı olmasını sağlayan iki basamaklı k doğal sayılarından biridir.\n**Buna göre şifre için kaç farklı k değeri vardır?**",
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 2,
  hatalar: [
    "Yalnızca 18, 32 ve 50'yi buldun; 72 ve 98 de uygundur.",
    "Beş değerden birini (ör. 98'i) atladın.",
    null,
    "Tek basamaklı 8'i de saydın; şifre iki basamaklı olmalıdır."
  ],
  aciklama: `√{72} · √{k} = √{72k} ve bunun doğal sayı olması için 72k tam kare olmalıdır.
Adım 1: 72 = 2^{3} · 3^{2} = 2 · 6^{2}; eksik olan çarpan 2'dir, yani k = 2 · m^{2} biçimindedir.
Adım 2: Değerler: 2, 8, 18, 32, 50, 72, 98, 128, …
Adım 3: İki basamaklı olanlar 18, 32, 50, 72 ve 98'dir: 5 değer.
Sağlama: √{72} · √{18} = √{1296} = 36 ve √{72} · √{98} = √{7056} = 84.
Sık yapılan hata: Tek basamaklı (8) ya da üç basamaklı (128) değerleri saymak.
Cevap C.`
},
{
  id: "mat-kk-061",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 3,
  soru: "Alanı şekilde verilen kare biçimli bir fotoğrafın dört kenarına, her kenarda 0,5 dm genişliğinde çerçeve takılacaktır.\n**Buna göre çerçeveli bütünün alanı kaç dm²'dir?**",
  gorsel: `<svg viewBox="0 0 400 230" role="img" aria-label="Kare fotoğraf ve çevresinde 0,5 desimetre genişliğinde çerçeve; fotoğrafın alanı 2,25 desimetrekare."><rect x="70" y="15" width="170" height="170" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><rect x="100" y="45" width="110" height="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="155" y="96" font-size="15" text-anchor="middle" fill="currentColor">Fotoğraf</text><text x="155" y="118" font-size="15" text-anchor="middle" fill="currentColor">2,25 dm²</text><text x="262" y="35" font-size="15" fill="var(--vurgu2)">Çerçeve: her</text><text x="262" y="55" font-size="15" fill="var(--vurgu2)">kenarda 0,5 dm</text></svg>`,
  secenekler: ["2,5", "3,25", "4", "6,25"],
  dogru: 3,
  hatalar: [
    "Çerçeveli karenin alanı yerine kenarını (2,5 dm) yazdın.",
    "Alana 1 ekledin: 2,25 + 1 = 3,25. Çerçeve alana değil, kenara eklenir.",
    "Çerçeveyi her kenarda yalnızca bir tarafa saydın: (1,5 + 0,5)^{2} = 4. Kenara iki yandan 0,5 + 0,5 = 1 dm eklenir.",
    null
  ],
  aciklama: `Önce fotoğrafın kenarını bul, çerçeveyi kenara ekle, sonra alanı hesapla.
Adım 1: Fotoğrafın kenarı √{2,25} = 1,5 dm'dir (1,5 · 1,5 = 2,25).
Adım 2: Çerçeve iki karşılıklı kenarda da 0,5 dm olduğundan büyük karenin kenarı 1,5 + 0,5 + 0,5 = 2,5 dm olur.
Adım 3: Alan = 2,5 · 2,5 = 6,25 dm².
Sağlama: Çerçevenin alanı 6,25 − 2,25 = 4 dm²'dir.
Sık yapılan hata: Çerçeveyi alana eklemek ya da kenara yalnız bir kez eklemek.
Cevap D.`
},
{
  id: "mat-kk-062",
  kazanim: "M.8.1.3.8",
  kademe: 0,
  zorluk: 3,
  soru: "Dört öğrenci, öğretmenin tahtaya yazdığı işlemleri yapmış ve sonuçlarını bulmuştur. İşlemler aşağıdaki tabloda verilmiştir.\n**Buna göre hangi iki öğrencinin işleminin sonucu irrasyonel sayıdır?**",
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Ayşe</th><th>Burak</th><th>Ceren</th><th>Deniz</th></tr><tr><td>İşlem</td><td>√12 · √3</td><td>√8 + √2</td><td>√0,81 − 0,9</td><td>√3 · √6</td></tr></table>`,
  secenekler: ["Burak ve Deniz", "Ayşe ve Burak", "Ayşe ve Ceren", "Ceren ve Deniz"],
  dogru: 0,
  hatalar: [
    null,
    "Ayşe'nin sonucu √{36} = 6'dır; bir doğal sayıdır, rasyoneldir.",
    "İkisinin de sonucu rasyoneldir: Ayşe 6, Ceren 0 bulur. Sorulan irrasyonel sonuçlardır.",
    "Ceren'in sonucu 0,9 − 0,9 = 0'dır; rasyoneldir."
  ],
  aciklama: `Kök işareti görmek yetmez; önce işlemi yap, sonra sonucun rasyonel mi irrasyonel mi olduğuna bak.
Adım 1: Ayşe: √{12} · √{3} = √{36} = 6 (rasyonel).
Adım 2: Burak: √{8} + √{2} = 2√{2} + √{2} = 3√{2} (irrasyonel, çünkü 2 tam kare değildir).
Adım 3: Ceren: √{0,81} − 0,9 = 0,9 − 0,9 = 0 (rasyonel). Deniz: √{3} · √{6} = √{18} = 3√{2} (irrasyonel).
Sonuç: İrrasyonel sonuç bulanlar Burak ve Deniz'dir.
Sık yapılan hata: İşlemde kök olması sonucun da irrasyonel olduğunu düşündürür; Ayşe'nin işleminde kök yok olur.
Cevap A.`
},
{
  id: "mat-kk-063",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 3,
  soru: "Alanı 130 cm² olan kare biçimli bir kartondan, kenar uzunluğu tam sayı santimetre olan en büyük kare parça kesilmiştir.\n**Buna göre kartonun artan kısmının alanı kaç cm²'dir?**",
  gorsel: null,
  secenekler: ["9", "11", "49", "121"],
  dogru: 0,
  hatalar: [
    null,
    "Kesilen karenin kenarını (11 cm) yazdın; artan alan soruluyordu.",
    "Kenarı 9 cm aldın: 130 − 81 = 49. √{130} sayısı 9'dan büyüktür; 11 cm'lik kare de sığar.",
    "Kesilen kare parçanın alanını yazdın; artan kısmın alanı soruluyordu."
  ],
  aciklama: `Kartonun kenarı √{130} cm'dir; kesilen karenin kenarı bunun içine sığan en büyük tam sayı olmalıdır.
Adım 1: 11^{2} = 121 ve 12^{2} = 144 olduğundan 11 < √{130} < 12'dir.
Adım 2: Kenarı tam sayı olan en büyük kare 11 cm'liktir; alanı 121 cm².
Adım 3: Artan alan: 130 − 121 = 9 cm².
Sağlama: 121 + 9 = 130.
Sık yapılan hata: Kesilen parçanın alanı ile artan alanı karıştırmak.
Cevap A.`
},
{
  id: "mat-kk-064",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir tasarım atölyesinde kare biçimli iki levha üretilmiştir. Levhaların kenar uzunlukları şekilde verilmiştir.\n**Buna göre iki levhanın alanları toplamı kaç dm²'dir?**",
  gorsel: `<svg viewBox="0 0 440 190" role="img" aria-label="İki kare levha; birinin kenarı 3 kök 2 desimetre, diğerinin kenarı 2 kök 3 desimetre."><rect x="30" y="30" width="110" height="110" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="85" y="90" font-size="16" text-anchor="middle" fill="currentColor">Levha 1</text><text x="85" y="170" font-size="16" text-anchor="middle" fill="var(--vurgu2)">3√2 dm</text><rect x="240" y="55" width="85" height="85" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="282" y="102" font-size="16" text-anchor="middle" fill="currentColor">Levha 2</text><text x="282" y="170" font-size="16" text-anchor="middle" fill="var(--vurgu2)">2√3 dm</text></svg>`,
  secenekler: ["18", "25", "30", "36"],
  dogru: 2,
  hatalar: [
    "Yalnızca birinci levhanın alanını (18) buldun; ikincinin alanı 12 dm²'dir.",
    "Katsayıları toplayıp kare aldın: (3 + 2)^{2} = 25. Kök içleri hesaba girmedi.",
    null,
    "Katsayıları çarpıp kare aldın: (3 · 2)^{2} = 36. Alanlar ayrı ayrı bulunup toplanır."
  ],
  aciklama: `Karenin alanı kenarının karesidir; bir kökün karesi kök içini verir.
Adım 1: Birinci levha: (3√{2})^{2} = 9 · 2 = 18 dm².
Adım 2: İkinci levha: (2√{3})^{2} = 4 · 3 = 12 dm².
Adım 3: Toplam: 18 + 12 = 30 dm².
Sağlama: 3√{2} yaklaşık 4,24 ve 4,24^{2} yaklaşık 18; 2√{3} yaklaşık 3,46 ve 3,46^{2} yaklaşık 12.
Sık yapılan hata: Katsayının karesini alıp kök içini kare almak ya da katsayıları birbirine eklemek.
Cevap C.`
},
{
  id: "mat-kk-065",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 3,
  soru: "Dikdörtgen biçimli birinci kartın boyu √{72} cm, eni √{2} cm; dikdörtgen biçimli ikinci kartın boyu √{3} cm, eni √{12} cm'dir.\n**Buna göre birinci kartın alanı, ikinci kartın alanının kaç katıdır?**",
  gorsel: null,
  secenekler: ["[[1|2]]", "2", "6", "18"],
  dogru: 1,
  hatalar: [
    "Oranı ters yazdın: ikinci alanın birinciye oranını buldun.",
    null,
    "Alanlar arasındaki farkı (12 − 6 = 6) yazdın; kaç katı olduğu soruluyordu.",
    "Alanları toplayıp (12 + 6 = 18) sonucu kat sayısı saydın."
  ],
  aciklama: `Dikdörtgenin alanı boy ile enin çarpımıdır. Kaç katı olduğunu bulmak için iki alanı birbirine böl.
Adım 1: Birinci kart: √{72} · √{2} = √{144} = 12 cm².
Adım 2: İkinci kart: √{3} · √{12} = √{36} = 6 cm².
Adım 3: 12 ÷ 6 = 2, yani birinci kartın alanı ikincinin 2 katıdır.
Sağlama: 2 · 6 = 12.
Sık yapılan hata: "Kaç katı" sorusunu fark ya da toplam gibi yorumlamak; kat sayısı bölmeyle bulunur.
Cevap B.`
},
{
  id: "mat-kk-066",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 3,
  soru: "Bir müzenin sergisinde küp biçimli kutular kare düzeninde dizilmiştir. Bu kare düzenine bir kenar boyunca bir sıra ve ona dik komşu kenar boyunca bir sıra daha eklenerek daha büyük bir kare oluşturulduğunda 25 kutu daha gerekmektedir.\n**Buna göre başlangıçtaki dizilimde kaç kutu vardır?**",
  gorsel: null,
  secenekler: ["12", "144", "169", "625"],
  dogru: 1,
  hatalar: [
    "Bir kenardaki kutu sayısını (12) buldun; toplam kutu sayısı sorulmuştu.",
    null,
    "Büyütülmüş dizilimdeki toplam kutu sayısını (13 · 13) buldun; başlangıçtakini sorulmuştu.",
    "Eklenen kutu sayısının karesini aldın (25^{2}); eklenen sayı kenar değildir."
  ],
  aciklama: `Kare düzende n kutu varsa her kenarda √{n} kutu bulunur. Bir kenar k kutuysa, bir sıra ve dik komşu bir sıra eklenince kenar k + 1 olur.
Adım 1: Başlangıçta kenar k olsun; eklenen kutu sayısı (k + 1)^{2} − k^{2} = 2k + 1 = 25.
Adım 2: 2k = 24 ve k = 12.
Adım 3: Başlangıçtaki kutu sayısı 12 · 12 = 144.
Sağlama: 13 · 13 = 169 ve 169 − 144 = 25.
Sık yapılan hata: Kenar sayısını toplam sanmak.
Cevap B.`
},
{
  id: "mat-kk-067",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 4,
  soru: "Alanı 2 025 m² olan kare biçimli bir parkın çevresine, her köşede de bir ağaç bulunacak ve ardışık iki ağaç arasındaki uzaklık 3 m olacak biçimde ağaç dikilecektir.\n**Buna göre kaç ağaç dikilmelidir?**",
  gorsel: null,
  secenekler: ["15", "56", "60", "64"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir kenara düşen aralık sayısını buldun (45 ÷ 3 = 15). Park dört kenarlıdır.",
    "Köşelerdeki 4 ağacı çevrenin sonucundan çıkardın. Kapalı çevrede köşeler zaten aralıkların uçlarıdır; ağaç sayısı aralık sayısına eşittir.",
    null,
    "Köşelerdeki ağaçları iki kez sayıp 60 + 4 = 64 buldun."
  ],
  aciklama: `Kapalı bir çevrede (şeklin dört kenarı boyunca) ağaç sayısı, aralık sayısına eşittir; köşeleri iki kez sayma.
Adım 1: Kenar uzunluğu √{2025} = 45 m'dir (45^{2} = 2025).
Adım 2: Çevre: 4 · 45 = 180 m.
Adım 3: Aralık sayısı: 180 ÷ 3 = 60; kapalı çevrede ağaç sayısı da 60'tır.
Sağlama: Her kenarda 45 ÷ 3 = 15 aralık vardır; 4 kenarda 4 · 15 = 60 aralık, 60 ağaç olur.
Sık yapılan hata: Düz bir doğruda "aralık + 1" kuralını kapalı çevreye de uygulamak.
Cevap C.`
},
{
  id: "mat-kk-068",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 4,
  soru: "Bir kolide x tane kalem ve y tane defter vardır. x ve y doğal sayılardır; 4 < √{x} < 5 ve 2 < √{y} < 3'tür.\n**Buna göre koli içindeki toplam eşya sayısı olan x + y kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["10", "11", "12", "32"],
  dogru: 1,
  hatalar: [
    "En büyük ve en küçük toplamın farkını (32 − 22) aldın; ikisi de dahil olduğu için 1 eklemeliydin.",
    null,
    "x'in 8 ve y'nin 4 değerini toplayıp 12 buldun. Toplamlar çakışır; değer sayıları toplanmaz.",
    "Değer sayılarını çarptın (8 · 4 = 32). Aynı toplamı veren farklı çiftler tek değer sayılır."
  ],
  aciklama: `Karekök sınırlarından önce x ve y'nin alabileceği değerleri bul.
Adım 1: 4 < √{x} < 5 ise 16 < x < 25; x = 17, 18, …, 24 olur (8 değer).
Adım 2: 2 < √{y} < 3 ise 4 < y < 9; y = 5, 6, 7, 8 olur (4 değer).
Adım 3: En küçük toplam 17 + 5 = 22, en büyük toplam 24 + 8 = 32. Aradaki her tam sayı elde edilebilir.
Adım 4: Farklı değer sayısı 32 − 22 + 1 = 11.
Sık yapılan hata: Uç değerleri dahil edip etmemek ve farklı çiftlerin aynı toplamı verdiğini unutmak.
Cevap B.`
},
{
  id: "mat-kk-069",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 4,
  soru: "Ela'nın çektiği sayı kartındaki n doğal sayısı için 5√{2} < √{n} < 6√{2} olduğu bilinmektedir.\n**Buna göre n kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["23", "22", "21", "20"],
  dogru: 2,
  hatalar: [
    "İki sınır değeri de (50 ve 72) sayıya dahil ettin; eşitsizlikte uçlar yoktur.",
    "Sınırlardan birini aralığa dahil ettin.",
    null,
    "71 − 51 = 20 buldun; uç değerler dahil olduğundan 1 eklemeliydin."
  ],
  aciklama: `Katsayılı kökleri kök altına alarak sınırları sayıya çevir.
Adım 1: 5√{2} = √{25 · 2} = √{50} ve 6√{2} = √{36 · 2} = √{72}.
Adım 2: √{50} < √{n} < √{72} ise 50 < n < 72 olur.
Adım 3: n = 51, 52, …, 71. Değer sayısı 71 − 51 + 1 = 21.
Sağlama: 72 − 50 − 1 = 21.
Sık yapılan hata: Uç değerleri (50 ve 72) saymak ya da sayarken 1 eklemeyi unutmak.
Cevap C.`
},
{
  id: "mat-kk-070",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 4,
  soru: "Alanı 12 cm² olan dikdörtgen biçimli bir kartın kenar uzunlukları √{a} cm ve √{b} cm'dir. a ve b birbirinden farklı doğal sayılardır ve a < b'dir.\n**Buna göre bu kartın kenar uzunlukları kaç farklı biçimde olabilir?**",
  gorsel: null,
  secenekler: ["7", "8", "14", "15"],
  dogru: 0,
  hatalar: [
    null,
    "a = b = 12 olan kareyi de saydın; a ve b farklı olmalıdır.",
    "(a, b) ve (b, a) çiftlerini ayrı ayrı saydın; a < b koşulu bunları tek yapar.",
    "144'ün bütün bölenlerini saydın; her çift iki bölenden oluşur."
  ],
  aciklama: `Alan, kenarların çarpımıdır: √{a} · √{b} = √{ab} = 12 ise ab = 144 olmalıdır.
Adım 1: 144'ün çarpan çiftlerini yaz: (1, 144), (2, 72), (3, 48), (4, 36), (6, 24), (8, 18), (9, 16) ve (12, 12).
Adım 2: a ve b farklı olacağından (12, 12) çıkar.
Adım 3: a < b koşulu her çifti tek kez sayar. Kalan 7 çift vardır.
Sağlama: 144'ün 15 böleni vardır; ortadaki 12 dışındaki 14 bölen 7 çift oluşturur.
Sık yapılan hata: Kareyi saymak ya da çiftleri iki kez saymak.
Cevap A.`
},
{
  id: "mat-kk-071",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 4,
  soru: "Bir elektrik tesisatçısı, uzunlukları √{8} m ve √{18} m olan iki kabloyu, üçüncü bir kabloyla uç uca ekleyerek toplam 10√{2} m uzunluğunda bir hat elde etmiştir. Üçüncü kablonun uzunluğu √{x} m'dir.\n**Buna göre x kaçtır?**",
  gorsel: null,
  secenekler: ["50", "98", "100", "200"],
  dogru: 0,
  hatalar: [
    null,
    "Üçüncü kabloyu 7√{2} buldun (10 − 3). √{8} = 2√{2} de çıkarılmalıdır; doğru fark 5√{2}'dir.",
    "Kalan uzunluğun katsayısını (10) kök içine karesiyle aldın; kalan 10√{2} değil, 5√{2}'dir.",
    "10√{2} sayısını kök içine aldın (√{200}); önce iki kabloyu çıkarmadın."
  ],
  aciklama: `Toplam uzunluktan bilinen kabloları çıkar; kalanı kök içine al.
Adım 1: √{8} = 2√{2} ve √{18} = 3√{2}.
Adım 2: Üçüncü kablo: 10√{2} − 2√{2} − 3√{2} = 5√{2}.
Adım 3: 5√{2} = √{25 · 2} = √{50}, yani x = 50.
Sağlama: 2√{2} + 3√{2} + 5√{2} = 10√{2}.
Sık yapılan hata: Kalan kökü kök içine alırken katsayının karesini almamak ya da çıkarmayı eksik yapmak.
Cevap A.`
},
{
  id: "mat-kk-072",
  kazanim: "M.8.1.3.6",
  kademe: 0,
  zorluk: 4,
  soru: "Bir sayı oyununda n doğal sayısı seçiliyor ve √{180n} sayısının bir doğal sayı olup olmadığına bakılıyor.\n**Buna göre √{180n} sayısını doğal sayı yapan iki basamaklı n değerlerinin toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["65", "100", "125", "145"],
  dogru: 3,
  hatalar: [
    "Yalnızca 20 + 45 = 65 buldun; 80 de uygundur.",
    "20 + 80 = 100 buldun; 45 değeri de uygundur.",
    "45 + 80 = 125 buldun; 20 değeri de uygundur.",
    null
  ],
  aciklama: `√{180n} doğal sayı olacaksa 180n tam kare olmalıdır.
Adım 1: 180 = 2^{2} · 3^{2} · 5; üssü tek kalan çarpan 5'tir. Bu yüzden n = 5 · m^{2} olmalıdır.
Adım 2: Değerler: 5, 20, 45, 80, 125, … İki basamaklı olanlar 20, 45 ve 80'dir.
Adım 3: Toplam: 20 + 45 + 80 = 145.
Sağlama: n = 45 için 180 · 45 = 8100 = 90^{2}.
Sık yapılan hata: İki basamaklı değerlerden birini atlamak ya da 125'i (üç basamaklı) saymak.
Cevap D.`
},
{
  id: "mat-kk-073",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 4,
  soru: "Bir duvarın bir kenarına, aralarında boşluk bırakmadan, dönüşümlü olarak önce büyük sonra küçük kare karo gelecek biçimde (büyük, küçük, büyük, küçük, …) karolar dizilecektir. Büyük karonun alanı 0,0256 m², küçük karonun alanı 0,0064 m²'dir. Duvarın bu kenarı 2,88 m uzunluğundadır ve dizilim küçük karo ile bitecektir.\n**Buna göre bu kenarda toplam kaç karo kullanılır?**",
  gorsel: null,
  secenekler: ["36", "24", "18", "12"],
  dogru: 1,
  hatalar: [
    "Yalnızca küçük karoları saydın (288 ÷ 8 = 36); büyük karolar da kullanılıyor.",
    null,
    "Yalnızca büyük karoları saydın (288 ÷ 16 = 18).",
    "Büyük-küçük çift sayısını (12) buldun; her çiftte iki karo vardır."
  ],
  aciklama: `Önce karoların kenarlarını bul, sonra bir çiftin uzunluğuyla duvarı böl.
Adım 1: Büyük karo: √{0,0256} = 0,16 m = 16 cm. Küçük karo: √{0,0064} = 0,08 m = 8 cm.
Adım 2: Bir çift (büyük + küçük) 16 + 8 = 24 cm eder. Duvar 2,88 m = 288 cm'dir.
Adım 3: 288 ÷ 24 = 12 çift; dizilim küçük karoyla bittiği için çift sayısı tamdır. Toplam karo: 12 · 2 = 24.
Sağlama: 12 büyük karo 192 cm, 12 küçük karo 96 cm eder; 192 + 96 = 288.
Sık yapılan hata: Çift sayısını karo sayısı sanmak.
Cevap B.`
},
{
  id: "mat-kk-074",
  kazanim: "M.8.1.3.8",
  kademe: 0,
  zorluk: 4,
  soru: "a = √{12}, b = √{27} ve c = √{48} sayıları veriliyor.\n**Buna göre aşağıdaki ifadelerden hangisi __yanlıştır__?**",
  gorsel: null,
  secenekler: [
    "a · c sayısı rasyoneldir.",
    "b ÷ a sayısı rasyoneldir.",
    "b + c sayısı irrasyoneldir.",
    "a · b · c sayısı rasyoneldir."
  ],
  dogru: 3,
  hatalar: [
    "Bu ifade doğrudur: 2√{3} · 4√{3} = 24 rasyoneldir.",
    "Bu ifade doğrudur: 3√{3} ÷ 2√{3} = [[3|2]] rasyoneldir.",
    "Bu ifade doğrudur: 3√{3} + 4√{3} = 7√{3} irrasyoneldir.",
    null
  ],
  aciklama: `Önce üç sayıyı sadeleştir: a = 2√{3}, b = 3√{3}, c = 4√{3}.
Adım 1: a · c = 8 · 3 = 24 (rasyonel). b ÷ a = [[3|2]] (rasyonel). b + c = 7√{3} (irrasyonel). Bu üç ifade doğrudur.
Adım 2: a · b · c = 2√{3} · 3√{3} · 4√{3} = 24 · 3√{3} = 72√{3}. Kök kalır, sonuç irrasyoneldir.
Adım 3: Yanlış olan, "rasyoneldir" diyen son ifadedir.
Sık yapılan hata: Üç kökün çarpımında kök sayısı tek olduğu için bir kökün kalacağını fark etmemek.
Cevap D.`
},
{
  id: "mat-kk-075",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 4,
  soru: "x = 2√{12} + √{27} + √{3} olarak veriliyor.\n**Buna göre x sayısı için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "13 ile 14 arasındadır ve 13'e daha yakındır.",
    "6 ile 7 arasındadır ve 6'ya daha yakındır.",
    "12 ile 13 arasındadır ve 12'ye daha yakındır.",
    "13 ile 14 arasındadır ve 14'e daha yakındır."
  ],
  dogru: 3,
  hatalar: [
    "Aralığı doğru buldun ama uzaklıkları ters yorumladın: 192 sayısı 196'ya 4, 169'a 23 uzaktadır.",
    "Kök içlerini toplayıp √{42} gibi bir şey düşündün. Kökler önce sadeleştirilir, sonra katsayılar toplanır.",
    "2√{12} yerine 3√{3} alıp 7√{3} = √{147} buldun; 2√{12} = 4√{3}'tür.",
    null
  ],
  aciklama: `Önce kökleri sadeleştir, sonra katsayıları topla, en sonda sonucu kök içine alıp tam karelerle karşılaştır.
Adım 1: 2√{12} = 2 · 2√{3} = 4√{3}; √{27} = 3√{3}.
Adım 2: x = 4√{3} + 3√{3} + √{3} = 8√{3}.
Adım 3: 8√{3} = √{64 · 3} = √{192}. 13^{2} = 169 ve 14^{2} = 196 olduğundan 13 < x < 14'tür.
Adım 4: 192 sayısı 196'ya 4, 169'a 23 uzaklıktadır; yani x, 14'e daha yakındır.
Sağlama: 8 · 1,73 yaklaşık 13,8.
Cevap D.`
}
);
