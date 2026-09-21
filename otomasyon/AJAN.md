# Otomatik soru üretim ajanları

Bu dosya, düzenli aralıklarla kendiliğinden çalışan üretim ajanlarının görev tanımıdır. Amaç: abinin her seferinde "şu konunun sorularını yaz" demesine gerek kalmaması.

## İş bölümü

| Katman | Ne yapar | Ne zaman |
|---|---|---|
| **Uygulama** (`js/app.js`) | Yanlış yapılan soruyu ve benzerlerini kendiliğinden geri getirir, günlük tekrarı ve paragraf rutinini hazırlar | Anında, her test bitiminde |
| **Paragraf ajanı** | Paragraf havuzuna sürekli yeni soru ekler | **Her çalışmada, istisnasız** |
| **Ders ajanları** (6 adet) | Kendi dersinde takvimin 2 konu ilerisini hazır tutar | Her çalışmada, sırayla |

Uygulama var olan soruları yeniden düzenler; ajanlar havuzu büyütür. Havuz büyümezse tekrar ve rutin aynı soruları döndürmeye başlar.

---

## Kural 1: Paragraf hiç durmaz

Paragraf, LGS'nin en yüksek getirili konusu (Türkçe'nin 20 sorusunun 6-8'i) ve bütün derslerin okuma hızını belirleyen beceri. Öğrencinin günlük hedefi **50 soru**, yani havuz hızlı tükeniyor.

**Her ajan çalışmasında paragraf üretimi yapılır.** Başka hiçbir iş bunun önüne geçmez. Diğer dersler bir hafta bekleyebilir, paragraf bekleyemez.

- Parti başına **10 ajan × 20 soru = 200 soru** hedeflenir.
- Her ajana farklı bir **metin alanı** verilir ki metinler çeşitlensin: doğa, bilim, sanat, spor, teknoloji, tarih, şehir, deneme, çevre, yolculuk. Bu liste zamanla genişletilmeli (mağara ekosistemleri, gelgit havuzları, tohum bankaları, meslekler, müzik, mutfak kültürü, denizcilik, meteoroloji, hukuk ve haklar, istatistik okuryazarlığı…).
- Dosya: `sorular/tur-paragrafta-anlam-<N>.js`, N kaldığı yerden devam eder.
- Kimlik aralığı: dört haneli, çakışmayacak şekilde ilerler (`tur-pa-1001`, `tur-pa-2001`, `tur-pa-3001` …).
- Hepsi `kademe: 0`. Paragraf `rutin` bir konudur, kademeli testi yoktur.

Kalite kuralları `CLAUDE.md` içindeki "Paragraf havuzu" bölümünde.

---

## Kural 2: Takvimin daima 2 konu ilerisinde ol

Okul o hafta hangi konuyu işliyorsa, **ondan sonraki iki konunun soruları hazır beklemeli.** Öğrenci okulda konuyu bitirdiği gün teste girebilsin, üretim beklemesin.

### Nasıl yapılır

1. `js/takvim.js` dosyasını oku. Hafta hafta hangi derste hangi konunun işlendiği orada yazılı.
2. Bugünün tarihine göre **bu haftayı** bul.
3. Her ders için, bu haftadan itibaren takvimde geçen konuları sırayla listele.
4. Sıradaki **iki** konunun soruları tamam mı diye bak. "Tamam" demek: kademe 1, 2 ve 3'te 12'şer soru **ve** havuzda 12 soru.
5. Eksik olan ilk konudan başla, tamamla.

```
node -e "global.window={};require('./js/konular.js');require('./js/takvim.js');
var fs=require('fs');var m=JSON.parse(fs.readFileSync('sorular/manifest.js','utf8').replace(/^[\s\S]*?\[/,'[').replace(/\];[\s\S]*$/,']'));
m.forEach(function(f){try{require('./sorular/'+f)}catch(e){}});
var bugun=new Date();var h=window.LGS_TAKVIM.filter(function(x){return new Date(x.bit+'T23:59')>=bugun})[0];
console.log('Bu hafta: '+(h?h.no:'?'));
Object.keys(h.konu||{}).forEach(function(ders){
  var sira=[],gor={};
  window.LGS_TAKVIM.forEach(function(x){var k=x.konu&&x.konu[ders];if(k&&!gor[k]&&x.no>=h.no){gor[k]=1;sira.push(k)}});
  sira.slice(0,3).forEach(function(k,i){
    var a=(window.LGS_BANK&&window.LGS_BANK[k])||[];
    var s={0:0,1:0,2:0,3:0};a.forEach(function(q){s[q.kademe]++});
    console.log('  '+ders+' +'+i+': '+k+'  ['+s[1]+'/'+s[2]+'/'+s[3]+' havuz '+s[0]+']'+(a.length<48?'  <-- EKSIK':''));
  });
});"
```

### ⛔ DURDURULMUŞ DERSLER

**Din Kültürü ve İngilizce için soru ÜRETİLMEZ.** Abi 19 Eylül 2026'da açıkça durdurdu: "din ve ingilizce soru yazımını durdur, ben sana ek olarak başla diyene kadar onlara soru ürettirme."

- Bu iki dersin var olan soruları **silinmez, dokunulmaz**; öğrenci çözmeye devam eder.
- Takvim kontrolünde (Kural 2) bu iki ders atlanır; eksik görünseler bile üretime alınmaz.
- Abi açıkça "başla" diyene kadar bu geçerlidir. Kendi kendine yeniden başlatma.

Kalan dört ders: **Türkçe, Matematik, Fen, İnkılap Tarihi.**

### Öncelik ve derinlik: müfredat değil, SINAV belirler

Bu bir sınav hazırlığı. Okul takvimi **ne zaman** üretileceğini söyler; **ne kadar derin** üretileceğini ise LGS'deki soru ağırlığı söyler.

`js/konular.js` içinde her konunun `lgs` alanı vardır: o konudan LGS'de yıllara göre gelen soru sayısı (kaynak: `planlama/arastirma-lgs-zorluk-profili.md` bölüm 2, 2018-2026 çıkmış soru dağılımı).

**Her konu testi 25 soru.** 12 soruluk test, test değildir: öğrenci tempo kuramaz ve sonuç yüzdesi güvenilmez olur. Taban boyut her konu için aynıdır; `lgs` ağırlığı **havuzun** ve fazladan test kademesinin boyutunu belirler.

| `lgs` değeri | Hedef | Örnek |
|---|---|---|
| 3 ve üstü | 3 × 25 + havuz **30** = **105** | Kareköklü İfadeler, Doğrusal Denklemler, Görsel Okuma, Sözel Mantık |
| 2 | 3 × 25 + havuz **20** = **95** | Üslü İfadeler, Eşitsizlikler, Basit Makineler |
| 1 | 3 × 25 + havuz **15** = **90** | Çarpanlar ve Katlar, Dönüşüm Geometrisi |
| 0-1 | 3 × 25 + havuz **10** = **85** | Fiilimsiler, Söz Sanatları, İnkılap 5-6-7 |
| 6-11 (paragraf) | Sınırsız; Kural 1 geçerli | Paragrafta Anlam |

Eksik konu birden fazlaysa sıra şu: **önce katsayısı 4 olan dersler** (Türkçe, Matematik, Fen), sonra katsayısı 1 olanlar (İnkılap, Din, İngilizce). Eşitlikte `lgs` değeri yüksek olan öne geçer.

**Fiilimsiler okulda üç hafta işlenir ama LGS'de bazı yıllar hiç çıkmaz; Madde ve Endüstri 5 soru getirir.** Emeği buna göre dağıt. Az soru gelen konuyu da yaz — okul sınavları için gerekli — ama derinleşme orada değil, ağırlığı yüksek konularda olsun.

### Sınavın kendi soru tipi

Üretirken müfredat kazanımını değil, **LGS'nin o dersteki soru biçimini** taklit et (`planlama/arastirma-lgs-zorluk-profili.md` bölüm 3):
- Matematik'te öncüllü soru yok, senaryolu ve görselli soru çok.
- Fen'de soruların yarısı I-II-III öncüllü, deney düzeneği yorumu ağırlıkta, sayısal hesap yok denecek kadar az.
- Türkçe'de dil bilgisi terim ezberiyle değil, numaralı cümleli metin içinde sorulur.
- İnkılap ve Din'de kısa kaynak metin + çıkarım; ezber tarih sorusu nadir.

### Takvim kayabilir

Yıllık plan ikincil kaynaktır; okuldan okula 1-3 hafta sapar. Öğrenci bir konunun testini çözdüyse o konu okulda işlenmiş demektir. `lgs_konuDurum` içindeki `islendi` damgası takvimden **daha güvenilirdir**; ikisi çelişirse öğrencinin gerçek ilerlemesini esas al.

---

## Kural 3: Öğrencinin zayıf noktalarına dön

Panel bağlantısı kuruluysa (`rapor/KURULUM.md`), Apps Script adresinden ilerlemeyi çek:

```
curl -s "<APPS_SCRIPT_URL>?islem=yedek"
```

Dönen JSON'daki `veri` alanı öğrencinin localStorage kopyasıdır:
- `lgs_gecmis`: çözülen testler (`sorular`, `cevap`, `sureSoru`, `neden`, `oran`, `kademe`)
- `lgs_yanlis`: yanlış defteri (soru id → `{ts, konu, seri, tekrar}`)
- `lgs_konuDurum`: konu → kademe → `{enIyi, son, deneme}`, ayrıca `islendi` damgası
- `lgs_gorulen`: öğrencinin gördüğü soru id'leri

**Veriyi proje klasörüne YAZMA.** Yalnızca bellekte işle. `git add -A` ile herkese açık depoya öğrencinin kişisel verisini göndermek kabul edilemez. Apps Script adresini de hiçbir dosyaya, commit mesajına ya da rapora yazma.

Veriden çıkaracakların:
- **Zayıf kazanımlar:** aynı kazanımda 2+ yanlış, ya da kademe başarısı < %70.
- **Tekrarlayan hata yolları:** `hatalar` metinlerinde öne çıkan örüntü (EBOB↔EKOK karıştırma, son adımı atlama, sınırı dahil etme, ısı↔sıcaklık, metinde var ama ilgisiz…).
- **Tükenen havuzlar:** `lgs_gorulen` o konudaki soruların %70'inden fazlasını kapsıyorsa.
- **Süre sorunu:** `sureSoru` değerleri `ayar.js`'teki `sureSoruBasi` değerinin iki katını aşan sorular.

Zayıf bir kazanım bulduysan, o kazanımdan **öğrencinin düştüğü hata yolunu çeldirici olarak kuran** sorular yaz. Önce kolay (düzey 1-2) bir basamak koy, sonra düzeyi yükselt.

Adres yoksa ya da çekilemezse bu adımı atla ve raporda belirt; Kural 1 ve 2 yine de uygulanır.

---

## Her çalışmanın akışı

1. **Paragraf partisi** (Kural 1) — her zaman.
2. **Takvim kontrolü** (Kural 2) — eksik varsa en öncelikli dersten başla.
3. **Zayıf nokta üretimi** (Kural 3) — veri varsa.

Bir çalışmada toplam **200-300 sorudan fazlasını üretme**; kalite düşer.

---

## Kural 0: Yazmadan önce ne yazıldığını oku

**Bu, bankanın uzun vadede çürümesini önleyen tek mekanizmadır.** Proje Haziran 2027'ye kadar sürecek ve binlerce soru üretilecek; yazan ajanın hafızası yok, her parti sıfırdan başlıyor. Önlem alınmazsa aynı numara farklı bağlamla defalarca sorulur ve banka şişer ama zenginleşmez.

Soru yazmadan önce **o konunun endeksini oku**: `sorular/endeks/<konu-id>.txt`. Her satır bir soruyu özetler:

```
tur-pa-9002 | T.8.3.17 | z2 | k0 | Eski ustalar, bir işi öğrenmenin yolunun… | ✓Gözlemle öğrenilen bilgi kalıcı olur.
```

Endeks `node dogrula.js` her çalıştığında kendiliğinden tazelenir. Tam dosyaları okumaktan çok ucuzdur.

Endekse bakarken şunları ara ve **tekrar etme**:
- Aynı kurgu (aynı nesne, aynı senaryo, aynı sayı örüntüsü). Yalnızca sayıları değiştirilmiş soru kopyadır.
- Aynı doğru cevap yargısı. Paragrafta özellikle: "✓" sütununda aynı tez tekrar tekrar geçiyorsa yeni metinler başka tezler işlesin.
- Aynı kazanım + aynı zorluk + aynı soru kökü üçlüsü. Bu üçlü bir konuda 4'ten fazla varsa çeşitlendir.

## Doğrulama (atlanamaz)

Hiçbir soru bu adımlar geçilmeden yayımlanmaz.

1. **Kör doğrulama (soru bazında):** `node otomasyon/kor.js <dosya> <çıktı.json>` ile cevapsız kopya üret. Ayrı bir ajan (`general-purpose`) bu JSON'u çözsün ve `sorular/` klasörünü **açmasın**.

   ⚠️ **Kör kopyayı yazan ajana bırakma.** 21 Eylül 2026'daki partide 13 dosyanın 8'inde yazar ajan bu komutu çalıştırmadı; doğrulayıcı dosyayı bulamayınca sessizce "0 soru çözüldü" döndürdü ve sorular doğrulanmadan yayına girdi. Kör kopyalar **doğrulama ajanı başlatılmadan önce, dışarıdan** üretilmeli. Ayrıca doğrulayıcının döndürdüğü `cozulen` sayısı dosyadaki soru sayısıyla tutmuyorsa **doğrulama başarısız sayılır**, sonuç kabul edilmez. Aranacak kusurlar: birden fazla savunulabilir doğru, doğru şıkkın olmaması, belirsiz ifade, zayıf çeldirici (okumadan elenebilen şık), görsel-metin çelişkisi, müfredat dışı bilgi, olgu hatası, dil hatası, zorluk uyumsuzluğu.

2. **Set eleştirmeni (parti bazında) — ATLANMAZ.** Tek tek kusursuz sorulardan kusurlu bir set çıkabilir. Bunu yakalamak şansa bırakılmaz; her parti için ayrı bir ajan **yalnızca set geneline** bakar ve tek tek soruları çözmez. Girdisi: partinin bütün kör kopyaları + o konunun endeksi. Arayacakları:
   - **Retorik tekdüzelik:** metinler aynı kalıpta mı? Doğru şık hep aynı tür yargı mı? (Örnek: bir partide 20 metnin hepsi "görünen kısım asıl iş değildir" tezini işlemişti; öğrenci metni okumadan o şıkkı işaretlemeye başlar.)
   - **Anahtar örüntüsü:** doğru cevabın konumu, uzunluğu ya da biçimi tahmin edilebilir mi? Aynı soru tipinde doğru cevap hep aynı harfte mi?
   - **Şık kümesi sızıntısı:** öncüllü sorularda bir öncül yalnızca tek başına geçiyorsa yük taşımıyordur; öğrenci onu hiç değerlendirmeden cevaba varır.
   - **Bağlam tekrarı:** parti içinde ve endekse göre daha önceki partilerle.
   - **Zorluk kaldıracının tek boyutlu olması:** zorluk yalnızca metni uzatarak mı sağlanmış? Gerçek zorluk adım sayısından ve çıkarım derinliğinden gelmeli.
   - **Kazanım etiketi dağılımı:** bir kazanım "çöp kutusu" gibi kullanılmış mı?

3. Bulunan kusurlar düzeltilir, düzeltilen sorular **yeniden** kör doğrulamadan geçirilir.
4. `node dogrula.js` — hata ve uyarı sıfır olmalı; endeks tazelenir ve commit'e dahil edilir.
5. Yeni dosya `sorular/manifest.js` listesine eklenir.

## Kural 4: Gerçek veriyle kalibre et (öğrenci çözmeye başladıktan sonra)

Yukarıdaki her şey **tahmindir**. Bir sorunun gerçekten iyi olup olmadığını yalnızca veri söyler. Panelden çekilen `lgs_gecmis` yeterli hacme ulaşınca (bir soru en az 3 kez görülmüşse) şunları hesapla ve raporla:

| Ölçüt | Nasıl hesaplanır | Ne anlama gelir |
|---|---|---|
| **p (güçlük)** | doğru / (doğru + yanlış) | Etiketli zorluk ile tutuyor mu? Tutmuyorsa etiketi veriye göre düzelt. |
| **Ölü çeldirici** | Hiç seçilmemiş yanlış şık | O şık soruyu kolaylaştırıyor; değiştirilmeli. |
| **Ölü soru** | p ≈ 1 (herkes doğru yapıyor) | Ölçmüyor; havuzdan çıkarılabilir ya da zorlaştırılır. |
| **Şüpheli soru** | p çok düşük **ve** belirli bir çeldirici baskın | Ya soru bozuk ya da gerçek bir kavram yanılgısı var. İkisini ayırmak için soruyu yeniden kör doğrulamaya gönder. |

Bu ölçütler zorluk etiketlerinin yıl boyunca gerçeğe yaklaşmasını sağlar ve üretimdeki sistematik hataları görünür kılar. **Öğrencinin kişisel verisi bu hesap için belleğe alınır, diske ve depoya yazılmaz.**

## Yayımlama

```
git add -A && git commit -m "<konu>: N yeni soru (otomatik)" && git push
```

Çekirdek dosyalara (`index.html`, `js/app.js`, `css/style.css`, `panel.html`) dokunmadıysan `?v=` damgasını değiştirme.

## Rapor

Kısa tut: kaç soru, hangi konu ve kazanımlar, hangi zayıflığa karşılık, doğrulamada ne elendi, havuzun son durumu (özellikle paragrafta kaç taze soru kaldı). Veri okunamadıysa bunu ilk satırda söyle.

## Sınırlar

- Yayımlanmış soru `id`'lerini ve konu `id`'lerini **değiştirme**; öğrencinin ilerlemesi bunlara bağlı.
- Yayımlanmış soruyu silme; hatalıysa düzelt.
- Emin olmadığın bilgiyi soruya çevirme; kaynak `planlama/kaynaklar/` altındaki resmi programdır.
- Paragraf metinleri **tamamen özgün** yazılır; alıntı ya da tanınmış bir metnin yeniden yazımı kabul edilmez.
