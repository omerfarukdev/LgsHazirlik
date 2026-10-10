// Matematik — Eşitsizlikler (M.8.2.3): Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
// Birinci dereceden bir bilinmeyenli eşitsizlikler; en çok iki işlem. Mutlak değer, iki bilinmeyenli ve ikinci derece eşitsizlik yoktur. Sayı doğrusu şekilleri ölçeklidir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["esitsizlikler"] = window.LGS_BANK["esitsizlikler"] || []).push(
{
  "id": "mat-es-101",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir lunaparkta bir oyuncağa binmek için boy uzunluğunun en az 120 cm olması gerekir.\n**Boyu x cm olan bir çocuğun bu oyuncağa binebilmesi aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "x > 120",
    "x ≥ 120",
    "x < 120",
    "x ≤ 120"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'en az 120' demek 120'nin kendisi de uygundur, bu yüzden > değil ≥ gerekir.",
    null,
    "Yönü ters aldın: 'en az' ifadesini '120'den küçük' diye okudun.",
    "'En az' ile 'en çok' karıştı: ≤ işareti 'en fazla 120 cm' anlamına gelir."
  ],
  "aciklama": "'En az' bir alt sınır belirtir: o değerin kendisi ve ondan büyük değerler uygundur; bu yüzden ≥ işareti kullanılır.\nAdım 1: Alt sınırı bul: 120 cm.\nAdım 2: 120 cm de yeterli olduğu için eşitlik var; değerler büyüyebildiği için yön 'büyük': x ≥ 120.\nSağlama: Boyu 120 cm olan çocuk biner, 119 cm olan binemez; ≥ bunu doğru gösterir.\nCevap B."
},
{
  "id": "mat-es-102",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Bu gösterim hangi eşitsizliğe aittir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"328\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"328\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "x < 2",
    "x ≤ 2",
    "x > 2",
    "x ≥ 2"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters aldın: ok sağa gittiği için değerler 2'den büyüktür.",
    "Hem yön hem yuvarlak yanlış: ok sağa gider ve 2'deki dolu yuvarlak eşitliği de kapsar.",
    "Dolu yuvarlağı boş sandın: 2 de çözüm olduğu için > değil ≥ gerekir.",
    null
  ],
  "aciklama": "Sayı doğrusunda ok sağa gidiyorsa değerler büyür. Dolu (içi boyalı) yuvarlak o sayının da çözüme dahil olduğunu, boş yuvarlak ise dahil olmadığını gösterir.\nAdım 1: Ok sağa gidiyor: 'büyük'.\nAdım 2: 2'deki yuvarlak dolu: 2 de dahil.\nAdım 3: İkisi birleşince x ≥ 2.\nSağlama: 2 ve 5 çözümdür, 1 çözüm değildir.\nCevap D."
},
{
  "id": "mat-es-103",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**x + 5 > 12 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > 7",
    "x < 7",
    "x > 17",
    "x < 17"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü değiştirdin: toplama-çıkarma işleminde eşitsizliğin yönü değişmez.",
    "5'i çıkarmak yerine ekledin: 12 + 5 = 17.",
    "Hem 5'i ekledin hem yönü çevirdin."
  ],
  "aciklama": "Eşitsizlikte iki tarafa aynı sayı eklenir ya da iki taraftan aynı sayı çıkarılır; yön değişmez.\nAdım 1: İki taraftan 5 çıkar: x + 5 − 5 > 12 − 5.\nAdım 2: x > 7.\nSağlama: x = 8 için 8 + 5 = 13 > 12 doğru; x = 7 için 12 > 12 yanlış.\nCevap A."
},
{
  "id": "mat-es-104",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir asansörde şu uyarı yazılıdır: 'Taşınan toplam yük 400 kg'ı __aşmamalıdır__.'\n**Asansördeki toplam yük y kg ise aşağıdaki eşitsizliklerden hangisi bu kuralı gösterir?**",
  "gorsel": null,
  "secenekler": [
    "y > 400",
    "y ≥ 400",
    "y ≤ 400",
    "y < 400"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönü ters aldın: bu, 400 kg'ı aşan yükü gösterir.",
    "'Aşmamalı' ifadesini 'en az' gibi okudun: ≥ işareti 400 kg ve üstünü uygun sayar.",
    null,
    "Eşitliği dışarıda bıraktın: tam 400 kg yük de kurala uyar."
  ],
  "aciklama": "'Aşmamalıdır' bir üst sınır koyar: sınırın kendisi serbest, ondan büyük değerler yasaktır.\nAdım 1: Üst sınır 400 kg.\nAdım 2: 400 kg'ın kendisi serbest olduğu için eşitlik var; büyük değerler yasak olduğu için yön 'küçük'.\nAdım 3: y ≤ 400.\nSağlama: 400 kg yük uygun, 401 kg uygun değil; ≤ bunu söyler.\nCevap C."
},
{
  "id": "mat-es-105",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Bu gösterimde x'in alabileceği en küçük tam sayı değeri kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"192\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"184\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−3",
    "−2",
    "−1",
    "0"
  ],
  "dogru": 2,
  "hatalar": [
    "−3, gösterilen bölgenin dışında kalır: ok −2'nin sağına gidiyor.",
    "Boş yuvarlağı dolu sandın: −2 çözüme dahil değildir.",
    null,
    "−2'den sonra 0'a atladın; −1 de gösterilen bölgededir ve daha küçüktür."
  ],
  "aciklama": "Boş yuvarlak, o sayının çözüme dahil olmadığını gösterir.\nAdım 1: Gösterim x > −2 eşitsizliğidir.\nAdım 2: −2 dahil değil; −2'den büyük en küçük tam sayı −1'dir.\nSağlama: −1 > −2 doğru; −2 > −2 yanlış.\nCevap C."
},
{
  "id": "mat-es-106",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**6x > 30 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > 5",
    "x < 5",
    "x > 24",
    "x < 24"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü değiştirdin: pozitif sayıya bölerken yön değişmez.",
    "Bölmek yerine çıkardın: 30 − 6 = 24.",
    "Hem çıkardın hem yönü çevirdin."
  ],
  "aciklama": "Eşitsizliğin iki tarafı pozitif bir sayıya bölünürse yön değişmez.\nAdım 1: İki tarafı 6'ya böl: x > 5.\nSağlama: x = 6 için 36 > 30 doğru; x = 5 için 30 > 30 yanlış.\nCevap A."
},
{
  "id": "mat-es-107",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir kargo firması kütlesi 5 kg'dan az olan paketleri ucuz tarifeyle taşıyor.\n**Bir paketin kütlesi m kg ise bu paketin ucuz tarifeye girmesi hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "m ≥ 5",
    "m > 5",
    "m ≤ 5",
    "m < 5"
  ],
  "dogru": 3,
  "hatalar": [
    "Hem yön hem eşitlik yanlış: ≥ işareti 5 kg ve üstünü gösterir.",
    "Yönü ters aldın: '5'ten az' ifadesini '5'ten çok' diye okudun.",
    "Eşitliği ekledin: tam 5 kg'lık paket '5 kg'dan az' değildir.",
    null
  ],
  "aciklama": "'-den az' ifadesi sınırın kendisini kapsamaz ve küçük değerleri gösterir.\nAdım 1: Sınır 5 kg.\nAdım 2: Az demek küçük demektir, 5 kg'ın kendisi dahil değildir: m < 5.\nSağlama: 4,9 kg ucuz tarifede, 5 kg değil.\nCevap D."
},
{
  "id": "mat-es-108",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir oyunun puan sınırı sayı doğrusunda boyalı bölge olarak gösterilmiştir.\n**Boyalı bölgedeki en büyük tam sayı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"20\" y1=\"46\" x2=\"332\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"340\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "1",
    "2",
    "3",
    "4"
  ],
  "dogru": 1,
  "hatalar": [
    "Bir sayı geriye gittin: 2 de gösterilen bölgededir ve daha büyük bir tam sayı var.",
    null,
    "Boş yuvarlağı dolu sandın: 3 çözüme dahil değildir.",
    "Ok sola gidiyor; 4 gösterilen bölgenin dışında kalır."
  ],
  "aciklama": "Ok sola gidiyorsa değerler küçülür; boş yuvarlak sınırın dahil olmadığını gösterir.\nAdım 1: Gösterim x < 3 eşitsizliğidir.\nAdım 2: 3'ten küçük en büyük tam sayı 2'dir.\nSağlama: 2 < 3 doğru; 3 < 3 yanlış.\nCevap B."
},
{
  "id": "mat-es-109",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**x + 9 ≤ 4 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ −5",
    "x ≥ −5",
    "x ≤ 13",
    "x ≥ 13"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü değiştirdin: toplama-çıkarmada yön değişmez.",
    "9'u çıkarmak yerine ekledin: 4 + 9 = 13.",
    "Hem 9'u ekledin hem yönü çevirdin."
  ],
  "aciklama": "İki taraftan aynı sayıyı çıkarmak eşitsizliğin yönünü değiştirmez.\nAdım 1: İki taraftan 9 çıkar: x ≤ 4 − 9.\nAdım 2: x ≤ −5.\nSağlama: x = −6 için −6 + 9 = 3 ≤ 4 doğru; x = −4 için 5 ≤ 4 yanlış.\nCevap A."
},
{
  "id": "mat-es-110",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir marketteki kampanyada alışveriş tutarı 200 TL'yi geçen müşterilere indirim kuponu veriliyor.\n**Alışveriş tutarı t TL olan bir müşterinin kupon alması hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "t < 200",
    "t ≤ 200",
    "t > 200",
    "t ≥ 200"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönü ters aldın: bu, 200 TL'den az harcayanları gösterir.",
    "Hem yön hem eşitlik yanlış: 200 TL ve altı harcayanlar kupon almaz.",
    null,
    "Eşitliği ekledin: tam 200 TL harcayan müşteri 200 TL'yi geçmiş olmaz."
  ],
  "aciklama": "'Geçen' sınırın üstünü ifade eder ve sınırın kendisini kapsamaz.\nAdım 1: Sınır 200 TL.\nAdım 2: Geçmek büyük olmak demektir, 200 TL dahil değildir: t > 200.\nSağlama: 201 TL harcayan kupon alır, 200 TL harcayan almaz.\nCevap C."
},
{
  "id": "mat-es-111",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Sayı doğrusunda iki sınırı olan bir aralık boyanmıştır.\n**Bu aralığı gösteren çift taraflı eşitsizlik hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"93.33333333333334\" y1=\"40\" x2=\"93.33333333333334\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"93.33333333333334\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"146.66666666666669\" y1=\"40\" x2=\"146.66666666666669\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"146.66666666666669\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"253.33333333333334\" y1=\"40\" x2=\"253.33333333333334\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"253.33333333333334\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"306.6666666666667\" y1=\"40\" x2=\"306.6666666666667\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"306.6666666666667\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"413.3333333333333\" y1=\"40\" x2=\"413.3333333333333\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"413.3333333333333\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"466.6666666666667\" y1=\"40\" x2=\"466.6666666666667\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"466.6666666666667\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"146.66666666666669\" y1=\"46\" x2=\"405.3333333333333\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"146.66666666666669\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"413.3333333333333\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−2 < x < 3",
    "−2 ≤ x ≤ 3",
    "−2 < x ≤ 3",
    "−2 ≤ x < 3"
  ],
  "dogru": 3,
  "hatalar": [
    "İki yuvarlağı da boş sandın: −2'deki yuvarlak doludur, yani −2 dahildir.",
    "İki yuvarlağı da dolu sandın: 3'teki yuvarlak boştur, yani 3 dahil değildir.",
    "Yuvarlakları ters okudun: −2 dahil, 3 dahil değildir.",
    null
  ],
  "aciklama": "Çift taraflı eşitsizlikte her uç ayrı okunur: dolu yuvarlak ≤, boş yuvarlak < demektir.\nAdım 1: Sol uç −2, yuvarlak dolu: −2 ≤ x.\nAdım 2: Sağ uç 3, yuvarlak boş: x < 3.\nAdım 3: Birleştir: −2 ≤ x < 3.\nSağlama: −2 aralıkta, 3 aralıkta değildir.\nCevap D."
},
{
  "id": "mat-es-112",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**x − 6 > −2 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > −8",
    "x > 4",
    "x > 8",
    "x < 4"
  ],
  "dogru": 1,
  "hatalar": [
    "6'yı karşı tarafa geçirirken çıkardın: −2 − 6 = −8. Oysa 6 eklenir.",
    null,
    "İşaretleri karıştırdın: 6 + 2 = 8 buldun, oysa −2 + 6 = 4.",
    "Yönü değiştirdin: toplama-çıkarmada yön değişmez."
  ],
  "aciklama": "Çıkarılan sayıyı karşı tarafa geçirmek için o sayı eklenir.\nAdım 1: İki tarafa 6 ekle: x > −2 + 6.\nAdım 2: x > 4.\nSağlama: x = 5 için 5 − 6 = −1 > −2 doğru; x = 4 için −2 > −2 yanlış.\nCevap B."
},
{
  "id": "mat-es-113",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir okul servisinde en fazla 18 öğrenci taşınabilir. Serviste şu anda 7 öğrenci vardır.\n**Servise yeni binecek öğrenci sayısı n ise aşağıdaki eşitsizliklerden hangisi bu durumu gösterir?**",
  "gorsel": null,
  "secenekler": [
    "7 + n ≤ 18",
    "7 + n ≥ 18",
    "7 · n ≤ 18",
    "n − 7 ≤ 18"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: 'en fazla' bir üst sınırdır, ≥ ise 'en az' demektir.",
    "Toplam yerine çarpım yazdın: öğrenciler birbirine eklenir.",
    "Çıkarma kurdun: mevcut öğrencilerle yeni binenler toplanır."
  ],
  "aciklama": "'En fazla' üst sınırdır: toplam sayı 18'e eşit olabilir ama 18'i geçemez.\nAdım 1: Serviste olan ve binecek öğrencileri topla: 7 + n.\nAdım 2: Bu toplam en fazla 18 olacağından 7 + n ≤ 18.\nSağlama: n = 11 için toplam 18, uygun; n = 12 için 19, uygun değil.\nCevap A."
},
{
  "id": "mat-es-114",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Bu aralıkta kaç farklı tam sayı vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"93.33333333333334\" y1=\"40\" x2=\"93.33333333333334\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"93.33333333333334\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"146.66666666666669\" y1=\"40\" x2=\"146.66666666666669\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"146.66666666666669\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"253.33333333333334\" y1=\"40\" x2=\"253.33333333333334\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"253.33333333333334\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"306.6666666666667\" y1=\"40\" x2=\"306.6666666666667\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"306.6666666666667\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"413.3333333333333\" y1=\"40\" x2=\"413.3333333333333\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"413.3333333333333\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"466.6666666666667\" y1=\"40\" x2=\"466.6666666666667\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"466.6666666666667\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"154.66666666666669\" y1=\"46\" x2=\"413.3333333333333\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"146.66666666666669\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"413.3333333333333\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 2,
  "hatalar": [
    "Yalnızca 0 ve negatif tam sayıları saydın; 1 ve 2 de aralıktadır.",
    "2'yi saymadın: dolu yuvarlak, 2'nin de dahil olduğunu gösterir.",
    null,
    "−3'ü de saydın: boş yuvarlak, −3'ün dahil olmadığını gösterir."
  ],
  "aciklama": "Dolu yuvarlaktaki sayı aralığa dahildir, boş yuvarlaktaki sayı dahil değildir.\nAdım 1: Aralık −3 < x ≤ 2.\nAdım 2: Tam sayıları tek tek yaz: −2, −1, 0, 1, 2.\nAdım 3: Say: 5 tane.\nSık yapılan hata: Uçları hesaba katmayı unutmak ya da boş uçtaki sayıyı da saymak.\nCevap C."
},
{
  "id": "mat-es-115",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**−2x ≤ 8 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ −4",
    "x ≤ 4",
    "x ≥ 4",
    "x ≥ −4"
  ],
  "dogru": 3,
  "hatalar": [
    "Negatif sayıya bölerken yönü değiştirmedin: eşitsizlikte negatif sayıyla çarpma ya da bölmede yön çevrilir.",
    "Hem yönü çevirmedin hem işareti kaybettin: 8 ÷ (−2) = −4 olur.",
    "İşareti kaybettin: 8 ÷ (−2) = −4 iken 4 yazdın; yönü çevirmen doğruydu.",
    null
  ],
  "aciklama": "Eşitsizliğin iki tarafı negatif bir sayıya bölünürse (ya da çarpılırsa) yön değişir.\nAdım 1: İki tarafı −2'ye böl ve yönü çevir: x ≥ 8 ÷ (−2).\nAdım 2: x ≥ −4.\nSağlama: x = 0 için −2 · 0 = 0 ≤ 8 doğru; x = −5 için 10 ≤ 8 yanlış.\nCevap D."
},
{
  "id": "mat-es-116",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Selin'in 150 TL'si vardır. Tanesi 12 TL olan defterlerden x tane alacak ve alışveriş sonunda en az 30 TL'si kalmasını istiyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "150 − 12x ≤ 30",
    "150 − 12x ≥ 30",
    "12x − 150 ≥ 30",
    "12x + 30 ≥ 150"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü ters aldın: 'en az 30 TL kalsın' demek kalan paranın 30'a eşit ya da 30'dan büyük olması demektir.",
    null,
    "Çıkarmanın sırasını ters yazdın: kalan para 150 − 12x'tir, 12x − 150 değil.",
    "Harcamanın alt sınırını yazdın: 12x + 30 ≥ 150, 'en az 120 TL harca' demektir; oysa istenen kalan paradır."
  ],
  "aciklama": "Kalan para, başlangıç parasından harcamanın çıkarılmasıyla bulunur; 'en az 30 TL kalsın' alt sınır koyar.\nAdım 1: Harcama 12x TL, kalan para 150 − 12x TL.\nAdım 2: Kalan en az 30 olacak: 150 − 12x ≥ 30.\nSağlama: x = 10 için 150 − 120 = 30 uygun; x = 11 için 18 uygun değil.\nCevap B."
},
{
  "id": "mat-es-117",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**3x − 5 < 10 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < [[5|3]]",
    "x < 5",
    "x < 15",
    "x > 5"
  ],
  "dogru": 1,
  "hatalar": [
    "5'i yanlış yöne taşıdın: 10 − 5 = 5 yapıp 3'e böldün; oysa 5 eklenir.",
    null,
    "Son adımı atladın: 3x < 15 buldun ama 3'e bölmedin.",
    "Yönü değiştirdin: pozitif sayıya bölerken yön değişmez."
  ],
  "aciklama": "Önce toplama-çıkarma, sonra çarpma-bölme işleminin tersi uygulanır.\nAdım 1: İki tarafa 5 ekle: 3x < 15.\nAdım 2: İki tarafı 3'e böl: x < 5.\nSağlama: x = 4 için 12 − 5 = 7 < 10 doğru; x = 5 için 10 < 10 yanlış.\nCevap B."
},
{
  "id": "mat-es-118",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Bu gösterimde yer alan tam sayıların toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"168\" y1=\"46\" x2=\"400\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"160\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"400\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "12",
    "15",
    "18",
    "20"
  ],
  "dogru": 2,
  "hatalar": [
    "6'yı dışarıda bıraktın: 6'daki yuvarlak doludur, yani 6 dahildir.",
    "3'ü saymayı atladın: 3, 2'den büyük en küçük tam sayıdır.",
    null,
    "2'yi de ekledin: 2'deki yuvarlak boştur, yani 2 dahil değildir."
  ],
  "aciklama": "Boş uçtaki sayı toplama katılmaz, dolu uçtaki sayı katılır.\nAdım 1: Aralık 2 < x ≤ 6.\nAdım 2: Tam sayılar 3, 4, 5, 6.\nAdım 3: Topla: 3 + 4 + 5 + 6 = 18.\nSağlama: 2'yi eklersen 20 olur; ama 2 aralıkta değildir.\nCevap C."
},
{
  "id": "mat-es-119",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**−4x + 3 > 15 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < −[[9|2]]",
    "x > −3",
    "x < −3",
    "x > 3"
  ],
  "dogru": 2,
  "hatalar": [
    "3'ü karşıya geçirirken ekledin: 15 + 3 = 18. Oysa 15 − 3 = 12 olmalıydı.",
    "Negatif sayıya bölerken yönü değiştirmedin: eşitsizlikte negatif sayıyla çarpma ya da bölmede yön çevrilir.",
    null,
    "İşareti kaybettin: 12 ÷ (−4) = −3 olur, 3 değil."
  ],
  "aciklama": "Önce sabit terim karşıya geçer, sonra negatif katsayıya bölünürken yön çevrilir.\nAdım 1: İki taraftan 3 çıkar: −4x > 12.\nAdım 2: İki tarafı −4'e böl ve yönü çevir: x < −3.\nSağlama: x = −4 için −4 · (−4) + 3 = 19 > 15 doğru; x = −3 için 15 > 15 yanlış.\nCevap C."
},
{
  "id": "mat-es-120",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir spor salonunda üyelik ücreti aylık 80 TL sabit ücrete ek olarak ders başına 15 TL'dir. Cem'in aylık bütçesi en fazla 260 TL'dir.\n**Cem'in bir ayda katılacağı ders sayısı n için aşağıdaki eşitsizliklerden hangisi yazılır?**",
  "gorsel": null,
  "secenekler": [
    "80 + 15n < 260",
    "80 + 15n ≤ 260",
    "80n + 15 ≤ 260",
    "95n ≤ 260"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'en fazla 260 TL' demek tam 260 TL de olabilir.",
    null,
    "Sabit ücretle ders ücretinin yerini değiştirdin: 80 sabittir, 15 ders başınadır.",
    "Sabit ücreti de dersle çarptın: 95n, sabit ücretin her derste yenilendiğini varsayar."
  ],
  "aciklama": "Toplam ödeme = sabit ücret + ders ücreti. 'En fazla' üst sınırdır ve eşitliği içerir.\nAdım 1: n ders için ödeme: 80 + 15n.\nAdım 2: Bu tutar en fazla 260 TL: 80 + 15n ≤ 260.\nSağlama: n = 12 için 80 + 180 = 260 uygun; n = 13 için 275 uygun değil.\nCevap B."
},
{
  "id": "mat-es-121",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda, bir kutudaki kitap sayısı olan k için bir gösterim yapılmıştır.\n**Bu gösterim aşağıdaki cümlelerden hangisine uygundur?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"k için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"280\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"280\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "Kutuda en az 4 kitap vardır.",
    "Kutuda en çok 4 kitap vardır.",
    "Kutuda 4'ten fazla kitap vardır.",
    "Kutuda 4'ten az kitap vardır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: ok sağa gidiyor, yani 4 ve daha fazlası.",
    "Dolu yuvarlağı boş sandın: 4 de çözüme dahildir; 'fazla' ise 4'ü dışarıda bırakır.",
    "Hem yönü hem yuvarlağı yanlış okudun: ok sağa gider ve 4 dahildir."
  ],
  "aciklama": "Dolu yuvarlak ve sağa giden ok, 'sınır ve daha büyükleri' anlamına gelir; bu da 'en az' ifadesidir.\nAdım 1: Gösterim k ≥ 4.\nAdım 2: k ≥ 4, 'en az 4' demektir.\nSık yapılan hata: 'fazla' ile 'en az'ı karıştırmak; 'fazla' sınırı kapsamaz.\nCevap A."
},
{
  "id": "mat-es-122",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**[[x|2]] − 3 ≥ 1 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≥ −4",
    "x ≥ 4",
    "x ≤ 8",
    "x ≥ 8"
  ],
  "dogru": 3,
  "hatalar": [
    "3'ü karşıya geçirirken çıkardın: 1 − 3 = −2, 2 ile çarpınca −4.",
    "Çarpmayı atladın: [[x|2]] ≥ 4 buldun ama x için 2 ile çarpmak gerekir.",
    "Yönü değiştirdin: pozitif sayıyla çarparken yön değişmez.",
    null
  ],
  "aciklama": "Bölme, çarpmayla geri alınır; pozitif sayıyla çarpınca yön korunur.\nAdım 1: İki tarafa 3 ekle: [[x|2]] ≥ 4.\nAdım 2: İki tarafı 2 ile çarp: x ≥ 8.\nSağlama: x = 8 için 4 − 3 = 1 ≥ 1 doğru; x = 6 için 0 ≥ 1 yanlış.\nCevap D."
},
{
  "id": "mat-es-123",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**2x + 5 > 17 eşitsizliği aşağıdaki cümlelerden hangisiyle ifade edilir?**",
  "gorsel": null,
  "secenekler": [
    "Bir sayının 2 katının 5 eksiği 17'den büyüktür.",
    "Bir sayının 2 katının 5 fazlası 17'den küçüktür.",
    "Bir sayının 5 fazlasının 2 katı 17'den büyüktür.",
    "Bir sayının 2 katının 5 fazlası 17'den büyüktür."
  ],
  "dogru": 3,
  "hatalar": [
    "Çıkarma yazdın: 5 eksiği 2x − 5 olur.",
    "Yönü ters aldın: > işareti 'büyüktür' demektir.",
    "İşlem sırasını değiştirdin: 5 fazlasının 2 katı 2(x + 5) olur; burada önce 2 ile çarpılır, sonra 5 eklenir.",
    null
  ],
  "aciklama": "Sözel ifadede işlem sırası, cebirsel ifadedeki sırayla aynı olmalıdır.\nAdım 1: 2x, sayının 2 katıdır.\nAdım 2: 2x + 5, bunun 5 fazlasıdır.\nAdım 3: > işareti 'büyüktür' demektir.\nSık yapılan hata: '5 fazlasının 2 katı' ile '2 katının 5 fazlası'nı karıştırmak.\nCevap D."
},
{
  "id": "mat-es-124",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda t değerleri gösterilmiştir.\n**Aşağıdakilerden hangisi gösterilen aralıktaki bir t değeridir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"t için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"74.28571428571428\" y1=\"40\" x2=\"74.28571428571428\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"74.28571428571428\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"108.57142857142857\" y1=\"40\" x2=\"108.57142857142857\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"108.57142857142857\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"142.85714285714286\" y1=\"40\" x2=\"142.85714285714286\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"142.85714285714286\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"177.14285714285714\" y1=\"40\" x2=\"177.14285714285714\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"177.14285714285714\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"211.42857142857142\" y1=\"40\" x2=\"211.42857142857142\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"211.42857142857142\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"245.71428571428572\" y1=\"40\" x2=\"245.71428571428572\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"245.71428571428572\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"314.2857142857143\" y1=\"40\" x2=\"314.2857142857143\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"314.2857142857143\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"348.57142857142856\" y1=\"40\" x2=\"348.57142857142856\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"348.57142857142856\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"382.85714285714283\" y1=\"40\" x2=\"382.85714285714283\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"382.85714285714283\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"417.14285714285717\" y1=\"40\" x2=\"417.14285714285717\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"417.14285714285717\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"451.42857142857144\" y1=\"40\" x2=\"451.42857142857144\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"451.42857142857144\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"485.7142857142857\" y1=\"40\" x2=\"485.7142857142857\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"485.7142857142857\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"116.57142857142857\" y1=\"46\" x2=\"451.42857142857144\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"108.57142857142857\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"451.42857142857144\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−3,5",
    "−3",
    "7",
    "7,5"
  ],
  "dogru": 2,
  "hatalar": [
    "−3,5, −3'ün solunda kalır; aralık −3'ten büyük değerlerde başlıyor.",
    "Boş yuvarlağı dolu sandın: −3 dahil değildir.",
    null,
    "7,5, 7'nin sağında kalır; aralığın dışındadır."
  ],
  "aciklama": "Aralık −3 < t ≤ 7 biçimindedir.\nAdım 1: Sol uçtaki yuvarlak boş: −3 aralıkta değildir; −3,5 de −3'ün solunda kaldığı için dışarıdadır.\nAdım 2: Sağ uçtaki yuvarlak dolu: 7 aralıktadır.\nAdım 3: 7,5 sayısı 7'nin sağında kalır, aralığın dışındadır.\nSık yapılan hata: Sınır sayıyı kapsayıp kapsamadığına bakmadan karar vermek.\nCevap C."
},
{
  "id": "mat-es-125",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**5 − x > 2 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < 3",
    "x > 3",
    "x < 7",
    "x > 7"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Negatif katsayıda yönü değiştirmedin: −x > −3 iken iki tarafı −1 ile çarpınca yön çevrilir.",
    "5'i karşıya geçirirken ekledin: 2 + 5 = 7. Oysa 5 çıkarılır (2 − 5 = −3).",
    "Hem 5'i ekledin hem yönü çevirmedin."
  ],
  "aciklama": "x'in önündeki eksi işareti, −1 ile çarpmak demektir; bu yüzden yön çevrilir.\nAdım 1: İki taraftan 5 çıkar: −x > −3.\nAdım 2: İki tarafı −1 ile çarp ve yönü çevir: x < 3.\nSağlama: x = 2 için 5 − 2 = 3 > 2 doğru; x = 3 için 2 > 2 yanlış.\nCevap A."
},
{
  "id": "mat-es-201",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir kütüphane görevlisi her rafa 14 kitap yerleştiriyor. Yerleştirilen toplam kitap sayısı 100'ü __geçmemelidir__.\n**Kullanılan raf sayısı r olduğuna göre aşağıdaki eşitsizliklerden hangisi yazılır?**",
  "gorsel": null,
  "secenekler": [
    "14r > 100",
    "14r ≥ 100",
    "14r < 100",
    "14r ≤ 100"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters aldın: bu, kitap sayısının 100'ü geçtiğini gösterir.",
    "Hem yön hem eşitlik yanlış: 100 ve üstü 'geçmemelidir' ifadesine aykırıdır.",
    "Eşitliği dışarıda bıraktın: tam 100 kitap koymak 100'ü geçmek sayılmaz.",
    null
  ],
  "aciklama": "Her rafta 14 kitap olduğuna göre r rafta 14r kitap vardır. 'Geçmemelidir' üst sınırdır ve sınırın kendisini kapsar.\nAdım 1: Toplam kitap: 14r.\nAdım 2: Bu sayı en fazla 100 olabilir: 14r ≤ 100.\nSağlama: r = 7 için 98 uygun; r = 8 için 112 uygun değil.\nCevap D."
},
{
  "id": "mat-es-202",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir spor kulübü, sporcu adaylarının 4 yıl sonra en az 18 yaşında olmasını şart koşuyor. Başvuran Ayşe'nin bugünkü yaşı x'tir.\n**Bu şartı gösteren eşitsizlik aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x + 4 ≥ 18",
    "x − 4 ≥ 18",
    "x + 4 ≤ 18",
    "x − 4 ≤ 18"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "4 yıl öncesini hesapladın: 4 yıl sonrası için 4 eklenir, çıkarılmaz.",
    "Yönü ters aldın: 'en az' ifadesi ≥ ile gösterilir.",
    "Hem çıkarma hem yön hatası yaptın."
  ],
  "aciklama": "Gelecekteki yaş, bugünkü yaşa yıl eklenerek bulunur. 'En az' alt sınırdır ve sınırı kapsar.\nAdım 1: 4 yıl sonraki yaş: x + 4.\nAdım 2: En az 18 olacak: x + 4 ≥ 18.\nSağlama: x = 14 için 18 uygun; x = 13 için 17 uygun değil.\nCevap A."
},
{
  "id": "mat-es-203",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir otobüste bulunabilecek yolcu sayısı y, aşağıdaki sayı doğrusunda gösterilen kurala göre belirlenmiştir.\n**Bu gösterim aşağıdaki cümlelerden hangisine uygundur?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"y için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"120\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">20</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">30</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">40</text><line x1=\"440\" y1=\"40\" x2=\"440\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"440\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">50</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">60</text><line x1=\"240\" y1=\"46\" x2=\"352\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"240\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"360\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "Otobüste en az 25, en fazla 40 yolcu bulunur.",
    "Otobüste 25'ten fazla, 40'tan az yolcu bulunur.",
    "Otobüste en az 25, 40'tan az yolcu bulunur.",
    "Otobüste 25'ten fazla, en fazla 40 yolcu bulunur."
  ],
  "dogru": 2,
  "hatalar": [
    "40'taki boş yuvarlağı dolu sandın: 40 dahil değildir.",
    "25'teki dolu yuvarlağı boş sandın: 25 dahildir.",
    null,
    "Yuvarlakları ters okudun: 25 dahil, 40 dahil değildir."
  ],
  "aciklama": "Gösterimde 25'teki yuvarlak dolu, 40'taki yuvarlak boştur.\nAdım 1: 25 dahil: 'en az 25'.\nAdım 2: 40 dahil değil: '40'tan az'.\nAdım 3: Birleştir: 25 ≤ y < 40.\nSık yapılan hata: Uçlardaki yuvarlakların dolu mu boş mu olduğuna bakmamak.\nCevap C."
},
{
  "id": "mat-es-204",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Aşağıdaki sayılardan hangisi gösterilen değerler arasında __değildir__?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"20\" y1=\"46\" x2=\"280\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"280\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2",
    "1",
    "0",
    "−1"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Dolu yuvarlağı boş sandın: 1 çözüme dahildir.",
    "0, 1'in solundadır; gösterilen bölgededir.",
    "−1, 1'in solundadır; gösterilen bölgededir."
  ],
  "aciklama": "Gösterim x ≤ 1 eşitsizliğidir: 1 ve ondan küçük sayılar çözümdür.\nAdım 1: Ok sola gidiyor ve 1'deki yuvarlak dolu: 1 dahil.\nAdım 2: 1, 0 ve −1 çözümdür.\nAdım 3: 2, 1'den büyüktür ve çözüm değildir.\nSık yapılan hata: Soruda 'değildir' sözünü gözden kaçırmak.\nCevap A."
},
{
  "id": "mat-es-205",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Gösterilen aralıktaki en küçük ve en büyük tam sayının toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"83.63636363636363\" y1=\"40\" x2=\"83.63636363636363\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"83.63636363636363\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"127.27272727272727\" y1=\"40\" x2=\"127.27272727272727\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"127.27272727272727\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"170.9090909090909\" y1=\"40\" x2=\"170.9090909090909\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"170.9090909090909\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"214.54545454545453\" y1=\"40\" x2=\"214.54545454545453\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"214.54545454545453\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"258.1818181818182\" y1=\"40\" x2=\"258.1818181818182\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"258.1818181818182\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"301.8181818181818\" y1=\"40\" x2=\"301.8181818181818\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301.8181818181818\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"345.45454545454544\" y1=\"40\" x2=\"345.45454545454544\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"345.45454545454544\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"389.09090909090907\" y1=\"40\" x2=\"389.09090909090907\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"389.09090909090907\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"432.72727272727275\" y1=\"40\" x2=\"432.72727272727275\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"432.72727272727275\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"476.3636363636364\" y1=\"40\" x2=\"476.3636363636364\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"476.3636363636364\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"127.27272727272727\" y1=\"46\" x2=\"389.09090909090907\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"127.27272727272727\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"389.09090909090907\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "6",
    "2",
    "−1",
    "−2"
  ],
  "dogru": 3,
  "hatalar": [
    "Eksi işaretini yok sayıp 4 + 2 yaptın; oysa en küçük tam sayı −4'tür.",
    "Toplamak yerine çıkardın: 4 − 2 = 2. Oysa −4 + 2 hesaplanmalıdır.",
    "En büyük tam sayı olarak 3'ü aldın: −4 + 3 = −1. Aralık 2'de biter, 3 aralığın dışındadır.",
    null
  ],
  "aciklama": "Aralık −4 ≤ x ≤ 2 biçimindedir.\nAdım 1: En küçük tam sayı −4'tür (sol uç dolu, dahil).\nAdım 2: En büyük tam sayı 2'dir (sağ uç da dolu, dahil).\nAdım 3: Topla: −4 + 2 = −2.\nSağlama: Sağ uç boş olsaydı en büyük tam sayı 1 olurdu; ama 2'deki yuvarlak doludur.\nCevap D."
},
{
  "id": "mat-es-206",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**−3x + 4 ≤ −8 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ −4",
    "x ≥ −4",
    "x ≤ 4",
    "x ≥ 4"
  ],
  "dogru": 3,
  "hatalar": [
    "Hem işareti kaybettin hem yönü çevirmedin: −12 ÷ (−3) = 4 olur.",
    "İşareti kaybettin: −12 ÷ (−3) = +4 olur, −4 değil.",
    "Negatif sayıya bölerken yönü değiştirmedin: eşitsizlikte negatif sayıyla çarpma ya da bölmede yön çevrilir.",
    null
  ],
  "aciklama": "Önce sabit terimi karşıya geçir, sonra negatif katsayıya böl ve yönü çevir.\nAdım 1: İki taraftan 4 çıkar: −3x ≤ −12.\nAdım 2: İki tarafı −3'e böl ve yönü çevir: x ≥ 4.\nSağlama: x = 5 için −15 + 4 = −11 ≤ −8 doğru; x = 3 için −5 ≤ −8 yanlış.\nCevap D."
},
{
  "id": "mat-es-207",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**[[x − 3|2]] > 4 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > 7",
    "x > 8",
    "x > 11",
    "x < 11"
  ],
  "dogru": 2,
  "hatalar": [
    "Çarpmayı atladın: x − 3 > 4 bulup 3'ü ekledin.",
    "3'ü eklemeyi atladın: 2 ile çarpıp x > 8 buldun.",
    null,
    "Yönü değiştirdin: pozitif sayıyla çarpılırken yön değişmez."
  ],
  "aciklama": "Bölme, çarpmayla geri alınır; sonra çıkarılan sayı eklenir.\nAdım 1: İki tarafı 2 ile çarp: x − 3 > 8.\nAdım 2: İki tarafa 3 ekle: x > 11.\nSağlama: x = 12 için [[9|2]] = 4,5 > 4 doğru; x = 11 için 4 > 4 yanlış.\nCevap C."
},
{
  "id": "mat-es-208",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir sayının 3 katının 8 eksiği 19'dan büyüktür.\n**Bu koşulu sağlayan en küçük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "4",
    "9",
    "10",
    "27"
  ],
  "dogru": 2,
  "hatalar": [
    "8'i çıkardın: 19 − 8 = 11, 11 ÷ 3 yaklaşık 3,67 ve sonraki tam sayı 4.",
    "Sınırı dahil ettin: x > 9 olduğundan 9 çözüm değildir.",
    null,
    "Son adımı atladın: 3x > 27 iken 3'e bölmedin."
  ],
  "aciklama": "'Büyüktür' sınırı kapsamaz, bu yüzden sınırın hemen sağındaki tam sayı aranır.\nAdım 1: Eşitsizliği yaz: 3x − 8 > 19.\nAdım 2: 8 ekle: 3x > 27.\nAdım 3: 3'e böl: x > 9.\nAdım 4: 9'dan büyük en küçük tam sayı 10'dur.\nSağlama: x = 10 için 30 − 8 = 22 > 19 doğru; x = 9 için 19 > 19 yanlış.\nCevap C."
},
{
  "id": "mat-es-209",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Elif, kare biçimindeki fotoğraf çerçevesini rafın üzerine yerleştirecek. Rafta bu çerçeveye ayrılan şerit için çerçevenin çevresi 36 cm'yi aşmamalıdır. Çerçevenin bir kenarı a cm'dir.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "4a < 36",
    "4a ≤ 36",
    "2a ≤ 36",
    "a + 4 ≤ 36"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: çevre tam 36 cm olabilir.",
    null,
    "Yarım çevreyi yazdın: karenin çevresi 4 kenarın toplamıdır, yani 4a.",
    "Kenar sayısını toplama olarak ekledin: çevre 4 · a ile bulunur."
  ],
  "aciklama": "Karenin dört kenarı eşittir; çevresi 4a'dır. 'Aşmamalı' üst sınırdır ve sınırı kapsar.\nAdım 1: Çevre: 4a.\nAdım 2: En fazla 36 cm: 4a ≤ 36.\nSağlama: a = 9 için çevre 36 uygun; a = 10 için 40 uygun değil.\nCevap B."
},
{
  "id": "mat-es-210",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir taksi durağında açılış ücreti 10 TL, her kilometre için 4 TL alınıyor. Gülay'ın cebinde 70 TL var.\n**Gülay bu taksiyle en fazla kaç kilometre yol gidebilir? (Yol tam kilometre olarak ücretlendiriliyor.)**",
  "gorsel": null,
  "secenekler": [
    "14",
    "15",
    "17",
    "20"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: tam 70 TL ödemek mümkündür.",
    null,
    "Açılış ücretini unuttun: 70 ÷ 4 = 17,5 ve 17 buldun.",
    "Açılışı çıkarmak yerine ekledin: (70 + 10) ÷ 4 = 20."
  ],
  "aciklama": "Ücret = açılış + kilometre ücreti. Cebindeki para bu ücretten az olmamalıdır.\nAdım 1: x km için ücret: 10 + 4x ≤ 70.\nAdım 2: 10 çıkar: 4x ≤ 60.\nAdım 3: 4'e böl: x ≤ 15.\nSağlama: 15 km için 10 + 60 = 70 TL; 16 km için 74 TL olur.\nCevap B."
},
{
  "id": "mat-es-211",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Aşağıdaki sayılardan hangisi gösterilen aralıkta __bulunmaz__?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"108.57142857142857\" y1=\"40\" x2=\"108.57142857142857\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"108.57142857142857\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"177.14285714285714\" y1=\"40\" x2=\"177.14285714285714\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"177.14285714285714\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"245.71428571428572\" y1=\"40\" x2=\"245.71428571428572\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"245.71428571428572\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"314.2857142857143\" y1=\"40\" x2=\"314.2857142857143\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"314.2857142857143\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"382.85714285714283\" y1=\"40\" x2=\"382.85714285714283\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"382.85714285714283\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"451.42857142857144\" y1=\"40\" x2=\"451.42857142857144\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"451.42857142857144\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"108.57142857142857\" y1=\"46\" x2=\"374.85714285714283\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"108.57142857142857\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"382.85714285714283\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "0",
    "[[7|2]]",
    "3,9",
    "4"
  ],
  "dogru": 3,
  "hatalar": [
    "Dolu yuvarlağı boş sandın: 0 aralığa dahildir.",
    "[[7|2]] = 3,5 sayısı 4'ten küçüktür, aralıktadır.",
    "3,9 sayısı 4'ten küçüktür; tam sayı olmasa da aralıktadır.",
    null
  ],
  "aciklama": "Aralık 0 ≤ x < 4 biçimindedir; tam sayı olmayan sayılar da aralığa dahildir.\nAdım 1: 0, dolu uçtur: aralıkta.\nAdım 2: 3,5 ve 3,9 sayıları 0 ile 4 arasındadır.\nAdım 3: 4, boş uçtur: aralıkta değil.\nSık yapılan hata: Aralıkta yalnızca tam sayıları aramak.\nCevap D."
},
{
  "id": "mat-es-212",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 2,
  "soru": "Bir sayının 2 katının 6 eksiği 20'den __az değildir__.\n**Bu cümle aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "2x − 6 < 20",
    "2x − 6 > 20",
    "2x − 6 ≤ 20",
    "2x − 6 ≥ 20"
  ],
  "dogru": 3,
  "hatalar": [
    "'Az değildir' ifadesini 'azdır' diye okudun.",
    "Eşitliği dışarıda bıraktın: 'az değildir' büyük ya da eşit demektir.",
    "Yönü ters aldın: ≤ işareti 'çok değildir' anlamına gelir.",
    null
  ],
  "aciklama": "'-den az değildir', 'büyük ya da eşittir' demektir.\nAdım 1: 2 katının 6 eksiği: 2x − 6.\nAdım 2: Az olmaması, küçük olmaması demektir: ≥.\nAdım 3: 2x − 6 ≥ 20.\nSağlama: 2x − 6 = 20 olan x = 13 de koşulu sağlar; bu yüzden eşitlik vardır.\nCevap D."
},
{
  "id": "mat-es-213",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 2,
  "soru": "**−5x − 2 ≥ 13 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ −3",
    "x ≥ −3",
    "x ≤ −[[11|5]]",
    "x ≥ 3"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Negatif sayıya bölerken yönü değiştirmedin: eşitsizlikte negatif sayıyla çarpma ya da bölmede yön çevrilir.",
    "−2'yi yanlış taşıdın: 13 − 2 = 11 buldun; oysa 2 karşıya eklenir: 13 + 2 = 15.",
    "İşareti kaybettin ve yönü çevirmedin: 15 ÷ (−5) = −3 olur."
  ],
  "aciklama": "Önce sabit terim karşıya geçer, sonra negatif katsayıya bölünürken yön çevrilir.\nAdım 1: İki tarafa 2 ekle: −5x ≥ 15.\nAdım 2: İki tarafı −5'e böl ve yönü çevir: x ≤ −3.\nSağlama: x = −4 için 20 − 2 = 18 ≥ 13 doğru; x = −2 için 8 ≥ 13 yanlış.\nCevap A."
},
{
  "id": "mat-es-214",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir kargo firması paket gönderiminde 35 TL sabit işlem bedeli almakta, buna ek olarak her kilogram için 12 TL ücret eklemektedir. Ayşe, arkadaşına göndereceği paket için en fazla 150 TL ödeyebilir. Paketin kütlesi tam kilogram olarak ölçülmektedir.\n**Ayşe'nin gönderebileceği paket en fazla kaç kilogram olabilir?**",
  "gorsel": null,
  "secenekler": [
    "6",
    "9",
    "10",
    "12"
  ],
  "dogru": 1,
  "hatalar": [
    "35 TL'yi iki kez çıkardın: 150 − 70 = 80 ve 80 ÷ 12 yaklaşık 6,7 eder.",
    null,
    "9,58'i yukarı yuvarladın: 10 kg için ücret 35 + 120 = 155 TL olur, bütçeyi aşar.",
    "Sabit bedeli unuttun: 150 ÷ 12 = 12,5 hesaplayıp aşağı yuvarladın; oysa önce 35 TL çıkarılmalıdır."
  ],
  "aciklama": "Toplam ücret, sabit bedel ile kilogram ücretlerinin toplamıdır; 'en fazla' üst sınır koyar ve eşitliği içerir.\nAdım 1: k kilogram için ücret: 35 + 12k.\nAdım 2: En fazla 150 TL: 35 + 12k ≤ 150.\nAdım 3: İki taraftan 35 çıkar: 12k ≤ 115.\nAdım 4: İki tarafı 12'ye böl: k ≤ 9,58...\nAdım 5: Kütle tam kilogram olduğundan en fazla 9 kg.\nSağlama: 9 kg için 35 + 108 = 143 TL uygundur; 10 kg için 35 + 120 = 155 TL bütçeyi aşar.\nCevap B."
},
{
  "id": "mat-es-215",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Duru, deneme sınavına hazırlanırken ilk 4 gün her gün 25 soru çözdü. Toplamda en az 200 soru çözmek istiyor ve kalan 3 günün her birinde x soru çözmeyi planlıyor.\n**Bu plan aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "100 + 3x ≥ 200",
    "100 + 3x ≤ 200",
    "25 + 3x ≥ 200",
    "100x + 3 ≥ 200"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: 'en az 200' demek toplamın 200'e eşit ya da 200'den büyük olmasıdır.",
    "İlk 4 günün toplamını (25 · 4 = 100) almadın, yalnızca 25 yazdın.",
    "Çarpanları yanlış yere koydun: 100 sabittir, x ise kalan 3 günde tekrarlanır (3x)."
  ],
  "aciklama": "Toplam soru sayısı, geçmişte çözülenlerle gelecekte çözülecekleri toplayarak bulunur.\nAdım 1: İlk 4 gün: 4 · 25 = 100 soru.\nAdım 2: Kalan 3 gün: 3x soru.\nAdım 3: Toplam en az 200: 100 + 3x ≥ 200.\nSağlama: x = 34 için 202 uygun; x = 33 için 199 uygun değil.\nCevap A."
},
{
  "id": "mat-es-216",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir yüzme yarışmasına katılım koşulu, yaş değişkeni y için aşağıdaki sayı doğrusunda gösterilmiştir. Yaşları 13, 14, 16, 18 ve 19 olan beş çocuk yarışmaya başvuruyor.\n**Bu çocuklardan kaçı yarışmaya katılabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"y için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">11</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">12</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">13</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">14</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">15</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">16</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">17</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">18</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">19</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">20</text><line x1=\"232\" y1=\"46\" x2=\"424\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"232\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"424\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2",
    "3",
    "4",
    "5"
  ],
  "dogru": 1,
  "hatalar": [
    "18'deki dolu yuvarlağı boş sandın: 18 yaşındaki çocuk da katılabilir; yalnızca 14 ve 16 yaşındakileri saydın.",
    null,
    "Aralığın dışında kalan 13 ya da 19 yaşındakilerden birini de saydın.",
    "Yuvarlaklara bakmadan herkesi saydın: 13 ve 19 yaşındakiler aralığın dışındadır."
  ],
  "aciklama": "Gösterim 14 ≤ y ≤ 18 koşuludur: iki uç da dahildir.\nAdım 1: 13 < 14 olduğundan katılamaz.\nAdım 2: 14 dolu uçtur, katılır.\nAdım 3: 16 aralığın içindedir, katılır.\nAdım 4: 18 de dolu uçtur, katılır.\nAdım 5: 19 > 18 olduğundan katılamaz.\nSağlama: Katılabilenler 14, 16, 18 olmak üzere 3 çocuktur.\nCevap B."
},
{
  "id": "mat-es-217",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Zeynep, 3x − 4 < 8 eşitsizliğini çözmüş ve çözümü aşağıdaki sayı doğrusunda göstermiştir.\n**Zeynep'in gösteriminde hangi hata vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"Zeynep'in gösterimi\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"120\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"440\" y1=\"40\" x2=\"440\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"440\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"20\" y1=\"46\" x2=\"360\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"360\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "4'teki yuvarlak boş çizilmeliydi.",
    "Ok yönü sağa doğru çizilmeliydi.",
    "Sınır değeri 4 değil, 12 olmalıydı.",
    "Sınır değeri 4 değil, [[4|3]] olmalıydı."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü çevirdin: 3 pozitif olduğundan yön korunur, ok sola gitmelidir.",
    "3x < 12 aşamasını çözümün sonu sandın: 3'e bölünce sınır 4 olur.",
    "−4'ü karşıya geçirirken çıkardın: 8 − 4 = 4 ve 3'e bölünce [[4|3]]; oysa +4 eklenir."
  ],
  "aciklama": "Önce çözümü doğru bul, sonra gösterimle karşılaştır.\nAdım 1: İki tarafa 4 ekle: 3x < 12.\nAdım 2: İki tarafı 3'e böl: x < 4.\nAdım 3: '<' sınırı kapsamaz, yuvarlak boş olmalıdır; ok sola gider.\nAdım 4: Zeynep'in sınırı ve oku doğru, yuvarlağı yanlış.\nSık yapılan hata: < ve > için dolu yuvarlak çizmek.\nCevap A."
},
{
  "id": "mat-es-218",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir su deposundaki su miktarı, t dakika sonra (150 − 6t) litredir. Depodaki su 30 litreden az olduğunda uyarı lambası yanıyor. Süre tam dakika olarak ölçülüyor.\n**Lambanın yanması için geçmesi gereken süre en az kaç dakikadır?**",
  "gorsel": null,
  "secenekler": [
    "19",
    "20",
    "21",
    "25"
  ],
  "dogru": 2,
  "hatalar": [
    "Negatif sayıya bölerken yönü çevirmedin: t < 20 bulup 19 aldın.",
    "Eşitliği dahil ettin: t = 20 iken su tam 30 litredir, 30'dan az değildir.",
    null,
    "30 litrelik sınırı hesaba katmadın: 150 ÷ 6 = 25 depoyu tamamen boşaltır."
  ],
  "aciklama": "Lamba, su 30 litreden az olunca yanar; tam 30 litrede yanmaz.\nAdım 1: Koşul: 150 − 6t < 30.\nAdım 2: 150 çıkar: −6t < −120.\nAdım 3: −6'ya böl ve yönü çevir: t > 20.\nAdım 4: 20'den büyük en küçük tam sayı 21'dir.\nSağlama: t = 21 için 150 − 126 = 24 < 30; t = 20 için tam 30.\nCevap C."
},
{
  "id": "mat-es-219",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Mina'nın ilk iki matematik sınavından aldığı notlar 70 ve 84'tür. Üç sınavın not ortalamasının en az 80 olmasını istiyor.\n**Mina'nın üçüncü sınavdan alması gereken not en az kaç olmalıdır?**",
  "gorsel": null,
  "secenekler": [
    "80",
    "86",
    "156",
    "170"
  ],
  "dogru": 1,
  "hatalar": [
    "Hedef ortalamayı üçüncü notun kendisi sandın.",
    null,
    "Hedef toplam 240'tı; yalnızca 84'ü çıkardın, 70'i unuttun.",
    "Hedef toplam 240'tı; yalnızca 70'i çıkardın, 84'ü unuttun."
  ],
  "aciklama": "Ortalama, notların toplamının sınav sayısına bölümüdür.\nAdım 1: Koşul: [[70 + 84 + n|3]] ≥ 80.\nAdım 2: İki tarafı 3 ile çarp: 154 + n ≥ 240.\nAdım 3: 154 çıkar: n ≥ 86.\nSağlama: (70 + 84 + 86) ÷ 3 = 240 ÷ 3 = 80.\nCevap B."
},
{
  "id": "mat-es-220",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Tolga bir kafede tanesi 45 TL olan kahveden 3 tane aldı ve tanesi 60 TL olan tatlılardan x tane almak istiyor. Toplam hesabın 400 TL'yi __geçmemesini__ istiyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "135 + 60x < 400",
    "135x + 60 ≤ 400",
    "195x ≤ 400",
    "135 + 60x ≤ 400"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: hesap tam 400 TL olabilir.",
    "Tutarları yanlış çarptın: 135 sabittir (3 kahve), 60 ise her tatlı için eklenir.",
    "Tek bir birim fiyat gibi topladın: 135 + 60 = 195'i x ile çarpmak bu durumu vermez.",
    null
  ],
  "aciklama": "Toplam hesap = kahve tutarı + tatlı tutarı. 'Geçmemesi' üst sınırdır ve sınırı kapsar.\nAdım 1: Kahve tutarı: 3 · 45 = 135 TL.\nAdım 2: Tatlı tutarı: 60x TL.\nAdım 3: Toplam en fazla 400: 135 + 60x ≤ 400.\nSağlama: x = 4 için 375 uygun; x = 5 için 435 uygun değil.\nCevap D."
},
{
  "id": "mat-es-221",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir sayının −4 katının 3 eksiği 21'den __küçük değildir__.\n**Bu koşulu sağlayan en büyük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−7",
    "−6",
    "−5",
    "6"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'küçük değildir' büyük ya da eşit demektir; −6 çözüme dahildir.",
    null,
    "3'ü karşıya geçirirken çıkardın: 21 − 3 = 18 ve x ≤ −4,5 bulup −5 aldın.",
    "İşareti kaybettin: 24 ÷ (−4) = −6 olur, 6 değil."
  ],
  "aciklama": "'Küçük değildir', 'büyük ya da eşittir' demektir.\nAdım 1: Koşul: −4x − 3 ≥ 21.\nAdım 2: İki tarafa 3 ekle: −4x ≥ 24.\nAdım 3: −4'e böl ve yönü çevir: x ≤ −6.\nAdım 4: −6'dan küçük ya da eşit en büyük tam sayı −6'dır.\nSağlama: x = −6 için 24 − 3 = 21 ≥ 21 doğru.\nCevap B."
},
{
  "id": "mat-es-222",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Gösterilen aralıktaki asal sayıların toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"80\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"120\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"240\" y1=\"40\" x2=\"240\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"240\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"320\" y1=\"40\" x2=\"320\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"320\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"440\" y1=\"40\" x2=\"440\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"440\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"480\" y1=\"40\" x2=\"480\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"480\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">11</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">12</text><line x1=\"168\" y1=\"46\" x2=\"472\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"160\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"480\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2",
    "7",
    "12",
    "15"
  ],
  "dogru": 2,
  "hatalar": [
    "Asal sayıların toplamı yerine kaç tane olduklarını yazdın: 5 ve 7 iki tanedir, toplamları 12'dir.",
    "Asal sayıları değil, aralıktaki tam sayıları saydın: 4'ten 10'a kadar 7 tam sayı vardır.",
    null,
    "3'ü de ekledin: 3'teki yuvarlak boştur, yani 3 aralığa dahil değildir (3 + 5 + 7 = 15)."
  ],
  "aciklama": "Asal sayı, 1'den büyük olup yalnızca 1'e ve kendisine bölünebilen doğal sayıdır.\nAdım 1: İki uçtaki yuvarlak da boş: 3 < x < 11.\nAdım 2: Aralıktaki tam sayılar: 4, 5, 6, 7, 8, 9, 10.\nAdım 3: Bunlardan asal olanlar 5 ve 7'dir (4, 6, 8, 10 çifttir; 9 = 3 · 3).\nAdım 4: Topla: 5 + 7 = 12.\nSık yapılan hata: 3 ve 11 asal olduğu için bunları da toplamaya katmak; oysa boş uçlar dahil değildir.\nCevap C."
},
{
  "id": "mat-es-223",
  "kazanim": "M.8.2.3.2",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda t tam sayısının alabileceği değerler gösterilmiştir.\n**t tam sayı olduğuna göre 2t + 1 ifadesinin alabileceği en büyük değer kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"t için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"136\" y1=\"46\" x2=\"416\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"136\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"424\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "4",
    "6",
    "7",
    "9"
  ],
  "dogru": 2,
  "hatalar": [
    "2 ile çarpmayı atladın: 3 + 1 = 4.",
    "+1'i atladın: 2 · 3 = 6.",
    null,
    "4'ü de dahil ettin: 2 · 4 + 1 = 9; boş yuvarlak 4'ün dahil olmadığını gösterir."
  ],
  "aciklama": "İfadenin en büyük değeri, t'nin en büyük değeriyle bulunur.\nAdım 1: Aralık −2 ≤ t < 4.\nAdım 2: En büyük tam sayı t = 3.\nAdım 3: 2 · 3 + 1 = 7.\nSağlama: t = 4 aralıkta olmadığından 9 elde edilemez.\nCevap C."
},
{
  "id": "mat-es-224",
  "kazanim": "M.8.2.3.3",
  "kademe": 2,
  "zorluk": 3,
  "soru": "**−2x + 5 ≥ −7 eşitsizliğini sağlayan pozitif tam sayılar kaç tanedir?**",
  "gorsel": null,
  "secenekler": [
    "5",
    "6",
    "7",
    "12"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: x = 6 da çözümdür.",
    null,
    "0'ı da saydın: 0 pozitif tam sayı değildir.",
    "Son adımı atladın: −2x ≥ −12 iken −2'ye bölmedin."
  ],
  "aciklama": "Negatif katsayıya bölünce yön çevrilir; sonra çözüm kümesindeki pozitif tam sayılar sayılır.\nAdım 1: İki taraftan 5 çıkar: −2x ≥ −12.\nAdım 2: −2'ye böl ve yönü çevir: x ≤ 6.\nAdım 3: Pozitif tam sayılar 1, 2, 3, 4, 5, 6: 6 tane.\nSağlama: x = 6 için −12 + 5 = −7 ≥ −7 doğru.\nCevap B."
},
{
  "id": "mat-es-225",
  "kazanim": "M.8.2.3.1",
  "kademe": 2,
  "zorluk": 3,
  "soru": "Bir otoyolda trafik akışını düzenlemek için araçların hızı saatte 40 km'den __az olmamalı__ ve 110 km'yi __aşmamalıdır__. Bir sürücü, sabit hızla 2 saatte x km yol alıyor.\n**Bu sürücünün kurala uyduğunu gösteren eşitsizlik aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "40 ≤ [[x|2]] ≤ 110",
    "40 < [[x|2]] < 110",
    "40 ≤ [[x|2]] < 110",
    "40 < [[x|2]] ≤ 110"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "İki sınırı da dışarıda bıraktın: 40 km/sa ve 110 km/sa hızlar kurala uyar.",
    "110'u dışarıda bıraktın: 'aşmamalıdır' 110'a izin verir.",
    "40'ı dışarıda bıraktın: 'az olmamalı' 40'a izin verir."
  ],
  "aciklama": "Hız, yolun süreye bölümüdür: [[x|2]]. Alt sınır 'az olmamalı' ile ≥, üst sınır 'aşmamalı' ile ≤ olur.\nAdım 1: Hız [[x|2]] km/sa.\nAdım 2: 40'tan az olmamalı: [[x|2]] ≥ 40.\nAdım 3: 110'u aşmamalı: [[x|2]] ≤ 110.\nAdım 4: Birleştir: 40 ≤ [[x|2]] ≤ 110.\nSağlama: Hız tam 40 ya da tam 110 olsa da kural çiğnenmez.\nCevap A."
}
);
