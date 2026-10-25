// Fen Bilimleri — Periyodik Sistem: Kademe 3 (LGS Ayarı) yedeği (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["periyodik-sistem"] = window.LGS_BANK["periyodik-sistem"] || []).push(
{
  id: "fen-ps-326",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bilim kulübü, sergi panosuna periyodik sistemin ilk üç periyodunu çizmiş ve dört kutuyu X, Y, Z ve T harfleriyle işaretlemiştir. Bir ziyaretçi, işaretli kutular için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. X ile Y aynı gruptadır.
II. Z'nin atom numarası T'ninkinden büyüktür.
III. X'in atom numarası Z'ninkinden küçüktür.
**Buna göre ziyaretçinin yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: X 2. periyot 2A, Y 3. periyot 2A, Z 2. periyot 7A, T 3. periyot 7A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="171" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="421" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text><text x="171" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="421" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">T</text></svg>`,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü gözden kaçırma: X ile Z aynı periyottadır ve X, Z'nin solundadır; aynı periyotta soldaki elementin atom numarası küçüktür.",
    null,
    "Periyot sırasını ters çevirme: alttaki periyot küçük sanılmıştır. Oysa 3. periyottaki T'nin atom numarası 2. periyottaki Z'ninkinden büyüktür. Ayrıca I doğrudur.",
    "II'yi doğru sayma: Z, 2. periyottadır; T ise 3. periyottadır. Bu yüzden Z'nin atom numarası T'ninkinden küçüktür."
  ],
  aciklama: `Aynı gruptaki elementler aynı düşey sütundadır. Alttaki periyottaki her elementin atom numarası, üstteki periyottaki elementlerinkinden büyüktür; aynı periyotta ise sağdaki büyüktür.
Adım 1 (I): X ve Y, 2A sütununda alt alta durur. Aynı gruptadırlar. I doğrudur.
Adım 2 (II): Z, 2. periyotta; T, 3. periyottadır. T'nin atom numarası daha büyüktür. II yanlıştır.
Adım 3 (III): X ve Z aynı periyottadır ve X soldadır. X'in atom numarası küçüktür. III doğrudur.
Sağlama: X berilyum (4), Y magnezyum (12), Z flor (9), T klor (17); 4 < 9 ve 9 < 17.
Cevap B.`
},
{
  id: "fen-ps-327",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir element kartları oyununda altı oyuncu, ilk üç periyodu gösteren oyun tahtasına birer kart koymuştur. Kartların yerleri K, L, M, N, P ve R harfleriyle işaretlenmiştir. Oyunda metal sınıfında olmayan (ametal, yarı metal ya da soygaz) her element kartı 1 puan getirmektedir. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre altı kartın toplam puanı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: K 1. periyot 1A, L 2. periyot 1A, M 2. periyot 3A, N 3. periyot 4A, P 3. periyot 8A, R 2. periyot 6A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="121" y="64" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">K</text><text x="121" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">L</text><text x="221" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">M</text><text x="371" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">R</text><text x="271" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">N</text><text x="471" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">P</text></svg>`,
  secenekler: ["2", "3", "4", "5"],
  dogru: 3,
  hatalar: [
    "Hidrojeni ve yarı metalleri de metal sayma: K, L, M ve N metal sanılınca yalnızca P ile R kalır.",
    "Yarı metalleri metal sayma: M (bor) ve N (silisyum) metal sanılınca geriye K, P ve R kalır.",
    "Hidrojeni 1A grubunda olduğu için metal sayma: K ve L metal sanılınca geriye M, N, P ve R kalır.",
    null
  ],
  aciklama: `Metal sınıfında olmayanlar ametaller, yarı metaller ve soygazlardır. Hidrojen 1A grubunda olduğu hâlde ametaldir.
Adım 1: K, 1. periyodun 1A kutusudur: hidrojen, ametal. 1 puan.
Adım 2: L, 2. periyodun 1A kutusudur: lityum, metal. Puan yok.
Adım 3: M, 2. periyodun 3A kutusudur: bor, yarı metal. 1 puan. N, 3. periyodun 4A kutusudur: silisyum, yarı metal. 1 puan.
Adım 4: P, 3. periyodun 8A kutusudur: argon, soygaz. 1 puan. R, 2. periyodun 6A kutusudur: oksijen, ametal. 1 puan.
Adım 5: Toplam 5 puan.
Sağlama: Altı kartın yalnızca biri (L) metaldir; 6 − 1 = 5.
Cevap D.`
},
{
  id: "fen-ps-328",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Gizem'in kutu oyununda her oyuncu, atom numarası 8 olan elementin kutusunu bulmakta; bu kutunun hemen altındaki kutunun atom numarası ile hemen sağındaki kutunun atom numarasını toplamaktadır. Oyunda yalnızca A grupları kullanılmaktadır. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında ise 8'er element bulunur.
**Buna göre oyunun doğru sonucu kaçtır?**`,
  gorsel: null,
  secenekler: ["17", "23", "25", "27"],
  dogru: 2,
  hatalar: [
    "Alttaki kutuyu hesaba katmama: yalnızca 8 ile sağındaki 9 toplanmıştır.",
    "Sağ yerine sol komşuyu alma: 8'in solundaki 7 ile altındaki 16 toplanmıştır.",
    null,
    "Alt komşu için yanlış fark kullanma: altındaki kutu 8 + 10 = 18 sanılmıştır; oysa 2. periyottan 3. periyoda inerken fark 8'dir."
  ],
  aciklama: `Atom numarası 8 olan element, 2. periyotta soldan 6. kutudadır (1. periyotta 2 element var; 8 − 2 = 6): 6A grubundadır.
Adım 1: Hemen sağındaki kutu 7A grubudur. Atom numarası 8 + 1 = 9'dur.
Adım 2: Hemen altındaki kutu, 3. periyodun 6A kutusudur. 2. periyotta 8 element bulunduğu için atom numarası 8 + 8 = 16'dır.
Adım 3: Toplam 9 + 16 = 25.
Sağlama: Bu kutular flor (9) ve kükürt (16); 9 + 16 = 25.
Cevap C.`
},
{
  id: "fen-ps-329",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir müzenin "Elementler" panosunda, periyodik sistemin 2. ve 3. periyotlarından alınmış bir kesit gösterilmektedir. Kutulara elementlerin gerçek sembolleri yazılmış, kutular tablodaki yerlerine göre yerleştirilmiştir. Bir ziyaretçi pano hakkında şu yargıları yazmıştır:
I. Panodaki bütün elementler ametal ya da yarı metaldir.
II. Panodaki iki yarı metal, birbirinden farklı gruplarda yer alır.
III. Azot ile fosfor aynı gruptadır ve ikisi de ametaldir.
**Buna göre ziyaretçinin yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 384 122" role="img" aria-label="Periyodik sistemin 2. ve 3. periyotlarından kesit: B, C, N, O ve altlarında Al, Si, P, S"><g stroke="currentColor" stroke-width="1.5"><rect x="112" y="12" width="64" height="50" fill="none"/><rect x="176" y="12" width="64" height="50" fill="none"/><rect x="240" y="12" width="64" height="50" fill="none"/><rect x="304" y="12" width="64" height="50" fill="none"/><rect x="112" y="62" width="64" height="50" fill="none"/><rect x="176" y="62" width="64" height="50" fill="none"/><rect x="240" y="62" width="64" height="50" fill="none"/><rect x="304" y="62" width="64" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="102" y="43" text-anchor="end">2. periyot</text><text x="102" y="93" text-anchor="end">3. periyot</text></g><text x="144" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><text x="208" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="272" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">N</text><text x="336" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">O</text><text x="144" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Al</text><text x="208" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Si</text><text x="272" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">P</text><text x="336" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">S</text></svg>`,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: azot ile fosfor aynı sütunda, yani 5A grubundadır ve ikisi de ametaldir.",
    "Alüminyumu ametal ya da yarı metal sanma: alüminyum bir metaldir, I yanlıştır. Ayrıca III doğrudur.",
    null,
    "Alüminyumu yarı metal sanma: I'i doğru kabul etmek, panodaki tek metali (alüminyum) fark etmemektir."
  ],
  aciklama: `Yarı metaller basamak çizgisi üzerindedir: bu panoda bor ve silisyum. Alüminyum çizginin solunda kalan bir metaldir.
Adım 1 (I): Panoda alüminyum (Al) vardır ve metaldir. Bütün elementler ametal ya da yarı metal değildir. I yanlıştır.
Adım 2 (II): Bor 3A, silisyum 4A grubundadır. Farklı gruplardadır. II doğrudur.
Adım 3 (III): Azot ile fosfor alt alta, 5A grubundadır; ikisi de ametaldir. III doğrudur.
Adım 4: Doğru olanlar II ve III'tür.
Sık yapılan hata: Alüminyumu bor ile aynı grupta olduğu için yarı metal saymak. Aynı grup, aynı sınıf demek değildir.
Cevap C.`
},
{
  id: "fen-ps-330",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bilim şenliğinde bir ziyaretçiye, atom numaraları aşağıdaki tabloda verilen dört element kartı dağıtılmıştır. Kartlar X, Y, Z ve T harfleriyle adlandırılmıştır. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. Ziyaretçi kartlar için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. X ile Z aynı gruptadır.
II. Y ile Z aynı periyottadır.
III. T'nin atom numarası Y'ninkinden büyüktür.
**Buna göre ziyaretçinin yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>X</th><th>Y</th><th>Z</th><th>T</th></tr><tr><td>Atom numarası</td><td>7</td><td>15</td><td>17</td><td>9</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Birler basamağına bakma: 7 ile 17 sayılarının birler basamağı aynı olsa da X, 2. periyodun 5A grubunda; Z, 3. periyodun 7A grubundadır.",
    null,
    "Birler basamağına bakıp I'i, 9'u 15'ten büyük sanıp III'ü doğru kabul etme: T 2. periyotta, Y 3. periyottadır; T'nin atom numarası daha küçüktür.",
    "III'ü doğru sayma: 9'u 15'ten büyük sanmak; oysa T, 2. periyotta olduğu için atom numarası 3. periyottaki Y'ninkinden küçüktür."
  ],
  aciklama: `Atom numarasından yer bulunur: 1. periyotta 1-2, 2. periyotta 3-10, 3. periyotta 11-18 numaralı elementler vardır.
Adım 1: X (7) 2. periyotta, soldan 5. kutudadır: 5A. Y (15) 3. periyotta, 15 − 10 = 5. kutudadır: 5A. Z (17) 3. periyotta 7. kutudadır: 7A. T (9) 2. periyotta 7. kutudadır: 7A.
Adım 2 (I): X 5A, Z 7A grubundadır. Aynı grupta değildir. I yanlıştır.
Adım 3 (II): Y ve Z, ikisi de 3. periyottadır. II doğrudur.
Adım 4 (III): T (9) 2. periyottadır, Y (15) 3. periyottadır; T'nin atom numarası küçüktür. III yanlıştır.
Sağlama: Kartlar azot, fosfor, klor ve flordur. Azot ile fosfor aynı gruptadır; X ile Z değil.
Cevap B.`
},
{
  id: "fen-ps-331",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Okul laboratuvarındaki çalışma kâğıdında periyodik sistemin ilk üç periyodu çizilmiş ve dört kutu K, L, M ve N harfleriyle işaretlenmiştir. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: K 2. periyot 1A, L 3. periyot 1A, M 3. periyot 5A, N 2. periyot 8A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="121" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">K</text><text x="471" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">N</text><text x="121" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">L</text><text x="321" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">M</text></svg>`,
  secenekler: ["K ile L aynı gruptadır ve ikisi de metaldir.", "L ile M aynı periyottadır ve kimyasal özellikleri benzerdir.", "M ile N aynı gruptadır ve ikisi de ametaldir.", "K'nin atom numarası L'ninkinden büyüktür ve ikisi aynı periyottadır."],
  dogru: 0,
  hatalar: [
    null,
    "Aynı periyotu benzerlik sanma: L ile M aynı periyottadır ama farklı gruplardadır; kimyasal özellikler aynı gruptaki elementlerde benzerdir.",
    "M ile N'yi aynı sütunda sanma: M 5A grubunda, N ise 8A grubundadır. N bir soygazdır, ametal değildir.",
    "Periyotları karıştırma: K 2. periyotta, L 3. periyottadır; ikisi aynı periyotta değildir ve alttaki L'nin atom numarası daha büyüktür."
  ],
  aciklama: `Aynı sütundaki elementler aynı gruptadır. Aynı satırdaki elementler aynı periyottadır. Sol ve orta bölge metal, sağ üst bölge ametal, en sağ sütun soygazdır.
Adım 1: K ve L, 1A sütununda alt alta durur (lityum ve sodyum). Aynı gruptadırlar ve ikisi de metaldir.
Adım 2: L ile M aynı satırdadır, yani aynı periyottadır; ama grupları 1A ve 5A'dır, kimyasal özellikleri benzer değildir.
Adım 3: M 5A, N 8A grubundadır. N soygazdır.
Adım 4: K 2. periyotta, L 3. periyottadır; aynı periyotta değildir.
Sağlama: Yalnızca "K ile L aynı gruptadır ve ikisi de metaldir" seçeneğinin iki bölümü de doğrudur.
Cevap A.`
},
{
  id: "fen-ps-332",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Kimya laboratuvarındaki bir bilmece kartında şu soru yazmaktadır: "Atom numarası 14 olan elementle aynı grupta bulunan ve 2. periyotta yer alan elementin sınıfı nedir?" Periyodik sistemin 1. periyodunda 2, 2. periyodunda 8 element bulunur.
**Buna göre kartın doğru yanıtı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Ametal", "Yarı metal", "Metal", "Soygaz"],
  dogru: 0,
  hatalar: [
    null,
    "Aynı grubu aynı sınıf sanma: atom numarası 14 olan element silisyumdur (yarı metal). Aynı gruptaki 2. periyot elementi karbondur ve ametaldir.",
    "Karbonu sol bölgede sanma: karbon, tablonun sağ üst bölgesindedir; metal değil ametaldir.",
    "Grup numarasını soygaz grubuyla karıştırma: 4A grubu soygaz grubu değildir; soygazlar 8A grubundadır."
  ],
  aciklama: `Atom numarasından yer bulunur: 1. periyotta 2, 2. periyotta 8 element vardır.
Adım 1: 14 − 2 − 8 = 4. Element, 3. periyodun 4. kutusundadır: 4A grubu (silisyum).
Adım 2: 2. periyodun 4A kutusundaki element karbondur (atom numarası 6).
Adım 3: Karbon, tablonun sağ üst bölgesindedir; bir ametaldir.
Sık yapılan hata: Aynı gruptaki elementlerin aynı sınıfta olduğunu düşünmek. Karbon ametal, silisyum yarı metaldir.
Cevap A.`
},
{
  id: "fen-ps-333",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir eğitim yazılımı, periyodik sistemin ilk dört periyodunu 18 sütunlu biçimde göstermektedir. Yazılım dört kutuyu X, Y, Z ve T harfleriyle işaretlemiştir. Ayşe, bu kutular için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. X, Y ve Z aynı periyottadır.
II. Z'nin atom numarası Y'ninkinden 18 fazladır.
III. T ile Y aynı periyottadır.
**Buna göre Ayşe'nin yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 546 148" role="img" aria-label="Periyodik sistemin ilk dört periyodu, 18 sütunlu: X 2. periyot 13. sütun, Y 3. periyot 13. sütun, Z 4. periyot 13. sütun, T 3. periyot 17. sütun"><g stroke="currentColor" stroke-width="1.2"><rect x="40" y="28" width="28" height="28" fill="none"/><rect x="516" y="28" width="28" height="28" fill="none"/><rect x="40" y="56" width="28" height="28" fill="none"/><rect x="68" y="56" width="28" height="28" fill="none"/><rect x="376" y="56" width="28" height="28" fill="none"/><rect x="404" y="56" width="28" height="28" fill="none"/><rect x="432" y="56" width="28" height="28" fill="none"/><rect x="460" y="56" width="28" height="28" fill="none"/><rect x="488" y="56" width="28" height="28" fill="none"/><rect x="516" y="56" width="28" height="28" fill="none"/><rect x="40" y="84" width="28" height="28" fill="none"/><rect x="68" y="84" width="28" height="28" fill="none"/><rect x="376" y="84" width="28" height="28" fill="none"/><rect x="404" y="84" width="28" height="28" fill="none"/><rect x="432" y="84" width="28" height="28" fill="none"/><rect x="460" y="84" width="28" height="28" fill="none"/><rect x="488" y="84" width="28" height="28" fill="none"/><rect x="516" y="84" width="28" height="28" fill="none"/><rect x="40" y="112" width="28" height="28" fill="none"/><rect x="68" y="112" width="28" height="28" fill="none"/><rect x="96" y="112" width="28" height="28" fill="none"/><rect x="124" y="112" width="28" height="28" fill="none"/><rect x="152" y="112" width="28" height="28" fill="none"/><rect x="180" y="112" width="28" height="28" fill="none"/><rect x="208" y="112" width="28" height="28" fill="none"/><rect x="236" y="112" width="28" height="28" fill="none"/><rect x="264" y="112" width="28" height="28" fill="none"/><rect x="292" y="112" width="28" height="28" fill="none"/><rect x="320" y="112" width="28" height="28" fill="none"/><rect x="348" y="112" width="28" height="28" fill="none"/><rect x="376" y="112" width="28" height="28" fill="none"/><rect x="404" y="112" width="28" height="28" fill="none"/><rect x="432" y="112" width="28" height="28" fill="none"/><rect x="460" y="112" width="28" height="28" fill="none"/><rect x="488" y="112" width="28" height="28" fill="none"/><rect x="516" y="112" width="28" height="28" fill="none"/></g><g fill="currentColor" font-size="14"><text x="30" y="47" text-anchor="end">1</text><text x="30" y="75" text-anchor="end">2</text><text x="30" y="103" text-anchor="end">3</text><text x="30" y="131" text-anchor="end">4</text><text x="54" y="19" text-anchor="middle">1</text><text x="82" y="19" text-anchor="middle">2</text><text x="110" y="19" text-anchor="middle">3</text><text x="138" y="19" text-anchor="middle">4</text><text x="166" y="19" text-anchor="middle">5</text><text x="194" y="19" text-anchor="middle">6</text><text x="222" y="19" text-anchor="middle">7</text><text x="250" y="19" text-anchor="middle">8</text><text x="278" y="19" text-anchor="middle">9</text><text x="306" y="19" text-anchor="middle">10</text><text x="334" y="19" text-anchor="middle">11</text><text x="362" y="19" text-anchor="middle">12</text><text x="390" y="19" text-anchor="middle">13</text><text x="418" y="19" text-anchor="middle">14</text><text x="446" y="19" text-anchor="middle">15</text><text x="474" y="19" text-anchor="middle">16</text><text x="502" y="19" text-anchor="middle">17</text><text x="530" y="19" text-anchor="middle">18</text></g><text x="390" y="76" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="390" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="502" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="390" y="132" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Grup ile periyodu karıştırma: X, Y ve Z aynı sütunda, yani aynı gruptadır; periyotları farklıdır. Ayrıca II ve III doğrudur.",
    "III'ü gözden kaçırma: T ile Y aynı satırda, yani 3. periyottadır.",
    "Grup–periyot karışıklığı: I yanlıştır, çünkü X, Y ve Z alt alta (aynı grupta) durur. II de doğrudur.",
    null
  ],
  aciklama: `Yatay sıra periyot, düşey sütun gruptur. 4. periyotta B grupları da bulunduğu için 18 elementin hepsi yer alır.
Adım 1 (I): X, Y ve Z aynı sütunda (13. sütun) ama farklı satırlardadır. Aynı gruptadırlar, aynı periyotta değildir. I yanlıştır.
Adım 2 (II): Y (13. sütun) 3. periyotta alüminyumdur (13). Z ise 4. periyotun 13. sütunudur: 19'dan başlayan periyotta K, Ca ve 10 B kutusundan sonra gelir; atom numarası 31'dir. 31 − 13 = 18. II doğrudur.
Adım 3 (III): T ile Y aynı satırdadır, yani 3. periyottadır. III doğrudur.
Sağlama: Y alüminyum (13), Z galyum (31), T klor (17); klor da 3. periyottadır.
Cevap D.`
},
{
  id: "fen-ps-334",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ders kitabının etkinliğinde, periyodik sistemin 2. ve 3. periyotlarından bir kesit verilmiştir. Kesitte bazı elementlerin gerçek sembolleri yazılıdır; X ise sembolü verilmeyen bir elementtir. Kutular tablodaki yerlerine göre yerleştirilmiştir. (X gerçek bir element sembolü değildir.)
**Buna göre X için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 320 122" role="img" aria-label="Periyodik sistemin 2. ve 3. periyotlarından kesit: üst satırda boş kutu, C, N; alt satırda Al, Si ve sembolü verilmeyen X"><g stroke="currentColor" stroke-width="1.5"><rect x="112" y="12" width="64" height="50" fill="none"/><rect x="176" y="12" width="64" height="50" fill="none"/><rect x="240" y="12" width="64" height="50" fill="none"/><rect x="112" y="62" width="64" height="50" fill="none"/><rect x="176" y="62" width="64" height="50" fill="none"/><rect x="240" y="62" width="64" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="102" y="43" text-anchor="end">2. periyot</text><text x="102" y="93" text-anchor="end">3. periyot</text></g><text x="208" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="272" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">N</text><text x="144" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Al</text><text x="208" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Si</text><text x="272" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">X</text></svg>`,
  secenekler: ["Yarı metaldir; azotla aynı gruptadır.", "Ametaldir; karbonla aynı gruptadır.", "Ametaldir; azotla aynı gruptadır.", "Yarı metaldir; silisyumla aynı gruptadır."],
  dogru: 2,
  hatalar: [
    "Yarı metal sanma: X, silisyumun hemen yanındadır ama yarı metaller yalnızca basamak çizgisi üzerindeki bor ve silisyumdur; X bir ametaldir.",
    "Yanlış sütunu seçme: X, azotun tam altındadır; karbon bir sütun solda, silisyumun üstündedir.",
    null,
    "Yan yana olmayı benzerlik sanma: X, silisyumla aynı periyottadır ama farklı gruptadır. Ayrıca yarı metal değildir."
  ],
  aciklama: `Aynı sütundaki kutular aynı gruptadır. Bir sütunda alttaki element üsttekinin altında yer alır.
Adım 1: X, azotun (N) tam altındadır; yani azotla aynı gruptadır (5A). Bu element fosfordur.
Adım 2: Fosfor, basamak çizgisinin sağında kalır; ametaldir. Yarı metaller yalnızca bor ve silisyumdur.
Adım 3: X karbonla aynı grupta değildir; karbon bir sütun solda durur (4A).
Sağlama: Fosfor, 3. periyodun 5A kutusudur (atom numarası 15); azot ise 7'dir.
Cevap C.`
},
{
  id: "fen-ps-335",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Defne, atom numaraları ardışık olan üç elementin kartını hazırlamıştır. Kartlar, atom numarası en küçük olandan başlayarak X, Y ve Z harfleriyle adlandırılmıştır. Atom numaraları aşağıdaki tabloda verilmiştir. Defne kartlar için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. X ile Y aynı periyottadır.
II. Y ile Z aynı periyottadır.
III. X bir soygazdır.
**Buna göre Defne'nin yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>X</th><th>Y</th><th>Z</th></tr><tr><td>Atom numarası</td><td>2</td><td>3</td><td>4</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Ardışık sayıları aynı periyot sanma: 2 numaralı element 1. periyodu bitirir, 3 numaralı element 2. periyodu başlatır. Ayrıca II ve III doğrudur.",
    "Ardışık sayıları aynı periyot sanma ve helyumu soygaz saymama: I yanlıştır; III ise doğrudur.",
    "II'yi gözden kaçırma: 3 ve 4 numaralı elementler 2. periyodun ilk iki kutusunda yan yana durur. I de yanlıştır.",
    null
  ],
  aciklama: `1. periyotta yalnızca iki element vardır: 1 ve 2. Atom numarası 3'ten itibaren 2. periyot başlar.
Adım 1 (I): X (2) 1. periyodun son elementi helyumdur. Y (3) 2. periyodun ilk elementi lityumdur. Farklı periyotlardadırlar. I yanlıştır.
Adım 2 (II): Y (3) ve Z (4), 2. periyodun ilk iki kutusundadır (lityum, berilyum). II doğrudur.
Adım 3 (III): Helyum 8A grubundadır ve soygazdır. III doğrudur.
Adım 4: Doğru olanlar II ve III'tür.
Sık yapılan hata: Atom numarası ardışık olan elementlerin hep aynı periyotta olduğunu düşünmek. Periyot bitince bir sonraki element alt satırın başına geçer.
Cevap D.`
},
{
  id: "fen-ps-336",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim şenliğinde periyodik sistemin ilk üç periyodu bir panoya çizilmiş ve üç kutu K, L ve M harfleriyle işaretlenmiştir. Pano hakkında şu yargılar ileri sürülmüştür: (Harfler, elementlerin gerçek sembolleri değildir.)
I. L ile M aynı periyottadır.
II. K, L ve M aynı gruptadır.
III. K ile L benzer kimyasal özellik gösterir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: K 1. periyot 8A, L 2. periyot 8A, M 3. periyot 1A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="471" y="64" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">K</text><text x="471" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">L</text><text x="121" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">M</text></svg>`,
  secenekler: ["Yalnız II", "Yalnız III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "M'yi de aynı sütunda sanma: M, 1A grubundadır; K ve L ise 8A grubundadır. II yanlıştır, III ise doğrudur.",
    null,
    "II'yi doğru sayma: M farklı bir sütundadır, bu yüzden üçü aynı grupta değildir. III doğrudur ama I ile II yanlıştır.",
    "L ile M'nin aynı periyotta olduğunu sanma: L 2. periyotta, M 3. periyottadır. Ayrıca II yanlıştır."
  ],
  aciklama: `Aynı sütundaki elementler aynı gruptadır; aynı gruptaki elementlerin kimyasal özellikleri benzerdir.
Adım 1 (I): L, 2. periyotta; M, 3. periyottadır. Aynı periyotta değildir. I yanlıştır.
Adım 2 (II): K ve L, 8A sütunundadır; M ise 1A sütunundadır. Üçü aynı grupta değildir. II yanlıştır.
Adım 3 (III): K (helyum) ile L (neon) aynı grupta olduğu için benzer kimyasal özellik gösterir. III doğrudur.
Sağlama: K ve L soygazdır; M ise sodyumdur ve metaldir.
Cevap B.`
},
{
  id: "fen-ps-337",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir element kartında yalnızca atom numarası yazılıdır: 34. Periyodik sistemin 4. periyodu 19 numaralı elementle başlar. Bu periyotta 1A ve 2A gruplarından sonra 10 kutuluk B grupları, ardından 3A-8A grupları gelir.
**Buna göre atom numarası 34 olan elementin 4. periyottaki grubu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["4A", "5A", "6A", "7A"],
  dogru: 2,
  hatalar: [
    "B gruplarını sayarken ilk iki kutuyu unutma: 34 − 30 = 4 bulunup 1A'dan sayılmıştır. Oysa 19 ve 20 de bu periyodun ilk iki kutusudur.",
    "Bir kutu eksik sayma: 5A grubundaki element 33 numaralıdır.",
    null,
    "Bir kutu fazla sayma: 7A grubundaki element 35 numaralıdır."
  ],
  aciklama: `4. periyot: 19 (1A), 20 (2A), 21-30 (10 kutuluk B grupları), 31 (3A), 32 (4A), 33 (5A), 34 (6A), 35 (7A), 36 (8A).
Adım 1: 19 ve 20, 1A ile 2A kutularıdır. 21-30 numaralı elementler B gruplarındadır.
Adım 2: 31'den itibaren 3A başlar: 31 → 3A, 32 → 4A, 33 → 5A, 34 → 6A.
Sağlama: Periyot 36 numaralı soygazla (8A) biter; geriye doğru sayınca 35 → 7A, 34 → 6A.
Cevap C.`
},
{
  id: "fen-ps-338",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Okul bilim şenliğinde bir öğrenci, "aynı grupta olduğu hâlde farklı sınıflarda yer alan iki element" örneği bulmaya çalışmaktadır. Elindeki dört çiftin her birinde iki element de periyodik sistemde aynı gruptadır.
**Buna göre öğrencinin aradığı örnek aşağıdaki çiftlerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Magnezyum – kalsiyum", "Oksijen – kükürt", "Helyum – argon", "Karbon – silisyum"],
  dogru: 3,
  hatalar: [
    "Magnezyum ve kalsiyum, 2A grubundadır ve ikisi de metaldir; aynı grup ve aynı sınıf.",
    "Oksijen ve kükürt, 6A grubundadır ve ikisi de ametaldir; aynı grup ve aynı sınıf.",
    "Helyum ve argon, 8A grubundadır ve ikisi de soygazdır; aynı grup ve aynı sınıf.",
    null
  ],
  aciklama: `Aynı grupta bulunan elementler kimyasal olarak benzerdir, ama sınıfları aynı olmak zorunda değildir. Sınıf, kutunun tablodaki bölgesine göre belirlenir.
Adım 1: Karbon 2. periyodun 4A kutusundadır ve ametaldir. Silisyum 3. periyodun 4A kutusundadır ve basamak çizgisi üzerinde, yarı metaldir. Aynı grup, farklı sınıf.
Adım 2: Magnezyum–kalsiyum (ikisi metal), oksijen–kükürt (ikisi ametal), helyum–argon (ikisi soygaz) çiftlerinde sınıflar aynıdır.
Sık yapılan hata: Aynı gruptaki elementlerin aynı sınıfta olduğunu düşünmek. Bor–alüminyum ve hidrojen–lityum çiftleri de bu duruma örnektir.
Cevap D.`
},
{
  id: "fen-ps-339",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bilim yarışmasında periyodik sistemin ilk üç periyodunda beş kutu X, Y, Z, T ve R harfleriyle işaretlenmiştir. Yarışmacılardan, elementleri atom numaralarına göre küçükten büyüğe sıraladıklarında ortadaki (üçüncü) elementi bulmaları istenmiştir. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre ortadaki element aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: X 3. periyot 1A, Y 2. periyot 8A, Z 1. periyot 8A, T 3. periyot 3A, R 2. periyot 5A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="471" y="64" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text><text x="321" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">R</text><text x="471" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="121" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="221" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">T</text></svg>`,
  secenekler: ["R", "T", "X", "Y"],
  dogru: 3,
  hatalar: [
    "Grup sırasına göre dizme: sütun numarasına bakılırsa X, T, R, Y sırası bulunur; oysa sıralama atom numarasına göredir, önce periyoda bakılır.",
    "En büyük atom numaralıyı ortadaki sanma: T, 3. periyotta X'in sağında olduğu için sıralamanın sonundadır.",
    "Bir sıra kayma: X, Y'den sonra gelir; sıralamada dördüncüdür.",
    null
  ],
  aciklama: `Atom numaraları önce periyoda, sonra aynı periyotta soldan sağa doğru artar.
Adım 1: Z 1. periyottadır; en küçük atom numaralı odur.
Adım 2: 2. periyottaki R (5A) ile Y (8A) gelir. Aynı periyotta sağdaki büyüktür: R < Y.
Adım 3: 3. periyottaki X (1A) ile T (3A) en büyüklerdir: X < T.
Adım 4: Sıralama Z < R < Y < X < T olur. Ortadaki, yani üçüncü element Y'dir.
Sağlama: Elementler helyum (2), azot (7), neon (10), sodyum (11), alüminyum (13).
Cevap D.`
},
{
  id: "fen-ps-340",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Kerem, periyodik sistemde atom numarası 12 olan elementi bulmuş ve şu notu yazmıştır: "X elementi, atom numarası 12 olan elementle aynı periyotta ve 4A grubunda yer alır." (X gerçek bir element sembolü değildir.) Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur.
I. X'in atom numarası 14'tür.
II. X bir ametaldir.
III. X ile azot aynı gruptadır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "I ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Yarı metali ametal sanma: X silisyumdur ve basamak çizgisi üzerinde bir yarı metaldir. Ayrıca I doğrudur.",
    "Silisyumu ametal sanma: I doğrudur ama II yanlıştır; silisyum yarı metaldir.",
    "4A ile 5A'yı karıştırma: azot 5A grubundadır, X ise 4A grubundadır. III yanlıştır."
  ],
  aciklama: `12 numaralı element: 12 − 2 − 8 = 2. Yani 3. periyodun 2. kutusundadır: 2A grubundaki magnezyumdur.
Adım 1: X, magnezyumla aynı periyotta (3. periyot) ve 4A grubundadır. Magnezyumdan (2A) iki kutu sağdadır: atom numarası 12 + 2 = 14. I doğrudur.
Adım 2: 14 numaralı element silisyumdur; basamak çizgisi üzerindedir ve yarı metaldir. II yanlıştır.
Adım 3: Silisyum 4A grubundadır, azot 5A grubundadır. III yanlıştır.
Sık yapılan hata: Yarı metalleri ametal ya da metal sanmak. Bor ve silisyum ayrı bir sınıftır.
Cevap A.`
},
{
  id: "fen-ps-341",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul sergisinde periyodik sistemin ilk dört periyodu 18 sütunlu biçimde gösterilmiştir. Beş kutu X, Y, Z, T ve R harfleriyle işaretlenmiştir. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre X, Y, Z, T ve R kutularındaki elementlerin sınıfları sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 546 148" role="img" aria-label="Periyodik sistemin ilk dört periyodu, 18 sütunlu: X 4. periyot 2. sütun, Y 3. periyot 13. sütun, Z 3. periyot 14. sütun, T 2. periyot 16. sütun, R 3. periyot 18. sütun"><g stroke="currentColor" stroke-width="1.2"><rect x="40" y="28" width="28" height="28" fill="none"/><rect x="516" y="28" width="28" height="28" fill="none"/><rect x="40" y="56" width="28" height="28" fill="none"/><rect x="68" y="56" width="28" height="28" fill="none"/><rect x="376" y="56" width="28" height="28" fill="none"/><rect x="404" y="56" width="28" height="28" fill="none"/><rect x="432" y="56" width="28" height="28" fill="none"/><rect x="460" y="56" width="28" height="28" fill="none"/><rect x="488" y="56" width="28" height="28" fill="none"/><rect x="516" y="56" width="28" height="28" fill="none"/><rect x="40" y="84" width="28" height="28" fill="none"/><rect x="68" y="84" width="28" height="28" fill="none"/><rect x="376" y="84" width="28" height="28" fill="none"/><rect x="404" y="84" width="28" height="28" fill="none"/><rect x="432" y="84" width="28" height="28" fill="none"/><rect x="460" y="84" width="28" height="28" fill="none"/><rect x="488" y="84" width="28" height="28" fill="none"/><rect x="516" y="84" width="28" height="28" fill="none"/><rect x="40" y="112" width="28" height="28" fill="none"/><rect x="68" y="112" width="28" height="28" fill="none"/><rect x="96" y="112" width="28" height="28" fill="none"/><rect x="124" y="112" width="28" height="28" fill="none"/><rect x="152" y="112" width="28" height="28" fill="none"/><rect x="180" y="112" width="28" height="28" fill="none"/><rect x="208" y="112" width="28" height="28" fill="none"/><rect x="236" y="112" width="28" height="28" fill="none"/><rect x="264" y="112" width="28" height="28" fill="none"/><rect x="292" y="112" width="28" height="28" fill="none"/><rect x="320" y="112" width="28" height="28" fill="none"/><rect x="348" y="112" width="28" height="28" fill="none"/><rect x="376" y="112" width="28" height="28" fill="none"/><rect x="404" y="112" width="28" height="28" fill="none"/><rect x="432" y="112" width="28" height="28" fill="none"/><rect x="460" y="112" width="28" height="28" fill="none"/><rect x="488" y="112" width="28" height="28" fill="none"/><rect x="516" y="112" width="28" height="28" fill="none"/></g><g fill="currentColor" font-size="14"><text x="30" y="47" text-anchor="end">1</text><text x="30" y="75" text-anchor="end">2</text><text x="30" y="103" text-anchor="end">3</text><text x="30" y="131" text-anchor="end">4</text><text x="54" y="19" text-anchor="middle">1</text><text x="82" y="19" text-anchor="middle">2</text><text x="110" y="19" text-anchor="middle">3</text><text x="138" y="19" text-anchor="middle">4</text><text x="166" y="19" text-anchor="middle">5</text><text x="194" y="19" text-anchor="middle">6</text><text x="222" y="19" text-anchor="middle">7</text><text x="250" y="19" text-anchor="middle">8</text><text x="278" y="19" text-anchor="middle">9</text><text x="306" y="19" text-anchor="middle">10</text><text x="334" y="19" text-anchor="middle">11</text><text x="362" y="19" text-anchor="middle">12</text><text x="390" y="19" text-anchor="middle">13</text><text x="418" y="19" text-anchor="middle">14</text><text x="446" y="19" text-anchor="middle">15</text><text x="474" y="19" text-anchor="middle">16</text><text x="502" y="19" text-anchor="middle">17</text><text x="530" y="19" text-anchor="middle">18</text></g><text x="82" y="132" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="390" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="418" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text><text x="474" y="76" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="530" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">R</text></svg>`,
  secenekler: ["Metal, ametal, yarı metal, ametal, soygaz", "Metal, metal, yarı metal, ametal, soygaz", "Metal, metal, ametal, ametal, soygaz", "Metal, metal, yarı metal, yarı metal, soygaz"],
  dogru: 1,
  hatalar: [
    "Alüminyumu ametal sanma: Y, 13. sütunda (3A) 3. periyottadır; bor ile aynı gruptadır ama basamak çizgisinin solunda kalır ve metaldir.",
    null,
    "Silisyumu ametal sanma: Z, 14. sütunda (4A) 3. periyottadır; basamak çizgisi üzerindedir ve yarı metaldir.",
    "Oksijeni yarı metal sanma: T, 16. sütunda (6A) 2. periyottadır; yarı metaller yalnızca bor ve silisyumdur, oksijen ametaldir."
  ],
  aciklama: `Metaller sol ve orta bölgede, ametaller sağ üstte, yarı metaller basamak çizgisi üzerinde, soygazlar en sağdaki sütundadır.
Adım 1: X, 4. periyotun 2. sütunundadır (2A): kalsiyum, metal.
Adım 2: Y, 3. periyotun 13. sütunundadır (3A): alüminyum, metal.
Adım 3: Z, 3. periyotun 14. sütunundadır (4A): silisyum, yarı metal.
Adım 4: T, 2. periyotun 16. sütunundadır (6A): oksijen, ametal. R, 3. periyotun 18. sütunundadır (8A): argon, soygaz.
Sağlama: Sıra: metal, metal, yarı metal, ametal, soygaz.
Cevap B.`
},
{
  id: "fen-ps-342",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Kimya öğretmeni tahtaya atom numaraları 6, 13, 16 ve 18 olan dört elementi yazmış ve öğrencilerden bu elementlerin sınıflarını bulmalarını istemiştir. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur.
**Buna göre bu elementlerin sınıfları sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: null,
  secenekler: ["Ametal, metal, ametal, soygaz", "Ametal, yarı metal, ametal, soygaz", "Yarı metal, metal, ametal, soygaz", "Ametal, metal, ametal, ametal"],
  dogru: 0,
  hatalar: [
    null,
    "13 numaralı alüminyumu yarı metal sanma: alüminyum, bor ile aynı gruptadır ama bir metaldir.",
    "6 numaralı karbonu yarı metal sanma: karbon, silisyumla aynı gruptadır ama ametaldir.",
    "Argonu ametal sanma: 18 numaralı element 3. periyodun son elementidir ve soygazdır."
  ],
  aciklama: `Atom numarasından yer bulunur: 1. periyotta 1-2, 2. periyotta 3-10, 3. periyotta 11-18.
Adım 1: 6 → 2. periyotun 4. kutusu (4A): karbon, ametal.
Adım 2: 13 → 3. periyodun 3. kutusu (3A): alüminyum, metal.
Adım 3: 16 → 3. periyodun 6. kutusu (6A): kükürt, ametal.
Adım 4: 18 → 3. periyodun son kutusu (8A): argon, soygaz.
Sağlama: Sıra: ametal, metal, ametal, soygaz.
Cevap A.`
},
{
  id: "fen-ps-343",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Sude, periyodik sistemin ilk üç periyodunu çizip aşağıdaki gibi bir bölgeyi taramıştır. Taralı bölge için şu yargıları yazmıştır:
I. Taralı bölgedeki elementlerin hepsi ametaldir.
II. Taralı bölgede iki farklı periyottan element vardır.
III. Taralı bölgedeki elementlerin hepsi aynı gruptadır.
**Buna göre Sude'nin yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: 2. ve 3. periyotların 5A, 6A ve 7A grupları taralı"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="346" y="82" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="396" y="82" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="346" y="132" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="396" y="132" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g></svg>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: taralı bölge hem 2. hem 3. periyottaki kutuları kapsar.",
    "Sütunu satır sanma: taralı bölgede üç farklı grup (5A, 6A, 7A) vardır; hepsi aynı grupta değildir. I ve II doğrudur.",
    null,
    "III'ü doğru sanıp I'i gözden kaçırma: taralı bölgede üç ayrı sütun vardır ve bölgenin tamamı ametaldir."
  ],
  aciklama: `Tablonun sağ üst bölgesi ametallerin bölgesidir; ametaller yarı metal çizgisinin sağındadır.
Adım 1 (I): Taralı kutular azot, oksijen, flor, fosfor, kükürt ve klordur. Hepsi sağ üst bölgededir ve ametaldir. I doğrudur.
Adım 2 (II): Taralı bölge iki satırı kapsar: 2. ve 3. periyot. II doğrudur.
Adım 3 (III): Taralı bölge 5A, 6A ve 7A olmak üzere üç sütunu kapsar. Aynı grupta değildir. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: Satırı grup, sütunu periyot sanmak. Aynı sütun aynı gruptur.
Cevap C.`
},
{
  id: "fen-ps-344",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ders kitabı etkinliğinde şu soru sorulmuştur: "Periyodik sistemin ilk üç periyodundaki 18 elementin kaç tanesi ametaldir?" Etkinlikte soygazlar, ametallerden ayrı bir sınıf olarak değerlendirilmektedir.
**Buna göre sorunun doğru yanıtı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["7", "8", "10", "11"],
  dogru: 1,
  hatalar: [
    "Hidrojeni 1A grubunda olduğu için metal sayma: ametaller 7 bulunur. Oysa hidrojen ametaldir.",
    null,
    "Yarı metalleri (bor ve silisyum) de ametal sayma: 8 + 2 = 10 bulunur.",
    "Soygazları ametal sayma: 8 + 3 = 11 bulunur; soygazlar ayrı bir sınıftır."
  ],
  aciklama: `İlk üç periyotta 2 + 8 + 8 = 18 element vardır.
Adım 1: Soygazlar helyum, neon, argon: 3 element.
Adım 2: Yarı metaller bor ve silisyum: 2 element.
Adım 3: Metaller lityum, berilyum, sodyum, magnezyum, alüminyum: 5 element.
Adım 4: Geriye kalan ametallerdir: 18 − 3 − 2 − 5 = 8 (hidrojen, karbon, azot, oksijen, flor, fosfor, kükürt, klor).
Sağlama: 8 + 3 + 2 + 5 = 18.
Cevap B.`
},
{
  id: "fen-ps-345",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yayınevi, periyodik sistemde grupları 1'den 18'e kadar numaralayan bir poster hazırlamıştır. Posterde "17. grup, 2. periyot", "14. grup, 3. periyot" ve "18. grup, 3. periyot" kutuları üç ayrı renkle boyanmıştır. A grupları posterde şöyle numaralanmıştır: 1A ve 2A, 1. ve 2. gruplardır; 3A-8A, 13.-18. gruplardır; arada B grupları bulunur.
**Buna göre boyanan kutulardaki elementlerin sınıfları sırasıyla aşağıdakilerin hangisinde verilmiştir?**`,
  gorsel: null,
  secenekler: ["Ametal, ametal, soygaz", "Ametal, yarı metal, soygaz", "Ametal, yarı metal, ametal", "Yarı metal, ametal, soygaz"],
  dogru: 1,
  hatalar: [
    "Silisyumu ametal sanma: 3. periyodun 14. grubu (4A) silisyumdur ve basamak çizgisi üzerinde bir yarı metaldir.",
    null,
    "Argonu ametal sanma: 18. grup, soygaz grubudur.",
    "Grup numaralarını karıştırma: 17. grup 7A (flor) ve ametaldir; 14. grup 4A'dır (silisyum, yarı metal)."
  ],
  aciklama: `3A-8A gruplarının numarası, A'nın önündeki sayıya 10 eklenerek bulunur: 3A → 13, 4A → 14, 7A → 17, 8A → 18.
Adım 1: 17. grup = 7A. 2. periyotun 7A kutusu flordur; ametaldir.
Adım 2: 14. grup = 4A. 3. periyotun 4A kutusu silisyumdur; yarı metaldir.
Adım 3: 18. grup = 8A. 3. periyotun 8A kutusu argondur; soygazdır.
Sağlama: Sıra: ametal, yarı metal, soygaz.
Cevap B.`
},
{
  id: "fen-ps-346",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim dergisindeki bulmacada, periyodik sistemin ilk üç periyodundan alınan bir kesitte bazı kutuların yalnızca atom numaraları yazılmıştır. X ile gösterilen kutu boş bırakılmış, okuyuculardan bu kutudaki elementin atom numarasını ve sınıfını bulmaları istenmiştir. Kutular tablodaki yerlerine göre yerleştirilmiştir. (X gerçek bir element sembolü değildir.)
**Buna göre X için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 320 122" role="img" aria-label="Periyodik sistemin 2. ve 3. periyotlarından kesit: üst satırda boş kutu, 5, 6; alt satırda 12, 13 ve X"><g stroke="currentColor" stroke-width="1.5"><rect x="112" y="12" width="64" height="50" fill="none"/><rect x="176" y="12" width="64" height="50" fill="none"/><rect x="240" y="12" width="64" height="50" fill="none"/><rect x="112" y="62" width="64" height="50" fill="none"/><rect x="176" y="62" width="64" height="50" fill="none"/><rect x="240" y="62" width="64" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="102" y="43" text-anchor="end">2. periyot</text><text x="102" y="93" text-anchor="end">3. periyot</text></g><text x="208" y="43" font-size="17" text-anchor="middle" fill="currentColor">5</text><text x="272" y="43" font-size="17" text-anchor="middle" fill="currentColor">6</text><text x="144" y="93" font-size="17" text-anchor="middle" fill="currentColor">12</text><text x="208" y="93" font-size="17" text-anchor="middle" fill="currentColor">13</text><text x="272" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">X</text></svg>`,
  secenekler: ["12; metal", "14; ametal", "14; metal", "14; yarı metal"],
  dogru: 3,
  hatalar: [
    "Bir kutu geri sayma: X, 13'ün solunda değil sağındadır; atom numarası 12 değil 14'tür.",
    "Silisyumu ametal sanma: 14 numaralı element 4A grubundadır; aynı grubun 2. periyottaki üyesi (6) ametal olsa da silisyum bir yarı metaldir.",
    "Alüminyumun yanında olduğu için metal sanma: 14 numaralı silisyum, metal değil yarı metaldir.",
    null
  ],
  aciklama: `Aynı periyotta soldan sağa gidildikçe atom numarası birer birer artar. Alt periyottaki bir elementin atom numarası, üstündekinden 8 fazladır.
Adım 1: X, 13 numaralı kutunun hemen sağındadır: atom numarası 13 + 1 = 14.
Adım 2: 14 numaralı element silisyumdur. 3. periyodun 4A kutusundadır, basamak çizgisi üzerindedir; yarı metaldir.
Sağlama: X'in üstündeki kutu 6'dır ve 6 + 8 = 14.
Sık yapılan hata: Alüminyumun yanındaki elementi de metal sanmak. Sınıf için kutunun bölgesine bak.
Cevap D.`
},
{
  id: "fen-ps-347",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ipucu oyununda şu bilgi verilmiştir: "Periyodik sistemin 3. periyodundayım ve bir soygazım." Oyuncudan, bu elementin hemen üstündeki kutuda hangi elementin bulunduğunu söylemesi istenmiştir.
**Buna göre oyuncunun doğru yanıtı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Helyum", "Flor", "Klor", "Neon"],
  dogru: 3,
  hatalar: [
    "İki satır yukarı çıkma: helyum, 8A sütununun en üstündeki 1. periyot kutusudur; hemen üstteki kutu 2. periyottadır.",
    "Çapraz komşuyu seçme: flor, 2. periyodun 7A kutusudur; 3. periyottaki soygazın sol üst çaprazındadır, tam üstü değildir.",
    "Soldaki komşuyu seçme: klor, soygazın solunda, aynı periyottadır; üstündeki kutu 2. periyottadır.",
    null
  ],
  aciklama: `Soygazlar 8A grubundadır; her periyodun en sağındaki kutudur. Aynı sütundaki kutular aynı gruptadır.
Adım 1: 3. periyottaki soygaz argondur (atom numarası 18).
Adım 2: Argonun hemen üstündeki kutu, 2. periyodun 8A kutusudur: neon (atom numarası 10).
Sağlama: 18 − 8 = 10; üstteki kutunun atom numarası, alttakinden 8 azdır.
Cevap D.`
},
{
  id: "fen-ps-348",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Duru, periyodik sistemin 1A grubundaki ilk üç kutuyu X, Y ve Z harfleriyle işaretlemiş ve bu kutular için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. X, Y ve Z aynı periyottadır.
II. Z'nin atom numarası Y'ninkinden büyüktür.
III. X, Y ve Z'nin üçü de metaldir.
**Buna göre Duru'nun yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: 1A sütununda X 1. periyot, Y 2. periyot, Z 3. periyot"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="121" y="64" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="121" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="121" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text></svg>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Hidrojeni metal sanma: X hidrojendir ve ametaldir. Ayrıca II doğrudur.",
    "Sütunu satır sanma: X, Y ve Z alt alta, yani aynı grupta ama farklı periyotlardadır. I yanlıştır.",
    "Hidrojeni metal sanma: III yanlıştır; X hidrojendir ve 1A grubunda olduğu hâlde ametaldir."
  ],
  aciklama: `Aynı sütundaki kutular aynı gruptadır, farklı satırlardadır. Hidrojen 1A grubunda olsa da ametaldir.
Adım 1 (I): X, Y ve Z alt alta durur. Farklı periyotlardadır. I yanlıştır.
Adım 2 (II): Z, Y'nin altındadır. Alttaki periyodun atom numarası daha büyüktür. II doğrudur.
Adım 3 (III): X hidrojendir ve ametaldir. Üçü de metal değildir. III yanlıştır.
Sağlama: X, Y ve Z hidrojen (1), lityum (3) ve sodyumdur (11); 11 > 3.
Cevap A.`
},
{
  id: "fen-ps-349",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim merkezinde ziyaretçilerden, periyodik sistemin ilk üç periyodunda işaretli kutulardan yararlanarak bir eşleştirme yapmaları istenmiştir. Dört kutu P, R, S ve T harfleriyle işaretlenmiştir. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre hangi iki harfin gösterdiği elementler aynı periyotta olup biri metal, diğeri ametaldir?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: P 3. periyot 1A, R 3. periyot 6A, S 2. periyot 1A, T 3. periyot 8A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="121" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">S</text><text x="121" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">P</text><text x="371" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">R</text><text x="471" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">T</text></svg>`,
  secenekler: ["P ve S", "R ve S", "R ve T", "P ve R"],
  dogru: 3,
  hatalar: [
    "P ile S aynı gruptadır (1A) ve ikisi de metaldir; biri ametal değildir.",
    "R ile S biri ametal, biri metaldir; ama R 3. periyotta, S 2. periyottadır. Aynı periyotta değillerdir.",
    "R ile T aynı periyottadır ama R ametal, T soygazdır; metal olan yoktur.",
    null
  ],
  aciklama: `Aynı periyot = aynı satır. Sınıflar: P sodyum (metal), R kükürt (ametal), S lityum (metal), T argon (soygaz).
Adım 1: P ve R, 3. periyotta aynı satırdadır. P metal, R ametaldir. Koşulu sağlar.
Adım 2: P ve S ikisi de metaldir. R ve S farklı satırlardadır. R ve T'den hiçbiri metal değildir.
Sağlama: Yalnızca "P ve R" çiftinde hem aynı periyot hem metal–ametal koşulu birlikte vardır.
Cevap D.`
},
{
  id: "fen-ps-350",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kimya sınıfında, periyodik sistemin ilk dört periyodu 18 sütunlu biçimde çizilmiş ve dört kutu X, Y, Z ve T harfleriyle işaretlenmiştir. Öğrenciler işaretli kutular için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. X ile Y aynı gruptadır.
II. X ile Z yan yana olduğundan kimyasal özellikleri benzerdir.
III. Z'nin atom numarası X'inkinden büyüktür.
**Buna göre öğrencilerin yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 546 148" role="img" aria-label="Periyodik sistemin ilk dört periyodu, 18 sütunlu: X 4. periyot 1. sütun, Y 3. periyot 1. sütun, Z 4. periyot 2. sütun, T 2. periyot 2. sütun"><g stroke="currentColor" stroke-width="1.2"><rect x="40" y="28" width="28" height="28" fill="none"/><rect x="516" y="28" width="28" height="28" fill="none"/><rect x="40" y="56" width="28" height="28" fill="none"/><rect x="68" y="56" width="28" height="28" fill="none"/><rect x="376" y="56" width="28" height="28" fill="none"/><rect x="404" y="56" width="28" height="28" fill="none"/><rect x="432" y="56" width="28" height="28" fill="none"/><rect x="460" y="56" width="28" height="28" fill="none"/><rect x="488" y="56" width="28" height="28" fill="none"/><rect x="516" y="56" width="28" height="28" fill="none"/><rect x="40" y="84" width="28" height="28" fill="none"/><rect x="68" y="84" width="28" height="28" fill="none"/><rect x="376" y="84" width="28" height="28" fill="none"/><rect x="404" y="84" width="28" height="28" fill="none"/><rect x="432" y="84" width="28" height="28" fill="none"/><rect x="460" y="84" width="28" height="28" fill="none"/><rect x="488" y="84" width="28" height="28" fill="none"/><rect x="516" y="84" width="28" height="28" fill="none"/><rect x="40" y="112" width="28" height="28" fill="none"/><rect x="68" y="112" width="28" height="28" fill="none"/><rect x="96" y="112" width="28" height="28" fill="none"/><rect x="124" y="112" width="28" height="28" fill="none"/><rect x="152" y="112" width="28" height="28" fill="none"/><rect x="180" y="112" width="28" height="28" fill="none"/><rect x="208" y="112" width="28" height="28" fill="none"/><rect x="236" y="112" width="28" height="28" fill="none"/><rect x="264" y="112" width="28" height="28" fill="none"/><rect x="292" y="112" width="28" height="28" fill="none"/><rect x="320" y="112" width="28" height="28" fill="none"/><rect x="348" y="112" width="28" height="28" fill="none"/><rect x="376" y="112" width="28" height="28" fill="none"/><rect x="404" y="112" width="28" height="28" fill="none"/><rect x="432" y="112" width="28" height="28" fill="none"/><rect x="460" y="112" width="28" height="28" fill="none"/><rect x="488" y="112" width="28" height="28" fill="none"/><rect x="516" y="112" width="28" height="28" fill="none"/></g><g fill="currentColor" font-size="14"><text x="30" y="47" text-anchor="end">1</text><text x="30" y="75" text-anchor="end">2</text><text x="30" y="103" text-anchor="end">3</text><text x="30" y="131" text-anchor="end">4</text><text x="54" y="19" text-anchor="middle">1</text><text x="82" y="19" text-anchor="middle">2</text><text x="110" y="19" text-anchor="middle">3</text><text x="138" y="19" text-anchor="middle">4</text><text x="166" y="19" text-anchor="middle">5</text><text x="194" y="19" text-anchor="middle">6</text><text x="222" y="19" text-anchor="middle">7</text><text x="250" y="19" text-anchor="middle">8</text><text x="278" y="19" text-anchor="middle">9</text><text x="306" y="19" text-anchor="middle">10</text><text x="334" y="19" text-anchor="middle">11</text><text x="362" y="19" text-anchor="middle">12</text><text x="390" y="19" text-anchor="middle">13</text><text x="418" y="19" text-anchor="middle">14</text><text x="446" y="19" text-anchor="middle">15</text><text x="474" y="19" text-anchor="middle">16</text><text x="502" y="19" text-anchor="middle">17</text><text x="530" y="19" text-anchor="middle">18</text></g><text x="82" y="76" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="54" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="54" y="132" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="82" y="132" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text></svg>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: Z, X'in sağındadır ve aynı periyotta sağdaki elementin atom numarası büyüktür.",
    "Yan yana olmayı benzerlik sanma: X ile Z farklı gruplardadır (1. ve 2. sütun). Ayrıca III doğrudur.",
    null,
    "II'yi doğru sayma: benzer kimyasal özellik yan yana durmakla değil, aynı grupta (alt alta) bulunmakla ortaya çıkar."
  ],
  aciklama: `Aynı sütundaki kutular aynı gruptadır; aynı gruptaki elementlerin kimyasal özellikleri benzerdir. Aynı satırda yan yana duran elementler farklı gruptadır.
Adım 1 (I): X ve Y, 1. sütunda alt alta durur. Aynı gruptadırlar (potasyum, sodyum). I doğrudur.
Adım 2 (II): X ve Z yan yana ama farklı sütunlardadır. Kimyasal özellikleri benzer değildir. II yanlıştır.
Adım 3 (III): Aynı periyotta sağdaki element büyüktür. Z (kalsiyum, 20), X'in (potasyum, 19) sağındadır. III doğrudur.
Adım 4: Doğru olanlar I ve III'tür.
Cevap C.`
},
{
  id: "fen-ps-351",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Eda, ilk 20 element arasından beş elementin periyodik sistemdeki yerini aşağıdaki tabloya yazmıştır. Öğretmeni, periyodu ve grubu birlikte doğru yazılmış her elementi onaylayacaktır. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur.
**Buna göre öğretmenin onaylayacağı element sayısı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Element</th><th>Periyot</th><th>Grup</th></tr><tr><td>Karbon</td><td>2</td><td>4A</td></tr><tr><td>Argon</td><td>3</td><td>7A</td></tr><tr><td>Lityum</td><td>3</td><td>1A</td></tr><tr><td>Silisyum</td><td>3</td><td>4A</td></tr><tr><td>Oksijen</td><td>2</td><td>6A</td></tr></table>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 2,
  hatalar: [
    "Doğru satırları yanlış sayma: karbon (2. periyot, 4A), silisyum (3. periyot, 4A) ve oksijen (2. periyot, 6A) doğru yazılmıştır.",
    "Yanlış satırların sayısını bulma: yanlış yazılan iki element (argon, lityum) vardır; sorulan ise doğru yazılanların sayısıdır.",
    null,
    "Lityumun periyodunu denetlememe: lityum 2. periyodun ilk elementidir, 3. yazılması yanlıştır. Böylece onaylanan sayısı 4 sanılır."
  ],
  aciklama: `Her satırı atom numarasından ya da bilinen yerinden denetle.
Adım 1: Karbon (6) 2. periyodun 4. kutusundadır: 2. periyot, 4A. Doğru.
Adım 2: Argon (18) 3. periyodun son kutusundadır: 3. periyot, 8A. Tabloda 7A yazılmış; yanlış.
Adım 3: Lityum (3) 2. periyodun ilk kutusundadır: 2. periyot, 1A. Tabloda 3. periyot yazılmış; yanlış.
Adım 4: Silisyum (14) 3. periyodun 4. kutusundadır: 3. periyot, 4A. Doğru. Oksijen (8) 2. periyodun 6. kutusundadır: 2. periyot, 6A. Doğru.
Adım 5: Doğru yazılanlar karbon, silisyum ve oksijendir: 3 element.
Sağlama: 5 satırdan 2'si yanlış, 5 − 2 = 3.
Cevap C.`
},
{
  id: "fen-ps-352",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen laboratuvarında, oda koşullarında gaz hâlinde bulunan yedi elementin kartı hazırlanmıştır. Kartlarda yalnızca atom numaraları yazılıdır: 1, 2, 7, 8, 10, 17 ve 18. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur.
**Buna göre bu kartlardan kaç tanesi bir soygaza aittir?**`,
  gorsel: null,
  secenekler: ["2", "3", "4", "5"],
  dogru: 1,
  hatalar: [
    "Bir soygazı atlama: her periyodun son elementi soygazdır; 1., 2. ve 3. periyotların sonları 2, 10 ve 18'dir.",
    null,
    "Hidrojeni de soygaz sayma: hidrojen 1. periyotta helyumun yanındadır ama 1A grubundadır ve ametaldir.",
    "Gaz olan bazı elementleri soygaz sayma: 7 (azot) ve 8 (oksijen) gazdır ama ametaldir; soygaz olmak için 8A grubunda bulunmak gerekir."
  ],
  aciklama: `Soygazlar 8A grubundadır; her periyodun son elementidir. Gaz hâlinde bulunmak soygaz olmak için yeterli değildir.
Adım 1: 1. periyot 1-2, 2. periyot 3-10, 3. periyot 11-18 numaralı elementlerden oluşur. Periyotların son elementleri 2, 10 ve 18'dir.
Adım 2: 2 → helyum, 10 → neon, 18 → argon; üçü de soygazdır.
Adım 3: 1 (hidrojen), 7 (azot), 8 (oksijen), 17 (klor) 8A grubunda değildir; ametaldir.
Sağlama: Yedi karttan 3'ü soygaz, 4'ü ametaldir.
Cevap B.`
},
{
  id: "fen-ps-353",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Z elementi periyodik sistemin 2. periyodunda, 8A grubunda yer almaktadır. T elementinin atom numarası, Z'ninkinden 1 fazladır. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre T elementi periyodik sistemde hangi periyot ve grupta bulunur?**`,
  gorsel: null,
  secenekler: ["2. periyot, 1A", "3. periyot, 2A", "3. periyot, 1A", "3. periyot, 8A"],
  dogru: 2,
  hatalar: [
    "Aynı periyotta kalma: 2. periyot Z ile bitmiştir; bir sonraki element alt satırın başına geçer.",
    "Bir kutu fazla gitme: 3. periyodun 2A kutusundaki elementin atom numarası Z'ninkinden 2 fazladır.",
    null,
    "Aynı sütunun altına inme: Z'nin altındaki kutunun atom numarası 8 fazladır, 1 değil."
  ],
  aciklama: `Bir periyodun son kutusundan sonraki element, alt periyodun en solundaki (1A) kutuya geçer.
Adım 1: 2. periyodun 8A kutusundaki element neondur (atom numarası 10).
Adım 2: Atom numarası 11 olan T, 3. periyodun ilk kutusundadır: sodyum.
Adım 3: 3. periyodun ilk kutusu 1A grubundadır.
Sağlama: Aynı sütunda alta inince atom numarası 8 artar (10 → 18); yan kutuya geçince 1 artar.
Cevap C.`
},
{
  id: "fen-ps-354",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul sergisinde periyodik sistemin ilk üç periyodunda dört kutu K, L, M ve N harfleriyle işaretlenmiştir. Bir öğrenci işaretli kutular için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. K, M ve N'nin üçü de metaldir.
II. K, M ve N aynı gruptadır.
III. K ile L aynı gruptadır.
**Buna göre öğrencinin yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: K 1. periyot 1A, L 1. periyot 8A, M 2. periyot 1A, N 3. periyot 1A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="121" y="64" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">K</text><text x="471" y="64" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">L</text><text x="121" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">M</text><text x="121" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">N</text></svg>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Helyum ile hidrojeni aynı grup sanma: K ve L 1. periyotta yan yana gibi görünür ama K 1A, L 8A grubundadır. II de doğrudur.",
    "Hidrojeni metal sanma ve K ile L'yi aynı grup sanma: K hidrojendir ve ametaldir; L ise farklı bir sütundadır.",
    "K ile L'yi aynı grupta sanma: III yanlıştır; K 1A grubunda, L ise 8A grubundadır."
  ],
  aciklama: `1A grubu, tablonun en sol sütunudur; en üstünde hidrojen bulunur. En sağ sütun 8A grubudur.
Adım 1 (I): K hidrojendir ve ametaldir. M lityum, N sodyumdur; ikisi metaldir. Üçü de metal değildir. I yanlıştır.
Adım 2 (II): K, M ve N aynı sütundadır (1A). II doğrudur.
Adım 3 (III): L, 1. periyodun son kutusundadır (8A). K ile L aynı grupta değildir. III yanlıştır.
Adım 4: Doğru olan yalnızca II'dir.
Sık yapılan hata: Hidrojeni 1A grubunda olduğu için metal saymak.
Cevap A.`
},
{
  id: "fen-ps-355",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim kulübü, periyodik sistemin ilk üç periyodunu gösteren bir pano hazırlamış ve beş kutuyu A, B, C, D ve E harfleriyle işaretlemiştir. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: A 2. periyot 3A, B 3. periyot 3A, C 3. periyot 4A, D 2. periyot 6A, E 2. periyot 7A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="221" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="371" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">D</text><text x="421" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">E</text><text x="221" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><text x="271" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">C</text></svg>`,
  secenekler: ["D ile E aynı periyottadır ve ikisi de ametaldir.", "A ile B aynı gruptadır ve ikisi de yarı metaldir.", "A ile C aynı periyottadır ve ikisi de yarı metaldir.", "B ile C aynı periyottadır ve ikisi de metaldir."],
  dogru: 0,
  hatalar: [
    null,
    "B'yi yarı metal sanma: B (alüminyum), A (bor) ile aynı gruptadır ama bir metaldir.",
    "A ile C'yi aynı periyotta sanma: A (bor) 2. periyotta, C (silisyum) 3. periyottadır; ikisi de yarı metaldir ama farklı satırlardadır.",
    "C'yi metal sanma: C (silisyum), B (alüminyum) ile aynı periyottadır ama bir yarı metaldir."
  ],
  aciklama: `Yarı metaller basamak çizgisi üzerindedir: bor (A) ve silisyum (C). Alüminyum (B) çizginin solunda kalan bir metaldir.
Adım 1: D (oksijen) ve E (flor), 2. periyotta yan yana durur ve ikisi de tablonun sağ üst bölgesindedir; ametaldir.
Adım 2: A ile B aynı sütundadır (3A), ama A yarı metal, B metaldir.
Adım 3: A ile C farklı satırlardadır. B ile C aynı satırdadır, ama C yarı metaldir.
Sağlama: Yalnızca "D ile E" önermesinin iki bölümü de doğrudur.
Cevap A.`
},
{
  id: "fen-ps-356",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Okul bilim şenliğinde periyodik sistemin 2. ve 3. periyotlarından bir kesit sergilenmiştir. Kesitte B, C, O, Al ve S gerçek element sembolleridir; X, Y ve Z ise sembolü verilmeyen elementlerdir. Kutular tablodaki yerlerine göre yerleştirilmiştir. (X, Y ve Z gerçek sembol değildir.)
I. Y ile C aynı sınıftadır.
II. Z ile X aynı gruptadır.
III. Z bir yarı metaldir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 384 122" role="img" aria-label="Periyodik sistemin 2. ve 3. periyotlarından kesit: üst satırda B, C, X, O; alt satırda Al, Y, Z, S"><g stroke="currentColor" stroke-width="1.5"><rect x="112" y="12" width="64" height="50" fill="none"/><rect x="176" y="12" width="64" height="50" fill="none"/><rect x="240" y="12" width="64" height="50" fill="none"/><rect x="304" y="12" width="64" height="50" fill="none"/><rect x="112" y="62" width="64" height="50" fill="none"/><rect x="176" y="62" width="64" height="50" fill="none"/><rect x="240" y="62" width="64" height="50" fill="none"/><rect x="304" y="62" width="64" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="102" y="43" text-anchor="end">2. periyot</text><text x="102" y="93" text-anchor="end">3. periyot</text></g><text x="144" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><text x="208" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="272" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="336" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">O</text><text x="144" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Al</text><text x="208" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="272" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text><text x="336" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">S</text></svg>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Y'yi C ile aynı grupta olduğu için aynı sınıf sanma: Y (silisyum) yarı metaldir, C (karbon) ametaldir. Ayrıca II doğrudur.",
    null,
    "Y'yi C ile aynı sınıf sanıp Z'yi yarı metal sayma: Y yarı metaldir, C ametal; Z ise fosfordur ve ametaldir. II'yi de gözden kaçırmıştır.",
    "Hepsini doğru sayma: Y ile C aynı sınıfta değildir; Z ise yarı metal değil ametaldir."
  ],
  aciklama: `Her sütunda üstteki ve alttaki kutu aynı gruptadır. Satırdaki sıra soldan sağa 3A, 4A, 5A, 6A'dır.
Adım 1: Üst satır B (3A), C (4A), X (5A), O (6A); alt satır Al (3A), Y (4A), Z (5A), S (6A). X azot, Y silisyum, Z fosfordur.
Adım 2 (I): Y silisyumdur (yarı metal); C karbondur (ametal). Aynı sınıfta değillerdir. I yanlıştır.
Adım 3 (II): Z, X'in tam altındadır; ikisi de 5A grubundadır. II doğrudur.
Adım 4 (III): Z fosfordur; ametaldir. Yarı metaller yalnızca bor ve silisyumdur. III yanlıştır.
Sık yapılan hata: Aynı grupta olan elementlerin aynı sınıfta olduğunu düşünmek.
Cevap B.`
},
{
  id: "fen-ps-357",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kaçış odası oyununda kasanın şifresi, Y, X ve Z ile gösterilen kutulardaki elementlerin atom numaralarının toplamıdır. Kutular periyodik sistemin 2. ve 3. periyotlarından alınmış, tablodaki yerlerine göre yerleştirilmiştir; kutulardan birinin yalnızca atom numarası (15) yazılıdır. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. (X, Y ve Z gerçek sembol değildir.)
**Buna göre kasanın şifresi kaçtır?**`,
  gorsel: `<svg viewBox="0 0 320 122" role="img" aria-label="Periyodik sistemin 2. ve 3. periyotlarından kesit: üst satırda boş kutu, Y, boş kutu; alt satırda 15, X ve Z"><g stroke="currentColor" stroke-width="1.5"><rect x="112" y="12" width="64" height="50" fill="none"/><rect x="176" y="12" width="64" height="50" fill="none"/><rect x="240" y="12" width="64" height="50" fill="none"/><rect x="112" y="62" width="64" height="50" fill="none"/><rect x="176" y="62" width="64" height="50" fill="none"/><rect x="240" y="62" width="64" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="102" y="43" text-anchor="end">2. periyot</text><text x="102" y="93" text-anchor="end">3. periyot</text></g><text x="208" y="44" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="144" y="93" font-size="17" text-anchor="middle" fill="currentColor">15</text><text x="208" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="272" y="94" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text></svg>`,
  secenekler: ["24", "39", "41", "57"],
  dogru: 2,
  hatalar: [
    "Z'yi hesaba katmama: yalnızca Y (8) ve X (16) toplanmıştır.",
    "Y'yi X'ten 10 eksik alma: 16 − 10 = 6 bulunmuştur; oysa 2. ve 3. periyotlar arasındaki fark 8'dir.",
    null,
    "Y'yi X'ten 8 fazla alma: 16 + 8 = 24 bulunmuştur; Y üst periyottadır, atom numarası 8 eksiktir."
  ],
  aciklama: `Aynı periyotta soldan sağa atom numarası birer artar. Aynı sütunda üst periyottaki kutu, alttakinden 8 eksik atom numaralıdır.
Adım 1: X, 15 numaralı kutunun hemen sağındadır: 15 + 1 = 16.
Adım 2: Z, X'in hemen sağındadır: 16 + 1 = 17.
Adım 3: Y, X'in tam üstündedir (2. periyot): 16 − 8 = 8.
Adım 4: Şifre 8 + 16 + 17 = 41.
Sağlama: Y, X ve Z sırasıyla oksijen (8), kükürt (16) ve klordur (17).
Cevap C.`
},
{
  id: "fen-ps-358",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bilim şenliğinde periyodik sistemin ilk üç periyodunda yedi kutu A, B, C, D, E, F ve G harfleriyle işaretlenmiştir. Ziyaretçilerden, kutulardaki elementler arasındaki ilişkiyle ilgili doğru ifadeyi bulmaları istenmiştir. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: A 1. periyot 8A, B 2. periyot 1A, C 2. periyot 4A, D 2. periyot 8A, E 3. periyot 3A, F 3. periyot 5A, G 3. periyot 8A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="471" y="64" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="121" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><text x="271" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="471" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">D</text><text x="221" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">E</text><text x="321" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">F</text><text x="471" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">G</text></svg>`,
  secenekler: ["B ile E aynı gruptadır; ikisi de metaldir ve atom numaraları arasındaki fark 10'dur.", "A ile G aynı gruptadır; ikisi de soygazdır ve atom numaraları arasındaki fark 16'dır.", "C ile F aynı gruptadır; ikisi de ametaldir ve atom numaraları arasındaki fark 9'dur.", "D ile G aynı gruptadır; ikisi de soygazdır ve atom numaraları arasındaki fark 16'dır."],
  dogru: 1,
  hatalar: [
    "E'yi B ile aynı sütunda sanma: B (lityum, 3) 1A grubunda, E (alüminyum, 13) ise 3A grubundadır. Fark gerçekten 10'dur ama aynı grupta değillerdir.",
    null,
    "Yan yana sütunları aynı grup sanma: C (karbon, 6) 4A, F (fosfor, 15) 5A grubundadır. Fark gerçekten 9'dur ama farklı gruplardadırlar.",
    "Her soygaz çiftinde farkı 16 sanma: D (neon, 10) ile G (argon, 18) alt alta duran komşulardır; fark 8'dir. Fark 16 olan çift 1. ve 3. periyottaki A ile G'dir."
  ],
  aciklama: `Aynı sütundaki kutular aynı gruptadır. Bir ifadenin doğru olması için hem grup hem de atom numarası farkı doğru olmalıdır.
Adım 1: A (helyum, 2) ve G (argon, 18), 8A sütunundadır; aynı gruptadırlar, ikisi de soygazdır. Fark 18 − 2 = 16'dır. Bu ifade doğrudur.
Adım 2: B (lityum, 3) 1A, E (alüminyum, 13) 3A grubundadır; farklı gruplardadır.
Adım 3: C (karbon, 6) 4A, F (fosfor, 15) 5A grubundadır; farklı gruplardadır.
Adım 4: D (neon, 10) ve G (argon, 18) aynı gruptadır ama fark 18 − 10 = 8'dir, 16 değildir.
Sağlama: 8A sütunundaki üç kutu A, D ve G'dir; 2, 10 ve 18 numaralı elementler.
Cevap B.`
},
{
  id: "fen-ps-359",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bilgi yarışmasında dört element kartı çekilmiştir. Kartlarda elementlerin adı yoktur; yalnızca periyodik sistemdeki periyot ve grup bilgisi yazılıdır. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre atom numarası en küçük olan elementin sınıfı ile atom numarası en büyük olan elementin sınıfı sırasıyla aşağıdakilerin hangisinde verilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>Periyot</th><th>Grup</th></tr><tr><td>K</td><td>2</td><td>8A</td></tr><tr><td>L</td><td>3</td><td>1A</td></tr><tr><td>M</td><td>3</td><td>3A</td></tr><tr><td>N</td><td>2</td><td>7A</td></tr></table>`,
  secenekler: ["Soygaz; metal", "Ametal; yarı metal", "Metal; ametal", "Ametal; metal"],
  dogru: 3,
  hatalar: [
    "K'yi en küçük sanma: K ve N aynı periyottadır ve N, K'nin solundadır; aynı periyotta soldaki element daha küçük atom numaralıdır.",
    "Alüminyumu yarı metal sanma: M, 3. periyodun 3A grubundadır ve bor ile aynı grupta olsa da bir metaldir.",
    "En küçük ile en büyüğü karıştırma: atom numarası en küçük olan N (ametal), en büyük olan M (metal) elementidir.",
    null
  ],
  aciklama: `Atom numarası önce periyoda, sonra aynı periyotta soldan sağa doğru artar.
Adım 1: 2. periyottaki K (8A) ile N (7A) 3. periyottakilerden küçüktür. Bunların arasında N, K'nin solunda olduğu için daha küçüktür: en küçük N.
Adım 2: 3. periyottaki L (1A) ile M (3A) arasında M sağdadır: en büyük M.
Adım 3: N, 2. periyodun 7A kutusudur: flor, ametal. M, 3. periyodun 3A kutusudur: alüminyum, metal.
Sağlama: Atom numaraları N = 9, K = 10, L = 11, M = 13.
Cevap D.`
},
{
  id: "fen-ps-360",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `X ve Y elementleri periyodik sistemin aynı periyodunda yer almaktadır. Y bir metaldir ve X'in atom numarası Y'ninkinden küçüktür. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre X için aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["X bir yarı metaldir.", "X bir metaldir.", "X bir ametaldir.", "X, Y ile aynı gruptadır."],
  dogru: 1,
  hatalar: [
    "Metalin yanındaki kutuyu yarı metal sanma: yarı metaller metalin sağında, ametallere yakın bölgede yer alır; metalin solundaki element metaldir.",
    null,
    "Soldaki elementi ametal sanma: ametaller aynı periyotta metallerin sağındadır, solunda değil.",
    "Aynı periyotu aynı grup sanma: aynı satırda iki farklı kutu aynı sütunda olamaz, bu yüzden X ile Y'nin grupları farklıdır."
  ],
  aciklama: `Bir periyotta soldan sağa sınıf sırası şöyledir: metal, yarı metal, ametal, soygaz. Atom numarası da soldan sağa artar.
Adım 1: X'in atom numarası Y'ninkinden küçüktür; aynı periyotta olduğuna göre X, Y'nin solundadır.
Adım 2: Y metaldir. Metalin solunda yalnızca metaller bulunur (yarı metaller ve ametaller metallerin sağındadır).
Adım 3: Bu yüzden X kesinlikle metaldir. Aynı satırdaki iki kutu aynı sütunda olamaz; X ile Y farklı gruptadır.
Sağlama: Örneğin Y alüminyumsa X, sodyum ya da magnezyum olur; ikisi de metaldir.
Cevap B.`
},
{
  id: "fen-ps-361",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `X ve Y elementleri periyodik sistemin aynı grubunda yer almaktadır. X, 2. periyotta yer alan ve 4A, 5A, 6A ya da 7A gruplarından birinde bulunan bir ametaldir. (Harfler, elementlerin gerçek sembolleri değildir.)
I. Y'nin kimyasal özellikleri X'inkine benzerdir.
II. Y bir ametaldir.
III. Y, X ile aynı periyottadır.
**Buna göre bu yargılardan hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Aynı grubu aynı periyot sanma: aynı sütundaki iki farklı kutu farklı satırlardadır, yani farklı periyotlardadır. III kesinlikle yanlıştır.",
    "Aynı grubu aynı sınıf sanma: X karbonsa Y silisyum olabilir; silisyum yarı metaldir. II her zaman doğru olmaz.",
    "Aynı grubu aynı sınıf ve aynı periyot sanma: II kesin değildir, III ise kesinlikle yanlıştır."
  ],
  aciklama: `Aynı grupta, yani aynı düşey sütunda bulunan elementlerin kimyasal özellikleri benzerdir. Ama bu elementler farklı periyotlardadır ve sınıfları farklı olabilir.
Adım 1 (I): Aynı gruptaki elementlerin kimyasal özellikleri benzerdir. I kesinlikle doğrudur.
Adım 2 (II): X ametal olsa da Y ametal olmayabilir. Örneğin X karbon (4A, ametal) ise Y silisyum (yarı metal) olabilir. II kesin değildir.
Adım 3 (III): X, 2. periyottadır. Aynı sütundaki başka bir kutu 2. periyotta olamaz; Y, X ile aynı periyotta bulunamaz. III yanlıştır.
Adım 4: Kesinlikle doğru olan yalnızca I'dir.
Sık yapılan hata: "Aynı grup" ile "aynı sınıf" ya da "aynı periyot"u karıştırmak.
Cevap A.`
},
{
  id: "fen-ps-362",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `X, Y ve Z elementleri periyodik sistemin 2. ya da 3. periyodundan birinde, aynı satırda yer almaktadır. X o periyodun soygazıdır. Y, X'in iki kutu solundadır; Z ise X'in beş kutu solundadır. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Y bir ametaldir.", "Z bir metaldir.", "Z bir yarı metaldir.", "Y ile Z aynı gruptadır."],
  dogru: 0,
  hatalar: [
    null,
    "Periyodu bilinmeyen Z'yi metal sanma: periyot 3 ise Z alüminyumdur (metal); periyot 2 ise bordur (yarı metal). Bu yüzden Z için kesin bir söz söylenemez.",
    "Periyodu bilinmeyen Z'yi yarı metal sanma: periyot 2 ise Z bordur (yarı metal); periyot 3 ise alüminyumdur (metal). Kesin değildir.",
    "Aynı satırı aynı grup sanma: Y 6A grubunda, Z 3A grubundadır; aynı satırdaki iki kutu aynı sütunda olamaz."
  ],
  aciklama: `Soygaz, bir periyodun en sağındaki 8A kutusudur. Soldan sağa kutuların grupları 1A, 2A, 3A, 4A, 5A, 6A, 7A, 8A'dır.
Adım 1: X 8A'dadır. İki kutu solu 6A'dır: Y. Beş kutu solu 3A'dır: Z.
Adım 2: 6A grubunda 2. periyotta oksijen, 3. periyotta kükürt vardır; ikisi de ametaldir. Y kesinlikle ametaldir.
Adım 3: 3A grubunda 2. periyotta bor (yarı metal), 3. periyotta alüminyum (metal) vardır. Z hakkında kesin bir sınıf söylenemez.
Adım 4: Y ile Z farklı gruplardadır.
Sağlama: Periyot 2 ise Y oksijen, Z bor; periyot 3 ise Y kükürt, Z alüminyumdur.
Cevap A.`
},
{
  id: "fen-ps-363",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kimya sınıfında, periyodik sistemin ilk dört periyodu 18 sütunlu biçimde çizilmiş ve dört kutu X, Y, Z ve T harfleriyle işaretlenmiştir. Öğrenciler işaretli kutular için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. X ile T aynı periyottadır ve ikisi de soygazdır.
II. Y ile Z aynı gruptadır.
III. Z'nin atom numarası T'ninkinden 18 fazladır.
**Buna göre öğrencilerin yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 546 148" role="img" aria-label="Periyodik sistemin ilk dört periyodu, 18 sütunlu: X 3. periyot 17. sütun, Y 4. periyot 17. sütun, Z 4. periyot 18. sütun, T 3. periyot 18. sütun"><g stroke="currentColor" stroke-width="1.2"><rect x="40" y="28" width="28" height="28" fill="none"/><rect x="516" y="28" width="28" height="28" fill="none"/><rect x="40" y="56" width="28" height="28" fill="none"/><rect x="68" y="56" width="28" height="28" fill="none"/><rect x="376" y="56" width="28" height="28" fill="none"/><rect x="404" y="56" width="28" height="28" fill="none"/><rect x="432" y="56" width="28" height="28" fill="none"/><rect x="460" y="56" width="28" height="28" fill="none"/><rect x="488" y="56" width="28" height="28" fill="none"/><rect x="516" y="56" width="28" height="28" fill="none"/><rect x="40" y="84" width="28" height="28" fill="none"/><rect x="68" y="84" width="28" height="28" fill="none"/><rect x="376" y="84" width="28" height="28" fill="none"/><rect x="404" y="84" width="28" height="28" fill="none"/><rect x="432" y="84" width="28" height="28" fill="none"/><rect x="460" y="84" width="28" height="28" fill="none"/><rect x="488" y="84" width="28" height="28" fill="none"/><rect x="516" y="84" width="28" height="28" fill="none"/><rect x="40" y="112" width="28" height="28" fill="none"/><rect x="68" y="112" width="28" height="28" fill="none"/><rect x="96" y="112" width="28" height="28" fill="none"/><rect x="124" y="112" width="28" height="28" fill="none"/><rect x="152" y="112" width="28" height="28" fill="none"/><rect x="180" y="112" width="28" height="28" fill="none"/><rect x="208" y="112" width="28" height="28" fill="none"/><rect x="236" y="112" width="28" height="28" fill="none"/><rect x="264" y="112" width="28" height="28" fill="none"/><rect x="292" y="112" width="28" height="28" fill="none"/><rect x="320" y="112" width="28" height="28" fill="none"/><rect x="348" y="112" width="28" height="28" fill="none"/><rect x="376" y="112" width="28" height="28" fill="none"/><rect x="404" y="112" width="28" height="28" fill="none"/><rect x="432" y="112" width="28" height="28" fill="none"/><rect x="460" y="112" width="28" height="28" fill="none"/><rect x="488" y="112" width="28" height="28" fill="none"/><rect x="516" y="112" width="28" height="28" fill="none"/></g><g fill="currentColor" font-size="14"><text x="30" y="47" text-anchor="end">1</text><text x="30" y="75" text-anchor="end">2</text><text x="30" y="103" text-anchor="end">3</text><text x="30" y="131" text-anchor="end">4</text><text x="54" y="19" text-anchor="middle">1</text><text x="82" y="19" text-anchor="middle">2</text><text x="110" y="19" text-anchor="middle">3</text><text x="138" y="19" text-anchor="middle">4</text><text x="166" y="19" text-anchor="middle">5</text><text x="194" y="19" text-anchor="middle">6</text><text x="222" y="19" text-anchor="middle">7</text><text x="250" y="19" text-anchor="middle">8</text><text x="278" y="19" text-anchor="middle">9</text><text x="306" y="19" text-anchor="middle">10</text><text x="334" y="19" text-anchor="middle">11</text><text x="362" y="19" text-anchor="middle">12</text><text x="390" y="19" text-anchor="middle">13</text><text x="418" y="19" text-anchor="middle">14</text><text x="446" y="19" text-anchor="middle">15</text><text x="474" y="19" text-anchor="middle">16</text><text x="502" y="19" text-anchor="middle">17</text><text x="530" y="19" text-anchor="middle">18</text></g><text x="502" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="530" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="502" y="132" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="530" y="132" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text></svg>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "I ve III"],
  dogru: 1,
  hatalar: [
    "Yan yana olmayı aynı grup sanma: Y 17., Z 18. sütundadır; farklı gruplardadır. Ayrıca III doğrudur.",
    null,
    "X'i soygaz sanma ve yan yana kutuları aynı grup sayma: X 17. sütundadır (klor) ve soygaz değildir; Y ile Z de farklı gruptadır.",
    "I'i doğru sayma: X ile T aynı periyottadır ama X (klor) soygaz değildir. III doğrudur."
  ],
  aciklama: `18. sütun soygazların sütunudur. Aynı sütunda alt alta durmak aynı grupta olmak demektir; yan yana sütunlar farklı gruptur.
Adım 1 (I): T, 3. periyodun 18. sütunudur: argon, soygaz. X ise 17. sütundadır: klor, ametal. X soygaz değildir. I yanlıştır.
Adım 2 (II): Y 17., Z 18. sütundadır. Farklı gruplardadır. II yanlıştır.
Adım 3 (III): Z 4. periyodun son elementidir: kripton (36). T argondur (18). 36 − 18 = 18. III doğrudur.
Adım 4: Doğru olan yalnızca III'tür.
Sağlama: 4. periyotta 18 element vardır; alt alta duran iki kutunun atom numaraları arasındaki fark 4. periyotta 18'dir.
Cevap B.`
},
{
  id: "fen-ps-364",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `X elementi periyodik sistemin 2. periyodunda, 7A grubunda yer almaktadır. Y elementi X'in hemen altındaki kutuda, Z elementi ise Y'nin hemen sağındaki kutuda bulunur. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. (Harfler, elementlerin gerçek sembolleri değildir.)
I. X ile Z aynı gruptadır.
II. Y ile Z aynı periyottadır.
III. Z'nin atom numarası X'inkinden 9 fazladır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız III", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "II'yi gözden kaçırma: Z, Y'nin hemen sağındadır; yani ikisi aynı satırda, 3. periyottadır.",
    "Sağdaki kutuyu aynı grup sanma: Z, Y'nin sağındaki kutudur; X 7A, Z ise 8A grubundadır. I yanlıştır. Ayrıca II ve III doğrudur.",
    null,
    "Hepsini doğru sayma: X 7A, Z ise 8A grubundadır; yani X ile Z farklı gruplardadır."
  ],
  aciklama: `Aynı sütunda alttaki periyot, 2. ve 3. periyot arasında 8 fazla atom numaralıdır. Aynı satırda sağa gidildikçe atom numarası 1 artar.
Adım 1: X, 2. periyodun 7A kutusudur: flor (9). Y, onun altındaki kutudur: 9 + 8 = 17, klor. Z, Y'nin hemen sağındadır: 18, argon (8A).
Adım 2 (I): X 7A, Z 8A grubundadır. Aynı grupta değildir. I yanlıştır.
Adım 3 (II): Y ve Z yan yana, 3. periyottadır. II doğrudur.
Adım 4 (III): 18 − 9 = 9. III doğrudur.
Adım 5: Doğru olanlar II ve III'tür.
Cevap C.`
},
{
  id: "fen-ps-365",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Atom numarası 7 olan elementin hemen altındaki kutudaki element Y, Y'nin hemen solundaki kutudaki element ise Z'dir. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre Z için atom numarası ve sınıf aşağıdakilerin hangisinde birlikte verilmiştir?**`,
  gorsel: null,
  secenekler: ["13; metal", "14; ametal", "14; yarı metal", "15; ametal"],
  dogru: 2,
  hatalar: [
    "İki kutu sola gitme: Y'nin iki kutu solundaki element alüminyumdur (13, metal). Oysa Z, Y'nin hemen solundadır.",
    "Silisyumu ametal sanma: 14 numaralı element Z'dir ama basamak çizgisi üzerindedir; ametal değil yarı metaldir.",
    null,
    "Y'yi Z sanma: 15 numaralı fosfor, azotun hemen altındaki Y'dir; sorulan ise Y'nin hemen solundaki Z'dir."
  ],
  aciklama: `Aynı sütunda alttaki kutunun atom numarası 8 fazladır; aynı satırda soldaki kutunun atom numarası 1 azdır.
Adım 1: 7 numaralı element 2. periyodun 5A kutusundadır (azot). Hemen altındaki Y, 3. periyodun 5A kutusudur: 7 + 8 = 15, fosfor.
Adım 2: Y'nin hemen solu 4A kutusudur: 15 − 1 = 14. Z, silisyumdur.
Adım 3: Silisyum basamak çizgisi üzerindedir; yarı metaldir.
Sağlama: 3. periyotta soldan sağa sıra: 11, 12, 13, 14, 15; 14, 15'in hemen solundadır.
Cevap C.`
},
{
  id: "fen-ps-366",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bulmacada şu ipuçları verilmiştir: Z elementi, periyodik sistemin 2. periyodunda yer alan yarı metaldir. T elementi, Z'nin hemen altındaki kutudadır. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre T için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Atom numarası 13'tür ve yarı metaldir.", "Atom numarası 14'tür ve yarı metaldir.", "Atom numarası 12'dir ve metaldir.", "Atom numarası 13'tür ve metaldir."],
  dogru: 3,
  hatalar: [
    "Aynı grubu aynı sınıf sanma: T, bor ile aynı gruptadır (3A) ama alüminyumdur ve metaldir.",
    "Sağdaki kutuyu seçme: 14 numaralı silisyum, T'nin sağındaki kutudadır. T'nin hemen altındaki kutu değildir.",
    "Soldaki kutuyu seçme: 12 numaralı magnezyum T'nin solundadır; 2A grubundadır.",
    null
  ],
  aciklama: `2. periyottaki tek yarı metal bordur (3A grubu, atom numarası 5). Silisyum 3. periyottadır.
Adım 1: Z = bor (5). Z'nin hemen altındaki kutu aynı sütunda, 3. periyottadır.
Adım 2: Atom numarası 5 + 8 = 13. T = alüminyum.
Adım 3: Alüminyum basamak çizgisinin solunda kalır; metaldir.
Sağlama: 12 (magnezyum) T'nin solunda, 14 (silisyum) sağındadır.
Cevap D.`
},
{
  id: "fen-ps-367",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, periyodik sistemin ilk üç periyodunu çizip 2. ve 3. periyotlardaki 3A, 4A, 5A ve 6A gruplarının kutularını aşağıdaki gibi taramıştır. Öğretmeni, taralı bölgedeki elementlerin sınıflarına göre sayılarını sormuştur.
**Buna göre taralı bölgedeki elementlerin sınıf dağılımı aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: 2. ve 3. periyotların 3A, 4A, 5A ve 6A grupları taralı"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="246" y="82" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="296" y="82" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="346" y="82" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="246" y="132" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="296" y="132" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="346" y="132" width="50" height="50" fill="var(--vurgu2)" fill-opacity="0.45"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g></svg>`,
  secenekler: ["0 metal, 2 yarı metal, 6 ametal", "1 metal, 1 yarı metal, 6 ametal", "1 metal, 2 yarı metal, 5 ametal", "2 metal, 1 yarı metal, 5 ametal"],
  dogru: 2,
  hatalar: [
    "Alüminyumu ametal sanma: 3. periyodun 3A kutusundaki alüminyum, metaldir.",
    "Silisyumu ametal sanma: 3. periyodun 4A kutusundaki silisyum, bor gibi yarı metaldir.",
    null,
    "Boru metal sanma: 2. periyodun 3A kutusundaki bor, yarı metaldir."
  ],
  aciklama: `Taralı sekiz kutu: 2. periyotta bor, karbon, azot, oksijen; 3. periyotta alüminyum, silisyum, fosfor, kükürt.
Adım 1: Bor ve silisyum basamak çizgisi üzerindedir: 2 yarı metal.
Adım 2: Alüminyum çizginin solundadır: 1 metal.
Adım 3: Karbon, azot, oksijen, fosfor ve kükürt sağ üst bölgededir: 5 ametal.
Sağlama: 1 + 2 + 5 = 8 kutu.
Cevap C.`
},
{
  id: "fen-ps-368",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bilim şenliğinde periyodik sistemin ilk üç periyodunda dört kutu X, Y, Z ve T harfleriyle işaretlenmiştir. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: X 3. periyot 8A, Y 3. periyot 5A, Z 2. periyot 8A, T 3. periyot 1A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="471" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text><text x="121" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="321" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="471" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">X</text></svg>`,
  secenekler: ["X ile Z aynı gruptadır ve X'in atom numarası Z'ninkinden 8 fazladır.", "Y ile T aynı periyottadır ve Y'nin atom numarası T'ninkinden küçüktür.", "Z ile Y aynı periyottadır ve Z'nin atom numarası Y'ninkinden büyüktür.", "T ile X aynı gruptadır ve T'nin atom numarası X'inkinden küçüktür."],
  dogru: 0,
  hatalar: [
    null,
    "Soldan sağa artışı ters kurma: Y (5A), T'nin (1A) sağındadır; aynı periyotta sağdaki element büyük atom numaralıdır.",
    "Farklı periyotları aynı sanma: Z 2. periyotta, Y 3. periyottadır; üstelik Z'nin atom numarası Y'ninkinden küçüktür.",
    "T ile X'i aynı grupta sanma: T 1A, X 8A grubundadır; ikisi aynı satırda olduğu için aynı periyottadır."
  ],
  aciklama: `Aynı sütundaki kutular aynı gruptadır; alttaki periyodun atom numarası, 2. ve 3. periyotlar arasında 8 fazladır.
Adım 1: X (argon) ve Z (neon), 8A sütununda alt alta durur: aynı gruptadırlar. Atom numaraları 18 ve 10'dur; fark 8'dir.
Adım 2: Y ile T aynı satırdadır, ama Y sağdadır; atom numarası daha büyüktür.
Adım 3: Z 2. periyotta, Y 3. periyottadır; aynı periyotta değildir.
Adım 4: T 1A, X 8A grubundadır; aynı grupta değildir.
Sağlama: Yalnızca ilk ifadenin iki bölümü de doğrudur.
Cevap A.`
},
{
  id: "fen-ps-369",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `X ve Y elementleri periyodik sistemin 2. ya da 3. periyodunda, aynı satırda yer almaktadır. X bir ametaldir ve Y'nin atom numarası X'inkinden küçüktür. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre Y için aşağıdakilerden hangisi __söylenemez__?**`,
  gorsel: null,
  secenekler: ["Y bir metal olabilir.", "Y bir soygaz olabilir.", "Y bir yarı metal olabilir.", "Y bir ametal olabilir."],
  dogru: 1,
  hatalar: [
    "Metalin ametalin solunda bulunabileceğini görememe: periyodun sol tarafı metaldir, bu yüzden Y metal olabilir.",
    null,
    "Yarı metalin ametalin solunda olabileceğini görememe: bor ve silisyum, ametallerin hemen solundadır; Y yarı metal olabilir.",
    "Y'nin ametal olamayacağını sanma: X, ametallerin sağındaki bir kutuysa Y de ametal olabilir (karbonun sağında azot gibi)."
  ],
  aciklama: `Aynı periyotta soldan sağa sınıf sırası metal, yarı metal, ametal, soygazdır. Atom numarası da soldan sağa artar.
Adım 1: Y'nin atom numarası küçük olduğuna göre Y, X'in solundadır.
Adım 2: X ametaldir. Ametalin solunda metal, yarı metal ya da başka bir ametal bulunabilir.
Adım 3: Soygaz ise periyodun en sağındadır; hiçbir ametalin solunda olamaz. Y soygaz olamaz.
Sağlama: X oksijense Y; lityum (metal), bor (yarı metal) ya da azot (ametal) olabilir; ama hiçbiri soygaz değildir.
Cevap B.`
},
{
  id: "fen-ps-370",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Atom numarası 20 olan element, periyodik sistemin 4. periyodunun 2A grubunda yer alır. Bu elementle aynı grupta bulunan ve 2. ile 3. periyotlarda yer alan iki elementin atom numaralarının toplamı ile bu iki elementin sınıfı sorulmaktadır. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur.
**Buna göre toplam ve sınıf aşağıdakilerin hangisinde birlikte verilmiştir?**`,
  gorsel: null,
  secenekler: ["4; metal", "12; metal", "16; yarı metal", "16; metal"],
  dogru: 3,
  hatalar: [
    "Yalnızca 2. periyottaki elementi alma: 4 numaralı berilyum tek başına toplanmıştır; 3. periyottaki magnezyum (12) unutulmuştur.",
    "Yalnızca 3. periyottaki elementi alma: 12 numaralı magnezyum tek başına alınmıştır; 2. periyottaki berilyum (4) unutulmuştur.",
    "Berilyumu yarı metal sanma: 2. periyodun 2A kutusundaki element metaldir; yarı metaller bor ve silisyumdur.",
    null
  ],
  aciklama: `Aynı sütundaki kutular aynı gruptadır. 2A grubunda 2. periyottaki kutu berilyumdur, 3. periyottaki kutu magnezyumdur.
Adım 1: 2. periyodun 2A kutusunun atom numarası 2 + 2 = 4'tür (1. periyotta 2 element var); berilyum.
Adım 2: 3. periyodun 2A kutusunun atom numarası 4 + 8 = 12'dir; magnezyum.
Adım 3: Toplam 4 + 12 = 16.
Adım 4: İkisi de tablonun sol bölgesindedir; metaldir.
Sağlama: Berilyum (4), magnezyum (12) ve kalsiyum (20) 2A sütununda alt alta durur.
Cevap D.`
},
{
  id: "fen-ps-371",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kimya sınıfında periyodik sistemin ilk dört periyodu 18 sütunlu biçimde çizilmiş ve dört kutu X, Y, Z ve T harfleriyle işaretlenmiştir. Periyodik sistemin 2. ve 3. periyotlarında 8'er, 4. periyodunda 18 element bulunur. Öğrenciler işaretli kutular için şu yargıları yazmıştır: (Harfler, elementlerin gerçek sembolleri değildir.)
I. X, Y ve Z aynı gruptadır.
II. Z'nin atom numarası X'inkinden 26 fazladır.
III. T ile Y'nin kimyasal özellikleri benzerdir.
**Buna göre bu yargılardan kaç tanesi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 546 148" role="img" aria-label="Periyodik sistemin ilk dört periyodu, 18 sütunlu: X 2. periyot 17. sütun, Y 3. periyot 17. sütun, Z 4. periyot 17. sütun, T 4. periyot 18. sütun"><g stroke="currentColor" stroke-width="1.2"><rect x="40" y="28" width="28" height="28" fill="none"/><rect x="516" y="28" width="28" height="28" fill="none"/><rect x="40" y="56" width="28" height="28" fill="none"/><rect x="68" y="56" width="28" height="28" fill="none"/><rect x="376" y="56" width="28" height="28" fill="none"/><rect x="404" y="56" width="28" height="28" fill="none"/><rect x="432" y="56" width="28" height="28" fill="none"/><rect x="460" y="56" width="28" height="28" fill="none"/><rect x="488" y="56" width="28" height="28" fill="none"/><rect x="516" y="56" width="28" height="28" fill="none"/><rect x="40" y="84" width="28" height="28" fill="none"/><rect x="68" y="84" width="28" height="28" fill="none"/><rect x="376" y="84" width="28" height="28" fill="none"/><rect x="404" y="84" width="28" height="28" fill="none"/><rect x="432" y="84" width="28" height="28" fill="none"/><rect x="460" y="84" width="28" height="28" fill="none"/><rect x="488" y="84" width="28" height="28" fill="none"/><rect x="516" y="84" width="28" height="28" fill="none"/><rect x="40" y="112" width="28" height="28" fill="none"/><rect x="68" y="112" width="28" height="28" fill="none"/><rect x="96" y="112" width="28" height="28" fill="none"/><rect x="124" y="112" width="28" height="28" fill="none"/><rect x="152" y="112" width="28" height="28" fill="none"/><rect x="180" y="112" width="28" height="28" fill="none"/><rect x="208" y="112" width="28" height="28" fill="none"/><rect x="236" y="112" width="28" height="28" fill="none"/><rect x="264" y="112" width="28" height="28" fill="none"/><rect x="292" y="112" width="28" height="28" fill="none"/><rect x="320" y="112" width="28" height="28" fill="none"/><rect x="348" y="112" width="28" height="28" fill="none"/><rect x="376" y="112" width="28" height="28" fill="none"/><rect x="404" y="112" width="28" height="28" fill="none"/><rect x="432" y="112" width="28" height="28" fill="none"/><rect x="460" y="112" width="28" height="28" fill="none"/><rect x="488" y="112" width="28" height="28" fill="none"/><rect x="516" y="112" width="28" height="28" fill="none"/></g><g fill="currentColor" font-size="14"><text x="30" y="47" text-anchor="end">1</text><text x="30" y="75" text-anchor="end">2</text><text x="30" y="103" text-anchor="end">3</text><text x="30" y="131" text-anchor="end">4</text><text x="54" y="19" text-anchor="middle">1</text><text x="82" y="19" text-anchor="middle">2</text><text x="110" y="19" text-anchor="middle">3</text><text x="138" y="19" text-anchor="middle">4</text><text x="166" y="19" text-anchor="middle">5</text><text x="194" y="19" text-anchor="middle">6</text><text x="222" y="19" text-anchor="middle">7</text><text x="250" y="19" text-anchor="middle">8</text><text x="278" y="19" text-anchor="middle">9</text><text x="306" y="19" text-anchor="middle">10</text><text x="334" y="19" text-anchor="middle">11</text><text x="362" y="19" text-anchor="middle">12</text><text x="390" y="19" text-anchor="middle">13</text><text x="418" y="19" text-anchor="middle">14</text><text x="446" y="19" text-anchor="middle">15</text><text x="474" y="19" text-anchor="middle">16</text><text x="502" y="19" text-anchor="middle">17</text><text x="530" y="19" text-anchor="middle">18</text></g><text x="502" y="76" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="502" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="502" y="132" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text><text x="530" y="132" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text></svg>`,
  secenekler: ["0", "1", "2", "3"],
  dogru: 2,
  hatalar: [
    "Hiçbirini doğru bulmama: X, Y ve Z aynı sütunda olduğu için I doğrudur; atom numarası farkı da hesaplanınca II de doğru çıkar.",
    "Yargılardan birini atlama: I ve II birlikte doğrudur. Yalnızca birini doğru bulmak, diğerini gözden kaçırmaktır.",
    null,
    "Yan yana sütunları benzer sanma: T 18. sütunda, Y 17. sütundadır; farklı gruplardadır. III yanlıştır."
  ],
  aciklama: `Aynı sütundaki kutular aynı gruptadır. Benzer kimyasal özellik yalnızca aynı grupta görülür. Alt alta inerken atom numarası, inilen periyodun element sayısı kadar artar.
Adım 1 (I): X, Y ve Z, 17. sütunda alt alta durur. Aynı gruptadırlar. I doğrudur.
Adım 2 (II): X, 2. periyotta (flor, 9); Y, 3. periyotta (9 + 8 = 17, klor); Z, 4. periyottadır (17 + 18 = 35, brom). 35 − 9 = 26. II doğrudur.
Adım 3 (III): T, 4. periyotun 18. sütunudur; Y ise 17. sütundadır. Farklı gruplardadır, kimyasal özellikleri benzer değildir. III yanlıştır.
Adım 4: Doğru yargı sayısı 2'dir.
Cevap C.`
},
{
  id: "fen-ps-372",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir element kartları oyununda oyunculardan, ilk üç periyottaki işaretli kutulardan "aynı periyotta bulunan ve aynı sınıfta olan" iki kutuyu seçmeleri istenmiştir. Altı kutu A, B, C, D, E ve F harfleriyle işaretlenmiştir. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre oyunculardan birinin seçeceği doğru kutu çifti aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 520 188" role="img" aria-label="Periyodik sistemin ilk üç periyodu: A 2. periyot 1A, B 2. periyot 2A, C 3. periyot 4A, D 3. periyot 7A, E 2. periyot 6A, F 3. periyot 2A"><g stroke="currentColor" stroke-width="1.5"><rect x="96" y="32" width="50" height="50" fill="none"/><rect x="446" y="32" width="50" height="50" fill="none"/><rect x="96" y="82" width="50" height="50" fill="none"/><rect x="146" y="82" width="50" height="50" fill="none"/><rect x="196" y="82" width="50" height="50" fill="none"/><rect x="246" y="82" width="50" height="50" fill="none"/><rect x="296" y="82" width="50" height="50" fill="none"/><rect x="346" y="82" width="50" height="50" fill="none"/><rect x="396" y="82" width="50" height="50" fill="none"/><rect x="446" y="82" width="50" height="50" fill="none"/><rect x="96" y="132" width="50" height="50" fill="none"/><rect x="146" y="132" width="50" height="50" fill="none"/><rect x="196" y="132" width="50" height="50" fill="none"/><rect x="246" y="132" width="50" height="50" fill="none"/><rect x="296" y="132" width="50" height="50" fill="none"/><rect x="346" y="132" width="50" height="50" fill="none"/><rect x="396" y="132" width="50" height="50" fill="none"/><rect x="446" y="132" width="50" height="50" fill="none"/></g><g fill="currentColor" font-size="15"><text x="84" y="62" text-anchor="end">1. periyot</text><text x="84" y="112" text-anchor="end">2. periyot</text><text x="84" y="162" text-anchor="end">3. periyot</text><text x="121" y="22" text-anchor="middle">1A</text><text x="171" y="22" text-anchor="middle">2A</text><text x="221" y="22" text-anchor="middle">3A</text><text x="271" y="22" text-anchor="middle">4A</text><text x="321" y="22" text-anchor="middle">5A</text><text x="371" y="22" text-anchor="middle">6A</text><text x="421" y="22" text-anchor="middle">7A</text><text x="471" y="22" text-anchor="middle">8A</text></g><text x="121" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="171" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">B</text><text x="371" y="114" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">E</text><text x="171" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">F</text><text x="271" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="421" y="164" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">D</text></svg>`,
  secenekler: ["A ve F", "A ve B", "C ve D", "D ve E"],
  dogru: 1,
  hatalar: [
    "Aynı sınıfı aynı periyot sanma: A (lityum) 2. periyotta, F (magnezyum) 3. periyottadır; ikisi de metaldir ama farklı satırlardadır.",
    null,
    "Aynı periyodu aynı sınıf sanma: C (silisyum) yarı metal, D (klor) ametaldir; aynı satırdadırlar ama sınıfları farklıdır.",
    "Aynı sınıfı aynı periyot sanma: D (klor) 3. periyotta, E (oksijen) 2. periyottadır; ikisi de ametaldir ama farklı satırlardadır."
  ],
  aciklama: `İki koşul birlikte aranır: aynı satır (aynı periyot) ve aynı sınıf (kutunun bölgesi).
Adım 1: A (lityum) ve B (berilyum) 2. periyotta yan yana durur ve ikisi de metaldir. İki koşul da sağlanır.
Adım 2: A ile F ikisi de metaldir ama A 2., F 3. periyottadır.
Adım 3: C ile D aynı periyottadır ama C (silisyum) yarı metal, D (klor) ametaldir.
Adım 4: D ile E ikisi de ametaldir ama D 3., E 2. periyottadır.
Sağlama: Seçeneklerin üçü koşullardan yalnızca birini sağlar.
Cevap B.`
},
{
  id: "fen-ps-373",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `X elementi periyodik sistemin 3. periyodunun 8A grubunda yer almaktadır. Y elementi X ile aynı periyotta ve X'in iki kutu solundadır. Z elementi ise Y'nin hemen üstündeki kutuda bulunur. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre Z için atom numarası ve sınıf aşağıdakilerin hangisinde birlikte verilmiştir?**`,
  gorsel: null,
  secenekler: ["8; ametal", "9; ametal", "10; soygaz", "16; ametal"],
  dogru: 0,
  hatalar: [
    null,
    "Bir kutu eksik sola gitme: Y yerine 7A kutusundaki klor alınmış, onun üstündeki flor (9) seçilmiştir. Oysa Y, X'in iki kutu solundaki 6A kutusudur.",
    "X'in üstünü Z sanma: 10 numaralı neon, X'in hemen üstündeki soygazdır; oysa Z, Y'nin üstündedir.",
    "Y'yi Z sanma: 16 numaralı kükürt Y'dir; Z onun üstündeki kutudadır."
  ],
  aciklama: `8A, 3. periyodun son kutusudur (argon, 18). İki kutu sola gidilirse 6A grubuna gelinir.
Adım 1: Y, 3. periyodun 6A kutusudur: kükürt (atom numarası 16).
Adım 2: Z, Y'nin tam üstünde, 2. periyodun 6A kutusundadır. Atom numarası 16 − 8 = 8: oksijen.
Adım 3: Oksijen tablonun sağ üst bölgesindedir; ametaldir.
Sağlama: 2. periyotta 6A kutusu 2 + 6 = 8'dir.
Cevap A.`
},
{
  id: "fen-ps-374",
  kazanim: "F.8.4.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `X elementi periyodik sistemin 3. periyodunda yer alan bir metaldir. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. (X gerçek bir element sembolü değildir.)
**Buna göre X için aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["X, 1A, 2A ya da 3A grubundan birindedir.", "X, 1A, 2A ya da 4A grubundan birindedir.", "X, 2A, 3A ya da 4A grubundan birindedir.", "X, 1A, 3A ya da 4A grubundan birindedir."],
  dogru: 0,
  hatalar: [
    null,
    "Alüminyumu unutma: alüminyum 3A grubunda bir metaldir; X alüminyum olabilir. Ayrıca 4A grubunda metal yoktur.",
    "Sodyumu unutma: 3. periyodun ilk elementi sodyum 1A grubunda bir metaldir; X sodyum olabilir. Ayrıca 4A grubunda metal yoktur.",
    "Magnezyumu unutma: magnezyum 2A grubunda bir metaldir; X magnezyum olabilir. Ayrıca 4A grubunda metal yoktur."
  ],
  aciklama: `3. periyotta 11 numaralı elementle başlanır. Metaller bu periyodun sol tarafındadır: sodyum (11, 1A), magnezyum (12, 2A) ve alüminyum (13, 3A). Silisyum (14, 4A) yarı metaldir.
Adım 1: X'in alabileceği gruplar 1A, 2A ve 3A'dır. "1A, 2A ya da 3A" kesinlikle doğrudur.
Adım 2: Seçeneklerden biri sodyumu (1A), biri magnezyumu (2A), biri de alüminyumu (3A) dışarıda bırakır; üçünde de 4A vardır ve 3. periyotta 4A grubundaki silisyum metal değildir.
Sağlama: 3. periyotta 1A, 2A ve 3A kutuları metaldir; 4A kutusu yarı metaldir.
Cevap A.`
},
{
  id: "fen-ps-375",
  kazanim: "F.8.4.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kimya sınıfında periyodik sistemin ilk dört periyodu 18 sütunlu biçimde çizilmiş ve dört kutu X, Y, Z ve T harfleriyle işaretlenmiştir. Periyodik sistemin 1. periyodunda 2, 2. ve 3. periyotlarında 8'er element bulunur. (Harfler, elementlerin gerçek sembolleri değildir.)
**Buna göre aşağıdakilerden hangisi __yanlıştır__?**`,
  gorsel: `<svg viewBox="0 0 546 148" role="img" aria-label="Periyodik sistemin ilk dört periyodu, 18 sütunlu: X 3. periyot 13. sütun, Y 3. periyot 14. sütun, Z 2. periyot 16. sütun, T 3. periyot 16. sütun"><g stroke="currentColor" stroke-width="1.2"><rect x="40" y="28" width="28" height="28" fill="none"/><rect x="516" y="28" width="28" height="28" fill="none"/><rect x="40" y="56" width="28" height="28" fill="none"/><rect x="68" y="56" width="28" height="28" fill="none"/><rect x="376" y="56" width="28" height="28" fill="none"/><rect x="404" y="56" width="28" height="28" fill="none"/><rect x="432" y="56" width="28" height="28" fill="none"/><rect x="460" y="56" width="28" height="28" fill="none"/><rect x="488" y="56" width="28" height="28" fill="none"/><rect x="516" y="56" width="28" height="28" fill="none"/><rect x="40" y="84" width="28" height="28" fill="none"/><rect x="68" y="84" width="28" height="28" fill="none"/><rect x="376" y="84" width="28" height="28" fill="none"/><rect x="404" y="84" width="28" height="28" fill="none"/><rect x="432" y="84" width="28" height="28" fill="none"/><rect x="460" y="84" width="28" height="28" fill="none"/><rect x="488" y="84" width="28" height="28" fill="none"/><rect x="516" y="84" width="28" height="28" fill="none"/><rect x="40" y="112" width="28" height="28" fill="none"/><rect x="68" y="112" width="28" height="28" fill="none"/><rect x="96" y="112" width="28" height="28" fill="none"/><rect x="124" y="112" width="28" height="28" fill="none"/><rect x="152" y="112" width="28" height="28" fill="none"/><rect x="180" y="112" width="28" height="28" fill="none"/><rect x="208" y="112" width="28" height="28" fill="none"/><rect x="236" y="112" width="28" height="28" fill="none"/><rect x="264" y="112" width="28" height="28" fill="none"/><rect x="292" y="112" width="28" height="28" fill="none"/><rect x="320" y="112" width="28" height="28" fill="none"/><rect x="348" y="112" width="28" height="28" fill="none"/><rect x="376" y="112" width="28" height="28" fill="none"/><rect x="404" y="112" width="28" height="28" fill="none"/><rect x="432" y="112" width="28" height="28" fill="none"/><rect x="460" y="112" width="28" height="28" fill="none"/><rect x="488" y="112" width="28" height="28" fill="none"/><rect x="516" y="112" width="28" height="28" fill="none"/></g><g fill="currentColor" font-size="14"><text x="30" y="47" text-anchor="end">1</text><text x="30" y="75" text-anchor="end">2</text><text x="30" y="103" text-anchor="end">3</text><text x="30" y="131" text-anchor="end">4</text><text x="54" y="19" text-anchor="middle">1</text><text x="82" y="19" text-anchor="middle">2</text><text x="110" y="19" text-anchor="middle">3</text><text x="138" y="19" text-anchor="middle">4</text><text x="166" y="19" text-anchor="middle">5</text><text x="194" y="19" text-anchor="middle">6</text><text x="222" y="19" text-anchor="middle">7</text><text x="250" y="19" text-anchor="middle">8</text><text x="278" y="19" text-anchor="middle">9</text><text x="306" y="19" text-anchor="middle">10</text><text x="334" y="19" text-anchor="middle">11</text><text x="362" y="19" text-anchor="middle">12</text><text x="390" y="19" text-anchor="middle">13</text><text x="418" y="19" text-anchor="middle">14</text><text x="446" y="19" text-anchor="middle">15</text><text x="474" y="19" text-anchor="middle">16</text><text x="502" y="19" text-anchor="middle">17</text><text x="530" y="19" text-anchor="middle">18</text></g><text x="390" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">X</text><text x="418" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Y</text><text x="474" y="76" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Z</text><text x="474" y="104" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text></svg>`,
  secenekler: ["X ile Y aynı periyottadır ve Y'nin atom numarası X'inkinden büyüktür.", "Z ile T aynı gruptadır ve T'nin atom numarası Z'ninkinden 8 fazladır.", "Y ile T farklı gruplardadır ve ikisi de 3. periyottadır.", "X ile Z aynı periyottadır ve Z'nin atom numarası X'inkinden büyüktür."],
  dogru: 3,
  hatalar: [
    "Yan yana kutuların farkını görememe: X ile Y aynı satırda, yani 3. periyottadır; sağdaki Y'nin atom numarası büyüktür (13 ve 14). Bu ifade doğrudur.",
    "Aynı gruptaki alt alta kutuların farkını yanlış bilme: Z (oksijen, 8) ile T (kükürt, 16) 16. sütunda alt alta durur; fark 8'dir. Bu ifade doğrudur.",
    "Aynı satırı aynı grup sanma: Y 14., T 16. sütundadır; farklı gruptadırlar ve ikisi de 3. periyottadır. Bu ifade doğrudur.",
    null
  ],
  aciklama: `Aynı sütundaki kutular aynı gruptadır; aynı satırdaki kutular aynı periyottadır. Aynı satırda sağdaki kutunun atom numarası büyüktür; 2. ve 3. periyot arasında alt alta duran kutuların farkı 8'dir.
Adım 1: X (alüminyum, 13) ve Y (silisyum, 14) 3. periyotta yan yana durur; Y sağdadır. Bu ifade doğrudur.
Adım 2: Z (oksijen, 8) ve T (kükürt, 16), 16. sütunda alt alta durur; aynı gruptadırlar ve fark 16 − 8 = 8'dir. Bu ifade doğrudur.
Adım 3: Y 14., T 16. sütundadır; farklı gruplardadır. İkisi de 3. periyottadır. Bu ifade doğrudur.
Adım 4: Z, 2. periyottadır; X ise 3. periyottadır. Aynı periyotta değildirler. Z sağda göründüğü için atom numarası büyük sanılabilir ama Z'nin atom numarası 8, X'inki 13'tür. Bu ifade yanlıştır.
Sık yapılan hata: Sütunda sağda olan kutuyu, satırı hesaba katmadan "daha büyük" saymak. Önce periyoda bak.
Cevap D.`
}
);
