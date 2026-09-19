// Matematik — Üslü İfadeler: Kademe 3 (LGS Ayarı) ve Havuz
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["uslu-ifadeler"] = window.LGS_BANK["uslu-ifadeler"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "mat-ui-301",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir uzay ajansı, güneş sistemini incelemek için gönderdiği araçla radyo sinyalleri aracılığıyla haberleşmektedir. Dünya'daki denetim merkezi araca bir komut gönderir; araç komutu alır almaz merkeze bir yanıt sinyali yollar. Mühendisler, komutun gidişi ile yanıtın dönüşü için geçen sürelerin toplamına \"tur süresi\" demektedir. Güvenlik gereği, bir komutun tur süresi dolmadan yeni bir komut gönderilmemektedir. Aracın o andaki uzaklığı ile sinyalin boşluktaki hızı aşağıda verilmiştir.\n**Buna göre bir komutun tur süresi kaç dakikadır?**",
  gorsel: `<svg viewBox="0 0 540 190" role="img" aria-label="Dünya ile uzay aracı arasındaki uzaklık 450 000 000 km, sinyal hızı saniyede 300 000 km"><circle cx="70" cy="70" r="34" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" fill="none"><rect x="424" y="50" width="48" height="40" rx="4"/><line x1="410" y1="58" x2="424" y2="70"/><line x1="410" y1="82" x2="424" y2="70"/><line x1="472" y1="70" x2="492" y2="70"/></g><g stroke="var(--vurgu)" stroke-width="2"><line x1="110" y1="132" x2="430" y2="132"/><line x1="110" y1="124" x2="110" y2="140"/><line x1="430" y1="124" x2="430" y2="140"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="70" y="128">Dünya</text><text x="448" y="112">Uzay aracı</text><text x="270" y="158">450 000 000 km</text><text x="270" y="182">Sinyal hızı: saniyede 300 000 km</text></g></svg>`,
  secenekler: ["25", "50", "1500", "3000"],
  dogru: 1,
  hatalar: [
    "Son adımı atlama: 25 dakika yalnızca gidiş süresidir; tur süresi gidiş ile dönüşün toplamıdır.",
    null,
    "İki hata birden: gidiş süresini cevap sanma ve saniyeyi dakikaya çevirmeme. 1500 sayısı saniyedir.",
    "Birimi çevirmeme: 3000 sayısı tur süresinin saniye cinsinden değeridir, dakika cinsinden değil."
  ],
  aciklama: `Bir sayıyı bilimsel gösterimle yazmak, onu 1 ile 10 arasında bir sayı ile 10'un bir tam sayı kuvvetinin çarpımı biçiminde yazmaktır. Büyük sayılarla bölme yaparken bu gösterim işi çok kolaylaştırır.
Adım 1: Verileri bilimsel gösterime çevir. Uzaklık 450 000 000 = 4,5 · 10^{8} km, hız 300 000 = 3 · 10^{5} km/s.
Adım 2: Gidiş süresini bul. Süre = yol ÷ hız olduğundan (4,5 · 10^{8}) ÷ (3 · 10^{5}) işlemini yap. Sayıları kendi aralarında böl: 4,5 ÷ 3 = 1,5. Üslü kısımda aynı tabanlı bölmede üsler çıkarılır: 10^{8} ÷ 10^{5} = 10^{8−5} = 10^{3}. Sonuç 1,5 · 10^{3} = 1500 saniyedir.
Adım 3: Tur süresi gidiş ve dönüşün toplamıdır: 1500 + 1500 = 3000 saniye.
Adım 4: Dakikaya çevir: 3000 ÷ 60 = 50 dakika.
Sağlama: 50 dakika = 3000 saniye; bu sürede sinyal 3000 · 300 000 = 900 000 000 km yol alır ve bu, 450 000 000 km'nin gidiş-dönüş toplamıdır.
Sık yapılan hata: Gidiş süresini bulunca durmak ya da sonucu saniye cinsinden bırakmak.
Cevap B.`
},
{
  id: "mat-ui-302",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir okulun bilişim kulübü, öğretmenlerin çektiği ders videolarını yedeklemek için yeni bir disk almıştır. Kulüp üyeleri diskteki alanın tamamını bu videolar için kullanacak ve bütün videoları aynı boyutta kaydedecektir. Diskin kapasitesi ile bir videonun kapladığı yer, kutunun üzerindeki etikette yazmaktadır. Bilgisayarlarda büyüklükler 2'nin kuvvetleriyle ölçülür: 1 TB = 2^{10} GB ve 1 GB = 2^{10} MB'tır.\n**Buna göre diske bu videolardan en fazla kaç tane sığar?**",
  gorsel: `<svg viewBox="0 0 520 170" role="img" aria-label="Disk etiketi: kapasite 2 üssü 2 TB, bir ders videosu 2 üssü 9 MB"><rect x="20" y="20" width="480" height="130" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="20" y1="60" x2="500" y2="60" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="17"><text x="40" y="48" font-weight="bold">YEDEKLEME DİSKİ</text><text x="40" y="95">Kapasite: 2<tspan font-size="14" dy="-8">2</tspan><tspan dy="8"> TB</tspan></text><text x="40" y="132">Bir ders videosu: 2<tspan font-size="14" dy="-8">9</tspan><tspan dy="8"> MB</tspan></text></g><g stroke="var(--vurgu)" stroke-width="3" fill="none"><rect x="392" y="82" width="86" height="50" rx="6"/><circle cx="435" cy="107" r="13"/></g></svg>`,
  secenekler: ["2^{31}", "2^{22}", "2^{13}", "2^{3}"],
  dogru: 2,
  hatalar: [
    "Bölmede üsleri çıkarmak yerine toplama: 2^{22} ÷ 2^{9} işleminde 22 + 9 = 31 alınmış.",
    "Ara sonucu cevap sanma: 2^{22}, diskin MB cinsinden kapasitesidir; video sayısı için bir bölme daha gerekir.",
    null,
    "Bir çevirme adımını atlama: 1 TB doğrudan 2^{10} MB sanılmış, GB basamağı atlanmış."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken üsler toplanır (a^{n} · a^{m} = a^{n+m}), bölünürken üsler çıkarılır (a^{n} ÷ a^{m} = a^{n−m}).
Adım 1: Diskin kapasitesini GB'a çevir: 2^{2} TB = 2^{2} · 2^{10} = 2^{2+10} = 2^{12} GB.
Adım 2: GB'ı MB'a çevir: 2^{12} · 2^{10} = 2^{12+10} = 2^{22} MB. Disk 2^{22} MB yer tutar.
Adım 3: Video sayısını bul: 2^{22} ÷ 2^{9} = 2^{22−9} = 2^{13}.
Sağlama: 2^{13} video · 2^{9} MB = 2^{13+9} = 2^{22} MB; disk tam olarak dolar.
Sık yapılan hata: Bölmede üsleri toplamak. Toplama yalnızca çarpmada yapılır; bölmede üstteki üsten alttaki üs çıkarılır.
Cevap C.`
},
{
  id: "mat-ui-303",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Kargo kuryesi Sinan, elektrikli motosikletiyle her gün biri sabah biri akşam olmak üzere iki tur dağıtım yapmaktadır. Motosikletin ekranı, o turda gidilen yolu kilometre cinsinden ondalık gösterimle yazmakta ve her tur başında sıfırlanmaktadır. Sinan akşam eve dönünce iki turda gittiği yolları toplayıp günlük defterine yazmakta, sonra da bu sayıyı basamak değerlerine ayırarak yeniden denetlemektedir. Sinan'ın bugünkü iki turuna ait ekran görüntüleri aşağıda verilmiştir.\n**Buna göre Sinan'ın bugün gittiği toplam yolun kilometre cinsinden çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 150" role="img" aria-label="İki ekran: sabah turu 16,4 km, akşam turu 25,95 km"><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><rect x="20" y="20" width="220" height="110" rx="10"/><rect x="280" y="20" width="220" height="110" rx="10"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="130" y="52">SABAH TURU</text><text x="390" y="52">AKŞAM TURU</text></g><g fill="var(--vurgu)" font-size="30" text-anchor="middle" font-weight="bold"><text x="130" y="100">16,4 km</text><text x="390" y="100">25,95 km</text></g></svg>`,
  secenekler: [
    "4 · 10^{1} + 2 · 10^{0} + 3 · 10^{−1} + 5 · 10^{−2}",
    "4 · 10^{2} + 2 · 10^{1} + 3 · 10^{0} + 5 · 10^{−1}",
    "4 · 10^{1} + 2 · 10^{0} + 3 · 10^{1} + 5 · 10^{2}",
    "4 · 10^{0} + 2 · 10^{−1} + 3 · 10^{−2} + 5 · 10^{−3}"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Basamak değerlerini bir sıra kaydırma: 4 rakamı onlar basamağındadır, yüzler basamağında değil.",
    "Ondalık kısımda negatif üs kullanmama: virgülden sonraki basamakların değeri 10^{−1} ve 10^{−2}'dir.",
    "Çözümlemeye birler basamağından başlama: en soldaki rakamı 4 · 10^{0} yazıp bütün basamakları kaydırma."
  ],
  aciklama: `Bir ondalık gösterimi çözümlemek, her rakamı kendi basamak değeriyle çarpıp bu çarpımları toplamak demektir. Virgülden önceki basamaklar 10^{0}, 10^{1}, 10^{2}… ; virgülden sonraki basamaklar 10^{−1}, 10^{−2}… değerlerini alır.
Adım 1: Toplam yolu bul: 16,4 + 25,95 = 42,35 km. (Toplarken virgülleri alt alta getir: 16,40 + 25,95.)
Adım 2: Basamakları adlandır. 4 onlar, 2 birler, 3 onda birler, 5 yüzde birler basamağındadır.
Adım 3: Her rakamı basamak değeriyle çarp: 4 · 10^{1} + 2 · 10^{0} + 3 · 10^{−1} + 5 · 10^{−2}.
Sağlama: 40 + 2 + 0,3 + 0,05 = 42,35.
Sık yapılan hata: 10^{−1} yerine 10^{1} yazmak. Virgülden sonraki basamaklar 1'den küçük değerler taşır; bu yüzden üs negatiftir.
Cevap A.`
},
{
  id: "mat-ui-304",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir doğa kampında kullanılan su deposunun vanası yavaş yavaş tıkanmaktadır. Kamp sorumlusu, vanadan bir saatte akan su miktarını her saat başında ölçmekte ve bir tabloya yazmaktadır. Ölçümler, akan su miktarının her saat başında bir önceki saatin yarısına düştüğünü göstermektedir. Sorumlu, vana tamir edilene kadar bu azalmanın aynı biçimde süreceğini düşünmektedir. Sabah 08.00'den itibaren alınan ölçümlerin bir bölümü tabloda verilmiştir.\n**Buna göre saat 14.00'te vanadan bir saatte kaç litre su akar?**",
  gorsel: `<table class="tablo"><tr><th>Saat</th><th>08.00</th><th>09.00</th><th>10.00</th></tr><tr><td>Akan su (litre/saat)</td><td>2<sup>3</sup> = 8</td><td>2<sup>2</sup> = 4</td><td>2<sup>1</sup> = 2</td></tr></table>`,
  secenekler: ["−8", "0", "[[1|8]]", "[[1|4]]"],
  dogru: 2,
  hatalar: [
    "Negatif üssü sayının işareti sanma: 2^{−3} ifadesi −8 demek değildir; negatif üs, sayının çarpmaya göre tersini gösterir.",
    "2^{0} sayısını 0 sanma: saat 11.00'de akış 2^{0} = 1 litredir, bu yüzden su tamamen kesilmez.",
    null,
    "Saat sayısını yanlış sayma: 08.00 ile 14.00 arasında 6 saat vardır, 5 saat değil."
  ],
  aciklama: `Sıfırdan farklı bir a sayısı için a^{0} = 1'dir ve negatif üs, sayının çarpmaya göre tersini gösterir: a^{−n} = [[1|a^{n}]]. Örneğin 2^{−3} = [[1|2^{3}]] = [[1|8]].
Adım 1: Tablodaki örüntüyü oku. Her saat başında üs 1 azalıyor: 08.00 → 2^{3}, 09.00 → 2^{2}, 10.00 → 2^{1}.
Adım 2: Kaç saat geçtiğini bul: 08.00'den 14.00'e 6 saat vardır. Üs 6 kez azalır: 3 − 6 = −3.
Adım 3: Saat 14.00'teki değer 2^{−3}'tür.
Adım 4: Değeri hesapla: 2^{−3} = [[1|2^{3}]] = [[1|8]] litre.
Sağlama: Yarılamayı tek tek yaz: 8, 4, 2, 1, [[1|2]], [[1|4]], [[1|8]]. Bu değerler 08.00, 09.00, 10.00, 11.00, 12.00, 13.00 ve 14.00 saatlerine karşılık gelir.
Sık yapılan hata: 2^{−3} sonucunu −8 sanmak. Üssün negatif olması sayıyı negatif yapmaz, 1'den küçük yapar.
Cevap C.`
},
{
  id: "mat-ui-305",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir otomobil fabrikası, yılın her çalışma gününde aynı sayıda araç üretmektedir. Fabrikanın üretim panosunda günlük üretim ile yılda çalışılan gün sayısı yazmaktadır; yıllık üretim sayısı bu iki değerin çarpımına eşittir. Fabrika müdürü, yıl sonu sunumunda bu yıllık üretim sayısını 10'un farklı kuvvetlerini kullanarak birkaç değişik biçimde göstermek istemektedir. Ancak hazırladığı dört ifadeden biri yanlış yazılmıştır. Panodaki değerler aşağıda verilmiştir.\n**Buna göre aşağıdakilerden hangisi fabrikanın yıllık üretim sayısına eşit __değildir__?**",
  gorsel: `<svg viewBox="0 0 520 160" role="img" aria-label="Üretim panosu: günlük üretim 2000 araç, yılda çalışılan gün 360"><rect x="20" y="18" width="480" height="124" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="260" y1="18" x2="260" y2="142" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="16" text-anchor="middle"><text x="140" y="52">Günlük üretim</text><text x="380" y="52">Yılda çalışılan gün</text></g><g fill="var(--vurgu)" font-size="32" font-weight="bold" text-anchor="middle"><text x="140" y="108">2 000</text><text x="380" y="108">360</text></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="140" y="132">araç</text><text x="380" y="132">gün</text></g></svg>`,
  secenekler: ["0,72 · 10^{6}", "72 · 10^{4}", "720 · 10^{3}", "7200 · 10^{3}"],
  dogru: 3,
  hatalar: [
    "Baştaki sayı 1'den küçük olduğu için ifadeyi elemek: 0,72 · 10^{6} = 720 000'dir, yıllık üretime eşittir.",
    "10'un üssünü baştaki sayının basamak sayısıyla karıştırmak: 72 · 10^{4} = 720 000'dir, yıllık üretime eşittir.",
    "10^{3} sayısını 100 sanmak: 720 · 10^{3} = 720 · 1000 = 720 000'dir, yıllık üretime eşittir.",
    null
  ],
  aciklama: `Bir sayı, 10'un farklı tam sayı kuvvetleri kullanılarak birçok biçimde yazılabilir. Baştaki sayı 10 kat büyütülürse 10'un üssü 1 azalmalı, 10 kat küçültülürse üs 1 artmalıdır; ancak böyle sayının değeri korunur.
Adım 1: Yıllık üretimi hesapla: 2000 · 360 = 720 000 araç.
Adım 2: Şıkları tek tek değerlendir. 0,72 · 10^{6} = 720 000 ✓ ; 72 · 10^{4} = 720 000 ✓ ; 720 · 10^{3} = 720 000 ✓.
Adım 3: Son şıkkı hesapla: 7200 · 10^{3} = 7200 · 1000 = 7 200 000. Bu sayı 720 000'in 10 katıdır, eşit değildir.
Sağlama: 720 · 10^{3} ifadesinde baştaki sayıyı 10 kat büyütüp 7200 yaparsan üssü 1 azaltıp 10^{2} yazmalısın: 7200 · 10^{2} = 720 000 olurdu.
Sık yapılan hata: Baştaki sayıyı büyütürken 10'un üssünü aynı bırakmak. Bu, sayının değerini değiştirir.
Cevap D.`
},
{
  id: "mat-ui-306",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir spor bilimi laboratuvarında sporculara koşu bandı testi uygulanmaktadır. Test boyunca sporcuya bağlanan ölçüm cihazı, sporcunun tükettiği oksijen miktarını eşit aralıklarla ölçmekte ve her ölçümü ayrı bir kayıt olarak belleğine yazmaktadır. Bir testin bütün kayıtları, test biter bitmez tek bir dosya hâlinde bilgisayara aktarılmaktadır. Cihazın özellikleri ile testin süresi tabloda verilmiştir.\n**Buna göre bir testin verileri bellekte toplam kaç bayt yer kaplar?**",
  gorsel: `<table class="tablo"><tr><th>Özellik</th><th>Değer</th></tr><tr><td>Bir kaydın büyüklüğü</td><td>2<sup>4</sup> bayt</td></tr><tr><td>Saniyedeki ölçüm sayısı</td><td>2<sup>3</sup> ölçüm</td></tr><tr><td>Test süresi</td><td>2<sup>6</sup> saniye</td></tr></table>`,
  secenekler: ["2^{72}", "2^{13}", "2^{10}", "2^{7}"],
  dogru: 1,
  hatalar: [
    "Çarpmada üsleri toplamak yerine çarpma: 4 · 3 · 6 = 72 alınmış.",
    null,
    "Bir çarpanı atlama: saniyedeki ölçüm sayısı hesaba katılmamış (2^{4} · 2^{6}).",
    "Bir çarpanı atlama: test süresi hesaba katılmamış (2^{4} · 2^{3}); bulunan değer yalnızca bir saniyelik veridir."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken taban aynı kalır, üsler toplanır: a^{n} · a^{m} = a^{n+m}.
Adım 1: Toplam ölçüm sayısını bul. Cihaz saniyede 2^{3} ölçüm yapıyor ve test 2^{6} saniye sürüyor: 2^{3} · 2^{6} = 2^{3+6} = 2^{9} ölçüm.
Adım 2: Her ölçüm 2^{4} bayt yer kapladığına göre toplam yeri bul: 2^{9} · 2^{4} = 2^{9+4} = 2^{13} bayt.
Sağlama: Üç değeri tek seferde çarp: 2^{4} · 2^{3} · 2^{6} = 2^{4+3+6} = 2^{13}. İki yol da aynı sonucu verir.
Sık yapılan hata: Üsleri çarpmak. Üsler yalnızca "üssün üssü" alınırken çarpılır: (a^{n})^{m} = a^{n·m}. Aynı tabanlı sayılar çarpılırken üsler toplanır.
Cevap B.`
},
{
  id: "mat-ui-307",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bilim müzesinde \"Bir Damla Suda Neler Var?\" adlı sergi açılmıştır. Serginin ortasında, yakındaki bir gölden getirilen suyla doldurulmuş büyük bir akvaryum bulunmaktadır. Akvaryumdaki su, gölden alındığı gibi hiç süzülmeden kullanılmıştır. Serginin girişindeki panoda bu suyla ilgili bilgiler yazmakta ve ziyaretçilerden akvaryumdaki toplam plankton sayısını tahmin etmeleri istenmektedir.\n**Buna göre akvaryumdaki toplam plankton sayısının bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 520 165" role="img" aria-label="Sergi panosu: 1 mL göl suyunda 4 çarpı 10 üssü 5 plankton, akvaryumda 2 çarpı 10 üssü 4 mL su"><rect x="18" y="16" width="484" height="132" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="18" y1="56" x2="502" y2="56" stroke="currentColor" stroke-width="2"/><text x="260" y="44" fill="var(--vurgu)" font-size="18" font-weight="bold" text-anchor="middle">SERGİ PANOSU</text><g fill="currentColor" font-size="17"><text x="42" y="92">1 mL göl suyunda ortalama 4 · 10<tspan font-size="14" dy="-8">5</tspan><tspan dy="8"> plankton bulunur.</tspan></text><text x="42" y="128">Akvaryumdaki su miktarı 2 · 10<tspan font-size="14" dy="-8">4</tspan><tspan dy="8"> mL'dir.</tspan></text></g></svg>`,
  secenekler: ["8 · 10^{1}", "2 · 10^{9}", "6 · 10^{9}", "8 · 10^{9}"],
  dogru: 3,
  hatalar: [
    "Çarpmada üsleri çıkarma: 10^{5} · 10^{4} için 5 − 4 = 1 alınmış; oysa çarpmada üsler toplanır.",
    "Baştaki sayıları çarpmak yerine bölme: 4 ÷ 2 = 2 alınmış.",
    "Baştaki sayıları çarpmak yerine toplama: 4 + 2 = 6 alınmış.",
    null
  ],
  aciklama: `Bilimsel gösterimdeki iki sayı çarpılırken baştaki sayılar kendi aralarında çarpılır, 10'un kuvvetlerinde ise üsler toplanır: (a · 10^{n}) · (b · 10^{m}) = (a · b) · 10^{n+m}.
Adım 1: Neyin çarpılacağını belirle. Her 1 mL'de 4 · 10^{5} plankton var ve toplam 2 · 10^{4} mL su var. Toplam plankton = (4 · 10^{5}) · (2 · 10^{4}).
Adım 2: Baştaki sayıları çarp: 4 · 2 = 8.
Adım 3: 10'un kuvvetlerini çarp: 10^{5} · 10^{4} = 10^{5+4} = 10^{9}.
Adım 4: Sonucu birleştir: 8 · 10^{9}. Baştaki 8 sayısı 1 ile 10 arasında olduğu için bu, bilimsel gösterimdir.
Sağlama: 4 · 10^{5} = 400 000 ve 2 · 10^{4} = 20 000'dir. 400 000 · 20 000 = 8 000 000 000 = 8 · 10^{9}.
Sık yapılan hata: Çarpma işleminde üsleri de çarpmak ya da çıkarmak. Aynı tabanlı çarpmada üsler her zaman toplanır.
Cevap D.`
},
{
  id: "mat-ui-308",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir tarım kooperatifi, deposundaki bir çuval buğday tohumunu üreticilere dağıtmak için poşetlere bölecektir. Bütün poşetlere eşit miktarda tohum konulacak ve çuvalda hiç tohum artmayacaktır. Kooperatifin kullandığı tartı yalnızca 2'nin kuvveti olan değerleri gösterdiğinden, bir poşete konulan tohum miktarı gram cinsinden 2'nin pozitif tam sayı kuvveti olmak zorundadır. Kooperatif ayrıca hem poşetlerin çok hafif kalmaması hem de yeterli sayıda üreticiye ulaşılması için iki alt sınır belirlemiştir. Çuvaldaki tohum miktarı ve bu sınırlar tabloda verilmiştir.\n**Buna göre bir poşete konulacak tohum miktarı kaç farklı değer alabilir?**",
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Çuvaldaki tohum miktarı</td><td>2<sup>12</sup> gram</td></tr><tr><td>Bir poşetteki tohum en az</td><td>2<sup>3</sup> gram</td></tr><tr><td>Poşet sayısı en az</td><td>2<sup>4</sup></td></tr></table>`,
  secenekler: ["4", "5", "6", "7"],
  dogru: 2,
  hatalar: [
    "İki uç değeri de dışarıda bırakma: \"en az\" ifadesi sınırı da kapsar, bu yüzden 2^{3} gramlık ve 2^{8} gramlık poşetler de uygundur.",
    "Uç değerlerden birini dışarıda bırakma: \"en az 2^{3} gram\" koşulunda 2^{3} gram da geçerlidir.",
    null,
    "Poşet sayısı koşulunu atlama: 2^{9} gramlık poşette poşet sayısı 2^{3} olur ve bu, 2^{4}'ten azdır."
  ],
  aciklama: `Aynı tabanlı üslü sayılarda bölme yapılırken üsler çıkarılır: a^{n} ÷ a^{m} = a^{n−m}. Ayrıca tabanları 1'den büyük ve eşit olan iki üslü sayıda üssü büyük olan sayı daha büyüktür.
Adım 1: Bilinmeyeni adlandır. Bir poşetteki tohum 2^{k} gram olsun (k pozitif tam sayı).
Adım 2: Poşet sayısını yaz: 2^{12} ÷ 2^{k} = 2^{12−k}.
Adım 3: Birinci koşulu uygula. Poşetteki tohum en az 2^{3} gram olacağına göre 2^{k} sayısı 2^{3}'ten küçük olamaz; tabanlar aynı olduğu için k üssü de 3'ten küçük olamaz. En küçük k değeri 3'tür.
Adım 4: İkinci koşulu uygula. Poşet sayısı en az 2^{4} olacağına göre 12 − k üssü 4'ten küçük olamaz. Buna göre k en fazla 8 olabilir.
Adım 5: Uygun k değerlerini yaz: 3, 4, 5, 6, 7, 8. Toplam 6 farklı değer.
Sağlama: k = 3 için poşet 8 gram ve poşet sayısı 2^{9} = 512; k = 8 için poşet 256 gram ve poşet sayısı 2^{4} = 16. İki uç da koşulları sağlıyor.
Sık yapılan hata: "En az" sözünü sınırı dışlayacak biçimde okumak. "En az 2^{3} gram" demek, 2^{3} gramın da uygun olduğu anlamına gelir.
Cevap C.`
},
{
  id: "mat-ui-309",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir okulun robotik kulübü, katıldığı yarışmada çektiği kamera kaydını okulun bulut hesabına yüklemek istemektedir. Kaydın ilk boyutu bulutun izin verdiği sınırdan büyük olduğundan üyeler bir sıkıştırma programı kullanmaktadır. Program her çalıştırıldığında dosyanın boyutunu 2^{2} kat küçültmekte, elde edilen yeni dosya bir sonraki çalıştırmada yeniden sıkıştırılmaktadır. Her sıkıştırma görüntü kalitesini biraz düşürdüğü için üyeler programı gereğinden fazla çalıştırmak istememektedir. Dosyanın boyutu sınıra uyar uymaz yükleme yapılacaktır. Kaydın boyutu, sıkıştırma oranı ve bulutun sınırı görselde verilmiştir.\n**Buna göre program en az kaç kez çalıştırılmalıdır?**",
  gorsel: `<svg viewBox="0 0 520 160" role="img" aria-label="Kayıt boyutu 2 üssü 15 MB, her sıkıştırma 2 üssü 2 kat küçültür, bulut sınırı en fazla 2 üssü 5 MB"><rect x="18" y="16" width="484" height="128" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="17"><text x="42" y="52">Kamera kaydının boyutu: 2<tspan font-size="14" dy="-8">15</tspan><tspan dy="8"> MB</tspan></text><text x="42" y="90">Bir sıkıştırmanın küçültme oranı: 2<tspan font-size="14" dy="-8">2</tspan><tspan dy="8"> kat</tspan></text><text x="42" y="128">Bulutun izin verdiği boyut: en fazla 2<tspan font-size="14" dy="-8">5</tspan><tspan dy="8"> MB</tspan></text></g><g stroke="var(--vurgu)" stroke-width="3" fill="none"><path d="M430 106 q0 -22 20 -22 q4 -18 22 -18 q20 0 22 20 q14 2 14 16 q0 14 -16 14 h-48 q-14 0 -14 -10 z"/></g></svg>`,
  secenekler: ["4", "5", "6", "10"],
  dogru: 1,
  hatalar: [
    "Yeterli sayıda sıkıştırmama: 4 kez sıkıştırıldığında dosya 2^{7} MB olur ve bu, izin verilen 2^{5} MB'tan hâlâ büyüktür.",
    null,
    "Sınırı dışarıda bırakma: 5 kez sıkıştırmadan sonra dosya tam 2^{5} MB olur; \"en fazla 2^{5} MB\" koşulu sağlandığı için altıncı sıkıştırmaya gerek yoktur.",
    "Üssün üssü kuralını kullanmama: her sıkıştırmada üssün 2 değil 1 azaldığı sanılmış, 15 − n = 5 denkleminden 10 bulunmuş."
  ],
  aciklama: `Bir üslü sayı, aynı tabanlı başka bir üslü sayıya bölündüğünde üsler çıkarılır. Aynı işlem n kez yapılırsa bölen (a^{m})^{n} = a^{m·n} olur.
Adım 1: Bir sıkıştırmanın etkisini yaz. Dosya 2^{2} kat küçüldüğüne göre boyut 2^{2}'ye bölünür ve üs 2 azalır.
Adım 2: n kez sıkıştırmanın etkisini yaz: 2^{15} ÷ (2^{2})^{n} = 2^{15} ÷ 2^{2n} = 2^{15−2n}.
Adım 3: Sınır koşulunu kur: dosya en fazla 2^{5} MB olacak, yani 15 − 2n değeri 5'ten büyük olmamalı.
Adım 4: Değerleri sırayla dene. n = 3 → 2^{9} MB, n = 4 → 2^{7} MB, n = 5 → 2^{5} MB. İlk kez n = 5'te koşul sağlanır.
Sağlama: Boyutları tek tek yaz: 2^{15}, 2^{13}, 2^{11}, 2^{9}, 2^{7}, 2^{5}. Başlangıçtan sonra 5 adım vardır.
Sık yapılan hata: Her sıkıştırmada üssün 1 azaldığını sanmak. Dosya 2^{2} = 4 kat küçüldüğü için üs her seferinde 2 azalır.
Cevap B.`
},
{
  id: "mat-ui-310",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir okulun gök bilimi kulübü, gece gözlemlerinde incelediği bir yıldızın Dünya'ya uzaklığını hesaplamıştır. Üyeler bunun için, yıldızdan çıkan ışığın Dünya'ya ulaşması için geçen süreyi ve ışığın boşluktaki hızını kullanmıştır; kullandıkları değerler tabloda verilmiştir. Kulüp, bulduğu uzaklığı okul koridoruna asılacak bir panoya yazacaktır. Panonun tasarımını yapan üyeler, aynı sayının 10'un farklı kuvvetleriyle yazılmış biçimlerini yan yana göstermek istemiş ve dört ifade hazırlamıştır. Ancak bu ifadelerden biri yanlış yazılmıştır.\n**Buna göre aşağıdakilerden hangisi yıldızın kilometre cinsinden uzaklığına eşit __olamaz__?**",
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Işığın yıldızdan Dünya'ya yolculuk süresi</td><td>2,68 · 10<sup>8</sup> saniye</td></tr><tr><td>Işığın boşluktaki hızı</td><td>3 · 10<sup>5</sup> km/saniye</td></tr></table>`,
  secenekler: ["8040 · 10^{9}", "804 · 10^{11}", "80,4 · 10^{12}", "0,804 · 10^{14}"],
  dogru: 0,
  hatalar: [
    null,
    "Baştaki sayıyı 100 kat büyütüp üssü 2 azaltmanın değeri değiştirmediğini görememe: 804 · 10^{11} = 8,04 · 10^{13}'tür.",
    "Baştaki sayıyı 10 kat büyütüp üssü 1 azaltmanın değeri değiştirmediğini görememe: 80,4 · 10^{12} = 8,04 · 10^{13}'tür.",
    "Baştaki sayı 1'den küçük diye ifadeyi doğrudan eleme: 0,804 · 10^{14} = 8,04 · 10^{13}'tür."
  ],
  aciklama: `Bir sayı 10'un farklı tam sayı kuvvetleriyle yazılabilir. Baştaki sayı 10 kat büyütülürse 10'un üssü 1 azalmalı, 10 kat küçültülürse üs 1 artmalıdır. Ancak bu denge korunursa sayının değeri değişmez.
Adım 1: Uzaklığı hesapla. Yol = hız · süre olduğundan (3 · 10^{5}) · (2,68 · 10^{8}) işlemini yap.
Adım 2: Baştaki sayıları çarp: 3 · 2,68 = 8,04. Üsleri topla: 10^{5} · 10^{8} = 10^{13}. Uzaklık 8,04 · 10^{13} km'dir.
Adım 3: Şıkları denetle. 804 · 10^{11}: baştaki sayı 100 kat büyümüş, üs 2 azalmış → eşittir. 80,4 · 10^{12}: baştaki sayı 10 kat büyümüş, üs 1 azalmış → eşittir. 0,804 · 10^{14}: baştaki sayı 10 kat küçülmüş, üs 1 artmış → eşittir.
Adım 4: 8040 · 10^{9} ifadesinde baştaki sayı 8,04'ün 1000 katıdır; öyleyse üs 3 azalarak 10^{10} olmalıydı. Üs 4 azaltıldığı için bu ifade 8,04 · 10^{12}'ye eşittir, aranan uzaklığa değil.
Sağlama: 8040 · 10^{9} = 8 040 000 000 000, oysa uzaklık 80 400 000 000 000 km'dir. Aradaki fark 10 kattır.
Sık yapılan hata: Baştaki sayıyı kaydırırken üssü yanlış sayıda değiştirmek. Baştaki sayı kaç kez 10 ile çarpıldıysa üs o kadar azalmalıdır.
Cevap A.`
},
{
  id: "mat-ui-311",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir konserve fabrikasında koliler bant üzerinde ilerlerken bir makine tarafından etiketlenmektedir. Makine hiç durmadan hep aynı hızda çalışmakta ve yalnızca vardiya saatlerinde açık tutulmaktadır. Vardiyalar arasında makine kapatıldığı için o sürede hiçbir koli etiketlenmez. Fabrika, depoda bekleyen kolilerin tamamı etiketlendikten sonra sevkiyata başlayacaktır; koliler biterse son vardiyada makine erken durdurulabilmektedir. Makinenin saatteki hızı, bir vardiyanın kaç saat sürdüğü ve depoda bekleyen koli sayısı görselde verilmiştir.\n**Buna göre depodaki bütün kolilerin etiketlenmesi için en az kaç vardiya çalışılmalıdır?**",
  gorsel: `<svg viewBox="0 0 540 190" role="img" aria-label="Etiketleme bandı: makine saatte 3 üssü 4 koli etiketler, bir vardiya 3 üssü 2 saat, depoda 3 üssü 8 koli var"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="20" y1="92" x2="520" y2="92"/><circle cx="46" cy="106" r="14"/><circle cx="494" cy="106" r="14"/><rect x="90" y="58" width="34" height="34" fill="var(--dolgu)"/><rect x="146" y="58" width="34" height="34" fill="var(--dolgu)"/><rect x="202" y="58" width="34" height="34" fill="var(--dolgu)"/></g><rect x="268" y="30" width="112" height="62" rx="6" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="324" y="68" fill="currentColor" font-size="16" text-anchor="middle">ETİKETLEME</text><g fill="currentColor" font-size="16"><text x="20" y="142">Makinenin hızı: saatte 3<tspan font-size="14" dy="-7">4</tspan><tspan dy="7"> koli</tspan></text><text x="20" y="166">Bir vardiya: 3<tspan font-size="14" dy="-7">2</tspan><tspan dy="7"> saat</tspan></text><text x="300" y="166">Depodaki koli sayısı: 3<tspan font-size="14" dy="-7">8</tspan></text></g></svg>`,
  secenekler: ["81", "9", "2", "1"],
  dogru: 1,
  hatalar: [
    "Vardiyanın süresini hesaba katmama: yalnızca saatteki hız kullanılıp 3^{8} ÷ 3^{4} = 3^{4} = 81 bulunmuş; bu, gereken saat sayısıdır.",
    null,
    "Üs farkını cevabın kendisi sanma: 8 − 6 = 2 bulunmuş ama sonucun 3^{2} = 9 olduğu unutulmuş.",
    "Çarpmada üsleri çarpma: 3^{4} · 3^{2} = 3^{8} sanılmış, buradan 3^{8} ÷ 3^{8} = 1 bulunmuş."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken üsler toplanır (a^{n} · a^{m} = a^{n+m}), bölünürken üsler çıkarılır (a^{n} ÷ a^{m} = a^{n−m}).
Adım 1: Bir vardiyada etiketlenen koli sayısını bul. Makine saatte 3^{4} koli etiketliyor ve vardiya 3^{2} saat sürüyor: 3^{4} · 3^{2} = 3^{4+2} = 3^{6} koli.
Adım 2: Vardiya sayısını bul: 3^{8} ÷ 3^{6} = 3^{8−6} = 3^{2}.
Adım 3: Sonucu hesapla: 3^{2} = 9 vardiya.
Sağlama: Bir vardiyada 3^{6} = 729 koli etiketlenir. 9 · 729 = 6561 ve 3^{8} = 6561. Sayılar tam tutuyor, artan koli kalmıyor.
Sık yapılan hata: Bölme sonucunda çıkan üssü doğrudan cevap yazmak. 3^{2} ifadesinin değeri 2 değil 9'dur.
Cevap B.`
},
{
  id: "mat-ui-312",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir spor bilimi laboratuvarında, sporcuların bir antrenman boyunca terle kaybettiği magnezyum miktarı ölçülmektedir. Laboratuvarın ölçüm cihazı sonucu her zaman bilimsel gösterimle, yani baştaki sayı ile 10'un bir tam sayı kuvvetinin çarpımı biçiminde yazmaktadır. Laboratuvar yıllardır bütün ölçümleri kaydetmekte, bu kayıtlardaki en az ve en fazla değerleri de ayrıca saklamaktadır. Bugün ölçülen bir sporcunun sonucu da bu iki değerin dışına çıkmamıştır. Cihazın bu sporcu için yazdığı sonuç ve kayıtlardaki sınırlar tabloda verilmiştir; buradaki n bir tam sayıdır.\n**Buna göre n kaç farklı tam sayı değeri alabilir?**",
  gorsel: `<table class="tablo"><tr><th>Ölçüm</th><th>Değer</th></tr><tr><td>Cihazın yazdığı miktar</td><td>5 · 10<sup>n</sup> gram</td></tr><tr><td>Kayıtlardaki en az miktar</td><td>0,000 05 gram</td></tr><tr><td>Kayıtlardaki en fazla miktar</td><td>0,5 gram</td></tr></table>`,
  secenekler: ["3", "4", "5", "6"],
  dogru: 2,
  hatalar: [
    "İki sınırı da dışarıda bırakma: \"en az\" ve \"en fazla\" ifadeleri sınır değerlerin kendisini de kapsar.",
    "Sınırlardan birini dışarıda bırakma: hem 0,000 05 gram hem 0,5 gram değeri kayıtlara uygundur.",
    null,
    "n = 0 değerini de sayma: 5 · 10^{0} = 5 gram eder ve bu, en fazla miktar olan 0,5 gramdan büyüktür."
  ],
  aciklama: `Bilimsel gösterimde baştaki sayı sabit kalırken 10'un üssü 1 arttıkça sayı 10 kat büyür, 1 azaldıkça 10 kat küçülür. Bu yüzden sınır değerleri de aynı biçimde yazmak karşılaştırmayı kolaylaştırır.
Adım 1: Sınırları bilimsel gösterime çevir. 0,000 05 = 5 · 10^{−5} ve 0,5 = 5 · 10^{−1}.
Adım 2: Üç ifadenin de baştaki sayısı 5 olduğuna göre karşılaştırma yalnızca üslerle yapılır: 5 · 10^{−5} ile 5 · 10^{−1} arasında olmak, n üssünün −5 ile −1 arasında olması demektir.
Adım 3: Sınırların dâhil olup olmadığını belirle. "En az" ve "en fazla" ifadeleri sınırları da kapsar, bu yüzden n = −5 ve n = −1 de uygundur.
Adım 4: Uygun tam sayıları yaz: −5, −4, −3, −2, −1. Toplam 5 farklı değer.
Sağlama: n = −5 için 0,000 05 gram, n = −1 için 0,5 gram bulunur; ikisi de kayıtlara uyar. n = 0 için 5 gram bulunur ve bu, üst sınırı aşar.
Sık yapılan hata: Negatif üslerde büyüklüğü ters kurmak. −5 üssü −1 üssünden küçük olduğu için 5 · 10^{−5} sayısı 5 · 10^{−1} sayısından küçüktür.
Cevap C.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "mat-ui-001",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: "**(−3)^{3} işleminin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["27", "9", "−9", "−27"],
  dogru: 3,
  hatalar: [
    "Negatif tabanın tek kuvvetinde sonucun negatif kaldığını gözden kaçırma.",
    "Üçüncü çarpanı unutma: 9 sayısı (−3)^{2} işleminin sonucudur.",
    "Tabanı üsle çarpma: (−3) · 3 = −9 bulma; oysa üs, tabanın kaç kez çarpan olduğunu gösterir.",
    null
  ],
  aciklama: `Bir üslü ifadede taban, üs kadar kez kendisiyle çarpılır. Taban negatifse üs tek sayı olduğunda sonuç negatif, çift sayı olduğunda pozitif olur.
Adım 1: İfadeyi açık yaz: (−3)^{3} = (−3) · (−3) · (−3).
Adım 2: İlk iki çarpanı çarp: (−3) · (−3) = 9. İki negatif sayının çarpımı pozitiftir.
Adım 3: Kalan çarpanla çarp: 9 · (−3) = −27.
Sağlama: Çarpan sayısı 3, yani tek sayıdır; bu yüzden sonucun negatif çıkması beklenir.
Sık yapılan hata: (−3)^{3} ile −3^{3} ifadelerini karıştırmak. Parantez olduğunda eksi işareti de kuvvet alır.
Cevap D.`
},
{
  id: "mat-ui-002",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 1,
  soru: "**5^{7} ÷ 5^{4} işleminin sonucu aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["5^{3}", "25^{3}", "5^{11}", "5^{28}"],
  dogru: 0,
  hatalar: [
    null,
    "Bölmede tabanı da işleme sokma: tabanlar aynı olduğunda taban değişmez, yalnızca üsler çıkarılır.",
    "Bölmede üsleri toplama: 7 + 4 = 11 alınmış; toplama yalnızca çarpmada yapılır.",
    "Bölmede üsleri çarpma: 7 · 4 = 28 alınmış; çarpma yalnızca üssün üssü alınırken yapılır."
  ],
  aciklama: `Tabanları aynı olan iki üslü sayı bölünürken taban aynen yazılır, paydaki üsten paydadaki üs çıkarılır: a^{n} ÷ a^{m} = a^{n−m}.
Adım 1: Tabanların aynı olduğunu gör: ikisi de 5'tir.
Adım 2: Üsleri çıkar: 7 − 4 = 3.
Adım 3: Sonucu yaz: 5^{3}.
Sağlama: İfadeyi açık yaz: (5 · 5 · 5 · 5 · 5 · 5 · 5) ÷ (5 · 5 · 5 · 5). Paydadaki dört tane 5 sadeleşir, geriye üç tane 5 kalır: 5^{3}.
Sık yapılan hata: Bölmede üsleri toplamak ya da çarpmak. Bölmede üsler her zaman çıkarılır.
Cevap A.`
},
{
  id: "mat-ui-003",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 1,
  soru: "Bir mikroskop lamının kalınlığı 0,00046 metredir.\n**Buna göre bu kalınlığın bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["4,6 · 10^{4}", "4,6 · 10^{−3}", "4,6 · 10^{−4}", "4,6 · 10^{−5}"],
  dogru: 2,
  hatalar: [
    "1'den küçük sayılarda üssün negatif olması gerektiğini gözden kaçırma: 4,6 · 10^{4} = 46 000 eder.",
    "Virgülü bir basamak eksik kaydırma: 4,6 · 10^{−3} = 0,0046 eder.",
    null,
    "Virgülü bir basamak fazla kaydırma: 4,6 · 10^{−5} = 0,000046 eder."
  ],
  aciklama: `Bilimsel gösterim a · 10^{n} biçimindedir. Burada a sayısı 1 ile 10 arasında (1 dâhil), n ise bir tam sayıdır. 1'den küçük sayılarda n negatiftir.
Adım 1: Baştaki sayıyı belirle. Virgülü, 1 ile 10 arasında bir sayı elde edene kadar sağa kaydır: 0,00046 → 4,6.
Adım 2: Virgülü kaç basamak kaydırdığını say: 4 basamak.
Adım 3: Sayı 1'den küçük olduğu için üs negatiftir: 10^{−4}.
Adım 4: Sonucu yaz: 4,6 · 10^{−4}.
Sağlama: 4,6 · 10^{−4} = 4,6 ÷ 10 000 = 0,00046.
Sık yapılan hata: Kaydırma sayısını yanlış saymak. Virgülü kaç basamak kaydırdıysan üssün mutlak değeri o kadardır.
Cevap C.`
},
{
  id: "mat-ui-004",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 2,
  soru: "Şehirler arası çalışan bir otobüsün sürücüsü, her yolculuk bitiminde gidilen yolu deftere yazmaktadır. Son yolculukta gösterge ekranında görünen değer aşağıda verilmiştir.\n**Buna göre bu sayının çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 440 140" role="img" aria-label="Otobüs gösterge ekranı: 208,5 km"><rect x="20" y="18" width="400" height="104" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="220" y="52" fill="currentColor" font-size="16" text-anchor="middle">SON YOLCULUK</text><text x="220" y="100" fill="var(--vurgu)" font-size="38" font-weight="bold" text-anchor="middle">208,5 km</text></svg>`,
  secenekler: [
    "2 · 10^{3} + 8 · 10^{0} + 5 · 10^{−1}",
    "2 · 10^{2} + 8 · 10^{1} + 5 · 10^{−1}",
    "2 · 10^{2} + 8 · 10^{0} + 5 · 10^{1}",
    "2 · 10^{2} + 8 · 10^{0} + 5 · 10^{−1}"
  ],
  dogru: 3,
  hatalar: [
    "En soldaki rakamın basamak değerini bir fazla sayma: 208 sayısında 2 rakamı yüzler basamağındadır, binler basamağında değil.",
    "Sıfırı atlayıp 8 rakamını onlar basamağında sanma: 208 sayısının onlar basamağındaki rakam 0'dır, 8 ise birler basamağındadır.",
    "Ondalık kısımda negatif üs kullanmama: virgülden sonraki ilk basamak 10^{−1} değerindedir.",
    null
  ],
  aciklama: `Bir ondalık gösterimi çözümlemek, her rakamı basamak değeriyle çarpıp bu çarpımları toplamaktır. Soldan sağa doğru basamak değerleri 10^{2}, 10^{1}, 10^{0}, sonra virgül, ardından 10^{−1}, 10^{−2}… biçiminde gider.
Adım 1: Basamakları adlandır: 2 yüzler, 0 onlar, 8 birler, 5 onda birler basamağındadır.
Adım 2: Her rakamı basamak değeriyle çarp: 2 · 10^{2} + 0 · 10^{1} + 8 · 10^{0} + 5 · 10^{−1}.
Adım 3: Değeri 0 olan terim toplamı değiştirmediği için yazılmayabilir: 2 · 10^{2} + 8 · 10^{0} + 5 · 10^{−1}.
Sağlama: 200 + 8 + 0,5 = 208,5.
Sık yapılan hata: Sayının içindeki 0 rakamını atlayıp kalan rakamları yan yana kaydırmak. 0 yazılmasa bile onlar basamağı vardır ve 8 rakamı birler basamağında kalır.
Cevap D.`
},
{
  id: "mat-ui-005",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir gök bilimi yazılımı, teleskoptan gelen görüntüleri işlerken bir yıldızın parlaklık değerini (2^{3})^{4} ÷ 2^{5} işlemiyle hesaplamaktadır. Ekranda sonuç, 2'nin bir kuvveti olarak gösterilmektedir.\n**Buna göre ekranda görünen değer aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2^{7}", "2^{12}", "2^{17}", "2^{60}"],
  dogru: 0,
  hatalar: [
    null,
    "Son adımı atlama: (2^{3})^{4} = 2^{12} bulunmuş ama 2^{5}'e bölme yapılmamış.",
    "Bölmede üsleri toplama: 12 + 5 = 17 alınmış.",
    "Bölmede üsleri çarpma: 12 · 5 = 60 alınmış."
  ],
  aciklama: `Bir üslü sayının kuvveti alınırken taban aynı kalır, üsler çarpılır: (a^{n})^{m} = a^{n·m}. Aynı tabanlı sayılar bölünürken ise üsler çıkarılır: a^{n} ÷ a^{m} = a^{n−m}.
Adım 1: Parantezli kısmı çöz: (2^{3})^{4} = 2^{3·4} = 2^{12}.
Adım 2: Bölme işlemini yap: 2^{12} ÷ 2^{5} = 2^{12−5} = 2^{7}.
Sağlama: 2^{7} · 2^{5} = 2^{12}; bölmenin sonucu bölenle çarpılınca bölünen elde ediliyor.
Sık yapılan hata: Üssün üssü ile çarpmayı karıştırmak. Üssün üssünde üsler çarpılır, aynı tabanlı çarpmada toplanır, bölmede çıkarılır.
Cevap A.`
},
{
  id: "mat-ui-006",
  kazanim: "M.8.1.2.4",
  kademe: 0,
  zorluk: 2,
  soru: "Bir vida fabrikası her gün 8 · 10^{4} vida üretmektedir ve haftada 6 gün çalışmaktadır. Fabrikanın üretim raporunda bütün sayılar 10^{3} adet, yani \"bin adet\" birimiyle yazılmaktadır.\n**Buna göre bir haftalık üretim rapora hangi sayı ile yazılır?**",
  gorsel: null,
  secenekler: ["480", "4800", "48 000", "480 000"],
  dogru: 0,
  hatalar: [
    null,
    "Baştaki sayıyı 10 kat fazla büyütme: 4800 · 10^{3} = 4 800 000 eder.",
    "Baştaki sayıyı 100 kat fazla büyütme: 48 000 · 10^{3} = 48 000 000 eder.",
    "Rapor birimini gözden kaçırıp üretimin tamamını yazma: 480 000 sayısı 10^{3} biriminde değil, doğrudan adet olarak yazılmıştır."
  ],
  aciklama: `Bir sayı, 10'un farklı tam sayı kuvvetleri kullanılarak birçok biçimde yazılabilir. Baştaki sayı 10 kat büyütülürse 10'un üssü 1 azalmalıdır; böylece sayının değeri korunur.
Adım 1: Haftalık üretimi bul: (8 · 10^{4}) · 6 = 48 · 10^{4} adet.
Adım 2: Sayıyı açık yaz: 48 · 10^{4} = 48 · 10 000 = 480 000 adet.
Adım 3: Rapor birimini uygula. Sayı 10^{3} ile çarpılmış biçimde yazılacaktır: 480 000 = 480 · 1000 = 480 · 10^{3}.
Adım 4: Rapora baştaki sayı yazılır: 480.
Sağlama: 480 · 10^{3} = 480 000 = 4,8 · 10^{5}. Üç gösterim de aynı sayıdır.
Sık yapılan hata: Baştaki sayıyı büyütürken üssü de aynı oranda azaltmamak. 48 sayısı 10 kat büyüyüp 480 olduysa üs 1 azalıp 10^{3} olmalıdır.
Cevap A.`
},
{
  id: "mat-ui-007",
  kazanim: "M.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: "Bir spor hekimi, bir sporcunun içtiği bir bardak maden suyundan aldığı demir miktarını 10^{−5} gram olarak ölçmüştür. Sporcunun gün boyunca beslenmeyle aldığı demir miktarı ise bunun 10^{3} katıdır.\n**Buna göre sporcunun gün boyunca aldığı demir kaç gramdır?**",
  gorsel: null,
  secenekler: ["10^{−15}", "10^{−8}", "3 · 10^{−5}", "10^{−2}"],
  dogru: 3,
  hatalar: [
    "Çarpmada üsleri çarpma: (−5) · 3 = −15 alınmış.",
    "Çarpmada üsleri çıkarma: −5 − 3 = −8 alınmış; oysa çarpmada üsler toplanır.",
    "10^{3} katını 3 katı sanma: 10^{3} sayısı 3 değil 1000'dir.",
    null
  ],
  aciklama: `Tabanları aynı olan iki üslü sayı çarpılırken taban aynı kalır, üsler toplanır: a^{n} · a^{m} = a^{n+m}. Bu kural üsler negatifken de geçerlidir.
Adım 1: İşlemi kur. "10^{3} katı" demek 10^{3} ile çarpmak demektir: 10^{−5} · 10^{3}.
Adım 2: Üsleri topla: (−5) + 3 = −2.
Adım 3: Sonucu yaz: 10^{−2} gram, yani 0,01 gram.
Sağlama: 10^{−5} = 0,00001 gramdır. Bunun 1000 katı 0,01 gramdır.
Sık yapılan hata: Negatif üslerle işlem yaparken üsleri çarpmak. Çarpma işleminde üsler her zaman toplanır; toplarken işaretlere dikkat edilir.
Cevap D.`
},
{
  id: "mat-ui-008",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 3,
  soru: "Adalar arasında çalışan bir feribot şirketi, geçen yılın sonunda bir bilgilendirme tablosu yayımlamıştır. Tabloda şirketin bir yılda yaptığı sefer sayısı, bir seferde taşıdığı ortalama yolcu sayısı ve bir yolcudan aldığı bilet ücreti yer almaktadır. Bütün seferler yıl boyunca aynı hatta yapılmış, bütün yolcular aynı ücreti ödemiştir. Şirketin geliri yalnızca bilet satışından gelmektedir.\n**Buna göre şirketin bir yıllık geliri kaç TL'dir?**",
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Bir yıldaki sefer sayısı</td><td>3 · 10<sup>4</sup></td></tr><tr><td>Bir seferdeki ortalama yolcu</td><td>5 · 10<sup>2</sup></td></tr><tr><td>Bir yolcunun bilet ücreti</td><td>2 · 10<sup>1</sup> TL</td></tr></table>`,
  secenekler: ["3 · 10^{8}", "1,5 · 10^{8}", "3 · 10^{7}", "1,5 · 10^{7}"],
  dogru: 0,
  hatalar: [
    null,
    "Baştaki sayıları çarpmayı unutma: yolcu sayısı bilet ücretiyle çarpılırken yalnızca 10'un üsleri toplanmış, 1,5 ile 2 çarpılmamış.",
    "Bilet ücretini 2 · 10^{1} = 20 TL yerine 2 TL alma.",
    "Ara sonucu cevap sanma: 1,5 · 10^{7} bir yıldaki yolcu sayısıdır, gelir değildir."
  ],
  aciklama: `Bilimsel gösterimdeki sayılar çarpılırken baştaki sayılar kendi aralarında çarpılır, 10'un kuvvetlerinde üsler toplanır: (a · 10^{n}) · (b · 10^{m}) = (a · b) · 10^{n+m}.
Adım 1: Bir yıldaki yolcu sayısını bul: (3 · 10^{4}) · (5 · 10^{2}) = (3 · 5) · 10^{4+2} = 15 · 10^{6}.
Adım 2: Sonucu bilimsel gösterime çevir: 15 · 10^{6} = 1,5 · 10^{7} yolcu.
Adım 3: Geliri bul: (1,5 · 10^{7}) · (2 · 10^{1}) = (1,5 · 2) · 10^{7+1} = 3 · 10^{8} TL.
Sağlama: 3 · 10^{8} = 300 000 000 TL. Kontrol: 15 000 000 yolcu · 20 TL = 300 000 000 TL.
Sık yapılan hata: Yolcu sayısını bulunca durmak. Soru geliri istiyor, bu yüzden bir çarpma daha gerekir.
Cevap A.`
},
{
  id: "mat-ui-009",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: "Bir doğa kampında bütün çadırlar aynı sayıda kişi almakta ve kamptaki her katılımcıya günde eşit miktarda içme suyu verilmektedir. Kampın kurulduğu alanda çeşme bulunmadığından içme suyu, hepsi aynı hacimde olan bidonlarla dışarıdan taşınmaktadır. Kamp sorumlusu her sabah o gün gerekecek bidon sayısını hesaplayıp suyu bir kamyonetle getirtmektedir. Kampla ilgili veriler tabloda gösterilmiştir.\n**Buna göre bir günlük içme suyu için kampa kaç bidon taşınmalıdır?**",
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Bir çadırdaki kişi sayısı</td><td>3<sup>2</sup></td></tr><tr><td>Çadır sayısı</td><td>3<sup>3</sup></td></tr><tr><td>Kişi başına günlük su</td><td>3 litre</td></tr><tr><td>Bir bidonun hacmi</td><td>3<sup>2</sup> litre</td></tr></table>`,
  secenekler: ["3^{8}", "3^{6}", "3^{4}", "3^{3}"],
  dogru: 2,
  hatalar: [
    "Bölmede üsleri toplama: 6 + 2 = 8 alınmış; oysa bölmede üsler çıkarılır.",
    "Ara sonucu cevap sanma: 3^{6} bir günde içilen toplam su miktarıdır (litre), bidon sayısı değildir.",
    null,
    "Kişi başına düşen su miktarını hesaba katmama: kişi sayısı 3^{5} bulunup doğrudan bidon hacmine bölünmüş."
  ],
  aciklama: `Aynı tabanlı üslü sayılar çarpılırken üsler toplanır (a^{n} · a^{m} = a^{n+m}), bölünürken üsler çıkarılır (a^{n} ÷ a^{m} = a^{n−m}).
Adım 1: Kamptaki kişi sayısını bul: 3^{2} · 3^{3} = 3^{2+3} = 3^{5} kişi.
Adım 2: Günlük toplam su miktarını bul. Kişi başına 3 litre, yani 3^{1} litre verildiğine göre 3^{5} · 3^{1} = 3^{5+1} = 3^{6} litre su gerekir.
Adım 3: Bidon sayısını bul: 3^{6} ÷ 3^{2} = 3^{6−2} = 3^{4}.
Adım 4: Sonucu sayıya çevir: 3^{4} = 81 bidon.
Sağlama: Kampta 3^{5} = 243 kişi vardır ve 243 · 3 = 729 litre su içilir. 729 ÷ 9 = 81 bidon eder.
Sık yapılan hata: Toplam su miktarını bulunca durmak. Soru litre değil bidon sayısını istiyor.
Cevap C.`
},
{
  id: "mat-ui-010",
  kazanim: "M.8.1.2.3",
  kademe: 0,
  zorluk: 3,
  soru: "Bir müzenin madeni paralar bölümünde her paranın kütlesi, vitrin etiketine çözümlenmiş biçimde yazılmaktadır. Müze bu yazımı, ziyaretçilerin basamak değerlerini fark etmesi için özellikle seçmiştir. Müzenin telefondan kullanılan dijital rehberinde ise aynı kütleler, okunması kolay olsun diye ondalık gösterimle verilmektedir. Sergideki bir gümüş paranın vitrin etiketi aşağıda gösterilmiştir.\n**Buna göre bu paranın kütlesi dijital rehberde nasıl yazılır?**",
  gorsel: `<svg viewBox="0 0 540 150" role="img" aria-label="Müze etiketi: kütle 2 çarpı 10 üssü 1 artı 8 çarpı 10 üssü 0 artı 5 çarpı 10 üssü eksi 1 artı 3 çarpı 10 üssü eksi 3 gram"><rect x="18" y="16" width="504" height="118" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><line x1="18" y1="56" x2="522" y2="56" stroke="currentColor" stroke-width="2"/><text x="270" y="44" fill="var(--vurgu)" font-size="17" font-weight="bold" text-anchor="middle">GÜMÜŞ PARA — ETİKET</text><text x="34" y="100" fill="currentColor" font-size="17">Kütle: 2 · 10<tspan font-size="14" dy="-8">1</tspan><tspan dy="8"> + 8 · 10</tspan><tspan font-size="14" dy="-8">0</tspan><tspan dy="8"> + 5 · 10</tspan><tspan font-size="14" dy="-8">−1</tspan><tspan dy="8"> + 3 · 10</tspan><tspan font-size="14" dy="-8">−3</tspan><tspan dy="8"> gram</tspan></text></svg>`,
  secenekler: ["28,053", "28,503", "28,53", "285,3"],
  dogru: 1,
  hatalar: [
    "Basamakları bir sağa kaydırma: 5 rakamı onda birler, 3 rakamı binde birler basamağındadır.",
    null,
    "Eksik basamağa 0 yazmayı unutma: etikette 10^{−2} terimi bulunmadığı için yüzde birler basamağına 0 yazılmalıdır.",
    "Negatif üslü terimleri tam sayı basamağı sanma: 10^{−1} ve 10^{−3} virgülden sonraki basamakları gösterir."
  ],
  aciklama: `Çözümlenmiş bir ifadeyi ondalık gösterime çevirmek için her terimin hangi basamağa ait olduğu bulunur ve o basamağa terimin başındaki rakam yazılır. Eksik kalan basamaklara 0 yazılır.
Adım 1: Terimleri basamaklara yerleştir. 2 · 10^{1} → onlar basamağı 2. 8 · 10^{0} → birler basamağı 8. 5 · 10^{−1} → onda birler basamağı 5. 3 · 10^{−3} → binde birler basamağı 3.
Adım 2: Eksik basamağı bul. Etikette 10^{−2} terimi yoktur, öyleyse yüzde birler basamağı 0'dır.
Adım 3: Basamakları sırayla yaz: onlar 2, birler 8, virgül, onda birler 5, yüzde birler 0, binde birler 3 → 28,503.
Sağlama: 20 + 8 + 0,5 + 0,003 = 28,503.
Sık yapılan hata: Yazılmayan terimi yok saymak ve 3 rakamını yüzde birler basamağına kaydırıp 28,53 yazmak. Bir terim yazılmamışsa o basamakta 0 vardır.
Cevap B.`
},
{
  id: "mat-ui-011",
  kazanim: "M.8.1.2.2",
  kademe: 0,
  zorluk: 4,
  soru: "Bir güvenlik kamerası, kaydettiği görüntüleri belleğine eşit büyüklükte bloklar hâlinde yazmaktadır. Belleğin yarısı kameranın kendi sistem yazılımına ayrılmıştır ve bu bölüme hiçbir görüntü yazılamaz. Kalan boş alanın tamamı görüntü bloklarıyla doldurulacak, bellek dolduğunda kamera yöneticiyi uyaracaktır. Yönetici belleği boşaltmadıkça eski bloklar silinmemekte, bir bloğa sığmayan artık görüntü ise hiç kaydedilmemektedir. Belleğin büyüklüğü ile bir görüntü bloğunun büyüklüğü, kullanma kılavuzunda 4'ün kuvvetleri biçiminde yazılmıştır; bu değerler tabloda verilmiştir.\n**Buna göre bellekte en fazla kaç blok görüntü saklanabilir?**",
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Belleğin büyüklüğü</td><td>4<sup>10</sup> KB</td></tr><tr><td>Sistem yazılımına ayrılan bölüm</td><td>Belleğin yarısı</td></tr><tr><td>Bir görüntü bloğu</td><td>4<sup>4</sup> KB</td></tr></table>`,
  secenekler: ["2^{27}", "2^{15}", "2^{12}", "2^{11}"],
  dogru: 3,
  hatalar: [
    "Bölmede üsleri toplama: 19 + 8 = 27 alınmış; oysa bölmede üsler çıkarılır.",
    "Tabanı 2 yaparken üssü olduğu gibi bırakma: 4^{4} = (2^{2})^{4} = 2^{8} yerine 4^{4} = 2^{4} sanılmış.",
    "Sistem yazılımına ayrılan yarıyı hesaba katmama: belleğin tamamı boş sanılıp 2^{20} ÷ 2^{8} = 2^{12} bulunmuş.",
    null
  ],
  aciklama: `Tabanı farklı üslü sayıları karşılaştırmak için önce hepsini aynı tabana çevirmek gerekir. Bunun için (a^{n})^{m} = a^{n·m} kuralı kullanılır.
Adım 1: Belleğin büyüklüğünü 2 tabanında yaz: 4^{10} = (2^{2})^{10} = 2^{2·10} = 2^{20} KB.
Adım 2: Boş alanı bul. Belleğin yarısı yazılıma ayrıldığına göre boş alan da belleğin yarısıdır: 2^{20} ÷ 2 = 2^{20−1} = 2^{19} KB.
Adım 3: Bir bloğun büyüklüğünü 2 tabanında yaz: 4^{4} = (2^{2})^{4} = 2^{2·4} = 2^{8} KB.
Adım 4: Blok sayısını bul: 2^{19} ÷ 2^{8} = 2^{19−8} = 2^{11}.
Sağlama: 2^{11} = 2048 blok. Her blok 2^{8} = 256 KB olduğuna göre 2048 · 256 = 524 288 KB yer kaplar ve bu, 2^{19} KB'ın tam karşılığıdır.
Sık yapılan hata: 4^{10} ifadesini 2^{10} sanmak. Taban 4'ten 2'ye inerken üs iki katına çıkar, çünkü 4 = 2^{2}'dir.
Cevap D.`
},
{
  id: "mat-ui-012",
  kazanim: "M.8.1.2.5",
  kademe: 0,
  zorluk: 4,
  soru: "Bir tarım araştırma merkezinde, tek bir gübre granülünü tartmak çok zor olduğundan granül kütleleri paketler üzerinden hesaplanmaktadır. İncelenen gübrenin bütün granülleri eşit kütlededir ve paketlerin ambalaj kütlesi göz ardı edilmektedir. Merkezdeki A paketinin içindeki granüller tek tek sayılmış, paketin toplam kütlesi de hassas terazide ölçülmüştür. B paketi ise yalnızca tartılmış, içindeki granüller sayılmamıştır. İki paketle ilgili bilgiler tabloda verilmiştir.\n**Buna göre B paketinde en fazla kaç granül bulunabilir?**",
  gorsel: `<table class="tablo"><tr><th>Paket</th><th>Granül sayısı</th><th>Toplam kütle</th></tr><tr><td>A</td><td>2 · 10<sup>3</sup></td><td>6 · 10<sup>−1</sup> gram</td></tr><tr><td>B</td><td>?</td><td>1,5 gram</td></tr></table>`,
  secenekler: ["5 · 10^{2}", "5 · 10^{3}", "2 · 10^{4}", "5 · 10^{4}"],
  dogru: 1,
  hatalar: [
    "Birinci bölmede üsleri çıkarırken bir birim şaşırma: bir tohumun kütlesi 3 · 10^{−4} yerine 3 · 10^{−3} gram bulunmuş.",
    null,
    "İkinci bölmede baştaki sayıları ters bölme: 1,5 ÷ 3 = 0,5 yerine 3 ÷ 1,5 = 2 alınmış.",
    "Baştaki sayıyı 0,5'ten 5'e büyütürken 10'un üssünü 1 azaltmayı unutma: 0,5 · 10^{4} yerine 5 · 10^{4} yazılmış."
  ],
  aciklama: `Bilimsel gösterimdeki sayılar bölünürken baştaki sayılar kendi aralarında bölünür, 10'un kuvvetlerinde üsler çıkarılır: (a · 10^{n}) ÷ (b · 10^{m}) = (a ÷ b) · 10^{n−m}.
Adım 1: Bir granülün kütlesini A paketinden bul: (6 · 10^{−1}) ÷ (2 · 10^{3}) işleminde 6 ÷ 2 = 3 ve (−1) − 3 = −4'tür. Bir granül 3 · 10^{−4} gramdır.
Adım 2: B paketinin kütlesini bilimsel gösterime hazırla: 1,5 gram = 1,5 · 10^{0} gram.
Adım 3: Granül sayısını bul: (1,5 · 10^{0}) ÷ (3 · 10^{−4}) işleminde 1,5 ÷ 3 = 0,5 ve 0 − (−4) = 4'tür. Sonuç 0,5 · 10^{4}'tür.
Adım 4: Bilimsel gösterime çevir: baştaki sayı 10 kat büyütülüp 5 yapılırsa üs 1 azalır: 0,5 · 10^{4} = 5 · 10^{3} = 5000 granül.
Sağlama: 5000 granül · 0,0003 gram = 1,5 gram. A paketi için de kontrol et: 2000 · 0,0003 = 0,6 gram = 6 · 10^{−1} gram.
Sık yapılan hata: Sonucu bilimsel gösterime çevirirken baştaki sayıyı büyütüp üssü olduğu gibi bırakmak. 0,5 sayısı 10 kat büyütülüp 5 yapıldıysa üs 1 azalmalı ve 10^{3} olmalıdır.
Cevap B.`
}
);
