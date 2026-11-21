// Görsel ve Grafik Okuma — 2. dosya: Kademe 3 (LGS Ayarı, tur-gg-301…325) ve havuz (kademe 0, tur-gg-001…015).
// Kazanımlar: T.8.3.27 (afiş, karikatür, çizgi roman, bilgi görseli) · T.8.3.32 (grafik, tablo, çizelge).
// Grafiklerdeki çubuk ve nokta konumları eksen ölçeğinden hesaplanmıştır; her değer etiketiyle birebir tutar.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["gorsel-grafik-okuma"] = window.LGS_BANK["gorsel-grafik-okuma"] || []).push(
{
  id: "tur-gg-301",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir semt pazarında sebze satan Hasan Amca, iki hafta boyunca tezgâhından satılan sebzeleri tartmış ve sonuçları aşağıdaki grafikte göstermiştir. Hasan Amca, gelecek hafta pazara hangi sebzeden ne kadar getireceğine bu verilere bakarak karar verecektir.
**Bu grafikten aşağıdaki yargıların hangisine ulaşılabilir?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Grafik: İki haftada satılan sebze miktarları"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: Tezgâhta satılan sebze miktarı (kg)</text><rect x="90" y="34" width="16" height="14" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="112" y="46" font-size="14" fill="currentColor">1. hafta</text><rect x="202" y="34" width="16" height="14" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="224" y="46" font-size="14" fill="currentColor">2. hafta</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="72" y1="234" x2="546" y2="234"/><line x1="72" y1="180" x2="546" y2="180"/><line x1="72" y1="126" x2="546" y2="126"/><line x1="72" y1="72" x2="546" y2="72"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="72" y1="64" x2="72" y2="288"/><line x1="72" y1="288" x2="546" y2="288"/></g><text x="66" y="293" font-size="14" text-anchor="end" fill="currentColor">0</text><text x="66" y="239" font-size="14" text-anchor="end" fill="currentColor">40</text><text x="66" y="185" font-size="14" text-anchor="end" fill="currentColor">80</text><text x="66" y="131" font-size="14" text-anchor="end" fill="currentColor">120</text><text x="66" y="77" font-size="14" text-anchor="end" fill="currentColor">160</text><rect x="88.6" y="126" width="40.7" height="162" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="108.9" y="120" font-size="14" text-anchor="middle" fill="currentColor">120</text><rect x="131.3" y="85.5" width="40.7" height="202.5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="151.6" y="79.5" font-size="14" text-anchor="middle" fill="currentColor">150</text><text x="131.3" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Domates</text><rect x="207.1" y="207" width="40.7" height="81" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="227.4" y="201" font-size="14" text-anchor="middle" fill="currentColor">60</text><rect x="249.8" y="166.5" width="40.7" height="121.5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="270.1" y="160.5" font-size="14" text-anchor="middle" fill="currentColor">90</text><text x="249.8" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Biber</text><rect x="325.6" y="234" width="40.7" height="54" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="345.9" y="228" font-size="14" text-anchor="middle" fill="currentColor">40</text><rect x="368.3" y="247.5" width="40.7" height="40.5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="388.6" y="241.5" font-size="14" text-anchor="middle" fill="currentColor">30</text><text x="368.3" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Patlıcan</text><rect x="444.1" y="180" width="40.7" height="108" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="464.4" y="174" font-size="14" text-anchor="middle" fill="currentColor">80</text><rect x="486.8" y="180" width="40.7" height="108" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="507.1" y="174" font-size="14" text-anchor="middle" fill="currentColor">80</text><text x="486.8" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Salatalık</text></svg>`,
  secenekler: [
    "Patlıcan satışı, pazardaki öteki tezgâhlarda da bu iki haftada azalmıştır.",
    "Biberde satılan miktardaki artış, domatesteki artıştan daha fazladır.",
    "Yalnızca salatalıkta satılan miktar iki haftada da aynı kalmıştır.",
    "İkinci hafta satılan miktar her sebzede bir önceki haftadan fazladır."
  ],
  dogru: 2,
  hatalar: [
    "Grafikte olmayan karşılaştırma: grafik yalnızca Hasan Amca'nın tezgâhını gösterir; öteki tezgâhlardaki satışlar hakkında hiçbir bilgi yoktur.",
    "Oranla miktarı karıştırma: biberdeki artış yüzde olarak büyük görünür ama miktar olarak domatesteki ile aynıdır (60 → 90 ve 120 → 150, ikisi de 30 kg).",
    null,
    "Aşırı genelleme: patlıcanda 40 → 30 kg düşüş, salatalıkta 80 → 80 kg sabitlik var; artış her sebzede görülmüyor."
  ],
  aciklama: `Grafik sorularında her şıkkı grafikteki sayılarla tek tek sına. Grafikte olmayan bir nedeni ya da yorumu içeren şıkka ulaşılamaz.
Adım 1: Her sebzede iki hafta arasındaki farkı bul. Domates 120 → 150 (+30), biber 60 → 90 (+30), patlıcan 40 → 30 (−10), salatalık 80 → 80 (değişmedi).
Adım 2: A'yı sına. Grafik yalnızca Hasan Amca'nın tezgâhını gösterir; pazardaki öteki tezgâhlar hakkında bilgi yoktur.
Adım 3: B'yi sına. İki sebzede de artış 30 kg'dır; biri ötekinden fazla değildir.
Adım 4: C'yi sına. Miktarı iki haftada aynı kalan tek sebze salatalıktır; bu yargıya ulaşılır.
Adım 5: D'yi sına. Patlıcanda azalma, salatalıkta sabitlik var; "her sebzede arttı" denemez.
Sık yapılan hata: Biberdeki artışı yüzdece büyük gördüğü için "daha fazla arttı" demek. Soru miktarı karşılaştırıyorsa miktarlara bak.
Cevap C.`
},
{
  id: "tur-gg-302",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ortaokulun koro öğretmeni, öğrencileriyle hazırladığı konseri duyurmak için aşağıdaki afişi okul panosuna asmıştır.
**Bu afişe göre aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: `<svg viewBox="0 0 560 250" role="img" aria-label="Okul korosunun bahar konseri afişi"><rect x="10" y="8" width="540" height="234" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><rect x="10" y="8" width="540" height="38" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="280" y="34" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">OKUL KOROSUNDAN BAHAR KONSERİ</text><text x="26" y="72" font-size="14" fill="currentColor">Tarih: 17 Nisan</text><text x="26" y="97" font-size="14" fill="currentColor">Saat: 11.00-13.00</text><text x="26" y="122" font-size="14" fill="currentColor">Yer: Okulun ön bahçesi</text><text x="26" y="147" font-size="14" fill="currentColor">Kimler izleyebilir? 6, 7 ve 8. sınıf öğrencileri ile velileri</text><text x="26" y="172" font-size="14" fill="currentColor">• Sandalyeler okul tarafından yerleştirilecektir.</text><text x="26" y="197" font-size="14" fill="currentColor">• Her izleyici güneşe karşı şapkasını getirmelidir.</text><text x="26" y="222" font-size="14" fill="currentColor">• Yağmur yağarsa konser 24 Nisan tarihine ertelenir.</text><g stroke="currentColor" stroke-width="2.5"><line x1="478" y1="140" x2="478" y2="80"/><line x1="508" y1="132" x2="508" y2="72"/><line x1="478" y1="80" x2="508" y2="72"/><line x1="478" y1="90" x2="508" y2="82"/></g><g fill="var(--vurgu)" stroke="currentColor" stroke-width="2"><ellipse cx="469" cy="141" rx="10" ry="7"/><ellipse cx="499" cy="133" rx="10" ry="7"/></g></svg>`,
  secenekler: [
    "Konseri izleyecek her öğrencinin yanında bir sandalye getirmesi gerekir.",
    "Hava yağmurlu olursa konser yedi gün sonra yapılacaktır.",
    "Okulun beşinci sınıf öğrencileri konsere izleyici olarak alınmaz.",
    "Konser öğleden önce başlayıp öğleden sonra sona erecek biçimdedir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tarihleri karşılaştırmama: konser 17 Nisan'dan 24 Nisan'a, yani yedi gün sonraya ertelenir; bu yargı söylenebilir.",
    "Katılımcı bilgisini gözden kaçırma: afiş izleyici olarak yalnızca 6, 7 ve 8. sınıfları ve velileri sayıyor; bu yargı söylenebilir.",
    "Saat aralığını okumama: 11.00'de başlayıp 13.00'te biten konser öğleyi geçer; bu yargı söylenebilir."
  ],
  aciklama: `"Söylenemez" kökünde afişte dayanağı olmayan ya da afişle çelişen yargı aranır. Dayanağı olan üç şık elenir.
Adım 1: A'yı sına. Afiş "Sandalyeler okul tarafından yerleştirilecektir." diyor. İzleyiciden istenen tek şey şapkadır. A afişle çelişir.
Adım 2: B'yi sına. 17 Nisan ile 24 Nisan arasında yedi gün vardır; söylenebilir.
Adım 3: C'yi sına. "Kimler izleyebilir?" satırında 5. sınıf yoktur; söylenebilir.
Adım 4: D'yi sına. 11.00 öğleden önce, 13.00 öğleden sonradır; söylenebilir.
Sık yapılan hata: Konserin açık havada olduğunu görüp oturacak yeri izleyicilerin getireceğini varsaymak. Afişin kurallar bölümünü satır satır oku.
Cevap A.`
},
{
  id: "tur-gg-303",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yayla köyünde pansiyon işleten bir aile, mayıs-ekim ayları arasında ağırladığı misafir sayısını aşağıdaki grafikte göstermiştir. Aile, gelecek yıl hangi aylarda yardımcı çalıştıracağını bu grafiğe bakarak planlayacaktır.
**Bu grafiğe göre aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Grafik: Mayıs-ekim arasında aylara göre misafir sayısı"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: Aylara göre misafir sayısı</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="72" y1="229" x2="546" y2="229"/><line x1="72" y1="170" x2="546" y2="170"/><line x1="72" y1="111" x2="546" y2="111"/><line x1="72" y1="52" x2="546" y2="52"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="72" y1="44" x2="72" y2="288"/><line x1="72" y1="288" x2="546" y2="288"/></g><text x="66" y="293" font-size="14" text-anchor="end" fill="currentColor">0</text><text x="66" y="234" font-size="14" text-anchor="end" fill="currentColor">50</text><text x="66" y="175" font-size="14" text-anchor="end" fill="currentColor">100</text><text x="66" y="116" font-size="14" text-anchor="end" fill="currentColor">150</text><text x="66" y="57" font-size="14" text-anchor="end" fill="currentColor">200</text><polyline points="111.5,240.8 190.5,181.8 269.5,99.2 348.5,75.6 427.5,158.2 506.5,229" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="111.5" cy="240.8" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="111.5" y="230.8" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">40</text><circle cx="190.5" cy="181.8" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="190.5" y="171.8" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">90</text><circle cx="269.5" cy="99.2" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="269.5" y="89.2" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">160</text><circle cx="348.5" cy="75.6" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="348.5" y="65.6" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">180</text><circle cx="427.5" cy="158.2" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="427.5" y="148.2" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">110</text><circle cx="506.5" cy="229" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="506.5" y="219" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">50</text><line x1="111.5" y1="288" x2="111.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="111.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Mayıs</text><line x1="190.5" y1="288" x2="190.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="190.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Haziran</text><line x1="269.5" y1="288" x2="269.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="269.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Temmuz</text><line x1="348.5" y1="288" x2="348.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="348.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Ağustos</text><line x1="427.5" y1="288" x2="427.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="427.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Eylül</text><line x1="506.5" y1="288" x2="506.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="506.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Ekim</text></svg>`,
  secenekler: [
    "Temmuzdaki misafir sayısı, mayıstaki misafir sayısının dört katıdır.",
    "Temmuz ile ağustos arasındaki artış, haziran ile temmuz arasındakinden fazladır.",
    "Ağustostan sonra misafir sayısı her ay bir önceki aya göre azalmıştır.",
    "Eylüldeki misafir sayısı, haziranda ağırlanan misafir sayısını geçmiştir."
  ],
  dogru: 1,
  hatalar: [
    "Hesabı yapmadan eleme: 40 × 4 = 160 eder; temmuzdaki sayı mayısın dört katıdır, bu yargı söylenebilir.",
    null,
    "Düşüşü sınamama: ağustos 180, eylül 110, ekim 50; her ay azalma var, bu yargı söylenebilir.",
    "Yaz aylarının hep kalabalık olduğunu varsayma: eylül 110, haziran 90 misafirdir; bu yargı söylenebilir."
  ],
  aciklama: `Adım 1: Grafikten değerleri oku: mayıs 40, haziran 90, temmuz 160, ağustos 180, eylül 110, ekim 50.
Adım 2: A'yı sına. 40 × 4 = 160; söylenebilir.
Adım 3: B'yi sına. Temmuz → ağustos artışı 180 − 160 = 20, haziran → temmuz artışı 160 − 90 = 70. İlki daha küçüktür; B söylenemez.
Adım 4: C'yi sına. 180 → 110 → 50; her ay azalma var, söylenebilir.
Adım 5: D'yi sına. 110 > 90; söylenebilir.
Sık yapılan hata: Çizginin en yüksek noktasına varılan aralığı en büyük artış sanmak. Artışı görmek için tepeye değil, çizginin en dik yükseldiği yere bak.
Cevap B.`
},
{
  id: "tur-gg-304",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki çizgi romanda dört arkadaşın birlikte hazırladığı bir grup projesinin başı, ortası ve sonu gösterilmiştir. Karelerde başı koyu renkle çizilen öğrenci hep aynı kişidir.
**Bu çizgi romanda asıl vurgulanan durum aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 560 236" role="img" aria-label="Üç karelik çizgi roman: grup projesinde görev dağılımı, tek başına çalışan öğrenci ve not töreni"><rect x="4" y="4" width="180" height="228" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="36" cy="167.5" r="8.3" fill="var(--vurgu2)"/><line x1="36" y1="175.8" x2="36" y2="202"/><line x1="36" y1="202" x2="27" y2="226"/><line x1="36" y1="202" x2="45" y2="226"/><line x1="36" y1="184" x2="25.5" y2="199"/><line x1="36" y1="184" x2="46.5" y2="199"/><path d="M32.3,169.8 Q36,173.5 39.8,169.8" stroke-width="1.5"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="76" cy="167.5" r="8.3" fill="var(--dolgu)"/><line x1="76" y1="175.8" x2="76" y2="202"/><line x1="76" y1="202" x2="67" y2="226"/><line x1="76" y1="202" x2="85" y2="226"/><line x1="76" y1="184" x2="65.5" y2="199"/><line x1="76" y1="184" x2="86.5" y2="199"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="116" cy="167.5" r="8.3" fill="var(--dolgu)"/><line x1="116" y1="175.8" x2="116" y2="202"/><line x1="116" y1="202" x2="107" y2="226"/><line x1="116" y1="202" x2="125" y2="226"/><line x1="116" y1="184" x2="105.5" y2="199"/><line x1="116" y1="184" x2="126.5" y2="199"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="156" cy="167.5" r="8.3" fill="var(--dolgu)"/><line x1="156" y1="175.8" x2="156" y2="202"/><line x1="156" y1="202" x2="147" y2="226"/><line x1="156" y1="202" x2="165" y2="226"/><line x1="156" y1="184" x2="145.5" y2="199"/><line x1="156" y1="184" x2="166.5" y2="199"/></g><rect x="12" y="14" width="123.6" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/><polyline points="29,62 36,156 43,62" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="22" y="34" font-size="14" fill="currentColor">Herkes bir</text><text x="22" y="52" font-size="14" fill="currentColor">bölümü yapsın!</text><rect x="190" y="4" width="180" height="228" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2"><rect x="296" y="138" width="48" height="32" fill="var(--dolgu)"/><line x1="320" y1="170" x2="320" y2="178"/><line x1="282" y1="178" x2="362" y2="178"/><line x1="288" y1="178" x2="288" y2="228"/><line x1="356" y1="178" x2="356" y2="228"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="248" cy="157.8" r="9.9" fill="var(--vurgu2)"/><line x1="248" y1="167.7" x2="248" y2="199.2"/><line x1="248" y1="199.2" x2="267.8" y2="199.2"/><line x1="267.8" y1="199.2" x2="267.8" y2="228"/><line x1="248" y1="177.6" x2="269.6" y2="183"/><line x1="248" y1="177.6" x2="267.8" y2="188.4"/><path d="M243.5,164.1 Q248,159.6 252.5,164.1" stroke-width="1.5"/></g><rect x="198" y="14" width="123.6" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/><polyline points="239,62 246,142 253,62" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="208" y="34" font-size="14" fill="currentColor">Diğerleri yine</text><text x="208" y="52" font-size="14" fill="currentColor">gelmedi.</text><rect x="376" y="4" width="180" height="228" fill="none" stroke="currentColor" stroke-width="2"/><rect x="436" y="12" width="114" height="30" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="493" y="32" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Proje notu: 100</text><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="404" cy="167.5" r="8.3" fill="var(--vurgu2)"/><line x1="404" y1="175.8" x2="404" y2="202"/><line x1="404" y1="202" x2="395" y2="226"/><line x1="404" y1="202" x2="413" y2="226"/><line x1="404" y1="184" x2="393.5" y2="199"/><line x1="404" y1="184" x2="414.5" y2="199"/><path d="M400.3,172.8 Q404,169 407.8,172.8" stroke-width="1.5"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="448" cy="167.5" r="8.3" fill="var(--dolgu)"/><line x1="448" y1="175.8" x2="448" y2="202"/><line x1="448" y1="202" x2="439" y2="226"/><line x1="448" y1="202" x2="457" y2="226"/><line x1="448" y1="184" x2="442" y2="155.5"/><line x1="448" y1="184" x2="454" y2="155.5"/><path d="M444.3,169.8 Q448,173.5 451.8,169.8" stroke-width="1.5"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="488" cy="167.5" r="8.3" fill="var(--dolgu)"/><line x1="488" y1="175.8" x2="488" y2="202"/><line x1="488" y1="202" x2="479" y2="226"/><line x1="488" y1="202" x2="497" y2="226"/><line x1="488" y1="184" x2="482" y2="155.5"/><line x1="488" y1="184" x2="494" y2="155.5"/><path d="M484.3,169.8 Q488,173.5 491.8,169.8" stroke-width="1.5"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="528" cy="167.5" r="8.3" fill="var(--dolgu)"/><line x1="528" y1="175.8" x2="528" y2="202"/><line x1="528" y1="202" x2="519" y2="226"/><line x1="528" y1="202" x2="537" y2="226"/><line x1="528" y1="184" x2="522" y2="155.5"/><line x1="528" y1="184" x2="534" y2="155.5"/><path d="M524.3,169.8 Q528,173.5 531.8,169.8" stroke-width="1.5"/></g><rect x="384" y="52" width="101.4" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/><polyline points="462.4,100 488,136 476.4,100" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="394" y="72" font-size="14" fill="currentColor">Hepimiz çok</text><text x="394" y="90" font-size="14" fill="currentColor">çalıştık!</text></svg>`,
  secenekler: [
    "Grup çalışmasında emeğin ve başarının adil paylaşılmaması",
    "Öğretmenin projeleri yeterince özenle değerlendirmemesi",
    "Grup projelerinin bireysel ödevlerden daha zor olması",
    "Arkadaşlar arasında hiçbir görev dağılımının yapılmaması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Görselde olmayan bilgi: öğretmen ve değerlendirme biçimi karelerde gösterilmiyor; yalnızca not tahtada yazıyor.",
    "Aşırı genelleme: çizgi roman grup projeleriyle bireysel ödevleri karşılaştırmıyor.",
    "Görseli ters okuma: ilk karede \"Herkes bir bölümü yapsın!\" denerek görev dağılımı yapılmıştır; sorun dağılımın uygulanmamasıdır."
  ],
  aciklama: `Çizgi romanda mesaj, kareler arasındaki değişimden çıkarılır. Her karede kimin ne yaptığını izle.
Adım 1: İlk kare: Başı koyu renkli öğrenci işi paylaştırıyor: "Herkes bir bölümü yapsın!"
Adım 2: İkinci kare: Aynı öğrenci masada tek başına çalışıyor ve "Diğerleri yine gelmedi." diyor. Görev dağılımı yapılmış ama uygulanmamış.
Adım 3: Üçüncü kare: Not 100. Çalışmayan üç arkadaş kollarını kaldırmış, "Hepimiz çok çalıştık!" diye seviniyor; asıl emeği veren öğrenci üzgün.
Adım 4: Mesajı adlandır: İş tek kişiye kalmış, başarı ise herkese paylaştırılmış. Emeğin ve başarının adil paylaşılmaması vurgulanıyor.
Sık yapılan hata: İlk karedeki görev dağılımını görmeden "görev dağılımı yapılmamış" sonucuna varmak.
Cevap A.`
},
{
  id: "tur-gg-305",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul, 38 öğrenci ve 4 öğretmenle bir bilim müzesine gezi düzenleyecektir. Otobüsün sabah 08.30'da okulun önünde hazır olması gerekmektedir. Okul yönetimi; bütün yolcuları tek araçla taşıyabilen ve belirtilen saatte ya da daha önce hazır olabilen firmalar arasından ücreti en düşük olanı seçecektir. Dört firmanın teklifleri aşağıdaki tabloda verilmiştir.
**Buna göre okul yönetimi hangi firmayı seçmelidir?**`,
  gorsel: `<table class="tablo"><tr><th>Firma</th><th>Koltuk sayısı</th><th>En erken hazır olma saati</th><th>Ücret (TL)</th></tr><tr><td>K</td><td>46</td><td>08.45</td><td>9.000</td></tr><tr><td>L</td><td>40</td><td>08.00</td><td>7.500</td></tr><tr><td>M</td><td>45</td><td>08.15</td><td>9.800</td></tr><tr><td>N</td><td>50</td><td>08.30</td><td>9.500</td></tr></table>`,
  secenekler: [
    "K firması",
    "L firması",
    "M firması",
    "N firması"
  ],
  dogru: 3,
  hatalar: [
    "Saat koşulunu atlama: K yeterli koltuğa ve düşük ücrete sahip ama en erken 08.45'te hazır olabildiği için 08.30'a yetişemez.",
    "Öğretmenleri saymama: yolcu sayısı 38 değil 38 + 4 = 42'dir; L'nin 40 koltuğu yetmez.",
    "Son karşılaştırmayı yanlış yapma: M de koşulları sağlar ama ücreti (9.800 TL) N'nin ücretinden (9.500 TL) yüksektir.",
    null
  ],
  aciklama: `Koşullu tablo sorularında önce koşulları sırayla uygula, eleneni çiz; en son kalanlar arasında karşılaştırma yap.
Adım 1: Yolcu sayısını bul: 38 öğrenci + 4 öğretmen = 42 kişi. L (40 koltuk) elenir.
Adım 2: Saat koşulunu uygula: 08.30'da ya da daha önce hazır olmalı. K (08.45) elenir. N tam 08.30'da hazırdır; "ya da daha önce" ifadesi 08.30'u da kapsar.
Adım 3: Kalan M (9.800 TL) ile N'yi (9.500 TL) karşılaştır. En düşük ücret N'dedir.
Sağlama: N'nin 50 koltuğu 42 kişiye yeter, saati 08.30'a uyar, ücreti koşulları sağlayanların en düşüğüdür.
Cevap D.`
},
{
  id: "tur-gg-306",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir belediyenin düzenlediği halk koşusuna 13 yaş ve üzerindeki 400 kişi katılmıştır. Koşu sonunda katılımcıların yaş gruplarına göre dağılımı aşağıdaki daire grafiğinde gösterilmiştir. Her katılımcı yalnızca bir yaş grubunda yer almaktadır.
**Bu grafiğe göre aşağıdaki yargılardan hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 310" role="img" aria-label="Grafik: Halk koşusuna katılanların yaş gruplarına göre dağılımı"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: Koşucuların yaş gruplarına göre dağılımı</text><path d="M170,170 L170,65 A105,105 0 0 1 202.4,269.9 Z" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="295.4" y="155.1" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">%45</text><path d="M170,170 L202.4,269.9 A105,105 0 0 1 65,170 Z" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="95.4" y="277.7" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">%30</text><path d="M170,170 L65,170 A105,105 0 0 1 108.3,85.1 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="56.8" y="117.3" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">%15</text><path d="M170,170 L108.3,85.1 A105,105 0 0 1 170,65 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="130.8" y="54.2" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">%10</text><rect x="350" y="108" width="16" height="14" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="372" y="120" font-size="14" fill="currentColor">18-35 yaş</text><rect x="350" y="134" width="16" height="14" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="372" y="146" font-size="14" fill="currentColor">13-17 yaş</text><rect x="350" y="160" width="16" height="14" fill="var(--dolgu)" stroke="currentColor" stroke-width="1"/><text x="372" y="172" font-size="14" fill="currentColor">36-60 yaş</text><rect x="350" y="186" width="16" height="14" fill="none" stroke="currentColor" stroke-width="1"/><text x="372" y="198" font-size="14" fill="currentColor">61 yaş ve üzeri</text></svg>`,
  secenekler: [
    "18-35 yaş grubundakiler, diğer üç grubun toplamından fazladır.",
    "13-17 yaş grubundakiler, 36-60 yaş grubundakilerin iki katıdır.",
    "Koşuya katılanların çoğu düzenli olarak spor yapan kişilerdir.",
    "61 yaş ve üzerindekiler, 36-60 yaş grubundakilerin yarısı kadardır."
  ],
  dogru: 1,
  hatalar: [
    "En büyük dilimi çoğunluk sanma: %45, geri kalan %55'ten azdır (180 kişiye karşı 220 kişi).",
    null,
    "Grafiği aşan yorum: grafik yalnızca yaş gruplarını gösterir; spor alışkanlığı hakkında bilgi yoktur.",
    "Oranı yanlış kurma: %10, %15'in yarısı değil üçte ikisidir (40 kişiye karşı 60 kişi)."
  ],
  aciklama: `Daire grafiğinde yüzdeler bütüne göredir. Sayıya geçmek için bütünü yüzdeyle çarp, 100'e böl.
Adım 1: Sayıları bul. 18-35 yaş: 400 × 45 ÷ 100 = 180; 13-17 yaş: 120; 36-60 yaş: 60; 61 ve üzeri: 40.
Adım 2: A'yı sına. Diğerlerinin toplamı 120 + 60 + 40 = 220; 180 bundan azdır.
Adım 3: B'yi sına. 120 = 2 × 60; doğru.
Adım 4: C'yi sına. Grafikte spor alışkanlığı yoktur.
Adım 5: D'yi sına. 40, 60'ın yarısı (30) değildir.
Sık yapılan hata: En büyük dilimi "çoğunluk" sanmak. Çoğunluk, yarıdan (%50'den) fazlası demektir.
Cevap B.`
},
{
  id: "tur-gg-307",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 3,
  soru: `Bir göl kenarındaki kano kiralama noktasında aşağıdaki bilgi görseli asılıdır. Kanolar yarım saatlik dilimler hâlinde kiralanmakta, ücret kanonun kullanıldığı süreye göre ödenmektedir.
**Bu bilgi görseline göre aşağıdakilerden hangisine __ulaşılamaz__?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Kano kiralama rehberi bilgi görseli"><text x="280" y="24" font-size="19" font-weight="bold" text-anchor="middle" fill="currentColor">KANO KİRALAMA REHBERİ</text><circle cx="34" cy="70" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="34" y="76" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">1</text><rect x="58" y="48" width="232" height="44" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="68" y="75" font-size="14" fill="currentColor">Can yeleğini giy.</text><circle cx="34" cy="128" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="34" y="134" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">2</text><rect x="58" y="106" width="232" height="44" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="68" y="133" font-size="14" fill="currentColor">Kürek çekmeyi görevliden öğren.</text><circle cx="34" cy="186" r="16" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="34" y="192" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">3</text><rect x="58" y="164" width="232" height="44" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="68" y="191" font-size="14" fill="currentColor">Kıyıdan fazla uzaklaşma.</text><rect x="306" y="48" width="244" height="160" rx="10" fill="none" stroke="var(--vurgu)" stroke-width="3"/><text x="428" y="76" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">ÜCRETLER</text><text x="320" y="110" font-size="14" fill="currentColor">İlk yarım saat: </text><text x="536" y="110" font-size="14" font-weight="bold" text-anchor="end" fill="currentColor">40 TL</text><text x="320" y="144" font-size="14" fill="currentColor">Sonraki her yarım saat: </text><text x="536" y="144" font-size="14" font-weight="bold" text-anchor="end" fill="currentColor">20 TL</text><text x="320" y="178" font-size="14" fill="currentColor">Bir günde en fazla: </text><text x="536" y="178" font-size="14" font-weight="bold" text-anchor="end" fill="currentColor">120 TL</text><rect x="10" y="228" width="540" height="88" rx="10" fill="none" stroke="var(--vurgu2)" stroke-width="3"/><text x="24" y="258" font-size="14" font-weight="bold" fill="currentColor">! 12 yaşından küçükler kanoya ancak bir yetişkinle binebilir.</text><text x="24" y="290" font-size="14" font-weight="bold" fill="currentColor">! Rüzgâr uyarısı verildiğinde kiralama durdurulur.</text></svg>`,
  secenekler: [
    "Kanoyu 1 saat kullanan kişi toplam 60 TL öder.",
    "10 yaşındaki bir çocuk kanoya tek başına binemez.",
    "Kanoyu 2 saat kullanan kişi toplam 120 TL öder.",
    "Kanoyu 5 saat kullanan kişi toplam 120 TL öder."
  ],
  dogru: 2,
  hatalar: [
    "Hesabı yapmadan eleme: 1 saat iki yarım saattir; 40 + 20 = 60 TL. Bu yargıya ulaşılır.",
    "Kuralı atlama: 12 yaşından küçükler ancak bir yetişkinle binebilir; 10 yaşındaki çocuk tek başına binemez. Bu yargıya ulaşılır.",
    null,
    "Üst sınırı atlama: 5 saat için 40 + 9 × 20 = 220 TL çıkar ama bir günde en fazla 120 TL ödenir. Bu yargıya ulaşılır."
  ],
  aciklama: `Ücret tablolarında önce süreyi dilimlere böl, sonra ilk dilimi ve sonraki dilimleri ayrı hesapla; en sonda üst sınırı uygula.
Adım 1: A: 1 saat = 2 yarım saat. İlk yarım saat 40, ikincisi 20 TL; toplam 60 TL. Ulaşılır.
Adım 2: B: 10 yaş, 12'den küçüktür; kanoya ancak bir yetişkinle binebilir. Ulaşılır.
Adım 3: C: 2 saat = 4 yarım saat. 40 + 3 × 20 = 100 TL. 120 TL değildir; ulaşılamaz.
Adım 4: D: 5 saat = 10 yarım saat. 40 + 9 × 20 = 220 TL; ama günlük üst sınır 120 TL olduğu için 120 TL ödenir. Ulaşılır.
Sık yapılan hata: Bütün yarım saatleri 40 TL'den ya da bütün dilimleri 20 TL'den hesaplamak. İlk dilim ile sonraki dilimlerin ücreti farklıdır.
Cevap C.`
},
{
  id: "tur-gg-308",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki karikatürde, deniz kenarında gün batımını izlemeye gelmiş bir grup insan çizilmiştir. Karikatürde hiçbir konuşma ya da yazı kullanılmamış, mesaj yalnızca çizimle verilmiştir.
**Bu karikatürde asıl eleştirilen durum aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 560 290" role="img" aria-label="Karikatür: gün batımını telefon ekranından izleyen kalabalık ve manzaraya bakan çocuk"><path d="M225,200 A55,55 0 0 1 335,200 Z" fill="var(--vurgu2)" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2"><line x1="222.8" y1="167" x2="207.3" y2="158"/><line x1="247" y1="142.8" x2="238" y2="127.3"/><line x1="280" y1="134" x2="280" y2="116"/><line x1="313" y1="142.8" x2="322" y2="127.3"/><line x1="337.2" y1="167" x2="352.7" y2="158"/></g><line x1="0" y1="200" x2="560" y2="200" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.6"><path d="M20,222 q15,-6 30,0 t30,0"/><path d="M430,230 q15,-6 30,0 t30,0"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="70" cy="204" r="11" fill="var(--dolgu)"/><line x1="70" y1="215" x2="70" y2="250"/><line x1="70" y1="250" x2="58" y2="282"/><line x1="70" y1="250" x2="82" y2="282"/><line x1="70" y1="226" x2="62" y2="188"/><line x1="70" y1="226" x2="78" y2="188"/></g><rect x="56" y="156" width="28" height="22" rx="3" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M63,174 A7,7 0 0 1 77,174 Z" fill="var(--vurgu2)"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="150" cy="204" r="11" fill="var(--dolgu)"/><line x1="150" y1="215" x2="150" y2="250"/><line x1="150" y1="250" x2="138" y2="282"/><line x1="150" y1="250" x2="162" y2="282"/><line x1="150" y1="226" x2="142" y2="188"/><line x1="150" y1="226" x2="158" y2="188"/></g><rect x="136" y="156" width="28" height="22" rx="3" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M143,174 A7,7 0 0 1 157,174 Z" fill="var(--vurgu2)"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="410" cy="204" r="11" fill="var(--dolgu)"/><line x1="410" y1="215" x2="410" y2="250"/><line x1="410" y1="250" x2="398" y2="282"/><line x1="410" y1="250" x2="422" y2="282"/><line x1="410" y1="226" x2="402" y2="188"/><line x1="410" y1="226" x2="418" y2="188"/></g><rect x="396" y="156" width="28" height="22" rx="3" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M403,174 A7,7 0 0 1 417,174 Z" fill="var(--vurgu2)"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="490" cy="204" r="11" fill="var(--dolgu)"/><line x1="490" y1="215" x2="490" y2="250"/><line x1="490" y1="250" x2="478" y2="282"/><line x1="490" y1="250" x2="502" y2="282"/><line x1="490" y1="226" x2="482" y2="188"/><line x1="490" y1="226" x2="498" y2="188"/></g><rect x="476" y="156" width="28" height="22" rx="3" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M483,174 A7,7 0 0 1 497,174 Z" fill="var(--vurgu2)"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="300" cy="227.4" r="7.7" fill="var(--dolgu)"/><line x1="300" y1="235.1" x2="300" y2="259.6"/><line x1="300" y1="259.6" x2="291.6" y2="282"/><line x1="300" y1="259.6" x2="308.4" y2="282"/><line x1="300" y1="242.8" x2="290.2" y2="256.8"/><line x1="300" y1="242.8" x2="309.8" y2="256.8"/><path d="M296.5,229.5 Q300,233 303.5,229.5" stroke-width="1.5"/></g></svg>`,
  secenekler: [
    "Doğa manzaralarının fotoğrafla tam anlatılamaması",
    "Çocukların teknolojiyi yetişkinlerden az kullanması",
    "Kalabalık yerlerde manzarayı görmenin zorlaşması",
    "Anı yaşamak yerine onu kaydetmeye odaklanılması"
  ],
  dogru: 3,
  hatalar: [
    "Görseli aşan yorum: karikatürde fotoğrafların yetersiz kaldığını gösteren bir öge yok; ekranlarda güneş zaten görünüyor.",
    "Ayrıntıdan genelleme: telefonsuz çocuk bir karşıtlık kurmak için çizilmiştir; çocuklarla yetişkinlerin teknoloji kullanımı karşılaştırılmıyor.",
    "Görselde var ama asıl mesaj değil: insanlar yan yana dursa da kimse manzarayı kapatmıyor; eleştiri kalabalığa değil, bakış biçimine.",
    null
  ],
  aciklama: `Karikatürde eleştiri çoğu zaman bir karşıtlıkla kurulur: çizerin "doğru" gördüğü davranış ile eleştirdiği davranış yan yana konur.
Adım 1: Kalabalığa bak. Yetişkinlerin hepsi kollarını kaldırmış, gün batımını telefon ekranından izliyor; ekranlarda küçük güneşler görünüyor.
Adım 2: Karşıtlığı bul. Aradaki küçük çocuğun elinde telefon yok, doğrudan güneşe bakıyor ve gülümsüyor.
Adım 3: Mesajı çıkar. Asıl manzara önlerinde dururken insanlar onu yaşamak yerine kaydetmekle meşgul. Eleştirilen budur.
Adım 4: Şıkları ele. A ve C'deki durumlar görselde gösterilmiyor; B ise çocuğun karşıtlık için çizildiğini gözden kaçırıp genelleme yapıyor.
Sık yapılan hata: Karikatürdeki her ayrıntıyı ayrı bir mesaj sanmak. Önce "çizer neyi neyle karşılaştırıyor?" sorusunu sor.
Cevap D.`
},
{
  id: "tur-gg-309",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Elif'in okulu hafta içi her gün 15.40'ta bitmektedir. Elif, okuldan ilçedeki müzik okuluna 30 dakikada ulaşabilmektedir. Salı ve perşembe günleri 17.00-18.00 saatleri arasında İngilizce kursuna gitmektedir. Elif, müzik okulundaki kurslardan okul saatiyle ve İngilizce kursuyla hiçbir gün çakışmayan birine yazılmak istemektedir. Müzik okulunun haftalık kurs programı aşağıdaki çizelgede verilmiştir.
**Buna göre Elif hangi kursa yazılabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Kurs</th><th>Günler</th><th>Saat</th></tr><tr><td>Bağlama</td><td>Çarşamba, Cuma</td><td>15.30-16.30</td></tr><tr><td>Gitar</td><td>Pazartesi, Çarşamba</td><td>16.30-17.30</td></tr><tr><td>Keman</td><td>Pazartesi, Perşembe</td><td>17.30-18.30</td></tr><tr><td>Piyano</td><td>Salı, Perşembe</td><td>17.00-18.00</td></tr></table>`,
  secenekler: [
    "Bağlama kursu",
    "Gitar kursu",
    "Keman kursu",
    "Piyano kursu"
  ],
  dogru: 1,
  hatalar: [
    "Okul çıkış saatini atlama: bağlama kursu 15.30'da başlıyor; Elif'in okulu 15.40'ta bitiyor, müzik okuluna da ancak 16.10'da varabiliyor.",
    null,
    "Tek günü kontrol etme: pazartesi uygun ama perşembe 17.30-18.30 saatleri, İngilizce kursuyla (17.00-18.00) yarım saat çakışıyor.",
    "İngilizce kursunu gözden kaçırma: piyano salı ve perşembe 17.00-18.00'dedir; İngilizce kursuyla aynı saatlerdedir."
  ],
  aciklama: `Çizelge sorularında önce kendi koşullarını çıkar, sonra her satırı bu koşullarla sına.
Adım 1: Elif'in müzik okuluna en erken varış saatini bul: 15.40 + 30 dakika = 16.10. 16.10'dan önce başlayan kurs olmaz.
Adım 2: İngilizce kursunun saatlerini not et: salı ve perşembe 17.00-18.00.
Adım 3: Bağlama 15.30'da başlar; elenir. Piyano salı ve perşembe 17.00-18.00'dedir; İngilizce kursuyla çakışır, elenir.
Adım 4: Keman pazartesi uygundur ama perşembe 17.30-18.30'dadır; 17.30-18.00 arası İngilizce kursuyla çakışır, elenir.
Adım 5: Gitar pazartesi ve çarşamba 16.30'da başlar. Elif 16.10'da müzik okulundadır ve bu günlerde İngilizce kursu yoktur.
Sağlama: Gitar kursunun iki günü de salı ve perşembe dışında, başlangıcı da 16.10'dan sonradır.
Cevap B.`
},
{
  id: "tur-gg-310",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Arda ile kız kardeşi Ece, aynı gün kumbaralarına 40'ar lira koyarak para biriktirmeye başlamıştır. İki kardeş altı hafta boyunca her hafta sonunda kumbaralarındaki parayı saymış ve sonuçları aşağıdaki grafikte göstermiştir. Bu süre içinde kumbaralardan hiç para alınmamıştır.
**Bu grafiğe göre aşağıdaki yargılardan hangisine ulaşılabilir?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Grafik: Arda ve Ece'nin kumbaralarındaki paranın haftalara göre değişimi"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: Kumbaralardaki para (TL)</text><line x1="90" y1="41" x2="114" y2="41" stroke="var(--vurgu)" stroke-width="3"/><text x="120" y="46" font-size="14" fill="currentColor">Arda</text><line x1="178" y1="41" x2="202" y2="41" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="6 4"/><text x="208" y="46" font-size="14" fill="currentColor">Ece</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="72" y1="234" x2="546" y2="234"/><line x1="72" y1="180" x2="546" y2="180"/><line x1="72" y1="126" x2="546" y2="126"/><line x1="72" y1="72" x2="546" y2="72"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="72" y1="64" x2="72" y2="288"/><line x1="72" y1="288" x2="546" y2="288"/></g><text x="66" y="293" font-size="14" text-anchor="end" fill="currentColor">0</text><text x="66" y="239" font-size="14" text-anchor="end" fill="currentColor">40</text><text x="66" y="185" font-size="14" text-anchor="end" fill="currentColor">80</text><text x="66" y="131" font-size="14" text-anchor="end" fill="currentColor">120</text><text x="66" y="77" font-size="14" text-anchor="end" fill="currentColor">160</text><polyline points="111.5,234 190.5,207 269.5,166.5 348.5,126 427.5,99 506.5,85.5" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="111.5" cy="234" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="111.5" y="224" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">40</text><circle cx="190.5" cy="207" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="190.5" y="197" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">60</text><circle cx="269.5" cy="166.5" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="269.5" y="156.5" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">90</text><circle cx="348.5" cy="126" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="348.5" y="116" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">120</text><circle cx="427.5" cy="99" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="427.5" y="89" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">140</text><circle cx="506.5" cy="85.5" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="506.5" y="75.5" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">150</text><polyline points="111.5,234 190.5,220.5 269.5,193.5 348.5,180 427.5,153 506.5,126" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="7 5"/><circle cx="111.5" cy="234" r="5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="111.5" y="256" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">40</text><circle cx="190.5" cy="220.5" r="5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="190.5" y="242.5" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">50</text><circle cx="269.5" cy="193.5" r="5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="269.5" y="215.5" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">70</text><circle cx="348.5" cy="180" r="5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="348.5" y="202" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">80</text><circle cx="427.5" cy="153" r="5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="427.5" y="175" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">100</text><circle cx="506.5" cy="126" r="5" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="506.5" y="148" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">120</text><line x1="111.5" y1="288" x2="111.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="111.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">1. hafta</text><line x1="190.5" y1="288" x2="190.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="190.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">2. hafta</text><line x1="269.5" y1="288" x2="269.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="269.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">3. hafta</text><line x1="348.5" y1="288" x2="348.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="348.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">4. hafta</text><line x1="427.5" y1="288" x2="427.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="427.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">5. hafta</text><line x1="506.5" y1="288" x2="506.5" y2="293" stroke="currentColor" stroke-width="2"/><text x="506.5" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">6. hafta</text></svg>`,
  secenekler: [
    "Arda her hafta kumbarasına Ece'den daha çok para atmıştır.",
    "Ece altıncı haftanın sonunda Arda'nın birikimine yetişmiştir.",
    "Arda'nın en çok para biriktirdiği dönem son iki hafta olmuştur.",
    "İki kardeşin birikimleri arasındaki fark 4. ve 5. haftada aynıdır."
  ],
  dogru: 3,
  hatalar: [
    "Aşırı genelleme: 5. haftadan 6. haftaya Arda 10 TL (140 → 150), Ece 20 TL (100 → 120) atmıştır.",
    "Değerleri yanlış okuma: 6. hafta sonunda birikimler 150 TL ve 120 TL'dir; eşit değildir.",
    "Eğimi yanlış yorumlama: son iki haftada Arda 20 ve 10 TL atmıştır; en çok biriktirdiği haftalar 30'ar TL ile 3. ve 4. haftalardır.",
    null
  ],
  aciklama: `İki serili çizgi grafikte hem her serinin kendi değişimine hem de iki seri arasındaki farka bakılır.
Adım 1: Değerleri oku. Arda: 40, 60, 90, 120, 140, 150. Ece: 40, 50, 70, 80, 100, 120.
Adım 2: Haftalık artışları bul. Arda: +20, +30, +30, +20, +10. Ece: +10, +20, +10, +20, +20.
Adım 3: A'yı sına. Son haftada Ece daha çok para atmış (+20'ye karşı +10); "her hafta" denemez.
Adım 4: B'yi sına. 6. haftada 150 ile 120 eşit değildir.
Adım 5: C'yi sına. Son iki haftada +20 ve +10; en çok biriktirdiği dönem bu değildir.
Adım 6: D'yi sına. 4. hafta: 120 − 80 = 40; 5. hafta: 140 − 100 = 40. Farklar eşittir; ulaşılır.
Sık yapılan hata: Birikim (toplam para) ile o hafta atılan parayı (değişim) karıştırmak. Arda'nın birikimi hep fazladır ama her hafta daha çok para atmamıştır.
Cevap D.`
},
{
  id: "tur-gg-311",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ortaokulun hayvan dostları kulübü, sokak hayvanları için mama bağışı kampanyası düzenleyecektir. Kulüp, kampanya afişlerinde şu ölçütlerin bulunmasını istemiştir:
• Afiş, okuyucuya yöneltilmiş bir soruyla başlamalıdır.
• Kampanyanın tarihi ve yeri belirtilmelidir.
• Bağışın nasıl yapılacağı açıkça yazılmalıdır.
Öğrencilerin hazırladığı afişler aşağıda verilmiştir.
**Buna göre hangi afiş, ölçütlerin tamamına uygun olarak hazırlanmıştır?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Mama bağışı kampanyası için hazırlanmış dört afiş"><rect x="4" y="4" width="274" height="142" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="16" y="28" font-size="16" font-weight="bold" fill="currentColor">I.</text><text x="44" y="28" font-size="14" font-weight="bold" fill="currentColor">Sokak dostlarını düşündün mü?</text><text x="18" y="66" font-size="14" fill="currentColor">Tarih: 12 Aralık</text><text x="18" y="92" font-size="14" fill="currentColor">Mamanı kapalı paketiyle kulüp</text><text x="18" y="118" font-size="14" fill="currentColor">masasına bırakabilirsin.</text><rect x="282" y="4" width="274" height="142" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="294" y="28" font-size="16" font-weight="bold" fill="currentColor">II.</text><text x="322" y="28" font-size="14" font-weight="bold" fill="currentColor">Dostlarımız seni bekliyor!</text><text x="296" y="66" font-size="14" fill="currentColor">12 Aralık, okul bahçesi</text><text x="296" y="92" font-size="14" fill="currentColor">Mamanı kapalı paketiyle kulüp</text><text x="296" y="118" font-size="14" fill="currentColor">masasına bırakabilirsin.</text><rect x="4" y="152" width="274" height="142" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="16" y="176" font-size="16" font-weight="bold" fill="currentColor">III.</text><text x="44" y="176" font-size="14" font-weight="bold" fill="currentColor">Onları bu kış kim doyuracak?</text><text x="18" y="214" font-size="14" fill="currentColor">12 Aralık, okul bahçesi</text><text x="18" y="240" font-size="14" fill="currentColor">Mamanı kapalı paketiyle kulüp</text><text x="18" y="266" font-size="14" fill="currentColor">masasına bırakabilirsin.</text><rect x="282" y="152" width="274" height="142" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="294" y="176" font-size="16" font-weight="bold" fill="currentColor">IV.</text><text x="322" y="176" font-size="14" font-weight="bold" fill="currentColor">Onlar için ne yapabilirsin?</text><text x="296" y="214" font-size="14" fill="currentColor">12 Aralık, okul bahçesi</text><text x="296" y="240" font-size="14" fill="currentColor">Bu kış sokaktaki dostlarımızı</text><text x="296" y="266" font-size="14" fill="currentColor">unutmayalım.</text></svg>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 2,
  hatalar: [
    "Eksik ölçütü görmeme: I soruyla başlıyor ve bağışın nasıl yapılacağını söylüyor ama kampanyanın yeri yazılmamış.",
    "Soru ile ünlem cümlesini karıştırma: II'nin başlığı bir soru değil, ünlem cümlesidir.",
    null,
    "Çağrı ile yöntemi karıştırma: \"unutmayalım\" bir çağrıdır; bağışın nasıl yapılacağını (mamanın nereye bırakılacağını) belirtmez."
  ],
  aciklama: `Ölçüt listeli afiş sorularında bir tablo kur: her afiş için her ölçüte "var" ya da "yok" de. Bir tek "yok" bile afişi eler.
Adım 1: Soruyla başlama ölçütü: I, III ve IV soru cümlesiyle başlar; II ünlemle başlar, elenir.
Adım 2: Tarih ve yer ölçütü: I'de yalnızca tarih var, yer yok; elenir. III ve IV'te "12 Aralık, okul bahçesi" yazıyor.
Adım 3: Bağış yöntemi ölçütü: III "Mamanı kapalı paketiyle kulüp masasına bırakabilirsin." diyerek yöntemi veriyor. IV yalnızca çağrı yapıyor; yöntem yok, elenir.
Sağlama: III üç ölçütün üçünü de karşılıyor.
Cevap C.`
},
{
  id: "tur-gg-312",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Bir banliyö hattındaki trenlerin istasyonlardan geçiş saatleri aşağıdaki tabloda verilmiştir. Trenler tabloda yukarıdan aşağıya doğru, yani Kavaklı'dan Limanlı'ya doğru ilerlemektedir. Tablodaki "—" işareti, trenin o istasyonda durmadığını gösterir.
Selin, saat 09.30'da Kavaklı istasyonuna gelmiştir ve Dereboyu istasyonunda inmek istemektedir.
**Buna göre Selin, Dereboyu istasyonuna en erken saat kaçta varabilir?**`,
  gorsel: `<table class="tablo"><tr><th>İstasyon</th><th>1. sefer</th><th>2. sefer</th><th>3. sefer</th></tr><tr><td>Kavaklı</td><td>09.10</td><td>09.50</td><td>10.30</td></tr><tr><td>Çınarlı</td><td>09.25</td><td>10.05</td><td>10.45</td></tr><tr><td>Dereboyu</td><td>09.45</td><td>—</td><td>11.05</td></tr><tr><td>Limanlı</td><td>10.00</td><td>10.30</td><td>11.20</td></tr></table>`,
  secenekler: [
    "09.45",
    "10.05",
    "10.30",
    "11.05"
  ],
  dogru: 3,
  hatalar: [
    "Kaçırılan treni seçme: 1. sefer Kavaklı'dan 09.10'da geçmiştir; Selin istasyona 09.30'da gelir.",
    "Satırı karıştırma: 10.05, 2. seferin Çınarlı'dan geçiş saatidir; Dereboyu'nun saati değildir.",
    "Durmama işaretini atlama: 2. sefer Dereboyu'nda durmaz; 10.30 bu trenin Limanlı'ya varış saatidir.",
    null
  ],
  aciklama: `Tarife tablolarında önce binilebilecek treni, sonra o trenin inilecek istasyondaki saatini bul.
Adım 1: Selin 09.30'da Kavaklı'dadır. 1. sefer 09.10'da geçmiştir; binemez.
Adım 2: 2. sefer 09.50'de Kavaklı'dan geçer ama Dereboyu satırında "—" vardır; bu tren Dereboyu'nda durmaz. Hat tek yönlü olduğu için Limanlı'dan geri dönmek de mümkün değildir.
Adım 3: 3. sefer 10.30'da Kavaklı'dan geçer ve Dereboyu'na 11.05'te varır.
Sağlama: 11.05'ten önce Dereboyu'nda duran ve Selin'in binebileceği başka tren yoktur.
Cevap D.`
},
{
  id: "tur-gg-313",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki çizgi romanın ilk karesinde öğretmen, sınıfa proje ödevinin teslim tarihini duyurmaktadır. İkinci kare ise aradan üç hafta geçtikten sonraki durumu göstermektedir.
**Bu çizgi romanda öğrencinin hangi tutumu eleştirilmektedir?**`,
  gorsel: `<svg viewBox="0 0 560 250" role="img" aria-label="İki karelik çizgi roman: proje teslim tarihi ve öğrenci"><rect x="4" y="4" width="274" height="242" fill="none" stroke="currentColor" stroke-width="2"/><rect x="126" y="18" width="140" height="62" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="196" y="42" font-size="14" text-anchor="middle" fill="currentColor">Proje teslimi:</text><text x="196" y="66" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">3 hafta sonra</text><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="236" cy="160" r="11" fill="var(--dolgu)"/><line x1="236" y1="171" x2="236" y2="206"/><line x1="236" y1="206" x2="224" y2="238"/><line x1="236" y1="206" x2="248" y2="238"/><line x1="236" y1="182" x2="220" y2="160"/><line x1="236" y1="182" x2="248" y2="202"/></g><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="66" cy="160" r="11" fill="var(--dolgu)"/><line x1="66" y1="171" x2="66" y2="206"/><line x1="66" y1="206" x2="54" y2="238"/><line x1="66" y1="206" x2="78" y2="238"/><line x1="66" y1="182" x2="52" y2="202"/><line x1="66" y1="182" x2="80" y2="202"/><path d="M61,163 Q66,168 71,163" stroke-width="1.5"/></g><rect x="12" y="92" width="108.8" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/><polyline points="59,140 66,146 73,140" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="22" y="112" font-size="14" fill="currentColor">Daha çok</text><text x="22" y="130" font-size="14" fill="currentColor">zamanım var.</text><rect x="282" y="4" width="274" height="242" fill="none" stroke="currentColor" stroke-width="2"/><rect x="404" y="18" width="140" height="62" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="474" y="42" font-size="14" text-anchor="middle" fill="currentColor">Proje teslimi:</text><text x="474" y="66" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">YARIN</text><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="420" cy="160" r="11" fill="var(--dolgu)"/><line x1="420" y1="171" x2="420" y2="206"/><line x1="420" y1="206" x2="408" y2="238"/><line x1="420" y1="206" x2="432" y2="238"/><line x1="420" y1="182" x2="407" y2="158"/><line x1="420" y1="182" x2="433" y2="158"/><path d="M415,167 Q420,162 425,167" stroke-width="1.5"/></g><g stroke="currentColor" stroke-width="1.5" fill="var(--dolgu)"><rect x="330" y="214" width="22" height="16"/><rect x="356" y="222" width="22" height="16"/><rect x="456" y="218" width="22" height="16"/><rect x="484" y="210" width="22" height="16"/><rect x="510" y="224" width="22" height="16"/></g><rect x="290" y="92" width="138.4" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/><polyline points="403,140 410,146 417,140" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="300" y="112" font-size="14" fill="currentColor">Neden kimse bana</text><text x="300" y="130" font-size="14" fill="currentColor">hatırlatmadı?</text></svg>`,
  secenekler: [
    "Öğretmeninin verdiği süreyi yetersiz bulup itiraz etmesi",
    "İşini son güne bırakıp sorumluluğu başkalarında araması",
    "Projesini hazırlarken arkadaşlarından yardım istememesi",
    "Projeyi bitirmek için gece geç saatlere kadar çalışması"
  ],
  dogru: 1,
  hatalar: [
    "Görseldeki sözü ters okuma: öğrenci süreye itiraz etmiyor; ilk karede \"Daha çok zamanım var.\" diyerek süreyi yeterli buluyor.",
    null,
    "Görseli aşan yorum: karelerde arkadaş ya da yardım konusu hiç yer almıyor.",
    "Olumlu davranışı eleştiri sanma: gece çalıştığı görselde gösterilmiyor; eleştirilen, işin son güne bırakılmasıdır."
  ],
  aciklama: `Çizgi romanda kahramanın tutumu, sözleri ile durumu arasındaki uyumsuzluktan anlaşılır.
Adım 1: İlk kare: teslime üç hafta var, öğrenci rahat: "Daha çok zamanım var."
Adım 2: İkinci kare: teslim yarın, öğrenci kâğıtların arasında elleri başında. Üç hafta boyunca projeye başlamadığı anlaşılıyor.
Adım 3: Sözüne bak: "Neden kimse bana hatırlatmadı?" Kendi ertelemesinin sonucunu başkalarına yüklüyor.
Adım 4: İki tutum birlikte eleştiriliyor: işi son güne bırakmak ve sorumluluğu başkasında aramak. B ikisini de içeriyor.
Sık yapılan hata: Yalnızca ikinci kareye bakıp öğrencinin çok çalıştığını düşünmek. Mesaj iki karenin karşılaştırılmasından çıkar.
Cevap B.`
},
{
  id: "tur-gg-314",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 3,
  soru: `Sağlıklı beslenme projesi hazırlayan Zeynep, marketteki üç kahvaltılık gevreğin paketlerinde yazan besin değerlerini aşağıdaki tabloya aktarmıştır. Tablodaki değerlerin hepsi, gevreklerin 100 gramı için verilmiştir.
**Bu tabloya göre aşağıdakilerden hangisine ulaşılabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Besin değeri (100 g)</th><th>K gevreği</th><th>L gevreği</th><th>M gevreği</th></tr><tr><td>Enerji (kcal)</td><td>380</td><td>360</td><td>400</td></tr><tr><td>Şeker (g)</td><td>22</td><td>8</td><td>30</td></tr><tr><td>Lif (g)</td><td>6</td><td>10</td><td>3</td></tr><tr><td>Protein (g)</td><td>8</td><td>11</td><td>7</td></tr></table>`,
  secenekler: [
    "Enerjisi en düşük olan gevrek, en az şeker içeren gevrektir.",
    "Marketteki alışverişçiler en çok L gevreğini satın almaktadır.",
    "M gevreğindeki şeker miktarı, K gevreğindekinin iki katıdır.",
    "Gevreklerde lif miktarı arttıkça enerji değeri de artmaktadır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tablonun dışına çıkma: tablo yalnızca besin değerlerini verir; satış ya da tercih bilgisi yoktur.",
    "Yaklaşık değeri kesin sanma: 22'nin iki katı 44'tür; 30 bu değere ulaşmaz.",
    "Ters yön: lifi en çok olan L'nin enerjisi en düşük (360), lifi en az olan M'nin enerjisi en yüksektir (400)."
  ],
  aciklama: `Tablo sorularında her şıkta hangi satırların karşılaştırıldığını belirle ve yalnızca o satırlara bak.
Adım 1: A için enerji ve şeker satırlarına bak. En düşük enerji L'de (360), en az şeker de L'de (8). Aynı gevrek; ulaşılır.
Adım 2: B: Tabloda satış ya da tercih bilgisi yoktur; hangi gevreğin çok alındığı bilinemez.
Adım 3: C: 22 × 2 = 44 ≠ 30.
Adım 4: D için lif ve enerji satırlarını sırala. Lif en azdan en çoğa M (3), K (6), L (10) diye sıralanır. Enerji ise aynı sırayla M (400), K (380), L (360) olur. Lif artarken enerji azalıyor; D ters yöndedir.
Sık yapılan hata: İki satır arasındaki ilişkinin yönünü kontrol etmeden "arttıkça artar" kalıbını kabul etmek.
Cevap A.`
},
{
  id: "tur-gg-315",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ortaokulun çevre kulübü, yıl sonunda okulda toplanan atıkları türlerine göre tartmış ve sonuçları okul panosunda aşağıdaki bilgi görseliyle duyurmuştur. Okulda bu yıl yalnızca görselde yer alan dört tür atık toplanmıştır.
**Bu bilgi görseline göre aşağıdakilerden hangisine ulaşılabilir?**`,
  gorsel: `<svg viewBox="0 0 560 290" role="img" aria-label="Okulun geri dönüşüm karnesi bilgi görseli"><text x="280" y="24" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">OKULUMUZUN GERİ DÖNÜŞÜM KARNESİ (Bu yıl)</text><rect x="10" y="40" width="127" height="140" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="2" fill="none"><rect x="57" y="58" width="32" height="40"/><line x1="64" y1="70" x2="82" y2="70"/><line x1="64" y1="79" x2="82" y2="79"/><line x1="64" y1="88" x2="76" y2="88"/></g><text x="73" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Kâğıt</text><text x="73" y="160" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">420 kg</text><rect x="147" y="40" width="127" height="140" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M205,56 h10 v8 q10,6 10,16 v20 h-30 v-20 q0,-10 10,-16 z" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="210" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Plastik</text><text x="210" y="160" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">180 kg</text><rect x="284" y="40" width="127" height="140" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><path d="M335,62 h24 v6 q4,4 4,10 v22 h-32 v-22 q0,-6 4,-10 z" fill="none" stroke="currentColor" stroke-width="2"/><text x="347" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Cam</text><text x="347" y="160" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">90 kg</text><rect x="421" y="40" width="127" height="140" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="2"><rect x="474" y="62" width="20" height="38" fill="var(--vurgu2)"/><rect x="480" y="56" width="8" height="6" fill="currentColor"/></g><text x="484" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Pil</text><text x="484" y="160" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">12 kg</text><rect x="10" y="200" width="265" height="76" rx="10" fill="none" stroke="var(--vurgu)" stroke-width="3"/><text x="142" y="232" font-size="14" text-anchor="middle" fill="currentColor">Geçen yıla göre toplam</text><text x="142" y="258" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">artış: %20</text><rect x="285" y="200" width="265" height="76" rx="10" fill="none" stroke="var(--vurgu2)" stroke-width="3"/><text x="417" y="232" font-size="14" text-anchor="middle" fill="currentColor">Bu yılın hedefi</text><text x="417" y="258" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">800 kg</text></svg>`,
  secenekler: [
    "Bu yıl toplanan kâğıt, diğer üç atığın toplamından fazladır.",
    "Bu yıl toplanan atıkların miktarı, okulun hedefini geçmiştir.",
    "Plastik atıklar, kutularda en çok yer kaplayan atıklar olmuştur.",
    "Geçen yıl toplanan atıkların miktarı 600 kilogramı aşmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Toplamı hesaplamadan karar verme: 420 + 180 + 90 + 12 = 702 kg, hedef ise 800 kg'dır; hedefe ulaşılmamıştır.",
    "Görselde olmayan bilgi: görsel ağırlığı (kg) verir; atıkların ne kadar yer kapladığı hakkında bilgi yoktur.",
    "Yüzde hesabını yapmadan tahmin etme: 702 kg geçen yılın %120'sidir; geçen yıl 702 ÷ 120 × 100 = 585 kg toplanmıştır."
  ],
  aciklama: `Adım 1: A'yı sına. Diğer üç atığın toplamı 180 + 90 + 12 = 282 kg; kâğıt 420 kg'dır. 420 > 282; ulaşılır.
Adım 2: B'yi sına. Bu yılın toplamı 420 + 180 + 90 + 12 = 702 kg; hedef 800 kg. Hedef geçilmemiştir.
Adım 3: C'yi sına. Görsel yalnızca ağırlık verir. Hafif ama hacimli atıkların ne kadar yer kapladığı görselden çıkarılamaz.
Adım 4: D'yi sına. %20 artışla 702 kg'a ulaşıldığına göre 702, geçen yılın %120'sidir. Geçen yıl: 702 ÷ 120 × 100 = 585 kg. 600'ü aşmaz.
Sık yapılan hata: Ağırlık (kg) ile kapladığı yeri (hacim) aynı şey sanmak ya da yüzde artışını ters yönde uygulamak.
Cevap A.`
},
{
  id: "tur-gg-316",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir doğa koruma derneği, deniz kaplumbağalarının yumurtlamak için çıktığı üç kumsalda her yaz yuva sayımı yapmaktadır. Derneğin dört yıllık sayım sonuçları aşağıdaki grafikte verilmiştir. Dernek, yıl sonu bülteninde bu sonuçları şöyle değerlendirmiştir:
(I) Sazlı Kumsalı'ndaki yuva sayısı 2022'de Akyar'dakinin üçte biri kadarken 2025'te üçte ikisine ulaşmıştır. (II) Üç kumsaldaki toplam yuva sayısı, 2023'ten başlayarak her yıl bir önceki yılın toplamını geçmiştir. (III) Dalgalı Kumsalı, yuva sayısının düştüğü yılda bile öteki iki kumsalın her birinden daha çok yuvaya ev sahipliği yapmıştır. (IV) Son yıl Akyar'da yuva sayısı değişmemiş, en büyük artış ise Sazlı'da görülmüştür.
**Bültendeki numaralanmış cümlelerden hangisi grafikteki bilgilerle __çelişmektedir__?**`,
  gorsel: "<svg viewBox=\"0 0 560 336\" role=\"img\" aria-label=\"Grafik: Akyar, Dalgalı ve Sazlı kumsallarında 2022-2025 yıllarında sayılan deniz kaplumbağası yuvaları\"><text x=\"12\" y=\"22\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Kumsallara göre deniz kaplumbağası yuva sayısı</text><rect x=\"58\" y=\"36\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"78\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Akyar</text><rect x=\"146\" y=\"36\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"166\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Dalgalı</text><rect x=\"250\" y=\"36\" width=\"14\" height=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"270\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Sazlı</text><text x=\"12\" y=\"74\" font-size=\"14\" fill=\"currentColor\">Yuva sayısı (adet)</text><text x=\"50\" y=\"307\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">0</text><line x1=\"58\" y1=\"272\" x2=\"548\" y2=\"272\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"277\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">20</text><line x1=\"58\" y1=\"242\" x2=\"548\" y2=\"242\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"247\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">40</text><line x1=\"58\" y1=\"212\" x2=\"548\" y2=\"212\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"217\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">60</text><line x1=\"58\" y1=\"182\" x2=\"548\" y2=\"182\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"187\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">80</text><line x1=\"58\" y1=\"152\" x2=\"548\" y2=\"152\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"157\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">100</text><line x1=\"58\" y1=\"122\" x2=\"548\" y2=\"122\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"127\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">120</text><line x1=\"58\" y1=\"92\" x2=\"548\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"97\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">140</text><line x1=\"58\" y1=\"84\" x2=\"58\" y2=\"302\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"58\" y1=\"302\" x2=\"548\" y2=\"302\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"67.8\" y=\"212\" width=\"34.3\" height=\"90\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"84.95\" y=\"207\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">60</text><rect x=\"102.1\" y=\"122\" width=\"34.3\" height=\"180\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"119.25\" y=\"117\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">120</text><rect x=\"136.4\" y=\"272\" width=\"34.3\" height=\"30\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"153.55\" y=\"267\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">20</text><text x=\"119.25\" y=\"322\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2022</text><rect x=\"190.3\" y=\"189.5\" width=\"34.3\" height=\"112.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"207.45\" y=\"184.5\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">75</text><rect x=\"224.6\" y=\"159.5\" width=\"34.3\" height=\"142.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"241.75\" y=\"154.5\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">95</text><rect x=\"258.9\" y=\"257\" width=\"34.3\" height=\"45\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"276.05\" y=\"252\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">30</text><text x=\"241.75\" y=\"322\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2023</text><rect x=\"312.8\" y=\"167\" width=\"34.3\" height=\"135\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"329.95\" y=\"162\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">90</text><rect x=\"347.1\" y=\"152\" width=\"34.3\" height=\"150\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"364.25\" y=\"147\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">100</text><rect x=\"381.4\" y=\"234.5\" width=\"34.3\" height=\"67.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"398.55\" y=\"229.5\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">45</text><text x=\"364.25\" y=\"322\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2024</text><rect x=\"435.3\" y=\"167\" width=\"34.3\" height=\"135\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"452.45\" y=\"162\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">90</text><rect x=\"469.6\" y=\"144.5\" width=\"34.3\" height=\"157.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"486.75\" y=\"139.5\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">105</text><rect x=\"503.9\" y=\"212\" width=\"34.3\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"521.05\" y=\"207\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">60</text><text x=\"486.75\" y=\"322\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2025</text></svg>",
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: ["Oranı hesaplamadan çelişki sanma: 2022'de 20, 60'ın üçte biridir; 2025'te 60, 90'ın üçte ikisidir. Cümle grafikle uyuşur.", null, "Düşüş yılını yanlış okuma: Dalgalı'da yuva sayısı bir kez, 2023'te düşmüştür (95); o yıl Akyar 75, Sazlı 30'dur. Cümle grafikle uyuşur.", "Artışları karşılaştırmama: son yıl Akyar 90'da kalmış, Dalgalı 5, Sazlı 15 artmıştır. Cümle grafikle uyuşur."],
  aciklama: `"Çelişmektedir" kökünde üç cümle grafikle uyuşur, biri uyuşmaz. Her cümleyi sayılarla tek tek sınaman gerekir.
Adım 1: (I) 2022'de Sazlı 20, Akyar 60 yuva: 20, 60'ın üçte biridir. 2025'te Sazlı 60, Akyar 90 yuva: 60, 90'ın üçte ikisidir. Uyuşuyor.
Adım 2: (II) Her yılın toplamını bul. 2022: 60 + 120 + 20 = 200. 2023: 75 + 95 + 30 = 200. 2024: 90 + 100 + 45 = 235. 2025: 90 + 105 + 60 = 255. 2023'ün toplamı 2022'ninkine eşittir, onu geçmemiştir. Çelişiyor.
Adım 3: (III) Dalgalı'da yuva sayısı bir kez, 2023'te düşmüştür (120 → 95). O yıl Akyar 75, Sazlı 30'dur; 95 ikisinden de büyüktür. Uyuşuyor.
Adım 4: (IV) 2025'te Akyar 90'da kalmış, Dalgalı 5 (100 → 105), Sazlı 15 (45 → 60) artmıştır. Uyuşuyor.
Sık yapılan hata: 2023'te iki kumsalda sütunların yükseldiğini görüp toplamın da arttığını sanmak. Dalgalı'daki 25 yuvalık düşüş, öteki iki kumsaldaki 15 + 10 yuvalık artışı tam olarak götürür. Aynı kalan değer artış değildir.
Cevap B.`
},
{
  id: "tur-gg-317",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fen kulübü, dört bitkinin tohumlarını aynı toprakta, aynı sıcaklıkta ve aynı miktarda suyla çimlendirmiştir. Deney 10 gün sürmüş; kulüp üyeleri 5. ve 10. günün sonunda, o güne kadar çimlenen toplam tohum sayısını aşağıdaki tabloya yazmıştır. Tablonun bir hücresine su damladığı için oradaki sayı okunamamaktadır. Kulüp üyeleri, sonuçları okul panosunda duyurmadan önce bu hücreye hangi sayıların gelebileceğini tartışmaktadır. Kulübün deney defterinde şu iki not vardır:
• Çimlenme oranı, çimlenen tohum sayısının ekilen tohum sayısına bölünmesiyle bulunur.
• Deneyin sonunda mercimeğin çimlenme oranı öteki üç türün her birinden yüksek, buğdayın çimlenme oranı ise öteki üç türün her birinden düşüktür.
**Bu bilgilere göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: "<table class=\"tablo\"><caption>Tablo: Çimlenen toplam tohum sayısı</caption><tr><th>Tür</th><th>Ekilen tohum</th><th>5. günün sonunda çimlenen</th><th>10. günün sonunda çimlenen</th></tr><tr><td>Fasulye</td><td>40</td><td>10</td><td>30</td></tr><tr><td>Nohut</td><td>50</td><td>20</td><td>35</td></tr><tr><td>Mercimek</td><td>60</td><td>27</td><td>(okunamıyor)</td></tr><tr><td>Buğday</td><td>80</td><td>40</td><td>48</td></tr></table>",
  secenekler: ["Deneyin sonunda en çok tohumu çimlenen tür mercimektir.", "Mercimekte son beş günde çimlenen tohum sayısı, ilk beş gündekinden fazladır.", "İlk beş günde çimlenme oranı en yüksek olan tür, deneyin sonunda da oranı en yüksek olan türdür.", "Mercimekte deneyin sonunda çimlenmeyen tohum sayısı 15'ten azdır."],
  dogru: 3,
  hatalar: ["Olabileni kesin sanma: mercimekte çimlenen tohum sayısı 46 ile 60 arasındadır; 46 ya da 47 ise buğdayın 48'inin altında kalır.", "Olabileni kesin sanma: mercimekte son beş günde çimlenen sayı 19 ile 33 arasındadır; 27'den fazla olması kesin değildir.", "Sayı ile oranı, ara sonuç ile son sonucu karıştırma: 5. günde oranı en yüksek tür buğdaydır (%50), deneyin sonunda ise oranı en düşük tür odur.", null],
  aciklama: `"Kesinlikle doğrudur" kökünde, okunamayan sayı hangi değeri alırsa alsın doğru kalan yargıyı ararsın.
Adım 1: Deneyin sonundaki oranları bul. Fasulye 30 / 40 = %75, nohut 35 / 50 = %70, buğday 48 / 80 = %60.
Adım 2: Mercimeğin oranı öteki üçünden yüksek olduğuna göre %75'ten büyüktür. 60 tohumun %75'i 45 eder; öyleyse mercimekte çimlenen tohum sayısı en az 46, en çok 60'tır.
Adım 3: A'yı sına. Mercimekte 46 ya da 47 tohum çimlenmişse buğdayın 48'inden azdır. Kesin değil.
Adım 4: B'yi sına. Son beş günde çimlenen sayı 46 − 27 = 19 ile 60 − 27 = 33 arasındadır; 27'den fazla da olabilir, az da. Kesin değil.
Adım 5: C'yi sına. 5. gün oranları: fasulye 10 / 40 = %25, nohut 20 / 50 = %40, mercimek 27 / 60 = %45, buğday 40 / 80 = %50. İlk beş günde birinci olan buğday, deneyin sonunda sonuncudur. Yanlış.
Adım 6: D'yi sına. Çimlenmeyen tohum sayısı en çok 60 − 46 = 14'tür; her durumda 15'ten azdır. Kesin.
Sık yapılan hata: sayısı büyük olanın oranını da büyük sanmak. Buğdayda 48 tohum çimlenmiştir ama 80 tohum ekildiği için oranı en düşüktür.
Cevap D.`
},
{
  id: "tur-gg-318",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir atletizm kulübünün üç sporcusu, bölge finali öncesinde dört ay boyunca her ay bir 800 metre yarışına katılmıştır. Sporcuların bu yarışları bitirme süreleri aşağıdaki grafikte verilmiştir; koşuda süre kısaldıkça derece iyileşir. Bölge finaline, haziran yarışını kendi yaş grubunun baraj süresinden kısa sürede bitiren sporcular çağrılacaktır. Yaş gruplarının baraj süreleri grafiğin altındaki tabloda yer almaktadır. Kulübün antrenörü, final hazırlığına kimleri alacağına bu verilere bakarak karar verecektir.
**Grafik ve tablodan aşağıdaki yargıların hangisine __ulaşılamaz__?**`,
  gorsel: "<svg viewBox=\"0 0 560 418\" role=\"img\" aria-label=\"Grafik: Asya, Kerem ve Lina'nın mart-haziran aylarındaki 800 metre yarışlarını bitirme süreleri\"><text x=\"12\" y=\"22\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: 800 metre yarışlarını bitirme süreleri</text><line x1=\"58\" y1=\"43\" x2=\"92\" y2=\"43\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"75\" cy=\"43\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><text x=\"100\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Asya</text><line x1=\"160\" y1=\"43\" x2=\"194\" y2=\"43\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><rect x=\"172\" y=\"38\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><text x=\"202\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Kerem</text><line x1=\"270\" y1=\"43\" x2=\"304\" y2=\"43\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"2 5\"/><polygon points=\"287,36 280.5,48 293.5,48\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"312\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Lina</text><text x=\"12\" y=\"74\" font-size=\"14\" fill=\"currentColor\">Süre (saniye)</text><text x=\"50\" y=\"389\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">140</text><line x1=\"58\" y1=\"348\" x2=\"548\" y2=\"348\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"353\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">144</text><line x1=\"58\" y1=\"312\" x2=\"548\" y2=\"312\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"317\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">148</text><line x1=\"58\" y1=\"276\" x2=\"548\" y2=\"276\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"281\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">152</text><line x1=\"58\" y1=\"240\" x2=\"548\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"245\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">156</text><line x1=\"58\" y1=\"204\" x2=\"548\" y2=\"204\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"209\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">160</text><line x1=\"58\" y1=\"168\" x2=\"548\" y2=\"168\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"173\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">164</text><line x1=\"58\" y1=\"132\" x2=\"548\" y2=\"132\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"137\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">168</text><line x1=\"58\" y1=\"96\" x2=\"548\" y2=\"96\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"101\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">172</text><line x1=\"58\" y1=\"88\" x2=\"58\" y2=\"384\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"58\" y1=\"384\" x2=\"548\" y2=\"384\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"119.25,204 241.75,240 364.25,276 486.75,294\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><polyline points=\"119.25,294 241.75,276 364.25,312 486.75,366\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-linejoin=\"round\" stroke-dasharray=\"8 5\"/><polyline points=\"119.25,114 241.75,186 364.25,240 486.75,330\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" stroke-dasharray=\"2 5\"/><circle cx=\"119.25\" cy=\"204\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><circle cx=\"241.75\" cy=\"240\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><circle cx=\"364.25\" cy=\"276\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><circle cx=\"486.75\" cy=\"294\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><rect x=\"114.25\" y=\"289\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><rect x=\"236.75\" y=\"271\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><rect x=\"359.25\" y=\"307\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><rect x=\"481.75\" y=\"361\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><polygon points=\"119.25,107 112.75,119 125.75,119\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"241.75,179 235.25,191 248.25,191\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"364.25,233 357.75,245 370.75,245\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><polygon points=\"486.75,323 480.25,335 493.25,335\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"119.25\" y=\"193\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">160</text><text x=\"241.75\" y=\"229\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">156</text><text x=\"364.25\" y=\"265\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">152</text><text x=\"486.75\" y=\"283\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">150</text><text x=\"119.25\" y=\"283\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">150</text><text x=\"241.75\" y=\"265\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">152</text><text x=\"364.25\" y=\"301\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">148</text><text x=\"486.75\" y=\"355\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">142</text><text x=\"119.25\" y=\"103\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">170</text><text x=\"250.75\" y=\"178\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"start\" fill=\"currentColor\">162</text><text x=\"364.25\" y=\"229\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">156</text><text x=\"495.75\" y=\"322\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"start\" fill=\"currentColor\">146</text><text x=\"119.25\" y=\"404\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Mart</text><text x=\"241.75\" y=\"404\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Nisan</text><text x=\"364.25\" y=\"404\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Mayıs</text><text x=\"486.75\" y=\"404\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Haziran</text></svg><table class=\"tablo\"><caption>Tablo: Bölge finali baraj süreleri</caption><tr><th>Sporcu</th><th>Yaş grubu</th><th>Baraj süresi (saniye)</th></tr><tr><td>Asya</td><td>13 yaş kızlar</td><td>152</td></tr><tr><td>Kerem</td><td>14 yaş erkekler</td><td>140</td></tr><tr><td>Lina</td><td>14 yaş kızlar</td><td>148</td></tr></table>",
  secenekler: ["Dört ayın en kısa süresini koşan sporcu, bölge finaline çağrılacaktır.", "Dört ayda süresini en çok kısaltan sporcu, mart yarışını en uzun sürede bitirmiştir.", "Finale çağrılacak sporcular arasında martta en yavaş olan, haziranda en hızlı olandır.", "Süresi bir yarışta uzayan tek sporcu, sonraki iki yarışta süresini kısaltmıştır."],
  dogru: 0,
  hatalar: [null, "Hesabı yapmadan eleme: Lina 24, Asya 10, Kerem 8 saniye kısaltmıştır; Lina mart yarışını en uzun sürede (170) bitirendir. Bu yargıya ulaşılır.", "Çağrılacakları yanlış belirleme: barajının altına inenler Asya (150 < 152) ve Lina'dır (146 < 148); martta ikisinden yavaş olan Lina (170), haziranda ikisinden hızlıdır (146). Bu yargıya ulaşılır.", "Çizgiyi adım adım izlememe: süresi uzayan tek sporcu Kerem'dir (150 → 152), sonra 148 ve 142'ye inmiştir. Bu yargıya ulaşılır."],
  aciklama: `Koşuda süre kısaldıkça derece iyileşir; bu grafikte aşağı inen çizgi gelişmeyi gösterir. "Ulaşılamaz" kökünde üç yargı verilerle doğrulanır, biri doğrulanamaz.
Adım 1: Haziran sürelerini barajlarla karşılaştır. Asya 150 < 152 (çağrılır), Lina 146 < 148 (çağrılır), Kerem 142 > 140 (çağrılmaz).
Adım 2: A'yı sına. Grafikteki on iki sürenin en kısası 142 saniyedir ve Kerem'e aittir. Kerem kendi barajının (140) altına inemediği için finale çağrılmaz. A yargısına ulaşılamaz.
Adım 3: B'yi sına. Marttan hazirana Asya 160 − 150 = 10, Kerem 150 − 142 = 8, Lina 170 − 146 = 24 saniye kısaltmıştır. En çok kısaltan Lina, mart yarışını en uzun sürede (170) bitirendir. Ulaşılır.
Adım 4: C'yi sına. Çağrılacak sporcular Asya ve Lina'dır. Martta ikisinden yavaş olan Lina'dır (170 > 160); haziranda ikisinden hızlı olan yine Lina'dır (146 < 150). Ulaşılır.
Adım 5: D'yi sına. Süresi uzayan tek sporcu Kerem'dir (150 → 152); sonraki iki yarışta 148'e ve 142'ye inmiştir. Ulaşılır.
Sık yapılan hata: herkesi aynı ölçüyle değerlendirmek. Her sporcunun barajı kendi yaş grubuna göredir; üçünün arasında en hızlı olmak finale çağrılmaya yetmez. Kerem'i çağrılmış sayarsan C'yi de yanlış değerlendirirsin.
Cevap A.`
},
{
  id: "tur-gg-319",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 4,
  soru: `Bir belediye, yeni açtığı tramvay hattını kullanan yolcu sayısını her ay açıklamaktadır. İki yerel haber sitesi, hattın ilk dört ayına ait bu sayıları aşağıdaki haber görselleriyle okurlarına duyurmuştur. Her görselin üst kısmında sitenin attığı başlık, alt kısmında başlığa dayanak gösterilen grafik yer almaktadır. İki haberi de gören bir okur şu yorumu yazmıştır: "Aynı hat için biri 'artmıyor' diyor, öteki 'dört katına çıktı' diyor. Hangisine inanacağız?"
**Bu iki haber görseliyle ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 560 318\" role=\"img\" aria-label=\"Kent Postası haber görseli: başlık ve dikey ekseni 0'dan başlayan sütun grafik\"><rect x=\"4\" y=\"4\" width=\"552\" height=\"310\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"4\" y=\"4\" width=\"552\" height=\"30\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"16\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">KENT POSTASI</text><text x=\"280\" y=\"60\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Tramvayda yolcu sayısı üç aydır artmıyor</text><text x=\"16\" y=\"88\" font-size=\"14\" fill=\"currentColor\">Aylık yolcu sayısı (bin kişi)</text><text x=\"56\" y=\"263\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">0</text><line x1=\"64\" y1=\"228.8\" x2=\"536\" y2=\"228.8\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"233.8\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">10</text><line x1=\"64\" y1=\"199.6\" x2=\"536\" y2=\"199.6\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"204.6\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">20</text><line x1=\"64\" y1=\"170.4\" x2=\"536\" y2=\"170.4\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"175.4\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">30</text><line x1=\"64\" y1=\"141.2\" x2=\"536\" y2=\"141.2\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"146.2\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">40</text><line x1=\"64\" y1=\"112\" x2=\"536\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"117\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">50</text><line x1=\"64\" y1=\"104\" x2=\"64\" y2=\"258\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64\" y1=\"258\" x2=\"536\" y2=\"258\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"95\" y=\"141.2\" width=\"56\" height=\"116.8\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"123\" y=\"136.2\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">40</text><text x=\"123\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Ocak</text><rect x=\"213\" y=\"135.36\" width=\"56\" height=\"122.64\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"241\" y=\"130.36\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">42</text><text x=\"241\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Şubat</text><rect x=\"331\" y=\"129.52\" width=\"56\" height=\"128.48\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"359\" y=\"124.52\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">44</text><text x=\"359\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Mart</text><rect x=\"449\" y=\"123.68\" width=\"56\" height=\"134.32\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"477\" y=\"118.68\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">46</text><text x=\"477\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Nisan</text><text x=\"16\" y=\"302\" font-size=\"14\" fill=\"currentColor\">Kaynak: Belediyenin açıkladığı yolcu sayıları</text></svg><svg viewBox=\"0 0 560 318\" role=\"img\" aria-label=\"Günışığı Haber haber görseli: başlık ve dikey ekseni 38'den başlayan sütun grafik\"><rect x=\"4\" y=\"4\" width=\"552\" height=\"310\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"4\" y=\"4\" width=\"552\" height=\"30\" rx=\"8\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"16\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">GÜNIŞIĞI HABER</text><text x=\"280\" y=\"60\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Tramvaya ilgi üç ayda dört katına çıktı!</text><text x=\"16\" y=\"88\" font-size=\"14\" fill=\"currentColor\">Aylık yolcu sayısı (bin kişi)</text><text x=\"56\" y=\"263\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">38</text><line x1=\"64\" y1=\"221.5\" x2=\"536\" y2=\"221.5\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"226.5\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">40</text><line x1=\"64\" y1=\"185\" x2=\"536\" y2=\"185\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"190\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">42</text><line x1=\"64\" y1=\"148.5\" x2=\"536\" y2=\"148.5\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"153.5\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">44</text><line x1=\"64\" y1=\"112\" x2=\"536\" y2=\"112\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"56\" y=\"117\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">46</text><line x1=\"64\" y1=\"104\" x2=\"64\" y2=\"258\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64\" y1=\"258\" x2=\"536\" y2=\"258\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"95\" y=\"221.5\" width=\"56\" height=\"36.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"123\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Ocak</text><rect x=\"213\" y=\"185\" width=\"56\" height=\"73\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"241\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Şubat</text><rect x=\"331\" y=\"148.5\" width=\"56\" height=\"109.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"359\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Mart</text><rect x=\"449\" y=\"112\" width=\"56\" height=\"146\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"477\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">Nisan</text><text x=\"16\" y=\"302\" font-size=\"14\" fill=\"currentColor\">Kaynak: Belediyenin açıkladığı yolcu sayıları</text></svg>",
  secenekler: ["İki site farklı sayılar kullandığı için görsellerden biri belediyenin açıkladığı veriyi yanlış yansıtmaktadır.", "Günışığı Haber'in başlığı sayılarla örtüşmekte, Kent Postası'nın başlığı ise sayılarla çelişmektedir.", "İki başlık da sayılarla çelişmekte, sütun boylarındaki fark ise dikey eksenin başlangıcından doğmaktadır.", "Kent Postası'nın başlığı sayılarla örtüşmekte, Günışığı Haber'in başlığı ise sayılarla çelişmektedir."],
  dogru: 2,
  hatalar: ["Sayıları karşılaştırmama: iki grafik de 40, 42, 44 ve 46 bini gösterir; siteler aynı veriyi kullanmıştır.", "Sütun boyunu değer sanma: nisan sütunu dört kat uzundur ama yolcu sayısı 40 binden 46 bine çıkmıştır; bu başlık da sayılarla çelişir.", null, "Yakın sütunları eşit sanma: sütunlar birbirine yakın görünür ama yolcu sayısı her ay 2 bin artmıştır; \"artmıyor\" başlığı sayılarla çelişir."],
  aciklama: `Bir haber görselinde başlık yorumdur, grafik veridir. Başlıktaki iddiayı grafikteki sayılarla sınaman gerekir.
Adım 1: Kent Postası'nın grafiğini oku: 40, 42, 44 ve 46 bin yolcu.
Adım 2: Günışığı Haber'in grafiğinde sütunların üstünde sayı yok; sütunların ucunu dikey eksene taşı. Eksen 38'den başlıyor ve sütunlar yine 40, 42, 44 ve 46'yı gösteriyor. İki site aynı sayıları kullanmış; A elenir.
Adım 3: "Üç aydır artmıyor" başlığını sına. Yolcu sayısı her ay 2 bin artmıştır. Başlık sayılarla çelişiyor; D elenir.
Adım 4: "Dört katına çıktı" başlığını sına. 40 binin dört katı 160 bindir; nisan değeri 46 bindir. Bu başlık da sayılarla çelişiyor; B elenir.
Adım 5: Sayılar aynı olduğu hâlde ilk görselde sütunlar neredeyse eşit boydadır, ikincisinde nisan sütunu ocak sütununun dört katı boyundadır. Farkı yaratan, ikinci grafikte dikey eksenin 0 yerine 38'den başlamasıdır.
Sık yapılan hata: sütunun boyunu değerin kendisi sanmak. Dikey eksen sıfırdan başlamıyorsa boya değil, eksendeki sayıya bak.
Cevap C.`
},
{
  id: "tur-gg-320",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gençlik merkezinin teknoloji atölyesinde üç tane üç boyutlu yazıcı vardır. Kasım ayında her yazıcının yaptığı baskılar "sorunsuz" ve "hatalı" olarak ayrılmış, sonuçlar aşağıdaki grafikte gösterilmiştir. Atölye sorumlusu bir yazıcının hatalı baskı oranını, hatalı baskı sayısını o yazıcının toplam baskı sayısına bölerek bulmakta ve bu oranı %20'yi aşan yazıcıyı bakıma göndermektedir. Grafiği inceleyen üç öğrenci şunları söylemiştir:
**Tuna:** En çok sorunsuz baskıyı 3. yazıcı yaptığına göre hatalı baskı oranı en düşük olan yazıcı da odur.
**Selin:** Bakıma yalnızca bir yazıcı gönderilecektir.
**Ozan:** 2. yazıcının hatalı baskı sayısı 3. yazıcınınkinin dörtte biri, hatalı baskı oranı ise 3. yazıcınınkinin yarısıdır.
**Buna göre hangi öğrencilerin söyledikleri doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 560 336\" role=\"img\" aria-label=\"Grafik: Üç yazıcının kasım ayındaki sorunsuz ve hatalı baskı sayılarını gösteren yığılmış sütun grafik\"><text x=\"12\" y=\"22\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Kasım ayında yazıcılara göre baskı sayısı</text><rect x=\"58\" y=\"36\" width=\"14\" height=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"78\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Sorunsuz baskı</text><rect x=\"218\" y=\"36\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"238\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Hatalı baskı</text><text x=\"12\" y=\"74\" font-size=\"14\" fill=\"currentColor\">Baskı sayısı (adet)</text><text x=\"50\" y=\"307\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">0</text><line x1=\"58\" y1=\"260\" x2=\"548\" y2=\"260\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"265\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">20</text><line x1=\"58\" y1=\"218\" x2=\"548\" y2=\"218\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"223\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">40</text><line x1=\"58\" y1=\"176\" x2=\"548\" y2=\"176\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"181\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">60</text><line x1=\"58\" y1=\"134\" x2=\"548\" y2=\"134\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"139\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">80</text><line x1=\"58\" y1=\"92\" x2=\"548\" y2=\"92\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"97\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">100</text><line x1=\"58\" y1=\"84\" x2=\"58\" y2=\"302\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"58\" y1=\"302\" x2=\"548\" y2=\"302\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"89.67\" y=\"207.5\" width=\"76\" height=\"94.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"89.67\" y=\"176\" width=\"76\" height=\"31.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"173.67\" y=\"259.75\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">45</text><text x=\"173.67\" y=\"196.75\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">15</text><text x=\"127.67\" y=\"322\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">1. yazıcı</text><rect x=\"253\" y=\"226.4\" width=\"76\" height=\"75.6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"253\" y=\"218\" width=\"76\" height=\"8.4\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"337\" y=\"269.2\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">36</text><text x=\"337\" y=\"227.2\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">4</text><text x=\"291\" y=\"322\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2. yazıcı</text><rect x=\"416.33\" y=\"167.6\" width=\"76\" height=\"134.4\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"416.33\" y=\"134\" width=\"76\" height=\"33.6\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"500.33\" y=\"239.8\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">64</text><text x=\"500.33\" y=\"155.8\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">16</text><text x=\"454.33\" y=\"322\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">3. yazıcı</text></svg>",
  secenekler: ["Yalnız Ozan", "Selin ve Ozan", "Tuna ve Selin", "Tuna, Selin ve Ozan"],
  dogru: 1,
  hatalar: ["Sınırı dâhil etme: 3. yazıcının oranı tam %20'dir, %20'yi aşmaz; bakıma bir yazıcı (1. yazıcı) gider, Selin de haklıdır.", null, "Sayıyı oran sanma: hatalı baskı oranı en düşük olan 2. yazıcıdır (%10), Tuna yanılır; Ozan'ın iki karşılaştırması da doğrudur.", "Sayıyı oran sanma: 3. yazıcı en çok sorunsuz baskıyı yapmıştır ama hatalı baskı oranı (%20), 2. yazıcınınkinden (%10) yüksektir."],
  aciklama: `Yığılmış sütunda her parçanın değeri yanında yazan sayıdır; yazıcının toplam baskı sayısı iki parçanın toplamıdır.
Adım 1: Toplamları bul. 1. yazıcı 45 + 15 = 60, 2. yazıcı 36 + 4 = 40, 3. yazıcı 64 + 16 = 80 baskı yapmıştır.
Adım 2: Hatalı baskı oranlarını bul. 1. yazıcı 15 / 60 = %25, 2. yazıcı 4 / 40 = %10, 3. yazıcı 16 / 80 = %20.
Adım 3: Tuna'yı sına. En çok sorunsuz baskıyı 3. yazıcı yapmıştır (64) ama hatalı baskı oranı en düşük olan 2. yazıcıdır (%10). Yanlış.
Adım 4: Selin'i sına. %20'yi aşan bir yazıcı vardır: 1. yazıcı (%25). 3. yazıcının oranı tam %20'dir; sınıra eşit olan değer sınırı aşmış sayılmaz. Doğru.
Adım 5: Ozan'ı sına. 4, 16'nın dörtte biridir; %10, %20'nin yarısıdır. Doğru.
Sık yapılan hata: sayısı büyük olanı oranca da iyi sanmak. Toplamlar farklıyken karşılaştırmayı sayıyla değil oranla yap.
Cevap B.`
},
{
  id: "tur-gg-321",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 4,
  soru: `Bir medya okuryazarlığı kitapçığında söylentinin nasıl büyüdüğü şöyle anlatılmaktadır:
"Bir bilgi kişiden kişiye aktarılırken önce kısalır: süre, neden gibi ayrıntılar düşer ama kalan söz hâlâ doğrudur. Ardından keskinleşir: kalan bilgi, olduğundan daha büyük ve daha kesin bir olaya dönüştürülür. Zincirin sonundakiler ise duyduklarını kaynağından doğrulamadan harekete geçer. Söylentiyi durdurmanın yolu, zincirin herhangi bir halkasında bilginin ilk kaynağına dönmektir."
Aşağıdaki çizgi romanda bir mahallede aynı gün içinde yaşanan bir olay dört karede anlatılmıştır.
**Çizgi roman ile metin birlikte değerlendirildiğinde aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<svg viewBox=\"0 0 560 476\" role=\"img\" aria-label=\"Dört karelik çizgi roman: fırıncının duyurusu kişiden kişiye aktarılırken değişiyor\"><rect x=\"6\" y=\"6\" width=\"270\" height=\"230\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"6\" y1=\"198\" x2=\"276\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"14\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">1. kare · Pazartesi sabahı</text><rect x=\"14\" y=\"33\" width=\"254\" height=\"48\" rx=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><polyline points=\"91,81 98,110 105,81\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"24\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Yarın tadilat var, bir günlüğüne</text><text x=\"24\" y=\"72\" font-size=\"14\" fill=\"currentColor\">kapalıyız. Çarşamba açığız.</text><rect x=\"138\" y=\"92\" width=\"134\" height=\"106\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"138\" y=\"92\" width=\"134\" height=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"205\" y=\"110\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">FIRIN</text><rect x=\"142\" y=\"126\" width=\"126\" height=\"46\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"205\" y=\"145\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">SALI KAPALI</text><text x=\"205\" y=\"164\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">ÇARŞAMBA AÇIK</text><circle cx=\"44\" cy=\"132\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"40.5\" cy=\"130\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"47.5\" cy=\"130\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M40 135 Q44 139 48 135\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"44\" y1=\"142\" x2=\"44\" y2=\"168\"/><line x1=\"44\" y1=\"168\" x2=\"35\" y2=\"198\"/><line x1=\"44\" y1=\"168\" x2=\"53\" y2=\"198\"/><line x1=\"44\" y1=\"150\" x2=\"32\" y2=\"170\"/><line x1=\"44\" y1=\"150\" x2=\"56\" y2=\"170\"/></g><circle cx=\"102\" cy=\"132\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"98.5\" cy=\"130\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"105.5\" cy=\"130\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M98 135 Q102 139 106 135\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"93\" y=\"113\" width=\"18\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"102\" y1=\"142\" x2=\"102\" y2=\"168\"/><line x1=\"102\" y1=\"168\" x2=\"93\" y2=\"198\"/><line x1=\"102\" y1=\"168\" x2=\"111\" y2=\"198\"/><line x1=\"102\" y1=\"150\" x2=\"90\" y2=\"170\"/><line x1=\"102\" y1=\"150\" x2=\"114\" y2=\"170\"/></g><text x=\"44\" y=\"218\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Nermin</text><text x=\"102\" y=\"218\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Fırıncı</text><rect x=\"284\" y=\"6\" width=\"270\" height=\"230\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"284\" y1=\"198\" x2=\"554\" y2=\"198\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"292\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">2. kare</text><rect x=\"292\" y=\"33\" width=\"190\" height=\"30\" rx=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><polyline points=\"353,63 360,114 367,63\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"302\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Fırın yarın kapalıymış.</text><circle cx=\"364\" cy=\"132\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"360.5\" cy=\"130\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"367.5\" cy=\"130\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M360 135 Q364 139 368 135\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"364\" y1=\"142\" x2=\"364\" y2=\"168\"/><line x1=\"364\" y1=\"168\" x2=\"355\" y2=\"198\"/><line x1=\"364\" y1=\"168\" x2=\"373\" y2=\"198\"/><line x1=\"364\" y1=\"150\" x2=\"352\" y2=\"170\"/><line x1=\"364\" y1=\"150\" x2=\"376\" y2=\"170\"/></g><circle cx=\"474\" cy=\"132\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"470.5\" cy=\"130\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"477.5\" cy=\"130\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"474\" cy=\"136.5\" r=\"2.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"474\" y1=\"142\" x2=\"474\" y2=\"168\"/><line x1=\"474\" y1=\"168\" x2=\"465\" y2=\"198\"/><line x1=\"474\" y1=\"168\" x2=\"483\" y2=\"198\"/><line x1=\"474\" y1=\"150\" x2=\"462\" y2=\"170\"/><line x1=\"474\" y1=\"150\" x2=\"486\" y2=\"170\"/></g><text x=\"364\" y=\"218\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Nermin</text><text x=\"474\" y=\"218\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Kâzım</text><rect x=\"6\" y=\"240\" width=\"270\" height=\"230\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"6\" y1=\"432\" x2=\"276\" y2=\"432\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"14\" y=\"259\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">3. kare</text><rect x=\"14\" y=\"267\" width=\"224\" height=\"48\" rx=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><polyline points=\"75,315 82,348 89,315\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"24\" y=\"288\" font-size=\"14\" fill=\"currentColor\">Fırın temelli kapanıyormuş!</text><text x=\"24\" y=\"306\" font-size=\"14\" fill=\"currentColor\">Artık ekmek bulamayacağız.</text><circle cx=\"86\" cy=\"366\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"82.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"89.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M82 372 Q86 368 90 372\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"86\" y1=\"376\" x2=\"86\" y2=\"402\"/><line x1=\"86\" y1=\"402\" x2=\"77\" y2=\"432\"/><line x1=\"86\" y1=\"402\" x2=\"95\" y2=\"432\"/><line x1=\"86\" y1=\"384\" x2=\"74\" y2=\"404\"/><line x1=\"86\" y1=\"384\" x2=\"98\" y2=\"404\"/></g><circle cx=\"196\" cy=\"366\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"192.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"199.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"196\" cy=\"370.5\" r=\"2.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"196\" y1=\"376\" x2=\"196\" y2=\"402\"/><line x1=\"196\" y1=\"402\" x2=\"187\" y2=\"432\"/><line x1=\"196\" y1=\"402\" x2=\"205\" y2=\"432\"/><line x1=\"196\" y1=\"384\" x2=\"184\" y2=\"404\"/><line x1=\"196\" y1=\"384\" x2=\"208\" y2=\"404\"/></g><text x=\"86\" y=\"452\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Kâzım</text><text x=\"196\" y=\"452\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Sevgi</text><rect x=\"284\" y=\"240\" width=\"270\" height=\"230\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"284\" y1=\"432\" x2=\"554\" y2=\"432\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"292\" y=\"259\" font-size=\"14\" font-weight=\"bold\" fill=\"currentColor\">4. kare · Pazartesi akşamı</text><rect x=\"292\" y=\"267\" width=\"176\" height=\"30\" rx=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><polyline points=\"377,297 384,348 391,297\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"302\" y=\"288\" font-size=\"14\" fill=\"currentColor\">Bana on ekmek verin!</text><rect x=\"416\" y=\"326\" width=\"134\" height=\"106\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"416\" y=\"326\" width=\"134\" height=\"24\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"483\" y=\"344\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">FIRIN</text><rect x=\"420\" y=\"360\" width=\"126\" height=\"46\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"483\" y=\"379\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">SALI KAPALI</text><text x=\"483\" y=\"398\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">ÇARŞAMBA AÇIK</text><circle cx=\"306\" cy=\"366\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"302.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"309.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M302 372 Q306 368 310 372\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"306\" y1=\"376\" x2=\"306\" y2=\"402\"/><line x1=\"306\" y1=\"402\" x2=\"297\" y2=\"432\"/><line x1=\"306\" y1=\"402\" x2=\"315\" y2=\"432\"/><line x1=\"306\" y1=\"384\" x2=\"294\" y2=\"404\"/><line x1=\"306\" y1=\"384\" x2=\"319\" y2=\"398\"/></g><ellipse cx=\"325\" cy=\"395\" rx=\"10\" ry=\"4.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><ellipse cx=\"325\" cy=\"386\" rx=\"10\" ry=\"4.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><ellipse cx=\"325\" cy=\"377\" rx=\"10\" ry=\"4.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><ellipse cx=\"325\" cy=\"368\" rx=\"10\" ry=\"4.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"346\" cy=\"366\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"342.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"349.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M342 372 Q346 368 350 372\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"346\" y1=\"376\" x2=\"346\" y2=\"402\"/><line x1=\"346\" y1=\"402\" x2=\"337\" y2=\"432\"/><line x1=\"346\" y1=\"402\" x2=\"355\" y2=\"432\"/><line x1=\"346\" y1=\"384\" x2=\"334\" y2=\"404\"/><line x1=\"346\" y1=\"384\" x2=\"359\" y2=\"398\"/></g><ellipse cx=\"365\" cy=\"395\" rx=\"10\" ry=\"4.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><ellipse cx=\"365\" cy=\"386\" rx=\"10\" ry=\"4.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><ellipse cx=\"365\" cy=\"377\" rx=\"10\" ry=\"4.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><ellipse cx=\"365\" cy=\"368\" rx=\"10\" ry=\"4.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"388\" cy=\"366\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"384.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"391.5\" cy=\"364\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M384 372 Q388 368 392 372\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"><line x1=\"388\" y1=\"376\" x2=\"388\" y2=\"402\"/><line x1=\"388\" y1=\"402\" x2=\"379\" y2=\"432\"/><line x1=\"388\" y1=\"402\" x2=\"397\" y2=\"432\"/><line x1=\"388\" y1=\"384\" x2=\"376\" y2=\"404\"/><line x1=\"388\" y1=\"384\" x2=\"401\" y2=\"398\"/></g><text x=\"388\" y=\"452\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Sevgi</text></svg>",
  secenekler: ["Bilgi 3. karede kısalmıştır; çünkü kapalılığın nedeni ilk kez bu karede söylenmemiştir.", "Bilgi 2. karede keskinleşmiştir; çünkü bu karede söylenen söz gerçeğe aykırıdır.", "Söylenti 4. karede durdurulabilirdi; çünkü fırındaki duyuruda çarşamba açılacağı yazmaktadır.", "Söylenti 4. karede keskinleşmiştir; çünkü Sevgi duyduğunu daha büyük ve kesin bir olaya çevirmiştir."],
  dogru: 2,
  hatalar: ["Kareleri karşılaştırmama: neden (tadilat) ve yeniden açılış günü (çarşamba) 2. karede düşmüştür; kısalma 3. karede değil, 2. karede başlar.", "Eksik bilgiyi yanlış bilgi sanma: \"Fırın yarın kapalıymış.\" sözü doğrudur, ayrıntıları eksiktir; bu keskinleşme değil, kısalmadır.", null, "Aşamaları karıştırma: Sevgi 4. karede duyduğunu değiştirmemiş, doğrulamadan harekete geçmiştir; bir günlük kapalılığı kalıcı kapanışa çeviren, 3. karedeki Kâzım'dır."],
  aciklama: `Çizgi romanda kareler arasında neyin değiştiğine bak; konuşma balonlarıyla birlikte çizimdeki yazıları da oku. Burada değişen, fırıncının sözünün ağızdan ağıza aldığı biçimdir.
Adım 1: 1. karedeki bilgiyi parçalarına ayır: ne zaman (yarın, yani salı), neden (tadilat), ne kadar (bir günlüğüne), yeniden açılış (çarşamba).
Adım 2: 2. karedeki sözü bununla karşılaştır: "Fırın yarın kapalıymış." Neden ve yeniden açılış günü düşmüş ama söz hâlâ doğru. Metne göre bu, kısalmadır. Neden 2. karede düştüğü için A, söz gerçeğe aykırı olmadığı için B elenir.
Adım 3: 3. karedeki sözü karşılaştır: "Fırın temelli kapanıyormuş!" Bir günlük kapalılık kalıcı bir kapanışa dönüşmüş. Metne göre keskinleşme budur ve 3. karede, Kâzım'ın sözüyle olmuştur.
Adım 4: 4. karede Sevgi duyduğunu değiştirmiyor, on ekmek istiyor. Bu, metindeki son aşamadır: doğrulamadan harekete geçme. Keskinleşme bu karede olmadığı için D elenir.
Adım 5: 4. karedeki çizime bak: fırındaki duyuruda "Salı kapalı, çarşamba açık" yazıyor. Fırıncının 1. karede söylediği bilgi kuyruktakilerin gözünün önünde duruyor. Metne göre söylenti, zincirin herhangi bir halkasında ilk kaynağa dönülerek durdurulur; Sevgi duyuruyu okusaydı fırının temelli kapanmadığını görürdü. C söylenebilir.
Sık yapılan hata: konuşma balonlarını okuyup çizimdeki ayrıntıyı (fırındaki duyuruyu) atlamak. Çizgi romanda çizim de bilgi taşır.
Cevap C.`
},
{
  id: "tur-gg-322",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Bir müze, eserlerin yıpranmaması için sergi salonlarında iki şeyi denetlemektedir: eserin üzerine düşen ışık ve havadaki nem. Işık, lüks adı verilen birimle ölçülür. Her eser grubunun dayanabildiği sınırlar Tablo 1'de, müzenin dört salonunda aynı gün yapılan ölçümler Tablo 2'de verilmiştir. Pencereli salonlarda ışık öğleden sonra arttığı için ışık günde iki kez ölçülmektedir. Bir eser, ancak ışık ve nem ölçümlerinin hepsi kendi grubunun sınırları içinde kalan bir salonda sergilenebilir.
**Bu bilgilere göre aşağıdaki yerleştirmelerden hangisi müzenin kurallarına __uymamaktadır__?**`,
  gorsel: "<table class=\"tablo\"><caption>Tablo 1: Eser gruplarının dayanabildiği sınırlar</caption><tr><th>Eser grubu</th><th>Işık</th><th>Nem</th></tr><tr><td>Kâğıt ve kumaş</td><td>en fazla 50 lüks</td><td>%45-%55</td></tr><tr><td>Yağlı boya ve ahşap</td><td>en fazla 200 lüks</td><td>%45-%55</td></tr><tr><td>Taş ve seramik</td><td>en fazla 300 lüks</td><td>%30-%60</td></tr><tr><td>Metal</td><td>en fazla 300 lüks</td><td>en fazla %40</td></tr></table><table class=\"tablo\"><caption>Tablo 2: Salonlarda yapılan ölçümler</caption><tr><th>Salon</th><th>Sabah ışığı (lüks)</th><th>Öğleden sonra ışığı (lüks)</th><th>Nem</th></tr><tr><td>1. salon</td><td>40</td><td>55</td><td>%50</td></tr><tr><td>2. salon</td><td>150</td><td>190</td><td>%50</td></tr><tr><td>3. salon</td><td>220</td><td>280</td><td>%35</td></tr><tr><td>4. salon</td><td>260</td><td>290</td><td>%58</td></tr></table>",
  secenekler: ["Bakır ibriğin 3. salonda sergilenmesi", "Ahşap sandığın 2. salonda sergilenmesi", "El yazmasının 1. salonda sergilenmesi", "Mermer heykelin 4. salonda sergilenmesi"],
  dogru: 2,
  hatalar: ["Nem sınırını ters okuma: metalin nem sınırı \"en fazla %40\"tır; 3. salondaki %35 bu sınırın altındadır, ışık da en çok 280 lükstür. Yerleştirme kurallara uyar.", "Sınıra yakın değeri aşılmış sanma: 2. salonda ışık en çok 190 lükstür, 200 sınırının altındadır; nem de %50'dir. Yerleştirme kurallara uyar.", null, "Yanlış satırı uygulama: %58 nem öteki üç grup için fazladır ama taşın aralığı %30-%60'tır; ışık da en çok 290 lükstür. Yerleştirme kurallara uyar."],
  aciklama: `İki tablolu sorularda önce eserin hangi gruba girdiğini bul, sonra o grubun sınırlarını salonun üç ölçümüyle (sabah ışığı, öğleden sonra ışığı, nem) karşılaştır.
Adım 1: Bakır ibrik metaldir: ışık en fazla 300 lüks, nem en fazla %40. 3. salonda ışık 220 ve 280 lüks, nem %35. Uyar.
Adım 2: Ahşap sandık, yağlı boya ve ahşap grubundadır: ışık en fazla 200 lüks, nem %45-%55. 2. salonda ışık 150 ve 190 lüks, nem %50. Uyar.
Adım 3: El yazması kâğıda yazılmış bir eserdir; kâğıt ve kumaş grubuna girer: ışık en fazla 50 lüks. 1. salonda sabah 40 lüks ölçülmüştür ama öğleden sonra ışık 55 lükse çıkmaktadır. Ölçümlerin hepsi sınırın içinde kalmalıydı. Uymaz.
Adım 4: Mermer heykel taştır: ışık en fazla 300 lüks, nem %30-%60. 4. salonda ışık 260 ve 290 lüks, nem %58. %58 öteki üç grup için fazladır ama taş ve seramiğin aralığının içindedir. Uyar.
Sık yapılan hata: sabah ölçümüne bakıp öğleden sonra ölçümünü atlamak ya da bir grubun nem sınırını başka bir gruba uygulamak. Her eseri kendi satırıyla sına.
Cevap C.`
},
{
  id: "tur-gg-323",
  kazanim: "T.8.3.27",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gençlik dergisi, "Okurlarımızdan" köşesinde aşağıdaki karikatürü şu okur mektubuyla aynı sayfada yayımlamıştır:
"Geçen ay ilçemizde okullar arası bir bilgi yarışması yapıldı. Bütün okullara aynı sorular soruldu, aynı süre verildi; kimse kayırılmadı. Yine de finale kalan dört takımın dördü de kütüphanesi ve deney odası olan merkez okullarındandı. Finali bir soruyla kaçıran bizim köy okulunun çocukları ise iki ay boyunca her teneffüs tek bir ansiklopediyi sırayla okumuş, deneyleri de kitaptaki resimlerden öğrenmişti. Ödül töreninde düzenleyenler sonucu 'Herkes aynı sorularla yarıştı, kazanan hak etti.' diye duyurdu. Soruların aynı olduğu doğru; ama o akşam salondan çıkarken içim rahat değildi, çünkü bizim çocukların elindeki ile ötekilerin elindeki aynı değildi."
**Karikatür ile okur mektubunun ortak iletisi aşağıdakilerden hangisidir?**`,
  gorsel: "<svg viewBox=\"0 0 560 296\" role=\"img\" aria-label=\"Karikatür: Üç kulvarlı koşu pisti; birinci kulvar boş, ikinci kulvarda iki engel, üçüncü kulvarda dört engel ve bir duvar var. Hakem yarışın adil olduğunu söylüyor.\"><circle cx=\"46\" cy=\"48.6\" r=\"9\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"42.85\" cy=\"46.8\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"49.15\" cy=\"46.8\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M42.4 51.3 Q46 54.9 49.6 51.3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><g stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\"><line x1=\"46\" y1=\"57.6\" x2=\"46\" y2=\"81\"/><line x1=\"46\" y1=\"81\" x2=\"37.9\" y2=\"108\"/><line x1=\"46\" y1=\"81\" x2=\"54.1\" y2=\"108\"/><line x1=\"46\" y1=\"64.8\" x2=\"28\" y2=\"64\"/><line x1=\"46\" y1=\"64.8\" x2=\"56.8\" y2=\"82.8\"/></g><line x1=\"28\" y1=\"64\" x2=\"28\" y2=\"44\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"28,44 28,58 10,51\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"40\" y=\"124\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Hakem</text><rect x=\"96\" y=\"10\" width=\"206\" height=\"48\" rx=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><polyline points=\"107,58 60,44 121,58\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"106\" y=\"31\" font-size=\"14\" fill=\"currentColor\">Mesafe aynı, düdük aynı.</text><text x=\"106\" y=\"49\" font-size=\"14\" fill=\"currentColor\">Adil bir yarış olsun!</text><text x=\"516\" y=\"124\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">BİTİŞ</text><text x=\"132\" y=\"124\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">BAŞLANGIÇ</text><rect x=\"330\" y=\"12\" width=\"218\" height=\"30\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"439\" y=\"32\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">OKULLAR ARASI KOŞU</text><line x1=\"92\" y1=\"176\" x2=\"548\" y2=\"176\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"92\" y1=\"130\" x2=\"548\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\" stroke-dasharray=\"5 5\"/><text x=\"8\" y=\"162\" font-size=\"14\" fill=\"currentColor\">1. kulvar</text><line x1=\"132\" y1=\"132\" x2=\"132\" y2=\"176\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"516\" y1=\"132\" x2=\"516\" y2=\"176\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><circle cx=\"112\" cy=\"139.04\" r=\"5.6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><g stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\"><line x1=\"112\" y1=\"144.64\" x2=\"112\" y2=\"159.2\"/><line x1=\"112\" y1=\"159.2\" x2=\"106.96\" y2=\"176\"/><line x1=\"112\" y1=\"159.2\" x2=\"117.04\" y2=\"176\"/><line x1=\"112\" y1=\"149.12\" x2=\"105.28\" y2=\"160.32\"/><line x1=\"112\" y1=\"149.12\" x2=\"118.72\" y2=\"160.32\"/></g><line x1=\"92\" y1=\"228\" x2=\"548\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"92\" y1=\"182\" x2=\"548\" y2=\"182\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\" stroke-dasharray=\"5 5\"/><text x=\"8\" y=\"214\" font-size=\"14\" fill=\"currentColor\">2. kulvar</text><line x1=\"132\" y1=\"184\" x2=\"132\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"516\" y1=\"184\" x2=\"516\" y2=\"228\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><circle cx=\"112\" cy=\"191.04\" r=\"5.6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><g stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\"><line x1=\"112\" y1=\"196.64\" x2=\"112\" y2=\"211.2\"/><line x1=\"112\" y1=\"211.2\" x2=\"106.96\" y2=\"228\"/><line x1=\"112\" y1=\"211.2\" x2=\"117.04\" y2=\"228\"/><line x1=\"112\" y1=\"201.12\" x2=\"105.28\" y2=\"212.32\"/><line x1=\"112\" y1=\"201.12\" x2=\"118.72\" y2=\"212.32\"/></g><line x1=\"92\" y1=\"280\" x2=\"548\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"92\" y1=\"234\" x2=\"548\" y2=\"234\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\" stroke-dasharray=\"5 5\"/><text x=\"8\" y=\"266\" font-size=\"14\" fill=\"currentColor\">3. kulvar</text><line x1=\"132\" y1=\"236\" x2=\"132\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"516\" y1=\"236\" x2=\"516\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><circle cx=\"112\" cy=\"243.04\" r=\"5.6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><g stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\"><line x1=\"112\" y1=\"248.64\" x2=\"112\" y2=\"263.2\"/><line x1=\"112\" y1=\"263.2\" x2=\"106.96\" y2=\"280\"/><line x1=\"112\" y1=\"263.2\" x2=\"117.04\" y2=\"280\"/><line x1=\"112\" y1=\"253.12\" x2=\"105.28\" y2=\"264.32\"/><line x1=\"112\" y1=\"253.12\" x2=\"118.72\" y2=\"264.32\"/></g><path d=\"M230 228 V206 H248 V228\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"230\" y1=\"214\" x2=\"248\" y2=\"214\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M390 228 V206 H408 V228\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"390\" y1=\"214\" x2=\"408\" y2=\"214\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M180 280 V258 H198 V280\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"180\" y1=\"266\" x2=\"198\" y2=\"266\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M255 280 V258 H273 V280\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"255\" y1=\"266\" x2=\"273\" y2=\"266\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M330 280 V258 H348 V280\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"330\" y1=\"266\" x2=\"348\" y2=\"266\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M405 280 V258 H423 V280\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><line x1=\"405\" y1=\"266\" x2=\"423\" y2=\"266\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"458\" y=\"242\" width=\"16\" height=\"38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>",
  secenekler: ["Koşullar eşit değilse yarışın kuralları geride kalanların lehine değiştirilmelidir.", "Koşulları elverişsiz olanlar, kurallar eşit olsa da yarışmayı kazanamaz.", "Kütüphanesi ve deney odası olmayan okullar, yarışmalara ötekiler gibi hazırlanamaz.", "Kuralların herkese aynı uygulanması, koşullar eşit değilse yarışı adil kılmaz."],
  dogru: 3,
  hatalar: ["Kaynakların ima etmediği yorum: karikatür de mektup da yarışa \"adil\" denmesini eleştirir; kuralların birilerinin lehine değiştirilmesini önermez.", "Aşırı genelleme: karikatür de mektup da yarışın adil olmadığını söyler, elverişsiz koşuldakinin kazanamayacağını söylemez; köy okulu finali bir soruyla kaçırmıştır.", "Yalnızca bir kaynağa uyma: kütüphane ve deney odası mektupta geçer; karikatürde okulların imkânlarından söz edilmez, bu yüzden ortak ileti olamaz.", null],
  aciklama: `Karikatürde söz ile çizim çelişiyorsa ileti oradadır. Ortak ileti sorusunda önce her kaynağın ne dediğini ayrı ayrı bul, sonra ikisinde de bulunan düşünceyi seç. Yalnızca bir kaynakta bulunan düşünce, doğru olsa bile ortak ileti olamaz.
Adım 1: Karikatürde hakem "Mesafe aynı, düdük aynı." diyor: kural herkese aynı. Çizimde ise 1. kulvar boş, 2. kulvarda iki engel, 3. kulvarda dört engel ve bir duvar var: koşullar aynı değil.
Adım 2: Mektupta sorular ve süre herkese aynı: kural aynı. Ama merkez okullarında kütüphane ve deney odası, köy okulunda tek bir ansiklopedi var, deneyler resimden öğreniliyor: koşullar aynı değil.
Adım 3: İki kaynakta da yetkili kişi yarışı adil sayıyor; çizer ve mektubun yazarı ise buna katılmıyor. Ortak ileti şudur: kuralların aynı olması, koşullar eşit değilse adaleti sağlamaz. Bu, D'dir.
Adım 4: Öteki şıkları sına. A bir çözüm önerir; oysa iki kaynak da kuralların değiştirilmesini istemez, yarışa "adil" denmesini eleştirir. B "kazanamaz" diyerek iki kaynağın da söylemediği bir kesinlik ekler; köy okulu finali bir soruyla kaçırmıştır. C mektuba uyar ama karikatürde kütüphaneden, deney odasından söz edilmez.
Sık yapılan hata: C'yi işaretlemek. C mektubun anlattığı durumu doğru özetler; ama soru iki kaynağın ortak iletisini sorar. Karikatürün de söylediği düşünce okulların imkânı değil, eşit kuralın eşit olmayan koşullarda adaleti sağlamadığıdır.
Cevap D.`
},
{
  id: "tur-gg-324",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Defne, Koray ve Sarp dört günlük bir doğa kampına katılmıştır. Kampta her sabah herkes o gün yürüyeceği parkuru kendisi seçmiş, akşam da kaç kilometre yürüdüğünü kamp defterine yazmıştır. Defne, kamp dönüşünde günlüğüne şunları not etmiştir:
"İlk gün en az yolu ben yürüdüm. İkinci gün Koray'la aynı uzunlukta parkurlar seçmişiz, Sarp ikimizin de gerisinde kaldı. Üçüncü gün üçümüzün yürüdüğü toplam yol, ilk günkü toplamımızın tam iki katıydı. Dört gün boyunca her gün bir önceki günden daha uzun yürüyen tek kişi bendim. Yine de dört günün toplamında en çok yolu Koray yürüdü."
**Bu günlüğe göre üç arkadaşın günlere göre yürüdüğü yolu (km) gösteren tablo aşağıdakilerden hangisi olabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Tablo I</th><th>1. gün</th><th>2. gün</th><th>3. gün</th><th>4. gün</th></tr><tr><td>Defne</td><td>6</td><td>10</td><td>14</td><td>15</td></tr><tr><td>Koray</td><td>8</td><td>10</td><td>12</td><td>16</td></tr><tr><td>Sarp</td><td>8</td><td>7</td><td>18</td><td>9</td></tr></table><table class=\"tablo\"><tr><th>Tablo II</th><th>1. gün</th><th>2. gün</th><th>3. gün</th><th>4. gün</th></tr><tr><td>Defne</td><td>8</td><td>12</td><td>16</td><td>18</td></tr><tr><td>Koray</td><td>10</td><td>12</td><td>20</td><td>14</td></tr><tr><td>Sarp</td><td>10</td><td>9</td><td>20</td><td>15</td></tr></table><table class=\"tablo\"><tr><th>Tablo III</th><th>1. gün</th><th>2. gün</th><th>3. gün</th><th>4. gün</th></tr><tr><td>Defne</td><td>7</td><td>11</td><td>13</td><td>16</td></tr><tr><td>Koray</td><td>9</td><td>11</td><td>17</td><td>12</td></tr><tr><td>Sarp</td><td>8</td><td>10</td><td>16</td><td>11</td></tr></table><table class=\"tablo\"><tr><th>Tablo IV</th><th>1. gün</th><th>2. gün</th><th>3. gün</th><th>4. gün</th></tr><tr><td>Defne</td><td>9</td><td>13</td><td>17</td><td>20</td></tr><tr><td>Koray</td><td>11</td><td>13</td><td>21</td><td>12</td></tr><tr><td>Sarp</td><td>10</td><td>8</td><td>22</td><td>14</td></tr></table>",
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: ["Bir koşulu atlama: Tablo I'de Koray da her gün bir öncekinden uzun yürümüştür (8, 10, 12, 16); \"tek kişi\" koşulu bozulur.", null, "Hesabı yapmadan eleme: Tablo III'te ilk günün toplamı 24, üçüncü günün toplamı 46'dır; 24'ün iki katı 48 eder, koşul bozulur.", "Toplamı hesaplamama: Tablo IV'te Defne 59, Koray 57 km yürümüştür; toplamda en çok yolu Koray yürümüş olmaz."],
  aciklama: `Metinden tabloya geçerken günlükteki her cümleyi bir koşul olarak yaz, sonra her tabloyu koşul koşul sına. Bir koşulu bozan tablo elenir.
Koşullar: (1) İlk gün en az yolu Defne yürüdü. (2) İkinci gün Defne ile Koray eşit, Sarp ikisinden az. (3) Üçüncü günün toplamı, ilk günün toplamının iki katı. (4) Her gün bir öncekinden uzun yürüyen tek kişi Defne. (5) Dört günün toplamında birinci Koray.
Adım 1: Tablo I. Koray 8, 10, 12 ve 16 km yürümüş: o da her gün bir öncekinden uzun yürümüş. (4) bozulur.
Adım 2: Tablo III. İlk gün 7 + 9 + 8 = 24, üçüncü gün 13 + 17 + 16 = 46. 24'ün iki katı 48'dir. (3) bozulur.
Adım 3: Tablo IV. Toplamlar: Defne 9 + 13 + 17 + 20 = 59, Koray 11 + 13 + 21 + 12 = 57. Defne öndedir. (5) bozulur.
Adım 4: Tablo II. İlk gün 8 < 10; ikinci gün 12 = 12 ve Sarp 9; üçüncü gün 16 + 20 + 20 = 56, ilk gün 8 + 10 + 10 = 28; her gün artıran bir kişi var, o da Defne (8, 12, 16, 18); toplamlar 54, 56 ve 54. Beş koşul da sağlanır.
Sık yapılan hata: ilk iki koşulu sağlayan ilk tabloyu işaretlemek. Dört tablo da ilk iki koşulu sağlar; tabloları ayırt eden, hesap gerektiren son üç koşuldur.
Cevap B.`
},
{
  id: "tur-gg-325",
  kazanim: "T.8.3.32",
  kademe: 3,
  zorluk: 4,
  soru: `Zeytin ağacı, bol ürün verdiği yılın ardından çoğu zaman dinlenir ve az ürün verir. Üreticiler bol ürünlü yıla "var yılı", onu izleyen yıla "yok yılı" der. Uzmanlara göre düzenli sulama, bu iniş çıkışı büsbütün ortadan kaldırmasa da yumuşatır. Bir zeytin kooperatifi bu görüşü sınamak için ağaçları aynı yaşta ve aynı çeşitten olan iki bahçesini karşılaştırmıştır: hiç sulanmayan Yamaç bahçesi ile damla sulama yapılan Ova bahçesi. İki bahçenin altı yıllık ürünü aşağıdaki grafikte gösterilmiştir. Kooperatifin raporu şu cümleyle bitmektedir: "Altı yılın sayıları uzmanları doğruluyor: - - - -"
**Grafiğe göre bu raporda boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: "<svg viewBox=\"0 0 560 354\" role=\"img\" aria-label=\"Grafik: Yamaç ve Ova bahçelerinin 2020-2025 yıllarındaki zeytin ürünü\"><text x=\"12\" y=\"22\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Bahçelere göre yıllık zeytin ürünü</text><line x1=\"58\" y1=\"43\" x2=\"92\" y2=\"43\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"75\" cy=\"43\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><text x=\"100\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Yamaç bahçesi</text><line x1=\"232\" y1=\"43\" x2=\"266\" y2=\"43\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><rect x=\"244\" y=\"38\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><text x=\"274\" y=\"48\" font-size=\"14\" fill=\"currentColor\">Ova bahçesi</text><text x=\"12\" y=\"74\" font-size=\"14\" fill=\"currentColor\">Ürün (ton)</text><text x=\"50\" y=\"325\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">0</text><line x1=\"58\" y1=\"288\" x2=\"548\" y2=\"288\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"293\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">2</text><line x1=\"58\" y1=\"256\" x2=\"548\" y2=\"256\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"261\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">4</text><line x1=\"58\" y1=\"224\" x2=\"548\" y2=\"224\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"229\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">6</text><line x1=\"58\" y1=\"192\" x2=\"548\" y2=\"192\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"197\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">8</text><line x1=\"58\" y1=\"160\" x2=\"548\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"165\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">10</text><line x1=\"58\" y1=\"128\" x2=\"548\" y2=\"128\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"133\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">12</text><line x1=\"58\" y1=\"96\" x2=\"548\" y2=\"96\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"50\" y=\"101\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">14</text><line x1=\"58\" y1=\"88\" x2=\"58\" y2=\"320\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"58\" y1=\"320\" x2=\"548\" y2=\"320\" stroke=\"currentColor\" stroke-width=\"2\"/><polyline points=\"98.83,128 180.5,256 262.17,128 343.83,256 425.5,160 507.17,256\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\" stroke-linejoin=\"round\"/><polyline points=\"98.83,192 180.5,224 262.17,176 343.83,208 425.5,160 507.17,192\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-linejoin=\"round\" stroke-dasharray=\"8 5\"/><circle cx=\"98.83\" cy=\"128\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><circle cx=\"180.5\" cy=\"256\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><circle cx=\"262.17\" cy=\"128\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><circle cx=\"343.83\" cy=\"256\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><circle cx=\"425.5\" cy=\"160\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><circle cx=\"507.17\" cy=\"256\" r=\"5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2.5\"/><rect x=\"93.83\" y=\"187\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><rect x=\"175.5\" y=\"219\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><rect x=\"257.17\" y=\"171\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><rect x=\"338.83\" y=\"203\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><rect x=\"420.5\" y=\"155\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><rect x=\"502.17\" y=\"187\" width=\"10\" height=\"10\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu2)\" stroke-width=\"2.5\"/><text x=\"98.83\" y=\"117\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">12</text><text x=\"180.5\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">4</text><text x=\"262.17\" y=\"117\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">12</text><text x=\"343.83\" y=\"277\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">4</text><text x=\"425.5\" y=\"149\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">10</text><text x=\"507.17\" y=\"245\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">4</text><text x=\"98.83\" y=\"181\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">8</text><text x=\"180.5\" y=\"213\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">6</text><text x=\"262.17\" y=\"165\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">9</text><text x=\"343.83\" y=\"197\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">7</text><text x=\"425.5\" y=\"185\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">10</text><text x=\"507.17\" y=\"181\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">8</text><text x=\"98.83\" y=\"340\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2020</text><text x=\"180.5\" y=\"340\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2021</text><text x=\"262.17\" y=\"340\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2022</text><text x=\"343.83\" y=\"340\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2023</text><text x=\"425.5\" y=\"340\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2024</text><text x=\"507.17\" y=\"340\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">2025</text></svg>",
  secenekler: ["Ova bahçesinde yok yıllarının hepsinde düşüş daha küçük kalmış, toplamda da Ova öne geçmiştir.", "Ova bahçesinde sulama var-yok döngüsünü ortadan kaldırmış, ürün her yıl bir önceki yılı geçmiştir.", "Yamaç bahçesi var yıllarının hepsinde daha çok ürün vermiş, altı yılın toplamında da öne geçmiştir.", "İki bahçede de var yılları aynı yıllara denk gelmiş, ürün yok yıllarında önceki yılın yarısının altına inmiştir."],
  dogru: 0,
  hatalar: [null, "Aşırı genelleme: Ova bahçesinde ürün 2021, 2023 ve 2025'te düşmüştür; sulama döngüyü kaldırmamış, yumuşatmıştır.", "Kısmen doğru: Yamaç 2020 ve 2022'de öndedir ama 2024'te iki bahçe eşittir (10 ton); toplamda da Ova (48 ton) Yamaç'ı (46 ton) geçer.", "Kısmen doğru: var yılları aynıdır ama ürün yok yıllarında Yamaç'ta önceki yılın yarısının altına inerken Ova'da inmez (8'den 6'ya düşer)."],
  aciklama: `Boşluğa gelecek cümle hem metindeki düşünceyle hem grafikteki sayılarla uyuşmalıdır. İki parçalı şıkta iki parçayı da ayrı ayrı sına.
Adım 1: Var ve yok yıllarını belirle. İki bahçede de 2020, 2022 ve 2024 bol ürünlü (var), 2021, 2023 ve 2025 az ürünlü (yok) yıllardır.
Adım 2: Yok yıllarındaki düşüşleri bul. Yamaç: 12 → 4, 12 → 4, 10 → 4 (8, 8 ve 6 ton düşüş). Ova: 8 → 6, 9 → 7, 10 → 8 (her seferinde 2 ton düşüş).
Adım 3: Altı yılın toplamını bul. Yamaç 12 + 4 + 12 + 4 + 10 + 4 = 46 ton, Ova 8 + 6 + 9 + 7 + 10 + 8 = 48 ton.
Adım 4: Şıkları sına. A'nın iki parçası da doğrudur. B: Ova'da ürün yok yıllarında düşmüştür, döngü ortadan kalkmamıştır. C: 2024'te iki bahçe eşittir (10 ton), toplamda da Ova öndedir. D: var yılları aynıdır ama Ova'da ürün önceki yılın yarısının altına inmemiştir (8'in yarısı 4'tür, ertesi yılın ürünü 6 tondur).
Sık yapılan hata: şıkkın doğru olan ilk yarısını görüp ikinci yarısını sınamadan işaretlemek. C ve D'nin birer parçası doğru, öteki parçası yanlıştır.
Cevap A.`
},
{
  id: "tur-gg-001",
  kazanim: "T.8.3.27",
  kademe: 0,
  zorluk: 1,
  soru: `Okul panosunda aşağıdaki afiş asılıdır.
**Bu afişe göre turnuvaya katılmak isteyen bir öğrenci en geç hangi tarihte kayıt yaptırmalıdır?**`,
  gorsel: `<svg viewBox="0 0 560 196" role="img" aria-label="Satranç turnuvası afişi"><rect x="10" y="6" width="540" height="184" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><rect x="10" y="6" width="540" height="38" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="280" y="32" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">SATRANÇ TURNUVASI</text><text x="26" y="70" font-size="14" fill="currentColor">Tarih: 18 Ekim</text><text x="26" y="95" font-size="14" fill="currentColor">Saat: 14.00</text><text x="26" y="120" font-size="14" fill="currentColor">Yer: Okul spor salonu</text><text x="26" y="145" font-size="14" fill="currentColor">Katılım ücretsizdir.</text><text x="26" y="170" font-size="14" font-weight="bold" fill="currentColor">Kayıt için son gün: 15 Ekim</text><g stroke="currentColor" stroke-width="2" fill="var(--vurgu)"><path d="M470,150 h40 v-10 h-8 l-4,-30 q10,-8 0,-18 q-12,-8 -16,0 q-8,10 2,18 l-6,30 h-8 z"/></g></svg>`,
  secenekler: [
    "14 Ekim",
    "15 Ekim",
    "17 Ekim",
    "18 Ekim"
  ],
  dogru: 1,
  hatalar: [
    "Son günü hariç sanma: \"Kayıt için son gün: 15 Ekim\" ifadesi 15 Ekim'i de kapsar.",
    null,
    "Afişteki bilgiyi tahminle değiştirme: kayıt için son gün açıkça 15 Ekim olarak yazılmıştır.",
    "Turnuva tarihini kayıt tarihiyle karıştırma: 18 Ekim turnuvanın yapılacağı gündür."
  ],
  aciklama: `Afiş sorularında sorulan bilginin hangi satırda olduğunu bul; benzer bilgileri (etkinlik tarihi, kayıt tarihi) karıştırma.
Adım 1: Afişte iki tarih var: turnuva tarihi (18 Ekim) ve kayıt için son gün (15 Ekim).
Adım 2: Soru kaydı soruyor. "Son gün" o günün de dâhil olduğunu gösterir; en geç 15 Ekim'de kayıt yaptırılabilir.
Sık yapılan hata: Afişte ilk gördüğün tarihi (18 Ekim) cevap sanmak.
Cevap B.`
},
{
  id: "tur-gg-002",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 1,
  soru: `Bir sınıftaki öğrencilere en sevdikleri meyve sorulmuş, her öğrenci yalnızca bir meyve söylemiştir. Sonuçlar aşağıdaki grafikte gösterilmiştir.
**Grafiğe göre elmayı seven öğrenci sayısı, portakalı sevenlerden kaç fazladır?**`,
  gorsel: `<svg viewBox="0 0 560 290" role="img" aria-label="Grafik: En sevilen meyveye göre öğrenci sayısı"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: En sevilen meyve (öğrenci sayısı)</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="72" y1="182.7" x2="546" y2="182.7"/><line x1="72" y1="117.3" x2="546" y2="117.3"/><line x1="72" y1="52" x2="546" y2="52"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="72" y1="44" x2="72" y2="248"/><line x1="72" y1="248" x2="546" y2="248"/></g><text x="66" y="253" font-size="14" text-anchor="end" fill="currentColor">0</text><text x="66" y="187.7" font-size="14" text-anchor="end" fill="currentColor">4</text><text x="66" y="122.3" font-size="14" text-anchor="end" fill="currentColor">8</text><text x="66" y="57" font-size="14" text-anchor="end" fill="currentColor">12</text><rect x="108.3" y="117.3" width="44" height="130.7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="130.3" y="111.3" font-size="14" text-anchor="middle" fill="currentColor">8</text><text x="131.3" y="270" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Elma</text><rect x="226.8" y="150" width="44" height="98" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="248.8" y="144" font-size="14" text-anchor="middle" fill="currentColor">6</text><text x="249.8" y="270" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Muz</text><rect x="345.3" y="84.7" width="44" height="163.3" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="367.3" y="78.7" font-size="14" text-anchor="middle" fill="currentColor">10</text><text x="368.3" y="270" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Çilek</text><rect x="463.8" y="182.7" width="44" height="65.3" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="485.8" y="176.7" font-size="14" text-anchor="middle" fill="currentColor">4</text><text x="486.8" y="270" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Portakal</text></svg>`,
  secenekler: [
    "2",
    "4",
    "6",
    "8"
  ],
  dogru: 1,
  hatalar: [
    "Yanlış çubuğu alma: 2, elma (8) ile muz (6) arasındaki farktır.",
    null,
    "Yanlış çubuğu alma: 6, çilek (10) ile portakal (4) arasındaki farktır.",
    "Farkı almama: 8, yalnızca elmayı seven öğrenci sayısıdır."
  ],
  aciklama: `Adım 1: Grafikten elmayı sevenlerin sayısını oku: 8.
Adım 2: Portakalı sevenlerin sayısını oku: 4.
Adım 3: "Kaç fazla" farkı sorar: 8 − 4 = 4.
Sağlama: 4 + 4 = 8.
Cevap B.`
},
{
  id: "tur-gg-003",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 1,
  soru: `Bir botanik bahçesinin ziyaret saatleri aşağıdaki tabloda verilmiştir.
**Tabloya göre botanik bahçesi aşağıdaki zamanların hangisinde ziyarete açıktır?**`,
  gorsel: `<table class="tablo"><tr><th>Günler</th><th>Açılış</th><th>Kapanış</th></tr><tr><td>Pazartesi-Cuma</td><td>09.00</td><td>18.00</td></tr><tr><td>Cumartesi</td><td>10.00</td><td>14.00</td></tr><tr><td>Pazar</td><td>Kapalı</td><td>Kapalı</td></tr></table>`,
  secenekler: [
    "Salı, saat 08.30",
    "Cumartesi, saat 15.00",
    "Pazar, saat 11.00",
    "Perşembe, saat 17.30"
  ],
  dogru: 3,
  hatalar: [
    "Açılış saatini atlama: hafta içi bahçe 09.00'da açılır; 08.30'da henüz kapalıdır.",
    "Hafta içi saatini cumartesiye uygulama: cumartesi kapanış saati 14.00'tür.",
    "Kapalı günü gözden kaçırma: bahçe pazar günü hiç açılmaz.",
    null
  ],
  aciklama: `Adım 1: Her şıkta önce günün hangi satırda olduğunu bul, sonra saatin açılış ile kapanış arasında olup olmadığına bak.
Adım 2: Salı → Pazartesi-Cuma satırı, 09.00-18.00; 08.30 bu aralıkta değil.
Adım 3: Cumartesi 10.00-14.00; 15.00 bu aralıkta değil. Pazar kapalı.
Adım 4: Perşembe → 09.00-18.00; 17.30 bu aralıktadır.
Cevap D.`
},
{
  id: "tur-gg-004",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Yusuf'un girdiği beş deneme sınavındaki Türkçe netleri aşağıdaki grafikte gösterilmiştir.
**Bu grafiğe göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Grafik: Beş denemede Türkçe net sayısı"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: Denemelere göre Türkçe neti</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="72" y1="206.5" x2="546" y2="206.5"/><line x1="72" y1="155" x2="546" y2="155"/><line x1="72" y1="103.5" x2="546" y2="103.5"/><line x1="72" y1="52" x2="546" y2="52"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="72" y1="44" x2="72" y2="258"/><line x1="72" y1="258" x2="546" y2="258"/></g><text x="66" y="263" font-size="14" text-anchor="end" fill="currentColor">0</text><text x="66" y="211.5" font-size="14" text-anchor="end" fill="currentColor">5</text><text x="66" y="160" font-size="14" text-anchor="end" fill="currentColor">10</text><text x="66" y="108.5" font-size="14" text-anchor="end" fill="currentColor">15</text><text x="66" y="57" font-size="14" text-anchor="end" fill="currentColor">20</text><polyline points="119.4,134.4 214.2,113.8 309,124.1 403.8,93.2 498.6,72.6" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="119.4" cy="134.4" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="119.4" y="124.4" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">12</text><circle cx="214.2" cy="113.8" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="214.2" y="103.8" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">14</text><circle cx="309" cy="124.1" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="309" y="114.1" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">13</text><circle cx="403.8" cy="93.2" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="403.8" y="83.2" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">16</text><circle cx="498.6" cy="72.6" r="5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="498.6" y="62.6" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">18</text><line x1="119.4" y1="258" x2="119.4" y2="263" stroke="currentColor" stroke-width="2"/><text x="119.4" y="280" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">1. deneme</text><line x1="214.2" y1="258" x2="214.2" y2="263" stroke="currentColor" stroke-width="2"/><text x="214.2" y="280" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">2. deneme</text><line x1="309" y1="258" x2="309" y2="263" stroke="currentColor" stroke-width="2"/><text x="309" y="280" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">3. deneme</text><line x1="403.8" y1="258" x2="403.8" y2="263" stroke="currentColor" stroke-width="2"/><text x="403.8" y="280" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">4. deneme</text><line x1="498.6" y1="258" x2="498.6" y2="263" stroke="currentColor" stroke-width="2"/><text x="498.6" y="280" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">5. deneme</text></svg>`,
  secenekler: [
    "En büyük artış, üçüncü denemeden dördüncüye geçerken olmuştur.",
    "Yusuf'un altıncı denemedeki neti de yükselmeye devam edecektir.",
    "Yusuf'un son denemedeki neti, ilk denemedekinin iki katıdır.",
    "Yusuf'un neti her denemede bir önceki denemeye göre artmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Grafiği aşan tahmin: grafik yalnızca yapılmış beş denemeyi gösterir; sonraki denemenin sonucu bu verilerden bilinemez.",
    "İki katı yanlış hesaplama: 12'nin iki katı 24'tür; son net 18'dir.",
    "Düşüşü görmeme: 2. denemede 14 olan net, 3. denemede 13'e inmiştir."
  ],
  aciklama: `Adım 1: Değerleri oku: 12, 14, 13, 16, 18.
Adım 2: Denemeler arası değişimi bul: +2, −1, +3, +2. En büyük artış +3 ile 3. denemeden 4. denemeye geçişte.
Adım 3: B: Grafikte altıncı deneme yoktur; gelecekteki sonuç bu verilerden tahmin edilemez. C: 12 × 2 = 24 ≠ 18. D: 14 → 13 düşüş var.
Sık yapılan hata: En yüksek değeri (18) en büyük artış sanmak. Artış iki değer arasındaki farktır.
Cevap A.`
},
{
  id: "tur-gg-005",
  kazanim: "T.8.3.27",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıdaki iki karelik çizgi romanda, okul kütüphanesine kitap taşıyan bir öğrenci ile arkadaşı çizilmiştir. Çizgi romanda hiç konuşma kullanılmamıştır.
**Bu çizgi romanda öne çıkan değer aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 560 250" role="img" aria-label="İki karelik çizgi roman: kitap yığını ve paylaşılan yük"><rect x="4" y="4" width="274" height="242" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="94" cy="158" r="11" fill="var(--dolgu)"/><line x1="94" y1="169" x2="94" y2="204"/><line x1="94" y1="204" x2="82" y2="236"/><line x1="94" y1="204" x2="106" y2="236"/><line x1="94" y1="180" x2="118" y2="186"/><line x1="94" y1="180" x2="116" y2="192"/><path d="M89,165 Q94,160 99,165" stroke-width="1.5"/></g><rect x="104" y="185" width="36" height="11" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="174" width="36" height="11" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="163" width="36" height="11" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="152" width="36" height="11" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="141" width="36" height="11" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="130" width="36" height="11" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="119" width="36" height="11" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="214" cy="158" r="11" fill="var(--dolgu)"/><line x1="214" y1="169" x2="214" y2="204"/><line x1="214" y1="204" x2="202" y2="236"/><line x1="214" y1="204" x2="226" y2="236"/><line x1="214" y1="180" x2="200" y2="200"/><line x1="214" y1="180" x2="228" y2="200"/></g><rect x="282" y="4" width="274" height="242" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="362" cy="158" r="11" fill="var(--dolgu)"/><line x1="362" y1="169" x2="362" y2="204"/><line x1="362" y1="204" x2="350" y2="236"/><line x1="362" y1="204" x2="374" y2="236"/><line x1="362" y1="180" x2="386" y2="186"/><line x1="362" y1="180" x2="384" y2="192"/><path d="M357,161 Q362,166 367,161" stroke-width="1.5"/></g><rect x="372" y="185" width="36" height="11" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><rect x="372" y="174" width="36" height="11" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="372" y="163" width="36" height="11" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="462" cy="158" r="11" fill="var(--dolgu)"/><line x1="462" y1="169" x2="462" y2="204"/><line x1="462" y1="204" x2="450" y2="236"/><line x1="462" y1="204" x2="474" y2="236"/><line x1="462" y1="180" x2="486" y2="186"/><line x1="462" y1="180" x2="484" y2="192"/><path d="M457,161 Q462,166 467,161" stroke-width="1.5"/></g><rect x="472" y="185" width="36" height="11" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><rect x="472" y="174" width="36" height="11" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="472" y="163" width="36" height="11" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="472" y="152" width="36" height="11" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/></svg>`,
  secenekler: [
    "Dürüst olmak",
    "Sabırlı olmak",
    "Yardımsever olmak",
    "Çalışkan olmak"
  ],
  dogru: 2,
  hatalar: [
    "Görselde olmayan değer: karelerde doğruluk ya da yalan söyleme ile ilgili bir durum yok.",
    "Görseli aşan yorum: bekleme ya da sabır gösteren bir durum çizilmemiştir.",
    null,
    "Ayrıntıyı ana mesaj sanma: kitaplar ders ve çalışmayı çağrıştırsa da iki kare arasındaki değişim, yükün paylaşılmasıdır."
  ],
  aciklama: `Adım 1: İlk kareye bak. Bir öğrenci üst üste yedi kitabı güçlükle taşıyor ve üzgün; arkadaşı eli boş, yanında duruyor.
Adım 2: İkinci kareye bak. Kitaplar iki arkadaş arasında bölünmüş, ikisi de gülümsüyor.
Adım 3: Değişimi adlandır. Arkadaşı, zorlanan öğrencinin yükünü paylaşarak ona yardım etmiş. Öne çıkan değer yardımseverliktir.
Sık yapılan hata: Görseldeki ilk dikkat çeken nesneye (kitap = ders çalışma) takılıp kareler arasındaki asıl değişimi atlamak.
Cevap C.`
},
{
  id: "tur-gg-006",
  kazanim: "T.8.3.27",
  kademe: 0,
  zorluk: 2,
  soru: `Bir gençlik merkezinin yaz dönemi için hazırladığı afiş aşağıda verilmiştir.
**Bu afişe göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 220" role="img" aria-label="Kodlama atölyesi afişi"><rect x="10" y="6" width="540" height="208" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><rect x="10" y="6" width="540" height="38" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="280" y="32" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">YAZ OKULU: KODLAMA ATÖLYESİ</text><text x="26" y="70" font-size="14" fill="currentColor">Kimler için? 10-14 yaş arasındaki öğrenciler</text><text x="26" y="95" font-size="14" fill="currentColor">Başlangıç: 5 Temmuz</text><text x="26" y="120" font-size="14" fill="currentColor">Süre: 4 hafta, haftada 2 gün</text><text x="26" y="145" font-size="14" fill="currentColor">Bilgisayarlar atölyede hazır; getirmene gerek yok.</text><text x="26" y="170" font-size="14" fill="currentColor">Kontenjan: 20 kişi (kayıtlar geliş sırasına göre alınır)</text><text x="26" y="195" font-size="14" fill="currentColor">Atölye ücretsizdir.</text></svg>`,
  secenekler: [
    "Atölyeye katılmak isteyenlerin kişisel bilgisayarı olmalıdır.",
    "Atölyeye başvuran bütün öğrenciler atölyeye kabul edilecektir.",
    "Atölyede kodlamanın yanında robot yapımı da öğretilecektir.",
    "Atölye toplam sekiz gün sürecek biçimde planlanmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Afişteki bilgiyi ters okuma: afişte bilgisayarların atölyede hazır olduğu, getirmeye gerek olmadığı yazıyor.",
    "Kontenjanı atlama: yalnızca 20 kişi, geliş sırasına göre kabul edilecektir.",
    "Afişte olmayan bilgi: robot yapımından hiç söz edilmiyor.",
    null
  ],
  aciklama: `Adım 1: A'yı afişle karşılaştır: "Bilgisayarlar atölyede hazır; getirmene gerek yok." A afişle çelişir.
Adım 2: B: Kontenjan 20 kişidir; herkes kabul edilmez.
Adım 3: C: Afişte robot yapımı geçmiyor.
Adım 4: D: 4 hafta × haftada 2 gün = 8 gün. Söylenebilir.
Sık yapılan hata: "Ücretsiz" sözünü görüp başvuran herkesin alınacağını düşünmek; kontenjan satırını da okumak gerekir.
Cevap D.`
},
{
  id: "tur-gg-007",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Bir çiftçinin 20 dönümlük tarlasında bu yıl ektiği ürünlerin tarladaki paylarının dağılımı aşağıdaki daire grafiğinde gösterilmiştir.
**Buna göre çiftçi arpa ve mısıra toplam kaç dönüm ayırmıştır?**`,
  gorsel: `<svg viewBox="0 0 560 310" role="img" aria-label="Grafik: 20 dönümlük tarlanın ürünlere dağılımı"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: Tarlanın ürünlere dağılımı (20 dönüm)</text><path d="M170,170 L170,65 A105,105 0 0 1 231.7,254.9 Z" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="290.8" y="135.8" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">%40</text><path d="M170,170 L231.7,254.9 A105,105 0 0 1 85.1,231.7 Z" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="150.1" y="300.4" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">%25</text><path d="M170,170 L85.1,231.7 A105,105 0 0 1 85.1,108.3 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="43" y="175" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">%20</text><path d="M170,170 L85.1,108.3 A105,105 0 0 1 170,65 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="112.3" y="61.8" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">%15</text><rect x="350" y="108" width="16" height="14" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="372" y="120" font-size="14" fill="currentColor">Buğday</text><rect x="350" y="134" width="16" height="14" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="372" y="146" font-size="14" fill="currentColor">Arpa</text><rect x="350" y="160" width="16" height="14" fill="var(--dolgu)" stroke="currentColor" stroke-width="1"/><text x="372" y="172" font-size="14" fill="currentColor">Mısır</text><rect x="350" y="186" width="16" height="14" fill="none" stroke="currentColor" stroke-width="1"/><text x="372" y="198" font-size="14" fill="currentColor">Nohut</text></svg>`,
  secenekler: [
    "4",
    "5",
    "9",
    "12"
  ],
  dogru: 2,
  hatalar: [
    "Yalnızca mısırı hesaplama: 20'nin %20'si 4 dönümdür; arpa eklenmemiş.",
    "Yalnızca arpayı hesaplama: 20'nin %25'i 5 dönümdür; mısır eklenmemiş.",
    null,
    "Yanlış dilimi alma: 12 dönüm, buğday (%40) ile mısırın (%20) toplamıdır."
  ],
  aciklama: `Adım 1: Arpa %25, mısır %20; toplam %45.
Adım 2: 20 dönümün %45'i: 20 × 45 ÷ 100 = 9 dönüm.
Sağlama: Arpa 5 dönüm + mısır 4 dönüm = 9 dönüm.
Cevap C.`
},
{
  id: "tur-gg-008",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Üç kırtasiyedeki bazı ürünlerin fiyatları (TL) aşağıdaki tabloda verilmiştir.
**Tabloya göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>K Kırtasiye</th><th>L Kırtasiye</th><th>M Kırtasiye</th></tr><tr><td>Kurşun kalem</td><td>10</td><td>12</td><td>11</td></tr><tr><td>Defter</td><td>35</td><td>32</td><td>34</td></tr><tr><td>Boya kalemi seti</td><td>60</td><td>64</td><td>58</td></tr></table>`,
  secenekler: [
    "Her ürünün en ucuz satıldığı kırtasiye birbirinden farklıdır.",
    "Üç ürünü birlikte en ucuza satan yer K Kırtasiye'dir.",
    "L Kırtasiye, bütün ürünlerde en pahalı fiyatı veren yerdir.",
    "Boya seti fiyatları arasındaki en büyük fark, defterdekinden azdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Toplamı yanlış hesaplama: K 105, L 108, M 103 TL; üç ürünün toplamı en ucuz M'dedir.",
    "Aşırı genelleme: L, defterde en ucuz fiyatı (32 TL) verir.",
    "Farkı ters değerlendirme: boya setinde fark 64 − 58 = 6 TL, defterde 35 − 32 = 3 TL; boya setindeki fark daha büyüktür."
  ],
  aciklama: `Adım 1: Her satırda en düşük fiyatı bul. Kurşun kalem: K (10). Defter: L (32). Boya kalemi seti: M (58). Üç kırtasiye de farklı; A söylenebilir.
Adım 2: B için toplamları bul: K 10 + 35 + 60 = 105; L 12 + 32 + 64 = 108; M 11 + 34 + 58 = 103. En ucuz M'dir.
Adım 3: C: L defterde en ucuzdur. D: boya setinde fark 6, defterde 3; boya setindeki fark büyüktür.
Sık yapılan hata: Tek bir üründe ucuz olan yeri toplamda da ucuz sanmak.
Cevap A.`
},
{
  id: "tur-gg-009",
  kazanim: "T.8.3.27",
  kademe: 0,
  zorluk: 3,
  soru: `Aşağıdaki karikatürde bir binanın girişi çizilmiştir.
**Bu karikatürde asıl eleştirilen durum aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Karikatür: spor salonuna çıkmak için asansör kuyruğu, boş merdiven"><line x1="0" y1="286" x2="560" y2="286" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" fill="none"><rect x="30" y="96" width="90" height="190" fill="var(--dolgu)"/><line x1="75" y1="96" x2="75" y2="286"/></g><text x="75" y="86" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">ASANSÖR</text><polygon points="75,108 67,122 83,122" fill="currentColor"/><path d="M330,286 v-20 h22 v-20 h22 v-20 h22 v-20 h22 v-20 h22 v-20 h22 v-20 h22 v-20 h22 L506,286" stroke="currentColor" stroke-width="2" fill="none"/><g stroke="currentColor" stroke-width="2" fill="none"><line x1="506" y1="126" x2="550" y2="126"/><rect x="512" y="56" width="36" height="70" fill="var(--dolgu)"/></g><rect x="410" y="20" width="140" height="28" rx="4" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="480" y="40" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">SPOR SALONU</text><path d="M480,48 L480,52 M530,48 L530,56" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="150" cy="208" r="11" fill="var(--dolgu)"/><line x1="150" y1="219" x2="150" y2="254"/><line x1="150" y1="254" x2="138" y2="286"/><line x1="150" y1="254" x2="162" y2="286"/><line x1="150" y1="230" x2="136" y2="250"/><line x1="150" y1="230" x2="164" y2="250"/></g><rect x="156" y="250" width="24" height="16" rx="3" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="200" cy="208" r="11" fill="var(--dolgu)"/><line x1="200" y1="219" x2="200" y2="254"/><line x1="200" y1="254" x2="188" y2="286"/><line x1="200" y1="254" x2="212" y2="286"/><line x1="200" y1="230" x2="186" y2="250"/><line x1="200" y1="230" x2="214" y2="250"/></g><rect x="206" y="250" width="24" height="16" rx="3" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="250" cy="208" r="11" fill="var(--dolgu)"/><line x1="250" y1="219" x2="250" y2="254"/><line x1="250" y1="254" x2="238" y2="286"/><line x1="250" y1="254" x2="262" y2="286"/><line x1="250" y1="230" x2="236" y2="250"/><line x1="250" y1="230" x2="264" y2="250"/></g><rect x="256" y="250" width="24" height="16" rx="3" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"><circle cx="300" cy="208" r="11" fill="var(--dolgu)"/><line x1="300" y1="219" x2="300" y2="254"/><line x1="300" y1="254" x2="288" y2="286"/><line x1="300" y1="254" x2="312" y2="286"/><line x1="300" y1="230" x2="286" y2="250"/><line x1="300" y1="230" x2="314" y2="250"/></g><rect x="306" y="250" width="24" height="16" rx="3" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/></svg>`,
  secenekler: [
    "Spor salonlarının binaların üst katlarında kurulması",
    "Asansörlerin önünde uzun kuyrukların oluşması",
    "Merdivenlerin bakımsız ve kullanışsız bırakılması",
    "İnsanların amaçlarıyla davranışları arasındaki çelişki"
  ],
  dogru: 3,
  hatalar: [
    "Ayrıntıyı ana mesaj sanma: salonun üst katta olması durumun ortamıdır, eleştirilen şey değildir.",
    "Yüzeysel okuma: kuyruk görselde var ama karikatür kuyruğu değil, spor yapmaya giderken merdivenden kaçınmayı eleştirir.",
    "Görselde olmayan bilgi: merdiven bakımsız çizilmemiştir; boş olması, kimsenin onu tercih etmediğini gösterir.",
    null
  ],
  aciklama: `Karikatürler çoğu zaman bir çelişkiyi büyüterek gösterir. Önce kişilerin amacını, sonra yaptıklarını bul.
Adım 1: Amaç: Ellerinde spor çantasıyla spor salonuna, yani hareket etmeye gidiyorlar.
Adım 2: Davranış: Salona yürüyerek çıkabilecekleri merdiveni kullanmıyor, asansör için sıra bekliyorlar.
Adım 3: Çelişkiyi adlandır: Hareket etmeye giden insanlar, önlerindeki hareket fırsatından kaçıyor. Eleştirilen budur.
Sık yapılan hata: Görselde en çok yer kaplayan öğeyi (kuyruk) mesaj sanmak. Mesaj, öğelerin birbiriyle ilişkisindedir.
Cevap D.`
},
{
  id: "tur-gg-010",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Bir sahil temizliği etkinliğine Mavi ve Yeşil adlı iki gönüllü grubu katılmıştır. Etkinlik sonunda grupların topladığı atıklar türlerine göre ayrılmış, tartılmış ve sonuçlar aşağıdaki grafikte gösterilmiştir. Belediye, en çok atık toplayan gruba teşekkür belgesi verecektir.
**Bu grafiğe göre aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: `<svg viewBox="0 0 560 330" role="img" aria-label="Grafik: İki grubun türlerine göre topladığı atık miktarı"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: Toplanan atık miktarı (kg)</text><rect x="90" y="34" width="16" height="14" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="112" y="46" font-size="14" fill="currentColor">Mavi grup</text><rect x="210" y="34" width="16" height="14" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="232" y="46" font-size="14" fill="currentColor">Yeşil grup</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="72" y1="234" x2="546" y2="234"/><line x1="72" y1="180" x2="546" y2="180"/><line x1="72" y1="126" x2="546" y2="126"/><line x1="72" y1="72" x2="546" y2="72"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="72" y1="64" x2="72" y2="288"/><line x1="72" y1="288" x2="546" y2="288"/></g><text x="66" y="293" font-size="14" text-anchor="end" fill="currentColor">0</text><text x="66" y="239" font-size="14" text-anchor="end" fill="currentColor">15</text><text x="66" y="185" font-size="14" text-anchor="end" fill="currentColor">30</text><text x="66" y="131" font-size="14" text-anchor="end" fill="currentColor">45</text><text x="66" y="77" font-size="14" text-anchor="end" fill="currentColor">60</text><rect x="88.6" y="72" width="40.7" height="216" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="108.9" y="66" font-size="14" text-anchor="middle" fill="currentColor">60</text><rect x="131.3" y="126" width="40.7" height="162" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="151.6" y="120" font-size="14" text-anchor="middle" fill="currentColor">45</text><text x="131.3" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Plastik</text><rect x="207.1" y="216" width="40.7" height="72" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="227.4" y="210" font-size="14" text-anchor="middle" fill="currentColor">20</text><rect x="249.8" y="180" width="40.7" height="108" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="270.1" y="174" font-size="14" text-anchor="middle" fill="currentColor">30</text><text x="249.8" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Cam</text><rect x="325.6" y="234" width="40.7" height="54" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="345.9" y="228" font-size="14" text-anchor="middle" fill="currentColor">15</text><rect x="368.3" y="234" width="40.7" height="54" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="388.6" y="228" font-size="14" text-anchor="middle" fill="currentColor">15</text><text x="368.3" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Metal</text><rect x="444.1" y="198" width="40.7" height="90" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="464.4" y="192" font-size="14" text-anchor="middle" fill="currentColor">25</text><rect x="486.8" y="144" width="40.7" height="144" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1"/><text x="507.1" y="138" font-size="14" text-anchor="middle" fill="currentColor">40</text><text x="486.8" y="310" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Kâğıt</text></svg>`,
  secenekler: [
    "İki grubun topladığı metal atık miktarı birbirine eşittir.",
    "Yeşil grup toplamda Mavi gruptan daha çok atık toplamıştır.",
    "Mavi grubun topladığı plastik, Yeşil grubun kâğıdının iki katıdır.",
    "Camda Yeşil grubun topladığı miktar, Mavi grubunkinden 10 kg fazladır."
  ],
  dogru: 2,
  hatalar: [
    "Eşit çubukları görmeme: iki grup da 15 kg metal toplamıştır; bu yargı söylenebilir.",
    "Toplamı hesaplamama: Mavi 60 + 20 + 15 + 25 = 120 kg, Yeşil 45 + 30 + 15 + 40 = 130 kg; bu yargı söylenebilir.",
    null,
    "Farkı okumama: camda Yeşil 30, Mavi 20 kg; fark 10 kg'dır, bu yargı söylenebilir."
  ],
  aciklama: `Adım 1: Değerleri oku. Mavi: plastik 60, cam 20, metal 15, kâğıt 25. Yeşil: plastik 45, cam 30, metal 15, kâğıt 40.
Adım 2: A: 15 = 15; söylenebilir.
Adım 3: B: Mavi toplam 120, Yeşil toplam 130; söylenebilir.
Adım 4: C: Mavi plastik 60, Yeşil kâğıt 40. 40'ın iki katı 80'dir; 60 iki katı değil, 1,5 katıdır. Söylenemez.
Adım 5: D: 30 − 20 = 10; söylenebilir.
Sık yapılan hata: Mavi grubun plastik çubuğu çok uzun olduğu için Mavi grubun toplamda da önde olduğunu sanmak. Tek çubuk, toplamı göstermez.
Cevap C.`
},
{
  id: "tur-gg-011",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Bir sınıfta hafta içi her gün üç öğrenci nöbet tutmaktadır. Nöbetçilerden biri tahtayı siler, biri pencereleri açıp kapatır, biri de çöp kutusunu boşaltır. Sınıf başkanı, görevleri öğrencilere adil dağıtmak için aşağıdaki nöbet çizelgesini hazırlamıştır.
**Bu çizelgeye göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Tahta</th><th>Pencere</th><th>Çöp kutusu</th></tr><tr><td>Pazartesi</td><td>Aylin</td><td>Berk</td><td>Cemre</td></tr><tr><td>Salı</td><td>Doruk</td><td>Aylin</td><td>Ege</td></tr><tr><td>Çarşamba</td><td>Berk</td><td>Cemre</td><td>Doruk</td></tr><tr><td>Perşembe</td><td>Ege</td><td>Doruk</td><td>Aylin</td></tr><tr><td>Cuma</td><td>Cemre</td><td>Ege</td><td>Berk</td></tr></table>`,
  secenekler: [
    "Öğrencilerin tümü, üç görevin her birini haftada birer kez üstlenir.",
    "Art arda iki gün nöbet tutan herhangi bir öğrenci yoktur.",
    "Cuma günü tahtayı silen öğrenci, pazartesi pencereleri açar.",
    "Ege, nöbet tuttuğu günlerin hepsinde aynı görevi yapar."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ardışık günleri kontrol etmeme: Aylin pazartesi ve salı; Doruk salı, çarşamba ve perşembe art arda nöbet tutar.",
    "Satırları karıştırma: cuma tahtayı silen Cemre'dir; Cemre pazartesi çöp kutusunu boşaltır, pencereleri Berk açar.",
    "Tek satıra bakıp genelleme: Ege salı çöp kutusu, perşembe tahta, cuma pencere görevindedir."
  ],
  aciklama: `Çizelge sorularında bir kişiyi bütün satırlarda izle.
Adım 1: Her öğrencinin görevlerini çıkar. Aylin: tahta (Pzt), pencere (Salı), çöp (Per). Berk: pencere (Pzt), tahta (Çar), çöp (Cuma). Cemre: çöp (Pzt), pencere (Çar), tahta (Cuma). Doruk: tahta (Salı), çöp (Çar), pencere (Per). Ege: çöp (Salı), tahta (Per), pencere (Cuma).
Adım 2: Beş öğrencinin her biri üç görevi birer kez yapıyor; A söylenebilir.
Adım 3: B: Aylin pazartesi-salı art arda nöbetçi. C: Cuma tahtayı silen Cemre, pazartesi çöp kutusunu boşaltıyor. D: Ege üç farklı görev yapıyor.
Sağlama: 5 gün × 3 görev = 15 görev; 5 öğrenci × 3 görev = 15. Sayılar tutuyor.
Cevap A.`
},
{
  id: "tur-gg-012",
  kazanim: "T.8.3.27",
  kademe: 0,
  zorluk: 3,
  soru: `Bir köyün muhtarlığı, köye gelen yürüyüşçüler için aşağıdaki bilgi görselini hazırlamıştır. Görselde rotanın uğradığı noktalar arasındaki bölümlerin uzunlukları yazılmış; kullanıma açık bölümler düz çizgiyle, bakımda olduğu için kapalı olan bölümler kesik çizgiyle gösterilmiştir.
**Bu bilgi görseline göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 270" role="img" aria-label="Doğa yürüyüşü rotası bilgi görseli"><text x="280" y="24" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">DOĞA YÜRÜYÜŞÜ ROTASI</text><line x1="50" y1="170" x2="200" y2="90" stroke="var(--vurgu)" stroke-width="6"/><line x1="200" y1="90" x2="340" y2="170" stroke="var(--vurgu)" stroke-width="6"/><line x1="340" y1="170" x2="500" y2="90" stroke="var(--vurgu2)" stroke-width="6" stroke-dasharray="12 8"/><circle cx="50" cy="170" r="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="50" y="202" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Köy meydanı</text><circle cx="200" cy="90" r="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="200" y="72" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Şelale</text><circle cx="340" cy="170" r="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="340" y="202" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Yayla evi</text><circle cx="500" cy="90" r="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="500" y="72" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">Tepe</text><rect x="96" y="116" width="54" height="24" rx="4" fill="var(--dolgu)" stroke="currentColor"/><text x="123" y="133" font-size="14" text-anchor="middle" fill="currentColor">1,2 km</text><rect x="244" y="116" width="54" height="24" rx="4" fill="var(--dolgu)" stroke="currentColor"/><text x="271" y="133" font-size="14" text-anchor="middle" fill="currentColor">0,8 km</text><rect x="394" y="116" width="54" height="24" rx="4" fill="var(--dolgu)" stroke="currentColor"/><text x="421" y="133" font-size="14" text-anchor="middle" fill="currentColor">1,5 km</text><line x1="130" y1="243" x2="154" y2="243" stroke="var(--vurgu)" stroke-width="3"/><text x="160" y="248" font-size="14" fill="currentColor">Açık</text><line x1="218" y1="243" x2="242" y2="243" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="6 4"/><text x="248" y="248" font-size="14" fill="currentColor">Bakımda (kapalı)</text></svg>`,
  secenekler: [
    "Rotanın kullanıma açık bölümü toplam 2 kilometredir.",
    "Bakımdaki bölüm, kullanıma açık bölümden daha uzundur.",
    "Köy meydanından tepeye şimdiden bu rota ile yürünebilir.",
    "Rotanın en uzun bölümü köy meydanı ile şelale arasındadır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Toplamı hesaplamama: açık bölüm 1,2 + 0,8 = 2 km, bakımdaki bölüm 1,5 km'dir.",
    "Çizgi türünü atlama: yayla evi ile tepe arası kesik çizgiyle, yani bakımda ve kapalı olarak gösterilmiştir.",
    "Uzunlukları karşılaştırmama: en uzun bölüm 1,5 km ile yayla evi-tepe arasıdır."
  ],
  aciklama: `Bilgi görsellerinde çizgi türü, renk ve açıklama kutusu (lejant) da bilgi taşır.
Adım 1: Lejanta bak: düz çizgi açık, kesik çizgi bakımda (kapalı).
Adım 2: Açık bölümler: köy meydanı-şelale (1,2 km) ve şelale-yayla evi (0,8 km). Toplam 2 km; A söylenebilir.
Adım 3: B: 1,5 km < 2 km. C: son bölüm kapalı olduğu için rota şu an tepeye ulaşmıyor. D: en uzun bölüm 1,5 km'dir.
Sık yapılan hata: Lejantı okumadan bütün çizgileri aynı sanmak.
Cevap A.`
},
{
  id: "tur-gg-013",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 4,
  soru: `Bir köydeki üç elma bahçesinde bu yıl toplanan elma miktarları grafikte, bahçelerdeki ağaç sayıları tabloda verilmiştir. Köyün tarım danışmanı, bahçeleri yalnızca toplam ürüne göre değil ağaç başına düşen ürüne göre de karşılaştırmıştır.
**Grafik ve tabloya göre aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: `<svg viewBox="0 0 560 290" role="img" aria-label="Grafik: Bahçelere göre toplanan elma miktarı"><text x="8" y="20" font-size="16" font-weight="bold" fill="currentColor">Grafik: Toplanan elma miktarı (kg)</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="72" y1="199" x2="546" y2="199"/><line x1="72" y1="150" x2="546" y2="150"/><line x1="72" y1="101" x2="546" y2="101"/><line x1="72" y1="52" x2="546" y2="52"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="72" y1="44" x2="72" y2="248"/><line x1="72" y1="248" x2="546" y2="248"/></g><text x="66" y="253" font-size="14" text-anchor="end" fill="currentColor">0</text><text x="66" y="204" font-size="14" text-anchor="end" fill="currentColor">200</text><text x="66" y="155" font-size="14" text-anchor="end" fill="currentColor">400</text><text x="66" y="106" font-size="14" text-anchor="end" fill="currentColor">600</text><text x="66" y="57" font-size="14" text-anchor="end" fill="currentColor">800</text><rect x="128" y="101" width="44" height="147" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="150" y="95" font-size="14" text-anchor="middle" fill="currentColor">600</text><text x="151" y="270" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">K bahçesi</text><rect x="286" y="71.6" width="44" height="176.4" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="308" y="65.6" font-size="14" text-anchor="middle" fill="currentColor">720</text><text x="309" y="270" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">L bahçesi</text><rect x="444" y="125.5" width="44" height="122.5" fill="var(--vurgu)" stroke="currentColor" stroke-width="1"/><text x="466" y="119.5" font-size="14" text-anchor="middle" fill="currentColor">500</text><text x="467" y="270" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">M bahçesi</text></svg><table class="tablo"><tr><th>Bahçe</th><th>K</th><th>L</th><th>M</th></tr><tr><td>Ağaç sayısı</td><td>20</td><td>24</td><td>25</td></tr></table>`,
  secenekler: [
    "Ağaç başına en az elmanın toplandığı bahçe M bahçesidir.",
    "K ve L bahçelerinde ağaç başına toplanan elma miktarı eşittir.",
    "Üç bahçeden bu yıl toplam 1.820 kg elma toplanmıştır.",
    "En çok ağacın bulunduğu bahçe, en çok elmanın toplandığı bahçedir."
  ],
  dogru: 3,
  hatalar: [
    "Bölmeyi yapmama: K 600 ÷ 20 = 30, L 720 ÷ 24 = 30, M 500 ÷ 25 = 20 kg; en az M'dedir, bu yargı söylenebilir.",
    "Bölmeyi yapmama: iki bahçede de ağaç başına 30 kg düşer; bu yargı söylenebilir.",
    "Toplamı denetlememe: 600 + 720 + 500 = 1.820 kg; bu yargı söylenebilir.",
    null
  ],
  aciklama: `Adım 1: Grafikten toplamları al: K 600, L 720, M 500 kg.
Adım 2: Tablodan ağaç sayılarını al: 20, 24, 25.
Adım 3: Ağaç başına elma: K 30, L 30, M 20 kg. A ve B söylenebilir.
Adım 4: C: 600 + 720 + 500 = 1.820; söylenebilir.
Adım 5: D: En çok ağaç M bahçesindedir (25), ama en az elma (500 kg) M'den toplanmıştır. D söylenemez.
Sık yapılan hata: Ağacı çok olan bahçenin ürünü de en çok olacak diye varsaymak. Grafik ile tabloyu mutlaka eşleştir.
Cevap D.`
},
{
  id: "tur-gg-014",
  kazanim: "T.8.3.27",
  kademe: 0,
  zorluk: 4,
  soru: `Bir müzenin girişinde aşağıdaki afiş asılıdır.
Bir aile çarşamba günü bu müzeyi ziyaret etmiştir. Ailede anne, baba, 13 yaşındaki Ece ve 5 yaşındaki Can vardır. Ece öğrenci kimliğini evde unuttuğu için gişede gösterememiştir.
**Afiş ve verilen bilgilere göre bu aile müze girişi için toplam kaç TL ödemiştir?**`,
  gorsel: `<svg viewBox="0 0 560 246" role="img" aria-label="Müze giriş ücretleri afişi"><rect x="10" y="6" width="540" height="234" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><rect x="10" y="6" width="540" height="38" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="280" y="32" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">MÜZE GİRİŞ ÜCRETLERİ</text><text x="26" y="70" font-size="14" fill="currentColor">Tam bilet: 100 TL</text><text x="26" y="95" font-size="14" fill="currentColor">Öğrenci bileti: 50 TL (öğrenci kimliği gösterilmelidir)</text><text x="26" y="120" font-size="14" fill="currentColor">7 yaşından küçükler: ücretsiz</text><text x="26" y="145" font-size="14" fill="currentColor">Çarşamba günleri bütün biletlerde %50 indirim</text><text x="26" y="170" font-size="14" fill="currentColor">İndirimler birleştirilmez; en avantajlı olan uygulanır.</text><text x="26" y="195" font-size="14" fill="currentColor">Müze pazartesi günleri kapalıdır.</text></svg>`,
  secenekler: [
    "125",
    "150",
    "200",
    "250"
  ],
  dogru: 1,
  hatalar: [
    "İndirimleri birleştirme: Ece'ye öğrenci bileti ile çarşamba indirimini birlikte uygulayıp 25 TL hesaplamak 125 TL'yi verir.",
    null,
    "Yaş koşulunu atlama: 5 yaşındaki Can için de 50 TL ödeneceğini düşünmek 200 TL'yi verir.",
    "Çarşamba indirimini atlama: anne ile baba 100'er TL, Ece öğrenci bileti 50 TL sayılırsa 250 TL bulunur."
  ],
  aciklama: `Adım 1: Can 5 yaşındadır; 7 yaşından küçük olduğu için ücret ödemez.
Adım 2: Anne ve baba tam bilet alır; çarşamba olduğu için %50 indirimle 50'şer TL öder: 100 TL.
Adım 3: Ece kimliğini gösteremediği için öğrenci bileti alamaz; tam bilete çarşamba indirimi uygulanır: 50 TL. (Kimliği olsaydı da indirimler birleşmeyeceği için yine 50 TL öderdi.)
Adım 4: Toplam: 50 + 50 + 50 + 0 = 150 TL.
Sağlama: Dört kişiden üçü ücret öder, her biri 50 TL; 3 × 50 = 150.
Sık yapılan hata: "İndirimler birleştirilmez" kuralını atlayıp bir bilete iki indirim uygulamak.
Cevap B.`
},
{
  id: "tur-gg-015",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 4,
  soru: `Bir öğrenci, bir ilkbahar gününde okul bahçesindeki termometreden saat 06.00'dan başlayarak üç saatte bir, toplam beş kez hava sıcaklığını okumuş ve şu notları almıştır:
• Günün en düşük sıcaklığı ilk ölçümde, en yüksek sıcaklığı saat 12.00'deki ölçümde görülmüştür.
• Saat 15.00'te ölçülen sıcaklık, öğlen ölçülen sıcaklıktan 2 °C düşüktür.
• Son ölçümde sıcaklık, saat 09.00'daki değere eşittir.
**Bu notlara göre öğrencinin ölçümlerini gösteren grafik aşağıdakilerden hangisi olabilir?**`,
  gorsel: `<svg viewBox="0 0 560 396" role="img" aria-label="Beş ölçümlük sıcaklık değişimini gösteren dört küçük çizgi grafik"><text x="280" y="20" font-size="14" text-anchor="middle" fill="currentColor">Yatay eksen: saat (06.00-18.00) · Sayılar: sıcaklık (°C)</text><rect x="4" y="32" width="274" height="176" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="52" font-size="16" font-weight="bold" fill="currentColor">I</text><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="58" x2="40" y2="180"/><line x1="40" y1="180" x2="266" y2="180"/></g><polyline points="62.6,142 107.8,113.5 153,85 198.2,104 243.4,113.5" fill="none" stroke="var(--vurgu)" stroke-width="2.5"/><circle cx="62.6" cy="142" r="4" fill="var(--vurgu)"/><text x="62.6" y="134" font-size="14" text-anchor="middle" fill="currentColor">8</text><text x="62.6" y="198" font-size="14" text-anchor="middle" fill="currentColor">06</text><circle cx="107.8" cy="113.5" r="4" fill="var(--vurgu)"/><text x="107.8" y="105.5" font-size="14" text-anchor="middle" fill="currentColor">14</text><text x="107.8" y="198" font-size="14" text-anchor="middle" fill="currentColor">09</text><circle cx="153" cy="85" r="4" fill="var(--vurgu)"/><text x="153" y="77" font-size="14" text-anchor="middle" fill="currentColor">20</text><text x="153" y="198" font-size="14" text-anchor="middle" fill="currentColor">12</text><circle cx="198.2" cy="104" r="4" fill="var(--vurgu)"/><text x="198.2" y="96" font-size="14" text-anchor="middle" fill="currentColor">16</text><text x="198.2" y="198" font-size="14" text-anchor="middle" fill="currentColor">15</text><circle cx="243.4" cy="113.5" r="4" fill="var(--vurgu)"/><text x="243.4" y="105.5" font-size="14" text-anchor="middle" fill="currentColor">14</text><text x="243.4" y="198" font-size="14" text-anchor="middle" fill="currentColor">18</text><rect x="282" y="32" width="274" height="176" fill="none" stroke="currentColor" stroke-width="2"/><text x="290" y="52" font-size="16" font-weight="bold" fill="currentColor">II</text><g stroke="currentColor" stroke-width="1.5"><line x1="318" y1="58" x2="318" y2="180"/><line x1="318" y1="180" x2="544" y2="180"/></g><polyline points="340.6,142 385.8,113.5 431,85 476.2,94.5 521.4,113.5" fill="none" stroke="var(--vurgu)" stroke-width="2.5"/><circle cx="340.6" cy="142" r="4" fill="var(--vurgu)"/><text x="340.6" y="134" font-size="14" text-anchor="middle" fill="currentColor">8</text><text x="340.6" y="198" font-size="14" text-anchor="middle" fill="currentColor">06</text><circle cx="385.8" cy="113.5" r="4" fill="var(--vurgu)"/><text x="385.8" y="105.5" font-size="14" text-anchor="middle" fill="currentColor">14</text><text x="385.8" y="198" font-size="14" text-anchor="middle" fill="currentColor">09</text><circle cx="431" cy="85" r="4" fill="var(--vurgu)"/><text x="431" y="77" font-size="14" text-anchor="middle" fill="currentColor">20</text><text x="431" y="198" font-size="14" text-anchor="middle" fill="currentColor">12</text><circle cx="476.2" cy="94.5" r="4" fill="var(--vurgu)"/><text x="476.2" y="86.5" font-size="14" text-anchor="middle" fill="currentColor">18</text><text x="476.2" y="198" font-size="14" text-anchor="middle" fill="currentColor">15</text><circle cx="521.4" cy="113.5" r="4" fill="var(--vurgu)"/><text x="521.4" y="105.5" font-size="14" text-anchor="middle" fill="currentColor">14</text><text x="521.4" y="198" font-size="14" text-anchor="middle" fill="currentColor">18</text><rect x="4" y="214" width="274" height="176" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="234" font-size="16" font-weight="bold" fill="currentColor">III</text><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="240" x2="40" y2="362"/><line x1="40" y1="362" x2="266" y2="362"/></g><polyline points="62.6,314.5 107.8,295.5 153,267 198.2,276.5 243.4,305" fill="none" stroke="var(--vurgu)" stroke-width="2.5"/><circle cx="62.6" cy="314.5" r="4" fill="var(--vurgu)"/><text x="62.6" y="306.5" font-size="14" text-anchor="middle" fill="currentColor">10</text><text x="62.6" y="380" font-size="14" text-anchor="middle" fill="currentColor">06</text><circle cx="107.8" cy="295.5" r="4" fill="var(--vurgu)"/><text x="107.8" y="287.5" font-size="14" text-anchor="middle" fill="currentColor">14</text><text x="107.8" y="380" font-size="14" text-anchor="middle" fill="currentColor">09</text><circle cx="153" cy="267" r="4" fill="var(--vurgu)"/><text x="153" y="259" font-size="14" text-anchor="middle" fill="currentColor">20</text><text x="153" y="380" font-size="14" text-anchor="middle" fill="currentColor">12</text><circle cx="198.2" cy="276.5" r="4" fill="var(--vurgu)"/><text x="198.2" y="268.5" font-size="14" text-anchor="middle" fill="currentColor">18</text><text x="198.2" y="380" font-size="14" text-anchor="middle" fill="currentColor">15</text><circle cx="243.4" cy="305" r="4" fill="var(--vurgu)"/><text x="243.4" y="297" font-size="14" text-anchor="middle" fill="currentColor">12</text><text x="243.4" y="380" font-size="14" text-anchor="middle" fill="currentColor">18</text><rect x="282" y="214" width="274" height="176" fill="none" stroke="currentColor" stroke-width="2"/><text x="290" y="234" font-size="16" font-weight="bold" fill="currentColor">IV</text><g stroke="currentColor" stroke-width="1.5"><line x1="318" y1="240" x2="318" y2="362"/><line x1="318" y1="362" x2="544" y2="362"/></g><polyline points="340.6,324 385.8,295.5 431,276.5 476.2,267 521.4,295.5" fill="none" stroke="var(--vurgu)" stroke-width="2.5"/><circle cx="340.6" cy="324" r="4" fill="var(--vurgu)"/><text x="340.6" y="316" font-size="14" text-anchor="middle" fill="currentColor">8</text><text x="340.6" y="380" font-size="14" text-anchor="middle" fill="currentColor">06</text><circle cx="385.8" cy="295.5" r="4" fill="var(--vurgu)"/><text x="385.8" y="287.5" font-size="14" text-anchor="middle" fill="currentColor">14</text><text x="385.8" y="380" font-size="14" text-anchor="middle" fill="currentColor">09</text><circle cx="431" cy="276.5" r="4" fill="var(--vurgu)"/><text x="431" y="268.5" font-size="14" text-anchor="middle" fill="currentColor">18</text><text x="431" y="380" font-size="14" text-anchor="middle" fill="currentColor">12</text><circle cx="476.2" cy="267" r="4" fill="var(--vurgu)"/><text x="476.2" y="259" font-size="14" text-anchor="middle" fill="currentColor">20</text><text x="476.2" y="380" font-size="14" text-anchor="middle" fill="currentColor">15</text><circle cx="521.4" cy="295.5" r="4" fill="var(--vurgu)"/><text x="521.4" y="287.5" font-size="14" text-anchor="middle" fill="currentColor">14</text><text x="521.4" y="380" font-size="14" text-anchor="middle" fill="currentColor">18</text></svg>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 1,
  hatalar: [
    "Bir koşulu atlama: I'de saat 15.00'teki sıcaklık (16), öğlenkinden (20) 2 değil 4 °C düşüktür.",
    null,
    "Son koşulu kontrol etmeme: III'te son ölçüm (12), saat 09.00'daki değere (14) eşit değildir.",
    "En yüksek değeri yanlış yerde arama: IV'te en yüksek sıcaklık (20) saat 15.00'tedir, 12.00'de değildir."
  ],
  aciklama: `Adım 1: Birinci notu sına: en düşük değer ilk ölçümde, en yüksek değer 12.00'de olmalı. IV'te en yüksek değer 15.00'te; IV elenir.
Adım 2: İkinci notu sına: 15.00'teki değer, 12.00'dekinden 2 eksik olmalı. I'de 20 − 16 = 4; I elenir. II ve III'te 20 − 18 = 2.
Adım 3: Üçüncü notu sına: 18.00'deki değer 09.00'dakine eşit olmalı. III'te 12 ≠ 14; III elenir. II'de 14 = 14.
Sağlama: II: 8 (en düşük, ilk ölçüm), 14, 20 (en yüksek, 12.00), 18 (20 − 2), 14 (09.00 ile aynı).
Sık yapılan hata: Grafiklerin şekline bakıp benzer gördüğünü seçmek. Her koşulu sayılarla tek tek sına.
Cevap B.`
}
);
