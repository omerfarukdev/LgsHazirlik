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

### Öncelik sırası

Eksik konu birden fazlaysa **katsayısı yüksek ders önce gelir**: Türkçe, Matematik, Fen (katsayı 4) → İnkılap, Din, İngilizce (katsayı 1).

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

## Doğrulama (atlanamaz)

Hiçbir soru bu adımlar geçilmeden yayımlanmaz.

1. **Kör doğrulama:** `node otomasyon/kor.js <dosya> <çıktı.json>` ile cevapsız kopya üret. Ayrı bir ajan (`general-purpose`) bu JSON'u çözsün ve `sorular/` klasörünü **açmasın**. Aranacak kusurlar: birden fazla savunulabilir doğru, doğru şıkkın olmaması, belirsiz ifade, zayıf çeldirici (okumadan elenebilen şık), müfredat dışı bilgi, dil hatası, zorluk uyumsuzluğu.
2. Bulunan kusurlar düzeltilir, düzeltilen sorular **yeniden** kör doğrulamadan geçirilir.
3. `node dogrula.js` — hata ve uyarı sıfır olmalı.
4. Yeni dosya `sorular/manifest.js` listesine eklenir.

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
