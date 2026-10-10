// Matematik — Eşitsizlikler | 2. dosya
// Havuz: mat-es-001…015 · Kademe 3 (LGS Ayarı): mat-es-301…325
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["esitsizlikler"] = window.LGS_BANK["esitsizlikler"] || []).push(
{
  "id": "mat-es-001",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Bir x sayısının 4 fazlası 10'dan küçüktür. Bu durumu gösteren eşitsizlik hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x + 4 > 10",
    "x + 4 < 10",
    "x − 4 < 10",
    "x + 4 ≤ 10"
  ],
  "dogru": 1,
  "hatalar": [
    "Yön ters: “küçüktür” için < gerekir.",
    null,
    "“4 fazlası” toplama demektir; sen çıkarma yazdın.",
    "“Küçüktür” 10'u kapsamaz; ≤ yazarak 10'u da dahil ettin."
  ],
  "aciklama": "Adım 1: “x sayısının 4 fazlası” → x + 4.\nAdım 2: “10'dan küçüktür” → < 10.\nAdım 3: x + 4 < 10.\nSağlama: x = 5 için 9 < 10 doğru; x = 6 için 10 < 10 yanlış.\nSık yapılan hata: “Küçüktür” ile “küçük ya da eşittir”i karıştırmak.\nCevap B."
},
{
  "id": "mat-es-002",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**Sayı doğrusunda gösterilen çözüm kümesi aşağıdakilerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"98.1\" y1=\"38\" x2=\"98.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"98.1\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−1</text><line x1=\"156.3\" y1=\"38\" x2=\"156.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"156.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"214.4\" y1=\"38\" x2=\"214.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"214.4\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"272.5\" y1=\"38\" x2=\"272.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"330.6\" y1=\"38\" x2=\"330.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"330.6\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"388.8\" y1=\"38\" x2=\"388.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"388.8\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"446.9\" y1=\"38\" x2=\"446.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"446.9\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">6</text><line x1=\"272.5\" y1=\"44\" x2=\"527.0\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"272.5\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "x < 2",
    "x ≤ 2",
    "x ≥ 2",
    "x > 2"
  ],
  "dogru": 3,
  "hatalar": [
    "Ok sağa doğru gidiyor; “küçüktür” sola gider.",
    "Hem yön hem uç yanlış: ok sağa gidiyor ve 2'de boş yuvarlak var.",
    "Yön doğru, ama 2'deki yuvarlak boş; 2 dahil değil.",
    null
  ],
  "aciklama": "Adım 1: 2'deki yuvarlak boş: 2 çözüme dahil değildir.\nAdım 2: Ok sağa gidiyor: 2'den büyük sayılar çözümdür.\nAdım 3: x > 2.\nSık yapılan hata: Boş yuvarlağı dolu gibi okuyup ≥ seçmek.\nCevap D."
},
{
  "id": "mat-es-003",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**x − 5 > 3 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > 8",
    "x > 2",
    "x < 8",
    "x < 2"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "5'i 3'ten çıkardın; karşıya geçen terimin işareti değişir: 3 + 5 = 8.",
    "Yön ters: toplama ve çıkarmada eşitsizlik yönü değişmez.",
    "Hem 5'i yanlış taşıdın hem yönü ters çevirdin."
  ],
  "aciklama": "Adım 1: İki tarafa 5 ekle: x > 3 + 5.\nAdım 2: x > 8.\nSağlama: x = 9 için 9 − 5 = 4 > 3 doğru; x = 8 için 3 > 3 yanlış.\nSık yapılan hata: Toplama ya da çıkarma yaparken yönü değiştirmek.\nCevap A."
},
{
  "id": "mat-es-004",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir lunaparkta bir oyuncağa binmek için boyunun en az 120 cm olması gerekiyor. Berk'in boyu b cm'dir.\n**Buna göre Berk'in oyuncağa binebilmesi için hangi eşitsizlik gerekir?**",
  "gorsel": null,
  "secenekler": [
    "b > 120",
    "b < 120",
    "b ≥ 120",
    "b ≤ 120"
  ],
  "dogru": 2,
  "hatalar": [
    "“En az 120” demek 120 cm de yeterlidir; > yazarak 120'yi dışarıda bıraktın.",
    "Yön ters: “en az” büyük ya da eşit demektir.",
    null,
    "Yön ters: “en az” sınırı alttan koyar, üstten değil."
  ],
  "aciklama": "Adım 1: “En az 120” → 120 ya da daha fazla.\nAdım 2: b ≥ 120.\nSağlama: b = 120 uygun, b = 119 uygun değil.\nSık yapılan hata: “En az”ı ≤, “en fazla”yı ≥ ile karıştırmak.\nCevap C."
},
{
  "id": "mat-es-005",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**Aşağıdaki sayı doğrusunda x için gösterilen aralıkta kaç tam sayı vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−3</text><line x1=\"106.4\" y1=\"38\" x2=\"106.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"106.4\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"172.9\" y1=\"38\" x2=\"172.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"172.9\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−1</text><line x1=\"239.3\" y1=\"38\" x2=\"239.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"239.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"305.7\" y1=\"38\" x2=\"305.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"305.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"372.1\" y1=\"38\" x2=\"372.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"372.1\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"438.6\" y1=\"38\" x2=\"438.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"438.6\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"106.4\" y1=\"44\" x2=\"372.1\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"106.4\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><circle cx=\"372.1\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 1,
  "hatalar": [
    "Hem −2'yi hem 2'yi dışarıda bıraktın; oysa −2'de dolu yuvarlak var, o dahil.",
    null,
    "Boş yuvarlak olan 2'yi de saydın (−2…2).",
    "Şekildeki işaretli sayıların hepsini (−3…2) saydın."
  ],
  "aciklama": "Aralık −2 ≤ x < 2: −2'de dolu (dahil), 2'de boş (dahil değil).\nAdım 1: Tam sayılar −2, −1, 0, 1 olur.\nAdım 2: Say: 4 tane.\nSağlama: 2 − (−2) = 4; bir uç dahil, bir uç dahil değilken aradaki fark tam sayı sayısını verir.\nSık yapılan hata: Dolu ve boş yuvarlağı aynı saymak.\nCevap B."
},
{
  "id": "mat-es-006",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Ayşe'nin tahtadaki eşitsizliği −2x + 4 ≥ 10'dur.\n**Buna göre bu eşitsizliğin çözümü hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≥ −3",
    "x ≥ 3",
    "x ≤ 3",
    "x ≤ −3"
  ],
  "dogru": 3,
  "hatalar": [
    "Negatif sayıya bölünce yönü değiştirmedin.",
    "6 : (−2) işleminde işareti kaybettin ve yönü de değiştirmedin.",
    "6 : (−2) işleminde işareti kaybettin (3 buldun), yönü doğru çevirdin.",
    null
  ],
  "aciklama": "Adım 1: 4'ü karşıya at: −2x ≥ 6.\nAdım 2: Her tarafı −2'ye böl; negatif sayıyla bölündüğü için yön değişir: x ≤ −3.\nSağlama: x = −4 için 8 + 4 = 12 ≥ 10 doğru; x = 0 için 4 ≥ 10 yanlış.\nSık yapılan hata: Negatif sayıyla bölünce yönü değiştirmemek.\nCevap D."
},
{
  "id": "mat-es-007",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**3x − 4 < 14 eşitsizliğini sağlayan en büyük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 2,
  "hatalar": [
    "14 − 4 = 10 yazıp 10 : 3 ≈ 3,3 buldun; 4'ü yanlış yöne taşıdın.",
    "4'ü karşıya atmayı unuttun: 3x < 14 → x < 4,67.",
    null,
    "x < 6 olduğu için 6 çözüm değildir; sınırı dahil ettin."
  ],
  "aciklama": "Adım 1: 4'ü karşıya at: 3x < 18.\nAdım 2: 3'e böl: x < 6.\nAdım 3: 6 dahil değil; en büyük tam sayı 5'tir.\nSağlama: x = 5 için 15 − 4 = 11 < 14 doğru; x = 6 için 14 < 14 yanlış.\nSık yapılan hata: Sınır değeri çözüm saymak.\nCevap C."
},
{
  "id": "mat-es-008",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir kafede çayın tanesi x TL, simit 8 TL'dir. Selin 3 çay ve 1 simit alacak ve en fazla 50 TL ödemek istiyor.\n**Buna göre Selin'in isteğini gösteren eşitsizlik hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "3x + 8 ≤ 50",
    "3x + 8 ≥ 50",
    "3x + 8 < 50",
    "3(x + 8) ≤ 50"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yön ters: “en fazla” küçük ya da eşit demektir.",
    "“En fazla 50” demek 50 TL de olabilir; < yazarak 50'yi dışarıda bıraktın.",
    "8 TL yalnızca simite aittir; onu da 3 ile çarptın."
  ],
  "aciklama": "Adım 1: 3 çay 3x TL, 1 simit 8 TL; toplam 3x + 8.\nAdım 2: “En fazla 50” → 50 ya da daha az.\nAdım 3: 3x + 8 ≤ 50.\nSağlama: x = 14 için 42 + 8 = 50 uygun; x = 15 için 53 uygun değil.\nSık yapılan hata: “En fazla”yı < ile karıştırmak.\nCevap A."
},
{
  "id": "mat-es-009",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir hava durumu sitesi, bir gün boyunca dış sıcaklığın (°C) aşağıdaki sayı doğrusunda gösterilen aralıkta kaldığını bildiriyor. Sıcaklıklar tam derece olarak ölçülmüştür.\n**Buna göre bu aralıktaki tam sayı değerlerinin toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−5</text><line x1=\"91.7\" y1=\"38\" x2=\"91.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"91.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−4</text><line x1=\"143.3\" y1=\"38\" x2=\"143.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"143.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−3</text><line x1=\"195.0\" y1=\"38\" x2=\"195.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"195.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"246.7\" y1=\"38\" x2=\"246.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"246.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−1</text><line x1=\"298.3\" y1=\"38\" x2=\"298.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"298.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"350.0\" y1=\"38\" x2=\"350.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"401.7\" y1=\"38\" x2=\"401.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"401.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"453.3\" y1=\"38\" x2=\"453.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"453.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"91.7\" y1=\"44\" x2=\"350.0\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"91.7\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><circle cx=\"350.0\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/></svg>",
  "secenekler": [
    "−5",
    "−6",
    "−9",
    "−10"
  ],
  "dogru": 2,
  "hatalar": [
    "Dolu yuvarlak olan −4'ü dışarıda bıraktın (−3…1).",
    "İki ucu da dışarıda bıraktın (−3…0); oysa iki uçta da dolu yuvarlak var.",
    null,
    "Dolu yuvarlak olan 1'i dışarıda bıraktın (−4…0)."
  ],
  "aciklama": "Şekil −4 ≤ x ≤ 1 aralığını gösterir: iki uçta da dolu yuvarlak var, −4 ve 1 dahil.\nAdım 1: Tam sayılar −4, −3, −2, −1, 0, 1 olur.\nAdım 2: Toplam: −4 − 3 − 2 − 1 + 0 + 1 = −9.\nSağlama: −1 ile 1 birbirini götürür; kalan −4 − 3 − 2 = −9.\nSık yapılan hata: Dolu yuvarlaktaki uç değerleri toplamaya katmamak.\nCevap C."
},
{
  "id": "mat-es-010",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir taksi, binişte 12 TL açılış ücreti ve her kilometre için 9 TL alıyor. Duru'nun cebinde 100 TL var ve yolculuk ücreti bu parayı aşmamalı. Taksimetre yalnızca tam kilometreler üzerinden ücret hesaplıyor.\n**Buna göre Duru en fazla kaç kilometre gidebilir?**",
  "gorsel": null,
  "secenekler": [
    "12",
    "11",
    "10",
    "9"
  ],
  "dogru": 3,
  "hatalar": [
    "Açılış ücretini katmadın ve 100 : 9 ≈ 11,1 sonucunu yukarı yuvarladın.",
    "Açılış ücretini hesaba katmadın: 100 : 9 ≈ 11,1.",
    "(100 − 12) : 9 ≈ 9,78 sonucunu yukarı yuvarladın; 10 km için 12 + 90 = 102 TL gerekir.",
    null
  ],
  "aciklama": "Adım 1: x kilometrelik yolun ücreti 12 + 9x TL'dir. Koşul 12 + 9x ≤ 100.\nAdım 2: 12'yi karşıya at: 9x ≤ 88.\nAdım 3: 9'a böl: x ≤ 9,78… Tam kilometre ve sınır aşılamayacağı için sonuç aşağı yuvarlanır: 9.\nSağlama: 9 km için 12 + 81 = 93 TL ≤ 100; 10 km için 102 TL > 100.\nSık yapılan hata: Ondalık sonucu yukarı yuvarlamak.\nCevap D."
},
{
  "id": "mat-es-011",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Burcu'nun x TL parası vardır. Burcu, “Param yarısının 12 TL fazlası 50 TL'yi geçmez.” diyor.\n**Buna göre Burcu'nun söylediği cümleyi gösteren eşitsizlik hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "[[x|2]] + 12 ≥ 50",
    "[[x|2]] + 12 ≤ 50",
    "[[x + 12|2]] ≤ 50",
    "[[x|2]] − 12 ≤ 50"
  ],
  "dogru": 1,
  "hatalar": [
    "Yön ters: “geçmez” küçük ya da eşit demektir.",
    null,
    "“Yarısının 12 fazlası” yarıyı bulduktan sonra 12 eklemektir; sen 12'yi de yarıladın.",
    "“12 fazlası” toplama demektir; sen çıkarma yazdın."
  ],
  "aciklama": "Adım 1: Burcu'nun parasının yarısı [[x|2]]'dir.\nAdım 2: Yarısının 12 fazlası [[x|2]] + 12 olur.\nAdım 3: “50 TL'yi geçmez” → 50'ye eşit ya da küçük: [[x|2]] + 12 ≤ 50.\nSağlama: x = 76 için 38 + 12 = 50 uygun; x = 78 için 51 uygun değil.\nSık yapılan hata: “Geçmez” ifadesini < ile karıştırmak.\nCevap B."
},
{
  "id": "mat-es-012",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir uygulamada kullanıcının puanı 9 − 4x ile hesaplanıyor (x: yapılan hata sayısı). Puanı 1'den küçük olan kullanıcılar “tekrar” bölümüne yönlendiriliyor.\n**Buna göre tekrar bölümüne yönlendirilen kullanıcıların hata sayısı x için hangi eşitsizlik doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "x > 2",
    "x < 2",
    "x > −2",
    "x < −2"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Negatif sayıya bölünce yönü değiştirmedin.",
    "−8 : (−4) işlemini −2 buldun; bölmede işaret hatası yaptın.",
    "−8 : (−4) işlemini −2 buldun ve yönü de değiştirmedin."
  ],
  "aciklama": "Adım 1: Koşul 9 − 4x < 1.\nAdım 2: 9'u karşıya at: −4x < −8.\nAdım 3: Her tarafı −4'e böl; yön değişir: x > 2.\nSağlama: x = 3 için 9 − 12 = −3 < 1 doğru; x = 2 için 1 < 1 yanlış.\nSık yapılan hata: Negatif sayıya bölünce yönü değiştirmemek.\nCevap A."
},
{
  "id": "mat-es-013",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir sayı oyununda Efe'nin seçtiği x tam sayısı için şu ipucu veriliyor: “3'ten x'in 2 katı çıkarılınca sonuç −7'den büyüktür ve 7'den büyük değildir.”\n**Buna göre x'in alabileceği kaç farklı tam sayı değeri vardır?**",
  "gorsel": null,
  "secenekler": [
    "5",
    "6",
    "7",
    "8"
  ],
  "dogru": 2,
  "hatalar": [
    "Negatif tam sayıları (−2 ve −1) saymadın; yalnızca 0'dan 4'e kadar saydın.",
    "Dolu uç olan −2'yi dışarıda bıraktın (−1…4).",
    null,
    "Boş uç olan 5'i de saydın (−2…5)."
  ],
  "aciklama": "Adım 1: Koşul −7 < 3 − 2x ≤ 7.\nAdım 2: Her taraftan 3 çıkar: −10 < −2x ≤ 4.\nAdım 3: Her tarafı −2'ye böl; yönler değişir: 5 > x ≥ −2, yani −2 ≤ x < 5.\nAdım 4: Tam sayılar −2, −1, 0, 1, 2, 3, 4 olur; toplam 7 tanedir.\nSağlama: x = −2 için 3 + 4 = 7, “7'den büyük değil” doğru; x = 5 için 3 − 10 = −7, “−7'den büyük” değil. Bir uç dahil, bir uç dahil değil: 5 − (−2) = 7.\nSık yapılan hata: Negatife bölünce yönleri değiştirmemek ya da boş ucu saymak.\nCevap C."
},
{
  "id": "mat-es-014",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir eşitsizlik a − 2x ≤ 3 biçimindedir (a bir tam sayı). Bu eşitsizliğin çözüm kümesi aşağıdaki sayı doğrusunda gösterilmiştir.\n**Buna göre a kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"98.1\" y1=\"38\" x2=\"98.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"98.1\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−1</text><line x1=\"156.3\" y1=\"38\" x2=\"156.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"156.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"214.4\" y1=\"38\" x2=\"214.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"214.4\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"272.5\" y1=\"38\" x2=\"272.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"330.6\" y1=\"38\" x2=\"330.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"330.6\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"388.8\" y1=\"38\" x2=\"388.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"388.8\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"446.9\" y1=\"38\" x2=\"446.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"446.9\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">6</text><line x1=\"272.5\" y1=\"44\" x2=\"527.0\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"272.5\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/></svg>",
  "secenekler": [
    "7",
    "5",
    "1",
    "−1"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sınır noktasında a − 2 · 2 = 3 yazman gerekirken 2 ile çarpmayı unutup a − 2 = 3 yazdın.",
    "Sınır noktasında a + 2 = 3 yazdın; −2x ifadesinin x = 2 için −4 ettiğini görmedin.",
    "Sınır noktasında a + 4 = 3 yazdın; −4'ü karşıya atarken işareti değiştirmedin."
  ],
  "aciklama": "Şekil x ≥ 2 çözüm kümesini gösterir (2 dahil, ok sağa).\nAdım 1: a − 2x ≤ 3 → −2x ≤ 3 − a.\nAdım 2: Her tarafı −2'ye böl; yön değişir: x ≥ [[a − 3|2]].\nAdım 3: Sınır 2 olmalı: [[a − 3|2]] = 2, yani a − 3 = 4 ve a = 7.\nSağlama: a = 7 için 7 − 2x ≤ 3 → −2x ≤ −4 → x ≥ 2; şekille aynı.\nSık yapılan hata: Sınır noktasında 2x yerine x yazmak.\nCevap A."
},
{
  "id": "mat-es-015",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir telefonun pili %100 dolu iken kullanılmaya başlıyor ve her saat %6 azalıyor; t saat sonra pil yüzdesi 100 − 6t olur. Telefon, pil yüzdesi aşağıdaki sayı doğrusunda gösterilen aralıktayken “enerji tasarrufu” moduna giriyor. Pil yüzdesi yalnızca tam saatlerde (t tam sayı) kontrol ediliyor.\n**Buna göre telefonun tasarruf modunda olduğu tam saat değerlerinin (t) toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"86.5\" y1=\"38\" x2=\"86.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"86.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">10</text><line x1=\"133.0\" y1=\"38\" x2=\"133.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"133.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">20</text><line x1=\"179.5\" y1=\"38\" x2=\"179.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"179.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">30</text><line x1=\"226.0\" y1=\"38\" x2=\"226.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"226.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">40</text><line x1=\"272.5\" y1=\"38\" x2=\"272.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">50</text><line x1=\"319.0\" y1=\"38\" x2=\"319.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"319.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">60</text><line x1=\"365.5\" y1=\"38\" x2=\"365.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"365.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">70</text><line x1=\"412.0\" y1=\"38\" x2=\"412.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"412.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">80</text><line x1=\"458.5\" y1=\"38\" x2=\"458.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"458.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">90</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">100</text><line x1=\"170.2\" y1=\"44\" x2=\"253.9\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"170.2\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"170.2\" y=\"28\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"currentColor\">28</text><circle cx=\"253.9\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"253.9\" y=\"28\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"currentColor\">46</text></svg>",
  "secenekler": [
    "21",
    "33",
    "42",
    "50"
  ],
  "dogru": 1,
  "hatalar": [
    "İki ucu da dışarıda bıraktın (t = 10, 11); oysa 28'de dolu yuvarlak var, o dahil.",
    null,
    "Boş yuvarlak olan 46'yı da dahil ettin (t = 9, 10, 11, 12 → 42).",
    "Aralığı genişlettin: t = 8 ve 9 saatlerini de kattın (t = 8…12); 8. saatte pil %52 olur, aralığın dışındadır."
  ],
  "aciklama": "Şekil 28 ≤ pil < 46 aralığını gösterir (28'de dolu, 46'da boş yuvarlak).\nAdım 1: 28 ≤ 100 − 6t < 46 yaz.\nAdım 2: Her taraftan 100 çıkar: −72 ≤ −6t < −54.\nAdım 3: Her tarafı −6'ya böl; yönler değişir: 12 ≥ t > 9.\nAdım 4: Tam saatler 10, 11 ve 12'dir.\nAdım 5: Toplam: 10 + 11 + 12 = 33.\nSağlama: t = 10 için %40, t = 12 için %28 (dahil); t = 9 için %46 (dahil değil).\nSık yapılan hata: Negatife bölünce yönleri değiştirmemek ya da uçları karıştırmak.\nCevap B."
},
{
  "id": "mat-es-301",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir apartmanın yük asansörünün levhasında “Taşınan toplam yük 450 kg'ı aşmamalıdır.” yazıyor. Kurye Mert 85 kg geliyor ve asansöre her biri 25 kg olan x tane koli koyacak. Mert, toplam yükün sınırı aşmaması için bir matematik cümlesi yazmak istiyor.\n**Buna göre Mert hangi eşitsizliği yazmalıdır?**",
  "gorsel": null,
  "secenekler": [
    "85 + 25x ≤ 450",
    "25x ≤ 450",
    "85 + 25x < 450",
    "85 + 25x ≥ 450"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Mert'in kendi ağırlığını (85 kg) toplam yüke katmadın.",
    "“Aşmamalıdır” ifadesi 450 kg'ın kendisine izin verir; < yazarak sınırı dışarıda bıraktın.",
    "Yön ters: “aşmamalı” küçük ya da eşit demektir; ≥ yazdın."
  ],
  "aciklama": "Toplam yük, Mert'in ağırlığı ile kolilerin ağırlığının toplamıdır.\nAdım 1: x koli 25x kg çeker; Mert'le birlikte toplam yük 85 + 25x olur.\nAdım 2: “Aşmamalıdır” demek, toplam yükün 450'den büyük olamayacağını, ama 450'ye eşit olabileceğini söyler. Bu yüzden “küçük ya da eşit” (≤) kullanılır.\nAdım 3: 85 + 25x ≤ 450.\nSağlama: x = 14 için 85 + 350 = 435 ≤ 450 uygun; x = 15 için 85 + 375 = 460 > 450 uygun değil.\nSık yapılan hata: “Aşmamalı”yı < ile karıştırmak ya da Mert'in kendi ağırlığını unutmak.\nCevap A."
},
{
  "id": "mat-es-302",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir oyun uygulamasında bölümlerin zorluk puanı x ile gösterilir ve puanlar yalnızca tam sayıdır. Uygulama, zorluk puanı aşağıdaki sayı doğrusunda gösterilen aralıkta olan bölümleri “orta düzey” olarak etiketliyor.\n**Buna göre orta düzey bölümlerin zorluk puanı kaç farklı çift sayı değeri alabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−5</text><line x1=\"82.3\" y1=\"38\" x2=\"82.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"82.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−4</text><line x1=\"124.5\" y1=\"38\" x2=\"124.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"124.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−3</text><line x1=\"166.8\" y1=\"38\" x2=\"166.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"166.8\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"209.1\" y1=\"38\" x2=\"209.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"209.1\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−1</text><line x1=\"251.4\" y1=\"38\" x2=\"251.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"251.4\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"293.6\" y1=\"38\" x2=\"293.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"293.6\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"335.9\" y1=\"38\" x2=\"335.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"335.9\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"378.2\" y1=\"38\" x2=\"378.2\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"378.2\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"420.5\" y1=\"38\" x2=\"420.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"420.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"462.7\" y1=\"38\" x2=\"462.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"462.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">6</text><line x1=\"124.5\" y1=\"44\" x2=\"420.5\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"124.5\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"420.5\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/></svg>",
  "secenekler": [
    "2",
    "3",
    "4",
    "5"
  ],
  "dogru": 2,
  "hatalar": [
    "Yalnızca pozitif çift sayıları saydın (2, 4); −2 ve 0'ı atladın.",
    "0'ı çift sayı saymadın (−2, 2, 4); oysa 0 çift sayıdır.",
    null,
    "Aralığın dışındaki −4'ü de çift sayı olarak kattın; −3 boş yuvarlak olduğu için −4 çözüm değildir."
  ],
  "aciklama": "Şekildeki aralık −3 < x ≤ 4 demektir: −3'te boş yuvarlak (dahil değil), 4'te dolu yuvarlak (dahil).\nAdım 1: Aralıktaki tam sayılar −2, −1, 0, 1, 2, 3, 4 olur.\nAdım 2: Çift olanlar −2, 0, 2 ve 4'tür (0 da çift sayıdır).\nAdım 3: Say: 4 tane.\nSağlama: Çift sayılar iki birim arayla gider: (4 − (−2)) : 2 + 1 = 4.\nSık yapılan hata: 0'ı çift saymamak ya da boş yuvarlaktaki sayıyı aralığa katmak.\nCevap C."
},
{
  "id": "mat-es-303",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir kargo firması, paket göndermek için 20 TL sabit ücret ve her kilogram için 7 TL almaktadır. Hakan'ın bu ay kargo için ayırdığı bütçe 110 TL'dir ve ödeyeceği ücret bu bütçeyi aşmayacaktır. Paketin ağırlığı tam kilogram olarak ölçülüyor.\n**Buna göre Hakan en fazla kaç kilogramlık paket gönderebilir?**",
  "gorsel": null,
  "secenekler": [
    "16",
    "15",
    "13",
    "12"
  ],
  "dogru": 3,
  "hatalar": [
    "20 TL sabit ücreti hesaba katmadın ve 110 : 7 ≈ 15,7 sonucunu yukarı yuvarladın.",
    "20 TL sabit ücreti hesaba katmadın: 110 : 7 ≈ 15,7.",
    "90 : 7 ≈ 12,86 sonucunu yukarı yuvarladın; 13 kg için 20 + 91 = 111 TL gerekir, bütçe aşılır.",
    null
  ],
  "aciklama": "Adım 1: x kilogramlık paketin ücreti 20 + 7x TL'dir. Bütçe aşılmayacağı için 20 + 7x ≤ 110.\nAdım 2: Her iki taraftan 20 çıkar: 7x ≤ 90.\nAdım 3: 7'ye böl: x ≤ 12,86… Ağırlık tam kilogram olduğundan ve sınırı aşamayacağından sonuç aşağı yuvarlanır: x en fazla 12.\nSağlama: 12 kg için 20 + 84 = 104 TL ≤ 110; 13 kg için 20 + 91 = 111 TL > 110.\nSık yapılan hata: Ondalık sonucu yukarı yuvarlamak ya da sabit ücreti unutmak.\nCevap D."
},
{
  "id": "mat-es-304",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Mina'nın defterinde −11 < −3x + 7 ≤ 16 eşitsizliği yazılı.\n**Buna göre bu eşitsizliği sağlayan x tam sayılarının toplamı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−9",
    "9",
    "12",
    "15"
  ],
  "dogru": 1,
  "hatalar": [
    "−3'e bölmek yerine 3'e bölüp −6 < x ≤ 3 buldun; böylece −5…3 sayılarını topladın.",
    null,
    "Alt sınır x ≥ −3 olduğu hâlde −3'ü dışarıda bıraktın (−2…5).",
    "Üst sınır x < 6 olduğu hâlde 6'yı da dahil ettin (−3…6)."
  ],
  "aciklama": "Çift taraflı eşitsizlikte işlemler üç tarafa birden uygulanır; negatif sayıyla bölünce yön değişir.\nAdım 1: Her tarafa −7 ekle: −18 < −3x ≤ 9.\nAdım 2: Her tarafı −3'e böl, eşitsizlik yönleri değişir: 6 > x ≥ −3. Yani −3 ≤ x < 6.\nAdım 3: Tam sayılar −3, −2, −1, 0, 1, 2, 3, 4, 5'tir. −3'ten 3'e kadar olanların toplamı 0'dır; geriye 4 + 5 = 9 kalır.\nSağlama: x = −3 için −3·(−3) + 7 = 16 ≤ 16 uygun; x = 6 için −18 + 7 = −11, “−11'den büyük” olmadığı için uygun değil.\nSık yapılan hata: Negatif sayıyla bölerken yönü değiştirmemek ya da uçların dahil olup olmadığını karıştırmak.\nCevap B."
},
{
  "id": "mat-es-305",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir doğa kampına katılım koşulu şöyledir: “Katılımcı 13 yaşından büyük olmalı, 17 yaşını geçmemelidir.” Kayıt formunda katılımcının yaşı y ile gösteriliyor.\n**Buna göre kampa katılabilecek yaşları gösteren eşitsizlik hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "13 < y < 17",
    "13 ≤ y < 17",
    "13 ≤ y ≤ 17",
    "13 < y ≤ 17"
  ],
  "dogru": 3,
  "hatalar": [
    "17 yaşındaki katılımcı da kampa katılabilir; “geçmemelidir” 17'yi de kapsar.",
    "Hem 13'ü dahil ettin hem 17'yi dışarıda bıraktın; oysa 13 dahil değil, 17 dahildir.",
    "“13 yaşından büyük” koşulu 13'ü kapsamaz; ≤ yazarak 13'ü dahil ettin.",
    null
  ],
  "aciklama": "Adım 1: “13 yaşından büyük” → y > 13. 13 yaşındakiler dahil değildir.\nAdım 2: “17 yaşını geçmemelidir” → y ≤ 17. 17 yaşındakiler dahildir.\nAdım 3: İki koşulu birleştir: 13 < y ≤ 17.\nSağlama: y = 13 uygun değil, y = 14 uygun, y = 17 uygun, y = 18 uygun değil.\nSık yapılan hata: “Büyük”ü ≥, “geçmemeli”yi < ile karıştırmak.\nCevap D."
},
{
  "id": "mat-es-306",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Zeynep bir eşitsizliği çözüp çözüm kümesini aşağıdaki sayı doğrusunda göstermiş.\n**Buna göre Zeynep hangi eşitsizliği çözmüş olabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"86.5\" y1=\"38\" x2=\"86.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"86.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−1</text><line x1=\"133.0\" y1=\"38\" x2=\"133.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"133.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"179.5\" y1=\"38\" x2=\"179.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"179.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"226.0\" y1=\"38\" x2=\"226.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"226.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"272.5\" y1=\"38\" x2=\"272.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"319.0\" y1=\"38\" x2=\"319.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"319.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"365.5\" y1=\"38\" x2=\"365.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"365.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"412.0\" y1=\"38\" x2=\"412.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"412.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">6</text><line x1=\"458.5\" y1=\"38\" x2=\"458.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"458.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">7</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">8</text><line x1=\"319.0\" y1=\"44\" x2=\"527.0\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"319.0\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3 − x < −1",
    "3 − x > −1",
    "2x − 3 ≥ 5",
    "2x + 3 < 11"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Bu eşitsizliğin çözümü x < 4'tür; çözüm kümesi 4'ün sağında değil solundadır.",
    "Bu eşitsizliğin çözümü x ≥ 4'tür; 4 dahildir, oysa şekilde 4'te boş yuvarlak var.",
    "Bu eşitsizliğin çözümü x < 4'tür; şekilde ok 4'ün sağına gidiyor."
  ],
  "aciklama": "Şekildeki çözüm kümesi x > 4'tür: 4'te boş yuvarlak (dahil değil) ve ok sağa doğru.\nAdım 1: 3 − x < −1 eşitsizliğinde 3'ü karşıya at: −x < −4.\nAdım 2: Her tarafı −1 ile çarp; yön değişir: x > 4. Bu, şekille aynıdır.\nAdım 3: Diğerlerini kontrol et: 3 − x > −1 → x < 4; 2x − 3 ≥ 5 → x ≥ 4; 2x + 3 < 11 → x < 4. Hiçbiri şekle uymaz.\nSık yapılan hata: Negatif sayıyla çarpınca yönü değiştirmeyi unutmak.\nCevap A."
},
{
  "id": "mat-es-307",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Berk'in seçtiği x tam sayısının [[1|3]]'inin 5 eksiği, −2'den büyüktür.\n**Buna göre x'in alabileceği en küçük değer kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "10",
    "9",
    "0",
    "−20"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "x > 9 olduğu için 9'un kendisi çözüm değildir; sınırı dahil ettin.",
    "Her terimi 3 ile çarparken 5'i çarpmayı unuttun: x − 5 > −6 → x > −1.",
    "−2 − 5 = −7 yazıp x > −21 buldun; 5'i yanlış yöne taşıdın."
  ],
  "aciklama": "Adım 1: Koşul [[x|3]] − 5 > −2.\nAdım 2: 5'i karşıya at: [[x|3]] > 3.\nAdım 3: Her iki tarafı 3 ile çarp: x > 9.\nAdım 4: x tam sayı ve 9'dan büyük olmalı; en küçük değer 10'dur.\nSağlama: x = 10 için [[10|3]] − 5 ≈ −1,67 > −2 doğru; x = 9 için 3 − 5 = −2, “−2'den büyük” olmadığı için doğru değil.\nSık yapılan hata: Sınırı (9) çözüm sanmak.\nCevap A."
},
{
  "id": "mat-es-308",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir bilgi yarışmasında 20 soru soruluyor ve boş bırakılan soru yok. Her doğru cevap 5 puan getiriyor, her yanlış cevap ise 2 puan götürüyor. Finale çıkmak için toplam puanın en az 70 olması gerekiyor. Ece'nin x tane doğru cevabı var.\n**Buna göre Ece'nin finale çıkma koşulunu gösteren eşitsizlik hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "5x − 2x ≥ 70",
    "5x − 2(20 − x) > 70",
    "5x + 2(20 − x) ≥ 70",
    "5x − 2(20 − x) ≥ 70"
  ],
  "dogru": 3,
  "hatalar": [
    "Yanlış sayısını 20 − x yerine x aldın; doğru ve yanlış sayıları aynı değil.",
    "“En az 70” demek 70 de yeterli demektir; > yazarak 70'i dışarıda bıraktın.",
    "Yanlış cevaplar puan götürür; sen yanlışların puanını ekledin.",
    null
  ],
  "aciklama": "Adım 1: Ece'nin 20 − x yanlışı vardır.\nAdım 2: Doğrulardan 5x puan gelir, yanlışlardan 2(20 − x) puan gider: toplam puan 5x − 2(20 − x).\nAdım 3: “En az 70” demek 70 ve üzeri demektir: 5x − 2(20 − x) ≥ 70.\nSağlama: Eşitsizlik 7x − 40 ≥ 70, yani x ≥ 15,7 olur; Ece en az 16 doğru yapmalıdır. 16 doğruda 80 − 8 = 72 puan, 15 doğruda 75 − 10 = 65 puan.\nSık yapılan hata: Yanlış sayısını 20 − x yerine x almak.\nCevap D."
},
{
  "id": "mat-es-309",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusu Ege'nin bulduğu çözüm kümesini göstermektedir. Ege bu çözüme, x'in 2 katı için yazılmış çift taraflı bir eşitsizliği çözerek ulaşmıştır.\n**Buna göre Ege hangi eşitsizliği çözmüş olabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−3</text><line x1=\"86.5\" y1=\"38\" x2=\"86.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"86.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"133.0\" y1=\"38\" x2=\"133.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"133.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−1</text><line x1=\"179.5\" y1=\"38\" x2=\"179.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"179.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"226.0\" y1=\"38\" x2=\"226.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"226.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"272.5\" y1=\"38\" x2=\"272.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"319.0\" y1=\"38\" x2=\"319.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"319.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"365.5\" y1=\"38\" x2=\"365.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"365.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"412.0\" y1=\"38\" x2=\"412.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"412.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"458.5\" y1=\"38\" x2=\"458.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"458.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">6</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">7</text><line x1=\"133.0\" y1=\"44\" x2=\"412.0\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"133.0\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><circle cx=\"412.0\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−2 ≤ 2x < 10",
    "−2 < 2x ≤ 10",
    "−1 ≤ 2x < 5",
    "−2 ≤ x < 10"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Çözüm −1 < x ≤ 5 olur; uçların dolu-boş durumu şekle uymuyor.",
    "Şekildeki sayıları 2x için yazdın; x'e geçince −0,5 ≤ x < 2,5 olur.",
    "Bu eşitsizlik doğrudan x için −2 ≤ x < 10 der; 2x'i x sandın."
  ],
  "aciklama": "Şekil −1 ≤ x < 5 aralığını gösterir (−1'de dolu, 5'te boş yuvarlak).\nAdım 1: −2 ≤ 2x < 10 eşitsizliğini her tarafı 2'ye bölerek çöz: −1 ≤ x < 5.\nAdım 2: Bu, şekille birebir aynıdır.\nAdım 3: Diğer şıklar: −2 < 2x ≤ 10 → −1 < x ≤ 5; −1 ≤ 2x < 5 → −0,5 ≤ x < 2,5; −2 ≤ x < 10 doğrudan x aralığıdır. Hiçbiri şekle uymaz.\nSık yapılan hata: Uçları 2'ye bölmeyi unutmak.\nCevap A."
},
{
  "id": "mat-es-310",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir su deposunda 90 litre su vardır. Pompa açılınca depodan her dakika 4 litre su boşalmaktadır. Görevli, depodaki su miktarı 20 litrenin altına inince uyarı lambasının yanmasını istiyor. Pompa kesintisiz çalışıyor ve görevli yalnızca tam dakikalarda ölçüm yapıyor.\n**Buna göre uyarı lambası pompa açıldıktan en erken kaçıncı dakikada yanar?**",
  "gorsel": null,
  "secenekler": [
    "23",
    "22",
    "18",
    "17"
  ],
  "dogru": 2,
  "hatalar": [
    "90 : 4 = 22,5 yaptın ve yukarı yuvarladın; 20 litrelik sınırı hesaba katmadın.",
    "20 litrelik sınırı hesaba katmadın: 90 : 4 = 22,5, aşağı yuvarladın.",
    null,
    "17,5'i aşağı yuvarladın; 17. dakikada depoda 22 litre vardır, bu 20'nin altında değildir."
  ],
  "aciklama": "t dakika sonra depoda 90 − 4t litre su kalır.\nAdım 1: Su 20 litrenin altına inmeli: 90 − 4t < 20.\nAdım 2: 90'ı karşıya at: −4t < −70.\nAdım 3: −4'e böl; yön değişir: t > 17,5.\nAdım 4: Ölçüm tam dakikalarda olduğundan en erken tam dakika 18'dir.\nSağlama: t = 17 için 90 − 68 = 22 (20'nin altında değil); t = 18 için 90 − 72 = 18 (20'nin altında).\nSık yapılan hata: 17,5'i aşağı yuvarlamak ya da yönü değiştirmemek.\nCevap C."
},
{
  "id": "mat-es-311",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Deniz'in x tane bilyesi var. Deniz, “Bilye sayımın 3 katının 4 fazlası, Tolga'nın bilye sayısından azdır.” diyor. Tolga'nın bilye sayısı ise Deniz'in bilye sayısının 2 katının 9 fazlasıdır.\n**Buna göre Deniz'in söylediği cümleyi gösteren eşitsizlik hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "3x + 4 > 2x + 9",
    "3(x + 4) < 2x + 9",
    "3x + 4 < 2(x + 9)",
    "3x + 4 < 2x + 9"
  ],
  "dogru": 3,
  "hatalar": [
    "Yön ters: “azdır” için < gerekir.",
    "“3 katının 4 fazlası” 3x + 4 demektir; sen önce 4'ü ekleyip sonra 3 ile çarptın.",
    "Tolga'nın bilyesi “2 katının 9 fazlası”, yani 2x + 9'dur; 9'u da 2 ile çarptın.",
    null
  ],
  "aciklama": "Adım 1: Deniz'in bilye sayısının 3 katının 4 fazlası: 3x + 4.\nAdım 2: Tolga'nın bilye sayısı: 2x + 9.\nAdım 3: “Azdır” → küçüktür: 3x + 4 < 2x + 9.\nSağlama: Bu eşitsizlikten x < 5 çıkar; x = 4 için 16 < 17 doğru, x = 5 için 19 < 19 yanlıştır.\nSık yapılan hata: “Katının fazlası” ifadesinde işlem sırasını karıştırmak.\nCevap D."
},
{
  "id": "mat-es-312",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusu, bir tünelde izin verilen hız aralığını (km/saat) göstermektedir. Tünel girişindeki ölçüm cihazı, hızları gerçek değerden 2 km/saat fazla göstermektedir. Tünele giren 6 aracın cihazda görünen hızları 52, 66, 82, 92, 93 ve 94 km/saat'tir.\n**Buna göre kaç araç hız kuralına uymaktadır?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">40</text><line x1=\"78.8\" y1=\"38\" x2=\"78.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"117.5\" y1=\"38\" x2=\"117.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"117.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">50</text><line x1=\"156.3\" y1=\"38\" x2=\"156.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"195.0\" y1=\"38\" x2=\"195.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"195.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">60</text><line x1=\"233.8\" y1=\"38\" x2=\"233.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"272.5\" y1=\"38\" x2=\"272.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">70</text><line x1=\"311.3\" y1=\"38\" x2=\"311.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350.0\" y1=\"38\" x2=\"350.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">80</text><line x1=\"388.8\" y1=\"38\" x2=\"388.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"427.5\" y1=\"38\" x2=\"427.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"427.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">90</text><line x1=\"466.3\" y1=\"38\" x2=\"466.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">100</text><line x1=\"117.5\" y1=\"44\" x2=\"427.5\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"117.5\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"117.5\" y=\"28\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"currentColor\">50</text><circle cx=\"427.5\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"427.5\" y=\"28\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"currentColor\">90</text></svg>",
  "secenekler": [
    "5",
    "4",
    "3",
    "2"
  ],
  "dogru": 1,
  "hatalar": [
    "Gerçek hızı 91 km/saat olan aracı da kurala uygun saydın; 90 üst sınırdır, 91 dışarıdadır.",
    null,
    "Cihazın fazla gösterdiği 2 km/saat'i düzeltmeden görünen hızları doğrudan şekille karşılaştırdın (52, 66, 82).",
    "Gerçek hızı 50 ve 90 olan araçları dışarıda bıraktın; iki uçta da dolu yuvarlak var, bu iki hız da kurala uyar."
  ],
  "aciklama": "Şekil 50 ≤ v ≤ 90 aralığını gösterir; iki uçta da dolu yuvarlak olduğu için 50 ve 90 kurala uyar.\nAdım 1: Cihaz hızı 2 fazla gösterdiği için gerçek hız = görünen hız − 2: 50, 64, 80, 90, 91 ve 92 km/saat.\nAdım 2: 50, 64, 80 ve 90 aralığın içindedir, uyar.\nAdım 3: 91 ve 92, 90'dan büyüktür, uymaz.\nAdım 4: Kurala uyan araç sayısı 4'tür.\nSık yapılan hata: Cihazın ölçüm farkını düzeltmeden karşılaştırmak ya da dolu yuvarlak uç değerleri dışarıda bırakmak.\nCevap B."
},
{
  "id": "mat-es-313",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Tuğçe, defterindeki 7 − 3x ≤ 22 eşitsizliğini çözüyor.\n**Buna göre x'in alabileceği en küçük tam sayı değeri kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "5",
    "−4",
    "−5",
    "−9"
  ],
  "dogru": 2,
  "hatalar": [
    "15 : (−3) işlemini 5 buldun; bölmede işaret kaybı yaptın.",
    "x ≥ −5 olduğu hâlde −5'i dışarıda bıraktın; ≤ işareti sınırı da kapsar.",
    null,
    "7'yi yanlış yöne taşıdın: −3x ≤ 29 yazıp x ≥ −9,67… buldun."
  ],
  "aciklama": "Adım 1: 7'yi karşıya at: −3x ≤ 15.\nAdım 2: Her tarafı −3'e böl; negatif sayıyla bölündüğü için yön değişir: x ≥ −5.\nAdım 3: −5 çözüme dahildir; en küçük tam sayı −5'tir.\nSağlama: x = −5 için 7 + 15 = 22 ≤ 22 doğru; x = −6 için 7 + 18 = 25 > 22 yanlış.\nSık yapılan hata: −3'e bölünce yönü ve işareti karıştırmak.\nCevap C."
},
{
  "id": "mat-es-314",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Mert, 2.500 TL'lik bir bisiklet almak istiyor. Kumbarasında 600 TL var ve her hafta 150 TL daha biriktirecek. Hafta sayısını x ile gösteriyor.\n**Buna göre Mert'in bisikleti alabilmesi için en az kaç hafta geçmesi gerekir?**",
  "gorsel": null,
  "secenekler": [
    "12",
    "13",
    "17",
    "21"
  ],
  "dogru": 1,
  "hatalar": [
    "12,67 sonucunu aşağı yuvarladın; 12 hafta sonunda 600 + 1.800 = 2.400 TL olur, yetmez.",
    null,
    "600 TL'yi hesaba katmadın: 2.500 : 150 ≈ 16,7.",
    "600 TL'yi çıkarmak yerine toplama ekledin: (2.500 + 600) : 150 ≈ 20,7."
  ],
  "aciklama": "Adım 1: x hafta sonra Mert'in parası 600 + 150x olur. Bisikleti almak için 600 + 150x ≥ 2.500 gerekir.\nAdım 2: 600'ü karşıya at: 150x ≥ 1.900.\nAdım 3: 150'ye böl: x ≥ 12,67… Hafta tam sayı olduğundan sonuç yukarı yuvarlanır: 13.\nSağlama: 13 hafta sonra 600 + 1.950 = 2.550 TL ≥ 2.500 doğru; 12 hafta sonra 2.400 TL yetmez.\nSık yapılan hata: “En az” sorusunda ondalık sonucu aşağı yuvarlamak.\nCevap B."
},
{
  "id": "mat-es-315",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir uygulamada kullanıcının puanı [[3 − x|2]] ile hesaplanıyor (x: ceza puanı). Puanı en az 5 olan kullanıcılar ödül alıyor.\n**Buna göre ödül alan kullanıcıların ceza puanı x için hangi eşitsizlik doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ −7",
    "x ≥ −7",
    "x ≤ 7",
    "x ≥ 7"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "−x ≥ 7 eşitsizliğini −1 ile çarparken yönü değiştirmedin.",
    "−x ≥ 7 satırında eksiyi görmezden gelip 7 buldun, sonra yönü çevirdin.",
    "−x'i x gibi okudun; hem işaret hem yön hatası yaptın."
  ],
  "aciklama": "Adım 1: Koşul [[3 − x|2]] ≥ 5.\nAdım 2: Her tarafı 2 ile çarp: 3 − x ≥ 10.\nAdım 3: 3'ü karşıya at: −x ≥ 7.\nAdım 4: Her tarafı −1 ile çarp; yön değişir: x ≤ −7.\nSağlama: x = −7 için [[3 + 7|2]] = 5 ≥ 5 doğru; x = −5 için [[8|2]] = 4 < 5 yanlış.\nSık yapılan hata: −x ≥ 7 satırında yönü değiştirmemek.\nCevap A."
},
{
  "id": "mat-es-316",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir spor salonunda aylık üyelik ücreti x TL'dir (x tam sayı). Ayça iki aylık üyelik alırken bir kez 15 TL kayıt ücreti de ödeyecektir. Ayça, toplam ödemesinin 95 TL'den fazla, 175 TL'den fazla olmayacak biçimde bir paket arıyor.\n**Buna göre aylık ücret x kaç farklı tam sayı değeri alabilir?**",
  "gorsel": null,
  "secenekler": [
    "39",
    "40",
    "41",
    "80"
  ],
  "dogru": 1,
  "hatalar": [
    "Her iki ucu da dışarıda bıraktın (41…79 arası 39 sayı); 80 dahildir.",
    null,
    "Her iki ucu da dahil ettin (40…80 arası 41 sayı); 40 dahil değildir.",
    "2'ye bölmeyi unuttun: 160 − 80 = 80 farkını sayı adedi sandın."
  ],
  "aciklama": "Adım 1: İki aylık üyelik ve kayıt ücreti toplam 2x + 15 TL eder. Koşul: 95 < 2x + 15 ≤ 175.\nAdım 2: Her taraftan 15 çıkar: 80 < 2x ≤ 160.\nAdım 3: Her tarafı 2'ye böl: 40 < x ≤ 80.\nAdım 4: 40 dahil değil, 80 dahil. Tam sayılar 41'den 80'e kadardır; sayısı 80 − 40 = 40'tır.\nSağlama: x = 40 için ödeme 95 TL (95'ten fazla değil); x = 41 için 97 TL; x = 80 için 175 TL (geçmiyor).\nSık yapılan hata: Uçların dahil olup olmadığını karıştırıp bir fazla ya da bir eksik saymak.\nCevap B."
},
{
  "id": "mat-es-317",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir kargo şirketi iki hizmet sunuyor. Paket ağırlığı x kg'dır ve yalnızca tam sayıdır. Hizmet A'ya uygun ağırlıklar ile Hizmet B'ye uygun ağırlıklar aşağıdaki sayı doğrularında gösterilmiştir.\n**Buna göre iki hizmete de uygun olan paket ağırlığı kaç farklı değer alabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 182\" role=\"img\"><text x=\"40\" y=\"18\" font-size=\"15\" font-weight=\"700\" fill=\"currentColor\">Hizmet A</text><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"73.2\" y1=\"38\" x2=\"73.2\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"73.2\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"106.4\" y1=\"38\" x2=\"106.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"106.4\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"139.6\" y1=\"38\" x2=\"139.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"139.6\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"172.9\" y1=\"38\" x2=\"172.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"172.9\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"206.1\" y1=\"38\" x2=\"206.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"206.1\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"239.3\" y1=\"38\" x2=\"239.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"239.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">6</text><line x1=\"272.5\" y1=\"38\" x2=\"272.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">7</text><line x1=\"305.7\" y1=\"38\" x2=\"305.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"305.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">8</text><line x1=\"338.9\" y1=\"38\" x2=\"338.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"338.9\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">9</text><line x1=\"372.1\" y1=\"38\" x2=\"372.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"372.1\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">10</text><line x1=\"405.4\" y1=\"38\" x2=\"405.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"405.4\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">11</text><line x1=\"438.6\" y1=\"38\" x2=\"438.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"438.6\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">12</text><line x1=\"471.8\" y1=\"38\" x2=\"471.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"471.8\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">13</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">14</text><line x1=\"106.4\" y1=\"44\" x2=\"338.9\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"106.4\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><circle cx=\"338.9\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"40\" y=\"102\" font-size=\"15\" font-weight=\"700\" fill=\"currentColor\">Hizmet B</text><line x1=\"28\" y1=\"128\" x2=\"527\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,123 537,128 527,133\" fill=\"currentColor\"/><polygon points=\"28,123 18,128 28,133\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"122\" x2=\"40.0\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"73.2\" y1=\"122\" x2=\"73.2\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"73.2\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"106.4\" y1=\"122\" x2=\"106.4\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"106.4\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"139.6\" y1=\"122\" x2=\"139.6\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"139.6\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"172.9\" y1=\"122\" x2=\"172.9\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"172.9\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"206.1\" y1=\"122\" x2=\"206.1\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"206.1\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"239.3\" y1=\"122\" x2=\"239.3\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"239.3\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">6</text><line x1=\"272.5\" y1=\"122\" x2=\"272.5\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">7</text><line x1=\"305.7\" y1=\"122\" x2=\"305.7\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"305.7\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">8</text><line x1=\"338.9\" y1=\"122\" x2=\"338.9\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"338.9\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">9</text><line x1=\"372.1\" y1=\"122\" x2=\"372.1\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"372.1\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">10</text><line x1=\"405.4\" y1=\"122\" x2=\"405.4\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"405.4\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">11</text><line x1=\"438.6\" y1=\"122\" x2=\"438.6\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"438.6\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">12</text><line x1=\"471.8\" y1=\"122\" x2=\"471.8\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"471.8\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">13</text><line x1=\"505.0\" y1=\"122\" x2=\"505.0\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"155\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">14</text><line x1=\"206.1\" y1=\"128\" x2=\"438.6\" y2=\"128\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"206.1\" cy=\"128\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"438.6\" cy=\"128\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/></svg>",
  "secenekler": [
    "11",
    "5",
    "4",
    "3"
  ],
  "dogru": 3,
  "hatalar": [
    "Ortak değerleri değil, iki hizmetin birleşimini saydın (2'den 12'ye 11 sayı).",
    "B'de boş olan 5'i ve A'da boş olan 9'u da ortak saydın (5…9).",
    "Boş yuvarlaklardan yalnızca birini (5'i ya da 9'u) dahil ettin.",
    null
  ],
  "aciklama": "Şekilden: A için 2 ≤ x < 9, B için 5 < x ≤ 12.\nAdım 1: Her iki hizmete de uygun olmak için iki koşulun birlikte sağlanması gerekir: x ≥ 2, x < 9, x > 5 ve x ≤ 12.\nAdım 2: Bunların ortak bölgesi 5 < x < 9'dur (5 ve 9 dahil değil).\nAdım 3: Tam sayılar 6, 7 ve 8 olur; 3 farklı değerdir.\nSağlama: x = 5 B'de boş yuvarlak olduğu için, x = 9 A'da boş yuvarlak olduğu için uygun değildir.\nSık yapılan hata: Ortak bölge yerine birleşimi saymak.\nCevap D."
},
{
  "id": "mat-es-318",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir mum 30 cm boyundadır ve yanmaya başladıktan sonra her saat 2 cm kısalmaktadır; t saat sonra boyu 30 − 2t cm olur. Burak, boyu 12 cm'den uzun ve 20 cm'den kısa olan mumu “ideal” sayıyor ve yalnızca saat başlarında (t tam sayı) ölçüm yapıyor.\n**Buna göre mum ideal boyda olduğu en son tam saat t kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "5",
    "6",
    "8",
    "9"
  ],
  "dogru": 2,
  "hatalar": [
    "5. saatte boy tam 20 cm'dir; 20'den kısa değildir. Bu, aralığın dışında kalan üst sınırdır.",
    "İdeal boyun ilk saatini buldun; sorulan en son saattir.",
    null,
    "9. saatte boy tam 12 cm'dir; 12'den uzun değildir, dolayısıyla ideal değildir."
  ],
  "aciklama": "Adım 1: Koşul 12 < 30 − 2t < 20.\nAdım 2: Her taraftan 30 çıkar: −18 < −2t < −10.\nAdım 3: Her tarafı −2'ye böl; yönler değişir: 9 > t > 5, yani 5 < t < 9.\nAdım 4: Tam saatler 6, 7 ve 8'dir; en son olanı 8'dir.\nSağlama: t = 8 için boy 14 cm (12 ile 20 arasında); t = 9 için boy 12 cm, 12'den uzun değil.\nSık yapılan hata: Negatif sayıyla bölünce yönleri değiştirmeyi unutmak.\nCevap C."
},
{
  "id": "mat-es-319",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir sayı oyununda Deniz, x tam sayısını şöyle tarif ediyor: “x'in 1 eksiğinin üçte biri, −2'den küçük değildir ve 2'den küçüktür.”\n**Buna göre x'in alabileceği tam sayı değerlerinin toplamı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−18",
    "6",
    "11",
    "13"
  ],
  "dogru": 1,
  "hatalar": [
    "x − 1 yerine x + 1 alıp −7 ≤ x < 5 buldun.",
    null,
    "“−2'den küçük değil” ifadesi −2'yi kapsar; −5'i dışarıda bıraktın.",
    "“2'den küçüktür” ifadesi 2'yi kapsamaz; üst sınır olan 7'yi de dahil ettin."
  ],
  "aciklama": "Adım 1: Koşul −2 ≤ [[x − 1|3]] < 2.\nAdım 2: Her tarafı 3 ile çarp: −6 ≤ x − 1 < 6.\nAdım 3: Her tarafa 1 ekle: −5 ≤ x < 7.\nAdım 4: Tam sayılar −5'ten 6'ya kadardır. −5'ten 5'e kadar olanların toplamı 0'dır; geriye 6 kalır.\nSağlama: x = −5 için [[−6|3]] = −2 (−2'den küçük değil, doğru); x = 7 için [[6|3]] = 2 (2'den küçük değil, yanlış).\nSık yapılan hata: “Küçük değil” ve “küçüktür” ifadelerinin uçlara etkisini karıştırmak.\nCevap B."
},
{
  "id": "mat-es-320",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir dalgıç, deniz seviyesinin 4 metre altından başlıyor ve dakikada 3 metre daha dalıyor. Dalgıcın t dakika sonraki konumu −4 − 3t metredir (t tam sayı, t ≥ 0). Bir sualtı kamerası yalnızca aşağıdaki sayı doğrusunda gösterilen konumlarda çekim yapıyor.\n**Buna göre dalgıç kaç farklı tam dakikada kameranın çekim aralığında bulunur?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−24</text><line x1=\"59.4\" y1=\"38\" x2=\"59.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"78.8\" y1=\"38\" x2=\"78.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"78.8\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−22</text><line x1=\"98.1\" y1=\"38\" x2=\"98.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"117.5\" y1=\"38\" x2=\"117.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"117.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−20</text><line x1=\"136.9\" y1=\"38\" x2=\"136.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"156.3\" y1=\"38\" x2=\"156.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"156.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−18</text><line x1=\"175.6\" y1=\"38\" x2=\"175.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"195.0\" y1=\"38\" x2=\"195.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"195.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−16</text><line x1=\"214.4\" y1=\"38\" x2=\"214.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"233.8\" y1=\"38\" x2=\"233.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"233.8\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−14</text><line x1=\"253.1\" y1=\"38\" x2=\"253.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"272.5\" y1=\"38\" x2=\"272.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"272.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−12</text><line x1=\"291.9\" y1=\"38\" x2=\"291.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"311.3\" y1=\"38\" x2=\"311.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"311.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−10</text><line x1=\"330.6\" y1=\"38\" x2=\"330.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"350.0\" y1=\"38\" x2=\"350.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−8</text><line x1=\"369.4\" y1=\"38\" x2=\"369.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"388.8\" y1=\"38\" x2=\"388.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"388.8\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−6</text><line x1=\"408.1\" y1=\"38\" x2=\"408.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"427.5\" y1=\"38\" x2=\"427.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"427.5\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−4</text><line x1=\"446.9\" y1=\"38\" x2=\"446.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"466.3\" y1=\"38\" x2=\"466.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"466.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"485.6\" y1=\"38\" x2=\"485.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"78.8\" y1=\"44\" x2=\"311.3\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"78.8\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"78.8\" y=\"28\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"currentColor\">−22</text><circle cx=\"311.3\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"311.3\" y=\"28\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\" fill=\"currentColor\">−10</text></svg>",
  "secenekler": [
    "7",
    "5",
    "4",
    "3"
  ],
  "dogru": 2,
  "hatalar": [
    "Başlangıçtan (t = 0) itibaren 6'ya kadar bütün dakikaları saydın.",
    "t = 2 için konum −10'dur ve boş yuvarlak olduğu için aralığa dahil değildir; onu da saydın.",
    null,
    "t = 6 için konum −22'dir ve dolu yuvarlak olduğu için aralığa dahildir; onu dışarıda bıraktın."
  ],
  "aciklama": "Şekil −22 ≤ konum < −10 aralığını gösterir (−22'de dolu, −10'da boş yuvarlak).\nAdım 1: −22 ≤ −4 − 3t < −10 yaz.\nAdım 2: Her tarafa 4 ekle: −18 ≤ −3t < −6.\nAdım 3: Her tarafı −3'e böl; yönler değişir: 6 ≥ t > 2.\nAdım 4: Tam dakikalar 3, 4, 5 ve 6'dır; 4 farklı değer.\nSağlama: t = 6 için −22 (dahil), t = 2 için −10 (dahil değil).\nSık yapılan hata: Negatif sayıya bölünce yönleri değiştirmemek ya da uç noktaları karıştırmak.\nCevap C."
},
{
  "id": "mat-es-321",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Ege'nin matematik dersinde ilk yazılısı 64'tür. Dönem sonunda iki yazılısının ortalaması 70'in üzerinde olursa takdir listesine girecek. Ege'nin ikinci yazılıdan alacağı puan x'tir (x tam sayı ve en çok 100).\n**Buna göre Ege'nin takdir listesine girebilmesi için ikinci yazılıdan en az kaç puan alması gerekir?**",
  "gorsel": null,
  "secenekler": [
    "70",
    "76",
    "77",
    "78"
  ],
  "dogru": 2,
  "hatalar": [
    "Ortalama 70 olacak diye ikinci yazılının da 70 olması gerektiğini sandın.",
    "“70'in üzerinde” ifadesi 70'in kendisini kapsamaz; x = 76 için ortalama tam 70 olur, yetmez.",
    null,
    "Ortalamanın tam sayı olması gerektiğini sanıp en az 71 aldın: x + 64 ≥ 142 → x = 78."
  ],
  "aciklama": "Adım 1: İki notun ortalaması [[x + 64|2]]'dir. Koşul [[x + 64|2]] > 70.\nAdım 2: Her tarafı 2 ile çarp: x + 64 > 140.\nAdım 3: 64'ü karşıya at: x > 76.\nAdım 4: x tam sayı ve 76'dan büyük olmalı; en az 77.\nSağlama: x = 77 için ortalama [[141|2]] = 70,5 > 70 doğru; x = 76 için ortalama 70, “üzerinde” değil.\nSık yapılan hata: “Üzerinde”yi ≥ gibi okuyup sınırı çözüm saymak.\nCevap C."
},
{
  "id": "mat-es-322",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir alışveriş merkezinin katları −4'ten 4'e kadar numaralandırılmıştır (−4, −3, …, 4). Mehmet çıkacağı katın numarasına x diyor ve şu ipucunu veriyor: “x'in 3 katının 2 eksiği, −14'ten büyüktür ve 10'dan küçüktür.”\n**Buna göre Mehmet aşağıdaki katlardan hangisinde __olamaz__?**",
  "gorsel": null,
  "secenekler": [
    "3",
    "0",
    "−3",
    "−4"
  ],
  "dogru": 3,
  "hatalar": [
    "3 · 3 − 2 = 7 çıkar ve −14 < 7 < 10 sağlanır; 3. kat olabilir. Üst sınırı yanlış yorumlamışsın.",
    "0 için 3 · 0 − 2 = −2 çıkar ve −14 < −2 < 10 sağlanır; 0. kat olabilir.",
    "−3 için 3 · (−3) − 2 = −11 çıkar ve −14 < −11 < 10 sağlanır; −3. kat olabilir. Alt sınırı yanlış yorumlamışsın.",
    null
  ],
  "aciklama": "Adım 1: Koşul −14 < 3x − 2 < 10.\nAdım 2: Her tarafa 2 ekle: −12 < 3x < 12.\nAdım 3: Her tarafı 3'e böl: −4 < x < 4. Uçlar dahil değil.\nAdım 4: Yani x ancak −3, −2, …, 3 olabilir. −4 aralığın dışındadır, olamaz.\nSağlama: x = −4 için 3 · (−4) − 2 = −14; “−14'ten büyük” olmadığı için uygun değil. x = 3 için 7, uygun.\nSık yapılan hata: Boş uçları (−4 ve 4) çözüme dahil saymak.\nCevap D."
},
{
  "id": "mat-es-323",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir pastane, tanesini 18 TL'ye sattığı pastadan günde x adet satıyor. Günlük sabit gideri 540 TL'dir. Pastane sahibi, günlük kârının (kâr = gelir − gider) en az 900 TL olmasını istiyor.\n**Buna göre bir günde en az kaç pasta satılmalıdır?**",
  "gorsel": null,
  "secenekler": [
    "20",
    "50",
    "80",
    "81"
  ],
  "dogru": 2,
  "hatalar": [
    "Gideri kâra eklemek yerine çıkardın: (900 − 540) : 18 = 20.",
    "Sabit gideri hesaba katmadın: 900 : 18 = 50.",
    null,
    "“En az 900 TL” demek 900 TL de yeterlidir; > yazarak 81 buldun."
  ],
  "aciklama": "Adım 1: Gelir 18x, gider 540; kâr 18x − 540 TL.\nAdım 2: “En az 900” → 18x − 540 ≥ 900.\nAdım 3: 540'ı karşıya at: 18x ≥ 1.440.\nAdım 4: 18'e böl: x ≥ 80.\nSağlama: x = 80 için kâr 1.440 − 540 = 900 TL (yeterli); x = 79 için 1.422 − 540 = 882 TL (yetmez).\nSık yapılan hata: “En az” ifadesinde sınır değeri çözüm dışı bırakmak.\nCevap C."
},
{
  "id": "mat-es-324",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Öğretmen tahtaya −4 < 2x + a ≤ 10 çift taraflı eşitsizliğini yazıyor (a bir tam sayı) ve bu eşitsizliğin çözüm kümesini aşağıdaki sayı doğrusunda gösteriyor.\n**Buna göre a kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 98\" role=\"img\"><line x1=\"28\" y1=\"44\" x2=\"527\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"527,39 537,44 527,49\" fill=\"currentColor\"/><polygon points=\"28,39 18,44 28,49\" fill=\"currentColor\"/><line x1=\"40.0\" y1=\"38\" x2=\"40.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−4</text><line x1=\"91.7\" y1=\"38\" x2=\"91.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"91.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−3</text><line x1=\"143.3\" y1=\"38\" x2=\"143.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"143.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−2</text><line x1=\"195.0\" y1=\"38\" x2=\"195.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"195.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">−1</text><line x1=\"246.7\" y1=\"38\" x2=\"246.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"246.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">0</text><line x1=\"298.3\" y1=\"38\" x2=\"298.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"298.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">1</text><line x1=\"350.0\" y1=\"38\" x2=\"350.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">2</text><line x1=\"401.7\" y1=\"38\" x2=\"401.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"401.7\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">3</text><line x1=\"453.3\" y1=\"38\" x2=\"453.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"453.3\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4</text><line x1=\"505.0\" y1=\"38\" x2=\"505.0\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"505.0\" y=\"71\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">5</text><line x1=\"91.7\" y1=\"44\" x2=\"453.3\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><circle cx=\"91.7\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"453.3\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/></svg>",
  "secenekler": [
    "6",
    "2",
    "−1",
    "−2"
  ],
  "dogru": 1,
  "hatalar": [
    "Yalnızca sağ uçta 2'ye bölmeyi unuttun: 10 − a = 4 yazıp a = 6 buldun.",
    null,
    "Yalnızca sol uçta 2'ye bölmeyi unuttun: −4 − a = −3 yazıp a = −1 buldun.",
    "a'yı karşıya atarken işaretini değiştirmedin: [[−4 + a|2]] = −3 yazıp a = −2 buldun."
  ],
  "aciklama": "Şekil −3 < x ≤ 4 çözüm kümesini gösterir (−3 dahil değil, 4 dahil).\nAdım 1: Her taraftan a çıkar: −4 − a < 2x ≤ 10 − a.\nAdım 2: Her tarafı 2'ye böl: [[−4 − a|2]] < x ≤ [[10 − a|2]].\nAdım 3: Sol uç −3 olmalı: −4 − a = −6, yani a = 2. Sağ uç 4 olmalı: 10 − a = 8, yani a = 2. İki uç da aynı değeri verir.\nSağlama: a = 2 için −4 < 2x + 2 ≤ 10 → −6 < 2x ≤ 8 → −3 < x ≤ 4; şekille aynı.\nSık yapılan hata: Üç parçalı eşitsizlikte bir tarafı 2'ye bölüp diğerini bölmemek ya da a'yı karşıya atarken işaretini değiştirmemek.\nCevap B."
},
{
  "id": "mat-es-325",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Eda 150 sayfalık bir kitabı her gün 12 sayfa okuyarak bitirmeyi planlıyor; t gün sonra kalan sayfa sayısı 150 − 12t olur (t tam sayı). Eda, kalan sayfa sayısı 30'dan fazla ve en çok 102 olduğu günlerde kitap kulübüne okuma notu gönderiyor.\n**Buna göre Eda en çok kaçıncı gün sonunda not gönderebilir?**",
  "gorsel": null,
  "secenekler": [
    "4",
    "9",
    "10",
    "12"
  ],
  "dogru": 1,
  "hatalar": [
    "Alt sınırı (en erken günü) en büyük değer sandın: 4. günden itibaren not gönderilir.",
    null,
    "Kalan sayfa 30 olan günü de saydın; “30'dan fazla” ifadesi 30'u kapsamaz.",
    "30 sayfalık alt sınırı hesaba katmadın; kalan sayfa 0'dan fazla olsun diye 150 : 12 = 12,5 sonucunu aşağı yuvarladın."
  ],
  "aciklama": "Adım 1: Koşul 30 < 150 − 12t ≤ 102.\nAdım 2: Her taraftan 150 çıkar: −120 < −12t ≤ −48.\nAdım 3: Her tarafı −12'ye böl; yönler değişir: 10 > t ≥ 4, yani 4 ≤ t < 10.\nAdım 4: t tam sayı ve 10 dahil olmadığı için en büyük değer 9'dur.\nSağlama: t = 9 için 150 − 108 = 42, 30'dan fazla doğru; t = 10 için kalan 30, “30'dan fazla” değil. t = 4 için kalan 102, “en çok 102” doğru.\nSık yapılan hata: Negatife bölünce yönleri değiştirmemek ya da boş ucu (10) dahil saymak.\nCevap B."
}
);
