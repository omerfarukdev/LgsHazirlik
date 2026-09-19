# LGS Hazırlık — Yapay Zekâ Çalışma Talimatları

8. sınıf öğrencisi (Haziran 2027 LGS) için **ekranda çözülen ek test sistemi**. Öğrenci sistemi kendi başına, bilgisayardan kullanır; okulda konuyu işleyip kâğıt testlerini bitirdikten sonra gelir. Abi ilerlemeyi telefonundan canlı panelden (`panel.html`) izler. Bütün plan: [planlama/PLAN.md](planlama/PLAN.md). Soru eklemeden veya değişiklik yapmadan önce bu dosyanın tamamını uygula.

## Proje yapısı

- Kurulumsuz, sunucusuz tarayıcı uygulaması: `index.html` + `js/app.js` + `css/style.css`. Dosyaya çift tıklayınca da çalışır (fetch yok, her şey `<script>` ile yüklenir).
- `js/ayar.js`: sınav tarihi, geçme eşiği, rapor adresi gibi ayarlar.
- `js/konular.js`: ders → ünite → konu ağacı (`window.LGS_KONULAR`). Konu `id`'leri sabittir.
- `sorular/*.js`: sorular, `window.LGS_BANK["<konu-id>"]` dizisine push edilir. Konu başına bir ya da birkaç dosya (`…-1.js`, `…-2.js`).
- `sorular/manifest.js`: yüklenecek soru dosyalarının listesi. Burada olmayan dosya görünmez.
- `panel.html` + `js/panel.js`: abinin ilerleme paneli. Veriyi `rapor/Kod.gs` (abinin Google hesabındaki Apps Script + E-Tablo) üzerinden okur. Apps Script adresi depoya YAZILMAZ; uygulamadaki "Panel bağlantısı" ile tarayıcıya kaydedilir. `js/app.js` içindeki kayıt yapısını (`gecmis`, `konuDurum`, `bildirim`) değiştirirsen paneli de güncelle.
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

Dosya adı `sorular/<ders öneki>-<konu-id>-<sıra>.js`. Bir konu testinde sorular **dosyadaki sırayla** gösterilir; her kademeyi kolaydan zora sırala. Kademe başına 12 soru, konu başına ayrıca 12 havuz sorusu hedeflenir.

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

Kademe karması: **Kademe 1** → düzey 1 ve 2 (yarı yarıya). **Kademe 2** → düzey 2 ve 3. **Kademe 3** → düzey 3 ve 4 (en az 4 soru düzey 4). **Havuz** → 3 / 4 / 3 / 2 (düzey 1 / 2 / 3 / 4).

Ders ders ayrıntılı tarifler (Fen'de öncüllü soru oranı, Türkçe'de metin uzunlukları, sözcük bütçeleri, konu kotaları): `planlama/arastirma-lgs-zorluk-profili.md` bölüm 3 ve 7. Yeni bir derse soru yazmadan önce o bölümleri oku. Özet:
- **Matematik:** öncüllü (I-II-III) soru YOK. Soruların çoğu günlük hayat senaryolu ve görselli. Hesap makinesiz çözülebilir sayılar.
- **Fen:** soruların yaklaşık yarısı I-II-III öncüllü; deney düzeneği, tablo, grafik yorumu; "kesinlikle" kökü; sayısal hesap yok denecek kadar az.
- **Türkçe:** dil bilgisi numaralı cümleli metin içinde sorulur, terim ezberi sorulmaz. Metinler özgün yazılır, telifli metin kopyalanmaz.
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

## DOKUNMA kuralları

1. Yayımlanmış soru `id`'lerini ve `js/konular.js` içindeki konu `id`'lerini **değiştirme** (öğrencinin ilerlemesi bunlara bağlı).
2. Yayımlanmış soruyu silme; hatalıysa düzelt.
3. Çekirdek dosyalar (`index.html`, `js/app.js`, `css/style.css`) değişince `index.html` içindeki `?v=` sürüm damgalarını güncelle (tarayıcı önbelleği).
4. localStorage anahtarlarının yapısını değiştirirsen eski veriyi taşıyan bir göç adımı yaz; öğrencinin kaydı kaybolmamalı.
