// Matematik — Eşitsizlikler (M.8.2.3): Havuz eki (kademe 0), mat-es-016 … mat-es-075
// Birinci dereceden bir bilinmeyenli eşitsizlikler; en çok iki işlem. Çift taraflı eşitsizlik yalnızca sayı doğrusunda gösterme ve okuma içindir; mutlak değer, iki bilinmeyenli ve ikinci derece eşitsizlik yoktur. Sayı doğrusu şekilleri ölçeklidir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["esitsizlikler"] = window.LGS_BANK["esitsizlikler"] || []).push(
{
  "id": "mat-es-016",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Bir otoparkın girişinde şu uyarı yazılıdır: 'Araç yüksekliği 2 metreyi __geçmemelidir__.'\n**Yüksekliği h metre olan bir aracın otoparka girebilmesi hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "h < 2",
    "h ≤ 2",
    "h > 2",
    "h ≤ 200"
  ],
  "dogru": 1,
  "hatalar": [
    "Sınırı dışarıda bıraktın: 'geçmemelidir' ifadesinde 2 metrenin kendisi de uygundur, bu yüzden < değil ≤ gerekir.",
    null,
    "Yönü ters aldın: 'geçmemelidir' üst sınır koyar, yani 2'den küçük değerleri ister.",
    "Birimi karıştırdın: h metre cinsinden verildiği için sınır 2 olmalıdır; 200, santimetre karşılığıdır."
  ],
  "aciklama": "'Geçmemelidir' bir üst sınır bildirir: sınırın kendisi de, ondan küçük değerler de uygundur.\nAdım 1: Üst sınırı bul: 2 metre.\nAdım 2: 2 metrelik araç da girebildiği için eşitlik vardır; değerler küçük olabildiği için yön 'küçük' yönüdür: h ≤ 2.\nSağlama: h = 2 olan araç girer, h = 2,3 olan girmez; ≤ işareti bunu doğru gösterir.\nCevap B."
},
{
  "id": "mat-es-017",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Aşağıdaki sayı doğrusunda y değerleri gösterilmiştir.\n**Aşağıdakilerden hangisi y'nin alabileceği değerlerden biridir?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"y için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"26\" y1=\"44\" x2=\"280\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"120\" y1=\"38\" x2=\"120\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"120\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"200\" y1=\"38\" x2=\"200\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"200\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"280\" y1=\"38\" x2=\"280\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"280\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"360\" y1=\"38\" x2=\"360\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"360\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"440\" y1=\"38\" x2=\"440\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"440\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><circle cx=\"280\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": ["1","0","−[[1|2]]","−1"],
  "dogru": 3,
  "hatalar": ["Yönü ters aldın: ok sola gidiyor, yani y değerleri −1 ve −1'den küçük sayılardır; 1 bu bölgede değildir.","0, −1'in sağındadır; ok ise −1'den sola gider. 0 gösterilen bölgede değildir.","Negatif sayıları karıştırdın: −[[1|2]], −1'den büyüktür ve sayı doğrusunda −1'in sağında kalır.",null],
  "aciklama": "Sayı doğrusunda dolu yuvarlak o sayının dahil olduğunu, ok da değerlerin hangi yönde devam ettiğini gösterir.\nAdım 1: −1'deki yuvarlak dolu, ok sola doğru: gösterim y ≤ −1'dir.\nAdım 2: Şıkları dene: 1, 0 ve −[[1|2]] sayılarının hepsi −1'den büyüktür ve −1'in sağında kalır.\nAdım 3: −1'deki yuvarlak dolu olduğu için −1 de y'nin alabileceği bir değerdir.\nSık yapılan hata: −[[1|2]] sayısını −1'den küçük sanmak. Negatif sayılarda sıfıra yakın olan daha büyüktür.\nCevap D."
},
{
  "id": "mat-es-018",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**x + 4 ≥ 3 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≥ −1",
    "x ≤ −1",
    "x ≥ 1",
    "x ≥ 7"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü değiştirdin: bir sayıyı karşıya geçirmek yönü değiştirmez, yön yalnızca negatif sayıyla çarpılıp bölünürken değişir.",
    "4'ü karşıya geçirirken çıkarmayı ters yaptın: 3 − 4 yerine 4 − 3 aldın.",
    "4'ü çıkarmak yerine ekledin: 3 + 4 = 7 buldun."
  ],
  "aciklama": "Eşitsizlikte de bir terim karşı tarafa geçerken işareti değişir; eşitsizlik işareti ise aynı kalır.\nAdım 1: +4'ü karşıya − olarak geçir: x ≥ 3 − 4.\nAdım 2: x ≥ −1.\nSağlama: x = −1 için −1 + 4 = 3 ≥ 3 doğrudur; x = −2 için 2 ≥ 3 yanlıştır.\nCevap A."
},
{
  "id": "mat-es-019",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Bir x sayısının 3 katı 15'ten __küçük değildir__.\n**Bu cümle aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "3x < 15",
    "x + 3 ≥ 15",
    "3x ≥ 15",
    "3x ≤ 15"
  ],
  "dogru": 2,
  "hatalar": [
    "Olumsuzluğu atladın: 'küçük' tek başına < olur, 'küçük değildir' ise ≥ olur.",
    "'3 katı' yerine '3 fazlası' yazdın: x'in 3 katı 3x'tir, x + 3 değildir.",
    null,
    "'Küçük değildir'i 'büyük değildir' gibi okudun: ≤ işareti 'büyük değildir' demektir."
  ],
  "aciklama": "'Küçük değildir' demek 'ya eşittir ya büyüktür' demektir, yani ≥ işaretidir.\nAdım 1: 'x'in 3 katı' → 3x.\nAdım 2: 'küçük değildir' → ≥.\nAdım 3: 3x ≥ 15.\nSağlama: x = 5 için 3·5 = 15 ≥ 15 doğrudur; x = 4 için 12 ≥ 15 yanlıştır.\nCevap C."
},
{
  "id": "mat-es-020",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Aşağıdaki sayılardan hangisi x'in alabileceği değerlerden biridir?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"26\" y1=\"44\" x2=\"340\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"100\" y1=\"38\" x2=\"100\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"100\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"160\" y1=\"38\" x2=\"160\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"160\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"220\" y1=\"38\" x2=\"220\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"220\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"38\" x2=\"280\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"280\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"340\" y1=\"38\" x2=\"340\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"340\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"400\" y1=\"38\" x2=\"400\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"400\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"460\" y1=\"38\" x2=\"460\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"460\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><circle cx=\"340\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−5",
    "2",
    "3",
    "6"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "2'deki yuvarlak boştur; 2 çözüme dahil değildir.",
    "Ok yönünü ters okudun: 3, 2'nin sağındadır ve boyalı bölgede değildir.",
    "Aynı yön hatası: 6 da 2'nin sağındadır; boyalı bölge 2'nin solundadır."
  ],
  "aciklama": "Boyalı bölge ve ok, çözüm kümesini gösterir. İçi boş yuvarlak sayının dahil olmadığını anlatır.\nAdım 1: Ok sola gidiyor, 2'deki yuvarlak boş: x < 2.\nAdım 2: Seçeneklerden 2'den küçük olanı ara: yalnızca −5, 2'den küçüktür.\nSağlama: 2 < 2 yanlıştır; 3 < 2 ve 6 < 2 de yanlıştır.\nSık yapılan hata: Okun hangi yöne gittiğine bakmadan büyük sayıyı seçmek.\nCevap A."
},
{
  "id": "mat-es-021",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**5x < 35 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < 175",
    "x < 30",
    "x < 7",
    "x > 7"
  ],
  "dogru": 2,
  "hatalar": [
    "Bölmek yerine çarptın: x'in katsayısı 5 ise her iki taraf 5'e bölünür.",
    "Bölmek yerine çıkardın: 35 − 5 = 30 buldun; çarpan çıkarılmaz, bölünür.",
    null,
    "Yönü değiştirdin: pozitif bir sayıya bölerken eşitsizlik işareti aynı kalır."
  ],
  "aciklama": "Katsayı pozitifse her iki tarafı ona bölersin ve işaret değişmez.\nAdım 1: İki tarafı 5'e böl: x < 35 : 5.\nAdım 2: x < 7.\nSağlama: x = 6 için 5·6 = 30 < 35 doğrudur; x = 8 için 40 < 35 yanlıştır.\nCevap C."
},
{
  "id": "mat-es-022",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Bir bilgisayar oyununda 80 puanı __geçen__ oyuncular bir sonraki seviyeye geçiyor.\n**Bir oyuncunun puanı p ise seviye atlama koşulu hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "p < 80",
    "p > 80",
    "p ≥ 80",
    "p ≤ 80"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü ters aldın: 'geçmek' büyümektir, 80'den küçük puan seviye atlatmaz.",
    null,
    "Sınırı dahil ettin: tam 80 puan alan oyuncu 80'i geçmiş olmaz, bu yüzden ≥ değil > gerekir.",
    "Hem yön hem sınır yanlış: ≤ işareti 80'i geçmeyen puanları gösterir."
  ],
  "aciklama": "'Geçen' sözcüğü sınırı dışarıda bırakır: 80 puan yetmez, 81 puan yeter.\nAdım 1: Sınırı bul: 80.\nAdım 2: Büyük puanlar uygun, ama 80'in kendisi değil: p > 80.\nSağlama: p = 80 için seviye atlanmaz; p = 81 için atlanır. > işareti bunu gösterir.\nCevap B."
},
{
  "id": "mat-es-023",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**x ≥ 1 eşitsizliğinin sayı doğrusundaki gösterimi aşağıdaki çizimlerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 316\" role=\"img\" aria-label=\"x ≥ 1 için dört çizim\"><text x=\"4\" y=\"50\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">A</text><line x1=\"34\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"34,44 44,39 44,49\" fill=\"currentColor\"/><line x1=\"290\" y1=\"44\" x2=\"534\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"38\" x2=\"60\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"175\" y1=\"38\" x2=\"175\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"175\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"290\" y1=\"38\" x2=\"290\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"405\" y1=\"38\" x2=\"405\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"405\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"290\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"128\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">B</text><line x1=\"34\" y1=\"122\" x2=\"546\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,122 536,117 536,127\" fill=\"currentColor\"/><polygon points=\"34,122 44,117 44,127\" fill=\"currentColor\"/><line x1=\"46\" y1=\"122\" x2=\"290\" y2=\"122\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"116\" x2=\"60\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"175\" y1=\"116\" x2=\"175\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"175\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"290\" y1=\"116\" x2=\"290\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"405\" y1=\"116\" x2=\"405\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"405\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"116\" x2=\"520\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"290\" cy=\"122\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"206\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">C</text><line x1=\"34\" y1=\"200\" x2=\"546\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,200 536,195 536,205\" fill=\"currentColor\"/><polygon points=\"34,200 44,195 44,205\" fill=\"currentColor\"/><line x1=\"46\" y1=\"200\" x2=\"290\" y2=\"200\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"194\" x2=\"60\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"175\" y1=\"194\" x2=\"175\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"175\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"290\" y1=\"194\" x2=\"290\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"405\" y1=\"194\" x2=\"405\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"405\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"194\" x2=\"520\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"290\" cy=\"200\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"284\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">D</text><line x1=\"34\" y1=\"278\" x2=\"546\" y2=\"278\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,278 536,273 536,283\" fill=\"currentColor\"/><polygon points=\"34,278 44,273 44,283\" fill=\"currentColor\"/><line x1=\"290\" y1=\"278\" x2=\"534\" y2=\"278\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"272\" x2=\"60\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"175\" y1=\"272\" x2=\"175\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"175\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"290\" y1=\"272\" x2=\"290\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"405\" y1=\"272\" x2=\"405\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"405\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"272\" x2=\"520\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"290\" cy=\"278\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "A çizimi",
    "B çizimi",
    "C çizimi",
    "D çizimi"
  ],
  "dogru": 3,
  "hatalar": [
    "1'deki yuvarlak boş çizilmiş: bu gösterim x > 1 anlamına gelir; ≥ için yuvarlak dolu olmalıdır.",
    "Ok sola gidiyor: bu gösterim x ≤ 1 anlamına gelir; x ≥ 1 için ok sağa gitmelidir.",
    "Hem yuvarlak boş hem ok sola: bu gösterim x < 1 anlamına gelir.",
    null
  ],
  "aciklama": "≥ işareti iki bilgi verir: sınır dahildir (dolu yuvarlak) ve değerler büyür (ok sağa).\nAdım 1: ≥ sınırı da kapsar: 1'deki yuvarlak dolu olmalı.\nAdım 2: Değerler 1'den büyük: ok sağa gitmeli.\nAdım 3: Bu iki özelliği yalnızca D çizimi taşır.\nSağlama: A boş yuvarlak, B ve C ok sola gidiyor.\nCevap D."
},
{
  "id": "mat-es-024",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**x + 6 < 2 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < 8",
    "x < 4",
    "x < −4",
    "x > −4"
  ],
  "dogru": 2,
  "hatalar": [
    "6'yı karşıya geçirirken işaretini değiştirmedin: 2 + 6 = 8 buldun.",
    "Çıkarmayı ters yaptın: 6 − 2 = 4 aldın; doğrusu 2 − 6 = −4.",
    null,
    "Yönü değiştirdin: toplamayı karşıya geçirmek yönü değiştirmez."
  ],
  "aciklama": "Bir terim karşı tarafa geçerken işareti değişir, eşitsizlik işareti değişmez.\nAdım 1: +6'yı karşıya −6 olarak geçir: x < 2 − 6.\nAdım 2: x < −4.\nSağlama: x = −5 için −5 + 6 = 1 < 2 doğrudur; x = −3 için 3 < 2 yanlıştır.\nCevap C."
},
{
  "id": "mat-es-025",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Bir havayolu şirketi, yolcuların el bagajının kütlesinin __en fazla__ 8 kg olabileceğini bildirmiştir.\n**Bir el bagajının kütlesi b kg ise bu kural hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "b ≤ 8",
    "b < 8",
    "b ≥ 8",
    "b > 8"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eşitliği dışarıda bıraktın: 'en fazla 8' ise tam 8 kg'lık bagaj da kabul edilir.",
    "'En fazla' ile 'en az'ı karıştırdın: ≥ alt sınır koyar, 'en fazla' ise üst sınırdır.",
    "Hem yön hem sınır yanlış: 8 kg'dan ağır bagajlar kurala aykırıdır."
  ],
  "aciklama": "'En fazla' bir üst sınırdır ve sınırın kendisi uygundur.\nAdım 1: Üst sınırı bul: 8 kg.\nAdım 2: 8 kg dahil, daha hafifler de uygun: b ≤ 8.\nSağlama: 8 kg'lık bagaj kabul edilir, 9 kg'lık edilmez.\nCevap A."
},
{
  "id": "mat-es-026",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 1,
  "soru": "Bir öğretmen, x ≥ 4 eşitsizliğini sayı doğrusunda göstermelerini istiyor.\n**Bu gösterimde 4'ün üzerine konan yuvarlak ve okun yönü nasıl olmalıdır?**",
  "gorsel": null,
  "secenekler": [
    "İçi boş yuvarlak, ok sola",
    "İçi dolu yuvarlak, ok sola",
    "İçi boş yuvarlak, ok sağa",
    "İçi dolu yuvarlak, ok sağa"
  ],
  "dogru": 3,
  "hatalar": [
    "Hem yuvarlak hem yön yanlış: ≥ sınırı da kapsar ve değerler büyür.",
    "Yönü ters aldın: x ≥ 4 için değerler 4'ten büyüktür, ok sağa gider.",
    "Yönü doğru aldın ama ≥ sınırı kapsar, bu yüzden yuvarlak dolu olmalıdır.",
    null
  ],
  "aciklama": "Sınır çözüme dahilse yuvarlak dolu, dahil değilse boş çizilir. Ok değerlerin büyüdüğü ya da küçüldüğü yöne gider.\nAdım 1: ≥ işareti eşitliği kapsar: yuvarlak dolu.\nAdım 2: Büyük değerler: ok sağa.\nSağlama: 4 ve 10 çözümdür, ikisi de boyalı bölgededir.\nCevap D."
},
{
  "id": "mat-es-027",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 1,
  "soru": "**[[x|4]] > 2 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > 8",
    "x < 8",
    "x > 6",
    "x > [[1|2]]"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü değiştirdin: pozitif bir sayıyla çarparken eşitsizlik işareti aynı kalır.",
    "4'ü toplayarak çözdün: 2 + 4 = 6 buldun; bölmenin tersi toplama değil çarpmadır.",
    "Çarpmak yerine böldün: x'in 4'e bölündüğü yerde karşı tarafı 4 ile çarparsın."
  ],
  "aciklama": "x'in 4'e bölündüğü bir eşitsizlikte iki tarafı 4 ile çarpmak x'i yalnız bırakır. 4 pozitif olduğu için işaret değişmez.\nAdım 1: İki tarafı 4 ile çarp: x > 2 · 4.\nAdım 2: x > 8.\nSağlama: x = 12 için [[12|4]] = 3 > 2 doğrudur; x = 8 için 2 > 2 yanlıştır.\nCevap A."
},
{
  "id": "mat-es-028",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir tren vagonunda 56 koltuk vardır ve vagonda şu anda 38 yolcu bulunmaktadır. Vagona yeni binecek yolcu sayısı n'dir. Yolcu sayısı koltuk sayısını __aşmamalıdır__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "38 + n < 56",
    "38 + n ≥ 56",
    "38n ≤ 56",
    "38 + n ≤ 56"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'aşmamalı' ifadesinde 56 yolcu da uygundur, bu yüzden ≤ gerekir.",
    "Yönü ters aldın: 'aşmamalı' üst sınır koyar, yolcu sayısı 56'dan fazla olamaz.",
    "n'yi çarpan yaptın: yeni binenler mevcut yolculara eklenir, çarpılmaz.",
    null
  ],
  "aciklama": "Toplam yolcu sayısı, vagondakiler ile yeni binenlerin toplamıdır ve üst sınırı vardır.\nAdım 1: Toplam yolcu: 38 + n.\nAdım 2: 'Aşmamalıdır' → ≤ 56.\nAdım 3: 38 + n ≤ 56.\nSağlama: n = 18 için toplam 56 olur, uygundur; n = 19 için 57 olur, uygun değildir.\nCevap D."
},
{
  "id": "mat-es-029",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Ece, sayı doğrusunda boyadığı bölgenin x'in alabileceği değerleri gösterdiğini söylüyor.\n**Buna göre aşağıdaki sayılardan hangisi boyalı bölgenin dışında kalır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"108.6\" y1=\"44\" x2=\"451.4\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"108.6\" y1=\"38\" x2=\"108.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"108.6\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"177.1\" y1=\"38\" x2=\"177.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"177.1\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"245.7\" y1=\"38\" x2=\"245.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"245.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"314.3\" y1=\"38\" x2=\"314.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"314.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"382.9\" y1=\"38\" x2=\"382.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"382.9\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"451.4\" y1=\"38\" x2=\"451.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"451.4\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"108.6\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"451.4\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": ["−3","−2,5","1,5","2"],
  "dogru": 3,
  "hatalar": ["Dolu yuvarlağı boş sandın: −3'teki yuvarlak dolu, yani −3 bölgeye dahildir.","−2,5 sayısı −3 ile −2 arasındadır; boyalı bölgenin içinde kalır.","1,5 sayısı 1 ile 2 arasındadır; 2'den küçük olduğu için bölgenin içindedir.",null],
  "aciklama": "Boş yuvarlak o sayının bölgeye dahil olmadığını, dolu yuvarlak dahil olduğunu gösterir.\nAdım 1: −3'te yuvarlak dolu, 2'de boş: gösterim −3 ≤ x < 2'dir.\nAdım 2: −3 dahildir; −2,5 ve 1,5 de −3 ile 2 arasında olduğu için bölgededir.\nAdım 3: 2'deki yuvarlak boş olduğu için 2 bölgenin dışında kalır.\nSık yapılan hata: Bölge 2'ye kadar boyandığı için 2'yi de dahil sanmak. Boş yuvarlak o sayıyı dışarıda bırakır.\nCevap D."
},
{
  "id": "mat-es-030",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**4x + 3 ≤ 19 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≥ 4",
    "x ≤ 4",
    "x ≤ [[11|2]]",
    "x ≤ 16"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü değiştirdin: 4 pozitif olduğundan bölerken eşitsizlik işareti aynı kalır.",
    null,
    "3'ü karşıya geçirirken işaretini değiştirmedin: 19 + 3 = 22 yazıp 4'e böldün.",
    "Son adımı atladın: 4x ≤ 16 olduktan sonra 4'e bölmeyi unuttun."
  ],
  "aciklama": "İki işlemli eşitsizlikte önce toplama-çıkarmayı, sonra katsayıyı ortadan kaldırırsın.\nAdım 1: 3'ü karşıya geçir: 4x ≤ 19 − 3 = 16.\nAdım 2: 4 pozitif olduğu için işaret değişmeden böl: x ≤ 4.\nSağlama: x = 4 için 4·4 + 3 = 19 ≤ 19 doğrudur; x = 5 için 23 ≤ 19 yanlıştır.\nCevap B."
},
{
  "id": "mat-es-031",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir köprüden geçen araçların yükü dahil toplam kütlesi 20 tonu geçemez. Boş kütlesi 8 ton olan bir kamyon, her biri 2 ton gelen k tane kasa taşıyacaktır.\n**Kamyonun köprüden geçebilmesi aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "8 + 2k < 20",
    "10k ≤ 20",
    "8k + 2 ≤ 20",
    "8 + 2k ≤ 20"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'geçemez' demek tam 20 tonun uygun olduğunu söyler, bu yüzden ≤ gerekir.",
    "8 ile 2'yi toplayıp k ile çarptın: boş kütle kasa sayısıyla çarpılmaz, bir kez eklenir.",
    "Sayıların rolünü karıştırdın: boş kütle sabittir (8), kasa sayısıyla çarpılan ise her kasanın kütlesidir (2).",
    null
  ],
  "aciklama": "Toplam kütle = kamyonun boş kütlesi + kasaların toplam kütlesi.\nAdım 1: k kasanın kütlesi 2k ton.\nAdım 2: Toplam: 8 + 2k.\nAdım 3: 'Geçemez' → ≤ 20: 8 + 2k ≤ 20.\nSağlama: k = 6 için 8 + 12 = 20 uygundur; k = 7 için 22 uygun değildir.\nCevap D."
},
{
  "id": "mat-es-032",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir yaz kampına katılım koşulu, çocuğun yaşını gösteren y için aşağıdaki sayı doğrusunda gösterilmiştir.\n**Bu gösterim aşağıdaki cümlelerden hangisine uygundur?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"y için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"280\" y1=\"44\" x2=\"534\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"120\" y1=\"38\" x2=\"120\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"120\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"200\" y1=\"38\" x2=\"200\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"200\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">11</text><line x1=\"280\" y1=\"38\" x2=\"280\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"280\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">12</text><line x1=\"360\" y1=\"38\" x2=\"360\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"360\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">13</text><line x1=\"440\" y1=\"38\" x2=\"440\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"440\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">14</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">15</text><circle cx=\"280\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "Katılımcı 12 yaşından büyük olmalıdır.",
    "Katılımcı 12 yaşından küçük olmalıdır.",
    "Katılımcı 12 yaşından büyük olmamalıdır.",
    "Katılımcı 12 yaşından küçük olmamalıdır."
  ],
  "dogru": 3,
  "hatalar": [
    "Dolu yuvarlağı boş okudun: 12 yaşındaki çocuk da katılabilir.",
    "Hem yön hem yuvarlak yanlış: ok sağa gider ve 12 dahildir.",
    "Yönü ters okudun: 'büyük olmamalı' ≤ 12 demektir, bu durumda ok sola giderdi.",
    null
  ],
  "aciklama": "Dolu yuvarlak sınırın dahil olduğunu, ok sağa gidiyorsa değerlerin büyüdüğünü gösterir: y ≥ 12.\nAdım 1: y ≥ 12, 'y, 12'den küçük olmamalı' demektir.\nAdım 2: 'Küçük olmamalı' → 12 ve daha büyük yaşlar.\nSağlama: 12 yaşında kabul edilir, 11 yaşında edilmez.\nCevap D."
},
{
  "id": "mat-es-033",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**−6x < 18 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < −3",
    "x > −3",
    "x < 3",
    "x > 3"
  ],
  "dogru": 1,
  "hatalar": [
    "Negatif sayıya bölerken yönü değiştirmedin: −6'ya bölünce < işareti > olur.",
    null,
    "−6'nın işaretini ihmal ettin ve yönü de değiştirmedin: 18 : 6 = 3 aldın.",
    "Yönü değiştirdin ama −6'ya böldüğünde sonucun negatif çıkacağını unuttun."
  ],
  "aciklama": "Eşitsizliğin iki tarafı negatif bir sayıyla çarpılır ya da bölünürse eşitsizlik işareti yön değiştirir.\nAdım 1: İki tarafı −6'ya böl: işaret yön değiştirir: x > 18 : (−6).\nAdım 2: x > −3.\nSağlama: x = 0 için −6·0 = 0 < 18 doğrudur; x = −4 için 24 < 18 yanlıştır.\nCevap B."
},
{
  "id": "mat-es-034",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir x sayısının yarısının 4 eksiği, −1'den büyüktür.\n**Bu cümle aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "[[x|2]] + 4 > −1",
    "[[x|2]] − 4 > −1",
    "[[x − 4|2]] > −1",
    "[[x|2]] − 4 < −1"
  ],
  "dogru": 1,
  "hatalar": [
    "'4 eksiği' çıkarma demektir; sen 4'ü eklemişsin.",
    null,
    "Sözcük sırasını karıştırdın: önce yarısı alınır, sonra 4 çıkarılır; sen önce 4'ü çıkarıp sonra yarısını almışsın.",
    "'Büyüktür'ü '<' işaretiyle yazdın; büyük olan tarafın açık ucu büyük sayıya bakar."
  ],
  "aciklama": "Cümleyi sırayla işleme çevir: önce 'yarısı', sonra '4 eksiği', en sonda karşılaştırma.\nAdım 1: x'in yarısı: [[x|2]].\nAdım 2: Onun 4 eksiği: [[x|2]] − 4.\nAdım 3: −1'den büyüktür: [[x|2]] − 4 > −1.\nSık yapılan hata: 'Yarısının 4 eksiği' ile 'x'in 4 eksiğinin yarısı' ifadelerini karıştırmak.\nCevap B."
},
{
  "id": "mat-es-035",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**−2 < x ≤ 1 çift taraflı eşitsizliğinin sayı doğrusundaki gösterimi aşağıdaki çizimlerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 316\" role=\"img\" aria-label=\"−2 < x ≤ 1 için dört çizim\"><text x=\"4\" y=\"50\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">A</text><line x1=\"34\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"34,44 44,39 44,49\" fill=\"currentColor\"/><line x1=\"136.7\" y1=\"44\" x2=\"366.7\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"38\" x2=\"60\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136.7\" y1=\"38\" x2=\"136.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"213.3\" y1=\"38\" x2=\"213.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"213.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"290\" y1=\"38\" x2=\"290\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"366.7\" y1=\"38\" x2=\"366.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"443.3\" y1=\"38\" x2=\"443.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"443.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"136.7\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"366.7\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"128\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">B</text><line x1=\"34\" y1=\"122\" x2=\"546\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,122 536,117 536,127\" fill=\"currentColor\"/><polygon points=\"34,122 44,117 44,127\" fill=\"currentColor\"/><line x1=\"136.7\" y1=\"122\" x2=\"366.7\" y2=\"122\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"116\" x2=\"60\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136.7\" y1=\"116\" x2=\"136.7\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136.7\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"213.3\" y1=\"116\" x2=\"213.3\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"213.3\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"290\" y1=\"116\" x2=\"290\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"366.7\" y1=\"116\" x2=\"366.7\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366.7\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"443.3\" y1=\"116\" x2=\"443.3\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"443.3\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"116\" x2=\"520\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"136.7\" cy=\"122\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"366.7\" cy=\"122\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"206\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">C</text><line x1=\"34\" y1=\"200\" x2=\"546\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,200 536,195 536,205\" fill=\"currentColor\"/><polygon points=\"34,200 44,195 44,205\" fill=\"currentColor\"/><line x1=\"136.7\" y1=\"200\" x2=\"366.7\" y2=\"200\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"194\" x2=\"60\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136.7\" y1=\"194\" x2=\"136.7\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136.7\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"213.3\" y1=\"194\" x2=\"213.3\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"213.3\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"290\" y1=\"194\" x2=\"290\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"366.7\" y1=\"194\" x2=\"366.7\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366.7\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"443.3\" y1=\"194\" x2=\"443.3\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"443.3\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"194\" x2=\"520\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"136.7\" cy=\"200\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"366.7\" cy=\"200\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"284\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">D</text><line x1=\"34\" y1=\"278\" x2=\"546\" y2=\"278\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,278 536,273 536,283\" fill=\"currentColor\"/><polygon points=\"34,278 44,273 44,283\" fill=\"currentColor\"/><line x1=\"136.7\" y1=\"278\" x2=\"366.7\" y2=\"278\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"272\" x2=\"60\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136.7\" y1=\"272\" x2=\"136.7\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136.7\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"213.3\" y1=\"272\" x2=\"213.3\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"213.3\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"290\" y1=\"272\" x2=\"290\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"366.7\" y1=\"272\" x2=\"366.7\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366.7\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"443.3\" y1=\"272\" x2=\"443.3\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"443.3\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"272\" x2=\"520\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"136.7\" cy=\"278\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"366.7\" cy=\"278\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "A çizimi",
    "B çizimi",
    "C çizimi",
    "D çizimi"
  ],
  "dogru": 2,
  "hatalar": [
    "−2'deki yuvarlak dolu çizilmiş: bu çizim −2 ≤ x ≤ 1 anlamına gelir; −2 < x için boş olmalıdır.",
    "İki yuvarlağı da ters boyamışsın: bu çizim −2 ≤ x < 1 anlamına gelir.",
    null,
    "1'deki yuvarlak boş çizilmiş: bu çizim −2 < x < 1 anlamına gelir; x ≤ 1 için dolu olmalıdır."
  ],
  "aciklama": "Çift taraflı eşitsizlikte soldaki işaret sol ucu, sağdaki işaret sağ ucu belirler. < işareti sınırı dışarıda bırakır (boş yuvarlak), ≤ işareti içeride bırakır (dolu yuvarlak).\nAdım 1: −2 < x: −2 dahil değil, sol yuvarlak boş.\nAdım 2: x ≤ 1: 1 dahil, sağ yuvarlak dolu.\nAdım 3: Bu görünüm C çizimidir.\nSağlama: C'de −2 çözüm değildir, 1 çözümdür.\nCevap C."
},
{
  "id": "mat-es-036",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**[[x|3]] + 2 ≤ 5 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ 9",
    "x ≥ 9",
    "x ≤ 21",
    "x ≤ 27"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü değiştirdin: 3 pozitif olduğundan 3 ile çarparken eşitsizlik işareti aynı kalır.",
    "2'yi karşıya geçirirken işaretini değiştirmedin: 5 + 2 = 7 yazıp 3 ile çarptın.",
    "3 ile iki kez çarptın: [[x|3]] ≤ 3 olduktan sonra yalnızca bir kez 3 ile çarpılır."
  ],
  "aciklama": "Önce toplama-çıkarma terimini karşıya geçir, sonra paydadaki sayıyla çarp.\nAdım 1: +2'yi karşıya −2 olarak geçir: [[x|3]] ≤ 5 − 2 = 3.\nAdım 2: İki tarafı 3 ile çarp (işaret değişmez): x ≤ 9.\nSağlama: x = 9 için [[9|3]] + 2 = 5 ≤ 5 doğrudur; x = 12 için 4 + 2 = 6 ≤ 5 yanlıştır.\nCevap A."
},
{
  "id": "mat-es-037",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Derya, öğrenci bileti tanesi 18 TL olan bir sinemaya gidecek ve ayrıca 20 TL'lik bir mısır alacaktır. Derya'nın 100 TL'si vardır ve toplam harcaması bu parayı __aşmayacaktır__.\n**Derya'nın alacağı bilet sayısı b ise bu durum hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "18b + 20 < 100",
    "18b ≤ 100 + 20",
    "18(b + 20) ≤ 100",
    "18b + 20 ≤ 100"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'aşmayacak' demek tam 100 TL harcamak da uygundur, bu yüzden ≤ gerekir.",
    "Mısır ücretini yanlış tarafa yazdın: 20 TL harcamaya eklenir, bütçeye eklenmez.",
    "20 TL'yi bilet sayısıyla topladın: mısır bir kez alınır, bilet sayısına eklenmez.",
    null
  ],
  "aciklama": "Toplam harcama = biletlerin ücreti + mısır ücreti ve bu toplam bütçeyi aşamaz.\nAdım 1: Biletler: 18 · b = 18b.\nAdım 2: Mısır: 20 TL, tek sefer.\nAdım 3: 'Aşmayacak' → ≤ 100: 18b + 20 ≤ 100.\nSağlama: b = 4 için 72 + 20 = 92 uygundur; b = 5 için 90 + 20 = 110 uygun değildir.\nCevap D."
},
{
  "id": "mat-es-038",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir kütüphanenin çocuk üyeliği için yaş koşulu, yaşı y olan çocuklar için aşağıdaki sayı doğrusunda gösterilmiştir.\n**Aşağıdaki yaşlardan hangisi bu koşula uygun __değildir__?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"y için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"136\" y1=\"44\" x2=\"424\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"88\" y1=\"38\" x2=\"88\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"88\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"136\" y1=\"38\" x2=\"136\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"184\" y1=\"38\" x2=\"184\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"184\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"232\" y1=\"38\" x2=\"232\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"232\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"280\" y1=\"38\" x2=\"280\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"280\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"328\" y1=\"38\" x2=\"328\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"328\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"376\" y1=\"38\" x2=\"376\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"376\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">11</text><line x1=\"424\" y1=\"38\" x2=\"424\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"424\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">12</text><line x1=\"472\" y1=\"38\" x2=\"472\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"472\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">13</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">14</text><circle cx=\"136\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"424\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "6",
    "8",
    "10",
    "12"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "8 boyalı bölgededir; koşula uygundur.",
    "10 boyalı bölgededir; koşula uygundur.",
    "12'deki yuvarlak doludur; 12 koşula uygundur."
  ],
  "aciklama": "Önce koşulu oku: 6'daki yuvarlak boş (6 yok), 12'deki yuvarlak dolu (12 var): 6 < y ≤ 12.\nAdım 1: Seçenekleri tek tek dene: 8, 10 ve 12 bu aralığın içindedir.\nAdım 2: 6 ise boş yuvarlak olduğu için aralığın dışındadır.\nSık yapılan hata: Boş yuvarlağı dolu sanıp 6'yı uygun saymak.\nSorunun 'uygun değildir' diye sorduğuna dikkat et.\nCevap A."
},
{
  "id": "mat-es-039",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**8 − 2x < 2 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > −3",
    "x < 3",
    "x > 3",
    "x > 5"
  ],
  "dogru": 2,
  "hatalar": [
    "İşareti ihmal ettin: −6 : (−2) = +3 olur; iki negatif sayının bölümü pozitiftir.",
    "Negatif sayıya bölerken yönü değiştirmedin: −2'ye bölünce < işareti > olur.",
    null,
    "8'i karşıya geçirirken işaretini değiştirmedin: 2 + 8 = 10 yazıp 2'ye böldün."
  ],
  "aciklama": "Bu eşitsizlikte x'in katsayısı negatiftir; son adımda eşitsizliğin yönü değişir.\nAdım 1: 8'i karşıya −8 olarak geçir: −2x < 2 − 8 = −6.\nAdım 2: İki tarafı −2'ye böl; negatif sayıyla böldüğün için yön değişir: x > 3.\nSağlama: x = 4 için 8 − 8 = 0 < 2 doğrudur; x = 2 için 4 < 2 yanlıştır.\nCevap C."
},
{
  "id": "mat-es-040",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Dikdörtgen biçimli bir bahçenin kısa kenarı 8 m, uzun kenarı a m'dir. Bahçenin çevresi __en az__ 40 m olmalıdır.\n**Bu koşul aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "2(8 + a) ≥ 40",
    "2(8 + a) ≤ 40",
    "8 + a ≥ 40",
    "2 · 8 + a ≥ 40"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "'En az' ile 'en fazla'yı karıştırdın: 'en az' alt sınırdır, bu yüzden ≥ gerekir.",
    "Çevre yerine yarım çevreyi yazdın: çevre, komşu iki kenarın toplamının 2 katıdır.",
    "Çevre formülünü eksik yazdın: yalnızca kısa kenarı 2 ile çarptın, uzun kenar da iki kez hesaba katılır."
  ],
  "aciklama": "Dikdörtgenin çevresi, komşu iki kenarın toplamının 2 katıdır.\nAdım 1: Çevre = 2(8 + a).\nAdım 2: 'En az 40' → ≥ 40.\nAdım 3: 2(8 + a) ≥ 40.\nSağlama: a = 12 için çevre 40 olur ve uygundur; a = 11 için 38 olur, uygun değildir.\nCevap A."
},
{
  "id": "mat-es-041",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Gösterilen aralıktaki en küçük tam sayı ile en büyük tam sayının çarpımı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"93.3\" y1=\"44\" x2=\"466.7\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"93.3\" y1=\"38\" x2=\"93.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"93.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"146.7\" y1=\"38\" x2=\"146.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"146.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"200\" y1=\"38\" x2=\"200\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"200\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"253.3\" y1=\"38\" x2=\"253.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"253.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"306.7\" y1=\"38\" x2=\"306.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"306.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"360\" y1=\"38\" x2=\"360\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"360\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"413.3\" y1=\"38\" x2=\"413.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"413.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"466.7\" y1=\"38\" x2=\"466.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"466.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><circle cx=\"93.3\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"466.7\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−12",
    "−8",
    "−2",
    "8"
  ],
  "dogru": 1,
  "hatalar": [
    "3'ü en büyük tam sayı sandın: 3'teki yuvarlak boştur, en büyük tam sayı 2'dir.",
    null,
    "Çarpmak yerine topladın: −4 + 2 = −2 buldun.",
    "İşareti unuttun: en küçük tam sayı −4'tür, çarpım negatif çıkar."
  ],
  "aciklama": "Önce uçlara bak: −4'teki yuvarlak dolu (−4 dahil), 3'teki yuvarlak boş (3 hariç).\nAdım 1: En küçük tam sayı −4.\nAdım 2: En büyük tam sayı 2 (3 dahil değil).\nAdım 3: Çarpım: (−4) · 2 = −8.\nSık yapılan hata: Boş yuvarlaktaki sayıyı da aralığa katmak.\nCevap B."
},
{
  "id": "mat-es-042",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**2x − 9 ≥ 3 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≥ −3",
    "x ≥ 3",
    "x ≤ 6",
    "x ≥ 6"
  ],
  "dogru": 3,
  "hatalar": [
    "9'u karşıya geçirirken işaretini yanlış kullandın: 3 − 9 = −6 bulup 2'ye böldün; doğrusu 3 + 9 = 12.",
    "Çıkarmayı ters yaptın: 9 − 3 = 6 bulup 2'ye böldün; −9 karşıya +9 olarak geçer.",
    "Yönü değiştirdin: 2 pozitif olduğundan bölerken eşitsizlik işareti aynı kalır.",
    null
  ],
  "aciklama": "Önce çıkarılan sayıyı karşıya geçir, sonra katsayıya böl.\nAdım 1: −9'u karşıya +9 olarak geçir: 2x ≥ 3 + 9 = 12.\nAdım 2: İki tarafı 2'ye böl: x ≥ 6.\nSağlama: x = 6 için 12 − 9 = 3 ≥ 3 doğrudur; x = 5 için 10 − 9 = 1 ≥ 3 yanlıştır.\nCevap D."
},
{
  "id": "mat-es-043",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir okulun satranç turnuvasına __en fazla__ 64 öğrenci katılabilir. Şimdiye kadar 40 öğrenci kayıt yaptırmıştır. Kalan s sınıfın her birinden 4 öğrenci daha kayıt olacaktır.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "40 + 4s ≤ 64",
    "40 + 4s ≥ 64",
    "40s + 4 ≤ 64",
    "4s ≤ 64"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "'En fazla' ile 'en az'ı karıştırdın: katılımcı sayısı 64'ten fazla olamaz.",
    "Sayıların rolünü karıştırdın: 40 öğrenci zaten kayıtlıdır, sınıf sayısıyla çarpılan ise sınıf başına gelen 4 öğrencidir.",
    "Önceki 40 kaydı unuttun: toplam öğrenci sayısı mevcut kayıtlarla yeni kayıtların toplamıdır."
  ],
  "aciklama": "Toplam kayıt sayısı = şimdiye kadarki kayıtlar + yeni gelenler ve bu toplam kontenjanı aşamaz.\nAdım 1: Yeni gelenler: 4 · s = 4s.\nAdım 2: Toplam: 40 + 4s.\nAdım 3: 'En fazla 64' → ≤ 64: 40 + 4s ≤ 64.\nSağlama: s = 6 için 40 + 24 = 64 uygundur; s = 7 için 68 uygun değildir.\nCevap A."
},
{
  "id": "mat-es-044",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Gösterilen aralıkta kaç tane çift tam sayı vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"83.6\" y1=\"44\" x2=\"476.4\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"83.6\" y1=\"38\" x2=\"83.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"83.6\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"127.3\" y1=\"38\" x2=\"127.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"127.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"170.9\" y1=\"38\" x2=\"170.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"170.9\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"214.5\" y1=\"38\" x2=\"214.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"214.5\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"258.2\" y1=\"38\" x2=\"258.2\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"258.2\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"301.8\" y1=\"38\" x2=\"301.8\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"301.8\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"345.5\" y1=\"38\" x2=\"345.5\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"345.5\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"389.1\" y1=\"38\" x2=\"389.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"389.1\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"432.7\" y1=\"38\" x2=\"432.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"432.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"476.4\" y1=\"38\" x2=\"476.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"476.4\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><circle cx=\"83.6\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"476.4\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2",
    "4",
    "5",
    "9"
  ],
  "dogru": 2,
  "hatalar": [
    "Yalnızca pozitif çift sayıları (2 ve 4) saydın; negatif çift sayılar ve 0 da aralıktadır.",
    "0'ı saymadın: 0 da bir çift tam sayıdır.",
    null,
    "Çift olmayanları da saydın: −4'ten 4'e kadar bütün tam sayıları saymışsın."
  ],
  "aciklama": "Önce aralığı oku: −4 dahil (dolu), 5 hariç (boş). Tam sayılar: −4, −3, −2, −1, 0, 1, 2, 3, 4.\nAdım 1: Bunlardan çift olanları seç: −4, −2, 0, 2, 4.\nAdım 2: Say: 5 tane.\nSık yapılan hata: 0'ı çift sayı saymamak.\nCevap C."
},
{
  "id": "mat-es-045",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 2,
  "soru": "**−x + 3 < −7 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < −10",
    "x > 4",
    "x < 10",
    "x > 10"
  ],
  "dogru": 3,
  "hatalar": [
    "Negatif katsayıyı kaldırırken yönü değiştirmedin: −x < −10 iken iki tarafı −1 ile çarpınca < işareti > olur.",
    "3'ü karşıya geçirirken işlemi yanlış yaptın: −7 + 3 = −4 buldun; doğrusu −7 − 3 = −10.",
    "Yönü değiştirdin ama sayının işaretini değiştirmeyi unuttun: −x < −10 ise x > 10 olur.",
    null
  ],
  "aciklama": "x'in önündeki eksi işareti, katsayının −1 olduğu anlamına gelir; −1 ile çarpınca eşitsizlik yön değiştirir.\nAdım 1: 3'ü karşıya −3 olarak geçir: −x < −7 − 3 = −10.\nAdım 2: İki tarafı −1 ile çarp, yön değişir: x > 10.\nSağlama: x = 11 için −11 + 3 = −8 < −7 doğrudur; x = 9 için −6 < −7 yanlıştır.\nCevap D."
},
{
  "id": "mat-es-046",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Bir otoparkta ilk saat için 10 TL, ilk saatten sonraki her saat için 5 TL alınmaktadır. Dilara'nın ödeyeceği ücret 40 TL'yi __geçmemelidir__. Dilara otoparkta ilk saatten sonra s saat daha kalacaktır.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "10 + 5s < 40",
    "10 + 5s ≤ 40",
    "10s + 5 ≤ 40",
    "15s ≤ 40"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'geçmemelidir' tam 40 TL ödemenin de uygun olduğunu söyler, bu yüzden ≤ gerekir.",
    null,
    "Sayıların rolünü karıştırdın: 10 TL yalnızca ilk saat içindir, saat sayısıyla çarpılan ücret 5 TL'dir.",
    "İlk saat ücreti ile sonraki saat ücretini birleştirip saat sayısıyla çarptın: ilk saat bir kez ödenir."
  ],
  "aciklama": "Toplam ücret = ilk saatin ücreti + sonraki saatlerin ücreti.\nAdım 1: İlk saat: 10 TL.\nAdım 2: Sonraki s saat: 5 · s = 5s TL.\nAdım 3: 'Geçmemelidir' → ≤ 40: 10 + 5s ≤ 40.\nSağlama: s = 6 için 10 + 30 = 40 uygundur; s = 7 için 45 uygun değildir.\nCevap B."
},
{
  "id": "mat-es-047",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 2,
  "soru": "Aşağıda iki farklı eşitsizliğin sayı doğrusundaki gösterimi verilmiştir.\n**Bu gösterimlerle ilgili aşağıdakilerden hangisi doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 160\" role=\"img\" aria-label=\"Aynı sınırlı iki eşitsizlik\"><text x=\"4\" y=\"50\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">1</text><line x1=\"34\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"34,44 44,39 44,49\" fill=\"currentColor\"/><line x1=\"244\" y1=\"44\" x2=\"534\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"38\" x2=\"60\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"152\" y1=\"38\" x2=\"152\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"152\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"244\" y1=\"38\" x2=\"244\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"244\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"336\" y1=\"38\" x2=\"336\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"336\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"428\" y1=\"38\" x2=\"428\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"428\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><circle cx=\"244\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"128\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">2</text><line x1=\"34\" y1=\"122\" x2=\"546\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,122 536,117 536,127\" fill=\"currentColor\"/><polygon points=\"34,122 44,117 44,127\" fill=\"currentColor\"/><line x1=\"244\" y1=\"122\" x2=\"534\" y2=\"122\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"116\" x2=\"60\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"152\" y1=\"116\" x2=\"152\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"152\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"244\" y1=\"116\" x2=\"244\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"244\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"336\" y1=\"116\" x2=\"336\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"336\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"428\" y1=\"116\" x2=\"428\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"428\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"116\" x2=\"520\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><circle cx=\"244\" cy=\"122\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2, yalnızca 1. gösterimde çözümdür.",
    "2, yalnızca 2. gösterimde çözümdür.",
    "2, her iki gösterimde de çözümdür.",
    "3, yalnızca 1. gösterimde çözümdür."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yuvarlakları ters okudun: 2'deki yuvarlak 1. gösterimde dolu, 2. gösterimde boştur.",
    "Boş yuvarlağı dolu saydın: 2. gösterimde 2 çözüm değildir.",
    "3 her iki gösterimde de boyalı bölgededir; yani yalnızca 1. gösterimde değil, ikisinde de çözümdür."
  ],
  "aciklama": "Dolu yuvarlak sınırı dahil eder, boş yuvarlak etmez.\nAdım 1: 1. gösterim x ≥ 2; 2 çözümdür.\nAdım 2: 2. gösterim x > 2; 2 çözüm değildir.\nAdım 3: 3 iki gösterimde de boyalı bölgededir.\nSağlama: Fark yalnızca 2 sayısında ortaya çıkar.\nCevap A."
},
{
  "id": "mat-es-048",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Ela bir konser için bilet alacaktır. Biletlerin tanesi 30 TL'dir; ayrıca satın alma işlemi başına tek seferlik 25 TL hizmet bedeli alınmaktadır. Ela'nın bilet için ayırdığı bütçe 250 TL'dir.\n**Ela en fazla kaç bilet alabilir?**",
  "gorsel": null,
  "secenekler": [
    "4",
    "6",
    "7",
    "8"
  ],
  "dogru": 2,
  "hatalar": [
    "Hizmet bedelini her bilete ekledin: 55b ≤ 250 diyerek en fazla 4 buldun; hizmet bedeli yalnızca bir kez ödenir.",
    "Hizmet bedelini iki kez çıkardın: 250 − 50 = 200 ve 200 : 30 işleminden 6 buldun.",
    null,
    "Hizmet bedelini unuttun: 250 : 30 işleminden 8 buldun."
  ],
  "aciklama": "Toplam ödeme = bilet ücretleri + tek seferlik hizmet bedeli ≤ bütçe. Bilet sayısı tam sayı olmalıdır.\nAdım 1: Eşitsizliği yaz: 30b + 25 ≤ 250.\nAdım 2: 25'i karşıya geçir: 30b ≤ 225.\nAdım 3: 30'a böl: b ≤ 7,5. Bilet sayısı tam sayı olduğundan en fazla 7 bilet alınabilir.\nSağlama: 7 bilet 210 + 25 = 235 TL, 8 bilet 240 + 25 = 265 TL eder.\nSık yapılan hata: 7,5'i yukarı yuvarlayıp 8 yazmak.\nCevap C."
},
{
  "id": "mat-es-049",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir kargo firması, kütlesi 10 kg'dan __az olmayan__ ve 25 kg'ı __geçmeyen__ paketlere 'orta boy' demektedir.\n**Kütlesi p kg olan bir paketin orta boy olması hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "10 ≤ p ≤ 25",
    "10 < p < 25",
    "10 < p ≤ 25",
    "10 ≤ p < 25"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "İki sınırı da dışarıda bıraktın: 'az olmayan' 10 kg'ı, 'geçmeyen' 25 kg'ı kapsar.",
    "Alt sınırı dışarıda bıraktın: 'az olmayan' ifadesi 10 kg'ı da kapsar.",
    "Üst sınırı dışarıda bıraktın: 'geçmeyen' ifadesi 25 kg'ı da kapsar."
  ],
  "aciklama": "İki sınırı ayrı ayrı çevir, sonra küçükten büyüğe birleştir.\nAdım 1: 'Az olmayan': p ≥ 10.\nAdım 2: 'Geçmeyen': p ≤ 25.\nAdım 3: Birleştir: 10 ≤ p ≤ 25.\nSağlama: 10 kg ve 25 kg'lık paketler de orta boydur; 9 kg ve 26 kg'lık paketler değildir.\nCevap A."
},
{
  "id": "mat-es-050",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Hakan, 2x − 3 > 5 eşitsizliğini çözmüş ve çözüm kümesini sayı doğrusunda göstermek istemektedir.\n**Hakan'ın çözümünün doğru gösterimi aşağıdaki çizimlerden hangisidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 316\" role=\"img\" aria-label=\"Dört çözüm kümesi çizimi\"><text x=\"4\" y=\"50\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">A</text><line x1=\"34\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"34,44 44,39 44,49\" fill=\"currentColor\"/><line x1=\"366.7\" y1=\"44\" x2=\"534\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"38\" x2=\"60\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"136.7\" y1=\"38\" x2=\"136.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"213.3\" y1=\"38\" x2=\"213.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"213.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"290\" y1=\"38\" x2=\"290\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"366.7\" y1=\"38\" x2=\"366.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"443.3\" y1=\"38\" x2=\"443.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"443.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><circle cx=\"366.7\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"128\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">B</text><line x1=\"34\" y1=\"122\" x2=\"546\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,122 536,117 536,127\" fill=\"currentColor\"/><polygon points=\"34,122 44,117 44,127\" fill=\"currentColor\"/><line x1=\"46\" y1=\"122\" x2=\"366.7\" y2=\"122\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"116\" x2=\"60\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"136.7\" y1=\"116\" x2=\"136.7\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136.7\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"213.3\" y1=\"116\" x2=\"213.3\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"213.3\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"290\" y1=\"116\" x2=\"290\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"366.7\" y1=\"116\" x2=\"366.7\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366.7\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"443.3\" y1=\"116\" x2=\"443.3\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"443.3\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"116\" x2=\"520\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"152\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><circle cx=\"366.7\" cy=\"122\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"206\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">C</text><line x1=\"34\" y1=\"200\" x2=\"546\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,200 536,195 536,205\" fill=\"currentColor\"/><polygon points=\"34,200 44,195 44,205\" fill=\"currentColor\"/><line x1=\"136.7\" y1=\"200\" x2=\"534\" y2=\"200\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"194\" x2=\"60\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"136.7\" y1=\"194\" x2=\"136.7\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136.7\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"213.3\" y1=\"194\" x2=\"213.3\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"213.3\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"290\" y1=\"194\" x2=\"290\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"366.7\" y1=\"194\" x2=\"366.7\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366.7\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"443.3\" y1=\"194\" x2=\"443.3\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"443.3\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"194\" x2=\"520\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"230\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><circle cx=\"136.7\" cy=\"200\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"4\" y=\"284\" font-size=\"18\" font-weight=\"700\" fill=\"currentColor\">D</text><line x1=\"34\" y1=\"278\" x2=\"546\" y2=\"278\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,278 536,273 536,283\" fill=\"currentColor\"/><polygon points=\"34,278 44,273 44,283\" fill=\"currentColor\"/><line x1=\"366.7\" y1=\"278\" x2=\"534\" y2=\"278\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"60\" y1=\"272\" x2=\"60\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"60\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"136.7\" y1=\"272\" x2=\"136.7\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"136.7\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"213.3\" y1=\"272\" x2=\"213.3\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"213.3\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"290\" y1=\"272\" x2=\"290\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"290\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"366.7\" y1=\"272\" x2=\"366.7\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"366.7\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"443.3\" y1=\"272\" x2=\"443.3\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"443.3\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"272\" x2=\"520\" y2=\"284\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"308\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><circle cx=\"366.7\" cy=\"278\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "A çizimi",
    "B çizimi",
    "C çizimi",
    "D çizimi"
  ],
  "dogru": 3,
  "hatalar": [
    "4'teki yuvarlağı dolu çizdin: x > 4 için 4 çözüme dahil değildir, yuvarlak boş olmalıdır.",
    "Yönü ters aldın: x > 4 için değerler 4'ten büyüktür, ok sağa gider.",
    "3'ü karşıya geçirirken çıkarma yaptın: 5 − 3 = 2 ve 2 : 2 = 1 buldun; doğrusu 5 + 3 = 8.",
    null
  ],
  "aciklama": "Önce eşitsizliği çöz, sonra sonucu çiz.\nAdım 1: −3'ü karşıya +3 olarak geçir: 2x > 5 + 3 = 8.\nAdım 2: 2'ye böl: x > 4.\nAdım 3: > sınırı dışarıda bırakır, 4'te boş yuvarlak; değerler büyür, ok sağa: D çizimi.\nSağlama: x = 5 için 10 − 3 = 7 > 5 doğrudur; x = 4 için 5 > 5 yanlıştır.\nCevap D."
},
{
  "id": "mat-es-051",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Tahtada −4x − 3 < 9 eşitsizliği yazılıdır.\n**Bu eşitsizliğin çözüm kümesindeki en küçük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−4",
    "−3",
    "−2",
    "3"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönü değiştirmeden x < −3 buldun ve −4'ü seçtin; negatif sayıya bölünce yön değişir.",
    "Sınırı dahil ettin: çözüm x > −3 olduğundan −3'ün kendisi çözüm değildir.",
    null,
    "İşareti hatalı aldın: −12 : (−4) sonucunu 3 sandın."
  ],
  "aciklama": "Önce eşitsizliği çöz, sonra çözüm kümesindeki en küçük tam sayıyı bul.\nAdım 1: −3'ü karşıya +3 olarak geçir: −4x < 12.\nAdım 2: −4'e böl, yön değişir: x > −3.\nAdım 3: −3 çözüme dahil değildir; −3'ten büyük en küçük tam sayı −2'dir.\nSağlama: x = −2 için 8 − 3 = 5 < 9 doğrudur; x = −3 için 12 − 3 = 9 < 9 yanlıştır.\nCevap C."
},
{
  "id": "mat-es-052",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir fıçıdaki suyun üçte biri kullanıldıktan sonra fıçıda kalan suyun 30 litreden __fazla__ olması isteniyor. Fıçıdaki ilk su miktarı v litredir.\n**Bu koşul aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "[[v|3]] > 30",
    "[[2v|3]] > 30",
    "[[2v|3]] ≥ 30",
    "[[2v|3]] < 30"
  ],
  "dogru": 1,
  "hatalar": [
    "Kullanılan miktarı yazdın: v'nin üçte biri kullanılan sudur; kalan su ise geriye kalan üçte ikisidir.",
    null,
    "Sınırı dahil ettin: 'fazla' ifadesi 30 litrenin kendisini kapsamaz, bu yüzden ≥ değil > gerekir.",
    "Yönü ters aldın: kalan su 30 litreden fazla olacağı için büyüktür işareti kullanılır."
  ],
  "aciklama": "Önce kalan su miktarını bul, sonra sınırla karşılaştır.\nAdım 1: Üçte biri kullanılırsa üçte ikisi kalır: [[2v|3]].\nAdım 2: 'Fazla' → sınır dahil değil: > 30.\nAdım 3: [[2v|3]] > 30.\nSağlama: v = 45 için kalan 30 litredir ve 30'dan fazla değildir; v = 48 için kalan 32 litredir, uygundur.\nCevap B."
},
{
  "id": "mat-es-053",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Gösterilen aralıkta 3'ün katı olan kaç tam sayı vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"74.3\" y1=\"44\" x2=\"485.7\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−7</text><line x1=\"74.3\" y1=\"38\" x2=\"74.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"74.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"108.6\" y1=\"38\" x2=\"108.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"108.6\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"142.9\" y1=\"38\" x2=\"142.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"142.9\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"177.1\" y1=\"38\" x2=\"177.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"177.1\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"211.4\" y1=\"38\" x2=\"211.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"211.4\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"245.7\" y1=\"38\" x2=\"245.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"245.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"280\" y1=\"38\" x2=\"280\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"280\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"314.3\" y1=\"38\" x2=\"314.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"314.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"348.6\" y1=\"38\" x2=\"348.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"348.6\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"382.9\" y1=\"38\" x2=\"382.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"382.9\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"417.1\" y1=\"38\" x2=\"417.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"417.1\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"451.4\" y1=\"38\" x2=\"451.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"451.4\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"485.7\" y1=\"38\" x2=\"485.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"485.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><circle cx=\"74.3\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"485.7\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2",
    "3",
    "4",
    "5"
  ],
  "dogru": 3,
  "hatalar": [
    "Yalnızca pozitif katları (3 ve 6) saydın; 0 ve negatif katlar da aralıktadır.",
    "Negatif katları saymadın: 0, 3 ve 6'yı buldun, −3 ve −6'yı unuttun.",
    "0'ı saymadın: 0, 3'ün katıdır (3 · 0 = 0).",
    null
  ],
  "aciklama": "Her iki yuvarlak da doludur: −6 ve 6 aralığa dahildir.\nAdım 1: Aralıktaki tam sayıları düşün: −6'dan 6'ya.\nAdım 2: 3'ün katları: −6, −3, 0, 3, 6.\nAdım 3: Say: 5 tane.\nSık yapılan hata: 0'ı ve negatif katları unutmak.\nCevap D."
},
{
  "id": "mat-es-054",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "x pozitif bir tam sayıdır ve 2x − 5 < 9 eşitsizliğini sağlamaktadır.\n**Buna göre x'in alabileceği değerlerin toplamı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "6",
    "15",
    "21",
    "28"
  ],
  "dogru": 2,
  "hatalar": [
    "Değerlerin sayısını verdin: x'in 6 değeri vardır, ama sorulan bu değerlerin toplamıdır.",
    "6'yı toplama katmadın: x < 7 olduğundan 6 da bir çözümdür, 1 + 2 + 3 + 4 + 5 yetmez.",
    null,
    "Sınırı dahil ettin: 2x < 14 olduğundan x < 7'dir ve 7 çözüm değildir."
  ],
  "aciklama": "Önce eşitsizliği çöz, sonra 'pozitif tam sayı' koşuluna uyan değerleri bul ve topla.\nAdım 1: −5'i karşıya +5 olarak geçir: 2x < 14.\nAdım 2: 2'ye böl: x < 7.\nAdım 3: Pozitif tam sayılar: 1, 2, 3, 4, 5, 6.\nAdım 4: Toplam: 1 + 2 + 3 + 4 + 5 + 6 = 21.\nSağlama: x = 6 için 12 − 5 = 7 < 9 doğrudur; x = 7 için 9 < 9 yanlıştır, 7 toplama girmez.\nCevap C."
},
{
  "id": "mat-es-055",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir müzik uygulamasının aboneliğinde ilk ay ücretsizdir; sonraki her ay için 25 TL ödenir. Ece m ay abone kalacaktır ve toplam ödemesi 150 TL'yi __geçmeyecektir__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "25(m − 1) ≤ 150",
    "25(m + 1) ≤ 150",
    "25m ≤ 150",
    "25m − 1 ≤ 150"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Ücretsiz ayı eklemişsin: ücretli ay sayısı m'den bir eksiktir, bir fazla değildir.",
    "İlk ayın ücretsiz olduğunu unuttun: ücret ödenen ay sayısı m değil m − 1'dir.",
    "Bir ay yerine 1 TL çıkardın: çıkarılacak olan 1 aydır ve bu 25 ile çarpılan sayının içinde yer alır."
  ],
  "aciklama": "Ücret yalnızca ilk aydan sonraki aylar için ödenir.\nAdım 1: Ücretli ay sayısı: m − 1.\nAdım 2: Toplam ödeme: 25(m − 1).\nAdım 3: 'Geçmeyecek' → ≤ 150: 25(m − 1) ≤ 150.\nSağlama: m = 7 için 25 · 6 = 150 uygundur; m = 8 için 175 uygun değildir.\nCevap A."
},
{
  "id": "mat-es-056",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Gösterilen x değerleri için aşağıdaki eşitsizliklerden hangisi her zaman doğrudur?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"146.7\" y1=\"44\" x2=\"413.3\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"93.3\" y1=\"38\" x2=\"93.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"93.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"146.7\" y1=\"38\" x2=\"146.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"146.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"200\" y1=\"38\" x2=\"200\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"200\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"253.3\" y1=\"38\" x2=\"253.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"253.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"306.7\" y1=\"38\" x2=\"306.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"306.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"360\" y1=\"38\" x2=\"360\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"360\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"413.3\" y1=\"38\" x2=\"413.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"413.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"466.7\" y1=\"38\" x2=\"466.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"466.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><circle cx=\"146.7\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"413.3\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "x − 3 > 0",
    "x + 2 > 0",
    "x + 2 < 0",
    "x − 3 < 0"
  ],
  "dogru": 1,
  "hatalar": [
    "x en çok 3 olabilir; x − 3 ise en çok 0 olur, hiçbir zaman pozitif olmaz.",
    null,
    "x, −2'den büyüktür; bu yüzden x + 2 hiçbir zaman negatif olmaz.",
    "3'teki yuvarlak doludur: x = 3 olabilir ve bu durumda x − 3 = 0 olur, negatif olmaz."
  ],
  "aciklama": "Boyalı bölge −2 < x ≤ 3 koşulunu gösterir (−2 boş yuvarlak, 3 dolu yuvarlak). 'Her zaman doğru' demek, bütün x değerleri için doğru olması demektir.\nAdım 1: x > −2 olduğundan x + 2 > 0 her zaman doğrudur.\nAdım 2: x = 3 değeri aralıkta olduğundan x − 3 < 0 her zaman doğru değildir (x = 3 için 0 olur).\nAdım 3: x + 2 < 0 ve x − 3 > 0 hiçbir x için doğru değildir.\nSık yapılan hata: Dolu yuvarlaktaki sınır değerini unutmak.\nCevap B."
},
{
  "id": "mat-es-057",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Hüseyin 250 sayfalık bir kitabı okuyacaktır. İlk gün 40 sayfa okumuştur. Sonraki günlerin her birinde 25 sayfa okuyacaktır.\n**Hüseyin kitabı bitirebilmek için ilk günden sonra en az kaç gün daha okumalıdır?**",
  "gorsel": null,
  "secenekler": [
    "8",
    "9",
    "10",
    "11"
  ],
  "dogru": 1,
  "hatalar": [
    "Yuvarlamayı aşağı yaptın: 8 gün sonunda 40 + 200 = 240 sayfa okunur, kitap bitmez.",
    null,
    "İlk günü unuttun: 250 : 25 = 10 buldun; ilk gün okunan 40 sayfa da hesaba katılır.",
    "İlk günü fazladan bir gün olarak ekledin: 10 + 1 = 11 buldun."
  ],
  "aciklama": "Okunan toplam sayfa, ilk gün okunanla sonraki günlerde okunanın toplamıdır ve en az 250 olmalıdır.\nAdım 1: Eşitsizliği yaz: 40 + 25g ≥ 250.\nAdım 2: 40'ı karşıya geçir: 25g ≥ 210.\nAdım 3: 25'e böl: g ≥ 8,4. Gün sayısı tam sayı olduğundan en az 9 gün gerekir.\nSağlama: 9 gün sonra 40 + 225 = 265 ≥ 250 olur; 8 gün sonra 240 sayfa okunmuş olur, yetmez.\nCevap B."
},
{
  "id": "mat-es-058",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir x sayısının 5 fazlasının 2 katı 30'u __geçmez__.\n**Bu cümle aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "2x + 5 ≤ 30",
    "2(x + 5) < 30",
    "2(x − 5) ≤ 30",
    "2(x + 5) ≤ 30"
  ],
  "dogru": 3,
  "hatalar": [
    "Parantezi unuttun: önce 5 eklenir, sonra 2 ile çarpılır; sen yalnızca x'i 2 ile çarpıp 5 eklemişsin.",
    "Eşitliği dışarıda bıraktın: 'geçmez' ifadesinde tam 30 de uygundur, bu yüzden ≤ gerekir.",
    "5 fazlası yerine 5 eksiğini aldın: x'in 5 fazlası x + 5'tir, x − 5 değildir.",
    null
  ],
  "aciklama": "'x'in 5 fazlasının 2 katı' ifadesinde işlem sırası önemlidir: önce 5 eklenir, sonra 2 ile çarpılır.\nAdım 1: x'in 5 fazlası: x + 5.\nAdım 2: Onun 2 katı: 2(x + 5).\nAdım 3: 'Geçmez' → ≤ 30: 2(x + 5) ≤ 30.\nSağlama: x = 10 için 2 · 15 = 30 ≤ 30 doğrudur; x = 11 için 32 ≤ 30 yanlıştır.\nCevap D."
},
{
  "id": "mat-es-059",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Selin, −3 ≤ x < 2 çift taraflı eşitsizliğini aşağıdaki sayı doğrusunda göstermiştir.\n**Selin'in çiziminin eşitsizliği doğru göstermesi için yuvarlaklarda hangi düzeltme yapılmalıdır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"Selin'in çizimi\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"108.6\" y1=\"44\" x2=\"451.4\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"108.6\" y1=\"38\" x2=\"108.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"108.6\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"177.1\" y1=\"38\" x2=\"177.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"177.1\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"245.7\" y1=\"38\" x2=\"245.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"245.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"314.3\" y1=\"38\" x2=\"314.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"314.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"382.9\" y1=\"38\" x2=\"382.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"382.9\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"451.4\" y1=\"38\" x2=\"451.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"451.4\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"108.6\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"451.4\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−3'teki yuvarlak doldurulmalı, 2'deki yuvarlak boşaltılmalı.",
    "−3'teki yuvarlak doldurulmalı, 2'deki yuvarlak olduğu gibi kalmalı.",
    "2'deki yuvarlak boşaltılmalı, −3'teki yuvarlak olduğu gibi kalmalı.",
    "İki yuvarlağın da içi doldurulmalı, boyalı bölge aynı kalmalı."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "2'deki dolu yuvarlağı doğru saydın: x < 2 ifadesinde 2 dahil değildir, bu yüzden o yuvarlak da boş olmalıdır.",
    "−3'teki boş yuvarlağı doğru saydın: −3 ≤ x ifadesinde −3 dahildir, bu yüzden o yuvarlak dolu olmalıdır.",
    "2'nin yuvarlağını dolu bıraktın: x < 2 ifadesinde 2 çözüme dahil değildir, yuvarlak boş olmalıdır."
  ],
  "aciklama": "≤ işareti sınırı içeride, < işareti dışarıda bırakır. Sol uç −3 dahil, sağ uç 2 dahil değil.\nAdım 1: −3 ≤ x: −3 dahil, yuvarlak dolu olmalı. Selin boş çizmiş; doldurulmalı.\nAdım 2: x < 2: 2 dahil değil, yuvarlak boş olmalı. Selin dolu çizmiş; boşaltılmalı.\nAdım 3: Boyalı bölgenin yönü ve uzunluğu doğru; yalnızca iki yuvarlağın dolu-boş durumu ters çizilmiştir.\nSağlama: Doğru çizimde −3 çözümdür, 2 çözüm değildir.\nCevap A."
},
{
  "id": "mat-es-060",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "**−3x + 2 ≤ 14 eşitsizliğini sağlayan en küçük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−5",
    "−4",
    "−3",
    "4"
  ],
  "dogru": 1,
  "hatalar": [
    "−5 çözüm kümesinin dışındadır: x = −5 için 15 + 2 = 17 ≤ 14 yanlıştır.",
    null,
    "Sınırı dışarıda bıraktın: eşitsizlik ≤ olduğundan −4 de çözümdür.",
    "İşareti ihmal ettin: 12 : (−3) = −4'tür, 4 değildir."
  ],
  "aciklama": "Önce eşitsizliği çöz. x'in katsayısı negatif olduğundan son adımda yön değişir.\nAdım 1: 2'yi karşıya geçir: −3x ≤ 14 − 2 = 12.\nAdım 2: −3'e böl, yön değişir: x ≥ −4.\nAdım 3: Çözüm kümesindeki en küçük tam sayı sınırın kendisidir: −4.\nSağlama: x = −4 için 12 + 2 = 14 ≤ 14 doğrudur; x = −5 için 17 ≤ 14 yanlıştır.\nCevap B."
},
{
  "id": "mat-es-061",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Elif'in bugünkü yaşı x'tir. Elif'in 3 yıl sonraki yaşının yarısı 8'den __küçüktür__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "[[x|2]] + 3 < 8",
    "[[x + 3|2]] < 8",
    "[[x + 3|2]] > 8",
    "[[x − 3|2]] < 8"
  ],
  "dogru": 1,
  "hatalar": [
    "Sözcük sırasını karıştırdın: önce 3 yıl eklenir (x + 3), sonra yarısı alınır.",
    null,
    "Yönü ters aldın: 'küçüktür' ifadesi < işaretiyle gösterilir.",
    "3 yıl sonrası yerine 3 yıl öncesini aldın: 3 yıl sonraki yaş x + 3'tür, x − 3 değildir."
  ],
  "aciklama": "Cümleyi sırayla işleme çevir: önce '3 yıl sonraki yaş', sonra 'yarısı', sonra karşılaştırma.\nAdım 1: 3 yıl sonraki yaş: x + 3.\nAdım 2: Yarısı: [[x + 3|2]].\nAdım 3: 8'den küçüktür: [[x + 3|2]] < 8.\nSağlama: x = 12 için [[15|2]] = 7,5 < 8 doğrudur; x = 13 için 8 < 8 yanlıştır.\nCevap B."
},
{
  "id": "mat-es-062",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x tam sayısının alabileceği değerler gösterilmiştir.\n**Buna göre 3 − x ifadesinin alabileceği en büyük değer kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"160\" y1=\"44\" x2=\"534\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"100\" y1=\"38\" x2=\"100\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"100\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"160\" y1=\"38\" x2=\"160\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"160\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"220\" y1=\"38\" x2=\"220\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"220\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"280\" y1=\"38\" x2=\"280\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"280\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"340\" y1=\"38\" x2=\"340\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"340\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"400\" y1=\"38\" x2=\"400\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"400\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"460\" y1=\"38\" x2=\"460\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"460\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><circle cx=\"160\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "1",
    "3",
    "4",
    "5"
  ],
  "dogru": 3,
  "hatalar": [
    "x yerine −2 değil 2 yazdın: 3 − 2 = 1 buldun.",
    "Negatif değerleri atladın: x = 0 ile başlayıp 3 − 0 = 3 buldun.",
    "Boş yuvarlak sandın: x = −1 alıp 3 − (−1) = 4 buldun; −2'deki yuvarlak doludur.",
    null
  ],
  "aciklama": "3 − x ifadesi x küçüldükçe büyür; bu yüzden en büyük değeri x'in en küçük değeri verir.\nAdım 1: Boyalı bölge x ≥ −2'dir (yuvarlak dolu). x'in en küçük değeri −2.\nAdım 2: 3 − (−2) = 3 + 2 = 5.\nSağlama: x = −1 için 4, x = 0 için 3 olur; değerler küçülür.\nSık yapılan hata: Çıkarmada eksi işaretlerini karıştırmak.\nCevap D."
},
{
  "id": "mat-es-063",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 3,
  "soru": "Bir kafede ilk kahve 30 TL, sonraki her kahve 20 TL'dir. Gizem'in 160 TL'si vardır.\n**Gizem en fazla kaç kahve alabilir?**",
  "gorsel": null,
  "secenekler": [
    "6",
    "7",
    "8",
    "9"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitsizliğin sonucundan k − 1 ≤ 6,5 buldun ve k − 1 = 6'yı kahve sayısı sandın; ilk kahve ayrıca eklenir.",
    null,
    "Bütün kahveleri 20 TL sandın: 160 : 20 = 8 buldun; ilk kahve 30 TL'dir.",
    "8 buldun ve ilk kahveyi bir daha ekledin."
  ],
  "aciklama": "İlk kahve ayrı, sonraki kahveler ayrı hesaplanır. k kahve alırsa ilk kahveden sonra k − 1 kahve daha almış olur.\nAdım 1: Eşitsizlik: 30 + 20(k − 1) ≤ 160.\nAdım 2: 30'u karşıya geçir: 20(k − 1) ≤ 130.\nAdım 3: 20'ye böl: k − 1 ≤ 6,5 ve k ≤ 7,5. Kahve sayısı tam sayı olduğundan en fazla 7 kahve.\nSağlama: 7 kahve 30 + 120 = 150 TL, 8 kahve 170 TL eder.\nCevap B."
},
{
  "id": "mat-es-064",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir belediye, dikdörtgen biçimli bir arsayı çitle çevirecektir. Arsanın kısa kenarı x metredir, uzun kenarı ise kısa kenardan 6 metre fazladır. Kullanılacak çitin uzunluğu, yani arsanın çevresi __en az__ 40 metre ve __en fazla__ 60 metre olacaktır.\n**Bu koşul aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "40 ≤ 2(2x + 6) ≤ 60",
    "40 ≤ 2x + 6 ≤ 60",
    "40 < 2(2x + 6) < 60",
    "40 ≤ 2(x + 6) ≤ 60"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Çevre yerine yarım çevreyi yazdın: x + (x + 6) komşu iki kenarın toplamıdır, çevre bunun 2 katıdır.",
    "Sınırları dışarıda bıraktın: 'en az' ve 'en fazla' ifadeleri 40 ve 60 metreyi de kapsar.",
    "Kısa kenarı hesaba katmadın: komşu kenarlar x ve x + 6'dır, yalnızca x + 6 değildir."
  ],
  "aciklama": "Önce çevreyi x cinsinden yaz, sonra iki sınırı birleştir.\nAdım 1: Komşu kenarlar x ve x + 6: toplamları 2x + 6.\nAdım 2: Çevre = 2(2x + 6).\nAdım 3: 'En az 40' → ≥ 40, 'en fazla 60' → ≤ 60. İkisini birleştir: 40 ≤ 2(2x + 6) ≤ 60.\nSağlama: x = 7 için çevre 2 · 20 = 40 ve x = 12 için 2 · 30 = 60 olur; ikisi de uygundur.\nCevap A."
},
{
  "id": "mat-es-065",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "a bir tam sayı olmak üzere a − 3x < 10 eşitsizliğinin çözüm kümesi aşağıdaki sayı doğrusunda gösterilmiştir.\n**Buna göre a kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"Çözüm kümesi\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"200\" y1=\"44\" x2=\"534\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"120\" y1=\"38\" x2=\"120\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"120\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"200\" y1=\"38\" x2=\"200\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"200\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"280\" y1=\"38\" x2=\"280\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"280\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"360\" y1=\"38\" x2=\"360\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"360\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"440\" y1=\"38\" x2=\"440\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"440\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><circle cx=\"200\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−7",
    "−1",
    "7",
    "13"
  ],
  "dogru": 2,
  "hatalar": [
    "10'u yanlış tarafa geçirdin: a + 3 = −10 gibi işaret hataları yaptın.",
    "Sınır değerini a sandın: −1 çözüm kümesinin sınırıdır, a ise eşitsizlikteki sabit sayıdır.",
    null,
    "x yerine 1 yazdın: a − 3 = 10 diyerek 13 buldun; sınır değeri −1'dir."
  ],
  "aciklama": "Çözüm kümesi x > −1 olduğundan, eşitsizlik çözülünce sınır −1 çıkmalıdır.\nAdım 1: a'lı eşitsizliği çöz: a − 3x < 10 → −3x < 10 − a. −3'e bölünce yön değişir: x > [[a − 10|3]].\nAdım 2: Bu sınır −1'e eşit olmalı: [[a − 10|3]] = −1.\nAdım 3: a − 10 = −3, a = 7.\nSağlama: a = 7 için 7 − 3x < 10 → −3x < 3 → x > −1 olur, şekle uyar.\nCevap C."
},
{
  "id": "mat-es-066",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Cem'in ilk beş matematik sınavından aldığı notların toplamı 385'tir. Altıncı sınavdan alacağı not tam sayıdır ve 100'ü geçemez. Cem, altı sınavın not ortalamasının __en az__ 80 olmasını istiyor.\n**Cem'in altıncı sınavdan alabileceği kaç farklı not vardır?**",
  "gorsel": null,
  "secenekler": [
    "5",
    "6",
    "7",
    "20"
  ],
  "dogru": 1,
  "hatalar": [
    "Sınırlardan birini saymadın: 95'ten 100'e kadar 95, 96, 97, 98, 99 ve 100 olmak üzere 6 not vardır.",
    null,
    "94'ü de saydın: 94 için ortalama [[479|6]] = 79,8 çıkar, 80'den küçüktür.",
    "100 − 80 = 20 işlemini yaptın; sınav sayısı ve notların toplamı hesaba girmedi."
  ],
  "aciklama": "Ortalama = notlar toplamı : sınav sayısı. Altıncı notu x diye al.\nAdım 1: [[385 + x|6]] ≥ 80.\nAdım 2: İki tarafı 6 ile çarp: 385 + x ≥ 480.\nAdım 3: x ≥ 95. Not 100'ü geçemeyeceğinden 95 ≤ x ≤ 100.\nAdım 4: Bu aralıktaki tam sayılar: 95, 96, 97, 98, 99, 100 → 6 not.\nSağlama: x = 95 için toplam 480 ve ortalama tam 80 olur.\nCevap B."
},
{
  "id": "mat-es-067",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir x sayısının 4 katının 6 fazlası, 5'ten __küçük değildir__ ancak 25'ten __küçüktür__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "5 < 4x + 6 ≤ 25",
    "5 ≤ 4(x + 6) < 25",
    "5 ≤ 4x + 6 < 25",
    "5 ≤ 6x + 4 < 25"
  ],
  "dogru": 2,
  "hatalar": [
    "Sınırları ters dahil ettin: 'küçük değildir' alt sınırı kapsar (5 dahil), 'küçüktür' üst sınırı kapsamaz (25 dahil değil).",
    "İşlem sırasını karıştırdın: önce x 4 ile çarpılır, sonra 6 eklenir; 6 4 ile çarpılmaz.",
    null,
    "Sayıların rolünü karıştırdın: x ile çarpılan 4'tür, eklenen ise 6'dır; 4x + 6 yerine 6x + 4 yazdın."
  ],
  "aciklama": "İki koşulu ayrı yaz, sonra tek bir çift taraflı eşitsizlikte birleştir.\nAdım 1: 'x'in 4 katının 6 fazlası' → 4x + 6.\nAdım 2: 'Küçük değildir' → ≥ 5: 5 ≤ 4x + 6.\nAdım 3: 'Küçüktür' → < 25: 4x + 6 < 25.\nAdım 4: Birleştir: 5 ≤ 4x + 6 < 25.\nSağlama: 5 sınırı dahil, 25 sınırı dahil değildir; x = 4 için 22 uygundur, x = 5 için 26 uygun değildir.\nCevap C."
},
{
  "id": "mat-es-068",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Bu gösterim aşağıdaki eşitsizliklerden hangisinin çözüm kümesine aittir?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"26\" y1=\"44\" x2=\"314.3\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"108.6\" y1=\"38\" x2=\"108.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"108.6\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"177.1\" y1=\"38\" x2=\"177.1\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"177.1\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"245.7\" y1=\"38\" x2=\"245.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"245.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"314.3\" y1=\"38\" x2=\"314.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"314.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"382.9\" y1=\"38\" x2=\"382.9\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"382.9\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"451.4\" y1=\"38\" x2=\"451.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"451.4\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><circle cx=\"314.3\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "x + 4 < 6",
    "−x < −2",
    "2x < 2",
    "x − 2 < 2"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Negatif katsayıda yönü değiştirmeyi unuttun: −x < −2 çözülünce x > 2 olur.",
    "2'ye böldüğünde 2 yerine 1 buldun: 2x < 2 çözümü x < 1'dir.",
    "Çıkarmayı ters yaptın: x − 2 < 2 çözümü x < 4'tür."
  ],
  "aciklama": "Çizimden çözüm kümesini oku: 2'de boş yuvarlak, ok sola: x < 2. Sonra seçenekleri tek tek çöz.\nAdım 1: x + 4 < 6 → x < 2. Çizime uyar.\nAdım 2: −x < −2 → x > 2. Uymaz.\nAdım 3: 2x < 2 → x < 1; x − 2 < 2 → x < 4. İkisi de uymaz.\nSağlama: Doğru seçenekte x = 1 çözümdür, x = 2 çözüm değildir.\nCevap A."
},
{
  "id": "mat-es-069",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Gizem, 4 − 3x ≥ 16 eşitsizliğini şöyle çözmüştür:\n1. adım: −3x ≥ 16 − 4\n2. adım: −3x ≥ 12\n3. adım: x ≥ −4\n**Gizem'in çözümünde ilk hata hangi adımdadır?**",
  "gorsel": null,
  "secenekler": [
    "1. adım",
    "2. adım",
    "3. adım",
    "Hata yoktur"
  ],
  "dogru": 2,
  "hatalar": [
    "1. adımda 4 karşıya −4 olarak doğru geçmiştir; hata bu adımda değildir.",
    "2. adımda 16 − 4 = 12 işlemi doğrudur; hata bu adımda değildir.",
    null,
    "Son adımda negatif sayıya bölündüğü için eşitsizliğin yönü değişmeliydi; Gizem ≥ işaretini aynı bırakmış."
  ],
  "aciklama": "Eşitsizliğin iki tarafı negatif bir sayıya bölünürse eşitsizlik işareti yön değiştirir.\nAdım 1: İlk iki adımı kontrol et: 4 karşıya geçince −4 olur, 16 − 4 = 12 doğrudur.\nAdım 2: 3. adımda iki taraf −3'e bölünmüştür; 12 : (−3) = −4 doğru, ama ≥ işareti ≤ olmalıydı.\nAdım 3: Doğru sonuç x ≤ −4.\nSağlama: x = −5 için 4 + 15 = 19 ≥ 16 doğrudur; Gizem'in sonucu x = −5'i dışarıda bırakır.\nCevap C."
},
{
  "id": "mat-es-070",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Bir kargo firması, dış ölçüleri alındığında üç ayrıt uzunluğunun toplamı 150 cm'yi __aşmayan__ kutuları kabul etmektedir. Ayşe'nin kutusunun iç ayrıtları x cm, 2x cm ve 0,3 m'dir. Kartonun kalınlığı yüzünden kutunun dış ayrıtlarının her biri iç ayrıtından 2 cm daha uzundur.\n**Ayşe'nin kutusunun kabul edilmesi aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "3x + 36 < 150",
    "3x + 32 ≤ 150",
    "3x + 36 ≤ 150",
    "3x + 6,3 ≤ 150"
  ],
  "dogru": 2,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'aşmayan' ifadesinde tam 150 cm de uygundur, bu yüzden ≤ gerekir.",
    "2 cm'lik payı yalnızca bir ayrıta ekledin: üç dış ayrıtın her biri 2 cm uzar, toplamda 6 cm eklenir.",
    null,
    "Birimi çevirmedin: 0,3 m = 30 cm'dir; 0,3 yazıp cm ile metreyi aynı toplamda kullandın."
  ],
  "aciklama": "Dış ayrıtlar iç ayrıtlardan 2 cm uzundur ve uzunluklar aynı birimde toplanmalıdır.\nAdım 1: 0,3 m = 30 cm.\nAdım 2: Dış ayrıtlar: x + 2, 2x + 2 ve 30 + 2 = 32.\nAdım 3: Toplam: (x + 2) + (2x + 2) + 32 = 3x + 36.\nAdım 4: 'Aşmayan' → ≤ 150: 3x + 36 ≤ 150.\nSağlama: x = 38 için dış ayrıtlar 40, 78 ve 32 cm olur; toplam 150 uygundur. x = 39 için 153 uygun değildir.\nCevap C."
},
{
  "id": "mat-es-071",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Aşağıdaki sayı doğrusunda x tam sayısının alabileceği değerler gösterilmiştir.\n**m = 2x − 1 olduğuna göre m'nin alabileceği kaç farklı değer vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"93.3\" y1=\"44\" x2=\"466.7\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"40\" y1=\"38\" x2=\"40\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"93.3\" y1=\"38\" x2=\"93.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"93.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"146.7\" y1=\"38\" x2=\"146.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"146.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"200\" y1=\"38\" x2=\"200\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"200\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"253.3\" y1=\"38\" x2=\"253.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"253.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"306.7\" y1=\"38\" x2=\"306.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"306.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"360\" y1=\"38\" x2=\"360\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"360\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"413.3\" y1=\"38\" x2=\"413.3\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"413.3\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"466.7\" y1=\"38\" x2=\"466.7\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"466.7\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"38\" x2=\"520\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"520\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><circle cx=\"93.3\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"466.7\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "5",
    "6",
    "7"
  ],
  "dogru": 3,
  "hatalar": [
    "Yalnızca pozitif x değerlerini (1, 2, 3) saydın; negatifler ve 0 da aralıktadır.",
    "Hem −3'ü hem 0'ı atladın; −3 dahildir ve 0 da bir tam sayıdır.",
    "−3'ü saymadın: −3'teki yuvarlak doludur, −3 aralığa dahildir.",
    null
  ],
  "aciklama": "x tam sayı olduğundan her x değeri ayrı bir m değeri verir; önce x değerlerini say.\nAdım 1: −3 dahil (dolu), 4 hariç (boş). x'in alabileceği değerler: −3, −2, −1, 0, 1, 2, 3.\nAdım 2: Bunlar 7 değerdir.\nAdım 3: m = 2x − 1 doğrusal olduğundan farklı x değerleri farklı m değerleri verir. m'nin değerleri: −7, −5, −3, −1, 1, 3, 5.\nSağlama: 7 farklı değer vardır.\nCevap D."
},
{
  "id": "mat-es-072",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 4,
  "soru": "**5 − [[x|3]] ≥ 2 eşitsizliğini sağlayan kaç tane doğal sayı vardır?**",
  "gorsel": null,
  "secenekler": [
    "8",
    "9",
    "10",
    "11"
  ],
  "dogru": 2,
  "hatalar": [
    "Sınırı dışarıda bıraktın: eşitsizlik ≥ olduğundan x = 9 çözümdür.",
    "0'ı saymadın: 0 bir doğal sayıdır.",
    null,
    "10'u da dahil ettin: x = 10 için 5 − [[10|3]] = [[5|3]] olur ve bu 2'den küçüktür."
  ],
  "aciklama": "Önce eşitsizliği çöz. Burada x'in katsayısı −[[1|3]] olduğundan yön değişir.\nAdım 1: 5'i karşıya geçir: −[[x|3]] ≥ 2 − 5 = −3.\nAdım 2: İki tarafı −3 ile çarp, yön değişir: x ≤ 9.\nAdım 3: Doğal sayılar 0'dan başlar: 0, 1, 2, …, 9.\nAdım 4: Say: 10 tane.\nSağlama: x = 9 için 5 − 3 = 2 ≥ 2 doğrudur; x = 10 için [[5|3]] ≥ 2 yanlıştır.\nCevap C."
},
{
  "id": "mat-es-073",
  "kazanim": "M.8.2.3.1",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Ela x yaşındadır. Kardeşi Ela'dan 4 yaş küçüktür; babasının yaşı ise Ela'nın yaşının 4 katından 6 fazladır. Üçünün yaşları toplamı 86'yı __geçmemektedir__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "x + (x + 4) + (4x + 6) ≤ 86",
    "x + (x − 4) + 4(x + 6) ≤ 86",
    "x + (x − 4) + (4x + 6) < 86",
    "x + (x − 4) + (4x + 6) ≤ 86"
  ],
  "dogru": 3,
  "hatalar": [
    "Kardeşin yaşını Ela'dan 4 fazla aldın: kardeş küçük olduğundan yaşı x − 4'tür.",
    "Babanın yaşında işlem sırasını karıştırdın: önce x 4 ile çarpılır, sonra 6 eklenir; 6 4 ile çarpılmaz.",
    "Eşitliği dışarıda bıraktın: 'geçmemektedir' ifadesinde toplamın tam 86 olması da uygundur, bu yüzden ≤ gerekir.",
    null
  ],
  "aciklama": "Önce üç kişinin yaşını x cinsinden yaz, sonra toplamı sınırla.\nAdım 1: Ela: x.\nAdım 2: Kardeş 4 yaş küçük: x − 4.\nAdım 3: Baba, Ela'nın yaşının 4 katından 6 fazla: 4x + 6.\nAdım 4: 'Geçmemektedir' → ≤ 86: x + (x − 4) + (4x + 6) ≤ 86.\nSağlama: x = 14 için 14 + 10 + 62 = 86 uygundur; x = 15 için 15 + 11 + 66 = 92 uygun değildir.\nCevap D."
},
{
  "id": "mat-es-074",
  "kazanim": "M.8.2.3.2",
  "kademe": 0,
  "zorluk": 4,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir. Gösterilen aralıkta tam olarak 9 tane tam sayı vardır.\n**Buna göre m kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 90\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"44\" x2=\"546\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,44 536,39 536,49\" fill=\"currentColor\"/><polygon points=\"14,44 24,39 24,49\" fill=\"currentColor\"/><line x1=\"83.6\" y1=\"44\" x2=\"476.4\" y2=\"44\" stroke=\"var(--vurgu)\" stroke-width=\"6\"/><line x1=\"83.6\" y1=\"38\" x2=\"83.6\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"83.6\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"476.4\" y1=\"38\" x2=\"476.4\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"476.4\" y=\"74\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">m</text><circle cx=\"83.6\" cy=\"44\" r=\"8\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"476.4\" cy=\"44\" r=\"8\" style=\"fill:var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "5",
    "6",
    "7",
    "9"
  ],
  "dogru": 1,
  "hatalar": [
    "m'yi dahil sandın: −3'ten 5'e kadar 9 tam sayı sayarken m = 5 buldun; m'deki yuvarlak boştur.",
    null,
    "−3'ü saymadın: −3'teki yuvarlak doludur, −3 aralığa dahildir.",
    "Tam sayı adedini m sandın: 9 aralıktaki tam sayıların sayısıdır, m değildir."
  ],
  "aciklama": "−3 dahil (dolu yuvarlak), m dahil değil (boş yuvarlak). Tam sayılar −3'ten başlayıp m'den bir önceki sayıya kadar gider.\nAdım 1: −3'ten başlayarak 9 tam sayı yaz: −3, −2, −1, 0, 1, 2, 3, 4, 5.\nAdım 2: Son tam sayı 5; m dahil olmadığından m, 5'ten sonraki sayıdır: m = 6.\nSağlama: −3 ≤ x < 6 aralığında 9 tam sayı vardır.\nCevap B."
},
{
  "id": "mat-es-075",
  "kazanim": "M.8.2.3.3",
  "kademe": 0,
  "zorluk": 4,
  "soru": "7 − 2x < 15 eşitsizliğini sağlayan en küçük tam sayı a, 4x − 3 ≤ 17 eşitsizliğini sağlayan en büyük tam sayı b'dir.\n**Buna göre a + b kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "0",
    "1",
    "2",
    "9"
  ],
  "dogru": 2,
  "hatalar": [
    "İki sınırı da yanlış ele aldın: a = −4 (−4 çözüm değildir) ve b = 4 (5 çözümdür) aldın.",
    "Sınırlardan birini yanlış ele aldın: ya −4'ü çözüm saydın ya da 5'i dışarıda bıraktın.",
    null,
    "Negatif sayıya bölünce yönü değiştirmeyi ve işareti unuttun, a'yı 4 aldın."
  ],
  "aciklama": "İki eşitsizliği ayrı ayrı çöz, sonra a ve b'yi bul.\nAdım 1: 7 − 2x < 15 → −2x < 8 → −2'ye bölünce yön değişir: x > −4. −4 dahil değildir; en küçük tam sayı a = −3.\nAdım 2: 4x − 3 ≤ 17 → 4x ≤ 20 → x ≤ 5. 5 dahildir; en büyük tam sayı b = 5.\nAdım 3: a + b = −3 + 5 = 2.\nSağlama: x = −3 için 13 < 15 doğrudur, x = −4 için 15 < 15 yanlıştır.\nCevap C."
}
);
