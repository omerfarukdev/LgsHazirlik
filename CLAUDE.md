# LGS Hazırlık — Yapay Zekâ Çalışma Talimatları

8. sınıf öğrencisi (Haziran 2027 LGS) için **ekranda çözülen ek test sistemi**. Öğrenci sistemi kendi başına, bilgisayardan kullanır; okulda konuyu işleyip kâğıt testlerini bitirdikten sonra gelir. Abi ilerlemeyi telefonundan canlı panelden (`panel.html`) izler. Bütün plan: [planlama/PLAN.md](planlama/PLAN.md). Soru eklemeden veya değişiklik yapmadan önce bu dosyanın tamamını uygula.

## Proje yapısı

- Kurulumsuz, sunucusuz tarayıcı uygulaması: `index.html` + `js/app.js` + `css/style.css`. Dosyaya çift tıklayınca da çalışır (fetch yok, her şey `<script>` ile yüklenir).
- `js/ayar.js`: sınav tarihi, geçme eşiği, rapor adresi gibi ayarlar.
- `js/konular.js`: ders → ünite → konu ağacı (`window.LGS_KONULAR`). Konu `id`'leri sabittir.
- `sorular/*.js`: sorular, `window.LGS_BANK["<konu-id>"]` dizisine push edilir. Konu başına bir ya da birkaç dosya (`…-1.js`, `…-2.js`).
- `sorular/manifest.js`: yüklenecek soru dosyalarının listesi. Burada olmayan dosya görünmez.
- `hap/<konu-id>.js`: konu özetleri (hap bilgi), `window.LGS_HAP["<konu-id>"]`. `hap/liste.js` yüklenecek özetlerin listesidir. Öğrenci bir konunun testine ilk kez girerken özet test ekranından önce kendiliğinden açılır (aşağıda "Konu özeti").
- `panel.html` + `js/panel.js`: abinin ilerleme paneli. Veriyi `rapor/Kod.gs` (abinin Google hesabındaki Apps Script + E-Tablo) üzerinden okur. Apps Script adresi depoya YAZILMAZ; uygulamadaki "Panel bağlantısı" ile tarayıcıya kaydedilir. `js/app.js` içindeki kayıt yapısını (`gecmis`, `konuDurum`, `bildirim`, `aktif`, `hap`) değiştirirsen paneli de güncelle.
- Yarım kalan test (`lgs_aktif`) de bulut yedeğine girer ve panelde "Yarım kalan test" olarak görünür. Öğrenci "Testi bitir"e basmadan çıkabilir; çözdükleri kaybolmamalı, panelden görünmelidir.
- `dogrula.js`: `node dogrula.js` şema, id çakışması, kopya ve şık dengesi kontrolü yapar.
- Öğrencinin verisi tarayıcıda (localStorage, `lgs_` öneki) durur; depoda kişisel veri YOKTUR.
- `planlama/`: plan, araştırma raporları ve resmi kaynaklar (`kaynaklar/` altında MEB öğretim programları, 2026 kılavuzu ve 2026 soru kitapçıkları). `kaynaklar/` yalnızca yereldir, depoya girmez (.gitignore); klasör yoksa belgeler `arastirma-mufredat.md` içindeki MEB adreslerinden yeniden indirilir.

## Müfredat kuralları (kritik)

- Öğrenci **eski programa** tabidir: Matematik, Fen, İnkılap, Din, İngilizce **2018**; Türkçe **2019**. "Türkiye Yüzyılı Maarif Modeli 8. sınıf" içerikleri bu öğrenci için **kullanılmaz**.
- Her soru bir resmi kazanım koduna bağlanır (`M.8.1.1.2`, `F.8.4.4.4`, `T.8.3.9`, `İTA.8.2.5`…). Kazanım metinlerini `planlama/kaynaklar/*2018.txt` ve `tr2019.txt` dosyalarından oku; ezberden yazma.
- **Program sınırlamaları soru filtresidir.** Kazanımın altındaki açıklama "girilmez" diyorsa o tür soru yazılmaz. Örnekler: EBOB-EKOK'ta alan ve hacim gerektiren problem yok; basınç ve basit makinelerde matematiksel bağıntı yok; ısıda Q=mcΔt yok; olasılıkta bağımlı olay yok; dönüşüm geometrisinde dönme yok; piramit ve konide alan-hacim yok; gruplandırarak çarpanlara ayırma yok. Tam liste: `planlama/arastirma-mufredat.md` bölüm 3.
- Bir konunun sorusu, okulda **daha sonra** işlenecek bir konunun bilgisini gerektirmemelidir (ör. Çarpanlar ve Katlar sorusunda karekök ya da denklem kurma şart olmamalı). 5-7. sınıf bilgisi serbesttir.

## Soru formatı

```js
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["carpanlar-katlar"] = window.LGS_BANK["carpanlar-katlar"] || []).push(
{
  id: "mat-ck-101",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**72 sayısının asal çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2^{2} · 3^{3}", "2^{3} · 3^{2}", "2^{3} · 9", "8 · 9"],
  dogru: 1,
  hatalar: ["Üsler yer değiştirdi: 2^{2} · 3^{3} = 108 eder.", null, "9 asal değildir; ayırma yarım bırakıldı.", "8 ve 9 asal değildir; bu yalnızca bir çarpım."],
  aciklama: `Adım 1: …`
}
);
```

| Alan | Kural |
|---|---|
| `id` | `<ders öneki>-<konu kısaltması>-<kademe><2 haneli sıra>`. Ör. `mat-ck-101`, `mat-ck-212`, havuz soruları `mat-ck-001`. **Yayımlanmış id asla değişmez** (öğrencinin kayıtları id'ye bağlıdır). |
| `kazanim` | Resmi kazanım kodu |
| `kademe` | `1` Kavrama testi, `2` Pekiştirme testi, `3` LGS Ayarı testi, `0` havuz (günlük tekrar, ünite denemesi ve aylık değerlendirme buradan beslenir; konu testlerinde çıkmaz) |
| `zorluk` | 1-4 (aşağıdaki ölçek) |
| `soru` | Senaryo + kök. Kök `**kalın**`, olumsuz ifade `__altı çizili__` |
| `gorsel` | `null` ya da ham HTML: satır içi `<svg>` veya `<table class="tablo">` |
| `secenekler` | Tam **4** şık. Sayısal şıklar küçükten büyüğe ya da büyükten küçüğe sıralı. "Hepsi" ve "hiçbiri" şıkkı yok. Şıklar benzer uzunlukta ve paralel yapıda |
| `dogru` | 0-3 arası SAYI (0=A … 3=D) |
| `hatalar` | 4 elemanlı dizi. Doğru şık için `null`; her yanlış şık için **o şıkka götüren hatanın adı ve kısa açıklaması**. Öğrenci o şıkkı seçince "büyük olasılıkla şu hatayı yaptın" diye gösterilir |
| `aciklama` | Adım adım öğretici çözüm (aşağıda) |

Dosya adı `sorular/<ders öneki>-<konu-id>-<sıra>.js`. Bir konu testinde sorular **dosyadaki sırayla** gösterilir; her kademeyi kolaydan zora sırala.

### Test boyutu

| Bölüm | Soru sayısı |
|---|---|
| Kademe 1 (Kavrama) | **25** |
| Kademe 2 (Pekiştirme) | **25** |
| Kademe 3 (LGS Ayarı) | **25** |
| Havuz (kademe 0) | **15** |
| **Konu başına toplam** | **90** |

25 alt sınırdır; 30'a kadar çıkılabilir. **12 soruluk bir test, test değildir** — öğrenci tempo kuramaz, şans faktörü büyür, sonuç yüzdesi güvenilmez olur. Bir konuyu bitiren öğrenci üç kademede toplam 75 soru çözmüş olur.

Süre kendiliğinden hesaplanır (zorluğa göre soru başı saniyelerin toplamı), yani 25 soruluk Kavrama testi yaklaşık 25 dakika, LGS Ayarı testi yaklaşık 50 dakika sürer.

Var olan bir konuyu bu boyuta tamamlarken **yeni kimlikler kaldığı yerden devam eder** (ör. `mat-ck-113` … `mat-ck-125`); yayımlanmış kimlikler değişmez.

### Metin biçimlendirme (soru, şık, hata, açıklama alanlarında)

| Yazım | Görünüm |
|---|---|
| `**metin**` | kalın |
| `__metin__` | altı çizili |
| `2^{5}`, `10^{-3}` | üst simge |
| `H_{2}O` | alt simge |
| `√{48}`, `3√{2}` | karekök (üstü çizgili) |
| `[[3\|4]]` (yani `[[pay\|payda]]`, arada dikey çizgi) | kesir |
| satır sonu | yeni satır (uzun metinlerde backtick `` ` `` ile çok satırlı string kullan) |
| `- - - -` | boşluk doldurma sorularında boşluk (gerçek LGS kitapçığındaki gösterim). **`___` kullanma** — `__` altı çizili demektir, çakışır |

Çarpma işareti `·` ya da `×`, eksi işareti `−`, ondalık ayırıcı virgül.

### Görsel kuralları

- SVG: `viewBox` zorunlu, `width`/`height` yazma (CSS ölçekler), en fazla 560 birim genişlik düşün. Çizgi ve yazılarda `currentColor` kullan ki açık-koyu temada okunabilsin; vurgu için `var(--vurgu)`, `var(--vurgu2)`, dolgu için `var(--dolgu)`. Yazı boyutu en az 14. Dış kaynak, `<script>`, `<image href>` yok.
- Görsel süs olmasın, **veri taşısın** (gerçek sınavdaki gibi uzunluk, fiyat, süre şeklin üstünde yazsın).
- Tablo: `<table class="tablo"><tr><th>…</th></tr>…</table>`.

## Zorluk ölçeği (gerçek LGS'ye göre ayarlı)

| Düzey | Anlamı | Yapı |
|---|---|---|
| 1 | Temel kazanım (sınavın en kolay %10-15'i) | 1 adım, 1 kazanım, bağlamsız ya da tek cümle, 10-30 sözcük |
| 2 | Orta | 2 adım, 30-60 sözcük kısa bağlam, veri doğrudan verilir |
| 3 | LGS ortalaması | 3-4 adım, 60-110 sözcük günlük hayat senaryosu, veri kısmen görselde, şıklar birbirine yakın |
| 4 | LGS ayırt edici (en zor %15-20) | 4-6 adım, iki kazanım birleşir, "en az / en fazla / olamaz / kaç farklı değer" kökü, sınır durumu kritik, 100-170 sözcük |

Kademe karması (25 soruluk test için):

| Kademe | Düzey 1 | Düzey 2 | Düzey 3 | Düzey 4 |
|---|---|---|---|---|
| 1 · Kavrama | 12 | 13 | – | – |
| 2 · Pekiştirme | – | 13 | 12 | – |
| 3 · LGS Ayarı | – | – | 15 | 10 |
| 0 · Havuz (15) | 3 | 5 | 4 | 3 |

Ders ders ayrıntılı tarifler (Fen'de öncüllü soru oranı, Türkçe'de metin uzunlukları, sözcük bütçeleri, konu kotaları): `planlama/arastirma-lgs-zorluk-profili.md` bölüm 3 ve 7. Yeni bir derse soru yazmadan önce o bölümleri oku. Özet:
- **Matematik:** öncüllü (I-II-III) soru YOK. Soruların çoğu günlük hayat senaryolu ve görselli. Hesap makinesiz çözülebilir sayılar.
- **Fen:** soruların yaklaşık yarısı I-II-III öncüllü; deney düzeneği, tablo, grafik yorumu; "kesinlikle" kökü; sayısal hesap yok denecek kadar az.
- **Türkçe:** dil bilgisi numaralı cümleli metin içinde sorulur, terim ezberi sorulmaz. Metinler özgün yazılır, telifli metin kopyalanmaz.

### Paragraf havuzu (özel kural)

`paragrafta-anlam` konusu diğerleri gibi "bitirilen" bir konu değildir; **günlük rutindir**. Ana sayfadaki "Günün paragrafı" kartı her gün bu konunun `kademe: 0` sorularından 5 tanesini çeker. Bu yüzden:

- Paragraf havuzu **sürekli büyütülür**; hedef 48 soru değil, birkaç yüzdür. Havuz tükenirse uygulama en eski görülenleri geri döndürür — bu kabul edilebilir ama istenmeyen durumdur.
- Yeni paragraf partileri `sorular/tur-paragrafta-anlam-<N>.js` dosyalarına yazılır; id aralığı `tur-pa-1001`'den başlayıp partiler arasında çakışmayacak şekilde ilerler (dörder haneli).
- **Her sorunun kendi metni olur.** Bir metne birden fazla soru bağlanmaz; amaç okuma hacmini artırmaktır.
- Metinler **tamamen özgün** yazılır. Alıntı, ders kitabı metni, tanınmış bir eserin yeniden yazımı kabul edilmez. Gerçek bir kişi metnin öznesi yapılmaz. Metindeki her olgusal bilgi doğru olmalıdır.
- Metin uzunluğu zorluğa bağlıdır: düzey 1 → 40-60 sözcük, 2 → 60-100, 3 → 100-160, 4 → 150-200 (ya da iki metin/metin+tablo).
- Çeldiriciler dört tipten gelir ve `hatalar` içinde adlandırılır: *metinde var ama ilgisiz*, *aşırı genelleme*, *kısmen doğru*, *ters yön*. Dört şık aynı uzunluk ve biçimde olur.

**Retorik çeşitlilik (doğrulamanın yakaladığı sistematik kusur).** Bir partideki metinler aynı kalıpta yazılırsa öğrenci metni okumadan doğruyu bulmaya başlar. Örneğin bir partide 20 metnin neredeyse hepsi "görünen kısım asıl iş değildir, asıl iş görünmeyen hazırlıktır" tezini işlemişti; bu durumda "gizli emek" diyen şık her seferinde doğru çıkıyordu. Bir partide şunları karıştır:

| Değişken | Seçenekler |
|---|---|
| Anlatıcı | birinci tekil · üçüncü tekil · anlatıcısız bilgilendirici |
| Yapı | tez-örnek · sorun-çözüm · tek olaya dayalı anlatı · karşılaştırma · süreç anlatımı |
| Tez yönü | "görünen kısım aldatıcıdır" kadar "görünen kısım gerçekten asıl kısımdır" da olsun |
| Kapanış | özdeyiş benzeri cümle her metinde olmasın |

Aynı soru tipi (örneğin "akışı bozan cümle") bir partide 3'ten fazla kullanılacaksa, bozucu cümlenin türü de değişsin: bazen konu dışı bilgi, bazen konuya yakın ama mantık zincirinin dışında, bazen doğru bir genellemenin yanlış yere konmuş hâli.

**Kazanım etiketi doğru olsun.** `T.8.3.19` başlık belirleme kazanımıdır; paragraf tamamlama ve akışı bozan cümle soruları için kullanılmaz. Tablo/grafik yorumlama soruları `T.8.3.32` alır. Yanlış etiket, kazanım bazlı raporlamayı ve ajanın "zayıf kazanım" tespitini bozar.
- **İnkılap, Din:** kısa kaynak metin + çıkarım; ezber tarih sorusu nadir.

## Kalite standartları

- **Tek savunulabilir doğru cevap.** Her soruyu yazdıktan sonra baştan çöz; cevabın şıklarda tam bir kez geçtiğini ve `dogru` indeksinin onu gösterdiğini doğrula.
- **Çeldiriciler gerçek hatalardan üretilir**: son adımı atlama, ara sonucu cevap sanma, EBOB ile EKOK'u karıştırma, birimi çevirmeme, sınırı dahil etme, ısı ile sıcaklığı karıştırma… Rastgele sayı çeldirici olmaz. Her yanlış şıkkın `hatalar` girdisi o hatayı adlandırır.
- **"Hediye" soru yasak:** doğru şık diğerlerinden biçimce ayrışmamalı (en uzun şık, tek farklı kategori, tek "makul" sayı). Kolay soru, çeldiriciyi zayıflatarak değil bilgiyi tanıdık tutarak kolaylaştırılır.
- Doğru cevabın konumu dengeli dağıtılır (bir dosyada her şık yaklaşık %25; art arda 3'ten fazla aynı harf olmaz).
- Bağlamlar **özgün, gerçekçi ve 13-14 yaşa uygun**; ders kitabı ve yayın kalıplarını tekrar etme; aynı dosyada aynı kurguyu (ör. "zil çalan iki saat") iki kez kullanma. Yalnızca sayıları değiştirilmiş soru kopyadır.
- **Açıklama** öğreticidir: "Adım 1…, Adım 2…" biçiminde ilerler; soru bir kavramı yokluyorsa kavramın bir cümlelik tanımını içerir; sonunda "Sağlama:" ya da "Sık yapılan hata:" notu bulunur; son cümle "Cevap X." olur. Öğrenci konuyu hiç bilmese bile açıklamadan öğrenebilmeli. Dil sade, 8. sınıf öğrencisine hitap eder, "sen" diye konuşur.
- Türkçe yazım ve noktalama kusursuz olmalı (öğrenci Türkçe sınavına da hazırlanıyor).

## Soru ekleme prosedürü (sırayla)

1. İlgili kazanımları ve sınırlamaları `planlama/kaynaklar/` altındaki program metninden oku.
2. Aynı konunun mevcut dosyası varsa oku; kurgu ve kavram tekrarı yapma.
3. Soruları yaz (format ve kalite kurallarına birebir uy).
4. **Bağımsız doğrulama (zorunlu):** soruları yazan ajandan ayrı bir ajan, `dogru` ve `aciklama` alanlarını görmeden her soruyu sıfırdan çözer ve şunları bildirir: bulduğu cevap, birden fazla savunulabilir şık var mı, müfredat dışı bilgi gerekiyor mu, görsel ile metin tutarlı mı. Tutmayan soru düzeltilir ya da atılır; düzeltilen soru yeniden doğrulanır.
5. Dosya adını `sorular/manifest.js` listesine ekle.
6. `node dogrula.js` çalıştır; hata ve uyarı sıfır olana kadar düzelt.

**Soru yazan ajan `sorular/manifest.js` dosyasına DOKUNMAZ.** Manifesti üretimi başlatan taraf, bütün dosyalar geldikten ve doğrulandıktan sonra tek seferde günceller. (21 Eylül 2026'daki partide yazar ajanlar bu kuralı çiğneyip kendileri ekleme yaptı; zararsızdı ama doğrulanmamış dosyanın yayına girmesine yol açabilirdi.)

## Konu özeti (hap bilgi)

Öğrenci konuyu okulda işler, kâğıt testlerini çözer, sonra bu sisteme gelir. Testten önce **konu özetini** okur: konunun tamamını 5-10 dakikada hatırlatan hap bilgiler. Özet konunun testine ilk kez girerken kendiliğinden açılır. Son okumanın üstünden 14 gün geçtiyse yeniden açılır. Kademeyi geçemeyen öğrenciye "Özeti oku, sonra tekrar çöz" önerilir. Okuma süresi panelde görünür.

**Her konu özetle birlikte yayımlanır.** Bir konuya soru üretirken özeti de yaz. Özeti olmayan konu eksiktir (`node dogrula.js` listeler).

```js
window.LGS_HAP = window.LGS_HAP || {};
window.LGS_HAP["fiilimsiler"] = {
  kazanimlar: ["T.8.3.9"],
  giris: "1-3 cümle: bu konu ne, sınavda ne istenir, özeti okuyunca ne yapabileceksin.",
  bolumler: [
    {
      baslik: "Fiilimsi nedir?",
      maddeler: ["Hap bilgi — tek fikir, 1-2 cümle.", "…"],
      tablo: "<table class=\"tablo\">…</table>",   // isteğe bağlı; karşılaştırma için
      ornekler: ["…"],                             // isteğe bağlı
      dikkat: ["Sık yapılan hata ve nasıl kaçınılacağı."]  // isteğe bağlı
    }
  ],
  lgs: ["Sınavda bu konu nasıl sorulur: soru tipi, tipik çeldirici."],
  yokla: [{ soru: "Kısa hatırlama sorusu", cevap: "Cevap ve bir cümlelik gerekçe" }]
};
```

Örnek ve ölçü: [hap/fiilimsiler.js](hap/fiilimsiler.js).

| Kural | Açıklama |
|---|---|
| Kapsam | Testte sorulan **her** kavram özette olmalı. Özeti okuyan öğrenci konunun 90 sorusundan hiçbirinde "bunu hiç duymadım" dememeli. Yazmadan önce konunun endeksini (`sorular/endeks/<konu-id>.txt`) ve soru dosyalarının `hatalar` alanlarını oku. |
| Sınır | Yalnızca öğrencinin programındaki kazanımlar (2018, Türkçe 2019). Program "girilmez" diyorsa özete de girmez. Okulda daha sonra işlenecek konunun bilgisi yok. |
| Doğruluk | Her kural, tanım, formül ve olgu doğru olmalı. Emin olmadığın istisnayı yazma. Soru bankasıyla çelişme (ör. bankada adlaşmış sıfat-fiil "sıfat-fiil" sayılıyorsa özet de öyle der). |
| "Dikkat" kutuları | Bankadaki `hatalar` alanlarında en sık geçen hatalardan gelir. Her biri hatayı adlandırır ve bir karşılaştırmalı örnekle nasıl ayırt edileceğini gösterir. |
| Ezber değil işlev | Program "ezberletilmez" diyorsa (ör. fiilimsi ekleri) listeyi "tanıma ipucu" olarak ver, asıl ölçütü (görev, anlam, neden) öne çıkar. |
| Örnekler | Özgün ve kısa. Soru bankasındaki cümleleri, bağlamları ve sayıları kullanma; özet testin cevap anahtarı olmamalı. |
| Uzunluk | 600-1400 sözcük (5-10 dakika okuma), 4-7 bölüm, 3-6 "Kendini yokla" sorusu, 2-4 "Sınavda karşına böyle çıkar" maddesi. Matematikte formül ve bir çözümlü mini örnek, Fen'de kavram çiftleri tablosu, İnkılap'ta olay → neden → sonuç zinciri işe yarar. |
| Dil | Öğrenciye "sen" diye hitap et. Sade, kısa cümleler. Yazım ve noktalama kusursuz. |
| Biçim | Metin alanlarında soru biçimlendirmesi geçerlidir (`**kalın**`, `2^{3}`, `√{2}`, `[[3\|4]]`). HTML yalnızca `tablo` alanında olur. |

**Prosedür:** özeti yazan ajandan ayrı bir ajan özeti soru bankasıyla birlikte okur ve şunları bildirir: yanlış ya da eksik bilgi, müfredat dışı içerik, bankada sorulup özette olmayan kavram, bankadaki soruyla birebir örtüşen örnek, yazım hatası. Düzeltilen özet `node dogrula.js`'ten geçer. **Özeti yazan ajan `hap/liste.js` dosyasına DOKUNMAZ**; listeyi üretimi başlatan taraf günceller.

## DOKUNMA kuralları

1. Yayımlanmış soru `id`'lerini ve `js/konular.js` içindeki konu `id`'lerini **değiştirme** (öğrencinin ilerlemesi bunlara bağlı).
2. Yayımlanmış soruyu silme; hatalıysa düzelt.
3. Çekirdek dosyalar (`index.html`, `js/app.js`, `css/style.css`) değişince `index.html` içindeki `?v=` sürüm damgalarını güncelle (tarayıcı önbelleği).
4. localStorage anahtarlarının yapısını değiştirirsen eski veriyi taşıyan bir göç adımı yaz; öğrencinin kaydı kaybolmamalı.
