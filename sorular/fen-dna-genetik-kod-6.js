// Fen Bilimleri — DNA ve Genetik Kod | Kademe 3 (LGS Ayarı) YEDEĞİ: fen-dn-326…375 (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["dna-genetik-kod"] = window.LGS_BANK["dna-genetik-kod"] || []).push(
{
  id: "fen-dn-326",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bölünmeye hazırlanmayan, yani DNA'sı eşlenmemiş bir insan vücut hücresinin çekirdeğinde K: nükleotidler, L: genler, M: DNA molekülleri, N: kromozomlar bulunmaktadır. Her kromozomun, tek bir DNA molekülünün proteinlerle birlikte paketlenmesiyle oluştuğu kabul edilecektir.
**Buna göre bu dört yapının hücredeki sayıları çoktan aza doğru aşağıdakilerin hangisinde doğru sıralanmıştır?**`,
  gorsel: null,
  secenekler: [
    "L > K > M = N",
    "K > M > L > N",
    "K > L > M = N",
    "K > L > N > M"
  ],
  dogru: 2,
  hatalar: [
    "Geni nükleotidden çok sanma: bir gen çok sayıda nükleotidden oluşur, bu yüzden nükleotid sayısı gen sayısından fazladır.",
    "DNA molekülü sayısını gen sayısından fazla sanma: bir DNA molekülü çok sayıda gen taşır, bu yüzden gen sayısı DNA molekülü sayısından fazladır.",
    null,
    "DNA ile kromozom sayısını farklı sanma: her kromozom tek bir DNA molekülünün paketlenmesiyle oluştuğu için DNA molekülü sayısı kromozom sayısına eşittir."
  ],
  aciklama: `Büyük bir yapı, çok sayıda küçük yapıdan oluşur. Bu yüzden yapı küçüldükçe hücredeki sayısı artar.
Adım 1: Nükleotid, DNA'nın yapı birimidir. Bir gen çok sayıda nükleotidden oluştuğu için nükleotid sayısı gen sayısından fazladır (K > L).
Adım 2: Bir DNA molekülü çok sayıda gen taşır. Bu yüzden gen sayısı DNA molekülü sayısından fazladır (L > M).
Adım 3: Her kromozom tek bir DNA molekülünün paketlenmesiyle oluştuğu için DNA molekülü sayısı kromozom sayısına eşittir (M = N).
Adım 4: Sayılar çoktan aza K > L > M = N biçiminde sıralanır.
Sağlama: Sayısı en fazla olan yapı en küçük yapıdır (nükleotid); DNA ve kromozom ise sayıca eşittir.
Sık yapılan hata: Boyut sıralamasıyla sayı sıralamasını karıştırmak. Büyüklükte öndeki yapı, sayıda sondadır.
Cevap C.`
},
{
  id: "fen-dn-327",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, DNA modelinin dört basamaklı bir bölümünü görseldeki gibi çizmiştir. Basamaklar yukarıdan aşağıya doğru numaralanmıştır.
Buna göre;
I. Modelde eşleşme kuralına uymayan tek basamak 3. basamaktır.
II. 3. basamaktaki adenin yerine guanin yazılırsa model DNA'nın yapısına uygun olur.
III. 1. ve 4. basamaklarda adenin farklı zincirlerde bulunduğu için bu iki basamak da kurala uymaz.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 300 230" role="img" aria-label="Dört basamaklı DNA modeli bölümü"><text x="60" y="22" font-size="15" text-anchor="middle" fill="currentColor">Üst zincir</text><text x="190" y="22" font-size="15" text-anchor="middle" fill="currentColor">Alt zincir</text><line x1="40" y1="34" x2="40" y2="220" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="210" y1="34" x2="210" y2="220" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="78" y1="58" x2="172" y2="58" stroke="currentColor" stroke-width="2"/><rect x="46" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="188" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="28" y="63" font-size="15" text-anchor="end" fill="currentColor">1</text><line x1="78" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="2"/><rect x="46" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="188" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="28" y="109" font-size="15" text-anchor="end" fill="currentColor">2</text><line x1="78" y1="150" x2="172" y2="150" stroke="currentColor" stroke-width="2"/><rect x="46" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="188" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="155" font-size="15" text-anchor="end" fill="currentColor">3</text><line x1="78" y1="196" x2="172" y2="196" stroke="currentColor" stroke-width="2"/><rect x="46" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="188" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="201" font-size="15" text-anchor="end" fill="currentColor">4</text></svg>`,
  secenekler: [
    "I ve II",
    "Yalnız I",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II. yargıyı atlama: sitozinin eşi guanindir; 3. basamaktaki adenin yerine guanin yazılırsa C – G çifti oluşur ve basamak kurala uyar.",
    "I. yargıyı atlayıp III'ü doğru sayma: A – T ve T – A çiftleri aynı kurala uyar; çiftin hangi zincirde durduğu önemli değildir.",
    "III. yargıyı da doğru sayma: 1. basamakta A – T, 4. basamakta T – A bulunur; ikisi de eşleşme kuralına uygundur."
  ],
  aciklama: `DNA'da karşılıklı bazlar kurala göre eşleşir: adenin timinle, guanin sitozinle.
Adım 1: Basamakları tek tek denetle. 1. basamak A – T, 2. basamak G – C, 4. basamak T – A: üçü de kurala uygundur. 3. basamak C – A: sitozinin eşi adenin değil guanindir. Yalnızca 3. basamak kurala aykırıdır. I doğrudur.
Adım 2: II. yargıyı incele. 3. basamakta üstte sitozin var. Alttaki adenin yerine guanin yazılırsa C – G çifti oluşur ve model kurala uyar. II doğrudur.
Adım 3: III. yargıyı incele. Adeninin hangi zincirde durduğu önemli değildir: A – T de T – A da aynı kurala uyar. Bu iki basamak hatalı değildir. III yanlıştır.
Sağlama: Düzeltmeden sonra dört basamak A – T, G – C, C – G, T – A olur; hepsi kurala uyar.
Cevap A.`
},
{
  id: "fen-dn-328",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırmacı, hücrede hazır bulunan nükleotidler arasında sitozin nükleotidi bulunmayan varsayımsal bir hücre tasarlamıştır. Bu hücrede adenin, timin ve guanin nükleotidleri bol miktarda vardır. Hücre bölünmeye hazırlanırken DNA'nın bir bölümünde iki zincir ayrılmış ve eski zincirlerden biri kalıp olarak kullanılmaya başlamıştır. Kalıp olan zincirin bazları şöyledir:
Eski zincir: A – G – C – T – G – T
**Buna göre bu zincirin karşısında yeni zincirin kurulmasıyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "A bazlarının karşısı boş kalır, diğer basamaklar tamamlanır.",
    "C bazlarının karşısı boş kalır, diğer basamaklar tamamlanır.",
    "Yeni zincirin bütün basamakları tamamlanır.",
    "G bazlarının karşısı boş kalır, diğer basamaklar tamamlanır."
  ],
  dogru: 3,
  hatalar: [
    "Eşleşmeyi yanlış kurma: adeninin karşısına timin gelir ve timin nükleotidi bol bulunur; bu basamaklar tamamlanır.",
    "Kalıptaki baz ile karşısına gelecek nükleotidi karıştırma: C bazının karşısına guanin nükleotidi gelir, o da ortamda vardır.",
    "Eksik nükleotidi hesaba katmama: guaninin karşısına gelmesi gereken sitozin nükleotidi hücrede bulunmadığı için bazı basamaklar tamamlanamaz.",
    null
  ],
  aciklama: `Eşlenmede kalıp zincirin her bazının karşısına eşi olan baz gelir: A – T, G – C. Karşıya gelecek nükleotid hazır bulunmuyorsa o basamak boş kalır.
Adım 1: Kalıbın karşısına gelecek yeni zinciri yaz: A → T, G → C, C → G, T → A, G → C, T → A. Yeni zincir T – C – G – A – C – A olmalıdır.
Adım 2: Hücrede sitozin nükleotidi yok. Yeni zincirde sitozinin gerekli olduğu basamakları bul: 2. ve 5. basamaklar.
Adım 3: Bu basamaklar, kalıpta guaninin bulunduğu basamaklardır. Çünkü guaninin eşi sitozindir.
Adım 4: Timin, guanin ve adenin nükleotidleri bol olduğu için diğer basamaklar tamamlanır.
Sık yapılan hata: Eksik olan nükleotid (sitozin) ile kalıptaki bazı (C) karıştırmak. Kalıpta C varsa karşısına gelecek nükleotid guanindir ve o vardır.
Cevap D.`
},
{
  id: "fen-dn-329",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, hücrede bulunan dört yapıyı K, L, M ve N olarak adlandırıp neyden oluştuklarını tabloya yazmıştır.
**Buna göre K, L, M ve N yapıları sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Yapı</th><th>Neyden oluşur?</th></tr><tr><td>K</td><td>Fosfat, şeker ve organik baz</td></tr><tr><td>L</td><td>İki nükleotid zinciri</td></tr><tr><td>M</td><td>DNA ve proteinler</td></tr><tr><td>N</td><td>Bir özelliği belirleyen nükleotid dizisi</td></tr></table>`,
  secenekler: [
    "Gen – DNA – Kromozom – Nükleotid",
    "Nükleotid – DNA – Kromozom – Gen",
    "Nükleotid – Kromozom – DNA – Gen",
    "DNA – Nükleotid – Gen – Kromozom"
  ],
  dogru: 1,
  hatalar: [
    "Kutuları ters okuma: fosfat, şeker ve organik bazdan oluşan yapı genin değil, nükleotidin yapısıdır.",
    null,
    "DNA ile kromozomu karıştırma: iki nükleotid zincirinden oluşan DNA'dır; DNA ve proteinlerden oluşan ise kromozomdur.",
    "Dört yapıyı da karıştırma: fosfat, şeker ve organik bazdan oluşan DNA değil nükleotiddir; bir özelliği belirleyen dizi kromozom değil gendir."
  ],
  aciklama: `Her yapının "neyden oluştuğu" onu tanıtır.
Adım 1: K, fosfat, şeker ve organik bazdan oluşuyor. Bu üç kısım bir nükleotidi oluşturur. K: nükleotid.
Adım 2: L, iki nükleotid zincirinden oluşuyor. Kalıtsal bilgiyi taşıyan bu molekül DNA'dır. L: DNA.
Adım 3: M, DNA ve proteinlerden oluşuyor. DNA'nın proteinlerle birlikte sıkıca sarılıp paketlenmiş hâli kromozomdur. M: kromozom.
Adım 4: N, bir özelliği belirleyen nükleotid dizisidir. Bu, DNA'nın bir bölümü olan gendir. N: gen.
Sağlama: Dört yapıyı küçükten büyüğe dizersen nükleotid – gen – DNA – kromozom olur; tablodaki tanımlar bu sırayla çelişmiyor.
Cevap B.`
},
{
  id: "fen-dn-330",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ansiklopedide dört canlı türünün vücut hücrelerindeki kromozom sayıları tablodaki gibi verilmiştir. Bir öğrenci tabloya bakarak çıkarımlar yapmaktadır.
Buna göre;
I. Kromozom sayıları aynı olan canlıların DNA'sındaki baz dizilimi de aynıdır.
II. Kromozom sayısı, bir canlının ne kadar gelişmiş olduğunu göstermez.
III. Bir kedinin deri hücresindeki kromozom sayısı, aynı kedinin kas hücresindeki kromozom sayısına eşittir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Canlı</th><th>Kromozom sayısı</th></tr><tr><td>Kedi</td><td>38</td></tr><tr><td>Aslan</td><td>38</td></tr><tr><td>Köpek</td><td>78</td></tr><tr><td>Tavuk</td><td>78</td></tr></table>`,
  secenekler: [
    "Yalnız II",
    "II ve III",
    "I ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "III. yargıyı atlama: bir canlının bütün vücut hücreleri tek hücrenin art arda bölünmesiyle oluştuğu için kromozom sayıları aynıdır.",
    null,
    "I'i doğru sayıp II'yi atlama: köpek ile tavuğun sayısı eşittir ama bu DNA dizilimlerinin aynı olduğunu göstermez; sayı eşitliği gelişmişliği de belirlemez.",
    "I. yargıyı da doğru sayma: kromozom sayısının eşit olması baz dizilimlerinin aynı olduğu anlamına gelmez."
  ],
  aciklama: `Kromozom sayısı türe özgüdür; ama bu sayı tek başına DNA'nın aynı olduğunu ya da canlının gelişmişliğini göstermez.
Adım 1: I. yargıyı incele. Kedi ile aslanın kromozom sayısı 38, köpek ile tavuğun 78'dir. Sayıları eşit olan canlılar farklı türlerdir; DNA'larındaki baz dizilimi farklıdır. Karşılaştırmada bakılacak veri kromozom sayısı değil, baz dizilimidir. I yanlıştır.
Adım 2: II. yargıyı incele. Tavukta köpekteki kadar (78) kromozom vardır; kedide ise bunun yaklaşık yarısı kadar. Bu sayılar bir canlının ötekinden daha gelişmiş olduğunu göstermez; kromozom sayısı gelişmişlik ölçütü değildir. II doğrudur.
Adım 3: III. yargıyı incele. Bir canlının bütün vücut hücreleri tek bir hücrenin art arda bölünmesiyle oluşur ve aynı sayıda kromozom taşır. III doğrudur.
Sık yapılan hata: "Sayı aynıysa DNA da aynıdır" düşüncesi. Aynı sayıda kromozom taşıyan iki türün DNA'sındaki baz sırası farklıdır.
Cevap B.`
},
{
  id: "fen-dn-331",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırmacı, bir DNA bölümünün dört basamağını incelemiştir. Her basamakta bir baz 1. zincirde, bir baz 2. zincirde bulunmaktadır. Araştırmacı, her basamak için yalnızca tek bir zincirdeki bazı belirleyebilmiş ve bunları tabloya yazmıştır. Bölümün iki zinciri eşleşme kuralına uygundur.
**Buna göre bu bölümün 1. zincirinin baz sırası, 1. basamaktan 4. basamağa doğru aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Basamak</th><th>Belirlenen baz</th><th>Bazın bulunduğu zincir</th></tr><tr><td>1</td><td>Guanin</td><td>1. zincir</td></tr><tr><td>2</td><td>Adenin</td><td>2. zincir</td></tr><tr><td>3</td><td>Sitozin</td><td>1. zincir</td></tr><tr><td>4</td><td>Sitozin</td><td>2. zincir</td></tr></table>`,
  secenekler: [
    "G – A – C – C",
    "C – A – G – C",
    "C – T – G – G",
    "G – T – C – G"
  ],
  dogru: 3,
  hatalar: [
    "Tablodaki bazları olduğu gibi yazma: 2. zincirde belirlenen adenin ve sitozinin karşısındaki 1. zincir bazları timin ve guanindir.",
    "Zincirleri karıştırma: bu dizilim 1. zincirin değil, 2. zincirin baz sırasıdır.",
    "1. zincirin bilinen bazlarını da eşiyle değiştirme: 1. zincirde belirlenen guanin ve sitozin olduğu gibi kalır; yalnızca 2. zincirde belirlenenlerin eşi yazılır.",
    null
  ],
  aciklama: `Eşleşme kuralı gereği her basamakta iki zincirin bazları birbirinin eşidir: adenin – timin, guanin – sitozin. Hangi zincirde hangi bazın bilindiğine dikkat etmek gerekir.
Adım 1: 1. basamakta 1. zincirdeki baz biliniyor: guanin. Bu baz, 1. zincirin 1. bazıdır.
Adım 2: 2. basamakta bilinen baz 2. zincirdeki adenindir. 1. zincirdeki karşılığı timindir.
Adım 3: 3. basamakta bilinen baz 1. zincirdeki sitozindir. Bu baz 1. zincirin 3. bazıdır.
Adım 4: 4. basamakta bilinen baz 2. zincirdeki sitozindir. 1. zincirdeki karşılığı guanindir.
Adım 5: 1. zincir G – T – C – G olur.
Sağlama: 2. zincir C – A – G – C olur; basamaklarda G – C, T – A, C – G ve G – C çiftleri oluşur, hepsi kurala uyar.
Sık yapılan hata: Bazın hangi zincirde bulunduğuna bakmadan tablodaki harfleri sırayla yazmak.
Cevap D.`
},
{
  id: "fen-dn-332",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Görselde, bir DNA zincirinin üç nükleotidi gösterilmiştir. Fosfat daire, şeker beşgen, organik baz ise dikdörtgenle çizilmiştir.
Buna göre;
I. Zincirdeki şekerlerin sayısı, organik bazların sayısına eşittir.
II. Fosfatlar, organik bazlara doğrudan bağlanmıştır.
III. Zincirin baz dizilimi A – G – T olduğundan, karşı zincir yalnızca A, G ve T bazlarından oluşur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 480 220" role="img" aria-label="Üç nükleotidden oluşan bir DNA zinciri bölümü"><line x1="24" y1="62" x2="456" y2="62" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="62" cy="62" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><polygon points="124.0,40.0 144.9,55.2 136.9,79.8 111.1,79.8 103.1,55.2" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><line x1="124" y1="84" x2="124" y2="108" stroke="currentColor" stroke-width="2"/><rect x="104" y="108" width="40" height="34" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="124" y="132" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><circle cx="202" cy="62" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><polygon points="264.0,40.0 284.9,55.2 276.9,79.8 251.1,79.8 243.1,55.2" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><line x1="264" y1="84" x2="264" y2="108" stroke="currentColor" stroke-width="2"/><rect x="244" y="108" width="40" height="34" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="264" y="132" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><circle cx="342" cy="62" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><polygon points="404.0,40.0 424.9,55.2 416.9,79.8 391.1,79.8 383.1,55.2" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><line x1="404" y1="84" x2="404" y2="108" stroke="currentColor" stroke-width="2"/><rect x="384" y="108" width="40" height="34" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="404" y="132" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><circle cx="52" cy="196" r="12" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="70" y="201" font-size="15" text-anchor="start" fill="currentColor">fosfat</text><polygon points="172.0,181.0 186.3,191.4 180.8,208.1 163.2,208.1 157.7,191.4" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="192" y="201" font-size="15" text-anchor="start" fill="currentColor">şeker</text><rect x="290" y="182" width="28" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="326" y="201" font-size="15" text-anchor="start" fill="currentColor">organik baz</text></svg>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "I'i atlayıp II'yi doğru sayma: şekilde bazlar yalnızca şekere bağlıdır; fosfat ile organik baz birbirine doğrudan bağlanmaz.",
    "III. yargıyı doğru sayma: A'nın karşısına T, G'nin karşısına C, T'nin karşısına A gelir; karşı zincir T – C – A olur ve sitozin de bulunur.",
    "II ve III'ü doğru sayma: fosfat ile baz arasında doğrudan bağ yoktur ve karşı zincirde sitozin de bulunur."
  ],
  aciklama: `Bir nükleotid fosfat, şeker ve organik bazdan oluşur. Şeker ortadadır; hem fosfat hem organik baz şekere bağlanır.
Adım 1: I. yargıyı incele. Her nükleotidde bir şeker ve bir organik baz bulunur. Üç nükleotidde üç şeker, üç baz vardır. I doğrudur.
Adım 2: II. yargıyı incele. Şekilde her fosfat şekere bağlıdır, organik bazlar ise yalnızca şekerden aşağı uzanır. Fosfat ile baz arasında doğrudan bağ yoktur. II yanlıştır.
Adım 3: III. yargıyı incele. Zincir A – G – T ise karşı zincir T – C – A olur. Karşı zincirde sitozin de vardır; "yalnızca A, G ve T" ifadesi yanlıştır.
Sağlama: Karşı zincirde de aynı sayıda baz bulunur ama çeşitleri eşleşme kuralına göre belirlenir.
Cevap A.`
},
{
  id: "fen-dn-333",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim fuarında dört öğrenci, DNA'nın yapısını gösteren birer model hazırlamıştır. Modeller görselde K, L, M ve N ile gösterilmiştir. Modellerde kenarlar fosfat ve şeker zincirini, kutular organik bazları temsil etmektedir.
**Buna göre bu modellerden hangisi DNA'nın yapısına uygun biçimde hazırlanmıştır?**`,
  gorsel: `<svg viewBox="0 0 520 240" role="img" aria-label="K, L, M ve N ile gösterilen dört DNA modeli"><line x1="32" y1="24" x2="32" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="32" y1="52" x2="50" y2="52" stroke="currentColor" stroke-width="2"/><rect x="50" y="38" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="65" y="58" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><line x1="32" y1="92" x2="50" y2="92" stroke="currentColor" stroke-width="2"/><rect x="50" y="78" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="65" y="98" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><line x1="32" y1="132" x2="50" y2="132" stroke="currentColor" stroke-width="2"/><rect x="50" y="118" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="65" y="138" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><line x1="32" y1="172" x2="50" y2="172" stroke="currentColor" stroke-width="2"/><rect x="50" y="158" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="65" y="178" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="70" y="226" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">K</text><line x1="162" y1="24" x2="162" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="238" y1="24" x2="238" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="196" y1="52" x2="204" y2="52" stroke="currentColor" stroke-width="2"/><rect x="166" y="38" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="181" y="58" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><rect x="208" y="38" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="223" y="58" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><line x1="196" y1="92" x2="204" y2="92" stroke="currentColor" stroke-width="2"/><rect x="166" y="78" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="181" y="98" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><rect x="208" y="78" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="223" y="98" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><line x1="196" y1="132" x2="204" y2="132" stroke="currentColor" stroke-width="2"/><rect x="166" y="118" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="181" y="138" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><rect x="208" y="118" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="223" y="138" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><line x1="196" y1="172" x2="204" y2="172" stroke="currentColor" stroke-width="2"/><rect x="166" y="158" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="181" y="178" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><rect x="208" y="158" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="223" y="178" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="200" y="226" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">L</text><line x1="292" y1="24" x2="292" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="368" y1="24" x2="368" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="326" y1="52" x2="334" y2="52" stroke="currentColor" stroke-width="2"/><rect x="296" y="38" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="311" y="58" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><rect x="338" y="38" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="353" y="58" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><line x1="326" y1="92" x2="334" y2="92" stroke="currentColor" stroke-width="2"/><rect x="296" y="78" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="311" y="98" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><rect x="338" y="78" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="353" y="98" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><line x1="326" y1="132" x2="334" y2="132" stroke="currentColor" stroke-width="2"/><rect x="296" y="118" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="311" y="138" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><rect x="338" y="118" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="353" y="138" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><line x1="326" y1="172" x2="334" y2="172" stroke="currentColor" stroke-width="2"/><rect x="296" y="158" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="311" y="178" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><rect x="338" y="158" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="353" y="178" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="330" y="226" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">M</text><line x1="422" y1="24" x2="422" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="498" y1="24" x2="498" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="456" y1="52" x2="464" y2="52" stroke="currentColor" stroke-width="2"/><rect x="426" y="38" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="441" y="58" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><rect x="468" y="38" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="483" y="58" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><line x1="456" y1="92" x2="464" y2="92" stroke="currentColor" stroke-width="2"/><rect x="426" y="78" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="441" y="98" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><rect x="468" y="78" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="483" y="98" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><line x1="456" y1="132" x2="464" y2="132" stroke="currentColor" stroke-width="2"/><rect x="426" y="118" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="441" y="138" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><rect x="468" y="118" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="483" y="138" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><line x1="456" y1="172" x2="464" y2="172" stroke="currentColor" stroke-width="2"/><rect x="426" y="158" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="441" y="178" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><rect x="468" y="158" width="30" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="483" y="178" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="460" y="226" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">N</text></svg>`,
  secenekler: [
    "Yalnızca K",
    "Yalnızca L",
    "Yalnızca M",
    "Yalnızca N"
  ],
  dogru: 2,
  hatalar: [
    "Tek zincirli modeli seçme: DNA iki zincirden oluşur ve bazlar karşılıklı eşleşerek basamakları oluşturur.",
    "Aynı bazları eşleştirme: A karşısına A, G karşısına G gelmez; adenin timinle, guanin sitozinle eşleşir.",
    null,
    "Çiftleri karıştırma: A – C ve G – T eşleşmesi yoktur."
  ],
  aciklama: `DNA'nın yapısına uygun bir model üç şeyi birden sağlamalıdır: iki zincir bulunmalı, basamaklar organik bazlardan oluşmalı ve bazlar A – T, G – C kuralına göre eşleşmelidir.
Adım 1: K modelinde tek zincir var ve bazların karşısı boş. DNA'ya uygun değildir.
Adım 2: L modelinde iki zincir var ama karşılıklı bazlar aynıdır (A – A, G – G ...). Kurala aykırıdır.
Adım 3: N modelinde karşılıklı bazlar A – C ve G – T biçimindedir. Böyle bir eşleşme yoktur.
Adım 4: M modelinde iki zincir ve A – T, G – C, C – G, T – A çiftleri vardır. Üç koşulu da sağlar.
Sağlama: M'deki her basamakta ya A – T ya da G – C çifti vardır; çiftin hangi zincirde durduğu önemli değildir.
Cevap C.`
},
{
  id: "fen-dn-334",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Görselde, kendini eşlemeye başlamadan önceki bir DNA bölümü verilmiştir. Eşlenme tamamlanınca iki DNA oluşmuş; bunlardan biri 1. zinciri, diğeri 2. zinciri kalıp olarak kullanmıştır.
Buna göre;
I. Oluşan DNA'ların her biri, eski zincirlerden birini taşır.
II. 2. zinciri kalıp olarak kullanan DNA'nın yeni zincirindeki bazlar yukarıdan aşağıya T – C – A – G sırasındadır.
III. Oluşan iki DNA'nın baz dizilimleri birbirinin aynısıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 260 230" role="img" aria-label="Eşlenmeden önceki dört basamaklı DNA bölümü"><text x="40" y="22" font-size="15" text-anchor="middle" fill="currentColor">1. zincir</text><text x="170" y="22" font-size="15" text-anchor="middle" fill="currentColor">2. zincir</text><line x1="20" y1="34" x2="20" y2="220" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="190" y1="34" x2="190" y2="220" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="58" y1="58" x2="152" y2="58" stroke="currentColor" stroke-width="2"/><rect x="26" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="152" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="42" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="168" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><line x1="58" y1="104" x2="152" y2="104" stroke="currentColor" stroke-width="2"/><rect x="26" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="152" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="42" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="168" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><line x1="58" y1="150" x2="152" y2="150" stroke="currentColor" stroke-width="2"/><rect x="26" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="152" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="42" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="168" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><line x1="58" y1="196" x2="152" y2="196" stroke="currentColor" stroke-width="2"/><rect x="26" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="152" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="42" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="168" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text></svg>`,
  secenekler: [
    "Yalnız I",
    "II ve III",
    "I ve III",
    "I, II ve III"
  ],
  dogru: 2,
  hatalar: [
    "III. yargıyı atlama: eski zincirler kalıp olduğu için oluşan iki DNA da ilk DNA'nın baz dizilimini taşır; ikisi birbirinin aynısıdır.",
    "I'i atlama: oluşan her DNA'da bir eski, bir yeni zincir bulunur; II'yi doğru sayma ise 2. zincirin karşısına T – C – A – G değil A – G – T – C gelir.",
    null,
    "II. yargıyı da doğru sayma: T – C – A – G dizilimi 1. zincirin karşısına kurulan yeni zincire aittir, 2. zincirin karşısına kurulana değil."
  ],
  aciklama: `Eşlenmede iki zincir ayrılır, her biri kalıp olur ve karşısına eşleşme kuralına göre yeni zincir kurulur. Sonuçta her DNA bir eski, bir yeni zincir taşır.
Adım 1: I. yargıyı incele. Oluşan iki DNA'dan biri 1. zinciri ve onun yeni zincirini, diğeri 2. zinciri ve onun yeni zincirini taşır. Her DNA bir eski zincir içerir. I doğrudur.
Adım 2: II. yargıyı incele. 2. zincirin bazları T – C – A – G. Karşısına A – G – T – C kurulur. T – C – A – G, 1. zincirin karşısına kurulan zincirdir. II yanlıştır.
Adım 3: III. yargıyı incele. Birinci DNA: A – G – T – C ile T – C – A – G. İkinci DNA: T – C – A – G ile A – G – T – C. İki DNA'da da aynı basamaklar aynı çiftleri oluşturur; dizilimleri aynıdır. III doğrudur.
Sağlama: Eşlenmenin amacı kalıtsal bilginin değişmeden kopyalanmasıdır; bu yüzden oluşan DNA'lar birbirinin ve ilk DNA'nın aynısıdır.
Cevap C.`
},
{
  id: "fen-dn-335",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim haberinde şu bilgiler yer almıştır: "Araştırmacılar, nadir bir kelebek türünün vücut hücrelerinde 30 kromozom saydı. Aynı ekip, bu türün DNA'sından aldığı bir bölgenin baz dizilimini, yakın akrabası olan başka bir kelebek türüyle karşılaştırdı. İki türün DNA'sında da aynı dört organik bazın bulunduğu, ancak bazların dizilim sırasının farklı olduğu görüldü."
Buna göre;
I. İki kelebek türünün DNA'sında bulunan nükleotid çeşidi sayısı aynıdır.
II. Haberdeki kelebek türünün hücrelerinde 30 tane gen bulunur.
III. İki tür arasındaki dizilim sırası farkı, türlerin özelliklerinin farklı olmasıyla ilişkilendirilebilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I ve III",
    "Yalnız I",
    "Yalnız III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "III. yargıyı atlama: DNA'daki baz dizilimi canlının özelliklerini belirleyen bilgiyi taşır; dizilim farkı özellik farkıyla ilişkilendirilebilir.",
    "I. yargıyı atlama: nükleotidler taşıdıkları baza göre adlandırıldığı için dört çeşit baz, dört çeşit nükleotid demektir ve bu sayı iki türde de aynıdır.",
    "II. yargıyı doğru sayma: 30 sayısı kromozom sayısıdır; bir kromozomun üzerinde binlerce gen bulunur, gen sayısı 30 değildir."
  ],
  aciklama: `Bu soruda haberdeki bilgilerden yola çıkarak üç yargıyı denetleyeceksin.
Adım 1: I. yargıyı incele. İki türün DNA'sında da aynı dört baz bulunuyor. Nükleotidler taşıdıkları baza göre adlandırıldığı için her iki türde de dört çeşit nükleotid vardır. I doğrudur.
Adım 2: II. yargıyı incele. Haberdeki 30 sayısı kromozom sayısıdır. Bir kromozomun üzerinde binlerce gen yer alır; gen sayısı 30 değildir. II yanlıştır.
Adım 3: III. yargıyı incele. Bazların çeşidi aynı, sırası farklıdır. Canlılar arasındaki farkı yaratan, bazların dizilim sırasıdır. Dizilim farkı özellik farkıyla ilişkilendirilebilir. III doğrudur.
Sık yapılan hata: Kromozom sayısını gen sayısı sanmak.
Cevap A.`
},
{
  id: "fen-dn-336",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kuş gözlemcisi, üç ayrı tüy örneğinden (K, L ve M) DNA elde etmiş ve DNA'nın aynı bölgesindeki altı basamaklı bir kesitin bir zincirini okuyarak tabloya yazmıştır. Tabloda yalnızca bu bölgenin baz sırası verilmiştir.
Buna göre;
I. K ile L'nin DNA'ları kesinlikle birbirinin aynısıdır.
II. K ile M'nin DNA'ları kesinlikle birbirinden farklıdır.
III. L ile M'nin DNA'larının farklı olması, bu iki örnekte bulunan organik baz çeşitlerinin farklı olmasından kaynaklanır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Örnek</th><th>İncelenen bölgenin baz sırası</th></tr><tr><td>K</td><td>A – T – G – C – C – A</td></tr><tr><td>L</td><td>A – T – G – C – C – A</td></tr><tr><td>M</td><td>A – T – G – G – C – A</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Sınırlı veriyi genelleme: yalnızca altı basamaklık bir bölge aynı çıkmıştır; DNA'nın geri kalanı farklı olabilir, bu yüzden \"kesinlikle aynı\" denemez.",
    null,
    "I'i de doğru sayma: tek bir bölgenin aynı olması DNA'nın tamamının aynı olduğunu kanıtlamaz.",
    "III'ü doğru sayma: üç örnekte de aynı dört baz (A, T, G, C) bulunur; fark çeşitte değil bazların sırasındadır."
  ],
  aciklama: `Bu soruda "kesinlikle" sözcüğü sınırı belirler: yalnızca verinin kanıtladığı sonucu doğru say.
Adım 1: I. yargıyı incele. K ve L'nin incelenen bölgesi aynı çıkmış. Ama yalnızca bir bölgenin aynı olması DNA'nın tamamının aynı olduğunu kanıtlamaz. I yanlıştır.
Adım 2: II. yargıyı incele. K'nin 4. bazı sitozin, M'nin 4. bazı guanin. İncelenen bölgede bir tek baz bile farklıysa DNA'lar kesinlikle farklıdır. II doğrudur.
Adım 3: III. yargıyı incele. K, L ve M'nin üçünde de aynı dört baz bulunur. Farklılık bazların çeşidinde değil, dizilim sırasındadır. III yanlıştır.
Sık yapılan hata: Benzerliği kesin sanmak. Farklılık kesin bilgi verir, tek bölgedeki benzerlik vermez.
Cevap B.`
},
{
  id: "fen-dn-337",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Görselde, kendini eşlemekte olan bir DNA'nın açılmış bölümü verilmiştir. Üstteki eski zincir kalıp olarak kullanılmaktadır. Altta yeni zincirin ilk üç bazı kurulmuş, son üç bazı henüz kurulmamıştır (?).
**Buna göre yeni zincirin henüz kurulmamış üç bazı soldan sağa doğru aşağıdakilerden hangisi olmalıdır?**`,
  gorsel: `<svg viewBox="0 0 520 224" role="img" aria-label="Kalıp zincir ve kısmen kurulmuş yeni zincir"><line x1="40" y1="60" x2="480" y2="60" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="40" y1="184" x2="480" y2="184" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><rect x="53" y="70" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="70" y="92" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><line x1="70" y1="100" x2="70" y2="128" stroke="currentColor" stroke-width="2"/><rect x="53" y="128" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="70" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><rect x="123" y="70" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="140" y="92" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><line x1="140" y1="100" x2="140" y2="128" stroke="currentColor" stroke-width="2"/><rect x="123" y="128" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="140" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><rect x="193" y="70" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="210" y="92" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><line x1="210" y1="100" x2="210" y2="128" stroke="currentColor" stroke-width="2"/><rect x="193" y="128" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="210" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><rect x="263" y="70" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="280" y="92" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><line x1="280" y1="100" x2="280" y2="128" stroke="currentColor" stroke-width="2"/><rect x="263" y="128" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="280" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><rect x="333" y="70" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="350" y="92" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><line x1="350" y1="100" x2="350" y2="128" stroke="currentColor" stroke-width="2"/><rect x="333" y="128" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="350" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><rect x="403" y="70" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="420" y="92" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><line x1="420" y1="100" x2="420" y2="128" stroke="currentColor" stroke-width="2"/><rect x="403" y="128" width="34" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="420" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><text x="40" y="36" font-size="15" text-anchor="start" fill="currentColor">Eski zincir (kalıp)</text><text x="40" y="210" font-size="15" text-anchor="start" fill="var(--vurgu)">Yeni zincir</text></svg>`,
  secenekler: [
    "C – C – A",
    "G – G – A",
    "T – T – C",
    "C – C – T"
  ],
  dogru: 3,
  hatalar: [
    "Son bazı yanlış eşleme: kalıptaki adeninin karşısına adenin değil timin gelir.",
    "Kalıbı kopyalama: yeni zincir kalıbın aynısı değil eşi olarak kurulur; G – G – A, kalıbın 4., 5. ve 6. bazlarıdır.",
    "Eşleşme çiftlerini karıştırma: guaninin eşi timin, adeninin eşi sitozin değildir; guanin sitozinle, adenin timinle eşleşir.",
    null
  ],
  aciklama: `Yeni zincir, kalıp zincirin karşısına eşleşme kuralına göre kurulur: A – T, G – C.
Adım 1: Kalıbın bazlarını oku: T – A – C – G – G – A.
Adım 2: Kurulmuş kısmı denetle: T'nin karşısı A, A'nın karşısı T, C'nin karşısı G. Kural uygulanmış.
Adım 3: Kalan bazlara geç: 4. basamakta G var, karşısına C gelir. 5. basamakta G var, karşısına C gelir. 6. basamakta A var, karşısına T gelir.
Adım 4: Eksik üç baz C – C – T olur.
Sağlama: Yeni zincir tamamlanınca A – T – G – C – C – T olur; kalıpla karşılaştırınca altı basamakta da A – T ya da G – C çifti oluşur.
Cevap D.`
},
{
  id: "fen-dn-338",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, bir kurbağanın bacak kası, göz ve karaciğer hücrelerinden aldığı örnekleri mikroskopta incelemiş ve sonuçları tabloya işlemiştir.
Buna göre;
I. Göz hücresinin DNA'sındaki baz dizilimi, kas hücresininkinden farklıdır.
II. Karaciğer hücresinde, gözün rengini belirleyen gen de bulunur.
III. Üç hücrenin görevlerinin farklı olması, kromozom sayılarının eşit olmasıyla çelişmez.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Hücre</th><th>Çekirdekte DNA</th><th>Kromozom sayısı</th></tr><tr><td>Bacak kası</td><td>Var</td><td>26</td></tr><tr><td>Göz</td><td>Var</td><td>26</td></tr><tr><td>Karaciğer</td><td>Var</td><td>26</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Görev farkını DNA farkına bağlama: üç hücre de aynı hücrenin art arda bölünmesiyle oluştuğu için aynı DNA'yı taşır; I yanlış, II ve III doğrudur.",
    "III. yargıyı atlama: hücrelerin görevi farklı olsa da kromozom sayıları aynıdır; bu iki durum birbiriyle çelişmez.",
    "I. yargıyı doğru sayma: göz ve kas hücresinin baz dizilimi aynıdır; hücreleri farklı kılan görevleridir, DNA'ları değil.",
    null
  ],
  aciklama: `Bir canlının bütün vücut hücreleri tek bir hücrenin art arda bölünmesiyle oluşur. Her bölünmeden önce DNA kendini eşlediği için hücreler aynı DNA'yı, aynı genleri ve aynı sayıda kromozomu taşır.
Adım 1: I. yargıyı incele. Göz ve bacak kası hücresinin DNA'ları aynıdır; baz dizilimleri de aynıdır. Hücrelerin görevi farklı olsa da kalıtsal bilgileri farklı değildir. I yanlıştır.
Adım 2: II. yargıyı incele. Her hücre canlının bütün genlerini taşır. Karaciğer hücresinde de gözün rengini belirleyen gen vardır. II doğrudur.
Adım 3: III. yargıyı incele. Tabloda üç hücrenin görevi farklı ama kromozom sayısı aynıdır (26). Görev farkı, kromozom sayısını değiştirmez. III doğrudur.
Sağlama: Tablodaki 26 sayısı üç hücrede de aynı; bu, hücrelerin aynı DNA'dan türediği bilgisiyle uyumlu.
Cevap D.`
},
{
  id: "fen-dn-339",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci kâğıttan bir DNA modeli hazırlamış, ancak bazı basamaklarını eşleşme kuralına uygun yapmamıştır. Modelin altı basamağı görselde verilmiştir.
**Buna göre modelin DNA'nın yapısına uygun olması için en az kaç bazın değiştirilmesi gerekir?**`,
  gorsel: `<svg viewBox="0 0 300 322" role="img" aria-label="Altı basamaklı DNA modeli"><text x="60" y="22" font-size="15" text-anchor="middle" fill="currentColor">Üst zincir</text><text x="190" y="22" font-size="15" text-anchor="middle" fill="currentColor">Alt zincir</text><line x1="40" y1="34" x2="40" y2="312" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="210" y1="34" x2="210" y2="312" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="78" y1="58" x2="172" y2="58" stroke="currentColor" stroke-width="2"/><rect x="46" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="188" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="63" font-size="15" text-anchor="end" fill="currentColor">1</text><line x1="78" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="2"/><rect x="46" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="188" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="28" y="109" font-size="15" text-anchor="end" fill="currentColor">2</text><line x1="78" y1="150" x2="172" y2="150" stroke="currentColor" stroke-width="2"/><rect x="46" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="188" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="28" y="155" font-size="15" text-anchor="end" fill="currentColor">3</text><line x1="78" y1="196" x2="172" y2="196" stroke="currentColor" stroke-width="2"/><rect x="46" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="188" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="28" y="201" font-size="15" text-anchor="end" fill="currentColor">4</text><line x1="78" y1="242" x2="172" y2="242" stroke="currentColor" stroke-width="2"/><rect x="46" y="227" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="227" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="248" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="188" y="248" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="247" font-size="15" text-anchor="end" fill="currentColor">5</text><line x1="78" y1="288" x2="172" y2="288" stroke="currentColor" stroke-width="2"/><rect x="46" y="273" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="273" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="294" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="188" y="294" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="28" y="293" font-size="15" text-anchor="end" fill="currentColor">6</text></svg>`,
  secenekler: [
    "2 baz",
    "3 baz",
    "4 baz",
    "6 baz"
  ],
  dogru: 1,
  hatalar: [
    "Hatalı basamaklardan birini atlama: A – A, T – G ve G – G olmak üzere üç basamak kurala uymaz.",
    null,
    "C – G basamağını da hatalı sayma: bu basamak G – C ile aynı kurala uyar; çiftin hangi zincirde durduğu önemli değildir.",
    "Hatalı basamaklarda iki bazı da değiştirme: bir basamağı düzeltmek için tek bazı değiştirmek yeterlidir."
  ],
  aciklama: `Bir basamağın kurala uyması için çiftin A – T ya da G – C olması gerekir. Çiftin hangi zincirde durduğu önemli değildir.
Adım 1: Basamakları tek tek denetle. 1. basamak A – A: hatalı. 2. basamak G – C: doğru. 3. basamak T – G: hatalı. 4. basamak C – G: doğru. 5. basamak T – A: doğru. 6. basamak G – G: hatalı.
Adım 2: Hatalı basamak sayısı 3'tür.
Adım 3: Her hatalı basamağı düzeltmek için bir bazı değiştirmek yeterlidir; örneğin alttaki bazları T, A ve C yapabilirsin.
Adım 4: Hiçbir değişiklik iki hatalı basamağı birden düzeltemez. Gereken en az değişiklik 3 bazdır.
Sık yapılan hata: C – G basamağını, G – C ile ters yönde olduğu için hatalı saymak.
Cevap B.`
},
{
  id: "fen-dn-340",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Görselde, bir hücrenin yaşamında gerçekleşen üç aşama karışık sırayla (K, L, M) gösterilmiştir. Hücrelerin içindeki renkli çubuklar DNA'yı göstermektedir.
Buna göre;
I. Olayların gerçekleşme sırası K, L, M'dir.
II. L aşamasındaki hücrede, M aşamasındaki DNA'nın bir kopyası daha bulunur.
III. K aşamasındaki hücrelerin her birindeki DNA, bir eski bir yeni zincir içerir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 540 236" role="img" aria-label="Bir hücrenin yaşamında üç aşama: K iki hücre, L iki DNA taşıyan tek hücre, M bir DNA taşıyan tek hücre"><circle cx="100" cy="62" r="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="80" y="56" width="40" height="12" rx="3" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><circle cx="100" cy="156" r="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="80" y="150" width="40" height="12" rx="3" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><circle cx="290" cy="109" r="62" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="270" y="84" width="40" height="12" rx="3" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><rect x="270" y="122" width="40" height="12" rx="3" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><circle cx="450" cy="109" r="62" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="430" y="103" width="40" height="12" rx="3" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="100" y="224" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">K</text><text x="290" y="224" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">L</text><text x="450" y="224" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">M</text></svg>`,
  secenekler: [
    "II ve III",
    "Yalnız II",
    "I ve III",
    "I, II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "III. yargıyı atlama: yeni hücrelerin DNA'ları eşlenmeyle oluşmuştur ve her DNA bir eski bir yeni zincir taşır.",
    "I'i doğru sayma: DNA sayısı tek olan M önce, eşlenmiş L sonra, iki hücreli K en son gelir; sıra M, L, K'dir.",
    "I. yargıyı da doğru sayma: sıra K, L, M olsaydı DNA önce iki hücreye ayrılıp sonra eşlenmiş olurdu; oysa eşlenme bölünmeden önce gerçekleşir."
  ],
  aciklama: `DNA'nın kendini eşlemesi hücre bölünmesinden önce gerçekleşir. Eşlenmeyle DNA'dan iki kopya oluşur; bölünmede kopyalar iki hücreye paylaştırılır.
Adım 1: Görseli sırala. M'de hücrede tek DNA var: bölünmeye hazırlanmamış hücre. L'de aynı hücrede iki DNA var: eşlenme olmuş. K'de iki hücre var: bölünme tamamlanmış. Sıra M, L, K'dir. I yanlıştır.
Adım 2: II. yargıyı incele. L'deki hücrede M'deki DNA'nın eşlenmesiyle oluşan bir kopya daha vardır. II doğrudur.
Adım 3: III. yargıyı incele. Eşlenmede oluşan her DNA bir eski bir yeni zincir taşır. K'deki hücreler bu DNA'ları paylaştığı için her birindeki DNA bir eski bir yeni zincir içerir. III doğrudur.
Sağlama: Sıra M, L, K olduğunda DNA miktarı önce iki katına çıkar, sonra iki hücreye paylaşılarak eski değerine döner.
Cevap A.`
},
{
  id: "fen-dn-341",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sınıf panosunda, meyve sineği ile arpa bitkisinin vücut hücrelerindeki kromozom sayıları gösterilmiştir. Fen öğretmeni, "Bir kromozomun üzerinde çok sayıda gen bulunur." diyerek öğrencilerden tablodan çıkarım yapmalarını istemiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Canlı</th><th>Vücut hücresindeki kromozom sayısı</th></tr><tr><td>Meyve sineği</td><td>8</td></tr><tr><td>Arpa</td><td>14</td></tr></table>`,
  secenekler: [
    "Arpa hücresindeki gen sayısı 14'tür.",
    "Arpa, meyve sineğinden daha çok kromozoma sahip olduğu için daha gelişmiştir.",
    "Meyve sineği hücresindeki gen sayısı 8'den fazladır.",
    "Meyve sineğinin bir geni, kromozomlarından birinden daha büyüktür."
  ],
  dogru: 2,
  hatalar: [
    "Kromozom sayısını gen sayısı sanma: 14, kromozom sayısıdır; her kromozomda çok sayıda gen bulunduğu için gen sayısı 14'ten çok fazladır.",
    "Kromozom sayısını gelişmişlik ölçütü sanma: kromozom sayısı bir canlının ne kadar gelişmiş olduğunu göstermez.",
    null,
    "Büyüklük sırasını ters kurma: gen, DNA'nın bir bölümüdür ve kromozom DNA'yı içerir; gen kromozomdan küçüktür."
  ],
  aciklama: `Bu soruda "kesinlikle" sözcüğü, yalnızca verilen bilgiden zorunlu çıkan sonucu seçmeni ister.
Adım 1: Tablo kromozom sayısını verir, gen sayısını vermez. Öğretmen, her kromozomda çok sayıda gen bulunduğunu söylüyor.
Adım 2: Meyve sineği hücresinde 8 kromozom var. Her birinde çok sayıda gen olduğuna göre gen sayısı 8'den çok fazladır. Bu yargı doğrudur.
Adım 3: Arpadaki 14, kromozom sayısıdır; gen sayısı değildir.
Adım 4: Kromozom sayısı gelişmişliği göstermez; bu yüzden arpanın daha gelişmiş olduğu söylenemez.
Adım 5: Gen, kromozomun içindeki DNA'nın bir bölümüdür; kromozomdan küçüktür.
Sık yapılan hata: Kromozom sayısıyla gen sayısını karıştırmak.
Cevap C.`
},
{
  id: "fen-dn-342",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, altı basamaklı bir DNA modelinde bazı bazların yerini boş bırakmış ve bunları soru işaretiyle (?) göstermiştir. Boşluklar eşleşme kuralına uygun biçimde doldurulacaktır.
Buna göre;
I. 1. basamağın alt zincirinde adenin bulunur.
II. 3. basamağın alt zincirindeki baz sitozindir.
III. 2. ve 5. basamakların üst zincirinde sırasıyla guanin ve timin bulunur.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 300 322" role="img" aria-label="Bazı bazları boş bırakılmış altı basamaklı DNA modeli"><text x="60" y="22" font-size="15" text-anchor="middle" fill="currentColor">Üst zincir</text><text x="190" y="22" font-size="15" text-anchor="middle" fill="currentColor">Alt zincir</text><line x1="40" y1="34" x2="40" y2="312" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="210" y1="34" x2="210" y2="312" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="78" y1="58" x2="172" y2="58" stroke="currentColor" stroke-width="2"/><rect x="46" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="188" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><text x="28" y="63" font-size="15" text-anchor="end" fill="currentColor">1</text><line x1="78" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="2"/><rect x="46" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><text x="188" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="28" y="109" font-size="15" text-anchor="end" fill="currentColor">2</text><line x1="78" y1="150" x2="172" y2="150" stroke="currentColor" stroke-width="2"/><rect x="46" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="188" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><text x="28" y="155" font-size="15" text-anchor="end" fill="currentColor">3</text><line x1="78" y1="196" x2="172" y2="196" stroke="currentColor" stroke-width="2"/><rect x="46" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="188" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="201" font-size="15" text-anchor="end" fill="currentColor">4</text><line x1="78" y1="242" x2="172" y2="242" stroke="currentColor" stroke-width="2"/><rect x="46" y="227" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="227" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="248" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><text x="188" y="248" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="247" font-size="15" text-anchor="end" fill="currentColor">5</text><line x1="78" y1="288" x2="172" y2="288" stroke="currentColor" stroke-width="2"/><rect x="46" y="273" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="273" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="294" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="188" y="294" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><text x="28" y="293" font-size="15" text-anchor="end" fill="currentColor">6</text></svg>`,
  secenekler: [
    "Yalnız III",
    "Yalnız I",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "I. yargıyı doğru sayma: üstte adenin varsa karşısında timin bulunur, adenin bulunmaz.",
    "I ve II'yi doğru sayma: 1. basamakta alta timin, 3. basamakta alta guanin gelir.",
    "II. yargıyı doğru sayma: 3. basamakta üstte sitozin olduğundan altta guanin bulunur; sitozin bulunmaz."
  ],
  aciklama: `Boş yerleri eşleşme kuralıyla doldurup yargıları denetle: adenin timinle, guanin sitozinle eşleşir.
Adım 1: 1. basamak: üstte A olduğu için altta T bulunur. I yanlıştır.
Adım 2: 2. basamak: altta C olduğu için üstte G bulunur.
Adım 3: 3. basamak: üstte C olduğu için altta G bulunur, sitozin değil. II yanlıştır.
Adım 4: 5. basamak: altta A olduğu için üstte T bulunur. 6. basamak: üstte G olduğu için altta C bulunur.
Adım 5: III. yargıya dön. 2. basamağın üstünde G, 5. basamağın üstünde T vardır. III doğrudur.
Sağlama: Doldurduktan sonra çiftler A – T, G – C, C – G, T – A, T – A, G – C olur; hepsi kurala uyar.
Cevap A.`
},
{
  id: "fen-dn-343",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, DNA'nın kendini eşlemesi sonunda oluşan iki DNA molekülünün baz dizilimlerinin, birbirinin ve ilk DNA'nın aynısı olduğunu öğrenmiştir. Aynı öğrenci, eşlenmede yeni zincirlerin kalıp zincirin aynısı değil, eşi olarak kurulduğunu da öğrenmiş ve bu iki bilginin birbiriyle nasıl bağdaştığını anlayamamıştır.
**Buna göre iki DNA'nın baz dizilimlerinin ilk DNA'nınkiyle aynı çıkmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Her yeni zincirin baz dizilimi, kalıp zincirin baz dizilimiyle aynı olduğu için",
    "İki eski zincirin baz dizilimi, ilk DNA'da birbirinin aynısı olduğu için",
    "Oluşan her DNA'nın iki zinciri de yeni kurulduğu ve birbirini tamamladığı için",
    "Her yeni zincirin baz dizilimi, kalıp olmayan eski zincirin dizilimiyle aynı olduğu için"
  ],
  dogru: 3,
  hatalar: [
    "Kalıbı kopyalama: yeni zincir kalıbın aynısı değil, eşi olarak kurulur.",
    "İki eski zinciri aynı sanma: ilk DNA'nın iki zinciri birbirinin eşidir, aynısı değildir.",
    "İki zinciri de yeni sanma: oluşan her DNA'da bir eski, bir yeni zincir bulunur.",
    null
  ],
  aciklama: `Eşleşme kuralı gereği bir zincirin baz dizilimi, karşısındaki zincirin dizilimini tek bir biçimde belirler.
Adım 1: İlk DNA'nın iki zincirine K ve L diyelim. Bu iki zincir birbirinin eşidir.
Adım 2: K kalıp olunca karşısına K'nın eşi kurulur. K'nın eşi, L'nin kendisidir. Yani K'nın karşısındaki yeni zincir, L ile aynı dizilimdedir.
Adım 3: Aynı şekilde L'nin karşısındaki yeni zincir, K ile aynı dizilimdedir.
Adım 4: Oluşan DNA'lardan biri K ve L'nin kopyası, diğeri L ve K'nın kopyasıdır. İkisi de ilk DNA'nın baz dizilimini taşır.
Sağlama: K: A – G – C ise L: T – C – G olur. K'nın karşısına T – C – G, L'nin karşısına A – G – C kurulur; iki DNA da ilk DNA ile aynı çiftleri taşır.
Sık yapılan hata: Yeni zincirin kalıbın aynısı olduğunu sanmak. Yeni zincir kalıbın eşidir; kalıbın eşi ise kalıp olmayan eski zincirin aynısıdır.
Cevap D.`
},
{
  id: "fen-dn-344",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim merkezindeki DNA maketinde organik bazlar renkli toplarla, fosfat ve şeker zincirleri iki uzun şeritle, bazlar arasındaki bağlantılar ise kancalarla gösterilmiştir. Sarı top adenini, mavi top timini, kırmızı top guanini, yeşil top sitozini temsil etmektedir. Kancalar yalnızca sarı topla mavi topu, kırmızı topla yeşil topu birbirine bağlayacak biçimde yapılmıştır. Rehber, maketin gerçek DNA'dan milyonlarca kat büyük olduğunu da belirtmiştir.
Buna göre;
I. Kancaların bu biçimde yapılması, maketin DNA'daki eşleşme kuralını yansıttığını gösterir.
II. Maketteki toplar gerçek bazlarla aynı boyutta olmadığı için maket DNA'nın yapısını doğru gösteremez.
III. Maketin bir basamağında bir şeritte sarı top varsa, öbür şeritte kırmızı top bulunması beklenir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "Yalnız I",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "II. yargıyı doğru sayma: model gerçek boyutta olmak zorunda değildir; önemli olan yapıyı (iki zincir, bazların eşleşmesi) doğru göstermesidir.",
    null,
    "III. yargıyı doğru sayma: sarı top adenindir ve karşısına timin, yani mavi top gelir; kırmızı top guanindir ve sitozinle eşleşir.",
    "I. yargıyı atlama: kancalar yalnızca A – T ve G – C çiftlerini bağladığı için maket eşleşme kuralını yansıtır."
  ],
  aciklama: `Model, gözle doğrudan görülemeyen bir yapıyı anlamamıza yardım eden ve yapının önemli özelliklerini yansıtan temsildir. Boyutun gerçekle aynı olması şart değildir.
Adım 1: I. yargıyı incele. Kancalar yalnızca sarı – mavi (adenin – timin) ve kırmızı – yeşil (guanin – sitozin) toplarını bağlıyor. Bu, eşleşme kuralının aynısıdır. I doğrudur.
Adım 2: II. yargıyı incele. Maket büyük olduğu için bir model olarak geçersiz olmaz; model yapının özelliklerini (iki zincir, bazların eşleşmesi) doğru göstermelidir. II yanlıştır.
Adım 3: III. yargıyı incele. Sarı top adenindir. Adeninin eşi timindir, yani mavi toptur. Kırmızı top guanindir ve sarı topa bağlanmaz. III yanlıştır.
Sağlama: Maketteki her basamakta ya sarı – mavi ya kırmızı – yeşil bulunmalıdır.
Sık yapılan hata: Modelin gerçeğiyle birebir aynı boyutta olması gerektiğini düşünmek.
Cevap B.`
},
{
  id: "fen-dn-345",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Dört öğrenci, bir DNA molekülünün kendini eşlemesi sonunda oluşan iki DNA'yı K, L, M ve N şemalarıyla göstermiştir. Şemalarda koyu çizgiler eski zincirleri, renkli çizgiler eşlenme sırasında yeni kurulan zincirleri göstermektedir. Eşlenmeden önceki DNA'nın iki zinciri de eskidir.
**Buna göre eşlenmenin sonucunu doğru gösteren şema hangisidir?**`,
  gorsel: `<svg viewBox="0 0 520 214" role="img" aria-label="K, L, M ve N ile gösterilen dört eşlenme sonucu şeması; her şemada iki DNA vardır"><line x1="30" y1="52" x2="52" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="72" x2="52" y2="72" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="92" x2="52" y2="92" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="112" x2="52" y2="112" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="38" x2="30" y2="126" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="52" y1="38" x2="52" y2="126" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="92" y1="52" x2="114" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="92" y1="72" x2="114" y2="72" stroke="currentColor" stroke-width="1.5"/><line x1="92" y1="92" x2="114" y2="92" stroke="currentColor" stroke-width="1.5"/><line x1="92" y1="112" x2="114" y2="112" stroke="currentColor" stroke-width="1.5"/><line x1="92" y1="38" x2="92" y2="126" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="114" y1="38" x2="114" y2="126" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><text x="72" y="160" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">K</text><line x1="155" y1="52" x2="177" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="155" y1="72" x2="177" y2="72" stroke="currentColor" stroke-width="1.5"/><line x1="155" y1="92" x2="177" y2="92" stroke="currentColor" stroke-width="1.5"/><line x1="155" y1="112" x2="177" y2="112" stroke="currentColor" stroke-width="1.5"/><line x1="155" y1="38" x2="155" y2="126" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="38" x2="177" y2="126" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="217" y1="52" x2="239" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="217" y1="72" x2="239" y2="72" stroke="currentColor" stroke-width="1.5"/><line x1="217" y1="92" x2="239" y2="92" stroke="currentColor" stroke-width="1.5"/><line x1="217" y1="112" x2="239" y2="112" stroke="currentColor" stroke-width="1.5"/><line x1="217" y1="38" x2="217" y2="126" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><line x1="239" y1="38" x2="239" y2="126" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><text x="197" y="160" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">L</text><line x1="280" y1="52" x2="302" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="72" x2="302" y2="72" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="92" x2="302" y2="92" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="112" x2="302" y2="112" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="38" x2="280" y2="126" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="302" y1="38" x2="302" y2="126" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><line x1="342" y1="52" x2="364" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="342" y1="72" x2="364" y2="72" stroke="currentColor" stroke-width="1.5"/><line x1="342" y1="92" x2="364" y2="92" stroke="currentColor" stroke-width="1.5"/><line x1="342" y1="112" x2="364" y2="112" stroke="currentColor" stroke-width="1.5"/><line x1="342" y1="38" x2="342" y2="126" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="364" y1="38" x2="364" y2="126" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><text x="322" y="160" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">M</text><line x1="405" y1="52" x2="427" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="405" y1="72" x2="427" y2="72" stroke="currentColor" stroke-width="1.5"/><line x1="405" y1="92" x2="427" y2="92" stroke="currentColor" stroke-width="1.5"/><line x1="405" y1="112" x2="427" y2="112" stroke="currentColor" stroke-width="1.5"/><line x1="405" y1="38" x2="405" y2="126" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><line x1="427" y1="38" x2="427" y2="126" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><line x1="467" y1="52" x2="489" y2="52" stroke="currentColor" stroke-width="1.5"/><line x1="467" y1="72" x2="489" y2="72" stroke="currentColor" stroke-width="1.5"/><line x1="467" y1="92" x2="489" y2="92" stroke="currentColor" stroke-width="1.5"/><line x1="467" y1="112" x2="489" y2="112" stroke="currentColor" stroke-width="1.5"/><line x1="467" y1="38" x2="467" y2="126" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><line x1="489" y1="38" x2="489" y2="126" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><text x="447" y="160" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">N</text><line x1="150" y1="196" x2="190" y2="196" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><text x="198" y="201" font-size="15" text-anchor="start" fill="currentColor">eski zincir</text><line x1="320" y1="196" x2="360" y2="196" stroke="var(--vurgu)" stroke-width="4" stroke-linecap="round"/><text x="368" y="201" font-size="15" text-anchor="start" fill="currentColor">yeni zincir</text></svg>`,
  secenekler: [
    "K şeması",
    "L şeması",
    "M şeması",
    "N şeması"
  ],
  dogru: 2,
  hatalar: [
    "Eski zincirleri çoğalmış sanma: başlangıçta yalnızca iki eski zincir vardır, dört eski zincir olamaz.",
    "Eski DNA'nın değişmeden kaldığını sanma: eski DNA iki zincirine ayrılır ve her zincir yeni bir zincirle eşleşir; bambaşka yeni bir DNA oluşmaz.",
    null,
    "Eski zincirlerin yok olduğunu sanma: eski zincirler kalıp olarak kullanılır ve yeni DNA'ların içinde kalır."
  ],
  aciklama: `DNA kendini eşlerken iki eski zincir birbirinden ayrılır. Her biri kalıp olur ve karşısına yeni bir zincir kurulur.
Adım 1: Başlangıçta iki eski zincir var. Dört eski zincir olamaz; K şeması yanlıştır.
Adım 2: L şemasında bir DNA tamamen eski, öbürü tamamen yeni zincirlerden oluşmuş. Oysa eski DNA aynen kalmaz; iki eski zincir birbirinden ayrılır ve her biri yeni bir zincirle eşleşir.
Adım 3: N şemasında eski zincir yok. Oysa eski zincirler kalıp olarak oluşan DNA'ların içinde kalır.
Adım 4: M şemasında iki DNA'nın her birinde bir eski, bir yeni zincir var. Doğru model budur.
Sağlama: M şemasında iki eski zincir ve iki yeni zincir bulunur; sayılar eşlenme olayıyla uyumludur.
Cevap C.`
},
{
  id: "fen-dn-346",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir hücrede DNA'nın kendini eşlemesi tamamlanmıştır. Görselde, oluşan DNA'lardan birinin altı basamaklı bir bölümü verilmiştir. Üst zincir kalıp olarak kullanılan eski zincir, alt zincir ise yeni kurulan zincirdir. Basamaklardan birinde kural dışı bir baz çifti oluşmuştur. Hücre bu hatayı onarmıştır.
**Buna göre onarım sonunda 4. basamak aşağıdakilerden hangisi gibi olur?**`,
  gorsel: `<svg viewBox="0 0 300 322" role="img" aria-label="Eşlenmiş DNA bölümü; üst zincir eski, alt zincir yeni"><text x="60" y="22" font-size="15" text-anchor="middle" fill="currentColor">Üst (kalıp)</text><text x="190" y="22" font-size="15" text-anchor="middle" fill="currentColor">Alt (yeni)</text><line x1="40" y1="34" x2="40" y2="312" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="210" y1="34" x2="210" y2="312" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="78" y1="58" x2="172" y2="58" stroke="currentColor" stroke-width="2"/><rect x="46" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="188" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="28" y="63" font-size="15" text-anchor="end" fill="currentColor">1</text><line x1="78" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="2"/><rect x="46" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="188" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="28" y="109" font-size="15" text-anchor="end" fill="currentColor">2</text><line x1="78" y1="150" x2="172" y2="150" stroke="currentColor" stroke-width="2"/><rect x="46" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="188" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="155" font-size="15" text-anchor="end" fill="currentColor">3</text><line x1="78" y1="196" x2="172" y2="196" stroke="currentColor" stroke-width="2"/><rect x="46" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="188" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="201" font-size="15" text-anchor="end" fill="currentColor">4</text><line x1="78" y1="242" x2="172" y2="242" stroke="currentColor" stroke-width="2"/><rect x="46" y="227" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="227" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="248" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="188" y="248" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="28" y="247" font-size="15" text-anchor="end" fill="currentColor">5</text><line x1="78" y1="288" x2="172" y2="288" stroke="currentColor" stroke-width="2"/><rect x="46" y="273" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="273" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="294" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="188" y="294" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="28" y="293" font-size="15" text-anchor="end" fill="currentColor">6</text></svg>`,
  secenekler: [
    "Üst: C — Alt: A",
    "Üst: T — Alt: A",
    "Üst: C — Alt: G",
    "Üst: G — Alt: C"
  ],
  dogru: 2,
  hatalar: [
    "Onarımın hiçbir şeyi değiştirmediğini sanma: onarılan hata kurala uygun hâle gelir; C – A çifti kalamaz.",
    "Kalıbı değiştirme: kalıp olan üst zincir doğrudur, hatalı olan yeni kurulan alt zincirdir; onarım alt zincirde yapılır.",
    null,
    "Zincirlerin yerini değiştirme: üstteki kalıp baz sitozindir, onarımla sitozin guanine dönüşmez; alttaki baz düzelir."
  ],
  aciklama: `Eşlenmede kalıp zincirin bazları değişmez; yeni zincirdeki kural dışı baz onarımda düzeltilir.
Adım 1: Basamakları tek tek denetle: 1. A – T, 2. G – C, 3. T – A, 5. A – T, 6. G – C kurala uyar. 4. basamak C – A kurala aykırıdır; hata buradadır.
Adım 2: Üst zincir kalıptır; üstteki baz sitozin doğrudur ve değişmez.
Adım 3: Alt zincir yenidir. Sitozinin eşi guanin olduğuna göre alttaki adenin guaninle değiştirilir.
Adım 4: Onarımdan sonra 4. basamak C – G olur.
Sağlama: C – G çifti, G – C çiftiyle aynı kurala uyar; altı basamağın hepsi artık kurala uygundur.
Cevap C.`
},
{
  id: "fen-dn-347",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Dört öğrenci, DNA'nın kendini eşlemesiyle ilgili birer yargı ileri sürmüştür:
Aslı: "Eşlenme bitince eski zincirler yıkılır ve iki DNA'nın zincirleri tamamen yeni olur."
Burak: "Yeni zincirin baz dizilimi, kalıp zincirin baz dizilimiyle aynıdır."
Ceren: "DNA'nın iki zinciri, hücre bölündükten sonra birbirinden ayrılır ve eşlenme başlar."
Doruk: "Kalıp zincirdeki bir adenin, yeni zincirde karşısına timin nükleotidinin yerleşmesini sağlar."
**Buna göre hangi öğrencinin yargısı doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Aslı",
    "Burak",
    "Ceren",
    "Doruk"
  ],
  dogru: 3,
  hatalar: [
    "Eski zincirlerin yıkıldığını sanma: eski zincirler atılmaz, kalıp olarak kullanılır ve oluşan DNA'ların içinde kalır.",
    "Eşi ile aynısını karıştırma: yeni zincir kalıbın aynısı değil, onun eşi olarak kurulur; A karşısına T gelir.",
    "Sırayı ters kurma: eşlenme bölünmeden önce gerçekleşir; zincirlerin ayrılması eşlenmenin ilk adımıdır.",
    null
  ],
  aciklama: `Her yargıyı eşlenmenin bildiğin adımlarıyla karşılaştır.
Adım 1: Aslı'nın yargısı yanlış. Eski zincirler kalıp olarak kullanılır ve her yeni DNA'da bir eski zincir bulunur.
Adım 2: Burak'ın yargısı yanlış. Yeni zincir, kalıbın eşi olarak kurulur. Kalıpta A varsa yeni zincirde T bulunur; dizilimleri aynı değil, birbirini tamamlayıcıdır.
Adım 3: Ceren'in yargısı yanlış. Eşlenme, hücre bölünmeye hazırlanırken yani bölünmeden önce gerçekleşir.
Adım 4: Doruk'un yargısı doğru. Kalıptaki adeninin karşısına eşleşme kuralı gereği timin nükleotidi yerleşir.
Sağlama: Doruk'un söylediği kural, eşlenmenin her basamağında geçerli olan A – T ve G – C eşleşmesidir.
Cevap D.`
},
{
  id: "fen-dn-348",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bitki bilimci, domates hücrelerinin DNA'sını incelerken genler hakkında üç çıkarım yapmıştır.
Buna göre;
I. Bir gen, birden çok DNA molekülüne dağılmış hâlde bulunur.
II. İki genin belirlediği özelliklerin farklı olması, bu genlerdeki nükleotid dizilimlerinin farklı olmasıyla ilişkilidir.
III. Aynı DNA üzerinde bulunan iki genden birinin nükleotid çeşitleri, diğerininkinden farklıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II. yargıyı atlama ve III'ü doğru sayma: bütün genler aynı dört nükleotid çeşidiyle yazılır; fark çeşitte değil dizilim sırasındadır.",
    "I. yargıyı doğru sayma: gen, DNA'nın belirli bir bölümüdür; birden çok DNA molekülüne dağılmaz.",
    "III. yargıyı doğru sayma: iki genin de nükleotid çeşitleri aynıdır (dört çeşit); genleri ayıran dizilim sırasıdır."
  ],
  aciklama: `Gen, DNA üzerinde bir özelliği belirleyen anlamlı nükleotid dizisidir. Bütün genler aynı dört nükleotid çeşidiyle (A, T, G, C) yazılır; genleri ayıran şey bu harflerin sırasıdır.
Adım 1: I. yargıyı incele. Gen, DNA'nın bir bölümüdür; tek bir DNA üzerinde yer alır. I yanlıştır.
Adım 2: II. yargıyı incele. Farklı özellikleri belirleyen genlerin nükleotid dizilimleri de farklıdır. II doğrudur.
Adım 3: III. yargıyı incele. Aynı DNA üzerindeki iki genin nükleotid çeşitleri aynıdır: ikisi de dört nükleotid çeşidinden oluşur. Fark sıradadır. III yanlıştır.
Sağlama: Dört harfle yazılmış iki farklı sözcüğün harfleri aynı olabilir; farklı olan sıralarıdır. Genler de böyledir.
Cevap A.`
},
{
  id: "fen-dn-349",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, hücredeki yapılar arasındaki ilişkiyi kavram haritasında oklarla göstermiştir. Okların yönü, okun çıktığı yapının ok ucundaki yapıya göre durumunu belirtir (örneğin K oku, "Kromozom, DNA'yı içerir." anlamına gelir).
**Buna göre hangi okla gösterilen ilişki yanlıştır?**`,
  gorsel: `<svg viewBox="0 0 520 214" role="img" aria-label="Kavram haritası: dört yapı ve aralarındaki K, L, M ve N okları"><rect x="16" y="44" width="120" height="42" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="76" y="71" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Kromozom</text><rect x="220" y="44" width="90" height="42" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="265" y="71" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">DNA</text><rect x="396" y="44" width="90" height="42" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="441" y="71" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Gen</text><rect x="210" y="156" width="110" height="42" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="265" y="183" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Nükleotid</text><line x1="136" y1="65" x2="218" y2="65" stroke="currentColor" stroke-width="2.5"/><polygon points="218,65 209.0,69.3 209.0,60.7" fill="currentColor"/><line x1="310" y1="65" x2="394" y2="65" stroke="currentColor" stroke-width="2.5"/><polygon points="394,65 385.0,69.3 385.0,60.7" fill="currentColor"/><line x1="265" y1="156" x2="265" y2="88" stroke="currentColor" stroke-width="2.5"/><polygon points="265,88 269.3,97.0 260.7,97.0" fill="currentColor"/><line x1="322" y1="160" x2="424" y2="88" stroke="currentColor" stroke-width="2.5"/><polygon points="424,88 419.2,96.7 414.1,89.6" fill="currentColor"/><text x="177" y="52" font-size="15" text-anchor="middle" fill="currentColor">K: içerir</text><text x="352" y="52" font-size="15" text-anchor="middle" fill="currentColor">M: içerir</text><text x="275" y="128" font-size="15" text-anchor="start" fill="currentColor">N: yapı birimidir</text><text x="395" y="152" font-size="15" text-anchor="start" fill="currentColor">L: içerir</text></svg>`,
  secenekler: [
    "K ile gösterilen ilişki",
    "L ile gösterilen ilişki",
    "M ile gösterilen ilişki",
    "N ile gösterilen ilişki"
  ],
  dogru: 1,
  hatalar: [
    "Doğru ilişkiyi yanlış sanma: kromozom, DNA'nın proteinlerle paketlenmiş hâlidir; kromozom DNA'yı içerir.",
    null,
    "Doğru ilişkiyi yanlış sanma: DNA üzerinde bir özelliği belirleyen bölümler olan genler bulunur; DNA genleri içerir.",
    "Doğru ilişkiyi yanlış sanma: nükleotid, DNA'nın yapı birimidir."
  ],
  aciklama: `Hücredeki yapılar büyükten küçüğe kromozom, DNA, gen, nükleotid diye sıralanır. "İçerir" ilişkisi büyükten küçüğe doğrudur.
Adım 1: K oku: kromozom DNA'yı içerir. Doğru.
Adım 2: M oku: DNA genleri içerir. Doğru.
Adım 3: N oku: nükleotid DNA'nın yapı birimidir. Doğru.
Adım 4: L oku: nükleotid geni içerir diyor. Oysa gen, nükleotidlerin art arda dizilmesiyle oluşur; gen nükleotidleri içerir, nükleotid geni içermez. Bu ilişki yanlıştır.
Sağlama: "İçerir" diyebilmek için okun çıktığı yapı büyük olmalıdır. L okunda ise küçük olan nükleotid, daha büyük olan geni içeriyor gibi gösterilmiştir.
Sık yapılan hata: Okun yönünü dikkate almamak.
Cevap B.`
},
{
  id: "fen-dn-350",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen öğretmeni, DNA'nın kendini eşlemesiyle ilgili tahtaya üç yargı yazmış ve öğrencilerden bunların doğruluğunu değerlendirmelerini istemiştir.
Buna göre;
I. Eşlenme sırasında kalıp olarak kullanılan zincirin baz dizilimi değişir.
II. Eşlenmede DNA'nın zincirlerinden yalnızca biri kalıp olarak kullanılır.
III. Eşlenme sonunda oluşan her DNA'da bir eski, bir yeni zincir bulunur.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız III",
    "Yalnız I",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kalıbı değişken sanma: kalıp zincirin baz dizilimi eşlenmede değişmez; yeni zincir onun karşısına kurulur.",
    "Kalıbın değiştiğini ve tek kalıp olduğunu sanma: iki zincir de kalıp olur ve hiçbirinin dizilimi değişmez.",
    "II'yi doğru sayma: iki zincir de kalıp olarak kullanılır; yalnızca birinin kopyalanması kalıtsal bilginin eksik aktarılması demektir."
  ],
  aciklama: `Eşlenmede iki zincir birbirinden ayrılır; her biri kalıp olur ve karşısına yeni bir zincir kurulur.
Adım 1: I. yargıyı incele. Kalıp zincir değişmeden kalır; yeni zincir onun karşısına kurulur. I yanlıştır.
Adım 2: II. yargıyı incele. Zincirlerin ikisi de kalıp olarak kullanılır. Biri kullanılsaydı oluşan iki DNA'dan biri eksik kalırdı. II yanlıştır.
Adım 3: III. yargıyı incele. Her kalıp zincir kendi yeni zinciriyle bir DNA oluşturur; böylece her DNA'da bir eski, bir yeni zincir bulunur. III doğrudur.
Sağlama: Dört zincirin ikisi eski, ikisi yeni olur; iki DNA'nın her birinde birer eski ve birer yeni zincir vardır.
Cevap A.`
},
{
  id: "fen-dn-351",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, DNA'daki nükleotidleri tanıtmak için dört kart hazırlamıştır. Kartlarda fosfat daire, şeker beşgen, organik baz ise içine baz harfi yazılmış dikdörtgenle gösterilmiştir. Öğrenci, kartlardan yalnızca birinin hem eksiksiz bir nükleotidi hem de timin nükleotidini doğru gösterdiğini söylemiştir.
**Buna göre bu kart hangisidir?**`,
  gorsel: `<svg viewBox="0 0 520 226" role="img" aria-label="K, L, M ve N ile gösterilen dört kart; her kartta fosfat, şeker ve organik baz parçaları farklı biçimde birleştirilmiştir"><line x1="36" y1="60" x2="78" y2="60" stroke="currentColor" stroke-width="3"/><circle cx="36" cy="60" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><polygon points="78.0,39.0 98.0,53.5 90.3,77.0 65.7,77.0 58.0,53.5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><line x1="78" y1="82" x2="78" y2="104" stroke="currentColor" stroke-width="2"/><rect x="58" y="104" width="40" height="34" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="78" y="128" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="70" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">K</text><polygon points="195.0,39.0 215.0,53.5 207.3,77.0 182.7,77.0 175.0,53.5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><line x1="195" y1="82" x2="195" y2="104" stroke="currentColor" stroke-width="2"/><rect x="175" y="104" width="40" height="34" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="195" y="128" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="195" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">L</text><circle cx="320" cy="60" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><line x1="320" y1="76" x2="320" y2="104" stroke="currentColor" stroke-width="2"/><rect x="300" y="104" width="40" height="34" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="320" y="128" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="320" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">M</text><line x1="411" y1="60" x2="453" y2="60" stroke="currentColor" stroke-width="3"/><circle cx="411" cy="60" r="16" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><polygon points="453.0,39.0 473.0,53.5 465.3,77.0 440.7,77.0 433.0,53.5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><line x1="453" y1="82" x2="453" y2="104" stroke="currentColor" stroke-width="2"/><rect x="433" y="104" width="40" height="34" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="453" y="128" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="445" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">N</text><circle cx="60" cy="204" r="12" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="78" y="209" font-size="15" text-anchor="start" fill="currentColor">fosfat</text><polygon points="180.0,189.0 194.3,199.4 188.8,216.1 171.2,216.1 165.7,199.4" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="200" y="209" font-size="15" text-anchor="start" fill="currentColor">şeker</text><rect x="300" y="190" width="28" height="28" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="336" y="209" font-size="15" text-anchor="start" fill="currentColor">organik baz</text></svg>`,
  secenekler: [
    "K kartı",
    "L kartı",
    "M kartı",
    "N kartı"
  ],
  dogru: 3,
  hatalar: [
    "Nükleotid çeşidini karıştırma: K kartı eksiksiz bir nükleotiddir ama organik bazı adenin olduğu için adenin nükleotididir.",
    "Eksik parçayı fark etmeme: L kartında fosfat yoktur; fosfat, şeker ve organik baz birlikte olmadıkça nükleotid olmaz.",
    "Şekerin yerini yanlış bilme: M kartında şeker yoktur ve fosfat doğrudan baza bağlanmıştır; nükleotidde fosfat ile baz arasında şeker bulunur.",
    null
  ],
  aciklama: `Bir nükleotid fosfat, şeker ve organik bazdan oluşur. Şeker ortadadır; fosfat da organik baz da şekere bağlanır. Nükleotid, taşıdığı organik baza göre adlandırılır.
Adım 1: Eksiksiz nükleotidi bul. Üç parçayı da taşıyan kartlar K ve N'dir. L'de fosfat, M'de şeker eksiktir.
Adım 2: K ve N'yi çeşit bakımından karşılaştır. K'daki organik baz adenin, N'dekiyle timindir.
Adım 3: Timin nükleotidi, organik bazı timin olan eksiksiz nükleotiddir. Bu kart N'dir.
Sağlama: M kartında da timin var ama şeker eksik; L kartında da timin var ama fosfat eksik. İkisi de nükleotid sayılmaz.
Cevap D.`
},
{
  id: "fen-dn-352",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kodlama oyununda DNA'nın organik bazları renklerle temsil edilmektedir. Bir öğrenci, DNA'nın bir zincirinin baz sırasını renk dizisi olarak yazmıştır. Karşı zincirin renk dizisini yazması istenmektedir.
**Buna göre karşı zincirin renk dizisi aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Organik baz</th><th>Renk</th></tr><tr><td>Adenin</td><td>Kırmızı</td></tr><tr><td>Timin</td><td>Mavi</td></tr><tr><td>Guanin</td><td>Yeşil</td></tr><tr><td>Sitozin</td><td>Sarı</td></tr></table><table class="tablo"><tr><th>Öğrencinin zinciri</th><td>kırmızı – yeşil – sarı – mavi – mavi</td></tr></table>`,
  secenekler: [
    "kırmızı – yeşil – sarı – mavi – mavi",
    "mavi – yeşil – sarı – kırmızı – kırmızı",
    "mavi – sarı – yeşil – kırmızı – kırmızı",
    "yeşil – kırmızı – mavi – sarı – sarı"
  ],
  dogru: 2,
  hatalar: [
    "Karşı zinciri aynı yazma: karşı zincir birinciyle aynı değil, onu tamamlayan zincirdir.",
    "Yalnızca adenin – timin çiftini çevirme: guaninin karşısı sitozin, sitozinin karşısı guanin olacağından yeşil ile sarı da yer değiştirmelidir.",
    null,
    "Çiftleri A – G ve T – C sanma: adeninin eşi timin, guaninin eşi sitozindir."
  ],
  aciklama: `Önce renkleri bazlara çevir, sonra eşleşme kuralını uygula, en sonda bazları yeniden renge çevir.
Adım 1: Renk dizisini baza çevir: kırmızı = adenin, yeşil = guanin, sarı = sitozin, mavi = timin. Zincir A – G – C – T – T olur.
Adım 2: Karşı zinciri bul: A → T, G → C, C → G, T → A, T → A. Karşı zincir T – C – G – A – A'dır.
Adım 3: Bazları renge çevir: T = mavi, C = sarı, G = yeşil, A = kırmızı.
Adım 4: Karşı zincirin renk dizisi mavi – sarı – yeşil – kırmızı – kırmızı olur.
Sağlama: Her basamakta eşleşen renkler: kırmızı – mavi, yeşil – sarı. Bu iki çift, A – T ve G – C çiftlerinin renkleridir.
Cevap C.`
},
{
  id: "fen-dn-353",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Dizini sıyıran bir çocuğun yara bölgesinde birkaç gün içinde yeni deri hücreleri oluşmuş ve yara kapanmıştır. Yeni hücrelerin her biri, yara çevresindeki bir deri hücresinin bir kez bölünmesiyle oluşmuştur. Bu bölünmeler sırasında hücrelerin DNA'ları kendini eşlemiştir.
Buna göre;
I. Yeni deri hücrelerinin DNA'sındaki baz dizilimi, çevredeki hücrelerin DNA'sındakiyle aynıdır.
II. Yeni deri hücrelerinin her birinin DNA'sındaki zincirlerden biri eski, diğeri yeni kurulmuştur.
III. Yeni deri hücrelerinin DNA'larındaki zincirlerden hiçbiri, çevredeki hücrelerin DNA'sındaki zincirlerle aynı dizilime sahip değildir.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "II. yargıyı atlama: bir kez eşlenen DNA'dan oluşan her DNA bir eski, bir yeni zincir taşır; yeni hücreler de bu DNA'lardan birini alır.",
    null,
    "I'i atlayıp III'ü doğru sayma: yeni zincir kalıbın eşi olarak kurulur ve kalıp olmayan eski zincirle aynı dizilimdedir; zincirlerin dizilimi çevredekilerle aynıdır.",
    "III. yargıyı da doğru sayma: eski zincir, çevredeki hücrenin DNA'sındaki zincirin kendisidir; yeni zincir de öbür eski zincirle aynı dizilimdedir."
  ],
  aciklama: `Hücre bölünmeden önce DNA'sını eşler: iki zincir ayrılır, her biri kalıp olur ve karşısına eşi kurulur. Böylece oluşan her DNA bir eski, bir yeni zincir taşır ve ilk DNA'nın aynısıdır.
Adım 1: I. yargıyı incele. Eşlenmede iki DNA da ilk DNA'nın baz dizilimini taşır. Yeni hücreler bu DNA'lardan birini aldığı için DNA'larının baz dizilimi çevredeki hücrelerinkiyle aynıdır. I doğrudur.
Adım 2: II. yargıyı incele. Bir kez eşlenen DNA'dan oluşan her DNA'da zincirlerden biri eski, öbürü yeni kurulandır. Yeni hücreler bir kez bölünmeyle oluştuğu için DNA'ları da böyledir. II doğrudur.
Adım 3: III. yargıyı incele. Eski zincir, çevredeki hücrenin DNA'sındaki zincirin kendisidir. Yeni zincir ise kalıp olmayan eski zincirle aynı dizilimdedir. Yani zincirlerin dizilimi çevredekilerle aynıdır. III yanlıştır.
Sağlama: Çevredeki DNA'nın zincirleri A – G ve T – C ise yeni hücrede de bir zincir A – G, öbürü T – C dizilimindedir.
Sık yapılan hata: "Yeni zincir yeni dizilim demektir" düşüncesi. Yeni zincir yeni kurulur ama dizilimi eskilerden biriyle aynıdır.
Cevap B.`
},
{
  id: "fen-dn-354",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Görselde, eşlenmesi yeni tamamlanmış bir DNA'nın beş basamaklı bir bölümü verilmiştir. Üst zincir kalıp olarak kullanılan eski zincir, alt zincir ise yeni kurulan zincirdir. 3. basamakta kural dışı bir baz çifti oluşmuştur. Eşlenmeyle oluşan öbür DNA'da böyle bir hata yoktur.
Buna göre;
I. Hücre hatayı onarırsa 3. basamak A – T olur.
II. Hata onarılmazsa bu hatalı DNA'nın geçtiği yavru hücreyle, öbür DNA'nın geçtiği yavru hücrenin ikisinde de kural dışı baz çifti bulunur.
III. Onarım sırasında 3. basamaktaki üst zincir bazı sitozine dönüşür.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 300 276" role="img" aria-label="Eşlenmiş DNA bölümü; 3. basamakta kural dışı baz çifti var"><text x="60" y="22" font-size="15" text-anchor="middle" fill="currentColor">Üst (kalıp)</text><text x="190" y="22" font-size="15" text-anchor="middle" fill="currentColor">Alt (yeni)</text><line x1="40" y1="34" x2="40" y2="266" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="210" y1="34" x2="210" y2="266" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="78" y1="58" x2="172" y2="58" stroke="currentColor" stroke-width="2"/><rect x="46" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="43" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="188" y="64" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="28" y="63" font-size="15" text-anchor="end" fill="currentColor">1</text><line x1="78" y1="104" x2="172" y2="104" stroke="currentColor" stroke-width="2"/><rect x="46" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="89" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="188" y="110" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="28" y="109" font-size="15" text-anchor="end" fill="currentColor">2</text><line x1="78" y1="150" x2="172" y2="150" stroke="currentColor" stroke-width="2"/><rect x="46" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="135" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="188" y="156" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="28" y="155" font-size="15" text-anchor="end" fill="currentColor">3</text><line x1="78" y1="196" x2="172" y2="196" stroke="currentColor" stroke-width="2"/><rect x="46" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="181" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="188" y="202" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="28" y="201" font-size="15" text-anchor="end" fill="currentColor">4</text><line x1="78" y1="242" x2="172" y2="242" stroke="currentColor" stroke-width="2"/><rect x="46" y="227" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="172" y="227" width="32" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="62" y="248" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="188" y="248" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="28" y="247" font-size="15" text-anchor="end" fill="currentColor">5</text></svg>`,
  secenekler: [
    "I ve II",
    "Yalnız I",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "II. yargıyı doğru sayma: hatalı DNA yalnızca bir yavru hücreye gider; öbür yavru hücre hatasız DNA'yı alır.",
    null,
    "I. yargıyı atlama: alttaki yeni zincirde adenin yerine kurala uygun olan timin gelirse 3. basamak A – T olur.",
    "II ve III'ü de doğru sayma: hata iki hücrede birden bulunmaz ve kalıp olan üst zincirin bazı onarımda değişmez."
  ],
  aciklama: `Eşlenmede kalıp olan eski zincirin bazları doğrudur; kural dışı baz yeni kurulan zincirdedir. Onarım, yeni zincirdeki bazı kurala uygun hâle getirir.
Adım 1: I. yargıyı incele. 3. basamakta üstte A, altta C var; A'nın eşi T'dir. Hücre hatayı onarırsa alttaki C yerine T gelir ve basamak A – T olur. I doğrudur.
Adım 2: II. yargıyı incele. Eşlenmeyle iki DNA oluşur, bölünmede biri bir yavru hücreye, öbürü diğerine gider. Hata yalnızca bu DNA'dadır; yani yalnızca bir yavru hücrede bulunur. II yanlıştır.
Adım 3: III. yargıyı incele. Üst zincir kalıptır; bazı değişmez, adenin olarak kalır. III yanlıştır.
Sağlama: Onarımdan sonra 3. basamak A – T olduğunda beş basamağın hepsi kurala uyar.
Cevap B.`
},
{
  id: "fen-dn-355",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, hücre bölünmesi sırasında kromozom oluşumunu araştırırken DNA ile ilgili yapıları defterine alt alta yazmıştır. Hücre bölünürken DNA'nın bazı proteinlerle birlikte sıkıca sarılıp paketlendiğini, bu paketlenmiş yapıya kromozom dendiğini öğrenmiştir.
**Buna göre aşağıdakilerden hangisi bir DNA molekülünün bir bölümü __değildir__?**`,
  gorsel: null,
  secenekler: [
    "Kromozomda DNA'yı saran proteinler",
    "Bir özelliği belirleyen nükleotid dizisi",
    "Karşılıklı eşleşen organik bazlar",
    "Art arda dizilen fosfat ve şekerler"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Geni DNA'nın dışında sanma: gen, DNA üzerinde bir özelliği belirleyen bölümdür; DNA'nın bir parçasıdır.",
    "Basamakları DNA'dan ayrı sanma: iki zinciri birbirine bağlayan karşılıklı organik bazlar DNA'nın basamaklarını oluşturur.",
    "Kenarları DNA'dan ayrı sanma: DNA'nın kenarları art arda dizilmiş fosfat ve şekerlerden oluşur."
  ],
  aciklama: `Kromozom, DNA'nın proteinlerle birlikte sarılıp paketlenmiş hâlidir. Yani proteinler kromozomun parçasıdır, DNA'nın parçası değildir.
Adım 1: Bir gen, DNA üzerindeki anlamlı nükleotid dizisidir; DNA'nın bir bölümüdür.
Adım 2: Karşılıklı eşleşen organik bazlar DNA'nın basamaklarını oluşturur; DNA'nın bölümüdür.
Adım 3: Fosfat ve şekerler DNA'nın kenarlarını oluşturur; bunlar da DNA'nın bölümüdür.
Adım 4: Proteinler ise DNA'nın çevresine sarıldığı yapılardır; DNA'nın içinde değil, kromozomdadır. DNA'nın bölümü değildir.
Sağlama: Nükleotidin yapısında protein bulunmaz; DNA nükleotidlerden oluştuğuna göre DNA'nın içinde protein bulunamaz.
Cevap A.`
},
{
  id: "fen-dn-356",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir hücrede DNA'nın kendini eşlemesi yeni tamamlanmıştır. Görselde, oluşan iki DNA'nın (K ve L) üç basamaklı birer bölümü verilmiştir. Her DNA'da soldaki zincir eski, sağdaki zincir yeni kurulandır. Yeni zincirlerden birinde bir basamakta kural dışı bir baz yerleşmiştir. Hücre bu hatayı onaramadan bölünecek; K birinci yavru hücreye, L ikinci yavru hücreye geçecektir. Eski zincirlerin eşlenmede kalıp olarak kullanıldığı bilinmektedir.
**Buna göre hata onarılmazsa aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 420 208" role="img" aria-label="K ve L ile gösterilen, eşlenmeyle oluşmuş iki DNA bölümü"><text x="80" y="24" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">K DNA'sı</text><text x="39" y="46" font-size="15" text-anchor="middle" fill="currentColor">eski</text><text x="121" y="46" font-size="15" text-anchor="middle" fill="currentColor">yeni</text><line x1="20" y1="58" x2="20" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="140" y1="58" x2="140" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="56" y1="82" x2="104" y2="82" stroke="currentColor" stroke-width="2"/><rect x="26" y="67" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="67" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="41" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="119" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><line x1="56" y1="128" x2="104" y2="128" stroke="currentColor" stroke-width="2"/><rect x="26" y="113" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="113" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="41" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="119" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><line x1="56" y1="174" x2="104" y2="174" stroke="currentColor" stroke-width="2"/><rect x="26" y="159" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="159" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="41" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="119" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="330" y="24" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">L DNA'sı</text><text x="289" y="46" font-size="15" text-anchor="middle" fill="currentColor">eski</text><text x="371" y="46" font-size="15" text-anchor="middle" fill="currentColor">yeni</text><line x1="270" y1="58" x2="270" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="390" y1="58" x2="390" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="306" y1="82" x2="354" y2="82" stroke="currentColor" stroke-width="2"/><rect x="276" y="67" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="354" y="67" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="291" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="369" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><line x1="306" y1="128" x2="354" y2="128" stroke="currentColor" stroke-width="2"/><rect x="276" y="113" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="354" y="113" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="291" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="369" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><line x1="306" y1="174" x2="354" y2="174" stroke="currentColor" stroke-width="2"/><rect x="276" y="159" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="354" y="159" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="291" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="369" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text></svg>`,
  secenekler: [
    "Her iki yavru hücrenin DNA'sında da kural dışı baz çifti bulunur.",
    "Birinci yavru hücrenin DNA'sında kural dışı baz çifti bulunur.",
    "Hata, kalıp olan eski zincirlerin dizilimini de değiştirmiştir.",
    "Kural dışı baz çifti yalnızca ikinci yavru hücrenin DNA'sında bulunur."
  ],
  dogru: 3,
  hatalar: [
    "Hatanın yayıldığını sanma: hata yalnızca bir yeni zincirde olduğu için iki DNA'dan yalnızca birinde bulunur; K'daki üç basamak da kurala uyar.",
    "Hatalı DNA'yı karıştırma: K'de A – T, G – C ve T – A çiftleri vardır, hepsi kurala uygundur; hata L'dedir.",
    "Hatayı kalıba yükleme: eski zincirler kalıp olduğu için dizilimleri değişmez; kural dışı baz yeni kurulan zincirdedir.",
    null
  ],
  aciklama: `Eşlenmede eski zincir kalıp olur ve değişmez; yeni zincir kalıbın karşısına kurulur. Hata, yeni kurulan zincirde oluşur.
Adım 1: K'yi denetle. A – T, G – C, T – A: üç basamak da kurala uyuyor. K'de hata yok.
Adım 2: L'yi denetle. T – A ve C – G kurala uyuyor, 3. basamak A – G. Adeninin eşi timin olmalıydı; guanin yerleşmiş. Hata L'dedir.
Adım 3: Hata yeni zincirdedir (eski zincir değişmez). Bu yüzden eski zincirlerin dizilimi değişmemiştir.
Adım 4: K ve L ayrı yavru hücrelere geçeceği için kural dışı baz çifti yalnızca L'yi alan ikinci yavru hücrede bulunur.
Sağlama: İki DNA'dan yalnızca biri hatalı olduğu için hata en fazla bir yavru hücrede görülebilir.
Cevap D.`
},
{
  id: "fen-dn-357",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, DNA ile ilgili ödevi için bir model hazırlamıştır. Modelde, dört farklı renkte boncuğun tek bir ipe dizilmesiyle yapılmış uzun bir kolye DNA'yı, kolyedeki belirli bir desenli bölüm bir geni, tek bir boncuk bir nükleotidi, kolyenin çekmeceye sığması için ipin kendi üzerine yumak yapılmış hâli ise kromozomu temsil etmektedir. Öğrenci, modelin DNA'yı her yönüyle yansıtıp yansıtmadığını tartışmaktadır.
Buna göre;
I. Kolye tek bir ipten oluştuğu için model, DNA'nın iki zincirli yapısını yansıtmaz.
II. Yumağın yalnızca iple yapılması, kromozomun DNA'nın proteinlerle birlikte paketlenmesiyle oluştuğunu yansıtmaz.
III. Boncukların dört renkte olması, DNA'da dört çeşit organik bazın bulunmasıyla uyumsuzdur.
**yargılarından hangileri modelin DNA'yı doğru yansıtmayan yönleriyle ilgilidir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "I ve II",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "II. yargıyı atlama: yumak yalnızca iple yapıldığı için kromozomda DNA'nın proteinlerle birlikte sarıldığı bilgisi modelde yoktur.",
    "III. yargıyı doğru sayma: dört renk, dört çeşit organik bazla uyumludur; bu yön modelin doğru yansıttığı yöndür.",
    null,
    "I. yargıyı atlama: DNA iki zincirli olduğu için tek ipli kolye bu yönüyle modelin eksiğidir."
  ],
  aciklama: `Bir model gerçek yapıyı basitleştirir; her yönüyle doğru olmayabilir. Burada soru, modelin DNA'ya uymayan yönlerini soruyor.
Adım 1: I. yargıyı incele. DNA iki zincirden oluşur; kolye ise tek ipten yapılmış. Model, DNA'nın iki zincirli yapısını yansıtmaz. I, modelin eksik yönüdür.
Adım 2: II. yargıyı incele. Kromozom, DNA'nın proteinlerle birlikte sıkıca sarılıp paketlenmiş hâlidir. Yumak yalnızca iple yapıldığı için protein bilgisi yoktur. II de modelin eksik yönüdür.
Adım 3: III. yargıyı incele. DNA'da dört çeşit organik baz, dolayısıyla dört çeşit nükleotid vardır. Dört renk boncuk bununla uyumludur. Bu yön modelin doğru yönüdür; "uyumsuzdur" demek yanlıştır.
Adım 4: Modelin doğru yansıtmayan yönleri I ve II'dir.
Sağlama: III doğru yansıtılan bir yön olduğu için soruda istenen "doğru yansıtmayan" yönler arasında yer almaz.
Cevap C.`
},
{
  id: "fen-dn-358",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir hücrede DNA'nın beş basamaklı dört ayrı bölümü (K, L, M ve N) eşlenmiş; her bölümde bir basamakta kural dışı bir baz çifti oluşmuştur. Hücre, her bölümdeki hatayı onarmıştır. Üst zincir kalıp olarak kullanılan eski zincirdir ve değişmemiştir; onarımda yalnızca alt zincirdeki (yeni zincir) bazlardan biri değiştirilmiştir. Üst zincir ile alt zincirin onarımdan önceki ve sonraki baz sıraları tabloda verilmiştir.
**Buna göre hangi bölümdeki onarım, DNA'yı eşleşme kuralına uygun hâle __getirmemiştir__?**`,
  gorsel: `<table class="tablo"><tr><th>Bölüm</th><th>Üst zincir (kalıp)</th><th>Alt zincir (onarımdan önce)</th><th>Alt zincir (onarımdan sonra)</th></tr><tr><td>K</td><td>G – A – T – C – C</td><td>C – T – A – G – A</td><td>C – T – A – G – T</td></tr><tr><td>L</td><td>T – T – C – A – G</td><td>A – A – C – T – C</td><td>A – A – G – T – C</td></tr><tr><td>M</td><td>A – C – G – G – T</td><td>T – G – G – C – A</td><td>T – G – C – C – A</td></tr><tr><td>N</td><td>C – T – A – G – A</td><td>G – A – T – C – A</td><td>G – A – T – C – T</td></tr></table>`,
  secenekler: [
    "K bölümü",
    "L bölümü",
    "M bölümü",
    "N bölümü"
  ],
  dogru: 0,
  hatalar: [
    null,
    "L bölümündeki onarım doğrudur: 3. basamaktaki C – C çifti, alt zincire guanin yazılarak C – G olmuş ve beş basamak da kurala uymuştur.",
    "M bölümündeki onarım doğrudur: 3. basamaktaki G – G çifti, alt zincire sitozin yazılarak G – C olmuş ve beş basamak da kurala uymuştur.",
    "N bölümündeki onarım doğrudur: 5. basamaktaki A – A çifti, alt zincire timin yazılarak A – T olmuş ve beş basamak da kurala uymuştur."
  ],
  aciklama: `DNA'daki hatalar hücre tarafından onarılabilir. Onarımın başarılı olması için onarımdan sonra her basamakta eşleşme kuralına uyulmalıdır: adenin – timin, guanin – sitozin.
Adım 1: K bölümünde üst G – A – T – C – C, onarımdan önce alt C – T – A – G – A. Yalnızca 5. basamak (C – A) hatalıdır. Onarımdan sonra bu basamak C – T olmuştur; sitozinin eşi timin değil guanindir. Hata giderilmemiştir.
Adım 2: L bölümünde hatalı basamak 3. basamaktır (C – C). Onarımdan sonra alt zincir A – A – G – T – C olur; basamaklar T – A, T – A, C – G, A – T, G – C olur ve hepsi kurala uyar.
Adım 3: M bölümünde hatalı basamak 3. basamaktır (G – G). Onarımdan sonra alt zincir T – G – C – C – A olur; A – T, C – G, G – C, G – C, T – A çiftleri kurala uyar.
Adım 4: N bölümünde hatalı basamak 5. basamaktır (A – A). Onarımdan sonra alt zincir G – A – T – C – T olur; C – G, T – A, A – T, G – C, A – T çiftleri kurala uyar.
Sağlama: Onarımdan sonra yalnızca K bölümünde kural dışı bir baz çifti (C – T) kalmıştır.
Sık yapılan hata: Hatalı baz değiştirildi diye onarımı başarılı saymak. Yeni baz da kalıptaki bazın eşi olmalıdır.
Cevap A.`
},
{
  id: "fen-dn-359",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir hücrenin DNA'sının iki zinciri K ve L'dir. DNA kendini eşlediğinde K ve L ayrılmış, ikisi de kalıp olarak kullanılmış ve iki DNA oluşmuştur. DNA 1, K zincirini ve onun karşısına kurulan M zincirini; DNA 2 ise L zincirini ve onun karşısına kurulan N zincirini içermektedir. Zincirlerle ilgili bilgiler tabloda verilmiştir.
Buna göre;
I. K zincirinin baz sırası G – A – T – T – C – A'dır.
II. N zincirinin baz sırası G – A – T – T – C – A'dır.
III. L zincirinin baz sırası G – A – T – T – C – A'dır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Zincir</th><th>Bulunduğu DNA</th><th>Durumu</th><th>Baz sırası</th></tr><tr><td>K</td><td>DNA 1</td><td>Eski zincir</td><td>Bilinmiyor</td></tr><tr><td>M</td><td>DNA 1</td><td>Yeni zincir</td><td>G – A – T – T – C – A</td></tr><tr><td>L</td><td>DNA 2</td><td>Eski zincir</td><td>Bilinmiyor</td></tr><tr><td>N</td><td>DNA 2</td><td>Yeni zincir</td><td>Bilinmiyor</td></tr></table>`,
  secenekler: [
    "Yalnız III",
    "Yalnız I",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yeni zinciri kalıbın aynısı sanma: M, K'nın karşısına kurulduğu için K'nın eşidir; K'nın dizilimi M'ninkiyle aynı değil, tamamlayıcısıdır (C – T – A – A – G – T).",
    "Yeni zincirleri aynı sanma: N, L'nin eşi olarak kurulur. L, M ile aynı dizilimde olduğundan N, M'nin değil K'nın dizilimini (C – T – A – A – G – T) taşır; K'nın dizilimi de M'ninkinden farklıdır.",
    "II. yargıyı doğru sayma: N, L'nin eşidir ve K ile aynı dizilimdedir (C – T – A – A – G – T); M'nin dizilimini taşıyan zincir L'dir."
  ],
  aciklama: `Eşlenmede yeni zincir kalıbın eşi olarak kurulur. Eski iki zincir birbirinin eşi olduğundan, yeni zincirlerden her biri kalıp olmayan eski zincirle aynı dizilimde olur.
Adım 1: M, K'nın karşısına kurulan yeni zincirdir; M = G – A – T – T – C – A ise K onun eşidir: C – T – A – A – G – T. I yanlıştır.
Adım 2: K ve L ilk DNA'nın iki zinciridir; L, K'nın eşidir: G – A – T – T – C – A. Yani L ile M aynı dizilimdedir. III doğrudur.
Adım 3: N, L'nin karşısına kurulan yeni zincirdir; L'nin eşidir: C – T – A – A – G – T. Bu dizilim K ile aynıdır, M'ninkiyle değil. II yanlıştır.
Sağlama: DNA 1: K (C – T – A – A – G – T) ve M (G – A – T – T – C – A). DNA 2: L (G – A – T – T – C – A) ve N (C – T – A – A – G – T). İki DNA da aynı çiftleri taşır.
Sık yapılan hata: Yeni zincirin kalıpla aynı dizilimde olduğunu düşünmek. Yeni zincir kalıbın eşidir.
Cevap A.`
},
{
  id: "fen-dn-360",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, nükleotid, gen, DNA ve kromozom kavramlarından üçünü K, L ve M harfleriyle kodlamıştır. Kodlarla ilgili defterine şu bilgileri yazmıştır:
K, L'nin içinde yer alan bir bölümdür.
L, M'nin içinde yer alan bir bölümdür.
Öğrenci, hangi üç kavramı kullandığını ve hangi harfi hangisine verdiğini not etmeyi unutmuştur.
**Buna göre aşağıdaki eşleştirmelerden hangisi öğrencinin kodlaması __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "K: Gen, L: DNA, M: Kromozom",
    "K: Nükleotid, L: Gen, M: DNA",
    "K: DNA, L: Gen, M: Nükleotid",
    "K: Nükleotid, L: DNA, M: Kromozom"
  ],
  dogru: 2,
  hatalar: [
    "Geçerli eşleştirmeyi hatalı sanma: gen DNA'nın, DNA da kromozomun içinde yer alır; K < L < M sırası sağlanır.",
    "Geçerli eşleştirmeyi hatalı sanma: nükleotid genin, gen de DNA'nın içinde yer alır; K < L < M sırası sağlanır.",
    null,
    "Geçerli eşleştirmeyi hatalı sanma: nükleotid DNA'nın, DNA da kromozomun içinde yer alır; K < L < M sırası sağlanır."
  ],
  aciklama: `Bilgilere göre üç kavram "küçük – orta – büyük" sırasında iç içedir: K en küçük, L ortada, M en büyüktür. Hücredeki yapılar büyükten küçüğe kromozom, DNA, gen, nükleotid diye sıralanır.
Adım 1: Seçenekleri K < L < M sırasına göre denetle.
Adım 2: Gen < DNA < kromozom: doğru sıra. Nükleotid < gen < DNA: doğru sıra. Nükleotid < DNA < kromozom: doğru sıra (nükleotid DNA'nın içindedir, DNA da kromozomun).
Adım 3: DNA – gen – nükleotid: K = DNA en büyük, M = nükleotid en küçük olurdu. Bu, "K, L'nin içinde" bilgisine ters. Bu eşleştirme olamaz.
Sağlama: Olamayan eşleştirme, küçük olması gereken K'ye DNA'yı verdiği için büyüklük sırasını bozuyor.
Sık yapılan hata: Geni DNA'dan büyük sanmak.
Cevap C.`
},
{
  id: "fen-dn-361",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, DNA'nın yapısını göstermek için iki model (X ve Y) hazırlamıştır. Modellerin beş basamaklı bölümleri görselde verilmiştir. Basamaklar yukarıdan aşağıya doğru numaralanmıştır.
Buna göre;
I. X modeli, DNA'nın yapısına uygundur.
II. X modelinde 4. basamaktaki alt zincir bazı adenin yapılırsa model DNA'nın yapısına uygun olur.
III. Y modelinin DNA'nın yapısına uygun olması için tek bir bazı değiştirmek yeterlidir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 420 278" role="img" aria-label="X ve Y ile gösterilen iki DNA modeli"><text x="96" y="24" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">X modeli</text><line x1="36" y1="36" x2="36" y2="268" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="156" y1="36" x2="156" y2="268" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="72" y1="60" x2="120" y2="60" stroke="currentColor" stroke-width="2"/><rect x="42" y="45" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="120" y="45" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="57" y="66" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="135" y="66" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="24" y="65" font-size="15" text-anchor="end" fill="currentColor">1</text><line x1="72" y1="106" x2="120" y2="106" stroke="currentColor" stroke-width="2"/><rect x="42" y="91" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="120" y="91" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="57" y="112" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="135" y="112" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="24" y="111" font-size="15" text-anchor="end" fill="currentColor">2</text><line x1="72" y1="152" x2="120" y2="152" stroke="currentColor" stroke-width="2"/><rect x="42" y="137" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="120" y="137" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="57" y="158" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="135" y="158" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="24" y="157" font-size="15" text-anchor="end" fill="currentColor">3</text><line x1="72" y1="198" x2="120" y2="198" stroke="currentColor" stroke-width="2"/><rect x="42" y="183" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="120" y="183" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="57" y="204" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="135" y="204" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="24" y="203" font-size="15" text-anchor="end" fill="currentColor">4</text><line x1="72" y1="244" x2="120" y2="244" stroke="currentColor" stroke-width="2"/><rect x="42" y="229" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="120" y="229" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="57" y="250" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="135" y="250" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="24" y="249" font-size="15" text-anchor="end" fill="currentColor">5</text><text x="346" y="24" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">Y modeli</text><line x1="286" y1="36" x2="286" y2="268" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="406" y1="36" x2="406" y2="268" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="322" y1="60" x2="370" y2="60" stroke="currentColor" stroke-width="2"/><rect x="292" y="45" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="370" y="45" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="307" y="66" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="385" y="66" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="274" y="65" font-size="15" text-anchor="end" fill="currentColor">1</text><line x1="322" y1="106" x2="370" y2="106" stroke="currentColor" stroke-width="2"/><rect x="292" y="91" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="370" y="91" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="307" y="112" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="385" y="112" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="274" y="111" font-size="15" text-anchor="end" fill="currentColor">2</text><line x1="322" y1="152" x2="370" y2="152" stroke="currentColor" stroke-width="2"/><rect x="292" y="137" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="370" y="137" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="307" y="158" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="385" y="158" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="274" y="157" font-size="15" text-anchor="end" fill="currentColor">3</text><line x1="322" y1="198" x2="370" y2="198" stroke="currentColor" stroke-width="2"/><rect x="292" y="183" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="370" y="183" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="307" y="204" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="385" y="204" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="274" y="203" font-size="15" text-anchor="end" fill="currentColor">4</text><line x1="322" y1="244" x2="370" y2="244" stroke="currentColor" stroke-width="2"/><rect x="292" y="229" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="370" y="229" width="30" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="307" y="250" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="385" y="250" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="274" y="249" font-size="15" text-anchor="end" fill="currentColor">5</text></svg>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "X modelindeki hatayı görmeme: 4. basamak T – C'dir; timinin eşi adenindir, bu yüzden model uygun değildir.",
    null,
    "I. yargıyı doğru sayma: X'in 4. basamağındaki T – C çifti kurala aykırıdır.",
    "III. yargıyı doğru sayma: Y'de iki basamak (3. ve 5.) hatalıdır; tek baz değişikliği ikisini birden düzeltemez."
  ],
  aciklama: `Bir modelin DNA'ya uygun olması için her basamağın A – T ya da G – C olması gerekir.
Adım 1: X'i denetle: 1. A – T, 2. G – C, 3. C – G, 5. A – T doğru. 4. basamak T – C: hatalı. Yani X, DNA'ya uygun değildir. I yanlıştır.
Adım 2: II. yargıyı incele. 4. basamakta üstte timin var; eşi adenindir. Alttaki C yerine A yazılırsa T – A olur ve X uygun hâle gelir. II doğrudur.
Adım 3: Y'yi denetle: 3. basamak C – C ve 5. basamak G – G hatalıdır. İki ayrı basamağın düzeltilmesi gerektiği için tek baz değişikliği yetmez. III yanlıştır.
Sağlama: X'te bir, Y'de iki hatalı basamak vardır; düzeltme sayısı hatalı basamak sayısı kadardır.
Cevap B.`
},
{
  id: "fen-dn-362",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Görselde, bir DNA'nın kendini eşlemeden önceki hâli ile eşlenme sonunda oluşan DNA 1 ve DNA 2 verilmiştir. Eşlenmeden önceki DNA'nın zincirleri a ve b, eşlenmede kurulan yeni zincirler c ve d ile gösterilmiştir. DNA 1'de a zinciri, DNA 2'de b zinciri kalıp olarak kullanılmıştır; yeni zincirlerin bazları soru işaretiyle (?) belirtilmiştir.
Buna göre;
I. d zincirinin baz sırası, a zincirinin baz sırasıyla aynıdır.
II. c ve d zincirleri birbirinin tamamlayıcısıdır.
III. DNA 1 ile DNA 2'nin baz dizilimleri birbirinden farklıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<svg viewBox="-10 0 470 254" role="img" aria-label="Eşlenmeden önceki DNA ile eşlenme sonunda oluşan iki DNA"><text x="59" y="24" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">Eşlenmeden önce</text><text x="32" y="46" font-size="15" text-anchor="middle" fill="currentColor">a</text><text x="86" y="46" font-size="15" text-anchor="middle" fill="currentColor">b</text><line x1="14" y1="58" x2="14" y2="244" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="104" y1="58" x2="104" y2="244" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="48" y1="82" x2="70" y2="82" stroke="currentColor" stroke-width="2"/><rect x="20" y="67" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="70" y="67" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="34" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="84" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><line x1="48" y1="128" x2="70" y2="128" stroke="currentColor" stroke-width="2"/><rect x="20" y="113" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="70" y="113" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="34" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="84" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><line x1="48" y1="174" x2="70" y2="174" stroke="currentColor" stroke-width="2"/><rect x="20" y="159" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="70" y="159" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="34" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="84" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><line x1="48" y1="220" x2="70" y2="220" stroke="currentColor" stroke-width="2"/><rect x="20" y="205" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="70" y="205" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="34" y="226" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="84" y="226" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="234" y="24" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">DNA 1</text><text x="207" y="46" font-size="15" text-anchor="middle" fill="currentColor">a</text><text x="261" y="46" font-size="15" text-anchor="middle" fill="currentColor">c</text><line x1="189" y1="58" x2="189" y2="244" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="279" y1="58" x2="279" y2="244" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="223" y1="82" x2="245" y2="82" stroke="currentColor" stroke-width="2"/><rect x="195" y="67" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="245" y="67" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="209" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="259" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><line x1="223" y1="128" x2="245" y2="128" stroke="currentColor" stroke-width="2"/><rect x="195" y="113" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="245" y="113" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="209" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="259" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><line x1="223" y1="174" x2="245" y2="174" stroke="currentColor" stroke-width="2"/><rect x="195" y="159" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="245" y="159" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="209" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="259" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><line x1="223" y1="220" x2="245" y2="220" stroke="currentColor" stroke-width="2"/><rect x="195" y="205" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="245" y="205" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="209" y="226" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="259" y="226" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><text x="399" y="24" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">DNA 2</text><text x="372" y="46" font-size="15" text-anchor="middle" fill="currentColor">b</text><text x="426" y="46" font-size="15" text-anchor="middle" fill="currentColor">d</text><line x1="354" y1="58" x2="354" y2="244" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="444" y1="58" x2="444" y2="244" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><line x1="388" y1="82" x2="410" y2="82" stroke="currentColor" stroke-width="2"/><rect x="360" y="67" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="410" y="67" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="374" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">C</text><text x="424" y="88" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><line x1="388" y1="128" x2="410" y2="128" stroke="currentColor" stroke-width="2"/><rect x="360" y="113" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="410" y="113" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="374" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">A</text><text x="424" y="134" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><line x1="388" y1="174" x2="410" y2="174" stroke="currentColor" stroke-width="2"/><rect x="360" y="159" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="410" y="159" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="374" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">T</text><text x="424" y="180" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><line x1="388" y1="220" x2="410" y2="220" stroke="currentColor" stroke-width="2"/><rect x="360" y="205" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="410" y="205" width="28" height="30" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="374" y="226" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">G</text><text x="424" y="226" font-size="17" font-weight="bold" text-anchor="middle" fill="var(--vurgu)">?</text><text x="158" y="110" font-size="22" text-anchor="middle" fill="currentColor">→</text></svg>`,
  secenekler: [
    "Yalnız II",
    "I ve III",
    "II ve III",
    "I ve II"
  ],
  dogru: 3,
  hatalar: [
    "I. yargıyı atlama: d, b'nin karşısına kurulur; b'nin karşısına gelen dizilim a'nın dizilimidir. Bu yüzden d, a ile aynıdır.",
    "III. yargıyı doğru sayma: iki DNA da ilk DNA'nın aynısıdır, dizilimleri birbirinden farklı değildir.",
    "I'i atlayıp III'ü doğru sayma: d zinciri a ile aynı dizilimdedir, iki DNA'nın dizilimleri ise aynıdır.",
    null
  ],
  aciklama: `Eşlenmede iki zincir ayrılır, her biri kalıp olur. Kalıbın karşısına bazlar eşleşme kuralıyla dizilir.
Adım 1: a zincirinin bazları G – T – A – C; b zinciri onun tamamlayıcısı olduğu için C – A – T – G'dir.
Adım 2: c, a'nın karşısına kurulur: C – A – T – G. Bu, b'nin dizilimidir.
Adım 3: d, b'nin karşısına kurulur: G – T – A – C. Bu, a'nın dizilimidir. I doğrudur.
Adım 4: c (C – A – T – G) ile d (G – T – A – C) birbirinin tamamlayıcısıdır. II doğrudur.
Adım 5: DNA 1: a ile c (G – T – A – C / C – A – T – G). DNA 2: b ile d (C – A – T – G / G – T – A – C). İki DNA'da da aynı basamaklar aynı çiftleri oluşturur; dizilimleri aynıdır. III yanlıştır.
Sağlama: Eşlenme kalıtsal bilgiyi değiştirmeden kopyaladığı için DNA 1, DNA 2 ve ilk DNA'nın baz dizilimleri aynıdır.
Cevap D.`
},
{
  id: "fen-dn-363",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, nükleotid, gen, DNA ve kromozom yapılarında hangi bileşenlerin bulunduğunu araştırmış ve sonuçları tabloya işlemiştir.
Buna göre;
I. Tablo, proteinin gen ve DNA'nın yapısına girmediğini gösterir.
II. Tablodaki dört yapının hepsinde organik baz bulunur.
III. Kromozom, tablodaki diğer üç yapıdan farklı olarak protein de içerir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Yapı</th><th>Fosfat</th><th>Şeker</th><th>Organik baz</th><th>Protein</th></tr><tr><td>Nükleotid</td><td>Var</td><td>Var</td><td>Var</td><td>Yok</td></tr><tr><td>Gen</td><td>Var</td><td>Var</td><td>Var</td><td>Yok</td></tr><tr><td>DNA</td><td>Var</td><td>Var</td><td>Var</td><td>Yok</td></tr><tr><td>Kromozom</td><td>Var</td><td>Var</td><td>Var</td><td>Var</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "II ve III'ü atlama: tablo proteinin yalnızca kromozomda bulunduğunu, gen ve DNA'da bulunmadığını gösterir; bu yüzden I de doğrudur.",
    "III. yargıyı atlama: tabloda protein yalnızca kromozom satırında \"Var\" olarak işaretlenmiştir.",
    "I. yargıyı atlama: gen ve DNA satırlarında protein \"Yok\" olarak işaretlenmiştir.",
    null
  ],
  aciklama: `Tabloyu satır satır oku. Kromozom, DNA'nın proteinlerle birlikte sarılıp paketlenmiş hâlidir; nükleotid, gen ve DNA'da ise protein yoktur.
Adım 1: I. yargıyı incele. Gen ve DNA satırlarında protein sütunu "Yok". Tablo, proteinin bu yapılara girmediğini gösterir. I doğrudur.
Adım 2: II. yargıyı incele. Organik baz sütununda dört satırda da "Var" yazıyor. II doğrudur.
Adım 3: III. yargıyı incele. Protein sütununda yalnızca kromozom satırı "Var"; diğer üç yapının bileşenlerine kromozom ek olarak protein de taşır. III doğrudur.
Adım 4: Üç yargı da doğrudur.
Sağlama: Kromozomun içinde DNA bulunduğu için fosfat, şeker ve organik baz da bulunur; üstüne protein eklenir.
Cevap D.`
},
{
  id: "fen-dn-364",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, iki farklı örnekten (K ve L) elde ettiği DNA'nın aynı bölgesindeki altı basamağı incelemiştir. Üst zincirlerin bazlarını okuyup tabloya yazmış, alt zincirlerin bazlarını ise eşleşme kuralına göre tamamlayarak defterine geçirmiştir. Her iki örnekte de üst ve alt zincirler tam olarak eşleşmiştir.
**Buna göre K ve L'nin alt zincirleriyle ilgili aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Örnek</th><th>Üst zincirin baz sırası</th></tr><tr><td>K</td><td>A – G – C – T – T – A</td></tr><tr><td>L</td><td>A – G – C – T – C – A</td></tr></table>`,
  secenekler: [
    "Alt zincirlerin yalnızca 4. basamağı farklıdır.",
    "Alt zincirlerin yalnızca 5. basamağı farklıdır.",
    "Alt zincirlerin hiçbir basamağı farklı değildir.",
    "Alt zincirlerin baz çeşitleri farklıdır."
  ],
  dogru: 1,
  hatalar: [
    "Farkın yerini yanlış belirleme: 4. basamakta iki üst zincirde de timin vardır; fark 5. basamaktadır (timin ve sitozin).",
    null,
    "Üst zincirdeki farkı alt zincire yansıtmama: üst zincirler 5. basamakta farklı olduğundan, onları tamamlayan alt zincirler de 5. basamakta farklıdır.",
    "Çeşit ile sırayı karıştırma: iki alt zincirde de aynı dört baz bulunur; fark çeşitte değil, 5. basamaktaki bazdadır."
  ],
  aciklama: `Alt zincir, üst zincirin tamamlayıcısıdır. Üst zincirlerin farklı olduğu yerde alt zincirler de farklı olur.
Adım 1: Üst zincirleri basamak basamak karşılaştır. 1.–4. basamaklar aynı (A, G, C, T), 6. basamak aynı (A). 5. basamakta K'de T, L'de C var.
Adım 2: Alt zincirleri yaz. K: T – C – G – A – A – T. L: T – C – G – A – G – T.
Adım 3: Alt zincirlerde yalnızca 5. basamak farklıdır: K'de A, L'de G.
Adım 4: Alt zincirlerde bulunan bazların çeşitleri (T, C, G, A) iki örnekte de aynıdır; fark sıradadır.
Sağlama: Üstte bir basamak farklıysa altta da o basamak farklı olur; farkın yeri değişmez.
Cevap B.`
},
{
  id: "fen-dn-365",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir DNA molekülünün 1. zincirinde adenin, guanin ve sitozin bazları bulunmakta; timin bazı bulunmamaktadır. Bu DNA kendini eşlemiş ve iki DNA oluşmuştur. DNA I, 1. zinciri; DNA II ise 2. zinciri kalıp olarak kullanmıştır.
Buna göre;
I. DNA I'in yeni zincirinde adenin bazı bulunmaz.
II. DNA II'nin eski zincirinde sitozin bazı bulunmaz.
III. DNA II'nin yeni zincirinde timin bazı bulunmaz.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I ve III",
    "Yalnız II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Karşı zincirde baz çeşitlerinin aynı kaldığını sanma: 1. zincirde guanin bulunduğundan 2. zincirde sitozin bulunur, II yanlıştır; I ve III ise doğrudur.",
    "I'i atlayıp II'yi doğru sayma: 1. zincirde timin bulunmadığından kalıbın karşısına kurulan yeni zincirde adenin bulunmaz, I doğrudur; II ise 2. zincirde sitozin bulunduğu için yanlıştır.",
    "II'yi de doğru sayma: 2. zincir, 1. zincirdeki guaninin eşi olan sitozini taşır; bu yüzden sitozin bulunmaz demek yanlıştır."
  ],
  aciklama: `Eşleşme kuralı: adenin – timin, guanin – sitozin. Bir zincirde timin yoksa karşısındaki zincirde adenin olmaz; bir zincirde guanin varsa karşısında sitozin bulunur.
Adım 1: I. yargıyı incele. DNA I'in yeni zinciri 1. zincirin karşısına kurulur. 1. zincirde timin olmadığı için yeni zincirde adenin bulunmaz. I doğrudur.
Adım 2: II. yargıyı incele. DNA II'nin eski zinciri 2. zincirdir. 1. zincirde guanin bulunduğundan karşısındaki 2. zincirde sitozin bulunur. II yanlıştır.
Adım 3: III. yargıyı incele. DNA II'nin yeni zinciri 2. zincirin karşısına kurulur. 2. zincirin eşi, yani yeni zincir, 1. zincirle aynı dizilimdedir. 1. zincirde timin olmadığı için yeni zincirde de timin bulunmaz. III doğrudur.
Sağlama: 1. zincir A – G – C ise 2. zincir T – C – G olur. DNA I'in yeni zinciri T – C – G (adenin yok), DNA II'nin yeni zinciri A – G – C (timin yok) olur; 2. zincirde sitozin vardır.
Sık yapılan hata: Karşı zincirde de aynı baz çeşitleri bulunur sanmak. Karşı zincirde bazlar eşleriyle değişir.
Cevap A.`
},
{
  id: "fen-dn-366",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, bir sahilden topladığı yedi deri örneğinin en az kaç farklı canlıdan alınmış olabileceğini belirlemek istemektedir. Örneklerin hücrelerindeki kromozom sayısı ile DNA'nın aynı bölgesinin bir zincirindeki baz sırası tabloda verilmiştir. Aynı canlının bütün vücut hücreleri aynı sayıda kromozom ve aynı DNA taşır.
**Buna göre bu örnekler en az kaç farklı canlıdan alınmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Örnek</th><th>Kromozom sayısı</th><th>İncelenen bölgenin baz sırası</th></tr><tr><td>1</td><td>20</td><td>A – T – G – C</td></tr><tr><td>2</td><td>20</td><td>A – T – G – C</td></tr><tr><td>3</td><td>24</td><td>A – T – G – C</td></tr><tr><td>4</td><td>20</td><td>A – T – C – C</td></tr><tr><td>5</td><td>24</td><td>A – T – G – C</td></tr><tr><td>6</td><td>20</td><td>A – T – C – C</td></tr><tr><td>7</td><td>24</td><td>A – T – C – C</td></tr></table>`,
  secenekler: [
    "2",
    "3",
    "4",
    "7"
  ],
  dogru: 2,
  hatalar: [
    "Yalnız tek bir ölçüte bakma: yalnızca kromozom sayısına (20 ve 24) ya da yalnızca baz sırasına bakarak iki grup bulunur; aynı canlı olabilmek için iki ölçütün de aynı olması gerekir.",
    "Bir örneği yanlış gruba katma: 7. örnek kromozom sayısıyla 3 ve 5 ile, baz sırasıyla 4 ve 6 ile aynıdır ama iki ölçütü birden hiçbirine uymaz; ayrı bir canlıdır.",
    null,
    "Her örneği ayrı canlı sayma: kromozom sayısı ve baz sırası aynı olan örnekler aynı canlıdan alınmış olabilir; en az sayıyı bulmak için bunlar birleştirilir."
  ],
  aciklama: `Aynı canlının bütün vücut hücreleri aynı kromozom sayısını ve aynı DNA'yı taşır. Bu yüzden iki örneğin kromozom sayısı ya da baz sırası farklıysa farklı canlılardandır; ikisi de aynıysa aynı canlıdan alınmış olabilirler.
Adım 1: Her örneğin "kromozom sayısı + baz sırası" ikilisini yaz: 1 → (20, A–T–G–C), 2 → (20, A–T–G–C), 3 → (24, A–T–G–C), 4 → (20, A–T–C–C), 5 → (24, A–T–G–C), 6 → (20, A–T–C–C), 7 → (24, A–T–C–C).
Adım 2: Aynı ikiliyi taşıyan örnekleri grupla: (1, 2), (3, 5), (4, 6), (7).
Adım 3: Farklı ikilisi olan gruplar kesinlikle farklı canlılardandır. Aynı gruptaki örnekler tek canlıdan alınmış olabilir. Bu yüzden en az 4 farklı canlı gerekir.
Sağlama: Dört grubun ikilileri birbirinden en az bir ölçütte farklıdır; daha az canlı olsaydı iki grup aynı canlıdan sayılmak zorunda kalırdı.
Sık yapılan hata: Yalnız kromozom sayısına bakıp iki grup bulmak.
Cevap C.`
},
{
  id: "fen-dn-367",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, bir doku kültüründeki hücrelerin yaşamları boyunca DNA miktarını izlemektedir. Dinlenme hâlindeki bir hücrenin DNA miktarını referans almıştır. Amacı, DNA'nın kendini eşlemesinin hücre bölünmesine göre ne zaman gerçekleştiğini belirlemektir. Gözlemlerin bir kısmı eşlenmeyle uyumludur ama eşlenmenin zamanı hakkında bilgi vermez.
**Buna göre aşağıdaki gözlemlerden hangisi, eşlenmenin zamanını en doğrudan gösterir?**`,
  gorsel: null,
  secenekler: [
    "Yavru hücrelerdeki kromozom sayısının, ana hücredeki kromozom sayısıyla aynı olması",
    "Yavru hücrelerdeki baz dizilimlerinin, ana hücredeki baz dizilimiyle aynı olması",
    "Yavru hücrelerdeki DNA miktarının, dinlenme hâlindeki hücreninkiyle aynı olması",
    "Bölünmeye başlamamış bazı hücrelerde DNA miktarının, dinlenme hâlindekinin iki katı olması"
  ],
  dogru: 3,
  hatalar: [
    "Uyumlu ama zamanı göstermeyen gözlemi seçme: kromozom sayısının korunması eşlenmeyle uyumludur ama eşlenmenin bölünmeye göre ne zaman olduğunu göstermez.",
    "Uyumlu ama zamanı göstermeyen gözlemi seçme: baz dizilimlerinin korunması eşlenmenin doğru yapıldığını gösterir, zamanını göstermez.",
    "Bölünme sonrası ölçümü kanıt sayma: yavru hücrelerdeki DNA miktarı bölünmeden sonraki durumu gösterir; eşlenmenin zamanı hakkında bilgi vermez.",
    null
  ],
  aciklama: `Bir olayın zamanını gösteren gözlem, olayın sonucunun hangi andan önce ortaya çıktığını gösteren gözlemdir.
Adım 1: Eşlenme DNA miktarını iki katına çıkarır. Eşlenmenin zamanını, DNA miktarının ne zaman iki katına çıktığına bakarak anlarız.
Adım 2: A, B ve C seçenekleri yavru hücrelerle ilgilidir. Bunlar bölünme bittikten sonra yapılan gözlemlerdir ve eşlenmenin bölünmeden önce mi sonra mı olduğunu ayırt etmez.
Adım 3: D seçeneğinde henüz bölünmeye başlamamış hücrelerin DNA miktarı iki katına çıkmıştır. Yani eşlenme, bölünme başlamadan önce gerçekleşmiştir.
Sağlama: Eşlenme bölünmeden sonra olsaydı, bölünmeye başlamamış hücrelerde iki kat DNA görülmezdi.
Sık yapılan hata: Eşlenmeyle uyumlu her gözlemi, eşlenmenin zamanını gösteren kanıt saymak.
Cevap D.`
},
{
  id: "fen-dn-368",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bitki bilimci, üzerinde çalıştığı bir bitkinin hücresindeki kromozomları incelemiş ve ilgilendiği dört geni tablo hâlinde düzenlemiştir. Tabloda her gen, belirlediği özellik ve bulunduğu kromozomla birlikte gösterilmiştir. Bilim insanı, bu bilgilere dayanarak genlerle kromozomlar ve DNA arasındaki ilişkiye dair çıkarımlar yapmak istemektedir.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Gen</th><th>Belirlediği özellik</th><th>Bulunduğu kromozom</th></tr><tr><td>G1</td><td>Çiçek rengi</td><td>1. kromozom</td></tr><tr><td>G2</td><td>Yaprak biçimi</td><td>1. kromozom</td></tr><tr><td>G3</td><td>Gövde uzunluğu</td><td>2. kromozom</td></tr><tr><td>G4</td><td>Tohum şekli</td><td>3. kromozom</td></tr></table>`,
  secenekler: [
    "2. kromozomda G3'ten başka gen bulunmaz.",
    "G1 ile G2'nin nükleotid dizilimleri birbirinden farklıdır.",
    "G3 ile G4, aynı DNA molekülü üzerinde yer alır.",
    "Bu bitkinin hücrelerindeki toplam gen sayısı dörttür."
  ],
  dogru: 1,
  hatalar: [
    "Tabloyu gen sayısının tamamı sanma: tablo yalnızca dört geni gösterir; bir kromozomda binlerce gen bulunur.",
    null,
    "Farklı kromozomları aynı DNA sanma: G3 ikinci, G4 üçüncü kromozomdadır; her kromozom ayrı bir DNA içerir.",
    "Tabloyu gen sayısının tamamı sanma: bitkinin hücrelerinde binlerce gen vardır, tabloda yalnızca dördü gösterilmiştir."
  ],
  aciklama: `Gen, DNA üzerinde bir özelliği belirleyen nükleotid dizisidir. Bir kromozomda çok sayıda gen bulunur.
Adım 1: Tablo yalnızca dört geni verir. Her kromozomda binlerce gen olduğundan 2. kromozomda G3'ten başka genler de vardır, bitkide toplam gen sayısı da dört değildir.
Adım 2: G3 ikinci, G4 üçüncü kromozomdadır. Kromozomlar farklı olduğu için DNA molekülleri de farklıdır; G3 ile G4 aynı DNA üzerinde değildir.
Adım 3: G1 çiçek rengini, G2 yaprak biçimini belirler. Farklı özellikleri belirleyen genlerin nükleotid dizilimleri de farklıdır. Bu yargı kesinlikle doğrudur.
Sağlama: Aynı dört nükleotid çeşidiyle yazıldıkları hâlde iki genin dizilimi aynı olsaydı ikisi de aynı özelliği belirlerdi.
Cevap B.`
},
{
  id: "fen-dn-369",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fen kulübü üyesi, hücredeki yapıların boyut ilişkisini bir posterde göstermek istemektedir. Posterde yapılar iç içe geçen çerçevelerle gösterilecek, en büyük yapı en dışa yerleştirilecektir. Üye, aynı hücreden alınan aşağıdaki beş yapıyı seçmiştir:
K: Bir kromozom
L: Bu kromozomdaki DNA molekülü
M: Bu DNA üzerinde bulunan bir gen
N: Bu gende bulunan bir nükleotid
P: Bu nükleotidin organik bazı
**Buna göre bu yapılar büyükten küçüğe doğru aşağıdakilerin hangisinde doğru sıralanmıştır?**`,
  gorsel: null,
  secenekler: [
    "K – L – M – N – P",
    "L – K – M – N – P",
    "K – L – M – P – N",
    "K – M – L – N – P"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kromozom ile DNA'yı ters sıralama: kromozom, DNA'nın proteinlerle birlikte paketlenmiş hâlidir ve DNA'dan büyüktür.",
    "Organik bazı nükleotidten büyük sanma: organik baz, nükleotidin üç kısmından yalnızca biridir; nükleotidten küçüktür.",
    "Geni DNA'dan büyük sanma: gen, DNA'nın bir bölümüdür ve DNA'dan küçüktür."
  ],
  aciklama: `Her yapı, kendisinden küçük sonraki yapıyı içerir. Sıralamayı içten dışa ya da dıştan içe okuyarak denetle.
Adım 1: Kromozom (K), DNA'yı (L) içerir; DNA (L) genleri (M) içerir.
Adım 2: Gen (M) nükleotidlerden (N) oluşur.
Adım 3: Nükleotid (N) üç kısımdan oluşur: fosfat, şeker ve organik baz. Organik baz (P) bunlardan biridir; yani nükleotidden küçüktür.
Adım 4: Büyükten küçüğe: K – L – M – N – P.
Sağlama: Sıralamayı tersten oku: organik baz nükleotidin parçası, nükleotid genin parçası, gen DNA'nın parçası, DNA kromozomun parçası. Her adımda bir parça-bütün ilişkisi var.
Sık yapılan hata: Geni DNA'dan büyük sanmak.
Cevap A.`
},
{
  id: "fen-dn-370",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir bilim kulübünde "gizli yazı" oyunu oynanmaktadır. Oyunun kuralına göre bir mesajın her harfi DNA'daki eşiyle değiştirilerek şifrelenir: A yerine T, T yerine A, G yerine C, C yerine G yazılır. Bu oyunda mesaj iki kez art arda şifrelenmiştir: önce asıl mesaj şifrelenmiş, ortaya çıkan şifre de aynı kuralla yeniden şifrelenmiştir. Asıl mesaj şudur: G – A – T – C – C – A.
**Buna göre ikinci şifrelemeden sonra ortaya çıkan yazı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "C – T – A – G – G – T",
    "A – G – C – T – T – G",
    "G – A – T – C – C – A",
    "A – C – C – T – A – G"
  ],
  dogru: 2,
  hatalar: [
    "Yalnızca bir kez şifreleme: C – T – A – G – G – T, mesajın tek kez şifrelenmiş hâlidir; ikinci şifrelemeyi atlamışsın.",
    "Çiftleri A – G ve T – C sanma: adeninin eşi timin, guaninin eşi sitozindir.",
    null,
    "Doğru dizilimi ters yazma: bazlar doğru bulunmuş ama sırası tersine çevrilmiştir; şifreleme harflerin sırasını değiştirmez."
  ],
  aciklama: `Eşleşme kuralı karşılıklıdır: A'nın eşi T ise T'nin eşi de A'dır. Bir bazın eşini iki kez art arda almak başlangıç bazına döndürür.
Adım 1: İlk şifreleme: G → C, A → T, T → A, C → G, C → G, A → T. Şifre C – T – A – G – G – T olur.
Adım 2: İkinci şifreleme, bu şifrenin eşini alır: C → G, T → A, A → T, G → C, G → C, T → A. Sonuç G – A – T – C – C – A.
Adım 3: Bu dizilim asıl mesajın aynısıdır.
Sağlama: DNA'da bir zincirin karşısına kurulan zincirin de karşısına zincir kurulursa ilk zincir elde edilir. Eşlenmede de bu yüzden her yeni zincir diğer eski zincirin dizilimini taşır.
Cevap C.`
},
{
  id: "fen-dn-371",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, birden fazla bitkiden aldığı beş vücut hücresinin (K, L, M, N ve P) kromozom sayılarını sayarak tabloya yazmıştır. Her hücre, tabloda yazan bitkilerden yalnızca birinden alınmıştır.
Buna göre;
I. K ile M aynı bitkiden alınmış olabilir.
II. K, L ve P'nin üçü de aynı bitkiden alınmış olabilir.
III. M ile N'nin kromozom sayılarının eşit olması, bu iki hücrenin kesinlikle aynı bitkiden alındığını gösterir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Hücre</th><th>Kromozom sayısı</th></tr><tr><td>K</td><td>12</td></tr><tr><td>L</td><td>12</td></tr><tr><td>M</td><td>14</td></tr><tr><td>N</td><td>14</td></tr><tr><td>P</td><td>12</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "Yalnız II",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "K ile M'yi aynı bitkiden sanma: aynı bitkinin vücut hücrelerinde kromozom sayısı aynıdır; K'de 12, M'de 14 olduğu için ikisi aynı bitkiden alınamaz.",
    "I ve III'ü doğru sayma: K ile M aynı bitkiden olamaz ve sayı eşitliği tek başına aynı bitkiden alındığını kanıtlamaz.",
    null,
    "III. yargıyı doğru sayma: kromozom sayısı türe özgüdür; aynı türün farklı bireylerinde de aynıdır, eşit sayı aynı bitki olduğunu göstermez."
  ],
  aciklama: `Bir canlının bütün vücut hücreleri aynı sayıda kromozom taşır. Kromozom sayısı türe özgüdür; yani aynı türün farklı bireylerinde de aynıdır.
Adım 1: I. yargıyı incele. K'de 12, M'de 14 kromozom var. Aynı bitkinin hücrelerinde sayı aynı olmalı; bu yüzden K ile M aynı bitkiden alınamaz. I yanlıştır.
Adım 2: II. yargıyı incele. K, L ve P'nin üçünde de 12 kromozom var. Üçü aynı bitkiden alınmış olabilir. II doğrudur.
Adım 3: III. yargıyı incele. M ile N'nin sayıları eşit. Ama farklı bitkilerin (örneğin aynı türden iki bitki) hücrelerinde de sayı eşittir. Sayı eşitliği, aynı bitkiden alındıklarını kesinleştirmez. III yanlıştır.
Sık yapılan hata: Sayı eşitliğini aynı canlı olmanın kanıtı saymak.
Cevap C.`
},
{
  id: "fen-dn-372",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, bir DNA zincirinden aldığı altı yapıyı (1–6) incelemiş ve her yapıda fosfat, şeker ve organik bazın bulunup bulunmadığını tabloya işlemiştir. Bir yapının nükleotid sayılabilmesi için fosfat, şeker ve organik bazın üçünü de taşıması gerekir. Nükleotidin çeşidi ise taşıdığı organik baza göre belirlenir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Yapı</th><th>Fosfat</th><th>Şeker</th><th>Organik baz</th></tr><tr><td>1</td><td>Var</td><td>Var</td><td>Adenin</td></tr><tr><td>2</td><td>Var</td><td>Var</td><td>Timin</td></tr><tr><td>3</td><td>Var</td><td>Var</td><td>Adenin</td></tr><tr><td>4</td><td>Var</td><td>Yok</td><td>Guanin</td></tr><tr><td>5</td><td>Yok</td><td>Var</td><td>Sitozin</td></tr><tr><td>6</td><td>Var</td><td>Var</td><td>Guanin</td></tr></table>`,
  secenekler: [
    "4 numaralı yapıda guanin bulunduğu için eksiksiz bir nükleotiddir.",
    "1 ve 3 numaralı yapılar eksiksiz nükleotiddir ama farklı çeşittir.",
    "5 numaralı yapıda sitozin bulunduğu için eksiksiz bir nükleotiddir.",
    "2 ve 6 numaralı yapılar eksiksiz nükleotiddir ve farklı çeşittir."
  ],
  dogru: 3,
  hatalar: [
    "Eksik yapıyı nükleotid sanma: 4 numaralı yapıda şeker yoktur; organik baz bulunması tek başına nükleotid olması için yetmez.",
    "Aynı bazı farklı çeşit sanma: 1 ve 3 numaralı yapıların ikisi de adenin taşır, yani aynı çeşit nükleotidlerdir.",
    "Eksik yapıyı nükleotid sanma: 5 numaralı yapıda fosfat yoktur; yalnızca şeker ve baz bulunması nükleotid için yetmez.",
    null
  ],
  aciklama: `Nükleotid; fosfat, şeker ve organik bazdan oluşur. Fosfat ve şeker her nükleotidde aynıdır; nükleotidin çeşidini organik baz belirler (adenin, timin, guanin, sitozin).
Adım 1: Eksiksiz yapıları bul. 1, 2, 3 ve 6 numaralı yapılarda fosfat, şeker ve baz birlikte vardır. 4 numaralıda şeker, 5 numaralıda fosfat yoktur; bunlar eksiktir.
Adım 2: Eksiksiz yapıların çeşitlerine bak. 1 ve 3 adenin nükleotididir, 2 timin nükleotididir, 6 guanin nükleotididir.
Adım 3: Seçenekleri denetle. A ve C eksik yapıları nükleotid sayıyor. B'de 1 ve 3 aynı çeşit olduğu hâlde farklı deniyor. D'de 2 (timin) ve 6 (guanin) eksiksizdir ve farklı çeşittir.
Sağlama: Eksiksiz yapılar 1, 2, 3 ve 6'dır; adenin, timin ve guanin olmak üzere üç çeşit nükleotid vardır.
Sık yapılan hata: Organik baz taşıyan her yapıyı nükleotid sanmak ve çeşidi fosfata ya da şekere göre belirlemek.
Cevap D.`
},
{
  id: "fen-dn-373",
  kazanim: "F.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, bir bitki hücresindeki tek bir DNA molekülünü incelemiş ve bu molekül üzerinde G1, G2 ve G3 adlı üç gen belirlemiştir. Genlerin DNA'nın 1. zincirindeki bölümlerinde hangi organik bazların bulunduğu tabloda verilmiştir. Araştırmacı, her genin karşısında kalan 2. zincir bölümünü de ayrıca incelemek istemektedir. Üç genin de aynı DNA molekülünün bölümleri olduğu bilinmektedir.
Buna göre;
I. G1'in karşısındaki 2. zincir bölümünde dört çeşit organik baz da bulunur.
II. G2'nin karşısındaki 2. zincir bölümünde guanin ve sitozin bulunur.
III. G2 ve G3, aynı DNA molekülünün bölümleri olduğu hâlde farklı baz çeşitleri taşıyabilir.
**yargılarından hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Gen</th><th>1. zincirde bulunan organik bazlar</th></tr><tr><td>G1</td><td>Adenin, timin, guanin, sitozin</td></tr><tr><td>G2</td><td>Adenin, timin</td></tr><tr><td>G3</td><td>Guanin, sitozin</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "III. yargıyı atlama: aynı DNA'nın bölümü olan genler farklı baz çeşitleri taşıyabilir; tabloda G2 yalnızca adenin ve timin, G3 yalnızca guanin ve sitozin içerir.",
    null,
    "I'i atlayıp II'yi doğru sayma: G1'in 1. zincirinde dört çeşit baz bulunduğundan karşısında da dört çeşit baz bulunur; adenin ve timin ise karşı zincirde de adenin ve timin verir.",
    "II. yargıyı da doğru sayma: G2'nin 1. zincirinde adenin ve timin bulunduğundan karşısında timin ve adenin bulunur; guanin ve sitozin gelmez."
  ],
  aciklama: `Gen, DNA'nın belirli bir özelliği belirleyen bölümüdür. İki zincirli DNA'da bir bölümün karşısındaki bazlar eşleşme kuralıyla belirlenir: adenin – timin, guanin – sitozin.
Adım 1: I. yargıyı incele. G1'in 1. zincirinde adenin, timin, guanin ve sitozin var. Karşılarına sırasıyla timin, adenin, sitozin ve guanin gelir. Karşı zincirde de dört çeşit baz bulunur. I doğrudur.
Adım 2: II. yargıyı incele. G2'nin 1. zincirinde yalnızca adenin ve timin var. Adeninin karşısına timin, timinin karşısına adenin gelir. Karşı zincirde guanin ve sitozin bulunmaz. II yanlıştır.
Adım 3: III. yargıyı incele. Genler aynı DNA'nın bölümleridir ama farklı özellikleri belirler; baz çeşitleri ve dizilimleri farklı olabilir. G2 yalnızca adenin ve timin, G3 yalnızca guanin ve sitozin taşımaktadır. III doğrudur.
Sağlama: G2'nin karşısı yalnızca adenin ve timin, G3'ün karşısı yalnızca guanin ve sitozin içerir; G1'in karşısı ise dört baz çeşidini de içerir.
Sık yapılan hata: Eşleşmede bazların çeşit grubunun değiştiğini düşünmek. Adenin – timin çifti, karşı zincirde de adenin ve timin verir.
Cevap B.`
},
{
  id: "fen-dn-374",
  kazanim: "F.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, soya fidesinin kökünde uç kısımdan yukarıya doğru üç bölgeden hücre örnekleri almıştır. Her bölgede DNA'sını eşlemiş hücre ile bölünmekte olan hücrenin bulunup bulunmadığını mikroskopla incelemiş ve sonuçları tabloya yazmıştır. Kök ucundaki hücreler hızla çoğalırken yukarıdaki hücreler uzayıp görev yapmaktadır.
**Buna göre tablodaki verilerden ve DNA'nın kendini eşlemesiyle ilgili bilgilerden aşağıdakilerden hangisi çıkarılabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Bölge</th><th>DNA'sını eşlemiş hücre</th><th>Bölünmekte olan hücre</th></tr><tr><td>Kök ucu</td><td>Var</td><td>Var</td></tr><tr><td>Orta bölge</td><td>Var</td><td>Yok</td></tr><tr><td>Üst bölge</td><td>Yok</td><td>Yok</td></tr></table>`,
  secenekler: [
    "Eşlenme bölünmeden önce gerçekleştiği için, bölünen hücrelerin bulunduğu bölgede eşlenmiş hücreler de bulunur.",
    "Eşlenme bölünmeden sonra gerçekleştiği için, eşlenmiş hücrelerin bulunduğu her bölgede bölünen hücreler de bulunur.",
    "Eşlenme ile bölünme birlikte gerçekleştiği için, iki olay da her bölgede birlikte görülür.",
    "Eşlenme yalnızca bölünmeyen hücrelerde gerçekleştiği için, orta bölgede eşlenmiş hücreler bulunur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sırayı ters kurma: eşlenme bölünmeden önce olur. Ayrıca orta bölgede eşlenmiş hücre var ama bölünen hücre yok; tablo 'her bölgede' ifadesiyle çelişir.",
    "Olayları aynı anda sanma: eşlenme bölünmeden önce tamamlanır. Orta bölgede eşlenmiş hücre var, bölünen hücre yok; tablo 'her bölgede birlikte' ifadesiyle çelişir.",
    "Eşlenmenin bölünmeyen hücreye ait olduğunu sanma: eşlenme, bölünecek hücrelerde bölünmeden önce gerçekleşir; bu seçenekteki gerekçe yanlıştır."
  ],
  aciklama: `Hücre bölünmeden önce DNA'sını eşler; çünkü yavru hücrelerin her birine DNA'nın bir kopyasının verilmesi gerekir.
Adım 1: Tabloyu oku. Kök ucunda hem eşlenmiş hem bölünen hücre var. Orta bölgede eşlenmiş hücre var ama bölünen yok. Üst bölgede ikisi de yok.
Adım 2: Eşlenmenin bölünmeden önce gerçekleştiğini bilerek A'yı değerlendir. Bölünen hücrelerin bulunduğu tek bölge kök ucudur ve orada eşlenmiş hücreler de vardır. Bu, bilgiyle ve tabloyla uyumludur. A çıkarılabilir.
Adım 3: B ve C'yi tabloyla karşılaştır. Orta bölgede eşlenmiş hücre var, bölünen hücre yok. Bu yüzden "her bölgede bölünen hücre de bulunur" ve "iki olay her bölgede birlikte görülür" ifadeleri tabloyla çelişir. Ayrıca eşlenme bölünmeden sonra ya da bölünmeyle aynı anda olmaz.
Adım 4: D'deki gerekçe yanlıştır. Eşlenme, bölünecek hücrelerde bölünmeden önce gerçekleşir; "yalnızca bölünmeyen hücrelerde" demek yanlıştır.
Sağlama: Orta bölgedeki hücreler eşlenmiş ama henüz bölünmemiş olabilir. Bu durum, eşlenmenin bölünmeden önce olduğuyla uyumludur.
Sık yapılan hata: Verinin tek bir satırına bakıp tablodaki diğer satırlarla çelişen genelleme yapmak.
Cevap A.`
},
{
  id: "fen-dn-375",
  kazanim: "F.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, DNA modeli üzerinde çalışırken bir DNA bölümünün üst zincirinin bazlarını yukarıdan aşağıya doğru T – A – C – C – G olarak okumuştur. Alt zincirin bazlarını eşleşme kuralına göre tamamlamış, ancak sonucu defterine yazarken alt zinciri aşağıdan yukarıya doğru okuyarak yazmıştır. Modelde basamaklar kurala uygun biçimde eşleştirilmiştir.
**Buna göre öğrencinin defterine yazdığı baz sırası aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "A – T – G – G – C",
    "G – C – C – A – T",
    "T – A – C – C – G",
    "C – G – G – T – A"
  ],
  dogru: 3,
  hatalar: [
    "Okuma yönünü dikkate almama: A – T – G – G – C, alt zincirin yukarıdan aşağıya okunuşudur; öğrenci aşağıdan yukarıya okumuştur.",
    "Üst zinciri tersine yazma: G – C – C – A – T, üst zincirin tersine çevrilmiş hâlidir; baz eşleşmesi uygulanmamıştır.",
    "Karşı zinciri üstün aynısı sanma: alt zincir üst zincirin aynısı değil, tamamlayıcısıdır.",
    null
  ],
  aciklama: `Alt zincirin bazları üst zincirin bazlarıyla A – T ve G – C kuralına göre eşleşir. Soru, bu eşleştirmeden sonra okuma yönünü de değiştiriyor.
Adım 1: Üst zincir T – A – C – C – G ise alt zincirin yukarıdan aşağıya bazları A – T – G – G – C olur (T → A, A → T, C → G, C → G, G → C).
Adım 2: Öğrenci alt zinciri aşağıdan yukarıya okumuştur. Bu yüzden dizilimi tersten yazar: C – G – G – T – A.
Adım 3: Eşleşme kuralı ile okuma yönü ayrı şeylerdir; baz çeşitleri değişmez, yalnızca yazılış sırası değişir.
Sağlama: C – G – G – T – A dizisini tersten okursan A – T – G – G – C elde edersin; bu, eşleşme kuralına uygun alt zincirdir.
Sık yapılan hata: Eşleşmeyi yapmadan yalnızca sırayı çevirmek ya da yalnızca eşleştirip yönü unutmak.
Cevap D.`
}
);
