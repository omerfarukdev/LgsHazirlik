# Otomatik soru üretim ajanı

Bu dosya, düzenli aralıklarla kendiliğinden çalışan ajanın görev tanımıdır. Amaç: abinin her seferinde "yanlışlarına göre test üret" demesine gerek kalmaması.

## İş bölümü

| Katman | Ne yapar | Ne zaman |
|---|---|---|
| **Uygulama** (`js/app.js`) | Yanlış yapılan soruyu ve benzerlerini kendiliğinden geri getirir, "Bugünün tekrarı" testini hazırlar | Anında, her test bitiminde |
| **Bu ajan** | Zayıf kalınan kazanımlara **yeni sorular yazar**, takvimdeki konuları önceden hazırlar | Zamanlanmış (haftada 2-3 kez) |

Uygulama var olan soruları yeniden düzenler; ajan havuzu büyütür. Havuz büyümezse tekrar testleri aynı soruları döndürmeye başlar — ajanın asıl işi budur.

## Her çalışmada izlenecek adımlar

### 1. Durumu oku

Panel bağlantısı kuruluysa (`rapor/KURULUM.md`), Apps Script adresinden ilerlemeyi çek:

```
curl -s "<APPS_SCRIPT_URL>?islem=yedek"
```

Dönen JSON'daki `veri` alanı öğrencinin localStorage kopyasıdır. İşine yarayanlar:
- `lgs_gecmis`: çözülen testler (`sorular`, `cevap`, `sureSoru`, `neden`, `oran`, `kademe`)
- `lgs_yanlis`: yanlış defteri (soru id → `{ts, konu, seri, tekrar}`)
- `lgs_konuDurum`: konu → kademe → `{enIyi, son, deneme}`
- `lgs_gorulen`: öğrencinin gördüğü soru id'leri

Adres henüz yoksa ya da çekilemezse **2A'yı atla, doğrudan 2B'ye geç** ve raporda belirt.

### 2A. Zayıf noktaları çıkar (veri varsa)

Her yanlış cevabı sorunun `kazanim` ve `hatalar[secilen]` alanıyla eşleştir. Şunları sırala:
- **Zayıf kazanımlar:** aynı kazanımda 2+ yanlış, ya da kademe başarısı < %70.
- **Tekrarlayan hata yolları:** `hatalar` metinlerinde öne çıkan örüntü (EBOB↔EKOK karıştırma, son adımı atlama, sınırı dahil etme, birim çevirmeme…).
- **Tükenen havuzlar:** `lgs_gorulen` o konudaki soruların %70'inden fazlasını kapsıyorsa havuz tükeniyordur.
- **Süre sorunu:** `sureSoru` değerleri `ayar.js`'teki `sureSoruBasi` değerinin iki katını aşan sorular.

**Üretim önceliği:** zayıf kazanımlar → tükenen havuzlar → takvimdeki sıradaki konu.

### 2B. Veri yoksa: takvime göre üret

`planlama/PLAN.md` bölüm 10'daki ay-konu haritasına bak. Okulun **2-3 hafta önünden** git: o ay işlenen ve bir sonraki konunun soruları hazır olmalı. Hazır olmayan ilk konuyu seç.

### 3. Soruları yaz

- `CLAUDE.md`'deki format, müfredat sınırları ve kalite kurallarına **birebir** uy.
- Bir çalışmada **12-24 soru**. Az ve doğru, çok ve şüpheliden iyidir.
- Zayıf kazanım için üretiyorsan: aynı kazanımdan, **öğrencinin düştüğü hata yolunu çeldirici olarak kuran** sorular yaz. Önce kolay (düzey 1-2) bir basamak koy, sonra düzeyi yükselt.
- Yeni konu için üretiyorsan kademe dağılımına uy (Kavrama 12, Pekiştirme 12, LGS Ayarı 12, havuz 12).
- `id` çakışmasını önlemek için mevcut dosyadaki en büyük numaradan devam et.
- **Var olan soruları değiştirme, silme.** Yalnızca yeni dosya ekle ya da mevcut dosyanın sonuna ekle.

### 4. Doğrula (atlanamaz)

1. **Kör doğrulama:** `node otomasyon/kor.js <dosya> <çıktı.json>` ile cevapsız kopya üret; ayrı bir ajan (`general-purpose`) bu JSON'u çözsün, `sorular/` klasörünü açmasın. Tutmayan soruyu düzelt ya da at.
2. `node dogrula.js` — hata ve uyarı sıfır olmalı.
3. Yeni dosyayı `sorular/manifest.js` listesine ekle.

### 5. Yayımla

```
git add -A && git commit -m "<konu>: N yeni soru (otomatik)" && git push
```

Çekirdek dosyalara dokunmadıysan `?v=` damgasını değiştirme.

### 6. Raporla

Kısa tut: kaç soru, hangi konu ve kazanımlar, hangi zayıflığa karşılık, doğrulamada ne elendi. Veri okunamadıysa bunu ilk satırda söyle.

## Sınırlar

- Öğrencinin kişisel verisini (sonuçlar, yedek) **depoya yazma**.
- Emin olmadığın bilgiyi soruya çevirme; kaynağı `planlama/kaynaklar/` altındaki resmi programdır.
- Bir çalışmada 24 sorudan fazlasını üretme; kalite düşer.
