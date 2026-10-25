// Fen Bilimleri — Sıvı ve Gaz Basıncı: Kademe 3 (LGS Ayarı) YEDEĞİ (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["sivi-gaz-basinci"] = window.LGS_BANK["sivi-gaz-basinci"] || []).push(
{
  id: "fen-sg-326",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Biçimleri farklı K, L ve M kaplarının üçü de görseldeki gibi aynı yüksekliğe kadar doludur. K ve L kaplarında su, M kabında ise yoğunluğu sudan küçük olan zeytinyağı vardır. Kapların tabanlarındaki sıvı basınçları P_{K}, P_{L} ve P_{M} olarak adlandırılmıştır.
**Buna göre P_{K}, P_{L} ve P_{M} arasındaki ilişki nasıldır?**`,
  gorsel: `<svg viewBox="0 0 450 262" role="img" aria-label="Biçimleri farklı K, L ve M kapları; K ve L kaplarında su, M kabında zeytinyağı aynı yüksekliğe kadar doludur"><polygon points="20,100 100,100 100,220 20,220" fill="var(--vurgu)" fill-opacity="0.3"/><polygon points="170,220 140,100 260,100 230,220" fill="var(--vurgu)" fill-opacity="0.3"/><polygon points="310,220 332,100 408,100 430,220" fill="var(--vurgu2)" fill-opacity="0.4"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,60 20,220 100,220 100,60"/><polyline points="130,60 170,220 230,220 270,60"/><polyline points="340,60 310,220 430,220 400,60"/><line x1="10" y1="222" x2="440" y2="222"/></g><line x1="10" y1="100" x2="440" y2="100" stroke="currentColor" stroke-dasharray="4 3"/><g fill="currentColor" font-size="15" font-weight="bold" text-anchor="middle"><text x="60" y="248">K (su)</text><text x="200" y="248">L (su)</text><text x="370" y="248">M (zeytinyağı)</text></g></svg>`,
  secenekler: ["P_{K} > P_{L} > P_{M}", "P_{K} = P_{L} > P_{M}", "P_{M} > P_{K} = P_{L}", "P_{K} = P_{L} = P_{M}"],
  dogru: 1,
  hatalar: [
    "Miktar yanılgısı: K ve L'de aynı sıvı aynı yüksekliktedir. Taban basıncı kabın biçimine ya da kaptaki sıvı miktarına göre değişmez; P_{K} ile P_{L} eşittir.",
    null,
    "Yoğunluğu ters yorumlama: zeytinyağı sudan az yoğundur. Aynı derinlikte daha küçük basınç uygular; P_{M}, P_{K} ve P_{L}'den küçüktür.",
    "Sıvının cinsini yok sayma: yükseklikler eşit olsa da M'deki sıvı daha az yoğun olduğu için tabanında basınç daha küçüktür."
  ],
  aciklama: `Sıvı basıncı, sıvının ağırlığından doğan basınçtır; derinliğe ve sıvının cinsine (yoğunluğuna) bağlıdır. Kabın biçimine, genişliğine ve sıvı miktarına bağlı değildir.
Adım 1: Üç kapta da sıvı yüksekliği aynıdır; yani tabanların derinliği aynıdır.
Adım 2: K ve L'de sıvı sudur, derinlik de aynıdır. Kapların biçimi farklı olsa da P_{K} = P_{L} olur.
Adım 3: M'deki zeytinyağı sudan az yoğundur. Aynı derinlikte yoğunluğu küçük sıvı daha küçük basınç uygular; P_{M} daha küçüktür.
Sık yapılan hata: Geniş görünen kapta daha çok sıvı olduğu için basıncın da büyük olduğunu sanmak.
Cevap B.`
},
{
  id: "fen-sg-327",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Elif, tabanına yakın bir yerine iğneyle küçük bir delik açtığı pet şişeyi suyla doldurmuş ve kapağını sıkıca kapatmıştır. Şişeyi masaya dik tutarken delikten su akmamıştır. Elif kapağı açtığında delikten su akmaya başlamıştır.
Buna göre;
I. Kapak açılınca şişedeki hava basıncı dışarıdaki açık hava basıncına yaklaşır ve su kendi basıncıyla delikten dışarı akar.
II. Kapak kapalıyken delikten su akmaması, suyun deliğin bulunduğu yüze basınç uygulamadığını gösterir.
III. Kapak açıkken şişedeki su azaldıkça delikten çıkan suyun akışı zayıflar.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "II ve III", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: su aktıkça yüzey alçalır, deliğin derinliği azalır. Derinlik azalınca oradaki sıvı basıncı ve akış zayıflar.",
    "I'i gözden kaçırma: kapak açılınca içerideki basınç dışarıdakine yaklaşır, bu yüzden su akmaya başlar. Akışın başlaması açık hava basıncıyla ilgilidir.",
    "II'yi doğru sayma: su, kapak kapalıyken de deliğe basınç uygular. Akmamasının nedeni, içerideki hava basıncının düşmesiyle iki taraftaki basınçların dengelenmesidir.",
    null
  ],
  aciklama: `Ağzı kapalı bir kapta su yalnızca kendi basıncıyla değil, kapıyı kapatan havanın basıncıyla birlikte değerlendirilir.
Adım 1: I. yargı doğrudur. Kapak kapalıyken deliğe içeriden etki eden toplam basınç ile dışarıdan etki eden açık hava basıncı dengededir. Kapak açılınca içerideki hava basıncı dışarıdakine yaklaşır ve suyun kendi basıncı suyu dışarı iter.
Adım 2: II. yargı yanlıştır. Su her zaman kabın bütün yüzeylerine, deliğin olduğu yüze de basınç uygular. Akmaması bu basıncın olmadığını göstermez.
Adım 3: III. yargı doğrudur. Su azaldıkça deliğin derinliği azalır; sıvı basıncı ve akış zayıflar.
Sık yapılan hata: Bir olayın gerçekleşmemesini, o olayı doğuran basıncın olmadığı biçiminde yorumlamak.
Cevap D.`
},
{
  id: "fen-sg-328",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir atölyede metal levhaları şekillendirmek için kullanılan hidrolik pres, yağ dolu kapalı bir sistemdir. Operatör, dar pistona bir kuvvet uygulayarak geniş pistonu hareket ettirmektedir. Bir levhayı şekillendiremeyince operatör, dar pistona uyguladığı kuvveti artırmıştır.
**Dar pistona uygulanan kuvvet artırıldığında kesinlikle aşağıdakilerden hangisi gerçekleşir?**`,
  gorsel: null,
  secenekler: [
    "Yağa iletilen basınç artar; geniş pistonu iten kuvvet de artar.",
    "Yağa iletilen basınç değişmez; geniş pistonu iten kuvvet artar.",
    "Yağa iletilen basınç artar; geniş pistonu iten kuvvet değişmez.",
    "Yağa iletilen basınç değişmez; geniş pistonu iten kuvvet değişmez."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Geniş pistonun büyüklüğünü basıncın sabitliğine bağlama: dar pistonun kuvveti artınca yağa iletilen basınç da artar. Basıncın değişmediğini sanmak yanlıştır.",
    "Kuvvet ile basıncı karıştırma: basınç artıyorsa, geniş pistonun yüzeyi değişmediği için onu iten kuvvet de artmak zorundadır.",
    "Artışı yok sayma: dar pistona uygulanan kuvvet artınca ne basınç ne de geniş pistondaki kuvvet aynı kalır."
  ],
  aciklama: `Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir.
Adım 1: Dar pistona uygulanan kuvvet artınca dar pistonun yağa uyguladığı basınç da artar.
Adım 2: Bu basınç yağ içinde azalmadan iletilir; geniş pistonun altında da artmış basınç vardır.
Adım 3: Geniş pistonun yüzeyi değişmediğinden, artan basınç onu iten kuvveti de artırır.
Sık yapılan hata: Geniş pistonda kuvvetin büyük olmasını, basıncın da orada sabit kaldığı biçiminde yorumlamak. Basınç ikisinde de eşit ve artmış, kuvvet geniş pistonda yüzey büyük olduğu için büyüktür.
Cevap A.`
},
{
  id: "fen-sg-329",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Deniz, mutfakta yaptığı gözlemleri şöyle yorumlamıştır:
I. Pipetle meyve suyu içerken içeceği pipete çeken şey, pipetin içindeki boşluktur.
II. Vantuz fayansa bastırılıp yapıştırılırken vantuz ile fayans arasındaki hava, vantuzu fayansa doğru çeker.
III. Pipetin üst ucu parmakla kapatılıp pipet su dolu bardaktan çıkarıldığında, pipetin içindeki suyun düşmemesinin nedeni alttan etki eden açık hava basıncıdır.
**Buna göre Deniz'in yorumlarından hangileri bilimsel olarak doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "II ve III"],
  dogru: 2,
  hatalar: [
    "Boşluk çekmez: içeceği pipete iten, içerideki basıncı küçülmüş pipete karşı dışarıdaki büyük olan açık hava basıncıdır. Boşluğun çektiğini sanmak yaygın bir yanılgıdır.",
    "Vantuzu fayansa bastıran şey, vantuzun içindeki havanın çekmesi değil, dışarıdaki açık hava basıncıdır. Vantuzun içindeki hava azaltıldığından basınç içeride küçüktür.",
    null,
    "II'yi doğru sayma: vantuzu fayansa çeken bir hava yoktur; dışarıdaki açık hava basıncı vantuzu fayansa bastırır."
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğan ve her yöne etki eden basınçtır. İçerideki basınç küçülürse, dışarıdaki büyük basınç cismi ya da sıvıyı içeri doğru iter.
Adım 1: I. yorum yanlıştır. Pipetle içerken ağızdaki hava azaltılır; içecek pipete boşluk tarafından çekilmez, dışarıdaki açık hava basıncı tarafından içeri itilir.
Adım 2: II. yorum yanlıştır. Vantuzun içindeki hava azaltıldığı için içerideki basınç dışarıdakinden küçüktür; vantuzu fayansa bastıran dışarıdaki açık hava basıncıdır.
Adım 3: III. yorum doğrudur. Pipetin alt ucunda suyu yukarı iten açık hava basıncı vardır; üst uç kapalı olduğundan üstten aynı basınç etki etmez ve su düşmez.
Sık yapılan hata: “Boşluk çeker” demek. Sorulacak soru şudur: İçerideki mi büyük, dışarıdaki mi?
Cevap C.`
},
{
  id: "fen-sg-330",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sanayi sitesindeki hidrolik platform, pompa pistonu ile platformu taşıyan geniş piston arasında uzun ve kıvrımlı, yağla dolu bir boruyla bağlanmıştır. Dar ve geniş piston aynı yüksekliktedir. Teknisyenler, boru uzun ve kıvrımlı olduğu için geniş pistona ulaşan basıncın azaldığını düşünmektedir.
**Teknisyenlerin düşüncesi ve gerçek durum için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Düşünce doğrudur; borunun uzunluğu arttıkça geniş pistona iletilen basınç yol boyunca azalır.",
    "Düşünce yanlıştır; boru kıvrıldıkça yağın geniş pistona uyguladığı basınç daha da artar.",
    "Düşünce yanlıştır; basınç, boru uzun ya da kıvrımlı olsa da bütün noktalara aynen iletilir.",
    "Düşünce yanlıştır; basınç yalnızca borunun doğrusal olan kısımlarında geniş pistona iletilebilir."
  ],
  dogru: 2,
  hatalar: [
    "Basıncın uzaklıkla azaldığını sanma: kapalı sıvıda basınç yol boyunca azalmaz. Boru uzasa da iletilen basınç aynıdır.",
    "Kıvrımın basıncı artıracağını sanma: boru kıvrılsa da basınç artmaz, azalmaz. Pascal prensibinde basınç aynen iletilir.",
    null,
    "Basıncı yalnızca düz boruda iletilen sanma: sıvı her yöne ve her biçimli yola basıncı aynen iletir; kıvrım basıncı kesmez."
  ],
  aciklama: `Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir. Sıvılar neredeyse hiç sıkıştırılamadığı için bu iletim, borunun uzunluğundan ve biçiminden etkilenmez.
Adım 1: Pompa pistonu yağa basınç uygular.
Adım 2: Yağ kapalı olduğu için bu basınç boru boyunca azalmadan ve artmadan geniş pistona ulaşır.
Adım 3: Borunun uzun ya da kıvrımlı olması basıncı değiştirmez. Geniş piston yüzeyi büyük olduğu için onu iten kuvvet büyüktür.
Sık yapılan hata: Basınç ile uzaklığı ilişkilendirmek; sıvının her yere aynı basıncı ilettiğini unutmak.
Cevap C.`
},
{
  id: "fen-sg-331",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir dalış eğitmeni, denizde 8 metre derinlikte yatay olarak ilerleyen öğrencilerine üç cümle söylemiştir. (Deniz suyunun yoğunluğu tatlı suyunkinden büyüktür.)
I. Yatay olarak ilerlerken derinliğiniz değişmediği için size etki eden sıvı basıncı değişmez.
II. Size etki eden sıvı basıncı yalnızca denizin genişliğine bağlıdır; deniz ne kadar genişse basınç o kadar büyüktür.
III. Aynı derinlikte tatlı su gölünde olsaydınız size etki eden sıvı basıncı denizdekinden daha büyük olurdu.
**Eğitmenin cümlelerinden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "Genişlik yanılgısı: sıvı basıncı denizin genişliğine değil, derinliğe ve sıvının cinsine bağlıdır. I. cümle doğrudur.",
    "III'ü doğru sayma: tatlı su, tuzlu denizden daha az yoğundur. Aynı derinlikte tatlı suda basınç daha küçük olur.",
    "Genişlik yanılgısı ve cins yanılgısı: II. cümle genişliği basınca bağlıyor; III. cümle ise yoğunluğu ters yorumluyor."
  ],
  aciklama: `Sıvı basıncı derinliğe ve sıvının yoğunluğuna bağlıdır; yatay konum, kabın genişliği ve süre basıncı değiştirmez.
Adım 1: I. cümle doğrudur. Yatay hareket derinliği değiştirmez, basınç da değişmez.
Adım 2: II. cümle yanlıştır. Denizin genişliği sıvı basıncını etkilemez.
Adım 3: III. cümle yanlıştır. Deniz suyu tuzlu olduğu için tatlı sudan yoğundur; aynı derinlikte deniz suyunda basınç daha büyüktür.
Sık yapılan hata: Çok suyu çok basınçla karıştırmak.
Cevap A.`
},
{
  id: "fen-sg-332",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir meteoroloji balonu, yerden dikey olarak yükselirken çevresindeki açık hava basıncını ölçmektedir. Balonun yükselirken geçtiği K, L ve M noktalarındaki ölçümler grafikte gösterilmiştir.
**Grafiğe göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 450 260" role="img" aria-label="Yükseklik arttıkça azalan açık hava basıncını gösteren grafik; eğri üzerinde K, L ve M noktaları"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="225" x2="430" y2="225"/><line x1="60" y1="225" x2="60" y2="32"/></g><path d="M60,45 C150,110 250,170 410,205" fill="none" stroke="var(--vurgu)" stroke-width="3"/><g stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.5"><line x1="130" y1="92" x2="130" y2="225"/><line x1="60" y1="92" x2="130" y2="92"/><line x1="209" y1="136" x2="209" y2="225"/><line x1="60" y1="136" x2="209" y2="136"/><line x1="321" y1="181" x2="321" y2="225"/><line x1="60" y1="181" x2="321" y2="181"/></g><g fill="currentColor"><circle cx="130" cy="92" r="5"/><circle cx="209" cy="136" r="5"/><circle cx="321" cy="181" r="5"/></g><g fill="currentColor" font-size="16" font-weight="bold"><text x="138" y="82">K</text><text x="217" y="126">L</text><text x="329" y="171">M</text></g><g fill="currentColor" font-size="14"><text x="66" y="22">Açık hava basıncı</text><text x="340" y="250">Yükseklik</text></g></svg>`,
  secenekler: [
    "Balon yükseldikçe üstündeki hava tabakası kalınlaşır; bu yüzden açık hava basıncı azalır.",
    "Balon M noktasındayken ölçülen açık hava basıncı, K noktasında ölçülenden büyüktür.",
    "Balon yükseldikçe hava soğur; açık hava basıncının azalmasının nedeni de budur.",
    "Balon K noktasından M noktasına çıkarken üstündeki hava tabakası incelmiş, basınç azalmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Nedeni ters yorumlama: yükseldikçe balonun üstünde kalan hava tabakası incelir, kalınlaşmaz. Basıncın azalmasının nedeni budur.",
    "Grafiği ters okuma: eğri yükseklikle birlikte aşağı iner. M noktasında ölçülen basınç, K noktasındakinden küçüktür.",
    "İlgisiz neden uydurma: basıncın yükseklikle azalması havanın soğumasından değil, üstteki hava tabakasının incelmesinden kaynaklanır.",
    null
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğan basınçtır. Yükseldikçe üstte kalan hava tabakası incelir ve basınç azalır.
Adım 1: Grafikte yükseklik arttıkça eğri aşağı iner; K'dan L'ye, L'den M'ye giderken ölçülen basınç küçülür.
Adım 2: Bu, balonun üstünde kalan hava tabakasının incelmesi demektir.
Adım 3: Havanın soğuması basıncın azalma nedeni değildir; basıncı belirleyen, üstteki havanın ağırlığıdır.
Sık yapılan hata: Yükseklerde basıncın artması gerektiğini ya da soğuk nedeniyle azaldığını düşünmek.
Cevap D.`
},
{
  id: "fen-sg-333",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, yoğunlukları bilinmeyen K, L ve M sıvılarını geniş kaplara koyup her sıvıda farklı derinliklerde, aynı basınç ölçerle ölçüm yapmış ve sonuçları tabloya yazmıştır.
**Bu sonuçlara göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>Derinlik (cm)</th><th>Ölçer okuması</th></tr><tr><td>K</td><td>10</td><td>20</td></tr><tr><td>L</td><td>10</td><td>30</td></tr><tr><td>M</td><td>20</td><td>30</td></tr></table>`,
  secenekler: [
    "K'nin yoğunluğu L'ninkinden büyüktür.",
    "L'nin yoğunluğu hem K'ninkinden hem M'ninkinden büyüktür.",
    "M'nin yoğunluğu L'ninkinden büyüktür.",
    "K ve M sıvılarının yoğunlukları birbirine eşittir."
  ],
  dogru: 1,
  hatalar: [
    "Okumayı ters yorumlama: aynı derinlikte okuması büyük olan sıvı daha yoğundur. L'nin okuması K'ninkinden büyüktür.",
    null,
    "Derinliği hesaba katmama: M ile L aynı değeri göstermiştir, ama M daha derindedir. Daha derinde aynı basıncı veren sıvı daha az yoğundur.",
    "Farklı derinlikteki ölçümleri doğrudan karşılaştırma: K ve M farklı derinliktedir, bu veriyle yoğunluklarının eşit olduğu söylenemez."
  ],
  aciklama: `Sıvı basıncı derinliğe ve yoğunluğa bağlıdır. İki sıvıyı karşılaştırırken derinlikleri aynıysa okuması büyük olanın yoğunluğu büyüktür; farklıysa dikkatli akıl yürütmek gerekir.
Adım 1: K ve L aynı derinliktedir (10 cm). L'nin okuması büyük olduğundan L, K'dan yoğundur.
Adım 2: L ve M aynı değeri göstermiştir, ancak M iki kat derindedir. Derin olmasına rağmen aynı basıncı yapan M, L'den daha az yoğundur.
Adım 3: Böylece L hem K'dan hem M'den yoğundur. K ile M arasında kesin bir sıralama bu veriyle yapılamaz.
Sık yapılan hata: Derinlikleri hesaba katmadan okumaları doğrudan karşılaştırmak.
Cevap B.`
},
{
  id: "fen-sg-334",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yüzme havuzunun dikey yan duvarına, su yüzeyinden aşağı doğru sırasıyla 1 m, 2 m ve 3 m derinliklere özdeş K, L ve M basınç sensörleri yerleştirilmiştir. Havuz ağzına kadar suyla doludur.
Buna göre;
I. M sensörünün gösterdiği basınç, K sensörünün gösterdiğinden büyüktür.
II. Su seviyesi K sensörünün üstünde kalacak biçimde havuzdaki su biraz azaltılırsa üç sensörün gösterdiği basınç da azalır.
III. Sensörler dikey duvara yerleştirildiği için yalnızca yatay yönde etki eden basıncı ölçer; bu değer aynı derinlikteki taban basıncından farklıdır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi gözden kaçırma: su azalınca sensörlerin su yüzeyinden derinliği azalır, üçünün gösterdiği basınç da azalır.",
    null,
    "III'ü doğru sayma: sıvı basıncı aynı derinlikte her yönde eşittir. Duvardaki sensör, aynı derinlikteki tabanla aynı basıncı ölçer.",
    "I'i yanlış sayma: M daha derindedir. Derinlik arttıkça basınç arttığı için M'nin gösterdiği değer daha büyüktür."
  ],
  aciklama: `Sıvı basıncı derinlikle artar ve aynı derinlikte her yöne eşittir; duvara, tabana ya da tavana etkisi aynıdır.
Adım 1: I. yargı doğrudur. M, K'dan daha derindir; basıncı daha büyüktür.
Adım 2: II. yargı doğrudur. Su azalınca sensörlerin yüzeyden derinliği azalır; üçünde de basınç azalır.
Adım 3: III. yargı yanlıştır. Duvardaki sensörün ölçtüğü basınç, o derinlikteki taban basıncına eşittir; yön basıncı değiştirmez.
Sık yapılan hata: Yan duvardaki basıncın tabandakinden farklı olduğunu sanmak.
Cevap B.`
},
{
  id: "fen-sg-335",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Özdeş iki pet şişenin yan yüzeyinde, tabandan aynı yükseklikte birer delik vardır. Şişelerden birine X sıvısı, diğerine Y sıvısı görseldeki gibi aynı yüksekliğe kadar doldurulmuş ve delikler aynı anda açılmıştır. X sıvısı yere Y sıvısından daha uzak bir noktaya düşmüştür.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 380 266" role="img" aria-label="Özdeş iki şişenin aynı yükseklikteki deliklerinden fışkıran X ve Y sıvıları; X sıvısı daha uzağa düşmüştür"><polygon points="20,100 90,100 90,232 20,232" fill="var(--vurgu)" fill-opacity="0.3"/><polygon points="230,100 300,100 300,232 230,232" fill="var(--vurgu2)" fill-opacity="0.4"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="44,24 44,60 20,60 20,232 90,232 90,60 66,60 66,24"/><polyline points="254,24 254,60 230,60 230,232 300,232 300,60 276,60 276,24"/><line x1="10" y1="232" x2="375" y2="232"/></g><g fill="none" stroke-width="3"><path d="M90,180 Q150,180 205,230" stroke="var(--vurgu)"/><path d="M300,180 Q335,180 350,230" stroke="var(--vurgu2)"/></g><g fill="currentColor"><circle cx="90" cy="180" r="3"/><circle cx="300" cy="180" r="3"/></g><line x1="10" y1="100" x2="370" y2="100" stroke="currentColor" stroke-dasharray="4 3"/><g fill="currentColor" font-size="16" font-weight="bold" text-anchor="middle"><text x="55" y="256">X</text><text x="265" y="256">Y</text></g></svg>`,
  secenekler: [
    "X sıvısının miktarı Y sıvısınınkinden fazladır.",
    "X sıvısındaki delik, Y sıvısındaki delikten daha derindedir.",
    "X sıvısı, şişenin tabanına daha geniş bir yüzeyden basınç uygulamaktadır.",
    "X sıvısının yoğunluğu Y sıvısınınkinden büyüktür."
  ],
  dogru: 3,
  hatalar: [
    "Miktar yanılgısı: fışkırma, sıvının miktarına göre değil deliğin derinliğine ve sıvının yoğunluğuna göre değişir. Şişeler özdeştir, yükseklikler eşittir.",
    "Soruda verilenleri yok sayma: şişeler özdeş, delikler aynı yükseklikte ve sıvı yükseklikleri eşittir; deliklerin derinliği aynıdır.",
    "Taban alanı yanılgısı: şişeler özdeştir; taban alanı da aynıdır ve zaten sıvı basıncını etkilemez.",
    null
  ],
  aciklama: `Sıvı, kabın yan yüzeyine de basınç uygular; deliğin derinliği ve sıvının yoğunluğu arttıkça fışkırma güçlenir.
Adım 1: Şişeler özdeştir, deliklerin yüksekliği ve sıvı yükseklikleri eşittir; derinlik ve kap değişkenleri sabit tutulmuştur.
Adım 2: Değişen tek şey sıvının cinsidir. X daha uzağa fışkırdığına göre deliğe daha büyük basınç uyguluyordur.
Adım 3: Aynı derinlikte daha büyük basınç uygulayan sıvının yoğunluğu daha büyüktür; X, Y'den yoğundur.
Sık yapılan hata: Bir şeyin daha uzağa fışkırmasını, sıvının daha çok olmasına bağlamak.
Cevap D.`
},
{
  id: "fen-sg-336",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Yeni bir baraj tasarlayan mühendisler, göl suyunu tutacak beton duvarın kesitini çizerken duvarı tabana doğru giderek kalınlaştırmışlardır. Duvarın üst kısmı ince, alt kısmı kalındır. Göl çok geniş bir alana yayılmaktadır ve su seviyesi mevsimlere göre değişmektedir. Göl suyu duvarın her yüzeyine basınç uygulamaktadır.
**Duvarın tabana doğru kalınlaştırılmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Su derinleştikçe sıvı basıncı arttığından duvarın alt kısımlarına daha büyük basınç etki eder.",
    "Göldeki su miktarı çok olduğundan duvarın her yüksekliğine etki eden basınç aynı ve büyüktür.",
    "Sıvı yalnızca kabın tabanına basınç uyguladığından duvarın yalnızca en altı güçlendirilmelidir.",
    "Duvarın alt kısmı ağırlaşırsa göl suyunun yoğunluğu azalır ve duvara etki eden basınç küçülür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Miktar yanılgısı: sıvı basıncı su miktarına değil derinliğe bağlıdır; duvara etki eden basınç aşağı doğru artar, her yükseklikte aynı değildir.",
    "Yüzey yanılgısı: sıvı kabın yalnızca tabanına değil, yan yüzeylerine de basınç uygular; duvar da bu yüzlerden biridir. Derinlikle artan basınç duvarın alt kısmını daha çok zorlar.",
    "Yoğunluğu değiştirme yanılgısı: duvarın ağırlığı suyun yoğunluğunu değiştirmez; duvarı kalınlaştırmanın nedeni basıncın derinlikle artmasıdır."
  ],
  aciklama: `Sıvı basıncı, sıvının yüzeyinden aşağı doğru indikçe artar; sıvı, bulunduğu yapının tabanına olduğu kadar yan yüzeylerine de basınç uygular.
Adım 1: Baraj gölündeki su, duvarın karşı yüzüne basınç uygular. Duvarın yüzeyindeki her nokta su yüzeyinden farklı derinliktedir.
Adım 2: Su yüzeyine yakın noktalarda derinlik azdır, basınç küçüktür; aşağı indikçe derinlik arttığı için basınç da artar.
Adım 3: Duvarın alt kısımlarına en büyük basınç etki eder. Bu yüzden duvar tabana doğru kalınlaştırılır.
Sık yapılan hata: Göldeki suyun çok olmasının basıncı artırdığını düşünmek. Basıncı belirleyen su miktarı değil, derinliktir.
Cevap A.`
},
{
  id: "fen-sg-337",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir itfaiye aracının hidrolik merdiveninin kolunu kaldıran düzenekte, yağla dolu kapalı bir boru, pompa pistonunu kolu yukarı iten geniş pistona bağlar. Geniş piston, pompa pistonundan daha geniştir ve iki piston aynı yüksekliktedir.
Buna göre;
I. Pompa pistonu yağa basınç uyguladığında bu basınç yalnızca pistona en yakın noktalara iletilir.
II. Pascal prensibine göre kapalı kaptaki sıvı, kendisine uygulanan basıncı her noktaya aynen iletir.
III. Geniş pistonun yüzeyi pompa pistonunun yüzeyinden büyük olduğu için kolu iten kuvvet, pompa pistonuna uygulanan kuvvetten büyüktür.
**ifadelerinden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "Yalnız III"],
  dogru: 2,
  hatalar: [
    "Basıncı yalnızca yakına gidiyor sanma: kapalı sıvıya uygulanan basınç her noktaya ve her yöne aynen iletilir. I yanlıştır; II ve III doğrudur.",
    "I'i doğru sayma ve III'ü atlama: basınç yağın yalnızca yakın noktalarına gitmez. Ayrıca iki pistonun altında basınç eşit olduğundan geniş pistonu iten kuvvet daha büyüktür; III doğrudur.",
    null,
    "II'yi atlama: Pascal prensibine göre kapalı kaptaki sıvı, kendisine uygulanan basıncı her noktaya aynen iletir; II doğrudur."
  ],
  aciklama: `Pascal prensibine göre kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve her yöne aynen iletilir. İletilen şey basınçtır; kuvvet ise basıncın etki ettiği yüzeye göre değişir.
Adım 1: I. ifade yanlıştır. Basınç, yağın her noktasına iletilir; yakın noktalarla sınırlı değildir.
Adım 2: II. ifade doğrudur. Sıvı, kendisine uygulanan basıncı her noktaya aynen iletir.
Adım 3: III. ifade doğrudur. Basınç iki pistonun altında eşittir; geniş pistonun yüzeyi büyük olduğundan onu iten kuvvet de büyüktür.
Sık yapılan hata: Sıvının "kuvveti" ilettiğini sanmak. Aynen iletilen basınçtır; kuvvet yüzeyle birlikte değişir.
Cevap C.`
},
{
  id: "fen-sg-338",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir akvaryumda K ve L balıkları, su yüzeyinden sırasıyla 8 cm ve 20 cm aşağıda hareketsiz durmaktadır. Akvaryumun sahibi, balıklar yerlerinde kalacak biçimde akvaryuma biraz daha su eklemiştir. Su eklendikten sonra da iki balık hareketsiz ve aynı yerdedir.
**Buna göre balıklara etki eden sıvı basınçlarıyla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Her iki balığa etki eden sıvı basıncı artar; L'ye etki eden basınç yine K'ya etki edenden büyüktür.",
    "Her iki balığa etki eden sıvı basıncı artar; ancak K'ya etki eden basınç artık L'ye etki edenden büyüktür.",
    "Yalnızca daha derindeki L balığına etki eden sıvı basıncı artar; K balığınınki değişmez.",
    "Her iki balığa etki eden sıvı basıncı değişmez; çünkü balıkların yeri değişmemiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sıralamayı ters çevirme: balıkların yeri değişmediği için L hâlâ K'dan daha derindedir; su eklemek bu farkı ortadan kaldırmaz.",
    "Etkiyi yalnız derindeki balığa bağlama: su eklenince yüzey yükselir ve iki balığın da su yüzeyine uzaklığı artar; K'ya etki eden basınç da artar.",
    "Derinliği yer değişimiyle karıştırma: balıkların yeri değişmese de yüzey yükseldiği için derinlikleri artmıştır; derinlik artınca basınç da artar."
  ],
  aciklama: `Sıvı basıncı, noktanın sıvı yüzeyinden olan derinliğine bağlıdır. Su eklemek yüzeyi yükseltir ve her noktanın derinliğini artırır.
Adım 1: Balıklar yerinde kaldığı için su eklenince yüzey yükselir; K ve L'nin su yüzeyine uzaklığı, yani derinlikleri artar. İki balığa etki eden sıvı basıncı da artar.
Adım 2: Su eklenmeden önce L, K'dan daha derindeydi (20 cm > 8 cm). Yüzey yükselince ikisinin derinliği de artar; L yine daha derindir.
Adım 3: Aynı sıvıda daha derindeki noktaya daha büyük basınç etki eder; L'ye etki eden basınç K'ya etki edenden büyük kalır.
Sık yapılan hata: Su eklenince yalnızca derindeki balığın etkilendiğini düşünmek. Yüzey yükselince bütün noktaların derinliği artar.
Cevap A.`
},
{
  id: "fen-sg-339",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir iş makinesinin hidrolik kolunda, pompa pistonu ile kolu hareket ettiren geniş piston yağla dolu kapalı bir boruyla bağlıdır ve iki piston aynı yüksekliktedir. Operatör pompa pistonuna sabit bir kuvvet uygularken, makinenin bakımında geniş pistonun yerine daha geniş bir piston takılmıştır.
Buna göre;
I. Yağın basıncı, iki pistonun altında da aynıdır.
II. Geniş pistonun yüzeyi büyüdüğü için yağa iletilen basınç artar.
III. Geniş pistonu iten kuvvet artar.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "II ve III", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü gözden kaçırma: basınç aynı kalır, ancak geniş pistonun yüzeyi büyüdüğü için onu iten kuvvet artar.",
    "I'i gözden kaçırma: kapalı sıvıda basınç iki pistonun altında da aynıdır; I. yargı doğrudur.",
    "II'yi doğru sayma: yağa iletilen basıncı pompa pistonuna uygulanan kuvvet belirler. Geniş pistonun büyümesi basıncı artırmaz, yalnızca onu iten kuvveti artırır.",
    null
  ],
  aciklama: `Hidrolik sistemde basınç, pompa pistonunun uyguladığı kuvvetten ve yüzeyinden gelir; geniş pistonun büyüklüğü iletilen basıncı değiştirmez.
Adım 1: I. yargı doğrudur. Aynı yükseklikteki iki pistonun altında basınç eşittir.
Adım 2: II. yargı yanlıştır. Pompa pistonuna uygulanan kuvvet ve onun yüzeyi değişmediği için yağa iletilen basınç aynı kalır.
Adım 3: III. yargı doğrudur. Basınç aynı, yüzey büyüdü; geniş pistonu iten kuvvet artar.
Sık yapılan hata: Geniş pistonun büyümesini basıncın da artması sanmak.
Cevap D.`
},
{
  id: "fen-sg-340",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Banyo fayansına vantuzla yapıştırılan bir sabunluk günlerce düşmeden durmuştur. Bir gün vantuzun kenarında küçük bir çatlak oluşmuş ve sabunluk bir süre sonra düşmüştür.
**Sabunluğun çatlak oluştuktan sonra düşmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Çatlaktan çıkan hava, vantuzu fayanstan uzaklaştıran bir çekme oluşturmuştur.",
    "Çatlaktan giren hava, vantuzun içindeki basıncı artırarak dışarıdaki açık hava basıncını yenmiştir.",
    "Çatlaktan giren hava, içerideki basıncı dışarıdakine yaklaştırmış; bastıran etki azalmıştır.",
    "Çatlak oluşunca vantuz ile fayans arasındaki boşluk büyümüş ve boşluk, vantuzu aşağı çekmiştir."
  ],
  dogru: 2,
  hatalar: [
    "Boşluk çekmez: vantuzu yüzeye bastıran şey dışarıdaki açık hava basıncıdır. Havanın çatlaktan çıkması vantuzu fayanstan uzaklaştırmaz.",
    "Basıncı fazla büyütme: içeri giren hava, vantuzun içindeki basıncı yalnızca dışarıdakine yaklaştırır; dışarıdaki basıncı yenmesi gerekmez, eşitlenmesi yeterlidir.",
    null,
    "Boşluk çeker sanma: boşluk bir kuvvet uygulamaz. Vantuzu yüzeye bastıran dışarıdaki açık hava basıncıdır; boşluğun büyümesi çekme oluşturmaz."
  ],
  aciklama: `Vantuz, içindeki hava azaltılarak yüzeye yapıştırılır. İçerideki basınç dışarıdakinden küçük olduğu için dışarıdaki açık hava basıncı vantuzu yüzeye bastırır.
Adım 1: Vantuz fayansa yapışıkken içeride basınç küçük, dışarıda büyüktür; aradaki fark vantuzu fayansa tutar.
Adım 2: Çatlak oluşunca dışarıdan hava vantuzun içine girer ve içerideki basınç dışarıdaki açık hava basıncına yaklaşır.
Adım 3: İki taraftaki basınç farkı azalınca vantuzu fayansa bastıran etki de azalır; sabunluk kendi ağırlığıyla düşer.
Sık yapılan hata: “Vantuz, içindeki boşluk yüzünden yapışır” demek. Yapıştıran, dışarıdaki havanın basıncıdır.
Cevap C.`
},
{
  id: "fen-sg-341",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Genişlikleri ve su kütleleri farklı olan K, L ve M kaplarına su konmuştur. Kapların özellikleri tabloda verilmiştir. Kapların tabanlarındaki sıvı basınçları P_{K}, P_{L} ve P_{M} olarak adlandırılmıştır.
**Buna göre P_{K}, P_{L} ve P_{M} arasındaki ilişki nasıldır?**`,
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Kabın genişliği</th><th>Su yüksekliği (cm)</th><th>Su kütlesi (kg)</th></tr><tr><td>K</td><td>Geniş</td><td>10</td><td>2</td></tr><tr><td>L</td><td>Dar</td><td>20</td><td>1</td></tr><tr><td>M</td><td>Çok geniş</td><td>10</td><td>4</td></tr></table>`,
  secenekler: [
    "P_{L} > P_{K} > P_{M}",
    "P_{L} > P_{K} = P_{M}",
    "P_{M} > P_{K} > P_{L}",
    "P_{K} = P_{L} = P_{M}"
  ],
  dogru: 1,
  hatalar: [
    "Yarım uygulama: L'nin derinliği en fazla olduğu için doğru yerleştirilmiş, ancak K ile M aynı derinlikte olduğundan basınçları eşittir.",
    null,
    "Kütleyle basıncı karıştırma: sıralama su kütlesine göre yapılmış. Basıncı belirleyen, kütle değil derinliktir.",
    "Derinliği yok sayma: kapların genişliği basıncı değiştirmez, ama su yükseklikleri farklıdır; L'nin yüksekliği iki katıdır."
  ],
  aciklama: `Sıvı basıncı derinliğe bağlıdır; kabın genişliği ve içindeki sıvının kütlesi basıncı etkilemez.
Adım 1: Tabloda sıvı aynıdır (su). Basıncı yalnızca su yüksekliği belirler.
Adım 2: L'nin su yüksekliği 20 cm, K ve M'ninki 10 cm'dir. Dolayısıyla P_{L} en büyüktür.
Adım 3: K ve M'nin yüksekliği eşit olduğundan P_{K} = P_{M} olur; kütlelerinin farklı olması bunu değiştirmez.
Sık yapılan hata: Kütlesi en fazla olan kapta basıncın da en fazla olduğunu düşünmek.
Cevap B.`
},
{
  id: "fen-sg-342",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Rüya, "Sıvı basıncı sıvının cinsine bağlıdır." hipotezini test etmek için özdeş iki kaba aynı yüksekliğe kadar su ve zeytinyağı koymuş; ikisinin tabanına özdeş basınç algılayıcıları yerleştirip okumaları kaydetmiştir.
Buna göre;
I. Bağımsız değişken, algılayıcıların gösterdiği değerdir.
II. Bağımlı değişken, algılayıcıların gösterdiği değerdir.
III. Sıvıların yüksekliği kontrol değişkenidir.
**ifadelerinden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Değişkenleri karıştırma: algılayıcının gösterdiği değer ölçülen, yani bağımlı değişkendir. Bağımsız değişken sıvının cinsidir.",
    "III'ü gözden kaçırma: sıvıların yüksekliği, deneyde sabit tutulduğu için kontrol değişkenidir.",
    "I'i doğru sayma: değiştirilen şey sıvının cinsidir; algılayıcıdaki değer değiştirilmez, ölçülür.",
    null
  ],
  aciklama: `Bir deneyde bağımsız değişken sınanan, yani değiştirilen koşuldur; bağımlı değişken ölçülen sonuçtur; kontrol değişkenleri ise sabit tutulan koşullardır.
Adım 1: Rüya sıvının cinsini değiştirmiştir; bağımsız değişken sıvının cinsidir. I. ifade yanlıştır.
Adım 2: Algılayıcının gösterdiği değer ölçülen sonuçtur; bağımlı değişkendir. II. ifade doğrudur.
Adım 3: Sıvı yüksekliği iki kapta da aynı tutulmuştur; kontrol değişkenidir. III. ifade doğrudur.
Sık yapılan hata: Ölçülen değeri değiştirilen değişkenle karıştırmak.
Cevap D.`
},
{
  id: "fen-sg-343",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Esnek ince bir zarla alt ağzı kapatılmış, içi boş bir cam tüp, zar aşağı bakacak biçimde su dolu geniş bir kaba batırılmıştır. Tüp suya indikçe zarın içe doğru çöktüğü ve çökmenin arttığı gözlenmiştir.
Buna göre;
I. Zarın daha fazla çökmesi, tüp derine indikçe sıvı basıncının arttığını gösterir.
II. Tüp, zar aynı derinlikte kalacak biçimde yana yatırılırsa zarın çökmesi değişir; çünkü sıvı basıncı yalnızca yukarıdan aşağıya doğru etki eder.
III. Tüp aynı derinlikte tuzlu su dolu kaba batırılırsa zarın çökmesi azalır.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "I'i atlama ve II'yi doğru sayma: sıvı basıncı aynı derinlikte her yöne eşit etki eder; zarın yönü değişse de derinlik aynıysa çökme değişmez.",
    "III'ü doğru sayma: tuzlu su sudan yoğundur; aynı derinlikte daha büyük basınç uygular, bu yüzden zar daha çok çöker.",
    "II'yi ve III'ü doğru sayma: yön değişimi basıncı değiştirmez, tuzlu su ise basıncı artırır; ikisi de yanlıştır."
  ],
  aciklama: `Sıvı, kabın her yüzeyine ve içindeki cisimlere her yönde basınç uygular. Basınç derinlikle ve sıvının yoğunluğuyla artar. Esnek zarın çökmesi, zara etki eden basıncı gözle görmeyi sağlar.
Adım 1: I. yargı doğrudur. Tüp indikçe zarın derinliği artar; zar daha çok çöktüğüne göre basınç artmıştır.
Adım 2: II. yargı yanlıştır. Sıvı basıncı aynı derinlikte her yöne eşit etki eder; zarın yönü değişse de çökme değişmez.
Adım 3: III. yargı yanlıştır. Tuzlu su sudan yoğundur; aynı derinlikte daha büyük basınç uygular, zar daha çok çöker.
Sık yapılan hata: Sıvı basıncının yalnızca yukarıdan aşağıya etki ettiğini düşünmek.
Cevap A.`
},
{
  id: "fen-sg-344",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Cem, bir bardağı ağzına kadar suyla doldurmuş, ağzını ince bir kartonla kapatmış ve bardağı hızla ters çevirmiştir. Cem kartonu tutan elini çektiğinde karton düşmemiş, bardaktaki su da dökülmemiştir. Bardağın içinde hava kalmamıştır.
**Kartonun düşmemesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Kartonla su arasındaki boşluk kartonu yukarı doğru çeker ve karton bu çekme sayesinde bardağa tutunur.",
    "Kartonun dış yüzüne alttan etki eden açık hava basıncı, suyun kartona uyguladığı basınçtan büyüktür.",
    "Bardak ters çevrilince suyun ağırlığı azalır ve karton bu küçük ağırlığı rahatça taşıyabilir.",
    "Islanan karton bardağın kenarına yapışır ve açık hava basıncının bu olayda hiçbir etkisi yoktur."
  ],
  dogru: 1,
  hatalar: [
    "Boşluk çekmez: kartonu bardağa bastıran, dışarıdan alttan etki eden açık hava basıncıdır. Boşluğun çektiğini sanmak yaygın bir yanılgıdır.",
    null,
    "Ağırlık yanılgısı: bardağı ters çevirmek suyun ağırlığını azaltmaz. Kartonu düşürmeyen, alttan etki eden açık hava basıncıdır.",
    "Yapışmayı tek neden sanma: ıslak karton kenara az da olsa tutunur ama onu taşıyan, alttan etki eden açık hava basıncıdır; bu etkiyi yok saymak yanlıştır."
  ],
  aciklama: `Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğar ve cisimlerin her yüzeyine etki eder. Bir cismin iki yanındaki basınçlar karşılaştırılır; büyük basınç cismi küçük basınca doğru iter.
Adım 1: Bardak ağzına kadar doludur ve içinde hava yoktur. Kartonu aşağı bastıran tek şey suyun basıncıdır; bu basınç birkaç santimetrelik su yüksekliğinden doğduğu için küçüktür.
Adım 2: Kartonun dış yüzüne alttan açık hava basıncı etki eder. Bu basınç suyun basıncından çok büyüktür ve kartonu yukarı doğru bastırır.
Adım 3: Yukarı doğru etki eden basınç aşağı doğru etki edenden büyük olduğu için karton düşmez.
Sık yapılan hata: Kartonu "boşluğun çektiğini" ya da yalnızca yapışmanın tuttuğunu düşünmek. Sorulacak soru şudur: Hangi tarafta basınç büyük?
Cevap B.`
},
{
  id: "fen-sg-345",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğretmen, Pascal prensibini anlatırken şunları söylemiştir:
I. Katı bir cisme uygulanan kuvvet, genel olarak uygulandığı doğrultuda iletilir.
II. Kapalı kaptaki sıvıya uygulanan basınç, yalnızca uygulandığı yönde iletilir.
III. Hidrolik sistemlerde sıvı kullanılır; çünkü sıvılar, gazlardan farklı olarak kolayca sıkıştırılamaz.
**Buna göre öğretmenin hangi cümleleri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: sıvılar neredeyse hiç sıkıştırılamadığı için hidrolik sistemlerde kullanılır; III doğrudur.",
    "II'yi doğru sayma: kapalı kaptaki sıvıya uygulanan basınç her yöne ve her noktaya aynen iletilir; yalnızca itilen yönde değildir.",
    null,
    "I'i atlama ve II'yi doğru sayma: I doğrudur; II ise sıvı basıncının yalnızca itme yönünde iletildiğini söyleyen yanlış bir yargıdır."
  ],
  aciklama: `Katılar kuvveti uygulandığı doğrultuda iletir; sıvılar ise uygulanan basıncı her yöne aynen iletir. Gazlar kolay sıkıştığı için hidrolik sistemlerde sıvı kullanılır.
Adım 1: I. cümle doğrudur; katı cisim itildiği doğrultuda kuvveti iletir.
Adım 2: II. cümle yanlıştır; sıvı basıncı her yöne ve her noktaya aynen iletir.
Adım 3: III. cümle doğrudur. Hidrolik sisteme hava girerse itme önce havayı sıkıştırır ve sistem zayıf çalışır.
Sık yapılan hata: Sıvıyı katı gibi düşünüp basıncın yalnızca itme yönünde iletildiğini sanmak.
Cevap C.`
},
{
  id: "fen-sg-346",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırma ekibi, denizin farklı yerlerine K, L ve M basınç sensörlerini yerleştirmiştir. Her sensörün bulunduğu yerde deniz tabanının su yüzeyine uzaklığı ve sensörün deniz tabanından yüksekliği tabloda verilmiştir. Sensörlerin derinliği su yüzeyinden ölçülür; derinliği tablodaki iki değerden hesaplaman gerekir. Sensörlere etki eden sıvı basınçları P_{K}, P_{L} ve P_{M} olarak adlandırılmıştır.
**Buna göre P_{K}, P_{L} ve P_{M} arasındaki ilişki nasıldır?**`,
  gorsel: `<table class="tablo"><tr><th>Sensör</th><th>Deniz tabanının yüzeyden uzaklığı (m)</th><th>Sensörün tabandan yüksekliği (m)</th></tr><tr><td>K</td><td>200</td><td>120</td></tr><tr><td>L</td><td>120</td><td>0</td></tr><tr><td>M</td><td>160</td><td>10</td></tr></table>`,
  secenekler: [
    "P_{K} > P_{M} > P_{L}",
    "P_{L} > P_{M} > P_{K}",
    "P_{M} > P_{L} > P_{K}",
    "P_{M} > P_{K} > P_{L}"
  ],
  dogru: 2,
  hatalar: [
    "Derinliği yanlış ölçme: deniz derinliği ya da tabandan yükseklik, noktanın derinliği sanılmış. Derinlik yüzeyden ölçülür; K'nin derinliği 80 m ile en küçüğüdür.",
    "Tabana yakınlığı derinlik sanma: L tabandadır diye en derin kabul edilmiş. Oysa M 150 m, L 120 m derindedir.",
    null,
    "Yarım doğru: M en derin olarak bulunmuş, ama K'nin derinliği (80 m) L'ninkinden (120 m) küçüktür."
  ],
  aciklama: `Sıvı basıncı, noktanın sıvı yüzeyinden derinliği arttıkça artar. Derinlik, deniz tabanından değil deniz yüzeyinden ölçülür.
Adım 1: Her sensörün derinliği = Deniz tabanının yüzeyden uzaklığı − Sensörün tabandan yüksekliği. K: 200 − 120 = 80 m. L: 120 − 0 = 120 m. M: 160 − 10 = 150 m.
Adım 2: Aynı sıvı (deniz suyu) içinde derinlik büyüdükçe basınç büyür: M (150 m) > L (120 m) > K (80 m).
Sık yapılan hata: Deniz derinliğini ya da tabandan yüksekliği noktanın derinliği sanmak.
Cevap C.`
},
{
  id: "fen-sg-347",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir meteoroloji öğrencisi, aynı gün ve benzer hava koşullarında dört kasabadaki barometre değerlerini not etmiştir.
**Buna göre kasabaların deniz seviyesinden yüksekliklerinin büyükten küçüğe doğru sıralaması aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Kasaba</th><th>Barometre değeri (hPa)</th></tr><tr><td>K</td><td>1012</td></tr><tr><td>L</td><td>950</td></tr><tr><td>M</td><td>880</td></tr><tr><td>N</td><td>985</td></tr></table>`,
  secenekler: ["M > L > N > K", "K > N > L > M", "M > N > L > K", "L > M > K > N"],
  dogru: 0,
  hatalar: [
    null,
    "Ters yorumlama: yükseldikçe açık hava basıncı artmaz, azalır. Bu sıralama basıncın büyükten küçüğe sıralamasıdır.",
    "Sıralamayı karıştırma: N'nin basıncı (985) L'ninkinden (950) büyüktür; yani N, L'den daha alçaktadır.",
    "Rastgele sıralama: değerler basıncın yükseklikle azaldığı kuralına göre sıralanmamıştır."
  ],
  aciklama: `Açık hava basıncı yükseldikçe azalır. Aynı koşullarda barometre değeri ne kadar küçükse yer o kadar yüksektir.
Adım 1: Değerleri küçükten büyüğe sırala: M (880) < L (950) < N (985) < K (1012).
Adım 2: Basıncı en küçük olan en yüksek yerdedir. Yüksekliğin büyükten küçüğe sıralaması M > L > N > K olur.
Sık yapılan hata: Yüksek basıncı yüksek yer sanmak.
Cevap A.`
},
{
  id: "fen-sg-348",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen öğretmeni, günlük hayattan basınçla ilgili üç gözlemi tahtaya yazmıştır:
I. Su dolu bir pet şişenin yan yüzeyindeki delikten suyun yana doğru fışkırması, sıvıların kabın yan yüzeylerine de basınç uyguladığını gösterir.
II. Havuzda derine dalan bir kişinin kulaklarında baskı hissetmesi, sıvı basıncının derinlikle arttığını gösterir.
III. Pipetle meyve suyu içebilmemiz, sıvıların kabın tabanına basınç uygulamasına dayanır.
**Buna göre bu gözlemlerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "II ve III", "I ve II"],
  dogru: 3,
  hatalar: [
    "I'i gözden kaçırma: yan yüzeydeki delikten suyun yana doğru fışkırması, sıvıların kabın yan yüzeylerine de basınç uyguladığını gösterir.",
    "III'ü doğru sayma: pipetle içecek içmek, dışarıdaki açık hava basıncının içeceği pipete itmesine dayanır; sıvının tabana uyguladığı basınca değil.",
    "I'i atlama ve III'ü doğru sayma: I doğrudur; III ise pipetin çalışma nedenini sıvı basıncına bağlayan yanlış bir yargıdır.",
    null
  ],
  aciklama: `Sıvı basıncı derinlikle artar ve sıvı, bulunduğu kabın yan yüzeylerine de basınç uygular. Pipetle içecek içmek ise açık hava basıncına dayanır.
Adım 1: I. gözlem doğrudur. Yan yüzeyde açılan delikten suyun yana doğru fışkırması, sıvının yan yüzeye de basınç uyguladığını gösterir.
Adım 2: II. gözlem doğrudur. Derine indikçe sıvı basıncı arttığı için kulakta baskı hissedilir.
Adım 3: III. gözlem yanlıştır. Pipetle içecek içilirken pipetin içindeki basınç küçülür; içeceği pipete iten, dışarıdaki açık hava basıncıdır.
Sık yapılan hata: Her olayı sıvı basıncıyla açıklamaya çalışmak. Önce basıncın hangi etkenden geldiğine bakmak gerekir.
Cevap D.`
},
{
  id: "fen-sg-349",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir berber koltuğu, yağla dolu kapalı bir hidrolik sistemle yükselir: Berber ayağıyla bir pedala basar, pedala bağlı dar piston yağı iter, yağ da koltuğun altındaki geniş pistonu yukarı doğru iter. Berber, kendisinden çok daha ağır bir müşteri koltuğa oturduğunda koltuğu aynı yüksekliğe çıkarmak için pedala daha büyük kuvvetle basması gerektiğini fark etmiştir.
**Bu gözlem aşağıdakilerden hangisiyle açıklanır?**`,
  gorsel: null,
  secenekler: [
    "Ağır müşteri koltuğa oturunca yağ sıkışarak basıncı azaltır ve pistonu yavaşça aşağı iter.",
    "Daha ağır yük için yağın basıncı artmalıdır; bu da dar pistona uygulanan kuvvetin artmasıyla sağlanır.",
    "Ağır müşteride geniş pistonun yüzeyi büyüdüğü için basıncın artması gerekir.",
    "Ağır müşteride yağ, kuvveti pistonlara eşit paylaştırdığı için pedala daha büyük kuvvet uygulanır."
  ],
  dogru: 1,
  hatalar: [
    "Yağın sıkışabildiğini sanma: sıvılar neredeyse hiç sıkıştırılamaz. Ağır yük için basıncın artması gerekir, azalması değil.",
    null,
    "Yüzey yanılgısı: geniş pistonun yüzeyi müşteri ağırlaşınca değişmez. Gerekli basınç, yükün artmasıyla artar.",
    "Kuvvetin paylaşıldığını sanma: sıvı kuvveti değil basıncı aynen iletir; kuvvet yalnızca pistonun yüzeyine bağlı olarak değişir."
  ],
  aciklama: `Hidrolik sistemde geniş piston yükü yukarı iterken, pistonun altındaki yağ basıncı yükü dengelemelidir. Yük ne kadar ağırsa gereken basınç da o kadar büyüktür.
Adım 1: Pascal prensibine göre dar pistondaki basınç, geniş pistonun altına aynen iletilir.
Adım 2: Ağır müşteriyi kaldırmak için geniş pistonun altındaki basıncın artması gerekir.
Adım 3: Basıncı artırmanın yolu, dar pistona uygulanan kuvveti artırmaktır; berber pedala daha büyük kuvvetle basar.
Sık yapılan hata: Yağın sıkışabildiğini ya da geniş pistonun yüzeyinin değiştiğini düşünmek.
Cevap B.`
},
{
  id: "fen-sg-350",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir mahallenin içme suyu, ağzı açık bir su kulesinden evlere borularla dağıtılmaktadır. Kule, mahallenin en yüksek tepesine kurulmuştur ve evler tepenin eteklerindedir. Evlerin muslukları, hiçbir pompa kullanılmadan güçlü bir biçimde su akıtmaktadır.
**Su kulesinin yüksek bir yere kurulmasının amacı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Kule suyunun yüzeyi ile musluk arasındaki yükseklik farkı artınca musluktaki sıvı basıncı da artar.",
    "Yüksek yerde açık hava basıncı daha büyük olduğu için su, borulara daha güçlü itilir.",
    "Kuleye çıkıldıkça suyun yoğunluğu artar; bu yüzden musluktaki sıvı basıncı büyür.",
    "Kule yüksekte olduğu için içinde daha çok su depolanır; musluktaki basınç yalnızca bu yüzden artar."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yükseklik ile açık hava basıncını ters yorumlama: yükseldikçe açık hava basıncı artmaz, azalır. Suyu güçlü akıtan, kule suyunun musluğa göre yüksekte olması, yani derinlik farkıdır.",
    "Yoğunluğun değiştiğini sanma: suyun yoğunluğu kulenin yüksekliğine göre değişmez. Basıncı artıran, yoğunluk değil yükseklik (derinlik) farkıdır.",
    "Miktar yanılgısı: sıvı basıncı depolanan su miktarına değil, su yüzeyinin musluğa göre yüksekliğine bağlıdır."
  ],
  aciklama: `Kuledeki su, evlerin musluklarına göre yüksekte durur. Musluk, kule suyunun yüzeyinden ne kadar aşağıdaysa o kadar derindedir ve oradaki sıvı basıncı o kadar büyüktür.
Adım 1: Kule suyunun yüzeyi ile musluk arasındaki yükseklik farkı, musluğun derinliğidir.
Adım 2: Kule tepeye kurulunca bu fark artar; sıvı basıncı derinlikle arttığı için musluktaki basınç büyür ve su pompasız da güçlü akar.
Adım 3: Su miktarı, suyun yoğunluğu ya da açık hava basıncı bu sonucu açıklamaz.
Sık yapılan hata: Kulenin yüksekte olmasını açık hava basıncıyla ya da depolanan su miktarıyla açıklamak.
Cevap A.`
}
,
{
  id: "fen-sg-351",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, durgun sıvılar içindeki K, L ve M noktalarının bulunduğu sıvıları ve sıvı yüzeyinden derinliklerini şöyle belirlemiştir: K noktası tuzlu suda 6 cm, L noktası suda 9 cm, M noktası suda 3 cm derinliktedir. Tuzlu suyun yoğunluğu suyunkinden büyüktür. Noktalar farklı biçimli kaplardadır.
I. P_{L} > P_{K}
II. P_{L} > P_{M}
III. P_{K} > P_{M}
**Buna göre bu basınç karşılaştırmalarından hangileri kesinlikle doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "II ve III", "I ve III"],
  dogru: 2,
  hatalar: [
    "III'ü atlama: K tuzlu suda ve M'den daha derindedir; hem sıvı daha yoğun hem derinlik daha fazladır, bu yüzden P_{K} > P_{M} kesindir.",
    "II'yi atlama: L ve M aynı sıvıdadır (su); L daha derin olduğundan P_{L} > P_{M} kesindir.",
    null,
    "I'i doğru sayma: L suda daha derinde, K ise daha yoğun sıvıda ama daha sığdadır. Etkenler ters yöndedir; hangisinin büyük olduğu kesin söylenemez."
  ],
  aciklama: `Sıvı basıncı derinlik ve yoğunlukla artar. Bir karşılaştırmanın kesin olması için iki etkenin aynı yönde (ya da biri eşit, diğeri üstün) olması gerekir.
Adım 1: L ile M aynı sıvıdadır; L daha derindedir. P_{L} > P_{M} kesindir (II doğru).
Adım 2: K ile M'yi karşılaştır: K'nın sıvısı daha yoğun ve K daha derindedir. İki etken de K'dan yanadır; P_{K} > P_{M} kesindir (III doğru).
Adım 3: L ile K'yı karşılaştır: L daha derindedir ama K'nın sıvısı daha yoğundur. Etkenler ters yönde olduğundan hangisinin büyük olduğu bilinemez (I kesin değildir).
Sık yapılan hata: Etkenler ters yöndeyken tek bir etkene bakıp karar vermek.
Cevap C.`
},
{
  id: "fen-sg-352",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir cam atölyesinde büyük cam levhalar, içindeki hava pompayla azaltılan vantuzlu bir aparatla taşınmaktadır. Aparat deniz kıyısındaki atölyede levhayı sorunsuz taşımaktadır. Aynı aparat ve aynı levhayla 3000 m yükseklikteki bir dağ evinin inşaatında çalışan ustalar, levhanın vantuzdan daha kolay kurtulduğunu fark etmiştir.
**Bu durumun nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Yüksek yerde cam levhanın ağırlığı artmış, vantuz levhayı taşıyamaz hâle gelmiştir.",
    "Yüksek yerde vantuzun içindeki hava miktarı artmış, vantuzun tutma gücü azalmıştır.",
    "Yüksek yerde güneş ışığı daha güçlü olduğundan vantuzun lastiği genişlemiş, levhaya yapışması engellenmiştir.",
    "Yüksek yerde açık hava basıncı azaldığı için vantuzu levhaya bastıran etki azalmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Ağırlık yanılgısı: levhanın ağırlığı birkaç yüz metrelik farkla gözle görülür değişmez. Asıl değişen açık hava basıncıdır.",
    "Hava miktarını neden sanma: vantuzun içindeki hava pompayla azaltılmıştır. Yükseklikle değişen, dışarıdaki açık hava basıncıdır.",
    "İlgisiz neden uydurma: güneş ışığının gücü ya da lastiğin genişlemesi vantuzun tutunmasını belirleyen etken değildir. Değişen, dışarıdaki açık hava basıncıdır.",
    null
  ],
  aciklama: `Vantuz, içindeki hava azaltılarak yüzeye yapışır. Levhayı vantuza bastıran, dışarıdaki açık hava basıncıdır.
Adım 1: Vantuzun içindeki basınç küçüktür; dışarıdaki açık hava basıncı büyüktür. Aradaki fark levhayı vantuza tutar.
Adım 2: Yükseklere çıkıldıkça üstte kalan hava tabakası incelir ve açık hava basıncı azalır.
Adım 3: Dışarıdaki basınç azalınca, içerideki basınçla arasındaki fark küçülür; levhayı vantuza bastıran etki zayıflar.
Sık yapılan hata: Yüksek yerde vantuzun gücünü etkileyen şeyin hava koşulları ya da ağırlık olduğunu sanmak.
Cevap D.`
},
{
  id: "fen-sg-353",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir hemşire, hastanın koluna bağlı serum setinde serumun yavaş aktığını görmüş ve serum torbasını askıda daha yükseğe asmıştır. Hemşire bu işlemden sonra serumun daha hızlı aktığını gözlemlemiştir.
Buna göre;
I. Torba yükseğe asılınca serum yüzeyi ile iğne ucu arasındaki yükseklik farkı artar; iğne ucundaki sıvı basıncı da artar.
II. Serumun akış hızı yalnızca torbadaki serum miktarına bağlıdır, torbanın asılma yüksekliğinden bağımsızdır.
III. Torba boşaldıkça serum yüzeyi alçaldığı için iğne ucundaki sıvı basıncı azalır ve akış zamanla yavaşlar.
**yargılarından hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "III'ü gözden kaçırma: torba boşaldıkça serum yüzeyi alçalır, iğne ucuna göre yükseklik farkı azalır; basınç ve akış hızı zamanla azalır.",
    null,
    "I'i atlama ve II'yi doğru sayma: akış hızı torbadaki serum miktarına değil, serum yüzeyinin iğne ucuna göre yüksekliğine bağlıdır.",
    "II'yi doğru sayma: serumun akışı miktarla değil yükseklik farkıyla belirlenir; torbayı yükseğe asmak hızı değiştirir."
  ],
  aciklama: `Serum torbası ile iğne ucu arasında bir yükseklik farkı vardır. Bu fark, sıvı basıncındaki derinlik gibi davranır: iğne ucu, torbadaki serum yüzeyinden ne kadar aşağıdaysa uçtaki sıvı basıncı o kadar büyüktür.
Adım 1: I. yargı doğrudur. Torba yükseğe asılınca yükseklik farkı artar; iğne ucundaki sıvı basıncı artar ve serum daha hızlı akar.
Adım 2: II. yargı yanlıştır. Akış hızını belirleyen torbadaki serum miktarı değil, serum yüzeyinin iğne ucuna göre yüksekliğidir.
Adım 3: III. yargı doğrudur. Torba boşaldıkça serum yüzeyi alçalır, yükseklik farkı azalır; basınç düşer ve akış yavaşlar.
Sık yapılan hata: Sıvı miktarı ile sıvı basıncını karıştırmak.
Cevap B.`
},
{
  id: "fen-sg-354",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, aynı basınç ölçerle K ve L sıvılarında farklı derinliklerde ölçüm yapmış ve sonuçlarını grafikte doğrularla göstermiştir. M sıvısında ise yalnızca tek bir derinlikte ölçüm yapabilmiş ve bu ölçümü grafikte noktayla göstermiştir.
**Buna göre K, L ve M sıvılarının yoğunlukları d_{K}, d_{L} ve d_{M} arasındaki ilişki aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 460 274" role="img" aria-label="Ölçer okuması derinlik grafiği: K doğrusu L doğrusundan daha diktir; M noktası 25 cm derinlikte 20 okuma verir ve L doğrusunun altında kalır"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="225" x2="430" y2="225"/><line x1="60" y1="225" x2="60" y2="30"/></g><line x1="60" y1="225" x2="396" y2="67" stroke="var(--vurgu)" stroke-width="3"/><line x1="60" y1="225" x2="396" y2="99" stroke="var(--vurgu2)" stroke-width="3"/><g stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.5"><line x1="360" y1="135" x2="360" y2="225"/><line x1="60" y1="135" x2="360" y2="135"/></g><circle cx="360" cy="135" r="5" fill="currentColor"/><g fill="currentColor" font-size="16" font-weight="bold"><text x="402" y="70">K</text><text x="402" y="103">L</text><text x="368" y="128">M</text></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="54" y="49">40</text><text x="54" y="94">30</text><text x="54" y="139">20</text><text x="54" y="184">10</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="180" y="245">10</text><text x="300" y="245">20</text><text x="360" y="245">25</text><text x="420" y="245">30</text><text x="250" y="268">Derinlik (cm)</text></g><text x="66" y="22" fill="currentColor" font-size="14">Ölçer okuması</text></svg>`,
  secenekler: ["d_{K} > d_{L} > d_{M}", "d_{K} > d_{L} = d_{M}", "d_{M} > d_{L} > d_{K}", "d_{L} > d_{K} > d_{M}"],
  dogru: 0,
  hatalar: [
    null,
    "M noktasını L doğrusu üzerinde sanma: M'nin noktası L doğrusunun altında kalır. Aynı derinlikte L'den küçük okuma verdiği için M, L'den daha az yoğundur.",
    "Doğruların eğimini ters yorumlama: aynı derinlikte okuması büyük olan sıvı daha yoğundur. K'nın doğrusu en diktir; K en yoğun sıvıdır.",
    "K ile L'yi ters sıralama: K'nın doğrusu L'ninkinden daha diktir; yani aynı derinlikte K'nın okuması L'ninkinden büyüktür."
  ],
  aciklama: `Sıvı basıncı derinliğe ve yoğunluğa bağlıdır. Grafikte aynı derinlikte okuması büyük olan sıvı daha yoğundur; bir nokta, bir sıvının doğrusunun altında kalıyorsa o sıvıdan daha az yoğundur.
Adım 1: K ve L doğrularına bak: aynı derinlikte K'nın okuması L'ninkinden büyüktür (K doğrusu daha diktir); d_{K} > d_{L}.
Adım 2: M noktası 25 cm derinlikte 20 okuma vermiştir. L doğrusu aynı derinlikte 25 okuma verirdi. M'nin okuması L'ninkinden küçük olduğuna göre d_{L} > d_{M}.
Adım 3: Sıralama d_{K} > d_{L} > d_{M} olur.
Sık yapılan hata: M'nin okumasını L'nin 20 cm'deki okumasıyla (20 = 20) eşleyip derinlik farkını hesaba katmamak.
Cevap A.`
},
{
  id: "fen-sg-355",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen öğretmeni, günlük hayattan üç olayı ve her olayı açıklayan bilgiyi şöyle eşleştirmiştir:
I. Uçakta ağzı kapalı bir yoğurt kabının kapağının kabarması — Çevredeki açık hava basıncının azalması
II. Su dolu bir bidonun alt kısmındaki musluktan suyun, üst kısmındaki musluktan daha güçlü akması — Sıvı basıncının derinlikle artması
III. Damperli bir kamyonun kasasının pompa yardımıyla kaldırılması — Pascal prensibi
**Buna göre eşleştirmelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ve III'ü eksik sayma: bidonun alt musluğunun daha güçlü akması derinlikle, damperin kalkması Pascal prensibiyle açıklanır; bu iki eşleştirme de doğrudur.",
    "III'ü eksik sayma: damperli kamyonda kapalı sistemdeki yağa uygulanan basınç aynen iletilir; bu Pascal prensibinin uygulamasıdır.",
    "I'i eksik sayma: ağzı kapalı kabın kapağının uçakta kabarmasının nedeni, dışarıdaki açık hava basıncının azalmasıdır.",
    null
  ],
  aciklama: `Bir olayı doğru bilgiyle eşleştirmek için önce düzeneğe bak: kapalı sıvı mı itiliyor, ağzı açık sıvı mı var, yoksa hava mı basınç uyguluyor?
Adım 1: I doğrudur. Uçak yükseldikçe dışarıdaki açık hava basıncı azalır; kapalı kabın içindeki basınç dışarıdakinden büyük kalır ve kapak kabarır.
Adım 2: II doğrudur. Bidonun alt musluğu su yüzeyinden daha derindedir; derinlik arttıkça sıvı basıncı artar.
Adım 3: III doğrudur. Kapalı yağa pompa basınç uygular; bu basınç aynen kasayı iten pistona iletilir.
Sık yapılan hata: Bir eşleştirmedeki doğru bilgiyi, ilk bakışta tanıdık olmadığı için yanlış saymak.
Cevap D.`
},
{
  id: "fen-sg-356",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `X, Y ve Z sıvılarının yoğunlukları arasında d_{X} > d_{Y} > d_{Z} ilişkisi vardır. Farklı biçimli kaplardaki K, L, M ve N noktalarının bulunduğu sıvılar ve sıvı yüzeyinden derinlikleri tabloda verilmiştir.
I. P_{N} > P_{K}
II. P_{N} > P_{L}
III. P_{M} > P_{L}
**Buna göre bu basınç karşılaştırmalarından hangileri kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Nokta</th><th>Sıvı</th><th>Derinlik (cm)</th></tr><tr><td>K</td><td>X</td><td>15</td></tr><tr><td>L</td><td>Y</td><td>15</td></tr><tr><td>M</td><td>Z</td><td>15</td></tr><tr><td>N</td><td>Y</td><td>25</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"],
  dogru: 1,
  hatalar: [
    "I'i doğru sayma: N daha derindedir ama K'nın sıvısı daha yoğundur. Etkenler ters yöndedir; P_{N} ile P_{K} kesin karşılaştırılamaz.",
    null,
    "I'i doğru sayma: II doğrudur, ancak N ile K'da etkenler ters yönde olduğu için I kesin değildir.",
    "III'ü doğru sayma: M ile L aynı derinliktedir; Y, Z'den daha yoğun olduğundan P_{L} > P_{M} olur. III yanlıştır."
  ],
  aciklama: `Bir karşılaştırma ancak etkenlerin ikisi de aynı taraftaysa (ya da biri eşit, diğeri üstünse) kesindir.
Adım 1: I için N ve K'ya bak: N daha derin, K'nın sıvısı daha yoğun. Etkenler ters yönde; kesin söylenemez.
Adım 2: II için N ve L'ye bak: ikisi de Y sıvısında, N daha derin. P_{N} > P_{L} kesindir.
Adım 3: III için M ve L'ye bak: derinlik eşit, Y sıvısı Z'den yoğun. P_{L} > P_{M}'dir; III yanlıştır.
Sık yapılan hata: Etkenlerin ters yönde olduğu durumlarda bile kesin hüküm vermek.
Cevap B.`
},
{
  id: "fen-sg-357",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir mahallenin ağzı açık su kulesindeki suyun yüzeyi, yerden 36 m yüksektedir. Kuleden borularla su alan K, L ve M evlerinin banyo musluklarının yerden yükseklikleri ve kuleye yatay uzaklıkları tabloda verilmiştir. Üç musluk da aynı anda açılmıştır.
I. Kuleye en yakın olan L musluğundaki sıvı basıncı en büyüktür.
II. Sıvı basıncı en büyük olan musluk K musluğudur.
III. Kuledeki su yüzeyi biraz alçalırsa (musluklardan hiçbirinin altına inmeden) üç musluktaki sıvı basıncı da azalır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Ev</th><th>Musluğun yerden yüksekliği (m)</th><th>Kuleye yatay uzaklık (m)</th></tr><tr><td>K</td><td>6</td><td>900</td></tr><tr><td>L</td><td>18</td><td>100</td></tr><tr><td>M</td><td>30</td><td>400</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Uzaklık yanılgısı: basıncı kuleye yatay uzaklık değil, musluğun kule suyunun yüzeyine göre ne kadar aşağıda olduğu belirler. L'nin derinliği 18 m, K'ninki 30 m'dir.",
    "III'ü atlama: su yüzeyi alçalınca bütün musluklarda derinlik azalır, sıvı basıncı da azalır.",
    null,
    "I'i doğru sayma: yatay uzaklık sıvı basıncını belirlemez. L'nin derinliği K'ninkinden küçüktür; en büyük basınç K'dadır."
  ],
  aciklama: `Ağzı açık kuledeki su, musluklardan yüksekte durur. Bir musluğun derinliği, kule suyunun yüzeyi ile musluk arasındaki yükseklik farkıdır; derinlik arttıkça musluktaki sıvı basıncı artar.
Adım 1: Derinlikleri bul: K: 36 − 6 = 30 m, L: 36 − 18 = 18 m, M: 36 − 30 = 6 m.
Adım 2: I. yargı yanlıştır; kuleye yatay uzaklık basıncı belirlemez, L, K'dan daha az derindedir. II. yargı doğrudur; en derindeki musluk K'dır.
Adım 3: III. yargı doğrudur. Su yüzeyi alçalınca (musluklardan hiçbirinin altına inmeden) her musluğun derinliği azalır, basınçlar da azalır.
Sık yapılan hata: Kuleye yakın musluğun daha güçlü akacağını sanmak. Uzaklık değil, derinlik belirleyicidir.
Cevap C.`
},
{
  id: "fen-sg-358",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, farklı biçimli ve farklı sıvılar içeren K, L ve M kaplarındaki sıvıların derinliklerini görseldeki gibi ölçmüştür. K kabında su, L ve M kaplarında ise yoğunluğu sudan büyük olan tuzlu su vardır. Kapların tabanlarındaki sıvı basınçları P_{K}, P_{L} ve P_{M} olarak adlandırılmıştır.
**Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<svg viewBox="0 0 520 262" role="img" aria-label="K kabında 20 cm su, L kabında 15 cm tuzlu su, M kabında 25 cm tuzlu su"><rect x="20" y="110" width="80" height="120" fill="var(--vurgu)" fill-opacity="0.3"/><rect x="180" y="140" width="110" height="90" fill="var(--vurgu2)" fill-opacity="0.4"/><rect x="380" y="80" width="60" height="150" fill="var(--vurgu2)" fill-opacity="0.4"/><g fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,70 20,230 100,230 100,70"/><polyline points="180,90 180,230 290,230 290,90"/><polyline points="380,50 380,230 440,230 440,50"/><path d="M108,110 H114 M108,110 V230 M108,230 H114"/><path d="M298,140 H304 M298,140 V230 M298,230 H304"/><path d="M448,80 H454 M448,80 V230 M448,230 H454"/></g><g fill="currentColor" font-size="15"><text x="116" y="175">20 cm</text><text x="306" y="190">15 cm</text><text x="456" y="160">25 cm</text></g><g fill="currentColor" font-size="15" font-weight="bold" text-anchor="middle"><text x="60" y="252">K (su)</text><text x="235" y="252">L (tuzlu su)</text><text x="410" y="252">M (tuzlu su)</text></g></svg>`,
  secenekler: [
    "P_{M}, hem P_{K}'dan hem P_{L}'den büyüktür.",
    "P_{K}, hem P_{L}'den hem P_{M}'den büyüktür.",
    "P_{L}, hem P_{K}'dan hem P_{M}'den büyüktür.",
    "P_{K}, P_{L} ve P_{M} basınçları birbirine eşittir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Etkenleri yok sayma: M, K'dan hem daha yoğun sıvıda hem daha derindedir. P_{K}, P_{M}'den büyük olamaz.",
    "Etkenleri yok sayma: M ve L aynı sıvıdadır (tuzlu su) ve M daha derindir. P_{L}, P_{M}'den büyük olamaz.",
    "Eşitliği kesin sanma: kaplarda hem sıvı hem derinlik farklıdır; basınçların eşit olduğu söylenemez, M'nin basıncı en büyüktür."
  ],
  aciklama: `Sıvı basıncı derinlik ve yoğunlukla artar. Kesin sonuç için iki etkenin aynı yönde olması gerekir.
Adım 1: M ile L aynı sıvıdadır (tuzlu su); M daha derindir (25 cm > 15 cm). P_{M} > P_{L} kesindir.
Adım 2: M ile K'ya bak: M'nin sıvısı daha yoğun ve daha derindir (25 cm > 20 cm). P_{M} > P_{K} kesindir.
Adım 3: K ile L'de etkenler ters yöndedir; K daha derin, L'nin sıvısı daha yoğun. Aralarında kesin bir karşılaştırma yapılamaz.
Sık yapılan hata: Derinliği yok sayarak tuzlu suyun her zaman büyük basınç yaptığını düşünmek.
Cevap A.`
},
{
  id: "fen-sg-359",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Meltem, "Sıvı basıncı kabın biçimine bağlıdır." hipotezini test etmek için aynı sıvıyı kullanacak ve kapların tabanlarına özdeş basınç algılayıcıları yerleştirecektir. Dört farklı plan düşünmüştür.
**Meltem'in hipotezini test etmek için aşağıdaki planlardan hangisi uygundur?**`,
  gorsel: null,
  secenekler: [
    "Biçimleri farklı iki kaba aynı hacimde su koymak",
    "Aynı biçimli iki kaba farklı yüksekliklerde su koymak",
    "Biçimleri farklı iki kaba farklı sıvıları aynı yüksekliğe kadar koymak",
    "Biçimleri farklı iki kaba aynı sıvıyı aynı yüksekliğe kadar koymak"
  ],
  dogru: 3,
  hatalar: [
    "Hacmi eşit tutma: biçimleri farklı kaplarda aynı hacim farklı yükseklik demektir; biçimle birlikte derinlik de değişir. Kontrol edilmesi gereken yüksekliktir.",
    "Bağımsız değişkeni değiştirmeme: kapların biçimi aynıdır; bu plan derinliğin etkisini sınar, biçiminkini değil.",
    "İki değişkeni birden değiştirme: sıvının cinsi de farklıdır; sonuç hangi değişkenden geldiği anlaşılamaz.",
    null
  ],
  aciklama: `Bir hipotezi sınarken yalnızca bağımsız değişken değiştirilir, diğer bütün koşullar (kontrol değişkenleri) sabit tutulur.
Adım 1: Sınanan değişken kabın biçimidir; kapların biçimi farklı olmalıdır.
Adım 2: Sıvının cinsi ve sıvının yüksekliği (derinliği) iki kapta da aynı tutulmalıdır.
Adım 3: Bu koşulları yalnızca “biçimleri farklı, aynı sıvı, aynı yükseklik” planı sağlar.
Sık yapılan hata: Aynı miktar sıvı koymayı doğru kontrol sanmak; miktar eşit olunca yükseklik eşit olmaz.
Cevap D.`
},
{
  id: "fen-sg-360",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `X, Y ve Z sıvılarının yoğunlukları arasında d_{X} > d_{Y} > d_{Z} ilişkisi vardır. Farklı biçimli kaplarda bulunan K noktası X sıvısında, L noktası Y sıvısında, M noktası Z sıvısındadır. Üç noktaya etki eden sıvı basınçları birbirine eşittir.
**Buna göre K, L ve M noktalarının sıvı yüzeylerinden derinlikleri h_{K}, h_{L} ve h_{M} arasındaki ilişki nasıldır?**`,
  gorsel: null,
  secenekler: [
    "h_{K} > h_{L} > h_{M}",
    "h_{K} = h_{L} = h_{M}",
    "h_{L} > h_{K} > h_{M}",
    "h_{M} > h_{L} > h_{K}"
  ],
  dogru: 3,
  hatalar: [
    "Yoğunlukla derinliği aynı yöne sıralama: yoğunluğu en büyük sıvıda en derin sanılmış. Basınçlar eşitse yoğunluğu büyük sıvıda derinlik küçük olur.",
    "Eşit basıncı eşit derinlik sanma: sıvılar farklı yoğunlukta olduğundan aynı basıncı oluşturmak için derinlikler farklı olmak zorundadır.",
    "Sıralamayı karıştırma: Y sıvısı X'ten az yoğundur, bu yüzden L'nin derinliği K'ninkinden büyüktür; ama Z, Y'den de az yoğun olduğu için M'nin derinliği L'ninkinden de büyüktür.",
    null
  ],
  aciklama: `Sıvı basıncı derinliğe ve yoğunluğa bağlıdır. Basınçlar eşitse yoğunluk büyüdükçe derinlik küçülmelidir; yoğunluk ile derinlik ters yönde değişir.
Adım 1: X en yoğun sıvıdır; aynı basıncı oluşturmak için K'nın derinliği en küçük olmalıdır.
Adım 2: Z en az yoğun sıvıdır; aynı basıncı oluşturmak için M'nin derinliği en büyük olmalıdır.
Adım 3: Y bu ikisinin arasındadır; derinlikler h_{M} > h_{L} > h_{K} biçiminde sıralanır.
Sık yapılan hata: Yoğun sıvıda derinliğin de büyük olması gerektiğini düşünmek. Basınçlar eşitken yoğun sıvı daha sığ derinlikte aynı basıncı verir.
Cevap D.`
},
{
  id: "fen-sg-361",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir baraj gölünü tutan duvardaki K, L ve M gözlem noktaları, göl suyunun yüzeyinden sırasıyla 5 m, 12 m ve 20 m aşağıdadır. Göl, çok geniş bir alana yayılmış tatlı su gölüdür. Mühendisler, gözlem noktalarına etki eden sıvı basıncını izlemektedir.
I. Göl, duvara paralel yönde çok daha geniş hâle getirilirse (su yüzeyi aynı kalmak koşuluyla) M noktasına etki eden sıvı basıncı artar.
II. K, L ve M noktalarından sıvı basıncı en büyük olan M noktasıdır.
III. Göl suyunun yüzeyi biraz alçalırsa K noktasına etki eden sıvı basıncı değişmez; çünkü duvar K noktasında kalındır.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "Genişlik yanılgısı ve II'yi atlama: gölün genişliği basıncı değiştirmez; sıvı basıncı derinliğe bağlıdır ve en derindeki nokta M'dir.",
    null,
    "Genişlik ve kalınlık yanılgısı: gölün genişliği de duvarın kalınlığı da sıvı basıncını belirlemez. Seviye düşünce derinlik azalır, basınç da azalır.",
    "III'ü doğru sayma: su yüzeyi alçalınca K noktasının yüzeye uzaklığı azalır ve basıncı da azalır. Duvarın K'daki kalınlığı basıncı değiştirmez."
  ],
  aciklama: `Sıvı basıncı, noktanın sıvı yüzeyinden olan derinliğiyle artar; gölün genişliği, suyun miktarı ya da duvarın kalınlığı basıncı belirlemez.
Adım 1: I. yargı yanlıştır. Göl genişleyince su yüzeyinin M noktasına uzaklığı değişmez; basınç da değişmez.
Adım 2: II. yargı doğrudur. M, su yüzeyinden en uzak (20 m) noktadır; basıncı en büyük olan M'dir.
Adım 3: III. yargı yanlıştır. Su yüzeyi alçalınca K'nın derinliği azalır, basıncı da azalır. Duvarın kalın olması basıncı değiştirmez; yalnızca duvarın basınca dayanmasına yardım eder.
Sık yapılan hata: Geniş gölde basıncın daha büyük olacağını düşünmek.
Cevap B.`
},
{
  id: "fen-sg-362",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Burak, "Sıvı basıncı sıvının cinsine bağlıdır." hipotezini test etmek için özdeş iki kaptan birine 15 cm yüksekliğe kadar su, diğerine 10 cm yüksekliğe kadar tuzlu su koymuştur. Tabanlardaki özdeş algılayıcılar aynı değeri göstermiştir. Burak, "Sıvı cinsi basıncı değiştirmiyor, hipotezim desteklenmedi." sonucuna varmıştır. Tuzlu suyun yoğunluğu suyunkinden büyüktür.
**Burak'ın deneyi ve sonucuyla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Sıvı cinsi ile derinlik birlikte değiştirildiği için deney, sıvı cinsinin etkisini tek başına sınayamaz.",
    "Kaplar özdeş olduğu için deney geçersizdir; kapların farklı olması gerekirdi.",
    "Okumalar eşit çıktığı için sıvı basıncı derinliğe bağlı değildir, yalnızca sıvı miktarına bağlıdır.",
    "Derinlik farklı olsa da sıvı cinsi sınandığı için deney güvenilirdir ve sonuç doğrudur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Özdeş kabın hata olduğunu sanma: kapların özdeş olması kontrol değişkenini sabit tutmak için doğrudur. Hata, derinliğin farklı olmasındadır.",
    "Sonucu yanlış genelleme: eşit okuma, derinliğin etkisiz olduğunu göstermez; tam tersine derinlik farkı sıvı cinsi farkını dengelemiştir. Miktar basıncı belirlemez.",
    "Derinliğin kontrol edilmesi gerektiğini yok sayma: iki değişken birlikte değiştiğinde sonuç, hangisinden kaynaklandığı belli olmadığından güvenilir değildir."
  ],
  aciklama: `Bir deneyde yalnızca sınanan değişken değiştirilir, diğer koşullar sabit tutulur; aksi halde sonucun hangi değişkenden geldiği anlaşılamaz.
Adım 1: Burak sıvı cinsini değiştirmiştir; bu doğrudur.
Adım 2: Ama derinliği de farklı tutmuştur (15 cm ve 10 cm). Derinlik de basıncı değiştirdiği için okumaların eşit çıkması iki etkinin birbirini dengelemesinden olabilir.
Adım 3: Bu yüzden deney sıvı cinsinin etkisini tek başına sınayamaz; “hipotez desteklenmedi” demek yanlıştır.
Sık yapılan hata: Hatalı kurulan deneyden bilgiyi çürüten bir sonuç çıkarmak.
Cevap A.`
},
{
  id: "fen-sg-363",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fen öğretmeni, hava basıncıyla ilgili üç cümle söylemiştir:
I. Durgun duran havanın basıncı yoktur; hava ancak rüzgârlı olduğunda basınç uygular.
II. Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından kaynaklanır.
III. Açık hava basıncı bir cismin her yüzeyine etki eder.
**Buna göre öğretmenin hangi cümleleri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "II ve III", "I ve III"],
  dogru: 2,
  hatalar: [
    "Durgun havanın basıncı olmadığını sanma: gazlar akışkan olduğu için durgun hâlde de her yöne basınç uygular.",
    "III'ü atlama: açık hava basıncı, cismin üstüne, altına ve yanlarına, yani her yüzeyine etki eder.",
    null,
    "II'yi atlama ve I'i doğru sayma: durgun havanın da basıncı vardır (I yanlış); açık hava basıncı hava tabakasının ağırlığından doğar (II doğru)."
  ],
  aciklama: `Gazlar da akışkandır; durgun hâlde bile bulundukları ortamda her yöne basınç uygularlar. Açık hava basıncı, Dünya'yı saran hava tabakasının ağırlığından doğar.
Adım 1: I yanlıştır. Hava rüzgâr olmasa da basınç uygular.
Adım 2: II doğrudur. Basınç, hava tabakasının ağırlığından gelir.
Adım 3: III doğrudur. Açık hava basıncı bir cismin üstüne, altına ve yanlarına etki eder.
Sık yapılan hata: Basıncı yalnızca rüzgârla ya da yalnızca yukarıdan aşağıya etki eden bir kuvvet sanmak.
Cevap C.`
},
{
  id: "fen-sg-364",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir dalgıç elbisesi üreticisi, deneme dalışına çıkan bir dalgıcın derinliğini zamana göre kaydetmiştir. Dalgıç tatlı su içindeki bir gölde dalmış ve grafikteki yolu izlemiştir. Üretici, elbiseye etki eden sıvı basıncını bu kayıttan yorumlayacaktır.
**Grafiğe göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<svg viewBox="0 0 460 272" role="img" aria-label="Dalgıcın derinliğinin zamana göre değişimi: 2. dakikada 20 metreye iner, 4. dakikaya kadar 20 metrede kalır, 5. dakikada 12 metreye çıkar, 7. dakikaya kadar orada kalır, 8. dakikada yüzeye çıkar"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="225" x2="430" y2="225"/><line x1="60" y1="225" x2="60" y2="30"/></g><g stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.5"><line x1="60" y1="65" x2="220" y2="65"/><line x1="60" y1="129" x2="340" y2="129"/><line x1="140" y1="65" x2="140" y2="225"/><line x1="220" y1="65" x2="220" y2="225"/><line x1="260" y1="129" x2="260" y2="225"/><line x1="340" y1="129" x2="340" y2="225"/></g><polyline points="60,225 140,65 220,65 260,129 340,129 380,225" fill="none" stroke="var(--vurgu)" stroke-width="3"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="54" y="69">20</text><text x="54" y="133">12</text><text x="54" y="229">0</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="140" y="245">2</text><text x="220" y="245">4</text><text x="260" y="245">5</text><text x="340" y="245">7</text><text x="380" y="245">8</text><text x="250" y="268">Zaman (dk)</text></g><text x="66" y="22" fill="currentColor" font-size="14">Derinlik (m)</text></svg>`,
  secenekler: [
    "0-2. dakikalar arasında basınç artmış, 4-5. dakikalar arasında da artmıştır.",
    "2-4. dakikalar arasında basınç sabittir ve dalışın en büyük basınç değerindedir.",
    "1. dakikada dalgıca etki eden basınç, 6. dakikada etki edenden daha büyüktür.",
    "7-8. dakikalar arasında basınç artmış ve 8. dakikada en büyük değerine ulaşmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Yönü ters okuma: 4-5. dakikalar arasında derinlik azalır; sıvı basıncı da azalır. 0-2. dakikalar arasındaki artış doğrudur ama ifade bütünüyle yanlıştır.",
    null,
    "Derinlikleri karşılaştırma hatası: 1. dakikada derinlik yaklaşık 10 m, 6. dakikada 12 m'dir. Derinlik arttıkça basınç arttığı için 6. dakikadaki basınç daha büyüktür.",
    "Yüzeye çıkışı dalış sanma: 7-8. dakikalar arasında dalgıç yüzeye çıkar; derinlik azalır, basınç da azalır ve 8. dakikada en küçük değerine iner."
  ],
  aciklama: `Dalgıca etki eden sıvı basıncı derinliğe bağlıdır: derinlik arttıkça basınç artar, azaldıkça azalır, derinlik sabitse basınç da sabittir. Bu yüzden grafikteki derinlik değişimi, basınç değişimini de verir.
Adım 1: 0-2. dakikalar arasında derinlik 0'dan 20 m'ye artar, basınç artar. 2-4. dakikalar arasında derinlik 20 m'de sabittir; basınç sabittir ve dalışın en büyük değerindedir.
Adım 2: 4-5. dakikalar arasında derinlik azalır, basınç da azalır (A yanlış). 5-7. dakikalar arasında derinlik 12 m'dir.
Adım 3: 1. dakikada derinlik yaklaşık 10 m, 6. dakikada 12 m'dir; 6. dakikadaki basınç daha büyüktür (C yanlış). 7-8. dakikalar arasında dalgıç yüzeye çıkar, basınç azalır (D yanlış).
Sık yapılan hata: Zaman ilerledikçe basıncın hep arttığını düşünmek ya da yüzeye çıkışı dalış sanmak.
Cevap B.`
},
{
  id: "fen-sg-365",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Dikdörtgenler prizması biçimli, ağzı açık bir su bidonunun farklı yüzlerinde K, L ve M delikleri vardır. K deliği ön yüzde, L deliği arka yüzde olup ikisi de su yüzeyinden 10 cm aşağıdadır; M deliği yan yüzde ve su yüzeyinden 25 cm aşağıdadır. Bidon ağzına kadar doludur ve delikler aynı anda açılmıştır.
I. K ve L deliklerinden çıkan su aynı güçte fışkırır.
II. L deliğinden çıkan su, arka yüzdeki delikten çıktığı için K deliğinden çıkandan daha zayıf fışkırır.
III. Bidon boşalırken M deliğinden çıkan su zamanla zayıflar.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "II ve III", "I ve III"],
  dogru: 3,
  hatalar: [
    "III'ü atlama: bidon boşaldıkça su yüzeyi alçalır, M'nin derinliği azalır ve akış zayıflar.",
    "I'i atlama: K ve L aynı derinliktedir; farklı yüzlerde olsalar da suyu aynı güçte fışkırtırlar.",
    "II'yi doğru sayma: delikten fışkırma deliğin hangi yüzde olduğuna değil derinliğine bağlıdır. K ve L eşit derinliktedir.",
    null
  ],
  aciklama: `Sıvı basıncı, aynı derinlikte her yönde eşittir. Deliğin hangi yüzde olduğu fışkırma gücünü değiştirmez.
Adım 1: I doğrudur. K ve L'nin derinliği eşit; fışkırma da eşittir.
Adım 2: II yanlıştır. Fışkırma, deliğin konumuna (ön, arka) değil derinliğine bağlıdır.
Adım 3: III doğrudur. Su azaldıkça M'nin su yüzeyine uzaklığı azalır, basınç ve fışkırma zayıflar.
Sık yapılan hata: Fışkırma gücünü deliğin bulunduğu yüze bağlamak.
Cevap D.`
},
{
  id: "fen-sg-366",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Aynı gün, deniz kıyısındaki bir yüzme havuzunda ve 3000 m yükseklikteki bir dağ gölünde birer dalgıç, su yüzeyinden 10 m derinliğe inmiştir. İki yerde de su tatlı sudur. Dalgıçların taşıdığı özdeş ölçerler, dalgıca etki eden toplam basıncı (açık hava basıncı ile sıvı basıncının toplamı) göstermektedir.
**Buna göre dalgıçlara etki eden basınçlar için aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Sıvı basınçları eşittir; toplam basınç deniz kıyısında daha büyüktür.",
    "Sıvı basınçları eşittir; toplam basınç dağ gölünde daha büyüktür.",
    "Sıvı basıncı dağ gölünde daha büyüktür; toplam basınçlar eşittir.",
    "Sıvı basınçları eşittir; toplam basınçlar da eşittir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yükseklikle açık hava basıncını ters yorumlama: dağ gölünde açık hava basıncı daha küçüktür, bu yüzden toplam basınç da daha küçüktür.",
    "Yükseklik etkisini sıvı basıncına bağlama: sıvı basıncı derinliğe ve sıvı cinsine bağlıdır; ikisi de aynıdır. Fark açık hava basıncındandır.",
    "Açık hava basıncını yok sayma: toplam basınç hem sıvı basıncından hem açık hava basıncından oluşur; açık hava basıncı yükseklikle değişir."
  ],
  aciklama: `Su altındaki bir noktaya etki eden toplam basınç, açık hava basıncı ile suyun basıncının toplamıdır.
Adım 1: İki dalgıç da tatlı suda ve 10 m derinlikte; sıvı basınçları eşittir.
Adım 2: Dağ gölü 3000 m yüksekte olduğundan oradaki açık hava basıncı deniz kıyısındakinden küçüktür.
Adım 3: Sıvı basınçları eşit, açık hava basıncı farklı; toplam basınç deniz kıyısındaki havuzda daha büyüktür.
Sık yapılan hata: Yükseklikle yalnızca sıvı basıncının değiştiğini ya da hiçbir şeyin değişmediğini düşünmek.
Cevap A.`
},
{
  id: "fen-sg-367",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Üç öğrenci, günlük gözlemlerini gerekçeleriyle birlikte açıklamıştır:
I. Sude: "Geniş bir gölün 5 m derinliğindeki basınç, ince uzun bir borudaki suyun 5 m derinliğindeki basınçtan büyüktür; çünkü gölde daha çok su vardır."
II. Mert: "Dalgıç elbiseleri derin sularda daha dayanıklı yapılır; çünkü derinlik arttıkça sıvı basıncı artar."
III. Ayşe: "Deniz kıyısında kapağı kapatılan boş bir pet şişe, yüksek bir dağa götürülünce kabarır; çünkü dışarıdaki açık hava basıncı azalmıştır."
**Buna göre hangi öğrencilerin açıklamaları (yargı ve gerekçeleriyle birlikte) bilimsel olarak doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "Yalnız III", "II ve III", "I ve III"],
  dogru: 2,
  hatalar: [
    "III'ü atlama: yüksekte dışarıdaki açık hava basıncı azalır; kapalı şişe bu yüzden kabarır. Ayşe'nin açıklaması doğrudur.",
    "II'yi atlama: Mert'in açıklaması doğrudur. Derinlik arttıkça sıvı basıncı arttığı için dalgıç elbiseleri derin sularda daha dayanıklı yapılır.",
    null,
    "Sude'nin açıklamasını doğru sayma: aynı derinlikte, aynı sıvıda basınç eşittir; sıvı miktarı basıncı belirlemez."
  ],
  aciklama: `Bir açıklamanın doğru olması için hem yargının hem gerekçenin doğru olması gerekir.
Adım 1: Sude'nin gerekçesi yanlıştır. Aynı sıvıda aynı derinlikte basınç eşittir; gölde daha çok su olması basıncı değiştirmez.
Adım 2: Mert'in açıklaması doğrudur. Sıvı basıncı derinlikle arttığı için derin sularda dalgıç elbisesine daha büyük basınç etki eder; elbise bu yüzden daha dayanıklı yapılır.
Adım 3: Ayşe'nin açıklaması doğrudur. Dağda dışarıdaki açık hava basıncı azalır; şişenin içindeki basınç dışarıdakinden büyük kalır ve şişe kabarır.
Sık yapılan hata: Sonucu doğru olan bir yargıyı, gerekçesi yanlışken de doğru saymak.
Cevap C.`
},
{
  id: "fen-sg-368",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `K ve L noktaları Y sıvısındadır; K noktası sıvı yüzeyinden 10 cm, L noktası aynı sıvının yüzeyinden 20 cm derinliktedir. M noktası ise yüzeyinden 15 cm derinlikte bulunan X sıvısındadır. X ile Y sıvılarının yoğunlukları arasındaki ilişki bilinmemektedir. Noktaların basınçları P_{K}, P_{L} ve P_{M} olarak adlandırılmıştır.
**Buna göre P_{K}, P_{L} ve P_{M} basınçlarının sıralaması aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "P_{L} > P_{M} > P_{K}",
    "P_{M} > P_{K} > P_{L}",
    "P_{L} > P_{K} > P_{M}",
    "P_{M} > P_{L} > P_{K}"
  ],
  dogru: 1,
  hatalar: [
    "Bu sıralama olabilir: M'nin sıvısı Y'den biraz daha seyrek olabilir; M, K ile L arasında yer alabilir.",
    null,
    "Bu sıralama olabilir: X çok seyrek bir sıvıysa M'nin basıncı K'nınkinden de küçük olabilir.",
    "Bu sıralama olabilir: X çok yoğun bir sıvıysa M'nin basıncı L'ninkinden de büyük olabilir."
  ],
  aciklama: `Aynı sıvıda daha derindeki nokta daha büyük basınç yapar. X'in yoğunluğu bilinmediği için M'nin yeri belirsizdir, ama K ile L arasındaki ilişki kesindir.
Adım 1: K ve L aynı sıvıda, L daha derin. Bu yüzden P_{L} > P_{K} her zaman doğrudur.
Adım 2: M, X sıvısında olduğundan P_{M}'nin konumu belirsizdir: K'nın altında, K ile L arasında ya da L'nin üstünde olabilir.
Adım 3: P_{K} > P_{L} içeren, yani K'yı L'nin üstüne koyan sıralama kesinlikle olamaz. P_{M} > P_{K} > P_{L} böyledir.
Sık yapılan hata: Bilinmeyen sıvıdaki noktanın yerini sabit sanmak.
Cevap B.`
},
{
  id: "fen-sg-369",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki tabloda dört olayda, hangi tarafta basıncın daha büyük olduğu ve gözlenen sonuç verilmiştir.
**Buna göre hangi olaya ait bilgi __yanlıştır__?**`,
  gorsel: `<table class="tablo"><tr><th>Olay</th><th>Basıncı daha büyük olan taraf</th><th>Gözlenen sonuç</th></tr><tr><td>Pipetle meyve suyu içilmesi</td><td>Dışarıdaki açık hava</td><td>Meyve suyu pipete girer</td></tr><tr><td>Vantuzun fayansa yapışması</td><td>Vantuzun içi</td><td>Vantuz fayansta tutunur</td></tr><tr><td>Damlalıkla ilaç çekilmesi</td><td>Dışarıdaki açık hava</td><td>İlaç damlalığa girer</td></tr><tr><td>Uçakta ağzı kapalı yoğurt kabının kapağının kabarması</td><td>Kabın içi</td><td>Kapak dışarı doğru kabarır</td></tr></table>`,
  secenekler: [
    "Vantuzun fayansa yapışması",
    "Pipetle meyve suyu içilmesi",
    "Damlalıkla ilaç çekilmesi",
    "Yoğurt kabının kapağının kabarması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru satırı yanlış sanma: pipetle içerken pipetin içindeki basınç küçülür, dışarıdaki açık hava basıncı sıvıyı pipete iter; satır doğrudur.",
    "Doğru satırı yanlış sanma: damlalığın lastik başı bırakılınca içerideki basınç küçülür, dışarıdaki büyük açık hava basıncı ilacı içeri iter; satır doğrudur.",
    "Doğru satırı yanlış sanma: uçak yükselince dışarıdaki basınç azalır, kabın içindeki basınç daha büyük kalır ve kapak dışarı doğru kabarır; satır doğrudur."
  ],
  aciklama: `Hareketi belirleyen, iki taraftaki basıncın hangisinin büyük olduğudur: cisim ya da sıvı, basıncı büyük olan taraftan küçük olan tarafa itilir.
Adım 1: Pipet, damlalık ve uçaktaki kap satırları doğrudur.
Adım 2: Vantuz satırı yanlıştır. Vantuzun içindeki hava azaltıldığı için içerideki basınç küçüktür; dışarıdaki açık hava basıncı vantuzu fayansa bastırır.
Adım 3: Doğru satır: “Basıncı daha büyük olan taraf: dışarıdaki açık hava”.
Sık yapılan hata: Vantuzu içerideki havanın çektiğini sanmak.
Cevap A.`
},
{
  id: "fen-sg-370",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir su sebilinde, ağzı aşağıya bakan dolu bir damacana, sebilin ağzı açık su haznesine yerleştirilmiştir ve damacananın ağzı hazne suyuna batıktır. Hazneden su alındıkça hazne seviyesi düşer; seviye damacananın ağzının altına inince damacanadan hazneye su akar ve damacananın içinde hava kabarcıkları yükselir. Seviye damacananın ağzını yeniden kapatınca akış durur.
**Seviye damacananın ağzını kapattığında akışın durmasının nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Damacananın içindeki boşluk, suyu yukarı çekmeye devam etmektedir ve suyun akmasını engeller.",
    "Damacanadaki su, hazne suyundan daha az yoğun olduğu için hazneye akmaz ve yerinde kalır.",
    "Damacanadaki su azaldığı için suyun basıncı sıfır olmuş ve akış kendiliğinden durmuştur.",
    "Hazne yüzeyine etki eden açık hava basıncı, damacanadaki suyu aşağıdan desteklemektedir."
  ],
  dogru: 3,
  hatalar: [
    "Boşluk çekmez: suyun akmasını engelleyen, boşluk değil hazne yüzeyine etki eden açık hava basıncıdır.",
    "Yoğunluk yanılgısı: iki taraftaki su aynıdır; yoğunlukları eşittir. Akışın durma nedeni yoğunluk farkı değildir.",
    "Basıncı yok sayma: damacanadaki su azalsa da su basıncı sıfır olmaz; derinlik ve açık hava basıncı sürmektedir.",
    null
  ],
  aciklama: `Açık hava basıncı, hazne suyunun yüzeyine her yönden etki eder. Bu basınç suyun içine iletilir ve damacanadaki suyu aşağıdan destekler.
Adım 1: Seviye damacananın ağzını kapatınca damacananın içine hava giremez.
Adım 2: Damacanadaki suyun üstündeki basınç küçülür; hazne yüzeyindeki açık hava basıncı suyu aşağıdan destekler.
Adım 3: Su, hava giremediği sürece akmaz; seviye ağzın altına inince hava girer, iki taraftaki basınç dengelenir ve su akar.
Sık yapılan hata: Suyu tutan şeyin boşluk olduğunu sanmak; tutan, dışarıdaki açık hava basıncıdır.
Cevap D.`
},
{
  id: "fen-sg-371",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Ece, "Sıvı basıncı, kaptaki sıvının miktarına (derinliğinden bağımsız olarak) bağlıdır." hipotezini test etmek istemektedir. Bir plan, hipotezi doğru sınıyorsa sıvı miktarı değişirken derinlik sabit tutulmalıdır. Üç öğrenci üç plan önermiştir. Her planda kapların tabanına özdeş basınç algılayıcıları yerleştirilecek ve aynı su kullanılacaktır.
I. Özdeş iki kaba farklı yüksekliklerde su koymak.
II. Taban alanları farklı iki kaba aynı yüksekliğe kadar su koymak.
III. Aynı kaba önce 10 cm, sonra 20 cm yüksekliğe kadar su koymak.
**Buna göre hangi planlar Ece'nin hipotezini doğru biçimde sınar?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "Yalnız II", "II ve III"],
  dogru: 2,
  hatalar: [
    "Derinliği de değiştiren planı seçme: özdeş kaplara farklı yükseklikte su koymak miktarla birlikte derinliği de değiştirir.",
    "Derinliği de değiştiren planları seçme: I ve III'te su miktarı artarken derinlik de artar; sonuç hangi değişkenden kaynaklandığı anlaşılamaz.",
    null,
    "III'ü doğru sayma: aynı kaba daha çok su koymak derinliği de artırır. Derinlik sabit kalmadığı için miktarın etkisi tek başına sınanamaz."
  ],
  aciklama: `Miktarın etkisini sınamak için su miktarı değiştirilirken derinlik sabit tutulmalıdır.
Adım 1: I'de iki kap özdeştir; farklı yükseklik hem miktarı hem derinliği değiştirir. Hipotezi tek başına sınamaz.
Adım 2: II'de taban alanları farklı kaplara aynı yüksekliğe kadar su konur. Miktar farklı, derinlik aynıdır; ölçümler eşit çıkarsa miktar basıncı değiştirmiyor demektir.
Adım 3: III'te aynı kaba daha çok su koymak derinliği de artırır; hipotezi tek başına sınamaz.
Sık yapılan hata: Miktarı artırmanın derinliği de artırdığını gözden kaçırmak.
Cevap C.`
},
{
  id: "fen-sg-372",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Deniz, "Sıvı basıncı kabın genişliğine bağlıdır." hipotezini test etmek için aynı suyu iki kaba koymuş ve tabanlarına özdeş algılayıcılar yerleştirmiştir. Sonuçları tabloya yazmıştır. Ölçümlerin farklı çıktığını görünce Deniz, "Hipotezim desteklendi." demiştir.
**Deniz'in sonucuyla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Genişlik</th><th>Sıvı</th><th>Su yüksekliği (cm)</th><th>Algılayıcı okuması</th></tr><tr><td>K</td><td>Geniş</td><td>Su</td><td>10</td><td>12</td></tr><tr><td>L</td><td>Dar</td><td>Su</td><td>20</td><td>24</td></tr></table>`,
  secenekler: [
    "Sonuç doğrudur; ölçümlerin farklı çıkması kabın genişliğinin basıncı etkilediğini gösterir.",
    "Sonuç hatalıdır; derinlikler farklı olduğundan ölçüm farkının genişlikten kaynaklandığı söylenemez.",
    "Sonuç hatalıdır; genişlik sınanırken kullanılan sıvı su yerine yağ olmalıdır.",
    "Sonuç doğrudur; geniş kapta ölçülen değer her zaman daha küçük çıkar."
  ],
  dogru: 1,
  hatalar: [
    "Hatalı deneyden sonuç çıkarma: kapların genişliği farklı, ama su yükseklikleri de farklıdır. Ölçüm farkı derinlikten gelmiş olabilir.",
    null,
    "Sıvı cinsini gerekli sanma: aynı sıvı kullanmak zaten gereklidir. Asıl hata, derinliklerin farklı olmasıdır.",
    "Kural uydurma: geniş kapta değerin her zaman küçük çıkması gerekmez; sıvı basıncı genişliğe değil derinliğe ve sıvının cinsine bağlıdır."
  ],
  aciklama: `Bir hipotezi sınarken bağımsız değişkenin dışındaki bütün koşullar sabit tutulmalıdır. Aksi halde farkın nedeni belirsiz kalır.
Adım 1: Deniz kabın genişliğini değiştirmiştir (geniş ve dar).
Adım 2: Ama su yüksekliğini de değiştirmiştir (10 cm ve 20 cm). Derinlik farklı olduğu için basıncın farklı çıkması derinlikten kaynaklanabilir.
Adım 3: Bu yüzden ölçüm farkı genişliğin etkisini göstermez; Deniz'in sonucu hatalıdır. Doğru deneyde su yüksekliği iki kapta eşit olmalıdır.
Sık yapılan hata: Ölçümlerin farklı çıkmasını, hipotezin desteklendiği biçiminde yorumlamak.
Cevap B.`
},
{
  id: "fen-sg-373",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir deney grubu, dört özdeş basınç sensörünü farklı kaplardaki sıvılara tabloda verilen derinliklere yerleştirmiştir. Deniz suyunun yoğunluğu tatlı suyunkinden büyüktür. Sensörlere etki eden sıvı basınçları P_{K}, P_{L}, P_{M} ve P_{N} olarak adlandırılmıştır. Sensörlerden iki tanesi seçildiğinde altı ikili oluşur: K-L, K-M, K-N, L-M, L-N ve M-N.
**Bu bilgilerle basınçları kesin olarak karşılaştırılabilen kaç ikili vardır?**`,
  gorsel: `<table class="tablo"><tr><th>Sensör</th><th>Sıvı</th><th>Derinlik (cm)</th></tr><tr><td>K</td><td>Tatlı su</td><td>10</td></tr><tr><td>L</td><td>Tatlı su</td><td>20</td></tr><tr><td>M</td><td>Deniz suyu</td><td>10</td></tr><tr><td>N</td><td>Deniz suyu</td><td>20</td></tr></table>`,
  secenekler: ["2", "3", "4", "5"],
  dogru: 3,
  hatalar: [
    "Yalnızca aynı sıvıdaki ikilileri sayma: K-L ve M-N karşılaştırılır; ama aynı derinlikteki K-M ve L-N ile köşegen K-N de karşılaştırılabilir.",
    "Aynı derinlikteki ikilileri atlama: K-L, M-N ve K-N sayılmış; aynı derinlikte yoğunluğu büyük sıvının basıncı büyük olduğundan K-M ve L-N de kesin karşılaştırılır.",
    "Köşegen ikiliyi unutma: K-N'de N hem daha derin hem daha yoğun sıvıdadır; bu ikili de kesin karşılaştırılır. Yalnız tek etkeni farklı olan dört ikili sayılmış.",
    null
  ],
  aciklama: `Sıvı basıncı derinlik ve yoğunlukla artar. İki noktayı kesin karşılaştırmak için iki etkenin aynı yönde olması ya da birinin eşit olması gerekir; etkenler ters yöndeyse sonuç bilinemez.
Adım 1: K-L: aynı sıvı, L daha derin; P_{L} > P_{K} (kesin). M-N: aynı sıvı, N daha derin; P_{N} > P_{M} (kesin).
Adım 2: K-M: aynı derinlik, M daha yoğun; P_{M} > P_{K} (kesin). L-N: aynı derinlik, N daha yoğun; P_{N} > P_{L} (kesin). K-N: N hem daha derin hem daha yoğun; P_{N} > P_{K} (kesin).
Adım 3: L-M: L daha derin ama M'nin sıvısı daha yoğundur; etkenler ters yöndedir, kesin söylenemez. Kesin karşılaştırılan ikili sayısı 5'tir.
Sık yapılan hata: Yalnızca tek etkenin farklı olduğu ikilileri sayıp iki etkenin aynı yönde olduğu köşegen ikiliyi atlamak.
Cevap D.`
},
{
  id: "fen-sg-374",
  kazanim: "F.8.3.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Burak, ucu bardaktaki meyve suyuna batırılmış bir pipetle içecek içmeye çalışıyor. Pipetin üst kısmında, Burak'ın fark etmediği küçük bir delik vardır. Burak ne kadar emerse emsin içeceğin ağzına gelmediğini görmüştür.
I. Delikten pipete giren hava, pipetin içindeki basıncın dışarıdaki açık hava basıncından küçük olmasını engeller.
II. Pipet daha uzun olsaydı içecek, delik açıkken de ağza gelirdi.
III. İçeceğin ağza gelmemesinin nedeni, deliğin bardaktaki içecek yüzeyine açık hava basıncının etki etmesini engellemesidir.
**Buna göre yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II'yi doğru sayma: delik açıkken pipetin içindeki basınç dışarıdakinden küçük olamaz; pipetin uzunluğu bunu değiştirmez.",
    "III'ü doğru sayma: açık hava basıncı bardaktaki içeceğin yüzeyine zaten etki eder. Sorun, pipetin içindeki basıncın küçülememesidir.",
    "I'i atlama: I doğrudur. II ve III ise pipetin uzunluğunu ve açık hava basıncının yüzeye etkisini yanlış yorumlayan yargılardır."
  ],
  aciklama: `Pipetle içecek içerken ağızdaki hava çekilir ve pipetin içindeki basınç küçülür. Dışarıdaki açık hava basıncı bardaktaki içecek yüzeyine etki ederek içeceği pipete iter.
Adım 1: I. yargı doğrudur. Delikten giren hava, pipetin içindeki basıncın dışarıdakinden küçük olmasını engeller; basınç farkı oluşmadığı için içecek yükselmez.
Adım 2: II. yargı yanlıştır. Delik açıkken pipetin boyunun uzun olması içerideki basıncın düşmesini sağlamaz; içecek yine ağza gelmez.
Adım 3: III. yargı yanlıştır. Açık hava basıncı bardaktaki içeceğin yüzeyine zaten etki eder. Sorun, pipetin içindeki basıncın küçülememesidir.
Sık yapılan hata: Pipetin içeceği "emdiğini" sanmak. İçeceği iten, dışarıdaki açık hava basıncıdır.
Cevap A.`
},
{
  id: "fen-sg-375",
  kazanim: "F.8.3.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Üç dalgıç aynı gün farklı sularda eğitim yapmaktadır. Dalgıçların bulunduğu yerler tabloda verilmiştir. Deniz suyunun yoğunluğu tatlı suyunkinden büyüktür. Dalgıçlara etki eden sıvı basınçları P_{K}, P_{L} ve P_{M} olarak adlandırılmıştır.
**Buna göre aşağıdaki karşılaştırmalardan hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Dalgıç</th><th>Su</th><th>Bulunduğu yer</th></tr><tr><td>K</td><td>Tatlı su gölü</td><td>Su yüzeyinden 12 m aşağıda</td></tr><tr><td>L</td><td>Deniz</td><td>Su yüzeyinden 6 m aşağıda</td></tr><tr><td>M</td><td>Deniz</td><td>Deniz 15 m derinlikte; tabandan 6 m yukarıda</td></tr></table>`,
  secenekler: [
    "P_{K} > P_{L}",
    "P_{L} > P_{K}",
    "P_{M} > P_{L}",
    "P_{K} > P_{M}"
  ],
  dogru: 2,
  hatalar: [
    "Etkenler ters yöndeyken kesin hüküm verme: K daha derindir ama L'nin suyu daha yoğundur. P_{K} ile P_{L} kesin karşılaştırılamaz.",
    "Etkenler ters yöndeyken kesin hüküm verme: L'nin suyu daha yoğundur ama K 12 m, L ise 6 m derinliktedir. Kesin söylenemez.",
    null,
    "Derinliği tabandan hesaplama: M'nin derinliği 15 − 6 = 9 m'dir; K ise 12 m derinliktedir. Ancak M'nin suyu daha yoğundur; bu yüzden P_{K} > P_{M} kesin değildir."
  ],
  aciklama: `Sıvı basıncı derinlik ve yoğunlukla artar. Derinlik su yüzeyinden ölçülür.
Adım 1: M'nin derinliğini bul: deniz 15 m derin, M tabandan 6 m yukarıda; derinlik 15 − 6 = 9 m.
Adım 2: M ile L aynı sıvıdadır (deniz suyu). M 9 m, L 6 m derinliktedir; P_{M} > P_{L} kesindir.
Adım 3: K'yı diğerleriyle karşılaştırırken tatlı suyun daha az yoğun, ama K'nın daha derin olduğunu görürsün; etkenler ters yöndedir, kesin söylenemez.
Sık yapılan hata: Derinliği tabandan yükseklik gibi okumak ya da ters yöndeki etkenlerde kesin hüküm vermek.
Cevap C.`
}
);
