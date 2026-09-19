// Matematik — Kareköklü İfadeler | Kademe 3 (LGS Ayarı, mat-kk-301…312) + Havuz (mat-kk-001…012)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["karekoklu-ifadeler"] = window.LGS_BANK["karekoklu-ifadeler"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "mat-kk-301",
  kazanim: "M.8.1.3.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir alışveriş merkezinin girişine, özdeş kare LED panellerin yan yana ve üst üste dizilmesiyle kare biçiminde büyük bir ekran kurulmuştur. Paneller arasında boşluk bırakılmamış, hiçbir panel kesilmemiştir. Kurulan ekranın ve tek bir panelin alanı aşağıdaki şekilde verilmiştir.
**Buna göre, bu ekranın kurulumunda kaç panel kullanılmıştır?**`,
  gorsel: `<svg viewBox="0 0 520 250" role="img" aria-label="Kare ekranın alanı 576 desimetrekare, tek bir kare panelin alanı 36 desimetrekaredir."><rect x="30" y="40" width="190" height="190" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="125" y="130" font-size="16" text-anchor="middle" fill="currentColor">Kurulan ekran</text><text x="125" y="156" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 576 dm²</text><text x="125" y="28" font-size="15" text-anchor="middle" fill="currentColor">Kare biçiminde</text><rect x="330" y="120" width="110" height="110" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="385" y="170" font-size="16" text-anchor="middle" fill="currentColor">Bir panel</text><text x="385" y="194" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 36 dm²</text><text x="385" y="100" font-size="15" text-anchor="middle" fill="currentColor">Kare biçiminde</text></svg>`,
  secenekler: ["4", "16", "24", "96"],
  dogru: 1,
  hatalar: [
    "Bir kenara kaç panel sığdığını buldun (24 : 6 = 4) ve orada durdun. Ekran kare olduğundan hem yatayda hem düşeyde 4 panel vardır.",
    null,
    "Ekranın kenar uzunluğunu (24 dm) panel sayısı sandın. 24, uzunluk değeridir; panel sayısı değildir.",
    "Ekranın alanını panelin kenar uzunluğuna böldün: 576 : 6 = 96. Alan, alana bölünmelidir: 576 : 36 = 16."
  ],
  aciklama: `Bir karenin alanı, kenar uzunluğunun karesidir. Bu yüzden kenar uzunluğu, alanın kareköküdür.
Adım 1: Ekranın kenar uzunluğunu bul. 24² = 576 olduğundan √{576} = 24 dm.
Adım 2: Bir panelin kenar uzunluğunu bul. 6² = 36 olduğundan √{36} = 6 dm.
Adım 3: Bir kenara kaç panel sığdığını bul: 24 : 6 = 4 panel.
Adım 4: Ekran kare olduğu için her satırda 4, her sütunda 4 panel vardır: 4 · 4 = 16 panel.
Sağlama: 16 panelin toplam alanı 16 · 36 = 576 dm²'dir; ekranın alanına eşittir.
Sık yapılan hata: Kenardaki panel sayısını bulup durmak. Soru, ekranın tamamındaki panel sayısını soruyor.
Cevap B.`
},
{
  id: "mat-kk-302",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gök gözlem kulübü, kamp alanında kare biçiminde bir gözlem sahası ayırmıştır. Sahanın alanı şekilde verilmiştir. Kulüp, sahanın dört kenarını ip ile çevreleyecektir.
İpler yalnızca tam metre uzunluğunda kesilebilmektedir ve her kenar için tek parça ip kullanılacaktır. Bir kenarı tamamen çevrelemeyen ip kabul edilmemektedir.
**Buna göre, sahanın çevrelenmesi için en az kaç metre ip kesilmelidir?**`,
  gorsel: `<svg viewBox="0 0 420 260" role="img" aria-label="Kare biçimli gözlem sahasının alanı 700 metrekaredir; her kenar için tam metre uzunluğunda tek parça ip kesilecektir."><rect x="115" y="40" width="190" height="190" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="210" y="128" font-size="16" text-anchor="middle" fill="currentColor">Gözlem sahası (kare)</text><text x="210" y="156" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 700 m²</text><line x1="115" y1="30" x2="305" y2="30" stroke="var(--vurgu)" stroke-width="4"/><text x="210" y="20" font-size="15" text-anchor="middle" fill="currentColor">Bir kenar için bir ip</text><text x="210" y="250" font-size="15" text-anchor="middle" fill="currentColor">İpler tam metre uzunluğunda kesilir.</text></svg>`,
  secenekler: ["100", "104", "108", "112"],
  dogru: 2,
  hatalar: [
    "√{700}'ü 25 sandın. 25² = 625'tir, 700 değildir; 25 metrelik ip bir kenarı çevrelemeye yetmez.",
    "Kenar uzunluğunu 26 metreye yuvarladın. 26² = 676 < 700 olduğundan kenar 26 metreden uzundur; 26 metrelik ip yetişmez.",
    null,
    "İpi gereğinden uzun kestin. 27² = 729 > 700 olduğundan 27 metre zaten yeterlidir; 28 metreye çıkmaya gerek yoktur."
  ],
  aciklama: `Kare bir bölgenin kenar uzunluğu, alanının kareköküdür. Alan tam kare bir sayı değilse kenar uzunluğu iki ardışık doğal sayı arasındadır.
Adım 1: Kenar uzunluğu √{700} metredir. 700'ü komşu tam karelerle karşılaştır: 26² = 676 ve 27² = 729.
Adım 2: 676 < 700 < 729 olduğundan 26 < √{700} < 27'dir. Yani bir kenar 26 metreden uzun, 27 metreden kısadır.
Adım 3: İp tam metre olacağına ve kenarı tamamen çevreleyeceğine göre bir kenar için en az 27 metrelik ip gerekir; 26 metre yetmez.
Adım 4: Kare dört kenarlıdır: 4 · 27 = 108 metre.
Sık yapılan hata: Kenar 26 ile 27 arasında diye 26'ya yuvarlamak. "Yetecek kadar" istendiğinde her zaman büyük olan doğal sayıya çıkılır.
Cevap C.`
},
{
  id: "mat-kk-303",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir peyzaj mimarı, bir sitenin avlusuna dikdörtgen biçiminde bir çiçek tarhı tasarlamıştır. Tarhın kenar uzunlukları şekilde verilmiştir.
Site yönetimi tasarımı beğenmiş ancak tarhın kare biçiminde olmasını istemiştir. Mimar, alanı değiştirmeden tarhı kare biçiminde yeniden çizmiştir.
**Buna göre, kare tarhın bir kenarı kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 520 220" role="img" aria-label="Dikdörtgen çiçek tarhının kenarları kök 32 metre ve kök 8 metredir; aynı alana sahip kare tarhın kenarı sorulmaktadır."><rect x="30" y="60" width="230" height="100" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="145" y="115" font-size="15" text-anchor="middle" fill="currentColor">Dikdörtgen tarh</text><text x="145" y="182" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">√32 m</text><text x="12" y="115" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold" transform="rotate(-90 12 115)">√8 m</text><text x="300" y="115" font-size="26" text-anchor="middle" fill="var(--vurgu)">→</text><text x="300" y="88" font-size="14" text-anchor="middle" fill="currentColor">aynı alan</text><rect x="360" y="55" width="110" height="110" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="415" y="108" font-size="15" text-anchor="middle" fill="currentColor">Kare tarh</text><text x="415" y="130" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">? m</text></svg>`,
  secenekler: ["40", "16", "8", "4"],
  dogru: 3,
  hatalar: [
    "Kök içindeki sayıları topladın: 8 + 32 = 40. Çarpmada kök içleri çarpılır, toplanmaz.",
    "Dikdörtgenin alanını (16 m²) cevap sandın. Soru, o alana sahip karenin kenar uzunluğunu soruyor.",
    "Alanı doğru buldun (16 m²) ama kenarı bulmak için 16'yı 2'ye böldün. Karenin kenarı, alanın yarısı değil kareköküdür.",
    null
  ],
  aciklama: `İki kareköklü ifade çarpılırken kök içleri çarpılır: √{a} · √{b} = √{a · b}.
Adım 1: Dikdörtgenin alanını bul: √{32} · √{8} = √{32 · 8} = √{256}.
Adım 2: 16² = 256 olduğundan √{256} = 16'dır. Tarhın alanı 16 m²'dir.
Adım 3: Kare tarhın alanı da 16 m² olacaktır. Karenin alanı kenarın karesi olduğundan kenar = √{16}'dır.
Adım 4: 4² = 16 olduğundan kare tarhın bir kenarı 4 metredir.
Sağlama: √{32} = 4√{2} ve √{8} = 2√{2}'dir. Çarpımları 4 · 2 · √{2} · √{2} = 8 · 2 = 16 m² eder; aynı sonuç.
Sık yapılan hata: √{32} · √{8} işleminde katsayıları çarpıp √{2} · √{2} = 2 çarpanını unutmak.
Cevap D.`
},
{
  id: "mat-kk-304",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ambalaj atölyesinde kutuların üzerine yapıştırılan dikdörtgen etiketler kesilmektedir. Etiketin bir kenarı şekilde verildiği gibi √{48} cm'dir. Diğer kenarı ise kök içi doğal sayı olan √{k} cm biçiminde yazılmaktadır.
Atölye, kâğıt kaybını hesaplayabilmek için etiketin santimetrekare cinsinden alanının bir doğal sayı olmasını şart koşmuştur.
**Buna göre, diğer kenar aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: `<svg viewBox="0 0 400 180" role="img" aria-label="Dikdörtgen etiketin bir kenarı kök 48 santimetre, diğer kenarı kök k santimetredir."><rect x="60" y="45" width="250" height="85" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="185" y="95" font-size="15" text-anchor="middle" fill="currentColor">Etiket</text><text x="185" y="152" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">√48 cm</text><text x="36" y="92" font-size="18" text-anchor="middle" fill="var(--vurgu)" font-weight="bold" transform="rotate(-90 36 92)">√k cm</text><text x="185" y="30" font-size="14" text-anchor="middle" fill="currentColor">Alan bir doğal sayı olmalıdır.</text></svg>`,
  secenekler: ["√{2} cm", "√{3} cm", "√{12} cm", "√{27} cm"],
  dogru: 0,
  hatalar: [
    null,
    "48 ile 3'ü çarpmak yerine topladın: 48 + 3 = 51 tam kare olmadığı için bu şıkkı eledin. Alan için çarpmalısın: 48 · 3 = 144 ve √{144} = 12, yani doğal sayıdır.",
    "12 tam kare olmadığı için alanın da doğal sayı olamayacağını düşündün. Çarpanın kendisinin tam kare olması gerekmez; çarpımın tam kare olması yeterlidir: 48 · 12 = 576 = 24².",
    "48 çift, 27 tek olduğu için çarpımın tam kare olamayacağını sandın. 48 · 27 = 1296 = 36² olduğundan alan 36 cm²'dir."
  ],
  aciklama: `Dikdörtgenin alanı √{48} · √{k} = √{48 · k} olur. Bu alanın doğal sayı olması için 48 · k çarpımının tam kare olması gerekir.
Adım 1: 48'i asal çarpanlarına ayır: 48 = 2^{4} · 3. Kök dışına çıkanı ayır: √{48} = 4√{3}. Eksik kalan çarpan 3'tür.
Adım 2: Şıkları tek tek dene. 48 · 3 = 144 = 12² → doğal sayı. 48 · 12 = 576 = 24² → doğal sayı. 48 · 27 = 1296 = 36² → doğal sayı.
Adım 3: 48 · 2 = 96'dır. 96 = 2^{5} · 3 olduğundan tam kare değildir; √{96} = 4√{6} ≈ 9,8 çıkar ve bu bir doğal sayı değildir.
Adım 4: O hâlde diğer kenar √{2} cm olamaz.
Sağlama: 9² = 81 ve 10² = 100 olduğundan 96 tam kare olamaz; iki ardışık tam karenin arasındadır.
Sık yapılan hata: Kök içlerini çarpmak yerine toplamak. Alan hesabında kök içleri her zaman çarpılır.
Cevap A.`
},
{
  id: "mat-kk-305",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 3,
  soru: `Bir teknoloji mağazasında akıllı saatlerin kare biçimli ekranlarının kenarlarına koruyucu bant çekilmektedir. Bir saatin ekran alanı şekilde verilmiştir.
Koruyucu bant, 1 metre uzunluğunda rulolar hâlinde satılmaktadır. Bir ekranın bandı tek parça çekilmekte, eksik kalan bant kabul edilmemektedir.
**Buna göre, bir rulo bant ile en fazla kaç saatin ekranı çevrelenebilir?**`,
  gorsel: `<svg viewBox="0 0 400 210" role="img" aria-label="Akıllı saatin kare ekranının alanı 12,25 santimetrekaredir; ekranın dört kenarına koruyucu bant çekilecektir."><rect x="120" y="30" width="160" height="150" rx="26" fill="none" stroke="currentColor" stroke-width="3"/><rect x="145" y="50" width="110" height="110" rx="10" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4"/><text x="200" y="100" font-size="15" text-anchor="middle" fill="currentColor">Kare ekran</text><text x="200" y="124" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">12,25 cm²</text><text x="200" y="20" font-size="15" text-anchor="middle" fill="currentColor">Bant, ekranın dört kenarına çekilir.</text><text x="200" y="202" font-size="15" text-anchor="middle" fill="currentColor">Bir rulo bant: 1 m</text></svg>`,
  secenekler: ["7", "8", "28", "29"],
  dogru: 0,
  hatalar: [
    null,
    "100 : 14 = 7 kalan 2 işleminde artanı yeni bir saat saydın. 8 saat için 8 · 14 = 112 cm bant gerekir; bir rulo yetmez.",
    "Ekranın çevresi yerine bir kenarını kullandın: 100 : 3,5 = 28. Bir saat için dört kenar, yani 14 cm bant gerekir.",
    "Bir kenar için 3,5 cm hesapladın (100 : 3,5 ≈ 28,5) ve artanı da bir saat saydın. Hem çevreyi kullanmadın hem yukarı yuvarladın."
  ],
  aciklama: `Ondalık bir sayının karekökünü bulmak için sayıyı kesre çevir; payı ve paydası tam kare ise karekök kolayca alınır.
Adım 1: 12,25 = [[1225|100]]'dür. 35² = 1225 ve 10² = 100 olduğundan √{12,25} = [[35|10]] = 3,5 cm. Ekranın bir kenarı 3,5 cm'dir.
Adım 2: Kare ekranın çevresi 4 · 3,5 = 14 cm'dir. Bir saat için 14 cm bant gerekir.
Adım 3: Bir rulo 1 m = 100 cm'dir. 100 : 14 = 7 ve kalan 2'dir.
Adım 4: 7 saatin bandı çekilir, artan 2 cm sekizinci saate yetmez. En fazla 7 saat çevrelenir.
Sağlama: 7 · 14 = 98 cm ≤ 100 cm; 8 · 14 = 112 cm > 100 cm.
Sık yapılan hata: Uzunluk birimini çevirmeyi unutmak. Rulo metre, ekran santimetre cinsindedir.
Cevap A.`
},
{
  id: "mat-kk-306",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim müzesinin "Sayıların Dünyası" sergisinde etkileşimli bir pano bulunmaktadır. Panonun üzerinde "Rasyonel" ve "İrrasyonel" yazan iki kutu vardır. Ziyaretçi, elindeki kartta yazan işlemin sonucunu hesaplar ve kartı doğru kutuya bırakır.
Aşağıdaki tabloda Mert'in elindeki dört kart verilmiştir. Bu kartlardan yalnızca biri "İrrasyonel" kutusuna bırakılacaktır.
**Buna göre, "İrrasyonel" kutusuna bırakılacak kart hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>İşlem</td><td>√2 · √18</td><td>√45 : √5</td><td>√3 · √27</td><td>√8 · √3</td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 3,
  hatalar: [
    "2 ve 18'in ikisi de tam kare olmadığı için sonucun da irrasyonel olacağını sandın. Çarpmada kök içleri çarpılır: 2 · 18 = 36 ve √{36} = 6'dır; 6 rasyoneldir.",
    "Bölmede kök içlerinin bölüneceğini fark etmedin. √{45} : √{5} = √{45 : 5} = √{9} = 3'tür; 3 rasyoneldir.",
    "Kök içlerini topladın: 3 + 27 = 30 deyip √{30}'u irrasyonel buldun. Çarpmalısın: 3 · 27 = 81 ve √{81} = 9'dur.",
    null
  ],
  aciklama: `İki tam sayının oranı biçiminde yazılabilen sayılar rasyonel, yazılamayanlar irrasyoneldir. Tam kare olmayan bir doğal sayının karekökü irrasyoneldir.
Adım 1: K kartı: √{2} · √{18} = √{2 · 18} = √{36} = 6. Tam sayı olduğundan rasyoneldir.
Adım 2: L kartı: √{45} : √{5} = √{45 : 5} = √{9} = 3. Rasyoneldir.
Adım 3: M kartı: √{3} · √{27} = √{3 · 27} = √{81} = 9. Rasyoneldir.
Adım 4: N kartı: √{8} · √{3} = √{24}'tür. 4² = 16 ve 5² = 25 olduğundan 24 tam kare değildir; √{24} iki tam sayının oranı olarak yazılamaz, yani irrasyoneldir.
Sağlama: √{24} = 2√{6} ≈ 4,9'dur; kök tamamen dışarı çıkmaz.
Sık yapılan hata: Kök işaretini gördüğü anda sayıyı irrasyonel saymak. Kök içi tam kare çıkarsa sonuç rasyoneldir.
Cevap D.`
},
{
  id: "mat-kk-307",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir baskı atölyesinde afişlerin alt kenarına renkli şeritler yapıştırılmaktadır. Aşağıdaki afişin alt kenarı ile yapıştırılan iki şeridin uzunlukları şekilde verilmiştir.
Şeritler alt kenarın sol ucundan başlayarak uç uca, aralarında boşluk kalmadan yapıştırılmıştır.
**Buna göre, alt kenarda şerit yapıştırılmamış bölümün uzunluğu kaç santimetredir?**`,
  gorsel: `<svg viewBox="0 0 520 210" role="img" aria-label="Afişin alt kenarı kök 288 santimetredir; üzerine kök 50 ve kök 18 santimetrelik iki şerit uç uca yapıştırılmıştır."><rect x="40" y="25" width="440" height="110" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="260" y="85" font-size="16" text-anchor="middle" fill="currentColor">Afiş</text><rect x="40" y="135" width="180" height="18" fill="var(--vurgu)"/><rect x="220" y="135" width="108" height="18" fill="var(--vurgu2)"/><text x="130" y="176" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">√50 cm</text><text x="274" y="176" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">√18 cm</text><text x="404" y="176" font-size="16" text-anchor="middle" fill="currentColor">boş</text><line x1="40" y1="196" x2="480" y2="196" stroke="currentColor" stroke-width="2"/><text x="260" y="190" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Alt kenar: √288 cm</text></svg>`,
  secenekler: ["20√{2}", "2√{55}", "8√{2}", "4√{2}"],
  dogru: 3,
  hatalar: [
    "Çıkarmak yerine topladın: 12√{2} + 8√{2} = 20√{2}. Boş bölüm için şeritlerin uzunluğu alt kenardan çıkarılır.",
    "Kök içlerini çıkardın: 288 − 50 − 18 = 220 deyip √{220} = 2√{55} buldun. Kök içleri çıkarılmaz; önce her kök sadeleştirilir.",
    "İki şeridin toplam uzunluğunu (8√{2} cm) cevap sandın. Soru, şerit yapıştırılmamış bölümü soruyor.",
    null
  ],
  aciklama: `Kareköklü ifadelerde toplama ve çıkarma, ancak kök içleri aynı olduğunda katsayılar üzerinden yapılır. Bu yüzden her kök önce a√{b} biçimine getirilir.
Adım 1: Alt kenarı sadeleştir: 288 = 144 · 2 olduğundan √{288} = 12√{2} cm.
Adım 2: Şeritleri sadeleştir: 50 = 25 · 2 olduğundan √{50} = 5√{2} cm; 18 = 9 · 2 olduğundan √{18} = 3√{2} cm.
Adım 3: Şeritlerin toplam uzunluğu: 5√{2} + 3√{2} = 8√{2} cm.
Adım 4: Boş bölüm: 12√{2} − 8√{2} = 4√{2} cm.
Sağlama: √{2} ≈ 1,41 alırsan alt kenar ≈ 16,9 cm, şeritler ≈ 11,3 cm, boş bölüm ≈ 5,6 cm olur; 4√{2} ≈ 5,6 ile uyuşur.
Sık yapılan hata: Kök içlerini doğrudan toplayıp çıkarmak. √{50} + √{18} işlemi √{68} değildir.
Cevap D.`
},
{
  id: "mat-kk-308",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir planetaryumun salonunda koltuklar 1'den 200'e kadar numaralandırılmıştır. Gösteri başlamadan önce koltukların altındaki lambalar, aşağıdaki tabloda verilen kurala göre yanmaktadır.
Bir koltuğun yeşil yanabilmesi için mavi yanma koşulunu da sağlaması gerekmektedir.
**Buna göre, gösteri başlamadan önce kaç koltuğun lambası yeşil yanar?**`,
  gorsel: `<table class="tablo"><tr><th>Lamba rengi</th><th>Yanma koşulu</th></tr><tr><td>Mavi</td><td>Koltuk numarasının karekökü 7 ile 8 arasındadır.</td></tr><tr><td>Yeşil</td><td>Koltuk numarası 3'e kalansız bölünür.</td></tr></table>`,
  secenekler: ["5", "6", "14", "15"],
  dogru: 0,
  hatalar: [
    null,
    "48 numaralı koltuğu da saydın. 48, 3'e bölünür ama √{48} ≈ 6,9 olduğundan 7 ile 8 arasında değildir; bu koltuk mavi yanmaz.",
    "3'e bölünme koşulunu uygulamadın. Karekökü 7 ile 8 arasında olan 50'den 63'e kadar 14 koltuk numarası vardır.",
    "Hem 3'e bölünme koşulunu uygulamadın hem de sınırlardan birini (49 ya da 64) aralığa kattın. √{49} = 7 ve √{64} = 8'dir; ikisi de 7 ile 8 arasında değildir."
  ],
  aciklama: `Bir doğal sayının karekökünün hangi iki doğal sayı arasında olduğunu bulmak için sayıyı komşu tam karelerle karşılaştırırız.
Adım 1: Karekökü 7 ile 8 arasında olan sayıları belirle. 7² = 49 ve 8² = 64'tür. Sayı 49'dan büyük, 64'ten küçük olmalıdır: 50, 51, 52, …, 63.
Adım 2: Uçlara dikkat et. √{49} = 7 ve √{64} = 8 tam değerlerdir; "7 ile 8 arasında" ifadesine girmezler. Yani 49 ve 64 sayılmaz.
Adım 3: Bu aralıktaki koltuk sayısı 63 − 50 + 1 = 14'tür. Bu koltuklar mavi yanar.
Adım 4: Yeşil yanması için numara 3'e de bölünmelidir: 51, 54, 57, 60 ve 63. Bu 5 sayının hepsi 50 ile 63 arasındadır.
Sağlama: 51 = 3 · 17, 54 = 3 · 18, 57 = 3 · 19, 60 = 3 · 20, 63 = 3 · 21. Bir sonraki katı 66'dır ve 64'ü geçtiği için mavi yanmaz.
Sık yapılan hata: 48'i listeye katmak. 48, 3'ün katı olsa da 49'dan küçüktür ve karekökü 7'den azdır.
Cevap A.`
},
{
  id: "mat-kk-309",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 4,
  soru: `Bir seramik atölyesinde dikdörtgen biçimli duvar karoları üretilmektedir. Karonun uzun kenarı şekilde görüldüğü gibi √{108} cm, kısa kenarı ise √{k} cm'dir. Burada k, 100'den küçük bir sayma sayısıdır (k = 1, 2, 3, …).
Atölye, üretim planını yapabilmek için karonun santimetrekare cinsinden alanının bir doğal sayı olmasını istemektedir.
**Buna göre, k kaç farklı değer alabilir?**`,
  gorsel: `<svg viewBox="0 0 400 200" role="img" aria-label="Dikdörtgen duvar karosunun uzun kenarı kök 108 santimetre, kısa kenarı kök k santimetredir; k 100'den küçük bir sayma sayısıdır."><rect x="90" y="38" width="200" height="125" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="190" y="106" font-size="15" text-anchor="middle" fill="currentColor">Duvar karosu</text><text x="190" y="186" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">√108 cm</text><text x="66" y="100" font-size="18" text-anchor="middle" fill="var(--vurgu)" font-weight="bold" transform="rotate(-90 66 100)">√k cm</text><text x="190" y="24" font-size="14" text-anchor="middle" fill="currentColor">k, 100'den küçük bir sayma sayısıdır.</text></svg>`,
  secenekler: ["3", "5", "6", "9"],
  dogru: 1,
  hatalar: [
    "Yalnızca 3, 12 ve 27'yi bulup durdun. k = 3 · m² biçimindeki değerleri m = 4 ve m = 5 için de yazmalısın: 48 ve 75 de 100'den küçüktür.",
    null,
    "m = 6 için çıkan k = 108'i de listene kattın; oysa 108, 100'den küçük değildir. (k = 0 da listeye giremez: 0 bir sayma sayısı değildir.)",
    "k'nin kendisinin tam kare olması gerektiğini sandın ve 1, 4, 9, 16, 25, 36, 49, 64, 81 sayılarını saydın. Örneğin k = 4 için 108 · 4 = 432 tam kare değildir."
  ],
  aciklama: `Karonun alanı √{108} · √{k} = √{108 · k} olur. Alanın doğal sayı olması için 108 · k çarpımı tam kare olmalıdır.
Adım 1: 108'i asal çarpanlarına ayır: 108 = 2^{2} · 3^{3}. Burada 2'nin üssü çift, 3'ün üssü tektir.
Adım 2: Bir sayının tam kare olması için asal çarpanlarının üsleri çift olmalıdır. Öyleyse eksik kalan 3 çarpanını k getirmelidir; ayrıca k'nin geri kalan kısmı da tam kare olmalıdır. Yani k = 3 · m² biçimindedir.
Adım 3: m'ye sırayla değer ver ve k < 100 koşulunu uygula: m = 1 → k = 3, m = 2 → k = 12, m = 3 → k = 27, m = 4 → k = 48, m = 5 → k = 75. m = 6 için k = 108 olur ve 100'den küçük değildir.
Adım 4: k, beş farklı değer alabilir: 3, 12, 27, 48 ve 75.
Sağlama: 108 · 3 = 324 = 18², 108 · 12 = 1296 = 36², 108 · 27 = 2916 = 54², 108 · 48 = 5184 = 72², 108 · 75 = 8100 = 90². Beşinde de alan doğal sayıdır.
Sık yapılan hata: k'nin tam kare olması gerektiğini sanmak. Tam kare olması gereken, k değil 108 · k çarpımıdır.
Cevap B.`
},
{
  id: "mat-kk-310",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir müzenin giriş holüne kare biçiminde bir mozaik pano yapılacaktır. Pano, kenar uzunluğu 1 desimetre olan kare fayanslarla, hiçbir fayans kesilmeden ve boşluk bırakılmadan kaplanacaktır. Bu nedenle panonun kenar uzunluğu desimetre cinsinden bir doğal sayı olmak zorundadır.
Müze yönetimi, panonun alanının 20 m²'den büyük, 30 m²'den küçük olmasını istemektedir.
**Buna göre, panonun kenar uzunluğu kaç farklı değer alabilir?**`,
  gorsel: `<svg viewBox="0 0 520 200" role="img" aria-label="Kare mozaik pano, kenarı 1 desimetre olan kare fayanslarla kaplanacaktır; panonun alanı 20 metrekare ile 30 metrekare arasında olacaktır."><rect x="40" y="30" width="150" height="150" fill="none" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="1" opacity="0.6"><line x1="70" y1="30" x2="70" y2="180"/><line x1="100" y1="30" x2="100" y2="180"/><line x1="130" y1="30" x2="130" y2="180"/><line x1="160" y1="30" x2="160" y2="180"/><line x1="40" y1="60" x2="190" y2="60"/><line x1="40" y1="90" x2="190" y2="90"/><line x1="40" y1="120" x2="190" y2="120"/><line x1="40" y1="150" x2="190" y2="150"/></g><rect x="40" y="30" width="30" height="30" fill="var(--vurgu)"/><text x="230" y="60" font-size="15" fill="currentColor">Bir fayans: 1 dm × 1 dm</text><text x="230" y="92" font-size="15" fill="currentColor">Pano kare biçimindedir.</text><text x="230" y="124" font-size="15" fill="currentColor">Kenar uzunluğu tam sayı dm'dir.</text><text x="230" y="156" font-size="16" fill="currentColor" font-weight="bold">20 m² &lt; Alan &lt; 30 m²</text></svg>`,
  secenekler: ["11", "10", "9", "8"],
  dogru: 1,
  hatalar: [
    "44 dm'yi de listeye kattın. 44² = 1936 dm² = 19,36 m² olduğundan alan 20 m²'den küçüktür; bu değer koşula uymaz.",
    null,
    "45'ten 54'e kadar sayarken 54 − 45 = 9 dedin. Bir sayı aralığındaki tam sayıların sayısı için iki ucu da katmalısın: 54 − 45 + 1 = 10.",
    "Hem 45'i hem 54'ü dışarıda bıraktın. 45² = 2025 dm² = 20,25 m² ve 54² = 2916 dm² = 29,16 m²'dir; ikisi de istenen aralıktadır."
  ],
  aciklama: `Kare bir bölgenin alanı, kenar uzunluğunun karesidir. Alan bir aralıkta verildiğinde kenarın hangi tam sayı değerlerini alabileceği, komşu tam karelerle karşılaştırılarak bulunur.
Adım 1: Birimleri eşitle. 1 m = 10 dm olduğundan 1 m² = 100 dm²'dir. Buna göre 20 m² = 2000 dm² ve 30 m² = 3000 dm²'dir.
Adım 2: Kenar uzunluğuna n dersek alan n² olur ve 2000 < n² < 3000 olmalıdır.
Adım 3: Alt sınırı bul: 44² = 1936 < 2000 olduğundan 44 olmaz; 45² = 2025 > 2000 olduğundan en küçük değer 45'tir.
Adım 4: Üst sınırı bul: 54² = 2916 < 3000 olduğundan 54 olur; 55² = 3025 > 3000 olduğundan 55 olmaz.
Adım 5: Kenar 45'ten 54'e kadar değer alabilir: 54 − 45 + 1 = 10 farklı değer.
Sık yapılan hata: Metrekareyi desimetrekareye çevirirken 10 ile çarpmak. Alan birimlerinde çarpan 10 değil 10² = 100'dür.
Cevap B.`
},
{
  id: "mat-kk-311",
  kazanim: "M.8.1.3.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir grafik tasarım programında kare biçimli çerçeveler çizilmektedir. Program, çizdiği her karenin kenar uzunluğunu √{n} birim biçiminde saklamaktadır; burada n bir doğal sayıdır.
Programın "eğik ızgara" modunda ise yalnızca kenar uzunluğu, a bir doğal sayı olmak üzere a√{2} birim biçiminde yazılabilen kareler çizilebilmektedir.
Tasarımcı Berk, eğik ızgara modunda alanı 200 birim kareden küçük olan kareler çizmek istemektedir.
**Buna göre, Berk'in çizebileceği karelerde n kaç farklı değer alabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Karenin kenar uzunluğu</td><td>√n birim (n doğal sayı)</td></tr><tr><td>Eğik ızgara modunun koşulu</td><td>Kenar a√2 biçiminde yazılabilmeli (a doğal sayı)</td></tr><tr><td>Alan koşulu</td><td>200 birim kareden küçük</td></tr></table>`,
  secenekler: ["19", "10", "9", "8"],
  dogru: 2,
  hatalar: [
    "2a² < 200 eşitsizliğinde 2'yi bölmek yerine çarptın: a² < 400 deyip a'yı 19'a kadar saydın. Doğrusu a² < 100'dür.",
    "a = 10 değerini de saydın. a = 10 için alan 2 · 100 = 200 birim kare olur; bu ise 200'den küçük değildir.",
    null,
    "a = 1 değerini atladın. Kenarı √{2} birim (yani n = 2) olan kare de eğik ızgara modunda çizilebilir ve alanı 2 birim karedir."
  ],
  aciklama: `Bir a√{b} ifadesinde katsayıyı kök içine almak için katsayının karesi kök içindeki sayıyla çarpılır: a√{b} = √{a² · b}.
Adım 1: Kenar uzunluğu hem √{n} hem de a√{2} biçiminde yazılabiliyorsa bu iki ifade eşittir. Katsayıyı kök içine al: a√{2} = √{a² · 2}.
Adım 2: Buradan √{n} = √{2a²}, yani n = 2a² olur. Demek ki n, bir tam karenin 2 katıdır.
Adım 3: Karenin alanı, kenarın karesidir: (√{n})² = n. Öyleyse alan koşulu n < 200, yani 2a² < 200 demektir.
Adım 4: Eşitsizliğin iki yanını 2'ye böl: a² < 100. Bu koşulu sağlayan doğal sayılar a = 1, 2, 3, 4, 5, 6, 7, 8, 9'dur; a = 10 için a² = 100 olur ve koşul bozulur.
Adım 5: Her a değeri bir n değeri verir: 2, 8, 18, 32, 50, 72, 98, 128, 162. Yani n, 9 farklı değer alabilir.
Sık yapılan hata: Katsayıyı kök içine alırken karesini almamak. a√{2} ifadesi √{2a} değil √{2a²}'dir.
Cevap C.`
},
{
  id: "mat-kk-312",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ambalaj atölyesinde kare biçimli kartonlardan kare biçimli etiketler kesilmektedir. Bir kartonun ve bir etiketin alanı aşağıdaki şekilde verilmiştir.
Etiketler, kartonun kenarlarına paralel olarak ve kartondan hiç artık kalmayacak biçimde kesilmektedir. Atölyeye 500 etiketlik bir sipariş gelmiştir.
**Buna göre, bu sipariş için en az kaç karton kullanılmalıdır?**`,
  gorsel: `<svg viewBox="0 0 520 220" role="img" aria-label="Kare kartonun alanı 2,25 metrekare, kesilecek kare etiketin alanı 0,0625 metrekaredir."><rect x="40" y="30" width="170" height="170" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="1" opacity="0.55"><line x1="68.3" y1="30" x2="68.3" y2="200"/><line x1="96.6" y1="30" x2="96.6" y2="200"/><line x1="124.9" y1="30" x2="124.9" y2="200"/><line x1="153.2" y1="30" x2="153.2" y2="200"/><line x1="181.5" y1="30" x2="181.5" y2="200"/><line x1="40" y1="58.3" x2="210" y2="58.3"/><line x1="40" y1="86.6" x2="210" y2="86.6"/><line x1="40" y1="114.9" x2="210" y2="114.9"/><line x1="40" y1="143.2" x2="210" y2="143.2"/><line x1="40" y1="171.5" x2="210" y2="171.5"/></g><rect x="40" y="30" width="28.3" height="28.3" fill="var(--vurgu)"/><text x="125" y="218" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Karton: 2,25 m²</text><text x="380" y="80" font-size="16" fill="currentColor" font-weight="bold">Etiket: 0,0625 m²</text><text x="380" y="112" font-size="15" fill="currentColor">Karton da etiket de karedir.</text><text x="380" y="144" font-size="15" fill="currentColor">Kartondan artık kalmaz.</text><text x="380" y="176" font-size="15" fill="currentColor">Sipariş: 500 etiket</text></svg>`,
  secenekler: ["13", "14", "56", "84"],
  dogru: 1,
  hatalar: [
    "500 : 36 = 13 kalan 32 işleminde kalanı göz ardı ettin. 13 karton yalnızca 13 · 36 = 468 etiket verir; sipariş tamamlanmaz.",
    null,
    "Kartonun alanını (2,25 m²) etiketin kenar uzunluğuna (0,25 m) böldün ve bir kartondan 9 etiket çıktığını sandın. Alan, alana bölünmelidir.",
    "Bir kartondan yalnızca bir sıra etiket kestin: 1,5 : 0,25 = 6. Oysa karton kare olduğundan her iki yönde 6'şar etiket sığar; 6 · 6 = 36 etiket çıkar."
  ],
  aciklama: `Ondalık bir sayının karekökünü bulmak için sayıyı kesre çevir; payı ve paydası tam kare olduğunda karekök kolayca alınır.
Adım 1: Kartonun kenarını bul. 2,25 = [[225|100]]'dür; 15² = 225 ve 10² = 100 olduğundan √{2,25} = [[15|10]] = 1,5 m.
Adım 2: Etiketin kenarını bul. 0,0625 = [[625|10000]]'dir; 25² = 625 ve 100² = 10000 olduğundan √{0,0625} = [[25|100]] = 0,25 m.
Adım 3: Bir kenara kaç etiket sığar? 1,5 : 0,25 = 6 etiket.
Adım 4: Karton kare olduğundan bir kartondan 6 · 6 = 36 etiket çıkar.
Adım 5: 500 : 36 = 13 ve kalan 32'dir. 13 karton yetmez; 32 etiket için bir karton daha gerekir. En az 14 karton kullanılmalıdır.
Sağlama: Alanlardan da kontrol edebilirsin: 2,25 : 0,0625 = 36. Bir kartondan 36 etiket çıkar; 14 · 36 = 504 ≥ 500.
Sık yapılan hata: Bölme sonucunun kalanını yok saymak. "En az kaç" sorularında kalan varsa sonuç bir artırılır.
Cevap B.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "mat-kk-001",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki doğal sayılardan hangisi tam kare bir sayıdır?**",
  gorsel: null,
  secenekler: ["49", "56", "72", "90"],
  dogru: 0,
  hatalar: [
    null,
    "56'yı 7 · 8 biçiminde yazıp tam kare sandın. Tam kare olması için sayı, birbirine **eşit** iki çarpana ayrılmalıdır; 7 ile 8 eşit değildir.",
    "72 = 36 · 2 olduğundan 36'yı görüp tam kare sandın. √{72} = 6√{2}'dir; kök tamamen dışarı çıkmaz.",
    "90 = 9 · 10 olduğundan 9'u görüp tam kare sandın. 9 tam karedir ama 10 değildir; √{90} = 3√{10}'dur."
  ],
  aciklama: `Bir doğal sayı, başka bir doğal sayının karesi olarak yazılabiliyorsa tam kare sayıdır. Tam kare sayıların karekökü doğal sayıdır.
Adım 1: Küçük doğal sayıların karelerini yaz: 6² = 36, 7² = 49, 8² = 64, 9² = 81, 10² = 100.
Adım 2: Şıkları bu listeyle karşılaştır. 49, listede vardır: 49 = 7², yani √{49} = 7'dir.
Adım 3: 56, 72 ve 90 bu listede yoktur; üçü de iki ardışık tam karenin arasında kalır.
Sağlama: 56 ile 72, 49 ile 64 ve 64 ile 81 arasındadır; 90 ise 81 ile 100 arasındadır.
Sık yapılan hata: Sayının içinde tam kare bir çarpan görünce (72'deki 36 gibi) sayının tamamını tam kare sanmak.
Cevap A.`
},
{
  id: "mat-kk-002",
  kazanim: "M.8.1.3.2",
  kademe: 0,
  zorluk: 1,
  soru: "**√{55} sayısı hangi iki ardışık doğal sayı arasındadır?**",
  gorsel: null,
  secenekler: ["6 ile 7", "7 ile 8", "8 ile 9", "27 ile 28"],
  dogru: 1,
  hatalar: [
    "6² = 36 ve 7² = 49'dur. 55 sayısı 49'dan büyük olduğundan √{55}, 7'den de büyüktür.",
    null,
    "8² = 64'tür ve 64 > 55'tir. Öyleyse √{55}, 8'den küçüktür; 8 ile 9 arasında olamaz.",
    "55'i 2'ye böldün (27,5). Karekök almak, sayıyı yarıya bölmek değildir."
  ],
  aciklama: `Tam kare olmayan bir sayının karekökünü bulmak için sayıyı, kendisine en yakın iki tam kare arasına yerleştiririz.
Adım 1: 55'e yakın tam kareleri yaz: 7² = 49 ve 8² = 64.
Adım 2: 49 < 55 < 64 olduğundan karekökleri de aynı sırayı korur: √{49} < √{55} < √{64}.
Adım 3: Yani 7 < √{55} < 8'dir. √{55} sayısı 7 ile 8 arasındadır.
Sağlama: 7,4² = 54,76 ve 7,5² = 56,25'tir; √{55} bu iki değerin arasındadır.
Sık yapılan hata: Sayıyı 2'ye bölerek karekök bulmaya çalışmak. Karekökü alınan sayı, sonucun kendisiyle çarpımına eşittir.
Cevap B.`
},
{
  id: "mat-kk-003",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 1,
  soru: "**3√{5} ifadesinin katsayısı kök içine alınırsa aşağıdakilerden hangisi elde edilir?**",
  gorsel: null,
  secenekler: ["√{8}", "√{15}", "√{30}", "√{45}"],
  dogru: 3,
  hatalar: [
    "Katsayı ile kök içindeki sayıyı topladın: 3 + 5 = 8. Katsayı kök içine alınırken toplama değil çarpma yapılır.",
    "Katsayıyı karesini almadan kök içine aldın: 3 · 5 = 15. Kök içine giren, katsayının kendisi değil karesidir.",
    "Katsayının karesi yerine iki katını aldın: 2 · 3 = 6 ve 6 · 5 = 30. Karesini almak 2 ile çarpmak değildir; 3² = 9'dur.",
    null
  ],
  aciklama: `Kök dışındaki bir katsayı kök içine alınırken karesi alınır ve kök içindeki sayıyla çarpılır: a√{b} = √{a² · b}.
Adım 1: Katsayı 3'tür. Karesini al: 3² = 9.
Adım 2: Kök içindeki sayıyla çarp: 9 · 5 = 45.
Adım 3: Sonuç √{45}'tir.
Sağlama: √{45}'i tersine çöz: 45 = 9 · 5 olduğundan √{45} = √{9} · √{5} = 3√{5}. Başlangıçtaki ifadeye döndük.
Sık yapılan hata: Katsayıyı doğrudan kök içine yazmak (3 · 5 = 15 gibi). Katsayı kökün dışındaydı; içeri girerken kareye dönüşür.
Cevap D.`
},
{
  id: "mat-kk-004",
  kazanim: "M.8.1.3.4",
  kademe: 0,
  zorluk: 2,
  soru: `Bir ambalaj atölyesinde kutuların yan yüzüne yapıştırılan dikdörtgen etiketler kesilmektedir. Bir etiketin kenar uzunlukları şekilde verilmiştir.
**Buna göre, bir etiketin alanı kaç santimetrekaredir?**`,
  gorsel: `<svg viewBox="0 0 380 170" role="img" aria-label="Dikdörtgen etiketin kenarları kök 12 santimetre ve kök 3 santimetredir."><rect x="70" y="40" width="230" height="80" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="185" y="86" font-size="15" text-anchor="middle" fill="currentColor">Etiket</text><text x="185" y="146" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">√12 cm</text><text x="46" y="84" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold" transform="rotate(-90 46 84)">√3 cm</text></svg>`,
  secenekler: ["36", "15", "6", "4"],
  dogru: 2,
  hatalar: [
    "Kök içlerini doğru çarptın (12 · 3 = 36) ama karekökünü almayı unuttun. Sonuç √{36}'dır, 36 değil.",
    "Kök içindeki sayıları topladın: 12 + 3 = 15. Alan hesabında kenarlar çarpılır, toplanmaz.",
    null,
    "Kök içlerini böldün: 12 : 3 = 4. Alan için bölme değil çarpma yapılır."
  ],
  aciklama: `Kareköklü iki ifade çarpılırken kök içleri çarpılır: √{a} · √{b} = √{a · b}.
Adım 1: Dikdörtgenin alanı, kenar uzunluklarının çarpımıdır: √{12} · √{3}.
Adım 2: Kök içlerini çarp: √{12 · 3} = √{36}.
Adım 3: 6² = 36 olduğundan √{36} = 6'dır. Etiketin alanı 6 cm²'dir.
Sağlama: √{12} = 2√{3}'tür. Buna göre 2√{3} · √{3} = 2 · 3 = 6 bulunur; aynı sonuç.
Sık yapılan hata: Kök içlerini çarptıktan sonra kök işaretini yazmayı unutmak.
Cevap C.`
},
{
  id: "mat-kk-005",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir tasarım atölyesinde afişin alt kenarına iki renkli şerit uç uca, aralarında boşluk kalmayacak biçimde yapıştırılmıştır. Şeritlerin uzunlukları şekilde verilmiştir.
**Buna göre, iki şeridin oluşturduğu şeridin toplam uzunluğu kaç santimetredir?**`,
  gorsel: `<svg viewBox="0 0 480 150" role="img" aria-label="Uç uca yapıştırılmış iki şeritten biri kök 27 santimetre, diğeri kök 48 santimetredir."><rect x="40" y="45" width="170" height="26" fill="var(--vurgu)"/><rect x="210" y="45" width="230" height="26" fill="var(--vurgu2)"/><text x="125" y="102" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">√27 cm</text><text x="325" y="102" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">√48 cm</text><text x="240" y="30" font-size="15" text-anchor="middle" fill="currentColor">Şeritler uç uca yapıştırılmıştır.</text><text x="240" y="134" font-size="15" text-anchor="middle" fill="currentColor">Toplam uzunluk = ?</text></svg>`,
  secenekler: ["12√{3}", "7√{6}", "7√{3}", "5√{3}"],
  dogru: 2,
  hatalar: [
    "Katsayıları topladıktan sonra değil, çarptıktan sonra yazdın: 3 · 4 = 12. Kök içleri aynı olduğunda katsayılar toplanır.",
    "Katsayıları topladın ama kök içlerini de topladın: 3√{3} + 4√{3} işleminde kök içi 3 olarak kalır, 6 olmaz.",
    null,
    "Kök içindeki sayıları topladın: 27 + 48 = 75 deyip √{75} = 5√{3} buldun. Kareköklü ifadelerde kök içleri toplanmaz."
  ],
  aciklama: `Kareköklü ifadeler ancak kök içleri aynı olduğunda toplanabilir; bu durumda yalnızca katsayılar toplanır.
Adım 1: Her kökü sadeleştir. 27 = 9 · 3 olduğundan √{27} = 3√{3} cm.
Adım 2: 48 = 16 · 3 olduğundan √{48} = 4√{3} cm.
Adım 3: Kök içleri aynı (ikisi de 3) olduğundan katsayıları topla: 3√{3} + 4√{3} = 7√{3} cm.
Sağlama: √{3} ≈ 1,73 alırsan √{27} ≈ 5,2 ve √{48} ≈ 6,9 olur; toplamları ≈ 12,1'dir. 7√{3} ≈ 12,1 ile uyuşur.
Sık yapılan hata: √{27} + √{48} = √{75} yazmak. Toplamada kök içleri asla toplanmaz.
Cevap C.`
},
{
  id: "mat-kk-006",
  kazanim: "M.8.1.3.7",
  kademe: 0,
  zorluk: 2,
  soru: `Bir cep telefonunun ekranındaki kare biçimli uygulama simgelerinden birinin alanı şekilde verilmiştir.
**Buna göre, bu simgenin bir kenarının uzunluğu kaç santimetredir?**`,
  gorsel: `<svg viewBox="0 0 340 250" role="img" aria-label="Telefon ekranındaki kare biçimli uygulama simgesinin alanı 2,56 santimetrekaredir."><rect x="85" y="20" width="170" height="200" rx="20" fill="none" stroke="currentColor" stroke-width="3"/><rect x="115" y="65" width="110" height="110" rx="14" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4"/><text x="170" y="112" font-size="15" text-anchor="middle" fill="currentColor">Simge (kare)</text><text x="170" y="138" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">2,56 cm²</text><text x="170" y="242" font-size="15" text-anchor="middle" fill="currentColor">Bir kenar = ?</text></svg>`,
  secenekler: ["16", "1,6", "1,28", "0,16"],
  dogru: 1,
  hatalar: [
    "√{256} = 16 buldun ama virgülü hesaba katmadın. 16² = 256'dır, oysa alan 2,56'dır.",
    null,
    "Alanı 2'ye böldün: 2,56 : 2 = 1,28. Karekök almak yarıya bölmek değildir.",
    "Virgülü iki basamak fazla kaydırdın. 0,16² = 0,0256 eder; bu ise verilen alan değildir."
  ],
  aciklama: `Ondalık bir sayının karekökünü bulmak için sayıyı kesre çevir; payı ve paydası tam kare ise karekök kolayca alınır.
Adım 1: Karenin kenarı, alanının kareköküdür: kenar = √{2,56}.
Adım 2: Ondalık gösterimi kesre çevir: 2,56 = [[256|100]].
Adım 3: Pay ve paydanın karekökünü ayrı ayrı al: 16² = 256 ve 10² = 100 olduğundan √{2,56} = [[16|10]] = 1,6 cm.
Sağlama: 1,6 · 1,6 = 2,56. Kenar doğru bulunmuştur.
Sık yapılan hata: Virgülü unutup √{256} = 16 demek. Kökü alınan sayıda virgülden sonra iki basamak varsa sonuçta bir basamak olur.
Cevap B.`
},
{
  id: "mat-kk-007",
  kazanim: "M.8.1.3.8",
  kademe: 0,
  zorluk: 2,
  soru: `Bir gözlemevinin sergi panosunda dört sayı yazılıdır. Rehber, ziyaretçilerden bu sayılardan iki tam sayının oranı biçiminde __yazılamayanı__, yani irrasyonel olanı bulmalarını istemektedir.
**Buna göre, ziyaretçiler hangi sayıyı seçmelidir?**`,
  gorsel: null,
  secenekler: ["√{2}", "√{2,25}", "[[22|7]]", "√{169}"],
  dogru: 0,
  hatalar: [
    null,
    "Ondalık göründüğü için irrasyonel sandın. 2,25 = [[225|100]]'dür ve √{2,25} = 1,5 olduğundan rasyoneldir.",
    "π sayısı yerine kullanıldığı için bunu da irrasyonel sandın. [[22|7]] iki tam sayının oranıdır, yani rasyoneldir; irrasyonel olan π'nin kendisidir.",
    "Kök işaretini görünce irrasyonel olduğunu düşündün. 169 tam karedir: 13² = 169 olduğundan √{169} = 13'tür."
  ],
  aciklama: `İki tam sayının oranı biçiminde yazılabilen sayılara rasyonel, yazılamayanlara irrasyonel sayı denir. Tam kare olmayan bir doğal sayının karekökü irrasyoneldir.
Adım 1: √{2,25}'i incele. 2,25 = [[225|100]]'dür; 15² = 225 ve 10² = 100 olduğundan √{2,25} = 1,5 = [[3|2]]'dir. Rasyoneldir.
Adım 2: [[22|7]]'yi incele. Pay ve payda tam sayıdır; tanımı gereği rasyoneldir. (π'ye yakın bir değerdir ama π'nin kendisi değildir.)
Adım 3: √{169}'u incele. 13² = 169 olduğundan √{169} = 13'tür. Bir tam sayı, [[13|1]] biçiminde yazılabildiği için rasyoneldir.
Adım 4: √{2}'yi incele. 1² = 1 ve 2² = 4 olduğundan 2 tam kare değildir; √{2} ≈ 1,414… biçiminde sürer ve iki tam sayının oranı olarak yazılamaz. İrrasyoneldir.
Sık yapılan hata: Kök işaretli her sayıyı irrasyonel, ondalık görünen her sayıyı da irrasyonel saymak. Belirleyici olan sayının tam kare olup olmadığıdır.
Cevap A.`
},
{
  id: "mat-kk-008",
  kazanim: "M.8.1.3.6",
  kademe: 0,
  zorluk: 3,
  soru: `Bir müzenin restorasyon atölyesinde vitrinler için dikdörtgen cam levhalar kesilmektedir. Bir levhanın bir kenarı şekilde görüldüğü gibi √{20} cm'dir.
Atölye, kesilen camın maliyetini hesaplayabilmek için levhanın santimetrekare cinsinden alanının bir doğal sayı olmasını istemektedir.
**Buna göre, levhanın diğer kenarı aşağıdakilerden hangisi olmalıdır?**`,
  gorsel: `<svg viewBox="0 0 400 180" role="img" aria-label="Dikdörtgen cam levhanın bir kenarı kök 20 santimetredir, diğer kenar sorulmaktadır."><rect x="70" y="40" width="240" height="90" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="190" y="92" font-size="15" text-anchor="middle" fill="currentColor">Cam levha</text><text x="190" y="154" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">√20 cm</text><text x="46" y="88" font-size="18" text-anchor="middle" fill="var(--vurgu)" font-weight="bold" transform="rotate(-90 46 88)">? cm</text><text x="190" y="26" font-size="14" text-anchor="middle" fill="currentColor">Alan bir doğal sayı olmalıdır.</text></svg>`,
  secenekler: ["√{5} cm", "√{10} cm", "√{15} cm", "√{30} cm"],
  dogru: 0,
  hatalar: [
    null,
    "20 ile 10'un ikisi de 10'a bölündüğü için çarpımın tam kare olacağını sandın. 20 · 10 = 200'dür ve 14² = 196 ile 15² = 225 arasında kaldığı için tam kare değildir.",
    "Kök içlerini topladın: 20 + 15 = 35. Alan için çarpmalısın ve 20 · 15 = 300 tam kare değildir.",
    "Kök içi en büyük olanı seçtin. 20 · 30 = 600'dür; 24² = 576 ile 25² = 625 arasında kaldığı için tam kare değildir."
  ],
  aciklama: `Levhanın alanı √{20} · √{k} = √{20 · k} olur. Alanın doğal sayı olması için 20 · k çarpımının tam kare olması gerekir.
Adım 1: 20'yi asal çarpanlarına ayır: 20 = 2² · 5. Üssü tek olan tek çarpan 5'tir; √{20} = 2√{5} biçiminde yazılır.
Adım 2: Çarpımın tam kare olması için eksik kalan 5 çarpanı diğer kenardan gelmelidir.
Adım 3: Şıkları dene: 20 · 5 = 100 = 10² → alan 10 cm², doğal sayı. 20 · 10 = 200, 20 · 15 = 300, 20 · 30 = 600; üçü de tam kare değildir.
Adım 4: Diğer kenar √{5} cm olmalıdır.
Sağlama: √{20} · √{5} = 2√{5} · √{5} = 2 · 5 = 10 cm².
Sık yapılan hata: Sayıların ortak bölenine bakmak. Belirleyici olan ortak bölen değil, çarpımın tam kare olmasıdır.
Cevap A.`
},
{
  id: "mat-kk-009",
  kazanim: "M.8.1.3.3",
  kademe: 0,
  zorluk: 3,
  soru: `Bir uzay kampında dört takım su roketi maketi hazırlamıştır. Maketlerin ulaştığı en yüksek noktalar metre cinsinden aşağıdaki tabloda verilmiştir.
Yarışmada yalnızca 10 metreden yükseğe çıkan maketler finale kalmaktadır.
**Buna göre, kaç maket finale kalmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Takım</th><th>Kuzey</th><th>Pusula</th><th>Yörünge</th><th>Kıvılcım</th></tr><tr><td>Ulaşılan yükseklik (m)</td><td>2√26</td><td>3√11</td><td>4√6</td><td>6√3</td></tr></table>`,
  secenekler: ["4", "3", "2", "1"],
  dogru: 2,
  hatalar: [
    "Katsayıları kök içine almadan tahmin ettin ve dördünü de finale aldın. 4√{6} = √{96} ve 3√{11} = √{99}, ikisi de 100'den küçüktür.",
    "3√{11} maketini de finale aldın. 3√{11} = √{99}'dur ve 99 < 100 olduğundan bu maket 10 metrenin biraz altında kalmıştır.",
    null,
    "Yalnızca kök içi en büyük olan maketi (2√{26}) saydın. Katsayıyı kök içine alınca 6√{3} = √{108} olur ve bu da 10 metreyi geçer."
  ],
  aciklama: `Kareköklü ifadeleri karşılaştırmanın en güvenli yolu, katsayıları kök içine alıp yalnızca kök içlerini karşılaştırmaktır: a√{b} = √{a² · b}.
Adım 1: Sınırı da aynı biçime çevir: 10 = √{100}'dür. Bir maketin finale kalması için kök içi 100'den büyük olmalıdır.
Adım 2: Katsayıları kök içine al. 2√{26} = √{4 · 26} = √{104}. 3√{11} = √{9 · 11} = √{99}.
Adım 3: 4√{6} = √{16 · 6} = √{96}. 6√{3} = √{36 · 3} = √{108}.
Adım 4: Kök içlerini 100 ile karşılaştır: 104 > 100 ve 108 > 100; 99 < 100 ve 96 < 100.
Adım 5: Kuzey ve Kıvılcım takımlarının maketleri finale kalır; yani 2 maket.
Sık yapılan hata: Yalnızca katsayıya ya da yalnızca kök içine bakarak karşılaştırma yapmak. 6√{3}'ün kök içi en küçük olmasına rağmen değeri en büyüktür.
Cevap C.`
},
{
  id: "mat-kk-010",
  kazanim: "M.8.1.3.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir sitenin bahçesinde kare biçiminde iki oyun alanı vardır. Alanların ölçüleri aşağıdaki şekilde verilmiştir. İki alanın da çevresi tel örgü ile çevrilecektir.
Tel örgü, alanların kenarları boyunca tek sıra çekilecektir.
**Buna göre, iki alan için gereken tel örgünün toplam uzunluğu kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 480 200" role="img" aria-label="Birinci kare oyun alanının alanı 128 metrekare, ikinci kare oyun alanının alanı 8 metrekaredir."><rect x="40" y="35" width="150" height="150" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4"/><text x="115" y="105" font-size="15" text-anchor="middle" fill="currentColor">1. oyun alanı</text><text x="115" y="130" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">128 m²</text><rect x="300" y="110" width="75" height="75" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="4"/><text x="337" y="142" font-size="14" text-anchor="middle" fill="currentColor">2. alan</text><text x="337" y="164" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">8 m²</text><text x="337" y="60" font-size="15" text-anchor="middle" fill="currentColor">İki alan da kare biçimindedir.</text><text x="337" y="86" font-size="15" text-anchor="middle" fill="currentColor">Tel örgü kenarlar boyunca çekilir.</text></svg>`,
  secenekler: ["10√{2}", "32√{2}", "8√{34}", "40√{2}"],
  dogru: 3,
  hatalar: [
    "İki alanın kenar uzunluklarını topladın (8√{2} + 2√{2} = 10√{2}) ama çevre için 4 ile çarpmadın.",
    "Yalnızca birinci alanın çevresini hesapladın: 4 · 8√{2} = 32√{2}. İkinci alanın çevresini eklemeyi unuttun.",
    "İki alanın alanını topladın (128 + 8 = 136) ve tek bir karenin çevresini hesapladın: 4√{136} = 8√{34}. İki ayrı kare vardır; çevreleri ayrı ayrı bulunup toplanır.",
    null
  ],
  aciklama: `Kare bir bölgenin kenarı alanının karekökü, çevresi ise kenarın 4 katıdır. Kök içleri aynı olan ifadeler toplanırken katsayılar toplanır.
Adım 1: Birinci alanın kenarını bul: 128 = 64 · 2 olduğundan √{128} = 8√{2} m.
Adım 2: İkinci alanın kenarını bul: 8 = 4 · 2 olduğundan √{8} = 2√{2} m.
Adım 3: Çevreleri hesapla: birinci alan 4 · 8√{2} = 32√{2} m, ikinci alan 4 · 2√{2} = 8√{2} m.
Adım 4: Kök içleri aynı olduğundan katsayıları topla: 32√{2} + 8√{2} = 40√{2} m.
Sağlama: √{2} ≈ 1,41 alırsan kenarlar ≈ 11,3 m ve ≈ 2,8 m olur; çevreler ≈ 45,2 m ve ≈ 11,3 m, toplam ≈ 56,5 m. 40√{2} ≈ 56,6 ile uyuşur.
Sık yapılan hata: Kenar uzunluklarını bulup çevreye geçmeyi unutmak.
Cevap D.`
},
{
  id: "mat-kk-011",
  kazanim: "M.8.1.3.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir fabrikada kare biçimli tablet ekranları üretilmektedir. Üretilen her ekranın santimetrekare cinsinden alanı bir doğal sayıdır ve bu alan 300'den büyük, 400'den küçüktür. Fabrika, bu aralıktaki her alan değerinden tam olarak bir ekran üretmiştir.
Kalite birimi, kenar uzunluğu santimetre cinsinden bir doğal sayı __olmayan__ ekranları "özel kesim" olarak işaretlemektedir.
**Buna göre, kaç ekran özel kesim olarak işaretlenmiştir?**`,
  gorsel: null,
  secenekler: ["101", "99", "98", "97"],
  dogru: 3,
  hatalar: [
    "300 ve 400 alanlarını da aralığa kattın (101 alan değeri) ve tam kare olanları çıkarmayı unuttun. Alan 300'den büyük, 400'den küçük olmalıdır.",
    "Toplam ekran sayısını yazdın; tam kare alanlı ekranları çıkarmadın. Bu aralıkta kenarı doğal sayı olan 2 ekran vardır.",
    "Yalnızca bir tam kare buldun. 300 ile 400 arasında hem 324 = 18² hem de 361 = 19² vardır.",
    null
  ],
  aciklama: `Kare bir ekranın kenarı, alanının kareköküdür. Kenarın doğal sayı olması için alanın tam kare olması gerekir.
Adım 1: Alan değerlerini say. Alan 300'den büyük, 400'den küçük olduğundan değerler 301, 302, …, 399'dur. Sayısı 399 − 301 + 1 = 99'dur.
Adım 2: Bu aralıktaki tam kareleri bul. 17² = 289'dur ve 301'den küçüktür. 18² = 324 ve 19² = 361 aralığa girer. 20² = 400'dür ve 399'dan büyüktür.
Adım 3: Demek ki yalnızca 324 ve 361 alanlarına sahip iki ekranın kenarı doğal sayıdır (18 cm ve 19 cm).
Adım 4: Geri kalan ekranların kenarı doğal sayı değildir: 99 − 2 = 97 ekran özel kesim olarak işaretlenir.
Sağlama: Örneğin alanı 350 cm² olan ekranın kenarı √{350}'dir ve 18² = 324 ile 19² = 361 arasındadır; doğal sayı değildir.
Sık yapılan hata: Sınır değerleri (300 ve 400) aralığa katmak. "Büyüktür" ve "küçüktür" ifadeleri uç değerleri dışarıda bırakır.
Cevap D.`
},
{
  id: "mat-kk-012",
  kazanim: "M.8.1.3.6",
  kademe: 0,
  zorluk: 4,
  soru: `Bir ambalaj atölyesinde dikdörtgen biçimli kutu kapakları kesilmektedir. Kapağın bir kenarı şekilde görüldüğü gibi √{24} cm'dir. Diğer kenarı ise a bir doğal sayı olmak üzere a√{6} cm biçiminde yazılmaktadır.
Atölye, kapağın santimetrekare cinsinden alanının bir doğal sayı ve 300'den küçük olmasını istemektedir.
**Buna göre, a kaç farklı değer alabilir?**`,
  gorsel: `<svg viewBox="0 0 420 190" role="img" aria-label="Dikdörtgen kutu kapağının bir kenarı kök 24 santimetre, diğer kenarı a kök 6 santimetredir."><rect x="80" y="40" width="250" height="95" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="205" y="94" font-size="15" text-anchor="middle" fill="currentColor">Kutu kapağı</text><text x="205" y="158" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">√24 cm</text><text x="54" y="90" font-size="18" text-anchor="middle" fill="var(--vurgu)" font-weight="bold" transform="rotate(-90 54 90)">a√6 cm</text><text x="205" y="26" font-size="14" text-anchor="middle" fill="currentColor">Alan doğal sayı ve 300 cm²'den küçük olmalıdır.</text></svg>`,
  secenekler: ["12", "24", "25", "49"],
  dogru: 1,
  hatalar: [
    "√{24}'ü 4√{6} sandın (24 = 4 · 6 deyip 4'ü doğrudan dışarı çıkardın). Kök dışına çıkan, çarpanın kendisi değil kareköküdür: √{4} = 2, yani √{24} = 2√{6}'dır.",
    null,
    "a = 25 değerini de saydın. a = 25 için alan 12 · 25 = 300 cm² olur; bu ise 300'den küçük değildir.",
    "√{6} · √{6} = 6 olduğunu buldun ama katsayılardaki 2'yi çarpmayı unuttun ve alanı 6a sandın. Doğrusu 2 · a · 6 = 12a'dır."
  ],
  aciklama: `Kareköklü ifadelerde çarpma yapılırken önce her ifade a√{b} biçimine getirilir; sonra katsayılar kendi aralarında, kök içleri kendi aralarında çarpılır.
Adım 1: √{24}'ü sadeleştir: 24 = 4 · 6 olduğundan √{24} = √{4} · √{6} = 2√{6} cm.
Adım 2: Alanı hesapla: 2√{6} · a√{6} = (2 · a) · (√{6} · √{6}) = 2a · 6 = 12a cm².
Adım 3: 12a ifadesi, a her doğal sayı için bir doğal sayıdır; yani "alan doğal sayı olsun" koşulu kendiliğinden sağlanır.
Adım 4: Alan koşulunu yaz: 12a < 300. İki yanı 12'ye böl: a < 25.
Adım 5: a bir doğal sayı olduğundan a = 1, 2, 3, …, 24 değerlerini alabilir. Bu da 24 farklı değer demektir.
Sağlama: a = 24 için alan 12 · 24 = 288 cm² olur ve 300'den küçüktür; a = 25 için alan tam 300 olur ve koşul bozulur.
Sık yapılan hata: √{a} · √{a} = a olduğunu unutup sonucu kök içinde bırakmak. √{6} · √{6} = √{36} = 6'dır.
Cevap B.`
}
);
