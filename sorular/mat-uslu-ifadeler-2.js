// Matematik — Üslü İfadeler: Kademe 3 (LGS Ayarı) ve Havuz
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["uslu-ifadeler"] = window.LGS_BANK["uslu-ifadeler"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "mat-ui-301",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir uzay aracına Dünya'daki denetim merkezinden komut gönderilir. Araç komutu alır almaz Dünya'ya bir yanıt sinyali yollar. Komutun gidişi ile yanıtın dönüşü için geçen sürelerin toplamına \"tur süresi\" denir. Aracın Dünya'ya uzaklığı ile sinyalin boşluktaki hızı aşağıda verilmiştir.\n**Buna göre bir komutun tur süresi kaç dakikadır?**",
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
  soru: "Bir okulun bilişim kulübü, ders videolarını yedeklemek için yeni bir disk almıştır. Diskin kapasitesi ile bir videonun kapladığı yer aşağıdaki etikette verilmiştir. Bilgisayarlarda 1 TB = 2^{10} GB ve 1 GB = 2^{10} MB'tır.\n**Diske bu videolardan en fazla kaç tane sığar?**",
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
  soru: "Kargo kuryesi Sinan, elektrikli motosikletiyle yaptığı dağıtımlarda gittiği yolu ekranından takip etmektedir. Sabah ve akşam turlarında gittiği yollar ekran görüntülerinde verilmiştir.\n**Sinan'ın gün boyunca gittiği toplam yolun kilometre cinsinden çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
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
}
);
