// Matematik — Eşitsizlikler (M.8.2.3): Kademe 2 (Pekiştirme) yedeği, sıra 26-75
// 50 soru: 26 düzey 2 + 24 düzey 3. En çok iki işlemli çözüm; çift taraflı eşitsizlik yalnızca gösterim ve okuma içindir. Sayı doğrusu şekilleri ölçeklidir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["esitsizlikler"] = window.LGS_BANK["esitsizlikler"] || []).push(
{
  "id": "mat-es-226",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir derin dondurucunun kullanım kılavuzunda şu uyarı yazılıdır: 'İç sıcaklık −18 °C'den __yüksek olmamalıdır__.'\n**İç sıcaklığı s °C olan bir dondurucunun bu kurala uyması aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "s ≤ −18",
    "s ≥ −18",
    "s < −18",
    "s ≤ 18"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: s ≥ −18, sıcaklığın −18 °C ve üstü olması demektir; kılavuz bunu yasaklıyor.",
    "Eşitliği dışarıda bıraktın: tam −18 °C iç sıcaklığı da kurala uygundur.",
    "Eksi işaretini kaybettin: sınır 18 değil, −18'dir."
  ],
  "aciklama": "'Yüksek olmamalı' bir üst sınır koyar: sınırın kendisi serbest, sınırdan büyük değerler yasaktır.\nAdım 1: Sınır değeri −18 °C.\nAdım 2: −18 °C serbest olduğu için eşitlik var; büyük değerler yasak olduğu için yön 'küçük': s ≤ −18.\nSağlama: −20 °C uygun, −10 °C uygun değil; −10 > −18 olduğundan ≤ kuralı bunu eler.\nCevap A."
},
{
  "id": "mat-es-227",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir kütüphane, bir üyenin aynı anda en fazla 5 kitap ödünç almasına izin veriyor. Ödünç alınan kitap sayısı k ile gösterildiğinde bu kural k ≤ 5 olarak yazılıyor ve sayı doğrusunda gösterilecek.\n**k ≤ 5 eşitsizliğinin sayı doğrusundaki gösterimi aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "5'te boş yuvarlak, ok sağa",
    "5'te dolu yuvarlak, ok sağa",
    "5'te boş yuvarlak, ok sola",
    "5'te dolu yuvarlak, ok sola"
  ],
  "dogru": 3,
  "hatalar": [
    "Hem yuvarlak hem yön yanlış: 5 kitap da alınabildiği için yuvarlak dolu, değerler 5'ten küçük olduğu için ok sola olmalıdır.",
    "Yönü ters aldın: ≤ işareti küçük değerleri gösterir, ok sola gider.",
    "Boş yuvarlak 5'in dahil olmadığını gösterir; ≤ işaretinde 5 dahildir, yuvarlak dolu olmalıdır.",
    null
  ],
  "aciklama": "Sayı doğrusunda dolu yuvarlak sınırın dahil olduğunu, boş yuvarlak dahil olmadığını gösterir; ok ise değerlerin hangi yöne gittiğini söyler.\nAdım 1: ≤ işareti sınırı kapsar: 5'te dolu yuvarlak.\nAdım 2: Değerler 5'ten küçük ya da 5'e eşit: ok sola.\nSağlama: 5 ve 3 gösterimin içinde, 6 dışında kalır; kural da 5 ve 3 kitaba izin verir, 6 kitaba vermez.\nCevap D."
},
{
  "id": "mat-es-228",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**7 − 2x ≥ 1 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ −3",
    "x ≤ 3",
    "x ≥ 3",
    "x ≤ −4"
  ],
  "dogru": 1,
  "hatalar": [
    "İşareti kaybettin: −6 ÷ (−2) = 3 olur, −3 değil.",
    null,
    "Negatif sayıya bölünce yönü çevirmedin: −2x ≥ −6 için x ≤ 3 olur.",
    "7'yi karşıya geçirirken işaretini değiştirmedin: 1 + 7 = 8 buldun, oysa 1 − 7 = −6."
  ],
  "aciklama": "Önce sabit terim karşıya geçer, sonra negatif katsayıya bölünürken yön çevrilir.\nAdım 1: İki taraftan 7 çıkar: −2x ≥ 1 − 7 = −6.\nAdım 2: İki tarafı −2'ye böl ve yönü çevir: x ≤ 3.\nSağlama: x = 3 için 7 − 6 = 1 ≥ 1 doğru; x = 4 için 7 − 8 = −1 ≥ 1 yanlış.\nCevap B."
},
{
  "id": "mat-es-229",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Naz'ın 500 TL'si var. Tanesi 90 TL olan tiyatro biletlerinden x tane alacak ve ayrıca 35 TL'lik bir program kitapçığı satın alacak. Naz, toplam harcamasının 500 TL'yi __aşmamasını__ istiyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "90x + 35 ≤ 500",
    "90x + 35 ≥ 500",
    "90x + 35 < 500",
    "125x ≤ 500"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: ≥ işareti harcamanın 500 TL'ye eşit ya da 500 TL'den fazla olması demektir.",
    "Eşitliği dışarıda bıraktın: tam 500 TL harcamak bütçeyi aşmak değildir.",
    "Kitapçığın 35 TL'sini her bilete ekledin: kitapçık bir kez alınır, biletle birlikte çoğalmaz."
  ],
  "aciklama": "Toplam harcama = bilet bedeli + kitapçık bedeli. 'Aşmamalı' üst sınırdır ve eşitliği kapsar.\nAdım 1: x bilet 90x TL eder; kitapçık 35 TL.\nAdım 2: Toplam 90x + 35 olur ve 500 TL'yi aşmayacağından 90x + 35 ≤ 500.\nSağlama: x = 5 için 450 + 35 = 485 uygun; x = 6 için 575 uygun değil.\nCevap A."
},
{
  "id": "mat-es-230",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir banka, hesap bakiyesi (bin TL cinsinden) b olan müşterilere, aşağıdaki sayı doğrusunda boyalı bölgede kalan değerler için kampanya sunuyor. Beş müşterinin bakiyeleri −3, −1, 0, 2 ve 4'tür.\n**Bu müşterilerden kaçı kampanyadan yararlanır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"b için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"184\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"184\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2",
    "3",
    "4",
    "5"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönü ters okudun: ok sağa gittiği için −1'den büyük değerler boyalıdır; sen −3 ve −1'i sayarak 2 buldun.",
    "−1'deki yuvarlak dolu olduğu için −1 de kampanya kapsamındadır; onu saymadın.",
    null,
    "Hiçbir bakiyeyi elemedin: −3, −1'in solunda kaldığı için boyalı bölgede değildir."
  ],
  "aciklama": "Dolu yuvarlak sınırın dahil olduğunu gösterir; ok sağa gidiyorsa değerler büyür.\nAdım 1: Gösterim b ≥ −1 eşitsizliğidir.\nAdım 2: Bakiyeleri tek tek kontrol et: −3 (hayır), −1 (evet, dolu yuvarlak), 0 (evet), 2 (evet), 4 (evet).\nAdım 3: 4 müşteri yararlanır.\nSık yapılan hata: Sınırdaki sayıyı (−1) saymamak.\nCevap C."
},
{
  "id": "mat-es-231",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**−3x − 4 < 11 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < −5",
    "x > −[[7|3]]",
    "x > 5",
    "x > −5"
  ],
  "dogru": 3,
  "hatalar": [
    "Negatif sayıya bölünce yönü çevirmedin: −3x < 15 için x > −5 olur.",
    "4'ü karşıya geçirirken çıkardın: 11 − 4 = 7. Oysa 4 eklenir: 11 + 4 = 15.",
    "İşareti kaybettin: 15 ÷ (−3) = −5 olur, 5 değil.",
    null
  ],
  "aciklama": "Adım 1: İki tarafa 4 ekle: −3x < 15.\nAdım 2: İki tarafı −3'e böl ve yönü çevir: x > −5.\nSağlama: x = 0 için −4 < 11 doğru; x = −6 için 18 − 4 = 14 < 11 yanlış.\nCevap D."
},
{
  "id": "mat-es-232",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir dikdörtgen biçimindeki panonun kısa kenarı x cm, uzun kenarı ise kısa kenardan 3 cm fazladır. Panonun çevresinin __en az__ 40 cm olması isteniyor.\n**Bu koşul aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "4x + 6 ≥ 40",
    "4x + 6 ≤ 40",
    "4x + 3 ≥ 40",
    "2x + 3 ≥ 40"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: 'en az 40 cm' alt sınırdır; ≤ işareti 'en fazla' demektir.",
    "Çevrede 3 cm'lik farkı bir kez ekledin: iki uzun kenar da 3 cm fazla olduğundan fark 6 cm eder.",
    "Yarım çevreyi yazdın: x + (x + 3) iki kenarın toplamıdır; çevre bunun 2 katıdır."
  ],
  "aciklama": "Dikdörtgenin çevresi, bütün kenar uzunluklarının toplamıdır: 2 · (kısa kenar + uzun kenar).\nAdım 1: Uzun kenar x + 3 cm.\nAdım 2: Çevre = 2 · (x + x + 3) = 4x + 6.\nAdım 3: Çevre en az 40 cm olacağından 4x + 6 ≥ 40.\nSağlama: x = 9 için çevre 42 cm, uygun; x = 8 için 38 cm, uygun değil.\nCevap A."
},
{
  "id": "mat-es-233",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir basketbol maçında A takımının skor farkı (A'nın sayısı − rakibin sayısı), maç boyunca aşağıdaki sayı doğrusunda boyalı aralıkta kalmıştır. Skor farkı her zaman tam sayıdır.\n**Bu aralıkta skor farkı kaç farklı değer alabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"skor farkı için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"136\" y1=\"46\" x2=\"376\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"136\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"376\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 3,
  "hatalar": [
    "Yalnızca −3, −2, −1 değerlerini saydın; 0, 1 ve 2 de aralıktadır.",
    "İki uçtaki dolu yuvarlakları boş sandın: −2, −1, 0, 1 saydın; oysa −3 ve 2 de dahildir.",
    "Uçlardan birini saymadın: iki ucun da yuvarlağı doludur, aralıkta −3, −2, −1, 0, 1, 2 olmak üzere 6 değer vardır.",
    null
  ],
  "aciklama": "İki ucu da dolu yuvarlak olan aralıkta iki uç da aralığa dahildir.\nAdım 1: Aralık −3 ≤ d ≤ 2.\nAdım 2: Tam sayıları yaz: −3, −2, −1, 0, 1, 2.\nAdım 3: Say: 6 değer.\nSağlama: İki ucu da dahil olan aralıkta değer sayısı büyük − küçük + 1 = 2 − (−3) + 1 = 6.\nCevap D."
},
{
  "id": "mat-es-234",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Kerem, −5x < 20 eşitsizliğini çözerken şu adımları yazmıştır:\nAdım 1: İki tarafı −5'e böldü.\nAdım 2: x < −4 buldu.\n**Kerem'in çözümünde aşağıdaki hatalardan hangisi vardır?**",
  "gorsel": null,
  "secenekler": [
    "Pozitif sayıya böldüğü hâlde yönü çevirmiştir.",
    "Negatif sayıya böldüğü hâlde yönü çevirmemiştir.",
    "20 ÷ (−5) işleminin sonucunu −4 yerine 4 bulmuştur.",
    "Eşitsizlik işaretini eşitlik işaretine dönüştürmüştür."
  ],
  "dogru": 1,
  "hatalar": [
    "Kerem negatif sayıya bölmüştür, pozitif sayıya değil; ayrıca yönü hiç çevirmemiştir. Bu hata onda yok.",
    null,
    "20 ÷ (−5) = −4 işlemi doğrudur; Kerem sayıyı doğru bulmuştur, hata orada değildir.",
    "Kerem < işaretini korumuştur; eşitlik işaretine dönüştürmemiştir, hata orada değildir."
  ],
  "aciklama": "Eşitsizliğin iki tarafı negatif bir sayıya bölünürse (ya da çarpılırsa) eşitsizliğin yönü değişir.\nAdım 1: İki tarafı −5'e böl: 20 ÷ (−5) = −4.\nAdım 2: Negatif sayıya bölündüğü için < işareti > olur: x > −4.\nKerem yönü çevirmediği için x < −4 yazmıştır.\nSağlama: x = 0 için 0 < 20 doğru ve 0 > −4 doğru; Kerem'in sonucunda (x < −4) ise 0 yoktur.\nCevap B."
},
{
  "id": "mat-es-235",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir telefon operatörü iki internet tarifesi sunuyor. A tarifesinde aylık 20 TL sabit ücret ve her GB için 3 TL ödenir. B tarifesinde sabit ücret yoktur ve her GB için 5 TL ödenir. Bir ayda x GB kullanan bir müşteri için A tarifesinin B tarifesinden __daha ucuz__ olması isteniyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "20 + 5x < 3x",
    "20 + 3x < 8x",
    "23x < 5x",
    "20 + 3x < 5x"
  ],
  "dogru": 3,
  "hatalar": [
    "Tarifeleri karıştırdın: sabit ücret ve 3 TL A tarifesine aittir; bu eşitsizlik sabit ücreti 5 TL'lik tarifeye yazar ve 3 TL'lik tarifeyi ücretsiz sayar.",
    "İki tarifenin ücretini topladın: sağ taraf B'nin ücreti olan 5x olmalı, 8x değil.",
    "Sabit ücreti de GB ile çarptın: 23x, sabit ücretin her GB'de yenilendiğini varsayar.",
    null
  ],
  "aciklama": "Bir tarifenin diğerinden daha ucuz olması, ücretinin daha küçük olması demektir.\nAdım 1: A tarifesinin ücreti 20 + 3x.\nAdım 2: B tarifesinin ücreti 5x.\nAdım 3: A daha ucuz olacağından 20 + 3x < 5x.\nSağlama: x = 12 için A: 56 TL, B: 60 TL; A daha ucuz. x = 5 için A: 35 TL, B: 25 TL; A daha pahalı.\nCevap D."
},
{
  "id": "mat-es-236",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir akvaryumdaki su sıcaklığı t °C için 2 < t ≤ 9 koşulu belirlenmiş ve bu koşul sayı doğrusunda gösterilecektir.\n**2 < t ≤ 9 eşitsizliğinin sayı doğrusundaki gösterimi aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "2'de boş, 9'da dolu yuvarlak; arası boyalı",
    "2'de dolu, 9'da boş yuvarlak; arası boyalı",
    "2'de dolu, 9'da dolu yuvarlak; arası boyalı",
    "2'de boş, 9'da boş yuvarlak; arası boyalı"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yuvarlakları ters okudun: 2'de boş (2 dahil değil), 9'da dolu (9 dahil) olmalıdır.",
    "Sol uçtaki boş yuvarlağı dolu sandın: 2 < t olduğu için 2 dahil değildir.",
    "Sağ uçtaki dolu yuvarlağı boş sandın: t ≤ 9 olduğu için 9 dahildir."
  ],
  "aciklama": "Çift taraflı eşitsizlikte her uç ayrı okunur: < işareti boş yuvarlak, ≤ işareti dolu yuvarlak demektir.\nAdım 1: Sol uç: 2 < t, yani 2 dahil değil: boş yuvarlak.\nAdım 2: Sağ uç: t ≤ 9, yani 9 dahil: dolu yuvarlak.\nAdım 3: İki ucun arası boyanır.\nSağlama: t = 9 gösterimin içindedir, t = 2 değildir.\nCevap A."
},
{
  "id": "mat-es-237",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**[[−x|3]] + 1 > 3 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < 6",
    "x < −6",
    "x > −6",
    "x > 6"
  ],
  "dogru": 1,
  "hatalar": [
    "İşareti kaybettin: [[−x|3]] > 2 iken iki tarafı −3 ile çarpınca x tarafında −6 elde edilir, 6 değil.",
    null,
    "Negatifle çarpınca yönü çevirmedin: iki taraf −3 ile çarpılırken > işareti < olur.",
    "Hem işareti kaybettin hem yönü çevirmedin."
  ],
  "aciklama": "Adım 1: İki taraftan 1 çıkar: [[−x|3]] > 2.\nAdım 2: İki tarafı −3 ile çarp ve yönü çevir: x < −6.\nSağlama: x = −9 için [[9|3]] + 1 = 4 > 3 doğru; x = −6 için 2 + 1 = 3 > 3 yanlış.\nCevap B."
},
{
  "id": "mat-es-238",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Berk'in b tane defteri vardır. Tuna'nın defter sayısı, Berk'in defter sayısının 2 katından 5 eksiktir. Tuna'nın __en az__ 20 defteri olduğu biliniyor.\n**Bu bilgi aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "2b − 5 ≤ 20",
    "2b + 5 ≥ 20",
    "2(b − 5) ≥ 20",
    "2b − 5 ≥ 20"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters aldın: 'en az 20' alt sınırdır; ≤ işareti 'en fazla' demektir.",
    "'5 eksik' ifadesini '5 fazla' diye okudun: Tuna'nın defteri 2b + 5 değil, 2b − 5'tir.",
    "5'i çıkarmayı b'ye uyguladın: 2(b − 5), '2 katından 5 eksik' değil, '5 eksiğinin 2 katı' demektir.",
    null
  ],
  "aciklama": "'Bir sayının 2 katından 5 eksik' ifadesi önce 2 ile çarpmayı, sonra 5 çıkarmayı anlatır: 2b − 5.\nAdım 1: Tuna'nın defteri 2b − 5.\nAdım 2: En az 20 olacağından 2b − 5 ≥ 20.\nSağlama: b = 13 için Tuna'nın 21 defteri olur, uygun; b = 12 için 19 defteri olur, uygun değil.\nCevap D."
},
{
  "id": "mat-es-239",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir jeoloji öğrencisi, deniz seviyesine göre yüksekliği h metre olan (h tam sayı) ölçüm noktalarını aşağıdaki sayı doğrusunda boyalı bölge olarak göstermiştir.\n**Bu bölgedeki en büyük tam sayı değeri kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"h için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"100\" y1=\"46\" x2=\"332\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"100\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"340\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−5",
    "−3",
    "−2",
    "−1"
  ],
  "dogru": 2,
  "hatalar": [
    "−5, bölgenin en küçük tam sayısıdır; sorulan en büyüğüdür.",
    "Bir sayı geride kaldın: −2 de bölgededir ve −3'ten büyüktür.",
    null,
    "Boş yuvarlağı dolu sandın: −1 bölgeye dahil değildir."
  ],
  "aciklama": "Negatif sayılarda sayı doğrusunda sağa gittikçe değer büyür: −3 < −2 < −1. Boş yuvarlak, o sayının dahil olmadığını gösterir.\nAdım 1: Gösterim −5 ≤ h < −1 eşitsizliğidir.\nAdım 2: Tam sayılar: −5, −4, −3, −2.\nAdım 3: En büyüğü −2'dir; −1 dahil değildir.\nSık yapılan hata: Negatif sayılarda büyüklüğü karıştırmak (−5'i −2'den büyük sanmak).\nCevap C."
},
{
  "id": "mat-es-240",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**−2x + 1 > −5 eşitsizliğini __sağlamayan__ sayı aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "−1",
    "0",
    "2",
    "3"
  ],
  "dogru": 3,
  "hatalar": [
    "−1 eşitsizliği sağlar: −2 · (−1) + 1 = 3 > −5 doğrudur.",
    "0 eşitsizliği sağlar: 1 > −5 doğrudur.",
    "2 eşitsizliği sağlar: −4 + 1 = −3 > −5 doğrudur.",
    null
  ],
  "aciklama": "Bir sayının eşitsizliği sağlayıp sağlamadığını anlamak için önce eşitsizliği çözebilir ya da sayıyı yerine koyabilirsin.\nAdım 1: İki taraftan 1 çıkar: −2x > −6.\nAdım 2: −2'ye böl ve yönü çevir: x < 3.\nAdım 3: x < 3 olduğundan 3 çözüm değildir (eşitlik yok); −1, 0 ve 2 çözümdür.\nSağlama: x = 3 için −6 + 1 = −5 > −5 yanlıştır.\nCevap D."
},
{
  "id": "mat-es-241",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Defne'nin kumbarasında x TL vardır. Defne bu paranın yarısını harcıyor, sonra kumbaraya 3 TL ekliyor. Bu işlemlerin sonunda kumbarasındaki para başlangıçtakinden __az__ oluyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "[[x|2]] + 3 < x",
    "[[x + 3|2]] < x",
    "[[x|2]] + 3 > x",
    "[[x|2]] − 3 < x"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "İşlem sırasını karıştırdın: önce yarısı harcanır, sonra 3 TL eklenir; [[x + 3|2]] ise önce eklemek, sonra yarısını harcamaktır.",
    "Yönü ters aldın: > işareti son paranın başlangıçtakinden fazla olmasını gösterir.",
    "Kumbaraya 3 TL eklemek yerine 3 TL çıkardın."
  ],
  "aciklama": "İşlemleri sırayla yaz: yarısı harcanınca kalan [[x|2]] olur, 3 TL eklenince [[x|2]] + 3 olur.\nAdım 1: Son durumdaki para [[x|2]] + 3.\nAdım 2: Bu para başlangıçtakinden az olduğundan [[x|2]] + 3 < x.\nSağlama: x = 10 için 5 + 3 = 8 < 10 doğru; x = 4 için 2 + 3 = 5 < 4 yanlış.\nCevap A."
},
{
  "id": "mat-es-242",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir tren hattında istasyonlar, merkez istasyondan batıya doğru negatif, doğuya doğru pozitif tam sayılarla numaralandırılmıştır (merkez istasyon 0'dır). Aşağıdaki sayı doğrusunda, bakım yapılan istasyonların bulunduğu aralık boyanmıştır.\n**Bu aralıkta numarası çift sayı olan kaç istasyon vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"s için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"80\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"120\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"320\" y1=\"40\" x2=\"320\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"320\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"440\" y1=\"40\" x2=\"440\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"440\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"480\" y1=\"40\" x2=\"480\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"480\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"128\" y1=\"46\" x2=\"520\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"120\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"520\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 2,
  "hatalar": [
    "Yalnızca pozitif çift numaralıları (2, 4, 6) saydın; −2 ve 0 da çifttir.",
    "0'ı saymadın: 0 çift sayıdır; aralıktaki çift sayılar −2, 0, 2, 4, 6'dır.",
    null,
    "Boş yuvarlağı dolu sandın: −4 aralığa dahil değildir."
  ],
  "aciklama": "Sıfır çift sayıdır; negatif çift sayılar da (−2, −4, …) çifttir. Boş uçtaki sayı aralığa dahil değildir.\nAdım 1: Gösterim −4 < s ≤ 6 eşitsizliğidir.\nAdım 2: Tam sayılar: −3, −2, −1, 0, 1, 2, 3, 4, 5, 6.\nAdım 3: Çift olanlar: −2, 0, 2, 4, 6. Sayısı 5.\nSık yapılan hata: 0'ı ve negatif çift sayıları saymamak.\nCevap C."
},
{
  "id": "mat-es-243",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**2x − 5 < 9 eşitsizliğini sağlayan kaç tane doğal sayı vardır?**",
  "gorsel": null,
  "secenekler": [
    "6",
    "7",
    "8",
    "14"
  ],
  "dogru": 1,
  "hatalar": [
    "0'ı saymadın: 0 da bir doğal sayıdır ve eşitsizliği sağlar (−5 < 9).",
    null,
    "Sınır olan 7'yi de saydın: eşitsizlik < olduğundan 7 çözüm değildir (14 − 5 = 9 < 9 yanlış).",
    "Son adımı atladın: 2x < 14 buldun ve 14'ü cevap saydın; 2'ye bölüp x < 7 bulman gerekir."
  ],
  "aciklama": "Doğal sayılar 0, 1, 2, 3, … biçiminde 0'dan başlar.\nAdım 1: İki tarafa 5 ekle: 2x < 14.\nAdım 2: İki tarafı 2'ye böl: x < 7.\nAdım 3: Doğal sayılar: 0, 1, 2, 3, 4, 5, 6. Say: 7 tane.\nSağlama: x = 6 için 12 − 5 = 7 < 9 doğru; x = 7 için 9 < 9 yanlış.\nCevap B."
},
{
  "id": "mat-es-244",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir sinema salonunun kapasitesi 120 kişidir. Salonda x kişi varken 15 kişi dışarı çıkıyor, ardından 22 kişi içeri giriyor. Bu işlemlerden sonra salondaki kişi sayısı kapasiteyi __aşmamalıdır__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "x + 15 − 22 ≤ 120",
    "x − 15 + 22 ≥ 120",
    "x − 15 + 22 ≤ 120",
    "x − 15 + 22 < 120"
  ],
  "dogru": 2,
  "hatalar": [
    "Çıkanlarla girenleri ters yazdın: 15 kişi çıktığı için çıkarılır, 22 kişi girdiği için eklenir.",
    "Yönü ters aldın: ≥ işareti kapasiteye eşit ya da kapasiteden fazla kişi olması demektir.",
    null,
    "Eşitliği dışarıda bıraktın: tam 120 kişi de salona sığar."
  ],
  "aciklama": "Önce çıkanlar çıkarılır, girenler eklenir; sonra toplam kapasiteyle karşılaştırılır.\nAdım 1: Son kişi sayısı x − 15 + 22.\nAdım 2: Kapasiteyi aşmaması için bu sayı en fazla 120 olmalıdır (120 kişi sığar): x − 15 + 22 ≤ 120.\nSağlama: x = 113 için 113 − 15 + 22 = 120 uygun; x = 114 için 121 uygun değil.\nCevap C."
},
{
  "id": "mat-es-245",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir bilgi yarışmasında yarışmacıların numaraları k ile gösteriliyor ve numaralar aşağıdaki sayı doğrusunda boyalı aralıkta yer alıyor (k tam sayı).\n**Bu aralıktan seçilen iki farklı yarışmacının numaralarının toplamı en çok kaç olabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"k için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"160\" y1=\"46\" x2=\"392\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"160\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"400\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "7",
    "9",
    "10",
    "11"
  ],
  "dogru": 1,
  "hatalar": [
    "Aralığın iki ucunu topladın: 2 + 5; oysa en büyük iki numara 5 ve 4'tür.",
    null,
    "Aynı numarayı iki kez kullandın: 5 + 5; yarışmacılar farklı olduğundan numaralar da farklı olmalıdır.",
    "Boş yuvarlak olan 6'yı da kullandın: 6 + 5; 6 aralığa dahil değildir."
  ],
  "aciklama": "'Farklı' dendiği için aynı sayı iki kez kullanılamaz. Toplam en büyük olsun istiyorsak aralığın en büyük iki tam sayısını alırız.\nAdım 1: Gösterim 2 ≤ k < 6 eşitsizliğidir.\nAdım 2: Tam sayılar: 2, 3, 4, 5 (6 dahil değil).\nAdım 3: En büyük iki sayı 5 ve 4; toplamları 9.\nCevap B."
},
{
  "id": "mat-es-246",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**[[2x|3]] ≤ 8 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ 12",
    "x ≤ [[16|3]]",
    "x ≤ 24",
    "x ≥ 12"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Ters çarpma yaptın: [[2x|3]] ≤ 8 için iki tarafı önce 3 ile çarpıp sonra 2'ye bölmek gerekir; sen 2 ile çarpıp 3'e böldün.",
    "Son adımı atladın: 2x ≤ 24 buldun ama 2'ye bölmedin.",
    "Yönü değiştirdin: pozitif sayıyla çarpıp bölerken yön değişmez."
  ],
  "aciklama": "Adım 1: İki tarafı 3 ile çarp: 2x ≤ 24.\nAdım 2: İki tarafı 2'ye böl: x ≤ 12.\nSağlama: x = 12 için [[24|3]] = 8 ≤ 8 doğru; x = 15 için 10 ≤ 8 yanlış.\nCevap A."
},
{
  "id": "mat-es-247",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Cansu bir bisiklet turunda ilk 6 km'yi yürüyerek tamamladı. Sonrasında saatte 12 km hızla t saat bisiklet sürecek. Cansu'nun bütün turda alacağı yolun __en az__ 30 km olması hedefleniyor.\n**Bu hedef aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "6t + 12 ≥ 30",
    "12(t + 6) ≥ 30",
    "18t ≥ 30",
    "6 + 12t ≥ 30"
  ],
  "dogru": 3,
  "hatalar": [
    "Yürüyüş mesafesiyle hızı karıştırdın: 6 km sabit yoldur, 12 km/saat ise süreyle çarpılacak hızdır.",
    "6 km'yi 6 saat gibi ekledin: 12(t + 6), Cansu'nun 6 saat daha bisiklet sürdüğünü varsayar; oysa 6 km doğrudan yola eklenir, hızla çarpılmaz.",
    "İki sayıyı toplayıp süreyle çarptın: yürünen 6 km, t saatle çarpılmaz; sabit kalır.",
    null
  ],
  "aciklama": "Yol = hız · süre. Toplam yol, yürünen yol ile bisikletle alınan yolun toplamıdır.\nAdım 1: Bisikletle alınan yol 12t km.\nAdım 2: Toplam yol 6 + 12t.\nAdım 3: En az 30 km olacağından 6 + 12t ≥ 30.\nSağlama: t = 2 için 6 + 24 = 30 uygun; t = 1 için 18 uygun değil.\nCevap D."
},
{
  "id": "mat-es-248",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Elif, 7 − 3x ≤ 22 eşitsizliğini şöyle çözmüştür:\nAdım 1: İki taraftan 7 çıkardı: −3x ≤ 15.\nAdım 2: İki tarafı −3'e bölüp yönü çevirdi: x ≥ 5.\n**Elif'in çözümünde aşağıdaki hatalardan hangisi vardır?**",
  "gorsel": null,
  "secenekler": [
    "15 ÷ (−3) işleminin sonucunu −5 yerine 5 bulmuştur.",
    "7'yi karşıya geçirirken işaretini yanlış kullanmıştır.",
    "Negatif sayıya böldüğü hâlde yönü çevirmemiştir.",
    "Yönü çevirirken ≥ yerine > yazmıştır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "7'yi doğru taşımıştır: 22 − 7 = 15 işlemi doğrudur, hata orada değildir.",
    "Elif yönü çevirmiştir (≤ yerine ≥ yazmıştır); hata yönde değil, sayının işaretindedir.",
    "Elif ≥ yazmıştır, > değil; hata işaretin türünde değil, sayının işaretindedir."
  ],
  "aciklama": "Adım 1 doğrudur: 22 − 7 = 15, yani −3x ≤ 15.\nAdım 2: −3'e bölünce yön çevrilir (≥ olur) ve sayı 15 ÷ (−3) = −5 olur. Elif yönü doğru çevirmiş ama sayıyı 5 yazmıştır.\nDoğru çözüm: x ≥ −5.\nSağlama: x = 0 için 7 − 0 = 7 ≤ 22 doğrudur ve 0 ≥ −5 de doğrudur; Elif'in sonucu (x ≥ 5) 0'ı dışarıda bırakır.\nCevap A."
},
{
  "id": "mat-es-249",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**9 − 2x < 3 eşitsizliğini sağlayan en küçük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−2",
    "3",
    "4",
    "6"
  ],
  "dogru": 2,
  "hatalar": [
    "İşareti kaybettin: −6 ÷ (−2) = 3 iken −3 buldun; x > −3 için en küçük tam sayı −2 olurdu.",
    "Sınırı dahil ettin: x > 3 olduğundan 3 çözüm değildir (9 − 6 = 3 < 3 yanlış).",
    null,
    "Son adımı atladın: −2x < −6 iken 6'yı cevap saydın; −2'ye bölüp yönü çevirmen gerekir."
  ],
  "aciklama": "Adım 1: İki taraftan 9 çıkar: −2x < −6.\nAdım 2: İki tarafı −2'ye böl ve yönü çevir: x > 3.\nAdım 3: 3 dahil olmadığından en küçük tam sayı 4'tür.\nSağlama: x = 4 için 9 − 8 = 1 < 3 doğru; x = 3 için 3 < 3 yanlış.\nCevap C."
},
{
  "id": "mat-es-250",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**3x + 1 < 20 eşitsizliğini sağlayan kaç tane pozitif tam sayı vardır?**",
  "gorsel": null,
  "secenekler": [
    "5",
    "6",
    "7",
    "8"
  ],
  "dogru": 1,
  "hatalar": [
    "6'yı dışarıda bıraktın: x < [[19|3]] = 6,33… olduğundan 6 da çözümdür (3 · 6 + 1 = 19 < 20).",
    null,
    "0'ı da saydın: 0 pozitif değildir; pozitif tam sayılar 1'den başlar.",
    "0'ı ve 7'yi de saydın: 7, 6,33…'ten büyüktür (3 · 7 + 1 = 22) ve 0 pozitif değildir."
  ],
  "aciklama": "Pozitif tam sayılar 1, 2, 3, … biçimindedir; 0 pozitif değildir.\nAdım 1: İki taraftan 1 çıkar: 3x < 19.\nAdım 2: 3'e böl: x < [[19|3]] = 6,33…\nAdım 3: Pozitif tam sayılar: 1, 2, 3, 4, 5, 6. Say: 6 tane.\nSağlama: x = 6 için 19 < 20 doğru; x = 7 için 22 < 20 yanlış.\nCevap B."
},
{
  "id": "mat-es-251",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir okul gezisi için otobüs kirası 600 TL sabit ücrettir. Ayrıca her öğrenci için 40 TL yemek ücreti ödenecektir. Okulun bu gezi için ayırdığı bütçe 1500 TL'dir ve toplam harcama bu bütçeyi aşmayacaktır.\n**Geziye en fazla kaç öğrenci katılabilir?**",
  "gorsel": null,
  "secenekler": [
    "22",
    "23",
    "37",
    "38"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Ondalık sonucu yukarı yuvarladın: 22,5'ten 23 çıkmaz; 23 öğrenci için harcama 600 + 920 = 1520 TL olur ve bütçe aşılır.",
    "Sabit kira ücretini hesaba katmadın: 1500 ÷ 40 = 37,5 bulup aşağı yuvarladın.",
    "Kirayı hesaba katmadın ve ondalık sonucu yukarı yuvarladın."
  ],
  "aciklama": "Üst sınır olan durumlarda ondalık sonuç aşağı yuvarlanır.\nAdım 1: Toplam harcama 600 + 40k olur ve en fazla 1500 TL olmalıdır: 600 + 40k ≤ 1500.\nAdım 2: 40k ≤ 900, yani k ≤ 22,5.\nAdım 3: Öğrenci sayısı tam sayı olduğundan en fazla 22.\nSağlama: 22 öğrenci için 600 + 880 = 1480 TL uygun; 23 öğrenci için 1520 TL uygun değil.\nCevap A."
},
{
  "id": "mat-es-252",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir deneme sınavında 30 soru vardır ve boş bırakılan soru yoktur. Net, doğru sayısından yanlış sayısının üçte birinin çıkarılmasıyla hesaplanır. Bir öğrencinin doğru sayısı d'dir ve bu öğrencinin neti __en az__ 18 olmalıdır.\n**Bu koşul aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "d − [[d|3]] ≥ 18",
    "d − 3(30 − d) ≥ 18",
    "d − [[30 − d|3]] ≤ 18",
    "d − [[30 − d|3]] ≥ 18"
  ],
  "dogru": 3,
  "hatalar": [
    "Yanlış sayısı yerine doğru sayısını üçe böldün: boş soru olmadığından yanlış sayısı 30 − d'dir.",
    "Üçte biri yerine 3 katını çıkardın: yanlışın üçte biri [[30 − d|3]] olur, 3(30 − d) değil.",
    "Yönü ters aldın: ≤ işareti 'en çok 18' demektir; 'en az' için ≥ gerekir.",
    null
  ],
  "aciklama": "Net = doğru − [[yanlış|3]]. Boş soru olmadığından yanlış sayısı 30 − d'dir.\nAdım 1: Yanlış sayısı 30 − d.\nAdım 2: Net d − [[30 − d|3]] olur.\nAdım 3: Net en az 18 olacağından d − [[30 − d|3]] ≥ 18.\nSağlama: d = 21 için yanlış 9, net 21 − 3 = 18 uygun; d = 20 için net 20 − [[10|3]], yaklaşık 16,7 olur ve uygun değil.\nCevap D."
},
{
  "id": "mat-es-253",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir kargo firması, kütlesi t kg olan paketlerden 5t + 10 TL ücret alıyor. Firmanın kampanyası yalnızca kütlesi aşağıdaki sayı doğrusunda boyalı aralıkta olan, tam kilogramlı paketler için geçerlidir.\n**Kampanyadaki en pahalı paket ile en ucuz paketin ücret farkı kaç TL'dir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"t için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"168\" y1=\"46\" x2=\"400\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"160\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"400\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "10",
    "15",
    "20"
  ],
  "dogru": 2,
  "hatalar": [
    "Ücret farkı yerine kütle farkını yazdın: 6 − 3 = 3 kg; sorulan TL cinsinden farktır.",
    "Ücretin sabit kısmını (10 TL) fark sandın: sabit kısım iki ücrette de vardır ve farkta sıfırlanır.",
    null,
    "Boş yuvarlak olan 2 kg'ı da hesaba kattın: 40 − 20 = 20; oysa 2 kg aralığa dahil değildir."
  ],
  "aciklama": "Boş uçtaki değer aralığa dahil değildir, dolu uçtaki değer dahildir. En ucuz paket en küçük kütleli, en pahalı paket en büyük kütleli olandır.\nAdım 1: Aralık 2 < t ≤ 6; tam kilogramlar: 3, 4, 5, 6.\nAdım 2: En ucuz paket 3 kg: 5 · 3 + 10 = 25 TL. En pahalı paket 6 kg: 5 · 6 + 10 = 40 TL.\nAdım 3: Fark 40 − 25 = 15 TL.\nSağlama: Kütle farkı 3 kg ve kilogram başına 5 TL olduğundan 3 · 5 = 15 TL.\nCevap C."
},
{
  "id": "mat-es-254",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "**2x + 9 > −5 eşitsizliğini sağlayan kaç tane negatif tam sayı vardır?**",
  "gorsel": null,
  "secenekler": [
    "0",
    "6",
    "7",
    "8"
  ],
  "dogru": 1,
  "hatalar": [
    "9'u karşıya geçirirken işaretini değiştirmedin: −5 + 9 = 4 buldun ve x > 2 çıktı; bu durumda negatif tam sayı kalmaz.",
    null,
    "−7'yi de saydın: eşitsizlik > olduğundan −7 çözüm değildir (−14 + 9 = −5 > −5 yanlış).",
    "−7'yi ve 0'ı da saydın: −7 dahil değildir, 0 ise negatif değildir."
  ],
  "aciklama": "Negatif tam sayılar −1, −2, −3, … biçimindedir.\nAdım 1: İki taraftan 9 çıkar: 2x > −14.\nAdım 2: 2'ye böl: x > −7.\nAdım 3: −7 dahil değil; negatif tam sayılar: −6, −5, −4, −3, −2, −1. Say: 6 tane.\nSağlama: x = −6 için −12 + 9 = −3 > −5 doğru; x = −7 için −5 > −5 yanlış.\nCevap B."
},
{
  "id": "mat-es-255",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir çiçek bahçesindeki çiçeklerin sayısı x'tir. Bu çiçeklerin üçte biri laledir. Lale olmayan çiçeklerin sayısı 30'dan __fazladır__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "x − 3 > 30",
    "[[x|3]] > 30",
    "x − [[x|3]] > 30",
    "x − [[x|3]] < 30"
  ],
  "dogru": 2,
  "hatalar": [
    "'Üçte biri' ifadesini 3 sayısı gibi çıkardın: lale sayısı 3 değil, [[x|3]]'tür.",
    "Lale sayısını yazdın: [[x|3]] laleleri gösterir; sorulan lale olmayanlardır.",
    null,
    "Yönü ters aldın: < işareti lale olmayanların 30'dan az olmasını gösterir."
  ],
  "aciklama": "Lale olmayan çiçek sayısı = tüm çiçekler − lale sayısı.\nAdım 1: Lale sayısı [[x|3]].\nAdım 2: Lale olmayan çiçek sayısı x − [[x|3]].\nAdım 3: Bu sayı 30'dan fazla olacağından x − [[x|3]] > 30.\nSağlama: x = 48 için lale 16, diğerleri 32 > 30 doğru; x = 45 için lale 15, diğerleri 30 > 30 yanlış.\nCevap C."
},
{
  "id": "mat-es-256",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda bir eşitsizliğin çözüm kümesi gösterilmiştir.\n**Bu gösterim aşağıdaki eşitsizliklerden hangisinin çözümüne aittir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"çözüm kümesi için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"20\" y1=\"46\" x2=\"184\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"184\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−3x ≥ 6",
    "−3x ≤ 6",
    "3x ≥ 6",
    "x − 4 ≤ −2"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Negatif sayıya bölünce yönü çevirmedin: −3x ≤ 6 eşitsizliğinin çözümü x ≥ −2'dir; ok sağa gider.",
    "Çözüm x ≥ 2 çıkar: sınır pozitif ve ok sağa gider; gösterimdeki sınır −2'dir.",
    "Çözüm x ≤ 2 çıkar: sınırın işareti yanlış; gösterimdeki dolu yuvarlak −2'dedir, 2'de değil."
  ],
  "aciklama": "Gösterimde ok sola gidiyor ve −2'deki yuvarlak dolu: çözüm x ≤ −2'dir. Şıkları tek tek çözüp bu sonuçla karşılaştırırız.\nAdım 1: −3x ≥ 6 → −3'e böl ve yönü çevir: x ≤ −2. Gösterimle aynıdır.\nAdım 2: −3x ≤ 6 → x ≥ −2; 3x ≥ 6 → x ≥ 2; x − 4 ≤ −2 → x ≤ 2. Hiçbiri gösterimle aynı değildir.\nSağlama: x = −3 için −3 · (−3) = 9 ≥ 6 doğrudur.\nCevap A."
},
{
  "id": "mat-es-257",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir okulun fotokopi odasında 480 yaprak kâğıt vardır ve her gün 35 yaprak kâğıt kullanılmaktadır. Kâğıt stoku 100 yaprağın altına inmeden yeni sipariş verilecektir.\n**Gün sonunda stok 100 yaprağın altına inmeden en fazla kaç gün kâğıt kullanılabilir?**",
  "gorsel": null,
  "secenekler": [
    "10",
    "11",
    "13",
    "14"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Ondalık sonucu yukarı yuvarladın: 10,857…'den 11 çıkmaz; 11. günün sonunda stok 480 − 385 = 95 yaprak olur ve sınırın altına iner.",
    "Alt sınırı hesaba katmadın: 480 ÷ 35 = 13,7… buldun ve aşağı yuvarladın; oysa 100 yaprak stokta kalmalıdır.",
    "Alt sınırı hesaba katmadın ve sonucu yukarı yuvarladın."
  ],
  "aciklama": "Alt sınır olan durumlarda tam sayı sonucu bulmak için ondalık değer aşağı yuvarlanır.\nAdım 1: t gün sonra stok 480 − 35t olur ve en az 100 olmalıdır: 480 − 35t ≥ 100.\nAdım 2: İki taraftan 480 çıkar: −35t ≥ −380.\nAdım 3: −35'e böl ve yönü çevir: t ≤ [[380|35]] = 10,857…\nAdım 4: Gün sayısı tam sayı olduğundan en fazla 10 gün.\nSağlama: 10 gün sonra stok 480 − 350 = 130 uygun; 11 gün sonra 95 uygun değil.\nCevap A."
},
{
  "id": "mat-es-258",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir okul kantininde bir menü, fiyatı x TL olan bir sandviç ile fiyatı 12 TL olan bir içecekten oluşuyor. Öğretmenler bir grup için aynı menüden 4 tane sipariş verecek, ayrıca masaya 15 TL'lik tek bir tatlı tabağı da alacak. Kantin sorumlusu, toplam ödemenin 200 TL'yi __geçmemesini__ istediklerini not ediyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "4x + 12 + 15 ≤ 200",
    "4(x + 12 + 15) ≤ 200",
    "4x + 12 − 15 ≤ 200",
    "4(x + 12) + 15 ≤ 200"
  ],
  "dogru": 3,
  "hatalar": [
    "İçeceği dört kez saymadın: 4 menü için 4 içecek de alınır, 12 TL tek bir kez eklenemez.",
    "Tatlı tabağını her menüye ekledin: tatlı tek bir kez alınır, menü sayısıyla çarpılmaz.",
    "İçeceği bir kez saydın ve tatlının bedelini toplamdan çıkardın: tatlı da ödemeye eklenir.",
    null
  ],
  "aciklama": "Toplam ödeme = menülerin bedeli + tatlı tabağı. Bir menünün fiyatı sandviç ile içecek fiyatının toplamıdır; 4 menü için bu fiyat 4 ile çarpılır, tatlı ise yalnızca bir kez eklenir.\nAdım 1: Bir menü x + 12 TL.\nAdım 2: 4 menü 4(x + 12) TL.\nAdım 3: Tatlı tabağıyla toplam 4(x + 12) + 15 TL.\nAdım 4: Toplam 200 TL'yi geçmeyeceğinden 4(x + 12) + 15 ≤ 200.\nSağlama: x = 34 için 4 · 46 + 15 = 199 uygun; x = 35 için 4 · 47 + 15 = 203 uygun değil.\nCevap D."
},
{
  "id": "mat-es-259",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Mert, 2x − 1 < 7 eşitsizliğini çözüp çözüm kümesini sayı doğrusunda göstermek istiyor.\n**Mert'in çözüm kümesini doğru gösteren ifade aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "8'de boş yuvarlak, ok sola",
    "4'te boş yuvarlak, ok sola",
    "4'te dolu yuvarlak, ok sola",
    "4'te boş yuvarlak, ok sağa"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitsizliği tamamen çözmedin: 2x < 8 buldun ve sınır olarak 8'i aldın; 2'ye bölünce sınır 4 olur.",
    null,
    "< işareti sınırı kapsamaz, bu yüzden 4'teki yuvarlak boş olmalıdır.",
    "Yönü ters aldın: x < 4 küçük değerleri gösterir, ok sola gider."
  ],
  "aciklama": "Önce eşitsizlik çözülür, sonra sonuç sayı doğrusuna taşınır.\nAdım 1: İki tarafa 1 ekle: 2x < 8.\nAdım 2: 2'ye böl: x < 4.\nAdım 3: < işareti sınırı kapsamaz: 4'te boş yuvarlak; değerler 4'ten küçük: ok sola.\nSağlama: x = 3 için 5 < 7 doğru; x = 4 için 7 < 7 yanlış.\nCevap B."
},
{
  "id": "mat-es-260",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "**[[x − 4|3]] < −2 eşitsizliğini sağlayan en büyük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−11",
    "−3",
    "−2",
    "1"
  ],
  "dogru": 1,
  "hatalar": [
    "4'ü karşıya geçirirken çıkardın: −6 − 4 = −10 buldun ve x < −10 çıktı; doğrusu −6 + 4 = −2'dir.",
    null,
    "Sınırı dahil ettin: x < −2 olduğundan −2 çözüm değildir.",
    "İşareti kaybettin: −6 + 4 = −2 iken 2 yazdın; x < 2 için en büyük tam sayı 1 olur."
  ],
  "aciklama": "Adım 1: İki tarafı 3 ile çarp: x − 4 < −6.\nAdım 2: İki tarafa 4 ekle: x < −2.\nAdım 3: −2 dahil değil; −2'den küçük en büyük tam sayı −3'tür.\nSağlama: x = −3 için [[−7|3]] = −2,33… < −2 doğru; x = −2 için [[−6|3]] = −2 < −2 yanlış.\nCevap B."
},
{
  "id": "mat-es-261",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir kütüphanede üç gün art arda ödünç verilen kitap sayıları ardışık üç doğal sayıdır: her gün bir önceki günden tam 1 kitap fazla ödünç verilmiştir. İlk gün x kitap verilmiştir. Kütüphane yönetimi, bu üç günde verilen toplam kitap sayısının, ilk gün verilen kitap sayısının 2 katından 20 fazla olan sayıdan __az olmadığını__ belirtiyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "x + (x + 1) + (x + 2) ≥ 2(x + 20)",
    "x + (x + 1) + (x + 2) ≥ 2x − 20",
    "x + (x + 1) + (x + 2) ≥ 2x + 20",
    "3x ≥ 2(x + 20)"
  ],
  "dogru": 2,
  "hatalar": [
    "'2 katından 20 fazla' ifadesinde 20'yi de 2 ile çarptın: 2(x + 20), 'x + 20'nin 2 katıdır; sorulan 2x + 20'dir.",
    "'20 fazla' ifadesini '20 eksik' diye okudun: 2 katından 20 fazla için 20 eklenir, çıkarılmaz.",
    null,
    "Ardışıklığı yok saydın (x + x + x = 3x) ve 20'yi de 2 ile çarptın: üç gün sayıları x, x + 1, x + 2'dir ve '2 katından 20 fazla' 2x + 20 demektir."
  ],
  "aciklama": "Ardışık doğal sayılar birer birer artar: x, x + 1, x + 2. 'Az değildir' ifadesi 'küçük değildir', yani büyük ya da eşittir. 'Bir sayının 2 katından 20 fazla' ifadesi önce 2 ile çarpmayı, sonra 20 eklemeyi anlatır: 2x + 20.\nAdım 1: Üç günün toplamı x + (x + 1) + (x + 2).\nAdım 2: İlk günün 2 katından 20 fazlası 2x + 20.\nAdım 3: Toplam bu sayıdan az olmadığı için x + (x + 1) + (x + 2) ≥ 2x + 20.\nSağlama: x = 17 için 17 + 18 + 19 = 54 ve 2 · 17 + 20 = 54; 54 ≥ 54 doğru. x = 16 için 51 ≥ 52 yanlış.\nCevap C."
},
{
  "id": "mat-es-262",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x pozitif tam sayısının alabileceği değerler gösterilmiştir.\n**Bu değerlerden seçilen iki farklı sayının çarpımı en çok kaç olabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"20\" y1=\"46\" x2=\"392\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"400\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2",
    "3",
    "6",
    "9"
  ],
  "dogru": 2,
  "hatalar": [
    "En küçük iki sayıyı çarptın: 1 · 2; en büyük çarpım için en büyük iki sayı alınır.",
    "1 ile 3'ü çarptın: çarpımı büyütmek için ikinci en büyük sayı olan 2'yi de kullanmalısın.",
    null,
    "Aynı sayıyı iki kez kullandın: 3 · 3; sayılar farklı olmalıdır."
  ],
  "aciklama": "Boş yuvarlak 4'ün dahil olmadığını, okun sola gitmesi küçük değerleri gösterir. 'Pozitif' dendiği için 0 ve negatif sayılar alınmaz.\nAdım 1: Gösterim x < 4; pozitif tam sayılar 1, 2, 3.\nAdım 2: İki farklı sayının çarpımı, en büyük iki sayı alınınca en büyük olur: 3 · 2.\nAdım 3: Çarpım 6.\nCevap C."
},
{
  "id": "mat-es-263",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "**−6x ≤ 15 eşitsizliğini sağlayan en küçük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−3",
    "−2",
    "2",
    "3"
  ],
  "dogru": 1,
  "hatalar": [
    "Ondalık sonucu yanlış yöne yuvarladın: x ≥ −2,5 olduğundan −3, −2,5'ten küçüktür ve çözüm değildir (−6 · (−3) = 18 ≤ 15 yanlış).",
    null,
    "İşareti kaybedip ondalığı aşağı yuvarladın: 15 ÷ (−6) = −2,5 olur, 2,5 değil.",
    "İşareti kaybettin: x ≥ 2,5 buldun ve en küçük tam sayıyı 3 aldın; oysa 15 ÷ (−6) = −2,5'tir."
  ],
  "aciklama": "Adım 1: İki tarafı −6'ya böl ve yönü çevir: x ≥ 15 ÷ (−6) = −2,5.\nAdım 2: x, −2,5'ten büyük ya da −2,5'e eşit olabilir; −2,5 tam sayı değildir.\nAdım 3: −2,5'ten büyük olan en küçük tam sayı −2'dir.\nSağlama: x = −2 için −6 · (−2) = 12 ≤ 15 doğru; x = −3 için 18 ≤ 15 yanlış.\nCevap B."
},
{
  "id": "mat-es-264",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir otoparkta ilk 2 saat için sabit 10 TL alınır. 2 saati aşan her saat için ise 4 TL eklenir. Bir araç t saat (t > 2) park ediyor ve ödemenin 34 TL'yi __aşmaması__ gerekiyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "10 + 4(t − 2) ≤ 34",
    "10 + 4t ≤ 34",
    "4(t − 2) ≤ 34",
    "10 + 4(t − 2) ≥ 34"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Her saatten ücret aldın: ilk 2 saat sabit ücrete dahildir, bu yüzden ek ücret yalnızca t − 2 saat için alınır.",
    "İlk 2 saatin sabit 10 TL'sini unuttun: toplam ödeme 10 + ek ücrettir.",
    "Yönü ters aldın: ≥ işareti ödemenin 34 TL'ye eşit ya da 34 TL'den fazla olması demektir."
  ],
  "aciklama": "Toplam ödeme = ilk 2 saatin sabit ücreti + 2 saati aşan sürenin ücreti.\nAdım 1: 2 saati aşan süre t − 2 saat; ek ücret 4(t − 2).\nAdım 2: Toplam ödeme 10 + 4(t − 2).\nAdım 3: 34 TL'yi aşmayacağından 10 + 4(t − 2) ≤ 34.\nSağlama: t = 8 için 10 + 24 = 34 uygun; t = 9 için 38 uygun değil.\nCevap A."
},
{
  "id": "mat-es-265",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda yalnızca bazı sayılar yazılmıştır; küçük çizgiler birer birim aralığı gösterir. Bir bilet fiyatı olan t için (TL, tam sayı) boyalı bölge gösterilmiştir.\n**Bu bölgede kaç farklı tam sayı vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"t için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"320\" y1=\"40\" x2=\"320\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"440\" y1=\"40\" x2=\"440\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"480\" y1=\"40\" x2=\"480\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">12</text><line x1=\"160\" y1=\"46\" x2=\"440\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"160\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"440\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "5",
    "6",
    "7",
    "8"
  ],
  "dogru": 3,
  "hatalar": [
    "Büyük − küçük − 2 işlemi yaptın: 10 − 3 = 7'den 2 çıkardın; iki uç da dahil olduğundan 1 eklemen gerekirdi.",
    "İki ucu da dahil değilmiş gibi saydın: 4'ten 9'a 6 sayı vardır; oysa iki uçtaki yuvarlak doludur.",
    "Bir uçtaki yuvarlağı boş sandın: 3'ten 9'a ya da 4'ten 10'a 7 sayı sayarsın; iki uç da dahildir.",
    null
  ],
  "aciklama": "Etiketi olmayan çizgilerin değerini, etiketli çizgilerden birer birim sayarak bulursun.\nAdım 1: Sol uç, 4'ün bir çizgi solunda: 3. Sağ uç, 8'in iki çizgi sağında: 10. İki yuvarlak da dolu.\nAdım 2: Aralık 3 ≤ t ≤ 10; tam sayılar 3, 4, 5, 6, 7, 8, 9, 10.\nAdım 3: Say: 8. (Büyük − küçük + 1 = 10 − 3 + 1 = 8.)\nCevap D."
},
{
  "id": "mat-es-266",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Ceren'in ilk üç matematik denemesindeki doğru sayıları 16, 19 ve 22'dir. Ceren dördüncü denemede yapacağı doğru sayısına x diyor ve dört denemedeki doğru sayısı ortalamasının __en az__ 20 olmasını istiyor.\n**Ceren'in dördüncü denemede en az kaç doğru yapması gerekir?**",
  "gorsel": null,
  "secenekler": [
    "19",
    "20",
    "23",
    "24"
  ],
  "dogru": 2,
  "hatalar": [
    "İlk üç denemenin ortalamasını yazdın: 57 ÷ 3 = 19; sorulan dördüncü denemedeki doğru sayısıdır.",
    "Hedef ortalamayı cevap sandın: dört deneme ortalaması 20 olsun diye dördüncü denemenin 20 olması gerekmez; toplamın en az 80 olması gerekir.",
    null,
    "Eşitliği dışarıda bıraktın: 'en az 20' ortalaması 20'ye eşit olmayı da kapsar; 23 doğru yeterlidir."
  ],
  "aciklama": "Ortalama = toplam ÷ sayı. Ortalamanın en az 20 olması, dört denemenin toplamının en az 4 · 20 = 80 olması demektir.\nAdım 1: [[16 + 19 + 22 + x|4]] ≥ 20.\nAdım 2: İki tarafı 4 ile çarp: 57 + x ≥ 80.\nAdım 3: x ≥ 23.\nSağlama: x = 23 için toplam 80, ortalama tam 20; x = 22 için toplam 79, ortalama 19,75.\nCevap C."
},
{
  "id": "mat-es-267",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Zeynep'in yaşı, kardeşinin yaşının 2 katından 3 eksiktir. Kardeşinin yaşı k'dır. Zeynep'in 5 yıl sonraki yaşının 20'yi __geçmemesi__ gerekiyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "2k − 3 − 5 ≤ 20",
    "2k − 3 + 5 ≤ 20",
    "2(k + 5) − 3 ≤ 20",
    "2k − 3 + 5 ≥ 20"
  ],
  "dogru": 1,
  "hatalar": [
    "5 yıl sonra yerine 5 yıl öncesini yazdın: gelecekteki yaş için 5 eklenir.",
    null,
    "Yaş ilişkisini 5 yıl sonra için de geçerli saydın: '2 katından 3 eksik' ilişkisi bugünkü yaşlar için verilmiştir; 5 yıl sonra Zeynep'in yaşı, bugünkü yaşına 5 eklenerek bulunur.",
    "Yönü ters aldın: ≥ işareti yaşın 20'ye eşit ya da 20'den büyük olması demektir."
  ],
  "aciklama": "Önce Zeynep'in bugünkü yaşını yaz, sonra 5 yıl sonrası için 5 ekle.\nAdım 1: Zeynep'in yaşı 2k − 3.\nAdım 2: 5 yıl sonra yaşı 2k − 3 + 5.\nAdım 3: Bu yaş 20'yi geçmeyeceğinden 2k − 3 + 5 ≤ 20.\nSağlama: k = 9 için Zeynep 15 yaşında, 5 yıl sonra 20 uygun; k = 10 için Zeynep 17 yaşında, 5 yıl sonra 22 uygun değil.\nCevap B."
},
{
  "id": "mat-es-268",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda bir k tam sayısının alabileceği değerler boyalı gösterilmiştir. Her k değeri için 3k − 2 ifadesinin değeri hesaplanıyor ve bu değerlerin hepsi toplanıyor.\n**Elde edilen toplam kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"k için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"160\" y1=\"46\" x2=\"392\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"160\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"400\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−2",
    "3",
    "4",
    "5"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sol uçtaki dolu yuvarlağı boş sandın: k = −1 aralığa dahildir; onu saymayınca toplam 3 çıkar.",
    "k değerlerinin toplamını (−1 + 0 + 1 + 2 = 2) bulup ifadeye uyguladın: 3 · 2 − 2 = 4; oysa ifade her k için ayrı hesaplanır.",
    "Sağ uçtaki boş yuvarlağı dolu sandın: k = 3 için 7 eklenir ve toplam 5 çıkar; oysa 3 aralığa dahil değildir."
  ],
  "aciklama": "Her k değeri için ifade ayrı hesaplanır, sonra sonuçlar toplanır. Dolu uç dahil, boş uç dahil değildir.\nAdım 1: Gösterim −1 ≤ k < 3; tam sayılar −1, 0, 1, 2.\nAdım 2: 3k − 2 değerleri: −5, −2, 1, 4.\nAdım 3: Toplam −5 − 2 + 1 + 4 = −2.\nCevap A."
},
{
  "id": "mat-es-269",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "**5 − 2x > −9 eşitsizliğini sağlayan en büyük tam sayı ile 3x − 4 ≤ 8 eşitsizliğini sağlayan en büyük tam sayının toplamı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "7",
    "9",
    "10",
    "11"
  ],
  "dogru": 2,
  "hatalar": [
    "4'ü karşıya geçirirken çıkardın: 3x ≤ 4 buldun, x ≤ 1,33… için en büyük tam sayı 1 oldu; oysa 8 + 4 = 12 ve x ≤ 4 olmalıdır (6 + 1 = 7).",
    "İkinci eşitsizlikte sınırı dışarıda bıraktın: eşitsizlik ≤ olduğundan 4 de çözümdür (12 − 4 = 8 ≤ 8); 6 + 3 = 9 buldun.",
    null,
    "Birinci eşitsizlikte sınırı dahil ettin: x < 7 olduğundan 7 çözüm değildir (5 − 14 = −9 > −9 yanlış); 7 + 4 = 11 buldun."
  ],
  "aciklama": "Her eşitsizlik ayrı çözülür, sonra bulunan iki en büyük tam sayı toplanır. Negatif sayıya bölünürken yön çevrilir; sınırın dahil olup olmadığına işarete bakılarak karar verilir.\nAdım 1: 5 − 2x > −9 → iki taraftan 5 çıkar: −2x > −14 → −2'ye böl ve yönü çevir: x < 7. 7 dahil değil; en büyük tam sayı 6.\nAdım 2: 3x − 4 ≤ 8 → iki tarafa 4 ekle: 3x ≤ 12 → 3'e böl: x ≤ 4. 4 dahil; en büyük tam sayı 4.\nAdım 3: Toplam 6 + 4 = 10.\nSağlama: x = 6 için 5 − 12 = −7 > −9 doğru; x = 7 için −9 > −9 yanlış. x = 4 için 12 − 4 = 8 ≤ 8 doğru; x = 5 için 11 ≤ 8 yanlış.\nCevap C."
},
{
  "id": "mat-es-270",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir yürüyüşçü, üç günde attığı adım sayılarını bin adım olarak kaydediyor. İlk iki gün 7 ve 9 bin adım atan yürüyüşçü, üçüncü gün x bin adım atacak. Üç günlük adım ortalamasının __en az__ 8 bin adım olmasını istiyor.\n**Bu hedef aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "[[7 + 9 + x|3]] ≤ 8",
    "[[7 + 9 + x|3]] ≥ 8",
    "7 + 9 + [[x|3]] ≥ 8",
    "[[7 + 9 + x|2]] ≥ 8"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü ters aldın: ≤ işareti 'en çok 8' demektir.",
    null,
    "Yalnızca üçüncü günü üçe böldün: ortalama için üç günün toplamı üçe bölünür.",
    "Toplamı 2'ye böldün: üç gün olduğu için 3'e bölmen gerekir."
  ],
  "aciklama": "Ortalama, toplamın gün sayısına bölünmesiyle bulunur.\nAdım 1: Üç günün toplamı 7 + 9 + x.\nAdım 2: Ortalama [[7 + 9 + x|3]].\nAdım 3: En az 8 olacağından [[7 + 9 + x|3]] ≥ 8.\nSağlama: x = 8 için [[24|3]] = 8 uygun; x = 7 için [[23|3]], yaklaşık 7,67 olur ve uygun değil.\nCevap B."
},
{
  "id": "mat-es-271",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x tam sayısının alabileceği değerler gösterilmiştir.\n**2x − 1 ifadesinin asal sayı olduğu kaç farklı x değeri vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"184\" y1=\"46\" x2=\"416\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"184\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"424\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 1,
  "hatalar": [
    "Sol uçtaki dolu yuvarlağı boş sandın: x = 3 için 2x − 1 = 5 asaldır; onu saymayınca 3 kalır.",
    null,
    "9'u da asal saydın: 9 = 3 · 3 olduğundan asal değildir.",
    "Sağ uçtaki boş yuvarlağı dolu sandın ve koşulu kontrol etmedin: x = 8 aralığa dahil değildir."
  ],
  "aciklama": "Asal sayı, yalnızca 1'e ve kendisine bölünebilen 1'den büyük doğal sayıdır.\nAdım 1: Gösterim 3 ≤ x < 8; tam sayılar 3, 4, 5, 6, 7.\nAdım 2: 2x − 1 değerleri: 5, 7, 9, 11, 13.\nAdım 3: Asal olanlar 5, 7, 11, 13; 9 = 3 · 3 asal değildir. Sayısı 4.\nCevap B."
},
{
  "id": "mat-es-272",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "**3x − 7 ≤ 8 eşitsizliğini sağlayan pozitif tam sayıların toplamı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "0",
    "10",
    "15",
    "21"
  ],
  "dogru": 2,
  "hatalar": [
    "7'yi karşıya geçirirken çıkardın: 8 − 7 = 1 bulup x ≤ [[1|3]] aldın; bu durumda pozitif tam sayı kalmaz.",
    "Sınır olan 5'i dışarıda bıraktın: eşitsizlik ≤ olduğundan 5 de çözümdür (15 − 7 = 8 ≤ 8).",
    null,
    "Sınırı geçtin: 6'yı da topladın; 3 · 6 − 7 = 11 ≤ 8 yanlıştır."
  ],
  "aciklama": "Adım 1: İki tarafa 7 ekle: 3x ≤ 15.\nAdım 2: 3'e böl: x ≤ 5.\nAdım 3: Pozitif tam sayılar: 1, 2, 3, 4, 5.\nAdım 4: Toplam 1 + 2 + 3 + 4 + 5 = 15.\nSağlama: x = 5 için 15 − 7 = 8 ≤ 8 doğru; x = 6 için 11 ≤ 8 yanlış.\nCevap C."
},
{
  "id": "mat-es-273",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir dağ evinin termometresi sabah 6 °C göstermektedir. Gün boyunca sıcaklık her saat 2 °C düşmektedir. t saat sonra sıcaklığın −8 °C'nin altına __inmemesi__ isteniyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "6 − 2t ≤ −8",
    "6 + 2t ≥ −8",
    "2t − 6 ≥ −8",
    "6 − 2t ≥ −8"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters aldın: ≤ işareti sıcaklığın −8 °C'ye eşit ya da daha düşük olması demektir.",
    "Düşüşü artış gibi yazdın: sıcaklık düştüğü için 2t çıkarılır, eklenmez.",
    "Çıkarmanın sırasını ters yazdın: t saat sonraki sıcaklık 6 − 2t'dir, 2t − 6 değil.",
    null
  ],
  "aciklama": "t saat sonraki sıcaklık, başlangıç sıcaklığından düşen miktarın çıkarılmasıyla bulunur. 'Altına inmemeli' alt sınır koyar ve sınırın kendisine izin verir.\nAdım 1: t saatte düşüş 2t °C; sıcaklık 6 − 2t.\nAdım 2: Sıcaklık −8'den düşük olmayacağından 6 − 2t ≥ −8.\nSağlama: t = 7 için 6 − 14 = −8 uygun; t = 8 için −10 uygun değil.\nCevap D."
},
{
  "id": "mat-es-274",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir kargo aracı, kütlesi m kg olan kolilerden yalnızca aşağıdaki sayı doğrusunda boyalı aralıkta olanları taşıyabilir. Tabloda beş kolinin kütleleri verilmiştir.\n**Aracın taşıyabileceği kolilerin kütleleri toplamı kaç kg'dır?**",
  "gorsel": "<table class=\"tablo\"><tr><th>Koli</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr><tr><td>Kütle (kg)</td><td>12</td><td>15</td><td>18</td><td>21</td><td>24</td></tr></table><svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"m için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"66.67\" y1=\"40\" x2=\"66.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"93.33\" y1=\"40\" x2=\"93.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"120\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">12</text><line x1=\"146.67\" y1=\"40\" x2=\"146.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"173.33\" y1=\"40\" x2=\"173.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">15</text><line x1=\"226.67\" y1=\"40\" x2=\"226.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"253.33\" y1=\"40\" x2=\"253.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">18</text><line x1=\"306.67\" y1=\"40\" x2=\"306.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"333.33\" y1=\"40\" x2=\"333.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">21</text><line x1=\"386.67\" y1=\"40\" x2=\"386.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"413.33\" y1=\"40\" x2=\"413.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"440\" y1=\"40\" x2=\"440\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"440\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">24</text><line x1=\"466.67\" y1=\"40\" x2=\"466.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"493.33\" y1=\"40\" x2=\"493.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">27</text><line x1=\"128\" y1=\"46\" x2=\"360\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"120\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"360\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "33",
    "45",
    "54",
    "66"
  ],
  "dogru": 2,
  "hatalar": [
    "21 kg'lık kolinin yuvarlağı doludur, yani 21 kg dahildir; onu saymayınca 15 + 18 = 33 olur.",
    "Uçları karıştırdın: 12'de dolu, 21'de boş sandın ve 12 + 15 + 18 = 45 buldun.",
    null,
    "Boş yuvarlak olan 12 kg'ı da ekledin: 12 kg'lık koli aralığa dahil değildir."
  ],
  "aciklama": "Tablodaki kütleleri sayı doğrusundaki aralıkla karşılaştır. Dolu yuvarlak dahil, boş yuvarlak dahil değildir.\nAdım 1: Gösterim 12 < m ≤ 21.\nAdım 2: 12 kg dahil değil; 15, 18 ve 21 kg dahil; 24 kg aralığın dışında.\nAdım 3: Toplam 15 + 18 + 21 = 54 kg.\nCevap C."
},
{
  "id": "mat-es-275",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "a bir tam sayı olmak üzere 2x − a < 5 eşitsizliğinin çözüm kümesi x < 7 şeklindedir.\n**Buna göre a kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−9",
    "2",
    "7",
    "9"
  ],
  "dogru": 3,
  "hatalar": [
    "İşareti karıştırdın: a'yı karşıya geçirirken 5 − a yazdın; oysa a eklenir ve 5 + a elde edilir.",
    "2'ye bölmeyi atladın: 2x < 5 + a iken sınır 5 + a değil, [[5 + a|2]]'dir.",
    "Çözüm sınırı olan 7'yi a sandın: a eşitsizlikteki bilinmeyen katsayıdır, çözümün sınırı değil.",
    null
  ],
  "aciklama": "Eşitsizliği x için a cinsinden çöz, çıkan sınırı 7'ye eşitle.\nAdım 1: İki tarafa a ekle: 2x < 5 + a.\nAdım 2: 2'ye böl: x < [[5 + a|2]].\nAdım 3: Bu sınır 7 olmalı: [[5 + a|2]] = 7, yani 5 + a = 14 ve a = 9.\nSağlama: a = 9 için 2x − 9 < 5 → 2x < 14 → x < 7; istenen çözümle aynıdır.\nCevap D."
}
);
