// Matematik — Eşitsizlikler (M.8.2.3): Kademe 3 (LGS Ayarı) yedeği, mat-es-326…375
// Birinci dereceden bir bilinmeyenli eşitsizlikler; en çok iki işlem. Çift taraflı eşitsizlik yalnızca sayı doğrusunda gösterme/okuma ve yazma içindir. Sayı doğrusu şekilleri ölçeklidir.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["esitsizlikler"] = window.LGS_BANK["esitsizlikler"] || []).push(
{
  "id": "mat-es-326",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir x tam sayısının 2 katı 7'den çıkarılınca elde edilen sonuç 3'ten küçük çıkıyor.\n**Buna göre x en az kaç olabilir?**",
  "gorsel": null,
  "secenekler": [
    "−4",
    "−1",
    "2",
    "3"
  ],
  "dogru": 3,
  "hatalar": [
    "7'yi karşıya geçirirken işaretini değiştirmedin: −2x < 3 + 7 = 10 olur, x > −5 bulursun ve en küçük tam sayıyı −4 sanırsın.",
    "−4 ÷ (−2) işleminde işareti kaybettin: x > −2 bulursun ve en küçük tam sayıyı −1 sanırsın.",
    "Sınırı dahil ettin: x = 2 için 7 − 4 = 3 olur ve 3 < 3 yanlıştır; 2 çözüm değildir.",
    null
  ],
  "aciklama": "Cümleyi önce eşitsizliğe çevirip çözeriz; 'küçük' sınırın kendisini kapsamaz.\nAdım 1: Sayının 2 katı 2x'tir; bu değer 7'den çıkarılırsa 7 − 2x olur: 7 − 2x < 3.\nAdım 2: 7'yi karşıya geçir: −2x < −4.\nAdım 3: −2'ye böl ve yönü çevir: x > 2.\nAdım 4: 2 dahil olmadığından 2'den büyük en küçük tam sayı 3'tür.\nSağlama: x = 3 için 7 − 6 = 1 < 3 doğru; x = 2 için 3 < 3 yanlış.\nCevap D."
},
{
  "id": "mat-es-327",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir okul gezisi için her biri 45 kişilik 3 otobüs kiralanmıştır. Gezide n öğrenci ve 6 öğretmen bulunacaktır ve yolcu sayısı 3 otobüsün toplam kapasitesini aşmayacaktır.\n**Bu durumu gösteren eşitsizlik aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "n + 6 ≤ 135",
    "n + 6 < 135",
    "n − 6 ≤ 135",
    "n + 6 ≤ 45"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eşitliği dışarıda bıraktın: kapasiteyi 'aşmamak', tam 135 kişinin binmesine izin verir.",
    "Öğretmenleri çıkardın: öğretmenler de yolcudur, öğrenci sayısına eklenir.",
    "Tek otobüsün kapasitesini aldın: 3 otobüsün kapasitesi 3 · 45 = 135 kişidir."
  ],
  "aciklama": "Kapasiteyi aşmamak, yolcu sayısının kapasiteye eşit ya da kapasiteden küçük olması demektir.\nAdım 1: Toplam kapasite: 3 · 45 = 135 kişi.\nAdım 2: Yolcu sayısı: n öğrenci + 6 öğretmen = n + 6.\nAdım 3: Yolcu sayısı 135'i aşmayacağından n + 6 ≤ 135.\nSağlama: n = 129 için 135 yolcu olur ve herkes sığar; n = 130 için 136 yolcu olur, sığmaz.\nCevap A."
},
{
  "id": "mat-es-328",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir doğa kampına katılabilecek çocukların yaşı y ile gösterilmiştir. Katılım koşulu aşağıdaki sayı doğrusunda verilmiştir ve yaşlar tam sayıdır.\n**Buna göre kampa katılabilecek en büyük yaş kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"y için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">11</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">12</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">13</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">14</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">15</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">16</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">17</text><line x1=\"136\" y1=\"46\" x2=\"424\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"136\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"424\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "9",
    "13",
    "14",
    "15"
  ],
  "dogru": 2,
  "hatalar": [
    "En küçük yaşı seçtin; soru en büyük yaşı soruyor.",
    "14'ü atladın: boş uç yalnızca 15'i dışarıda bırakır, 14 aralıktadır.",
    null,
    "Boş yuvarlağı dolu sandın: 15 dahil değildir."
  ],
  "aciklama": "Dolu yuvarlak o sayının çözüme dahil olduğunu, boş yuvarlak dahil olmadığını gösterir.\nAdım 1: Sol uçta 9'daki yuvarlak dolu: 9 ≤ y. Sağ uçta 15'teki yuvarlak boş: y < 15.\nAdım 2: Gösterim 9 ≤ y < 15 eşitsizliğidir.\nAdım 3: 15 dahil olmadığı için 15'ten küçük en büyük tam sayı 14'tür.\nSık yapılan hata: Boş uçtaki sayıyı da cevap sanmak.\nCevap C."
},
{
  "id": "mat-es-329",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kapasitesi 300 litre olan bir su deposunda şimdilik 140 litre su vardır. Depoya her dakika 8 litre su akıtılacaktır ve deponun taşması istenmemektedir.\n**Akıtma süresi d dakika olduğuna göre aşağıdaki eşitsizliklerden hangisi bu durumu gösterir?**",
  "gorsel": null,
  "secenekler": [
    "140 + 8d ≥ 300",
    "8d ≤ 300",
    "140d + 8 ≤ 300",
    "140 + 8d ≤ 300"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters aldın: 'taşmamak' toplam su miktarının 300'e eşit ya da 300'den küçük olması demektir; ≥ ise 'en az' anlamına gelir.",
    "Depoda şimdiden bulunan 140 litreyi unuttun: toplam su bu 140 litreyi de içerir.",
    "Sayıların yerini değiştirdin: 140 litre depodaki sudur, 8 litre ise her dakika eklenen miktardır.",
    null
  ],
  "aciklama": "Depodaki son su miktarı = şimdiki su + akıtılan su. 'Taşmamak', toplamın kapasiteye eşit ya da kapasiteden küçük olması demektir.\nAdım 1: Akıtılacak su: 8 · d = 8d litre.\nAdım 2: Depodaki toplam su: 140 + 8d.\nAdım 3: Bu toplam 300'ü aşmayacağından 140 + 8d ≤ 300.\nSağlama: d = 20 için 140 + 160 = 300 olur, depo tam dolar ama taşmaz; d = 21 için 308 olur, depo taşar.\nCevap D."
},
{
  "id": "mat-es-330",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "x sayısının −3 katının 5 fazlası, 14'ten __küçük değildir__.\n**Buna göre x tam sayısı en çok kaç olabilir?**",
  "gorsel": null,
  "secenekler": [
    "3",
    "−3",
    "−4",
    "−7"
  ],
  "dogru": 1,
  "hatalar": [
    "İşareti kaybettin: 9 ÷ (−3) = −3 olur, +3 değil; x ≤ 3 bulup 3 yazdın.",
    null,
    "Sınırı dışarıda bıraktın: 'küçük değildir' eşitliği de kapsar; x = −3 için 9 + 5 = 14 olur ve 14 ≥ 14 doğrudur.",
    "5'i karşıya geçirirken işaretini değiştirmedin: −3x ≥ 14 + 5 = 19 olur, x ≤ −6,33 bulursun ve en çok −7 sanırsın."
  ],
  "aciklama": "Cümleyi eşitsizliğe çevirip çözeriz; 'küçük değildir' büyük ya da eşit demektir.\nAdım 1: x'in −3 katının 5 fazlası: −3x + 5 ≥ 14.\nAdım 2: 5'i karşıya geçir: −3x ≥ 9.\nAdım 3: −3'e böl ve yönü çevir: x ≤ −3.\nAdım 4: −3 dahil olduğundan en büyük tam sayı −3'tür.\nSağlama: x = −3 için 9 + 5 = 14 ≥ 14 doğru; x = −2 için 6 + 5 = 11 ≥ 14 yanlış.\nCevap B."
},
{
  "id": "mat-es-331",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir otoyolda, hızı (v, km/saat) aşağıdaki sayı doğrusunda gösterilen değerlerde olan araçlara ek denetim uygulanmaktadır.\n**Aşağıdaki cümlelerden hangisi bu gösterime __uygun değildir__?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"v için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">30</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">40</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">50</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">60</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">70</text><line x1=\"160\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"160\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "Hızı 40 km/saatten az olmayan araçlara denetim uygulanır.",
    "Hızı 40 km/saatten fazla olan araçlara denetim uygulanır.",
    "Hızı 40 km/saati geçen araçlara denetim uygulanır.",
    "Hızı 40 km/saat veya daha az olan araçlara denetim uygulanmaz."
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Bu cümle gösterime uygun: 'fazla' sınırı dışarıda bırakır (v > 40). Soru uygun olmayanı soruyor.",
    "Bu cümle gösterime uygun: 'geçen' sınırı dışarıda bırakır (v > 40). Soru uygun olmayanı soruyor.",
    "Bu cümle gösterime uygun: 40 ve altı denetim dışındaysa denetim yalnızca v > 40 için uygulanır. Soru uygun olmayanı soruyor."
  ],
  "aciklama": "Boş yuvarlak 40'ın çözüme dahil olmadığını, ok sağa gitmesi de değerlerin büyüdüğünü gösterir: v > 40.\nAdım 1: 'Fazla' ve 'geçen' sınırı dışarıda bırakır: v > 40. Bu iki cümle uygundur.\nAdım 2: '40 km/saat veya daha az olanlara uygulanmaz' demek yalnızca v > 40 olanlara uygulanır demektir; bu cümle de uygundur.\nAdım 3: 'Az olmayan' ifadesi v ≥ 40 demektir ve 40 km/saat hızdaki aracı da kapsar; gösterimde 40 boş yuvarlak olduğundan bu cümle uygun değildir.\nSık yapılan hata: 'Az olmayan' ile 'fazla' ifadesini aynı sanmak.\nCevap A."
},
{
  "id": "mat-es-332",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "−7, −4, −3 ve 0 sayıları veriliyor.\n**Bu sayıların kaç tanesi 3 − 2x > 9 eşitsizliğinde x yerine yazılınca eşitsizliği sağlar?**",
  "gorsel": null,
  "secenekler": [
    "1",
    "2",
    "3",
    "4"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü çevirmeden x > −3 buldun ve yalnızca 0'ı saydın; oysa −2x > 6 iken −2'ye bölünce yön döner.",
    null,
    "−3'ü de saydın: x = −3 için 3 + 6 = 9 olur ve 9 > 9 yanlıştır; sınır çözüme dahil değildir.",
    "Hepsini saydın: x = 0 için 3 − 0 = 3 olur ve 3 > 9 yanlıştır."
  ],
  "aciklama": "Önce eşitsizliği çözüp sonra sayıları sınarız.\nAdım 1: İki taraftan 3 çıkar: −2x > 6.\nAdım 2: −2'ye böl ve yönü çevir: x < −3.\nAdım 3: −7 ve −4 sınırdan küçüktür, çözümdür. −3 sınırın kendisidir ve çözüm değildir; 0 da çözüm değildir.\nSağlama: x = −3 için 3 + 6 = 9 > 9 yanlış; x = −4 için 3 + 8 = 11 > 9 doğru.\nCevap B."
},
{
  "id": "mat-es-333",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir oyunda her tamamlanan seviye 40 puan getirir, her can kaybı ise 15 puan götürür. Yağmur 3 can kaybetmiş ve s seviye tamamlamıştır. Bir sonraki bölümün kilidinin açılması için toplam puanın en az 200 olması gerekir.\n**Bu koşulu gösteren eşitsizlik aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "40s + 45 ≥ 200",
    "40s − 45 ≤ 200",
    "40(s − 45) ≥ 200",
    "40s − 45 ≥ 200"
  ],
  "dogru": 3,
  "hatalar": [
    "Can kayıplarını puana ekledin: can kaybı puan götürür, yani çıkarılır.",
    "Yönü ters aldın: 'en az 200' alt sınırdır, ≥ gerekir.",
    "Çıkarmayı seviye sayısına uyguladın: 3 can kaybı toplamda 3 · 15 = 45 puan götürür, s'den çıkmaz.",
    null
  ],
  "aciklama": "Toplam puan = seviyelerden gelen puan − can kayıplarının götürdüğü puan. 'En az 200' alt sınırdır ve 200'ün kendisi de uygundur.\nAdım 1: Seviyelerden gelen puan: 40 · s = 40s.\nAdım 2: Can kayıplarının götürdüğü puan: 3 · 15 = 45.\nAdım 3: Toplam en az 200 olacağından 40s − 45 ≥ 200.\nSağlama: s = 7 için 280 − 45 = 235 ≥ 200 uygun; s = 6 için 240 − 45 = 195 uygun değil.\nCevap D."
},
{
  "id": "mat-es-334",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x tam sayısının alabileceği değerler gösterilmiştir.\n**Bu değerler arasında 3'ün katı olan kaç tam sayı vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−7</text><line x1=\"68.2\" y1=\"40\" x2=\"68.2\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"68.2\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"96.5\" y1=\"40\" x2=\"96.5\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"96.5\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"124.7\" y1=\"40\" x2=\"124.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"124.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"152.9\" y1=\"40\" x2=\"152.9\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"152.9\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"181.2\" y1=\"40\" x2=\"181.2\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"181.2\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"209.4\" y1=\"40\" x2=\"209.4\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"209.4\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"237.6\" y1=\"40\" x2=\"237.6\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"237.6\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"265.9\" y1=\"40\" x2=\"265.9\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"265.9\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"294.1\" y1=\"40\" x2=\"294.1\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"294.1\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"322.4\" y1=\"40\" x2=\"322.4\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"322.4\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"350.6\" y1=\"40\" x2=\"350.6\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"350.6\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"378.8\" y1=\"40\" x2=\"378.8\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"378.8\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"407.1\" y1=\"40\" x2=\"407.1\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"407.1\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"435.3\" y1=\"40\" x2=\"435.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"435.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"463.5\" y1=\"40\" x2=\"463.5\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"463.5\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"491.8\" y1=\"40\" x2=\"491.8\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"491.8\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">10</text><line x1=\"68.2\" y1=\"46\" x2=\"491.8\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"68.2\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"491.8\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "4",
    "5",
    "6"
  ],
  "dogru": 2,
  "hatalar": [
    "Negatif katları ve 0'ı saymadın: 3, 6, 9 yalnızca pozitif olanlardır; −3 ve 0 da aralıktadır.",
    "0'ı saymadın: 0 da 3'ün katıdır (3 · 0 = 0) ve aralıktadır.",
    null,
    "−6'yı da saydın: −6'daki yuvarlak boştur, yani −6 aralığa dahil değildir."
  ],
  "aciklama": "3'ün katları, 3 ile bir tam sayının çarpımıdır: …, −6, −3, 0, 3, 6, 9, … Sıfır da 3'ün katıdır.\nAdım 1: Gösterim −6 < x ≤ 9: −6 dahil değil, 9 dahil.\nAdım 2: Aralıktaki 3'ün katları: −3, 0, 3, 6, 9.\nAdım 3: Say: 5 tane.\nSık yapılan hata: Boş uçtaki −6'yı saymak ya da 0'ı unutmak.\nCevap C."
},
{
  "id": "mat-es-335",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "**Aşağıdaki eşitsizliklerden hangisinin çözüm kümesi 2x − 6 ≤ 4 eşitsizliğinin çözüm kümesiyle aynıdır?**",
  "gorsel": null,
  "secenekler": [
    "x − 3 ≤ 2",
    "−x + 5 ≤ 0",
    "3x − 9 ≥ 6",
    "[[x|2]] − 1 ≤ 4"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Çözümü x ≥ 5'tir: −x ≤ −5 ifadesinde −1 ile çarpınca yön döner. Yönü çevirmeyince x ≤ 5 çıkar ve bu seçeneği doğru sanırsın.",
    "Çözümü x ≥ 5'tir: 3x ≥ 15 → x ≥ 5. Sınır aynı ama yön ters; yöne de bakmalısın.",
    "Çözümü x ≤ 10'dur: [[x|2]] ≤ 5 iken 2 ile çarpınca x ≤ 10 olur; sınır farklıdır."
  ],
  "aciklama": "Denk eşitsizlikler aynı çözüm kümesine sahiptir. Önce verilen eşitsizliği çözeriz.\nAdım 1: 2x − 6 ≤ 4 → 2x ≤ 10 → x ≤ 5.\nAdım 2: Seçenekleri çöz: x − 3 ≤ 2 → x ≤ 5; −x + 5 ≤ 0 → x ≥ 5; 3x − 9 ≥ 6 → x ≥ 5; [[x|2]] − 1 ≤ 4 → x ≤ 10.\nAdım 3: Yalnızca x − 3 ≤ 2 aynı çözüm kümesine sahiptir.\nSık yapılan hata: −x + 5 ≤ 0 eşitsizliğinde −1 ile çarparken yönü çevirmemek.\nCevap A."
},
{
  "id": "mat-es-336",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir tiyatroda 4 kişilik bir grup, kişi başı b TL olan biletlerden alacaktır. Biletlere ek olarak toplam 20 TL hizmet bedeli ödenecek ve grubun toplam ödemesi 360 TL'yi geçmeyecektir.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "4(b + 20) ≤ 360",
    "4b + 20 ≥ 360",
    "4b + 20 < 360",
    "4b + 20 ≤ 360"
  ],
  "dogru": 3,
  "hatalar": [
    "Hizmet bedelini kişi başına saydın: 20 TL toplam için bir kez ödenir, 4 ile çarpılmaz.",
    "Yönü ters aldın: 'geçmeyecek' bir üst sınırdır, ≥ ise 'en az' demektir.",
    "Eşitliği dışarıda bıraktın: toplam ödemenin tam 360 TL olması 360 TL'yi geçmek sayılmaz.",
    null
  ],
  "aciklama": "Toplam ödeme = bilet bedeli + hizmet bedeli. 'Geçmeyecek' üst sınır koyar ve sınırın kendisi uygundur.\nAdım 1: 4 bilet: 4b TL.\nAdım 2: Hizmet bedeli toplam için bir kez ödenir: + 20.\nAdım 3: Toplam 360'ı geçmeyeceğinden 4b + 20 ≤ 360.\nSağlama: b = 85 için 340 + 20 = 360 uygun; b = 86 için 364 uygun değil.\nCevap D."
},
{
  "id": "mat-es-337",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aslı, aşağıdaki sayı doğrusunda x için bir çözüm kümesi göstermiştir.\n**Bu gösterim aşağıdaki eşitsizliklerden hangisinin çözüm kümesidir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"20\" y1=\"46\" x2=\"280\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"280\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "5 − 2x ≤ −3",
    "2x − 5 ≥ −3",
    "5 − 2x ≥ −3",
    "5 − 2x > −3"
  ],
  "dogru": 2,
  "hatalar": [
    "Çözümü x ≥ 4'tür: −2'ye bölünce ≤ işareti ≥ olur ve ok sağa gider. Gösterimde ok sola gidiyor.",
    "Çözümü x ≥ 1'dir: 2x ≥ 2 → x ≥ 1. Ok 1'den sağa gider; gösterimle uyuşmaz.",
    null,
    "Çözümü x < 4'tür: yön doğru ama 4 dahil değildir; gösterimde 4'teki yuvarlak dolu."
  ],
  "aciklama": "Dolu yuvarlak sınırın dahil olduğunu, ok sola gitmesi değerlerin küçüldüğünü gösterir: gösterim x ≤ 4'tür.\nAdım 1: 5 − 2x ≥ −3 → −2x ≥ −8.\nAdım 2: −2'ye böl ve yönü çevir: x ≤ 4. Bu, sayı doğrusundaki gösterimdir.\nAdım 3: Diğer seçenekler: 5 − 2x ≤ −3 → x ≥ 4; 2x − 5 ≥ −3 → x ≥ 1; 5 − 2x > −3 → x < 4.\nSık yapılan hata: Negatife bölünce yönü çevirmemek ya da dolu yuvarlak yerine boş yuvarlak seçmek.\nCevap C."
},
{
  "id": "mat-es-338",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir kırtasiyede 6 öğrenci için aynı boyama seti alınacaktır. Bir setin fiyatı s TL (tam sayı) olup ayrıca toplam 30 TL'lik hediye paketi ücreti ödenecektir. Öğrencilerin ödeyeceği toplam tutar 480 TL'yi aşmamalıdır.\n**Buna göre bir setin fiyatı en fazla kaç TL olabilir?**",
  "gorsel": null,
  "secenekler": [
    "50",
    "75",
    "80",
    "450"
  ],
  "dogru": 1,
  "hatalar": [
    "Paket ücretini her sete saydın: 30 TL toplam için bir kez ödenir; 6 · 30 = 180 çıkarılınca 300 ÷ 6 = 50 olur.",
    null,
    "Paket ücretini hesaba katmadın: 480 ÷ 6 = 80 buldun, oysa önce 30 TL çıkarılmalıdır.",
    "Son adımı atladın: 6s ≤ 450 buldun ama 6'ya bölmedin."
  ],
  "aciklama": "Adım 1: Toplam ödeme = 6 set + paket ücreti: 6s + 30.\nAdım 2: Bu tutar 480'i aşmayacağından 6s + 30 ≤ 480.\nAdım 3: İki taraftan 30 çıkar: 6s ≤ 450.\nAdım 4: 6'ya böl: s ≤ 75. Bir set en fazla 75 TL olabilir.\nSağlama: s = 75 için 450 + 30 = 480 uygun; s = 76 için 486 uygun değil.\nCevap B."
},
{
  "id": "mat-es-339",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aylin 38 yaşındadır ve kızı Sude x yaşındadır. Aylin ile Sude arasındaki yaş farkı 28'den fazladır.\n**Bu durumu gösteren eşitsizlik aşağıdakilerden hangisidir?**",
  "gorsel": null,
  "secenekler": [
    "38 − x ≥ 28",
    "x − 38 > 28",
    "38 + x > 28",
    "38 − x > 28"
  ],
  "dogru": 3,
  "hatalar": [
    "Eşitliği ekledin: 'fazla' ifadesi 28'in kendisini kapsamaz.",
    "Çıkarmayı ters yazdın: anne büyük olduğu için yaş farkı 38 − x'tir; x − 38 negatif olurdu.",
    "Yaşları topladın: yaş farkı iki yaşın farkıdır, toplamı değil.",
    null
  ],
  "aciklama": "Yaş farkı, büyük yaştan küçük yaşın çıkarılmasıyla bulunur. 'Fazla' sınırın kendisini kapsamaz.\nAdım 1: Aylin'in yaşı 38, Sude'nin yaşı x: yaş farkı 38 − x.\nAdım 2: Fark 28'den fazla olduğundan 38 − x > 28.\nSağlama: x = 9 için fark 29 > 28 uygun; x = 10 için fark 28 > 28 değil.\nCevap D."
},
{
  "id": "mat-es-340",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir oyunda bir turda alınan puan p tam sayıdır ve aşağıdaki sayı doğrusunda gösterilen aralıktadır.\n**Buna göre p kaç farklı değer alabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"p için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"93.3\" y1=\"40\" x2=\"93.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"93.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"146.7\" y1=\"40\" x2=\"146.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"146.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"253.3\" y1=\"40\" x2=\"253.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"253.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"306.7\" y1=\"40\" x2=\"306.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"306.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"413.3\" y1=\"40\" x2=\"413.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"413.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"466.7\" y1=\"40\" x2=\"466.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"466.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"93.3\" y1=\"46\" x2=\"466.7\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"93.3\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"466.7\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "8",
    "7",
    "6",
    "5"
  ],
  "dogru": 1,
  "hatalar": [
    "2'yi de saydın: 2'deki yuvarlak boştur, yani 2 dahil değildir.",
    null,
    "−5'i saymadın: −5'teki yuvarlak doludur, yani −5 dahildir.",
    "Yalnızca negatif tam sayıları saydın: 0 ve 1 de aralıktadır."
  ],
  "aciklama": "Aralığın iki ucu farklı türde: dolu uç dahildir, boş uç dahil değildir.\nAdım 1: Gösterim −5 ≤ p < 2.\nAdım 2: Tam sayılar: −5, −4, −3, −2, −1, 0, 1.\nAdım 3: Say: 7 tane.\nSağlama: Biri dahil, biri dahil değilse sayı = büyük − küçük = 2 − (−5) = 7.\nCevap B."
},
{
  "id": "mat-es-341",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "a ve b birer gerçek sayıdır ve a < b'dir.\n**Buna göre aşağıdaki eşitsizliklerden hangisi her zaman doğrudur?**",
  "gorsel": null,
  "secenekler": [
    "−3a < −3b",
    "a − 7 > b − 7",
    "−2a − 1 < −2b − 1",
    "4 − a > 4 − b"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü çevirmedin: a < b eşitsizliğinin iki tarafı −3 ile çarpılınca yön değişir ve −3a > −3b olur.",
    "Çıkarmada yönü çevirdin: iki taraftan aynı sayıyı çıkarmak yönü değiştirmez, a − 7 < b − 7 olur.",
    "Çarpmada yönü çevirmedin: iki tarafı −2 ile çarpınca −2a > −2b olur; 1 çıkarmak yönü değiştirmez.",
    null
  ],
  "aciklama": "Bir eşitsizliğin iki tarafına aynı sayı eklenir ya da iki tarafından aynı sayı çıkarılırsa yön değişmez; iki taraf negatif bir sayıyla çarpılır ya da bölünürse yön değişir.\nAdım 1: a < b eşitsizliğinin iki tarafını −1 ile çarp; yön değişir: −a > −b.\nAdım 2: İki tarafa 4 ekle; yön değişmez: 4 − a > 4 − b. Bu seçenek her zaman doğrudur.\nAdım 3: Diğerleri yanlıştır: −3 ile çarpınca −3a > −3b olur; 7 çıkarınca a − 7 < b − 7 kalır; −2 ile çarpınca −2a > −2b olur ve 1 çıkarmak yönü değiştirmez.\nSağlama: a = 1, b = 2 için 4 − 1 = 3 > 4 − 2 = 2 doğru; −3 < −6 yanlış.\nCevap D."
},
{
  "id": "mat-es-342",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir burs sınavının toplam puanı, birinci oturum puanı ile ikinci oturum puanının 2 katının toplamı olarak hesaplanıyor. Ela birinci oturumdan 46 puan almıştır. Bursa girebilmek için toplam puanın en az 150 olması gerekir.\n**Ela'nın ikinci oturumda alacağı puan x ise bu koşul aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "46 + 2x ≥ 150",
    "46 + 2x > 150",
    "2(46 + x) ≥ 150",
    "46 + 2x ≤ 150"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Eşitliği dışarıda bıraktın: 'en az 150' demek tam 150 puan da yeterlidir.",
    "İkinci oturumun katını birinci oturuma da uyguladın: yalnızca ikinci oturum puanı 2 ile çarpılır.",
    "Yönü ters aldın: 'en az' alt sınırdır, ≤ ise 'en fazla' anlamına gelir."
  ],
  "aciklama": "Toplam puan = birinci oturum + 2 · ikinci oturum. 'En az 150' alt sınırdır ve 150 de yeterlidir.\nAdım 1: İkinci oturumun katkısı: 2 · x = 2x.\nAdım 2: Toplam puan: 46 + 2x.\nAdım 3: Bu toplam en az 150 olacağından 46 + 2x ≥ 150.\nSağlama: x = 52 için 46 + 104 = 150 yeterli; x = 51 için 148 yetmez.\nCevap A."
},
{
  "id": "mat-es-343",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x tam sayısının alabileceği değerler gösterilmiştir. Elif, gösterimdeki iki yuvarlağın türünü değiştiriyor: boş olanı dolu, dolu olanı boş yapıyor.\n**Buna göre değişiklikten sonraki gösterimde yer alan tam sayıların toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"83.6\" y1=\"40\" x2=\"83.6\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"83.6\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"127.3\" y1=\"40\" x2=\"127.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"127.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"170.9\" y1=\"40\" x2=\"170.9\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"170.9\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"214.5\" y1=\"40\" x2=\"214.5\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"214.5\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"258.2\" y1=\"40\" x2=\"258.2\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"258.2\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"301.8\" y1=\"40\" x2=\"301.8\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301.8\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"345.5\" y1=\"40\" x2=\"345.5\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"345.5\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"389.1\" y1=\"40\" x2=\"389.1\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"389.1\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"432.7\" y1=\"40\" x2=\"432.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"432.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"476.4\" y1=\"40\" x2=\"476.4\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"476.4\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"83.6\" y1=\"46\" x2=\"476.4\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"83.6\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"476.4\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "18",
    "15",
    "12",
    "9"
  ],
  "dogru": 3,
  "hatalar": [
    "Değişikliği yapmadın: ilk gösterimdeki −2, −1, …, 6 sayılarının toplamını aldın.",
    "Yalnızca sol ucu değiştirdin: sağ uçtaki 6'yı dolu bıraktın, oysa artık 6 dahil değildir.",
    "Yalnızca sağ ucu değiştirdin: soldaki −3 artık dahildir, onu saymayı unuttun.",
    null
  ],
  "aciklama": "Dolu yuvarlak o sayının aralığa dahil olduğunu, boş yuvarlak dahil olmadığını gösterir.\nAdım 1: İlk gösterim −3 < x ≤ 6'dır (−3 boş, 6 dolu).\nAdım 2: Yuvarlaklar değişince gösterim −3 ≤ x < 6 olur: −3 artık dahil, 6 dahil değil.\nAdım 3: Tam sayılar: −3, −2, −1, 0, 1, 2, 3, 4, 5.\nAdım 4: Topla: (−3) + (−2) + (−1) + 0 + 1 + 2 + 3 + 4 + 5 = 9.\nSağlama: −3 ile 3, −2 ile 2, −1 ile 1 birbirini sıfırlar; geriye 0 + 4 + 5 = 9 kalır.\nCevap D."
},
{
  "id": "mat-es-344",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir kargo firması, 3 koliyi aynı paletle birlikte taşıyacaktır. Her kolinin kütlesi e kg (tam sayı) ve boş palet 8 kg'dır. Taşıma aracının sınırı 50 kg olup toplam kütle bu sınırı aşmamalıdır.\n**Buna göre bir kolinin kütlesi en fazla kaç kg olabilir?**",
  "gorsel": null,
  "secenekler": [
    "42",
    "16",
    "14",
    "8"
  ],
  "dogru": 2,
  "hatalar": [
    "Son adımı atladın: 3e ≤ 42 buldun ama 3'e bölmedin.",
    "Paletin kütlesini unuttun: 50 ÷ 3 ≈ 16,67 olur; önce 8 kg çıkarılmalıdır.",
    null,
    "Paletin kütlesini her koliye ekledin: 3(e + 8) ≤ 50 → e ≤ 8,67 olur ve en çok 8 bulursun; oysa palet toplam için bir kez taşınır."
  ],
  "aciklama": "Adım 1: Toplam kütle: 3 koli + palet = 3e + 8.\nAdım 2: Bu kütle 50 kg'ı aşmayacağından 3e + 8 ≤ 50.\nAdım 3: 8'i çıkar: 3e ≤ 42.\nAdım 4: 3'e böl: e ≤ 14. Bir koli en fazla 14 kg olabilir.\nSağlama: e = 14 için 42 + 8 = 50 uygun; e = 15 için 53 uygun değil.\nCevap C."
},
{
  "id": "mat-es-345",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir dağcılık kulübü iki sırt çantasını birlikte kamp alanına taşıtacaktır. Her çantaya ayrıca 3 kg'lık bir battaniye konacaktır. Her çantadaki eşyanın kütlesi e kg'dır ve taşıtılacak yükün toplam kütlesi 40 kg'ı geçmemelidir.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "2(e + 3) ≤ 40",
    "2e + 3 ≤ 40",
    "e + 3 ≤ 40",
    "2(e + 3) ≥ 40"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Battaniyeyi yalnızca bir kez ekledin: her çantaya ayrı battaniye konur, 2 çanta için 2 · 3 = 6 kg battaniye gerekir.",
    "Yalnızca bir çantayı hesaba kattın: yükte iki çanta vardır.",
    "Yönü ters aldın: 'geçmemelidir' üst sınırdır, ≥ ise 'en az' demektir."
  ],
  "aciklama": "Battaniyeli bir çantanın kütlesi (e + 3) kg'dır. İki çanta olduğundan toplam kütle 2(e + 3) olur.\nAdım 1: Bir çanta: e + 3.\nAdım 2: İki çanta: 2(e + 3).\nAdım 3: Toplam 40 kg'ı geçmeyeceğinden 2(e + 3) ≤ 40.\nSağlama: e = 17 için 2 · 20 = 40 uygun; e = 18 için 42 uygun değil. 2(e + 3) = 2e + 6 olduğuna dikkat et.\nCevap A."
},
{
  "id": "mat-es-346",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x için boyalı bir bölge gösterilmiştir.\n**Boyalı bölgenin __dışında__ kalan en küçük tam sayı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"400\" y1=\"40\" x2=\"400\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"20\" y1=\"46\" x2=\"280\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"280\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "6",
    "5",
    "4",
    "1"
  ],
  "dogru": 1,
  "hatalar": [
    "Boş yuvarlağı dolu sandın: 5 boyalı bölgede değildir, dışarıda kalan en küçük tam sayıdır.",
    null,
    "Boyalı bölgedeki en büyük tam sayıyı seçtin: 4 boyalıdır, soru dışarıda kalanı soruyor.",
    "Sayı doğrusunun başındaki sayıyı seçtin: 1 boyalı bölgededir."
  ],
  "aciklama": "Boş yuvarlak, o sayının boyalı bölgeye (çözüme) dahil olmadığını gösterir.\nAdım 1: Gösterim x < 5: 5'ten küçük sayılar boyalıdır.\nAdım 2: Boyalı olmayan tam sayılar 5, 6, 7, … şeklinde sürer.\nAdım 3: Bunların en küçüğü 5'tir; 5'teki yuvarlak boş olduğu için 5 boyalı değildir.\nSık yapılan hata: Boş yuvarlağın bulunduğu sayıyı boyalı bölgeye katmak.\nCevap B."
},
{
  "id": "mat-es-347",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Barış'ın kumbarasında 240 TL vardır. Her ay kumbaradan 35 TL harcayacak ve kumbarada en az 40 TL kalmasını istiyor.\n**Barış en fazla kaç ay boyunca harcama yapabilir?**",
  "gorsel": null,
  "secenekler": [
    "4",
    "5",
    "6",
    "200"
  ],
  "dogru": 1,
  "hatalar": [
    "Kumbarada kalmasını istediği 40 TL'yi iki kez çıkardın: 240 − 40 − 40 = 160 ve 160 ÷ 35 ≈ 4,57 olur.",
    null,
    "Yukarı yuvarladın: 6 ayda 210 TL harcanır ve kumbarada 30 TL kalır; bu 40 TL'den azdır.",
    "Son adımı atladın: 35a ≤ 200 buldun ama 35'e bölmedin."
  ],
  "aciklama": "Kalan para = başlangıç parası − harcama. 'En az 40 TL kalsın' alt sınırdır.\nAdım 1: a ay sonra kalan para: 240 − 35a.\nAdım 2: Kalan en az 40 olacak: 240 − 35a ≥ 40.\nAdım 3: 240'ı karşıya geçir: −35a ≥ −200. −35'e böl ve yönü çevir: a ≤ [[200|35]] ≈ 5,71.\nAdım 4: Ay sayısı tam sayı ve sınır üst sınır olduğundan aşağı yuvarla: a = 5.\nSağlama: 5 ayda 175 TL harcanır, 65 TL kalır (≥ 40); 6 ayda 210 TL harcanır, 30 TL kalır (< 40).\nCevap B."
},
{
  "id": "mat-es-348",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir otoparkta ilk saat için 15 TL, ilk saatten sonraki her saat için 6 TL alınmaktadır. Bir sürücü, ilk saatten sonra k saat daha park edecek ve toplam ödemenin 63 TL'yi aşmamasını istemektedir.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "15 + 6k ≥ 63",
    "15k + 6 ≤ 63",
    "21k ≤ 63",
    "15 + 6k ≤ 63"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters aldın: 'aşmamak' üst sınırdır, ≥ ise 'en az' demektir.",
    "Ücretlerin yerini değiştirdin: 15 TL yalnızca ilk saatin, 6 TL ise sonraki her saatin ücretidir.",
    "İlk saatin ücretini de her saate uyguladın: 15 TL bir kez ödenir, k ile çarpılmaz.",
    null
  ],
  "aciklama": "Toplam ücret = ilk saatin ücreti + sonraki saatlerin ücreti. 'Aşmamak' üst sınırdır ve 63 TL'nin kendisi de uygundur.\nAdım 1: İlk saat: 15 TL (bir kez).\nAdım 2: Sonraki k saat: 6 · k = 6k TL.\nAdım 3: Toplam 63'ü aşmayacağından 15 + 6k ≤ 63.\nSağlama: k = 8 için 15 + 48 = 63 uygun; k = 9 için 69 uygun değil.\nCevap D."
},
{
  "id": "mat-es-349",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir deneyde bir sıvının sıcaklığı t °C ile gösterilmiştir. Sıvının alabileceği sıcaklık değerleri aşağıdaki sayı doğrusunda verilmiştir (t gerçek sayıdır).\n**Buna göre t aşağıdakilerden hangisi __olamaz__?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−7</text><line x1=\"108.6\" y1=\"40\" x2=\"108.6\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"108.6\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"177.1\" y1=\"40\" x2=\"177.1\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"177.1\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"245.7\" y1=\"40\" x2=\"245.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"245.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"314.3\" y1=\"40\" x2=\"314.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"314.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"382.9\" y1=\"40\" x2=\"382.9\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"382.9\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"451.4\" y1=\"40\" x2=\"451.4\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"451.4\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"108.6\" y1=\"46\" x2=\"451.4\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"108.6\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"451.4\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−0,9",
    "−1,1",
    "−3",
    "−5,9"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "−1,1'i −1'den büyük sandın: negatif sayılarda sıfırdan uzaklaşan sayı küçülür, −1,1 < −1 olur; bu değer aralıktadır.",
    "Bu değer aralıktadır: −3, −6 ile −1 arasında kalır; soru aralıkta olmayan değeri soruyor.",
    "−5,9'u −6'dan küçük sandın: −5,9 > −6 olur; bu değer aralıktadır."
  ],
  "aciklama": "Boş yuvarlak o sayının aralığa dahil olmadığını gösterir. Sayı doğrusunda sağa gittikçe sayılar büyür.\nAdım 1: Gösterim −6 < t < −1'dir: t, −6'dan büyük ve −1'den küçüktür.\nAdım 2: −5,9 sayısı −6'dan büyüktür, aralıktadır. −3 de aralıktadır.\nAdım 3: −1,1 sayısı −1'den küçüktür (−1,1 < −1), yani aralıktadır.\nAdım 4: −0,9 sayısı −1'den büyüktür (−0,9 > −1); sayı doğrusunda −1'in sağında kalır ve aralığın dışındadır.\nSık yapılan hata: Negatif sayıları rakamlarına bakarak karşılaştırmak.\nCevap A."
},
{
  "id": "mat-es-350",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "**4 − [[x|3]] > 1 eşitsizliğini sağlayan en büyük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "−10",
    "8",
    "9",
    "10"
  ],
  "dogru": 1,
  "hatalar": [
    "İşareti kaybederek x < −9 buldun: (−3) · (−3) = +9 olur, −9 değil.",
    null,
    "Sınırı dahil ettin: x < 9 olduğundan 9 çözüm değildir (4 − 3 = 1 olur ve 1 > 1 yanlıştır).",
    "Yönü çevirmedin: x > 9 bulup 9'dan sonraki ilk tam sayıyı yazdın; oysa negatif sayıyla çarpınca yön döner."
  ],
  "aciklama": "Adım 1: 4'ü karşıya geçir: −[[x|3]] > 1 − 4, yani −[[x|3]] > −3.\nAdım 2: İki tarafı −3 ile çarp ve yönü çevir: x < 9.\nAdım 3: 9 dahil olmadığından 9'dan küçük en büyük tam sayı 8'dir.\nSağlama: x = 8 için 4 − [[8|3]] = [[4|3]] > 1 doğru; x = 9 için 4 − 3 = 1 > 1 yanlış.\nCevap B."
},
{
  "id": "mat-es-351",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Dikdörtgen biçimli bir bahçenin kısa kenarı 8 m, uzun kenarı x m'dir. Bahçenin çevresi en az 60 m olmalıdır.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "2(8 + x) ≤ 60",
    "2(8 + x) ≥ 60",
    "2x + 8 ≥ 60",
    "8x ≥ 60"
  ],
  "dogru": 1,
  "hatalar": [
    "Yönü ters aldın: 'en az' alt sınırdır, ≤ ise 'en fazla' demektir.",
    null,
    "Çevreyi eksik yazdın: dikdörtgenin çevresi iki kısa ve iki uzun kenarın toplamı olan 2(8 + x)'tir.",
    "Alanı yazdın: 8 · x alan formülüdür, çevre değil."
  ],
  "aciklama": "Dikdörtgenin çevresi, bütün kenarlarının toplamıdır: 2 · (kısa kenar + uzun kenar).\nAdım 1: Çevre: 2(8 + x).\nAdım 2: Çevre en az 60 olacağından 2(8 + x) ≥ 60.\nSağlama: x = 22 için 2 · 30 = 60 uygun; x = 21 için 58 uygun değil.\nCevap B."
},
{
  "id": "mat-es-352",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Aşağıdaki sayı doğrusunda x tam sayısının alabileceği değerler gösterilmiştir.\n**Bu değerlerden 5'ten küçük olanlar kaç tanedir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"88\" y1=\"40\" x2=\"88\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"136\" y1=\"40\" x2=\"136\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"184\" y1=\"40\" x2=\"184\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"232\" y1=\"40\" x2=\"232\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"280\" y1=\"40\" x2=\"280\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"328\" y1=\"40\" x2=\"328\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"376\" y1=\"40\" x2=\"376\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"424\" y1=\"40\" x2=\"424\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"472\" y1=\"40\" x2=\"472\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"88\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"88\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "5",
    "6",
    "7",
    "8"
  ],
  "dogru": 2,
  "hatalar": [
    "Negatif tam sayıları saymadın: 0, 1, 2, 3, 4 ile yetindin; −2 ve −1 de çözümdür.",
    "−2'yi saymadın: −2'deki yuvarlak doludur, yani −2 dahildir.",
    null,
    "5'i de saydın: soru 5'ten küçük olanları soruyor, 5 dahil değildir."
  ],
  "aciklama": "Adım 1: Gösterim x ≥ −2: −2 dahil, sağa doğru sonsuza gider.\nAdım 2: 5'ten küçük olma koşulunu ekle: −2 ≤ x < 5.\nAdım 3: Tam sayılar: −2, −1, 0, 1, 2, 3, 4 olmak üzere 7 tanedir.\nSağlama: Biri dahil, biri dahil değilse sayı = büyük − küçük = 5 − (−2) = 7.\nCevap C."
},
{
  "id": "mat-es-353",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Kaan, −4x + 8 < 20 eşitsizliğini aşağıdaki satırlarla çözmüştür:\n1. satır: −4x < 20 − 8\n2. satır: −4x < 12\n3. satır: x < 12 ÷ (−4)\n4. satır: x < −3\n**Kaan'ın çözümünde ilk hata hangi satırdadır?**",
  "gorsel": null,
  "secenekler": [
    "1. satır",
    "2. satır",
    "3. satır",
    "4. satır"
  ],
  "dogru": 2,
  "hatalar": [
    "Bu satır doğru: 8 karşı tarafa geçerken çıkarılır ve 20 − 8 yazılır.",
    "Bu satır doğru: 20 − 8 = 12 işlemi doğrudur.",
    null,
    "Bu satır, 3. satırdan gelen sonucu yazıyor; hata daha önce, bölme satırında yapılmıştır."
  ],
  "aciklama": "Eşitsizliğin iki tarafı negatif bir sayıya bölünürse yön değişir.\nAdım 1: İlk iki satırı kontrol et: −4x < 20 − 8 ve −4x < 12 doğrudur.\nAdım 2: 3. satırda −4'e bölünmüş ama yön çevrilmemiştir; doğrusu x > 12 ÷ (−4), yani x > −3 olmalıydı.\nAdım 3: 4. satırdaki sonuç bu hatanın devamıdır.\nSağlama: x = 0 için −4 · 0 + 8 = 8 < 20 doğrudur; ama x < −3 içinde 0 yoktur, yani Kaan'ın sonucu yanlıştır.\nCevap C."
},
{
  "id": "mat-es-354",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 3,
  "soru": "Bir kamp alanında her çadırda 4 kişi kalacaktır. Kamp alanında kalacak toplam kişi sayısı en az 25, en fazla 40 olacaktır.\n**Çadır sayısı c olduğuna göre bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "25 ≤ 4c ≤ 40",
    "25 < 4c < 40",
    "25 ≤ c ≤ 40",
    "25 ≤ 4c < 40"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sınırları dışarıda bıraktın: 'en az 25' ve 'en fazla 40' ifadelerinde 25 ve 40'ın kendisi de uygundur.",
    "Kişi sayısı yerine çadır sayısına sınır koydun: 4c kişi sayısıdır, c çadır sayısıdır.",
    "Üst sınırı dışarıda bıraktın: 'en fazla 40' ifadesi 40'ı da kapsar."
  ],
  "aciklama": "Çadırlarda kalan kişi sayısı 4c'dir. 'En az' alt sınırı, 'en fazla' üst sınırı gösterir ve ikisi de sınırı kapsar.\nAdım 1: Kişi sayısı: 4 · c = 4c.\nAdım 2: En az 25: 25 ≤ 4c. En fazla 40: 4c ≤ 40.\nAdım 3: İkisini birleştir: 25 ≤ 4c ≤ 40.\nSağlama: c = 7 için 28 kişi, c = 10 için 40 kişi uygun; c = 6 için 24 kişi uygun değil.\nCevap A."
},
{
  "id": "mat-es-355",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 3,
  "soru": "**2x − 5 < 15 eşitsizliğini sağlayan pozitif çift tam sayılar kaç tanedir?**",
  "gorsel": null,
  "secenekler": [
    "9",
    "5",
    "4",
    "2"
  ],
  "dogru": 2,
  "hatalar": [
    "Çift olma koşulunu uygulamadın: 1'den 9'a kadar bütün pozitif tam sayıları saydın.",
    "10'u da saydın: x < 10 olduğundan 10 çözüm değildir (20 − 5 = 15 olur ve 15 < 15 yanlıştır).",
    null,
    "5'i karşıya geçirirken 15 − 5 = 10 aldın: 2x < 10, x < 5 olur ve yalnızca 2 ile 4'ü saydın."
  ],
  "aciklama": "Adım 1: 5'i karşıya geçir: 2x < 20.\nAdım 2: 2'ye böl: x < 10.\nAdım 3: 10 dahil değil; 10'dan küçük pozitif çift tam sayılar 2, 4, 6, 8'dir.\nAdım 4: Say: 4 tane.\nSık yapılan hata: Çözümün sınırı olan 10'u da saymak.\nCevap C."
},
{
  "id": "mat-es-356",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Şehirlerarası bir otobüs, 440 km uzaklıktaki bir şehre gidecektir. Şoför yolun ilk 2 saatinde saatte 60 km hızla ilerleyecek, ardından 20 dakika mola verecek ve moladan sonraki 3 saat boyunca saatte x km sabit hızla ilerleyecektir (x tam sayıdır). Mola sırasında yol alınmaz. Otobüsün şehre varabilmesi için bu iki bölümde aldığı toplam yol en az 440 km olmalıdır.\n**Buna göre x en az kaç olabilir?**",
  "gorsel": null,
  "secenekler": [
    "147",
    "107",
    "106",
    "88"
  ],
  "dogru": 1,
  "hatalar": [
    "İlk 2 saatte alınan 120 km'yi hesaba katmadın: 3x ≥ 440 → x ≥ 146,67 olur ve yukarı yuvarlayınca 147 bulursun.",
    null,
    "Aşağı yuvarladın: x ≥ 106,67 iken x = 106 için toplam yol 120 + 318 = 438 km olur ve 440 km'ye yetmez.",
    "Yolu tek bir ortalama hıza yaydın: 5 saat sayıp 440 ÷ 5 = 88 buldun; oysa ilk bölümün hızı 60 km/saat olarak sabittir."
  ],
  "aciklama": "Yol = hız · süre. Toplam yol, iki bölümün yollarının toplamıdır. 'En az' alt sınırdır ve x tam sayı olduğundan sonuç yukarı yuvarlanır.\nAdım 1: İlk bölümde alınan yol: 60 · 2 = 120 km. Mola sırasında yol alınmaz; 20 dakika hesaba girmez.\nAdım 2: İkinci bölümde alınan yol: 3 · x = 3x km.\nAdım 3: Toplam yol en az 440 olacağından 120 + 3x ≥ 440.\nAdım 4: 120'yi karşıya geçir: 3x ≥ 320. 3'e böl: x ≥ [[320|3]] ≈ 106,67.\nAdım 5: x tam sayı ve sınır alt sınır olduğundan yukarı yuvarla: x = 107.\nSağlama: x = 107 için 120 + 321 = 441 ≥ 440 uygun; x = 106 için 120 + 318 = 438 uygun değil.\nCevap B."
},
{
  "id": "mat-es-357",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir yarışma sınavında 30 soru vardır. Her doğru cevap 3 puan getirir, her yanlış cevap 1 puan götürür, boş bırakılan sorular puanı değiştirmez. Ada 6 soruyu boş bırakmış, diğerlerini cevaplamıştır ve x tanesini doğru yapmıştır. Finale kalmak için toplam puanın en az 60 olması gerekir.\n**Buna göre Ada en az kaç soruyu doğru yapmış olmalıdır?**",
  "gorsel": null,
  "secenekler": [
    "18",
    "21",
    "22",
    "23"
  ],
  "dogru": 1,
  "hatalar": [
    "Yanlış cevapları puana ekledin: yanlışlar puan götürür, yani çıkarılır.",
    null,
    "Eşitliği dışarıda bıraktın: 'en az 60 puan' tam 60 puanı da kapsar; x = 21 için 63 − 3 = 60 olur.",
    "6 boş soruyu yanlış saydın: boşlar puanı değiştirmez, yanlış sayısı 30 − x değil 24 − x'tir."
  ],
  "aciklama": "Cevaplanan soru sayısı 30 − 6 = 24 olduğundan x doğru için yanlış sayısı 24 − x'tir.\nAdım 1: Toplam puan: 3x − (24 − x) = 4x − 24.\nAdım 2: En az 60 olacak: 4x − 24 ≥ 60.\nAdım 3: 24'ü karşıya geçir: 4x ≥ 84.\nAdım 4: 4'e böl: x ≥ 21.\nSağlama: x = 21 için 63 − 3 = 60 yeterli; x = 20 için 60 − 4 = 56 yetmez.\nCevap B."
},
{
  "id": "mat-es-358",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir sayı oyununda x tam sayısı için iki kural verilmiştir. Kuralların her biri aşağıdaki sayı doğrularında gösterilmiştir.\n**Her iki kurala da uyan kaç farklı x tam sayısı vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 188\" role=\"img\" aria-label=\"A ve B kuralları için sayı doğruları\"><text x=\"14\" y=\"20\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">A kuralı</text><line x1=\"14\" y1=\"38\" x2=\"546\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,38 536,33 536,43\" fill=\"currentColor\"/><polygon points=\"14,38 24,33 24,43\" fill=\"currentColor\"/><line x1=\"40\" y1=\"32\" x2=\"40\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"88\" y1=\"32\" x2=\"88\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136\" y1=\"32\" x2=\"136\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"184\" y1=\"32\" x2=\"184\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"232\" y1=\"32\" x2=\"232\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"32\" x2=\"280\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"328\" y1=\"32\" x2=\"328\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"376\" y1=\"32\" x2=\"376\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"424\" y1=\"32\" x2=\"424\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"472\" y1=\"32\" x2=\"472\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"32\" x2=\"520\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"88\" y1=\"38\" x2=\"536\" y2=\"38\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,38 532,30 532,46\" fill=\"var(--vurgu)\"/><circle cx=\"88\" cy=\"38\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"14\" y=\"112\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">B kuralı</text><line x1=\"14\" y1=\"130\" x2=\"546\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,130 536,125 536,135\" fill=\"currentColor\"/><polygon points=\"14,130 24,125 24,135\" fill=\"currentColor\"/><line x1=\"40\" y1=\"124\" x2=\"40\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"88\" y1=\"124\" x2=\"88\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"136\" y1=\"124\" x2=\"136\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"184\" y1=\"124\" x2=\"184\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"232\" y1=\"124\" x2=\"232\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"280\" y1=\"124\" x2=\"280\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"328\" y1=\"124\" x2=\"328\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"376\" y1=\"124\" x2=\"376\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"424\" y1=\"124\" x2=\"424\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"472\" y1=\"124\" x2=\"472\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"124\" x2=\"520\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"20\" y1=\"130\" x2=\"376\" y2=\"130\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,130 28,122 28,138\" fill=\"var(--vurgu)\"/><circle cx=\"376\" cy=\"130\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "7",
    "6",
    "5",
    "3"
  ],
  "dogru": 2,
  "hatalar": [
    "Her iki ucu da dahil ettin: iki yuvarlak da boştur, ne −3 ne de 3 aralığa girer.",
    "Uçlardan birini dahil ettin: iki yuvarlak da boştur, ne −3 ne de 3 aralığa girer.",
    null,
    "Yalnızca negatif olmayan tam sayıları saydın: −2 ve −1 de her iki kurala uyar."
  ],
  "aciklama": "İki kurala birden uyan sayılar, iki boyalı bölgenin ortak kısmındadır.\nAdım 1: A kuralı: x > −3 (−3 dahil değil). B kuralı: x < 3 (3 dahil değil).\nAdım 2: Ortak bölge: −3 < x < 3.\nAdım 3: Tam sayılar: −2, −1, 0, 1, 2 olmak üzere 5 tanedir.\nSağlama: İki uç da dahil değilse sayı = 3 − (−3) − 1 = 5.\nCevap C."
},
{
  "id": "mat-es-359",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "**[[−x|4]] − 2 ≤ 1 eşitsizliğini sağlayan en küçük tam sayı kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "12",
    "−3",
    "−11",
    "−12"
  ],
  "dogru": 3,
  "hatalar": [
    "İşareti kaybettin: −x ≤ 12 iken −1 ile çarpınca x ≥ −12 olur, 12 değil.",
    "4 ile çarpmayı atladın: −x ≤ 3 yazıp x ≥ −3 buldun; oysa [[−x|4]] ≤ 3 iken önce iki taraf 4 ile çarpılır.",
    "Sınırı dahil etmedin: ≤ işareti −12'yi de kapsar (x ≥ −12).",
    null
  ],
  "aciklama": "Adım 1: 2'yi karşıya geçir: [[−x|4]] ≤ 3.\nAdım 2: İki tarafı 4 ile çarp: −x ≤ 12.\nAdım 3: İki tarafı −1 ile çarp ve yönü çevir: x ≥ −12.\nAdım 4: −12 dahil olduğundan en küçük tam sayı −12'dir.\nSağlama: x = −12 için [[12|4]] − 2 = 1 ≤ 1 doğru; x = −13 için [[13|4]] − 2 = 1,25 ≤ 1 yanlış.\nCevap D."
},
{
  "id": "mat-es-360",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Okul kantininin kasasında akşam sayımı yapılmıştır. Kasada 20 TL'lik x adet ve 50 TL'lik 6 adet banknot vardır; başka para yoktur. Kantin sorumlusu ertesi sabah kasadan 120 TL'lik bir tedarikçi faturası ödeyecektir. Fatura ödendikten sonra kasada kalan paranın 800 TL'den __fazla__ olması isteniyor.\n**Buna göre kasada en az kaç adet 20 TL'lik banknot bulunmalıdır?**",
  "gorsel": null,
  "secenekler": [
    "32",
    "31",
    "26",
    "20"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sınırı dahil ettin: x = 31 için kalan 620 + 300 − 120 = 800 olur ve 800 > 800 yanlıştır; 'fazla' eşitliği kapsamaz.",
    "Faturayı hesaba katmadın: 20x + 300 > 800 → x > 25 → 26 buldun; oysa ödenen fatura kasadan çıkar.",
    "Faturayı kasaya ekledin: 20x + 300 + 120 > 800 → x > 19 → 20 buldun; ödenen para kasadan çıkar, kasaya girmez."
  ],
  "aciklama": "Kalan para = kasadaki para − ödenen fatura. 'Fazla' sınırın kendisini kapsamaz.\nAdım 1: Kasadaki para: 20x + 6 · 50 = 20x + 300.\nAdım 2: Fatura ödenince kalan: 20x + 300 − 120 = 20x + 180.\nAdım 3: Kalan 800'den fazla olacağından 20x + 180 > 800, yani 20x > 620.\nAdım 4: 20'ye böl: x > 31. Sınır dahil değil; 31'den büyük en küçük tam sayı 32'dir.\nSağlama: x = 32 için 640 + 180 = 820 > 800 uygun; x = 31 için 800 > 800 uygun değil.\nCevap A."
},
{
  "id": "mat-es-361",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Yük taşıyan bir kamyonetin taşıyabileceği toplam kütle 500 kg'dır. Kamyonette 80 kg olan şoför ve 40 kg olan bir sandık bulunmaktadır. Her birinin kütlesi 12 kg olan x tane koli de yüklenecek ve toplam kütle sınırı aşılmayacaktır.\n**Buna göre en fazla kaç koli yüklenebilir?**",
  "gorsel": null,
  "secenekler": [
    "35",
    "32",
    "31",
    "28"
  ],
  "dogru": 2,
  "hatalar": [
    "Sandığın kütlesini hesaba katmadın: (500 − 80) ÷ 12 = 35.",
    "Yukarı yuvarladın: 380 ÷ 12 ≈ 31,67 iken 32 koli 504 kg eder ve sınırı aşar.",
    null,
    "Şoförün kütlesini iki kez çıkardın: 500 − 80 − 80 = 340 ve 340 ÷ 12 ≈ 28."
  ],
  "aciklama": "Adım 1: Toplam kütle: şoför + sandık + koliler = 80 + 40 + 12x.\nAdım 2: Bu kütle 500 kg'ı aşmayacağından 80 + 40 + 12x ≤ 500, yani 12x ≤ 380.\nAdım 3: 12'ye böl: x ≤ 31,67.\nAdım 4: Koli sayısı tam sayı ve sınır üst sınır olduğundan aşağı yuvarla: x = 31.\nSağlama: 31 koli için 120 + 372 = 492 ≤ 500 uygun; 32 koli için 120 + 384 = 504 uygun değil.\nCevap C."
},
{
  "id": "mat-es-362",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aşağıdaki sayı doğrularında x tam sayısı için iki koşul gösterilmiştir.\n**−6 ile 2 arasındaki (bu sayılar dahil) tam sayılardan kaç tanesi A ve B koşullarından __yalnızca birine__ uyar?**",
  "gorsel": "<svg viewBox=\"0 0 560 188\" role=\"img\" aria-label=\"A ve B koşulları için sayı doğruları\"><text x=\"14\" y=\"20\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">A koşulu</text><line x1=\"14\" y1=\"38\" x2=\"546\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,38 536,33 536,43\" fill=\"currentColor\"/><polygon points=\"14,38 24,33 24,43\" fill=\"currentColor\"/><line x1=\"40\" y1=\"32\" x2=\"40\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"100\" y1=\"32\" x2=\"100\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"160\" y1=\"32\" x2=\"160\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"220\" y1=\"32\" x2=\"220\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"280\" y1=\"32\" x2=\"280\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"340\" y1=\"32\" x2=\"340\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"400\" y1=\"32\" x2=\"400\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"460\" y1=\"32\" x2=\"460\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"520\" y1=\"32\" x2=\"520\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"20\" y1=\"38\" x2=\"340\" y2=\"38\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,38 28,30 28,46\" fill=\"var(--vurgu)\"/><circle cx=\"340\" cy=\"38\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"14\" y=\"112\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">B koşulu</text><line x1=\"14\" y1=\"130\" x2=\"546\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,130 536,125 536,135\" fill=\"currentColor\"/><polygon points=\"14,130 24,125 24,135\" fill=\"currentColor\"/><line x1=\"40\" y1=\"124\" x2=\"40\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"100\" y1=\"124\" x2=\"100\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"100\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"160\" y1=\"124\" x2=\"160\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"220\" y1=\"124\" x2=\"220\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"220\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"280\" y1=\"124\" x2=\"280\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"340\" y1=\"124\" x2=\"340\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"400\" y1=\"124\" x2=\"400\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"400\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"460\" y1=\"124\" x2=\"460\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"460\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"520\" y1=\"124\" x2=\"520\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"160\" y1=\"130\" x2=\"536\" y2=\"130\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,130 532,122 532,138\" fill=\"var(--vurgu)\"/><circle cx=\"160\" cy=\"130\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "2",
    "3",
    "4",
    "6"
  ],
  "dogru": 3,
  "hatalar": [
    "Yalnızca A koşuluna uyanları saydın (−6, −5); B'ye uyup A'ya uymayan −1, 0, 1, 2 de sayılmalıdır.",
    "Her iki koşula birden uyanları saydın (−4, −3, −2); soru yalnızca birine uyanları soruyor.",
    "Yalnızca B koşuluna uyanları saydın (−1, 0, 1, 2); A'ya uyup B'ye uymayan −6 ve −5 de sayılmalıdır.",
    null
  ],
  "aciklama": "'Yalnızca birine uyan', iki koşuldan biri sağlanırken ötekinin sağlanmadığı sayıdır.\nAdım 1: A koşulu: x < −1 (−1 dahil değil). B koşulu: x ≥ −4 (−4 dahil).\nAdım 2: −6 ile 2 arasındaki tam sayılar: −6, −5, −4, −3, −2, −1, 0, 1, 2.\nAdım 3: Yalnızca A'ya uyanlar: −6, −5. İkisine birden uyanlar: −4, −3, −2. Yalnızca B'ye uyanlar: −1, 0, 1, 2.\nAdım 4: Yalnızca birine uyanlar: 2 + 4 = 6 tanedir.\nSağlama: 9 sayının 3'ü ikisine birden uyar, hiçbirine uymayan yoktur; 9 − 3 = 6.\nCevap D."
},
{
  "id": "mat-es-363",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir telefon şirketinin iki tarifesi vardır. A tarifesinde aylık sabit ücret 30 TL, her 1 GB için 5 TL alınır. B tarifesinde aylık sabit ücret 50 TL, her 1 GB için 3 TL alınır. Bir ayda kullanılan internet miktarı g GB'dır.\n**A tarifesinin B tarifesinden __daha ucuz__ olması aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "30 + 5g < 50 + 3g",
    "30 + 5g > 50 + 3g",
    "30 + 5g ≤ 50 + 3g",
    "35g < 53g"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Yönü ters aldın: 'A daha ucuz' demek A'nın ödemesinin B'ninkinden küçük olması demektir.",
    "Eşitliği ekledin: 'daha ucuz' ifadesi iki tarifenin eşit olduğu durumu kapsamaz.",
    "Sabit ücretleri GB ücretlerine ekleyip çarptın: sabit ücret GB sayısına bağlı değildir."
  ],
  "aciklama": "Bir tarifenin ödemesi = sabit ücret + GB ücreti. 'Daha ucuz', ödemenin diğerinden küçük olması demektir ve eşitliği kapsamaz.\nAdım 1: A tarifesinde ödeme: 30 + 5g.\nAdım 2: B tarifesinde ödeme: 50 + 3g.\nAdım 3: A daha ucuz olacağından 30 + 5g < 50 + 3g.\nSağlama: g = 5 için A: 55 TL, B: 65 TL; A daha ucuzdur. g = 10 için ikisi de 80 TL'dir; eşit olduğundan 'daha ucuz' değildir.\nCevap A."
},
{
  "id": "mat-es-364",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir kütüphane, yıllık üyelik ücreti olarak 90 TL almakta ve ödünç alınan her kitap için ayrıca 5 TL işlem bedeli almaktadır. Yeni üye olan Emre, üyelik ücretine ek olarak 20 TL'lik bir üyelik kartı da alacaktır. Emre bir yıl içinde toplam 175 TL'den fazla harcamak istememektedir.\n**Emre en fazla kaç kitap ödünç alabilir?**",
  "gorsel": null,
  "secenekler": [
    "35",
    "17",
    "13",
    "12"
  ],
  "dogru": 2,
  "hatalar": [
    "Sabit ücretleri hiç çıkarmadın: 175 ÷ 5 = 35.",
    "Kart ücretini hesaba katmadın: (175 − 90) ÷ 5 = 17.",
    null,
    "Sınırı dışarıda bıraktın: 'fazla harcamak istemiyor' toplamın 175 TL'ye eşit olmasına izin verir; k = 13 için tam 175 TL olur."
  ],
  "aciklama": "Adım 1: Toplam harcama: üyelik + kart + kitap işlemleri = 90 + 20 + 5k.\nAdım 2: Bu tutar 175'ten fazla olmayacağından 110 + 5k ≤ 175.\nAdım 3: 110'u çıkar: 5k ≤ 65.\nAdım 4: 5'e böl: k ≤ 13. Emre en fazla 13 kitap alabilir.\nSağlama: k = 13 için 110 + 65 = 175 uygun; k = 14 için 180 uygun değil.\nCevap C."
},
{
  "id": "mat-es-365",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "2x − a > 4 eşitsizliğinin çözüm kümesi aşağıdaki sayı doğrusunda gösterilmiştir (a bir tam sayıdır).\n**Buna göre a kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"108.6\" y1=\"40\" x2=\"108.6\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"108.6\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"177.1\" y1=\"40\" x2=\"177.1\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"177.1\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"245.7\" y1=\"40\" x2=\"245.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"245.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"314.3\" y1=\"40\" x2=\"314.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"314.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"382.9\" y1=\"40\" x2=\"382.9\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"382.9\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">7</text><line x1=\"451.4\" y1=\"40\" x2=\"451.4\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"451.4\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">8</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">9</text><line x1=\"245.7\" y1=\"46\" x2=\"536\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,46 532,38 532,54\" fill=\"var(--vurgu)\"/><circle cx=\"245.7\" cy=\"46\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "−6",
    "6",
    "10",
    "14"
  ],
  "dogru": 1,
  "hatalar": [
    "a'yı karşıya geçirirken işareti yanlış kullandın: 2x − a > 4 iken 2x > 4 + a olur; 4 − a değil.",
    null,
    "4'ü hesaba katmadın: 2 · 5 = 10 buldun ama 2x > 4 + a eşitsizliğinde 4 de vardır.",
    "4'ü ters yönde kullandın: 10 + 4 yerine 10 − 4 = 6 yazılmalıdır."
  ],
  "aciklama": "Sayı doğrusunda boş yuvarlak 5'te ve ok sağa: çözüm kümesi x > 5'tir.\nAdım 1: 2x − a > 4 eşitsizliğini x için çöz: 2x > 4 + a, yani x > [[4 + a|2]].\nAdım 2: Bu sınır 5'e eşit olmalıdır: [[4 + a|2]] = 5.\nAdım 3: 4 + a = 10, a = 6.\nSağlama: a = 6 için 2x − 6 > 4 → 2x > 10 → x > 5.\nCevap B."
},
{
  "id": "mat-es-366",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Onur'un ilk üç matematik sınavından aldığı notlar 72, 80 ve 68'dir. Dördüncü sınavdan alacağı not y'dir. Dört sınavın not ortalamasının 75'ten __az olmaması__ isteniyor.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "[[72 + 80 + 68 + y|4]] ≤ 75",
    "[[72 + 80 + 68 + y|3]] ≥ 75",
    "72 + 80 + 68 + y ≥ 75",
    "[[72 + 80 + 68 + y|4]] ≥ 75"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters aldın: 'az olmaması' ortalamanın 75'e eşit ya da 75'ten büyük olması demektir.",
    "Notların toplamını 3'e böldün: dört sınav olduğundan toplam 4'e bölünür.",
    "Toplamı ortalamayla kıyasladın: ortalama için notların toplamı sınav sayısına bölünmelidir.",
    null
  ],
  "aciklama": "Ortalama = notların toplamı ÷ sınav sayısı. 'Az olmaması' alt sınırdır ve 75'in kendisi de uygundur.\nAdım 1: Dört notun toplamı: 72 + 80 + 68 + y.\nAdım 2: Ortalama: [[72 + 80 + 68 + y|4]].\nAdım 3: Ortalama 75'ten az olmayacağından [[72 + 80 + 68 + y|4]] ≥ 75.\nSağlama: y = 80 için toplam 300 ve ortalama 75 uygun; y = 79 için ortalama 74,75 uygun değil.\nCevap D."
},
{
  "id": "mat-es-367",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir bisiklet kiralama noktasında ilk saat için 12 TL, ilk saatten sonraki her tam saat için 5 TL alınmaktadır. Yasin'in bisiklet kiralamak için ayırdığı para 70 TL'dir.\n**Yasin bir bisikleti bu noktadan en fazla toplam kaç saat kiralayabilir? (Süre tam saat olarak hesaplanıyor.)**",
  "gorsel": null,
  "secenekler": [
    "14",
    "13",
    "12",
    "11"
  ],
  "dogru": 2,
  "hatalar": [
    "İlk saatin farklı ücretini hesaba katmadın: 70 ÷ 5 = 14 sanırsın.",
    "Yukarı yuvarladın: 5k ≤ 58 iken k = 11,6'dır; 12. ek saat ödenemez, toplam 12 saatte kalınır.",
    null,
    "Yalnızca ilk saatten sonraki saatleri saydın: soru ilk saat dahil toplam süreyi soruyor."
  ],
  "aciklama": "Adım 1: İlk saatten sonraki saat sayısına k de. Ödeme: 12 + 5k.\nAdım 2: Ödeme 70 TL'yi aşmayacağından 12 + 5k ≤ 70, yani 5k ≤ 58.\nAdım 3: 5'e böl: k ≤ 11,6. Saat sayısı tam sayı ve sınır üst sınır olduğundan aşağı yuvarla: k = 11.\nAdım 4: Soru toplam süreyi soruyor: ilk saat + 11 saat = 12 saat.\nSağlama: 12 saat için 12 + 55 = 67 TL uygun; 13 saat için 12 + 60 = 72 TL uygun değil.\nCevap C."
},
{
  "id": "mat-es-368",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aşağıdaki sayı doğrularında x tam sayısı için iki koşul gösterilmiştir.\n**Her iki koşula da uyan tam sayıların toplamı kaçtır?**",
  "gorsel": "<svg viewBox=\"0 0 560 188\" role=\"img\" aria-label=\"A ve B koşulları için sayı doğruları\"><text x=\"14\" y=\"20\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">A koşulu</text><line x1=\"14\" y1=\"38\" x2=\"546\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,38 536,33 536,43\" fill=\"currentColor\"/><polygon points=\"14,38 24,33 24,43\" fill=\"currentColor\"/><line x1=\"40\" y1=\"32\" x2=\"40\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"88\" y1=\"32\" x2=\"88\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"136\" y1=\"32\" x2=\"136\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"184\" y1=\"32\" x2=\"184\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"232\" y1=\"32\" x2=\"232\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"280\" y1=\"32\" x2=\"280\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"328\" y1=\"32\" x2=\"328\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"376\" y1=\"32\" x2=\"376\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"424\" y1=\"32\" x2=\"424\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"472\" y1=\"32\" x2=\"472\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"520\" y1=\"32\" x2=\"520\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"88\" y1=\"38\" x2=\"424\" y2=\"38\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"88\" cy=\"38\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"424\" cy=\"38\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"14\" y=\"112\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">B koşulu</text><line x1=\"14\" y1=\"130\" x2=\"546\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,130 536,125 536,135\" fill=\"currentColor\"/><polygon points=\"14,130 24,125 24,135\" fill=\"currentColor\"/><line x1=\"40\" y1=\"124\" x2=\"40\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−6</text><line x1=\"88\" y1=\"124\" x2=\"88\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"88\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"136\" y1=\"124\" x2=\"136\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"136\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"184\" y1=\"124\" x2=\"184\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"184\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"232\" y1=\"124\" x2=\"232\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"232\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"280\" y1=\"124\" x2=\"280\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"280\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"328\" y1=\"124\" x2=\"328\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"328\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"376\" y1=\"124\" x2=\"376\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"376\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"424\" y1=\"124\" x2=\"424\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"424\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"472\" y1=\"124\" x2=\"472\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"472\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"520\" y1=\"124\" x2=\"520\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"280\" y1=\"130\" x2=\"536\" y2=\"130\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,130 532,122 532,138\" fill=\"var(--vurgu)\"/><circle cx=\"280\" cy=\"130\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "3",
    "2",
    "0",
    "−7"
  ],
  "dogru": 1,
  "hatalar": [
    "−1'i saymadın: B'deki yuvarlak doludur, yani −1 dahildir.",
    null,
    "2'yi saymadın: A'daki dolu yuvarlak 2'nin dahil olduğunu gösterir.",
    "Yalnızca A koşulundaki tam sayıları topladın: B koşulu −1'den küçük sayıları eler."
  ],
  "aciklama": "Adım 1: A koşulu: −5 < x ≤ 2. B koşulu: x ≥ −1.\nAdım 2: Ortak bölge: −1 ≤ x ≤ 2 (iki uç da dahil).\nAdım 3: Ortak tam sayılar: −1, 0, 1, 2.\nAdım 4: Topla: −1 + 0 + 1 + 2 = 2.\nSık yapılan hata: Yalnızca A'yı okuyup B'nin kestiği kısmı unutmak.\nCevap B."
},
{
  "id": "mat-es-369",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir kargo firması, gönderi ücretini sabit 12 TL ile her kilogram için 4 TL'nin toplamı olarak hesaplamaktadır. Firmanın bir kampanyası, gönderi ücreti 30 TL'den __az olmayan__ ve 60 TL'yi __aşmayan__ paketlere uygulanmaktadır. Paketin kütlesi k kg'dır.\n**Bir paketin kampanyaya girmesi aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "30 ≤ 12 + 4k ≤ 60",
    "30 < 12 + 4k < 60",
    "30 ≤ 16k ≤ 60",
    "30 ≤ 12 + 4k < 60"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "Sınırları dışarıda bıraktın: 'az olmayan' 30'u, 'aşmayan' 60'ı da kapsar.",
    "Sabit ücreti de kiloyla çarptın: 12 TL bir kez ödenir, k ile çarpılmaz.",
    "Üst sınırı dışarıda bıraktın: 'aşmayan' ifadesi 60 TL'yi de kapsar."
  ],
  "aciklama": "'Az olmayan' alt sınır (≥), 'aşmayan' üst sınır (≤) koyar; ikisi de sınırı kapsar. Ücret iki sınır arasında olduğundan eşitsizlik çift taraflı yazılır.\nAdım 1: Ücret: 12 + 4k.\nAdım 2: En az 30: 30 ≤ 12 + 4k. En fazla 60: 12 + 4k ≤ 60.\nAdım 3: Birleştir: 30 ≤ 12 + 4k ≤ 60.\nSağlama: k = 5 için 32 TL, k = 12 için 60 TL uygun; k = 4 için 28 TL uygun değil.\nCevap A."
},
{
  "id": "mat-es-370",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir oyunda a, oyuncunun elindeki kart sayısını göstermektedir (a bir doğal sayıdır). Oyun kuralı gereği 4 − 3a > −8 eşitsizliği sağlanmalıdır.\n**Buna göre a kaç farklı değer alabilir?**",
  "gorsel": null,
  "secenekler": [
    "12",
    "4",
    "3",
    "2"
  ],
  "dogru": 1,
  "hatalar": [
    "Son adımı atladın: −3a > −12 buldun ama −3'e bölmedin; 12'yi cevap sandın.",
    null,
    "0'ı saymadın: 0 da bir doğal sayıdır ve eşitsizliği sağlar (4 − 0 = 4 > −8).",
    "4'ü karşıya geçirirken işaretini değiştirmedin: −3a > −8 + 4 = −4 olur, a < 1,33 bulursun ve yalnızca 0 ile 1'i sayarsın."
  ],
  "aciklama": "Doğal sayılar 0, 1, 2, 3, … dizisidir ve 0'ı içerir.\nAdım 1: 4'ü karşıya geçir: −3a > −8 − 4, yani −3a > −12.\nAdım 2: −3'e böl ve yönü çevir: a < 4.\nAdım 3: 4 dahil değildir; 4'ten küçük doğal sayılar 0, 1, 2, 3'tür.\nAdım 4: Say: 4 farklı değer.\nSağlama: a = 3 için 4 − 9 = −5 > −8 doğru; a = 4 için 4 − 12 = −8 > −8 yanlış.\nCevap B."
},
{
  "id": "mat-es-371",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Kerem, aklından bir x tam sayısı tutuyor ve şu iki ipucunu veriyor:\n1. ipucu: x, −4'ten __küçük değildir__.\n2. ipucu: x'in alabileceği değerler aşağıdaki sayı doğrusunda gösterilmiştir.\n**Buna göre Kerem'in tuttuğu sayı kaç farklı değer alabilir?**",
  "gorsel": "<svg viewBox=\"0 0 560 96\" role=\"img\" aria-label=\"x için sayı doğrusu\"><line x1=\"14\" y1=\"46\" x2=\"546\" y2=\"46\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,46 536,41 536,51\" fill=\"currentColor\"/><polygon points=\"14,46 24,41 24,51\" fill=\"currentColor\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"93.3\" y1=\"40\" x2=\"93.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"93.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"146.7\" y1=\"40\" x2=\"146.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"146.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"253.3\" y1=\"40\" x2=\"253.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"253.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"306.7\" y1=\"40\" x2=\"306.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"306.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"360\" y1=\"40\" x2=\"360\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"360\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"413.3\" y1=\"40\" x2=\"413.3\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"413.3\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"466.7\" y1=\"40\" x2=\"466.7\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"466.7\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"52\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"76\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"20\" y1=\"46\" x2=\"413.3\" y2=\"46\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"14,46 28,38 28,54\" fill=\"var(--vurgu)\"/><circle cx=\"413.3\" cy=\"46\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "7",
    "6",
    "5",
    "3"
  ],
  "dogru": 0,
  "hatalar": [
    null,
    "−4'ü saymadın: 'küçük değildir' ifadesi −4'ü de kapsar (x ≥ −4).",
    "İki ucu da saymadın: −4'teki 'küçük değildir' ve 2'deki dolu yuvarlak, iki sayının da dahil olduğunu gösterir.",
    "Negatif tam sayıları saymadın: −4, −3, −2 ve −1 de iki ipucuna uyar."
  ],
  "aciklama": "'Küçük değildir' sınırın kendisini kapsar: x ≥ −4. Sayı doğrusundaki gösterim x ≤ 2'dir (2'deki yuvarlak dolu).\nAdım 1: İki ipucunu birleştir: −4 ≤ x ≤ 2.\nAdım 2: Tam sayılar: −4, −3, −2, −1, 0, 1, 2.\nAdım 3: Say: 7 tane.\nSağlama: İki uç da dahilse sayı = 2 − (−4) + 1 = 7.\nCevap A."
},
{
  "id": "mat-es-372",
  "kazanim": "M.8.2.3.1",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Selma bugün x yaşındadır. 5 yıl önceki yaşının 2 katı, 3 yıl sonraki yaşından __fazla değildir__.\n**Bu durum aşağıdaki eşitsizliklerden hangisiyle gösterilir?**",
  "gorsel": null,
  "secenekler": [
    "2(x − 5) ≥ x + 3",
    "2x − 5 ≤ x + 3",
    "2(x + 5) ≤ x − 3",
    "2(x − 5) ≤ x + 3"
  ],
  "dogru": 3,
  "hatalar": [
    "Yönü ters aldın: 'fazla değildir' ifadesi ≤ anlamına gelir.",
    "Çarpmayı eksik uyguladın: 5 yıl önceki yaşın 2 katı 2(x − 5)'tir; 2x − 5 yalnızca x'in 2 katının 5 eksiğidir.",
    "Zamanları ters aldın: 5 yıl önceki yaş x − 5, 3 yıl sonraki yaş x + 3'tür.",
    null
  ],
  "aciklama": "Geçmiş yaş için çıkarma, gelecek yaş için toplama yapılır. 'Fazla değildir', ≤ demektir.\nAdım 1: 5 yıl önceki yaş: x − 5; bunun 2 katı: 2(x − 5).\nAdım 2: 3 yıl sonraki yaş: x + 3.\nAdım 3: İlki ikincisinden fazla olmadığından 2(x − 5) ≤ x + 3.\nSağlama: x = 13 için 2 · 8 = 16 ≤ 16 doğru; x = 14 için 18 ≤ 17 yanlış.\nCevap D."
},
{
  "id": "mat-es-373",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Defne'nin spor için ayırdığı bütçe 130 TL'dir. A salonu aylık 45 TL sabit üyelik ücreti ve katılınan her ders için 8 TL, B salonu ise aylık 60 TL sabit üyelik ücreti ve katılınan her ders için 6 TL almaktadır. Katılınan ders sayısı tam sayı olarak hesaplanmaktadır.\n**Defne bütçesini aşmadan B salonunda katılabileceği en fazla ders sayısı ile A salonunda katılabileceği en fazla ders sayısı arasındaki fark kaçtır?**",
  "gorsel": null,
  "secenekler": [
    "15",
    "2",
    "1",
    "0"
  ],
  "dogru": 2,
  "hatalar": [
    "Sabit ücretlerin farkını aldın: 60 − 45 = 15; soru ders sayılarının farkını soruyor.",
    "B salonunda 11,67 sonucunu yukarı yuvarlayıp 12 aldın: 12 ders için ödeme 60 + 72 = 132 TL olur ve bütçeyi aşar.",
    null,
    "A salonunda 10,6 sonucunu yukarı yuvarlayıp 11 aldın: 11 ders için ödeme 45 + 88 = 133 TL olur ve bütçeyi aşar."
  ],
  "aciklama": "Her salon için ödeme = sabit ücret + ders ücreti; sonuç tam sayı ve üst sınır olduğundan aşağı yuvarlanır.\nAdım 1: A salonu: 45 + 8g ≤ 130 → 8g ≤ 85 → g ≤ 10,6; en fazla 10 ders.\nAdım 2: B salonu: 60 + 6g ≤ 130 → 6g ≤ 70 → g ≤ 11,67; en fazla 11 ders.\nAdım 3: Fark: 11 − 10 = 1 ders.\nSağlama: A'da 10 ders için 125 TL, B'de 11 ders için 126 TL ödenir; ikisi de 130 TL'yi aşmaz.\nCevap C."
},
{
  "id": "mat-es-374",
  "kazanim": "M.8.2.3.2",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Aşağıdaki sayı doğrularında x tam sayısı için iki koşul gösterilmiştir.\n**A koşuluna uyup B koşuluna __uymayan__ kaç farklı tam sayı vardır?**",
  "gorsel": "<svg viewBox=\"0 0 560 188\" role=\"img\" aria-label=\"A ve B koşulları için sayı doğruları\"><text x=\"14\" y=\"20\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">A koşulu</text><line x1=\"14\" y1=\"38\" x2=\"546\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,38 536,33 536,43\" fill=\"currentColor\"/><polygon points=\"14,38 24,33 24,43\" fill=\"currentColor\"/><line x1=\"40\" y1=\"32\" x2=\"40\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"83.6\" y1=\"32\" x2=\"83.6\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"83.6\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"127.3\" y1=\"32\" x2=\"127.3\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"127.3\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"170.9\" y1=\"32\" x2=\"170.9\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"170.9\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"214.5\" y1=\"32\" x2=\"214.5\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"214.5\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"258.2\" y1=\"32\" x2=\"258.2\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"258.2\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"301.8\" y1=\"32\" x2=\"301.8\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301.8\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"345.5\" y1=\"32\" x2=\"345.5\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"345.5\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"389.1\" y1=\"32\" x2=\"389.1\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"389.1\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"432.7\" y1=\"32\" x2=\"432.7\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"432.7\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"476.4\" y1=\"32\" x2=\"476.4\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"476.4\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"32\" x2=\"520\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"68\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"83.6\" y1=\"38\" x2=\"476.4\" y2=\"38\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><circle cx=\"83.6\" cy=\"38\" r=\"7\" fill=\"var(--kart)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"476.4\" cy=\"38\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><text x=\"14\" y=\"112\" font-size=\"15\" font-weight=\"bold\" fill=\"currentColor\">B koşulu</text><line x1=\"14\" y1=\"130\" x2=\"546\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"546,130 536,125 536,135\" fill=\"currentColor\"/><polygon points=\"14,130 24,125 24,135\" fill=\"currentColor\"/><line x1=\"40\" y1=\"124\" x2=\"40\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"40\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−5</text><line x1=\"83.6\" y1=\"124\" x2=\"83.6\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"83.6\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−4</text><line x1=\"127.3\" y1=\"124\" x2=\"127.3\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"127.3\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−3</text><line x1=\"170.9\" y1=\"124\" x2=\"170.9\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"170.9\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−2</text><line x1=\"214.5\" y1=\"124\" x2=\"214.5\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"214.5\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">−1</text><line x1=\"258.2\" y1=\"124\" x2=\"258.2\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"258.2\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">0</text><line x1=\"301.8\" y1=\"124\" x2=\"301.8\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"301.8\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">1</text><line x1=\"345.5\" y1=\"124\" x2=\"345.5\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"345.5\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">2</text><line x1=\"389.1\" y1=\"124\" x2=\"389.1\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"389.1\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">3</text><line x1=\"432.7\" y1=\"124\" x2=\"432.7\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"432.7\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">4</text><line x1=\"476.4\" y1=\"124\" x2=\"476.4\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"476.4\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">5</text><line x1=\"520\" y1=\"124\" x2=\"520\" y2=\"136\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"520\" y=\"160\" text-anchor=\"middle\" font-size=\"15\" fill=\"currentColor\">6</text><line x1=\"389.1\" y1=\"130\" x2=\"536\" y2=\"130\" stroke=\"var(--vurgu)\" stroke-width=\"7\"/><polygon points=\"546,130 532,122 532,138\" fill=\"var(--vurgu)\"/><circle cx=\"389.1\" cy=\"130\" r=\"7\" fill=\"var(--vurgu)\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/></svg>",
  "secenekler": [
    "9",
    "6",
    "5",
    "3"
  ],
  "dogru": 1,
  "hatalar": [
    "Yalnızca A koşulunu okudun: B koşuluna uyan 3, 4, 5 sayıları çıkarılmalıdır.",
    null,
    "−3'ü saymadın: −4'teki yuvarlak boştur ama −3 aralığa dahildir ve B'ye uymaz.",
    "A ve B'ye birlikte uyanları saydın (3, 4, 5); soru B'ye uymayanları soruyor."
  ],
  "aciklama": "Adım 1: A koşulu: −4 < x ≤ 5 → tam sayılar −3, −2, −1, 0, 1, 2, 3, 4, 5 (9 tane).\nAdım 2: B koşulu: x ≥ 3 → bunlardan 3, 4, 5 uyar.\nAdım 3: B'ye uymayanlar: −3, −2, −1, 0, 1, 2.\nAdım 4: Say: 6 tane.\nSağlama: 9 − 3 = 6.\nCevap B."
},
{
  "id": "mat-es-375",
  "kazanim": "M.8.2.3.3",
  "kademe": 3,
  "zorluk": 4,
  "soru": "Bir çiftçi, dikdörtgen biçimli bir ekim alanının uzun kenarlarından birini bir duvara yaslayacak ve duvara yaslanan kenar dışındaki üç kenarı telle çevirecektir. Alanın kısa kenarı x m, uzun kenarı (x + 6) m'dir (x tam sayı). Kullanılacak telin uzunluğu 50 m'yi geçmemelidir.\n**Buna göre x en fazla kaç olabilir?**",
  "gorsel": null,
  "secenekler": [
    "16",
    "15",
    "14",
    "9"
  ],
  "dogru": 2,
  "hatalar": [
    "Uzun kenardaki 6 m'yi unuttun: 3x ≤ 50 → x ≤ 16,67 olur ve 16 bulursun.",
    "Yukarı yuvarladın: x ≤ 14,67 iken x = 15 için tel 3 · 15 + 6 = 51 m olur ve 50 m'yi aşar.",
    null,
    "Duvara yaslanan kenarı da telle çevirdin: dört kenarın toplamı 4x + 12 ≤ 50 → x ≤ 9,5 olur ve 9 bulursun."
  ],
  "aciklama": "Tel, duvara yaslanan kenar dışındaki üç kenarı çevreler: iki kısa kenar ve bir uzun kenar.\nAdım 1: Tel uzunluğu: x + x + (x + 6) = 3x + 6.\nAdım 2: Uzunluk 50 m'yi geçmeyeceğinden 3x + 6 ≤ 50, yani 3x ≤ 44.\nAdım 3: 3'e böl: x ≤ 14,67. Tam sayı ve üst sınır olduğundan aşağı yuvarla: x = 14.\nSağlama: x = 14 için 42 + 6 = 48 m uygun; x = 15 için 51 m uygun değil.\nCevap C."
}
);
