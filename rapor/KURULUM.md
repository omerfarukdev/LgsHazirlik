# İlerleme paneli kurulumu (bir kerelik, yaklaşık 10 dakika)

Kardeşinin çözdüğü testleri telefonundan istediğin an görebilmen için verilerin bir yerde toplanması gerekiyor. Bunun için kendi Google hesabında küçük bir betik çalıştıracaksın. Ücretsizdir, sunucu gerekmez, veriler yalnızca senin hesabında durur.

Nasıl çalışır: kardeşin bir test bitirince uygulama sonucu senin Google E-Tablona yazar. Panel sayfası da o tablodan okur.

## 1. Tabloyu oluştur

1. Bilgisayardan [sheets.new](https://sheets.new) adresini aç (Google hesabınla giriş yapmış ol).
2. Tablonun adını **LGS İlerleme** yap.

## 2. Betiği yapıştır

1. Tabloda üst menüden **Uzantılar → Apps Script**'e tıkla. Yeni bir sekme açılır.
2. Açılan düzenleyicideki hazır kodu (`function myFunction() {…}`) tamamen sil.
3. Bu klasördeki [Kod.gs](Kod.gs) dosyasının **bütün içeriğini** kopyalayıp oraya yapıştır.
4. Sol üstteki "Adsız proje" yazısına tıklayıp adını **LGS Rapor** yap.
5. Kaydet (Ctrl+S).

## 3. Kurulum işlevini çalıştır

1. Düzenleyicinin üstündeki işlev listesinden **kurulum**'u seç, **Çalıştır**'a bas.
2. İzin penceresi açılır: **İzinleri incele** → hesabını seç.
3. "Google bu uygulamayı doğrulamadı" uyarısı çıkar. Bu normaldir, çünkü uygulamayı yazan sensin. **Gelişmiş → LGS Rapor'a git (güvenli değil)** → **İzin ver**.
   - İstenen izinler: bu tabloyu düzenleme ve senin adına mail gönderme. Mail izni, isteğe bağlı mail raporu içindir; sen açmadıkça mail gönderilmez.
4. Tabloya dön: **Testler, Nedenler, Bildirimler, Yedek** adlı dört sayfa oluşmuş olmalı.

## 4. Web uygulaması olarak dağıt

1. Apps Script sekmesinde sağ üstten **Dağıt → Yeni dağıtım**.
2. "Tür seçin" yanındaki dişliye tıkla → **Web uygulaması**.
3. Ayarlar:
   - Açıklama: `LGS`
   - Şu kullanıcı olarak çalıştır: **Ben**
   - Erişimi olanlar: **Herkes**
4. **Dağıt**'a bas. Çıkan **Web uygulaması URL'sini** kopyala. `https://script.google.com/macros/s/…/exec` biçimindedir.

> Bu adres bir anahtar gibidir: adresi bilen herkes ilerleme verisini görebilir. Kimseyle paylaşma, herkese açık bir yere yazma.

## 5. Uygulamaya bağla (kardeşinin bilgisayarında)

1. LGS uygulamasını aç. Ana sayfanın en altındaki **Panel bağlantısı**'na tıkla.
2. Kopyaladığın adresi yapıştır → **Kaydet ve dene**.
3. "✓ Bağlantı çalışıyor" yazısını görmelisin. Altında **Panel adresi** belirir.

Bağlantıdan önce çözülmüş testler varsa onlar da o anda gönderilir; kayıp olmaz.

## 6. Paneli telefonunda aç

1. 5. adımda çıkan **Panel adresini** kendine gönder (WhatsApp, mail, not…) ve telefonunda aç.
2. Tarayıcı menüsünden **Ana ekrana ekle** dersen uygulama gibi tek dokunuşla açılır.
3. Panelde en güncel veriyi görmek için **↻ Yenile**'ye bas.

Panelin telefonda açılabilmesi için sitenin internette yayımlanmış olması gerekir (GitHub Pages). Site yalnızca kardeşinin bilgisayarındaki dosyadan açılıyorsa panel adresi telefonda çalışmaz; o durumda ilerlemeyi Google E-Tablolar uygulamasından **LGS İlerleme** tablosunu açarak görebilirsin.

## Panelde neler var

- Son testin ne zaman çözüldüğü; seçtiğin dönemde (7 gün, 30 gün, tümü) test, soru, doğruluk, çalışılan gün ve süre.
- Son 14 günün günlük çalışma grafiği (hangi gün çalıştı, hangi gün boş geçti).
- Ders ders doğru, yanlış, boş ve net tablosu.
- Hata analizi: kendi işaretlediği yanlış sebepleri ve en sık düştüğü tuzaklar.
- Konu haritası: her konunun üç kademesindeki en iyi sonucu.
- Çözülen testlerin listesi. Bir teste dokununca yanlış ve boş bıraktığı sorular, hangi şıkkı seçtiği, soruda kaç dakika harcadığı ve sorunun kendisi açılır.
- Kardeşinin "bu soruda hata var" diye bildirdiği sorular.

## Sık karşılaşılanlar

- **"✗ Bağlanılamadı" diyor:** 4. adımda "Erişimi olanlar: Herkes" seçilmemiş olabilir ya da adres `/exec` ile bitmiyordur (`/dev` ile biten deneme adresi çalışmaz).
- **Betiği sonradan güncellemek:** Kod.gs'nin yeni halini yapıştır → **Dağıt → Dağıtımları yönet → kalem simgesi → Sürüm: Yeni sürüm → Dağıt**. Böylece adres değişmez. "Yeni dağıtım" yaparsan adres değişir ve 5. adımı yinelemen gerekir.
- **Kardeşinin bilgisayarında veriler silindi:** Uygulamada **Panel bağlantısı → adresi yeniden yapıştır → Buluttaki yedeği yükle**.
- **Mail de gelsin istersen:** Kod.gs'nin başındaki `MAIL_RAPORU = false` satırını `true` yap, kaydet, **kurulum** işlevini yeniden çalıştır. Her Pazar 20.00'de haftalık, her ayın 1'inde 09.00'da aylık rapor gelir. Hemen denemek için **raporuSimdiDene** işlevini çalıştır.
