# LGS Hazırlık — Ekran Test Sistemi Planı

Durum: **TASLAK — onay bekliyor** · Son güncelleme: 19 Eylül 2026

Ayrıntılı araştırma dosyaları: [arastirma-mufredat.md](arastirma-mufredat.md) · [arastirma-lgs-zorluk-profili.md](arastirma-lgs-zorluk-profili.md) · resmi belgeler: [kaynaklar/](kaynaklar/)

---

## 1. Amaç ve kapsam

- Öğrenci: 2026-27'de 8. sınıf, Haziran 2027'de LGS'ye girecek.
- Okul kaynaklı çalışma düzeni (kâğıt testler, denemeler) zaten var. Bu sistem onun **yerine geçmez, yanına eklenir**: ekranda çözülen ek testler.
- Öğrenci sistemi **kendi başına**, bilgisayardan kullanır. Okulda konuyu işleyip kâğıt testlerini bitirince gelir, o konu başlığının testini çözer.
- Abi, ilerlemeyi **telefonundan** canlı bir panelden istediği an izler.
- Kapsam dışı: kâğıt çıktı, optik form, konu anlatımı.

Ekranın kâğıda göre kattığı değer (sistemin var olma sebebi):
1. Her sorunun adım adım çözümü anında görülür.
2. Eski konular unutulmadan, otomatik olarak yeniden sorulur.
3. Yanlış yapılan sorular ve benzerleri geri gelir.
4. Hangi konuda neden hata yapıldığı ölçülür ve raporlanır.

## 2. Sınav ve müfredat (araştırmayla doğrulandı)

- 2026-27'de 8. sınıflar **eski programa** tabi (Matematik, Fen, İnkılap, Din, İngilizce 2018; Türkçe 2019). Maarif Modeli 8. sınıfa 2027-28'de ulaşıyor. İnternetteki "Maarif Modeli 8. sınıf" içerikleri bu öğrenci için **kullanılmaz**.
- LGS formatı (2026 kılavuzu; 2027 için değişiklik duyurulmadı):
  - Sözel oturum 50 soru, 75 dk: Türkçe 20, İnkılap 10, Din 10, İngilizce 10.
  - Sayısal oturum 40 soru, 80 dk: Matematik 20, Fen 20.
  - 4 şık. Net = doğru − yanlış/3, ders bazında. Katsayılar 4-4-4-1-1-1.
  - Kapsam 8. sınıf programının tamamı.
- **LGS 2027 tarihi henüz açıklanmadı.** Sistemde tarih ve format ayar dosyasında tutulur, Mart 2027'de kılavuz çıkınca güncellenir.
- Okul takvimi: açılış 14 Eylül 2026, ara tatil 16-20 Kasım, yarıyıl 25 Ocak – 5 Şubat, ara tatil 8-12 Mart, kapanış 25 Haziran 2027.

## 3. Test türleri

| Tür | Ne zaman | İçerik |
|---|---|---|
| **Konu testi** | Konu okulda bitince | Konu başına 3 kademe, her biri 10-12 soru |
| **Ünite denemesi** | Ünitenin bütün konuları bitince | Ünitenin tamamından karışık, süreli |
| **Günlük tekrar** | Her gün 5-10 dk | Eski konulardan ve geçmiş yanlışlardan 8-10 soru |
| **Aylık değerlendirme** | Ay sonu | O güne kadar işlenen bütün konulardan, sözel ve sayısal bölümlü, süreli, netli |

- **Bütün testler sürelidir.** Süre geri sayar, son 2 dakikada sayaç kırmızıya döner, dolunca test kendiliğinden biter (gerçek sınav gibi). Süre, sorulara zorluk düzeyine göre verilen saniyelerin toplamıdır (düzey 1: 60 sn, 2: 100 sn, 3: 150 sn, 4: 210 sn). 12 soruluk konu testlerinde bu yaklaşık 16 dk (Kavrama), 25 dk (Pekiştirme) ve 35 dk (LGS Ayarı) eder. Değerler `js/ayar.js` içinden değiştirilir; sınav yaklaştıkça gerçek LGS temposuna (sayısalda soru başına ortalama 2 dk) doğru kısılır. "Ara ver" ile çıkınca süre durur.
- Öğrenci bir konunun ilk testini çözdüğünde konu **"işlendi"** sayılır. Günlük tekrar ve aylık deneme yalnızca işlenmiş konulardan soru çeker. "İşlendi" durumu elle de açılıp kapatılabilir.
- **Türkçe iki eksenlidir.** Dil bilgisi konuları takvime bağlıdır. Anlam, paragraf, sözel mantık ve görsel okuma havuzu ise ilk günden açıktır, çünkü LGS Türkçe sorularının yaklaşık %65-75'i buradan gelir ve tek bir haftada "işlenen" bir konu değildir.
- Aylık değerlendirme güz döneminde yarım boy (45 soru, süre orantılı), şubattan itibaren tam boy (90 soru, 75 + 80 dk) yapılır; güzde tam boy denemeye yetecek kadar işlenmiş konu yoktur.

## 4. Zorluk sistemi

Her soru 1-4 arası etiketlenir. Ölçek, MEB'in 2018-2026 sınav raporlarındaki güçlük değerlerine ve 2026 kitapçığının incelenmesine göre ayarlandı (p = ülke genelinde soruyu doğru yapanların oranı):

| Düzey | Anlamı | Gerçek LGS'deki karşılığı | Yapı |
|---|---|---|---|
| 1 | Temel kazanım | En kolay %10-15 (p ≥ 0,65). Ör. 2026 Matematik 1. soru: "Hangisi tam kare sayıdır?" | 1 adım, 1 kazanım, bağlamsız ya da tek cümle |
| 2 | Orta | Din ve İnkılap'ın tipik sorusu, Türkçe ve Fen'in kolay yarısı (p 0,45-0,65) | 2 adım, kısa bağlam, veri doğrudan verilir |
| 3 | LGS ortalaması | Türkçe ve Fen'in tipik sorusu, Matematiğin ortadaki 11 sorusu (p 0,28-0,45) | 3-4 adım, tam yeni nesil senaryo, veri görselde |
| 4 | LGS ayırt edici | En zor %15-20, Matematiğin son 5 sorusu (p ≤ 0,25) | 4-6 adım, iki kazanım birleşir, "en az / olamaz / kaç farklı değer" kökleri, birbirine yakın şıklar |

Gerçek sınavdan çıkan ve soru yazımını belirleyen bulgular:
- **Matematik her yıl en zor test**: 20 soruda ülke ortalaması 4-6,5 doğru. Soruların yaklaşık 15'i günlük hayat senaryolu, 16'sında görsel var, öncüllü (I-II-III) soru yok. Bir deneme testinin karması 4 / 5 / 6 / 5 (düzey 1 / 2 / 3 / 4).
- **Fen**: soruların yaklaşık yarısı I-II-III öncüllü, deney düzeneği yorumu ağırlıkta, sayısal hesap yok denecek kadar az, kökte sık sık "kesinlikle". Okuma yükü 2025'ten beri Türkçe kadar. Karma 3 / 7 / 7 / 3.
- **Türkçe**: 15-16 soru anlam, paragraf, görsel ve sözel mantık; 4-5 soru dil bilgisi, yazım ve noktalama. Dil bilgisi terim ezberiyle değil, numaralı cümleli metin içinde sorulur. Karma 3 / 7 / 7 / 3.
- **Çeldiriciler tipik öğrenci hatalarından üretilir**: son adımı atlama, birimi çevirmeme, sınırı dahil etme, EBOB ile EKOK'u karıştırma, ısı ile sıcaklığı karıştırma. Bu sistemde **her yanlış şıkka bir hata etiketi** yazılır; öğrenci o şıkkı seçtiyse çözüm ekranı "büyük olasılıkla şu hatayı yaptın" der.
- Biçim: 4 şık, "hepsi/hiçbiri" şıkkı yok, sayısal şıklar sıralı, olumsuz kök altı çizili, ekranda tek soru, senaryo → görsel → "Buna göre…" → şıklar.

Ders ders ayrıntılı tarifler, konu kotaları ve sözcük bütçeleri: [arastirma-lgs-zorluk-profili.md](arastirma-lgs-zorluk-profili.md) bölüm 7.

Kolaydan zora üç katmanda gidilir:
- **Konu içinde:** 1. kademe testi düzey 1-2, 2. kademe düzey 2-3, 3. kademe düzey 3-4. Her testin içinde de sorular kolaydan zora sıralanır.
- **Yıl içinde:** tekrar testleri ve denemelerin karışımı güzde düzey 1-2 ağırlıklı, bahara doğru düzey 3, son iki ayda düzey 3-4 ağırlıklı olur.
- **Kişiye göre:** bir konuda %85 üstü → zorlayıcı test önerilir; %60 altı → daha kolay, bol açıklamalı telafi testi açılır.

Soru yazımında **program sınırlamaları filtre olarak uygulanır**: basınç ve basit makinelerde formül yok, ısıda Q=mcΔt yok, olasılıkta bağımlı olay yok, dönüşüm geometrisinde dönme yok, piramit ve konide alan-hacim yok, gruplandırarak çarpanlara ayırma yok (tam liste müfredat araştırmasında).

## 5. Tekrar motoru

- İşlenen her konu **7 gün, 30 gün ve 90 gün** sonra günlük tekrara girer.
- Yanlış yapılan soru 3, 10 ve 30 gün sonra geri gelir; art arda iki kez doğru yapılınca yanlış defterinden çıkar. Aynı sorunun ezberlenmesini önlemek için mümkün olduğunda aynı kazanımdan benzer bir soru da sorulur.
- Günlük tekrarın karışımı: yaklaşık yarısı zamanı gelen konular, üçte biri yanlış defteri, kalanı işlenmiş konulardan rastgele.

## 6. Test sonrası ve panel

- Sonuç ekranı: doğru, yanlış, boş, net, süre. Ardından her sorunun adım adım çözümü ("Adım 1…, Sağlama, sık yapılan hata" tarzı; KPSS projesindeki gibi).
- Her yanlışta tek tıkla sebep sorulur: *bilmiyordum · yanlış okudum · işlem hatası · süre yetmedi*.
- Öğrenci paneli: renkli konu haritası (gri başlanmadı, sarı zayıf, yeşil sağlam), net grafiği, çalışma serisi, LGS'ye kalan gün.
- *(Onay bekliyor)* "Okul denemesi netimi gir" formu: 6 dersin netini yazar; raporlar ekran ve kâğıt performansını birlikte gösterir.

## 7. İlerleme paneli

Karar (19 Eylül 2026): mail raporu yerine, abinin **telefonundan istediği an açıp bakabileceği canlı bir panel** (`panel.html`). Mail raporu isteğe bağlı bir ek olarak duruyor, varsayılan kapalı.

- Arka uç: **Google Sheets + Apps Script**, abinin kendi Google hesabında ([rapor/Kod.gs](../rapor/Kod.gs), kurulum: [rapor/KURULUM.md](../rapor/KURULUM.md)). Ücretsiz, sunucusuz.
- Her test bitince uygulama (1) sonucu tabloya satır olarak yazar, (2) ilerlemenin tam kopyasını buluta yollar. Panel bu kopyayı okur. Bağlantı yoksa kayıtlar kuyrukta bekler, sonra gönderilir.
- Aynı kopya **yedektir**: öğrencinin tarayıcı verisi silinirse uygulamadan tek tıkla geri yüklenir.
- Apps Script adresi depoya yazılmaz; öğrencinin bilgisayarında uygulamaya bir kez yapıştırılır. Sonuçlar herkese açık depoya hiç girmez.
- Panelin telefonda açılabilmesi için sitenin internette yayımlanması gerekir (GitHub Pages).

Panelde: son test zamanı, dönem özeti (7 gün / 30 gün / tümü), 14 günlük çalışma grafiği, ders ders tablo, hata analizi (kendi söylediği sebepler ve düştüğü tuzaklar), konu haritası, test listesi (yanlış ve boş soruların ayrıntısıyla), soru hata bildirimleri.

İleride eklenecekler: aylık değerlendirme denemesi sonuçları ve tahmini puan, günlük tekrara uyum.

## 8. Teknik mimari

KPSS soru programının altyapısı temel alınır: sunucusuz statik site, GitHub Pages, JS soru dosyaları, manifest, `dogrula.js`.

LGS için eklenenler:
- 4 şık (A–D).
- Soru alanları: `id, kazanim, kademe (0-3), zorluk (1-4), soru, gorsel, secenekler[4], dogru (0-3), hatalar[4], aciklama`. Ayrıntılı format ve kalite kuralları: [CLAUDE.md](../CLAUDE.md).
- `hatalar`: her yanlış şıkka götüren öğrenci hatasının adı; öğrenci o şıkkı seçince çözüm ekranında gösterilir.
- `kazanim` alanı resmi kazanım kodudur (ör. `M.8.1.1.2`, `F.8.4.4.4`, `T.8.3.9`). Konu ağacının kökü bu kodlardır.
- Görsel desteği: tablo, grafik ve şekiller satır içi SVG olarak.
- Matematik gösterimi: üslü, köklü ve kesirli ifadeler düzgün yazılır (KPSS'teki "2 üzeri x" düz metni yerine).
- İlerleme kaydı tarayıcıda (localStorage) tutulur, buluta kopyalanır (bölüm 7).
- Ayar dosyası: sınav tarihi, format, rapor adresi, kapatılabilir dersler (ör. Din muafiyeti).

## 9. Soru üretim hattı ve kalite

1. Soru, kazanım ve program sınırlamalarına göre yazılır; zorluk ve tip etiketlenir.
2. **Bağımsız doğrulama:** cevabı görmeyen ayrı bir ajan soruyu sıfırdan çözer. Cevap tutmazsa ya da birden fazla şık savunulabilirse soru düzeltilir veya atılır.
3. `dogrula.js`: şema, id çakışması, kopya ve benzer soru kontrolü.
4. Ancak bundan sonra yayına girer.

Kaynak önceliği: MEB çıkmış sorular ve örnek sorular ölçü alınır (tarz ve zorluk için). Üretilen sorular bunları **tamamlar**, yerine geçmez.

## 10. Konu takvimi ve üretim sırası

Bütün yılın soruları baştan üretilmez. Okul takviminin **2-3 hafta önünden** gidilir. Aşağıdaki ay-konu haritası ikincil kaynaklı yıllık planlardan türetildi; okuldan okula 1-3 hafta kayabilir. Öğrencinin okulunun zümre planı bulunursa o esas alınır.

| Ay | Matematik | Fen | Türkçe (dil bilgisi) | İnkılap | Din | İngilizce |
|---|---|---|---|---|---|---|
| Eylül | Çarpanlar ve Katlar; Üslü İfadeler (giriş) | Mevsimler ve İklim | Fiilimsiler | Ü1 | Ü1 Kader | U1 Friendship |
| Ekim | Üslü İfadeler; Kareköklü İfadeler | DNA ve Genetik Kod | Cümlenin Ögeleri | Ü1 sonu; Ü2 | Ü1 | U2; U3 giriş |
| Kasım | Kareköklü İfadeler | DNA sonu; Basınç | Cümlenin Ögeleri | Ü2 | Ü2 Zekât ve Sadaka | U3 |
| Aralık | Veri Analizi; Olasılık | Madde ve Endüstri | Cümle Türleri | Ü2 sonu; Ü3 | Ü2 | U4; U5 giriş |
| Ocak | Cebirsel İfadeler ve Özdeşlikler | Madde ve Endüstri | Cümle Türleri | Ü3 | Ü3 Din ve Hayat | U5 |
| Şubat | Doğrusal Denklemler | Basit Makineler | Cümle Türleri | Ü3 sonu; Ü4 | Ü3 | U6 |
| Mart | Doğrusal Denklemler; Eşitsizlikler | Enerji Dönüşümleri ve Çevre | Fiilde Çatı | Ü4 | Ü4 | U7 |
| Nisan | Üçgenler | Elektrik Yükleri | Anlatım Bozuklukları | Ü5 | Ü4 | U8; U9 giriş |
| Mayıs | Eşlik-Benzerlik; Dönüşüm Geometrisi | Elektrik Enerjisi | Tekrar | Ü6; Ü7 | Ü5 | U9; U10 |
| Haziran | Geometrik Cisimler ⚠ | — | Tekrar | Ü7 ⚠ | Ü5 ⚠ | U10 ⚠ |

⚠ Plana göre sınav tarihine çakışan son konular. Bunların testleri nisan sonuna kadar hazır olur ve öğrenci okulu beklemeden açabilir.

**İlk üretim partisi (Eylül–Ekim konuları):** Matematik Çarpanlar ve Katlar ile Üslü İfadeler · Fen Mevsimler ve İklim · Türkçe Fiilimsiler, Sözcükte Anlam, Paragraf · İnkılap Ü1 · Din Ü1 · İngilizce U1-U2.

Emek dağılımı katsayılara göre: Matematik, Fen ve Türkçe önce ve daha derin; İnkılap, Din ve İngilizce daha yalın.

## 11. Yapım aşamaları

| # | Aşama | Çıktı | Durum (19 Eylül 2026) |
|---|---|---|---|
| 0 | Planın onayı | Bu belge | Konu listesi öğrenciyle doğrulandı, "devam" dendi |
| 1 | Uygulama iskeleti + **pilot konu** (Matematik: Çarpanlar ve Katlar, 3 kademe + havuz, 48 soru) | Öğrenci dener, geri bildirim alınır, soru formatı oturur | Yapıldı; 48 soru bağımsız doğrulamadan geçti. **Öğrencinin denemesi bekleniyor** |
| 2 | İlerleme paneli (Sheets + Apps Script arka uç, `panel.html`, bulut yedeği) | Abi telefonundan izler | Kod hazır, sahte veriyle denendi. **Google kurulumu ve sitenin yayımlanması kullanıcıyla birlikte yapılacak; uçtan uca henüz denenmedi** |
| 3 | Tekrar motoru + yanlış defteri + öğrenci paneli | Günlük tekrar çalışır | Başlanmadı (yanlışlar şimdiden kaydediliyor) |
| 4 | Ünite denemesi + aylık değerlendirme modu | Ekim sonu ilk aylık değerlendirme | Başlanmadı |
| 5 | Takvime göre sürekli içerik üretimi | Her ay yeni konu partileri | Sırada: Üslü İfadeler, Mevsimler ve İklim, Fiilimsiler |

## 12. Açık kararlar ve riskler

| Konu | Durum |
|---|---|
| Rapor için Google Sheets + Apps Script | Onay bekliyor |
| "Okul denemesi neti gir" formu | Onay bekliyor |
| Din Kültürü muafiyeti var mı, yabancı dil İngilizce mi | Sorulacak (varsayım: muafiyet yok, İngilizce) |
| Okulun gerçek konu sırası | Zümre yıllık planı bulunursa takvim ona göre düzeltilir |
| LGS 2027 tarihi ve kılavuzu | Mart 2027'de yeniden kontrol |
| Üretilen soruların doğruluğu | Bağımsız doğrulama hattı; yine de öğrenci "bu soruda hata var" diye işaretleyebilmeli |
