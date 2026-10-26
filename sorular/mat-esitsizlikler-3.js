// Matematik — Eşitsizlikler (M.8.2.3): Kademe 1 (Kavrama) yedeği, sıra 26-75 (mat-es-126 … mat-es-175)
// Birinci dereceden bir bilinmeyenli eşitsizlikler; en çok iki işlem. Mutlak değer, iki bilinmeyenli ve ikinci derece eşitsizlik yoktur. Sayı doğrusu şekilleri ölçeklidir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["esitsizlikler"] = window.LGS_BANK["esitsizlikler"] || []).push(
{
  "id": "mat-es-126",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir sinema salonunda yaşı 13'ten küçük olanlar çocuk bileti alıyor.\n**Yaşı y olan bir kişinin çocuk bileti alabilmesi aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "y ≤ 13",
    "y > 13",
    "y < 13",
    "y ≥ 13"
  ],
  "dogru": 2,
  "hatalar": [
    "Eşitliği ekledin: tam 13 yaşındaki kişi 13'ten küçük değildir, bu yüzden ≤ değil < gerekir.",
    "Yönü ters aldın: 'küçük' ifadesini 'büyük' diye okudun; bu işaret 13 yaşından büyükleri gösterir.",
    null,
    "Hem yön hem eşitlik yanlış: ≥ işareti 13 ve daha büyük yaşları gösterir."
  ],
  "aciklama": "'-den küçük' ifadesi sınırın kendisini kapsamaz ve küçük değerleri gösterir; bu yüzden < işareti kullanılır.\nAdım 1: Sınır 13 yaştır.\nAdım 2: 'Küçük' olduğu için yön küçüktür; 13 yaşındaki kişi dahil olmadığı için eşitlik yoktur: y < 13.\nSağlama: 12 yaşındaki çocuk bileti alır, 13 yaşındaki almaz.\nCevap C."
},
{
  "id": "mat-es-127",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir otoparkın girişindeki levhada 'Araç yüksekliği 2 metreden fazla __olmamalıdır__.' yazıyor.\n**Bir aracın yüksekliği h metre ise otoparka girebilmesi hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "h < 2",
    "h > 2",
    "h ≥ 2",
    "h ≤ 2"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: yüksekliği tam 2 metre olan araç da 2 metreden fazla değildir, otoparka girer.",
    "Yönü ters aldın: bu, levhanın yasakladığı araçları gösterir.",
    "'Fazla olmamalı' ifadesini 'en az' gibi okudun; ≥ işareti 2 metre ve üstündeki araçları uygun sayar.",
    null
  ],
  "aciklama": "'-den fazla olmamalı' bir üst sınır koyar: sınırın kendisi serbesttir, ondan büyük değerler yasaktır.\nAdım 1: Üst sınır 2 metredir.\nAdım 2: 2 metre serbest olduğu için eşitlik var, büyük değerler yasak olduğu için yön 'küçük': h ≤ 2.\nSağlama: 2 metrelik araç girer, 2,1 metrelik araç giremez.\nCevap D."
},
{
  "id": "mat-es-128",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir burs sınavında bursu kazanmak için en az 70 puan almak gerekir.\n**Bir adayın puanı p ise bursu kazanması aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "p > 70",
    "p ≤ 70",
    "p ≥ 70",
    "p < 70"
  ],
  "dogru": 2,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 'en az 70' demek 70 puan alan aday da kazanır.",
    "'En az' ile 'en çok' karıştı: ≤ işareti 70 puan ve altını uygun sayar.",
    null,
    "Hem yönü ters aldın hem eşitliği dışarıda bıraktın: bu işaret 70'ten az puanı gösterir."
  ],
  "aciklama": "'En az' bir alt sınır koyar: sınırın kendisi ve ondan büyük değerler uygundur; bu yüzden ≥ işareti kullanılır.\nAdım 1: Alt sınır 70 puandır.\nAdım 2: 70 puan da yeterli olduğu için eşitlik var, değerler büyüyebildiği için yön 'büyük': p ≥ 70.\nSağlama: 70 puan alan kazanır, 69 puan alan kazanamaz.\nCevap C."
},
{
  "id": "mat-es-129",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir telefon tarifesinde aylık konuşma süresi 500 dakikayı aşarsa ek ücret alınıyor.\n**Bir abonenin bir ayda konuştuğu süre s dakika ise ek ücret ödemesi hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "s ≥ 500",
    "s > 500",
    "s < 500",
    "s ≤ 500"
  ],
  "dogru": 1,
  "hatalar": [
    "Eşitliği ekledin: tam 500 dakika konuşan abone limiti aşmış olmaz, ek ücret ödemez.",
    null,
    "Yönü ters aldın: bu işaret limitin altında kalan aboneleri gösterir.",
    "Hem yön hem eşitlik yanlış: ≤ işareti 500 dakika ve altında konuşanları gösterir."
  ],
  "aciklama": "'Aşmak' sınırın üstüne çıkmak demektir ve sınırın kendisini kapsamaz.\nAdım 1: Sınır 500 dakikadır.\nAdım 2: Aşmak büyük olmak demektir, 500 dahil değildir: s > 500.\nSağlama: 501 dakika konuşan ek ücret öder, 500 dakika konuşan ödemez.\nCevap B."
},
{
  "id": "mat-es-130",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir müzeye 7 yaş ve altındaki çocuklar ücretsiz giriyor.\n**Yaşı y olan bir çocuğun müzeye ücretsiz girmesi aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "y < 7",
    "y ≥ 7",
    "y ≤ 7",
    "y > 7"
  ],
  "dogru": 2,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: '7 yaş ve altı' ifadesinde 7 yaşındaki çocuk da vardır.",
    "Yönü ters aldın: 'altı' ifadesini 'üstü' gibi okudun.",
    null,
    "Hem yön hem eşitlik yanlış: bu işaret 7 yaşından büyükleri gösterir."
  ],
  "aciklama": "'Ve altı' ifadesi sınırın kendisini de kapsar ve küçük değerleri gösterir.\nAdım 1: Sınır 7 yaştır.\nAdım 2: 7 yaşındaki de ücretsiz girdiği için eşitlik var, küçük yaşlar da girdiği için yön 'küçük': y ≤ 7.\nSağlama: 7 yaşındaki çocuk ücretsiz girer, 8 yaşındaki girmez.\nCevap C."
},
{
  "id": "mat-es-131",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir kütüphanede üyeler aynı anda 5'ten fazla kitap ödünç __alamaz__.\n**Bir üyenin aynı anda aldığı kitap sayısı k ise kurala uygun durum hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "k ≤ 5",
    "k < 5",
    "k > 5",
    "k ≥ 5"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eşitliği dışarıda bıraktın: tam 5 kitap '5'ten fazla' değildir, serbesttir.",
    "Yasak olan durumu yazdın: bu işaret kurala uymayan üyeleri gösterir.",
    "Üst sınırı alt sınır sandın: ≥ işareti 5 ve daha fazla kitabı uygun sayar."
  ],
  "aciklama": "'-den fazla alamaz' bir üst sınır koyar: sınırın kendisi serbest, ondan büyük değerler yasaktır.\nAdım 1: Üst sınır 5 kitaptır.\nAdım 2: 5 kitap serbest olduğu için eşitlik var, büyük değerler yasak olduğu için yön 'küçük': k ≤ 5.\nSağlama: 5 kitap alan üye kurala uyar, 6 kitap alan uymaz.\nCevap A."
},
{
  "id": "mat-es-132",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir sağlık merkezinde aşı dolabının sıcaklığı 8 °C'nin altında tutulmalıdır.\n**Dolabın sıcaklığı s °C ise bu kural hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "s < 8",
    "s ≤ 8",
    "s > 8",
    "s ≥ 8"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eşitliği ekledin: 'altında' ifadesi sınırın kendisini kapsamaz, tam 8 °C kurala uymaz.",
    "Yönü ters aldın: bu işaret dolabın 8 °C'den fazla ısındığı durumu gösterir.",
    "Hem yön hem eşitlik yanlış: ≥ işareti 8 °C ve üstünü uygun sayar."
  ],
  "aciklama": "'-in altında' ifadesi sınırın kendisini kapsamaz ve küçük değerleri gösterir.\nAdım 1: Sınır 8 °C'dir.\nAdım 2: Altında olmak küçük olmak demektir, 8 dahil değildir: s < 8.\nSağlama: 7 °C kurala uyar, 8 °C uymaz.\nCevap A."
},
{
  "id": "mat-es-133",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Bir kentteki yarı maratona katılmak için yaşın 18'den __küçük olmaması__ gerekir.\n**Katılımcının yaşı y ise bu koşul hangi eşitsizlikle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "y > 18",
    "y < 18",
    "y ≤ 18",
    "y ≥ 18"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: 18 yaşındaki kişi 18'den küçük değildir, katılabilir.",
    "Olumsuzu çevirmedin: 'küçük olmamak' ifadesi 'küçük' demek değildir, tersidir.",
    "Yönü ters aldın: bu işaret 18 ve altındaki yaşları uygun sayar.",
    null
  ],
  "aciklama": "'Küçük olmamak' sınırın kendisi ve daha büyük değerler demektir. Olumsuzu çevirirken sembolün tersini al, sonra eşitliği ekle: küçük (<) → tersi > → eşitlikle birlikte ≥.\nAdım 1: Sınır 18 yaştır.\nAdım 2: 18 yaşındaki katılabildiği için eşitlik var; büyük yaşlar da katılabildiği için yön 'büyük': y ≥ 18.\nSağlama: 18 yaşındaki katılır, 17 yaşındaki katılamaz.\nCevap D."
},
{
  "id": "mat-es-134",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**x ≥ −2 eşitsizliği sayı doğrusunda gösterilirken −2'deki yuvarlak ve okun yönü için aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": ["Yuvarlak dolu, ok sağa doğru","Yuvarlak boş, ok sağa doğru","Yuvarlak dolu, ok sola doğru","Yuvarlak boş, ok sola doğru"],
  "dogru": 0,
  "hatalar": [null,"≥ işaretindeki eşitlik çizgisini gözden kaçırdın: −2 de çözüm olduğu için yuvarlak dolu olur.","Yönü ters aldın: x ≥ −2, −2'den büyük sayıları gösterir; büyük sayılar sayı doğrusunda sağdadır.","Hem yuvarlak hem yön yanlış: ≥ işareti dolu yuvarlak ve sağa doğru ok ister."],
  "aciklama": "Sayı doğrusunda ≤ ve ≥ dolu yuvarlakla, < ve > boş yuvarlakla gösterilir.\nAdım 1: x ≥ −2, \"x, −2'ye eşit ya da −2'den büyük\" demektir. −2 de çözümdür; bu yüzden −2'deki yuvarlak doludur.\nAdım 2: −2'den büyük sayılar sayı doğrusunda −2'nin sağındadır; ok sağa doğru gider.\nSağlama: 0 sayısı x ≥ −2 eşitsizliğini sağlar ve −2'nin sağındadır; ok doğru yöndedir.\nSık yapılan hata: ≥ ile > işaretini aynı sanıp yuvarlağı boş çizmek.\nCevap A."
},
{
  "id": "mat-es-135",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Aşağıdakilerden hangisi gösterilen bölgede yer alır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"93.33\" y1=\"40\" x2=\"93.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"93.33\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"146.67\" y1=\"40\" x2=\"146.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"146.67\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"253.33\" y1=\"40\" x2=\"253.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"253.33\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"306.67\" y1=\"40\" x2=\"306.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"306.67\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"413.33\" y1=\"40\" x2=\"413.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"413.33\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"466.67\" y1=\"40\" x2=\"466.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"466.67\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"306.67\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"306.67\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−3",
    "−1",
    "0",
    "1"
  ],
  "dogru": 3,
  "hatalar": [
    "Ok sağa gidiyor; −3, 1'in solunda kaldığı için bölgenin dışındadır.",
    "Ok sağa gidiyor; −1, 1'in solunda kaldığı için bölgenin dışındadır.",
    "0, 1'in solunda kalır; bölge 1'den başlayıp sağa doğru gider.",
    null
  ],
  "aciklama": "Dolu yuvarlak o sayının çözüme dahil olduğunu, ok sağa gidiyorsa değerlerin büyüdüğünü gösterir.\nAdım 1: Gösterim x ≥ 1 eşitsizliğidir.\nAdım 2: −3, −1 ve 0 sayıları 1'den küçüktür; 1 ise dolu yuvarlak olduğu için bölgededir.\nSağlama: 1 ≥ 1 doğrudur.\nCevap D."
},
{
  "id": "mat-es-136",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**Aşağıdaki eşitsizliklerden hangisi sayı doğrusunda gösterilirken sınırdaki sayının üzerine boş yuvarlak çizilir?**",
  "gorsel": null,
  "secenekler": ["x ≥ 4","x > 1","x ≤ −2","x ≤ 0"],
  "dogru": 1,
  "hatalar": ["≥ işaretinde \"eşit\" anlamı vardır; 4 de çözüm olduğu için yuvarlak dolu çizilir.",null,"≤ işareti −2'yi de çözüme katar; bu yüzden −2'deki yuvarlak doludur.","≤ işareti 0'ı da çözüme katar; bu yüzden 0'daki yuvarlak doludur."],
  "aciklama": "Sayı doğrusunda sınırdaki sayı çözüme dahilse yuvarlak dolu, dahil değilse boş çizilir.\nAdım 1: ≤ ve ≥ işaretlerinde \"eşit\" anlamı vardır; sınırdaki sayı dahildir, yuvarlak doludur.\nAdım 2: < ve > işaretlerinde sınırdaki sayı dahil değildir, yuvarlak boştur.\nAdım 3: Şıklarda eşitlik içermeyen tek eşitsizlik x > 1'dir; 1'in üzerine boş yuvarlak çizilir.\nSağlama: 1 > 1 yanlıştır; 1 çözüm olmadığı için boş bırakılır.\nCevap B."
},
{
  "id": "mat-es-137",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**x < −2 eşitsizliği sayı doğrusunda gösterilirken aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "−2'de dolu yuvarlak çizilir, ok sola gider.",
    "−2'de boş yuvarlak çizilir, ok sola gider.",
    "−2'de boş yuvarlak çizilir, ok sağa gider.",
    "−2'de dolu yuvarlak çizilir, ok sağa gider."
  ],
  "dogru": 1,
  "hatalar": [
    "Yuvarlak yanlış: < işareti −2'yi kapsamaz, bu yüzden yuvarlak boş olmalıdır.",
    null,
    "Ok yönünü ters aldın: küçük değerler sayı doğrusunun solundadır.",
    "Hem yuvarlak hem yön yanlış: < işareti boş yuvarlak ve sola giden ok ister."
  ],
  "aciklama": "Boş yuvarlak sınırın dahil olmadığını, ok yönü ise değerlerin hangi tarafta olduğunu gösterir.\nAdım 1: İşaret <: sınır (−2) dahil değil, yuvarlak boş.\nAdım 2: 'Küçük' olduğundan ok sola gider.\nSağlama: −3 çözümdür ve −2'nin solundadır; −2 çözüm değildir.\nCevap B."
},
{
  "id": "mat-es-138",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Aşağıdaki sayılardan hangisi x'in değeri __olamaz__?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"20\" y1=\"46\" x2=\"332\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"340\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "5",
    "4",
    "3",
    "1"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Ok sola gidiyor; 4, 5'in solunda kaldığı için x'in değeri olabilir.",
    "Ok sola gidiyor; 3, 5'in solunda kaldığı için x'in değeri olabilir.",
    "Ok sola gidiyor; 1, 5'in solunda kaldığı için x'in değeri olabilir."
  ],
  "aciklama": "Boş yuvarlak o sayının çözüme dahil olmadığını gösterir.\nAdım 1: Gösterim x < 5 eşitsizliğidir.\nAdım 2: 1, 3 ve 4 sayıları 5'ten küçüktür; 5 ise dahil değildir.\nSağlama: 5 < 5 yanlıştır.\nCevap A."
},
{
  "id": "mat-es-139",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "Aşağıdaki sayı doğrusunda bir kentteki sabah sıcaklığının (t °C) alabileceği değerler gösterilmiştir.\n**Bu gösterim hangi eşitsizliğe aittir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"t için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"108.57\" y1=\"40\" x2=\"108.57\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"108.57\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"177.14\" y1=\"40\" x2=\"177.14\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"177.14\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"245.71\" y1=\"40\" x2=\"245.71\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"245.71\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"314.29\" y1=\"40\" x2=\"314.29\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"314.29\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"382.86\" y1=\"40\" x2=\"382.86\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"382.86\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"451.43\" y1=\"40\" x2=\"451.43\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"451.43\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"245.71\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"245.71\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "t > −1",
    "t ≤ −1",
    "t ≥ −1",
    "t < −1"
  ],
  "dogru": 2,
  "hatalar": [
    "Dolu yuvarlağı boş sandın: −1 de çözüme dahil olduğu için > değil ≥ gerekir.",
    "Ok yönünü ters okudun: ok sağa gidiyorsa değerler −1'den büyüktür.",
    null,
    "Hem yön hem yuvarlak yanlış: ok sağa gider ve −1'deki yuvarlak doludur."
  ],
  "aciklama": "Ok sağa gidiyorsa değerler büyür. Dolu yuvarlak sınırın dahil olduğunu gösterir.\nAdım 1: Ok sağa gidiyor: 'büyük'.\nAdım 2: −1'deki yuvarlak dolu: −1 dahil.\nAdım 3: İkisi birleşince t ≥ −1.\nSağlama: −1 ve 2 çözümdür, −2 çözüm değildir.\nCevap C."
},
{
  "id": "mat-es-140",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**Sayı doğrusunda 5'te dolu yuvarlak çizilmiş ve ok sola doğru gitmiştir. Bu gösterim aşağıdaki cümlelerden hangisini anlatır?**",
  "gorsel": null,
  "secenekler": [
    "x, 5'ten küçüktür.",
    "x, 5'e eşit ya da 5'ten büyüktür.",
    "x, 5'ten büyüktür.",
    "x, 5'e eşit ya da 5'ten küçüktür."
  ],
  "dogru": 3,
  "hatalar": [
    "Dolu yuvarlağı boş sandın: dolu yuvarlak 5'in de çözüm olduğunu gösterir.",
    "Ok yönünü ters okudun: ok sola gidiyorsa değerler 5'ten küçüktür.",
    "Hem yön hem yuvarlak yanlış.",
    null
  ],
  "aciklama": "Dolu yuvarlak 'eşit olabilir' demektir, sola giden ok 'küçük' demektir.\nAdım 1: Dolu yuvarlak: 5 dahil.\nAdım 2: Ok sola: değerler 5'ten küçük.\nAdım 3: Birleşince x ≤ 5, yani 'x, 5'e eşit ya da 5'ten küçüktür'.\nSağlama: 5 ve 3 çözümdür, 6 çözüm değildir.\nCevap D."
},
{
  "id": "mat-es-141",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**x − 7 ≥ 2 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≥ −5",
    "x ≤ 9",
    "x ≤ −5",
    "x ≥ 9"
  ],
  "dogru": 3,
  "hatalar": [
    "7'yi karşı tarafa geçirirken çıkardın: 2 − 7 = −5. Oysa 7 eklenir.",
    "Yönü değiştirdin: toplama-çıkarmada eşitsizliğin yönü değişmez.",
    "Hem 7'yi çıkardın hem yönü çevirdin.",
    null
  ],
  "aciklama": "Çıkarılan sayıyı karşı tarafa geçirmek için o sayı eklenir; yön değişmez.\nAdım 1: İki tarafa 7 ekle: x ≥ 2 + 7.\nAdım 2: x ≥ 9.\nSağlama: x = 9 için 9 − 7 = 2 ≥ 2 doğru; x = 8 için 1 ≥ 2 yanlış.\nCevap D."
},
{
  "id": "mat-es-142",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**[[x|3]] > 2 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > [[2|3]]",
    "x < 6",
    "x > 6",
    "x < [[2|3]]"
  ],
  "dogru": 2,
  "hatalar": [
    "3'e çarpmak yerine böldün: bölmenin tersi çarpmadır.",
    "Yönü değiştirdin: pozitif sayıyla çarparken yön değişmez.",
    null,
    "Hem bölme yaptın hem yönü çevirdin."
  ],
  "aciklama": "Bilinmeyen 3'e bölünmüşse iki tarafı 3 ile çarpmak onu yalnız bırakır; 3 pozitif olduğu için yön değişmez.\nAdım 1: İki tarafı 3 ile çarp: x > 2 · 3.\nAdım 2: x > 6.\nSağlama: x = 9 için [[9|3]] = 3 > 2 doğru; x = 6 için 2 > 2 yanlış.\nCevap C."
},
{
  "id": "mat-es-143",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**6 + x ≥ 10 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≥ 16",
    "x ≤ 4",
    "x ≥ 4",
    "x ≤ 16"
  ],
  "dogru": 2,
  "hatalar": [
    "6'yı çıkarmak yerine ekledin: 10 + 6 = 16.",
    "Yönü değiştirdin: toplama-çıkarmada eşitsizliğin yönü değişmez.",
    null,
    "Hem 6'yı ekledin hem yönü çevirdin."
  ],
  "aciklama": "İki taraftan aynı sayıyı çıkarmak eşitsizliğin yönünü değiştirmez.\nAdım 1: İki taraftan 6 çıkar: x ≥ 10 − 6.\nAdım 2: x ≥ 4.\nSağlama: x = 4 için 6 + 4 = 10 ≥ 10 doğru; x = 3 için 9 ≥ 10 yanlış.\nCevap C."
},
{
  "id": "mat-es-144",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**2x ≥ −10 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≤ −5",
    "x ≥ −5",
    "x ≥ 5",
    "x ≤ 5"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü değiştirdin: pozitif sayıya bölerken yön değişmez.",
    null,
    "İşareti kaybettin: −10 ÷ 2 = −5 olur, 5 değil.",
    "Hem işareti kaybettin hem yönü çevirdin."
  ],
  "aciklama": "Eşitsizliğin iki tarafı pozitif bir sayıya bölünürse yön değişmez; negatif sayının işareti korunur.\nAdım 1: İki tarafı 2'ye böl: x ≥ −10 ÷ 2.\nAdım 2: x ≥ −5.\nSağlama: x = 0 için 0 ≥ −10 doğru; x = −6 için −12 ≥ −10 yanlış.\nCevap B."
},
{
  "id": "mat-es-145",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**x + 3 ≤ 10 eşitsizliğini sağlayan en büyük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "13",
    "10",
    "7",
    "6"
  ],
  "dogru": 2,
  "hatalar": [
    "3'ü çıkarmak yerine ekledin: 10 + 3 = 13.",
    "3'ü çıkarmayı unuttun: sınır olan 10'u cevap sandın.",
    null,
    "≤ işaretini < gibi okudun: 7 de çözüme dahildir, daha büyüktür."
  ],
  "aciklama": "Önce eşitsizliği çöz, sonra çözüm kümesindeki en büyük tam sayıya bak.\nAdım 1: İki taraftan 3 çıkar: x ≤ 7.\nAdım 2: 7 dahil olduğundan en büyük tam sayı 7'dir.\nSağlama: 7 + 3 = 10 ≤ 10 doğru; 8 + 3 = 11 ≤ 10 yanlış.\nCevap C."
},
{
  "id": "mat-es-146",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**Aşağıdaki sayılardan hangisi x − 4 > 1 eşitsizliğini sağlar?**",
  "gorsel": null,
  "secenekler": [
    "6",
    "5",
    "4",
    "2"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "5 − 4 = 1 olur; 1 > 1 yanlıştır, > işareti eşitliği kapsamaz.",
    "4 − 4 = 0 olur ve 0, 1'den büyük değildir.",
    "2 − 4 = −2 olur ve −2, 1'den büyük değildir."
  ],
  "aciklama": "Önce eşitsizliği çözüp çözüm kümesine bak; sonra seçenekleri dene.\nAdım 1: İki tarafa 4 ekle: x > 5.\nAdım 2: 5 dahil değildir; 2, 4 ve 5 çözüm değildir, 6 > 5 çözümdür.\nSağlama: 6 − 4 = 2 > 1 doğrudur.\nCevap A."
},
{
  "id": "mat-es-147",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**Aşağıdaki eşitsizliklerden hangisi x > 4 ile aynı çözüm kümesine sahiptir?**",
  "gorsel": null,
  "secenekler": [
    "x + 2 < 6",
    "x − 2 > 6",
    "x + 2 > 6",
    "x − 2 < 6"
  ],
  "dogru": 2,
  "hatalar": [
    "Yönü ters aldın: x + 2 < 6 eşitsizliği x < 4 verir.",
    "2'yi çıkarmak yerine ekledin: x − 2 > 6 eşitsizliği x > 8 verir.",
    null,
    "Hem yönü hem işlemi karıştırdın: x − 2 < 6 eşitsizliği x < 8 verir."
  ],
  "aciklama": "Aynı çözüm kümesine sahip eşitsizlikleri bulmak için seçenekleri tek tek çözersin.\nAdım 1: x + 2 > 6 → iki taraftan 2 çıkar: x > 4.\nAdım 2: Diğerlerini çöz: x + 2 < 6 → x < 4; x − 2 > 6 → x > 8; x − 2 < 6 → x < 8.\nSağlama: Yalnız ilki x > 4 verir.\nCevap C."
},
{
  "id": "mat-es-148",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**−8 + x < −3 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < −11",
    "x < 5",
    "x > 5",
    "x > −11"
  ],
  "dogru": 1,
  "hatalar": [
    "−8'i karşıya geçirirken işaretini değiştirmedin: −3 − 8 = −11. Oysa 8 eklenir.",
    null,
    "Yönü değiştirdin: toplama-çıkarmada eşitsizliğin yönü değişmez.",
    "Hem işareti değiştirmedin hem yönü çevirdin."
  ],
  "aciklama": "Eksi işaretli sayıyı karşı tarafa geçirirken işareti değişir: −8 karşıya +8 olarak geçer.\nAdım 1: İki tarafa 8 ekle: x < −3 + 8.\nAdım 2: x < 5.\nSağlama: x = 4 için −8 + 4 = −4 < −3 doğru; x = 5 için −3 < −3 yanlış.\nCevap B."
},
{
  "id": "mat-es-149",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 1,
  "soru": "**Aşağıdakilerden hangisi 2x < 10 eşitsizliğinin çözüm kümesinde __bulunmaz__?**",
  "gorsel": null,
  "secenekler": [
    "2",
    "3",
    "4",
    "5"
  ],
  "dogru": 3,
  "hatalar": [
    "2 · 2 = 4 < 10 doğrudur; 2 çözüm kümesindedir.",
    "2 · 3 = 6 < 10 doğrudur; 3 çözüm kümesindedir.",
    "2 · 4 = 8 < 10 doğrudur; 4 çözüm kümesindedir.",
    null
  ],
  "aciklama": "Önce eşitsizliği çöz, sonra sınır sayının dahil olup olmadığına bak.\nAdım 1: İki tarafı 2'ye böl: x < 5.\nAdım 2: 5 dahil değildir; 2, 3 ve 4 çözümdür.\nSağlama: x = 5 için 10 < 10 yanlıştır.\nCevap D."
},
{
  "id": "mat-es-150",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Kenarları 6 m ve x m olan dikdörtgen biçimindeki bir bostanın çevresine en fazla 40 m çit çekilecektir.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "6 + x ≤ 40",
    "2(6 + x) ≤ 40",
    "2(6 + x) ≥ 40",
    "12 + x ≤ 40"
  ],
  "dogru": 1,
  "hatalar": [
    "Çevreyi eksik hesapladın: dikdörtgenin çevresi iki kısa ve iki uzun kenarın toplamıdır, yalnız iki kenarın toplamı değil.",
    null,
    "'En fazla' ile 'en az'ı karıştırdın: ≥ işareti alt sınır koyar.",
    "Çarpmayı yalnız 6'ya uyguladın: 2 · 6 + x yazdın; oysa 2 katı toplamın tamamına aittir."
  ],
  "aciklama": "Dikdörtgenin çevresi iki kısa ve iki uzun kenarın toplamıdır; 'en fazla' ise üst sınırdır ve eşitliği içerir.\nAdım 1: Çevre = 2(6 + x).\nAdım 2: Çit en fazla 40 m olacağından 2(6 + x) ≤ 40.\nSağlama: x = 14 için çevre 40 m, uygun; x = 15 için 42 m, uygun değil.\nCevap B."
},
{
  "id": "mat-es-151",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir telefonun belleğinde 22 GB boş yer vardır. Telefona her biri 4 GB olan videolardan v tane indirilecek ve bellekte en az 10 GB boş yer kalması istenmektedir.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "22 − 4v ≥ 10",
    "22 − 4v ≤ 10",
    "22 + 4v ≥ 10",
    "4v − 22 ≥ 10"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: 'en az 10 GB kalsın' demek kalan yerin 10'a eşit ya da 10'dan büyük olması demektir.",
    "Videolar boş yeri azaltır: kalan yer 22 − 4v olur, 22 + 4v değil.",
    "Çıkarmanın sırasını ters yazdın: kalan boş yer 22 − 4v'dir, 4v − 22 değil."
  ],
  "aciklama": "Kalan boş yer, başlangıçtaki boş yerden indirilen videoların kapladığı yerin çıkarılmasıyla bulunur; 'en az' alt sınırdır.\nAdım 1: v video 4v GB yer kaplar; kalan yer 22 − 4v olur.\nAdım 2: Kalan yer en az 10 olacağından 22 − 4v ≥ 10.\nSağlama: v = 3 için 22 − 12 = 10 uygun; v = 4 için 6 uygun değil.\nCevap A."
},
{
  "id": "mat-es-152",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir belediye, parktaki 15 fidana ek olarak her sırasında 8 fidan bulunan s sıra fidan daha dikecektir. Parktaki toplam fidan sayısı 100'ü __geçmeyecektir__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "15 + 8s < 100",
    "15 + 8s ≥ 100",
    "23s ≤ 100",
    "15 + 8s ≤ 100"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: toplam tam 100 olabilir, 100'ü geçmemiş olur.",
    "Yönü ters aldın: 'geçmeyecek' ifadesi üst sınır koyar.",
    "Sabit sayıyı her sıraya ekledin: 15 fidan yalnız bir kez sayılır, s ile çarpılmaz.",
    null
  ],
  "aciklama": "Toplam fidan sayısı = mevcut fidan + yeni dikilenler. 'Geçmeyecek' üst sınırdır ve sınırın kendisi uygundur.\nAdım 1: s sırada 8s fidan dikilir; toplam 15 + 8s olur.\nAdım 2: Toplam 100'ü geçmeyeceğinden 15 + 8s ≤ 100.\nSağlama: s = 10 için 95 uygun; s = 11 için 103 uygun değil.\nCevap D."
},
{
  "id": "mat-es-153",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**Bir x sayısının 5 fazlasının 3 katının 24'ten küçük olması aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "3x + 5 < 24",
    "3(x + 5) > 24",
    "3(x + 5) ≤ 24",
    "3(x + 5) < 24"
  ],
  "dogru": 3,
  "hatalar": [
    "Parantezi unuttun: 3 katı yalnız x'e uygulandı; oysa '5 fazlasının 3 katı' toplamın tamamıdır.",
    "Yönü ters aldın: 'küçüktür' ifadesi < ile gösterilir.",
    "Eşitliği ekledin: 'küçüktür' ifadesi sınırın kendisini kapsamaz.",
    null
  ],
  "aciklama": "Sözel ifadeyi parça parça yaz: önce 'x'in 5 fazlası', sonra 'bunun 3 katı'.\nAdım 1: x'in 5 fazlası x + 5'tir.\nAdım 2: Bunun 3 katı 3(x + 5) olur.\nAdım 3: 24'ten küçük olduğu için 3(x + 5) < 24.\nSık yapılan hata: 3 ile çarpmanın toplamın tamamına uygulandığını göstermek için parantez gerekir.\nCevap D."
},
{
  "id": "mat-es-154",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Kantinde simit 6 TL, ayran 4 TL'dir. Arda 2 simit ve a tane ayran alacaktır. Arda'nın 30 TL'si vardır ve alışveriş sonunda en az 5 TL'sinin kalmasını istiyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "30 − (12 + 4a) ≥ 5",
    "30 − (12 + 4a) ≤ 5",
    "30 − 12 + 4a ≥ 5",
    "30 − (6 + 4a) ≥ 5"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: 'en az 5 TL kalsın' demek kalan paranın 5'e eşit ya da 5'ten büyük olması demektir.",
    "Parantezi unuttun: 4a de bir harcamadır ve paradan çıkarılmalıdır; sen onu paraya eklemiş oldun.",
    "2 simidi 1 simit saydın: simit harcaması 2 · 6 = 12 TL'dir."
  ],
  "aciklama": "Kalan para = başlangıç parası − toplam harcama. 'En az' alt sınırdır.\nAdım 1: Harcama: 2 simit 12 TL, a ayran 4a TL; toplam 12 + 4a.\nAdım 2: Kalan para 30 − (12 + 4a) ve en az 5 olacak: 30 − (12 + 4a) ≥ 5.\nSağlama: a = 3 için harcama 24 TL, kalan 6 TL uygun; a = 4 için harcama 28 TL, kalan 2 TL uygun değil.\nCevap A."
},
{
  "id": "mat-es-155",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir oyunda tamamlanan her bölüm 40 puan getiriyor, yapılan her yanlış hareket ise 3 puan götürüyor. Selim 3 bölümü tamamladı ve h tane yanlış hareket yaptı. Selim'in puanının en az 100 olması gerekiyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "120 + 3h ≥ 100",
    "120 − 3h ≥ 100",
    "120 − 3h ≤ 100",
    "40 − 3h ≥ 100"
  ],
  "dogru": 1,
  "hatalar": [
    "Yanlış hareket puan götürür: puandan çıkarılması gerekirken eklendi.",
    null,
    "Yönü ters aldın: 'en az 100 puan' demek puanın 100'e eşit ya da 100'den büyük olması demektir.",
    "3 bölümü hesaba katmadın: 3 bölümden gelen puan 3 · 40 = 120'dir."
  ],
  "aciklama": "Toplam puan = bölümlerden gelen puan − yanlışlar yüzünden giden puan. 'En az' alt sınırdır.\nAdım 1: 3 bölümden 3 · 40 = 120 puan gelir.\nAdım 2: h yanlış hareket 3h puan götürür; puan 120 − 3h olur.\nAdım 3: Puan en az 100 olacağından 120 − 3h ≥ 100.\nSağlama: h = 6 için 102 uygun; h = 7 için 99 uygun değil.\nCevap B."
},
{
  "id": "mat-es-156",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir seranın sıcaklığı sabah 14 °C'dir ve her saat 3 °C artmaktadır. Sıcaklığın t saat sonra 35 °C'yi __geçmemesi__ isteniyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "14 + 3t < 35",
    "14 + 3t ≥ 35",
    "17t ≤ 35",
    "14 + 3t ≤ 35"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği dışarıda bıraktın: sıcaklık tam 35 °C olabilir, 35 °C'yi geçmemiş olur.",
    "Yönü ters aldın: 'geçmemesi' ifadesi üst sınır koyar.",
    "Başlangıç sıcaklığını da t ile çarptın: 14 °C yalnız bir kez eklenir, her saat tekrarlanmaz.",
    null
  ],
  "aciklama": "Sıcaklık = başlangıç sıcaklığı + her saatte artan sıcaklık. 'Geçmemeli' üst sınırdır ve sınırın kendisi uygundur.\nAdım 1: t saatte 3t °C artar; sıcaklık 14 + 3t olur.\nAdım 2: Sıcaklık 35'i geçmeyeceğinden 14 + 3t ≤ 35.\nSağlama: t = 7 için 35 °C uygun; t = 8 için 38 °C uygun değil.\nCevap D."
},
{
  "id": "mat-es-157",
  "kazanim": "M.8.2.3.1",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir sayının 3 eksiğinin 4 katı, bu sayının 2 katından __fazla değildir__.\n**Bu sayıya x dersek bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "4(x − 3) ≤ 2x",
    "4(x − 3) < 2x",
    "4x − 3 ≤ 2x",
    "4(x − 3) ≥ 2x"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eşitliği dışarıda bıraktın: 'fazla değildir' ifadesinde iki değer eşit de olabilir.",
    "Parantezi unuttun: 4 katı '3 eksiğinin' tamamına uygulanmalıdır.",
    "Yönü ters aldın: 'fazla değildir' ifadesi ≤ ile gösterilir, ≥ ile değil."
  ],
  "aciklama": "'Fazla değildir' ifadesi 'küçük ya da eşittir' demektir: olumsuzu çevirirken sembolün tersini al, sonra eşitliği ekle.\nAdım 1: Sayının 3 eksiği x − 3, bunun 4 katı 4(x − 3) olur.\nAdım 2: Sayının 2 katı 2x'tir.\nAdım 3: Birincisi ikincisinden fazla olmadığından 4(x − 3) ≤ 2x.\nSağlama: x = 6 için 12 ≤ 12 doğru; x = 7 için 16 ≤ 14 yanlış.\nCevap A."
},
{
  "id": "mat-es-158",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Gösterilen aralıktaki tam sayıların toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"136\" y1=\"46\" x2=\"424\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"136\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"424\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": ["35","33","27","25"],
  "dogru": 0,
  "hatalar": [null,"2'yi saymadın: 2'deki yuvarlak dolu, yani 2 de aralıktadır (35 − 2 = 33 buldun).","8'i saymadın: 8'deki yuvarlak dolu, yani 8 de aralıktadır (35 − 8 = 27 buldun).","İki ucu da saymadın: dolu yuvarlaklar 2 ile 8'in aralığa dahil olduğunu gösterir (3 + 4 + 5 + 6 + 7 = 25 buldun)."],
  "aciklama": "Dolu yuvarlak, o sayının aralığa dahil olduğunu gösterir.\nAdım 1: 2'de ve 8'de yuvarlaklar dolu: gösterim 2 ≤ x ≤ 8'dir.\nAdım 2: Aralıktaki tam sayılar: 2, 3, 4, 5, 6, 7, 8.\nAdım 3: Toplam: 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35.\nSağlama: Uçlardan eşleştir: 2 + 8 = 10, 3 + 7 = 10, 4 + 6 = 10, ortada 5 kalır; 10 + 10 + 10 + 5 = 35.\nCevap A."
},
{
  "id": "mat-es-159",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Bu aralıktaki tam sayıların toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"108\" y1=\"46\" x2=\"452\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"100\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"460\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "9",
    "7",
    "5",
    "3"
  ],
  "dogru": 2,
  "hatalar": [
    "4'ü de ekledin: 4'teki yuvarlak boştur, yani 4 dahil değildir.",
    "Hem −2'yi hem 4'ü ekledin: iki yuvarlak da boştur.",
    null,
    "−2'yi de ekledin: −2'deki yuvarlak boştur, yani −2 dahil değildir."
  ],
  "aciklama": "Boş yuvarlaktaki sayılar toplama katılmaz.\nAdım 1: Aralık −2 < x < 4.\nAdım 2: Tam sayılar −1, 0, 1, 2, 3.\nAdım 3: Topla: −1 + 0 + 1 + 2 + 3 = 5.\nSağlama: −1 ile 1 birbirini götürür; geriye 0 + 2 + 3 = 5 kalır.\nCevap C."
},
{
  "id": "mat-es-160",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**x bir asal sayı olduğuna göre x kaç farklı değer alabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"93.33\" y1=\"40\" x2=\"93.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"93.33\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"146.67\" y1=\"40\" x2=\"146.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"146.67\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"253.33\" y1=\"40\" x2=\"253.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"253.33\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"306.67\" y1=\"40\" x2=\"306.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"306.67\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"413.33\" y1=\"40\" x2=\"413.33\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"413.33\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"466.67\" y1=\"40\" x2=\"466.67\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"466.67\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"20\" y1=\"46\" x2=\"413.33\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"413.33\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "4",
    "5",
    "7"
  ],
  "dogru": 1,
  "hatalar": [
    "7'yi saymadın: 7'deki yuvarlak doludur ve 7 asal bir sayıdır.",
    null,
    "1'i de asal sayı saydın: 1'in yalnız bir böleni vardır, asal sayı değildir.",
    "1'den 7'ye kadar bütün sayıları saydın: asal olma koşulunu uygulamadın."
  ],
  "aciklama": "Asal sayı, yalnız 1'e ve kendisine bölünebilen 1'den büyük doğal sayıdır.\nAdım 1: Gösterim x ≤ 7 eşitsizliğidir.\nAdım 2: Bu bölgedeki asal sayılar 2, 3, 5 ve 7'dir.\nAdım 3: Say: 4 tane.\nSık yapılan hata: 1'i asal saymak.\nCevap B."
},
{
  "id": "mat-es-161",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir mağazada yapılan alışveriş tutarı t TL olmak üzere, hediye çekilişine katılabilen müşterilerin tutarları aşağıdaki sayı doğrusunda gösterilmiştir.\n**Bu gösterim aşağıdaki cümlelerden hangisine uygundur?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"t için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">100</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">125</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">150</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">175</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">200</text><line x1=\"288\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"280\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "Çekilişe yalnızca tutarı 150 TL'den fazla olanlar katılır.",
    "Çekilişe yalnızca tutarı 150 TL ve üzeri olanlar katılır.",
    "Çekilişe yalnızca tutarı 150 TL'den az olanlar katılır.",
    "Çekilişe yalnızca tutarı 150 TL ve altı olanlar katılır."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Boş yuvarlağı dolu sandın: 150 TL dahil değildir, tam 150 TL'lik alışveriş yapan katılamaz.",
    "Ok yönünü ters okudun: ok sağa gidiyorsa tutarlar 150'den büyüktür.",
    "Hem yön hem yuvarlak yanlış: ok sağa gider ve 150'deki yuvarlak boştur."
  ],
  "aciklama": "Ok sağa gidiyorsa değerler büyür; boş yuvarlak sınırın dahil olmadığını gösterir.\nAdım 1: Ok sağa: tutar 150'den büyük.\nAdım 2: 150'deki yuvarlak boş: 150 TL dahil değil.\nAdım 3: Gösterim t > 150'dir; cümleyle 'tutarı 150 TL'den fazla olanlar'.\nSağlama: 151 TL katılır, 150 TL katılamaz.\nCevap A."
},
{
  "id": "mat-es-162",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda A ve B gösterimleri verilmiştir. x, hem A'yı hem B'yi sağlayan bir tam sayıdır.\n**Buna göre x kaç farklı değer alabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 156\" role=\"img\" aria-label=\"A ve B için sayı doğrusu\"><polygon points=\"546,34 532,26 532,42\" fill=\"var(--vurgu)\"/><polygon points=\"14,80 28,72 28,88\" fill=\"var(--vurgu)\"/><line x1=\"14\" y1=\"118\" x2=\"546\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,118 536,113 536,123\" fill=\"currentColor\"/><polygon points=\"14,118 24,113 24,123\" fill=\"currentColor\"/><line x1=\"40\" y1=\"112\" x2=\"40\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"100\" y1=\"112\" x2=\"100\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"160\" y1=\"112\" x2=\"160\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"220\" y1=\"112\" x2=\"220\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"112\" x2=\"280\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"340\" y1=\"112\" x2=\"340\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"400\" y1=\"112\" x2=\"400\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"460\" y1=\"112\" x2=\"460\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"520\" y1=\"112\" x2=\"520\" y2=\"124\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"148\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"14\" y1=\"34\" x2=\"546\" y2=\"34\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"10\" y=\"20\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">A</text><line x1=\"100\" y1=\"34\" x2=\"536\" y2=\"34\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><line x1=\"100\" y1=\"34\" x2=\"100\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4 4\" opacity=\"0.45\"/><circle cx=\"100\" cy=\"34\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><line x1=\"14\" y1=\"80\" x2=\"546\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"10\" y=\"66\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">B</text><line x1=\"20\" y1=\"80\" x2=\"452\" y2=\"80\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><line x1=\"460\" y1=\"80\" x2=\"460\" y2=\"118\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4 4\" opacity=\"0.45\"/><circle cx=\"460\" cy=\"80\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "5",
    "6",
    "7",
    "9"
  ],
  "dogru": 1,
  "hatalar": [
    "Bir ucu eksik saydın: −2'deki yuvarlak dolu olduğu için −2 de ortak bölgededir.",
    null,
    "4'ü de saydın: 4'teki yuvarlak boştur, yani 4 ortak bölgede değildir.",
    "Sayı doğrusundaki bütün çentikleri saydın: ortak bölgeyi bulmadın."
  ],
  "aciklama": "Ortak çözüm, iki gösterimde de boyalı olan bölgedir.\nAdım 1: A gösterimi x ≥ −2, B gösterimi x < 4 demektir.\nAdım 2: Ortak bölge −2 ≤ x < 4 olur.\nAdım 3: Tam sayılar −2, −1, 0, 1, 2, 3; yani 6 tane.\nSağlama: −2 her iki gösterimde de var, 4 yalnız A'da var.\nCevap B."
},
{
  "id": "mat-es-163",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**Aşağıdaki çift taraflı eşitsizliklerden hangisinde 0 sayısı çözüm kümesinde yer alır?**",
  "gorsel": null,
  "secenekler": [
    "−3 < x < 0",
    "0 < x < 3",
    "−3 < x ≤ 0",
    "0 < x ≤ 3"
  ],
  "dogru": 2,
  "hatalar": [
    "Sağ uç boş yuvarlaktır: < işareti 0'ı kapsamaz.",
    "0 sol uçtadır ve < işareti 0'ı kapsamaz; bu aralık 0'dan büyük değerlerdir.",
    null,
    "≤ işareti yalnız 3'ü kapsar; 0 sol uçtaki < yüzünden dahil değildir."
  ],
  "aciklama": "Çift taraflı eşitsizlikte her uç ayrı okunur: ≤ olan uç dahil, < olan uç dahil değildir.\nAdım 1: −3 < x < 0 aralığında 0 sağ uçtadır ve dahil değildir.\nAdım 2: 0 < x < 3 ve 0 < x ≤ 3 aralıklarında 0 sol uçtadır ve dahil değildir.\nAdım 3: −3 < x ≤ 0 aralığında 0 sağ uçtadır ve ≤ yüzünden dahildir.\nSağlama: 0 için −3 < 0 ve 0 ≤ 0 doğrudur.\nCevap C."
},
{
  "id": "mat-es-164",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**−4 < x ≤ 1 eşitsizliği sayı doğrusunda gösterilirken aşağıdakilerden hangisi doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "−4'te boş yuvarlak, 1'de dolu yuvarlak çizilir.",
    "−4'te dolu yuvarlak, 1'de boş yuvarlak çizilir.",
    "−4'te dolu yuvarlak, 1'de dolu yuvarlak çizilir.",
    "−4'te boş yuvarlak, 1'de boş yuvarlak çizilir."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yuvarlakları ters yerleştirdin: < olan uç boş, ≤ olan uç doludur.",
    "−4'ün yanında < işareti olduğunu gözden kaçırdın: −4 dahil değildir, yuvarlak boş olmalıdır.",
    "1'in yanında ≤ işareti olduğunu gözden kaçırdın: 1 dahildir, yuvarlak dolu olmalıdır."
  ],
  "aciklama": "Çift taraflı eşitsizlikte her uç ayrı okunur: < boş yuvarlak, ≤ dolu yuvarlak demektir.\nAdım 1: Sol uç −4, işaret <: boş yuvarlak.\nAdım 2: Sağ uç 1, işaret ≤: dolu yuvarlak.\nSağlama: −3 aralıktadır, −4 aralıkta değildir; 1 aralıktadır.\nCevap A."
},
{
  "id": "mat-es-165",
  "kazanim": "M.8.2.3.2",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Aşağıdaki sayı doğrusunda x değerleri gösterilmiştir.\n**Aşağıdakilerden hangisi gösterilen bölgede __bulunmaz__?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"108.57\" y1=\"40\" x2=\"108.57\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"108.57\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"177.14\" y1=\"40\" x2=\"177.14\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"177.14\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"245.71\" y1=\"40\" x2=\"245.71\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"245.71\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"314.29\" y1=\"40\" x2=\"314.29\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"314.29\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"382.86\" y1=\"40\" x2=\"382.86\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"382.86\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"451.43\" y1=\"40\" x2=\"451.43\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"451.43\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"20\" y1=\"46\" x2=\"382.86\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"382.86\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−2,5",
    "0",
    "1,9",
    "2,1"
  ],
  "dogru": 3,
  "hatalar": [
    "−2,5, 2'den küçüktür; ok sola gittiği için bölgededir.",
    "0, 2'den küçüktür; ok sola gittiği için bölgededir.",
    "1,9, 2'den küçüktür; bölgededir.",
    null
  ],
  "aciklama": "Dolu yuvarlak 2'nin dahil olduğunu, sola giden ok ise 2'den küçük değerlerin bölgede olduğunu gösterir.\nAdım 1: Gösterim x ≤ 2 eşitsizliğidir.\nAdım 2: −2,5, 0 ve 1,9 sayıları 2'den küçüktür; 2,1 ise 2'den büyüktür.\nSağlama: 2,1 ≤ 2 yanlıştır.\nCevap D."
},
{
  "id": "mat-es-166",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**4x − 3 ≥ 13 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x ≥ 16",
    "x ≥ [[5|2]]",
    "x ≤ 4",
    "x ≥ 4"
  ],
  "dogru": 3,
  "hatalar": [
    "Son adımı atladın: 4x ≥ 16 buldun ama 4'e bölmedin.",
    "3'ü yanlış yöne taşıdın: 13 − 3 = 10 yapıp 4'e böldün; oysa 3 eklenir.",
    "Yönü değiştirdin: pozitif sayıya bölerken yön değişmez.",
    null
  ],
  "aciklama": "Önce toplama-çıkarma, sonra çarpma-bölme işleminin tersi uygulanır.\nAdım 1: İki tarafa 3 ekle: 4x ≥ 16.\nAdım 2: İki tarafı 4'e böl: x ≥ 4.\nSağlama: x = 4 için 16 − 3 = 13 ≥ 13 doğru; x = 3 için 9 ≥ 13 yanlış.\nCevap D."
},
{
  "id": "mat-es-167",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**2x + 7 < 1 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < 3",
    "x < −3",
    "x < 4",
    "x > −3"
  ],
  "dogru": 1,
  "hatalar": [
    "İşareti kaybettin: 1 − 7 = −6 ve −6 ÷ 2 = −3 olur, 3 değil.",
    null,
    "7'yi çıkarmak yerine ekledin: 1 + 7 = 8 ve 8 ÷ 2 = 4.",
    "Yönü değiştirdin: pozitif sayıya bölerken yön değişmez."
  ],
  "aciklama": "Önce sabit terimi karşıya geçir, sonra katsayıya böl.\nAdım 1: İki taraftan 7 çıkar: 2x < −6.\nAdım 2: İki tarafı 2'ye böl: x < −3.\nSağlama: x = −4 için −8 + 7 = −1 < 1 doğru; x = −3 için 1 < 1 yanlış.\nCevap B."
},
{
  "id": "mat-es-168",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**−3x − 4 < 5 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < −3",
    "x > 3",
    "x < 3",
    "x > −3"
  ],
  "dogru": 3,
  "hatalar": [
    "Negatif sayıya bölerken yönü değiştirmedin: eşitsizlikte negatif sayıyla çarpma ya da bölmede yön çevrilir.",
    "İşareti kaybettin: 9 ÷ (−3) = −3 olur, 3 değil.",
    "Hem işareti kaybettin hem yönü çevirmedin.",
    null
  ],
  "aciklama": "Önce sabit terim karşıya geçer, sonra negatif katsayıya bölünürken yön çevrilir.\nAdım 1: İki tarafa 4 ekle: −3x < 9.\nAdım 2: İki tarafı −3'e böl ve yönü çevir: x > −3.\nSağlama: x = 0 için −4 < 5 doğru; x = −3 için 9 − 4 = 5 < 5 yanlış.\nCevap D."
},
{
  "id": "mat-es-169",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**[[x|5]] + 3 > 1 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x > 20",
    "x > 10",
    "x < −10",
    "x > −10"
  ],
  "dogru": 3,
  "hatalar": [
    "3'ü çıkarmak yerine ekledin: 1 + 3 = 4 ve 4 · 5 = 20.",
    "İşareti kaybettin: (−2) · 5 = −10 olur, 10 değil.",
    "Yönü değiştirdin: pozitif sayıyla çarparken yön değişmez.",
    null
  ],
  "aciklama": "Önce sabit terimi karşıya geçir, sonra paydayla çarp.\nAdım 1: İki taraftan 3 çıkar: [[x|5]] > −2.\nAdım 2: İki tarafı 5 ile çarp: x > −10.\nSağlama: x = 0 için 0 + 3 = 3 > 1 doğru; x = −10 için −2 + 3 = 1 > 1 yanlış.\nCevap D."
},
{
  "id": "mat-es-170",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**x tam sayı olmak üzere 5 − 2x ≥ 1 eşitsizliğini sağlayan en büyük x değeri kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "6",
    "3",
    "2",
    "1"
  ],
  "dogru": 2,
  "hatalar": [
    "Yalnızca 1 + 5 = 6 işlemini yaptın, −2'ye bölmeyi atladın.",
    "5'i karşıya geçirirken işareti değiştirmedin: 1 + 5 = 6 ve 6 ÷ 2 = 3 buldun.",
    null,
    "Sınırı dışarıda bıraktın: ≥ eşitliği içerir, x = 2 de çözümdür."
  ],
  "aciklama": "Önce sabit terim karşıya geçer, sonra negatif katsayıya bölünürken yön çevrilir.\nAdım 1: İki taraftan 5 çıkar: −2x ≥ −4.\nAdım 2: İki tarafı −2'ye böl ve yönü çevir: x ≤ 2.\nAdım 3: 2 dahil olduğundan en büyük tam sayı 2'dir.\nSağlama: x = 2 için 5 − 4 = 1 ≥ 1 doğru; x = 3 için −1 ≥ 1 yanlış.\nCevap C."
},
{
  "id": "mat-es-171",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**2x − 3 < 9 eşitsizliğini sağlayan kaç doğal sayı vardır?**",
  "gorsel": null,
  "secenekler": [
    "12",
    "7",
    "6",
    "5"
  ],
  "dogru": 2,
  "hatalar": [
    "Son adımı atladın: 2x < 12 buldun, 2'ye bölmedin.",
    "6'yı da saydın: x < 6 olduğundan 6 dahil değildir.",
    null,
    "0'ı saymadın: 0 bir doğal sayıdır."
  ],
  "aciklama": "Doğal sayılar 0, 1, 2, 3, … biçiminde sıralanır; 0 da bir doğal sayıdır.\nAdım 1: İki tarafa 3 ekle: 2x < 12.\nAdım 2: İki tarafı 2'ye böl: x < 6.\nAdım 3: Doğal sayılar 0, 1, 2, 3, 4, 5; yani 6 tane.\nSağlama: x = 5 için 10 − 3 = 7 < 9 doğru; x = 6 için 9 < 9 yanlış.\nCevap C."
},
{
  "id": "mat-es-172",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir okuldan 110 öğrenci gezi için 12 kişilik minibüslerle gidecektir. Bu öğrencilerden 8'i geziye kendi imkânıyla ulaşacaktır.\n**Minibüsle gidecek bütün öğrencilerin binebilmesi için en az kaç minibüs gerekir?**",
  "gorsel": null,
  "secenekler": [
    "8",
    "9",
    "10",
    "12"
  ],
  "dogru": 1,
  "hatalar": [
    "Ondalık sonucu aşağı yuvarladın: 8 minibüs yalnız 96 kişi taşır, 6 öğrenci açıkta kalır.",
    null,
    "Kendi imkânıyla gelen 8 öğrenciyi çıkarmadın: 110 ÷ 12 yaklaşık 9,2 bulup 10'a yuvarladın.",
    "Kişi sayısı ile minibüs sayısını karıştırdın: 12, bir minibüsün alabileceği kişi sayısıdır."
  ],
  "aciklama": "Minibüs sayısı tam sayı olmak zorundadır; alt sınır (en az) söz konusuysa ondalık sonucu yukarı yuvarlarsın.\nAdım 1: Minibüsle gidecek öğrenci sayısı 110 − 8 = 102'dir.\nAdım 2: m minibüs 12m kişi taşır: 12m ≥ 102, yani m ≥ 8,5.\nAdım 3: Yukarı yuvarla: m = 9.\nSağlama: 9 · 12 = 108 ≥ 102; 8 · 12 = 96 < 102.\nCevap B."
},
{
  "id": "mat-es-173",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**−[[x|2]] > 3 eşitsizliğinin çözümü aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "x < −6",
    "x > −6",
    "x < 6",
    "x > 6"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Negatif sayıyla çarparken yönü değiştirmedin: eşitsizlikte negatif sayıyla çarpma ya da bölmede yön çevrilir.",
    "İşareti kaybettin: 3 · (−2) = −6 olur, 6 değil.",
    "Hem işareti kaybettin hem yönü çevirmedin."
  ],
  "aciklama": "Eşitsizliğin iki tarafı negatif bir sayıyla çarpılırsa yön değişir.\nAdım 1: İki tarafı −2 ile çarp ve yönü çevir: x < 3 · (−2).\nAdım 2: x < −6.\nSağlama: x = −8 için −[[−8|2]] = 4 > 3 doğru; x = −6 için 3 > 3 yanlış.\nCevap A."
},
{
  "id": "mat-es-174",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "**x tam sayı olmak üzere −3x + 1 > −8 eşitsizliğini sağlayan en büyük x değeri kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "2",
    "3",
    "4",
    "9"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sınırı dahil ettin: x = 3 için 1 − 9 = −8 > −8 yanlıştır, > işareti eşitliği kapsamaz.",
    "Yönü çevirmeyi unutup x > 3 buldun ve 3'ten sonraki ilk sayıyı seçtin.",
    "Son adımı atladın: −3x > −9 buldun, −3'e bölmedin."
  ],
  "aciklama": "Önce sabit terim karşıya geçer, sonra negatif katsayıya bölünürken yön çevrilir.\nAdım 1: İki taraftan 1 çıkar: −3x > −9.\nAdım 2: İki tarafı −3'e böl ve yönü çevir: x < 3.\nAdım 3: 3 dahil değildir; en büyük tam sayı 2'dir.\nSağlama: x = 2 için −6 + 1 = −5 > −8 doğru; x = 3 için −8 > −8 yanlış.\nCevap A."
},
{
  "id": "mat-es-175",
  "kazanim": "M.8.2.3.3",
  "kademe": 1,
  "zorluk": 2,
  "soru": "Bir x tam sayısının 5 katının 4 fazlası 19'dan __büyük değildir__.\n**Buna göre x en çok kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "15",
    "4",
    "3",
    "2"
  ],
  "dogru": 2,
  "hatalar": [
    "Son adımı atladın: 5x ≤ 15 buldun, 5'e bölmedin.",
    "'Büyük değildir' ifadesini 'büyüktür' diye okudun ve 5x + 4 > 19 çözümündeki ilk tam sayıyı aldın.",
    null,
    "≤ yerine < okudun: 'büyük değildir' ifadesinde eşitlik vardır, x = 3 de uygundur."
  ],
  "aciklama": "'Büyük değildir' ifadesi 'küçük ya da eşittir' demektir.\nAdım 1: Koşulu yaz: 5x + 4 ≤ 19.\nAdım 2: İki taraftan 4 çıkar: 5x ≤ 15.\nAdım 3: İki tarafı 5'e böl: x ≤ 3; x en çok 3 olur.\nSağlama: x = 3 için 15 + 4 = 19 ≤ 19 doğru; x = 4 için 24 ≤ 19 yanlış.\nCevap C."
}
);
